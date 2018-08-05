/**
 * Gulpfile for File Icon Vectors
 *
 * @author Daniel M. Hendricks
 * @license MIT
 * {@link https://github.com/dmhendricks/file-icon-vectors GitHub repository}
 */

var pkg           = require( './package.json' );
var gulp          = require( 'gulp' );
var rename        = require( 'gulp-rename' );
var minifycss     = require( 'gulp-uglifycss' );
var imagemin      = require( 'gulp-imagemin' );
var sass          = require( 'gulp-sass' );
var autoprefixer  = require( 'gulp-autoprefixer' );
var cache         = require( 'gulp-cache' );
var lineec        = require( 'gulp-line-ending-corrector' );
var filter        = require( 'gulp-filter' );
var notify        = require( 'gulp-notify' );

const AUTOPREFIXER_BROWSERS = [ 'last 2 version', '> 1%', 'ie >= 9', 'ie_mob >= 10', 'ff >= 30', 'chrome >= 34', 'safari >= 7', 'opera >= 23', 'ios >= 7', 'android >= 4', 'bb >= 10' ];

gulp.task( 'styles', function() {
	return gulp
		.src( [ './src/scss/*.scss', '!./src/scss/_*.scss' ] )
		.pipe(
			sass({
				errLogToConsole: true,
				outputStyle: 'expanded',
				precision: 10
			})
		)
		.on( 'error', sass.logError )
		.pipe( autoprefixer( AUTOPREFIXER_BROWSERS ) )
		.pipe( lineec() )
		.pipe( gulp.dest( './dist' ) )
		.pipe( filter( '**/*.css' ) )
		.pipe( rename( { suffix: '.min' } ) )
		.pipe( minifycss( { maxLineLen: 10 } ) )
		.pipe( lineec() )
		.pipe( gulp.dest( './dist' ) )
		.pipe( notify({ message: 'TASK: "styles" completed', onLast: true }) );
});

gulp.task( 'svgmin', function() {
	return gulp
		.src( './dist/icons/**/*.svg' )
		.pipe(
			cache(
				imagemin([
					imagemin.svgo({
						plugins: [ { removeViewBox: true }, { cleanupIDs: true } ]
					})
				])
			)
		)
		.pipe( gulp.dest( './dist/icons' ) )
		.pipe( notify({ message: 'TASK: "svgmin" completed.', onLast: true }) );
});

gulp.task(
	'default',
	gulp.parallel(
		'styles',
		function watchFiles() {
			gulp.watch( './assets/css/**/*.scss', gulp.parallel( 'styles' ) );
		}
	)
);
