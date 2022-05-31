import { render, screen, fireEvent } from "@testing-library/react";
import { MainLogo } from "../logo/logo";


    test("Should render text correctly", () => {
      render(<MainLogo />);
      const imageComponent = screen.getByTestId("mainLogo");
      expect(imageComponent).toBeInTheDocument();
    });
  
  describe("Should change size depending on size prop", () => {

    test("Should render default size logo", () => {
        render(
            <MainLogo />
          );
      const imageComponent = screen.getByTestId("mainLogo");
      expect(imageComponent).toHaveStyle("width: 8rem");
    });
    
    test("Should render small size logo", () => {
      render(
        <MainLogo size="small" />
      );
      const imageComponent = screen.getByTestId("mainLogo");
      expect(imageComponent).toHaveStyle("width: 4rem");
    });

    test("Should render large logo", () => {
      render(
        <MainLogo size="large"/>
      );
      const imageComponent = screen.getByTestId("mainLogo");
      expect(imageComponent).toHaveStyle("width: 12rem");
})
  })
