import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';

import { RootNavigation } from './../../app/navigators/AppNavigator';

import auth from './../modules/auth/authReducer';

const nav = createNavigationReducer(RootNavigation);

const appReducer = combineReducers({
  nav,
  auth
});

export default appReducer;