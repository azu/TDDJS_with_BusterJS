/**
 * Created by azu.
 * Date: 12/03/03 1:30
 * License: MIT License
 */

buster.testCase("CurryTest", {
    setUp:function(){
        String.prototype.trim = String.prototype.replace.curry(/^\s+|\s+$/g, "");
    },
    "test should trim both spaces" : function(){
        var str = "   some spaced string   ";
        assert.equals("some spaced string", str.trim());
    }
});

