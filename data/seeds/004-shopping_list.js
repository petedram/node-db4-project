exports.seed = function(knex, Promise) {
    return knex('shopping_list').insert([   
      { recipe_id: 1, quantity: 1, ingredient_id: 1}, 
      { recipe_id: 2, quantity: 1, ingredient_id: 2}
    ]);
  };
  