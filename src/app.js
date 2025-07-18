const express = require('express');
const cors = require('cors');
const { errorHandler } = require('./utils/errorHandler');
const router = require('./routes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', router);

// Error handling
app.use(errorHandler);

module.exports = app;