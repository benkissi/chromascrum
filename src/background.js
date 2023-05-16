//MANIFEST SETTING FOR POPUP  "action": { "default_popup": "index.html" },

// chrome.action.onClicked.addListener(function (tab) {
//   console.log("clicked--->");
//   chrome.tabs.create({
//     url: `index.html`,
//     selected: false,
//   });
// });
chrome.action.onClicked.addListener(() => {
  console.log("clicked--->");
  chrome.tabs.create({
    url: `index.html`,
    selected: false,
  });
});
chrome.action.onClicked.hasListeners();
console.log("service worker loaded", chrome.action.onClicked);
