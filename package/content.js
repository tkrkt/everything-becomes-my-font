chrome.storage.sync.get('fontFamily', ({fontFamily}) => {
  const style = document.createElement('style');
  style.textContent = `* {font-family: ${fontFamily} !important;}`;
  document.head.appendChild(style);
});