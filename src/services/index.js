const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getUsers = async () => {
  return await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
};

const getUserById = async (id) => {
  return await prisma.user.findUnique({
    where: { id },
    include: {
      posts: true,
    },
  });
};

const createUser = async (userData) => {
  return await prisma.user.create({
    data: userData,
  });
};

const getPosts = async () => {
  return await prisma.post.findMany({
    include: {
      author: true,
    },
  });
};

const getPostById = async (id) => {
  return await prisma.post.findUnique({
    where: { id },
    include: {
      author: true,
    },
  });
};

const createPost = async (postData) => {
  return await prisma.post.create({
    data: postData,
  });
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  getPosts,
  getPostById,
  createPost
};