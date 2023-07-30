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

module.exports = {
  add,
}
