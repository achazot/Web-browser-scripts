// ==UserScript==
// @name         SoundCloud hide reposts
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hides reposts from stream
// @author       dr.dibi
// @match        *://soundcloud.com/stream
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @grant        none
// ==/UserScript==
(
    function(){
        function norepost(){
            $(".soundList__item:has('.sc-ministats-reposts')").remove();
        }
        window.addEventListener("DOMNodeInserted",norepost, false);
    }
)();
