console.log('content');

chrome.tabs.query({active: true, currentWindow: true},function(tabs) {
  console.log(tabs, 'tabsquery sendMessage');
    chrome.tabs.sendMessage(tabs[0]['id'] || 0, {greeting: "hello"}, (response)=> {
        if (!window.chrome.runtime.lastError) {
          // message processing code goes here
          console.log(response, 'hb');
       } else {
        console.log('err');
         // error handling code goes here
       }
    });
  });
//     // 1. Send a message to the service worker requesting the user's data
chrome.runtime.sendMessage('get-user-data', (response) => {
    // 3. Got an asynchronous response with the data from the service worker
    console.log('initializeUI', response);
  });

  chrome.extension.sendMessage({action: "ping"}, function(resp) {
    console.log(JSON.stringify(resp), 'ping');
});

  chrome.tabs.query({ url: 'https://*.google.com/*' }, tabs => {
  console.log(tabs, 'googlematches');

    tabs.forEach(tab => 
      
      chrome.tabs.sendMessage(tab.id, { colour: "red" } ) // NW
    );
  });

  chrome.bookmarks.getTree( (bookmarkTreeNodes)=> {
 console.log(bookmarkTreeNodes, 'bookmarkTreeNodes');
  });

  function  deleteDomainCookies(host) {
    console.log(host, 'host');
  chrome.cookies.getAll( {url: host} , (res)=>{
console.log(res, 'cookies');
  })

}

deleteDomainCookies('https://github.com');

// Type 'nt' plus a search term into the Omnibox to open search in new tab.
// This event is fired with the user accepts the input in the omnibox.
chrome.omnibox.onInputEntered.addListener((text) => {
  console.log('onInputEntered', text);
  // Encode user input for special characters , / ? : @ & = + $ #
  var newURL = 'https://www.google.com/search?q=' + encodeURIComponent(text);
  chrome.tabs.create({ url: newURL });
});