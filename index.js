
var fs = require('fs');
var babelConfig = JSON.parse(fs.readFileSync('./.babelrc'));
require('@babel/register')(babelConfig);
require("babel-polyfill"); // If you use async and await
require('./src/index');
