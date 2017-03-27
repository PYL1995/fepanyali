var gulp=require('gulp');
var gulp=require('sass');

gulp.task('test',function(){
    console.log("aaa");
});
gulp.task('test1',function(){
    console.log("bbb");
});
gulp.task('test3',['test','test1']);
gulp.task('copy',function(){
    gulp.src("index.html");
});
gulp.task('copy-index',function(){
    gulp.src("index.html").pipe(gulp.dest('dist'))
});
gulp.task('sass',function(){
    gulp.src("src/fepanyali/*.scss").pipe(sass())
        .pipe(gulp.dest('dist/test.css'))
});//no



