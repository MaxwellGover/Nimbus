import React, { Component } from 'react';
import { connect } from 'react-redux';
import { db } from '~/config/firebase';
import PropTypes from  'prop-types';
import Video from 'react-native-video';

class Preview extends Component {
  static propTypes = {
    uid: PropTypes.string.isRequired,
    videoDownloadURL: PropTypes.string.isRequired
  }
  constructor (props) {
    super(props);

    this.state = {
      rate: 1,
      volume: 1,
      muted: false,
      paused: false,
      resizeMode: "cover",
      repeat: true
    }
  }
  render () {
    return (
      <Video
        source={{uri: this.props.videoDownloadURL}}
        rate={this.state.rate}
        volume={this.state.volume}
        muted={this.state.muted}
        paused={this.state.paused}/>
    );
  }
}

function mapStateToProps ({authentication, preview}) {
  return {
    uid: authentication.uid,
    videoDownloadURL: preview.videoDownloadURL
  }
}

export default connect(mapStateToProps)(Preview);
