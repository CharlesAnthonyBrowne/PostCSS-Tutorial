var
	gulp = require('gulp'),
	postcss = require('gulp-postcss'),
  vars   = require('postcss-simple-vars')
	processors = [
		require('postcss-mixins'),
		require('postcss-simple-vars'),
		require('postcss-nested'),
		require('autoprefixer-core')({ browsers: ['last 2 versions', '> 2%'] })
	];

  // compile CSS
  gulp.task('css', function () {
     return gulp.src('./postcss/**/*.css')
        // .pipe(postcss([ vars({ variables: colors }) ]))
        .pipe(postcss([ require('postcss-simple-vars')({ silent: true }) ]))
        .pipe(gulp.dest('./bundle/stylescss/main.css'));
});

  // gulp.task('css', function() {
  //   return gulp.src('postcss/**/*.css')
  //     .pipe(postcss(processors))
  //     .pipe(gulp.dest('./bundle/stylescss/'));
  // });

  gulp.task('sass', function() {
      gulp.src('sass/**/*.scss')
          .pipe(sass().on('error', sass.logError))
          .pipe(gulp.dest('./bundle/stylescss'));
  });

gulp.task('default', ["css", 'sass']);
