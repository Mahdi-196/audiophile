# Audiophile

A full-stack audiobook platform combining a React/TypeScript frontend with a Node.js/Express backend. Browse featured carousels, explore categories, and get personalized suggestions via an AI chat assistant.

## Table of Contents

1. [Key Features](#key-features)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Getting Started](#getting-started)

   * [Prerequisites](#prerequisites)
   * [Installation](#installation)
   * [Configuration](#configuration)
   * [Development](#development)
   * [Production](#production)
5. [Client Overview](#client-overview)
6. [Server Overview](#server-overview)
7. [API Endpoints](#api-endpoints)
8. [Scripts](#scripts)
9. [Deployment](#deployment)
10. [Contributing](#contributing)
11. [License & Contact](#license--contact)

## Key Features

* **Responsive Carousel**: Smooth, touch-friendly slider showcasing audiobooks with `react-slick`.
* **AI Chat Assistant**: Real-time book recommendations via DeepSeek Chat API.
* **Category Browsing**: Clickable cards load books by genre.
* **Login Modal**: Entry gate requiring user confirmation before access.
* **Monorepo Workflow**: Yarn Workspaces and `concurrently` for unified scripts.

## Tech Stack

**Frontend**

* React v19 + TypeScript
* Vite for fast bundling & HMR
* Bootstrap 5 & Icons
* Axios & React Router v7
* react-slick & slick-carousel

**Backend**

* Node.js & Express
* Sequelize ORM + PostgreSQL
* pg & pg-hstore

**AI & Tools**

* DeepSeek Chat API
* ESLint, Prettier, dotenv
* Yarn Workspaces, concurrently

## Project Structure

```
audiophile/
├── client/           # React app
│   ├── public/
│   ├── src/
│   │   ├── assets/   # images, fonts
│   │   ├── components/# Header, Footer, Login modal
│   │   ├── pages/    # Home, Catalog, Settings, AI
│   │   ├── styles/   # CSS
│   │   └── App.tsx   # routing & layout
│   └── vite.config.ts
├── server/           # Express API
│   ├── src/
│   │   ├── config/   # DB & API keys
│   │   ├── db/       # Sequelize init
│   │   ├── models/   # ORM models
│   │   ├── routes/   # endpoints
│   │   └── server.ts # entry point
│   └── tsconfig.json
├── .env              # environment variables
├── package.json      # workspaces & scripts
└── yarn.lock
```

## Getting Started

### Prerequisites

* Node.js >=18
* Yarn >=1.22
* PostgreSQL instance

### Installation

```bash
git clone https://github.com/Mahdi-196/audiophile.git
cd audiophile
yarn install
```

### Configuration

Create `.env` in root:

```dotenv
DEEPSEEK_API_KEY=sk-...
DATABASE_URL=postgres://user:pass@host:port/db
```

### Development

```bash
yarn dev
```

Runs client & server with live reload.

### Production

```bash
yarn build
yarn start
```

Builds assets and starts production server.

## Client Overview

* **Routing**: React Router handles `/`, `/catalog`, `/settings`, `/ai`.
* **Home**: Carousel, categories, featured book.
* **Catalog**: Placeholder for paginated listings.
* **Settings**: User preferences.
* **AI Page**: Chat interface posting to DeepSeek.

## Server Overview

* **Middleware**: CORS, JSON parsing.
* **Database**: Sequelize models with migrations.
* **Routes**: Auth, Books, SearchHistory, Chat proxy.

## API Endpoints

| Method | Route                | Description                |
| ------ | -------------------- | -------------------------- |
| POST   | `/api/auth/login`    | Returns JWT                |
| POST   | `/api/auth/register` | Creates user               |
| GET    | `/api/books`         | List books                 |
| POST   | `/api/search`        | Log & fetch search count   |
| POST   | `/api/chat`          | Proxy to DeepSeek Chat API |

## Scripts

* `yarn dev` — start dev servers
* `yarn build` — build client & server
* `yarn start` — run production
* `yarn lint` — lint code
* `yarn format` — format code

## Deployment

1. Push to GitHub.
2. Create projects on Render/Heroku.
3. Set env vars.
4. Deploy and verify.

## Contributing

1. Fork repo
2. Create branch `feature/...`
3. Commit changes
4. Push and open PR

## License & Contact

MIT License. See [LICENSE](LICENSE).
