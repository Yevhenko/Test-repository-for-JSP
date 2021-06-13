const express = require('express');

const {
  createUser,
  getOneUser,
  updateUser,
  deleteUser,
  assignProjectToUser,
} = require('../service');

const userItem = express.Router();

userItem.post('/user', async (req, res, next) => {
  try {
    const { name, lastName } = req.body;

    if (!name || !lastName) res.status(404).send('Not found!');
    const user = await createUser({ name, lastName });

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

userItem.post('/user/:id/assign', async (req, res, next) => {
  try {
    const { params } = req;
    const { projects } = req.body;

    Number(params.id);

    if (!projects) res.status(404).send('Not found!');
    const response = await assignProjectToUser(projects, params);

    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
});

userItem.get('/user/:id', async (req, res, next) => {
  try {
    const { params } = req;
    const userId = Number(params.id);

    if (!userId) res.status(404).send('Not found!');
    const user = await getOneUser(params);

    res.json(user);
  } catch (error) {
    next(error);
  }
});

userItem.put('/user/:id', async (req, res, next) => {
  try {
    const { params, body } = req;
    const userId = Number(params.id);

    if (!userId || !params) res.status(404).send('Not found!');

    const response = await updateUser(body, params);

    res.json(response);
  } catch (error) {
    next(error);
  }
});

userItem.delete('/user/:id', async (req, res, next) => {
  try {
    const { params } = req;
    const userId = Number(params.id);

    if (!userId) res.status(404).send('Not found!');
    const response = await deleteUser(params);

    res.json(response);
  } catch (error) {
    next(error);
  }
});

module.exports = userItem;
