import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, Carousel } from 'antd-mobile';
import s from '../Styles';

export default class Home extends React.Component {

  static navigationOptions = ({navigation, screenProps}) => ({
      headerLeft:<Button>北京</Button>,
  })


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

  render() {
    return (
      <View style={s.home.container}>
        <View style={s.home.header}>
          <Text>北京</Text>
          <Text>北京</Text>
        </View>
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
      </View>
    );
  }
}
