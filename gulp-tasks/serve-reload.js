module.exports = function(gulp, config) {
  return function() {
    var browserSync = null;
    try {
      browserSync= require('browser-sync').get('dev-server')
    } catch (e) {
      browserSync = null;
    }

    browserSync.reload();
  };
};
