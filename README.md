# Finance Manager API

# Install Bun
You only have to run this command once :D 
```bash
npm install -g @bun
```

## Getting Started
- Install the dependencies:
    ```bash
    bun install 
    ```

- To start the development server run:
    ```bash
    bun run dev
    ```

# Tasks

- [x] Setup Basic Routes
  - [x] Divide routes into Auth and put them in a separate folder
- [x] Database Initialization
  - [x] Setup database on planeetscale and connect to drizzle on local
  - [x] Connect to database using Drizzle ORM, create and run migrations
  - [x] Test with a simple get request
- [ ] Create login with JWT
  - [ ] Create a user model
  - [ ] Create a user controller
  - [ ] Create a user route
  - [ ] Create a user service
- [ ] Create Add Transactions
  - [ ] Create a protected Route
  - [ ] Create a transaction model
  - [ ] Create a transaction controller
  - [ ] Create a transaction route
  - [ ] Create a transaction service

# Tech Stack

- [Bun](https://bun.sh/) 
- [ElysiaJS](https://elysiajs.com/) (with Typescript)
- [Drizzle ORM](https://orm.drizzle.team/)