/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import ForecastItem from ".";

const mockData = {
  tMin: 10,
  tMax: 20,
  precipitaProb: 30,
};

test("check ForecastItem render", () => {
  render(<ForecastItem data={mockData} />);
  expect(screen.getByText("Minimum temperature:10°C"));
  expect(screen.getByText("Maximum temperature:20°C"));
  expect(screen.getByText("% precipitation:30%"));
});
