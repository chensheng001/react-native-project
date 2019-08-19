import {Dimensions, Platform, Image} from 'react-native';

const {width} = Dimensions.get('window');

const getScreenImageHeight = imgUrl => {
  let showH;
  if (Platform.OS !== 'ios') {
    return new Promise(resolve => {
      Image.getSize(imgUrl, (imgWidth, imgHeight) => {
        showH = Math.floor(imgHeight / (imgWidth / width));
        resolve(showH);
      });
    });
  }
};
export default getScreenImageHeight;
