var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var serve = require('gulp-server-livereload');

// gulp.task('serve', function() {
//     gulp.src('.')
//     	.pipe(serve({
//     		livereload: true,
//     		directoryListing: false,
//     		open: true,
//     	}));
// });

gulp.task('browser-sync', function () {

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("styles/*.css").on("change", browserSync.reload);
    gulp.watch("*.html").on("change", browserSync.reload);
    gulp.watch("pages/*.html").on("change", browserSync.reload);
    gulp.watch("scripts/*.js").on("change", browserSync.reload);
});
