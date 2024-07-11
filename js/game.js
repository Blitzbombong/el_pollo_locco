let canvas;
let world;
let keyboard = new Keyboard();

/**
 * 
 */
function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
   
    console.log('My charactet is', world.keyboard.event);
}


