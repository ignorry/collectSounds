import React, { useEffect, useState } from "react";
import { connect, ConnectedProps, useDispatch } from "react-redux";
import styled from "styled-components"
import { Video } from "../../../models/content";
import { useIntl } from "react-intl";
import { addItem, deleteItem, getVideo } from "../../../redux/slices/saved";
import { getVideoById } from "../../../lib/api";
import { setMessage } from "../../../redux/slices/errorMessage";

import Header from "../../primitives/Header";
import Content from "./components/Content";
import Spinner from "../../primitives/Spinner";

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

  const [video, setVideo] = useState<Video | null>( null );
  const [saved, setSaved] = useState<boolean>( false );

  const toggleSaved = () => {
    const current = ! saved;

    if ( video )
      if ( current )
        dispatch( addItem( [ video ] ) );
      else
        dispatch( deleteItem( [ video.id ] ) );
    
    setSaved( ! saved );
  }

  useEffect( () => {
    if ( ! props.id ) {
      dispatch( setMessage( intl.formatMessage({ id: 'emptyMessage' }) ) );
      return;
    }

    const savedVideo: Video | undefined = getVideo( props.saved, props.id );

    if ( savedVideo ) {
      setSaved( true );
      setVideo( savedVideo );
    } else 
      getVideoById( props.id ).then( items => items[0] ? setVideo( items[0] ) : null );
  }, [props.saved]);

  const content = video ? <Content
    video={ video }
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