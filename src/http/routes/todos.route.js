const { findAll, add } = require('../../server/todos')

const todos = (server) => {
  server.get('/todos', async () => ({
    todos: await findAll,
  }))

  server.post('/todos', (req, reply) => {
    reply.send(add(req.body))
  })
}

module.exports = todos
