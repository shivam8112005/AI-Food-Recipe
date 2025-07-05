const Recipe=require('../models/recipe');
const getRecipes=async (req, res)=>{
   const recipes=await Recipe.find();
     if(!recipes){
        return res.status(404).json({message:"No recipes found!"});
     }
     return res.status(200).json({recipes:recipes});
};

const getRecipe=async (req, res)=>{
     
    // res.json({message:"hello world hjguhkubb "});
};

const addRecipe=async (req, res)=>{
    const {title, ingredients, instructions, time}=req.body;
    if(!title || !ingredients || !instructions){
      return  res.json({message:"Required fields cant be empty!"});
    }

    const newRecipe=new Recipe({
        title,
        ingredients,
        instructions,
        time :time? time : '',
        coverImage:req.file ? req.file.path : ''
    });
    await newRecipe.save();
    return res.status(201).json({
        message:"Recipe added successfully",
        recipe:newRecipe});

};

const editRecipe=(req, res)=>{
    res.json({message:"hello world hjguhkubb "});
};

const deleteRecipe=(req, res)=>{
    res.json({message:"hello world hjguhkubb "});
};

module.exports = {getRecipe, getRecipes, addRecipe, editRecipe, deleteRecipe};