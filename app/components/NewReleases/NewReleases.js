import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { ListItem, Thumbnail, Body, Separator} from 'native-base';

function NewReleases () {
  return (
    <ScrollView style={styles.container}>
      <Separator bordered style={{backgroundColor: '#141414'}}>
        <Text style={styles.seperatorText}>NEW PREVIEWS</Text>
      </Separator>
      <ListItem>
        <Thumbnail circle size={80} source={require('../../images/profile-pic.jpg')} style={styles.profileImage}/>
        <Body style={{marginLeft: 20}}>
          <Text style={styles.displayName}>Travis Scott</Text>
        </Body>
      </ListItem>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -5,
    backgroundColor: '#000'
  },
  profileImage: {
    marginRight: 10
  },
  displayName: {
    fontSize: 16,
    color: '#fff'
  },
  seperatorText: {
    color: '#fff'
  }
})

export default NewReleases;
