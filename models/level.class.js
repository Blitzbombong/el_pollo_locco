class Level {
  enemies;
  clouds;
  backgroundObject;
  level_end_x = 2250;

  constructor(enemies, clouds, coins, salsaBottle, backgroundObject) {
    this.enemies = enemies;
    this.clouds = clouds;
    this.backgroundObject = backgroundObject;
    this.coins = coins;
    this.salsaBottle = salsaBottle;
  }
}
