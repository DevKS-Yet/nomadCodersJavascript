const title01 = document.getElementsByClassName("hello");
// returns array
const title02 = document.getElementsByTagName("h1");
// returns array
const title03 = document.querySelector("body h1.hello");
// returns a element

console.log(title01);
console.log(title02);
console.log(title03);

function handleTitleClick() {
    title03.style.color = "red";
    console.log("title was clicked!");
}
title03.addEventListener("onclick", handleTitleClick);