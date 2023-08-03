const { uid } = require('uid')

const knex = require('../../../knexfile')

const getAllTodos = knex('todos')
  .select('id', 'title', 'description', 'completed')
  .then((todos) => todos)

const createTodo = async ({ title, description, completed }) =>
  knex('todos').insert({
    id: uid(),
    title,
    description,
    completed,
  })

module.exports = {
  getAllTodos,
  createTodo,
}
