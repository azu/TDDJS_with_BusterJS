/**
 * Created by azu.
 * Date: 12/03/18 3:18
 * License: MIT License
 */
(function(){
    function Observable(){
        if (!this.observers){
            this.observers = [];
        }
    }

    function observe(observer){
        if (!this.observers){
            this.observers = [];
        }
        if (typeof observer !== "function"){
            throw new TypeError("observer is not function");
        }
        this.observers.push(observer);
    }

    function hasObserver(observer){

        //return ~this.observers.indexOf(observer);
        if (!this.observers){
            return false;
        }
        for (var i = 0, len = this.observers.length; i < len; i++){
            var thatObserver = this.observers[i];
            if (thatObserver == observer){
                return true;
            }
        }
        return false;
    }

    function notify(){
        if (!this.observers){
            return;
        }
        var args = Array.prototype.slice.call(arguments, 0);
        for (var i = 0, len = this.observers.length; i < len; i++){
            var observer = this.observers[i];
            try{
                observer.apply(this, args);
            }catch (e){
            }
        }
    }

    tddjs.namespace("util").observable = {
        observe : observe,
        hasObserver : hasObserver,
        notify : notify
    };
})();