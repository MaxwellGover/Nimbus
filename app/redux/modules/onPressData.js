const STORE_SELECTED_DATA = 'STORE_SELECTED_DATA';

export function storeSelectedData (obj) {
  return {
    type: STORE_SELECTED_DATA,
    obj
  }
}

const initialState = {
  song: 0,
  video: 0
}

export default function onPressData (state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case STORE_SELECTED_DATA:
      return {
        song: action.obj.song,
        video: action.obj.video
      }
    default :
      return state
  }
};
