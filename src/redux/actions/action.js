export const ADD_ARTIST_MUSIC = "ADD_ARTIST_MUSIC";
export const GET_ARTISTS = "GET_ARTISTS";

export const searchMusic = (e) => {
  return {
    type: ADD_ARTIST_MUSIC,
    payload: e,
  };
};

export const getArtists = (data) => {
  return {
    type: GET_ARTISTS,
    payload: data,
  };
};
