import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import {
  Item,
  Input,Label,
  Button
} from 'native-base';

class SignUp extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>
          Sign up page
        </Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {}
});

export default SignUp;
