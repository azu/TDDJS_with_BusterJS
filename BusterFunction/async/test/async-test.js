/**
 * Created by azu.
 * Date: 12/03/22 1:19
 * License: MIT License
 */
buster.testCase("Async Test", {
    "test async, use promiss" : function(){
        var promise = {
            // then メソッド
            then : function(callback){
                this.callbacks = this.callbacks || [];
                this.callbacks.push(callback);
            }
        };

        setTimeout(function(){
            buster.assert(true);
            var callbacks = promise.callbacks || [];

            for (var i = 0, l = callbacks.length; i < l; ++i){
                callbacks[i]();
            }
        }, 100);
        // thenを持ったものを返す => promissと判断 (isPromise)
        return promise;
    },
    "test async ,use when.js" : function(){
        var deferred = when.defer();

        setTimeout(function(){
            buster.assert(true);
            deferred.resolver.resolve();
        }, 100);

        return deferred.promise;
    }
});
buster.testCase("My thing", {
    "test not asynchronous" : function(){
        setTimeout(function(){
            assert(true);
        }, 100);
    },
    "test asynchronous" : function(done){
        setTimeout(function(){
            assert(true);
            done();
        }, 100);
    }
})