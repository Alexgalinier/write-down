var templateCache = require('gulp-angular-templatecache');

module.exports = function(gulp, options) {
  return function () {
    return gulp.src(options.src)
      .pipe(templateCache(options.templateCacheOptions))
      .pipe(gulp.dest(options.dst));
  }
};


