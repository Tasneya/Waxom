$(function(){
//Back-top
	
	$('.back-top').click(function(){
	$('html, body').animate({scrollTop:0},1500);	
	});
	
	$(window).scroll(function(){
		var scrolling = $(this).scrollTop();
		if (scrolling >20){
			$('.back-top').fadeIn(500);
		}
		else{
			$('.back-top').fadeOut(500); 
		}
		
	});
	
//light2
	$(window).scroll(function(){
		var scrolling = $(this).scrollTop();
		if (scrolling >200){
			$('.navbar').addClass('light2');
		}
		else{
			$('.navbar').removeClass('light2'); 
		}
		
			});
	//veno-box 
	  $(document).ready(function(){
    $('.venobox').venobox(); 
});
	
	// counter js
$('.counter').counterUp({
    delay: 5,
    time: 1500
});
	//bg video 
	  jQuery(".player").YTPlayer();
	
	//preloader
	$(window).on('load', function(){
		$('.preloader').delay(500).fadeOut(500);
	});
	

	 //animation scroll js
    var html_body = $('html, body');
    $('.navbar-light .navbar-nav .nav-link').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500);
                return false;
            }
        }
    });
	
});