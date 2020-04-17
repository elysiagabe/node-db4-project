const db = require('../data/db-config');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
    getRecipesByIngredient
}

// Get recipes function
// In SQL: SELECT * r.name, c.name as cuisine FROM recipes r JOIN cuisines c ON r.cuisine_id = c.id;
function getRecipes() {
    return db.select('r.id', 'r.name', 'c.name as cuisine')
        .from('recipes as r')
        .join('cuisines as c', 'r.cuisine_id', 'c.id')
    // return db('recipes')
}

// Get shopping list for specified recipes function
// In SQL: SELECT ri.quantity, m.unit as amount, i.name as ingredient FROM recipe_ingredients ri JOIN measurements m on ri.measurement_id = m.id JOIN ingredients i ON ri.ingredient_id = i.id WHERE ri.recipe_id = **RECIPE_ID**
function getShoppingList(recipe_id) {
    return db.select('ri.quantity'
        , 'm.unit as amount'
        , 'i.name as ingredient')
        .from('recipe_ingredients as ri')
        .join('measurements as m', 'ri.measurement_id', 'm.id')
        .join('ingredients as i', 'ri.ingredient_id', 'i.id')
        .where('ri.recipe_id', recipe_id)
        .orderBy('i.name')
}

// Get instructions for specified recipe function
// In SQL: SELECT step_number as step, directions FROM directions WHERE recipe_id = **RECIPE_ID** ORDER BY step_bumber
function getInstructions(recipe_id) {
    return db.select('step_number as step', 'directions')
        .from('directions')
        .where('recipe_id', recipe_id)
        .orderBy('step_number')
}

// Get recipes by a specific ingredient
// In SQL: SELECT r.name
// FROM recipes r
// JOIN recipe_ingredients ri ON r.id = ri.recipe_id
// WHERE ri.ingredient_id = 9
function getRecipesByIngredient(ingredient_id) {
    return db.select('r.name as recipe')
        .from('recipes as r')
        .join('recipe_ingredients as ri', 'r.id', 'ri.recipe_id')
        .where('ri.ingredient_id', ingredient_id)
}