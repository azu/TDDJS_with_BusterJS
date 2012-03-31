/**
 * Created by azu.
 * Date: 12/03/25 17:54
 * License: MIT License
 */
var ajax = tddjs.ajax;
function forceStatusAndReadyState(xhr, status, rs){
    var success = stubFn();
    var failure = stubFn();

    ajax.get("/url", {
        success : success,
        failure : failure
    });

    xhr.status = status;
    xhr.readyStateChange(rs);

    return {
        success : success.called,
        failure : failure.called
    };
}
function requestComplete(transport, options){
    if (isSuccess(transport)){
        if (typeof options.success === "function"){
            options.success(transport);
        }
    }else{
        if (typeof options.failure === "function"){
            options.failure(transport);
        }
    }
}
function isSuccess(transport){
    var status = transport.status;
    return (status >= 200 && status < 300) || status == 304 | (tddjs.isLocal() & !status);
}

var setUp = function(){
    this.tddjsIsLocal = tddjs.isLocal;
    this.ajaxCreate = ajax.create;
    this.xhr = Object.create(fakeXMLHttpRequest);
    ajax.create = stubFn(this.xhr);
};
var tearDown = function(){
    tddjs.isLocal = this.tddjsIsLocal;
    ajax.create = this.ajaxCreate;
};
buster.testCase("Get Request Test", {
    setUp : setUp,
    tearDown : tearDown,
    "Get Request Test" : {
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
        }
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
        "test should not throw without success handler" : function(){
            this.xhr.readyState = 4;
            this.xhr.status = 200;
            ajax.get("/");

            refute.exception(function(){
                this.xhr.onreadystatechange();
            }.bind(this));

        },
        "test should reset onreadystatechange when complete for memory leak(IE)" : function(){
            this.xhr.readyState = 4;
            ajax.get("/");
            this.xhr.onreadystatechange();
            assert.same(this.xhr.onreadystatechange, tddjs.noop);// 循環参照対策
        },
        "test should call success handler for local requests" : function(){
            this.xhr.readyState = 4;
            this.xhr.status = 0;
            var success = stubFn();
            tddjs.isLocal = stubFn(true);
            ajax.get("file.html", {
                success : success
            });
            this.xhr.onreadystatechange();
            assert(success.called);
        },
        "test should call success handler for status 200" : function(){
            var request = forceStatusAndReadyState(this.xhr, 200, 4);
            assert(request.success);
        }
    },
    "Request Test" : {
        "test should use specified request method" : function(){
            ajax.request("/uri", {
                method : "POST"
            });
            assert.equals(this.xhr.open.args[0], "POST");
        }
    }
});
