import React, { lazy } from "react";
import ScreenWrapper from "../../../lib/screenWrapper";

import Spinner from "../../primitives/Spinner";

const Component = lazy( () => import( "./Component" ) );

const Search: React.FC = () => (
  <ScreenWrapper file="settings" skeleton={ <Spinner/> }>
    <Component/>
  </ScreenWrapper>
);

export default Search;