const services = require('../services');
const { HttpError } = require('../utils/errorHandler');

const getAllUsers = async (req, res, next) => {
  try {
    const users = await services.getUsers();
    res.json({ success: true, data: users });
  } catch (err) {
    next(err);
  }
};

const getUser = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) throw new HttpError(400, 'Invalid user ID');

    const user = await services.getUserById(id);
    if (!user) throw new HttpError(404, 'User not found');

    res.json({ success: true, data: user });
  } catch (err) {
    next(err);
  }
};

const createUser = async (req, res, next) => {
  try {
    const { email, name, password } = req.body;
    if (!email || !password) throw new HttpError(400, 'Email and password are required');

    const newUser = await services.createUser({ email, name, password });
    res.status(201).json({ success: true, data: newUser });
  } catch (err) {
    next(err);
  }
};

const getAllPosts = async (req, res, next) => {
  try {
    const posts = await services.getPosts();
    res.json({ success: true, data: posts });
  } catch (err) {
    next(err);
  }
};

const getPost = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) throw new HttpError(400, 'Invalid post ID');

    const post = await services.getPostById(id);
    if (!post) throw new HttpError(404, 'Post not found');

    res.json({ success: true, data: post });
  } catch (err) {
    next(err);
  }
};

const createPost = async (req, res, next) => {
  try {
    const { title, content, published, authorId } = req.body;
    if (!title || !authorId) throw new HttpError(400, 'Title and authorId are required');

    const newPost = await services.createPost({ title, content, published, authorId });
    res.status(201).json({ success: true, data: newPost });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  getAllPosts,
  getPost,
  createPost
};