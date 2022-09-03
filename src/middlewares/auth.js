const boom = require('@hapi/boom');
const rolesService = require('../services/Roles');

const config = require('../config/config');

const service = new rolesService();

function checkAdmin(req, res, next) {
  const user = req.user;
  if (user.role === 'admin') {
    next();
  }else {
    next(boom.unauthorized());
  }
}


function ckeckRoles (...roles) {
  return function (req, res, next) {
    const role = req.headers.auth;
    if (roles.includes(role)) {
      next();
    }else {
      next(boom.unauthorized());
    }
  }
}

module.exports =  {
  checkAdmin,
  ckeckRoles
};
