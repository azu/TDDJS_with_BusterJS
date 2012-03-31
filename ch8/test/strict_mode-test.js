buster.testCase("StrictModeTest", {
    "test repeated identifiers in parameters" : function(){
        function es3Andes5(a, b, a){
            return a;
        }

        // strict error
        assert(6, es3Andes5(1, 2, 6));
        buster.console.log(Object.keys(assert));
    }
});

