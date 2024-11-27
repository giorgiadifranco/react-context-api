import { NavLink } from "react-router-dom";
import { useContext } from 'react';
//import CountContext from './contexts/CountContext.jsx';

export default function MainMenu(){


    return(

    <nav>

        <NavLink to="/">Home</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/about">Chi Siamo</NavLink>
        
    </nav>
    )
}