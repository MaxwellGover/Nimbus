const SAVE_SONG_PATH = 'SAVE_SONG_PATH';
const SAVE_VIDEO_PATH = 'SAVE_VIDEO_PATH';

export function saveSongPath (songPath) {
  console.log(songPath)
  return {
    type: SAVE_SONG_PATH,
    songPath
  }
};

export function saveVideoPath (videoPath) {
  return {
    type: SAVE_VIDEO_PATH,
    videoPath
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
        songPath: action.songPath
      }
    case SAVE_VIDEO_PATH:
      return {
        ...state,
        videoPath: action.videoPath
      }
    default:
      return state
  }
}
