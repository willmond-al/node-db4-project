
exports.up = function(knex) {
  return knex.schema
  .createTable("recipes", tbl => {
      tbl.increments("recipe_id")
      tbl.string("recipe_name")
  })
  .createTable("ingredients", tbl => {
    tbl.increments("ingredient_id")
    tbl.string("ingredient_name")
  })
  .createTable("quantities", tbl => {
    tbl.increments("quantity_id")
    tbl.integer("quantity_num")
  })
  .createTable("meal_instructions", tbl => {

  })
};

exports.down = function(knex) {
  
};
