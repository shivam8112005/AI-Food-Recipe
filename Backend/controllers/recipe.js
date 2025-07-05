const Recipe=require('../models/recipe');


const getRecipes=async (req, res)=>{
   const recipes=await Recipe.find();
     if(!recipes){
        return res.status(404).json({message:"No recipes found!"});
     }
     return res.status(200).json({recipes:recipes});
};

const getRecipe=async (req, res)=>{
     const recipe=await Recipe.findById(req.params.id);
     if(!recipe){
        return res.status(404).json({message:"Recipe not found!"});

     }
     return res.status(200).json({recipe:recipe});

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

const editRecipe=async (req, res)=>{
    let recipe=await Recipe.findById(req.params.id);
    if(!recipe){
        return res.status(404).json({message:"Recipe not found!"});
    }
   try{
     await Recipe.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.status(200).json({
        message:"Recipe updated successfully",
        recipe:recipe
    });
   }catch(err){
       console.error(err);
       res.status(404).json({message:"Error updating recipe"});
   }
};

const deleteRecipe=(req, res)=>{
    res.json({message:"hello world hjguhkubb "});
};

module.exports = {getRecipe, getRecipes, addRecipe, editRecipe, deleteRecipe};