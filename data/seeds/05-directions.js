
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('directions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('directions').insert([
        // Recipe 1
        {step_number: 1, directions: 'Smear peanut butter to cover one side of one slice of bread.', recipe_id: 1},
        {step_number: 2, directions: 'Smear jelly over one side of the second slice of bread.', recipe_id: 1},
        {step_number: 3, directions: 'Put the two pieces of bread together with dry sides facing outwards.', recipe_id: 1},
        // Recipe 2
        {step_number: 1, directions: 'Chop beans into 1/4 inch pieces.', recipe_id: 2},
        {step_number: 2, directions: 'Heat oil in a pan. Add mustard seeds and green chili once the oil is hot.', recipe_id: 2},
        {step_number: 3, directions: 'When mustard seeds start to sputter, add hing and curry leaves. Stir.', recipe_id: 2},
        {step_number: 4, directions: 'Add beans, turmeric and salt. Saute for about 2 minutes.', recipe_id: 2},
        {step_number: 5, directions: 'Cover and cook for another 2-3 minutes or so. Add water if needed.', recipe_id: 2},
        {step_number: 6, directions: 'Add sambar powder and coconut. Mix well and saute for another couple minutes before serving.', recipe_id: 2},
      ]);
    });
};
