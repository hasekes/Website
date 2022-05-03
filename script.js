$(document).ready(function(){
    $(window).scroll(function(){
        // scroll script dosyasında nav bar
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // yukarı kaydırma düğmesi script dosyasını göster/gizle
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // sürgülü komut dosyası
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // yukarı kaydırma düğmesi tıklamasında scroll up kaldırma
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // menü öğelerinde tekrar scroll up uygulayarak tıklama
        $('html').css("scrollBehavior", "smooth");
    });

    // menü/navbar script dosyası arasında geçiş yap
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // yazıların animasyonlu gelişi
    var typed = new Typed(".typing", {
        strings: ["Öğrenci", "Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Öğrenci", "Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});