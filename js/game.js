let canvas;
let world;
let keyboard = new Keyboard();
let fullscreen = false;
let divCanvas = document.getElementById("divCanvas");

let gameAudio = new Audio();
gameAudio.src = "audio/game_sound.mp3";
gameAudio.loop = true;
let soundOn = false;
let tip = new Audio();
tip.src = "audio/music.mp3";

function startGame() {
  tip.play();
  document.getElementById('startButton').classList.add('d-none');
  document.getElementById('startImage').classList.add('d-none');
  document.getElementsByClassName("bi-controller")[0].style.visibility = "hidden";
  initLevel();
  canvas = document.getElementById('canvas');
  world = new World(canvas, keyboard);
  addMobileControlPanel();
  console.log('My Charakter is', world.character);

}


//inject mobile control panel into DOM for mobile gaming
function addMobileControlPanel() {
  let divCanvas = document.getElementById('divCanvas');
  divCanvas.append(addMobileControlPanelTemplate());
  addEventListenersToPanel();
}

//HTML templates
function addMobileControlPanelTemplate() {
  let panel = document.createElement("div");
  panel.classList.add("mobile-control-panel");
  panel.innerHTML = /*html*/ `
        <div class="mobileControl">
          <i class="mobileControlButton bi bi-arrow-left-square" id="left"></i>
          <i class="mobileControlButton bi bi-arrow-right-square" id="right"></i>
        </div>
        <div class="mobileControlButton mobileControl">
          <i class="mobileControlButton bi bi-arrow-bar-up" id="jump"></i>
          <i class="mobileControlButton bi bi-fire" id="throw"></i>
        </div>
  `;
  return panel
}


function addEventListenersToPanel() {
  const throW = document.getElementById("throw");
  const jump = document.getElementById("jump");
  const left = document.getElementById("left");
  const right = document.getElementById("right");

  left.addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.LEFT = true;
  });

  left.addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.LEFT = false;
  });

  right.addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.RIGHT = true;
  });

  right.addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.RIGHT = false;
  });

  jump.addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.SPACE = true;
  });

  jump.addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.SPACE = false;
  });

  throW.addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.THROW = true;
  });

  throW.addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.THROW = false;
  });
}

//settings the tastatur by keydown
window.addEventListener("keydown", (e) => {
  if (e.keyCode == 39) {
    keyboard.RIGHT = true;
  }

  if (e.keyCode == 37) {
    keyboard.LEFT = true;
  }

  if (e.keyCode == 38) {
    keyboard.UP = true;
  }

  if (e.keyCode == 40) {
    keyboard.DOWN = true;
  }

  if (e.keyCode == 32) {
    keyboard.SPACE = true;
  }

  if (e.keyCode == 83) {
    keyboard.THROW = true;
  }

  console.log(e);
});

//settings the tastatur by keyup
window.addEventListener("keyup", (e) => {
  if (e.keyCode == 39) {
    keyboard.RIGHT = false;
  }

  if (e.keyCode == 37) {
    keyboard.LEFT = false;
  }

  if (e.keyCode == 38) {
    keyboard.UP = false;
  }

  if (e.keyCode == 40) {
    keyboard.DOWN = false;
  }

  if (e.keyCode == 32) {
    keyboard.SPACE = false;
  }

  if (e.keyCode == 83) {
    keyboard.THROW = false;
  }
});

function fullScreen() {
  let divCanvas = document.getElementById("divCanvas");
  canvas = document.getElementById("canvas");

  if (!fullscreen && window.innerHeight > 480) {
    divCanvas.requestFullscreen();
    fullscreen = true;
    canvas.classList.add("fullscreen");
  } else if (!fullscreen && window.innerHeight > 480) {
    document.documentElement.requestFullscreen();
    fullscreen = true;
  } else {
    document.exitFullscreen();
  }
}

document.addEventListener("fullscreenchange", (event) => {
  if (!document.fullscreenElement) {
    fullscreen = false;
    canvas.classList.remove("fullscreen");
  }
});

function renderGameOver() {
  document.getElementById("gameOver").style.display = "flex";
  delete world;
  canvas.style.display = "none";
  document.getElementsByClassName("icon-container")[0].style.display = "none";
  if (fullscreen) {
    document.getElementById("gameOver").classList.add("fullscreen");
  }
  if (window.innerHeight < 480) {
    document.getElementsByClassName("mobile-control-panel")[0].style.display =
      "none";
  }
}

function backToMenuButton() {
  window.location.reload();
  tip.play();
  setTimeout(() => {
    document.getElementById("gameOver").classList.add("d-none");
  }, 2000);
}

function infoGame() {
  tip.play();
  document.getElementById("gameInfo").classList.remove("d-none");
}

function closeInfo() {
  tip.play();
  document.getElementById("gameInfo").classList.add("d-none");
}

function playSound() {
  let icon = document.getElementById("playGameSound");
    if (soundOn) {
      icon.classList.remove("bi-volume-up-fill");
      icon.classList.add("bi-volume-mute");
      gameAudio.pause();
      soundOn = false;
    } else {
      icon.classList.remove("bi-volume-mute");
      icon.classList.add("bi-volume-up-fill"); 
      gameAudio.play();
      soundOn = true;
    }
}