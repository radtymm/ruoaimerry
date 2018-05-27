import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Expo from 'expo';
import Home from './src/containers/Home.js';
import Wedding from './src/containers/Wedding.js';
import { createStackNavigator } from 'react-navigation';

const App = createStackNavigator({
  // 对应界面名称
  Home: {
    screen: Home,
    navigationOptions:{
      header:null,
      headerBackTitle:null,
    }
  },
  Wedding: {
    screen: Wedding,
    navigationOptions:{
      header:null,
    }
  },
}, {
  headerMode: 'screen',
});

export default App;
