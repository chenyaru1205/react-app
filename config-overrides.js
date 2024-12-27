/* config-overrides.js */
const { override, overrideDevServer, watchAll } = require('customize-cra');
const { name } = require('./package');

// config-overrides.js
module.exports = {
  webpack: override((config, env) => {
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = 'umd';
    // webpack 5 需要把 jsonpFunction 替换成 chunkLoadingGlobal
    config.output.chunkLoadingGlobal = `webpackJsonp_${name}`; 
    config.output.globalObject = 'window';
    return config;
  }),
  devServer: overrideDevServer(
    (config) => {
      Object.assign(config, {
        headers: {
          'Access-Control-Allow-Origin': '*', // 允许跨域，允许所有域名的脚本访问该资源
        }
      });
      return config;
    }
  )
}
