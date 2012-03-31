/**
 * Created by azu.
 * Date: 12/03/22 1:32
 * License: MIT License
 */
var testCase = buster.testCase("Nested setup and teardown call order", {
    setUp : function(){
        buster.console.log("Setup #1");
    },
    tearDown : function(){
        buster.console.log("Teardown #1");
    },
    "test #1" : function(){
        buster.console.log("Test #1");
        assert(true);
    },
    "context" : {
        setUp : function(){
            buster.console.log("Setup #2");
        },
        "test #2" : function(){
            assert(true);
            buster.console.log("Test #2");
        },
        "context" : {
            setUp : function(){
                buster.console.log("Setup #3");
            },
            tearDown : function(){
                buster.console.log("Teardown #3");
            },
            "//test #3" : function(){
                buster.console.log("Test #3");
            }
        }
    }
});

