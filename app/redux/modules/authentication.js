const AUTHENTICATING = 'AUTHENTICATING';
const NOT_AUTHED = 'NOT_AUTHED';
const IS_AUTHED = 'IS_AUTHED';

import { fbAuth, db } from '~/config/firebase';
import { Actions } from 'react-native-router-flux';

export function authenticating () {
  return {
    type: AUTHENTICATING
  }
}

export function notAuthed () {
  return {
    type: NOT_AUTHED
  }
}

export function isAuthed (userData) {
  return {
    type: IS_AUTHED,
    userData
  }
}

export function loginUser (credentials) {
  return function (dispatch, getState) {
    dispatch(authenticating());

    const email = credentials.email;
    const password = credentials.password;

    fbAuth.signInWithEmailAndPassword(email, password).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    })
    .then(() => Actions.home())
    .catch((error) => {
      console.warn('Error in createUser callback', error)
    });
  }
}

export function createUser (userData) {
  return function (dispatch, getState) {
    dispatch(authenticating());

    const email = userData.email;
    const password = userData.password;

    fbAuth.createUserWithEmailAndPassword(email, password).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
    }).then(() => {
      const user = fbAuth.currentUser;

      db.ref('/users/' + user.uid).set({
        username: userData.username,
        displayName: userData.displayName,
        uid: user.uid,
        profileImage: '',
        following: 0
      })

      db.ref(`users/${user.uid}/`).once('value', (snapshot) => {
        dispatch(isAuthed({
          displayName: snapshot.displayName.val(),
          uid: user.uid,
          profileImage: snapshot.profileImage.val(),
          following: snapshot.following.val()
        }));
      }).then(() => Actions.home())
    }).catch((error) => {
      console.warn('Error in createUser callback', error)
    });
  }
}

const initialState = {
  isAuthed: false,
  isAuthenticating: false,
  uid: '',
  profileImage: '',
  following: 0
};

export default function authentication (state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATING :
      return {
        ...state,
        isAuthenticating: true
      }
    case NOT_AUTHED :
      return {
        isAuthenticating: false,
        isAuthed: false,
        uid: '',
        displayName: '',
        profileImage: '',
        following: 0
      }
      case IS_AUTHED :
        console.log('action', action)
        return {
          isAuthenticating: false,
          isAuthed: true,
          uid: action.userData.uid,
          displayName: action.userData.displayName,
          profileImage: action.userData.profileImage,
          following: action.userData.following
        }
    default :
      return state
  }
};
