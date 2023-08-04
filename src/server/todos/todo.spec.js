const { add, findAll, remove, update } = require('./index')
const { badRequest, missingParamsError } = require('../../helpers')

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

  it('should return all todos', async () => {
    const todos = await findAll

    expect(todos.statusCode).toEqual(200)
    expect(todos.body).not.toBeNull()
  })

  it('should return 400 for remove without fails pass id', () => {
    expect(remove().statusCode).toBe(500);
    expect(remove().body).toEqual(missingParamsError('id'));
  })
  it('should return 200 for remove todo with pass id', () => {
    const response = {
      id: 'e11fd686-6fe0-5cd9-ac0c-0a21223cc2dc',
    }

    expect(remove(response.id).statusCode).toBe(200);
    expect(remove(response.id).body).toEqual('success');
  })

  it('should return 400 update without fails pass id', () => {
    expect(update().statusCode).toBe(500);
    expect(update().body).toEqual(missingParamsError('id'));
  })
  it('should return 200 for update todo with pass id', () => {
    const response = {
      id: 'e11fd686-6fe0-5cd9-ac0c-0a21223cc2dc',
    }

    expect(update(response.id).statusCode).toBe(200);
    expect(update(response.id).body).toEqual('success');
  })
})
