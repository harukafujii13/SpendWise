const express = require('express');
const cors = require('cors');
const { db } = require('./src/db/db');
const UserModal = require('./src/models/user.modal');
// const { readdirSync } = require('fs');
// const { route } = require('./routes/transaction.router');

const app = express();

require('dotenv').config();

const PORT = process.env.PORT;

//middlewares
app.use(express.json());
app.use(cors());

//routes
// readdirSync('./routes').map((route) =>
//   app.use('/api/v1', require('./routes/' + route))
// );

const server = () => {
  db();
  app.listen(PORT, () => {
    console.log('listening to port:', PORT);
  });
};

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  UserModal.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json('Success');
      } else {
        res.json('the password is incorrect');
      }
    } else {
      res.json('User is not exist');
    }
  });
});

app.post('/register', (req, res) => {
  UserModal.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

server();

//memo1
//readdirSync("./routes") reads the contents of the ./routes directory synchronously.
//It returns an array of file names present in the directory.

//.map((route) => ...) is called on the array of file names returned by readdirSync.
//This iterates over each file name and executes the provided callback function for each element.

//app.use("/api/v1", require("./routes/" + route)) is the callback function executed for each file name. It registers a route handler to the Express application.

//app.use() is a method in Express that registers middleware or route handlers.
//"/api/v1" is the base path prefix for the routes.
//require("./routes/" + route) dynamically imports the route file based on the current route file name being processed.
//So, for each route file found in the ./routes directory, a route handler is registered
//with the base path of "/api/v1" and the corresponding route file is imported.
