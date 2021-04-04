const withTM = require('next-transpile-modules')([
  '@boxdrop/types',
  '@boxdrop/core',
]);

module.exports = withTM({
  env: {},
});
