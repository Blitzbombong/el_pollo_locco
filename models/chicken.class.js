class Chicken extends MovableObject {
    width = 50;
    height = 50;
    y = 380;


    constructor(){
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png')

        this.x = 200 + Math.random() * 500; // Plaziert die Chiken auf zufahlige Psition was das Math.random ausrechnet.
    }


}