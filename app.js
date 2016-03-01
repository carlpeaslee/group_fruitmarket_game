//this gives us a random number
function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}

//this is what controlls which function runs when
//the market updates and the interval at which it  updates
setInterval(updateMarket, 15000);

var marketApplePrice = 1;
var marketBananaPrice = 1;
var marketGrapePrice = 1;
var marketOrangePrice = 1;
var marketPearPrice = 1;

//this is a function that updates a single fruit market price
function singleFruitMarketUpdater(fruitMarket){
  fruitMarket += randomNumber(-50, 50)/100;
  if (fruitMarket < .5) {
    fruitMarket = .5;
  };

  if (fruitMarket > 9.99) {
    fruitMarket = 9.99;
  };
  return ((Math.round(fruitMarket*100))/100);
}


//this is the function that runs when the market updates
function updateMarket() {
  //this part changes the market price of each fruit
  marketApplePrice = singleFruitMarketUpdater(marketApplePrice);
  $('.apple-price').text(marketApplePrice);
  marketBananaPrice = singleFruitMarketUpdater(marketBananaPrice);
  $('.banana-price').text(marketBananaPrice);
  marketGrapePrice = singleFruitMarketUpdater(marketGrapePrice);
  $('.grape-price').text(marketGrapePrice);
  marketOrangePrice = singleFruitMarketUpdater(marketOrangePrice);
  $('.orange-price').text(marketOrangePrice);
  marketPearPrice = singleFruitMarketUpdater(marketPearPrice);
  $('.pear-price').text(marketPearPrice);

  console.log(marketApplePrice, marketBananaPrice, marketGrapePrice, marketOrangePrice, marketPearPrice)


}


$(document).ready(function(){
  console.log("this is ready");



});
