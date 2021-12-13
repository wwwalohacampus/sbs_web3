// slide rotation 메인 슬라이드

var slides = document.getElementsByClassName("slide");
var rotator = setInterval(changeSlide, 5000);

function changeSlide(){												// run this every 2 seconds

	for(var i=0; i<slides.length; i++){								// loop through all slides
		
		if(slides[i].classList.contains("showing")){				// if it's the active slide
		
			slides[i].classList.remove("showing");					// remove the active class
			
			var nextslide = i+1;									// get the next slide
			if(nextslide>=slides.length){							// if it would go past the number of slides, send it back to the first
				nextslide = 0;										
			}
			
			slides[nextslide].classList.add("showing");				// add active class to the next slide
			// sliderDots[nextslide].classList.add("active");			// change dot to next slide
			// sliderDots[i].classList.remove("active");				// remove the other dot
			
			i=slides.length;										// end the for loop after the slide is changed once
		}
	}
}

// nav dots
var sliderDots = [];

for(let j=0; j<slides.length; j++){									// for every slide there is
	
	var dot = document.createElement("span");						// create a span
	sliderDots.push(dot);											// add it to sliderDots array
	document.getElementById("slider-dots").appendChild(sliderDots[j]);	// add it to the html in the slider-dots container
	// sliderDots[0].classList.add("active");							// make the first dot active

	sliderDots[j].onclick = function() {							// make an onclick function for each dot
		
		for(var g=0; g<slides.length; g++){							// cycle through all dots
			sliderDots[g].classList.remove("active");				// and remove active class
			slides[g].classList.remove("showing");					// remove active class from slides
		}
		this.classList.add("active");								// add active to clicked dot
		slides[j].classList.add("showing");							// add active class to slide clicked
	}
}

// prev/next button
function prev(){

	for(var i=0; i<slides.length; i++){
		
		if(slides[i].classList.contains("showing")){
		
			slides[i].classList.remove("showing");
			
			var nextslide = i-1;
			if(nextslide<0){
				nextslide = slides.length-1;
			}
			
			slides[nextslide].classList.add("showing");
			// sliderDots[nextslide].classList.add("active");
			// sliderDots[i].classList.remove("active");
			
			clearInterval(rotator);
			rotator = setInterval(changeSlide, 4000);
			i=slides.length;
		}
	}
}

function next(){

	for(var i=0; i<slides.length; i++){
		
		if(slides[i].classList.contains("showing")){
		
			slides[i].classList.remove("showing");
			
			var nextslide = i+1;
			if(nextslide>=slides.length){
				nextslide = 0;
			}
			
			slides[nextslide].classList.add("showing");
			// sliderDots[nextslide].classList.add("active");
			// sliderDots[i].classList.remove("active");
			
			clearInterval(rotator);
			rotator = setInterval(changeSlide, 4000);
			i=slides.length;
		}
	}
}