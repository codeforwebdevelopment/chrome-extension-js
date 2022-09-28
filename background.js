console.log('background');

chrome.runtime.onInstalled.addListener((details) => {
    console.log('[background.js] onInstalled', details);
    // afterInstallingExt();
    if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
        chrome.runtime.setUninstallURL('https://example.com/extension-survey');
      }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(message, sender, sendResponse, 'onMessage' )
    const user = {
        username: 'demo-user'
      };
    if (message === 'get-user-data') {
        sendResponse(user);
    }
    if (message.action === 'ping') {
            sendResponse(user);
        }
    if (message.greeting === 'hello') {
        sendResponse({ farewell: 'goodbye' })
      }
  });
  


  async function afterInstallingExt(){
    let url = chrome.runtime.getURL("hello.html");
    let tab = await chrome.tabs.create({ url });
    console.log(`Created tab ${tab.id}`);
  }