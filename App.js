import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Expo from 'expo';
import Home from './src/containers/Home.js';
import { createStackNavigator } from 'react-navigation';

const App = createStackNavigator({
  // 对应界面名称
  MyTab: {
    screen: Home,
    navigationOptions:{
      header:null,
      headerBackTitle:null,
    }
 },
}, {
  headerMode: 'screen',
});

export default App;
