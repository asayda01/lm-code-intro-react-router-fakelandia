import React from 'react';
import { MisdemeanourKind, JustTalk } from '../../types/misdemeanours.types';


export interface interfaceConfesContactProps {

  valueContact : MisdemeanourKind | JustTalk ,
  onChangeValueContact : (valueContact : MisdemeanourKind | JustTalk ) => void;

};


const ComponentConfessionContact: React.FC < interfaceConfesContactProps > = ( { valueContact , onChangeValueContact } ) => {

  return (

    <>

      <label htmlFor="Contact"> Reason For Contact : </label>

        <select value={valueContact} onChange={(event) => { onChangeValueContact (event.target.value as MisdemeanourKind | JustTalk ) }} >
          
          <option value="Just Talk 🕊️☮️🕊️"> I Just Want To Talk 🕊️☮️🕊️ </option>
          <option value="rudeness 🤪"> Mild Public Rudeness 🤪 </option>
          <option value="lift 🗣"> Speaking in a Lift 🗣 </option>
          <option value="vegetables 🥗"> Not Eating Your Vegetables 🥗 </option>
          <option value="united 😈"> Supporting Manchester United 😈 </option>

        </select>


    </>

  )

};

export default ComponentConfessionContact;