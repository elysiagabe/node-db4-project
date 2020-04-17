
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        // *** Recipe 1 *** //
        // 2 slices of bread
        {recipe_id: 1, ingredient_id: 1, quantity: 2, measurement_id: 2},
        // 1 tbsp of Peanut Butter
        {recipe_id: 1, ingredient_id: 2, quantity: 1, measurement_id: 1},
         // 2 tsp of jelly
        {recipe_id: 1, ingredient_id: 3, quantity: 2, measurement_id: 4},

        // *** Recipe 2 *** //
        // 250 grams of green beans
        {recipe_id: 2, ingredient_id: 4, quantity: 250, measurement_id: 3},
        // 2 tbsp of grated coconut
        {recipe_id: 2, ingredient_id: 5, quantity: 2, measurement_id: 1},
        // 1 green thai chilli
        {recipe_id: 2, ingredient_id: 6, quantity: 1},
        // .75 tsp of sambar powder
        {recipe_id: 2, ingredient_id: 13, quantity: .75, measurement_id: 4},
        // 1 tbsp of oil
        {recipe_id: 2, ingredient_id: 7, quantity: 1, measurement_id: 1},
        // .25 tsp mustard seeds
        {recipe_id: 2, ingredient_id: 8, quantity: .25, measurement_id: 4},
        // 1 pinch hing
        {recipe_id: 2, ingredient_id: 9, quantity: 1, measurement_id: 5},
        // 10 curry leaves
        {recipe_id: 2, ingredient_id: 10, quantity: 10},
        // .25 turmeric
        {recipe_id: 2, ingredient_id: 11, quantity: .25, measurement_id: 4},
        // 1 tbsp salt
        {recipe_id: 2, ingredient_id: 12, quantity: 1, measurement_id: 1},
      ]);
    });
};
