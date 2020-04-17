
exports.up = function(knex) {
    return (
      knex.schema
      .createTable('recipes', tbl => {
          tbl.increments();
          tbl.string('name', 512).notNullable().unique();
      })
      .createTable('steps', tbl => {
          tbl.increments();
          tbl.string('step', 512).notNullable().unique();
          tbl.integer('stepNum')
          tbl.integer('recipe_id')
              .references('id')
              .inTable('recipes')
              .onDelete('SET NULL') // remove both records, the one missing and the one dependents on it
              .onUpdate('SET NULL'); // needed for foregn key contrainsts 
      })
      .createTable('ingredients', tbl => {
          tbl.increments();
          tbl.string('ingredient', 128).notNullable().unique();
      })
      .createTable('shopping_list', tbl => {
          tbl.integer('recipe_id')
              .references('id')
              .inTable('recipes')
              .onDelete('SET NULL') // remove both records, the one missing and the one dependents on it
              .onUpdate('SET NULL'); // needed for foregn key contrainsts 
          tbl.integer('quantity');
          tbl.integer('ingredient_id')
              .references('id')
              .inTable('ingredients')
              .onDelete('SET NULL') // remove both records, the one missing and the one dependents on it
              .onUpdate('SET NULL'); // needed for foregn key contrainsts 
      })
    )
  };
  
  exports.down = function(knex) {
      return knex.schema
      .dropTableIfExists('shopping_list')
      .dropTableIfExists('ingredients')
      .dropTableIfExists('steps')
      .dropTableIfExists('recipes')
  };
  