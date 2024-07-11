const level1 = new Level(
    [/*  
        new Endboss(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),*/
    ],
    [
        new Clouds('img/5_background/layers/4_clouds/1.png', 150),
        new Clouds('img/5_background/layers/4_clouds/2.png', 300),
        new Clouds('img/5_background/layers/4_clouds/1.png', 700),
        new Clouds('img/5_background/layers/4_clouds/2.png', 1400),
        new Clouds('img/5_background/layers/4_clouds/1.png', 2200),
        new Clouds('img/5_background/layers/4_clouds/2.png', 2800)
    ],
    [
        new Coins(400, 300, 50, 50),
            new Coins(500, 300, 50, 50),
            new Coins(600, 300, 50, 50),
            new Coins(950, 200, 50, 50),
            new Coins(1020, 150, 50, 50),
            new Coins(1090, 200, 50, 50),
            new Coins(1600, 160, 50, 50),
            new Coins(1700, 220, 50, 50),
            new Coins(1800, 280, 50, 50),
            new Coins(2900, 180, 200, 200)
    ],
    [
        new SalsaBottle(250, 350, 80, 80, 'img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
        new SalsaBottle(250, 350, 80, 80, 'img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
        new SalsaBottle(250, 350, 80, 80, 'img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
        new SalsaBottle(250, 350, 80, 80, 'img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
        new SalsaBottle(250, 350, 80, 80, 'img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
        new SalsaBottle(250, 350, 80, 80, 'img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
        new SalsaBottle(250, 350, 80, 80, 'img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
        new SalsaBottle(250, 350, 80, 80, 'img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
        new SalsaBottle(250, 350, 80, 80, 'img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
        new SalsaBottle(250, 350, 80, 80, 'img/6_salsa_bottle/1_salsa_bottle_on_ground.png')
    ],
    [
        new Endboss()
    ],
    [
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
    ]
);