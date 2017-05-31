import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'native-base';
import { Link } from 'react-router-native';
import PropTypes from 'prop-types';

const Splash = (props) => {
  console.log(props)
  return (
    <View style={styles.container}>
      <Button light block onPress={props.goToLogin}>
        <Text>Login</Text>
      </Button>
      <Button dark block bordered style={{marginTop: 10}} onPress={props.goToRegister}>
        <Text>Register</Text>
      </Button>
    </View>
  );
}

Splash.propTypes = {
  goToLogin: PropTypes.func.isRequired,
  goToRegister: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center'
  }
});

export default Splash;
