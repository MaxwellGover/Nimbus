import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const PreSplash = () => {
  return (
    <View style={styles.container}>
      <Image style={{resizeMode: 'contain', height: 80}} source={require('../../images/logo.png')}/>
    </View>
  );
};

export default PreSplash;
