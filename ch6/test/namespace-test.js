var assert = buster.assertions.assert;
var refute = buster.assertions.refute;
buster.testCase("NameSpace", {
    tearDown : function(){
        delete tddjs.nstest;
    },
    "test should create non-existen object" : function(){
        tddjs.namespace("nstest");
        assert.isObject(tddjs.nstest);
    },
    "test should not overwrite existing object" : function(){
        tddjs.nstest = {
            nested : {}
        };
        var result = tddjs.namespace("nstest.nested");
        assert.same(tddjs.nstest.nested, result);
    },
    "test only create missing parts" : function(){
        var existing = {};
        tddjs.nstest = {
            existing: existing
        };
        buster.console.log(buster.format.ascii(tddjs));
        var result = tddjs.namespace("nstest.nested.ui");
        assert.same(existing, tddjs.nstest.existing);
        assert.isObject(tddjs.nstest.nested.ui);
    }
});
