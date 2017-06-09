import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { db } from '~/config/firebase';
import { saveSongPath } from '~/redux/modules/preview';
import SongList from './SongList';

class SongListContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    uid: PropTypes.string.isRequired
  }
  constructor (props) {
    super(props);

    this.state = {
      availableSongs: []
    }
  }
  componentDidMount () {
    const ref = db.ref(`users/${this.props.uid}/availableTracks/`);

    ref.once('value', (snapshot) => {
      var songArray = []
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const song = childSnapshot.val();

        songArray.push(song);
      });
      this.setState({ availableSongs: [...songArray] })
    });
  }
  render () {
    return (
      <SongList
        availableSongs={this.state.availableSongs}
        saveSongPath={saveSongPath}
        dispatch={this.props.dispatch}
      />
    );
  }
}

function mapStateToProps ({authentication}) {
  return {
    uid: authentication.uid
  }
}

export default connect(mapStateToProps)(SongListContainer);
