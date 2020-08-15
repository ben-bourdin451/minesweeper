import * as g from './globals.js';
import spriteSheet from '../static/sprite_sheet.png';

const sheet = new Image(167, 82);
sheet.src = spriteSheet;

const sprites = {};
sprites[g.tile.covered] = {x: 0, y: 49};
sprites[g.tile.mine] = {x: 85, y: 49};

export const draw = (ctx, tile, x, y) => {
	const t = sprites[tile];
	ctx.drawImage(sheet, t.x, t.y, g.tileW, g.tileH, x*g.tileW, y*g.tileH, g.tileW, g.tileH);
};
