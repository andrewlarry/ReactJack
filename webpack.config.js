module.exports = (env) => {
  return require(`./config/webpack.${env}.js`);
}