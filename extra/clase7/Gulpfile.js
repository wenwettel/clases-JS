// require me trae un paquete que me instale o un archivo javascript
const gulp = require('gulp');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const concat = require('gulp-concat');

gulp.task('sass', function crearSass() {
  return gulp.src('./sass/*.scss')
    .pipe(sass())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch:solocss', function solocss() {
  gulp.watch('./sass/*.scss', gulp.series('sass'));  // If a file changes, re-run 'sass'
});


// Manera 1

gulp.task('minify', function minificar() {
  return gulp.src('./css/styles.css')
    .pipe(cssnano())
    .pipe(gulp.dest('./css'));
})

gulp.task('watch:cssMasMin', function cssMasMin() {
  gulp.watch('./sass/*.scss', gulp.series(['sass', 'minify']));
})

//Manera 2

function minificar2(){
  return gulp.src('./css/styles.css')
    .pipe(cssnano())
    .pipe(gulp.dest('./css'));
}

gulp.task('minify2', gulp.series(['sass' , minificar2]));

gulp.task('watch:cssMasMinV2', function cssMasMinV2(){
  gulp.watch('./sass/*.scss', gulp.series('minify2'));
})