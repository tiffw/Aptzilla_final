// $('.main-carousel').flickity({
//   // options
//   cellAlign: 'left',
//   contain: true
// });

// $(document).load(function() {
// 	$(".carousel").hide();
//   // Run code
// });


$(document).ready(function() {
	$('.carousel').hide();
	$('.carousel').carousel({
				  interval: 2000
					});

	$("#apartmentSearch").on("click", function(event){
		event.preventDefault();
		$("#demoCards").hide();
		$(".carousel").show();
		$(".team").hide();
	});
	$("#searchForm").on("submit", function(event) {
		event.preventDefault();
	});

});


$(document).ready(function(){  
  for(var i=0 ; i< m.length ; i++) {
    $('<div class="item"><img src="'+m[i]+'"><div class="carousel-caption"></div>   </div>').appendTo('.carousel-inner');
    $('<li data-target="#carousel-example-generic" data-slide-to="'+i+'"></li>').appendTo('.carousel-indicators')

  }
  $('.item').first().addClass('active');
  $('.carousel-indicators > li').first().addClass('active');
  $('#carousel-example-generic').carousel();
});