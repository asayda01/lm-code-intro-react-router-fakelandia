import { render , screen , waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ComponentConfessionDetails from './confession_details';


describe("Testing for the Confession Details Component Label", () => {

    test(`When the component is rendered, then the Confession Details Component label must be present`, async () => {

        const testonChangeConfessionDetailsEventHandler = jest.fn(  );

        render(<ComponentConfessionDetails valueDetails="" onChangeValueDetails={testonChangeConfessionDetailsEventHandler} />);

        const testInputTextbox = screen.getByRole("textbox");

        expect(testInputTextbox).toBeInTheDocument();
    
        });

    }
);

describe("Testing for the Confession Details Component Event Handler", () => {

    test(`If an input text is typed, it must React to the new data with calling an event handler function`, async () => {

        const testonChangeConfessionDetailsEventHandler = jest.fn(  );

        render(<ComponentConfessionDetails valueDetails="" onChangeValueDetails={testonChangeConfessionDetailsEventHandler} />);

        
        await  waitFor( () =>  {

                                    const testInputTextbox = screen.getByRole("textbox");
                                    userEvent.type(testInputTextbox, "The Test for the Confession Details Component");

                                }
            
                        );

        expect(testonChangeConfessionDetailsEventHandler).toHaveBeenCalledTimes(45)

    });

}
);


describe("Testing for the Confession Details Component Error Message", () => {

    test(`When the component is rendered, 
      when an invalid input is entered, e.g. too short characters entry
        then there should be an error messages`, async () => {
        
        const testonChangeConfessionDetailsEventHandler = jest.fn(  );

        render(<ComponentConfessionDetails valueDetails="" onChangeValueDetails={testonChangeConfessionDetailsEventHandler} />);

        await  waitFor( () =>  {

            const testInputTextbox = screen.getByRole("textbox");
            userEvent.type(testInputTextbox, "Hello");

            }

        );

        expect(screen.queryByText('ERROR - Details: Must be more than 5 characters.',{exact:false})).toBeInTheDocument();

    });
    
}
);