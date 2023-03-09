import React, { useState, useEffect, useContext, Children, ReactElement } from 'react';
import ComponentConfessionSubject from './confession_subject';
import ComponentConfessionDetails from './confession_details';
import ComponentConfessionContact  from './confession_contact';
import { MisdemeanourKind, JustTalk } from '../../types/misdemeanours.types';
import ComponentErrorMessage from '../error_message_folder/error_message';
import { misdemeanoursContextCreator } from '../misdemeanour_folder/misdemeanour_page';


 type typeConfesFormEndpointResponse = {

	"success": boolean, // true for success; false for an error
	"justTalked": boolean; // true if this was just wanting to talk, false for a real confession. Not present if success is false.
	"message": string; // a message

};

const ComponentConfession : React.FC = () => {

    const [confesTextSubject, setconfesTextSubject]             =  useState ("");
    const [confesSelectionContact, setconfesSelectionContact]   =  useState <MisdemeanourKind | JustTalk > ( 'Just Talk 🕊️☮️🕊️' );
    const [confesTextDetails, setconfesTextDetails]             =  useState ("");

    const [confesFormValid, setconfesFormValid]                 =  useState (false);
    const [errorMessage , setErrorMessage]                      =  useState< string | undefined >('');

    const confesMisdemeanours = useContext ( misdemeanoursContextCreator );


    
    const ConfesFormHandler = async ( event:  any ) => {

        event.preventDefault();
        const newFormData  = { confesTextSubject , confesSelectionContact , confesTextDetails };

        try {

            const response = await fetch('http://localhost:8080/api/confess', {

                method: 'POST',
                headers: { 'Content-Type' : 'application/json' },
                body: JSON.stringify( newFormData ),

            });

            const responseData : typeConfesFormEndpointResponse = await response.json();

            if (!responseData.success){

                setErrorMessage(`Error - Server Succes : ${responseData.message}`)

            };

            if ( responseData.success && !responseData.justTalked){

                confesMisdemeanours.push ( {
                        citizenId : Math.floor((Math.random()*1000)+1) ,
                        misdemeanour:  confesSelectionContact as MisdemeanourKind ,
                        date :new Date().toLocaleDateString()} )

                console.log(`New confession recived. Subject : ${confesTextSubject} Misdemeanour: ${confesSelectionContact} Details : ${confesTextDetails} `)
            }

            if (!response.ok) {

                setErrorMessage(` Server Response Error : ${response.status}`);

            };

        } catch (error) {
            throw (` Error : ${error} `);
        };
        
        setconfesTextSubject("");
        setconfesSelectionContact('Just Talk 🕊️☮️🕊️');
        setconfesTextDetails("");
                

    };

    useEffect( () => {

        setconfesFormValid( ( confesTextSubject.length > 2   ) && (  confesTextDetails.length > 5  ) ) 
    
    },[confesTextSubject,confesTextDetails]);
    
    return (

        <>

            <h1 className='filter' > Confession </h1>

            <form className='form' onSubmit={ConfesFormHandler} > 

                <p>  It's very difficult to catch people committing misdemeanours so we appreciate it when citizens confess to us directly.            </p>
                <p>  However, if you're just having a hard day and need to vent then you're welcome to contact us here too 😊. Up to you!              </p>

                <tr> <ComponentConfessionSubject  valueSubject={confesTextSubject} onChangeValueSubject = { (event)=>setconfesTextSubject(event) } /> </tr>
                <p></p>
                <tr> <ComponentConfessionContact  valueContact={confesSelectionContact} onChangeValueContact = { (event)=>setconfesSelectionContact(event) } /> </tr>
                <p></p>
                <tr> <ComponentConfessionDetails  valueDetails={confesTextDetails} onChangeValueDetails = { (event)=>setconfesTextDetails(event) } /> </tr>
                <tr> <button type='submit' disabled={!confesFormValid} > Confess </button>                                                                                        </tr>

            </form>

            <ComponentErrorMessage errorMessage = {errorMessage}/>

        </>

    )

};

export default ComponentConfession;