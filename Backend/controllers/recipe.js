const Recipe=require('../models/recipe');
const multer=require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    const filename = Date.now() + '-' + file.fieldname
    cb(null, filename)
  }
});
const upload=multer({storage:storage});

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
  console.log(req.user);
  
    const {title, ingredients, instructions, time}=req.body;
    if(!title || !ingredients || !instructions){
      return  res.json({message:"Required fields cant be empty!"});
    }

    try{
      const newRecipe=new Recipe({
        title,
        ingredients,
        instructions,
        time :time? time : '',
        coverImage: `images/${req.file.filename}`,
        createdBy:req.user.id,
    });
    await newRecipe.save();
    console.log(newRecipe);
    
    return res.status(201).json({
        message:"Recipe added successfully",
        recipe:newRecipe});
    }catch(err){
      console.log("in add recipe error");
      console.log(err);
      
      
    }

};

const editRecipe=async (req, res)=>{
   const {title, ingredients, instructions, time}=req.body;
    let recipe=await Recipe.findById(req.params.id);
    if(!recipe){
        return res.status(404).json({message:"Recipe not found!"});
    }
   try{
    console.log(req);
    let coverImage=req.file?.filename? `images/${req.file?.filename}`:recipe.coverImage
     await Recipe.findByIdAndUpdate(req.params.id,{...req.body, coverImage:coverImage}, {new:true});
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

module.exports = {getRecipe, getRecipes, addRecipe, editRecipe, deleteRecipe, upload};