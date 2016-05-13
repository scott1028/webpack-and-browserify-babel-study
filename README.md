![Alt text](https://raw.githubusercontent.com/scott1028/the-R-study/master/array_and_type.png "array_and_type.png")


#### Conception

- gulp/grunt 是一个工具，而 webpack/browserify 等等是模块化方案。gulp 也可以配置 seajs、requirejs 甚至 webpack 的插件。
- Browserify是一个供浏览器环境使用的模块打包工具，像在node环境一样，也是通过require('modules')来组织模块之间的引用和依赖，既可以引用npm中的模块，也可以引用自己写的模块，然后打包成js文件，再在页面中通 <script>标签加载。当然对于很多NodeJS模块，比如涉及到io操作的模块，就算通过browserify打包后肯定也无法运行在浏览器环境中，这种情况下就会用到为它们重写的支持浏览器端的分支模块，可以在browserify search搜索到这些模块。
