const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');

const tileSize = 32;
const tilesX = 24;
const tilesY = 16;

const width = tilesX * tileSize;
const height = tilesY * tileSize;

canvas.width = width;
canvas.height = height;

var snakePos = [
    [12, 7],
    [11, 7]
];

const headImage = document.createElement("img");
headImage.src = "/assets/head.gif";

const bodyImage = document.createElement("img");
bodyImage.src = "/assets/body.gif";

headImage.onload = () => {
    bodyImage.onload = () => {

        snakePos.forEach(([x, y], idx) => {

            const img = idx? bodyImage: headImage;

            ctx.drawImage(img, x * tileSize, y * tileSize);
        });
    };
};
