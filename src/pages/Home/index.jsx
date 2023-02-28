import React from 'react';
import { default as Header } from '../../components/Header';
import { default as SyncScreen } from '../../components/SyncScreen';
import { default as AllSongs } from '../../components/AllSongs';
import { default as AllSongsByGenre } from '../../components/AllSongsByGenre';
import { GET_SONG_DATA } from '../../constant/apiEndPoints';
import { makeRequest } from '../../utils/makeRequest';
function Home() {
  const [isSynced, setIsSynced] = React.useState(false);
  const [clikedGenre, setClickedGenre] = React.useState(false);
  const [getSongData, setSongData] = React.useState([]);
  const handleSync = () => {
    setIsSynced(true);
  };
  const handleGenreClick = () => {
    setClickedGenre(!clikedGenre);
  };
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
    <div>
      <Header />
      {!isSynced && <SyncScreen handleSync={handleSync} />}
      {isSynced && !clikedGenre && (
        <AllSongs
          handleGenreClick={handleGenreClick}
          getSongData={getSongData}
        />
      )}
      {isSynced && clikedGenre && (
        <AllSongsByGenre
          handleGenreClick={handleGenreClick}
          getSongData={getSongData}
        />
      )}
    </div>
  );
}

export default Home;
