var pathname = window.location.pathname;
var href = window.location.href;
var port = window.location.port;
var protocol = window.location.protocol;
var hash = window.location.hash;
var host = window.location.host; 

function Resolve(url) {
    return protocol + "//" + host + ((pathname == "/") ? "" : pathname) + url;
}