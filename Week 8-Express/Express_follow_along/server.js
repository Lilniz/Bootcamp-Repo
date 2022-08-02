const express = require("express");
const app = express();
const PORT = process.env.PORT || 3333;
const path = require("path");
const db = require('./db/connection')
// Create Read Update Delete (CRUD)
// GET POST PUT DELETE; server actions

const api_routes = require("./routes/api_routes");

// Share Static/Browser Files
app.use(express.static(path.join(__dirname, "browser")));
// Attach client-side form data to the request.body object
app.use(express.urlencoded({ extended: true }));
// Allow express to parse JSON
app.use(express.json());

// Get, and send back, the file for the web page.
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'browser/start.html'))
})

//Giving unique pages back.
app.get('/special', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/special.html'))
})

// Load Routes
app.use("/api", api_routes);

// Start Server
db.sync({force: true})
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  });


// app.get('/', (req, res, next) => {
//     req.body = {age:'??'}
//     next();
// }, api_post_route)