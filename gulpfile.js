'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var zip = require('gulp-zip');


var pjson = require('./package.json');

gulp.task('default', function () {
    gulp.start('sass:watch');
    gulp.start('css:watch');
});

gulp.task('sass', function () {
    return gulp.src('./css/src/sass/**/*.scss')
            .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
            .pipe(gulp.dest('./css/src'));
});

gulp.task('minify-js', function () {
    return gulp.src(['./js/src/*.js'])
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
    gulp.watch('./css/src/sass/**/*.scss', ['sass']);
    gulp.watch('./css/src/*.css', ['minify-css']);
    gulp.watch('./js/src/*.js', ['minify-js']);
});

gulp.task('zip', function () {
    return gulp.src(['./**', '!./package.json', '!./gulpfile.js', '!./node_modules{,/**}', '!./nbproject{,/**}', '!./css/src{,/**}', '!./js/src{,/**}', '!*.zip'])
            .pipe(zip(pjson.name + '-' + pjson.version + '.zip'))
            .pipe(gulp.dest('./'));
});
