function newTab(tab) {
    if (tab.pendingUrl === "chrome://newtab/") {
        const redirect = chrome.extension.getURL('blank.html') + "?" + tab.url

        chrome.tabs.update(tab.id, { url: redirect });
    }
}

chrome.tabs.onCreated.addListener(newTab)