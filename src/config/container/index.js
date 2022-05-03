const awilix = require('awilix');
const { containerNameFormatter } = require('../../helpers/utils');

const container = awilix.createContainer();

const setupContainer = () => {
  container.loadModules(['../../modules/**/**.service.js'], {
    cwd: __dirname,
    resolverOptions: {
      register: awilix.asClass
    },
    formatName: containerNameFormatter('Service')
  });

  container.loadModules(['../../modules/**/**.controller.js'], {
    cwd: __dirname,
    resolverOptions: {
      register: awilix.asClass
    },
    formatName: containerNameFormatter('Controller')
  });

  container.loadModules(['../../modules/**/**.data-access.js'], {
    cwd: __dirname,
    resolverOptions: {
      register: awilix.asClass
    },
    formatName: containerNameFormatter('DataAccess')
  });

  container.loadModules(['../../database/models/**/*.js'], {
    cwd: __dirname,
    resolverOptions: {
      register: awilix.asValue
    },
    formatName: containerNameFormatter('Model')
  });

  container.loadModules(['../../helpers/Service-caller.js'], {
    cwd: __dirname,
    resolverOptions: {
      register: awilix.asClass
    },
    formatName: containerNameFormatter('')
  });

  container.loadModules(['../environment.js'], {
    cwd: __dirname,
    resolverOptions: {
      register: awilix.asFunction
    },
    formatName: containerNameFormatter('Config', false)
  });

  container.loadModules(['../jwt.js'], {
    cwd: __dirname,
    resolverOptions: {
      register: awilix.asFunction
    },
    formatName: containerNameFormatter('', false)
  });
};

module.exports = {
  container,
  setupContainer
};
