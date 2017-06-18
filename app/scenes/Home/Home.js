import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'native-base';
import { NewReleasesContainer } from '~/components/NewReleases';
import { FooterTabsContainer } from '~/components/FooterTabs';
import { NoFollowers } from '~/components/NoFollowers';

function Home (props) {
  return (
    <View style={styles.container}>
      <NoFollowers />
      <FooterTabsContainer style={styles.footerTabs}/>
    </View>
  );
}

HomePropTypes = {

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 68
  }
});

export default Home;
