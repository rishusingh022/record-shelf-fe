import React from 'react';
import { default as Header } from '../../components/Header';
import { default as SyncScreen } from '../../components/SyncScreen';
import { default as AllSongs } from '../../components/AllSongs';
import { default as AllSongsByGenre } from '../../components/AllSongsByGenre';
function Home() {
  const [isSynced, setIsSynced] = React.useState(false);
  const [clikedGenre, setClickedGenre] = React.useState(false);
  const handleSync = () => {
    setIsSynced(true);
  };
  const handleGenreClick = () => {
    setClickedGenre(!clikedGenre);
  };
  return (
    <div>
      <Header />
      {!isSynced && <SyncScreen handleSync={handleSync} />}
      {isSynced && !clikedGenre && (
        <AllSongs handleGenreClick={handleGenreClick} />
      )}
      {isSynced && clikedGenre && <AllSongsByGenre />}
    </div>
  );
}

export default Home;
