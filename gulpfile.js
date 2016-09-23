'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('default', function () {
    gulp.start('sass:watch');
    gulp.start('css:watch');
});

gulp.task('sass', function () {
    return gulp.src('./css/sass/**/*.scss')
            .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
            .pipe(gulp.dest('./css/src'));
});

gulp.task('minify-js', function () {
    gulp.src(['./js/src/*.js'])
            .pipe(uglify())
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest('./js'));
});

gulp.task('minify-css', function () {
    return gulp.src(['./css/src/*.css'])
            .pipe(cleanCSS({compatibility: 'ie8'}))
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
    gulp.watch('./css/sass/**/*.scss', ['sass']);
    gulp.watch('./css/src/*.css', ['minify-css']);
    gulp.watch('./css/*.js', ['minify-js']);
});


