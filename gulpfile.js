// IMPORTS
import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import dartSass from 'sass';
import htmlmin from 'gulp-htmlmin';
import uglify from 'gulp-uglify';
import cleanCss from 'gulp-clean-css';

const sass = gulpSass(dartSass);

// PATHS => (SRC) ORIGEM / (DIST) DESTINO
const paths = {
    html: {
        src: 'src/index.html',
        dist: 'dist/'
    },
    styles: {
        src: 'src/scss/**/*.scss', 
        dist: 'dist/css'
    },
    js: {
        src: 'src/js/**/*.js',
        dist: 'dist/js'
    }
};

const html = () => {
    return gulp.src(paths.html.src)
        .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
        .pipe(gulp.dest(paths.html.dist));
};


const css = () => {
    return gulp.src(paths.styles.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCss())
        .pipe(gulp.dest(paths.styles.dist));
};

const js = () => {
    return gulp.src(paths.js.src)
        .pipe(uglify())
        .pipe(gulp.dest(paths.js.dist));
};

const watch = () => {
    gulp.watch(paths.html.src, html);
    gulp.watch(paths.styles.src, css);
    gulp.watch(paths.js.src, js);
};


const build = gulp.parallel(html, css, js);

// EXPORTS
export { watch };
export default build;