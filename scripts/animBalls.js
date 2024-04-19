function animBalls(speed) {
    for (let i = 0; i < ballsData.length; i++) {
        ballsData[i].setX += speed * Math.cos(ballsData[i].dir * Math.PI / 180);;
        balls[i].style.left = ballsData[i].setX+"px";
        ballsData[i].setY += speed * Math.sin(ballsData[i].dir * Math.PI / 180);
        balls[i].style.top = ballsData[i].setY+"px";

        // Collision Detection
        let temp = (0 - ballsData[i].dir);
        if (ballsData[i].setY + ballsData[i].size >= window.innerHeight) {
            //hit bottom
            ballsData[i].colL = false;
            ballsData[i].colR = false;
            ballsData[i].colT = false;

            if (!ballsData[i].colB) {
                ballsData[i].colB = true;
                ballsData[i].dir = temp;
            }
        } else if (ballsData[i].setY <= 0) {
            //hit top
            ballsData[i].colL = false;
            ballsData[i].colR = false;
            ballsData[i].colB = false;
            
            if (!ballsData[i].colT) {
                ballsData[i].colT = true;
                ballsData[i].dir = temp;
            }
        } else if (ballsData[i].setX + ballsData[i].size >= window.innerWidth) {
            //hit right
            ballsData[i].colL = false;
            ballsData[i].colB = false;
            ballsData[i].colT = false;
            
            if (!ballsData[i].colR) {
                ballsData[i].colR = true;
                ballsData[i].dir = temp;
            }
        } else if (ballsData[i].setX <= 0) {
            //hit left
            ballsData[i].colB = false;
            ballsData[i].colR = false;
            ballsData[i].colT = false;
            
            if (!ballsData[i].colL) {
                ballsData[i].colL = true;
                ballsData[i].dir = temp;
            }
        }
    }
}

window.setInterval(animBalls,0,1);
