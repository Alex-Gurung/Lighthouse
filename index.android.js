/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
//import Card from './src/components/Card/Card'
import { StackNavigator } from 'react-navigation';
import Splash from './src/components/Splash/Splash'
export default class lighthouse extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {

    return (<Splash/>);
  }
}

class gethelpscreen extends Component {
  static navigationOptions = {
    title: 'Get Help',
  };
  render() {
    return (
      <View>
        <Text>Get some Help</Text>
      </View>
    );
  }
}

// const LighthouseApp = StackNavigator({
//   Home: { screen: lighthouse },
//   GetHelp: { screen: gethelpscreen },
// });
AppRegistry.registerComponent('lighthouse', () => lighthouse);
// AppRegistry.registerComponent('gethelpscreen', () => gethelpscreen);
// AppRegistry.registerComponent('LighthouseApp', () => LighthouseApp);
/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});*/


