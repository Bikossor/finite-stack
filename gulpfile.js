var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var header = require('gulp-header');
var pump = require('pump');

var fileName = "finite-stack";
var folderDestination = "dist/";
var package = require('./package.json');
var headerString = ['/*',
	'<%= pkg.name %> v<%= pkg.version %> (<%= pkg.license %>) |',
	'<%= pkg.author %> |',
	'<%= pkg.homepage %>',
	'*/\n'
].join(' ');

gulp.task("build-js", function (callback) {
	pump([
		gulp.src("dist/finite-stack.js"),
		uglify(),
		concat(fileName + ".min.js"),
		header(headerString, {
			pkg: package
		}),
		gulp.dest(folderDestination)
	], callback);
});

gulp.task("default",
	gulp.series("build-js")
);