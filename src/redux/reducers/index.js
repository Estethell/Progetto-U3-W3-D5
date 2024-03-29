import { ADD_ARTIST_MUSIC } from "../actions/action";

const initialState = {
  music: {
    search: "",
  },
};

const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTIST_MUSIC:
      return {
        ...state,
        music: {
          ...state.music,
          search: state.music.search.concat(action.payload),
        },
      };

    default:
      return state;
  }
};

export default MainReducer;
