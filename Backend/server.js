const express =require('express');
const app=express();
const dotenv=require('dotenv').config();
const recipeRoutes=require('./Routes/recipe.js')

const PORT = process.env.PORT || 3000;

app.use('/',recipeRoutes);
app.use(express.json());

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})


 


