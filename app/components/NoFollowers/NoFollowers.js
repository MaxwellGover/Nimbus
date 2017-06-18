import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

function NoFollowers (props) {
  return (
    <View style={styles.container}>
      <Text style={{color: '#fff'}}>You are not following anyone</Text>
    </View>
  );
}

export default NoFollowers;
