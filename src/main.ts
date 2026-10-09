import Phaser from 'phaser';
import BootScene from './game/scenes/BootScene';
import './style.css';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,

  width: 1280,
  height: 720,

  parent: 'game-container',

  backgroundColor: '#101827',

  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },

  physics: {
    default: 'arcade',

    arcade: {
      gravity: {
        x: 0,
        y: 900
      },

      debug: false
    }
  },

  scene: [
    BootScene
  ]
};

new Phaser.Game(config);