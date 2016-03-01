//this gives us a random number
function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}

//this is what controlls which function runs when
//the market updates and the interval at which it  updates
setInterval(updateMarket, 1500);

//these are the variables that hold the market prices of the fruits
var marketApplePrice = 1;
var marketBananaPrice = 1;
var marketGrapePrice = 1;
var marketOrangePrice = 1;
var marketPearPrice = 1;
var marketWatermelonPrice = 1;


//this is a function that updates a single fruit market price
function singleFruitMarketUpdater(fruitMarket){
  fruitMarket += randomNumber(-50, 50)/100;
  if (fruitMarket < .5) {
    fruitMarket = .5;
  };

  if (fruitMarket > 9.99) {
    fruitMarket = 9.99;
  };
  return ((Math.floor(fruitMarket*100))/100);
}


//this is the function that updates the market
function updateMarket() {
  //this part changes the market price of each fruit
  marketApplePrice = singleFruitMarketUpdater(marketApplePrice);
  $('.apple-price').text(marketApplePrice);
  $('.buy-apple-button').data("applePriceData", marketApplePrice);
  marketBananaPrice = singleFruitMarketUpdater(marketBananaPrice);
  $('.banana-price').text(marketBananaPrice);
  marketGrapePrice = singleFruitMarketUpdater(marketGrapePrice);
  $('.grape-price').text(marketGrapePrice);
  marketOrangePrice = singleFruitMarketUpdater(marketOrangePrice);
  $('.orange-price').text(marketOrangePrice);
  marketPearPrice = singleFruitMarketUpdater(marketPearPrice);
  $('.pear-price').text(marketPearPrice);
  marketWatermelonPrice = singleFruitMarketUpdater(marketWatermelonPrice);
  $('.watermelon-price').text(marketWatermelonPrice);

};

var inventory = {
  cashOnHand: 100,
  appleStock: 0,
  bananaStock: 0,
  grapeStock: 0,
  orangeStock: 0,
  pearsStock: 0,
  watermelonStock: 0,
  applePrices: [],
  bananasPrices: [],
  grapesPrices: [],
  orangesPrices: [],
  pearsPrices: [],
  watermelonPrices: [],
};


function averagePrice(inventoryArray) {
  var totalPrice = 0;
  for (var i=0; i < inventoryArray.length; i++) {
    totalPrice += inventoryArray[i];
  }
  var averagePrice = totalPrice/inventoryArray.length;
  return averagePrice;
}

function buyApple () {
  currentApplePrice = $('.buy-apple-button').data("applePriceData");
  //this makes it so you can't buy apples when you don't have enough money
  if (inventory.cashOnHand < currentApplePrice) {
     console.log("YOU CANT BUY THAT");
     //TODO add an alert telling the user they cant
  } else {
    //this adds an apple to our stock of apples
    inventory.appleStock ++;
    //this adds the purchase price to our array of apple prices
    inventory.applePrices.push(currentApplePrice);
    //this subtracts the current apple price from our cash on hand
    inventory.cashOnHand -= currentApplePrice;
    //this will append the price of the last apple purchased to your inventory
    $('.apple-inventory').append('<p>Apple purchased for: $' + currentApplePrice.toFixed(2) + '</p>')
    //this updates the current cash on hand at the top of the page
    $('.current-cash').text(inventory.cashOnHand.toFixed(2));
    //this updates the inventory display
    $('.apple-inventory-display').text("Apple count: " + inventory.appleStock);
    //this creates a variable that is the average apple price in inventory
    var averageApplePrice = averagePrice(inventory.applePrices).toFixed(2);
    //this appends that average to your inventory
    $('.avg-apple-price').text("Average Price: $" + averageApplePrice);
  };
}



$(document).ready(function(){
  //makes sure that the current cash on hand displayed on the dom matches the object
  $('.current-cash').text(inventory.cashOnHand);

  $('.buy-apple-button').data("applePriceData", marketApplePrice);
  $('.buy-apple-button').on('click', buyApple);

});
