var _ = require('lodash');
var browserSync = require('browser-sync').create('dev-server');

module.exports = function(gulp, config) {
  return function() {
    browserSync.init({
      server: {
        baseDir: config.basedir
      }
    });

    _.forEach(config.watchers, function(watcher) {
      gulp.watch(watcher.pattern, watcher.tasks)
    });
  }
};
