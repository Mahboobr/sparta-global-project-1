# sparta-global-project-1

## BREAKOUT

### Project Brief

The brief for this project was to create a browser based game using all the tools that we had learnt over the previous two weeks. It needed to have instructions on how to play and show whether users won and their score.

### How to download and play

To download the game off GitHub, .....

The aim of the game is to break all the blocks on screen. As the score gets higher, the speed of the ball increases too, increasing the difficulty as well.
To play the game, the user presses the *left* and *right* arrow keys to move the paddle at the bottom of the screen.

### Stages

_Sprint 1_

The start of this sprint began with me planning out what elements would be needed on the page and where they go. I used a number of wireframe diagrams to help with this step.

There were a number of issues that I had encountered during this sprint.
The first began with the movement of the ball. Initially it worked well but only in one direction. Trying to make it work in the opposite direction had caused it to break.
Then I tried another way where I saved the previous value of the position and the current position within an array and compared the two. Depending on the outcome, it would dictate which direction the ball would take.
```javascript
var Xarr = [1, 3]; // array for x pos's
var Yarr = [1, 3];
if (Xans > 0 && Yans > 0) { // goes toward right wall
  RightAndUp();
}
Xarr.push(posX);
var Xans = Xarr[1] - Xarr[0];
Xarr.shift();
function RightAndUp() {
  posX+=2;
  posY++;
  $("#ball").css({
    "left": posX + "px",
    "bottom": posY + "px"
  });
}
 ```
 The code above shows the array and the functions performed to dictate the direction. It shows that the X position of the ball was pushed into the array at the end. Then it would run the function RightAndUp which would increase the left and bottom margins of the ball.
