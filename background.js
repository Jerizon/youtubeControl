
chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
  chrome.declarativeContent.onPageChanged.addRules([{
    conditions: [new chrome.declarativeContent.PageStateMatcher({
      pageUrl: {hostEquals: 'www.youtube.com', schemes: ['https', 'http']},
    })
    ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
  }]);
});
