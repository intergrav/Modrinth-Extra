// Shows a page to the user with disclaimers

chrome.runtime.onInstalled.addListener(function (object) {
    if (object.reason === chrome.runtime.OnInstalledReason.INSTALL) {
        chrome.tabs.create({url: chrome.runtime.getURL("popup/index.html")})
    }
});