const { User } = require('./db/models');

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

module.exports = {
  deleteUser,
  createUser,
  getOneUser,
  errorHandler,
  updateUser,
};
