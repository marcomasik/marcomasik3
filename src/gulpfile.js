'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./components/**/*.scss', gulp.series('sass'));
});