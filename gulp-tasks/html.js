module.exports = function(gulp, options) {
  return function () {
    return gulp.src(options.src)
      .pipe(gulp.dest(options.dst));
  }
};
