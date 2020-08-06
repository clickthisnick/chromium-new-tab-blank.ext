function createTab(tab) {
    if (tab.url === "chrome://newtab" || tab.url === "" || tab.url === null) {
        const redirect = chrome.extension.getURL('blank.html')

        chrome.tabs.update(tab.id, { url: redirect });
    }
}

chrome.tabs.onCreated.addListener(createTab)
