
var w;
var h;
var width, height, left_margin, i, slide_id;


function f(){
	w = document.body.clientWidth;

 	h = window.screen.availHeight;
	left_margin = (w-1200)/2;
	width = 1200+left_margin*2;
	height = h - 140;


	document.getElementById("slider").style.height=height+"px";
	
	document.getElementById("slide_left").style.height=height+"px";


	document.getElementById("slide_right").style.height=height+"px";

	document.getElementById("inner_slider_text").style.top=height/2-150+"px";




}

var s;
/*function f_slider_right(){
	switch(s){
		case 0:
			document.getElementById("li2").style.left="-100%";
			document.getElementById("li3").style.left="0%";
			document.getElementById("li1").style.display="none";
			document.getElementById("li1").style.left="100%";
			document.getElementById("li0").style.display="block";

			document.getElementById("c_slider1").style.background="#fff";
			document.getElementById("c_slider2").style.background="#fff";
			document.getElementById("c_slider3").style.background="#fff";
			document.getElementById("c_slider4").style.background="#212121";

			s=3;
			break;
		case 1:
			document.getElementById("li3").style.left="-100%";
			document.getElementById("li0").style.left="0%";
			document.getElementById("li2").style.display="none";
			document.getElementById("li2").style.left="100%";
			document.getElementById("li1").style.display="block";

			document.getElementById("c_slider1").style.background="#212121";
			document.getElementById("c_slider2").style.background="#fff";
			document.getElementById("c_slider3").style.background="#fff";
			document.getElementById("c_slider4").style.background="#fff";

			s=0;

			break;

	}
}

function f_slider_left(){
	switch(s){
		case 0:
			document.getElementById("li0").style.left="-100%";
			document.getElementById("li1").style.left="0%";
			document.getElementById("li3").style.display="none";
			document.getElementById("li3").style.left="100%";
			document.getElementById("li2").style.display="block";

			document.getElementById("c_slider1").style.background="#fff";
			document.getElementById("c_slider2").style.background="#212121";
			document.getElementById("c_slider3").style.background="#fff";
			document.getElementById("c_slider4").style.background="#fff";

			s=1;
			break;

		case 1:
			document.getElementById("li1").style.left="-100%";
			document.getElementById("li2").style.left="0%";
			document.getElementById("li0").style.display="none";
			document.getElementById("li0").style.left="100%";
			document.getElementById("li3").style.display="block";

			document.getElementById("c_slider1").style.background="#fff";
			document.getElementById("c_slider2").style.background="#fff";
			document.getElementById("c_slider3").style.background="#212121";
			document.getElementById("c_slider4").style.background="#fff";

			s=2;
			break;
		case 2:
			document.getElementById("li2").style.left="-100%";
			document.getElementById("li3").style.left="0%";
			document.getElementById("li1").style.display="none";
			document.getElementById("li1").style.left="100%";
			document.getElementById("li0").style.display="block";

			document.getElementById("c_slider1").style.background="#fff";
			document.getElementById("c_slider2").style.background="#fff";
			document.getElementById("c_slider3").style.background="#fff";
			document.getElementById("c_slider4").style.background="#212121";

			s=3;
			break;
		case 3:
			document.getElementById("li3").style.left="-100%";
			document.getElementById("li0").style.left="0%";
			document.getElementById("li2").style.display="none";
			document.getElementById("li2").style.left="100%";
			document.getElementById("li1").style.display="block";

			document.getElementById("c_slider1").style.background="#212121";
			document.getElementById("c_slider2").style.background="#fff";
			document.getElementById("c_slider3").style.background="#fff";
			document.getElementById("c_slider4").style.background="#fff";

			s=0;
			break;
	}
}
*/
function f_slider(){
				if(s<=3){
				switch(s){
				case 0:
					document.getElementById("li0").style.left="-100%";
					document.getElementById("li1").style.left="0%";
					document.getElementById("li3").style.display="none";
					document.getElementById("li3").style.left="100%";
					document.getElementById("li2").style.display="block";

					document.getElementById("c_slider1").style.background="#fff";
					document.getElementById("c_slider2").style.background="#212121";
					document.getElementById("c_slider3").style.background="#fff";
					document.getElementById("c_slider4").style.background="#fff";
				break;
				case 1:
					document.getElementById("li1").style.left="-100%";
					document.getElementById("li2").style.left="0%";
					document.getElementById("li0").style.display="none";
					document.getElementById("li0").style.left="100%";
					document.getElementById("li3").style.display="block";

					document.getElementById("c_slider1").style.background="#fff";
					document.getElementById("c_slider2").style.background="#fff";
					document.getElementById("c_slider3").style.background="#212121";
					document.getElementById("c_slider4").style.background="#fff";


				break;
				case 2:
					document.getElementById("li2").style.left="-100%";
					document.getElementById("li3").style.left="0%";
					document.getElementById("li1").style.display="none";
					document.getElementById("li1").style.left="100%";
					document.getElementById("li0").style.display="block";

					document.getElementById("c_slider1").style.background="#fff";
					document.getElementById("c_slider2").style.background="#fff";
					document.getElementById("c_slider3").style.background="#fff";
					document.getElementById("c_slider4").style.background="#212121";

				break;
				case 3:
					document.getElementById("li3").style.left="-100%";
					document.getElementById("li0").style.left="0%";
					document.getElementById("li2").style.display="none";
					document.getElementById("li2").style.left="100%";
					document.getElementById("li1").style.display="block";

					document.getElementById("c_slider1").style.background="#212121";
					document.getElementById("c_slider2").style.background="#fff";
					document.getElementById("c_slider3").style.background="#fff";
					document.getElementById("c_slider4").style.background="#fff";



				break;
				}
				s++;
				}
				else{s=0;
				 setTimeout(function(){
            
        }, 0);
				}
				
			}setInterval (f_slider, 10000)





$(document).ready(function(){
	$("#menu").on("click","a", function (event) {
	
		event.preventDefault();

		var id  = $(this).attr('href'),


			top = $(id).offset().top;

		$('body,html').animate({scrollTop: top}, 1000);
	});



	$("#contacts").on("click","a", function (event) {
	
		event.preventDefault();

		var id  = $(this).attr('href'),


			top = $(id).offset().top;

		$('body,html').animate({scrollTop: top}, 1000);
	});

	$(".read_more_slider").on("click","a", function (event) {

		event.preventDefault();

		var id  = $(this).attr('href'),


			top = $(id).offset().top;

		$('body,html').animate({scrollTop: top}, 1000);
	});
});

$(document).ready(function(){
	2
	$(window).scroll(function(){
		3
		var bo = $("body").scrollTop();


		if ( bo > 300 ) {
			$(".dog_event1").css("left", "0%");
			$(".dog_event1").css("opacity", "1");

			$(".dog_event2").css("top", "0%");
			$(".dog_event2").css("opacity", "1");

			$(".dog_event3").css("left", "68.5%");
			$(".dog_event3").css("opacity", "1");
		}

		if ( bo > 850 ) {
			$(".dog1").css("left", "0%");
			$(".dog1").css("opacity", "1");

			$(".dog2").css("top", "0%");
			$(".dog2").css("opacity", "1");

			$(".dog3").css("left", "68.5%");
			$(".dog3").css("opacity", "1");
		}

		if ( bo > 1500 ) {
			$(".about_us_p").css("top", "-50px");
			$(".about_us_p").css("opacity", "1");

			$(".about_us_img").css("left", "0px");
			$(".about_us_img").css("opacity", "1");

		}

		if ( bo > 2000 ) {
			$(".puppies_div1").css("left", "0px");
			$(".puppies_div1").css("opacity", "1");

			$(".puppie_booking").css("left", "45%");
			$(".puppie_booking").css("opacity", "1");

		}

		if ( bo > 2600 ) {
			$(".puppy2_image").css("left", "0px");
			$(".puppy2_image").css("opacity", "1");

			$(".puppy_booking2_text2").css("left", "55%");
			$(".puppy_booking2_text2").css("opacity", "1");


		}

		if ( bo > 3100 ) {
			$(".puppies_div3").css("left", "0px");
			$(".puppies_div3").css("opacity", "1");

			$(".div4").css("left", "45%");
			$(".div4").css("opacity", "1");


		}

		if ( bo > 3650 ) {
			$(".contacts_footer").css("top", "50px");
			$(".contacts_footer").css("opacity", "1");




		}
		6
	})
	7
})

var events_more;
function events_read_more(){

			document.getElementById("dog_event1").style.display="none";
			document.getElementById("dog_event2").style.display="none";
			document.getElementById("dog_event3").style.display="none";

			document.getElementById("event_main").style.display="block";

}

function back_to_events(){
	document.getElementById("dog_event1").style.display="block";
	document.getElementById("dog_event2").style.display="block";
	document.getElementById("dog_event3").style.display="block";

	document.getElementById("event_main").style.display="none";
}
var dog_border, dog_border_none;
function dog_event_border(dog_border){
	switch(dog_border){
		case 1:
			document.getElementById("dog_event1").style.border="2px solid #bbb9b8";
			break;
		case 2:
			document.getElementById("dog_event2").style.border="2px solid #bbb9b8";
			break;
		case 3:
			document.getElementById("dog_event3").style.border="2px solid #bbb9b8";
			break;
	}
}

function dog_event_border_none(dog_border_none){
	switch(dog_border_none){
		case 1:
			document.getElementById("dog_event1").style.border="0px solid #bbb9b8";
			break;
		case 2:
			document.getElementById("dog_event2").style.border="0px solid #bbb9b8";
			break;
		case 3:
			document.getElementById("dog_event3").style.border="0px solid #bbb9b8";
			break;
	}
}
var booking;
function booking_pups(booking){
	switch(booking){
		case 1:
			document.getElementById("booking_form1").style.display="block";
			break;
		case 2:
			document.getElementById("booking_form2").style.display="block";
			break;
		case 3:
			document.getElementById("booking_form3").style.display="block";
			break;
	}
}

function booking_send(booking){
	switch(booking){
		case 1:
			document.getElementById("booking_form1").style.display="none";
			break;
		case 2:
			document.getElementById("booking_form2").style.display="none";
			break;
		case 3:
			document.getElementById("booking_form3").style.display="none";
			break;
	}
}







