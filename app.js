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
  var board = document.getElementById('bricks');
  var rows = [];
  var cols = [];
  // var rowLength = prompt('Enter row lentgh');
  // var colLength = prompt('Enter column length');
  for (var i=0; i <5; i++) {
    rows[i] = document.createElement('div');
    rows[i].setAttribute('class','row');
    board.appendChild(rows[i]);

    for (var j=0; j<9; j++) {
      cols[j] = document.createElement('div');
      cols[j].setAttribute('class','col');
      rows[i].appendChild(cols[j]);
      // cols[j].addEventListener('click', function(){
      //   this.style.backgroundColor = 'rgb('+ Math.floor(Math.random()*255)+','+ Math.floor(Math.random()*255) +','+ Math.floor(Math.random()*255) +')';
      // });
      // cols[j].addEventListener('mouseleave', function(){
      //   this.style.backgroundColor = '#333';
      // });
    }
  }
});
