import { GET_MOVIE } from "../actions/types";
const initState = {
  movielist: [],
  loading: true,
};

const movie = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_MOVIE:
      return {
        ...state,
        movielist: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default movie;
