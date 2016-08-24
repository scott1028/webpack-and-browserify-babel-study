var gulp = require('gulp');
var webpack = require('webpack-stream');

gulp.task('recompile', function(){
    console.log('Run recompile!');
    gulp.src('app/index.html').pipe(gulp.dest('./dist'));
    return;
});

gulp.task('watch', function(){
    // webpack will handle app.js.
    gulp.watch(['app/index.html'], ['recompile']);
    return;
});

gulp.task('default', [], function() {
    gulp.start('recompile');
    gulp.start('watch');

    // first way
    gulp.src('app/app.js')
        .pipe(webpack({
            watch: true,
            output: {
                filename: 'dist.js'
            }
        }))
        .pipe(gulp.dest('dist/'));

    // second way
    return;
    webpack({
        watch: true,
        entry: {
            app: './app/app.js',
            app2: './app/app2.js'
        },
        output: {
            // seperate file
            filename: '[name]-dist.js'
            // or all in one
            // filename: 'dist.js'
        }
    }).pipe(gulp.dest('dist/'));
    // return;
});
