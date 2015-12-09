var path = require('path');

var config = {};

// Paths
config.paths              = {};
config.paths.base         = __dirname;
config.paths.nodeModules  = path.join(config.paths.base, 'node_modules');
config.paths.src          = path.join(config.paths.base, 'src');
config.paths.app          = path.join(config.paths.src, 'app');
config.paths.lib          = path.join(config.paths.src, 'lib');
config.paths.dist         = path.join(config.paths.base, 'dist');

// TASKS
config.tasks = {};

// Html
config.tasks.html = {
  src: path.join(config.paths.src, 'index.html'),
  dst: config.paths.dist
};

// Package
config.tasks.package = {
  src: [
    path.join(config.paths.dist, 'templates.js'),
    path.join(config.paths.app, 'common', 'common.module.js'),
    path.join(config.paths.app, 'common', '**', '*.js'),
    path.join(config.paths.app, 'articles', 'articles.module.js'),
    path.join(config.paths.app, 'articles', '**', '*.js'),
    path.join(config.paths.app, 'app.module.js'),
  ],
  concatOutputFile: 'app.js',
  dst: config.paths.dist
};

// Package vendors
config.tasks.packageVendors = {
  src: [
    // Deps files
    path.join(config.paths.nodeModules, 'angular', 'angular.min.js'),
    path.join(config.paths.nodeModules, 'angular-ui-router', 'release', 'angular-ui-router.min.js'),
    path.join(config.paths.lib, 'tooltip', 'tooltip.min.js'),
  ],
  concatOutputFile: 'vendors.js',
  dst: config.paths.dist
};

// Package Html
config.tasks.packageHtml = {
  src: path.join(config.paths.app, '**', '*.html'),
  templateCacheOptions: {
    module: 'wrtd.templates',
    moduleSystem: 'IIFE',
    standalone: true,
  },
  dst: config.paths.dist
};

// Sass
config.tasks.sass = {
  src: path.join(config.paths.app, 'app.scss'),
  dst: config.paths.dist
};

// Serve
config.tasks.serve = {
  basedir: config.paths.dist,
  watchers: [
    {
      pattern: path.join(config.paths.app, '**', '*.js'),
      tasks: ['package:reload']
    },
    {
      pattern: path.join(config.paths.app, '**', '*.scss'),
      tasks: ['sass:reload']
    },
    {
      pattern: [path.join(config.paths.src, 'index.html')],
      tasks: ['html:reload']
    },
    {
      pattern: [path.join(config.paths.app, '**', '*.html')],
      tasks: ['package:reload']
    }
  ]
};

module.exports = config;
