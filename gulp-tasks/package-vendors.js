var concat        = require('gulp-concat-sourcemap');

module.exports = function(gulp, options) {
  return function () {
    return gulp.src(options.src)
      .pipe(concat(options.concatOutputFile))
      .pipe(gulp.dest(options.dst));
  }
};

