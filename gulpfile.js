var gulp = require('gulp');
var watch = require('gulp-watch');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var sass = require('gulp-sass')(require('sass'));
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var args    = require('yargs').argv;
var fs      = require('fs');
var uglify = require('gulp-uglify');
var webserver = require('gulp-webserver');
var notify = require("gulp-notify");

var paths = {
  sass:   ['./scss/**/*.scss'],
  js:     ['./javascripts/**/*.js']
};

gulp.task('concatJs', function(done){
  gulp.src(paths.js)
  .pipe(concat('js.js'))
  .pipe(gulp.dest('./tmp/'))
  .on('end', done);
});

gulp.task('javascripts', gulp.parallel('concatJs', function(done){
  gulp.src(['./tmp/js.js'])
  .pipe(uglify())
  .pipe(concat('application.js'))
  .pipe(gulp.dest('./www/js/'))
  .on('end', done)
  .pipe(notify('Compile Javascripts'));
}));

gulp.task('sass', function(done) {
  gulp.src('./scss/application.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done)
    .pipe(notify('Compile Sass'));
});

gulp.task('watch', function() {
  watch(paths.sass, function(){
    gulp.series('sass');
  });

  watch(paths.js, function(){
    gulp.series('javascripts');
  });

  watch(paths.sass, gulp.parallel('sass'));
  watch(paths.js, gulp.parallel('javascripts'));
});

gulp.task('server', function() {
  var PORT   = args.port || 8000;
  gulp.src('www/')
    .pipe(webserver({
      livereload: false,
      directoryListing: false,
      open: false,
      port: PORT
    }))
    .pipe(notify("Server started on http://localhost:"+PORT))
    ;
});

gulp.task('default', gulp.parallel('sass', 'javascripts', 'server', 'watch'));

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
