
exports.seed = function(knex, Promise) {
  return knex('recipes').insert([   
    { name: "Home cooked cottage pie" },
    { name: "Pete's awesome shepards pie" }
  ]);
};
