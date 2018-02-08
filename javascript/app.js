document.addEventListener('DOMContentLoaded', function() {
  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
      modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }


  var bricks = document.getElementById('bricks');
  var rows = [];
  var cols = [];
  var ball = document.getElementById('ball');
  var paddle = document.getElementById('paddle');
  var pos = 0;  //paddle pos
  var posSpeed = 2;

  var posX = 10; // these two set where the ball starts
  var posY = 40;
  var lives = 3;
  var score = 0;

  BrickLayout();

  //BallControl();
  document.addEventListener("keydown", function(event) {
    if (event.which == 37) {
      var id = setInterval(MoveLeft, 3);
    }else if (event.which == 39) {
      var id = setInterval(MoveRight, 3);
    }
    document.addEventListener("keyup", function(event) {
      clearInterval(id);
    });
  });

  $("#ball").on("click", function() {
    var interval = setInterval(frame, 10);
    var fastX = 2;
    var fastY = 2;
    var xSpeed = fastX;
    var ySpeed = fastY;
    var posX = 10;
    var posY = 40;




    function frame() {
      if ( posY < 0 ) {
        clearInterval(interval);
        lives--;
        $("#Lives").html("Lives  " + lives);
      }
      posX+= xSpeed;
      posY+= ySpeed;
      $("#ball").css({
        "left": posX + "px",
        "bottom": posY + "px"
      });
      $("#Score").html("Score  " + score);

      if (score == 45) {
        $("#win").css("display","inline-block");
        $("#paddle").css("display","none");
        $("#ball").css("display","none");
        $(".hidden-col").css("display","none");
        $(".col").css("display","none");
      }
      if (lives == 2) {
        $("#heart3").css("display","none");
      }
      if (lives == 1) {
        $("#heart2").css("display","none");
      }
      if (lives == 0) {
        $("#lose").css("display","inline-block");
        $("#paddle").css("display","none");
        $("#ball").css("display","none");
        $(".hidden-col").css("display","none");
        $(".col").css("display","none");
        $("#heart1").css("display","none");
      }

      // if the position of ball is greater than the width of the playing area go left
      if (posX > ($("#gameScreen").innerWidth() - $("#ball").outerWidth())) {  // width of ball is 20px set in css
        xSpeed = -fastX;
      }
      // if the position of ball is greater than the height of the playing area go down
      if (posY > ($("#gameScreen").innerHeight() - $("#ball").outerWidth())) {  // width of ball is 20px set in css
        ySpeed = -fastY;
      }
      // if the position of ball is less than the width of the playing area go right
      if (posX <= 0) {
        xSpeed = fastX;
      }
      // if the position of ball is the same as the paddle go up
      if (posX > pos && posX < (pos + $("#paddle").outerWidth()) && posY < $("#paddle").outerHeight() + 10) { //+10 for paddle bottom margin
        ySpeed = fastY;
      }
      // Setting the area of where the ball collides with brick 84
      // all of the bricks on the lowest row
      if ( (posY >= LowerHeightLimit("#id84", 0))
        && (posY <= UpperHeightLimit("#id84", 1))
        && (posX <= RightWidthLimit("#id84", 1, 0))
        && (posX >= LeftWidthLimit("#id84", 1, 0))
        && $("#id84").hasClass( "col" )
      ){    //if conditions for brick 84 ^^
        RemoveBrick("id84"); // not a jquery id
        ReverseDirection();
      }; // end of if for 84
      if ( (posY > LowerHeightLimit("#id74", 0))
        && (posY < UpperHeightLimit("#id74", 1))
        && (posX < RightWidthLimit("#id74", 3, 1))
        && (posX > LeftWidthLimit("#id74", 3, 1))
        && $("#id74").hasClass( "col" )
      ){
        RemoveBrick("id74");
        ReverseDirection();
      };
      if ( (posY >= LowerHeightLimit("#id64", 0))
        && (posY <= UpperHeightLimit("#id64", 1))
        && (posX <= RightWidthLimit("#id64", 5, 2))
        && (posX >= LeftWidthLimit("#id64", 5, 2))
        && $("#id64").hasClass( "col" )
      ){
        RemoveBrick("id64");
        ReverseDirection();
      };
      if ( (posY >= LowerHeightLimit("#id54", 0))
        && (posY <= UpperHeightLimit("#id54", 1))
        && (posX <= RightWidthLimit("#id54", 7, 3))
        && (posX >= LeftWidthLimit("#id54", 7, 3))
        && $("#id54").hasClass( "col" )
      ){
        RemoveBrick("id54");
        ReverseDirection();
      };
      if ( (posY >= LowerHeightLimit("#id44", 0))
        && (posY <= UpperHeightLimit("#id44", 1))
        && (posX <= RightWidthLimit("#id44", 9, 4))
        && (posX >= LeftWidthLimit("#id44", 9, 4))
        && $("#id44").hasClass( "col" )
      ){
        RemoveBrick("id44");
        ReverseDirection();
      };
      if ( (posY >= LowerHeightLimit("#id34", 0))
        && (posY <= UpperHeightLimit("#id34", 1))
        && (posX <= RightWidthLimit("#id34", 11, 5))
        && (posX >= LeftWidthLimit("#id34", 11, 5))
        && $("#id34").hasClass( "col" )
      ){
        RemoveBrick("id34");
        ReverseDirection();
      };
      if ( (posY >= LowerHeightLimit("#id24", 0))
        && (posY <= UpperHeightLimit("#id24", 1))
        && (posX <= RightWidthLimit("#id24", 13, 6))
        && (posX >= LeftWidthLimit("#id24", 13, 6))
        && $("#id24").hasClass( "col" )
      ){
        RemoveBrick("id24");
        ReverseDirection();
      };
      if ( (posY >= LowerHeightLimit("#id14", 0))
        && (posY <= UpperHeightLimit("#id14", 1))
        && (posX <= RightWidthLimit("#id14", 15, 7))
        && (posX >= LeftWidthLimit("#id14", 15, 7))
        && $("#id14").hasClass( "col" )
      ){
        RemoveBrick("id14");
        ReverseDirection();
      };
      if ( (posY >= LowerHeightLimit("#id04", 0))
        && (posY <= UpperHeightLimit("#id04", 1))
        && (posX <= RightWidthLimit("#id04", 17, 8))
        && (posX >= LeftWidthLimit("#id04", 17, 8))
        && $("#id04").hasClass( "col" )
      ){
        RemoveBrick("id04");
        ReverseDirection();
      };


        // second row of bricks
      if ( (posY >= LowerHeightLimit("#id83", 1))
        && (posY <= UpperHeightLimit("#id83", 2))
        && (posX <= RightWidthLimit("#id83", 1, 0))
        && (posX >= LeftWidthLimit("#id83", 1, 0))
        && $("#id83").hasClass( "col" )
      ){    //if conditions for brick 84 ^^
        RemoveBrick("id83"); // not a jquery id
        ReverseDirection();
      }; // end of if for 84
      if ( (posY > LowerHeightLimit("#id73", 1))
        && (posY < UpperHeightLimit("#id73", 2))
        && (posX < RightWidthLimit("#id73", 3, 1))
        && (posX > LeftWidthLimit("#id73", 3, 1))
        && $("#id73").hasClass( "col" )
      ){
        RemoveBrick("id73");
        ReverseDirection();
      };
      if ( (posY >= LowerHeightLimit("#id63", 1))
        && (posY <= UpperHeightLimit("#id63", 2))
        && (posX <= RightWidthLimit("#id63", 5, 2))
        && (posX >= LeftWidthLimit("#id63", 5, 2))
        && $("#id63").hasClass( "col" )
      ){
        RemoveBrick("id63");
        ReverseDirection();
      };
      if ( (posY >= LowerHeightLimit("#id53", 1))
        && (posY <= UpperHeightLimit("#id53", 2))
        && (posX <= RightWidthLimit("#id53", 7, 3))
        && (posX >= LeftWidthLimit("#id53", 7, 3))
        && $("#id53").hasClass( "col" )
      ){
        RemoveBrick("id53");
        ReverseDirection();
      };
      if ( (posY >= LowerHeightLimit("#id43", 1))
        && (posY <= UpperHeightLimit("#id43", 2))
        && (posX <= RightWidthLimit("#id43", 9, 4))
        && (posX >= LeftWidthLimit("#id43", 9, 4))
        && $("#id43").hasClass( "col" )
      ){
        RemoveBrick("id43");
        ReverseDirection();
      };
      if ( (posY >= LowerHeightLimit("#id33", 1))
        && (posY <= UpperHeightLimit("#id33", 2))
        && (posX <= RightWidthLimit("#id33", 11, 5))
        && (posX >= LeftWidthLimit("#id33", 11, 5))
        && $("#id33").hasClass( "col" )
      ){
        RemoveBrick("id33");
        ReverseDirection();
      };
      if ( (posY >= LowerHeightLimit("#id23", 1))
        && (posY <= UpperHeightLimit("#id23", 2))
        && (posX <= RightWidthLimit("#id23", 13, 6))
        && (posX >= LeftWidthLimit("#id23", 13, 6))
        && $("#id23").hasClass( "col" )
      ){
        RemoveBrick("id23");
        ReverseDirection();
      };
      if ( (posY >= LowerHeightLimit("#id13", 1))
        && (posY <= UpperHeightLimit("#id13", 2))
        && (posX <= RightWidthLimit("#id13", 15, 7))
        && (posX >= LeftWidthLimit("#id13", 15, 7))
        && $("#id13").hasClass( "col" )
      ){
        RemoveBrick("id13");
        ReverseDirection();
      };
      if ( (posY >= LowerHeightLimit("#id03", 1))
        && (posY <= UpperHeightLimit("#id03", 2))
        && (posX <= RightWidthLimit("#id03", 17, 8))
        && (posX >= LeftWidthLimit("#id03", 17, 8))
        && $("#id03").hasClass( "col" )
      ){
        RemoveBrick("id03");
        ReverseDirection();
      };

      //third row
      if ( (posY >= LowerHeightLimit("#id82", 2))
        && (posY <= UpperHeightLimit("#id82", 3))
        && (posX <= RightWidthLimit("#id82", 1, 0))
        && (posX >= LeftWidthLimit("#id82", 1, 0))
        && $("#id82").hasClass( "col" )
      ){    //if conditions for brick 84 ^^
        RemoveBrick("id82"); // not a jquery id
        ReverseDirection();
      }; // end of if for 84
      if ( (posY > LowerHeightLimit("#id72", 2))
        && (posY < UpperHeightLimit("#id72", 3))
        && (posX < RightWidthLimit("#id72", 3, 1))
        && (posX > LeftWidthLimit("#id72", 3, 1))
        && $("#id72").hasClass( "col" )
      ){
        RemoveBrick("id72");
        ReverseDirection();
      };
      if ( (posY >= LowerHeightLimit("#id62", 2))
        && (posY <= UpperHeightLimit("#id62", 3))
        && (posX <= RightWidthLimit("#id62", 5, 2))
        && (posX >= LeftWidthLimit("#id62", 5, 2))
        && $("#id62").hasClass( "col" )
      ){
        RemoveBrick("id62");
        ReverseDirection();
      };
      if ( (posY >= LowerHeightLimit("#id52", 2))
        && (posY <= UpperHeightLimit("#id52", 3))
        && (posX <= RightWidthLimit("#id52", 7, 3))
        && (posX >= LeftWidthLimit("#id52", 7, 3))
        && $("#id52").hasClass( "col" )
      ){
        RemoveBrick("id52");
        ReverseDirection();
      };
      if ( (posY >= LowerHeightLimit("#id42", 2))
        && (posY <= UpperHeightLimit("#id42", 3))
        && (posX <= RightWidthLimit("#id42", 9, 4))
        && (posX >= LeftWidthLimit("#id42", 9, 4))
        && $("#id42").hasClass( "col" )
      ){
        RemoveBrick("id42");
        ReverseDirection();
      };
      if ( (posY >= LowerHeightLimit("#id32", 2))
        && (posY <= UpperHeightLimit("#id32", 3))
        && (posX <= RightWidthLimit("#id32", 11, 5))
        && (posX >= LeftWidthLimit("#id32", 11, 5))
        && $("#id32").hasClass( "col" )
      ){
        RemoveBrick("id32");
        ReverseDirection();
      };
      if ( (posY >= LowerHeightLimit("#id22", 2))
        && (posY <= UpperHeightLimit("#id22", 3))
        && (posX <= RightWidthLimit("#id22", 13, 6))
        && (posX >= LeftWidthLimit("#id22", 13, 6))
        && $("#id22").hasClass( "col" )
      ){
        RemoveBrick("id22");
        ReverseDirection();
      };
      if ( (posY >= LowerHeightLimit("#id12", 2))
        && (posY <= UpperHeightLimit("#id12", 3))
        && (posX <= RightWidthLimit("#id12", 15, 7))
        && (posX >= LeftWidthLimit("#id12", 15, 7))
        && $("#id12").hasClass( "col" )
      ){
        RemoveBrick("id12");
        ReverseDirection();
      };
      if ( (posY >= LowerHeightLimit("#id02", 2))
        && (posY <= UpperHeightLimit("#id02", 3))
        && (posX <= RightWidthLimit("#id02", 17, 8))
        && (posX >= LeftWidthLimit("#id02", 17, 8))
        && $("#id02").hasClass( "col" )
      ){
        RemoveBrick("id02");
        ReverseDirection();
      };

      // 4th row
      if ( (posY >= LowerHeightLimit("#id81", 3))
        && (posY <= UpperHeightLimit("#id81", 4))
        && (posX <= RightWidthLimit("#id81", 1, 0))
        && (posX >= LeftWidthLimit("#id81", 1, 0))
        && $("#id81").hasClass( "col" )
      ){    //if conditions for brick 84 ^^
        RemoveBrick("id81"); // not a jquery id
        ReverseDirection();
      }; // end of if for 84
      if ( (posY > LowerHeightLimit("#id71", 3))
        && (posY < UpperHeightLimit("#id71", 4))
        && (posX < RightWidthLimit("#id71", 3, 1))
        && (posX > LeftWidthLimit("#id71", 3, 1))
        && $("#id71").hasClass( "col" )
      ){
        RemoveBrick("id71");
        ReverseDirection();
      };
      if ( (posY >= LowerHeightLimit("#id61", 3))
        && (posY <= UpperHeightLimit("#id61", 4))
        && (posX <= RightWidthLimit("#id61", 5, 2))
        && (posX >= LeftWidthLimit("#id61", 5, 2))
        && $("#id61").hasClass( "col" )
      ){
        RemoveBrick("id61");
        ReverseDirection();
      };
      if ( (posY >= LowerHeightLimit("#id51", 3))
        && (posY <= UpperHeightLimit("#id51", 4))
        && (posX <= RightWidthLimit("#id51", 7, 3))
        && (posX >= LeftWidthLimit("#id51", 7, 3))
        && $("#id51").hasClass( "col" )
      ){
        RemoveBrick("id51");
        ReverseDirection();
      };
      if ( (posY >= LowerHeightLimit("#id41", 3))
        && (posY <= UpperHeightLimit("#id41", 4))
        && (posX <= RightWidthLimit("#id41", 9, 4))
        && (posX >= LeftWidthLimit("#id41", 9, 4))
        && $("#id41").hasClass( "col" )
      ){
        RemoveBrick("id41");
        ReverseDirection();
      };
      if ( (posY >= LowerHeightLimit("#id31", 3))
        && (posY <= UpperHeightLimit("#id31", 4))
        && (posX <= RightWidthLimit("#id31", 11, 5))
        && (posX >= LeftWidthLimit("#id31", 11, 5))
        && $("#id31").hasClass( "col" )
      ){
        RemoveBrick("id31");
        ReverseDirection();
      };
      if ( (posY >= LowerHeightLimit("#id21", 3))
        && (posY <= UpperHeightLimit("#id21", 4))
        && (posX <= RightWidthLimit("#id21", 13, 6))
        && (posX >= LeftWidthLimit("#id21", 13, 6))
        && $("#id21").hasClass( "col" )
      ){
        RemoveBrick("id21");
        ReverseDirection();
      };
      if ( (posY >= LowerHeightLimit("#id11", 3))
        && (posY <= UpperHeightLimit("#id11", 4))
        && (posX <= RightWidthLimit("#id11", 15, 7))
        && (posX >= LeftWidthLimit("#id11", 15, 7))
        && $("#id11").hasClass( "col" )
      ){
        RemoveBrick("id11");
        ReverseDirection();
      };
      if ( (posY >= LowerHeightLimit("#id01", 3))
        && (posY <= UpperHeightLimit("#id01", 4))
        && (posX <= RightWidthLimit("#id01", 17, 8))
        && (posX >= LeftWidthLimit("#id01", 17, 8))
        && $("#id01").hasClass( "col" )
      ){
        RemoveBrick("id01");
        ReverseDirection();
      };

      // 5th row
      if ( (posY >= LowerHeightLimit("#id80", 4))
        && (posY <= UpperHeightLimit("#id80", 5))
        && (posX <= RightWidthLimit("#id80", 1, 0))
        && (posX >= LeftWidthLimit("#id80", 1, 0))
        && $("#id80").hasClass( "col" )
      ){    //if conditions for brick 84 ^^
        RemoveBrick("id80"); // not a jquery id
        ReverseDirection();
      }; // end of if for 84
      if ( (posY > LowerHeightLimit("#id70", 4))
        && (posY < UpperHeightLimit("#id70", 5))
        && (posX < RightWidthLimit("#id70", 3, 1))
        && (posX > LeftWidthLimit("#id70", 3, 1))
        && $("#id70").hasClass( "col" )
      ){
        RemoveBrick("id70");
        ReverseDirection();
      };
      if ( (posY >= LowerHeightLimit("#id60", 4))
        && (posY <= UpperHeightLimit("#id60", 5))
        && (posX <= RightWidthLimit("#id60", 5, 2))
        && (posX >= LeftWidthLimit("#id60", 5, 2))
        && $("#id60").hasClass( "col" )
      ){
        RemoveBrick("id60");
        ReverseDirection();
      };
      if ( (posY >= LowerHeightLimit("#id50", 4))
        && (posY <= UpperHeightLimit("#id50", 5))
        && (posX <= RightWidthLimit("#id50", 7, 3))
        && (posX >= LeftWidthLimit("#id50", 7, 3))
        && $("#id50").hasClass( "col" )
      ){
        RemoveBrick("id50");
        ReverseDirection();
      };
      if ( (posY >= LowerHeightLimit("#id40", 4))
        && (posY <= UpperHeightLimit("#id40", 5))
        && (posX <= RightWidthLimit("#id40", 9, 4))
        && (posX >= LeftWidthLimit("#id40", 9, 4))
        && $("#id40").hasClass( "col" )
      ){
        RemoveBrick("id40");
        ReverseDirection();
      };
      if ( (posY >= LowerHeightLimit("#id30", 4))
        && (posY <= UpperHeightLimit("#id30", 5))
        && (posX <= RightWidthLimit("#id30", 11, 5))
        && (posX >= LeftWidthLimit("#id30", 11, 5))
        && $("#id30").hasClass( "col" )
      ){
        RemoveBrick("id30");
        ReverseDirection();
      };
      if ( (posY >= LowerHeightLimit("#id20", 4))
        && (posY <= UpperHeightLimit("#id20", 5))
        && (posX <= RightWidthLimit("#id20", 13, 6))
        && (posX >= LeftWidthLimit("#id20", 13, 6))
        && $("#id20").hasClass( "col" )
      ){
        RemoveBrick("id20");
        ReverseDirection();
      };
      if ( (posY >= LowerHeightLimit("#id10", 4))
        && (posY <= UpperHeightLimit("#id10", 5))
        && (posX <= RightWidthLimit("#id10", 15, 7))
        && (posX >= LeftWidthLimit("#id10", 15, 7))
        && $("#id10").hasClass( "col" )
      ){
        RemoveBrick("id10");
        ReverseDirection();
      };
      if ( (posY >= LowerHeightLimit("#id00", 4))
        && (posY <= UpperHeightLimit("#id00", 5))
        && (posX <= RightWidthLimit("#id00", 17, 8))
        && (posX >= LeftWidthLimit("#id00", 17, 8))
        && $("#id00").hasClass( "col" )
      ){
        RemoveBrick("id00");
        ReverseDirection();
      };


      function ReverseDirection() {

        if (ySpeed === fastY) {
          ySpeed = -fastY;

        }else {
          ySpeed = fastY;
          if (score == 5 || score == 10 || score == 15) {
            fastY +=1;
          }
        };
      }
    }; // end of frame function
  }); // end of click function
  function LowerHeightLimit(id, rowBelow) {
    return ($("#gameScreen").innerHeight() + $(id).outerHeight()*rowBelow - $("#bricks").outerHeight()) - ($("#ball").outerHeight()/2) +10*rowBelow
  }
  function UpperHeightLimit(id, CurrentRow) {
    return ($("#gameScreen").innerHeight() + $(id).outerHeight()*CurrentRow - $("#bricks").outerHeight()) + ($("#ball").outerHeight()/2) +10*CurrentRow
  }
  function RightWidthLimit(id, CurrentCol, RightCol) {
    return ($("#gameScreen").innerWidth() - 4*CurrentCol) - $(id).outerWidth()*RightCol - 16
  }
  function LeftWidthLimit(id, NoOfMargins, CurrentCol) {
    return ($("#gameScreen").innerWidth() - $(id).outerWidth()*CurrentCol - 4*NoOfMargins - 110)
  }
  function RemoveBrick(id) {
    var Brick = document.getElementById(id);
    Brick.classList.remove('col');
    Brick.classList.add('hidden-col');
    newScore = score++;
  }
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
      pos-= posSpeed;
      paddle.style.left = pos + 'px';
    }
  }
  function MoveRight() {
    if (pos < (960-96)) {
      pos+= posSpeed;
      paddle.style.left = pos + 'px';
    }
  }

});
