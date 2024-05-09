let canvas;
let world;
let keyboard = new Keyboard();

/**
 * 
 */
function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
   
    console.log('My charactet is', world.character);
}


/**
 * @param {object} Keyboard - keydown is pressed {true}; 
 */
window.addEventListener("keydown", (event) => {
    switch (event.code) {
        case 37:
            this.LEFT = true;
            break;
        case 39:
            this.RIGHT = true;
            break;
        case 38:
            this.UP = true;
            break;
        case 40:
            this.DOWN = true;
            break;
        case 32:
            this.SPACE = true;
            break;
    }
});


/**
 * @param {object} Keyboard - keyup is not pressed {false}
 */
window.addEventListener("keyup", (event) => {
    switch (event.code) {
        case 37:
            this.LEFT = false;
            break;
        case 39:
            this.RIGHT = false;
            break;
        case 38:
            this.UP = false;
            break;
        case 40:
            this.DOWN = false;
            break;
        case 32:
            this.SPACE = false;
            break;
    }
});