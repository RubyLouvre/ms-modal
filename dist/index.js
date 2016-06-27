/*!
 * 弹出层组件 by 司徒正美
 * avalon的弹出层组件
 *      1.  isShow: 用于控制显示与否
 *      2.  title: 标题
 *      3.  content: 内容，这个是一个非常复杂的HTML结构
 *      4.  onOk
 *      5:  onCancel
 *      
 *      使用
 *      兼容IE6-8
 *      ```
 *      <xmp ms-widget="[{is:'ms-modal'}, @config]"><p>弹窗的内容</p><p>弹窗的内容</p><p>弹窗的内容结束!</p></xmp>
 *      ```
 *      只支持现代浏览器(IE9+)
 *      ```
 *      <ms-modal ms-widget="@config"><p>弹窗的内容</p><p>弹窗的内容</p><p>弹窗的内容结束!</p></ms-modal>
 *      ```
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["avalon"] = factory();
	else
		root["avalon"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var avalon = __webpack_require__(1)
	__webpack_require__(2)
	avalon.define({
	    $id: 'test',
	    show: function(){
	        this.config.isShow = true
	    },
	    config: {
	        isShow: false,
	        onCancel: function(){
	            alert('cancel')
	        },
	        onOk: function(){
	            alert('ok')
	        },
	        title:'这是测试'
	    }
	})

	module.exports = avalon //注意这里必须返回avalon,用于webpack output配置

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * built in 2016-6-27:1 version 2.10 by 司徒正美
	 * 重大升级!!!!
	 *  
	 * 重构虚拟DOM同步真实DOM的机制,现在是一边diff一边patch,一个遍历搞定!
	 * (之前是diff新旧虚拟DOM树,然后再为真实DOM树刷新)
	 *     
	 *     
	 *     
	 * 修复&nbsp;&copy; 等HTML实体的转义问题
	 * 修复IE6-8下复制闭包中的对象返回相同对象,导致ms-for出BUG的问题 1522 1511
	 * 所有vm都支持onReady,在它第一次刷新作用区载时触发 
	 * 添加新的对齐节点算法
	 * 优化lexer虚拟DOM生成器
	 * 完全重写ms-for, ms-html指令
	 * 重构ms-if指令
	 * 重构ms-text,让其刷新工作交给expr表达式处理
	 * 修正ms-html向下传参
	 * 修正on指令的UUID问题
	 * 修正__local__往下传递 问题
	 * 参考react 的classNames插件，重构ms-class/active/hover，
	 * 上线全新的parseHTML，内部基于avalon.lexer，能完美生成script, xml,svg元素
	 * 重构isInCache， saveInCache
	 * 修正e.which BUG
	 * 修正 ms-duplex-checked在低版本浏览器不断闪烁的问题
	 */
	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["avalon"] = factory();
		else
			root["avalon"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		
		var avalon = __webpack_require__(1) //这个版本兼容IE6

		__webpack_require__(8)
		__webpack_require__(15)
		__webpack_require__(19)
		__webpack_require__(34)
		__webpack_require__(70)
		avalon.onComponentDispose = __webpack_require__(74)
		__webpack_require__(75)

		module.exports = avalon




	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		
		__webpack_require__(2)
		var avalon = __webpack_require__(3)
		var browser = __webpack_require__(4)

		avalon.shadowCopy(avalon, browser)

		__webpack_require__(5)
		__webpack_require__(6)
		__webpack_require__(7)

		module.exports = avalon

	/***/ },
	/* 2 */
	/***/ function(module, exports) {

		
		/**
		 * 此模块不依赖任何模块,用于修复语言的底层缺陷
		 */

		var ohasOwn = Object.prototype.hasOwnProperty

		if (!'司徒正美'.trim) {
		    var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
		    String.prototype.trim = function () {
		        return this.replace(rtrim, '')
		    }
		}
		var hasDontEnumBug = !({
		    'toString': null
		}).propertyIsEnumerable('toString'),
		        hasProtoEnumBug = (function () {
		        }).propertyIsEnumerable('prototype'),
		        dontEnums = [
		            'toString',
		            'toLocaleString',
		            'valueOf',
		            'hasOwnProperty',
		            'isPrototypeOf',
		            'propertyIsEnumerable',
		            'constructor'
		        ],
		        dontEnumsLength = dontEnums.length;
		if (!Object.keys) {
		    Object.keys = function (object) { //ecma262v5 15.2.3.14
		        var theKeys = []
		        var skipProto = hasProtoEnumBug && typeof object === 'function'
		        if (typeof object === 'string' || (object && object.callee)) {
		            for (var i = 0; i < object.length; ++i) {
		                theKeys.push(String(i))
		            }
		        } else {
		            for (var name in object) {
		                if (!(skipProto && name === 'prototype') &&
		                        ohasOwn.call(object, name)) {
		                    theKeys.push(String(name))
		                }
		            }
		        }

		        if (hasDontEnumBug) {
		            var ctor = object.constructor,
		                    skipConstructor = ctor && ctor.prototype === object
		            for (var j = 0; j < dontEnumsLength; j++) {
		                var dontEnum = dontEnums[j]
		                if (!(skipConstructor && dontEnum === 'constructor') && ohasOwn.call(object, dontEnum)) {
		                    theKeys.push(dontEnum)
		                }
		            }
		        }
		        return theKeys
		    }
		}
		if (!Array.isArray) {
		    Array.isArray = function (a) {
		        return Object.prototype.toString.call(a) === '[object Array]'
		    }
		}

		if (!Array.isArray.bind) {
		    Function.prototype.bind = function (scope) {
		        if (arguments.length < 2 && scope === void 0)
		            return this
		        var fn = this,
		                argv = arguments
		        return function () {
		            var args = [],
		                    i
		            for (i = 1; i < argv.length; i++)
		                args.push(argv[i])
		            for (i = 0; i < arguments.length; i++)
		                args.push(arguments[i])
		            return fn.apply(scope, args)
		        }
		    }
		}
		//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
		/**
		* Shim for "fixing" IE's lack of support (IE < 9) for applying slice
		* on host objects like NamedNodeMap, NodeList, and HTMLCollection
		* (technically, since host objects have been implementation-dependent,
		* at least before ES6, IE hasn't needed to work this way).
		* Also works on strings, fixes IE < 9 to allow an explicit undefined
		* for the 2nd argument (as in Firefox), and prevents errors when
		* called on other DOM objects.
		*/

		var _slice = Array.prototype.slice
		try {
		    // Can't be used with DOM elements in IE < 9
		    _slice.call(document.documentElement)
		} catch (e) { // Fails in IE < 9
		    // This will work for genuine arrays, array-like objects,
		    // NamedNodeMap (attributes, entities, notations),
		    // NodeList (e.g., getElementsByTagName), HTMLCollection (e.g., childNodes),
		    // and will not fail on other DOM objects (as do DOM elements in IE < 9)
		    Array.prototype.slice = function (begin, end) {
		        // IE < 9 gets unhappy with an undefined end argument
		        end = (typeof end !== 'undefined') ? end : this.length

		        // For native Array objects, we use the native slice function
		        if (Array.isArray(this) ) {
		            return _slice.call(this, begin, end)
		        }

		        // For array like object we handle it ourselves.
		        var i, cloned = [],
		                size, len = this.length

		        // Handle negative value for "begin"
		        var start = begin || 0
		        start = (start >= 0) ? start : len + start

		        // Handle negative value for "end"
		        var upTo = (end) ? end : len
		        if (end < 0) {
		            upTo = len + end
		        }

		        // Actual expected size of the slice
		        size = upTo - start

		        if (size > 0) {
		            cloned = new Array(size)
		            if (this.charAt) {
		                for (i = 0; i < size; i++) {
		                    cloned[i] = this.charAt(start + i)
		                }
		            } else {
		                for (i = 0; i < size; i++) {
		                    cloned[i] = this[start + i]
		                }
		            }
		        }

		        return cloned
		    }
		}

		function iterator(vars, body, ret) {
		    var fun = 'for(var ' + vars + 'i=0,n = this.length; i < n; i++){' +
		            body.replace('_', '((i in this) && fn.call(scope,this[i],i,this))') +
		            '}' + ret
		    /* jshint ignore:start */
		    return Function('fn,scope', fun)
		    /* jshint ignore:end */
		}

		var ap = Array.prototype
		if (!/\[native code\]/.test(ap.map)) {
		    var shim = {
		        //定位操作，返回数组中第一个等于给定参数的元素的索引值。
		        indexOf: function (item, index) {
		            var n = this.length,
		                    i = ~~index
		            if (i < 0)
		                i += n
		            for (; i < n; i++)
		                if (this[i] === item)
		                    return i
		            return -1
		        },
		        //定位操作，同上，不过是从后遍历。
		        lastIndexOf: function (item, index) {
		            var n = this.length,
		                    i = index == null ? n - 1 : index
		            if (i < 0)
		                i = Math.max(0, n + i)
		            for (; i >= 0; i--)
		                if (this[i] === item)
		                    return i
		            return -1
		        },
		        //迭代操作，将数组的元素挨个儿传入一个函数中执行。Prototype.js的对应名字为each。
		        forEach: iterator('', '_', ''),
		        //迭代类 在数组中的每个项上运行一个函数，如果此函数的值为真，则此元素作为新数组的元素收集起来，并返回新数组
		        filter: iterator('r=[],j=0,', 'if(_)r[j++]=this[i]', 'return r'),
		        //收集操作，将数组的元素挨个儿传入一个函数中执行，然后把它们的返回值组成一个新数组返回。Prototype.js的对应名字为collect。
		        map: iterator('r=[],', 'r[i]=_', 'return r'),
		        //只要数组中有一个元素满足条件（放进给定函数返回true），那么它就返回true。Prototype.js的对应名字为any。
		        some: iterator('', 'if(_)return true', 'return false'),
		        //只有数组中的元素都满足条件（放进给定函数返回true），它才返回true。Prototype.js的对应名字为all。
		        every: iterator('', 'if(!_)return false', 'return true')
		    }

		    for (var i in shim) {
		        ap[i] = shim[i]
		    }
		}
		module.exports = {}

	/***/ },
	/* 3 */
	/***/ function(module, exports) {

		/* WEBPACK VAR INJECTION */(function(global) {//avalon的核心,这里都是一些不存在异议的*核心*方法与属性
		function avalon(el) {
		    return new avalon.init(el)
		}

		global.avalon = avalon
		if(typeof window !== 'undefined'){
		    window.avalon = avalon
		}

		avalon.init = function (el) {
		    this[0] = this.element = el
		}

		avalon.fn = avalon.prototype = avalon.init.prototype


		avalon.shadowCopy = function (destination, source) {
		    for (var property in source) {
		        destination[property] = source[property]
		    }
		    return destination
		}

		var rword = /[^, ]+/g

		var hasConsole = global.console

		avalon.shadowCopy(avalon, {
		    noop: function () {
		    },
		    //切割字符串为一个个小块，以空格或逗号分开它们，结合replace实现字符串的forEach
		    rword: rword,
		    inspect: ({}).toString,
		    ohasOwn: ({}).hasOwnProperty,
		    log: function () {
		        if (hasConsole && avalon.config.debug) {
		            // http://stackoverflow.com/questions/8785624/how-to-safely-wrap-console-log
		            Function.apply.call(console.log, console, arguments)
		        }
		    },
		    warn: function () {
		        if (hasConsole && avalon.config.debug) {
		            var method = console.warn || console.log
		            // http://qiang106.iteye.com/blog/1721425
		            Function.apply.call(method, console, arguments)
		        }
		    },
		    error: function (str, e) {
		        throw (e || Error)(str)
		    },
		    //将一个以空格或逗号隔开的字符串或数组,转换成一个键值都为1的对象
		    oneObject: function (array, val) {
		        if (typeof array === 'string') {
		            array = array.match(rword) || []
		        }
		        var result = {},
		                value = val !== void 0 ? val : 1
		        for (var i = 0, n = array.length; i < n; i++) {
		            result[array[i]] = value
		        }
		        return result
		    }

		})

		module.exports = avalon
		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

	/***/ },
	/* 4 */
	/***/ function(module, exports) {

		/* WEBPACK VAR INJECTION */(function(global) {var window = global
		var browser = {
		    window: window,
		    document: {//方便在nodejs环境不会报错
		        createElement: function () {
		            return {}
		        },
		        createElementNS: function(){
		            return {}
		        },
		        contains: Boolean
		    },
		    root: {
		        outerHTML: 'x'
		    },
		    msie: NaN,
		    modern: true,
		    avalonDiv: {},
		    avalonFragment: null
		}

		if(window.location && window.navigator && window.window){
		    var document = window.document
		    browser.document = document
		    browser.modern = window.dispatchEvent
		    browser.root = document.documentElement
		    browser.avalonDiv = document.createElement('div')
		    browser.avalonFragment = document.createDocumentFragment()
		    if (window.VBArray) {
		        browser.msie = document.documentMode || (window.XMLHttpRequest ? 7 : 6)
		    }
		}


		module.exports = browser
		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

	/***/ },
	/* 5 */
	/***/ function(module, exports) {

		//这里放置存在异议的方法

		var serialize = avalon.inspect
		var rwindow = /^\[object (?:Window|DOMWindow|global)\]$/
		var rnative = /\[native code\]/ //判定是否原生函数
		var rarraylike = /(Array|List|Collection|Map|Arguments)\]$/
		var ohasOwn = avalon.ohasOwn
		// avalon.quote
		//https://github.com/bestiejs/json3/blob/master/lib/json3.js
		var Escapes = {
		    92: "\\\\",
		    34: '\\"',
		    8: "\\b",
		    12: "\\f",
		    10: "\\n",
		    13: "\\r",
		    9: "\\t"
		}

		// Internal: Converts `value` into a zero-padded string such that its
		// length is at least equal to `width`. The `width` must be <= 6.
		var leadingZeroes = "000000"
		var toPaddedString = function (width, value) {
		    // The `|| 0` expression is necessary to work around a bug in
		    // Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
		    return (leadingZeroes + (value || 0)).slice(-width)
		};
		var unicodePrefix = "\\u00"
		var escapeChar = function (character) {
		    var charCode = character.charCodeAt(0), escaped = Escapes[charCode]
		    if (escaped) {
		        return escaped
		    }
		    return unicodePrefix + toPaddedString(2, charCode.toString(16))
		};
		var reEscape = /[\x00-\x1f\x22\x5c]/g
		function quote(value) {
		    reEscape.lastIndex = 0
		    return '"' + ( reEscape.test(value)? String(value).replace(reEscape, escapeChar) : value ) + '"'
		}

		avalon.quote = typeof JSON !== 'undefined' ? JSON.stringify : quote

		// avalon.type
		var class2type = {}
		'Boolean Number String Function Array Date RegExp Object Error'.replace(avalon.rword, function (name) {
		    class2type['[object ' + name + ']'] = name.toLowerCase()
		})

		avalon.type = function (obj) { //取得目标的类型
		    if (obj == null) {
		        return String(obj)
		    }
		    // 早期的webkit内核浏览器实现了已废弃的ecma262v4标准，可以将正则字面量当作函数使用，因此typeof在判定正则时会返回function
		    return typeof obj === 'object' || typeof obj === 'function' ?
		            class2type[serialize.call(obj)] || 'object' :
		            typeof obj
		}

		var rfunction = /^\s*\bfunction\b/

		avalon.isFunction = typeof alert === 'object' ? function (fn) {
		    try {
		        return rfunction.test(fn + '')
		    } catch (e) {
		        return false
		    }
		} : function (fn) {
		    return serialize.call(fn) === '[object Function]'
		}

		avalon.isWindow = function (obj) {
		    if (!obj)
		        return false
		    // 利用IE678 window == document为true,document == window竟然为false的神奇特性
		    // 标准浏览器及IE9，IE10等使用 正则检测
		    return obj == obj.document && obj.document != obj //jshint ignore:line
		}


		function isWindow(obj) {
		    return rwindow.test(serialize.call(obj))
		}

		if (isWindow(avalon.window)) {
		    avalon.isWindow = isWindow
		}

		var enu, enumerateBUG
		for (enu in avalon({})) {
		    break
		}
		enumerateBUG = enu !== '0' //IE6下为true, 其他为false

		/*判定是否是一个朴素的javascript对象（Object），不是DOM对象，不是BOM对象，不是自定义类的实例*/
		avalon.isPlainObject = function (obj, key) {
		    if (!obj || avalon.type(obj) !== 'object' || obj.nodeType || avalon.isWindow(obj)) {
		        return false
		    }
		    try { //IE内置对象没有constructor
		        if (obj.constructor &&
		                !ohasOwn.call(obj, 'constructor') &&
		                !ohasOwn.call(obj.constructor.prototype || {}, 'isPrototypeOf')) {
		            return false
		        }
		    } catch (e) { //IE8 9会在这里抛错
		        return false
		    }
		    if (enumerateBUG) {
		        for (key in obj) {
		            return ohasOwn.call(obj, key)
		        }
		    }
		    for (key in obj) {
		    }
		    return key === void 0 || ohasOwn.call(obj, key)
		}


		if (rnative.test(Object.getPrototypeOf)) {
		    avalon.isPlainObject = function (obj) {
		        // 简单的 typeof obj === 'object'检测，会致使用isPlainObject(window)在opera下通不过
		        return serialize.call(obj) === '[object Object]' &&
		                Object.getPrototypeOf(obj) === Object.prototype
		    }
		}

		//与jQuery.extend方法，可用于浅拷贝，深拷贝
		avalon.mix = avalon.fn.mix = function () {
		    var options, name, src, copy, copyIsArray, clone,
		            target = arguments[0] || {},
		            i = 1,
		            length = arguments.length,
		            deep = false

		    // 如果第一个参数为布尔,判定是否深拷贝
		    if (typeof target === 'boolean') {
		        deep = target
		        target = arguments[1] || {}
		        i++
		    }

		    //确保接受方为一个复杂的数据类型
		    if (typeof target !== 'object' && !avalon.isFunction(target)) {
		        target = {}
		    }

		    //如果只有一个参数，那么新成员添加于mix所在的对象上
		    if (i === length) {
		        target = this
		        i--
		    }

		    for (; i < length; i++) {
		        //只处理非空参数
		        if ((options = arguments[i]) != null) {
		            for (name in options) {
		                try {
		                    src = target[name]
		                    copy = options[name] //当options为VBS对象时报错
		                } catch (e) {
		                    continue
		                }

		                // 防止环引用
		                if (target === copy) {
		                    continue
		                }
		                if (deep && copy && (avalon.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {

		                    if (copyIsArray) {
		                        copyIsArray = false
		                        clone = src && Array.isArray(src) ? src : []

		                    } else {
		                        clone = src && avalon.isPlainObject(src) ? src : {}
		                    }

		                    target[name] = avalon.mix(deep, clone, copy)
		                } else if (copy !== void 0) {
		                    target[name] = copy
		                }
		            }
		        }
		    }
		    return target
		}

		/*判定是否类数组，如节点集合，纯数组，arguments与拥有非负整数的length属性的纯JS对象*/
		function isArrayLike(obj) {
		    if (!obj)
		        return false
		    var n = obj.length
		    if (n === (n >>> 0)) { //检测length属性是否为非负整数
		        var type = serialize.call(obj).slice(8, -1)
		        if (rarraylike.test(type))
		            return false
		        if (type === 'Array')
		            return true
		        try {
		            if ({}.propertyIsEnumerable.call(obj, 'length') === false) { //如果是原生对象
		                return rfunction.test(obj.item || obj.callee)
		            }
		            return true
		        } catch (e) { //IE的NodeList直接抛错
		            return !obj.window //IE6-8 window
		        }
		    }
		    return false
		}


		avalon.each = function (obj, fn) {
		    if (obj) { //排除null, undefined
		        var i = 0
		        if (isArrayLike(obj)) {
		            for (var n = obj.length; i < n; i++) {
		                if (fn(i, obj[i]) === false)
		                    break
		            }
		        } else {
		            for (i in obj) {
		                if (obj.hasOwnProperty(i) && fn(i, obj[i]) === false) {
		                    break
		                }
		            }
		        }
		    }
		}

		module.exports = {
		    avalon: avalon,
		    isArrayLike: isArrayLike
		}



	/***/ },
	/* 6 */
	/***/ function(module, exports) {

		var cssHooks = {}
		var rhyphen = /([a-z\d])([A-Z]+)/g
		var rcamelize = /[-_][^-_]/g
		var rhashcode = /\d\.\d{4}/
		var rescape = /[-.*+?^${}()|[\]\/\\]/g

		var _slice = [].slice
		function defaultParse(cur, pre, binding) {
		       cur[binding.name] = avalon.parseExpr(binding)
		}
		avalon.shadowCopy(avalon, {
		    caches: {}, //avalon2.0 新增
		    vmodels: {},
		    filters: {},
		    components: {},//放置组件的类
		    directives: {},
		    eventHooks: {},
		    eventListeners: {},
		    validators: {},
		    scopes: {},
		    cssHooks: cssHooks,
		    parsers: {
		        number: function (a) {
		            return a === '' ? '' : /\d\.$/.test(a) ? a : parseFloat(a) || 0
		        },
		        string: function (a) {
		            return a === null || a === void 0 ? '' : a + ''
		        },
		        boolean: function (a) {
		            if(a === '')
		                return a
		            return a === 'true'|| a == '1'
		        }
		    },
		    version: "2.10",
		    slice: function (nodes, start, end) {
		        return _slice.call(nodes, start, end)
		    },
		    css: function (node, name, value, fn) {
		        //读写删除元素节点的样式
		        if (node instanceof avalon) {
		            node = node[0]
		        }
		        if(node.nodeType !==1){
		            return
		        }
		        var prop = avalon.camelize(name)
		        name = avalon.cssName(prop) || prop
		        if (value === void 0 || typeof value === 'boolean') { //获取样式
		            fn = cssHooks[prop + ':get'] || cssHooks['@:get']
		            if (name === 'background') {
		                name = 'backgroundColor'
		            }
		            var val = fn(node, name)
		            return value === true ? parseFloat(val) || 0 : val
		        } else if (value === '') { //请除样式
		            node.style[name] = ''
		        } else { //设置样式
		            if (value == null || value !== value) {
		                return
		            }
		            if (isFinite(value) && !avalon.cssNumber[prop]) {
		                value += 'px'
		            }
		            fn = cssHooks[prop + ':set'] || cssHooks['@:set']
		            fn(node, name, value)
		        }
		    },
		    directive: function (name, definition) {
		        definition.parse = definition.parse || defaultParse
		        return this.directives[name] = definition
		    },
		    isObject: function (a) {//1.6新增
		        return a !== null && typeof a === 'object'
		    },
		    /* avalon.range(10)
		     => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
		     avalon.range(1, 11)
		     => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
		     avalon.range(0, 30, 5)
		     => [0, 5, 10, 15, 20, 25]
		     avalon.range(0, -10, -1)
		     => [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
		     avalon.range(0)
		     => []*/
		    range: function (start, end, step) { // 用于生成整数数组
		        step || (step = 1)
		        if (end == null) {
		            end = start || 0
		            start = 0
		        }
		        var index = -1,
		                length = Math.max(0, Math.ceil((end - start) / step)),
		                result = new Array(length)
		        while (++index < length) {
		            result[index] = start
		            start += step
		        }
		        return result
		    },
		    hyphen: function (target) {
		        //转换为连字符线风格
		        return target.replace(rhyphen, '$1-$2').toLowerCase()
		    },
		    camelize: function (target) {
		        //提前判断，提高getStyle等的效率
		        if (!target || target.indexOf('-') < 0 && target.indexOf('_') < 0) {
		            return target
		        }
		        //转换为驼峰风格
		        return target.replace(rcamelize, function (match) {
		            return match.charAt(1).toUpperCase()
		        })
		    },
		    //生成UUID http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
		    makeHashCode: function (prefix) {
		        prefix = prefix || 'avalon'
		        return String(Math.random() + Math.random()).replace(rhashcode, prefix)
		    },
		    escapeRegExp: function (target) {
		        //http://stevenlevithan.com/regex/xregexp/
		        //将字符串安全格式化为正则表达式的源码
		        return (target + '').replace(rescape, '\\$&')
		    },
		    Array: {
		        merge: function (target, other) {
		            //合并两个数组 avalon2新增
		            target.push.apply(target, other)
		        },
		        ensure: function (target, item) {
		            //只有当前数组不存在此元素时只添加它
		            if (target.indexOf(item) === -1) {
		                return target.push(item)
		            }
		        },
		        removeAt: function (target, index) {
		            //移除数组中指定位置的元素，返回布尔表示成功与否
		            return !!target.splice(index, 1).length
		        },
		        remove: function (target, item) {
		            //移除数组中第一个匹配传参的那个元素，返回布尔表示成功与否
		            var index = target.indexOf(item)
		            if (~index)
		                return avalon.Array.removeAt(target, index)
		            return false
		        }
		    }
		})

		if(typeof performance !== 'undefined' && performance.now){
		    avalon.makeHashCode = function (prefix) {
		        prefix = prefix || 'avalon'
		        return (prefix + performance.now()).replace('.', '')
		    }
		}

		var UUID = 1
		module.exports = {
		    //生成事件回调的UUID(用户通过ms-on指令)
		    avalon: avalon,
		    getLongID: function (fn) {
		        return fn.uuid || (fn.uuid = avalon.makeHashCode('e'))
		    },
		    //生成事件回调的UUID(用户通过avalon.bind)
		    getShortID: function (fn) {
		        return fn.uuid || (fn.uuid = '_' + (++UUID))
		    }
		}


	/***/ },
	/* 7 */
	/***/ function(module, exports) {

		
		function kernel(settings) {
		    for (var p in settings) {
		        if (!avalon.ohasOwn.call(settings, p))
		            continue
		        var val = settings[p]
		        if (typeof kernel.plugins[p] === 'function') {
		            kernel.plugins[p](val)
		        } else if (typeof kernel[p] === 'object') {
		            avalon.shadowCopy(kernel[p], val)
		        } else {
		            kernel[p] = val
		        }
		    }
		    return this
		}

		avalon.config = kernel

		var plugins = {
		    interpolate: function (array) {
		        var openTag = array[0]
		        var closeTag = array[1]
		        /*eslint-disable */
		        if (openTag === closeTag) {
		            throw new SyntaxError('openTag!==closeTag')
		        }
		        var test = openTag + 'test' + closeTag
		        var div = avalon.avalonDiv
		        div.innerHTML = test
		        if (div.innerHTML !== test && div.innerHTML.indexOf('&lt;') > -1) {
		            throw new SyntaxError('此定界符不合法')
		        }
		        div.innerHTML = ''
		        /*eslint-enable */
		        kernel.openTag = openTag
		        kernel.closeTag = closeTag
		        var o = avalon.escapeRegExp(openTag)
		        var c = avalon.escapeRegExp(closeTag)
		        kernel.rexpr = new RegExp(o + '([\\s\\S]*)' + c)
		        kernel.rexprg = new RegExp(o + '([\\s\\S]*)' + c, 'g')
		        kernel.rbind = new RegExp(o + '[\\s\\S]*' + c + '|\\bms-|\\bslot\\b')
		    }
		}
		kernel.plugins = plugins
		avalon.config({
		    interpolate: ['{{', '}}'],
		    debug: true
		})


	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {

		
		var number = __webpack_require__(9)
		var escape = __webpack_require__(10)
		var sanitize = __webpack_require__(11)
		var date = __webpack_require__(12)
		var arrayFilters = __webpack_require__(13)
		var eventFilters = __webpack_require__(14)
		var filters = avalon.filters

		function K(a) {
		    return a
		}

		avalon.__format__ = function (name) {
		    var fn = filters[name]
		    if (fn) {
		        return fn.get ? fn.get : fn
		    }
		    return K
		}


		avalon.mix(filters, {
		    uppercase: function (str) {
		        return String(str).toUpperCase()
		    },
		    lowercase: function (str) {
		        return String(str).toLowerCase()
		    },
		    truncate: function (str, length, truncation) {
		        //length，新字符串长度，truncation，新字符串的结尾的字段,返回新字符串
		        length = length || 30
		        truncation = typeof truncation === "string" ? truncation : "..."
		        return str.length > length ?
		                str.slice(0, length - truncation.length) + truncation :
		                String(str)
		    },
		    camelize: avalon.camelize,
		    date: date,
		    escape: escape,
		    sanitize: sanitize,
		    number: number,
		    currency: function (amount, symbol, fractionSize) {
		        return (symbol || "\uFFE5") +
		                number(amount,
		                        isFinite(fractionSize) ? fractionSize : 2)
		    }
		}, arrayFilters, eventFilters)







		module.exports = avalon

	/***/ },
	/* 9 */
	/***/ function(module, exports) {

		function number(number, decimals, point, thousands) {
		    //form http://phpjs.org/functions/number_format/
		    //number 必需，要格式化的数字
		    //decimals 可选，规定多少个小数位。
		    //point 可选，规定用作小数点的字符串（默认为 . ）。
		    //thousands 可选，规定用作千位分隔符的字符串（默认为 , ），如果设置了该参数，那么所有其他参数都是必需的。
		    number = (number + '')
		            .replace(/[^0-9+\-Ee.]/g, '')
		    var n = !isFinite(+number) ? 0 : +number,
		            prec = !isFinite(+decimals) ? 3 : Math.abs(decimals),
		            sep = thousands || ",",
		            dec = point || ".",
		            s = '',
		            toFixedFix = function (n, prec) {
		                var k = Math.pow(10, prec)
		                return '' + (Math.round(n * k) / k)
		                        .toFixed(prec)
		            }
		    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
		    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
		            .split('.')
		    if (s[0].length > 3) {
		        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep)
		    }
		    if ((s[1] || '')
		            .length < prec) {
		        s[1] = s[1] || ''
		        s[1] += new Array(prec - s[1].length + 1)
		                .join('0')
		    }
		    return s.join(dec)
		}

		module.exports = number

		//处理 货币 http://openexchangerates.github.io/accounting.js/

	/***/ },
	/* 10 */
	/***/ function(module, exports) {

		
		var rsurrogate = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g
		var rnoalphanumeric = /([^\#-~| |!])/g

		function escape(str) {
		    //将字符串经过 str 转义得到适合在页面中显示的内容, 例如替换 < 为 &lt 
		    return String(str).
		            replace(/&/g, '&amp;').
		            replace(rsurrogate, function (value) {
		                var hi = value.charCodeAt(0)
		                var low = value.charCodeAt(1)
		                return '&#' + (((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000) + ';'
		            }).
		            replace(rnoalphanumeric, function (value) {
		                return '&#' + value.charCodeAt(0) + ';'
		            }).
		            replace(/</g, '&lt;').
		            replace(/>/g, '&gt;')
		}

		module.exports = escape

	/***/ },
	/* 11 */
	/***/ function(module, exports) {

		var rscripts = /<script[^>]*>([\S\s]*?)<\/script\s*>/gim
		var ron = /\s+(on[^=\s]+)(?:=("[^"]*"|'[^']*'|[^\s>]+))?/g
		var ropen = /<\w+\b(?:(["'])[^"]*?(\1)|[^>])*>/ig
		var rsanitize = {
		    a: /\b(href)\=("javascript[^"]*"|'javascript[^']*')/ig,
		    img: /\b(src)\=("javascript[^"]*"|'javascript[^']*')/ig,
		    form: /\b(action)\=("javascript[^"]*"|'javascript[^']*')/ig
		}


		//https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
		//    <a href="javasc&NewLine;ript&colon;alert('XSS')">chrome</a> 
		//    <a href="data:text/html;base64, PGltZyBzcmM9eCBvbmVycm9yPWFsZXJ0KDEpPg==">chrome</a>
		//    <a href="jav	ascript:alert('XSS');">IE67chrome</a>
		//    <a href="jav&#x09;ascript:alert('XSS');">IE67chrome</a>
		//    <a href="jav&#x0A;ascript:alert('XSS');">IE67chrome</a>
		module.exports = function sanitize(str) {
		    return str.replace(rscripts, "").replace(ropen, function (a, b) {
		        var match = a.toLowerCase().match(/<(\w+)\s/)
		        if (match) { //处理a标签的href属性，img标签的src属性，form标签的action属性
		            var reg = rsanitize[match[1]]
		            if (reg) {
		                a = a.replace(reg, function (s, name, value) {
		                    var quote = value.charAt(0)
		                    return name + "=" + quote + "javascript:void(0)" + quote// jshint ignore:line
		                })
		            }
		        }
		        return a.replace(ron, " ").replace(/\s+/g, " ") //移除onXXX事件
		    })
		}


	/***/ },
	/* 12 */
	/***/ function(module, exports) {

		/*
		 'yyyy': 4 digit representation of year (e.g. AD 1 => 0001, AD 2010 => 2010)
		 'yy': 2 digit representation of year, padded (00-99). (e.g. AD 2001 => 01, AD 2010 => 10)
		 'y': 1 digit representation of year, e.g. (AD 1 => 1, AD 199 => 199)
		 'MMMM': Month in year (January-December)
		 'MMM': Month in year (Jan-Dec)
		 'MM': Month in year, padded (01-12)
		 'M': Month in year (1-12)
		 'dd': Day in month, padded (01-31)
		 'd': Day in month (1-31)
		 'EEEE': Day in Week,(Sunday-Saturday)
		 'EEE': Day in Week, (Sun-Sat)
		 'HH': Hour in day, padded (00-23)
		 'H': Hour in day (0-23)
		 'hh': Hour in am/pm, padded (01-12)
		 'h': Hour in am/pm, (1-12)
		 'mm': Minute in hour, padded (00-59)
		 'm': Minute in hour (0-59)
		 'ss': Second in minute, padded (00-59)
		 's': Second in minute (0-59)
		 'a': am/pm marker
		 'Z': 4 digit (+sign) representation of the timezone offset (-1200-+1200)
		 format string can also be one of the following predefined localizable formats:
		 
		 'medium': equivalent to 'MMM d, y h:mm:ss a' for en_US locale (e.g. Sep 3, 2010 12:05:08 pm)
		 'short': equivalent to 'M/d/yy h:mm a' for en_US locale (e.g. 9/3/10 12:05 pm)
		 'fullDate': equivalent to 'EEEE, MMMM d,y' for en_US locale (e.g. Friday, September 3, 2010)
		 'longDate': equivalent to 'MMMM d, y' for en_US locale (e.g. September 3, 2010
		 'mediumDate': equivalent to 'MMM d, y' for en_US locale (e.g. Sep 3, 2010)
		 'shortDate': equivalent to 'M/d/yy' for en_US locale (e.g. 9/3/10)
		 'mediumTime': equivalent to 'h:mm:ss a' for en_US locale (e.g. 12:05:08 pm)
		 'shortTime': equivalent to 'h:mm a' for en_US locale (e.g. 12:05 pm)
		 */

		function toInt(str) {
		    return parseInt(str, 10) || 0
		}

		function padNumber(num, digits, trim) {
		    var neg = ''
		    if (num < 0) {
		        neg = '-'
		        num = -num
		    }
		    num = '' + num
		    while (num.length < digits)
		        num = '0' + num
		    if (trim)
		        num = num.substr(num.length - digits)
		    return neg + num
		}

		function dateGetter(name, size, offset, trim) {
		    return function (date) {
		        var value = date["get" + name]()
		        if (offset > 0 || value > -offset)
		            value += offset
		        if (value === 0 && offset === -12) {
		            value = 12
		        }
		        return padNumber(value, size, trim)
		    }
		}

		function dateStrGetter(name, shortForm) {
		    return function (date, formats) {
		        var value = date["get" + name]()
		        var get = (shortForm ? ("SHORT" + name) : name).toUpperCase()
		        return formats[get][value]
		    }
		}

		function timeZoneGetter(date) {
		    var zone = -1 * date.getTimezoneOffset()
		    var paddedZone = (zone >= 0) ? "+" : ""
		    paddedZone += padNumber(Math[zone > 0 ? "floor" : "ceil"](zone / 60), 2) + padNumber(Math.abs(zone % 60), 2)
		    return paddedZone
		}
		//取得上午下午

		function ampmGetter(date, formats) {
		    return date.getHours() < 12 ? formats.AMPMS[0] : formats.AMPMS[1]
		}
		var DATE_FORMATS = {
		    yyyy: dateGetter("FullYear", 4),
		    yy: dateGetter("FullYear", 2, 0, true),
		    y: dateGetter("FullYear", 1),
		    MMMM: dateStrGetter("Month"),
		    MMM: dateStrGetter("Month", true),
		    MM: dateGetter("Month", 2, 1),
		    M: dateGetter("Month", 1, 1),
		    dd: dateGetter("Date", 2),
		    d: dateGetter("Date", 1),
		    HH: dateGetter("Hours", 2),
		    H: dateGetter("Hours", 1),
		    hh: dateGetter("Hours", 2, -12),
		    h: dateGetter("Hours", 1, -12),
		    mm: dateGetter("Minutes", 2),
		    m: dateGetter("Minutes", 1),
		    ss: dateGetter("Seconds", 2),
		    s: dateGetter("Seconds", 1),
		    sss: dateGetter("Milliseconds", 3),
		    EEEE: dateStrGetter("Day"),
		    EEE: dateStrGetter("Day", true),
		    a: ampmGetter,
		    Z: timeZoneGetter
		}
		var rdateFormat = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/
		var raspnetjson = /^\/Date\((\d+)\)\/$/
		function dateFilter(date, format) {
		    var locate = dateFilter.locate,
		            text = "",
		            parts = [],
		            fn, match
		    format = format || "mediumDate"
		    format = locate[format] || format
		    if (typeof date === "string") {
		        if (/^\d+$/.test(date)) {
		            date = toInt(date)
		        } else if (raspnetjson.test(date)) {
		            date = +RegExp.$1
		        } else {
		            var trimDate = date.trim()
		            var dateArray = [0, 0, 0, 0, 0, 0, 0]
		            var oDate = new Date(0)
		            //取得年月日
		            trimDate = trimDate.replace(/^(\d+)\D(\d+)\D(\d+)/, function (_, a, b, c) {
		                var array = c.length === 4 ? [c, a, b] : [a, b, c]
		                dateArray[0] = toInt(array[0])     //年
		                dateArray[1] = toInt(array[1]) - 1 //月
		                dateArray[2] = toInt(array[2])     //日
		                return ""
		            })
		            var dateSetter = oDate.setFullYear
		            var timeSetter = oDate.setHours
		            trimDate = trimDate.replace(/[T\s](\d+):(\d+):?(\d+)?\.?(\d)?/, function (_, a, b, c, d) {
		                dateArray[3] = toInt(a) //小时
		                dateArray[4] = toInt(b) //分钟
		                dateArray[5] = toInt(c) //秒
		                if (d) {                //毫秒
		                    dateArray[6] = Math.round(parseFloat("0." + d) * 1000)
		                }
		                return ""
		            })
		            var tzHour = 0
		            var tzMin = 0
		            trimDate = trimDate.replace(/Z|([+-])(\d\d):?(\d\d)/, function (z, symbol, c, d) {
		                dateSetter = oDate.setUTCFullYear
		                timeSetter = oDate.setUTCHours
		                if (symbol) {
		                    tzHour = toInt(symbol + c)
		                    tzMin = toInt(symbol + d)
		                }
		                return ''
		            })

		            dateArray[3] -= tzHour
		            dateArray[4] -= tzMin
		            dateSetter.apply(oDate, dateArray.slice(0, 3))
		            timeSetter.apply(oDate, dateArray.slice(3))
		            date = oDate
		        }
		    }
		    if (typeof date === 'number') {
		        date = new Date(date)
		    }
		    if (avalon.type(date) !== 'date') {
		        return
		    }
		    while (format) {
		        match = rdateFormat.exec(format)
		        if (match) {
		            parts = parts.concat(match.slice(1))
		            format = parts.pop()
		        } else {
		            parts.push(format)
		            format = null
		        }
		    }
		    parts.forEach(function (value) {
		        fn = DATE_FORMATS[value]
		        text += fn ? fn(date, locate) : value.replace(/(^'|'$)/g, "").replace(/''/g, "'")
		    })
		    return text
		}


		var locate = {
		    AMPMS: {
		        0: '上午',
		        1: '下午'
		    },
		    DAY: {
		        0: '星期日',
		        1: '星期一',
		        2: '星期二',
		        3: '星期三',
		        4: '星期四',
		        5: '星期五',
		        6: '星期六'
		    },
		    MONTH: {
		        0: '1月',
		        1: '2月',
		        2: '3月',
		        3: '4月',
		        4: '5月',
		        5: '6月',
		        6: '7月',
		        7: '8月',
		        8: '9月',
		        9: '10月',
		        10: '11月',
		        11: '12月'
		    },
		    SHORTDAY: {
		        '0': '周日',
		        '1': '周一',
		        '2': '周二',
		        '3': '周三',
		        '4': '周四',
		        '5': '周五',
		        '6': '周六'
		    },
		    fullDate: 'y年M月d日EEEE',
		    longDate: 'y年M月d日',
		    medium: 'yyyy-M-d H:mm:ss',
		    mediumDate: 'yyyy-M-d',
		    mediumTime: 'H:mm:ss',
		    'short': 'yy-M-d ah:mm',
		    shortDate: 'yy-M-d',
		    shortTime: 'ah:mm'
		}
		locate.SHORTMONTH = locate.MONTH
		dateFilter.locate = locate

		module.exports = dateFilter

	/***/ },
	/* 13 */
	/***/ function(module, exports) {

		
		function orderBy(array, criteria, reverse) {
		    var type = avalon.type(array)
		    if (type !== 'array' && type !== 'object')
		        throw 'orderBy只能处理对象或数组'
		    var order = (reverse && reverse < 0) ? -1 : 1

		    if (typeof criteria === 'string') {
		        var key = criteria
		        criteria = function (a) {
		            return a && a[key]
		        }
		    }
		    array = convertArray(array)
		    array.forEach(function (el) {
		        el.order = criteria(el.value, el.key)
		    })
		    array.sort(function (left, right) {
		        var a = left.order
		        var b = right.order
		        if (Number.isNaN(a) && Number.isNaN(b)) {
		            return 0
		        }
		        return a === b ? 0 : a > b ? order : -order
		    })
		    var isArray = type === 'array'
		    var target = isArray ? [] : {}
		    return recovery(target, array, function (el) {
		        if (isArray) {
		            target.push(el.value)
		        } else {
		            target[el.key] = el.value
		        }
		    })
		}

		function filterBy(array, search) {
		    var type = avalon.type(array)
		    if (type !== 'array' && type !== 'object')
		        throw 'filterBy只能处理对象或数组'
		    var args = avalon.slice(arguments, 2)
		    var stype = avalon.type(search)
		    if (stype === 'function') {
		        var criteria = search
		    } else if (stype === 'string' || stype === 'number' ) {
		        if (search === '') {
		            return array
		        } else {
		            var reg = new RegExp(avalon.escapeRegExp(search), 'i')
		            criteria = function(el){
		                return reg.test(el)
		            }
		        }
		    } else {
		        return array
		    }

		    array = convertArray(array).filter(function (el, i) {
		        return !!criteria.apply(el, [el.value,i].concat(args) )
		    })
		    var isArray = type === 'array'
		    var target = isArray ? [] : {}
		    return recovery(target, array, function (el) {
		        if (isArray) {
		            target.push(el.value)
		        } else {
		            target[el.key] = el.value
		        }
		    })
		}

		function selectBy(data, array, defaults) {
		    if (avalon.isObject(data) && !Array.isArray(data)) {
		        var target = []
		        return recovery(target, array, function (name) {
		            target.push(data.hasOwnProperty(name) ? data[name] : defaults ? defaults[name] : '')
		        })
		    } else {
		        return data
		    }
		}

		Number.isNaN = Number.isNaN || function (a) {
		    return a !== a
		}

		function limitBy(input, limit, begin) {
		    var type = avalon.type(input)
		    if (type !== 'array' && type !== 'object')
		        throw 'limitBy只能处理对象或数组'
		    //尝试将limit转换数值
		    if (Math.abs(Number(limit)) === Infinity) {
		        limit = Number(limit)
		    } else {
		        limit = parseInt(limit, 10)
		    }
		    //转换不了返回
		    if (Number.isNaN(limit)) {
		        return input
		    }
		    //将目标转换为数组
		    if (type === 'object') {
		        input = convertArray(input)
		    }
		    limit = Math.min(input.length, limit)
		    begin = (!begin || Number.isNaN(begin)) ? 0 : ~~begin
		    if (begin < 0) {
		        begin = Math.max(0, input.length + begin)
		    }

		    var data = []
		    for (var i = begin; i < limit; i++) {
		        data.push(input[i])
		    }
		    var isArray = type === 'array'
		    if (isArray) {
		        return data
		    }
		    var target = {}
		    return recovery(target, data, function (el) {
		        target[el.key] = el.value
		    })
		}

		function recovery(ret, array, callback) {
		    for (var i = 0, n = array.length; i < n; i++) {
		        callback(array[i])
		    }
		    return ret
		}


		function convertArray(array) {
		    var ret = [], i = 0
		    avalon.each(array, function (key, value) {
		        ret[i++] = {
		            value: value,
		            key: key
		        }
		    })
		    return ret
		}

		module.exports = {
		    limitBy: limitBy,
		    orderBy: orderBy,
		    selectBy: selectBy,
		    filterBy: filterBy
		}

	/***/ },
	/* 14 */
	/***/ function(module, exports) {

		
		var eventFilters = {
		    stop: function (e) {
		        e.stopPropagation()
		        return e
		    },
		    prevent: function (e) {
		        e.preventDefault()
		        return e
		    }
		}
		var keyCode = {
		    esc: 27,
		    tab: 9,
		    enter: 13,
		    space: 32,
		    del: 46,
		    up: 38,
		    left: 37,
		    right: 39,
		    down: 40
		}

		avalon.each(keyCode, function (name, keyCode) {
		    eventFilters[name] = function (e) {
		        if (e.which !== keyCode) {
		            e.$return = true
		        }
		        return e
		    }
		})

		module.exports = eventFilters

	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * 虚拟DOM的4大构造器
		 */
		var VText = __webpack_require__(16)
		var VComment = __webpack_require__(17)
		var VElement = __webpack_require__(18)

		avalon.vdomAdaptor = function (obj, method) {
		    if (!obj) {//obj在ms-for循环里面可能是null
		        return (method === "toHTML" ? '' :
		            avalon.avalonFragment.cloneNode(false))
		    }
		    switch (obj.nodeType) {
		        case 3:
		            return VText.prototype[method].call(obj)
		        case 8:
		            return VComment.prototype[method].call(obj)
		        case 1:
		            return VElement.prototype[method].call(obj)
		        default:
		            if (Array.isArray(obj)) {
		                if (method === "toHTML") {
		                    return obj.map(function (a) {
		                        return avalon.vdomAdaptor(a, 'toHTML')
		                    }).join('')
		                } else {
		                    var f = avalon.avalonFragment.cloneNode(false)
		                    obj.forEach(function (a) {
		                        f.appendChild(avalon.vdomAdaptor(a, 'toDOM'))
		                    })
		                    return f
		                }
		            }
		    }
		}

		module.exports = {
		    VText: VText,
		    VComment: VComment,
		    VElement: VElement
		}


	/***/ },
	/* 16 */
	/***/ function(module, exports) {

		var rexpr = avalon.config.rexpr

		function VText(text) {
		    if (typeof text === 'string') {
		        this.type = '#text'
		        this.nodeValue = text
		        this.skipContent = !rexpr.test(text)
		        this.nodeType = 3
		    } else {
		        for (var i in text) {
		            this[i] = text[i]
		        }
		    }
		}

		VText.prototype = {
		    constructor: VText,
		    toDOM: function () {
		       var a =  VText.decoder = VText.decoder || document.createElement('p')
		       a.innerHTML = this.nodeValue
		       return a.removeChild(a.firstChild) 
		    },
		    toHTML: function () {
		        return this.nodeValue
		    }
		}

		module.exports = VText

	/***/ },
	/* 17 */
	/***/ function(module, exports) {

		
		function VComment(text) {
		    if (typeof text === 'string') {
		        this.type = '#comment'
		        this.nodeValue = text
		        this.skipContent = true
		        this.nodeType = 8
		    } else {
		        for (var i in text) {
		            this[i] = text[i]
		        }
		    }
		}
		VComment.prototype = {
		    constructor: VComment,
		    toDOM: function () {
		        return document.createComment(this.nodeValue)
		    },
		    toHTML: function () {
		        return '<!--' + this.nodeValue + '-->'
		    }
		}

		module.exports = VComment

	/***/ },
	/* 18 */
	/***/ function(module, exports) {

		
		function VElement(type, props, children) {
		    if (typeof type === 'object') {
		        for (var i in type) {
		            this[i] = type[i]
		        }
		    } else {
		        this.nodeType = 1
		        this.type = type
		        this.props = props
		        this.children = children
		        this.template = ''
		    }
		}
		function skipFalseAndFunction(a) {
		    return a !== false && (Object(a) !== a)
		}
		var specal = {
		    "class": function (dom, val) {
		        dom.className = val
		    },
		    style: function (dom, val) {
		        dom.style.cssText = val
		    },
		    'for': function (dom, val) {
		        dom.htmlFor = val
		    }
		}

		function createVML(type) {
		    if (document.styleSheets.length < 31) {
		        document.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
		    } else {
		        // no more room, add to the existing one
		        // http://msdn.microsoft.com/en-us/library/ms531194%28VS.85%29.aspx
		        document.styleSheets[0].addRule(".rvml", "behavior:url(#default#VML)");
		    }
		    var arr = type.split(':')
		    if (arr.length === 1) {
		        arr.unshift('v')
		    }
		    var tag = arr[1]
		    var ns = arr[0]
		    if (!document.namespaces[ns]) {
		        document.namespaces.add(ns, "urn:schemas-microsoft-com:vml")
		    }
		    return  document.createElement('<' + ns + ':' + tag + ' class="rvml">');
		}

		function createSVG(type) {
		    return document.createElementNS('http://www.w3.org/2000/svg', type)
		}
		var svgTags = avalon.oneObject('circle,defs,ellipse,image,line,' +
		        'path,polygon,polyline,rect,symbol,text,use,g,svg')
		var VMLTags = avalon.oneObject('shape,line,polyline,rect,roundrect,oval,arc,' +
		        'curve,background,image,shapetype,group,fill,' +
		        'stroke,shadow, extrusion, textbox, imagedata, textpath')

		var rvml = /^\w+\:\w+/

		VElement.prototype = {
		    constructor: VElement,
		    toDOM: function () {
		        var dom, tagName = this.type
		        if (avalon.modern && svgTags[tagName]) {
		            dom = createSVG(tagName)
		        } else if (!avalon.modern && (VMLTags[tagName] || rvml.test(tagName))) {
		            dom = createVML(tagName)
		        } else {
		            dom = document.createElement(tagName)
		        }
		        
		        if (this.wid) {
		            var scope = avalon.scopes[this.wid]
		            if (scope && scope.dom) {
		                return scope.dom
		            }
		        }
		        for (var i in this.props) {
		            var val = this.props[i]
		            if (skipFalseAndFunction(val)) {
		                if (specal[i] && avalon.msie < 8) {
		                    specal[i](dom, val)
		                } else {
		                    dom.setAttribute(i, val + '')
		                }
		            }
		        }
		        
		        switch (this.type) {
		            case 'script':
		                dom.text = this.template
		                break
		            case 'style':
		                if ('styleSheet' in dom) {
		                    dom.setAttribute('type', 'text/css')
		                    dom.styleSheet.cssText = this.template
		                } else {
		                    dom.innerHTML = this.template
		                }
		                break
		            case 'template':
		                dom.innerHTML = this.template
		                break
		            case 'noscript':
		                dom.textContent = this.template
		                break
		            default:
		                if (!this.isVoidTag) {
		                    this.children.forEach(function (c) {
		                        c && dom.appendChild(avalon.vdomAdaptor(c, 'toDOM'))
		                    })
		                }
		                break
		        }
		        return dom
		    },
		    toHTML: function () {
		        var arr = []
		        for (var i in this.props) {
		            var val = this.props[i]
		            if (skipFalseAndFunction(val)) {
		                arr.push(i + '=' + avalon.quote(this.props[i] + ''))
		            }
		        }
		        arr = arr.length ? ' ' + arr.join(' ') : ''
		        var str = '<' + this.type + arr
		        if (this.isVoidTag) {
		            return str + '/>'
		        }
		        str += '>'
		        if (this.children.length) {
		            str += this.children.map(function (c) {
		                return c ? avalon.vdomAdaptor(c, 'toHTML') : ''
		            }).join('')
		        } else {
		            str += this.template
		        }
		        return str + '</' + this.type + '>'
		    }
		}

		module.exports = VElement

	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * ------------------------------------------------------------
		 *                          DOM Api
		 * shim,class,data,css,val,html,event,ready  
		 * ------------------------------------------------------------
		 */
		__webpack_require__(20)
		__webpack_require__(21)
		__webpack_require__(22)
		__webpack_require__(25)
		__webpack_require__(26)
		__webpack_require__(27)
		__webpack_require__(30)
		__webpack_require__(32)

		module.exports = avalon

	/***/ },
	/* 20 */
	/***/ function(module, exports) {

		function fixContains(root, el) {
		    try { //IE6-8,游离于DOM树外的文本节点，访问parentNode有时会抛错
		        while ((el = el.parentNode))
		            if (el === root)
		                return true
		        return false
		    } catch (e) {
		        return false
		    }
		}

		avalon.contains = fixContains
		//IE6-11的文档对象没有contains
		if (!avalon.document.contains) {
		    avalon.document.contains = function (b) {
		        return fixContains(document, b)
		    }
		}

		function outerHTML() {
		    return new XMLSerializer().serializeToString(this)
		}

		if (avalon.window.SVGElement) {
		    //safari5+是把contains方法放在Element.prototype上而不是Node.prototype
		    if (!document.createTextNode('x').contains) {
		        Node.prototype.contains = function (arg) {//IE6-8没有Node对象
		            return !!(this.compareDocumentPosition(arg) & 16)
		        }
		    }

		    var svgns = 'http://www.w3.org/2000/svg'
		    var svg = avalon.document.createElementNS(svgns, 'svg')

		    svg.innerHTML = '<circle fill="red" />'
		  //IE9-11,firefox,ios7,8的chrome不支持SVG元素的innerHTML,outerHTML属性
		    if (!/^\[object SVG\w*Element\]$/.test(svg.firstChild)) {
		        function createSVG(node, parent) {
		            /* jshint ignore:start */
		            if (node && node.childNodes) {
		                var nodes = node.childNodes
		                for (var i = 0, el; el = nodes[i++]; ) {
		                    if (el.nodeType === 1) {
		                        var svg = document.createElementNS(svgns, el.nodeName.toLowerCase())
		                        avalon.each(el.attributes, function (a, attr) {
		                            svg.setAttribute(attr.name, attr.value)
		                        })
		                        createSVG(el, svg)
		                        parent.appendChild(svg)
		                    } else {
		                        parent.appendChild(el.cloneNode(true))
		                    }
		                }
		            }
		            /* jshint ignore:end */
		        }
		       
		        Object.defineProperties(SVGElement.prototype, {
		            outerHTML: {
		                configurable: true,
		                get: outerHTML,
		                set: function (html) {
		                    var tagName = this.tagName.toLowerCase()
		                    var parent = this.parent
		                    var parsed = avalon.parseHTML(html)
		                    if (tagName === 'svg') {
		                        parent.insertBefore(parsed, this)
		                    } else {
		                        var empty = document.createDocumentFragment()
		                        createSVG(parsed, empty)
		                        parent.insertBefore(empty, this)
		                    }
		                    parent.removeChild(this)
		                }
		            },
		            innerHTML: {
		                configurable: true,
		                get: function () {
		                    var s = this.outerHTML
		                    var ropen = new RegExp('<' + this.nodeName + '\\b(?:(["\'])[^"]*?(\\1)|[^>])*>', 'i')
		                    var rclose = new RegExp('<\/' + this.nodeName + '>$', 'i')
		                    return s.replace(ropen, '').replace(rclose, '')
		                },
		                set: function (html) {
		                    if (avalon.clearHTML) {
		                        avalon.clearHTML(this)
		                        var frag = avalon.parseHTML(html)
		                        createSVG(frag, this)
		                    }
		                }
		            }
		        })
		    }
		}
		//firefox 到11时才有outerHTML
		if (!avalon.root.outerHTML && window.HTMLElement) { 
		    HTMLElement.prototype.__defineGetter__('outerHTML', outerHTML)
		}




	/***/ },
	/* 21 */
	/***/ function(module, exports) {

		var rnowhite = /\S+/g
		var fakeClassListMethods = {
		    _toString: function () {
		        var node = this.node
		        var cls = node.className
		        var str = typeof cls === 'string' ? cls : cls.baseVal
		        var match = str.match(rnowhite)
		        return match ? match.join(' ') : ''
		    },
		    _contains: function (cls) {
		        return (' ' + this + ' ').indexOf(' ' + cls + ' ') > -1
		    },
		    _add: function (cls) {
		        if (!this.contains(cls)) {
		            this._set(this + ' ' + cls)
		        }
		    },
		    _remove: function (cls) {
		        this._set((' ' + this + ' ').replace(' ' + cls + ' ', ' '))
		    },
		    __set: function (cls) {
		        cls = cls.trim()
		        var node = this.node
		        if (typeof node.className === 'object') {
		            //SVG元素的className是一个对象 SVGAnimatedString { baseVal='', animVal=''}，只能通过set/getAttribute操作
		            node.setAttribute('class', cls)
		        } else {
		            node.className = cls
		        }
		    } //toggle存在版本差异，因此不使用它
		}

		function fakeClassList(node) {
		    if (!('classList' in node)) {
		        node.classList = {
		            node: node
		        }
		        for (var k in fakeClassListMethods) {
		            node.classList[k.slice(1)] = fakeClassListMethods[k]
		        }
		    }
		    return node.classList
		}


		'add,remove'.replace(avalon.rword, function (method) {
		    avalon.fn[method + 'Class'] = function (cls) {
		        var el = this[0] || {}
		        //https://developer.mozilla.org/zh-CN/docs/Mozilla/Firefox/Releases/26
		        if (cls && typeof cls === 'string' && el.nodeType === 1) {
		            cls.replace(rnowhite, function (c) {
		                fakeClassList(el)[method](c)
		            })
		        }
		        return this
		    }
		})

		avalon.fn.mix({
		    hasClass: function (cls) {
		        var el = this[0] || {}
		        return el.nodeType === 1 && fakeClassList(el).contains(cls)
		    },
		    toggleClass: function (value, stateVal) {
		        var isBool = typeof stateVal === 'boolean'
		        var me = this
		        String(value).replace(rnowhite, function (c) {
		            var state = isBool ? stateVal : !me.hasClass(c)
		            me[state ? 'addClass' : 'removeClass'](c)
		        })
		        return this
		    }
		})



	/***/ },
	/* 22 */
	/***/ function(module, exports, __webpack_require__) {

		
		var propMap = __webpack_require__(23)
		var isVML = __webpack_require__(24)
		var rsvg =/^\[object SVG\w*Element\]$/
		var ramp = /&amp;/g

		function attrUpdate(node, vnode) {
		    var attrs = vnode.changeAttr
		    if (!node || node.nodeType !== 1 ) {
		        return
		    }
		    if (attrs) {
		        for (var attrName in attrs) {
		            var val = attrs[attrName]
		            // 处理路径属性
		            if (attrName === 'href' || attrName === 'src') {
		                if (!node.hasAttribute) {
		                    val = String(val).replace(ramp, '&') //处理IE67自动转义的问题
		                }
		                node[attrName] = val
		                if (window.chrome && node.tagName === 'EMBED') {
		                    var parent = node.parentNode //#525  chrome1-37下embed标签动态设置src不能发生请求
		                    var comment = document.createComment('ms-src')
		                    parent.replaceChild(comment, node)
		                    parent.replaceChild(node, comment)
		                }
		                //处理HTML5 data-*属性
		            } else if (attrName.indexOf('data-') === 0) {
		                node.setAttribute(attrName, val)

		            } else {
		                var propName = propMap[attrName] || attrName
		                if (typeof node[propName] === 'boolean') {
		                    node[propName] = !!val
		                  
		                    //布尔属性必须使用el.xxx = true|false方式设值
		                    //如果为false, IE全系列下相当于setAttribute(xxx,''),
		                    //会影响到样式,需要进一步处理
		                }

		                if (val === false ) {//移除属性
		                    node.removeAttribute(propName)
		                    continue
		                }
		                //SVG只能使用setAttribute(xxx, yyy), VML只能使用node.xxx = yyy ,
		                //HTML的固有属性必须node.xxx = yyy
		             
		                var isInnate = rsvg.test(node) ? false :
		                        (!avalon.modern && isVML(node)) ? true :
		                        attrName in node.cloneNode(false)
		                if (isInnate) {
		                    node[propName] = val + ''
		                } else {
		                    node.setAttribute(attrName, val)
		                }

		            }

		        }
		        vnode.changeAttr = null
		    }
		}

		var rvalidchars = /^[\],:{}\s]*$/,
		    rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,
		    rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
		    rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g

		avalon.parseJSON = avalon.window.JSON ? JSON.parse : function (data) {
		    if (typeof data === 'string') {
		        data = data.trim();
		        if (data) {
		            if (rvalidchars.test(data.replace(rvalidescape, '@')
		                    .replace(rvalidtokens, ']')
		                    .replace(rvalidbraces, ''))) {
		                return (new Function('return ' + data))() // jshint ignore:line
		            }
		        }
		        avalon.error('Invalid JSON: ' + data)
		    }
		    return data
		}


		avalon.fn.attr = function (name, value) {
		    if (arguments.length === 2) {
		        this[0].setAttribute(name, value)
		        return this
		    } else {
		        return this[0].getAttribute(name)
		    }
		}

		module.exports = attrUpdate

	/***/ },
	/* 23 */
	/***/ function(module, exports) {

		var propMap = {//不规则的属性名映射
		    'accept-charset': 'acceptCharset',
		    'char': 'ch',
		    charoff: 'chOff',
		    'class': 'className',
		    'for': 'htmlFor',
		    'http-equiv': 'httpEquiv'
		}
		/*
		contenteditable不是布尔属性
		http://www.zhangxinxu.com/wordpress/2016/01/contenteditable-plaintext-only/
		contenteditable=''
		contenteditable='events'
		contenteditable='caret'
		contenteditable='plaintext-only'
		contenteditable='true'
		contenteditable='false'
		 */
		var bools = ['autofocus,autoplay,async,allowTransparency,checked,controls',
		    'declare,disabled,defer,defaultChecked,defaultSelected,',
		    'isMap,loop,multiple,noHref,noResize,noShade',
		    'open,readOnly,selected'
		].join(',')

		bools.replace(/\w+/g, function (name) {
		    propMap[name.toLowerCase()] = name
		})

		var anomaly = ['accessKey,bgColor,cellPadding,cellSpacing,codeBase,codeType,colSpan',
		    'dateTime,defaultValue,contentEditable,frameBorder,longDesc,maxLength,'+
		    'marginWidth,marginHeight,rowSpan,tabIndex,useMap,vSpace,valueType,vAlign'
		].join(',')

		anomaly.replace(/\w+/g, function (name) {
		    propMap[name.toLowerCase()] = name
		})

		module.exports = propMap


	/***/ },
	/* 24 */
	/***/ function(module, exports) {

		function isVML(src) {
		    var nodeName = src.nodeName
		    return nodeName.toLowerCase() === nodeName && src.scopeName && src.outerText === ''
		}

		module.exports = isVML

	/***/ },
	/* 25 */
	/***/ function(module, exports) {

		var root = avalon.root
		var window = avalon.window
		var camelize = avalon.camelize
		var cssHooks = avalon.cssHooks

		var prefixes = ['', '-webkit-', '-o-', '-moz-', '-ms-']
		var cssMap = {
		    'float': window.Range ? 'cssFloat' : 'styleFloat'
		}
		avalon.cssNumber = avalon.oneObject('animationIterationCount,columnCount,order,flex,flexGrow,flexShrink,fillOpacity,fontWeight,lineHeight,opacity,orphans,widows,zIndex,zoom')

		avalon.cssName = function (name, host, camelCase) {
		    if (cssMap[name]) {
		        return cssMap[name]
		    }
		    host = host || root.style || {}
		    for (var i = 0, n = prefixes.length; i < n; i++) {
		        camelCase = camelize(prefixes[i] + name)
		        if (camelCase in host) {
		            return (cssMap[name] = camelCase)
		        }
		    }
		    return null
		}


		avalon.fn.css = function (name, value) {
		    if (avalon.isPlainObject(name)) {
		        for (var i in name) {
		            avalon.css(this, i, name[i])
		        }
		    } else {
		        var ret = avalon.css(this, name, value)
		    }
		    return ret !== void 0 ? ret : this
		}

		avalon.fn.position = function () {
		    var offsetParent, offset,
		            elem = this[0],
		            parentOffset = {
		                top: 0,
		                left: 0
		            }
		    if (!elem) {
		        return parentOffset
		    }
		    if (this.css('position') === 'fixed') {
		        offset = elem.getBoundingClientRect()
		    } else {
		        offsetParent = this.offsetParent() //得到真正的offsetParent
		        offset = this.offset() // 得到正确的offsetParent
		        if (offsetParent[0].tagName !== 'HTML') {
		            parentOffset = offsetParent.offset()
		        }
		        parentOffset.top += avalon.css(offsetParent[0], 'borderTopWidth', true)
		        parentOffset.left += avalon.css(offsetParent[0], 'borderLeftWidth', true)

		        // Subtract offsetParent scroll positions
		        parentOffset.top -= offsetParent.scrollTop()
		        parentOffset.left -= offsetParent.scrollLeft()
		    }
		    return {
		        top: offset.top - parentOffset.top - avalon.css(elem, 'marginTop', true),
		        left: offset.left - parentOffset.left - avalon.css(elem, 'marginLeft', true)
		    }
		}
		avalon.fn.offsetParent = function () {
		    var offsetParent = this[0].offsetParent
		    while (offsetParent && avalon.css(offsetParent, 'position') === 'static') {
		        offsetParent = offsetParent.offsetParent;
		    }
		    return avalon(offsetParent || root)
		}

		cssHooks['@:set'] = function (node, name, value) {
		    try {
		        //node.style.width = NaN;node.style.width = 'xxxxxxx';
		        //node.style.width = undefine 在旧式IE下会抛异常
		        node.style[name] = value
		    } catch (e) {
		    }
		}

		if (window.getComputedStyle) {
		    cssHooks['@:get'] = function (node, name) {
		        if (!node || !node.style) {
		            throw new Error('getComputedStyle要求传入一个节点 ' + node)
		        }
		        var ret, styles = getComputedStyle(node, null)
		        if (styles) {
		            ret = name === 'filter' ? styles.getPropertyValue(name) : styles[name]
		            if (ret === '') {
		                ret = node.style[name] //其他浏览器需要我们手动取内联样式
		            }
		        }
		        return ret
		    }
		    cssHooks['opacity:get'] = function (node) {
		        var ret = cssHooks['@:get'](node, 'opacity')
		        return ret === '' ? '1' : ret
		    }
		} else {
		    var rnumnonpx = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i
		    var rposition = /^(top|right|bottom|left)$/
		    var ralpha = /alpha\([^)]*\)/i
		    var ie8 = !!window.XDomainRequest
		    var salpha = 'DXImageTransform.Microsoft.Alpha'
		    var border = {
		        thin: ie8 ? '1px' : '2px',
		        medium: ie8 ? '3px' : '4px',
		        thick: ie8 ? '5px' : '6px'
		    }
		    cssHooks['@:get'] = function (node, name) {
		        //取得精确值，不过它有可能是带em,pc,mm,pt,%等单位
		        var currentStyle = node.currentStyle
		        var ret = currentStyle[name]
		        if ((rnumnonpx.test(ret) && !rposition.test(ret))) {
		            //①，保存原有的style.left, runtimeStyle.left,
		            var style = node.style,
		                    left = style.left,
		                    rsLeft = node.runtimeStyle.left
		            //②由于③处的style.left = xxx会影响到currentStyle.left，
		            //因此把它currentStyle.left放到runtimeStyle.left，
		            //runtimeStyle.left拥有最高优先级，不会style.left影响
		            node.runtimeStyle.left = currentStyle.left
		            //③将精确值赋给到style.left，然后通过IE的另一个私有属性 style.pixelLeft
		            //得到单位为px的结果；fontSize的分支见http://bugs.jquery.com/ticket/760
		            style.left = name === 'fontSize' ? '1em' : (ret || 0)
		            ret = style.pixelLeft + 'px'
		            //④还原 style.left，runtimeStyle.left
		            style.left = left
		            node.runtimeStyle.left = rsLeft
		        }
		        if (ret === 'medium') {
		            name = name.replace('Width', 'Style')
		            //border width 默认值为medium，即使其为0'
		            if (currentStyle[name] === 'none') {
		                ret = '0px'
		            }
		        }
		        return ret === '' ? 'auto' : border[ret] || ret
		    }
		    cssHooks['opacity:set'] = function (node, name, value) {
		        var style = node.style
		        var opacity = isFinite(value) && value <= 1 ? 'alpha(opacity=' + value * 100 + ')' : ''
		        var filter = style.filter || '';
		        style.zoom = 1
		        //不能使用以下方式设置透明度
		        //node.filters.alpha.opacity = value * 100
		        style.filter = (ralpha.test(filter) ?
		                filter.replace(ralpha, opacity) :
		                filter + ' ' + opacity).trim()
		        if (!style.filter) {
		            style.removeAttribute('filter')
		        }
		    }
		    cssHooks['opacity:get'] = function (node) {
		        //这是最快的获取IE透明值的方式，不需要动用正则了！
		        var alpha = node.filters.alpha || node.filters[salpha],
		                op = alpha && alpha.enabled ? alpha.opacity : 100
		        return (op / 100) + '' //确保返回的是字符串
		    }
		}

		'top,left'.replace(avalon.rword, function (name) {
		    cssHooks[name + ':get'] = function (node) {
		        var computed = cssHooks['@:get'](node, name)
		        return /px$/.test(computed) ? computed :
		                avalon(node).position()[name] + 'px'
		    }
		})

		var cssShow = {
		    position: 'absolute',
		    visibility: 'hidden',
		    display: 'block'
		}

		var rdisplayswap = /^(none|table(?!-c[ea]).+)/

		function showHidden(node, array) {
		    //http://www.cnblogs.com/rubylouvre/archive/2012/10/27/2742529.html
		    if (node.offsetWidth <= 0) { //opera.offsetWidth可能小于0
		        if (rdisplayswap.test(cssHooks['@:get'](node, 'display'))) {
		            var obj = {
		                node: node
		            }
		            for (var name in cssShow) {
		                obj[name] = node.style[name]
		                node.style[name] = cssShow[name]
		            }
		            array.push(obj)
		        }
		        var parent = node.parentNode
		        if (parent && parent.nodeType === 1) {
		            showHidden(parent, array)
		        }
		    }
		}
		avalon.each({
		    Width: 'width',
		    Height: 'height'
		}, function (name, method) {
		    var clientProp = 'client' + name,
		            scrollProp = 'scroll' + name,
		            offsetProp = 'offset' + name
		    cssHooks[method + ':get'] = function (node, which, override) {
		        var boxSizing = -4
		        if (typeof override === 'number') {
		            boxSizing = override
		        }
		        which = name === 'Width' ? ['Left', 'Right'] : ['Top', 'Bottom']
		        var ret = node[offsetProp] // border-box 0
		        if (boxSizing === 2) { // margin-box 2
		            return ret + avalon.css(node, 'margin' + which[0], true) + avalon.css(node, 'margin' + which[1], true)
		        }
		        if (boxSizing < 0) { // padding-box  -2
		            ret = ret - avalon.css(node, 'border' + which[0] + 'Width', true) - avalon.css(node, 'border' + which[1] + 'Width', true)
		        }
		        if (boxSizing === -4) { // content-box -4
		            ret = ret - avalon.css(node, 'padding' + which[0], true) - avalon.css(node, 'padding' + which[1], true)
		        }
		        return ret
		    }
		    cssHooks[method + '&get'] = function (node) {
		        var hidden = [];
		        showHidden(node, hidden);
		        var val = cssHooks[method + ':get'](node)
		        for (var i = 0, obj; obj = hidden[i++]; ) {
		            node = obj.node
		            for (var n in obj) {
		                if (typeof obj[n] === 'string') {
		                    node.style[n] = obj[n]
		                }
		            }
		        }
		        return val
		    }
		    avalon.fn[method] = function (value) { //会忽视其display
		        var node = this[0]
		        if (arguments.length === 0) {
		            if (node.setTimeout) { //取得窗口尺寸
		                return node['inner' + name] ||
		                        node.document.documentElement[clientProp] ||
		                        node.document.body[clientProp] //IE6下前两个分别为undefined,0
		            }
		            if (node.nodeType === 9) { //取得页面尺寸
		                var doc = node.documentElement
		                //FF chrome    html.scrollHeight< body.scrollHeight
		                //IE 标准模式 : html.scrollHeight> body.scrollHeight
		                //IE 怪异模式 : html.scrollHeight 最大等于可视窗口多一点？
		                return Math.max(node.body[scrollProp], doc[scrollProp], node.body[offsetProp], doc[offsetProp], doc[clientProp])
		            }
		            return cssHooks[method + '&get'](node)
		        } else {
		            return this.css(method, value)
		        }
		    }
		    avalon.fn['inner' + name] = function () {
		        return cssHooks[method + ':get'](this[0], void 0, -2)
		    }
		    avalon.fn['outer' + name] = function (includeMargin) {
		        return cssHooks[method + ':get'](this[0], void 0, includeMargin === true ? 2 : 0)
		    }
		})

		avalon.fn.offset = function () { //取得距离页面左右角的坐标
		    var node = this[0],
		            box = {
		                left: 0,
		                top: 0
		            }
		    if (!node || !node.tagName || !node.ownerDocument) {
		        return box
		    }
		    var doc = node.ownerDocument,
		            body = doc.body,
		            root = doc.documentElement,
		            win = doc.defaultView || doc.parentWindow
		    if (!avalon.contains(root, node)) {
		        return box
		    }
		    //http://hkom.blog1.fc2.com/?mode=m&no=750 body的偏移量是不包含margin的
		    //我们可以通过getBoundingClientRect来获得元素相对于client的rect.
		    //http://msdn.microsoft.com/en-us/library/ms536433.aspx
		    if (node.getBoundingClientRect) {
		        box = node.getBoundingClientRect() // BlackBerry 5, iOS 3 (original iPhone)
		    }
		    //chrome/IE6: body.scrollTop, firefox/other: root.scrollTop
		    var clientTop = root.clientTop || body.clientTop,
		            clientLeft = root.clientLeft || body.clientLeft,
		            scrollTop = Math.max(win.pageYOffset || 0, root.scrollTop, body.scrollTop),
		            scrollLeft = Math.max(win.pageXOffset || 0, root.scrollLeft, body.scrollLeft)
		    // 把滚动距离加到left,top中去。
		    // IE一些版本中会自动为HTML元素加上2px的border，我们需要去掉它
		    // http://msdn.microsoft.com/en-us/library/ms533564(VS.85).aspx
		    return {
		        top: box.top + scrollTop - clientTop,
		        left: box.left + scrollLeft - clientLeft
		    }
		}

		//生成avalon.fn.scrollLeft, avalon.fn.scrollTop方法
		avalon.each({
		    scrollLeft: 'pageXOffset',
		    scrollTop: 'pageYOffset'
		}, function (method, prop) {
		    avalon.fn[method] = function (val) {
		        var node = this[0] || {},
		                win = getWindow(node),
		                top = method === 'scrollTop'
		        if (!arguments.length) {
		            return win ? (prop in win) ? win[prop] : root[method] : node[method]
		        } else {
		            if (win) {
		                win.scrollTo(!top ? val : avalon(win).scrollLeft(), top ? val : avalon(win).scrollTop())
		            } else {
		                node[method] = val
		            }
		        }
		    }
		})

		function getWindow(node) {
		    return node.window || node.defaultView || node.parentWindow || false
		}

	/***/ },
	/* 26 */
	/***/ function(module, exports) {

		function getValType(elem) {
		    var ret = elem.tagName.toLowerCase()
		    return ret === 'input' && /checkbox|radio/.test(elem.type) ? 'checked' : ret
		}
		var roption = /^<option(?:\s+\w+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+))?)*\s+value[\s=]/i
		var valHooks = {
		    'option:get': avalon.msie ? function (node) {
		        //在IE11及W3C，如果没有指定value，那么node.value默认为node.text（存在trim作），但IE9-10则是取innerHTML(没trim操作)
		        //specified并不可靠，因此通过分析outerHTML判定用户有没有显示定义value
		        return roption.test(node.outerHTML) ? node.value : node.text.trim()
		    } : function (node) {
		        return node.value
		    },
		    'select:get': function (node, value) {
		        var option, options = node.options,
		                index = node.selectedIndex,
		                getter = valHooks['option:get'],
		                one = node.type === 'select-one' || index < 0,
		                values = one ? null : [],
		                max = one ? index + 1 : options.length,
		                i = index < 0 ? max : one ? index : 0
		        for (; i < max; i++) {
		            option = options[i]
		            //IE6-9在reset后不会改变selected，需要改用i === index判定
		            //我们过滤所有disabled的option元素，但在safari5下，
		            //如果设置optgroup为disable，那么其所有孩子都disable
		            //因此当一个元素为disable，需要检测其是否显式设置了disable及其父节点的disable情况
		            if ((option.selected || i === index) && !option.disabled &&
		                    (!option.parentNode.disabled || option.parentNode.tagName !== 'OPTGROUP')
		                    ) {
		                value = getter(option)
		                if (one) {
		                    return value
		                }
		                //收集所有selected值组成数组返回
		                values.push(value)
		            }
		        }
		        return values
		    },
		    'select:set': function (node, values, optionSet) {
		        values = [].concat(values) //强制转换为数组
		        var getter = valHooks['option:get']
		        for (var i = 0, el; el = node.options[i++]; ) {
		            if ((el.selected = values.indexOf(getter(el)) > -1)) {
		                optionSet = true
		            }
		        }
		        if (!optionSet) {
		            node.selectedIndex = -1
		        }
		    }
		}

		avalon.fn.val = function (value) {
		    var node = this[0]
		    if (node && node.nodeType === 1) {
		        var get = arguments.length === 0
		        var access = get ? ':get' : ':set'
		        var fn = valHooks[getValType(node) + access]
		        if (fn) {
		            var val = fn(node, value)
		        } else if (get) {
		            return (node.value || '').replace(/\r/g, '')
		        } else {
		            node.value = value
		        }
		    }
		    return get ? val : this
		}

	/***/ },
	/* 27 */
	/***/ function(module, exports, __webpack_require__) {

		var Cache = __webpack_require__(28)

		var fixCloneNode = __webpack_require__(29)

		var rhtml = /<|&#?\w+;/
		var htmlCache = new Cache(128)
		var rxhtml = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig

		avalon.parseHTML = function (html) {
		    var fragment = avalon.avalonFragment.cloneNode(false)
		    //处理非字符串
		    if (typeof html !== 'string') {
		        return fragment
		    }
		    //处理非HTML字符串
		    if (!rhtml.test(html)) {
		        return document.createTextNode(html)
		    }

		    html = html.replace(rxhtml, '<$1></$2>').trim()
		    var hasCache = htmlCache.get(html)
		    if (hasCache) {
		        return fixCloneNode(hasCache)
		    }
		    var vnodes = avalon.lexer(html, false, 1000)
		    for(var i = 0, el; el = vnodes[i++];){
		        fragment.appendChild(avalon.vdomAdaptor(el,'toDOM'))
		    }
		    if (html.length < 1024) {
		        htmlCache.put(html, fixCloneNode(fragment))
		    }
		    return fragment
		}

		avalon.innerHTML = function (node, html) {
		    if (!avalon.modern && (!rcreate.test(html) && !rnest.test(html))) {
		        try {
		            node.innerHTML = html
		            return
		        } catch (e) {
		        }
		    }
		    var parsed = this.parseHTML(html)
		    this.clearHTML(node).appendChild(parsed)
		}

		avalon.clearHTML = function (node) {
		    node.textContent = ''
		    while (node.lastChild) {
		        node.removeChild(node.lastChild)
		    }
		    return node
		}



	/***/ },
	/* 28 */
	/***/ function(module, exports) {

		// https://github.com/rsms/js-lru
		function LRU(maxLength) {
		    this.size = 0
		    this.limit = maxLength
		    this.head = this.tail = void 0
		    this._keymap = {}
		}

		var p = LRU.prototype

		p.put = function (key, value) {
		    var entry = {
		        key: key,
		        value: value
		    }
		    this._keymap[key] = entry
		    if (this.tail) {
		        this.tail.newer = entry
		        entry.older = this.tail
		    } else {
		        this.head = entry
		    }
		    this.tail = entry
		    if (this.size === this.limit) {
		        this.shift()
		    } else {
		        this.size++
		    }
		    return value
		}

		p.shift = function () {
		    var entry = this.head
		    if (entry) {
		        this.head = this.head.newer
		        this.head.older =
		                entry.newer =
		                entry.older =
		                this._keymap[entry.key] = void 0
		        delete this._keymap[entry.key] //#1029
		    }
		}
		p.get = function (key) {
		    var entry = this._keymap[key]
		    if (entry === void 0)
		        return
		    if (entry === this.tail) {
		        return  entry.value
		    }
		    // HEAD--------------TAIL
		    //   <.older   .newer>
		    //  <--- add direction --
		    //   A  B  C  <D>  E
		    if (entry.newer) {
		        if (entry === this.head) {
		            this.head = entry.newer
		        }
		        entry.newer.older = entry.older // C <-- E.
		    }
		    if (entry.older) {
		        entry.older.newer = entry.newer // C. --> E
		    }
		    entry.newer = void 0 // D --x
		    entry.older = this.tail // D. --> E
		    if (this.tail) {
		        this.tail.newer = entry // E. <-- D
		    }
		    this.tail = entry
		    return entry.value
		}

		module.exports = LRU


	/***/ },
	/* 29 */
	/***/ function(module, exports) {

		var rcheckedType = /radio|checkbox/

		function fix(dest, src) {
		    if (dest.nodeType !== 1) {
		        return
		    }
		    var nodeName = dest.nodeName.toLowerCase()
		    if (nodeName === 'object') {
		        if (dest.parentNode) {
		            dest.outerHTML = src.outerHTML
		        }

		    } else if (nodeName === 'input' && rcheckedType.test(src.type)) {

		        dest.defaultChecked = dest.checked = src.checked

		        if (dest.value !== src.value) {
		            dest.value = src.value
		        }

		    } else if (nodeName === 'option') {
		        dest.defaultSelected = dest.selected = src.defaultSelected
		    } else if (nodeName === 'input' || nodeName === 'textarea') {
		        dest.defaultValue = src.defaultValue
		    }
		}


		function getAll(context) {
		    return typeof context.getElementsByTagName !== "undefined" ?
		            context.getElementsByTagName("*") :
		            typeof context.querySelectorAll !== "undefined" ?
		            context.querySelectorAll("*") : []
		}

		function fixCloneNode(src) {
		    var target = src.cloneNode(true)
		    if (avalon.modern)
		        return target
		    var t = getAll(target)
		    var s = getAll(src)
		    avalon.each(s, function (i) {
		        fix(t[i], s[i])
		    })
		    return target
		}

		module.exports = fixCloneNode

	/***/ },
	/* 30 */
	/***/ function(module, exports, __webpack_require__) {

		var document = avalon.document
		var window = avalon.window
		var root = avalon.root
		var W3C = avalon.modern

		var getShortID = __webpack_require__(6).getShortID
		//http://www.feiesoft.com/html/events.html
		//http://segmentfault.com/q/1010000000687977/a-1020000000688757
		var canBubbleUp = __webpack_require__(31)

		if (!W3C) {
		    delete canBubbleUp.change
		    delete canBubbleUp.select
		}

		//canBubbleUp.touchstart = 1
		//canBubbleUp.touchstart = 1
		//canBubbleUp.touchstart = 1

		var eventHooks = avalon.eventHooks
		/*绑定事件*/
		avalon.bind = function (elem, type, fn) {
		    if (elem.nodeType === 1) {
		        var value = elem.getAttribute('avalon-events') || ''
		        //如果是使用ms-on-*绑定的回调,其uuid格式为e12122324,
		        //如果是使用bind方法绑定的回调,其uuid格式为_12
		        var uuid = getShortID(fn)
		        var hook = eventHooks[type]
		        if(hook){
		            type = hook.type || type
		            if (hook.fix) {
		                fn = hook.fix(elem, fn)
		                fn.uuid = uuid
		            }
		        }
		        var key = type + ':' + uuid
		        avalon.eventListeners[fn.uuid] = fn
		        if (value.indexOf(type + ':') === -1) {//同一种事件只绑定一次
		            if (canBubbleUp[type] || (avalon.modern && focusBlur[type])) {
		                delegateEvent(type)
		            } else {
		                nativeBind(elem, type, dispatch)
		            }
		        }
		        var keys = value.split(',')
		        if (keys[0] === '') {
		            keys.shift()
		        }
		        if (keys.indexOf(key) === -1) {
		            keys.push(key)
		            elem.setAttribute('avalon-events', keys.join(','))
		            //将令牌放进avalon-events属性中
		        }

		    } else {
		        nativeBind(elem, type, fn)
		    }
		    return fn //兼容之前的版本
		}

		avalon.unbind = function (elem, type, fn) {
		    if (elem.nodeType === 1) {
		        var value = elem.getAttribute('avalon-events') || ''
		        switch (arguments.length) {
		            case 1:
		                nativeUnBind(elem, type, dispatch)
		                elem.removeAttribute('avalon-events')
		                break
		            case 2:
		                value = value.split(',').filter(function (str) {
		                    return str.indexOf(type + ':') === -1
		                }).join(',')
		                elem.setAttribute('avalon-events', value)
		                break
		            default:
		                var search = type + ':' + fn.uuid
		                value = value.split(',').filter(function (str) {
		                    return str !== search
		                }).join(',')
		                elem.setAttribute('avalon-events', value)
		                delete avalon.eventListeners[fn.uuid]
		                break
		        }
		    } else {
		        nativeUnBind(elem, type, fn)
		    }
		}

		var typeRegExp = {}
		function collectHandlers(elem, type, handlers) {
		    var value = elem.getAttribute('avalon-events')
		    if (value && (elem.disabled !== true || type !== 'click')) {
		        var uuids = []
		        var reg = typeRegExp[type] || (typeRegExp[type] = new RegExp(type + '\\:([^,\\s]+)', 'g'))
		        value.replace(reg, function (a, b) {
		            uuids.push(b)
		            return a
		        })
		        if (uuids.length) {
		            handlers.push({
		                elem: elem,
		                uuids: uuids
		            })
		        }
		    }
		    elem = elem.parentNode
		    var g = avalon.gestureEvents || {}
		    if (elem && elem.getAttribute && (canBubbleUp[type] || g[type])) {
		        collectHandlers(elem, type, handlers)
		    }

		}
		var rhandleHasVm = /^e/
		function dispatch(event) {
		    event = new avEvent(event)
		    var type = event.type
		    var elem = event.target
		    var handlers = []
		    collectHandlers(elem, type, handlers)
		    var i = 0, j, uuid, handler
		    while ((handler = handlers[i++]) && !event.cancelBubble) {
		        var host = event.currentTarget = handler.elem
		        j = 0
		        while ((uuid = handler.uuids[ j++ ]) &&
		                !event.isImmediatePropagationStopped) {
		            
		            var fn = avalon.eventListeners[uuid]
		            if (fn) {
		                var vm = rhandleHasVm.test(uuid) ? handler.elem._ms_context_ : 0
		                if (vm && vm.$hashcode === false) {
		                    return avalon.unbind(elem, type, fn)
		                }
		   
		                var ret = fn.call(vm || elem, event, host._ms_local)
		                
		                if(ret === false){
		                    event.preventDefault()
		                    event.stopPropagation()
		                }
		            }
		        }
		    }
		}

		var focusBlur = {
		    focus: true,
		    blur: true
		}
		var nativeBind = W3C ? function (el, type, fn, capture) {
		    el.addEventListener(type, fn, capture)
		} : function (el, type, fn) {
		    el.attachEvent('on' + type, fn)
		}
		var nativeUnBind = W3C ? function (el, type, fn) {
		    el.removeEventListener(type, fn)
		} : function (el, type, fn) {
		    el.detachEvent('on' + type, fn)
		}

		function delegateEvent(type) {
		    var value = root.getAttribute('delegate-events') || ''
		    if (value.indexOf(type) === -1) {
		        var arr = value.match(avalon.rword) || []
		        arr.push(type)
		        root.setAttribute('delegate-events', arr.join(','))
		        nativeBind(root, type, dispatch, !!focusBlur[type])
		    }
		}

		avalon.fireDom = function (elem, type, opts) {
		    if (document.createEvent) {
		        var hackEvent = document.createEvent('Events')
		        hackEvent.initEvent(type, true, true, opts)
		        avalon.shadowCopy(hackEvent, opts)

		        elem.dispatchEvent(hackEvent)
		    } else if (root.contains(elem)) {//IE6-8触发事件必须保证在DOM树中,否则报'SCRIPT16389: 未指明的错误'
		        hackEvent = document.createEventObject()
		        avalon.shadowCopy(hackEvent, opts)
		        elem.fireEvent('on' + type, hackEvent)
		    }
		}

		var rmouseEvent = /^(?:mouse|contextmenu|drag)|click/
		var rvendor = /^(?:ms|webkit|moz)/
		function avEvent(event) {
		    if (event.originalEvent) {
		        return this
		    }
		    for (var i in event) {
		        if (!rvendor.test(i) && typeof event[i] !== 'function') {
		            this[i] = event[i]
		        }
		    }
		    if (!this.target) {
		        this.target = event.srcElement
		    }
		    var target = this.target
		    if (this.which == null && event.type.indexOf('key') === 0) {
		        this.which = event.charCode != null ? event.charCode : event.keyCode
		    } else if (rmouseEvent.test(event.type) && !('pageX' in this)) {
		        var doc = target.ownerDocument || document
		        var box = doc.compatMode === 'BackCompat' ? doc.body : doc.documentElement
		        this.pageX = event.clientX + (box.scrollLeft >> 0) - (box.clientLeft >> 0)
		        this.pageY = event.clientY + (box.scrollTop >> 0) - (box.clientTop >> 0)
		        this.wheelDeltaY = this.wheelDelta
		        this.wheelDeltaX = 0
		    }
		    this.timeStamp = new Date() - 0
		    this.originalEvent = event
		}
		avEvent.prototype = {
		    preventDefault: function () {
		        var e = this.originalEvent;
		        this.returnValue = false
		        if (e) {
		            e.returnValue = false
		            if (e.preventDefault) {
		                e.preventDefault()
		            }
		        }
		    },
		    stopPropagation: function () {
		        var e = this.originalEvent
		        this.cancelBubble = true
		        if (e) {
		            e.cancelBubble = true
		            if (e.stopPropagation) {
		                e.stopPropagation()
		            }
		        }
		    },
		    stopImmediatePropagation: function () {
		        var e = this.originalEvent
		        this.isImmediatePropagationStopped = true
		        if (e.stopImmediatePropagation) {
		            e.stopImmediatePropagation()
		        }
		        this.stopPropagation()
		    }
		}

		//针对firefox, chrome修正mouseenter, mouseleave
		if (!('onmouseenter' in root)) {
		    avalon.each({
		        mouseenter: 'mouseover',
		        mouseleave: 'mouseout'
		    }, function (origType, fixType) {
		        eventHooks[origType] = {
		            type: fixType,
		            fix: function (elem, fn) {
		                return function (e) {
		                    var t = e.relatedTarget
		                    if (!t || (t !== elem && !(elem.compareDocumentPosition(t) & 16))) {
		                        delete e.type
		                        e.type = origType
		                        return fn.apply(this, arguments)
		                    }
		                }
		            }
		        }
		    })
		}
		//针对IE9+, w3c修正animationend
		avalon.each({
		    AnimationEvent: 'animationend',
		    WebKitAnimationEvent: 'webkitAnimationEnd'
		}, function (construct, fixType) {
		    if (window[construct] && !eventHooks.animationend) {
		        eventHooks.animationend = {
		            type: fixType
		        }
		    }
		})
		//针对IE6-8修正input
		if (!('oninput' in document.createElement('input'))) {
		    eventHooks.input = {
		        type: 'propertychange',
		        fix: function (elem, fn) {
		            return function (e) {
		                if (e.propertyName === 'value') {
		                    e.type = 'input'
		                    return fn.apply(this, arguments)
		                }
		            }
		        }
		    }
		}
		if (document.onmousewheel === void 0) {
		    /* IE6-11 chrome mousewheel wheelDetla 下 -120 上 120
		     firefox DOMMouseScroll detail 下3 上-3
		     firefox wheel detlaY 下3 上-3
		     IE9-11 wheel deltaY 下40 上-40
		     chrome wheel deltaY 下100 上-100 */
		    var fixWheelType = document.onwheel !== void 0 ? 'wheel' : 'DOMMouseScroll'
		    var fixWheelDelta = fixWheelType === 'wheel' ? 'deltaY' : 'detail'
		    eventHooks.mousewheel = {
		        type: fixWheelType,
		        fix: function (elem, fn) {
		            return function (e) {
		                var delta = e[fixWheelDelta] > 0 ? -120 : 120
		                e.wheelDelta = ~~elem._ms_wheel_ + delta
		                elem._ms_wheel_ = e.wheelDeltaY = e.wheelDelta

		                e.wheelDeltaX = 0
		                if (Object.defineProperty) {
		                    Object.defineProperty(e, 'type', {
		                        value: 'mousewheel'
		                    })
		                }
		                return fn.apply(this, arguments)
		            }
		        }
		    }
		}

		avalon.fn.bind = function (type, fn, phase) {
		    if (this[0]) { //此方法不会链
		        return avalon.bind(this[0], type, fn, phase)
		    }
		}

		avalon.fn.unbind = function (type, fn, phase) {
		    if (this[0]) {
		        avalon.unbind(this[0], type, fn, phase)
		    }
		    return this
		}
		avalon.$$unbind = function (node) {
		    var nodes = node.getElementsByTagName('*')
		    //IE6-7这样取所有子孙节点会混入注释节点
		    avalon.each(nodes, function (i, el) {
		        if (el.nodeType === 1 && el.getAttribute('avalon-events')) {
		            avalon.unbind(el)
		        }
		    })
		}

	/***/ },
	/* 31 */
	/***/ function(module, exports) {

		//http://www.feiesoft.com/html/events.html
		//http://segmentfault.com/q/1010000000687977/a-1020000000688757
		module.exports = {
		    click: true,
		    dblclick: true,
		    keydown: true,
		    keypress: true,
		    keyup: true,
		    mousedown: true,
		    mousemove: true,
		    mouseup: true,
		    mouseover: true,
		    mouseout: true,
		    wheel: true,
		    mousewheel: true,
		    input: true,
		    change: true,
		    beforeinput: true,
		    compositionstart: true,
		    compositionupdate: true,
		    compositionend: true,
		    select: true,
		    //http://blog.csdn.net/lee_magnum/article/details/17761441
		    cut: true,
		    copy: true,
		    paste: true,
		    beforecut: true,
		    beforecopy: true,
		    beforepaste: true,
		    focusin: true,
		    focusout: true,
		    DOMFocusIn: true,
		    DOMFocusOut: true,
		    DOMActivate: true,
		    dragend: true,
		    datasetchanged: true
		}

	/***/ },
	/* 32 */
	/***/ function(module, exports, __webpack_require__) {

		var scan = __webpack_require__(33)

		var document = avalon.document
		var window = avalon.window
		var root = avalon.root

		var readyList = [], isReady
		var fireReady = function (fn) {
		    isReady = true

		    while (fn = readyList.shift()) {
		        fn(avalon)
		    }
		}

		function doScrollCheck() {
		    try { //IE下通过doScrollCheck检测DOM树是否建完
		        root.doScroll('left')
		        fireReady()
		    } catch (e) {
		        setTimeout(doScrollCheck)
		    }
		}

		if (document.readyState === 'complete') {
		    setTimeout(fireReady) //如果在domReady之外加载
		} else if (document.addEventListener) {
		    document.addEventListener('DOMContentLoaded', fireReady)
		} else if (document.attachEvent) {
		    document.attachEvent('onreadystatechange', function () {
		        if (document.readyState === 'complete') {
		            fireReady()
		        }
		    })
		    try {
		        var isTop = window.frameElement === null
		    } catch (e) {
		    }
		    if (root.doScroll && isTop && window.external) {//fix IE iframe BUG
		        doScrollCheck()
		    }
		}
		if (window.document) {
		    avalon.bind(window, 'load', fireReady)
		}
		avalon.ready = function (fn) {
		    if (!isReady) {
		        readyList.push(fn)
		    } else {
		        fn(avalon)
		    }
		}

		avalon.ready(function(){
		    scan(document.body)
		})



	/***/ },
	/* 33 */
	/***/ function(module, exports) {

		function scan(nodes) {
		    for (var i = 0, elem; elem = nodes[i++];) {
		        if (elem.nodeType === 1) {
		            var $id = getController(elem)
		          
		            var vm = avalon.vmodels[$id]
		            if (vm && !vm.$element) {
		                avalon(elem).removeClass('ms-controller')
		                vm.$element = elem
		                var now = new Date()
		                //IE6-8下元素的outerHTML前面会有空白
		                elem.vtree = avalon.lexer(elem.outerHTML.trim())
		                avalon.speedUp(elem.vtree)
		                var now2 = new Date()
		                avalon.log('create primitive vtree', now2 - now)
		                vm.$render = avalon.render(elem.vtree)

		                avalon.scopes[vm.$id] = {
		                    vmodel: vm,
		                    local: {}
		                }
		                var now3 = new Date()
		                avalon.log('create template Function ', now3 - now2)
		                avalon.rerenderStart = now3
		                avalon.batch($id)
		                
		            } else if (!$id) {
		                scan(elem.childNodes)
		            }
		        }
		    }
		}

		module.exports = avalon.scan = function (a) {
		    if (!a || !a.nodeType) {
		        avalon.warn('[avalon.scan] first argument must be element , documentFragment, or document')
		        return
		    }
		    scan([a])
		}

		function getController(a) {
		    return a.getAttribute('ms-controller') || a.getAttribute('ms-important')
		}

	/***/ },
	/* 34 */
	/***/ function(module, exports, __webpack_require__) {

		__webpack_require__(35)
		__webpack_require__(37)
		//处理属性样式
		__webpack_require__(38)

		__webpack_require__(39)
		__webpack_require__(40)
		////处理内容
		__webpack_require__(41)
		__webpack_require__(42)
		__webpack_require__(43)
		////需要用到事件的
		__webpack_require__(52)
		__webpack_require__(53)
		__webpack_require__(54)
		__webpack_require__(61)
		__webpack_require__(62)
		//
		////处理逻辑
		__webpack_require__(63)
		__webpack_require__(64)
		//
		__webpack_require__(65)
		__webpack_require__(68)
		//优先级 ms-important, ms-controller, ms-for, ms-widget, ms-effect, ms-if
		//.......
		//ms-duplex


	/***/ },
	/* 35 */
	/***/ function(module, exports, __webpack_require__) {

		// 抽离出来公用
		var update = __webpack_require__(36)

		avalon.directive('important', {
		    priority: 1,
		    parse: function (copy, src, binding) {
		        var $id = binding.expr
		        var quoted = avalon.quote($id)

		        src.$id = $id
		        src.$prepend = ['(function(__vmodel__){',
		            'var important = avalon.scopes[' + quoted + ']',
		            'if(important && important.fast){avalon.log("不进入"+' + quoted + ');return }',
		            'var __top__ = __vmodel__',
		            'var __vmodel__ =  avalon.vmodels[' + quoted + ']',

		            '/*controller:' + $id + '*/',
		        ].join('\n') + '\n\n'
		        copy.local = '{}'
		        copy.top = '__top__'
		        copy.vmodel = '__vmodel__'
		        src.$append = '/*controller:' + $id + '*/\n})(__vmodel__);'
		    },
		    diff: function (copy, src) {
		        if (src.vmodel !== copy.vmodel) {
		            //console.log('ms-important')
		            src.local = copy.local
		            src.top = copy.top
		            src.synth =  src.vmodel = copy.vmodel
		            update(src, this.update)
		        }
		    },
		    update: function (node, vnode, parent) {
		        avalon.directives.controller.update(node, vnode, parent, 'important')
		    }
		})


	/***/ },
	/* 36 */
	/***/ function(module, exports) {

		module.exports = function (vdom, update, hookName) {
		    if (hookName) {
		        vdom.afterChange = vdom.afterChange || []
		        avalon.Array.ensure(vdom.afterChange, update)
		    } else {
		        var dom = vdom.dom
		        update(vdom.dom, vdom, dom && dom.parentNode)
		    }
		}


	/***/ },
	/* 37 */
	/***/ function(module, exports, __webpack_require__) {

		// 抽离出来公用
		var update = __webpack_require__(36)
		var cache = {}
		avalon.mediatorFactory2 = function (__vmodel__, __present__) {
		    var a = __vmodel__.$hashcode
		    var b = __present__.$hashcode
		    var id = a + b
		    if (cache[id]) {
		        return cache[id]
		    }
		    var c = avalon.mediatorFactory(__vmodel__, __present__)
		    return  cache[id] = c
		}
		avalon.directive('controller', {
		    priority: 2,
		    parse: function (copy, src, binding) {
		        var $id = binding.expr
		        var quoted = avalon.quote($id)
		        var name = binding.name
		        copy[name] = quoted


		        src.$prepend = ['(function(__vmodel__){',
		            'var __top__ = __vmodel__',
		            'var __present__ = avalon.vmodels[' + quoted + ']',
		            'if(__present__ && __top__ && __present__ !== __top__){',
		            'var __synth__ =  avalon.mediatorFactory(__vmodel__, __present__)',
		            'var __vmodel__ = __synth__',
		            '}else{',
		            '__vmodel__ = __top__ || __present__',
		            '}',
		            '/*controller:' + $id + '*/',
		        ].join('\n') + '\n\n'
		        copy.synth = '__synth__'
		        copy.local = '__local__'
		        copy.top = '__top__'
		        src.$id = $id
		        copy.vmodel = '__present__'
		        src.$append = '/*controller:' + $id + '*/\n})(__vmodel__);'
		    },
		    diff: function (copy, src, name) {
		        if (src[name] !== copy[name]) {
		            src[name] = copy[name]
		            src.synth = copy.synth
		            src.local = copy.local
		            src.top = copy.top
		            src.vmodel = copy.vmodel
		            update(src, this.update)
		        }
		    },
		    update: function (dom, vdom, parent, important) {

		        var scope = avalon.scopes[vdom.$id]
		        if (scope &&
		                (!important || important.fast)) {
		            //如果vm在位于顶层,那么在domReady的第一次scan中已经注册到scopes
		            return
		        }
		        
		        var top = vdom.top //位于上方的顶层vm或mediator vm
		        var vmodel = vdom.vmodel
		        if (top && vmodel) {
		            var str = (top.$render + '')
		            var synth = vdom.synth
		            var vm = synth || vmodel
		            //开始构建模板函数,从顶层vm的模板函数的toString中
		            //通过splitText截取其作用的区域,
		            //前面加上本地变量与vnodes数组,后面返回vnodes数组
		            //放进avalon.render方法中生成
		            var splitText = '/*controller:' + vdom.$id + '*/'
		            var arr = str.split(splitText)   
		            var effective = arr[1]
		            var local = vdom.local || {}
		            var vars = []
		            for (var i in local) {
		                vars.push('var ' + i + ' = __local__[' + avalon.quote(i) + ']')
		            }
		            vars.push('var vnodes = []\n')
		            var body = vars.join('\n') + effective + '\nreturn vnodes'
		            var render = avalon.render(body)
		            //为相关的vm添加对应属性,$render,$element,vtree
		            
		            synth.$render = vmodel.$render = render
		            synth.$element = vmodel.$element = dom
		            dom.vtree = [vdom]
		            vdom.top = vdom.synth = vdom.vmodel = 0
		           
		            avalon.scopes[vdom.$id] = {
		                vmodel: vm,
		                local: local,
		                fast: 'important'
		            }
		        }
		    }
		})


	/***/ },
	/* 38 */
	/***/ function(module, exports, __webpack_require__) {

		
		var attrUpdate = __webpack_require__(22)
		var update = __webpack_require__(36)

		avalon.directive('attr', {
		    diff: function (copy, src, name) {
		        var a = copy[name]
		        var p = src[name]
		        if (a && typeof a === 'object') {
		            a = a.$model || a //安全的遍历VBscript
		            if (Array.isArray(a)) {//转换成对象
		                a = avalon.mix.apply({}, a)
		            }
		            if (typeof p !== 'object') {//如果一开始为空
		                src.changeAttr = src[name] = a
		            } else {
		                var patch = {}
		                var hasChange = false
		                for (var i in a) {//diff差异点
		                    if (a[i] !== p[i]) {
		                        hasChange = true
		                        patch[i] = a[i]
		                    }
		                }
		                if (hasChange) {
		                    src[name] = a
		                    src.changeAttr = patch
		                }
		            }
		            if (src.changeAttr) {
		                update(src, this.update )
		            }
		        }
		        delete copy[name]//释放内存
		    },
		    //dom, vnode
		    update: attrUpdate
		})


	/***/ },
	/* 39 */
	/***/ function(module, exports, __webpack_require__) {

		
		var update = __webpack_require__(36)

		avalon.directive('css', {
		    diff: function (copy, src, name) {
		        var a = copy[name]
		        var p = src[name]
		        if (Object(a) === a) {
		            
		            a = a.$model || a//安全的遍历VBscript
		            if (Array.isArray(a)) {//转换成对象
		                a = avalon.mix.apply({}, a)
		            }
		            if (typeof p !== 'object') {//如果一开始为空
		                src.changeStyle = src[name] = a
		            } else {
		                var patch = {}
		                var hasChange = false
		                for (var i in a) {//diff差异点
		                    if (a[i] !== p[i]) {
		                        hasChange = true
		                        patch[i] = a[i]
		                    }
		                }
		                if (hasChange) {
		                    src[name] = a
		                    src.changeStyle = patch
		                }
		            }
		            if (src.changeStyle) {
		                update(src, this.update)
		            }
		        }
		        delete copy[name]//释放内存
		    },
		    update: function (dom, vdom) {
		        var change = vdom.changeStyle
		        var wrap = avalon(dom)
		        for (var name in change) {
		            wrap.css(name, change[name])
		        }
		        delete vdom.changeStyle
		    }
		})


	/***/ },
	/* 40 */
	/***/ function(module, exports, __webpack_require__) {

		var update = __webpack_require__(36)

		var none = 'none'
		function parseDisplay(elem, val) {
		    //用于取得此类标签的默认display值
		    var doc = elem.ownerDocument
		    var nodeName = elem.nodeName
		    var key = '_' + nodeName
		    if (!parseDisplay[key]) {
		        var temp = doc.body.appendChild(doc.createElement(nodeName))
		        if (avalon.modern) {
		            val = getComputedStyle(temp, null).display
		        } else {
		            val = temp.currentStyle.display
		        }
		        doc.body.removeChild(temp)
		        if (val === none) {
		            val = 'block'
		        }
		        parseDisplay[key] = val
		    }
		    return parseDisplay[key]
		}

		avalon.parseDisplay = parseDisplay

		avalon.directive('visible', {
		    diff: function (copy, src, name) {
		        var c = !!copy[name]
		        if (c !== src[name]) {
		            src[name] = c
		            update(src, this.update )
		        }
		    },
		    update: function (dom, vdom) { 
		        if(!dom || dom.nodeType !== 1){
		            return
		        }
		        var show = vdom['ms-visible']
		        var display = dom.style.display
		        var value
		        if (show) {
		            if (display === none) {
		                value = vdom.displayValue
		                if (!value) {
		                    dom.style.display = ''
		                }
		            }
		            if (dom.style.display === '' && avalon(dom).css('display') === none &&
		                    // fix firefox BUG,必须挂到页面上
		                    avalon.contains(dom.ownerDocument, dom)) {

		                value = parseDisplay(dom)
		            }
		        } else {
		            if (display !== none) {
		                value = none
		                vdom.displayValue = display
		            }
		        }
		        function cb(){
		           if (value !== void 0) {
		              dom.style.display = value
		           }
		        }
		        avalon.applyEffect(dom, vdom, {
		            hook: show ? 'onEnterDone': 'onLeaveDone',
		            cb: cb
		        })
		    }
		})



	/***/ },
	/* 41 */
	/***/ function(module, exports, __webpack_require__) {

		var update = __webpack_require__(36)

		avalon.directive('expr', {
		    parse: avalon.noop,
		    diff: function (copy, src) {
		        var copyValue = copy.nodeValue+''
		        if (copyValue !== src.nodeValue) {
		           // console.log(src.dom)
		            src.nodeValue = copyValue
		            update(src, this.update)
		        }
		    },
		    update: function(dom, vdom){
		        dom.nodeValue = vdom.nodeValue
		    }
		})

	/***/ },
	/* 42 */
	/***/ function(module, exports) {

		//此指令实际上不会操作DOM,交由expr指令处理
		avalon.directive('text', {
		    parse: function (copy, src, binding) {
		        copy[binding.name] = 1
		        src.children = []
		        copy.children = '[{\nnodeType:3,\ntype:"#text",\ndynamic:true,' +
		                '\nnodeValue:avalon.parsers.string(' +
		                avalon.parseExpr(binding) + ')}]'
		    },
		    diff: function (copy, src, name) {
		        if (src.dom && !src.isVoidTag && !src.children.length) {
		            var parent = src.dom
		            while (parent.firstChild) {
		                parent.removeChild(parent.firstChild)
		            }
		            var dom = document.createTextNode('x')
		            parent.appendChild(dom)
		            var vdom = {nodeType: 3, type:'#text', dom: dom}
		            src.children.push(vdom)
		        }
		    },
		    update: avalon.noop
		})

	/***/ },
	/* 43 */
	/***/ function(module, exports, __webpack_require__) {

		var update = __webpack_require__(36)
		var parseView = __webpack_require__(44)
		var reconcile = __webpack_require__(51)


		avalon.directive('html', {
		    parse: function (copy, src, binding) {
		        if (!src.isVoidTag) {
		            //将渲染函数的某一部分存起来,渲在c方法中转换为函数
		            copy[binding.name] = avalon.parseExpr(binding)
		            copy.vmodel = '__vmodel__'
		            copy.local = '__local__'
		        } else {
		            copy.children = '[]'
		        }
		    },
		    diff: function (copy, src, name) {
		        var copyValue = copy[name] + ''
		        if (copyValue !== src[name]) {
		            src[name] = copyValue
		            var oldTree = avalon.lexer(copyValue)
		            avalon.speedUp(oldTree)
		            src.children = oldTree
		            var render = avalon.render(oldTree,copy.local)
		            src.render = render
		            var newTree = render(copy.vmodel, copy.local)
		            copy.children = newTree
		            update(src, this.update)
		        } else {
		            var newTree = src.render(copy.vmodel, copy.local)
		            copy.children = newTree
		        }
		    },

		    update: function (dom, vdom, parent) {
		        avalon.clearHTML(dom)
		        var f = avalon.vdomAdaptor(vdom.children)
		        reconcile(f.childNodes, vdom.children, f)
		        dom.appendChild(f)
		    }
		})


	/***/ },
	/* 44 */
	/***/ function(module, exports, __webpack_require__) {

		
		var parseExpr = __webpack_require__(45)
		var extractBindings = __webpack_require__(48)
		var parseDelimiter = __webpack_require__(49)
		var stringify = __webpack_require__(50)
		var config = avalon.config
		var quote = avalon.quote
		var makeHashCode = avalon.makeHashCode
		var r = __webpack_require__(47)
		var rident = r.ident
		var rsp = r.sp

		var rmsFor = /^\s*ms\-for:/
		var rmsForEnd = /^\s*ms\-for\-end:/
		function wrapDelimiter(expr) {
		    return rident.test(expr) ? expr : parseExpr(expr, 'text')
		}

		function add(a) {
		    return 'vnodes.push(' + a + ');'
		}
		function addTag(obj) {
		    return add(stringify(obj))
		}

		function parseNodes(source, inner) {
		    //ms-important， ms-controller ， ms-for 不可复制，省得死循环
		    //ms-important --> ms-controller --> ms-for --> ms-widget --> ms-effect --> ms-if
		    var buffer = inner ? []: ['\nvar vnodes = [];'] 

		    for (var i = 0, el; el = source[i++]; ) {
		        var vnode = parseNode(el)
		        if (el.$prepend) {
		            buffer.push(el.$prepend)
		        }
		        var append = el.$append
		        delete el.$append
		        delete el.$prepend
		        if (vnode) {
		            buffer.push(vnode + '\n')
		        }
		        if (append) {
		            buffer.push(append)
		        }
		    }
		    if (!inner) {
		        buffer.push('return vnodes\n')
		    }
		    return buffer.join('\n')
		}



		function parseNode(source) {
		    var directives = avalon.directives
		    if (source.nodeType === 3) {
		        if (config.rexpr.test(source.nodeValue)) {
		            return add(stringifyText(source))
		        } else {
		            return addTag(source)
		        }
		    } else if (source.nodeType === 1) {

		        var copy = {
		            props: {},
		            type: source.type,
		            nodeType: 1,
		            template: ''
		        }
		        var bindings = extractBindings(copy, source.props)
		        copy.order = bindings.map(function (b) {
		            //将ms-*的值变成函数,并赋给copy.props[ms-*]
		            //如果涉及到修改结构,则在source添加$append,$prepend
		            directives[b.type].parse(copy, source, b)
		            return b.name

		        }).join(',')

		        if (source.isVoidTag) {
		            copy.isVoidTag = true
		        } else {
		            if (!('children' in copy)) {
		                
		                var pChildren = source.children
		                if (pChildren.length) {
		                    delete source.template
		                    copy.children = '(function(){' + parseNodes(pChildren) + '})()'
		                } else {
		                    copy.template = source.template
		                    copy.children = '[]'
		                }
		            }
		        }
		        if(source.skipContent)
		            copy.skipContent = true
		        if(source.skipAttrs)
		            copy.skipAttrs = true

		        return addTag(copy)

		    } else if (source.nodeType === 8) {
		        var nodeValue = source.nodeValue
		        if (rmsFor.test(nodeValue)) {// 处理ms-for指令
		            if (nodeValue.indexOf('ms-for:') !== 0) {
		                avalon.error('ms-for指令前不能有空格')
		            }
		            var copy = {
		                directive: 'for',
		                vmodel: '__vmodel__'
		            }
		            for (var i in source) {
		                if (source.hasOwnProperty(i)) {
		                    copy[i] = source[i]
		                }
		            }

		            directives['for'].parse(copy, source, source)

		            return addTag(copy)

		        } else if (rmsForEnd.test(nodeValue)) {
		            if (nodeValue.indexOf('ms-for-end:') !== 0) {
		                avalon.error('ms-for-end指令前不能有空格')
		            }
		            source.$append = addTag({
		                nodeType: 8,
		                type: '#comment',
		                nodeValue: source.signature,
		                key: 'traceKey'
		            }) +
		                    '\n},__local__,vnodes)\n' +
		                    addTag({
		                        nodeType: 8,
		                        type: "#comment",
		                        signature: source.signature,
		                        nodeValue: "ms-for-end:"
		                    }) + '\n'

		            return ''
		        } else if (nodeValue.indexOf('ms-js:') === 0) {//插入JS声明语句
		            var statement = parseExpr(nodeValue.replace('ms-js:', ''), 'js') + '\n'
		            var ret = addTag(source)
		            var match = statement.match(rstatement)
		            if (match && match[1]) {
		                source.$append = (source.$append || '') + statement +
		                        "\n__local__." + match[1] + ' = ' + match[1] + '\n'
		            } else {
		                avalon.warn(nodeValue + ' parse fail!')
		            }
		            return ret
		        } else {
		            return addTag(source)
		        }
		    } else if (Array.isArray(source)) {
		        source.$append = parseNodes(source, true)
		    }
		}
		var rstatement = /^\s*var\s+([$\w]+)\s*\=\s*\S+/

		function stringifyText(el) {
		    var array = parseDelimiter(el.nodeValue)//返回一个数组
		    var nodeValue = ''
		    if (array.length === 1) {
		        nodeValue = wrapDelimiter(array[0].expr)
		    } else {
		        var token = array.map(function (el) {
		            return el.type ? wrapDelimiter(el.expr) : quote(el.expr)
		        }).join(' + ')
		        nodeValue = 'String(' + token + ')'
		    }
		    return '{\ntype: "#text",\nnodeType:3,\ndynamic:true,\nnodeValue: ' + nodeValue + '\n}'
		}

		module.exports = parseNodes


	/***/ },
	/* 45 */
	/***/ function(module, exports, __webpack_require__) {

		

		//缓存求值函数，以便多次利用
		var evaluatorPool = __webpack_require__(46)

		var rregexp = /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/g
		var rstring = __webpack_require__(47).string
		var rfill = /\?\?\d+/g
		var brackets = /\(([^)]*)\)/

		var rshortCircuit = /\|\|/g
		var rpipeline = /\|(?=\w)/
		var ruselessSp = /\s*(\.|\|)\s*/g

		var rAt = /(^|[^\w\u00c0-\uFFFF_])(@|##)(?=[$\w])/g
		var rhandleName = /^(?:\@|##)[$\w]+$/i

		var rfilters = /\|.+/g
		var rvar = /((?:\@|\$|\#\#)?\w+)/g

		function collectLocal(str, ret) {
		    var arr = str.replace(rfilters, '').match(rvar)
		    if (arr) {
		        arr.filter(function (el) {
		            if (!/^[@\d\-]/.test(el) &&
		                    el.slice(0, 2) !== '##' &&
		                    el !== '$event' && !avalon.keyMap[el]) {
		                ret[el] = 1
		            }
		        })
		    }
		}

		function extLocal(ret) {
		    var arr = []
		    for (var i in ret) {
		        arr.push('var ' + i + ' = __local__[' + avalon.quote(i) + ']')
		    }
		    return arr
		}

		function parseExpr(str, category) {
		    var binding = {}
		    category = category || 'other'
		    if (typeof str === 'object') {
		        category = str.type
		        binding = str
		        str = binding.expr
		    }
		    if (typeof str !== 'string')
		        return ''
		    var cacheID = str
		    var cacheStr = evaluatorPool.get(category + ':' + cacheID)

		    if (cacheStr) {
		        return cacheStr
		    }

		    var number = 1
		//相同的表达式生成相同的函数
		    var maps = {}
		    function dig(a) {
		        var key = '??' + number++
		        maps[key] = a
		        return key
		    }

		    function fill(a) {
		        return maps[a]
		    }

		    var input = str.replace(rregexp, dig).//移除所有正则
		            replace(rstring, dig).//移除所有字符串
		            replace(rshortCircuit, dig).//移除所有短路或
		            replace(ruselessSp, '$1').//移除. |两端空白
		            split(rpipeline) //使用管道符分离所有过滤器及表达式的正体
		    //还原body
		    var _body = input.shift()
		    var local = {}
		    var body = _body.replace(rfill, fill).trim()
		    if (category === 'on' && rhandleName.test(body)) {
		        body = body + '($event)'
		    }

		    body = body.replace(rAt, '$1__vmodel__.')
		    if (category === 'js') {
		        return evaluatorPool.put(category + ':' + cacheID, body)
		    } else if (category === 'on') {
		        collectLocal(_body, local)
		    }

		//处理表达式的过滤器部分

		    var filters = input.map(function (str) {
		        collectLocal(str.replace(/^\w+/g, ""), local)
		        str = str.replace(rfill, fill).replace(rAt, '$1__vmodel__.') //还原
		        var hasBracket = false
		        str = str.replace(brackets, function (a, b) {
		            hasBracket = true
		            return /\S/.test(b) ?
		                    '(__value__,' + b + ');' :
		                    '(__value__);'
		        })
		        if (!hasBracket) {
		            str += '(__value__);'
		        }
		        str = str.replace(/(\w+)/, 'avalon.__format__("$1")')
		        return '__value__ = ' + str
		    })
		    var ret = []
		    if (category === 'on') {
		        filters = filters.map(function (el) {
		            return el.replace(/__value__/g, '$event')
		        })
		        if (filters.length) {
		            filters.push('if($event.$return){\n\treturn;\n}')
		        }
		        if (!avalon.modern) {
		            body = body.replace(/__vmodel__\.([^(]+)\(([^)]*)\)/, function (a, b, c) {
		                return '__vmodel__.' + b + ".call(__vmodel__" + (/\S/.test(c) ? ',' + c : "") + ")"
		            })
		        }

		        ret = ['function ms_on($event, __local__){',
		            'try{',
		            extLocal(local).join('\n'),
		            '\tvar __vmodel__ = this;',
		            '\t' + body,
		            '}catch(e){',
		            quoteError(str, category),
		            '}',
		            '}']
		        filters.unshift(2, 0)
		    } else if (category === 'duplex') {

		//从vm中得到当前属性的值
		        var getterBody = [
		            'function (__vmodel__){',
		            'try{',
		            'return ' + body + '\n',
		            '}catch(e){',
		            quoteError(str, category).replace('parse', 'get'),
		            '}',
		            '}']
		        evaluatorPool.put('duplex:' + cacheID, getterBody.join('\n'))
		        //给vm同步某个属性
		        var setterBody = [
		            'function (__vmodel__,__value__){',
		            'try{',
		            '\t' + body + ' = __value__',
		            '}catch(e){',
		            quoteError(str, category).replace('parse', 'set'),
		            '}',
		            '}']
		        evaluatorPool.put('duplex:set:' + cacheID, setterBody.join('\n'))
		        //对某个值进行格式化
		        if (input.length) {
		            var formatBody = [
		                'function (__vmodel__, __value__){',
		                'try{',
		                filters.join('\n'),
		                'return __value__\n',
		                '}catch(e){',
		                quoteError(str, category).replace('parse', 'format'),
		                '}',
		                '}']
		            evaluatorPool.put('duplex:format:' + cacheID, formatBody.join('\n'))
		        }
		        return  evaluatorPool.get('duplex:' + cacheID)
		    } else {
		        ret = [
		            '(function(){',
		            'try{',
		            'var __value__ = ' + body,
		            (category === 'text' ?
		                    'return avalon.parsers.string(__value__)' :
		                    'return __value__'),
		            '}catch(e){',
		            quoteError(str, category),
		            '\treturn ""',
		            '}',
		            '})()'
		        ]
		        filters.unshift(3, 0)
		    }
		    ret.splice.apply(ret, filters)
		    cacheStr = ret.join('\n')
		    evaluatorPool.put(category + ':' + cacheID, cacheStr)
		    return cacheStr

		}

		function quoteError(str, type) {
		    return '\tavalon.warn(e, ' +
		            avalon.quote('parse ' + type + ' binding【 ' + str + ' 】fail')
		            + ')'
		}

		module.exports = avalon.parseExpr = parseExpr


	/***/ },
	/* 46 */
	/***/ function(module, exports, __webpack_require__) {

		
		var Cache = __webpack_require__(28)
		//缓存求值函数，以便多次利用
		module.exports = new Cache(512)


	/***/ },
	/* 47 */
	/***/ function(module, exports) {

		module.exports = {
		    ident: /^[$a-zA-Z_][$a-zA-Z0-9_]*$/,
		    sp: /^\s+$/, //全部都是空白,
		    leftSp: /^\s+/, //左边空白
		    rightSp: /s+$/, //右边空白,
		    binding: /^ms-(\w+)-?(.*)/, //绑定属性,
		    string: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/g
		}

	/***/ },
	/* 48 */
	/***/ function(module, exports, __webpack_require__) {

		var directives = avalon.directives
		var rbinding = __webpack_require__(47).binding
		var eventMap = avalon.oneObject('animationend,blur,change,input,click,dblclick,focus,keydown,keypress,keyup,mousedown,mouseenter,mouseleave,mousemove,mouseout,mouseover,mouseup,scan,scroll,submit')

		function extractBindings(cur, props) {
		    var bindings = []
		    var skip = 'ms-skip' in props
		    var uniq = {}
		    for (var i in props) {
		        var value = props[i], match

		        if (!skip && (match = i.match(rbinding))) {
		            var type = match[1]
		            var param = match[2] || ''
		            var name = i
		            if (eventMap[type]) {
		                var order = parseFloat(param) || 0
		                param = type
		                type = 'on'
		            }
		            name = 'ms-' + type + (param ? '-' + param : '')
		            if (i !== name) {
		                delete props[i]
		                props[name] = value
		            }
		            if (directives[type]) {

		                var binding = {
		                    type: type,
		                    param: param,
		                    name: name,
		                    expr: value,
		                    priority: directives[type].priority || type.charCodeAt(0) * 100
		                }
		                if (type === 'on') {
		                    order = order || 0
		                    binding.name += '-' + order
		                    binding.priority += param.charCodeAt(0) * 100 + order
		                }
		                if (!uniq[binding.name]) {
		                    uniq[binding.name] = 1
		                    bindings.push(binding)
		                }
		            }
		        } else {
		            cur.props[i] = props[i]
		        }
		    }
		    bindings.sort(byPriority)

		    return bindings
		}

		function byPriority(a, b) {
		    return a.priority - b.priority
		}

		module.exports = extractBindings


	/***/ },
	/* 49 */
	/***/ function(module, exports, __webpack_require__) {

		var rline = /\r?\n/g
		var r = __webpack_require__(47)
		var config = avalon.config

		function parseDelimiter(str) {
		    var tokens = [],
		            value, start = 0,
		            stop
		    do {
		        stop = str.indexOf(config.openTag, start)
		        if (stop === -1) {
		            break
		        }
		        value = str.slice(start, stop)
		        if (start === 0) {
		            value = value.replace(r.leftSp, '')
		        }
		        if (value) { // {{ 左边的文本
		            tokens.push({
		                expr: value
		            })
		        }
		        start = stop + config.openTag.length
		        stop = str.indexOf(config.closeTag, start)
		        if (stop === -1) {
		            break
		        }
		        value = str.slice(start, stop)
		        if (value) { //处理{{ }}插值表达式
		            tokens.push({
		                expr: value.replace(rline, ''),
		                type: '{{}}'
		            })
		        }
		        start = stop + avalon.config.closeTag.length
		    } while (1)
		    value = str.slice(start)

		    var lastText = value.replace(r.rightSp, '')
		    if (lastText) { //}} 右边的文本
		        tokens.push({
		            expr: lastText.replace(/^\s+$/,' ')
		        })
		    }
		    return tokens
		}

		module.exports = parseDelimiter


	/***/ },
	/* 50 */
	/***/ function(module, exports) {

		var keyMap = avalon.oneObject("break,case,catch,continue,debugger,default,delete,do,else,false," +
		        "finally,for,function,if,in,instanceof,new,null,return,switch,this," +
		        "throw,true,try,typeof,var,void,while,with," + /* 关键字*/
		        "abstract,boolean,byte,char,class,const,double,enum,export,extends," +
		        "final,float,goto,implements,import,int,interface,long,native," +
		        "package,private,protected,public,short,static,super,synchronized," +
		        "throws,transient,volatile")
		avalon.keyMap = keyMap
		  var quoted = {
		      type: 1,
		      template: 1,
		      innerHTML: 1,
		      outerHTML: 1,
		      order: 1,
		      nodeValue: 1,
		      directive: 1,
		      signature: 1,
		      wid: 1,
		      cid: 1
		  }

		var rneedQuote = /[W-]/
		var quote = avalon.quote
		function fixKey(k) {
		    return (rneedQuote.test(k) || keyMap[k]) ? quote(k) : k
		}

		function stringify(obj) {
		    var arr1 = []
		//字符不用东西包起来就变成变量
		    for (var i in obj) {
		        if (i === 'props') {
		            var arr2 = []
		            for (var k in obj.props) {
		                var kv = obj.props[k]
		                if (typeof kv === 'string') {
		                    kv = quote(kv)
		                }
		                arr2.push(fixKey(k) + ': ' + kv)
		            }
		            arr1.push('props: {' + arr2.join(',\n') + '}')
		        } else if(obj.hasOwnProperty(i)) {
		            var v = obj[i]
		            if (typeof v === 'string') {
		                v = quoted[i] ? quote(v) : v
		            }
		            arr1.push(fixKey(i) + ':' + v)
		        }
		    }
		    return '{\n' + arr1.join(',\n') + '}'
		}

		module.exports = stringify


	/***/ },
	/* 51 */
	/***/ function(module, exports) {

		/*
		 * 
		 节点对齐算法
		 元素节点是1＋其类型
		 文本节点是3＋其是否能移除
		 注释节点是8＋其内容
		 发现不一样，就对真实DOM树添加或删除
		 添加的是 ms-for,ms-for-end占位的注释节点
		 删除的是多余的空白文本节点,与IE6-8私下添加的奇怪节点
		 */
		function getType(node) {
		    switch (node.nodeType) {

		        case 3:
		            return '3' + (/\S/.test(node.nodeValue) ? 'retain' : 'remove')
		        case 1:
		            return '1' + (node.nodeName || node.type).toLowerCase()
		        case 8:
		            return '8' + node.nodeValue

		    }

		}


		var rforRange = /^8ms\-for/

		function reconcile(nodes, vnodes, parent) {
		    //遍平化虚拟DOM树
		    vnodes = flatten(vnodes)
		    var map = {}
		    var vn = vnodes.length
		    if(vn === 0)
		        return
		    
		    vnodes.forEach(function (el, index) {
		        map[index] = getType(el)
		    })
		    
		    var newNodes = [], change = false , el, i = 0
		    var breakLoop = 0
		    while (true) {
		        el = nodes[i++]
		        if(breakLoop++ > 5000){
		            break
		        }
		        var vtype = el && getType(el)
		        var v = newNodes.length
		        if (map[v] === vtype) {
		            newNodes.push(el)
		            var vnode = vnodes[v]
		            if (vnode.dynamic) {
		                vnode.dom = el
		            }
		       
		            if (el.nodeType === 1 && !vnode.isVoidTag && !containers[vnode.type]) {
		                reconcile(el.childNodes, vnode.children, el)
		            }
		        } else {
		            change = true
		            if (rforRange.test(map[v])) {
		                var vv = vnodes[v]
		                var nn = document.createComment(vv.nodeValue)
		                vv.dom = nn
		                newNodes.push(nn)
		                i = Math.max(0, --i)
		            }
		        }
		        if(newNodes.length === vn){
		            break
		        }
		    }
		   // console.log(newNodes.length, vnodes.length)
		    if (change) {
		        var f = document.createDocumentFragment(), i = 0
		        while (el = newNodes[i++]) {
		            f.appendChild(el)
		        }
		        while (parent.firstChild) {
		            parent.removeChild(parent.firstChild)
		        }
		        parent.appendChild(f)
		    }
		}
		var containers = avalon.oneObject('script,style,template,noscript,textarea,option')
		function flatten(nodes) {
		    var arr = []
		    for (var i = 0, el; el = nodes[i]; i++) {
		        if (Array.isArray(el)) {
		            arr = arr.concat(flatten(el))
		        } else {
		            arr.push(el)
		        }
		    }
		    return arr
		}

		module.exports = reconcile

	/***/ },
	/* 52 */
	/***/ function(module, exports, __webpack_require__) {

		//根据VM的属性值或表达式的值切换类名，ms-class='xxx yyy zzz:flag'
		//http://www.cnblogs.com/rubylouvre/archive/2012/12/17/2818540.html
		var markID = __webpack_require__(6).getLongID
		var update = __webpack_require__(36)

		function classNames() {
		    var classes = []
		    for (var i = 0; i < arguments.length; i++) {
		        var arg = arguments[i]
		        var argType = typeof arg
		        if (argType === 'string' || argType === 'number' || arg === true) {
		            classes.push(arg)
		        } else if (Array.isArray(arg)) {
		            classes.push(classNames.apply(null, arg))
		        } else if (argType === 'object') {
		            for (var key in arg) {
		                if (arg.hasOwnProperty(key) && arg[key]) {
		                    classes.push(key)
		                }
		            }
		        }
		    }

		    return classes.join(' ')
		}

		var directives = avalon.directives
		avalon.directive('class', {
		    diff: function (copy, src, name) {
		        var type = name.slice(3)
		        var copyValue = copy[name]
		        var srcValue = src[name] || ''

		        if (!src.classEvent) {
		            var classEvent = {}
		            if (type === 'hover') {//在移出移入时切换类名
		                classEvent.mouseenter = activateClass
		                classEvent.mouseleave = abandonClass
		            } else if (type === 'active') {//在获得焦点时切换类名
		                src.props.tabindex = copy.props.tabindex || -1
		                classEvent.tabIndex = src.props.tabindex
		                classEvent.mousedown = activateClass
		                classEvent.mouseup = abandonClass
		                classEvent.mouseleave = abandonClass
		            }
		            src.classEvent = classEvent
		        }

		        var className = classNames(copyValue)
		        var uniq = {}, arr = []
		        className.replace(/\S+/g, function (el) {
		            if (!uniq[el]) {
		                uniq[el] = 1
		                arr.push(el)
		            }
		        })
		        
		        className = arr.join(' ')
		       
		        if (srcValue !== className) {
		            src[name] = className
		            src['change-' + type] = className
		            update(src, this.update, type)
		        }
		    },
		    update: function (dom, vdom) {
		        if (!dom || dom.nodeType !== 1)
		            return
		        var classEvent = vdom.classEvent
		        if (classEvent) {
		            for (var i in classEvent) {
		                if (i === 'tabIndex') {
		                    dom[i] = classEvent[i]
		                } else {
		                    avalon.bind(dom, i, classEvent[i])
		                }
		            }
		            vdom.classEvent = {}
		        }
		        var names = ['class', 'hover', 'active']
		        names.forEach(function (type) {
		            var name = 'change-' + type
		            var value = vdom[name]
		            if (value === void 0)
		                return
		            if (type === 'class') {
		                dom && setClass(dom, vdom)
		            } else {
		                var oldType = dom.getAttribute('change-' + type)
		                if (oldType) {
		                    avalon(dom).removeClass(oldType)
		                }
		                dom.setAttribute(name, value)
		            }
		        })
		    }
		})

		directives.active = directives.hover = directives['class']


		var classMap = {
		    mouseenter: 'change-hover',
		    mouseleave: 'change-hover',
		    mousedown: 'change-active',
		    mouseup: 'change-active'
		}

		function activateClass(e) {
		    var elem = e.target
		    avalon(elem).addClass(elem.getAttribute(classMap[e.type]) || '')
		}

		function abandonClass(e) {
		    var elem = e.target
		    var name = classMap[e.type]
		    avalon(elem).removeClass(elem.getAttribute(name) || '')
		    if (name !== 'change-active') {
		        avalon(elem).removeClass(elem.getAttribute('change-active') || '')
		    }
		}

		function setClass(dom, vdom) {
		    var old = dom.getAttribute('old-change-class')
		    var neo = vdom['ms-class']
		    if (old !== neo) {
		        avalon(dom).removeClass(old).addClass(neo)
		        dom.setAttribute('old-change-class', neo)
		    }

		}

		markID(activateClass)
		markID(abandonClass)




	/***/ },
	/* 53 */
	/***/ function(module, exports, __webpack_require__) {

		var markID = __webpack_require__(6).getLongID
		var Cache = __webpack_require__(28)
		var eventCache = new Cache(128)
		var quote = avalon.quote
		var update = __webpack_require__(36)

		//Ref: http://developers.whatwg.org/webappapis.html#event-handler-idl-attributes
		// The assumption is that future DOM event attribute names will begin with
		// 'on' and be composed of only English letters.
		var revent = /^ms-on-([a-z]+)/
		var rfilters = /\|.+/g
		var rvar = /((?:\@|\$|\#\#)?\w+)/g
		var rstring = __webpack_require__(47).string
		//基于事件代理的高性能事件绑定
		avalon.directive('on', {
		    priority: 3000,
		    parse: function (copy, src, binding) {
		        var underline = binding.name.replace('ms-on-', 'e').replace('-', '_')
		        var uuid = underline + '_' + binding.expr.
		                replace(/\s/g, '').
		                replace(/[^$a-z]/ig, function (e) {
		                    return e.charCodeAt(0)
		                })

		        var quoted = avalon.quote(uuid)
		        var fn = '(function(){\n' +
		                'var fn610 = ' +
		                avalon.parseExpr(binding, 'on') +
		                '\nfn610.uuid =' + quoted + ';\nreturn fn610})()'
		        copy.vmodel = '__vmodel__'
		        copy.local = '__local__'
		        copy[binding.name] = fn

		    },
		    diff: function (copy, src, name) {
		        var fn = copy[name]
		        var uuid = fn.uuid
		        var type = uuid.split('_').shift()
		        var search = type.slice(1) + ':' + uuid
		        var srcFn = src[name]
		        var hasChange = false
		        if (!srcFn || srcFn.uuid !== uuid) {
		            src[name] = fn
		            src.addEvents = src.addEvents || {}
		            src.addEvents[search] = fn
		            avalon.eventListeners.uuid = fn
		            hasChange = true
		        }
		        if (diffObj(src.local|| {}, copy.local)) {
		            hasChange = true
		        }
		        if (hasChange) {
		            src.local = copy.local
		            src.vmodel = copy.vmodel
		            update(src, this.update)
		        }
		    },
		    update: function (dom, vdom) {
		        if (!dom || dom.nodeType > 1) //在循环绑定中，这里为null
		            return
		        var key, type, listener
		        dom._ms_context_ = vdom.vmodel
		        dom._ms_local = vdom.local
		        for (key in vdom.addEvents) {
		            type = key.split(':').shift()
		            listener = vdom.addEvents[key]
		            avalon.bind(dom, type, listener)
		        }
		        delete vdom.addEvents
		    }
		})

		function diffObj(a, b) {
		    for (var i in a) {//diff差异点
		        if (a[i] !== b[i]) {
		            return true
		        }
		    }
		    return false
		}

	/***/ },
	/* 54 */
	/***/ function(module, exports, __webpack_require__) {

		
		var update = __webpack_require__(36)
		var evaluatorPool = __webpack_require__(46)
		var stringify = __webpack_require__(50)

		var rchangeFilter = /\|\s*change\b/
		var rcheckedType = /^(?:checkbox|radio)$/
		var rdebounceFilter = /\|\s*debounce(?:\(([^)]+)\))?/
		var updateModelByEvent = __webpack_require__(55)
		var updateModelByValue = __webpack_require__(58)
		var updateModel = __webpack_require__(56)
		var updateView = __webpack_require__(59)
		var addValidateField = __webpack_require__(60)


		avalon.directive('duplex', {
		    priority: 2000,
		    parse: function (copy, src, binding) {
		        var expr = binding.expr
		        var etype = src.props.type
		        //处理数据转换器
		        var parser = binding.param, dtype
		        var isChecked = false
		        parser = parser ? parser.split('-').map(function (a) {
		            if (a === 'checked') {
		                isChecked = true
		            }
		            return a
		        }) : []

		        if (rcheckedType.test(etype) && isChecked) {
		            //如果是radio, checkbox,判定用户使用了checked格式函数没有
		            parser = []
		            dtype = 'radio'
		        }

		        if (!/input|textarea|select/.test(src.type)) {
		            if ('contenteditable' in src.props) {
		                dtype = 'contenteditable'
		            }
		        } else if (!dtype) {
		            dtype = src.type === 'select' ? 'select' :
		                    etype === 'checkbox' ? 'checkbox' :
		                    etype === 'radio' ? 'radio' :
		                    'input'
		        }
		        var isChanged = false, debounceTime = 0
		        //判定是否使用了 change debounce 过滤器
		        if (dtype === 'input' || dtype === 'contenteditable') {
		            var isString = true
		            if (rchangeFilter.test(expr)) {
		                isChanged = true
		            }
		            if (!isChanged) {
		                var match = expr.match(rdebounceFilter)
		                if (match) {
		                    debounceTime = parseInt(match[1], 10) || 300
		                }
		            }
		        }


		        var changed = copy.props['data-duplex-changed']
		        copy.parser = avalon.quote(parser + "")
		        copy.modelValue = '(' + avalon.parseExpr(binding, 'duplex') + ')(__vmodel__)'// 输出原始数据
		        var format = evaluatorPool.get('duplex:format:' + expr)

		        copy.duplexData = stringify({
		            type: dtype, //这个决定绑定什么事件
		            vmodel: '__vmodel__',
		            isChecked: isChecked,
		            isString: !!isString,
		            isChanged: isChanged, //这个决定同步的频数
		            debounceTime: debounceTime, //这个决定同步的频数
		            format: format || 'function(vm, a){return a}',
		            set: evaluatorPool.get('duplex:set:' + expr),
		            callback: changed ? avalon.parseExpr(changed, 'on') : 'avalon.noop'
		        })

		    },
		    diff: function (copy, src) {

		        if (!src.duplexData) {
		            //第一次为原始虚拟DOM添加duplexData
		            var data = src.duplexData = copy.duplexData
		            data.parser = copy.parser ? copy.parser.split(',') : []
		            data.parse = parseValue
		            var curValue = copy.modelValue
		        } else {
		            data = src.duplexData
		            var curValue = copy.modelValue
		            var preValue = data.modelValue
		            //#1502
		            if (!Array.isArray(curValue) &&
		                    curValue === preValue) {
		                return
		            }
		        }
		        copy.duplexData = 0
		        if (data.isString) {//输出到页面时要格式化
		            var value = data.parse(curValue)
		            if (value !== curValue) {
		                data.set(data.vmodel, value)
		                return
		            }
		            curValue = value
		        }
		        data.modelValue = curValue
		        if (data.isString) {//输出到页面时要格式化
		            value = data.format(data.vmodel, curValue + '')
		            if (value !== curValue + '') {
		                data.set(data.vmodel, value)
		                return
		            }
		            curValue = value
		        }
		        data.viewValue = curValue
		        update(src, this.update, 'afterChange')
		    },
		    update: function (dom, vdom) {
		        if (dom && dom.nodeType === 1) {
		            if (!dom.__ms_duplex__) {
		                dom.__ms_duplex__ = vdom.duplexData
		                updateModelByEvent(dom, vdom)
		            }
		            var data = dom.__ms_duplex__

		            data.dom = dom
		            addValidateField(dom, vdom)
		            if (data.isString
		                    && !avalon.msie
		                    && updateModelByValue === false
		                    && !dom.valueHijack) {
		                //chrome 42及以下版本需要这个hack

		                dom.valueHijack = updateModel
		                var intervalID = setInterval(function () {
		                    if (!avalon.contains(avalon.root, dom)) {
		                        clearInterval(intervalID)
		                    } else {
		                        dom.valueHijack()
		                    }
		                }, 30)
		            }

		            updateView[data.type].call(data)
		            if (dom.caret) {
		                var pos = data.caretPos
		                pos && data.setCaret(dom, pos.start, pos.end)
		                data.caretPos = null
		            }

		        }

		    }
		})

		function parseValue(val) {
		    for (var i = 0, k; k = this.parser[i++]; ) {
		        var fn = avalon.parsers[k]
		        if (fn) {
		            val = fn.call(this, val)
		        }
		    }
		    return val
		}

		/*
		 vm[ms-duplex]  →  原始modelValue →  格式化后比较   →   输出页面
		 ↑                                                ↓
		 比较modelValue  ←  parsed后得到modelValue  ← 格式化后比较 ←  原始viewValue
		 */

	/***/ },
	/* 55 */
	/***/ function(module, exports, __webpack_require__) {

		/* 
		 * 通过绑定事件同步vmodel
		 * 总共有三种方式同步视图
		 * 1. 各种事件 input, change, click, propertychange, keydown...
		 * 2. value属性重写
		 * 3. 定时器轮询
		 */
		var updateModel = __webpack_require__(56)
		var markID = __webpack_require__(6).getShortID
		var msie = avalon.msie
		var window = avalon.window
		var document = avalon.document

		function updateModelByEvent(node, vnode) {
		    var events = {}
		    var data = vnode.duplexData
		    data.update = updateModel
		    //添加需要监听的事件
		    switch (data.type) {
		        case 'radio':
		            if (vnode.props.type === 'radio') {
		                events.click = updateModel
		            } else {
		                events[msie < 9 ? 'click' : 'change'] = updateModel
		            }
		            break
		        case 'checkbox':
		        case 'select':
		            events.change = updateModel
		            break
		        case 'contenteditable':
		            if (data.isChanged) {
		                events.blur = updateModel
		            } else {
		                if (avalon.modern) {
		                    if (window.webkitURL) {
		                        // http://code.metager.de/source/xref/WebKit/LayoutTests/fast/events/
		                        // https://bugs.webkit.org/show_bug.cgi?id=110742
		                        events.webkitEditableContentChanged = updateModel
		                    } else if (window.MutationEvent) {
		                        events.DOMCharacterDataModified = updateModel
		                    }
		                    events.input = updateModel
		                } else {
		                    events.keydown = updateModelKeyDown
		                    events.paste = updateModelDelay
		                    events.cut = updateModelDelay
		                    events.focus = closeComposition
		                    events.blur = openComposition
		                }

		            }
		            break
		        case 'input':

		            if (data.isChanged) {
		                events.change = updateModel
		            } else {

		                //http://www.cnblogs.com/rubylouvre/archive/2013/02/17/2914604.html
		                //http://www.matts411.com/post/internet-explorer-9-oninput/
		                if (avalon.msie < 10) {

		                    events.propertychange = updateModelHack
		                    if (msie > 7) {
		                        //IE8的propertychange有BUG,第一次用JS修改值时不会触发,而且你是全部清空value也不会触发
		                        events.keyup = updateModel
		                        events.keydown = updateModel
		                    }
		                    if (msie > 8) {
		                        //IE9的propertychange不支持自动完成,退格,删除,复制,贴粘,剪切或点击右边的小X的清空操作
		                        //它们可以能过window的selectionchange
		                        node.valueHijack = updateModel
		                        //当你选中一个input value值,将它拖到别处时
		                        events.dragend = updateModelDelay
		                    }
		                } else {
		                    events.input = updateModel
		                    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray
		                    //如果当前浏览器支持Int8Array,那么我们就不需要以下这些事件来打补丁了
		                    if (!/\[native code\]/.test(window.Int8Array)) {
		                        events.keydown = updateModelKeyDown //safari < 5 opera < 11
		                        events.paste = updateModelDelay//safari < 5
		                        events.cut = updateModelDelay//safari < 5 
		                        if (window.netscape) {
		                            // Firefox <= 3.6 doesn't fire the 'input' event when text is filled in through autocomplete
		                            events.DOMAutoComplete = updateModel
		                        }
		                    }
		                    if (!avalon.msie) {
		                        //IE11微软拼音好像才会触发compositionstart 不会触发compositionend
		                        //https://github.com/RubyLouvre/avalon/issues/1368#issuecomment-220503284
		                        events.compositionstart = openComposition
		                        events.compositionend = closeComposition
		                    }
		                }
		            }
		            break
		    }

		    if (/password|text/.test(vnode.props.type)) {
		        events.focus = openCaret //判定是否使用光标修正功能 
		        events.blur = closeCaret
		        data.getCaret = getCaret
		        data.setCaret = setCaret
		    }

		    for (var name in events) {
		        avalon.bind(node, name, events[name])
		    }
		}


		function updateModelHack(e) {
		    if (e.propertyName === 'value') {
		        updateModel.call(this, e)
		    }
		}

		function updateModelDelay(e) {
		    var elem = this
		    setTimeout(function () {
		        updateModel.call(elem, e)
		    }, 17)
		}


		function openCaret() {
		    this.caret = true
		}

		function closeCaret() {
		    this.caret = false
		}
		function openComposition() {
		    this.composing = true
		}

		function closeComposition(e) {
		    this.composing = false
		}
		function updateModelKeyDown(e) {
		    var key = e.keyCode;
		    // ignore
		    //    command            modifiers                   arrows
		    if (key === 91 || (15 < key && key < 19) || (37 <= key && key <= 40))
		        return
		    updateModelDelay.call(this, e)
		}

		markID(openCaret)
		markID(closeCaret)
		markID(openComposition)
		markID(closeComposition)
		markID(updateModel)
		markID(updateModelHack)
		markID(updateModelDelay)
		markID(updateModelKeyDown)

		if (msie >= 8 && msie < 10) {
		    avalon.bind(document, 'selectionchange', function (e) {
		        var el = document.activeElement || {}
		        if (!el.caret && el.valueHijack) {
		            el.valueHijack()
		        }
		    })
		}

		function getCaret(field) {
		    var start = NaN, end = NaN
		    if (field.setSelectionRange) {
		        start = field.selectionStart
		        end = field.selectionEnd
		    } else if (document.selection && document.selection.createRange) {
		        var range = document.selection.createRange()
		        start = 0 - range.duplicate().moveStart('character', -100000)
		        end = start + range.text.length
		    }
		    return {
		        start: start,
		        end: end
		    }
		}

		function setCaret(field, begin, end) {
		    if (!field.value || field.readOnly)
		        return
		    if (field.createTextRange) {//IE6-8
		        var range = field.createTextRange()
		        range.collapse(true)
		        range.moveStart('character', begin)
		        range.select()
		    } else {
		        field.selectionStart = begin
		        field.selectionEnd = end
		    }
		}

		module.exports = updateModelByEvent

	/***/ },
	/* 56 */
	/***/ function(module, exports, __webpack_require__) {

		var updateModelMethods = __webpack_require__(57)
		function updateModelHandle() {
		    var elem = this
		    var field = this.__ms_duplex__
		    if (elem.composing || elem.value === field.lastViewValue)
		        return
		    if (elem.caret) {
		        try {
		            var pos = field.getCaret(elem)
		            if (pos.start === pos.end || pos.start + 1 === pos.end) {
		                field.caretPos = pos
		            }
		        } catch (e) {
		            avalon.warn('fixCaret error', e)
		        }
		    }
		    if (field.debounceTime > 4) {
		        var timestamp = new Date()
		        var left = timestamp - field.time || 0
		        field.time = timestamp
		        if (left >= field.debounceTime) {
		            updateModelMethods[field.type].call(field)
		        } else {
		            clearTimeout(field.debounceID)
		            field.debounceID = setTimeout(function () {
		                updateModelMethods[field.type].call(field)
		            }, left)
		        }
		    } else {
		        updateModelMethods[field.type].call(field)
		    }
		}

		module.exports = updateModelHandle

	/***/ },
	/* 57 */
	/***/ function(module, exports) {

		var updateModelMethods = {
		    input: function (prop) {//处理单个value值处理
		        var data = this
		        prop = prop || 'value'
		        var rawValue = data.dom[prop]
		        
		        var parsedValue = data.parse(rawValue)
		        var formatedValue = data.format(data.vmodel, parsedValue)
		        //有时候parse后一致,vm不会改变,但input里面的值
		        if (parsedValue !== data.modelValue) {
		            data.set(data.vmodel, parsedValue)
		            callback(data)
		        }
		        data.lastViewValue = formatedValue
		        data.dom[prop] = formatedValue
		        
		        //vm.aaa = '1234567890'
		        //处理 <input ms-duplex='@aaa|limitBy(8)'/>{{@aaa}} 这种格式化同步不一致的情况 

		    },
		    radio: function () {
		        var data = this
		        if (data.isChecked) {
		            var val = !data.modelValue
		            data.set(data.vmodel, val)
		            callback(data)
		        } else {
		            updateModelMethods.input.call(data)
		        }
		    },
		    checkbox: function () {
		        var data = this
		        var array = data.modelValue
		        if (!Array.isArray(array)) {
		            avalon.warn('ms-duplex应用于checkbox上要对应一个数组')
		            array = [array]
		        }
		        var method = data.dom.checked ? 'ensure' : 'remove'
		        
		        if (array[method]) {
		            var val = data.parse(data.dom.value)
		            array[method](val)
		            callback(data)
		        }

		    },
		    select: function () {
		        var data = this
		        var val = avalon(data.dom).val() //字符串或字符串数组
		        if (val + '' !== this.modelValue + '') {
		            if (Array.isArray(val)) { //转换布尔数组或其他
		                val = val.map(function (v) {
		                    return data.parse(v)
		                })
		            } else {
		                val = data.parse(val)
		            }
		            data.set(data.vmodel, val)
		            callback(data)
		        }
		    },
		    contenteditable: function () {
		        updateModelMethods.input.call(this, 'innerHTML')
		    }
		}

		function callback(data) {
		    if (data.callback) {
		        data.callback.call(data.vmodel, {
		            type: 'changed',
		            target: data.dom
		        })
		    }
		}



		module.exports = updateModelMethods


	/***/ },
	/* 58 */
	/***/ function(module, exports) {

		var valueHijack = false
		try { //#272 IE9-IE11, firefox
		    var setters = {}
		    var aproto = HTMLInputElement.prototype
		    var bproto = HTMLTextAreaElement.prototype
		    function newSetter(value) { // jshint ignore:line
		        setters[this.tagName].call(this, value)
		        if (!this.caret && this._ms_field_) {
		            this._ms_field_.update.call(this)
		        }
		    }
		    var inputProto = HTMLInputElement.prototype
		    Object.getOwnPropertyNames(inputProto) //故意引发IE6-8等浏览器报错
		    setters['INPUT'] = Object.getOwnPropertyDescriptor(aproto, 'value').set

		    Object.defineProperty(aproto, 'value', {
		        set: newSetter
		    })
		    setters['TEXTAREA'] = Object.getOwnPropertyDescriptor(bproto, 'value').set
		    Object.defineProperty(bproto, 'value', {
		        set: newSetter
		    })
		    valueHijack = true
		} catch (e) {
		    //在chrome 43中 ms-duplex终于不需要使用定时器实现双向绑定了
		    // http://updates.html5rocks.com/2015/04/DOM-attributes-now-on-the-prototype
		    // https://docs.google.com/document/d/1jwA8mtClwxI-QJuHT7872Z0pxpZz8PBkf2bGAbsUtqs/edit?pli=1
		}
		module.exports = valueHijack

	/***/ },
	/* 59 */
	/***/ function(module, exports) {

		
		var updateView = {
		    input: function () {//处理单个value值处理
		        this.dom.value = this.viewValue
		    },
		    radio: function () {//处理单个checked属性
		        var checked
		        if (this.isChecked) {
		            checked = !!this.modelValue
		        } else {
		            checked = this.viewValue + '' === this.dom.value
		        }
		        var dom = this.dom
		        if (avalon.msie === 6) {
		            setTimeout(function () {
		                //IE8 checkbox, radio是使用defaultChecked控制选中状态，
		                //并且要先设置defaultChecked后设置checked
		                //并且必须设置延迟
		                dom.defaultChecked = checked
		                dom.checked = checked
		            }, 31)
		        } else {
		            dom.checked = checked
		        }
		    },
		    checkbox: function () {//处理多个checked属性
		        var checked = false
		        var dom = this.dom
		        var value = dom.value
		        for (var i = 0; i < this.modelValue.length; i++) {
		            var el = this.modelValue[i]
		            if (el + '' === value) {
		                checked = true
		            }
		        }
		        dom.checked = checked
		    },
		    select: function () {//处理子级的selected属性
		        var a = Array.isArray(this.viewValue) ?
		                this.viewValue.map(String) : this.viewValue + ''
		        avalon(this.dom).val(a)
		    },
		    contenteditable: function () {//处理单个innerHTML
		        this.dom.innerHTML = this.viewValue
		        this.update.call(this.dom)
		    }
		}

		module.exports = updateView


	/***/ },
	/* 60 */
	/***/ function(module, exports) {

		
		module.exports = function addField(node, vnode) {
		    var field = node.__ms_duplex__
		    var rules = vnode['ms-rules']
		    if (rules && !field.validator) {
		        while (node && node.nodeType === 1) {
		            var validator = node._ms_validator_
		            if (validator) {
		                field.rules = rules
		                field.validator = validator
		                if(avalon.Array.ensure(validator.fields, field)){
		                    validator.addField(field)
		                }
		                break
		            }
		            node = node.parentNode
		        }
		    }
		}


	/***/ },
	/* 61 */
	/***/ function(module, exports, __webpack_require__) {

		var update = __webpack_require__(36)

		var dir = avalon.directive('validate', {
		//验证单个表单元素
		    diff: function (copy, src, name) {
		        var validator = copy[name]
		        var p = src[name]
		        if (p && p.onError && p.addField) {
		            return
		        } else if (Object(validator) === validator) {
		            if(validator.$id){//转换为普通对象
		                validator = validator.$model
		            }
		            src[name] = validator
		            for(var name in dir.defaults){
		                if(!validator.hasOwnProperty(name)){
		                    validator[name] = dir.defaults[name]
		                }
		            }
		            validator.fields = validator.fields || []
		            update(src, this.update)

		        }
		    },
		    update: function (node, vnode) {
		        var validator = vnode['ms-validate']
		        node._ms_validator_ = validator
		        validator.dom = node
		        node.setAttribute("novalidate", "novalidate");
		        if (validator.validateAllInSubmit) {
		            avalon.bind(node, "submit", function (e) {
		                e.preventDefault()
		                dir.validateAll.call(validator, validator.onValidateAll)
		            })
		        }
		        if (typeof validator.onInit === "function") { //vmodels是不包括vmodel的
		            validator.onInit.call(node)
		        }
		    },
		    validateAll: function (callback) {
		        var validator = this
		        var fn = typeof callback === "function" ? callback : validator.onValidateAll
		        var promise = validator.fields.filter(function (field) {
		            var el = field.dom
		            return el && !el.disabled && validator.dom.contains(el)
		        }).map(function (field) {
		            return dir.validate(field, true)
		        })
		        var reasons = []
		        Promise.all(promise).then(function (array) {
		            for (var i = 0, el; el = array[i++]; ) {
		                reasons = reasons.concat(el)
		            }
		            if (validator.deduplicateInValidateAll) {
		                var uniq = {}
		                reasons = reasons.filter(function (field) {
		                    var el = field.dom
		                    var uuid = el.uniqueID || (el.uniqueID = setTimeout("1"))
		                    if (uniq[uuid]) {
		                        return false
		                    } else {
		                        uniq[uuid] = true
		                        return true
		                    }
		                })
		            }
		            fn.call(validator.dom, reasons) //这里只放置未通过验证的组件
		        })
		    },
		    addField: function (field) {
		        var validator = this
		        var node = field.dom
		        if (validator.validateInKeyup && (!field.isChanged &&!field.debounceTime)) {
		            avalon.bind(node, 'keyup', function (e) {
		                 dir.validate(field, 0, e)
		            })
		        }
		        if (validator.validateInBlur) {
		            avalon.bind(node, 'blur', function (e) {
		                dir.validate(field, 0, e)
		            })
		        }
		        if (validator.resetInFocus) {
		            avalon.bind(node, 'focus', function (e) {
		                validator.onReset.call(node, e, field)
		            })
		        }
		    },
		    validate: function (field, isValidateAll, event) {
		        var promises = []
		        var value = field.modelValue
		        var elem = field.dom
		        var validator = field.validator
		        if (elem.disabled)
		            return
		        for (var ruleName in field.rules) {
		            var ruleValue = field.rules[ruleName]
		            if (ruleValue === false)
		                continue
		            var hook = avalon.validators[ruleName]
		            var resolve, reject
		            promises.push(new Promise(function (a, b) {
		                resolve = a
		                reject = b
		            }))
		            var next = function (a) {
		                if (field.norequired && value === "") {
		                    a = true
		                }
		                if (a) {
		                    resolve(true)
		                } else {
		                    var reason = {
		                        element: elem,
		                        data: field.data,
		                        message: elem.getAttribute("data-" + ruleName + "-message") || elem.getAttribute("data-message") || hook.message,
		                        validateRule: ruleName,
		                        getMessage: getMessage
		                    }
		                    resolve(reason)
		                }
		            }
		            field.data = {}
		            field.data[ruleName] = ruleValue
		            hook.get(value, field, next)
		        }
		        var reasons = []
		        //如果promises不为空，说明经过验证拦截器
		        var lastPromise = Promise.all(promises).then(function (array) {
		            for (var i = 0, el; el = array[i++]; ) {
		                if (typeof el === "object") {
		                    reasons.push(el)
		                }
		            }
		            if (!isValidateAll) {
		                if (reasons.length) {
		                    validator.onError.call(elem, reasons, event)
		                } else {
		                    validator.onSuccess.call(elem, reasons, event)
		                }
		                validator.onComplete.call(elem, reasons, event)
		            }
		            return reasons
		        })
		        return lastPromise
		    }
		})

		var rformat = /\\?{{([^{}]+)\}}/gm

		function getMessage() {
		    var data = this.data || {}
		    return this.message.replace(rformat, function (_, name) {
		        return data[name] == null ? "" : data[name]
		    })
		}
		dir.defaults = {
		    addField: dir.addField,
		    onError: avalon.noop,
		    onSuccess: avalon.noop,
		    onComplete: avalon.noop,
		    onReset: avalon.noop,
		    validateInBlur: true, //@config {Boolean} true，在blur事件中进行验证,触发onSuccess, onError, onComplete回调
		    validateInKeyup: true, //@config {Boolean} true，在keyup事件中进行验证,触发onSuccess, onError, onComplete回调
		    validateAllInSubmit: true, //@config {Boolean} true，在submit事件中执行onValidateAll回调
		    resetInFocus: true, //@config {Boolean} true，在focus事件中执行onReset回调,
		    deduplicateInValidateAll: false //@config {Boolean} false，在validateAll回调中对reason数组根据元素节点进行去重
		}

	/***/ },
	/* 62 */
	/***/ function(module, exports) {

		avalon.directive('rules', {
		     parse: function (copy, src, binding) {
		        var rules = binding.expr
		        if (/{.+}/.test(rules)) {
		           copy[binding.name] = avalon.parseExpr(binding)
		        }
		    },
		    diff: function(copy, src, name){
		        src[name] = copy[name]
		    }
		})
		function isRegExp(value) {
		    return avalon.type(value) === 'regexp'
		}
		var rmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i
		var rurl = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/
		function isCorrectDate(value) {
		    if (typeof value === "string" && value) { //是字符串但不能是空字符
		        var arr = value.split("-") //可以被-切成3份，并且第1个是4个字符
		        if (arr.length === 3 && arr[0].length === 4) {
		            var year = ~~arr[0] //全部转换为非负整数
		            var month = ~~arr[1] - 1
		            var date = ~~arr[2]
		            var d = new Date(year, month, date)
		            return d.getFullYear() === year && d.getMonth() === month && d.getDate() === date
		        }
		    }
		    return false
		}
		avalon.shadowCopy(avalon.validators, {
		    pattern: {
		        message: '必须匹配{{pattern}}这样的格式',
		        get: function (value, field, next) {
		            var elem = field.element
		            var data = field.data
		            if (!isRegExp(data.pattern)) {
		                var h5pattern = elem.getAttribute("pattern")
		                data.pattern = new RegExp('^(?:' + h5pattern + ')$')
		            }
		            next(data.pattern.test(value))
		            return value
		        }
		    },
		    digits: {
		        message: '必须整数',
		        get: function (value, field, next) {//整数
		            next(/^\-?\d+$/.test(value))
		            return value
		        }
		    },
		    number: {
		        message: '必须数字',
		        get: function (value, field, next) {//数值
		            next(isFinite(value))
		            return value
		        }
		    },
		    required: {
		        message: '必须填写',
		        get: function (value, field, next) {
		            next(value !== "")
		            return value
		        }
		    },
		    equalto: {
		        message: '密码输入不一致',
		        get: function (value, field, next) {
		            var id = String(field.data.equalto)
		            var other = avalon(document.getElementById(id)).val() || ""
		            next(value === other)
		            return value
		        }
		    },
		    date: {
		        message: '日期格式不正确',
		        get: function (value, field, next) {
		            var data = field.data
		            if (avalon.type(data.date) === 'regexp') {
		                next(data.date.test(value))
		            } else {
		                next(isCorrectDate(value))
		            }
		            return value
		        }
		    },
		    url: {
		        message: 'URL格式不正确',
		        get: function (value, field, next) {
		            next(rurl.test(value))
		            return value
		        }
		    },
		    email: {
		        message: 'email格式不正确',
		        get: function (value, field, next) {
		            next(rmail.test(value))
		            return value
		        }
		    },
		    minlength: {
		        message: '最少输入{{minlength}}个字',
		        get: function (value, field, next) {
		            var num = parseInt(field.data.minlength, 10)
		            next(value.length >= num)
		            return value
		        }
		    },
		    maxlength: {
		        message: '最多输入{{maxlength}}个字',
		        get: function (value, field, next) {
		            var num = parseInt(field.data.maxlength, 10)
		            next(value.length <= num)
		            return value
		        }
		    },
		    min: {
		        message: '输入值不能小于{{min}}',
		        get: function (value, field, next) {
		            var num = parseInt(field.data.min, 10)
		            next(parseFloat(value) >= num)
		            return value
		        }
		    },
		    max: {
		        message: '输入值不能大于{{max}}',
		        get: function (value, field, next) {
		            var num = parseInt(field.data.max, 10)
		            next(parseFloat(value) <= num)
		            return value
		        }
		    },
		    chs: {
		        message: '必须是中文字符',
		        get: function (value, field, next) {
		            next(/^[\u4e00-\u9fa5]+$/.test(value))
		            return value
		        }
		    }
		})

	/***/ },
	/* 63 */
	/***/ function(module, exports, __webpack_require__) {

		var update = __webpack_require__(36)
		//ms-imporant ms-controller ms-for ms-widget ms-effect ms-if   ...
		avalon.directive('if', {
		    priority: 6,
		    diff: function (copy, src, name) {
		        var c = !!copy[name]
		        if (!c) {
		            copy.nodeType = 8
		            copy.order = ""
		        }
		        if (c !== src[name]) {
		            src[name] = c
		            if (c && src.nodeType === 1) {
		                return
		            }
		            update(src, this.update)
		        }
		    },
		    update: function (dom, vdom, parent) {
		        var show = vdom['ms-if']
		        if (show) {
		            //要移除元素节点,在对应位置上插入注释节点
		            //console.log(vdom.nodeType,vdom.dom)
		            vdom.nodeType = 1
		            var comment = vdom.comment
		            parent = comment.parentNode
		            parent.replaceChild(dom, comment)
		            avalon.applyEffect(dom, vdom, {
		                hook: 'onEnterDone'
		            })
		        } else {

		            avalon.applyEffect(dom, vdom, {
		                hook: 'onLeaveDone',
		                cb: function () {
		                    var comment = document.createComment('ms-if')
		                    //去掉注释节点临时添加的ms-effect
		                    parent.replaceChild(comment, dom)
		                    //comment.parentNode = parent
		                    vdom.nodeType = 8
		                    vdom.comment = comment
		                }
		            })
		        }
		    }
		})



	/***/ },
	/* 64 */
	/***/ function(module, exports, __webpack_require__) {

		var rforPrefix = /ms-for\:\s*/
		var rforLeft = /^\s*\(\s*/
		var rforRight = /\s*\)\s*$/
		var rforSplit = /\s*,\s*/
		var rforAs = /\s+as\s+([$\w]+)/
		var rident = __webpack_require__(47).ident
		var update = __webpack_require__(36)

		var rinvalid = /^(null|undefined|NaN|window|this|\$index|\$id)$/
		var reconcile = __webpack_require__(51)

		function getTraceKey(item) {
		    var type = typeof item
		    return item && type === 'object' ? item.$hashcode : type + ':' + item
		}
		//IE6-8,function后面没有空格
		var rfunction = /^\s*function\s*\(([^\)]+)\)/
		avalon._each = function (obj, fn, local, vnodes) {
		    var repeat = []
		    vnodes.push(repeat)
		    var str = (fn + "").match(rfunction)
		    var args = str[1]
		    var arr = args.match(avalon.rword)
		    if (Array.isArray(obj)) {
		        for (var i = 0; i < obj.length; i++) {
		            iterator(i, obj[i], local, fn, arr[0], arr[1], repeat, true)
		        }
		    } else {
		        for (var i in obj) {
		            if (obj.hasOwnProperty(i)) {
		                iterator(i, obj[i], local, fn, arr[0], arr[1], repeat)
		            }
		        }
		    }
		}

		function iterator(index, item, vars, fn, k1, k2, repeat, isArray) {
		    var key = isArray ? getTraceKey(item) : index
		    var local = {}
		    local[k1] = index
		    local[k2] = item
		    for (var k in vars) {
		        if (!(k in local)) {
		            local[k] = vars[k]
		        }
		    }
		    fn(index, item, key, local, repeat)
		}


		avalon.directive('for', {
		    priority: 3,
		    parse: function (copy, src, binding) {
		        var str = src.nodeValue, aliasAs
		        str = str.replace(rforAs, function (a, b) {
		            if (!rident.test(b) || rinvalid.test(b)) {
		                avalon.error('alias ' + b + ' is invalid --- must be a valid JS identifier which is not a reserved name.')
		            } else {
		                aliasAs = b
		            }
		            return ''
		        })

		        var arr = str.replace(rforPrefix, '').split(' in ')
		        var assign = 'var loop = ' + avalon.parseExpr(arr[1]) + ' \n'
		        var alias = aliasAs ? 'var ' + aliasAs + ' = loop\n' : ''
		        var kv = arr[0].replace(rforLeft, '').replace(rforRight, '').split(rforSplit)

		        if (kv.length === 1) {//确保avalon._each的回调有三个参数
		            kv.unshift('$key')
		        }
		        kv.push('traceKey')
		        kv.push('__local__')
		        kv.push('vnodes')
		        src.$append = assign + alias + 'avalon._each(loop,function('
		            + kv.join(', ') + '){\n'
		            + (aliasAs ? '__local__[' + avalon.quote(aliasAs) + ']=loop\n' : '')

		    },
		    diff: function (copy, src, curRepeat, preRepeat, end) {
		        //将curRepeat转换成一个个可以比较的component,并求得compareText
		        preRepeat = preRepeat || []
		        //preRepeat不为空时
		        src.preRepeat = preRepeat
		        var curItems = prepareCompare(curRepeat, copy)
		        if (src.compareText === copy.compareText) {
		            //如果个数与key一致,那么说明此数组没有发生排序,立即返回
		            return
		        }
		        if (!src.preItems) {
		            src.preItems = prepareCompare(preRepeat, src)
		        }
		        src.compareText = copy.compareText
		        //for指令只做添加删除操作
		        var cache = src.cache
		        var i, c, p

		        function enterAction(c) {
		                var template = src.template + '<!--' + src.signature + '-->'
		                var vdomTemplate = avalon.lexer(template)
		                avalon.speedUp(vdomTemplate)
		            return {
		                action: 'enter',
		                children: vdomTemplate,
		                key: c.key
		            }
		        }

		        if (!cache || isEmptyObject(cache)) {
		            /* eslint-disable no-cond-assign */
		            var cache = src.cache = {}
		            src.preItems.length = 0
		            for (i = 0; c = curItems[i]; i++) {
		                var p = enterAction(c)
		                src.preItems.push(p)
		                p.action = 'enter'
		                p.index = i
		                saveInCache(cache, p)
		            }
		            src.removes = []
		            /* eslint-enable no-cond-assign */
		        } else {
		            var newCache = {}
		            /* eslint-disable no-cond-assign */
		            var fuzzy = []
		            for (i = 0; c = curItems[i++];) {
		                var p = isInCache(cache, c.key)
		                if (p) {
		                    p.action = 'move'
		                    p.oldIndex = p.index
		                    p.index = c.index
		                    saveInCache(newCache, p)
		                } else {
		                    //如果找不到就进行模糊搜索
		                    fuzzy.push(c)
		                }

		            }
		            for (var i = 0, c; c = fuzzy[i++];) {
		                p = fuzzyMatchCache(cache, c.key)
		                if (p) {
		                    p.action = 'move'
		                    p.oldIndex = p.index

		                    p.index = c.index
		                } else {
		                    p = enterAction(c)
		                    p.index = c.index
		                    src.preItems.push(p)
		                }
		                saveInCache(newCache, p)
		            }
		            src.preItems.sort(function (a, b) {
		                return a.index > b.index
		            })

		            /* eslint-enable no-cond-assign */
		            src.cache = newCache
		            var removes = []

		            for (var i in cache) {
		                p = cache[i]
		                p.action = 'leave'
		                removes.push(p)
		                if (p.arr) {
		                    p.arr.forEach(function (m) {
		                        m.action = 'leave'
		                        removes.push(m)
		                    })
		                    delete p.arr
		                }
		            }
		            src.removes = removes
		        }
		        
		        var cb = avalon.caches[src.cid]
		        if (end && cb) {
		            end.afterChange = [function (dom) {
		                cb({
		                    type: 'rendered',
		                    target: dom,
		                    signature: src.signature
		                })
		            }]
		        }
		        update(src, this.update)
		        return true

		    },
		    update: function (dom, vdom, parent) {
		        var key = vdom.signature
		        var range = getEndRepeat(dom)
		        var doms = range.slice(1, -1)
		        var endRepeat = range.pop()
		        var DOMs = splitDOMs(doms, key)
		        var check = doms[doms.length - 1]
		        if (check && check.nodeValue !== key) {
		            do {//去掉最初位于循环节点中的内容
		                var prev = endRepeat.previousSibling
		                if (prev === dom || prev.nodeValue === key) {
		                    break
		                }
		                if (prev) {
		                    parent.removeChild(prev)
		                } else {
		                    break
		                }
		            } while (true);
		        }
		        for (var i = 0, el; el = vdom.removes[i++];) {
		            var removeNodes = DOMs[el.index]
		            if (removeNodes) {
		                removeNodes.forEach(function (n, k) {
		                    if (n.parentNode) {
		                        avalon.applyEffect(n, el.children[k], {
		                            hook: 'onLeaveDone',
		                            cb: function () {
		                                n.parentNode.removeChild(n)
		                            },
		                            staggerKey: key + 'leave'
		                        })
		                    }
		                })
		                el.children.length = 0
		            }
		        }
		        vdom.removes = []
		        var insertPoint = dom
		        var fragment = avalon.avalonFragment
		        var domTemplate
		        for (var i = 0; i < vdom.preItems.length; i++) {
		            var com = vdom.preItems[i]

		            var children = com.children
		            if (com.action === 'leave') {
		                continue
		            } else if (com.action === 'enter') {
		                if (!domTemplate) {
		                    //创建用于拷贝的数据,包括虚拟DOM与真实DOM 
		                    domTemplate = avalon.vdomAdaptor(children, 'toDOM')
		                }
		                var newFragment = domTemplate.cloneNode(true)
		                var cnodes = avalon.slice(newFragment.childNodes)
		                reconcile(cnodes, children)//关联新的虚拟DOM与真实DOM
		                parent.insertBefore(newFragment, insertPoint.nextSibling)
		                applyEffects(cnodes, children, {
		                    hook: 'onEnterDone',
		                    staggerKey: key + 'enter'
		                })
		            } else if (com.action === 'move') {

		                var cnodes = DOMs[com.oldIndex] || []
		                if (com.index !== com.oldIndex) {
		                    var moveFragment = fragment.cloneNode(false)
		                    for (var k = 0, cc; cc = cnodes[k++];) {
		                        moveFragment.appendChild(cc)
		                    }
		                    parent.insertBefore(moveFragment, insertPoint.nextSibling)
		                    applyEffects(cnodes, children, {
		                        hook: 'onMoveDone',
		                        staggerKey: key + 'move'
		                    })
		                }
		            }

		            insertPoint = cnodes[cnodes.length - 1]

		            if (!insertPoint) {
		                break
		            }
		        }
		        vdom.preRepeat.length = 0
		        vdom.preItems.forEach(function (el) {
		            range.push.apply(vdom.preRepeat, el.children)
		        })

		    }

		})
		function isEmptyObject(a){
		    for(var i in a){
		        return false
		    }
		    return true
		}
		function splitDOMs(nodes, signature) {
		    var items = []
		    var item = []
		    for (var i = 0, el; el = nodes[i++];) {
		        if (el.nodeType === 8 && el.nodeValue === signature) {
		            item.push(el)
		            items.push(item)
		            item = []
		        } else {
		            item.push(el)
		        }
		    }
		    return items
		}

		//将要循环的节点根据锚点元素再分成一个个更大的单元,用于diff
		function prepareCompare(nodes, cur) {
		    var splitText = cur.signature
		    var items = []
		    var keys = []
		    var com = {
		        children: []
		    }

		    for (var i = 0, el; el = nodes[i]; i++) {
		        if (el.nodeType === 8 && el.nodeValue === splitText) {
		            com.children.push(el)
		            com.key = el.key
		            keys.push(el.key)
		            com.index = items.length
		            items.push(com)
		            com = {
		                children: []
		            }
		        } else {
		            com.children.push(el)
		        }
		    }

		    cur.compareText = keys.length + '|' + keys.join(';;')
		    return items
		}


		function getEndRepeat(node) {
		    var isBreak = 0, ret = []
		    while (node) {
		        if (node.nodeType === 8) {
		            if (node.nodeValue.indexOf('ms-for:') === 0) {
		                ++isBreak
		            } else if (node.nodeValue.indexOf('ms-for-end:') === 0) {
		                --isBreak
		            }
		        }
		        ret.push(node)
		        node = node.nextSibling
		        if (isBreak === 0) {
		            break
		        }
		    }
		    return ret
		}


		var rfuzzy = /^(string|number|boolean)/
		var rkfuzzy = /^_*(string|number|boolean)/
		function fuzzyMatchCache(cache, id) {
		    var m = id.match(rfuzzy)
		    if (m) {
		        var fid = m[1]
		        for (var i in cache) {
		            var n = i.match(rkfuzzy)
		            if (n && n[1] === fid) {
		                return isInCache(cache, i)
		            }
		        }
		    }
		}

		// 新位置: 旧位置
		function isInCache(cache, id) {
		    var c = cache[id]
		    if (c) {
		        var arr = c.arr
		        if (arr) {
		            var r = arr.pop()
		            if (!arr.length) {
		                c.arr = 0
		            }
		            return r
		        }
		        delete cache[id]
		        return c
		    }
		}
		//[1,1,1] number1 number1_ number1__
		function saveInCache(cache, component) {
		    var trackId = component.key
		    if (!cache[trackId]) {
		        cache[trackId] = component
		    } else {
		        var c = cache[trackId]
		        var arr = c.arr || (c.arr = [])
		        arr.push(component)
		    }
		}
		var applyEffects = function (nodes, vnodes, opts) {
		    vnodes.forEach(function (el, i) {
		        avalon.applyEffect(nodes[i], vnodes[i], opts)
		    })
		}


	/***/ },
	/* 65 */
	/***/ function(module, exports, __webpack_require__) {

		var update = __webpack_require__(36)
		var reconcile = __webpack_require__(51)
		var createComponent = __webpack_require__(66)

		avalon.component = function (name, definition) {
		    //这是定义组件的分支,并将列队中的同类型对象移除
		    if (!avalon.components[name]) {
		        avalon.components[name] = definition
		    }//这里没有返回值
		}
		avalon.directive('widget', {
		    parse: function (copy, src, binding) {
		        src.wid = src.wid || avalon.makeHashCode('w')
		        //将渲染函数的某一部分存起来,渲在c方法中转换为函数
		        copy[binding.name] = avalon.parseExpr(binding)
		        copy.vmodel = '__vmodel__'
		        copy.local = '__local__'
		    },
		    define: function () {
		        return avalon.mediatorFactory.apply(this, arguments)
		    },
		    diff: function (copy, src, name) {
		        var a = copy[name]
		        var p = src[name]
		        src.vmodel = copy.vmodel
		        src.local = copy.local
		        src.copy = copy
		        if (Object(a) === a) {
		            a = a.$model || a//安全的遍历VBscript
		            if (Array.isArray(a)) {//转换成对象
		                a = avalon.mix.apply({}, a)
		            }

		            var is = a.is || src.props.is
		            if (!src[is + "-vm"]) {
		                if (!createComponent(src, copy, is)) {

		                    //替换成注释节点
		                    update(src, this.mountComment)
		                    return
		                }
		            }
		            var renderComponent = src[is + '-vm'].$render
		            var newTree = renderComponent(src[is + '-vm'], src.local)

		            var componentRoot = newTree[0]
		            if (componentRoot && isComponentReady(componentRoot)) {
		                if (src[is + '-mount']) {//update
		                    updateCopy(copy, componentRoot)
		                    update(src, this.updateComponent)
		                } else {//mount
		                    src.copy = copy
		                    src.newCopy = componentRoot
		                    update(src, this.mountComponent)
		                }
		            } else {
		                update(src, this.mountComment)
		            }

		        }
		    },
		    mountComment: function (dom, vdom, parent) {
		        var copy = vdom.copy
		        copy.nodeType = vdom.nodeType = 8
		        copy.nodeValue = vdom.nodeType = 'unresolved component placeholder'
		        copy.children = []
		        var comment = document.createComment(copy.nodeValue)
		        vdom.dom = comment
		        parent.replaceChild(comment, dom)
		    },
		    updateComponent: function (dom, vdom) {
		        var is = vdom.is
		        var vm = vdom[is + '-vm']
		        var viewChangeObservers = vm.$events.onViewChange
		        if (viewChangeObservers && viewChangeObservers.length) {
		            update(vdom, viewChangeHandle, 'afterChange')
		        }
		    },
		    
		    mountComponent: function (dom, vdom, parent) {
		        var is = vdom.is

		        var vm = vdom[is + '-vm']
		        var copy = vdom.copy
		        var newCopy = vdom.newCopy
		        delete vdom.newCopy
		        var scope = avalon.scopes[vm.$id]
		        if (scope && scope.vmodel) {         
		            var com = scope.vmodel.$element
		            newCopy = com.vtree[0]
		            updateCopy(vdom, newCopy)
		            parent.replaceChild(com, dom)
		            com.vtree = [vdom]
		            vdom[is + '-vm'] = scope.vmodel
		            vdom[is + '-mount'] = true
		            return
		        }
		        //更新原始虚拟DOM树
		        updateCopy(copy, newCopy )  
		        var vtree = vdom[is + '-vtree']
		        //更新另一个刷数据用的虚拟DOM树
		        updateCopy(vdom, vtree[0] )
		        var com = avalon.vdomAdaptor(vdom, 'toDOM')
		        vm.$fire('onInit', {
		            type: 'init',
		            vmodel: vm,
		            is: is
		        })
		        reconcile([com], [vdom])
		        parent.replaceChild(com, dom)
		        vdom.dom = com
		        avalon.onComponentDispose(com)
		       
		        
		        vdom[is + '-mount'] = true
		        //--------------
		        vm.$element = com
		        com.vtree = [vdom]
		        avalon.scopes[vm.$id] = {
		            vmodel: vm,
		            isMount: 2,
		            local: vdom.local
		        }
		        //--------------
		        update(vdom, function () {
		            vm.$fire('onReady', {
		                type: 'ready',
		                target: com,
		                vmodel: vm,
		                is: is
		            })
		        }, 'afterChange')

		        update(vdom, function () {
		            vdom[is + '-html'] = avalon.vdomAdaptor(vdom, 'toHTML')
		        }, 'afterChange')

		    }
		})

		function updateCopy(copy, newCopy) {
		    copy.children = []
		    avalon.mix(copy, newCopy)
		    copy.local = copy.isVoidTag = copy.skipContent = 0
		}

		function viewChangeHandle(dom, vdom) {
		    var is = vdom.is
		    var vm = vdom[is + '-vm']
		    var preHTML = vdom[is + '-html']
		    var curHTML = avalon.vdomAdaptor(vdom, 'toHTML')
		    if (preHTML !== curHTML) {
		        vdom[is + '-html'] = curHTML
		        vm.$fire('onViewChange', {
		            type: 'viewchange',
		            target: dom,
		            vmodel: vm,
		            is: is
		        })
		    }
		}



		function isComponentReady(vnode) {
		    var isReady = true
		    try {
		        hasUnresolvedComponent(vnode)
		    } catch (e) {
		        isReady = false
		    }
		    return isReady
		}

		function hasUnresolvedComponent(vnode) {
		    vnode.children.forEach(function (el) {
		        if (el.nodeType === 8) {
		            if (el.nodeValue === 'unresolved component placeholder') {
		                throw 'unresolved'
		            }
		        } else if (el.children) {
		            hasUnresolvedComponent(el)
		        }
		    })
		}

	/***/ },
	/* 66 */
	/***/ function(module, exports, __webpack_require__) {

		var skipArray = __webpack_require__(67)

		var componentContainers = {wbr: 1, xmp: 1, template: 1}
		var events = 'onInit,onReady,onViewChange,onDispose'
		var componentEvents = avalon.oneObject(events)
		var protected = events.split(',').concat('is', 'define')

		function createComponent(src, copy, is) {
		    var type = src.type
		    //判定用户传入的标签名是否符合规格
		    if (!componentContainers[type] && !isCustomTag(type)) {
		        avalon.warn(type + '不合适做组件的标签')
		        return
		    }
		    //开始初始化组件
		    var hooks = {}
		    //用户只能操作顶层VM
		    //只有$id,is的对象就是emptyOption
		    var rawOption = copy['ms-widget']
		    var isEmpty = false
		    if (!rawOption) {
		        isEmpty = true
		        options = []
		    } else {
		        var options = [].concat(rawOption)
		        options.forEach(function (a) {
		            if (a && typeof a === 'object') {
		                mixinHooks(hooks, (a.$model || a), true)
		            }
		        })
		        isEmpty = isEmptyOption(hooks)
		    }
		    var definition = avalon.components[is]
		    //初始化组件失败,因为连组件的定义都没有加载
		    if (!definition) {
		        return
		    }
		    var skipProps = protected.concat()
		    //得到组件在顶层vm的配置对象名
		    var configName = is.replace(/-/g, '_')

		    var topVm = copy.vmodel
		    try {//如果用户在ms-widget没定义东西那么从vm中取默认东西
		        var vmOption = topVm[configName]
		        if (isEmpty && vmOption && typeof vmOption === 'object') {
		            hooks = {}
		            options = [vmOption]
		            mixinHooks(hooks, vmOption.$model || vmOption, true)
		            skipProps.push(configName)
		        }
		    } catch (e) {
		    }


		    //将用户声明组件用的自定义标签(或xmp.template)的template转换成虚拟DOM
		    if (componentContainers[type] && src.children[0]) {
		        src.children = avalon.lexer(src.children[0].nodeValue)
		    }
		    src.isVoidTag = src.skipContent = 0

		    //开始构建组件的vm的配置对象

		    var define = hooks.define
		    define = define || avalon.directives.widget.define

		    var $id = hooks.$id || src.wid

		    var defaults = avalon.mix(true, {}, definition.defaults)
		    mixinHooks(hooks, defaults, false)

		    var vmodel = define.apply(function (a, b) {
		        skipProps.forEach(function (k) {
		            delete a[k]
		            delete b[k]
		        })
		    }, [topVm, defaults].concat(options))

		    if (!avalon.modern) {//增强对IE的兼容
		        for (var i in vmodel) {
		            if (!skipArray[i] && typeof vmodel[i] === 'function') {
		                vmodel[i] = vmodel[i].bind(vmodel)
		            }
		        }
		    }

		    vmodel.$id = $id

		    //开始构建组件的虚拟DOM
		    var finalTemplate = definition.template.trim()
		    if (typeof definition.getTemplate === 'function') {
		        finalTemplate = definition.getTemplate(vmodel, finalTemplate)
		    }

		    var vtree = avalon.lexer(finalTemplate)
		    if (vtree.length > 1) {
		        avalon.error('组件必须用一个元素包起来')
		    }

		    var componentRoot = vtree[0]

		    avalon.vmodels[$id] = vmodel

		    //将用户标签中的属性合并到组件标签的属性里
		    avalon.mix(componentRoot.props, src.props)
		    delete componentRoot.props['ms-widget']
		    componentRoot.props.wid = $id
		    //抽取用户标签里带slot属性的元素,替换组件的虚拟DOM树中的slot元素

		    if (definition.soleSlot) {
		        var slots = {}
		        var slotName = definition.soleSlot
		        slots[slotName] = /\S/.test(src.template) ?
		                src.children : newText(slotName)
		        mergeTempale(vtree, slots)
		    } else if (!src.isVoidTag) {
		        insertSlots(vtree, src, definition.soleSlot)
		    }
		    avalon.speedUp(vtree)
		    for (var e in componentEvents) {
		        if (hooks[e]) {
		            hooks[e].forEach(function (fn) {
		                vmodel.$watch(e, fn)
		            })
		        }
		    }
		    var render = avalon.render(vtree, src.local)
		    vmodel.$render = render
		    src[is + '-vm'] = vmodel
		    src[is + '-vtree'] = vtree
		    return src.is = is

		}
		module.exports = createComponent

		function newText(name) {
		    return {
		        nodeType: 3,
		        nodeValue: '{{##' + name + '}}',
		        type: "#text",
		        dynamic: true
		    }
		}
		function isEmptyOption(opt) {
		    for (var k in opt) {
		        if (k === 'is' || k === '$id')
		            continue
		        return false
		    }
		    return true
		}

		function insertSlots(vtree, node, soleSlot) {
		    var slots = {}
		    if (soleSlot) {
		        slots[soleSlot] = node.children
		    } else {
		        node.children.forEach(function (el) {
		            if (el.nodeType === 1) {
		                var name = el.props.slot || 'default'
		                if (slots[name]) {
		                    slots[name].push(el)
		                } else {
		                    slots[name] = [el]
		                }
		            }
		        })
		    }
		    mergeTempale(vtree, slots)
		}

		function mergeTempale(vtree, slots) {
		    for (var i = 0, node; node = vtree[i++]; ) {
		        if (node.nodeType === 1) {
		            if (node.type === 'slot') {
		                var name = node.props.name || 'default'
		                if (slots[name]) {
		                    var s = slots[name].length ? slots[name] :  newText(name)
		                    vtree.splice.apply(vtree, [i - 1, 1].concat(s))
		                }
		            } else {
		                mergeTempale(node.children, slots)
		            }
		        }
		    }

		    return vtree
		}

		//必须以字母开头,结尾以字母或数字结束,中间至少出现一次"-",
		//并且不能大写字母,特殊符号,"_","$",汉字
		var rcustomTag = /^[a-z]([a-z\d]+\-)+[a-z\d]+$/

		function isCustomTag(type) {
		    return rcustomTag.test(type)
		}

		function mixinHooks(target, option, overwrite) {
		    for (var k in option) {
		        var v = option[k]
		        //如果是生命周期钩子,总是不断收集
		        if (componentEvents[k]) {
		            if (k in target) {
		                target[k].push(v)
		            } else {
		                target[k] = [option[k]]
		            }
		        } else {
		            if (overwrite) {
		                target[k] = v
		            }
		        }
		    }
		}

	/***/ },
	/* 67 */
	/***/ function(module, exports) {

		/**
		 * 
		$$skipArray:是系统级通用的不可监听属性
		$skipArray: 是当前对象特有的不可监听属性

		 不同点是
		 $$skipArray被hasOwnProperty后返回false
		 $skipArray被hasOwnProperty后返回true
		 */

		module.exports = avalon.oneObject('$id,$render,$track,$element,$watch,$fire,$events,$model,$skipArray,$accessors,$hashcode,$run,$wait,__proxy__,__data__,__const__')

	/***/ },
	/* 68 */
	/***/ function(module, exports, __webpack_require__) {

		var support = __webpack_require__(69)
		var Cache = __webpack_require__(28)
		var update = __webpack_require__(36)

		avalon.directive('effect', {
		    priority: 5000,
		    diff: function (copy, src, name) {
		        var copyObj = copy[name]
		        copyObj = copy.$model || copyObj
		        if(typeof copyObj === 'string'){
		            var is = copyObj
		            copyObj = {
		                is: is
		            }
		           
		        }else if (Array.isArray(copyObj)) {
		            copyObj = avalon.mix.apply({}, copyObj)
		        }
		    
		        copyObj.action = copyObj.action || 'enter'
		       
		        if (Object(copyObj) === copyObj) {
		            var srcObj = src[name]
		            if ( Object(srcObj) !== srcObj || diffObj(copyObj, srcObj ))  {
		                src[name] = copyObj
		                update(src, this.update, 'afterChange')
		            }
		        }
		        delete copy[name]
		    },
		    update: function (dom, vnode, parent, option) {
		        if(dom.animating ){
		            return
		        }
		        dom.animating = true
		        var localeOption = vnode['ms-effect']
		        var type = localeOption.is
		        option = option || {}
		        if(!type){//如果没有指定类型
		            return avalon.warn('need is option')
		        }
		      
		        var effects = avalon.effects
		        if(support.css && !effects[type]){
		            avalon.effect(type, {})
		        }
		        var globalOption = effects[type]
		        if(!globalOption){//如果没有定义特效
		            return avalon.warn(type+' effect is undefined')
		        }
		        var action = option.action || localeOption.action
		        var Effect = avalon.Effect
		        if (typeof Effect.prototype[action] !== 'function'){
		            return avalon.warn(action+' action is undefined')
		        }   
		        var effect = new Effect(dom)
		        var finalOption = avalon.mix(option, globalOption, localeOption)
		        if (finalOption.queue) {
		            animationQueue.push(function () {
		                effect[action](finalOption)
		            })
		            callNextAnimation()
		        } else {
		            setTimeout(function(){
		               effect[action](finalOption)
		            },4)
		        }
		    }
		})
		function diffObj(a, b){
		    for(var i in a){
		        if(a[i] !== b[i])
		            return true
		    }
		    return false
		}

		var animationQueue = []
		function callNextAnimation() {
		    if (animationQueue.lock)
		        return
		    var fn = animationQueue[0]
		    if (fn) {
		       callNextAnimation.lock = true
		       fn()
		    }
		}

		avalon.effects = {}
		//这里定义CSS动画


		avalon.effect = function (name, definition) {
		    avalon.effects[name] = definition || {}
		    if (support.css) {
		        if (!definition.enterClass) {
		            definition.enterClass = name + '-enter'
		        }
		        if (!definition.enterActiveClass) {
		            definition.enterActiveClass = definition.enterClass + '-active'
		        }
		        if (!definition.leaveClass) {
		            definition.leaveClass = name + '-leave'
		        }
		        if (!definition.leaveActiveClass) {
		            definition.leaveActiveClass = definition.leaveClass + '-active'
		        }
		    }
		    if (!definition.action) {
		        definition.action = 'enter'
		    }
		}


		var Effect = function (el) {
		    this.el = el
		}
		avalon.Effect = Effect
		Effect.prototype = {
		    enter: createAction('Enter'),
		    leave: createAction('Leave'),
		    move: createAction('Move')
		}

		var rsecond = /\d+s$/
		function toMillisecond(str){
		   var ratio = rsecond.test(str) ? 1000 : 1
		   return parseFloat(str) * ratio
		}

		function execHooks(options, name, el) {
		    var list = options[name]
		    list = Array.isArray(list) ? list : typeof list === 'function' ? [list] : []
		    list.forEach(function (fn) {
		       fn && fn(el)
		    })
		}
		 var staggerCache = new Cache(128)

		function createAction(action) {
		    var lower = action.toLowerCase()
		    return function (option) {
		        var elem = this.el
		        var $el = avalon(elem)
		        var enterAnimateDone
		        var staggerTime = isFinite(option.stagger) ? option.stagger * 1000 : 0
		        if(staggerTime){
		            if(option.staggerKey){
		                var stagger = staggerCache.get(option.staggerKey) || 
		                        staggerCache.put(option.staggerKey, {
		                    count:0,
		                    items:0
		                })
		                stagger.count++
		                stagger.items++
		            }
		        }
		        var staggerIndex = stagger && stagger.count || 0
		        var animationDone = function(e) {
		            var isOk = e !== false
		            elem.animating = void 0
		            enterAnimateDone = true
		            var dirWord = isOk ? 'Done' : 'Abort'
		            execHooks(option, 'on' + action + dirWord, elem)
		            avalon.unbind(elem,support.transitionEndEvent)
		            avalon.unbind(elem,support.animationEndEvent)
		            if(stagger){
		                if(--stagger.items === 0){
		                    stagger.count = 0
		                }
		            }
		            if(option.queue){
		                animationQueue.lock = false
		                animationQueue.shift()
		                callNextAnimation()
		            }
		        }
		        execHooks(option, 'onBefore' + action, elem)

		        if (option[lower]) {
		            option[lower](elem, function (ok) {
		                animationDone(ok !== false)
		            })
		        } else if (support.css) {
		            
		            $el.addClass(option[lower + 'Class'])
		            if(lower === 'leave'){
		                $el.removeClass(option.enterClass+' '+option.enterActiveClass)
		            }else if(lower === 'enter'){
		                $el.removeClass(option.leaveClass+' '+option.leaveActiveClass)
		            }

		            $el.bind(support.transitionEndEvent, animationDone)
		            $el.bind(support.animationEndEvent, animationDone)
		            setTimeout(function () {
		                enterAnimateDone = avalon.root.offsetWidth === NaN
		                $el.addClass(option[lower + 'ActiveClass'])
		                var computedStyles = window.getComputedStyle(elem)
		                var tranDuration = computedStyles[support.transitionDuration]
		                var animDuration = computedStyles[support.animationDuration]
		                var time = toMillisecond(tranDuration) || toMillisecond(animDuration)
		                if (!time === 0) {
		                    animationDone(false)
		                }else if(!staggerTime ){
		                    setTimeout(function(){
		                        if(!enterAnimateDone){
		                            animationDone(false)
		                        }
		                    },time + 130 )
		                }
		            }, 17+ staggerTime * staggerIndex)// = 1000/60
		        }
		    }
		}

		avalon.applyEffect = function(node, vnode, opts){
		    var cb = opts.cb
		    var hook = opts.hook
		    var curEffect = vnode['ms-effect']
		    if(curEffect && !avalon.document.hidden ){
		        var old = curEffect[hook]
		        if(cb){
		            if(Array.isArray(old)){
		                old.push(cb)
		            }else if(old){
		                curEffect[hook] = [old, cb]
		            }else{
		                curEffect[hook] = [cb]
		            }
		        }
		        getAction(opts)
		        node.animate = true
		        avalon.directives.effect.update(node,vnode, 0, avalon.shadowCopy({},opts) ) 

		    }else if(cb){
		        cb()
		    }
		}

		function getAction(opts){
		    if(!opts.acton){
		        opts.action = opts.hook.replace(/^on/,'').replace(/Done$/,'').toLowerCase()
		    }
		}



	/***/ },
	/* 69 */
	/***/ function(module, exports) {

		/**
		 * ------------------------------------------------------------
		 * 检测浏览器对CSS动画的支持与API名
		 * ------------------------------------------------------------
		 */
		var supportTransition = false
		var supportAnimation = false
		var supportCSS = false
		var transitionEndEvent
		var animationEndEvent
		var transitionDuration = avalon.cssName('transition-duration')
		var animationDuration = avalon.cssName('animation-duration')

		var checker = {
		    TransitionEvent: 'transitionend',
		    WebKitTransitionEvent: 'webkitTransitionEnd',
		    OTransitionEvent: 'oTransitionEnd',
		    otransitionEvent: 'otransitionEnd'
		}
		var window = avalon.window
		var tran
		//有的浏览器同时支持私有实现与标准写法，比如webkit支持前两种，Opera支持1、3、4
		for (var name in checker) {
		    if (window[name]) {
		        tran = checker[name]
		        break
		    }
		    try {
		        var a = document.createEvent(name)
		        tran = checker[name]
		        break;
		    } catch (e) {
		    }
		}
		if (typeof tran === 'string') {
		    supportTransition = true
		    supportCSS = true
		    transitionEndEvent = tran
		}

		//animationend有两个可用形态
		//IE10+, Firefox 16+ & Opera 12.1+: animationend
		//Chrome/Safari: webkitAnimationEnd
		//http://blogs.msdn.com/b/davrous/archive/2011/12/06/introduction-to-css3-animat ions.aspx
		//IE10也可以使用MSAnimationEnd监听，但是回调里的事件 type依然为animationend
		//  el.addEventListener('MSAnimationEnd', function(e) {
		//     alert(e.type)// animationend！！！
		// })
		checker = {
		    'AnimationEvent': 'animationend',
		    'WebKitAnimationEvent': 'webkitAnimationEnd'
		}
		var ani
		for (name in checker) {
		    if (window[name]) {
		        ani = checker[name];
		        break;
		    }
		}
		if (typeof ani === 'string') {
		    supportAnimation = true
		    supportCSS = true
		    animationEndEvent = ani
		}

		module.exports = {
		    transition: supportTransition,
		    animation: supportAnimation,
		    css: supportCSS,
		    transitionEndEvent: transitionEndEvent,
		    animationEndEvent: animationEndEvent,
		    transitionDuration: transitionDuration,
		    animationDuration: animationDuration
		}

	/***/ },
	/* 70 */
	/***/ function(module, exports, __webpack_require__) {

		
		avalon.lexer = __webpack_require__(71)
		avalon.diff = __webpack_require__(72)
		avalon.batch = __webpack_require__(73)
		// dispatch与patch 为内置模块
		var parseView = __webpack_require__(44)

		function render(vtree, local) {
		    var _body = Array.isArray(vtree) ? parseView(vtree) : vtree
		    var _local = []
		    if (local) {
		        for (var i in local) {
		            _local.push('var ' + i + ' = __local__['+avalon.quote(i)+']')
		        }
		    }
		    var body = '__local__ = __local__ || {};\n' +
		            'var __present__, __top__,__synth__;\n' +
		            _local.join(';\n')+'\n' + _body
		    var fn = Function('__vmodel__', '__local__', body)

		//    var a = document.createElement('xmp')
		//    var t = document.createTextNode(_body)
		//    a.appendChild(t)
		//    document.body.appendChild(a)


		    return fn
		}
		avalon.render = render

		module.exports = avalon


	/***/ },
	/* 71 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * ------------------------------------------------------------
		 * lexer 将字符串变成一个虚拟DOM树,方便以后进一步变成模板函数
		 * 此阶段只会生成VElement,VText,VComment
		 * ------------------------------------------------------------
		 */

		var makeHashCode = avalon.makeHashCode
		var vdom = __webpack_require__(15)
		var VText = vdom.VText
		var VComment = vdom.VComment


		//匹配只有开标签的无内容元素（Void elements 或 self-contained tags）
		//http://www.colorglare.com/2014/02/03/to-close-or-not-to-close.html
		//http://blog.jobbole.com/61514/

		//var rfullTag = /^<([^\s>\/=.$<]+)(?:\s+[^=\s]+(?:=[^>\s]+)?)*\s*>(?:[\s\S]*)<\/\1>/
		//var rvoidTag = /^<([^\s>\/=.$<]+)\s*([^>]*?)\/?>/
		var rfullTag = /^<([-A-Za-z0-9_]+)(?:\s+[^=\s]+(?:=[^>\s]+)?)*\s*>(?:[\s\S]*)<\/\1>/
		var rvoidTag = /^<([-A-Za-z0-9_]+)\s*([^>]*?)\/?>/
		var rtext = /^[^<]+/
		var rcomment = /^<!--([\w\W]*?)-->/

		var rnumber = /\d+/g
		var rmsForStart = /^\s*ms\-for\:/
		var rmsForEnd = /^\s*ms\-for\-end/
		var r = __webpack_require__(47)
		var rsp = r.sp
		var rfill = /\?\?\d+/g
		var rleftSp = r.leftSp
		var rstring = r.string


		var config = avalon.config


		var maps = {}
		var number = 1
		function dig(a) {
		    var key = '??' + number++
		    maps[key] = a
		    return key
		}
		function fill(a) {
		    var val = maps[a]
		    return val
		}
		var rhasString = /=["']/
		var rlineSp = /\n\s*/g
		function fixLongAttrValue(attr) {
		    return rhasString.test(attr) ?
		        attr.replace(rlineSp, '').replace(rstring, dig) : attr
		}
		function lexer(text, curDeep) {
		    var nodes = []
		    if (typeof curDeep !== 'number') {
		        curDeep = 0
		    }
		    if (!curDeep) {
		        text = text.replace(rstring, dig)
		    }
		    do {
		        var outerHTML = ''
		        var node = false
		        var match = text.match(rtext)
		        if (match) {//尝试匹配文本
		            outerHTML = match[0]
		            node = {
		                type: '#text',
		                nodeType: 3,
		                nodeValue: outerHTML.replace(rfill, fill)
		            }

		        }

		        if (!node) {//尝试匹配注释
		            match = text.match(rcomment)
		            if (match) {
		                outerHTML = match[0]
		                node = {
		                    type: '#comment',
		                    nodeType: 8,
		                    nodeValue: match[1].replace(rfill, fill)
		                }
		           
		                
		            }
		        }


		        if (!node) {//尝试匹配拥有闭标签的元素节点
		            match = text.match(rfullTag)
		            if (match) {
		                outerHTML = match[0]//贪婪匹配 outerHTML,可能匹配过多
		                var type = match[1].toLowerCase()//nodeName
		                outerHTML = clipOuterHTML(outerHTML, type)

		                match = outerHTML.match(rvoidTag) //抽取所有属性

		                var props = {}
		                if (match[2]) {
		                    handleProps(fixLongAttrValue(match[2]), props)
		                }

		                var innerHTML = outerHTML.slice(match[0].length,
		                    (type.length + 3) * -1) //抽取innerHTML
		                node = {
		                    nodeType: 1,
		                    type: type,
		                    props: props,
		                    template: innerHTML.replace(rfill, fill).trim(),
		                    children: []
		                }
		                node = modifyProps(node, innerHTML, nodes, curDeep)

		            }
		        }

		        if (!node) {
		            match = text.match(rvoidTag)
		            if (match) {//尝试匹配自闭合标签
		                outerHTML = match[0]
		                type = match[1].toLowerCase()
		                props = {}
		                if (match[2]) {
		                    handleProps(fixLongAttrValue(match[2]), props)
		                }
		                node = {
		                    nodeType: 1,
		                    type: type,
		                    props: props,
		                    children: [],
		                    isVoidTag: true
		                }
		                node = modifyProps(node, '', nodes, curDeep)
		            }
		        }

		        if (node) {//从text中移除被匹配的部分
		            if (node.nodeType !== 3 || /\S/.test(node.nodeValue)) {
		                nodes.push(node)
		            }
		            text = text.slice(outerHTML.length)
		            if (node.nodeType === 8){
		                if(rmsForStart.test(node.nodeValue)) {
		                    
		                   node.signature = node.signature || makeHashCode('for')
		                   node.directive = 'for'
		                }else if (rmsForEnd.test(node.nodeValue)) {
		                     //将 ms-for与ms-for-end:之间的节点塞到一个数组中
		                    markeRepeatRange(nodes, node)
		                }
		            }
		        } else {
		            break
		        }
		    } while (1);
		    if (!curDeep) {
		        maps = {}
		    }
		    return nodes
		}



		function markeRepeatRange(nodes, end) {
		    var el, k = nodes.length-1, toFilter = [], toRemove = k
		    while (el = nodes[--k]) {
		        if (el.nodeType === 8 && rmsForStart.test(el.nodeValue)) {
		            var start = el
		            end.signature = el.signature
		            break
		        }
		        toFilter.push(el)
		    }
		    var toRepeat = toFilter.reverse().filter(function (el) {
		        if (el.nodeType === 3) {
		            console.log(el.nodeValue)
		            return /[\S\xA0]+/.test(el.nodeValue)
		        } else {
		            return true
		        }
		    })

		    start.template = toRepeat.map(function (a) {
		        return avalon.vdomAdaptor(a, 'toHTML')
		    }).join('')

		    nodes.splice(k +1, toFilter.length, toRepeat)
		}

		//用于创建适配某一种标签的正则表达式
		var openStr = '(?:\\s+[^>=]*?(?:=[^>]+?)?)*>'
		var tagCache = {}// 缓存所有匹配开标签闭标签的正则
		var rchar = /./g
		var regArgs = avalon.msie < 9 ? 'ig' : 'g'//IE6-8，标签名都是大写
		function clipOuterHTML(matchText, type) {
		    var opens = []
		    var closes = []
		    var ropen = tagCache[type + 'open'] ||
		        (tagCache[type + 'open'] = new RegExp('<' + type + openStr, regArgs))
		    var rclose = tagCache[type + 'close'] ||
		        (tagCache[type + 'close'] = new RegExp('<\/' + type + '>', regArgs))

		    /* jshint ignore:start */
		    matchText.replace(ropen, function (_, b) {
		        //注意,页面有时很长,b的数值就很大,如
		        //000000000<000000011>000000041<000000066>000000096<000000107>
		        opens.push(('0000000000' + b + '<').slice(-10))//取得所有开标签的位置
		        return _.replace(rchar, '1')
		    }).replace(rclose, function (_, b) {
		        closes.push(('0000000000' + b + '>').slice(-10))//取得所有闭标签的位置               
		    })

		    /* jshint ignore:end */
		    //<div><div>01</div><div>02</div></div><div>222</div><div>333</div>
		    //会变成000<005<012>018<025>031>037<045>051<059>
		    //再变成<<><>><><>
		    //最后获取正确的>的索引值,这里为<<><>>的最后一个字符,
		    var pos = opens.concat(closes).sort()
		    var gtlt = pos.join('').replace(rnumber, '')
		    var k = 0, last = 0

		    for (var i = 0, n = gtlt.length; i < n; i++) {
		        var c = gtlt.charAt(i)
		        if (c === '<') {
		            k += 1
		        } else {
		            k -= 1
		        }
		        if (k === 0) {
		            last = i
		            break
		        }
		    }
		    var findex = parseFloat(pos[last]) + type.length + 3 // (</>为三个字符)
		    return matchText.slice(0, findex) //取得正确的outerHTML
		}


		function modifyProps(node, innerHTML, nodes, curDeep) {
		    var type = node.type
		    var props = node.props
		    switch (type) {
		        case 'style':
		        case 'script':
		        case 'noscript':
		        case 'template':
		        case 'textarea':
		        case 'xmp':
		            node.skipContent = true
		           
		            if(node.template){
		                node.children.push(new VText(node.template))
		            }else{
		                node.children = []
		            }
		            if (type === 'textarea') {
		                props.type = 'textarea'
		                node.children.length = 0
		            }
		            break
		        case 'input':
		            if (!props.type) {
		                props.type = 'text'
		            }
		            break
		        case 'select':
		            if (props.hasOwnProperty('multiple')) {
		                props.multiple = 'multiple'
		                node.multiple = true
		            }
		            break
		        
		        case 'option':
		            node.children.push(new VText(trimHTML(node.template)))
		            break
		        default:
		            if(/^ms-/.test(type) ){
		                props.is = type
		                if(!props['ms-widget']){
		                   props['ms-widget'] = '{is:' + avalon.quote(type) + '}'
		                }
		            }
		            break
		    }
		    
		    if (!node.isVoidTag && !node.skipContent) {
		        var childs = lexer(innerHTML, curDeep + 1)
		        node.children = childs
		        if (type === 'table') {
		            addTbody(node.children)
		        }
		    }
		    var forExpr = props['ms-for']
		    if (forExpr) {
		        var cb = props['data-for-rendered']
		        var cid = cb + ':cb'
		        delete props['ms-for']
		        nodes.push({
		            nodeType: 8,
		            type: '#comment',
		            nodeValue: 'ms-for:' + forExpr,
		            signature: makeHashCode('for'),
		            directive: 'for',
		            cid: cid
		        })

		        if (cb && !avalon.caches[cid]) {
		            avalon.caches[cid] = Function('return ' + avalon.parseExpr(cb, 'on'))()
		        }

		        nodes.push(node)
		        return {
		            nodeType: 8,
		            type: '#comment',
		            nodeValue: 'ms-for-end:'
		        }
		    }

		    return node
		}
		//如果直接将tr元素写table下面,那么浏览器将将它们(相邻的那几个),放到一个动态创建的tbody底下
		function addTbody(nodes) {
		    var tbody, needAddTbody = false, count = 0, start = 0, n = nodes.length
		    for (var i = 0; i < n; i++) {
		        var node = nodes[i]
		        if (!tbody) {
		            if (node.type === 'tr') {
		                tbody = {
		                    nodeType: 1,
		                    type: 'tbody',
		                    children: [],
		                    props: {}
		                }
		                tbody.children.push(node)
		                needAddTbody = true
		                if (start === 0)
		                    start = i
		                nodes[i] = tbody
		            }
		        } else {
		            if (node.type !== 'tr' && node.nodeType === 1) {
		                tbody = false
		            } else {
		                tbody.children.push(node)
		                count++
		                nodes[i] = 0
		            }
		        }
		    }

		    if (needAddTbody) {
		        for (i = start; i < n; i++) {
		            if (nodes[i] === 0) {
		                nodes.splice(i, 1)
		                i--
		                count--
		                if (count === 0) {
		                    break
		                }
		            }
		        }
		    }
		}


		var ramp = /&amp;/g
		var rnowhite = /\S+/g
		var rquote = /&quot;/g
		var rnogutter = /\s*=\s*/g
		//https://github.com/RubyLouvre/avalon/issues/1501
		function handleProps(str, props) {
		    str.replace(rnogutter, '=').replace(rnowhite, function (el) {
		        var arr = el.split('='), value = arr[1] || '',
		            name = arr[0].toLowerCase()
		        if (arr.length === 2) {
		            if (value.indexOf('??') === 0) {
		                value = unescapeHTML(value.replace(rfill, fill).
		                    slice(1, -1))
		            }
		        }
		        props[name] = value
		    })
		}

		//将字符串中的html实体字符还原为对应字符
		function unescapeHTML(target) {
		    return  target.replace(/&quot;/g, '"')
		            .replace(/&lt;/g, '<')
		            .replace(/&gt;/g, '>')
		            .replace(/&amp;/g, "&") //处理转义的中文和实体字符
		            .replace(/&#([\d]+);/g, function($0, $1) {
		        return String.fromCharCode(parseInt($1, 10));
		    });
		}
		//form prototype.js
		var rtrimHTML = /<\w+(\s+("[^"]*"|'[^']*'|[^>])+)?>|<\/\w+>/gi
		function trimHTML(v) {
		    return String(v).replace(rtrimHTML, '').trim()
		}


		module.exports = lexer

		avalon.speedUp = function (arr) {
		    for (var i = 0; i < arr.length; i++) {
		        hasDirective(arr[i])
		    }
		}

		function hasDirective(a) {
		    switch (a.nodeType) {
		        case 3:
		            if (config.rbind.test(a.nodeValue)) {
		                a.dynamic  = true
		                return true
		            } else {
		                a.skipContent = true
		                return false
		            }
		        case 8:
		            if (/^ms\-for/.test(a.nodeValue)) {
		                a.dynamic = true
		                return true
		            } else {
		                a.skipContent = true
		                return false
		            }
		        case 1:

		            if (a.props['ms-skip']) {
		                a.skipAttrs = true
		                a.skipContent = true
		                return false
		            }
		            if(/^ms\-/.test(a.type)){
		                a.dynamic = true
		            }
		            if (hasDirectiveAttrs(a.props)) {
		                a.dynamic = true
		            }else{
		                a.skipAttrs = true
		            }
		            if (a.isVoidTag && !a.dynamic) {
		                a.skipContent = true
		                return false
		            }
		            var hasDirective = childrenHasDirective(a.children)
		            if (!hasDirective && !a.dynamic) {
		                a.skipContent = true
		                return false
		            }
		            return true
		        default:
		            if(Array.isArray(a)){
		                return childrenHasDirective(a)
		            }
		    }
		}

		function childrenHasDirective(arr){
		    var ret = false
		    for (var i = 0, el; el = arr[i++];) {
		        if (hasDirective(el)) {
		            ret = true
		        }
		    }
		    return ret
		}

		function hasDirectiveAttrs(props) {
		    if('ms-skip' in props)
		        return false
		    for (var i in props) {
		        if (i.indexOf('ms-') === 0 ) {
		            return true
		        }
		    }
		    return false
		}

	/***/ },
	/* 72 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * ------------------------------------------------------------
		 * diff 对比新旧两个虚拟DOM树,根据directive中的diff方法为新虚拟DOM树
		 * 添加change, afterChange更新钩子
		 * ------------------------------------------------------------
		 */
		var emptyArr = []
		// 防止被引用
		var emptyObj = function () {
		    return {
		        children: [], props: {}
		    }
		}
		var directives = avalon.directives
		var rbinding = __webpack_require__(47).binding

		function diff(copys, sources) {
		    for (var i = 0; i < copys.length; i++) {
		        var copy = copys[i]
		        var src = sources[i] || emptyObj()
		    
		        switch (copy.nodeType) {
		            case 3:
		                if (copy.dynamic) {
		                    directives.expr.diff(copy, src)
		                }
		                break
		            case 8:
		                if (copy.directive) {
		                    directives[copy.directive].diff(copy, src,
		                    copys[i+1],sources[i+1],sources[i+2]) 
		                }
		                if(src.afterChange){
		                    execHooks(src, src.afterChange)
		                }
		                break
		            case 1:
		                if (!copy.skipAttrs) {
		                    diffProps(copy, src)
		                }
		                if (!copy.skipContent && !copy.isVoidTag ) {
		                    diff(copy.children, src.children || emptyArr, copy)
		                }
		                if(src.afterChange){
		                    execHooks(src, src.afterChange)
		                }
		                break
		            default: 
		                if(Array.isArray(copy)){
		                   diff(copy, src)
		                }
		                break
		        }
		    }
		}

		function execHooks(el, hooks) {
		    if (hooks.length) {
		        for (var hook, i = 0; hook = hooks[i++];) {
		           hook(el.dom, el)
		        }
		    }
		    delete el.afterChange
		}

		function diffProps(copys, sources) {
		    var order = copys.order
		    if (order) {
		        var directiveType
		        try {
		           order.replace(avalon.rword, function (name) {
		                var match = name.match(rbinding)
		                var type = match && match[1]
		                directiveType = type
		                if (directives[type]) {
		                    directives[type].diff(copys, sources || emptyObj(), name)
		                }
		                if(copys.order !== order){
		                    throw "break"
		                }
		               
		            })
		            
		        } catch (e) {
		            if(e !== 'break'){
		                avalon.log(directiveType, e, e.message, 'diffProps error')
		            }else{
		                diffProps(copys, sources)
		            }
		        }
		    }


		}
		avalon.diffProps = diffProps
		module.exports = diff


	/***/ },
	/* 73 */
	/***/ function(module, exports, __webpack_require__) {

		
		/**
		 * ------------------------------------------------------------
		 * batch 同时对N个视图进行全量更新
		 * ------------------------------------------------------------
		 */

		var reconcile = __webpack_require__(51)

		//如果正在更新一个子树,那么将它放到
		var needRenderIds = []
		var renderingID = false
		avalon.suspendUpdate = 0


		function batchUpdate(id) {
		    if (renderingID) {
		        return avalon.Array.ensure(needRenderIds, id)
		    } else {
		        renderingID = id
		    }

		    var scope = avalon.scopes[id]
		    if (!scope || !document.nodeName || avalon.suspendUpdate) {
		        return renderingID = null
		    }
		    var vm = scope.vmodel
		    var dom = vm.$element
		    var source = dom.vtree || []
		    var renderFn = vm.$render
		    var copy = renderFn(scope.vmodel, scope.local)
		    if (!scope.isMount) {
		        //在最开始时,替换作用域的所有节点,确保虚拟DOM与真实DOM是对齐的
		        reconcile([dom], source, dom.parentNode)  
		        scope.isMount = 1
		    }
		    avalon.diff(copy, source)
		    
		    if (scope.isMount === 1) {
		        var events = vm.$events["onReady"]
		        if (events) {
		            vm.$fire('onReady')
		            delete vm.$events.onReady
		        }
		        scope.isMount = 2
		    }

		    var index = needRenderIds.indexOf(renderingID)
		    renderingID = 0
		    if (index > -1) {
		        var removed = needRenderIds.splice(index, 1)
		        return batchUpdate(removed[0])
		    }

		    var more = needRenderIds.shift()
		    if (more) {
		        batchUpdate(more)
		    }
		}



		module.exports = avalon.batch = batchUpdate


	/***/ },
	/* 74 */
	/***/ function(module, exports) {

		

		//http://stackoverflow.com/questions/11425209/are-dom-mutation-observers-slower-than-dom-mutation-events
		//http://stackoverflow.com/questions/31798816/simple-mutationobserver-version-of-domnoderemovedfromdocument
		function byMutationEvent(dom) {
		    dom.addEventListener("DOMNodeRemovedFromDocument", function () {
		        fireDisposeHookDelay(dom)
		    })
		}
		//用于IE8+, firefox
		function byRewritePrototype() {
		    if (byRewritePrototype.execute) {
		        return
		    }
		//https://www.web-tinker.com/article/20618.html?utm_source=tuicool&utm_medium=referral
		//IE6-8虽然暴露了Element.prototype,但无法重写已有的DOM API
		    byRewritePrototype.execute = true
		    var p = Node.prototype
		    function rewite(name, fn) {
		        var cb = p[name]
		        p[name] = function (a, b) {
		            return  fn.call(this, cb, a, b)
		        }
		    }
		    rewite('removeChild', function (fn, a, b) {
		        fn.call(this, a, b)
		        if (a.nodeType === 1) {
		            fireDisposeHookDelay(a)
		        }
		        return a
		    })

		    rewite('replaceChild', function (fn, a, b) {
		        fn.call(this, a, b)
		        if (a.nodeType === 1) {
		            fireDisposeHookDelay(a)
		        }
		        return a
		    })
		    //访问器属性需要用getOwnPropertyDescriptor处理
		    var ep = Element.prototype, oldSetter
		    function newSetter(html) {
		        var all = avalon.slice(this.getElementsByTagName('*'))
		        oldSetter.call(this, html)
		        fireDisposedComponents(all)
		    }
		    if (!Object.getOwnPropertyDescriptor) {
		        oldSetter = ep.__lookupSetter__('innerHTML')
		        ep.__defineSetter__('innerHTML', newSetter)
		    } else {
		        var obj = Object.getOwnPropertyDescriptor(ep, 'innerHTML')
		        oldSetter = obj.set
		        obj.set = newSetter
		        Object.defineProperty(ep, 'innerHTML', obj)
		    }
		    
		    rewite('appendChild', function (fn, a) {
		        fn.call(this, a)
		        if (a.nodeType === 1 && this.nodeType === 11) {
		            fireDisposeHookDelay(a)
		        }
		        return a
		    })

		    rewite('insertBefore', function (fn, a, b) {
		        fn.call(this, a, b)
		        if (a.nodeType === 1 && this.nodeType === 11) {
		            fireDisposeHookDelay(a)
		        }
		        return a
		    })
		}

		//用于IE6~8
		var checkDisposeNodes = []
		var checkID = 0
		function byPolling(dom) {
		    avalon.Array.ensure(checkDisposeNodes, dom)
		    if (!checkID) {
		        checkID = setInterval(function () {
		            for (var i = 0, el; el = checkDisposeNodes[i]; ) {
		                if (false === fireDisposeHook(el)) {
		                    avalon.Array.removeAt(checkDisposeNodes, i)
		                } else {
		                    i++
		                }
		            }
		            if (checkDisposeNodes.length == 0) {
		                clearInterval(checkID)
		                checkID = 0
		            }
		        }, 700)
		    }
		}


		module.exports = function onComponentDispose(dom) {
		    if (window.chrome && window.MutationEvent) {
		        byMutationEvent(dom)
		    } else if (avalon.modern && typeof window.Node === 'function') {
		        byRewritePrototype(dom)
		    } else {
		        byPolling(dom)
		    }
		}

		function inDomTree(el) {
		    while (el) {
		        if (el.nodeType === 9) {
		            return true
		        }
		        el = el.parentNode
		    }
		    return false
		}

		function fireDisposeHook(el) {
		    if (el.nodeType === 1 && el.getAttribute('wid') && !inDomTree(el)) {
		        var wid = el.getAttribute('wid')
		        var docker = avalon.scopes[ wid ]
		        if(!docker)
		            return
		        var vm = docker.vmodel
		        docker.vmodel.$fire("onDispose", {
		            type: 'dispose',
		            target: el,
		            vmodel: vm
		        })
		        if (docker && !el.getAttribute('cached')) {
		            vm.$element = null
		            vm.$hashcode = false
		            el.vtree = void 0
		            delete docker.vmodel
		            delete avalon.scopes[ wid ]
		        }
		        return false
		    }
		}

		function fireDisposeHookDelay(a){
		    setTimeout(function () {
		        fireDisposeHook(a)
		    },4)
		}
		function fireDisposedComponents(nodes) {
		    for (var i = 0, el; el = nodes[i++]; ) {
		        fireDisposeHook(el)
		    }
		}

	/***/ },
	/* 75 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * ------------------------------------------------------------
		 * avalon基于纯净的Object.defineProperties的vm工厂 
		 * masterFactory,slaveFactory,mediatorFactory, ArrayFactory
		 * ------------------------------------------------------------
		 */

		var share = __webpack_require__(76)
		var createViewModel = __webpack_require__(80)

		var isSkip = share.isSkip
		var toJson = share.toJson
		var $$midway = share.$$midway
		var $$skipArray = share.$$skipArray

		var makeAccessor = share.makeAccessor
		var initViewModel = share.initViewModel
		var modelAccessor = share.modelAccessor
		var modelAdaptor = share.modelAdaptor
		var makeHashCode = avalon.makeHashCode


		//一个vm总是为Observer的实例
		function Observer() {
		}

		function masterFactory(definition, heirloom, options) {

		    var $skipArray = {}
		    if (definition.$skipArray) {//收集所有不可监听属性
		        $skipArray = avalon.oneObject(definition.$skipArray)
		        delete definition.$skipArray
		    }

		    var keys = {}
		    options = options || {}
		    heirloom = heirloom || {}
		    var accessors = {}
		    var hashcode = makeHashCode('$')
		    var pathname = options.pathname || ''
		    options.id = options.id || hashcode
		    options.hashcode = options.hashcode || hashcode
		    var key, sid, spath
		    for (key in definition) {
		        if ($$skipArray[key])
		            continue
		        var val = keys[key] = definition[key]
		        if (!isSkip(key, val, $skipArray)) {
		            sid = options.id + '.' + key
		            spath = pathname ? pathname + '.' + key : key
		            accessors[key] = makeAccessor(sid, spath, heirloom)
		        }
		    }

		    accessors.$model = modelAccessor
		    var $vmodel = new Observer()
		    $vmodel = createViewModel($vmodel, accessors, definition)

		    for (key in keys) {
		        //对普通监控属性或访问器属性进行赋值
		        $vmodel[key] = keys[key]

		        //删除系统属性
		        if (key in $skipArray) {
		            delete keys[key]
		        } else {
		            keys[key] = true
		        }
		    }
		    initViewModel($vmodel, heirloom, keys, accessors, options)

		    return $vmodel
		}

		$$midway.masterFactory = masterFactory
		var empty = {}
		function slaveFactory(before, after, heirloom, options) {
		    var keys = {}
		    var skips = {}
		    var accessors = {}
		    heirloom = heirloom || {}
		    var pathname = options.pathname
		    var resue = before.$accessors || {}
		    var key, sid, spath
		    for (key in after) {
		        if ($$skipArray[key])
		            continue
		        keys[key] = true//包括可监控与不可监控的
		        if (!isSkip(key, after[key], empty)) {
		            if (resue[key]) {
		                accessors[key] = resue[key]
		            } else {
		                sid = options.id + '.' + key
		                spath = pathname ? pathname + '.' + key : key
		                accessors[key] = makeAccessor(sid, spath, heirloom)
		            }
		        } else {
		            skips[key] = after[key]
		            delete after[key]
		        }
		    }

		    options.hashcode = before.$hashcode || makeHashCode('$')
		    accessors.$model = modelAccessor
		    var $vmodel = new Observer()
		    $vmodel = createViewModel($vmodel, accessors, skips)

		    for (key in skips) {
		        $vmodel[key] = skips[key]
		    }

		    initViewModel($vmodel, heirloom, keys, accessors, options)

		    return $vmodel
		}

		$$midway.slaveFactory = slaveFactory

		function mediatorFactory(before, after) {
		    var keys = {}, key
		    var accessors = {}
		    var unresolve = {}
		    var heirloom = {}
		    var arr = avalon.slice(arguments)
		    var $skipArray = {}
		    for (var i = 0; i < arr.length; i++) {
		        var obj = arr[i]
		        //收集所有键值对及访问器属性
		        var config
		        var configName
		        for (var key in obj) {
		            if(!obj.hasOwnProperty(key)){
		                continue
		            }
		            if(key === '$skipArray' && Array.isArray(obj.$skipArray)){
		                obj.$skipArray.forEach(function(el){
		                    $skipArray[el] = 1
		                })
		            }
		            keys[key] = obj[key]
		            var $accessors = obj.$accessors
		            if ($accessors && $accessors[key]) {
		                if (arr.indexOf(obj[key]) === -1) {
		                    accessors[key] = $accessors[key]
		                } else { //去掉vm那个配置对象
		                    config = keys[key]
		                    configName = key
		                    delete keys[key]
		                }
		            } else if (typeof keys[key] !== 'function') {
		                unresolve[key] = 1
		            }
		        }
		    }
		    if (typeof this === 'function') {
		        this(keys, unresolve)
		    }
		    for (key in unresolve) {
		        //系统属性跳过,已经有访问器的属性跳过
		        if ($$skipArray[key] || accessors[key])
		            continue
		        if (!isSkip(key, keys[key], $skipArray)) {
		            accessors[key] = makeAccessor(before.$id, key, heirloom)
		            accessors[key].set(keys[key])
		        }
		    }

		    var $vmodel = new Observer()
		    $vmodel = createViewModel($vmodel, accessors, keys)

		    for (key in keys) {
		        if (!accessors[key]) {//添加不可监控的属性
		            $vmodel[key] = keys[key]
		        }
		        //用于通过配置对象触发组件的$watch回调
		        if (configName && accessors[key] && config.hasOwnProperty(key)) {
		            var $$ = accessors[key]
		            if (!$$.get.$decompose) {
		                $$.get.$decompose = {}
		            }
		            $$.get.$decompose[configName+'.'+key] = $vmodel
		        }

		        if (key in $$skipArray) {
		            delete keys[key]
		        } else {
		            keys[key] = true
		        }

		    }

		    initViewModel($vmodel, heirloom, keys, accessors, {
		        id: before.$id,
		        hashcode: makeHashCode('$'),
		        master: true
		    })

		    return $vmodel
		}


		$$midway.mediatorFactory = avalon.mediatorFactory = mediatorFactory

		var __array__ = share.__array__


		var ap = Array.prototype
		var _splice = ap.splice
		function notifySize(array, size) {
		    if (array.length !== size) {
		        array.notify('length', array.length, size, true)
		    }
		}

		__array__.removeAll = function (all) { //移除N个元素
		    var size = this.length
		    if (Array.isArray(all)) {
		        for (var i = this.length - 1; i >= 0; i--) {
		            if (all.indexOf(this[i]) !== -1) {
		                _splice.call(this, i, 1)
		            }
		        }
		    } else if (typeof all === 'function') {
		        for (i = this.length - 1; i >= 0; i--) {
		            var el = this[i]
		            if (all(el, i)) {
		                _splice.call(this, i, 1)
		            }
		        }
		    } else {
		        _splice.call(this, 0, this.length)

		    }
		    if (!avalon.modern) {
		        this.$model = toJson(this)
		    }
		    notifySize(this, size)
		    this.notify()
		}


		var __method__ = ['push', 'pop', 'shift', 'unshift', 'splice']

		__method__.forEach(function (method) {
		    var original = ap[method]
		    __array__[method] = function (a, b) {
		        // 继续尝试劫持数组元素的属性
		        var args = [], size = this.length

		        if (method === 'splice' && Object(this[0]) === this[0]) {
		            var old = this.slice(a, b)
		            var neo = ap.slice.call(arguments, 2)
		            var args = [a, b]
		            for (var j = 0, jn = neo.length; j < jn; j++) {
		                var item = old[j]

		                args[j + 2] = modelAdaptor(neo[j], item, (item && item.$events || {}), {
		                    id: this.$id + '.*',
		                    master: true
		                })
		            }

		        } else {
		            for (var i = 0, n = arguments.length; i < n; i++) {
		                args[i] = modelAdaptor(arguments[i], 0, {}, {
		                    id: this.$id + '.*',
		                    master: true
		                })
		            }
		        }
		        var result = original.apply(this, args)
		        if (!avalon.modern) {
		            this.$model = toJson(this)
		        }
		        notifySize(this, size)
		        this.notify()
		        return result
		    }
		})

		'sort,reverse'.replace(avalon.rword, function (method) {
		    __array__[method] = function () {
		        ap[method].apply(this, arguments)
		        if (!avalon.modern) {
		            this.$model = toJson(this)
		        }
		        this.notify()
		        return this
		    }
		})


		module.exports = avalon
		//使用这个来扁平化数据  https://github.com/gaearon/normalizr
		//使用Promise  https://github.com/stefanpenner/es6-promise
		//使用这个AJAX库 https://github.com/matthew-andrews/isomorphic-fetch

	/***/ },
	/* 76 */
	/***/ function(module, exports, __webpack_require__) {

		var share = __webpack_require__(77)
		var canHideProperty = __webpack_require__(79)
		var initEvents = share.initEvents

		/*
		 * toJson
		 * hideProperty
		 * initViewModel
		 */

		function toJson(val) {
		    var xtype = avalon.type(val)
		    if (xtype === 'array') {
		        var array = []
		        for (var i = 0; i < val.length; i++) {
		            array[i] = toJson(val[i])
		        }
		        return array
		    } else if (xtype === 'object') {
		        var obj = {}
		        for (i in val) {
		            if (i === '__proxy__' || i === '__data__' || i === '__const__')
		                continue
		            if (val.hasOwnProperty(i)) {
		                var value = val[i]
		                obj[i] = value && value.nodeType ? value : toJson(value)
		            }
		        }
		        return obj
		    }
		    return val
		}

		function hideProperty(host, name, value) {
		    if (canHideProperty) {
		        Object.defineProperty(host, name, {
		            value: value,
		            writable: true,
		            enumerable: false,
		            configurable: true
		        })
		    } else {
		        host[name] = value
		    }
		}

		var modelAccessor = {
		    get: function () {
		        return toJson(this)
		    },
		    set: avalon.noop,
		    enumerable: false,
		    configurable: true
		}

		function initViewModel($vmodel, heirloom, keys, accessors, options) {

		    if (options.array) {
		        if (avalon.modern) {
		            Object.defineProperty($vmodel, '$model', modelAccessor)
		        } else {
		            $vmodel.$model = toJson($vmodel)
		        }
		    } else {
		        function hasOwnKey(key) {
		            return keys[key] === true
		        }
		        hideProperty($vmodel, '$accessors', accessors)
		        hideProperty($vmodel, 'hasOwnProperty', hasOwnKey)
		        hideProperty($vmodel, '$track', Object.keys(keys).sort().join(';;'))
		    }
		    hideProperty($vmodel, '$id', options.id)
		    hideProperty($vmodel, '$hashcode', options.hashcode)
		    if (options.master === true) {
		        hideProperty($vmodel, '$run', function () {
		            run.call($vmodel)
		        })
		        hideProperty($vmodel, '$wait', function () {
		            wait.call($vmodel)
		        })
		        hideProperty($vmodel, '$element', null)
		        hideProperty($vmodel, '$render', 0)
		        initEvents($vmodel, heirloom)
		    }
		}

		function wait() {
		    this.$events.$$wait$$ = true
		}

		function run() {
		    var host = this.$events
		    delete host.$$wait$$
		    if (host.$$dirty$$) {
		        delete host.$$dirty$$
		        avalon.rerenderStart = new Date
		        var id = this.$id
		        var dotIndex = id.indexOf('.')
		        if (dotIndex > 0) {
		            avalon.batch(id.slice(0, dotIndex))
		        } else {
		            avalon.batch(id)
		        }
		    }
		}

		share.$$midway.initViewModel = initViewModel

		share.$$midway.hideProperty = hideProperty

		var mixin = {
		    toJson: toJson,
		    initViewModel: initViewModel,
		    modelAccessor: modelAccessor
		}
		for (var i in share) {
		    mixin[i] = share[i]
		}

		module.exports = mixin


	/***/ },
	/* 77 */
	/***/ function(module, exports, __webpack_require__) {

		
		var $$midway = {}
		var $$skipArray = __webpack_require__(67)
		var dispatch = __webpack_require__(78)
		var $emit = dispatch.$emit
		var $watch = dispatch.$watch
		/*
		 * initEvents
		 * isSkip
		 * modelAdaptor
		 * makeAccessor
		 */

		function initEvents($vmodel, heirloom) {
		    heirloom.__vmodel__ = $vmodel
		    var hide = $$midway.hideProperty

		    hide($vmodel, '$events', heirloom)
		    hide($vmodel, '$watch', function () {
		        if (arguments.length === 2) {
		            return $watch.apply($vmodel, arguments)
		        } else {
		            throw '$watch方法参数不对'
		        }
		    })
		    hide($vmodel, '$fire', function (expr, a, b) {
		        var list = $vmodel.$events[expr]
		        $emit(list, $vmodel, expr, a, b)
		    })
		}


		function isSkip(key, value, skipArray) {
		    // 判定此属性能否转换访问器
		    return key.charAt(0) === '$' ||
		            skipArray[key] ||
		            (typeof value === 'function') ||
		            (value && value.nodeName && value.nodeType > 0)
		}

		function modelAdaptor(definition, old, heirloom, options) {
		    //如果数组转换为监控数组
		    if (Array.isArray(definition)) {
		        return $$midway.arrayFactory(definition, old, heirloom, options)
		    } else if (Object(definition) === definition && typeof definition !== 'function') {
		        //如果此属性原来就是一个VM,拆分里面的访问器属性
		        if (old && old.$id) {
		            ++avalon.suspendUpdate
		            //1.5带来的优化方案
		            if (old.$track !== Object.keys(definition).sort().join(';;')) {
		                var vm = $$midway.slaveFactory(old, definition, heirloom, options)
		            } else {
		                vm = old
		            }
		            for (var i in definition) {
		                if ($$skipArray[i])
		                    continue
		                vm[i] = definition[i]
		            }
		            --avalon.suspendUpdate
		            return vm
		        } else {
		            vm = $$midway.masterFactory(definition, heirloom, options)
		            return vm
		        }
		    } else {
		        return definition
		    }
		}
		$$midway.modelAdaptor = modelAdaptor


		function makeAccessor(sid, spath, heirloom) {
		    var old = NaN
		    function get() {
		        return old
		    }
		    get.heirloom = heirloom
		    return {
		        get: get,
		        set: function (val) {
		            if (old === val) {
		                return
		            }
		            var vm = heirloom.__vmodel__
		            if (val && typeof val === 'object') {
		                val = $$midway.modelAdaptor(val, old, heirloom, {
		                    pathname: spath,
		                    id: sid
		                })
		            }
		            var older = old
		            old = val
		            if (this.$hashcode && vm ) {
		                vm.$events.$$dirty$$ = true
		                if(vm.$events.$$wait$$)
		                    return
		                //★★确保切换到新的events中(这个events可能是来自oldProxy)               
		                if (heirloom !== vm.$events) {
		                    get.heirloom = vm.$events
		                }
		                //如果这个属性是组件配置对象中的属性,那么它需要触发组件的回调
		                emitWidget(get.$decompose, spath, val, older)
		                //触发普通属性的回调
		                if (spath.indexOf('*') === -1) {
		                    $emit(get.heirloom[spath], vm, spath, val, older)
		                }
		                //如果这个属性是数组元素上的属性
		                emitArray(sid, vm, spath, val, older)
		                //如果这个属性存在通配符
		                emitWildcard(get.heirloom, vm, spath, val, older)
		                vm.$events.$$dirty$$ = false
		                batchUpdateView(vm.$id)
		            }
		        },
		        enumerable: true,
		        configurable: true
		    }
		}

		function batchUpdateView(id) {
		    avalon.rerenderStart = new Date
		    var dotIndex = id.indexOf('.')
		    if (dotIndex > 0) {
		        avalon.batch(id.slice(0, dotIndex))
		    } else {
		        avalon.batch(id)
		    }
		}

		var rtopsub = /([^.]+)\.(.+)/
		function emitArray(sid, vm, spath, val, older) {
		    if (sid.indexOf('.*.') > 0) {
		        var arr = sid.match(rtopsub)
		        var top = avalon.vmodels[ arr[1] ]
		        if (top) {
		            var path = arr[2]
		            $emit(top.$events[ path ], vm, spath, val, older)
		        }
		    }
		}

		function emitWidget(whole, spath, val, older) {
		    if (whole && whole[spath]) {
		        var wvm = whole[spath]
		        if (!wvm.$hashcode) {
		            delete whole[spath]
		        } else {
		            var wpath = spath.replace(/^[^.]+\./, '')
		            if (wpath !== spath) {
		                $emit(wvm.$events[wpath], wvm, wpath, val, older)
		            }
		        }
		    }
		}

		function emitWildcard(obj, vm, spath, val, older) {
		    if (obj.__fuzzy__) {
		        obj.__fuzzy__.replace(avalon.rword, function (expr) {
		            var list = obj[expr]
		            var reg = list.reg
		            if (reg && reg.test(spath)) {
		                $emit(list, vm, spath, val, older)
		            }
		            return expr
		        })
		    }
		}


		function define(definition) {
		    var $id = definition.$id
		    if (!$id && avalon.config.debug) {
		        avalon.warn('vm.$id must be specified')
		    }
		    if (avalon.vmodels[$id]) {
		        throw Error('error:[' + $id + '] had defined!')
		    }
		    var vm = $$midway.masterFactory(definition, {}, {
		        pathname: '',
		        id: $id,
		        master: true
		    })

		    return avalon.vmodels[$id] = vm

		}

		function arrayFactory(array, old, heirloom, options) {
		    if (old && old.splice) {
		        var args = [0, old.length].concat(array)
		        ++avalon.suspendUpdate
		        old.splice.apply(old, args)
		        --avalon.suspendUpdate
		        return old
		    } else {
		        for (var i in __array__) {
		            array[i] = __array__[i]
		        }

		        array.notify = function (a, b, c, d) {
		            var vm = heirloom.__vmodel__
		            if (vm) {
		                var path = a === null || a === void 0 ?
		                        options.pathname :
		                        options.pathname + '.' + a
		                vm.$fire(path, b, c)
		                if (!d && !heirloom.$$wait$$ && !avalon.suspendUpdate ) {
		                    batchUpdateView(vm.$id)
		                }
		            }
		        }

		        var hashcode = avalon.makeHashCode('$')
		        options.array = true
		        options.hashcode = hashcode
		        options.id = options.id || hashcode
		        $$midway.initViewModel(array, heirloom, {}, {}, options)

		        for (var j = 0, n = array.length; j < n; j++) {
		            array[j] = modelAdaptor(array[j], 0, {}, {
		                id: array.$id + '.*',
		                master: true
		            })
		        }
		        return array
		    }
		}
		$$midway.arrayFactory = arrayFactory

		var __array__ = {
		    set: function (index, val) {
		        if (((index >>> 0) === index) && this[index] !== val) {
		            if (index > this.length) {
		                throw Error(index + 'set方法的第一个参数不能大于原数组长度')
		            }
		            this.splice(index, 1, val)
		        }
		    },
		    contains: function (el) { //判定是否包含
		        return this.indexOf(el) !== -1
		    },
		    ensure: function (el) {
		        if (!this.contains(el)) { //只有不存在才push
		            this.push(el)
		        }
		        return this
		    },
		    pushArray: function (arr) {
		        return this.push.apply(this, arr)
		    },
		    remove: function (el) { //移除第一个等于给定值的元素
		        return this.removeAt(this.indexOf(el))
		    },
		    removeAt: function (index) { //移除指定索引上的元素
		        if ((index >>> 0) === index) {
		            return this.splice(index, 1)
		        }
		        return []
		    },
		    clear: function () {
		        this.removeAll()
		        return this
		    }
		}
		avalon.define = define

		module.exports = {
		    $$midway: $$midway,
		    $$skipArray: $$skipArray,
		    isSkip: isSkip,
		    __array__: __array__,
		    initEvents: initEvents,
		    makeAccessor: makeAccessor,
		    modelAdaptor: modelAdaptor
		}

	/***/ },
	/* 78 */
	/***/ function(module, exports) {

		
		/**
		 * ------------------------------------------------------------
		 * 属性监听系统 
		 * ------------------------------------------------------------
		 */

		function adjustVm(vm, expr) {
		    var toppath = expr.split(".")[0], other
		    try {
		        if (vm.hasOwnProperty(toppath)) {
		            if (vm.$accessors) {
		                other = vm.$accessors[toppath].get.heirloom.__vmodel__
		            } else {
		                other = Object.getOwnPropertyDescriptor(vm, toppath).get.heirloom.__vmodel__
		            }

		        }
		    } catch (e) {
		    }
		    return other || vm
		}

		function toRegExp(expr) {
		    var arr = expr.split('.')
		    return new RegExp("^" + arr.map(function (el) {
		        return el === '*' ? '(?:[^.]+)' : el
		    }).join('\\.') + '$', 'i')
		}
		function addFuzzy(add, obj, expr) {
		    if (add) {
		        if (obj.__fuzzy__) {
		            if (obj.__fuzzy__.indexOf(',' + expr) === -1) {
		                obj.__fuzzy__ += ',' + expr
		            }
		        } else {
		            obj.__fuzzy__ = expr
		        }
		    }
		}

		function $watch(expr, callback) {
		    var fuzzy = expr.indexOf('.*') > 0 || expr === '*'
		    var vm = fuzzy ? this : $watch.adjust(this, expr)
		    var hive = vm.$events
		    var list = hive[expr] || (hive[expr] = [])
		    if (fuzzy) {
		        list.reg = list.reg || toRegExp(expr)
		    }
		    addFuzzy(fuzzy, hive, expr)
		    if (vm !== this) {
		        addFuzzy(fuzzy, this.$events, expr)
		        this.$events[expr] = list
		    }

		    avalon.Array.ensure(list, callback)

		    return function () {
		        avalon.Array.remove(list, callback)
		    }
		}

		$watch.adjust = adjustVm
		/**
		 * $fire 方法的内部实现
		 * 
		 * @param {Array} list 订阅者数组
		 * @param {Component} vm
		 * @param {String} path 监听属性名或路径
		 * @param {Any} a 当前值 
		 * @param {Any} b 过去值
		 * @param {Number} i 如果抛错,让下一个继续执行
		 * @returns {undefined}
		 */
		function $emit(list, vm, path, a, b, i) {
		    if (list && list.length) {
		        try {
		            for (i = i || list.length - 1; i >= 0; i--) {
		                var callback = list[i]
		                callback.call(vm, a, b, path)
		            }
		        } catch (e) {
		            if (i - 1 > 0)
		                $emit(list, vm, path, a, b, i - 1)
		            avalon.log(e, path)
		        }

		    }
		}


		module.exports = {
		    $emit: $emit,
		    $watch: $watch,
		    adjustVm: adjustVm
		}


	/***/ },
	/* 79 */
	/***/ function(module, exports) {

		//如果浏览器不支持ecma262v5的Object.defineProperties或者存在BUG，比如IE8
		//标准浏览器使用__defineGetter__, __defineSetter__实现
		var flag = true
		try {
		    Object.defineProperty({}, '_', {
		        value: 'x'
		    })
		} catch (e) {
		    flag = false
		}

		module.exports = flag

	/***/ },
	/* 80 */
	/***/ function(module, exports, __webpack_require__) {

		
		var canHideProperty = __webpack_require__(79)
		var $$skipArray = __webpack_require__(67)


		var defineProperties = Object.defineProperties
		var defineProperty

		var expose = new Date() - 0

		if (!canHideProperty) {
		    if ('__defineGetter__' in avalon) {
		        defineProperty = function (obj, prop, desc) {
		            if ('value' in desc) {
		                obj[prop] = desc.value
		            }
		            if ('get' in desc) {
		                obj.__defineGetter__(prop, desc.get)
		            }
		            if ('set' in desc) {
		                obj.__defineSetter__(prop, desc.set)
		            }
		            return obj
		        }
		        defineProperties = function (obj, descs) {
		            for (var prop in descs) {
		                if (descs.hasOwnProperty(prop)) {
		                    defineProperty(obj, prop, descs[prop])
		                }
		            }
		            return obj
		        }
		    }
		    if (avalon.msie) {
		        var VBClassPool = {}
		        window.execScript([// jshint ignore:line
		            'Function parseVB(code)',
		            '\tExecuteGlobal(code)',
		            'End Function' //转换一段文本为VB代码
		        ].join('\n'), 'VBScript');
		        
		        function VBMediator(instance, accessors, name, value) {// jshint ignore:line
		            var accessor = accessors[name]
		            if (arguments.length === 4) {
		                accessor.set.call(instance, value)
		            } else {
		                return accessor.get.call(instance)
		            }
		        }
		        defineProperties = function (name, accessors, properties) {
		            // jshint ignore:line
		            var buffer = []
		            buffer.push(
		                    '\r\n\tPrivate [__data__], [__proxy__]',
		                    '\tPublic Default Function [__const__](d' + expose + ', p' + expose + ')',
		                    '\t\tSet [__data__] = d' + expose + ': set [__proxy__] = p' + expose,
		                    '\t\tSet [__const__] = Me', //链式调用
		                    '\tEnd Function')
		            //添加普通属性,因为VBScript对象不能像JS那样随意增删属性，必须在这里预先定义好
		            var uniq = {
		               __proxy__: true,
		               __data__: true,
		               __const__: true
		            }

		            //添加访问器属性 
		            for (name in accessors) {
		                uniq[name] = true
		                buffer.push(
		                        //由于不知对方会传入什么,因此set, let都用上
		                        '\tPublic Property Let [' + name + '](val' + expose + ')', //setter
		                        '\t\tCall [__proxy__](Me,[__data__], "' + name + '", val' + expose + ')',
		                        '\tEnd Property',
		                        '\tPublic Property Set [' + name + '](val' + expose + ')', //setter
		                        '\t\tCall [__proxy__](Me,[__data__], "' + name + '", val' + expose + ')',
		                        '\tEnd Property',
		                        '\tPublic Property Get [' + name + ']', //getter
		                        '\tOn Error Resume Next', //必须优先使用set语句,否则它会误将数组当字符串返回
		                        '\t\tSet[' + name + '] = [__proxy__](Me,[__data__],"' + name + '")',
		                        '\tIf Err.Number <> 0 Then',
		                        '\t\t[' + name + '] = [__proxy__](Me,[__data__],"' + name + '")',
		                        '\tEnd If',
		                        '\tOn Error Goto 0',
		                        '\tEnd Property')

		            }
		            for (name in properties) {
		                if (uniq[name] !== true) {
		                    uniq[name] = true
		                    buffer.push('\tPublic [' + name + ']')
		                }
		            }
		            for (name in $$skipArray) {
		                if (uniq[name] !== true) {
		                    uniq[name] = true
		                    buffer.push('\tPublic [' + name + ']')
		                }
		            }
		            buffer.push('\tPublic [' + 'hasOwnProperty' + ']')
		            buffer.push('End Class')
		            var body = buffer.join('\r\n')
		            var className = VBClassPool[body]
		            if (!className) {
		                className = avalon.makeHashCode('VBClass')
		                
		                window.parseVB('Class ' + className + body)
		                window.parseVB([
		                    'Function ' + className + 'Factory(a, b)', //创建实例并传入两个关键的参数
		                    '\tDim o',
		                    '\tSet o = (New ' + className + ')(a, b)',
		                    '\tSet ' + className + 'Factory = o',
		                    'End Function'
		                ].join('\r\n'))
		                VBClassPool[body] = className
		            }
		            var ret = window[className + 'Factory'](accessors, VBMediator) //得到其产品
		            return ret //得到其产品
		        }
		    }
		}

		module.exports = defineProperties


	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var avalon = __webpack_require__(1)

	__webpack_require__(3)

	avalon.component('ms-modal', {
	    template: __webpack_require__(11),
	    defaults: {
	        title: 'modal',
	        isShow: false,
	        cbProxy: function (ok) {
	            var cbName = ok ? 'onOk': 'onCancel' 
	            if (this.hasOwnProperty(cbName)) {
	                var ret = this[cbName]()
	                if (ret !== false || (ret && typeof ret.next === 'function')) {
	                    this.isShow = false
	                }
	            } else {
	                this.isShow = false
	            }
	        },
	        onReady: function(){
	            var el = this.$element
	            el.style.display = 'none'//强制阻止动画发生
	            
	            this.$watch('isShow', function(a){
	                if(a){
	                   document.body.style.overflow = 'hidden' 
	                }else{
	                   document.body.style.overflow = ''
	                }
	            })
	                   

	        }
	    },
	    soleSlot: 'content'
	})




/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./node_modules/css-loader/index.js!./node_modules/sass-loader/index.js!./style.scss", function() {
				var newContent = require("!!./node_modules/css-loader/index.js!./node_modules/sass-loader/index.js!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	exports.push([module.id, ".btn {\n  display: inline-block;\n  margin-bottom: 0;\n  font-weight: 500;\n  text-align: center;\n  cursor: pointer;\n  border: 1px solid #d9d9d9;\n  white-space: nowrap;\n  line-height: 1.5;\n  padding: 2px 14px;\n  font-size: 14px;\n  border-radius: 6px;\n  -webkit-user-select: none;\n  user-select: none;\n  color: #666;\n  outline: none;\n  background-color: #fff; }\n  .btn:hover {\n    background: #f7f7f7; }\n  .btn:active {\n    background: #efefef;\n    transition: none; }\n  .btn:disabled {\n    color: #ccc;\n    cursor: no-drop; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #2db7f5;\n  border-color: #2db7f5; }\n  .btn-primary:hover {\n    color: #fff;\n    background-color: #45bff6;\n    border-color: #45bff6; }\n  .btn-primary:active {\n    color: #fff;\n    background-color: #15aff4;\n    border-color: #15aff4;\n    transition: none; }\n  .btn-primary:disabled {\n    color: #fff;\n    background-color: #8ed8fa;\n    border-color: #8ed8fa;\n    transition: none;\n    cursor: no-drop; }\n\n.btn-success {\n  color: #fff;\n  background-color: #5FBC29;\n  border-color: #5FBC29; }\n  .btn-success:hover {\n    color: #fff;\n    background-color: #6ad12e;\n    border-color: #6ad12e; }\n  .btn-success:active {\n    color: #fff;\n    background-color: #54a724;\n    border-color: #54a724;\n    transition: none; }\n  .btn-success:disabled {\n    color: #fff;\n    background-color: #96df6c;\n    border-color: #96df6c;\n    transition: none;\n    cursor: no-drop; }\n\n.btn-info {\n  color: #fff;\n  background-color: #01B3CA;\n  border-color: #01B3CA; }\n  .btn-info:hover {\n    color: #fff;\n    background-color: #01c9e3;\n    border-color: #01c9e3; }\n  .btn-info:active {\n    color: #fff;\n    background-color: #019db1;\n    border-color: #019db1;\n    transition: none; }\n  .btn-info:disabled {\n    color: #fff;\n    background-color: #33e7fe;\n    border-color: #33e7fe;\n    transition: none;\n    cursor: no-drop; }\n\n.btn-warning {\n  color: #fff;\n  background-color: #FAC450;\n  border-color: #FAC450; }\n  .btn-warning:hover {\n    color: #fff;\n    background-color: #fbcc69;\n    border-color: #fbcc69; }\n  .btn-warning:active {\n    color: #fff;\n    background-color: #f9bc37;\n    border-color: #f9bc37;\n    transition: none; }\n  .btn-warning:disabled {\n    color: #fff;\n    background-color: #fde5b3;\n    border-color: #fde5b3;\n    transition: none;\n    cursor: no-drop; }\n\n.btn-danger {\n  color: #fff;\n  background-color: #E01515;\n  border-color: #E01515; }\n  .btn-danger:hover {\n    color: #fff;\n    background-color: #ea2424;\n    border-color: #ea2424; }\n  .btn-danger:active {\n    color: #fff;\n    background-color: #c91313;\n    border-color: #c91313;\n    transition: none; }\n  .btn-danger:disabled {\n    color: #fff;\n    background-color: #f16a6a;\n    border-color: #f16a6a;\n    transition: none;\n    cursor: no-drop; }\n\n.btn-lg {\n  padding: 6px 18px; }\n\n.btn-sm {\n  padding: 0px 10px; }\n\n.btn-block {\n  display: block;\n  width: 100%; }\n\n@font-face {\n  font-family: \"iconfont\";\n  src: url("+__webpack_require__(6)+");\n  /* IE9*/\n  src: url("+__webpack_require__(6)+"#iefix) format(\"embedded-opentype\"), url("+__webpack_require__(7)+") format(\"woff\"), url("+__webpack_require__(8)+") format(\"truetype\"), url("+__webpack_require__(9)+"#iconfont) format(\"svg\");\n  /* iOS 4.1- */ }\n\n.iconfont {\n  font-family: \"iconfont\" !important;\n  font-size: 14px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -webkit-text-stroke-width: 0.2px;\n  -moz-osx-font-smoothing: grayscale; }\n\n.icon-arrowleft:before {\n  content: \"\\e620\"; }\n\n.icon-arrowright:before {\n  content: \"\\e621\"; }\n\n.icon-arrowup:before {\n  content: \"\\e622\"; }\n\n.icon-arrowdown:before {\n  content: \"\\e623\"; }\n\n.icon-caretcircleleft:before {\n  content: \"\\e604\"; }\n\n.icon-caretcircleright:before {\n  content: \"\\e605\"; }\n\n.icon-caretcircleup:before {\n  content: \"\\e606\"; }\n\n.icon-caretcircledown:before {\n  content: \"\\e607\"; }\n\n.icon-forward:before {\n  content: \"\\e608\"; }\n\n.icon-backward:before {\n  content: \"\\e609\"; }\n\n.icon-caretcircleoleft:before {\n  content: \"\\e60b\"; }\n\n.icon-caretcircleoright:before {\n  content: \"\\e60d\"; }\n\n.icon-caretcircleodown:before {\n  content: \"\\e60e\"; }\n\n.icon-caretright:before {\n  content: \"\\e60a\"; }\n\n.icon-caretleft:before {\n  content: \"\\e60f\"; }\n\n.icon-caretup:before {\n  content: \"\\e610\"; }\n\n.icon-caretdown:before {\n  content: \"\\e611\"; }\n\n.icon-fastforward:before {\n  content: \"\\e612\"; }\n\n.icon-fastbackward:before {\n  content: \"\\e613\"; }\n\n.icon-stepbackward:before {\n  content: \"\\e614\"; }\n\n.icon-stepforward:before {\n  content: \"\\e615\"; }\n\n.icon-circleodown:before {\n  content: \"\\e617\"; }\n\n.icon-circleoup:before {\n  content: \"\\e618\"; }\n\n.icon-circleoleft:before {\n  content: \"\\e619\"; }\n\n.icon-circleoright:before {\n  content: \"\\e616\"; }\n\n.icon-circleright:before {\n  content: \"\\e61a\"; }\n\n.icon-circleup:before {\n  content: \"\\e61c\"; }\n\n.icon-playcircle:before {\n  content: \"\\e61e\"; }\n\n.icon-playcircleo:before {\n  content: \"\\e61f\"; }\n\n.icon-circleleft:before {\n  content: \"\\e61b\"; }\n\n.icon-right:before {\n  content: \"\\e600\"; }\n\n.icon-left:before {\n  content: \"\\e601\"; }\n\n.icon-up:before {\n  content: \"\\e602\"; }\n\n.icon-down:before {\n  content: \"\\e603\"; }\n\n.icon-reload:before {\n  content: \"\\e626\"; }\n\n.icon-doubleleft:before {\n  content: \"\\e624\"; }\n\n.icon-doubleright:before {\n  content: \"\\e625\"; }\n\n.icon-retweet:before {\n  content: \"\\e627\"; }\n\n.icon-shrink:before {\n  content: \"\\e628\"; }\n\n.icon-arrowsalt:before {\n  content: \"\\e629\"; }\n\n.icon-rollback:before {\n  content: \"\\e62a\"; }\n\n.icon-verticleleft:before {\n  content: \"\\e62b\"; }\n\n.icon-verticleright:before {\n  content: \"\\e62c\"; }\n\n.icon-cross:before {\n  content: \"\\e62d\"; }\n\n.icon-check:before {\n  content: \"\\e62e\"; }\n\n.icon-checkcircle:before {\n  content: \"\\e62f\"; }\n\n.icon-checkcircleo:before {\n  content: \"\\e630\"; }\n\n.icon-crosscircle:before {\n  content: \"\\e631\"; }\n\n.icon-crosscircleo:before {\n  content: \"\\e632\"; }\n\n.icon-exclamation:before {\n  content: \"\\e633\"; }\n\n.icon-exclamationcircle:before {\n  content: \"\\e634\"; }\n\n.icon-exclamationcircleo:before {\n  content: \"\\e635\"; }\n\n.icon-info:before {\n  content: \"\\e636\"; }\n\n.icon-infocircle:before {\n  content: \"\\e637\"; }\n\n.icon-infocircleo:before {\n  content: \"\\e638\"; }\n\n.icon-minuscircle:before {\n  content: \"\\e639\"; }\n\n.icon-minuscircleo:before {\n  content: \"\\e63a\"; }\n\n.icon-minus:before {\n  content: \"\\e63b\"; }\n\n.icon-pluscircleo:before {\n  content: \"\\e63c\"; }\n\n.icon-pluscircle:before {\n  content: \"\\e63d\"; }\n\n.icon-plus:before {\n  content: \"\\e63e\"; }\n\n.icon-swapleft:before {\n  content: \"\\e63f\"; }\n\n.icon-swapright:before {\n  content: \"\\e640\"; }\n\n.icon-swap:before {\n  content: \"\\e641\"; }\n\n.icon-clockcircle:before {\n  content: \"\\e642\"; }\n\n.icon-clockcircleo:before {\n  content: \"\\e643\"; }\n\n.icon-pausecircle:before {\n  content: \"\\e644\"; }\n\n.icon-pausecircleo:before {\n  content: \"\\e645\"; }\n\n.icon-pause:before {\n  content: \"\\e646\"; }\n\n.icon-questioncircle:before {\n  content: \"\\e647\"; }\n\n.icon-questioncircleo:before {\n  content: \"\\e648\"; }\n\n.icon-question:before {\n  content: \"\\e649\"; }\n\n.icon-areachart:before {\n  content: \"\\e64c\"; }\n\n.icon-appstore:before {\n  content: \"\\e64d\"; }\n\n.icon-apple:before {\n  content: \"\\e64e\"; }\n\n.icon-android:before {\n  content: \"\\e64f\"; }\n\n.icon-bars:before {\n  content: \"\\e650\"; }\n\n.icon-barchart:before {\n  content: \"\\e651\"; }\n\n.icon-calendar:before {\n  content: \"\\e654\"; }\n\n.icon-book:before {\n  content: \"\\e655\"; }\n\n.icon-chrome:before {\n  content: \"\\e65c\"; }\n\n.icon-code:before {\n  content: \"\\e65d\"; }\n\n.icon-creditcard:before {\n  content: \"\\e65f\"; }\n\n.icon-customerservice:before {\n  content: \"\\e65e\"; }\n\n.icon-copy:before {\n  content: \"\\e660\"; }\n\n.icon-delete:before {\n  content: \"\\e661\"; }\n\n.icon-ellipsis:before {\n  content: \"\\e667\"; }\n\n.icon-edit:before {\n  content: \"\\e668\"; }\n\n.icon-export:before {\n  content: \"\\e669\"; }\n\n.icon-exception:before {\n  content: \"\\e66a\"; }\n\n.icon-file:before {\n  content: \"\\e66b\"; }\n\n.icon-filetext:before {\n  content: \"\\e66c\"; }\n\n.icon-filter:before {\n  content: \"\\e66f\"; }\n\n.icon-folder:before {\n  content: \"\\e670\"; }\n\n.icon-frowncircle:before {\n  content: \"\\e672\"; }\n\n.icon-frown:before {\n  content: \"\\e673\"; }\n\n.icon-smilecircle:before {\n  content: \"\\e676\"; }\n\n.icon-smile:before {\n  content: \"\\e677\"; }\n\n.icon-mehcircle:before {\n  content: \"\\e678\"; }\n\n.icon-meh:before {\n  content: \"\\e679\"; }\n\n.icon-github:before {\n  content: \"\\e674\"; }\n\n.icon-laptop:before {\n  content: \"\\e67a\"; }\n\n.icon-inbox:before {\n  content: \"\\e67b\"; }\n\n.icon-ie:before {\n  content: \"\\e67c\"; }\n\n.icon-home:before {\n  content: \"\\e67d\"; }\n\n.icon-linechart:before {\n  content: \"\\e67f\"; }\n\n.icon-link:before {\n  content: \"\\e67e\"; }\n\n.icon-logout:before {\n  content: \"\\e681\"; }\n\n.icon-mail:before {\n  content: \"\\e682\"; }\n\n.icon-menuunfold:before {\n  content: \"\\e683\"; }\n\n.icon-menufold:before {\n  content: \"\\e684\"; }\n\n.icon-mobile:before {\n  content: \"\\e685\"; }\n\n.icon-notification:before {\n  content: \"\\e686\"; }\n\n.icon-paperclip:before {\n  content: \"\\e687\"; }\n\n.icon-phone:before {\n  content: \"\\e688\"; }\n\n.icon-picture:before {\n  content: \"\\e689\"; }\n\n.icon-piechart:before {\n  content: \"\\e68a\"; }\n\n.icon-poweroff:before {\n  content: \"\\e68b\"; }\n\n.icon-setting:before {\n  content: \"\\e68d\"; }\n\n.icon-sharealt:before {\n  content: \"\\e68e\"; }\n\n.icon-search:before {\n  content: \"\\e690\"; }\n\n.icon-poweroff1:before {\n  content: \"\\e691\"; }\n\n.icon-solution:before {\n  content: \"\\e68f\"; }\n\n.icon-tablet:before {\n  content: \"\\e695\"; }\n\n.icon-team:before {\n  content: \"\\e680\"; }\n\n.icon-totop:before {\n  content: \"\\e69a\"; }\n\n.icon-videocamera:before {\n  content: \"\\e69b\"; }\n\n.icon-user:before {\n  content: \"\\e69c\"; }\n\n.icon-save:before {\n  content: \"\\e69e\"; }\n\n.icon-unlock:before {\n  content: \"\\e69f\"; }\n\n.icon-shoppingcart:before {\n  content: \"\\e692\"; }\n\n.icon-windows:before {\n  content: \"\\e6a0\"; }\n\n.icon-aliwangwango:before {\n  content: \"\\e64a\"; }\n\n.icon-aliwangwang:before {\n  content: \"\\e64b\"; }\n\n.icon-camerao:before {\n  content: \"\\e652\"; }\n\n.icon-camera:before {\n  content: \"\\e653\"; }\n\n.icon-eyeo:before {\n  content: \"\\e66d\"; }\n\n.icon-eye:before {\n  content: \"\\e66e\"; }\n\n.icon-enviroment:before {\n  content: \"\\e665\"; }\n\n.icon-enviromento:before {\n  content: \"\\e666\"; }\n\n.icon-staro:before {\n  content: \"\\e693\"; }\n\n.icon-star:before {\n  content: \"\\e694\"; }\n\n.icon-tags:before {\n  content: \"\\e656\"; }\n\n.icon-tagso:before {\n  content: \"\\e657\"; }\n\n.icon-tag:before {\n  content: \"\\e658\"; }\n\n.icon-tago:before {\n  content: \"\\e659\"; }\n\n.icon-cloud:before {\n  content: \"\\e65a\"; }\n\n.icon-clouddownload:before {\n  content: \"\\e65b\"; }\n\n.icon-cloudupload:before {\n  content: \"\\e696\"; }\n\n.icon-clouduploado:before {\n  content: \"\\e697\"; }\n\n.icon-clouddownloado:before {\n  content: \"\\e698\"; }\n\n.icon-cloudo:before {\n  content: \"\\e699\"; }\n\n.icon-iconfontcaretcircleoup:before {\n  content: \"\\e60c\"; }\n\n.icon-loading:before {\n  content: \"\\e6a1\"; }\n\n.icon-dislike:before {\n  content: \"\\e6a2\"; }\n\n.icon-like:before {\n  content: \"\\e6a3\"; }\n\n.icon-message:before {\n  content: \"\\e6a4\"; }\n\n.icon-download:before {\n  content: \"\\e663\"; }\n\n.icon-upload:before {\n  content: \"\\e664\"; }\n\n.icon-paycircle:before {\n  content: \"\\e6a8\"; }\n\n.icon-paycircleo:before {\n  content: \"\\e6a9\"; }\n\n.icon-exclefile:before {\n  content: \"\\e6ac\"; }\n\n.icon-pdffile:before {\n  content: \"\\e6ab\"; }\n\n.icon-pptfile:before {\n  content: \"\\e6a7\"; }\n\n.icon-jpgfile:before {\n  content: \"\\e6aa\"; }\n\n.icon-unknowfile:before {\n  content: \"\\e6a6\"; }\n\n.icon-minussquareo:before {\n  content: \"\\e6ad\"; }\n\n.icon-plussquareo:before {\n  content: \"\\e6ae\"; }\n\n.icon-iconfontdesktop:before {\n  content: \"\\e662\"; }\n\n.icon-hdd:before {\n  content: \"\\e675\"; }\n\n.icon-folderopen:before {\n  content: \"\\e671\"; }\n\n.icon-circledown:before {\n  content: \"\\e61d\"; }\n\n.icon-qrcode:before {\n  content: \"\\e6a5\"; }\n\n.icon-scan:before {\n  content: \"\\e6af\"; }\n\n.icon-heart:before {\n  content: \"\\e68c\"; }\n\n.icon-hearto:before {\n  content: \"\\e6b0\"; }\n\n.icon-calculator:before {\n  content: \"\\e6b1\"; }\n\n.icon-appstoreo:before {\n  content: \"\\e6b2\"; }\n\n.icon-lock:before {\n  content: \"\\e69d\"; }\n\n.modal-mask {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(55, 55, 55, 0.6);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.confirm-content {\n  padding-left: 30px;\n  padding-top: 30px;\n  padding-bottom: 30px; }\n\n.modal-confirm {\n  width: 400px;\n  box-sizing: border-box;\n  padding: 30px 40px;\n  background-color: #fff;\n  border-radius: 6px;\n  transition: transform .3s ease; }\n  .modal-confirm i {\n    color: #fa0;\n    font-size: 24px;\n    position: relative;\n    top: 2px; }\n  .modal-confirm .confirm-btns {\n    text-align: right; }\n\n.modal-box {\n  width: 520px;\n  box-sizing: border-box;\n  background-color: #fff;\n  border-radius: 6px; }\n\n@media only screen and (max-width: 640px) {\n  .modal-confirm {\n    width: 100%;\n    margin: 0 20px;\n    padding: 10px 20px; }\n  .modal-box {\n    width: 100%;\n    margin: 0 20px; } }\n\n.modal-header {\n  padding: 13px 18px 14px 16px;\n  border-bottom: 1px solid #e9e9e9;\n  position: relative; }\n  .modal-header i {\n    position: absolute;\n    right: 20px;\n    top: 15px;\n    font-size: 14px;\n    cursor: pointer; }\n  .modal-header h3 {\n    font-size: 14px; }\n\n.modal-body {\n  padding: 16px; }\n\n.modal-footer {\n  padding: 10px 18px 10px 10px;\n  border-top: 1px solid #e9e9e9;\n  background: #fff;\n  border-radius: 0 0 6px 6px;\n  text-align: right; }\n\n.modal-enter {\n  opacity: 0; }\n\n.modal-enter-active {\n  opacity: 1; }\n  .modal-enter-active .modal-confirm {\n    transform: scale(1.1); }\n  .modal-enter-active .modal-box {\n    transform: scale(1.1); }\n\n.modal-leave {\n  opacity: 1; }\n\n.modal-leave-active {\n  opacity: 0; }\n  .modal-leave-active .modal-confirm {\n    transform: scale(1.1); }\n  .modal-leave-active .modal-box {\n    transform: scale(1.1); }\n\n.modal-enter, .modal-leave {\n  transition: all .3s ease; }\n", ""]);

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = function() {
		var list = [];
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
		return list;
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "data:application/vnd.ms-fontobject;base64,CgoKCjwhRE9DVFlQRSBodG1sPgo8aHRtbCBsYW5nPSJlbiIgY2xhc3M9IiBpcy1jb3B5LWVuYWJsZWQgZW1vamktc2l6ZS1ib29zdCBpcy11MmYtZW5hYmxlZCI+CiAgPGhlYWQgcHJlZml4PSJvZzogaHR0cDovL29ncC5tZS9ucyMgZmI6IGh0dHA6Ly9vZ3AubWUvbnMvZmIjIG9iamVjdDogaHR0cDovL29ncC5tZS9ucy9vYmplY3QjIGFydGljbGU6IGh0dHA6Ly9vZ3AubWUvbnMvYXJ0aWNsZSMgcHJvZmlsZTogaHR0cDovL29ncC5tZS9ucy9wcm9maWxlIyI+CiAgICA8bWV0YSBjaGFyc2V0PSd1dGYtOCc+CgogICAgPGxpbmsgY3Jvc3NvcmlnaW49ImFub255bW91cyIgaHJlZj0iaHR0cHM6Ly9hc3NldHMtY2RuLmdpdGh1Yi5jb20vYXNzZXRzL2ZyYW1ld29ya3MtMDZlNGQ4ZjU5ZjViOTI3ZjEzOTE5YzQyM2Y0MGYwODg4ZjM3ZjlhZjdmNDI2ZTQwMjA5NDhiMDBiOTM3MTA1OS5jc3MiIGludGVncml0eT0ic2hhMjU2LUJ1VFk5Wjlia244VGtaeENQMER3aUk4MythOS9RbTVBSUpTTEFMazNFRms9IiBtZWRpYT0iYWxsIiByZWw9InN0eWxlc2hlZXQiIC8+CiAgICA8bGluayBjcm9zc29yaWdpbj0iYW5vbnltb3VzIiBocmVmPSJodHRwczovL2Fzc2V0cy1jZG4uZ2l0aHViLmNvbS9hc3NldHMvZ2l0aHViLWJkMGM2MzhjNjE5NWUwYmIzYmU5MWU2OGY2NDEzYTM4Yjc2YmE3OTI1OGQxMzY3NWNhMmJhZGE1NDkzY2M3YTIuY3NzIiBpbnRlZ3JpdHk9InNoYTI1Ni12UXhqakdHVjRMczc2UjVvOWtFNk9MZHJwNUpZMFRaMXlpdXRwVWs4eDZJPSIgbWVkaWE9ImFsbCIgcmVsPSJzdHlsZXNoZWV0IiAvPgogICAgCiAgICAKICAgIAogICAgCiAgICAKCiAgICA8bGluayBhcz0ic2NyaXB0IiBocmVmPSJodHRwczovL2Fzc2V0cy1jZG4uZ2l0aHViLmNvbS9hc3NldHMvZnJhbWV3b3Jrcy1mOWE0MDYxN2U1ZWE3MTM0MmRjNTcxMDM1NTRiMDdhM2MxZWRjODg3MTJiMDRkZTFhMDQwYWVkNDQ4OTFhMTFkLmpzIiByZWw9InByZWxvYWQiIC8+CiAgICAKICAgIDxsaW5rIGFzPSJzY3JpcHQiIGhyZWY9Imh0dHBzOi8vYXNzZXRzLWNkbi5naXRodWIuY29tL2Fzc2V0cy9naXRodWItMTVhMDExYmMxN2FlNThjMThjYjc0NTdkNjE5NDI5MDRhM2Y4N2Q3ZDVkNjVmNzNlYTZlYmM0Y2ZhNjBmM2RiNy5qcyIgcmVsPSJwcmVsb2FkIiAvPgoKICAgIDxtZXRhIGh0dHAtZXF1aXY9IlgtVUEtQ29tcGF0aWJsZSIgY29udGVudD0iSUU9ZWRnZSI+CiAgICA8bWV0YSBodHRwLWVxdWl2PSJDb250ZW50LUxhbmd1YWdlIiBjb250ZW50PSJlbiI+CiAgICA8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoIj4KICAgIAogICAgCiAgICA8dGl0bGU+d2ViLXN0eWxlL2ljb25mb250LmVvdCBhdCBtYXN0ZXIgwrcgY3ljZ2l0L3dlYi1zdHlsZTwvdGl0bGU+CiAgICA8bGluayByZWw9InNlYXJjaCIgdHlwZT0iYXBwbGljYXRpb24vb3BlbnNlYXJjaGRlc2NyaXB0aW9uK3htbCIgaHJlZj0iL29wZW5zZWFyY2gueG1sIiB0aXRsZT0iR2l0SHViIj4KICAgIDxsaW5rIHJlbD0iZmx1aWQtaWNvbiIgaHJlZj0iaHR0cHM6Ly9naXRodWIuY29tL2ZsdWlkaWNvbi5wbmciIHRpdGxlPSJHaXRIdWIiPgogICAgPGxpbmsgcmVsPSJhcHBsZS10b3VjaC1pY29uIiBocmVmPSIvYXBwbGUtdG91Y2gtaWNvbi5wbmciPgogICAgPGxpbmsgcmVsPSJhcHBsZS10b3VjaC1pY29uIiBzaXplcz0iNTd4NTciIGhyZWY9Ii9hcHBsZS10b3VjaC1pY29uLTU3eDU3LnBuZyI+CiAgICA8bGluayByZWw9ImFwcGxlLXRvdWNoLWljb24iIHNpemVzPSI2MHg2MCIgaHJlZj0iL2FwcGxlLXRvdWNoLWljb24tNjB4NjAucG5nIj4KICAgIDxsaW5rIHJlbD0iYXBwbGUtdG91Y2gtaWNvbiIgc2l6ZXM9IjcyeDcyIiBocmVmPSIvYXBwbGUtdG91Y2gtaWNvbi03Mng3Mi5wbmciPgogICAgPGxpbmsgcmVsPSJhcHBsZS10b3VjaC1pY29uIiBzaXplcz0iNzZ4NzYiIGhyZWY9Ii9hcHBsZS10b3VjaC1pY29uLTc2eDc2LnBuZyI+CiAgICA8bGluayByZWw9ImFwcGxlLXRvdWNoLWljb24iIHNpemVzPSIxMTR4MTE0IiBocmVmPSIvYXBwbGUtdG91Y2gtaWNvbi0xMTR4MTE0LnBuZyI+CiAgICA8bGluayByZWw9ImFwcGxlLXRvdWNoLWljb24iIHNpemVzPSIxMjB4MTIwIiBocmVmPSIvYXBwbGUtdG91Y2gtaWNvbi0xMjB4MTIwLnBuZyI+CiAgICA8bGluayByZWw9ImFwcGxlLXRvdWNoLWljb24iIHNpemVzPSIxNDR4MTQ0IiBocmVmPSIvYXBwbGUtdG91Y2gtaWNvbi0xNDR4MTQ0LnBuZyI+CiAgICA8bGluayByZWw9ImFwcGxlLXRvdWNoLWljb24iIHNpemVzPSIxNTJ4MTUyIiBocmVmPSIvYXBwbGUtdG91Y2gtaWNvbi0xNTJ4MTUyLnBuZyI+CiAgICA8bGluayByZWw9ImFwcGxlLXRvdWNoLWljb24iIHNpemVzPSIxODB4MTgwIiBocmVmPSIvYXBwbGUtdG91Y2gtaWNvbi0xODB4MTgwLnBuZyI+CiAgICA8bWV0YSBwcm9wZXJ0eT0iZmI6YXBwX2lkIiBjb250ZW50PSIxNDAxNDg4NjkzNDM2NTI4Ij4KCiAgICAgIDxtZXRhIGNvbnRlbnQ9Imh0dHBzOi8vYXZhdGFyczAuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvMTMxMTIwMTQ/dj0zJmFtcDtzPTQwMCIgbmFtZT0idHdpdHRlcjppbWFnZTpzcmMiIC8+PG1ldGEgY29udGVudD0iQGdpdGh1YiIgbmFtZT0idHdpdHRlcjpzaXRlIiAvPjxtZXRhIGNvbnRlbnQ9InN1bW1hcnkiIG5hbWU9InR3aXR0ZXI6Y2FyZCIgLz48bWV0YSBjb250ZW50PSJjeWNnaXQvd2ViLXN0eWxlIiBuYW1lPSJ0d2l0dGVyOnRpdGxlIiAvPjxtZXRhIGNvbnRlbnQ9IndlYi1zdHlsZSAtIHdlYuWFrOeUqOagt+W8j+e7hOS7tuW6kyIgbmFtZT0idHdpdHRlcjpkZXNjcmlwdGlvbiIgLz4KICAgICAgPG1ldGEgY29udGVudD0iaHR0cHM6Ly9hdmF0YXJzMC5naXRodWJ1c2VyY29udGVudC5jb20vdS8xMzExMjAxND92PTMmYW1wO3M9NDAwIiBwcm9wZXJ0eT0ib2c6aW1hZ2UiIC8+PG1ldGEgY29udGVudD0iR2l0SHViIiBwcm9wZXJ0eT0ib2c6c2l0ZV9uYW1lIiAvPjxtZXRhIGNvbnRlbnQ9Im9iamVjdCIgcHJvcGVydHk9Im9nOnR5cGUiIC8+PG1ldGEgY29udGVudD0iY3ljZ2l0L3dlYi1zdHlsZSIgcHJvcGVydHk9Im9nOnRpdGxlIiAvPjxtZXRhIGNvbnRlbnQ9Imh0dHBzOi8vZ2l0aHViLmNvbS9jeWNnaXQvd2ViLXN0eWxlIiBwcm9wZXJ0eT0ib2c6dXJsIiAvPjxtZXRhIGNvbnRlbnQ9IndlYi1zdHlsZSAtIHdlYuWFrOeUqOagt+W8j+e7hOS7tuW6kyIgcHJvcGVydHk9Im9nOmRlc2NyaXB0aW9uIiAvPgogICAgICA8bWV0YSBuYW1lPSJicm93c2VyLXN0YXRzLXVybCIgY29udGVudD0iaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9fcHJpdmF0ZS9icm93c2VyL3N0YXRzIj4KICAgIDxtZXRhIG5hbWU9ImJyb3dzZXItZXJyb3JzLXVybCIgY29udGVudD0iaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9fcHJpdmF0ZS9icm93c2VyL2Vycm9ycyI+CiAgICA8bGluayByZWw9ImFzc2V0cyIgaHJlZj0iaHR0cHM6Ly9hc3NldHMtY2RuLmdpdGh1Yi5jb20vIj4KICAgIDxsaW5rIHJlbD0id2ViLXNvY2tldCIgaHJlZj0id3NzOi8vbGl2ZS5naXRodWIuY29tL19zb2NrZXRzL01Ua3dPRFEyT21JNU56UXhNbVl6T1RZNVpqZGlOVGt5TWprd016YzRZV1JtTVRVeU9UYzRPakE1TjJGbFltRXlObVppWVRNMU1qSTBPVFl6WmprNVpEY3lOelZsTkRGaE9UVXhabVZoTUdNMVpHWTJNV0l6WWpSaU9EazNZakJsTkRnd09EWm1ORGM9LS03OWE4ODI0Y2NlMmFiMTAyNjk4MDExYjhhMjJjYjQwMzdlYTUxZmQ5Ij4KICAgIDxtZXRhIG5hbWU9InBqYXgtdGltZW91dCIgY29udGVudD0iMTAwMCI+CiAgICA8bGluayByZWw9InN1ZG8tbW9kYWwiIGhyZWY9Ii9zZXNzaW9ucy9zdWRvX21vZGFsIj4KCiAgICA8bWV0YSBuYW1lPSJtc2FwcGxpY2F0aW9uLVRpbGVJbWFnZSIgY29udGVudD0iL3dpbmRvd3MtdGlsZS5wbmciPgogICAgPG1ldGEgbmFtZT0ibXNhcHBsaWNhdGlvbi1UaWxlQ29sb3IiIGNvbnRlbnQ9IiNmZmZmZmYiPgogICAgPG1ldGEgbmFtZT0ic2VsZWN0ZWQtbGluayIgdmFsdWU9InJlcG9fc291cmNlIiBkYXRhLXBqYXgtdHJhbnNpZW50PgoKICAgIDxtZXRhIG5hbWU9Imdvb2dsZS1zaXRlLXZlcmlmaWNhdGlvbiIgY29udGVudD0iS1Q1Z3M4aDB3dmFhZ0xLQVZXcThiYmVOd25aWksxcjFYUXlzWDN4dXJMVSI+CjxtZXRhIG5hbWU9Imdvb2dsZS1zaXRlLXZlcmlmaWNhdGlvbiIgY29udGVudD0iWnpoVnlFRndiN3czZTAtdU9UbHRtOEpzY2syRjVTdFZpaEQwZXh3MmZzQSI+CiAgICA8bWV0YSBuYW1lPSJnb29nbGUtYW5hbHl0aWNzIiBjb250ZW50PSJVQS0zNzY5NjkxLTIiPgoKPG1ldGEgY29udGVudD0iY29sbGVjdG9yLmdpdGh1YmFwcC5jb20iIG5hbWU9Im9jdG9seXRpY3MtaG9zdCIgLz48bWV0YSBjb250ZW50PSJnaXRodWIiIG5hbWU9Im9jdG9seXRpY3MtYXBwLWlkIiAvPjxtZXRhIGNvbnRlbnQ9Ijc4MzQxODk2OjEyRDQ6MTk1QjBCMjA6NTc3MDBCMjYiIG5hbWU9Im9jdG9seXRpY3MtZGltZW5zaW9uLXJlcXVlc3RfaWQiIC8+PG1ldGEgY29udGVudD0iMTkwODQ2IiBuYW1lPSJvY3RvbHl0aWNzLWFjdG9yLWlkIiAvPjxtZXRhIGNvbnRlbnQ9IlJ1YnlMb3V2cmUiIG5hbWU9Im9jdG9seXRpY3MtYWN0b3ItbG9naW4iIC8+PG1ldGEgY29udGVudD0iYTEwNGQ4ZmEzNWI3OWNlYWFkNzU1YWVmNjQ1MGUyMjUwMTcxMWYyMzdiM2Q5YmU5YTBmMzc4MTAyMmZlNDJjYyIgbmFtZT0ib2N0b2x5dGljcy1hY3Rvci1oYXNoIiAvPgo8bWV0YSBjb250ZW50PSIvJmx0O3VzZXItbmFtZSZndDsvJmx0O3JlcG8tbmFtZSZndDsvYmxvYi9zaG93IiBkYXRhLXBqYXgtdHJhbnNpZW50PSJ0cnVlIiBuYW1lPSJhbmFseXRpY3MtbG9jYXRpb24iIC8+CgoKCiAgPG1ldGEgY2xhc3M9ImpzLWdhLXNldCIgbmFtZT0iZGltZW5zaW9uMSIgY29udGVudD0iTG9nZ2VkIEluIj4KCgoKICAgICAgICA8bWV0YSBuYW1lPSJob3N0bmFtZSIgY29udGVudD0iZ2l0aHViLmNvbSI+CiAgICA8bWV0YSBuYW1lPSJ1c2VyLWxvZ2luIiBjb250ZW50PSJSdWJ5TG91dnJlIj4KCiAgICAgICAgPG1ldGEgbmFtZT0iZXhwZWN0ZWQtaG9zdG5hbWUiIGNvbnRlbnQ9ImdpdGh1Yi5jb20iPgogICAgICA8bWV0YSBuYW1lPSJqcy1wcm94eS1zaXRlLWRldGVjdGlvbi1wYXlsb2FkIiBjb250ZW50PSJNelZqTm1NMU5XUmhNak0xTlRCbE1EWmpZems1TVRRMlpqSXdNVEEwTm1Vd05XRmhaV0psTkRabU9ESXpOMkZoWVRGak9UVTNOak5tWVdGbU5HVXpPSHg3SW5KbGJXOTBaVjloWkdSeVpYTnpJam9pTVRJd0xqVXlMakkwTGpFMU1DSXNJbkpsY1hWbGMzUmZhV1FpT2lJM09ETTBNVGc1TmpveE1rUTBPakU1TlVJd1FqSXdPalUzTnpBd1FqSTJJaXdpZEdsdFpYTjBZVzF3SWpveE5EWTJPVFl3TmpnMWZRPT0iPgoKCiAgICAgIDxsaW5rIHJlbD0ibWFzay1pY29uIiBocmVmPSJodHRwczovL2Fzc2V0cy1jZG4uZ2l0aHViLmNvbS9waW5uZWQtb2N0b2NhdC5zdmciIGNvbG9yPSIjNDA3OGMwIj4KICAgICAgPGxpbmsgcmVsPSJpY29uIiB0eXBlPSJpbWFnZS94LWljb24iIGhyZWY9Imh0dHBzOi8vYXNzZXRzLWNkbi5naXRodWIuY29tL2Zhdmljb24uaWNvIj4KCiAgICA8bWV0YSBuYW1lPSJodG1sLXNhZmUtbm9uY2UiIGNvbnRlbnQ9IjQ5MDdjYzA2ZWRiMzNmZTMzMWU2MmQwMmYzOTk3YWYzYjlmNTMwNWQiPgogICAgPG1ldGEgY29udGVudD0iMzYwMTU2NDJkMDQ5YjViNDY2NzBkZDM1ZGFhYjBiZTFjOTc1Yjk4NCIgbmFtZT0iZm9ybS1ub25jZSIgLz4KCiAgICA8bWV0YSBodHRwLWVxdWl2PSJ4LXBqYXgtdmVyc2lvbiIgY29udGVudD0iMDhiZDBlYjkzMGYyMzcyMmQ5NzBkZDdmNzdhNzFlYmEiPgogICAgCgogICAgICAKICA8bWV0YSBuYW1lPSJkZXNjcmlwdGlvbiIgY29udGVudD0id2ViLXN0eWxlIC0gd2Vi5YWs55So5qC35byP57uE5Lu25bqTIj4KICA8bWV0YSBuYW1lPSJnby1pbXBvcnQiIGNvbnRlbnQ9ImdpdGh1Yi5jb20vY3ljZ2l0L3dlYi1zdHlsZSBnaXQgaHR0cHM6Ly9naXRodWIuY29tL2N5Y2dpdC93ZWItc3R5bGUuZ2l0Ij4KCiAgPG1ldGEgY29udGVudD0iMTMxMTIwMTQiIG5hbWU9Im9jdG9seXRpY3MtZGltZW5zaW9uLXVzZXJfaWQiIC8+PG1ldGEgY29udGVudD0iY3ljZ2l0IiBuYW1lPSJvY3RvbHl0aWNzLWRpbWVuc2lvbi11c2VyX2xvZ2luIiAvPjxtZXRhIGNvbnRlbnQ9IjU5NzI1MTI1IiBuYW1lPSJvY3RvbHl0aWNzLWRpbWVuc2lvbi1yZXBvc2l0b3J5X2lkIiAvPjxtZXRhIGNvbnRlbnQ9ImN5Y2dpdC93ZWItc3R5bGUiIG5hbWU9Im9jdG9seXRpY3MtZGltZW5zaW9uLXJlcG9zaXRvcnlfbndvIiAvPjxtZXRhIGNvbnRlbnQ9InRydWUiIG5hbWU9Im9jdG9seXRpY3MtZGltZW5zaW9uLXJlcG9zaXRvcnlfcHVibGljIiAvPjxtZXRhIGNvbnRlbnQ9ImZhbHNlIiBuYW1lPSJvY3RvbHl0aWNzLWRpbWVuc2lvbi1yZXBvc2l0b3J5X2lzX2ZvcmsiIC8+PG1ldGEgY29udGVudD0iNTk3MjUxMjUiIG5hbWU9Im9jdG9seXRpY3MtZGltZW5zaW9uLXJlcG9zaXRvcnlfbmV0d29ya19yb290X2lkIiAvPjxtZXRhIGNvbnRlbnQ9ImN5Y2dpdC93ZWItc3R5bGUiIG5hbWU9Im9jdG9seXRpY3MtZGltZW5zaW9uLXJlcG9zaXRvcnlfbmV0d29ya19yb290X253byIgLz4KICA8bGluayBocmVmPSJodHRwczovL2dpdGh1Yi5jb20vY3ljZ2l0L3dlYi1zdHlsZS9jb21taXRzL21hc3Rlci5hdG9tIiByZWw9ImFsdGVybmF0ZSIgdGl0bGU9IlJlY2VudCBDb21taXRzIHRvIHdlYi1zdHlsZTptYXN0ZXIiIHR5cGU9ImFwcGxpY2F0aW9uL2F0b20reG1sIj4KCgogICAgICA8bGluayByZWw9ImNhbm9uaWNhbCIgaHJlZj0iaHR0cHM6Ly9naXRodWIuY29tL2N5Y2dpdC93ZWItc3R5bGUvYmxvYi9tYXN0ZXIvc3JjL2ZvbnRzL2ljb25mb250LmVvdCIgZGF0YS1wamF4LXRyYW5zaWVudD4KICA8L2hlYWQ+CgoKICA8Ym9keSBjbGFzcz0ibG9nZ2VkLWluICAgZW52LXByb2R1Y3Rpb24gbWFjaW50b3NoIHZpcy1wdWJsaWMgcGFnZS1ibG9iIj4KICAgIDxkaXYgaWQ9ImpzLXBqYXgtbG9hZGVyLWJhciIgY2xhc3M9InBqYXgtbG9hZGVyLWJhciI+PC9kaXY+CiAgICA8YSBocmVmPSIjc3RhcnQtb2YtY29udGVudCIgdGFiaW5kZXg9IjEiIGNsYXNzPSJhY2Nlc3NpYmlsaXR5LWFpZCBqcy1za2lwLXRvLWNvbnRlbnQiPlNraXAgdG8gY29udGVudDwvYT4KCiAgICAKICAgIAogICAgCgoKCiAgICAgICAgPGRpdiBjbGFzcz0iaGVhZGVyIGhlYWRlci1sb2dnZWQtaW4gdHJ1ZSIgcm9sZT0iYmFubmVyIj4KICA8ZGl2IGNsYXNzPSJjb250YWluZXIgY2xlYXJmaXgiPgoKICAgIDxhIGNsYXNzPSJoZWFkZXItbG9nby1pbnZlcnRvY2F0IiBocmVmPSJodHRwczovL2dpdGh1Yi5jb20vIiBkYXRhLWhvdGtleT0iZyBkIiBhcmlhLWxhYmVsPSJIb21lcGFnZSIgZGF0YS1nYS1jbGljaz0iSGVhZGVyLCBnbyB0byBkYXNoYm9hcmQsIGljb246bG9nbyI+CiAgPHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1tYXJrLWdpdGh1YiIgaGVpZ2h0PSIyOCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTYgMTYiIHdpZHRoPSIyOCI+PHBhdGggZD0iTTggMEMzLjU4IDAgMCAzLjU4IDAgOGMwIDMuNTQgMi4yOSA2LjUzIDUuNDcgNy41OS40LjA3LjU1LS4xNy41NS0uMzggMC0uMTktLjAxLS44Mi0uMDEtMS40OS0yLjAxLjM3LTIuNTMtLjQ5LTIuNjktLjk0LS4wOS0uMjMtLjQ4LS45NC0uODItMS4xMy0uMjgtLjE1LS42OC0uNTItLjAxLS41My42My0uMDEgMS4wOC41OCAxLjIzLjgyLjcyIDEuMjEgMS44Ny44NyAyLjMzLjY2LjA3LS41Mi4yOC0uODcuNTEtMS4wNy0xLjc4LS4yLTMuNjQtLjg5LTMuNjQtMy45NSAwLS44Ny4zMS0xLjU5LjgyLTIuMTUtLjA4LS4yLS4zNi0xLjAyLjA4LTIuMTIgMCAwIC42Ny0uMjEgMi4yLjgyLjY0LS4xOCAxLjMyLS4yNyAyLS4yNy42OCAwIDEuMzYuMDkgMiAuMjcgMS41My0xLjA0IDIuMi0uODIgMi4yLS44Mi40NCAxLjEuMTYgMS45Mi4wOCAyLjEyLjUxLjU2LjgyIDEuMjcuODIgMi4xNSAwIDMuMDctMS44NyAzLjc1LTMuNjUgMy45NS4yOS4yNS41NC43My41NCAxLjQ4IDAgMS4wNy0uMDEgMS45My0uMDEgMi4yIDAgLjIxLjE1LjQ2LjU1LjM4QTguMDEzIDguMDEzIDAgMCAwIDE2IDhjMC00LjQyLTMuNTgtOC04LTh6Ij48L3BhdGg+PC9zdmc+CjwvYT4KCgogICAgICAgIDxkaXYgY2xhc3M9ImhlYWRlci1zZWFyY2ggc2NvcGVkLXNlYXJjaCBzaXRlLXNjb3BlZC1zZWFyY2gganMtc2l0ZS1zZWFyY2giIHJvbGU9InNlYXJjaCI+CiAgPCEtLSA8L3RleHRhcmVhPiAtLT48IS0tICciYCAtLT48Zm9ybSBhY2NlcHQtY2hhcnNldD0iVVRGLTgiIGFjdGlvbj0iL2N5Y2dpdC93ZWItc3R5bGUvc2VhcmNoIiBjbGFzcz0ianMtc2l0ZS1zZWFyY2gtZm9ybSIgZGF0YS1zY29wZWQtc2VhcmNoLXVybD0iL2N5Y2dpdC93ZWItc3R5bGUvc2VhcmNoIiBkYXRhLXVuc2NvcGVkLXNlYXJjaC11cmw9Ii9zZWFyY2giIG1ldGhvZD0iZ2V0Ij48ZGl2IHN0eWxlPSJtYXJnaW46MDtwYWRkaW5nOjA7ZGlzcGxheTppbmxpbmUiPjxpbnB1dCBuYW1lPSJ1dGY4IiB0eXBlPSJoaWRkZW4iIHZhbHVlPSImI3gyNzEzOyIgLz48L2Rpdj4KICAgIDxsYWJlbCBjbGFzcz0iZm9ybS1jb250cm9sIGhlYWRlci1zZWFyY2gtd3JhcHBlciBqcy1jaHJvbWVsZXNzLWlucHV0LWNvbnRhaW5lciI+CiAgICAgIDxkaXYgY2xhc3M9ImhlYWRlci1zZWFyY2gtc2NvcGUiPlRoaXMgcmVwb3NpdG9yeTwvZGl2PgogICAgICA8aW5wdXQgdHlwZT0idGV4dCIKICAgICAgICBjbGFzcz0iZm9ybS1jb250cm9sIGhlYWRlci1zZWFyY2gtaW5wdXQganMtc2l0ZS1zZWFyY2gtZm9jdXMganMtc2l0ZS1zZWFyY2gtZmllbGQgaXMtY2xlYXJhYmxlIgogICAgICAgIGRhdGEtaG90a2V5PSJzIgogICAgICAgIG5hbWU9InEiCiAgICAgICAgcGxhY2Vob2xkZXI9IlNlYXJjaCIKICAgICAgICBhcmlhLWxhYmVsPSJTZWFyY2ggdGhpcyByZXBvc2l0b3J5IgogICAgICAgIGRhdGEtdW5zY29wZWQtcGxhY2Vob2xkZXI9IlNlYXJjaCBHaXRIdWIiCiAgICAgICAgZGF0YS1zY29wZWQtcGxhY2Vob2xkZXI9IlNlYXJjaCIKICAgICAgICB0YWJpbmRleD0iMSIKICAgICAgICBhdXRvY2FwaXRhbGl6ZT0ib2ZmIj4KICAgIDwvbGFiZWw+CjwvZm9ybT48L2Rpdj4KCgogICAgICA8dWwgY2xhc3M9ImhlYWRlci1uYXYgbGVmdCIgcm9sZT0ibmF2aWdhdGlvbiI+CiAgICAgICAgPGxpIGNsYXNzPSJoZWFkZXItbmF2LWl0ZW0iPgogICAgICAgICAgPGEgaHJlZj0iL3B1bGxzIiBjbGFzcz0ianMtc2VsZWN0ZWQtbmF2aWdhdGlvbi1pdGVtIGhlYWRlci1uYXYtbGluayIgZGF0YS1nYS1jbGljaz0iSGVhZGVyLCBjbGljaywgTmF2IG1lbnUgLSBpdGVtOnB1bGxzIGNvbnRleHQ6dXNlciIgZGF0YS1ob3RrZXk9ImcgcCIgZGF0YS1zZWxlY3RlZC1saW5rcz0iL3B1bGxzIC9wdWxscy9hc3NpZ25lZCAvcHVsbHMvbWVudGlvbmVkIC9wdWxscyI+CiAgICAgICAgICAgIFB1bGwgcmVxdWVzdHMKPC9hPiAgICAgICAgPC9saT4KICAgICAgICA8bGkgY2xhc3M9ImhlYWRlci1uYXYtaXRlbSI+CiAgICAgICAgICA8YSBocmVmPSIvaXNzdWVzIiBjbGFzcz0ianMtc2VsZWN0ZWQtbmF2aWdhdGlvbi1pdGVtIGhlYWRlci1uYXYtbGluayIgZGF0YS1nYS1jbGljaz0iSGVhZGVyLCBjbGljaywgTmF2IG1lbnUgLSBpdGVtOmlzc3VlcyBjb250ZXh0OnVzZXIiIGRhdGEtaG90a2V5PSJnIGkiIGRhdGEtc2VsZWN0ZWQtbGlua3M9Ii9pc3N1ZXMgL2lzc3Vlcy9hc3NpZ25lZCAvaXNzdWVzL21lbnRpb25lZCAvaXNzdWVzIj4KICAgICAgICAgICAgSXNzdWVzCjwvYT4gICAgICAgIDwvbGk+CiAgICAgICAgICA8bGkgY2xhc3M9ImhlYWRlci1uYXYtaXRlbSI+CiAgICAgICAgICAgIDxhIGNsYXNzPSJoZWFkZXItbmF2LWxpbmsiIGhyZWY9Imh0dHBzOi8vZ2lzdC5naXRodWIuY29tLyIgZGF0YS1nYS1jbGljaz0iSGVhZGVyLCBnbyB0byBnaXN0LCB0ZXh0Omdpc3QiPkdpc3Q8L2E+CiAgICAgICAgICA8L2xpPgogICAgICA8L3VsPgoKICAgIAo8dWwgY2xhc3M9ImhlYWRlci1uYXYgdXNlci1uYXYgcmlnaHQiIGlkPSJ1c2VyLWxpbmtzIj4KICA8bGkgY2xhc3M9ImhlYWRlci1uYXYtaXRlbSI+CiAgICAKICAgIDxhIGhyZWY9Ii9ub3RpZmljYXRpb25zIiBhcmlhLWxhYmVsPSJZb3UgaGF2ZSBubyB1bnJlYWQgbm90aWZpY2F0aW9ucyIgY2xhc3M9ImhlYWRlci1uYXYtbGluayBub3RpZmljYXRpb24taW5kaWNhdG9yIHRvb2x0aXBwZWQgdG9vbHRpcHBlZC1zIGpzLXNvY2tldC1jaGFubmVsIGpzLW5vdGlmaWNhdGlvbi1pbmRpY2F0b3IiIGRhdGEtY2hhbm5lbD0idGVuYW50OjE6bm90aWZpY2F0aW9uLWNoYW5nZWQ6MTkwODQ2IiBkYXRhLWdhLWNsaWNrPSJIZWFkZXIsIGdvIHRvIG5vdGlmaWNhdGlvbnMsIGljb246cmVhZCIgZGF0YS1ob3RrZXk9ImcgbiI+CiAgICAgICAgPHNwYW4gY2xhc3M9Im1haWwtc3RhdHVzICI+PC9zcGFuPgogICAgICAgIDxzdmcgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJvY3RpY29uIG9jdGljb24tYmVsbCIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTQgMTYiIHdpZHRoPSIxNCI+PHBhdGggZD0iTTE0IDEydjFIMHYtMWwuNzMtLjU4Yy43Ny0uNzcuODEtMi41NSAxLjE5LTQuNDJDMi42OSAzLjIzIDYgMiA2IDJjMC0uNTUuNDUtMSAxLTFzMSAuNDUgMSAxYzAgMCAzLjM5IDEuMjMgNC4xNiA1IC4zOCAxLjg4LjQyIDMuNjYgMS4xOSA0LjQybC42Ni41OEgxNHptLTcgNGMxLjExIDAgMi0uODkgMi0ySDVjMCAxLjExLjg5IDIgMiAyeiI+PC9wYXRoPjwvc3ZnPgo8L2E+CiAgPC9saT4KCiAgPGxpIGNsYXNzPSJoZWFkZXItbmF2LWl0ZW0gZHJvcGRvd24ganMtbWVudS1jb250YWluZXIiPgogICAgPGEgY2xhc3M9ImhlYWRlci1uYXYtbGluayB0b29sdGlwcGVkIHRvb2x0aXBwZWQtcyBqcy1tZW51LXRhcmdldCIgaHJlZj0iL25ldyIKICAgICAgIGFyaWEtbGFiZWw9IkNyZWF0ZSBuZXfigKYiCiAgICAgICBkYXRhLWdhLWNsaWNrPSJIZWFkZXIsIGNyZWF0ZSBuZXcsIGljb246YWRkIj4KICAgICAgPHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1wbHVzIGxlZnQiIGhlaWdodD0iMTYiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEyIDE2IiB3aWR0aD0iMTIiPjxwYXRoIGQ9Ik0xMiA5SDd2NUg1VjlIMFY3aDVWMmgydjVoNXoiPjwvcGF0aD48L3N2Zz4KICAgICAgPHNwYW4gY2xhc3M9ImRyb3Bkb3duLWNhcmV0Ij48L3NwYW4+CiAgICA8L2E+CgogICAgPGRpdiBjbGFzcz0iZHJvcGRvd24tbWVudS1jb250ZW50IGpzLW1lbnUtY29udGVudCI+CiAgICAgIDx1bCBjbGFzcz0iZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXN3Ij4KICAgICAgICAKPGEgY2xhc3M9ImRyb3Bkb3duLWl0ZW0iIGhyZWY9Ii9uZXciIGRhdGEtZ2EtY2xpY2s9IkhlYWRlciwgY3JlYXRlIG5ldyByZXBvc2l0b3J5Ij4KICBOZXcgcmVwb3NpdG9yeQo8L2E+CgogIDxhIGNsYXNzPSJkcm9wZG93bi1pdGVtIiBocmVmPSIvbmV3L2ltcG9ydCIgZGF0YS1nYS1jbGljaz0iSGVhZGVyLCBpbXBvcnQgYSByZXBvc2l0b3J5Ij4KICAgIEltcG9ydCByZXBvc2l0b3J5CiAgPC9hPgoKCiAgPGEgY2xhc3M9ImRyb3Bkb3duLWl0ZW0iIGhyZWY9Ii9vcmdhbml6YXRpb25zL25ldyIgZGF0YS1nYS1jbGljaz0iSGVhZGVyLCBjcmVhdGUgbmV3IG9yZ2FuaXphdGlvbiI+CiAgICBOZXcgb3JnYW5pemF0aW9uCiAgPC9hPgoKCgogIDxkaXYgY2xhc3M9ImRyb3Bkb3duLWRpdmlkZXIiPjwvZGl2PgogIDxkaXYgY2xhc3M9ImRyb3Bkb3duLWhlYWRlciI+CiAgICA8c3BhbiB0aXRsZT0iY3ljZ2l0L3dlYi1zdHlsZSI+VGhpcyByZXBvc2l0b3J5PC9zcGFuPgogIDwvZGl2PgogICAgPGEgY2xhc3M9ImRyb3Bkb3duLWl0ZW0iIGhyZWY9Ii9jeWNnaXQvd2ViLXN0eWxlL2lzc3Vlcy9uZXciIGRhdGEtZ2EtY2xpY2s9IkhlYWRlciwgY3JlYXRlIG5ldyBpc3N1ZSI+CiAgICAgIE5ldyBpc3N1ZQogICAgPC9hPgoKICAgICAgPC91bD4KICAgIDwvZGl2PgogIDwvbGk+CgogIDxsaSBjbGFzcz0iaGVhZGVyLW5hdi1pdGVtIGRyb3Bkb3duIGpzLW1lbnUtY29udGFpbmVyIj4KICAgIDxhIGNsYXNzPSJoZWFkZXItbmF2LWxpbmsgbmFtZSB0b29sdGlwcGVkIHRvb2x0aXBwZWQtc3cganMtbWVudS10YXJnZXQiIGhyZWY9Ii9SdWJ5TG91dnJlIgogICAgICAgYXJpYS1sYWJlbD0iVmlldyBwcm9maWxlIGFuZCBtb3JlIgogICAgICAgZGF0YS1nYS1jbGljaz0iSGVhZGVyLCBzaG93IG1lbnUsIGljb246YXZhdGFyIj4KICAgICAgPGltZyBhbHQ9IkBSdWJ5TG91dnJlIiBjbGFzcz0iYXZhdGFyIiBoZWlnaHQ9IjIwIiBzcmM9Imh0dHBzOi8vYXZhdGFyczMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvMTkwODQ2P3Y9MyZhbXA7cz00MCIgd2lkdGg9IjIwIiAvPgogICAgICA8c3BhbiBjbGFzcz0iZHJvcGRvd24tY2FyZXQiPjwvc3Bhbj4KICAgIDwvYT4KCiAgICA8ZGl2IGNsYXNzPSJkcm9wZG93bi1tZW51LWNvbnRlbnQganMtbWVudS1jb250ZW50Ij4KICAgICAgPGRpdiBjbGFzcz0iZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXN3Ij4KICAgICAgICA8ZGl2IGNsYXNzPSJkcm9wZG93bi1oZWFkZXIgaGVhZGVyLW5hdi1jdXJyZW50LXVzZXIgY3NzLXRydW5jYXRlIj4KICAgICAgICAgIFNpZ25lZCBpbiBhcyA8c3Ryb25nIGNsYXNzPSJjc3MtdHJ1bmNhdGUtdGFyZ2V0Ij5SdWJ5TG91dnJlPC9zdHJvbmc+CiAgICAgICAgPC9kaXY+CgogICAgICAgIDxkaXYgY2xhc3M9ImRyb3Bkb3duLWRpdmlkZXIiPjwvZGl2PgoKICAgICAgICA8YSBjbGFzcz0iZHJvcGRvd24taXRlbSIgaHJlZj0iL1J1YnlMb3V2cmUiIGRhdGEtZ2EtY2xpY2s9IkhlYWRlciwgZ28gdG8gcHJvZmlsZSwgdGV4dDp5b3VyIHByb2ZpbGUiPgogICAgICAgICAgWW91ciBwcm9maWxlCiAgICAgICAgPC9hPgogICAgICAgIDxhIGNsYXNzPSJkcm9wZG93bi1pdGVtIiBocmVmPSIvc3RhcnMiIGRhdGEtZ2EtY2xpY2s9IkhlYWRlciwgZ28gdG8gc3RhcnJlZCByZXBvcywgdGV4dDp5b3VyIHN0YXJzIj4KICAgICAgICAgIFlvdXIgc3RhcnMKICAgICAgICA8L2E+CiAgICAgICAgPGEgY2xhc3M9ImRyb3Bkb3duLWl0ZW0iIGhyZWY9Ii9leHBsb3JlIiBkYXRhLWdhLWNsaWNrPSJIZWFkZXIsIGdvIHRvIGV4cGxvcmUsIHRleHQ6ZXhwbG9yZSI+CiAgICAgICAgICBFeHBsb3JlCiAgICAgICAgPC9hPgogICAgICAgICAgPGEgY2xhc3M9ImRyb3Bkb3duLWl0ZW0iIGhyZWY9Ii9pbnRlZ3JhdGlvbnMiIGRhdGEtZ2EtY2xpY2s9IkhlYWRlciwgZ28gdG8gaW50ZWdyYXRpb25zLCB0ZXh0OmludGVncmF0aW9ucyI+CiAgICAgICAgICAgIEludGVncmF0aW9ucwogICAgICAgICAgPC9hPgogICAgICAgIDxhIGNsYXNzPSJkcm9wZG93bi1pdGVtIiBocmVmPSJodHRwczovL2hlbHAuZ2l0aHViLmNvbSIgZGF0YS1nYS1jbGljaz0iSGVhZGVyLCBnbyB0byBoZWxwLCB0ZXh0OmhlbHAiPgogICAgICAgICAgSGVscAogICAgICAgIDwvYT4KCgogICAgICAgIDxkaXYgY2xhc3M9ImRyb3Bkb3duLWRpdmlkZXIiPjwvZGl2PgoKICAgICAgICA8YSBjbGFzcz0iZHJvcGRvd24taXRlbSIgaHJlZj0iL3NldHRpbmdzL3Byb2ZpbGUiIGRhdGEtZ2EtY2xpY2s9IkhlYWRlciwgZ28gdG8gc2V0dGluZ3MsIGljb246c2V0dGluZ3MiPgogICAgICAgICAgU2V0dGluZ3MKICAgICAgICA8L2E+CgogICAgICAgIDwhLS0gPC90ZXh0YXJlYT4gLS0+PCEtLSAnImAgLS0+PGZvcm0gYWNjZXB0LWNoYXJzZXQ9IlVURi04IiBhY3Rpb249Ii9sb2dvdXQiIGNsYXNzPSJsb2dvdXQtZm9ybSIgZGF0YS1mb3JtLW5vbmNlPSIzNjAxNTY0MmQwNDliNWI0NjY3MGRkMzVkYWFiMGJlMWM5NzViOTg0IiBtZXRob2Q9InBvc3QiPjxkaXYgc3R5bGU9Im1hcmdpbjowO3BhZGRpbmc6MDtkaXNwbGF5OmlubGluZSI+PGlucHV0IG5hbWU9InV0ZjgiIHR5cGU9ImhpZGRlbiIgdmFsdWU9IiYjeDI3MTM7IiAvPjxpbnB1dCBuYW1lPSJhdXRoZW50aWNpdHlfdG9rZW4iIHR5cGU9ImhpZGRlbiIgdmFsdWU9IkxuMzVQbDI4aDNPRnhPWDY4NzBjSWJvczRPUTVLdmtCNHB3TmtEczJMRXp3SmpYUTJTWkZHV1plREVqdWRSNmhGM1NUZVNCd1RzaWtPRUNxUjF3STBBPT0iIC8+PC9kaXY+CiAgICAgICAgICA8YnV0dG9uIGNsYXNzPSJkcm9wZG93bi1pdGVtIGRyb3Bkb3duLXNpZ25vdXQiIGRhdGEtZ2EtY2xpY2s9IkhlYWRlciwgc2lnbiBvdXQsIGljb246bG9nb3V0Ij4KICAgICAgICAgICAgU2lnbiBvdXQKICAgICAgICAgIDwvYnV0dG9uPgo8L2Zvcm0+ICAgICAgPC9kaXY+CiAgICA8L2Rpdj4KICA8L2xpPgo8L3VsPgoKCiAgICAKICA8L2Rpdj4KPC9kaXY+CgoKICAgICAgCgoKICAgIDxkaXYgaWQ9InN0YXJ0LW9mLWNvbnRlbnQiIGNsYXNzPSJhY2Nlc3NpYmlsaXR5LWFpZCI+PC9kaXY+CgogICAgICA8ZGl2IGlkPSJqcy1mbGFzaC1jb250YWluZXIiPgo8L2Rpdj4KCgogICAgPGRpdiByb2xlPSJtYWluIiBjbGFzcz0ibWFpbi1jb250ZW50Ij4KICAgICAgICA8ZGl2IGl0ZW1zY29wZSBpdGVtdHlwZT0iaHR0cDovL3NjaGVtYS5vcmcvU29mdHdhcmVTb3VyY2VDb2RlIj4KICAgIDxkaXYgaWQ9ImpzLXJlcG8tcGpheC1jb250YWluZXIiIGRhdGEtcGpheC1jb250YWluZXI+CiAgICAgIAo8ZGl2IGNsYXNzPSJwYWdlaGVhZCByZXBvaGVhZCBpbnN0YXBhcGVyX2lnbm9yZSByZWFkYWJpbGl0eS1tZW51IGV4cGVyaW1lbnQtcmVwby1uYXYiPgogIDxkaXYgY2xhc3M9ImNvbnRhaW5lciByZXBvaGVhZC1kZXRhaWxzLWNvbnRhaW5lciI+CgogICAgCgo8dWwgY2xhc3M9InBhZ2VoZWFkLWFjdGlvbnMiPgoKICA8bGk+CiAgICAgICAgPCEtLSA8L3RleHRhcmVhPiAtLT48IS0tICciYCAtLT48Zm9ybSBhY2NlcHQtY2hhcnNldD0iVVRGLTgiIGFjdGlvbj0iL25vdGlmaWNhdGlvbnMvc3Vic2NyaWJlIiBjbGFzcz0ianMtc29jaWFsLWNvbnRhaW5lciIgZGF0YS1hdXRvc3VibWl0PSJ0cnVlIiBkYXRhLWZvcm0tbm9uY2U9IjM2MDE1NjQyZDA0OWI1YjQ2NjcwZGQzNWRhYWIwYmUxYzk3NWI5ODQiIGRhdGEtcmVtb3RlPSJ0cnVlIiBtZXRob2Q9InBvc3QiPjxkaXYgc3R5bGU9Im1hcmdpbjowO3BhZGRpbmc6MDtkaXNwbGF5OmlubGluZSI+PGlucHV0IG5hbWU9InV0ZjgiIHR5cGU9ImhpZGRlbiIgdmFsdWU9IiYjeDI3MTM7IiAvPjxpbnB1dCBuYW1lPSJhdXRoZW50aWNpdHlfdG9rZW4iIHR5cGU9ImhpZGRlbiIgdmFsdWU9IlBlZXBKL1FGYzUzRWFlb2p5empGbytRejBadkxlbUdlYW02K0V2NHduT2xIZlBmc3B6YWsxN2JVRENKeW14NzluVDQxOHJvNlp2RTdrc2tpUUVsMzFnPT0iIC8+PC9kaXY+ICAgICAgPGlucHV0IGNsYXNzPSJmb3JtLWNvbnRyb2wiIGlkPSJyZXBvc2l0b3J5X2lkIiBuYW1lPSJyZXBvc2l0b3J5X2lkIiB0eXBlPSJoaWRkZW4iIHZhbHVlPSI1OTcyNTEyNSIgLz4KCiAgICAgICAgPGRpdiBjbGFzcz0ic2VsZWN0LW1lbnUganMtbWVudS1jb250YWluZXIganMtc2VsZWN0LW1lbnUiPgogICAgICAgICAgPGEgaHJlZj0iL2N5Y2dpdC93ZWItc3R5bGUvc3Vic2NyaXB0aW9uIgogICAgICAgICAgICBjbGFzcz0iYnRuIGJ0bi1zbSBidG4td2l0aC1jb3VudCBzZWxlY3QtbWVudS1idXR0b24ganMtbWVudS10YXJnZXQiIHJvbGU9ImJ1dHRvbiIgdGFiaW5kZXg9IjAiIGFyaWEtaGFzcG9wdXA9InRydWUiCiAgICAgICAgICAgIGRhdGEtZ2EtY2xpY2s9IlJlcG9zaXRvcnksIGNsaWNrIFdhdGNoIHNldHRpbmdzLCBhY3Rpb246YmxvYiNzaG93Ij4KICAgICAgICAgICAgPHNwYW4gY2xhc3M9ImpzLXNlbGVjdC1idXR0b24iPgogICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJvY3RpY29uIG9jdGljb24tZXllIiBoZWlnaHQ9IjE2IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2Ij48cGF0aCBkPSJNOC4wNiAyQzMgMiAwIDggMCA4czMgNiA4LjA2IDZDMTMgMTQgMTYgOCAxNiA4cy0zLTYtNy45NC02ek04IDEyYy0yLjIgMC00LTEuNzgtNC00IDAtMi4yIDEuOC00IDQtNCAyLjIyIDAgNCAxLjggNCA0IDAgMi4yMi0xLjc4IDQtNCA0em0yLTRjMCAxLjExLS44OSAyLTIgMi0xLjExIDAtMi0uODktMi0yIDAtMS4xMS44OS0yIDItMiAxLjExIDAgMiAuODkgMiAyeiI+PC9wYXRoPjwvc3ZnPgogICAgICAgICAgICAgIFdhdGNoCiAgICAgICAgICAgIDwvc3Bhbj4KICAgICAgICAgIDwvYT4KICAgICAgICAgIDxhIGNsYXNzPSJzb2NpYWwtY291bnQganMtc29jaWFsLWNvdW50IiBocmVmPSIvY3ljZ2l0L3dlYi1zdHlsZS93YXRjaGVycyI+CiAgICAgICAgICAgIDEKICAgICAgICAgIDwvYT4KCiAgICAgICAgPGRpdiBjbGFzcz0ic2VsZWN0LW1lbnUtbW9kYWwtaG9sZGVyIj4KICAgICAgICAgIDxkaXYgY2xhc3M9InNlbGVjdC1tZW51LW1vZGFsIHN1YnNjcmlwdGlvbi1tZW51LW1vZGFsIGpzLW1lbnUtY29udGVudCIgYXJpYS1oaWRkZW49InRydWUiPgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJzZWxlY3QtbWVudS1oZWFkZXIganMtbmF2aWdhdGlvbi1lbmFibGUiIHRhYmluZGV4PSItMSI+CiAgICAgICAgICAgICAgPHN2ZyBhcmlhLWxhYmVsPSJDbG9zZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi14IGpzLW1lbnUtY2xvc2UiIGhlaWdodD0iMTYiIHJvbGU9ImltZyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTIgMTYiIHdpZHRoPSIxMiI+PHBhdGggZD0iTTcuNDggOGwzLjc1IDMuNzUtMS40OCAxLjQ4TDYgOS40OGwtMy43NSAzLjc1LTEuNDgtMS40OEw0LjUyIDggLjc3IDQuMjVsMS40OC0xLjQ4TDYgNi41MmwzLjc1LTMuNzUgMS40OCAxLjQ4eiI+PC9wYXRoPjwvc3ZnPgogICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJzZWxlY3QtbWVudS10aXRsZSI+Tm90aWZpY2F0aW9uczwvc3Bhbj4KICAgICAgICAgICAgPC9kaXY+CgogICAgICAgICAgICAgIDxkaXYgY2xhc3M9InNlbGVjdC1tZW51LWxpc3QganMtbmF2aWdhdGlvbi1jb250YWluZXIiIHJvbGU9Im1lbnUiPgoKICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9InNlbGVjdC1tZW51LWl0ZW0ganMtbmF2aWdhdGlvbi1pdGVtIHNlbGVjdGVkIiByb2xlPSJtZW51aXRlbSIgdGFiaW5kZXg9IjAiPgogICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzcz0ib2N0aWNvbiBvY3RpY29uLWNoZWNrIHNlbGVjdC1tZW51LWl0ZW0taWNvbiIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTIgMTYiIHdpZHRoPSIxMiI+PHBhdGggZD0iTTEyIDVsLTggOC00LTQgMS41LTEuNUw0IDEwbDYuNS02LjV6Ij48L3BhdGg+PC9zdmc+CiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9InNlbGVjdC1tZW51LWl0ZW0tdGV4dCI+CiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNoZWNrZWQ9ImNoZWNrZWQiIGlkPSJkb19pbmNsdWRlZCIgbmFtZT0iZG8iIHR5cGU9InJhZGlvIiB2YWx1ZT0iaW5jbHVkZWQiIC8+CiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9InNlbGVjdC1tZW51LWl0ZW0taGVhZGluZyI+Tm90IHdhdGNoaW5nPC9zcGFuPgogICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJkZXNjcmlwdGlvbiI+QmUgbm90aWZpZWQgd2hlbiBwYXJ0aWNpcGF0aW5nIG9yIEBtZW50aW9uZWQuPC9zcGFuPgogICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJqcy1zZWxlY3QtYnV0dG9uLXRleHQgaGlkZGVuLXNlbGVjdC1idXR0b24tdGV4dCI+CiAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzcz0ib2N0aWNvbiBvY3RpY29uLWV5ZSIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiI+PHBhdGggZD0iTTguMDYgMkMzIDIgMCA4IDAgOHMzIDYgOC4wNiA2QzEzIDE0IDE2IDggMTYgOHMtMy02LTcuOTQtNnpNOCAxMmMtMi4yIDAtNC0xLjc4LTQtNCAwLTIuMiAxLjgtNCA0LTQgMi4yMiAwIDQgMS44IDQgNCAwIDIuMjItMS43OCA0LTQgNHptMi00YzAgMS4xMS0uODkgMi0yIDItMS4xMSAwLTItLjg5LTItMiAwLTEuMTEuODktMiAyLTIgMS4xMSAwIDIgLjg5IDIgMnoiPjwvcGF0aD48L3N2Zz4KICAgICAgICAgICAgICAgICAgICAgIFdhdGNoCiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPgogICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgIDwvZGl2PgoKICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9InNlbGVjdC1tZW51LWl0ZW0ganMtbmF2aWdhdGlvbi1pdGVtICIgcm9sZT0ibWVudWl0ZW0iIHRhYmluZGV4PSIwIj4KICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1jaGVjayBzZWxlY3QtbWVudS1pdGVtLWljb24iIGhlaWdodD0iMTYiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEyIDE2IiB3aWR0aD0iMTIiPjxwYXRoIGQ9Ik0xMiA1bC04IDgtNC00IDEuNS0xLjVMNCAxMGw2LjUtNi41eiI+PC9wYXRoPjwvc3ZnPgogICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJzZWxlY3QtbWVudS1pdGVtLXRleHQiPgogICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD0iZG9fc3Vic2NyaWJlZCIgbmFtZT0iZG8iIHR5cGU9InJhZGlvIiB2YWx1ZT0ic3Vic2NyaWJlZCIgLz4KICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ic2VsZWN0LW1lbnUtaXRlbS1oZWFkaW5nIj5XYXRjaGluZzwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0iZGVzY3JpcHRpb24iPkJlIG5vdGlmaWVkIG9mIGFsbCBjb252ZXJzYXRpb25zLjwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ianMtc2VsZWN0LWJ1dHRvbi10ZXh0IGhpZGRlbi1zZWxlY3QtYnV0dG9uLXRleHQiPgogICAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1leWUiIGhlaWdodD0iMTYiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE2IDE2IiB3aWR0aD0iMTYiPjxwYXRoIGQ9Ik04LjA2IDJDMyAyIDAgOCAwIDhzMyA2IDguMDYgNkMxMyAxNCAxNiA4IDE2IDhzLTMtNi03Ljk0LTZ6TTggMTJjLTIuMiAwLTQtMS43OC00LTQgMC0yLjIgMS44LTQgNC00IDIuMjIgMCA0IDEuOCA0IDQgMCAyLjIyLTEuNzggNC00IDR6bTItNGMwIDEuMTEtLjg5IDItMiAyLTEuMTEgMC0yLS44OS0yLTIgMC0xLjExLjg5LTIgMi0yIDEuMTEgMCAyIC44OSAyIDJ6Ij48L3BhdGg+PC9zdmc+CiAgICAgICAgICAgICAgICAgICAgICBVbndhdGNoCiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPgogICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgIDwvZGl2PgoKICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9InNlbGVjdC1tZW51LWl0ZW0ganMtbmF2aWdhdGlvbi1pdGVtICIgcm9sZT0ibWVudWl0ZW0iIHRhYmluZGV4PSIwIj4KICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1jaGVjayBzZWxlY3QtbWVudS1pdGVtLWljb24iIGhlaWdodD0iMTYiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEyIDE2IiB3aWR0aD0iMTIiPjxwYXRoIGQ9Ik0xMiA1bC04IDgtNC00IDEuNS0xLjVMNCAxMGw2LjUtNi41eiI+PC9wYXRoPjwvc3ZnPgogICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJzZWxlY3QtbWVudS1pdGVtLXRleHQiPgogICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD0iZG9faWdub3JlIiBuYW1lPSJkbyIgdHlwZT0icmFkaW8iIHZhbHVlPSJpZ25vcmUiIC8+CiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9InNlbGVjdC1tZW51LWl0ZW0taGVhZGluZyI+SWdub3Jpbmc8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9ImRlc2NyaXB0aW9uIj5OZXZlciBiZSBub3RpZmllZC48L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9ImpzLXNlbGVjdC1idXR0b24tdGV4dCBoaWRkZW4tc2VsZWN0LWJ1dHRvbi10ZXh0Ij4KICAgICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJvY3RpY29uIG9jdGljb24tbXV0ZSIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiI+PHBhdGggZD0iTTggMi44MXYxMC4zOGMwIC42Ny0uODEgMS0xLjI4LjUzTDMgMTBIMWMtLjU1IDAtMS0uNDUtMS0xVjdjMC0uNTUuNDUtMSAxLTFoMmwzLjcyLTMuNzJDNy4xOSAxLjgxIDggMi4xNCA4IDIuODF6bTcuNTMgMy4yMmwtMS4wNi0xLjA2LTEuOTcgMS45Ny0xLjk3LTEuOTctMS4wNiAxLjA2TDExLjQ0IDggOS40NyA5Ljk3bDEuMDYgMS4wNiAxLjk3LTEuOTcgMS45NyAxLjk3IDEuMDYtMS4wNkwxMy41NiA4bDEuOTctMS45N3oiPjwvcGF0aD48L3N2Zz4KICAgICAgICAgICAgICAgICAgICAgIFN0b3AgaWdub3JpbmcKICAgICAgICAgICAgICAgICAgICA8L3NwYW4+CiAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgPC9kaXY+CgogICAgICAgICAgICAgIDwvZGl2PgoKICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8L2Rpdj4KICAgICAgICA8L2Rpdj4KPC9mb3JtPgogIDwvbGk+CgogIDxsaT4KICAgIAogIDxkaXYgY2xhc3M9ImpzLXRvZ2dsZXItY29udGFpbmVyIGpzLXNvY2lhbC1jb250YWluZXIgc3RhcnJpbmctY29udGFpbmVyICI+CgogICAgPCEtLSA8L3RleHRhcmVhPiAtLT48IS0tICciYCAtLT48Zm9ybSBhY2NlcHQtY2hhcnNldD0iVVRGLTgiIGFjdGlvbj0iL2N5Y2dpdC93ZWItc3R5bGUvdW5zdGFyIiBjbGFzcz0ic3RhcnJlZCIgZGF0YS1mb3JtLW5vbmNlPSIzNjAxNTY0MmQwNDliNWI0NjY3MGRkMzVkYWFiMGJlMWM5NzViOTg0IiBkYXRhLXJlbW90ZT0idHJ1ZSIgbWV0aG9kPSJwb3N0Ij48ZGl2IHN0eWxlPSJtYXJnaW46MDtwYWRkaW5nOjA7ZGlzcGxheTppbmxpbmUiPjxpbnB1dCBuYW1lPSJ1dGY4IiB0eXBlPSJoaWRkZW4iIHZhbHVlPSImI3gyNzEzOyIgLz48aW5wdXQgbmFtZT0iYXV0aGVudGljaXR5X3Rva2VuIiB0eXBlPSJoaWRkZW4iIHZhbHVlPSIxN1ZnLzAyU1BOVDNFamw2QUlkcnF6WE1qZDdWZDRGTjVKRGdUUGhmdjV1YWc4cVArenFKU2xTekwzMmNXSFdLKzhRQ0JJTGpkK0ZrUS93SUZEbXZxdz09IiAvPjwvZGl2PgogICAgICA8YnV0dG9uCiAgICAgICAgY2xhc3M9ImJ0biBidG4tc20gYnRuLXdpdGgtY291bnQganMtdG9nZ2xlci10YXJnZXQiCiAgICAgICAgYXJpYS1sYWJlbD0iVW5zdGFyIHRoaXMgcmVwb3NpdG9yeSIgdGl0bGU9IlVuc3RhciBjeWNnaXQvd2ViLXN0eWxlIgogICAgICAgIGRhdGEtZ2EtY2xpY2s9IlJlcG9zaXRvcnksIGNsaWNrIHVuc3RhciBidXR0b24sIGFjdGlvbjpibG9iI3Nob3c7IHRleHQ6VW5zdGFyIj4KICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzcz0ib2N0aWNvbiBvY3RpY29uLXN0YXIiIGhlaWdodD0iMTYiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE0IDE2IiB3aWR0aD0iMTQiPjxwYXRoIGQ9Ik0xNCA2bC00LjktLjY0TDcgMSA0LjkgNS4zNiAwIDZsMy42IDMuMjZMMi42NyAxNCA3IDExLjY3IDExLjMzIDE0bC0uOTMtNC43NHoiPjwvcGF0aD48L3N2Zz4KICAgICAgICBVbnN0YXIKICAgICAgPC9idXR0b24+CiAgICAgICAgPGEgY2xhc3M9InNvY2lhbC1jb3VudCBqcy1zb2NpYWwtY291bnQiIGhyZWY9Ii9jeWNnaXQvd2ViLXN0eWxlL3N0YXJnYXplcnMiPgogICAgICAgICAgMTAKICAgICAgICA8L2E+CjwvZm9ybT4KICAgIDwhLS0gPC90ZXh0YXJlYT4gLS0+PCEtLSAnImAgLS0+PGZvcm0gYWNjZXB0LWNoYXJzZXQ9IlVURi04IiBhY3Rpb249Ii9jeWNnaXQvd2ViLXN0eWxlL3N0YXIiIGNsYXNzPSJ1bnN0YXJyZWQiIGRhdGEtZm9ybS1ub25jZT0iMzYwMTU2NDJkMDQ5YjViNDY2NzBkZDM1ZGFhYjBiZTFjOTc1Yjk4NCIgZGF0YS1yZW1vdGU9InRydWUiIG1ldGhvZD0icG9zdCI+PGRpdiBzdHlsZT0ibWFyZ2luOjA7cGFkZGluZzowO2Rpc3BsYXk6aW5saW5lIj48aW5wdXQgbmFtZT0idXRmOCIgdHlwZT0iaGlkZGVuIiB2YWx1ZT0iJiN4MjcxMzsiIC8+PGlucHV0IG5hbWU9ImF1dGhlbnRpY2l0eV90b2tlbiIgdHlwZT0iaGlkZGVuIiB2YWx1ZT0iTXd2QTFzaWZucVZxdU9UUThtZTRLbjc3anBQZWFUMEpOYmFRaTdQQkRyeVIrK2RuKzcxMTByUitoV1BjNklHUXQ3cndERzcxVmZjTkxnOGVTWkwrZWc9PSIgLz48L2Rpdj4KICAgICAgPGJ1dHRvbgogICAgICAgIGNsYXNzPSJidG4gYnRuLXNtIGJ0bi13aXRoLWNvdW50IGpzLXRvZ2dsZXItdGFyZ2V0IgogICAgICAgIGFyaWEtbGFiZWw9IlN0YXIgdGhpcyByZXBvc2l0b3J5IiB0aXRsZT0iU3RhciBjeWNnaXQvd2ViLXN0eWxlIgogICAgICAgIGRhdGEtZ2EtY2xpY2s9IlJlcG9zaXRvcnksIGNsaWNrIHN0YXIgYnV0dG9uLCBhY3Rpb246YmxvYiNzaG93OyB0ZXh0OlN0YXIiPgogICAgICAgIDxzdmcgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJvY3RpY29uIG9jdGljb24tc3RhciIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTQgMTYiIHdpZHRoPSIxNCI+PHBhdGggZD0iTTE0IDZsLTQuOS0uNjRMNyAxIDQuOSA1LjM2IDAgNmwzLjYgMy4yNkwyLjY3IDE0IDcgMTEuNjcgMTEuMzMgMTRsLS45My00Ljc0eiI+PC9wYXRoPjwvc3ZnPgogICAgICAgIFN0YXIKICAgICAgPC9idXR0b24+CiAgICAgICAgPGEgY2xhc3M9InNvY2lhbC1jb3VudCBqcy1zb2NpYWwtY291bnQiIGhyZWY9Ii9jeWNnaXQvd2ViLXN0eWxlL3N0YXJnYXplcnMiPgogICAgICAgICAgMTAKICAgICAgICA8L2E+CjwvZm9ybT4gIDwvZGl2PgoKICA8L2xpPgoKICA8bGk+CiAgICAgICAgICA8IS0tIDwvdGV4dGFyZWE+IC0tPjwhLS0gJyJgIC0tPjxmb3JtIGFjY2VwdC1jaGFyc2V0PSJVVEYtOCIgYWN0aW9uPSIvY3ljZ2l0L3dlYi1zdHlsZS9mb3JrIiBjbGFzcz0iYnRuLXdpdGgtY291bnQiIGRhdGEtZm9ybS1ub25jZT0iMzYwMTU2NDJkMDQ5YjViNDY2NzBkZDM1ZGFhYjBiZTFjOTc1Yjk4NCIgbWV0aG9kPSJwb3N0Ij48ZGl2IHN0eWxlPSJtYXJnaW46MDtwYWRkaW5nOjA7ZGlzcGxheTppbmxpbmUiPjxpbnB1dCBuYW1lPSJ1dGY4IiB0eXBlPSJoaWRkZW4iIHZhbHVlPSImI3gyNzEzOyIgLz48aW5wdXQgbmFtZT0iYXV0aGVudGljaXR5X3Rva2VuIiB0eXBlPSJoaWRkZW4iIHZhbHVlPSJrYW1SYmRKSllOVGVjV3AxWGo5eE1BRVFaUWRQTGV6dUtyUktiRlRHVnFOaUIvZGtJc21ZM1JKMnR4eC9PQ3NPVHF0cXMxRVREdFVWM1JDV0JTcjVidz09IiAvPjwvZGl2PgogICAgICAgICAgICA8YnV0dG9uCiAgICAgICAgICAgICAgICB0eXBlPSJzdWJtaXQiCiAgICAgICAgICAgICAgICBjbGFzcz0iYnRuIGJ0bi1zbSBidG4td2l0aC1jb3VudCIKICAgICAgICAgICAgICAgIGRhdGEtZ2EtY2xpY2s9IlJlcG9zaXRvcnksIHNob3cgZm9yayBtb2RhbCwgYWN0aW9uOmJsb2Ijc2hvdzsgdGV4dDpGb3JrIgogICAgICAgICAgICAgICAgdGl0bGU9IkZvcmsgeW91ciBvd24gY29weSBvZiBjeWNnaXQvd2ViLXN0eWxlIHRvIHlvdXIgYWNjb3VudCIKICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9IkZvcmsgeW91ciBvd24gY29weSBvZiBjeWNnaXQvd2ViLXN0eWxlIHRvIHlvdXIgYWNjb3VudCI+CiAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1yZXBvLWZvcmtlZCIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTAgMTYiIHdpZHRoPSIxMCI+PHBhdGggZD0iTTggMWExLjk5MyAxLjk5MyAwIDAgMC0xIDMuNzJWNkw1IDggMyA2VjQuNzJBMS45OTMgMS45OTMgMCAwIDAgMiAxYTEuOTkzIDEuOTkzIDAgMCAwLTEgMy43MlY2LjVsMyAzdjEuNzhBMS45OTMgMS45OTMgMCAwIDAgNSAxNWExLjk5MyAxLjk5MyAwIDAgMCAxLTMuNzJWOS41bDMtM1Y0LjcyQTEuOTkzIDEuOTkzIDAgMCAwIDggMXpNMiA0LjJDMS4zNCA0LjIuOCAzLjY1LjggM2MwLS42NS41NS0xLjIgMS4yLTEuMi42NSAwIDEuMi41NSAxLjIgMS4yIDAgLjY1LS41NSAxLjItMS4yIDEuMnptMyAxMGMtLjY2IDAtMS4yLS41NS0xLjItMS4yIDAtLjY1LjU1LTEuMiAxLjItMS4yLjY1IDAgMS4yLjU1IDEuMiAxLjIgMCAuNjUtLjU1IDEuMi0xLjIgMS4yem0zLTEwYy0uNjYgMC0xLjItLjU1LTEuMi0xLjIgMC0uNjUuNTUtMS4yIDEuMi0xLjIuNjUgMCAxLjIuNTUgMS4yIDEuMiAwIC42NS0uNTUgMS4yLTEuMiAxLjJ6Ij48L3BhdGg+PC9zdmc+CiAgICAgICAgICAgICAgRm9yawogICAgICAgICAgICA8L2J1dHRvbj4KPC9mb3JtPgogICAgPGEgaHJlZj0iL2N5Y2dpdC93ZWItc3R5bGUvbmV0d29yayIgY2xhc3M9InNvY2lhbC1jb3VudCI+CiAgICAgIDEKICAgIDwvYT4KICA8L2xpPgo8L3VsPgoKICAgIDxoMSBjbGFzcz0icHVibGljICI+CiAgPHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1yZXBvIiBoZWlnaHQ9IjE2IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMiAxNiIgd2lkdGg9IjEyIj48cGF0aCBkPSJNNCA5SDNWOGgxdjF6bTAtM0gzdjFoMVY2em0wLTJIM3YxaDFWNHptMC0ySDN2MWgxVjJ6bTgtMXYxMmMwIC41NS0uNDUgMS0xIDFINnYybC0xLjUtMS41TDMgMTZ2LTJIMWMtLjU1IDAtMS0uNDUtMS0xVjFjMC0uNTUuNDUtMSAxLTFoMTBjLjU1IDAgMSAuNDUgMSAxem0tMSAxMEgxdjJoMnYtMWgzdjFoNXYtMnptMC0xMEgydjloOVYxeiI+PC9wYXRoPjwvc3ZnPgogIDxzcGFuIGNsYXNzPSJhdXRob3IiIGl0ZW1wcm9wPSJhdXRob3IiPjxhIGhyZWY9Ii9jeWNnaXQiIGNsYXNzPSJ1cmwgZm4iIHJlbD0iYXV0aG9yIj5jeWNnaXQ8L2E+PC9zcGFuPjwhLS0KLS0+PHNwYW4gY2xhc3M9InBhdGgtZGl2aWRlciI+Lzwvc3Bhbj48IS0tCi0tPjxzdHJvbmcgaXRlbXByb3A9Im5hbWUiPjxhIGhyZWY9Ii9jeWNnaXQvd2ViLXN0eWxlIiBkYXRhLXBqYXg9IiNqcy1yZXBvLXBqYXgtY29udGFpbmVyIj53ZWItc3R5bGU8L2E+PC9zdHJvbmc+Cgo8L2gxPgoKICA8L2Rpdj4KICA8ZGl2IGNsYXNzPSJjb250YWluZXIiPgogICAgCjxuYXYgY2xhc3M9InJlcG9uYXYganMtcmVwby1uYXYganMtc2lkZW5hdi1jb250YWluZXItcGpheCIKICAgICBpdGVtc2NvcGUKICAgICBpdGVtdHlwZT0iaHR0cDovL3NjaGVtYS5vcmcvQnJlYWRjcnVtYkxpc3QiCiAgICAgcm9sZT0ibmF2aWdhdGlvbiIKICAgICBkYXRhLXBqYXg9IiNqcy1yZXBvLXBqYXgtY29udGFpbmVyIj4KCiAgPHNwYW4gaXRlbXNjb3BlIGl0ZW10eXBlPSJodHRwOi8vc2NoZW1hLm9yZy9MaXN0SXRlbSIgaXRlbXByb3A9Iml0ZW1MaXN0RWxlbWVudCI+CiAgICA8YSBocmVmPSIvY3ljZ2l0L3dlYi1zdHlsZSIgYXJpYS1zZWxlY3RlZD0idHJ1ZSIgY2xhc3M9ImpzLXNlbGVjdGVkLW5hdmlnYXRpb24taXRlbSBzZWxlY3RlZCByZXBvbmF2LWl0ZW0iIGRhdGEtaG90a2V5PSJnIGMiIGRhdGEtc2VsZWN0ZWQtbGlua3M9InJlcG9fc291cmNlIHJlcG9fZG93bmxvYWRzIHJlcG9fY29tbWl0cyByZXBvX3JlbGVhc2VzIHJlcG9fdGFncyByZXBvX2JyYW5jaGVzIC9jeWNnaXQvd2ViLXN0eWxlIiBpdGVtcHJvcD0idXJsIj4KICAgICAgPHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1jb2RlIiBoZWlnaHQ9IjE2IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxNCAxNiIgd2lkdGg9IjE0Ij48cGF0aCBkPSJNOS41IDNMOCA0LjUgMTEuNSA4IDggMTEuNSA5LjUgMTMgMTQgOCA5LjUgM3ptLTUgMEwwIDhsNC41IDVMNiAxMS41IDIuNSA4IDYgNC41IDQuNSAzeiI+PC9wYXRoPjwvc3ZnPgogICAgICA8c3BhbiBpdGVtcHJvcD0ibmFtZSI+Q29kZTwvc3Bhbj4KICAgICAgPG1ldGEgaXRlbXByb3A9InBvc2l0aW9uIiBjb250ZW50PSIxIj4KPC9hPiAgPC9zcGFuPgoKICAgIDxzcGFuIGl0ZW1zY29wZSBpdGVtdHlwZT0iaHR0cDovL3NjaGVtYS5vcmcvTGlzdEl0ZW0iIGl0ZW1wcm9wPSJpdGVtTGlzdEVsZW1lbnQiPgogICAgICA8YSBocmVmPSIvY3ljZ2l0L3dlYi1zdHlsZS9pc3N1ZXMiIGNsYXNzPSJqcy1zZWxlY3RlZC1uYXZpZ2F0aW9uLWl0ZW0gcmVwb25hdi1pdGVtIiBkYXRhLWhvdGtleT0iZyBpIiBkYXRhLXNlbGVjdGVkLWxpbmtzPSJyZXBvX2lzc3VlcyByZXBvX2xhYmVscyByZXBvX21pbGVzdG9uZXMgL2N5Y2dpdC93ZWItc3R5bGUvaXNzdWVzIiBpdGVtcHJvcD0idXJsIj4KICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzcz0ib2N0aWNvbiBvY3RpY29uLWlzc3VlLW9wZW5lZCIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTQgMTYiIHdpZHRoPSIxNCI+PHBhdGggZD0iTTcgMi4zYzMuMTQgMCA1LjcgMi41NiA1LjcgNS43cy0yLjU2IDUuNy01LjcgNS43QTUuNzEgNS43MSAwIDAgMSAxLjMgOGMwLTMuMTQgMi41Ni01LjcgNS43LTUuN3pNNyAxQzMuMTQgMSAwIDQuMTQgMCA4czMuMTQgNyA3IDcgNy0zLjE0IDctNy0zLjE0LTctNy03em0xIDNINnY1aDJWNHptMCA2SDZ2Mmgydi0yeiI+PC9wYXRoPjwvc3ZnPgogICAgICAgIDxzcGFuIGl0ZW1wcm9wPSJuYW1lIj5Jc3N1ZXM8L3NwYW4+CiAgICAgICAgPHNwYW4gY2xhc3M9ImNvdW50ZXIiPjA8L3NwYW4+CiAgICAgICAgPG1ldGEgaXRlbXByb3A9InBvc2l0aW9uIiBjb250ZW50PSIyIj4KPC9hPiAgICA8L3NwYW4+CgogIDxzcGFuIGl0ZW1zY29wZSBpdGVtdHlwZT0iaHR0cDovL3NjaGVtYS5vcmcvTGlzdEl0ZW0iIGl0ZW1wcm9wPSJpdGVtTGlzdEVsZW1lbnQiPgogICAgPGEgaHJlZj0iL2N5Y2dpdC93ZWItc3R5bGUvcHVsbHMiIGNsYXNzPSJqcy1zZWxlY3RlZC1uYXZpZ2F0aW9uLWl0ZW0gcmVwb25hdi1pdGVtIiBkYXRhLWhvdGtleT0iZyBwIiBkYXRhLXNlbGVjdGVkLWxpbmtzPSJyZXBvX3B1bGxzIC9jeWNnaXQvd2ViLXN0eWxlL3B1bGxzIiBpdGVtcHJvcD0idXJsIj4KICAgICAgPHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1naXQtcHVsbC1yZXF1ZXN0IiBoZWlnaHQ9IjE2IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMiAxNiIgd2lkdGg9IjEyIj48cGF0aCBkPSJNMTEgMTEuMjhWNWMtLjAzLS43OC0uMzQtMS40Ny0uOTQtMi4wNkM5LjQ2IDIuMzUgOC43OCAyLjAzIDggMkg3VjBMNCAzbDMgM1Y0aDFjLjI3LjAyLjQ4LjExLjY5LjMxLjIxLjIuMy40Mi4zMS42OXY2LjI4QTEuOTkzIDEuOTkzIDAgMCAwIDEwIDE1YTEuOTkzIDEuOTkzIDAgMCAwIDEtMy43MnptLTEgMi45MmMtLjY2IDAtMS4yLS41NS0xLjItMS4yIDAtLjY1LjU1LTEuMiAxLjItMS4yLjY1IDAgMS4yLjU1IDEuMiAxLjIgMCAuNjUtLjU1IDEuMi0xLjIgMS4yek00IDNjMC0xLjExLS44OS0yLTItMmExLjk5MyAxLjk5MyAwIDAgMC0xIDMuNzJ2Ni41NkExLjk5MyAxLjk5MyAwIDAgMCAyIDE1YTEuOTkzIDEuOTkzIDAgMCAwIDEtMy43MlY0LjcyYy41OS0uMzQgMS0uOTggMS0xLjcyem0tLjggMTBjMCAuNjYtLjU1IDEuMi0xLjIgMS4yLS42NSAwLTEuMi0uNTUtMS4yLTEuMiAwLS42NS41NS0xLjIgMS4yLTEuMi42NSAwIDEuMi41NSAxLjIgMS4yek0yIDQuMkMxLjM0IDQuMi44IDMuNjUuOCAzYzAtLjY1LjU1LTEuMiAxLjItMS4yLjY1IDAgMS4yLjU1IDEuMiAxLjIgMCAuNjUtLjU1IDEuMi0xLjIgMS4yeiI+PC9wYXRoPjwvc3ZnPgogICAgICA8c3BhbiBpdGVtcHJvcD0ibmFtZSI+UHVsbCByZXF1ZXN0czwvc3Bhbj4KICAgICAgPHNwYW4gY2xhc3M9ImNvdW50ZXIiPjA8L3NwYW4+CiAgICAgIDxtZXRhIGl0ZW1wcm9wPSJwb3NpdGlvbiIgY29udGVudD0iMyI+CjwvYT4gIDwvc3Bhbj4KCiAgICA8YSBocmVmPSIvY3ljZ2l0L3dlYi1zdHlsZS93aWtpIiBjbGFzcz0ianMtc2VsZWN0ZWQtbmF2aWdhdGlvbi1pdGVtIHJlcG9uYXYtaXRlbSIgZGF0YS1ob3RrZXk9ImcgdyIgZGF0YS1zZWxlY3RlZC1saW5rcz0icmVwb193aWtpIC9jeWNnaXQvd2ViLXN0eWxlL3dpa2kiPgogICAgICA8c3ZnIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzcz0ib2N0aWNvbiBvY3RpY29uLWJvb2siIGhlaWdodD0iMTYiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE2IDE2IiB3aWR0aD0iMTYiPjxwYXRoIGQ9Ik0zIDVoNHYxSDNWNXptMCAzaDRWN0gzdjF6bTAgMmg0VjlIM3Yxem0xMS01aC00djFoNFY1em0wIDJoLTR2MWg0Vjd6bTAgMmgtNHYxaDRWOXptMi02djljMCAuNTUtLjQ1IDEtMSAxSDkuNWwtMSAxLTEtMUgyYy0uNTUgMC0xLS40NS0xLTFWM2MwLS41NS40NS0xIDEtMWg1LjVsMSAxIDEtMUgxNWMuNTUgMCAxIC40NSAxIDF6bS04IC41TDcuNSAzSDJ2OWg2VjMuNXptNy0uNUg5LjVsLS41LjVWMTJoNlYzeiI+PC9wYXRoPjwvc3ZnPgogICAgICBXaWtpCjwvYT4KCiAgPGEgaHJlZj0iL2N5Y2dpdC93ZWItc3R5bGUvcHVsc2UiIGNsYXNzPSJqcy1zZWxlY3RlZC1uYXZpZ2F0aW9uLWl0ZW0gcmVwb25hdi1pdGVtIiBkYXRhLXNlbGVjdGVkLWxpbmtzPSJwdWxzZSAvY3ljZ2l0L3dlYi1zdHlsZS9wdWxzZSI+CiAgICA8c3ZnIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzcz0ib2N0aWNvbiBvY3RpY29uLXB1bHNlIiBoZWlnaHQ9IjE2IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxNCAxNiIgd2lkdGg9IjE0Ij48cGF0aCBkPSJNMTEuNSA4TDguOCA1LjQgNi42IDguNSA1LjUgMS42IDIuMzggOEgwdjJoMy42bC45LTEuOC45IDUuNEw5IDguNWwxLjYgMS41SDE0Vjh6Ij48L3BhdGg+PC9zdmc+CiAgICBQdWxzZQo8L2E+CiAgPGEgaHJlZj0iL2N5Y2dpdC93ZWItc3R5bGUvZ3JhcGhzIiBjbGFzcz0ianMtc2VsZWN0ZWQtbmF2aWdhdGlvbi1pdGVtIHJlcG9uYXYtaXRlbSIgZGF0YS1zZWxlY3RlZC1saW5rcz0icmVwb19ncmFwaHMgcmVwb19jb250cmlidXRvcnMgL2N5Y2dpdC93ZWItc3R5bGUvZ3JhcGhzIj4KICAgIDxzdmcgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJvY3RpY29uIG9jdGljb24tZ3JhcGgiIGhlaWdodD0iMTYiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE2IDE2IiB3aWR0aD0iMTYiPjxwYXRoIGQ9Ik0xNiAxNHYxSDBWMGgxdjE0aDE1ek01IDEzSDNWOGgydjV6bTQgMEg3VjNoMnYxMHptNCAwaC0yVjZoMnY3eiI+PC9wYXRoPjwvc3ZnPgogICAgR3JhcGhzCjwvYT4KCjwvbmF2PgoKICA8L2Rpdj4KPC9kaXY+Cgo8ZGl2IGNsYXNzPSJjb250YWluZXIgbmV3LWRpc2N1c3Npb24tdGltZWxpbmUgZXhwZXJpbWVudC1yZXBvLW5hdiI+CiAgPGRpdiBjbGFzcz0icmVwb3NpdG9yeS1jb250ZW50Ij4KCiAgICAKCjxhIGhyZWY9Ii9jeWNnaXQvd2ViLXN0eWxlL2Jsb2IvMWM0MDFkMGIyYjgzMDZmODY2ZmM0YzMyOGVjZDVmYTQxOWY3MDQ3Ni9zcmMvZm9udHMvaWNvbmZvbnQuZW90IiBjbGFzcz0iaGlkZGVuIGpzLXBlcm1hbGluay1zaG9ydGN1dCIgZGF0YS1ob3RrZXk9InkiPlBlcm1hbGluazwvYT4KCjwhLS0gYmxvYiBjb250cmliIGtleTogYmxvYl9jb250cmlidXRvcnM6djIxOmVmYWMzNmQwY2RiNmM4OThiMzA0MTU0Y2U2OWI0MDU1IC0tPgoKPGRpdiBjbGFzcz0iZmlsZS1uYXZpZ2F0aW9uIGpzLXplcm9jbGlwYm9hcmQtY29udGFpbmVyIj4KICAKPGRpdiBjbGFzcz0ic2VsZWN0LW1lbnUgYnJhbmNoLXNlbGVjdC1tZW51IGpzLW1lbnUtY29udGFpbmVyIGpzLXNlbGVjdC1tZW51IGxlZnQiPgogIDxidXR0b24gY2xhc3M9ImJ0biBidG4tc20gc2VsZWN0LW1lbnUtYnV0dG9uIGpzLW1lbnUtdGFyZ2V0IGNzcy10cnVuY2F0ZSIgZGF0YS1ob3RrZXk9InciCiAgICB0aXRsZT0ibWFzdGVyIgogICAgdHlwZT0iYnV0dG9uIiBhcmlhLWxhYmVsPSJTd2l0Y2ggYnJhbmNoZXMgb3IgdGFncyIgdGFiaW5kZXg9IjAiIGFyaWEtaGFzcG9wdXA9InRydWUiPgogICAgPGk+QnJhbmNoOjwvaT4KICAgIDxzcGFuIGNsYXNzPSJqcy1zZWxlY3QtYnV0dG9uIGNzcy10cnVuY2F0ZS10YXJnZXQiPm1hc3Rlcjwvc3Bhbj4KICA8L2J1dHRvbj4KCiAgPGRpdiBjbGFzcz0ic2VsZWN0LW1lbnUtbW9kYWwtaG9sZGVyIGpzLW1lbnUtY29udGVudCBqcy1uYXZpZ2F0aW9uLWNvbnRhaW5lciIgZGF0YS1wamF4IGFyaWEtaGlkZGVuPSJ0cnVlIj4KCiAgICA8ZGl2IGNsYXNzPSJzZWxlY3QtbWVudS1tb2RhbCI+CiAgICAgIDxkaXYgY2xhc3M9InNlbGVjdC1tZW51LWhlYWRlciI+CiAgICAgICAgPHN2ZyBhcmlhLWxhYmVsPSJDbG9zZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi14IGpzLW1lbnUtY2xvc2UiIGhlaWdodD0iMTYiIHJvbGU9ImltZyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTIgMTYiIHdpZHRoPSIxMiI+PHBhdGggZD0iTTcuNDggOGwzLjc1IDMuNzUtMS40OCAxLjQ4TDYgOS40OGwtMy43NSAzLjc1LTEuNDgtMS40OEw0LjUyIDggLjc3IDQuMjVsMS40OC0xLjQ4TDYgNi41MmwzLjc1LTMuNzUgMS40OCAxLjQ4eiI+PC9wYXRoPjwvc3ZnPgogICAgICAgIDxzcGFuIGNsYXNzPSJzZWxlY3QtbWVudS10aXRsZSI+U3dpdGNoIGJyYW5jaGVzL3RhZ3M8L3NwYW4+CiAgICAgIDwvZGl2PgoKICAgICAgPGRpdiBjbGFzcz0ic2VsZWN0LW1lbnUtZmlsdGVycyI+CiAgICAgICAgPGRpdiBjbGFzcz0ic2VsZWN0LW1lbnUtdGV4dC1maWx0ZXIiPgogICAgICAgICAgPGlucHV0IHR5cGU9InRleHQiIGFyaWEtbGFiZWw9IkZpbHRlciBicmFuY2hlcy90YWdzIiBpZD0iY29udGV4dC1jb21taXRpc2gtZmlsdGVyLWZpZWxkIiBjbGFzcz0iZm9ybS1jb250cm9sIGpzLWZpbHRlcmFibGUtZmllbGQganMtbmF2aWdhdGlvbi1lbmFibGUiIHBsYWNlaG9sZGVyPSJGaWx0ZXIgYnJhbmNoZXMvdGFncyI+CiAgICAgICAgPC9kaXY+CiAgICAgICAgPGRpdiBjbGFzcz0ic2VsZWN0LW1lbnUtdGFicyI+CiAgICAgICAgICA8dWw+CiAgICAgICAgICAgIDxsaSBjbGFzcz0ic2VsZWN0LW1lbnUtdGFiIj4KICAgICAgICAgICAgICA8YSBocmVmPSIjIiBkYXRhLXRhYi1maWx0ZXI9ImJyYW5jaGVzIiBkYXRhLWZpbHRlci1wbGFjZWhvbGRlcj0iRmlsdGVyIGJyYW5jaGVzL3RhZ3MiIGNsYXNzPSJqcy1zZWxlY3QtbWVudS10YWIiIHJvbGU9InRhYiI+QnJhbmNoZXM8L2E+CiAgICAgICAgICAgIDwvbGk+CiAgICAgICAgICAgIDxsaSBjbGFzcz0ic2VsZWN0LW1lbnUtdGFiIj4KICAgICAgICAgICAgICA8YSBocmVmPSIjIiBkYXRhLXRhYi1maWx0ZXI9InRhZ3MiIGRhdGEtZmlsdGVyLXBsYWNlaG9sZGVyPSJGaW5kIGEgdGFn4oCmIiBjbGFzcz0ianMtc2VsZWN0LW1lbnUtdGFiIiByb2xlPSJ0YWIiPlRhZ3M8L2E+CiAgICAgICAgICAgIDwvbGk+CiAgICAgICAgICA8L3VsPgogICAgICAgIDwvZGl2PgogICAgICA8L2Rpdj4KCiAgICAgIDxkaXYgY2xhc3M9InNlbGVjdC1tZW51LWxpc3Qgc2VsZWN0LW1lbnUtdGFiLWJ1Y2tldCBqcy1zZWxlY3QtbWVudS10YWItYnVja2V0IiBkYXRhLXRhYi1maWx0ZXI9ImJyYW5jaGVzIiByb2xlPSJtZW51Ij4KCiAgICAgICAgPGRpdiBkYXRhLWZpbHRlcmFibGUtZm9yPSJjb250ZXh0LWNvbW1pdGlzaC1maWx0ZXItZmllbGQiIGRhdGEtZmlsdGVyYWJsZS10eXBlPSJzdWJzdHJpbmciPgoKCiAgICAgICAgICAgIDxhIGNsYXNzPSJzZWxlY3QtbWVudS1pdGVtIGpzLW5hdmlnYXRpb24taXRlbSBqcy1uYXZpZ2F0aW9uLW9wZW4gc2VsZWN0ZWQiCiAgICAgICAgICAgICAgIGhyZWY9Ii9jeWNnaXQvd2ViLXN0eWxlL2Jsb2IvbWFzdGVyL3NyYy9mb250cy9pY29uZm9udC5lb3QiCiAgICAgICAgICAgICAgIGRhdGEtbmFtZT0ibWFzdGVyIgogICAgICAgICAgICAgICBkYXRhLXNraXAtcGpheD0idHJ1ZSIKICAgICAgICAgICAgICAgcmVsPSJub2ZvbGxvdyI+CiAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1jaGVjayBzZWxlY3QtbWVudS1pdGVtLWljb24iIGhlaWdodD0iMTYiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEyIDE2IiB3aWR0aD0iMTIiPjxwYXRoIGQ9Ik0xMiA1bC04IDgtNC00IDEuNS0xLjVMNCAxMGw2LjUtNi41eiI+PC9wYXRoPjwvc3ZnPgogICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJzZWxlY3QtbWVudS1pdGVtLXRleHQgY3NzLXRydW5jYXRlLXRhcmdldCBqcy1zZWxlY3QtbWVudS1maWx0ZXItdGV4dCIgdGl0bGU9Im1hc3RlciI+CiAgICAgICAgICAgICAgICBtYXN0ZXIKICAgICAgICAgICAgICA8L3NwYW4+CiAgICAgICAgICAgIDwvYT4KICAgICAgICA8L2Rpdj4KCiAgICAgICAgICA8ZGl2IGNsYXNzPSJzZWxlY3QtbWVudS1uby1yZXN1bHRzIj5Ob3RoaW5nIHRvIHNob3c8L2Rpdj4KICAgICAgPC9kaXY+CgogICAgICA8ZGl2IGNsYXNzPSJzZWxlY3QtbWVudS1saXN0IHNlbGVjdC1tZW51LXRhYi1idWNrZXQganMtc2VsZWN0LW1lbnUtdGFiLWJ1Y2tldCIgZGF0YS10YWItZmlsdGVyPSJ0YWdzIj4KICAgICAgICA8ZGl2IGRhdGEtZmlsdGVyYWJsZS1mb3I9ImNvbnRleHQtY29tbWl0aXNoLWZpbHRlci1maWVsZCIgZGF0YS1maWx0ZXJhYmxlLXR5cGU9InN1YnN0cmluZyI+CgoKICAgICAgICA8L2Rpdj4KCiAgICAgICAgPGRpdiBjbGFzcz0ic2VsZWN0LW1lbnUtbm8tcmVzdWx0cyI+Tm90aGluZyB0byBzaG93PC9kaXY+CiAgICAgIDwvZGl2PgoKICAgIDwvZGl2PgogIDwvZGl2Pgo8L2Rpdj4KCiAgPGRpdiBjbGFzcz0iYnRuLWdyb3VwIHJpZ2h0Ij4KICAgIDxhIGhyZWY9Ii9jeWNnaXQvd2ViLXN0eWxlL2ZpbmQvbWFzdGVyIgogICAgICAgICAgY2xhc3M9ImpzLXBqYXgtY2FwdHVyZS1pbnB1dCBidG4gYnRuLXNtIgogICAgICAgICAgZGF0YS1wamF4CiAgICAgICAgICBkYXRhLWhvdGtleT0idCI+CiAgICAgIEZpbmQgZmlsZQogICAgPC9hPgogICAgPGJ1dHRvbiBhcmlhLWxhYmVsPSJDb3B5IGZpbGUgcGF0aCB0byBjbGlwYm9hcmQiIGNsYXNzPSJqcy16ZXJvY2xpcGJvYXJkIGJ0biBidG4tc20gemVyb2NsaXBib2FyZC1idXR0b24gdG9vbHRpcHBlZCB0b29sdGlwcGVkLXMiIGRhdGEtY29waWVkLWhpbnQ9IkNvcGllZCEiIHR5cGU9ImJ1dHRvbiI+Q29weSBwYXRoPC9idXR0b24+CiAgPC9kaXY+CiAgPGRpdiBjbGFzcz0iYnJlYWRjcnVtYiBqcy16ZXJvY2xpcGJvYXJkLXRhcmdldCI+CiAgICA8c3BhbiBjbGFzcz0icmVwby1yb290IGpzLXJlcG8tcm9vdCI+PHNwYW4gY2xhc3M9ImpzLXBhdGgtc2VnbWVudCI+PGEgaHJlZj0iL2N5Y2dpdC93ZWItc3R5bGUiPjxzcGFuPndlYi1zdHlsZTwvc3Bhbj48L2E+PC9zcGFuPjwvc3Bhbj48c3BhbiBjbGFzcz0ic2VwYXJhdG9yIj4vPC9zcGFuPjxzcGFuIGNsYXNzPSJqcy1wYXRoLXNlZ21lbnQiPjxhIGhyZWY9Ii9jeWNnaXQvd2ViLXN0eWxlL3RyZWUvbWFzdGVyL3NyYyI+PHNwYW4+c3JjPC9zcGFuPjwvYT48L3NwYW4+PHNwYW4gY2xhc3M9InNlcGFyYXRvciI+Lzwvc3Bhbj48c3BhbiBjbGFzcz0ianMtcGF0aC1zZWdtZW50Ij48YSBocmVmPSIvY3ljZ2l0L3dlYi1zdHlsZS90cmVlL21hc3Rlci9zcmMvZm9udHMiPjxzcGFuPmZvbnRzPC9zcGFuPjwvYT48L3NwYW4+PHNwYW4gY2xhc3M9InNlcGFyYXRvciI+Lzwvc3Bhbj48c3Ryb25nIGNsYXNzPSJmaW5hbC1wYXRoIj5pY29uZm9udC5lb3Q8L3N0cm9uZz4KICA8L2Rpdj4KPC9kaXY+Cgo8aW5jbHVkZS1mcmFnbWVudCBjbGFzcz0iY29tbWl0LXRlYXNlIiBzcmM9Ii9jeWNnaXQvd2ViLXN0eWxlL2NvbnRyaWJ1dG9ycy9tYXN0ZXIvc3JjL2ZvbnRzL2ljb25mb250LmVvdCI+CiAgPGRpdj4KICAgIEZldGNoaW5nIGNvbnRyaWJ1dG9ycyZoZWxsaXA7CiAgPC9kaXY+CgogIDxkaXYgY2xhc3M9ImNvbW1pdC10ZWFzZS1jb250cmlidXRvcnMiPgogICAgPGltZyBhbHQ9IiIgY2xhc3M9ImxvYWRlci1sb2FkaW5nIGxlZnQiIGhlaWdodD0iMTYiIHNyYz0iaHR0cHM6Ly9hc3NldHMtY2RuLmdpdGh1Yi5jb20vaW1hZ2VzL3NwaW5uZXJzL29jdG9jYXQtc3Bpbm5lci0zMi1FQUYyRjUuZ2lmIiB3aWR0aD0iMTYiIC8+CiAgICA8c3BhbiBjbGFzcz0ibG9hZGVyLWVycm9yIj5DYW5ub3QgcmV0cmlldmUgY29udHJpYnV0b3JzIGF0IHRoaXMgdGltZTwvc3Bhbj4KICA8L2Rpdj4KPC9pbmNsdWRlLWZyYWdtZW50Pgo8ZGl2IGNsYXNzPSJmaWxlIj4KICA8ZGl2IGNsYXNzPSJmaWxlLWhlYWRlciI+CiAgPGRpdiBjbGFzcz0iZmlsZS1hY3Rpb25zIj4KCiAgICA8ZGl2IGNsYXNzPSJidG4tZ3JvdXAiPgogICAgICA8YSBocmVmPSIvY3ljZ2l0L3dlYi1zdHlsZS9yYXcvbWFzdGVyL3NyYy9mb250cy9pY29uZm9udC5lb3QiIGNsYXNzPSJidG4gYnRuLXNtICIgaWQ9InJhdy11cmwiPlJhdzwvYT4KICAgICAgPGEgaHJlZj0iL2N5Y2dpdC93ZWItc3R5bGUvY29tbWl0cy9tYXN0ZXIvc3JjL2ZvbnRzL2ljb25mb250LmVvdCIgY2xhc3M9ImJ0biBidG4tc20gIiByZWw9Im5vZm9sbG93Ij5IaXN0b3J5PC9hPgogICAgPC9kaXY+CgogICAgICAgIDxhIGNsYXNzPSJidG4tb2N0aWNvbiB0b29sdGlwcGVkIHRvb2x0aXBwZWQtbnciCiAgICAgICAgICAgaHJlZj0iZ2l0aHViLW1hYzovL29wZW5SZXBvL2h0dHBzOi8vZ2l0aHViLmNvbS9jeWNnaXQvd2ViLXN0eWxlP2JyYW5jaD1tYXN0ZXImYW1wO2ZpbGVwYXRoPXNyYyUyRmZvbnRzJTJGaWNvbmZvbnQuZW90IgogICAgICAgICAgIGFyaWEtbGFiZWw9Ik9wZW4gdGhpcyBmaWxlIGluIEdpdEh1YiBEZXNrdG9wIgogICAgICAgICAgIGRhdGEtZ2EtY2xpY2s9IlJlcG9zaXRvcnksIG9wZW4gd2l0aCBkZXNrdG9wLCB0eXBlOm1hYyI+CiAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJvY3RpY29uIG9jdGljb24tZGV2aWNlLWRlc2t0b3AiIGhlaWdodD0iMTYiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE2IDE2IiB3aWR0aD0iMTYiPjxwYXRoIGQ9Ik0xNSAySDFjLS41NSAwLTEgLjQ1LTEgMXY5YzAgLjU1LjQ1IDEgMSAxaDUuMzRjLS4yNS42MS0uODYgMS4zOS0yLjM0IDJoOGMtMS40OC0uNjEtMi4wOS0xLjM5LTIuMzQtMkgxNWMuNTUgMCAxLS40NSAxLTFWM2MwLS41NS0uNDUtMS0xLTF6bTAgOUgxVjNoMTR2OHoiPjwvcGF0aD48L3N2Zz4KICAgICAgICA8L2E+CgogICAgICAgIDwhLS0gPC90ZXh0YXJlYT4gLS0+PCEtLSAnImAgLS0+PGZvcm0gYWNjZXB0LWNoYXJzZXQ9IlVURi04IiBhY3Rpb249Ii9jeWNnaXQvd2ViLXN0eWxlL2RlbGV0ZS9tYXN0ZXIvc3JjL2ZvbnRzL2ljb25mb250LmVvdCIgY2xhc3M9ImlubGluZS1mb3JtIiBkYXRhLWZvcm0tbm9uY2U9IjM2MDE1NjQyZDA0OWI1YjQ2NjcwZGQzNWRhYWIwYmUxYzk3NWI5ODQiIG1ldGhvZD0icG9zdCI+PGRpdiBzdHlsZT0ibWFyZ2luOjA7cGFkZGluZzowO2Rpc3BsYXk6aW5saW5lIj48aW5wdXQgbmFtZT0idXRmOCIgdHlwZT0iaGlkZGVuIiB2YWx1ZT0iJiN4MjcxMzsiIC8+PGlucHV0IG5hbWU9ImF1dGhlbnRpY2l0eV90b2tlbiIgdHlwZT0iaGlkZGVuIiB2YWx1ZT0iZ281c2FYTXY0dnhCN3V0TEJUSXZyaGpHSUVraWlqUU1aV3Q0SzMzQmJVcjZHVjJrc0JMZ0JTYUptdzhFYXN5c2xmbmVnMk1HZnhzYW0vUTdsYjNLMFE9PSIgLz48L2Rpdj4KICAgICAgICAgIDxidXR0b24gY2xhc3M9ImJ0bi1vY3RpY29uIGJ0bi1vY3RpY29uLWRhbmdlciB0b29sdGlwcGVkIHRvb2x0aXBwZWQtbnciIHR5cGU9InN1Ym1pdCIKICAgICAgICAgICAgYXJpYS1sYWJlbD0iRm9yayB0aGlzIHByb2plY3QgYW5kIGRlbGV0ZSB0aGUgZmlsZSIgZGF0YS1kaXNhYmxlLXdpdGg+CiAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJvY3RpY29uIG9jdGljb24tdHJhc2hjYW4iIGhlaWdodD0iMTYiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEyIDE2IiB3aWR0aD0iMTIiPjxwYXRoIGQ9Ik0xMSAySDljMC0uNTUtLjQ1LTEtMS0xSDVjLS41NSAwLTEgLjQ1LTEgMUgyYy0uNTUgMC0xIC40NS0xIDF2MWMwIC41NS40NSAxIDEgMXY5YzAgLjU1LjQ1IDEgMSAxaDdjLjU1IDAgMS0uNDUgMS0xVjVjLjU1IDAgMS0uNDUgMS0xVjNjMC0uNTUtLjQ1LTEtMS0xem0tMSAxMkgzVjVoMXY4aDFWNWgxdjhoMVY1aDF2OGgxVjVoMXY5em0xLTEwSDJWM2g5djF6Ij48L3BhdGg+PC9zdmc+CiAgICAgICAgICA8L2J1dHRvbj4KPC9mb3JtPiAgPC9kaXY+CgogIDxkaXYgY2xhc3M9ImZpbGUtaW5mbyI+CiAgICA1NS40IEtCCiAgPC9kaXY+CjwvZGl2PgoKICAKCiAgPGRpdiBpdGVtcHJvcD0idGV4dCIgY2xhc3M9ImJsb2Itd3JhcHBlciBkYXRhIHR5cGUtdGV4dCI+CiAgICAgIDxkaXYgY2xhc3M9ImltYWdlIj4KICAgICAgICAgIDxhIGhyZWY9Ii9jeWNnaXQvd2ViLXN0eWxlL2Jsb2IvbWFzdGVyL3NyYy9mb250cy9pY29uZm9udC5lb3Q/cmF3PXRydWUiPlZpZXcgUmF3PC9hPgogICAgICA8L2Rpdj4KICA8L2Rpdj4KCjwvZGl2PgoKPGJ1dHRvbiB0eXBlPSJidXR0b24iIGRhdGEtZmFjZWJveD0iI2p1bXAtdG8tbGluZSIgZGF0YS1mYWNlYm94LWNsYXNzPSJsaW5lanVtcCIgZGF0YS1ob3RrZXk9ImwiIGNsYXNzPSJoaWRkZW4iPkp1bXAgdG8gTGluZTwvYnV0dG9uPgo8ZGl2IGlkPSJqdW1wLXRvLWxpbmUiIHN0eWxlPSJkaXNwbGF5Om5vbmUiPgogIDwhLS0gPC90ZXh0YXJlYT4gLS0+PCEtLSAnImAgLS0+PGZvcm0gYWNjZXB0LWNoYXJzZXQ9IlVURi04IiBhY3Rpb249IiIgY2xhc3M9ImpzLWp1bXAtdG8tbGluZS1mb3JtIiBtZXRob2Q9ImdldCI+PGRpdiBzdHlsZT0ibWFyZ2luOjA7cGFkZGluZzowO2Rpc3BsYXk6aW5saW5lIj48aW5wdXQgbmFtZT0idXRmOCIgdHlwZT0iaGlkZGVuIiB2YWx1ZT0iJiN4MjcxMzsiIC8+PC9kaXY+CiAgICA8aW5wdXQgY2xhc3M9ImZvcm0tY29udHJvbCBsaW5lanVtcC1pbnB1dCBqcy1qdW1wLXRvLWxpbmUtZmllbGQiIHR5cGU9InRleHQiIHBsYWNlaG9sZGVyPSJKdW1wIHRvIGxpbmUmaGVsbGlwOyIgYXJpYS1sYWJlbD0iSnVtcCB0byBsaW5lIiBhdXRvZm9jdXM+CiAgICA8YnV0dG9uIHR5cGU9InN1Ym1pdCIgY2xhc3M9ImJ0biI+R288L2J1dHRvbj4KPC9mb3JtPjwvZGl2PgoKICA8L2Rpdj4KICA8ZGl2IGNsYXNzPSJtb2RhbC1iYWNrZHJvcCBqcy10b3VjaC1ldmVudHMiPjwvZGl2Pgo8L2Rpdj4KCgogICAgPC9kaXY+CiAgPC9kaXY+CgogICAgPC9kaXY+CgogICAgICAgIDxkaXYgY2xhc3M9ImNvbnRhaW5lciBzaXRlLWZvb3Rlci1jb250YWluZXIiPgogIDxkaXYgY2xhc3M9InNpdGUtZm9vdGVyIiByb2xlPSJjb250ZW50aW5mbyI+CiAgICA8dWwgY2xhc3M9InNpdGUtZm9vdGVyLWxpbmtzIHJpZ2h0Ij4KICAgICAgICA8bGk+PGEgaHJlZj0iaHR0cHM6Ly9zdGF0dXMuZ2l0aHViLmNvbS8iIGRhdGEtZ2EtY2xpY2s9IkZvb3RlciwgZ28gdG8gc3RhdHVzLCB0ZXh0OnN0YXR1cyI+U3RhdHVzPC9hPjwvbGk+CiAgICAgIDxsaT48YSBocmVmPSJodHRwczovL2RldmVsb3Blci5naXRodWIuY29tIiBkYXRhLWdhLWNsaWNrPSJGb290ZXIsIGdvIHRvIGFwaSwgdGV4dDphcGkiPkFQSTwvYT48L2xpPgogICAgICA8bGk+PGEgaHJlZj0iaHR0cHM6Ly90cmFpbmluZy5naXRodWIuY29tIiBkYXRhLWdhLWNsaWNrPSJGb290ZXIsIGdvIHRvIHRyYWluaW5nLCB0ZXh0OnRyYWluaW5nIj5UcmFpbmluZzwvYT48L2xpPgogICAgICA8bGk+PGEgaHJlZj0iaHR0cHM6Ly9zaG9wLmdpdGh1Yi5jb20iIGRhdGEtZ2EtY2xpY2s9IkZvb3RlciwgZ28gdG8gc2hvcCwgdGV4dDpzaG9wIj5TaG9wPC9hPjwvbGk+CiAgICAgICAgPGxpPjxhIGhyZWY9Imh0dHBzOi8vZ2l0aHViLmNvbS9ibG9nIiBkYXRhLWdhLWNsaWNrPSJGb290ZXIsIGdvIHRvIGJsb2csIHRleHQ6YmxvZyI+QmxvZzwvYT48L2xpPgogICAgICAgIDxsaT48YSBocmVmPSJodHRwczovL2dpdGh1Yi5jb20vYWJvdXQiIGRhdGEtZ2EtY2xpY2s9IkZvb3RlciwgZ28gdG8gYWJvdXQsIHRleHQ6YWJvdXQiPkFib3V0PC9hPjwvbGk+CgogICAgPC91bD4KCiAgICA8YSBocmVmPSJodHRwczovL2dpdGh1Yi5jb20iIGFyaWEtbGFiZWw9IkhvbWVwYWdlIiBjbGFzcz0ic2l0ZS1mb290ZXItbWFyayIgdGl0bGU9IkdpdEh1YiI+CiAgICAgIDxzdmcgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJvY3RpY29uIG9jdGljb24tbWFyay1naXRodWIiIGhlaWdodD0iMjQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE2IDE2IiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik04IDBDMy41OCAwIDAgMy41OCAwIDhjMCAzLjU0IDIuMjkgNi41MyA1LjQ3IDcuNTkuNC4wNy41NS0uMTcuNTUtLjM4IDAtLjE5LS4wMS0uODItLjAxLTEuNDktMi4wMS4zNy0yLjUzLS40OS0yLjY5LS45NC0uMDktLjIzLS40OC0uOTQtLjgyLTEuMTMtLjI4LS4xNS0uNjgtLjUyLS4wMS0uNTMuNjMtLjAxIDEuMDguNTggMS4yMy44Mi43MiAxLjIxIDEuODcuODcgMi4zMy42Ni4wNy0uNTIuMjgtLjg3LjUxLTEuMDctMS43OC0uMi0zLjY0LS44OS0zLjY0LTMuOTUgMC0uODcuMzEtMS41OS44Mi0yLjE1LS4wOC0uMi0uMzYtMS4wMi4wOC0yLjEyIDAgMCAuNjctLjIxIDIuMi44Mi42NC0uMTggMS4zMi0uMjcgMi0uMjcuNjggMCAxLjM2LjA5IDIgLjI3IDEuNTMtMS4wNCAyLjItLjgyIDIuMi0uODIuNDQgMS4xLjE2IDEuOTIuMDggMi4xMi41MS41Ni44MiAxLjI3LjgyIDIuMTUgMCAzLjA3LTEuODcgMy43NS0zLjY1IDMuOTUuMjkuMjUuNTQuNzMuNTQgMS40OCAwIDEuMDctLjAxIDEuOTMtLjAxIDIuMiAwIC4yMS4xNS40Ni41NS4zOEE4LjAxMyA4LjAxMyAwIDAgMCAxNiA4YzAtNC40Mi0zLjU4LTgtOC04eiI+PC9wYXRoPjwvc3ZnPgo8L2E+CiAgICA8dWwgY2xhc3M9InNpdGUtZm9vdGVyLWxpbmtzIj4KICAgICAgPGxpPiZjb3B5OyAyMDE2IDxzcGFuIHRpdGxlPSIwLjA3NzgwcyBmcm9tIGdpdGh1Yi1mZTE0My1jcDEtcHJkLmlhZC5naXRodWIubmV0Ij5HaXRIdWI8L3NwYW4+LCBJbmMuPC9saT4KICAgICAgICA8bGk+PGEgaHJlZj0iaHR0cHM6Ly9naXRodWIuY29tL3NpdGUvdGVybXMiIGRhdGEtZ2EtY2xpY2s9IkZvb3RlciwgZ28gdG8gdGVybXMsIHRleHQ6dGVybXMiPlRlcm1zPC9hPjwvbGk+CiAgICAgICAgPGxpPjxhIGhyZWY9Imh0dHBzOi8vZ2l0aHViLmNvbS9zaXRlL3ByaXZhY3kiIGRhdGEtZ2EtY2xpY2s9IkZvb3RlciwgZ28gdG8gcHJpdmFjeSwgdGV4dDpwcml2YWN5Ij5Qcml2YWN5PC9hPjwvbGk+CiAgICAgICAgPGxpPjxhIGhyZWY9Imh0dHBzOi8vZ2l0aHViLmNvbS9zZWN1cml0eSIgZGF0YS1nYS1jbGljaz0iRm9vdGVyLCBnbyB0byBzZWN1cml0eSwgdGV4dDpzZWN1cml0eSI+U2VjdXJpdHk8L2E+PC9saT4KICAgICAgICA8bGk+PGEgaHJlZj0iaHR0cHM6Ly9naXRodWIuY29tL2NvbnRhY3QiIGRhdGEtZ2EtY2xpY2s9IkZvb3RlciwgZ28gdG8gY29udGFjdCwgdGV4dDpjb250YWN0Ij5Db250YWN0PC9hPjwvbGk+CiAgICAgICAgPGxpPjxhIGhyZWY9Imh0dHBzOi8vaGVscC5naXRodWIuY29tIiBkYXRhLWdhLWNsaWNrPSJGb290ZXIsIGdvIHRvIGhlbHAsIHRleHQ6aGVscCI+SGVscDwvYT48L2xpPgogICAgPC91bD4KICA8L2Rpdj4KPC9kaXY+CgoKCiAgICAKCiAgICA8ZGl2IGlkPSJhamF4LWVycm9yLW1lc3NhZ2UiIGNsYXNzPSJhamF4LWVycm9yLW1lc3NhZ2UgZmxhc2ggZmxhc2gtZXJyb3IiPgogICAgICA8c3ZnIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzcz0ib2N0aWNvbiBvY3RpY29uLWFsZXJ0IiBoZWlnaHQ9IjE2IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2Ij48cGF0aCBkPSJNOC44NjUgMS41MmMtLjE4LS4zMS0uNTEtLjUtLjg3LS41cy0uNjkuMTktLjg3LjVMLjI3NSAxMy41Yy0uMTguMzEtLjE4LjY5IDAgMSAuMTkuMzEuNTIuNS44Ny41aDEzLjdjLjM2IDAgLjY5LS4xOS44Ni0uNS4xNy0uMzEuMTgtLjY5LjAxLTFMOC44NjUgMS41MnpNOC45OTUgMTNoLTJ2LTJoMnYyem0wLTNoLTJWNmgydjR6Ij48L3BhdGg+PC9zdmc+CiAgICAgIDxidXR0b24gdHlwZT0iYnV0dG9uIiBjbGFzcz0iZmxhc2gtY2xvc2UganMtZmxhc2gtY2xvc2UganMtYWpheC1lcnJvci1kaXNtaXNzIiBhcmlhLWxhYmVsPSJEaXNtaXNzIGVycm9yIj4KICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzcz0ib2N0aWNvbiBvY3RpY29uLXgiIGhlaWdodD0iMTYiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEyIDE2IiB3aWR0aD0iMTIiPjxwYXRoIGQ9Ik03LjQ4IDhsMy43NSAzLjc1LTEuNDggMS40OEw2IDkuNDhsLTMuNzUgMy43NS0xLjQ4LTEuNDhMNC41MiA4IC43NyA0LjI1bDEuNDgtMS40OEw2IDYuNTJsMy43NS0zLjc1IDEuNDggMS40OHoiPjwvcGF0aD48L3N2Zz4KICAgICAgPC9idXR0b24+CiAgICAgIFNvbWV0aGluZyB3ZW50IHdyb25nIHdpdGggdGhhdCByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluLgogICAgPC9kaXY+CgoKICAgICAgCiAgICAgIDxzY3JpcHQgY3Jvc3NvcmlnaW49ImFub255bW91cyIgaW50ZWdyaXR5PSJzaGEyNTYtK2FRR0YrWHFjVFF0eFhFRFZVc0hvOEh0eUljU3NFM2hvRUN1MUVpUm9SMD0iIHNyYz0iaHR0cHM6Ly9hc3NldHMtY2RuLmdpdGh1Yi5jb20vYXNzZXRzL2ZyYW1ld29ya3MtZjlhNDA2MTdlNWVhNzEzNDJkYzU3MTAzNTU0YjA3YTNjMWVkYzg4NzEyYjA0ZGUxYTA0MGFlZDQ0ODkxYTExZC5qcyI+PC9zY3JpcHQ+CiAgICAgIDxzY3JpcHQgYXN5bmM9ImFzeW5jIiBjcm9zc29yaWdpbj0iYW5vbnltb3VzIiBpbnRlZ3JpdHk9InNoYTI1Ni1GYUFSdkJldVdNR010MFY5WVpRcEJLUDRmWDFkWmZjK3B1dkV6NllQUGJjPSIgc3JjPSJodHRwczovL2Fzc2V0cy1jZG4uZ2l0aHViLmNvbS9hc3NldHMvZ2l0aHViLTE1YTAxMWJjMTdhZTU4YzE4Y2I3NDU3ZDYxOTQyOTA0YTNmODdkN2Q1ZDY1ZjczZWE2ZWJjNGNmYTYwZjNkYjcuanMiPjwvc2NyaXB0PgogICAgICAKICAgICAgCiAgICAgIAogICAgICAKICAgICAgCiAgICAgIAogICAgPGRpdiBjbGFzcz0ianMtc3RhbGUtc2Vzc2lvbi1mbGFzaCBzdGFsZS1zZXNzaW9uLWZsYXNoIGZsYXNoIGZsYXNoLXdhcm4gZmxhc2gtYmFubmVyIGhpZGRlbiI+CiAgICAgIDxzdmcgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJvY3RpY29uIG9jdGljb24tYWxlcnQiIGhlaWdodD0iMTYiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE2IDE2IiB3aWR0aD0iMTYiPjxwYXRoIGQ9Ik04Ljg2NSAxLjUyYy0uMTgtLjMxLS41MS0uNS0uODctLjVzLS42OS4xOS0uODcuNUwuMjc1IDEzLjVjLS4xOC4zMS0uMTguNjkgMCAxIC4xOS4zMS41Mi41Ljg3LjVoMTMuN2MuMzYgMCAuNjktLjE5Ljg2LS41LjE3LS4zMS4xOC0uNjkuMDEtMUw4Ljg2NSAxLjUyek04Ljk5NSAxM2gtMnYtMmgydjJ6bTAtM2gtMlY2aDJ2NHoiPjwvcGF0aD48L3N2Zz4KICAgICAgPHNwYW4gY2xhc3M9InNpZ25lZC1pbi10YWItZmxhc2giPllvdSBzaWduZWQgaW4gd2l0aCBhbm90aGVyIHRhYiBvciB3aW5kb3cuIDxhIGhyZWY9IiI+UmVsb2FkPC9hPiB0byByZWZyZXNoIHlvdXIgc2Vzc2lvbi48L3NwYW4+CiAgICAgIDxzcGFuIGNsYXNzPSJzaWduZWQtb3V0LXRhYi1mbGFzaCI+WW91IHNpZ25lZCBvdXQgaW4gYW5vdGhlciB0YWIgb3Igd2luZG93LiA8YSBocmVmPSIiPlJlbG9hZDwvYT4gdG8gcmVmcmVzaCB5b3VyIHNlc3Npb24uPC9zcGFuPgogICAgPC9kaXY+CiAgICA8ZGl2IGNsYXNzPSJmYWNlYm94IiBpZD0iZmFjZWJveCIgc3R5bGU9ImRpc3BsYXk6bm9uZTsiPgogIDxkaXYgY2xhc3M9ImZhY2Vib3gtcG9wdXAiPgogICAgPGRpdiBjbGFzcz0iZmFjZWJveC1jb250ZW50IiByb2xlPSJkaWFsb2ciIGFyaWEtbGFiZWxsZWRieT0iZmFjZWJveC1oZWFkZXIiIGFyaWEtZGVzY3JpYmVkYnk9ImZhY2Vib3gtZGVzY3JpcHRpb24iPgogICAgPC9kaXY+CiAgICA8YnV0dG9uIHR5cGU9ImJ1dHRvbiIgY2xhc3M9ImZhY2Vib3gtY2xvc2UganMtZmFjZWJveC1jbG9zZSIgYXJpYS1sYWJlbD0iQ2xvc2UgbW9kYWwiPgogICAgICA8c3ZnIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzcz0ib2N0aWNvbiBvY3RpY29uLXgiIGhlaWdodD0iMTYiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEyIDE2IiB3aWR0aD0iMTIiPjxwYXRoIGQ9Ik03LjQ4IDhsMy43NSAzLjc1LTEuNDggMS40OEw2IDkuNDhsLTMuNzUgMy43NS0xLjQ4LTEuNDhMNC41MiA4IC43NyA0LjI1bDEuNDgtMS40OEw2IDYuNTJsMy43NS0zLjc1IDEuNDggMS40OHoiPjwvcGF0aD48L3N2Zz4KICAgIDwvYnV0dG9uPgogIDwvZGl2Pgo8L2Rpdj4KCiAgPC9ib2R5Pgo8L2h0bWw+Cgo="

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "data:application/font-woff;base64,CgoKCjwhRE9DVFlQRSBodG1sPgo8aHRtbCBsYW5nPSJlbiIgY2xhc3M9IiBpcy1jb3B5LWVuYWJsZWQgZW1vamktc2l6ZS1ib29zdCBpcy11MmYtZW5hYmxlZCI+CiAgPGhlYWQgcHJlZml4PSJvZzogaHR0cDovL29ncC5tZS9ucyMgZmI6IGh0dHA6Ly9vZ3AubWUvbnMvZmIjIG9iamVjdDogaHR0cDovL29ncC5tZS9ucy9vYmplY3QjIGFydGljbGU6IGh0dHA6Ly9vZ3AubWUvbnMvYXJ0aWNsZSMgcHJvZmlsZTogaHR0cDovL29ncC5tZS9ucy9wcm9maWxlIyI+CiAgICA8bWV0YSBjaGFyc2V0PSd1dGYtOCc+CgogICAgPGxpbmsgY3Jvc3NvcmlnaW49ImFub255bW91cyIgaHJlZj0iaHR0cHM6Ly9hc3NldHMtY2RuLmdpdGh1Yi5jb20vYXNzZXRzL2ZyYW1ld29ya3MtMDZlNGQ4ZjU5ZjViOTI3ZjEzOTE5YzQyM2Y0MGYwODg4ZjM3ZjlhZjdmNDI2ZTQwMjA5NDhiMDBiOTM3MTA1OS5jc3MiIGludGVncml0eT0ic2hhMjU2LUJ1VFk5Wjlia244VGtaeENQMER3aUk4MythOS9RbTVBSUpTTEFMazNFRms9IiBtZWRpYT0iYWxsIiByZWw9InN0eWxlc2hlZXQiIC8+CiAgICA8bGluayBjcm9zc29yaWdpbj0iYW5vbnltb3VzIiBocmVmPSJodHRwczovL2Fzc2V0cy1jZG4uZ2l0aHViLmNvbS9hc3NldHMvZ2l0aHViLWJkMGM2MzhjNjE5NWUwYmIzYmU5MWU2OGY2NDEzYTM4Yjc2YmE3OTI1OGQxMzY3NWNhMmJhZGE1NDkzY2M3YTIuY3NzIiBpbnRlZ3JpdHk9InNoYTI1Ni12UXhqakdHVjRMczc2UjVvOWtFNk9MZHJwNUpZMFRaMXlpdXRwVWs4eDZJPSIgbWVkaWE9ImFsbCIgcmVsPSJzdHlsZXNoZWV0IiAvPgogICAgCiAgICAKICAgIAogICAgCiAgICAKCiAgICA8bGluayBhcz0ic2NyaXB0IiBocmVmPSJodHRwczovL2Fzc2V0cy1jZG4uZ2l0aHViLmNvbS9hc3NldHMvZnJhbWV3b3Jrcy1mOWE0MDYxN2U1ZWE3MTM0MmRjNTcxMDM1NTRiMDdhM2MxZWRjODg3MTJiMDRkZTFhMDQwYWVkNDQ4OTFhMTFkLmpzIiByZWw9InByZWxvYWQiIC8+CiAgICAKICAgIDxsaW5rIGFzPSJzY3JpcHQiIGhyZWY9Imh0dHBzOi8vYXNzZXRzLWNkbi5naXRodWIuY29tL2Fzc2V0cy9naXRodWItMTVhMDExYmMxN2FlNThjMThjYjc0NTdkNjE5NDI5MDRhM2Y4N2Q3ZDVkNjVmNzNlYTZlYmM0Y2ZhNjBmM2RiNy5qcyIgcmVsPSJwcmVsb2FkIiAvPgoKICAgIDxtZXRhIGh0dHAtZXF1aXY9IlgtVUEtQ29tcGF0aWJsZSIgY29udGVudD0iSUU9ZWRnZSI+CiAgICA8bWV0YSBodHRwLWVxdWl2PSJDb250ZW50LUxhbmd1YWdlIiBjb250ZW50PSJlbiI+CiAgICA8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoIj4KICAgIAogICAgCiAgICA8dGl0bGU+d2ViLXN0eWxlL2ljb25mb250LndvZmYgYXQgbWFzdGVyIMK3IGN5Y2dpdC93ZWItc3R5bGU8L3RpdGxlPgogICAgPGxpbmsgcmVsPSJzZWFyY2giIHR5cGU9ImFwcGxpY2F0aW9uL29wZW5zZWFyY2hkZXNjcmlwdGlvbit4bWwiIGhyZWY9Ii9vcGVuc2VhcmNoLnhtbCIgdGl0bGU9IkdpdEh1YiI+CiAgICA8bGluayByZWw9ImZsdWlkLWljb24iIGhyZWY9Imh0dHBzOi8vZ2l0aHViLmNvbS9mbHVpZGljb24ucG5nIiB0aXRsZT0iR2l0SHViIj4KICAgIDxsaW5rIHJlbD0iYXBwbGUtdG91Y2gtaWNvbiIgaHJlZj0iL2FwcGxlLXRvdWNoLWljb24ucG5nIj4KICAgIDxsaW5rIHJlbD0iYXBwbGUtdG91Y2gtaWNvbiIgc2l6ZXM9IjU3eDU3IiBocmVmPSIvYXBwbGUtdG91Y2gtaWNvbi01N3g1Ny5wbmciPgogICAgPGxpbmsgcmVsPSJhcHBsZS10b3VjaC1pY29uIiBzaXplcz0iNjB4NjAiIGhyZWY9Ii9hcHBsZS10b3VjaC1pY29uLTYweDYwLnBuZyI+CiAgICA8bGluayByZWw9ImFwcGxlLXRvdWNoLWljb24iIHNpemVzPSI3Mng3MiIgaHJlZj0iL2FwcGxlLXRvdWNoLWljb24tNzJ4NzIucG5nIj4KICAgIDxsaW5rIHJlbD0iYXBwbGUtdG91Y2gtaWNvbiIgc2l6ZXM9Ijc2eDc2IiBocmVmPSIvYXBwbGUtdG91Y2gtaWNvbi03Nng3Ni5wbmciPgogICAgPGxpbmsgcmVsPSJhcHBsZS10b3VjaC1pY29uIiBzaXplcz0iMTE0eDExNCIgaHJlZj0iL2FwcGxlLXRvdWNoLWljb24tMTE0eDExNC5wbmciPgogICAgPGxpbmsgcmVsPSJhcHBsZS10b3VjaC1pY29uIiBzaXplcz0iMTIweDEyMCIgaHJlZj0iL2FwcGxlLXRvdWNoLWljb24tMTIweDEyMC5wbmciPgogICAgPGxpbmsgcmVsPSJhcHBsZS10b3VjaC1pY29uIiBzaXplcz0iMTQ0eDE0NCIgaHJlZj0iL2FwcGxlLXRvdWNoLWljb24tMTQ0eDE0NC5wbmciPgogICAgPGxpbmsgcmVsPSJhcHBsZS10b3VjaC1pY29uIiBzaXplcz0iMTUyeDE1MiIgaHJlZj0iL2FwcGxlLXRvdWNoLWljb24tMTUyeDE1Mi5wbmciPgogICAgPGxpbmsgcmVsPSJhcHBsZS10b3VjaC1pY29uIiBzaXplcz0iMTgweDE4MCIgaHJlZj0iL2FwcGxlLXRvdWNoLWljb24tMTgweDE4MC5wbmciPgogICAgPG1ldGEgcHJvcGVydHk9ImZiOmFwcF9pZCIgY29udGVudD0iMTQwMTQ4ODY5MzQzNjUyOCI+CgogICAgICA8bWV0YSBjb250ZW50PSJodHRwczovL2F2YXRhcnMwLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzEzMTEyMDE0P3Y9MyZhbXA7cz00MDAiIG5hbWU9InR3aXR0ZXI6aW1hZ2U6c3JjIiAvPjxtZXRhIGNvbnRlbnQ9IkBnaXRodWIiIG5hbWU9InR3aXR0ZXI6c2l0ZSIgLz48bWV0YSBjb250ZW50PSJzdW1tYXJ5IiBuYW1lPSJ0d2l0dGVyOmNhcmQiIC8+PG1ldGEgY29udGVudD0iY3ljZ2l0L3dlYi1zdHlsZSIgbmFtZT0idHdpdHRlcjp0aXRsZSIgLz48bWV0YSBjb250ZW50PSJ3ZWItc3R5bGUgLSB3ZWLlhaznlKjmoLflvI/nu4Tku7blupMiIG5hbWU9InR3aXR0ZXI6ZGVzY3JpcHRpb24iIC8+CiAgICAgIDxtZXRhIGNvbnRlbnQ9Imh0dHBzOi8vYXZhdGFyczAuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvMTMxMTIwMTQ/dj0zJmFtcDtzPTQwMCIgcHJvcGVydHk9Im9nOmltYWdlIiAvPjxtZXRhIGNvbnRlbnQ9IkdpdEh1YiIgcHJvcGVydHk9Im9nOnNpdGVfbmFtZSIgLz48bWV0YSBjb250ZW50PSJvYmplY3QiIHByb3BlcnR5PSJvZzp0eXBlIiAvPjxtZXRhIGNvbnRlbnQ9ImN5Y2dpdC93ZWItc3R5bGUiIHByb3BlcnR5PSJvZzp0aXRsZSIgLz48bWV0YSBjb250ZW50PSJodHRwczovL2dpdGh1Yi5jb20vY3ljZ2l0L3dlYi1zdHlsZSIgcHJvcGVydHk9Im9nOnVybCIgLz48bWV0YSBjb250ZW50PSJ3ZWItc3R5bGUgLSB3ZWLlhaznlKjmoLflvI/nu4Tku7blupMiIHByb3BlcnR5PSJvZzpkZXNjcmlwdGlvbiIgLz4KICAgICAgPG1ldGEgbmFtZT0iYnJvd3Nlci1zdGF0cy11cmwiIGNvbnRlbnQ9Imh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vX3ByaXZhdGUvYnJvd3Nlci9zdGF0cyI+CiAgICA8bWV0YSBuYW1lPSJicm93c2VyLWVycm9ycy11cmwiIGNvbnRlbnQ9Imh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vX3ByaXZhdGUvYnJvd3Nlci9lcnJvcnMiPgogICAgPGxpbmsgcmVsPSJhc3NldHMiIGhyZWY9Imh0dHBzOi8vYXNzZXRzLWNkbi5naXRodWIuY29tLyI+CiAgICA8bGluayByZWw9IndlYi1zb2NrZXQiIGhyZWY9IndzczovL2xpdmUuZ2l0aHViLmNvbS9fc29ja2V0cy9NVGt3T0RRMk9tSTVOelF4TW1Zek9UWTVaamRpTlRreU1qa3dNemM0WVdSbU1UVXlPVGM0T2pWbU1qTXdNekV6WmpVMU9XVTFZekU1T0Roa1l6bGpaV1kwT0dOalpESmtZMk01TjJVME16Sm1OVGRtWm1RMk1EZ3hPV0l6TWpkaVkyVTFNemRpWW1FPS0tZmNlZDc4OWU1OTYyNTA4ODk0MTAzN2EzMDM0YmM4OGJmMjBjZWRlZiI+CiAgICA8bWV0YSBuYW1lPSJwamF4LXRpbWVvdXQiIGNvbnRlbnQ9IjEwMDAiPgogICAgPGxpbmsgcmVsPSJzdWRvLW1vZGFsIiBocmVmPSIvc2Vzc2lvbnMvc3Vkb19tb2RhbCI+CgogICAgPG1ldGEgbmFtZT0ibXNhcHBsaWNhdGlvbi1UaWxlSW1hZ2UiIGNvbnRlbnQ9Ii93aW5kb3dzLXRpbGUucG5nIj4KICAgIDxtZXRhIG5hbWU9Im1zYXBwbGljYXRpb24tVGlsZUNvbG9yIiBjb250ZW50PSIjZmZmZmZmIj4KICAgIDxtZXRhIG5hbWU9InNlbGVjdGVkLWxpbmsiIHZhbHVlPSJyZXBvX3NvdXJjZSIgZGF0YS1wamF4LXRyYW5zaWVudD4KCiAgICA8bWV0YSBuYW1lPSJnb29nbGUtc2l0ZS12ZXJpZmljYXRpb24iIGNvbnRlbnQ9IktUNWdzOGgwd3ZhYWdMS0FWV3E4YmJlTnduWlpLMXIxWFF5c1gzeHVyTFUiPgo8bWV0YSBuYW1lPSJnb29nbGUtc2l0ZS12ZXJpZmljYXRpb24iIGNvbnRlbnQ9Ilp6aFZ5RUZ3Yjd3M2UwLXVPVGx0bThKc2NrMkY1U3RWaWhEMGV4dzJmc0EiPgogICAgPG1ldGEgbmFtZT0iZ29vZ2xlLWFuYWx5dGljcyIgY29udGVudD0iVUEtMzc2OTY5MS0yIj4KCjxtZXRhIGNvbnRlbnQ9ImNvbGxlY3Rvci5naXRodWJhcHAuY29tIiBuYW1lPSJvY3RvbHl0aWNzLWhvc3QiIC8+PG1ldGEgY29udGVudD0iZ2l0aHViIiBuYW1lPSJvY3RvbHl0aWNzLWFwcC1pZCIgLz48bWV0YSBjb250ZW50PSI3ODM0MTg5NjoxMkQ0OjE5NUFEQTE1OjU3NzAwQjA1IiBuYW1lPSJvY3RvbHl0aWNzLWRpbWVuc2lvbi1yZXF1ZXN0X2lkIiAvPjxtZXRhIGNvbnRlbnQ9IjE5MDg0NiIgbmFtZT0ib2N0b2x5dGljcy1hY3Rvci1pZCIgLz48bWV0YSBjb250ZW50PSJSdWJ5TG91dnJlIiBuYW1lPSJvY3RvbHl0aWNzLWFjdG9yLWxvZ2luIiAvPjxtZXRhIGNvbnRlbnQ9ImExMDRkOGZhMzViNzljZWFhZDc1NWFlZjY0NTBlMjI1MDE3MTFmMjM3YjNkOWJlOWEwZjM3ODEwMjJmZTQyY2MiIG5hbWU9Im9jdG9seXRpY3MtYWN0b3ItaGFzaCIgLz4KPG1ldGEgY29udGVudD0iLyZsdDt1c2VyLW5hbWUmZ3Q7LyZsdDtyZXBvLW5hbWUmZ3Q7L2Jsb2Ivc2hvdyIgZGF0YS1wamF4LXRyYW5zaWVudD0idHJ1ZSIgbmFtZT0iYW5hbHl0aWNzLWxvY2F0aW9uIiAvPgoKCgogIDxtZXRhIGNsYXNzPSJqcy1nYS1zZXQiIG5hbWU9ImRpbWVuc2lvbjEiIGNvbnRlbnQ9IkxvZ2dlZCBJbiI+CgoKCiAgICAgICAgPG1ldGEgbmFtZT0iaG9zdG5hbWUiIGNvbnRlbnQ9ImdpdGh1Yi5jb20iPgogICAgPG1ldGEgbmFtZT0idXNlci1sb2dpbiIgY29udGVudD0iUnVieUxvdXZyZSI+CgogICAgICAgIDxtZXRhIG5hbWU9ImV4cGVjdGVkLWhvc3RuYW1lIiBjb250ZW50PSJnaXRodWIuY29tIj4KICAgICAgPG1ldGEgbmFtZT0ianMtcHJveHktc2l0ZS1kZXRlY3Rpb24tcGF5bG9hZCIgY29udGVudD0iTUdFNFkyVmtOVEZpTXpOaE9HVmlZbUprTVRZM09EYzVNVFZpTVRVeU1HSTFOemRrTVdNd1lUZGhOVFpoTnpRelpESXhaRGt5WXpWak9XSTVPR1pqWW54N0luSmxiVzkwWlY5aFpHUnlaWE56SWpvaU1USXdMalV5TGpJMExqRTFNQ0lzSW5KbGNYVmxjM1JmYVdRaU9pSTNPRE0wTVRnNU5qb3hNa1EwT2pFNU5VRkVRVEUxT2pVM056QXdRakExSWl3aWRHbHRaWE4wWVcxd0lqb3hORFkyT1RZd05qUTFmUT09Ij4KCgogICAgICA8bGluayByZWw9Im1hc2staWNvbiIgaHJlZj0iaHR0cHM6Ly9hc3NldHMtY2RuLmdpdGh1Yi5jb20vcGlubmVkLW9jdG9jYXQuc3ZnIiBjb2xvcj0iIzQwNzhjMCI+CiAgICAgIDxsaW5rIHJlbD0iaWNvbiIgdHlwZT0iaW1hZ2UveC1pY29uIiBocmVmPSJodHRwczovL2Fzc2V0cy1jZG4uZ2l0aHViLmNvbS9mYXZpY29uLmljbyI+CgogICAgPG1ldGEgbmFtZT0iaHRtbC1zYWZlLW5vbmNlIiBjb250ZW50PSI0OTA3Y2MwNmVkYjMzZmUzMzFlNjJkMDJmMzk5N2FmM2I5ZjUzMDVkIj4KICAgIDxtZXRhIGNvbnRlbnQ9IjM2MDE1NjQyZDA0OWI1YjQ2NjcwZGQzNWRhYWIwYmUxYzk3NWI5ODQiIG5hbWU9ImZvcm0tbm9uY2UiIC8+CgogICAgPG1ldGEgaHR0cC1lcXVpdj0ieC1wamF4LXZlcnNpb24iIGNvbnRlbnQ9IjA4YmQwZWI5MzBmMjM3MjJkOTcwZGQ3Zjc3YTcxZWJhIj4KICAgIAoKICAgICAgCiAgPG1ldGEgbmFtZT0iZGVzY3JpcHRpb24iIGNvbnRlbnQ9IndlYi1zdHlsZSAtIHdlYuWFrOeUqOagt+W8j+e7hOS7tuW6kyI+CiAgPG1ldGEgbmFtZT0iZ28taW1wb3J0IiBjb250ZW50PSJnaXRodWIuY29tL2N5Y2dpdC93ZWItc3R5bGUgZ2l0IGh0dHBzOi8vZ2l0aHViLmNvbS9jeWNnaXQvd2ViLXN0eWxlLmdpdCI+CgogIDxtZXRhIGNvbnRlbnQ9IjEzMTEyMDE0IiBuYW1lPSJvY3RvbHl0aWNzLWRpbWVuc2lvbi11c2VyX2lkIiAvPjxtZXRhIGNvbnRlbnQ9ImN5Y2dpdCIgbmFtZT0ib2N0b2x5dGljcy1kaW1lbnNpb24tdXNlcl9sb2dpbiIgLz48bWV0YSBjb250ZW50PSI1OTcyNTEyNSIgbmFtZT0ib2N0b2x5dGljcy1kaW1lbnNpb24tcmVwb3NpdG9yeV9pZCIgLz48bWV0YSBjb250ZW50PSJjeWNnaXQvd2ViLXN0eWxlIiBuYW1lPSJvY3RvbHl0aWNzLWRpbWVuc2lvbi1yZXBvc2l0b3J5X253byIgLz48bWV0YSBjb250ZW50PSJ0cnVlIiBuYW1lPSJvY3RvbHl0aWNzLWRpbWVuc2lvbi1yZXBvc2l0b3J5X3B1YmxpYyIgLz48bWV0YSBjb250ZW50PSJmYWxzZSIgbmFtZT0ib2N0b2x5dGljcy1kaW1lbnNpb24tcmVwb3NpdG9yeV9pc19mb3JrIiAvPjxtZXRhIGNvbnRlbnQ9IjU5NzI1MTI1IiBuYW1lPSJvY3RvbHl0aWNzLWRpbWVuc2lvbi1yZXBvc2l0b3J5X25ldHdvcmtfcm9vdF9pZCIgLz48bWV0YSBjb250ZW50PSJjeWNnaXQvd2ViLXN0eWxlIiBuYW1lPSJvY3RvbHl0aWNzLWRpbWVuc2lvbi1yZXBvc2l0b3J5X25ldHdvcmtfcm9vdF9ud28iIC8+CiAgPGxpbmsgaHJlZj0iaHR0cHM6Ly9naXRodWIuY29tL2N5Y2dpdC93ZWItc3R5bGUvY29tbWl0cy9tYXN0ZXIuYXRvbSIgcmVsPSJhbHRlcm5hdGUiIHRpdGxlPSJSZWNlbnQgQ29tbWl0cyB0byB3ZWItc3R5bGU6bWFzdGVyIiB0eXBlPSJhcHBsaWNhdGlvbi9hdG9tK3htbCI+CgoKICAgICAgPGxpbmsgcmVsPSJjYW5vbmljYWwiIGhyZWY9Imh0dHBzOi8vZ2l0aHViLmNvbS9jeWNnaXQvd2ViLXN0eWxlL2Jsb2IvbWFzdGVyL3NyYy9mb250cy9pY29uZm9udC53b2ZmIiBkYXRhLXBqYXgtdHJhbnNpZW50PgogIDwvaGVhZD4KCgogIDxib2R5IGNsYXNzPSJsb2dnZWQtaW4gICBlbnYtcHJvZHVjdGlvbiBtYWNpbnRvc2ggdmlzLXB1YmxpYyBwYWdlLWJsb2IiPgogICAgPGRpdiBpZD0ianMtcGpheC1sb2FkZXItYmFyIiBjbGFzcz0icGpheC1sb2FkZXItYmFyIj48L2Rpdj4KICAgIDxhIGhyZWY9IiNzdGFydC1vZi1jb250ZW50IiB0YWJpbmRleD0iMSIgY2xhc3M9ImFjY2Vzc2liaWxpdHktYWlkIGpzLXNraXAtdG8tY29udGVudCI+U2tpcCB0byBjb250ZW50PC9hPgoKICAgIAogICAgCiAgICAKCgoKICAgICAgICA8ZGl2IGNsYXNzPSJoZWFkZXIgaGVhZGVyLWxvZ2dlZC1pbiB0cnVlIiByb2xlPSJiYW5uZXIiPgogIDxkaXYgY2xhc3M9ImNvbnRhaW5lciBjbGVhcmZpeCI+CgogICAgPGEgY2xhc3M9ImhlYWRlci1sb2dvLWludmVydG9jYXQiIGhyZWY9Imh0dHBzOi8vZ2l0aHViLmNvbS8iIGRhdGEtaG90a2V5PSJnIGQiIGFyaWEtbGFiZWw9IkhvbWVwYWdlIiBkYXRhLWdhLWNsaWNrPSJIZWFkZXIsIGdvIHRvIGRhc2hib2FyZCwgaWNvbjpsb2dvIj4KICA8c3ZnIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzcz0ib2N0aWNvbiBvY3RpY29uLW1hcmstZ2l0aHViIiBoZWlnaHQ9IjI4IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjI4Ij48cGF0aCBkPSJNOCAwQzMuNTggMCAwIDMuNTggMCA4YzAgMy41NCAyLjI5IDYuNTMgNS40NyA3LjU5LjQuMDcuNTUtLjE3LjU1LS4zOCAwLS4xOS0uMDEtLjgyLS4wMS0xLjQ5LTIuMDEuMzctMi41My0uNDktMi42OS0uOTQtLjA5LS4yMy0uNDgtLjk0LS44Mi0xLjEzLS4yOC0uMTUtLjY4LS41Mi0uMDEtLjUzLjYzLS4wMSAxLjA4LjU4IDEuMjMuODIuNzIgMS4yMSAxLjg3Ljg3IDIuMzMuNjYuMDctLjUyLjI4LS44Ny41MS0xLjA3LTEuNzgtLjItMy42NC0uODktMy42NC0zLjk1IDAtLjg3LjMxLTEuNTkuODItMi4xNS0uMDgtLjItLjM2LTEuMDIuMDgtMi4xMiAwIDAgLjY3LS4yMSAyLjIuODIuNjQtLjE4IDEuMzItLjI3IDItLjI3LjY4IDAgMS4zNi4wOSAyIC4yNyAxLjUzLTEuMDQgMi4yLS44MiAyLjItLjgyLjQ0IDEuMS4xNiAxLjkyLjA4IDIuMTIuNTEuNTYuODIgMS4yNy44MiAyLjE1IDAgMy4wNy0xLjg3IDMuNzUtMy42NSAzLjk1LjI5LjI1LjU0LjczLjU0IDEuNDggMCAxLjA3LS4wMSAxLjkzLS4wMSAyLjIgMCAuMjEuMTUuNDYuNTUuMzhBOC4wMTMgOC4wMTMgMCAwIDAgMTYgOGMwLTQuNDItMy41OC04LTgtOHoiPjwvcGF0aD48L3N2Zz4KPC9hPgoKCiAgICAgICAgPGRpdiBjbGFzcz0iaGVhZGVyLXNlYXJjaCBzY29wZWQtc2VhcmNoIHNpdGUtc2NvcGVkLXNlYXJjaCBqcy1zaXRlLXNlYXJjaCIgcm9sZT0ic2VhcmNoIj4KICA8IS0tIDwvdGV4dGFyZWE+IC0tPjwhLS0gJyJgIC0tPjxmb3JtIGFjY2VwdC1jaGFyc2V0PSJVVEYtOCIgYWN0aW9uPSIvY3ljZ2l0L3dlYi1zdHlsZS9zZWFyY2giIGNsYXNzPSJqcy1zaXRlLXNlYXJjaC1mb3JtIiBkYXRhLXNjb3BlZC1zZWFyY2gtdXJsPSIvY3ljZ2l0L3dlYi1zdHlsZS9zZWFyY2giIGRhdGEtdW5zY29wZWQtc2VhcmNoLXVybD0iL3NlYXJjaCIgbWV0aG9kPSJnZXQiPjxkaXYgc3R5bGU9Im1hcmdpbjowO3BhZGRpbmc6MDtkaXNwbGF5OmlubGluZSI+PGlucHV0IG5hbWU9InV0ZjgiIHR5cGU9ImhpZGRlbiIgdmFsdWU9IiYjeDI3MTM7IiAvPjwvZGl2PgogICAgPGxhYmVsIGNsYXNzPSJmb3JtLWNvbnRyb2wgaGVhZGVyLXNlYXJjaC13cmFwcGVyIGpzLWNocm9tZWxlc3MtaW5wdXQtY29udGFpbmVyIj4KICAgICAgPGRpdiBjbGFzcz0iaGVhZGVyLXNlYXJjaC1zY29wZSI+VGhpcyByZXBvc2l0b3J5PC9kaXY+CiAgICAgIDxpbnB1dCB0eXBlPSJ0ZXh0IgogICAgICAgIGNsYXNzPSJmb3JtLWNvbnRyb2wgaGVhZGVyLXNlYXJjaC1pbnB1dCBqcy1zaXRlLXNlYXJjaC1mb2N1cyBqcy1zaXRlLXNlYXJjaC1maWVsZCBpcy1jbGVhcmFibGUiCiAgICAgICAgZGF0YS1ob3RrZXk9InMiCiAgICAgICAgbmFtZT0icSIKICAgICAgICBwbGFjZWhvbGRlcj0iU2VhcmNoIgogICAgICAgIGFyaWEtbGFiZWw9IlNlYXJjaCB0aGlzIHJlcG9zaXRvcnkiCiAgICAgICAgZGF0YS11bnNjb3BlZC1wbGFjZWhvbGRlcj0iU2VhcmNoIEdpdEh1YiIKICAgICAgICBkYXRhLXNjb3BlZC1wbGFjZWhvbGRlcj0iU2VhcmNoIgogICAgICAgIHRhYmluZGV4PSIxIgogICAgICAgIGF1dG9jYXBpdGFsaXplPSJvZmYiPgogICAgPC9sYWJlbD4KPC9mb3JtPjwvZGl2PgoKCiAgICAgIDx1bCBjbGFzcz0iaGVhZGVyLW5hdiBsZWZ0IiByb2xlPSJuYXZpZ2F0aW9uIj4KICAgICAgICA8bGkgY2xhc3M9ImhlYWRlci1uYXYtaXRlbSI+CiAgICAgICAgICA8YSBocmVmPSIvcHVsbHMiIGNsYXNzPSJqcy1zZWxlY3RlZC1uYXZpZ2F0aW9uLWl0ZW0gaGVhZGVyLW5hdi1saW5rIiBkYXRhLWdhLWNsaWNrPSJIZWFkZXIsIGNsaWNrLCBOYXYgbWVudSAtIGl0ZW06cHVsbHMgY29udGV4dDp1c2VyIiBkYXRhLWhvdGtleT0iZyBwIiBkYXRhLXNlbGVjdGVkLWxpbmtzPSIvcHVsbHMgL3B1bGxzL2Fzc2lnbmVkIC9wdWxscy9tZW50aW9uZWQgL3B1bGxzIj4KICAgICAgICAgICAgUHVsbCByZXF1ZXN0cwo8L2E+ICAgICAgICA8L2xpPgogICAgICAgIDxsaSBjbGFzcz0iaGVhZGVyLW5hdi1pdGVtIj4KICAgICAgICAgIDxhIGhyZWY9Ii9pc3N1ZXMiIGNsYXNzPSJqcy1zZWxlY3RlZC1uYXZpZ2F0aW9uLWl0ZW0gaGVhZGVyLW5hdi1saW5rIiBkYXRhLWdhLWNsaWNrPSJIZWFkZXIsIGNsaWNrLCBOYXYgbWVudSAtIGl0ZW06aXNzdWVzIGNvbnRleHQ6dXNlciIgZGF0YS1ob3RrZXk9ImcgaSIgZGF0YS1zZWxlY3RlZC1saW5rcz0iL2lzc3VlcyAvaXNzdWVzL2Fzc2lnbmVkIC9pc3N1ZXMvbWVudGlvbmVkIC9pc3N1ZXMiPgogICAgICAgICAgICBJc3N1ZXMKPC9hPiAgICAgICAgPC9saT4KICAgICAgICAgIDxsaSBjbGFzcz0iaGVhZGVyLW5hdi1pdGVtIj4KICAgICAgICAgICAgPGEgY2xhc3M9ImhlYWRlci1uYXYtbGluayIgaHJlZj0iaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vIiBkYXRhLWdhLWNsaWNrPSJIZWFkZXIsIGdvIHRvIGdpc3QsIHRleHQ6Z2lzdCI+R2lzdDwvYT4KICAgICAgICAgIDwvbGk+CiAgICAgIDwvdWw+CgogICAgCjx1bCBjbGFzcz0iaGVhZGVyLW5hdiB1c2VyLW5hdiByaWdodCIgaWQ9InVzZXItbGlua3MiPgogIDxsaSBjbGFzcz0iaGVhZGVyLW5hdi1pdGVtIj4KICAgIAogICAgPGEgaHJlZj0iL25vdGlmaWNhdGlvbnMiIGFyaWEtbGFiZWw9IllvdSBoYXZlIG5vIHVucmVhZCBub3RpZmljYXRpb25zIiBjbGFzcz0iaGVhZGVyLW5hdi1saW5rIG5vdGlmaWNhdGlvbi1pbmRpY2F0b3IgdG9vbHRpcHBlZCB0b29sdGlwcGVkLXMganMtc29ja2V0LWNoYW5uZWwganMtbm90aWZpY2F0aW9uLWluZGljYXRvciIgZGF0YS1jaGFubmVsPSJ0ZW5hbnQ6MTpub3RpZmljYXRpb24tY2hhbmdlZDoxOTA4NDYiIGRhdGEtZ2EtY2xpY2s9IkhlYWRlciwgZ28gdG8gbm90aWZpY2F0aW9ucywgaWNvbjpyZWFkIiBkYXRhLWhvdGtleT0iZyBuIj4KICAgICAgICA8c3BhbiBjbGFzcz0ibWFpbC1zdGF0dXMgIj48L3NwYW4+CiAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1iZWxsIiBoZWlnaHQ9IjE2IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxNCAxNiIgd2lkdGg9IjE0Ij48cGF0aCBkPSJNMTQgMTJ2MUgwdi0xbC43My0uNThjLjc3LS43Ny44MS0yLjU1IDEuMTktNC40MkMyLjY5IDMuMjMgNiAyIDYgMmMwLS41NS40NS0xIDEtMXMxIC40NSAxIDFjMCAwIDMuMzkgMS4yMyA0LjE2IDUgLjM4IDEuODguNDIgMy42NiAxLjE5IDQuNDJsLjY2LjU4SDE0em0tNyA0YzEuMTEgMCAyLS44OSAyLTJINWMwIDEuMTEuODkgMiAyIDJ6Ij48L3BhdGg+PC9zdmc+CjwvYT4KICA8L2xpPgoKICA8bGkgY2xhc3M9ImhlYWRlci1uYXYtaXRlbSBkcm9wZG93biBqcy1tZW51LWNvbnRhaW5lciI+CiAgICA8YSBjbGFzcz0iaGVhZGVyLW5hdi1saW5rIHRvb2x0aXBwZWQgdG9vbHRpcHBlZC1zIGpzLW1lbnUtdGFyZ2V0IiBocmVmPSIvbmV3IgogICAgICAgYXJpYS1sYWJlbD0iQ3JlYXRlIG5ld+KApiIKICAgICAgIGRhdGEtZ2EtY2xpY2s9IkhlYWRlciwgY3JlYXRlIG5ldywgaWNvbjphZGQiPgogICAgICA8c3ZnIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzcz0ib2N0aWNvbiBvY3RpY29uLXBsdXMgbGVmdCIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTIgMTYiIHdpZHRoPSIxMiI+PHBhdGggZD0iTTEyIDlIN3Y1SDVWOUgwVjdoNVYyaDJ2NWg1eiI+PC9wYXRoPjwvc3ZnPgogICAgICA8c3BhbiBjbGFzcz0iZHJvcGRvd24tY2FyZXQiPjwvc3Bhbj4KICAgIDwvYT4KCiAgICA8ZGl2IGNsYXNzPSJkcm9wZG93bi1tZW51LWNvbnRlbnQganMtbWVudS1jb250ZW50Ij4KICAgICAgPHVsIGNsYXNzPSJkcm9wZG93bi1tZW51IGRyb3Bkb3duLW1lbnUtc3ciPgogICAgICAgIAo8YSBjbGFzcz0iZHJvcGRvd24taXRlbSIgaHJlZj0iL25ldyIgZGF0YS1nYS1jbGljaz0iSGVhZGVyLCBjcmVhdGUgbmV3IHJlcG9zaXRvcnkiPgogIE5ldyByZXBvc2l0b3J5CjwvYT4KCiAgPGEgY2xhc3M9ImRyb3Bkb3duLWl0ZW0iIGhyZWY9Ii9uZXcvaW1wb3J0IiBkYXRhLWdhLWNsaWNrPSJIZWFkZXIsIGltcG9ydCBhIHJlcG9zaXRvcnkiPgogICAgSW1wb3J0IHJlcG9zaXRvcnkKICA8L2E+CgoKICA8YSBjbGFzcz0iZHJvcGRvd24taXRlbSIgaHJlZj0iL29yZ2FuaXphdGlvbnMvbmV3IiBkYXRhLWdhLWNsaWNrPSJIZWFkZXIsIGNyZWF0ZSBuZXcgb3JnYW5pemF0aW9uIj4KICAgIE5ldyBvcmdhbml6YXRpb24KICA8L2E+CgoKCiAgPGRpdiBjbGFzcz0iZHJvcGRvd24tZGl2aWRlciI+PC9kaXY+CiAgPGRpdiBjbGFzcz0iZHJvcGRvd24taGVhZGVyIj4KICAgIDxzcGFuIHRpdGxlPSJjeWNnaXQvd2ViLXN0eWxlIj5UaGlzIHJlcG9zaXRvcnk8L3NwYW4+CiAgPC9kaXY+CiAgICA8YSBjbGFzcz0iZHJvcGRvd24taXRlbSIgaHJlZj0iL2N5Y2dpdC93ZWItc3R5bGUvaXNzdWVzL25ldyIgZGF0YS1nYS1jbGljaz0iSGVhZGVyLCBjcmVhdGUgbmV3IGlzc3VlIj4KICAgICAgTmV3IGlzc3VlCiAgICA8L2E+CgogICAgICA8L3VsPgogICAgPC9kaXY+CiAgPC9saT4KCiAgPGxpIGNsYXNzPSJoZWFkZXItbmF2LWl0ZW0gZHJvcGRvd24ganMtbWVudS1jb250YWluZXIiPgogICAgPGEgY2xhc3M9ImhlYWRlci1uYXYtbGluayBuYW1lIHRvb2x0aXBwZWQgdG9vbHRpcHBlZC1zdyBqcy1tZW51LXRhcmdldCIgaHJlZj0iL1J1YnlMb3V2cmUiCiAgICAgICBhcmlhLWxhYmVsPSJWaWV3IHByb2ZpbGUgYW5kIG1vcmUiCiAgICAgICBkYXRhLWdhLWNsaWNrPSJIZWFkZXIsIHNob3cgbWVudSwgaWNvbjphdmF0YXIiPgogICAgICA8aW1nIGFsdD0iQFJ1YnlMb3V2cmUiIGNsYXNzPSJhdmF0YXIiIGhlaWdodD0iMjAiIHNyYz0iaHR0cHM6Ly9hdmF0YXJzMy5naXRodWJ1c2VyY29udGVudC5jb20vdS8xOTA4NDY/dj0zJmFtcDtzPTQwIiB3aWR0aD0iMjAiIC8+CiAgICAgIDxzcGFuIGNsYXNzPSJkcm9wZG93bi1jYXJldCI+PC9zcGFuPgogICAgPC9hPgoKICAgIDxkaXYgY2xhc3M9ImRyb3Bkb3duLW1lbnUtY29udGVudCBqcy1tZW51LWNvbnRlbnQiPgogICAgICA8ZGl2IGNsYXNzPSJkcm9wZG93bi1tZW51IGRyb3Bkb3duLW1lbnUtc3ciPgogICAgICAgIDxkaXYgY2xhc3M9ImRyb3Bkb3duLWhlYWRlciBoZWFkZXItbmF2LWN1cnJlbnQtdXNlciBjc3MtdHJ1bmNhdGUiPgogICAgICAgICAgU2lnbmVkIGluIGFzIDxzdHJvbmcgY2xhc3M9ImNzcy10cnVuY2F0ZS10YXJnZXQiPlJ1YnlMb3V2cmU8L3N0cm9uZz4KICAgICAgICA8L2Rpdj4KCiAgICAgICAgPGRpdiBjbGFzcz0iZHJvcGRvd24tZGl2aWRlciI+PC9kaXY+CgogICAgICAgIDxhIGNsYXNzPSJkcm9wZG93bi1pdGVtIiBocmVmPSIvUnVieUxvdXZyZSIgZGF0YS1nYS1jbGljaz0iSGVhZGVyLCBnbyB0byBwcm9maWxlLCB0ZXh0OnlvdXIgcHJvZmlsZSI+CiAgICAgICAgICBZb3VyIHByb2ZpbGUKICAgICAgICA8L2E+CiAgICAgICAgPGEgY2xhc3M9ImRyb3Bkb3duLWl0ZW0iIGhyZWY9Ii9zdGFycyIgZGF0YS1nYS1jbGljaz0iSGVhZGVyLCBnbyB0byBzdGFycmVkIHJlcG9zLCB0ZXh0OnlvdXIgc3RhcnMiPgogICAgICAgICAgWW91ciBzdGFycwogICAgICAgIDwvYT4KICAgICAgICA8YSBjbGFzcz0iZHJvcGRvd24taXRlbSIgaHJlZj0iL2V4cGxvcmUiIGRhdGEtZ2EtY2xpY2s9IkhlYWRlciwgZ28gdG8gZXhwbG9yZSwgdGV4dDpleHBsb3JlIj4KICAgICAgICAgIEV4cGxvcmUKICAgICAgICA8L2E+CiAgICAgICAgICA8YSBjbGFzcz0iZHJvcGRvd24taXRlbSIgaHJlZj0iL2ludGVncmF0aW9ucyIgZGF0YS1nYS1jbGljaz0iSGVhZGVyLCBnbyB0byBpbnRlZ3JhdGlvbnMsIHRleHQ6aW50ZWdyYXRpb25zIj4KICAgICAgICAgICAgSW50ZWdyYXRpb25zCiAgICAgICAgICA8L2E+CiAgICAgICAgPGEgY2xhc3M9ImRyb3Bkb3duLWl0ZW0iIGhyZWY9Imh0dHBzOi8vaGVscC5naXRodWIuY29tIiBkYXRhLWdhLWNsaWNrPSJIZWFkZXIsIGdvIHRvIGhlbHAsIHRleHQ6aGVscCI+CiAgICAgICAgICBIZWxwCiAgICAgICAgPC9hPgoKCiAgICAgICAgPGRpdiBjbGFzcz0iZHJvcGRvd24tZGl2aWRlciI+PC9kaXY+CgogICAgICAgIDxhIGNsYXNzPSJkcm9wZG93bi1pdGVtIiBocmVmPSIvc2V0dGluZ3MvcHJvZmlsZSIgZGF0YS1nYS1jbGljaz0iSGVhZGVyLCBnbyB0byBzZXR0aW5ncywgaWNvbjpzZXR0aW5ncyI+CiAgICAgICAgICBTZXR0aW5ncwogICAgICAgIDwvYT4KCiAgICAgICAgPCEtLSA8L3RleHRhcmVhPiAtLT48IS0tICciYCAtLT48Zm9ybSBhY2NlcHQtY2hhcnNldD0iVVRGLTgiIGFjdGlvbj0iL2xvZ291dCIgY2xhc3M9ImxvZ291dC1mb3JtIiBkYXRhLWZvcm0tbm9uY2U9IjM2MDE1NjQyZDA0OWI1YjQ2NjcwZGQzNWRhYWIwYmUxYzk3NWI5ODQiIG1ldGhvZD0icG9zdCI+PGRpdiBzdHlsZT0ibWFyZ2luOjA7cGFkZGluZzowO2Rpc3BsYXk6aW5saW5lIj48aW5wdXQgbmFtZT0idXRmOCIgdHlwZT0iaGlkZGVuIiB2YWx1ZT0iJiN4MjcxMzsiIC8+PGlucHV0IG5hbWU9ImF1dGhlbnRpY2l0eV90b2tlbiIgdHlwZT0iaGlkZGVuIiB2YWx1ZT0iK3RPaVI3b1dlQUExbktuRmZuT1Z5Y0V0QTRxMWZPT1FYaGgvTEN4Vnk1cjQ2ZHh6VnVOc3lleGprVmxTeFVYcFBXL1RYUythaVVMSCtIcE92UDZZMlE9PSIgLz48L2Rpdj4KICAgICAgICAgIDxidXR0b24gY2xhc3M9ImRyb3Bkb3duLWl0ZW0gZHJvcGRvd24tc2lnbm91dCIgZGF0YS1nYS1jbGljaz0iSGVhZGVyLCBzaWduIG91dCwgaWNvbjpsb2dvdXQiPgogICAgICAgICAgICBTaWduIG91dAogICAgICAgICAgPC9idXR0b24+CjwvZm9ybT4gICAgICA8L2Rpdj4KICAgIDwvZGl2PgogIDwvbGk+CjwvdWw+CgoKICAgIAogIDwvZGl2Pgo8L2Rpdj4KCgogICAgICAKCgogICAgPGRpdiBpZD0ic3RhcnQtb2YtY29udGVudCIgY2xhc3M9ImFjY2Vzc2liaWxpdHktYWlkIj48L2Rpdj4KCiAgICAgIDxkaXYgaWQ9ImpzLWZsYXNoLWNvbnRhaW5lciI+CjwvZGl2PgoKCiAgICA8ZGl2IHJvbGU9Im1haW4iIGNsYXNzPSJtYWluLWNvbnRlbnQiPgogICAgICAgIDxkaXYgaXRlbXNjb3BlIGl0ZW10eXBlPSJodHRwOi8vc2NoZW1hLm9yZy9Tb2Z0d2FyZVNvdXJjZUNvZGUiPgogICAgPGRpdiBpZD0ianMtcmVwby1wamF4LWNvbnRhaW5lciIgZGF0YS1wamF4LWNvbnRhaW5lcj4KICAgICAgCjxkaXYgY2xhc3M9InBhZ2VoZWFkIHJlcG9oZWFkIGluc3RhcGFwZXJfaWdub3JlIHJlYWRhYmlsaXR5LW1lbnUgZXhwZXJpbWVudC1yZXBvLW5hdiI+CiAgPGRpdiBjbGFzcz0iY29udGFpbmVyIHJlcG9oZWFkLWRldGFpbHMtY29udGFpbmVyIj4KCiAgICAKCjx1bCBjbGFzcz0icGFnZWhlYWQtYWN0aW9ucyI+CgogIDxsaT4KICAgICAgICA8IS0tIDwvdGV4dGFyZWE+IC0tPjwhLS0gJyJgIC0tPjxmb3JtIGFjY2VwdC1jaGFyc2V0PSJVVEYtOCIgYWN0aW9uPSIvbm90aWZpY2F0aW9ucy9zdWJzY3JpYmUiIGNsYXNzPSJqcy1zb2NpYWwtY29udGFpbmVyIiBkYXRhLWF1dG9zdWJtaXQ9InRydWUiIGRhdGEtZm9ybS1ub25jZT0iMzYwMTU2NDJkMDQ5YjViNDY2NzBkZDM1ZGFhYjBiZTFjOTc1Yjk4NCIgZGF0YS1yZW1vdGU9InRydWUiIG1ldGhvZD0icG9zdCI+PGRpdiBzdHlsZT0ibWFyZ2luOjA7cGFkZGluZzowO2Rpc3BsYXk6aW5saW5lIj48aW5wdXQgbmFtZT0idXRmOCIgdHlwZT0iaGlkZGVuIiB2YWx1ZT0iJiN4MjcxMzsiIC8+PGlucHV0IG5hbWU9ImF1dGhlbnRpY2l0eV90b2tlbiIgdHlwZT0iaGlkZGVuIiB2YWx1ZT0iK1lRM0NXRnNUMmlFMkVPamdDNUk4NjJobkpqK2drWm9Lbm5NUmtPZG1yYnU4Ry9mdHJRQ2k2ZUphcGVwUE8xNlNwR1ZzMlBCbUZRMEk1cndTN2tHdVE9PSIgLz48L2Rpdj4gICAgICA8aW5wdXQgY2xhc3M9ImZvcm0tY29udHJvbCIgaWQ9InJlcG9zaXRvcnlfaWQiIG5hbWU9InJlcG9zaXRvcnlfaWQiIHR5cGU9ImhpZGRlbiIgdmFsdWU9IjU5NzI1MTI1IiAvPgoKICAgICAgICA8ZGl2IGNsYXNzPSJzZWxlY3QtbWVudSBqcy1tZW51LWNvbnRhaW5lciBqcy1zZWxlY3QtbWVudSI+CiAgICAgICAgICA8YSBocmVmPSIvY3ljZ2l0L3dlYi1zdHlsZS9zdWJzY3JpcHRpb24iCiAgICAgICAgICAgIGNsYXNzPSJidG4gYnRuLXNtIGJ0bi13aXRoLWNvdW50IHNlbGVjdC1tZW51LWJ1dHRvbiBqcy1tZW51LXRhcmdldCIgcm9sZT0iYnV0dG9uIiB0YWJpbmRleD0iMCIgYXJpYS1oYXNwb3B1cD0idHJ1ZSIKICAgICAgICAgICAgZGF0YS1nYS1jbGljaz0iUmVwb3NpdG9yeSwgY2xpY2sgV2F0Y2ggc2V0dGluZ3MsIGFjdGlvbjpibG9iI3Nob3ciPgogICAgICAgICAgICA8c3BhbiBjbGFzcz0ianMtc2VsZWN0LWJ1dHRvbiI+CiAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1leWUiIGhlaWdodD0iMTYiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE2IDE2IiB3aWR0aD0iMTYiPjxwYXRoIGQ9Ik04LjA2IDJDMyAyIDAgOCAwIDhzMyA2IDguMDYgNkMxMyAxNCAxNiA4IDE2IDhzLTMtNi03Ljk0LTZ6TTggMTJjLTIuMiAwLTQtMS43OC00LTQgMC0yLjIgMS44LTQgNC00IDIuMjIgMCA0IDEuOCA0IDQgMCAyLjIyLTEuNzggNC00IDR6bTItNGMwIDEuMTEtLjg5IDItMiAyLTEuMTEgMC0yLS44OS0yLTIgMC0xLjExLjg5LTIgMi0yIDEuMTEgMCAyIC44OSAyIDJ6Ij48L3BhdGg+PC9zdmc+CiAgICAgICAgICAgICAgV2F0Y2gKICAgICAgICAgICAgPC9zcGFuPgogICAgICAgICAgPC9hPgogICAgICAgICAgPGEgY2xhc3M9InNvY2lhbC1jb3VudCBqcy1zb2NpYWwtY291bnQiIGhyZWY9Ii9jeWNnaXQvd2ViLXN0eWxlL3dhdGNoZXJzIj4KICAgICAgICAgICAgMQogICAgICAgICAgPC9hPgoKICAgICAgICA8ZGl2IGNsYXNzPSJzZWxlY3QtbWVudS1tb2RhbC1ob2xkZXIiPgogICAgICAgICAgPGRpdiBjbGFzcz0ic2VsZWN0LW1lbnUtbW9kYWwgc3Vic2NyaXB0aW9uLW1lbnUtbW9kYWwganMtbWVudS1jb250ZW50IiBhcmlhLWhpZGRlbj0idHJ1ZSI+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9InNlbGVjdC1tZW51LWhlYWRlciBqcy1uYXZpZ2F0aW9uLWVuYWJsZSIgdGFiaW5kZXg9Ii0xIj4KICAgICAgICAgICAgICA8c3ZnIGFyaWEtbGFiZWw9IkNsb3NlIiBjbGFzcz0ib2N0aWNvbiBvY3RpY29uLXgganMtbWVudS1jbG9zZSIgaGVpZ2h0PSIxNiIgcm9sZT0iaW1nIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMiAxNiIgd2lkdGg9IjEyIj48cGF0aCBkPSJNNy40OCA4bDMuNzUgMy43NS0xLjQ4IDEuNDhMNiA5LjQ4bC0zLjc1IDMuNzUtMS40OC0xLjQ4TDQuNTIgOCAuNzcgNC4yNWwxLjQ4LTEuNDhMNiA2LjUybDMuNzUtMy43NSAxLjQ4IDEuNDh6Ij48L3BhdGg+PC9zdmc+CiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9InNlbGVjdC1tZW51LXRpdGxlIj5Ob3RpZmljYXRpb25zPC9zcGFuPgogICAgICAgICAgICA8L2Rpdj4KCiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ic2VsZWN0LW1lbnUtbGlzdCBqcy1uYXZpZ2F0aW9uLWNvbnRhaW5lciIgcm9sZT0ibWVudSI+CgogICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ic2VsZWN0LW1lbnUtaXRlbSBqcy1uYXZpZ2F0aW9uLWl0ZW0gc2VsZWN0ZWQiIHJvbGU9Im1lbnVpdGVtIiB0YWJpbmRleD0iMCI+CiAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJvY3RpY29uIG9jdGljb24tY2hlY2sgc2VsZWN0LW1lbnUtaXRlbS1pY29uIiBoZWlnaHQ9IjE2IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMiAxNiIgd2lkdGg9IjEyIj48cGF0aCBkPSJNMTIgNWwtOCA4LTQtNCAxLjUtMS41TDQgMTBsNi41LTYuNXoiPjwvcGF0aD48L3N2Zz4KICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ic2VsZWN0LW1lbnUtaXRlbS10ZXh0Ij4KICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2hlY2tlZD0iY2hlY2tlZCIgaWQ9ImRvX2luY2x1ZGVkIiBuYW1lPSJkbyIgdHlwZT0icmFkaW8iIHZhbHVlPSJpbmNsdWRlZCIgLz4KICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ic2VsZWN0LW1lbnUtaXRlbS1oZWFkaW5nIj5Ob3Qgd2F0Y2hpbmc8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9ImRlc2NyaXB0aW9uIj5CZSBub3RpZmllZCB3aGVuIHBhcnRpY2lwYXRpbmcgb3IgQG1lbnRpb25lZC48L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9ImpzLXNlbGVjdC1idXR0b24tdGV4dCBoaWRkZW4tc2VsZWN0LWJ1dHRvbi10ZXh0Ij4KICAgICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJvY3RpY29uIG9jdGljb24tZXllIiBoZWlnaHQ9IjE2IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2Ij48cGF0aCBkPSJNOC4wNiAyQzMgMiAwIDggMCA4czMgNiA4LjA2IDZDMTMgMTQgMTYgOCAxNiA4cy0zLTYtNy45NC02ek04IDEyYy0yLjIgMC00LTEuNzgtNC00IDAtMi4yIDEuOC00IDQtNCAyLjIyIDAgNCAxLjggNCA0IDAgMi4yMi0xLjc4IDQtNCA0em0yLTRjMCAxLjExLS44OSAyLTIgMi0xLjExIDAtMi0uODktMi0yIDAtMS4xMS44OS0yIDItMiAxLjExIDAgMiAuODkgMiAyeiI+PC9wYXRoPjwvc3ZnPgogICAgICAgICAgICAgICAgICAgICAgV2F0Y2gKICAgICAgICAgICAgICAgICAgICA8L3NwYW4+CiAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgPC9kaXY+CgogICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ic2VsZWN0LW1lbnUtaXRlbSBqcy1uYXZpZ2F0aW9uLWl0ZW0gIiByb2xlPSJtZW51aXRlbSIgdGFiaW5kZXg9IjAiPgogICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzcz0ib2N0aWNvbiBvY3RpY29uLWNoZWNrIHNlbGVjdC1tZW51LWl0ZW0taWNvbiIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTIgMTYiIHdpZHRoPSIxMiI+PHBhdGggZD0iTTEyIDVsLTggOC00LTQgMS41LTEuNUw0IDEwbDYuNS02LjV6Ij48L3BhdGg+PC9zdmc+CiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9InNlbGVjdC1tZW51LWl0ZW0tdGV4dCI+CiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPSJkb19zdWJzY3JpYmVkIiBuYW1lPSJkbyIgdHlwZT0icmFkaW8iIHZhbHVlPSJzdWJzY3JpYmVkIiAvPgogICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJzZWxlY3QtbWVudS1pdGVtLWhlYWRpbmciPldhdGNoaW5nPC9zcGFuPgogICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJkZXNjcmlwdGlvbiI+QmUgbm90aWZpZWQgb2YgYWxsIGNvbnZlcnNhdGlvbnMuPC9zcGFuPgogICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJqcy1zZWxlY3QtYnV0dG9uLXRleHQgaGlkZGVuLXNlbGVjdC1idXR0b24tdGV4dCI+CiAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzcz0ib2N0aWNvbiBvY3RpY29uLWV5ZSIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiI+PHBhdGggZD0iTTguMDYgMkMzIDIgMCA4IDAgOHMzIDYgOC4wNiA2QzEzIDE0IDE2IDggMTYgOHMtMy02LTcuOTQtNnpNOCAxMmMtMi4yIDAtNC0xLjc4LTQtNCAwLTIuMiAxLjgtNCA0LTQgMi4yMiAwIDQgMS44IDQgNCAwIDIuMjItMS43OCA0LTQgNHptMi00YzAgMS4xMS0uODkgMi0yIDItMS4xMSAwLTItLjg5LTItMiAwLTEuMTEuODktMiAyLTIgMS4xMSAwIDIgLjg5IDIgMnoiPjwvcGF0aD48L3N2Zz4KICAgICAgICAgICAgICAgICAgICAgIFVud2F0Y2gKICAgICAgICAgICAgICAgICAgICA8L3NwYW4+CiAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgPC9kaXY+CgogICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ic2VsZWN0LW1lbnUtaXRlbSBqcy1uYXZpZ2F0aW9uLWl0ZW0gIiByb2xlPSJtZW51aXRlbSIgdGFiaW5kZXg9IjAiPgogICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzcz0ib2N0aWNvbiBvY3RpY29uLWNoZWNrIHNlbGVjdC1tZW51LWl0ZW0taWNvbiIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTIgMTYiIHdpZHRoPSIxMiI+PHBhdGggZD0iTTEyIDVsLTggOC00LTQgMS41LTEuNUw0IDEwbDYuNS02LjV6Ij48L3BhdGg+PC9zdmc+CiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9InNlbGVjdC1tZW51LWl0ZW0tdGV4dCI+CiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPSJkb19pZ25vcmUiIG5hbWU9ImRvIiB0eXBlPSJyYWRpbyIgdmFsdWU9Imlnbm9yZSIgLz4KICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ic2VsZWN0LW1lbnUtaXRlbS1oZWFkaW5nIj5JZ25vcmluZzwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0iZGVzY3JpcHRpb24iPk5ldmVyIGJlIG5vdGlmaWVkLjwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ianMtc2VsZWN0LWJ1dHRvbi10ZXh0IGhpZGRlbi1zZWxlY3QtYnV0dG9uLXRleHQiPgogICAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1tdXRlIiBoZWlnaHQ9IjE2IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2Ij48cGF0aCBkPSJNOCAyLjgxdjEwLjM4YzAgLjY3LS44MSAxLTEuMjguNTNMMyAxMEgxYy0uNTUgMC0xLS40NS0xLTFWN2MwLS41NS40NS0xIDEtMWgybDMuNzItMy43MkM3LjE5IDEuODEgOCAyLjE0IDggMi44MXptNy41MyAzLjIybC0xLjA2LTEuMDYtMS45NyAxLjk3LTEuOTctMS45Ny0xLjA2IDEuMDZMMTEuNDQgOCA5LjQ3IDkuOTdsMS4wNiAxLjA2IDEuOTctMS45NyAxLjk3IDEuOTcgMS4wNi0xLjA2TDEzLjU2IDhsMS45Ny0xLjk3eiI+PC9wYXRoPjwvc3ZnPgogICAgICAgICAgICAgICAgICAgICAgU3RvcCBpZ25vcmluZwogICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4KICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICA8L2Rpdj4KCiAgICAgICAgICAgICAgPC9kaXY+CgogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIDwvZGl2PgogICAgICAgIDwvZGl2Pgo8L2Zvcm0+CiAgPC9saT4KCiAgPGxpPgogICAgCiAgPGRpdiBjbGFzcz0ianMtdG9nZ2xlci1jb250YWluZXIganMtc29jaWFsLWNvbnRhaW5lciBzdGFycmluZy1jb250YWluZXIgIj4KCiAgICA8IS0tIDwvdGV4dGFyZWE+IC0tPjwhLS0gJyJgIC0tPjxmb3JtIGFjY2VwdC1jaGFyc2V0PSJVVEYtOCIgYWN0aW9uPSIvY3ljZ2l0L3dlYi1zdHlsZS91bnN0YXIiIGNsYXNzPSJzdGFycmVkIiBkYXRhLWZvcm0tbm9uY2U9IjM2MDE1NjQyZDA0OWI1YjQ2NjcwZGQzNWRhYWIwYmUxYzk3NWI5ODQiIGRhdGEtcmVtb3RlPSJ0cnVlIiBtZXRob2Q9InBvc3QiPjxkaXYgc3R5bGU9Im1hcmdpbjowO3BhZGRpbmc6MDtkaXNwbGF5OmlubGluZSI+PGlucHV0IG5hbWU9InV0ZjgiIHR5cGU9ImhpZGRlbiIgdmFsdWU9IiYjeDI3MTM7IiAvPjxpbnB1dCBuYW1lPSJhdXRoZW50aWNpdHlfdG9rZW4iIHR5cGU9ImhpZGRlbiIgdmFsdWU9Iko3UFRheDZHa1ZBcUhFbENZVUNEeUZLWG5HR2FSRTZKQzdLV0FuQ3p3K251L1lrWW9KUng4RERQcU9tYWtXWkJtQVpaRFZoamNjWHhFdjNoK2M5VUJnPT0iIC8+PC9kaXY+CiAgICAgIDxidXR0b24KICAgICAgICBjbGFzcz0iYnRuIGJ0bi1zbSBidG4td2l0aC1jb3VudCBqcy10b2dnbGVyLXRhcmdldCIKICAgICAgICBhcmlhLWxhYmVsPSJVbnN0YXIgdGhpcyByZXBvc2l0b3J5IiB0aXRsZT0iVW5zdGFyIGN5Y2dpdC93ZWItc3R5bGUiCiAgICAgICAgZGF0YS1nYS1jbGljaz0iUmVwb3NpdG9yeSwgY2xpY2sgdW5zdGFyIGJ1dHRvbiwgYWN0aW9uOmJsb2Ijc2hvdzsgdGV4dDpVbnN0YXIiPgogICAgICAgIDxzdmcgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJvY3RpY29uIG9jdGljb24tc3RhciIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTQgMTYiIHdpZHRoPSIxNCI+PHBhdGggZD0iTTE0IDZsLTQuOS0uNjRMNyAxIDQuOSA1LjM2IDAgNmwzLjYgMy4yNkwyLjY3IDE0IDcgMTEuNjcgMTEuMzMgMTRsLS45My00Ljc0eiI+PC9wYXRoPjwvc3ZnPgogICAgICAgIFVuc3RhcgogICAgICA8L2J1dHRvbj4KICAgICAgICA8YSBjbGFzcz0ic29jaWFsLWNvdW50IGpzLXNvY2lhbC1jb3VudCIgaHJlZj0iL2N5Y2dpdC93ZWItc3R5bGUvc3RhcmdhemVycyI+CiAgICAgICAgICAxMAogICAgICAgIDwvYT4KPC9mb3JtPgogICAgPCEtLSA8L3RleHRhcmVhPiAtLT48IS0tICciYCAtLT48Zm9ybSBhY2NlcHQtY2hhcnNldD0iVVRGLTgiIGFjdGlvbj0iL2N5Y2dpdC93ZWItc3R5bGUvc3RhciIgY2xhc3M9InVuc3RhcnJlZCIgZGF0YS1mb3JtLW5vbmNlPSIzNjAxNTY0MmQwNDliNWI0NjY3MGRkMzVkYWFiMGJlMWM5NzViOTg0IiBkYXRhLXJlbW90ZT0idHJ1ZSIgbWV0aG9kPSJwb3N0Ij48ZGl2IHN0eWxlPSJtYXJnaW46MDtwYWRkaW5nOjA7ZGlzcGxheTppbmxpbmUiPjxpbnB1dCBuYW1lPSJ1dGY4IiB0eXBlPSJoaWRkZW4iIHZhbHVlPSImI3gyNzEzOyIgLz48aW5wdXQgbmFtZT0iYXV0aGVudGljaXR5X3Rva2VuIiB0eXBlPSJoaWRkZW4iIHZhbHVlPSJhTEJMQXozQ2hvbGtJb1p2d2wzK2NPZ25WY2JYNWVScGoxREdhL3pOLy96bjhiZks3YlRCdVc4YWgvcGJSZmpUM3ZFRmpxNVR6Y1hLdnJNQVZRbFl4dz09IiAvPjwvZGl2PgogICAgICA8YnV0dG9uCiAgICAgICAgY2xhc3M9ImJ0biBidG4tc20gYnRuLXdpdGgtY291bnQganMtdG9nZ2xlci10YXJnZXQiCiAgICAgICAgYXJpYS1sYWJlbD0iU3RhciB0aGlzIHJlcG9zaXRvcnkiIHRpdGxlPSJTdGFyIGN5Y2dpdC93ZWItc3R5bGUiCiAgICAgICAgZGF0YS1nYS1jbGljaz0iUmVwb3NpdG9yeSwgY2xpY2sgc3RhciBidXR0b24sIGFjdGlvbjpibG9iI3Nob3c7IHRleHQ6U3RhciI+CiAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1zdGFyIiBoZWlnaHQ9IjE2IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxNCAxNiIgd2lkdGg9IjE0Ij48cGF0aCBkPSJNMTQgNmwtNC45LS42NEw3IDEgNC45IDUuMzYgMCA2bDMuNiAzLjI2TDIuNjcgMTQgNyAxMS42NyAxMS4zMyAxNGwtLjkzLTQuNzR6Ij48L3BhdGg+PC9zdmc+CiAgICAgICAgU3RhcgogICAgICA8L2J1dHRvbj4KICAgICAgICA8YSBjbGFzcz0ic29jaWFsLWNvdW50IGpzLXNvY2lhbC1jb3VudCIgaHJlZj0iL2N5Y2dpdC93ZWItc3R5bGUvc3RhcmdhemVycyI+CiAgICAgICAgICAxMAogICAgICAgIDwvYT4KPC9mb3JtPiAgPC9kaXY+CgogIDwvbGk+CgogIDxsaT4KICAgICAgICAgIDwhLS0gPC90ZXh0YXJlYT4gLS0+PCEtLSAnImAgLS0+PGZvcm0gYWNjZXB0LWNoYXJzZXQ9IlVURi04IiBhY3Rpb249Ii9jeWNnaXQvd2ViLXN0eWxlL2ZvcmsiIGNsYXNzPSJidG4td2l0aC1jb3VudCIgZGF0YS1mb3JtLW5vbmNlPSIzNjAxNTY0MmQwNDliNWI0NjY3MGRkMzVkYWFiMGJlMWM5NzViOTg0IiBtZXRob2Q9InBvc3QiPjxkaXYgc3R5bGU9Im1hcmdpbjowO3BhZGRpbmc6MDtkaXNwbGF5OmlubGluZSI+PGlucHV0IG5hbWU9InV0ZjgiIHR5cGU9ImhpZGRlbiIgdmFsdWU9IiYjeDI3MTM7IiAvPjxpbnB1dCBuYW1lPSJhdXRoZW50aWNpdHlfdG9rZW4iIHR5cGU9ImhpZGRlbiIgdmFsdWU9ImFmKytwR1JWc255UHYyYjNRS25aMGNSbUJpQ3F1VGlLMUVTaDc1WjBqeHdJeGRoSU5IbXM0WVJqVXJtOFNndmdnb0Y0SU9JbkgzVTk2NjFtRTBJWHNnPT0iIC8+PC9kaXY+CiAgICAgICAgICAgIDxidXR0b24KICAgICAgICAgICAgICAgIHR5cGU9InN1Ym1pdCIKICAgICAgICAgICAgICAgIGNsYXNzPSJidG4gYnRuLXNtIGJ0bi13aXRoLWNvdW50IgogICAgICAgICAgICAgICAgZGF0YS1nYS1jbGljaz0iUmVwb3NpdG9yeSwgc2hvdyBmb3JrIG1vZGFsLCBhY3Rpb246YmxvYiNzaG93OyB0ZXh0OkZvcmsiCiAgICAgICAgICAgICAgICB0aXRsZT0iRm9yayB5b3VyIG93biBjb3B5IG9mIGN5Y2dpdC93ZWItc3R5bGUgdG8geW91ciBhY2NvdW50IgogICAgICAgICAgICAgICAgYXJpYS1sYWJlbD0iRm9yayB5b3VyIG93biBjb3B5IG9mIGN5Y2dpdC93ZWItc3R5bGUgdG8geW91ciBhY2NvdW50Ij4KICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzcz0ib2N0aWNvbiBvY3RpY29uLXJlcG8tZm9ya2VkIiBoZWlnaHQ9IjE2IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMCAxNiIgd2lkdGg9IjEwIj48cGF0aCBkPSJNOCAxYTEuOTkzIDEuOTkzIDAgMCAwLTEgMy43MlY2TDUgOCAzIDZWNC43MkExLjk5MyAxLjk5MyAwIDAgMCAyIDFhMS45OTMgMS45OTMgMCAwIDAtMSAzLjcyVjYuNWwzIDN2MS43OEExLjk5MyAxLjk5MyAwIDAgMCA1IDE1YTEuOTkzIDEuOTkzIDAgMCAwIDEtMy43MlY5LjVsMy0zVjQuNzJBMS45OTMgMS45OTMgMCAwIDAgOCAxek0yIDQuMkMxLjM0IDQuMi44IDMuNjUuOCAzYzAtLjY1LjU1LTEuMiAxLjItMS4yLjY1IDAgMS4yLjU1IDEuMiAxLjIgMCAuNjUtLjU1IDEuMi0xLjIgMS4yem0zIDEwYy0uNjYgMC0xLjItLjU1LTEuMi0xLjIgMC0uNjUuNTUtMS4yIDEuMi0xLjIuNjUgMCAxLjIuNTUgMS4yIDEuMiAwIC42NS0uNTUgMS4yLTEuMiAxLjJ6bTMtMTBjLS42NiAwLTEuMi0uNTUtMS4yLTEuMiAwLS42NS41NS0xLjIgMS4yLTEuMi42NSAwIDEuMi41NSAxLjIgMS4yIDAgLjY1LS41NSAxLjItMS4yIDEuMnoiPjwvcGF0aD48L3N2Zz4KICAgICAgICAgICAgICBGb3JrCiAgICAgICAgICAgIDwvYnV0dG9uPgo8L2Zvcm0+CiAgICA8YSBocmVmPSIvY3ljZ2l0L3dlYi1zdHlsZS9uZXR3b3JrIiBjbGFzcz0ic29jaWFsLWNvdW50Ij4KICAgICAgMQogICAgPC9hPgogIDwvbGk+CjwvdWw+CgogICAgPGgxIGNsYXNzPSJwdWJsaWMgIj4KICA8c3ZnIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzcz0ib2N0aWNvbiBvY3RpY29uLXJlcG8iIGhlaWdodD0iMTYiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEyIDE2IiB3aWR0aD0iMTIiPjxwYXRoIGQ9Ik00IDlIM1Y4aDF2MXptMC0zSDN2MWgxVjZ6bTAtMkgzdjFoMVY0em0wLTJIM3YxaDFWMnptOC0xdjEyYzAgLjU1LS40NSAxLTEgMUg2djJsLTEuNS0xLjVMMyAxNnYtMkgxYy0uNTUgMC0xLS40NS0xLTFWMWMwLS41NS40NS0xIDEtMWgxMGMuNTUgMCAxIC40NSAxIDF6bS0xIDEwSDF2Mmgydi0xaDN2MWg1di0yem0wLTEwSDJ2OWg5VjF6Ij48L3BhdGg+PC9zdmc+CiAgPHNwYW4gY2xhc3M9ImF1dGhvciIgaXRlbXByb3A9ImF1dGhvciI+PGEgaHJlZj0iL2N5Y2dpdCIgY2xhc3M9InVybCBmbiIgcmVsPSJhdXRob3IiPmN5Y2dpdDwvYT48L3NwYW4+PCEtLQotLT48c3BhbiBjbGFzcz0icGF0aC1kaXZpZGVyIj4vPC9zcGFuPjwhLS0KLS0+PHN0cm9uZyBpdGVtcHJvcD0ibmFtZSI+PGEgaHJlZj0iL2N5Y2dpdC93ZWItc3R5bGUiIGRhdGEtcGpheD0iI2pzLXJlcG8tcGpheC1jb250YWluZXIiPndlYi1zdHlsZTwvYT48L3N0cm9uZz4KCjwvaDE+CgogIDwvZGl2PgogIDxkaXYgY2xhc3M9ImNvbnRhaW5lciI+CiAgICAKPG5hdiBjbGFzcz0icmVwb25hdiBqcy1yZXBvLW5hdiBqcy1zaWRlbmF2LWNvbnRhaW5lci1wamF4IgogICAgIGl0ZW1zY29wZQogICAgIGl0ZW10eXBlPSJodHRwOi8vc2NoZW1hLm9yZy9CcmVhZGNydW1iTGlzdCIKICAgICByb2xlPSJuYXZpZ2F0aW9uIgogICAgIGRhdGEtcGpheD0iI2pzLXJlcG8tcGpheC1jb250YWluZXIiPgoKICA8c3BhbiBpdGVtc2NvcGUgaXRlbXR5cGU9Imh0dHA6Ly9zY2hlbWEub3JnL0xpc3RJdGVtIiBpdGVtcHJvcD0iaXRlbUxpc3RFbGVtZW50Ij4KICAgIDxhIGhyZWY9Ii9jeWNnaXQvd2ViLXN0eWxlIiBhcmlhLXNlbGVjdGVkPSJ0cnVlIiBjbGFzcz0ianMtc2VsZWN0ZWQtbmF2aWdhdGlvbi1pdGVtIHNlbGVjdGVkIHJlcG9uYXYtaXRlbSIgZGF0YS1ob3RrZXk9ImcgYyIgZGF0YS1zZWxlY3RlZC1saW5rcz0icmVwb19zb3VyY2UgcmVwb19kb3dubG9hZHMgcmVwb19jb21taXRzIHJlcG9fcmVsZWFzZXMgcmVwb190YWdzIHJlcG9fYnJhbmNoZXMgL2N5Y2dpdC93ZWItc3R5bGUiIGl0ZW1wcm9wPSJ1cmwiPgogICAgICA8c3ZnIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzcz0ib2N0aWNvbiBvY3RpY29uLWNvZGUiIGhlaWdodD0iMTYiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE0IDE2IiB3aWR0aD0iMTQiPjxwYXRoIGQ9Ik05LjUgM0w4IDQuNSAxMS41IDggOCAxMS41IDkuNSAxMyAxNCA4IDkuNSAzem0tNSAwTDAgOGw0LjUgNUw2IDExLjUgMi41IDggNiA0LjUgNC41IDN6Ij48L3BhdGg+PC9zdmc+CiAgICAgIDxzcGFuIGl0ZW1wcm9wPSJuYW1lIj5Db2RlPC9zcGFuPgogICAgICA8bWV0YSBpdGVtcHJvcD0icG9zaXRpb24iIGNvbnRlbnQ9IjEiPgo8L2E+ICA8L3NwYW4+CgogICAgPHNwYW4gaXRlbXNjb3BlIGl0ZW10eXBlPSJodHRwOi8vc2NoZW1hLm9yZy9MaXN0SXRlbSIgaXRlbXByb3A9Iml0ZW1MaXN0RWxlbWVudCI+CiAgICAgIDxhIGhyZWY9Ii9jeWNnaXQvd2ViLXN0eWxlL2lzc3VlcyIgY2xhc3M9ImpzLXNlbGVjdGVkLW5hdmlnYXRpb24taXRlbSByZXBvbmF2LWl0ZW0iIGRhdGEtaG90a2V5PSJnIGkiIGRhdGEtc2VsZWN0ZWQtbGlua3M9InJlcG9faXNzdWVzIHJlcG9fbGFiZWxzIHJlcG9fbWlsZXN0b25lcyAvY3ljZ2l0L3dlYi1zdHlsZS9pc3N1ZXMiIGl0ZW1wcm9wPSJ1cmwiPgogICAgICAgIDxzdmcgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJvY3RpY29uIG9jdGljb24taXNzdWUtb3BlbmVkIiBoZWlnaHQ9IjE2IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxNCAxNiIgd2lkdGg9IjE0Ij48cGF0aCBkPSJNNyAyLjNjMy4xNCAwIDUuNyAyLjU2IDUuNyA1LjdzLTIuNTYgNS43LTUuNyA1LjdBNS43MSA1LjcxIDAgMCAxIDEuMyA4YzAtMy4xNCAyLjU2LTUuNyA1LjctNS43ek03IDFDMy4xNCAxIDAgNC4xNCAwIDhzMy4xNCA3IDcgNyA3LTMuMTQgNy03LTMuMTQtNy03LTd6bTEgM0g2djVoMlY0em0wIDZINnYyaDJ2LTJ6Ij48L3BhdGg+PC9zdmc+CiAgICAgICAgPHNwYW4gaXRlbXByb3A9Im5hbWUiPklzc3Vlczwvc3Bhbj4KICAgICAgICA8c3BhbiBjbGFzcz0iY291bnRlciI+MDwvc3Bhbj4KICAgICAgICA8bWV0YSBpdGVtcHJvcD0icG9zaXRpb24iIGNvbnRlbnQ9IjIiPgo8L2E+ICAgIDwvc3Bhbj4KCiAgPHNwYW4gaXRlbXNjb3BlIGl0ZW10eXBlPSJodHRwOi8vc2NoZW1hLm9yZy9MaXN0SXRlbSIgaXRlbXByb3A9Iml0ZW1MaXN0RWxlbWVudCI+CiAgICA8YSBocmVmPSIvY3ljZ2l0L3dlYi1zdHlsZS9wdWxscyIgY2xhc3M9ImpzLXNlbGVjdGVkLW5hdmlnYXRpb24taXRlbSByZXBvbmF2LWl0ZW0iIGRhdGEtaG90a2V5PSJnIHAiIGRhdGEtc2VsZWN0ZWQtbGlua3M9InJlcG9fcHVsbHMgL2N5Y2dpdC93ZWItc3R5bGUvcHVsbHMiIGl0ZW1wcm9wPSJ1cmwiPgogICAgICA8c3ZnIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzcz0ib2N0aWNvbiBvY3RpY29uLWdpdC1wdWxsLXJlcXVlc3QiIGhlaWdodD0iMTYiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEyIDE2IiB3aWR0aD0iMTIiPjxwYXRoIGQ9Ik0xMSAxMS4yOFY1Yy0uMDMtLjc4LS4zNC0xLjQ3LS45NC0yLjA2QzkuNDYgMi4zNSA4Ljc4IDIuMDMgOCAySDdWMEw0IDNsMyAzVjRoMWMuMjcuMDIuNDguMTEuNjkuMzEuMjEuMi4zLjQyLjMxLjY5djYuMjhBMS45OTMgMS45OTMgMCAwIDAgMTAgMTVhMS45OTMgMS45OTMgMCAwIDAgMS0zLjcyem0tMSAyLjkyYy0uNjYgMC0xLjItLjU1LTEuMi0xLjIgMC0uNjUuNTUtMS4yIDEuMi0xLjIuNjUgMCAxLjIuNTUgMS4yIDEuMiAwIC42NS0uNTUgMS4yLTEuMiAxLjJ6TTQgM2MwLTEuMTEtLjg5LTItMi0yYTEuOTkzIDEuOTkzIDAgMCAwLTEgMy43MnY2LjU2QTEuOTkzIDEuOTkzIDAgMCAwIDIgMTVhMS45OTMgMS45OTMgMCAwIDAgMS0zLjcyVjQuNzJjLjU5LS4zNCAxLS45OCAxLTEuNzJ6bS0uOCAxMGMwIC42Ni0uNTUgMS4yLTEuMiAxLjItLjY1IDAtMS4yLS41NS0xLjItMS4yIDAtLjY1LjU1LTEuMiAxLjItMS4yLjY1IDAgMS4yLjU1IDEuMiAxLjJ6TTIgNC4yQzEuMzQgNC4yLjggMy42NS44IDNjMC0uNjUuNTUtMS4yIDEuMi0xLjIuNjUgMCAxLjIuNTUgMS4yIDEuMiAwIC42NS0uNTUgMS4yLTEuMiAxLjJ6Ij48L3BhdGg+PC9zdmc+CiAgICAgIDxzcGFuIGl0ZW1wcm9wPSJuYW1lIj5QdWxsIHJlcXVlc3RzPC9zcGFuPgogICAgICA8c3BhbiBjbGFzcz0iY291bnRlciI+MDwvc3Bhbj4KICAgICAgPG1ldGEgaXRlbXByb3A9InBvc2l0aW9uIiBjb250ZW50PSIzIj4KPC9hPiAgPC9zcGFuPgoKICAgIDxhIGhyZWY9Ii9jeWNnaXQvd2ViLXN0eWxlL3dpa2kiIGNsYXNzPSJqcy1zZWxlY3RlZC1uYXZpZ2F0aW9uLWl0ZW0gcmVwb25hdi1pdGVtIiBkYXRhLWhvdGtleT0iZyB3IiBkYXRhLXNlbGVjdGVkLWxpbmtzPSJyZXBvX3dpa2kgL2N5Y2dpdC93ZWItc3R5bGUvd2lraSI+CiAgICAgIDxzdmcgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJvY3RpY29uIG9jdGljb24tYm9vayIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiI+PHBhdGggZD0iTTMgNWg0djFIM1Y1em0wIDNoNFY3SDN2MXptMCAyaDRWOUgzdjF6bTExLTVoLTR2MWg0VjV6bTAgMmgtNHYxaDRWN3ptMCAyaC00djFoNFY5em0yLTZ2OWMwIC41NS0uNDUgMS0xIDFIOS41bC0xIDEtMS0xSDJjLS41NSAwLTEtLjQ1LTEtMVYzYzAtLjU1LjQ1LTEgMS0xaDUuNWwxIDEgMS0xSDE1Yy41NSAwIDEgLjQ1IDEgMXptLTggLjVMNy41IDNIMnY5aDZWMy41em03LS41SDkuNWwtLjUuNVYxMmg2VjN6Ij48L3BhdGg+PC9zdmc+CiAgICAgIFdpa2kKPC9hPgoKICA8YSBocmVmPSIvY3ljZ2l0L3dlYi1zdHlsZS9wdWxzZSIgY2xhc3M9ImpzLXNlbGVjdGVkLW5hdmlnYXRpb24taXRlbSByZXBvbmF2LWl0ZW0iIGRhdGEtc2VsZWN0ZWQtbGlua3M9InB1bHNlIC9jeWNnaXQvd2ViLXN0eWxlL3B1bHNlIj4KICAgIDxzdmcgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJvY3RpY29uIG9jdGljb24tcHVsc2UiIGhlaWdodD0iMTYiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE0IDE2IiB3aWR0aD0iMTQiPjxwYXRoIGQ9Ik0xMS41IDhMOC44IDUuNCA2LjYgOC41IDUuNSAxLjYgMi4zOCA4SDB2MmgzLjZsLjktMS44LjkgNS40TDkgOC41bDEuNiAxLjVIMTRWOHoiPjwvcGF0aD48L3N2Zz4KICAgIFB1bHNlCjwvYT4KICA8YSBocmVmPSIvY3ljZ2l0L3dlYi1zdHlsZS9ncmFwaHMiIGNsYXNzPSJqcy1zZWxlY3RlZC1uYXZpZ2F0aW9uLWl0ZW0gcmVwb25hdi1pdGVtIiBkYXRhLXNlbGVjdGVkLWxpbmtzPSJyZXBvX2dyYXBocyByZXBvX2NvbnRyaWJ1dG9ycyAvY3ljZ2l0L3dlYi1zdHlsZS9ncmFwaHMiPgogICAgPHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1ncmFwaCIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiI+PHBhdGggZD0iTTE2IDE0djFIMFYwaDF2MTRoMTV6TTUgMTNIM1Y4aDJ2NXptNCAwSDdWM2gydjEwem00IDBoLTJWNmgydjd6Ij48L3BhdGg+PC9zdmc+CiAgICBHcmFwaHMKPC9hPgoKPC9uYXY+CgogIDwvZGl2Pgo8L2Rpdj4KCjxkaXYgY2xhc3M9ImNvbnRhaW5lciBuZXctZGlzY3Vzc2lvbi10aW1lbGluZSBleHBlcmltZW50LXJlcG8tbmF2Ij4KICA8ZGl2IGNsYXNzPSJyZXBvc2l0b3J5LWNvbnRlbnQiPgoKICAgIAoKPGEgaHJlZj0iL2N5Y2dpdC93ZWItc3R5bGUvYmxvYi8xYzQwMWQwYjJiODMwNmY4NjZmYzRjMzI4ZWNkNWZhNDE5ZjcwNDc2L3NyYy9mb250cy9pY29uZm9udC53b2ZmIiBjbGFzcz0iaGlkZGVuIGpzLXBlcm1hbGluay1zaG9ydGN1dCIgZGF0YS1ob3RrZXk9InkiPlBlcm1hbGluazwvYT4KCjwhLS0gYmxvYiBjb250cmliIGtleTogYmxvYl9jb250cmlidXRvcnM6djIxOjZlNTcwZDRkZDhiYjllZjYwNzAyOWFmNDZlMzY2YTlhIC0tPgoKPGRpdiBjbGFzcz0iZmlsZS1uYXZpZ2F0aW9uIGpzLXplcm9jbGlwYm9hcmQtY29udGFpbmVyIj4KICAKPGRpdiBjbGFzcz0ic2VsZWN0LW1lbnUgYnJhbmNoLXNlbGVjdC1tZW51IGpzLW1lbnUtY29udGFpbmVyIGpzLXNlbGVjdC1tZW51IGxlZnQiPgogIDxidXR0b24gY2xhc3M9ImJ0biBidG4tc20gc2VsZWN0LW1lbnUtYnV0dG9uIGpzLW1lbnUtdGFyZ2V0IGNzcy10cnVuY2F0ZSIgZGF0YS1ob3RrZXk9InciCiAgICB0aXRsZT0ibWFzdGVyIgogICAgdHlwZT0iYnV0dG9uIiBhcmlhLWxhYmVsPSJTd2l0Y2ggYnJhbmNoZXMgb3IgdGFncyIgdGFiaW5kZXg9IjAiIGFyaWEtaGFzcG9wdXA9InRydWUiPgogICAgPGk+QnJhbmNoOjwvaT4KICAgIDxzcGFuIGNsYXNzPSJqcy1zZWxlY3QtYnV0dG9uIGNzcy10cnVuY2F0ZS10YXJnZXQiPm1hc3Rlcjwvc3Bhbj4KICA8L2J1dHRvbj4KCiAgPGRpdiBjbGFzcz0ic2VsZWN0LW1lbnUtbW9kYWwtaG9sZGVyIGpzLW1lbnUtY29udGVudCBqcy1uYXZpZ2F0aW9uLWNvbnRhaW5lciIgZGF0YS1wamF4IGFyaWEtaGlkZGVuPSJ0cnVlIj4KCiAgICA8ZGl2IGNsYXNzPSJzZWxlY3QtbWVudS1tb2RhbCI+CiAgICAgIDxkaXYgY2xhc3M9InNlbGVjdC1tZW51LWhlYWRlciI+CiAgICAgICAgPHN2ZyBhcmlhLWxhYmVsPSJDbG9zZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi14IGpzLW1lbnUtY2xvc2UiIGhlaWdodD0iMTYiIHJvbGU9ImltZyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTIgMTYiIHdpZHRoPSIxMiI+PHBhdGggZD0iTTcuNDggOGwzLjc1IDMuNzUtMS40OCAxLjQ4TDYgOS40OGwtMy43NSAzLjc1LTEuNDgtMS40OEw0LjUyIDggLjc3IDQuMjVsMS40OC0xLjQ4TDYgNi41MmwzLjc1LTMuNzUgMS40OCAxLjQ4eiI+PC9wYXRoPjwvc3ZnPgogICAgICAgIDxzcGFuIGNsYXNzPSJzZWxlY3QtbWVudS10aXRsZSI+U3dpdGNoIGJyYW5jaGVzL3RhZ3M8L3NwYW4+CiAgICAgIDwvZGl2PgoKICAgICAgPGRpdiBjbGFzcz0ic2VsZWN0LW1lbnUtZmlsdGVycyI+CiAgICAgICAgPGRpdiBjbGFzcz0ic2VsZWN0LW1lbnUtdGV4dC1maWx0ZXIiPgogICAgICAgICAgPGlucHV0IHR5cGU9InRleHQiIGFyaWEtbGFiZWw9IkZpbHRlciBicmFuY2hlcy90YWdzIiBpZD0iY29udGV4dC1jb21taXRpc2gtZmlsdGVyLWZpZWxkIiBjbGFzcz0iZm9ybS1jb250cm9sIGpzLWZpbHRlcmFibGUtZmllbGQganMtbmF2aWdhdGlvbi1lbmFibGUiIHBsYWNlaG9sZGVyPSJGaWx0ZXIgYnJhbmNoZXMvdGFncyI+CiAgICAgICAgPC9kaXY+CiAgICAgICAgPGRpdiBjbGFzcz0ic2VsZWN0LW1lbnUtdGFicyI+CiAgICAgICAgICA8dWw+CiAgICAgICAgICAgIDxsaSBjbGFzcz0ic2VsZWN0LW1lbnUtdGFiIj4KICAgICAgICAgICAgICA8YSBocmVmPSIjIiBkYXRhLXRhYi1maWx0ZXI9ImJyYW5jaGVzIiBkYXRhLWZpbHRlci1wbGFjZWhvbGRlcj0iRmlsdGVyIGJyYW5jaGVzL3RhZ3MiIGNsYXNzPSJqcy1zZWxlY3QtbWVudS10YWIiIHJvbGU9InRhYiI+QnJhbmNoZXM8L2E+CiAgICAgICAgICAgIDwvbGk+CiAgICAgICAgICAgIDxsaSBjbGFzcz0ic2VsZWN0LW1lbnUtdGFiIj4KICAgICAgICAgICAgICA8YSBocmVmPSIjIiBkYXRhLXRhYi1maWx0ZXI9InRhZ3MiIGRhdGEtZmlsdGVyLXBsYWNlaG9sZGVyPSJGaW5kIGEgdGFn4oCmIiBjbGFzcz0ianMtc2VsZWN0LW1lbnUtdGFiIiByb2xlPSJ0YWIiPlRhZ3M8L2E+CiAgICAgICAgICAgIDwvbGk+CiAgICAgICAgICA8L3VsPgogICAgICAgIDwvZGl2PgogICAgICA8L2Rpdj4KCiAgICAgIDxkaXYgY2xhc3M9InNlbGVjdC1tZW51LWxpc3Qgc2VsZWN0LW1lbnUtdGFiLWJ1Y2tldCBqcy1zZWxlY3QtbWVudS10YWItYnVja2V0IiBkYXRhLXRhYi1maWx0ZXI9ImJyYW5jaGVzIiByb2xlPSJtZW51Ij4KCiAgICAgICAgPGRpdiBkYXRhLWZpbHRlcmFibGUtZm9yPSJjb250ZXh0LWNvbW1pdGlzaC1maWx0ZXItZmllbGQiIGRhdGEtZmlsdGVyYWJsZS10eXBlPSJzdWJzdHJpbmciPgoKCiAgICAgICAgICAgIDxhIGNsYXNzPSJzZWxlY3QtbWVudS1pdGVtIGpzLW5hdmlnYXRpb24taXRlbSBqcy1uYXZpZ2F0aW9uLW9wZW4gc2VsZWN0ZWQiCiAgICAgICAgICAgICAgIGhyZWY9Ii9jeWNnaXQvd2ViLXN0eWxlL2Jsb2IvbWFzdGVyL3NyYy9mb250cy9pY29uZm9udC53b2ZmIgogICAgICAgICAgICAgICBkYXRhLW5hbWU9Im1hc3RlciIKICAgICAgICAgICAgICAgZGF0YS1za2lwLXBqYXg9InRydWUiCiAgICAgICAgICAgICAgIHJlbD0ibm9mb2xsb3ciPgogICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJvY3RpY29uIG9jdGljb24tY2hlY2sgc2VsZWN0LW1lbnUtaXRlbS1pY29uIiBoZWlnaHQ9IjE2IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMiAxNiIgd2lkdGg9IjEyIj48cGF0aCBkPSJNMTIgNWwtOCA4LTQtNCAxLjUtMS41TDQgMTBsNi41LTYuNXoiPjwvcGF0aD48L3N2Zz4KICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ic2VsZWN0LW1lbnUtaXRlbS10ZXh0IGNzcy10cnVuY2F0ZS10YXJnZXQganMtc2VsZWN0LW1lbnUtZmlsdGVyLXRleHQiIHRpdGxlPSJtYXN0ZXIiPgogICAgICAgICAgICAgICAgbWFzdGVyCiAgICAgICAgICAgICAgPC9zcGFuPgogICAgICAgICAgICA8L2E+CiAgICAgICAgPC9kaXY+CgogICAgICAgICAgPGRpdiBjbGFzcz0ic2VsZWN0LW1lbnUtbm8tcmVzdWx0cyI+Tm90aGluZyB0byBzaG93PC9kaXY+CiAgICAgIDwvZGl2PgoKICAgICAgPGRpdiBjbGFzcz0ic2VsZWN0LW1lbnUtbGlzdCBzZWxlY3QtbWVudS10YWItYnVja2V0IGpzLXNlbGVjdC1tZW51LXRhYi1idWNrZXQiIGRhdGEtdGFiLWZpbHRlcj0idGFncyI+CiAgICAgICAgPGRpdiBkYXRhLWZpbHRlcmFibGUtZm9yPSJjb250ZXh0LWNvbW1pdGlzaC1maWx0ZXItZmllbGQiIGRhdGEtZmlsdGVyYWJsZS10eXBlPSJzdWJzdHJpbmciPgoKCiAgICAgICAgPC9kaXY+CgogICAgICAgIDxkaXYgY2xhc3M9InNlbGVjdC1tZW51LW5vLXJlc3VsdHMiPk5vdGhpbmcgdG8gc2hvdzwvZGl2PgogICAgICA8L2Rpdj4KCiAgICA8L2Rpdj4KICA8L2Rpdj4KPC9kaXY+CgogIDxkaXYgY2xhc3M9ImJ0bi1ncm91cCByaWdodCI+CiAgICA8YSBocmVmPSIvY3ljZ2l0L3dlYi1zdHlsZS9maW5kL21hc3RlciIKICAgICAgICAgIGNsYXNzPSJqcy1wamF4LWNhcHR1cmUtaW5wdXQgYnRuIGJ0bi1zbSIKICAgICAgICAgIGRhdGEtcGpheAogICAgICAgICAgZGF0YS1ob3RrZXk9InQiPgogICAgICBGaW5kIGZpbGUKICAgIDwvYT4KICAgIDxidXR0b24gYXJpYS1sYWJlbD0iQ29weSBmaWxlIHBhdGggdG8gY2xpcGJvYXJkIiBjbGFzcz0ianMtemVyb2NsaXBib2FyZCBidG4gYnRuLXNtIHplcm9jbGlwYm9hcmQtYnV0dG9uIHRvb2x0aXBwZWQgdG9vbHRpcHBlZC1zIiBkYXRhLWNvcGllZC1oaW50PSJDb3BpZWQhIiB0eXBlPSJidXR0b24iPkNvcHkgcGF0aDwvYnV0dG9uPgogIDwvZGl2PgogIDxkaXYgY2xhc3M9ImJyZWFkY3J1bWIganMtemVyb2NsaXBib2FyZC10YXJnZXQiPgogICAgPHNwYW4gY2xhc3M9InJlcG8tcm9vdCBqcy1yZXBvLXJvb3QiPjxzcGFuIGNsYXNzPSJqcy1wYXRoLXNlZ21lbnQiPjxhIGhyZWY9Ii9jeWNnaXQvd2ViLXN0eWxlIj48c3Bhbj53ZWItc3R5bGU8L3NwYW4+PC9hPjwvc3Bhbj48L3NwYW4+PHNwYW4gY2xhc3M9InNlcGFyYXRvciI+Lzwvc3Bhbj48c3BhbiBjbGFzcz0ianMtcGF0aC1zZWdtZW50Ij48YSBocmVmPSIvY3ljZ2l0L3dlYi1zdHlsZS90cmVlL21hc3Rlci9zcmMiPjxzcGFuPnNyYzwvc3Bhbj48L2E+PC9zcGFuPjxzcGFuIGNsYXNzPSJzZXBhcmF0b3IiPi88L3NwYW4+PHNwYW4gY2xhc3M9ImpzLXBhdGgtc2VnbWVudCI+PGEgaHJlZj0iL2N5Y2dpdC93ZWItc3R5bGUvdHJlZS9tYXN0ZXIvc3JjL2ZvbnRzIj48c3Bhbj5mb250czwvc3Bhbj48L2E+PC9zcGFuPjxzcGFuIGNsYXNzPSJzZXBhcmF0b3IiPi88L3NwYW4+PHN0cm9uZyBjbGFzcz0iZmluYWwtcGF0aCI+aWNvbmZvbnQud29mZjwvc3Ryb25nPgogIDwvZGl2Pgo8L2Rpdj4KCjxpbmNsdWRlLWZyYWdtZW50IGNsYXNzPSJjb21taXQtdGVhc2UiIHNyYz0iL2N5Y2dpdC93ZWItc3R5bGUvY29udHJpYnV0b3JzL21hc3Rlci9zcmMvZm9udHMvaWNvbmZvbnQud29mZiI+CiAgPGRpdj4KICAgIEZldGNoaW5nIGNvbnRyaWJ1dG9ycyZoZWxsaXA7CiAgPC9kaXY+CgogIDxkaXYgY2xhc3M9ImNvbW1pdC10ZWFzZS1jb250cmlidXRvcnMiPgogICAgPGltZyBhbHQ9IiIgY2xhc3M9ImxvYWRlci1sb2FkaW5nIGxlZnQiIGhlaWdodD0iMTYiIHNyYz0iaHR0cHM6Ly9hc3NldHMtY2RuLmdpdGh1Yi5jb20vaW1hZ2VzL3NwaW5uZXJzL29jdG9jYXQtc3Bpbm5lci0zMi1FQUYyRjUuZ2lmIiB3aWR0aD0iMTYiIC8+CiAgICA8c3BhbiBjbGFzcz0ibG9hZGVyLWVycm9yIj5DYW5ub3QgcmV0cmlldmUgY29udHJpYnV0b3JzIGF0IHRoaXMgdGltZTwvc3Bhbj4KICA8L2Rpdj4KPC9pbmNsdWRlLWZyYWdtZW50Pgo8ZGl2IGNsYXNzPSJmaWxlIj4KICA8ZGl2IGNsYXNzPSJmaWxlLWhlYWRlciI+CiAgPGRpdiBjbGFzcz0iZmlsZS1hY3Rpb25zIj4KCiAgICA8ZGl2IGNsYXNzPSJidG4tZ3JvdXAiPgogICAgICA8YSBocmVmPSIvY3ljZ2l0L3dlYi1zdHlsZS9yYXcvbWFzdGVyL3NyYy9mb250cy9pY29uZm9udC53b2ZmIiBjbGFzcz0iYnRuIGJ0bi1zbSAiIGlkPSJyYXctdXJsIj5SYXc8L2E+CiAgICAgIDxhIGhyZWY9Ii9jeWNnaXQvd2ViLXN0eWxlL2NvbW1pdHMvbWFzdGVyL3NyYy9mb250cy9pY29uZm9udC53b2ZmIiBjbGFzcz0iYnRuIGJ0bi1zbSAiIHJlbD0ibm9mb2xsb3ciPkhpc3Rvcnk8L2E+CiAgICA8L2Rpdj4KCiAgICAgICAgPGEgY2xhc3M9ImJ0bi1vY3RpY29uIHRvb2x0aXBwZWQgdG9vbHRpcHBlZC1udyIKICAgICAgICAgICBocmVmPSJnaXRodWItbWFjOi8vb3BlblJlcG8vaHR0cHM6Ly9naXRodWIuY29tL2N5Y2dpdC93ZWItc3R5bGU/YnJhbmNoPW1hc3RlciZhbXA7ZmlsZXBhdGg9c3JjJTJGZm9udHMlMkZpY29uZm9udC53b2ZmIgogICAgICAgICAgIGFyaWEtbGFiZWw9Ik9wZW4gdGhpcyBmaWxlIGluIEdpdEh1YiBEZXNrdG9wIgogICAgICAgICAgIGRhdGEtZ2EtY2xpY2s9IlJlcG9zaXRvcnksIG9wZW4gd2l0aCBkZXNrdG9wLCB0eXBlOm1hYyI+CiAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJvY3RpY29uIG9jdGljb24tZGV2aWNlLWRlc2t0b3AiIGhlaWdodD0iMTYiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE2IDE2IiB3aWR0aD0iMTYiPjxwYXRoIGQ9Ik0xNSAySDFjLS41NSAwLTEgLjQ1LTEgMXY5YzAgLjU1LjQ1IDEgMSAxaDUuMzRjLS4yNS42MS0uODYgMS4zOS0yLjM0IDJoOGMtMS40OC0uNjEtMi4wOS0xLjM5LTIuMzQtMkgxNWMuNTUgMCAxLS40NSAxLTFWM2MwLS41NS0uNDUtMS0xLTF6bTAgOUgxVjNoMTR2OHoiPjwvcGF0aD48L3N2Zz4KICAgICAgICA8L2E+CgogICAgICAgIDwhLS0gPC90ZXh0YXJlYT4gLS0+PCEtLSAnImAgLS0+PGZvcm0gYWNjZXB0LWNoYXJzZXQ9IlVURi04IiBhY3Rpb249Ii9jeWNnaXQvd2ViLXN0eWxlL2RlbGV0ZS9tYXN0ZXIvc3JjL2ZvbnRzL2ljb25mb250LndvZmYiIGNsYXNzPSJpbmxpbmUtZm9ybSIgZGF0YS1mb3JtLW5vbmNlPSIzNjAxNTY0MmQwNDliNWI0NjY3MGRkMzVkYWFiMGJlMWM5NzViOTg0IiBtZXRob2Q9InBvc3QiPjxkaXYgc3R5bGU9Im1hcmdpbjowO3BhZGRpbmc6MDtkaXNwbGF5OmlubGluZSI+PGlucHV0IG5hbWU9InV0ZjgiIHR5cGU9ImhpZGRlbiIgdmFsdWU9IiYjeDI3MTM7IiAvPjxpbnB1dCBuYW1lPSJhdXRoZW50aWNpdHlfdG9rZW4iIHR5cGU9ImhpZGRlbiIgdmFsdWU9IjhIVWMvaEhmTG5TUGN6OGk5QVlmMXNDWU96N2VScXU3WllWUEwrNEdyck9heHNiSVllL2cxRkNudmlVNGkrMitTUlB0cjFwdVhOdVBzdnVJWTV2aGJRPT0iIC8+PC9kaXY+CiAgICAgICAgICA8YnV0dG9uIGNsYXNzPSJidG4tb2N0aWNvbiBidG4tb2N0aWNvbi1kYW5nZXIgdG9vbHRpcHBlZCB0b29sdGlwcGVkLW53IiB0eXBlPSJzdWJtaXQiCiAgICAgICAgICAgIGFyaWEtbGFiZWw9IkZvcmsgdGhpcyBwcm9qZWN0IGFuZCBkZWxldGUgdGhlIGZpbGUiIGRhdGEtZGlzYWJsZS13aXRoPgogICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzcz0ib2N0aWNvbiBvY3RpY29uLXRyYXNoY2FuIiBoZWlnaHQ9IjE2IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMiAxNiIgd2lkdGg9IjEyIj48cGF0aCBkPSJNMTEgMkg5YzAtLjU1LS40NS0xLTEtMUg1Yy0uNTUgMC0xIC40NS0xIDFIMmMtLjU1IDAtMSAuNDUtMSAxdjFjMCAuNTUuNDUgMSAxIDF2OWMwIC41NS40NSAxIDEgMWg3Yy41NSAwIDEtLjQ1IDEtMVY1Yy41NSAwIDEtLjQ1IDEtMVYzYzAtLjU1LS40NS0xLTEtMXptLTEgMTJIM1Y1aDF2OGgxVjVoMXY4aDFWNWgxdjhoMVY1aDF2OXptMS0xMEgyVjNoOXYxeiI+PC9wYXRoPjwvc3ZnPgogICAgICAgICAgPC9idXR0b24+CjwvZm9ybT4gIDwvZGl2PgoKICA8ZGl2IGNsYXNzPSJmaWxlLWluZm8iPgogICAgMjkuNCBLQgogIDwvZGl2Pgo8L2Rpdj4KCiAgCgogIDxkaXYgaXRlbXByb3A9InRleHQiIGNsYXNzPSJibG9iLXdyYXBwZXIgZGF0YSB0eXBlLXRleHQiPgogICAgICA8ZGl2IGNsYXNzPSJpbWFnZSI+CiAgICAgICAgICA8YSBocmVmPSIvY3ljZ2l0L3dlYi1zdHlsZS9ibG9iL21hc3Rlci9zcmMvZm9udHMvaWNvbmZvbnQud29mZj9yYXc9dHJ1ZSI+VmlldyBSYXc8L2E+CiAgICAgIDwvZGl2PgogIDwvZGl2PgoKPC9kaXY+Cgo8YnV0dG9uIHR5cGU9ImJ1dHRvbiIgZGF0YS1mYWNlYm94PSIjanVtcC10by1saW5lIiBkYXRhLWZhY2Vib3gtY2xhc3M9ImxpbmVqdW1wIiBkYXRhLWhvdGtleT0ibCIgY2xhc3M9ImhpZGRlbiI+SnVtcCB0byBMaW5lPC9idXR0b24+CjxkaXYgaWQ9Imp1bXAtdG8tbGluZSIgc3R5bGU9ImRpc3BsYXk6bm9uZSI+CiAgPCEtLSA8L3RleHRhcmVhPiAtLT48IS0tICciYCAtLT48Zm9ybSBhY2NlcHQtY2hhcnNldD0iVVRGLTgiIGFjdGlvbj0iIiBjbGFzcz0ianMtanVtcC10by1saW5lLWZvcm0iIG1ldGhvZD0iZ2V0Ij48ZGl2IHN0eWxlPSJtYXJnaW46MDtwYWRkaW5nOjA7ZGlzcGxheTppbmxpbmUiPjxpbnB1dCBuYW1lPSJ1dGY4IiB0eXBlPSJoaWRkZW4iIHZhbHVlPSImI3gyNzEzOyIgLz48L2Rpdj4KICAgIDxpbnB1dCBjbGFzcz0iZm9ybS1jb250cm9sIGxpbmVqdW1wLWlucHV0IGpzLWp1bXAtdG8tbGluZS1maWVsZCIgdHlwZT0idGV4dCIgcGxhY2Vob2xkZXI9Ikp1bXAgdG8gbGluZSZoZWxsaXA7IiBhcmlhLWxhYmVsPSJKdW1wIHRvIGxpbmUiIGF1dG9mb2N1cz4KICAgIDxidXR0b24gdHlwZT0ic3VibWl0IiBjbGFzcz0iYnRuIj5HbzwvYnV0dG9uPgo8L2Zvcm0+PC9kaXY+CgogIDwvZGl2PgogIDxkaXYgY2xhc3M9Im1vZGFsLWJhY2tkcm9wIGpzLXRvdWNoLWV2ZW50cyI+PC9kaXY+CjwvZGl2PgoKCiAgICA8L2Rpdj4KICA8L2Rpdj4KCiAgICA8L2Rpdj4KCiAgICAgICAgPGRpdiBjbGFzcz0iY29udGFpbmVyIHNpdGUtZm9vdGVyLWNvbnRhaW5lciI+CiAgPGRpdiBjbGFzcz0ic2l0ZS1mb290ZXIiIHJvbGU9ImNvbnRlbnRpbmZvIj4KICAgIDx1bCBjbGFzcz0ic2l0ZS1mb290ZXItbGlua3MgcmlnaHQiPgogICAgICAgIDxsaT48YSBocmVmPSJodHRwczovL3N0YXR1cy5naXRodWIuY29tLyIgZGF0YS1nYS1jbGljaz0iRm9vdGVyLCBnbyB0byBzdGF0dXMsIHRleHQ6c3RhdHVzIj5TdGF0dXM8L2E+PC9saT4KICAgICAgPGxpPjxhIGhyZWY9Imh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20iIGRhdGEtZ2EtY2xpY2s9IkZvb3RlciwgZ28gdG8gYXBpLCB0ZXh0OmFwaSI+QVBJPC9hPjwvbGk+CiAgICAgIDxsaT48YSBocmVmPSJodHRwczovL3RyYWluaW5nLmdpdGh1Yi5jb20iIGRhdGEtZ2EtY2xpY2s9IkZvb3RlciwgZ28gdG8gdHJhaW5pbmcsIHRleHQ6dHJhaW5pbmciPlRyYWluaW5nPC9hPjwvbGk+CiAgICAgIDxsaT48YSBocmVmPSJodHRwczovL3Nob3AuZ2l0aHViLmNvbSIgZGF0YS1nYS1jbGljaz0iRm9vdGVyLCBnbyB0byBzaG9wLCB0ZXh0OnNob3AiPlNob3A8L2E+PC9saT4KICAgICAgICA8bGk+PGEgaHJlZj0iaHR0cHM6Ly9naXRodWIuY29tL2Jsb2ciIGRhdGEtZ2EtY2xpY2s9IkZvb3RlciwgZ28gdG8gYmxvZywgdGV4dDpibG9nIj5CbG9nPC9hPjwvbGk+CiAgICAgICAgPGxpPjxhIGhyZWY9Imh0dHBzOi8vZ2l0aHViLmNvbS9hYm91dCIgZGF0YS1nYS1jbGljaz0iRm9vdGVyLCBnbyB0byBhYm91dCwgdGV4dDphYm91dCI+QWJvdXQ8L2E+PC9saT4KCiAgICA8L3VsPgoKICAgIDxhIGhyZWY9Imh0dHBzOi8vZ2l0aHViLmNvbSIgYXJpYS1sYWJlbD0iSG9tZXBhZ2UiIGNsYXNzPSJzaXRlLWZvb3Rlci1tYXJrIiB0aXRsZT0iR2l0SHViIj4KICAgICAgPHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1tYXJrLWdpdGh1YiIgaGVpZ2h0PSIyNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTYgMTYiIHdpZHRoPSIyNCI+PHBhdGggZD0iTTggMEMzLjU4IDAgMCAzLjU4IDAgOGMwIDMuNTQgMi4yOSA2LjUzIDUuNDcgNy41OS40LjA3LjU1LS4xNy41NS0uMzggMC0uMTktLjAxLS44Mi0uMDEtMS40OS0yLjAxLjM3LTIuNTMtLjQ5LTIuNjktLjk0LS4wOS0uMjMtLjQ4LS45NC0uODItMS4xMy0uMjgtLjE1LS42OC0uNTItLjAxLS41My42My0uMDEgMS4wOC41OCAxLjIzLjgyLjcyIDEuMjEgMS44Ny44NyAyLjMzLjY2LjA3LS41Mi4yOC0uODcuNTEtMS4wNy0xLjc4LS4yLTMuNjQtLjg5LTMuNjQtMy45NSAwLS44Ny4zMS0xLjU5LjgyLTIuMTUtLjA4LS4yLS4zNi0xLjAyLjA4LTIuMTIgMCAwIC42Ny0uMjEgMi4yLjgyLjY0LS4xOCAxLjMyLS4yNyAyLS4yNy42OCAwIDEuMzYuMDkgMiAuMjcgMS41My0xLjA0IDIuMi0uODIgMi4yLS44Mi40NCAxLjEuMTYgMS45Mi4wOCAyLjEyLjUxLjU2LjgyIDEuMjcuODIgMi4xNSAwIDMuMDctMS44NyAzLjc1LTMuNjUgMy45NS4yOS4yNS41NC43My41NCAxLjQ4IDAgMS4wNy0uMDEgMS45My0uMDEgMi4yIDAgLjIxLjE1LjQ2LjU1LjM4QTguMDEzIDguMDEzIDAgMCAwIDE2IDhjMC00LjQyLTMuNTgtOC04LTh6Ij48L3BhdGg+PC9zdmc+CjwvYT4KICAgIDx1bCBjbGFzcz0ic2l0ZS1mb290ZXItbGlua3MiPgogICAgICA8bGk+JmNvcHk7IDIwMTYgPHNwYW4gdGl0bGU9IjAuMDg0MzBzIGZyb20gZ2l0aHViLWZlMTUxLWNwMS1wcmQuaWFkLmdpdGh1Yi5uZXQiPkdpdEh1Yjwvc3Bhbj4sIEluYy48L2xpPgogICAgICAgIDxsaT48YSBocmVmPSJodHRwczovL2dpdGh1Yi5jb20vc2l0ZS90ZXJtcyIgZGF0YS1nYS1jbGljaz0iRm9vdGVyLCBnbyB0byB0ZXJtcywgdGV4dDp0ZXJtcyI+VGVybXM8L2E+PC9saT4KICAgICAgICA8bGk+PGEgaHJlZj0iaHR0cHM6Ly9naXRodWIuY29tL3NpdGUvcHJpdmFjeSIgZGF0YS1nYS1jbGljaz0iRm9vdGVyLCBnbyB0byBwcml2YWN5LCB0ZXh0OnByaXZhY3kiPlByaXZhY3k8L2E+PC9saT4KICAgICAgICA8bGk+PGEgaHJlZj0iaHR0cHM6Ly9naXRodWIuY29tL3NlY3VyaXR5IiBkYXRhLWdhLWNsaWNrPSJGb290ZXIsIGdvIHRvIHNlY3VyaXR5LCB0ZXh0OnNlY3VyaXR5Ij5TZWN1cml0eTwvYT48L2xpPgogICAgICAgIDxsaT48YSBocmVmPSJodHRwczovL2dpdGh1Yi5jb20vY29udGFjdCIgZGF0YS1nYS1jbGljaz0iRm9vdGVyLCBnbyB0byBjb250YWN0LCB0ZXh0OmNvbnRhY3QiPkNvbnRhY3Q8L2E+PC9saT4KICAgICAgICA8bGk+PGEgaHJlZj0iaHR0cHM6Ly9oZWxwLmdpdGh1Yi5jb20iIGRhdGEtZ2EtY2xpY2s9IkZvb3RlciwgZ28gdG8gaGVscCwgdGV4dDpoZWxwIj5IZWxwPC9hPjwvbGk+CiAgICA8L3VsPgogIDwvZGl2Pgo8L2Rpdj4KCgoKICAgIAoKICAgIDxkaXYgaWQ9ImFqYXgtZXJyb3ItbWVzc2FnZSIgY2xhc3M9ImFqYXgtZXJyb3ItbWVzc2FnZSBmbGFzaCBmbGFzaC1lcnJvciI+CiAgICAgIDxzdmcgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJvY3RpY29uIG9jdGljb24tYWxlcnQiIGhlaWdodD0iMTYiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE2IDE2IiB3aWR0aD0iMTYiPjxwYXRoIGQ9Ik04Ljg2NSAxLjUyYy0uMTgtLjMxLS41MS0uNS0uODctLjVzLS42OS4xOS0uODcuNUwuMjc1IDEzLjVjLS4xOC4zMS0uMTguNjkgMCAxIC4xOS4zMS41Mi41Ljg3LjVoMTMuN2MuMzYgMCAuNjktLjE5Ljg2LS41LjE3LS4zMS4xOC0uNjkuMDEtMUw4Ljg2NSAxLjUyek04Ljk5NSAxM2gtMnYtMmgydjJ6bTAtM2gtMlY2aDJ2NHoiPjwvcGF0aD48L3N2Zz4KICAgICAgPGJ1dHRvbiB0eXBlPSJidXR0b24iIGNsYXNzPSJmbGFzaC1jbG9zZSBqcy1mbGFzaC1jbG9zZSBqcy1hamF4LWVycm9yLWRpc21pc3MiIGFyaWEtbGFiZWw9IkRpc21pc3MgZXJyb3IiPgogICAgICAgIDxzdmcgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJvY3RpY29uIG9jdGljb24teCIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTIgMTYiIHdpZHRoPSIxMiI+PHBhdGggZD0iTTcuNDggOGwzLjc1IDMuNzUtMS40OCAxLjQ4TDYgOS40OGwtMy43NSAzLjc1LTEuNDgtMS40OEw0LjUyIDggLjc3IDQuMjVsMS40OC0xLjQ4TDYgNi41MmwzLjc1LTMuNzUgMS40OCAxLjQ4eiI+PC9wYXRoPjwvc3ZnPgogICAgICA8L2J1dHRvbj4KICAgICAgU29tZXRoaW5nIHdlbnQgd3Jvbmcgd2l0aCB0aGF0IHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4uCiAgICA8L2Rpdj4KCgogICAgICAKICAgICAgPHNjcmlwdCBjcm9zc29yaWdpbj0iYW5vbnltb3VzIiBpbnRlZ3JpdHk9InNoYTI1Ni0rYVFHRitYcWNUUXR4WEVEVlVzSG84SHR5SWNTc0UzaG9FQ3UxRWlSb1IwPSIgc3JjPSJodHRwczovL2Fzc2V0cy1jZG4uZ2l0aHViLmNvbS9hc3NldHMvZnJhbWV3b3Jrcy1mOWE0MDYxN2U1ZWE3MTM0MmRjNTcxMDM1NTRiMDdhM2MxZWRjODg3MTJiMDRkZTFhMDQwYWVkNDQ4OTFhMTFkLmpzIj48L3NjcmlwdD4KICAgICAgPHNjcmlwdCBhc3luYz0iYXN5bmMiIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiIGludGVncml0eT0ic2hhMjU2LUZhQVJ2QmV1V01HTXQwVjlZWlFwQktQNGZYMWRaZmMrcHV2RXo2WVBQYmM9IiBzcmM9Imh0dHBzOi8vYXNzZXRzLWNkbi5naXRodWIuY29tL2Fzc2V0cy9naXRodWItMTVhMDExYmMxN2FlNThjMThjYjc0NTdkNjE5NDI5MDRhM2Y4N2Q3ZDVkNjVmNzNlYTZlYmM0Y2ZhNjBmM2RiNy5qcyI+PC9zY3JpcHQ+CiAgICAgIAogICAgICAKICAgICAgCiAgICAgIAogICAgICAKICAgICAgCiAgICA8ZGl2IGNsYXNzPSJqcy1zdGFsZS1zZXNzaW9uLWZsYXNoIHN0YWxlLXNlc3Npb24tZmxhc2ggZmxhc2ggZmxhc2gtd2FybiBmbGFzaC1iYW5uZXIgaGlkZGVuIj4KICAgICAgPHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1hbGVydCIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiI+PHBhdGggZD0iTTguODY1IDEuNTJjLS4xOC0uMzEtLjUxLS41LS44Ny0uNXMtLjY5LjE5LS44Ny41TC4yNzUgMTMuNWMtLjE4LjMxLS4xOC42OSAwIDEgLjE5LjMxLjUyLjUuODcuNWgxMy43Yy4zNiAwIC42OS0uMTkuODYtLjUuMTctLjMxLjE4LS42OS4wMS0xTDguODY1IDEuNTJ6TTguOTk1IDEzaC0ydi0yaDJ2MnptMC0zaC0yVjZoMnY0eiI+PC9wYXRoPjwvc3ZnPgogICAgICA8c3BhbiBjbGFzcz0ic2lnbmVkLWluLXRhYi1mbGFzaCI+WW91IHNpZ25lZCBpbiB3aXRoIGFub3RoZXIgdGFiIG9yIHdpbmRvdy4gPGEgaHJlZj0iIj5SZWxvYWQ8L2E+IHRvIHJlZnJlc2ggeW91ciBzZXNzaW9uLjwvc3Bhbj4KICAgICAgPHNwYW4gY2xhc3M9InNpZ25lZC1vdXQtdGFiLWZsYXNoIj5Zb3Ugc2lnbmVkIG91dCBpbiBhbm90aGVyIHRhYiBvciB3aW5kb3cuIDxhIGhyZWY9IiI+UmVsb2FkPC9hPiB0byByZWZyZXNoIHlvdXIgc2Vzc2lvbi48L3NwYW4+CiAgICA8L2Rpdj4KICAgIDxkaXYgY2xhc3M9ImZhY2Vib3giIGlkPSJmYWNlYm94IiBzdHlsZT0iZGlzcGxheTpub25lOyI+CiAgPGRpdiBjbGFzcz0iZmFjZWJveC1wb3B1cCI+CiAgICA8ZGl2IGNsYXNzPSJmYWNlYm94LWNvbnRlbnQiIHJvbGU9ImRpYWxvZyIgYXJpYS1sYWJlbGxlZGJ5PSJmYWNlYm94LWhlYWRlciIgYXJpYS1kZXNjcmliZWRieT0iZmFjZWJveC1kZXNjcmlwdGlvbiI+CiAgICA8L2Rpdj4KICAgIDxidXR0b24gdHlwZT0iYnV0dG9uIiBjbGFzcz0iZmFjZWJveC1jbG9zZSBqcy1mYWNlYm94LWNsb3NlIiBhcmlhLWxhYmVsPSJDbG9zZSBtb2RhbCI+CiAgICAgIDxzdmcgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJvY3RpY29uIG9jdGljb24teCIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTIgMTYiIHdpZHRoPSIxMiI+PHBhdGggZD0iTTcuNDggOGwzLjc1IDMuNzUtMS40OCAxLjQ4TDYgOS40OGwtMy43NSAzLjc1LTEuNDgtMS40OEw0LjUyIDggLjc3IDQuMjVsMS40OC0xLjQ4TDYgNi41MmwzLjc1LTMuNzUgMS40OCAxLjQ4eiI+PC9wYXRoPjwvc3ZnPgogICAgPC9idXR0b24+CiAgPC9kaXY+CjwvZGl2PgoKICA8L2JvZHk+CjwvaHRtbD4KCg=="

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "data:application/x-font-ttf;base64,CgoKCjwhRE9DVFlQRSBodG1sPgo8aHRtbCBsYW5nPSJlbiIgY2xhc3M9IiBpcy1jb3B5LWVuYWJsZWQgZW1vamktc2l6ZS1ib29zdCBpcy11MmYtZW5hYmxlZCI+CiAgPGhlYWQgcHJlZml4PSJvZzogaHR0cDovL29ncC5tZS9ucyMgZmI6IGh0dHA6Ly9vZ3AubWUvbnMvZmIjIG9iamVjdDogaHR0cDovL29ncC5tZS9ucy9vYmplY3QjIGFydGljbGU6IGh0dHA6Ly9vZ3AubWUvbnMvYXJ0aWNsZSMgcHJvZmlsZTogaHR0cDovL29ncC5tZS9ucy9wcm9maWxlIyI+CiAgICA8bWV0YSBjaGFyc2V0PSd1dGYtOCc+CgogICAgPGxpbmsgY3Jvc3NvcmlnaW49ImFub255bW91cyIgaHJlZj0iaHR0cHM6Ly9hc3NldHMtY2RuLmdpdGh1Yi5jb20vYXNzZXRzL2ZyYW1ld29ya3MtMDZlNGQ4ZjU5ZjViOTI3ZjEzOTE5YzQyM2Y0MGYwODg4ZjM3ZjlhZjdmNDI2ZTQwMjA5NDhiMDBiOTM3MTA1OS5jc3MiIGludGVncml0eT0ic2hhMjU2LUJ1VFk5Wjlia244VGtaeENQMER3aUk4MythOS9RbTVBSUpTTEFMazNFRms9IiBtZWRpYT0iYWxsIiByZWw9InN0eWxlc2hlZXQiIC8+CiAgICA8bGluayBjcm9zc29yaWdpbj0iYW5vbnltb3VzIiBocmVmPSJodHRwczovL2Fzc2V0cy1jZG4uZ2l0aHViLmNvbS9hc3NldHMvZ2l0aHViLWJkMGM2MzhjNjE5NWUwYmIzYmU5MWU2OGY2NDEzYTM4Yjc2YmE3OTI1OGQxMzY3NWNhMmJhZGE1NDkzY2M3YTIuY3NzIiBpbnRlZ3JpdHk9InNoYTI1Ni12UXhqakdHVjRMczc2UjVvOWtFNk9MZHJwNUpZMFRaMXlpdXRwVWs4eDZJPSIgbWVkaWE9ImFsbCIgcmVsPSJzdHlsZXNoZWV0IiAvPgogICAgCiAgICAKICAgIAogICAgCiAgICAKCiAgICA8bGluayBhcz0ic2NyaXB0IiBocmVmPSJodHRwczovL2Fzc2V0cy1jZG4uZ2l0aHViLmNvbS9hc3NldHMvZnJhbWV3b3Jrcy1mOWE0MDYxN2U1ZWE3MTM0MmRjNTcxMDM1NTRiMDdhM2MxZWRjODg3MTJiMDRkZTFhMDQwYWVkNDQ4OTFhMTFkLmpzIiByZWw9InByZWxvYWQiIC8+CiAgICAKICAgIDxsaW5rIGFzPSJzY3JpcHQiIGhyZWY9Imh0dHBzOi8vYXNzZXRzLWNkbi5naXRodWIuY29tL2Fzc2V0cy9naXRodWItMTVhMDExYmMxN2FlNThjMThjYjc0NTdkNjE5NDI5MDRhM2Y4N2Q3ZDVkNjVmNzNlYTZlYmM0Y2ZhNjBmM2RiNy5qcyIgcmVsPSJwcmVsb2FkIiAvPgoKICAgIDxtZXRhIGh0dHAtZXF1aXY9IlgtVUEtQ29tcGF0aWJsZSIgY29udGVudD0iSUU9ZWRnZSI+CiAgICA8bWV0YSBodHRwLWVxdWl2PSJDb250ZW50LUxhbmd1YWdlIiBjb250ZW50PSJlbiI+CiAgICA8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoIj4KICAgIAogICAgCiAgICA8dGl0bGU+d2ViLXN0eWxlL2ljb25mb250LnR0ZiBhdCBtYXN0ZXIgwrcgY3ljZ2l0L3dlYi1zdHlsZTwvdGl0bGU+CiAgICA8bGluayByZWw9InNlYXJjaCIgdHlwZT0iYXBwbGljYXRpb24vb3BlbnNlYXJjaGRlc2NyaXB0aW9uK3htbCIgaHJlZj0iL29wZW5zZWFyY2gueG1sIiB0aXRsZT0iR2l0SHViIj4KICAgIDxsaW5rIHJlbD0iZmx1aWQtaWNvbiIgaHJlZj0iaHR0cHM6Ly9naXRodWIuY29tL2ZsdWlkaWNvbi5wbmciIHRpdGxlPSJHaXRIdWIiPgogICAgPGxpbmsgcmVsPSJhcHBsZS10b3VjaC1pY29uIiBocmVmPSIvYXBwbGUtdG91Y2gtaWNvbi5wbmciPgogICAgPGxpbmsgcmVsPSJhcHBsZS10b3VjaC1pY29uIiBzaXplcz0iNTd4NTciIGhyZWY9Ii9hcHBsZS10b3VjaC1pY29uLTU3eDU3LnBuZyI+CiAgICA8bGluayByZWw9ImFwcGxlLXRvdWNoLWljb24iIHNpemVzPSI2MHg2MCIgaHJlZj0iL2FwcGxlLXRvdWNoLWljb24tNjB4NjAucG5nIj4KICAgIDxsaW5rIHJlbD0iYXBwbGUtdG91Y2gtaWNvbiIgc2l6ZXM9IjcyeDcyIiBocmVmPSIvYXBwbGUtdG91Y2gtaWNvbi03Mng3Mi5wbmciPgogICAgPGxpbmsgcmVsPSJhcHBsZS10b3VjaC1pY29uIiBzaXplcz0iNzZ4NzYiIGhyZWY9Ii9hcHBsZS10b3VjaC1pY29uLTc2eDc2LnBuZyI+CiAgICA8bGluayByZWw9ImFwcGxlLXRvdWNoLWljb24iIHNpemVzPSIxMTR4MTE0IiBocmVmPSIvYXBwbGUtdG91Y2gtaWNvbi0xMTR4MTE0LnBuZyI+CiAgICA8bGluayByZWw9ImFwcGxlLXRvdWNoLWljb24iIHNpemVzPSIxMjB4MTIwIiBocmVmPSIvYXBwbGUtdG91Y2gtaWNvbi0xMjB4MTIwLnBuZyI+CiAgICA8bGluayByZWw9ImFwcGxlLXRvdWNoLWljb24iIHNpemVzPSIxNDR4MTQ0IiBocmVmPSIvYXBwbGUtdG91Y2gtaWNvbi0xNDR4MTQ0LnBuZyI+CiAgICA8bGluayByZWw9ImFwcGxlLXRvdWNoLWljb24iIHNpemVzPSIxNTJ4MTUyIiBocmVmPSIvYXBwbGUtdG91Y2gtaWNvbi0xNTJ4MTUyLnBuZyI+CiAgICA8bGluayByZWw9ImFwcGxlLXRvdWNoLWljb24iIHNpemVzPSIxODB4MTgwIiBocmVmPSIvYXBwbGUtdG91Y2gtaWNvbi0xODB4MTgwLnBuZyI+CiAgICA8bWV0YSBwcm9wZXJ0eT0iZmI6YXBwX2lkIiBjb250ZW50PSIxNDAxNDg4NjkzNDM2NTI4Ij4KCiAgICAgIDxtZXRhIGNvbnRlbnQ9Imh0dHBzOi8vYXZhdGFyczAuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvMTMxMTIwMTQ/dj0zJmFtcDtzPTQwMCIgbmFtZT0idHdpdHRlcjppbWFnZTpzcmMiIC8+PG1ldGEgY29udGVudD0iQGdpdGh1YiIgbmFtZT0idHdpdHRlcjpzaXRlIiAvPjxtZXRhIGNvbnRlbnQ9InN1bW1hcnkiIG5hbWU9InR3aXR0ZXI6Y2FyZCIgLz48bWV0YSBjb250ZW50PSJjeWNnaXQvd2ViLXN0eWxlIiBuYW1lPSJ0d2l0dGVyOnRpdGxlIiAvPjxtZXRhIGNvbnRlbnQ9IndlYi1zdHlsZSAtIHdlYuWFrOeUqOagt+W8j+e7hOS7tuW6kyIgbmFtZT0idHdpdHRlcjpkZXNjcmlwdGlvbiIgLz4KICAgICAgPG1ldGEgY29udGVudD0iaHR0cHM6Ly9hdmF0YXJzMC5naXRodWJ1c2VyY29udGVudC5jb20vdS8xMzExMjAxND92PTMmYW1wO3M9NDAwIiBwcm9wZXJ0eT0ib2c6aW1hZ2UiIC8+PG1ldGEgY29udGVudD0iR2l0SHViIiBwcm9wZXJ0eT0ib2c6c2l0ZV9uYW1lIiAvPjxtZXRhIGNvbnRlbnQ9Im9iamVjdCIgcHJvcGVydHk9Im9nOnR5cGUiIC8+PG1ldGEgY29udGVudD0iY3ljZ2l0L3dlYi1zdHlsZSIgcHJvcGVydHk9Im9nOnRpdGxlIiAvPjxtZXRhIGNvbnRlbnQ9Imh0dHBzOi8vZ2l0aHViLmNvbS9jeWNnaXQvd2ViLXN0eWxlIiBwcm9wZXJ0eT0ib2c6dXJsIiAvPjxtZXRhIGNvbnRlbnQ9IndlYi1zdHlsZSAtIHdlYuWFrOeUqOagt+W8j+e7hOS7tuW6kyIgcHJvcGVydHk9Im9nOmRlc2NyaXB0aW9uIiAvPgogICAgICA8bWV0YSBuYW1lPSJicm93c2VyLXN0YXRzLXVybCIgY29udGVudD0iaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9fcHJpdmF0ZS9icm93c2VyL3N0YXRzIj4KICAgIDxtZXRhIG5hbWU9ImJyb3dzZXItZXJyb3JzLXVybCIgY29udGVudD0iaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9fcHJpdmF0ZS9icm93c2VyL2Vycm9ycyI+CiAgICA8bGluayByZWw9ImFzc2V0cyIgaHJlZj0iaHR0cHM6Ly9hc3NldHMtY2RuLmdpdGh1Yi5jb20vIj4KICAgIDxsaW5rIHJlbD0id2ViLXNvY2tldCIgaHJlZj0id3NzOi8vbGl2ZS5naXRodWIuY29tL19zb2NrZXRzL01Ua3dPRFEyT21JNU56UXhNbVl6T1RZNVpqZGlOVGt5TWprd016YzRZV1JtTVRVeU9UYzRPamxqTmpabU5qazBOVFJsTVRjelpHVTJNemhqWVRoaU5HSmxPV1ZpT1RSbU5ESTBaamhtWkRKaE1XRTBPR013T1RVMFpHWTRZbUZsWVRaak9EVTJaalk9LS00Nzc0NmVmOWE5YjM1MGJmNmU5ZmM3ZWU1MWJkN2Q5ZDlmZGQyZWRjIj4KICAgIDxtZXRhIG5hbWU9InBqYXgtdGltZW91dCIgY29udGVudD0iMTAwMCI+CiAgICA8bGluayByZWw9InN1ZG8tbW9kYWwiIGhyZWY9Ii9zZXNzaW9ucy9zdWRvX21vZGFsIj4KCiAgICA8bWV0YSBuYW1lPSJtc2FwcGxpY2F0aW9uLVRpbGVJbWFnZSIgY29udGVudD0iL3dpbmRvd3MtdGlsZS5wbmciPgogICAgPG1ldGEgbmFtZT0ibXNhcHBsaWNhdGlvbi1UaWxlQ29sb3IiIGNvbnRlbnQ9IiNmZmZmZmYiPgogICAgPG1ldGEgbmFtZT0ic2VsZWN0ZWQtbGluayIgdmFsdWU9InJlcG9fc291cmNlIiBkYXRhLXBqYXgtdHJhbnNpZW50PgoKICAgIDxtZXRhIG5hbWU9Imdvb2dsZS1zaXRlLXZlcmlmaWNhdGlvbiIgY29udGVudD0iS1Q1Z3M4aDB3dmFhZ0xLQVZXcThiYmVOd25aWksxcjFYUXlzWDN4dXJMVSI+CjxtZXRhIG5hbWU9Imdvb2dsZS1zaXRlLXZlcmlmaWNhdGlvbiIgY29udGVudD0iWnpoVnlFRndiN3czZTAtdU9UbHRtOEpzY2syRjVTdFZpaEQwZXh3MmZzQSI+CiAgICA8bWV0YSBuYW1lPSJnb29nbGUtYW5hbHl0aWNzIiBjb250ZW50PSJVQS0zNzY5NjkxLTIiPgoKPG1ldGEgY29udGVudD0iY29sbGVjdG9yLmdpdGh1YmFwcC5jb20iIG5hbWU9Im9jdG9seXRpY3MtaG9zdCIgLz48bWV0YSBjb250ZW50PSJnaXRodWIiIG5hbWU9Im9jdG9seXRpY3MtYXBwLWlkIiAvPjxtZXRhIGNvbnRlbnQ9Ijc4MzQxODk2OjEyRDQ6MTk1QjAyOUQ6NTc3MDBCMjAiIG5hbWU9Im9jdG9seXRpY3MtZGltZW5zaW9uLXJlcXVlc3RfaWQiIC8+PG1ldGEgY29udGVudD0iMTkwODQ2IiBuYW1lPSJvY3RvbHl0aWNzLWFjdG9yLWlkIiAvPjxtZXRhIGNvbnRlbnQ9IlJ1YnlMb3V2cmUiIG5hbWU9Im9jdG9seXRpY3MtYWN0b3ItbG9naW4iIC8+PG1ldGEgY29udGVudD0iYTEwNGQ4ZmEzNWI3OWNlYWFkNzU1YWVmNjQ1MGUyMjUwMTcxMWYyMzdiM2Q5YmU5YTBmMzc4MTAyMmZlNDJjYyIgbmFtZT0ib2N0b2x5dGljcy1hY3Rvci1oYXNoIiAvPgo8bWV0YSBjb250ZW50PSIvJmx0O3VzZXItbmFtZSZndDsvJmx0O3JlcG8tbmFtZSZndDsvYmxvYi9zaG93IiBkYXRhLXBqYXgtdHJhbnNpZW50PSJ0cnVlIiBuYW1lPSJhbmFseXRpY3MtbG9jYXRpb24iIC8+CgoKCiAgPG1ldGEgY2xhc3M9ImpzLWdhLXNldCIgbmFtZT0iZGltZW5zaW9uMSIgY29udGVudD0iTG9nZ2VkIEluIj4KCgoKICAgICAgICA8bWV0YSBuYW1lPSJob3N0bmFtZSIgY29udGVudD0iZ2l0aHViLmNvbSI+CiAgICA8bWV0YSBuYW1lPSJ1c2VyLWxvZ2luIiBjb250ZW50PSJSdWJ5TG91dnJlIj4KCiAgICAgICAgPG1ldGEgbmFtZT0iZXhwZWN0ZWQtaG9zdG5hbWUiIGNvbnRlbnQ9ImdpdGh1Yi5jb20iPgogICAgICA8bWV0YSBuYW1lPSJqcy1wcm94eS1zaXRlLWRldGVjdGlvbi1wYXlsb2FkIiBjb250ZW50PSJPREZtTmpZNVlqWmtPV1kyWW1JMU1EQmxZV0V6WXpSa09UbGlNRE5pTTJaak56WTJOekZpTldOaU1XVTVaR1U0WkdabE9XSmlZV1V4TXprME1tSXpaWHg3SW5KbGJXOTBaVjloWkdSeVpYTnpJam9pTVRJd0xqVXlMakkwTGpFMU1DSXNJbkpsY1hWbGMzUmZhV1FpT2lJM09ETTBNVGc1TmpveE1rUTBPakU1TlVJd01qbEVPalUzTnpBd1FqSXdJaXdpZEdsdFpYTjBZVzF3SWpveE5EWTJPVFl3TmpjeWZRPT0iPgoKCiAgICAgIDxsaW5rIHJlbD0ibWFzay1pY29uIiBocmVmPSJodHRwczovL2Fzc2V0cy1jZG4uZ2l0aHViLmNvbS9waW5uZWQtb2N0b2NhdC5zdmciIGNvbG9yPSIjNDA3OGMwIj4KICAgICAgPGxpbmsgcmVsPSJpY29uIiB0eXBlPSJpbWFnZS94LWljb24iIGhyZWY9Imh0dHBzOi8vYXNzZXRzLWNkbi5naXRodWIuY29tL2Zhdmljb24uaWNvIj4KCiAgICA8bWV0YSBuYW1lPSJodG1sLXNhZmUtbm9uY2UiIGNvbnRlbnQ9IjQ5MDdjYzA2ZWRiMzNmZTMzMWU2MmQwMmYzOTk3YWYzYjlmNTMwNWQiPgogICAgPG1ldGEgY29udGVudD0iMzYwMTU2NDJkMDQ5YjViNDY2NzBkZDM1ZGFhYjBiZTFjOTc1Yjk4NCIgbmFtZT0iZm9ybS1ub25jZSIgLz4KCiAgICA8bWV0YSBodHRwLWVxdWl2PSJ4LXBqYXgtdmVyc2lvbiIgY29udGVudD0iMDhiZDBlYjkzMGYyMzcyMmQ5NzBkZDdmNzdhNzFlYmEiPgogICAgCgogICAgICAKICA8bWV0YSBuYW1lPSJkZXNjcmlwdGlvbiIgY29udGVudD0id2ViLXN0eWxlIC0gd2Vi5YWs55So5qC35byP57uE5Lu25bqTIj4KICA8bWV0YSBuYW1lPSJnby1pbXBvcnQiIGNvbnRlbnQ9ImdpdGh1Yi5jb20vY3ljZ2l0L3dlYi1zdHlsZSBnaXQgaHR0cHM6Ly9naXRodWIuY29tL2N5Y2dpdC93ZWItc3R5bGUuZ2l0Ij4KCiAgPG1ldGEgY29udGVudD0iMTMxMTIwMTQiIG5hbWU9Im9jdG9seXRpY3MtZGltZW5zaW9uLXVzZXJfaWQiIC8+PG1ldGEgY29udGVudD0iY3ljZ2l0IiBuYW1lPSJvY3RvbHl0aWNzLWRpbWVuc2lvbi11c2VyX2xvZ2luIiAvPjxtZXRhIGNvbnRlbnQ9IjU5NzI1MTI1IiBuYW1lPSJvY3RvbHl0aWNzLWRpbWVuc2lvbi1yZXBvc2l0b3J5X2lkIiAvPjxtZXRhIGNvbnRlbnQ9ImN5Y2dpdC93ZWItc3R5bGUiIG5hbWU9Im9jdG9seXRpY3MtZGltZW5zaW9uLXJlcG9zaXRvcnlfbndvIiAvPjxtZXRhIGNvbnRlbnQ9InRydWUiIG5hbWU9Im9jdG9seXRpY3MtZGltZW5zaW9uLXJlcG9zaXRvcnlfcHVibGljIiAvPjxtZXRhIGNvbnRlbnQ9ImZhbHNlIiBuYW1lPSJvY3RvbHl0aWNzLWRpbWVuc2lvbi1yZXBvc2l0b3J5X2lzX2ZvcmsiIC8+PG1ldGEgY29udGVudD0iNTk3MjUxMjUiIG5hbWU9Im9jdG9seXRpY3MtZGltZW5zaW9uLXJlcG9zaXRvcnlfbmV0d29ya19yb290X2lkIiAvPjxtZXRhIGNvbnRlbnQ9ImN5Y2dpdC93ZWItc3R5bGUiIG5hbWU9Im9jdG9seXRpY3MtZGltZW5zaW9uLXJlcG9zaXRvcnlfbmV0d29ya19yb290X253byIgLz4KICA8bGluayBocmVmPSJodHRwczovL2dpdGh1Yi5jb20vY3ljZ2l0L3dlYi1zdHlsZS9jb21taXRzL21hc3Rlci5hdG9tIiByZWw9ImFsdGVybmF0ZSIgdGl0bGU9IlJlY2VudCBDb21taXRzIHRvIHdlYi1zdHlsZTptYXN0ZXIiIHR5cGU9ImFwcGxpY2F0aW9uL2F0b20reG1sIj4KCgogICAgICA8bGluayByZWw9ImNhbm9uaWNhbCIgaHJlZj0iaHR0cHM6Ly9naXRodWIuY29tL2N5Y2dpdC93ZWItc3R5bGUvYmxvYi9tYXN0ZXIvc3JjL2ZvbnRzL2ljb25mb250LnR0ZiIgZGF0YS1wamF4LXRyYW5zaWVudD4KICA8L2hlYWQ+CgoKICA8Ym9keSBjbGFzcz0ibG9nZ2VkLWluICAgZW52LXByb2R1Y3Rpb24gbWFjaW50b3NoIHZpcy1wdWJsaWMgcGFnZS1ibG9iIj4KICAgIDxkaXYgaWQ9ImpzLXBqYXgtbG9hZGVyLWJhciIgY2xhc3M9InBqYXgtbG9hZGVyLWJhciI+PC9kaXY+CiAgICA8YSBocmVmPSIjc3RhcnQtb2YtY29udGVudCIgdGFiaW5kZXg9IjEiIGNsYXNzPSJhY2Nlc3NpYmlsaXR5LWFpZCBqcy1za2lwLXRvLWNvbnRlbnQiPlNraXAgdG8gY29udGVudDwvYT4KCiAgICAKICAgIAogICAgCgoKCiAgICAgICAgPGRpdiBjbGFzcz0iaGVhZGVyIGhlYWRlci1sb2dnZWQtaW4gdHJ1ZSIgcm9sZT0iYmFubmVyIj4KICA8ZGl2IGNsYXNzPSJjb250YWluZXIgY2xlYXJmaXgiPgoKICAgIDxhIGNsYXNzPSJoZWFkZXItbG9nby1pbnZlcnRvY2F0IiBocmVmPSJodHRwczovL2dpdGh1Yi5jb20vIiBkYXRhLWhvdGtleT0iZyBkIiBhcmlhLWxhYmVsPSJIb21lcGFnZSIgZGF0YS1nYS1jbGljaz0iSGVhZGVyLCBnbyB0byBkYXNoYm9hcmQsIGljb246bG9nbyI+CiAgPHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1tYXJrLWdpdGh1YiIgaGVpZ2h0PSIyOCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTYgMTYiIHdpZHRoPSIyOCI+PHBhdGggZD0iTTggMEMzLjU4IDAgMCAzLjU4IDAgOGMwIDMuNTQgMi4yOSA2LjUzIDUuNDcgNy41OS40LjA3LjU1LS4xNy41NS0uMzggMC0uMTktLjAxLS44Mi0uMDEtMS40OS0yLjAxLjM3LTIuNTMtLjQ5LTIuNjktLjk0LS4wOS0uMjMtLjQ4LS45NC0uODItMS4xMy0uMjgtLjE1LS42OC0uNTItLjAxLS41My42My0uMDEgMS4wOC41OCAxLjIzLjgyLjcyIDEuMjEgMS44Ny44NyAyLjMzLjY2LjA3LS41Mi4yOC0uODcuNTEtMS4wNy0xLjc4LS4yLTMuNjQtLjg5LTMuNjQtMy45NSAwLS44Ny4zMS0xLjU5LjgyLTIuMTUtLjA4LS4yLS4zNi0xLjAyLjA4LTIuMTIgMCAwIC42Ny0uMjEgMi4yLjgyLjY0LS4xOCAxLjMyLS4yNyAyLS4yNy42OCAwIDEuMzYuMDkgMiAuMjcgMS41My0xLjA0IDIuMi0uODIgMi4yLS44Mi40NCAxLjEuMTYgMS45Mi4wOCAyLjEyLjUxLjU2LjgyIDEuMjcuODIgMi4xNSAwIDMuMDctMS44NyAzLjc1LTMuNjUgMy45NS4yOS4yNS41NC43My41NCAxLjQ4IDAgMS4wNy0uMDEgMS45My0uMDEgMi4yIDAgLjIxLjE1LjQ2LjU1LjM4QTguMDEzIDguMDEzIDAgMCAwIDE2IDhjMC00LjQyLTMuNTgtOC04LTh6Ij48L3BhdGg+PC9zdmc+CjwvYT4KCgogICAgICAgIDxkaXYgY2xhc3M9ImhlYWRlci1zZWFyY2ggc2NvcGVkLXNlYXJjaCBzaXRlLXNjb3BlZC1zZWFyY2gganMtc2l0ZS1zZWFyY2giIHJvbGU9InNlYXJjaCI+CiAgPCEtLSA8L3RleHRhcmVhPiAtLT48IS0tICciYCAtLT48Zm9ybSBhY2NlcHQtY2hhcnNldD0iVVRGLTgiIGFjdGlvbj0iL2N5Y2dpdC93ZWItc3R5bGUvc2VhcmNoIiBjbGFzcz0ianMtc2l0ZS1zZWFyY2gtZm9ybSIgZGF0YS1zY29wZWQtc2VhcmNoLXVybD0iL2N5Y2dpdC93ZWItc3R5bGUvc2VhcmNoIiBkYXRhLXVuc2NvcGVkLXNlYXJjaC11cmw9Ii9zZWFyY2giIG1ldGhvZD0iZ2V0Ij48ZGl2IHN0eWxlPSJtYXJnaW46MDtwYWRkaW5nOjA7ZGlzcGxheTppbmxpbmUiPjxpbnB1dCBuYW1lPSJ1dGY4IiB0eXBlPSJoaWRkZW4iIHZhbHVlPSImI3gyNzEzOyIgLz48L2Rpdj4KICAgIDxsYWJlbCBjbGFzcz0iZm9ybS1jb250cm9sIGhlYWRlci1zZWFyY2gtd3JhcHBlciBqcy1jaHJvbWVsZXNzLWlucHV0LWNvbnRhaW5lciI+CiAgICAgIDxkaXYgY2xhc3M9ImhlYWRlci1zZWFyY2gtc2NvcGUiPlRoaXMgcmVwb3NpdG9yeTwvZGl2PgogICAgICA8aW5wdXQgdHlwZT0idGV4dCIKICAgICAgICBjbGFzcz0iZm9ybS1jb250cm9sIGhlYWRlci1zZWFyY2gtaW5wdXQganMtc2l0ZS1zZWFyY2gtZm9jdXMganMtc2l0ZS1zZWFyY2gtZmllbGQgaXMtY2xlYXJhYmxlIgogICAgICAgIGRhdGEtaG90a2V5PSJzIgogICAgICAgIG5hbWU9InEiCiAgICAgICAgcGxhY2Vob2xkZXI9IlNlYXJjaCIKICAgICAgICBhcmlhLWxhYmVsPSJTZWFyY2ggdGhpcyByZXBvc2l0b3J5IgogICAgICAgIGRhdGEtdW5zY29wZWQtcGxhY2Vob2xkZXI9IlNlYXJjaCBHaXRIdWIiCiAgICAgICAgZGF0YS1zY29wZWQtcGxhY2Vob2xkZXI9IlNlYXJjaCIKICAgICAgICB0YWJpbmRleD0iMSIKICAgICAgICBhdXRvY2FwaXRhbGl6ZT0ib2ZmIj4KICAgIDwvbGFiZWw+CjwvZm9ybT48L2Rpdj4KCgogICAgICA8dWwgY2xhc3M9ImhlYWRlci1uYXYgbGVmdCIgcm9sZT0ibmF2aWdhdGlvbiI+CiAgICAgICAgPGxpIGNsYXNzPSJoZWFkZXItbmF2LWl0ZW0iPgogICAgICAgICAgPGEgaHJlZj0iL3B1bGxzIiBjbGFzcz0ianMtc2VsZWN0ZWQtbmF2aWdhdGlvbi1pdGVtIGhlYWRlci1uYXYtbGluayIgZGF0YS1nYS1jbGljaz0iSGVhZGVyLCBjbGljaywgTmF2IG1lbnUgLSBpdGVtOnB1bGxzIGNvbnRleHQ6dXNlciIgZGF0YS1ob3RrZXk9ImcgcCIgZGF0YS1zZWxlY3RlZC1saW5rcz0iL3B1bGxzIC9wdWxscy9hc3NpZ25lZCAvcHVsbHMvbWVudGlvbmVkIC9wdWxscyI+CiAgICAgICAgICAgIFB1bGwgcmVxdWVzdHMKPC9hPiAgICAgICAgPC9saT4KICAgICAgICA8bGkgY2xhc3M9ImhlYWRlci1uYXYtaXRlbSI+CiAgICAgICAgICA8YSBocmVmPSIvaXNzdWVzIiBjbGFzcz0ianMtc2VsZWN0ZWQtbmF2aWdhdGlvbi1pdGVtIGhlYWRlci1uYXYtbGluayIgZGF0YS1nYS1jbGljaz0iSGVhZGVyLCBjbGljaywgTmF2IG1lbnUgLSBpdGVtOmlzc3VlcyBjb250ZXh0OnVzZXIiIGRhdGEtaG90a2V5PSJnIGkiIGRhdGEtc2VsZWN0ZWQtbGlua3M9Ii9pc3N1ZXMgL2lzc3Vlcy9hc3NpZ25lZCAvaXNzdWVzL21lbnRpb25lZCAvaXNzdWVzIj4KICAgICAgICAgICAgSXNzdWVzCjwvYT4gICAgICAgIDwvbGk+CiAgICAgICAgICA8bGkgY2xhc3M9ImhlYWRlci1uYXYtaXRlbSI+CiAgICAgICAgICAgIDxhIGNsYXNzPSJoZWFkZXItbmF2LWxpbmsiIGhyZWY9Imh0dHBzOi8vZ2lzdC5naXRodWIuY29tLyIgZGF0YS1nYS1jbGljaz0iSGVhZGVyLCBnbyB0byBnaXN0LCB0ZXh0Omdpc3QiPkdpc3Q8L2E+CiAgICAgICAgICA8L2xpPgogICAgICA8L3VsPgoKICAgIAo8dWwgY2xhc3M9ImhlYWRlci1uYXYgdXNlci1uYXYgcmlnaHQiIGlkPSJ1c2VyLWxpbmtzIj4KICA8bGkgY2xhc3M9ImhlYWRlci1uYXYtaXRlbSI+CiAgICAKICAgIDxhIGhyZWY9Ii9ub3RpZmljYXRpb25zIiBhcmlhLWxhYmVsPSJZb3UgaGF2ZSBubyB1bnJlYWQgbm90aWZpY2F0aW9ucyIgY2xhc3M9ImhlYWRlci1uYXYtbGluayBub3RpZmljYXRpb24taW5kaWNhdG9yIHRvb2x0aXBwZWQgdG9vbHRpcHBlZC1zIGpzLXNvY2tldC1jaGFubmVsIGpzLW5vdGlmaWNhdGlvbi1pbmRpY2F0b3IiIGRhdGEtY2hhbm5lbD0idGVuYW50OjE6bm90aWZpY2F0aW9uLWNoYW5nZWQ6MTkwODQ2IiBkYXRhLWdhLWNsaWNrPSJIZWFkZXIsIGdvIHRvIG5vdGlmaWNhdGlvbnMsIGljb246cmVhZCIgZGF0YS1ob3RrZXk9ImcgbiI+CiAgICAgICAgPHNwYW4gY2xhc3M9Im1haWwtc3RhdHVzICI+PC9zcGFuPgogICAgICAgIDxzdmcgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJvY3RpY29uIG9jdGljb24tYmVsbCIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTQgMTYiIHdpZHRoPSIxNCI+PHBhdGggZD0iTTE0IDEydjFIMHYtMWwuNzMtLjU4Yy43Ny0uNzcuODEtMi41NSAxLjE5LTQuNDJDMi42OSAzLjIzIDYgMiA2IDJjMC0uNTUuNDUtMSAxLTFzMSAuNDUgMSAxYzAgMCAzLjM5IDEuMjMgNC4xNiA1IC4zOCAxLjg4LjQyIDMuNjYgMS4xOSA0LjQybC42Ni41OEgxNHptLTcgNGMxLjExIDAgMi0uODkgMi0ySDVjMCAxLjExLjg5IDIgMiAyeiI+PC9wYXRoPjwvc3ZnPgo8L2E+CiAgPC9saT4KCiAgPGxpIGNsYXNzPSJoZWFkZXItbmF2LWl0ZW0gZHJvcGRvd24ganMtbWVudS1jb250YWluZXIiPgogICAgPGEgY2xhc3M9ImhlYWRlci1uYXYtbGluayB0b29sdGlwcGVkIHRvb2x0aXBwZWQtcyBqcy1tZW51LXRhcmdldCIgaHJlZj0iL25ldyIKICAgICAgIGFyaWEtbGFiZWw9IkNyZWF0ZSBuZXfigKYiCiAgICAgICBkYXRhLWdhLWNsaWNrPSJIZWFkZXIsIGNyZWF0ZSBuZXcsIGljb246YWRkIj4KICAgICAgPHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1wbHVzIGxlZnQiIGhlaWdodD0iMTYiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEyIDE2IiB3aWR0aD0iMTIiPjxwYXRoIGQ9Ik0xMiA5SDd2NUg1VjlIMFY3aDVWMmgydjVoNXoiPjwvcGF0aD48L3N2Zz4KICAgICAgPHNwYW4gY2xhc3M9ImRyb3Bkb3duLWNhcmV0Ij48L3NwYW4+CiAgICA8L2E+CgogICAgPGRpdiBjbGFzcz0iZHJvcGRvd24tbWVudS1jb250ZW50IGpzLW1lbnUtY29udGVudCI+CiAgICAgIDx1bCBjbGFzcz0iZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXN3Ij4KICAgICAgICAKPGEgY2xhc3M9ImRyb3Bkb3duLWl0ZW0iIGhyZWY9Ii9uZXciIGRhdGEtZ2EtY2xpY2s9IkhlYWRlciwgY3JlYXRlIG5ldyByZXBvc2l0b3J5Ij4KICBOZXcgcmVwb3NpdG9yeQo8L2E+CgogIDxhIGNsYXNzPSJkcm9wZG93bi1pdGVtIiBocmVmPSIvbmV3L2ltcG9ydCIgZGF0YS1nYS1jbGljaz0iSGVhZGVyLCBpbXBvcnQgYSByZXBvc2l0b3J5Ij4KICAgIEltcG9ydCByZXBvc2l0b3J5CiAgPC9hPgoKCiAgPGEgY2xhc3M9ImRyb3Bkb3duLWl0ZW0iIGhyZWY9Ii9vcmdhbml6YXRpb25zL25ldyIgZGF0YS1nYS1jbGljaz0iSGVhZGVyLCBjcmVhdGUgbmV3IG9yZ2FuaXphdGlvbiI+CiAgICBOZXcgb3JnYW5pemF0aW9uCiAgPC9hPgoKCgogIDxkaXYgY2xhc3M9ImRyb3Bkb3duLWRpdmlkZXIiPjwvZGl2PgogIDxkaXYgY2xhc3M9ImRyb3Bkb3duLWhlYWRlciI+CiAgICA8c3BhbiB0aXRsZT0iY3ljZ2l0L3dlYi1zdHlsZSI+VGhpcyByZXBvc2l0b3J5PC9zcGFuPgogIDwvZGl2PgogICAgPGEgY2xhc3M9ImRyb3Bkb3duLWl0ZW0iIGhyZWY9Ii9jeWNnaXQvd2ViLXN0eWxlL2lzc3Vlcy9uZXciIGRhdGEtZ2EtY2xpY2s9IkhlYWRlciwgY3JlYXRlIG5ldyBpc3N1ZSI+CiAgICAgIE5ldyBpc3N1ZQogICAgPC9hPgoKICAgICAgPC91bD4KICAgIDwvZGl2PgogIDwvbGk+CgogIDxsaSBjbGFzcz0iaGVhZGVyLW5hdi1pdGVtIGRyb3Bkb3duIGpzLW1lbnUtY29udGFpbmVyIj4KICAgIDxhIGNsYXNzPSJoZWFkZXItbmF2LWxpbmsgbmFtZSB0b29sdGlwcGVkIHRvb2x0aXBwZWQtc3cganMtbWVudS10YXJnZXQiIGhyZWY9Ii9SdWJ5TG91dnJlIgogICAgICAgYXJpYS1sYWJlbD0iVmlldyBwcm9maWxlIGFuZCBtb3JlIgogICAgICAgZGF0YS1nYS1jbGljaz0iSGVhZGVyLCBzaG93IG1lbnUsIGljb246YXZhdGFyIj4KICAgICAgPGltZyBhbHQ9IkBSdWJ5TG91dnJlIiBjbGFzcz0iYXZhdGFyIiBoZWlnaHQ9IjIwIiBzcmM9Imh0dHBzOi8vYXZhdGFyczMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvMTkwODQ2P3Y9MyZhbXA7cz00MCIgd2lkdGg9IjIwIiAvPgogICAgICA8c3BhbiBjbGFzcz0iZHJvcGRvd24tY2FyZXQiPjwvc3Bhbj4KICAgIDwvYT4KCiAgICA8ZGl2IGNsYXNzPSJkcm9wZG93bi1tZW51LWNvbnRlbnQganMtbWVudS1jb250ZW50Ij4KICAgICAgPGRpdiBjbGFzcz0iZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXN3Ij4KICAgICAgICA8ZGl2IGNsYXNzPSJkcm9wZG93bi1oZWFkZXIgaGVhZGVyLW5hdi1jdXJyZW50LXVzZXIgY3NzLXRydW5jYXRlIj4KICAgICAgICAgIFNpZ25lZCBpbiBhcyA8c3Ryb25nIGNsYXNzPSJjc3MtdHJ1bmNhdGUtdGFyZ2V0Ij5SdWJ5TG91dnJlPC9zdHJvbmc+CiAgICAgICAgPC9kaXY+CgogICAgICAgIDxkaXYgY2xhc3M9ImRyb3Bkb3duLWRpdmlkZXIiPjwvZGl2PgoKICAgICAgICA8YSBjbGFzcz0iZHJvcGRvd24taXRlbSIgaHJlZj0iL1J1YnlMb3V2cmUiIGRhdGEtZ2EtY2xpY2s9IkhlYWRlciwgZ28gdG8gcHJvZmlsZSwgdGV4dDp5b3VyIHByb2ZpbGUiPgogICAgICAgICAgWW91ciBwcm9maWxlCiAgICAgICAgPC9hPgogICAgICAgIDxhIGNsYXNzPSJkcm9wZG93bi1pdGVtIiBocmVmPSIvc3RhcnMiIGRhdGEtZ2EtY2xpY2s9IkhlYWRlciwgZ28gdG8gc3RhcnJlZCByZXBvcywgdGV4dDp5b3VyIHN0YXJzIj4KICAgICAgICAgIFlvdXIgc3RhcnMKICAgICAgICA8L2E+CiAgICAgICAgPGEgY2xhc3M9ImRyb3Bkb3duLWl0ZW0iIGhyZWY9Ii9leHBsb3JlIiBkYXRhLWdhLWNsaWNrPSJIZWFkZXIsIGdvIHRvIGV4cGxvcmUsIHRleHQ6ZXhwbG9yZSI+CiAgICAgICAgICBFeHBsb3JlCiAgICAgICAgPC9hPgogICAgICAgICAgPGEgY2xhc3M9ImRyb3Bkb3duLWl0ZW0iIGhyZWY9Ii9pbnRlZ3JhdGlvbnMiIGRhdGEtZ2EtY2xpY2s9IkhlYWRlciwgZ28gdG8gaW50ZWdyYXRpb25zLCB0ZXh0OmludGVncmF0aW9ucyI+CiAgICAgICAgICAgIEludGVncmF0aW9ucwogICAgICAgICAgPC9hPgogICAgICAgIDxhIGNsYXNzPSJkcm9wZG93bi1pdGVtIiBocmVmPSJodHRwczovL2hlbHAuZ2l0aHViLmNvbSIgZGF0YS1nYS1jbGljaz0iSGVhZGVyLCBnbyB0byBoZWxwLCB0ZXh0OmhlbHAiPgogICAgICAgICAgSGVscAogICAgICAgIDwvYT4KCgogICAgICAgIDxkaXYgY2xhc3M9ImRyb3Bkb3duLWRpdmlkZXIiPjwvZGl2PgoKICAgICAgICA8YSBjbGFzcz0iZHJvcGRvd24taXRlbSIgaHJlZj0iL3NldHRpbmdzL3Byb2ZpbGUiIGRhdGEtZ2EtY2xpY2s9IkhlYWRlciwgZ28gdG8gc2V0dGluZ3MsIGljb246c2V0dGluZ3MiPgogICAgICAgICAgU2V0dGluZ3MKICAgICAgICA8L2E+CgogICAgICAgIDwhLS0gPC90ZXh0YXJlYT4gLS0+PCEtLSAnImAgLS0+PGZvcm0gYWNjZXB0LWNoYXJzZXQ9IlVURi04IiBhY3Rpb249Ii9sb2dvdXQiIGNsYXNzPSJsb2dvdXQtZm9ybSIgZGF0YS1mb3JtLW5vbmNlPSIzNjAxNTY0MmQwNDliNWI0NjY3MGRkMzVkYWFiMGJlMWM5NzViOTg0IiBtZXRob2Q9InBvc3QiPjxkaXYgc3R5bGU9Im1hcmdpbjowO3BhZGRpbmc6MDtkaXNwbGF5OmlubGluZSI+PGlucHV0IG5hbWU9InV0ZjgiIHR5cGU9ImhpZGRlbiIgdmFsdWU9IiYjeDI3MTM7IiAvPjxpbnB1dCBuYW1lPSJhdXRoZW50aWNpdHlfdG9rZW4iIHR5cGU9ImhpZGRlbiIgdmFsdWU9ImpONXNRdkk5MmJvc3ZSRFo0ZWh3RE9vS1ZEdkp1WDI4dWlTUXh6bnpFOFZYYUpWTEZwbkpXYi96VHM2U0w2YWw1ZGp2VHJWd2N2QXB5UlRWWjFMc2J3PT0iIC8+PC9kaXY+CiAgICAgICAgICA8YnV0dG9uIGNsYXNzPSJkcm9wZG93bi1pdGVtIGRyb3Bkb3duLXNpZ25vdXQiIGRhdGEtZ2EtY2xpY2s9IkhlYWRlciwgc2lnbiBvdXQsIGljb246bG9nb3V0Ij4KICAgICAgICAgICAgU2lnbiBvdXQKICAgICAgICAgIDwvYnV0dG9uPgo8L2Zvcm0+ICAgICAgPC9kaXY+CiAgICA8L2Rpdj4KICA8L2xpPgo8L3VsPgoKCiAgICAKICA8L2Rpdj4KPC9kaXY+CgoKICAgICAgCgoKICAgIDxkaXYgaWQ9InN0YXJ0LW9mLWNvbnRlbnQiIGNsYXNzPSJhY2Nlc3NpYmlsaXR5LWFpZCI+PC9kaXY+CgogICAgICA8ZGl2IGlkPSJqcy1mbGFzaC1jb250YWluZXIiPgo8L2Rpdj4KCgogICAgPGRpdiByb2xlPSJtYWluIiBjbGFzcz0ibWFpbi1jb250ZW50Ij4KICAgICAgICA8ZGl2IGl0ZW1zY29wZSBpdGVtdHlwZT0iaHR0cDovL3NjaGVtYS5vcmcvU29mdHdhcmVTb3VyY2VDb2RlIj4KICAgIDxkaXYgaWQ9ImpzLXJlcG8tcGpheC1jb250YWluZXIiIGRhdGEtcGpheC1jb250YWluZXI+CiAgICAgIAo8ZGl2IGNsYXNzPSJwYWdlaGVhZCByZXBvaGVhZCBpbnN0YXBhcGVyX2lnbm9yZSByZWFkYWJpbGl0eS1tZW51IGV4cGVyaW1lbnQtcmVwby1uYXYiPgogIDxkaXYgY2xhc3M9ImNvbnRhaW5lciByZXBvaGVhZC1kZXRhaWxzLWNvbnRhaW5lciI+CgogICAgCgo8dWwgY2xhc3M9InBhZ2VoZWFkLWFjdGlvbnMiPgoKICA8bGk+CiAgICAgICAgPCEtLSA8L3RleHRhcmVhPiAtLT48IS0tICciYCAtLT48Zm9ybSBhY2NlcHQtY2hhcnNldD0iVVRGLTgiIGFjdGlvbj0iL25vdGlmaWNhdGlvbnMvc3Vic2NyaWJlIiBjbGFzcz0ianMtc29jaWFsLWNvbnRhaW5lciIgZGF0YS1hdXRvc3VibWl0PSJ0cnVlIiBkYXRhLWZvcm0tbm9uY2U9IjM2MDE1NjQyZDA0OWI1YjQ2NjcwZGQzNWRhYWIwYmUxYzk3NWI5ODQiIGRhdGEtcmVtb3RlPSJ0cnVlIiBtZXRob2Q9InBvc3QiPjxkaXYgc3R5bGU9Im1hcmdpbjowO3BhZGRpbmc6MDtkaXNwbGF5OmlubGluZSI+PGlucHV0IG5hbWU9InV0ZjgiIHR5cGU9ImhpZGRlbiIgdmFsdWU9IiYjeDI3MTM7IiAvPjxpbnB1dCBuYW1lPSJhdXRoZW50aWNpdHlfdG9rZW4iIHR5cGU9ImhpZGRlbiIgdmFsdWU9IlZjQjg0Undyai9aQW1SS25mMlRkbUpSNmNILzJNNXdzeklKcmI1Q21JSEZScitRek5Oa3J5YXZYYVE1S0hQZkY4UmpVNklsRjJFYVJPZ0VreUh1VkZRPT0iIC8+PC9kaXY+ICAgICAgPGlucHV0IGNsYXNzPSJmb3JtLWNvbnRyb2wiIGlkPSJyZXBvc2l0b3J5X2lkIiBuYW1lPSJyZXBvc2l0b3J5X2lkIiB0eXBlPSJoaWRkZW4iIHZhbHVlPSI1OTcyNTEyNSIgLz4KCiAgICAgICAgPGRpdiBjbGFzcz0ic2VsZWN0LW1lbnUganMtbWVudS1jb250YWluZXIganMtc2VsZWN0LW1lbnUiPgogICAgICAgICAgPGEgaHJlZj0iL2N5Y2dpdC93ZWItc3R5bGUvc3Vic2NyaXB0aW9uIgogICAgICAgICAgICBjbGFzcz0iYnRuIGJ0bi1zbSBidG4td2l0aC1jb3VudCBzZWxlY3QtbWVudS1idXR0b24ganMtbWVudS10YXJnZXQiIHJvbGU9ImJ1dHRvbiIgdGFiaW5kZXg9IjAiIGFyaWEtaGFzcG9wdXA9InRydWUiCiAgICAgICAgICAgIGRhdGEtZ2EtY2xpY2s9IlJlcG9zaXRvcnksIGNsaWNrIFdhdGNoIHNldHRpbmdzLCBhY3Rpb246YmxvYiNzaG93Ij4KICAgICAgICAgICAgPHNwYW4gY2xhc3M9ImpzLXNlbGVjdC1idXR0b24iPgogICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJvY3RpY29uIG9jdGljb24tZXllIiBoZWlnaHQ9IjE2IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2Ij48cGF0aCBkPSJNOC4wNiAyQzMgMiAwIDggMCA4czMgNiA4LjA2IDZDMTMgMTQgMTYgOCAxNiA4cy0zLTYtNy45NC02ek04IDEyYy0yLjIgMC00LTEuNzgtNC00IDAtMi4yIDEuOC00IDQtNCAyLjIyIDAgNCAxLjggNCA0IDAgMi4yMi0xLjc4IDQtNCA0em0yLTRjMCAxLjExLS44OSAyLTIgMi0xLjExIDAtMi0uODktMi0yIDAtMS4xMS44OS0yIDItMiAxLjExIDAgMiAuODkgMiAyeiI+PC9wYXRoPjwvc3ZnPgogICAgICAgICAgICAgIFdhdGNoCiAgICAgICAgICAgIDwvc3Bhbj4KICAgICAgICAgIDwvYT4KICAgICAgICAgIDxhIGNsYXNzPSJzb2NpYWwtY291bnQganMtc29jaWFsLWNvdW50IiBocmVmPSIvY3ljZ2l0L3dlYi1zdHlsZS93YXRjaGVycyI+CiAgICAgICAgICAgIDEKICAgICAgICAgIDwvYT4KCiAgICAgICAgPGRpdiBjbGFzcz0ic2VsZWN0LW1lbnUtbW9kYWwtaG9sZGVyIj4KICAgICAgICAgIDxkaXYgY2xhc3M9InNlbGVjdC1tZW51LW1vZGFsIHN1YnNjcmlwdGlvbi1tZW51LW1vZGFsIGpzLW1lbnUtY29udGVudCIgYXJpYS1oaWRkZW49InRydWUiPgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJzZWxlY3QtbWVudS1oZWFkZXIganMtbmF2aWdhdGlvbi1lbmFibGUiIHRhYmluZGV4PSItMSI+CiAgICAgICAgICAgICAgPHN2ZyBhcmlhLWxhYmVsPSJDbG9zZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi14IGpzLW1lbnUtY2xvc2UiIGhlaWdodD0iMTYiIHJvbGU9ImltZyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTIgMTYiIHdpZHRoPSIxMiI+PHBhdGggZD0iTTcuNDggOGwzLjc1IDMuNzUtMS40OCAxLjQ4TDYgOS40OGwtMy43NSAzLjc1LTEuNDgtMS40OEw0LjUyIDggLjc3IDQuMjVsMS40OC0xLjQ4TDYgNi41MmwzLjc1LTMuNzUgMS40OCAxLjQ4eiI+PC9wYXRoPjwvc3ZnPgogICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJzZWxlY3QtbWVudS10aXRsZSI+Tm90aWZpY2F0aW9uczwvc3Bhbj4KICAgICAgICAgICAgPC9kaXY+CgogICAgICAgICAgICAgIDxkaXYgY2xhc3M9InNlbGVjdC1tZW51LWxpc3QganMtbmF2aWdhdGlvbi1jb250YWluZXIiIHJvbGU9Im1lbnUiPgoKICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9InNlbGVjdC1tZW51LWl0ZW0ganMtbmF2aWdhdGlvbi1pdGVtIHNlbGVjdGVkIiByb2xlPSJtZW51aXRlbSIgdGFiaW5kZXg9IjAiPgogICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzcz0ib2N0aWNvbiBvY3RpY29uLWNoZWNrIHNlbGVjdC1tZW51LWl0ZW0taWNvbiIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTIgMTYiIHdpZHRoPSIxMiI+PHBhdGggZD0iTTEyIDVsLTggOC00LTQgMS41LTEuNUw0IDEwbDYuNS02LjV6Ij48L3BhdGg+PC9zdmc+CiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9InNlbGVjdC1tZW51LWl0ZW0tdGV4dCI+CiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNoZWNrZWQ9ImNoZWNrZWQiIGlkPSJkb19pbmNsdWRlZCIgbmFtZT0iZG8iIHR5cGU9InJhZGlvIiB2YWx1ZT0iaW5jbHVkZWQiIC8+CiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9InNlbGVjdC1tZW51LWl0ZW0taGVhZGluZyI+Tm90IHdhdGNoaW5nPC9zcGFuPgogICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJkZXNjcmlwdGlvbiI+QmUgbm90aWZpZWQgd2hlbiBwYXJ0aWNpcGF0aW5nIG9yIEBtZW50aW9uZWQuPC9zcGFuPgogICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJqcy1zZWxlY3QtYnV0dG9uLXRleHQgaGlkZGVuLXNlbGVjdC1idXR0b24tdGV4dCI+CiAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzcz0ib2N0aWNvbiBvY3RpY29uLWV5ZSIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiI+PHBhdGggZD0iTTguMDYgMkMzIDIgMCA4IDAgOHMzIDYgOC4wNiA2QzEzIDE0IDE2IDggMTYgOHMtMy02LTcuOTQtNnpNOCAxMmMtMi4yIDAtNC0xLjc4LTQtNCAwLTIuMiAxLjgtNCA0LTQgMi4yMiAwIDQgMS44IDQgNCAwIDIuMjItMS43OCA0LTQgNHptMi00YzAgMS4xMS0uODkgMi0yIDItMS4xMSAwLTItLjg5LTItMiAwLTEuMTEuODktMiAyLTIgMS4xMSAwIDIgLjg5IDIgMnoiPjwvcGF0aD48L3N2Zz4KICAgICAgICAgICAgICAgICAgICAgIFdhdGNoCiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPgogICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgIDwvZGl2PgoKICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9InNlbGVjdC1tZW51LWl0ZW0ganMtbmF2aWdhdGlvbi1pdGVtICIgcm9sZT0ibWVudWl0ZW0iIHRhYmluZGV4PSIwIj4KICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1jaGVjayBzZWxlY3QtbWVudS1pdGVtLWljb24iIGhlaWdodD0iMTYiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEyIDE2IiB3aWR0aD0iMTIiPjxwYXRoIGQ9Ik0xMiA1bC04IDgtNC00IDEuNS0xLjVMNCAxMGw2LjUtNi41eiI+PC9wYXRoPjwvc3ZnPgogICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJzZWxlY3QtbWVudS1pdGVtLXRleHQiPgogICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD0iZG9fc3Vic2NyaWJlZCIgbmFtZT0iZG8iIHR5cGU9InJhZGlvIiB2YWx1ZT0ic3Vic2NyaWJlZCIgLz4KICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ic2VsZWN0LW1lbnUtaXRlbS1oZWFkaW5nIj5XYXRjaGluZzwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0iZGVzY3JpcHRpb24iPkJlIG5vdGlmaWVkIG9mIGFsbCBjb252ZXJzYXRpb25zLjwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ianMtc2VsZWN0LWJ1dHRvbi10ZXh0IGhpZGRlbi1zZWxlY3QtYnV0dG9uLXRleHQiPgogICAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1leWUiIGhlaWdodD0iMTYiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE2IDE2IiB3aWR0aD0iMTYiPjxwYXRoIGQ9Ik04LjA2IDJDMyAyIDAgOCAwIDhzMyA2IDguMDYgNkMxMyAxNCAxNiA4IDE2IDhzLTMtNi03Ljk0LTZ6TTggMTJjLTIuMiAwLTQtMS43OC00LTQgMC0yLjIgMS44LTQgNC00IDIuMjIgMCA0IDEuOCA0IDQgMCAyLjIyLTEuNzggNC00IDR6bTItNGMwIDEuMTEtLjg5IDItMiAyLTEuMTEgMC0yLS44OS0yLTIgMC0xLjExLjg5LTIgMi0yIDEuMTEgMCAyIC44OSAyIDJ6Ij48L3BhdGg+PC9zdmc+CiAgICAgICAgICAgICAgICAgICAgICBVbndhdGNoCiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPgogICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgIDwvZGl2PgoKICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9InNlbGVjdC1tZW51LWl0ZW0ganMtbmF2aWdhdGlvbi1pdGVtICIgcm9sZT0ibWVudWl0ZW0iIHRhYmluZGV4PSIwIj4KICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1jaGVjayBzZWxlY3QtbWVudS1pdGVtLWljb24iIGhlaWdodD0iMTYiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEyIDE2IiB3aWR0aD0iMTIiPjxwYXRoIGQ9Ik0xMiA1bC04IDgtNC00IDEuNS0xLjVMNCAxMGw2LjUtNi41eiI+PC9wYXRoPjwvc3ZnPgogICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJzZWxlY3QtbWVudS1pdGVtLXRleHQiPgogICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD0iZG9faWdub3JlIiBuYW1lPSJkbyIgdHlwZT0icmFkaW8iIHZhbHVlPSJpZ25vcmUiIC8+CiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9InNlbGVjdC1tZW51LWl0ZW0taGVhZGluZyI+SWdub3Jpbmc8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9ImRlc2NyaXB0aW9uIj5OZXZlciBiZSBub3RpZmllZC48L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9ImpzLXNlbGVjdC1idXR0b24tdGV4dCBoaWRkZW4tc2VsZWN0LWJ1dHRvbi10ZXh0Ij4KICAgICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJvY3RpY29uIG9jdGljb24tbXV0ZSIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiI+PHBhdGggZD0iTTggMi44MXYxMC4zOGMwIC42Ny0uODEgMS0xLjI4LjUzTDMgMTBIMWMtLjU1IDAtMS0uNDUtMS0xVjdjMC0uNTUuNDUtMSAxLTFoMmwzLjcyLTMuNzJDNy4xOSAxLjgxIDggMi4xNCA4IDIuODF6bTcuNTMgMy4yMmwtMS4wNi0xLjA2LTEuOTcgMS45Ny0xLjk3LTEuOTctMS4wNiAxLjA2TDExLjQ0IDggOS40NyA5Ljk3bDEuMDYgMS4wNiAxLjk3LTEuOTcgMS45NyAxLjk3IDEuMDYtMS4wNkwxMy41NiA4bDEuOTctMS45N3oiPjwvcGF0aD48L3N2Zz4KICAgICAgICAgICAgICAgICAgICAgIFN0b3AgaWdub3JpbmcKICAgICAgICAgICAgICAgICAgICA8L3NwYW4+CiAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgPC9kaXY+CgogICAgICAgICAgICAgIDwvZGl2PgoKICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8L2Rpdj4KICAgICAgICA8L2Rpdj4KPC9mb3JtPgogIDwvbGk+CgogIDxsaT4KICAgIAogIDxkaXYgY2xhc3M9ImpzLXRvZ2dsZXItY29udGFpbmVyIGpzLXNvY2lhbC1jb250YWluZXIgc3RhcnJpbmctY29udGFpbmVyICI+CgogICAgPCEtLSA8L3RleHRhcmVhPiAtLT48IS0tICciYCAtLT48Zm9ybSBhY2NlcHQtY2hhcnNldD0iVVRGLTgiIGFjdGlvbj0iL2N5Y2dpdC93ZWItc3R5bGUvdW5zdGFyIiBjbGFzcz0ic3RhcnJlZCIgZGF0YS1mb3JtLW5vbmNlPSIzNjAxNTY0MmQwNDliNWI0NjY3MGRkMzVkYWFiMGJlMWM5NzViOTg0IiBkYXRhLXJlbW90ZT0idHJ1ZSIgbWV0aG9kPSJwb3N0Ij48ZGl2IHN0eWxlPSJtYXJnaW46MDtwYWRkaW5nOjA7ZGlzcGxheTppbmxpbmUiPjxpbnB1dCBuYW1lPSJ1dGY4IiB0eXBlPSJoaWRkZW4iIHZhbHVlPSImI3gyNzEzOyIgLz48aW5wdXQgbmFtZT0iYXV0aGVudGljaXR5X3Rva2VuIiB0eXBlPSJoaWRkZW4iIHZhbHVlPSJabkpaeTNPM0lpMzJZNW1YdGNMcU8wR1k0enJHSVBKOHg5MHZwVkVmL2ZxcUpKT3FXdkRWdGg0S3pIRTljRzN3aXBxUzg3bWoyWWtud2FoRTNWMStMZz09IiAvPjwvZGl2PgogICAgICA8YnV0dG9uCiAgICAgICAgY2xhc3M9ImJ0biBidG4tc20gYnRuLXdpdGgtY291bnQganMtdG9nZ2xlci10YXJnZXQiCiAgICAgICAgYXJpYS1sYWJlbD0iVW5zdGFyIHRoaXMgcmVwb3NpdG9yeSIgdGl0bGU9IlVuc3RhciBjeWNnaXQvd2ViLXN0eWxlIgogICAgICAgIGRhdGEtZ2EtY2xpY2s9IlJlcG9zaXRvcnksIGNsaWNrIHVuc3RhciBidXR0b24sIGFjdGlvbjpibG9iI3Nob3c7IHRleHQ6VW5zdGFyIj4KICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzcz0ib2N0aWNvbiBvY3RpY29uLXN0YXIiIGhlaWdodD0iMTYiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE0IDE2IiB3aWR0aD0iMTQiPjxwYXRoIGQ9Ik0xNCA2bC00LjktLjY0TDcgMSA0LjkgNS4zNiAwIDZsMy42IDMuMjZMMi42NyAxNCA3IDExLjY3IDExLjMzIDE0bC0uOTMtNC43NHoiPjwvcGF0aD48L3N2Zz4KICAgICAgICBVbnN0YXIKICAgICAgPC9idXR0b24+CiAgICAgICAgPGEgY2xhc3M9InNvY2lhbC1jb3VudCBqcy1zb2NpYWwtY291bnQiIGhyZWY9Ii9jeWNnaXQvd2ViLXN0eWxlL3N0YXJnYXplcnMiPgogICAgICAgICAgMTAKICAgICAgICA8L2E+CjwvZm9ybT4KICAgIDwhLS0gPC90ZXh0YXJlYT4gLS0+PCEtLSAnImAgLS0+PGZvcm0gYWNjZXB0LWNoYXJzZXQ9IlVURi04IiBhY3Rpb249Ii9jeWNnaXQvd2ViLXN0eWxlL3N0YXIiIGNsYXNzPSJ1bnN0YXJyZWQiIGRhdGEtZm9ybS1ub25jZT0iMzYwMTU2NDJkMDQ5YjViNDY2NzBkZDM1ZGFhYjBiZTFjOTc1Yjk4NCIgZGF0YS1yZW1vdGU9InRydWUiIG1ldGhvZD0icG9zdCI+PGRpdiBzdHlsZT0ibWFyZ2luOjA7cGFkZGluZzowO2Rpc3BsYXk6aW5saW5lIj48aW5wdXQgbmFtZT0idXRmOCIgdHlwZT0iaGlkZGVuIiB2YWx1ZT0iJiN4MjcxMzsiIC8+PGlucHV0IG5hbWU9ImF1dGhlbnRpY2l0eV90b2tlbiIgdHlwZT0iaGlkZGVuIiB2YWx1ZT0iK0FzR2NlY0h3SDdJeUZpd0NyOGFyVm8wSDZ6NGdLYkZRM1RJRmZRMExWVVJyUGh1YUJlQXdTMVlTbmR0Q0RyYjk5VUp4a3paZkFaaS9KVFVjS2hXbUE9PSIgLz48L2Rpdj4KICAgICAgPGJ1dHRvbgogICAgICAgIGNsYXNzPSJidG4gYnRuLXNtIGJ0bi13aXRoLWNvdW50IGpzLXRvZ2dsZXItdGFyZ2V0IgogICAgICAgIGFyaWEtbGFiZWw9IlN0YXIgdGhpcyByZXBvc2l0b3J5IiB0aXRsZT0iU3RhciBjeWNnaXQvd2ViLXN0eWxlIgogICAgICAgIGRhdGEtZ2EtY2xpY2s9IlJlcG9zaXRvcnksIGNsaWNrIHN0YXIgYnV0dG9uLCBhY3Rpb246YmxvYiNzaG93OyB0ZXh0OlN0YXIiPgogICAgICAgIDxzdmcgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJvY3RpY29uIG9jdGljb24tc3RhciIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTQgMTYiIHdpZHRoPSIxNCI+PHBhdGggZD0iTTE0IDZsLTQuOS0uNjRMNyAxIDQuOSA1LjM2IDAgNmwzLjYgMy4yNkwyLjY3IDE0IDcgMTEuNjcgMTEuMzMgMTRsLS45My00Ljc0eiI+PC9wYXRoPjwvc3ZnPgogICAgICAgIFN0YXIKICAgICAgPC9idXR0b24+CiAgICAgICAgPGEgY2xhc3M9InNvY2lhbC1jb3VudCBqcy1zb2NpYWwtY291bnQiIGhyZWY9Ii9jeWNnaXQvd2ViLXN0eWxlL3N0YXJnYXplcnMiPgogICAgICAgICAgMTAKICAgICAgICA8L2E+CjwvZm9ybT4gIDwvZGl2PgoKICA8L2xpPgoKICA8bGk+CiAgICAgICAgICA8IS0tIDwvdGV4dGFyZWE+IC0tPjwhLS0gJyJgIC0tPjxmb3JtIGFjY2VwdC1jaGFyc2V0PSJVVEYtOCIgYWN0aW9uPSIvY3ljZ2l0L3dlYi1zdHlsZS9mb3JrIiBjbGFzcz0iYnRuLXdpdGgtY291bnQiIGRhdGEtZm9ybS1ub25jZT0iMzYwMTU2NDJkMDQ5YjViNDY2NzBkZDM1ZGFhYjBiZTFjOTc1Yjk4NCIgbWV0aG9kPSJwb3N0Ij48ZGl2IHN0eWxlPSJtYXJnaW46MDtwYWRkaW5nOjA7ZGlzcGxheTppbmxpbmUiPjxpbnB1dCBuYW1lPSJ1dGY4IiB0eXBlPSJoaWRkZW4iIHZhbHVlPSImI3gyNzEzOyIgLz48aW5wdXQgbmFtZT0iYXV0aGVudGljaXR5X3Rva2VuIiB0eXBlPSJoaWRkZW4iIHZhbHVlPSJJNWNBQmMzL1h0UDJtN1N2ZThRS09WOGZoRkZaT1IyTHpnUDJEUDRDN3BYakFnVDNVZ2UwNnpqT2dqb3RPTlA3NXZCUjFvVGhYU1NHeVJRcFpPRkJCUT09IiAvPjwvZGl2PgogICAgICAgICAgICA8YnV0dG9uCiAgICAgICAgICAgICAgICB0eXBlPSJzdWJtaXQiCiAgICAgICAgICAgICAgICBjbGFzcz0iYnRuIGJ0bi1zbSBidG4td2l0aC1jb3VudCIKICAgICAgICAgICAgICAgIGRhdGEtZ2EtY2xpY2s9IlJlcG9zaXRvcnksIHNob3cgZm9yayBtb2RhbCwgYWN0aW9uOmJsb2Ijc2hvdzsgdGV4dDpGb3JrIgogICAgICAgICAgICAgICAgdGl0bGU9IkZvcmsgeW91ciBvd24gY29weSBvZiBjeWNnaXQvd2ViLXN0eWxlIHRvIHlvdXIgYWNjb3VudCIKICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9IkZvcmsgeW91ciBvd24gY29weSBvZiBjeWNnaXQvd2ViLXN0eWxlIHRvIHlvdXIgYWNjb3VudCI+CiAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1yZXBvLWZvcmtlZCIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTAgMTYiIHdpZHRoPSIxMCI+PHBhdGggZD0iTTggMWExLjk5MyAxLjk5MyAwIDAgMC0xIDMuNzJWNkw1IDggMyA2VjQuNzJBMS45OTMgMS45OTMgMCAwIDAgMiAxYTEuOTkzIDEuOTkzIDAgMCAwLTEgMy43MlY2LjVsMyAzdjEuNzhBMS45OTMgMS45OTMgMCAwIDAgNSAxNWExLjk5MyAxLjk5MyAwIDAgMCAxLTMuNzJWOS41bDMtM1Y0LjcyQTEuOTkzIDEuOTkzIDAgMCAwIDggMXpNMiA0LjJDMS4zNCA0LjIuOCAzLjY1LjggM2MwLS42NS41NS0xLjIgMS4yLTEuMi42NSAwIDEuMi41NSAxLjIgMS4yIDAgLjY1LS41NSAxLjItMS4yIDEuMnptMyAxMGMtLjY2IDAtMS4yLS41NS0xLjItMS4yIDAtLjY1LjU1LTEuMiAxLjItMS4yLjY1IDAgMS4yLjU1IDEuMiAxLjIgMCAuNjUtLjU1IDEuMi0xLjIgMS4yem0zLTEwYy0uNjYgMC0xLjItLjU1LTEuMi0xLjIgMC0uNjUuNTUtMS4yIDEuMi0xLjIuNjUgMCAxLjIuNTUgMS4yIDEuMiAwIC42NS0uNTUgMS4yLTEuMiAxLjJ6Ij48L3BhdGg+PC9zdmc+CiAgICAgICAgICAgICAgRm9yawogICAgICAgICAgICA8L2J1dHRvbj4KPC9mb3JtPgogICAgPGEgaHJlZj0iL2N5Y2dpdC93ZWItc3R5bGUvbmV0d29yayIgY2xhc3M9InNvY2lhbC1jb3VudCI+CiAgICAgIDEKICAgIDwvYT4KICA8L2xpPgo8L3VsPgoKICAgIDxoMSBjbGFzcz0icHVibGljICI+CiAgPHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1yZXBvIiBoZWlnaHQ9IjE2IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMiAxNiIgd2lkdGg9IjEyIj48cGF0aCBkPSJNNCA5SDNWOGgxdjF6bTAtM0gzdjFoMVY2em0wLTJIM3YxaDFWNHptMC0ySDN2MWgxVjJ6bTgtMXYxMmMwIC41NS0uNDUgMS0xIDFINnYybC0xLjUtMS41TDMgMTZ2LTJIMWMtLjU1IDAtMS0uNDUtMS0xVjFjMC0uNTUuNDUtMSAxLTFoMTBjLjU1IDAgMSAuNDUgMSAxem0tMSAxMEgxdjJoMnYtMWgzdjFoNXYtMnptMC0xMEgydjloOVYxeiI+PC9wYXRoPjwvc3ZnPgogIDxzcGFuIGNsYXNzPSJhdXRob3IiIGl0ZW1wcm9wPSJhdXRob3IiPjxhIGhyZWY9Ii9jeWNnaXQiIGNsYXNzPSJ1cmwgZm4iIHJlbD0iYXV0aG9yIj5jeWNnaXQ8L2E+PC9zcGFuPjwhLS0KLS0+PHNwYW4gY2xhc3M9InBhdGgtZGl2aWRlciI+Lzwvc3Bhbj48IS0tCi0tPjxzdHJvbmcgaXRlbXByb3A9Im5hbWUiPjxhIGhyZWY9Ii9jeWNnaXQvd2ViLXN0eWxlIiBkYXRhLXBqYXg9IiNqcy1yZXBvLXBqYXgtY29udGFpbmVyIj53ZWItc3R5bGU8L2E+PC9zdHJvbmc+Cgo8L2gxPgoKICA8L2Rpdj4KICA8ZGl2IGNsYXNzPSJjb250YWluZXIiPgogICAgCjxuYXYgY2xhc3M9InJlcG9uYXYganMtcmVwby1uYXYganMtc2lkZW5hdi1jb250YWluZXItcGpheCIKICAgICBpdGVtc2NvcGUKICAgICBpdGVtdHlwZT0iaHR0cDovL3NjaGVtYS5vcmcvQnJlYWRjcnVtYkxpc3QiCiAgICAgcm9sZT0ibmF2aWdhdGlvbiIKICAgICBkYXRhLXBqYXg9IiNqcy1yZXBvLXBqYXgtY29udGFpbmVyIj4KCiAgPHNwYW4gaXRlbXNjb3BlIGl0ZW10eXBlPSJodHRwOi8vc2NoZW1hLm9yZy9MaXN0SXRlbSIgaXRlbXByb3A9Iml0ZW1MaXN0RWxlbWVudCI+CiAgICA8YSBocmVmPSIvY3ljZ2l0L3dlYi1zdHlsZSIgYXJpYS1zZWxlY3RlZD0idHJ1ZSIgY2xhc3M9ImpzLXNlbGVjdGVkLW5hdmlnYXRpb24taXRlbSBzZWxlY3RlZCByZXBvbmF2LWl0ZW0iIGRhdGEtaG90a2V5PSJnIGMiIGRhdGEtc2VsZWN0ZWQtbGlua3M9InJlcG9fc291cmNlIHJlcG9fZG93bmxvYWRzIHJlcG9fY29tbWl0cyByZXBvX3JlbGVhc2VzIHJlcG9fdGFncyByZXBvX2JyYW5jaGVzIC9jeWNnaXQvd2ViLXN0eWxlIiBpdGVtcHJvcD0idXJsIj4KICAgICAgPHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1jb2RlIiBoZWlnaHQ9IjE2IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxNCAxNiIgd2lkdGg9IjE0Ij48cGF0aCBkPSJNOS41IDNMOCA0LjUgMTEuNSA4IDggMTEuNSA5LjUgMTMgMTQgOCA5LjUgM3ptLTUgMEwwIDhsNC41IDVMNiAxMS41IDIuNSA4IDYgNC41IDQuNSAzeiI+PC9wYXRoPjwvc3ZnPgogICAgICA8c3BhbiBpdGVtcHJvcD0ibmFtZSI+Q29kZTwvc3Bhbj4KICAgICAgPG1ldGEgaXRlbXByb3A9InBvc2l0aW9uIiBjb250ZW50PSIxIj4KPC9hPiAgPC9zcGFuPgoKICAgIDxzcGFuIGl0ZW1zY29wZSBpdGVtdHlwZT0iaHR0cDovL3NjaGVtYS5vcmcvTGlzdEl0ZW0iIGl0ZW1wcm9wPSJpdGVtTGlzdEVsZW1lbnQiPgogICAgICA8YSBocmVmPSIvY3ljZ2l0L3dlYi1zdHlsZS9pc3N1ZXMiIGNsYXNzPSJqcy1zZWxlY3RlZC1uYXZpZ2F0aW9uLWl0ZW0gcmVwb25hdi1pdGVtIiBkYXRhLWhvdGtleT0iZyBpIiBkYXRhLXNlbGVjdGVkLWxpbmtzPSJyZXBvX2lzc3VlcyByZXBvX2xhYmVscyByZXBvX21pbGVzdG9uZXMgL2N5Y2dpdC93ZWItc3R5bGUvaXNzdWVzIiBpdGVtcHJvcD0idXJsIj4KICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzcz0ib2N0aWNvbiBvY3RpY29uLWlzc3VlLW9wZW5lZCIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTQgMTYiIHdpZHRoPSIxNCI+PHBhdGggZD0iTTcgMi4zYzMuMTQgMCA1LjcgMi41NiA1LjcgNS43cy0yLjU2IDUuNy01LjcgNS43QTUuNzEgNS43MSAwIDAgMSAxLjMgOGMwLTMuMTQgMi41Ni01LjcgNS43LTUuN3pNNyAxQzMuMTQgMSAwIDQuMTQgMCA4czMuMTQgNyA3IDcgNy0zLjE0IDctNy0zLjE0LTctNy03em0xIDNINnY1aDJWNHptMCA2SDZ2Mmgydi0yeiI+PC9wYXRoPjwvc3ZnPgogICAgICAgIDxzcGFuIGl0ZW1wcm9wPSJuYW1lIj5Jc3N1ZXM8L3NwYW4+CiAgICAgICAgPHNwYW4gY2xhc3M9ImNvdW50ZXIiPjA8L3NwYW4+CiAgICAgICAgPG1ldGEgaXRlbXByb3A9InBvc2l0aW9uIiBjb250ZW50PSIyIj4KPC9hPiAgICA8L3NwYW4+CgogIDxzcGFuIGl0ZW1zY29wZSBpdGVtdHlwZT0iaHR0cDovL3NjaGVtYS5vcmcvTGlzdEl0ZW0iIGl0ZW1wcm9wPSJpdGVtTGlzdEVsZW1lbnQiPgogICAgPGEgaHJlZj0iL2N5Y2dpdC93ZWItc3R5bGUvcHVsbHMiIGNsYXNzPSJqcy1zZWxlY3RlZC1uYXZpZ2F0aW9uLWl0ZW0gcmVwb25hdi1pdGVtIiBkYXRhLWhvdGtleT0iZyBwIiBkYXRhLXNlbGVjdGVkLWxpbmtzPSJyZXBvX3B1bGxzIC9jeWNnaXQvd2ViLXN0eWxlL3B1bGxzIiBpdGVtcHJvcD0idXJsIj4KICAgICAgPHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1naXQtcHVsbC1yZXF1ZXN0IiBoZWlnaHQ9IjE2IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMiAxNiIgd2lkdGg9IjEyIj48cGF0aCBkPSJNMTEgMTEuMjhWNWMtLjAzLS43OC0uMzQtMS40Ny0uOTQtMi4wNkM5LjQ2IDIuMzUgOC43OCAyLjAzIDggMkg3VjBMNCAzbDMgM1Y0aDFjLjI3LjAyLjQ4LjExLjY5LjMxLjIxLjIuMy40Mi4zMS42OXY2LjI4QTEuOTkzIDEuOTkzIDAgMCAwIDEwIDE1YTEuOTkzIDEuOTkzIDAgMCAwIDEtMy43MnptLTEgMi45MmMtLjY2IDAtMS4yLS41NS0xLjItMS4yIDAtLjY1LjU1LTEuMiAxLjItMS4yLjY1IDAgMS4yLjU1IDEuMiAxLjIgMCAuNjUtLjU1IDEuMi0xLjIgMS4yek00IDNjMC0xLjExLS44OS0yLTItMmExLjk5MyAxLjk5MyAwIDAgMC0xIDMuNzJ2Ni41NkExLjk5MyAxLjk5MyAwIDAgMCAyIDE1YTEuOTkzIDEuOTkzIDAgMCAwIDEtMy43MlY0LjcyYy41OS0uMzQgMS0uOTggMS0xLjcyem0tLjggMTBjMCAuNjYtLjU1IDEuMi0xLjIgMS4yLS42NSAwLTEuMi0uNTUtMS4yLTEuMiAwLS42NS41NS0xLjIgMS4yLTEuMi42NSAwIDEuMi41NSAxLjIgMS4yek0yIDQuMkMxLjM0IDQuMi44IDMuNjUuOCAzYzAtLjY1LjU1LTEuMiAxLjItMS4yLjY1IDAgMS4yLjU1IDEuMiAxLjIgMCAuNjUtLjU1IDEuMi0xLjIgMS4yeiI+PC9wYXRoPjwvc3ZnPgogICAgICA8c3BhbiBpdGVtcHJvcD0ibmFtZSI+UHVsbCByZXF1ZXN0czwvc3Bhbj4KICAgICAgPHNwYW4gY2xhc3M9ImNvdW50ZXIiPjA8L3NwYW4+CiAgICAgIDxtZXRhIGl0ZW1wcm9wPSJwb3NpdGlvbiIgY29udGVudD0iMyI+CjwvYT4gIDwvc3Bhbj4KCiAgICA8YSBocmVmPSIvY3ljZ2l0L3dlYi1zdHlsZS93aWtpIiBjbGFzcz0ianMtc2VsZWN0ZWQtbmF2aWdhdGlvbi1pdGVtIHJlcG9uYXYtaXRlbSIgZGF0YS1ob3RrZXk9ImcgdyIgZGF0YS1zZWxlY3RlZC1saW5rcz0icmVwb193aWtpIC9jeWNnaXQvd2ViLXN0eWxlL3dpa2kiPgogICAgICA8c3ZnIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzcz0ib2N0aWNvbiBvY3RpY29uLWJvb2siIGhlaWdodD0iMTYiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE2IDE2IiB3aWR0aD0iMTYiPjxwYXRoIGQ9Ik0zIDVoNHYxSDNWNXptMCAzaDRWN0gzdjF6bTAgMmg0VjlIM3Yxem0xMS01aC00djFoNFY1em0wIDJoLTR2MWg0Vjd6bTAgMmgtNHYxaDRWOXptMi02djljMCAuNTUtLjQ1IDEtMSAxSDkuNWwtMSAxLTEtMUgyYy0uNTUgMC0xLS40NS0xLTFWM2MwLS41NS40NS0xIDEtMWg1LjVsMSAxIDEtMUgxNWMuNTUgMCAxIC40NSAxIDF6bS04IC41TDcuNSAzSDJ2OWg2VjMuNXptNy0uNUg5LjVsLS41LjVWMTJoNlYzeiI+PC9wYXRoPjwvc3ZnPgogICAgICBXaWtpCjwvYT4KCiAgPGEgaHJlZj0iL2N5Y2dpdC93ZWItc3R5bGUvcHVsc2UiIGNsYXNzPSJqcy1zZWxlY3RlZC1uYXZpZ2F0aW9uLWl0ZW0gcmVwb25hdi1pdGVtIiBkYXRhLXNlbGVjdGVkLWxpbmtzPSJwdWxzZSAvY3ljZ2l0L3dlYi1zdHlsZS9wdWxzZSI+CiAgICA8c3ZnIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzcz0ib2N0aWNvbiBvY3RpY29uLXB1bHNlIiBoZWlnaHQ9IjE2IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxNCAxNiIgd2lkdGg9IjE0Ij48cGF0aCBkPSJNMTEuNSA4TDguOCA1LjQgNi42IDguNSA1LjUgMS42IDIuMzggOEgwdjJoMy42bC45LTEuOC45IDUuNEw5IDguNWwxLjYgMS41SDE0Vjh6Ij48L3BhdGg+PC9zdmc+CiAgICBQdWxzZQo8L2E+CiAgPGEgaHJlZj0iL2N5Y2dpdC93ZWItc3R5bGUvZ3JhcGhzIiBjbGFzcz0ianMtc2VsZWN0ZWQtbmF2aWdhdGlvbi1pdGVtIHJlcG9uYXYtaXRlbSIgZGF0YS1zZWxlY3RlZC1saW5rcz0icmVwb19ncmFwaHMgcmVwb19jb250cmlidXRvcnMgL2N5Y2dpdC93ZWItc3R5bGUvZ3JhcGhzIj4KICAgIDxzdmcgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJvY3RpY29uIG9jdGljb24tZ3JhcGgiIGhlaWdodD0iMTYiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE2IDE2IiB3aWR0aD0iMTYiPjxwYXRoIGQ9Ik0xNiAxNHYxSDBWMGgxdjE0aDE1ek01IDEzSDNWOGgydjV6bTQgMEg3VjNoMnYxMHptNCAwaC0yVjZoMnY3eiI+PC9wYXRoPjwvc3ZnPgogICAgR3JhcGhzCjwvYT4KCjwvbmF2PgoKICA8L2Rpdj4KPC9kaXY+Cgo8ZGl2IGNsYXNzPSJjb250YWluZXIgbmV3LWRpc2N1c3Npb24tdGltZWxpbmUgZXhwZXJpbWVudC1yZXBvLW5hdiI+CiAgPGRpdiBjbGFzcz0icmVwb3NpdG9yeS1jb250ZW50Ij4KCiAgICAKCjxhIGhyZWY9Ii9jeWNnaXQvd2ViLXN0eWxlL2Jsb2IvMWM0MDFkMGIyYjgzMDZmODY2ZmM0YzMyOGVjZDVmYTQxOWY3MDQ3Ni9zcmMvZm9udHMvaWNvbmZvbnQudHRmIiBjbGFzcz0iaGlkZGVuIGpzLXBlcm1hbGluay1zaG9ydGN1dCIgZGF0YS1ob3RrZXk9InkiPlBlcm1hbGluazwvYT4KCjwhLS0gYmxvYiBjb250cmliIGtleTogYmxvYl9jb250cmlidXRvcnM6djIxOjFiYmMwZTYzOTJlZWQ1MDRlODlkYzcwMzA1ZjFjZmE2IC0tPgoKPGRpdiBjbGFzcz0iZmlsZS1uYXZpZ2F0aW9uIGpzLXplcm9jbGlwYm9hcmQtY29udGFpbmVyIj4KICAKPGRpdiBjbGFzcz0ic2VsZWN0LW1lbnUgYnJhbmNoLXNlbGVjdC1tZW51IGpzLW1lbnUtY29udGFpbmVyIGpzLXNlbGVjdC1tZW51IGxlZnQiPgogIDxidXR0b24gY2xhc3M9ImJ0biBidG4tc20gc2VsZWN0LW1lbnUtYnV0dG9uIGpzLW1lbnUtdGFyZ2V0IGNzcy10cnVuY2F0ZSIgZGF0YS1ob3RrZXk9InciCiAgICB0aXRsZT0ibWFzdGVyIgogICAgdHlwZT0iYnV0dG9uIiBhcmlhLWxhYmVsPSJTd2l0Y2ggYnJhbmNoZXMgb3IgdGFncyIgdGFiaW5kZXg9IjAiIGFyaWEtaGFzcG9wdXA9InRydWUiPgogICAgPGk+QnJhbmNoOjwvaT4KICAgIDxzcGFuIGNsYXNzPSJqcy1zZWxlY3QtYnV0dG9uIGNzcy10cnVuY2F0ZS10YXJnZXQiPm1hc3Rlcjwvc3Bhbj4KICA8L2J1dHRvbj4KCiAgPGRpdiBjbGFzcz0ic2VsZWN0LW1lbnUtbW9kYWwtaG9sZGVyIGpzLW1lbnUtY29udGVudCBqcy1uYXZpZ2F0aW9uLWNvbnRhaW5lciIgZGF0YS1wamF4IGFyaWEtaGlkZGVuPSJ0cnVlIj4KCiAgICA8ZGl2IGNsYXNzPSJzZWxlY3QtbWVudS1tb2RhbCI+CiAgICAgIDxkaXYgY2xhc3M9InNlbGVjdC1tZW51LWhlYWRlciI+CiAgICAgICAgPHN2ZyBhcmlhLWxhYmVsPSJDbG9zZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi14IGpzLW1lbnUtY2xvc2UiIGhlaWdodD0iMTYiIHJvbGU9ImltZyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTIgMTYiIHdpZHRoPSIxMiI+PHBhdGggZD0iTTcuNDggOGwzLjc1IDMuNzUtMS40OCAxLjQ4TDYgOS40OGwtMy43NSAzLjc1LTEuNDgtMS40OEw0LjUyIDggLjc3IDQuMjVsMS40OC0xLjQ4TDYgNi41MmwzLjc1LTMuNzUgMS40OCAxLjQ4eiI+PC9wYXRoPjwvc3ZnPgogICAgICAgIDxzcGFuIGNsYXNzPSJzZWxlY3QtbWVudS10aXRsZSI+U3dpdGNoIGJyYW5jaGVzL3RhZ3M8L3NwYW4+CiAgICAgIDwvZGl2PgoKICAgICAgPGRpdiBjbGFzcz0ic2VsZWN0LW1lbnUtZmlsdGVycyI+CiAgICAgICAgPGRpdiBjbGFzcz0ic2VsZWN0LW1lbnUtdGV4dC1maWx0ZXIiPgogICAgICAgICAgPGlucHV0IHR5cGU9InRleHQiIGFyaWEtbGFiZWw9IkZpbHRlciBicmFuY2hlcy90YWdzIiBpZD0iY29udGV4dC1jb21taXRpc2gtZmlsdGVyLWZpZWxkIiBjbGFzcz0iZm9ybS1jb250cm9sIGpzLWZpbHRlcmFibGUtZmllbGQganMtbmF2aWdhdGlvbi1lbmFibGUiIHBsYWNlaG9sZGVyPSJGaWx0ZXIgYnJhbmNoZXMvdGFncyI+CiAgICAgICAgPC9kaXY+CiAgICAgICAgPGRpdiBjbGFzcz0ic2VsZWN0LW1lbnUtdGFicyI+CiAgICAgICAgICA8dWw+CiAgICAgICAgICAgIDxsaSBjbGFzcz0ic2VsZWN0LW1lbnUtdGFiIj4KICAgICAgICAgICAgICA8YSBocmVmPSIjIiBkYXRhLXRhYi1maWx0ZXI9ImJyYW5jaGVzIiBkYXRhLWZpbHRlci1wbGFjZWhvbGRlcj0iRmlsdGVyIGJyYW5jaGVzL3RhZ3MiIGNsYXNzPSJqcy1zZWxlY3QtbWVudS10YWIiIHJvbGU9InRhYiI+QnJhbmNoZXM8L2E+CiAgICAgICAgICAgIDwvbGk+CiAgICAgICAgICAgIDxsaSBjbGFzcz0ic2VsZWN0LW1lbnUtdGFiIj4KICAgICAgICAgICAgICA8YSBocmVmPSIjIiBkYXRhLXRhYi1maWx0ZXI9InRhZ3MiIGRhdGEtZmlsdGVyLXBsYWNlaG9sZGVyPSJGaW5kIGEgdGFn4oCmIiBjbGFzcz0ianMtc2VsZWN0LW1lbnUtdGFiIiByb2xlPSJ0YWIiPlRhZ3M8L2E+CiAgICAgICAgICAgIDwvbGk+CiAgICAgICAgICA8L3VsPgogICAgICAgIDwvZGl2PgogICAgICA8L2Rpdj4KCiAgICAgIDxkaXYgY2xhc3M9InNlbGVjdC1tZW51LWxpc3Qgc2VsZWN0LW1lbnUtdGFiLWJ1Y2tldCBqcy1zZWxlY3QtbWVudS10YWItYnVja2V0IiBkYXRhLXRhYi1maWx0ZXI9ImJyYW5jaGVzIiByb2xlPSJtZW51Ij4KCiAgICAgICAgPGRpdiBkYXRhLWZpbHRlcmFibGUtZm9yPSJjb250ZXh0LWNvbW1pdGlzaC1maWx0ZXItZmllbGQiIGRhdGEtZmlsdGVyYWJsZS10eXBlPSJzdWJzdHJpbmciPgoKCiAgICAgICAgICAgIDxhIGNsYXNzPSJzZWxlY3QtbWVudS1pdGVtIGpzLW5hdmlnYXRpb24taXRlbSBqcy1uYXZpZ2F0aW9uLW9wZW4gc2VsZWN0ZWQiCiAgICAgICAgICAgICAgIGhyZWY9Ii9jeWNnaXQvd2ViLXN0eWxlL2Jsb2IvbWFzdGVyL3NyYy9mb250cy9pY29uZm9udC50dGYiCiAgICAgICAgICAgICAgIGRhdGEtbmFtZT0ibWFzdGVyIgogICAgICAgICAgICAgICBkYXRhLXNraXAtcGpheD0idHJ1ZSIKICAgICAgICAgICAgICAgcmVsPSJub2ZvbGxvdyI+CiAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1jaGVjayBzZWxlY3QtbWVudS1pdGVtLWljb24iIGhlaWdodD0iMTYiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEyIDE2IiB3aWR0aD0iMTIiPjxwYXRoIGQ9Ik0xMiA1bC04IDgtNC00IDEuNS0xLjVMNCAxMGw2LjUtNi41eiI+PC9wYXRoPjwvc3ZnPgogICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJzZWxlY3QtbWVudS1pdGVtLXRleHQgY3NzLXRydW5jYXRlLXRhcmdldCBqcy1zZWxlY3QtbWVudS1maWx0ZXItdGV4dCIgdGl0bGU9Im1hc3RlciI+CiAgICAgICAgICAgICAgICBtYXN0ZXIKICAgICAgICAgICAgICA8L3NwYW4+CiAgICAgICAgICAgIDwvYT4KICAgICAgICA8L2Rpdj4KCiAgICAgICAgICA8ZGl2IGNsYXNzPSJzZWxlY3QtbWVudS1uby1yZXN1bHRzIj5Ob3RoaW5nIHRvIHNob3c8L2Rpdj4KICAgICAgPC9kaXY+CgogICAgICA8ZGl2IGNsYXNzPSJzZWxlY3QtbWVudS1saXN0IHNlbGVjdC1tZW51LXRhYi1idWNrZXQganMtc2VsZWN0LW1lbnUtdGFiLWJ1Y2tldCIgZGF0YS10YWItZmlsdGVyPSJ0YWdzIj4KICAgICAgICA8ZGl2IGRhdGEtZmlsdGVyYWJsZS1mb3I9ImNvbnRleHQtY29tbWl0aXNoLWZpbHRlci1maWVsZCIgZGF0YS1maWx0ZXJhYmxlLXR5cGU9InN1YnN0cmluZyI+CgoKICAgICAgICA8L2Rpdj4KCiAgICAgICAgPGRpdiBjbGFzcz0ic2VsZWN0LW1lbnUtbm8tcmVzdWx0cyI+Tm90aGluZyB0byBzaG93PC9kaXY+CiAgICAgIDwvZGl2PgoKICAgIDwvZGl2PgogIDwvZGl2Pgo8L2Rpdj4KCiAgPGRpdiBjbGFzcz0iYnRuLWdyb3VwIHJpZ2h0Ij4KICAgIDxhIGhyZWY9Ii9jeWNnaXQvd2ViLXN0eWxlL2ZpbmQvbWFzdGVyIgogICAgICAgICAgY2xhc3M9ImpzLXBqYXgtY2FwdHVyZS1pbnB1dCBidG4gYnRuLXNtIgogICAgICAgICAgZGF0YS1wamF4CiAgICAgICAgICBkYXRhLWhvdGtleT0idCI+CiAgICAgIEZpbmQgZmlsZQogICAgPC9hPgogICAgPGJ1dHRvbiBhcmlhLWxhYmVsPSJDb3B5IGZpbGUgcGF0aCB0byBjbGlwYm9hcmQiIGNsYXNzPSJqcy16ZXJvY2xpcGJvYXJkIGJ0biBidG4tc20gemVyb2NsaXBib2FyZC1idXR0b24gdG9vbHRpcHBlZCB0b29sdGlwcGVkLXMiIGRhdGEtY29waWVkLWhpbnQ9IkNvcGllZCEiIHR5cGU9ImJ1dHRvbiI+Q29weSBwYXRoPC9idXR0b24+CiAgPC9kaXY+CiAgPGRpdiBjbGFzcz0iYnJlYWRjcnVtYiBqcy16ZXJvY2xpcGJvYXJkLXRhcmdldCI+CiAgICA8c3BhbiBjbGFzcz0icmVwby1yb290IGpzLXJlcG8tcm9vdCI+PHNwYW4gY2xhc3M9ImpzLXBhdGgtc2VnbWVudCI+PGEgaHJlZj0iL2N5Y2dpdC93ZWItc3R5bGUiPjxzcGFuPndlYi1zdHlsZTwvc3Bhbj48L2E+PC9zcGFuPjwvc3Bhbj48c3BhbiBjbGFzcz0ic2VwYXJhdG9yIj4vPC9zcGFuPjxzcGFuIGNsYXNzPSJqcy1wYXRoLXNlZ21lbnQiPjxhIGhyZWY9Ii9jeWNnaXQvd2ViLXN0eWxlL3RyZWUvbWFzdGVyL3NyYyI+PHNwYW4+c3JjPC9zcGFuPjwvYT48L3NwYW4+PHNwYW4gY2xhc3M9InNlcGFyYXRvciI+Lzwvc3Bhbj48c3BhbiBjbGFzcz0ianMtcGF0aC1zZWdtZW50Ij48YSBocmVmPSIvY3ljZ2l0L3dlYi1zdHlsZS90cmVlL21hc3Rlci9zcmMvZm9udHMiPjxzcGFuPmZvbnRzPC9zcGFuPjwvYT48L3NwYW4+PHNwYW4gY2xhc3M9InNlcGFyYXRvciI+Lzwvc3Bhbj48c3Ryb25nIGNsYXNzPSJmaW5hbC1wYXRoIj5pY29uZm9udC50dGY8L3N0cm9uZz4KICA8L2Rpdj4KPC9kaXY+Cgo8aW5jbHVkZS1mcmFnbWVudCBjbGFzcz0iY29tbWl0LXRlYXNlIiBzcmM9Ii9jeWNnaXQvd2ViLXN0eWxlL2NvbnRyaWJ1dG9ycy9tYXN0ZXIvc3JjL2ZvbnRzL2ljb25mb250LnR0ZiI+CiAgPGRpdj4KICAgIEZldGNoaW5nIGNvbnRyaWJ1dG9ycyZoZWxsaXA7CiAgPC9kaXY+CgogIDxkaXYgY2xhc3M9ImNvbW1pdC10ZWFzZS1jb250cmlidXRvcnMiPgogICAgPGltZyBhbHQ9IiIgY2xhc3M9ImxvYWRlci1sb2FkaW5nIGxlZnQiIGhlaWdodD0iMTYiIHNyYz0iaHR0cHM6Ly9hc3NldHMtY2RuLmdpdGh1Yi5jb20vaW1hZ2VzL3NwaW5uZXJzL29jdG9jYXQtc3Bpbm5lci0zMi1FQUYyRjUuZ2lmIiB3aWR0aD0iMTYiIC8+CiAgICA8c3BhbiBjbGFzcz0ibG9hZGVyLWVycm9yIj5DYW5ub3QgcmV0cmlldmUgY29udHJpYnV0b3JzIGF0IHRoaXMgdGltZTwvc3Bhbj4KICA8L2Rpdj4KPC9pbmNsdWRlLWZyYWdtZW50Pgo8ZGl2IGNsYXNzPSJmaWxlIj4KICA8ZGl2IGNsYXNzPSJmaWxlLWhlYWRlciI+CiAgPGRpdiBjbGFzcz0iZmlsZS1hY3Rpb25zIj4KCiAgICA8ZGl2IGNsYXNzPSJidG4tZ3JvdXAiPgogICAgICA8YSBocmVmPSIvY3ljZ2l0L3dlYi1zdHlsZS9yYXcvbWFzdGVyL3NyYy9mb250cy9pY29uZm9udC50dGYiIGNsYXNzPSJidG4gYnRuLXNtICIgaWQ9InJhdy11cmwiPlJhdzwvYT4KICAgICAgPGEgaHJlZj0iL2N5Y2dpdC93ZWItc3R5bGUvY29tbWl0cy9tYXN0ZXIvc3JjL2ZvbnRzL2ljb25mb250LnR0ZiIgY2xhc3M9ImJ0biBidG4tc20gIiByZWw9Im5vZm9sbG93Ij5IaXN0b3J5PC9hPgogICAgPC9kaXY+CgogICAgICAgIDxhIGNsYXNzPSJidG4tb2N0aWNvbiB0b29sdGlwcGVkIHRvb2x0aXBwZWQtbnciCiAgICAgICAgICAgaHJlZj0iZ2l0aHViLW1hYzovL29wZW5SZXBvL2h0dHBzOi8vZ2l0aHViLmNvbS9jeWNnaXQvd2ViLXN0eWxlP2JyYW5jaD1tYXN0ZXImYW1wO2ZpbGVwYXRoPXNyYyUyRmZvbnRzJTJGaWNvbmZvbnQudHRmIgogICAgICAgICAgIGFyaWEtbGFiZWw9Ik9wZW4gdGhpcyBmaWxlIGluIEdpdEh1YiBEZXNrdG9wIgogICAgICAgICAgIGRhdGEtZ2EtY2xpY2s9IlJlcG9zaXRvcnksIG9wZW4gd2l0aCBkZXNrdG9wLCB0eXBlOm1hYyI+CiAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJvY3RpY29uIG9jdGljb24tZGV2aWNlLWRlc2t0b3AiIGhlaWdodD0iMTYiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE2IDE2IiB3aWR0aD0iMTYiPjxwYXRoIGQ9Ik0xNSAySDFjLS41NSAwLTEgLjQ1LTEgMXY5YzAgLjU1LjQ1IDEgMSAxaDUuMzRjLS4yNS42MS0uODYgMS4zOS0yLjM0IDJoOGMtMS40OC0uNjEtMi4wOS0xLjM5LTIuMzQtMkgxNWMuNTUgMCAxLS40NSAxLTFWM2MwLS41NS0uNDUtMS0xLTF6bTAgOUgxVjNoMTR2OHoiPjwvcGF0aD48L3N2Zz4KICAgICAgICA8L2E+CgogICAgICAgIDwhLS0gPC90ZXh0YXJlYT4gLS0+PCEtLSAnImAgLS0+PGZvcm0gYWNjZXB0LWNoYXJzZXQ9IlVURi04IiBhY3Rpb249Ii9jeWNnaXQvd2ViLXN0eWxlL2RlbGV0ZS9tYXN0ZXIvc3JjL2ZvbnRzL2ljb25mb250LnR0ZiIgY2xhc3M9ImlubGluZS1mb3JtIiBkYXRhLWZvcm0tbm9uY2U9IjM2MDE1NjQyZDA0OWI1YjQ2NjcwZGQzNWRhYWIwYmUxYzk3NWI5ODQiIG1ldGhvZD0icG9zdCI+PGRpdiBzdHlsZT0ibWFyZ2luOjA7cGFkZGluZzowO2Rpc3BsYXk6aW5saW5lIj48aW5wdXQgbmFtZT0idXRmOCIgdHlwZT0iaGlkZGVuIiB2YWx1ZT0iJiN4MjcxMzsiIC8+PGlucHV0IG5hbWU9ImF1dGhlbnRpY2l0eV90b2tlbiIgdHlwZT0iaGlkZGVuIiB2YWx1ZT0iUUh6aW5nTzh5NVp5NC8xU216NXZ0UGpGMUNITm9INGFPN0VvRXdhZU1jYVJJM0J1Ynh0b0R0K04reklKQUViMU5FYmZ2SEI2TURxZkV6NXhUeVJrTlE9PSIgLz48L2Rpdj4KICAgICAgICAgIDxidXR0b24gY2xhc3M9ImJ0bi1vY3RpY29uIGJ0bi1vY3RpY29uLWRhbmdlciB0b29sdGlwcGVkIHRvb2x0aXBwZWQtbnciIHR5cGU9InN1Ym1pdCIKICAgICAgICAgICAgYXJpYS1sYWJlbD0iRm9yayB0aGlzIHByb2plY3QgYW5kIGRlbGV0ZSB0aGUgZmlsZSIgZGF0YS1kaXNhYmxlLXdpdGg+CiAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJvY3RpY29uIG9jdGljb24tdHJhc2hjYW4iIGhlaWdodD0iMTYiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEyIDE2IiB3aWR0aD0iMTIiPjxwYXRoIGQ9Ik0xMSAySDljMC0uNTUtLjQ1LTEtMS0xSDVjLS41NSAwLTEgLjQ1LTEgMUgyYy0uNTUgMC0xIC40NS0xIDF2MWMwIC41NS40NSAxIDEgMXY5YzAgLjU1LjQ1IDEgMSAxaDdjLjU1IDAgMS0uNDUgMS0xVjVjLjU1IDAgMS0uNDUgMS0xVjNjMC0uNTUtLjQ1LTEtMS0xem0tMSAxMkgzVjVoMXY4aDFWNWgxdjhoMVY1aDF2OGgxVjVoMXY5em0xLTEwSDJWM2g5djF6Ij48L3BhdGg+PC9zdmc+CiAgICAgICAgICA8L2J1dHRvbj4KPC9mb3JtPiAgPC9kaXY+CgogIDxkaXYgY2xhc3M9ImZpbGUtaW5mbyI+CiAgICA1NS4yIEtCCiAgPC9kaXY+CjwvZGl2PgoKICAKCiAgPGRpdiBpdGVtcHJvcD0idGV4dCIgY2xhc3M9ImJsb2Itd3JhcHBlciBkYXRhIHR5cGUtdGV4dCI+CiAgICAgIDxkaXYgY2xhc3M9ImltYWdlIj4KICAgICAgICAgIDxhIGhyZWY9Ii9jeWNnaXQvd2ViLXN0eWxlL2Jsb2IvbWFzdGVyL3NyYy9mb250cy9pY29uZm9udC50dGY/cmF3PXRydWUiPlZpZXcgUmF3PC9hPgogICAgICA8L2Rpdj4KICA8L2Rpdj4KCjwvZGl2PgoKPGJ1dHRvbiB0eXBlPSJidXR0b24iIGRhdGEtZmFjZWJveD0iI2p1bXAtdG8tbGluZSIgZGF0YS1mYWNlYm94LWNsYXNzPSJsaW5lanVtcCIgZGF0YS1ob3RrZXk9ImwiIGNsYXNzPSJoaWRkZW4iPkp1bXAgdG8gTGluZTwvYnV0dG9uPgo8ZGl2IGlkPSJqdW1wLXRvLWxpbmUiIHN0eWxlPSJkaXNwbGF5Om5vbmUiPgogIDwhLS0gPC90ZXh0YXJlYT4gLS0+PCEtLSAnImAgLS0+PGZvcm0gYWNjZXB0LWNoYXJzZXQ9IlVURi04IiBhY3Rpb249IiIgY2xhc3M9ImpzLWp1bXAtdG8tbGluZS1mb3JtIiBtZXRob2Q9ImdldCI+PGRpdiBzdHlsZT0ibWFyZ2luOjA7cGFkZGluZzowO2Rpc3BsYXk6aW5saW5lIj48aW5wdXQgbmFtZT0idXRmOCIgdHlwZT0iaGlkZGVuIiB2YWx1ZT0iJiN4MjcxMzsiIC8+PC9kaXY+CiAgICA8aW5wdXQgY2xhc3M9ImZvcm0tY29udHJvbCBsaW5lanVtcC1pbnB1dCBqcy1qdW1wLXRvLWxpbmUtZmllbGQiIHR5cGU9InRleHQiIHBsYWNlaG9sZGVyPSJKdW1wIHRvIGxpbmUmaGVsbGlwOyIgYXJpYS1sYWJlbD0iSnVtcCB0byBsaW5lIiBhdXRvZm9jdXM+CiAgICA8YnV0dG9uIHR5cGU9InN1Ym1pdCIgY2xhc3M9ImJ0biI+R288L2J1dHRvbj4KPC9mb3JtPjwvZGl2PgoKICA8L2Rpdj4KICA8ZGl2IGNsYXNzPSJtb2RhbC1iYWNrZHJvcCBqcy10b3VjaC1ldmVudHMiPjwvZGl2Pgo8L2Rpdj4KCgogICAgPC9kaXY+CiAgPC9kaXY+CgogICAgPC9kaXY+CgogICAgICAgIDxkaXYgY2xhc3M9ImNvbnRhaW5lciBzaXRlLWZvb3Rlci1jb250YWluZXIiPgogIDxkaXYgY2xhc3M9InNpdGUtZm9vdGVyIiByb2xlPSJjb250ZW50aW5mbyI+CiAgICA8dWwgY2xhc3M9InNpdGUtZm9vdGVyLWxpbmtzIHJpZ2h0Ij4KICAgICAgICA8bGk+PGEgaHJlZj0iaHR0cHM6Ly9zdGF0dXMuZ2l0aHViLmNvbS8iIGRhdGEtZ2EtY2xpY2s9IkZvb3RlciwgZ28gdG8gc3RhdHVzLCB0ZXh0OnN0YXR1cyI+U3RhdHVzPC9hPjwvbGk+CiAgICAgIDxsaT48YSBocmVmPSJodHRwczovL2RldmVsb3Blci5naXRodWIuY29tIiBkYXRhLWdhLWNsaWNrPSJGb290ZXIsIGdvIHRvIGFwaSwgdGV4dDphcGkiPkFQSTwvYT48L2xpPgogICAgICA8bGk+PGEgaHJlZj0iaHR0cHM6Ly90cmFpbmluZy5naXRodWIuY29tIiBkYXRhLWdhLWNsaWNrPSJGb290ZXIsIGdvIHRvIHRyYWluaW5nLCB0ZXh0OnRyYWluaW5nIj5UcmFpbmluZzwvYT48L2xpPgogICAgICA8bGk+PGEgaHJlZj0iaHR0cHM6Ly9zaG9wLmdpdGh1Yi5jb20iIGRhdGEtZ2EtY2xpY2s9IkZvb3RlciwgZ28gdG8gc2hvcCwgdGV4dDpzaG9wIj5TaG9wPC9hPjwvbGk+CiAgICAgICAgPGxpPjxhIGhyZWY9Imh0dHBzOi8vZ2l0aHViLmNvbS9ibG9nIiBkYXRhLWdhLWNsaWNrPSJGb290ZXIsIGdvIHRvIGJsb2csIHRleHQ6YmxvZyI+QmxvZzwvYT48L2xpPgogICAgICAgIDxsaT48YSBocmVmPSJodHRwczovL2dpdGh1Yi5jb20vYWJvdXQiIGRhdGEtZ2EtY2xpY2s9IkZvb3RlciwgZ28gdG8gYWJvdXQsIHRleHQ6YWJvdXQiPkFib3V0PC9hPjwvbGk+CgogICAgPC91bD4KCiAgICA8YSBocmVmPSJodHRwczovL2dpdGh1Yi5jb20iIGFyaWEtbGFiZWw9IkhvbWVwYWdlIiBjbGFzcz0ic2l0ZS1mb290ZXItbWFyayIgdGl0bGU9IkdpdEh1YiI+CiAgICAgIDxzdmcgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJvY3RpY29uIG9jdGljb24tbWFyay1naXRodWIiIGhlaWdodD0iMjQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE2IDE2IiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik04IDBDMy41OCAwIDAgMy41OCAwIDhjMCAzLjU0IDIuMjkgNi41MyA1LjQ3IDcuNTkuNC4wNy41NS0uMTcuNTUtLjM4IDAtLjE5LS4wMS0uODItLjAxLTEuNDktMi4wMS4zNy0yLjUzLS40OS0yLjY5LS45NC0uMDktLjIzLS40OC0uOTQtLjgyLTEuMTMtLjI4LS4xNS0uNjgtLjUyLS4wMS0uNTMuNjMtLjAxIDEuMDguNTggMS4yMy44Mi43MiAxLjIxIDEuODcuODcgMi4zMy42Ni4wNy0uNTIuMjgtLjg3LjUxLTEuMDctMS43OC0uMi0zLjY0LS44OS0zLjY0LTMuOTUgMC0uODcuMzEtMS41OS44Mi0yLjE1LS4wOC0uMi0uMzYtMS4wMi4wOC0yLjEyIDAgMCAuNjctLjIxIDIuMi44Mi42NC0uMTggMS4zMi0uMjcgMi0uMjcuNjggMCAxLjM2LjA5IDIgLjI3IDEuNTMtMS4wNCAyLjItLjgyIDIuMi0uODIuNDQgMS4xLjE2IDEuOTIuMDggMi4xMi41MS41Ni44MiAxLjI3LjgyIDIuMTUgMCAzLjA3LTEuODcgMy43NS0zLjY1IDMuOTUuMjkuMjUuNTQuNzMuNTQgMS40OCAwIDEuMDctLjAxIDEuOTMtLjAxIDIuMiAwIC4yMS4xNS40Ni41NS4zOEE4LjAxMyA4LjAxMyAwIDAgMCAxNiA4YzAtNC40Mi0zLjU4LTgtOC04eiI+PC9wYXRoPjwvc3ZnPgo8L2E+CiAgICA8dWwgY2xhc3M9InNpdGUtZm9vdGVyLWxpbmtzIj4KICAgICAgPGxpPiZjb3B5OyAyMDE2IDxzcGFuIHRpdGxlPSIwLjA3ODgzcyBmcm9tIGdpdGh1Yi1mZTEzNS1jcDEtcHJkLmlhZC5naXRodWIubmV0Ij5HaXRIdWI8L3NwYW4+LCBJbmMuPC9saT4KICAgICAgICA8bGk+PGEgaHJlZj0iaHR0cHM6Ly9naXRodWIuY29tL3NpdGUvdGVybXMiIGRhdGEtZ2EtY2xpY2s9IkZvb3RlciwgZ28gdG8gdGVybXMsIHRleHQ6dGVybXMiPlRlcm1zPC9hPjwvbGk+CiAgICAgICAgPGxpPjxhIGhyZWY9Imh0dHBzOi8vZ2l0aHViLmNvbS9zaXRlL3ByaXZhY3kiIGRhdGEtZ2EtY2xpY2s9IkZvb3RlciwgZ28gdG8gcHJpdmFjeSwgdGV4dDpwcml2YWN5Ij5Qcml2YWN5PC9hPjwvbGk+CiAgICAgICAgPGxpPjxhIGhyZWY9Imh0dHBzOi8vZ2l0aHViLmNvbS9zZWN1cml0eSIgZGF0YS1nYS1jbGljaz0iRm9vdGVyLCBnbyB0byBzZWN1cml0eSwgdGV4dDpzZWN1cml0eSI+U2VjdXJpdHk8L2E+PC9saT4KICAgICAgICA8bGk+PGEgaHJlZj0iaHR0cHM6Ly9naXRodWIuY29tL2NvbnRhY3QiIGRhdGEtZ2EtY2xpY2s9IkZvb3RlciwgZ28gdG8gY29udGFjdCwgdGV4dDpjb250YWN0Ij5Db250YWN0PC9hPjwvbGk+CiAgICAgICAgPGxpPjxhIGhyZWY9Imh0dHBzOi8vaGVscC5naXRodWIuY29tIiBkYXRhLWdhLWNsaWNrPSJGb290ZXIsIGdvIHRvIGhlbHAsIHRleHQ6aGVscCI+SGVscDwvYT48L2xpPgogICAgPC91bD4KICA8L2Rpdj4KPC9kaXY+CgoKCiAgICAKCiAgICA8ZGl2IGlkPSJhamF4LWVycm9yLW1lc3NhZ2UiIGNsYXNzPSJhamF4LWVycm9yLW1lc3NhZ2UgZmxhc2ggZmxhc2gtZXJyb3IiPgogICAgICA8c3ZnIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzcz0ib2N0aWNvbiBvY3RpY29uLWFsZXJ0IiBoZWlnaHQ9IjE2IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2Ij48cGF0aCBkPSJNOC44NjUgMS41MmMtLjE4LS4zMS0uNTEtLjUtLjg3LS41cy0uNjkuMTktLjg3LjVMLjI3NSAxMy41Yy0uMTguMzEtLjE4LjY5IDAgMSAuMTkuMzEuNTIuNS44Ny41aDEzLjdjLjM2IDAgLjY5LS4xOS44Ni0uNS4xNy0uMzEuMTgtLjY5LjAxLTFMOC44NjUgMS41MnpNOC45OTUgMTNoLTJ2LTJoMnYyem0wLTNoLTJWNmgydjR6Ij48L3BhdGg+PC9zdmc+CiAgICAgIDxidXR0b24gdHlwZT0iYnV0dG9uIiBjbGFzcz0iZmxhc2gtY2xvc2UganMtZmxhc2gtY2xvc2UganMtYWpheC1lcnJvci1kaXNtaXNzIiBhcmlhLWxhYmVsPSJEaXNtaXNzIGVycm9yIj4KICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzcz0ib2N0aWNvbiBvY3RpY29uLXgiIGhlaWdodD0iMTYiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEyIDE2IiB3aWR0aD0iMTIiPjxwYXRoIGQ9Ik03LjQ4IDhsMy43NSAzLjc1LTEuNDggMS40OEw2IDkuNDhsLTMuNzUgMy43NS0xLjQ4LTEuNDhMNC41MiA4IC43NyA0LjI1bDEuNDgtMS40OEw2IDYuNTJsMy43NS0zLjc1IDEuNDggMS40OHoiPjwvcGF0aD48L3N2Zz4KICAgICAgPC9idXR0b24+CiAgICAgIFNvbWV0aGluZyB3ZW50IHdyb25nIHdpdGggdGhhdCByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluLgogICAgPC9kaXY+CgoKICAgICAgCiAgICAgIDxzY3JpcHQgY3Jvc3NvcmlnaW49ImFub255bW91cyIgaW50ZWdyaXR5PSJzaGEyNTYtK2FRR0YrWHFjVFF0eFhFRFZVc0hvOEh0eUljU3NFM2hvRUN1MUVpUm9SMD0iIHNyYz0iaHR0cHM6Ly9hc3NldHMtY2RuLmdpdGh1Yi5jb20vYXNzZXRzL2ZyYW1ld29ya3MtZjlhNDA2MTdlNWVhNzEzNDJkYzU3MTAzNTU0YjA3YTNjMWVkYzg4NzEyYjA0ZGUxYTA0MGFlZDQ0ODkxYTExZC5qcyI+PC9zY3JpcHQ+CiAgICAgIDxzY3JpcHQgYXN5bmM9ImFzeW5jIiBjcm9zc29yaWdpbj0iYW5vbnltb3VzIiBpbnRlZ3JpdHk9InNoYTI1Ni1GYUFSdkJldVdNR010MFY5WVpRcEJLUDRmWDFkWmZjK3B1dkV6NllQUGJjPSIgc3JjPSJodHRwczovL2Fzc2V0cy1jZG4uZ2l0aHViLmNvbS9hc3NldHMvZ2l0aHViLTE1YTAxMWJjMTdhZTU4YzE4Y2I3NDU3ZDYxOTQyOTA0YTNmODdkN2Q1ZDY1ZjczZWE2ZWJjNGNmYTYwZjNkYjcuanMiPjwvc2NyaXB0PgogICAgICAKICAgICAgCiAgICAgIAogICAgICAKICAgICAgCiAgICAgIAogICAgPGRpdiBjbGFzcz0ianMtc3RhbGUtc2Vzc2lvbi1mbGFzaCBzdGFsZS1zZXNzaW9uLWZsYXNoIGZsYXNoIGZsYXNoLXdhcm4gZmxhc2gtYmFubmVyIGhpZGRlbiI+CiAgICAgIDxzdmcgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJvY3RpY29uIG9jdGljb24tYWxlcnQiIGhlaWdodD0iMTYiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE2IDE2IiB3aWR0aD0iMTYiPjxwYXRoIGQ9Ik04Ljg2NSAxLjUyYy0uMTgtLjMxLS41MS0uNS0uODctLjVzLS42OS4xOS0uODcuNUwuMjc1IDEzLjVjLS4xOC4zMS0uMTguNjkgMCAxIC4xOS4zMS41Mi41Ljg3LjVoMTMuN2MuMzYgMCAuNjktLjE5Ljg2LS41LjE3LS4zMS4xOC0uNjkuMDEtMUw4Ljg2NSAxLjUyek04Ljk5NSAxM2gtMnYtMmgydjJ6bTAtM2gtMlY2aDJ2NHoiPjwvcGF0aD48L3N2Zz4KICAgICAgPHNwYW4gY2xhc3M9InNpZ25lZC1pbi10YWItZmxhc2giPllvdSBzaWduZWQgaW4gd2l0aCBhbm90aGVyIHRhYiBvciB3aW5kb3cuIDxhIGhyZWY9IiI+UmVsb2FkPC9hPiB0byByZWZyZXNoIHlvdXIgc2Vzc2lvbi48L3NwYW4+CiAgICAgIDxzcGFuIGNsYXNzPSJzaWduZWQtb3V0LXRhYi1mbGFzaCI+WW91IHNpZ25lZCBvdXQgaW4gYW5vdGhlciB0YWIgb3Igd2luZG93LiA8YSBocmVmPSIiPlJlbG9hZDwvYT4gdG8gcmVmcmVzaCB5b3VyIHNlc3Npb24uPC9zcGFuPgogICAgPC9kaXY+CiAgICA8ZGl2IGNsYXNzPSJmYWNlYm94IiBpZD0iZmFjZWJveCIgc3R5bGU9ImRpc3BsYXk6bm9uZTsiPgogIDxkaXYgY2xhc3M9ImZhY2Vib3gtcG9wdXAiPgogICAgPGRpdiBjbGFzcz0iZmFjZWJveC1jb250ZW50IiByb2xlPSJkaWFsb2ciIGFyaWEtbGFiZWxsZWRieT0iZmFjZWJveC1oZWFkZXIiIGFyaWEtZGVzY3JpYmVkYnk9ImZhY2Vib3gtZGVzY3JpcHRpb24iPgogICAgPC9kaXY+CiAgICA8YnV0dG9uIHR5cGU9ImJ1dHRvbiIgY2xhc3M9ImZhY2Vib3gtY2xvc2UganMtZmFjZWJveC1jbG9zZSIgYXJpYS1sYWJlbD0iQ2xvc2UgbW9kYWwiPgogICAgICA8c3ZnIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzcz0ib2N0aWNvbiBvY3RpY29uLXgiIGhlaWdodD0iMTYiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEyIDE2IiB3aWR0aD0iMTIiPjxwYXRoIGQ9Ik03LjQ4IDhsMy43NSAzLjc1LTEuNDggMS40OEw2IDkuNDhsLTMuNzUgMy43NS0xLjQ4LTEuNDhMNC41MiA4IC43NyA0LjI1bDEuNDgtMS40OEw2IDYuNTJsMy43NS0zLjc1IDEuNDggMS40OHoiPjwvcGF0aD48L3N2Zz4KICAgIDwvYnV0dG9uPgogIDwvZGl2Pgo8L2Rpdj4KCiAgPC9ib2R5Pgo8L2h0bWw+Cgo="

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,CgoKCjwhRE9DVFlQRSBodG1sPgo8aHRtbCBsYW5nPSJlbiIgY2xhc3M9IiBpcy1jb3B5LWVuYWJsZWQgZW1vamktc2l6ZS1ib29zdCBpcy11MmYtZW5hYmxlZCI+CiAgPGhlYWQgcHJlZml4PSJvZzogaHR0cDovL29ncC5tZS9ucyMgZmI6IGh0dHA6Ly9vZ3AubWUvbnMvZmIjIG9iamVjdDogaHR0cDovL29ncC5tZS9ucy9vYmplY3QjIGFydGljbGU6IGh0dHA6Ly9vZ3AubWUvbnMvYXJ0aWNsZSMgcHJvZmlsZTogaHR0cDovL29ncC5tZS9ucy9wcm9maWxlIyI+CiAgICA8bWV0YSBjaGFyc2V0PSd1dGYtOCc+CgogICAgPGxpbmsgY3Jvc3NvcmlnaW49ImFub255bW91cyIgaHJlZj0iaHR0cHM6Ly9hc3NldHMtY2RuLmdpdGh1Yi5jb20vYXNzZXRzL2ZyYW1ld29ya3MtMDZlNGQ4ZjU5ZjViOTI3ZjEzOTE5YzQyM2Y0MGYwODg4ZjM3ZjlhZjdmNDI2ZTQwMjA5NDhiMDBiOTM3MTA1OS5jc3MiIGludGVncml0eT0ic2hhMjU2LUJ1VFk5Wjlia244VGtaeENQMER3aUk4MythOS9RbTVBSUpTTEFMazNFRms9IiBtZWRpYT0iYWxsIiByZWw9InN0eWxlc2hlZXQiIC8+CiAgICA8bGluayBjcm9zc29yaWdpbj0iYW5vbnltb3VzIiBocmVmPSJodHRwczovL2Fzc2V0cy1jZG4uZ2l0aHViLmNvbS9hc3NldHMvZ2l0aHViLWJkMGM2MzhjNjE5NWUwYmIzYmU5MWU2OGY2NDEzYTM4Yjc2YmE3OTI1OGQxMzY3NWNhMmJhZGE1NDkzY2M3YTIuY3NzIiBpbnRlZ3JpdHk9InNoYTI1Ni12UXhqakdHVjRMczc2UjVvOWtFNk9MZHJwNUpZMFRaMXlpdXRwVWs4eDZJPSIgbWVkaWE9ImFsbCIgcmVsPSJzdHlsZXNoZWV0IiAvPgogICAgCiAgICAKICAgIAogICAgCiAgICAKCiAgICA8bGluayBhcz0ic2NyaXB0IiBocmVmPSJodHRwczovL2Fzc2V0cy1jZG4uZ2l0aHViLmNvbS9hc3NldHMvZnJhbWV3b3Jrcy1mOWE0MDYxN2U1ZWE3MTM0MmRjNTcxMDM1NTRiMDdhM2MxZWRjODg3MTJiMDRkZTFhMDQwYWVkNDQ4OTFhMTFkLmpzIiByZWw9InByZWxvYWQiIC8+CiAgICAKICAgIDxsaW5rIGFzPSJzY3JpcHQiIGhyZWY9Imh0dHBzOi8vYXNzZXRzLWNkbi5naXRodWIuY29tL2Fzc2V0cy9naXRodWItMTVhMDExYmMxN2FlNThjMThjYjc0NTdkNjE5NDI5MDRhM2Y4N2Q3ZDVkNjVmNzNlYTZlYmM0Y2ZhNjBmM2RiNy5qcyIgcmVsPSJwcmVsb2FkIiAvPgoKICAgIDxtZXRhIGh0dHAtZXF1aXY9IlgtVUEtQ29tcGF0aWJsZSIgY29udGVudD0iSUU9ZWRnZSI+CiAgICA8bWV0YSBodHRwLWVxdWl2PSJDb250ZW50LUxhbmd1YWdlIiBjb250ZW50PSJlbiI+CiAgICA8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoIj4KICAgIAogICAgCiAgICA8dGl0bGU+d2ViLXN0eWxlL2ljb25mb250LnN2ZyBhdCBtYXN0ZXIgwrcgY3ljZ2l0L3dlYi1zdHlsZTwvdGl0bGU+CiAgICA8bGluayByZWw9InNlYXJjaCIgdHlwZT0iYXBwbGljYXRpb24vb3BlbnNlYXJjaGRlc2NyaXB0aW9uK3htbCIgaHJlZj0iL29wZW5zZWFyY2gueG1sIiB0aXRsZT0iR2l0SHViIj4KICAgIDxsaW5rIHJlbD0iZmx1aWQtaWNvbiIgaHJlZj0iaHR0cHM6Ly9naXRodWIuY29tL2ZsdWlkaWNvbi5wbmciIHRpdGxlPSJHaXRIdWIiPgogICAgPGxpbmsgcmVsPSJhcHBsZS10b3VjaC1pY29uIiBocmVmPSIvYXBwbGUtdG91Y2gtaWNvbi5wbmciPgogICAgPGxpbmsgcmVsPSJhcHBsZS10b3VjaC1pY29uIiBzaXplcz0iNTd4NTciIGhyZWY9Ii9hcHBsZS10b3VjaC1pY29uLTU3eDU3LnBuZyI+CiAgICA8bGluayByZWw9ImFwcGxlLXRvdWNoLWljb24iIHNpemVzPSI2MHg2MCIgaHJlZj0iL2FwcGxlLXRvdWNoLWljb24tNjB4NjAucG5nIj4KICAgIDxsaW5rIHJlbD0iYXBwbGUtdG91Y2gtaWNvbiIgc2l6ZXM9IjcyeDcyIiBocmVmPSIvYXBwbGUtdG91Y2gtaWNvbi03Mng3Mi5wbmciPgogICAgPGxpbmsgcmVsPSJhcHBsZS10b3VjaC1pY29uIiBzaXplcz0iNzZ4NzYiIGhyZWY9Ii9hcHBsZS10b3VjaC1pY29uLTc2eDc2LnBuZyI+CiAgICA8bGluayByZWw9ImFwcGxlLXRvdWNoLWljb24iIHNpemVzPSIxMTR4MTE0IiBocmVmPSIvYXBwbGUtdG91Y2gtaWNvbi0xMTR4MTE0LnBuZyI+CiAgICA8bGluayByZWw9ImFwcGxlLXRvdWNoLWljb24iIHNpemVzPSIxMjB4MTIwIiBocmVmPSIvYXBwbGUtdG91Y2gtaWNvbi0xMjB4MTIwLnBuZyI+CiAgICA8bGluayByZWw9ImFwcGxlLXRvdWNoLWljb24iIHNpemVzPSIxNDR4MTQ0IiBocmVmPSIvYXBwbGUtdG91Y2gtaWNvbi0xNDR4MTQ0LnBuZyI+CiAgICA8bGluayByZWw9ImFwcGxlLXRvdWNoLWljb24iIHNpemVzPSIxNTJ4MTUyIiBocmVmPSIvYXBwbGUtdG91Y2gtaWNvbi0xNTJ4MTUyLnBuZyI+CiAgICA8bGluayByZWw9ImFwcGxlLXRvdWNoLWljb24iIHNpemVzPSIxODB4MTgwIiBocmVmPSIvYXBwbGUtdG91Y2gtaWNvbi0xODB4MTgwLnBuZyI+CiAgICA8bWV0YSBwcm9wZXJ0eT0iZmI6YXBwX2lkIiBjb250ZW50PSIxNDAxNDg4NjkzNDM2NTI4Ij4KCiAgICAgIDxtZXRhIGNvbnRlbnQ9Imh0dHBzOi8vYXZhdGFyczAuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvMTMxMTIwMTQ/dj0zJmFtcDtzPTQwMCIgbmFtZT0idHdpdHRlcjppbWFnZTpzcmMiIC8+PG1ldGEgY29udGVudD0iQGdpdGh1YiIgbmFtZT0idHdpdHRlcjpzaXRlIiAvPjxtZXRhIGNvbnRlbnQ9InN1bW1hcnkiIG5hbWU9InR3aXR0ZXI6Y2FyZCIgLz48bWV0YSBjb250ZW50PSJjeWNnaXQvd2ViLXN0eWxlIiBuYW1lPSJ0d2l0dGVyOnRpdGxlIiAvPjxtZXRhIGNvbnRlbnQ9IndlYi1zdHlsZSAtIHdlYuWFrOeUqOagt+W8j+e7hOS7tuW6kyIgbmFtZT0idHdpdHRlcjpkZXNjcmlwdGlvbiIgLz4KICAgICAgPG1ldGEgY29udGVudD0iaHR0cHM6Ly9hdmF0YXJzMC5naXRodWJ1c2VyY29udGVudC5jb20vdS8xMzExMjAxND92PTMmYW1wO3M9NDAwIiBwcm9wZXJ0eT0ib2c6aW1hZ2UiIC8+PG1ldGEgY29udGVudD0iR2l0SHViIiBwcm9wZXJ0eT0ib2c6c2l0ZV9uYW1lIiAvPjxtZXRhIGNvbnRlbnQ9Im9iamVjdCIgcHJvcGVydHk9Im9nOnR5cGUiIC8+PG1ldGEgY29udGVudD0iY3ljZ2l0L3dlYi1zdHlsZSIgcHJvcGVydHk9Im9nOnRpdGxlIiAvPjxtZXRhIGNvbnRlbnQ9Imh0dHBzOi8vZ2l0aHViLmNvbS9jeWNnaXQvd2ViLXN0eWxlIiBwcm9wZXJ0eT0ib2c6dXJsIiAvPjxtZXRhIGNvbnRlbnQ9IndlYi1zdHlsZSAtIHdlYuWFrOeUqOagt+W8j+e7hOS7tuW6kyIgcHJvcGVydHk9Im9nOmRlc2NyaXB0aW9uIiAvPgogICAgICA8bWV0YSBuYW1lPSJicm93c2VyLXN0YXRzLXVybCIgY29udGVudD0iaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9fcHJpdmF0ZS9icm93c2VyL3N0YXRzIj4KICAgIDxtZXRhIG5hbWU9ImJyb3dzZXItZXJyb3JzLXVybCIgY29udGVudD0iaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9fcHJpdmF0ZS9icm93c2VyL2Vycm9ycyI+CiAgICA8bGluayByZWw9ImFzc2V0cyIgaHJlZj0iaHR0cHM6Ly9hc3NldHMtY2RuLmdpdGh1Yi5jb20vIj4KICAgIDxsaW5rIHJlbD0id2ViLXNvY2tldCIgaHJlZj0id3NzOi8vbGl2ZS5naXRodWIuY29tL19zb2NrZXRzL01Ua3dPRFEyT21JNU56UXhNbVl6T1RZNVpqZGlOVGt5TWprd016YzRZV1JtTVRVeU9UYzRPamM0TlRkbVptWmtZVFE1TTJNek0yUTBNalV6TXpka1lURmhaV1UwTmpJd09HVTJNelptTVRneFpqVmtPR1k1WmpjMU1XSXpNV1U1WldKa01tSTJOams9LS02MjgzMjAyYzMwYTRlMTY4NmUwZjE3MWEyM2UyYTMzNjhiOWE5Y2ExIj4KICAgIDxtZXRhIG5hbWU9InBqYXgtdGltZW91dCIgY29udGVudD0iMTAwMCI+CiAgICA8bGluayByZWw9InN1ZG8tbW9kYWwiIGhyZWY9Ii9zZXNzaW9ucy9zdWRvX21vZGFsIj4KCiAgICA8bWV0YSBuYW1lPSJtc2FwcGxpY2F0aW9uLVRpbGVJbWFnZSIgY29udGVudD0iL3dpbmRvd3MtdGlsZS5wbmciPgogICAgPG1ldGEgbmFtZT0ibXNhcHBsaWNhdGlvbi1UaWxlQ29sb3IiIGNvbnRlbnQ9IiNmZmZmZmYiPgogICAgPG1ldGEgbmFtZT0ic2VsZWN0ZWQtbGluayIgdmFsdWU9InJlcG9fc291cmNlIiBkYXRhLXBqYXgtdHJhbnNpZW50PgoKICAgIDxtZXRhIG5hbWU9Imdvb2dsZS1zaXRlLXZlcmlmaWNhdGlvbiIgY29udGVudD0iS1Q1Z3M4aDB3dmFhZ0xLQVZXcThiYmVOd25aWksxcjFYUXlzWDN4dXJMVSI+CjxtZXRhIG5hbWU9Imdvb2dsZS1zaXRlLXZlcmlmaWNhdGlvbiIgY29udGVudD0iWnpoVnlFRndiN3czZTAtdU9UbHRtOEpzY2syRjVTdFZpaEQwZXh3MmZzQSI+CiAgICA8bWV0YSBuYW1lPSJnb29nbGUtYW5hbHl0aWNzIiBjb250ZW50PSJVQS0zNzY5NjkxLTIiPgoKPG1ldGEgY29udGVudD0iY29sbGVjdG9yLmdpdGh1YmFwcC5jb20iIG5hbWU9Im9jdG9seXRpY3MtaG9zdCIgLz48bWV0YSBjb250ZW50PSJnaXRodWIiIG5hbWU9Im9jdG9seXRpY3MtYXBwLWlkIiAvPjxtZXRhIGNvbnRlbnQ9Ijc4MzQxODk2OjEyRDQ6MTk1QjAzMkI6NTc3MDBCMjAiIG5hbWU9Im9jdG9seXRpY3MtZGltZW5zaW9uLXJlcXVlc3RfaWQiIC8+PG1ldGEgY29udGVudD0iMTkwODQ2IiBuYW1lPSJvY3RvbHl0aWNzLWFjdG9yLWlkIiAvPjxtZXRhIGNvbnRlbnQ9IlJ1YnlMb3V2cmUiIG5hbWU9Im9jdG9seXRpY3MtYWN0b3ItbG9naW4iIC8+PG1ldGEgY29udGVudD0iYTEwNGQ4ZmEzNWI3OWNlYWFkNzU1YWVmNjQ1MGUyMjUwMTcxMWYyMzdiM2Q5YmU5YTBmMzc4MTAyMmZlNDJjYyIgbmFtZT0ib2N0b2x5dGljcy1hY3Rvci1oYXNoIiAvPgo8bWV0YSBjb250ZW50PSIvJmx0O3VzZXItbmFtZSZndDsvJmx0O3JlcG8tbmFtZSZndDsvYmxvYi9zaG93IiBkYXRhLXBqYXgtdHJhbnNpZW50PSJ0cnVlIiBuYW1lPSJhbmFseXRpY3MtbG9jYXRpb24iIC8+CgoKCiAgPG1ldGEgY2xhc3M9ImpzLWdhLXNldCIgbmFtZT0iZGltZW5zaW9uMSIgY29udGVudD0iTG9nZ2VkIEluIj4KCgoKICAgICAgICA8bWV0YSBuYW1lPSJob3N0bmFtZSIgY29udGVudD0iZ2l0aHViLmNvbSI+CiAgICA8bWV0YSBuYW1lPSJ1c2VyLWxvZ2luIiBjb250ZW50PSJSdWJ5TG91dnJlIj4KCiAgICAgICAgPG1ldGEgbmFtZT0iZXhwZWN0ZWQtaG9zdG5hbWUiIGNvbnRlbnQ9ImdpdGh1Yi5jb20iPgogICAgICA8bWV0YSBuYW1lPSJqcy1wcm94eS1zaXRlLWRldGVjdGlvbi1wYXlsb2FkIiBjb250ZW50PSJPV1F3WTJVM1l6WTNZVE5sTTJOaU0yRXlPRGRpT1RjNE9XUmpNR00wTUdZeE16UXhPR1poWVdFeU1EazBaVEkyWVdRNE9URmtNVE0wTWpWbVlXUTVObng3SW5KbGJXOTBaVjloWkdSeVpYTnpJam9pTVRJd0xqVXlMakkwTGpFMU1DSXNJbkpsY1hWbGMzUmZhV1FpT2lJM09ETTBNVGc1TmpveE1rUTBPakU1TlVJd016SkNPalUzTnpBd1FqSXdJaXdpZEdsdFpYTjBZVzF3SWpveE5EWTJPVFl3TmpjNGZRPT0iPgoKCiAgICAgIDxsaW5rIHJlbD0ibWFzay1pY29uIiBocmVmPSJodHRwczovL2Fzc2V0cy1jZG4uZ2l0aHViLmNvbS9waW5uZWQtb2N0b2NhdC5zdmciIGNvbG9yPSIjNDA3OGMwIj4KICAgICAgPGxpbmsgcmVsPSJpY29uIiB0eXBlPSJpbWFnZS94LWljb24iIGhyZWY9Imh0dHBzOi8vYXNzZXRzLWNkbi5naXRodWIuY29tL2Zhdmljb24uaWNvIj4KCiAgICA8bWV0YSBuYW1lPSJodG1sLXNhZmUtbm9uY2UiIGNvbnRlbnQ9IjQ5MDdjYzA2ZWRiMzNmZTMzMWU2MmQwMmYzOTk3YWYzYjlmNTMwNWQiPgogICAgPG1ldGEgY29udGVudD0iMzYwMTU2NDJkMDQ5YjViNDY2NzBkZDM1ZGFhYjBiZTFjOTc1Yjk4NCIgbmFtZT0iZm9ybS1ub25jZSIgLz4KCiAgICA8bWV0YSBodHRwLWVxdWl2PSJ4LXBqYXgtdmVyc2lvbiIgY29udGVudD0iMDhiZDBlYjkzMGYyMzcyMmQ5NzBkZDdmNzdhNzFlYmEiPgogICAgCgogICAgICAKICA8bWV0YSBuYW1lPSJkZXNjcmlwdGlvbiIgY29udGVudD0id2ViLXN0eWxlIC0gd2Vi5YWs55So5qC35byP57uE5Lu25bqTIj4KICA8bWV0YSBuYW1lPSJnby1pbXBvcnQiIGNvbnRlbnQ9ImdpdGh1Yi5jb20vY3ljZ2l0L3dlYi1zdHlsZSBnaXQgaHR0cHM6Ly9naXRodWIuY29tL2N5Y2dpdC93ZWItc3R5bGUuZ2l0Ij4KCiAgPG1ldGEgY29udGVudD0iMTMxMTIwMTQiIG5hbWU9Im9jdG9seXRpY3MtZGltZW5zaW9uLXVzZXJfaWQiIC8+PG1ldGEgY29udGVudD0iY3ljZ2l0IiBuYW1lPSJvY3RvbHl0aWNzLWRpbWVuc2lvbi11c2VyX2xvZ2luIiAvPjxtZXRhIGNvbnRlbnQ9IjU5NzI1MTI1IiBuYW1lPSJvY3RvbHl0aWNzLWRpbWVuc2lvbi1yZXBvc2l0b3J5X2lkIiAvPjxtZXRhIGNvbnRlbnQ9ImN5Y2dpdC93ZWItc3R5bGUiIG5hbWU9Im9jdG9seXRpY3MtZGltZW5zaW9uLXJlcG9zaXRvcnlfbndvIiAvPjxtZXRhIGNvbnRlbnQ9InRydWUiIG5hbWU9Im9jdG9seXRpY3MtZGltZW5zaW9uLXJlcG9zaXRvcnlfcHVibGljIiAvPjxtZXRhIGNvbnRlbnQ9ImZhbHNlIiBuYW1lPSJvY3RvbHl0aWNzLWRpbWVuc2lvbi1yZXBvc2l0b3J5X2lzX2ZvcmsiIC8+PG1ldGEgY29udGVudD0iNTk3MjUxMjUiIG5hbWU9Im9jdG9seXRpY3MtZGltZW5zaW9uLXJlcG9zaXRvcnlfbmV0d29ya19yb290X2lkIiAvPjxtZXRhIGNvbnRlbnQ9ImN5Y2dpdC93ZWItc3R5bGUiIG5hbWU9Im9jdG9seXRpY3MtZGltZW5zaW9uLXJlcG9zaXRvcnlfbmV0d29ya19yb290X253byIgLz4KICA8bGluayBocmVmPSJodHRwczovL2dpdGh1Yi5jb20vY3ljZ2l0L3dlYi1zdHlsZS9jb21taXRzL21hc3Rlci5hdG9tIiByZWw9ImFsdGVybmF0ZSIgdGl0bGU9IlJlY2VudCBDb21taXRzIHRvIHdlYi1zdHlsZTptYXN0ZXIiIHR5cGU9ImFwcGxpY2F0aW9uL2F0b20reG1sIj4KCgogICAgICA8bGluayByZWw9ImNhbm9uaWNhbCIgaHJlZj0iaHR0cHM6Ly9naXRodWIuY29tL2N5Y2dpdC93ZWItc3R5bGUvYmxvYi9tYXN0ZXIvc3JjL2ZvbnRzL2ljb25mb250LnN2ZyIgZGF0YS1wamF4LXRyYW5zaWVudD4KICA8L2hlYWQ+CgoKICA8Ym9keSBjbGFzcz0ibG9nZ2VkLWluICAgZW52LXByb2R1Y3Rpb24gbWFjaW50b3NoIHZpcy1wdWJsaWMgcGFnZS1ibG9iIj4KICAgIDxkaXYgaWQ9ImpzLXBqYXgtbG9hZGVyLWJhciIgY2xhc3M9InBqYXgtbG9hZGVyLWJhciI+PC9kaXY+CiAgICA8YSBocmVmPSIjc3RhcnQtb2YtY29udGVudCIgdGFiaW5kZXg9IjEiIGNsYXNzPSJhY2Nlc3NpYmlsaXR5LWFpZCBqcy1za2lwLXRvLWNvbnRlbnQiPlNraXAgdG8gY29udGVudDwvYT4KCiAgICAKICAgIAogICAgCgoKCiAgICAgICAgPGRpdiBjbGFzcz0iaGVhZGVyIGhlYWRlci1sb2dnZWQtaW4gdHJ1ZSIgcm9sZT0iYmFubmVyIj4KICA8ZGl2IGNsYXNzPSJjb250YWluZXIgY2xlYXJmaXgiPgoKICAgIDxhIGNsYXNzPSJoZWFkZXItbG9nby1pbnZlcnRvY2F0IiBocmVmPSJodHRwczovL2dpdGh1Yi5jb20vIiBkYXRhLWhvdGtleT0iZyBkIiBhcmlhLWxhYmVsPSJIb21lcGFnZSIgZGF0YS1nYS1jbGljaz0iSGVhZGVyLCBnbyB0byBkYXNoYm9hcmQsIGljb246bG9nbyI+CiAgPHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1tYXJrLWdpdGh1YiIgaGVpZ2h0PSIyOCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTYgMTYiIHdpZHRoPSIyOCI+PHBhdGggZD0iTTggMEMzLjU4IDAgMCAzLjU4IDAgOGMwIDMuNTQgMi4yOSA2LjUzIDUuNDcgNy41OS40LjA3LjU1LS4xNy41NS0uMzggMC0uMTktLjAxLS44Mi0uMDEtMS40OS0yLjAxLjM3LTIuNTMtLjQ5LTIuNjktLjk0LS4wOS0uMjMtLjQ4LS45NC0uODItMS4xMy0uMjgtLjE1LS42OC0uNTItLjAxLS41My42My0uMDEgMS4wOC41OCAxLjIzLjgyLjcyIDEuMjEgMS44Ny44NyAyLjMzLjY2LjA3LS41Mi4yOC0uODcuNTEtMS4wNy0xLjc4LS4yLTMuNjQtLjg5LTMuNjQtMy45NSAwLS44Ny4zMS0xLjU5LjgyLTIuMTUtLjA4LS4yLS4zNi0xLjAyLjA4LTIuMTIgMCAwIC42Ny0uMjEgMi4yLjgyLjY0LS4xOCAxLjMyLS4yNyAyLS4yNy42OCAwIDEuMzYuMDkgMiAuMjcgMS41My0xLjA0IDIuMi0uODIgMi4yLS44Mi40NCAxLjEuMTYgMS45Mi4wOCAyLjEyLjUxLjU2LjgyIDEuMjcuODIgMi4xNSAwIDMuMDctMS44NyAzLjc1LTMuNjUgMy45NS4yOS4yNS41NC43My41NCAxLjQ4IDAgMS4wNy0uMDEgMS45My0uMDEgMi4yIDAgLjIxLjE1LjQ2LjU1LjM4QTguMDEzIDguMDEzIDAgMCAwIDE2IDhjMC00LjQyLTMuNTgtOC04LTh6Ij48L3BhdGg+PC9zdmc+CjwvYT4KCgogICAgICAgIDxkaXYgY2xhc3M9ImhlYWRlci1zZWFyY2ggc2NvcGVkLXNlYXJjaCBzaXRlLXNjb3BlZC1zZWFyY2gganMtc2l0ZS1zZWFyY2giIHJvbGU9InNlYXJjaCI+CiAgPCEtLSA8L3RleHRhcmVhPiAtLT48IS0tICciYCAtLT48Zm9ybSBhY2NlcHQtY2hhcnNldD0iVVRGLTgiIGFjdGlvbj0iL2N5Y2dpdC93ZWItc3R5bGUvc2VhcmNoIiBjbGFzcz0ianMtc2l0ZS1zZWFyY2gtZm9ybSIgZGF0YS1zY29wZWQtc2VhcmNoLXVybD0iL2N5Y2dpdC93ZWItc3R5bGUvc2VhcmNoIiBkYXRhLXVuc2NvcGVkLXNlYXJjaC11cmw9Ii9zZWFyY2giIG1ldGhvZD0iZ2V0Ij48ZGl2IHN0eWxlPSJtYXJnaW46MDtwYWRkaW5nOjA7ZGlzcGxheTppbmxpbmUiPjxpbnB1dCBuYW1lPSJ1dGY4IiB0eXBlPSJoaWRkZW4iIHZhbHVlPSImI3gyNzEzOyIgLz48L2Rpdj4KICAgIDxsYWJlbCBjbGFzcz0iZm9ybS1jb250cm9sIGhlYWRlci1zZWFyY2gtd3JhcHBlciBqcy1jaHJvbWVsZXNzLWlucHV0LWNvbnRhaW5lciI+CiAgICAgIDxkaXYgY2xhc3M9ImhlYWRlci1zZWFyY2gtc2NvcGUiPlRoaXMgcmVwb3NpdG9yeTwvZGl2PgogICAgICA8aW5wdXQgdHlwZT0idGV4dCIKICAgICAgICBjbGFzcz0iZm9ybS1jb250cm9sIGhlYWRlci1zZWFyY2gtaW5wdXQganMtc2l0ZS1zZWFyY2gtZm9jdXMganMtc2l0ZS1zZWFyY2gtZmllbGQgaXMtY2xlYXJhYmxlIgogICAgICAgIGRhdGEtaG90a2V5PSJzIgogICAgICAgIG5hbWU9InEiCiAgICAgICAgcGxhY2Vob2xkZXI9IlNlYXJjaCIKICAgICAgICBhcmlhLWxhYmVsPSJTZWFyY2ggdGhpcyByZXBvc2l0b3J5IgogICAgICAgIGRhdGEtdW5zY29wZWQtcGxhY2Vob2xkZXI9IlNlYXJjaCBHaXRIdWIiCiAgICAgICAgZGF0YS1zY29wZWQtcGxhY2Vob2xkZXI9IlNlYXJjaCIKICAgICAgICB0YWJpbmRleD0iMSIKICAgICAgICBhdXRvY2FwaXRhbGl6ZT0ib2ZmIj4KICAgIDwvbGFiZWw+CjwvZm9ybT48L2Rpdj4KCgogICAgICA8dWwgY2xhc3M9ImhlYWRlci1uYXYgbGVmdCIgcm9sZT0ibmF2aWdhdGlvbiI+CiAgICAgICAgPGxpIGNsYXNzPSJoZWFkZXItbmF2LWl0ZW0iPgogICAgICAgICAgPGEgaHJlZj0iL3B1bGxzIiBjbGFzcz0ianMtc2VsZWN0ZWQtbmF2aWdhdGlvbi1pdGVtIGhlYWRlci1uYXYtbGluayIgZGF0YS1nYS1jbGljaz0iSGVhZGVyLCBjbGljaywgTmF2IG1lbnUgLSBpdGVtOnB1bGxzIGNvbnRleHQ6dXNlciIgZGF0YS1ob3RrZXk9ImcgcCIgZGF0YS1zZWxlY3RlZC1saW5rcz0iL3B1bGxzIC9wdWxscy9hc3NpZ25lZCAvcHVsbHMvbWVudGlvbmVkIC9wdWxscyI+CiAgICAgICAgICAgIFB1bGwgcmVxdWVzdHMKPC9hPiAgICAgICAgPC9saT4KICAgICAgICA8bGkgY2xhc3M9ImhlYWRlci1uYXYtaXRlbSI+CiAgICAgICAgICA8YSBocmVmPSIvaXNzdWVzIiBjbGFzcz0ianMtc2VsZWN0ZWQtbmF2aWdhdGlvbi1pdGVtIGhlYWRlci1uYXYtbGluayIgZGF0YS1nYS1jbGljaz0iSGVhZGVyLCBjbGljaywgTmF2IG1lbnUgLSBpdGVtOmlzc3VlcyBjb250ZXh0OnVzZXIiIGRhdGEtaG90a2V5PSJnIGkiIGRhdGEtc2VsZWN0ZWQtbGlua3M9Ii9pc3N1ZXMgL2lzc3Vlcy9hc3NpZ25lZCAvaXNzdWVzL21lbnRpb25lZCAvaXNzdWVzIj4KICAgICAgICAgICAgSXNzdWVzCjwvYT4gICAgICAgIDwvbGk+CiAgICAgICAgICA8bGkgY2xhc3M9ImhlYWRlci1uYXYtaXRlbSI+CiAgICAgICAgICAgIDxhIGNsYXNzPSJoZWFkZXItbmF2LWxpbmsiIGhyZWY9Imh0dHBzOi8vZ2lzdC5naXRodWIuY29tLyIgZGF0YS1nYS1jbGljaz0iSGVhZGVyLCBnbyB0byBnaXN0LCB0ZXh0Omdpc3QiPkdpc3Q8L2E+CiAgICAgICAgICA8L2xpPgogICAgICA8L3VsPgoKICAgIAo8dWwgY2xhc3M9ImhlYWRlci1uYXYgdXNlci1uYXYgcmlnaHQiIGlkPSJ1c2VyLWxpbmtzIj4KICA8bGkgY2xhc3M9ImhlYWRlci1uYXYtaXRlbSI+CiAgICAKICAgIDxhIGhyZWY9Ii9ub3RpZmljYXRpb25zIiBhcmlhLWxhYmVsPSJZb3UgaGF2ZSBubyB1bnJlYWQgbm90aWZpY2F0aW9ucyIgY2xhc3M9ImhlYWRlci1uYXYtbGluayBub3RpZmljYXRpb24taW5kaWNhdG9yIHRvb2x0aXBwZWQgdG9vbHRpcHBlZC1zIGpzLXNvY2tldC1jaGFubmVsIGpzLW5vdGlmaWNhdGlvbi1pbmRpY2F0b3IiIGRhdGEtY2hhbm5lbD0idGVuYW50OjE6bm90aWZpY2F0aW9uLWNoYW5nZWQ6MTkwODQ2IiBkYXRhLWdhLWNsaWNrPSJIZWFkZXIsIGdvIHRvIG5vdGlmaWNhdGlvbnMsIGljb246cmVhZCIgZGF0YS1ob3RrZXk9ImcgbiI+CiAgICAgICAgPHNwYW4gY2xhc3M9Im1haWwtc3RhdHVzICI+PC9zcGFuPgogICAgICAgIDxzdmcgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJvY3RpY29uIG9jdGljb24tYmVsbCIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTQgMTYiIHdpZHRoPSIxNCI+PHBhdGggZD0iTTE0IDEydjFIMHYtMWwuNzMtLjU4Yy43Ny0uNzcuODEtMi41NSAxLjE5LTQuNDJDMi42OSAzLjIzIDYgMiA2IDJjMC0uNTUuNDUtMSAxLTFzMSAuNDUgMSAxYzAgMCAzLjM5IDEuMjMgNC4xNiA1IC4zOCAxLjg4LjQyIDMuNjYgMS4xOSA0LjQybC42Ni41OEgxNHptLTcgNGMxLjExIDAgMi0uODkgMi0ySDVjMCAxLjExLjg5IDIgMiAyeiI+PC9wYXRoPjwvc3ZnPgo8L2E+CiAgPC9saT4KCiAgPGxpIGNsYXNzPSJoZWFkZXItbmF2LWl0ZW0gZHJvcGRvd24ganMtbWVudS1jb250YWluZXIiPgogICAgPGEgY2xhc3M9ImhlYWRlci1uYXYtbGluayB0b29sdGlwcGVkIHRvb2x0aXBwZWQtcyBqcy1tZW51LXRhcmdldCIgaHJlZj0iL25ldyIKICAgICAgIGFyaWEtbGFiZWw9IkNyZWF0ZSBuZXfigKYiCiAgICAgICBkYXRhLWdhLWNsaWNrPSJIZWFkZXIsIGNyZWF0ZSBuZXcsIGljb246YWRkIj4KICAgICAgPHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1wbHVzIGxlZnQiIGhlaWdodD0iMTYiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEyIDE2IiB3aWR0aD0iMTIiPjxwYXRoIGQ9Ik0xMiA5SDd2NUg1VjlIMFY3aDVWMmgydjVoNXoiPjwvcGF0aD48L3N2Zz4KICAgICAgPHNwYW4gY2xhc3M9ImRyb3Bkb3duLWNhcmV0Ij48L3NwYW4+CiAgICA8L2E+CgogICAgPGRpdiBjbGFzcz0iZHJvcGRvd24tbWVudS1jb250ZW50IGpzLW1lbnUtY29udGVudCI+CiAgICAgIDx1bCBjbGFzcz0iZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXN3Ij4KICAgICAgICAKPGEgY2xhc3M9ImRyb3Bkb3duLWl0ZW0iIGhyZWY9Ii9uZXciIGRhdGEtZ2EtY2xpY2s9IkhlYWRlciwgY3JlYXRlIG5ldyByZXBvc2l0b3J5Ij4KICBOZXcgcmVwb3NpdG9yeQo8L2E+CgogIDxhIGNsYXNzPSJkcm9wZG93bi1pdGVtIiBocmVmPSIvbmV3L2ltcG9ydCIgZGF0YS1nYS1jbGljaz0iSGVhZGVyLCBpbXBvcnQgYSByZXBvc2l0b3J5Ij4KICAgIEltcG9ydCByZXBvc2l0b3J5CiAgPC9hPgoKCiAgPGEgY2xhc3M9ImRyb3Bkb3duLWl0ZW0iIGhyZWY9Ii9vcmdhbml6YXRpb25zL25ldyIgZGF0YS1nYS1jbGljaz0iSGVhZGVyLCBjcmVhdGUgbmV3IG9yZ2FuaXphdGlvbiI+CiAgICBOZXcgb3JnYW5pemF0aW9uCiAgPC9hPgoKCgogIDxkaXYgY2xhc3M9ImRyb3Bkb3duLWRpdmlkZXIiPjwvZGl2PgogIDxkaXYgY2xhc3M9ImRyb3Bkb3duLWhlYWRlciI+CiAgICA8c3BhbiB0aXRsZT0iY3ljZ2l0L3dlYi1zdHlsZSI+VGhpcyByZXBvc2l0b3J5PC9zcGFuPgogIDwvZGl2PgogICAgPGEgY2xhc3M9ImRyb3Bkb3duLWl0ZW0iIGhyZWY9Ii9jeWNnaXQvd2ViLXN0eWxlL2lzc3Vlcy9uZXciIGRhdGEtZ2EtY2xpY2s9IkhlYWRlciwgY3JlYXRlIG5ldyBpc3N1ZSI+CiAgICAgIE5ldyBpc3N1ZQogICAgPC9hPgoKICAgICAgPC91bD4KICAgIDwvZGl2PgogIDwvbGk+CgogIDxsaSBjbGFzcz0iaGVhZGVyLW5hdi1pdGVtIGRyb3Bkb3duIGpzLW1lbnUtY29udGFpbmVyIj4KICAgIDxhIGNsYXNzPSJoZWFkZXItbmF2LWxpbmsgbmFtZSB0b29sdGlwcGVkIHRvb2x0aXBwZWQtc3cganMtbWVudS10YXJnZXQiIGhyZWY9Ii9SdWJ5TG91dnJlIgogICAgICAgYXJpYS1sYWJlbD0iVmlldyBwcm9maWxlIGFuZCBtb3JlIgogICAgICAgZGF0YS1nYS1jbGljaz0iSGVhZGVyLCBzaG93IG1lbnUsIGljb246YXZhdGFyIj4KICAgICAgPGltZyBhbHQ9IkBSdWJ5TG91dnJlIiBjbGFzcz0iYXZhdGFyIiBoZWlnaHQ9IjIwIiBzcmM9Imh0dHBzOi8vYXZhdGFyczMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvMTkwODQ2P3Y9MyZhbXA7cz00MCIgd2lkdGg9IjIwIiAvPgogICAgICA8c3BhbiBjbGFzcz0iZHJvcGRvd24tY2FyZXQiPjwvc3Bhbj4KICAgIDwvYT4KCiAgICA8ZGl2IGNsYXNzPSJkcm9wZG93bi1tZW51LWNvbnRlbnQganMtbWVudS1jb250ZW50Ij4KICAgICAgPGRpdiBjbGFzcz0iZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXN3Ij4KICAgICAgICA8ZGl2IGNsYXNzPSJkcm9wZG93bi1oZWFkZXIgaGVhZGVyLW5hdi1jdXJyZW50LXVzZXIgY3NzLXRydW5jYXRlIj4KICAgICAgICAgIFNpZ25lZCBpbiBhcyA8c3Ryb25nIGNsYXNzPSJjc3MtdHJ1bmNhdGUtdGFyZ2V0Ij5SdWJ5TG91dnJlPC9zdHJvbmc+CiAgICAgICAgPC9kaXY+CgogICAgICAgIDxkaXYgY2xhc3M9ImRyb3Bkb3duLWRpdmlkZXIiPjwvZGl2PgoKICAgICAgICA8YSBjbGFzcz0iZHJvcGRvd24taXRlbSIgaHJlZj0iL1J1YnlMb3V2cmUiIGRhdGEtZ2EtY2xpY2s9IkhlYWRlciwgZ28gdG8gcHJvZmlsZSwgdGV4dDp5b3VyIHByb2ZpbGUiPgogICAgICAgICAgWW91ciBwcm9maWxlCiAgICAgICAgPC9hPgogICAgICAgIDxhIGNsYXNzPSJkcm9wZG93bi1pdGVtIiBocmVmPSIvc3RhcnMiIGRhdGEtZ2EtY2xpY2s9IkhlYWRlciwgZ28gdG8gc3RhcnJlZCByZXBvcywgdGV4dDp5b3VyIHN0YXJzIj4KICAgICAgICAgIFlvdXIgc3RhcnMKICAgICAgICA8L2E+CiAgICAgICAgPGEgY2xhc3M9ImRyb3Bkb3duLWl0ZW0iIGhyZWY9Ii9leHBsb3JlIiBkYXRhLWdhLWNsaWNrPSJIZWFkZXIsIGdvIHRvIGV4cGxvcmUsIHRleHQ6ZXhwbG9yZSI+CiAgICAgICAgICBFeHBsb3JlCiAgICAgICAgPC9hPgogICAgICAgICAgPGEgY2xhc3M9ImRyb3Bkb3duLWl0ZW0iIGhyZWY9Ii9pbnRlZ3JhdGlvbnMiIGRhdGEtZ2EtY2xpY2s9IkhlYWRlciwgZ28gdG8gaW50ZWdyYXRpb25zLCB0ZXh0OmludGVncmF0aW9ucyI+CiAgICAgICAgICAgIEludGVncmF0aW9ucwogICAgICAgICAgPC9hPgogICAgICAgIDxhIGNsYXNzPSJkcm9wZG93bi1pdGVtIiBocmVmPSJodHRwczovL2hlbHAuZ2l0aHViLmNvbSIgZGF0YS1nYS1jbGljaz0iSGVhZGVyLCBnbyB0byBoZWxwLCB0ZXh0OmhlbHAiPgogICAgICAgICAgSGVscAogICAgICAgIDwvYT4KCgogICAgICAgIDxkaXYgY2xhc3M9ImRyb3Bkb3duLWRpdmlkZXIiPjwvZGl2PgoKICAgICAgICA8YSBjbGFzcz0iZHJvcGRvd24taXRlbSIgaHJlZj0iL3NldHRpbmdzL3Byb2ZpbGUiIGRhdGEtZ2EtY2xpY2s9IkhlYWRlciwgZ28gdG8gc2V0dGluZ3MsIGljb246c2V0dGluZ3MiPgogICAgICAgICAgU2V0dGluZ3MKICAgICAgICA8L2E+CgogICAgICAgIDwhLS0gPC90ZXh0YXJlYT4gLS0+PCEtLSAnImAgLS0+PGZvcm0gYWNjZXB0LWNoYXJzZXQ9IlVURi04IiBhY3Rpb249Ii9sb2dvdXQiIGNsYXNzPSJsb2dvdXQtZm9ybSIgZGF0YS1mb3JtLW5vbmNlPSIzNjAxNTY0MmQwNDliNWI0NjY3MGRkMzVkYWFiMGJlMWM5NzViOTg0IiBtZXRob2Q9InBvc3QiPjxkaXYgc3R5bGU9Im1hcmdpbjowO3BhZGRpbmc6MDtkaXNwbGF5OmlubGluZSI+PGlucHV0IG5hbWU9InV0ZjgiIHR5cGU9ImhpZGRlbiIgdmFsdWU9IiYjeDI3MTM7IiAvPjxpbnB1dCBuYW1lPSJhdXRoZW50aWNpdHlfdG9rZW4iIHR5cGU9ImhpZGRlbiIgdmFsdWU9InRmdFhZQnJ6S0RSMkRFMUZ3QkRUMDYrQitJdzBiWnNjcmo3ZHMveFJXWHU2ZURVU056UVY3SVZqMUljYjJ5bjRMWm5RUVV3TGhGcW1laERsOXFrWC9RPT0iIC8+PC9kaXY+CiAgICAgICAgICA8YnV0dG9uIGNsYXNzPSJkcm9wZG93bi1pdGVtIGRyb3Bkb3duLXNpZ25vdXQiIGRhdGEtZ2EtY2xpY2s9IkhlYWRlciwgc2lnbiBvdXQsIGljb246bG9nb3V0Ij4KICAgICAgICAgICAgU2lnbiBvdXQKICAgICAgICAgIDwvYnV0dG9uPgo8L2Zvcm0+ICAgICAgPC9kaXY+CiAgICA8L2Rpdj4KICA8L2xpPgo8L3VsPgoKCiAgICAKICA8L2Rpdj4KPC9kaXY+CgoKICAgICAgCgoKICAgIDxkaXYgaWQ9InN0YXJ0LW9mLWNvbnRlbnQiIGNsYXNzPSJhY2Nlc3NpYmlsaXR5LWFpZCI+PC9kaXY+CgogICAgICA8ZGl2IGlkPSJqcy1mbGFzaC1jb250YWluZXIiPgo8L2Rpdj4KCgogICAgPGRpdiByb2xlPSJtYWluIiBjbGFzcz0ibWFpbi1jb250ZW50Ij4KICAgICAgICA8ZGl2IGl0ZW1zY29wZSBpdGVtdHlwZT0iaHR0cDovL3NjaGVtYS5vcmcvU29mdHdhcmVTb3VyY2VDb2RlIj4KICAgIDxkaXYgaWQ9ImpzLXJlcG8tcGpheC1jb250YWluZXIiIGRhdGEtcGpheC1jb250YWluZXI+CiAgICAgIAo8ZGl2IGNsYXNzPSJwYWdlaGVhZCByZXBvaGVhZCBpbnN0YXBhcGVyX2lnbm9yZSByZWFkYWJpbGl0eS1tZW51IGV4cGVyaW1lbnQtcmVwby1uYXYiPgogIDxkaXYgY2xhc3M9ImNvbnRhaW5lciByZXBvaGVhZC1kZXRhaWxzLWNvbnRhaW5lciI+CgogICAgCgo8dWwgY2xhc3M9InBhZ2VoZWFkLWFjdGlvbnMiPgoKICA8bGk+CiAgICAgICAgPCEtLSA8L3RleHRhcmVhPiAtLT48IS0tICciYCAtLT48Zm9ybSBhY2NlcHQtY2hhcnNldD0iVVRGLTgiIGFjdGlvbj0iL25vdGlmaWNhdGlvbnMvc3Vic2NyaWJlIiBjbGFzcz0ianMtc29jaWFsLWNvbnRhaW5lciIgZGF0YS1hdXRvc3VibWl0PSJ0cnVlIiBkYXRhLWZvcm0tbm9uY2U9IjM2MDE1NjQyZDA0OWI1YjQ2NjcwZGQzNWRhYWIwYmUxYzk3NWI5ODQiIGRhdGEtcmVtb3RlPSJ0cnVlIiBtZXRob2Q9InBvc3QiPjxkaXYgc3R5bGU9Im1hcmdpbjowO3BhZGRpbmc6MDtkaXNwbGF5OmlubGluZSI+PGlucHV0IG5hbWU9InV0ZjgiIHR5cGU9ImhpZGRlbiIgdmFsdWU9IiYjeDI3MTM7IiAvPjxpbnB1dCBuYW1lPSJhdXRoZW50aWNpdHlfdG9rZW4iIHR5cGU9ImhpZGRlbiIgdmFsdWU9Im1Sa0xhbWlYVy9pV3ZZSDJ3WXZHQVlGMEFLTUhXaUsxeWJQRjBYR3NYTXppQndNaVpqTkswOFgyR0I4SmZCSCtYNStSUUpVRDhybWtmZVNnWG5OMHlnPT0iIC8+PC9kaXY+ICAgICAgPGlucHV0IGNsYXNzPSJmb3JtLWNvbnRyb2wiIGlkPSJyZXBvc2l0b3J5X2lkIiBuYW1lPSJyZXBvc2l0b3J5X2lkIiB0eXBlPSJoaWRkZW4iIHZhbHVlPSI1OTcyNTEyNSIgLz4KCiAgICAgICAgPGRpdiBjbGFzcz0ic2VsZWN0LW1lbnUganMtbWVudS1jb250YWluZXIganMtc2VsZWN0LW1lbnUiPgogICAgICAgICAgPGEgaHJlZj0iL2N5Y2dpdC93ZWItc3R5bGUvc3Vic2NyaXB0aW9uIgogICAgICAgICAgICBjbGFzcz0iYnRuIGJ0bi1zbSBidG4td2l0aC1jb3VudCBzZWxlY3QtbWVudS1idXR0b24ganMtbWVudS10YXJnZXQiIHJvbGU9ImJ1dHRvbiIgdGFiaW5kZXg9IjAiIGFyaWEtaGFzcG9wdXA9InRydWUiCiAgICAgICAgICAgIGRhdGEtZ2EtY2xpY2s9IlJlcG9zaXRvcnksIGNsaWNrIFdhdGNoIHNldHRpbmdzLCBhY3Rpb246YmxvYiNzaG93Ij4KICAgICAgICAgICAgPHNwYW4gY2xhc3M9ImpzLXNlbGVjdC1idXR0b24iPgogICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJvY3RpY29uIG9jdGljb24tZXllIiBoZWlnaHQ9IjE2IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2Ij48cGF0aCBkPSJNOC4wNiAyQzMgMiAwIDggMCA4czMgNiA4LjA2IDZDMTMgMTQgMTYgOCAxNiA4cy0zLTYtNy45NC02ek04IDEyYy0yLjIgMC00LTEuNzgtNC00IDAtMi4yIDEuOC00IDQtNCAyLjIyIDAgNCAxLjggNCA0IDAgMi4yMi0xLjc4IDQtNCA0em0yLTRjMCAxLjExLS44OSAyLTIgMi0xLjExIDAtMi0uODktMi0yIDAtMS4xMS44OS0yIDItMiAxLjExIDAgMiAuODkgMiAyeiI+PC9wYXRoPjwvc3ZnPgogICAgICAgICAgICAgIFdhdGNoCiAgICAgICAgICAgIDwvc3Bhbj4KICAgICAgICAgIDwvYT4KICAgICAgICAgIDxhIGNsYXNzPSJzb2NpYWwtY291bnQganMtc29jaWFsLWNvdW50IiBocmVmPSIvY3ljZ2l0L3dlYi1zdHlsZS93YXRjaGVycyI+CiAgICAgICAgICAgIDEKICAgICAgICAgIDwvYT4KCiAgICAgICAgPGRpdiBjbGFzcz0ic2VsZWN0LW1lbnUtbW9kYWwtaG9sZGVyIj4KICAgICAgICAgIDxkaXYgY2xhc3M9InNlbGVjdC1tZW51LW1vZGFsIHN1YnNjcmlwdGlvbi1tZW51LW1vZGFsIGpzLW1lbnUtY29udGVudCIgYXJpYS1oaWRkZW49InRydWUiPgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJzZWxlY3QtbWVudS1oZWFkZXIganMtbmF2aWdhdGlvbi1lbmFibGUiIHRhYmluZGV4PSItMSI+CiAgICAgICAgICAgICAgPHN2ZyBhcmlhLWxhYmVsPSJDbG9zZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi14IGpzLW1lbnUtY2xvc2UiIGhlaWdodD0iMTYiIHJvbGU9ImltZyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTIgMTYiIHdpZHRoPSIxMiI+PHBhdGggZD0iTTcuNDggOGwzLjc1IDMuNzUtMS40OCAxLjQ4TDYgOS40OGwtMy43NSAzLjc1LTEuNDgtMS40OEw0LjUyIDggLjc3IDQuMjVsMS40OC0xLjQ4TDYgNi41MmwzLjc1LTMuNzUgMS40OCAxLjQ4eiI+PC9wYXRoPjwvc3ZnPgogICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJzZWxlY3QtbWVudS10aXRsZSI+Tm90aWZpY2F0aW9uczwvc3Bhbj4KICAgICAgICAgICAgPC9kaXY+CgogICAgICAgICAgICAgIDxkaXYgY2xhc3M9InNlbGVjdC1tZW51LWxpc3QganMtbmF2aWdhdGlvbi1jb250YWluZXIiIHJvbGU9Im1lbnUiPgoKICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9InNlbGVjdC1tZW51LWl0ZW0ganMtbmF2aWdhdGlvbi1pdGVtIHNlbGVjdGVkIiByb2xlPSJtZW51aXRlbSIgdGFiaW5kZXg9IjAiPgogICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzcz0ib2N0aWNvbiBvY3RpY29uLWNoZWNrIHNlbGVjdC1tZW51LWl0ZW0taWNvbiIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTIgMTYiIHdpZHRoPSIxMiI+PHBhdGggZD0iTTEyIDVsLTggOC00LTQgMS41LTEuNUw0IDEwbDYuNS02LjV6Ij48L3BhdGg+PC9zdmc+CiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9InNlbGVjdC1tZW51LWl0ZW0tdGV4dCI+CiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNoZWNrZWQ9ImNoZWNrZWQiIGlkPSJkb19pbmNsdWRlZCIgbmFtZT0iZG8iIHR5cGU9InJhZGlvIiB2YWx1ZT0iaW5jbHVkZWQiIC8+CiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9InNlbGVjdC1tZW51LWl0ZW0taGVhZGluZyI+Tm90IHdhdGNoaW5nPC9zcGFuPgogICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJkZXNjcmlwdGlvbiI+QmUgbm90aWZpZWQgd2hlbiBwYXJ0aWNpcGF0aW5nIG9yIEBtZW50aW9uZWQuPC9zcGFuPgogICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJqcy1zZWxlY3QtYnV0dG9uLXRleHQgaGlkZGVuLXNlbGVjdC1idXR0b24tdGV4dCI+CiAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzcz0ib2N0aWNvbiBvY3RpY29uLWV5ZSIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiI+PHBhdGggZD0iTTguMDYgMkMzIDIgMCA4IDAgOHMzIDYgOC4wNiA2QzEzIDE0IDE2IDggMTYgOHMtMy02LTcuOTQtNnpNOCAxMmMtMi4yIDAtNC0xLjc4LTQtNCAwLTIuMiAxLjgtNCA0LTQgMi4yMiAwIDQgMS44IDQgNCAwIDIuMjItMS43OCA0LTQgNHptMi00YzAgMS4xMS0uODkgMi0yIDItMS4xMSAwLTItLjg5LTItMiAwLTEuMTEuODktMiAyLTIgMS4xMSAwIDIgLjg5IDIgMnoiPjwvcGF0aD48L3N2Zz4KICAgICAgICAgICAgICAgICAgICAgIFdhdGNoCiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPgogICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgIDwvZGl2PgoKICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9InNlbGVjdC1tZW51LWl0ZW0ganMtbmF2aWdhdGlvbi1pdGVtICIgcm9sZT0ibWVudWl0ZW0iIHRhYmluZGV4PSIwIj4KICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1jaGVjayBzZWxlY3QtbWVudS1pdGVtLWljb24iIGhlaWdodD0iMTYiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEyIDE2IiB3aWR0aD0iMTIiPjxwYXRoIGQ9Ik0xMiA1bC04IDgtNC00IDEuNS0xLjVMNCAxMGw2LjUtNi41eiI+PC9wYXRoPjwvc3ZnPgogICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJzZWxlY3QtbWVudS1pdGVtLXRleHQiPgogICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD0iZG9fc3Vic2NyaWJlZCIgbmFtZT0iZG8iIHR5cGU9InJhZGlvIiB2YWx1ZT0ic3Vic2NyaWJlZCIgLz4KICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ic2VsZWN0LW1lbnUtaXRlbS1oZWFkaW5nIj5XYXRjaGluZzwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0iZGVzY3JpcHRpb24iPkJlIG5vdGlmaWVkIG9mIGFsbCBjb252ZXJzYXRpb25zLjwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ianMtc2VsZWN0LWJ1dHRvbi10ZXh0IGhpZGRlbi1zZWxlY3QtYnV0dG9uLXRleHQiPgogICAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1leWUiIGhlaWdodD0iMTYiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE2IDE2IiB3aWR0aD0iMTYiPjxwYXRoIGQ9Ik04LjA2IDJDMyAyIDAgOCAwIDhzMyA2IDguMDYgNkMxMyAxNCAxNiA4IDE2IDhzLTMtNi03Ljk0LTZ6TTggMTJjLTIuMiAwLTQtMS43OC00LTQgMC0yLjIgMS44LTQgNC00IDIuMjIgMCA0IDEuOCA0IDQgMCAyLjIyLTEuNzggNC00IDR6bTItNGMwIDEuMTEtLjg5IDItMiAyLTEuMTEgMC0yLS44OS0yLTIgMC0xLjExLjg5LTIgMi0yIDEuMTEgMCAyIC44OSAyIDJ6Ij48L3BhdGg+PC9zdmc+CiAgICAgICAgICAgICAgICAgICAgICBVbndhdGNoCiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPgogICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgIDwvZGl2PgoKICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9InNlbGVjdC1tZW51LWl0ZW0ganMtbmF2aWdhdGlvbi1pdGVtICIgcm9sZT0ibWVudWl0ZW0iIHRhYmluZGV4PSIwIj4KICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1jaGVjayBzZWxlY3QtbWVudS1pdGVtLWljb24iIGhlaWdodD0iMTYiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEyIDE2IiB3aWR0aD0iMTIiPjxwYXRoIGQ9Ik0xMiA1bC04IDgtNC00IDEuNS0xLjVMNCAxMGw2LjUtNi41eiI+PC9wYXRoPjwvc3ZnPgogICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJzZWxlY3QtbWVudS1pdGVtLXRleHQiPgogICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD0iZG9faWdub3JlIiBuYW1lPSJkbyIgdHlwZT0icmFkaW8iIHZhbHVlPSJpZ25vcmUiIC8+CiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9InNlbGVjdC1tZW51LWl0ZW0taGVhZGluZyI+SWdub3Jpbmc8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9ImRlc2NyaXB0aW9uIj5OZXZlciBiZSBub3RpZmllZC48L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9ImpzLXNlbGVjdC1idXR0b24tdGV4dCBoaWRkZW4tc2VsZWN0LWJ1dHRvbi10ZXh0Ij4KICAgICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJvY3RpY29uIG9jdGljb24tbXV0ZSIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiI+PHBhdGggZD0iTTggMi44MXYxMC4zOGMwIC42Ny0uODEgMS0xLjI4LjUzTDMgMTBIMWMtLjU1IDAtMS0uNDUtMS0xVjdjMC0uNTUuNDUtMSAxLTFoMmwzLjcyLTMuNzJDNy4xOSAxLjgxIDggMi4xNCA4IDIuODF6bTcuNTMgMy4yMmwtMS4wNi0xLjA2LTEuOTcgMS45Ny0xLjk3LTEuOTctMS4wNiAxLjA2TDExLjQ0IDggOS40NyA5Ljk3bDEuMDYgMS4wNiAxLjk3LTEuOTcgMS45NyAxLjk3IDEuMDYtMS4wNkwxMy41NiA4bDEuOTctMS45N3oiPjwvcGF0aD48L3N2Zz4KICAgICAgICAgICAgICAgICAgICAgIFN0b3AgaWdub3JpbmcKICAgICAgICAgICAgICAgICAgICA8L3NwYW4+CiAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgPC9kaXY+CgogICAgICAgICAgICAgIDwvZGl2PgoKICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8L2Rpdj4KICAgICAgICA8L2Rpdj4KPC9mb3JtPgogIDwvbGk+CgogIDxsaT4KICAgIAogIDxkaXYgY2xhc3M9ImpzLXRvZ2dsZXItY29udGFpbmVyIGpzLXNvY2lhbC1jb250YWluZXIgc3RhcnJpbmctY29udGFpbmVyICI+CgogICAgPCEtLSA8L3RleHRhcmVhPiAtLT48IS0tICciYCAtLT48Zm9ybSBhY2NlcHQtY2hhcnNldD0iVVRGLTgiIGFjdGlvbj0iL2N5Y2dpdC93ZWItc3R5bGUvdW5zdGFyIiBjbGFzcz0ic3RhcnJlZCIgZGF0YS1mb3JtLW5vbmNlPSIzNjAxNTY0MmQwNDliNWI0NjY3MGRkMzVkYWFiMGJlMWM5NzViOTg0IiBkYXRhLXJlbW90ZT0idHJ1ZSIgbWV0aG9kPSJwb3N0Ij48ZGl2IHN0eWxlPSJtYXJnaW46MDtwYWRkaW5nOjA7ZGlzcGxheTppbmxpbmUiPjxpbnB1dCBuYW1lPSJ1dGY4IiB0eXBlPSJoaWRkZW4iIHZhbHVlPSImI3gyNzEzOyIgLz48aW5wdXQgbmFtZT0iYXV0aGVudGljaXR5X3Rva2VuIiB0eXBlPSJoaWRkZW4iIHZhbHVlPSJOQmkzN1p5TVVreHEzcitVa0tPMnorR0lwd1dGZ0xvaTZtZHhHYnRmYkxBTVd4ajRCYUtNMDlheTJ4V1NTTC82T0VycCs5Q29LRkx0cHAzanpGOGZ4UT09IiAvPjwvZGl2PgogICAgICA8YnV0dG9uCiAgICAgICAgY2xhc3M9ImJ0biBidG4tc20gYnRuLXdpdGgtY291bnQganMtdG9nZ2xlci10YXJnZXQiCiAgICAgICAgYXJpYS1sYWJlbD0iVW5zdGFyIHRoaXMgcmVwb3NpdG9yeSIgdGl0bGU9IlVuc3RhciBjeWNnaXQvd2ViLXN0eWxlIgogICAgICAgIGRhdGEtZ2EtY2xpY2s9IlJlcG9zaXRvcnksIGNsaWNrIHVuc3RhciBidXR0b24sIGFjdGlvbjpibG9iI3Nob3c7IHRleHQ6VW5zdGFyIj4KICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzcz0ib2N0aWNvbiBvY3RpY29uLXN0YXIiIGhlaWdodD0iMTYiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE0IDE2IiB3aWR0aD0iMTQiPjxwYXRoIGQ9Ik0xNCA2bC00LjktLjY0TDcgMSA0LjkgNS4zNiAwIDZsMy42IDMuMjZMMi42NyAxNCA3IDExLjY3IDExLjMzIDE0bC0uOTMtNC43NHoiPjwvcGF0aD48L3N2Zz4KICAgICAgICBVbnN0YXIKICAgICAgPC9idXR0b24+CiAgICAgICAgPGEgY2xhc3M9InNvY2lhbC1jb3VudCBqcy1zb2NpYWwtY291bnQiIGhyZWY9Ii9jeWNnaXQvd2ViLXN0eWxlL3N0YXJnYXplcnMiPgogICAgICAgICAgMTAKICAgICAgICA8L2E+CjwvZm9ybT4KICAgIDwhLS0gPC90ZXh0YXJlYT4gLS0+PCEtLSAnImAgLS0+PGZvcm0gYWNjZXB0LWNoYXJzZXQ9IlVURi04IiBhY3Rpb249Ii9jeWNnaXQvd2ViLXN0eWxlL3N0YXIiIGNsYXNzPSJ1bnN0YXJyZWQiIGRhdGEtZm9ybS1ub25jZT0iMzYwMTU2NDJkMDQ5YjViNDY2NzBkZDM1ZGFhYjBiZTFjOTc1Yjk4NCIgZGF0YS1yZW1vdGU9InRydWUiIG1ldGhvZD0icG9zdCI+PGRpdiBzdHlsZT0ibWFyZ2luOjA7cGFkZGluZzowO2Rpc3BsYXk6aW5saW5lIj48aW5wdXQgbmFtZT0idXRmOCIgdHlwZT0iaGlkZGVuIiB2YWx1ZT0iJiN4MjcxMzsiIC8+PGlucHV0IG5hbWU9ImF1dGhlbnRpY2l0eV90b2tlbiIgdHlwZT0iaGlkZGVuIiB2YWx1ZT0iSlBKNUNyU0ZPYW92c1JsZUpLOUxqR2wzd0VTeSs1Y25pMHdwVVJ6QnFjTDd4K3VmeWthWGZjRW1YV1E4dFBFcUMvRU8xZ3RwSURBQzdTNXpZSFJZSlE9PSIgLz48L2Rpdj4KICAgICAgPGJ1dHRvbgogICAgICAgIGNsYXNzPSJidG4gYnRuLXNtIGJ0bi13aXRoLWNvdW50IGpzLXRvZ2dsZXItdGFyZ2V0IgogICAgICAgIGFyaWEtbGFiZWw9IlN0YXIgdGhpcyByZXBvc2l0b3J5IiB0aXRsZT0iU3RhciBjeWNnaXQvd2ViLXN0eWxlIgogICAgICAgIGRhdGEtZ2EtY2xpY2s9IlJlcG9zaXRvcnksIGNsaWNrIHN0YXIgYnV0dG9uLCBhY3Rpb246YmxvYiNzaG93OyB0ZXh0OlN0YXIiPgogICAgICAgIDxzdmcgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJvY3RpY29uIG9jdGljb24tc3RhciIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTQgMTYiIHdpZHRoPSIxNCI+PHBhdGggZD0iTTE0IDZsLTQuOS0uNjRMNyAxIDQuOSA1LjM2IDAgNmwzLjYgMy4yNkwyLjY3IDE0IDcgMTEuNjcgMTEuMzMgMTRsLS45My00Ljc0eiI+PC9wYXRoPjwvc3ZnPgogICAgICAgIFN0YXIKICAgICAgPC9idXR0b24+CiAgICAgICAgPGEgY2xhc3M9InNvY2lhbC1jb3VudCBqcy1zb2NpYWwtY291bnQiIGhyZWY9Ii9jeWNnaXQvd2ViLXN0eWxlL3N0YXJnYXplcnMiPgogICAgICAgICAgMTAKICAgICAgICA8L2E+CjwvZm9ybT4gIDwvZGl2PgoKICA8L2xpPgoKICA8bGk+CiAgICAgICAgICA8IS0tIDwvdGV4dGFyZWE+IC0tPjwhLS0gJyJgIC0tPjxmb3JtIGFjY2VwdC1jaGFyc2V0PSJVVEYtOCIgYWN0aW9uPSIvY3ljZ2l0L3dlYi1zdHlsZS9mb3JrIiBjbGFzcz0iYnRuLXdpdGgtY291bnQiIGRhdGEtZm9ybS1ub25jZT0iMzYwMTU2NDJkMDQ5YjViNDY2NzBkZDM1ZGFhYjBiZTFjOTc1Yjk4NCIgbWV0aG9kPSJwb3N0Ij48ZGl2IHN0eWxlPSJtYXJnaW46MDtwYWRkaW5nOjA7ZGlzcGxheTppbmxpbmUiPjxpbnB1dCBuYW1lPSJ1dGY4IiB0eXBlPSJoaWRkZW4iIHZhbHVlPSImI3gyNzEzOyIgLz48aW5wdXQgbmFtZT0iYXV0aGVudGljaXR5X3Rva2VuIiB0eXBlPSJoaWRkZW4iIHZhbHVlPSJ0K3R4MzBnOEJ2Rk5JdnY4OVI0SW9leFF6VWVzOXE3ck5WZDVJV3g2OTBKTVQ1L2xIZk5TM3BOU2FJdE56TlpmZjZ1eDZwWE9rb3grdFpEcnMyVllQdz09IiAvPjwvZGl2PgogICAgICAgICAgICA8YnV0dG9uCiAgICAgICAgICAgICAgICB0eXBlPSJzdWJtaXQiCiAgICAgICAgICAgICAgICBjbGFzcz0iYnRuIGJ0bi1zbSBidG4td2l0aC1jb3VudCIKICAgICAgICAgICAgICAgIGRhdGEtZ2EtY2xpY2s9IlJlcG9zaXRvcnksIHNob3cgZm9yayBtb2RhbCwgYWN0aW9uOmJsb2Ijc2hvdzsgdGV4dDpGb3JrIgogICAgICAgICAgICAgICAgdGl0bGU9IkZvcmsgeW91ciBvd24gY29weSBvZiBjeWNnaXQvd2ViLXN0eWxlIHRvIHlvdXIgYWNjb3VudCIKICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9IkZvcmsgeW91ciBvd24gY29weSBvZiBjeWNnaXQvd2ViLXN0eWxlIHRvIHlvdXIgYWNjb3VudCI+CiAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1yZXBvLWZvcmtlZCIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTAgMTYiIHdpZHRoPSIxMCI+PHBhdGggZD0iTTggMWExLjk5MyAxLjk5MyAwIDAgMC0xIDMuNzJWNkw1IDggMyA2VjQuNzJBMS45OTMgMS45OTMgMCAwIDAgMiAxYTEuOTkzIDEuOTkzIDAgMCAwLTEgMy43MlY2LjVsMyAzdjEuNzhBMS45OTMgMS45OTMgMCAwIDAgNSAxNWExLjk5MyAxLjk5MyAwIDAgMCAxLTMuNzJWOS41bDMtM1Y0LjcyQTEuOTkzIDEuOTkzIDAgMCAwIDggMXpNMiA0LjJDMS4zNCA0LjIuOCAzLjY1LjggM2MwLS42NS41NS0xLjIgMS4yLTEuMi42NSAwIDEuMi41NSAxLjIgMS4yIDAgLjY1LS41NSAxLjItMS4yIDEuMnptMyAxMGMtLjY2IDAtMS4yLS41NS0xLjItMS4yIDAtLjY1LjU1LTEuMiAxLjItMS4yLjY1IDAgMS4yLjU1IDEuMiAxLjIgMCAuNjUtLjU1IDEuMi0xLjIgMS4yem0zLTEwYy0uNjYgMC0xLjItLjU1LTEuMi0xLjIgMC0uNjUuNTUtMS4yIDEuMi0xLjIuNjUgMCAxLjIuNTUgMS4yIDEuMiAwIC42NS0uNTUgMS4yLTEuMiAxLjJ6Ij48L3BhdGg+PC9zdmc+CiAgICAgICAgICAgICAgRm9yawogICAgICAgICAgICA8L2J1dHRvbj4KPC9mb3JtPgogICAgPGEgaHJlZj0iL2N5Y2dpdC93ZWItc3R5bGUvbmV0d29yayIgY2xhc3M9InNvY2lhbC1jb3VudCI+CiAgICAgIDEKICAgIDwvYT4KICA8L2xpPgo8L3VsPgoKICAgIDxoMSBjbGFzcz0icHVibGljICI+CiAgPHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1yZXBvIiBoZWlnaHQ9IjE2IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMiAxNiIgd2lkdGg9IjEyIj48cGF0aCBkPSJNNCA5SDNWOGgxdjF6bTAtM0gzdjFoMVY2em0wLTJIM3YxaDFWNHptMC0ySDN2MWgxVjJ6bTgtMXYxMmMwIC41NS0uNDUgMS0xIDFINnYybC0xLjUtMS41TDMgMTZ2LTJIMWMtLjU1IDAtMS0uNDUtMS0xVjFjMC0uNTUuNDUtMSAxLTFoMTBjLjU1IDAgMSAuNDUgMSAxem0tMSAxMEgxdjJoMnYtMWgzdjFoNXYtMnptMC0xMEgydjloOVYxeiI+PC9wYXRoPjwvc3ZnPgogIDxzcGFuIGNsYXNzPSJhdXRob3IiIGl0ZW1wcm9wPSJhdXRob3IiPjxhIGhyZWY9Ii9jeWNnaXQiIGNsYXNzPSJ1cmwgZm4iIHJlbD0iYXV0aG9yIj5jeWNnaXQ8L2E+PC9zcGFuPjwhLS0KLS0+PHNwYW4gY2xhc3M9InBhdGgtZGl2aWRlciI+Lzwvc3Bhbj48IS0tCi0tPjxzdHJvbmcgaXRlbXByb3A9Im5hbWUiPjxhIGhyZWY9Ii9jeWNnaXQvd2ViLXN0eWxlIiBkYXRhLXBqYXg9IiNqcy1yZXBvLXBqYXgtY29udGFpbmVyIj53ZWItc3R5bGU8L2E+PC9zdHJvbmc+Cgo8L2gxPgoKICA8L2Rpdj4KICA8ZGl2IGNsYXNzPSJjb250YWluZXIiPgogICAgCjxuYXYgY2xhc3M9InJlcG9uYXYganMtcmVwby1uYXYganMtc2lkZW5hdi1jb250YWluZXItcGpheCIKICAgICBpdGVtc2NvcGUKICAgICBpdGVtdHlwZT0iaHR0cDovL3NjaGVtYS5vcmcvQnJlYWRjcnVtYkxpc3QiCiAgICAgcm9sZT0ibmF2aWdhdGlvbiIKICAgICBkYXRhLXBqYXg9IiNqcy1yZXBvLXBqYXgtY29udGFpbmVyIj4KCiAgPHNwYW4gaXRlbXNjb3BlIGl0ZW10eXBlPSJodHRwOi8vc2NoZW1hLm9yZy9MaXN0SXRlbSIgaXRlbXByb3A9Iml0ZW1MaXN0RWxlbWVudCI+CiAgICA8YSBocmVmPSIvY3ljZ2l0L3dlYi1zdHlsZSIgYXJpYS1zZWxlY3RlZD0idHJ1ZSIgY2xhc3M9ImpzLXNlbGVjdGVkLW5hdmlnYXRpb24taXRlbSBzZWxlY3RlZCByZXBvbmF2LWl0ZW0iIGRhdGEtaG90a2V5PSJnIGMiIGRhdGEtc2VsZWN0ZWQtbGlua3M9InJlcG9fc291cmNlIHJlcG9fZG93bmxvYWRzIHJlcG9fY29tbWl0cyByZXBvX3JlbGVhc2VzIHJlcG9fdGFncyByZXBvX2JyYW5jaGVzIC9jeWNnaXQvd2ViLXN0eWxlIiBpdGVtcHJvcD0idXJsIj4KICAgICAgPHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1jb2RlIiBoZWlnaHQ9IjE2IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxNCAxNiIgd2lkdGg9IjE0Ij48cGF0aCBkPSJNOS41IDNMOCA0LjUgMTEuNSA4IDggMTEuNSA5LjUgMTMgMTQgOCA5LjUgM3ptLTUgMEwwIDhsNC41IDVMNiAxMS41IDIuNSA4IDYgNC41IDQuNSAzeiI+PC9wYXRoPjwvc3ZnPgogICAgICA8c3BhbiBpdGVtcHJvcD0ibmFtZSI+Q29kZTwvc3Bhbj4KICAgICAgPG1ldGEgaXRlbXByb3A9InBvc2l0aW9uIiBjb250ZW50PSIxIj4KPC9hPiAgPC9zcGFuPgoKICAgIDxzcGFuIGl0ZW1zY29wZSBpdGVtdHlwZT0iaHR0cDovL3NjaGVtYS5vcmcvTGlzdEl0ZW0iIGl0ZW1wcm9wPSJpdGVtTGlzdEVsZW1lbnQiPgogICAgICA8YSBocmVmPSIvY3ljZ2l0L3dlYi1zdHlsZS9pc3N1ZXMiIGNsYXNzPSJqcy1zZWxlY3RlZC1uYXZpZ2F0aW9uLWl0ZW0gcmVwb25hdi1pdGVtIiBkYXRhLWhvdGtleT0iZyBpIiBkYXRhLXNlbGVjdGVkLWxpbmtzPSJyZXBvX2lzc3VlcyByZXBvX2xhYmVscyByZXBvX21pbGVzdG9uZXMgL2N5Y2dpdC93ZWItc3R5bGUvaXNzdWVzIiBpdGVtcHJvcD0idXJsIj4KICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzcz0ib2N0aWNvbiBvY3RpY29uLWlzc3VlLW9wZW5lZCIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTQgMTYiIHdpZHRoPSIxNCI+PHBhdGggZD0iTTcgMi4zYzMuMTQgMCA1LjcgMi41NiA1LjcgNS43cy0yLjU2IDUuNy01LjcgNS43QTUuNzEgNS43MSAwIDAgMSAxLjMgOGMwLTMuMTQgMi41Ni01LjcgNS43LTUuN3pNNyAxQzMuMTQgMSAwIDQuMTQgMCA4czMuMTQgNyA3IDcgNy0zLjE0IDctNy0zLjE0LTctNy03em0xIDNINnY1aDJWNHptMCA2SDZ2Mmgydi0yeiI+PC9wYXRoPjwvc3ZnPgogICAgICAgIDxzcGFuIGl0ZW1wcm9wPSJuYW1lIj5Jc3N1ZXM8L3NwYW4+CiAgICAgICAgPHNwYW4gY2xhc3M9ImNvdW50ZXIiPjA8L3NwYW4+CiAgICAgICAgPG1ldGEgaXRlbXByb3A9InBvc2l0aW9uIiBjb250ZW50PSIyIj4KPC9hPiAgICA8L3NwYW4+CgogIDxzcGFuIGl0ZW1zY29wZSBpdGVtdHlwZT0iaHR0cDovL3NjaGVtYS5vcmcvTGlzdEl0ZW0iIGl0ZW1wcm9wPSJpdGVtTGlzdEVsZW1lbnQiPgogICAgPGEgaHJlZj0iL2N5Y2dpdC93ZWItc3R5bGUvcHVsbHMiIGNsYXNzPSJqcy1zZWxlY3RlZC1uYXZpZ2F0aW9uLWl0ZW0gcmVwb25hdi1pdGVtIiBkYXRhLWhvdGtleT0iZyBwIiBkYXRhLXNlbGVjdGVkLWxpbmtzPSJyZXBvX3B1bGxzIC9jeWNnaXQvd2ViLXN0eWxlL3B1bGxzIiBpdGVtcHJvcD0idXJsIj4KICAgICAgPHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1naXQtcHVsbC1yZXF1ZXN0IiBoZWlnaHQ9IjE2IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMiAxNiIgd2lkdGg9IjEyIj48cGF0aCBkPSJNMTEgMTEuMjhWNWMtLjAzLS43OC0uMzQtMS40Ny0uOTQtMi4wNkM5LjQ2IDIuMzUgOC43OCAyLjAzIDggMkg3VjBMNCAzbDMgM1Y0aDFjLjI3LjAyLjQ4LjExLjY5LjMxLjIxLjIuMy40Mi4zMS42OXY2LjI4QTEuOTkzIDEuOTkzIDAgMCAwIDEwIDE1YTEuOTkzIDEuOTkzIDAgMCAwIDEtMy43MnptLTEgMi45MmMtLjY2IDAtMS4yLS41NS0xLjItMS4yIDAtLjY1LjU1LTEuMiAxLjItMS4yLjY1IDAgMS4yLjU1IDEuMiAxLjIgMCAuNjUtLjU1IDEuMi0xLjIgMS4yek00IDNjMC0xLjExLS44OS0yLTItMmExLjk5MyAxLjk5MyAwIDAgMC0xIDMuNzJ2Ni41NkExLjk5MyAxLjk5MyAwIDAgMCAyIDE1YTEuOTkzIDEuOTkzIDAgMCAwIDEtMy43MlY0LjcyYy41OS0uMzQgMS0uOTggMS0xLjcyem0tLjggMTBjMCAuNjYtLjU1IDEuMi0xLjIgMS4yLS42NSAwLTEuMi0uNTUtMS4yLTEuMiAwLS42NS41NS0xLjIgMS4yLTEuMi42NSAwIDEuMi41NSAxLjIgMS4yek0yIDQuMkMxLjM0IDQuMi44IDMuNjUuOCAzYzAtLjY1LjU1LTEuMiAxLjItMS4yLjY1IDAgMS4yLjU1IDEuMiAxLjIgMCAuNjUtLjU1IDEuMi0xLjIgMS4yeiI+PC9wYXRoPjwvc3ZnPgogICAgICA8c3BhbiBpdGVtcHJvcD0ibmFtZSI+UHVsbCByZXF1ZXN0czwvc3Bhbj4KICAgICAgPHNwYW4gY2xhc3M9ImNvdW50ZXIiPjA8L3NwYW4+CiAgICAgIDxtZXRhIGl0ZW1wcm9wPSJwb3NpdGlvbiIgY29udGVudD0iMyI+CjwvYT4gIDwvc3Bhbj4KCiAgICA8YSBocmVmPSIvY3ljZ2l0L3dlYi1zdHlsZS93aWtpIiBjbGFzcz0ianMtc2VsZWN0ZWQtbmF2aWdhdGlvbi1pdGVtIHJlcG9uYXYtaXRlbSIgZGF0YS1ob3RrZXk9ImcgdyIgZGF0YS1zZWxlY3RlZC1saW5rcz0icmVwb193aWtpIC9jeWNnaXQvd2ViLXN0eWxlL3dpa2kiPgogICAgICA8c3ZnIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzcz0ib2N0aWNvbiBvY3RpY29uLWJvb2siIGhlaWdodD0iMTYiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE2IDE2IiB3aWR0aD0iMTYiPjxwYXRoIGQ9Ik0zIDVoNHYxSDNWNXptMCAzaDRWN0gzdjF6bTAgMmg0VjlIM3Yxem0xMS01aC00djFoNFY1em0wIDJoLTR2MWg0Vjd6bTAgMmgtNHYxaDRWOXptMi02djljMCAuNTUtLjQ1IDEtMSAxSDkuNWwtMSAxLTEtMUgyYy0uNTUgMC0xLS40NS0xLTFWM2MwLS41NS40NS0xIDEtMWg1LjVsMSAxIDEtMUgxNWMuNTUgMCAxIC40NSAxIDF6bS04IC41TDcuNSAzSDJ2OWg2VjMuNXptNy0uNUg5LjVsLS41LjVWMTJoNlYzeiI+PC9wYXRoPjwvc3ZnPgogICAgICBXaWtpCjwvYT4KCiAgPGEgaHJlZj0iL2N5Y2dpdC93ZWItc3R5bGUvcHVsc2UiIGNsYXNzPSJqcy1zZWxlY3RlZC1uYXZpZ2F0aW9uLWl0ZW0gcmVwb25hdi1pdGVtIiBkYXRhLXNlbGVjdGVkLWxpbmtzPSJwdWxzZSAvY3ljZ2l0L3dlYi1zdHlsZS9wdWxzZSI+CiAgICA8c3ZnIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzcz0ib2N0aWNvbiBvY3RpY29uLXB1bHNlIiBoZWlnaHQ9IjE2IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxNCAxNiIgd2lkdGg9IjE0Ij48cGF0aCBkPSJNMTEuNSA4TDguOCA1LjQgNi42IDguNSA1LjUgMS42IDIuMzggOEgwdjJoMy42bC45LTEuOC45IDUuNEw5IDguNWwxLjYgMS41SDE0Vjh6Ij48L3BhdGg+PC9zdmc+CiAgICBQdWxzZQo8L2E+CiAgPGEgaHJlZj0iL2N5Y2dpdC93ZWItc3R5bGUvZ3JhcGhzIiBjbGFzcz0ianMtc2VsZWN0ZWQtbmF2aWdhdGlvbi1pdGVtIHJlcG9uYXYtaXRlbSIgZGF0YS1zZWxlY3RlZC1saW5rcz0icmVwb19ncmFwaHMgcmVwb19jb250cmlidXRvcnMgL2N5Y2dpdC93ZWItc3R5bGUvZ3JhcGhzIj4KICAgIDxzdmcgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJvY3RpY29uIG9jdGljb24tZ3JhcGgiIGhlaWdodD0iMTYiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE2IDE2IiB3aWR0aD0iMTYiPjxwYXRoIGQ9Ik0xNiAxNHYxSDBWMGgxdjE0aDE1ek01IDEzSDNWOGgydjV6bTQgMEg3VjNoMnYxMHptNCAwaC0yVjZoMnY3eiI+PC9wYXRoPjwvc3ZnPgogICAgR3JhcGhzCjwvYT4KCjwvbmF2PgoKICA8L2Rpdj4KPC9kaXY+Cgo8ZGl2IGNsYXNzPSJjb250YWluZXIgbmV3LWRpc2N1c3Npb24tdGltZWxpbmUgZXhwZXJpbWVudC1yZXBvLW5hdiI+CiAgPGRpdiBjbGFzcz0icmVwb3NpdG9yeS1jb250ZW50Ij4KCiAgICAKCjxhIGhyZWY9Ii9jeWNnaXQvd2ViLXN0eWxlL2Jsb2IvMWM0MDFkMGIyYjgzMDZmODY2ZmM0YzMyOGVjZDVmYTQxOWY3MDQ3Ni9zcmMvZm9udHMvaWNvbmZvbnQuc3ZnIiBjbGFzcz0iaGlkZGVuIGpzLXBlcm1hbGluay1zaG9ydGN1dCIgZGF0YS1ob3RrZXk9InkiPlBlcm1hbGluazwvYT4KCjwhLS0gYmxvYiBjb250cmliIGtleTogYmxvYl9jb250cmlidXRvcnM6djIxOjkzYzk4NjNlOGYwZjI2YzcyMzJhMjRhNDBiNTQ3NzIyIC0tPgoKPGRpdiBjbGFzcz0iZmlsZS1uYXZpZ2F0aW9uIGpzLXplcm9jbGlwYm9hcmQtY29udGFpbmVyIj4KICAKPGRpdiBjbGFzcz0ic2VsZWN0LW1lbnUgYnJhbmNoLXNlbGVjdC1tZW51IGpzLW1lbnUtY29udGFpbmVyIGpzLXNlbGVjdC1tZW51IGxlZnQiPgogIDxidXR0b24gY2xhc3M9ImJ0biBidG4tc20gc2VsZWN0LW1lbnUtYnV0dG9uIGpzLW1lbnUtdGFyZ2V0IGNzcy10cnVuY2F0ZSIgZGF0YS1ob3RrZXk9InciCiAgICB0aXRsZT0ibWFzdGVyIgogICAgdHlwZT0iYnV0dG9uIiBhcmlhLWxhYmVsPSJTd2l0Y2ggYnJhbmNoZXMgb3IgdGFncyIgdGFiaW5kZXg9IjAiIGFyaWEtaGFzcG9wdXA9InRydWUiPgogICAgPGk+QnJhbmNoOjwvaT4KICAgIDxzcGFuIGNsYXNzPSJqcy1zZWxlY3QtYnV0dG9uIGNzcy10cnVuY2F0ZS10YXJnZXQiPm1hc3Rlcjwvc3Bhbj4KICA8L2J1dHRvbj4KCiAgPGRpdiBjbGFzcz0ic2VsZWN0LW1lbnUtbW9kYWwtaG9sZGVyIGpzLW1lbnUtY29udGVudCBqcy1uYXZpZ2F0aW9uLWNvbnRhaW5lciIgZGF0YS1wamF4IGFyaWEtaGlkZGVuPSJ0cnVlIj4KCiAgICA8ZGl2IGNsYXNzPSJzZWxlY3QtbWVudS1tb2RhbCI+CiAgICAgIDxkaXYgY2xhc3M9InNlbGVjdC1tZW51LWhlYWRlciI+CiAgICAgICAgPHN2ZyBhcmlhLWxhYmVsPSJDbG9zZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi14IGpzLW1lbnUtY2xvc2UiIGhlaWdodD0iMTYiIHJvbGU9ImltZyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTIgMTYiIHdpZHRoPSIxMiI+PHBhdGggZD0iTTcuNDggOGwzLjc1IDMuNzUtMS40OCAxLjQ4TDYgOS40OGwtMy43NSAzLjc1LTEuNDgtMS40OEw0LjUyIDggLjc3IDQuMjVsMS40OC0xLjQ4TDYgNi41MmwzLjc1LTMuNzUgMS40OCAxLjQ4eiI+PC9wYXRoPjwvc3ZnPgogICAgICAgIDxzcGFuIGNsYXNzPSJzZWxlY3QtbWVudS10aXRsZSI+U3dpdGNoIGJyYW5jaGVzL3RhZ3M8L3NwYW4+CiAgICAgIDwvZGl2PgoKICAgICAgPGRpdiBjbGFzcz0ic2VsZWN0LW1lbnUtZmlsdGVycyI+CiAgICAgICAgPGRpdiBjbGFzcz0ic2VsZWN0LW1lbnUtdGV4dC1maWx0ZXIiPgogICAgICAgICAgPGlucHV0IHR5cGU9InRleHQiIGFyaWEtbGFiZWw9IkZpbHRlciBicmFuY2hlcy90YWdzIiBpZD0iY29udGV4dC1jb21taXRpc2gtZmlsdGVyLWZpZWxkIiBjbGFzcz0iZm9ybS1jb250cm9sIGpzLWZpbHRlcmFibGUtZmllbGQganMtbmF2aWdhdGlvbi1lbmFibGUiIHBsYWNlaG9sZGVyPSJGaWx0ZXIgYnJhbmNoZXMvdGFncyI+CiAgICAgICAgPC9kaXY+CiAgICAgICAgPGRpdiBjbGFzcz0ic2VsZWN0LW1lbnUtdGFicyI+CiAgICAgICAgICA8dWw+CiAgICAgICAgICAgIDxsaSBjbGFzcz0ic2VsZWN0LW1lbnUtdGFiIj4KICAgICAgICAgICAgICA8YSBocmVmPSIjIiBkYXRhLXRhYi1maWx0ZXI9ImJyYW5jaGVzIiBkYXRhLWZpbHRlci1wbGFjZWhvbGRlcj0iRmlsdGVyIGJyYW5jaGVzL3RhZ3MiIGNsYXNzPSJqcy1zZWxlY3QtbWVudS10YWIiIHJvbGU9InRhYiI+QnJhbmNoZXM8L2E+CiAgICAgICAgICAgIDwvbGk+CiAgICAgICAgICAgIDxsaSBjbGFzcz0ic2VsZWN0LW1lbnUtdGFiIj4KICAgICAgICAgICAgICA8YSBocmVmPSIjIiBkYXRhLXRhYi1maWx0ZXI9InRhZ3MiIGRhdGEtZmlsdGVyLXBsYWNlaG9sZGVyPSJGaW5kIGEgdGFn4oCmIiBjbGFzcz0ianMtc2VsZWN0LW1lbnUtdGFiIiByb2xlPSJ0YWIiPlRhZ3M8L2E+CiAgICAgICAgICAgIDwvbGk+CiAgICAgICAgICA8L3VsPgogICAgICAgIDwvZGl2PgogICAgICA8L2Rpdj4KCiAgICAgIDxkaXYgY2xhc3M9InNlbGVjdC1tZW51LWxpc3Qgc2VsZWN0LW1lbnUtdGFiLWJ1Y2tldCBqcy1zZWxlY3QtbWVudS10YWItYnVja2V0IiBkYXRhLXRhYi1maWx0ZXI9ImJyYW5jaGVzIiByb2xlPSJtZW51Ij4KCiAgICAgICAgPGRpdiBkYXRhLWZpbHRlcmFibGUtZm9yPSJjb250ZXh0LWNvbW1pdGlzaC1maWx0ZXItZmllbGQiIGRhdGEtZmlsdGVyYWJsZS10eXBlPSJzdWJzdHJpbmciPgoKCiAgICAgICAgICAgIDxhIGNsYXNzPSJzZWxlY3QtbWVudS1pdGVtIGpzLW5hdmlnYXRpb24taXRlbSBqcy1uYXZpZ2F0aW9uLW9wZW4gc2VsZWN0ZWQiCiAgICAgICAgICAgICAgIGhyZWY9Ii9jeWNnaXQvd2ViLXN0eWxlL2Jsb2IvbWFzdGVyL3NyYy9mb250cy9pY29uZm9udC5zdmciCiAgICAgICAgICAgICAgIGRhdGEtbmFtZT0ibWFzdGVyIgogICAgICAgICAgICAgICBkYXRhLXNraXAtcGpheD0idHJ1ZSIKICAgICAgICAgICAgICAgcmVsPSJub2ZvbGxvdyI+CiAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1jaGVjayBzZWxlY3QtbWVudS1pdGVtLWljb24iIGhlaWdodD0iMTYiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEyIDE2IiB3aWR0aD0iMTIiPjxwYXRoIGQ9Ik0xMiA1bC04IDgtNC00IDEuNS0xLjVMNCAxMGw2LjUtNi41eiI+PC9wYXRoPjwvc3ZnPgogICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJzZWxlY3QtbWVudS1pdGVtLXRleHQgY3NzLXRydW5jYXRlLXRhcmdldCBqcy1zZWxlY3QtbWVudS1maWx0ZXItdGV4dCIgdGl0bGU9Im1hc3RlciI+CiAgICAgICAgICAgICAgICBtYXN0ZXIKICAgICAgICAgICAgICA8L3NwYW4+CiAgICAgICAgICAgIDwvYT4KICAgICAgICA8L2Rpdj4KCiAgICAgICAgICA8ZGl2IGNsYXNzPSJzZWxlY3QtbWVudS1uby1yZXN1bHRzIj5Ob3RoaW5nIHRvIHNob3c8L2Rpdj4KICAgICAgPC9kaXY+CgogICAgICA8ZGl2IGNsYXNzPSJzZWxlY3QtbWVudS1saXN0IHNlbGVjdC1tZW51LXRhYi1idWNrZXQganMtc2VsZWN0LW1lbnUtdGFiLWJ1Y2tldCIgZGF0YS10YWItZmlsdGVyPSJ0YWdzIj4KICAgICAgICA8ZGl2IGRhdGEtZmlsdGVyYWJsZS1mb3I9ImNvbnRleHQtY29tbWl0aXNoLWZpbHRlci1maWVsZCIgZGF0YS1maWx0ZXJhYmxlLXR5cGU9InN1YnN0cmluZyI+CgoKICAgICAgICA8L2Rpdj4KCiAgICAgICAgPGRpdiBjbGFzcz0ic2VsZWN0LW1lbnUtbm8tcmVzdWx0cyI+Tm90aGluZyB0byBzaG93PC9kaXY+CiAgICAgIDwvZGl2PgoKICAgIDwvZGl2PgogIDwvZGl2Pgo8L2Rpdj4KCiAgPGRpdiBjbGFzcz0iYnRuLWdyb3VwIHJpZ2h0Ij4KICAgIDxhIGhyZWY9Ii9jeWNnaXQvd2ViLXN0eWxlL2ZpbmQvbWFzdGVyIgogICAgICAgICAgY2xhc3M9ImpzLXBqYXgtY2FwdHVyZS1pbnB1dCBidG4gYnRuLXNtIgogICAgICAgICAgZGF0YS1wamF4CiAgICAgICAgICBkYXRhLWhvdGtleT0idCI+CiAgICAgIEZpbmQgZmlsZQogICAgPC9hPgogICAgPGJ1dHRvbiBhcmlhLWxhYmVsPSJDb3B5IGZpbGUgcGF0aCB0byBjbGlwYm9hcmQiIGNsYXNzPSJqcy16ZXJvY2xpcGJvYXJkIGJ0biBidG4tc20gemVyb2NsaXBib2FyZC1idXR0b24gdG9vbHRpcHBlZCB0b29sdGlwcGVkLXMiIGRhdGEtY29waWVkLWhpbnQ9IkNvcGllZCEiIHR5cGU9ImJ1dHRvbiI+Q29weSBwYXRoPC9idXR0b24+CiAgPC9kaXY+CiAgPGRpdiBjbGFzcz0iYnJlYWRjcnVtYiBqcy16ZXJvY2xpcGJvYXJkLXRhcmdldCI+CiAgICA8c3BhbiBjbGFzcz0icmVwby1yb290IGpzLXJlcG8tcm9vdCI+PHNwYW4gY2xhc3M9ImpzLXBhdGgtc2VnbWVudCI+PGEgaHJlZj0iL2N5Y2dpdC93ZWItc3R5bGUiPjxzcGFuPndlYi1zdHlsZTwvc3Bhbj48L2E+PC9zcGFuPjwvc3Bhbj48c3BhbiBjbGFzcz0ic2VwYXJhdG9yIj4vPC9zcGFuPjxzcGFuIGNsYXNzPSJqcy1wYXRoLXNlZ21lbnQiPjxhIGhyZWY9Ii9jeWNnaXQvd2ViLXN0eWxlL3RyZWUvbWFzdGVyL3NyYyI+PHNwYW4+c3JjPC9zcGFuPjwvYT48L3NwYW4+PHNwYW4gY2xhc3M9InNlcGFyYXRvciI+Lzwvc3Bhbj48c3BhbiBjbGFzcz0ianMtcGF0aC1zZWdtZW50Ij48YSBocmVmPSIvY3ljZ2l0L3dlYi1zdHlsZS90cmVlL21hc3Rlci9zcmMvZm9udHMiPjxzcGFuPmZvbnRzPC9zcGFuPjwvYT48L3NwYW4+PHNwYW4gY2xhc3M9InNlcGFyYXRvciI+Lzwvc3Bhbj48c3Ryb25nIGNsYXNzPSJmaW5hbC1wYXRoIj5pY29uZm9udC5zdmc8L3N0cm9uZz4KICA8L2Rpdj4KPC9kaXY+Cgo8aW5jbHVkZS1mcmFnbWVudCBjbGFzcz0iY29tbWl0LXRlYXNlIiBzcmM9Ii9jeWNnaXQvd2ViLXN0eWxlL2NvbnRyaWJ1dG9ycy9tYXN0ZXIvc3JjL2ZvbnRzL2ljb25mb250LnN2ZyI+CiAgPGRpdj4KICAgIEZldGNoaW5nIGNvbnRyaWJ1dG9ycyZoZWxsaXA7CiAgPC9kaXY+CgogIDxkaXYgY2xhc3M9ImNvbW1pdC10ZWFzZS1jb250cmlidXRvcnMiPgogICAgPGltZyBhbHQ9IiIgY2xhc3M9ImxvYWRlci1sb2FkaW5nIGxlZnQiIGhlaWdodD0iMTYiIHNyYz0iaHR0cHM6Ly9hc3NldHMtY2RuLmdpdGh1Yi5jb20vaW1hZ2VzL3NwaW5uZXJzL29jdG9jYXQtc3Bpbm5lci0zMi1FQUYyRjUuZ2lmIiB3aWR0aD0iMTYiIC8+CiAgICA8c3BhbiBjbGFzcz0ibG9hZGVyLWVycm9yIj5DYW5ub3QgcmV0cmlldmUgY29udHJpYnV0b3JzIGF0IHRoaXMgdGltZTwvc3Bhbj4KICA8L2Rpdj4KPC9pbmNsdWRlLWZyYWdtZW50Pgo8ZGl2IGNsYXNzPSJmaWxlIj4KICA8ZGl2IGNsYXNzPSJmaWxlLWhlYWRlciI+CiAgPGRpdiBjbGFzcz0iZmlsZS1hY3Rpb25zIj4KICAgICAgPGRpdiBjbGFzcz0iYnRuLWdyb3VwIj4KICAgICAgICA8YSBjbGFzcz0iYnRuIGJ0bi1zbSB0b29sdGlwcGVkIHRvb2x0aXBwZWQgdG9vbHRpcHBlZC1uIHNvdXJjZSAiCiAgICAgICAgICBocmVmPSIvY3ljZ2l0L3dlYi1zdHlsZS9ibG9iL21hc3Rlci9zcmMvZm9udHMvaWNvbmZvbnQuc3ZnP3Nob3J0X3BhdGg9ZmNkZTc0YyIgYXJpYS1sYWJlbD0iRGlzcGxheSB0aGUgc291cmNlIGJsb2IiPgogICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1jb2RlIiBoZWlnaHQ9IjE2IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxNCAxNiIgd2lkdGg9IjE0Ij48cGF0aCBkPSJNOS41IDNMOCA0LjUgMTEuNSA4IDggMTEuNSA5LjUgMTMgMTQgOCA5LjUgM3ptLTUgMEwwIDhsNC41IDVMNiAxMS41IDIuNSA4IDYgNC41IDQuNSAzeiI+PC9wYXRoPjwvc3ZnPgogICAgICAgIDwvYT4KICAgICAgICA8YSBjbGFzcz0iYnRuIGJ0bi1zbSB0b29sdGlwcGVkIHRvb2x0aXBwZWQtbiByZW5kZXJlZCBzZWxlY3RlZCIKICAgICAgICAgIGhyZWY9Ii9jeWNnaXQvd2ViLXN0eWxlL2Jsb2IvbWFzdGVyL3NyYy9mb250cy9pY29uZm9udC5zdmciIGFyaWEtbGFiZWw9IkRpc3BsYXkgdGhlIHJlbmRlcmVkIGJsb2IiPgogICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1maWxlLXRleHQiIGhlaWdodD0iMTYiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEyIDE2IiB3aWR0aD0iMTIiPjxwYXRoIGQ9Ik02IDVIMlY0aDR2MXpNMiA4aDdWN0gydjF6bTAgMmg3VjlIMnYxem0wIDJoN3YtMUgydjF6bTEwLTcuNVYxNGMwIC41NS0uNDUgMS0xIDFIMWMtLjU1IDAtMS0uNDUtMS0xVjJjMC0uNTUuNDUtMSAxLTFoNy41TDEyIDQuNXpNMTEgNUw4IDJIMXYxMmgxMFY1eiI+PC9wYXRoPjwvc3ZnPgogICAgICAgIDwvYT4KICAgICAgPC9kaXY+CgogICAgPGRpdiBjbGFzcz0iYnRuLWdyb3VwIj4KICAgICAgPGEgaHJlZj0iL2N5Y2dpdC93ZWItc3R5bGUvcmF3L21hc3Rlci9zcmMvZm9udHMvaWNvbmZvbnQuc3ZnIiBjbGFzcz0iYnRuIGJ0bi1zbSAiIGlkPSJyYXctdXJsIj5SYXc8L2E+CiAgICAgICAgPGEgaHJlZj0iL2N5Y2dpdC93ZWItc3R5bGUvYmxhbWUvbWFzdGVyL3NyYy9mb250cy9pY29uZm9udC5zdmciIGNsYXNzPSJidG4gYnRuLXNtIGpzLXVwZGF0ZS11cmwtd2l0aC1oYXNoIj5CbGFtZTwvYT4KICAgICAgPGEgaHJlZj0iL2N5Y2dpdC93ZWItc3R5bGUvY29tbWl0cy9tYXN0ZXIvc3JjL2ZvbnRzL2ljb25mb250LnN2ZyIgY2xhc3M9ImJ0biBidG4tc20gIiByZWw9Im5vZm9sbG93Ij5IaXN0b3J5PC9hPgogICAgPC9kaXY+CgogICAgICAgIDxhIGNsYXNzPSJidG4tb2N0aWNvbiB0b29sdGlwcGVkIHRvb2x0aXBwZWQtbnciCiAgICAgICAgICAgaHJlZj0iZ2l0aHViLW1hYzovL29wZW5SZXBvL2h0dHBzOi8vZ2l0aHViLmNvbS9jeWNnaXQvd2ViLXN0eWxlP2JyYW5jaD1tYXN0ZXImYW1wO2ZpbGVwYXRoPXNyYyUyRmZvbnRzJTJGaWNvbmZvbnQuc3ZnIgogICAgICAgICAgIGFyaWEtbGFiZWw9Ik9wZW4gdGhpcyBmaWxlIGluIEdpdEh1YiBEZXNrdG9wIgogICAgICAgICAgIGRhdGEtZ2EtY2xpY2s9IlJlcG9zaXRvcnksIG9wZW4gd2l0aCBkZXNrdG9wLCB0eXBlOm1hYyI+CiAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJvY3RpY29uIG9jdGljb24tZGV2aWNlLWRlc2t0b3AiIGhlaWdodD0iMTYiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE2IDE2IiB3aWR0aD0iMTYiPjxwYXRoIGQ9Ik0xNSAySDFjLS41NSAwLTEgLjQ1LTEgMXY5YzAgLjU1LjQ1IDEgMSAxaDUuMzRjLS4yNS42MS0uODYgMS4zOS0yLjM0IDJoOGMtMS40OC0uNjEtMi4wOS0xLjM5LTIuMzQtMkgxNWMuNTUgMCAxLS40NSAxLTFWM2MwLS41NS0uNDUtMS0xLTF6bTAgOUgxVjNoMTR2OHoiPjwvcGF0aD48L3N2Zz4KICAgICAgICA8L2E+CgogICAgICAgIDwhLS0gPC90ZXh0YXJlYT4gLS0+PCEtLSAnImAgLS0+PGZvcm0gYWNjZXB0LWNoYXJzZXQ9IlVURi04IiBhY3Rpb249Ii9jeWNnaXQvd2ViLXN0eWxlL2VkaXQvbWFzdGVyL3NyYy9mb250cy9pY29uZm9udC5zdmciIGNsYXNzPSJpbmxpbmUtZm9ybSBqcy11cGRhdGUtdXJsLXdpdGgtaGFzaCIgZGF0YS1mb3JtLW5vbmNlPSIzNjAxNTY0MmQwNDliNWI0NjY3MGRkMzVkYWFiMGJlMWM5NzViOTg0IiBtZXRob2Q9InBvc3QiPjxkaXYgc3R5bGU9Im1hcmdpbjowO3BhZGRpbmc6MDtkaXNwbGF5OmlubGluZSI+PGlucHV0IG5hbWU9InV0ZjgiIHR5cGU9ImhpZGRlbiIgdmFsdWU9IiYjeDI3MTM7IiAvPjxpbnB1dCBuYW1lPSJhdXRoZW50aWNpdHlfdG9rZW4iIHR5cGU9ImhpZGRlbiIgdmFsdWU9Im9YTTZFYUt5d09IcGtxVHpjNEJKMG4wUS9CSXlEVU1BMHlCUnpvcktUQVZ0UnhyRy9OdEtSTXFaN2pJUkFSUmdqNUVuZFBUWHk0Q2kzQWJpd1BGV2dBPT0iIC8+PC9kaXY+CiAgICAgICAgICA8YnV0dG9uIGNsYXNzPSJidG4tb2N0aWNvbiB0b29sdGlwcGVkIHRvb2x0aXBwZWQtbnciIHR5cGU9InN1Ym1pdCIKICAgICAgICAgICAgYXJpYS1sYWJlbD0iRm9yayB0aGlzIHByb2plY3QgYW5kIGVkaXQgdGhlIGZpbGUiIGRhdGEtaG90a2V5PSJlIiBkYXRhLWRpc2FibGUtd2l0aD4KICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1wZW5jaWwiIGhlaWdodD0iMTYiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE0IDE2IiB3aWR0aD0iMTQiPjxwYXRoIGQ9Ik0wIDEydjNoM2w4LTgtMy0zLTggOHptMyAySDF2LTJoMXYxaDF2MXptMTAuMy05LjNMMTIgNiA5IDNsMS4zLTEuM2EuOTk2Ljk5NiAwIDAgMSAxLjQxIDBsMS41OSAxLjU5Yy4zOS4zOS4zOSAxLjAyIDAgMS40MXoiPjwvcGF0aD48L3N2Zz4KICAgICAgICAgIDwvYnV0dG9uPgo8L2Zvcm0+ICAgICAgICA8IS0tIDwvdGV4dGFyZWE+IC0tPjwhLS0gJyJgIC0tPjxmb3JtIGFjY2VwdC1jaGFyc2V0PSJVVEYtOCIgYWN0aW9uPSIvY3ljZ2l0L3dlYi1zdHlsZS9kZWxldGUvbWFzdGVyL3NyYy9mb250cy9pY29uZm9udC5zdmciIGNsYXNzPSJpbmxpbmUtZm9ybSIgZGF0YS1mb3JtLW5vbmNlPSIzNjAxNTY0MmQwNDliNWI0NjY3MGRkMzVkYWFiMGJlMWM5NzViOTg0IiBtZXRob2Q9InBvc3QiPjxkaXYgc3R5bGU9Im1hcmdpbjowO3BhZGRpbmc6MDtkaXNwbGF5OmlubGluZSI+PGlucHV0IG5hbWU9InV0ZjgiIHR5cGU9ImhpZGRlbiIgdmFsdWU9IiYjeDI3MTM7IiAvPjxpbnB1dCBuYW1lPSJhdXRoZW50aWNpdHlfdG9rZW4iIHR5cGU9ImhpZGRlbiIgdmFsdWU9IjZvb0ZvYmpNb1g4TW9EWWpPdkUxWGFpejlTRjBBQnlVaGFteGx4ekRveVN0ZkFUeXd3aTV6Y2QyT05YWWt3aGlkOGtVb0U3RHNKd0FiSkp4N3dadTdRPT0iIC8+PC9kaXY+CiAgICAgICAgICA8YnV0dG9uIGNsYXNzPSJidG4tb2N0aWNvbiBidG4tb2N0aWNvbi1kYW5nZXIgdG9vbHRpcHBlZCB0b29sdGlwcGVkLW53IiB0eXBlPSJzdWJtaXQiCiAgICAgICAgICAgIGFyaWEtbGFiZWw9IkZvcmsgdGhpcyBwcm9qZWN0IGFuZCBkZWxldGUgdGhlIGZpbGUiIGRhdGEtZGlzYWJsZS13aXRoPgogICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzcz0ib2N0aWNvbiBvY3RpY29uLXRyYXNoY2FuIiBoZWlnaHQ9IjE2IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMiAxNiIgd2lkdGg9IjEyIj48cGF0aCBkPSJNMTEgMkg5YzAtLjU1LS40NS0xLTEtMUg1Yy0uNTUgMC0xIC40NS0xIDFIMmMtLjU1IDAtMSAuNDUtMSAxdjFjMCAuNTUuNDUgMSAxIDF2OWMwIC41NS40NSAxIDEgMWg3Yy41NSAwIDEtLjQ1IDEtMVY1Yy41NSAwIDEtLjQ1IDEtMVYzYzAtLjU1LS40NS0xLTEtMXptLTEgMTJIM1Y1aDF2OGgxVjVoMXY4aDFWNWgxdjhoMVY1aDF2OXptMS0xMEgyVjNoOXYxeiI+PC9wYXRoPjwvc3ZnPgogICAgICAgICAgPC9idXR0b24+CjwvZm9ybT4gIDwvZGl2PgoKICA8ZGl2IGNsYXNzPSJmaWxlLWluZm8iPgogICAgICA2NjMgbGluZXMgKDY2MiBzbG9jKQogICAgICA8c3BhbiBjbGFzcz0iZmlsZS1pbmZvLWRpdmlkZXIiPjwvc3Bhbj4KICAgIDEwMCBLQgogIDwvZGl2Pgo8L2Rpdj4KCiAgCgogIDxkaXYgaXRlbXByb3A9InRleHQiIGNsYXNzPSJibG9iLXdyYXBwZXIgZGF0YSB0eXBlLXN2ZyI+CiAgICAgIAogIDxkaXYgY2xhc3M9InJlbmRlci13cmFwcGVyIj4KICAgIDxkaXYgY2xhc3M9InJlbmRlci1jb250YWluZXIgaXMtcmVuZGVyLXBlbmRpbmcganMtcmVuZGVyLXRhcmdldCAiCiAgICAgIGRhdGEtaWRlbnRpdHk9ImU3ODBkMjFiLTVkZGYtNDQ3NC1hMjA2LTgzOTQ3Y2YyNWU3MiIKICAgICAgZGF0YS1ob3N0PSJodHRwczovL3JlbmRlci5naXRodWJ1c2VyY29udGVudC5jb20iCiAgICAgIGRhdGEtdHlwZT0ic3ZnIj4KICAgICAgPGltZyBhbHQ9IiIgY2xhc3M9Im9jdG9zcGlubmVyIiBoZWlnaHQ9IjY0IiBzcmM9Imh0dHBzOi8vYXNzZXRzLWNkbi5naXRodWIuY29tL2ltYWdlcy9zcGlubmVycy9vY3RvY2F0LXNwaW5uZXItMTI4LmdpZiIgd2lkdGg9IjY0IiAvPgogICAgICA8ZGl2IGNsYXNzPSJyZW5kZXItdmlld2VyLWVycm9yIj5Tb3JyeSwgc29tZXRoaW5nIHdlbnQgd3JvbmcuIDxhIGhyZWY9Imh0dHBzOi8vZ2l0aHViLmNvbS9jeWNnaXQvd2ViLXN0eWxlL2Jsb2IvbWFzdGVyL3NyYy9mb250cy9pY29uZm9udC5zdmciPlJlbG9hZD88L2E+PC9kaXY+CiAgICAgIDxkaXYgY2xhc3M9InJlbmRlci12aWV3ZXItZmF0YWwiPlNvcnJ5LCB3ZSBjYW5ub3QgZGlzcGxheSB0aGlzIGZpbGUuPC9kaXY+CiAgICAgIDxkaXYgY2xhc3M9InJlbmRlci12aWV3ZXItaW52YWxpZCI+U29ycnksIHRoaXMgZmlsZSBpcyBpbnZhbGlkIHNvIGl0IGNhbm5vdCBiZSBkaXNwbGF5ZWQuPC9kaXY+CiAgICAgIDxpZnJhbWUgY2xhc3M9InJlbmRlci12aWV3ZXIiIHNyYz0iaHR0cHM6Ly9yZW5kZXIuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3ZpZXcvc3ZnP2NvbW1pdD0xYzQwMWQwYjJiODMwNmY4NjZmYzRjMzI4ZWNkNWZhNDE5ZjcwNDc2JmFtcDtlbmNfdXJsPTY4NzQ3NDcwNzMzYTJmMmY3MjYxNzcyZTY3Njk3NDY4NzU2Mjc1NzM2NTcyNjM2ZjZlNzQ2NTZlNzQyZTYzNmY2ZDJmNjM3OTYzNjc2OTc0MmY3NzY1NjIyZDczNzQ3OTZjNjUyZjMxNjMzNDMwMzE2NDMwNjIzMjYyMzgzMzMwMzY2NjM4MzYzNjY2NjMzNDYzMzMzMjM4NjU2MzY0MzU2NjYxMzQzMTM5NjYzNzMwMzQzNzM2MmY3MzcyNjMyZjY2NmY2ZTc0NzMyZjY5NjM2ZjZlNjY2ZjZlNzQyZTczNzY2NyZhbXA7bndvPWN5Y2dpdCUyRndlYi1zdHlsZSZhbXA7cGF0aD1zcmMlMkZmb250cyUyRmljb25mb250LnN2ZyZhbXA7cmVwb3NpdG9yeV9pZD01OTcyNTEyNSNlNzgwZDIxYi01ZGRmLTQ0NzQtYTIwNi04Mzk0N2NmMjVlNzIiIHNhbmRib3g9ImFsbG93LXNjcmlwdHMgYWxsb3ctc2FtZS1vcmlnaW4gYWxsb3ctdG9wLW5hdmlnYXRpb24iPlZpZXdlciByZXF1aXJlcyBpZnJhbWUuPC9pZnJhbWU+CiAgICA8L2Rpdj4KICA8L2Rpdj4KCiAgPC9kaXY+Cgo8L2Rpdj4KCjxidXR0b24gdHlwZT0iYnV0dG9uIiBkYXRhLWZhY2Vib3g9IiNqdW1wLXRvLWxpbmUiIGRhdGEtZmFjZWJveC1jbGFzcz0ibGluZWp1bXAiIGRhdGEtaG90a2V5PSJsIiBjbGFzcz0iaGlkZGVuIj5KdW1wIHRvIExpbmU8L2J1dHRvbj4KPGRpdiBpZD0ianVtcC10by1saW5lIiBzdHlsZT0iZGlzcGxheTpub25lIj4KICA8IS0tIDwvdGV4dGFyZWE+IC0tPjwhLS0gJyJgIC0tPjxmb3JtIGFjY2VwdC1jaGFyc2V0PSJVVEYtOCIgYWN0aW9uPSIiIGNsYXNzPSJqcy1qdW1wLXRvLWxpbmUtZm9ybSIgbWV0aG9kPSJnZXQiPjxkaXYgc3R5bGU9Im1hcmdpbjowO3BhZGRpbmc6MDtkaXNwbGF5OmlubGluZSI+PGlucHV0IG5hbWU9InV0ZjgiIHR5cGU9ImhpZGRlbiIgdmFsdWU9IiYjeDI3MTM7IiAvPjwvZGl2PgogICAgPGlucHV0IGNsYXNzPSJmb3JtLWNvbnRyb2wgbGluZWp1bXAtaW5wdXQganMtanVtcC10by1saW5lLWZpZWxkIiB0eXBlPSJ0ZXh0IiBwbGFjZWhvbGRlcj0iSnVtcCB0byBsaW5lJmhlbGxpcDsiIGFyaWEtbGFiZWw9Ikp1bXAgdG8gbGluZSIgYXV0b2ZvY3VzPgogICAgPGJ1dHRvbiB0eXBlPSJzdWJtaXQiIGNsYXNzPSJidG4iPkdvPC9idXR0b24+CjwvZm9ybT48L2Rpdj4KCiAgPC9kaXY+CiAgPGRpdiBjbGFzcz0ibW9kYWwtYmFja2Ryb3AganMtdG91Y2gtZXZlbnRzIj48L2Rpdj4KPC9kaXY+CgoKICAgIDwvZGl2PgogIDwvZGl2PgoKICAgIDwvZGl2PgoKICAgICAgICA8ZGl2IGNsYXNzPSJjb250YWluZXIgc2l0ZS1mb290ZXItY29udGFpbmVyIj4KICA8ZGl2IGNsYXNzPSJzaXRlLWZvb3RlciIgcm9sZT0iY29udGVudGluZm8iPgogICAgPHVsIGNsYXNzPSJzaXRlLWZvb3Rlci1saW5rcyByaWdodCI+CiAgICAgICAgPGxpPjxhIGhyZWY9Imh0dHBzOi8vc3RhdHVzLmdpdGh1Yi5jb20vIiBkYXRhLWdhLWNsaWNrPSJGb290ZXIsIGdvIHRvIHN0YXR1cywgdGV4dDpzdGF0dXMiPlN0YXR1czwvYT48L2xpPgogICAgICA8bGk+PGEgaHJlZj0iaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbSIgZGF0YS1nYS1jbGljaz0iRm9vdGVyLCBnbyB0byBhcGksIHRleHQ6YXBpIj5BUEk8L2E+PC9saT4KICAgICAgPGxpPjxhIGhyZWY9Imh0dHBzOi8vdHJhaW5pbmcuZ2l0aHViLmNvbSIgZGF0YS1nYS1jbGljaz0iRm9vdGVyLCBnbyB0byB0cmFpbmluZywgdGV4dDp0cmFpbmluZyI+VHJhaW5pbmc8L2E+PC9saT4KICAgICAgPGxpPjxhIGhyZWY9Imh0dHBzOi8vc2hvcC5naXRodWIuY29tIiBkYXRhLWdhLWNsaWNrPSJGb290ZXIsIGdvIHRvIHNob3AsIHRleHQ6c2hvcCI+U2hvcDwvYT48L2xpPgogICAgICAgIDxsaT48YSBocmVmPSJodHRwczovL2dpdGh1Yi5jb20vYmxvZyIgZGF0YS1nYS1jbGljaz0iRm9vdGVyLCBnbyB0byBibG9nLCB0ZXh0OmJsb2ciPkJsb2c8L2E+PC9saT4KICAgICAgICA8bGk+PGEgaHJlZj0iaHR0cHM6Ly9naXRodWIuY29tL2Fib3V0IiBkYXRhLWdhLWNsaWNrPSJGb290ZXIsIGdvIHRvIGFib3V0LCB0ZXh0OmFib3V0Ij5BYm91dDwvYT48L2xpPgoKICAgIDwvdWw+CgogICAgPGEgaHJlZj0iaHR0cHM6Ly9naXRodWIuY29tIiBhcmlhLWxhYmVsPSJIb21lcGFnZSIgY2xhc3M9InNpdGUtZm9vdGVyLW1hcmsiIHRpdGxlPSJHaXRIdWIiPgogICAgICA8c3ZnIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzcz0ib2N0aWNvbiBvY3RpY29uLW1hcmstZ2l0aHViIiBoZWlnaHQ9IjI0IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNOCAwQzMuNTggMCAwIDMuNTggMCA4YzAgMy41NCAyLjI5IDYuNTMgNS40NyA3LjU5LjQuMDcuNTUtLjE3LjU1LS4zOCAwLS4xOS0uMDEtLjgyLS4wMS0xLjQ5LTIuMDEuMzctMi41My0uNDktMi42OS0uOTQtLjA5LS4yMy0uNDgtLjk0LS44Mi0xLjEzLS4yOC0uMTUtLjY4LS41Mi0uMDEtLjUzLjYzLS4wMSAxLjA4LjU4IDEuMjMuODIuNzIgMS4yMSAxLjg3Ljg3IDIuMzMuNjYuMDctLjUyLjI4LS44Ny41MS0xLjA3LTEuNzgtLjItMy42NC0uODktMy42NC0zLjk1IDAtLjg3LjMxLTEuNTkuODItMi4xNS0uMDgtLjItLjM2LTEuMDIuMDgtMi4xMiAwIDAgLjY3LS4yMSAyLjIuODIuNjQtLjE4IDEuMzItLjI3IDItLjI3LjY4IDAgMS4zNi4wOSAyIC4yNyAxLjUzLTEuMDQgMi4yLS44MiAyLjItLjgyLjQ0IDEuMS4xNiAxLjkyLjA4IDIuMTIuNTEuNTYuODIgMS4yNy44MiAyLjE1IDAgMy4wNy0xLjg3IDMuNzUtMy42NSAzLjk1LjI5LjI1LjU0LjczLjU0IDEuNDggMCAxLjA3LS4wMSAxLjkzLS4wMSAyLjIgMCAuMjEuMTUuNDYuNTUuMzhBOC4wMTMgOC4wMTMgMCAwIDAgMTYgOGMwLTQuNDItMy41OC04LTgtOHoiPjwvcGF0aD48L3N2Zz4KPC9hPgogICAgPHVsIGNsYXNzPSJzaXRlLWZvb3Rlci1saW5rcyI+CiAgICAgIDxsaT4mY29weTsgMjAxNiA8c3BhbiB0aXRsZT0iMC4wOTc0M3MgZnJvbSBnaXRodWItZmUxMjYtY3AxLXByZC5pYWQuZ2l0aHViLm5ldCI+R2l0SHViPC9zcGFuPiwgSW5jLjwvbGk+CiAgICAgICAgPGxpPjxhIGhyZWY9Imh0dHBzOi8vZ2l0aHViLmNvbS9zaXRlL3Rlcm1zIiBkYXRhLWdhLWNsaWNrPSJGb290ZXIsIGdvIHRvIHRlcm1zLCB0ZXh0OnRlcm1zIj5UZXJtczwvYT48L2xpPgogICAgICAgIDxsaT48YSBocmVmPSJodHRwczovL2dpdGh1Yi5jb20vc2l0ZS9wcml2YWN5IiBkYXRhLWdhLWNsaWNrPSJGb290ZXIsIGdvIHRvIHByaXZhY3ksIHRleHQ6cHJpdmFjeSI+UHJpdmFjeTwvYT48L2xpPgogICAgICAgIDxsaT48YSBocmVmPSJodHRwczovL2dpdGh1Yi5jb20vc2VjdXJpdHkiIGRhdGEtZ2EtY2xpY2s9IkZvb3RlciwgZ28gdG8gc2VjdXJpdHksIHRleHQ6c2VjdXJpdHkiPlNlY3VyaXR5PC9hPjwvbGk+CiAgICAgICAgPGxpPjxhIGhyZWY9Imh0dHBzOi8vZ2l0aHViLmNvbS9jb250YWN0IiBkYXRhLWdhLWNsaWNrPSJGb290ZXIsIGdvIHRvIGNvbnRhY3QsIHRleHQ6Y29udGFjdCI+Q29udGFjdDwvYT48L2xpPgogICAgICAgIDxsaT48YSBocmVmPSJodHRwczovL2hlbHAuZ2l0aHViLmNvbSIgZGF0YS1nYS1jbGljaz0iRm9vdGVyLCBnbyB0byBoZWxwLCB0ZXh0OmhlbHAiPkhlbHA8L2E+PC9saT4KICAgIDwvdWw+CiAgPC9kaXY+CjwvZGl2PgoKCgogICAgCgogICAgPGRpdiBpZD0iYWpheC1lcnJvci1tZXNzYWdlIiBjbGFzcz0iYWpheC1lcnJvci1tZXNzYWdlIGZsYXNoIGZsYXNoLWVycm9yIj4KICAgICAgPHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi1hbGVydCIgaGVpZ2h0PSIxNiIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiI+PHBhdGggZD0iTTguODY1IDEuNTJjLS4xOC0uMzEtLjUxLS41LS44Ny0uNXMtLjY5LjE5LS44Ny41TC4yNzUgMTMuNWMtLjE4LjMxLS4xOC42OSAwIDEgLjE5LjMxLjUyLjUuODcuNWgxMy43Yy4zNiAwIC42OS0uMTkuODYtLjUuMTctLjMxLjE4LS42OS4wMS0xTDguODY1IDEuNTJ6TTguOTk1IDEzaC0ydi0yaDJ2MnptMC0zaC0yVjZoMnY0eiI+PC9wYXRoPjwvc3ZnPgogICAgICA8YnV0dG9uIHR5cGU9ImJ1dHRvbiIgY2xhc3M9ImZsYXNoLWNsb3NlIGpzLWZsYXNoLWNsb3NlIGpzLWFqYXgtZXJyb3ItZGlzbWlzcyIgYXJpYS1sYWJlbD0iRGlzbWlzcyBlcnJvciI+CiAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi14IiBoZWlnaHQ9IjE2IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMiAxNiIgd2lkdGg9IjEyIj48cGF0aCBkPSJNNy40OCA4bDMuNzUgMy43NS0xLjQ4IDEuNDhMNiA5LjQ4bC0zLjc1IDMuNzUtMS40OC0xLjQ4TDQuNTIgOCAuNzcgNC4yNWwxLjQ4LTEuNDhMNiA2LjUybDMuNzUtMy43NSAxLjQ4IDEuNDh6Ij48L3BhdGg+PC9zdmc+CiAgICAgIDwvYnV0dG9uPgogICAgICBTb21ldGhpbmcgd2VudCB3cm9uZyB3aXRoIHRoYXQgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2Fpbi4KICAgIDwvZGl2PgoKCiAgICAgIAogICAgICA8c2NyaXB0IGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiIGludGVncml0eT0ic2hhMjU2LSthUUdGK1hxY1RRdHhYRURWVXNIbzhIdHlJY1NzRTNob0VDdTFFaVJvUjA9IiBzcmM9Imh0dHBzOi8vYXNzZXRzLWNkbi5naXRodWIuY29tL2Fzc2V0cy9mcmFtZXdvcmtzLWY5YTQwNjE3ZTVlYTcxMzQyZGM1NzEwMzU1NGIwN2EzYzFlZGM4ODcxMmIwNGRlMWEwNDBhZWQ0NDg5MWExMWQuanMiPjwvc2NyaXB0PgogICAgICA8c2NyaXB0IGFzeW5jPSJhc3luYyIgY3Jvc3NvcmlnaW49ImFub255bW91cyIgaW50ZWdyaXR5PSJzaGEyNTYtRmFBUnZCZXVXTUdNdDBWOVlaUXBCS1A0ZlgxZFpmYytwdXZFejZZUFBiYz0iIHNyYz0iaHR0cHM6Ly9hc3NldHMtY2RuLmdpdGh1Yi5jb20vYXNzZXRzL2dpdGh1Yi0xNWEwMTFiYzE3YWU1OGMxOGNiNzQ1N2Q2MTk0MjkwNGEzZjg3ZDdkNWQ2NWY3M2VhNmViYzRjZmE2MGYzZGI3LmpzIj48L3NjcmlwdD4KICAgICAgCiAgICAgIAogICAgICAKICAgICAgCiAgICAgIAogICAgICAKICAgIDxkaXYgY2xhc3M9ImpzLXN0YWxlLXNlc3Npb24tZmxhc2ggc3RhbGUtc2Vzc2lvbi1mbGFzaCBmbGFzaCBmbGFzaC13YXJuIGZsYXNoLWJhbm5lciBoaWRkZW4iPgogICAgICA8c3ZnIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzcz0ib2N0aWNvbiBvY3RpY29uLWFsZXJ0IiBoZWlnaHQ9IjE2IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2Ij48cGF0aCBkPSJNOC44NjUgMS41MmMtLjE4LS4zMS0uNTEtLjUtLjg3LS41cy0uNjkuMTktLjg3LjVMLjI3NSAxMy41Yy0uMTguMzEtLjE4LjY5IDAgMSAuMTkuMzEuNTIuNS44Ny41aDEzLjdjLjM2IDAgLjY5LS4xOS44Ni0uNS4xNy0uMzEuMTgtLjY5LjAxLTFMOC44NjUgMS41MnpNOC45OTUgMTNoLTJ2LTJoMnYyem0wLTNoLTJWNmgydjR6Ij48L3BhdGg+PC9zdmc+CiAgICAgIDxzcGFuIGNsYXNzPSJzaWduZWQtaW4tdGFiLWZsYXNoIj5Zb3Ugc2lnbmVkIGluIHdpdGggYW5vdGhlciB0YWIgb3Igd2luZG93LiA8YSBocmVmPSIiPlJlbG9hZDwvYT4gdG8gcmVmcmVzaCB5b3VyIHNlc3Npb24uPC9zcGFuPgogICAgICA8c3BhbiBjbGFzcz0ic2lnbmVkLW91dC10YWItZmxhc2giPllvdSBzaWduZWQgb3V0IGluIGFub3RoZXIgdGFiIG9yIHdpbmRvdy4gPGEgaHJlZj0iIj5SZWxvYWQ8L2E+IHRvIHJlZnJlc2ggeW91ciBzZXNzaW9uLjwvc3Bhbj4KICAgIDwvZGl2PgogICAgPGRpdiBjbGFzcz0iZmFjZWJveCIgaWQ9ImZhY2Vib3giIHN0eWxlPSJkaXNwbGF5Om5vbmU7Ij4KICA8ZGl2IGNsYXNzPSJmYWNlYm94LXBvcHVwIj4KICAgIDxkaXYgY2xhc3M9ImZhY2Vib3gtY29udGVudCIgcm9sZT0iZGlhbG9nIiBhcmlhLWxhYmVsbGVkYnk9ImZhY2Vib3gtaGVhZGVyIiBhcmlhLWRlc2NyaWJlZGJ5PSJmYWNlYm94LWRlc2NyaXB0aW9uIj4KICAgIDwvZGl2PgogICAgPGJ1dHRvbiB0eXBlPSJidXR0b24iIGNsYXNzPSJmYWNlYm94LWNsb3NlIGpzLWZhY2Vib3gtY2xvc2UiIGFyaWEtbGFiZWw9IkNsb3NlIG1vZGFsIj4KICAgICAgPHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgY2xhc3M9Im9jdGljb24gb2N0aWNvbi14IiBoZWlnaHQ9IjE2IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMiAxNiIgd2lkdGg9IjEyIj48cGF0aCBkPSJNNy40OCA4bDMuNzUgMy43NS0xLjQ4IDEuNDhMNiA5LjQ4bC0zLjc1IDMuNzUtMS40OC0xLjQ4TDQuNTIgOCAuNzcgNC4yNWwxLjQ4LTEuNDhMNiA2LjUybDMuNzUtMy43NSAxLjQ4IDEuNDh6Ij48L3BhdGg+PC9zdmc+CiAgICA8L2J1dHRvbj4KICA8L2Rpdj4KPC9kaXY+CgogIDwvYm9keT4KPC9odG1sPgoK"

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "<div class=\"modal-mask\"  ms-visible=\"@isShow\" ms-effect=\"{is:'modal'}\">\n    <div class=\"modal-box\">\n        <div class=\"modal-header\">\n            <h3>{{@title}}</h3>\n            <i class=\"iconfont icon-cross\" ms-click=\"@cbProxy(false)\"></i>\n        </div>\n        <div class=\"modal-body\">\n            <slot name=\"content\"></slot>\n        </div>\n        <div class=\"modal-footer\">\n            <button class=\"btn\" ms-click=\"@cbProxy(false)\">取 消</button>\n            <button class=\"btn btn-primary\" ms-click=\"@cbProxy(true)\">确 定</button>\n        </div>\n    </div>\n</div>"

/***/ }
/******/ ])
});
;