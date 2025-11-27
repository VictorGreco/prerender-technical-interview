hole

## Prerender Technical Interview API

Minimal Express starter designed for interview-style exercises. It includes a health check, a mock users endpoint, and Jest + Supertest coverage so you can demo both building and testing skills quickly.

### Stack
- Node.js + Express
- Jest + Supertest
- Nodemon + ESLint

## Getting Started

### Prerequisites
- Node.js 18+ (ships with npm)

### Installation
```bash
git clone https://github.com/victorgreco/prerender-technical-interview.git
cd prerender-technical-interview
npm install
```

### Useful Scripts
```bash
npm run dev      # start nodemon server on http://localhost:3000
npm start        # run production server
npm test         # execute Jest suite
npm run test:watch
npm run lint
```

## API Overview

| Method | Route         | Description            |
|--------|---------------|------------------------|
| GET    | `/api/health` | Service health status  |
| GET    | `/api/users`  | Mock list of users     |

Example health response:
```json
{
  "status": "healthy",
  "uptime": 12.345,
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Testing

`tests/app.test.js` uses Supertest to call the Express app in-memory. Tests assert:
- `/api/health` returns uptime and timestamp.
- `/api/users` responds with at least one mock user and a count.

Add new test files alongside new routes to keep coverage tight.

## Next Steps

- Replace mock data with your real persistence layer.
- Add request validation/authentication middleware.
- Extend Jest coverage with edge cases and error paths.

## License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for details.

