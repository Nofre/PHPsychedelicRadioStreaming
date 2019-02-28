var app = new PIXI.Application(window.innerWidth, window.innerHeight);
document.querySelector("#background").appendChild(app.view);

app.stage.interactive = true;

var container = new PIXI.Container();
app.stage.addChild(container);

for (var i = 1; i <= NUM_IMAGES;  i++) {
	PIXI.loader.add('img' + i, '/imgs/img' + i + '.jpg')
}

PIXI.loader.load(setup)

function setup() {

	var displacementSprite = new PIXI.Sprite.from('/imgs/displacement_map_repeat.jpg');
	// Make sure the sprite is wrapping.
	displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
	var displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
	displacementFilter.padding = 10;

	displacementSprite.position = container.position;

	app.stage.addChild(displacementSprite);

	displacementFilter.scale.x = 30;
	displacementFilter.scale.y = 60;

	for (let img in PIXI.loader.resources) {
		img = new PIXI.Sprite(PIXI.loader.resources[img].texture)
		container.addChild(img)
		img.anchor.set(0.5);
		img.x = (app.renderer.width / 2);
		img.y = (app.renderer.height / 2);

		img.filters = [displacementFilter];
	}

	app.ticker.add(function() {
		// Offset the sprite position to make vFilterCoord update to larger value. Repeat wrapping makes sure there's still pixels on the coordinates.
		displacementSprite.x++;
		// Reset x to 0 when it's over width to keep values from going to very huge numbers.
		if(displacementSprite.x > displacementSprite.width)
			displacementSprite.x = 0;
	});
	setInterval(function() {

		let randomImage = container.children[Math.floor(container.children.length * Math.random())];
		for (let i = 0; i < container.children.length; ++i) {
			container.children[i].visible = false;
		}
		container.children[container.children.indexOf(randomImage)].visible = true;
	}, 2000)
}


window.addEventListener("resize", function() {
	app.renderer.resize(window.innerWidth, window.innerHeight);
});