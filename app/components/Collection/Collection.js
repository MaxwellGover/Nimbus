import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { FooterTabsContainer } from '~/components/FooterTabs';
import PropTypes from 'prop-types';

function Collection (props) {
  return (
    <View style={styles.container}>
      <ScrollView></ScrollView>
      <FooterTabsContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80
  }
})

export default Collection;
