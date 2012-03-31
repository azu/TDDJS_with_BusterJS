var config = module.exports;

config["My tests"] = {
    environment : "browser", // or "node"
    sources : [
        "lib/stub.js",
        "lib/*.js",
        "src/*.js" // Paths are relative to config file
    ],
    tests : [
        "test/*-test.js"
    ]
};