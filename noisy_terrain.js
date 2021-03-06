function setup() {
	createCanvas(950, 600);
	background("black");
	noStroke();
	colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
	background("black");
	draw_terrain(random(-5, 5), random(-5, 5));
}

function draw_terrain(xr, yr) {
	for (var x = 100; x < 500; x = x + 10) {
		for (var y = 100; y < 500; y = y + 10) {
			let x2 = x + y / 2 + xr;
			let h = 200 * noise(x / 200, y / 200);
			h += 30 * noise(x / 50, y / 50);
			let y2 = y + h - 100 + xr;

			fill((map(h, 0, 230, 0, 360) + 10) % 360, 80, map(h, 0, 230, 100, 50), 90);
			circle(x2, y2, 2);
		}
	}
}
