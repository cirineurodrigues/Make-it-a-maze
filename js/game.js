import Player from './player';

const canvas = document.getElementById('mia-canvas');
const ctx = canvas.getContext('2d');

export default class Game {
  constructor() {
    this.width = 640;
    this.height = 480;
    canvas.width = this.width;
    canvas.height = this.height;
    this.player = new Player();
  }

  start = () => {
    console.log('Game Start');
    ctx.clearRect(0, 0, this.width, this.height);
    this.player.draw(ctx);
  };

  animate = (action) => {
    ctx.clearRect(0, 0, this.width, this.height);
    this.player.setAction(action);
    this.player.update(canvas);
    this.player.draw(ctx);
  };
}
