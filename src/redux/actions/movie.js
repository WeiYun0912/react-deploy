import { GET_MOVIE, ERROR_MOVIE } from "./types";
import axios from "axios";
import { API_KEY } from "../../config/index";
export const getMoives = () => async (dispatch) => {
  try {
    const req = await axios.get(
      `3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    );
    dispatch({
      type: GET_MOVIE,
      payload: req.data,
    });
  } catch (e) {
    dispatch({
      type: ERROR_MOVIE,
      payload: console.log(e),
    });
  }
};
