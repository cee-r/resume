$(document).ready(function(){

  // Back to Top
  $(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	});

	$('#back-to-top').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});

  // Sticky Header
  var shrink = $(".shrink");

  $(window).scroll(function() {
		if( $(this).scrollTop() > 0 ) {
			shrink.addClass("shrink-on");
		} else {
			shrink.removeClass("shrink-on");
		}
	});

  var headerOffset = $('header').height();
  $("main").css("margin-top", headerOffset);

  // Slider
  $('#qualifications .ql-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: true,
          dots: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: true,
        }
      }
    ]
  });

  // Breakdown
  // var tasks = [ "task-1", "task-2", "task-3", "task-4", "task-5", "task-6" ];
  var tasks = [];
  var rxp = new RegExp("([0-9]+\.?[0-9]+)", "gm");

  $(".tasks").each(function(i, v){

    $(this).html($(this).html().replace(rxp, "<span class=\"percentage\">$1</span>"));
    $(this).attr("data-task" , (i + 1));
    tasks.push($(this).attr("class") + "[data-task='" + $(this).data("task") + "']");

  });

  jQuery.each( tasks, function( i, v ) {

    var percentage = $( "." + v + " .percentage" ).text();

    $( "." + v ).addClass( "w-" + percentage );

  });

  //console.log(tasks);

  // Rate

});
