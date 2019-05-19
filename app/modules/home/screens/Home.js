//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, Image, Dimensions, findNodeHandle } from 'react-native';
import { Avatar } from 'react-native-elements';
import { connect } from 'react-redux';
import { BlurView } from 'react-native-blur';

import { Colors } from './../../../utils/Colors';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_WIDTH_MARGIN = SCREEN_WIDTH - 30
// create a component
class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { viewRef: null };
  }

  imageLoaded() {
    this.setState({ viewRef: findNodeHandle(this.backgroundImage) });
  }

  render() {
    console.log('Home', this.props.auth.accessToken)
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={'#ededed'} barStyle="dark-content" />


        <View style={{
          // backgroundColor: 'rgba(136, 193, 247, 0.49)',
          borderBottomColor: Colors.gray,
          borderBottomWidth: 1
        }} >
          <Image style={{
            width: '100%',
            height: 150,
          }}
            ref={(img) => { this.backgroundImage = img; }}
            source={require('./../../../assets/img/bg.jpg')}
            onLoadEnd={this.imageLoaded.bind(this)}
          />
        </View>


        <Avatar
          rounded
          source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg" }}
          activeOpacity={0.7}
          height={120}
          width={120}
          containerStyle={{
            backgroundColor: 'red',
            zIndex: 1,
            alignSelf: 'center',
            marginTop: -90,
          }}
          avatarStyle={{
            borderWidth: 5,
            borderColor: Colors.white
          }} />

        <View style={{
          alignItems: 'center',
          marginTop: 10
        }}>
          <Text style={{
            fontSize: 20,
            color: Colors.black
          }}>Muhammad Syukron Najib</Text>
          <Text style={{
            fontSize: 18,
            color: Colors.black,
            fontWeight: '500'
          }}>@ms.najib</Text>
        </View>

      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: Colors.content,
  },
  absolute: {
    position: "absolute",
    top: 0, left: 0, bottom: 0, right: 0,
  },
});

//make this component available to the app
function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
