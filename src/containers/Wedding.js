import React from 'react';
import { StyleSheet, Text, Image, View, ScrollView } from 'react-native';
import s from '../Styles';
import RButton from '../components/RButton';

export default class Wedding extends React.Component {
  static defaultProps = {

  }

  constructor(props){
    super(props);
    this.state = {
      tab:1,
    };
  }

  componentDidMount() {

  }

  renderBusiness(){
    return (
      <View>
      </View>
    );
  }

  render() {
    const {navigate, goBack} = this.props.navigation;
    const {tab} = this.state;
    return (
      <View>
        <View style={s.common.topView}/>
        <View style={s.common.header}>
          <RButton onPress={()=>{goBack()}}>
            <Image
              source={require('../images/icon_08.png')}
              style={s.wedding.leftImg}
            />
          </RButton>
          <View style={s.wedding.tab}>
            <RButton
              style={!tab ? s.wedding.seltabBtn : s.wedding.tabBtn}
              onPress={()=>{this.setState({tab:0})}}>
              <View style={s.common.flexCenter}>
                <Text style={!tab ? s.wedding.seltabBtnText : s.wedding.tabBtnText}>商家</Text>
              </View>
            </RButton>
            <RButton
              style={tab ? s.wedding.seltabBtn : s.wedding.tabBtn}
              onPress={()=>{this.setState({tab:1})}}>
              <View style={s.common.flexCenter}>
                <Text style={tab ? s.wedding.seltabBtnText : s.wedding.tabBtnText}>套系</Text>
              </View>
            </RButton>
          </View>
          <View>
          </View>
        </View>
        <ScrollView style={s.common.scroll}>

        </ScrollView>
      </View>
    );
  }
}
