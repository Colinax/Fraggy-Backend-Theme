let gulp = require('gulp'),
    fs = require('fs'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    terser = require('gulp-terser'),
    replace = require('gulp-replace'),
    util = require('gulp-util'),
    injectString = require('gulp-inject-string'),
    stripCssComments = require('gulp-strip-css-comments'),
    postcss = require('gulp-postcss'),
    zip = require('gulp-zip'),
    removeMarkdown = require('gulp-remove-markdown');

let package = require('./package.json');

let sourceHeader = fs.readFileSync(package.buildOpts.common.sourceHeader, 'utf8')
    .replace('{VERSION}', package.version)
    .replace('{YEAR}', (new Date()).getFullYear().toString())
    .replace('{AUTHOR}', package.author);

gulp.task('scss:build', function () {
    return gulp.src('./src/sass/style.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', util.log))
        .pipe(gulp.dest('./src/css'));
});

gulp.task('css:build', function () {
    return gulp.src(['./src/css/style.css'])
        .pipe(postcss([
            require('autoprefixer')(),
            require('css-mqpacker')(),
        ]))
        .pipe(replace(/([\r\n]{2,})/igm, '\r\n'))
        .pipe(injectString.prepend(sourceHeader + '\n'))
        .pipe(gulp.dest('./css'));
});

gulp.task('css:minify', function () {
    return gulp.src(['./css/style.css'])
        .pipe(postcss([
            require('cssnano')
        ]))
        .pipe(stripCssComments({
            preserve: false
        }))
        .pipe(injectString.prepend(sourceHeader + '\n'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./css'));
});

gulp.task('js:build', function () {
    return gulp.src([
            './src/js/workarounds.js',

            './src/js/vendor/popper.min.js',
            './src/js/vendor/bootstrap.min.js',

            './src/js/vendor/bootstrap-fileselect.min.js',

            './src/js/vendor/jquery.datetimepicker.full.min.js',

            './src/js/vendor/jquery.easing.min.js',
            './src/js/vendor/jquery.nicescroll.min.js',

            './src/js/vendor/select2.min.js',

            './src/js/vendor/jquery-insert.js',

            './src/js/vendor/jquery-migrate.min.js',

            './src/js/vendor/jquery.browser.js',

            './src/js/theme/base.js',
            './src/js/theme/functions.js',
            './src/js/theme/navigation.js',
            './src/js/theme/collapse-history.js',

            './src/js/theme/init/select2.js',
            './src/js/theme/init/fileselect.js',
            './src/js/theme/init/datetimepicker.js'
        ])
        .pipe(concat('script.js'))
        .pipe(injectString.prepend(sourceHeader + '\n'))
        .pipe(gulp.dest('./js'));
});

gulp.task('js:minify', function () {
    return gulp.src(['./js/script.js'])
        .pipe(terser())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(injectString.prepend(sourceHeader + '\n'))
        .pipe(gulp.dest('./js'));
});

gulp.task('zip:build', function () {
    return gulp.src([
            './**',
            '!./api/cache/{,/**}',
            '!./package*',
            '!./gulpfile.js',
            '!./node_modules{,/**}',
            '!./nbproject{,/**}',
            '!./src{,/**}',
            '!./README.md',
            '!*.zip'
        ])
        .pipe(zip(package.name + '-' + package.version + '.zip'))
        .pipe(gulp.dest('./'));
});

gulp.task('src:watch', function () {
    gulp.watch(['./src/sass/**/*.scss'], gulp.series('css:rebuild'));
    gulp.watch(['./src/js/**/*.js'], gulp.series('js:rebuild'));
});

gulp.task('css:rebuild', gulp.series('scss:build', 'css:build', 'css:minify'));
gulp.task('js:rebuild', gulp.series('js:build', 'js:minify'));
gulp.task('src:rebuild', gulp.series('js:rebuild', 'css:rebuild'));
gulp.task('src:release', gulp.series('src:rebuild', 'zip:build'));