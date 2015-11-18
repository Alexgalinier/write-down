var gulp = require('gulp'),
  config = require('./gulpfile.config');

gulp.task('package:html',           [],                     getTask('package-html', config.tasks.packageHtml));
gulp.task('package:vendors',        [],                     getTask('package-vendors', config.tasks.packageVendors));
gulp.task('package',                ['package:html', 'package:vendors'], getTask('package', config.tasks.package));
gulp.task('package:no-vendors',     ['package:html'],       getTask('package', config.tasks.package));
gulp.task('package:reload',         ['package:no-vendors'], getTask('serve-reload', {}));

gulp.task('html',                   [],         getTask('html', config.tasks.html));
gulp.task('html:reload',            ['html'],   getTask('serve-reload', {}));

gulp.task('sass',                   [],         getTask('sass', config.tasks.sass));
gulp.task('sass:reload',            ['sass'],   getTask('serve-reload', {}));

gulp.task('build',                  ['package', 'package:html', 'html', 'sass']);

gulp.task('serve',                  ['build'],  getTask('serve', config.tasks.serve));

function getTask(name, options) {
  return require('./gulp-tasks/' + name)(gulp, options);
}
