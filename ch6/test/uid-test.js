/**
 * Created by azu.
 * Date: 12/03/03 20:20
 * License: MIT License
 */
buster.testCase("UidTest", {
    "test should  return numeric id" : function(){
        var id = tddjs.uid({});
        assert.typeOf(id, "number");
    },
    "test should return consistent id for object" : function(){
        var object = {};
        var id = tddjs.uid(object);
        assert.same(id, tddjs.uid(object));
    },
    "test should return unique id" : function(){
        var object = {}, object2 = {};
        refute.same(tddjs.uid(object), tddjs.uid(object2));
    },
    "test should return consistent id for function":function(){
        var fn = function(){};
        var id = tddjs.uid(fn);
        assert.same(id, tddjs.uid(fn));
        buster.console.log(id);
    },
    "test should return undefined for primitive":function(){
        var str = "my string value";
        refute.defined(tddjs.uid(str));
    }

});
