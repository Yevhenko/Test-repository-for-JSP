const { User, Project } = require('./db/models');

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  if (!err) return res.json('Everything is OK!');

  return res.status(500).json({ error: err.message });
}

async function createUser(body) {
  try {
    const user = await User.create({
      name: body.name,
      lastName: body.lastName,
    });

    return user;
  } catch (error) {
    throw new Error(error);
  }
}

async function getOneUser(params) {
  try {
    const user = await User.findOne({
      where: { id: params.id },
    });

    return {
      name: user.name,
      lastName: user.lastName,
    };
  } catch (error) {
    throw new Error(error);
  }
}

async function updateUser(body, params) {
  try {
    await User.update(
      {
        name: body.name,
        lastName: body.lastName,
      },

      { where: { id: params.id } },
    );

    return 'user is updated';
  } catch (error) {
    throw new Error(error);
  }
}

async function deleteUser(params) {
  try {
    await User.destroy({
      where: { id: params.id },
    });

    return 'user deleted';
  } catch (error) {
    throw new Error(error);
  }
}

async function createProject(body) {
  try {
    return await Project.create({
      name: body.name,
      duration: body.duration,
      status: body.lastName,
    });
  } catch (error) {
    throw new Error(error);
  }
}

async function getOneProject(params) {
  try {
    const project = await Project.findOne({
      where: { id: params.id },
    });

    return {
      name: project.name,
      duration: project.duration,
      lastName: project.status,
    };
  } catch (error) {
    throw new Error(error);
  }
}

async function updateProject(body, params) {
  try {
    await Project.update(
      {
        name: body.name,
        duration: body.duration,
        lastName: body.status,
      },

      { where: { id: params.id } },
    );

    return 'project is updated';
  } catch (error) {
    throw new Error(error);
  }
}

async function deleteProject(params) {
  try {
    await Project.destroy({
      where: { id: params.id },
    });

    return 'project deleted';
  } catch (error) {
    throw new Error(error);
  }
}

async function assignProjectToUser(projects, params) {
  try {
    const projs = [];

    for (let i = 0; i < projects.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      const e = await Project.findOne({
        where: { id: projects[i] },
      });

      projs.push(e);
    }

    const user = await Project.findOne({
      where: { id: params.id },
    });

    return {
      id: user.id,
      name: user.name,
      lastName: user.lastName,
      projects: projs,
    };
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  assignProjectToUser,
  deleteProject,
  createProject,
  getOneProject,
  updateProject,
  deleteUser,
  createUser,
  getOneUser,
  errorHandler,
  updateUser,
};
