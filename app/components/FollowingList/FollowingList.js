import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { ListItem } from 'native-base';

function FollowingList () {
  return (
    <View style={styles.container}>
      <ScrollView>
        <ListItem>
          <Text>I am a list item</Text>
        </ListItem>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default FollowingList;
