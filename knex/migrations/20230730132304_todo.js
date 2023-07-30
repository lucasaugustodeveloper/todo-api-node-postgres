/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
  knex.schema
    .createTable('todos', (table) => {
      table.string('id', 11).primary()
      table.string('title', 32).notNullable()
      table.text('description').notNullable()
      table.boolean('completed').defaultTo(false)
      table.timestamp('created_at', { useTz: true }).defaultTo(knex.fn.now())
    })
    .then()
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
  knex.schema.dropTable('todos')
}
