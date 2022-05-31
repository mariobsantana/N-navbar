import React from "react";
import { render, screen, fireEvent, createEvent } from "@testing-library/react";
import { SwitchButton } from "./Switch";

describe("Today button tests", () => {
  const props = {
    onClick: jest.fn(),
    "data-testid": "optionA",
  };
  describe("Rendering Week Button tests", () => {
    test("Should render text correctly", () => {
      render(<SwitchButton {...props}/>);
      const buttonComponent = screen.getByTestId("optionA");
      expect(buttonComponent).toBeInTheDocument();
    });

    describe("Should change size depending on size prop", () => {
      test("Should render default size button", () => {
        render(<SwitchButton {...props}/>);
        const buttonComponent = screen.getByTestId("optionA");
        expect(buttonComponent).toHaveStyle("font-size: .8em");
      });
      test("Should render small size button", () => {
        render(
            <SwitchButton size="small" {...props}/>
        );
        const buttonComponent = screen.getByTestId("optionA");
        expect(buttonComponent).toHaveStyle("font-size: .6em");
      });
      test("Should render large button", () => {
        render(
            <SwitchButton size="large" {...props}/>
        );
        const buttonComponent = screen.getByTestId("optionA");
        expect(buttonComponent).toHaveStyle("font-size: 1em");
      });
    });
  });

  describe("Rendering Month Button tests", () => {
    test("Should render text correctly", () => {
      render(<SwitchButton {...props}/>);
      const buttonComponent = screen.getByTestId("optionB");
      expect(buttonComponent).toBeInTheDocument();
    });

    describe("Should change size depending on size prop", () => {
      test("Should render default size button", () => {
        render(<SwitchButton {...props}/>);
        const buttonComponent = screen.getByTestId("optionB");
        expect(buttonComponent).toHaveStyle("font-size: .8em");
      });
      test("Should render small size button", () => {
        render(
            <SwitchButton size="small" {...props}/>
        );
        const buttonComponent = screen.getByTestId("optionB");
        expect(buttonComponent).toHaveStyle("font-size: .6em");
      });
      test("Should render large button", () => {
        render(
            <SwitchButton size="large" {...props}/>
        );
        const buttonComponent = screen.getByTestId("optionB");
        expect(buttonComponent).toHaveStyle("font-size: 1em");
      });
    });
  });

  describe("Functionality tests Week button", () => {
    test("Should call onClick function", () => {
        render(<SwitchButton {...props}/>);
          
          console.log = jest.fn();
    
          const buttonComponent = screen.getByText(/Week/);
          fireEvent.click(buttonComponent);
    
          const consoleSpy = jest.spyOn(console, 'log');
          expect(consoleSpy).toHaveBeenCalledWith("Week was clicked!");
    });
  });

  describe("Functionality tests Month button", () => {
    test("Should call onClick function", () => {
        render(<SwitchButton {...props}/>);
          
          console.log = jest.fn();
    
          const buttonComponent = screen.getByText(/Month/);
          fireEvent.click(buttonComponent);
    
          const consoleSpy = jest.spyOn(console, 'log');
          expect(consoleSpy).toHaveBeenCalledWith("Month was clicked!");
    });
  });
});