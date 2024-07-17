class Level {
  enemies;
  clouds;
  backgroundObject;
  level_end_x = 3650;

  constructor(x, y, z, i, d) {
    this.enemies = x;
    this.clouds = y;
    this.backgroundObject = z;
    this.coints = i;
    this.bottle = d;
  }
}
