
exports.seed = function(knex, Promise) {
      return knex('recipes').insert([
        { recipe_name: 'Lasagna' },
        { recipe_name: 'Omelette' },
        { recipe_name: 'Chicken Caserole' },
        { recipe_name: 'Spaghetti Bolognaise' }
      ]);
};
