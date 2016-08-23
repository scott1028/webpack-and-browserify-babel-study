var gulp = require('gulp');
var webpack = require('webpack-stream');

gulp.task('recompile', function(){
    console.log('Run recompile!');
    gulp.src('app/index.html').pipe(gulp.dest('./dist'));
    return;
});

gulp.task('watch', function(){
    gulp.watch(['app/index.html', 'app/app.js'], ['recompile']);
    return;
});

gulp.task('default', [], function() {
    gulp.start('recompile');
    gulp.start('watch');
    gulp.src('app/app.js')
        .pipe(webpack({
            watch: true,
            output: {
                filename: 'dist.js'
            }
        }))
        .pipe(gulp.dest('dist/'));
    return;
});
