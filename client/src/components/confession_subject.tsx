import React, { useState, useEffect, useContext, Children, ReactElement } from 'react';

export interface interfaceConfesSubjectProps {

    valueSubject : string ,
    onChangeValueSubject : ( valueSubject : string ) => void ;

};

const ComponentConfessionSubject : React.FC < interfaceConfesSubjectProps > = ( { valueSubject , onChangeValueSubject } ) => {

    return (
        
        <>

            <label htmlFor="Subject"> Subject : </label>
            <textarea id="subject" value={valueSubject} onChange={ (event) => onChangeValueSubject(event.target.value)} />

        </>
    
    )

};

export default ComponentConfessionSubject;