
exports.seed = function(knex, Promise) {
      return knex('quantities').insert([
        { quantity_num: 1 },
        { quantity_num: 2 },
        { quantity_num: 4 },
        { quantity_num: 100 },
        { quantity_num: 200 }
      ]);
};
