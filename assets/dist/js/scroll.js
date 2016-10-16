//$('#nav').affix({
//    offset: {
//      top: $('#nav').offset().top-20,
//      bottom: ($('.footer').outerHeight(true)+ 
//    		  $('.social').outerHeight(true)+
//    		  $('.disqus').outerHeight(true)+
//    		  500)
//    }
//});
//
//console.log( $('#disqus_thread').height());

var timesRun = 0;
var interval = setInterval(function() {
	timesRun += 1;
    $('#nav').affix({
        offset: {
          top: $('#nav').offset().top-20,
          bottom: ($('.footer').outerHeight(true)+ 
        		  $('.social').outerHeight(true)+
        		  $('#disqus_thread').outerHeight(true) + 500)
        }
    });
    console.log(timesRun);
    if(timesRun === 10){
        clearInterval(interval);
    }
}, 500);
