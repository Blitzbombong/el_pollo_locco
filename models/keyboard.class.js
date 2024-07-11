class Keyboard {
  LEFT = false;
  RIGHT = false;
  SPACE = false;
  UP = false;
  DOWN = false;
  THROW = false;

  constructor() {
    this.keyPressCommands();
  }

  keyPressCommands() {
    window.addEventListener("keydown", (event) => {
      if (event.keyCode === 39) {
        keyboard.RIGHT = true;
      }

      if (event.keyCode === 37) {
        keyboard.LEFT = true;
      }

      if (event.keyCode === 38) {
        keyboard.UP = true;
      }

      if (event.keyCode === 40) {
        keyboard.DOWN = true;
      }

      if (event.keyCode === 32) {
        keyboard.SPACE = true;
      }

      if (event.keyCode === 83) {
        keyboard.THROW = true;
      }
    });

    window.addEventListener("keyup", (event) => {
      if (event.keyCode === 39) {
        keyboard.RIGHT = false;
      }

      if (event.keyCode === 37) {
        keyboard.LEFT = false;
      }

      if (event.keyCode === 38) {
        keyboard.UP = false;
      }

      if (event.keyCode === 40) {
        keyboard.DOWN = false;
      }

      if (event.keyCode === 32) {
        keyboard.SPACE = false;
      }

      if (event.keyCode === 83) {
        keyboard.THROW = false;
      }
    });
  }
}
