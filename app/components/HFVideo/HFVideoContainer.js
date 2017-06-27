import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HFVideo from './HFVideo';

class HFVideoContainer extends Component {
  static propTypes = {
    availablePreview: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props);

    this.state = {
      rate: 1.0,
      volume: 1.0,
      muted: false,
      paused: false,
      repeat: false,
      resizeMode: "cover",
      playInBackground: false,
      playWhenInactive: false,
    }
  }
  render () {
    return (
      <HFVideo
        rate={this.state.rate}
        volume={this.state.volume}
        muted={this.state.muted}
        paused={this.state.paused}
        repeat={this.state.repeat}
        resizeMode={this.state.resizeMode}
        playInBackground={this.state.playInBackground}
        playWhenInactive={this.state.playWhenInactive}
      />
    );
  }
}

function mapStateToProps ({ availablePreview, onPressData }) {
  return {
    availablePreview: availablePreview,
    onPressData: onPressData
  }
}

export default connect(mapStateToProps)(HFVideoContainer);
