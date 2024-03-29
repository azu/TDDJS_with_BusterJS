/**
 * Created by azu.
 * Date: 12/03/03 18:31
 * License: MIT License
 */
if(!Function.prototype.curry){

}
(function(){
    var slice = Array.prototype.slice;
    Function.prototype.curry = function(){
        var target = this;
        var args = slice.call(arguments);
        return function(){
            var allArgs = args;
            if(arguments.length > 0){
                allArgs = args.concat(slice.call(arguments));
            }

            return target.apply(this, allArgs);
        }
    }
})();