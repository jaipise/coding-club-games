
var p1, p2; //paddles
var p1V, p2V; //velocities
var p1S, p2S; //scores
var initS = 0 //initial score

var ball, ballV;


function setup(){

	let canv = createCanvas(600, 400);
	p1 = p2 = height / 2 - 50;

	p1V = p2V = initS;
	p1S = p2S = initS;


	ball = createVector(width / 2, height / 2);
	//createVector([x], [y], [z]) -- ball velocity
	ballV = createVector(1.1*random(-4,4), random(-2,2)); 
	ballV.mult(1.2);



	textAlign(CENTER);
	textSize(70);
}

function draw(){


	background(51);

	//draw paddles --> rect(x,y,width,height)
	rect(20, p1, 10, 100);
	rect(width - 30, p2, 10, 100);
	fill(102, 255, 0);


	//draw ball
	ellipse(ball.x, ball.y, 20);
	fill(255, 204, 0);

	//draw a scoreboard
	text("Score", width / 2, height / 4);
	text(p1S + "  |  " + p2S, width / 2, height / 2 + 22.5);
	fill('magenta');



	if(keyIsDown(82)){
		restart();
	} else{
		handlePaddles();

		handleBall();
	}


}

function handleBall(){

	ball.x += ballV.x;
	ball.y += ballV.y;


	//top and bottom collisions
	if(ball.y > height || ball.y < 0){ //vertical boundaries
		ballV.y *= -1.1; //ricochets
	}

	//paddle collisions
	if(ball.x <= 30){ 
		

		//out of bounds
		if(ball.x <= 10){
			p2S++;
			reset();
			return;
		}

		//left paddle
		if(ball.y > p1 && ball.y < p1 + 100){

			ballV.x *= -1.1; 
			ballV.mult(random(1,1.05));

		}


	} else if(ball.x >= width - 30){ 
		
		//out of bounds
		if(ball.x >= width - 10){
			p1S++;
			reset();
			return;

		}


		//right paddle
		if(ball.y > p2 && ball.y < p2 + 100){

			ballV.x *= -1.1;	
			ballV.mult(random(1,1.05));

		}
	}
}





function handlePaddles(){


	//player one controls
	if(keyIsDown(87)){ //87: keycode for w, 
		//move up

		p1V -= 5;

	} else if(keyIsDown(83)){ //83:keycode for s
		//move down

		p1V += 5;

	}

	//player two controls
	if(keyIsDown(UP_ARROW)){


		p2V -= 5;


	} else if(keyIsDown(DOWN_ARROW)){


		p2V += 5;

	}

 

	p1 += p1V;
	p2 += p2V;

	//"friction"
	p1V *= 0.4;
	p2V *= 0.4;


	//constrain paddles --> constrain( n, low, high )
	p1 = constrain(p1, 0, height - 100);
	p2 = constrain(p2, 0, height - 100);

}

function reset(){ //to return ball to init pos

	ball = createVector(width / 2, height / 2);
	
	handlePaddles();

	handleBall();
}

function restart(){ //to occur when 'r' is pressed
	ball = createVector(width / 2, height / 2);

	//createVector([x], [y], [z]) -- ball velocity
	ballV = createVector(1.1*random(-4,4), random(-2,2)); 
	ballV.mult(1.2);

	p1S = initS;
	p2S = initS;

}




