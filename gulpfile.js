var gulp = require("gulp");
var browserSync = require("browser-sync");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var autoprefixer = require("gulp-autoprefixer");

var path = {
    dist: "dist/",
    src: "src/",
    cssin: "src/css/**/*.css",
    htmlin: "src/*.html",
    scssin: "src/scss/**/*.scss",
    cssout: "dest/css/",
    htmlout: "dest/",
    scssout: "src/css/",
    cssoutname: "style.css",
    jsoutname: "script.js",
    cssplaceout: "css/style.css",
    jsplaceout: "js/script.js"
};

gulp.task("reload", function () {
    browserSync.reload();
});

gulp.task("serve", ["sass"], function () {
    browserSync({
        server: path.src
    });

    gulp.watch([path.htmlin], ["reload"]);
    gulp.watch(path.scssin, ["sass"]);
});

gulp.task("sass", function () {
    return gulp.src(path.scssin) //dzieki takiemu zapisowi mamy  dostep w podfolderach
        .pipe(sourcemaps.init())
        .pipe(sass().on("error", sass.logError)) //jakie zadanie ma wykonac
        .pipe(autoprefixer({
            browsers: ["last 3 versions"]
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.scssout))
        .pipe(browserSync.stream()); //
});

gulp.task("default", ["serve"]);