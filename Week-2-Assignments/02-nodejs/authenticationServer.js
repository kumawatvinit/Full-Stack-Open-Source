/**
  You need to create a HTTP server in Node.js which will handle the logic of an authentication server.
  - Don't need to use any database to store the data.

  - Save the users and their signup/login data in an array in a variable
  - You can store the passwords in plain text (as is) in the variable for now

  The expected API endpoints are defined below,
  1. POST /signup - User Signup
    Description: Allows users to create an account. This should be stored in an array on the server, and a unique id should be generated for every new user that is added.
    Request Body: JSON object with username, password, firstName and lastName fields.
    Response: 201 Created if successful, or 400 Bad Request if the username already exists.
    Example: POST http://localhost:3000/signup

  2. POST /login - User Login
    Description: Gets user back their details like firstname, lastname and id
    Request Body: JSON object with username and password fields.
    Response: 200 OK with an authentication token in JSON format if successful, or 401 Unauthorized if the credentials are invalid.
    Example: POST http://localhost:3000/login

  3. GET /data - Fetch all user's names and ids from the server (Protected route)
    Description: Gets details of all users like firstname, lastname and id in an array format. Returned object should have a key called users which contains the list of all users with their email/firstname/lastname.
    The users username and password should be fetched from the headers and checked before the array is returned
    Response: 200 OK with the protected data in JSON format if the username and password in headers are valid, or 401 Unauthorized if the username and password are missing or invalid.
    Example: GET http://localhost:3000/data

  - For any other route not defined in the server return 404

  Testing the server - run `npm run test-authenticationServer` command in terminal
 */

const express = require("express")
const bodyParser = require("body-parser")
const port = 3000;
const app = express();
// write your logic here, DONT WRITE app.listen(3000) when you're running tests, the tests will automatically start the server

let users = [];

function signup(req, res) {
  console.log("Body received from signup:");
  console.log(req.body);
  let body = req.body;
  // let body = JSON.parse(req.body);
  // console.log("After json");
  // console.log(body);


  const index = users.findIndex(user => user.username === body.username);
  
  if(index !== -1) {
    return res.status(400).send("Username already exists!");
  }

  let newUser = {
    id: users.length+1,
    username: body.username,
    password: body.password,
    email: body.email,
    firstName: body.firstName,
    lastName: body.lastName
  };

  users.push(newUser);
  return res.status(201).send("Signup successful");
}

function login(req, res) {
  let body = req.body;

  const index = users.findIndex(user => user.username === body.username && user.password === body.password);

  if(index === -1) {
    return res.status(401).send("Credentials are invalid!");
  }

  return res.status(200).json({firstName: users[index].firstName, lastName: users[index].lastName, id: users[index].id, email: users[index].email});
}

function retrieveData(req, res) {
  console.log(req.headers);
  console.log("-------------------");

  let username = req.headers.username;
  let password = req.headers.password;

  console.log(username);
  console.log(password);

  const index = users.findIndex(user => user.username === username && user.password === password);

  if(index === -1) {
    return res.status(401).send("Unauthorized");
  }

  /*
    {
      "users": [
        user1,
        user2,....
      ]
    }
  */

  let allUsers = [];

  users.forEach(user => {
    allUsers.push({
      "id": user.id,
      "firstName": user.firstName,
      "lastName": user.lastName
    });
  })
  
  return res.status(200).json({"users": allUsers});
}

app.use(bodyParser.json());
app.post('/signup', signup);
app.post('/login', login);
app.get('/data', retrieveData);

// app.listen(port, () => {
//   console.log("Server listenig on port:", port);
// });

module.exports = app;
