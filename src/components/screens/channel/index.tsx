import React, { lazy } from "react";
import ScreenWrapper from "../../../lib/screenWrapper";
import { useParams } from "react-router-dom";

import Spinner from "../../primitives/Spinner";

const Component = lazy( () => import( "./Component" ) );

const Channel = () => {
  const params = useParams();

  return (
    <ScreenWrapper file="channel" skeleton={ <Spinner/> }>
      <Component id={ params.id || null }/>
    </ScreenWrapper>
  );
}

export default Channel;