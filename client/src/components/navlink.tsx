import React from "react";
import { NavLink } from "react-router-dom";

const ComponentNavlink : React.FC = () => {

    const someActiveStyleObject = {color : '#00ff00'};
    const someOtherStyleObject =  {color : '#fff'};

    return (

    <nav>
    
        <ul>

            <li><NavLink to='/' style={({ isActive }) => isActive ? someActiveStyleObject : someOtherStyleObject }             > Home </NavLink></li>
            
            <li><NavLink to='/misdemeanour' style={({ isActive }) => isActive ? someActiveStyleObject : someOtherStyleObject } > Misdemeanour </NavLink></li>
            
            <li><NavLink to='/confession' style={({ isActive }) => isActive ? someActiveStyleObject : someOtherStyleObject }   > Confesss To Us </NavLink></li>
        
        </ul>
    
    </nav>

    );

};

export default ComponentNavlink;