import React, { useState, useEffect, useContext, Children, ReactElement } from 'react';
import ComponentConfessionSubject from './confession_subject';
import ComponentConfessionDetails from './confession_details';
import ComponentConfessionContact  from './confession_contact';
import { MisdemeanourKind, JustTalk } from '../types/misdemeanours.types';


const ComponentConfession : React.FC = () => {

    const [confesTextSubject, setconfesTextSubject]             =  useState (" Type in Subject ");
    const [confesSelectionContact, setconfesSelectionContact]   =  useState <MisdemeanourKind | JustTalk | ""> ( "" );
    const [confesTextDetails, setconfesTextDetails]             =  useState (" Type in Details ");
    const [confesFormValid, setconfesFormValid]                 =  useState (false); // started to Validation process of the Form

    return (

        <>
        
            <form className='form'> 
            
                <p>  It's very difficult to catch people committing misdemeanours so we appreciate it when citizens confess to us directly.            </p>
                <p>  However, if you're just having a hard day and need to vent then you're welcome to contact us here too 😊. Up to you!              </p>

                <tr> <ComponentConfessionSubject  valueSubject={confesTextSubject} onChangeValueSubject = { (event)=>setconfesTextSubject(event) } /> </tr>
                <p></p>
                <tr> <ComponentConfessionContact  valueContact={confesSelectionContact} onChangeValueContact = { (event)=>setconfesSelectionContact(event) } /> </tr>
                <p></p>
                <tr> <ComponentConfessionDetails  valueDetails={confesTextDetails} onChangeValueDetails = { (event)=>setconfesTextDetails(event) } /> </tr>
                <tr> <button type='submit' > Confess </button>                                                                                        </tr>

            </form>

            

        </>

    )

};

export default ComponentConfession;