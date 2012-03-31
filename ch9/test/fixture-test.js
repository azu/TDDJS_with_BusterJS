/**
 * Created by azu.
 * Date: 12/03/10 19:00
 * License: MIT License
 */
var assert = buster.assertions.assert;
var refute = buster.assertions.refute;
buster.testCase("Fixture Test",{
    "test should be load fixture testbed.html":function(){
        "use strict";
        var title = document.title;
        assert.equals("Tabbed panels, compact jQuery style", title);
        refute.equals("Buster", title);
    }
})