import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { NativeRouter, Route, Link } from 'react-router-native';
import { Login } from '~/scenes/Login';
import { SignUp } from '~/scenes/SignUp';

const App = () => (
  <NativeRouter>
    <Route exact path="/" component={Login}/>
    <Route exact path="/SignUp" component={SignUp}/>
  </NativeRouter>
);

export default App;
