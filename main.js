const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');

const tileSize = 32;
const tilesX = 24;
const tilesY = 16;

const width = tilesX * tileSize;
const height = tilesY * tileSize;

canvas.width = width;
canvas.height = height;


ctx.moveTo(0, 0);
ctx.lineTo(width, height);

ctx.moveTo(0, height);
ctx.lineTo(width, 0);

ctx.stroke();
