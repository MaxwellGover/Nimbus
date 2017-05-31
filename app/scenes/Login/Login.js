import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { Link } from 'react-router-native';
import {
  Item,
  Input,
  Label,
  Button
} from 'native-base';

class Login extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.logoWrapper}>
          <Image style={styles.logo} source={require('../../images/logo.png')}/>
        </View>
        <View style={styles.inputWrapper}>
          <Item fixedLabel>
            <Label style={{color: '#fff'}}>Email</Label>
            <Input />
          </Item>
          <Item fixedLabel last>
            <Label style={{color: '#fff'}}>Password</Label>
            <Input />
          </Item>
          <View style={styles.buttonWrapper}>
            <Button light block>
              <Text>SIGN IN</Text>
            </Button>
          </View>
          <TouchableOpacity>
            <View style={styles.signUpTextWrapper}>
              <Link to="/SignUp">
                <Text style={{color: '#fff'}}>Sign Up</Text>
              </Link>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#000'
  },
  logoWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputWrapper: {
    flex: 1,
    padding: 15
  },
  buttonWrapper: {
    marginTop: 30
  },
  logo: {
    resizeMode: 'contain',
    height: 80
  },
  label: {
    color: '#fff'
  },
  signUpTextWrapper: {
    alignItems: 'center',
    marginTop: 110
  }
});

export default Login;
