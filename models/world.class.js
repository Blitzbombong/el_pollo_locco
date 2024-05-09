class World {
    character = new Cahracter();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken()
    ];

    clouds = [
        new Clouds('img/5_background/layers/4_clouds/1.png'),
        new Clouds('img/5_background/layers/4_clouds/2.png'),
        new Clouds('img/5_background/layers/4_clouds/1.png'),
        new Clouds('img/5_background/layers/4_clouds/2.png'),
        new Clouds('img/5_background/layers/4_clouds/1.png'),
        new Clouds('img/5_background/layers/4_clouds/2.png')
    ];

    coins = [
        new Coins(),
        new Coins(),
        new Coins(),
        new Coins(),
        new Coins(),
        new Coins()
    ];

    salsaBottle = [
        new SalsaBottle(),
        new SalsaBottle(),
        new SalsaBottle(),
        new SalsaBottle(),
        new SalsaBottle(),
        new SalsaBottle(),
        new SalsaBottle(),
        new SalsaBottle(),
        new SalsaBottle(),
        new SalsaBottle()

    ];

    backgroundObject = [
        new BackgroundObject('img/5_background/layers/air.png', -719),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', -719),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', -719),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', -719),

        new BackgroundObject('img/5_background/layers/air.png', 0),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0),

        new BackgroundObject('img/5_background/layers/air.png', 719),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719),

        new BackgroundObject('img/5_background/layers/air.png', 719 * 2),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 2),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 2),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 2),

        new BackgroundObject('img/5_background/layers/air.png', 719 * 3),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 3),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 3),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 3)
    ];



    canvas;
    ctx;
    keyboard;
    camera_x = -100;

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

        this.addObjectsToMap(this.backgroundObject);
        this.addObjectsToMap(this.clouds);
        this.addObjectsToMap(this.coins);
        this.addObjectsToMap(this.salsaBottle);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);
       
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