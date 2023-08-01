const { getAllTodos } = require('../../services/todo')

const todos = (server) => {
  server.get('/todos', async () => ({
    todos: await getAllTodos,
  }))

  server.post('/todos', (req, reply) => {
    reply.send({
      ...req.body,
      message: 'post url',
    })
  })
}

module.exports = todos
