
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('measurements').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('measurements').insert([
        {unit: 'tablespoon'},
        {unit: 'slice'},
        {unit: 'grams'},
        {unit: 'teaspoon'},
        {unit: 'pinch'}
      ]);
    });
};
