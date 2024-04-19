checkCollison();


function checkCollison() {

    for (let i = 0; i < balls.length; i++) {
        const randomNum = Math.floor(Math.random() * (2 - 6 + 1) + 3);
        let x;
        let y;

        // if (ballsData[i].setX === balls[i].style.left || ballsData[i].setY === balls[i].style.top ){
        if (ballsData[i].ticksSinceDistanceSet >= 100){
            //position reached
            ballsData[i].ticksSinceDistanceSet = 0
            if (balls[i].style.left >= `${window.innerWidth}px`){
                //right
                switch (randomNum) {
                    case 0:
                        //bounce side top
                        y = 0;
                        x = Math.floor(Math.random() * (window.innerWidth - 10 + 1) + -10);
                    break;
                        case 1:
                        //bounce side left
                        y = Math.floor(Math.random() * (window.innerHeight - 10 + 1) + -10);
                        x = 0;
                    break;
                        case 2:
                        //bounce side bottom
                        y = window.innerHeight;
                        x = Math.floor(Math.random() * (window.innerWidth - 10 + 1) + -10);
                    break;
                    default:
                        break;
    
                }
            }
            else if (balls[i].style.top >= `${window.innerHeight}px`){
                //hit bottom
                switch (randomNum) {
                    case 0:
                        //bounce side top
                        y = 0;
                        x = Math.floor(Math.random() * (window.innerWidth - 10 + 1) + -10);
                    break;
                        case 1:
                        //bounce side left
                        y = Math.floor(Math.random() * (window.innerHeight - 10 + 1) + -10);
                        x = 0;
                    break;
                        case 2:
                        //bounce side right
                        y = Math.floor(Math.random() * (window.innerHeight - 10 + 1) + -10);
                        x = window.innerWidth
                    break;
                    default:
                        break;
    
                }
            }
            else if (balls[i].style.left === "0px"){
                //left
                switch (randomNum) {
                    case 0:
                        //bounce side top
                        y = 0;
                        x = Math.floor(Math.random() * (window.innerWidth - 10 + 1) + -10);
                    break;
                        case 1:
                        //bounce side bottom
                        y = window.innerHeight;
                        x = Math.floor(Math.random() * (window.innerWidth - 10 + 1) + -10);
                    break;
                        case 2:
                        //bounce side right
                        y = Math.floor(Math.random() * (window.innerHeight - 10 + 1) + -10);
                        x = window.innerWidth
                    break;
                    default:
                        break;
    
                }
            }
            else if (balls[i].style.top === "0px"){
                //top
                switch (randomNum) {
                    case 1:
                        //bounce side bottom
                        y = window.innerHeight;
                        x = Math.floor(Math.random() * (window.innerWidth - 10 + 1) + -10);
                    break;
                        case 2:
                        //bounce side left
                        y = Math.floor(Math.random() * (window.innerHeight - 10 + 1) + -10);
                        x = 0;
                    break;
                        case 3:
                        //bounce side right
                        y = Math.floor(Math.random() * (window.innerHeight - 10 + 1) + -10);
                        x = window.innerWidth
                    break;
                    default:
                        break;
    
                    }
                }
            ballsData[i].setX = x;
            ballsData[i].setY = y;
            balls[i].style.left = x + "px";
            balls[i].style.top = y + "px";
        }else{
            ballsData[i].ticksSinceDistanceSet++
        }
    }
}

window.setInterval(checkCollison, 100);