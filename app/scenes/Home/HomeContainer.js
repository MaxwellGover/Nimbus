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
    dispatch: PropTypes.func.isRequired
  }
  render () {
    return (
      <Home />
    );
  }
}

export default connect()(HomeContainer);
