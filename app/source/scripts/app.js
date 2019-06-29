// Flickity Carousel Config

var elem = document.querySelector('.carousel');
var flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    pageDots: false,
    wrapAround: true,
    imagesLoaded: true,
    autoPlay: 6000,
});

// Smooth Scroll
$(document).ready(function() {

    var scrollLink = $('.scroll');
  
    scrollLink.click(function(e) {
      e.preventDefault();
      $('body,html').animate({
        scrollTop: $(this.hash).offset().top - 100
      }, 1000);
    });
  
})