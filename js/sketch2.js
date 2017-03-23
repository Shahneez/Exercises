function setup() {
	createCanvas(500,500);
	//var bg = color(255,0,0);
	//background(bg);

}

function calcColor(dist, maxDist){
	var ans = int((dist*1.0)/maxDist*245);
	ans+=5;
	return ans;
}

function calcRadius(dist, maxDist, maxRadius, minRadius){
	var ans = int((dist*1.0)/maxDist*((maxRadius-minRadius)));
	ans+=minRadius;
	return ans;
}

function draw() {
	clear();
	for(i = 0; i<20; i++){
		for(j = 0; j<20; j++){
			var d = dist(mouseX, mouseY, i*25+12.5, j*25+12.5);
			var col = calcColor(d,700);
			var rad = calcRadius(d, 700, 30, 3);
			var c = color(col,col,col);
			fill(c);
			ellipse(i*25+12.5, j*25+12.5, rad, rad);
		}
	}
}
