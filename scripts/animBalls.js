function animBalls(speed) {
    for (let i = 0; i < ballsData.length; i++) {
        ballsData[i].setX += speed * Math.cos(ballsData[i].dir * Math.PI / 180);;
        balls[i].style.left = ballsData[i].setX+"px";
        ballsData[i].setY += speed * Math.sin(ballsData[i].dir * Math.PI / 180);
        balls[i].style.top = ballsData[i].setY+"px";

        // Collision Detection
        if (ballsData[i].setY >= window.innerHeight) {
            //hit bottom
            ballsData[i].dir =  -ballsData[i].dir;
        } else if (ballsData[i].setY <= 0 - (ballsData[i].size/2)) {
            //hit top
            ballsData[i].dir =  -ballsData[i].dir;
        } else if (ballsData[i].setX >= window.innerWidth) {
            //hit right
            ballsData[i].dir += 90;
        } else if (ballsData[i].setX <= 0 - (ballsData[i].size/2)) {
            //hit left
            ballsData[i].dir -= 90;
        }
    }
}

window.setInterval(animBalls,0,0.25);
