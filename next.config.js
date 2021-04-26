
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['cTTotHY8T4qytQ345ixDj2'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  