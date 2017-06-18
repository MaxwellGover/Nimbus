import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, SectionList, Text, View, StyleSheet } from 'react-native';
import { ListItem, Button } from 'react-native-elements';

function NewReleases (props) {
  console.log(props.following);
  if (props.following === 0) {
    return <Text>You are not following anyone</Text>
  } else {
  return (
    <ScrollView style={styles.list}>
    </ScrollView>
  );
  }
}

NewReleasesPropTypes = {
  following: PropTypes.number.isRequired
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: '#000',
    marginTop: -4
  },
  listItem: {
    paddingTop: 15,
    paddingBottom: 15
  },
  name: {
    color: '#fff'
  }
})

export default NewReleases;
