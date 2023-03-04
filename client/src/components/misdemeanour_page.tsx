import React, { useState, useEffect, useContext, Children, ReactElement } from 'react';
import { Misdemeanour } from "../types/misdemeanours.types";
import ComponentMisdemeanourFilter from './misdemeanour_filter';


import { MisdemeanourKind } from "../types/misdemeanours.types";

export interface interfaceMisdemeanourPageProps {
    citizenId: number;
    misdemeanour: MisdemeanourKind ; 
    date: string;
};

export const misdemeanoursContextCreator = React.createContext<interfaceMisdemeanourPageProps[]>([]);

const ComponentMisdemeanourPage: React.FC = () => {

    const misdemeanours = useContext(misdemeanoursContextCreator);

    const [misdemeanoursFiltered , setmisdemeanoursFiltered] = useState<string>("ALL 🤪 🗣 🥗 😈");

    const misdemeanoursFilteredArray = misdemeanours.filter( ( misdemeanour ) => {
        if (misdemeanoursFiltered === "ALL 🤪 🗣 🥗 😈")  return true;
        return misdemeanour.misdemeanour === misdemeanoursFiltered;
    } );


    return (

        <>

            <div>

                <h1> Misdemeaours </h1>
                < ComponentMisdemeanourFilter
                    misdemeanourSelection={misdemeanoursFiltered}
                    onChangemisdemeanourSelection={setmisdemeanoursFiltered}
                />

            </div>

            <div>

                {misdemeanoursFilteredArray.map ( ( misdemeanour ,  index )  => (
                    
                    <td key={misdemeanour.citizenId}>

                        <h2> Criminal : {index+1} </h2>

                        <p> Citizen ID : {misdemeanour.citizenId}       </p>
                        <p> Date : {misdemeanour.date}                  </p>
                        <p> Misdemeanour : {misdemeanour.misdemeanour}  </p>
                        <p>
                            <img 
                                src={`https://picsum.photos/250/250?random=${Math.floor((Math.random()*1000)+1)}?blur=3`}
                                alt="a picture of related punishment" 
                            />
                        </p>

                    </td>
                ))}

            </div>
        
        </>

    );

};

export default ComponentMisdemeanourPage;