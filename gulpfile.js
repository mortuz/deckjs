'use strict';

// Get all the dependincies
var gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    browserSync = require('browser-sync'),
    plumber = require('gulp-plumber');

gulp.task('serve', ['compress-js'], function () {

    browserSync.init({
        server: './',
        notify: false
    });

    gulp.watch(['./src/*.js'], ['compress-js']);

    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./src/*.js').on('change', browserSync.reload);

});


// js compress task
gulp.task('compress-js', function () {
    return gulp.src('./src/*.js')
        // .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});


// default task
gulp.task('default', ['serve']);