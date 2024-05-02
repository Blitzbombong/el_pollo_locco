class World {
    character = new Cahracter();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken()
    ];

    clouds = [
        new Clouds(),
        new Clouds()
    ];

    backgroundObject = [
        new BackgroundObject('img/5_background/layers/air.png', 0),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0)
    ];

    canvas;
    ctx;

    constructor(canvas){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }


    draw(){

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height) // Clear the Canvas.

        this.addObjectsToMap(this.backgroundObject);
        this.addObjectsToMap(this.clouds);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);
       

        
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
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    };
}