// The npm scripts include the --env flag with environment name. The correct config
// file is conditionally imported from the /config directory. 

module.exports = (env) => {
  return require(`./config/webpack.${env}.js`);
}