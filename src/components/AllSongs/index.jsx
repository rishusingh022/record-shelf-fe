import React from 'react';
import './allSongs.css';
import { default as SongHeader } from '../SongHeader';
import { default as SongCard } from '../SongCard';
import props from 'prop-types';
let title = 'all songs';
import imgPath from '../../assets/icon-genre.svg';

import { GET_SONG_DATA } from '../../constant/apiEndPoints';
import { makeRequest } from '../../utils/makeRequest';
function AllSongs(props) {
  const [getSongData, setSongData] = React.useState([]);
  React.useEffect(() => {
    makeRequest(GET_SONG_DATA, {})
      .then((res) => {
        setSongData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="main-body">
      <SongHeader
        heading={title}
        imgPath={imgPath}
        handleGenreClick={props.handleGenreClick}
      />
      <div className="song-container">
        {getSongData.map((item, index) => {
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
};
