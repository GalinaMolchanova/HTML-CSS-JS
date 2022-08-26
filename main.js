let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === '/https://drive.google.com/file/d/1Wnoe96up2Xj_0DKqr3-LmQg7GDdpq2Rb/view?usp=sharing') {
      myImage.setAttribute ('src','https://drive.google.com/file/d/1A0TRcAxE8WnTWKzh_JwNJaTli0QZiZYq/view?usp=sharing');
    } else {
      myImage.setAttribute ('src','/https://drive.google.com/file/d/1Wnoe96up2Xj_0DKqr3-LmQg7GDdpq2Rb/view?usp=sharing');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Hi! What is your name?');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
