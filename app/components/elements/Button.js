import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight, ActivityIndicator } from 'react-native';
import { Icon } from 'react-native-elements';

import { ComponentsStyles } from './../componentsStyles';
import { Colors } from '../../utils/Colors';

const Button = (props) => (
  <TouchableHighlight underlayColor='transparent' style={ComponentsStyles.containerButton} onPress={props.actionButton}>
    {props.loading ?
      <ActivityIndicator size="small" color={Colors.spinnerWhite} />
      :
      <Text style={ComponentsStyles.labelButton}>{props.label}</Text>
    }
  </TouchableHighlight>
)


module.exports = { Button };