# Setup
`Index.html` is using PostCSS and the Index2.html file is using SASS. Both `index.html` files are identical just use different stylesheets.

# CSS Setup
There's two seperate directories; PostCSS and SASS. Within these files we'll have main.css and main.scss then the bundle files that they bundle down into.

# Gulp
We'll need to use a build tool to compile our stylesheets down and i've chosen to opt for gulp (just personal preference).
There's two build tasks, `css` and `sass` which you'll find at the bottom of the gulpfile, `gulp.task('default', ["css", 'sass']);`
Once you've cloned the repo, cd into the directory and run either `gulp css` or `gulp sass` then open the index file which you want to view.
