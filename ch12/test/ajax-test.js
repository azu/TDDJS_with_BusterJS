/**
 * Created by azu.
 * Date: 12/03/25 17:25
 * License: MIT License
 */
buster.testCase("Ajax Create Test", {
    "test should return XHR obejct" : function(){
        var xhr = tddjs.ajax.create();

        assert.isNumber(xhr.readyState);
        assert(tddjs.isHostMethod(xhr, "open"));
        assert(tddjs.isHostMethod(xhr, "send"));
        assert(tddjs.isHostMethod(xhr, "setRequestHeader"));
    }
});
