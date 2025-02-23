'use strict';

function westernShopping() {
    let name;
    let item;
    let avaliable;
    name = prompt("What is your name?");
    item = (`Tony Lama 3R size 8`);
    avaliable = prompt("quanity = 1")
    weatherChecker.innerHTML = `Hi ${name}, Let's check the avaliability of your item!`;
    westernP.innerHTML = `${item} has a ${avaliable}!`;
  }
  
  westernShopButton.onclick = westernShopping;