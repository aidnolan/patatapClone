var circlePath = new Path.Circle(new Point(0, 0), 10);
circlePath.fillColor = "rgba(23, 35, 240, 0.5)";

// clone the path and store it in a variable
for(var x = 0; x < 1000; x+=100){
	for(var y = 0; y < 1000; y+=100){
	new Path.Circle(new Point(x, y), 10).fillColor = "rgba(23, 35, 20, 0.5)";
	}

}

		var keyData = {
			a: {
				color: "purple",
				sound: new Howl({
					src: ['sounds/bubbles.mp3']
			})
			},

			s: {
				color: "green",
				sound: new Howl({
	  				src: ['sounds/clay.mp3']
	  		})
	  		},
	  		d: {
				color: "yellow",
				sound: new Howl({
	  				src: ['sounds/confetti.mp3']
	  		})
			}
		}