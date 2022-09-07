import React, { useEffect, useState } from "react";
import { connect, ConnectedProps, useDispatch } from "react-redux";
import styled from "styled-components"
import { Playlist } from "../../../models/content";
import { useIntl } from "react-intl";
import { addItem, addVideoToParent, deleteItem, getPlaylist, updatePlaylist } from "../../../redux/slices/saved";
import { getPlaylistById, getPlaylistVideos } from "../../../lib/api";
import { setMessage } from "../../../redux/slices/errorMessage";

import Header from "../../primitives/Header";
import Content from "./components/Content";
import Spinner from "../../primitives/Spinner";
import { fetchPlaylistItems } from "../../../lib/api/fetch";

const SpinnerContainer = styled.div`
  padding: ${ ({ theme }) => `${ theme.gaps.big }rem` };
`;

const mapState = ( state: any ) => {
  return {
    saved: state.saved,
  }
}

const connector = connect( mapState );

type ReduxProps = ConnectedProps<typeof connector>;

type Props = ReduxProps & {
  id: string | null;
}

const Component: React.FC<Props> = ( props: Props ) => {
  const dispatch = useDispatch();
  const intl = useIntl();

  const [playlist, setPlaylist] = useState<Playlist | null>( null );
  const [saved, setSaved] = useState<boolean>( false );

  const toggleSaved = () => {
    const current = ! saved;

    if ( playlist )
      if ( current )
        dispatch( addItem( [ playlist ] ) );
      else
        dispatch( deleteItem( [ playlist.id ] ) );
    
    setSaved( ! saved );
  }

  useEffect( () => {
    if ( ! props.id ) {
      dispatch( setMessage( intl.formatMessage({ id: 'emptyMessage' }) ) );
      return;
    }

    const savedPlaylist: Playlist | undefined = getPlaylist( props.saved, props.id );

    if ( savedPlaylist ) {
      setSaved( true );
      setPlaylist( savedPlaylist );
    } else 
      getPlaylistById( props.id ).then( items => items[0] ? setPlaylist( items[0] ) : null );
  }, []);

  useEffect( () => {
    if ( playlist && ! playlist.videos ) {
      getPlaylistVideos( playlist.id ).then( items => {
        if ( saved ) {
          if ( items ) { items.forEach( video => {
            dispatch( addVideoToParent( {
              id: playlist.id,
              video,
            }));
          })}
        }
        setPlaylist( { ...playlist, videos: items.map( video => ({ id: video.id, item: video }))});
      });
    }
  }, [playlist]);

  const content = playlist ? <Content
    playlist={ playlist }
    toggleSaved={ toggleSaved }
    saved={ saved }
  /> : <SpinnerContainer><Spinner/></SpinnerContainer>;

  return (
    <>
      <Header/>
      { content }
    </>
  );
}

export default connector( Component );