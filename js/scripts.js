$(document).ready(function(){

	/* Animation from Gallery
	-------------------------------------------------- */
	$(window).scroll(function(){
		var sectionTop = $(window).scrollTop();
		var appPosX = $(".card").offset().top;
		if (sectionTop>=((appPosX)-500)) {
			$(".card").animate({marginTop: "0px", opacity: "1"}, 800);
		}
	})

	$(".navbar-link").on("hover", function(a){
		$(this).children(".navbar-name").slideToggle();
		a.preventDefault();
	});

});