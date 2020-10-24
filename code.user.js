// ==UserScript==
// @name         @CopyURL
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  URLをコピーする
// @author        tsukemono
// @run-at        document-end
// ==/UserScript==
(function() {
    'use strict';
    var retVal=false;
    while (retVal==false) {
        var CC = document.createElement('textarea');
        CC.textContent = document.location.href;
        var BD = document.getElementsByTagName('body')[0];
        BD.appendChild(CC);CC.select();
        retVal = document.execCommand('copy');
        //alert(retVal);
    }
    //window.close();//コピーしたあとURLを閉じるなら
    //window.open('about:blank','_self').close();
})();
