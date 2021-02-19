
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
    tbl.increments("meal_instruction_id")
    tbl.integer("recipe_id")
    .unsigned()
    .notNullable()
    .references("recipe_id")
    .inTable("recipes")
    .onDelete("RESTRICT")
    tbl.integer("ingredient_id")
    .references("ingredient_id")
    .inTable("ingredients")
    .unsigned()
    .notNullable()
    .onDelete("RESTRICT")
    tbl.integer("quantity_id")
    .references("quantity_id")
    .inTable("quantities")
    .unsigned()
    .notNullable()
    .onDelete("RESTRICT")
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("meal_instructions")
  .dropTableIfExists("quantities")
  .dropTableIfExists("ingredients")
  .dropTableIfExists("recipes")
};
