import React from 'react';
import { View, Platform } from 'react-native';
import { connect } from 'react-redux';
import { createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator, createSwitchNavigator, TabNavigator } from 'react-navigation';
import { reduxifyNavigator, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

import { HeaderHome } from './../components/elements/Header';
import { Colors } from './../utils/Colors';

import TabBarComponent from './../components/elements/TabBarComponent';

import SplashScreen from './../modules/splash/screens/SplashScreen';
import Login from './../modules/auth/screens/Login';
import Home from './../modules/home/screens/Home';

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

const UnAuthNavigation = createStackNavigator({
  Login: { screen: Login },
}, {
    initialRouteName: 'Login',
    headerMode: 'none'
  })


const AuthNavigation = createStackNavigator({
  Home: { screen: Home },
}, {
    initialRouteName: 'Home',
    headerMode: 'none'
  })


const RouteConfigs = {
  SplashScreen: { screen: SplashScreen },
  UnAuthNavigation: { screen: UnAuthNavigation },
  AuthNavigation: { screen: AuthNavigation }
}

const SwitchNavigatorConfig = {
  initialRouteName: 'SplashScreen'
}

const RootNavigation = createSwitchNavigator(RouteConfigs, SwitchNavigatorConfig);

const AppWithNavigationState = reduxifyNavigator(RootNavigation, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigation, AppNavigator, middleware };