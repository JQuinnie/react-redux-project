import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {
  console.log(props);
  return <div>Song Detail</div>;
};

// called with entire state object and pull out the property that we care about
const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

// wrap the SongDetail with the connect component to get info out of Redux store
export default connect(mapStateToProps)(SongDetail);
