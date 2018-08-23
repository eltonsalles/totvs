var gulp = require('gulp'),
    clean = require('gulp-clean'),
    uglify = require('gulp-uglify'),
    usemin = require('gulp-usemin'),
    cssmin = require('gulp-cssmin'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    csslint = require('gulp-csslint'),
    jshint = require('gulp-jshint');

gulp.task('default', ['copy'], function() {
    gulp.start('usemin', 'deleteFiles');
});

gulp.task('deleteFiles', function () {
    return gulp.src([
        'dist/css/called.css',
        'dist/css/print.css',
        'dist/js/libs/jquery.min.js',
        'dist/js/google-charts.js',
        'dist/js/main.js',
        'dist/js/modal.js',
        'dist/js/zing-charts.js',
    ])
        .pipe(clean());
});

gulp.task('copy', ['clean'], function() {
    return gulp.src('src/**/*')
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', function() {
    return gulp.src('dist')
        .pipe(clean());
});

gulp.task('usemin', function() {
  return gulp.src('dist/**/*.html')
    .pipe(usemin({
      js: [uglify().on('error', function(e){
          console.log(e);
      })],
      css: [autoprefixer, cssmin]
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: 'src'
        }
    });

    gulp.watch('src/**/*').on('change', browserSync.reload);

    gulp.watch('src/js/**/*.js').on('change', function(event) {
        console.log("#################### Linting " + event.path + ' ####################');
        gulp.src(event.path)
            .pipe(jshint())
            .pipe(jshint.reporter('default'));
    });

    gulp.watch('src/css/**/*.css').on('change', function(event) {
        console.log("#################### Linting " + event.path + " ####################");
        gulp.src(event.path)
            .pipe(csslint())
            .pipe(csslint.formatter());
    });
});