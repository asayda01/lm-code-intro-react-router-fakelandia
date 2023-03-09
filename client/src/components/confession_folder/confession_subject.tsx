import React, { useState } from 'react';
import ComponentErrorMessage from '../error_message_folder/error_message';


export interface interfaceConfesSubjectProps {

    valueSubject : string ,
    onChangeValueSubject : ( valueSubject : string ) => void ;

};

const ComponentConfessionSubject : React.FC < interfaceConfesSubjectProps > = ( { valueSubject , onChangeValueSubject } ) => {

    const [errorMessage , setErrorMessage] = useState< string | undefined >('');
    const validate : ( value:string ) => string | undefined = ( value ) => {
        if ( (value.length<=2  ) || (!(/^[a-zA-Z0-9\s]*$/).test(value)) ){
            return "ERROR - Subject: Must be more than 2 characters. Numbers are allowed, but no special characters."
        };
        return undefined;
    };

    return (
        
        <>

            <label htmlFor="Subject"> Subject : </label>
            <textarea rows={1} cols={30} id="subject" value={valueSubject} onChange={ (event) => { 
                                                                            const errorMessage = validate(event.target.value);
                                                                            setErrorMessage(errorMessage);
                                                                            onChangeValueSubject(event.target.value)} } />
            < ComponentErrorMessage errorMessage = {errorMessage} />
        </>
    
    )

};

export default ComponentConfessionSubject;