'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var replace = require('gulp-replace');
var saveLicense = require('uglify-save-license');

var pjson = require('./package.json');

gulp.task('build-scss', function () {
    return gulp
            .src(['./src/sass/**/*.scss'])
            .pipe(sass({
                outputStyle: 'expanded'
            }).on('error', sass.logError))
            .pipe(replace(/(\@charset\s\"UTF\-8\"\;[\r\n]+)/igm, ''))
            .pipe(gulp.dest('./css'));
});

gulp.task('minify-css', function () {
    return gulp
            .src([
                './css/*.css',
                '!./css/*.min.css'
            ])
            .pipe(cleanCSS())
            .pipe(rename({
                suffix: '.min'
            }))
            //.pipe(replace('*/', '*/\r\n'))
            // .pipe(replace('/*!', '\r\n\r\n/*!'))
            .pipe(gulp.dest('./css'));
});

gulp.task('build-js', function () {
    return gulp
            .src(['./src/js/*.js'])
            .pipe(concat('script.js'))
            .pipe(gulp.dest('./js'));
});

gulp.task('minify-js', function () {
    return gulp
            .src([
                './js/script.js',
                '!./js/script.min.js'
            ])
            .pipe(uglify({
                output: {
                    comments: saveLicense
                }
            }))
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest('./js'));
});

gulp.task('watch', function () {
    gulp.watch(['./src/sass/**/*.scss'], ['build-scss']);
    gulp.watch(['./css/style.css'], ['minify-css']);
    gulp.watch(['./src/js/**/*.js'], ['build-js']);
    gulp.watch(['./js/script.js'], ['minify-js']);
});

gulp.task('zip', function () {
    return gulp.src(['./**', '!./package.json', '!./gulpfile.js', '!./node_modules{,/**}', '!./nbproject{,/**}', '!./src{,/**}', '!*.zip'])
            .pipe(zip(pjson.name + '-' + pjson.version + '.zip'))
            .pipe(gulp.dest('./'));
});
