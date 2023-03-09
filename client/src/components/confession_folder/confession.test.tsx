import { render , screen } from "@testing-library/react";

import ComponentConfession from './confession';


describe("Testing for the Confession Component Label", () => {

    test(`When the component is rendered, then the Confession Component label must be present`, async () => {


        render(<ComponentConfession />);

        const linkElementTitle = screen.getByText(/confession/i);
        expect(linkElementTitle).toBeInTheDocument();
        const linkElementSubject = screen.getByText(/subject/i);
        expect(linkElementSubject).toBeInTheDocument();
        const linkElementContact = screen.getByText(/reason for contact /i);
        expect(linkElementContact).toBeInTheDocument();
    
        });

    }
);