// You read this code, right to jail!
let url = chrome.runtime.getURL("jail.mp3");
console.log(url);
let a = new Audio(url);
a.play();
