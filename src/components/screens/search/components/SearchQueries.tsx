import React, { useState } from "react";
import styled from "styled-components";
import { useIntl } from "react-intl";
import { SearchFilters } from "../../../../lib/api";

import Input from "../../../primitives/Input";
import Collapse from "../../../primitives/Collapse";
import Dropdown from "../../../primitives/Dropdown";
import Button from "../../../primitives/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${ ({ theme }) => `${ theme.gaps.big }rem` };
  padding: ${ ({ theme }) => `${ theme.gaps.big }rem` };
  margin: auto;
  background: ${ ({ theme }) => theme.colors.bgSecondary };
  max-width: ${ ({ theme }) => `${ theme.contentWidth }rem`};
`;

const InputWrapper = styled.div`
  display: flex;
  gap: ${ ({ theme }) => `${ theme.gaps.big }rem` };

  input {
    width: 100%;
  }
`;

/**
 * @typedef Props
 * @prop {Function} callback - calls with object of filters
 * @prop {Object} queries - some object of queries, used on first render
 */
export type Props = {
  callback: Function;
  queries: any;
}

const SearchQueries: React.FC<Props> = ( props: Props ) => {
  const intl = useIntl();
  const [q, setQ] = useState<SearchFilters["q"] | null>( props.queries?.q || null );
  const [order, setOrder] = useState<SearchFilters["order"]>( props.queries?.order || 'relevance' );
  const [type, setType] = useState<SearchFilters["type"] | 'all'>( props.queries?.type || 'all' );
  const [duration, setDuration] = useState<SearchFilters["videoDuration"] | 'any'>( props.queries?.videoDuration || 'any' );

  const handleSearch = () => {
    const filters: SearchFilters = {
      order: order,
    };
    if ( q ) filters.q = q;
    if ( type && type !== 'all' ) filters.type = type;
    if ( duration && duration !== 'any' ) filters.videoDuration = duration;

    props.callback( filters );
  };

  return (
    <Container>
      <InputWrapper>
        <Input value={ q } callback={ setQ } placeholder={ intl.formatMessage({ id: 'input' }) }/>
        <Button callback={ handleSearch } pic="search" active/>
      </InputWrapper>
      <Collapse label={ intl.formatMessage({ id: 'filters' })} icon="filters" dontHandleOutside>
        <Dropdown 
          callback={ setOrder }
          activeVal={ intl.formatMessage({ id: order }) } 
          values={[
            intl.formatMessage({ id: 'date' }),
            intl.formatMessage({ id: 'rating' }),
            intl.formatMessage({ id: 'relevance' }),
            intl.formatMessage({ id: 'title' }),
            intl.formatMessage({ id: 'videoCount' }),
            intl.formatMessage({ id: 'viewCount' }),
          ]}
        />
        <Dropdown 
          callback={ setType } 
          activeVal={ intl.formatMessage({ id: type }) } 
          values={[
            intl.formatMessage({ id: 'all' }),
            intl.formatMessage({ id: 'video' }),
            intl.formatMessage({ id: 'playlist' }),
            intl.formatMessage({ id: 'channel' }),
          ]}
        />
        <Dropdown 
          callback={ setDuration}
          activeVal={ intl.formatMessage({ id: duration }) } 
          values={[
            intl.formatMessage({ id: 'any' }),
            intl.formatMessage({ id: 'long' }),
            intl.formatMessage({ id: 'medium' }),
            intl.formatMessage({ id: 'short' }),
          ]}
        />
      </Collapse>
    </Container>
  )
};

export default SearchQueries;