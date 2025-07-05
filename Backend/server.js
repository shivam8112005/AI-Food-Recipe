const express =require('express');
const app=express();
const connectDb=require('./config/connectionDB.js');
const dotenv=require('dotenv').config();
const recipeRoutes=require('./Routes/recipe.js')

const PORT = process.env.PORT || 3000;
connectDb();
app.use(express.json());
app.use('/recipe',recipeRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})


 


