const express=require('express');
const router=express.Router();
const {getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe}=require('../controllers/recipe');

router.get('/',getRecipes); // Get all the Recipes
router.get("/:id", getRecipe); // Get a single Recipe by ID
router.post('/', addRecipe); // Add a new Recipe
router.put("/:id", editRecipe); // Edit a Recipe by ID
router.delete("/:id", deleteRecipe); // Delete a Recipe by ID
module.exports=router;