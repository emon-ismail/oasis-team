$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        animateOut: 'fadeOut',
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true
    });
});
