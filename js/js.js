$(document).ready(function(){
  $('#qualifications .ql-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    dots: true,
  });


  var arr = [ "task-1", "task-2", "task-3", "task-4", "task-5", "task-6" ];

  jQuery.each( arr, function( i, val ) {

    var percentage = $( "." + val + " .percentage" ).text();
    
    $( "." + val ).addClass( "w-" + percentage );

  });

});
