
$(function() {
$(document).ready(function(){
    // if ($(window).innerHeight() = 740){
    //     $('.content').addClass('android_h');
    // }
    // else if ($(window).innerHeight() = 736){
    //     $('.content').addClass('iphone_h');
    // }
    // else if ($(window).innerHeight() = 732){
    //     $('.content').addClass('android_l');
    // }
    // else if ($(window).innerHeight() = 667) {
    //     $('.content').addClass('iphone_l');
    // }        
    // else if ($(window).innerHeight() <= 666  ) {
    //     $('.content').addClass('android');
    // }
    if ($(window).width() >= 212) {
        $('.content').addClass('android');
    }
}); 

});   
