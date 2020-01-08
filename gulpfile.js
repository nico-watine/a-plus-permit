var gulp = require('gulp');
var uncss = require('gulp-uncss');
var nano = require('gulp-cssnano');

gulp.task('default', function () {
	return gulp.src('css/style.css')
		.pipe(uncss({
			ignore: ['.reveal-modal-bg'],
			html: ['http://nicos-mbp.local:5757/']
		}))
		.pipe(nano())
		.pipe(gulp.dest('./css/opt'));
});
