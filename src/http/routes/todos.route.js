const { findAll } = require('../../server/todos')

const todos = (server) => {
  server.get('/todos', async () => ({
    todos: await findAll,
  }))

  server.post('/todos', (req, reply) => {
    reply.send({
      ...req.body,
      message: 'post url',
    })
  })
}

module.exports = todos
