import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import { Login } from '~/scenes/Login';
import { SignUp } from '~/scenes/SignUp';
import { SplashContainer } from '~/scenes/Splash';

const App = () => (
  <NativeRouter>
    <View style={styles.container}>
      <Route exact path="/" component={SplashContainer}/>
      <Route path="/Login" component={Login}/>
      <Route path="/SignUp" component={SignUp}/>
    </View>
  </NativeRouter>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App;
