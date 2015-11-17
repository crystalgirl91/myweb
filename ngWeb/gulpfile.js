var gulp = require("gulp");
var jshint = require("gulp-jshint");
gulp.task("script", function(){
	return gulp.src("public/js/*.js")
		.pipe(jshint())
})
gulp.task("default",["script"]);