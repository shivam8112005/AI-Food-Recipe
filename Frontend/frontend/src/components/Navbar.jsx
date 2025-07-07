import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import Modal from "./Modal";
export default function Navbar(){
    const [isOpen, setOpen]=useState(false);
    let token=localStorage.getItem('token');
    const [isLogin, setIsLogin]=useState(token? true: false);

    useEffect(()=>{
        setIsLogin(token?true:false);
    },[token])

    const checkLogin=()=>{
        if(token){
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            setIsLogin(false);
        }else{

            setOpen(true);
        }
    }
    return (
        <>
        <header>
            <h2>Food Blog</h2>
            <ul>
              <li> <Link to="/"> Home</Link></li>
                <li onClick={()=>!isLogin? setOpen(true):setOpen(false)}><Link to = {isLogin?"/myRecipe":"/"}>My Recipe</Link></li>
                <li onClick={()=>!isLogin? setOpen(true):setOpen(false)}><Link to = {isLogin? "/favRecipe": "/"}>Favourites</Link></li>
                <li onClick={checkLogin}> <p className='login'>{(isLogin)? "Logout": "Login"}</p></li>
            </ul>
        </header>
        {isOpen? <Modal onClose={()=>setOpen(false)}/>:""}
        </>
    )
}