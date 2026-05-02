# Sticky Brain

A full-stack flashcard app built with the PERN stack (PostgreSQL, Express, React/Next.js).

## Live Demo

https://sticky-brain-ffxv.onrender.com/

> Running on Render free tier — expect a brief delay on first load while the backend wakes up.

## Features

- Create and manage flashcard decks
- Practice mode with card flipping
- JWT authentication via HTTP-only cookies
- Responsive dark-mode UI

## Local Setup

**Prerequisites:** Node.js, a running PostgreSQL instance (e.g. a Docker container).

Clone the repo, then open two terminals:

**Frontend** (`front-end/`)
```bash
cd front-end
npm install
npm run dev
```

`.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

**Backend** (`backend/`)
```bash
cd backend
npm install
node src/compositionRoot.js
```

`.env`:
```
DATABASE_URL=<your postgres connection string>
JWT_SECRET=<your secret>
ALLOWED_ORIGIN=http://localhost:3000
PORT=5000
NODE_ENV=development
```

## Architecture

Three-layer backend wired via dependency injection in `compositionRoot.js`:

- **Controllers** (`controllers/`) — parse HTTP requests, delegate to services
- **Services** (`domain/`) — all business logic and validation
- **Repositories** (`infrastructure/repositories/`) — raw SQL via `pg`

The frontend uses a provider hierarchy (`AuthProvider → DeckListProvider → ActiveDeckProvider`) with a thin `api/` layer that always sends credentials and handles optimistic updates.

## Key Decisions

- HTTP-only cookies for auth — prevents XSS token theft
- Dependency injection for services — keeps third-party libs out of domain code
- PostgreSQL for relational data integrity between decks and cards

## Future Improvements

- Spaced repetition algorithm
- Offline support
