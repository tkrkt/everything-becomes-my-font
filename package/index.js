chrome.runtime.onInstalled.addListener(({reason}) => {
  if (reason === 'install') {
    chrome.storage.sync.set({fontFamily: '"Comic Sans MS"'}, () => {
      chrome.runtime.openOptionsPage();
    });
  }
});

chrome.browserAction.onClicked.addListener(tab => {
  chrome.tabs.executeScript(tab.id, {
    file: 'content.js'
  });
});