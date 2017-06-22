import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import PropTypes from  'prop-types';
import Video from 'react-native-video';
import { removeVideoPath } from '~/redux/modules/preview';
import { Icon } from 'react-native-elements';
import RNFetchBlob from 'react-native-fetch-blob';
import { saveVideoDownloadURL } from '~/redux/modules/preview';
import { fbAuth, db, storageRef } from '~/config/firebase';

const Blob = RNFetchBlob.polyfill.Blob;

window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob

class Preview extends Component {
  static propTypes = {
    uid: PropTypes.string.isRequired,
    videoDownloadURL: PropTypes.string.isRequired,
    songDownloadURL: PropTypes.string.isRequired,
    videoPathOnDevice: PropTypes.string.isRequired
  }
  constructor (props) {
    super(props);

    this.state = {
      volume: 1,
      muted: false,
      paused: false,
    }
  }
  postPreview = () => {
    console.log('posting preview');
    let rnfbURI = RNFetchBlob.wrap(this.props.videoPathOnDevice);
    Blob
      .build(rnfbURI, { type : 'video/mov'})
      .then((blob) => {
        console.log(blob);
        storageRef.child('video/' + 'new.mov').put(blob, { contentType : 'video/mov' })
          .then((snapshot) => {
            console.log('saved to storage!')
            const downloadURL = snapshot.downloadURL
            console.log(downloadURL)
            db.ref(`users/${this.props.uid}/currentPreview/`).set({
              song: this.props.songDownloadURL,
              video: downloadURL
            })
          }).catch(error => console.log(error));
      })
  }
  discardVideo = () => {
    console.log('discarding...')
    this.props.dispatch(removeVideoPath());
    Actions.camera();
  }
  render () {
    return (
      <View style={styles.container}>
         <TouchableOpacity style={styles.fullScreen} onPress={() => {
           this.setState({
             paused: !this.state.paused
           })
         }}>
          <Video
            style={styles.fullScreen}
            source={{uri: this.props.videoPathOnDevice}}
            rate={1}
            volume={this.state.volume}
            muted={this.state.muted}
            repeat={true}
            resizeMode="cover"
            paused={this.state.paused}/>
        </TouchableOpacity>
        <View style={styles.controls}>
        <Icon
          reverse
          onPress={this.postPreview}
          name='ios-checkmark-circle'
          type='ionicon'
          color='#517fa4'
        />
        <Icon
          reverse
          onPress={() => this.props.dispatch(removeVideoPath())}
          name='ios-trash'
          type='ionicon'
          color='#517fa4'
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  controls: {

  }
})

function mapStateToProps ({authentication, preview}) {
  return {
    uid: authentication.uid,
    videoDownloadURL: preview.videoDownloadURL,
    songDownloadURL: preview.songDownloadURL,
    videoPathOnDevice: preview.videoPathOnDevice
  }
}

export default connect(mapStateToProps)(Preview);
