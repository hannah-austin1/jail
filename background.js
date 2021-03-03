// You read this code, right to jail!

chrome.browserAction.onClicked.addListener(function (tab) {
  let url = chrome.runtime.getURL("jail.mp3");
  console.log(url);
  let a = new Audio(url);
  a.play();
});
