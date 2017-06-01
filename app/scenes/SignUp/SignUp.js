import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Item,
  Input,
  Button
} from 'native-base';
import createUser from '~/redux/modules/authentication';

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
        <View style={styles.helpTextWrapper}>
          <Text>Some nice helpful text</Text>
        </View>
        <View>
          <Item>
            <Input
              placeholder="Pick a username"
              onChangeText={(username) => this.setState({username})}
              autoCapitalize={'none'}
              autoCorrect={false}
            />
          </Item>
          <Item>
            <Input
              placeholder="Choose a display name"
              onChangeText={(displayName) => this.setState({displayName})}
              autoCapitalize={'none'}
              autoCorrect={false}
            />
          </Item>
          <Item>
            <Input
              placeholder="Enter an email address"
              onChangeText={(email) => this.setState({email})}
              autoCapitalize={'none'}
              autoCorrect={false}
            />
          </Item>
          <Item>
            <Input
              placeholder="Password"
              secureTextEntry={true}
              autoCapitalize={'none'}
              autoCorrect={false}
              onChangeText={(password) => this.setState({password})}/>
          </Item>
          <Item>
            <Input
              placeholder="Confirm your password"
              secureTextEntry={true}
              autoCapitalize={'none'}
              autoCorrect={false}
              onChangeText={(confirmPasswordText) => {
                this.setState({confirmPasswordText})}
              }
            />
          </Item>
        </View>
        <View style={styles.buttonWrapper}>
          <Button block onPress={this.handleSubmit}>
            <Text>
              Sign Up
            </Text>
          </Button>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    marginTop: 80,
    padding: 10
  },
  buttonWrapper: {
    marginTop: 50
  },
  helpTextWrapper: {
    alignItems: 'center'
  }
});

export default connect()(SignUp);
