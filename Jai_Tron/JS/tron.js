//pixel scale of each tile
var SCL = 5;


var p1, p2;

function setup(){
	createCanvas(1000, 500);


	p1 = new Bike(50 / SCL, height/2/SCL, 0.3, 0, color("#0000FF"));
	p2 = new Bike((width - 50) / SCL, height/2/SCL, -0.3, 0, color("#FF0000"));
}

function draw(){
	background(51);

		//update players
		p1.update();
		p2.update();

		//draw players
		p1.draw();
		p2.draw();


		//check collision
		if ((p1.collidesWith(p2.trail) && p2.collidesWith(p1.trail)) || (p1.collidesWith(p1.trail) && p2.collidesWith(p2.trail)) || (p1.collidesWithBounds() && p2.collidesWithBounds()))	{
		// both players died at the same time

		endGame("Draw!");

		} else if(p1.collidesWith(p2.trail) || p1.collidesWithBounds() || p1.collidesWith(p1.trail)){
			endGame("Red Wins!");

		} else if(p2.collidesWith(p1.trail) || p2.collidesWithBounds() || p2.collidesWith(p2.trail)) {
			endGame("Blue Wins!");

		}

	}


function handlePlayers(){
		
}



//player1 = W, A, S, & D
//player2 = UP, LEFT, DOWN, & RIGHT

function keyPressed(){
	switch(keyCode){

		case 37: //left
			p2.velocity = createVector(-0.5,0);
			break;
	
		case 39: //right
			p2.velocity = createVector(0.5,0);
			break;
		
		case 40: // up
			p2.velocity = createVector(0,0.5);
			break;

		case 38: //down
			p2.velocity = createVector(0,-0.5);
			break;
		

		
		case 65://left ('a')
			p1.velocity = createVector(-0.5,0);
			break;
		
		case 87://up ('w')
			p1.velocity = createVector(0,-0.5);
			break;
		
		case 68: //right ('d')
			p1.velocity = createVector(0.5,0);
			break;
		
		case 83: //down ('s')
			p1.velocity = createVector(0,0.5);
			break;
	}
}

function endGame(winner){
	noStroke();
	textAlign(CENTER);
	textSize(60);
	fill(255);
	text(winner, width / 2, height / 2);
	noLoop();
}



