document.addEventListener('DOMContentLoaded', function() {



  var bricks = document.getElementById('bricks');
  var rows = [];
  var cols = [];
  var ball = document.getElementById('ball');
  var paddle = document.getElementById('paddle');
  var pos = 0;  //paddle pos

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



  $("#ball").on("click", function() {
    var interval = setInterval(frame, 10);
    var xSpeed = 2;
    var ySpeed = 2;
    var posX = 10;
    var posY = 40;

    function frame() {
      if ( posY < -1 ) {
        // ySpeed = 1;
        console.log(posY);
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

      console.log(($("#gameScreen").innerHeight() - $("#bricks").outerHeight()));
      // Setting the area of where the ball collides with brick 84
      if ( (posY >= ($("#gameScreen").innerHeight() - $("#bricks").outerHeight()) - ($("#ball").outerHeight()/2))
      && (posY <= ($("#gameScreen").innerHeight() + $("#id84").outerHeight() - $("#bricks").outerHeight()) + ($("#ball").outerHeight()/2))
      && (posX <= $("#gameScreen").innerWidth() - 4)
      && (posX >= $("#gameScreen").innerWidth() - $("#id84").outerWidth() - 4)
      && $("#id84").hasClass( "col" )
    ){    //if conditions for brick 84 ^^
        var Brick84 = document.getElementById('id84');
        Brick84.classList.remove('col');
        Brick84.classList.add('hidden-col');
        console.log($("#id84"));
        console.log(posX);
        if (ySpeed == 1) {
          ySpeed = -2;
        }else {
          ySpeed = 2;
        };
      }; // end of if for 84

      if ( (posY >= ($("#gameScreen").innerHeight() - $("#bricks").outerHeight()) - ($("#ball").outerHeight()/2))
      && (posY <= ($("#gameScreen").innerHeight() + $("#id74").outerHeight() - $("#bricks").outerHeight()) + ($("#ball").outerHeight()/2))
      && (posX <= $("#gameScreen").innerWidth() - 4*2 - $("#id74").outerWidth())
      && (posX >= $("#gameScreen").innerWidth() - $("#id74").outerWidth()*2 - 4*2)
      && $("#id74").hasClass( "col" )
    ){    //if conditions for brick 84 ^^
        var Brick74 = document.getElementById('id74');
        Brick74.classList.remove('col');
        Brick74.classList.add('hidden-col');
        console.log($("#id84"));
        console.log(posX);
        if (ySpeed == 1) {
          ySpeed = -2;
        }else {
          ySpeed = 2;
        };
      }; // end of if for 84

      if ( (posY >= ($("#gameScreen").innerHeight() - $("#bricks").outerHeight()) - ($("#ball").outerHeight()/2))
      && (posY <= ($("#gameScreen").innerHeight() + $("#id64").outerHeight() - $("#bricks").outerHeight()) + ($("#ball").outerHeight()/2))
      && (posX <= $("#gameScreen").innerWidth() - 4*3 - $("#id64").outerWidth())
      && (posX >= $("#gameScreen").innerWidth() - $("#id64").outerWidth()*3 - 4*3)
      && $("#id64").hasClass( "col" )
    ){    //if conditions for brick 84 ^^
        var Brick64 = document.getElementById('id64');
        Brick64.classList.remove('col');
        Brick64.classList.add('hidden-col');
        console.log($("#id64"));
        console.log(posX);
        if (ySpeed == 1) {
          ySpeed = -2;
        }else {
          ySpeed = 2;
        };
      }; // end of if for 84

      if ( (posY >= ($("#gameScreen").innerHeight() + $("#id83").outerHeight() +10 - $("#bricks").outerHeight()) - ($("#ball").outerHeight()/2))
      && (posY <= ($("#gameScreen").innerHeight() + $("#id83").outerHeight()*2 +10 - $("#bricks").outerHeight()) + ($("#ball").outerHeight()/2))
      && (posX <= $("#gameScreen").innerWidth() - 4)
      && (posX >= $("#gameScreen").innerWidth() - $("#id83").outerWidth() - 4)
      && $("#id83").hasClass( "col" )
    ){    //if conditions for brick 84 ^^
        var Brick74 = document.getElementById('id83');
        Brick74.classList.remove('col');
        Brick74.classList.add('hidden-col');
        console.log($("#id84"));
        console.log(posX);
        if (ySpeed == 1) {
          ySpeed = -2;
        }else {
          ySpeed = 2;
        };
      }; // end of if for 84

    }; // end of frame function
  }); // end of click function

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
