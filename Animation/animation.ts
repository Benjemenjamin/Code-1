window.addEventListener("load",handleLoad);
const NUM_BAllS = Number(prompt("How many balls do you want?"))
const speed = Number(prompt("How fast should the balls be able to move?"))
const BALL_SIZE = 6


let timePreviousFrame: number = Date.now();
type Ball = {
    element: HTMLSpanElement;
    x: number;
    y: number;
    vx: number;
    vy: number;
};

const balls: Ball[] = [];
function handleLoad(){
document.body.addEventListener("click",handlerClick)
animate()
}
function createBall(): Ball {
    const el = document.createElement("span");
    el.className = "ball";
    document.body.appendChild(el);
    
    const timeCurrent: number = Date.now();
    let timeDelta: number = timeCurrent - timePreviousFrame
    timeDelta /= 1000
    
    const x = Math.random() * (window.innerWidth - BALL_SIZE);
    const y = Math.random() * (window.innerHeight - BALL_SIZE);
    let vx = (Math.random() - 0.5) * 2 * speed * timeDelta;
    if (vx === 0) vx = 1
    let vy = (Math.random() - 0.5) * 2 * speed * timeDelta;
    if (vy === 0) vy = 1
    //const vx = 3
    //const vy = 10

    return { element: el, x, y, vx, vy };
}

for (let i = 0; i < NUM_BAllS; i++) {
    balls.push(createBall());
}

function animate(): void {
    for (const ball of balls) {
        ball.x += ball.vx;
        ball.y += ball.vy;

        if (ball.x <= 0) {
            ball.x = 0;
            ball.vx *= -1;
        } else if (ball.x >= window.innerWidth - BALL_SIZE) {
            ball.x = window.innerWidth - BALL_SIZE;
            ball.vx *= -1;
        }

        if (ball.y <= 0) {
            ball.y = 0;
            ball.vy *= -1;
        } else if (ball.y >= window.innerHeight - BALL_SIZE) {
            ball.y = window.innerHeight - BALL_SIZE;
            ball.vy *= -1;
        }

        ball.element.style.transform = `matrix(2,0,0,2,${ball.x},${ball.y})`;
    }

    requestAnimationFrame(animate);
}


function handlerClick(_event: Event): void{
    console.log("It worked");
    let element: HTMLElement = _event.target as HTMLElement
    console.log(element);
    for(let ball of balls){
        if (ball.element == element){
            //document.body.removeChild(element)
            element.remove()
        }
    }
}

document.body.addEventListener("click",handlerClick)