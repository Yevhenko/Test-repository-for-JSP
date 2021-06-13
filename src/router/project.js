const express = require('express');

const { createProject, updateProject, getOneProject, deleteProject } = require('../service');

const projectItem = express.Router();

projectItem.post('/project', async (req, res, next) => {
  try {
    const { name, status, duration } = req.body;

    if (!name || !status || !duration) res.status(404).send('Not found!');
    const project = await createProject({ name, status, duration });

    res.status(200).json(project);
  } catch (error) {
    next(error);
  }
});

projectItem.get('/project/:id', async (req, res, next) => {
  try {
    const { params } = req;
    const projectId = Number(params.id);

    if (!projectId) res.status(404).send('Not found!');
    const project = await getOneProject(params);

    res.json(project);
  } catch (error) {
    next(error);
  }
});

projectItem.put('/project/:id', async (req, res, next) => {
  try {
    const { params, body } = req;
    const projectId = Number(params.id);

    if (!projectId || !params) res.status(404).send('Not found!');

    const response = await updateProject(body, params);

    res.json(response);
  } catch (error) {
    next(error);
  }
});

projectItem.delete('/project/:id', async (req, res, next) => {
  try {
    const { params } = req;
    const projectId = Number(params.id);

    if (!projectId) res.status(404).send('Not found!');
    const response = await deleteProject(params);

    res.json(response);
  } catch (error) {
    next(error);
  }
});

module.exports = projectItem;
