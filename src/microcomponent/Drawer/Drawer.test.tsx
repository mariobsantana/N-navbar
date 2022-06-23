import {
  render,
  screen,
  fireEvent,
} from "@testing-library/react";
import Appbar from "../Appbar";
import { IconButton } from "@mui/material";
import { MainDrawer as Drawer, MainDrawer } from "./Drawer";

const props = {
  prevMonth: jest.fn(),
  nextMonth: jest.fn(),
  resetDate: jest.fn(),
  dates: [1, 2, 3],
};

describe("Drawer button tests", () => {
  describe("Rendering tests", () => {
    test("Should render Drawer if breakpoint is true", () => {
      render(<Appbar matchesSM={true} {...props} />);
      const drawerComponent = screen.getByTestId("mainDrawer");
      expect(drawerComponent).toBeInTheDocument();
    });
    test("Should not render Drawer if breakpoint is false", () => {
      render(<Appbar matchesSM={false} {...props} />);
      // queryByTestId returns either a value or null
      expect(screen.queryByTestId("mainDrawer")).toBeNull();
    });
  });
  describe("Display content when menu button is clicked", () => {
    test("Show content when the button is clicked once", () => {
      const handleClick = jest.fn();
      render(<IconButton onClick={handleClick}>a</IconButton>);
      fireEvent.click(screen.getByText(/a/i));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
    test("Show content when the button is clicked once", () => {
      const handleClick = jest.fn();
      render(<IconButton onClick={handleClick}>a</IconButton>);
      fireEvent.click(screen.getByText(/a/i));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
    it("should trigger drawer", async () => {
      const { getByTestId } = render(<MainDrawer matchesSM={false} {...props} data-testid="mainDrawer" />);

      fireEvent.click(getByTestId("mainDrawer"));
      expect(getByTestId("mainDrawer")).toBeVisible();
    });
  });

  describe("Fire event when a key is pressed", () => {
  
    test("Should call today button function", () => {
      render(<Appbar matchesSM={true} {...props} />);
      const drawerComponent = screen.getByTestId("mainDrawer");
      expect(drawerComponent).toBeInTheDocument();

      const buttonComponent = screen.getByRole("button");
      fireEvent.click(buttonComponent);
      expect(buttonComponent).toBeInTheDocument();
      console.log = jest.fn();
      const todayComponent = screen.getByText(/Today/);
      expect(todayComponent).toBeInTheDocument();
      fireEvent.click(todayComponent);
      const consoleSpy = jest.spyOn(console, "log");
      expect(consoleSpy).toHaveBeenCalledWith("Today button was clicked!");
    });

    test("Should call arrow button function", () => {
      render(<Appbar matchesSM={true} {...props} />);
      const drawerComponent = screen.getByTestId("mainDrawer");
      expect(drawerComponent).toBeInTheDocument();

      const buttonComponent = screen.getByRole("button");
      fireEvent.click(buttonComponent);
      expect(buttonComponent).toBeInTheDocument();
      console.log = jest.fn();
      const arrowComponent = screen.getByTestId("ArrowsLeft");
      expect(arrowComponent).toBeInTheDocument();

    });
  });
});
