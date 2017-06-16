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

### Endpoints

#### Create item
You can do a POST request to `/api/1/apps` with body:

```js
{
  "item": {
    "category": "string",
    "rating": 2, // between 1-5
    "name": "string",
    "image": "string",
    "link": "string",
    "ratingCount": 2,
    "price": "string"
  }
}
```

The response will be

```js
{
  "status": "success",
  "item": { // the item
    "category": "string",
    "rating": 2,
    "name": "string",
    "image": "string",
    "link": "string",
    "ratingCount": 2,
    "price": "string"
  },
  "info": { // response from algolia
    "deletedAt": "2017-06-14T17:14:05.286Z",
    "taskID": 537670,
    "objectID": "284231"
  }
}
```

#### Delete item
You can do a DELETE request to `/api/1/apps/:objectId` to delete an item.

The response will be

```js
{
  "status": "success",
  "info": { // response from algolia
    "deletedAt": "2017-06-14T17:14:05.286Z",
    "taskID": 537670,
    "objectID": "284231"
  }
}
```

#### Errors

The server will return with:

```json
{
  "error": "Error message"
}
```

when an error happens.

### Starting

For the server you need to set the environment variables `ALGOLIA_APPLICATION_ID` and `ALGOLIA_ADMIN_KEY`. These are used by the server to connect with the Algolia API. The server runs by default on port **4000**.

```bash
cd server
yarn install
yarn start
```

### Online

You can find a running version [here](https://algolia-server.herokuapp.com/).
