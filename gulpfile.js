let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let rename = require('gulp-rename');
let sass = require('gulp-sass');
let watch = require('gulp-watch'); 
let gulpSequence = require('gulp-sequence');
let concat = require('gulp-concat');
let uglify = require('gulp-uglify-es').default;


gulp.task('sass', function () {
    var stream = gulp.src('./scss/styles.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/css/'))
        .pipe(rename('styles.css'));
    return stream;
});

gulp.task('minify-css', () => {
  return gulp.src('public/css/styles.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('styles', function(callback){
    gulpSequence('sass', 'minify-css')(callback)
});


gulp.task('concat-js', function() {
  return gulp.src(["./js/jquery-3.2.1.slim.js", "./js/popper.js", "./js/bootstrap.js", "./js/contact.js"])

    .pipe(concat('all.js'))
    .pipe(gulp.dest('./js/'));
});

gulp.task('uglify', function () {
    return gulp.src("./js/all.js")
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest("./js/"));
});

gulp.task('js-style', function(callback){
    gulpSequence('concat-js', 'uglify')(callback)
})


gulp.task('watch', function () {

	//gulp.watch(['./js/jquery-3.2.1.slim.js', './js/popper.js', './js/bootstrap.js', "./js/contact.js"], ['js-style'])
	// gulp.watch('./js/all.js', ['uglify']);
	gulp.watch('./scss/*.scss', ['styles']);

});