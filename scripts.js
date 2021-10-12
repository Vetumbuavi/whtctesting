$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

type="text/javascript">
  $(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
      items:3,
      navigation:false,
      pagination:true,
      autoPlay:true
    });
  });

  //--------------  Fading effect  --------------------//
  
  //-------------------------------------------------//
