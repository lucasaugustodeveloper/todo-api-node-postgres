require('dotenv').config()

const envToLogger = {
  development: {
    transport: {
      target: 'pino-pretty',
      options: {
        translate: 'HH:MM:ss Z',
        ignore: 'pid,hostname',
      },
    },
  },
  production: true,
  test: false,
}

const fastify = require('fastify')({
  logger: envToLogger[process.env.NODE_ENV],
})

const routes = require('./http/routes')

routes(fastify)

const start = async () => {
  try {
    await fastify.listen({ port: process.env.PORT })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
