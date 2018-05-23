import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'antd-mobile';
import s from '../Styles';

export default class Home extends React.Component {
  render() {
    return (
      <View style={s.home.header}>
        <Text>北京</Text>
        <Text>北京</Text>
      </View>
    );
  }
}
