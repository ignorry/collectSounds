import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Content } from "../../models/content";
import { useIntl } from "react-intl";

import Label from "../primitives/Label";
import QueueVideo from "./QueueVideo";
import Icon from "../primitives/Icon";
import { setAll, deleteItem, setCurrent } from "../../redux/slices/queue";

const Div = styled.div`
  padding: ${ ({ theme }) => `${ theme.gaps.big/2 }rem 0`};
`;

const Message = styled.div`
  display: flex;
  justify-content: center;
  padding: ${ ({ theme }) => `${ theme.gaps.big }rem` };
`;

const DragItem = styled.div`
  position: relative;
`;

const DragButton = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 15%;
  z-index: 10;
`;

const getItemStyle = ( isDragging: any, draggableStyle: any ) => ({
  userSelect: "none",
  ...draggableStyle
});

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
  const del = intl.formatMessage({ id: 'delete' }) || '';

  const dispatch = useDispatch();

  const [hidden, setHidden] = useState<Array<string>>( [] );

  const addHidden = ( id: string ) => setHidden( [...hidden, id] );

  const reorder = (list: any, startIndex: any, endIndex: any) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
  };

  const onDragEnd = ( result: any ) => {
    if (!result.destination)
      return;

    const newItems = reorder(
      props.items.map( item => item.content.id ),
      result.source.index,
      result.destination.index
    );

    console.log( 'new items', newItems );

    dispatch( setAll( newItems as Array<string> ) );
  }

  const content: Array<JSX.Element> =
    props.items.map( ( item, index ) => hidden.includes( item.content.id ) ? undefined :
      item.content.type === 'video' ?
        <Draggable key={item.content.id} draggableId={item.content.id} index={index}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              style={getItemStyle(
                snapshot.isDragging,
                provided.draggableProps.style
              )}
            >
              <DragItem>
                { item.content.type === 'video' ?
                  <QueueVideo video={ item.content } callback={() => {}} deleteCallback={() => dispatch( deleteItem( item.content.id ))}/>  
                : null }
                <DragButton onClick={ () => dispatch( setCurrent( item.content.id ) ) }/>
              </DragItem>
            </div>
          )}
        </Draggable>
      : null );

  return (
    <Div>
      <DragDropContext onDragEnd={ onDragEnd }>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {content.length !== 0 ?
                  content :
                  <Message>
                    <Label text={ props.emptyMessage }/>
                  </Message>
                }
                {provided.placeholder}
              </div>
            )}
        </Droppable>
      </DragDropContext>
    </Div>
  );
}

export default List;