#### Pack webpack.test.js and its require modules.

```
$ npm install
$ webpack test.webpack.js test.webpack.bundle.js
    ... or
$ webpack test.webpack.js test.webpack.bundle.js --watch
    ... or
$ make
    ... or
$ make watch
    ...
# use chrome to open test.webpack.html or node webpack.tests.bundle.js if is a nodejs program.
```

#### Use webpack configuration file

```
$ webpack -p --progress --colors --devtool sourcemap --hot --config webpack-update2.config.js
```
