import React from 'react';
import './songHeader.css';
import props from 'prop-types';
function SongHeader(props) {
  return (
    <div className="song-header">
      <div className="song-header-title">{props.heading}</div>
      <img
        onClick={props.handleGenreClick}
        className="song-header-img"
        src={props.imgPath}
        alt="grid-icon"
      />
    </div>
  );
}

export default SongHeader;

SongHeader.propTypes = {
  heading: props.string.isRequired,
  imgPath: props.string.isRequired,
  handleGenreClick: props.func.isRequired,
};
