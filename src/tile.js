import * as g from './globals.js';
import spriteSheet from '../static/sprite_sheet.png';

const sheet = new Image(167, 82);
sheet.src = spriteSheet;

const sprites = {
	1: {x: 0, y: 66},
	2: {x: 17, y: 66},
	3: {x: 34, y: 66},
	4: {x: 51, y: 66},
	5: {x: 68, y: 66},
	6: {x: 85, y: 66},
	7: {x: 102, y: 66},
	8: {x: 119, y: 66},
};
sprites[g.tile.covered] = {x: 0, y: 49};
sprites[g.tile.empty] = {x: 17, y: 49};
sprites[g.tile.flag] = {x: 34, y: 49};
sprites[g.tile.mark] = {x: 51, y: 49};
sprites[g.tile.markPressed] = {x: 68, y: 49};
sprites[g.tile.mine] = {x: 85, y: 49};
sprites[g.tile.mineExploded] = {x: 102, y: 49};
sprites[g.tile.mineCrossed] = {x: 119, y: 49};

export default class Tile {
	constructor(type, x, y) {
		this.x = x;
		this.y = y;
		this.type = type;
		this.covered = true;
	}

	uncover() {
		this.covered = false;
	}

	draw(ctx) {
		let t = sprites[this.type];
		if (this.covered) {
			t = sprites[g.tile.covered];
		}

		ctx.drawImage(sheet, t.x, t.y, g.tileW, g.tileH, this.x*g.tileW, this.y*g.tileH, g.tileW, g.tileH);
	}
}
