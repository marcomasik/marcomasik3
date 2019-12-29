'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./**/*.scss') /* Look for .scss files in this folder and its subfolders */
    .pipe(sass().on('error', sass.logError)) /* Convert the sass syntax to css, log error */
    .pipe(concat('main.css')) /* Edit together all css files into one css file */
    .pipe(gulp.dest('./')); /* Place the edited css file in this folder */
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./components/**/*.scss', gulp.series('sass')); /* Watch the .scss files in this subfolder and execute the gulp script on them */
});