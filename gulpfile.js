var
	gulp           = require('gulp'),
	postcss        = require('gulp-postcss'),
  vars           = require('postcss-simple-vars')
	postcss        = require('gulp-postcss');
  concat         = require('gulp-concat');
	fs             = require("fs")
	url            = require("postcss-url")
	sourcemaps     = require('gulp-sourcemaps');
	autoprefixer   = require('autoprefixer');
	atImport       = require("postcss-import")
	processors     = [
									 require('postcss-mixins'),
									 require('postcss-simple-vars'),
									 require('postcss-nested'),
									 require('autoprefixer')({ browsers: ['last 2 versions', '> 2%'] })
	];

// Watch task
gulp.task('watch', function(){
  gulp.watch('./postcss/**/*.css', ['css']);
});

// Compile task
gulp.task('css', function () {
    return gulp.src('./postcss/*.css')
        .pipe(sourcemaps.init())
	      .pipe(postcss(processors))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./bundle/stylescss/'));
});


gulp.task('default', ["css", "watch"]);
