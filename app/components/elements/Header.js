import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Platform } from 'react-native';
import { Header } from "react-navigation";
import { Icon, SearchBar } from 'react-native-elements';

import { ComponentsStyles } from './../componentsStyles';

const HeaderHome = (props) => {
  return (
    <View>
      <View style={ComponentsStyles.containerHeaderMain}>
        <Text style={ComponentsStyles.textTitleHeader}>{props.title}</Text>
      </View>
    </View>
  )
}

module.exports = { HeaderHome };