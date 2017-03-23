function setup() {
	createCanvas(500,500);
	colorMode(HSB,100);

}

function draw() {
	for(i=0;i<100;i++){
		for(j=0; j<100; j++){
			var c = color(i,j,100); 
			fill(c);
			noStroke();
			rect(i*5,j*5,5,5);
		}
	}

  
}