const knex = require('knex')
const knexfile = require('../../../knexfile')

const db = knex(knexfile[process.env.NODE_ENV])

const getAllTodos = db('todos')
  .select('id', 'title', 'description')
  .then((todos) => todos)

module.exports = {
  getAllTodos,
}
