// ==UserScript==
// @name              Iciba Add Copy Button
// @namespace         https://github.com/zengpw
// @version           1.1
// @author            Vincent Zeng
// @description       Add copy button for iciba.com
// @match             *://www.iciba.com/word*
// @grant             GM.setClipboard
// @require           https://cdn.staticfile.org/jquery/3.5.0/jquery.min.js
// ==/UserScript==

/* eslint-disable */

(function () {
  'use strict';

  let checkURL = setInterval(function () {
    if (document.URL != "http://www.iciba.com/") {
      clearInterval(checkURL);
      refreshCopyArea();
      addObserver();
    }
  }, 1000);
})();

function addObserver() {
  // 创建观察者对象
  let MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
  let observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      refreshCopyArea();
    });
  });

  // 配置观察选项
  let config = {
    attributes: true,
    childList: true,
    subtree: true,
    characterData: true,
    attributeOldValue: true,
    characterDataOldValue: true
  };

  // 开始观察目标节点
  let target = document.querySelector('h1');
  observer.observe(target, config);

  // 停止观察
  // observer.disconnect();

  console.log("observer added");
}

function refreshCopyArea() {
  // remove copy button
  try {
    $("li").remove(".copyButton");
    console.log("removed");
  } catch (e) {
    console.log("removed failed!!!");
  }

  // create copy button
  try {
    let content = "";
    let symbolObj = $("ul[class^='Mean_symbols_']");

    // UK
    let symbolUK = symbolObj.find("li")[0].innerText;
    symbolUK = symbolUK.replace("英", "UK. ").concat(", ");

    if ($.type(symbolUK) !== "undefined")
      content = symbolUK;

    // US
    let symbolUS = symbolObj.find("li")[1].innerText;
    symbolUS = symbolUS.replace("美", "US. ").concat(", ");

    if ($.type(symbolUS) !== "undefined")
      content = symbolUK + symbolUS;

    // create copy button
    let copyButton = $("<li></li>").text("复制音标").css({ "color": "#D26900", "margin-right": "10px" }).addClass("copyButton");
    copyButton.click(function () {
      GM.setClipboard(content);
      copiedButton.fadeIn(500);
      copiedButton.fadeOut(3000);
    });
    symbolObj.append(copyButton);

    // create hint text
    let copiedButton = $("<li></li>").text("Copied").css({ "color": "#7E3D76", "display": "none" }).addClass("copyButton");
    symbolObj.append(copiedButton);
  } catch (e) {
    console.error(e);
    console.log("something wrong!!!");
  }
}
