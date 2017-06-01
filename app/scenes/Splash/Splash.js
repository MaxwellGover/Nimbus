import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'native-base';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';

const Splash = (props) => {
  return (
    <View style={styles.container}>
      <Button light block onPress={Actions.login}>
        <Text>Login</Text>
      </Button>
      <Button dark block bordered style={{marginTop: 10}} onPress={Actions.signUp}>
        <Text>Register</Text>
      </Button>
    </View>
  );
}

Splash.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center'
  }
});

export default Splash;
