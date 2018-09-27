// ==UserScript==
// @name SoundCloud hide playlists
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hides playlists from stream
// @author       dr.dibi
// @match        *://soundcloud.com/stream
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @grant        none
// ==/UserScript==
(
    function(){
        function norepost(){
            $(".soundList__item:has('.playlist')").remove();
        }
        window.addEventListener("DOMNodeInserted",norepost, false);
    }
)();
