const request = require('supertest')
const app = require('../src/app')

describe('API routes', () => {
  it('responds with health status', async () => {
    const response = await request(app).get('/api/health')

    expect(response.status).toBe(200)
    expect(response.body).toEqual(
      expect.objectContaining({
        status: 'healthy',
        uptime: expect.any(Number),
        timestamp: expect.any(String)
      })
    )
  })

  it('returns mock users', async () => {
    const response = await request(app).get('/api/users')

    expect(response.status).toBe(200)
    expect(response.body.count).toBeGreaterThan(0)
    expect(response.body.users).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: expect.any(Number), name: expect.any(String) })
      ])
    )
  })
})
