const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

// User routes
router.get('/users', controllers.getAllUsers);
router.get('/users/:id', controllers.getUser);
router.post('/users', controllers.createUser);

// Post routes
router.get('/posts', controllers.getAllPosts);
router.get('/posts/:id', controllers.getPost);
router.post('/posts', controllers.createPost);

module.exports = router;