class JSBalls {
    static generate(num, colour, bgColour, speed) {
        document.body.innerHTML += "<link rel='stylesheet' href='../styles/style.css'>";

        const blender = document.createElement("div");
        blender.className = "blender";
        document.body.appendChild(blender);

        const outer = document.createElement("div");
        outer.className = "outer-metaballs";
        blender.appendChild(outer);

        const metaballs = document.createElement("div");
        metaballs.className = "inner-metaballs";
        outer.appendChild(metaballs);

        const balls = document.getElementsByClassName("balls");
        let gradientRot = 0;
        const ballsData = [];

        if (!num) {
            num = Math.floor(Math.random() * 15) + 1;
        }

        for (let i = 0; i < num; i++) {
            let div = document.createElement("div");
            div.className = "balls";
            div.style.backgroundColor = colour;
            metaballs.appendChild(div);
        }

        let temp;

        for (let i = 0; i < balls.length; i++) {
            balls[i].id = i;
            
            if (window.innerHeight > window.innerWidth) {
                temp = Math.random() * (window.innerHeight/2);
            } else {
                temp = Math.random() * (window.innerWidth/2);
            }

            const x =  Math.floor(Math.random() * window.innerWidth);
            const y =  Math.floor(Math.random() * window.innerHeight);

            balls[i].style.top = y + "px";
            balls[i].style.left = x + "px";

            balls[i].style.width = temp + "px";
            balls[i].style.height = temp + "px";

            ballsData.push({
                setX: x,
                setY: y,
                size: temp,
                dir: (Math.random() * 360),
            })

            const gradStyle = document.head.appendChild(document.createElement("style"));

            function animBalls(speed) {
                for (let i = 0; i < ballsData.length; i++) {
                    ballsData[i].setX += speed * Math.cos(ballsData[i].dir * Math.PI / 180);
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

                if (Math.floor(gradientRot) === 359) {
                    gradientRot = 0;
                } else {
                    gradientRot += 0.05;
                }

                gradStyle.innerHTML = "body{background: linear-gradient("+(90+gradientRot)+"deg, #ff8585, #def493); background: linear-gradient("+(90+gradientRot)+"deg in oklch, #ff8585, #def493);} body::before {mask-image: linear-gradient("+(180+gradientRot)+"deg, transparent, black); background: linear-gradient("+(90+gradientRot)+"deg, #b8f1ff, #f957d6); background: linear-gradient"+(90+gradientRot)+"deg in oklch, #b8f1ff, #f957d6);}"
            }

            if (speed) {
                window.setInterval(animBalls,0,speed);
            } else {
                window.setInterval(animBalls,0,0.025);
            }
        }
    }
}