'use strict';

function petAdoption() {
    let name;
    let avaliable;
    avaliable = ("Redirecting you to pet list");
    name = prompt("What is your name?");
    adoptP.innerHTML = `Hi ${name}, Let's check the avaliability of the pets!`;
    adoptButton.innerHTML = `${avaliable}`;
  }
  
  adoptButton.onclick = petAdoption;