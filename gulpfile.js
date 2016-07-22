var gulp = require('gulp');

// babel
// (src.*)为文件名之前的完整路径
var matchRex = /(src.*)\/.*\.(\w+)/;
var babel = require('gulp-babel');
var babelTask = (e) => {

    var match = e.path.replace(/\\/g, '/').match( matchRex ),
        file, filePath;

    if(match.length) {

        file = match[0];   // src/dataRow.jsx
        filePath = match[1];

        gulp.src( file )
        .pipe( babel( { 
            presets: ['es2015']
        } ).on('error', (e) => {
            console.error('error', e.message);
        }) )
        .pipe(gulp.dest( filePath ));
    }
};

gulp.task('watch', function() {
    // babel & jsx
    gulp.watch(['src/**/*.jsx', 'src/**/*.es6']).on('change', (event) => {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...[babel]');
        babelTask(event);
    });
});

gulp.task('default', ['watch']);