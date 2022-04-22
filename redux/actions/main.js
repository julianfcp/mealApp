import * as t from "./types";
import axios from "axios";

export const setInfo = (name) => (dispatch) => {
  dispatch({
    type: t.SET_NAME,
    payload: name,
  });
};

export const getMeals = () => async (dispatch) => {
  dispatch({
    type: t.HOME_LOADING,
  });
  const initialMeals = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  );

  console.log(initialMeals);

  dispatch({
    type: t.GET_MEALS,
    payload: initialMeals,
  });
};
