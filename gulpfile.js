var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
 
gulp.task('sass', function () {
    return sass('css/') 
    .on('error', function (err) {
      console.error('Error!', err.message);
   })
    .pipe(gulp.dest('result/css/'));
});
gulp.task('watch',function(){
	gulp.watch('css/*.scss', ['sass'])
})
gulp.task("default",["sass","watch"])