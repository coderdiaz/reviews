var path = require("path");

module.exports = function override(config, env) {
  config.resolve.alias['@'] = path.resolve(__dirname, 'src/');
  config.resolve.alias.Components = path.resolve(__dirname, 'src/components/');
  config.resolve.alias.Constants$ = path.resolve(__dirname, 'src/constants/index.js');
  return config;
}
