const filterDataByGenre = (mockGetSongsData) => {
  // get the unique genres
  const uniqueGenres = [
    ...new Set(mockGetSongsData.map((song) => song.genre.name)),
  ];

  const songsByGenre = {};
  uniqueGenres.forEach((genre) => {
    songsByGenre[genre] = [];
  });

  mockGetSongsData.forEach((song) => {
    songsByGenre[song.genre.name].push(song);
  });
  return songsByGenre;
};

export default filterDataByGenre;
