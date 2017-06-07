import React from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'native-base';
import { FooterTabsContainer } from '~/components/FooterTabs';

function Home (props) {
  return (
    <View style={styles.container}>
      <FlatList />
      <FooterTabsContainer style={styles.footerTabs}/>
    </View>
  );
}

HomePropTypes = {

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 120
  }
});

export default Home;
