var gulp = require('gulp'),
    clean = require('gulp-clean'),
    uglify = require('gulp-uglify'),
    usemin = require('gulp-usemin'),
    cssmin = require('gulp-cssmin'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    csslint = require('gulp-csslint'),
    jshint = require('gulp-jshint'),
    sass = require('gulp-sass'),
    babel = require('gulp-babel');

// Tarefa default que chama as tarefa prod e deleteFiles depois que a tarefa copy terminar
gulp.task('default', ['copy'], function() {
    gulp.start('prod', 'deleteFiles');
});

// Deleta os arquivos que não são mais necessários na pasta dist
gulp.task('deleteFiles', function () {
    return gulp.src([
        'dist/css/called.css',
        'dist/css/print.css',
        'dist/sass',
        'dist/js/ecmas6',
        'dist/js/libs/jquery.min.js',
        'dist/js/google-charts.js',
        'dist/js/main.js',
        'dist/js/modal.js',
        'dist/js/zing-charts.js',
    ])
        .pipe(clean());
});

// Copia de src para dist depois que a pasta dist (antiga) for apagada
gulp.task('copy', ['clean', 'sassProd', 'transpilerJs'], function() {
    return gulp.src('src/**/*')
        .pipe(gulp.dest('dist'));
});

// Apaga a pasta dist (antiga)
gulp.task('clean', function() {
    return gulp.src('dist')
        .pipe(clean());
});

// Trasnforma Sass em CSS (minificado)
gulp.task('sassProd', function () {
    return gulp.src('src/css/sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('src/css'));
});

// Converte o js ecmas6 para ecmas5
gulp.task('transpilerJs', function () {
    return gulp.src('src/js/ecmas6/**/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('src/js'));
});

// Tarefa para preparar os arquivos para produção.
// O usemin concatena os arquivos (conforme o comentário no html)
// O uglify minifica os js
// O autoprefixer coloca os prefixos nas propriedades para dar suporte a navegadores antigos
// O cssmin minifica o css
gulp.task('prod', function() {
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
    gulp.watch('src/js/ecmas6/**/*.js').on('change', function(event) {
        console.log("#################### JS " + event.path + ' ####################');
        gulp.src(event.path)
            .pipe(jshint({
                esversion: 6
            }))
            .pipe(jshint.reporter('default'));
    });

    // Transforma Sass em CSS
    gulp.watch('src/css/sass/**/*.scss').on('change', function (event) {
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