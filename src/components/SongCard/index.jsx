import React from 'react';
import './songCard.css';
import PropTypes from 'prop-types';
import imgGreyHeart from '../../assets/heart-gray.svg';
import imgRedHeart from '../../assets/heart-red.svg';
import { makeRequest } from '../../utils/makeRequest';
import { GET_SONGS_DATA, PATCH_SONG_DATA } from '../../constant/apiEndPoints';
function SongCard(props) {
  const [isLiked, setIsLiked] = React.useState(false);
  const [count, setCount] = React.useState(6);
  const handleLike = () => {
    setIsLiked(!isLiked);
    makeRequest(PATCH_SONG_DATA(props.imgData.id), {
      data: {
        like: !isLiked,
      },
    });
    if (isLiked) {
      setCount(count - 1);
    }
    if (!isLiked) {
      setCount(count + 1);
    }
    console.log(props.songData);
  };
  React.useEffect(() => {
    const fetchSongData = async () => {
      const songData = await makeRequest(GET_SONGS_DATA(props.imgData.id));
      if (songData) {
        setIsLiked(songData.data.like);
        setCount(songData.data.count);
      }
    };
    fetchSongData();
  }, []);
  return (
    // apply styles to the card
    <div
      style={{ background: props.color ? '#ababab' : '#dfdfdf' }}
      className="card"
    >
      <img src={props.imgData.imageUrl} />
      <div className="card-body">
        <div className="song-card-footer">
          <p className="song-name">{props.imgData.name}</p>
          <p className="song-author">{props.imgData.artist.name}</p>
        </div>
        <div onClick={handleLike} className="card-body-icon">
          <img src={isLiked ? imgRedHeart : imgGreyHeart} />
          <div className="count-likes">
            <p>{count}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SongCard;

SongCard.propTypes = {
  imgData: PropTypes.object,
  color: PropTypes.bool,
  songData: PropTypes.object,
};
