$(document).ready(function(){

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	// loop through each .project element
	
	$('.project2').each(function(){
	
			// build a scene
			var ourScene = new ScrollMagic.Scene({
				triggerElement: this,
				triggerHook: 0.9,
				reverse: false
			})
			.setClassToggle(this, 'fade-in') // add class to this
		
			.addTo(controller);
	
		});
		
	$('.project').each(function(){
	
			// build a scene
			var ourScene = new ScrollMagic.Scene({
				triggerElement: this,
				triggerHook: 0.9,
				reverse: false
			})
			.setClassToggle(this, 'fade-in') // add class to this
			
			.addTo(controller);
	
		});

});

















