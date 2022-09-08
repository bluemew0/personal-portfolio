let config = {
    type: Phaser.CANVAS,
    width: 1136,
    height: 640,
    scene: [Title],
    parent: "phaser-game"
};

let tap, spacebar;

let game = new Phaser.Game(config);
