/* eslint-disable no-restricted-syntax */
const { badRequest, missingParamsError, ok } = require('../../helpers')

const add = (todo) => {
  const requiredFields = ['title', 'description']

  for (const field of requiredFields) {
    if (!todo[field]) {
      return badRequest(missingParamsError(field))
    }
  }

  return ok('success')
}

const findAll = () => {
  const mock = [
    {
      id: '32lrnjn',
      title: 'title',
      description: 'description',
      completed: false,
    },
  ]

  return {
    statusCode: 200,
    body: mock,
  }
}

module.exports = {
  add,
  findAll,
}
