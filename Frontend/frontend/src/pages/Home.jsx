import React from 'react';
import foodRecipe from '../assets/Homefood1.webp';
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
      <img 
  src={foodRecipe} 
  alt="Food Recipe"
  width="420px"
  height="320px"
  style={{ borderRadius: "20px" }}
/>

        </div>

    </section>
    <div className="bg">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff5500" fillOpacity="1" d="M0,96L40,117.3C80,139,160,181,240,208C320,235,400,245,480,224C560,203,640,149,720,128C800,107,880,117,960,144C1040,171,1120,213,1200,218.7C1280,224,1360,192,1400,176L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
    </div>
   <div className="recipe">
    <RecipeItems/>
   </div>
    </>
)

}