import * as t from "../actions/types";

export const initialState = {
  name: "guest",
  meals: [],
};

const main = (state = initialState, action) => {
  switch (action.type) {
    case t.SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case t.HOME_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case t.GET_MEALS:
      return {
        ...state,
        meals: action.payload,
        isLoading: false,
      };
    case t.CLEAR_MEALS:
      return {
        ...state,
        meals: [],
        isLoading: true,
      };
    case t.SEARCH_MEAL:
      return {
        ...state,
        meals: action.payload,
        isLoading: false,
      };
    default:
      return { ...state };
  }
};

export default main;
