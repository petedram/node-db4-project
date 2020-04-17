exports.seed = function(knex, Promise) {
    return knex('steps').insert([   
      { step: "stir", stepNum: 1, recipe_id: 1}, 
      { step: "toss over", stepNum: 2, recipe_id: 1}, 
      { step: "cook at 350f for 30 mins", stepNum: 3, recipe_id: 1}
    ]);
  };
  