const express = require('express');
const router = express.Router();
const { login } = require('../Controllers/commonController');

// Route for logging in
router.post('/login', login);

module.exports = router;
