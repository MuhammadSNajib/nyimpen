import React from 'react'
import { View, TouchableOpacity, TouchableHighlight, Keyboard } from 'react-native'
import { Icon } from 'react-native-elements';
// import { createIconSetFromFontello } from 'react-native-vector-icons';

// import fontello from './../../assets/fonts/fontello/config.json';

import { ComponentsStyles } from './../componentsStyles';

// const Fontello = createIconSetFromFontello(fontello);

class TabBarComponent extends React.PureComponent {

  constructor(props) {
    super(props)

    this.keyboardWillShow = this.keyboardWillShow.bind(this)
    this.keyboardWillHide = this.keyboardWillHide.bind(this)

    this.state = {
      isVisible: true
    }
  }

  componentWillMount() {
    this.keyboardWillShowSub = Keyboard.addListener('keyboardDidShow', this.keyboardWillShow)
    this.keyboardWillHideSub = Keyboard.addListener('keyboardDidHide', this.keyboardWillHide)
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove()
    this.keyboardWillHideSub.remove()
  }

  keyboardWillShow = event => {
    this.setState({
      isVisible: false
    })
  }

  keyboardWillHide = event => {
    this.setState({
      isVisible: true
    })
  }

  _navigateMainScreen(item) {
    this.props.navigation.navigate(item.routeName)
  }

  render() {
    console.log(this.props)
    const { inactiveTintColor, activeTintColor, navigation } = this.props;
    return this.state.isVisible ?
      <View style={ComponentsStyles.contentTabBar}>
        {this.props.navigation.state.routes.map((item, index) => (
          <TouchableHighlight key={index} underlayColor={'transparent'} style={ComponentsStyles.containUnitTabBar} onPress={() => this._navigateMainScreen(item)}>
            {item.key == 'Home' ?
              <Icon name="instagram" type="font-awesome" size={30} color={navigation.state.index == 0 ? activeTintColor : inactiveTintColor} />
              :
              <Icon name="heart-empty" size={30} color={navigation.state.index == 4 ? activeTintColor : inactiveTintColor} />
            }
          </TouchableHighlight>
        ))}
      </View>
      :
      null
  }
}

export default TabBarComponent