var gulp = require('gulp');
var uglify = require('gulp-uglify');
var del = require('del');
var cssmin = require('gulp-minify-css');
var htmlmin = require('gulp-htmlmin');
var pages = require('gulp-gh-pages');
var karma = require('gulp-karma');


var paths = {
  scripts: ['client/js/**/*.coffee', '!client/external/**/*.coffee'],
  images: 'client/img/**/*'
};

// Not all tasks need to use streams
// A gulpfile is just another node program and you can use any package available on npm
gulp.task('clean', function() {
  // You can use multiple globbing patterns as you would with `gulp.src`
  return del(['minified/**']);
});



gulp.task('minify', function() {
  gulp.src('*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('minified'));

  gulp.src('assets/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('minified'));

  gulp.src('assets/css/*.css')
    .pipe(cssmin())
    .pipe(gulp.dest('minified'))

});

gulp.task('test', function() {
    return gulp.src([])
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
    throw err;
    });
});
