// ==UserScript==
// @name     etro-export
// @version  1
// @grant    none
// @match https://etro.gg/gearset/*
// ==/UserScript==
const e = document.createElement('div')
e.innerHTML ='<a><button type="button" class="bp3-button bp3-minimal etro-button-hover-primary-fill" location="[object Object]" match="[object Object]"><span class="bp3-button-text">Copy</span></button></a>'
e.addEventListener("click", exportToClipboard)
document.getElementsByClassName("bp3-navbar-group bp3-align-left")[0].appendChild(e);

function exportToClipboard () {

  var stats =
    getElementByXpath("/html/body/div[1]/div/div[2]/div[1]/div[2]/div[1]/div/span[2]/span[1]").innerHTML.replace(/\D+/g, '') + "\n" +
    "2,64" + "\n" +
    getElementByXpath("/html/body/div[1]/div/div[2]/form/div/div[2]/div/div[7]/div[2]/div/div/div/div[3]/div[2]").innerHTML + "\n" +
    getElementByXpath("/html/body/div[1]/div/div[2]/form/div/div[2]/div/div[7]/div[2]/div/div/div/div[6]/div[2]").innerHTML + "\n" +
    getElementByXpath("/html/body/div[1]/div/div[2]/form/div/div[2]/div/div[7]/div[2]/div/div/div/div[7]/div[2]").innerHTML + "\n" +
    getElementByXpath("/html/body/div[1]/div/div[2]/form/div/div[2]/div/div[7]/div[2]/div/div/div/div[8]/div[2]").innerHTML + "\n" +
    getElementByXpath("/html/body/div[1]/div/div[2]/form/div/div[2]/div/div[7]/div[2]/div/div/div/div[9]/div[2]").innerHTML

    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = stats;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);

}

function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}