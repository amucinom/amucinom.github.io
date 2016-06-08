var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("styles/sass/*.scss", ['sass']).on('change', browserSync.reload);
    // gulp.watch("styles/*.css").on("change", browserSync.reload);
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("portfolio/*.html").on('change', browserSync.reload);
    gulp.watch("scripts/*.js").on('change', browserSync.reload);
});

gulp.task('sass', function() {
    return gulp.src('styles/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./styles/css/'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
