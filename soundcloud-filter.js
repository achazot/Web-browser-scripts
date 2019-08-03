// ==UserScript==
// @name         SoundCloud stream filter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hides reposts and playlists from stream
// @author       dr.dibi
// @match        *://soundcloud.com/stream
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @grant        none
// ==/UserScript==
(
    function(){
        function scfilter(){
            $(".soundList__item:has('.sc-ministats-reposts')").remove();
            $(".soundList__item:has('.playlist')").remove();
        }
        window.addEventListener("DOMNodeInserted",scfilter, false);
    }
)();
