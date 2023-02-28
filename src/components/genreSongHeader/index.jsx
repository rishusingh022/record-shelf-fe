import React from 'react';
import './genreSongHeader.css';
import props from 'prop-types';
function GenreSongHeader(props) {
  return (
    <div className="genre-song-header">
      <div className="genre-song-header-img">
        <img src={props.imgGrid} alt="grid" />
      </div>
      <div className="genre-song-header-text">
        <div className="genre-title">{props.title}</div>
      </div>
    </div>
  );
}

export default GenreSongHeader;

GenreSongHeader.propTypes = {
  imgGrid: props.string.isRequired,
  title: props.string.isRequired,
};
