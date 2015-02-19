
var parentId = chrome.contextMenus.create({
  "type"     : "normal",
  "title"    : "copyrepo",
  "contexts" : ["page"],
  "documentUrlPatterns" : ["https://github.com/*/*"]
});

chrome.contextMenus.create({
  "parentId" : parentId,
  "type"     : "normal",
  "title"    : "Name",
  "contexts" : ["page"],
  "onclick"  : copyRepoName,
  "documentUrlPatterns" : ["https://github.com/*/*"]
});

chrome.contextMenus.create({
  "parentId" : parentId,
  "type"     : "normal",
  "title"    : "URL",
  "contexts" : ["page"],
  "onclick"  : copyRepoURL,
  "documentUrlPatterns" : ["https://github.com/*/*"]
});

function copyRepoName(info) {
  var repoName = extractRepositoryName(info);
  copyToClipBoard(repoName);
}

function copyRepoURL(info) {
  var repoName = extractRepositoryName(info);
  copyToClipBoard("https://github.com/" + repoName + ".git");
}

function extractRepositoryName(info) {
  var url = info.pageUrl;
  var parts = url.split("/");
  var index = parts.indexOf("github.com") + 1;
  var repoName = parts.splice(index, 2).join("/");
  return repoName;
}

function copyToClipBoard(text) {
  var textArea = document.createElement("textarea");
  textArea.style.cssText = "visibility: none;";
  document.body.appendChild(textArea);
  textArea.value = text;
  textArea.select();
  document.execCommand("copy");
}

