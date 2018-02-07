document.addEventListener('DOMContentLoaded', function() {



  var bricks = document.getElementById('bricks');
  var rows = [];
  var cols = [];
  var ball = document.getElementById('ball');
  var paddle = document.getElementById('paddle');
  var pos = 0;  //paddle pos
  // ball.style.left = $("#paddle").outerWidth() / 2; // these two set where the ball starts
  // ball.style.bottom = $("#paddle").outerHeight() + 10;
  var posX = 10; // these two set where the ball starts
  var posY = 40;
  var lives = 3;

  BrickLayout();

  //BallControl();
  document.addEventListener("keydown", function(event) {
    if (event.which == 37) {
      var id = setInterval(MoveLeft, 1);
      //BallControl();
      // console.log(pos);
    }else if (event.which == 39) {
      var id = setInterval(MoveRight, 1);
      //BallControl();
      // console.log(pos);
    }
    document.addEventListener("keyup", function(event) {
      clearInterval(id);
      // console.log(pos);
    });
  });
  console.log($("#gameScreen").innerWidth());
  console.log($("#gameScreen").innerHeight());
  console.log($("#id84").innerWidth());
  console.log($("#id84").innerHeight());
  console.log($("#id84").outerWidth());
  console.log($("#id84").outerHeight());
  console.log($("#paddle").outerWidth());
  console.log($("#ball").outerWidth());

  // var posX = 10;
  // var posY = 40;
  var xSpeed = 2;
  var ySpeed = 1;
  $("#ball").on("click", function() {
    var interval = setInterval(frame, 10);

    function frame() {
      if ( posY < 0 ) {
        clearInterval(interval);
      }
      posX+= xSpeed;
      posY+= ySpeed;
      $("#ball").css({
        "left": posX + "px",
        "bottom": posY + "px"
      });
      // if the position of ball is greater than the width of the playing area go left
      if (posX > ($("#gameScreen").innerWidth() - $("#ball").outerWidth())) {  // width of ball is 20px set in css
        xSpeed = -2;
      }
      // if the position of ball is greater than the height of the playing area go down
      if (posY > ($("#gameScreen").innerHeight() - $("#ball").outerWidth())) {  // width of ball is 20px set in css
        ySpeed = -1;
      }// if the position of ball is less than the width of the playing area go right
      if (posX <= 0) {
        xSpeed = 2;
      }// if the position of ball is the same as the paddle go up
      if (posX > pos && posX < (pos + $("#paddle").outerWidth()) && posY < $("#paddle").outerHeight() + 10) { //+10 for paddle bottom margin
        ySpeed = 1;
      }

    };

  });

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
