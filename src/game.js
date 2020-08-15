import * as g from './globals.js';
import {draw as drawTile} from './tile.js';

class Game {
	constructor(w, h, numMines) {
		this.w = w;
		this.h = h;

		this.field = Array();
		for (let y = 0; y < h; y++) {
			this.field.push(Array());
			for (let x = 0; x < w; x++) {
				this.field[y].push(g.tile.covered);
			}
		}
		this.field[4][7] = g.tile.mine;
	}

	draw(ctx) {
		for (let y = 0; y < this.h; y++) {
			for (let x = 0; x < this.w; x++) {
				drawTile(ctx, this.field[y][x], x, y);
			}
		}

	}
}

export default new Game(g.numTilesX, g.numTilesY, 2);
