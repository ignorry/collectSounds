import React, { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getAllTags } from "../../lib/redux/getAllTags";
import { Content } from "../../models/content";
import { updateVideo, updatePlaylist, updateChannel } from "../../redux/slices/saved";
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";

import SecondaryToggle from "./SecondaryToggle";
import ToggleButton from "./ToggleButton";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${ ({ theme }) => `${ theme.gaps.small }rem` };
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  gap: ${ ({ theme }) => `${ theme.gaps.small }rem` };
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: ${ ({ theme }) => `${ theme.gaps.big }rem` };
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${ ({ theme }) => `${ theme.gaps.small }rem` };
`;

const Collapse = styled.div<{ visible: boolean }>`
  display: ${ props => props.visible ? 'flex' : 'none' };
  flex-direction: column;
  gap: ${ ({ theme }) => `${ theme.gaps.small }rem` };
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${ ({ theme }) => `${ theme.gaps.small }rem` };
  
  input {
    width: 100%;
  }
`;

/**
 * @typedef Props
 * @prop {Content} item
 * @prop {Array<string>} [activeTags] - active tags
 */
export type Props = {
  item: Content;
}

const AddTag: React.FC<Props> = ( props: Props ) => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const tags = dispatch( getAllTags() as any);

  const [savedTags, setSavedTags] = useState<Array<string>>( props.item.tags || [] );
  const [open, setOpen] = useState<boolean>( false );
  const [newTag, setNew] = useState<string>( '' );

  const handleDelete = ( tag: string ) => {
    const payload = {
      id: props.item.id,
      tags: savedTags.filter( item => item !== tag ),
    }

    setSavedTags( savedTags.filter( item => item !== tag ) );

    if ( props.item.type === 'video' )
      dispatch( updateVideo( payload ) );
    if ( props.item.type === 'playlist' )
      dispatch( updatePlaylist( payload ) );
    if ( props.item.type === 'channel' )
      dispatch( updateChannel( payload ) );
  }

  const handleSave = ( tag: string ) => {
    const payload = {
      id: props.item.id,
      tags: [ ...savedTags, tag ],
    }

    setSavedTags( [ ...savedTags, tag ] );

    if ( props.item.type === 'video' )
      dispatch( updateVideo( payload ) );
    if ( props.item.type === 'playlist' )
      dispatch( updatePlaylist( payload ) );
    if ( props.item.type === 'channel' )
      dispatch( updateChannel( payload ) );
  }

  const handleSaveNew = () => {
    handleSave( newTag );
  }

  return (
    <Container>
      <Main>
        <Left>
          <Label text="#"/>
          <TagsContainer>
            { savedTags && savedTags.map( ( tag: any ) =>
              <SecondaryToggle text={tag} callback={ () => handleDelete( tag ) } active/>
            )}
          </TagsContainer>
        </Left>
        <ToggleButton pic="add" callback={() => setOpen( ! open )} active={open}/>
      </Main>
      <Collapse visible={ open }>
        <TagsContainer>
          { tags && tags.filter( ( tag: any ) => savedTags && ! savedTags.includes( tag ) ).map( ( tag: any ) =>
            <SecondaryToggle text={tag} callback={ () => handleSave( tag ) } active={false}/>
          )}
        </TagsContainer>
        <InputWrapper>
          <Input value={ newTag } callback={ setNew } placeholder={ intl.formatMessage({ id: 'newTag' }) }/>
          <Button callback={ handleSaveNew } pic="add"/>
        </InputWrapper>
      </Collapse>
    </Container>
  )
};

export default AddTag;