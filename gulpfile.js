var
	gulp = require('gulp'),
	postcss = require('gulp-postcss'),
  vars   = require('postcss-simple-vars')
  concat = require('gulp-concat');
	autoprefixer = require('autoprefixer');
	processors = [
		require('postcss-mixins'),
		require('postcss-simple-vars'),
		require('postcss-nested'),
		require('autoprefixer')({ browsers: ['last 2 versions', '> 2%'] })
	];

// Watch task
gulp.task('watch', function(){
  gulp.watch('./postcss/**/*.css', ['css']);
});

// compile CSS
gulp.task('css', function () {
   return gulp.src('./postcss/**/*.css')
      // .pipe(postcss([ vars({ variables: colors }) ]))
      .pipe(postcss(processors))
      .pipe(gulp.dest('./bundle/stylescss/'));
});

gulp.task('default', ["css", 'watch']);
