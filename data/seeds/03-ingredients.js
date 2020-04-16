
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'sandwich bread'},
        {name: 'peanut butter'},
        {name: 'jelly'},
        {name: 'green beans'},
        {name: 'grated coconut'},
        {name: 'green thai chili'},
        {name: 'oil'},
        {name: 'black mustard seeds'},
        {name: 'hing'},
        {name: 'curry leaves'},
        {name: 'turmeric'},
        {name: 'salt'},
        {name: 'sambar powder'}
      ]);
    });
};
