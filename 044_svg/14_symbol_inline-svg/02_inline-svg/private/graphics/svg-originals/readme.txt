Store your original svg files in a folder.


--------
http://fvsch.com/code/svg-icons/how-to/
--------


Then if you need to rebuild the icons.svg or change an individual icon, you have the right sources to work with. Be careful to not let your sprite and your source folder get out of sync.

Of course if you use a build process (with Grunt or Gulp or something else), you can feed it your source folder and let it build the sprite directly.

Tool that automates the process:
gulp-svg-sprite

Here’s an example gulpfile.js

// ------------------------
// Build SVG symbol sprites
// ------------------------
// Each directory matching assets/icons/sprite-* may contain individual SVG files,
// and will be turned into a SVG symbol spritesheet.

var gulp = require('gulp');
var path = require('path');
var svgSprite = require('gulp-svg-sprite');

gulp.task('build-svg', function() {
    var svgDest = 'public/sprite';

    return glob('assets/icons/sprite-*', function(err, dirs) {
        dirs.forEach(function(dir) {
            gulp.src( path.join(dir, '*.svg') )
                .pipe( svgSprite(makeSvgSpriteOptions(dir)) )
                .pipe( size({ showFiles: true, title: svgDest }) )
                .pipe( gulp.dest(svgDest) )
        })
    });

    /**
     * Make a svg-sprite configuration object for a symbol sprite with a custom file name
     */
    function makeSvgSpriteOptions(dirPath) {
        return {
            mode: {
                symbol: {
                    dest: '.',
                    sprite: path.basename(dirPath).replace('sprite-', '') + '.svg';
                }
            },
            shape: {
                id: {separator: '-'},
                transform: ['svgo']
            }
        };
    }
});