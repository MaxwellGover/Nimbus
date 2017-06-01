import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Login } from '~/scenes/Login';
import { SignUp } from '~/scenes/SignUp';
import { PreSplash } from '~/scenes/PreSplash';
import { SplashContainer } from '~/scenes/Splash';
import { HomeContainer } from '~/scenes/Home';

class App extends Component {
  static propTypes = {
    isAuthed: PropTypes.bool.isRequired,
    isAuthenticating: PropTypes.bool.isRequired
  }
  componentDidMount () {

  }
  render () {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="splash"
            component={SplashContainer}
            title="Splash"
            initial={true}
            hideNavBar={true}
          />
          <Scene
            key="login"
            component={Login}
            title="Login"
            hideNavBar={false}
          />
          <Scene
            key="signUp"
            component={SignUp}
            title="Sign Up"
            hideNavBar={false}
          />
          <Scene
            key="home"
            component={HomeContainer}
            title="Home"
            hideNavBar={false}
          />
        </Scene>
      </Router>
    );
  }
};

function mapStateToProps ({ authentication }) {
  return {
    isAuthed: authentication.isAuthed,
    isAuthenticating: authentication.isAuthenticating
  }
}

export default connect(mapStateToProps)(App);
