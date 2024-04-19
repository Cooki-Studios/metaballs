const balls = document.getElementsByClassName("balls");
const metaballs = document.getElementsByClassName("inner-metaballs")[0];
var gradientRot = 0;

let ballsData = []

function createBalls(num) {
    for (let i = 0; i < num; i++) {
        let div = document.createElement("div");
        div.className = "balls";
        metaballs.appendChild(div);
    }
}

createBalls(20);

for (let i = 0; i < balls.length; i++) {
    balls[i].id = i;
    
    const randomNum = Math.floor(Math.random() * (0 - 5 + 1) + 5);
    let x;
    let y;

        switch (randomNum) {
        case 1:
            //bounce side top
            y = 0;
            x = Math.floor(Math.random() * (window.innerWidth - 10 + 1) + -10);
            break;
        case 2:
            //bounce side left
            y = Math.floor(Math.random() * (window.innerHeight - 10 + 1) + -10);
            x = 0;
            break;
            case 3:
            //bounce side bottom
            y = window.innerHeight;
            x = Math.floor(Math.random() * (window.innerWidth - 10 + 1) + -10);
            break;
        case 4:
            //bounce side right
            y = Math.floor(Math.random() * (window.innerHeight - 10 + 1) + -10);
            x = window.innerWidth;
            break;        
        default:
            break;
    }



    balls[i].style.top = y + "px";
    balls[i].style.left = x + "px";

    let temp = Math.random() * 500;
    balls[i].style.width = temp + "px";
    balls[i].style.height = temp + "px";

    ballsData.push({
        setX: x,
        setY: y,
        ticksSinceDistanceSet: 0,
    })
    console.log(ballsData)

}

function gradientFunc() {
    gradientRot += 0.1;

    if (gradientRot == 360) {
        gradientRot = 0;
    }

    // metaballs.style.webkitMaskImage = "linear-gradient("+gradientRot+"deg, black, transparent)";
    // metaballs.style.maskImage = "linear-gradient("+gradientRot+"deg, black, transparent)";
}

window.setInterval(gradientFunc);