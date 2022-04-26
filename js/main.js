import image1 from '../image/imageLeaf.jpg';
import image2 from '../image/imageDirt.jpg';

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let titleSize = 50;

let map = [
  [0, 1, 0, 0, 0, 0, 1, 1, 0, 2],
  [0, 1, 1, 1, 0, 1, 1, 0, 0, 1],
  [0, 0, 0, 0, 0, 1, 1, 0, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 1, 0, 1, 0, 0, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 1, 0],
  [1, 1, 0, 0, 0, 0, 0, 0, 1, 0],
  [1, 1, 0, 0, 0, 0, 0, 0, 1, 0],
];

let collBox = [];
let mapLength = map[0].length;
let mapHeight = map.length;

let leaf = new Image(50, 50);
leaf.src = image1;

let pavement = new Image(50, 50);
pavement.src = image2;

function drawMap(m) {
  for (i = 0; i < m.length; i++) {
    collBox.push([]);
    for (j = 0; j < m[i].length; j++) {
      if (m[i][j] === 1) {
        context.beginPath();
        //context.fillStyle = "#000000";
        /* context.fillRect(j * titleSize, i * titleSize, titleSize, titleSize); */
        context.drawImage(leaf, j * titleSize, i * titleSize, titleSize, titleSize);
      } else if (m[i][j] === 2) {
        context.beginPath();
        context.fillStyle = "#00ff00";
        context.fillRect(j * titleSize, i * titleSize, titleSize, titleSize);
      } else {
        context.beginPath();
        context.drawImage(pavement, j * titleSize, i * titleSize, titleSize, titleSize);
      }

      collBox[i].push({
        x: j * titleSize,
        y: i * titleSize,
        status: m[i][j] === 1 ? 1 : m[i][j] === 2 ? 2 : 0,
      });
    }
  }
}

function drawPlayer(x, y) {
  context.beginPath();
  context.fillStyle = "#FF0000";
  context.fillRect(x, y, titleSize, titleSize);
}

function move(x, y) {
  context.clearRect(0, 0, mapLength * titleSize, mapHeight * titleSize);
  drawPlayer(x, y);
  drawMap(map);

  player.x = player.newX;
  player.y = player.newY;
}

let player = {
  x: 0,
  y: 0,
  newX: 0,
  newY: 0,
};

function checkColl() {
  for (i = 0; i < mapHeight; i++) {
    for (j = 0; j < mapLength; j++) {
      let b = collBox[i][j];
      if (player.newX === b.x && player.newY === b.y) {
          if(b.status === 1){
              console.log('Hit Rock')
          }else if(b.status === 2){
            console.log('WIN');
            move(player.newX, player.newY);
          }
          else{
            move(player.newX, player.newY);
          }
      } else if (
        player.newX < 0 ||
        player.newX >= mapLength * titleSize || player.newY < 0 ||
        player.newY >= mapHeight * titleSize) {
            console.log('Hit Wall');
      }
    }
  }
}

window.onkeydown = function (e) {
  if (e.keyCode === 37) {
    player.newX = player.x - titleSize;
    player.newY = player.y;
    console.log("LEFT");
  }
  if (e.keyCode === 38) {
    player.newY = player.y - titleSize;
    player.newX = player.x;
    console.log("UP");
  }
  if (e.keyCode === 39) {
    player.newX = player.x + titleSize;
    player.newY = player.y;
    console.log("RIGHT");
  }
  if (e.keyCode === 40) {
    player.newY = player.y + titleSize;
    player.newX = player.x;
    console.log("DOWN");
  }
  checkColl();
};

window.onload = function () {
  drawMap(map);
  drawPlayer(0, 0);
};
