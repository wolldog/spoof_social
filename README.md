# Spoof Social

An API for a social network web application.

## Description

Spoof Social provides an API for a social network web application where users can share their thoughs, react to friends' thoughts and create a friends list. Using Express.js for routhing, a MongoDB database and the Mongoose ODM.

### [Spoof Social Demo](https://watch.screencastify.com/v/4FjBTkkKpFBRZIFhniEr)

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
  - [Users](#users)
  - [Select](#select)
  - [Create](#create)
  - [Update](#update)
  - [Delete](#delete)
- [Tests](#tests)
- [Questions](#questions)

## <a name="installation"></a> Installation

The application requires Node.js, MongoDB. Clone the project folder from GitHub and run `npm install` to install the dependancies.

## <a name="usage"></a> Usage

Run `npm start` to start the server. The server will start on PORT 3001 unless an alternative is supplied in .env.

### <a name="users"></a>Users

Spoof Social provides routes to retreive all users or an individual user by their id, create a new user, update an existing user and delete a user by id.

`GET http://localhost:{PORT}/api/users/{id}`

Example responses:

**User**

```json
[
	{
		"_id": "642bcd4a991ddc55900c8056",
		"username": "goldylocks",
		"email": "goldy@3bears.com",
		"thoughts": [],
		"friends": [],
		"__v": 0,
		"friendCount": 0
	}
]
```


