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
    gulp.start('prod');
});

// Deleta os arquivos que não são mais necessários na pasta dist
gulp.task('deleteFiles', ['transpilerJs'], function () {
    return gulp.src([
        'dist/assets/css/confirmacao.css',
        'dist/assets/css/escrita-codigo-barras.css',
        'dist/assets/css/geral.css',
        'dist/assets/css/index.css',
        'dist/assets/css/leitura-codigo-barras.css',
        'dist/assets/css/lista-pallets.css',
        'dist/assets/css/login.css',
        'dist/assets/css/validacao.css',
        'dist/assets/js/escrita-codigo-barras.js',
        'dist/assets/js/form-label.js',
        'dist/assets/js/index.js',
        'dist/assets/js/leitura-codigo-barras.js',
        'dist/assets/js/lista-pallets.js',
        'dist/assets/js/login.js',
        'dist/assets/js/validacao.js',
    ])
        .pipe(clean());
});

// Copia de src para dist depois que a pasta dist (antiga) for apagada
gulp.task('copy', ['clean'], function() {
    return gulp.src('src/**/*')
        .pipe(gulp.dest('dist'));
});

// Apaga a pasta dist (antiga)
gulp.task('clean', function() {
    return gulp.src('dist')
        .pipe(clean());
});

// Converte o js ecmas6 para ecmas5
gulp.task('transpilerJs', function () {
    return gulp.src('dist/assets/js/*.min.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/assets/js'));
});

// Tarefa para preparar os arquivos para produção.
// O usemin concatena os arquivos (conforme o comentário no html)
// O uglify minifica os js
// O autoprefixer coloca os prefixos nas propriedades para dar suporte a navegadores antigos
// O cssmin minifica o css
gulp.task('prod', function() {
  return gulp.src('dist/**/*.html')
    .pipe(usemin({
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