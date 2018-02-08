# sparta-global-project-1

## BREAKOUT

### Project Brief

The brief for this project was to create a browser based game using all the tools that we had learnt over the previous two weeks. It needed to have instructions on how to play and show whether users won and their score.

### How to download and play

To download the game off GitHub, open the terminal and type:
`git clone git@github.com:Mahboobr/sparta-global-project-1.git`
Ensure it is in the correct directory before cloning.
To open the game, open "index.html" in a browser.

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

 Another issue was the collision detection. My solution involved knowing where each block was situated and where the position of the ball was. If they collided then the block would disappear. At this time, when the ball would collide, it would make the block disappear but when the ball rebounded it would run two direction functions at the same time making the ball move in a rough fashion. It would also still collide if no block was there.


 ![]./readme_images/Img1.png

 This images shows that the ball is still colliding with a block when there is none there.

 _Sprint 2_

Sprint 2 is where I found better ways to implement features of the game. I found a new way to make the ball move in all directions. This involved setting the speeds of the X and Y values within variables. This made it much simpler to reverse the sign and thus the direction. This also lead to it being much easier to
Also working out where each block was positioned was made easier by using the widths of containing elements rather than hard-coding them.
One big challenge I faced during this sprint was to make the code as "dry" as possible. However I managed to make some functions to reduce the amount of repetition but there are still areas where, with further work, it can be made less.
