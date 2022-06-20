import { render, screen } from '@testing-library/react';
import { DisplayDate } from './displayDate'

//componente de semana y no explote todo
const props = {
    dates: [1, 2, 3]
}
test("Should render text correctly", () => {

    render(<DisplayDate {...props} data-testid="displayDate" />);
    const displayComponent = screen.getByTestId("displayDate");
    expect(displayComponent).toBeInTheDocument();


});

describe("Should render date correctly depending on props", () => {

    test("Should render same date correctly", () => {
        const diffDateProps = {
            startDate: [2022, 10, 3],
            endDate: [2022, 10, 3],
        }

        render(<DisplayDate {...props} {...diffDateProps} data-testid="displayDate" />);
        const displayComponent = screen.getByText("Feb 2022");
        expect(displayComponent).toBeInTheDocument();

    });

    test("Should render different date correctly", () => {
        const diffDateProps = {
            startDate: [1, 2, 3],
            endDate: [1, 3, 3],
        }

        render(<DisplayDate {...props} {...diffDateProps} data-testid="displayDate" />);
        const displayComponent = screen.getByText("Feb - Mar 2022");
        expect(displayComponent).toBeInTheDocument();

    });

});