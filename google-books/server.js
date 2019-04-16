// DEPENDENCIES
const express = require ("express");
const path = require ("path");
const PORT = process.env.PORT || 8080;
const app = express();

const mongoose = require ("mongoose");
const routes = require ("./routes");
const Book = require("./models/booksModel.js");


// DEFINED MIDDLEWARE 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// SERVE UP STATIC ASSETS (USUALLY ON HEROKU)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// CONNECT TO MOGODB
mongoose.connect(process.env.MONGODDB_URI || "mongodb://localhost/goooglebooks", { useNewUrlParser: true});

// ROUTES
app.use(routes);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
