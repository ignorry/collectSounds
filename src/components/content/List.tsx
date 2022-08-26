import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Content } from "../../models/content";
import { useIntl } from "react-intl";

import Label from "../primitives/Label";
import Video from "./Video";
import Playlist from "./Playlist";
import Channel from "./Channel";
import ActionWrapper from "./ActionWrapper";

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
  const save = intl.formatMessage({ id: 'save' });

  const dispatch = useDispatch();

  const content: Array<JSX.Element> = props.items.map( item => {
    if ( item.content.type === 'video' )
      return <ActionWrapper callback={ item.callback } left={{ label: save, callback: () => dispatch( item.content ) }}><Video video={ item.content } callback={() => {}}/></ActionWrapper>
    if ( item.content.type === 'playlist' )
      return <ActionWrapper callback={ item.callback } left={{ label: save, callback: () => dispatch( item.content ) }}><Playlist playlist={ item.content } callback={() => {}}/></ActionWrapper>
    return <ActionWrapper callback={ item.callback } left={{ label: save, callback: () => dispatch( item.content ) }}><Channel channel={ item.content } callback={() => {}}/></ActionWrapper>
  });
  
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