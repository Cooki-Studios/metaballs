const balls = document.getElementsByClassName("balls");
const metaballs = document.getElementsByClassName("inner-metaballs")[0];
var gradientRot = 0;

var ballsData = []

function createBalls(num) {
    for (let i = 0; i < num; i++) {
        let div = document.createElement("div");
        div.className = "balls";
        metaballs.appendChild(div);
    }
}

createBalls(1);

for (let i = 0; i < balls.length; i++) {
    balls[i].id = i;
    
    const temp = Math.random() * 500;
    const x =  Math.floor(Math.random() * window.innerWidth - temp);;
    const y =  Math.floor(Math.random() * window.innerHeight - temp);;

    balls[i].style.top = y + "px";
    balls[i].style.left = x + "px";

    balls[i].style.width = temp + "px";
    balls[i].style.height = temp + "px";

    ballsData.push({
        setX: x,
        setY: y,
        size: temp,
        dir: (Math.random() * 360),
        colL: false,
        colR: false,
        colT: false,
        colB: false,
    })
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