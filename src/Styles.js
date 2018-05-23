import {StyleSheet, Dimensions, PixelRatio, Platform} from 'react-native';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
let isIOS = (Platform.OS === 'ios');
let fontScale = PixelRatio.getFontScale();
let pixelRatioGet = PixelRatio.get();
const defaultPixel = 2;
const w2 = 750 / defaultPixel;
const h2 = 1334 / defaultPixel;
const scale = Math.min(HEIGHT / h2, WIDTH / w2);   //获取缩放比例

let setSize = (size)=>{
    size = Math.round(size * scale + 0.5);
    return size / defaultPixel;
}

const home = StyleSheet.create({
  header:{height:setSize(40), flexDirection:'row', flex:1, justifyContent:"space-around"},
});

const styles = {
  home,
  WIDTH: WIDTH,
  HEIGHT: HEIGHT,
  setSize:setSize,
  isIOS:isIOS,
};
export default styles;
