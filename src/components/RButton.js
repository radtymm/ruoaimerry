import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import s from '../Styles';

export default class RButton extends React.Component {
  static defaultProps = {
    style:{}, // TouchableOpacity的样式
    styleText:{}, // text的样式
    onPress:()=>{}
  }

  constructor(props){
    super(props);
    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {
    const props = this.props;
    return (
      <TouchableHighlight
        onPress={()=>props.onPress()}
        style={props.style}>
        {
          (typeof props.children == 'string') ? <Text style={props.styleText}>北京</Text> : props.children
        }
      </TouchableHighlight>
    );
  }
}
