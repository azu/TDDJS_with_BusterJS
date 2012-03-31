var config = module.exports;

config["My tests"] = {
    environment : "browser", // or "node"
    sources : [
        "lib/*.js",
        "src/*.js", ],
    tests : [
        "test/*-test.js"
    ],
    resources : [
        {
            "path" : "/",
            "file" : "fixtures/testbed.html",
            "headers" : {
                "Content-Type" : "text/html"
            }
        },
        {
            "path" : "tabs/tabs.css",
            "file" : "fixtures/tabs.css"
        },
        {
            "path" : "lib/jquery-1.4.2.min.js",
            "file" : "fixtures/lib/jquery-1.4.2.min.js"
        }
    ]
};