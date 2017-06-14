import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View
} from 'react-native';
import Camera from 'react-native-camera';

class NimbusCamera extends Component {
  constructor(props) {
    super(props);

    this.camera = null;

    this.state = {
      timer: 10,
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
          type={this.state.controls.type}
          orientation={this.state.controls.orientation}
          flashMode={this.state.flashMode}
          aspect={Camera.constants.Aspect.fill}
          captureAudio={true}
          captureMode={Camera.constants.CaptureMode.video}
          captureTarget={Camera.constants.CaptureTarget.disk}
          keepAwake={true}>
          <Text>{this.state.timer}</Text>
          <Text>{this.state.isRecording}</Text>
          <TouchableOpacity onPress={this.startRecording.bind(this)}>
            <Text style={styles.capture}>[CAPTURE]</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.stopRecording.bind(this)}>
            <Text>[STOP RECORDING]</Text>
          </TouchableOpacity>
        </Camera>
      </View>
    );
  }

  startRecording = () => {
    if (this.camera) {
      this.setState({
        isRecording: true
      });
      this.camera.capture({mode: Camera.constants.CaptureMode.video})
        .then((data) => {
          console.log(data)
          
        })
        .catch(err => console.error(err))

      this.interval = setInterval(() => {
        const timer = this.state.timer
        this.setState({
          timer: timer - 1
        })
        if (timer === 0) {
          window.clearInterval(this.interval);
          this.stopRecording();
          this.setState({
            isRecording: false,
            timer: 10
          })
          // Push to preview
        }
        console.log(timer)
      }, 1000);
    }
  }

  stopRecording = () => {
    if (this.camera) {
      this.camera.stopCapture();
    }
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
