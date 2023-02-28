import React from 'react';
import './allSongsByGenre.css';
import { default as SongHeader } from '../SongHeader';
let title = 'genre';
import imgPath from '../../assets/icon-grid.svg';
import bollywoord from '../../assets/genre-bollywood.png';
import country from '../../assets/genre-country.png';
import pop from '../../assets/genre-pop.png';
import rock from '../../assets/genre-rock.png';
import { default as filterDataByGenre } from '../../utils/common';
import { default as GenreSongHeader } from '../genreSongHeader';
import { default as SongCard } from '../SongCard';
import props from 'prop-types';
const genre = {
  bollywood: bollywoord,
  country: country,
  pop: pop,
  rock: rock,
};
function AllSongsByGenre(props) {
  const filteredData = filterDataByGenre(props.getSongData);
  return (
    <div className="main-body">
      <SongHeader
        handleGenreClick={props.handleGenreClick}
        heading={title}
        imgPath={imgPath}
      />
      <div className="song-container">
        {Object.keys(filteredData).map(function (key, index) {
          return (
            <div
              key={index}
              style={{
                width: '100%',
              }}
            >
              <div className="song-container-body">
                {
                  <GenreSongHeader
                    imgGrid={genre[key.toLowerCase()]}
                    title={key}
                  />
                }
                {filteredData[key].map((item, index) => {
                  return (
                    <SongCard
                      key={item.id}
                      imgData={item}
                      color={index % 2 === 0}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
        ;
      </div>
    </div>
  );
}

export default AllSongsByGenre;

AllSongsByGenre.propTypes = {
  getSongData: props.array.isRequired,
  handleGenreClick: props.func.isRequired,
};
