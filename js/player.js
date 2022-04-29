import Eve from '../assets/images/eve.png';

export default class Player {
  constructor() {
    this.width = 30;
    this.height = 60;
    this.xSpeed = this.width;
    this.ySpeed = this.height;
    this.x = 0;
    this.y = 0;
    this.charImg = new Image(30, 60);
    this.charImg.src = Eve;
    this.action = 'right';
  }

  draw = (ctx) => {
    ctx.drawImage(this.charImg, this.x, this.y, this.width, this.height);
  };

  animateRight = (canvas) => {
    if (this.x < canvas.width) {
      this.x += this.xSpeed;
    } else {
      this.x = 0 - (this.width / 2);
    }
  };

  animateLeft = (canvas) => {
    if (this.x < 0 - (this.width / 2)) {
      this.x = canvas.width - (this.width / 2);
    } else {
      this.x -= this.xSpeed;
    }
  };

  animateUp = (canvas) => {
    if (this.y < 0 - (this.height / 2)) {
      this.y = canvas.height - (this.height / 2);
    } else {
      this.y -= this.ySpeed;
    }
  };

  animateDown = (canvas) => {
    if (this.y < canvas.height) {
      this.y += this.ySpeed;
    } else {
      this.y = 0 - (this.height / 2);
    }
  };

  update = (canvas) => {
    const actions = {
      left: this.animateLeft,
      right: this.animateRight,
      up: this.animateUp,
      down: this.animateDown,
    };
    actions[this.action](canvas);
  };

  setAction = (action) => {
    this.action = action;
  };
}
