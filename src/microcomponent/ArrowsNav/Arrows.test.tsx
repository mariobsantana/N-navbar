import React from "react";
import { render, screen, fireEvent} from "@testing-library/react";
import {ArrowsButtons} from "./Arrows";

describe("Testing arrow buttons", () => {
  const props = {
    prevMonth:jest.fn(),
    nextMonth:jest.fn()
  };

  describe("rendering test", () => {
    test("Should render Arrow nav", () => {
      render(<ArrowsButtons {...props} />);
      const ArrowComponent = screen.getByTestId("ArrowsNav");
      expect(ArrowComponent).toBeInTheDocument()
    });
  });

  describe("Functionality tests", () => {
    test("Should call onClick function on left arrow click", () => {
      render(<ArrowsButtons {...props}/>);
      const buttonComponent = screen.getByTestId("ArrowsLeft");
      fireEvent.click(buttonComponent);
      expect(props.prevMonth).toBeCalled();
    });
    test("Should call onClick function on right arrow click", () => {
      render(<ArrowsButtons {...props}/>);
      const buttonComponent = screen.getByTestId("ArrowsLeft");
      fireEvent.click(buttonComponent);
      expect(props.nextMonth).toBeCalled();
    });
  });
});
