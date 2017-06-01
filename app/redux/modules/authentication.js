const AUTHENTICATING = 'AUTHENTICATING';
const NOT_AUTHED = 'NOT_AUTHED';
const IS_AUTHED = 'IS_AUTHED';

import { fbAuth, db } from '~/config/firebase';
import { Actions } from 'react-native-router-flux';

function authenticating () {
  return {
    type: AUTHENTICATING
  }
}

function notAuthed () {
  return {
    type: NOT_AUTHED
  }
}

function isAuthed () {
  return {
    type: IS_AUTHED
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
        uid: user.uid
      })

      dispatch(isAuthed());
      Actions.home()
    }).catch((error) => {
      console.warn('Error in createUser callback', error)
    });
  }
}

const initialState = {
  isAuthed: false,
  isAuthenticating: false
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
        isAuthed: false
      }
      case IS_AUTHED :
        return {
          isAuthenticating: false,
          isAuthed: true
        }
    default :
      return state
  }
};
