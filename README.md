# Social Media App (MERN Stack)

A full-stack social network built with **MongoDB, Express, React and Node.js**.
Users can sign up, build a profile, follow other people, share posts with images,
and browse a feed of posts from the people they follow.

> **Status:** 🚧 In development. The backend dependencies are set up; the API and the
> React frontend are being built. See the [Roadmap](#roadmap) for progress.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [API Overview](#api-overview)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Authentication** — register and log in with hashed passwords and JWT tokens.
- **User profiles** — name, nickname, bio and avatar image.
- **Follow system** — follow / unfollow users, see your followers and who you follow.
- **Posts** — create and delete text posts with an optional image.
- **Feed** — paginated timeline with posts from the users you follow.
- **Counters** — followers, following and post counts on each profile.
- **Image uploads** — avatars and post images handled with Multer.
- **Pagination** — users, followers and posts are loaded page by page.

## Tech Stack

### Backend

| Package | Purpose |
| --- | --- |
| [Express 5](https://expressjs.com/) | HTTP server and routing |
| [Mongoose 9](https://mongoosejs.com/) | MongoDB object modeling |
| [mongoose-pagination](https://www.npmjs.com/package/mongoose-pagination) | Paginated queries |
| [jwt-simple](https://www.npmjs.com/package/jwt-simple) | Encode / decode JSON Web Tokens |
| [moment](https://momentjs.com/) | Token issue / expiration dates |
| [bcrypt-nodejs](https://www.npmjs.com/package/bcrypt-nodejs) | Password hashing |
| [validator](https://www.npmjs.com/package/validator) | Input validation |
| [multer](https://www.npmjs.com/package/multer) | File (image) uploads |
| [cors](https://www.npmjs.com/package/cors) | Cross-origin requests from the React app |
| [nodemon](https://nodemon.io/) | Auto-restart in development |

### Frontend

- [React](https://react.dev/) (planned: Vite + React Router)

### Database

- [MongoDB](https://www.mongodb.com/) — local instance or MongoDB Atlas

## Project Structure

```
Social-Media-App/
├── backend/
│   ├── index.js            # Entry point: DB connection + Express server
│   ├── database/           # MongoDB connection
│   ├── models/             # Mongoose schemas (User, Follow, Publication)
│   ├── controllers/        # Route logic
│   ├── routes/             # Express routers
│   ├── middlewares/        # Auth (JWT) and upload middleware
│   ├── services/           # JWT creation, follow helpers
│   ├── uploads/            # Stored avatars and post images
│   └── package.json
├── frontend/               # React app
└── README.md
```

> The folders above describe the planned layout; some of them are not created yet.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20 or newer
- npm
- [MongoDB](https://www.mongodb.com/try/download/community) running locally, or a MongoDB Atlas connection string

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/Social-Media-App.git
cd Social-Media-App
```

### 2. Set up the backend

```bash
cd backend
npm install
```

Create a `.env` file in `backend/` (see [Environment Variables](#environment-variables)), then start the server:

```bash
npm run dev
```

The API runs at `http://localhost:3900` by default.

### 3. Set up the frontend

```bash
cd ../frontend
npm install
npm run dev
```

The React app runs at `http://localhost:5173` by default.

## Environment Variables

Create `backend/.env`:

```env
PORT=3900
MONGODB_URI=mongodb://localhost:27017/social_media_app
JWT_SECRET=replace_with_a_long_random_string
```

| Variable | Description |
| --- | --- |
| `PORT` | Port for the Express server |
| `MONGODB_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret key used to sign JWT tokens — keep it private |

> Never commit your `.env` file. Add it to `.gitignore`.

## Available Scripts

Run these inside `backend/`:

| Command | Description |
| --- | --- |
| `npm run dev` | Start the API with nodemon (auto-reload) |
| `npm start` | Start the API with Node |

## API Overview

All routes are prefixed with `/api`. Routes marked 🔒 require the header
`Authorization: <token>`.

### Users

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/api/user/register` | Create an account |
| POST | `/api/user/login` | Log in and receive a JWT |
| GET | `/api/user/profile/:id` 🔒 | Get a user's profile |
| GET | `/api/user/list/:page?` 🔒 | List users (paginated) |
| PUT | `/api/user/update` 🔒 | Update your profile |
| POST | `/api/user/upload` 🔒 | Upload an avatar |
| GET | `/api/user/avatar/:file` | Get an avatar image |
| GET | `/api/user/counters/:id` 🔒 | Followers / following / posts counts |

### Follows

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/api/follow/save` 🔒 | Follow a user |
| DELETE | `/api/follow/unfollow/:id` 🔒 | Unfollow a user |
| GET | `/api/follow/following/:id?/:page?` 🔒 | Users someone follows |
| GET | `/api/follow/followers/:id?/:page?` 🔒 | Users who follow someone |

### Publications

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/api/publication/save` 🔒 | Create a post |
| GET | `/api/publication/detail/:id` 🔒 | Get one post |
| DELETE | `/api/publication/remove/:id` 🔒 | Delete your post |
| GET | `/api/publication/user/:id/:page?` 🔒 | Posts by a user |
| POST | `/api/publication/upload/:id` 🔒 | Attach an image to a post |
| GET | `/api/publication/media/:file` | Get a post image |
| GET | `/api/publication/feed/:page?` 🔒 | Feed from followed users |

## Roadmap

- [x] Initialize backend and install dependencies
- [ ] MongoDB connection and Express server
- [ ] User model, register and login (JWT)
- [ ] Auth middleware
- [ ] Profiles, avatar uploads and user list
- [ ] Follow / unfollow and follower lists
- [ ] Publications with image upload
- [ ] Feed and counters
- [ ] React frontend: auth pages, feed, profiles, people
- [ ] Deployment

## Contributing

1. Fork the repository
2. Create a branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m "Add my feature"`
4. Push the branch: `git push origin feature/my-feature`
5. Open a Pull Request

## License

This project is licensed under the ISC License.
