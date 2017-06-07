import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { List, ListItem } from 'native-base';
import PropTypes from 'prop-types';

function SongList (props) {
  return (
    <View style={styles.container}>
      {console.log(props.availableSongs)}
      {props.availableSongs.map((song) => {
        return <Text>{song.songName}</Text>
      })}
    </View>
  );
}

SongListPropTypes = {
  availableSongs: PropTypes.array.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 140
  }
})

export default SongList;
