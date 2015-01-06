"use strict";

var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	cssshrink = require('gulp-cssshrink'),
	imagemin = require('gulp-imagemin'),
	imageop = require('gulp-image-optimization'),
	uncss = require('gulp-uncss'),
	concatCss = require('gulp-concat-css'),
	minifyHTML = require('gulp-minify-html');

// JS Task
// Uglifies JS

gulp.task('uglify-js', function(){
	gulp.src('views/js/main.js') // Load the files
	.pipe(uglify()) // Minify them
	.pipe(gulp.dest('views/minjs')) // Save them into minjs
});

// CompressCSS Task
// Uglifies CSS

gulp.task('compressCSS', function() {
    gulp.src('views/css/**/*.css')
        .pipe(cssshrink())
        .pipe(gulp.dest('views/mincss'));
});

// Image Task
// Compress

gulp.task('image', function () {
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('minimg'));
});

gulp.task('images', function(cb) {
    gulp.src(['**/*.png','**/*.jpg','**/*.gif','**/*.jpeg']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('minimgs')).on('end', cb).on('error', cb);
});

// Watch Task
// Watches JS
gulp.task('watch', function() {
	gulp.watch('**/*.js', ['scripts']);
});

// CSS Task
// Removes unused CSS and minifies it

gulp.task('css', function() {
    gulp.src('views/build/styles/bundle.css')
        .pipe(uncss({
            html: ['views/pizza.html']
        }))
        .pipe(cssshrink())
        .pipe(gulp.dest('views/mincss'));
});

// CSS concat Task
// Concats css files

gulp.task('concatcss', function () {
  gulp.src('views/css/*.css')
    .pipe(concatCss("styles/bundle.css"))
    .pipe(gulp.dest('views/build'));
});

// Minify HTML Task
// Minifies HTML
gulp.task('minify-html', function() {
    var opts = {comments:true,spare:true};

  gulp.src('*.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('*.min.html'))
});
