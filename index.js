// Import express package
const express = require("express");
// Declare variable for connection to database
const db = require("./config/connection");
// Provide path for API routes
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
// Initialize app variable by setting it to the value of express()
const app = express();

app.use(express.urlencoded({ extended: true }));
// Built in Express function that parses incoming requests to JSON
app.use(express.json());
app.use(routes);

//Open connection to the database
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server for Spoof Social is running on port ${PORT}!`);
  });
});
