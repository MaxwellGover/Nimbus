import React from 'react';
import PropTypes from 'prop-types';
import { Footer, FooterTab, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

function FooterTabs (props) {
  return (
    <Footer >
      <FooterTab>
        <Button
          active={props.activeTab === 'home' ? true : false}
          onPress={() => {
            props.dispatch(props.changeActiveTab('home'));
            Actions.home();
          }}
        >
          <Icon name="apps" />
        </Button>
        <Button
          active={props.activeTab === 'camera' ? true : false}
          onPress={() => {
            props.dispatch(props.changeActiveTab('camera'));
            Actions.songList();
          }}
        >
          <Icon name="camera" />
        </Button>
        <Button
          active={props.activeTab === 'profile' ? true : false}
          onPress={() => {
            props.dispatch(props.changeActiveTab('profile'));
            Actions.collection();
          }}>
          <Icon name="person"/>
        </Button>
      </FooterTab>
    </Footer>
  );
}

FooterTabsPropTypes = {
  activeTab: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  changeActiveTab: PropTypes.func.isRequired
}

export default FooterTabs;
