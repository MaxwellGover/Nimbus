import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { List, ListItem } from 'native-base';
import PropTypes from 'prop-types';

function SongList (props) {
  return (
    <View style={styles.container}>
      <ScrollView>
        {props.availableSongs.map((song, index) => {
          return <ListItem
            style={styles.listItem}
            key={index}
            onPress={() => {
              props.dispatch(props.saveSongPath(song.downloadURL));
              Actions.camera();
            }}>
              <Text>{song.songName}</Text>
          </ListItem>
        })}
      </ScrollView>
    </View>
  );
}

SongListPropTypes = {
  availableSongs: PropTypes.array.isRequired,
  saveSongPath: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70
  }
})

export default SongList;
