const home = (server) => {
  server.get('/', () => ({
    version: '0.1.0',
    message: 'Enjoy the silence...',
  }))

  server.post('/', (req, reply) => {
    reply.send({
      ...req.body,
      message: 'post url',
    })
  })
}

module.exports = home
