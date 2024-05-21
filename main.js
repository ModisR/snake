const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');

const tileSize = 32;
const tilesX = 24;
const tilesY = 16;

const width = tilesX * tileSize;
const height = tilesY * tileSize;

canvas.width = width;
canvas.height = height;


const headImage = document.createElement("img");
headImage.src = "/assets/head.gif";

headImage.onload = () => {
    ctx.drawImage(headImage, 0, 0);
};
