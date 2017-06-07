import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const PreSplash = () => {
  return (
    <View style={styles.container}>
      <Text>PreSplash!!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60
  }
});

export default PreSplash;
