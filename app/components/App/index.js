import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { NativeRouter, Route, Link } from 'react-router-native';
import { Login } from '~/scenes/Login';

const App = () => (
  <NativeRouter>
    <Route exact path="/" component={Login}/>
  </NativeRouter>
);

export default App;
