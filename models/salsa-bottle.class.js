class SalsaBottle extends MovableObject {

    width = 50;
    height = 70;
    y = 360;
    
    constructor(imagePath){
        super().loadImage(imagePath);
        

        this.x = 200 + Math.random() * 2101; 

    }

    
}