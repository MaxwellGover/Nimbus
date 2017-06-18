import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { db, fbAuth } from '~/config/firebase';
import NewReleases from './NewReleases';

class NewReleasesContainer extends Component {
  static propTypes = {
    following: PropTypes.number.isRequired
  }
  constructor (props) {
    super(props);
  }
  componentDidMount = () => {

  }
  render () {
    console.log(this.props.following)
    return (
      <NewReleases following={this.props.following}/>
    );
  }
}

function mapStateToProps ({authentication}) {
  return {
    following: authentication.following
  }
}

export default connect(mapStateToProps)(NewReleasesContainer);
