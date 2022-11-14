var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randonImageSource = "images/" + randomDiceImage;

document.querySelectorAll("img")[0];

image1.setAttribute("src", randonImageSource);

var randomNumber2 = Math.floor(Math.random() + 6 + 1);

var randonImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src" , randonImageSource);
