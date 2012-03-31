/**
 * Created by azu.
 * Date: 12/03/18 3:18
 * License: MIT License
 */

buster.testCase("Observable Add Observer Test", {
    setUp : function(){
        this.observable = Object.create(tddjs.util.observable);
    },
    "test should store function" : function(){
        var observers = [function(){
        }, function(){
        }];
        this.observable.observe(observers[0]);
        this.observable.observe(observers[1]);
        assert.equals(observers, this.observable.observers);
    },
    "test should throw for unCallable observer" : function(){

        assert.exception(function(){
            this.observable.observe({});
        }, "TypeError");
    }
});
// one method , one testCase
buster.testCase("Observable has Observable Test", {
    setUp : function(){
        this.observable = Object.create(tddjs.util.observable);
    },
    "test should return true when has observer" : function(){

        var observer = function(){
        };
        var observer2 = function(){
        };
        this.observable.observe(observer);
        this.observable.observe(observer2);
        assert(this.observable.hasObserver(observer));
        assert(this.observable.hasObserver(observer2));
    },
    "test should return false when no observers" : function(){

        var observer = function(){
        };
        refute(this.observable.hasObserver(observer));
    }
});
buster.testCase("Observable Notify Observers Test", {
    setUp : function(){
        this.observable = Object.create(tddjs.util.observable);
    },
    "test should call all observers" : function(){

        var spy1 = sinon.spy();
        var spy2 = sinon.spy();
        this.observable.observe(spy1);
        this.observable.observe(spy2);
        this.observable.notify();

        assert.called(spy1);
        assert.called(spy2);
    },
    "test should pass through arguments" : function(){

        var spy = sinon.spy();
        this.observable.observe(spy);
        this.observable.notify(["string", 1, true]);

        assert.calledWith(spy, ["string", 1, true]);
    },
    "test should notify all even when some fail" : function(){

        var observer = function(){
            throw new Error("OOO");
        }
        var spy = sinon.spy();
        this.observable.observe(observer);
        this.observable.observe(spy);
        this.observable.notify();

        assert.called(spy);

    },
    "test should call observers in the order they were added" : function(){

        var spy1 = sinon.spy();
        var spy2 = sinon.spy();
        this.observable.observe(spy1);
        this.observable.observe(spy2);
        //call spy1 -> spy2
        this.observable.notify();
        assert.callOrder(spy1, spy2);
    },
    "test should not fail if no observers" : function(){

        refute.exception(function(){
            this.observable.notify();
        })
    }
});