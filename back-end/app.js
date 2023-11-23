// app.js
const express = require('express');
const cors = require('cors');

const app = express();

// Use CORS middleware
app.use(cors());

// Your API routes go here

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
