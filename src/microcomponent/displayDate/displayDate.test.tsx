import { render, screen } from '@testing-library/react';
import { DisplayDate } from './displayDate'
import { dates } from "../../data/dates"

// const props = {
//     startDate: dates.startDate,
//     endDate: dates.endDate,
// }
// test("Should render text correctly", () => {

//     render(<DisplayDate dates={props} data-testid="displayDate" />);
//     const displayComponent = screen.getByTestId("displayDate");
//     expect(displayComponent).toBeInTheDocument();


// });

// describe("Should render date correctly depending on props", () => {

//     test("Should render same date correctly", () => {
//         const diffDateProps = {
//             startDate: new Date('Feb 2022'),
//             endDate: new Date('Feb 2022'),
//         }

//         render(<DisplayDate dates={diffDateProps} data-testid="displayDate" />);
//         const displayComponent = screen.getByText("Feb 2022");
//         expect(displayComponent).toBeInTheDocument();

//     });

//     test("Should render different date correctly", () => {
//         const diffDateProps = {
//             startDate: new Date('Feb 2022'),
//             endDate: new Date('Mar 2022'),
//         }

//         render(<DisplayDate dates={diffDateProps} data-testid="displayDate" />);
//         const displayComponent = screen.getByText("Feb - Mar 2022");
//         expect(displayComponent).toBeInTheDocument();

//     });

// });