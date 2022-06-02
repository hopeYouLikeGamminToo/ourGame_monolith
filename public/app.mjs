import { Application, Sprite, Loader } from './pixi.mjs';

// Pixi's App
const app = new Application({
	width: 256,
	height: 256,
	antialias: true,
	resolution: 1,
});

// Adds Pixi's generated canvas to the HTML document' body
document.body.appendChild(app.view);

// Sets app to window size and to change size with window
app.renderer.backgroundColor = 0xffffff;
app.renderer.view.style.position = 'absolute';
app.renderer.view.style.display = 'block';
app.renderer.autoDensity = true;
app.resizeTo = window;

// load an image and run the `setup` function when it's done
Loader.shared.add(['images/triangle.png']).load(setup);

//This `setup` function will run when the image has loaded
function setup() {
	// Create the triangle sprite
	const triangle = new Sprite(
		Loader.shared.resources['images/triangle.png'].texture
	);

	triangle.position.set(50, 50);
	triangle.width = 100;
	triangle.height = 100;

	// Add the triangle to the stage
	app.stage.addChild(triangle);
}

// app.loader.add('alien', 'alien.png').load((loader, resources) => {
// 	// This creates a texture from a 'bunny.png' image
// 	const alien = new Sprite(resources.bunny.texture);

// 	// Setup the position of the bunny
// 	alien.x = app.renderer.width / 8;
// 	alien.y = app.renderer.height / 8;

// 	// Rotate around the center
// 	alien.anchor.x = 0.5;
// 	alien.anchor.y = 0.5;

// 	// Add the bunny to the scene we are building
// 	app.stage.addChild(alien);

// 	// Listen for frame updates
// 	app.ticker.add(() => {
// 		// each frame we spin the bunny around a bit
// 		alien.rotation += 0.01;
// 	});
// });
