import React, { useState , useEffect , useContext, Children, ReactElement } from 'react';

import { Misdemeanour } from "../types/misdemeanours.types";

export interface interfaceMisdemeanourFilterProps {

    misdemeanourSelection : string,
    onChangemisdemeanourSelection : ( misdemeanourSelection : string ) => void;

};

const ComponentMisdemeanourFilter : React.FC < interfaceMisdemeanourFilterProps > = ( { misdemeanourSelection , onChangemisdemeanourSelection}) => { 
    
    return (

        <>
            <h3> Filter Misdemeaour Type : </h3>
            
            <select value={misdemeanourSelection}  onChange = { ( event ) => { onChangemisdemeanourSelection (event.target.value) } } >
                
                <option value = "ALL 🤪 🗣 🥗 😈"> ALL Misdemeanours 🤪 🗣 🥗 😈 </option>
                <option value = "rudeness 🤪"> Mild Public Rudeness 🤪 </option>
                <option value = "lift 🗣"> Speaking in a Lift 🗣 </option>
                <option value = "vegetables 🥗"> Not Eating Your Vegetables 🥗 </option>
                <option value = "united 😈"> Supporting Manchester United 😈 </option>
    
            </select>
    
        </>
    
    );
    
};

export default ComponentMisdemeanourFilter;