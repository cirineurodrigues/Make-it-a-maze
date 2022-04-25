import '../scss/styles.scss';
import Game from './game';

const game = new Game();

const gameEventListener = (e) => {
  const keyPressed = e.key;

  const selectDirection = {
    ArrowRight: () => game.animate('right'),
    ArrowLeft: () => game.animate('left'),
    ArrowUp: () => game.animate('up'),
    ArrowDown: () => game.animate('down'),
  };

  const selectedAction = selectDirection[keyPressed];

  if (selectedAction) {
    selectedAction();
  }
};

window.onload = () => {
  game.start();
  window.addEventListener('keydown', gameEventListener);
};
