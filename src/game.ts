import * as Phaser from 'phaser';

export default class BasketBoard extends Phaser.Scene
{
    constructor ()
    {
        super('demo');
    }

    preload ()
    {
        this.load.image('basketball_court', 'assets/basketball_court.jpeg');
        this.load.image('basketball2', 'assets/basketball.png');
        this.load.image('basketball3', 'assets/basketball.png');
    }

    create ()
    {    
        /*
        var ball = this.matter.add.image(Phaser.Math.Between(100, 700), Phaser.Math.Between(-600, 0), 'ball');
        ball.setCircle();
        ball.setFriction(0.005);
        ball.setBounce(1);
        */

        // Basketball court
        const basketball_court = this.add.image(0, 0, 'basketball_court');
        basketball_court.setOrigin(0, 0);

        const left_rim = this.physics.add.staticGroup();
        left_rim.create(650, 450);
        
        // 2pts ball
        const ball2 = this.physics.add.sprite(650, 300, 'basketball2');
        ball2.setScale(0.2);
        ball2.setBounce(0.7);
        ball2.setCollideWorldBounds(true);

        this.physics.add.collider(ball2, left_rim);
        
        // 2pts ball
        const ball3 = this.physics.add.sprite(700, 200, 'basketball3');
        ball3.setScale(0.2);
        ball3.setBounce(0.7);
        ball3.setCollideWorldBounds(true);

        this.physics.add.collider(ball2, ball3);
        this.physics.add.collider(ball3, left_rim);

    }
}

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#125555',
    width: 1300,
    height: 659,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 500 },
            debug: false
        }
    },
    scene: BasketBoard
};

const game = new Phaser.Game(config);
