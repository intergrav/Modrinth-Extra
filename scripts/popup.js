// Shows a dialog to the user that shows disclaimers and asks for help

chrome.runtime.onInstalled.addListener(function (object) {
    if (object.reason === chrome.runtime.OnInstalledReason.INSTALL) {
        chrome.tabs.create({url: chrome.runtime.getURL("popup/index.html")})
    }
});