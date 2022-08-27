import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Content } from "../../models/content";
import { useIntl } from "react-intl";

import Label from "../primitives/Label";
import Video from "./Video";
import Playlist from "./Playlist";
import Channel from "./Channel";
import ActionWrapper from "./ActionWrapper";
import { addItem, deleteItem } from "../../redux/slices/saved";
import { addItem as addItemToQueue } from "../../redux/slices/queue";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${ ({ theme }) => `${ theme.gaps.big }rem` };
`;

const Message = styled.div`
  display: flex;
  justify-content: center;
  padding: ${ ({ theme }) => `${ theme.gaps.big }rem` };
`;

export type Item = {
  content: Content;
  callback: Function;
}

/**
 * @typedef Props
 * @prop {Array<Item>} items - items to be displayed
 * @prop {string} emptyMessage - display if itmes empty
 */
export type Props = {
  items: Array<Item>;
  emptyMessage: string;
}

const List: React.FC<Props> = ( props: Props ) => {
  const intl = useIntl();
  const save = intl.formatMessage({ id: 'save' }) || '';
  const addToQueue = intl.formatMessage({ id: 'addToQueue' }) || '';
  const del = intl.formatMessage({ id: 'delete' }) || '';

  const dispatch = useDispatch();

  const [hidden, setHidden] = useState<Array<string>>( [] );

  const addHidden = ( id: string ) => setHidden( [...hidden, id] );

  const content: Array<JSX.Element> =
    props.items.map( item => hidden.includes( item.content.id ) ? undefined :
      window.location.pathname.split( '/' )[1] === 'search' ? 
        <ActionWrapper callback={ item.callback } left={{ label: save, callback: () => dispatch( addItem([ item.content ]) ) }}>
          { item.content.type === 'video' ?
            <Video video={ item.content } callback={() => {}}/>
          : item.content.type === 'playlist' ?
            <Playlist playlist={ item.content } callback={() => {}}/>
          : <Channel channel={ item.content } callback={() => {}}/> }
        </ActionWrapper>
      :
        <ActionWrapper callback={ item.callback } 
          left={{ label: addToQueue, callback: () => dispatch( addItemToQueue( item.content.id ) ) }}
          right={{ label: del, callback: () => { dispatch( deleteItem([ item.content.id ]) ); addHidden( item.content.id ) }}}
        >
          { item.content.type === 'video' ?
            <Video video={ item.content } callback={() => {}}/>
          : item.content.type === 'playlist' ?
            <Playlist playlist={ item.content } callback={() => {}}/>
          : <Channel channel={ item.content } callback={() => {}}/> }
        </ActionWrapper>
    );
  
  return (
    <Div>
      {content.length !== 0 ?
        content :
        <Message>
          <Label text={ props.emptyMessage }/>
        </Message>
      }
    </Div>
  );
}

export default List;