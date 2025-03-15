var dice;
// dice image from value 1 to 6 are given in an array, codes are from Die face Emoji Emojipedia
var dices = [1,2,3,4,5,6 ];
var stopped = true;
var t;

// for keep on changing the dice emojis
function change() {
  var random = Math.floor(Math.random()*6);
  dice.innerHTML = dices[random]; 
}

function stopstart() {
  if(stopped) {
    stopped = false;
	//change function is called here to change the image for every 0.1 seconds
    t = setInterval(change, 100); 
  } else {
    clearInterval(t);
    stopped = true;
  }
  
}

// invoking function
window.onload = function() {
  dice = document.getElementById("dice");
  stopstart(); 
}