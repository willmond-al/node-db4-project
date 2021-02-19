
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { quantity_num: 1 },
        { quantity_num: 2 },
        { quantity_num: 4 },
        { quantity_num: 100 },
        { quantity_num: 200 }
      ]);
    });
};
