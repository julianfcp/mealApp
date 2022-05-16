import * as t from "./types";
import axios from "axios";

export const getMeals = () => async (dispatch) => {
  dispatch({
    type: t.HOME_LOADING,
  });
  const initialMeals = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  );
  dispatch({
    type: t.GET_MEALS,
    payload: initialMeals,
  });
};

export const searchMeal = (mealName) => async (dispatch) => {
  dispatch({
    type: t.CLEAR_MEALS,
  });
  const sarchedMeals = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
  );

  dispatch({
    type: t.SEARCH_MEAL,
    payload: sarchedMeals,
  });
};
