/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import Label from ".";
import { labelType } from "./model";
test("check Label render", () => {
  render(<Label>Test Text</Label>);
  expect(screen.getByText("Test Text"));
});

test("check Label Title render", () => {
  render(<Label type={labelType.Title}>Test Text</Label>);
  expect(screen.getByText("Test Text"));
  expect(screen.getByRole("heading"));
});


test("check Label Subtitle render", () => {
  render(<Label type={labelType.Subtitle}>Test Text</Label>);
  expect(screen.getByText("Test Text"));
  expect(screen.getByRole("heading"));
});