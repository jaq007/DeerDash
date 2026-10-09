import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene');
  }

  create() {
   const width = 1280;

    // Night sky
    this.cameras.main.setBackgroundColor('#101827');

    // Moon
    this.add.circle(1050, 130, 65, 0xf5f3ce);

    // Stars
    for (let i = 0; i < 70; i++) {
      const x = Phaser.Math.Between(0, width);
      const y = Phaser.Math.Between(0, 450);

      this.add.circle(x, y, 2, 0xffffff, 0.8);
    }

    // Background forest
    for (let i = 0; i < 16; i++) {
      const x = i * 90;

      this.add.rectangle(
        x,
        480,
        30,
        230,
        0x263c35
      );

      this.add.triangle(
        x,
        260,
        -65,
        160,
        65,
        160,
        0,
        -90,
        0x1e493b
      );
    }

    // Ground
    this.add.rectangle(
      width / 2,
      660,
      width,
      120,
      0x385b36
    );

    // Grass
    this.add.rectangle(
      width / 2,
      605,
      width,
      15,
      0x63a348
    );

    // Game title
    this.add.text(
      width / 2,
      230,
      'DEERDASH',
      {
        fontFamily: 'Arial',
        fontSize: '96px',
        color: '#ffffff',
        fontStyle: 'bold',
        stroke: '#173c2d',
        strokeThickness: 10
      }
    ).setOrigin(0.5);

    // Subtitle
    this.add.text(
      width / 2,
      325,
      'A Forest Adventure',
      {
        fontFamily: 'Arial',
        fontSize: '30px',
        color: '#d6e9c6'
      }
    ).setOrigin(0.5);

    // Welcome message
    this.add.text(
      width / 2,
      480,
      'Welcome to DeerDash!',
      {
        fontFamily: 'Arial',
        fontSize: '28px',
        color: '#ffffff'
      }
    ).setOrigin(0.5);

    // Version
    this.add.text(
      20,
      690,
      'DeerDash - Development Build 0.1',
      {
        fontFamily: 'Arial',
        fontSize: '16px',
        color: '#ffffff'
      }
    );
  }
}