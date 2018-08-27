var gulp = require('gulp'),
    clean = require('gulp-clean'),
    uglify = require('gulp-uglify'),
    usemin = require('gulp-usemin'),
    cssmin = require('gulp-cssmin'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    csslint = require('gulp-csslint'),
    jshint = require('gulp-jshint'),
    sass = require('gulp-sass');

// Tarefa default que antes de chamar usemin e deleteFiles espera a tarefa copy
gulp.task('default', ['copy'], function() {
    gulp.start('usemin', 'deleteFiles');
});

// Deleta os arquivos que não são mais necessários na pasta dist
gulp.task('deleteFiles', function () {
    return gulp.src([
        'dist/css/called.css',
        'dist/css/print.css',
        'dist/sass',
        'dist/js/libs/jquery.min.js',
        'dist/js/google-charts.js',
        'dist/js/main.js',
        'dist/js/modal.js',
        'dist/js/zing-charts.js',
    ])
        .pipe(clean());
});

// Tarefa para copiar de src para dist depois que a pasta dist for apagada
gulp.task('copy', ['clean', 'sassProd'], function() {
    return gulp.src('src/**/*')
        .pipe(gulp.dest('dist'));
});

// Tarefa para apagar a pasta dist
gulp.task('clean', function() {
    return gulp.src('dist')
        .pipe(clean());
});

// Tarefa para trasnformar Sass em CSS (Produção)
gulp.task('sassProd', function () {
    return gulp.src('src/sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('src/css'));
});

// Tarefa para preparar os arquivos para produção.
// O usemin concatena os arquivos
// O uglify minifica os js
// O autoprefixer coloca os prefixos nas propriedades para dar suporte a navegadores antigos
// O cssmin minifica o css
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

// Tarefa que levanta um servidor para desenvolvimento
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: 'src'
        }
    });

    // Faz reload no browser automaticamente a cada alteração nos arquivos na pasta src
    gulp.watch('src/**/*').on('change', browserSync.reload);

    // Faz uma validação do js
    gulp.watch('src/js/**/*.js').on('change', function(event) {
        console.log("#################### JS " + event.path + ' ####################');
        gulp.src(event.path)
            .pipe(jshint())
            .pipe(jshint.reporter('default'));
    });

    // Transforma Sass em CSS
    gulp.watch('src/sass/**/*.scss').on('change', function (event) {
        console.log("#################### SASS " + event.path + " ####################");
        gulp.src(event.path)
            .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
            .pipe(gulp.dest('src/css'));
    });

    // Faz uma validação no css
    gulp.watch('src/css/**/*.css').on('change', function(event) {
        console.log("#################### CSS " + event.path + " ####################");
        gulp.src(event.path)
            .pipe(csslint())
            .pipe(csslint.formatter());
    });
});