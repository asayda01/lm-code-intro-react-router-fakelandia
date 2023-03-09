import { render, screen } from "@testing-library/react";
import ComponentFooter from "./footer";


describe("Testing for the Footer Component Label", () => {

    test(`When the component is rendered, then the Footer Component must be present`, async () => {

        render(<ComponentFooter  />);

        const testHome = screen.getByText(/Footer © 2023 Cem Saydam/i);

        expect(testHome).toBeInTheDocument();
    
        });

    }
);