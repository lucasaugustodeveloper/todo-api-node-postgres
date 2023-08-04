/* eslint-disable no-restricted-syntax */
const { badRequest, missingParamsError, ok } = require('../../helpers')
const { getAllTodos, createTodo } = require('../../services/todo')

const add = (todo) => {
  const requiredFields = ['title', 'description']

  for (const field of requiredFields) {
    if (todo.completed !== null && !todo[field]) {
      return badRequest(missingParamsError(field))
    }
  }

  createTodo(todo)

  return ok('success')
}

const findAll = (async () => ({
  statusCode: 200,
  body: await getAllTodos,
}))()

const remove = (id) => {
  if (!id) {
    return badRequest(missingParamsError('id'))
  }

  return ok('success')
}

const update = (id) => {
  if (!id) {
    return badRequest(missingParamsError('id'))
  }

  return ok('success')
}

module.exports = {
  add,
  findAll,
  remove,
  update,
}
