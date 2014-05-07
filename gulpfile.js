var gulp = require('gulp')
  , browserify = require('browserify')
  , clean = require('gulp-clean')
  , source = require('vinyl-source-stream');

gulp.task('browserify', function () {
  return browserify('./public/scripts/app.js')
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/scripts/'));
});

gulp.task('clean', function () {
  gulp.src('./build', {read: false})
    .pipe(clean({force: true}));
});

gulp.task('default', ['clean', 'browserify']);
