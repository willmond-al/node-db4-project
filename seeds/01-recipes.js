
exports.seed = function(knex) {
  // Deletes ALL existing entries
      return knex('table_name').insert([
        { recipe_name: 'Lasagna' },
        { recipe_name: 'Omelette' },
        { recipe_name: 'Chicken Caserole' },
        { recipe_name: 'Spaghetti Bolognaise' }
      ]);
};
