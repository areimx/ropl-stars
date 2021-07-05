$( document ).ready(function() {
    $('.owl-carousel').owlCarousel({
        responsiveClass:true,
        nav:false,
        autoplay:true,
        autoplayHoverPause:false,
        loop:true,
        smartSpeed:1000,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        responsive:{
            0:{
                items:2
            },
            1000:{
                items:4,
                loop:false,
                autoplay:false
            }
        }
    })
});