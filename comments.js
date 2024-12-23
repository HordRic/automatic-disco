// Create web server with express
// Create a route that accepts POST requests to /comments
// The route should accept JSON data in the request body
// The route should append the data to the comments array
// The response should be the JSON data that was sent in the request
// Hint: Use the express.json() middleware to parse JSON data in the request body

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const comments = [];

app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

// Test the route with curl
// curl -X POST -H "Content-Type: application/json" -d '{"name": "Alice", "content": "Hello, world!"}' http://localhost:3000/comments
// {"name":"Alice","content":"Hello, world!"}

// Test the route with Postman
// Use the POST method with the URL http://localhost:3000/comments
// Set the body to JSON and enter the following data: {"name": "Bob", "content": "How are you?"}
// Click the Send button to make the request
// The response should be the same JSON data that was sent in the request: {"name": "Bob", "content": "How are you?"}