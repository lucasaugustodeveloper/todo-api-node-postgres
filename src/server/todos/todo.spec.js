const { add, findAll, remove } = require('./index')
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

  it('should return all todos', () => {
    const todos = findAll()

    expect(todos.statusCode).toEqual(200)
    expect(todos.body).not.toBeNull()
  })

  it('should return 200 for remove todo with pass id', () => {
    const response = {
      id: 'e11fd686-6fe0-5cd9-ac0c-0a21223cc2dc',
      title: 'title',
    }

    expect(remove(response.id).statusCode).toBe(200);
    expect(remove(response.id).body).toEqual(response);
  })

  it('should return 400 without fails pass id', () => {
    expect(remove().statusCode).toBe(500);
    // expect(remove(response.id).body).toEqual(response);
  })
})
