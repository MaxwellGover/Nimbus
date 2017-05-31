import React, { Component } from 'react';
import { View } from 'react-native';
import Splash from './Splash';
import createHistory from 'history/createMemoryHistory';

const history = createHistory();

class SplashContainer extends Component {
  goToLogin = () => {
    history.push('/Login');
  }
  goToRegister = () => {
    history.push('/SignUp');
  }
  render () {
    console.log(history)
    return (
      <Splash
        goToLogin={this.goToLogin}
        goToRegister={this.goToRegister}
      />
    );
  }
}

export default SplashContainer;
