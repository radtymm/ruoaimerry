import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Button, Carousel } from 'antd-mobile';
import RButton from '../components/RButton';
import s from '../Styles';

export default class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data: ['1', '2', '3'],
    };
  }

  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }

  renderListContent(title){
    return (
      <View style={s.home.listContent}>
        <View style={s.home.listTitleView}>
          <View style={s.common.justify}>
            <View style={s.home.listTitleGe}>
            </View>
            <Text style={s.home.listTitle}>{title}</Text>
          </View>
          <View style={s.common.justify}>
            <Text style={s.home.listTitle}>全部</Text>
            <Image
              source={require('../images/icon_08.png')}
              style={s.home.phoneImg}
            />
          </View>
        </View>
        <View style={s.home.oneView}>
          {
            [{}, {}, {}].map((item, index)=>{
              return (
                <RButton key={index}>
                  <View style={s.home.listView}>
                    <Image
                      source={require('../images/icon_08.png')}
                      style={s.home.listImg}
                    />
                    <Text style={s.home.textArea}>温泉会议中心</Text>
                    <Text style={s.home.textMoney}>￥1588-1587 / 桌</Text>
                  </View>
                </RButton>
              );
            })
          }
        </View>
      </View>
    );
  }

  render() {
    return (
      <View>
        <View style={s.common.topView}/>
        <View style={s.home.header}>
          <RButton onPress={()=>{console.log("--------");}}>
            <View style={s.home.areaView}>
              <Text style={s.home.topArea}>北京</Text>
            </View>
          </RButton>
          <RButton onPress={()=>{console.log("--------");}}>
            <Image
              source={require('../images/icon_08.png')}
              style={s.home.phoneImg}
            />
          </RButton>
        </View>
        <ScrollView style={s.home.scroll}>
          <View style={s.home.container}>
            <Carousel
              autoplay={true}
              infinite
              beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
              afterChange={index => console.log('slide to', index)}
            >
              {this.state.data.map((val, index) => (
                <View key={index}>
                  <Image
                    source={{uri: `https://zos.alipayobjects.com/rmsportal/${val}.png`}}
                    style={s.home.carouselImg}
                  />
                </View>
              ))}
            </Carousel>
            <View style={s.home.contentLogo}>
              <RButton>
                <View style={s.home.contentView}>
                  <Image
                    source={require('../images/icon_11.png')}
                    style={s.home.imgLogo}
                  />
                  <Text>订婚宴</Text>
                </View>
              </RButton>
              <RButton>
                <View style={s.home.contentView}>
                  <Image
                    source={require('../images/icon_11.png')}
                    style={s.home.imgLogo}
                  />
                  <Text>订婚宴</Text>
                </View>
              </RButton>
            </View>
            {this.renderListContent('婚纱摄影')}
            {this.renderListContent('婚纱摄影')}
          </View>
        </ScrollView>
      </View>

    );
  }
}
