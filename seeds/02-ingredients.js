
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { ingredient_name: 'eggs' },
        { ingredient_name: 'gram(s) of beef' },
        { ingredient_name: 'gram(s) of pasta' },
        { ingredient_name: 'breast(s) of chicken' },
        { ingredient_name: 'gram(s) of butter' }
      ]);
    });
};
