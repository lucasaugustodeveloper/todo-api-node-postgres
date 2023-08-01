/* eslint-disable no-restricted-syntax */
const { badRequest, missingParamsError, ok } = require('../../helpers')
const { getAllTodos } = require('../../services/todo')

const add = (todo) => {
  const requiredFields = ['title', 'description']

  for (const field of requiredFields) {
    if (!todo[field]) {
      return badRequest(missingParamsError(field))
    }
  }

  return ok('success')
}

const findAll = () => ({
  statusCode: 200,
  body: getAllTodos,
})

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
