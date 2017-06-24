import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'native-base';
import { NewReleasesContainer } from '~/components/NewReleases';
import { FooterTabsContainer } from '~/components/FooterTabs';
import { NoFollowers } from '~/components/NoFollowers';
import { MyActivePreviewContainer } from '~/components/MyActivePreview';

function Home (props) {
  console.log('Home props', props);
  return (
    <View style={styles.container}>
      {props.has_active_preview
        ? <MyActivePreviewContainer />
        : null
      }
      <NoFollowers />
      <NewReleasesContainer />
      <FooterTabsContainer style={styles.footerTabs}/>
    </View>
  );
}

HomePropTypes = {
  has_active_preview: PropTypes.bool.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 68
  }
});

export default Home;
