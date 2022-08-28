import React, { useEffect, useState } from "react";
import styled from "styled-components"
import { SearchQueries, searchSaved } from "../../../lib/redux/searchSaved";
import { Content } from "../../../models/content";
import { useNavigate } from "react-router-dom";
import { useIntl } from "react-intl";
import queryString from "query-string";

import Filters from "./components/Filters";
import List, { Props as ListProps } from "../../content/List";
import Spinner from "../../primitives/Spinner";
import Tabs from "../../primitives/Tabs";
import { useDispatch } from "react-redux";

const SearchContainer = styled.div`
  background: ${ ({ theme }) => theme.colors.bgSecondary };
  padding-bottom: ${ ({ theme }) => `${ theme.font.primary.size*1.1 + theme.gaps.small*2 }rem`};
  margin-bottom: ${ ({ theme }) => `-${ theme.font.primary.size*1.1 + theme.gaps.small*2 }rem`};
`;

const TabsContainer = styled.div`
  max-width: ${ ({ theme }) => `${ theme.contentWidth }rem`};
  width: 100%;
  margin: auto;
`;

const SpinnerContainer = styled.div`
  padding: ${ ({ theme }) => `${ theme.gaps.big }rem` };
`;

const Component: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const intl = useIntl();
  const queryStr = queryString.parse( location.search );

  const [isVideos, setIsVideos] = useState<boolean>( queryStr.isVideos === 'true' );
  const [queries, setQueries] = useState<SearchQueries | null>( 
    Object.fromEntries( Object.entries( queryStr ).filter( item => item[0] !== 'isVideos' && item[0] !== 'index' )));
  const [res, setRes] = useState<Array<Content> | null>( null );

  const handleSearch = ( queries: SearchQueries ) => {
    setQueries( queries );

    if ( /^https:\/\/www.youtube.com\/watch\?v=/.test( queries.q ) )
      navigate( `/saved/video/${ queries.q.split( '=' )[1].split( '&' )[0] }` );
    if ( /^https:\/\/www.youtube.com\/playlist\?list=/.test( queries.q ) )
      navigate( `/saved/playlist/${ queries.q.split( '=' )[1].split( '&' )[0] }` );

    const stringified = queryString.stringify( { ...queries, isVideos } );
    window.history.pushState('', '', `${ window.location.origin }${ window.location.pathname }?${ stringified }` );

    setRes( null );
  }

  const tab = ( index: number ) => {
    setIsVideos( index ? true : false );
    const stringified = queryString.stringify( { ...queries, isVideos: index ? true : false } );
    window.history.pushState('', '', `${ window.location.origin }${ window.location.pathname }?${ stringified }` );
  };

  useEffect( () => {
    const res: any = isVideos ? dispatch( searchSaved( { ...queries, type: 'video' } ) as any )
      : dispatch( searchSaved( queries ) as any );

    setRes( res );
  }, [queries, isVideos]);

  const list = res ? <List items={ res.map( item => ({
    content: item,
    callback: () => navigate( `/saved/${item.type}/${item.id}` )
  })) } emptyMessage={ intl.formatMessage({ id: 'emptyRes' })}/> : <SpinnerContainer><Spinner/></SpinnerContainer>;

  const tabs = [
    {
      label: intl.formatMessage({ id: 'all' }),
      content: list
    },
    {
      label: intl.formatMessage({ id: 'videos' }),
      content: list
    }
  ];

  return (
    <div>
      <SearchContainer>
        <Filters queries={ queries } callback={ handleSearch } isVideo={ isVideos }/>
      </SearchContainer>
      <TabsContainer>
        <Tabs tabs={ tabs } onChange={ tab } active={ isVideos ? 1 : 0 }/>
      </TabsContainer>
    </div>
  );
}

export default Component;