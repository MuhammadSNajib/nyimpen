import React, { Component } from 'react';
import { View, Image, StatusBar } from 'react-native';

import { SplashStyles } from './../splashStyles';

const Splash = () => (
  <View style={SplashStyles.container}>
    <StatusBar hidden={true} />
    <Image source={require('./../../../assets/img/logo-brand.png')} style={SplashStyles.imgBrand} />
  </View>
)

module.exports = Splash;