const express = require("express");
const app = express();
const PORT = process.env.PORT || 3333;
const path = require("path");
// Create Read Update Delete (CRUD)
// GET POST PUT DELETE; server actions

const api_routes = require("./routes/api_routes");

// Share Static/Browser Files
app.use(express.static(path.join(__dirname, "browser")));
// Attach client-side form data to the request.body object
app.use(express.urlencoded({ extended: true }));
// Allow express to parse JSON
app.use(express.json());

// Load Routes
app.use("/api", api_routes);

// Start Server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// app.get('/', (req, res, next) => {
//     req.body = {age:'??'}
//     next();
// }, api_post_route)