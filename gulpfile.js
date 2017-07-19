var gulp = require('gulp'),
    usemin = require('gulp-usemin'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css'),
    minifyHtml = require('gulp-minify-html'),
    rev = require('gulp-rev'),
    clean = require('gulp-clean');

gulp.task('default', function() {
    gulp.src('app/images/*.*')
   		.pipe(gulp.dest('dist/images/'));
   	gulp.src('app/php/*.*')
   		.pipe(gulp.dest('dist/php/'));
   	gulp.src('app/partials/*.*')
   		.pipe(gulp.dest('dist/partials/'));
    gulp.src('app/index.html')
        .pipe(usemin({
      		css: [ rev() ],
      		html: [ minifyHtml({ empty: true }) ],
      		js: [ uglify(), rev() ],
      		inlinejs: [ uglify() ],
      		inlinecss: [ cleanCSS({compatibility: 'ie8'}), 'concat' ]
    	}))
    	.pipe(gulp.dest('dist/'));
});
gulp.task('clean', function() {
  return gulp.src('dist/', {read: false}).pipe(clean());
});