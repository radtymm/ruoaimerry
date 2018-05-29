import { Linking } from 'react-native';
// import {Toast} from 'antd-mobile';

export default fun = {
  call:(phoneNumber)=>{
    const url = `tel:${phoneNumber}`;
    Linking.canOpenURL(url).then(supported => {
      if (!supported) {
          console.log('Can\'t handle url: ' + url);
      } else {
          return Linking.openURL(url);
      }
    }).catch(err => console.error('An error occurred', err));
  }
};
