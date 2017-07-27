var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

var conf = {
    modules: 'node_modules',
    src: './src',
    dist: './dist',
    assets: './src/assets',
    css: './src/assets/css',
    js: './src/assets/js',
    fonts: './src/assets/fonts',
    sass: './src/assets/sass',
    lib: {
        materialize: '/materialize-css'
    }
};


gulp.task('materialize-fonts', () => {
    return gulp.src(conf.modules + conf.lib.materialize + '/dist/fonts/**')
                .pipe(gulp.dest(conf.fonts));
});

gulp.task('materialize-js', () => {
    return gulp.src(conf.modules + conf.lib.materialize + '/dist/js/*.min.js')
                .pipe(gulp.dest(conf.js));
});

gulp.task('materialize-sass', () => {
    return gulp.src(conf.modules + conf.lib.materialize + '/sass/**')
                .pipe(gulp.dest(conf.assets + '/sass'));
});

gulp.task('sass', ['materialize'], () => {
    return gulp.src(conf.sass + '/**/*.scss')
                .pipe(sass().on('error', sass.logError))
                .pipe(cleanCSS())
                .pipe(rename({
                    suffix: '.min'
                }))
                .pipe(gulp.dest(conf.css));
});

gulp.task('sass:watch', function() {
    return gulp.watch(conf.sass + '/**/*.scss', ['sass']);
});

gulp.task('materialize', ['materialize-fonts', 'materialize-js', 'materialize-sass']);
gulp.task('default', ['materialize', 'sass']);
