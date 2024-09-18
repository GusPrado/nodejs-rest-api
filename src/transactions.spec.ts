import { test, beforeAll, afterAll, describe } from 'vitest'
import request from 'supertest'
import { app } from './app'

describe('Transaction routes', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  test('User can create a new transaction', async () => {
    await request(app.server)
      .post('/transactions')
      .send({
        title: 'New transaction',
        amount: 4000,
        type: 'credit',
      })
      .expect(201)
  })
})
