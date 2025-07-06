import React, {useState} from "react";
import Modal from "./Modal";
export default function Navbar(){
    const [isOpen, setOpen]=useState(false);
    return (
        <>
        <header>
            <h2>Food Blog</h2>
            <ul>
                <li>Home</li>
                <li>My Recipe</li>
                <li>Favourites</li>
                <li onClick={()=>setOpen(true)}>Login</li>
            </ul>
        </header>
        {isOpen? <Modal onClose={()=>setOpen(false)}/>:""}
        </>
    )
}