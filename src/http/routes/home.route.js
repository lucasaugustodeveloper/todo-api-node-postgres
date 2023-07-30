const home = (server) => {
  server.get('/', () => ({
    version: '0.1.0',
    message: 'Enjoy the silence...',
  }))
}

module.exports = home
