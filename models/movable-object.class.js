class MovableObject {
    x = 150;
    y = 300;
    img;
    height = 100;
    width = 100;


    // loadImage('img/test.png')
    loadImage(path) {
        this.img = new Image(); // das geleiche ist das - this.img = document.getElementById('image') <img id="image" src>
        this.img.src = path;
    }

    moveRight() {
        console.log('Moving right')
    }

    moveLeft(){
        
    }
    

    
}