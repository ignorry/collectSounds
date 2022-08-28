import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useIntl } from "react-intl";
import { SearchQueries } from "../../../../lib/redux/searchSaved";

import Input from "../../../primitives/Input";
import Collapse from "../../../primitives/Collapse";
import Dropdown from "../../../primitives/Dropdown";
import Tags from "./Tags";

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
 * @prop {boolean} isVideo - is video tab active
 */
export type Props = {
  callback: Function;
  queries: any;
  isVideo: boolean;
}

const Filters: React.FC<Props> = ( props: Props ) => {
  const intl = useIntl();
  const [q, setQ] = useState<SearchQueries["q"] | null>( props.queries?.q || null );
  const [order, setOrder] = useState<SearchQueries["order"]>( props.queries?.order || 'addition' );
  const [type, setType] = useState<SearchQueries["type"] | 'all'>( props.queries?.type || 'all' );
  const [duration, setDuration] = useState<SearchQueries["duration"] | 'any'>( props.queries?.videoDuration || 'any' );
  const [tag, setTag] = useState<SearchQueries["tag"] | null>( props.queries?.tag || null );

  useEffect( () => {
    const filters: SearchQueries = {
      order: order,
    };
    if ( q ) filters.q = q;
    if ( type && type !== 'all' ) filters.type = type;
    if ( props.isVideo ) filters.type = 'video';
    if ( duration && duration !== 'any' ) filters.duration = duration;
    if ( tag ) filters.tag = tag;

    props.callback( filters );
  }, [q, order, type, duration, tag]);

  return (
    <Container>
      <InputWrapper>
        <Input value={ q } callback={ setQ } placeholder={ intl.formatMessage({ id: 'input' }) }/>
      </InputWrapper>
      <Collapse label={ intl.formatMessage({ id: 'filters' })} icon="filters" dontHandleOutside>
        <Dropdown 
          callback={ ( s: any ) => setOrder( s.toLowerCase() ) }
          activeVal={ intl.formatMessage({ id: order }) } 
          values={[
            intl.formatMessage({ id: 'date' }),
            intl.formatMessage({ id: 'addition' }),
            intl.formatMessage({ id: 'title' }),
          ]}
        />
        { props.isVideo ? null :
          <Dropdown 
            callback={ ( s: any ) => setType( s.toLowerCase() ) } 
            activeVal={ intl.formatMessage({ id: type }) } 
            values={[
              intl.formatMessage({ id: 'all' }),
              intl.formatMessage({ id: 'video' }),
              intl.formatMessage({ id: 'playlist' }),
              intl.formatMessage({ id: 'channel' }),
            ]}
          />
        }
        <Dropdown 
          callback={ ( s: any ) => setDuration( s.toLowerCase() ) }
          activeVal={ intl.formatMessage({ id: duration }) } 
          values={[
            intl.formatMessage({ id: 'any' }),
            intl.formatMessage({ id: 'long' }),
            intl.formatMessage({ id: 'medium' }),
            intl.formatMessage({ id: 'short' }),
          ]}
        />
        <Tags
          callback={ ( s: any ) => s === tag ? setTag( null ) : setTag( s ) }
          active={ tag }
        />
      </Collapse>
    </Container>
  )
};

export default Filters;