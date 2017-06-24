import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fbAuth, db } from '~/config/firebase';
import { isAuthed, notAuthed } from '~/redux/modules/authentication';
import { Login } from '~/scenes/Login';
import { SignUp } from '~/scenes/SignUp';
import { PreSplash } from '~/scenes/PreSplash';
import { SplashContainer } from '~/scenes/Splash';
import { HomeContainer } from '~/scenes/Home';
import { SongListContainer } from '~/components/SongList';
import { CollectionContainer } from '~/components/Collection';
import { FooterTabsContainer } from '~/components/FooterTabs';
import { NimbusCamera } from '~/components/Camera';
import { Preview } from '~/components/Preview';
import { storeAvailablePreview } from '~/redux/modules/availablePreview';

class App extends Component {
  static propTypes = {
    isAuthenticating: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    isAuthed: PropTypes.bool.isRequired
  }
  signOut = () => {
    fbAuth.signOut().then(() => {
      this.props.dispatch(notAuthed());
      Actions.splash();
    }).catch((error) => {
      console.warn(error);
      const user = fbAuth.currentUser;
      this.props.dispatch(isAuthed({
        displayName: snapshot.val().displayName,
        username: snapshot.val().username,
        uid: user.uid,
        profileImage: snapshot.val().profileImage,
        following: snapshot.val().following
      }))
    });
  }
  componentDidMount () {
    // Actions.signUp();
    fbAuth.onAuthStateChanged((user) => {
      if (user) {
        console.log('component did mount', user)
        db.ref(`users/${user.uid}/`).once('value', (snapshot) => {
          console.log('Component mounting', snapshot.val())
          console.log(snapshot.val().displayName);
          this.props.dispatch(isAuthed({
            displayName: snapshot.val().displayName,
            uid: user.uid,
            profileImage: snapshot.val().profileImage,
            following: snapshot.val().following
          }));
          this.props.dispatch(storeAvailablePreview(snapshot.val().currentPreview));
        })
        .then(() => Actions.home())
        .catch((error) => console.warn(error))
      } else {
        this.props.dispatch(notAuthed())
        Actions.splash();
      }
    });
  }
  render () {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="preSplash"
            component={PreSplash}
            title="Pre Splash"
            hideNavBar={true}
            initial={true}
            />
          <Scene
            key="splash"
            component={SplashContainer}
            title="Splash"
            hideNavBar={true}
          />
          <Scene
            key="login"
            component={Login}
            title="Login"
            hideNavBar={true}
          />
          <Scene
            key="signUp"
            component={SignUp}
            title="Sign Up"
            hideNavBar={true}
          />
          <Scene
            key="home"
            component={HomeContainer}
            title="Nimbus"
            navigationBarTitleImage={require('../../images.logo.png')}
            navigationBarTitleImageStyle={{resizeMode: 'contain', height: 27}}
            hideNavBar={false}
            hideBackImage={true}
            onRight={this.signOut}
            rightTitle='Sign out'
            rightButtonTextStyle={{color: '#fff'}}
            navigationBarStyle={{backgroundColor: '#141414', borderBottomColor: '#141414'}}
          />
          <Scene
            key="songList"
            component={SongListContainer}
            title="Available Songs"
            hideNavBar={false}
          />
          <Scene
            key="collection"
            component={CollectionContainer}
            title="Collection"
            hideNavBar={false}
            onRight={() => {}}
            rightTitle='Profile'
          />
          <Scene
            key="camera"
            component={NimbusCamera}
            title="Collection"
            hideNavBar={true}
          />
          <Scene
            key="preview"
            component={Preview}
            title="Preview"
            hideNavBar={true}
          />
        </Scene>
      </Router>
    );
  }
};

function mapStateToProps ({ authentication }) {
  return {
    isAuthenticating: authentication.isAuthenticating,
    isAuthed: authentication.isAuthed
  }
}

export default connect(mapStateToProps)(App);
