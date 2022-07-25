import React from "react";
import { createRoot } from 'react-dom/client';

import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'

import store, { persistor } from "./redux/index";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      
    </PersistGate>
  </Provider>
);