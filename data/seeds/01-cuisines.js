
exports.seed = function(knex) {
  return knex('cuisines').truncate()
    .then(function() {
      return knex('cuisines').insert([
        {name: 'American'},
        {name: 'Indian'}
      ]);
    })
};
