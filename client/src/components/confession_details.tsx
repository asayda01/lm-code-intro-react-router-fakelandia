import React, { useState, useEffect, useContext, Children, ReactElement } from 'react';
import ComponentErrorMessage from './ErrorMessage';

export interface interfaceConfesDetailsProps {

    valueDetails : string ,
    onChangeValueDetails : ( valueDetails : string ) => void ;

};

const ComponentConfessionDetails : React.FC < interfaceConfesDetailsProps > = ( { valueDetails , onChangeValueDetails } ) => {

    const [errorMessage , setErrorMessage] = useState< string | undefined >('');
    const validate : ( value:string ) => string | undefined = ( value ) => {
        if ( (value.length<5 ) || (!(/^[a-zA-Z0-9\s]*$/).test(value)) ){
            return "ERROR - Details: Must be more than 5 characters."
        };
        return undefined;
    };

    return (
        
        <> 
            
            <textarea id="details" value={valueDetails} onChange={(event) => {
                                                                                const errorMessage = validate(event.target.value);
                                                                                setErrorMessage(errorMessage);
                                                                                onChangeValueDetails(event.target.value) 
                                                                            } } />
            < ComponentErrorMessage errorMessage = {errorMessage} />

        </>
    
    )

};

export default ComponentConfessionDetails;