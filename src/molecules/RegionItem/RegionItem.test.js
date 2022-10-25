/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import RegionItem from ".";

import { Provider } from "react-redux";
import { store } from "../../store";

const mockData = {
  idAreaAviso: "AVR",
  globalIdLocal: 1030800,
};

test("check RegionItem render", () => {
  render(
    <Provider store={store}>
      <RegionItem data={mockData} />
    </Provider>
  );
  expect(screen.getByText("1030800 AVR"));
});
