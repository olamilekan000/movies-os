# Movies

Open-sourcing Movie Creation

## Technologies

- Web/Server framework with [Express.js](https://expressjs.com/).
- Linting with [ESlint](https://github.com/eslint/eslint/).
- Testing with [Jest](https://jestjs.io/docs/getting-started).
- Testing with [Supertest](https://www.npmjs.com/package/supertest).
- Containerization with [Docker](https://www.docker.com/)
- Database - NOSQL with [MongoDB](https://www.mongodb.com/)
- Database - ODM [MongoDB](https://mongoosejs.com/)

## Getting started

```sh
# Clone the project
git clone https://github.com/olamilekan000/movies-os.git
cd movies-os

# Install dependencies
npm install

```

Set Environment Variables 

```sh
MONGODB_URL=mongodb://localhost:27017/movies
PORT=9093
JWT_SECRET=secret
OMDB_API_KEY=oiobr0-0
```

Then you can start the application:

```sh
npm run dev
```

or  with Docker

MONGODB_URL value changes to: ``` MONGODB_URL=mongodb://localhost:27017/movies ```

```sh
docker-compose -f docker-compose.dev.yml up --build
```

To create a Module, run:

```sh
./create-module.sh <name-of-module>
```

This will launch the server [node](https://nodejs.org/en/) process on port 9093

Linting is set up using [ESlint](https://github.com/eslint/eslint/).
It uses the rules as specificed in the .eslintrc.js file which can be found in the
root directory.

Begin linting with the following command:

```sh
npm run lint
```
### Documentation

To signin as a user - Basic/Premium

- API Endpoint

```sh

  <BASE_URL>/api/v1/auth/login

```

- Request Payload

```sh
  POST {
    "username": "basic-thomas",
    "password": "sR-_pcoow-27-6PAwCD8"
  }

  headers: {
    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
  }  
```
- This should return a token
```sh 

{
	"success": true,
	"message": "ok",
	"data": {},
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywibmFtZSI6IkJhc2ljIFRob21hcyIsInJvbGUiOiJiYXNpYyIsImlhdCI6MTY1MTU5MjUwNywiZXhwIjoxNjUxNTk0MzA3LCJpc3MiOiJodHRwczovL3d3dy5uZXRndXJ1LmNvbS8iLCJzdWIiOiIxMjMifQ.wx-PacxlxsyibmYEXWQKqqRmofEcLmbcC3IDus4FoW4"
}

```

To Create a movie - Basic/Premium

- API Endpoint

```sh

  <BASE_URL>/api/v1/movies

```

- Request Payload

```sh
  POST {
 	  "title": "avatar"
  }
  
  headers: {
    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
  }
```

- Response 

```sh 

{
	"success": true,
	"message": "ok",
	"data": {
		"deletedAt": null,
		"deleted": false,
		"_id": "97b92dba-396c-47cc-9f56-8432bfc2acf1",
		"title": "Avatar",
		"released": "2009-12-17T23:00:00.000Z",
		"genre": "Action, Adventure, Fantasy",
		"director": "James Cameron",
		"poster": "https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
		"type": "movie",
		"createdBy": 123,
		"createdAt": "2022-05-03T16:23:45.567Z",
		"updatedAt": "2022-05-03T16:23:45.567Z"
	}
}
```

List All Movies - Basic/Premium

- API Endpoint

```sh

  <BASE_URL>/api/v1/movies

```

- Request Payload

```sh
  GET {}
  
  headers: {
    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
  }
```

- Response 

```sh 

{
	"success": true,
	"message": "ok",
	"data": [{
		"deletedAt": null,
		"deleted": false,
		"_id": "97b92dba-396c-47cc-9f56-8432bfc2acf1",
		"title": "Avatar",
		"released": "2009-12-17T23:00:00.000Z",
		"genre": "Action, Adventure, Fantasy",
		"director": "James Cameron",
		"poster": "https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
		"type": "movie",
		"createdBy": 123,
		"createdAt": "2022-05-03T16:23:45.567Z",
		"updatedAt": "2022-05-03T16:23:45.567Z"
	}]
	"total": 1,
	"limit": 10,
	"page": 0  
}
```

List All Movies for a user - Basic/Premium 

- API Endpoint

```sh

  <BASE_URL>/api/v1/movies/:id

```

- Request Payload

```sh
  GET {}
  
  headers: {
    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
  }
```

- Response 

```sh 

{
	"success": true,
	"message": "ok",
	"data": {
		"deletedAt": null,
		"deleted": false,
		"_id": "97b92dba-396c-47cc-9f56-8432bfc2acf1",
		"title": "Avatar",
		"released": "2009-12-17T23:00:00.000Z",
		"genre": "Action, Adventure, Fantasy",
		"director": "James Cameron",
		"poster": "https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
		"type": "movie",
		"createdBy": 123,
		"createdAt": "2022-05-03T16:23:45.567Z",
		"updatedAt": "2022-05-03T16:23:45.567Z"
	}
}
```