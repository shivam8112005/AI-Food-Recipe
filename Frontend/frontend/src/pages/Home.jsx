import React from 'react';
import foodRecipe from '../assets/food.jpg';
import RecipeItems from '../components/RecipeItems';
import { useNavigate } from 'react-router-dom';

export default function Home(){
    const navigate=useNavigate();
return (
    <>
   
    <section className='home'>
        <div className="left">
            <h1>Food Recipe</h1>
            <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus voluptatum sed esse et dicta magnam ullam ratione ipsa reiciendis? Ea hic qui Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis illum sed voluptatibus iure! Cupiditate porro temporibus dolore beatae aperiam eum amet, assumenda mollitia voluptas sit! Alias odit debitis repudiandae consequatur. dignissimos alias explicabo illum, illo eius minima pariatur!</h5>
            <button onClick={()=>{navigate("/addRecipe")}}>Share your recipe</button>
        </div>
        <div className="right">
            <img src={foodRecipe} alt="Food Recipe" width="320px"height="300px" style={{borderRadius:"20px"}}/>
        </div>

    </section>
    <div className="bg">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff5500" fillOpacity="1" d="M0,64L17.1,80C34.3,96,69,128,103,144C137.1,160,171,160,206,149.3C240,139,274,117,309,112C342.9,107,377,117,411,117.3C445.7,117,480,107,514,90.7C548.6,75,583,53,617,74.7C651.4,96,686,160,720,176C754.3,192,789,160,823,165.3C857.1,171,891,213,926,213.3C960,213,994,171,1029,138.7C1062.9,107,1097,85,1131,101.3C1165.7,117,1200,171,1234,170.7C1268.6,171,1303,117,1337,117.3C1371.4,117,1406,171,1423,197.3L1440,224L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"></path></svg>    </div>
   <div className="recipe">
    <RecipeItems/>
   </div>
    </>
)

}