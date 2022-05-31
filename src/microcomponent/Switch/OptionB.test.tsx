import React from "react";
import { render, screen, fireEvent, createEvent } from "@testing-library/react";
import { OptionB } from "./OptionB";

describe("Today button tests", () => {
  const props = {
    onClick: jest.fn(),
    "data-testid": "optionB",
  };
  describe("Rendering tests", () => {
    test("Should render text correctly", () => {
      render(<OptionB {...props}>Month</OptionB>);
      const buttonComponent = screen.getByTestId("optionB");
      expect(buttonComponent).toBeInTheDocument();
    });

    describe("Should change size depending on size prop", () => {
      test("Should render default size button", () => {
        render(<OptionB {...props}>Month</OptionB>);
        const buttonComponent = screen.getByTestId("optionB");
        expect(buttonComponent).toHaveStyle("font-size: .8em");
      });
      test("Should render small size button", () => {
        render(
          <OptionB size="small" {...props}>
            Month
          </OptionB>
        );
        const buttonComponent = screen.getByTestId("optionB");
        expect(buttonComponent).toHaveStyle("font-size: .6em");
      });
      test("Should render large button", () => {
        render(
          <OptionB size="large" {...props}>
            Month
          </OptionB>
        );
        const buttonComponent = screen.getByTestId("optionB");
        expect(buttonComponent).toHaveStyle("font-size: 1em");
      });
    });
  });

  describe("Functionality tests", () => {
    test("Should call onClick function", () => {
      render(<OptionB {...props}>Month</OptionB>);
      const buttonComponent = screen.getByTestId("optionB");
      fireEvent.click(buttonComponent);
      expect(props.onClick).toBeCalled();
    });
  });
});
