import React, { useEffect, useState } from "react";
import { connect, ConnectedProps, useDispatch } from "react-redux";
import styled from "styled-components"
import { Channel, Playlist } from "../../../models/content";
import { useIntl } from "react-intl";
import { addItem, addPlaylistToParent, addVideoToParent, deleteItem, getChannel, getPlaylist, updatePlaylist } from "../../../redux/slices/saved";
import { getChannelById, getChannelPlaylists, getChannelVideos, getPlaylistById, getPlaylistVideos } from "../../../lib/api";
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

  const [channel, setChannel] = useState<Channel | null>( null );
  const [saved, setSaved] = useState<boolean>( false );

  const toggleSaved = () => {
    const current = ! saved;

    if ( channel )
      if ( current )
        dispatch( addItem( [ channel ] ) );
      else
        dispatch( deleteItem( [ channel.id ] ) );
    
    setSaved( ! saved );
  }

  useEffect( () => {
    if ( ! props.id ) {
      dispatch( setMessage( intl.formatMessage({ id: 'emptyMessage' }) ) );
      return;
    }

    const savedChannel: Channel | undefined = getChannel( props.saved, props.id );

    if ( savedChannel ) {
      setSaved( true );
      setChannel( savedChannel );
    } else 
      getChannelById( props.id ).then( items => items[0] ? setChannel( items[0] ) : null );
  }, []);

  useEffect( () => {
    if ( channel && ! channel.videos ) {
      getChannelVideos( channel.id ).then( items => {
        if ( saved ) {
          if ( items ) { items.forEach( video => {
            dispatch( addVideoToParent( {
              id: channel.id,
              video,
            }));
          })}
        }
        setChannel( { ...channel, videos: items.map( video => ({ id: video.id, item: video }))});
      });
    }

    if ( channel && ! channel.playlists ) {
      getChannelPlaylists( channel.id ).then( items => {
        if ( saved ) {
          if ( items ) { items.forEach( playlist => {
            dispatch( addPlaylistToParent( {
              id: channel.id,
              playlist,
            }));
          })}
        } else {
          setChannel( { ...channel, playlists: items.map( video => ({ id: video.id, item: video }))});
        }
      });
    }
  }, [channel]);

  const content = channel ? <Content
    channel={ channel }
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