function Bike(x, y, xV, yV, c){
	

	this.location = createVector(x,y);
	this.velocity = createVector(xV, yV);

	this.trail = [];

	this.c = c;

	
}

//draws trail
Bike.prototype.draw = function(){

	noStroke();
	fill(this.c);

	for(var i = 0; i< this.trail.length; i++){
		rect(this.trail[i].x * SCL, this.trail[i].y * SCL, SCL, SCL);
	}

};


Bike.prototype.update = function(){
	this.trail.push(createVector(this.location.x, this.location.y));
	this.location.add(this.velocity);
};

Bike.prototype.collidesWith = function(trail){

	for(var i = 0; i<trail.length; i++){
		if (trail[i].x == this.location.x && trail[i].y == this.location.y) {
			return true;
		} 		
	}
	return false;
	
};

Bike.prototype.collidesWithBounds = function() {
	if(this.location.x<0 || this.location.x>width/SCL || this.location.y < 0 || this.location.y > height/SCL){
		return true;
	}
};



