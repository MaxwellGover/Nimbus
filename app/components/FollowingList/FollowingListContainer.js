import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { db } from '~/config/firebase';
import FollowingList from './Following';

class FollowingListContainer extends Component {
  static propTypes = {

  }
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <FollowingList />
    );
  }
}

export default connect()(FollowingListContainer);
