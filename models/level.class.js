class Level {
  enemies;
  clouds;
  backgrounds;
  level_end_x = 3650;

  constructor(x, y, z, i, d) {
    this.enemies = x;
    this.clouds = y;
    this.backgrounds = z;
    this.coints = i;
    this.bottle = d;
  }
}
