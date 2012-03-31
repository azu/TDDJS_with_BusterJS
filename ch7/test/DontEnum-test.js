/**
 * Created by azu.
 * Date: 12/03/03 22:59
 * License: MIT License
 */

buster.testCase("DontEnum bug", {
    "test should enumerate shadowed object properties" : function(){
        var object = {
            // Properties with DontEnum on Object.prototype
            toString : "toString",
            toLocaleString : "toLocaleString",
            valueOf : "valueOf",
            hasOwnProperty : "hasOwnProperty",
            isPrototypeOf : "isPrototypeOf",
            propertyIsEnumerable : "propertyIsEnumerable",
            constructor : "constructor"
        };

        var result = [];
        for (var property in object){
            result.push(property);
        }
        buster.console.bude(buster.console);
        assert.equals(7, result.length);
    }
});