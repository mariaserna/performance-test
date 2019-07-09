const withSass = require('@zeit/next-sass');

//importar tipo modulos el css
module.exports = withSass({
  cssModules: true,
});
