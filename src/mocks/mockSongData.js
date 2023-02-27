const mockGetSongsData = {
  id: '94af94a3-9d47-4dd8-9b45-1c51a9443e96',
  name: 'Maps',
  imageUrl: 'https://i.scdn.co/image/ab67616d0000b273442b53773d50e1b5369bb16c',
  artist: {
    id: '496b0a85-2bfa-45bc-8d0f-57fe0ce55708',
    name: 'Maroon 5',
  },
  genre: {
    id: '128aa7f8-c943-48ce-b352-7edd26fa4c6e',
    name: 'Pop',
  },
};

const mockGetLikeData = {
  data: {
    count: 15,
    like: true,
  },
};

module.exports = {
  mockGetSongsData,
  mockGetLikeData,
};
