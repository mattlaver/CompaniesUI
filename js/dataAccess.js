'use strict';

var DataAccess = (function() {

    function getCORSRequest(method, url) {
        return new Promise(function (resolve, reject) {
            var xhr = typeof XDomainRequest !== 'undefined' ? new XDomainRequest() : new XMLHttpRequest();

            xhr.open(method, url, true);
            xhr.onload = function () {
                resolve(JSON.parse(xhr.responseText));
            };

            xhr.onerror = reject;
            xhr.send();
        });
    }

    var
        api = {
           getCORSRequest: getCORSRequest
        }

    return api;
})();