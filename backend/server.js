const express = require('express');
const dotenv = require('dotenv');
// const connectDB = require('');
// const userRoutes = require('');
const path = require('path');

const app = express();
dotenv.config();
//connectDB();
app.use(express.json());

const PORT = process.env.PORT || 5005;

app.get('/', (req, res) => {
  res.send('Connected to server');
});

app.listen(PORT, console.log(`Server started on port ${PORT}`));
