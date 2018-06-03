import { Picker, List } from 'antd-mobile';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import area from '../constants/area.json';
area.filter(v=>{
  v.value = v.value + '';
  v.children.filter(children=>{
    children.children = [];
    children.value = v.value + '';

  })
})

export default class Test extends React.Component {

  static defaultProps = {

  }

  constructor(props){
    super(props);
    this.state = {

    };
  }



  render() {
    return (<View>
      <Text>465465465
      </Text>
      <List style={{ backgroundColor: 'white' }} className="picker-list">
        <Picker extra="请选择(可选)"
          data={area}
          cols={2}
          cascade={true}
          onPickerChange={(e)=>console.log(e)}
          title="Areas"
          onOk={e => console.log('ok', e)}
          onDismiss={e => console.log('dismiss', e)}
        >
          <List.Item arrow="horizontal">Multiple & cascader</List.Item>
        </Picker>
      </List>
    </View>);
  }
}
