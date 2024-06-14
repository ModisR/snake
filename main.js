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

canvas.width = width;
canvas.height = height;

ctx.fillStyle = "green";

snakeBody.forEach(([x, y]) => {
    ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
});
