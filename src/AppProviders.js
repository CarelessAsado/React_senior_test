import React from 'react';
import { Provider } from 'react-redux';

import { getStore } from './store';

export const AppProviders = ({ children }) => (
  <Provider store={getStore()}>
    { children }
  </Provider>
);
