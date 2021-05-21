var productSliderController = function () {
    var $product = $('.shop-single-image');
    
    if ( $product.length > 0 ) {
      var $sliderThumbnails = $('.shop-single-image__thumbnails');
      var $sliderSlider = $('.shop-single-image__slider');
      
      $sliderThumbnails.slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: false,
        asNavFor: '.shop-single-image__slider',
        focusOnSelect: true
      });
      
      $sliderSlider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        fade: true,
        arrows: true,
        asNavFor: '.shop-single-image__thumbnails'
      });
    }
  }
  
  $(document).ready(function () {
    productSliderController();
  });