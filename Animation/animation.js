"use strict";
window.addEventListener("load", handleLoad);
const NUM_BAllS = Number(prompt("How many balls do you want?"));
const speed = Number(prompt("How fast should the balls be able to move?"));
const BALL_SIZE = 6;
let timePreviousFrame = Date.now();
const balls = [];
function handleLoad() {
    document.body.addEventListener("click", handlerClick);
    createBall();
    animate();
}
function createBall() {
    const el = document.createElement("span");
    el.className = "ball";
    el.style.backgroundColor = getRandomColor();
    document.body.appendChild(el);
    const timeCurrent = Date.now();
    let timeDelta = timeCurrent - timePreviousFrame;
    timeDelta /= 1000;
    const x = Math.random() * (window.innerWidth - BALL_SIZE);
    const y = Math.random() * (window.innerHeight - BALL_SIZE);
    let vx = (Math.random() - 0.5) * 2 * speed * timeDelta;
    if (vx === 0)
        vx = 1;
    let vy = (Math.random() - 0.5) * 2 * speed * timeDelta;
    if (vy === 0)
        vy = 1;
    //const vx = 3
    //const vy = 10
    return { element: el, x, y, vx, vy };
}
for (let i = 0; i < NUM_BAllS; i++) {
    balls.push(createBall());
}
function getRandomColor() {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 70%, 80%)`; // HSL: Farbton, Sättigung, Helligkeit
}
function animate() {
    checkCollisions();
    for (const ball of balls) {
        ball.x += ball.vx;
        ball.y += ball.vy;
        if (ball.x <= 0) {
            ball.x = 0;
            ball.vx *= -1;
        }
        else if (ball.x >= window.innerWidth - BALL_SIZE) {
            ball.x = window.innerWidth - BALL_SIZE;
            ball.vx *= -1;
        }
        if (ball.y <= 0) {
            ball.y = 0;
            ball.vy *= -1;
        }
        else if (ball.y >= window.innerHeight - BALL_SIZE) {
            ball.y = window.innerHeight - BALL_SIZE;
            ball.vy *= -1;
        }
        ball.element.style.transform = `matrix(1,0,0,1,${ball.x},${ball.y})`;
    }
    requestAnimationFrame(animate);
}
update();
function update() {
    animate();
}
function checkCollisions() {
    for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {
            const a = balls[i];
            const b = balls[j];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < BALL_SIZE) {
                console.log("Collision");
                a.element.remove();
                b.element.remove();
                balls.splice(balls.indexOf(a), 1);
                balls.splice(balls.indexOf(b), 1);
                //a.vx *= -1;
                //a.vy *= -1;
                //b.vx *= -1;
                //b.vy *= -1;
            }
        }
    }
}
function handlerClick(_event) {
    console.log("It worked");
    let element = _event.target;
    console.log(element);
    for (let ball of balls) {
        if (ball.element == element) {
            //document.body.removeChild(element)
            element.remove();
        }
    }
}
