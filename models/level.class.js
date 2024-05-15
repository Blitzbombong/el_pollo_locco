class Level {
    enemies;
    clouds;
    backgroundObject;
    coins;
    salsaBottle;
    endboss;
    level_end_x = 2250;
    

    constructor (enemies, clouds, coins, salsaBottle, endboss, backgroundObject ) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObject = backgroundObject;
        this.coins = coins;
        this.salsaBottle = salsaBottle;
        this.endboss = endboss;
    }
}