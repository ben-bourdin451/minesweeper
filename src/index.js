import * as g from './globals.js';
import Game from './game.js';
import '../static/style.css';

const urlParams = new URLSearchParams(window.location.search);
function createCanvas() {
	let el = document.createElement('canvas');
	el.setAttribute("id", "screen");
	el.setAttribute("width", g.tileW * g.numTilesX);
	el.setAttribute("height", g.tileH * g.numTilesY);

	if (urlParams.has("w")) {
		el.setAttribute("style", `width: ${urlParams.get("w")}px;`);
	}

	return el;
}

document.body.appendChild(createCanvas());

let screen = document.getElementById("screen");
let ctx = screen.getContext("2d");
ctx.font = "15px sans-serif";

const game = new Game(g.numTilesX, g.numTilesY, 2);
const draw = () => {
	ctx.clearRect(0, 0, screen.width, screen.height);
	game.draw(ctx);
};

window.onload = (e) => {
	draw();
};

window.addEventListener("mousedown", e => {
	// left click --> set current mouse state as 'pressed'
	// right click --> start putting flags (mouse drag)
});

window.addEventListener("mousemove", e => {
	// left click --> change which button looks pressed
	// right click --> set current x, y as flagged
});

window.addEventListener("mouseup", e => {
	// main logic for pressing buttons
});
