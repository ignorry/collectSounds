import React, { lazy } from "react";
import ScreenWrapper from "../../../lib/screenWrapper";

import Spinner from "../../primitives/Spinner";

const Component = lazy( () => import( "./Component" ) );

const Root: React.FC = () => (
  <ScreenWrapper file="root" skeleton={ <Spinner/> }>
    <Component/>
  </ScreenWrapper>
);

export default Root;