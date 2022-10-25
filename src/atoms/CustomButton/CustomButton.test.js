/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import CustomButton from ".";
test("check Button render", () => {
  render(<CustomButton>Test Text</CustomButton>);
  expect(screen.getByText("Test Text"));
  expect(screen.getByRole("button"));
});
