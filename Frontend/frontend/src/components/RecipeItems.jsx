import React from "react";
import { useLoaderData } from "react-router-dom";
import foodRecipe from "../assets/food.jpg";
import { BsFillStopwatchFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";



export default function RecipeItems (){
const allRecipes=useLoaderData();
console.log(allRecipes);

    return (
        <>
        <div className="card-container">
            {
                allRecipes["recipes"].map((rec,ind)=>{
                    return (
                        <div key={ind} className="card">
                               <img src={foodRecipe} alt={rec.title} width="120px" height="100px" />
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