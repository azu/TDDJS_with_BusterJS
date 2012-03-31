var config = module.exports;

config["My tests"] = {
    environment : "browser", // or "node"
    sources : [
        "src/*.js", // Paths are relative to config file
    ],
    tests : [
        "test/*-test.js"
    ],
    "resources" : [
        {// testbed
            "path" : "/",
            "file" : "fixtures/testbed.html",
            "headers" : {
                "Content-Type" : "text/html"
            }
        },
        {// JSON APIのモック
            "path" : "/res.json",
            "content" : JSON.stringify({
                text : "テキストー",
                id : 4
            }),
            "headers" : {
                "Content-Type" : "application/json"
            }
        }
    ]
}