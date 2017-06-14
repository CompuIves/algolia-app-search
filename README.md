# Algolia App Search
> A beautiful and fast app search

This application consists of a backend (server) and a frontend (client). The backend is responsible for creating and deleting apps from the algolia index, the client is responsible for showing the search of all apps.

# Structure
The application has a clear division between the server and the client. The only thing they share is the `.gitignore`

## Client
The client is the actual search for apps. It's built with React and uses Flow as type system. It has been bootstrapped with `create-react-app`.

### Starting
The client runs by default on port **3000**.

```bash
cd client
yarn install
yarn start
```

### Online (or offline as PWA)

You can find a running version [here](https://algolia-client-qirpapvkyf.now.sh).


## Server
The server can add items to the index and delete them. It's built using TypeScript and uses `koa`. It has its own validator for parameters.

### Starting

For the server you need to set the environment variables `ALGOLIA_APPLICATION_ID` and `ALGOLIA_ADMIN_KEY`. These are used by the server to connect with the Algolia API. The server runs by default on port **4000**.

```bash
cd server
yarn install
yarn start
```

### Online

You can find a running version [here](https://algolia-server.herokuapp.com/).