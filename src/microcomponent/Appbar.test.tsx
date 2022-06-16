import { render, screen } from "@testing-library/react";
import { Simulate } from "react-dom/test-utils";
import ResponsiveAppBar from "./Appbar";

const propsFalse = {
  matchesSM: false,
  prevMonth: jest.fn(),
  nextMonth: jest.fn(),
};

const propsTrue = {
  matchesSM: true,
  prevMonth: jest.fn(),
  nextMonth: jest.fn(),
};

test("It should render", () => {
  render(<ResponsiveAppBar {...propsFalse} />);

  expect(screen.getByText("Today")).toBeInTheDocument();
  expect(screen.getByText("Month")).toBeInTheDocument();
  expect(screen.getByText("Week")).toBeInTheDocument();

  Simulate.click(screen.getByText("Today"));
  Simulate.click(screen.getByText("Month"));
  Simulate.click(screen.getByText("Week"));

  Simulate.click(screen.getByTestId("ArrowForwardIosIcon"));
});

test("It should render small component", () => {
  render(<ResponsiveAppBar {...propsTrue} />);

  expect(screen.findByTestId("MenuIcon")).toBeDefined();
});
