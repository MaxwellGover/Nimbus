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
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '~/redux/modules/authentication';

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
  render () {
    return (
      <View style={styles.container}>
        <View>
          <Item>
            <Input
              placeholder="Email address"
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
        </View>
        <View style={styles.buttonWrapper}>
          <Button block light onPress={this.handleSubmit}>
            <Text>
              Sign In
            </Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    backgroundColor: '#fff'
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
  }
});

export default connect()(Login);
