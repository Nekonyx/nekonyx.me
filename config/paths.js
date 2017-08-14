const { resolve } = require('path');

const getPath = file => resolve(process.cwd(), file);

module.exports = {
  appRoot: getPath(''),
  appDocs: getPath('docs'),
  appHtml: getPath('src/resources/index.html'),
  appIndex: getPath('src/app'),
  appSource: getPath('src'),
  appModules: getPath('node_modules'),
};
