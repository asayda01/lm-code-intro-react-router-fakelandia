import React, { useState, useEffect, useContext, Children, ReactElement } from 'react';
import ComponentConfessionSubject from './confession_subject';
import ComponentConfessionDetails from './confession_details';
import ComponentConfessionContact , {interfaceConfesContactProps} from './confession_contact';
import { MisdemeanourKind, JustTalk } from '../types/misdemeanours.types';


export interface interfaceConfesTextProps {

    confesText:string;
    onChangeConfesText:(event:React.ChangeEvent<HTMLInputElement>)=>void;

};

const ComponentConfession : React.FC = () => {

    const [confesTextSubject, setconfesTextSubject] =  useState (" Type in Subject ");
    const [confesTextContact, setconfesTextContact] =  useState <MisdemeanourKind | JustTalk> ( "Just Talk 🕊️☮️🕊️" );
    const [confesTextDetails, setconfesTextDetails] =  useState (" Type in Details ");

    return (

        <>
        
            <form className='form'> 
            
                <p>  It's very difficult to catch people committing misdemeanours so we appreciate it when citizens confess to us directly.            </p>
                <p>  However, if you're just having a hard day and need to vent then you're welcome to contact us here too 😊. Up to you!              </p>

                <tr> <ComponentConfessionSubject  valueSubject={confesTextSubject} onChangeValueSubject = { (event)=>setconfesTextSubject(event) } /> </tr>
                <tr> <ComponentConfessionContact  valueContact={confesTextContact} onChangeValueContact = { (event)=>setconfesTextContact(event) } /> </tr>
                <tr> <ComponentConfessionDetails  valueDetails={confesTextDetails} onChangeValueDetails = { (event)=>setconfesTextDetails(event) } /> </tr>
                <tr> <button type='submit' > Confess </button>                                                                                        </tr>

            </form>

            

        </>

    )

};

export default ComponentConfession;