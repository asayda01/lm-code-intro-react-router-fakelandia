import React, { useState, useEffect, useContext, Children, ReactElement } from 'react';


export interface interfaceConfesDetailsProps {

    valueDetails : string ,
    onChangeValueDetails : ( valueDetails : string ) => void ;

};

const ComponentConfessionDetails : React.FC < interfaceConfesDetailsProps > = ( { valueDetails , onChangeValueDetails } ) => {

    return (
        
        <> 
               
            <label htmlFor="Details"> Details : </label>
            <textarea id="details" value={valueDetails} onChange={(event) => onChangeValueDetails(event.target.value)} />

        </>
    
    )

};

export default ComponentConfessionDetails;