
exports.seed = function(knex, Promise) {
      return knex('ingredients').insert([
        { ingredient_name: 'eggs' },
        { ingredient_name: 'gram(s) of beef' },
        { ingredient_name: 'gram(s) of pasta' },
        { ingredient_name: 'breast(s) of chicken' },
        { ingredient_name: 'gram(s) of butter' }
      ]);
};
