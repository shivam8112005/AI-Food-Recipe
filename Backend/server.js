const express =require('express');
const app=express();
const dotenv=require('dotenv').config();

const PORT = process.env.PORT || 3000;


app.get('/', (req, res)=>{
    res.json({message:"hello world"});
});

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})


 


