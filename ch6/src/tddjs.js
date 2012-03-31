/**
 * Created by azu.
 * Date: 12/02/19 0:13
 * License: MIT License
 */
/*jslint indent: 2, onevar: false, plusplus: false, eqeqeq: false*/
var tddjs = (function(){
    "use strict";
    function namespace(string){
        var object = this;
        var levels = string.split(".");

        for (var i = 0, l = levels.length; i < l; i++){
            var level = levels[i];
            if (typeof object[level] == "undefined"){
                object[level] = {};
            }

            object = object[level];
        }

        return object;
    }

    return {
        namespace : namespace
    };
}());
// UID
(function(){
    var id = 0;

    function uid(object){

        if (typeof object.__uid !== "number"){
            object.__uid = id++;
        }
        return object.__uid;
    }

    if (typeof tddjs === "object"){
        tddjs.uid = uid;
    }
})();

// Iterator
(function(){
    var iterator = function iterator(collection){
        var index = 0, length = collection.length;
        function next(){
            var item = collection[index++];
            return item;
        }

        function hasNext(){
            return index < length;
        }

        return {
            next : next,
            hasNext : hasNext
        };
    };
    tddjs.iterator = iterator;
})();