import React from "react";
import { useLoaderData, Link} from "react-router-dom";
import foodRecipe from "../assets/Homefood1.webp";
import { BsFillStopwatchFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";


export default function RecipeItems (){
const allRecipes=useLoaderData()['recipes'];
const [recipes, setRecipes] = useState(allRecipes ?? []);
console.log(allRecipes);
let path=window.location.pathname==="/myRecipe"

useEffect(()=>{
setRecipes(allRecipes);
},[ JSON.stringify(allRecipes)])

const onDelete=async(id)=>{
    await axios.delete(`http://localhost:5000/recipe/${id}`).then((res)=>console.log(res));
    setRecipes(recipes=>recipes.filter(recipe=>recipe._id!==id));
}
    return (
        <>
        <div className="card-container">
            {
                recipes.map((rec,ind)=>{
                    if(rec.coverImage)console.log(`http://localhost:5000/${rec.coverImage}`);
                    
                    
                    return (
                        <div key={ind} className="card">
                               <img src={`http://localhost:5000/${rec.coverImage}`} alt={rec.title} width="120px" height="100px" />
                            <div className="card-body">
                                <div className="title">
                                    {rec.title}
                                </div>
                                <div className="icons">
                                   <div className="timer">
                                     <BsFillStopwatchFill />
                                     {rec.time?rec.time:"30mins"} 
                                   </div>
                                    
                                   {(!path)?<FaHeart />: <div className="action">
                                       <Link to={`/editRecipe/${rec._id}`} className="editIcon"> <FaEdit /></Link>
                                    <MdDelete onClick={()=>onDelete(rec._id)} className="deleteIcon" />
                                    </div>
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}