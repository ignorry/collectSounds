import React, { useEffect, useState } from "react";
import { connect, ConnectedProps, useDispatch } from "react-redux";
import styled from "styled-components"
import { SearchQueries, searchSaved } from "../../../lib/redux/searchSaved";
import { Content } from "../../../models/content";
import { useNavigate } from "react-router-dom";
import { useIntl } from "react-intl";
import queryString from "query-string";

import Header from "./components/Header";
import Spinner from "../../primitives/Spinner";
import Tabs from "../../primitives/Tabs";
import QueueList from "../../content/QueueList";
import { getVideo } from "../../../redux/slices/saved";

const List = styled.div`
  max-width: ${ ({ theme }) => `${ theme.contentWidth }rem`};
  width: 100%;
  margin: auto;
`;

const mapState = ( state: any ) => {
  return {
    saved: state.saved,
    queue: state.queue.data,
  }
}

const connector = connect( mapState );

type Props = ConnectedProps<typeof connector>;

const Component: React.FC<Props> = ( props: Props ) => {
  const intl = useIntl()
  const dispatch = useDispatch();

  const items = props.queue.map( ( item: any ) => ({ content: dispatch( getVideo( props.saved, item ) ), callback: () => {} }) );

  return (
    <div>
      <Header />
      <List>
        <QueueList items={ items } emptyMessage={ intl.formatMessage({ id: 'emptyList' }) }/>
      </List>
    </div>
  );
}

export default connector( Component );