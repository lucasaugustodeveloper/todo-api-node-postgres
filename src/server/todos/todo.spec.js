const { add } = require('./index')
const { missingParamsError } = require('../../helpers')

describe('todos', () => {
  it('should return 400 if title fails', () => {
    const body = {
      title: '',
      description: 'description',
      completed: false,
    }

    expect(add(body).statusCode).toEqual(500)
    expect(add(body).body).toEqual(missingParamsError('title'))
  })
  it('should return 400 if description fails', () => {
    const body = {
      title: 'title',
      description: '',
      completed: false,
    }

    expect(add(body).statusCode).toEqual(500)
    expect(add(body).body).toEqual(missingParamsError('description'))
  })
  it('should return 200 if all success', () => {
    const body = {
      title: 'title',
      description: 'description',
      completed: false,
    }

    expect(add(body).statusCode).toEqual(200)
    expect(add(body).body).toEqual('success')
  })
})
