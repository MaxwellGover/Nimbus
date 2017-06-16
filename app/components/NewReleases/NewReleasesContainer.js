import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { db } from '~/config/firebase';
import NewReleases from './NewReleases';

class NewReleasesContainer extends Component {
  static propTypes = {

  }
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <NewReleases />
    );
  }
}

export default connect()(NewReleasesContainer);
