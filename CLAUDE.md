# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Frontend (`front-end/`)
```bash
npm run dev      # start Next.js dev server
npm run build    # production build
npm run lint     # ESLint
```

### Backend (`backend/`)
The backend has no `scripts` block in `package.json` — run it directly:
```bash
node src/compositionRoot.js   # start Express server (port 5000 by default)
```

### Environment variables
- `backend/`: requires `.env` with `DATABASE_URL`, `JWT_SECRET`, `ALLOWED_ORIGIN`, `PORT`, `NODE_ENV`
- `front-end/`: requires `.env.local` with `NEXT_PUBLIC_API_URL`

---

## Architecture

This is a PERN-stack flashcard app (PostgreSQL, Express, React/Next.js). The two services are fully decoupled — the frontend calls the backend over HTTP.

### Backend (`backend/src/`)

Strict three-layer architecture wired together in `compositionRoot.js` via three factories:

```
compositionRoot.js
  → repositoryFactory   (new XRepository(databaseConnection))
  → serviceFactory      (new XServices({ xRepository, utils... }))
  → routerFactory       (xRouter({ xServices, authMiddleware }))
  → new Server({ routers })
```

Layers:
- **Controllers** (`controllers/*.router.js`) — extract HTTP params, delegate to services, return JSON
- **Services** (`domain/*.js`) — all business logic and validation (e.g. duplicate deck name check)
- **Repositories** (`infrastructure/repositories/`) — raw SQL via parameterized `pg` queries

`process.env` and third-party libs (`jwt`, `bcrypt`) are injected into services via `serviceFactory`, not imported directly inside service classes. Follow this pattern when adding new services.

**Auth flow:** `POST /login` validates credentials, signs a JWT, and sets it as an HTTP-only cookie. `authMiddleware` decodes the cookie and attaches `req.userId` for all protected routes. The `/verify` endpoint is used by the frontend to check session state on load.

### Frontend (`front-end/`)

**Provider hierarchy** (from outermost to innermost, set up in `app/homescreen/layout.js`):
```
AuthProvider (app/layout.js)
  └── DeckListProvider       — global list of all decks (fetch/create/delete)
        └── ActiveDeckProvider — currently selected deck (cards, mode, index)
```

**State model for an active deck** (`providers/deck/useDeckState.jsx`):
```js
{ id, name, cardList: [], index: 0, mode: "default" }
// valid modes: "default" | "practice" | "edit" | "inspect" | "finished" | "creator"
```
Mode drives what `Stage` and `Interface` render. `drawNextCard()` increments `index`; when `index >= cardList.length` the deck transitions to `"finished"`.

**API layer** (`api/`):
- `request.js` — thin fetch wrapper; always sends `credentials: "include"` and parses JSON, returning `{ ...data, ok, status }`
- `auth.api.js`, `deck.api.js`, `card.api.js` — domain-specific call functions, exported through `api/index.mjs`
- `useApi()` hook (`providers/useApi.jsx`) — wraps API functions with two patterns:
  - `errorHandler` — throws on non-OK responses
  - `optomisticHandler` — immediately applies `newState` via `updateState`, reverts to `oldState` on failure

When adding a new API call, add it to the relevant `*.api.js` file and expose it through `useApi()` using one of the two handler patterns.
