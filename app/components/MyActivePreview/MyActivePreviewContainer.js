import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MyActivePreview from './MyActivePreview';

class MyActivePreviewContainer extends Component {
  static propTypes = {
    displayName: PropTypes.string.isRequired,
    availablePreview: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }
  render () {
    return (
      <MyActivePreview
        displayName={this.props.displayName}
        availablePreview={this.props.availablePreview}
        dispatch={this.props.dispatch}/>
    )
  }
}

function mapStateToProps ({ authentication, availablePreview }) {
  return {
    displayName: authentication.displayName,
    availablePreview: availablePreview
  }
}

export default connect(mapStateToProps)(MyActivePreviewContainer);
