# Spoof Social

An API for a social network web application.

## Description

Spoof Social provides an API for a social network web application where users can share their thoughs, react to friends' thoughts and create a friends list. Using Express.js for routhing, a MongoDB database and the Mongoose ODM.

### [Spoof Social Demo](https://watch.screencastify.com/v/4FjBTkkKpFBRZIFhniEr)

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
  - [Users](#users)
  - [Friends](#friends)
  - [Thoughts](#thoughts)
  - [Reactions](#reactions)
- [Tests](#tests)
- [Questions](#questions)

## <a name="installation"></a> Installation

The application requires Node.js, MongoDB. Clone the project folder from GitHub and run `npm install` to install the dependancies.

## <a name="usage"></a> Usage

Run `npm start` to start the server. The server will start on PORT 3001 unless an alternative is supplied in .env.

### <a name="users"></a>Users

Spoof Social provides routes to retreive all users or an individual user by their id, create a new user, update an existing user and delete a user by id.

- Select all users `GET http://localhost:{PORT}/api/users/`
- Select user by ID `GET http://localhost:{PORT}/api/users/{id}`

**Example responses**

```json

 {
  "thoughts": [],
  "friends": [],
  "_id": "642c1b770c8f869bbdcf7120",
  "username": "jackblack",
  "email": "jack@black.com",
  "friendCount": 0
 },

```
- Create a new user - `POST http://localhost:{PORT}/api/users/`

**Example data**

```json
{
  "username":"goldylocks",
  "email":"goldy@3bears.com"
}

```
- Delete a user by ID - `DELETE http://localhost:{PORT}/api/users/{id}`

	N.B. When users are deleted, their associated thoughts will also be deleted.
	
- Update a user by ID - `PUT http://localhost:{PORT}/api/users/{id}`

### <a name="friends"></a>Friends

Spoof Social provides routes for adding and deleting friends

- Add a friend to a user `POST http://localhost:{PORT}/api/users/{UserId}/friends/{friendsId}`

- Delete a friend from a user `DELETE http://localhost:{PORT}/api/users/{UserId}/friends/{friendsId}`

### <a name="thoughts"></a>Thoughts 

Spoof Social provides routes for selecting all thoughts, an individual thought by ID, adding a new thought, updating an existing thought by ID and deleting a thought by ID.

- Select all thoughts `GET http://localhost:{PORT}/api/thoughts`
- Select a thought by ID `GET http://localhost:{PORT}/api/thoughts/{id}`

**Example response**

```json

{
  "_id": "642c1bea03880ad6d7a623a1",
  "thoughtText": "Your mind is like this water, my friend. When it is agitated, it becomes difficult to see. But if you allow it to settle, the answer becomes clear.",
  "username": "jackblack",
  "createdAt": "04/04/2023, 10:45:30 pm",
  "reactions": [],
  "__v": 0,
  "reactionCount": 0
}


```

- Create a new thought- `POST http://localhost:{PORT}/api/thoughts`

	N.B. The new thought ID will be added to the array of user's thoughts

**Example data**
```json

{
  "thoughtText" : "This is a thought",
  "username" : "goldylocks",
  "userId" : "642bcd4a991ddc55900c8056"
}

```
- Update an existing thought -`PUT http://localhost:{PORT}/api/thoughts/{id}`

- Delete an existing thought -`DELETE http://localhost:{PORT}/api/thoughts/{id}`
	
	N.B When a thought is deleted, it will be removed from the user's array of thoughts
	

### <a name="reactions"></a>Reactions

Spoof Social provides routes for creating and deleting reactions to thoughts. 

- Creating a new reaction - `POST http://localhost:{PORT}/api/thoughts/{thoughtId}/reactions`

**Example Data**

```json
{
 "reactionBody": "Thats amazing!",
 "username": "harrypotter"
}
```

- Deleting an existing reaction - `DELETE http://localhost:{PORT}/api/thoughts/{thoughtId}/reactions/{reactionId}`


### <a name="testing"></a>Testing

N/A

### <a name="questions"></a>Questions

  If you have questions regarding the Spoof Social application,
  you can contact me directly by email at lydiawallis@live.co.uk or reach out
  to me on GitHub at https://www.github.com/wolldog.
