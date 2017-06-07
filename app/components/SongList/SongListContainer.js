import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { db } from '~/config/firebase';
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
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const songs = childSnapshot.val();

        this.setState(() => {
          availableSongs: this.state.availableSongs.push(songs);
        })
      });
    });
  }
  render () {
    return (
      <SongList availableSongs={this.state.availableSongs}/>
    );
  }
}

function mapStateToProps ({authentication}) {
  return {
    uid: authentication.uid
  }
}

export default connect(mapStateToProps)(SongListContainer);
