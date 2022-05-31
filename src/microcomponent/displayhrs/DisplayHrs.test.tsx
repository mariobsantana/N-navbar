
import { render, screen, fireEvent} from '@testing-library/react';
import {PopoverPopupState} from './DisplayHrs';

test('Render My Counter', () => {
   const hrsT = [
    { hrs: 45, name: ' AcademyJS' },
     { hrs: 25, name: ' Delivery' },
    { hrs: 30, name: ' Talent Management'},
   ];
  render(<PopoverPopupState hours={hrsT} />);

      const displayComponent = screen.getByText("100");
      expect(displayComponent).toBeInTheDocument();
  
});

test("Should render different hour correctly", () => {
   const hrsT = [
    { hrs: 45, name: ' AcademyJS' },
     { hrs: 25, name: ' Delivery' },
    { hrs: 30, name: ' Talent Management'},
   ];
  
      render(<PopoverPopupState  hours={hrsT}  />);
      const displayComponent = screen.getByText("100");
      expect(displayComponent).toBeInTheDocument();
      
  });
    
test("Should render correct amount of data", () => {
   const hrsT = [
    { hrs: 15, name: 'AcademyJS' },
     { hrs: 25, name: 'Delivery' },
    { hrs: 50, name: 'Talent Management'},
   ];
  
      render(<PopoverPopupState  hours={hrsT}  />);
      const displayComponent = screen.getByText("90");
      fireEvent.click(displayComponent)

      const listComponent = screen.getAllByText(/hrs/);
      expect(listComponent).toHaveLength(3)
      
  });
    

    