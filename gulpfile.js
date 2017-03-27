var gulp = require('gulp');
var rename = require("gulp-rename");

gulp.task('compile', function() {
    gulp.src('public/js/advantage.js')
    .pipe(rename('script.js'))
    .pipe(gulp.dest('public/components/bitrix/news.list/advantage'));
    
    gulp.src('public/css/advantage.css')
    .pipe(rename('style.css'))
    .pipe(gulp.dest('public/components/bitrix/news.list/advantage'));
    
    
    gulp.src('public/js/appButtons.js')
    .pipe(rename('script.js'))
    .pipe(gulp.dest('public/components/bitrix/news.list/app-buttons'));
    
    gulp.src('public/css/appButtons.css')
    .pipe(rename('style.css'))
    .pipe(gulp.dest('public/components/bitrix/news.list/app-buttons'));    
    
    
    gulp.src('public/css/appButtons.css')
    .pipe(rename('style.css'))
    .pipe(gulp.dest('public/components/bitrix/news.list/app-buttons-black'));  
    
    
    
    gulp.src('public/js/bottomMenu.js')
    .pipe(rename('script.js'))
    .pipe(gulp.dest('public/components/bitrix/menu/bottom-menu'));
    
    gulp.src('public/css/bottomMenu.css')
    .pipe(rename('style.css'))
    .pipe(gulp.dest('public/components/bitrix/menu/bottom-menu'));     
    
    
    
    gulp.src('public/js/features.js')
    .pipe(rename('script.js'))
    .pipe(gulp.dest('public/components/bitrix/news.list/features'));
    
    gulp.src('public/css/features.css')
    .pipe(rename('style.css'))
    .pipe(gulp.dest('public/components/bitrix/news.list/features'));  

    gulp.src('public/js/features.js')
    .pipe(rename('script.js'))
    .pipe(gulp.dest('public/components/bitrix/news.list/features-mobile'));
    
    gulp.src('public/css/features.css')
    .pipe(rename('style.css'))
    .pipe(gulp.dest('public/components/bitrix/news.list/features-mobile')); 



    gulp.src('public/js/horizontalMenu.js')
    .pipe(rename('script.js'))
    .pipe(gulp.dest('public/components/bitrix/menu/horizontal-menu'));
    
    gulp.src('public/css/horizontalMenu.css')
    .pipe(rename('style.css'))
    .pipe(gulp.dest('public/components/bitrix/menu/horizontal-menu'));   


    gulp.src('public/js/paymentLogos.js')
    .pipe(rename('script.js'))
    .pipe(gulp.dest('public/components/bitrix/news.list/payment-logos'));
    
    gulp.src('public/css/paymentLogos.css')
    .pipe(rename('style.css'))
    .pipe(gulp.dest('public/components/bitrix/news.list/payment-logos'));     
    
    
    gulp.src('public/js/slider.js')
    .pipe(rename('script.js'))
    .pipe(gulp.dest('public/components/bitrix/news.list/slider'));
    
    gulp.src('public/css/slider.css')
    .pipe(rename('style.css'))
    .pipe(gulp.dest('public/components/bitrix/news.list/slider'));     
    
    
    
    gulp.src('public/js/topMenu.js')
    .pipe(rename('script.js'))
    .pipe(gulp.dest('public/components/bitrix/menu/top-menu'));
    
    gulp.src('public/css/topMenu.css')
    .pipe(rename('style.css'))
    .pipe(gulp.dest('public/components/bitrix/menu/top-menu'));  
    
    return true;
});

