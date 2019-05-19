import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import storage from 'redux-persist/lib/storage';

import appReducer from './app/redux/reducers';
import { AppNavigator, middleware } from './app/navigators/AppNavigator';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['auth']
};

const rootReducer = persistReducer(persistConfig, appReducer);

const store = createStore(rootReducer, applyMiddleware(middleware));
const persistor = persistStore(store);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    );
  }
}