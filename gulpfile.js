var gulp      = require('gulp');
var sass      = require('gulp-sass');
var cssNext   = require('gulp-cssnext');
var webserver = require('gulp-webserver');


gulp.task('sass', function() {
    return gulp.src('./scss/*.scss')
               .pipe(sass({outputStyle: 'expanded'}))
               .pipe(gulp.dest('./app/css'))
});

gulp.task('webserver', function() {
    return gulp.src('./app')
               .pipe(webserver());
});

gulp.task('watch', ['sass'], function() {
    return gulp.watch('./scss/*.scss', ['sass']);
});

gulp.task('default', ['webserver', 'sass']);
