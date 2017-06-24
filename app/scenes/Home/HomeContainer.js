import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fbAuth } from '~/config/firebase';
import { Actions } from 'react-native-router-flux';
import { isAuthed, notAuthed } from '~/redux/modules/authentication';
import Home from './Home';

class HomeContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    availablePreview: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props);

    this.state = {
      has_active_preview: false
    }
  }
  componentDidMount = () => {
    if (
      this.props.availablePreview.song
      && this.props.availablePreview.video !== 0
    ) {
      this.setState({
        has_active_preview: true
      })
    }
  }
  render () {
    return (
      <Home has_active_preview={this.state.has_active_preview}/>
    );
  }
}

function mapStateToProps ({ availablePreview }) {
  console.log(availablePreview);
  return {
    availablePreview: availablePreview
  }
}

export default connect(mapStateToProps)(HomeContainer);
