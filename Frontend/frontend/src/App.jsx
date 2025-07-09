import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import MainNavigation from './components/MainNavigation';
import axios from "axios";
import AddFoodRecipe from './pages/AddFoodRecipe';
import EditRecipe from './pages/EditRecipe';

const getAllRecipes=async ()=>{
let allRecipes=[];
await axios.get('http://localhost:5000/recipe/').then((resolve)=>{
  allRecipes=resolve.data['recipes'];
  console.log("get all recipes ", allRecipes);
  
})
return allRecipes;
}

const getMyRecipe=async ()=>{
  let user = JSON.parse(localStorage.getItem('user'));
  let allRec= await getAllRecipes();
  console.log("sdjfndsknfj yessssssssss ", allRec);
  
  let arr= allRec.filter((item)=>item.createdBy===user._id);
  
  return arr;
}
const getFavRecipe=()=>{
  
//  let arr=[]
  return JSON.parse(localStorage.getItem("fav"))?JSON.parse(localStorage.getItem("fav")):[];
}
const router = createBrowserRouter([
  {path:"/", element:<MainNavigation/>, children:[
    {path:"/", element:<Home/>, loader:getAllRecipes},
    {path:"/myRecipe", element:<Home/>, loader:getMyRecipe},
    {path:"/favRecipe", element:<Home/>, loader:getFavRecipe},
    {path:"/addRecipe", element:<AddFoodRecipe/>, loader:getAllRecipes},
    {path:"/editRecipe/:id", element:<EditRecipe/>, loader:getAllRecipes},
  ]}
  ]);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
