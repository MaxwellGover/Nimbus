const SAVE_SONG_PATH = 'SAVE_SONG_PATH';
const SAVE_VIDEO_PATH = 'SAVE_VIDEO_PATH';

export function saveSongPath (url) {
  console.log(url)
  return {
    type: SAVE_SONG_PATH,
    url
  }
};

export function saveVideoPath (url) {
  return {
    type: SAVE_VIDEO_PATH,
    url
  }
};

const initialState = {
  songPath: '',
  videoPath: ''
};

export default function preview (state = initialState, action) {
  switch (action.type) {
    case SAVE_SONG_PATH:
      return {
        ...state,
        songPath: action.url
      }
    case SAVE_VIDEO_PATH:
      return {
        ...state,
        videoPath: action.url
      }
    default:
      return state
  }
}
