import React from 'react';
import { StyleSheet, Text, Image, View, FlatList } from 'react-native';
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
      <FlatList
        data={[{}, {}, {}]}
        extraData={this.state}
        ItemSeparatorComponent={()=><View style={s.common.pageGe}/>}
        keyExtractor={(item, index) => index + ''}
        renderItem={({item, separators}) =>(
          <RButton>
            <View style={s.wedding.listView}>
              <Image
                style={s.wedding.listImage}
                source={require('../images/icon_08.png')}
              />
              <View style={s.wedding.listRightView}>
                <View style={s.wedding.areaView}>
                  <Text style={s.wedding.shopName}>27度罗马酒店</Text>
                  <Text style={s.wedding.area}>东城区</Text>
                </View>
                <View style={s.wedding.moneyView}>
                  <Text style={s.wedding.money}>￥4988</Text>
                  <Text style={s.wedding.moneyMore}>起</Text>
                </View>
              </View>
            </View>
          </RButton>
        )}
      />
    );
  }

  renderPrice(){
    return (
      <FlatList
        data={[{}, {}, {}]}
        extraData={this.state}
        ItemSeparatorComponent={()=><View style={s.common.pageGe}/>}
        keyExtractor={(item, index) => index + ''}
        renderItem={({item, separators}) =>(
          <RButton>
            <View style={s.wedding.listViewPrice}>
              <Image
                style={s.wedding.listImagePrice}
                source={require('../images/icon_08.png')}
              />
              <View style={s.wedding.listRightViewPrice}>
                <View style={s.wedding.areaView}>
                  <Text style={s.wedding.shopName}>27度罗马酒店</Text>
                  <Text style={s.wedding.area}>东城区</Text>
                </View>
                <View style={s.wedding.moneyView}>
                  <Text style={s.wedding.money}>￥4988</Text>
                  {/* <Text style={s.wedding.moneyMore}>起</Text> */}
                </View>
              </View>
            </View>
          </RButton>
        )}
      />
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
              source={require('../images/left-icon.png')}
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
        <View style={s.common.scroll}>
          {tab ? this.renderPrice() : this.renderBusiness()}
        </View>
      </View>
    );
  }
}
