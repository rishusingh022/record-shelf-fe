export const BACKEND_URL = 'http://localhost:8080/';

export const GET_SONG_DATA = {
  url: 'api/records',
  method: 'get',
};

export const GET_SONGS_DATA = (id) => ({
  url: `api/records/${id}/likes`,
  method: 'get',
});

export const PATCH_SONG_DATA = (id) => ({
  url: `api/records/${id}/likes`,
  method: 'patch',
});
