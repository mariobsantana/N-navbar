import { render, screen } from '@testing-library/react';
import { DisplayDate } from './displayDate'
import { dates } from "../../data/dates"

const props = {
    dates: [2022, 9, 3],
    date2: [2022, 10, 3]
}
test("Should render text correctly", () => {

    render(<DisplayDate {...props} data-testid="displayDate" />);
    const displayComponent = screen.getByTestId("displayDate");
    expect(displayComponent).toBeInTheDocument();


});

describe("Should render date correctly depending on props", () => {

    test("Should render same date correctly", () => {
        const diffDateProps = {
            dates: [2022, 10, 3]
        }

        render(<DisplayDate {...diffDateProps} data-testid="displayDate" />);
        const displayComponent = screen.getByText("Oct 2022");
        expect(displayComponent).toBeInTheDocument();

    });

    test("Should render different date correctly", () => {
        const diffDateProps = {
            dates: [2022, 10, 3],
            date2: [2022, 11, 3]
        }

        render(<DisplayDate {...props} {...diffDateProps} data-testid="displayDate" />);
        const displayComponent = screen.getByText("Oct - Nov 2022");
        expect(displayComponent).toBeInTheDocument();

    });

});