
    "chrome_url_overrides" : {
      "newtab": "newtab.html"
      },


        "content_scripts": [
      {
        "js": ["content.js"],
        "matches": ["<all_urls>"],
        "all_frames": false,   "run_at": "document_end" 
      }
    ],
   
       "page_action": {
      "default_popup": "newtab.html"
  }

           "matches": ["https://*.google.com/*"]url: "*://*.mozilla.org/*"

    "background": {
        "service_worker": "background.js"
      },

       "permissions": [
      "activeTab", 
     "tabs",
     "webNavigation",
    "scripting"
    ]

        "action": {
      "default_popup": "newtab.html",
      "default_title": "Open the popup"
  },

    "browser_action": {

    "default_popup": "newtab.html",
    "default_title": "Open the popup"
  },