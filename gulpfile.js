var gulp = require('gulp');
var fs = require('fs');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var replace = require('gulp-replace');
var util = require('gulp-util');
var injectString = require('gulp-inject-string');
var stripComments = require('gulp-strip-comments');
var stripCssComments = require('gulp-strip-css-comments');
var postcss = require('gulp-postcss');
var runSequence = require('run-sequence');
var zip = require('gulp-zip');

var pjson = require('./package.json');
var sourceHeader = fs
        .readFileSync('./src/source-header.txt', 'utf8')
        .replace('{VERSION}', pjson.version);

gulp.task('scss:build', function () {
    return gulp.src('./src/sass/**/*.scss')
            .pipe(sass({
                outputStyle: 'expanded'
            }).on('error', util.log))
            .pipe(stripCssComments({
                preserve: false
            }))
            .pipe(gulp.dest('./src/css'));
});


gulp.task('css:build', function () {
    return gulp.src(['./src/css/*.css'])
            .pipe(postcss([
                require('autoprefixer')({browsers: ['last 2 version', '> 10%']}),
                require('css-mqpacker')(),
            ]))
            .pipe(replace(/([\r\n]{2,})/igm, '\r\n'))
            .pipe(replace(/\@charset\s\"UTF\-8\"\;/igm, ''))
            .pipe(injectString.prepend('@charset "UTF-8";\n' + sourceHeader + '\n'))
            .pipe(gulp.dest('./css'));
});

gulp.task('css:minify', function () {
    return gulp.src(['./css/*.css', '!./css/*.min.css'])
            .pipe(postcss([
                require('cssnano')()
            ]))
            .pipe(replace(/\@charset\s\"UTF\-8\"\;/igm, ''))
            .pipe(injectString.prepend('@charset "UTF-8";\n' + sourceHeader + '\n'))
            .pipe(rename({
                suffix: '.min'
            }))
            .pipe(gulp.dest('./css'));
});

gulp.task('js:build', function () {
    return gulp.src([
        './src/js/workarounds.js',
        './src/js/vendor/bootstrap.min.js',
        './src/js/vendor/select2.full.min.js',
        './src/js/vendor/moment-with-locales.min.js',
        './src/js/vendor/bootstrap-datetimepicker.min.js',
        './src/js/vendor/bootstrap-fileselect.min.js',
        './src/js/vendor.js',
        './src/js/resize-listener.js',
        './src/js/php-version-loader.js',
        './src/js/stylesheet-switcher.js'
    ])
            .pipe(stripComments())
            .pipe(concat('script.js'))
            .pipe(injectString.prepend(sourceHeader + '\n'))
            .pipe(gulp.dest('./js'));
});


gulp.task('js:minify', function () {
    return gulp.src(['./js/script.js'])
            .pipe(uglify().on('error', util.log))
            .pipe(rename({suffix: '.min'}))
            .pipe(injectString.prepend(sourceHeader + '\n'))
            .pipe(gulp.dest('./js'));
});
gulp.task('src:rebuild', function () {
    runSequence('js:build', 'js:minify', 'scss:build', 'css:build', 'css:minify');
});
gulp.task('watch', function () {
    gulp.watch(['./src/sass/**/*.scss'], function () {
        runSequence('scss:build', 'css:build', 'css:minify');
        //runSequence('scss:build', 'css:build');
    });
    gulp.watch(['./src/js/*.js'], function () {
        runSequence('js:build', 'js:minify');
        //runSequence('js:build');
    });
});
gulp.task('zip:build', function () {
    return gulp.src([
        './**',
        '!./package.*',
        '!./gulpfile.js',
        '!./node_modules{,/**}',
        '!./nbproject{,/**}',
        '!./src{,/**}',
        '!*.zip'
    ])
            .pipe(zip(pjson.name + '-' + pjson.version + '.zip'))
            .pipe(gulp.dest('./'));
});
