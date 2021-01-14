const gulp = require('gulp'); 
const imagemin = require('gulp-imagemin'); 
const uglify = require('gulp-uglify'); 
const sass = require('gulp-sass')
const clean = require('gulp-clean'); 
const concat = require('gulp-concat'); 

//Logs Message asdfas another one dj  222

gulp.task('message', async () => {
    return console.log('Gulp is running...,'); 
}); 


gulp.task('copyHTML', async () => {
    gulp.src('src/*.html')
    .pipe(gulp.dest('dist')); 
}); 


gulp.task('imageMin', async () => {
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
}); 


gulp.task('minify', async () => {
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
}); 

gulp.task('sass', async () => {
    gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'))
}); 

gulp.task('clean', async () => {
    gulp.src('dist/*', {read: false})
        .pipe(clean())
}); 

gulp.task('scripts', async () => {
    gulp.src('src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js')); 
}); 

/*
gulp.task('default', async () =>{
    return console.log('Gulp is running...,'); 
}); */

gulp.task('default', gulp.parallel('message', 'copyHTML', 'imageMin', 'sass', 'scripts')); 