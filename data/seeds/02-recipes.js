
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Peanut Butter & Jelly Sandwiches', cuisine_id: 1},
        {name: 'Green Beans Poriyal', cuisine_id: 2}
      ]);
    });
};
