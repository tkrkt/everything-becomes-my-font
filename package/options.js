const input = document.querySelector('#font-family');

input.focus();

chrome.storage.sync.get('fontFamily', ({fontFamily}) => {
  input.value = fontFamily;
});

input.addEventListener('input', () => {
  let fontFamily = input.value.trim();
  if (/\s/.test(fontFamily) && !/['"]/.test(fontFamily)) {
    fontFamily = `"${fontFamily}"`;
  }
  chrome.storage.sync.set({fontFamily});
});

input.addEventListener('keydown', ({keyCode}) => {
  if (keyCode === 13) { // Enter
    window.close();
  }
});