'use strict';

function petAdoption() {
    let name;
    let avaliable;
    name = prompt("What is your name?");
    avaliable = prompt("Redirecting you to pet list")
    adoptP.innerHTML = `Hi ${name}, Let's check the avaliability of the pets!`;
    adoptButton.innerHTML = `${avaliable}`;
  }
  
  adoptButton.onclick = petAdoption;