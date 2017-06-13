import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Camera from 'react-native-camera';

class NimbusCamera extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeRemaining: 30,
      isRecording: false,
      limitReached: false,
      controls: {
        type: Camera.constants.Type.back,
        orientation: "portrait",
        flashMode: Camera.constants.FlashMode.off
      }
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          captureAudio={true}
          captureMode={Camera.constants.CaptureMode.video}
          captureTarget={Camera.constants.CaptureTarget.disk}
          keepAwake={true}>
          <Text style={styles.capture} onPress={this.startRecording.bind(this)}>[CAPTURE]</Text>
        </Camera>
      </View>
    );
  }

  startRecording () {
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

export default NimbusCamera;
