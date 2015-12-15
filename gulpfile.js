var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');

gulp.task('default', function() {
   gulp.src(['script/app.js', 'script/controllers.js'])
    .pipe(concat('card.js'))
	.pipe(uglify())
	.pipe(rename('card.min.js'))
	.pipe(gulp.dest('build/script'));
   gulp.src('img/*.*')
	.pipe(gulp.dest('build/img'));
   gulp.src('partial/*.*')
	.pipe(gulp.dest('build/partial'));
   gulp.src('css/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('build/css'));
});