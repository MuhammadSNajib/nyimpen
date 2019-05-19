import React, { Component } from 'react';
import { connect } from 'react-redux';

import Splash from './../elements/Splash'

class SplashScreen extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    setTimeout(() => {
      if (this.props.auth.accessToken === '') {
        this.props.navigation.dispatch({
          type: 'Navigation/RESET',
          index: 0,
          key: 'UnAuthNavigation',
          actions: [{
            type: 'Navigation/NAVIGATE',
            routeName: 'Login'
          }]
        })
      } else {
        this.props.navigation.dispatch({
          type: 'Navigation/RESET',
          index: 0,
          key: 'AuthNavigation',
          actions: [{
            type: 'Navigation/NAVIGATE',
            routeName: 'Home'
          }]
        })
      }
    }, 500);
  }

  render() {
    console.log('Splash', this.props.auth.accessToken)
    return <Splash />
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen)