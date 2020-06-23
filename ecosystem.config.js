const { name, main: script } = require('./package.json');

module.exports = [
  {
    script,
    name,
    exec_mode: 'cluster',
    instances: 0,
    env: {
      NODE_ENV: 'production',
    },
  },
];
