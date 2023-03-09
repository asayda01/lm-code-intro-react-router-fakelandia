import { render, screen } from "@testing-library/react";
import ComponentHeader from "./header";
import { BrowserRouter } from "react-router-dom";

describe("Testing for the Footer Component Label", () => {

    test(`When the component is rendered, then the Footer Component must be present`, async () => {

        render(
                
                <BrowserRouter>
                    
                    <ComponentHeader/>
                
                </BrowserRouter>

                );

        const testHome = screen.getByText(/Fakelandia Justice Department/i);

        expect(testHome).toBeInTheDocument();
    
        });

    }
);