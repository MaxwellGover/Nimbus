const STORE_AVAILABLE_PREVIEW = 'STORE_AVAILABLE_PREVIEW';

export function storeAvailablePreview (obj) {
  return {
    type: STORE_AVAILABLE_PREVIEW,
    obj
  }
}

const initialState = {
  song: 0,
  video: 0
}

export default function availablePreview (state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case STORE_AVAILABLE_PREVIEW :
      return {
        song: action.obj.song,
        video: action.obj.video
      }
    default :
      return state
  }
};
