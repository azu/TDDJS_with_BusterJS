/**
 * Created by azu.
 * Date: 12/03/25 17:54
 * License: MIT License
 */
var ajax = tddjs.ajax;
buster.testCase("Get Request Test", {
    setUp : function(){
        this.ajaxCreate = ajax.create;
        this.xhr = Object.create(fakeXMLHttpRequest);
        ajax.create = stubFn(this.xhr);
    },
    tearDown : function(){
        ajax.create = this.ajaxCreate;
    },
    "test should define get method" : function(){
        assert.isFunction(ajax.get);
    },
    "test should throw error /w url" : function(){
        assert.exception(function(){
            ajax.get();
        });
    },
    "test should obtain an XHR object" : function(){

        ajax.get("/url");

        assert(ajax.create.called);
    },
    "test should call open with method" : function(){
        var url = "/url";
        ajax.get(url);

        assert.equals(["GET", url, true], this.xhr.open.args);
    },
    "test should add onreadystatechange handler" : function(){
        ajax.get("/url");

        assert.isFunction(this.xhr.onreadystatechange);
    },
    "test should call send" : function(){
        ajax.get("/url");

        assert(this.xhr.send.called);
    },
    "ReadState Handler Test" : {
        setUp : function(){
            this.ajaxCreate = ajax.create;
            this.xhr = Object.create(fakeXMLHttpRequest);
            ajax.create = stubFn(this.xhr);
        },
        tearDown : function(){
            ajax.create = this.ajaxCreate;
        },
        "test should call success handler for status 200" : function(){
            this.xhr.readyState = 4;
            this.xhr.status = 200;
            var success = stubFn();
            // 成功したらsuccessが呼ばれる
            ajax.get("/url", {
                success : success
            });
            this.xhr.onreadystatechange();

            assert(success.called);
        }
    }
});
