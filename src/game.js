import * as g from './globals.js';
import Tile from './tile.js';

class Game {
	constructor(w, h, numMines) {
		this.w = w;
		this.h = h;

		this.field = Array();
		for (let y = 0; y < h; y++) {
			this.field.push(Array());
			for (let x = 0; x < w; x++) {
				this.field[y].push(new Tile(g.tile.empty, x, y));
			}
		}
	}

	draw(ctx) {
		for (let y = 0; y < this.h; y++) {
			for (let x = 0; x < this.w; x++) {
				this.field[y][x].draw(ctx);
			}
		}

	}
}

export default Game;
