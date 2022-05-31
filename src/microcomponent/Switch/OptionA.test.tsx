import React from "react";
import { render, screen, fireEvent, createEvent } from "@testing-library/react";
import { OptionA } from "./OptionA";

describe("Today button tests", () => {
  const props = {
    onClick: jest.fn(),
    "data-testid": "optionA",
  };
  describe("Rendering tests", () => {
    test("Should render text correctly", () => {
      render(<OptionA {...props}>Week</OptionA>);
      const buttonComponent = screen.getByTestId("optionA");
      expect(buttonComponent).toBeInTheDocument();
    });

    describe("Should change size depending on size prop", () => {
      test("Should render default size button", () => {
        render(<OptionA {...props}>Week</OptionA>);
        const buttonComponent = screen.getByTestId("optionA");
        expect(buttonComponent).toHaveStyle("font-size: .8em");
      });
      test("Should render small size button", () => {
        render(
          <OptionA size="small" {...props}>
            Week
          </OptionA>
        );
        const buttonComponent = screen.getByTestId("optionA");
        expect(buttonComponent).toHaveStyle("font-size: .6em");
      });
      test("Should render large button", () => {
        render(
          <OptionA size="large" {...props}>
            Week
          </OptionA>
        );
        const buttonComponent = screen.getByTestId("optionA");
        expect(buttonComponent).toHaveStyle("font-size: 1em");
      });
    });
  });

  describe("Functionality tests", () => {
    test("Should call onClick function", () => {
      render(<OptionA {...props}>Week</OptionA>);
      const buttonComponent = screen.getByTestId("optionA");
      fireEvent.click(buttonComponent);
      expect(props.onClick).toBeCalled();
    });
  });
});
