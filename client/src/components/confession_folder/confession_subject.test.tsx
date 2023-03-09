import { render , screen , waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ComponentConfessionSubject from './confession_subject';


describe("Testing for the Confession Subject Component Label", () => {

    test(`When the component is rendered, then the Confession Subject Component label must be present`, async () => {

        const testonChangeConfessionSubjectEventHandler = jest.fn(  );

        render(<ComponentConfessionSubject valueSubject="" onChangeValueSubject={testonChangeConfessionSubjectEventHandler} />);

        const testInputTextbox = screen.getByRole("textbox");

        expect(testInputTextbox).toBeInTheDocument();
    
        });

    }
);

describe("Testing for the Confession Subject Component Event Handler", () => {

    test(`If an input text is typed, it must React to the new data with calling an event handler function`, async () => {

        const testonChangeConfessionSubjectEventHandler = jest.fn(  );

        render(<ComponentConfessionSubject valueSubject="" onChangeValueSubject={testonChangeConfessionSubjectEventHandler} />);

        
        await  waitFor( () =>  {

                                    const testInputTextbox = screen.getByRole("textbox");
                                    userEvent.type(testInputTextbox, "The Test for the Confession Subject Component");

                                }
            
                        );

        expect(testonChangeConfessionSubjectEventHandler).toHaveBeenCalledTimes(45)

    });

}
);


describe("Testing for the Confession Subject Component Error Message", () => {

    test(`When the component is rendered, 
      when an invalid input is entered, e.g. too short characters entry
        then there should be an error messages`, async () => {
        
        const testonChangeConfessionSubjectEventHandler = jest.fn(  );

        render(<ComponentConfessionSubject valueSubject="" onChangeValueSubject={testonChangeConfessionSubjectEventHandler} />);

        await  waitFor( () =>  {

            const testInputTextbox = screen.getByRole("textbox");
            userEvent.type(testInputTextbox, "Hi");

            }

        );

        expect(screen.queryByText('ERROR - Subject: Must be more than 2 characters. Numbers are allowed, but no special characters.',{exact:false})).toBeInTheDocument();

    });
    
}
);