var gulp          = require('gulp');
var plugins       = require('gulp-load-plugins')();
var coffee        = require('gulp-coffee');
var requireDir    = require('require-dir');
var runSequence   = require('run-sequence');

gulp.task("clean", function() {
  gulp.src("./lib", { read: false })
    .pipe(plugins.clean({force: true}));
});

gulp.task("javascripts", function() {
  gulp.src("src/breakpoint-manager.coffee")
    .pipe(plugins.plumber())
    .pipe(coffee({bare:true}))
    .pipe(plugins.rename("breakpoint-manager.js"))
    .pipe(gulp.dest("lib"));
});

gulp.task("build", function() {
  runSequence("clean", "javascripts");
});