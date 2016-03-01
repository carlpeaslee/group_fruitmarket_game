//this gives us a random number
function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}

//this is what controlls which function runs when
//the market updates and the interval at which it  updates
setInterval(updateMarket, 15000);

//this gives us a random number between -.5 and .5


var marketApplePrice = 1;
var marketBananaPrice = 1;
var marketGrapePrice = 1;
var marketOrangePrice = 1;
var marketPearPrice = 1;

//this is the function that runs when the market updates
function updateMarket() {
  marketApplePrice += randomNumber(-50, 50)/100;
  marketBananaPrice += randomNumber(-50, 50)/100;
  marketGrapePrice += randomNumber(-50, 50)/100;
  marketOrangePrice += randomNumber(-50, 50)/100;
  marketPearPrice += randomNumber(-50, 50)/100;


}


$(document).ready(function(){
  console.log("this is ready");



});
