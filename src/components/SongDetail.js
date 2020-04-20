import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select a song</div>;
  }

  return (
    <div>
      <h3>Details for:</h3>
      <p>Title: {song.title}</p>
      <p>Duration: {song.duration}</p>
    </div>
  );
};

// called with entire state object and pull out the property that we care about
const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

// wrap the SongDetail with the connect component to get info out of Redux store
export default connect(mapStateToProps)(SongDetail);
