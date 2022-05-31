import React from "react";
import { render, screen, fireEvent, createEvent } from "@testing-library/react";
import { TodayButton } from "./todayButton";

describe("Today button tests", () => {
  const props = {
    onClick: jest.fn(),
    "data-testid": "todayButton",
  };
  describe("Rendering tests", () => {
    test("Should render text correctly", () => {
      render(<TodayButton {...props}>Today</TodayButton>);
      const buttonComponent = screen.getByTestId("todayButton");
      expect(buttonComponent).toBeInTheDocument();
    });

    describe("Should change size depending on size prop", () => {
      test("Should render default size button", () => {
        render(<TodayButton {...props}>Today</TodayButton>);
        const buttonComponent = screen.getByTestId("todayButton");
        expect(buttonComponent).toHaveStyle("font-size: .8em");
      });
      test("Should render small size button", () => {
        render(
          <TodayButton size="small" {...props}>
            Today
          </TodayButton>
        );
        const buttonComponent = screen.getByTestId("todayButton");
        expect(buttonComponent).toHaveStyle("font-size: .6em");
      });
      test("Should render large button", () => {
        render(
          <TodayButton size="large" {...props}>
            Today
          </TodayButton>
        );
        const buttonComponent = screen.getByTestId("todayButton");
        expect(buttonComponent).toHaveStyle("font-size: 1em");
      });
    });
  });

  describe("Functionality tests", () => {
    test("Should call onClick function", () => {
      render(<TodayButton {...props}>Today</TodayButton>);
      const buttonComponent = screen.getByTestId("todayButton");
      fireEvent.click(buttonComponent);
      expect(props.onClick).toBeCalled();
    });
  });
});
