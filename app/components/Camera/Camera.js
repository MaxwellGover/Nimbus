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
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { saveVideoPath } from '~/redux/modules/preview';

class NimbusCamera extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }
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
          CaptureQuality={Camera.constants.CaptureQuality.medium}
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
          const video = data.path;
          this.props.dispatch(saveVideoPath(video));
          Actions.preview();
        })

      this.interval = setInterval(() => {
        const timer = this.state.timer
        this.setState({
          timer: timer - 1
        })
        if (timer === 0) {
          this.stopRecording();
          // Push to preview
        }
        console.log(timer)
      }, 1000);
    }
  }

  stopRecording = () => {
    if (this.camera) {
      window.clearInterval(this.interval);
      this.camera.stopCapture();
      this.setState({
        isRecording: false,
        timer: 10
      })
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

function mapStateToProps ({preview}) {
  return {
    songPath: preview.songPath,
    videoPath: preview.videoPath
  }
}

export default connect(mapStateToProps)(NimbusCamera);
