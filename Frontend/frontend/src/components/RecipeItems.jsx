import React from "react";
import { useLoaderData } from "react-router-dom";
import foodRecipe from "../assets/Homefood1.webp";
import { BsFillStopwatchFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";



export default function RecipeItems (){
const allRecipes=useLoaderData();
console.log(allRecipes);
let path=window.location.pathname==="/myRecipe"
    return (
        <>
        <div className="card-container">
            {
                allRecipes["recipes"].map((rec,ind)=>{
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
                                    <FaHeart />
                                    <div className="action">
                                        <FaEdit />
                                    <MdDelete className="deleteIcon" />
                                    </div>

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