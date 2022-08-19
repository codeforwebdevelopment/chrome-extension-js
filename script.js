
// chrome.tabs.query(object queryInfo, function callback)

if (chrome) { chrome.tabs.query({ active: true, currentWindow: true }, (arrayOfTabs) => { logCurrentTabData(arrayOfTabs) 

}); 
// $('a').click( (event) => { chrome.tabs.create({url:event.target.href}) } )
} else { browser.tabs.query({ active: true, currentWindow: true }).then(logCurrentTabData) }

// browser.tabs
//   .query({ currentWindow: true, active: true })
//   .then(logTabs, onError);

// browser.tabs.query({ url: "*://*.mozilla.org/*" }).then(logTabs, onError);

// browser.tabs.query({active: true, currentWindow: true}) .then(logCurrentTabData)
const logCurrentTabData = (tabs) => {
    console.log(tabs, 'tabs');
    // currentTab = tabs[0];
    // console.log(currentTab.title);
    // console.log(currentTab.url);
}

function logTabs(tabs) {
    for (const tab of tabs) {
      // tab.url requires the `tabs` permission or a matching host permission.
      console.log(tab);
    }
  }
  
  function onError(error) {
    console.error(`Error: ${error}`);
  }


