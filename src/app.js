import { Application, Graphics, Text, Ticker, Container } from 'pixi.js';
import "./mousedetection";

// colors https://clrs.cc/

const app = new Application({
  autoResize: true,
  resolution: devicePixelRatio ,
  antialias: true,
  transparent: true,
  resolution: 1,
});

let ticker = Ticker.shared;
ticker.autoStart = false;
const container = new Container();
//app.stage.addChild(container);


const createBar = (height) => {
  const rect = new Graphics()
	.beginFill(0xFFDC00)
  .drawRect(-100, -100, 200, 8);
  return rect;
}


container.x = 100;
container.y = 100;


let renderer = app.renderer;
const MAX_SIZE= 250;
var cHeight = MAX_SIZE;

ticker.add((delta) => {

  container.x = window.latestEvent.pageX;
  const bar = createBar(window.latestEvent.pageX);

  container.addChild(bar);

  // render our stage (render all objects from containers added to stage)
  // see https://pixijs.download/dev/docs/PIXI.Ticker.html#.shared
  renderer.render(app.stage);

  // Remove red hp bar from our container:
  // We do this because on next tick (aka: next frame) we will create new redHpBar with "createHpBar" (as you see above)
  container.removeChild(bar);

  // Update current hp amount:
  if (cHeight > 0) {
    cHeight -= 1;
  } else {
    cHeight = MAX_SIZE;
  }
});

// start rendering loop:
//ticker.start();

//let text = new Text('atekton',{fontFamily : 'sourcecodepro-medium', fontSize: 24, fill : 0x030303, align : 'center'});
//app.stage.addChild(text);
/*
window.addEventListener('resize', resize);

//App.view is a canvas element, which is attached to the page
//document.body.appendChild(app.view);

// Resize function window
function resize() {
	// Resize the renderer
	app.renderer.resize(window.innerWidth, window.innerHeight);
  
  // You can use the 'screen' property as the renderer visible
  // area, this is more useful than view.width/height because
  // it handles resolution
  //bar.position.set(app.screen.width, app.screen.height);
}

resize();
*/
