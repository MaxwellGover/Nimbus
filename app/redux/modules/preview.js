const SAVE_SONG_PATH = 'SAVE_SONG_PATH';
const SAVE_VIDEO_PATH = 'SAVE_VIDEO_PATH';
const SAVE_VIDEO_DOWNLOAD_URL = 'SAVE_VIDEO_DOWNLOAD_URL';

export function saveSongPath (songPath) {
  console.log(songPath);
  return {
    type: SAVE_SONG_PATH,
    songPath
  }
};

export function saveVideoPath (videoPath) {
  console.log('video path', videoPath);
  return {
    type: SAVE_VIDEO_PATH,
    videoPath
  }
};

export function saveVideoDownloadURL (url) {
  return {
    type: SAVE_VIDEO_DOWNLOAD_URL,
    url
  }
};

const initialState = {
  songDownloadURL: '',
  videoPathOnDevice: ''
  videoDownloadURL: ''
};

console.log(initialState);

export default function preview (state = initialState, action) {
  switch (action.type) {
    case SAVE_SONG_PATH:
      return {
        ...state,
        songDownloadURL: action.songPath
      }
    case SAVE_VIDEO_PATH:
      return {
        ...state,
        videoPathOnDevice: action.videoPath
      }
    case SAVE_VIDEO_PATH:
      return {
        ...state,
        videoDownloadURL: action.url
      }
    default:
      return state
  }
}
