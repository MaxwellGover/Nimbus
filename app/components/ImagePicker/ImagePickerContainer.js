import React, {Component} from 'react-native';
import PropTypes from 'prop-types';
import RNFetchBlob from 'react-native-fetch-blob';
import ImagePicker from 'react-native-image-crop-picker';

class ImagePickerContainer extends Component {
  openPicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
    });
  }
  render () {
    return {
      <ImagePicker openPicker={this.openPicker}/>
    }
  }
}

export default ImagePickerContainer;
