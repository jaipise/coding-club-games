let player = {
  x: 100,
  y: 100,
  size: 50,
  speed: 5,
  score: 0
};

let goal = {
  x: 400,
  y: 400,
  size: 25
}

let enemy = {
  x: 500,
  y:0,
  size: 40,
  speed: 2
}

let gameOver = false;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(50, 50, 200);
  fill(255);
  if (!gameOver) {
    textSize(24);
    text(player.score, 25, 25);

    noStroke();

    //draw goal
    fill(200, 200, 50);
    circle(goal.x, goal.y, goal.size);

    //draw player
    fill(50, 200, 50);
    circle(player.x, player.y, player.size);

    //draw enemy
    fill(200, 50, 50);
    circle(enemy.x, enemy.y, enemy.size);

    //check to see if player reached goal
    if (collides(player, goal)) {
      player.score += 1;
      goal.x = random(width);
      goal.y = random(height);
    }

    //check if enemy got player
    if (collides(player, enemy)) {
      gameOver = true;
    }

    //make enemy chase player
    if (enemy.x < player.x) {
      enemy.x += enemy.speed;
    }
    if (enemy.x > player.x) {
      enemy.x -= enemy.speed;
    }
    if (enemy.y < player.y) {
      enemy.y += enemy.speed;
    }
    if (enemy.y > player.y) {
      enemy.y -= enemy.speed;
    }

    //player input
    if (keyIsDown(UP_ARROW)) {
      player.y -= player.speed;
    }
    if (keyIsDown(DOWN_ARROW)) {
      player.y += player.speed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      player.x += player.speed;
    }
    if (keyIsDown(LEFT_ARROW)) {
      player.x -= player.speed;
    }
  } else {
    background(0);
    fill(255);
    text("GAME OVER", 180, 200);
    text("Final score: " + player.score, 180, 250);
    text("Press 'R' to restart", 180, 300);
    if (keyIsDown(82)) {//82 is the keycode for R
        gameOver = false;
        player.x = 100;
        player.y = 100;
        player.score = 0;
        enemy.x = 500;
        enemy.y = 0;
    }
  }
}

function distance(obj1, obj2) {
  let dx = obj1.x - obj2.x;
  let dy = obj1.y - obj2.y;
  return Math.sqrt(dx*dx + dy*dy);
}

function collides(obj1, obj2) {
  let d = distance(obj1, obj2);
  let r1 = obj1.size / 2;
  let r2 = obj2.size / 2;
  if (d < r1 + r2) {
    return true;
  } else {
    return false;
  }
}
