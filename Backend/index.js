const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const studentRoutes = require('./Routes/StudentRoutes');
const volunteerRoutes = require('./Routes/VolunteerRoutes');
const resourceRoutes = require('./Routes/ResourceRoutes');
const commonRoutes = require('./Routes/commonRoutes');
const volunteerResourceRoutes = require('./Routes/VolunteerResourceRoutes');
const app = express();
const port = process.env.PORT || 3000; // Default to port 3000 if PORT is not set

// Middleware
app.use(cors());
app.use(express.json()); // Middleware to parse JSON requests
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Allow these HTTP methods
  next();
});

// Routes
app.use('/api/students', studentRoutes);
app.use('/api/volunteers', volunteerRoutes);
app.use('/api', commonRoutes);

app.use('/api/resources', resourceRoutes);
app.use('/api', volunteerResourceRoutes);

// Other setup...

// Database connection
mongoose.connect('mongodb://127.0.0.1:27017/UITRUST')
  .then(() => {
    console.log('MongoDB connected');
    app.listen(port, () => {
      console.log(`Server running at port ${port}`);
    });
  })
  .catch(err => {
    console.error('Connection unsuccessful', err);
  });
