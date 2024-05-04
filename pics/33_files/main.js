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

// add list to your page:

const ulList = document.querySelector(".list");
const liItems = document.querySelectorAll(".item");

// add background color to each odd row:

for (let i = 0; i <= liItems.length; i++);
{
  if (i % 2 === 0) {
    // liItems[index].classList.add("bg-color");
    console.log(liItems[i]);
  }
}

// Add Smith, Jeff and Larry in the top, middle and end of the list
// Remove Mel
// Add a row that says that Mel has been removed from the list
