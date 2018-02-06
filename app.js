
$(document).ready(function(){

  var bricks = document.getElementById('bricks');
  var bricksList = document.getElementsByClassName('cols');
  var rows = [];
  var cols = [];
  var ball = document.getElementById('ball');
  var paddle = document.getElementById('paddle');
  var Score = document.getElementById('Score');
  var Lives = document.getElementById('Lives');
  var pos = 0;
  var posX = 0;
  var posY = 30;
  var lives = 3;
  var score = 0;

  BrickLayout();

  document.addEventListener("keydown", function(event) {

    var col = document.getElementsByClassName('col');
    if (event.which == 37) {    // arrow keys presses
      var id = setInterval(MoveLeft, 1);
    }else if (event.which == 39) {
      var id = setInterval(MoveRight, 1);
    }
    document.addEventListener("keyup", function(event) {
      clearInterval(id);
    });
  });

//fully working code
$("#ball").on("click", function() {
  var posX = 10;
  var posY = 40;
  var dir = 1;
  var interval = setInterval(frame, 10);
  var Br84on = 1;  // brick 84 flag
  var Xarr = [1, 3]; // array for x pos's
  var Yarr = [1, 3];
  var LRFLag = 1;

  function frame() {

    Xarr.push(posX);
    var Xans = Xarr[1] - Xarr[0];
    console.log("X " + Xans);
    Xarr.shift();

    console.log(Xarr);
    console.log(Yarr);

    Yarr.push(posY);
    var Yans = Yarr[1] - Yarr[0];
    console.log("Y " + Yans);
    Yarr.shift();

    console.log(posX);

    if ( posY < 0 ) {
      clearInterval(interval);

      lives--;
      console.log(lives);
      $("#Lives").html("Lives = " + lives);

    }else if (posX < 940 && posY < 700) {
      if (Xans > 0 && Yans > 0 && LRFLag == 1 ) { // goes toward right wall
        RightAndUp();
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
      }
      if (Xans <= 0 && Yans > 0 ) {   //hits right wall
        LeftAndUp();
        console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb");
      }
      if (Xans <= 0 && Yans <= 0  ) {   // hits top wall
        LeftAndDown();
        console.log("ccccccccccccccccccccccccccccccccccccccccc");
      }
      if (Xans >= 0 && Yans <= 0 ) {   // hits left wall
        RightAndDown();
        console.log("dddddddddddddddddddddddddddddddddddddddddddd");
      }
      if (posX > 939) {
        console.log("RIGHTRIGHTRIGHTRIGHTRIGHTRIGHTRIGHTRIGHTRIGHT");
        LeftAndUp();
        LRFLag = 0;
      }
      if (posY > 698) {
        console.log("LeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeft");
        RightAndDown();
      }
      if (posX == 0) {
        console.log("DownDownDownDownDownDownDownDownDownDownDown");
        RightAndDown();
        LRFLag = 1;
      }
      if (posX > pos && posX < (pos + 96) && posY < 30 ) {    // hits paddle
        LeftAndUp();
      }
      if (Br84on == 1) {
        if (posX > 840 && posX < (840 + 96) && posY > 470 && posY > 480 ) {    // hits brick 84
          var Brick84 = document.getElementById('id84');
          console.log(Brick84);
          Brick84.classList.remove('col');
          Brick84.classList.add('hidden-col');
          LeftAndDown();
          score++;
          LRFLag == 0;
          Br84on = 0; // trying to disable this area sp ball can pass through
        }
      }
      $("#Score").html("Score = " + score);
    }//end of that else if
  }

  function RightAndUp() {
    posX+=2;
    posY++;
    $("#ball").css({
      "left": posX + "px",
      "bottom": posY + "px"
    });
  }
  function LeftAndUp() {
    posX-=2;
    posY++;
    $("#ball").css({
      "left": posX + "px",
      "bottom": posY + "px"
    });
  }
  function LeftAndDown() {
    posX-=2;
    posY-=2;
    $("#ball").css({
      "left": posX + "px",
      "bottom": posY + "px"
    });
  }
  function RightAndDown() {
    posX+=2;
    posY-=2;
    $("#ball").css({
      "left": posX + "px",
      "bottom": posY + "px"
    });
  }
})

function BrickLayout() {
  for (var i=0; i <5; i++) {
    rows[i] = document.createElement('div');
    rows[i].setAttribute('class','row');
    bricks.appendChild(rows[i]);

    for (var j=0; j<9; j++) {
      cols[j] = document.createElement('div');
      cols[j].setAttribute('class','col');
      cols[j].setAttribute('id','id' + j + i);
      cols[j].addEventListener('click',function(){
        this.classList.remove('col');
        this.classList.add('hidden-col');
      });
      rows[i].appendChild(cols[j]);
    }
  }
}
// controlling paddle
function MoveLeft() {
  if (pos > 0) {
    pos--;
    paddle.style.left = pos + 'px';
  }
}
function MoveRight() {
  if (pos < (960-96)) {
    pos++;
    paddle.style.left = pos + 'px';
  }
}
});
