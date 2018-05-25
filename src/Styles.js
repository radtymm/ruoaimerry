import {StyleSheet, Dimensions, PixelRatio, Platform} from 'react-native';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
let isIOS = (Platform.OS === 'ios');
let fontScale = PixelRatio.getFontScale();
let pixelRatioGet = PixelRatio.get();
const defaultPixel = 2;
const w2 = 375 / defaultPixel;
const h2 = 667 / defaultPixel;
const scale = Math.min(HEIGHT / h2, WIDTH / w2);   //获取缩放比例

let setSize = (size)=>{
    size = Math.round(size * scale + 0.5);
    return size / defaultPixel;
}

const common = StyleSheet.create({
  topView:{width:WIDTH, height:setSize(20), backgroundColor:'red',}
});

const home = StyleSheet.create({
  container: {flex:1},
  topArea: {color:'#f96500', marginRight:setSize(5), },
  areaView: {flex:1, width:},
  header: {height:setSize(45), flexDirection:'row', width:WIDTH, justifyContent:"space-around"},
  carouselImg: {width:WIDTH, height:setSize(100)},
});

const styles = {
  home,
  common,
  WIDTH,
  HEIGHT,
  setSize,
  isIOS,
};
export default styles;
