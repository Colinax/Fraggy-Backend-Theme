'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

gulp.task('default', function () {
    gulp.start('sass:watch');
});


gulp.task('sass', function () {
    return gulp.src('./css/sass/**/*.scss')
            .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
            .pipe(gulp.dest('./css'));
});

gulp.task('sass-compressed', function () {
//    return gulp.src('./css/sass/**/style.scss')
//            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
//            .pipe(rename('style.min.css'))
//            .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./css/sass/**/*.scss', ['sass', 'sass-compressed']);
});

