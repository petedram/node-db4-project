exports.seed = function(knex, Promise) {
    return knex('ingredients').insert([   
      { ingredient: "mince beef" }, 
      { ingredient: "mince lamb" }, 
      { ingredient: "potatoe" }
    ]);
  };
  