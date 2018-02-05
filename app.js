// var $brick = $(".bricks");
// var brick = document.getElementsByClassName('bricks');
//
// var rows = [];
// var cols = [];
//
// for (var i=0; i < 5; i++) {
//   rows[i] = document.createElement('div');
//   rows[i].setAttribute('class','row');
//   brick.append(rows[i]);
//   // $brick.append($("<div>bleu </div>"));
//
//   for (var j=0; j< 5; j++) {
//     cols[j] = document.createElement('div');
//     cols[j].setAttribute('class','col');
//     rows[i].appendChild(cols[j]);
//     // $brick.append($("<div> asdas</div>"));
//
//   }
// }
// $list.append($("<li>New Item</li>"));


document.addEventListener('DOMContentLoaded', function() {



  var bricks = document.getElementById('bricks');
  var rows = [];
  var cols = [];
  var ball = document.getElementById('ball');
  var paddle = document.getElementById('paddle');
  var pos = 0;
  var posX = 0;
  var posY = 30;
  var lives = 3;

  BrickLayout();

  //BallControl();
  document.addEventListener("keydown", function(event) {
    if (event.which == 37) {
      var id = setInterval(MoveLeft, 1);
      //BallControl();
      console.log(pos);
    }else if (event.which == 39) {
      var id = setInterval(MoveRight, 1);
      //BallControl();
      console.log(pos);
    }
    document.addEventListener("keyup", function(event) {
      clearInterval(id);
      console.log(pos);
    });
  });




      //working code
      $("#ball").on("click", function() {
        var posX = 10;
        var posY = 40;
        var dir = 1;
        var interval = setInterval(frame, 10);

        function frame() {

          if ( posY < 0 ) {
            clearInterval(interval);
          }else if (posX < 940 && posY < 700) {
            if (dir == 1) {
              posX+=2;
              posY++;
              $("#ball").css({
                "left": posX + "px",
                "bottom": posY + "px"
              });

            }
            console.log(posX);
            console.log("Y " + posY);
            if (posX > 939) {
              console.log("asdad");
              dir = 2;
            }
            if (dir == 2) {
              posX-=2;
              posY++;
              $("#ball").css({
                "left": posX + "px",
                "bottom": posY + "px"
              });
            }
            if (posY > 698) {
              console.log("asdad");
              dir = 3;
            }
            if (dir == 3) {
              posX-=2;
              posY-=2;
              $("#ball").css({
                "left": posX + "px",
                "bottom": posY + "px"
              });
            }
            if (posX < 1) {
              console.log("asdad");
              dir = 4;
            }
            if (dir == 4) {
              posX+=2;
              posY-=2;
              $("#ball").css({
                "left": posX + "px",
                "bottom": posY + "px"
              });
            }

            if (posX > pos && posX < (pos + 96) && posY < 30 ) {
              console.log("asdad");
              dir = 1;
            }
          }//end of that else if


        }
      })






      // //working code in some way
      // $("#ball").on("click", function() {
      //   var posX = 10;
      //   var posY = 40;
      //   var dir = 0;
      //   var interval = setInterval(frame, 10);
      //
      //   function frame() {
      //
      //     if (posX < 0  || posY < 0 ) {
      //       clearInterval(interval);
      //     }else if (posX < 940 && posY < 700) {
      //       if (dir == 1) {
      //         posX+=2;
      //         posY++;
      //         $("#ball").css({
      //           "left": posX + "px",
      //           "bottom": posY + "px"
      //         });
      //
      //       }
      //       console.log("X" + posX);
      //       console.log("Y" + posY);
      //     }
      //     if (posX == 939) {
      //       dir = 0;
      //     }
      //     if (dir == 0) {
      //       posX-=2;
      //       posY++;
      //       $("#ball").css({
      //         "left": posX + "px",
      //         "bottom": posY + "px"
      //       });
      //     }
      //   }
      // })



  // document.addEventListener("keydown", function(event) {
  //
  //   console.log(event.which);
  //   if (event.which == 32) {
  //     start = true;
  //   }
  //   while (start == "true") {
  //     BrickLayout();
  //     BallControl();
  //     if (event.which == 37) {
  //       var id = setInterval(MoveLeft, 1);
  //     }else if (event.which == 39) {
  //       var id = setInterval(MoveRight, 1);
  //     }
  //     document.addEventListener("keyup", function(event) {
  //       clearInterval(id);
  //     })
  //   }// while loop end
  //
  // });
  //
  // BrickLayout();
  // document.addEventListener("keydown", function(event) {
  //   if (event.which == 37) {
  //     var id = setInterval(MoveLeft, 1);
  //   }else if (event.which == 39) {
  //     var id = setInterval(MoveRight, 1);
  //   }
  //   document.addEventListener("keyup", function(event) {
  //     clearInterval(id);
  //   })
  //   console.log(start);
  // });













  // var rowLength =

    // if (event.which == 32){
    //   console.log(event.which);
    //   ball.style.bottom = posY + 'px';
    //   ball.style.left = posX + 'px';
    //   posX++;
    //   posY++;
    // }

    //function to control paddle

    // paddle controls end


  function BrickLayout() {
    for (var i=0; i <5; i++) {
      rows[i] = document.createElement('div');
      rows[i].setAttribute('class','row');
      bricks.appendChild(rows[i]);

      for (var j=0; j<9; j++) {
        cols[j] = document.createElement('div');
        cols[j].setAttribute('class','col');
        rows[i].appendChild(cols[j]);
      }
    }
  }

  // function BallControl() {
  //   ball.style.bottom = posY + 'px';
  //   ball.style.left = posX + 'px';
  //   posX++;
  //   posY++;
  // }

  function MoveLeft() {
    if (pos > 0) {
      pos--;
      paddle.style.left = pos + 'px';
      // console.log("left");
      // console.log(pos);
      // ball.style.bottom = posY + 'px';
      // ball.style.left = posX + 'px';
      // posX++;
      // posY++;
    }
  }


  function MoveRight() {
    if (pos < (960-96)) {
      // console.log("right");
      pos++;
      paddle.style.left = pos + 'px';
      // console.log(pos);
      // ball.style.bottom = posY + 'px';
      // ball.style.left = posX + 'px';
      // posX++;
      // posY++;
    }
  }



  // var posX = pos;
  // var posX = 0;
  // var posY = 30;
  // var start = false;
  // // ball stuff
  // var ball = document.getElementById('ball');
  // document.addEventListener("keypress", function(event) {
  //
  // });
  //
  // if (event.which == 32){
  //   console.log(event.which);
  //   start = true;
  //   console.log(start);
  // }
  //
  // console.log(start);
  // while (start == true) {
  //   ball.style.bottom = posY + 'px';
  //   ball.style.left = posX + 'px';
  //   posX++;
  //   posY++;
  // }



//   function myMove() {
//     var elem = document.getElementById("animate");
//     var pos = 0;
//     var id = setInterval(frame, 5);
//     function frame() {
//         if (pos == 350) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + 'px';
//             elem.style.left = pos + 'px';
//         }
//     }
// }


  // $("#paddle").on("click", function() {
  //   var pos = 1;
  //   var interval = setInterval(frame, 10);
  //
  //   function frame() {
  //     if (pos < 0) {
  //       clearInterval(interval);
  //     }else {
  //       pos += 1;
  //       $("#paddle").css("margin-left", pos + "px");
  //     }
  //   }
  //
  // })

  // $("body").keydown(function(e) {
  //   var pos;
  // if(e.keyCode == 37) { // left
  //   pos += 1;
  //   $("#paddle").css("margin-right", pos + "px");
  // }else if(e.keyCode == 39) { // right
  //   pos += 1;
  //   $("#paddle").css("margin-left", pos + "px");
  //   }
  // });

  //if left click increase margin right
  //if right click increase margin left

  // $("#paddle").keydown(function(e) {
  //   var pos = 1;
  //   frame();
  //
  //   function frame() {
  //     if ((e.keyCode || e.which) == 37){
  //       $("#paddle").css("margin-right", pos + "px");
  //     }else if ((e.keyCode || e.which) == 37){
  //       pos += 1;
  //       $("#paddle").css("margin-left", pos + "px");
  //     }
  //   }
  //
  // })


});
