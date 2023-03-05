import React, { useState, useEffect, useContext, Children, ReactElement } from 'react';

import { interfaceMisdemeanourPageProps , misdemeanoursContextCreator } from './misdemeanour_page';

export interface interfaceConfesTextProps {

    confesText:string;
    
    onChangeConfesText:(event:React.ChangeEvent<HTMLInputElement>)=>void;

};

const ComponentConfession : React.FC = () => {

    const [confesTextComponent, setconfesTextComponent] =  useState (" confes & relax ");

    return (
        
        <> 
            
            <h3> Confession </h3>

            <form >

                <input type="submit" value= {confesTextComponent} onChange = { (event)=>setconfesTextComponent(event.target.value) }></input>

            </form>

        
        </>
    
    )

};

export default ComponentConfession;