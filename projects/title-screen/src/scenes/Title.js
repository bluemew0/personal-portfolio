class Title extends Phaser.Scene {
    constructor() {
        super("Title");
    }

    preload(){
        this.load.image("bg", "./assets/bg.jpg");
        this.load.image("floor", "./assets/bg_floor.png");
        this.load.image("logs", "./assets/bg_logs.png");
        this.load.image("sparkles", "./assets/bg_sparkles.png");
        this.load.image("title", "./assets/title.png");
        this.load.image("Lfairy", "./assets/bg_leftFairy.png");
        this.load.image("Rfairy", "./assets/bg_rightFairy.png");
        this.load.image("rolypoly", "./assets/rolyPoly.png");
    }

    create() {
        // adding bg images
        this.bg = this.add.tileSprite(0, 0, game.config.width, game.config.height, "bg").setOrigin(0);
        this.logs = this.add.tileSprite(0, 0, game.config.width, game.config.height, "logs").setOrigin(0);
        this.add.tileSprite(0, 0, game.config.width, game.config.height, "sparkles").setOrigin(0);
        this.floor = this.add.tileSprite(0, 0, game.config.width, game.config.height, "floor").setOrigin(0);
        this.Lfairy = this.add.image(0, 0, "Lfairy").setOrigin(0);
        this.Rfairy = this.add.image(0, 0, "Rfairy").setOrigin(0);
        this.title = this.add.image(50, 0, "title").setOrigin(0);
        this.rolypoly = this.add.sprite(game.config.width/2, 500, "rolypoly").setScale(0.5).setInteractive();

        // when rolypoly is clicked
        this.rolypoly.on("pointerup", () => {
            // fairy tween
            this.tweens.add({
                targets: this.Lfairy,
                x: -500,
                duration: 600
            })
            this.tweens.add({
                targets: this.Rfairy,
                x: 500,
                duration: 600
            })

            // rolypoly tween
            this.tweens.add({
                targets: this.rolypoly,
                y: -300,
                duration: 600
            })

            // camera fade
            this.time.delayedCall(300, () => {this.cameras.main.fade(300,100,0,100);});

            // title tween
            this.tweens.add({
                targets: this.title,
                y: -500,
                duration: 600,
                onComplete: () => {
                    this.scene.restart();
                }
            })
        })

        this.SCROLL_SPEED = 2; // for parallax
         
        // tweening
        this.tweens.add({
            targets: this.title,
            y: "-= 10",
            repeat: -1,
            yoyo: true
        });
        this.tweens.add({
            targets: this.Lfairy, 
            y: "-= 50",
            repeat: -1,
            yoyo: true
        });
        this.tweens.add({
                targets: this.Rfairy,
                y: "-= 50",
                repeat: -1,
                yoyo: true,
                delay: 250
            })
        this.tweens.add({
            targets: this.rolypoly,
            angle: {from: 0, to: 360},
            repeat: -1
        })
        this.tweens.add({
            targets: this.rolypoly,
            scale: {from: 0.5, to: 0.7},
            yoyo: true,
            repeat: -1
        })

        let menuConfig = {
            fontFamily: 'Arial',
            fontSize: '28px',
            color: 'white',
            align: 'center',
            padding: {
            top: 5,
            bottom: 5,
            },
            fixedWidth: 0
        }

        // title text
        this.add.text(game.config.width/2, 500, "tap here!", menuConfig).setOrigin(0.5);

        spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE); 
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(spacebar)){
            this.scene.start('Play');
        }

        // parallax
        this.bg.tilePositionX += this.SCROLL_SPEED;
        this.logs.tilePositionX += this.SCROLL_SPEED+1;
        this.floor.tilePositionX += this.SCROLL_SPEED+1;
    }
}