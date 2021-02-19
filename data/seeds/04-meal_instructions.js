
exports.seed = function(knex, Promise) {
      return knex('meal_instructions').insert([
        {recipe_id: 1, ingredient_id: 1, quantity_id: 1}
      ]);
};
