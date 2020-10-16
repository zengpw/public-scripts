// ==UserScript==
// @name              Font Change
// @namespace         https://github.com/zengpw
// @version           1.0
// @author            Vincent Zeng
// @description       Change font for cnbeta.com on Ubuntu
// @match             *://www.cnbeta.com/*
// @grant             GM_addStyle
// ==/UserScript==

/* eslint-disable */

(function () {
  'use strict';

  let os = navigator.platform;
  if (os.indexOf('Linux') >= 0) {
    GM_addStyle("html {font-family: 'YaHei Consolas Hybrid', 'PingFangSC', 'Monaco for Powerline' !important;}");
  }
})();
