import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from 'native-base';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { Login } from '~/scenes/Login';
import styles from './styles';

const Splash = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image style={{resizeMode: 'contain', height: 80}} source={require('../../images/logo.png')}/>
      </View>
      <View style={styles.bottom}>
        <Login />
      </View>
    </View>
  );
}

SplashPropTypes = {};

export default Splash;
