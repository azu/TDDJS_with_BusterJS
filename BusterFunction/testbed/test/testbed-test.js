/**
 * Created by azu.
 * Date: 12/03/22 21:43
 * License: MIT License
 */
buster.testCase("testbed test",{
    "test should be get div" : function(){
        var div = document.getElementById("test");
        buster.log(div);
        assert.tagName(div, "div");

    }
})