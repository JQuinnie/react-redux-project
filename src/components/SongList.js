import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
  // helper method
  renderList() {
    return this.props.songs.map((song, idx) => {
      return (
        <div className="item" key={idx}>
          <div className="right floated content">
            <button className="ui button primary" onClick={() => this.props.selectSong(song)}>
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// taking state object and computate and then eventually shows up as props inside the component
// called with all the state in the Redux store
const mapStateToProps = (state) => {
  // console.log(state);

  return {
    songs: state.songs,
  };
};

// React component connect that connects to Provider
// configure connect by passing a function to tell it how to get some data from Provider
// give me the songs from state in the Redux store
// pass action creator to dispatch function
export default connect(mapStateToProps, { selectSong })(SongList);
