const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');

const tileSize = 32;
const tilesX = 20;
const tilesY = 20;

const width = tilesX * tileSize;
const height = tilesY * tileSize;

const snakeBody = [
    [9, 9],
    [10, 9],
    [11, 9],
    [12, 9]
];

const RIGHT = 0;
const DOWN = 1;
const LEFT = 2;
const UP = 3;

const snakeDir = LEFT;

function canvasReset() {
    canvas.width = width;
    canvas.height = height;
}

function snakeDraw() {
    ctx.fillStyle = "green";

    snakeBody.forEach(([x, y]) => {
        ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
    });
}

function snakeMove(){
    const [x, y] = snakeBody[0];
    let snakeHead;
    switch(snakeDir){
        case RIGHT: snakeHead = [x + 1, y]; break;
        case DOWN: snakeHead = [x + 1, y + 1]; break;
        case LEFT: snakeHead = [x - 1, y]; break;
        case UP: snakeHead = [x, y - 1]; break;
    }
    snakeBody.pop();
    snakeBody.unshift(snakeHead);
}

function runFrame() {
    canvasReset();
    snakeDraw();
    snakeMove();
}

setInterval(runFrame, 1000);
