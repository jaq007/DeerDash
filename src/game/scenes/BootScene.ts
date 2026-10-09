import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {

    constructor() {
        super('BootScene');
    }

    // ==========================================
    // LOAD GAME ASSETS
    // ==========================================

    preload() {

        // Forest background
        this.load.image(
            'forest-background',
            '/assets/backgrounds/forest-night.png'
        );

        // Main character
        this.load.image(
            'deer',
            '/assets/characters/deer.png'
        );

    }

    // ==========================================
    // CREATE MAIN MENU
    // ==========================================

    create() {

        const width = 1280;
        const height = 720;

        // ==========================================
        // BACKGROUND
        // ==========================================

        const background = this.add.image(
            width / 2,
            height / 2,
            'forest-background'
        );

        // Scale background proportionally to cover
        // the entire game screen without distortion

        const backgroundScale = Math.max(
            width / background.width,
            height / background.height
        );

        background.setScale(backgroundScale);
        background.setDepth(0);

        // ==========================================
        // DARK OVERLAY
        // ==========================================

        this.add.rectangle(
            width / 2,
            height / 2,
            width,
            height,
            0x000000,
            0.25
        ).setDepth(1);

        // ==========================================
        // GAME TITLE
        // ==========================================

        this.add.text(
            width / 2,
            110,
            'DEERDASH',
            {
                fontFamily: 'Arial',
                fontSize: '90px',
                fontStyle: 'bold',
                color: '#ffffff',
                stroke: '#102b23',
                strokeThickness: 12,
                shadow: {
                    offsetX: 5,
                    offsetY: 5,
                    color: '#000000',
                    blur: 10,
                    fill: true
                }
            }
        )
            .setOrigin(0.5)
            .setDepth(3);

        // ==========================================
        // SUBTITLE
        // ==========================================

        this.add.text(
            width / 2,
            190,
            'A Forest Adventure',
            {
                fontFamily: 'Arial',
                fontSize: '28px',
                color: '#d8ead1',
                stroke: '#000000',
                strokeThickness: 3
            }
        )
            .setOrigin(0.5)
            .setDepth(3);

        // ==========================================
        // DEER CHARACTER
        // ==========================================

        const deer = this.add.image(
            640,
            480,
            'deer'
        );

        // Maintain original proportions
        const deerHeight = 420;

        const deerScale = deerHeight / deer.height;

        deer.setScale(deerScale);

        deer.setDepth(2);

        
        // ==========================================
        // START GAME BUTTON
        // ==========================================

        // Button background
        const startButton = this.add.rectangle(
            950,
            480,
            260,
            65,
            0x214d3b
        );

        startButton.setStrokeStyle(3, 0x9bd47a);
        startButton.setDepth(4);

        // Enable interaction
        startButton.setInteractive({
            useHandCursor: true
        });

        // Button text
        const startText = this.add.text(
            950,
            480,
            'START GAME',
            {
                fontFamily: 'Arial',
                fontSize: '30px',
                fontStyle: 'bold',
                color: '#ffffff'
            }
        );

        startText.setOrigin(0.5);
        startText.setDepth(5);

        // Hover effect
        startButton.on('pointerover', () => {
            startButton.setFillStyle(0x3f8056);
            startButton.setScale(1.05);
            startText.setScale(1.05);
        });

        // Restore button
        startButton.on('pointerout', () => {
            startButton.setFillStyle(0x214d3b);
            startButton.setScale(1);
            startText.setScale(1);
        });

        // Click event
        startButton.on('pointerdown', () => {
            console.log('START GAME clicked!');
        });
        // ==========================================
        // DEVELOPMENT VERSION
        // ==========================================

        this.add.text(
            20,
            690,
            'DeerDash - Development Build 0.2',
            {
                fontFamily: 'Arial',
                fontSize: '16px',
                color: '#ffffff',
                stroke: '#000000',
                strokeThickness: 3
            }
        )
            .setDepth(3);

    }
}