const express = require('express');

const Recipes = require('./recipe-model');

const router = express.Router();

router.get('/recipes', (req, res) => {
    Recipes.getRecipes()
    .then(recipes => {
        res.json(recipes)
    })
    .catch(err => {
        res.status(500).json({ error: 'Failed to get recipes' })
    })
})

router.get('/recipes/:id/shoppinglist', (req, res) => {
    const { id } = req.params;
    Recipes.getShoppingList(id)
    .then(list => {
        res.json(list)
    })
    .catch(err => {
        res.status(500).json({ error: 'Failed to get shopping list for the specified recipe' })
    })
})

router.get('/recipes/:id/instructions', (req, res) => {
    const { id } = req.params;
    Recipes.getInstructions(id)
    .then(steps => {
        res.json(steps)
    })
    .catch(err => {
        res.status(500).json({ error: 'Failed to get recipe directions' })
    })
})

router.get('/ingredients/:id/recipes', (req, res) => {
    const { id } = req.params;
    Recipes.getRecipesByIngredient(id)
    .then(list => {
        res.json(list)
    })
    .catch(err => {
        res.status(500).json({ error: 'Could not get recipes with specified ingredient' })
    })
})

module.exports = router;