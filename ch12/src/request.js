/*jslint indent: 2, eqeqeq: false, onevar: false*/
/*globals tddjs*/
tddjs.noop = function(){
};
tddjs.isLocal = (function(){
    function isLocal(){
        return !!(window.location && window.location.protocol.indexOf("file:") === 0);
    }

    return isLocal;
})();
(function(){
    var ajax = tddjs.namespace("ajax");

    function requestComplete(transport, options){


        if (transport.status === 200 || (tddjs.isLocal() && !status)){
            if (typeof options.success === "function"){
                options.success(transport);
            }
        }
    }

    function get(url, options){
        if (typeof url !== "string"){
            throw new TypeError("URL should be string");
        }
        options = options || {};
        var transport = ajax.create();
        transport.open("GET", url, true);
        transport.onreadystatechange = function(){
            if (transport.readyState == 4){
                requestComplete(transport, options);
                transport.onreadystatechange = tddjs.noop;
            }
        }
        transport.send();
    }

    ajax.get = get;

}());

