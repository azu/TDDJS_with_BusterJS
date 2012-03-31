/**
 * Created by azu.
 * Date: 12/03/03 20:48
 * License: MIT License
 */

buster.testCase("IteratorTest", {
    "test next should return first item" : function(){
        var collection = [1, 2, 3, 4, 5];
        var iterator = tddjs.iterator(collection);
        assert.same(collection[0], iterator.next());
        assert(iterator.hasNext());
    },
    "test hasNext should be false after last time" : function(){
        var collection = [1, 2];
        var iterator = tddjs.iterator(collection);
        iterator.next();
        iterator.next();
        refute(iterator.hasNext());
    },
    "test should loop collection with iterator" : function(){
        var collection = [1, 2, 3, 4, 5];
        var it = tddjs.iterator(collection);
        var result = [v ];

        while(it.hasNext()){
            result.push(it.next());
        }
        assert.equals(collection, result);
    }
})