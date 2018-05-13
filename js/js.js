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


  // var tasks = [ "task-1", "task-2", "task-3", "task-4", "task-5", "task-6" ];
  var tasks = [];
  //var tasks = [];

  $(".tasks").each(function(i){

     $(this).attr("data-task" , (i + 1))

     tasks.push($(this).attr("class") + "[data-task='" + $(this).data("task") + "']");

  });

  jQuery.each( tasks, function( i, val ) {

    var percentage = $( "." + val + " .percentage" ).text();

    $( "." + val ).addClass( "w-" + percentage );

  });

  console.log(tasks);
});
