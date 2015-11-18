var concat        = require('gulp-concat-sourcemap');
var ngAnnotate    = require('gulp-ng-annotate');

module.exports = function(gulp, options) {
  return function () {
    return gulp.src(options.src)
      .pipe(ngAnnotate())
      .pipe(concat(options.concatOutputFile))
      .pipe(gulp.dest(options.dst));
  }
};

