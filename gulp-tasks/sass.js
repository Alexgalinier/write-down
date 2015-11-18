var plumber = require('gulp-plumber');
var sass    = require('gulp-sass');

module.exports = function(gulp, options) {
  return function () {
    return gulp.src(options.src)
      .pipe(plumber())
      .pipe(sass())
      .pipe(gulp.dest(options.dst));
  }
};
