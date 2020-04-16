
exports.up = function(knex) {
    return knex.schema
    //CUISINES
    .createTable('cuisines', tbl => {
        tbl.increments();
        tbl.string('name')
            .unique()
            .notNullable();
    })

    //RECIPES
    .createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('name')
            .notNullable()
            .index();
        tbl.integer('cuisine_id')
            .unsigned()
            .references('id')
            .inTable('cuisines')
            .onUpdate('CASCADE')
            .onDelete('SET NULL')
    })

    //INGREDIENTS
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('name')
            .notNullable()
            .unique();
    })

    //MEASUREMENTS
    .createTable('measurements', tbl => {
        tbl.increments();
        tbl.string('unit')
            .notNullable()
            .unique();
    })

    //DIRECTIONS
    .createTable('directions', tbl => {
        tbl.increments();
        tbl.integer('step_number')
            .unsigned()
            .notNullable()
            .unique();
        tbl.text('directions')
            .notNullable();
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })

    //RECIPE_INGREDIENTS
    .createTable('recipe_ingredients', tbl => {
        tbl.increments();
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT');
        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT');
        tbl.float('quantity')
            .notNullable();
        tbl.integer('measurement_id')
            .unsigned()
            .references('id')
            .inTable('measurements')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT');
    })

};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('directions')
        .dropTableIfExists('measurements')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
        .dropTableIfExists('cuisines')
};
