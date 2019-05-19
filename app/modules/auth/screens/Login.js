//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, StatusBar } from 'react-native';
import { Avatar } from 'react-native-elements';
import { connect } from 'react-redux';

import LinearGradient from 'react-native-linear-gradient';
import InstagramLogin from 'react-native-instagram-login';
import CONFIG from './../../../utils/config.json'

import { getAccessToken } from './../authAction';
import { Colors } from './../../../utils/Colors';
import { Button } from './../../../components/elements/Button';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

// create a component
class Login extends Component {

  constructor(props) {
    super(props)
  }

  componentDidUpdate() {
    if (this.props.auth.accessToken != '') {
      this.props.navigation.navigate('Home')
    }
  }

  render() {
    console.log('Login', this.props.auth.accessToken)
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={'#ededed'} barStyle="dark-content" />
        <View style={styles.content}>
          <Image source={require('./../../../assets/img/logo-brand.png')} style={styles.imgBrand} />
          <View style={styles.subView}>
            <Avatar
              large
              rounded
              icon={{ name: 'instagram', type: 'font-awesome' }}
              activeOpacity={0.7} />
            <Text style={styles.textInfo}>Hi, <Text style={styles.textInfoBold}>Instagramers</Text> yang budiman. 😁 </Text>
          </View>
          <Button label='Log In' loading={false} actionButton={() => this.refs.instagramLogin.show()} />
        </View>
        <View style={styles.tabFooter} >
          <Text style={styles.textInfoFooter}>Follow me on <Text style={styles.textInfoFooterBold} onPress={() => alert('Follow')}>Instagram.</Text></Text>
        </View>
        <InstagramLogin
          ref='instagramLogin'
          clientId={CONFIG.CLIENT_ID}
          redirectUrl={CONFIG.REDIRECT_URL}
          hideCloseButton={true}
          scopes={['public_content', 'follower_list']}
          onLoginSuccess={(token) => this.props.getAccessToken(token)}
          onLoginFailure={(data) => console.log(data)}
          styles={styles} />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.content,
  },
  content: {
    marginHorizontal: 35,
    alignItems: 'center',
  },
  imgBrand: {
    width: 150,
    height: 70,
    resizeMode: 'contain'
  },
  subView: {
    marginTop: 50,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 110
  },
  textInfo: {
    fontSize: 18,
    color: Colors.gray
  },
  textInfoBold: {
    color: Colors.black,
    fontWeight: '500'
  },
  tabFooter: {
    backgroundColor: 'transparent',
    borderTopWidth: 1,
    borderColor: '#d1d1d1',
    width: '100%',
    height: 45,
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInfoFooter: {
    fontSize: 15,
    color: Colors.gray
  },
  textInfoFooterBold: {
    color: Colors.black,
    fontWeight: '500'
  },
  contentWarp: {
    paddingTop: -20,
  },
  modalWarp: {
  },
});

//make this component available to the app


function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAccessToken: (access_token) => dispatch(getAccessToken(access_token)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
