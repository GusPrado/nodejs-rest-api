import fastify from 'fastify'
import { env } from './env'
import { transactionsRoute } from './routes/transaction'

const app = fastify()

app.register(transactionsRoute, {
  prefix: 'transactions',
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running...')
  })
