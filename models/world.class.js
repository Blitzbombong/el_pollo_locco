class World {
    character = new Cahracter();
    enemies = level1.enemies;
    clouds = level1.clouds;
    coins = level1.coins;
    salsaBottle = level1.salsaBottle;
    backgroundObject = level1.backgroundObject;
   


    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    

    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }


    setWorld() {
        this.character.world = this;
    }


    draw(){

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height) // Clear the Canvas.

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObject);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.salsaBottle);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
       
        this.ctx.translate(-this.camera_x, 0);
        
        // Draw wird immer wieder neu aufgerufen, so viel wie die Graphik Karte her gibt ... 30 mal pro sekunde.
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
        
    }

    addObjectsToMap(objects){
        objects.forEach(o =>{
            this.addToMap(o);
        });
    }


    addToMap(mo) {
        // Bild Spiegeln
        if(mo.otherDirection) {
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
        }

        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        // Bild wieder zuruck setzen
        if(mo.otherDirection) {
            mo.x = mo.x * -1;
            this.ctx.restore();
        }
    };
}