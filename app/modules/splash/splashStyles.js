import { StyleSheet, Dimensions, Platform } from 'react-native'

import { Colors } from './../../utils/Colors'

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

export const SplashStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.content
  },
  imgBrand: {
    width: 200,
    height: 150,
    resizeMode: 'contain'
  }
})