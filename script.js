function getNote(info,tab) {
  var re = /^\d+$/,
      sText = info.selectionText,
      ok = re.exec(sText);
  if (ok) {
    console.log("Note " + sText + " is a number");
    chrome.tabs.create({  
      url: "http://www.google.com/search?q=" + info.selectionText,
    }); 
  } else {
    console.log(sText + " is not a number");
  }        
}
chrome.contextMenus.create({
  title: "Note: %s", 
  contexts:["selection"], 
  onclick: getNote,
});
