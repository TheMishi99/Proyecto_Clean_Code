# Clean Code Practice Project

This is a practice project focused on implementing Clean Code principles and Clean Architecture patterns. It includes a backend API built with Express and TypeScript.

## Project Structure

```
├── apps/
│   └── backend/        # Express API application
├── domain/            # Business logic and entities
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or pnpm

### Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Install dependencies

```bash
pnpm install
```

3. Create a `.env` file in the `apps/backend` directory with the following variables:

```env
PORT=3000
JWT_SECRET=your_jwt_secret_here
FRONT_URL=http://localhost:5173
NODE_ENV=development
```

### Running the Application

Development mode:

```bash
pnpm dev
```

Build:

```bash
pnpm build
```

Run tests:

```bash
pnpm test
```

## Environment Variables

The following environment variables are required:

| Variable   | Description                          | Default               |
| ---------- | ------------------------------------ | --------------------- |
| PORT       | Port number for the API              | 3000                  |
| JWT_SECRET | Secret key for JWT tokens            | -                     |
| FRONT_URL  | Frontend application URL             | http://localhost:5173 |
| NODE_ENV   | Environment (development/production) | development           |

## API Endpoints

- `GET /products` - Get all products
- `GET /products/:id` - Get product by ID
- `POST /users/sign-up` - Register new user
- `POST /users/login` - User login
- `POST /users/logout` - User logout

## Built With

- TypeScript
- Express.js
- Clean Architecture principles
- JWT for authentication
- Cookie-based sessions

## Project Structure Details

The project follows Clean Architecture principles:

- `domain/`: Contains business logic, entities, and use cases
- `apps/backend/`: Express.js API implementation
  - `src/controllers/`: HTTP request handlers
  - `src/services/`: External services integration
  - `src/middlewares/`: Express middlewares
  - `src/routers/`: Route definitions

## License

This project is licensed under the MIT License.
