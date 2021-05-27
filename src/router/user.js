const express = require('express');

const { createUser, getOneUser, updateUser, deleteUser } = require('../service');

const user = express.Router();

user.post('/user', async (req, res, next) => {
  try {
    const { name, lastName } = req.body;

    if (!name || !lastName) res.status(404).send('Not found!');
    const user = await createUser({ name, lastName });

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

user.get('/user/:id', async (req, res, next) => {
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

user.put('/user/:id', async (req, res, next) => {
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

user.delete('/user/:id', async (req, res, next) => {
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

module.exports = user;
