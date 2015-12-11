var plumber = require('gulp-plumber');
var sass    = require('gulp-sass');

module.exports = function(gulp, options) {
  return function () {
    return gulp.src(options.src)
      .pipe(plumber())
      .pipe(sass(options.compilerOptions))
      .pipe(gulp.dest(options.dst));
  }
};
