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
  topView:{width:WIDTH, height:setSize(20), backgroundColor:'#fff',},
  pageGe:{width:WIDTH, backgroundColor:'#f0f0f0', height:setSize(10),},
  justify:{flexDirection:'row', alignItems:"center"},
});

const home = StyleSheet.create({
  container: {flex:1},
  scroll:{height:(HEIGHT - setSize(65))},
  topArea: {color:'#f96500', marginRight:setSize(5), fontSize:setSize(14)},
  areaView: {flex:1, width:setSize(45), justifyContent:"center",},
  phoneImg: {width:setSize(18), height:setSize(18)},
  header: {backgroundColor:'#fff', height:setSize(45), flexDirection:'row', width:WIDTH, alignItems:"center", justifyContent:"space-between", paddingHorizontal:setSize(10)},
  carouselImg: {width:WIDTH, height:setSize(186)},
  imgLogo: {width:setSize(27), height: setSize(27),},
  contentLogo: {backgroundColor:'#fff', width:WIDTH, flexDirection:'row', justifyContent:'flex-start', paddingTop:setSize(24), },
  contentView: {width:setSize(75), height: setSize(68),justifyContent:"center", alignItems:'center'},
  listContent:{backgroundColor:"#fff", paddingHorizontal:setSize(10), marginTop:setSize(10)},
  listTitleView:{flexDirection:'row', alignItems:'center', justifyContent:'space-between', height:setSize(40)},
  listTitleGe:{width:setSize(3), height:setSize(20), backgroundColor:"#f75781", marginRight:setSize(5)},
  listView:{borderColor:"#f2f2f2", borderWidth:1, borderRadius:setSize(2), alignItems:"center", marginBottom:setSize(10)},
  listImg:{width:setSize(165), height:setSize(90)},
  oneView:{flexDirection:"row", flexWrap:'wrap', justifyContent:'space-between'},
  textArea:{fontSize:setSize(16), color:"#777"},
  textMoney:{color:"#f75781"},
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
