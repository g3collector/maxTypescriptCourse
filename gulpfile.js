var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject  = ts.createProject("tsconfig.json");

gulp.task('typescript' , function(){
    return tsProject
            .src()
            .pipe(ts())
            .js
            .pipe(gulp.dest("dist"));
});

gulp.task('watch',['typescript'] ,function(){
    gulp.watch("src/**/*.ts", ['typescript']);
});

gulp.task("default", ["watch"]);
