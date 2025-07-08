const express=require('express');
const router=express.Router();
const {getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe, upload}=require('../controllers/recipe');
const verifyToken = require('../middlewares/auth');

router.get('/',getRecipes); // Get all the Recipes
router.get("/:id", getRecipe); // Get a single Recipe by ID
router.post('/',upload.single('file'), verifyToken , addRecipe); // Add a new Recipe
router.put("/:id",upload.single('file'), editRecipe); // Edit a Recipe by ID
router.delete("/:id", deleteRecipe); // Delete a Recipe by ID
module.exports=router;