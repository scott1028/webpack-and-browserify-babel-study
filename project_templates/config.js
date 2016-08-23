'use strict';


module.exports = {
    entry: "./app/app.js",  // main.js include all require() method invocation.
    output: {  // dist out put path source from entry
        path: __dirname + "/dist",
        filename: "bundle.js"
    }
};
