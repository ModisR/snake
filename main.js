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

const EAST = 0;
const SOUTH = 1;
const WEST = 2;
const NORTH = 3;

const snakeDir = WEST;

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
        case EAST: snakeHead = [(x + 1) % tilesX, y]; break;
        case SOUTH: snakeHead = [x, (y + 1) % tilesY]; break;
        case WEST: snakeHead = [(x + tilesX - 1) % tilesX, y]; break;
        case NORTH: snakeHead = [x, (y + tilesY - 1) % tilesY]; break;
    }
    snakeBody.pop();
    snakeBody.unshift(snakeHead);
}

function runFrame() {
    canvasReset();
    snakeDraw();
    snakeMove();
}

setInterval(runFrame, 500);
