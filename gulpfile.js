// var gulp = require('gulp');
// var stylus = require('gulp-stylus');
// var autoprefixer = require('gulp-autoprefixer');
// var rename = require('gulp-rename');
// var runSequence = require('run-sequence');
// var gutil = require('gulp-util');

// //Stylus compile, autoprefix & rename
// gulp.task('stylus', function () {
//   return gulp.src('./_stylus/_main.styl')
//     .pipe(stylus({
//       compress: true
//     }))
//     .on('error', errorHandler('stylus error'))
//     .pipe(autoprefixer({
//         browsers: ['last 2 versions'],
//         cascade: false
//     }))
//     .pipe(rename(function (path) {
//         path.basename = "main";
//       }))
//     .pipe(gulp.dest('./assets/css'));
// });


// //Watching on stylus files
// gulp.task('watch', function(){
//   gulp.watch('./_stylus/**/*.styl', ['stylus']);
// })

// //Default task
// gulp.task('default', function (callback) {
//   runSequence(['stylus', 'watch'],
//     callback
//   )
// })

// var errorHandler = function (title) {
//   return function(err) {
//     gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
//     this.emit('end');
//   };
// };

"use strict";

var gulp = require("gulp"),
    concat = require("gulp-concat"),
    stylus = require("gulp-stylus"),
    sourcemaps = require("gulp-sourcemaps"),
    del = require("del"),
    gutil = require("gulp-util"),
    autoprefixer = require("gulp-autoprefixer"),
    browserSync = require("browser-sync").create(),
    runSequence = require("run-sequence"),
    cp = require("child_process"),
    ghPages = require("gulp-gh-pages");


// Paths
var basePaths = {
  src: 'src/',
  dest: 'dist/'
};

var paths = {
  images: {
    src: basePaths.src + 'assets/img/',
    dest: basePaths.dest + 'assets/img/'
  },
  js: {
    src: basePaths.src + '_js/',
    dest: basePaths.dest + 'assets/js/'
  },
  styles: {
    src: basePaths.src + '_stylus/',
    dest: basePaths.dest + 'assets/css/'
  },
  html: {
    src: basePaths.src + '',
    dest: basePaths.dest + ''
  }
};


var errorHandler = function (title) {
  return function(err) {
    gutil.log(gutil.colors.red("[" + title + "]"), err.toString());
    this.emit("end");
  };
};


//Stylus compile, autoprefix & rename
gulp.task("build:stylus", function(){
    return gulp.src(paths.styles.src + "main.styl")
        .pipe(sourcemaps.init())
        .pipe(stylus({
          compress: true
        }))
        .on("error", errorHandler("stylus error"))
        .pipe(autoprefixer({
            browsers: ["last 2 versions"],
            cascade: false }))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browserSync.stream())
        .on("error", gutil.log);
})


// JS
gulp.task("build:scripts", function () {
    return gulp.src([
                    paths.js.src + "main.js",
                    paths.js.src + "second.js"
                    ])
        .pipe(sourcemaps.init())
        .pipe(concat("main.js"))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest(paths.js.dest))
});



// Special tasks for building and then reloading BrowserSync
gulp.task("build:jekyll:watch", ["build:jekyll"], function(cb) {
  browserSync.reload();
  cb();
});

gulp.task("build:scripts:watch", ["build:scripts"], function(cb) {
  browserSync.reload();
  cb();
});
//--


gulp.task("build:jekyll", function (done) {
    return cp.spawn("jekyll", ["build"], {stdio: "inherit"})
             .on("error", gutil.log)
             .on("close", done);
});


gulp.task("build", function(cb) {
    runSequence(
        "clean", ["build:scripts", "build:stylus"],
        "build:jekyll",
        cb);
});

gulp.task("clean", function(){
    return del("dist");
})


gulp.task("default", ["build"], function() {

    browserSync.init({
        server: basePaths.dest,
        ogFileChanges: true
    });

  // Watch site settings
  gulp.watch(["_config.yml"], ["build:jekyll:watch"]);

  // Watch app stylus files, changes are piped to browserSync
  gulp.watch(paths.styles.src + "**/*.styl", ["build:stylus"]);

  // // Watch app .js files
  gulp.watch(paths.js.src + "**/*.js", ["build:scripts:watch"]);

  // Watch Jekyll posts
  gulp.watch(basePaths.src + "_posts/**/*.+(md|markdown|MD)", ["build:jekyll:watch"]);

  // Watch Jekyll html files
  gulp.watch(paths.html.src + "**/*.html", ["build:jekyll:watch"]);

});


gulp.task("deploy", function() {
  return gulp.src(basePaths.dest + "**/*")
    .pipe(ghPages());
});

































