import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Footer, FooterTab, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

function FooterTabs (props) {
  return (
    <Footer style={{backgroundColor: '#141414'}}>
      <FooterTab>
        <Button
          onPress={() => {
            props.dispatch(props.changeActiveTab('home'));
            Actions.home();
          }}
        >
          <Icon name="apps" active={props.activeTab === 'home' ? true : false} style={{color: '#fff'}}/>
        </Button>
        <Button
          onPress={() => {
            props.dispatch(props.changeActiveTab('camera'));
            Actions.songList();
          }}
        >
          <Icon name="camera" active={props.activeTab === 'camera' ? true : false} style={{color: '#fff'}}/>
        </Button>
        <Button
          onPress={() => {
            props.dispatch(props.changeActiveTab('profile'));
            Actions.collection();
          }}>
          <Icon name="person" active={props.activeTab === 'profile' ? true : false} style={{color: '#fff'}}/>
        </Button>
      </FooterTab>
    </Footer>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#000'
  }
})


FooterTabsPropTypes = {
  activeTab: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  changeActiveTab: PropTypes.func.isRequired
}

export default FooterTabs;
