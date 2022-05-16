import React from "react";
import { render } from "@testing-library/react";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
// Replace this with the appropriate imports for your project
import rootReducer from "../../../redux/reducers";
import thunk from "redux-thunk";

const middleware = [thunk];

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const enhancer = composeEnhancers(applyMiddleware(...middleware));
const renderConnected = (
  ui,
  { store = createStore(rootReducer, enhancer), ...renderOptions } = {}
) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );
  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

export default renderConnected;
