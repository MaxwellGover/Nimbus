import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { Link } from 'react-router-native';
import { FormLabel, FormInput, Button, Icon } from 'react-native-elements'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '~/redux/modules/authentication';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

class Login extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }
  handleSubmit = () => {
    this.props.dispatch(loginUser(this.state));
  }
  handleNewScene = () => {
    Actions.signUp()
  }
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.formInputWrapper}>
          <Icon
            iconStyle={{marginTop: -10, marginLeft: 20}}
            name='ios-contact-outline'
            type='ionicon'
            color='#fff'
          />
          <View style={styles.inputWrapper}>
            <FormLabel labelStyle={styles.label}>Email</FormLabel>
            <FormInput
              inputStyle={styles.input}
              placeholder="Email address"
              onChangeText={(email) => this.setState({email})}
              autoCapitalize={'none'}
              autoCorrect={false}
            />
          </View>
        </View>
        <View style={styles.formInputWrapper}>
          <Icon
            iconStyle={{marginTop: -10, marginLeft: 20}}
            name='ios-lock-outline'
            type='ionicon'
            color='#fff'
          />
          <View style={styles.inputWrapper}>
            <FormLabel labelStyle={styles.label}>Password</FormLabel>
            <FormInput
              inputStyle={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              autoCapitalize={'none'}
              autoCorrect={false}
              onChangeText={(password) => this.setState({password})}/>
          </View>
        </View>
        <View>
          <Button
            buttonStyle={styles.button}
            onPress={this.handleSubmit} title='SIGN IN'/>
        </View>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.createAccountWrapper} onPress={this.handleNewScene}>
          <Text style={styles.createAccountText}>New? Create an account</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect()(Login);
