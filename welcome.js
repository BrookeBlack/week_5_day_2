'use strict';

function weatherChecker() {
    let name;
    let weather;
    name = prompt("What is your name?");
    weather = prompt("Sunny, high 75 degrees F, 5mph NW winds")
    weatherChecker.innerHTML = `Hi ${name}, Here is your local weather forecast!`;
    cartParagraph.innerHTML = `Today's weather forecast will be ${item}`;
  }
  
  weatherButton.onclick = weatherChecker;