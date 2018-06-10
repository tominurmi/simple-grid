'use strict';

let gulp = require('gulp'),
sass = require('gulp-sass'),
cssmin = require('gulp-cssmin'),
watch = require('gulp-watch');

gulp.task('sass', function () {
  return gulp.src('./src/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./public/css/'));
});

gulp.task('watch', function () {
  gulp.watch('./src/**/*.scss', ['sass']);
  gulp.watch('./public/css/*.css', ['cssmin']);
});

gulp.task('default', ['sass', 'watch']);

gulp.task('cssmin', function () {
    gulp.src('./public/css/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('./public/css/min/'));
});
