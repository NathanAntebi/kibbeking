$(document).ready(function(){


	/*======ISOTOPE FILTERING JAVASCRIPT PLUGIN======*/


	$(".filter a").click(function(){
		$(".filter .current").removeClass("current");
		$(this).addClass("current");
		var selector= $(this).attr("data-filter");
		$(".items .container .row").isotope({
		filter: selector,
		animationOptions:{
			duration: 1500,
			easing: 'linear',
			queue: false
		}
	});

		return false;
	});

	var modal = document.getElementById("myModal");

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img = document.querySelectorAll(".img-thumbnail");
	var modalImg = document.getElementById("img01");
	var captionText = document.getElementById("caption");
	for(var i =0; i<img.length; i++){
			img[i].addEventListener("click", function(){
			console.log("clicked");
			  modal.style.display = "block";
			  modalImg.src = this.src;
			  captionText.innerHTML = this.alt;
		})

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks on <span> (x), close the modal
		span.addEventListener("click", function() { 
		  modal.style.display = "none";
		})
	}




	/*======SUPERSLIDES JAVASCRIPT PLUGIN======*/

	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false,
	});

	/*===========================================*/



	/*======TYPED.JS JAVASCRIPT PLUGIN======*/

	var typed = new Typed(".typed", {
		strings: ["better", "quality", "tastier", "quicker"],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: true
	});

	/*===========================================*/





	$("#navigation li a").click(function(e){
		e.preventDefault();

		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;
		$("html, body").animate({
			scrollTop: targetPosition - 50
		}, "slow");
	})





	});


/*===========================================*/




