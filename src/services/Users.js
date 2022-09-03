const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");

class UsersService {
  constructor() {}

  // Get all users
  async getUsers() {
    const users = await models.User.findAll();
    return users || boom.notFound();
  }

  // create a user
  async createUser(data) {
    const user = await models.User.create(data);
    return user;
  }

  // Delete a user
  async deleteUser(id) {
    const user = await models.User.destroy({
      where: {
        id,
      },
    });
    if (user === 0) {
      throw boom.notFound("User not found");
    }
    return user;
  }
}

module.exports = UsersService;
