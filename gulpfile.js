var gulp = require('gulp'),
    uglify = require('gulp-uglify');

gulp.task('default', function () {
    gulp.src('app/js/app.js')
        .pipe(uglify())
        .pipe(gulp.dest('app/js/minjs.js'));
});
