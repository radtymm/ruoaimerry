import React from 'react';
import { StyleSheet, Text, Image, View, ScrollView } from 'react-native';
import RButton from '../components/RButton';
import s from '../Styles';
const hotelDetail = s.hotelDetail;

export default class HotelDetail extends React.Component {
  static defaultProps = {

  }

  constructor(props){
    super(props);
    this.state = {

    };
  }

  componentDidMount() {

  }

  renderBaseInfo(){
    return (
      <ScrollView>
        <Image
          style={s.hotelDetail.infoImg}
          source={require('../images/icon_08.png')}
        />
        <View style={s.hotelDetail.infoView}>
          <Text>北方温泉会议中心</Text>
          <View style={s.hotelDetail.moneyView}>
            <Text style={s.hotelDetail.moneyText}>￥1588-2388</Text>
            <Text style={s.hotelDetail.desk}>/桌</Text>
            <Text style={s.hotelDetail.deskTotle}>能容纳3-60桌</Text>
          </View>
          <Text style={s.hotelDetail.desk}>本店位于是什么打算打算本店位于是什么打算打算本店位于是什么打算打算本店位于是什么打算打算</Text>
        </View>
        <View style={s.common.pageGe}/>
        <View style={s.hotelDetail.contactView}>
          <View style={s.hotelDetail.contactList}>
            <Image
              source={require('../images/icon_08.png')}
              style={s.common.leftImg}
            />
            <Text style={s.hotelDetail.contactText}>拉开剑荡四方绿卡时间</Text>
          </View>
          <View style={s.hotelDetail.contactList}>
            <Image
              source={require('../images/icon_08.png')}
              style={s.common.leftImg}
            />
            <Text style={s.hotelDetail.contactText}>4006-808-333</Text>
          </View>
        </View>
        <View style={hotelDetail.banquetHall}>
          <Text style={hotelDetail.banquetHallTitle}>宴会厅</Text>
          <View>

          </View>
        </View>
      </ScrollView>
    );
  }

  renderHead(){
    return (
      <View style={s.common.header}>
        <RButton onPress={()=>{goBack()}}>
          <Image
            source={require('../images/icon_08.png')}
            style={s.common.leftImg}
          />
        </RButton>
        <View style={s.common.titleView}>
          <Text style={s.common.titleText}>婚宴商家</Text>
        </View>
        <View>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View>
        <View style={s.common.topView}/>
        {this.renderHead()}
        {this.renderBaseInfo()}
      </View>
    );
  }
}
