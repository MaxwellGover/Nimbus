import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { db } from '~/config/firebase';
import Preview from './Preview';

class PreviewContainer extends Component {
  static propTypes = {
    video: PropTypes.string.isRequired,
    song: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
  }
  postPreview = () => {
    console.log('Posting video to db', this.props.video);
    db.ref('users/' + this.props.uid + '/currentPreview').set({
      video: this.props.video,
      song: this.props.song,
      details: {
        times_fire: 0,
        times_trash: 0,
        amount_made: 0,
        purchased_streams: 0,
        purchased_extra_streams: 0,
        expiration_date: '',
        max_views_per_day: 3
      },
      comments: []
    });
  }
  deletePreview = () => {

  }
  render () {
    return (
      <Preview postPreview={this.postPreview}/>
    );
  }
}

function mapStateToProps ({ preview, authentication }) {
  console.log(preview)
  return {
    video: preview.videoDownloadURL,
    song: preview.songDownloadURL,
    uid: authentication.uid
  }
}

export default connect(mapStateToProps)(PreviewContainer);
