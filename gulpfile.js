var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    htmlReplace = require('gulp-html-replace'),
    uglify = require('gulp-uglify'),
    usemin = require('gulp-usemin'),
    cssmin = require('gulp-cssmin'),
    browserSync = require('browser-sync');

gulp.task('default', ['copy'], function() {
    gulp.start('usemin');
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
      css: [cssmin]
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
});