
chrome.contextMenus.create({
  "type"     : "normal",
  "title"    : "copyrepo",
  "contexts" : ["page"],
  "onclick"  : copyRepoName,
  "documentUrlPatterns" : ["https://github.com/*/*"]
});

function copyRepoName(info) {
  var url = info.pageUrl;
  var parts = url.split("/");
  var repo = parts.pop();
  var userName = parts.pop();
  var repoName = userName + "/" + repo;
  var textArea = document.createElement("textarea");
  textArea.style.cssText = "visibility: none;";
  document.body.appendChild(textArea);
  textArea.value = repoName;
  textArea.select();
  document.execCommand("copy");
}

