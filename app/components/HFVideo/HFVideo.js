import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Video from 'react-native-video';

function HFVideo () {
  return (
    <View>
      <Video
      source={
        props.availablePreview.video === props.onPressData.video
          ? { uri: props.availablePreview.video }
          : null
      }   // Can be a URL or a local file.
      ref={(ref) => {
        this.player = ref
      }}
      onLoadStart={() => {}} // Callback when video starts to load
      onLoad={() => {}} // Callback when video loads
      onProgress={() => {}} // Callback every ~250ms with currentTime
      onEnd={() => {}} // Callback when playback finishes
      onError={() => {}} // Callback when video cannot be loaded
      onBuffer={() => {}}/>
    </View>
  );
}

HFVideoPropTypes = {
  availablePreview: PropTypes.object.isRequired,
  onPressData: PropTypes.object.isRequired,
  rate: PropTypes.number.isRequired,
  volume: PropTypes.number.isRequired,
  muted: PropTypes.bool.isRequired,
  paused: PropTypes.bool.isRequired,
  repeat: PropTypes.bool.isRequired,
  resizeMode: PropTypes.string.isRequired,
  playInBackground: PropTypes.bool.isRequired,
  playWhenInactive: PropTypes.bool.isRequired,
}

export default HFVideo ;
