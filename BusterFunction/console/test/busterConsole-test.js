/**
 * Created by azu.
 * Date: 12/03/22 8:12
 * License: MIT License
 */
buster.testCase("Buster Console Test", {
    "test should available buster.log" : function(){
        buster.log("console test");
        assert.isFunction(buster.log);
    },
    "test should output format string" : function(){
        assert.isObject(buster.console);
        buster.log(buster.console);
        var fn = function innerFn(){
            doSomthing();
        }, obj = {"a" : 1, b : {b1 : "in"}, c : [1, 2, 3]};
        buster.log(fn, "\n", obj);

    },
});