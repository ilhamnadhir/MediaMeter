// server.js
console.log('Starting server...');

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const usageRoutes = require('./routes/usageRoutes'); // Import the routes

console.log('Loading environment variables...');
dotenv.config(); // Load environment variables from .env file
console.log('Environment variables loaded.');

// Debugging log to check if MONGO_URI is loaded correctly
console.log('Mongo URI:', process.env.MONGO_URI);

const app = express();
app.use(express.json()); // Middleware to parse JSON data in requests

// Log incoming requests for debugging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Connect to MongoDB using the connection string from the .env file
console.log('Connecting to MongoDB...');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => {
    console.error('Could not connect to MongoDB:', err.message); // Log the error message
    console.error('Full error details:', err); // Log the full error object for debugging
  });

// Use the usage routes under the '/api/usage' URL path
console.log('Setting up routes...');
app.use('/api/usage', usageRoutes);

// Set the port for the server to listen on
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
