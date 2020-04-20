import { combineReducers } from 'redux';

const songsReducer = () => {
  // this is a static list
  return [
    {
      title: 'No Scrubs',
      duration: '4:05',
    },
    {
      title: 'No Diggity',
      duration: '3:30',
    },
    {
      title: 'Barbie Girl',
      duration: '2:45',
    },
    {
      title: "Don't Speak",
      duration: '3:20',
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
