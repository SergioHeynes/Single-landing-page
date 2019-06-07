const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');

// File paths
const paths = {
    styles: {
      src: './app/assets/styles/**/*.scss',
      dest: './app/temp/styles/'
    },
    scripts: {
      src: './app/assets/scripts/**/*.js',
      dest: './app/temp/scripts/'
    }
  };



// Styles
function styles(done) {
    console.log('Starting styles task');
    return gulp.src(paths.styles.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
    done();
    }

// Scripts
function scripts(done) {
    console.log('Starting scripts task');
    done();
}

function watch() {
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    });

    gulp.watch(paths.scripts.src, scripts).on('change', browserSync.reload);
    gulp.watch(paths.styles.src, styles);
    gulp.watch('./app/*.html').on('change', browserSync.reload);
  }


exports.watch = watch;
exports.styles = styles;
