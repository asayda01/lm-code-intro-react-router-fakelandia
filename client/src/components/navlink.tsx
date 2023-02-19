import React from "react";
import { NavLink } from "react-router-dom";

const ComponentNavlink : React.FC = () => 

    <nav className='is-flex is-flex-grow is-justify-content-space-evenly'>
    
        <ul style={ { width: "100%" } } className="is-flex is-flex-direction-row is-justify-content-space-evenly">

            <li><NavLink to='/'> Home </NavLink></li>
            
            <li><NavLink to='/misdameanour'> Misdemeanours </NavLink></li>
            
            <li><NavLink to='/confession'> Confesss To Us </NavLink></li>
        
        </ul>
    
    </nav>

export default ComponentNavlink;