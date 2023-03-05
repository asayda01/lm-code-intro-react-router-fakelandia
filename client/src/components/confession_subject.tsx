import React, { useState, useEffect, useContext, Children, ReactElement } from 'react';
import ComponentErrorMessage from './ErrorMessage';
export interface interfaceConfesSubjectProps {

    valueSubject : string ,
    onChangeValueSubject : ( valueSubject : string ) => void ;

};

const ComponentConfessionSubject : React.FC < interfaceConfesSubjectProps > = ( { valueSubject , onChangeValueSubject } ) => {

    const [errorMessage , setErrorMessage] = useState< string | undefined >('');
    const validate : ( value:string ) => string | undefined = ( value ) => {
        if ( (value.length<5  || value.length>60 ) || (!(/^[a-zA-Z0-9\s]*$/).test(value)) ){
            return "ERROR - Subject: Must be between 5 and 60 characters. Numbers are allowed, but no special characters."
        };
        return undefined;
    };

    return (
        
        <>

            <label htmlFor="Subject"> Subject : </label>
            <textarea id="subject" value={valueSubject} onChange={ (event) => { 
                                                                            const errorMessage = validate(event.target.value);
                                                                            setErrorMessage(errorMessage);
                                                                            onChangeValueSubject(event.target.value)} } />
            < ComponentErrorMessage errorMessage = {errorMessage} />
        </>
    
    )

};

export default ComponentConfessionSubject;