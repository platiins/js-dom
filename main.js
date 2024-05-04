/* 
ask user for age, if user is below 18, 
display a warning message that he is underaged, 
if he is over show him alcohol page
*/

const userAge = Number(prompt("please enter you age:"));

if (userAge < 18) {
  alert("you are underage to access this page");
  document.body.innerHTML = "<h1> no access <h2>";
}

// Add Smith, Jeff and Larry in the top, middle and end of the list

const list = document.getElementById("list");

const liSmith = document.createElement("li");
liSmith.innerText = "Smith";
liSmith.classList.add("item");
list.prepend(liSmith);

const liJeff = document.createElement("li");
liJeff.innerText = "Jeff";
liJeff.classList.add("item");
list.append(liJeff);

let liItems = document.querySelectorAll(".item");
let middleItemIndex = liItems.length / 2 - 1;

const liLarry = document.createElement("li");
liLarry.innerText = "Larry";
liLarry.classList.add("item");

liItems[middleItemIndex].append(liLarry);

// Remove Mel

liItems[5].remove();

// Add a row that says that Mel has been removed from the list

const removedMel = document.createElement("p");
removedMel.innerText =
  "*Mel has been removed form the list as got pregnant and cannot drink anymore";

removedMel.classList.add("italic");
list.append(removedMel);

// add list and background color to each odd row:

console.log(liItems);

for (let i = 0; i <= liItems.length; i++) {
  if (i % 2 === 1) {
    liItems[i].classList.add("bg-color");
  }
}
