import React from "react";
// Replace this with the appropriate location of your component
import Home from "../pages/index";
// Replace this with the appropriate location of your testing utility
import renderConnected from "../src/test/utils/renderConnected";
import { render, screen } from "@testing-library/react";

describe("<Home/>", () => {
  let wrapper, getByText;
  const initialState = {
    // ... Add your initial testing state here
    name: "guest",
    meals: [],
  };

  beforeEach(() => {
    const utils = renderConnected(<Home />, { initialState });

    wrapper = utils.container;
    console.log(wrapper);
    getByText = utils.getByText;
  });

  it("renders the component", () => {
    expect(wrapper.querySelector(".container"));
  });
});
