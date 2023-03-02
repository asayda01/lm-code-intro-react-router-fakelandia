import React, { useState , useEffect , useContext, Children, ReactElement } from 'react';

import { Misdemeanour } from "../types/misdemeanours.types";


const ComponentMisdemeanour  : React.FC<{ misdemeanour: Misdemeanour}> = ({ misdemeanour }) => {
    
    return (

        <>

            <div>

                <p>Citizen ID : {misdemeanour.citizenId}</p>
                <p>Crime : {misdemeanour.misdemeanour}</p>
                <p>Date : {misdemeanour.date}</p>
            
            </div>

        </>

    )

};

export default ComponentMisdemeanour;