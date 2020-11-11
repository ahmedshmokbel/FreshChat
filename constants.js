import React from 'react'
import { Platform , Dimensions , PixelRatio } from 'react-native';




 
const fixedHeight =Platform.OS=='ios'? 812:760;
const fixedWidth = Platform.OS=='ios'?375:360;

function responsiveHeight(originalValue)
{
    return ((Dimensions.get('window').height * originalValue) / fixedHeight);
}

 function responsiveWidth(originalValue)
{
    return ((Dimensions.get('window').width * originalValue) / fixedWidth);
}

function scaleFont(size) {
    const newSize = size * Dimensions.get('window').width / fixedWidth;
    if (Platform.OS === 'ios') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}

export default { responsiveHeight , responsiveWidth , scaleFont };