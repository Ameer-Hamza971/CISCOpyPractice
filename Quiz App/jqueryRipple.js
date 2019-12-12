(function($){
//Ripple Effect Start here here
	$.fn.ripple = function(options){

		var config = $.extend({
			width 	: 500,
			height 	: 500,
			duration: 2000,
			event 	:"click",
			color 	:"rgba(203, 237, 137, 0.5)",
		},options);
		

		this.on(config.event, function(event){
			var wave = $('<span></span>');

			wave.css({
				"width"			: "2px",
				"height"		: "2px",
				"position"		: "absolute",
				"background"	: "radial-gradient(transparent 34%, " + config.color + " 56%, transparent 70%)",
				"display"		: "inline-block",
				"border-radius"	: "50%",
				"pointer-events": "none"
			});

			var top  = event.offsetY;
			var left = event.offsetX;

			$(this).append(wave);

			wave.css({
				"top"	: top-wave.outerHeight()/2,
				"left"	: left-wave.outerWidth()/2
			});
			wave.animate({
				width: config.width+"px",
				height: config.height+"px",
				top:top-(config.height/2),
				left:left-(config.width/2),
				opacity:0
			},config.duration, function() {
				wave.remove();
			});
		});
	}
//Ripple Effect End here

}(jQuery));