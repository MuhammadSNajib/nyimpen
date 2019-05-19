import { StyleSheet, Dimensions, Platform } from 'react-native'

import { Colors } from '../utils/Colors';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_WIDTH_MARGIN = SCREEN_WIDTH - 60
const WIDTH_UNIT_TAB_BAR = SCREEN_WIDTH / 5
const status_bar_margin_ios = 20

export const ComponentsStyles = StyleSheet.create({
  containerButton: {
    width: '100%',
    height: 45,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.btnSuccess
  },
  labelButton: {
    color: Colors.white,
    fontSize: 17,
    fontFamily: 'Roboto-Thin',
    fontWeight: '500',
  },
  contentTabBar: {
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderColor: '#d1d1d1',
    width: '100%',
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containUnitTabBar: {
    width: WIDTH_UNIT_TAB_BAR,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10
  },
  containerHeaderMain: {
    width: '100%',
    height: 60,
    backgroundColor: '#fafafa',
    borderBottomWidth: 1,
    borderColor: '#b4b6b7',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitleHeader: {
    fontFamily: 'Billabong',
    fontSize: 30,
    color: Colors.black,
    width: '100%',
    textAlign: 'center',
    marginTop: 15,
  }
})