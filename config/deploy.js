/* eslint-env node */

module.exports = function(deployTarget) {
  var ENV = {
    build: {},
    git: {
      repo: 'git@github.com:mshafir/liquid-fire-flip.git'
    }
  };

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
  }

  return ENV;
};
