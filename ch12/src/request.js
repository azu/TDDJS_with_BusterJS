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
        options = tddjs.extend({}, options);
        options.method = "GET";
        ajax.request(url, options);
    }

    function post(url, options){
        options = tddjs.extend({}, options);
        options.method = "POST";
        ajax.request(url, options);
    }

    function setData(options){
        if (typeof options.data !== "undefined"){
            if (options.method === "GET"){
                options.url += "?" + tddjs.util.urlParams(options.data);
                options.data = null;
            }else if (options.method === "POST"){
                options.data = tddjs.util.urlParams(options.data);
            }else{
                options.data = null;//null for firefox3 bug
            }
        }
    }

    function request(url, options){
        if (typeof url !== "string"){
            throw new TypeError("URL should be string");
        }
        options = tddjs.extend({}, options);
        options.url = url;
        setData(options);
        var transport = ajax.create();
        var method = options.method || "GET";
        transport.open(method, options.url, true);
        transport.onreadystatechange = function(){
            if (transport.readyState == 4){
                requestComplete(transport, options);
                transport.onreadystatechange = tddjs.noop;
            }
        }
        transport.send(options.data);
    }

    ajax.get = get;
    ajax.post = post;
    ajax.request = request;

}());

