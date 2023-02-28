import React from 'react';
import './allSongs.css';
import { default as SongHeader } from '../SongHeader';
import { default as SongCard } from '../SongCard';
import props from 'prop-types';
let title = 'all songs';
import imgPath from '../../assets/icon-genre.svg';
import { makeRequest } from '../../utils/makeRequest';
import { GET_SONGS_DATA, PATCH_SONG_DATA } from '../../constant/apiEndPoints';
function AllSongs(props) {
  return (
    <div className="main-body">
      <SongHeader
        heading={title}
        imgPath={imgPath}
        handleGenreClick={props.handleGenreClick}
      />
      <div className="song-container">
        {props.getSongData.map((item, index) => {
          return (
            <SongCard key={item.id} imgData={item} color={index % 2 === 0} />
          );
        })}
      </div>
    </div>
  );
}

export default AllSongs;

AllSongs.propTypes = {
  handleGenreClick: props.func.isRequired,
  getSongData: props.array.isRequired,
};
