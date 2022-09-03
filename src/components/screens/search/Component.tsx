import React, { useEffect, useState } from "react";
import styled from "styled-components"
import { getPopularVideos, getSearch, SearchFilters } from "../../../lib/api";
import { Content } from "../../../models/content";
import { useNavigate } from "react-router-dom";
import { useIntl } from "react-intl";
import queryString from "query-string";

import SearchQueries from "./components/SearchQueries";
import List, { Props as ListProps } from "../../content/List";
import Spinner from "../../primitives/Spinner";

const BASE_URL = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? "" : "/collectSounds/";

const SearchContainer = styled.div`
  background: ${ ({ theme }) => theme.colors.bgSecondary };
`;

const ListContainer = styled.div`
  margin: auto;
  max-width: ${ ({ theme }) => `${ theme.contentWidth }rem` };
  padding: ${ ({ theme }) => `${ theme.gaps.big }rem` };
`;

const SpinnerContainer = styled.div`
  padding: ${ ({ theme }) => `${ theme.gaps.big }rem` };
`;

const Component: React.FC = () => {
  const navigate = useNavigate();
  const intl = useIntl();

  const [queries, setQueries] = useState<SearchFilters | null>( queryString.parse( location.search ) );
  const [res, setRes] = useState<Array<Content> | null>( null );

  const handleSearch = ( queries: SearchFilters ) => {
    setQueries( queries );

    if ( /^https:\/\/www.youtube.com\/watch\?v=/.test( queries.q ) )
      navigate( `${ BASE_URL || '/' }search/video/${ queries.q.split( '=' )[1].split( '&' )[0] }` );
    if ( /^https:\/\/www.youtube.com\/playlist\?list=/.test( queries.q ) )
      navigate( `${ BASE_URL || '/' }search/playlist/${ queries.q.split( '=' )[1].split( '&' )[0] }` );

    const stringified = queryString.stringify( queries );
    window.history.pushState('', '', `${ window.location.origin }${ window.location.pathname }?${ stringified }` );

    setRes( null );
  }

  useEffect( () => {
    if ( queries )
      getSearch( queries ).then( items => setRes( items.filter( item => item ) ) );
  }, [queries]);

  useEffect( () => {
    if ( queries )
      getSearch( queries ).then( items => setRes( items.filter( item => item ) ) );
    else
      getPopularVideos().then( items => setRes( items.filter( item => item) ) );
  }, []);

  const list = res ? <List items={ res.map( item => ({
    content: item,
    callback: () => navigate( `${ BASE_URL || '/' }search/${item.type}/${item.id}` )
  })) } emptyMessage={ intl.formatMessage({ id: 'emptyRes' })}/> : <SpinnerContainer><Spinner/></SpinnerContainer>;

  return (
    <div>
      <SearchContainer>
        <SearchQueries queries={ queries } callback={handleSearch}/>
      </SearchContainer>
      <ListContainer>
        { list }
      </ListContainer>
    </div>
  );
}

export default Component;