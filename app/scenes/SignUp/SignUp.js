import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormLabel, FormInput, Button, Icon } from 'react-native-elements'
import { createUser } from '~/redux/modules/authentication';
import styles from './styles';

class SignUp extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }
  constructor (props) {
    super(props);

    this.state = {
      username: '',
      displayName: '',
      email: '',
      password: '',
      confirmPasswordText: ''
    }
  }
  handleSubmit = () => {
    this.props.dispatch(createUser(this.state));
  }
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.logoWrapper}>
          <Image
            style={{resizeMode: 'contain', height: 80}}
            source={require('../../images/logo.png')}/>
          <Text style={styles.createAccountText}>Create a free account</Text>
        </View>
        <View>
          <View style={styles.formInputWrapper}>
            <Icon
              iconStyle={{marginTop: -10, marginLeft: 20}}
              name='ios-contact-outline'
              type='ionicon'
              color='#fff'
            />
          <View style={styles.inputWrapper}>
            <FormLabel labelStyle={styles.label}>Username</FormLabel>
            <FormInput
              inputStyle={styles.input}
              placeholder="Pick a username"
              onChangeText={(username) => this.setState({username})}
              autoCapitalize={'none'}
              autoCorrect={false}
            />
            </View>
          </View>
          <View style={styles.formInputWrapper}>
            <Icon
              iconStyle={{marginTop: -10, marginLeft: 20}}
              name='ios-contact-outline'
              type='ionicon'
              color='#fff'
            />
            <View style={styles.inputWrapper}>
              <FormLabel labelStyle={styles.label}>Display Name</FormLabel>
              <FormInput
                inputStyle={styles.input}
                placeholder="Choose a display name"
                onChangeText={(displayName) => this.setState({displayName})}
                autoCapitalize={'none'}
                autoCorrect={false}
              />
            </View>
          </View>
          <View style={styles.formInputWrapper}>
            <Icon
              iconStyle={{marginTop: -15, marginLeft: 20}}
              name='ios-mail-outline'
              type='ionicon'
              color='#fff'
            />
            <View style={styles.inputWrapper}>
              <FormLabel labelStyle={styles.label}>Email</FormLabel>
              <FormInput
                inputStyle={styles.input}
                placeholder="Enter an email address"
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
                onChangeText={(password) => this.setState({password})}
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
              <FormLabel labelStyle={styles.label}>Confirm Password</FormLabel>
              <FormInput
                inputStyle={styles.input}
                placeholder="Confirm your password"
                secureTextEntry={true}
                autoCapitalize={'none'}
                autoCorrect={false}
                onChangeText={(confirmPasswordText) => {
                  this.setState({confirmPasswordText})}
                }
              />
            </View>
          </View>
        </View>
        <Button title="SIGN UP" buttonStyle={styles.button} onPress={this.handleSubmit}/>
      </View>
    );
  }
};

export default connect()(SignUp);
