(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
var Vue = require('vue');
var VueRes = require('vue-resource');

Vue.use(VueRes);

var App = require('./templates/app.vue');

new Vue({
    el: "#vueapp",
    components: {
        app: App
    }
})

}).call(this,require("Wb8Gej"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_14c8f0c0.js","/")
},{"./templates/app.vue":2,"Wb8Gej":5,"buffer":6,"vue":10,"vue-resource":9}],2:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bodynews = require('./bodynews.vue');

var _bodynews2 = _interopRequireDefault(_bodynews);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            siteName: '',
            siteHelp: ''
        };
    },
    ready: function ready() {
        var _this = this;

        this.$http.get('/api/v1/about').then(function (response) {

            // get status
            response.status;
            // get status text
            response.statusText;
            // get all headers
            response.headers;
            // get 'Expires' header
            response.headers['Expires'];
            // set data on vm
            console.log(response.json());
            //this.$set('someData', response.json())
            _this.$set('siteName', response.json().siteName);
            _this.$set('siteHelp', response.json().siteHelp);
        }, function (response) {
            // error callback
        });
    },

    components: {
        bodynews: _bodynews2.default
    }

};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n\n<div class=\"row main-header\">\n    <div class=\"col-xs-12 col-sm-2\">\n        <div class=\"logo\">\n            <a href=\"/\">\n                <img src=\"/assets/img/logo.png\" alt=\"logo\">\n            </a>\n        </div>\n    </div>\n    <div class=\"col-xs-12 col-sm-9 col-sm-offset-1 col-md-7 col-md-offset-0\">\n        <h1>\n        <span id=\"site-name-header\">{{ siteName }}</span>\n      </h1>\n        <span id=\"help-header\" class=\"little-help\">{{ siteHelp }}</span>\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-3 col-lg-3\">\n        <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\">\n            <span class=\"input-group-btn\">\n          <button class=\"btn btn-default\" type=\"button\">Go!</button>\n        </span>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div v-for=\"bn in bodynews\">\n        <bodynews :bodynews=\"bn\"></bodynews>\n    </div>\n</div>\n\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  if (!module.hot.data) {
    hotAPI.createRecord("_v-2e5f4afc", module.exports)
  } else {
    hotAPI.update("_v-2e5f4afc", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
}).call(this,require("Wb8Gej"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/templates/app.vue","/templates")
},{"./bodynews.vue":3,"Wb8Gej":5,"buffer":6,"vue":10,"vue-hot-reload-api":8}],3:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n\n<div class=\"\">\n  body\n</div>\n\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  if (!module.hot.data) {
    hotAPI.createRecord("_v-1e7c82ac", module.exports)
  } else {
    hotAPI.update("_v-1e7c82ac", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
}).call(this,require("Wb8Gej"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/templates/bodynews.vue","/templates")
},{"Wb8Gej":5,"buffer":6,"vue":10,"vue-hot-reload-api":8}],4:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

;(function (exports) {
	'use strict';

  var Arr = (typeof Uint8Array !== 'undefined')
    ? Uint8Array
    : Array

	var PLUS   = '+'.charCodeAt(0)
	var SLASH  = '/'.charCodeAt(0)
	var NUMBER = '0'.charCodeAt(0)
	var LOWER  = 'a'.charCodeAt(0)
	var UPPER  = 'A'.charCodeAt(0)
	var PLUS_URL_SAFE = '-'.charCodeAt(0)
	var SLASH_URL_SAFE = '_'.charCodeAt(0)

	function decode (elt) {
		var code = elt.charCodeAt(0)
		if (code === PLUS ||
		    code === PLUS_URL_SAFE)
			return 62 // '+'
		if (code === SLASH ||
		    code === SLASH_URL_SAFE)
			return 63 // '/'
		if (code < NUMBER)
			return -1 //no match
		if (code < NUMBER + 10)
			return code - NUMBER + 26 + 26
		if (code < UPPER + 26)
			return code - UPPER
		if (code < LOWER + 26)
			return code - LOWER + 26
	}

	function b64ToByteArray (b64) {
		var i, j, l, tmp, placeHolders, arr

		if (b64.length % 4 > 0) {
			throw new Error('Invalid string. Length must be a multiple of 4')
		}

		// the number of equal signs (place holders)
		// if there are two placeholders, than the two characters before it
		// represent one byte
		// if there is only one, then the three characters before it represent 2 bytes
		// this is just a cheap hack to not do indexOf twice
		var len = b64.length
		placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

		// base64 is 4/3 + up to two characters of the original data
		arr = new Arr(b64.length * 3 / 4 - placeHolders)

		// if there are placeholders, only get up to the last complete 4 chars
		l = placeHolders > 0 ? b64.length - 4 : b64.length

		var L = 0

		function push (v) {
			arr[L++] = v
		}

		for (i = 0, j = 0; i < l; i += 4, j += 3) {
			tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
			push((tmp & 0xFF0000) >> 16)
			push((tmp & 0xFF00) >> 8)
			push(tmp & 0xFF)
		}

		if (placeHolders === 2) {
			tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
			push(tmp & 0xFF)
		} else if (placeHolders === 1) {
			tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
			push((tmp >> 8) & 0xFF)
			push(tmp & 0xFF)
		}

		return arr
	}

	function uint8ToBase64 (uint8) {
		var i,
			extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
			output = "",
			temp, length

		function encode (num) {
			return lookup.charAt(num)
		}

		function tripletToBase64 (num) {
			return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
		}

		// go through the array every three bytes, we'll deal with trailing stuff later
		for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
			temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
			output += tripletToBase64(temp)
		}

		// pad the end with zeros, but make sure to not forget the extra bytes
		switch (extraBytes) {
			case 1:
				temp = uint8[uint8.length - 1]
				output += encode(temp >> 2)
				output += encode((temp << 4) & 0x3F)
				output += '=='
				break
			case 2:
				temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
				output += encode(temp >> 10)
				output += encode((temp >> 4) & 0x3F)
				output += encode((temp << 2) & 0x3F)
				output += '='
				break
		}

		return output
	}

	exports.toByteArray = b64ToByteArray
	exports.fromByteArray = uint8ToBase64
}(typeof exports === 'undefined' ? (this.base64js = {}) : exports))

}).call(this,require("Wb8Gej"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/base64-js/lib/b64.js","/../../node_modules/base64-js/lib")
},{"Wb8Gej":5,"buffer":6}],5:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

}).call(this,require("Wb8Gej"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/browserify/node_modules/process/browser.js","/../../node_modules/browserify/node_modules/process")
},{"Wb8Gej":5,"buffer":6}],6:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

var base64 = require('base64-js')
var ieee754 = require('ieee754')

exports.Buffer = Buffer
exports.SlowBuffer = Buffer
exports.INSPECT_MAX_BYTES = 50
Buffer.poolSize = 8192

/**
 * If `Buffer._useTypedArrays`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (compatible down to IE6)
 */
Buffer._useTypedArrays = (function () {
  // Detect if browser supports Typed Arrays. Supported browsers are IE 10+, Firefox 4+,
  // Chrome 7+, Safari 5.1+, Opera 11.6+, iOS 4.2+. If the browser does not support adding
  // properties to `Uint8Array` instances, then that's the same as no `Uint8Array` support
  // because we need to be able to add all the node Buffer API methods. This is an issue
  // in Firefox 4-29. Now fixed: https://bugzilla.mozilla.org/show_bug.cgi?id=695438
  try {
    var buf = new ArrayBuffer(0)
    var arr = new Uint8Array(buf)
    arr.foo = function () { return 42 }
    return 42 === arr.foo() &&
        typeof arr.subarray === 'function' // Chrome 9-10 lack `subarray`
  } catch (e) {
    return false
  }
})()

/**
 * Class: Buffer
 * =============
 *
 * The Buffer constructor returns instances of `Uint8Array` that are augmented
 * with function properties for all the node `Buffer` API functions. We use
 * `Uint8Array` so that square bracket notation works as expected -- it returns
 * a single octet.
 *
 * By augmenting the instances, we can avoid modifying the `Uint8Array`
 * prototype.
 */
function Buffer (subject, encoding, noZero) {
  if (!(this instanceof Buffer))
    return new Buffer(subject, encoding, noZero)

  var type = typeof subject

  // Workaround: node's base64 implementation allows for non-padded strings
  // while base64-js does not.
  if (encoding === 'base64' && type === 'string') {
    subject = stringtrim(subject)
    while (subject.length % 4 !== 0) {
      subject = subject + '='
    }
  }

  // Find the length
  var length
  if (type === 'number')
    length = coerce(subject)
  else if (type === 'string')
    length = Buffer.byteLength(subject, encoding)
  else if (type === 'object')
    length = coerce(subject.length) // assume that object is array-like
  else
    throw new Error('First argument needs to be a number, array or string.')

  var buf
  if (Buffer._useTypedArrays) {
    // Preferred: Return an augmented `Uint8Array` instance for best performance
    buf = Buffer._augment(new Uint8Array(length))
  } else {
    // Fallback: Return THIS instance of Buffer (created by `new`)
    buf = this
    buf.length = length
    buf._isBuffer = true
  }

  var i
  if (Buffer._useTypedArrays && typeof subject.byteLength === 'number') {
    // Speed optimization -- use set if we're copying from a typed array
    buf._set(subject)
  } else if (isArrayish(subject)) {
    // Treat array-ish objects as a byte array
    for (i = 0; i < length; i++) {
      if (Buffer.isBuffer(subject))
        buf[i] = subject.readUInt8(i)
      else
        buf[i] = subject[i]
    }
  } else if (type === 'string') {
    buf.write(subject, 0, encoding)
  } else if (type === 'number' && !Buffer._useTypedArrays && !noZero) {
    for (i = 0; i < length; i++) {
      buf[i] = 0
    }
  }

  return buf
}

// STATIC METHODS
// ==============

Buffer.isEncoding = function (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.isBuffer = function (b) {
  return !!(b !== null && b !== undefined && b._isBuffer)
}

Buffer.byteLength = function (str, encoding) {
  var ret
  str = str + ''
  switch (encoding || 'utf8') {
    case 'hex':
      ret = str.length / 2
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8ToBytes(str).length
      break
    case 'ascii':
    case 'binary':
    case 'raw':
      ret = str.length
      break
    case 'base64':
      ret = base64ToBytes(str).length
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = str.length * 2
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.concat = function (list, totalLength) {
  assert(isArray(list), 'Usage: Buffer.concat(list, [totalLength])\n' +
      'list should be an Array.')

  if (list.length === 0) {
    return new Buffer(0)
  } else if (list.length === 1) {
    return list[0]
  }

  var i
  if (typeof totalLength !== 'number') {
    totalLength = 0
    for (i = 0; i < list.length; i++) {
      totalLength += list[i].length
    }
  }

  var buf = new Buffer(totalLength)
  var pos = 0
  for (i = 0; i < list.length; i++) {
    var item = list[i]
    item.copy(buf, pos)
    pos += item.length
  }
  return buf
}

// BUFFER INSTANCE METHODS
// =======================

function _hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  assert(strLen % 2 === 0, 'Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var byte = parseInt(string.substr(i * 2, 2), 16)
    assert(!isNaN(byte), 'Invalid hex string')
    buf[offset + i] = byte
  }
  Buffer._charsWritten = i * 2
  return i
}

function _utf8Write (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(utf8ToBytes(string), buf, offset, length)
  return charsWritten
}

function _asciiWrite (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(asciiToBytes(string), buf, offset, length)
  return charsWritten
}

function _binaryWrite (buf, string, offset, length) {
  return _asciiWrite(buf, string, offset, length)
}

function _base64Write (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(base64ToBytes(string), buf, offset, length)
  return charsWritten
}

function _utf16leWrite (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(utf16leToBytes(string), buf, offset, length)
  return charsWritten
}

Buffer.prototype.write = function (string, offset, length, encoding) {
  // Support both (string, offset, length, encoding)
  // and the legacy (string, encoding, offset, length)
  if (isFinite(offset)) {
    if (!isFinite(length)) {
      encoding = length
      length = undefined
    }
  } else {  // legacy
    var swap = encoding
    encoding = offset
    offset = length
    length = swap
  }

  offset = Number(offset) || 0
  var remaining = this.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }
  encoding = String(encoding || 'utf8').toLowerCase()

  var ret
  switch (encoding) {
    case 'hex':
      ret = _hexWrite(this, string, offset, length)
      break
    case 'utf8':
    case 'utf-8':
      ret = _utf8Write(this, string, offset, length)
      break
    case 'ascii':
      ret = _asciiWrite(this, string, offset, length)
      break
    case 'binary':
      ret = _binaryWrite(this, string, offset, length)
      break
    case 'base64':
      ret = _base64Write(this, string, offset, length)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = _utf16leWrite(this, string, offset, length)
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.prototype.toString = function (encoding, start, end) {
  var self = this

  encoding = String(encoding || 'utf8').toLowerCase()
  start = Number(start) || 0
  end = (end !== undefined)
    ? Number(end)
    : end = self.length

  // Fastpath empty strings
  if (end === start)
    return ''

  var ret
  switch (encoding) {
    case 'hex':
      ret = _hexSlice(self, start, end)
      break
    case 'utf8':
    case 'utf-8':
      ret = _utf8Slice(self, start, end)
      break
    case 'ascii':
      ret = _asciiSlice(self, start, end)
      break
    case 'binary':
      ret = _binarySlice(self, start, end)
      break
    case 'base64':
      ret = _base64Slice(self, start, end)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = _utf16leSlice(self, start, end)
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.prototype.toJSON = function () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function (target, target_start, start, end) {
  var source = this

  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (!target_start) target_start = 0

  // Copy 0 bytes; we're done
  if (end === start) return
  if (target.length === 0 || source.length === 0) return

  // Fatal error conditions
  assert(end >= start, 'sourceEnd < sourceStart')
  assert(target_start >= 0 && target_start < target.length,
      'targetStart out of bounds')
  assert(start >= 0 && start < source.length, 'sourceStart out of bounds')
  assert(end >= 0 && end <= source.length, 'sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length)
    end = this.length
  if (target.length - target_start < end - start)
    end = target.length - target_start + start

  var len = end - start

  if (len < 100 || !Buffer._useTypedArrays) {
    for (var i = 0; i < len; i++)
      target[i + target_start] = this[i + start]
  } else {
    target._set(this.subarray(start, start + len), target_start)
  }
}

function _base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function _utf8Slice (buf, start, end) {
  var res = ''
  var tmp = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    if (buf[i] <= 0x7F) {
      res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i])
      tmp = ''
    } else {
      tmp += '%' + buf[i].toString(16)
    }
  }

  return res + decodeUtf8Char(tmp)
}

function _asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++)
    ret += String.fromCharCode(buf[i])
  return ret
}

function _binarySlice (buf, start, end) {
  return _asciiSlice(buf, start, end)
}

function _hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; i++) {
    out += toHex(buf[i])
  }
  return out
}

function _utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i+1] * 256)
  }
  return res
}

Buffer.prototype.slice = function (start, end) {
  var len = this.length
  start = clamp(start, len, 0)
  end = clamp(end, len, len)

  if (Buffer._useTypedArrays) {
    return Buffer._augment(this.subarray(start, end))
  } else {
    var sliceLen = end - start
    var newBuf = new Buffer(sliceLen, undefined, true)
    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
    return newBuf
  }
}

// `get` will be removed in Node 0.13+
Buffer.prototype.get = function (offset) {
  console.log('.get() is deprecated. Access using array indexes instead.')
  return this.readUInt8(offset)
}

// `set` will be removed in Node 0.13+
Buffer.prototype.set = function (v, offset) {
  console.log('.set() is deprecated. Access using array indexes instead.')
  return this.writeUInt8(v, offset)
}

Buffer.prototype.readUInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'Trying to read beyond buffer length')
  }

  if (offset >= this.length)
    return

  return this[offset]
}

function _readUInt16 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val
  if (littleEndian) {
    val = buf[offset]
    if (offset + 1 < len)
      val |= buf[offset + 1] << 8
  } else {
    val = buf[offset] << 8
    if (offset + 1 < len)
      val |= buf[offset + 1]
  }
  return val
}

Buffer.prototype.readUInt16LE = function (offset, noAssert) {
  return _readUInt16(this, offset, true, noAssert)
}

Buffer.prototype.readUInt16BE = function (offset, noAssert) {
  return _readUInt16(this, offset, false, noAssert)
}

function _readUInt32 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val
  if (littleEndian) {
    if (offset + 2 < len)
      val = buf[offset + 2] << 16
    if (offset + 1 < len)
      val |= buf[offset + 1] << 8
    val |= buf[offset]
    if (offset + 3 < len)
      val = val + (buf[offset + 3] << 24 >>> 0)
  } else {
    if (offset + 1 < len)
      val = buf[offset + 1] << 16
    if (offset + 2 < len)
      val |= buf[offset + 2] << 8
    if (offset + 3 < len)
      val |= buf[offset + 3]
    val = val + (buf[offset] << 24 >>> 0)
  }
  return val
}

Buffer.prototype.readUInt32LE = function (offset, noAssert) {
  return _readUInt32(this, offset, true, noAssert)
}

Buffer.prototype.readUInt32BE = function (offset, noAssert) {
  return _readUInt32(this, offset, false, noAssert)
}

Buffer.prototype.readInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null,
        'missing offset')
    assert(offset < this.length, 'Trying to read beyond buffer length')
  }

  if (offset >= this.length)
    return

  var neg = this[offset] & 0x80
  if (neg)
    return (0xff - this[offset] + 1) * -1
  else
    return this[offset]
}

function _readInt16 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val = _readUInt16(buf, offset, littleEndian, true)
  var neg = val & 0x8000
  if (neg)
    return (0xffff - val + 1) * -1
  else
    return val
}

Buffer.prototype.readInt16LE = function (offset, noAssert) {
  return _readInt16(this, offset, true, noAssert)
}

Buffer.prototype.readInt16BE = function (offset, noAssert) {
  return _readInt16(this, offset, false, noAssert)
}

function _readInt32 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val = _readUInt32(buf, offset, littleEndian, true)
  var neg = val & 0x80000000
  if (neg)
    return (0xffffffff - val + 1) * -1
  else
    return val
}

Buffer.prototype.readInt32LE = function (offset, noAssert) {
  return _readInt32(this, offset, true, noAssert)
}

Buffer.prototype.readInt32BE = function (offset, noAssert) {
  return _readInt32(this, offset, false, noAssert)
}

function _readFloat (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  return ieee754.read(buf, offset, littleEndian, 23, 4)
}

Buffer.prototype.readFloatLE = function (offset, noAssert) {
  return _readFloat(this, offset, true, noAssert)
}

Buffer.prototype.readFloatBE = function (offset, noAssert) {
  return _readFloat(this, offset, false, noAssert)
}

function _readDouble (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset + 7 < buf.length, 'Trying to read beyond buffer length')
  }

  return ieee754.read(buf, offset, littleEndian, 52, 8)
}

Buffer.prototype.readDoubleLE = function (offset, noAssert) {
  return _readDouble(this, offset, true, noAssert)
}

Buffer.prototype.readDoubleBE = function (offset, noAssert) {
  return _readDouble(this, offset, false, noAssert)
}

Buffer.prototype.writeUInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'trying to write beyond buffer length')
    verifuint(value, 0xff)
  }

  if (offset >= this.length) return

  this[offset] = value
}

function _writeUInt16 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'trying to write beyond buffer length')
    verifuint(value, 0xffff)
  }

  var len = buf.length
  if (offset >= len)
    return

  for (var i = 0, j = Math.min(len - offset, 2); i < j; i++) {
    buf[offset + i] =
        (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
            (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function (value, offset, noAssert) {
  _writeUInt16(this, value, offset, true, noAssert)
}

Buffer.prototype.writeUInt16BE = function (value, offset, noAssert) {
  _writeUInt16(this, value, offset, false, noAssert)
}

function _writeUInt32 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'trying to write beyond buffer length')
    verifuint(value, 0xffffffff)
  }

  var len = buf.length
  if (offset >= len)
    return

  for (var i = 0, j = Math.min(len - offset, 4); i < j; i++) {
    buf[offset + i] =
        (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function (value, offset, noAssert) {
  _writeUInt32(this, value, offset, true, noAssert)
}

Buffer.prototype.writeUInt32BE = function (value, offset, noAssert) {
  _writeUInt32(this, value, offset, false, noAssert)
}

Buffer.prototype.writeInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7f, -0x80)
  }

  if (offset >= this.length)
    return

  if (value >= 0)
    this.writeUInt8(value, offset, noAssert)
  else
    this.writeUInt8(0xff + value + 1, offset, noAssert)
}

function _writeInt16 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7fff, -0x8000)
  }

  var len = buf.length
  if (offset >= len)
    return

  if (value >= 0)
    _writeUInt16(buf, value, offset, littleEndian, noAssert)
  else
    _writeUInt16(buf, 0xffff + value + 1, offset, littleEndian, noAssert)
}

Buffer.prototype.writeInt16LE = function (value, offset, noAssert) {
  _writeInt16(this, value, offset, true, noAssert)
}

Buffer.prototype.writeInt16BE = function (value, offset, noAssert) {
  _writeInt16(this, value, offset, false, noAssert)
}

function _writeInt32 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7fffffff, -0x80000000)
  }

  var len = buf.length
  if (offset >= len)
    return

  if (value >= 0)
    _writeUInt32(buf, value, offset, littleEndian, noAssert)
  else
    _writeUInt32(buf, 0xffffffff + value + 1, offset, littleEndian, noAssert)
}

Buffer.prototype.writeInt32LE = function (value, offset, noAssert) {
  _writeInt32(this, value, offset, true, noAssert)
}

Buffer.prototype.writeInt32BE = function (value, offset, noAssert) {
  _writeInt32(this, value, offset, false, noAssert)
}

function _writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length')
    verifIEEE754(value, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }

  var len = buf.length
  if (offset >= len)
    return

  ieee754.write(buf, value, offset, littleEndian, 23, 4)
}

Buffer.prototype.writeFloatLE = function (value, offset, noAssert) {
  _writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function (value, offset, noAssert) {
  _writeFloat(this, value, offset, false, noAssert)
}

function _writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 7 < buf.length,
        'Trying to write beyond buffer length')
    verifIEEE754(value, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }

  var len = buf.length
  if (offset >= len)
    return

  ieee754.write(buf, value, offset, littleEndian, 52, 8)
}

Buffer.prototype.writeDoubleLE = function (value, offset, noAssert) {
  _writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function (value, offset, noAssert) {
  _writeDouble(this, value, offset, false, noAssert)
}

// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function (value, start, end) {
  if (!value) value = 0
  if (!start) start = 0
  if (!end) end = this.length

  if (typeof value === 'string') {
    value = value.charCodeAt(0)
  }

  assert(typeof value === 'number' && !isNaN(value), 'value is not a number')
  assert(end >= start, 'end < start')

  // Fill 0 bytes; we're done
  if (end === start) return
  if (this.length === 0) return

  assert(start >= 0 && start < this.length, 'start out of bounds')
  assert(end >= 0 && end <= this.length, 'end out of bounds')

  for (var i = start; i < end; i++) {
    this[i] = value
  }
}

Buffer.prototype.inspect = function () {
  var out = []
  var len = this.length
  for (var i = 0; i < len; i++) {
    out[i] = toHex(this[i])
    if (i === exports.INSPECT_MAX_BYTES) {
      out[i + 1] = '...'
      break
    }
  }
  return '<Buffer ' + out.join(' ') + '>'
}

/**
 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
 */
Buffer.prototype.toArrayBuffer = function () {
  if (typeof Uint8Array !== 'undefined') {
    if (Buffer._useTypedArrays) {
      return (new Buffer(this)).buffer
    } else {
      var buf = new Uint8Array(this.length)
      for (var i = 0, len = buf.length; i < len; i += 1)
        buf[i] = this[i]
      return buf.buffer
    }
  } else {
    throw new Error('Buffer.toArrayBuffer not supported in this browser')
  }
}

// HELPER FUNCTIONS
// ================

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

var BP = Buffer.prototype

/**
 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
 */
Buffer._augment = function (arr) {
  arr._isBuffer = true

  // save reference to original Uint8Array get/set methods before overwriting
  arr._get = arr.get
  arr._set = arr.set

  // deprecated, will be removed in node 0.13+
  arr.get = BP.get
  arr.set = BP.set

  arr.write = BP.write
  arr.toString = BP.toString
  arr.toLocaleString = BP.toString
  arr.toJSON = BP.toJSON
  arr.copy = BP.copy
  arr.slice = BP.slice
  arr.readUInt8 = BP.readUInt8
  arr.readUInt16LE = BP.readUInt16LE
  arr.readUInt16BE = BP.readUInt16BE
  arr.readUInt32LE = BP.readUInt32LE
  arr.readUInt32BE = BP.readUInt32BE
  arr.readInt8 = BP.readInt8
  arr.readInt16LE = BP.readInt16LE
  arr.readInt16BE = BP.readInt16BE
  arr.readInt32LE = BP.readInt32LE
  arr.readInt32BE = BP.readInt32BE
  arr.readFloatLE = BP.readFloatLE
  arr.readFloatBE = BP.readFloatBE
  arr.readDoubleLE = BP.readDoubleLE
  arr.readDoubleBE = BP.readDoubleBE
  arr.writeUInt8 = BP.writeUInt8
  arr.writeUInt16LE = BP.writeUInt16LE
  arr.writeUInt16BE = BP.writeUInt16BE
  arr.writeUInt32LE = BP.writeUInt32LE
  arr.writeUInt32BE = BP.writeUInt32BE
  arr.writeInt8 = BP.writeInt8
  arr.writeInt16LE = BP.writeInt16LE
  arr.writeInt16BE = BP.writeInt16BE
  arr.writeInt32LE = BP.writeInt32LE
  arr.writeInt32BE = BP.writeInt32BE
  arr.writeFloatLE = BP.writeFloatLE
  arr.writeFloatBE = BP.writeFloatBE
  arr.writeDoubleLE = BP.writeDoubleLE
  arr.writeDoubleBE = BP.writeDoubleBE
  arr.fill = BP.fill
  arr.inspect = BP.inspect
  arr.toArrayBuffer = BP.toArrayBuffer

  return arr
}

// slice(start, end)
function clamp (index, len, defaultValue) {
  if (typeof index !== 'number') return defaultValue
  index = ~~index;  // Coerce to integer.
  if (index >= len) return len
  if (index >= 0) return index
  index += len
  if (index >= 0) return index
  return 0
}

function coerce (length) {
  // Coerce length to a number (possibly NaN), round up
  // in case it's fractional (e.g. 123.456) then do a
  // double negate to coerce a NaN to 0. Easy, right?
  length = ~~Math.ceil(+length)
  return length < 0 ? 0 : length
}

function isArray (subject) {
  return (Array.isArray || function (subject) {
    return Object.prototype.toString.call(subject) === '[object Array]'
  })(subject)
}

function isArrayish (subject) {
  return isArray(subject) || Buffer.isBuffer(subject) ||
      subject && typeof subject === 'object' &&
      typeof subject.length === 'number'
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    var b = str.charCodeAt(i)
    if (b <= 0x7F)
      byteArray.push(str.charCodeAt(i))
    else {
      var start = i
      if (b >= 0xD800 && b <= 0xDFFF) i++
      var h = encodeURIComponent(str.slice(start, i+1)).substr(1).split('%')
      for (var j = 0; j < h.length; j++)
        byteArray.push(parseInt(h[j], 16))
    }
  }
  return byteArray
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(str)
}

function blitBuffer (src, dst, offset, length) {
  var pos
  for (var i = 0; i < length; i++) {
    if ((i + offset >= dst.length) || (i >= src.length))
      break
    dst[i + offset] = src[i]
  }
  return i
}

function decodeUtf8Char (str) {
  try {
    return decodeURIComponent(str)
  } catch (err) {
    return String.fromCharCode(0xFFFD) // UTF 8 invalid char
  }
}

/*
 * We have to make sure that the value is a valid integer. This means that it
 * is non-negative. It has no fractional component and that it does not
 * exceed the maximum allowed value.
 */
function verifuint (value, max) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value >= 0, 'specified a negative value for writing an unsigned value')
  assert(value <= max, 'value is larger than maximum value for type')
  assert(Math.floor(value) === value, 'value has a fractional component')
}

function verifsint (value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value <= max, 'value larger than maximum allowed value')
  assert(value >= min, 'value smaller than minimum allowed value')
  assert(Math.floor(value) === value, 'value has a fractional component')
}

function verifIEEE754 (value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value <= max, 'value larger than maximum allowed value')
  assert(value >= min, 'value smaller than minimum allowed value')
}

function assert (test, message) {
  if (!test) throw new Error(message || 'Failed assertion')
}

}).call(this,require("Wb8Gej"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/buffer/index.js","/../../node_modules/buffer")
},{"Wb8Gej":5,"base64-js":4,"buffer":6,"ieee754":7}],7:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

}).call(this,require("Wb8Gej"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/ieee754/index.js","/../../node_modules/ieee754")
},{"Wb8Gej":5,"buffer":6}],8:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
var Vue // late bind
var map = Object.create(null)
var shimmed = false
var isBrowserify = false

/**
 * Determine compatibility and apply patch.
 *
 * @param {Function} vue
 * @param {Boolean} browserify
 */

exports.install = function (vue, browserify) {
  if (shimmed) return
  shimmed = true

  Vue = vue
  isBrowserify = browserify

  exports.compatible = !!Vue.internalDirectives
  if (!exports.compatible) {
    console.warn(
      '[HMR] vue-loader hot reload is only compatible with ' +
      'Vue.js 1.0.0+.'
    )
    return
  }

  // patch view directive
  patchView(Vue.internalDirectives.component)
  console.log('[HMR] Vue component hot reload shim applied.')
  // shim router-view if present
  var routerView = Vue.elementDirective('router-view')
  if (routerView) {
    patchView(routerView)
    console.log('[HMR] vue-router <router-view> hot reload shim applied.')
  }
}

/**
 * Shim the view directive (component or router-view).
 *
 * @param {Object} View
 */

function patchView (View) {
  var unbuild = View.unbuild
  View.unbuild = function (defer) {
    if (!this.hotUpdating) {
      var prevComponent = this.childVM && this.childVM.constructor
      removeView(prevComponent, this)
      // defer = true means we are transitioning to a new
      // Component. Register this new component to the list.
      if (defer) {
        addView(this.Component, this)
      }
    }
    // call original
    return unbuild.call(this, defer)
  }
}

/**
 * Add a component view to a Component's hot list
 *
 * @param {Function} Component
 * @param {Directive} view - view directive instance
 */

function addView (Component, view) {
  var id = Component && Component.options.hotID
  if (id) {
    if (!map[id]) {
      map[id] = {
        Component: Component,
        views: [],
        instances: []
      }
    }
    map[id].views.push(view)
  }
}

/**
 * Remove a component view from a Component's hot list
 *
 * @param {Function} Component
 * @param {Directive} view - view directive instance
 */

function removeView (Component, view) {
  var id = Component && Component.options.hotID
  if (id) {
    map[id].views.$remove(view)
  }
}

/**
 * Create a record for a hot module, which keeps track of its construcotr,
 * instnaces and views (component directives or router-views).
 *
 * @param {String} id
 * @param {Object} options
 */

exports.createRecord = function (id, options) {
  if (typeof options === 'function') {
    options = options.options
  }
  if (typeof options.el !== 'string' && typeof options.data !== 'object') {
    makeOptionsHot(id, options)
    map[id] = {
      Component: null,
      views: [],
      instances: []
    }
  }
}

/**
 * Make a Component options object hot.
 *
 * @param {String} id
 * @param {Object} options
 */

function makeOptionsHot (id, options) {
  options.hotID = id
  injectHook(options, 'created', function () {
    var record = map[id]
    if (!record.Component) {
      record.Component = this.constructor
    }
    record.instances.push(this)
  })
  injectHook(options, 'beforeDestroy', function () {
    map[id].instances.$remove(this)
  })
}

/**
 * Inject a hook to a hot reloadable component so that
 * we can keep track of it.
 *
 * @param {Object} options
 * @param {String} name
 * @param {Function} hook
 */

function injectHook (options, name, hook) {
  var existing = options[name]
  options[name] = existing
    ? Array.isArray(existing)
      ? existing.concat(hook)
      : [existing, hook]
    : [hook]
}

/**
 * Update a hot component.
 *
 * @param {String} id
 * @param {Object|null} newOptions
 * @param {String|null} newTemplate
 */

exports.update = function (id, newOptions, newTemplate) {
  var record = map[id]
  // force full-reload if an instance of the component is active but is not
  // managed by a view
  if (!record || (record.instances.length && !record.views.length)) {
    console.log('[HMR] Root or manually-mounted instance modified. Full reload may be required.')
    if (!isBrowserify) {
      window.location.reload()
    } else {
      // browserify-hmr somehow sends incomplete bundle if we reload here
      return
    }
  }
  if (!isBrowserify) {
    // browserify-hmr already logs this
    console.log('[HMR] Updating component: ' + format(id))
  }
  var Component = record.Component
  // update constructor
  if (newOptions) {
    // in case the user exports a constructor
    Component = record.Component = typeof newOptions === 'function'
      ? newOptions
      : Vue.extend(newOptions)
    makeOptionsHot(id, Component.options)
  }
  if (newTemplate) {
    Component.options.template = newTemplate
  }
  // handle recursive lookup
  if (Component.options.name) {
    Component.options.components[Component.options.name] = Component
  }
  // reset constructor cached linker
  Component.linker = null
  // reload all views
  record.views.forEach(function (view) {
    updateView(view, Component)
  })
  // flush devtools
  if (window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
    window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit('flush')
  }
}

/**
 * Update a component view instance
 *
 * @param {Directive} view
 * @param {Function} Component
 */

function updateView (view, Component) {
  if (!view._bound) {
    return
  }
  view.Component = Component
  view.hotUpdating = true
  // disable transitions
  view.vm._isCompiled = false
  // save state
  var state = extractState(view.childVM)
  // remount, make sure to disable keep-alive
  var keepAlive = view.keepAlive
  view.keepAlive = false
  view.mountComponent()
  view.keepAlive = keepAlive
  // restore state
  restoreState(view.childVM, state, true)
  // re-eanble transitions
  view.vm._isCompiled = true
  view.hotUpdating = false
}

/**
 * Extract state from a Vue instance.
 *
 * @param {Vue} vm
 * @return {Object}
 */

function extractState (vm) {
  return {
    cid: vm.constructor.cid,
    data: vm.$data,
    children: vm.$children.map(extractState)
  }
}

/**
 * Restore state to a reloaded Vue instance.
 *
 * @param {Vue} vm
 * @param {Object} state
 */

function restoreState (vm, state, isRoot) {
  var oldAsyncConfig
  if (isRoot) {
    // set Vue into sync mode during state rehydration
    oldAsyncConfig = Vue.config.async
    Vue.config.async = false
  }
  // actual restore
  if (isRoot || !vm._props) {
    vm.$data = state.data
  } else {
    Object.keys(state.data).forEach(function (key) {
      if (!vm._props[key]) {
        // for non-root, only restore non-props fields
        vm.$data[key] = state.data[key]
      }
    })
  }
  // verify child consistency
  var hasSameChildren = vm.$children.every(function (c, i) {
    return state.children[i] && state.children[i].cid === c.constructor.cid
  })
  if (hasSameChildren) {
    // rehydrate children
    vm.$children.forEach(function (c, i) {
      restoreState(c, state.children[i])
    })
  }
  if (isRoot) {
    Vue.config.async = oldAsyncConfig
  }
}

function format (id) {
  var match = id.match(/[^\/]+\.vue$/)
  return match ? match[0] : id
}

}).call(this,require("Wb8Gej"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/vue-hot-reload-api/index.js","/../../node_modules/vue-hot-reload-api")
},{"Wb8Gej":5,"buffer":6}],9:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*!
 * vue-resource v0.9.3
 * https://github.com/vuejs/vue-resource
 * Released under the MIT License.
 */

'use strict';

/**
 * Promises/A+ polyfill v1.1.4 (https://github.com/bramstein/promis)
 */

var RESOLVED = 0;
var REJECTED = 1;
var PENDING = 2;

function Promise$2(executor) {

    this.state = PENDING;
    this.value = undefined;
    this.deferred = [];

    var promise = this;

    try {
        executor(function (x) {
            promise.resolve(x);
        }, function (r) {
            promise.reject(r);
        });
    } catch (e) {
        promise.reject(e);
    }
}

Promise$2.reject = function (r) {
    return new Promise$2(function (resolve, reject) {
        reject(r);
    });
};

Promise$2.resolve = function (x) {
    return new Promise$2(function (resolve, reject) {
        resolve(x);
    });
};

Promise$2.all = function all(iterable) {
    return new Promise$2(function (resolve, reject) {
        var count = 0,
            result = [];

        if (iterable.length === 0) {
            resolve(result);
        }

        function resolver(i) {
            return function (x) {
                result[i] = x;
                count += 1;

                if (count === iterable.length) {
                    resolve(result);
                }
            };
        }

        for (var i = 0; i < iterable.length; i += 1) {
            Promise$2.resolve(iterable[i]).then(resolver(i), reject);
        }
    });
};

Promise$2.race = function race(iterable) {
    return new Promise$2(function (resolve, reject) {
        for (var i = 0; i < iterable.length; i += 1) {
            Promise$2.resolve(iterable[i]).then(resolve, reject);
        }
    });
};

var p$1 = Promise$2.prototype;

p$1.resolve = function resolve(x) {
    var promise = this;

    if (promise.state === PENDING) {
        if (x === promise) {
            throw new TypeError('Promise settled with itself.');
        }

        var called = false;

        try {
            var then = x && x['then'];

            if (x !== null && typeof x === 'object' && typeof then === 'function') {
                then.call(x, function (x) {
                    if (!called) {
                        promise.resolve(x);
                    }
                    called = true;
                }, function (r) {
                    if (!called) {
                        promise.reject(r);
                    }
                    called = true;
                });
                return;
            }
        } catch (e) {
            if (!called) {
                promise.reject(e);
            }
            return;
        }

        promise.state = RESOLVED;
        promise.value = x;
        promise.notify();
    }
};

p$1.reject = function reject(reason) {
    var promise = this;

    if (promise.state === PENDING) {
        if (reason === promise) {
            throw new TypeError('Promise settled with itself.');
        }

        promise.state = REJECTED;
        promise.value = reason;
        promise.notify();
    }
};

p$1.notify = function notify() {
    var promise = this;

    nextTick(function () {
        if (promise.state !== PENDING) {
            while (promise.deferred.length) {
                var deferred = promise.deferred.shift(),
                    onResolved = deferred[0],
                    onRejected = deferred[1],
                    resolve = deferred[2],
                    reject = deferred[3];

                try {
                    if (promise.state === RESOLVED) {
                        if (typeof onResolved === 'function') {
                            resolve(onResolved.call(undefined, promise.value));
                        } else {
                            resolve(promise.value);
                        }
                    } else if (promise.state === REJECTED) {
                        if (typeof onRejected === 'function') {
                            resolve(onRejected.call(undefined, promise.value));
                        } else {
                            reject(promise.value);
                        }
                    }
                } catch (e) {
                    reject(e);
                }
            }
        }
    });
};

p$1.then = function then(onResolved, onRejected) {
    var promise = this;

    return new Promise$2(function (resolve, reject) {
        promise.deferred.push([onResolved, onRejected, resolve, reject]);
        promise.notify();
    });
};

p$1.catch = function (onRejected) {
    return this.then(undefined, onRejected);
};

var PromiseObj = window.Promise || Promise$2;

function Promise$1(executor, context) {

    if (executor instanceof PromiseObj) {
        this.promise = executor;
    } else {
        this.promise = new PromiseObj(executor.bind(context));
    }

    this.context = context;
}

Promise$1.all = function (iterable, context) {
    return new Promise$1(PromiseObj.all(iterable), context);
};

Promise$1.resolve = function (value, context) {
    return new Promise$1(PromiseObj.resolve(value), context);
};

Promise$1.reject = function (reason, context) {
    return new Promise$1(PromiseObj.reject(reason), context);
};

Promise$1.race = function (iterable, context) {
    return new Promise$1(PromiseObj.race(iterable), context);
};

var p = Promise$1.prototype;

p.bind = function (context) {
    this.context = context;
    return this;
};

p.then = function (fulfilled, rejected) {

    if (fulfilled && fulfilled.bind && this.context) {
        fulfilled = fulfilled.bind(this.context);
    }

    if (rejected && rejected.bind && this.context) {
        rejected = rejected.bind(this.context);
    }

    return new Promise$1(this.promise.then(fulfilled, rejected), this.context);
};

p.catch = function (rejected) {

    if (rejected && rejected.bind && this.context) {
        rejected = rejected.bind(this.context);
    }

    return new Promise$1(this.promise.catch(rejected), this.context);
};

p.finally = function (callback) {

    return this.then(function (value) {
        callback.call(this);
        return value;
    }, function (reason) {
        callback.call(this);
        return PromiseObj.reject(reason);
    });
};

var debug = false;
var util = {};
var array = [];
function Util (Vue) {
    util = Vue.util;
    debug = Vue.config.debug || !Vue.config.silent;
}

function warn(msg) {
    if (typeof console !== 'undefined' && debug) {
        console.warn('[VueResource warn]: ' + msg);
    }
}

function error(msg) {
    if (typeof console !== 'undefined') {
        console.error(msg);
    }
}

function nextTick(cb, ctx) {
    return util.nextTick(cb, ctx);
}

function trim(str) {
    return str.replace(/^\s*|\s*$/g, '');
}

var isArray = Array.isArray;

function isString(val) {
    return typeof val === 'string';
}

function isBoolean(val) {
    return val === true || val === false;
}

function isFunction(val) {
    return typeof val === 'function';
}

function isObject(obj) {
    return obj !== null && typeof obj === 'object';
}

function isPlainObject(obj) {
    return isObject(obj) && Object.getPrototypeOf(obj) == Object.prototype;
}

function isFormData(obj) {
    return typeof FormData !== 'undefined' && obj instanceof FormData;
}

function when(value, fulfilled, rejected) {

    var promise = Promise$1.resolve(value);

    if (arguments.length < 2) {
        return promise;
    }

    return promise.then(fulfilled, rejected);
}

function options(fn, obj, opts) {

    opts = opts || {};

    if (isFunction(opts)) {
        opts = opts.call(obj);
    }

    return merge(fn.bind({ $vm: obj, $options: opts }), fn, { $options: opts });
}

function each(obj, iterator) {

    var i, key;

    if (typeof obj.length == 'number') {
        for (i = 0; i < obj.length; i++) {
            iterator.call(obj[i], obj[i], i);
        }
    } else if (isObject(obj)) {
        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                iterator.call(obj[key], obj[key], key);
            }
        }
    }

    return obj;
}

var assign = Object.assign || _assign;

function merge(target) {

    var args = array.slice.call(arguments, 1);

    args.forEach(function (source) {
        _merge(target, source, true);
    });

    return target;
}

function defaults(target) {

    var args = array.slice.call(arguments, 1);

    args.forEach(function (source) {

        for (var key in source) {
            if (target[key] === undefined) {
                target[key] = source[key];
            }
        }
    });

    return target;
}

function _assign(target) {

    var args = array.slice.call(arguments, 1);

    args.forEach(function (source) {
        _merge(target, source);
    });

    return target;
}

function _merge(target, source, deep) {
    for (var key in source) {
        if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
            if (isPlainObject(source[key]) && !isPlainObject(target[key])) {
                target[key] = {};
            }
            if (isArray(source[key]) && !isArray(target[key])) {
                target[key] = [];
            }
            _merge(target[key], source[key], deep);
        } else if (source[key] !== undefined) {
            target[key] = source[key];
        }
    }
}

function root (options, next) {

    var url = next(options);

    if (isString(options.root) && !url.match(/^(https?:)?\//)) {
        url = options.root + '/' + url;
    }

    return url;
}

function query (options, next) {

    var urlParams = Object.keys(Url.options.params),
        query = {},
        url = next(options);

    each(options.params, function (value, key) {
        if (urlParams.indexOf(key) === -1) {
            query[key] = value;
        }
    });

    query = Url.params(query);

    if (query) {
        url += (url.indexOf('?') == -1 ? '?' : '&') + query;
    }

    return url;
}

/**
 * URL Template v2.0.6 (https://github.com/bramstein/url-template)
 */

function expand(url, params, variables) {

    var tmpl = parse(url),
        expanded = tmpl.expand(params);

    if (variables) {
        variables.push.apply(variables, tmpl.vars);
    }

    return expanded;
}

function parse(template) {

    var operators = ['+', '#', '.', '/', ';', '?', '&'],
        variables = [];

    return {
        vars: variables,
        expand: function (context) {
            return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (_, expression, literal) {
                if (expression) {

                    var operator = null,
                        values = [];

                    if (operators.indexOf(expression.charAt(0)) !== -1) {
                        operator = expression.charAt(0);
                        expression = expression.substr(1);
                    }

                    expression.split(/,/g).forEach(function (variable) {
                        var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
                        values.push.apply(values, getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
                        variables.push(tmp[1]);
                    });

                    if (operator && operator !== '+') {

                        var separator = ',';

                        if (operator === '?') {
                            separator = '&';
                        } else if (operator !== '#') {
                            separator = operator;
                        }

                        return (values.length !== 0 ? operator : '') + values.join(separator);
                    } else {
                        return values.join(',');
                    }
                } else {
                    return encodeReserved(literal);
                }
            });
        }
    };
}

function getValues(context, operator, key, modifier) {

    var value = context[key],
        result = [];

    if (isDefined(value) && value !== '') {
        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
            value = value.toString();

            if (modifier && modifier !== '*') {
                value = value.substring(0, parseInt(modifier, 10));
            }

            result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
        } else {
            if (modifier === '*') {
                if (Array.isArray(value)) {
                    value.filter(isDefined).forEach(function (value) {
                        result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
                    });
                } else {
                    Object.keys(value).forEach(function (k) {
                        if (isDefined(value[k])) {
                            result.push(encodeValue(operator, value[k], k));
                        }
                    });
                }
            } else {
                var tmp = [];

                if (Array.isArray(value)) {
                    value.filter(isDefined).forEach(function (value) {
                        tmp.push(encodeValue(operator, value));
                    });
                } else {
                    Object.keys(value).forEach(function (k) {
                        if (isDefined(value[k])) {
                            tmp.push(encodeURIComponent(k));
                            tmp.push(encodeValue(operator, value[k].toString()));
                        }
                    });
                }

                if (isKeyOperator(operator)) {
                    result.push(encodeURIComponent(key) + '=' + tmp.join(','));
                } else if (tmp.length !== 0) {
                    result.push(tmp.join(','));
                }
            }
        }
    } else {
        if (operator === ';') {
            result.push(encodeURIComponent(key));
        } else if (value === '' && (operator === '&' || operator === '?')) {
            result.push(encodeURIComponent(key) + '=');
        } else if (value === '') {
            result.push('');
        }
    }

    return result;
}

function isDefined(value) {
    return value !== undefined && value !== null;
}

function isKeyOperator(operator) {
    return operator === ';' || operator === '&' || operator === '?';
}

function encodeValue(operator, value, key) {

    value = operator === '+' || operator === '#' ? encodeReserved(value) : encodeURIComponent(value);

    if (key) {
        return encodeURIComponent(key) + '=' + value;
    } else {
        return value;
    }
}

function encodeReserved(str) {
    return str.split(/(%[0-9A-Fa-f]{2})/g).map(function (part) {
        if (!/%[0-9A-Fa-f]/.test(part)) {
            part = encodeURI(part);
        }
        return part;
    }).join('');
}

function template (options) {

    var variables = [],
        url = expand(options.url, options.params, variables);

    variables.forEach(function (key) {
        delete options.params[key];
    });

    return url;
}

/**
 * Service for URL templating.
 */

var ie = document.documentMode;
var el = document.createElement('a');

function Url(url, params) {

    var self = this || {},
        options = url,
        transform;

    if (isString(url)) {
        options = { url: url, params: params };
    }

    options = merge({}, Url.options, self.$options, options);

    Url.transforms.forEach(function (handler) {
        transform = factory(handler, transform, self.$vm);
    });

    return transform(options);
}

/**
 * Url options.
 */

Url.options = {
    url: '',
    root: null,
    params: {}
};

/**
 * Url transforms.
 */

Url.transforms = [template, query, root];

/**
 * Encodes a Url parameter string.
 *
 * @param {Object} obj
 */

Url.params = function (obj) {

    var params = [],
        escape = encodeURIComponent;

    params.add = function (key, value) {

        if (isFunction(value)) {
            value = value();
        }

        if (value === null) {
            value = '';
        }

        this.push(escape(key) + '=' + escape(value));
    };

    serialize(params, obj);

    return params.join('&').replace(/%20/g, '+');
};

/**
 * Parse a URL and return its components.
 *
 * @param {String} url
 */

Url.parse = function (url) {

    if (ie) {
        el.href = url;
        url = el.href;
    }

    el.href = url;

    return {
        href: el.href,
        protocol: el.protocol ? el.protocol.replace(/:$/, '') : '',
        port: el.port,
        host: el.host,
        hostname: el.hostname,
        pathname: el.pathname.charAt(0) === '/' ? el.pathname : '/' + el.pathname,
        search: el.search ? el.search.replace(/^\?/, '') : '',
        hash: el.hash ? el.hash.replace(/^#/, '') : ''
    };
};

function factory(handler, next, vm) {
    return function (options) {
        return handler.call(vm, options, next);
    };
}

function serialize(params, obj, scope) {

    var array = isArray(obj),
        plain = isPlainObject(obj),
        hash;

    each(obj, function (value, key) {

        hash = isObject(value) || isArray(value);

        if (scope) {
            key = scope + '[' + (plain || hash ? key : '') + ']';
        }

        if (!scope && array) {
            params.add(value.name, value.value);
        } else if (hash) {
            serialize(params, value, key);
        } else {
            params.add(key, value);
        }
    });
}

function xdrClient (request) {
    return new Promise$1(function (resolve) {

        var xdr = new XDomainRequest(),
            handler = function (event) {

            var response = request.respondWith(xdr.responseText, {
                status: xdr.status,
                statusText: xdr.statusText
            });

            resolve(response);
        };

        request.abort = function () {
            return xdr.abort();
        };

        xdr.open(request.method, request.getUrl(), true);
        xdr.timeout = 0;
        xdr.onload = handler;
        xdr.onerror = handler;
        xdr.ontimeout = function () {};
        xdr.onprogress = function () {};
        xdr.send(request.getBody());
    });
}

var ORIGIN_URL = Url.parse(location.href);
var SUPPORTS_CORS = 'withCredentials' in new XMLHttpRequest();

function cors (request, next) {

    if (!isBoolean(request.crossOrigin) && crossOrigin(request)) {
        request.crossOrigin = true;
    }

    if (request.crossOrigin) {

        if (!SUPPORTS_CORS) {
            request.client = xdrClient;
        }

        delete request.emulateHTTP;
    }

    next();
}

function crossOrigin(request) {

    var requestUrl = Url.parse(Url(request));

    return requestUrl.protocol !== ORIGIN_URL.protocol || requestUrl.host !== ORIGIN_URL.host;
}

function body (request, next) {

    if (request.emulateJSON && isPlainObject(request.body)) {
        request.body = Url.params(request.body);
        request.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    }

    if (isFormData(request.body)) {
        delete request.headers['Content-Type'];
    }

    if (isPlainObject(request.body)) {
        request.body = JSON.stringify(request.body);
    }

    next(function (response) {

        var contentType = response.headers['Content-Type'];

        if (isString(contentType) && contentType.indexOf('application/json') === 0) {

            try {
                response.data = response.json();
            } catch (e) {
                response.data = null;
            }
        } else {
            response.data = response.text();
        }
    });
}

function jsonpClient (request) {
    return new Promise$1(function (resolve) {

        var name = request.jsonp || 'callback',
            callback = '_jsonp' + Math.random().toString(36).substr(2),
            body = null,
            handler,
            script;

        handler = function (event) {

            var status = 0;

            if (event.type === 'load' && body !== null) {
                status = 200;
            } else if (event.type === 'error') {
                status = 404;
            }

            resolve(request.respondWith(body, { status: status }));

            delete window[callback];
            document.body.removeChild(script);
        };

        request.params[name] = callback;

        window[callback] = function (result) {
            body = JSON.stringify(result);
        };

        script = document.createElement('script');
        script.src = request.getUrl();
        script.type = 'text/javascript';
        script.async = true;
        script.onload = handler;
        script.onerror = handler;

        document.body.appendChild(script);
    });
}

function jsonp (request, next) {

    if (request.method == 'JSONP') {
        request.client = jsonpClient;
    }

    next(function (response) {

        if (request.method == 'JSONP') {
            response.data = response.json();
        }
    });
}

function before (request, next) {

    if (isFunction(request.before)) {
        request.before.call(this, request);
    }

    next();
}

/**
 * HTTP method override Interceptor.
 */

function method (request, next) {

    if (request.emulateHTTP && /^(PUT|PATCH|DELETE)$/i.test(request.method)) {
        request.headers['X-HTTP-Method-Override'] = request.method;
        request.method = 'POST';
    }

    next();
}

function header (request, next) {

    request.method = request.method.toUpperCase();
    request.headers = assign({}, Http.headers.common, !request.crossOrigin ? Http.headers.custom : {}, Http.headers[request.method.toLowerCase()], request.headers);

    next();
}

/**
 * Timeout Interceptor.
 */

function timeout (request, next) {

    var timeout;

    if (request.timeout) {
        timeout = setTimeout(function () {
            request.abort();
        }, request.timeout);
    }

    next(function (response) {

        clearTimeout(timeout);
    });
}

function xhrClient (request) {
    return new Promise$1(function (resolve) {

        var xhr = new XMLHttpRequest(),
            handler = function (event) {

            var response = request.respondWith('response' in xhr ? xhr.response : xhr.responseText, {
                status: xhr.status === 1223 ? 204 : xhr.status, // IE9 status bug
                statusText: xhr.status === 1223 ? 'No Content' : trim(xhr.statusText),
                headers: parseHeaders(xhr.getAllResponseHeaders())
            });

            resolve(response);
        };

        request.abort = function () {
            return xhr.abort();
        };

        xhr.open(request.method, request.getUrl(), true);
        xhr.timeout = 0;
        xhr.onload = handler;
        xhr.onerror = handler;

        if (request.progress) {
            if (request.method === 'GET') {
                xhr.addEventListener('progress', request.progress);
            } else if (/^(POST|PUT)$/i.test(request.method)) {
                xhr.upload.addEventListener('progress', request.progress);
            }
        }

        if (request.credentials === true) {
            xhr.withCredentials = true;
        }

        each(request.headers || {}, function (value, header) {
            xhr.setRequestHeader(header, value);
        });

        xhr.send(request.getBody());
    });
}

function parseHeaders(str) {

    var headers = {},
        value,
        name,
        i;

    each(trim(str).split('\n'), function (row) {

        i = row.indexOf(':');
        name = trim(row.slice(0, i));
        value = trim(row.slice(i + 1));

        if (headers[name]) {

            if (isArray(headers[name])) {
                headers[name].push(value);
            } else {
                headers[name] = [headers[name], value];
            }
        } else {

            headers[name] = value;
        }
    });

    return headers;
}

function Client (context) {

    var reqHandlers = [sendRequest],
        resHandlers = [],
        handler;

    if (!isObject(context)) {
        context = null;
    }

    function Client(request) {
        return new Promise$1(function (resolve) {

            function exec() {

                handler = reqHandlers.pop();

                if (isFunction(handler)) {
                    handler.call(context, request, next);
                } else {
                    warn('Invalid interceptor of type ' + typeof handler + ', must be a function');
                    next();
                }
            }

            function next(response) {

                if (isFunction(response)) {

                    resHandlers.unshift(response);
                } else if (isObject(response)) {

                    resHandlers.forEach(function (handler) {
                        response = when(response, function (response) {
                            return handler.call(context, response) || response;
                        });
                    });

                    when(response, resolve);

                    return;
                }

                exec();
            }

            exec();
        }, context);
    }

    Client.use = function (handler) {
        reqHandlers.push(handler);
    };

    return Client;
}

function sendRequest(request, resolve) {

    var client = request.client || xhrClient;

    resolve(client(request));
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/**
 * HTTP Response.
 */

var Response = function () {
    function Response(body, _ref) {
        var url = _ref.url;
        var headers = _ref.headers;
        var status = _ref.status;
        var statusText = _ref.statusText;
        classCallCheck(this, Response);


        this.url = url;
        this.body = body;
        this.headers = headers || {};
        this.status = status || 0;
        this.statusText = statusText || '';
        this.ok = status >= 200 && status < 300;
    }

    Response.prototype.text = function text() {
        return this.body;
    };

    Response.prototype.blob = function blob() {
        return new Blob([this.body]);
    };

    Response.prototype.json = function json() {
        return JSON.parse(this.body);
    };

    return Response;
}();

var Request = function () {
    function Request(options) {
        classCallCheck(this, Request);


        this.method = 'GET';
        this.body = null;
        this.params = {};
        this.headers = {};

        assign(this, options);
    }

    Request.prototype.getUrl = function getUrl() {
        return Url(this);
    };

    Request.prototype.getBody = function getBody() {
        return this.body;
    };

    Request.prototype.respondWith = function respondWith(body, options) {
        return new Response(body, assign(options || {}, { url: this.getUrl() }));
    };

    return Request;
}();

/**
 * Service for sending network requests.
 */

var CUSTOM_HEADERS = { 'X-Requested-With': 'XMLHttpRequest' };
var COMMON_HEADERS = { 'Accept': 'application/json, text/plain, */*' };
var JSON_CONTENT_TYPE = { 'Content-Type': 'application/json;charset=utf-8' };

function Http(options) {

    var self = this || {},
        client = Client(self.$vm);

    defaults(options || {}, self.$options, Http.options);

    Http.interceptors.forEach(function (handler) {
        client.use(handler);
    });

    return client(new Request(options)).then(function (response) {

        return response.ok ? response : Promise$1.reject(response);
    }, function (response) {

        if (response instanceof Error) {
            error(response);
        }

        return Promise$1.reject(response);
    });
}

Http.options = {};

Http.headers = {
    put: JSON_CONTENT_TYPE,
    post: JSON_CONTENT_TYPE,
    patch: JSON_CONTENT_TYPE,
    delete: JSON_CONTENT_TYPE,
    custom: CUSTOM_HEADERS,
    common: COMMON_HEADERS
};

Http.interceptors = [before, timeout, method, body, jsonp, header, cors];

['get', 'delete', 'head', 'jsonp'].forEach(function (method) {

    Http[method] = function (url, options) {
        return this(assign(options || {}, { url: url, method: method }));
    };
});

['post', 'put', 'patch'].forEach(function (method) {

    Http[method] = function (url, body, options) {
        return this(assign(options || {}, { url: url, method: method, body: body }));
    };
});

function Resource(url, params, actions, options) {

    var self = this || {},
        resource = {};

    actions = assign({}, Resource.actions, actions);

    each(actions, function (action, name) {

        action = merge({ url: url, params: params || {} }, options, action);

        resource[name] = function () {
            return (self.$http || Http)(opts(action, arguments));
        };
    });

    return resource;
}

function opts(action, args) {

    var options = assign({}, action),
        params = {},
        body;

    switch (args.length) {

        case 2:

            params = args[0];
            body = args[1];

            break;

        case 1:

            if (/^(POST|PUT|PATCH)$/i.test(options.method)) {
                body = args[0];
            } else {
                params = args[0];
            }

            break;

        case 0:

            break;

        default:

            throw 'Expected up to 4 arguments [params, body], got ' + args.length + ' arguments';
    }

    options.body = body;
    options.params = assign({}, options.params, params);

    return options;
}

Resource.actions = {

    get: { method: 'GET' },
    save: { method: 'POST' },
    query: { method: 'GET' },
    update: { method: 'PUT' },
    remove: { method: 'DELETE' },
    delete: { method: 'DELETE' }

};

function plugin(Vue) {

    if (plugin.installed) {
        return;
    }

    Util(Vue);

    Vue.url = Url;
    Vue.http = Http;
    Vue.resource = Resource;
    Vue.Promise = Promise$1;

    Object.defineProperties(Vue.prototype, {

        $url: {
            get: function () {
                return options(Vue.url, this, this.$options.url);
            }
        },

        $http: {
            get: function () {
                return options(Vue.http, this, this.$options.http);
            }
        },

        $resource: {
            get: function () {
                return Vue.resource.bind(this);
            }
        },

        $promise: {
            get: function () {
                var _this = this;

                return function (executor) {
                    return new Vue.Promise(executor, _this);
                };
            }
        }

    });
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin);
}

module.exports = plugin;
}).call(this,require("Wb8Gej"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/vue-resource/dist/vue-resource.common.js","/../../node_modules/vue-resource/dist")
},{"Wb8Gej":5,"buffer":6}],10:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*!
 * Vue.js v1.0.26
 * (c) 2016 Evan You
 * Released under the MIT License.
 */
'use strict';

function set(obj, key, val) {
  if (hasOwn(obj, key)) {
    obj[key] = val;
    return;
  }
  if (obj._isVue) {
    set(obj._data, key, val);
    return;
  }
  var ob = obj.__ob__;
  if (!ob) {
    obj[key] = val;
    return;
  }
  ob.convert(key, val);
  ob.dep.notify();
  if (ob.vms) {
    var i = ob.vms.length;
    while (i--) {
      var vm = ob.vms[i];
      vm._proxy(key);
      vm._digest();
    }
  }
  return val;
}

/**
 * Delete a property and trigger change if necessary.
 *
 * @param {Object} obj
 * @param {String} key
 */

function del(obj, key) {
  if (!hasOwn(obj, key)) {
    return;
  }
  delete obj[key];
  var ob = obj.__ob__;
  if (!ob) {
    if (obj._isVue) {
      delete obj._data[key];
      obj._digest();
    }
    return;
  }
  ob.dep.notify();
  if (ob.vms) {
    var i = ob.vms.length;
    while (i--) {
      var vm = ob.vms[i];
      vm._unproxy(key);
      vm._digest();
    }
  }
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * Check whether the object has the property.
 *
 * @param {Object} obj
 * @param {String} key
 * @return {Boolean}
 */

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

/**
 * Check if an expression is a literal value.
 *
 * @param {String} exp
 * @return {Boolean}
 */

var literalValueRE = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;

function isLiteral(exp) {
  return literalValueRE.test(exp);
}

/**
 * Check if a string starts with $ or _
 *
 * @param {String} str
 * @return {Boolean}
 */

function isReserved(str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F;
}

/**
 * Guard text output, make sure undefined outputs
 * empty string
 *
 * @param {*} value
 * @return {String}
 */

function _toString(value) {
  return value == null ? '' : value.toString();
}

/**
 * Check and convert possible numeric strings to numbers
 * before setting back to data
 *
 * @param {*} value
 * @return {*|Number}
 */

function toNumber(value) {
  if (typeof value !== 'string') {
    return value;
  } else {
    var parsed = Number(value);
    return isNaN(parsed) ? value : parsed;
  }
}

/**
 * Convert string boolean literals into real booleans.
 *
 * @param {*} value
 * @return {*|Boolean}
 */

function toBoolean(value) {
  return value === 'true' ? true : value === 'false' ? false : value;
}

/**
 * Strip quotes from a string
 *
 * @param {String} str
 * @return {String | false}
 */

function stripQuotes(str) {
  var a = str.charCodeAt(0);
  var b = str.charCodeAt(str.length - 1);
  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
}

/**
 * Camelize a hyphen-delmited string.
 *
 * @param {String} str
 * @return {String}
 */

var camelizeRE = /-(\w)/g;

function camelize(str) {
  return str.replace(camelizeRE, toUpper);
}

function toUpper(_, c) {
  return c ? c.toUpperCase() : '';
}

/**
 * Hyphenate a camelCase string.
 *
 * @param {String} str
 * @return {String}
 */

var hyphenateRE = /([a-z\d])([A-Z])/g;

function hyphenate(str) {
  return str.replace(hyphenateRE, '$1-$2').toLowerCase();
}

/**
 * Converts hyphen/underscore/slash delimitered names into
 * camelized classNames.
 *
 * e.g. my-component => MyComponent
 *      some_else    => SomeElse
 *      some/comp    => SomeComp
 *
 * @param {String} str
 * @return {String}
 */

var classifyRE = /(?:^|[-_\/])(\w)/g;

function classify(str) {
  return str.replace(classifyRE, toUpper);
}

/**
 * Simple bind, faster than native
 *
 * @param {Function} fn
 * @param {Object} ctx
 * @return {Function}
 */

function bind(fn, ctx) {
  return function (a) {
    var l = arguments.length;
    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
  };
}

/**
 * Convert an Array-like object to a real Array.
 *
 * @param {Array-like} list
 * @param {Number} [start] - start index
 * @return {Array}
 */

function toArray(list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret;
}

/**
 * Mix properties into target object.
 *
 * @param {Object} to
 * @param {Object} from
 */

function extend(to, from) {
  var keys = Object.keys(from);
  var i = keys.length;
  while (i--) {
    to[keys[i]] = from[keys[i]];
  }
  return to;
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 *
 * @param {*} obj
 * @return {Boolean}
 */

function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 *
 * @param {*} obj
 * @return {Boolean}
 */

var toString = Object.prototype.toString;
var OBJECT_STRING = '[object Object]';

function isPlainObject(obj) {
  return toString.call(obj) === OBJECT_STRING;
}

/**
 * Array type check.
 *
 * @param {*} obj
 * @return {Boolean}
 */

var isArray = Array.isArray;

/**
 * Define a property.
 *
 * @param {Object} obj
 * @param {String} key
 * @param {*} val
 * @param {Boolean} [enumerable]
 */

function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Debounce a function so it only gets called after the
 * input stops arriving after the given wait period.
 *
 * @param {Function} func
 * @param {Number} wait
 * @return {Function} - the debounced function
 */

function _debounce(func, wait) {
  var timeout, args, context, timestamp, result;
  var later = function later() {
    var last = Date.now() - timestamp;
    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    }
  };
  return function () {
    context = this;
    args = arguments;
    timestamp = Date.now();
    if (!timeout) {
      timeout = setTimeout(later, wait);
    }
    return result;
  };
}

/**
 * Manual indexOf because it's slightly faster than
 * native.
 *
 * @param {Array} arr
 * @param {*} obj
 */

function indexOf(arr, obj) {
  var i = arr.length;
  while (i--) {
    if (arr[i] === obj) return i;
  }
  return -1;
}

/**
 * Make a cancellable version of an async callback.
 *
 * @param {Function} fn
 * @return {Function}
 */

function cancellable(fn) {
  var cb = function cb() {
    if (!cb.cancelled) {
      return fn.apply(this, arguments);
    }
  };
  cb.cancel = function () {
    cb.cancelled = true;
  };
  return cb;
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 *
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 */

function looseEqual(a, b) {
  /* eslint-disable eqeqeq */
  return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
  /* eslint-enable eqeqeq */
}

var hasProto = ('__proto__' in {});

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

// UA sniffing for working around browser-specific quirks
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && UA.indexOf('trident') > 0;
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;
var isIos = UA && /(iphone|ipad|ipod|ios)/i.test(UA);
var iosVersionMatch = isIos && UA.match(/os ([\d_]+)/);
var iosVersion = iosVersionMatch && iosVersionMatch[1].split('_');

// detecting iOS UIWebView by indexedDB
var hasMutationObserverBug = iosVersion && Number(iosVersion[0]) >= 9 && Number(iosVersion[1]) >= 3 && !window.indexedDB;

var transitionProp = undefined;
var transitionEndEvent = undefined;
var animationProp = undefined;
var animationEndEvent = undefined;

// Transition property/event sniffing
if (inBrowser && !isIE9) {
  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
  var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
  transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
  transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
  animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
  animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
}

/**
 * Defer a task to execute it asynchronously. Ideally this
 * should be executed as a microtask, so we leverage
 * MutationObserver if it's available, and fallback to
 * setTimeout(0).
 *
 * @param {Function} cb
 * @param {Object} ctx
 */

var nextTick = (function () {
  var callbacks = [];
  var pending = false;
  var timerFunc;
  function nextTickHandler() {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks = [];
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  /* istanbul ignore if */
  if (typeof MutationObserver !== 'undefined' && !hasMutationObserverBug) {
    var counter = 1;
    var observer = new MutationObserver(nextTickHandler);
    var textNode = document.createTextNode(counter);
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = counter;
    };
  } else {
    // webpack attempts to inject a shim for setImmediate
    // if it is used as a global, so we have to work around that to
    // avoid bundling unnecessary code.
    var context = inBrowser ? window : typeof global !== 'undefined' ? global : {};
    timerFunc = context.setImmediate || setTimeout;
  }
  return function (cb, ctx) {
    var func = ctx ? function () {
      cb.call(ctx);
    } : cb;
    callbacks.push(func);
    if (pending) return;
    pending = true;
    timerFunc(nextTickHandler, 0);
  };
})();

var _Set = undefined;
/* istanbul ignore if */
if (typeof Set !== 'undefined' && Set.toString().match(/native code/)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = function () {
    this.set = Object.create(null);
  };
  _Set.prototype.has = function (key) {
    return this.set[key] !== undefined;
  };
  _Set.prototype.add = function (key) {
    this.set[key] = 1;
  };
  _Set.prototype.clear = function () {
    this.set = Object.create(null);
  };
}

function Cache(limit) {
  this.size = 0;
  this.limit = limit;
  this.head = this.tail = undefined;
  this._keymap = Object.create(null);
}

var p = Cache.prototype;

/**
 * Put <value> into the cache associated with <key>.
 * Returns the entry which was removed to make room for
 * the new entry. Otherwise undefined is returned.
 * (i.e. if there was enough room already).
 *
 * @param {String} key
 * @param {*} value
 * @return {Entry|undefined}
 */

p.put = function (key, value) {
  var removed;

  var entry = this.get(key, true);
  if (!entry) {
    if (this.size === this.limit) {
      removed = this.shift();
    }
    entry = {
      key: key
    };
    this._keymap[key] = entry;
    if (this.tail) {
      this.tail.newer = entry;
      entry.older = this.tail;
    } else {
      this.head = entry;
    }
    this.tail = entry;
    this.size++;
  }
  entry.value = value;

  return removed;
};

/**
 * Purge the least recently used (oldest) entry from the
 * cache. Returns the removed entry or undefined if the
 * cache was empty.
 */

p.shift = function () {
  var entry = this.head;
  if (entry) {
    this.head = this.head.newer;
    this.head.older = undefined;
    entry.newer = entry.older = undefined;
    this._keymap[entry.key] = undefined;
    this.size--;
  }
  return entry;
};

/**
 * Get and register recent use of <key>. Returns the value
 * associated with <key> or undefined if not in cache.
 *
 * @param {String} key
 * @param {Boolean} returnEntry
 * @return {Entry|*}
 */

p.get = function (key, returnEntry) {
  var entry = this._keymap[key];
  if (entry === undefined) return;
  if (entry === this.tail) {
    return returnEntry ? entry : entry.value;
  }
  // HEAD--------------TAIL
  //   <.older   .newer>
  //  <--- add direction --
  //   A  B  C  <D>  E
  if (entry.newer) {
    if (entry === this.head) {
      this.head = entry.newer;
    }
    entry.newer.older = entry.older; // C <-- E.
  }
  if (entry.older) {
    entry.older.newer = entry.newer; // C. --> E
  }
  entry.newer = undefined; // D --x
  entry.older = this.tail; // D. --> E
  if (this.tail) {
    this.tail.newer = entry; // E. <-- D
  }
  this.tail = entry;
  return returnEntry ? entry : entry.value;
};

var cache$1 = new Cache(1000);
var filterTokenRE = /[^\s'"]+|'[^']*'|"[^"]*"/g;
var reservedArgRE = /^in$|^-?\d+/;

/**
 * Parser state
 */

var str;
var dir;
var c;
var prev;
var i;
var l;
var lastFilterIndex;
var inSingle;
var inDouble;
var curly;
var square;
var paren;
/**
 * Push a filter to the current directive object
 */

function pushFilter() {
  var exp = str.slice(lastFilterIndex, i).trim();
  var filter;
  if (exp) {
    filter = {};
    var tokens = exp.match(filterTokenRE);
    filter.name = tokens[0];
    if (tokens.length > 1) {
      filter.args = tokens.slice(1).map(processFilterArg);
    }
  }
  if (filter) {
    (dir.filters = dir.filters || []).push(filter);
  }
  lastFilterIndex = i + 1;
}

/**
 * Check if an argument is dynamic and strip quotes.
 *
 * @param {String} arg
 * @return {Object}
 */

function processFilterArg(arg) {
  if (reservedArgRE.test(arg)) {
    return {
      value: toNumber(arg),
      dynamic: false
    };
  } else {
    var stripped = stripQuotes(arg);
    var dynamic = stripped === arg;
    return {
      value: dynamic ? arg : stripped,
      dynamic: dynamic
    };
  }
}

/**
 * Parse a directive value and extract the expression
 * and its filters into a descriptor.
 *
 * Example:
 *
 * "a + 1 | uppercase" will yield:
 * {
 *   expression: 'a + 1',
 *   filters: [
 *     { name: 'uppercase', args: null }
 *   ]
 * }
 *
 * @param {String} s
 * @return {Object}
 */

function parseDirective(s) {
  var hit = cache$1.get(s);
  if (hit) {
    return hit;
  }

  // reset parser state
  str = s;
  inSingle = inDouble = false;
  curly = square = paren = 0;
  lastFilterIndex = 0;
  dir = {};

  for (i = 0, l = str.length; i < l; i++) {
    prev = c;
    c = str.charCodeAt(i);
    if (inSingle) {
      // check single quote
      if (c === 0x27 && prev !== 0x5C) inSingle = !inSingle;
    } else if (inDouble) {
      // check double quote
      if (c === 0x22 && prev !== 0x5C) inDouble = !inDouble;
    } else if (c === 0x7C && // pipe
    str.charCodeAt(i + 1) !== 0x7C && str.charCodeAt(i - 1) !== 0x7C) {
      if (dir.expression == null) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        dir.expression = str.slice(0, i).trim();
      } else {
        // already has filter
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22:
          inDouble = true;break; // "
        case 0x27:
          inSingle = true;break; // '
        case 0x28:
          paren++;break; // (
        case 0x29:
          paren--;break; // )
        case 0x5B:
          square++;break; // [
        case 0x5D:
          square--;break; // ]
        case 0x7B:
          curly++;break; // {
        case 0x7D:
          curly--;break; // }
      }
    }
  }

  if (dir.expression == null) {
    dir.expression = str.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  cache$1.put(s, dir);
  return dir;
}

var directive = Object.freeze({
  parseDirective: parseDirective
});

var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
var cache = undefined;
var tagRE = undefined;
var htmlRE = undefined;
/**
 * Escape a string so it can be used in a RegExp
 * constructor.
 *
 * @param {String} str
 */

function escapeRegex(str) {
  return str.replace(regexEscapeRE, '\\$&');
}

function compileRegex() {
  var open = escapeRegex(config.delimiters[0]);
  var close = escapeRegex(config.delimiters[1]);
  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
  var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
  tagRE = new RegExp(unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '|' + open + '((?:.|\\n)+?)' + close, 'g');
  htmlRE = new RegExp('^' + unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '$');
  // reset cache
  cache = new Cache(1000);
}

/**
 * Parse a template text string into an array of tokens.
 *
 * @param {String} text
 * @return {Array<Object> | null}
 *               - {String} type
 *               - {String} value
 *               - {Boolean} [html]
 *               - {Boolean} [oneTime]
 */

function parseText(text) {
  if (!cache) {
    compileRegex();
  }
  var hit = cache.get(text);
  if (hit) {
    return hit;
  }
  if (!tagRE.test(text)) {
    return null;
  }
  var tokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, html, value, first, oneTime;
  /* eslint-disable no-cond-assign */
  while (match = tagRE.exec(text)) {
    /* eslint-enable no-cond-assign */
    index = match.index;
    // push text token
    if (index > lastIndex) {
      tokens.push({
        value: text.slice(lastIndex, index)
      });
    }
    // tag token
    html = htmlRE.test(match[0]);
    value = html ? match[1] : match[2];
    first = value.charCodeAt(0);
    oneTime = first === 42; // *
    value = oneTime ? value.slice(1) : value;
    tokens.push({
      tag: true,
      value: value.trim(),
      html: html,
      oneTime: oneTime
    });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    tokens.push({
      value: text.slice(lastIndex)
    });
  }
  cache.put(text, tokens);
  return tokens;
}

/**
 * Format a list of tokens into an expression.
 * e.g. tokens parsed from 'a {{b}} c' can be serialized
 * into one single expression as '"a " + b + " c"'.
 *
 * @param {Array} tokens
 * @param {Vue} [vm]
 * @return {String}
 */

function tokensToExp(tokens, vm) {
  if (tokens.length > 1) {
    return tokens.map(function (token) {
      return formatToken(token, vm);
    }).join('+');
  } else {
    return formatToken(tokens[0], vm, true);
  }
}

/**
 * Format a single token.
 *
 * @param {Object} token
 * @param {Vue} [vm]
 * @param {Boolean} [single]
 * @return {String}
 */

function formatToken(token, vm, single) {
  return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
}

/**
 * For an attribute with multiple interpolation tags,
 * e.g. attr="some-{{thing | filter}}", in order to combine
 * the whole thing into a single watchable expression, we
 * have to inline those filters. This function does exactly
 * that. This is a bit hacky but it avoids heavy changes
 * to directive parser and watcher mechanism.
 *
 * @param {String} exp
 * @param {Boolean} single
 * @return {String}
 */

var filterRE = /[^|]\|[^|]/;
function inlineFilters(exp, single) {
  if (!filterRE.test(exp)) {
    return single ? exp : '(' + exp + ')';
  } else {
    var dir = parseDirective(exp);
    if (!dir.filters) {
      return '(' + exp + ')';
    } else {
      return 'this._applyFilters(' + dir.expression + // value
      ',null,' + // oldValue (null for read)
      JSON.stringify(dir.filters) + // filter descriptors
      ',false)'; // write?
    }
  }
}

var text = Object.freeze({
  compileRegex: compileRegex,
  parseText: parseText,
  tokensToExp: tokensToExp
});

var delimiters = ['{{', '}}'];
var unsafeDelimiters = ['{{{', '}}}'];

var config = Object.defineProperties({

  /**
   * Whether to print debug messages.
   * Also enables stack trace for warnings.
   *
   * @type {Boolean}
   */

  debug: false,

  /**
   * Whether to suppress warnings.
   *
   * @type {Boolean}
   */

  silent: false,

  /**
   * Whether to use async rendering.
   */

  async: true,

  /**
   * Whether to warn against errors caught when evaluating
   * expressions.
   */

  warnExpressionErrors: true,

  /**
   * Whether to allow devtools inspection.
   * Disabled by default in production builds.
   */

  devtools: process.env.NODE_ENV !== 'production',

  /**
   * Internal flag to indicate the delimiters have been
   * changed.
   *
   * @type {Boolean}
   */

  _delimitersChanged: true,

  /**
   * List of asset types that a component can own.
   *
   * @type {Array}
   */

  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],

  /**
   * prop binding modes
   */

  _propBindingModes: {
    ONE_WAY: 0,
    TWO_WAY: 1,
    ONE_TIME: 2
  },

  /**
   * Max circular updates allowed in a batcher flush cycle.
   */

  _maxUpdateCount: 100

}, {
  delimiters: { /**
                 * Interpolation delimiters. Changing these would trigger
                 * the text parser to re-compile the regular expressions.
                 *
                 * @type {Array<String>}
                 */

    get: function get() {
      return delimiters;
    },
    set: function set(val) {
      delimiters = val;
      compileRegex();
    },
    configurable: true,
    enumerable: true
  },
  unsafeDelimiters: {
    get: function get() {
      return unsafeDelimiters;
    },
    set: function set(val) {
      unsafeDelimiters = val;
      compileRegex();
    },
    configurable: true,
    enumerable: true
  }
});

var warn = undefined;
var formatComponentName = undefined;

if (process.env.NODE_ENV !== 'production') {
  (function () {
    var hasConsole = typeof console !== 'undefined';

    warn = function (msg, vm) {
      if (hasConsole && !config.silent) {
        console.error('[Vue warn]: ' + msg + (vm ? formatComponentName(vm) : ''));
      }
    };

    formatComponentName = function (vm) {
      var name = vm._isVue ? vm.$options.name : vm.name;
      return name ? ' (found in component: <' + hyphenate(name) + '>)' : '';
    };
  })();
}

/**
 * Append with transition.
 *
 * @param {Element} el
 * @param {Element} target
 * @param {Vue} vm
 * @param {Function} [cb]
 */

function appendWithTransition(el, target, vm, cb) {
  applyTransition(el, 1, function () {
    target.appendChild(el);
  }, vm, cb);
}

/**
 * InsertBefore with transition.
 *
 * @param {Element} el
 * @param {Element} target
 * @param {Vue} vm
 * @param {Function} [cb]
 */

function beforeWithTransition(el, target, vm, cb) {
  applyTransition(el, 1, function () {
    before(el, target);
  }, vm, cb);
}

/**
 * Remove with transition.
 *
 * @param {Element} el
 * @param {Vue} vm
 * @param {Function} [cb]
 */

function removeWithTransition(el, vm, cb) {
  applyTransition(el, -1, function () {
    remove(el);
  }, vm, cb);
}

/**
 * Apply transitions with an operation callback.
 *
 * @param {Element} el
 * @param {Number} direction
 *                  1: enter
 *                 -1: leave
 * @param {Function} op - the actual DOM operation
 * @param {Vue} vm
 * @param {Function} [cb]
 */

function applyTransition(el, direction, op, vm, cb) {
  var transition = el.__v_trans;
  if (!transition ||
  // skip if there are no js hooks and CSS transition is
  // not supported
  !transition.hooks && !transitionEndEvent ||
  // skip transitions for initial compile
  !vm._isCompiled ||
  // if the vm is being manipulated by a parent directive
  // during the parent's compilation phase, skip the
  // animation.
  vm.$parent && !vm.$parent._isCompiled) {
    op();
    if (cb) cb();
    return;
  }
  var action = direction > 0 ? 'enter' : 'leave';
  transition[action](op, cb);
}

var transition = Object.freeze({
  appendWithTransition: appendWithTransition,
  beforeWithTransition: beforeWithTransition,
  removeWithTransition: removeWithTransition,
  applyTransition: applyTransition
});

/**
 * Query an element selector if it's not an element already.
 *
 * @param {String|Element} el
 * @return {Element}
 */

function query(el) {
  if (typeof el === 'string') {
    var selector = el;
    el = document.querySelector(el);
    if (!el) {
      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);
    }
  }
  return el;
}

/**
 * Check if a node is in the document.
 * Note: document.documentElement.contains should work here
 * but always returns false for comment nodes in phantomjs,
 * making unit tests difficult. This is fixed by doing the
 * contains() check on the node's parentNode instead of
 * the node itself.
 *
 * @param {Node} node
 * @return {Boolean}
 */

function inDoc(node) {
  if (!node) return false;
  var doc = node.ownerDocument.documentElement;
  var parent = node.parentNode;
  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
}

/**
 * Get and remove an attribute from a node.
 *
 * @param {Node} node
 * @param {String} _attr
 */

function getAttr(node, _attr) {
  var val = node.getAttribute(_attr);
  if (val !== null) {
    node.removeAttribute(_attr);
  }
  return val;
}

/**
 * Get an attribute with colon or v-bind: prefix.
 *
 * @param {Node} node
 * @param {String} name
 * @return {String|null}
 */

function getBindAttr(node, name) {
  var val = getAttr(node, ':' + name);
  if (val === null) {
    val = getAttr(node, 'v-bind:' + name);
  }
  return val;
}

/**
 * Check the presence of a bind attribute.
 *
 * @param {Node} node
 * @param {String} name
 * @return {Boolean}
 */

function hasBindAttr(node, name) {
  return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

function before(el, target) {
  target.parentNode.insertBefore(el, target);
}

/**
 * Insert el after target
 *
 * @param {Element} el
 * @param {Element} target
 */

function after(el, target) {
  if (target.nextSibling) {
    before(el, target.nextSibling);
  } else {
    target.parentNode.appendChild(el);
  }
}

/**
 * Remove el from DOM
 *
 * @param {Element} el
 */

function remove(el) {
  el.parentNode.removeChild(el);
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

function prepend(el, target) {
  if (target.firstChild) {
    before(el, target.firstChild);
  } else {
    target.appendChild(el);
  }
}

/**
 * Replace target with el
 *
 * @param {Element} target
 * @param {Element} el
 */

function replace(target, el) {
  var parent = target.parentNode;
  if (parent) {
    parent.replaceChild(el, target);
  }
}

/**
 * Add event listener shorthand.
 *
 * @param {Element} el
 * @param {String} event
 * @param {Function} cb
 * @param {Boolean} [useCapture]
 */

function on(el, event, cb, useCapture) {
  el.addEventListener(event, cb, useCapture);
}

/**
 * Remove event listener shorthand.
 *
 * @param {Element} el
 * @param {String} event
 * @param {Function} cb
 */

function off(el, event, cb) {
  el.removeEventListener(event, cb);
}

/**
 * For IE9 compat: when both class and :class are present
 * getAttribute('class') returns wrong value...
 *
 * @param {Element} el
 * @return {String}
 */

function getClass(el) {
  var classname = el.className;
  if (typeof classname === 'object') {
    classname = classname.baseVal || '';
  }
  return classname;
}

/**
 * In IE9, setAttribute('class') will result in empty class
 * if the element also has the :class attribute; However in
 * PhantomJS, setting `className` does not work on SVG elements...
 * So we have to do a conditional check here.
 *
 * @param {Element} el
 * @param {String} cls
 */

function setClass(el, cls) {
  /* istanbul ignore if */
  if (isIE9 && !/svg$/.test(el.namespaceURI)) {
    el.className = cls;
  } else {
    el.setAttribute('class', cls);
  }
}

/**
 * Add class with compatibility for IE & SVG
 *
 * @param {Element} el
 * @param {String} cls
 */

function addClass(el, cls) {
  if (el.classList) {
    el.classList.add(cls);
  } else {
    var cur = ' ' + getClass(el) + ' ';
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      setClass(el, (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for IE & SVG
 *
 * @param {Element} el
 * @param {String} cls
 */

function removeClass(el, cls) {
  if (el.classList) {
    el.classList.remove(cls);
  } else {
    var cur = ' ' + getClass(el) + ' ';
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    setClass(el, cur.trim());
  }
  if (!el.className) {
    el.removeAttribute('class');
  }
}

/**
 * Extract raw content inside an element into a temporary
 * container div
 *
 * @param {Element} el
 * @param {Boolean} asFragment
 * @return {Element|DocumentFragment}
 */

function extractContent(el, asFragment) {
  var child;
  var rawContent;
  /* istanbul ignore if */
  if (isTemplate(el) && isFragment(el.content)) {
    el = el.content;
  }
  if (el.hasChildNodes()) {
    trimNode(el);
    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
    /* eslint-disable no-cond-assign */
    while (child = el.firstChild) {
      /* eslint-enable no-cond-assign */
      rawContent.appendChild(child);
    }
  }
  return rawContent;
}

/**
 * Trim possible empty head/tail text and comment
 * nodes inside a parent.
 *
 * @param {Node} node
 */

function trimNode(node) {
  var child;
  /* eslint-disable no-sequences */
  while ((child = node.firstChild, isTrimmable(child))) {
    node.removeChild(child);
  }
  while ((child = node.lastChild, isTrimmable(child))) {
    node.removeChild(child);
  }
  /* eslint-enable no-sequences */
}

function isTrimmable(node) {
  return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);
}

/**
 * Check if an element is a template tag.
 * Note if the template appears inside an SVG its tagName
 * will be in lowercase.
 *
 * @param {Element} el
 */

function isTemplate(el) {
  return el.tagName && el.tagName.toLowerCase() === 'template';
}

/**
 * Create an "anchor" for performing dom insertion/removals.
 * This is used in a number of scenarios:
 * - fragment instance
 * - v-html
 * - v-if
 * - v-for
 * - component
 *
 * @param {String} content
 * @param {Boolean} persist - IE trashes empty textNodes on
 *                            cloneNode(true), so in certain
 *                            cases the anchor needs to be
 *                            non-empty to be persisted in
 *                            templates.
 * @return {Comment|Text}
 */

function createAnchor(content, persist) {
  var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
  anchor.__v_anchor = true;
  return anchor;
}

/**
 * Find a component ref attribute that starts with $.
 *
 * @param {Element} node
 * @return {String|undefined}
 */

var refRE = /^v-ref:/;

function findRef(node) {
  if (node.hasAttributes()) {
    var attrs = node.attributes;
    for (var i = 0, l = attrs.length; i < l; i++) {
      var name = attrs[i].name;
      if (refRE.test(name)) {
        return camelize(name.replace(refRE, ''));
      }
    }
  }
}

/**
 * Map a function to a range of nodes .
 *
 * @param {Node} node
 * @param {Node} end
 * @param {Function} op
 */

function mapNodeRange(node, end, op) {
  var next;
  while (node !== end) {
    next = node.nextSibling;
    op(node);
    node = next;
  }
  op(end);
}

/**
 * Remove a range of nodes with transition, store
 * the nodes in a fragment with correct ordering,
 * and call callback when done.
 *
 * @param {Node} start
 * @param {Node} end
 * @param {Vue} vm
 * @param {DocumentFragment} frag
 * @param {Function} cb
 */

function removeNodeRange(start, end, vm, frag, cb) {
  var done = false;
  var removed = 0;
  var nodes = [];
  mapNodeRange(start, end, function (node) {
    if (node === end) done = true;
    nodes.push(node);
    removeWithTransition(node, vm, onRemoved);
  });
  function onRemoved() {
    removed++;
    if (done && removed >= nodes.length) {
      for (var i = 0; i < nodes.length; i++) {
        frag.appendChild(nodes[i]);
      }
      cb && cb();
    }
  }
}

/**
 * Check if a node is a DocumentFragment.
 *
 * @param {Node} node
 * @return {Boolean}
 */

function isFragment(node) {
  return node && node.nodeType === 11;
}

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 *
 * @param {Element} el
 * @return {String}
 */

function getOuterHTML(el) {
  if (el.outerHTML) {
    return el.outerHTML;
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML;
  }
}

var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i;
var reservedTagRE = /^(slot|partial|component)$/i;

var isUnknownElement = undefined;
if (process.env.NODE_ENV !== 'production') {
  isUnknownElement = function (el, tag) {
    if (tag.indexOf('-') > -1) {
      // http://stackoverflow.com/a/28210364/1070244
      return el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
    } else {
      return (/HTMLUnknownElement/.test(el.toString()) &&
        // Chrome returns unknown for several HTML5 elements.
        // https://code.google.com/p/chromium/issues/detail?id=540526
        // Firefox returns unknown for some "Interactive elements."
        !/^(data|time|rtc|rb|details|dialog|summary)$/.test(tag)
      );
    }
  };
}

/**
 * Check if an element is a component, if yes return its
 * component id.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Object|undefined}
 */

function checkComponentAttr(el, options) {
  var tag = el.tagName.toLowerCase();
  var hasAttrs = el.hasAttributes();
  if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
    if (resolveAsset(options, 'components', tag)) {
      return { id: tag };
    } else {
      var is = hasAttrs && getIsBinding(el, options);
      if (is) {
        return is;
      } else if (process.env.NODE_ENV !== 'production') {
        var expectedTag = options._componentNameMap && options._componentNameMap[tag];
        if (expectedTag) {
          warn('Unknown custom element: <' + tag + '> - ' + 'did you mean <' + expectedTag + '>? ' + 'HTML is case-insensitive, remember to use kebab-case in templates.');
        } else if (isUnknownElement(el, tag)) {
          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');
        }
      }
    }
  } else if (hasAttrs) {
    return getIsBinding(el, options);
  }
}

/**
 * Get "is" binding from an element.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Object|undefined}
 */

function getIsBinding(el, options) {
  // dynamic syntax
  var exp = el.getAttribute('is');
  if (exp != null) {
    if (resolveAsset(options, 'components', exp)) {
      el.removeAttribute('is');
      return { id: exp };
    }
  } else {
    exp = getBindAttr(el, 'is');
    if (exp != null) {
      return { id: exp, dynamic: true };
    }
  }
}

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 *
 * All strategy functions follow the same signature:
 *
 * @param {*} parentVal
 * @param {*} childVal
 * @param {Vue} [vm]
 */

var strats = config.optionMergeStrategies = Object.create(null);

/**
 * Helper that recursively merges two data objects together.
 */

function mergeData(to, from) {
  var key, toVal, fromVal;
  for (key in from) {
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isObject(toVal) && isObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to;
}

/**
 * Data
 */

strats.data = function (parentVal, childVal, vm) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal;
    }
    if (typeof childVal !== 'function') {
      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
      return parentVal;
    }
    if (!parentVal) {
      return childVal;
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn() {
      return mergeData(childVal.call(this), parentVal.call(this));
    };
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn() {
      // instance merge
      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
      if (instanceData) {
        return mergeData(instanceData, defaultData);
      } else {
        return defaultData;
      }
    };
  }
};

/**
 * El
 */

strats.el = function (parentVal, childVal, vm) {
  if (!vm && childVal && typeof childVal !== 'function') {
    process.env.NODE_ENV !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
    return;
  }
  var ret = childVal || parentVal;
  // invoke the element factory if this is instance merge
  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
};

/**
 * Hooks and param attributes are merged as arrays.
 */

strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = strats.activate = function (parentVal, childVal) {
  return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
};

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */

function mergeAssets(parentVal, childVal) {
  var res = Object.create(parentVal || null);
  return childVal ? extend(res, guardArrayAssets(childVal)) : res;
}

config._assetTypes.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Events & Watchers.
 *
 * Events & watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */

strats.watch = strats.events = function (parentVal, childVal) {
  if (!childVal) return parentVal;
  if (!parentVal) return childVal;
  var ret = {};
  extend(ret, parentVal);
  for (var key in childVal) {
    var parent = ret[key];
    var child = childVal[key];
    if (parent && !isArray(parent)) {
      parent = [parent];
    }
    ret[key] = parent ? parent.concat(child) : [child];
  }
  return ret;
};

/**
 * Other object hashes.
 */

strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
  if (!childVal) return parentVal;
  if (!parentVal) return childVal;
  var ret = Object.create(null);
  extend(ret, parentVal);
  extend(ret, childVal);
  return ret;
};

/**
 * Default strategy.
 */

var defaultStrat = function defaultStrat(parentVal, childVal) {
  return childVal === undefined ? parentVal : childVal;
};

/**
 * Make sure component options get converted to actual
 * constructors.
 *
 * @param {Object} options
 */

function guardComponents(options) {
  if (options.components) {
    var components = options.components = guardArrayAssets(options.components);
    var ids = Object.keys(components);
    var def;
    if (process.env.NODE_ENV !== 'production') {
      var map = options._componentNameMap = {};
    }
    for (var i = 0, l = ids.length; i < l; i++) {
      var key = ids[i];
      if (commonTagRE.test(key) || reservedTagRE.test(key)) {
        process.env.NODE_ENV !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
        continue;
      }
      // record a all lowercase <-> kebab-case mapping for
      // possible custom element case error warning
      if (process.env.NODE_ENV !== 'production') {
        map[key.replace(/-/g, '').toLowerCase()] = hyphenate(key);
      }
      def = components[key];
      if (isPlainObject(def)) {
        components[key] = Vue.extend(def);
      }
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 *
 * @param {Object} options
 */

function guardProps(options) {
  var props = options.props;
  var i, val;
  if (isArray(props)) {
    options.props = {};
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        options.props[val] = null;
      } else if (val.name) {
        options.props[val.name] = val;
      }
    }
  } else if (isPlainObject(props)) {
    var keys = Object.keys(props);
    i = keys.length;
    while (i--) {
      val = props[keys[i]];
      if (typeof val === 'function') {
        props[keys[i]] = { type: val };
      }
    }
  }
}

/**
 * Guard an Array-format assets option and converted it
 * into the key-value Object format.
 *
 * @param {Object|Array} assets
 * @return {Object}
 */

function guardArrayAssets(assets) {
  if (isArray(assets)) {
    var res = {};
    var i = assets.length;
    var asset;
    while (i--) {
      asset = assets[i];
      var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
      if (!id) {
        process.env.NODE_ENV !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
      } else {
        res[id] = asset;
      }
    }
    return res;
  }
  return assets;
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 *
 * @param {Object} parent
 * @param {Object} child
 * @param {Vue} [vm] - if vm is present, indicates this is
 *                     an instantiation merge.
 */

function mergeOptions(parent, child, vm) {
  guardComponents(child);
  guardProps(child);
  if (process.env.NODE_ENV !== 'production') {
    if (child.propsData && !vm) {
      warn('propsData can only be used as an instantiation option.');
    }
  }
  var options = {};
  var key;
  if (child['extends']) {
    parent = typeof child['extends'] === 'function' ? mergeOptions(parent, child['extends'].options, vm) : mergeOptions(parent, child['extends'], vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      var mixin = child.mixins[i];
      var mixinOptions = mixin.prototype instanceof Vue ? mixin.options : mixin;
      parent = mergeOptions(parent, mixinOptions, vm);
    }
  }
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField(key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options;
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 *
 * @param {Object} options
 * @param {String} type
 * @param {String} id
 * @param {Boolean} warnMissing
 * @return {Object|Function}
 */

function resolveAsset(options, type, id, warnMissing) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return;
  }
  var assets = options[type];
  var camelizedId;
  var res = assets[id] ||
  // camelCase ID
  assets[camelizedId = camelize(id)] ||
  // Pascal Case ID
  assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
  }
  return res;
}

var uid$1 = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 *
 * @constructor
 */
function Dep() {
  this.id = uid$1++;
  this.subs = [];
}

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;

/**
 * Add a directive subscriber.
 *
 * @param {Directive} sub
 */

Dep.prototype.addSub = function (sub) {
  this.subs.push(sub);
};

/**
 * Remove a directive subscriber.
 *
 * @param {Directive} sub
 */

Dep.prototype.removeSub = function (sub) {
  this.subs.$remove(sub);
};

/**
 * Add self as a dependency to the target watcher.
 */

Dep.prototype.depend = function () {
  Dep.target.addDep(this);
};

/**
 * Notify all subscribers of a new value.
 */

Dep.prototype.notify = function () {
  // stablize the subscriber list first
  var subs = toArray(this.subs);
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto)

/**
 * Intercept mutating methods and emit events
 */

;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator() {
    // avoid leaking arguments:
    // http://jsperf.com/closure-with-arguments
    var i = arguments.length;
    var args = new Array(i);
    while (i--) {
      args[i] = arguments[i];
    }
    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
        inserted = args;
        break;
      case 'unshift':
        inserted = args;
        break;
      case 'splice':
        inserted = args.slice(2);
        break;
    }
    if (inserted) ob.observeArray(inserted);
    // notify change
    ob.dep.notify();
    return result;
  });
});

/**
 * Swap the element at the given index with a new value
 * and emits corresponding event.
 *
 * @param {Number} index
 * @param {*} val
 * @return {*} - replaced element
 */

def(arrayProto, '$set', function $set(index, val) {
  if (index >= this.length) {
    this.length = Number(index) + 1;
  }
  return this.splice(index, 1, val)[0];
});

/**
 * Convenience method to remove the element at given index or target element reference.
 *
 * @param {*} item
 */

def(arrayProto, '$remove', function $remove(item) {
  /* istanbul ignore if */
  if (!this.length) return;
  var index = indexOf(this, item);
  if (index > -1) {
    return this.splice(index, 1);
  }
});

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However in certain cases, e.g.
 * v-for scope alias and props, we don't want to force conversion
 * because the value may be a nested value under a frozen data structure.
 *
 * So whenever we want to set a reactive property without forcing
 * conversion on the new value, we wrap that call inside this function.
 */

var shouldConvert = true;

function withoutConversion(fn) {
  shouldConvert = false;
  fn();
  shouldConvert = true;
}

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 *
 * @param {Array|Object} value
 * @constructor
 */

function Observer(value) {
  this.value = value;
  this.dep = new Dep();
  def(value, '__ob__', this);
  if (isArray(value)) {
    var augment = hasProto ? protoAugment : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
}

// Instance methods

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 *
 * @param {Object} obj
 */

Observer.prototype.walk = function (obj) {
  var keys = Object.keys(obj);
  for (var i = 0, l = keys.length; i < l; i++) {
    this.convert(keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 *
 * @param {Array} items
 */

Observer.prototype.observeArray = function (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

/**
 * Convert a property into getter/setter so we can emit
 * the events when the property is accessed/changed.
 *
 * @param {String} key
 * @param {*} val
 */

Observer.prototype.convert = function (key, val) {
  defineReactive(this.value, key, val);
};

/**
 * Add an owner vm, so that when $set/$delete mutations
 * happen we can notify owner vms to proxy the keys and
 * digest the watchers. This is only called when the object
 * is observed as an instance's root $data.
 *
 * @param {Vue} vm
 */

Observer.prototype.addVm = function (vm) {
  (this.vms || (this.vms = [])).push(vm);
};

/**
 * Remove an owner vm. This is called when the object is
 * swapped out as an instance's $data object.
 *
 * @param {Vue} vm
 */

Observer.prototype.removeVm = function (vm) {
  this.vms.$remove(vm);
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 *
 * @param {Object|Array} target
 * @param {Object} src
 */

function protoAugment(target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 *
 * @param {Object|Array} target
 * @param {Object} proto
 */

function copyAugment(target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 *
 * @param {*} value
 * @param {Vue} [vm]
 * @return {Observer|undefined}
 * @static
 */

function observe(value, vm) {
  if (!value || typeof value !== 'object') {
    return;
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (shouldConvert && (isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
    ob = new Observer(value);
  }
  if (ob && vm) {
    ob.addVm(vm);
  }
  return ob;
}

/**
 * Define a reactive property on an Object.
 *
 * @param {Object} obj
 * @param {String} key
 * @param {*} val
 */

function defineReactive(obj, key, val) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return;
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
        if (isArray(value)) {
          for (var e, i = 0, l = value.length; i < l; i++) {
            e = value[i];
            e && e.__ob__ && e.__ob__.dep.depend();
          }
        }
      }
      return value;
    },
    set: function reactiveSetter(newVal) {
      var value = getter ? getter.call(obj) : val;
      if (newVal === value) {
        return;
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = observe(newVal);
      dep.notify();
    }
  });
}



var util = Object.freeze({
	defineReactive: defineReactive,
	set: set,
	del: del,
	hasOwn: hasOwn,
	isLiteral: isLiteral,
	isReserved: isReserved,
	_toString: _toString,
	toNumber: toNumber,
	toBoolean: toBoolean,
	stripQuotes: stripQuotes,
	camelize: camelize,
	hyphenate: hyphenate,
	classify: classify,
	bind: bind,
	toArray: toArray,
	extend: extend,
	isObject: isObject,
	isPlainObject: isPlainObject,
	def: def,
	debounce: _debounce,
	indexOf: indexOf,
	cancellable: cancellable,
	looseEqual: looseEqual,
	isArray: isArray,
	hasProto: hasProto,
	inBrowser: inBrowser,
	devtools: devtools,
	isIE: isIE,
	isIE9: isIE9,
	isAndroid: isAndroid,
	isIos: isIos,
	iosVersionMatch: iosVersionMatch,
	iosVersion: iosVersion,
	hasMutationObserverBug: hasMutationObserverBug,
	get transitionProp () { return transitionProp; },
	get transitionEndEvent () { return transitionEndEvent; },
	get animationProp () { return animationProp; },
	get animationEndEvent () { return animationEndEvent; },
	nextTick: nextTick,
	get _Set () { return _Set; },
	query: query,
	inDoc: inDoc,
	getAttr: getAttr,
	getBindAttr: getBindAttr,
	hasBindAttr: hasBindAttr,
	before: before,
	after: after,
	remove: remove,
	prepend: prepend,
	replace: replace,
	on: on,
	off: off,
	setClass: setClass,
	addClass: addClass,
	removeClass: removeClass,
	extractContent: extractContent,
	trimNode: trimNode,
	isTemplate: isTemplate,
	createAnchor: createAnchor,
	findRef: findRef,
	mapNodeRange: mapNodeRange,
	removeNodeRange: removeNodeRange,
	isFragment: isFragment,
	getOuterHTML: getOuterHTML,
	mergeOptions: mergeOptions,
	resolveAsset: resolveAsset,
	checkComponentAttr: checkComponentAttr,
	commonTagRE: commonTagRE,
	reservedTagRE: reservedTagRE,
	get warn () { return warn; }
});

var uid = 0;

function initMixin (Vue) {
  /**
   * The main init sequence. This is called for every
   * instance, including ones that are created from extended
   * constructors.
   *
   * @param {Object} options - this options object should be
   *                           the result of merging class
   *                           options and the options passed
   *                           in to the constructor.
   */

  Vue.prototype._init = function (options) {
    options = options || {};

    this.$el = null;
    this.$parent = options.parent;
    this.$root = this.$parent ? this.$parent.$root : this;
    this.$children = [];
    this.$refs = {}; // child vm references
    this.$els = {}; // element references
    this._watchers = []; // all watchers as an array
    this._directives = []; // all directives

    // a uid
    this._uid = uid++;

    // a flag to avoid this being observed
    this._isVue = true;

    // events bookkeeping
    this._events = {}; // registered callbacks
    this._eventsCount = {}; // for $broadcast optimization

    // fragment instance properties
    this._isFragment = false;
    this._fragment = // @type {DocumentFragment}
    this._fragmentStart = // @type {Text|Comment}
    this._fragmentEnd = null; // @type {Text|Comment}

    // lifecycle state
    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;
    this._unlinkFn = null;

    // context:
    // if this is a transcluded component, context
    // will be the common parent vm of this instance
    // and its host.
    this._context = options._context || this.$parent;

    // scope:
    // if this is inside an inline v-for, the scope
    // will be the intermediate scope created for this
    // repeat fragment. this is used for linking props
    // and container directives.
    this._scope = options._scope;

    // fragment:
    // if this instance is compiled inside a Fragment, it
    // needs to reigster itself as a child of that fragment
    // for attach/detach to work properly.
    this._frag = options._frag;
    if (this._frag) {
      this._frag.children.push(this);
    }

    // push self into parent / transclusion host
    if (this.$parent) {
      this.$parent.$children.push(this);
    }

    // merge options.
    options = this.$options = mergeOptions(this.constructor.options, options, this);

    // set ref
    this._updateRef();

    // initialize data as empty object.
    // it will be filled up in _initData().
    this._data = {};

    // call init hook
    this._callHook('init');

    // initialize data observation and scope inheritance.
    this._initState();

    // setup event system and option events.
    this._initEvents();

    // call created hook
    this._callHook('created');

    // if `el` option is passed, start compilation.
    if (options.el) {
      this.$mount(options.el);
    }
  };
}

var pathCache = new Cache(1000);

// actions
var APPEND = 0;
var PUSH = 1;
var INC_SUB_PATH_DEPTH = 2;
var PUSH_SUB_PATH = 3;

// states
var BEFORE_PATH = 0;
var IN_PATH = 1;
var BEFORE_IDENT = 2;
var IN_IDENT = 3;
var IN_SUB_PATH = 4;
var IN_SINGLE_QUOTE = 5;
var IN_DOUBLE_QUOTE = 6;
var AFTER_PATH = 7;
var ERROR = 8;

var pathStateMachine = [];

pathStateMachine[BEFORE_PATH] = {
  'ws': [BEFORE_PATH],
  'ident': [IN_IDENT, APPEND],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
};

pathStateMachine[IN_PATH] = {
  'ws': [IN_PATH],
  '.': [BEFORE_IDENT],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
};

pathStateMachine[BEFORE_IDENT] = {
  'ws': [BEFORE_IDENT],
  'ident': [IN_IDENT, APPEND]
};

pathStateMachine[IN_IDENT] = {
  'ident': [IN_IDENT, APPEND],
  '0': [IN_IDENT, APPEND],
  'number': [IN_IDENT, APPEND],
  'ws': [IN_PATH, PUSH],
  '.': [BEFORE_IDENT, PUSH],
  '[': [IN_SUB_PATH, PUSH],
  'eof': [AFTER_PATH, PUSH]
};

pathStateMachine[IN_SUB_PATH] = {
  "'": [IN_SINGLE_QUOTE, APPEND],
  '"': [IN_DOUBLE_QUOTE, APPEND],
  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
  ']': [IN_PATH, PUSH_SUB_PATH],
  'eof': ERROR,
  'else': [IN_SUB_PATH, APPEND]
};

pathStateMachine[IN_SINGLE_QUOTE] = {
  "'": [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_SINGLE_QUOTE, APPEND]
};

pathStateMachine[IN_DOUBLE_QUOTE] = {
  '"': [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_DOUBLE_QUOTE, APPEND]
};

/**
 * Determine the type of a character in a keypath.
 *
 * @param {Char} ch
 * @return {String} type
 */

function getPathCharType(ch) {
  if (ch === undefined) {
    return 'eof';
  }

  var code = ch.charCodeAt(0);

  switch (code) {
    case 0x5B: // [
    case 0x5D: // ]
    case 0x2E: // .
    case 0x22: // "
    case 0x27: // '
    case 0x30:
      // 0
      return ch;

    case 0x5F: // _
    case 0x24:
      // $
      return 'ident';

    case 0x20: // Space
    case 0x09: // Tab
    case 0x0A: // Newline
    case 0x0D: // Return
    case 0xA0: // No-break space
    case 0xFEFF: // Byte Order Mark
    case 0x2028: // Line Separator
    case 0x2029:
      // Paragraph Separator
      return 'ws';
  }

  // a-z, A-Z
  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
    return 'ident';
  }

  // 1-9
  if (code >= 0x31 && code <= 0x39) {
    return 'number';
  }

  return 'else';
}

/**
 * Format a subPath, return its plain form if it is
 * a literal string or number. Otherwise prepend the
 * dynamic indicator (*).
 *
 * @param {String} path
 * @return {String}
 */

function formatSubPath(path) {
  var trimmed = path.trim();
  // invalid leading 0
  if (path.charAt(0) === '0' && isNaN(path)) {
    return false;
  }
  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
}

/**
 * Parse a string path into an array of segments
 *
 * @param {String} path
 * @return {Array|undefined}
 */

function parse(path) {
  var keys = [];
  var index = -1;
  var mode = BEFORE_PATH;
  var subPathDepth = 0;
  var c, newChar, key, type, transition, action, typeMap;

  var actions = [];

  actions[PUSH] = function () {
    if (key !== undefined) {
      keys.push(key);
      key = undefined;
    }
  };

  actions[APPEND] = function () {
    if (key === undefined) {
      key = newChar;
    } else {
      key += newChar;
    }
  };

  actions[INC_SUB_PATH_DEPTH] = function () {
    actions[APPEND]();
    subPathDepth++;
  };

  actions[PUSH_SUB_PATH] = function () {
    if (subPathDepth > 0) {
      subPathDepth--;
      mode = IN_SUB_PATH;
      actions[APPEND]();
    } else {
      subPathDepth = 0;
      key = formatSubPath(key);
      if (key === false) {
        return false;
      } else {
        actions[PUSH]();
      }
    }
  };

  function maybeUnescapeQuote() {
    var nextChar = path[index + 1];
    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
      index++;
      newChar = '\\' + nextChar;
      actions[APPEND]();
      return true;
    }
  }

  while (mode != null) {
    index++;
    c = path[index];

    if (c === '\\' && maybeUnescapeQuote()) {
      continue;
    }

    type = getPathCharType(c);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type] || typeMap['else'] || ERROR;

    if (transition === ERROR) {
      return; // parse error
    }

    mode = transition[0];
    action = actions[transition[1]];
    if (action) {
      newChar = transition[2];
      newChar = newChar === undefined ? c : newChar;
      if (action() === false) {
        return;
      }
    }

    if (mode === AFTER_PATH) {
      keys.raw = path;
      return keys;
    }
  }
}

/**
 * External parse that check for a cache hit first
 *
 * @param {String} path
 * @return {Array|undefined}
 */

function parsePath(path) {
  var hit = pathCache.get(path);
  if (!hit) {
    hit = parse(path);
    if (hit) {
      pathCache.put(path, hit);
    }
  }
  return hit;
}

/**
 * Get from an object from a path string
 *
 * @param {Object} obj
 * @param {String} path
 */

function getPath(obj, path) {
  return parseExpression(path).get(obj);
}

/**
 * Warn against setting non-existent root path on a vm.
 */

var warnNonExistent;
if (process.env.NODE_ENV !== 'production') {
  warnNonExistent = function (path, vm) {
    warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.', vm);
  };
}

/**
 * Set on an object from a path
 *
 * @param {Object} obj
 * @param {String | Array} path
 * @param {*} val
 */

function setPath(obj, path, val) {
  var original = obj;
  if (typeof path === 'string') {
    path = parse(path);
  }
  if (!path || !isObject(obj)) {
    return false;
  }
  var last, key;
  for (var i = 0, l = path.length; i < l; i++) {
    last = obj;
    key = path[i];
    if (key.charAt(0) === '*') {
      key = parseExpression(key.slice(1)).get.call(original, original);
    }
    if (i < l - 1) {
      obj = obj[key];
      if (!isObject(obj)) {
        obj = {};
        if (process.env.NODE_ENV !== 'production' && last._isVue) {
          warnNonExistent(path, last);
        }
        set(last, key, obj);
      }
    } else {
      if (isArray(obj)) {
        obj.$set(key, val);
      } else if (key in obj) {
        obj[key] = val;
      } else {
        if (process.env.NODE_ENV !== 'production' && obj._isVue) {
          warnNonExistent(path, obj);
        }
        set(obj, key, val);
      }
    }
  }
  return true;
}

var path = Object.freeze({
  parsePath: parsePath,
  getPath: getPath,
  setPath: setPath
});

var expressionCache = new Cache(1000);

var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');

// keywords that don't make sense inside expressions
var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'protected,static,interface,private,public';
var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');

var wsRE = /\s/g;
var newlineRE = /\n/g;
var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g;
var restoreRE = /"(\d+)"/g;
var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
var literalValueRE$1 = /^(?:true|false|null|undefined|Infinity|NaN)$/;

function noop() {}

/**
 * Save / Rewrite / Restore
 *
 * When rewriting paths found in an expression, it is
 * possible for the same letter sequences to be found in
 * strings and Object literal property keys. Therefore we
 * remove and store these parts in a temporary array, and
 * restore them after the path rewrite.
 */

var saved = [];

/**
 * Save replacer
 *
 * The save regex can match two possible cases:
 * 1. An opening object literal
 * 2. A string
 * If matched as a plain string, we need to escape its
 * newlines, since the string needs to be preserved when
 * generating the function body.
 *
 * @param {String} str
 * @param {String} isString - str if matched as a string
 * @return {String} - placeholder with index
 */

function save(str, isString) {
  var i = saved.length;
  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
  return '"' + i + '"';
}

/**
 * Path rewrite replacer
 *
 * @param {String} raw
 * @return {String}
 */

function rewrite(raw) {
  var c = raw.charAt(0);
  var path = raw.slice(1);
  if (allowedKeywordsRE.test(path)) {
    return raw;
  } else {
    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
    return c + 'scope.' + path;
  }
}

/**
 * Restore replacer
 *
 * @param {String} str
 * @param {String} i - matched save index
 * @return {String}
 */

function restore(str, i) {
  return saved[i];
}

/**
 * Rewrite an expression, prefixing all path accessors with
 * `scope.` and generate getter/setter functions.
 *
 * @param {String} exp
 * @return {Function}
 */

function compileGetter(exp) {
  if (improperKeywordsRE.test(exp)) {
    process.env.NODE_ENV !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
  }
  // reset state
  saved.length = 0;
  // save strings and object literal keys
  var body = exp.replace(saveRE, save).replace(wsRE, '');
  // rewrite all paths
  // pad 1 space here because the regex matches 1 extra char
  body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
  return makeGetterFn(body);
}

/**
 * Build a getter function. Requires eval.
 *
 * We isolate the try/catch so it doesn't affect the
 * optimization of the parse function when it is not called.
 *
 * @param {String} body
 * @return {Function|undefined}
 */

function makeGetterFn(body) {
  try {
    /* eslint-disable no-new-func */
    return new Function('scope', 'return ' + body + ';');
    /* eslint-enable no-new-func */
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      /* istanbul ignore if */
      if (e.toString().match(/unsafe-eval|CSP/)) {
        warn('It seems you are using the default build of Vue.js in an environment ' + 'with Content Security Policy that prohibits unsafe-eval. ' + 'Use the CSP-compliant build instead: ' + 'http://vuejs.org/guide/installation.html#CSP-compliant-build');
      } else {
        warn('Invalid expression. ' + 'Generated function body: ' + body);
      }
    }
    return noop;
  }
}

/**
 * Compile a setter function for the expression.
 *
 * @param {String} exp
 * @return {Function|undefined}
 */

function compileSetter(exp) {
  var path = parsePath(exp);
  if (path) {
    return function (scope, val) {
      setPath(scope, path, val);
    };
  } else {
    process.env.NODE_ENV !== 'production' && warn('Invalid setter expression: ' + exp);
  }
}

/**
 * Parse an expression into re-written getter/setters.
 *
 * @param {String} exp
 * @param {Boolean} needSet
 * @return {Function}
 */

function parseExpression(exp, needSet) {
  exp = exp.trim();
  // try cache
  var hit = expressionCache.get(exp);
  if (hit) {
    if (needSet && !hit.set) {
      hit.set = compileSetter(hit.exp);
    }
    return hit;
  }
  var res = { exp: exp };
  res.get = isSimplePath(exp) && exp.indexOf('[') < 0
  // optimized super simple getter
  ? makeGetterFn('scope.' + exp)
  // dynamic getter
  : compileGetter(exp);
  if (needSet) {
    res.set = compileSetter(exp);
  }
  expressionCache.put(exp, res);
  return res;
}

/**
 * Check if an expression is a simple path.
 *
 * @param {String} exp
 * @return {Boolean}
 */

function isSimplePath(exp) {
  return pathTestRE.test(exp) &&
  // don't treat literal values as paths
  !literalValueRE$1.test(exp) &&
  // Math constants e.g. Math.PI, Math.E etc.
  exp.slice(0, 5) !== 'Math.';
}

var expression = Object.freeze({
  parseExpression: parseExpression,
  isSimplePath: isSimplePath
});

// we have two separate queues: one for directive updates
// and one for user watcher registered via $watch().
// we want to guarantee directive updates to be called
// before user watchers so that when user watchers are
// triggered, the DOM would have already been in updated
// state.

var queue = [];
var userQueue = [];
var has = {};
var circular = {};
var waiting = false;

/**
 * Reset the batcher's state.
 */

function resetBatcherState() {
  queue.length = 0;
  userQueue.length = 0;
  has = {};
  circular = {};
  waiting = false;
}

/**
 * Flush both queues and run the watchers.
 */

function flushBatcherQueue() {
  var _again = true;

  _function: while (_again) {
    _again = false;

    runBatcherQueue(queue);
    runBatcherQueue(userQueue);
    // user watchers triggered more watchers,
    // keep flushing until it depletes
    if (queue.length) {
      _again = true;
      continue _function;
    }
    // dev tool hook
    /* istanbul ignore if */
    if (devtools && config.devtools) {
      devtools.emit('flush');
    }
    resetBatcherState();
  }
}

/**
 * Run the watchers in a single queue.
 *
 * @param {Array} queue
 */

function runBatcherQueue(queue) {
  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (var i = 0; i < queue.length; i++) {
    var watcher = queue[i];
    var id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > config._maxUpdateCount) {
        warn('You may have an infinite update loop for watcher ' + 'with expression "' + watcher.expression + '"', watcher.vm);
        break;
      }
    }
  }
  queue.length = 0;
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 *
 * @param {Watcher} watcher
 *   properties:
 *   - {Number} id
 *   - {Function} run
 */

function pushWatcher(watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    // push watcher into appropriate queue
    var q = watcher.user ? userQueue : queue;
    has[id] = q.length;
    q.push(watcher);
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushBatcherQueue);
    }
  }
}

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 *
 * @param {Vue} vm
 * @param {String|Function} expOrFn
 * @param {Function} cb
 * @param {Object} options
 *                 - {Array} filters
 *                 - {Boolean} twoWay
 *                 - {Boolean} deep
 *                 - {Boolean} user
 *                 - {Boolean} sync
 *                 - {Boolean} lazy
 *                 - {Function} [preProcess]
 *                 - {Function} [postProcess]
 * @constructor
 */
function Watcher(vm, expOrFn, cb, options) {
  // mix in options
  if (options) {
    extend(this, options);
  }
  var isFn = typeof expOrFn === 'function';
  this.vm = vm;
  vm._watchers.push(this);
  this.expression = expOrFn;
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.prevError = null; // for async error stacks
  // parse expression for getter/setter
  if (isFn) {
    this.getter = expOrFn;
    this.setter = undefined;
  } else {
    var res = parseExpression(expOrFn, this.twoWay);
    this.getter = res.get;
    this.setter = res.set;
  }
  this.value = this.lazy ? undefined : this.get();
  // state for avoiding false triggers for deep and Array
  // watchers during vm._digest()
  this.queued = this.shallow = false;
}

/**
 * Evaluate the getter, and re-collect dependencies.
 */

Watcher.prototype.get = function () {
  this.beforeGet();
  var scope = this.scope || this.vm;
  var value;
  try {
    value = this.getter.call(scope, scope);
  } catch (e) {
    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
      warn('Error when evaluating expression ' + '"' + this.expression + '": ' + e.toString(), this.vm);
    }
  }
  // "touch" every property so they are all tracked as
  // dependencies for deep watching
  if (this.deep) {
    traverse(value);
  }
  if (this.preProcess) {
    value = this.preProcess(value);
  }
  if (this.filters) {
    value = scope._applyFilters(value, null, this.filters, false);
  }
  if (this.postProcess) {
    value = this.postProcess(value);
  }
  this.afterGet();
  return value;
};

/**
 * Set the corresponding value with the setter.
 *
 * @param {*} value
 */

Watcher.prototype.set = function (value) {
  var scope = this.scope || this.vm;
  if (this.filters) {
    value = scope._applyFilters(value, this.value, this.filters, true);
  }
  try {
    this.setter.call(scope, scope, value);
  } catch (e) {
    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
      warn('Error when evaluating setter ' + '"' + this.expression + '": ' + e.toString(), this.vm);
    }
  }
  // two-way sync for v-for alias
  var forContext = scope.$forContext;
  if (forContext && forContext.alias === this.expression) {
    if (forContext.filters) {
      process.env.NODE_ENV !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.', this.vm);
      return;
    }
    forContext._withLock(function () {
      if (scope.$key) {
        // original is an object
        forContext.rawValue[scope.$key] = value;
      } else {
        forContext.rawValue.$set(scope.$index, value);
      }
    });
  }
};

/**
 * Prepare for dependency collection.
 */

Watcher.prototype.beforeGet = function () {
  Dep.target = this;
};

/**
 * Add a dependency to this directive.
 *
 * @param {Dep} dep
 */

Watcher.prototype.addDep = function (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */

Watcher.prototype.afterGet = function () {
  Dep.target = null;
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 *
 * @param {Boolean} shallow
 */

Watcher.prototype.update = function (shallow) {
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync || !config.async) {
    this.run();
  } else {
    // if queued, only overwrite shallow with non-shallow,
    // but not the other way around.
    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
    this.queued = true;
    // record before-push error stack in debug mode
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.debug) {
      this.prevError = new Error('[vue] async stack trace');
    }
    pushWatcher(this);
  }
};

/**
 * Batcher job interface.
 * Will be called by the batcher.
 */

Watcher.prototype.run = function () {
  if (this.active) {
    var value = this.get();
    if (value !== this.value ||
    // Deep watchers and watchers on Object/Arrays should fire even
    // when the value is the same, because the value may
    // have mutated; but only do so if this is a
    // non-shallow update (caused by a vm digest).
    (isObject(value) || this.deep) && !this.shallow) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      // in debug + async mode, when a watcher callbacks
      // throws, we also throw the saved before-push error
      // so the full cross-tick stack trace is available.
      var prevError = this.prevError;
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && config.debug && prevError) {
        this.prevError = null;
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          nextTick(function () {
            throw prevError;
          }, 0);
          throw e;
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
    this.queued = this.shallow = false;
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */

Watcher.prototype.evaluate = function () {
  // avoid overwriting another watcher that is being
  // collected.
  var current = Dep.target;
  this.value = this.get();
  this.dirty = false;
  Dep.target = current;
};

/**
 * Depend on all deps collected by this watcher.
 */

Watcher.prototype.depend = function () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subcriber list.
 */

Watcher.prototype.teardown = function () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed or is performing a v-for
    // re-render (the watcher list is then filtered by v-for).
    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
      this.vm._watchers.$remove(this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
    this.vm = this.cb = this.value = null;
  }
};

/**
 * Recrusively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 *
 * @param {*} val
 */

var seenObjects = new _Set();
function traverse(val, seen) {
  var i = undefined,
      keys = undefined;
  if (!seen) {
    seen = seenObjects;
    seen.clear();
  }
  var isA = isArray(val);
  var isO = isObject(val);
  if ((isA || isO) && Object.isExtensible(val)) {
    if (val.__ob__) {
      var depId = val.__ob__.dep.id;
      if (seen.has(depId)) {
        return;
      } else {
        seen.add(depId);
      }
    }
    if (isA) {
      i = val.length;
      while (i--) traverse(val[i], seen);
    } else if (isO) {
      keys = Object.keys(val);
      i = keys.length;
      while (i--) traverse(val[keys[i]], seen);
    }
  }
}

var text$1 = {

  bind: function bind() {
    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
  },

  update: function update(value) {
    this.el[this.attr] = _toString(value);
  }
};

var templateCache = new Cache(1000);
var idSelectorCache = new Cache(1000);

var map = {
  efault: [0, '', ''],
  legend: [1, '<fieldset>', '</fieldset>'],
  tr: [2, '<table><tbody>', '</tbody></table>'],
  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
};

map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];

map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];

map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];

/**
 * Check if a node is a supported template node with a
 * DocumentFragment content.
 *
 * @param {Node} node
 * @return {Boolean}
 */

function isRealTemplate(node) {
  return isTemplate(node) && isFragment(node.content);
}

var tagRE$1 = /<([\w:-]+)/;
var entityRE = /&#?\w+?;/;
var commentRE = /<!--/;

/**
 * Convert a string template to a DocumentFragment.
 * Determines correct wrapping by tag types. Wrapping
 * strategy found in jQuery & component/domify.
 *
 * @param {String} templateString
 * @param {Boolean} raw
 * @return {DocumentFragment}
 */

function stringToFragment(templateString, raw) {
  // try a cache hit first
  var cacheKey = raw ? templateString : templateString.trim();
  var hit = templateCache.get(cacheKey);
  if (hit) {
    return hit;
  }

  var frag = document.createDocumentFragment();
  var tagMatch = templateString.match(tagRE$1);
  var entityMatch = entityRE.test(templateString);
  var commentMatch = commentRE.test(templateString);

  if (!tagMatch && !entityMatch && !commentMatch) {
    // text only, return a single text node.
    frag.appendChild(document.createTextNode(templateString));
  } else {
    var tag = tagMatch && tagMatch[1];
    var wrap = map[tag] || map.efault;
    var depth = wrap[0];
    var prefix = wrap[1];
    var suffix = wrap[2];
    var node = document.createElement('div');

    node.innerHTML = prefix + templateString + suffix;
    while (depth--) {
      node = node.lastChild;
    }

    var child;
    /* eslint-disable no-cond-assign */
    while (child = node.firstChild) {
      /* eslint-enable no-cond-assign */
      frag.appendChild(child);
    }
  }
  if (!raw) {
    trimNode(frag);
  }
  templateCache.put(cacheKey, frag);
  return frag;
}

/**
 * Convert a template node to a DocumentFragment.
 *
 * @param {Node} node
 * @return {DocumentFragment}
 */

function nodeToFragment(node) {
  // if its a template tag and the browser supports it,
  // its content is already a document fragment. However, iOS Safari has
  // bug when using directly cloned template content with touch
  // events and can cause crashes when the nodes are removed from DOM, so we
  // have to treat template elements as string templates. (#2805)
  /* istanbul ignore if */
  if (isRealTemplate(node)) {
    return stringToFragment(node.innerHTML);
  }
  // script template
  if (node.tagName === 'SCRIPT') {
    return stringToFragment(node.textContent);
  }
  // normal node, clone it to avoid mutating the original
  var clonedNode = cloneNode(node);
  var frag = document.createDocumentFragment();
  var child;
  /* eslint-disable no-cond-assign */
  while (child = clonedNode.firstChild) {
    /* eslint-enable no-cond-assign */
    frag.appendChild(child);
  }
  trimNode(frag);
  return frag;
}

// Test for the presence of the Safari template cloning bug
// https://bugs.webkit.org/showug.cgi?id=137755
var hasBrokenTemplate = (function () {
  /* istanbul ignore else */
  if (inBrowser) {
    var a = document.createElement('div');
    a.innerHTML = '<template>1</template>';
    return !a.cloneNode(true).firstChild.innerHTML;
  } else {
    return false;
  }
})();

// Test for IE10/11 textarea placeholder clone bug
var hasTextareaCloneBug = (function () {
  /* istanbul ignore else */
  if (inBrowser) {
    var t = document.createElement('textarea');
    t.placeholder = 't';
    return t.cloneNode(true).value === 't';
  } else {
    return false;
  }
})();

/**
 * 1. Deal with Safari cloning nested <template> bug by
 *    manually cloning all template instances.
 * 2. Deal with IE10/11 textarea placeholder bug by setting
 *    the correct value after cloning.
 *
 * @param {Element|DocumentFragment} node
 * @return {Element|DocumentFragment}
 */

function cloneNode(node) {
  /* istanbul ignore if */
  if (!node.querySelectorAll) {
    return node.cloneNode();
  }
  var res = node.cloneNode(true);
  var i, original, cloned;
  /* istanbul ignore if */
  if (hasBrokenTemplate) {
    var tempClone = res;
    if (isRealTemplate(node)) {
      node = node.content;
      tempClone = res.content;
    }
    original = node.querySelectorAll('template');
    if (original.length) {
      cloned = tempClone.querySelectorAll('template');
      i = cloned.length;
      while (i--) {
        cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
      }
    }
  }
  /* istanbul ignore if */
  if (hasTextareaCloneBug) {
    if (node.tagName === 'TEXTAREA') {
      res.value = node.value;
    } else {
      original = node.querySelectorAll('textarea');
      if (original.length) {
        cloned = res.querySelectorAll('textarea');
        i = cloned.length;
        while (i--) {
          cloned[i].value = original[i].value;
        }
      }
    }
  }
  return res;
}

/**
 * Process the template option and normalizes it into a
 * a DocumentFragment that can be used as a partial or a
 * instance template.
 *
 * @param {*} template
 *        Possible values include:
 *        - DocumentFragment object
 *        - Node object of type Template
 *        - id selector: '#some-template-id'
 *        - template string: '<div><span>{{msg}}</span></div>'
 * @param {Boolean} shouldClone
 * @param {Boolean} raw
 *        inline HTML interpolation. Do not check for id
 *        selector and keep whitespace in the string.
 * @return {DocumentFragment|undefined}
 */

function parseTemplate(template, shouldClone, raw) {
  var node, frag;

  // if the template is already a document fragment,
  // do nothing
  if (isFragment(template)) {
    trimNode(template);
    return shouldClone ? cloneNode(template) : template;
  }

  if (typeof template === 'string') {
    // id selector
    if (!raw && template.charAt(0) === '#') {
      // id selector can be cached too
      frag = idSelectorCache.get(template);
      if (!frag) {
        node = document.getElementById(template.slice(1));
        if (node) {
          frag = nodeToFragment(node);
          // save selector to cache
          idSelectorCache.put(template, frag);
        }
      }
    } else {
      // normal string template
      frag = stringToFragment(template, raw);
    }
  } else if (template.nodeType) {
    // a direct node
    frag = nodeToFragment(template);
  }

  return frag && shouldClone ? cloneNode(frag) : frag;
}

var template = Object.freeze({
  cloneNode: cloneNode,
  parseTemplate: parseTemplate
});

var html = {

  bind: function bind() {
    // a comment node means this is a binding for
    // {{{ inline unescaped html }}}
    if (this.el.nodeType === 8) {
      // hold nodes
      this.nodes = [];
      // replace the placeholder with proper anchor
      this.anchor = createAnchor('v-html');
      replace(this.el, this.anchor);
    }
  },

  update: function update(value) {
    value = _toString(value);
    if (this.nodes) {
      this.swap(value);
    } else {
      this.el.innerHTML = value;
    }
  },

  swap: function swap(value) {
    // remove old nodes
    var i = this.nodes.length;
    while (i--) {
      remove(this.nodes[i]);
    }
    // convert new value to a fragment
    // do not attempt to retrieve from id selector
    var frag = parseTemplate(value, true, true);
    // save a reference to these nodes so we can remove later
    this.nodes = toArray(frag.childNodes);
    before(frag, this.anchor);
  }
};

/**
 * Abstraction for a partially-compiled fragment.
 * Can optionally compile content with a child scope.
 *
 * @param {Function} linker
 * @param {Vue} vm
 * @param {DocumentFragment} frag
 * @param {Vue} [host]
 * @param {Object} [scope]
 * @param {Fragment} [parentFrag]
 */
function Fragment(linker, vm, frag, host, scope, parentFrag) {
  this.children = [];
  this.childFrags = [];
  this.vm = vm;
  this.scope = scope;
  this.inserted = false;
  this.parentFrag = parentFrag;
  if (parentFrag) {
    parentFrag.childFrags.push(this);
  }
  this.unlink = linker(vm, frag, host, scope, this);
  var single = this.single = frag.childNodes.length === 1 &&
  // do not go single mode if the only node is an anchor
  !frag.childNodes[0].__v_anchor;
  if (single) {
    this.node = frag.childNodes[0];
    this.before = singleBefore;
    this.remove = singleRemove;
  } else {
    this.node = createAnchor('fragment-start');
    this.end = createAnchor('fragment-end');
    this.frag = frag;
    prepend(this.node, frag);
    frag.appendChild(this.end);
    this.before = multiBefore;
    this.remove = multiRemove;
  }
  this.node.__v_frag = this;
}

/**
 * Call attach/detach for all components contained within
 * this fragment. Also do so recursively for all child
 * fragments.
 *
 * @param {Function} hook
 */

Fragment.prototype.callHook = function (hook) {
  var i, l;
  for (i = 0, l = this.childFrags.length; i < l; i++) {
    this.childFrags[i].callHook(hook);
  }
  for (i = 0, l = this.children.length; i < l; i++) {
    hook(this.children[i]);
  }
};

/**
 * Insert fragment before target, single node version
 *
 * @param {Node} target
 * @param {Boolean} withTransition
 */

function singleBefore(target, withTransition) {
  this.inserted = true;
  var method = withTransition !== false ? beforeWithTransition : before;
  method(this.node, target, this.vm);
  if (inDoc(this.node)) {
    this.callHook(attach);
  }
}

/**
 * Remove fragment, single node version
 */

function singleRemove() {
  this.inserted = false;
  var shouldCallRemove = inDoc(this.node);
  var self = this;
  this.beforeRemove();
  removeWithTransition(this.node, this.vm, function () {
    if (shouldCallRemove) {
      self.callHook(detach);
    }
    self.destroy();
  });
}

/**
 * Insert fragment before target, multi-nodes version
 *
 * @param {Node} target
 * @param {Boolean} withTransition
 */

function multiBefore(target, withTransition) {
  this.inserted = true;
  var vm = this.vm;
  var method = withTransition !== false ? beforeWithTransition : before;
  mapNodeRange(this.node, this.end, function (node) {
    method(node, target, vm);
  });
  if (inDoc(this.node)) {
    this.callHook(attach);
  }
}

/**
 * Remove fragment, multi-nodes version
 */

function multiRemove() {
  this.inserted = false;
  var self = this;
  var shouldCallRemove = inDoc(this.node);
  this.beforeRemove();
  removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
    if (shouldCallRemove) {
      self.callHook(detach);
    }
    self.destroy();
  });
}

/**
 * Prepare the fragment for removal.
 */

Fragment.prototype.beforeRemove = function () {
  var i, l;
  for (i = 0, l = this.childFrags.length; i < l; i++) {
    // call the same method recursively on child
    // fragments, depth-first
    this.childFrags[i].beforeRemove(false);
  }
  for (i = 0, l = this.children.length; i < l; i++) {
    // Call destroy for all contained instances,
    // with remove:false and defer:true.
    // Defer is necessary because we need to
    // keep the children to call detach hooks
    // on them.
    this.children[i].$destroy(false, true);
  }
  var dirs = this.unlink.dirs;
  for (i = 0, l = dirs.length; i < l; i++) {
    // disable the watchers on all the directives
    // so that the rendered content stays the same
    // during removal.
    dirs[i]._watcher && dirs[i]._watcher.teardown();
  }
};

/**
 * Destroy the fragment.
 */

Fragment.prototype.destroy = function () {
  if (this.parentFrag) {
    this.parentFrag.childFrags.$remove(this);
  }
  this.node.__v_frag = null;
  this.unlink();
};

/**
 * Call attach hook for a Vue instance.
 *
 * @param {Vue} child
 */

function attach(child) {
  if (!child._isAttached && inDoc(child.$el)) {
    child._callHook('attached');
  }
}

/**
 * Call detach hook for a Vue instance.
 *
 * @param {Vue} child
 */

function detach(child) {
  if (child._isAttached && !inDoc(child.$el)) {
    child._callHook('detached');
  }
}

var linkerCache = new Cache(5000);

/**
 * A factory that can be used to create instances of a
 * fragment. Caches the compiled linker if possible.
 *
 * @param {Vue} vm
 * @param {Element|String} el
 */
function FragmentFactory(vm, el) {
  this.vm = vm;
  var template;
  var isString = typeof el === 'string';
  if (isString || isTemplate(el) && !el.hasAttribute('v-if')) {
    template = parseTemplate(el, true);
  } else {
    template = document.createDocumentFragment();
    template.appendChild(el);
  }
  this.template = template;
  // linker can be cached, but only for components
  var linker;
  var cid = vm.constructor.cid;
  if (cid > 0) {
    var cacheId = cid + (isString ? el : getOuterHTML(el));
    linker = linkerCache.get(cacheId);
    if (!linker) {
      linker = compile(template, vm.$options, true);
      linkerCache.put(cacheId, linker);
    }
  } else {
    linker = compile(template, vm.$options, true);
  }
  this.linker = linker;
}

/**
 * Create a fragment instance with given host and scope.
 *
 * @param {Vue} host
 * @param {Object} scope
 * @param {Fragment} parentFrag
 */

FragmentFactory.prototype.create = function (host, scope, parentFrag) {
  var frag = cloneNode(this.template);
  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
};

var ON = 700;
var MODEL = 800;
var BIND = 850;
var TRANSITION = 1100;
var EL = 1500;
var COMPONENT = 1500;
var PARTIAL = 1750;
var IF = 2100;
var FOR = 2200;
var SLOT = 2300;

var uid$3 = 0;

var vFor = {

  priority: FOR,
  terminal: true,

  params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],

  bind: function bind() {
    // support "item in/of items" syntax
    var inMatch = this.expression.match(/(.*) (?:in|of) (.*)/);
    if (inMatch) {
      var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
      if (itMatch) {
        this.iterator = itMatch[1].trim();
        this.alias = itMatch[2].trim();
      } else {
        this.alias = inMatch[1].trim();
      }
      this.expression = inMatch[2];
    }

    if (!this.alias) {
      process.env.NODE_ENV !== 'production' && warn('Invalid v-for expression "' + this.descriptor.raw + '": ' + 'alias is required.', this.vm);
      return;
    }

    // uid as a cache identifier
    this.id = '__v-for__' + ++uid$3;

    // check if this is an option list,
    // so that we know if we need to update the <select>'s
    // v-model when the option list has changed.
    // because v-model has a lower priority than v-for,
    // the v-model is not bound here yet, so we have to
    // retrive it in the actual updateModel() function.
    var tag = this.el.tagName;
    this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';

    // setup anchor nodes
    this.start = createAnchor('v-for-start');
    this.end = createAnchor('v-for-end');
    replace(this.el, this.end);
    before(this.start, this.end);

    // cache
    this.cache = Object.create(null);

    // fragment factory
    this.factory = new FragmentFactory(this.vm, this.el);
  },

  update: function update(data) {
    this.diff(data);
    this.updateRef();
    this.updateModel();
  },

  /**
   * Diff, based on new data and old data, determine the
   * minimum amount of DOM manipulations needed to make the
   * DOM reflect the new data Array.
   *
   * The algorithm diffs the new data Array by storing a
   * hidden reference to an owner vm instance on previously
   * seen data. This allows us to achieve O(n) which is
   * better than a levenshtein distance based algorithm,
   * which is O(m * n).
   *
   * @param {Array} data
   */

  diff: function diff(data) {
    // check if the Array was converted from an Object
    var item = data[0];
    var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');

    var trackByKey = this.params.trackBy;
    var oldFrags = this.frags;
    var frags = this.frags = new Array(data.length);
    var alias = this.alias;
    var iterator = this.iterator;
    var start = this.start;
    var end = this.end;
    var inDocument = inDoc(start);
    var init = !oldFrags;
    var i, l, frag, key, value, primitive;

    // First pass, go through the new Array and fill up
    // the new frags array. If a piece of data has a cached
    // instance for it, we reuse it. Otherwise build a new
    // instance.
    for (i = 0, l = data.length; i < l; i++) {
      item = data[i];
      key = convertedFromObject ? item.$key : null;
      value = convertedFromObject ? item.$value : item;
      primitive = !isObject(value);
      frag = !init && this.getCachedFrag(value, i, key);
      if (frag) {
        // reusable fragment
        frag.reused = true;
        // update $index
        frag.scope.$index = i;
        // update $key
        if (key) {
          frag.scope.$key = key;
        }
        // update iterator
        if (iterator) {
          frag.scope[iterator] = key !== null ? key : i;
        }
        // update data for track-by, object repeat &
        // primitive values.
        if (trackByKey || convertedFromObject || primitive) {
          withoutConversion(function () {
            frag.scope[alias] = value;
          });
        }
      } else {
        // new isntance
        frag = this.create(value, alias, i, key);
        frag.fresh = !init;
      }
      frags[i] = frag;
      if (init) {
        frag.before(end);
      }
    }

    // we're done for the initial render.
    if (init) {
      return;
    }

    // Second pass, go through the old fragments and
    // destroy those who are not reused (and remove them
    // from cache)
    var removalIndex = 0;
    var totalRemoved = oldFrags.length - frags.length;
    // when removing a large number of fragments, watcher removal
    // turns out to be a perf bottleneck, so we batch the watcher
    // removals into a single filter call!
    this.vm._vForRemoving = true;
    for (i = 0, l = oldFrags.length; i < l; i++) {
      frag = oldFrags[i];
      if (!frag.reused) {
        this.deleteCachedFrag(frag);
        this.remove(frag, removalIndex++, totalRemoved, inDocument);
      }
    }
    this.vm._vForRemoving = false;
    if (removalIndex) {
      this.vm._watchers = this.vm._watchers.filter(function (w) {
        return w.active;
      });
    }

    // Final pass, move/insert new fragments into the
    // right place.
    var targetPrev, prevEl, currentPrev;
    var insertionIndex = 0;
    for (i = 0, l = frags.length; i < l; i++) {
      frag = frags[i];
      // this is the frag that we should be after
      targetPrev = frags[i - 1];
      prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
      if (frag.reused && !frag.staggerCb) {
        currentPrev = findPrevFrag(frag, start, this.id);
        if (currentPrev !== targetPrev && (!currentPrev ||
        // optimization for moving a single item.
        // thanks to suggestions by @livoras in #1807
        findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
          this.move(frag, prevEl);
        }
      } else {
        // new instance, or still in stagger.
        // insert with updated stagger index.
        this.insert(frag, insertionIndex++, prevEl, inDocument);
      }
      frag.reused = frag.fresh = false;
    }
  },

  /**
   * Create a new fragment instance.
   *
   * @param {*} value
   * @param {String} alias
   * @param {Number} index
   * @param {String} [key]
   * @return {Fragment}
   */

  create: function create(value, alias, index, key) {
    var host = this._host;
    // create iteration scope
    var parentScope = this._scope || this.vm;
    var scope = Object.create(parentScope);
    // ref holder for the scope
    scope.$refs = Object.create(parentScope.$refs);
    scope.$els = Object.create(parentScope.$els);
    // make sure point $parent to parent scope
    scope.$parent = parentScope;
    // for two-way binding on alias
    scope.$forContext = this;
    // define scope properties
    // important: define the scope alias without forced conversion
    // so that frozen data structures remain non-reactive.
    withoutConversion(function () {
      defineReactive(scope, alias, value);
    });
    defineReactive(scope, '$index', index);
    if (key) {
      defineReactive(scope, '$key', key);
    } else if (scope.$key) {
      // avoid accidental fallback
      def(scope, '$key', null);
    }
    if (this.iterator) {
      defineReactive(scope, this.iterator, key !== null ? key : index);
    }
    var frag = this.factory.create(host, scope, this._frag);
    frag.forId = this.id;
    this.cacheFrag(value, frag, index, key);
    return frag;
  },

  /**
   * Update the v-ref on owner vm.
   */

  updateRef: function updateRef() {
    var ref = this.descriptor.ref;
    if (!ref) return;
    var hash = (this._scope || this.vm).$refs;
    var refs;
    if (!this.fromObject) {
      refs = this.frags.map(findVmFromFrag);
    } else {
      refs = {};
      this.frags.forEach(function (frag) {
        refs[frag.scope.$key] = findVmFromFrag(frag);
      });
    }
    hash[ref] = refs;
  },

  /**
   * For option lists, update the containing v-model on
   * parent <select>.
   */

  updateModel: function updateModel() {
    if (this.isOption) {
      var parent = this.start.parentNode;
      var model = parent && parent.__v_model;
      if (model) {
        model.forceUpdate();
      }
    }
  },

  /**
   * Insert a fragment. Handles staggering.
   *
   * @param {Fragment} frag
   * @param {Number} index
   * @param {Node} prevEl
   * @param {Boolean} inDocument
   */

  insert: function insert(frag, index, prevEl, inDocument) {
    if (frag.staggerCb) {
      frag.staggerCb.cancel();
      frag.staggerCb = null;
    }
    var staggerAmount = this.getStagger(frag, index, null, 'enter');
    if (inDocument && staggerAmount) {
      // create an anchor and insert it synchronously,
      // so that we can resolve the correct order without
      // worrying about some elements not inserted yet
      var anchor = frag.staggerAnchor;
      if (!anchor) {
        anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
        anchor.__v_frag = frag;
      }
      after(anchor, prevEl);
      var op = frag.staggerCb = cancellable(function () {
        frag.staggerCb = null;
        frag.before(anchor);
        remove(anchor);
      });
      setTimeout(op, staggerAmount);
    } else {
      var target = prevEl.nextSibling;
      /* istanbul ignore if */
      if (!target) {
        // reset end anchor position in case the position was messed up
        // by an external drag-n-drop library.
        after(this.end, prevEl);
        target = this.end;
      }
      frag.before(target);
    }
  },

  /**
   * Remove a fragment. Handles staggering.
   *
   * @param {Fragment} frag
   * @param {Number} index
   * @param {Number} total
   * @param {Boolean} inDocument
   */

  remove: function remove(frag, index, total, inDocument) {
    if (frag.staggerCb) {
      frag.staggerCb.cancel();
      frag.staggerCb = null;
      // it's not possible for the same frag to be removed
      // twice, so if we have a pending stagger callback,
      // it means this frag is queued for enter but removed
      // before its transition started. Since it is already
      // destroyed, we can just leave it in detached state.
      return;
    }
    var staggerAmount = this.getStagger(frag, index, total, 'leave');
    if (inDocument && staggerAmount) {
      var op = frag.staggerCb = cancellable(function () {
        frag.staggerCb = null;
        frag.remove();
      });
      setTimeout(op, staggerAmount);
    } else {
      frag.remove();
    }
  },

  /**
   * Move a fragment to a new position.
   * Force no transition.
   *
   * @param {Fragment} frag
   * @param {Node} prevEl
   */

  move: function move(frag, prevEl) {
    // fix a common issue with Sortable:
    // if prevEl doesn't have nextSibling, this means it's
    // been dragged after the end anchor. Just re-position
    // the end anchor to the end of the container.
    /* istanbul ignore if */
    if (!prevEl.nextSibling) {
      this.end.parentNode.appendChild(this.end);
    }
    frag.before(prevEl.nextSibling, false);
  },

  /**
   * Cache a fragment using track-by or the object key.
   *
   * @param {*} value
   * @param {Fragment} frag
   * @param {Number} index
   * @param {String} [key]
   */

  cacheFrag: function cacheFrag(value, frag, index, key) {
    var trackByKey = this.params.trackBy;
    var cache = this.cache;
    var primitive = !isObject(value);
    var id;
    if (key || trackByKey || primitive) {
      id = getTrackByKey(index, key, value, trackByKey);
      if (!cache[id]) {
        cache[id] = frag;
      } else if (trackByKey !== '$index') {
        process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
      }
    } else {
      id = this.id;
      if (hasOwn(value, id)) {
        if (value[id] === null) {
          value[id] = frag;
        } else {
          process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
        }
      } else if (Object.isExtensible(value)) {
        def(value, id, frag);
      } else if (process.env.NODE_ENV !== 'production') {
        warn('Frozen v-for objects cannot be automatically tracked, make sure to ' + 'provide a track-by key.');
      }
    }
    frag.raw = value;
  },

  /**
   * Get a cached fragment from the value/index/key
   *
   * @param {*} value
   * @param {Number} index
   * @param {String} key
   * @return {Fragment}
   */

  getCachedFrag: function getCachedFrag(value, index, key) {
    var trackByKey = this.params.trackBy;
    var primitive = !isObject(value);
    var frag;
    if (key || trackByKey || primitive) {
      var id = getTrackByKey(index, key, value, trackByKey);
      frag = this.cache[id];
    } else {
      frag = value[this.id];
    }
    if (frag && (frag.reused || frag.fresh)) {
      process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
    }
    return frag;
  },

  /**
   * Delete a fragment from cache.
   *
   * @param {Fragment} frag
   */

  deleteCachedFrag: function deleteCachedFrag(frag) {
    var value = frag.raw;
    var trackByKey = this.params.trackBy;
    var scope = frag.scope;
    var index = scope.$index;
    // fix #948: avoid accidentally fall through to
    // a parent repeater which happens to have $key.
    var key = hasOwn(scope, '$key') && scope.$key;
    var primitive = !isObject(value);
    if (trackByKey || key || primitive) {
      var id = getTrackByKey(index, key, value, trackByKey);
      this.cache[id] = null;
    } else {
      value[this.id] = null;
      frag.raw = null;
    }
  },

  /**
   * Get the stagger amount for an insertion/removal.
   *
   * @param {Fragment} frag
   * @param {Number} index
   * @param {Number} total
   * @param {String} type
   */

  getStagger: function getStagger(frag, index, total, type) {
    type = type + 'Stagger';
    var trans = frag.node.__v_trans;
    var hooks = trans && trans.hooks;
    var hook = hooks && (hooks[type] || hooks.stagger);
    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
  },

  /**
   * Pre-process the value before piping it through the
   * filters. This is passed to and called by the watcher.
   */

  _preProcess: function _preProcess(value) {
    // regardless of type, store the un-filtered raw value.
    this.rawValue = value;
    return value;
  },

  /**
   * Post-process the value after it has been piped through
   * the filters. This is passed to and called by the watcher.
   *
   * It is necessary for this to be called during the
   * watcher's dependency collection phase because we want
   * the v-for to update when the source Object is mutated.
   */

  _postProcess: function _postProcess(value) {
    if (isArray(value)) {
      return value;
    } else if (isPlainObject(value)) {
      // convert plain object to array.
      var keys = Object.keys(value);
      var i = keys.length;
      var res = new Array(i);
      var key;
      while (i--) {
        key = keys[i];
        res[i] = {
          $key: key,
          $value: value[key]
        };
      }
      return res;
    } else {
      if (typeof value === 'number' && !isNaN(value)) {
        value = range(value);
      }
      return value || [];
    }
  },

  unbind: function unbind() {
    if (this.descriptor.ref) {
      (this._scope || this.vm).$refs[this.descriptor.ref] = null;
    }
    if (this.frags) {
      var i = this.frags.length;
      var frag;
      while (i--) {
        frag = this.frags[i];
        this.deleteCachedFrag(frag);
        frag.destroy();
      }
    }
  }
};

/**
 * Helper to find the previous element that is a fragment
 * anchor. This is necessary because a destroyed frag's
 * element could still be lingering in the DOM before its
 * leaving transition finishes, but its inserted flag
 * should have been set to false so we can skip them.
 *
 * If this is a block repeat, we want to make sure we only
 * return frag that is bound to this v-for. (see #929)
 *
 * @param {Fragment} frag
 * @param {Comment|Text} anchor
 * @param {String} id
 * @return {Fragment}
 */

function findPrevFrag(frag, anchor, id) {
  var el = frag.node.previousSibling;
  /* istanbul ignore if */
  if (!el) return;
  frag = el.__v_frag;
  while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
    el = el.previousSibling;
    /* istanbul ignore if */
    if (!el) return;
    frag = el.__v_frag;
  }
  return frag;
}

/**
 * Find a vm from a fragment.
 *
 * @param {Fragment} frag
 * @return {Vue|undefined}
 */

function findVmFromFrag(frag) {
  var node = frag.node;
  // handle multi-node frag
  if (frag.end) {
    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
      node = node.nextSibling;
    }
  }
  return node.__vue__;
}

/**
 * Create a range array from given number.
 *
 * @param {Number} n
 * @return {Array}
 */

function range(n) {
  var i = -1;
  var ret = new Array(Math.floor(n));
  while (++i < n) {
    ret[i] = i;
  }
  return ret;
}

/**
 * Get the track by key for an item.
 *
 * @param {Number} index
 * @param {String} key
 * @param {*} value
 * @param {String} [trackByKey]
 */

function getTrackByKey(index, key, value, trackByKey) {
  return trackByKey ? trackByKey === '$index' ? index : trackByKey.charAt(0).match(/\w/) ? getPath(value, trackByKey) : value[trackByKey] : key || value;
}

if (process.env.NODE_ENV !== 'production') {
  vFor.warnDuplicate = function (value) {
    warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.', this.vm);
  };
}

var vIf = {

  priority: IF,
  terminal: true,

  bind: function bind() {
    var el = this.el;
    if (!el.__vue__) {
      // check else block
      var next = el.nextElementSibling;
      if (next && getAttr(next, 'v-else') !== null) {
        remove(next);
        this.elseEl = next;
      }
      // check main block
      this.anchor = createAnchor('v-if');
      replace(el, this.anchor);
    } else {
      process.env.NODE_ENV !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.', this.vm);
      this.invalid = true;
    }
  },

  update: function update(value) {
    if (this.invalid) return;
    if (value) {
      if (!this.frag) {
        this.insert();
      }
    } else {
      this.remove();
    }
  },

  insert: function insert() {
    if (this.elseFrag) {
      this.elseFrag.remove();
      this.elseFrag = null;
    }
    // lazy init factory
    if (!this.factory) {
      this.factory = new FragmentFactory(this.vm, this.el);
    }
    this.frag = this.factory.create(this._host, this._scope, this._frag);
    this.frag.before(this.anchor);
  },

  remove: function remove() {
    if (this.frag) {
      this.frag.remove();
      this.frag = null;
    }
    if (this.elseEl && !this.elseFrag) {
      if (!this.elseFactory) {
        this.elseFactory = new FragmentFactory(this.elseEl._context || this.vm, this.elseEl);
      }
      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
      this.elseFrag.before(this.anchor);
    }
  },

  unbind: function unbind() {
    if (this.frag) {
      this.frag.destroy();
    }
    if (this.elseFrag) {
      this.elseFrag.destroy();
    }
  }
};

var show = {

  bind: function bind() {
    // check else block
    var next = this.el.nextElementSibling;
    if (next && getAttr(next, 'v-else') !== null) {
      this.elseEl = next;
    }
  },

  update: function update(value) {
    this.apply(this.el, value);
    if (this.elseEl) {
      this.apply(this.elseEl, !value);
    }
  },

  apply: function apply(el, value) {
    if (inDoc(el)) {
      applyTransition(el, value ? 1 : -1, toggle, this.vm);
    } else {
      toggle();
    }
    function toggle() {
      el.style.display = value ? '' : 'none';
    }
  }
};

var text$2 = {

  bind: function bind() {
    var self = this;
    var el = this.el;
    var isRange = el.type === 'range';
    var lazy = this.params.lazy;
    var number = this.params.number;
    var debounce = this.params.debounce;

    // handle composition events.
    //   http://blog.evanyou.me/2014/01/03/composition-event/
    // skip this for Android because it handles composition
    // events quite differently. Android doesn't trigger
    // composition events for language input methods e.g.
    // Chinese, but instead triggers them for spelling
    // suggestions... (see Discussion/#162)
    var composing = false;
    if (!isAndroid && !isRange) {
      this.on('compositionstart', function () {
        composing = true;
      });
      this.on('compositionend', function () {
        composing = false;
        // in IE11 the "compositionend" event fires AFTER
        // the "input" event, so the input handler is blocked
        // at the end... have to call it here.
        //
        // #1327: in lazy mode this is unecessary.
        if (!lazy) {
          self.listener();
        }
      });
    }

    // prevent messing with the input when user is typing,
    // and force update on blur.
    this.focused = false;
    if (!isRange && !lazy) {
      this.on('focus', function () {
        self.focused = true;
      });
      this.on('blur', function () {
        self.focused = false;
        // do not sync value after fragment removal (#2017)
        if (!self._frag || self._frag.inserted) {
          self.rawListener();
        }
      });
    }

    // Now attach the main listener
    this.listener = this.rawListener = function () {
      if (composing || !self._bound) {
        return;
      }
      var val = number || isRange ? toNumber(el.value) : el.value;
      self.set(val);
      // force update on next tick to avoid lock & same value
      // also only update when user is not typing
      nextTick(function () {
        if (self._bound && !self.focused) {
          self.update(self._watcher.value);
        }
      });
    };

    // apply debounce
    if (debounce) {
      this.listener = _debounce(this.listener, debounce);
    }

    // Support jQuery events, since jQuery.trigger() doesn't
    // trigger native events in some cases and some plugins
    // rely on $.trigger()
    //
    // We want to make sure if a listener is attached using
    // jQuery, it is also removed with jQuery, that's why
    // we do the check for each directive instance and
    // store that check result on itself. This also allows
    // easier test coverage control by unsetting the global
    // jQuery variable in tests.
    this.hasjQuery = typeof jQuery === 'function';
    if (this.hasjQuery) {
      var method = jQuery.fn.on ? 'on' : 'bind';
      jQuery(el)[method]('change', this.rawListener);
      if (!lazy) {
        jQuery(el)[method]('input', this.listener);
      }
    } else {
      this.on('change', this.rawListener);
      if (!lazy) {
        this.on('input', this.listener);
      }
    }

    // IE9 doesn't fire input event on backspace/del/cut
    if (!lazy && isIE9) {
      this.on('cut', function () {
        nextTick(self.listener);
      });
      this.on('keyup', function (e) {
        if (e.keyCode === 46 || e.keyCode === 8) {
          self.listener();
        }
      });
    }

    // set initial value if present
    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
      this.afterBind = this.listener;
    }
  },

  update: function update(value) {
    // #3029 only update when the value changes. This prevent
    // browsers from overwriting values like selectionStart
    value = _toString(value);
    if (value !== this.el.value) this.el.value = value;
  },

  unbind: function unbind() {
    var el = this.el;
    if (this.hasjQuery) {
      var method = jQuery.fn.off ? 'off' : 'unbind';
      jQuery(el)[method]('change', this.listener);
      jQuery(el)[method]('input', this.listener);
    }
  }
};

var radio = {

  bind: function bind() {
    var self = this;
    var el = this.el;

    this.getValue = function () {
      // value overwrite via v-bind:value
      if (el.hasOwnProperty('_value')) {
        return el._value;
      }
      var val = el.value;
      if (self.params.number) {
        val = toNumber(val);
      }
      return val;
    };

    this.listener = function () {
      self.set(self.getValue());
    };
    this.on('change', this.listener);

    if (el.hasAttribute('checked')) {
      this.afterBind = this.listener;
    }
  },

  update: function update(value) {
    this.el.checked = looseEqual(value, this.getValue());
  }
};

var select = {

  bind: function bind() {
    var _this = this;

    var self = this;
    var el = this.el;

    // method to force update DOM using latest value.
    this.forceUpdate = function () {
      if (self._watcher) {
        self.update(self._watcher.get());
      }
    };

    // check if this is a multiple select
    var multiple = this.multiple = el.hasAttribute('multiple');

    // attach listener
    this.listener = function () {
      var value = getValue(el, multiple);
      value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
      self.set(value);
    };
    this.on('change', this.listener);

    // if has initial value, set afterBind
    var initValue = getValue(el, multiple, true);
    if (multiple && initValue.length || !multiple && initValue !== null) {
      this.afterBind = this.listener;
    }

    // All major browsers except Firefox resets
    // selectedIndex with value -1 to 0 when the element
    // is appended to a new parent, therefore we have to
    // force a DOM update whenever that happens...
    this.vm.$on('hook:attached', function () {
      nextTick(_this.forceUpdate);
    });
    if (!inDoc(el)) {
      nextTick(this.forceUpdate);
    }
  },

  update: function update(value) {
    var el = this.el;
    el.selectedIndex = -1;
    var multi = this.multiple && isArray(value);
    var options = el.options;
    var i = options.length;
    var op, val;
    while (i--) {
      op = options[i];
      val = op.hasOwnProperty('_value') ? op._value : op.value;
      /* eslint-disable eqeqeq */
      op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
      /* eslint-enable eqeqeq */
    }
  },

  unbind: function unbind() {
    /* istanbul ignore next */
    this.vm.$off('hook:attached', this.forceUpdate);
  }
};

/**
 * Get select value
 *
 * @param {SelectElement} el
 * @param {Boolean} multi
 * @param {Boolean} init
 * @return {Array|*}
 */

function getValue(el, multi, init) {
  var res = multi ? [] : null;
  var op, val, selected;
  for (var i = 0, l = el.options.length; i < l; i++) {
    op = el.options[i];
    selected = init ? op.hasAttribute('selected') : op.selected;
    if (selected) {
      val = op.hasOwnProperty('_value') ? op._value : op.value;
      if (multi) {
        res.push(val);
      } else {
        return val;
      }
    }
  }
  return res;
}

/**
 * Native Array.indexOf uses strict equal, but in this
 * case we need to match string/numbers with custom equal.
 *
 * @param {Array} arr
 * @param {*} val
 */

function indexOf$1(arr, val) {
  var i = arr.length;
  while (i--) {
    if (looseEqual(arr[i], val)) {
      return i;
    }
  }
  return -1;
}

var checkbox = {

  bind: function bind() {
    var self = this;
    var el = this.el;

    this.getValue = function () {
      return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
    };

    function getBooleanValue() {
      var val = el.checked;
      if (val && el.hasOwnProperty('_trueValue')) {
        return el._trueValue;
      }
      if (!val && el.hasOwnProperty('_falseValue')) {
        return el._falseValue;
      }
      return val;
    }

    this.listener = function () {
      var model = self._watcher.value;
      if (isArray(model)) {
        var val = self.getValue();
        if (el.checked) {
          if (indexOf(model, val) < 0) {
            model.push(val);
          }
        } else {
          model.$remove(val);
        }
      } else {
        self.set(getBooleanValue());
      }
    };

    this.on('change', this.listener);
    if (el.hasAttribute('checked')) {
      this.afterBind = this.listener;
    }
  },

  update: function update(value) {
    var el = this.el;
    if (isArray(value)) {
      el.checked = indexOf(value, this.getValue()) > -1;
    } else {
      if (el.hasOwnProperty('_trueValue')) {
        el.checked = looseEqual(value, el._trueValue);
      } else {
        el.checked = !!value;
      }
    }
  }
};

var handlers = {
  text: text$2,
  radio: radio,
  select: select,
  checkbox: checkbox
};

var model = {

  priority: MODEL,
  twoWay: true,
  handlers: handlers,
  params: ['lazy', 'number', 'debounce'],

  /**
   * Possible elements:
   *   <select>
   *   <textarea>
   *   <input type="*">
   *     - text
   *     - checkbox
   *     - radio
   *     - number
   */

  bind: function bind() {
    // friendly warning...
    this.checkFilters();
    if (this.hasRead && !this.hasWrite) {
      process.env.NODE_ENV !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model="' + this.descriptor.raw + '". ' + 'You might want to use a two-way filter to ensure correct behavior.', this.vm);
    }
    var el = this.el;
    var tag = el.tagName;
    var handler;
    if (tag === 'INPUT') {
      handler = handlers[el.type] || handlers.text;
    } else if (tag === 'SELECT') {
      handler = handlers.select;
    } else if (tag === 'TEXTAREA') {
      handler = handlers.text;
    } else {
      process.env.NODE_ENV !== 'production' && warn('v-model does not support element type: ' + tag, this.vm);
      return;
    }
    el.__v_model = this;
    handler.bind.call(this);
    this.update = handler.update;
    this._unbind = handler.unbind;
  },

  /**
   * Check read/write filter stats.
   */

  checkFilters: function checkFilters() {
    var filters = this.filters;
    if (!filters) return;
    var i = filters.length;
    while (i--) {
      var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
      if (typeof filter === 'function' || filter.read) {
        this.hasRead = true;
      }
      if (filter.write) {
        this.hasWrite = true;
      }
    }
  },

  unbind: function unbind() {
    this.el.__v_model = null;
    this._unbind && this._unbind();
  }
};

// keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  'delete': [8, 46],
  up: 38,
  left: 37,
  right: 39,
  down: 40
};

function keyFilter(handler, keys) {
  var codes = keys.map(function (key) {
    var charCode = key.charCodeAt(0);
    if (charCode > 47 && charCode < 58) {
      return parseInt(key, 10);
    }
    if (key.length === 1) {
      charCode = key.toUpperCase().charCodeAt(0);
      if (charCode > 64 && charCode < 91) {
        return charCode;
      }
    }
    return keyCodes[key];
  });
  codes = [].concat.apply([], codes);
  return function keyHandler(e) {
    if (codes.indexOf(e.keyCode) > -1) {
      return handler.call(this, e);
    }
  };
}

function stopFilter(handler) {
  return function stopHandler(e) {
    e.stopPropagation();
    return handler.call(this, e);
  };
}

function preventFilter(handler) {
  return function preventHandler(e) {
    e.preventDefault();
    return handler.call(this, e);
  };
}

function selfFilter(handler) {
  return function selfHandler(e) {
    if (e.target === e.currentTarget) {
      return handler.call(this, e);
    }
  };
}

var on$1 = {

  priority: ON,
  acceptStatement: true,
  keyCodes: keyCodes,

  bind: function bind() {
    // deal with iframes
    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
      var self = this;
      this.iframeBind = function () {
        on(self.el.contentWindow, self.arg, self.handler, self.modifiers.capture);
      };
      this.on('load', this.iframeBind);
    }
  },

  update: function update(handler) {
    // stub a noop for v-on with no value,
    // e.g. @mousedown.prevent
    if (!this.descriptor.raw) {
      handler = function () {};
    }

    if (typeof handler !== 'function') {
      process.env.NODE_ENV !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler, this.vm);
      return;
    }

    // apply modifiers
    if (this.modifiers.stop) {
      handler = stopFilter(handler);
    }
    if (this.modifiers.prevent) {
      handler = preventFilter(handler);
    }
    if (this.modifiers.self) {
      handler = selfFilter(handler);
    }
    // key filter
    var keys = Object.keys(this.modifiers).filter(function (key) {
      return key !== 'stop' && key !== 'prevent' && key !== 'self' && key !== 'capture';
    });
    if (keys.length) {
      handler = keyFilter(handler, keys);
    }

    this.reset();
    this.handler = handler;

    if (this.iframeBind) {
      this.iframeBind();
    } else {
      on(this.el, this.arg, this.handler, this.modifiers.capture);
    }
  },

  reset: function reset() {
    var el = this.iframeBind ? this.el.contentWindow : this.el;
    if (this.handler) {
      off(el, this.arg, this.handler);
    }
  },

  unbind: function unbind() {
    this.reset();
  }
};

var prefixes = ['-webkit-', '-moz-', '-ms-'];
var camelPrefixes = ['Webkit', 'Moz', 'ms'];
var importantRE = /!important;?$/;
var propCache = Object.create(null);

var testEl = null;

var style = {

  deep: true,

  update: function update(value) {
    if (typeof value === 'string') {
      this.el.style.cssText = value;
    } else if (isArray(value)) {
      this.handleObject(value.reduce(extend, {}));
    } else {
      this.handleObject(value || {});
    }
  },

  handleObject: function handleObject(value) {
    // cache object styles so that only changed props
    // are actually updated.
    var cache = this.cache || (this.cache = {});
    var name, val;
    for (name in cache) {
      if (!(name in value)) {
        this.handleSingle(name, null);
        delete cache[name];
      }
    }
    for (name in value) {
      val = value[name];
      if (val !== cache[name]) {
        cache[name] = val;
        this.handleSingle(name, val);
      }
    }
  },

  handleSingle: function handleSingle(prop, value) {
    prop = normalize(prop);
    if (!prop) return; // unsupported prop
    // cast possible numbers/booleans into strings
    if (value != null) value += '';
    if (value) {
      var isImportant = importantRE.test(value) ? 'important' : '';
      if (isImportant) {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production') {
          warn('It\'s probably a bad idea to use !important with inline rules. ' + 'This feature will be deprecated in a future version of Vue.');
        }
        value = value.replace(importantRE, '').trim();
        this.el.style.setProperty(prop.kebab, value, isImportant);
      } else {
        this.el.style[prop.camel] = value;
      }
    } else {
      this.el.style[prop.camel] = '';
    }
  }

};

/**
 * Normalize a CSS property name.
 * - cache result
 * - auto prefix
 * - camelCase -> dash-case
 *
 * @param {String} prop
 * @return {String}
 */

function normalize(prop) {
  if (propCache[prop]) {
    return propCache[prop];
  }
  var res = prefix(prop);
  propCache[prop] = propCache[res] = res;
  return res;
}

/**
 * Auto detect the appropriate prefix for a CSS property.
 * https://gist.github.com/paulirish/523692
 *
 * @param {String} prop
 * @return {String}
 */

function prefix(prop) {
  prop = hyphenate(prop);
  var camel = camelize(prop);
  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
  if (!testEl) {
    testEl = document.createElement('div');
  }
  var i = prefixes.length;
  var prefixed;
  if (camel !== 'filter' && camel in testEl.style) {
    return {
      kebab: prop,
      camel: camel
    };
  }
  while (i--) {
    prefixed = camelPrefixes[i] + upper;
    if (prefixed in testEl.style) {
      return {
        kebab: prefixes[i] + prop,
        camel: prefixed
      };
    }
  }
}

// xlink
var xlinkNS = 'http://www.w3.org/1999/xlink';
var xlinkRE = /^xlink:/;

// check for attributes that prohibit interpolations
var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
// these attributes should also set their corresponding properties
// because they only affect the initial state of the element
var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;
// these attributes expect enumrated values of "true" or "false"
// but are not boolean attributes
var enumeratedAttrRE = /^(?:draggable|contenteditable|spellcheck)$/;

// these attributes should set a hidden property for
// binding v-model to object values
var modelProps = {
  value: '_value',
  'true-value': '_trueValue',
  'false-value': '_falseValue'
};

var bind$1 = {

  priority: BIND,

  bind: function bind() {
    var attr = this.arg;
    var tag = this.el.tagName;
    // should be deep watch on object mode
    if (!attr) {
      this.deep = true;
    }
    // handle interpolation bindings
    var descriptor = this.descriptor;
    var tokens = descriptor.interp;
    if (tokens) {
      // handle interpolations with one-time tokens
      if (descriptor.hasOneTime) {
        this.expression = tokensToExp(tokens, this._scope || this.vm);
      }

      // only allow binding on native attributes
      if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
        process.env.NODE_ENV !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.', this.vm);
        this.el.removeAttribute(attr);
        this.invalid = true;
      }

      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production') {
        var raw = attr + '="' + descriptor.raw + '": ';
        // warn src
        if (attr === 'src') {
          warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.', this.vm);
        }

        // warn style
        if (attr === 'style') {
          warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.', this.vm);
        }
      }
    }
  },

  update: function update(value) {
    if (this.invalid) {
      return;
    }
    var attr = this.arg;
    if (this.arg) {
      this.handleSingle(attr, value);
    } else {
      this.handleObject(value || {});
    }
  },

  // share object handler with v-bind:class
  handleObject: style.handleObject,

  handleSingle: function handleSingle(attr, value) {
    var el = this.el;
    var interp = this.descriptor.interp;
    if (this.modifiers.camel) {
      attr = camelize(attr);
    }
    if (!interp && attrWithPropsRE.test(attr) && attr in el) {
      var attrValue = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
      ? '' : value : value;

      if (el[attr] !== attrValue) {
        el[attr] = attrValue;
      }
    }
    // set model props
    var modelProp = modelProps[attr];
    if (!interp && modelProp) {
      el[modelProp] = value;
      // update v-model if present
      var model = el.__v_model;
      if (model) {
        model.listener();
      }
    }
    // do not set value attribute for textarea
    if (attr === 'value' && el.tagName === 'TEXTAREA') {
      el.removeAttribute(attr);
      return;
    }
    // update attribute
    if (enumeratedAttrRE.test(attr)) {
      el.setAttribute(attr, value ? 'true' : 'false');
    } else if (value != null && value !== false) {
      if (attr === 'class') {
        // handle edge case #1960:
        // class interpolation should not overwrite Vue transition class
        if (el.__v_trans) {
          value += ' ' + el.__v_trans.id + '-transition';
        }
        setClass(el, value);
      } else if (xlinkRE.test(attr)) {
        el.setAttributeNS(xlinkNS, attr, value === true ? '' : value);
      } else {
        el.setAttribute(attr, value === true ? '' : value);
      }
    } else {
      el.removeAttribute(attr);
    }
  }
};

var el = {

  priority: EL,

  bind: function bind() {
    /* istanbul ignore if */
    if (!this.arg) {
      return;
    }
    var id = this.id = camelize(this.arg);
    var refs = (this._scope || this.vm).$els;
    if (hasOwn(refs, id)) {
      refs[id] = this.el;
    } else {
      defineReactive(refs, id, this.el);
    }
  },

  unbind: function unbind() {
    var refs = (this._scope || this.vm).$els;
    if (refs[this.id] === this.el) {
      refs[this.id] = null;
    }
  }
};

var ref = {
  bind: function bind() {
    process.env.NODE_ENV !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.', this.vm);
  }
};

var cloak = {
  bind: function bind() {
    var el = this.el;
    this.vm.$once('pre-hook:compiled', function () {
      el.removeAttribute('v-cloak');
    });
  }
};

// must export plain object
var directives = {
  text: text$1,
  html: html,
  'for': vFor,
  'if': vIf,
  show: show,
  model: model,
  on: on$1,
  bind: bind$1,
  el: el,
  ref: ref,
  cloak: cloak
};

var vClass = {

  deep: true,

  update: function update(value) {
    if (!value) {
      this.cleanup();
    } else if (typeof value === 'string') {
      this.setClass(value.trim().split(/\s+/));
    } else {
      this.setClass(normalize$1(value));
    }
  },

  setClass: function setClass(value) {
    this.cleanup(value);
    for (var i = 0, l = value.length; i < l; i++) {
      var val = value[i];
      if (val) {
        apply(this.el, val, addClass);
      }
    }
    this.prevKeys = value;
  },

  cleanup: function cleanup(value) {
    var prevKeys = this.prevKeys;
    if (!prevKeys) return;
    var i = prevKeys.length;
    while (i--) {
      var key = prevKeys[i];
      if (!value || value.indexOf(key) < 0) {
        apply(this.el, key, removeClass);
      }
    }
  }
};

/**
 * Normalize objects and arrays (potentially containing objects)
 * into array of strings.
 *
 * @param {Object|Array<String|Object>} value
 * @return {Array<String>}
 */

function normalize$1(value) {
  var res = [];
  if (isArray(value)) {
    for (var i = 0, l = value.length; i < l; i++) {
      var _key = value[i];
      if (_key) {
        if (typeof _key === 'string') {
          res.push(_key);
        } else {
          for (var k in _key) {
            if (_key[k]) res.push(k);
          }
        }
      }
    }
  } else if (isObject(value)) {
    for (var key in value) {
      if (value[key]) res.push(key);
    }
  }
  return res;
}

/**
 * Add or remove a class/classes on an element
 *
 * @param {Element} el
 * @param {String} key The class name. This may or may not
 *                     contain a space character, in such a
 *                     case we'll deal with multiple class
 *                     names at once.
 * @param {Function} fn
 */

function apply(el, key, fn) {
  key = key.trim();
  if (key.indexOf(' ') === -1) {
    fn(el, key);
    return;
  }
  // The key contains one or more space characters.
  // Since a class name doesn't accept such characters, we
  // treat it as multiple classes.
  var keys = key.split(/\s+/);
  for (var i = 0, l = keys.length; i < l; i++) {
    fn(el, keys[i]);
  }
}

var component = {

  priority: COMPONENT,

  params: ['keep-alive', 'transition-mode', 'inline-template'],

  /**
   * Setup. Two possible usages:
   *
   * - static:
   *   <comp> or <div v-component="comp">
   *
   * - dynamic:
   *   <component :is="view">
   */

  bind: function bind() {
    if (!this.el.__vue__) {
      // keep-alive cache
      this.keepAlive = this.params.keepAlive;
      if (this.keepAlive) {
        this.cache = {};
      }
      // check inline-template
      if (this.params.inlineTemplate) {
        // extract inline template as a DocumentFragment
        this.inlineTemplate = extractContent(this.el, true);
      }
      // component resolution related state
      this.pendingComponentCb = this.Component = null;
      // transition related state
      this.pendingRemovals = 0;
      this.pendingRemovalCb = null;
      // create a ref anchor
      this.anchor = createAnchor('v-component');
      replace(this.el, this.anchor);
      // remove is attribute.
      // this is removed during compilation, but because compilation is
      // cached, when the component is used elsewhere this attribute
      // will remain at link time.
      this.el.removeAttribute('is');
      this.el.removeAttribute(':is');
      // remove ref, same as above
      if (this.descriptor.ref) {
        this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
      }
      // if static, build right now.
      if (this.literal) {
        this.setComponent(this.expression);
      }
    } else {
      process.env.NODE_ENV !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
    }
  },

  /**
   * Public update, called by the watcher in the dynamic
   * literal scenario, e.g. <component :is="view">
   */

  update: function update(value) {
    if (!this.literal) {
      this.setComponent(value);
    }
  },

  /**
   * Switch dynamic components. May resolve the component
   * asynchronously, and perform transition based on
   * specified transition mode. Accepts a few additional
   * arguments specifically for vue-router.
   *
   * The callback is called when the full transition is
   * finished.
   *
   * @param {String} value
   * @param {Function} [cb]
   */

  setComponent: function setComponent(value, cb) {
    this.invalidatePending();
    if (!value) {
      // just remove current
      this.unbuild(true);
      this.remove(this.childVM, cb);
      this.childVM = null;
    } else {
      var self = this;
      this.resolveComponent(value, function () {
        self.mountComponent(cb);
      });
    }
  },

  /**
   * Resolve the component constructor to use when creating
   * the child vm.
   *
   * @param {String|Function} value
   * @param {Function} cb
   */

  resolveComponent: function resolveComponent(value, cb) {
    var self = this;
    this.pendingComponentCb = cancellable(function (Component) {
      self.ComponentName = Component.options.name || (typeof value === 'string' ? value : null);
      self.Component = Component;
      cb();
    });
    this.vm._resolveComponent(value, this.pendingComponentCb);
  },

  /**
   * Create a new instance using the current constructor and
   * replace the existing instance. This method doesn't care
   * whether the new component and the old one are actually
   * the same.
   *
   * @param {Function} [cb]
   */

  mountComponent: function mountComponent(cb) {
    // actual mount
    this.unbuild(true);
    var self = this;
    var activateHooks = this.Component.options.activate;
    var cached = this.getCached();
    var newComponent = this.build();
    if (activateHooks && !cached) {
      this.waitingFor = newComponent;
      callActivateHooks(activateHooks, newComponent, function () {
        if (self.waitingFor !== newComponent) {
          return;
        }
        self.waitingFor = null;
        self.transition(newComponent, cb);
      });
    } else {
      // update ref for kept-alive component
      if (cached) {
        newComponent._updateRef();
      }
      this.transition(newComponent, cb);
    }
  },

  /**
   * When the component changes or unbinds before an async
   * constructor is resolved, we need to invalidate its
   * pending callback.
   */

  invalidatePending: function invalidatePending() {
    if (this.pendingComponentCb) {
      this.pendingComponentCb.cancel();
      this.pendingComponentCb = null;
    }
  },

  /**
   * Instantiate/insert a new child vm.
   * If keep alive and has cached instance, insert that
   * instance; otherwise build a new one and cache it.
   *
   * @param {Object} [extraOptions]
   * @return {Vue} - the created instance
   */

  build: function build(extraOptions) {
    var cached = this.getCached();
    if (cached) {
      return cached;
    }
    if (this.Component) {
      // default options
      var options = {
        name: this.ComponentName,
        el: cloneNode(this.el),
        template: this.inlineTemplate,
        // make sure to add the child with correct parent
        // if this is a transcluded component, its parent
        // should be the transclusion host.
        parent: this._host || this.vm,
        // if no inline-template, then the compiled
        // linker can be cached for better performance.
        _linkerCachable: !this.inlineTemplate,
        _ref: this.descriptor.ref,
        _asComponent: true,
        _isRouterView: this._isRouterView,
        // if this is a transcluded component, context
        // will be the common parent vm of this instance
        // and its host.
        _context: this.vm,
        // if this is inside an inline v-for, the scope
        // will be the intermediate scope created for this
        // repeat fragment. this is used for linking props
        // and container directives.
        _scope: this._scope,
        // pass in the owner fragment of this component.
        // this is necessary so that the fragment can keep
        // track of its contained components in order to
        // call attach/detach hooks for them.
        _frag: this._frag
      };
      // extra options
      // in 1.0.0 this is used by vue-router only
      /* istanbul ignore if */
      if (extraOptions) {
        extend(options, extraOptions);
      }
      var child = new this.Component(options);
      if (this.keepAlive) {
        this.cache[this.Component.cid] = child;
      }
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
        warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template, child);
      }
      return child;
    }
  },

  /**
   * Try to get a cached instance of the current component.
   *
   * @return {Vue|undefined}
   */

  getCached: function getCached() {
    return this.keepAlive && this.cache[this.Component.cid];
  },

  /**
   * Teardown the current child, but defers cleanup so
   * that we can separate the destroy and removal steps.
   *
   * @param {Boolean} defer
   */

  unbuild: function unbuild(defer) {
    if (this.waitingFor) {
      if (!this.keepAlive) {
        this.waitingFor.$destroy();
      }
      this.waitingFor = null;
    }
    var child = this.childVM;
    if (!child || this.keepAlive) {
      if (child) {
        // remove ref
        child._inactive = true;
        child._updateRef(true);
      }
      return;
    }
    // the sole purpose of `deferCleanup` is so that we can
    // "deactivate" the vm right now and perform DOM removal
    // later.
    child.$destroy(false, defer);
  },

  /**
   * Remove current destroyed child and manually do
   * the cleanup after removal.
   *
   * @param {Function} cb
   */

  remove: function remove(child, cb) {
    var keepAlive = this.keepAlive;
    if (child) {
      // we may have a component switch when a previous
      // component is still being transitioned out.
      // we want to trigger only one lastest insertion cb
      // when the existing transition finishes. (#1119)
      this.pendingRemovals++;
      this.pendingRemovalCb = cb;
      var self = this;
      child.$remove(function () {
        self.pendingRemovals--;
        if (!keepAlive) child._cleanup();
        if (!self.pendingRemovals && self.pendingRemovalCb) {
          self.pendingRemovalCb();
          self.pendingRemovalCb = null;
        }
      });
    } else if (cb) {
      cb();
    }
  },

  /**
   * Actually swap the components, depending on the
   * transition mode. Defaults to simultaneous.
   *
   * @param {Vue} target
   * @param {Function} [cb]
   */

  transition: function transition(target, cb) {
    var self = this;
    var current = this.childVM;
    // for devtool inspection
    if (current) current._inactive = true;
    target._inactive = false;
    this.childVM = target;
    switch (self.params.transitionMode) {
      case 'in-out':
        target.$before(self.anchor, function () {
          self.remove(current, cb);
        });
        break;
      case 'out-in':
        self.remove(current, function () {
          target.$before(self.anchor, cb);
        });
        break;
      default:
        self.remove(current);
        target.$before(self.anchor, cb);
    }
  },

  /**
   * Unbind.
   */

  unbind: function unbind() {
    this.invalidatePending();
    // Do not defer cleanup when unbinding
    this.unbuild();
    // destroy all keep-alive cached instances
    if (this.cache) {
      for (var key in this.cache) {
        this.cache[key].$destroy();
      }
      this.cache = null;
    }
  }
};

/**
 * Call activate hooks in order (asynchronous)
 *
 * @param {Array} hooks
 * @param {Vue} vm
 * @param {Function} cb
 */

function callActivateHooks(hooks, vm, cb) {
  var total = hooks.length;
  var called = 0;
  hooks[0].call(vm, next);
  function next() {
    if (++called >= total) {
      cb();
    } else {
      hooks[called].call(vm, next);
    }
  }
}

var propBindingModes = config._propBindingModes;
var empty = {};

// regexes
var identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;

/**
 * Compile props on a root element and return
 * a props link function.
 *
 * @param {Element|DocumentFragment} el
 * @param {Array} propOptions
 * @param {Vue} vm
 * @return {Function} propsLinkFn
 */

function compileProps(el, propOptions, vm) {
  var props = [];
  var names = Object.keys(propOptions);
  var i = names.length;
  var options, name, attr, value, path, parsed, prop;
  while (i--) {
    name = names[i];
    options = propOptions[name] || empty;

    if (process.env.NODE_ENV !== 'production' && name === '$data') {
      warn('Do not use $data as prop.', vm);
      continue;
    }

    // props could contain dashes, which will be
    // interpreted as minus calculations by the parser
    // so we need to camelize the path here
    path = camelize(name);
    if (!identRE$1.test(path)) {
      process.env.NODE_ENV !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.', vm);
      continue;
    }

    prop = {
      name: name,
      path: path,
      options: options,
      mode: propBindingModes.ONE_WAY,
      raw: null
    };

    attr = hyphenate(name);
    // first check dynamic version
    if ((value = getBindAttr(el, attr)) === null) {
      if ((value = getBindAttr(el, attr + '.sync')) !== null) {
        prop.mode = propBindingModes.TWO_WAY;
      } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
        prop.mode = propBindingModes.ONE_TIME;
      }
    }
    if (value !== null) {
      // has dynamic binding!
      prop.raw = value;
      parsed = parseDirective(value);
      value = parsed.expression;
      prop.filters = parsed.filters;
      // check binding type
      if (isLiteral(value) && !parsed.filters) {
        // for expressions containing literal numbers and
        // booleans, there's no need to setup a prop binding,
        // so we can optimize them as a one-time set.
        prop.optimizedLiteral = true;
      } else {
        prop.dynamic = true;
        // check non-settable path for two-way bindings
        if (process.env.NODE_ENV !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
          prop.mode = propBindingModes.ONE_WAY;
          warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value, vm);
        }
      }
      prop.parentPath = value;

      // warn required two-way
      if (process.env.NODE_ENV !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
        warn('Prop "' + name + '" expects a two-way binding type.', vm);
      }
    } else if ((value = getAttr(el, attr)) !== null) {
      // has literal binding!
      prop.raw = value;
    } else if (process.env.NODE_ENV !== 'production') {
      // check possible camelCase prop usage
      var lowerCaseName = path.toLowerCase();
      value = /[A-Z\-]/.test(name) && (el.getAttribute(lowerCaseName) || el.getAttribute(':' + lowerCaseName) || el.getAttribute('v-bind:' + lowerCaseName) || el.getAttribute(':' + lowerCaseName + '.once') || el.getAttribute('v-bind:' + lowerCaseName + '.once') || el.getAttribute(':' + lowerCaseName + '.sync') || el.getAttribute('v-bind:' + lowerCaseName + '.sync'));
      if (value) {
        warn('Possible usage error for prop `' + lowerCaseName + '` - ' + 'did you mean `' + attr + '`? HTML is case-insensitive, remember to use ' + 'kebab-case for props in templates.', vm);
      } else if (options.required) {
        // warn missing required
        warn('Missing required prop: ' + name, vm);
      }
    }
    // push prop
    props.push(prop);
  }
  return makePropsLinkFn(props);
}

/**
 * Build a function that applies props to a vm.
 *
 * @param {Array} props
 * @return {Function} propsLinkFn
 */

function makePropsLinkFn(props) {
  return function propsLinkFn(vm, scope) {
    // store resolved props info
    vm._props = {};
    var inlineProps = vm.$options.propsData;
    var i = props.length;
    var prop, path, options, value, raw;
    while (i--) {
      prop = props[i];
      raw = prop.raw;
      path = prop.path;
      options = prop.options;
      vm._props[path] = prop;
      if (inlineProps && hasOwn(inlineProps, path)) {
        initProp(vm, prop, inlineProps[path]);
      }if (raw === null) {
        // initialize absent prop
        initProp(vm, prop, undefined);
      } else if (prop.dynamic) {
        // dynamic prop
        if (prop.mode === propBindingModes.ONE_TIME) {
          // one time binding
          value = (scope || vm._context || vm).$get(prop.parentPath);
          initProp(vm, prop, value);
        } else {
          if (vm._context) {
            // dynamic binding
            vm._bindDir({
              name: 'prop',
              def: propDef,
              prop: prop
            }, null, null, scope); // el, host, scope
          } else {
              // root instance
              initProp(vm, prop, vm.$get(prop.parentPath));
            }
        }
      } else if (prop.optimizedLiteral) {
        // optimized literal, cast it and just set once
        var stripped = stripQuotes(raw);
        value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
        initProp(vm, prop, value);
      } else {
        // string literal, but we need to cater for
        // Boolean props with no value, or with same
        // literal value (e.g. disabled="disabled")
        // see https://github.com/vuejs/vue-loader/issues/182
        value = options.type === Boolean && (raw === '' || raw === hyphenate(prop.name)) ? true : raw;
        initProp(vm, prop, value);
      }
    }
  };
}

/**
 * Process a prop with a rawValue, applying necessary coersions,
 * default values & assertions and call the given callback with
 * processed value.
 *
 * @param {Vue} vm
 * @param {Object} prop
 * @param {*} rawValue
 * @param {Function} fn
 */

function processPropValue(vm, prop, rawValue, fn) {
  var isSimple = prop.dynamic && isSimplePath(prop.parentPath);
  var value = rawValue;
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop);
  }
  value = coerceProp(prop, value, vm);
  var coerced = value !== rawValue;
  if (!assertProp(prop, value, vm)) {
    value = undefined;
  }
  if (isSimple && !coerced) {
    withoutConversion(function () {
      fn(value);
    });
  } else {
    fn(value);
  }
}

/**
 * Set a prop's initial value on a vm and its data object.
 *
 * @param {Vue} vm
 * @param {Object} prop
 * @param {*} value
 */

function initProp(vm, prop, value) {
  processPropValue(vm, prop, value, function (value) {
    defineReactive(vm, prop.path, value);
  });
}

/**
 * Update a prop's value on a vm.
 *
 * @param {Vue} vm
 * @param {Object} prop
 * @param {*} value
 */

function updateProp(vm, prop, value) {
  processPropValue(vm, prop, value, function (value) {
    vm[prop.path] = value;
  });
}

/**
 * Get the default value of a prop.
 *
 * @param {Vue} vm
 * @param {Object} prop
 * @return {*}
 */

function getPropDefaultValue(vm, prop) {
  // no default, return undefined
  var options = prop.options;
  if (!hasOwn(options, 'default')) {
    // absent boolean value defaults to false
    return options.type === Boolean ? false : undefined;
  }
  var def = options['default'];
  // warn against non-factory defaults for Object & Array
  if (isObject(def)) {
    process.env.NODE_ENV !== 'production' && warn('Invalid default value for prop "' + prop.name + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
  }
  // call factory function for non-Function types
  return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
}

/**
 * Assert whether a prop is valid.
 *
 * @param {Object} prop
 * @param {*} value
 * @param {Vue} vm
 */

function assertProp(prop, value, vm) {
  if (!prop.options.required && ( // non-required
  prop.raw === null || // abscent
  value == null) // null or undefined
  ) {
      return true;
    }
  var options = prop.options;
  var type = options.type;
  var valid = !type;
  var expectedTypes = [];
  if (type) {
    if (!isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType);
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    if (process.env.NODE_ENV !== 'production') {
      warn('Invalid prop: type check failed for prop "' + prop.name + '".' + ' Expected ' + expectedTypes.map(formatType).join(', ') + ', got ' + formatValue(value) + '.', vm);
    }
    return false;
  }
  var validator = options.validator;
  if (validator) {
    if (!validator(value)) {
      process.env.NODE_ENV !== 'production' && warn('Invalid prop: custom validator check failed for prop "' + prop.name + '".', vm);
      return false;
    }
  }
  return true;
}

/**
 * Force parsing value with coerce option.
 *
 * @param {*} value
 * @param {Object} options
 * @return {*}
 */

function coerceProp(prop, value, vm) {
  var coerce = prop.options.coerce;
  if (!coerce) {
    return value;
  }
  if (typeof coerce === 'function') {
    return coerce(value);
  } else {
    process.env.NODE_ENV !== 'production' && warn('Invalid coerce for prop "' + prop.name + '": expected function, got ' + typeof coerce + '.', vm);
    return value;
  }
}

/**
 * Assert the type of a value
 *
 * @param {*} value
 * @param {Function} type
 * @return {Object}
 */

function assertType(value, type) {
  var valid;
  var expectedType;
  if (type === String) {
    expectedType = 'string';
    valid = typeof value === expectedType;
  } else if (type === Number) {
    expectedType = 'number';
    valid = typeof value === expectedType;
  } else if (type === Boolean) {
    expectedType = 'boolean';
    valid = typeof value === expectedType;
  } else if (type === Function) {
    expectedType = 'function';
    valid = typeof value === expectedType;
  } else if (type === Object) {
    expectedType = 'object';
    valid = isPlainObject(value);
  } else if (type === Array) {
    expectedType = 'array';
    valid = isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  };
}

/**
 * Format type for output
 *
 * @param {String} type
 * @return {String}
 */

function formatType(type) {
  return type ? type.charAt(0).toUpperCase() + type.slice(1) : 'custom type';
}

/**
 * Format value
 *
 * @param {*} value
 * @return {String}
 */

function formatValue(val) {
  return Object.prototype.toString.call(val).slice(8, -1);
}

var bindingModes = config._propBindingModes;

var propDef = {

  bind: function bind() {
    var child = this.vm;
    var parent = child._context;
    // passed in from compiler directly
    var prop = this.descriptor.prop;
    var childKey = prop.path;
    var parentKey = prop.parentPath;
    var twoWay = prop.mode === bindingModes.TWO_WAY;

    var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
      updateProp(child, prop, val);
    }, {
      twoWay: twoWay,
      filters: prop.filters,
      // important: props need to be observed on the
      // v-for scope if present
      scope: this._scope
    });

    // set the child initial value.
    initProp(child, prop, parentWatcher.value);

    // setup two-way binding
    if (twoWay) {
      // important: defer the child watcher creation until
      // the created hook (after data observation)
      var self = this;
      child.$once('pre-hook:created', function () {
        self.childWatcher = new Watcher(child, childKey, function (val) {
          parentWatcher.set(val);
        }, {
          // ensure sync upward before parent sync down.
          // this is necessary in cases e.g. the child
          // mutates a prop array, then replaces it. (#1683)
          sync: true
        });
      });
    }
  },

  unbind: function unbind() {
    this.parentWatcher.teardown();
    if (this.childWatcher) {
      this.childWatcher.teardown();
    }
  }
};

var queue$1 = [];
var queued = false;

/**
 * Push a job into the queue.
 *
 * @param {Function} job
 */

function pushJob(job) {
  queue$1.push(job);
  if (!queued) {
    queued = true;
    nextTick(flush);
  }
}

/**
 * Flush the queue, and do one forced reflow before
 * triggering transitions.
 */

function flush() {
  // Force layout
  var f = document.documentElement.offsetHeight;
  for (var i = 0; i < queue$1.length; i++) {
    queue$1[i]();
  }
  queue$1 = [];
  queued = false;
  // dummy return, so js linters don't complain about
  // unused variable f
  return f;
}

var TYPE_TRANSITION = 'transition';
var TYPE_ANIMATION = 'animation';
var transDurationProp = transitionProp + 'Duration';
var animDurationProp = animationProp + 'Duration';

/**
 * If a just-entered element is applied the
 * leave class while its enter transition hasn't started yet,
 * and the transitioned property has the same value for both
 * enter/leave, then the leave transition will be skipped and
 * the transitionend event never fires. This function ensures
 * its callback to be called after a transition has started
 * by waiting for double raf.
 *
 * It falls back to setTimeout on devices that support CSS
 * transitions but not raf (e.g. Android 4.2 browser) - since
 * these environments are usually slow, we are giving it a
 * relatively large timeout.
 */

var raf = inBrowser && window.requestAnimationFrame;
var waitForTransitionStart = raf
/* istanbul ignore next */
? function (fn) {
  raf(function () {
    raf(fn);
  });
} : function (fn) {
  setTimeout(fn, 50);
};

/**
 * A Transition object that encapsulates the state and logic
 * of the transition.
 *
 * @param {Element} el
 * @param {String} id
 * @param {Object} hooks
 * @param {Vue} vm
 */
function Transition(el, id, hooks, vm) {
  this.id = id;
  this.el = el;
  this.enterClass = hooks && hooks.enterClass || id + '-enter';
  this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
  this.hooks = hooks;
  this.vm = vm;
  // async state
  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
  this.justEntered = false;
  this.entered = this.left = false;
  this.typeCache = {};
  // check css transition type
  this.type = hooks && hooks.type;
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'production') {
    if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
      warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type, vm);
    }
  }
  // bind
  var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
    self[m] = bind(self[m], self);
  });
}

var p$1 = Transition.prototype;

/**
 * Start an entering transition.
 *
 * 1. enter transition triggered
 * 2. call beforeEnter hook
 * 3. add enter class
 * 4. insert/show element
 * 5. call enter hook (with possible explicit js callback)
 * 6. reflow
 * 7. based on transition type:
 *    - transition:
 *        remove class now, wait for transitionend,
 *        then done if there's no explicit js callback.
 *    - animation:
 *        wait for animationend, remove class,
 *        then done if there's no explicit js callback.
 *    - no css transition:
 *        done now if there's no explicit js callback.
 * 8. wait for either done or js callback, then call
 *    afterEnter hook.
 *
 * @param {Function} op - insert/show the element
 * @param {Function} [cb]
 */

p$1.enter = function (op, cb) {
  this.cancelPending();
  this.callHook('beforeEnter');
  this.cb = cb;
  addClass(this.el, this.enterClass);
  op();
  this.entered = false;
  this.callHookWithCb('enter');
  if (this.entered) {
    return; // user called done synchronously.
  }
  this.cancel = this.hooks && this.hooks.enterCancelled;
  pushJob(this.enterNextTick);
};

/**
 * The "nextTick" phase of an entering transition, which is
 * to be pushed into a queue and executed after a reflow so
 * that removing the class can trigger a CSS transition.
 */

p$1.enterNextTick = function () {
  var _this = this;

  // prevent transition skipping
  this.justEntered = true;
  waitForTransitionStart(function () {
    _this.justEntered = false;
  });
  var enterDone = this.enterDone;
  var type = this.getCssTransitionType(this.enterClass);
  if (!this.pendingJsCb) {
    if (type === TYPE_TRANSITION) {
      // trigger transition by removing enter class now
      removeClass(this.el, this.enterClass);
      this.setupCssCb(transitionEndEvent, enterDone);
    } else if (type === TYPE_ANIMATION) {
      this.setupCssCb(animationEndEvent, enterDone);
    } else {
      enterDone();
    }
  } else if (type === TYPE_TRANSITION) {
    removeClass(this.el, this.enterClass);
  }
};

/**
 * The "cleanup" phase of an entering transition.
 */

p$1.enterDone = function () {
  this.entered = true;
  this.cancel = this.pendingJsCb = null;
  removeClass(this.el, this.enterClass);
  this.callHook('afterEnter');
  if (this.cb) this.cb();
};

/**
 * Start a leaving transition.
 *
 * 1. leave transition triggered.
 * 2. call beforeLeave hook
 * 3. add leave class (trigger css transition)
 * 4. call leave hook (with possible explicit js callback)
 * 5. reflow if no explicit js callback is provided
 * 6. based on transition type:
 *    - transition or animation:
 *        wait for end event, remove class, then done if
 *        there's no explicit js callback.
 *    - no css transition:
 *        done if there's no explicit js callback.
 * 7. wait for either done or js callback, then call
 *    afterLeave hook.
 *
 * @param {Function} op - remove/hide the element
 * @param {Function} [cb]
 */

p$1.leave = function (op, cb) {
  this.cancelPending();
  this.callHook('beforeLeave');
  this.op = op;
  this.cb = cb;
  addClass(this.el, this.leaveClass);
  this.left = false;
  this.callHookWithCb('leave');
  if (this.left) {
    return; // user called done synchronously.
  }
  this.cancel = this.hooks && this.hooks.leaveCancelled;
  // only need to handle leaveDone if
  // 1. the transition is already done (synchronously called
  //    by the user, which causes this.op set to null)
  // 2. there's no explicit js callback
  if (this.op && !this.pendingJsCb) {
    // if a CSS transition leaves immediately after enter,
    // the transitionend event never fires. therefore we
    // detect such cases and end the leave immediately.
    if (this.justEntered) {
      this.leaveDone();
    } else {
      pushJob(this.leaveNextTick);
    }
  }
};

/**
 * The "nextTick" phase of a leaving transition.
 */

p$1.leaveNextTick = function () {
  var type = this.getCssTransitionType(this.leaveClass);
  if (type) {
    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
    this.setupCssCb(event, this.leaveDone);
  } else {
    this.leaveDone();
  }
};

/**
 * The "cleanup" phase of a leaving transition.
 */

p$1.leaveDone = function () {
  this.left = true;
  this.cancel = this.pendingJsCb = null;
  this.op();
  removeClass(this.el, this.leaveClass);
  this.callHook('afterLeave');
  if (this.cb) this.cb();
  this.op = null;
};

/**
 * Cancel any pending callbacks from a previously running
 * but not finished transition.
 */

p$1.cancelPending = function () {
  this.op = this.cb = null;
  var hasPending = false;
  if (this.pendingCssCb) {
    hasPending = true;
    off(this.el, this.pendingCssEvent, this.pendingCssCb);
    this.pendingCssEvent = this.pendingCssCb = null;
  }
  if (this.pendingJsCb) {
    hasPending = true;
    this.pendingJsCb.cancel();
    this.pendingJsCb = null;
  }
  if (hasPending) {
    removeClass(this.el, this.enterClass);
    removeClass(this.el, this.leaveClass);
  }
  if (this.cancel) {
    this.cancel.call(this.vm, this.el);
    this.cancel = null;
  }
};

/**
 * Call a user-provided synchronous hook function.
 *
 * @param {String} type
 */

p$1.callHook = function (type) {
  if (this.hooks && this.hooks[type]) {
    this.hooks[type].call(this.vm, this.el);
  }
};

/**
 * Call a user-provided, potentially-async hook function.
 * We check for the length of arguments to see if the hook
 * expects a `done` callback. If true, the transition's end
 * will be determined by when the user calls that callback;
 * otherwise, the end is determined by the CSS transition or
 * animation.
 *
 * @param {String} type
 */

p$1.callHookWithCb = function (type) {
  var hook = this.hooks && this.hooks[type];
  if (hook) {
    if (hook.length > 1) {
      this.pendingJsCb = cancellable(this[type + 'Done']);
    }
    hook.call(this.vm, this.el, this.pendingJsCb);
  }
};

/**
 * Get an element's transition type based on the
 * calculated styles.
 *
 * @param {String} className
 * @return {Number}
 */

p$1.getCssTransitionType = function (className) {
  /* istanbul ignore if */
  if (!transitionEndEvent ||
  // skip CSS transitions if page is not visible -
  // this solves the issue of transitionend events not
  // firing until the page is visible again.
  // pageVisibility API is supported in IE10+, same as
  // CSS transitions.
  document.hidden ||
  // explicit js-only transition
  this.hooks && this.hooks.css === false ||
  // element is hidden
  isHidden(this.el)) {
    return;
  }
  var type = this.type || this.typeCache[className];
  if (type) return type;
  var inlineStyles = this.el.style;
  var computedStyles = window.getComputedStyle(this.el);
  var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
  if (transDuration && transDuration !== '0s') {
    type = TYPE_TRANSITION;
  } else {
    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
    if (animDuration && animDuration !== '0s') {
      type = TYPE_ANIMATION;
    }
  }
  if (type) {
    this.typeCache[className] = type;
  }
  return type;
};

/**
 * Setup a CSS transitionend/animationend callback.
 *
 * @param {String} event
 * @param {Function} cb
 */

p$1.setupCssCb = function (event, cb) {
  this.pendingCssEvent = event;
  var self = this;
  var el = this.el;
  var onEnd = this.pendingCssCb = function (e) {
    if (e.target === el) {
      off(el, event, onEnd);
      self.pendingCssEvent = self.pendingCssCb = null;
      if (!self.pendingJsCb && cb) {
        cb();
      }
    }
  };
  on(el, event, onEnd);
};

/**
 * Check if an element is hidden - in that case we can just
 * skip the transition alltogether.
 *
 * @param {Element} el
 * @return {Boolean}
 */

function isHidden(el) {
  if (/svg$/.test(el.namespaceURI)) {
    // SVG elements do not have offset(Width|Height)
    // so we need to check the client rect
    var rect = el.getBoundingClientRect();
    return !(rect.width || rect.height);
  } else {
    return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
  }
}

var transition$1 = {

  priority: TRANSITION,

  update: function update(id, oldId) {
    var el = this.el;
    // resolve on owner vm
    var hooks = resolveAsset(this.vm.$options, 'transitions', id);
    id = id || 'v';
    oldId = oldId || 'v';
    el.__v_trans = new Transition(el, id, hooks, this.vm);
    removeClass(el, oldId + '-transition');
    addClass(el, id + '-transition');
  }
};

var internalDirectives = {
  style: style,
  'class': vClass,
  component: component,
  prop: propDef,
  transition: transition$1
};

// special binding prefixes
var bindRE = /^v-bind:|^:/;
var onRE = /^v-on:|^@/;
var dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;
var modifierRE = /\.[^\.]+/g;
var transitionRE = /^(v-bind:|:)?transition$/;

// default directive priority
var DEFAULT_PRIORITY = 1000;
var DEFAULT_TERMINAL_PRIORITY = 2000;

/**
 * Compile a template and return a reusable composite link
 * function, which recursively contains more link functions
 * inside. This top level compile function would normally
 * be called on instance root nodes, but can also be used
 * for partial compilation if the partial argument is true.
 *
 * The returned composite link function, when called, will
 * return an unlink function that tearsdown all directives
 * created during the linking phase.
 *
 * @param {Element|DocumentFragment} el
 * @param {Object} options
 * @param {Boolean} partial
 * @return {Function}
 */

function compile(el, options, partial) {
  // link function for the node itself.
  var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
  // link function for the childNodes
  var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && !isScript(el) && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;

  /**
   * A composite linker function to be called on a already
   * compiled piece of DOM, which instantiates all directive
   * instances.
   *
   * @param {Vue} vm
   * @param {Element|DocumentFragment} el
   * @param {Vue} [host] - host vm of transcluded content
   * @param {Object} [scope] - v-for scope
   * @param {Fragment} [frag] - link context fragment
   * @return {Function|undefined}
   */

  return function compositeLinkFn(vm, el, host, scope, frag) {
    // cache childNodes before linking parent, fix #657
    var childNodes = toArray(el.childNodes);
    // link
    var dirs = linkAndCapture(function compositeLinkCapturer() {
      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
    }, vm);
    return makeUnlinkFn(vm, dirs);
  };
}

/**
 * Apply a linker to a vm/element pair and capture the
 * directives created during the process.
 *
 * @param {Function} linker
 * @param {Vue} vm
 */

function linkAndCapture(linker, vm) {
  /* istanbul ignore if */
  if (process.env.NODE_ENV === 'production') {
    // reset directives before every capture in production
    // mode, so that when unlinking we don't need to splice
    // them out (which turns out to be a perf hit).
    // they are kept in development mode because they are
    // useful for Vue's own tests.
    vm._directives = [];
  }
  var originalDirCount = vm._directives.length;
  linker();
  var dirs = vm._directives.slice(originalDirCount);
  dirs.sort(directiveComparator);
  for (var i = 0, l = dirs.length; i < l; i++) {
    dirs[i]._bind();
  }
  return dirs;
}

/**
 * Directive priority sort comparator
 *
 * @param {Object} a
 * @param {Object} b
 */

function directiveComparator(a, b) {
  a = a.descriptor.def.priority || DEFAULT_PRIORITY;
  b = b.descriptor.def.priority || DEFAULT_PRIORITY;
  return a > b ? -1 : a === b ? 0 : 1;
}

/**
 * Linker functions return an unlink function that
 * tearsdown all directives instances generated during
 * the process.
 *
 * We create unlink functions with only the necessary
 * information to avoid retaining additional closures.
 *
 * @param {Vue} vm
 * @param {Array} dirs
 * @param {Vue} [context]
 * @param {Array} [contextDirs]
 * @return {Function}
 */

function makeUnlinkFn(vm, dirs, context, contextDirs) {
  function unlink(destroying) {
    teardownDirs(vm, dirs, destroying);
    if (context && contextDirs) {
      teardownDirs(context, contextDirs);
    }
  }
  // expose linked directives
  unlink.dirs = dirs;
  return unlink;
}

/**
 * Teardown partial linked directives.
 *
 * @param {Vue} vm
 * @param {Array} dirs
 * @param {Boolean} destroying
 */

function teardownDirs(vm, dirs, destroying) {
  var i = dirs.length;
  while (i--) {
    dirs[i]._teardown();
    if (process.env.NODE_ENV !== 'production' && !destroying) {
      vm._directives.$remove(dirs[i]);
    }
  }
}

/**
 * Compile link props on an instance.
 *
 * @param {Vue} vm
 * @param {Element} el
 * @param {Object} props
 * @param {Object} [scope]
 * @return {Function}
 */

function compileAndLinkProps(vm, el, props, scope) {
  var propsLinkFn = compileProps(el, props, vm);
  var propDirs = linkAndCapture(function () {
    propsLinkFn(vm, scope);
  }, vm);
  return makeUnlinkFn(vm, propDirs);
}

/**
 * Compile the root element of an instance.
 *
 * 1. attrs on context container (context scope)
 * 2. attrs on the component template root node, if
 *    replace:true (child scope)
 *
 * If this is a fragment instance, we only need to compile 1.
 *
 * @param {Element} el
 * @param {Object} options
 * @param {Object} contextOptions
 * @return {Function}
 */

function compileRoot(el, options, contextOptions) {
  var containerAttrs = options._containerAttrs;
  var replacerAttrs = options._replacerAttrs;
  var contextLinkFn, replacerLinkFn;

  // only need to compile other attributes for
  // non-fragment instances
  if (el.nodeType !== 11) {
    // for components, container and replacer need to be
    // compiled separately and linked in different scopes.
    if (options._asComponent) {
      // 2. container attributes
      if (containerAttrs && contextOptions) {
        contextLinkFn = compileDirectives(containerAttrs, contextOptions);
      }
      if (replacerAttrs) {
        // 3. replacer attributes
        replacerLinkFn = compileDirectives(replacerAttrs, options);
      }
    } else {
      // non-component, just compile as a normal element.
      replacerLinkFn = compileDirectives(el.attributes, options);
    }
  } else if (process.env.NODE_ENV !== 'production' && containerAttrs) {
    // warn container directives for fragment instances
    var names = containerAttrs.filter(function (attr) {
      // allow vue-loader/vueify scoped css attributes
      return attr.name.indexOf('_v-') < 0 &&
      // allow event listeners
      !onRE.test(attr.name) &&
      // allow slots
      attr.name !== 'slot';
    }).map(function (attr) {
      return '"' + attr.name + '"';
    });
    if (names.length) {
      var plural = names.length > 1;
      warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + options.el.tagName.toLowerCase() + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment-Instance');
    }
  }

  options._containerAttrs = options._replacerAttrs = null;
  return function rootLinkFn(vm, el, scope) {
    // link context scope dirs
    var context = vm._context;
    var contextDirs;
    if (context && contextLinkFn) {
      contextDirs = linkAndCapture(function () {
        contextLinkFn(context, el, null, scope);
      }, context);
    }

    // link self
    var selfDirs = linkAndCapture(function () {
      if (replacerLinkFn) replacerLinkFn(vm, el);
    }, vm);

    // return the unlink function that tearsdown context
    // container directives.
    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
  };
}

/**
 * Compile a node and return a nodeLinkFn based on the
 * node type.
 *
 * @param {Node} node
 * @param {Object} options
 * @return {Function|null}
 */

function compileNode(node, options) {
  var type = node.nodeType;
  if (type === 1 && !isScript(node)) {
    return compileElement(node, options);
  } else if (type === 3 && node.data.trim()) {
    return compileTextNode(node, options);
  } else {
    return null;
  }
}

/**
 * Compile an element and return a nodeLinkFn.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Function|null}
 */

function compileElement(el, options) {
  // preprocess textareas.
  // textarea treats its text content as the initial value.
  // just bind it as an attr directive for value.
  if (el.tagName === 'TEXTAREA') {
    var tokens = parseText(el.value);
    if (tokens) {
      el.setAttribute(':value', tokensToExp(tokens));
      el.value = '';
    }
  }
  var linkFn;
  var hasAttrs = el.hasAttributes();
  var attrs = hasAttrs && toArray(el.attributes);
  // check terminal directives (for & if)
  if (hasAttrs) {
    linkFn = checkTerminalDirectives(el, attrs, options);
  }
  // check element directives
  if (!linkFn) {
    linkFn = checkElementDirectives(el, options);
  }
  // check component
  if (!linkFn) {
    linkFn = checkComponent(el, options);
  }
  // normal directives
  if (!linkFn && hasAttrs) {
    linkFn = compileDirectives(attrs, options);
  }
  return linkFn;
}

/**
 * Compile a textNode and return a nodeLinkFn.
 *
 * @param {TextNode} node
 * @param {Object} options
 * @return {Function|null} textNodeLinkFn
 */

function compileTextNode(node, options) {
  // skip marked text nodes
  if (node._skip) {
    return removeText;
  }

  var tokens = parseText(node.wholeText);
  if (!tokens) {
    return null;
  }

  // mark adjacent text nodes as skipped,
  // because we are using node.wholeText to compile
  // all adjacent text nodes together. This fixes
  // issues in IE where sometimes it splits up a single
  // text node into multiple ones.
  var next = node.nextSibling;
  while (next && next.nodeType === 3) {
    next._skip = true;
    next = next.nextSibling;
  }

  var frag = document.createDocumentFragment();
  var el, token;
  for (var i = 0, l = tokens.length; i < l; i++) {
    token = tokens[i];
    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
    frag.appendChild(el);
  }
  return makeTextNodeLinkFn(tokens, frag, options);
}

/**
 * Linker for an skipped text node.
 *
 * @param {Vue} vm
 * @param {Text} node
 */

function removeText(vm, node) {
  remove(node);
}

/**
 * Process a single text token.
 *
 * @param {Object} token
 * @param {Object} options
 * @return {Node}
 */

function processTextToken(token, options) {
  var el;
  if (token.oneTime) {
    el = document.createTextNode(token.value);
  } else {
    if (token.html) {
      el = document.createComment('v-html');
      setTokenType('html');
    } else {
      // IE will clean up empty textNodes during
      // frag.cloneNode(true), so we have to give it
      // something here...
      el = document.createTextNode(' ');
      setTokenType('text');
    }
  }
  function setTokenType(type) {
    if (token.descriptor) return;
    var parsed = parseDirective(token.value);
    token.descriptor = {
      name: type,
      def: directives[type],
      expression: parsed.expression,
      filters: parsed.filters
    };
  }
  return el;
}

/**
 * Build a function that processes a textNode.
 *
 * @param {Array<Object>} tokens
 * @param {DocumentFragment} frag
 */

function makeTextNodeLinkFn(tokens, frag) {
  return function textNodeLinkFn(vm, el, host, scope) {
    var fragClone = frag.cloneNode(true);
    var childNodes = toArray(fragClone.childNodes);
    var token, value, node;
    for (var i = 0, l = tokens.length; i < l; i++) {
      token = tokens[i];
      value = token.value;
      if (token.tag) {
        node = childNodes[i];
        if (token.oneTime) {
          value = (scope || vm).$eval(value);
          if (token.html) {
            replace(node, parseTemplate(value, true));
          } else {
            node.data = _toString(value);
          }
        } else {
          vm._bindDir(token.descriptor, node, host, scope);
        }
      }
    }
    replace(el, fragClone);
  };
}

/**
 * Compile a node list and return a childLinkFn.
 *
 * @param {NodeList} nodeList
 * @param {Object} options
 * @return {Function|undefined}
 */

function compileNodeList(nodeList, options) {
  var linkFns = [];
  var nodeLinkFn, childLinkFn, node;
  for (var i = 0, l = nodeList.length; i < l; i++) {
    node = nodeList[i];
    nodeLinkFn = compileNode(node, options);
    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
    linkFns.push(nodeLinkFn, childLinkFn);
  }
  return linkFns.length ? makeChildLinkFn(linkFns) : null;
}

/**
 * Make a child link function for a node's childNodes.
 *
 * @param {Array<Function>} linkFns
 * @return {Function} childLinkFn
 */

function makeChildLinkFn(linkFns) {
  return function childLinkFn(vm, nodes, host, scope, frag) {
    var node, nodeLinkFn, childrenLinkFn;
    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
      node = nodes[n];
      nodeLinkFn = linkFns[i++];
      childrenLinkFn = linkFns[i++];
      // cache childNodes before linking parent, fix #657
      var childNodes = toArray(node.childNodes);
      if (nodeLinkFn) {
        nodeLinkFn(vm, node, host, scope, frag);
      }
      if (childrenLinkFn) {
        childrenLinkFn(vm, childNodes, host, scope, frag);
      }
    }
  };
}

/**
 * Check for element directives (custom elements that should
 * be resovled as terminal directives).
 *
 * @param {Element} el
 * @param {Object} options
 */

function checkElementDirectives(el, options) {
  var tag = el.tagName.toLowerCase();
  if (commonTagRE.test(tag)) {
    return;
  }
  var def = resolveAsset(options, 'elementDirectives', tag);
  if (def) {
    return makeTerminalNodeLinkFn(el, tag, '', options, def);
  }
}

/**
 * Check if an element is a component. If yes, return
 * a component link function.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Function|undefined}
 */

function checkComponent(el, options) {
  var component = checkComponentAttr(el, options);
  if (component) {
    var ref = findRef(el);
    var descriptor = {
      name: 'component',
      ref: ref,
      expression: component.id,
      def: internalDirectives.component,
      modifiers: {
        literal: !component.dynamic
      }
    };
    var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
      if (ref) {
        defineReactive((scope || vm).$refs, ref, null);
      }
      vm._bindDir(descriptor, el, host, scope, frag);
    };
    componentLinkFn.terminal = true;
    return componentLinkFn;
  }
}

/**
 * Check an element for terminal directives in fixed order.
 * If it finds one, return a terminal link function.
 *
 * @param {Element} el
 * @param {Array} attrs
 * @param {Object} options
 * @return {Function} terminalLinkFn
 */

function checkTerminalDirectives(el, attrs, options) {
  // skip v-pre
  if (getAttr(el, 'v-pre') !== null) {
    return skip;
  }
  // skip v-else block, but only if following v-if
  if (el.hasAttribute('v-else')) {
    var prev = el.previousElementSibling;
    if (prev && prev.hasAttribute('v-if')) {
      return skip;
    }
  }

  var attr, name, value, modifiers, matched, dirName, rawName, arg, def, termDef;
  for (var i = 0, j = attrs.length; i < j; i++) {
    attr = attrs[i];
    name = attr.name.replace(modifierRE, '');
    if (matched = name.match(dirAttrRE)) {
      def = resolveAsset(options, 'directives', matched[1]);
      if (def && def.terminal) {
        if (!termDef || (def.priority || DEFAULT_TERMINAL_PRIORITY) > termDef.priority) {
          termDef = def;
          rawName = attr.name;
          modifiers = parseModifiers(attr.name);
          value = attr.value;
          dirName = matched[1];
          arg = matched[2];
        }
      }
    }
  }

  if (termDef) {
    return makeTerminalNodeLinkFn(el, dirName, value, options, termDef, rawName, arg, modifiers);
  }
}

function skip() {}
skip.terminal = true;

/**
 * Build a node link function for a terminal directive.
 * A terminal link function terminates the current
 * compilation recursion and handles compilation of the
 * subtree in the directive.
 *
 * @param {Element} el
 * @param {String} dirName
 * @param {String} value
 * @param {Object} options
 * @param {Object} def
 * @param {String} [rawName]
 * @param {String} [arg]
 * @param {Object} [modifiers]
 * @return {Function} terminalLinkFn
 */

function makeTerminalNodeLinkFn(el, dirName, value, options, def, rawName, arg, modifiers) {
  var parsed = parseDirective(value);
  var descriptor = {
    name: dirName,
    arg: arg,
    expression: parsed.expression,
    filters: parsed.filters,
    raw: value,
    attr: rawName,
    modifiers: modifiers,
    def: def
  };
  // check ref for v-for and router-view
  if (dirName === 'for' || dirName === 'router-view') {
    descriptor.ref = findRef(el);
  }
  var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
    if (descriptor.ref) {
      defineReactive((scope || vm).$refs, descriptor.ref, null);
    }
    vm._bindDir(descriptor, el, host, scope, frag);
  };
  fn.terminal = true;
  return fn;
}

/**
 * Compile the directives on an element and return a linker.
 *
 * @param {Array|NamedNodeMap} attrs
 * @param {Object} options
 * @return {Function}
 */

function compileDirectives(attrs, options) {
  var i = attrs.length;
  var dirs = [];
  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens, matched;
  while (i--) {
    attr = attrs[i];
    name = rawName = attr.name;
    value = rawValue = attr.value;
    tokens = parseText(value);
    // reset arg
    arg = null;
    // check modifiers
    modifiers = parseModifiers(name);
    name = name.replace(modifierRE, '');

    // attribute interpolations
    if (tokens) {
      value = tokensToExp(tokens);
      arg = name;
      pushDir('bind', directives.bind, tokens);
      // warn against mixing mustaches with v-bind
      if (process.env.NODE_ENV !== 'production') {
        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
          return attr.name === ':class' || attr.name === 'v-bind:class';
        })) {
          warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.', options);
        }
      }
    } else

      // special attribute: transition
      if (transitionRE.test(name)) {
        modifiers.literal = !bindRE.test(name);
        pushDir('transition', internalDirectives.transition);
      } else

        // event handlers
        if (onRE.test(name)) {
          arg = name.replace(onRE, '');
          pushDir('on', directives.on);
        } else

          // attribute bindings
          if (bindRE.test(name)) {
            dirName = name.replace(bindRE, '');
            if (dirName === 'style' || dirName === 'class') {
              pushDir(dirName, internalDirectives[dirName]);
            } else {
              arg = dirName;
              pushDir('bind', directives.bind);
            }
          } else

            // normal directives
            if (matched = name.match(dirAttrRE)) {
              dirName = matched[1];
              arg = matched[2];

              // skip v-else (when used with v-show)
              if (dirName === 'else') {
                continue;
              }

              dirDef = resolveAsset(options, 'directives', dirName, true);
              if (dirDef) {
                pushDir(dirName, dirDef);
              }
            }
  }

  /**
   * Push a directive.
   *
   * @param {String} dirName
   * @param {Object|Function} def
   * @param {Array} [interpTokens]
   */

  function pushDir(dirName, def, interpTokens) {
    var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
    var parsed = !hasOneTimeToken && parseDirective(value);
    dirs.push({
      name: dirName,
      attr: rawName,
      raw: rawValue,
      def: def,
      arg: arg,
      modifiers: modifiers,
      // conversion from interpolation strings with one-time token
      // to expression is differed until directive bind time so that we
      // have access to the actual vm context for one-time bindings.
      expression: parsed && parsed.expression,
      filters: parsed && parsed.filters,
      interp: interpTokens,
      hasOneTime: hasOneTimeToken
    });
  }

  if (dirs.length) {
    return makeNodeLinkFn(dirs);
  }
}

/**
 * Parse modifiers from directive attribute name.
 *
 * @param {String} name
 * @return {Object}
 */

function parseModifiers(name) {
  var res = Object.create(null);
  var match = name.match(modifierRE);
  if (match) {
    var i = match.length;
    while (i--) {
      res[match[i].slice(1)] = true;
    }
  }
  return res;
}

/**
 * Build a link function for all directives on a single node.
 *
 * @param {Array} directives
 * @return {Function} directivesLinkFn
 */

function makeNodeLinkFn(directives) {
  return function nodeLinkFn(vm, el, host, scope, frag) {
    // reverse apply because it's sorted low to high
    var i = directives.length;
    while (i--) {
      vm._bindDir(directives[i], el, host, scope, frag);
    }
  };
}

/**
 * Check if an interpolation string contains one-time tokens.
 *
 * @param {Array} tokens
 * @return {Boolean}
 */

function hasOneTime(tokens) {
  var i = tokens.length;
  while (i--) {
    if (tokens[i].oneTime) return true;
  }
}

function isScript(el) {
  return el.tagName === 'SCRIPT' && (!el.hasAttribute('type') || el.getAttribute('type') === 'text/javascript');
}

var specialCharRE = /[^\w\-:\.]/;

/**
 * Process an element or a DocumentFragment based on a
 * instance option object. This allows us to transclude
 * a template node/fragment before the instance is created,
 * so the processed fragment can then be cloned and reused
 * in v-for.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Element|DocumentFragment}
 */

function transclude(el, options) {
  // extract container attributes to pass them down
  // to compiler, because they need to be compiled in
  // parent scope. we are mutating the options object here
  // assuming the same object will be used for compile
  // right after this.
  if (options) {
    options._containerAttrs = extractAttrs(el);
  }
  // for template tags, what we want is its content as
  // a documentFragment (for fragment instances)
  if (isTemplate(el)) {
    el = parseTemplate(el);
  }
  if (options) {
    if (options._asComponent && !options.template) {
      options.template = '<slot></slot>';
    }
    if (options.template) {
      options._content = extractContent(el);
      el = transcludeTemplate(el, options);
    }
  }
  if (isFragment(el)) {
    // anchors for fragment instance
    // passing in `persist: true` to avoid them being
    // discarded by IE during template cloning
    prepend(createAnchor('v-start', true), el);
    el.appendChild(createAnchor('v-end', true));
  }
  return el;
}

/**
 * Process the template option.
 * If the replace option is true this will swap the $el.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Element|DocumentFragment}
 */

function transcludeTemplate(el, options) {
  var template = options.template;
  var frag = parseTemplate(template, true);
  if (frag) {
    var replacer = frag.firstChild;
    var tag = replacer.tagName && replacer.tagName.toLowerCase();
    if (options.replace) {
      /* istanbul ignore if */
      if (el === document.body) {
        process.env.NODE_ENV !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
      }
      // there are many cases where the instance must
      // become a fragment instance: basically anything that
      // can create more than 1 root nodes.
      if (
      // multi-children template
      frag.childNodes.length > 1 ||
      // non-element template
      replacer.nodeType !== 1 ||
      // single nested component
      tag === 'component' || resolveAsset(options, 'components', tag) || hasBindAttr(replacer, 'is') ||
      // element directive
      resolveAsset(options, 'elementDirectives', tag) ||
      // for block
      replacer.hasAttribute('v-for') ||
      // if block
      replacer.hasAttribute('v-if')) {
        return frag;
      } else {
        options._replacerAttrs = extractAttrs(replacer);
        mergeAttrs(el, replacer);
        return replacer;
      }
    } else {
      el.appendChild(frag);
      return el;
    }
  } else {
    process.env.NODE_ENV !== 'production' && warn('Invalid template option: ' + template);
  }
}

/**
 * Helper to extract a component container's attributes
 * into a plain object array.
 *
 * @param {Element} el
 * @return {Array}
 */

function extractAttrs(el) {
  if (el.nodeType === 1 && el.hasAttributes()) {
    return toArray(el.attributes);
  }
}

/**
 * Merge the attributes of two elements, and make sure
 * the class names are merged properly.
 *
 * @param {Element} from
 * @param {Element} to
 */

function mergeAttrs(from, to) {
  var attrs = from.attributes;
  var i = attrs.length;
  var name, value;
  while (i--) {
    name = attrs[i].name;
    value = attrs[i].value;
    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
      to.setAttribute(name, value);
    } else if (name === 'class' && !parseText(value) && (value = value.trim())) {
      value.split(/\s+/).forEach(function (cls) {
        addClass(to, cls);
      });
    }
  }
}

/**
 * Scan and determine slot content distribution.
 * We do this during transclusion instead at compile time so that
 * the distribution is decoupled from the compilation order of
 * the slots.
 *
 * @param {Element|DocumentFragment} template
 * @param {Element} content
 * @param {Vue} vm
 */

function resolveSlots(vm, content) {
  if (!content) {
    return;
  }
  var contents = vm._slotContents = Object.create(null);
  var el, name;
  for (var i = 0, l = content.children.length; i < l; i++) {
    el = content.children[i];
    /* eslint-disable no-cond-assign */
    if (name = el.getAttribute('slot')) {
      (contents[name] || (contents[name] = [])).push(el);
    }
    /* eslint-enable no-cond-assign */
    if (process.env.NODE_ENV !== 'production' && getBindAttr(el, 'slot')) {
      warn('The "slot" attribute must be static.', vm.$parent);
    }
  }
  for (name in contents) {
    contents[name] = extractFragment(contents[name], content);
  }
  if (content.hasChildNodes()) {
    var nodes = content.childNodes;
    if (nodes.length === 1 && nodes[0].nodeType === 3 && !nodes[0].data.trim()) {
      return;
    }
    contents['default'] = extractFragment(content.childNodes, content);
  }
}

/**
 * Extract qualified content nodes from a node list.
 *
 * @param {NodeList} nodes
 * @return {DocumentFragment}
 */

function extractFragment(nodes, parent) {
  var frag = document.createDocumentFragment();
  nodes = toArray(nodes);
  for (var i = 0, l = nodes.length; i < l; i++) {
    var node = nodes[i];
    if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
      parent.removeChild(node);
      node = parseTemplate(node, true);
    }
    frag.appendChild(node);
  }
  return frag;
}



var compiler = Object.freeze({
	compile: compile,
	compileAndLinkProps: compileAndLinkProps,
	compileRoot: compileRoot,
	transclude: transclude,
	resolveSlots: resolveSlots
});

function stateMixin (Vue) {
  /**
   * Accessor for `$data` property, since setting $data
   * requires observing the new object and updating
   * proxied properties.
   */

  Object.defineProperty(Vue.prototype, '$data', {
    get: function get() {
      return this._data;
    },
    set: function set(newData) {
      if (newData !== this._data) {
        this._setData(newData);
      }
    }
  });

  /**
   * Setup the scope of an instance, which contains:
   * - observed data
   * - computed properties
   * - user methods
   * - meta properties
   */

  Vue.prototype._initState = function () {
    this._initProps();
    this._initMeta();
    this._initMethods();
    this._initData();
    this._initComputed();
  };

  /**
   * Initialize props.
   */

  Vue.prototype._initProps = function () {
    var options = this.$options;
    var el = options.el;
    var props = options.props;
    if (props && !el) {
      process.env.NODE_ENV !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.', this);
    }
    // make sure to convert string selectors into element now
    el = options.el = query(el);
    this._propsUnlinkFn = el && el.nodeType === 1 && props
    // props must be linked in proper scope if inside v-for
    ? compileAndLinkProps(this, el, props, this._scope) : null;
  };

  /**
   * Initialize the data.
   */

  Vue.prototype._initData = function () {
    var dataFn = this.$options.data;
    var data = this._data = dataFn ? dataFn() : {};
    if (!isPlainObject(data)) {
      data = {};
      process.env.NODE_ENV !== 'production' && warn('data functions should return an object.', this);
    }
    var props = this._props;
    // proxy data on instance
    var keys = Object.keys(data);
    var i, key;
    i = keys.length;
    while (i--) {
      key = keys[i];
      // there are two scenarios where we can proxy a data key:
      // 1. it's not already defined as a prop
      // 2. it's provided via a instantiation option AND there are no
      //    template prop present
      if (!props || !hasOwn(props, key)) {
        this._proxy(key);
      } else if (process.env.NODE_ENV !== 'production') {
        warn('Data field "' + key + '" is already defined ' + 'as a prop. To provide default value for a prop, use the "default" ' + 'prop option; if you want to pass prop values to an instantiation ' + 'call, use the "propsData" option.', this);
      }
    }
    // observe data
    observe(data, this);
  };

  /**
   * Swap the instance's $data. Called in $data's setter.
   *
   * @param {Object} newData
   */

  Vue.prototype._setData = function (newData) {
    newData = newData || {};
    var oldData = this._data;
    this._data = newData;
    var keys, key, i;
    // unproxy keys not present in new data
    keys = Object.keys(oldData);
    i = keys.length;
    while (i--) {
      key = keys[i];
      if (!(key in newData)) {
        this._unproxy(key);
      }
    }
    // proxy keys not already proxied,
    // and trigger change for changed values
    keys = Object.keys(newData);
    i = keys.length;
    while (i--) {
      key = keys[i];
      if (!hasOwn(this, key)) {
        // new property
        this._proxy(key);
      }
    }
    oldData.__ob__.removeVm(this);
    observe(newData, this);
    this._digest();
  };

  /**
   * Proxy a property, so that
   * vm.prop === vm._data.prop
   *
   * @param {String} key
   */

  Vue.prototype._proxy = function (key) {
    if (!isReserved(key)) {
      // need to store ref to self here
      // because these getter/setters might
      // be called by child scopes via
      // prototype inheritance.
      var self = this;
      Object.defineProperty(self, key, {
        configurable: true,
        enumerable: true,
        get: function proxyGetter() {
          return self._data[key];
        },
        set: function proxySetter(val) {
          self._data[key] = val;
        }
      });
    }
  };

  /**
   * Unproxy a property.
   *
   * @param {String} key
   */

  Vue.prototype._unproxy = function (key) {
    if (!isReserved(key)) {
      delete this[key];
    }
  };

  /**
   * Force update on every watcher in scope.
   */

  Vue.prototype._digest = function () {
    for (var i = 0, l = this._watchers.length; i < l; i++) {
      this._watchers[i].update(true); // shallow updates
    }
  };

  /**
   * Setup computed properties. They are essentially
   * special getter/setters
   */

  function noop() {}
  Vue.prototype._initComputed = function () {
    var computed = this.$options.computed;
    if (computed) {
      for (var key in computed) {
        var userDef = computed[key];
        var def = {
          enumerable: true,
          configurable: true
        };
        if (typeof userDef === 'function') {
          def.get = makeComputedGetter(userDef, this);
          def.set = noop;
        } else {
          def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind(userDef.get, this) : noop;
          def.set = userDef.set ? bind(userDef.set, this) : noop;
        }
        Object.defineProperty(this, key, def);
      }
    }
  };

  function makeComputedGetter(getter, owner) {
    var watcher = new Watcher(owner, getter, null, {
      lazy: true
    });
    return function computedGetter() {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value;
    };
  }

  /**
   * Setup instance methods. Methods must be bound to the
   * instance since they might be passed down as a prop to
   * child components.
   */

  Vue.prototype._initMethods = function () {
    var methods = this.$options.methods;
    if (methods) {
      for (var key in methods) {
        this[key] = bind(methods[key], this);
      }
    }
  };

  /**
   * Initialize meta information like $index, $key & $value.
   */

  Vue.prototype._initMeta = function () {
    var metas = this.$options._meta;
    if (metas) {
      for (var key in metas) {
        defineReactive(this, key, metas[key]);
      }
    }
  };
}

var eventRE = /^v-on:|^@/;

function eventsMixin (Vue) {
  /**
   * Setup the instance's option events & watchers.
   * If the value is a string, we pull it from the
   * instance's methods by name.
   */

  Vue.prototype._initEvents = function () {
    var options = this.$options;
    if (options._asComponent) {
      registerComponentEvents(this, options.el);
    }
    registerCallbacks(this, '$on', options.events);
    registerCallbacks(this, '$watch', options.watch);
  };

  /**
   * Register v-on events on a child component
   *
   * @param {Vue} vm
   * @param {Element} el
   */

  function registerComponentEvents(vm, el) {
    var attrs = el.attributes;
    var name, value, handler;
    for (var i = 0, l = attrs.length; i < l; i++) {
      name = attrs[i].name;
      if (eventRE.test(name)) {
        name = name.replace(eventRE, '');
        // force the expression into a statement so that
        // it always dynamically resolves the method to call (#2670)
        // kinda ugly hack, but does the job.
        value = attrs[i].value;
        if (isSimplePath(value)) {
          value += '.apply(this, $arguments)';
        }
        handler = (vm._scope || vm._context).$eval(value, true);
        handler._fromParent = true;
        vm.$on(name.replace(eventRE), handler);
      }
    }
  }

  /**
   * Register callbacks for option events and watchers.
   *
   * @param {Vue} vm
   * @param {String} action
   * @param {Object} hash
   */

  function registerCallbacks(vm, action, hash) {
    if (!hash) return;
    var handlers, key, i, j;
    for (key in hash) {
      handlers = hash[key];
      if (isArray(handlers)) {
        for (i = 0, j = handlers.length; i < j; i++) {
          register(vm, action, key, handlers[i]);
        }
      } else {
        register(vm, action, key, handlers);
      }
    }
  }

  /**
   * Helper to register an event/watch callback.
   *
   * @param {Vue} vm
   * @param {String} action
   * @param {String} key
   * @param {Function|String|Object} handler
   * @param {Object} [options]
   */

  function register(vm, action, key, handler, options) {
    var type = typeof handler;
    if (type === 'function') {
      vm[action](key, handler, options);
    } else if (type === 'string') {
      var methods = vm.$options.methods;
      var method = methods && methods[handler];
      if (method) {
        vm[action](key, method, options);
      } else {
        process.env.NODE_ENV !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".', vm);
      }
    } else if (handler && type === 'object') {
      register(vm, action, key, handler.handler, handler);
    }
  }

  /**
   * Setup recursive attached/detached calls
   */

  Vue.prototype._initDOMHooks = function () {
    this.$on('hook:attached', onAttached);
    this.$on('hook:detached', onDetached);
  };

  /**
   * Callback to recursively call attached hook on children
   */

  function onAttached() {
    if (!this._isAttached) {
      this._isAttached = true;
      this.$children.forEach(callAttach);
    }
  }

  /**
   * Iterator to call attached hook
   *
   * @param {Vue} child
   */

  function callAttach(child) {
    if (!child._isAttached && inDoc(child.$el)) {
      child._callHook('attached');
    }
  }

  /**
   * Callback to recursively call detached hook on children
   */

  function onDetached() {
    if (this._isAttached) {
      this._isAttached = false;
      this.$children.forEach(callDetach);
    }
  }

  /**
   * Iterator to call detached hook
   *
   * @param {Vue} child
   */

  function callDetach(child) {
    if (child._isAttached && !inDoc(child.$el)) {
      child._callHook('detached');
    }
  }

  /**
   * Trigger all handlers for a hook
   *
   * @param {String} hook
   */

  Vue.prototype._callHook = function (hook) {
    this.$emit('pre-hook:' + hook);
    var handlers = this.$options[hook];
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        handlers[i].call(this);
      }
    }
    this.$emit('hook:' + hook);
  };
}

function noop$1() {}

/**
 * A directive links a DOM element with a piece of data,
 * which is the result of evaluating an expression.
 * It registers a watcher with the expression and calls
 * the DOM update function when a change is triggered.
 *
 * @param {Object} descriptor
 *                 - {String} name
 *                 - {Object} def
 *                 - {String} expression
 *                 - {Array<Object>} [filters]
 *                 - {Object} [modifiers]
 *                 - {Boolean} literal
 *                 - {String} attr
 *                 - {String} arg
 *                 - {String} raw
 *                 - {String} [ref]
 *                 - {Array<Object>} [interp]
 *                 - {Boolean} [hasOneTime]
 * @param {Vue} vm
 * @param {Node} el
 * @param {Vue} [host] - transclusion host component
 * @param {Object} [scope] - v-for scope
 * @param {Fragment} [frag] - owner fragment
 * @constructor
 */
function Directive(descriptor, vm, el, host, scope, frag) {
  this.vm = vm;
  this.el = el;
  // copy descriptor properties
  this.descriptor = descriptor;
  this.name = descriptor.name;
  this.expression = descriptor.expression;
  this.arg = descriptor.arg;
  this.modifiers = descriptor.modifiers;
  this.filters = descriptor.filters;
  this.literal = this.modifiers && this.modifiers.literal;
  // private
  this._locked = false;
  this._bound = false;
  this._listeners = null;
  // link context
  this._host = host;
  this._scope = scope;
  this._frag = frag;
  // store directives on node in dev mode
  if (process.env.NODE_ENV !== 'production' && this.el) {
    this.el._vue_directives = this.el._vue_directives || [];
    this.el._vue_directives.push(this);
  }
}

/**
 * Initialize the directive, mixin definition properties,
 * setup the watcher, call definition bind() and update()
 * if present.
 */

Directive.prototype._bind = function () {
  var name = this.name;
  var descriptor = this.descriptor;

  // remove attribute
  if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
    var attr = descriptor.attr || 'v-' + name;
    this.el.removeAttribute(attr);
  }

  // copy def properties
  var def = descriptor.def;
  if (typeof def === 'function') {
    this.update = def;
  } else {
    extend(this, def);
  }

  // setup directive params
  this._setupParams();

  // initial bind
  if (this.bind) {
    this.bind();
  }
  this._bound = true;

  if (this.literal) {
    this.update && this.update(descriptor.raw);
  } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
    // wrapped updater for context
    var dir = this;
    if (this.update) {
      this._update = function (val, oldVal) {
        if (!dir._locked) {
          dir.update(val, oldVal);
        }
      };
    } else {
      this._update = noop$1;
    }
    var preProcess = this._preProcess ? bind(this._preProcess, this) : null;
    var postProcess = this._postProcess ? bind(this._postProcess, this) : null;
    var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
    {
      filters: this.filters,
      twoWay: this.twoWay,
      deep: this.deep,
      preProcess: preProcess,
      postProcess: postProcess,
      scope: this._scope
    });
    // v-model with inital inline value need to sync back to
    // model instead of update to DOM on init. They would
    // set the afterBind hook to indicate that.
    if (this.afterBind) {
      this.afterBind();
    } else if (this.update) {
      this.update(watcher.value);
    }
  }
};

/**
 * Setup all param attributes, e.g. track-by,
 * transition-mode, etc...
 */

Directive.prototype._setupParams = function () {
  if (!this.params) {
    return;
  }
  var params = this.params;
  // swap the params array with a fresh object.
  this.params = Object.create(null);
  var i = params.length;
  var key, val, mappedKey;
  while (i--) {
    key = hyphenate(params[i]);
    mappedKey = camelize(key);
    val = getBindAttr(this.el, key);
    if (val != null) {
      // dynamic
      this._setupParamWatcher(mappedKey, val);
    } else {
      // static
      val = getAttr(this.el, key);
      if (val != null) {
        this.params[mappedKey] = val === '' ? true : val;
      }
    }
  }
};

/**
 * Setup a watcher for a dynamic param.
 *
 * @param {String} key
 * @param {String} expression
 */

Directive.prototype._setupParamWatcher = function (key, expression) {
  var self = this;
  var called = false;
  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
    self.params[key] = val;
    // since we are in immediate mode,
    // only call the param change callbacks if this is not the first update.
    if (called) {
      var cb = self.paramWatchers && self.paramWatchers[key];
      if (cb) {
        cb.call(self, val, oldVal);
      }
    } else {
      called = true;
    }
  }, {
    immediate: true,
    user: false
  });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
};

/**
 * Check if the directive is a function caller
 * and if the expression is a callable one. If both true,
 * we wrap up the expression and use it as the event
 * handler.
 *
 * e.g. on-click="a++"
 *
 * @return {Boolean}
 */

Directive.prototype._checkStatement = function () {
  var expression = this.expression;
  if (expression && this.acceptStatement && !isSimplePath(expression)) {
    var fn = parseExpression(expression).get;
    var scope = this._scope || this.vm;
    var handler = function handler(e) {
      scope.$event = e;
      fn.call(scope, scope);
      scope.$event = null;
    };
    if (this.filters) {
      handler = scope._applyFilters(handler, null, this.filters);
    }
    this.update(handler);
    return true;
  }
};

/**
 * Set the corresponding value with the setter.
 * This should only be used in two-way directives
 * e.g. v-model.
 *
 * @param {*} value
 * @public
 */

Directive.prototype.set = function (value) {
  /* istanbul ignore else */
  if (this.twoWay) {
    this._withLock(function () {
      this._watcher.set(value);
    });
  } else if (process.env.NODE_ENV !== 'production') {
    warn('Directive.set() can only be used inside twoWay' + 'directives.');
  }
};

/**
 * Execute a function while preventing that function from
 * triggering updates on this directive instance.
 *
 * @param {Function} fn
 */

Directive.prototype._withLock = function (fn) {
  var self = this;
  self._locked = true;
  fn.call(self);
  nextTick(function () {
    self._locked = false;
  });
};

/**
 * Convenience method that attaches a DOM event listener
 * to the directive element and autometically tears it down
 * during unbind.
 *
 * @param {String} event
 * @param {Function} handler
 * @param {Boolean} [useCapture]
 */

Directive.prototype.on = function (event, handler, useCapture) {
  on(this.el, event, handler, useCapture);(this._listeners || (this._listeners = [])).push([event, handler]);
};

/**
 * Teardown the watcher and call unbind.
 */

Directive.prototype._teardown = function () {
  if (this._bound) {
    this._bound = false;
    if (this.unbind) {
      this.unbind();
    }
    if (this._watcher) {
      this._watcher.teardown();
    }
    var listeners = this._listeners;
    var i;
    if (listeners) {
      i = listeners.length;
      while (i--) {
        off(this.el, listeners[i][0], listeners[i][1]);
      }
    }
    var unwatchFns = this._paramUnwatchFns;
    if (unwatchFns) {
      i = unwatchFns.length;
      while (i--) {
        unwatchFns[i]();
      }
    }
    if (process.env.NODE_ENV !== 'production' && this.el) {
      this.el._vue_directives.$remove(this);
    }
    this.vm = this.el = this._watcher = this._listeners = null;
  }
};

function lifecycleMixin (Vue) {
  /**
   * Update v-ref for component.
   *
   * @param {Boolean} remove
   */

  Vue.prototype._updateRef = function (remove) {
    var ref = this.$options._ref;
    if (ref) {
      var refs = (this._scope || this._context).$refs;
      if (remove) {
        if (refs[ref] === this) {
          refs[ref] = null;
        }
      } else {
        refs[ref] = this;
      }
    }
  };

  /**
   * Transclude, compile and link element.
   *
   * If a pre-compiled linker is available, that means the
   * passed in element will be pre-transcluded and compiled
   * as well - all we need to do is to call the linker.
   *
   * Otherwise we need to call transclude/compile/link here.
   *
   * @param {Element} el
   */

  Vue.prototype._compile = function (el) {
    var options = this.$options;

    // transclude and init element
    // transclude can potentially replace original
    // so we need to keep reference; this step also injects
    // the template and caches the original attributes
    // on the container node and replacer node.
    var original = el;
    el = transclude(el, options);
    this._initElement(el);

    // handle v-pre on root node (#2026)
    if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
      return;
    }

    // root is always compiled per-instance, because
    // container attrs and props can be different every time.
    var contextOptions = this._context && this._context.$options;
    var rootLinker = compileRoot(el, options, contextOptions);

    // resolve slot distribution
    resolveSlots(this, options._content);

    // compile and link the rest
    var contentLinkFn;
    var ctor = this.constructor;
    // component compilation can be cached
    // as long as it's not using inline-template
    if (options._linkerCachable) {
      contentLinkFn = ctor.linker;
      if (!contentLinkFn) {
        contentLinkFn = ctor.linker = compile(el, options);
      }
    }

    // link phase
    // make sure to link root with prop scope!
    var rootUnlinkFn = rootLinker(this, el, this._scope);
    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);

    // register composite unlink function
    // to be called during instance destruction
    this._unlinkFn = function () {
      rootUnlinkFn();
      // passing destroying: true to avoid searching and
      // splicing the directives
      contentUnlinkFn(true);
    };

    // finally replace original
    if (options.replace) {
      replace(original, el);
    }

    this._isCompiled = true;
    this._callHook('compiled');
  };

  /**
   * Initialize instance element. Called in the public
   * $mount() method.
   *
   * @param {Element} el
   */

  Vue.prototype._initElement = function (el) {
    if (isFragment(el)) {
      this._isFragment = true;
      this.$el = this._fragmentStart = el.firstChild;
      this._fragmentEnd = el.lastChild;
      // set persisted text anchors to empty
      if (this._fragmentStart.nodeType === 3) {
        this._fragmentStart.data = this._fragmentEnd.data = '';
      }
      this._fragment = el;
    } else {
      this.$el = el;
    }
    this.$el.__vue__ = this;
    this._callHook('beforeCompile');
  };

  /**
   * Create and bind a directive to an element.
   *
   * @param {Object} descriptor - parsed directive descriptor
   * @param {Node} node   - target node
   * @param {Vue} [host] - transclusion host component
   * @param {Object} [scope] - v-for scope
   * @param {Fragment} [frag] - owner fragment
   */

  Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
    this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
  };

  /**
   * Teardown an instance, unobserves the data, unbind all the
   * directives, turn off all the event listeners, etc.
   *
   * @param {Boolean} remove - whether to remove the DOM node.
   * @param {Boolean} deferCleanup - if true, defer cleanup to
   *                                 be called later
   */

  Vue.prototype._destroy = function (remove, deferCleanup) {
    if (this._isBeingDestroyed) {
      if (!deferCleanup) {
        this._cleanup();
      }
      return;
    }

    var destroyReady;
    var pendingRemoval;

    var self = this;
    // Cleanup should be called either synchronously or asynchronoysly as
    // callback of this.$remove(), or if remove and deferCleanup are false.
    // In any case it should be called after all other removing, unbinding and
    // turning of is done
    var cleanupIfPossible = function cleanupIfPossible() {
      if (destroyReady && !pendingRemoval && !deferCleanup) {
        self._cleanup();
      }
    };

    // remove DOM element
    if (remove && this.$el) {
      pendingRemoval = true;
      this.$remove(function () {
        pendingRemoval = false;
        cleanupIfPossible();
      });
    }

    this._callHook('beforeDestroy');
    this._isBeingDestroyed = true;
    var i;
    // remove self from parent. only necessary
    // if parent is not being destroyed as well.
    var parent = this.$parent;
    if (parent && !parent._isBeingDestroyed) {
      parent.$children.$remove(this);
      // unregister ref (remove: true)
      this._updateRef(true);
    }
    // destroy all children.
    i = this.$children.length;
    while (i--) {
      this.$children[i].$destroy();
    }
    // teardown props
    if (this._propsUnlinkFn) {
      this._propsUnlinkFn();
    }
    // teardown all directives. this also tearsdown all
    // directive-owned watchers.
    if (this._unlinkFn) {
      this._unlinkFn();
    }
    i = this._watchers.length;
    while (i--) {
      this._watchers[i].teardown();
    }
    // remove reference to self on $el
    if (this.$el) {
      this.$el.__vue__ = null;
    }

    destroyReady = true;
    cleanupIfPossible();
  };

  /**
   * Clean up to ensure garbage collection.
   * This is called after the leave transition if there
   * is any.
   */

  Vue.prototype._cleanup = function () {
    if (this._isDestroyed) {
      return;
    }
    // remove self from owner fragment
    // do it in cleanup so that we can call $destroy with
    // defer right when a fragment is about to be removed.
    if (this._frag) {
      this._frag.children.$remove(this);
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (this._data && this._data.__ob__) {
      this._data.__ob__.removeVm(this);
    }
    // Clean up references to private properties and other
    // instances. preserve reference to _data so that proxy
    // accessors still work. The only potential side effect
    // here is that mutating the instance after it's destroyed
    // may affect the state of other components that are still
    // observing the same object, but that seems to be a
    // reasonable responsibility for the user rather than
    // always throwing an error on them.
    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
    // call the last hook...
    this._isDestroyed = true;
    this._callHook('destroyed');
    // turn off all instance listeners.
    this.$off();
  };
}

function miscMixin (Vue) {
  /**
   * Apply a list of filter (descriptors) to a value.
   * Using plain for loops here because this will be called in
   * the getter of any watcher with filters so it is very
   * performance sensitive.
   *
   * @param {*} value
   * @param {*} [oldValue]
   * @param {Array} filters
   * @param {Boolean} write
   * @return {*}
   */

  Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
    var filter, fn, args, arg, offset, i, l, j, k;
    for (i = 0, l = filters.length; i < l; i++) {
      filter = filters[write ? l - i - 1 : i];
      fn = resolveAsset(this.$options, 'filters', filter.name, true);
      if (!fn) continue;
      fn = write ? fn.write : fn.read || fn;
      if (typeof fn !== 'function') continue;
      args = write ? [value, oldValue] : [value];
      offset = write ? 2 : 1;
      if (filter.args) {
        for (j = 0, k = filter.args.length; j < k; j++) {
          arg = filter.args[j];
          args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
        }
      }
      value = fn.apply(this, args);
    }
    return value;
  };

  /**
   * Resolve a component, depending on whether the component
   * is defined normally or using an async factory function.
   * Resolves synchronously if already resolved, otherwise
   * resolves asynchronously and caches the resolved
   * constructor on the factory.
   *
   * @param {String|Function} value
   * @param {Function} cb
   */

  Vue.prototype._resolveComponent = function (value, cb) {
    var factory;
    if (typeof value === 'function') {
      factory = value;
    } else {
      factory = resolveAsset(this.$options, 'components', value, true);
    }
    /* istanbul ignore if */
    if (!factory) {
      return;
    }
    // async component factory
    if (!factory.options) {
      if (factory.resolved) {
        // cached
        cb(factory.resolved);
      } else if (factory.requested) {
        // pool callbacks
        factory.pendingCallbacks.push(cb);
      } else {
        factory.requested = true;
        var cbs = factory.pendingCallbacks = [cb];
        factory.call(this, function resolve(res) {
          if (isPlainObject(res)) {
            res = Vue.extend(res);
          }
          // cache resolved
          factory.resolved = res;
          // invoke callbacks
          for (var i = 0, l = cbs.length; i < l; i++) {
            cbs[i](res);
          }
        }, function reject(reason) {
          process.env.NODE_ENV !== 'production' && warn('Failed to resolve async component' + (typeof value === 'string' ? ': ' + value : '') + '. ' + (reason ? '\nReason: ' + reason : ''));
        });
      }
    } else {
      // normal component
      cb(factory);
    }
  };
}

var filterRE$1 = /[^|]\|[^|]/;

function dataAPI (Vue) {
  /**
   * Get the value from an expression on this vm.
   *
   * @param {String} exp
   * @param {Boolean} [asStatement]
   * @return {*}
   */

  Vue.prototype.$get = function (exp, asStatement) {
    var res = parseExpression(exp);
    if (res) {
      if (asStatement) {
        var self = this;
        return function statementHandler() {
          self.$arguments = toArray(arguments);
          var result = res.get.call(self, self);
          self.$arguments = null;
          return result;
        };
      } else {
        try {
          return res.get.call(this, this);
        } catch (e) {}
      }
    }
  };

  /**
   * Set the value from an expression on this vm.
   * The expression must be a valid left-hand
   * expression in an assignment.
   *
   * @param {String} exp
   * @param {*} val
   */

  Vue.prototype.$set = function (exp, val) {
    var res = parseExpression(exp, true);
    if (res && res.set) {
      res.set.call(this, this, val);
    }
  };

  /**
   * Delete a property on the VM
   *
   * @param {String} key
   */

  Vue.prototype.$delete = function (key) {
    del(this._data, key);
  };

  /**
   * Watch an expression, trigger callback when its
   * value changes.
   *
   * @param {String|Function} expOrFn
   * @param {Function} cb
   * @param {Object} [options]
   *                 - {Boolean} deep
   *                 - {Boolean} immediate
   * @return {Function} - unwatchFn
   */

  Vue.prototype.$watch = function (expOrFn, cb, options) {
    var vm = this;
    var parsed;
    if (typeof expOrFn === 'string') {
      parsed = parseDirective(expOrFn);
      expOrFn = parsed.expression;
    }
    var watcher = new Watcher(vm, expOrFn, cb, {
      deep: options && options.deep,
      sync: options && options.sync,
      filters: parsed && parsed.filters,
      user: !options || options.user !== false
    });
    if (options && options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn() {
      watcher.teardown();
    };
  };

  /**
   * Evaluate a text directive, including filters.
   *
   * @param {String} text
   * @param {Boolean} [asStatement]
   * @return {String}
   */

  Vue.prototype.$eval = function (text, asStatement) {
    // check for filters.
    if (filterRE$1.test(text)) {
      var dir = parseDirective(text);
      // the filter regex check might give false positive
      // for pipes inside strings, so it's possible that
      // we don't get any filters here
      var val = this.$get(dir.expression, asStatement);
      return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
    } else {
      // no filter
      return this.$get(text, asStatement);
    }
  };

  /**
   * Interpolate a piece of template text.
   *
   * @param {String} text
   * @return {String}
   */

  Vue.prototype.$interpolate = function (text) {
    var tokens = parseText(text);
    var vm = this;
    if (tokens) {
      if (tokens.length === 1) {
        return vm.$eval(tokens[0].value) + '';
      } else {
        return tokens.map(function (token) {
          return token.tag ? vm.$eval(token.value) : token.value;
        }).join('');
      }
    } else {
      return text;
    }
  };

  /**
   * Log instance data as a plain JS object
   * so that it is easier to inspect in console.
   * This method assumes console is available.
   *
   * @param {String} [path]
   */

  Vue.prototype.$log = function (path) {
    var data = path ? getPath(this._data, path) : this._data;
    if (data) {
      data = clean(data);
    }
    // include computed fields
    if (!path) {
      var key;
      for (key in this.$options.computed) {
        data[key] = clean(this[key]);
      }
      if (this._props) {
        for (key in this._props) {
          data[key] = clean(this[key]);
        }
      }
    }
    console.log(data);
  };

  /**
   * "clean" a getter/setter converted object into a plain
   * object copy.
   *
   * @param {Object} - obj
   * @return {Object}
   */

  function clean(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
}

function domAPI (Vue) {
  /**
   * Convenience on-instance nextTick. The callback is
   * auto-bound to the instance, and this avoids component
   * modules having to rely on the global Vue.
   *
   * @param {Function} fn
   */

  Vue.prototype.$nextTick = function (fn) {
    nextTick(fn, this);
  };

  /**
   * Append instance to target
   *
   * @param {Node} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$appendTo = function (target, cb, withTransition) {
    return insert(this, target, cb, withTransition, append, appendWithTransition);
  };

  /**
   * Prepend instance to target
   *
   * @param {Node} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$prependTo = function (target, cb, withTransition) {
    target = query(target);
    if (target.hasChildNodes()) {
      this.$before(target.firstChild, cb, withTransition);
    } else {
      this.$appendTo(target, cb, withTransition);
    }
    return this;
  };

  /**
   * Insert instance before target
   *
   * @param {Node} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$before = function (target, cb, withTransition) {
    return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
  };

  /**
   * Insert instance after target
   *
   * @param {Node} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$after = function (target, cb, withTransition) {
    target = query(target);
    if (target.nextSibling) {
      this.$before(target.nextSibling, cb, withTransition);
    } else {
      this.$appendTo(target.parentNode, cb, withTransition);
    }
    return this;
  };

  /**
   * Remove instance from DOM
   *
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$remove = function (cb, withTransition) {
    if (!this.$el.parentNode) {
      return cb && cb();
    }
    var inDocument = this._isAttached && inDoc(this.$el);
    // if we are not in document, no need to check
    // for transitions
    if (!inDocument) withTransition = false;
    var self = this;
    var realCb = function realCb() {
      if (inDocument) self._callHook('detached');
      if (cb) cb();
    };
    if (this._isFragment) {
      removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
    } else {
      var op = withTransition === false ? removeWithCb : removeWithTransition;
      op(this.$el, this, realCb);
    }
    return this;
  };

  /**
   * Shared DOM insertion function.
   *
   * @param {Vue} vm
   * @param {Element} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition]
   * @param {Function} op1 - op for non-transition insert
   * @param {Function} op2 - op for transition insert
   * @return vm
   */

  function insert(vm, target, cb, withTransition, op1, op2) {
    target = query(target);
    var targetIsDetached = !inDoc(target);
    var op = withTransition === false || targetIsDetached ? op1 : op2;
    var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
    if (vm._isFragment) {
      mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
        op(node, target, vm);
      });
      cb && cb();
    } else {
      op(vm.$el, target, vm, cb);
    }
    if (shouldCallHook) {
      vm._callHook('attached');
    }
    return vm;
  }

  /**
   * Check for selectors
   *
   * @param {String|Element} el
   */

  function query(el) {
    return typeof el === 'string' ? document.querySelector(el) : el;
  }

  /**
   * Append operation that takes a callback.
   *
   * @param {Node} el
   * @param {Node} target
   * @param {Vue} vm - unused
   * @param {Function} [cb]
   */

  function append(el, target, vm, cb) {
    target.appendChild(el);
    if (cb) cb();
  }

  /**
   * InsertBefore operation that takes a callback.
   *
   * @param {Node} el
   * @param {Node} target
   * @param {Vue} vm - unused
   * @param {Function} [cb]
   */

  function beforeWithCb(el, target, vm, cb) {
    before(el, target);
    if (cb) cb();
  }

  /**
   * Remove operation that takes a callback.
   *
   * @param {Node} el
   * @param {Vue} vm - unused
   * @param {Function} [cb]
   */

  function removeWithCb(el, vm, cb) {
    remove(el);
    if (cb) cb();
  }
}

function eventsAPI (Vue) {
  /**
   * Listen on the given `event` with `fn`.
   *
   * @param {String} event
   * @param {Function} fn
   */

  Vue.prototype.$on = function (event, fn) {
    (this._events[event] || (this._events[event] = [])).push(fn);
    modifyListenerCount(this, event, 1);
    return this;
  };

  /**
   * Adds an `event` listener that will be invoked a single
   * time then automatically removed.
   *
   * @param {String} event
   * @param {Function} fn
   */

  Vue.prototype.$once = function (event, fn) {
    var self = this;
    function on() {
      self.$off(event, on);
      fn.apply(this, arguments);
    }
    on.fn = fn;
    this.$on(event, on);
    return this;
  };

  /**
   * Remove the given callback for `event` or all
   * registered callbacks.
   *
   * @param {String} event
   * @param {Function} fn
   */

  Vue.prototype.$off = function (event, fn) {
    var cbs;
    // all
    if (!arguments.length) {
      if (this.$parent) {
        for (event in this._events) {
          cbs = this._events[event];
          if (cbs) {
            modifyListenerCount(this, event, -cbs.length);
          }
        }
      }
      this._events = {};
      return this;
    }
    // specific event
    cbs = this._events[event];
    if (!cbs) {
      return this;
    }
    if (arguments.length === 1) {
      modifyListenerCount(this, event, -cbs.length);
      this._events[event] = null;
      return this;
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        modifyListenerCount(this, event, -1);
        cbs.splice(i, 1);
        break;
      }
    }
    return this;
  };

  /**
   * Trigger an event on self.
   *
   * @param {String|Object} event
   * @return {Boolean} shouldPropagate
   */

  Vue.prototype.$emit = function (event) {
    var isSource = typeof event === 'string';
    event = isSource ? event : event.name;
    var cbs = this._events[event];
    var shouldPropagate = isSource || !cbs;
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      // this is a somewhat hacky solution to the question raised
      // in #2102: for an inline component listener like <comp @test="doThis">,
      // the propagation handling is somewhat broken. Therefore we
      // need to treat these inline callbacks differently.
      var hasParentCbs = isSource && cbs.some(function (cb) {
        return cb._fromParent;
      });
      if (hasParentCbs) {
        shouldPropagate = false;
      }
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        var cb = cbs[i];
        var res = cb.apply(this, args);
        if (res === true && (!hasParentCbs || cb._fromParent)) {
          shouldPropagate = true;
        }
      }
    }
    return shouldPropagate;
  };

  /**
   * Recursively broadcast an event to all children instances.
   *
   * @param {String|Object} event
   * @param {...*} additional arguments
   */

  Vue.prototype.$broadcast = function (event) {
    var isSource = typeof event === 'string';
    event = isSource ? event : event.name;
    // if no child has registered for this event,
    // then there's no need to broadcast.
    if (!this._eventsCount[event]) return;
    var children = this.$children;
    var args = toArray(arguments);
    if (isSource) {
      // use object event to indicate non-source emit
      // on children
      args[0] = { name: event, source: this };
    }
    for (var i = 0, l = children.length; i < l; i++) {
      var child = children[i];
      var shouldPropagate = child.$emit.apply(child, args);
      if (shouldPropagate) {
        child.$broadcast.apply(child, args);
      }
    }
    return this;
  };

  /**
   * Recursively propagate an event up the parent chain.
   *
   * @param {String} event
   * @param {...*} additional arguments
   */

  Vue.prototype.$dispatch = function (event) {
    var shouldPropagate = this.$emit.apply(this, arguments);
    if (!shouldPropagate) return;
    var parent = this.$parent;
    var args = toArray(arguments);
    // use object event to indicate non-source emit
    // on parents
    args[0] = { name: event, source: this };
    while (parent) {
      shouldPropagate = parent.$emit.apply(parent, args);
      parent = shouldPropagate ? parent.$parent : null;
    }
    return this;
  };

  /**
   * Modify the listener counts on all parents.
   * This bookkeeping allows $broadcast to return early when
   * no child has listened to a certain event.
   *
   * @param {Vue} vm
   * @param {String} event
   * @param {Number} count
   */

  var hookRE = /^hook:/;
  function modifyListenerCount(vm, event, count) {
    var parent = vm.$parent;
    // hooks do not get broadcasted so no need
    // to do bookkeeping for them
    if (!parent || !count || hookRE.test(event)) return;
    while (parent) {
      parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
      parent = parent.$parent;
    }
  }
}

function lifecycleAPI (Vue) {
  /**
   * Set instance target element and kick off the compilation
   * process. The passed in `el` can be a selector string, an
   * existing Element, or a DocumentFragment (for block
   * instances).
   *
   * @param {Element|DocumentFragment|string} el
   * @public
   */

  Vue.prototype.$mount = function (el) {
    if (this._isCompiled) {
      process.env.NODE_ENV !== 'production' && warn('$mount() should be called only once.', this);
      return;
    }
    el = query(el);
    if (!el) {
      el = document.createElement('div');
    }
    this._compile(el);
    this._initDOMHooks();
    if (inDoc(this.$el)) {
      this._callHook('attached');
      ready.call(this);
    } else {
      this.$once('hook:attached', ready);
    }
    return this;
  };

  /**
   * Mark an instance as ready.
   */

  function ready() {
    this._isAttached = true;
    this._isReady = true;
    this._callHook('ready');
  }

  /**
   * Teardown the instance, simply delegate to the internal
   * _destroy.
   *
   * @param {Boolean} remove
   * @param {Boolean} deferCleanup
   */

  Vue.prototype.$destroy = function (remove, deferCleanup) {
    this._destroy(remove, deferCleanup);
  };

  /**
   * Partially compile a piece of DOM and return a
   * decompile function.
   *
   * @param {Element|DocumentFragment} el
   * @param {Vue} [host]
   * @param {Object} [scope]
   * @param {Fragment} [frag]
   * @return {Function}
   */

  Vue.prototype.$compile = function (el, host, scope, frag) {
    return compile(el, this.$options, true)(this, el, host, scope, frag);
  };
}

/**
 * The exposed Vue constructor.
 *
 * API conventions:
 * - public API methods/properties are prefixed with `$`
 * - internal methods/properties are prefixed with `_`
 * - non-prefixed properties are assumed to be proxied user
 *   data.
 *
 * @constructor
 * @param {Object} [options]
 * @public
 */

function Vue(options) {
  this._init(options);
}

// install internals
initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
miscMixin(Vue);

// install instance APIs
dataAPI(Vue);
domAPI(Vue);
eventsAPI(Vue);
lifecycleAPI(Vue);

var slot = {

  priority: SLOT,
  params: ['name'],

  bind: function bind() {
    // this was resolved during component transclusion
    var name = this.params.name || 'default';
    var content = this.vm._slotContents && this.vm._slotContents[name];
    if (!content || !content.hasChildNodes()) {
      this.fallback();
    } else {
      this.compile(content.cloneNode(true), this.vm._context, this.vm);
    }
  },

  compile: function compile(content, context, host) {
    if (content && context) {
      if (this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute('v-if')) {
        // if the inserted slot has v-if
        // inject fallback content as the v-else
        var elseBlock = document.createElement('template');
        elseBlock.setAttribute('v-else', '');
        elseBlock.innerHTML = this.el.innerHTML;
        // the else block should be compiled in child scope
        elseBlock._context = this.vm;
        content.appendChild(elseBlock);
      }
      var scope = host ? host._scope : this._scope;
      this.unlink = context.$compile(content, host, scope, this._frag);
    }
    if (content) {
      replace(this.el, content);
    } else {
      remove(this.el);
    }
  },

  fallback: function fallback() {
    this.compile(extractContent(this.el, true), this.vm);
  },

  unbind: function unbind() {
    if (this.unlink) {
      this.unlink();
    }
  }
};

var partial = {

  priority: PARTIAL,

  params: ['name'],

  // watch changes to name for dynamic partials
  paramWatchers: {
    name: function name(value) {
      vIf.remove.call(this);
      if (value) {
        this.insert(value);
      }
    }
  },

  bind: function bind() {
    this.anchor = createAnchor('v-partial');
    replace(this.el, this.anchor);
    this.insert(this.params.name);
  },

  insert: function insert(id) {
    var partial = resolveAsset(this.vm.$options, 'partials', id, true);
    if (partial) {
      this.factory = new FragmentFactory(this.vm, partial);
      vIf.insert.call(this);
    }
  },

  unbind: function unbind() {
    if (this.frag) {
      this.frag.destroy();
    }
  }
};

var elementDirectives = {
  slot: slot,
  partial: partial
};

var convertArray = vFor._postProcess;

/**
 * Limit filter for arrays
 *
 * @param {Number} n
 * @param {Number} offset (Decimal expected)
 */

function limitBy(arr, n, offset) {
  offset = offset ? parseInt(offset, 10) : 0;
  n = toNumber(n);
  return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
}

/**
 * Filter filter for arrays
 *
 * @param {String} search
 * @param {String} [delimiter]
 * @param {String} ...dataKeys
 */

function filterBy(arr, search, delimiter) {
  arr = convertArray(arr);
  if (search == null) {
    return arr;
  }
  if (typeof search === 'function') {
    return arr.filter(search);
  }
  // cast to lowercase string
  search = ('' + search).toLowerCase();
  // allow optional `in` delimiter
  // because why not
  var n = delimiter === 'in' ? 3 : 2;
  // extract and flatten keys
  var keys = Array.prototype.concat.apply([], toArray(arguments, n));
  var res = [];
  var item, key, val, j;
  for (var i = 0, l = arr.length; i < l; i++) {
    item = arr[i];
    val = item && item.$value || item;
    j = keys.length;
    if (j) {
      while (j--) {
        key = keys[j];
        if (key === '$key' && contains(item.$key, search) || contains(getPath(val, key), search)) {
          res.push(item);
          break;
        }
      }
    } else if (contains(item, search)) {
      res.push(item);
    }
  }
  return res;
}

/**
 * Filter filter for arrays
 *
 * @param {String|Array<String>|Function} ...sortKeys
 * @param {Number} [order]
 */

function orderBy(arr) {
  var comparator = null;
  var sortKeys = undefined;
  arr = convertArray(arr);

  // determine order (last argument)
  var args = toArray(arguments, 1);
  var order = args[args.length - 1];
  if (typeof order === 'number') {
    order = order < 0 ? -1 : 1;
    args = args.length > 1 ? args.slice(0, -1) : args;
  } else {
    order = 1;
  }

  // determine sortKeys & comparator
  var firstArg = args[0];
  if (!firstArg) {
    return arr;
  } else if (typeof firstArg === 'function') {
    // custom comparator
    comparator = function (a, b) {
      return firstArg(a, b) * order;
    };
  } else {
    // string keys. flatten first
    sortKeys = Array.prototype.concat.apply([], args);
    comparator = function (a, b, i) {
      i = i || 0;
      return i >= sortKeys.length - 1 ? baseCompare(a, b, i) : baseCompare(a, b, i) || comparator(a, b, i + 1);
    };
  }

  function baseCompare(a, b, sortKeyIndex) {
    var sortKey = sortKeys[sortKeyIndex];
    if (sortKey) {
      if (sortKey !== '$key') {
        if (isObject(a) && '$value' in a) a = a.$value;
        if (isObject(b) && '$value' in b) b = b.$value;
      }
      a = isObject(a) ? getPath(a, sortKey) : a;
      b = isObject(b) ? getPath(b, sortKey) : b;
    }
    return a === b ? 0 : a > b ? order : -order;
  }

  // sort on a copy to avoid mutating original array
  return arr.slice().sort(comparator);
}

/**
 * String contain helper
 *
 * @param {*} val
 * @param {String} search
 */

function contains(val, search) {
  var i;
  if (isPlainObject(val)) {
    var keys = Object.keys(val);
    i = keys.length;
    while (i--) {
      if (contains(val[keys[i]], search)) {
        return true;
      }
    }
  } else if (isArray(val)) {
    i = val.length;
    while (i--) {
      if (contains(val[i], search)) {
        return true;
      }
    }
  } else if (val != null) {
    return val.toString().toLowerCase().indexOf(search) > -1;
  }
}

var digitsRE = /(\d{3})(?=\d)/g;

// asset collections must be a plain object.
var filters = {

  orderBy: orderBy,
  filterBy: filterBy,
  limitBy: limitBy,

  /**
   * Stringify value.
   *
   * @param {Number} indent
   */

  json: {
    read: function read(value, indent) {
      return typeof value === 'string' ? value : JSON.stringify(value, null, arguments.length > 1 ? indent : 2);
    },
    write: function write(value) {
      try {
        return JSON.parse(value);
      } catch (e) {
        return value;
      }
    }
  },

  /**
   * 'abc' => 'Abc'
   */

  capitalize: function capitalize(value) {
    if (!value && value !== 0) return '';
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
  },

  /**
   * 'abc' => 'ABC'
   */

  uppercase: function uppercase(value) {
    return value || value === 0 ? value.toString().toUpperCase() : '';
  },

  /**
   * 'AbC' => 'abc'
   */

  lowercase: function lowercase(value) {
    return value || value === 0 ? value.toString().toLowerCase() : '';
  },

  /**
   * 12345 => $12,345.00
   *
   * @param {String} sign
   * @param {Number} decimals Decimal places
   */

  currency: function currency(value, _currency, decimals) {
    value = parseFloat(value);
    if (!isFinite(value) || !value && value !== 0) return '';
    _currency = _currency != null ? _currency : '$';
    decimals = decimals != null ? decimals : 2;
    var stringified = Math.abs(value).toFixed(decimals);
    var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
    var i = _int.length % 3;
    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
    var _float = decimals ? stringified.slice(-1 - decimals) : '';
    var sign = value < 0 ? '-' : '';
    return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
  },

  /**
   * 'item' => 'items'
   *
   * @params
   *  an array of strings corresponding to
   *  the single, double, triple ... forms of the word to
   *  be pluralized. When the number to be pluralized
   *  exceeds the length of the args, it will use the last
   *  entry in the array.
   *
   *  e.g. ['single', 'double', 'triple', 'multiple']
   */

  pluralize: function pluralize(value) {
    var args = toArray(arguments, 1);
    var length = args.length;
    if (length > 1) {
      var index = value % 10 - 1;
      return index in args ? args[index] : args[length - 1];
    } else {
      return args[0] + (value === 1 ? '' : 's');
    }
  },

  /**
   * Debounce a handler function.
   *
   * @param {Function} handler
   * @param {Number} delay = 300
   * @return {Function}
   */

  debounce: function debounce(handler, delay) {
    if (!handler) return;
    if (!delay) {
      delay = 300;
    }
    return _debounce(handler, delay);
  }
};

function installGlobalAPI (Vue) {
  /**
   * Vue and every constructor that extends Vue has an
   * associated options object, which can be accessed during
   * compilation steps as `this.constructor.options`.
   *
   * These can be seen as the default options of every
   * Vue instance.
   */

  Vue.options = {
    directives: directives,
    elementDirectives: elementDirectives,
    filters: filters,
    transitions: {},
    components: {},
    partials: {},
    replace: true
  };

  /**
   * Expose useful internals
   */

  Vue.util = util;
  Vue.config = config;
  Vue.set = set;
  Vue['delete'] = del;
  Vue.nextTick = nextTick;

  /**
   * The following are exposed for advanced usage / plugins
   */

  Vue.compiler = compiler;
  Vue.FragmentFactory = FragmentFactory;
  Vue.internalDirectives = internalDirectives;
  Vue.parsers = {
    path: path,
    text: text,
    template: template,
    directive: directive,
    expression: expression
  };

  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */

  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   *
   * @param {Object} extendOptions
   */

  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var isFirstExtend = Super.cid === 0;
    if (isFirstExtend && extendOptions._Ctor) {
      return extendOptions._Ctor;
    }
    var name = extendOptions.name || Super.options.name;
    if (process.env.NODE_ENV !== 'production') {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
        name = null;
      }
    }
    var Sub = createClass(name || 'VueComponent');
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(Super.options, extendOptions);
    Sub['super'] = Super;
    // allow further extension
    Sub.extend = Super.extend;
    // create asset registers, so extended classes
    // can have their private assets too.
    config._assetTypes.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }
    // cache constructor
    if (isFirstExtend) {
      extendOptions._Ctor = Sub;
    }
    return Sub;
  };

  /**
   * A function that returns a sub-class constructor with the
   * given name. This gives us much nicer output when
   * logging instances in the console.
   *
   * @param {String} name
   * @return {Function}
   */

  function createClass(name) {
    /* eslint-disable no-new-func */
    return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
    /* eslint-enable no-new-func */
  }

  /**
   * Plugin system
   *
   * @param {Object} plugin
   */

  Vue.use = function (plugin) {
    /* istanbul ignore if */
    if (plugin.installed) {
      return;
    }
    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else {
      plugin.apply(null, args);
    }
    plugin.installed = true;
    return this;
  };

  /**
   * Apply a global mixin by merging it into the default
   * options.
   */

  Vue.mixin = function (mixin) {
    Vue.options = mergeOptions(Vue.options, mixin);
  };

  /**
   * Create asset registration methods with the following
   * signature:
   *
   * @param {String} id
   * @param {*} definition
   */

  config._assetTypes.forEach(function (type) {
    Vue[type] = function (id, definition) {
      if (!definition) {
        return this.options[type + 's'][id];
      } else {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production') {
          if (type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))) {
            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          if (!definition.name) {
            definition.name = id;
          }
          definition = Vue.extend(definition);
        }
        this.options[type + 's'][id] = definition;
        return definition;
      }
    };
  });

  // expose internal transition API
  extend(Vue.transition, transition);
}

installGlobalAPI(Vue);

Vue.version = '1.0.26';

// devtools global hook
/* istanbul ignore next */
setTimeout(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue);
    } else if (process.env.NODE_ENV !== 'production' && inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)) {
      console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
    }
  }
}, 0);

module.exports = Vue;
}).call(this,require("Wb8Gej"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/vue/dist/vue.common.js","/../../node_modules/vue/dist")
},{"Wb8Gej":5,"buffer":6}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhaW4vZG9tYWlucy9uYWlyYmwubG9jYWwvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9ob21lL3JhaW4vZG9tYWlucy9uYWlyYmwubG9jYWwvYXNzZXRzX3NyYy9qcy9mYWtlXzE0YzhmMGMwLmpzIiwiL2hvbWUvcmFpbi9kb21haW5zL25haXJibC5sb2NhbC9hc3NldHNfc3JjL2pzL3RlbXBsYXRlcy9hcHAudnVlIiwiL2hvbWUvcmFpbi9kb21haW5zL25haXJibC5sb2NhbC9hc3NldHNfc3JjL2pzL3RlbXBsYXRlcy9ib2R5bmV3cy52dWUiLCIvaG9tZS9yYWluL2RvbWFpbnMvbmFpcmJsLmxvY2FsL25vZGVfbW9kdWxlcy9iYXNlNjQtanMvbGliL2I2NC5qcyIsIi9ob21lL3JhaW4vZG9tYWlucy9uYWlyYmwubG9jYWwvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIi9ob21lL3JhaW4vZG9tYWlucy9uYWlyYmwubG9jYWwvbm9kZV9tb2R1bGVzL2J1ZmZlci9pbmRleC5qcyIsIi9ob21lL3JhaW4vZG9tYWlucy9uYWlyYmwubG9jYWwvbm9kZV9tb2R1bGVzL2llZWU3NTQvaW5kZXguanMiLCIvaG9tZS9yYWluL2RvbWFpbnMvbmFpcmJsLmxvY2FsL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvaW5kZXguanMiLCIvaG9tZS9yYWluL2RvbWFpbnMvbmFpcmJsLmxvY2FsL25vZGVfbW9kdWxlcy92dWUtcmVzb3VyY2UvZGlzdC92dWUtcmVzb3VyY2UuY29tbW9uLmpzIiwiL2hvbWUvcmFpbi9kb21haW5zL25haXJibC5sb2NhbC9ub2RlX21vZHVsZXMvdnVlL2Rpc3QvdnVlLmNvbW1vbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2bENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3U0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2p5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG52YXIgVnVlID0gcmVxdWlyZSgndnVlJyk7XG52YXIgVnVlUmVzID0gcmVxdWlyZSgndnVlLXJlc291cmNlJyk7XG5cblZ1ZS51c2UoVnVlUmVzKTtcblxudmFyIEFwcCA9IHJlcXVpcmUoJy4vdGVtcGxhdGVzL2FwcC52dWUnKTtcblxubmV3IFZ1ZSh7XG4gICAgZWw6IFwiI3Z1ZWFwcFwiLFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgYXBwOiBBcHBcbiAgICB9XG59KVxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIldiOEdlalwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2Zha2VfMTRjOGYwYzAuanNcIixcIi9cIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9ib2R5bmV3cyA9IHJlcXVpcmUoJy4vYm9keW5ld3MudnVlJyk7XG5cbnZhciBfYm9keW5ld3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYm9keW5ld3MpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGF0YTogZnVuY3Rpb24gZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNpdGVOYW1lOiAnJyxcbiAgICAgICAgICAgIHNpdGVIZWxwOiAnJ1xuICAgICAgICB9O1xuICAgIH0sXG4gICAgcmVhZHk6IGZ1bmN0aW9uIHJlYWR5KCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuJGh0dHAuZ2V0KCcvYXBpL3YxL2Fib3V0JykudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblxuICAgICAgICAgICAgLy8gZ2V0IHN0YXR1c1xuICAgICAgICAgICAgcmVzcG9uc2Uuc3RhdHVzO1xuICAgICAgICAgICAgLy8gZ2V0IHN0YXR1cyB0ZXh0XG4gICAgICAgICAgICByZXNwb25zZS5zdGF0dXNUZXh0O1xuICAgICAgICAgICAgLy8gZ2V0IGFsbCBoZWFkZXJzXG4gICAgICAgICAgICByZXNwb25zZS5oZWFkZXJzO1xuICAgICAgICAgICAgLy8gZ2V0ICdFeHBpcmVzJyBoZWFkZXJcbiAgICAgICAgICAgIHJlc3BvbnNlLmhlYWRlcnNbJ0V4cGlyZXMnXTtcbiAgICAgICAgICAgIC8vIHNldCBkYXRhIG9uIHZtXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5qc29uKCkpO1xuICAgICAgICAgICAgLy90aGlzLiRzZXQoJ3NvbWVEYXRhJywgcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgX3RoaXMuJHNldCgnc2l0ZU5hbWUnLCByZXNwb25zZS5qc29uKCkuc2l0ZU5hbWUpO1xuICAgICAgICAgICAgX3RoaXMuJHNldCgnc2l0ZUhlbHAnLCByZXNwb25zZS5qc29uKCkuc2l0ZUhlbHApO1xuICAgICAgICB9LCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIC8vIGVycm9yIGNhbGxiYWNrXG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIGJvZHluZXdzOiBfYm9keW5ld3MyLmRlZmF1bHRcbiAgICB9XG5cbn07XG5pZiAobW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSkgbW9kdWxlLmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cy5kZWZhdWx0XG47KHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PT0gXCJmdW5jdGlvblwiPyBtb2R1bGUuZXhwb3J0cy5vcHRpb25zOiBtb2R1bGUuZXhwb3J0cykudGVtcGxhdGUgPSBcIlxcblxcbjxkaXYgY2xhc3M9XFxcInJvdyBtYWluLWhlYWRlclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtc20tMlxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsb2dvXFxcIj5cXG4gICAgICAgICAgICA8YSBocmVmPVxcXCIvXFxcIj5cXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIi9hc3NldHMvaW1nL2xvZ28ucG5nXFxcIiBhbHQ9XFxcImxvZ29cXFwiPlxcbiAgICAgICAgICAgIDwvYT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1zbS05IGNvbC1zbS1vZmZzZXQtMSBjb2wtbWQtNyBjb2wtbWQtb2Zmc2V0LTBcXFwiPlxcbiAgICAgICAgPGgxPlxcbiAgICAgICAgPHNwYW4gaWQ9XFxcInNpdGUtbmFtZS1oZWFkZXJcXFwiPnt7IHNpdGVOYW1lIH19PC9zcGFuPlxcbiAgICAgIDwvaDE+XFxuICAgICAgICA8c3BhbiBpZD1cXFwiaGVscC1oZWFkZXJcXFwiIGNsYXNzPVxcXCJsaXR0bGUtaGVscFxcXCI+e3sgc2l0ZUhlbHAgfX08L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy0zXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIlNlYXJjaCBmb3IuLi5cXFwiPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1idG5cXFwiPlxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+R28hPC9idXR0b24+XFxuICAgICAgICA8L3NwYW4+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XFxuXFxuPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgPGRpdiB2LWZvcj1cXFwiYm4gaW4gYm9keW5ld3NcXFwiPlxcbiAgICAgICAgPGJvZHluZXdzIDpib2R5bmV3cz1cXFwiYm5cXFwiPjwvYm9keW5ld3M+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlxcblxcblwiXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7ICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIHRydWUpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJfdi0yZTVmNGFmY1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkudXBkYXRlKFwiX3YtMmU1ZjRhZmNcIiwgbW9kdWxlLmV4cG9ydHMsICh0eXBlb2YgbW9kdWxlLmV4cG9ydHMgPT09IFwiZnVuY3Rpb25cIiA/IG1vZHVsZS5leHBvcnRzLm9wdGlvbnMgOiBtb2R1bGUuZXhwb3J0cykudGVtcGxhdGUpXG4gIH1cbn0pKCl9XG59KS5jYWxsKHRoaXMscmVxdWlyZShcIldiOEdlalwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL3RlbXBsYXRlcy9hcHAudnVlXCIsXCIvdGVtcGxhdGVzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5pZiAobW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSkgbW9kdWxlLmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cy5kZWZhdWx0XG47KHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PT0gXCJmdW5jdGlvblwiPyBtb2R1bGUuZXhwb3J0cy5vcHRpb25zOiBtb2R1bGUuZXhwb3J0cykudGVtcGxhdGUgPSBcIlxcblxcbjxkaXYgY2xhc3M9XFxcIlxcXCI+XFxuICBib2R5XFxuPC9kaXY+XFxuXFxuXCJcbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHsgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgdHJ1ZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcIl92LTFlN2M4MmFjXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS51cGRhdGUoXCJfdi0xZTdjODJhY1wiLCBtb2R1bGUuZXhwb3J0cywgKHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PT0gXCJmdW5jdGlvblwiID8gbW9kdWxlLmV4cG9ydHMub3B0aW9ucyA6IG1vZHVsZS5leHBvcnRzKS50ZW1wbGF0ZSlcbiAgfVxufSkoKX1cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiV2I4R2VqXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvdGVtcGxhdGVzL2JvZHluZXdzLnZ1ZVwiLFwiL3RlbXBsYXRlc1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbnZhciBsb29rdXAgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7XG5cbjsoZnVuY3Rpb24gKGV4cG9ydHMpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG4gIHZhciBBcnIgPSAodHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnKVxuICAgID8gVWludDhBcnJheVxuICAgIDogQXJyYXlcblxuXHR2YXIgUExVUyAgID0gJysnLmNoYXJDb2RlQXQoMClcblx0dmFyIFNMQVNIICA9ICcvJy5jaGFyQ29kZUF0KDApXG5cdHZhciBOVU1CRVIgPSAnMCcuY2hhckNvZGVBdCgwKVxuXHR2YXIgTE9XRVIgID0gJ2EnLmNoYXJDb2RlQXQoMClcblx0dmFyIFVQUEVSICA9ICdBJy5jaGFyQ29kZUF0KDApXG5cdHZhciBQTFVTX1VSTF9TQUZFID0gJy0nLmNoYXJDb2RlQXQoMClcblx0dmFyIFNMQVNIX1VSTF9TQUZFID0gJ18nLmNoYXJDb2RlQXQoMClcblxuXHRmdW5jdGlvbiBkZWNvZGUgKGVsdCkge1xuXHRcdHZhciBjb2RlID0gZWx0LmNoYXJDb2RlQXQoMClcblx0XHRpZiAoY29kZSA9PT0gUExVUyB8fFxuXHRcdCAgICBjb2RlID09PSBQTFVTX1VSTF9TQUZFKVxuXHRcdFx0cmV0dXJuIDYyIC8vICcrJ1xuXHRcdGlmIChjb2RlID09PSBTTEFTSCB8fFxuXHRcdCAgICBjb2RlID09PSBTTEFTSF9VUkxfU0FGRSlcblx0XHRcdHJldHVybiA2MyAvLyAnLydcblx0XHRpZiAoY29kZSA8IE5VTUJFUilcblx0XHRcdHJldHVybiAtMSAvL25vIG1hdGNoXG5cdFx0aWYgKGNvZGUgPCBOVU1CRVIgKyAxMClcblx0XHRcdHJldHVybiBjb2RlIC0gTlVNQkVSICsgMjYgKyAyNlxuXHRcdGlmIChjb2RlIDwgVVBQRVIgKyAyNilcblx0XHRcdHJldHVybiBjb2RlIC0gVVBQRVJcblx0XHRpZiAoY29kZSA8IExPV0VSICsgMjYpXG5cdFx0XHRyZXR1cm4gY29kZSAtIExPV0VSICsgMjZcblx0fVxuXG5cdGZ1bmN0aW9uIGI2NFRvQnl0ZUFycmF5IChiNjQpIHtcblx0XHR2YXIgaSwgaiwgbCwgdG1wLCBwbGFjZUhvbGRlcnMsIGFyclxuXG5cdFx0aWYgKGI2NC5sZW5ndGggJSA0ID4gMCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0Jylcblx0XHR9XG5cblx0XHQvLyB0aGUgbnVtYmVyIG9mIGVxdWFsIHNpZ25zIChwbGFjZSBob2xkZXJzKVxuXHRcdC8vIGlmIHRoZXJlIGFyZSB0d28gcGxhY2Vob2xkZXJzLCB0aGFuIHRoZSB0d28gY2hhcmFjdGVycyBiZWZvcmUgaXRcblx0XHQvLyByZXByZXNlbnQgb25lIGJ5dGVcblx0XHQvLyBpZiB0aGVyZSBpcyBvbmx5IG9uZSwgdGhlbiB0aGUgdGhyZWUgY2hhcmFjdGVycyBiZWZvcmUgaXQgcmVwcmVzZW50IDIgYnl0ZXNcblx0XHQvLyB0aGlzIGlzIGp1c3QgYSBjaGVhcCBoYWNrIHRvIG5vdCBkbyBpbmRleE9mIHR3aWNlXG5cdFx0dmFyIGxlbiA9IGI2NC5sZW5ndGhcblx0XHRwbGFjZUhvbGRlcnMgPSAnPScgPT09IGI2NC5jaGFyQXQobGVuIC0gMikgPyAyIDogJz0nID09PSBiNjQuY2hhckF0KGxlbiAtIDEpID8gMSA6IDBcblxuXHRcdC8vIGJhc2U2NCBpcyA0LzMgKyB1cCB0byB0d28gY2hhcmFjdGVycyBvZiB0aGUgb3JpZ2luYWwgZGF0YVxuXHRcdGFyciA9IG5ldyBBcnIoYjY0Lmxlbmd0aCAqIDMgLyA0IC0gcGxhY2VIb2xkZXJzKVxuXG5cdFx0Ly8gaWYgdGhlcmUgYXJlIHBsYWNlaG9sZGVycywgb25seSBnZXQgdXAgdG8gdGhlIGxhc3QgY29tcGxldGUgNCBjaGFyc1xuXHRcdGwgPSBwbGFjZUhvbGRlcnMgPiAwID8gYjY0Lmxlbmd0aCAtIDQgOiBiNjQubGVuZ3RoXG5cblx0XHR2YXIgTCA9IDBcblxuXHRcdGZ1bmN0aW9uIHB1c2ggKHYpIHtcblx0XHRcdGFycltMKytdID0gdlxuXHRcdH1cblxuXHRcdGZvciAoaSA9IDAsIGogPSAwOyBpIDwgbDsgaSArPSA0LCBqICs9IDMpIHtcblx0XHRcdHRtcCA9IChkZWNvZGUoYjY0LmNoYXJBdChpKSkgPDwgMTgpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPDwgMTIpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAyKSkgPDwgNikgfCBkZWNvZGUoYjY0LmNoYXJBdChpICsgMykpXG5cdFx0XHRwdXNoKCh0bXAgJiAweEZGMDAwMCkgPj4gMTYpXG5cdFx0XHRwdXNoKCh0bXAgJiAweEZGMDApID4+IDgpXG5cdFx0XHRwdXNoKHRtcCAmIDB4RkYpXG5cdFx0fVxuXG5cdFx0aWYgKHBsYWNlSG9sZGVycyA9PT0gMikge1xuXHRcdFx0dG1wID0gKGRlY29kZShiNjQuY2hhckF0KGkpKSA8PCAyKSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMSkpID4+IDQpXG5cdFx0XHRwdXNoKHRtcCAmIDB4RkYpXG5cdFx0fSBlbHNlIGlmIChwbGFjZUhvbGRlcnMgPT09IDEpIHtcblx0XHRcdHRtcCA9IChkZWNvZGUoYjY0LmNoYXJBdChpKSkgPDwgMTApIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPDwgNCkgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDIpKSA+PiAyKVxuXHRcdFx0cHVzaCgodG1wID4+IDgpICYgMHhGRilcblx0XHRcdHB1c2godG1wICYgMHhGRilcblx0XHR9XG5cblx0XHRyZXR1cm4gYXJyXG5cdH1cblxuXHRmdW5jdGlvbiB1aW50OFRvQmFzZTY0ICh1aW50OCkge1xuXHRcdHZhciBpLFxuXHRcdFx0ZXh0cmFCeXRlcyA9IHVpbnQ4Lmxlbmd0aCAlIDMsIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG5cdFx0XHRvdXRwdXQgPSBcIlwiLFxuXHRcdFx0dGVtcCwgbGVuZ3RoXG5cblx0XHRmdW5jdGlvbiBlbmNvZGUgKG51bSkge1xuXHRcdFx0cmV0dXJuIGxvb2t1cC5jaGFyQXQobnVtKVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHRyaXBsZXRUb0Jhc2U2NCAobnVtKSB7XG5cdFx0XHRyZXR1cm4gZW5jb2RlKG51bSA+PiAxOCAmIDB4M0YpICsgZW5jb2RlKG51bSA+PiAxMiAmIDB4M0YpICsgZW5jb2RlKG51bSA+PiA2ICYgMHgzRikgKyBlbmNvZGUobnVtICYgMHgzRilcblx0XHR9XG5cblx0XHQvLyBnbyB0aHJvdWdoIHRoZSBhcnJheSBldmVyeSB0aHJlZSBieXRlcywgd2UnbGwgZGVhbCB3aXRoIHRyYWlsaW5nIHN0dWZmIGxhdGVyXG5cdFx0Zm9yIChpID0gMCwgbGVuZ3RoID0gdWludDgubGVuZ3RoIC0gZXh0cmFCeXRlczsgaSA8IGxlbmd0aDsgaSArPSAzKSB7XG5cdFx0XHR0ZW1wID0gKHVpbnQ4W2ldIDw8IDE2KSArICh1aW50OFtpICsgMV0gPDwgOCkgKyAodWludDhbaSArIDJdKVxuXHRcdFx0b3V0cHV0ICs9IHRyaXBsZXRUb0Jhc2U2NCh0ZW1wKVxuXHRcdH1cblxuXHRcdC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcblx0XHRzd2l0Y2ggKGV4dHJhQnl0ZXMpIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0dGVtcCA9IHVpbnQ4W3VpbnQ4Lmxlbmd0aCAtIDFdXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUodGVtcCA+PiAyKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wIDw8IDQpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9ICc9PSdcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0dGVtcCA9ICh1aW50OFt1aW50OC5sZW5ndGggLSAyXSA8PCA4KSArICh1aW50OFt1aW50OC5sZW5ndGggLSAxXSlcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSh0ZW1wID4+IDEwKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wID4+IDQpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSgodGVtcCA8PCAyKSAmIDB4M0YpXG5cdFx0XHRcdG91dHB1dCArPSAnPSdcblx0XHRcdFx0YnJlYWtcblx0XHR9XG5cblx0XHRyZXR1cm4gb3V0cHV0XG5cdH1cblxuXHRleHBvcnRzLnRvQnl0ZUFycmF5ID0gYjY0VG9CeXRlQXJyYXlcblx0ZXhwb3J0cy5mcm9tQnl0ZUFycmF5ID0gdWludDhUb0Jhc2U2NFxufSh0eXBlb2YgZXhwb3J0cyA9PT0gJ3VuZGVmaW5lZCcgPyAodGhpcy5iYXNlNjRqcyA9IHt9KSA6IGV4cG9ydHMpKVxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIldiOEdlalwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uLy4uL25vZGVfbW9kdWxlcy9iYXNlNjQtanMvbGliL2I2NC5qc1wiLFwiLy4uLy4uL25vZGVfbW9kdWxlcy9iYXNlNjQtanMvbGliXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxucHJvY2Vzcy5uZXh0VGljayA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNhblNldEltbWVkaWF0ZSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93LnNldEltbWVkaWF0ZTtcbiAgICB2YXIgY2FuUG9zdCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93LnBvc3RNZXNzYWdlICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyXG4gICAgO1xuXG4gICAgaWYgKGNhblNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGYpIHsgcmV0dXJuIHdpbmRvdy5zZXRJbW1lZGlhdGUoZikgfTtcbiAgICB9XG5cbiAgICBpZiAoY2FuUG9zdCkge1xuICAgICAgICB2YXIgcXVldWUgPSBbXTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIHZhciBzb3VyY2UgPSBldi5zb3VyY2U7XG4gICAgICAgICAgICBpZiAoKHNvdXJjZSA9PT0gd2luZG93IHx8IHNvdXJjZSA9PT0gbnVsbCkgJiYgZXYuZGF0YSA9PT0gJ3Byb2Nlc3MtdGljaycpIHtcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBpZiAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm4gPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKGZuKTtcbiAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSgncHJvY2Vzcy10aWNrJywgJyonKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgc2V0VGltZW91dChmbiwgMCk7XG4gICAgfTtcbn0pKCk7XG5cbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufVxuXG4vLyBUT0RPKHNodHlsbWFuKVxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiV2I4R2VqXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi4vLi4vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1wiLFwiLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9wcm9jZXNzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLyohXG4gKiBUaGUgYnVmZmVyIG1vZHVsZSBmcm9tIG5vZGUuanMsIGZvciB0aGUgYnJvd3Nlci5cbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8ZmVyb3NzQGZlcm9zcy5vcmc+IDxodHRwOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG52YXIgYmFzZTY0ID0gcmVxdWlyZSgnYmFzZTY0LWpzJylcbnZhciBpZWVlNzU0ID0gcmVxdWlyZSgnaWVlZTc1NCcpXG5cbmV4cG9ydHMuQnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLlNsb3dCdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMgPSA1MFxuQnVmZmVyLnBvb2xTaXplID0gODE5MlxuXG4vKipcbiAqIElmIGBCdWZmZXIuX3VzZVR5cGVkQXJyYXlzYDpcbiAqICAgPT09IHRydWUgICAgVXNlIFVpbnQ4QXJyYXkgaW1wbGVtZW50YXRpb24gKGZhc3Rlc3QpXG4gKiAgID09PSBmYWxzZSAgIFVzZSBPYmplY3QgaW1wbGVtZW50YXRpb24gKGNvbXBhdGlibGUgZG93biB0byBJRTYpXG4gKi9cbkJ1ZmZlci5fdXNlVHlwZWRBcnJheXMgPSAoZnVuY3Rpb24gKCkge1xuICAvLyBEZXRlY3QgaWYgYnJvd3NlciBzdXBwb3J0cyBUeXBlZCBBcnJheXMuIFN1cHBvcnRlZCBicm93c2VycyBhcmUgSUUgMTArLCBGaXJlZm94IDQrLFxuICAvLyBDaHJvbWUgNyssIFNhZmFyaSA1LjErLCBPcGVyYSAxMS42KywgaU9TIDQuMisuIElmIHRoZSBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgYWRkaW5nXG4gIC8vIHByb3BlcnRpZXMgdG8gYFVpbnQ4QXJyYXlgIGluc3RhbmNlcywgdGhlbiB0aGF0J3MgdGhlIHNhbWUgYXMgbm8gYFVpbnQ4QXJyYXlgIHN1cHBvcnRcbiAgLy8gYmVjYXVzZSB3ZSBuZWVkIHRvIGJlIGFibGUgdG8gYWRkIGFsbCB0aGUgbm9kZSBCdWZmZXIgQVBJIG1ldGhvZHMuIFRoaXMgaXMgYW4gaXNzdWVcbiAgLy8gaW4gRmlyZWZveCA0LTI5LiBOb3cgZml4ZWQ6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTY5NTQzOFxuICB0cnkge1xuICAgIHZhciBidWYgPSBuZXcgQXJyYXlCdWZmZXIoMClcbiAgICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoYnVmKVxuICAgIGFyci5mb28gPSBmdW5jdGlvbiAoKSB7IHJldHVybiA0MiB9XG4gICAgcmV0dXJuIDQyID09PSBhcnIuZm9vKCkgJiZcbiAgICAgICAgdHlwZW9mIGFyci5zdWJhcnJheSA9PT0gJ2Z1bmN0aW9uJyAvLyBDaHJvbWUgOS0xMCBsYWNrIGBzdWJhcnJheWBcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59KSgpXG5cbi8qKlxuICogQ2xhc3M6IEJ1ZmZlclxuICogPT09PT09PT09PT09PVxuICpcbiAqIFRoZSBCdWZmZXIgY29uc3RydWN0b3IgcmV0dXJucyBpbnN0YW5jZXMgb2YgYFVpbnQ4QXJyYXlgIHRoYXQgYXJlIGF1Z21lbnRlZFxuICogd2l0aCBmdW5jdGlvbiBwcm9wZXJ0aWVzIGZvciBhbGwgdGhlIG5vZGUgYEJ1ZmZlcmAgQVBJIGZ1bmN0aW9ucy4gV2UgdXNlXG4gKiBgVWludDhBcnJheWAgc28gdGhhdCBzcXVhcmUgYnJhY2tldCBub3RhdGlvbiB3b3JrcyBhcyBleHBlY3RlZCAtLSBpdCByZXR1cm5zXG4gKiBhIHNpbmdsZSBvY3RldC5cbiAqXG4gKiBCeSBhdWdtZW50aW5nIHRoZSBpbnN0YW5jZXMsIHdlIGNhbiBhdm9pZCBtb2RpZnlpbmcgdGhlIGBVaW50OEFycmF5YFxuICogcHJvdG90eXBlLlxuICovXG5mdW5jdGlvbiBCdWZmZXIgKHN1YmplY3QsIGVuY29kaW5nLCBub1plcm8pIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEJ1ZmZlcikpXG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoc3ViamVjdCwgZW5jb2RpbmcsIG5vWmVybylcblxuICB2YXIgdHlwZSA9IHR5cGVvZiBzdWJqZWN0XG5cbiAgLy8gV29ya2Fyb3VuZDogbm9kZSdzIGJhc2U2NCBpbXBsZW1lbnRhdGlvbiBhbGxvd3MgZm9yIG5vbi1wYWRkZWQgc3RyaW5nc1xuICAvLyB3aGlsZSBiYXNlNjQtanMgZG9lcyBub3QuXG4gIGlmIChlbmNvZGluZyA9PT0gJ2Jhc2U2NCcgJiYgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICBzdWJqZWN0ID0gc3RyaW5ndHJpbShzdWJqZWN0KVxuICAgIHdoaWxlIChzdWJqZWN0Lmxlbmd0aCAlIDQgIT09IDApIHtcbiAgICAgIHN1YmplY3QgPSBzdWJqZWN0ICsgJz0nXG4gICAgfVxuICB9XG5cbiAgLy8gRmluZCB0aGUgbGVuZ3RoXG4gIHZhciBsZW5ndGhcbiAgaWYgKHR5cGUgPT09ICdudW1iZXInKVxuICAgIGxlbmd0aCA9IGNvZXJjZShzdWJqZWN0KVxuICBlbHNlIGlmICh0eXBlID09PSAnc3RyaW5nJylcbiAgICBsZW5ndGggPSBCdWZmZXIuYnl0ZUxlbmd0aChzdWJqZWN0LCBlbmNvZGluZylcbiAgZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpXG4gICAgbGVuZ3RoID0gY29lcmNlKHN1YmplY3QubGVuZ3RoKSAvLyBhc3N1bWUgdGhhdCBvYmplY3QgaXMgYXJyYXktbGlrZVxuICBlbHNlXG4gICAgdGhyb3cgbmV3IEVycm9yKCdGaXJzdCBhcmd1bWVudCBuZWVkcyB0byBiZSBhIG51bWJlciwgYXJyYXkgb3Igc3RyaW5nLicpXG5cbiAgdmFyIGJ1ZlxuICBpZiAoQnVmZmVyLl91c2VUeXBlZEFycmF5cykge1xuICAgIC8vIFByZWZlcnJlZDogUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICBidWYgPSBCdWZmZXIuX2F1Z21lbnQobmV3IFVpbnQ4QXJyYXkobGVuZ3RoKSlcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIFRISVMgaW5zdGFuY2Ugb2YgQnVmZmVyIChjcmVhdGVkIGJ5IGBuZXdgKVxuICAgIGJ1ZiA9IHRoaXNcbiAgICBidWYubGVuZ3RoID0gbGVuZ3RoXG4gICAgYnVmLl9pc0J1ZmZlciA9IHRydWVcbiAgfVxuXG4gIHZhciBpXG4gIGlmIChCdWZmZXIuX3VzZVR5cGVkQXJyYXlzICYmIHR5cGVvZiBzdWJqZWN0LmJ5dGVMZW5ndGggPT09ICdudW1iZXInKSB7XG4gICAgLy8gU3BlZWQgb3B0aW1pemF0aW9uIC0tIHVzZSBzZXQgaWYgd2UncmUgY29weWluZyBmcm9tIGEgdHlwZWQgYXJyYXlcbiAgICBidWYuX3NldChzdWJqZWN0KVxuICB9IGVsc2UgaWYgKGlzQXJyYXlpc2goc3ViamVjdCkpIHtcbiAgICAvLyBUcmVhdCBhcnJheS1pc2ggb2JqZWN0cyBhcyBhIGJ5dGUgYXJyYXlcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChCdWZmZXIuaXNCdWZmZXIoc3ViamVjdCkpXG4gICAgICAgIGJ1ZltpXSA9IHN1YmplY3QucmVhZFVJbnQ4KGkpXG4gICAgICBlbHNlXG4gICAgICAgIGJ1ZltpXSA9IHN1YmplY3RbaV1cbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICBidWYud3JpdGUoc3ViamVjdCwgMCwgZW5jb2RpbmcpXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgIUJ1ZmZlci5fdXNlVHlwZWRBcnJheXMgJiYgIW5vWmVybykge1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgYnVmW2ldID0gMFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBidWZcbn1cblxuLy8gU1RBVElDIE1FVEhPRFNcbi8vID09PT09PT09PT09PT09XG5cbkJ1ZmZlci5pc0VuY29kaW5nID0gZnVuY3Rpb24gKGVuY29kaW5nKSB7XG4gIHN3aXRjaCAoU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICBjYXNlICdyYXcnOlxuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5CdWZmZXIuaXNCdWZmZXIgPSBmdW5jdGlvbiAoYikge1xuICByZXR1cm4gISEoYiAhPT0gbnVsbCAmJiBiICE9PSB1bmRlZmluZWQgJiYgYi5faXNCdWZmZXIpXG59XG5cbkJ1ZmZlci5ieXRlTGVuZ3RoID0gZnVuY3Rpb24gKHN0ciwgZW5jb2RpbmcpIHtcbiAgdmFyIHJldFxuICBzdHIgPSBzdHIgKyAnJ1xuICBzd2l0Y2ggKGVuY29kaW5nIHx8ICd1dGY4Jykge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgICByZXQgPSBzdHIubGVuZ3RoIC8gMlxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgICByZXQgPSB1dGY4VG9CeXRlcyhzdHIpLmxlbmd0aFxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdyYXcnOlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aFxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgcmV0ID0gYmFzZTY0VG9CeXRlcyhzdHIpLmxlbmd0aFxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aCAqIDJcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBlbmNvZGluZycpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5CdWZmZXIuY29uY2F0ID0gZnVuY3Rpb24gKGxpc3QsIHRvdGFsTGVuZ3RoKSB7XG4gIGFzc2VydChpc0FycmF5KGxpc3QpLCAnVXNhZ2U6IEJ1ZmZlci5jb25jYXQobGlzdCwgW3RvdGFsTGVuZ3RoXSlcXG4nICtcbiAgICAgICdsaXN0IHNob3VsZCBiZSBhbiBBcnJheS4nKVxuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBuZXcgQnVmZmVyKDApXG4gIH0gZWxzZSBpZiAobGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gbGlzdFswXVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKHR5cGVvZiB0b3RhbExlbmd0aCAhPT0gJ251bWJlcicpIHtcbiAgICB0b3RhbExlbmd0aCA9IDBcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgdG90YWxMZW5ndGggKz0gbGlzdFtpXS5sZW5ndGhcbiAgICB9XG4gIH1cblxuICB2YXIgYnVmID0gbmV3IEJ1ZmZlcih0b3RhbExlbmd0aClcbiAgdmFyIHBvcyA9IDBcbiAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICBpdGVtLmNvcHkoYnVmLCBwb3MpXG4gICAgcG9zICs9IGl0ZW0ubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIGJ1ZlxufVxuXG4vLyBCVUZGRVIgSU5TVEFOQ0UgTUVUSE9EU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gX2hleFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICB2YXIgcmVtYWluaW5nID0gYnVmLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG5cbiAgLy8gbXVzdCBiZSBhbiBldmVuIG51bWJlciBvZiBkaWdpdHNcbiAgdmFyIHN0ckxlbiA9IHN0cmluZy5sZW5ndGhcbiAgYXNzZXJ0KHN0ckxlbiAlIDIgPT09IDAsICdJbnZhbGlkIGhleCBzdHJpbmcnKVxuXG4gIGlmIChsZW5ndGggPiBzdHJMZW4gLyAyKSB7XG4gICAgbGVuZ3RoID0gc3RyTGVuIC8gMlxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgYnl0ZSA9IHBhcnNlSW50KHN0cmluZy5zdWJzdHIoaSAqIDIsIDIpLCAxNilcbiAgICBhc3NlcnQoIWlzTmFOKGJ5dGUpLCAnSW52YWxpZCBoZXggc3RyaW5nJylcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSBieXRlXG4gIH1cbiAgQnVmZmVyLl9jaGFyc1dyaXR0ZW4gPSBpICogMlxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiBfdXRmOFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IEJ1ZmZlci5fY2hhcnNXcml0dGVuID1cbiAgICBibGl0QnVmZmVyKHV0ZjhUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuZnVuY3Rpb24gX2FzY2lpV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gQnVmZmVyLl9jaGFyc1dyaXR0ZW4gPVxuICAgIGJsaXRCdWZmZXIoYXNjaWlUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuZnVuY3Rpb24gX2JpbmFyeVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIF9hc2NpaVdyaXRlKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gX2Jhc2U2NFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IEJ1ZmZlci5fY2hhcnNXcml0dGVuID1cbiAgICBibGl0QnVmZmVyKGJhc2U2NFRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5mdW5jdGlvbiBfdXRmMTZsZVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IEJ1ZmZlci5fY2hhcnNXcml0dGVuID1cbiAgICBibGl0QnVmZmVyKHV0ZjE2bGVUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZykge1xuICAvLyBTdXBwb3J0IGJvdGggKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKVxuICAvLyBhbmQgdGhlIGxlZ2FjeSAoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0LCBsZW5ndGgpXG4gIGlmIChpc0Zpbml0ZShvZmZzZXQpKSB7XG4gICAgaWYgKCFpc0Zpbml0ZShsZW5ndGgpKSB7XG4gICAgICBlbmNvZGluZyA9IGxlbmd0aFxuICAgICAgbGVuZ3RoID0gdW5kZWZpbmVkXG4gICAgfVxuICB9IGVsc2UgeyAgLy8gbGVnYWN5XG4gICAgdmFyIHN3YXAgPSBlbmNvZGluZ1xuICAgIGVuY29kaW5nID0gb2Zmc2V0XG4gICAgb2Zmc2V0ID0gbGVuZ3RoXG4gICAgbGVuZ3RoID0gc3dhcFxuICB9XG5cbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICB2YXIgcmVtYWluaW5nID0gdGhpcy5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuICBlbmNvZGluZyA9IFN0cmluZyhlbmNvZGluZyB8fCAndXRmOCcpLnRvTG93ZXJDYXNlKClcblxuICB2YXIgcmV0XG4gIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgICAgcmV0ID0gX2hleFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIHJldCA9IF91dGY4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYXNjaWknOlxuICAgICAgcmV0ID0gX2FzY2lpV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgIHJldCA9IF9iaW5hcnlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgcmV0ID0gX2Jhc2U2NFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXQgPSBfdXRmMTZsZVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gZW5jb2RpbmcnKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIChlbmNvZGluZywgc3RhcnQsIGVuZCkge1xuICB2YXIgc2VsZiA9IHRoaXNcblxuICBlbmNvZGluZyA9IFN0cmluZyhlbmNvZGluZyB8fCAndXRmOCcpLnRvTG93ZXJDYXNlKClcbiAgc3RhcnQgPSBOdW1iZXIoc3RhcnQpIHx8IDBcbiAgZW5kID0gKGVuZCAhPT0gdW5kZWZpbmVkKVxuICAgID8gTnVtYmVyKGVuZClcbiAgICA6IGVuZCA9IHNlbGYubGVuZ3RoXG5cbiAgLy8gRmFzdHBhdGggZW1wdHkgc3RyaW5nc1xuICBpZiAoZW5kID09PSBzdGFydClcbiAgICByZXR1cm4gJydcblxuICB2YXIgcmV0XG4gIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgICAgcmV0ID0gX2hleFNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIHJldCA9IF91dGY4U2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYXNjaWknOlxuICAgICAgcmV0ID0gX2FzY2lpU2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgIHJldCA9IF9iaW5hcnlTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgcmV0ID0gX2Jhc2U2NFNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXQgPSBfdXRmMTZsZVNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gZW5jb2RpbmcnKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0J1ZmZlcicsXG4gICAgZGF0YTogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5fYXJyIHx8IHRoaXMsIDApXG4gIH1cbn1cblxuLy8gY29weSh0YXJnZXRCdWZmZXIsIHRhcmdldFN0YXJ0PTAsIHNvdXJjZVN0YXJ0PTAsIHNvdXJjZUVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gKHRhcmdldCwgdGFyZ2V0X3N0YXJ0LCBzdGFydCwgZW5kKSB7XG4gIHZhciBzb3VyY2UgPSB0aGlzXG5cbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kICYmIGVuZCAhPT0gMCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKCF0YXJnZXRfc3RhcnQpIHRhcmdldF9zdGFydCA9IDBcblxuICAvLyBDb3B5IDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVyblxuICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCB8fCBzb3VyY2UubGVuZ3RoID09PSAwKSByZXR1cm5cblxuICAvLyBGYXRhbCBlcnJvciBjb25kaXRpb25zXG4gIGFzc2VydChlbmQgPj0gc3RhcnQsICdzb3VyY2VFbmQgPCBzb3VyY2VTdGFydCcpXG4gIGFzc2VydCh0YXJnZXRfc3RhcnQgPj0gMCAmJiB0YXJnZXRfc3RhcnQgPCB0YXJnZXQubGVuZ3RoLFxuICAgICAgJ3RhcmdldFN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBhc3NlcnQoc3RhcnQgPj0gMCAmJiBzdGFydCA8IHNvdXJjZS5sZW5ndGgsICdzb3VyY2VTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgYXNzZXJ0KGVuZCA+PSAwICYmIGVuZCA8PSBzb3VyY2UubGVuZ3RoLCAnc291cmNlRW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIC8vIEFyZSB3ZSBvb2I/XG4gIGlmIChlbmQgPiB0aGlzLmxlbmd0aClcbiAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0Lmxlbmd0aCAtIHRhcmdldF9zdGFydCA8IGVuZCAtIHN0YXJ0KVxuICAgIGVuZCA9IHRhcmdldC5sZW5ndGggLSB0YXJnZXRfc3RhcnQgKyBzdGFydFxuXG4gIHZhciBsZW4gPSBlbmQgLSBzdGFydFxuXG4gIGlmIChsZW4gPCAxMDAgfHwgIUJ1ZmZlci5fdXNlVHlwZWRBcnJheXMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKVxuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRfc3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0Ll9zZXQodGhpcy5zdWJhcnJheShzdGFydCwgc3RhcnQgKyBsZW4pLCB0YXJnZXRfc3RhcnQpXG4gIH1cbn1cblxuZnVuY3Rpb24gX2Jhc2U2NFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gYnVmLmxlbmd0aCkge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1Zi5zbGljZShzdGFydCwgZW5kKSlcbiAgfVxufVxuXG5mdW5jdGlvbiBfdXRmOFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJlcyA9ICcnXG4gIHZhciB0bXAgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICBpZiAoYnVmW2ldIDw9IDB4N0YpIHtcbiAgICAgIHJlcyArPSBkZWNvZGVVdGY4Q2hhcih0bXApICsgU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gICAgICB0bXAgPSAnJ1xuICAgIH0gZWxzZSB7XG4gICAgICB0bXAgKz0gJyUnICsgYnVmW2ldLnRvU3RyaW5nKDE2KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXMgKyBkZWNvZGVVdGY4Q2hhcih0bXApXG59XG5cbmZ1bmN0aW9uIF9hc2NpaVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKylcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gX2JpbmFyeVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIF9hc2NpaVNsaWNlKGJ1Ziwgc3RhcnQsIGVuZClcbn1cblxuZnVuY3Rpb24gX2hleFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcblxuICBpZiAoIXN0YXJ0IHx8IHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIGlmICghZW5kIHx8IGVuZCA8IDAgfHwgZW5kID4gbGVuKSBlbmQgPSBsZW5cblxuICB2YXIgb3V0ID0gJydcbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICBvdXQgKz0gdG9IZXgoYnVmW2ldKVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gX3V0ZjE2bGVTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBieXRlcyA9IGJ1Zi5zbGljZShzdGFydCwgZW5kKVxuICB2YXIgcmVzID0gJydcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkgKz0gMikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldICsgYnl0ZXNbaSsxXSAqIDI1NilcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiAoc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgc3RhcnQgPSBjbGFtcChzdGFydCwgbGVuLCAwKVxuICBlbmQgPSBjbGFtcChlbmQsIGxlbiwgbGVuKVxuXG4gIGlmIChCdWZmZXIuX3VzZVR5cGVkQXJyYXlzKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5fYXVnbWVudCh0aGlzLnN1YmFycmF5KHN0YXJ0LCBlbmQpKVxuICB9IGVsc2Uge1xuICAgIHZhciBzbGljZUxlbiA9IGVuZCAtIHN0YXJ0XG4gICAgdmFyIG5ld0J1ZiA9IG5ldyBCdWZmZXIoc2xpY2VMZW4sIHVuZGVmaW5lZCwgdHJ1ZSlcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWNlTGVuOyBpKyspIHtcbiAgICAgIG5ld0J1ZltpXSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgICByZXR1cm4gbmV3QnVmXG4gIH1cbn1cblxuLy8gYGdldGAgd2lsbCBiZSByZW1vdmVkIGluIE5vZGUgMC4xMytcbkJ1ZmZlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKG9mZnNldCkge1xuICBjb25zb2xlLmxvZygnLmdldCgpIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB1c2luZyBhcnJheSBpbmRleGVzIGluc3RlYWQuJylcbiAgcmV0dXJuIHRoaXMucmVhZFVJbnQ4KG9mZnNldClcbn1cblxuLy8gYHNldGAgd2lsbCBiZSByZW1vdmVkIGluIE5vZGUgMC4xMytcbkJ1ZmZlci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKHYsIG9mZnNldCkge1xuICBjb25zb2xlLmxvZygnLnNldCgpIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB1c2luZyBhcnJheSBpbmRleGVzIGluc3RlYWQuJylcbiAgcmV0dXJuIHRoaXMud3JpdGVVSW50OCh2LCBvZmZzZXQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQ4ID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCA8IHRoaXMubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgaWYgKG9mZnNldCA+PSB0aGlzLmxlbmd0aClcbiAgICByZXR1cm5cblxuICByZXR1cm4gdGhpc1tvZmZzZXRdXG59XG5cbmZ1bmN0aW9uIF9yZWFkVUludDE2IChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDEgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgdmFyIHZhbFxuICBpZiAobGl0dGxlRW5kaWFuKSB7XG4gICAgdmFsID0gYnVmW29mZnNldF1cbiAgICBpZiAob2Zmc2V0ICsgMSA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgMV0gPDwgOFxuICB9IGVsc2Uge1xuICAgIHZhbCA9IGJ1ZltvZmZzZXRdIDw8IDhcbiAgICBpZiAob2Zmc2V0ICsgMSA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgMV1cbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkVUludDE2KHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkVUludDE2KHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfcmVhZFVJbnQzMiAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIHZhciB2YWxcbiAgaWYgKGxpdHRsZUVuZGlhbikge1xuICAgIGlmIChvZmZzZXQgKyAyIDwgbGVuKVxuICAgICAgdmFsID0gYnVmW29mZnNldCArIDJdIDw8IDE2XG4gICAgaWYgKG9mZnNldCArIDEgPCBsZW4pXG4gICAgICB2YWwgfD0gYnVmW29mZnNldCArIDFdIDw8IDhcbiAgICB2YWwgfD0gYnVmW29mZnNldF1cbiAgICBpZiAob2Zmc2V0ICsgMyA8IGxlbilcbiAgICAgIHZhbCA9IHZhbCArIChidWZbb2Zmc2V0ICsgM10gPDwgMjQgPj4+IDApXG4gIH0gZWxzZSB7XG4gICAgaWYgKG9mZnNldCArIDEgPCBsZW4pXG4gICAgICB2YWwgPSBidWZbb2Zmc2V0ICsgMV0gPDwgMTZcbiAgICBpZiAob2Zmc2V0ICsgMiA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgMl0gPDwgOFxuICAgIGlmIChvZmZzZXQgKyAzIDwgbGVuKVxuICAgICAgdmFsIHw9IGJ1ZltvZmZzZXQgKyAzXVxuICAgIHZhbCA9IHZhbCArIChidWZbb2Zmc2V0XSA8PCAyNCA+Pj4gMClcbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkVUludDMyKHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkVUludDMyKHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQ4ID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsXG4gICAgICAgICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCA8IHRoaXMubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgaWYgKG9mZnNldCA+PSB0aGlzLmxlbmd0aClcbiAgICByZXR1cm5cblxuICB2YXIgbmVnID0gdGhpc1tvZmZzZXRdICYgMHg4MFxuICBpZiAobmVnKVxuICAgIHJldHVybiAoMHhmZiAtIHRoaXNbb2Zmc2V0XSArIDEpICogLTFcbiAgZWxzZVxuICAgIHJldHVybiB0aGlzW29mZnNldF1cbn1cblxuZnVuY3Rpb24gX3JlYWRJbnQxNiAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAxIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIHZhciB2YWwgPSBfcmVhZFVJbnQxNihidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCB0cnVlKVxuICB2YXIgbmVnID0gdmFsICYgMHg4MDAwXG4gIGlmIChuZWcpXG4gICAgcmV0dXJuICgweGZmZmYgLSB2YWwgKyAxKSAqIC0xXG4gIGVsc2VcbiAgICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2TEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRJbnQxNih0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkSW50MTYodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF9yZWFkSW50MzIgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICB2YXIgdmFsID0gX3JlYWRVSW50MzIoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgdHJ1ZSlcbiAgdmFyIG5lZyA9IHZhbCAmIDB4ODAwMDAwMDBcbiAgaWYgKG5lZylcbiAgICByZXR1cm4gKDB4ZmZmZmZmZmYgLSB2YWwgKyAxKSAqIC0xXG4gIGVsc2VcbiAgICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyTEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRJbnQzMih0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkSW50MzIodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF9yZWFkRmxvYXQgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgcmV0dXJuIGllZWU3NTQucmVhZChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZEZsb2F0KHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0QkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRGbG9hdCh0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3JlYWREb3VibGUgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCArIDcgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgcmV0dXJuIGllZWU3NTQucmVhZChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlTEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWREb3VibGUodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlQkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWREb3VibGUodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50OCA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgPCB0aGlzLmxlbmd0aCwgJ3RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZ1aW50KHZhbHVlLCAweGZmKVxuICB9XG5cbiAgaWYgKG9mZnNldCA+PSB0aGlzLmxlbmd0aCkgcmV0dXJuXG5cbiAgdGhpc1tvZmZzZXRdID0gdmFsdWVcbn1cblxuZnVuY3Rpb24gX3dyaXRlVUludDE2IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDEgPCBidWYubGVuZ3RoLCAndHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnVpbnQodmFsdWUsIDB4ZmZmZilcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4obGVuIC0gb2Zmc2V0LCAyKTsgaSA8IGo7IGkrKykge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9XG4gICAgICAgICh2YWx1ZSAmICgweGZmIDw8ICg4ICogKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkpKSkgPj4+XG4gICAgICAgICAgICAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSAqIDhcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2TEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2QkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3dyaXRlVUludDMyIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAndHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnVpbnQodmFsdWUsIDB4ZmZmZmZmZmYpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGxlbiAtIG9mZnNldCwgNCk7IGkgPCBqOyBpKyspIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPVxuICAgICAgICAodmFsdWUgPj4+IChsaXR0bGVFbmRpYW4gPyBpIDogMyAtIGkpICogOCkgJiAweGZmXG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQ4ID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCA8IHRoaXMubGVuZ3RoLCAnVHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnNpbnQodmFsdWUsIDB4N2YsIC0weDgwKVxuICB9XG5cbiAgaWYgKG9mZnNldCA+PSB0aGlzLmxlbmd0aClcbiAgICByZXR1cm5cblxuICBpZiAodmFsdWUgPj0gMClcbiAgICB0aGlzLndyaXRlVUludDgodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpXG4gIGVsc2VcbiAgICB0aGlzLndyaXRlVUludDgoMHhmZiArIHZhbHVlICsgMSwgb2Zmc2V0LCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3dyaXRlSW50MTYgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMSA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmc2ludCh2YWx1ZSwgMHg3ZmZmLCAtMHg4MDAwKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgaWYgKHZhbHVlID49IDApXG4gICAgX3dyaXRlVUludDE2KGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydClcbiAgZWxzZVxuICAgIF93cml0ZVVJbnQxNihidWYsIDB4ZmZmZiArIHZhbHVlICsgMSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2QkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfd3JpdGVJbnQzMiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZzaW50KHZhbHVlLCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGlmICh2YWx1ZSA+PSAwKVxuICAgIF93cml0ZVVJbnQzMihidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpXG4gIGVsc2VcbiAgICBfd3JpdGVVSW50MzIoYnVmLCAweGZmZmZmZmZmICsgdmFsdWUgKyAxLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF93cml0ZUZsb2F0IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZklFRUU3NTQodmFsdWUsIDMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgsIC0zLjQwMjgyMzQ2NjM4NTI4ODZlKzM4KVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdExFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF93cml0ZURvdWJsZSAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyA3IDwgYnVmLmxlbmd0aCxcbiAgICAgICAgJ1RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZJRUVFNzU0KHZhbHVlLCAxLjc5NzY5MzEzNDg2MjMxNTdFKzMwOCwgLTEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4KVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG4vLyBmaWxsKHZhbHVlLCBzdGFydD0wLCBlbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uICh2YWx1ZSwgc3RhcnQsIGVuZCkge1xuICBpZiAoIXZhbHVlKSB2YWx1ZSA9IDBcbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kKSBlbmQgPSB0aGlzLmxlbmd0aFxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5jaGFyQ29kZUF0KDApXG4gIH1cblxuICBhc3NlcnQodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiAhaXNOYU4odmFsdWUpLCAndmFsdWUgaXMgbm90IGEgbnVtYmVyJylcbiAgYXNzZXJ0KGVuZCA+PSBzdGFydCwgJ2VuZCA8IHN0YXJ0JylcblxuICAvLyBGaWxsIDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVyblxuICBpZiAodGhpcy5sZW5ndGggPT09IDApIHJldHVyblxuXG4gIGFzc2VydChzdGFydCA+PSAwICYmIHN0YXJ0IDwgdGhpcy5sZW5ndGgsICdzdGFydCBvdXQgb2YgYm91bmRzJylcbiAgYXNzZXJ0KGVuZCA+PSAwICYmIGVuZCA8PSB0aGlzLmxlbmd0aCwgJ2VuZCBvdXQgb2YgYm91bmRzJylcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgIHRoaXNbaV0gPSB2YWx1ZVxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5zcGVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG91dCA9IFtdXG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgb3V0W2ldID0gdG9IZXgodGhpc1tpXSlcbiAgICBpZiAoaSA9PT0gZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFUykge1xuICAgICAgb3V0W2kgKyAxXSA9ICcuLi4nXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuICByZXR1cm4gJzxCdWZmZXIgJyArIG91dC5qb2luKCcgJykgKyAnPidcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGBBcnJheUJ1ZmZlcmAgd2l0aCB0aGUgKmNvcGllZCogbWVtb3J5IG9mIHRoZSBidWZmZXIgaW5zdGFuY2UuXG4gKiBBZGRlZCBpbiBOb2RlIDAuMTIuIE9ubHkgYXZhaWxhYmxlIGluIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBBcnJheUJ1ZmZlci5cbiAqL1xuQnVmZmVyLnByb3RvdHlwZS50b0FycmF5QnVmZmVyID0gZnVuY3Rpb24gKCkge1xuICBpZiAodHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKEJ1ZmZlci5fdXNlVHlwZWRBcnJheXMpIHtcbiAgICAgIHJldHVybiAobmV3IEJ1ZmZlcih0aGlzKSkuYnVmZmVyXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBidWYgPSBuZXcgVWludDhBcnJheSh0aGlzLmxlbmd0aClcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBidWYubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpXG4gICAgICAgIGJ1ZltpXSA9IHRoaXNbaV1cbiAgICAgIHJldHVybiBidWYuYnVmZmVyXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignQnVmZmVyLnRvQXJyYXlCdWZmZXIgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXInKVxuICB9XG59XG5cbi8vIEhFTFBFUiBGVU5DVElPTlNcbi8vID09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gc3RyaW5ndHJpbSAoc3RyKSB7XG4gIGlmIChzdHIudHJpbSkgcmV0dXJuIHN0ci50cmltKClcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJylcbn1cblxudmFyIEJQID0gQnVmZmVyLnByb3RvdHlwZVxuXG4vKipcbiAqIEF1Z21lbnQgYSBVaW50OEFycmF5ICppbnN0YW5jZSogKG5vdCB0aGUgVWludDhBcnJheSBjbGFzcyEpIHdpdGggQnVmZmVyIG1ldGhvZHNcbiAqL1xuQnVmZmVyLl9hdWdtZW50ID0gZnVuY3Rpb24gKGFycikge1xuICBhcnIuX2lzQnVmZmVyID0gdHJ1ZVxuXG4gIC8vIHNhdmUgcmVmZXJlbmNlIHRvIG9yaWdpbmFsIFVpbnQ4QXJyYXkgZ2V0L3NldCBtZXRob2RzIGJlZm9yZSBvdmVyd3JpdGluZ1xuICBhcnIuX2dldCA9IGFyci5nZXRcbiAgYXJyLl9zZXQgPSBhcnIuc2V0XG5cbiAgLy8gZGVwcmVjYXRlZCwgd2lsbCBiZSByZW1vdmVkIGluIG5vZGUgMC4xMytcbiAgYXJyLmdldCA9IEJQLmdldFxuICBhcnIuc2V0ID0gQlAuc2V0XG5cbiAgYXJyLndyaXRlID0gQlAud3JpdGVcbiAgYXJyLnRvU3RyaW5nID0gQlAudG9TdHJpbmdcbiAgYXJyLnRvTG9jYWxlU3RyaW5nID0gQlAudG9TdHJpbmdcbiAgYXJyLnRvSlNPTiA9IEJQLnRvSlNPTlxuICBhcnIuY29weSA9IEJQLmNvcHlcbiAgYXJyLnNsaWNlID0gQlAuc2xpY2VcbiAgYXJyLnJlYWRVSW50OCA9IEJQLnJlYWRVSW50OFxuICBhcnIucmVhZFVJbnQxNkxFID0gQlAucmVhZFVJbnQxNkxFXG4gIGFyci5yZWFkVUludDE2QkUgPSBCUC5yZWFkVUludDE2QkVcbiAgYXJyLnJlYWRVSW50MzJMRSA9IEJQLnJlYWRVSW50MzJMRVxuICBhcnIucmVhZFVJbnQzMkJFID0gQlAucmVhZFVJbnQzMkJFXG4gIGFyci5yZWFkSW50OCA9IEJQLnJlYWRJbnQ4XG4gIGFyci5yZWFkSW50MTZMRSA9IEJQLnJlYWRJbnQxNkxFXG4gIGFyci5yZWFkSW50MTZCRSA9IEJQLnJlYWRJbnQxNkJFXG4gIGFyci5yZWFkSW50MzJMRSA9IEJQLnJlYWRJbnQzMkxFXG4gIGFyci5yZWFkSW50MzJCRSA9IEJQLnJlYWRJbnQzMkJFXG4gIGFyci5yZWFkRmxvYXRMRSA9IEJQLnJlYWRGbG9hdExFXG4gIGFyci5yZWFkRmxvYXRCRSA9IEJQLnJlYWRGbG9hdEJFXG4gIGFyci5yZWFkRG91YmxlTEUgPSBCUC5yZWFkRG91YmxlTEVcbiAgYXJyLnJlYWREb3VibGVCRSA9IEJQLnJlYWREb3VibGVCRVxuICBhcnIud3JpdGVVSW50OCA9IEJQLndyaXRlVUludDhcbiAgYXJyLndyaXRlVUludDE2TEUgPSBCUC53cml0ZVVJbnQxNkxFXG4gIGFyci53cml0ZVVJbnQxNkJFID0gQlAud3JpdGVVSW50MTZCRVxuICBhcnIud3JpdGVVSW50MzJMRSA9IEJQLndyaXRlVUludDMyTEVcbiAgYXJyLndyaXRlVUludDMyQkUgPSBCUC53cml0ZVVJbnQzMkJFXG4gIGFyci53cml0ZUludDggPSBCUC53cml0ZUludDhcbiAgYXJyLndyaXRlSW50MTZMRSA9IEJQLndyaXRlSW50MTZMRVxuICBhcnIud3JpdGVJbnQxNkJFID0gQlAud3JpdGVJbnQxNkJFXG4gIGFyci53cml0ZUludDMyTEUgPSBCUC53cml0ZUludDMyTEVcbiAgYXJyLndyaXRlSW50MzJCRSA9IEJQLndyaXRlSW50MzJCRVxuICBhcnIud3JpdGVGbG9hdExFID0gQlAud3JpdGVGbG9hdExFXG4gIGFyci53cml0ZUZsb2F0QkUgPSBCUC53cml0ZUZsb2F0QkVcbiAgYXJyLndyaXRlRG91YmxlTEUgPSBCUC53cml0ZURvdWJsZUxFXG4gIGFyci53cml0ZURvdWJsZUJFID0gQlAud3JpdGVEb3VibGVCRVxuICBhcnIuZmlsbCA9IEJQLmZpbGxcbiAgYXJyLmluc3BlY3QgPSBCUC5pbnNwZWN0XG4gIGFyci50b0FycmF5QnVmZmVyID0gQlAudG9BcnJheUJ1ZmZlclxuXG4gIHJldHVybiBhcnJcbn1cblxuLy8gc2xpY2Uoc3RhcnQsIGVuZClcbmZ1bmN0aW9uIGNsYW1wIChpbmRleCwgbGVuLCBkZWZhdWx0VmFsdWUpIHtcbiAgaWYgKHR5cGVvZiBpbmRleCAhPT0gJ251bWJlcicpIHJldHVybiBkZWZhdWx0VmFsdWVcbiAgaW5kZXggPSB+fmluZGV4OyAgLy8gQ29lcmNlIHRvIGludGVnZXIuXG4gIGlmIChpbmRleCA+PSBsZW4pIHJldHVybiBsZW5cbiAgaWYgKGluZGV4ID49IDApIHJldHVybiBpbmRleFxuICBpbmRleCArPSBsZW5cbiAgaWYgKGluZGV4ID49IDApIHJldHVybiBpbmRleFxuICByZXR1cm4gMFxufVxuXG5mdW5jdGlvbiBjb2VyY2UgKGxlbmd0aCkge1xuICAvLyBDb2VyY2UgbGVuZ3RoIHRvIGEgbnVtYmVyIChwb3NzaWJseSBOYU4pLCByb3VuZCB1cFxuICAvLyBpbiBjYXNlIGl0J3MgZnJhY3Rpb25hbCAoZS5nLiAxMjMuNDU2KSB0aGVuIGRvIGFcbiAgLy8gZG91YmxlIG5lZ2F0ZSB0byBjb2VyY2UgYSBOYU4gdG8gMC4gRWFzeSwgcmlnaHQ/XG4gIGxlbmd0aCA9IH5+TWF0aC5jZWlsKCtsZW5ndGgpXG4gIHJldHVybiBsZW5ndGggPCAwID8gMCA6IGxlbmd0aFxufVxuXG5mdW5jdGlvbiBpc0FycmF5IChzdWJqZWN0KSB7XG4gIHJldHVybiAoQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoc3ViamVjdCkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc3ViamVjdCkgPT09ICdbb2JqZWN0IEFycmF5XSdcbiAgfSkoc3ViamVjdClcbn1cblxuZnVuY3Rpb24gaXNBcnJheWlzaCAoc3ViamVjdCkge1xuICByZXR1cm4gaXNBcnJheShzdWJqZWN0KSB8fCBCdWZmZXIuaXNCdWZmZXIoc3ViamVjdCkgfHxcbiAgICAgIHN1YmplY3QgJiYgdHlwZW9mIHN1YmplY3QgPT09ICdvYmplY3QnICYmXG4gICAgICB0eXBlb2Ygc3ViamVjdC5sZW5ndGggPT09ICdudW1iZXInXG59XG5cbmZ1bmN0aW9uIHRvSGV4IChuKSB7XG4gIGlmIChuIDwgMTYpIHJldHVybiAnMCcgKyBuLnRvU3RyaW5nKDE2KVxuICByZXR1cm4gbi50b1N0cmluZygxNilcbn1cblxuZnVuY3Rpb24gdXRmOFRvQnl0ZXMgKHN0cikge1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgYiA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaWYgKGIgPD0gMHg3RilcbiAgICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpKVxuICAgIGVsc2Uge1xuICAgICAgdmFyIHN0YXJ0ID0gaVxuICAgICAgaWYgKGIgPj0gMHhEODAwICYmIGIgPD0gMHhERkZGKSBpKytcbiAgICAgIHZhciBoID0gZW5jb2RlVVJJQ29tcG9uZW50KHN0ci5zbGljZShzdGFydCwgaSsxKSkuc3Vic3RyKDEpLnNwbGl0KCclJylcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaC5sZW5ndGg7IGorKylcbiAgICAgICAgYnl0ZUFycmF5LnB1c2gocGFyc2VJbnQoaFtqXSwgMTYpKVxuICAgIH1cbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGFzY2lpVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIC8vIE5vZGUncyBjb2RlIHNlZW1zIHRvIGJlIGRvaW5nIHRoaXMgYW5kIG5vdCAmIDB4N0YuLlxuICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpICYgMHhGRilcbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGMsIGhpLCBsb1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoaSA9IGMgPj4gOFxuICAgIGxvID0gYyAlIDI1NlxuICAgIGJ5dGVBcnJheS5wdXNoKGxvKVxuICAgIGJ5dGVBcnJheS5wdXNoKGhpKVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBiYXNlNjRUb0J5dGVzIChzdHIpIHtcbiAgcmV0dXJuIGJhc2U2NC50b0J5dGVBcnJheShzdHIpXG59XG5cbmZ1bmN0aW9uIGJsaXRCdWZmZXIgKHNyYywgZHN0LCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgcG9zXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoKGkgKyBvZmZzZXQgPj0gZHN0Lmxlbmd0aCkgfHwgKGkgPj0gc3JjLmxlbmd0aCkpXG4gICAgICBicmVha1xuICAgIGRzdFtpICsgb2Zmc2V0XSA9IHNyY1tpXVxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIGRlY29kZVV0ZjhDaGFyIChzdHIpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHN0cilcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoMHhGRkZEKSAvLyBVVEYgOCBpbnZhbGlkIGNoYXJcbiAgfVxufVxuXG4vKlxuICogV2UgaGF2ZSB0byBtYWtlIHN1cmUgdGhhdCB0aGUgdmFsdWUgaXMgYSB2YWxpZCBpbnRlZ2VyLiBUaGlzIG1lYW5zIHRoYXQgaXRcbiAqIGlzIG5vbi1uZWdhdGl2ZS4gSXQgaGFzIG5vIGZyYWN0aW9uYWwgY29tcG9uZW50IGFuZCB0aGF0IGl0IGRvZXMgbm90XG4gKiBleGNlZWQgdGhlIG1heGltdW0gYWxsb3dlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gdmVyaWZ1aW50ICh2YWx1ZSwgbWF4KSB7XG4gIGFzc2VydCh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInLCAnY2Fubm90IHdyaXRlIGEgbm9uLW51bWJlciBhcyBhIG51bWJlcicpXG4gIGFzc2VydCh2YWx1ZSA+PSAwLCAnc3BlY2lmaWVkIGEgbmVnYXRpdmUgdmFsdWUgZm9yIHdyaXRpbmcgYW4gdW5zaWduZWQgdmFsdWUnKVxuICBhc3NlcnQodmFsdWUgPD0gbWF4LCAndmFsdWUgaXMgbGFyZ2VyIHRoYW4gbWF4aW11bSB2YWx1ZSBmb3IgdHlwZScpXG4gIGFzc2VydChNYXRoLmZsb29yKHZhbHVlKSA9PT0gdmFsdWUsICd2YWx1ZSBoYXMgYSBmcmFjdGlvbmFsIGNvbXBvbmVudCcpXG59XG5cbmZ1bmN0aW9uIHZlcmlmc2ludCAodmFsdWUsIG1heCwgbWluKSB7XG4gIGFzc2VydCh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInLCAnY2Fubm90IHdyaXRlIGEgbm9uLW51bWJlciBhcyBhIG51bWJlcicpXG4gIGFzc2VydCh2YWx1ZSA8PSBtYXgsICd2YWx1ZSBsYXJnZXIgdGhhbiBtYXhpbXVtIGFsbG93ZWQgdmFsdWUnKVxuICBhc3NlcnQodmFsdWUgPj0gbWluLCAndmFsdWUgc21hbGxlciB0aGFuIG1pbmltdW0gYWxsb3dlZCB2YWx1ZScpXG4gIGFzc2VydChNYXRoLmZsb29yKHZhbHVlKSA9PT0gdmFsdWUsICd2YWx1ZSBoYXMgYSBmcmFjdGlvbmFsIGNvbXBvbmVudCcpXG59XG5cbmZ1bmN0aW9uIHZlcmlmSUVFRTc1NCAodmFsdWUsIG1heCwgbWluKSB7XG4gIGFzc2VydCh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInLCAnY2Fubm90IHdyaXRlIGEgbm9uLW51bWJlciBhcyBhIG51bWJlcicpXG4gIGFzc2VydCh2YWx1ZSA8PSBtYXgsICd2YWx1ZSBsYXJnZXIgdGhhbiBtYXhpbXVtIGFsbG93ZWQgdmFsdWUnKVxuICBhc3NlcnQodmFsdWUgPj0gbWluLCAndmFsdWUgc21hbGxlciB0aGFuIG1pbmltdW0gYWxsb3dlZCB2YWx1ZScpXG59XG5cbmZ1bmN0aW9uIGFzc2VydCAodGVzdCwgbWVzc2FnZSkge1xuICBpZiAoIXRlc3QpIHRocm93IG5ldyBFcnJvcihtZXNzYWdlIHx8ICdGYWlsZWQgYXNzZXJ0aW9uJylcbn1cblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJXYjhHZWpcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi8uLi8uLi9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzXCIsXCIvLi4vLi4vbm9kZV9tb2R1bGVzL2J1ZmZlclwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbmV4cG9ydHMucmVhZCA9IGZ1bmN0aW9uIChidWZmZXIsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtXG4gIHZhciBlTGVuID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgbkJpdHMgPSAtN1xuICB2YXIgaSA9IGlzTEUgPyAobkJ5dGVzIC0gMSkgOiAwXG4gIHZhciBkID0gaXNMRSA/IC0xIDogMVxuICB2YXIgcyA9IGJ1ZmZlcltvZmZzZXQgKyBpXVxuXG4gIGkgKz0gZFxuXG4gIGUgPSBzICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIHMgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IGVMZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgZSA9IGUgKiAyNTYgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBtID0gZSAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBlID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBtTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IG0gPSBtICogMjU2ICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgaWYgKGUgPT09IDApIHtcbiAgICBlID0gMSAtIGVCaWFzXG4gIH0gZWxzZSBpZiAoZSA9PT0gZU1heCkge1xuICAgIHJldHVybiBtID8gTmFOIDogKChzID8gLTEgOiAxKSAqIEluZmluaXR5KVxuICB9IGVsc2Uge1xuICAgIG0gPSBtICsgTWF0aC5wb3coMiwgbUxlbilcbiAgICBlID0gZSAtIGVCaWFzXG4gIH1cbiAgcmV0dXJuIChzID8gLTEgOiAxKSAqIG0gKiBNYXRoLnBvdygyLCBlIC0gbUxlbilcbn1cblxuZXhwb3J0cy53cml0ZSA9IGZ1bmN0aW9uIChidWZmZXIsIHZhbHVlLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSwgY1xuICB2YXIgZUxlbiA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIHJ0ID0gKG1MZW4gPT09IDIzID8gTWF0aC5wb3coMiwgLTI0KSAtIE1hdGgucG93KDIsIC03NykgOiAwKVxuICB2YXIgaSA9IGlzTEUgPyAwIDogKG5CeXRlcyAtIDEpXG4gIHZhciBkID0gaXNMRSA/IDEgOiAtMVxuICB2YXIgcyA9IHZhbHVlIDwgMCB8fCAodmFsdWUgPT09IDAgJiYgMSAvIHZhbHVlIDwgMCkgPyAxIDogMFxuXG4gIHZhbHVlID0gTWF0aC5hYnModmFsdWUpXG5cbiAgaWYgKGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA9PT0gSW5maW5pdHkpIHtcbiAgICBtID0gaXNOYU4odmFsdWUpID8gMSA6IDBcbiAgICBlID0gZU1heFxuICB9IGVsc2Uge1xuICAgIGUgPSBNYXRoLmZsb29yKE1hdGgubG9nKHZhbHVlKSAvIE1hdGguTE4yKVxuICAgIGlmICh2YWx1ZSAqIChjID0gTWF0aC5wb3coMiwgLWUpKSA8IDEpIHtcbiAgICAgIGUtLVxuICAgICAgYyAqPSAyXG4gICAgfVxuICAgIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgdmFsdWUgKz0gcnQgLyBjXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlICs9IHJ0ICogTWF0aC5wb3coMiwgMSAtIGVCaWFzKVxuICAgIH1cbiAgICBpZiAodmFsdWUgKiBjID49IDIpIHtcbiAgICAgIGUrK1xuICAgICAgYyAvPSAyXG4gICAgfVxuXG4gICAgaWYgKGUgKyBlQmlhcyA+PSBlTWF4KSB7XG4gICAgICBtID0gMFxuICAgICAgZSA9IGVNYXhcbiAgICB9IGVsc2UgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICBtID0gKHZhbHVlICogYyAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSBlICsgZUJpYXNcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IHZhbHVlICogTWF0aC5wb3coMiwgZUJpYXMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gMFxuICAgIH1cbiAgfVxuXG4gIGZvciAoOyBtTGVuID49IDg7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IG0gJiAweGZmLCBpICs9IGQsIG0gLz0gMjU2LCBtTGVuIC09IDgpIHt9XG5cbiAgZSA9IChlIDw8IG1MZW4pIHwgbVxuICBlTGVuICs9IG1MZW5cbiAgZm9yICg7IGVMZW4gPiAwOyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBlICYgMHhmZiwgaSArPSBkLCBlIC89IDI1NiwgZUxlbiAtPSA4KSB7fVxuXG4gIGJ1ZmZlcltvZmZzZXQgKyBpIC0gZF0gfD0gcyAqIDEyOFxufVxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIldiOEdlalwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uLy4uL25vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzXCIsXCIvLi4vLi4vbm9kZV9tb2R1bGVzL2llZWU3NTRcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG52YXIgVnVlIC8vIGxhdGUgYmluZFxudmFyIG1hcCA9IE9iamVjdC5jcmVhdGUobnVsbClcbnZhciBzaGltbWVkID0gZmFsc2VcbnZhciBpc0Jyb3dzZXJpZnkgPSBmYWxzZVxuXG4vKipcbiAqIERldGVybWluZSBjb21wYXRpYmlsaXR5IGFuZCBhcHBseSBwYXRjaC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB2dWVcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gYnJvd3NlcmlmeVxuICovXG5cbmV4cG9ydHMuaW5zdGFsbCA9IGZ1bmN0aW9uICh2dWUsIGJyb3dzZXJpZnkpIHtcbiAgaWYgKHNoaW1tZWQpIHJldHVyblxuICBzaGltbWVkID0gdHJ1ZVxuXG4gIFZ1ZSA9IHZ1ZVxuICBpc0Jyb3dzZXJpZnkgPSBicm93c2VyaWZ5XG5cbiAgZXhwb3J0cy5jb21wYXRpYmxlID0gISFWdWUuaW50ZXJuYWxEaXJlY3RpdmVzXG4gIGlmICghZXhwb3J0cy5jb21wYXRpYmxlKSB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgJ1tITVJdIHZ1ZS1sb2FkZXIgaG90IHJlbG9hZCBpcyBvbmx5IGNvbXBhdGlibGUgd2l0aCAnICtcbiAgICAgICdWdWUuanMgMS4wLjArLidcbiAgICApXG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBwYXRjaCB2aWV3IGRpcmVjdGl2ZVxuICBwYXRjaFZpZXcoVnVlLmludGVybmFsRGlyZWN0aXZlcy5jb21wb25lbnQpXG4gIGNvbnNvbGUubG9nKCdbSE1SXSBWdWUgY29tcG9uZW50IGhvdCByZWxvYWQgc2hpbSBhcHBsaWVkLicpXG4gIC8vIHNoaW0gcm91dGVyLXZpZXcgaWYgcHJlc2VudFxuICB2YXIgcm91dGVyVmlldyA9IFZ1ZS5lbGVtZW50RGlyZWN0aXZlKCdyb3V0ZXItdmlldycpXG4gIGlmIChyb3V0ZXJWaWV3KSB7XG4gICAgcGF0Y2hWaWV3KHJvdXRlclZpZXcpXG4gICAgY29uc29sZS5sb2coJ1tITVJdIHZ1ZS1yb3V0ZXIgPHJvdXRlci12aWV3PiBob3QgcmVsb2FkIHNoaW0gYXBwbGllZC4nKVxuICB9XG59XG5cbi8qKlxuICogU2hpbSB0aGUgdmlldyBkaXJlY3RpdmUgKGNvbXBvbmVudCBvciByb3V0ZXItdmlldykuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IFZpZXdcbiAqL1xuXG5mdW5jdGlvbiBwYXRjaFZpZXcgKFZpZXcpIHtcbiAgdmFyIHVuYnVpbGQgPSBWaWV3LnVuYnVpbGRcbiAgVmlldy51bmJ1aWxkID0gZnVuY3Rpb24gKGRlZmVyKSB7XG4gICAgaWYgKCF0aGlzLmhvdFVwZGF0aW5nKSB7XG4gICAgICB2YXIgcHJldkNvbXBvbmVudCA9IHRoaXMuY2hpbGRWTSAmJiB0aGlzLmNoaWxkVk0uY29uc3RydWN0b3JcbiAgICAgIHJlbW92ZVZpZXcocHJldkNvbXBvbmVudCwgdGhpcylcbiAgICAgIC8vIGRlZmVyID0gdHJ1ZSBtZWFucyB3ZSBhcmUgdHJhbnNpdGlvbmluZyB0byBhIG5ld1xuICAgICAgLy8gQ29tcG9uZW50LiBSZWdpc3RlciB0aGlzIG5ldyBjb21wb25lbnQgdG8gdGhlIGxpc3QuXG4gICAgICBpZiAoZGVmZXIpIHtcbiAgICAgICAgYWRkVmlldyh0aGlzLkNvbXBvbmVudCwgdGhpcylcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gY2FsbCBvcmlnaW5hbFxuICAgIHJldHVybiB1bmJ1aWxkLmNhbGwodGhpcywgZGVmZXIpXG4gIH1cbn1cblxuLyoqXG4gKiBBZGQgYSBjb21wb25lbnQgdmlldyB0byBhIENvbXBvbmVudCdzIGhvdCBsaXN0XG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gQ29tcG9uZW50XG4gKiBAcGFyYW0ge0RpcmVjdGl2ZX0gdmlldyAtIHZpZXcgZGlyZWN0aXZlIGluc3RhbmNlXG4gKi9cblxuZnVuY3Rpb24gYWRkVmlldyAoQ29tcG9uZW50LCB2aWV3KSB7XG4gIHZhciBpZCA9IENvbXBvbmVudCAmJiBDb21wb25lbnQub3B0aW9ucy5ob3RJRFxuICBpZiAoaWQpIHtcbiAgICBpZiAoIW1hcFtpZF0pIHtcbiAgICAgIG1hcFtpZF0gPSB7XG4gICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50LFxuICAgICAgICB2aWV3czogW10sXG4gICAgICAgIGluc3RhbmNlczogW11cbiAgICAgIH1cbiAgICB9XG4gICAgbWFwW2lkXS52aWV3cy5wdXNoKHZpZXcpXG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmUgYSBjb21wb25lbnQgdmlldyBmcm9tIGEgQ29tcG9uZW50J3MgaG90IGxpc3RcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBDb21wb25lbnRcbiAqIEBwYXJhbSB7RGlyZWN0aXZlfSB2aWV3IC0gdmlldyBkaXJlY3RpdmUgaW5zdGFuY2VcbiAqL1xuXG5mdW5jdGlvbiByZW1vdmVWaWV3IChDb21wb25lbnQsIHZpZXcpIHtcbiAgdmFyIGlkID0gQ29tcG9uZW50ICYmIENvbXBvbmVudC5vcHRpb25zLmhvdElEXG4gIGlmIChpZCkge1xuICAgIG1hcFtpZF0udmlld3MuJHJlbW92ZSh2aWV3KVxuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgcmVjb3JkIGZvciBhIGhvdCBtb2R1bGUsIHdoaWNoIGtlZXBzIHRyYWNrIG9mIGl0cyBjb25zdHJ1Y290cixcbiAqIGluc3RuYWNlcyBhbmQgdmlld3MgKGNvbXBvbmVudCBkaXJlY3RpdmVzIG9yIHJvdXRlci12aWV3cykuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5cbmV4cG9ydHMuY3JlYXRlUmVjb3JkID0gZnVuY3Rpb24gKGlkLCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zLm9wdGlvbnNcbiAgfVxuICBpZiAodHlwZW9mIG9wdGlvbnMuZWwgIT09ICdzdHJpbmcnICYmIHR5cGVvZiBvcHRpb25zLmRhdGEgIT09ICdvYmplY3QnKSB7XG4gICAgbWFrZU9wdGlvbnNIb3QoaWQsIG9wdGlvbnMpXG4gICAgbWFwW2lkXSA9IHtcbiAgICAgIENvbXBvbmVudDogbnVsbCxcbiAgICAgIHZpZXdzOiBbXSxcbiAgICAgIGluc3RhbmNlczogW11cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBNYWtlIGEgQ29tcG9uZW50IG9wdGlvbnMgb2JqZWN0IGhvdC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKi9cblxuZnVuY3Rpb24gbWFrZU9wdGlvbnNIb3QgKGlkLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMuaG90SUQgPSBpZFxuICBpbmplY3RIb29rKG9wdGlvbnMsICdjcmVhdGVkJywgZnVuY3Rpb24gKCkge1xuICAgIHZhciByZWNvcmQgPSBtYXBbaWRdXG4gICAgaWYgKCFyZWNvcmQuQ29tcG9uZW50KSB7XG4gICAgICByZWNvcmQuQ29tcG9uZW50ID0gdGhpcy5jb25zdHJ1Y3RvclxuICAgIH1cbiAgICByZWNvcmQuaW5zdGFuY2VzLnB1c2godGhpcylcbiAgfSlcbiAgaW5qZWN0SG9vayhvcHRpb25zLCAnYmVmb3JlRGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICBtYXBbaWRdLmluc3RhbmNlcy4kcmVtb3ZlKHRoaXMpXG4gIH0pXG59XG5cbi8qKlxuICogSW5qZWN0IGEgaG9vayB0byBhIGhvdCByZWxvYWRhYmxlIGNvbXBvbmVudCBzbyB0aGF0XG4gKiB3ZSBjYW4ga2VlcCB0cmFjayBvZiBpdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGhvb2tcbiAqL1xuXG5mdW5jdGlvbiBpbmplY3RIb29rIChvcHRpb25zLCBuYW1lLCBob29rKSB7XG4gIHZhciBleGlzdGluZyA9IG9wdGlvbnNbbmFtZV1cbiAgb3B0aW9uc1tuYW1lXSA9IGV4aXN0aW5nXG4gICAgPyBBcnJheS5pc0FycmF5KGV4aXN0aW5nKVxuICAgICAgPyBleGlzdGluZy5jb25jYXQoaG9vaylcbiAgICAgIDogW2V4aXN0aW5nLCBob29rXVxuICAgIDogW2hvb2tdXG59XG5cbi8qKlxuICogVXBkYXRlIGEgaG90IGNvbXBvbmVudC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAqIEBwYXJhbSB7T2JqZWN0fG51bGx9IG5ld09wdGlvbnNcbiAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IG5ld1RlbXBsYXRlXG4gKi9cblxuZXhwb3J0cy51cGRhdGUgPSBmdW5jdGlvbiAoaWQsIG5ld09wdGlvbnMsIG5ld1RlbXBsYXRlKSB7XG4gIHZhciByZWNvcmQgPSBtYXBbaWRdXG4gIC8vIGZvcmNlIGZ1bGwtcmVsb2FkIGlmIGFuIGluc3RhbmNlIG9mIHRoZSBjb21wb25lbnQgaXMgYWN0aXZlIGJ1dCBpcyBub3RcbiAgLy8gbWFuYWdlZCBieSBhIHZpZXdcbiAgaWYgKCFyZWNvcmQgfHwgKHJlY29yZC5pbnN0YW5jZXMubGVuZ3RoICYmICFyZWNvcmQudmlld3MubGVuZ3RoKSkge1xuICAgIGNvbnNvbGUubG9nKCdbSE1SXSBSb290IG9yIG1hbnVhbGx5LW1vdW50ZWQgaW5zdGFuY2UgbW9kaWZpZWQuIEZ1bGwgcmVsb2FkIG1heSBiZSByZXF1aXJlZC4nKVxuICAgIGlmICghaXNCcm93c2VyaWZ5KSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gYnJvd3NlcmlmeS1obXIgc29tZWhvdyBzZW5kcyBpbmNvbXBsZXRlIGJ1bmRsZSBpZiB3ZSByZWxvYWQgaGVyZVxuICAgICAgcmV0dXJuXG4gICAgfVxuICB9XG4gIGlmICghaXNCcm93c2VyaWZ5KSB7XG4gICAgLy8gYnJvd3NlcmlmeS1obXIgYWxyZWFkeSBsb2dzIHRoaXNcbiAgICBjb25zb2xlLmxvZygnW0hNUl0gVXBkYXRpbmcgY29tcG9uZW50OiAnICsgZm9ybWF0KGlkKSlcbiAgfVxuICB2YXIgQ29tcG9uZW50ID0gcmVjb3JkLkNvbXBvbmVudFxuICAvLyB1cGRhdGUgY29uc3RydWN0b3JcbiAgaWYgKG5ld09wdGlvbnMpIHtcbiAgICAvLyBpbiBjYXNlIHRoZSB1c2VyIGV4cG9ydHMgYSBjb25zdHJ1Y3RvclxuICAgIENvbXBvbmVudCA9IHJlY29yZC5Db21wb25lbnQgPSB0eXBlb2YgbmV3T3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgPyBuZXdPcHRpb25zXG4gICAgICA6IFZ1ZS5leHRlbmQobmV3T3B0aW9ucylcbiAgICBtYWtlT3B0aW9uc0hvdChpZCwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgaWYgKG5ld1RlbXBsYXRlKSB7XG4gICAgQ29tcG9uZW50Lm9wdGlvbnMudGVtcGxhdGUgPSBuZXdUZW1wbGF0ZVxuICB9XG4gIC8vIGhhbmRsZSByZWN1cnNpdmUgbG9va3VwXG4gIGlmIChDb21wb25lbnQub3B0aW9ucy5uYW1lKSB7XG4gICAgQ29tcG9uZW50Lm9wdGlvbnMuY29tcG9uZW50c1tDb21wb25lbnQub3B0aW9ucy5uYW1lXSA9IENvbXBvbmVudFxuICB9XG4gIC8vIHJlc2V0IGNvbnN0cnVjdG9yIGNhY2hlZCBsaW5rZXJcbiAgQ29tcG9uZW50LmxpbmtlciA9IG51bGxcbiAgLy8gcmVsb2FkIGFsbCB2aWV3c1xuICByZWNvcmQudmlld3MuZm9yRWFjaChmdW5jdGlvbiAodmlldykge1xuICAgIHVwZGF0ZVZpZXcodmlldywgQ29tcG9uZW50KVxuICB9KVxuICAvLyBmbHVzaCBkZXZ0b29sc1xuICBpZiAod2luZG93Ll9fVlVFX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pIHtcbiAgICB3aW5kb3cuX19WVUVfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5lbWl0KCdmbHVzaCcpXG4gIH1cbn1cblxuLyoqXG4gKiBVcGRhdGUgYSBjb21wb25lbnQgdmlldyBpbnN0YW5jZVxuICpcbiAqIEBwYXJhbSB7RGlyZWN0aXZlfSB2aWV3XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBDb21wb25lbnRcbiAqL1xuXG5mdW5jdGlvbiB1cGRhdGVWaWV3ICh2aWV3LCBDb21wb25lbnQpIHtcbiAgaWYgKCF2aWV3Ll9ib3VuZCkge1xuICAgIHJldHVyblxuICB9XG4gIHZpZXcuQ29tcG9uZW50ID0gQ29tcG9uZW50XG4gIHZpZXcuaG90VXBkYXRpbmcgPSB0cnVlXG4gIC8vIGRpc2FibGUgdHJhbnNpdGlvbnNcbiAgdmlldy52bS5faXNDb21waWxlZCA9IGZhbHNlXG4gIC8vIHNhdmUgc3RhdGVcbiAgdmFyIHN0YXRlID0gZXh0cmFjdFN0YXRlKHZpZXcuY2hpbGRWTSlcbiAgLy8gcmVtb3VudCwgbWFrZSBzdXJlIHRvIGRpc2FibGUga2VlcC1hbGl2ZVxuICB2YXIga2VlcEFsaXZlID0gdmlldy5rZWVwQWxpdmVcbiAgdmlldy5rZWVwQWxpdmUgPSBmYWxzZVxuICB2aWV3Lm1vdW50Q29tcG9uZW50KClcbiAgdmlldy5rZWVwQWxpdmUgPSBrZWVwQWxpdmVcbiAgLy8gcmVzdG9yZSBzdGF0ZVxuICByZXN0b3JlU3RhdGUodmlldy5jaGlsZFZNLCBzdGF0ZSwgdHJ1ZSlcbiAgLy8gcmUtZWFuYmxlIHRyYW5zaXRpb25zXG4gIHZpZXcudm0uX2lzQ29tcGlsZWQgPSB0cnVlXG4gIHZpZXcuaG90VXBkYXRpbmcgPSBmYWxzZVxufVxuXG4vKipcbiAqIEV4dHJhY3Qgc3RhdGUgZnJvbSBhIFZ1ZSBpbnN0YW5jZS5cbiAqXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuXG5mdW5jdGlvbiBleHRyYWN0U3RhdGUgKHZtKSB7XG4gIHJldHVybiB7XG4gICAgY2lkOiB2bS5jb25zdHJ1Y3Rvci5jaWQsXG4gICAgZGF0YTogdm0uJGRhdGEsXG4gICAgY2hpbGRyZW46IHZtLiRjaGlsZHJlbi5tYXAoZXh0cmFjdFN0YXRlKVxuICB9XG59XG5cbi8qKlxuICogUmVzdG9yZSBzdGF0ZSB0byBhIHJlbG9hZGVkIFZ1ZSBpbnN0YW5jZS5cbiAqXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZVxuICovXG5cbmZ1bmN0aW9uIHJlc3RvcmVTdGF0ZSAodm0sIHN0YXRlLCBpc1Jvb3QpIHtcbiAgdmFyIG9sZEFzeW5jQ29uZmlnXG4gIGlmIChpc1Jvb3QpIHtcbiAgICAvLyBzZXQgVnVlIGludG8gc3luYyBtb2RlIGR1cmluZyBzdGF0ZSByZWh5ZHJhdGlvblxuICAgIG9sZEFzeW5jQ29uZmlnID0gVnVlLmNvbmZpZy5hc3luY1xuICAgIFZ1ZS5jb25maWcuYXN5bmMgPSBmYWxzZVxuICB9XG4gIC8vIGFjdHVhbCByZXN0b3JlXG4gIGlmIChpc1Jvb3QgfHwgIXZtLl9wcm9wcykge1xuICAgIHZtLiRkYXRhID0gc3RhdGUuZGF0YVxuICB9IGVsc2Uge1xuICAgIE9iamVjdC5rZXlzKHN0YXRlLmRhdGEpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgaWYgKCF2bS5fcHJvcHNba2V5XSkge1xuICAgICAgICAvLyBmb3Igbm9uLXJvb3QsIG9ubHkgcmVzdG9yZSBub24tcHJvcHMgZmllbGRzXG4gICAgICAgIHZtLiRkYXRhW2tleV0gPSBzdGF0ZS5kYXRhW2tleV1cbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIC8vIHZlcmlmeSBjaGlsZCBjb25zaXN0ZW5jeVxuICB2YXIgaGFzU2FtZUNoaWxkcmVuID0gdm0uJGNoaWxkcmVuLmV2ZXJ5KGZ1bmN0aW9uIChjLCBpKSB7XG4gICAgcmV0dXJuIHN0YXRlLmNoaWxkcmVuW2ldICYmIHN0YXRlLmNoaWxkcmVuW2ldLmNpZCA9PT0gYy5jb25zdHJ1Y3Rvci5jaWRcbiAgfSlcbiAgaWYgKGhhc1NhbWVDaGlsZHJlbikge1xuICAgIC8vIHJlaHlkcmF0ZSBjaGlsZHJlblxuICAgIHZtLiRjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjLCBpKSB7XG4gICAgICByZXN0b3JlU3RhdGUoYywgc3RhdGUuY2hpbGRyZW5baV0pXG4gICAgfSlcbiAgfVxuICBpZiAoaXNSb290KSB7XG4gICAgVnVlLmNvbmZpZy5hc3luYyA9IG9sZEFzeW5jQ29uZmlnXG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0IChpZCkge1xuICB2YXIgbWF0Y2ggPSBpZC5tYXRjaCgvW15cXC9dK1xcLnZ1ZSQvKVxuICByZXR1cm4gbWF0Y2ggPyBtYXRjaFswXSA6IGlkXG59XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiV2I4R2VqXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9pbmRleC5qc1wiLFwiLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKiFcbiAqIHZ1ZS1yZXNvdXJjZSB2MC45LjNcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy92dWUtcmVzb3VyY2VcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogUHJvbWlzZXMvQSsgcG9seWZpbGwgdjEuMS40IChodHRwczovL2dpdGh1Yi5jb20vYnJhbXN0ZWluL3Byb21pcylcbiAqL1xuXG52YXIgUkVTT0xWRUQgPSAwO1xudmFyIFJFSkVDVEVEID0gMTtcbnZhciBQRU5ESU5HID0gMjtcblxuZnVuY3Rpb24gUHJvbWlzZSQyKGV4ZWN1dG9yKSB7XG5cbiAgICB0aGlzLnN0YXRlID0gUEVORElORztcbiAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGVmZXJyZWQgPSBbXTtcblxuICAgIHZhciBwcm9taXNlID0gdGhpcztcblxuICAgIHRyeSB7XG4gICAgICAgIGV4ZWN1dG9yKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICBwcm9taXNlLnJlc29sdmUoeCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICBwcm9taXNlLnJlamVjdChyKTtcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBwcm9taXNlLnJlamVjdChlKTtcbiAgICB9XG59XG5cblByb21pc2UkMi5yZWplY3QgPSBmdW5jdGlvbiAocikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSQyKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgcmVqZWN0KHIpO1xuICAgIH0pO1xufTtcblxuUHJvbWlzZSQyLnJlc29sdmUgPSBmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSQyKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgcmVzb2x2ZSh4KTtcbiAgICB9KTtcbn07XG5cblByb21pc2UkMi5hbGwgPSBmdW5jdGlvbiBhbGwoaXRlcmFibGUpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UkMihmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciBjb3VudCA9IDAsXG4gICAgICAgICAgICByZXN1bHQgPSBbXTtcblxuICAgICAgICBpZiAoaXRlcmFibGUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZXNvbHZlcihpKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRbaV0gPSB4O1xuICAgICAgICAgICAgICAgIGNvdW50ICs9IDE7XG5cbiAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlcmFibGUubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIFByb21pc2UkMi5yZXNvbHZlKGl0ZXJhYmxlW2ldKS50aGVuKHJlc29sdmVyKGkpLCByZWplY3QpO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5Qcm9taXNlJDIucmFjZSA9IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UkMihmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlcmFibGUubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIFByb21pc2UkMi5yZXNvbHZlKGl0ZXJhYmxlW2ldKS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbnZhciBwJDEgPSBQcm9taXNlJDIucHJvdG90eXBlO1xuXG5wJDEucmVzb2x2ZSA9IGZ1bmN0aW9uIHJlc29sdmUoeCkge1xuICAgIHZhciBwcm9taXNlID0gdGhpcztcblxuICAgIGlmIChwcm9taXNlLnN0YXRlID09PSBQRU5ESU5HKSB7XG4gICAgICAgIGlmICh4ID09PSBwcm9taXNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQcm9taXNlIHNldHRsZWQgd2l0aCBpdHNlbGYuJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2FsbGVkID0gZmFsc2U7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciB0aGVuID0geCAmJiB4Wyd0aGVuJ107XG5cbiAgICAgICAgICAgIGlmICh4ICE9PSBudWxsICYmIHR5cGVvZiB4ID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRoZW4uY2FsbCh4LCBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKHgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2UucmVqZWN0KHIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgICAgICAgICAgIHByb21pc2UucmVqZWN0KGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvbWlzZS5zdGF0ZSA9IFJFU09MVkVEO1xuICAgICAgICBwcm9taXNlLnZhbHVlID0geDtcbiAgICAgICAgcHJvbWlzZS5ub3RpZnkoKTtcbiAgICB9XG59O1xuXG5wJDEucmVqZWN0ID0gZnVuY3Rpb24gcmVqZWN0KHJlYXNvbikge1xuICAgIHZhciBwcm9taXNlID0gdGhpcztcblxuICAgIGlmIChwcm9taXNlLnN0YXRlID09PSBQRU5ESU5HKSB7XG4gICAgICAgIGlmIChyZWFzb24gPT09IHByb21pc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Byb21pc2Ugc2V0dGxlZCB3aXRoIGl0c2VsZi4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb21pc2Uuc3RhdGUgPSBSRUpFQ1RFRDtcbiAgICAgICAgcHJvbWlzZS52YWx1ZSA9IHJlYXNvbjtcbiAgICAgICAgcHJvbWlzZS5ub3RpZnkoKTtcbiAgICB9XG59O1xuXG5wJDEubm90aWZ5ID0gZnVuY3Rpb24gbm90aWZ5KCkge1xuICAgIHZhciBwcm9taXNlID0gdGhpcztcblxuICAgIG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHByb21pc2Uuc3RhdGUgIT09IFBFTkRJTkcpIHtcbiAgICAgICAgICAgIHdoaWxlIChwcm9taXNlLmRlZmVycmVkLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9IHByb21pc2UuZGVmZXJyZWQuc2hpZnQoKSxcbiAgICAgICAgICAgICAgICAgICAgb25SZXNvbHZlZCA9IGRlZmVycmVkWzBdLFxuICAgICAgICAgICAgICAgICAgICBvblJlamVjdGVkID0gZGVmZXJyZWRbMV0sXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUgPSBkZWZlcnJlZFsyXSxcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0ID0gZGVmZXJyZWRbM107XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvbWlzZS5zdGF0ZSA9PT0gUkVTT0xWRUQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb25SZXNvbHZlZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUob25SZXNvbHZlZC5jYWxsKHVuZGVmaW5lZCwgcHJvbWlzZS52YWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHByb21pc2UudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByb21pc2Uuc3RhdGUgPT09IFJFSkVDVEVEKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9uUmVqZWN0ZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG9uUmVqZWN0ZWQuY2FsbCh1bmRlZmluZWQsIHByb21pc2UudmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHByb21pc2UudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5wJDEudGhlbiA9IGZ1bmN0aW9uIHRoZW4ob25SZXNvbHZlZCwgb25SZWplY3RlZCkge1xuICAgIHZhciBwcm9taXNlID0gdGhpcztcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSQyKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgcHJvbWlzZS5kZWZlcnJlZC5wdXNoKFtvblJlc29sdmVkLCBvblJlamVjdGVkLCByZXNvbHZlLCByZWplY3RdKTtcbiAgICAgICAgcHJvbWlzZS5ub3RpZnkoKTtcbiAgICB9KTtcbn07XG5cbnAkMS5jYXRjaCA9IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xufTtcblxudmFyIFByb21pc2VPYmogPSB3aW5kb3cuUHJvbWlzZSB8fCBQcm9taXNlJDI7XG5cbmZ1bmN0aW9uIFByb21pc2UkMShleGVjdXRvciwgY29udGV4dCkge1xuXG4gICAgaWYgKGV4ZWN1dG9yIGluc3RhbmNlb2YgUHJvbWlzZU9iaikge1xuICAgICAgICB0aGlzLnByb21pc2UgPSBleGVjdXRvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZU9iaihleGVjdXRvci5iaW5kKGNvbnRleHQpKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xufVxuXG5Qcm9taXNlJDEuYWxsID0gZnVuY3Rpb24gKGl0ZXJhYmxlLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlJDEoUHJvbWlzZU9iai5hbGwoaXRlcmFibGUpLCBjb250ZXh0KTtcbn07XG5cblByb21pc2UkMS5yZXNvbHZlID0gZnVuY3Rpb24gKHZhbHVlLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlJDEoUHJvbWlzZU9iai5yZXNvbHZlKHZhbHVlKSwgY29udGV4dCk7XG59O1xuXG5Qcm9taXNlJDEucmVqZWN0ID0gZnVuY3Rpb24gKHJlYXNvbiwgY29udGV4dCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSQxKFByb21pc2VPYmoucmVqZWN0KHJlYXNvbiksIGNvbnRleHQpO1xufTtcblxuUHJvbWlzZSQxLnJhY2UgPSBmdW5jdGlvbiAoaXRlcmFibGUsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UkMShQcm9taXNlT2JqLnJhY2UoaXRlcmFibGUpLCBjb250ZXh0KTtcbn07XG5cbnZhciBwID0gUHJvbWlzZSQxLnByb3RvdHlwZTtcblxucC5iaW5kID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHJldHVybiB0aGlzO1xufTtcblxucC50aGVuID0gZnVuY3Rpb24gKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpIHtcblxuICAgIGlmIChmdWxmaWxsZWQgJiYgZnVsZmlsbGVkLmJpbmQgJiYgdGhpcy5jb250ZXh0KSB7XG4gICAgICAgIGZ1bGZpbGxlZCA9IGZ1bGZpbGxlZC5iaW5kKHRoaXMuY29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHJlamVjdGVkICYmIHJlamVjdGVkLmJpbmQgJiYgdGhpcy5jb250ZXh0KSB7XG4gICAgICAgIHJlamVjdGVkID0gcmVqZWN0ZWQuYmluZCh0aGlzLmNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSQxKHRoaXMucHJvbWlzZS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpLCB0aGlzLmNvbnRleHQpO1xufTtcblxucC5jYXRjaCA9IGZ1bmN0aW9uIChyZWplY3RlZCkge1xuXG4gICAgaWYgKHJlamVjdGVkICYmIHJlamVjdGVkLmJpbmQgJiYgdGhpcy5jb250ZXh0KSB7XG4gICAgICAgIHJlamVjdGVkID0gcmVqZWN0ZWQuYmluZCh0aGlzLmNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSQxKHRoaXMucHJvbWlzZS5jYXRjaChyZWplY3RlZCksIHRoaXMuY29udGV4dCk7XG59O1xuXG5wLmZpbmFsbHkgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblxuICAgIHJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcyk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcyk7XG4gICAgICAgIHJldHVybiBQcm9taXNlT2JqLnJlamVjdChyZWFzb24pO1xuICAgIH0pO1xufTtcblxudmFyIGRlYnVnID0gZmFsc2U7XG52YXIgdXRpbCA9IHt9O1xudmFyIGFycmF5ID0gW107XG5mdW5jdGlvbiBVdGlsIChWdWUpIHtcbiAgICB1dGlsID0gVnVlLnV0aWw7XG4gICAgZGVidWcgPSBWdWUuY29uZmlnLmRlYnVnIHx8ICFWdWUuY29uZmlnLnNpbGVudDtcbn1cblxuZnVuY3Rpb24gd2Fybihtc2cpIHtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIGRlYnVnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignW1Z1ZVJlc291cmNlIHdhcm5dOiAnICsgbXNnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGVycm9yKG1zZykge1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihtc2cpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbmV4dFRpY2soY2IsIGN0eCkge1xuICAgIHJldHVybiB1dGlsLm5leHRUaWNrKGNiLCBjdHgpO1xufVxuXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyp8XFxzKiQvZywgJycpO1xufVxuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbCkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cblxuZnVuY3Rpb24gaXNCb29sZWFuKHZhbCkge1xuICAgIHJldHVybiB2YWwgPT09IHRydWUgfHwgdmFsID09PSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWwpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jztcbn1cblxuZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvYmopIHtcbiAgICByZXR1cm4gaXNPYmplY3Qob2JqKSAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSA9PSBPYmplY3QucHJvdG90eXBlO1xufVxuXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKG9iaikge1xuICAgIHJldHVybiB0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnICYmIG9iaiBpbnN0YW5jZW9mIEZvcm1EYXRhO1xufVxuXG5mdW5jdGlvbiB3aGVuKHZhbHVlLCBmdWxmaWxsZWQsIHJlamVjdGVkKSB7XG5cbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UkMS5yZXNvbHZlKHZhbHVlKTtcblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpO1xufVxuXG5mdW5jdGlvbiBvcHRpb25zKGZuLCBvYmosIG9wdHMpIHtcblxuICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuXG4gICAgaWYgKGlzRnVuY3Rpb24ob3B0cykpIHtcbiAgICAgICAgb3B0cyA9IG9wdHMuY2FsbChvYmopO1xuICAgIH1cblxuICAgIHJldHVybiBtZXJnZShmbi5iaW5kKHsgJHZtOiBvYmosICRvcHRpb25zOiBvcHRzIH0pLCBmbiwgeyAkb3B0aW9uczogb3B0cyB9KTtcbn1cblxuZnVuY3Rpb24gZWFjaChvYmosIGl0ZXJhdG9yKSB7XG5cbiAgICB2YXIgaSwga2V5O1xuXG4gICAgaWYgKHR5cGVvZiBvYmoubGVuZ3RoID09ICdudW1iZXInKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBvYmoubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yLmNhbGwob2JqW2ldLCBvYmpbaV0sIGkpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChpc09iamVjdChvYmopKSB7XG4gICAgICAgIGZvciAoa2V5IGluIG9iaikge1xuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaXRlcmF0b3IuY2FsbChvYmpba2V5XSwgb2JqW2tleV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufVxuXG52YXIgYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBfYXNzaWduO1xuXG5mdW5jdGlvbiBtZXJnZSh0YXJnZXQpIHtcblxuICAgIHZhciBhcmdzID0gYXJyYXkuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gICAgYXJncy5mb3JFYWNoKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgICAgX21lcmdlKHRhcmdldCwgc291cmNlLCB0cnVlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRzKHRhcmdldCkge1xuXG4gICAgdmFyIGFyZ3MgPSBhcnJheS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cbiAgICBhcmdzLmZvckVhY2goZnVuY3Rpb24gKHNvdXJjZSkge1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmICh0YXJnZXRba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX2Fzc2lnbih0YXJnZXQpIHtcblxuICAgIHZhciBhcmdzID0gYXJyYXkuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gICAgYXJncy5mb3JFYWNoKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgICAgX21lcmdlKHRhcmdldCwgc291cmNlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF9tZXJnZSh0YXJnZXQsIHNvdXJjZSwgZGVlcCkge1xuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKGRlZXAgJiYgKGlzUGxhaW5PYmplY3Qoc291cmNlW2tleV0pIHx8IGlzQXJyYXkoc291cmNlW2tleV0pKSkge1xuICAgICAgICAgICAgaWYgKGlzUGxhaW5PYmplY3Qoc291cmNlW2tleV0pICYmICFpc1BsYWluT2JqZWN0KHRhcmdldFtrZXldKSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNBcnJheShzb3VyY2Vba2V5XSkgJiYgIWlzQXJyYXkodGFyZ2V0W2tleV0pKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9tZXJnZSh0YXJnZXRba2V5XSwgc291cmNlW2tleV0sIGRlZXApO1xuICAgICAgICB9IGVsc2UgaWYgKHNvdXJjZVtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJvb3QgKG9wdGlvbnMsIG5leHQpIHtcblxuICAgIHZhciB1cmwgPSBuZXh0KG9wdGlvbnMpO1xuXG4gICAgaWYgKGlzU3RyaW5nKG9wdGlvbnMucm9vdCkgJiYgIXVybC5tYXRjaCgvXihodHRwcz86KT9cXC8vKSkge1xuICAgICAgICB1cmwgPSBvcHRpb25zLnJvb3QgKyAnLycgKyB1cmw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVybDtcbn1cblxuZnVuY3Rpb24gcXVlcnkgKG9wdGlvbnMsIG5leHQpIHtcblxuICAgIHZhciB1cmxQYXJhbXMgPSBPYmplY3Qua2V5cyhVcmwub3B0aW9ucy5wYXJhbXMpLFxuICAgICAgICBxdWVyeSA9IHt9LFxuICAgICAgICB1cmwgPSBuZXh0KG9wdGlvbnMpO1xuXG4gICAgZWFjaChvcHRpb25zLnBhcmFtcywgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgaWYgKHVybFBhcmFtcy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICBxdWVyeVtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHF1ZXJ5ID0gVXJsLnBhcmFtcyhxdWVyeSk7XG5cbiAgICBpZiAocXVlcnkpIHtcbiAgICAgICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09IC0xID8gJz8nIDogJyYnKSArIHF1ZXJ5O1xuICAgIH1cblxuICAgIHJldHVybiB1cmw7XG59XG5cbi8qKlxuICogVVJMIFRlbXBsYXRlIHYyLjAuNiAoaHR0cHM6Ly9naXRodWIuY29tL2JyYW1zdGVpbi91cmwtdGVtcGxhdGUpXG4gKi9cblxuZnVuY3Rpb24gZXhwYW5kKHVybCwgcGFyYW1zLCB2YXJpYWJsZXMpIHtcblxuICAgIHZhciB0bXBsID0gcGFyc2UodXJsKSxcbiAgICAgICAgZXhwYW5kZWQgPSB0bXBsLmV4cGFuZChwYXJhbXMpO1xuXG4gICAgaWYgKHZhcmlhYmxlcykge1xuICAgICAgICB2YXJpYWJsZXMucHVzaC5hcHBseSh2YXJpYWJsZXMsIHRtcGwudmFycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGV4cGFuZGVkO1xufVxuXG5mdW5jdGlvbiBwYXJzZSh0ZW1wbGF0ZSkge1xuXG4gICAgdmFyIG9wZXJhdG9ycyA9IFsnKycsICcjJywgJy4nLCAnLycsICc7JywgJz8nLCAnJiddLFxuICAgICAgICB2YXJpYWJsZXMgPSBbXTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHZhcnM6IHZhcmlhYmxlcyxcbiAgICAgICAgZXhwYW5kOiBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIHRlbXBsYXRlLnJlcGxhY2UoL1xceyhbXlxce1xcfV0rKVxcfXwoW15cXHtcXH1dKykvZywgZnVuY3Rpb24gKF8sIGV4cHJlc3Npb24sIGxpdGVyYWwpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXhwcmVzc2lvbikge1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBvcGVyYXRvciA9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAob3BlcmF0b3JzLmluZGV4T2YoZXhwcmVzc2lvbi5jaGFyQXQoMCkpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0b3IgPSBleHByZXNzaW9uLmNoYXJBdCgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uLnN1YnN0cigxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb24uc3BsaXQoLywvZykuZm9yRWFjaChmdW5jdGlvbiAodmFyaWFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0bXAgPSAvKFteOlxcKl0qKSg/OjooXFxkKyl8KFxcKikpPy8uZXhlYyh2YXJpYWJsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaC5hcHBseSh2YWx1ZXMsIGdldFZhbHVlcyhjb250ZXh0LCBvcGVyYXRvciwgdG1wWzFdLCB0bXBbMl0gfHwgdG1wWzNdKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXMucHVzaCh0bXBbMV0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAob3BlcmF0b3IgJiYgb3BlcmF0b3IgIT09ICcrJykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2VwYXJhdG9yID0gJywnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3BlcmF0b3IgPT09ICc/Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcGFyYXRvciA9ICcmJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3BlcmF0b3IgIT09ICcjJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcGFyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHZhbHVlcy5sZW5ndGggIT09IDAgPyBvcGVyYXRvciA6ICcnKSArIHZhbHVlcy5qb2luKHNlcGFyYXRvcik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVzLmpvaW4oJywnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbmNvZGVSZXNlcnZlZChsaXRlcmFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGdldFZhbHVlcyhjb250ZXh0LCBvcGVyYXRvciwga2V5LCBtb2RpZmllcikge1xuXG4gICAgdmFyIHZhbHVlID0gY29udGV4dFtrZXldLFxuICAgICAgICByZXN1bHQgPSBbXTtcblxuICAgIGlmIChpc0RlZmluZWQodmFsdWUpICYmIHZhbHVlICE9PSAnJykge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGlmIChtb2RpZmllciAmJiBtb2RpZmllciAhPT0gJyonKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zdWJzdHJpbmcoMCwgcGFyc2VJbnQobW9kaWZpZXIsIDEwKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGVuY29kZVZhbHVlKG9wZXJhdG9yLCB2YWx1ZSwgaXNLZXlPcGVyYXRvcihvcGVyYXRvcikgPyBrZXkgOiBudWxsKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAobW9kaWZpZXIgPT09ICcqJykge1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5maWx0ZXIoaXNEZWZpbmVkKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goZW5jb2RlVmFsdWUob3BlcmF0b3IsIHZhbHVlLCBpc0tleU9wZXJhdG9yKG9wZXJhdG9yKSA/IGtleSA6IG51bGwpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0RlZmluZWQodmFsdWVba10pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goZW5jb2RlVmFsdWUob3BlcmF0b3IsIHZhbHVlW2tdLCBrKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHRtcCA9IFtdO1xuXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmZpbHRlcihpc0RlZmluZWQpLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0bXAucHVzaChlbmNvZGVWYWx1ZShvcGVyYXRvciwgdmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0RlZmluZWQodmFsdWVba10pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG1wLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGspKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bXAucHVzaChlbmNvZGVWYWx1ZShvcGVyYXRvciwgdmFsdWVba10udG9TdHJpbmcoKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNLZXlPcGVyYXRvcihvcGVyYXRvcikpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnPScgKyB0bXAuam9pbignLCcpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRtcC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godG1wLmpvaW4oJywnKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG9wZXJhdG9yID09PSAnOycpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChrZXkpKTtcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJycgJiYgKG9wZXJhdG9yID09PSAnJicgfHwgb3BlcmF0b3IgPT09ICc/JykpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nKTtcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKCcnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGlzRGVmaW5lZCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsO1xufVxuXG5mdW5jdGlvbiBpc0tleU9wZXJhdG9yKG9wZXJhdG9yKSB7XG4gICAgcmV0dXJuIG9wZXJhdG9yID09PSAnOycgfHwgb3BlcmF0b3IgPT09ICcmJyB8fCBvcGVyYXRvciA9PT0gJz8nO1xufVxuXG5mdW5jdGlvbiBlbmNvZGVWYWx1ZShvcGVyYXRvciwgdmFsdWUsIGtleSkge1xuXG4gICAgdmFsdWUgPSBvcGVyYXRvciA9PT0gJysnIHx8IG9wZXJhdG9yID09PSAnIycgPyBlbmNvZGVSZXNlcnZlZCh2YWx1ZSkgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnPScgKyB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBlbmNvZGVSZXNlcnZlZChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnNwbGl0KC8oJVswLTlBLUZhLWZdezJ9KS9nKS5tYXAoZnVuY3Rpb24gKHBhcnQpIHtcbiAgICAgICAgaWYgKCEvJVswLTlBLUZhLWZdLy50ZXN0KHBhcnQpKSB7XG4gICAgICAgICAgICBwYXJ0ID0gZW5jb2RlVVJJKHBhcnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJ0O1xuICAgIH0pLmpvaW4oJycpO1xufVxuXG5mdW5jdGlvbiB0ZW1wbGF0ZSAob3B0aW9ucykge1xuXG4gICAgdmFyIHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICB1cmwgPSBleHBhbmQob3B0aW9ucy51cmwsIG9wdGlvbnMucGFyYW1zLCB2YXJpYWJsZXMpO1xuXG4gICAgdmFyaWFibGVzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBkZWxldGUgb3B0aW9ucy5wYXJhbXNba2V5XTtcbiAgICB9KTtcblxuICAgIHJldHVybiB1cmw7XG59XG5cbi8qKlxuICogU2VydmljZSBmb3IgVVJMIHRlbXBsYXRpbmcuXG4gKi9cblxudmFyIGllID0gZG9jdW1lbnQuZG9jdW1lbnRNb2RlO1xudmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG5mdW5jdGlvbiBVcmwodXJsLCBwYXJhbXMpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcyB8fCB7fSxcbiAgICAgICAgb3B0aW9ucyA9IHVybCxcbiAgICAgICAgdHJhbnNmb3JtO1xuXG4gICAgaWYgKGlzU3RyaW5nKHVybCkpIHtcbiAgICAgICAgb3B0aW9ucyA9IHsgdXJsOiB1cmwsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfVxuXG4gICAgb3B0aW9ucyA9IG1lcmdlKHt9LCBVcmwub3B0aW9ucywgc2VsZi4kb3B0aW9ucywgb3B0aW9ucyk7XG5cbiAgICBVcmwudHJhbnNmb3Jtcy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgICAgIHRyYW5zZm9ybSA9IGZhY3RvcnkoaGFuZGxlciwgdHJhbnNmb3JtLCBzZWxmLiR2bSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdHJhbnNmb3JtKG9wdGlvbnMpO1xufVxuXG4vKipcbiAqIFVybCBvcHRpb25zLlxuICovXG5cblVybC5vcHRpb25zID0ge1xuICAgIHVybDogJycsXG4gICAgcm9vdDogbnVsbCxcbiAgICBwYXJhbXM6IHt9XG59O1xuXG4vKipcbiAqIFVybCB0cmFuc2Zvcm1zLlxuICovXG5cblVybC50cmFuc2Zvcm1zID0gW3RlbXBsYXRlLCBxdWVyeSwgcm9vdF07XG5cbi8qKlxuICogRW5jb2RlcyBhIFVybCBwYXJhbWV0ZXIgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqL1xuXG5VcmwucGFyYW1zID0gZnVuY3Rpb24gKG9iaikge1xuXG4gICAgdmFyIHBhcmFtcyA9IFtdLFxuICAgICAgICBlc2NhcGUgPSBlbmNvZGVVUklDb21wb25lbnQ7XG5cbiAgICBwYXJhbXMuYWRkID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcblxuICAgICAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHVzaChlc2NhcGUoa2V5KSArICc9JyArIGVzY2FwZSh2YWx1ZSkpO1xuICAgIH07XG5cbiAgICBzZXJpYWxpemUocGFyYW1zLCBvYmopO1xuXG4gICAgcmV0dXJuIHBhcmFtcy5qb2luKCcmJykucmVwbGFjZSgvJTIwL2csICcrJyk7XG59O1xuXG4vKipcbiAqIFBhcnNlIGEgVVJMIGFuZCByZXR1cm4gaXRzIGNvbXBvbmVudHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICovXG5cblVybC5wYXJzZSA9IGZ1bmN0aW9uICh1cmwpIHtcblxuICAgIGlmIChpZSkge1xuICAgICAgICBlbC5ocmVmID0gdXJsO1xuICAgICAgICB1cmwgPSBlbC5ocmVmO1xuICAgIH1cblxuICAgIGVsLmhyZWYgPSB1cmw7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBocmVmOiBlbC5ocmVmLFxuICAgICAgICBwcm90b2NvbDogZWwucHJvdG9jb2wgPyBlbC5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgICBwb3J0OiBlbC5wb3J0LFxuICAgICAgICBob3N0OiBlbC5ob3N0LFxuICAgICAgICBob3N0bmFtZTogZWwuaG9zdG5hbWUsXG4gICAgICAgIHBhdGhuYW1lOiBlbC5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJyA/IGVsLnBhdGhuYW1lIDogJy8nICsgZWwucGF0aG5hbWUsXG4gICAgICAgIHNlYXJjaDogZWwuc2VhcmNoID8gZWwuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcbiAgICAgICAgaGFzaDogZWwuaGFzaCA/IGVsLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJ1xuICAgIH07XG59O1xuXG5mdW5jdGlvbiBmYWN0b3J5KGhhbmRsZXIsIG5leHQsIHZtKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVyLmNhbGwodm0sIG9wdGlvbnMsIG5leHQpO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZShwYXJhbXMsIG9iaiwgc2NvcGUpIHtcblxuICAgIHZhciBhcnJheSA9IGlzQXJyYXkob2JqKSxcbiAgICAgICAgcGxhaW4gPSBpc1BsYWluT2JqZWN0KG9iaiksXG4gICAgICAgIGhhc2g7XG5cbiAgICBlYWNoKG9iaiwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcblxuICAgICAgICBoYXNoID0gaXNPYmplY3QodmFsdWUpIHx8IGlzQXJyYXkodmFsdWUpO1xuXG4gICAgICAgIGlmIChzY29wZSkge1xuICAgICAgICAgICAga2V5ID0gc2NvcGUgKyAnWycgKyAocGxhaW4gfHwgaGFzaCA/IGtleSA6ICcnKSArICddJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc2NvcGUgJiYgYXJyYXkpIHtcbiAgICAgICAgICAgIHBhcmFtcy5hZGQodmFsdWUubmFtZSwgdmFsdWUudmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKGhhc2gpIHtcbiAgICAgICAgICAgIHNlcmlhbGl6ZShwYXJhbXMsIHZhbHVlLCBrZXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyYW1zLmFkZChrZXksIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiB4ZHJDbGllbnQgKHJlcXVlc3QpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSkge1xuXG4gICAgICAgIHZhciB4ZHIgPSBuZXcgWERvbWFpblJlcXVlc3QoKSxcbiAgICAgICAgICAgIGhhbmRsZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcblxuICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gcmVxdWVzdC5yZXNwb25kV2l0aCh4ZHIucmVzcG9uc2VUZXh0LCB7XG4gICAgICAgICAgICAgICAgc3RhdHVzOiB4ZHIuc3RhdHVzLFxuICAgICAgICAgICAgICAgIHN0YXR1c1RleHQ6IHhkci5zdGF0dXNUZXh0XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVxdWVzdC5hYm9ydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB4ZHIuYWJvcnQoKTtcbiAgICAgICAgfTtcblxuICAgICAgICB4ZHIub3BlbihyZXF1ZXN0Lm1ldGhvZCwgcmVxdWVzdC5nZXRVcmwoKSwgdHJ1ZSk7XG4gICAgICAgIHhkci50aW1lb3V0ID0gMDtcbiAgICAgICAgeGRyLm9ubG9hZCA9IGhhbmRsZXI7XG4gICAgICAgIHhkci5vbmVycm9yID0gaGFuZGxlcjtcbiAgICAgICAgeGRyLm9udGltZW91dCA9IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICB4ZHIub25wcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICB4ZHIuc2VuZChyZXF1ZXN0LmdldEJvZHkoKSk7XG4gICAgfSk7XG59XG5cbnZhciBPUklHSU5fVVJMID0gVXJsLnBhcnNlKGxvY2F0aW9uLmhyZWYpO1xudmFyIFNVUFBPUlRTX0NPUlMgPSAnd2l0aENyZWRlbnRpYWxzJyBpbiBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuZnVuY3Rpb24gY29ycyAocmVxdWVzdCwgbmV4dCkge1xuXG4gICAgaWYgKCFpc0Jvb2xlYW4ocmVxdWVzdC5jcm9zc09yaWdpbikgJiYgY3Jvc3NPcmlnaW4ocmVxdWVzdCkpIHtcbiAgICAgICAgcmVxdWVzdC5jcm9zc09yaWdpbiA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHJlcXVlc3QuY3Jvc3NPcmlnaW4pIHtcblxuICAgICAgICBpZiAoIVNVUFBPUlRTX0NPUlMpIHtcbiAgICAgICAgICAgIHJlcXVlc3QuY2xpZW50ID0geGRyQ2xpZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHJlcXVlc3QuZW11bGF0ZUhUVFA7XG4gICAgfVxuXG4gICAgbmV4dCgpO1xufVxuXG5mdW5jdGlvbiBjcm9zc09yaWdpbihyZXF1ZXN0KSB7XG5cbiAgICB2YXIgcmVxdWVzdFVybCA9IFVybC5wYXJzZShVcmwocmVxdWVzdCkpO1xuXG4gICAgcmV0dXJuIHJlcXVlc3RVcmwucHJvdG9jb2wgIT09IE9SSUdJTl9VUkwucHJvdG9jb2wgfHwgcmVxdWVzdFVybC5ob3N0ICE9PSBPUklHSU5fVVJMLmhvc3Q7XG59XG5cbmZ1bmN0aW9uIGJvZHkgKHJlcXVlc3QsIG5leHQpIHtcblxuICAgIGlmIChyZXF1ZXN0LmVtdWxhdGVKU09OICYmIGlzUGxhaW5PYmplY3QocmVxdWVzdC5ib2R5KSkge1xuICAgICAgICByZXF1ZXN0LmJvZHkgPSBVcmwucGFyYW1zKHJlcXVlc3QuYm9keSk7XG4gICAgICAgIHJlcXVlc3QuaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJztcbiAgICB9XG5cbiAgICBpZiAoaXNGb3JtRGF0YShyZXF1ZXN0LmJvZHkpKSB7XG4gICAgICAgIGRlbGV0ZSByZXF1ZXN0LmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddO1xuICAgIH1cblxuICAgIGlmIChpc1BsYWluT2JqZWN0KHJlcXVlc3QuYm9keSkpIHtcbiAgICAgICAgcmVxdWVzdC5ib2R5ID0gSlNPTi5zdHJpbmdpZnkocmVxdWVzdC5ib2R5KTtcbiAgICB9XG5cbiAgICBuZXh0KGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXG4gICAgICAgIHZhciBjb250ZW50VHlwZSA9IHJlc3BvbnNlLmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddO1xuXG4gICAgICAgIGlmIChpc1N0cmluZyhjb250ZW50VHlwZSkgJiYgY29udGVudFR5cGUuaW5kZXhPZignYXBwbGljYXRpb24vanNvbicpID09PSAwKSB7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEgPSByZXNwb25zZS50ZXh0KCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24ganNvbnBDbGllbnQgKHJlcXVlc3QpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSkge1xuXG4gICAgICAgIHZhciBuYW1lID0gcmVxdWVzdC5qc29ucCB8fCAnY2FsbGJhY2snLFxuICAgICAgICAgICAgY2FsbGJhY2sgPSAnX2pzb25wJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyKSxcbiAgICAgICAgICAgIGJvZHkgPSBudWxsLFxuICAgICAgICAgICAgaGFuZGxlcixcbiAgICAgICAgICAgIHNjcmlwdDtcblxuICAgICAgICBoYW5kbGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG5cbiAgICAgICAgICAgIHZhciBzdGF0dXMgPSAwO1xuXG4gICAgICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnICYmIGJvZHkgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSAyMDA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSA0MDQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlc29sdmUocmVxdWVzdC5yZXNwb25kV2l0aChib2R5LCB7IHN0YXR1czogc3RhdHVzIH0pKTtcblxuICAgICAgICAgICAgZGVsZXRlIHdpbmRvd1tjYWxsYmFja107XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVxdWVzdC5wYXJhbXNbbmFtZV0gPSBjYWxsYmFjaztcblxuICAgICAgICB3aW5kb3dbY2FsbGJhY2tdID0gZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgYm9keSA9IEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIHNjcmlwdC5zcmMgPSByZXF1ZXN0LmdldFVybCgpO1xuICAgICAgICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xuICAgICAgICBzY3JpcHQub25sb2FkID0gaGFuZGxlcjtcbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSBoYW5kbGVyO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24ganNvbnAgKHJlcXVlc3QsIG5leHQpIHtcblxuICAgIGlmIChyZXF1ZXN0Lm1ldGhvZCA9PSAnSlNPTlAnKSB7XG4gICAgICAgIHJlcXVlc3QuY2xpZW50ID0ganNvbnBDbGllbnQ7XG4gICAgfVxuXG4gICAgbmV4dChmdW5jdGlvbiAocmVzcG9uc2UpIHtcblxuICAgICAgICBpZiAocmVxdWVzdC5tZXRob2QgPT0gJ0pTT05QJykge1xuICAgICAgICAgICAgcmVzcG9uc2UuZGF0YSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBiZWZvcmUgKHJlcXVlc3QsIG5leHQpIHtcblxuICAgIGlmIChpc0Z1bmN0aW9uKHJlcXVlc3QuYmVmb3JlKSkge1xuICAgICAgICByZXF1ZXN0LmJlZm9yZS5jYWxsKHRoaXMsIHJlcXVlc3QpO1xuICAgIH1cblxuICAgIG5leHQoKTtcbn1cblxuLyoqXG4gKiBIVFRQIG1ldGhvZCBvdmVycmlkZSBJbnRlcmNlcHRvci5cbiAqL1xuXG5mdW5jdGlvbiBtZXRob2QgKHJlcXVlc3QsIG5leHQpIHtcblxuICAgIGlmIChyZXF1ZXN0LmVtdWxhdGVIVFRQICYmIC9eKFBVVHxQQVRDSHxERUxFVEUpJC9pLnRlc3QocmVxdWVzdC5tZXRob2QpKSB7XG4gICAgICAgIHJlcXVlc3QuaGVhZGVyc1snWC1IVFRQLU1ldGhvZC1PdmVycmlkZSddID0gcmVxdWVzdC5tZXRob2Q7XG4gICAgICAgIHJlcXVlc3QubWV0aG9kID0gJ1BPU1QnO1xuICAgIH1cblxuICAgIG5leHQoKTtcbn1cblxuZnVuY3Rpb24gaGVhZGVyIChyZXF1ZXN0LCBuZXh0KSB7XG5cbiAgICByZXF1ZXN0Lm1ldGhvZCA9IHJlcXVlc3QubWV0aG9kLnRvVXBwZXJDYXNlKCk7XG4gICAgcmVxdWVzdC5oZWFkZXJzID0gYXNzaWduKHt9LCBIdHRwLmhlYWRlcnMuY29tbW9uLCAhcmVxdWVzdC5jcm9zc09yaWdpbiA/IEh0dHAuaGVhZGVycy5jdXN0b20gOiB7fSwgSHR0cC5oZWFkZXJzW3JlcXVlc3QubWV0aG9kLnRvTG93ZXJDYXNlKCldLCByZXF1ZXN0LmhlYWRlcnMpO1xuXG4gICAgbmV4dCgpO1xufVxuXG4vKipcbiAqIFRpbWVvdXQgSW50ZXJjZXB0b3IuXG4gKi9cblxuZnVuY3Rpb24gdGltZW91dCAocmVxdWVzdCwgbmV4dCkge1xuXG4gICAgdmFyIHRpbWVvdXQ7XG5cbiAgICBpZiAocmVxdWVzdC50aW1lb3V0KSB7XG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgfSwgcmVxdWVzdC50aW1lb3V0KTtcbiAgICB9XG5cbiAgICBuZXh0KGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24geGhyQ2xpZW50IChyZXF1ZXN0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUpIHtcblxuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCksXG4gICAgICAgICAgICBoYW5kbGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG5cbiAgICAgICAgICAgIHZhciByZXNwb25zZSA9IHJlcXVlc3QucmVzcG9uZFdpdGgoJ3Jlc3BvbnNlJyBpbiB4aHIgPyB4aHIucmVzcG9uc2UgOiB4aHIucmVzcG9uc2VUZXh0LCB7XG4gICAgICAgICAgICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzID09PSAxMjIzID8gMjA0IDogeGhyLnN0YXR1cywgLy8gSUU5IHN0YXR1cyBidWdcbiAgICAgICAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzID09PSAxMjIzID8gJ05vIENvbnRlbnQnIDogdHJpbSh4aHIuc3RhdHVzVGV4dCksXG4gICAgICAgICAgICAgICAgaGVhZGVyczogcGFyc2VIZWFkZXJzKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXF1ZXN0LmFib3J0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHhoci5hYm9ydCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHhoci5vcGVuKHJlcXVlc3QubWV0aG9kLCByZXF1ZXN0LmdldFVybCgpLCB0cnVlKTtcbiAgICAgICAgeGhyLnRpbWVvdXQgPSAwO1xuICAgICAgICB4aHIub25sb2FkID0gaGFuZGxlcjtcbiAgICAgICAgeGhyLm9uZXJyb3IgPSBoYW5kbGVyO1xuXG4gICAgICAgIGlmIChyZXF1ZXN0LnByb2dyZXNzKSB7XG4gICAgICAgICAgICBpZiAocmVxdWVzdC5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICAgICAgICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgcmVxdWVzdC5wcm9ncmVzcyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKC9eKFBPU1R8UFVUKSQvaS50ZXN0KHJlcXVlc3QubWV0aG9kKSkge1xuICAgICAgICAgICAgICAgIHhoci51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCByZXF1ZXN0LnByb2dyZXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXF1ZXN0LmNyZWRlbnRpYWxzID09PSB0cnVlKSB7XG4gICAgICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVhY2gocmVxdWVzdC5oZWFkZXJzIHx8IHt9LCBmdW5jdGlvbiAodmFsdWUsIGhlYWRlcikge1xuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaGVhZGVyLCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHhoci5zZW5kKHJlcXVlc3QuZ2V0Qm9keSgpKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gcGFyc2VIZWFkZXJzKHN0cikge1xuXG4gICAgdmFyIGhlYWRlcnMgPSB7fSxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIGk7XG5cbiAgICBlYWNoKHRyaW0oc3RyKS5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIChyb3cpIHtcblxuICAgICAgICBpID0gcm93LmluZGV4T2YoJzonKTtcbiAgICAgICAgbmFtZSA9IHRyaW0ocm93LnNsaWNlKDAsIGkpKTtcbiAgICAgICAgdmFsdWUgPSB0cmltKHJvdy5zbGljZShpICsgMSkpO1xuXG4gICAgICAgIGlmIChoZWFkZXJzW25hbWVdKSB7XG5cbiAgICAgICAgICAgIGlmIChpc0FycmF5KGhlYWRlcnNbbmFtZV0pKSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyc1tuYW1lXS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyc1tuYW1lXSA9IFtoZWFkZXJzW25hbWVdLCB2YWx1ZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGhlYWRlcnNbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGhlYWRlcnM7XG59XG5cbmZ1bmN0aW9uIENsaWVudCAoY29udGV4dCkge1xuXG4gICAgdmFyIHJlcUhhbmRsZXJzID0gW3NlbmRSZXF1ZXN0XSxcbiAgICAgICAgcmVzSGFuZGxlcnMgPSBbXSxcbiAgICAgICAgaGFuZGxlcjtcblxuICAgIGlmICghaXNPYmplY3QoY29udGV4dCkpIHtcbiAgICAgICAgY29udGV4dCA9IG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gQ2xpZW50KHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUpIHtcblxuICAgICAgICAgICAgZnVuY3Rpb24gZXhlYygpIHtcblxuICAgICAgICAgICAgICAgIGhhbmRsZXIgPSByZXFIYW5kbGVycy5wb3AoKTtcblxuICAgICAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKGhhbmRsZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXIuY2FsbChjb250ZXh0LCByZXF1ZXN0LCBuZXh0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3YXJuKCdJbnZhbGlkIGludGVyY2VwdG9yIG9mIHR5cGUgJyArIHR5cGVvZiBoYW5kbGVyICsgJywgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIG5leHQocmVzcG9uc2UpIHtcblxuICAgICAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKHJlc3BvbnNlKSkge1xuXG4gICAgICAgICAgICAgICAgICAgIHJlc0hhbmRsZXJzLnVuc2hpZnQocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNPYmplY3QocmVzcG9uc2UpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzSGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSB3aGVuKHJlc3BvbnNlLCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlci5jYWxsKGNvbnRleHQsIHJlc3BvbnNlKSB8fCByZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICB3aGVuKHJlc3BvbnNlLCByZXNvbHZlKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZXhlYygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBleGVjKCk7XG4gICAgICAgIH0sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIENsaWVudC51c2UgPSBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICByZXFIYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICAgIH07XG5cbiAgICByZXR1cm4gQ2xpZW50O1xufVxuXG5mdW5jdGlvbiBzZW5kUmVxdWVzdChyZXF1ZXN0LCByZXNvbHZlKSB7XG5cbiAgICB2YXIgY2xpZW50ID0gcmVxdWVzdC5jbGllbnQgfHwgeGhyQ2xpZW50O1xuXG4gICAgcmVzb2x2ZShjbGllbnQocmVxdWVzdCkpO1xufVxuXG52YXIgY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxuLyoqXG4gKiBIVFRQIFJlc3BvbnNlLlxuICovXG5cbnZhciBSZXNwb25zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZXNwb25zZShib2R5LCBfcmVmKSB7XG4gICAgICAgIHZhciB1cmwgPSBfcmVmLnVybDtcbiAgICAgICAgdmFyIGhlYWRlcnMgPSBfcmVmLmhlYWRlcnM7XG4gICAgICAgIHZhciBzdGF0dXMgPSBfcmVmLnN0YXR1cztcbiAgICAgICAgdmFyIHN0YXR1c1RleHQgPSBfcmVmLnN0YXR1c1RleHQ7XG4gICAgICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFJlc3BvbnNlKTtcblxuXG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgICAgICB0aGlzLmJvZHkgPSBib2R5O1xuICAgICAgICB0aGlzLmhlYWRlcnMgPSBoZWFkZXJzIHx8IHt9O1xuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cyB8fCAwO1xuICAgICAgICB0aGlzLnN0YXR1c1RleHQgPSBzdGF0dXNUZXh0IHx8ICcnO1xuICAgICAgICB0aGlzLm9rID0gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gICAgfVxuXG4gICAgUmVzcG9uc2UucHJvdG90eXBlLnRleHQgPSBmdW5jdGlvbiB0ZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib2R5O1xuICAgIH07XG5cbiAgICBSZXNwb25zZS5wcm90b3R5cGUuYmxvYiA9IGZ1bmN0aW9uIGJsb2IoKSB7XG4gICAgICAgIHJldHVybiBuZXcgQmxvYihbdGhpcy5ib2R5XSk7XG4gICAgfTtcblxuICAgIFJlc3BvbnNlLnByb3RvdHlwZS5qc29uID0gZnVuY3Rpb24ganNvbigpIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodGhpcy5ib2R5KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFJlc3BvbnNlO1xufSgpO1xuXG52YXIgUmVxdWVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZXF1ZXN0KG9wdGlvbnMpIHtcbiAgICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVxdWVzdCk7XG5cblxuICAgICAgICB0aGlzLm1ldGhvZCA9ICdHRVQnO1xuICAgICAgICB0aGlzLmJvZHkgPSBudWxsO1xuICAgICAgICB0aGlzLnBhcmFtcyA9IHt9O1xuICAgICAgICB0aGlzLmhlYWRlcnMgPSB7fTtcblxuICAgICAgICBhc3NpZ24odGhpcywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgUmVxdWVzdC5wcm90b3R5cGUuZ2V0VXJsID0gZnVuY3Rpb24gZ2V0VXJsKCkge1xuICAgICAgICByZXR1cm4gVXJsKHRoaXMpO1xuICAgIH07XG5cbiAgICBSZXF1ZXN0LnByb3RvdHlwZS5nZXRCb2R5ID0gZnVuY3Rpb24gZ2V0Qm9keSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9keTtcbiAgICB9O1xuXG4gICAgUmVxdWVzdC5wcm90b3R5cGUucmVzcG9uZFdpdGggPSBmdW5jdGlvbiByZXNwb25kV2l0aChib2R5LCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoYm9keSwgYXNzaWduKG9wdGlvbnMgfHwge30sIHsgdXJsOiB0aGlzLmdldFVybCgpIH0pKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFJlcXVlc3Q7XG59KCk7XG5cbi8qKlxuICogU2VydmljZSBmb3Igc2VuZGluZyBuZXR3b3JrIHJlcXVlc3RzLlxuICovXG5cbnZhciBDVVNUT01fSEVBREVSUyA9IHsgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnIH07XG52YXIgQ09NTU9OX0hFQURFUlMgPSB7ICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJyB9O1xudmFyIEpTT05fQ09OVEVOVF9UWVBFID0geyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcgfTtcblxuZnVuY3Rpb24gSHR0cChvcHRpb25zKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXMgfHwge30sXG4gICAgICAgIGNsaWVudCA9IENsaWVudChzZWxmLiR2bSk7XG5cbiAgICBkZWZhdWx0cyhvcHRpb25zIHx8IHt9LCBzZWxmLiRvcHRpb25zLCBIdHRwLm9wdGlvbnMpO1xuXG4gICAgSHR0cC5pbnRlcmNlcHRvcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICBjbGllbnQudXNlKGhhbmRsZXIpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNsaWVudChuZXcgUmVxdWVzdChvcHRpb25zKSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblxuICAgICAgICByZXR1cm4gcmVzcG9uc2Uub2sgPyByZXNwb25zZSA6IFByb21pc2UkMS5yZWplY3QocmVzcG9uc2UpO1xuICAgIH0sIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXG4gICAgICAgIGlmIChyZXNwb25zZSBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICBlcnJvcihyZXNwb25zZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZSQxLnJlamVjdChyZXNwb25zZSk7XG4gICAgfSk7XG59XG5cbkh0dHAub3B0aW9ucyA9IHt9O1xuXG5IdHRwLmhlYWRlcnMgPSB7XG4gICAgcHV0OiBKU09OX0NPTlRFTlRfVFlQRSxcbiAgICBwb3N0OiBKU09OX0NPTlRFTlRfVFlQRSxcbiAgICBwYXRjaDogSlNPTl9DT05URU5UX1RZUEUsXG4gICAgZGVsZXRlOiBKU09OX0NPTlRFTlRfVFlQRSxcbiAgICBjdXN0b206IENVU1RPTV9IRUFERVJTLFxuICAgIGNvbW1vbjogQ09NTU9OX0hFQURFUlNcbn07XG5cbkh0dHAuaW50ZXJjZXB0b3JzID0gW2JlZm9yZSwgdGltZW91dCwgbWV0aG9kLCBib2R5LCBqc29ucCwgaGVhZGVyLCBjb3JzXTtcblxuWydnZXQnLCAnZGVsZXRlJywgJ2hlYWQnLCAnanNvbnAnXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcblxuICAgIEh0dHBbbWV0aG9kXSA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMoYXNzaWduKG9wdGlvbnMgfHwge30sIHsgdXJsOiB1cmwsIG1ldGhvZDogbWV0aG9kIH0pKTtcbiAgICB9O1xufSk7XG5cblsncG9zdCcsICdwdXQnLCAncGF0Y2gnXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcblxuICAgIEh0dHBbbWV0aG9kXSA9IGZ1bmN0aW9uICh1cmwsIGJvZHksIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMoYXNzaWduKG9wdGlvbnMgfHwge30sIHsgdXJsOiB1cmwsIG1ldGhvZDogbWV0aG9kLCBib2R5OiBib2R5IH0pKTtcbiAgICB9O1xufSk7XG5cbmZ1bmN0aW9uIFJlc291cmNlKHVybCwgcGFyYW1zLCBhY3Rpb25zLCBvcHRpb25zKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXMgfHwge30sXG4gICAgICAgIHJlc291cmNlID0ge307XG5cbiAgICBhY3Rpb25zID0gYXNzaWduKHt9LCBSZXNvdXJjZS5hY3Rpb25zLCBhY3Rpb25zKTtcblxuICAgIGVhY2goYWN0aW9ucywgZnVuY3Rpb24gKGFjdGlvbiwgbmFtZSkge1xuXG4gICAgICAgIGFjdGlvbiA9IG1lcmdlKHsgdXJsOiB1cmwsIHBhcmFtczogcGFyYW1zIHx8IHt9IH0sIG9wdGlvbnMsIGFjdGlvbik7XG5cbiAgICAgICAgcmVzb3VyY2VbbmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gKHNlbGYuJGh0dHAgfHwgSHR0cCkob3B0cyhhY3Rpb24sIGFyZ3VtZW50cykpO1xuICAgICAgICB9O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc291cmNlO1xufVxuXG5mdW5jdGlvbiBvcHRzKGFjdGlvbiwgYXJncykge1xuXG4gICAgdmFyIG9wdGlvbnMgPSBhc3NpZ24oe30sIGFjdGlvbiksXG4gICAgICAgIHBhcmFtcyA9IHt9LFxuICAgICAgICBib2R5O1xuXG4gICAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuXG4gICAgICAgIGNhc2UgMjpcblxuICAgICAgICAgICAgcGFyYW1zID0gYXJnc1swXTtcbiAgICAgICAgICAgIGJvZHkgPSBhcmdzWzFdO1xuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDE6XG5cbiAgICAgICAgICAgIGlmICgvXihQT1NUfFBVVHxQQVRDSCkkL2kudGVzdChvcHRpb25zLm1ldGhvZCkpIHtcbiAgICAgICAgICAgICAgICBib2R5ID0gYXJnc1swXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zID0gYXJnc1swXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAwOlxuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuXG4gICAgICAgICAgICB0aHJvdyAnRXhwZWN0ZWQgdXAgdG8gNCBhcmd1bWVudHMgW3BhcmFtcywgYm9keV0sIGdvdCAnICsgYXJncy5sZW5ndGggKyAnIGFyZ3VtZW50cyc7XG4gICAgfVxuXG4gICAgb3B0aW9ucy5ib2R5ID0gYm9keTtcbiAgICBvcHRpb25zLnBhcmFtcyA9IGFzc2lnbih7fSwgb3B0aW9ucy5wYXJhbXMsIHBhcmFtcyk7XG5cbiAgICByZXR1cm4gb3B0aW9ucztcbn1cblxuUmVzb3VyY2UuYWN0aW9ucyA9IHtcblxuICAgIGdldDogeyBtZXRob2Q6ICdHRVQnIH0sXG4gICAgc2F2ZTogeyBtZXRob2Q6ICdQT1NUJyB9LFxuICAgIHF1ZXJ5OiB7IG1ldGhvZDogJ0dFVCcgfSxcbiAgICB1cGRhdGU6IHsgbWV0aG9kOiAnUFVUJyB9LFxuICAgIHJlbW92ZTogeyBtZXRob2Q6ICdERUxFVEUnIH0sXG4gICAgZGVsZXRlOiB7IG1ldGhvZDogJ0RFTEVURScgfVxuXG59O1xuXG5mdW5jdGlvbiBwbHVnaW4oVnVlKSB7XG5cbiAgICBpZiAocGx1Z2luLmluc3RhbGxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgVXRpbChWdWUpO1xuXG4gICAgVnVlLnVybCA9IFVybDtcbiAgICBWdWUuaHR0cCA9IEh0dHA7XG4gICAgVnVlLnJlc291cmNlID0gUmVzb3VyY2U7XG4gICAgVnVlLlByb21pc2UgPSBQcm9taXNlJDE7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhWdWUucHJvdG90eXBlLCB7XG5cbiAgICAgICAgJHVybDoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMoVnVlLnVybCwgdGhpcywgdGhpcy4kb3B0aW9ucy51cmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgICRodHRwOiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucyhWdWUuaHR0cCwgdGhpcywgdGhpcy4kb3B0aW9ucy5odHRwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAkcmVzb3VyY2U6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBWdWUucmVzb3VyY2UuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAkcHJvbWlzZToge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZXhlY3V0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBWdWUuUHJvbWlzZShleGVjdXRvciwgX3RoaXMpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0pO1xufVxuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LlZ1ZSkge1xuICAgIHdpbmRvdy5WdWUudXNlKHBsdWdpbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGx1Z2luO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJXYjhHZWpcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXJlc291cmNlL2Rpc3QvdnVlLXJlc291cmNlLmNvbW1vbi5qc1wiLFwiLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtcmVzb3VyY2UvZGlzdFwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qIVxuICogVnVlLmpzIHYxLjAuMjZcbiAqIChjKSAyMDE2IEV2YW4gWW91XG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gc2V0KG9iaiwga2V5LCB2YWwpIHtcbiAgaWYgKGhhc093bihvYmosIGtleSkpIHtcbiAgICBvYmpba2V5XSA9IHZhbDtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKG9iai5faXNWdWUpIHtcbiAgICBzZXQob2JqLl9kYXRhLCBrZXksIHZhbCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBvYiA9IG9iai5fX29iX187XG4gIGlmICghb2IpIHtcbiAgICBvYmpba2V5XSA9IHZhbDtcbiAgICByZXR1cm47XG4gIH1cbiAgb2IuY29udmVydChrZXksIHZhbCk7XG4gIG9iLmRlcC5ub3RpZnkoKTtcbiAgaWYgKG9iLnZtcykge1xuICAgIHZhciBpID0gb2Iudm1zLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB2YXIgdm0gPSBvYi52bXNbaV07XG4gICAgICB2bS5fcHJveHkoa2V5KTtcbiAgICAgIHZtLl9kaWdlc3QoKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbDtcbn1cblxuLyoqXG4gKiBEZWxldGUgYSBwcm9wZXJ0eSBhbmQgdHJpZ2dlciBjaGFuZ2UgaWYgbmVjZXNzYXJ5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqL1xuXG5mdW5jdGlvbiBkZWwob2JqLCBrZXkpIHtcbiAgaWYgKCFoYXNPd24ob2JqLCBrZXkpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGRlbGV0ZSBvYmpba2V5XTtcbiAgdmFyIG9iID0gb2JqLl9fb2JfXztcbiAgaWYgKCFvYikge1xuICAgIGlmIChvYmouX2lzVnVlKSB7XG4gICAgICBkZWxldGUgb2JqLl9kYXRhW2tleV07XG4gICAgICBvYmouX2RpZ2VzdCgpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgb2IuZGVwLm5vdGlmeSgpO1xuICBpZiAob2Iudm1zKSB7XG4gICAgdmFyIGkgPSBvYi52bXMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHZhciB2bSA9IG9iLnZtc1tpXTtcbiAgICAgIHZtLl91bnByb3h5KGtleSk7XG4gICAgICB2bS5fZGlnZXN0KCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIG9iamVjdCBoYXMgdGhlIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuZnVuY3Rpb24gaGFzT3duKG9iaiwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhbiBleHByZXNzaW9uIGlzIGEgbGl0ZXJhbCB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXhwXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbnZhciBsaXRlcmFsVmFsdWVSRSA9IC9eXFxzPyh0cnVlfGZhbHNlfC0/W1xcZFxcLl0rfCdbXiddKid8XCJbXlwiXSpcIilcXHM/JC87XG5cbmZ1bmN0aW9uIGlzTGl0ZXJhbChleHApIHtcbiAgcmV0dXJuIGxpdGVyYWxWYWx1ZVJFLnRlc3QoZXhwKTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIHN0cmluZyBzdGFydHMgd2l0aCAkIG9yIF9cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbmZ1bmN0aW9uIGlzUmVzZXJ2ZWQoc3RyKSB7XG4gIHZhciBjID0gKHN0ciArICcnKS5jaGFyQ29kZUF0KDApO1xuICByZXR1cm4gYyA9PT0gMHgyNCB8fCBjID09PSAweDVGO1xufVxuXG4vKipcbiAqIEd1YXJkIHRleHQgb3V0cHV0LCBtYWtlIHN1cmUgdW5kZWZpbmVkIG91dHB1dHNcbiAqIGVtcHR5IHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5mdW5jdGlvbiBfdG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlLnRvU3RyaW5nKCk7XG59XG5cbi8qKlxuICogQ2hlY2sgYW5kIGNvbnZlcnQgcG9zc2libGUgbnVtZXJpYyBzdHJpbmdzIHRvIG51bWJlcnNcbiAqIGJlZm9yZSBzZXR0aW5nIGJhY2sgdG8gZGF0YVxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEByZXR1cm4geyp8TnVtYmVyfVxuICovXG5cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHZhciBwYXJzZWQgPSBOdW1iZXIodmFsdWUpO1xuICAgIHJldHVybiBpc05hTihwYXJzZWQpID8gdmFsdWUgOiBwYXJzZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBDb252ZXJ0IHN0cmluZyBib29sZWFuIGxpdGVyYWxzIGludG8gcmVhbCBib29sZWFucy5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcmV0dXJuIHsqfEJvb2xlYW59XG4gKi9cblxuZnVuY3Rpb24gdG9Cb29sZWFuKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gJ3RydWUnID8gdHJ1ZSA6IHZhbHVlID09PSAnZmFsc2UnID8gZmFsc2UgOiB2YWx1ZTtcbn1cblxuLyoqXG4gKiBTdHJpcCBxdW90ZXMgZnJvbSBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1N0cmluZyB8IGZhbHNlfVxuICovXG5cbmZ1bmN0aW9uIHN0cmlwUXVvdGVzKHN0cikge1xuICB2YXIgYSA9IHN0ci5jaGFyQ29kZUF0KDApO1xuICB2YXIgYiA9IHN0ci5jaGFyQ29kZUF0KHN0ci5sZW5ndGggLSAxKTtcbiAgcmV0dXJuIGEgPT09IGIgJiYgKGEgPT09IDB4MjIgfHwgYSA9PT0gMHgyNykgPyBzdHIuc2xpY2UoMSwgLTEpIDogc3RyO1xufVxuXG4vKipcbiAqIENhbWVsaXplIGEgaHlwaGVuLWRlbG1pdGVkIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxudmFyIGNhbWVsaXplUkUgPSAvLShcXHcpL2c7XG5cbmZ1bmN0aW9uIGNhbWVsaXplKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoY2FtZWxpemVSRSwgdG9VcHBlcik7XG59XG5cbmZ1bmN0aW9uIHRvVXBwZXIoXywgYykge1xuICByZXR1cm4gYyA/IGMudG9VcHBlckNhc2UoKSA6ICcnO1xufVxuXG4vKipcbiAqIEh5cGhlbmF0ZSBhIGNhbWVsQ2FzZSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbnZhciBoeXBoZW5hdGVSRSA9IC8oW2EtelxcZF0pKFtBLVpdKS9nO1xuXG5mdW5jdGlvbiBoeXBoZW5hdGUoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZShoeXBoZW5hdGVSRSwgJyQxLSQyJykudG9Mb3dlckNhc2UoKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBoeXBoZW4vdW5kZXJzY29yZS9zbGFzaCBkZWxpbWl0ZXJlZCBuYW1lcyBpbnRvXG4gKiBjYW1lbGl6ZWQgY2xhc3NOYW1lcy5cbiAqXG4gKiBlLmcuIG15LWNvbXBvbmVudCA9PiBNeUNvbXBvbmVudFxuICogICAgICBzb21lX2Vsc2UgICAgPT4gU29tZUVsc2VcbiAqICAgICAgc29tZS9jb21wICAgID0+IFNvbWVDb21wXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbnZhciBjbGFzc2lmeVJFID0gLyg/Ol58Wy1fXFwvXSkoXFx3KS9nO1xuXG5mdW5jdGlvbiBjbGFzc2lmeShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKGNsYXNzaWZ5UkUsIHRvVXBwZXIpO1xufVxuXG4vKipcbiAqIFNpbXBsZSBiaW5kLCBmYXN0ZXIgdGhhbiBuYXRpdmVcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtPYmplY3R9IGN0eFxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cblxuZnVuY3Rpb24gYmluZChmbiwgY3R4KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgIHZhciBsID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICByZXR1cm4gbCA/IGwgPiAxID8gZm4uYXBwbHkoY3R4LCBhcmd1bWVudHMpIDogZm4uY2FsbChjdHgsIGEpIDogZm4uY2FsbChjdHgpO1xuICB9O1xufVxuXG4vKipcbiAqIENvbnZlcnQgYW4gQXJyYXktbGlrZSBvYmplY3QgdG8gYSByZWFsIEFycmF5LlxuICpcbiAqIEBwYXJhbSB7QXJyYXktbGlrZX0gbGlzdFxuICogQHBhcmFtIHtOdW1iZXJ9IFtzdGFydF0gLSBzdGFydCBpbmRleFxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cblxuZnVuY3Rpb24gdG9BcnJheShsaXN0LCBzdGFydCkge1xuICBzdGFydCA9IHN0YXJ0IHx8IDA7XG4gIHZhciBpID0gbGlzdC5sZW5ndGggLSBzdGFydDtcbiAgdmFyIHJldCA9IG5ldyBBcnJheShpKTtcbiAgd2hpbGUgKGktLSkge1xuICAgIHJldFtpXSA9IGxpc3RbaSArIHN0YXJ0XTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG4vKipcbiAqIE1peCBwcm9wZXJ0aWVzIGludG8gdGFyZ2V0IG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdG9cbiAqIEBwYXJhbSB7T2JqZWN0fSBmcm9tXG4gKi9cblxuZnVuY3Rpb24gZXh0ZW5kKHRvLCBmcm9tKSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJvbSk7XG4gIHZhciBpID0ga2V5cy5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICB0b1trZXlzW2ldXSA9IGZyb21ba2V5c1tpXV07XG4gIH1cbiAgcmV0dXJuIHRvO1xufVxuXG4vKipcbiAqIFF1aWNrIG9iamVjdCBjaGVjayAtIHRoaXMgaXMgcHJpbWFyaWx5IHVzZWQgdG8gdGVsbFxuICogT2JqZWN0cyBmcm9tIHByaW1pdGl2ZSB2YWx1ZXMgd2hlbiB3ZSBrbm93IHRoZSB2YWx1ZVxuICogaXMgYSBKU09OLWNvbXBsaWFudCB0eXBlLlxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbmZ1bmN0aW9uIGlzT2JqZWN0KG9iaikge1xuICByZXR1cm4gb2JqICE9PSBudWxsICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIFN0cmljdCBvYmplY3QgdHlwZSBjaGVjay4gT25seSByZXR1cm5zIHRydWVcbiAqIGZvciBwbGFpbiBKYXZhU2NyaXB0IG9iamVjdHMuXG4gKlxuICogQHBhcmFtIHsqfSBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBPQkpFQ1RfU1RSSU5HID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKG9iaikgPT09IE9CSkVDVF9TVFJJTkc7XG59XG5cbi8qKlxuICogQXJyYXkgdHlwZSBjaGVjay5cbiAqXG4gKiBAcGFyYW0geyp9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbi8qKlxuICogRGVmaW5lIGEgcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHBhcmFtIHsqfSB2YWxcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW2VudW1lcmFibGVdXG4gKi9cblxuZnVuY3Rpb24gZGVmKG9iaiwga2V5LCB2YWwsIGVudW1lcmFibGUpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgdmFsdWU6IHZhbCxcbiAgICBlbnVtZXJhYmxlOiAhIWVudW1lcmFibGUsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG4vKipcbiAqIERlYm91bmNlIGEgZnVuY3Rpb24gc28gaXQgb25seSBnZXRzIGNhbGxlZCBhZnRlciB0aGVcbiAqIGlucHV0IHN0b3BzIGFycml2aW5nIGFmdGVyIHRoZSBnaXZlbiB3YWl0IHBlcmlvZC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jXG4gKiBAcGFyYW0ge051bWJlcn0gd2FpdFxuICogQHJldHVybiB7RnVuY3Rpb259IC0gdGhlIGRlYm91bmNlZCBmdW5jdGlvblxuICovXG5cbmZ1bmN0aW9uIF9kZWJvdW5jZShmdW5jLCB3YWl0KSB7XG4gIHZhciB0aW1lb3V0LCBhcmdzLCBjb250ZXh0LCB0aW1lc3RhbXAsIHJlc3VsdDtcbiAgdmFyIGxhdGVyID0gZnVuY3Rpb24gbGF0ZXIoKSB7XG4gICAgdmFyIGxhc3QgPSBEYXRlLm5vdygpIC0gdGltZXN0YW1wO1xuICAgIGlmIChsYXN0IDwgd2FpdCAmJiBsYXN0ID49IDApIHtcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0IC0gbGFzdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIGlmICghdGltZW91dCkgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBjb250ZXh0ID0gdGhpcztcbiAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHRpbWVzdGFtcCA9IERhdGUubm93KCk7XG4gICAgaWYgKCF0aW1lb3V0KSB7XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5cbi8qKlxuICogTWFudWFsIGluZGV4T2YgYmVjYXVzZSBpdCdzIHNsaWdodGx5IGZhc3RlciB0aGFuXG4gKiBuYXRpdmUuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyXG4gKiBAcGFyYW0geyp9IG9ialxuICovXG5cbmZ1bmN0aW9uIGluZGV4T2YoYXJyLCBvYmopIHtcbiAgdmFyIGkgPSBhcnIubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgaWYgKGFycltpXSA9PT0gb2JqKSByZXR1cm4gaTtcbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbi8qKlxuICogTWFrZSBhIGNhbmNlbGxhYmxlIHZlcnNpb24gb2YgYW4gYXN5bmMgY2FsbGJhY2suXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5cbmZ1bmN0aW9uIGNhbmNlbGxhYmxlKGZuKSB7XG4gIHZhciBjYiA9IGZ1bmN0aW9uIGNiKCkge1xuICAgIGlmICghY2IuY2FuY2VsbGVkKSB7XG4gICAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH07XG4gIGNiLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjYi5jYW5jZWxsZWQgPSB0cnVlO1xuICB9O1xuICByZXR1cm4gY2I7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdHdvIHZhbHVlcyBhcmUgbG9vc2VseSBlcXVhbCAtIHRoYXQgaXMsXG4gKiBpZiB0aGV5IGFyZSBwbGFpbiBvYmplY3RzLCBkbyB0aGV5IGhhdmUgdGhlIHNhbWUgc2hhcGU/XG4gKlxuICogQHBhcmFtIHsqfSBhXG4gKiBAcGFyYW0geyp9IGJcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuZnVuY3Rpb24gbG9vc2VFcXVhbChhLCBiKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIGVxZXFlcSAqL1xuICByZXR1cm4gYSA9PSBiIHx8IChpc09iamVjdChhKSAmJiBpc09iamVjdChiKSA/IEpTT04uc3RyaW5naWZ5KGEpID09PSBKU09OLnN0cmluZ2lmeShiKSA6IGZhbHNlKTtcbiAgLyogZXNsaW50LWVuYWJsZSBlcWVxZXEgKi9cbn1cblxudmFyIGhhc1Byb3RvID0gKCdfX3Byb3RvX18nIGluIHt9KTtcblxuLy8gQnJvd3NlciBlbnZpcm9ubWVudCBzbmlmZmluZ1xudmFyIGluQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh3aW5kb3cpICE9PSAnW29iamVjdCBPYmplY3RdJztcblxuLy8gZGV0ZWN0IGRldnRvb2xzXG52YXIgZGV2dG9vbHMgPSBpbkJyb3dzZXIgJiYgd2luZG93Ll9fVlVFX0RFVlRPT0xTX0dMT0JBTF9IT09LX187XG5cbi8vIFVBIHNuaWZmaW5nIGZvciB3b3JraW5nIGFyb3VuZCBicm93c2VyLXNwZWNpZmljIHF1aXJrc1xudmFyIFVBID0gaW5Ccm93c2VyICYmIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG52YXIgaXNJRSA9IFVBICYmIFVBLmluZGV4T2YoJ3RyaWRlbnQnKSA+IDA7XG52YXIgaXNJRTkgPSBVQSAmJiBVQS5pbmRleE9mKCdtc2llIDkuMCcpID4gMDtcbnZhciBpc0FuZHJvaWQgPSBVQSAmJiBVQS5pbmRleE9mKCdhbmRyb2lkJykgPiAwO1xudmFyIGlzSW9zID0gVUEgJiYgLyhpcGhvbmV8aXBhZHxpcG9kfGlvcykvaS50ZXN0KFVBKTtcbnZhciBpb3NWZXJzaW9uTWF0Y2ggPSBpc0lvcyAmJiBVQS5tYXRjaCgvb3MgKFtcXGRfXSspLyk7XG52YXIgaW9zVmVyc2lvbiA9IGlvc1ZlcnNpb25NYXRjaCAmJiBpb3NWZXJzaW9uTWF0Y2hbMV0uc3BsaXQoJ18nKTtcblxuLy8gZGV0ZWN0aW5nIGlPUyBVSVdlYlZpZXcgYnkgaW5kZXhlZERCXG52YXIgaGFzTXV0YXRpb25PYnNlcnZlckJ1ZyA9IGlvc1ZlcnNpb24gJiYgTnVtYmVyKGlvc1ZlcnNpb25bMF0pID49IDkgJiYgTnVtYmVyKGlvc1ZlcnNpb25bMV0pID49IDMgJiYgIXdpbmRvdy5pbmRleGVkREI7XG5cbnZhciB0cmFuc2l0aW9uUHJvcCA9IHVuZGVmaW5lZDtcbnZhciB0cmFuc2l0aW9uRW5kRXZlbnQgPSB1bmRlZmluZWQ7XG52YXIgYW5pbWF0aW9uUHJvcCA9IHVuZGVmaW5lZDtcbnZhciBhbmltYXRpb25FbmRFdmVudCA9IHVuZGVmaW5lZDtcblxuLy8gVHJhbnNpdGlvbiBwcm9wZXJ0eS9ldmVudCBzbmlmZmluZ1xuaWYgKGluQnJvd3NlciAmJiAhaXNJRTkpIHtcbiAgdmFyIGlzV2Via2l0VHJhbnMgPSB3aW5kb3cub250cmFuc2l0aW9uZW5kID09PSB1bmRlZmluZWQgJiYgd2luZG93Lm9ud2Via2l0dHJhbnNpdGlvbmVuZCAhPT0gdW5kZWZpbmVkO1xuICB2YXIgaXNXZWJraXRBbmltID0gd2luZG93Lm9uYW5pbWF0aW9uZW5kID09PSB1bmRlZmluZWQgJiYgd2luZG93Lm9ud2Via2l0YW5pbWF0aW9uZW5kICE9PSB1bmRlZmluZWQ7XG4gIHRyYW5zaXRpb25Qcm9wID0gaXNXZWJraXRUcmFucyA/ICdXZWJraXRUcmFuc2l0aW9uJyA6ICd0cmFuc2l0aW9uJztcbiAgdHJhbnNpdGlvbkVuZEV2ZW50ID0gaXNXZWJraXRUcmFucyA/ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyA6ICd0cmFuc2l0aW9uZW5kJztcbiAgYW5pbWF0aW9uUHJvcCA9IGlzV2Via2l0QW5pbSA/ICdXZWJraXRBbmltYXRpb24nIDogJ2FuaW1hdGlvbic7XG4gIGFuaW1hdGlvbkVuZEV2ZW50ID0gaXNXZWJraXRBbmltID8gJ3dlYmtpdEFuaW1hdGlvbkVuZCcgOiAnYW5pbWF0aW9uZW5kJztcbn1cblxuLyoqXG4gKiBEZWZlciBhIHRhc2sgdG8gZXhlY3V0ZSBpdCBhc3luY2hyb25vdXNseS4gSWRlYWxseSB0aGlzXG4gKiBzaG91bGQgYmUgZXhlY3V0ZWQgYXMgYSBtaWNyb3Rhc2ssIHNvIHdlIGxldmVyYWdlXG4gKiBNdXRhdGlvbk9ic2VydmVyIGlmIGl0J3MgYXZhaWxhYmxlLCBhbmQgZmFsbGJhY2sgdG9cbiAqIHNldFRpbWVvdXQoMCkuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7T2JqZWN0fSBjdHhcbiAqL1xuXG52YXIgbmV4dFRpY2sgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgY2FsbGJhY2tzID0gW107XG4gIHZhciBwZW5kaW5nID0gZmFsc2U7XG4gIHZhciB0aW1lckZ1bmM7XG4gIGZ1bmN0aW9uIG5leHRUaWNrSGFuZGxlcigpIHtcbiAgICBwZW5kaW5nID0gZmFsc2U7XG4gICAgdmFyIGNvcGllcyA9IGNhbGxiYWNrcy5zbGljZSgwKTtcbiAgICBjYWxsYmFja3MgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvcGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29waWVzW2ldKCk7XG4gICAgfVxuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICh0eXBlb2YgTXV0YXRpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgIWhhc011dGF0aW9uT2JzZXJ2ZXJCdWcpIHtcbiAgICB2YXIgY291bnRlciA9IDE7XG4gICAgdmFyIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobmV4dFRpY2tIYW5kbGVyKTtcbiAgICB2YXIgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb3VudGVyKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKHRleHROb2RlLCB7XG4gICAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlXG4gICAgfSk7XG4gICAgdGltZXJGdW5jID0gZnVuY3Rpb24gKCkge1xuICAgICAgY291bnRlciA9IChjb3VudGVyICsgMSkgJSAyO1xuICAgICAgdGV4dE5vZGUuZGF0YSA9IGNvdW50ZXI7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICAvLyB3ZWJwYWNrIGF0dGVtcHRzIHRvIGluamVjdCBhIHNoaW0gZm9yIHNldEltbWVkaWF0ZVxuICAgIC8vIGlmIGl0IGlzIHVzZWQgYXMgYSBnbG9iYWwsIHNvIHdlIGhhdmUgdG8gd29yayBhcm91bmQgdGhhdCB0b1xuICAgIC8vIGF2b2lkIGJ1bmRsaW5nIHVubmVjZXNzYXJ5IGNvZGUuXG4gICAgdmFyIGNvbnRleHQgPSBpbkJyb3dzZXIgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHt9O1xuICAgIHRpbWVyRnVuYyA9IGNvbnRleHQuc2V0SW1tZWRpYXRlIHx8IHNldFRpbWVvdXQ7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uIChjYiwgY3R4KSB7XG4gICAgdmFyIGZ1bmMgPSBjdHggPyBmdW5jdGlvbiAoKSB7XG4gICAgICBjYi5jYWxsKGN0eCk7XG4gICAgfSA6IGNiO1xuICAgIGNhbGxiYWNrcy5wdXNoKGZ1bmMpO1xuICAgIGlmIChwZW5kaW5nKSByZXR1cm47XG4gICAgcGVuZGluZyA9IHRydWU7XG4gICAgdGltZXJGdW5jKG5leHRUaWNrSGFuZGxlciwgMCk7XG4gIH07XG59KSgpO1xuXG52YXIgX1NldCA9IHVuZGVmaW5lZDtcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuaWYgKHR5cGVvZiBTZXQgIT09ICd1bmRlZmluZWQnICYmIFNldC50b1N0cmluZygpLm1hdGNoKC9uYXRpdmUgY29kZS8pKSB7XG4gIC8vIHVzZSBuYXRpdmUgU2V0IHdoZW4gYXZhaWxhYmxlLlxuICBfU2V0ID0gU2V0O1xufSBlbHNlIHtcbiAgLy8gYSBub24tc3RhbmRhcmQgU2V0IHBvbHlmaWxsIHRoYXQgb25seSB3b3JrcyB3aXRoIHByaW1pdGl2ZSBrZXlzLlxuICBfU2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc2V0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgfTtcbiAgX1NldC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiB0aGlzLnNldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gIH07XG4gIF9TZXQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICB0aGlzLnNldFtrZXldID0gMTtcbiAgfTtcbiAgX1NldC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBDYWNoZShsaW1pdCkge1xuICB0aGlzLnNpemUgPSAwO1xuICB0aGlzLmxpbWl0ID0gbGltaXQ7XG4gIHRoaXMuaGVhZCA9IHRoaXMudGFpbCA9IHVuZGVmaW5lZDtcbiAgdGhpcy5fa2V5bWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbn1cblxudmFyIHAgPSBDYWNoZS5wcm90b3R5cGU7XG5cbi8qKlxuICogUHV0IDx2YWx1ZT4gaW50byB0aGUgY2FjaGUgYXNzb2NpYXRlZCB3aXRoIDxrZXk+LlxuICogUmV0dXJucyB0aGUgZW50cnkgd2hpY2ggd2FzIHJlbW92ZWQgdG8gbWFrZSByb29tIGZvclxuICogdGhlIG5ldyBlbnRyeS4gT3RoZXJ3aXNlIHVuZGVmaW5lZCBpcyByZXR1cm5lZC5cbiAqIChpLmUuIGlmIHRoZXJlIHdhcyBlbm91Z2ggcm9vbSBhbHJlYWR5KS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcmV0dXJuIHtFbnRyeXx1bmRlZmluZWR9XG4gKi9cblxucC5wdXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICB2YXIgcmVtb3ZlZDtcblxuICB2YXIgZW50cnkgPSB0aGlzLmdldChrZXksIHRydWUpO1xuICBpZiAoIWVudHJ5KSB7XG4gICAgaWYgKHRoaXMuc2l6ZSA9PT0gdGhpcy5saW1pdCkge1xuICAgICAgcmVtb3ZlZCA9IHRoaXMuc2hpZnQoKTtcbiAgICB9XG4gICAgZW50cnkgPSB7XG4gICAgICBrZXk6IGtleVxuICAgIH07XG4gICAgdGhpcy5fa2V5bWFwW2tleV0gPSBlbnRyeTtcbiAgICBpZiAodGhpcy50YWlsKSB7XG4gICAgICB0aGlzLnRhaWwubmV3ZXIgPSBlbnRyeTtcbiAgICAgIGVudHJ5Lm9sZGVyID0gdGhpcy50YWlsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhlYWQgPSBlbnRyeTtcbiAgICB9XG4gICAgdGhpcy50YWlsID0gZW50cnk7XG4gICAgdGhpcy5zaXplKys7XG4gIH1cbiAgZW50cnkudmFsdWUgPSB2YWx1ZTtcblxuICByZXR1cm4gcmVtb3ZlZDtcbn07XG5cbi8qKlxuICogUHVyZ2UgdGhlIGxlYXN0IHJlY2VudGx5IHVzZWQgKG9sZGVzdCkgZW50cnkgZnJvbSB0aGVcbiAqIGNhY2hlLiBSZXR1cm5zIHRoZSByZW1vdmVkIGVudHJ5IG9yIHVuZGVmaW5lZCBpZiB0aGVcbiAqIGNhY2hlIHdhcyBlbXB0eS5cbiAqL1xuXG5wLnNoaWZ0ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZW50cnkgPSB0aGlzLmhlYWQ7XG4gIGlmIChlbnRyeSkge1xuICAgIHRoaXMuaGVhZCA9IHRoaXMuaGVhZC5uZXdlcjtcbiAgICB0aGlzLmhlYWQub2xkZXIgPSB1bmRlZmluZWQ7XG4gICAgZW50cnkubmV3ZXIgPSBlbnRyeS5vbGRlciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9rZXltYXBbZW50cnkua2V5XSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNpemUtLTtcbiAgfVxuICByZXR1cm4gZW50cnk7XG59O1xuXG4vKipcbiAqIEdldCBhbmQgcmVnaXN0ZXIgcmVjZW50IHVzZSBvZiA8a2V5Pi4gUmV0dXJucyB0aGUgdmFsdWVcbiAqIGFzc29jaWF0ZWQgd2l0aCA8a2V5PiBvciB1bmRlZmluZWQgaWYgbm90IGluIGNhY2hlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gcmV0dXJuRW50cnlcbiAqIEByZXR1cm4ge0VudHJ5fCp9XG4gKi9cblxucC5nZXQgPSBmdW5jdGlvbiAoa2V5LCByZXR1cm5FbnRyeSkge1xuICB2YXIgZW50cnkgPSB0aGlzLl9rZXltYXBba2V5XTtcbiAgaWYgKGVudHJ5ID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgaWYgKGVudHJ5ID09PSB0aGlzLnRhaWwpIHtcbiAgICByZXR1cm4gcmV0dXJuRW50cnkgPyBlbnRyeSA6IGVudHJ5LnZhbHVlO1xuICB9XG4gIC8vIEhFQUQtLS0tLS0tLS0tLS0tLVRBSUxcbiAgLy8gICA8Lm9sZGVyICAgLm5ld2VyPlxuICAvLyAgPC0tLSBhZGQgZGlyZWN0aW9uIC0tXG4gIC8vICAgQSAgQiAgQyAgPEQ+ICBFXG4gIGlmIChlbnRyeS5uZXdlcikge1xuICAgIGlmIChlbnRyeSA9PT0gdGhpcy5oZWFkKSB7XG4gICAgICB0aGlzLmhlYWQgPSBlbnRyeS5uZXdlcjtcbiAgICB9XG4gICAgZW50cnkubmV3ZXIub2xkZXIgPSBlbnRyeS5vbGRlcjsgLy8gQyA8LS0gRS5cbiAgfVxuICBpZiAoZW50cnkub2xkZXIpIHtcbiAgICBlbnRyeS5vbGRlci5uZXdlciA9IGVudHJ5Lm5ld2VyOyAvLyBDLiAtLT4gRVxuICB9XG4gIGVudHJ5Lm5ld2VyID0gdW5kZWZpbmVkOyAvLyBEIC0teFxuICBlbnRyeS5vbGRlciA9IHRoaXMudGFpbDsgLy8gRC4gLS0+IEVcbiAgaWYgKHRoaXMudGFpbCkge1xuICAgIHRoaXMudGFpbC5uZXdlciA9IGVudHJ5OyAvLyBFLiA8LS0gRFxuICB9XG4gIHRoaXMudGFpbCA9IGVudHJ5O1xuICByZXR1cm4gcmV0dXJuRW50cnkgPyBlbnRyeSA6IGVudHJ5LnZhbHVlO1xufTtcblxudmFyIGNhY2hlJDEgPSBuZXcgQ2FjaGUoMTAwMCk7XG52YXIgZmlsdGVyVG9rZW5SRSA9IC9bXlxccydcIl0rfCdbXiddKid8XCJbXlwiXSpcIi9nO1xudmFyIHJlc2VydmVkQXJnUkUgPSAvXmluJHxeLT9cXGQrLztcblxuLyoqXG4gKiBQYXJzZXIgc3RhdGVcbiAqL1xuXG52YXIgc3RyO1xudmFyIGRpcjtcbnZhciBjO1xudmFyIHByZXY7XG52YXIgaTtcbnZhciBsO1xudmFyIGxhc3RGaWx0ZXJJbmRleDtcbnZhciBpblNpbmdsZTtcbnZhciBpbkRvdWJsZTtcbnZhciBjdXJseTtcbnZhciBzcXVhcmU7XG52YXIgcGFyZW47XG4vKipcbiAqIFB1c2ggYSBmaWx0ZXIgdG8gdGhlIGN1cnJlbnQgZGlyZWN0aXZlIG9iamVjdFxuICovXG5cbmZ1bmN0aW9uIHB1c2hGaWx0ZXIoKSB7XG4gIHZhciBleHAgPSBzdHIuc2xpY2UobGFzdEZpbHRlckluZGV4LCBpKS50cmltKCk7XG4gIHZhciBmaWx0ZXI7XG4gIGlmIChleHApIHtcbiAgICBmaWx0ZXIgPSB7fTtcbiAgICB2YXIgdG9rZW5zID0gZXhwLm1hdGNoKGZpbHRlclRva2VuUkUpO1xuICAgIGZpbHRlci5uYW1lID0gdG9rZW5zWzBdO1xuICAgIGlmICh0b2tlbnMubGVuZ3RoID4gMSkge1xuICAgICAgZmlsdGVyLmFyZ3MgPSB0b2tlbnMuc2xpY2UoMSkubWFwKHByb2Nlc3NGaWx0ZXJBcmcpO1xuICAgIH1cbiAgfVxuICBpZiAoZmlsdGVyKSB7XG4gICAgKGRpci5maWx0ZXJzID0gZGlyLmZpbHRlcnMgfHwgW10pLnB1c2goZmlsdGVyKTtcbiAgfVxuICBsYXN0RmlsdGVySW5kZXggPSBpICsgMTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhbiBhcmd1bWVudCBpcyBkeW5hbWljIGFuZCBzdHJpcCBxdW90ZXMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGFyZ1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5cbmZ1bmN0aW9uIHByb2Nlc3NGaWx0ZXJBcmcoYXJnKSB7XG4gIGlmIChyZXNlcnZlZEFyZ1JFLnRlc3QoYXJnKSkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdG9OdW1iZXIoYXJnKSxcbiAgICAgIGR5bmFtaWM6IGZhbHNlXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgc3RyaXBwZWQgPSBzdHJpcFF1b3RlcyhhcmcpO1xuICAgIHZhciBkeW5hbWljID0gc3RyaXBwZWQgPT09IGFyZztcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGR5bmFtaWMgPyBhcmcgOiBzdHJpcHBlZCxcbiAgICAgIGR5bmFtaWM6IGR5bmFtaWNcbiAgICB9O1xuICB9XG59XG5cbi8qKlxuICogUGFyc2UgYSBkaXJlY3RpdmUgdmFsdWUgYW5kIGV4dHJhY3QgdGhlIGV4cHJlc3Npb25cbiAqIGFuZCBpdHMgZmlsdGVycyBpbnRvIGEgZGVzY3JpcHRvci5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIFwiYSArIDEgfCB1cHBlcmNhc2VcIiB3aWxsIHlpZWxkOlxuICoge1xuICogICBleHByZXNzaW9uOiAnYSArIDEnLFxuICogICBmaWx0ZXJzOiBbXG4gKiAgICAgeyBuYW1lOiAndXBwZXJjYXNlJywgYXJnczogbnVsbCB9XG4gKiAgIF1cbiAqIH1cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlRGlyZWN0aXZlKHMpIHtcbiAgdmFyIGhpdCA9IGNhY2hlJDEuZ2V0KHMpO1xuICBpZiAoaGl0KSB7XG4gICAgcmV0dXJuIGhpdDtcbiAgfVxuXG4gIC8vIHJlc2V0IHBhcnNlciBzdGF0ZVxuICBzdHIgPSBzO1xuICBpblNpbmdsZSA9IGluRG91YmxlID0gZmFsc2U7XG4gIGN1cmx5ID0gc3F1YXJlID0gcGFyZW4gPSAwO1xuICBsYXN0RmlsdGVySW5kZXggPSAwO1xuICBkaXIgPSB7fTtcblxuICBmb3IgKGkgPSAwLCBsID0gc3RyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHByZXYgPSBjO1xuICAgIGMgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICBpZiAoaW5TaW5nbGUpIHtcbiAgICAgIC8vIGNoZWNrIHNpbmdsZSBxdW90ZVxuICAgICAgaWYgKGMgPT09IDB4MjcgJiYgcHJldiAhPT0gMHg1QykgaW5TaW5nbGUgPSAhaW5TaW5nbGU7XG4gICAgfSBlbHNlIGlmIChpbkRvdWJsZSkge1xuICAgICAgLy8gY2hlY2sgZG91YmxlIHF1b3RlXG4gICAgICBpZiAoYyA9PT0gMHgyMiAmJiBwcmV2ICE9PSAweDVDKSBpbkRvdWJsZSA9ICFpbkRvdWJsZTtcbiAgICB9IGVsc2UgaWYgKGMgPT09IDB4N0MgJiYgLy8gcGlwZVxuICAgIHN0ci5jaGFyQ29kZUF0KGkgKyAxKSAhPT0gMHg3QyAmJiBzdHIuY2hhckNvZGVBdChpIC0gMSkgIT09IDB4N0MpIHtcbiAgICAgIGlmIChkaXIuZXhwcmVzc2lvbiA9PSBudWxsKSB7XG4gICAgICAgIC8vIGZpcnN0IGZpbHRlciwgZW5kIG9mIGV4cHJlc3Npb25cbiAgICAgICAgbGFzdEZpbHRlckluZGV4ID0gaSArIDE7XG4gICAgICAgIGRpci5leHByZXNzaW9uID0gc3RyLnNsaWNlKDAsIGkpLnRyaW0oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGFscmVhZHkgaGFzIGZpbHRlclxuICAgICAgICBwdXNoRmlsdGVyKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXRjaCAoYykge1xuICAgICAgICBjYXNlIDB4MjI6XG4gICAgICAgICAgaW5Eb3VibGUgPSB0cnVlO2JyZWFrOyAvLyBcIlxuICAgICAgICBjYXNlIDB4Mjc6XG4gICAgICAgICAgaW5TaW5nbGUgPSB0cnVlO2JyZWFrOyAvLyAnXG4gICAgICAgIGNhc2UgMHgyODpcbiAgICAgICAgICBwYXJlbisrO2JyZWFrOyAvLyAoXG4gICAgICAgIGNhc2UgMHgyOTpcbiAgICAgICAgICBwYXJlbi0tO2JyZWFrOyAvLyApXG4gICAgICAgIGNhc2UgMHg1QjpcbiAgICAgICAgICBzcXVhcmUrKzticmVhazsgLy8gW1xuICAgICAgICBjYXNlIDB4NUQ6XG4gICAgICAgICAgc3F1YXJlLS07YnJlYWs7IC8vIF1cbiAgICAgICAgY2FzZSAweDdCOlxuICAgICAgICAgIGN1cmx5Kys7YnJlYWs7IC8vIHtcbiAgICAgICAgY2FzZSAweDdEOlxuICAgICAgICAgIGN1cmx5LS07YnJlYWs7IC8vIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoZGlyLmV4cHJlc3Npb24gPT0gbnVsbCkge1xuICAgIGRpci5leHByZXNzaW9uID0gc3RyLnNsaWNlKDAsIGkpLnRyaW0oKTtcbiAgfSBlbHNlIGlmIChsYXN0RmlsdGVySW5kZXggIT09IDApIHtcbiAgICBwdXNoRmlsdGVyKCk7XG4gIH1cblxuICBjYWNoZSQxLnB1dChzLCBkaXIpO1xuICByZXR1cm4gZGlyO1xufVxuXG52YXIgZGlyZWN0aXZlID0gT2JqZWN0LmZyZWV6ZSh7XG4gIHBhcnNlRGlyZWN0aXZlOiBwYXJzZURpcmVjdGl2ZVxufSk7XG5cbnZhciByZWdleEVzY2FwZVJFID0gL1stLiorP14ke30oKXxbXFxdXFwvXFxcXF0vZztcbnZhciBjYWNoZSA9IHVuZGVmaW5lZDtcbnZhciB0YWdSRSA9IHVuZGVmaW5lZDtcbnZhciBodG1sUkUgPSB1bmRlZmluZWQ7XG4vKipcbiAqIEVzY2FwZSBhIHN0cmluZyBzbyBpdCBjYW4gYmUgdXNlZCBpbiBhIFJlZ0V4cFxuICogY29uc3RydWN0b3IuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICovXG5cbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UocmVnZXhFc2NhcGVSRSwgJ1xcXFwkJicpO1xufVxuXG5mdW5jdGlvbiBjb21waWxlUmVnZXgoKSB7XG4gIHZhciBvcGVuID0gZXNjYXBlUmVnZXgoY29uZmlnLmRlbGltaXRlcnNbMF0pO1xuICB2YXIgY2xvc2UgPSBlc2NhcGVSZWdleChjb25maWcuZGVsaW1pdGVyc1sxXSk7XG4gIHZhciB1bnNhZmVPcGVuID0gZXNjYXBlUmVnZXgoY29uZmlnLnVuc2FmZURlbGltaXRlcnNbMF0pO1xuICB2YXIgdW5zYWZlQ2xvc2UgPSBlc2NhcGVSZWdleChjb25maWcudW5zYWZlRGVsaW1pdGVyc1sxXSk7XG4gIHRhZ1JFID0gbmV3IFJlZ0V4cCh1bnNhZmVPcGVuICsgJygoPzoufFxcXFxuKSs/KScgKyB1bnNhZmVDbG9zZSArICd8JyArIG9wZW4gKyAnKCg/Oi58XFxcXG4pKz8pJyArIGNsb3NlLCAnZycpO1xuICBodG1sUkUgPSBuZXcgUmVnRXhwKCdeJyArIHVuc2FmZU9wZW4gKyAnKCg/Oi58XFxcXG4pKz8pJyArIHVuc2FmZUNsb3NlICsgJyQnKTtcbiAgLy8gcmVzZXQgY2FjaGVcbiAgY2FjaGUgPSBuZXcgQ2FjaGUoMTAwMCk7XG59XG5cbi8qKlxuICogUGFyc2UgYSB0ZW1wbGF0ZSB0ZXh0IHN0cmluZyBpbnRvIGFuIGFycmF5IG9mIHRva2Vucy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdGV4dFxuICogQHJldHVybiB7QXJyYXk8T2JqZWN0PiB8IG51bGx9XG4gKiAgICAgICAgICAgICAgIC0ge1N0cmluZ30gdHlwZVxuICogICAgICAgICAgICAgICAtIHtTdHJpbmd9IHZhbHVlXG4gKiAgICAgICAgICAgICAgIC0ge0Jvb2xlYW59IFtodG1sXVxuICogICAgICAgICAgICAgICAtIHtCb29sZWFufSBbb25lVGltZV1cbiAqL1xuXG5mdW5jdGlvbiBwYXJzZVRleHQodGV4dCkge1xuICBpZiAoIWNhY2hlKSB7XG4gICAgY29tcGlsZVJlZ2V4KCk7XG4gIH1cbiAgdmFyIGhpdCA9IGNhY2hlLmdldCh0ZXh0KTtcbiAgaWYgKGhpdCkge1xuICAgIHJldHVybiBoaXQ7XG4gIH1cbiAgaWYgKCF0YWdSRS50ZXN0KHRleHQpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmFyIHRva2VucyA9IFtdO1xuICB2YXIgbGFzdEluZGV4ID0gdGFnUkUubGFzdEluZGV4ID0gMDtcbiAgdmFyIG1hdGNoLCBpbmRleCwgaHRtbCwgdmFsdWUsIGZpcnN0LCBvbmVUaW1lO1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25kLWFzc2lnbiAqL1xuICB3aGlsZSAobWF0Y2ggPSB0YWdSRS5leGVjKHRleHQpKSB7XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1jb25kLWFzc2lnbiAqL1xuICAgIGluZGV4ID0gbWF0Y2guaW5kZXg7XG4gICAgLy8gcHVzaCB0ZXh0IHRva2VuXG4gICAgaWYgKGluZGV4ID4gbGFzdEluZGV4KSB7XG4gICAgICB0b2tlbnMucHVzaCh7XG4gICAgICAgIHZhbHVlOiB0ZXh0LnNsaWNlKGxhc3RJbmRleCwgaW5kZXgpXG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gdGFnIHRva2VuXG4gICAgaHRtbCA9IGh0bWxSRS50ZXN0KG1hdGNoWzBdKTtcbiAgICB2YWx1ZSA9IGh0bWwgPyBtYXRjaFsxXSA6IG1hdGNoWzJdO1xuICAgIGZpcnN0ID0gdmFsdWUuY2hhckNvZGVBdCgwKTtcbiAgICBvbmVUaW1lID0gZmlyc3QgPT09IDQyOyAvLyAqXG4gICAgdmFsdWUgPSBvbmVUaW1lID8gdmFsdWUuc2xpY2UoMSkgOiB2YWx1ZTtcbiAgICB0b2tlbnMucHVzaCh7XG4gICAgICB0YWc6IHRydWUsXG4gICAgICB2YWx1ZTogdmFsdWUudHJpbSgpLFxuICAgICAgaHRtbDogaHRtbCxcbiAgICAgIG9uZVRpbWU6IG9uZVRpbWVcbiAgICB9KTtcbiAgICBsYXN0SW5kZXggPSBpbmRleCArIG1hdGNoWzBdLmxlbmd0aDtcbiAgfVxuICBpZiAobGFzdEluZGV4IDwgdGV4dC5sZW5ndGgpIHtcbiAgICB0b2tlbnMucHVzaCh7XG4gICAgICB2YWx1ZTogdGV4dC5zbGljZShsYXN0SW5kZXgpXG4gICAgfSk7XG4gIH1cbiAgY2FjaGUucHV0KHRleHQsIHRva2Vucyk7XG4gIHJldHVybiB0b2tlbnM7XG59XG5cbi8qKlxuICogRm9ybWF0IGEgbGlzdCBvZiB0b2tlbnMgaW50byBhbiBleHByZXNzaW9uLlxuICogZS5nLiB0b2tlbnMgcGFyc2VkIGZyb20gJ2Ege3tifX0gYycgY2FuIGJlIHNlcmlhbGl6ZWRcbiAqIGludG8gb25lIHNpbmdsZSBleHByZXNzaW9uIGFzICdcImEgXCIgKyBiICsgXCIgY1wiJy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSB0b2tlbnNcbiAqIEBwYXJhbSB7VnVlfSBbdm1dXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuZnVuY3Rpb24gdG9rZW5zVG9FeHAodG9rZW5zLCB2bSkge1xuICBpZiAodG9rZW5zLmxlbmd0aCA+IDEpIHtcbiAgICByZXR1cm4gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgIHJldHVybiBmb3JtYXRUb2tlbih0b2tlbiwgdm0pO1xuICAgIH0pLmpvaW4oJysnKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZm9ybWF0VG9rZW4odG9rZW5zWzBdLCB2bSwgdHJ1ZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBGb3JtYXQgYSBzaW5nbGUgdG9rZW4uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHRva2VuXG4gKiBAcGFyYW0ge1Z1ZX0gW3ZtXVxuICogQHBhcmFtIHtCb29sZWFufSBbc2luZ2xlXVxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmZ1bmN0aW9uIGZvcm1hdFRva2VuKHRva2VuLCB2bSwgc2luZ2xlKSB7XG4gIHJldHVybiB0b2tlbi50YWcgPyB0b2tlbi5vbmVUaW1lICYmIHZtID8gJ1wiJyArIHZtLiRldmFsKHRva2VuLnZhbHVlKSArICdcIicgOiBpbmxpbmVGaWx0ZXJzKHRva2VuLnZhbHVlLCBzaW5nbGUpIDogJ1wiJyArIHRva2VuLnZhbHVlICsgJ1wiJztcbn1cblxuLyoqXG4gKiBGb3IgYW4gYXR0cmlidXRlIHdpdGggbXVsdGlwbGUgaW50ZXJwb2xhdGlvbiB0YWdzLFxuICogZS5nLiBhdHRyPVwic29tZS17e3RoaW5nIHwgZmlsdGVyfX1cIiwgaW4gb3JkZXIgdG8gY29tYmluZVxuICogdGhlIHdob2xlIHRoaW5nIGludG8gYSBzaW5nbGUgd2F0Y2hhYmxlIGV4cHJlc3Npb24sIHdlXG4gKiBoYXZlIHRvIGlubGluZSB0aG9zZSBmaWx0ZXJzLiBUaGlzIGZ1bmN0aW9uIGRvZXMgZXhhY3RseVxuICogdGhhdC4gVGhpcyBpcyBhIGJpdCBoYWNreSBidXQgaXQgYXZvaWRzIGhlYXZ5IGNoYW5nZXNcbiAqIHRvIGRpcmVjdGl2ZSBwYXJzZXIgYW5kIHdhdGNoZXIgbWVjaGFuaXNtLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBleHBcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gc2luZ2xlXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxudmFyIGZpbHRlclJFID0gL1tefF1cXHxbXnxdLztcbmZ1bmN0aW9uIGlubGluZUZpbHRlcnMoZXhwLCBzaW5nbGUpIHtcbiAgaWYgKCFmaWx0ZXJSRS50ZXN0KGV4cCkpIHtcbiAgICByZXR1cm4gc2luZ2xlID8gZXhwIDogJygnICsgZXhwICsgJyknO1xuICB9IGVsc2Uge1xuICAgIHZhciBkaXIgPSBwYXJzZURpcmVjdGl2ZShleHApO1xuICAgIGlmICghZGlyLmZpbHRlcnMpIHtcbiAgICAgIHJldHVybiAnKCcgKyBleHAgKyAnKSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAndGhpcy5fYXBwbHlGaWx0ZXJzKCcgKyBkaXIuZXhwcmVzc2lvbiArIC8vIHZhbHVlXG4gICAgICAnLG51bGwsJyArIC8vIG9sZFZhbHVlIChudWxsIGZvciByZWFkKVxuICAgICAgSlNPTi5zdHJpbmdpZnkoZGlyLmZpbHRlcnMpICsgLy8gZmlsdGVyIGRlc2NyaXB0b3JzXG4gICAgICAnLGZhbHNlKSc7IC8vIHdyaXRlP1xuICAgIH1cbiAgfVxufVxuXG52YXIgdGV4dCA9IE9iamVjdC5mcmVlemUoe1xuICBjb21waWxlUmVnZXg6IGNvbXBpbGVSZWdleCxcbiAgcGFyc2VUZXh0OiBwYXJzZVRleHQsXG4gIHRva2Vuc1RvRXhwOiB0b2tlbnNUb0V4cFxufSk7XG5cbnZhciBkZWxpbWl0ZXJzID0gWyd7eycsICd9fSddO1xudmFyIHVuc2FmZURlbGltaXRlcnMgPSBbJ3t7eycsICd9fX0nXTtcblxudmFyIGNvbmZpZyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHtcblxuICAvKipcbiAgICogV2hldGhlciB0byBwcmludCBkZWJ1ZyBtZXNzYWdlcy5cbiAgICogQWxzbyBlbmFibGVzIHN0YWNrIHRyYWNlIGZvciB3YXJuaW5ncy5cbiAgICpcbiAgICogQHR5cGUge0Jvb2xlYW59XG4gICAqL1xuXG4gIGRlYnVnOiBmYWxzZSxcblxuICAvKipcbiAgICogV2hldGhlciB0byBzdXBwcmVzcyB3YXJuaW5ncy5cbiAgICpcbiAgICogQHR5cGUge0Jvb2xlYW59XG4gICAqL1xuXG4gIHNpbGVudDogZmFsc2UsXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gdXNlIGFzeW5jIHJlbmRlcmluZy5cbiAgICovXG5cbiAgYXN5bmM6IHRydWUsXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gd2FybiBhZ2FpbnN0IGVycm9ycyBjYXVnaHQgd2hlbiBldmFsdWF0aW5nXG4gICAqIGV4cHJlc3Npb25zLlxuICAgKi9cblxuICB3YXJuRXhwcmVzc2lvbkVycm9yczogdHJ1ZSxcblxuICAvKipcbiAgICogV2hldGhlciB0byBhbGxvdyBkZXZ0b29scyBpbnNwZWN0aW9uLlxuICAgKiBEaXNhYmxlZCBieSBkZWZhdWx0IGluIHByb2R1Y3Rpb24gYnVpbGRzLlxuICAgKi9cblxuICBkZXZ0b29sczogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyxcblxuICAvKipcbiAgICogSW50ZXJuYWwgZmxhZyB0byBpbmRpY2F0ZSB0aGUgZGVsaW1pdGVycyBoYXZlIGJlZW5cbiAgICogY2hhbmdlZC5cbiAgICpcbiAgICogQHR5cGUge0Jvb2xlYW59XG4gICAqL1xuXG4gIF9kZWxpbWl0ZXJzQ2hhbmdlZDogdHJ1ZSxcblxuICAvKipcbiAgICogTGlzdCBvZiBhc3NldCB0eXBlcyB0aGF0IGEgY29tcG9uZW50IGNhbiBvd24uXG4gICAqXG4gICAqIEB0eXBlIHtBcnJheX1cbiAgICovXG5cbiAgX2Fzc2V0VHlwZXM6IFsnY29tcG9uZW50JywgJ2RpcmVjdGl2ZScsICdlbGVtZW50RGlyZWN0aXZlJywgJ2ZpbHRlcicsICd0cmFuc2l0aW9uJywgJ3BhcnRpYWwnXSxcblxuICAvKipcbiAgICogcHJvcCBiaW5kaW5nIG1vZGVzXG4gICAqL1xuXG4gIF9wcm9wQmluZGluZ01vZGVzOiB7XG4gICAgT05FX1dBWTogMCxcbiAgICBUV09fV0FZOiAxLFxuICAgIE9ORV9USU1FOiAyXG4gIH0sXG5cbiAgLyoqXG4gICAqIE1heCBjaXJjdWxhciB1cGRhdGVzIGFsbG93ZWQgaW4gYSBiYXRjaGVyIGZsdXNoIGN5Y2xlLlxuICAgKi9cblxuICBfbWF4VXBkYXRlQ291bnQ6IDEwMFxuXG59LCB7XG4gIGRlbGltaXRlcnM6IHsgLyoqXG4gICAgICAgICAgICAgICAgICogSW50ZXJwb2xhdGlvbiBkZWxpbWl0ZXJzLiBDaGFuZ2luZyB0aGVzZSB3b3VsZCB0cmlnZ2VyXG4gICAgICAgICAgICAgICAgICogdGhlIHRleHQgcGFyc2VyIHRvIHJlLWNvbXBpbGUgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbnMuXG4gICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgICAgKiBAdHlwZSB7QXJyYXk8U3RyaW5nPn1cbiAgICAgICAgICAgICAgICAgKi9cblxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIGRlbGltaXRlcnM7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWwpIHtcbiAgICAgIGRlbGltaXRlcnMgPSB2YWw7XG4gICAgICBjb21waWxlUmVnZXgoKTtcbiAgICB9LFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBlbnVtZXJhYmxlOiB0cnVlXG4gIH0sXG4gIHVuc2FmZURlbGltaXRlcnM6IHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB1bnNhZmVEZWxpbWl0ZXJzO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsKSB7XG4gICAgICB1bnNhZmVEZWxpbWl0ZXJzID0gdmFsO1xuICAgICAgY29tcGlsZVJlZ2V4KCk7XG4gICAgfSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZW51bWVyYWJsZTogdHJ1ZVxuICB9XG59KTtcblxudmFyIHdhcm4gPSB1bmRlZmluZWQ7XG52YXIgZm9ybWF0Q29tcG9uZW50TmFtZSA9IHVuZGVmaW5lZDtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaGFzQ29uc29sZSA9IHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJztcblxuICAgIHdhcm4gPSBmdW5jdGlvbiAobXNnLCB2bSkge1xuICAgICAgaWYgKGhhc0NvbnNvbGUgJiYgIWNvbmZpZy5zaWxlbnQpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignW1Z1ZSB3YXJuXTogJyArIG1zZyArICh2bSA/IGZvcm1hdENvbXBvbmVudE5hbWUodm0pIDogJycpKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZm9ybWF0Q29tcG9uZW50TmFtZSA9IGZ1bmN0aW9uICh2bSkge1xuICAgICAgdmFyIG5hbWUgPSB2bS5faXNWdWUgPyB2bS4kb3B0aW9ucy5uYW1lIDogdm0ubmFtZTtcbiAgICAgIHJldHVybiBuYW1lID8gJyAoZm91bmQgaW4gY29tcG9uZW50OiA8JyArIGh5cGhlbmF0ZShuYW1lKSArICc+KScgOiAnJztcbiAgICB9O1xuICB9KSgpO1xufVxuXG4vKipcbiAqIEFwcGVuZCB3aXRoIHRyYW5zaXRpb24uXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXRcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXVxuICovXG5cbmZ1bmN0aW9uIGFwcGVuZFdpdGhUcmFuc2l0aW9uKGVsLCB0YXJnZXQsIHZtLCBjYikge1xuICBhcHBseVRyYW5zaXRpb24oZWwsIDEsIGZ1bmN0aW9uICgpIHtcbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoZWwpO1xuICB9LCB2bSwgY2IpO1xufVxuXG4vKipcbiAqIEluc2VydEJlZm9yZSB3aXRoIHRyYW5zaXRpb24uXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXRcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXVxuICovXG5cbmZ1bmN0aW9uIGJlZm9yZVdpdGhUcmFuc2l0aW9uKGVsLCB0YXJnZXQsIHZtLCBjYikge1xuICBhcHBseVRyYW5zaXRpb24oZWwsIDEsIGZ1bmN0aW9uICgpIHtcbiAgICBiZWZvcmUoZWwsIHRhcmdldCk7XG4gIH0sIHZtLCBjYik7XG59XG5cbi8qKlxuICogUmVtb3ZlIHdpdGggdHJhbnNpdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl1cbiAqL1xuXG5mdW5jdGlvbiByZW1vdmVXaXRoVHJhbnNpdGlvbihlbCwgdm0sIGNiKSB7XG4gIGFwcGx5VHJhbnNpdGlvbihlbCwgLTEsIGZ1bmN0aW9uICgpIHtcbiAgICByZW1vdmUoZWwpO1xuICB9LCB2bSwgY2IpO1xufVxuXG4vKipcbiAqIEFwcGx5IHRyYW5zaXRpb25zIHdpdGggYW4gb3BlcmF0aW9uIGNhbGxiYWNrLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7TnVtYmVyfSBkaXJlY3Rpb25cbiAqICAgICAgICAgICAgICAgICAgMTogZW50ZXJcbiAqICAgICAgICAgICAgICAgICAtMTogbGVhdmVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9wIC0gdGhlIGFjdHVhbCBET00gb3BlcmF0aW9uXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl1cbiAqL1xuXG5mdW5jdGlvbiBhcHBseVRyYW5zaXRpb24oZWwsIGRpcmVjdGlvbiwgb3AsIHZtLCBjYikge1xuICB2YXIgdHJhbnNpdGlvbiA9IGVsLl9fdl90cmFucztcbiAgaWYgKCF0cmFuc2l0aW9uIHx8XG4gIC8vIHNraXAgaWYgdGhlcmUgYXJlIG5vIGpzIGhvb2tzIGFuZCBDU1MgdHJhbnNpdGlvbiBpc1xuICAvLyBub3Qgc3VwcG9ydGVkXG4gICF0cmFuc2l0aW9uLmhvb2tzICYmICF0cmFuc2l0aW9uRW5kRXZlbnQgfHxcbiAgLy8gc2tpcCB0cmFuc2l0aW9ucyBmb3IgaW5pdGlhbCBjb21waWxlXG4gICF2bS5faXNDb21waWxlZCB8fFxuICAvLyBpZiB0aGUgdm0gaXMgYmVpbmcgbWFuaXB1bGF0ZWQgYnkgYSBwYXJlbnQgZGlyZWN0aXZlXG4gIC8vIGR1cmluZyB0aGUgcGFyZW50J3MgY29tcGlsYXRpb24gcGhhc2UsIHNraXAgdGhlXG4gIC8vIGFuaW1hdGlvbi5cbiAgdm0uJHBhcmVudCAmJiAhdm0uJHBhcmVudC5faXNDb21waWxlZCkge1xuICAgIG9wKCk7XG4gICAgaWYgKGNiKSBjYigpO1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgYWN0aW9uID0gZGlyZWN0aW9uID4gMCA/ICdlbnRlcicgOiAnbGVhdmUnO1xuICB0cmFuc2l0aW9uW2FjdGlvbl0ob3AsIGNiKTtcbn1cblxudmFyIHRyYW5zaXRpb24gPSBPYmplY3QuZnJlZXplKHtcbiAgYXBwZW5kV2l0aFRyYW5zaXRpb246IGFwcGVuZFdpdGhUcmFuc2l0aW9uLFxuICBiZWZvcmVXaXRoVHJhbnNpdGlvbjogYmVmb3JlV2l0aFRyYW5zaXRpb24sXG4gIHJlbW92ZVdpdGhUcmFuc2l0aW9uOiByZW1vdmVXaXRoVHJhbnNpdGlvbixcbiAgYXBwbHlUcmFuc2l0aW9uOiBhcHBseVRyYW5zaXRpb25cbn0pO1xuXG4vKipcbiAqIFF1ZXJ5IGFuIGVsZW1lbnQgc2VsZWN0b3IgaWYgaXQncyBub3QgYW4gZWxlbWVudCBhbHJlYWR5LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfEVsZW1lbnR9IGVsXG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICovXG5cbmZ1bmN0aW9uIHF1ZXJ5KGVsKSB7XG4gIGlmICh0eXBlb2YgZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIHNlbGVjdG9yID0gZWw7XG4gICAgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKTtcbiAgICBpZiAoIWVsKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oJ0Nhbm5vdCBmaW5kIGVsZW1lbnQ6ICcgKyBzZWxlY3Rvcik7XG4gICAgfVxuICB9XG4gIHJldHVybiBlbDtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIG5vZGUgaXMgaW4gdGhlIGRvY3VtZW50LlxuICogTm90ZTogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNvbnRhaW5zIHNob3VsZCB3b3JrIGhlcmVcbiAqIGJ1dCBhbHdheXMgcmV0dXJucyBmYWxzZSBmb3IgY29tbWVudCBub2RlcyBpbiBwaGFudG9tanMsXG4gKiBtYWtpbmcgdW5pdCB0ZXN0cyBkaWZmaWN1bHQuIFRoaXMgaXMgZml4ZWQgYnkgZG9pbmcgdGhlXG4gKiBjb250YWlucygpIGNoZWNrIG9uIHRoZSBub2RlJ3MgcGFyZW50Tm9kZSBpbnN0ZWFkIG9mXG4gKiB0aGUgbm9kZSBpdHNlbGYuXG4gKlxuICogQHBhcmFtIHtOb2RlfSBub2RlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbmZ1bmN0aW9uIGluRG9jKG5vZGUpIHtcbiAgaWYgKCFub2RlKSByZXR1cm4gZmFsc2U7XG4gIHZhciBkb2MgPSBub2RlLm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB2YXIgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlO1xuICByZXR1cm4gZG9jID09PSBub2RlIHx8IGRvYyA9PT0gcGFyZW50IHx8ICEhKHBhcmVudCAmJiBwYXJlbnQubm9kZVR5cGUgPT09IDEgJiYgZG9jLmNvbnRhaW5zKHBhcmVudCkpO1xufVxuXG4vKipcbiAqIEdldCBhbmQgcmVtb3ZlIGFuIGF0dHJpYnV0ZSBmcm9tIGEgbm9kZS5cbiAqXG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBfYXR0clxuICovXG5cbmZ1bmN0aW9uIGdldEF0dHIobm9kZSwgX2F0dHIpIHtcbiAgdmFyIHZhbCA9IG5vZGUuZ2V0QXR0cmlidXRlKF9hdHRyKTtcbiAgaWYgKHZhbCAhPT0gbnVsbCkge1xuICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKF9hdHRyKTtcbiAgfVxuICByZXR1cm4gdmFsO1xufVxuXG4vKipcbiAqIEdldCBhbiBhdHRyaWJ1dGUgd2l0aCBjb2xvbiBvciB2LWJpbmQ6IHByZWZpeC5cbiAqXG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJuIHtTdHJpbmd8bnVsbH1cbiAqL1xuXG5mdW5jdGlvbiBnZXRCaW5kQXR0cihub2RlLCBuYW1lKSB7XG4gIHZhciB2YWwgPSBnZXRBdHRyKG5vZGUsICc6JyArIG5hbWUpO1xuICBpZiAodmFsID09PSBudWxsKSB7XG4gICAgdmFsID0gZ2V0QXR0cihub2RlLCAndi1iaW5kOicgKyBuYW1lKTtcbiAgfVxuICByZXR1cm4gdmFsO1xufVxuXG4vKipcbiAqIENoZWNrIHRoZSBwcmVzZW5jZSBvZiBhIGJpbmQgYXR0cmlidXRlLlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuZnVuY3Rpb24gaGFzQmluZEF0dHIobm9kZSwgbmFtZSkge1xuICByZXR1cm4gbm9kZS5oYXNBdHRyaWJ1dGUobmFtZSkgfHwgbm9kZS5oYXNBdHRyaWJ1dGUoJzonICsgbmFtZSkgfHwgbm9kZS5oYXNBdHRyaWJ1dGUoJ3YtYmluZDonICsgbmFtZSk7XG59XG5cbi8qKlxuICogSW5zZXJ0IGVsIGJlZm9yZSB0YXJnZXRcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldFxuICovXG5cbmZ1bmN0aW9uIGJlZm9yZShlbCwgdGFyZ2V0KSB7XG4gIHRhcmdldC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbCwgdGFyZ2V0KTtcbn1cblxuLyoqXG4gKiBJbnNlcnQgZWwgYWZ0ZXIgdGFyZ2V0XG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXRcbiAqL1xuXG5mdW5jdGlvbiBhZnRlcihlbCwgdGFyZ2V0KSB7XG4gIGlmICh0YXJnZXQubmV4dFNpYmxpbmcpIHtcbiAgICBiZWZvcmUoZWwsIHRhcmdldC5uZXh0U2libGluZyk7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoZWwpO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlIGVsIGZyb20gRE9NXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICovXG5cbmZ1bmN0aW9uIHJlbW92ZShlbCkge1xuICBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKTtcbn1cblxuLyoqXG4gKiBQcmVwZW5kIGVsIHRvIHRhcmdldFxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0XG4gKi9cblxuZnVuY3Rpb24gcHJlcGVuZChlbCwgdGFyZ2V0KSB7XG4gIGlmICh0YXJnZXQuZmlyc3RDaGlsZCkge1xuICAgIGJlZm9yZShlbCwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldC5hcHBlbmRDaGlsZChlbCk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXBsYWNlIHRhcmdldCB3aXRoIGVsXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXRcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqL1xuXG5mdW5jdGlvbiByZXBsYWNlKHRhcmdldCwgZWwpIHtcbiAgdmFyIHBhcmVudCA9IHRhcmdldC5wYXJlbnROb2RlO1xuICBpZiAocGFyZW50KSB7XG4gICAgcGFyZW50LnJlcGxhY2VDaGlsZChlbCwgdGFyZ2V0KTtcbiAgfVxufVxuXG4vKipcbiAqIEFkZCBldmVudCBsaXN0ZW5lciBzaG9ydGhhbmQuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtCb29sZWFufSBbdXNlQ2FwdHVyZV1cbiAqL1xuXG5mdW5jdGlvbiBvbihlbCwgZXZlbnQsIGNiLCB1c2VDYXB0dXJlKSB7XG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNiLCB1c2VDYXB0dXJlKTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgZXZlbnQgbGlzdGVuZXIgc2hvcnRoYW5kLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqL1xuXG5mdW5jdGlvbiBvZmYoZWwsIGV2ZW50LCBjYikge1xuICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBjYik7XG59XG5cbi8qKlxuICogRm9yIElFOSBjb21wYXQ6IHdoZW4gYm90aCBjbGFzcyBhbmQgOmNsYXNzIGFyZSBwcmVzZW50XG4gKiBnZXRBdHRyaWJ1dGUoJ2NsYXNzJykgcmV0dXJucyB3cm9uZyB2YWx1ZS4uLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5mdW5jdGlvbiBnZXRDbGFzcyhlbCkge1xuICB2YXIgY2xhc3NuYW1lID0gZWwuY2xhc3NOYW1lO1xuICBpZiAodHlwZW9mIGNsYXNzbmFtZSA9PT0gJ29iamVjdCcpIHtcbiAgICBjbGFzc25hbWUgPSBjbGFzc25hbWUuYmFzZVZhbCB8fCAnJztcbiAgfVxuICByZXR1cm4gY2xhc3NuYW1lO1xufVxuXG4vKipcbiAqIEluIElFOSwgc2V0QXR0cmlidXRlKCdjbGFzcycpIHdpbGwgcmVzdWx0IGluIGVtcHR5IGNsYXNzXG4gKiBpZiB0aGUgZWxlbWVudCBhbHNvIGhhcyB0aGUgOmNsYXNzIGF0dHJpYnV0ZTsgSG93ZXZlciBpblxuICogUGhhbnRvbUpTLCBzZXR0aW5nIGBjbGFzc05hbWVgIGRvZXMgbm90IHdvcmsgb24gU1ZHIGVsZW1lbnRzLi4uXG4gKiBTbyB3ZSBoYXZlIHRvIGRvIGEgY29uZGl0aW9uYWwgY2hlY2sgaGVyZS5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xzXG4gKi9cblxuZnVuY3Rpb24gc2V0Q2xhc3MoZWwsIGNscykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKGlzSUU5ICYmICEvc3ZnJC8udGVzdChlbC5uYW1lc3BhY2VVUkkpKSB7XG4gICAgZWwuY2xhc3NOYW1lID0gY2xzO1xuICB9IGVsc2Uge1xuICAgIGVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjbHMpO1xuICB9XG59XG5cbi8qKlxuICogQWRkIGNsYXNzIHdpdGggY29tcGF0aWJpbGl0eSBmb3IgSUUgJiBTVkdcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xzXG4gKi9cblxuZnVuY3Rpb24gYWRkQ2xhc3MoZWwsIGNscykge1xuICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgZWwuY2xhc3NMaXN0LmFkZChjbHMpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjdXIgPSAnICcgKyBnZXRDbGFzcyhlbCkgKyAnICc7XG4gICAgaWYgKGN1ci5pbmRleE9mKCcgJyArIGNscyArICcgJykgPCAwKSB7XG4gICAgICBzZXRDbGFzcyhlbCwgKGN1ciArIGNscykudHJpbSgpKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmUgY2xhc3Mgd2l0aCBjb21wYXRpYmlsaXR5IGZvciBJRSAmIFNWR1xuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbHNcbiAqL1xuXG5mdW5jdGlvbiByZW1vdmVDbGFzcyhlbCwgY2xzKSB7XG4gIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNscyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGN1ciA9ICcgJyArIGdldENsYXNzKGVsKSArICcgJztcbiAgICB2YXIgdGFyID0gJyAnICsgY2xzICsgJyAnO1xuICAgIHdoaWxlIChjdXIuaW5kZXhPZih0YXIpID49IDApIHtcbiAgICAgIGN1ciA9IGN1ci5yZXBsYWNlKHRhciwgJyAnKTtcbiAgICB9XG4gICAgc2V0Q2xhc3MoZWwsIGN1ci50cmltKCkpO1xuICB9XG4gIGlmICghZWwuY2xhc3NOYW1lKSB7XG4gICAgZWwucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICB9XG59XG5cbi8qKlxuICogRXh0cmFjdCByYXcgY29udGVudCBpbnNpZGUgYW4gZWxlbWVudCBpbnRvIGEgdGVtcG9yYXJ5XG4gKiBjb250YWluZXIgZGl2XG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtCb29sZWFufSBhc0ZyYWdtZW50XG4gKiBAcmV0dXJuIHtFbGVtZW50fERvY3VtZW50RnJhZ21lbnR9XG4gKi9cblxuZnVuY3Rpb24gZXh0cmFjdENvbnRlbnQoZWwsIGFzRnJhZ21lbnQpIHtcbiAgdmFyIGNoaWxkO1xuICB2YXIgcmF3Q29udGVudDtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChpc1RlbXBsYXRlKGVsKSAmJiBpc0ZyYWdtZW50KGVsLmNvbnRlbnQpKSB7XG4gICAgZWwgPSBlbC5jb250ZW50O1xuICB9XG4gIGlmIChlbC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICB0cmltTm9kZShlbCk7XG4gICAgcmF3Q29udGVudCA9IGFzRnJhZ21lbnQgPyBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCkgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25kLWFzc2lnbiAqL1xuICAgIHdoaWxlIChjaGlsZCA9IGVsLmZpcnN0Q2hpbGQpIHtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uZC1hc3NpZ24gKi9cbiAgICAgIHJhd0NvbnRlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmF3Q29udGVudDtcbn1cblxuLyoqXG4gKiBUcmltIHBvc3NpYmxlIGVtcHR5IGhlYWQvdGFpbCB0ZXh0IGFuZCBjb21tZW50XG4gKiBub2RlcyBpbnNpZGUgYSBwYXJlbnQuXG4gKlxuICogQHBhcmFtIHtOb2RlfSBub2RlXG4gKi9cblxuZnVuY3Rpb24gdHJpbU5vZGUobm9kZSkge1xuICB2YXIgY2hpbGQ7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXNlcXVlbmNlcyAqL1xuICB3aGlsZSAoKGNoaWxkID0gbm9kZS5maXJzdENoaWxkLCBpc1RyaW1tYWJsZShjaGlsZCkpKSB7XG4gICAgbm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XG4gIH1cbiAgd2hpbGUgKChjaGlsZCA9IG5vZGUubGFzdENoaWxkLCBpc1RyaW1tYWJsZShjaGlsZCkpKSB7XG4gICAgbm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSBuby1zZXF1ZW5jZXMgKi9cbn1cblxuZnVuY3Rpb24gaXNUcmltbWFibGUobm9kZSkge1xuICByZXR1cm4gbm9kZSAmJiAobm9kZS5ub2RlVHlwZSA9PT0gMyAmJiAhbm9kZS5kYXRhLnRyaW0oKSB8fCBub2RlLm5vZGVUeXBlID09PSA4KTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhbiBlbGVtZW50IGlzIGEgdGVtcGxhdGUgdGFnLlxuICogTm90ZSBpZiB0aGUgdGVtcGxhdGUgYXBwZWFycyBpbnNpZGUgYW4gU1ZHIGl0cyB0YWdOYW1lXG4gKiB3aWxsIGJlIGluIGxvd2VyY2FzZS5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKi9cblxuZnVuY3Rpb24gaXNUZW1wbGF0ZShlbCkge1xuICByZXR1cm4gZWwudGFnTmFtZSAmJiBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICd0ZW1wbGF0ZSc7XG59XG5cbi8qKlxuICogQ3JlYXRlIGFuIFwiYW5jaG9yXCIgZm9yIHBlcmZvcm1pbmcgZG9tIGluc2VydGlvbi9yZW1vdmFscy5cbiAqIFRoaXMgaXMgdXNlZCBpbiBhIG51bWJlciBvZiBzY2VuYXJpb3M6XG4gKiAtIGZyYWdtZW50IGluc3RhbmNlXG4gKiAtIHYtaHRtbFxuICogLSB2LWlmXG4gKiAtIHYtZm9yXG4gKiAtIGNvbXBvbmVudFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb250ZW50XG4gKiBAcGFyYW0ge0Jvb2xlYW59IHBlcnNpc3QgLSBJRSB0cmFzaGVzIGVtcHR5IHRleHROb2RlcyBvblxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvbmVOb2RlKHRydWUpLCBzbyBpbiBjZXJ0YWluXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlcyB0aGUgYW5jaG9yIG5lZWRzIHRvIGJlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub24tZW1wdHkgdG8gYmUgcGVyc2lzdGVkIGluXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZXMuXG4gKiBAcmV0dXJuIHtDb21tZW50fFRleHR9XG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlQW5jaG9yKGNvbnRlbnQsIHBlcnNpc3QpIHtcbiAgdmFyIGFuY2hvciA9IGNvbmZpZy5kZWJ1ZyA/IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoY29udGVudCkgOiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwZXJzaXN0ID8gJyAnIDogJycpO1xuICBhbmNob3IuX192X2FuY2hvciA9IHRydWU7XG4gIHJldHVybiBhbmNob3I7XG59XG5cbi8qKlxuICogRmluZCBhIGNvbXBvbmVudCByZWYgYXR0cmlidXRlIHRoYXQgc3RhcnRzIHdpdGggJC5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGVcbiAqIEByZXR1cm4ge1N0cmluZ3x1bmRlZmluZWR9XG4gKi9cblxudmFyIHJlZlJFID0gL152LXJlZjovO1xuXG5mdW5jdGlvbiBmaW5kUmVmKG5vZGUpIHtcbiAgaWYgKG5vZGUuaGFzQXR0cmlidXRlcygpKSB7XG4gICAgdmFyIGF0dHJzID0gbm9kZS5hdHRyaWJ1dGVzO1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gYXR0cnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICB2YXIgbmFtZSA9IGF0dHJzW2ldLm5hbWU7XG4gICAgICBpZiAocmVmUkUudGVzdChuYW1lKSkge1xuICAgICAgICByZXR1cm4gY2FtZWxpemUobmFtZS5yZXBsYWNlKHJlZlJFLCAnJykpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIE1hcCBhIGZ1bmN0aW9uIHRvIGEgcmFuZ2Ugb2Ygbm9kZXMgLlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICogQHBhcmFtIHtOb2RlfSBlbmRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9wXG4gKi9cblxuZnVuY3Rpb24gbWFwTm9kZVJhbmdlKG5vZGUsIGVuZCwgb3ApIHtcbiAgdmFyIG5leHQ7XG4gIHdoaWxlIChub2RlICE9PSBlbmQpIHtcbiAgICBuZXh0ID0gbm9kZS5uZXh0U2libGluZztcbiAgICBvcChub2RlKTtcbiAgICBub2RlID0gbmV4dDtcbiAgfVxuICBvcChlbmQpO1xufVxuXG4vKipcbiAqIFJlbW92ZSBhIHJhbmdlIG9mIG5vZGVzIHdpdGggdHJhbnNpdGlvbiwgc3RvcmVcbiAqIHRoZSBub2RlcyBpbiBhIGZyYWdtZW50IHdpdGggY29ycmVjdCBvcmRlcmluZyxcbiAqIGFuZCBjYWxsIGNhbGxiYWNrIHdoZW4gZG9uZS5cbiAqXG4gKiBAcGFyYW0ge05vZGV9IHN0YXJ0XG4gKiBAcGFyYW0ge05vZGV9IGVuZFxuICogQHBhcmFtIHtWdWV9IHZtXG4gKiBAcGFyYW0ge0RvY3VtZW50RnJhZ21lbnR9IGZyYWdcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKi9cblxuZnVuY3Rpb24gcmVtb3ZlTm9kZVJhbmdlKHN0YXJ0LCBlbmQsIHZtLCBmcmFnLCBjYikge1xuICB2YXIgZG9uZSA9IGZhbHNlO1xuICB2YXIgcmVtb3ZlZCA9IDA7XG4gIHZhciBub2RlcyA9IFtdO1xuICBtYXBOb2RlUmFuZ2Uoc3RhcnQsIGVuZCwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICBpZiAobm9kZSA9PT0gZW5kKSBkb25lID0gdHJ1ZTtcbiAgICBub2Rlcy5wdXNoKG5vZGUpO1xuICAgIHJlbW92ZVdpdGhUcmFuc2l0aW9uKG5vZGUsIHZtLCBvblJlbW92ZWQpO1xuICB9KTtcbiAgZnVuY3Rpb24gb25SZW1vdmVkKCkge1xuICAgIHJlbW92ZWQrKztcbiAgICBpZiAoZG9uZSAmJiByZW1vdmVkID49IG5vZGVzLmxlbmd0aCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBmcmFnLmFwcGVuZENoaWxkKG5vZGVzW2ldKTtcbiAgICAgIH1cbiAgICAgIGNiICYmIGNiKCk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBub2RlIGlzIGEgRG9jdW1lbnRGcmFnbWVudC5cbiAqXG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuZnVuY3Rpb24gaXNGcmFnbWVudChub2RlKSB7XG4gIHJldHVybiBub2RlICYmIG5vZGUubm9kZVR5cGUgPT09IDExO1xufVxuXG4vKipcbiAqIEdldCBvdXRlckhUTUwgb2YgZWxlbWVudHMsIHRha2luZyBjYXJlXG4gKiBvZiBTVkcgZWxlbWVudHMgaW4gSUUgYXMgd2VsbC5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuZnVuY3Rpb24gZ2V0T3V0ZXJIVE1MKGVsKSB7XG4gIGlmIChlbC5vdXRlckhUTUwpIHtcbiAgICByZXR1cm4gZWwub3V0ZXJIVE1MO1xuICB9IGVsc2Uge1xuICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWwuY2xvbmVOb2RlKHRydWUpKTtcbiAgICByZXR1cm4gY29udGFpbmVyLmlubmVySFRNTDtcbiAgfVxufVxuXG52YXIgY29tbW9uVGFnUkUgPSAvXihkaXZ8cHxzcGFufGltZ3xhfGJ8aXxicnx1bHxvbHxsaXxoMXxoMnxoM3xoNHxoNXxoNnxjb2RlfHByZXx0YWJsZXx0aHx0ZHx0cnxmb3JtfGxhYmVsfGlucHV0fHNlbGVjdHxvcHRpb258bmF2fGFydGljbGV8c2VjdGlvbnxoZWFkZXJ8Zm9vdGVyKSQvaTtcbnZhciByZXNlcnZlZFRhZ1JFID0gL14oc2xvdHxwYXJ0aWFsfGNvbXBvbmVudCkkL2k7XG5cbnZhciBpc1Vua25vd25FbGVtZW50ID0gdW5kZWZpbmVkO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgaXNVbmtub3duRWxlbWVudCA9IGZ1bmN0aW9uIChlbCwgdGFnKSB7XG4gICAgaWYgKHRhZy5pbmRleE9mKCctJykgPiAtMSkge1xuICAgICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjgyMTAzNjQvMTA3MDI0NFxuICAgICAgcmV0dXJuIGVsLmNvbnN0cnVjdG9yID09PSB3aW5kb3cuSFRNTFVua25vd25FbGVtZW50IHx8IGVsLmNvbnN0cnVjdG9yID09PSB3aW5kb3cuSFRNTEVsZW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoL0hUTUxVbmtub3duRWxlbWVudC8udGVzdChlbC50b1N0cmluZygpKSAmJlxuICAgICAgICAvLyBDaHJvbWUgcmV0dXJucyB1bmtub3duIGZvciBzZXZlcmFsIEhUTUw1IGVsZW1lbnRzLlxuICAgICAgICAvLyBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NTQwNTI2XG4gICAgICAgIC8vIEZpcmVmb3ggcmV0dXJucyB1bmtub3duIGZvciBzb21lIFwiSW50ZXJhY3RpdmUgZWxlbWVudHMuXCJcbiAgICAgICAgIS9eKGRhdGF8dGltZXxydGN8cmJ8ZGV0YWlsc3xkaWFsb2d8c3VtbWFyeSkkLy50ZXN0KHRhZylcbiAgICAgICk7XG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGFuIGVsZW1lbnQgaXMgYSBjb21wb25lbnQsIGlmIHllcyByZXR1cm4gaXRzXG4gKiBjb21wb25lbnQgaWQuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge09iamVjdHx1bmRlZmluZWR9XG4gKi9cblxuZnVuY3Rpb24gY2hlY2tDb21wb25lbnRBdHRyKGVsLCBvcHRpb25zKSB7XG4gIHZhciB0YWcgPSBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gIHZhciBoYXNBdHRycyA9IGVsLmhhc0F0dHJpYnV0ZXMoKTtcbiAgaWYgKCFjb21tb25UYWdSRS50ZXN0KHRhZykgJiYgIXJlc2VydmVkVGFnUkUudGVzdCh0YWcpKSB7XG4gICAgaWYgKHJlc29sdmVBc3NldChvcHRpb25zLCAnY29tcG9uZW50cycsIHRhZykpIHtcbiAgICAgIHJldHVybiB7IGlkOiB0YWcgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGlzID0gaGFzQXR0cnMgJiYgZ2V0SXNCaW5kaW5nKGVsLCBvcHRpb25zKTtcbiAgICAgIGlmIChpcykge1xuICAgICAgICByZXR1cm4gaXM7XG4gICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdmFyIGV4cGVjdGVkVGFnID0gb3B0aW9ucy5fY29tcG9uZW50TmFtZU1hcCAmJiBvcHRpb25zLl9jb21wb25lbnROYW1lTWFwW3RhZ107XG4gICAgICAgIGlmIChleHBlY3RlZFRhZykge1xuICAgICAgICAgIHdhcm4oJ1Vua25vd24gY3VzdG9tIGVsZW1lbnQ6IDwnICsgdGFnICsgJz4gLSAnICsgJ2RpZCB5b3UgbWVhbiA8JyArIGV4cGVjdGVkVGFnICsgJz4/ICcgKyAnSFRNTCBpcyBjYXNlLWluc2Vuc2l0aXZlLCByZW1lbWJlciB0byB1c2Uga2ViYWItY2FzZSBpbiB0ZW1wbGF0ZXMuJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNVbmtub3duRWxlbWVudChlbCwgdGFnKSkge1xuICAgICAgICAgIHdhcm4oJ1Vua25vd24gY3VzdG9tIGVsZW1lbnQ6IDwnICsgdGFnICsgJz4gLSBkaWQgeW91ICcgKyAncmVnaXN0ZXIgdGhlIGNvbXBvbmVudCBjb3JyZWN0bHk/IEZvciByZWN1cnNpdmUgY29tcG9uZW50cywgJyArICdtYWtlIHN1cmUgdG8gcHJvdmlkZSB0aGUgXCJuYW1lXCIgb3B0aW9uLicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGhhc0F0dHJzKSB7XG4gICAgcmV0dXJuIGdldElzQmluZGluZyhlbCwgb3B0aW9ucyk7XG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgXCJpc1wiIGJpbmRpbmcgZnJvbSBhbiBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtPYmplY3R8dW5kZWZpbmVkfVxuICovXG5cbmZ1bmN0aW9uIGdldElzQmluZGluZyhlbCwgb3B0aW9ucykge1xuICAvLyBkeW5hbWljIHN5bnRheFxuICB2YXIgZXhwID0gZWwuZ2V0QXR0cmlidXRlKCdpcycpO1xuICBpZiAoZXhwICE9IG51bGwpIHtcbiAgICBpZiAocmVzb2x2ZUFzc2V0KG9wdGlvbnMsICdjb21wb25lbnRzJywgZXhwKSkge1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdpcycpO1xuICAgICAgcmV0dXJuIHsgaWQ6IGV4cCB9O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBleHAgPSBnZXRCaW5kQXR0cihlbCwgJ2lzJyk7XG4gICAgaWYgKGV4cCAhPSBudWxsKSB7XG4gICAgICByZXR1cm4geyBpZDogZXhwLCBkeW5hbWljOiB0cnVlIH07XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogT3B0aW9uIG92ZXJ3cml0aW5nIHN0cmF0ZWdpZXMgYXJlIGZ1bmN0aW9ucyB0aGF0IGhhbmRsZVxuICogaG93IHRvIG1lcmdlIGEgcGFyZW50IG9wdGlvbiB2YWx1ZSBhbmQgYSBjaGlsZCBvcHRpb25cbiAqIHZhbHVlIGludG8gdGhlIGZpbmFsIHZhbHVlLlxuICpcbiAqIEFsbCBzdHJhdGVneSBmdW5jdGlvbnMgZm9sbG93IHRoZSBzYW1lIHNpZ25hdHVyZTpcbiAqXG4gKiBAcGFyYW0geyp9IHBhcmVudFZhbFxuICogQHBhcmFtIHsqfSBjaGlsZFZhbFxuICogQHBhcmFtIHtWdWV9IFt2bV1cbiAqL1xuXG52YXIgc3RyYXRzID0gY29uZmlnLm9wdGlvbk1lcmdlU3RyYXRlZ2llcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbi8qKlxuICogSGVscGVyIHRoYXQgcmVjdXJzaXZlbHkgbWVyZ2VzIHR3byBkYXRhIG9iamVjdHMgdG9nZXRoZXIuXG4gKi9cblxuZnVuY3Rpb24gbWVyZ2VEYXRhKHRvLCBmcm9tKSB7XG4gIHZhciBrZXksIHRvVmFsLCBmcm9tVmFsO1xuICBmb3IgKGtleSBpbiBmcm9tKSB7XG4gICAgdG9WYWwgPSB0b1trZXldO1xuICAgIGZyb21WYWwgPSBmcm9tW2tleV07XG4gICAgaWYgKCFoYXNPd24odG8sIGtleSkpIHtcbiAgICAgIHNldCh0bywga2V5LCBmcm9tVmFsKTtcbiAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KHRvVmFsKSAmJiBpc09iamVjdChmcm9tVmFsKSkge1xuICAgICAgbWVyZ2VEYXRhKHRvVmFsLCBmcm9tVmFsKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRvO1xufVxuXG4vKipcbiAqIERhdGFcbiAqL1xuXG5zdHJhdHMuZGF0YSA9IGZ1bmN0aW9uIChwYXJlbnRWYWwsIGNoaWxkVmFsLCB2bSkge1xuICBpZiAoIXZtKSB7XG4gICAgLy8gaW4gYSBWdWUuZXh0ZW5kIG1lcmdlLCBib3RoIHNob3VsZCBiZSBmdW5jdGlvbnNcbiAgICBpZiAoIWNoaWxkVmFsKSB7XG4gICAgICByZXR1cm4gcGFyZW50VmFsO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGNoaWxkVmFsICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oJ1RoZSBcImRhdGFcIiBvcHRpb24gc2hvdWxkIGJlIGEgZnVuY3Rpb24gJyArICd0aGF0IHJldHVybnMgYSBwZXItaW5zdGFuY2UgdmFsdWUgaW4gY29tcG9uZW50ICcgKyAnZGVmaW5pdGlvbnMuJywgdm0pO1xuICAgICAgcmV0dXJuIHBhcmVudFZhbDtcbiAgICB9XG4gICAgaWYgKCFwYXJlbnRWYWwpIHtcbiAgICAgIHJldHVybiBjaGlsZFZhbDtcbiAgICB9XG4gICAgLy8gd2hlbiBwYXJlbnRWYWwgJiBjaGlsZFZhbCBhcmUgYm90aCBwcmVzZW50LFxuICAgIC8vIHdlIG5lZWQgdG8gcmV0dXJuIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZVxuICAgIC8vIG1lcmdlZCByZXN1bHQgb2YgYm90aCBmdW5jdGlvbnMuLi4gbm8gbmVlZCB0b1xuICAgIC8vIGNoZWNrIGlmIHBhcmVudFZhbCBpcyBhIGZ1bmN0aW9uIGhlcmUgYmVjYXVzZVxuICAgIC8vIGl0IGhhcyB0byBiZSBhIGZ1bmN0aW9uIHRvIHBhc3MgcHJldmlvdXMgbWVyZ2VzLlxuICAgIHJldHVybiBmdW5jdGlvbiBtZXJnZWREYXRhRm4oKSB7XG4gICAgICByZXR1cm4gbWVyZ2VEYXRhKGNoaWxkVmFsLmNhbGwodGhpcyksIHBhcmVudFZhbC5jYWxsKHRoaXMpKTtcbiAgICB9O1xuICB9IGVsc2UgaWYgKHBhcmVudFZhbCB8fCBjaGlsZFZhbCkge1xuICAgIHJldHVybiBmdW5jdGlvbiBtZXJnZWRJbnN0YW5jZURhdGFGbigpIHtcbiAgICAgIC8vIGluc3RhbmNlIG1lcmdlXG4gICAgICB2YXIgaW5zdGFuY2VEYXRhID0gdHlwZW9mIGNoaWxkVmFsID09PSAnZnVuY3Rpb24nID8gY2hpbGRWYWwuY2FsbCh2bSkgOiBjaGlsZFZhbDtcbiAgICAgIHZhciBkZWZhdWx0RGF0YSA9IHR5cGVvZiBwYXJlbnRWYWwgPT09ICdmdW5jdGlvbicgPyBwYXJlbnRWYWwuY2FsbCh2bSkgOiB1bmRlZmluZWQ7XG4gICAgICBpZiAoaW5zdGFuY2VEYXRhKSB7XG4gICAgICAgIHJldHVybiBtZXJnZURhdGEoaW5zdGFuY2VEYXRhLCBkZWZhdWx0RGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZGVmYXVsdERhdGE7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufTtcblxuLyoqXG4gKiBFbFxuICovXG5cbnN0cmF0cy5lbCA9IGZ1bmN0aW9uIChwYXJlbnRWYWwsIGNoaWxkVmFsLCB2bSkge1xuICBpZiAoIXZtICYmIGNoaWxkVmFsICYmIHR5cGVvZiBjaGlsZFZhbCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybignVGhlIFwiZWxcIiBvcHRpb24gc2hvdWxkIGJlIGEgZnVuY3Rpb24gJyArICd0aGF0IHJldHVybnMgYSBwZXItaW5zdGFuY2UgdmFsdWUgaW4gY29tcG9uZW50ICcgKyAnZGVmaW5pdGlvbnMuJywgdm0pO1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgcmV0ID0gY2hpbGRWYWwgfHwgcGFyZW50VmFsO1xuICAvLyBpbnZva2UgdGhlIGVsZW1lbnQgZmFjdG9yeSBpZiB0aGlzIGlzIGluc3RhbmNlIG1lcmdlXG4gIHJldHVybiB2bSAmJiB0eXBlb2YgcmV0ID09PSAnZnVuY3Rpb24nID8gcmV0LmNhbGwodm0pIDogcmV0O1xufTtcblxuLyoqXG4gKiBIb29rcyBhbmQgcGFyYW0gYXR0cmlidXRlcyBhcmUgbWVyZ2VkIGFzIGFycmF5cy5cbiAqL1xuXG5zdHJhdHMuaW5pdCA9IHN0cmF0cy5jcmVhdGVkID0gc3RyYXRzLnJlYWR5ID0gc3RyYXRzLmF0dGFjaGVkID0gc3RyYXRzLmRldGFjaGVkID0gc3RyYXRzLmJlZm9yZUNvbXBpbGUgPSBzdHJhdHMuY29tcGlsZWQgPSBzdHJhdHMuYmVmb3JlRGVzdHJveSA9IHN0cmF0cy5kZXN0cm95ZWQgPSBzdHJhdHMuYWN0aXZhdGUgPSBmdW5jdGlvbiAocGFyZW50VmFsLCBjaGlsZFZhbCkge1xuICByZXR1cm4gY2hpbGRWYWwgPyBwYXJlbnRWYWwgPyBwYXJlbnRWYWwuY29uY2F0KGNoaWxkVmFsKSA6IGlzQXJyYXkoY2hpbGRWYWwpID8gY2hpbGRWYWwgOiBbY2hpbGRWYWxdIDogcGFyZW50VmFsO1xufTtcblxuLyoqXG4gKiBBc3NldHNcbiAqXG4gKiBXaGVuIGEgdm0gaXMgcHJlc2VudCAoaW5zdGFuY2UgY3JlYXRpb24pLCB3ZSBuZWVkIHRvIGRvXG4gKiBhIHRocmVlLXdheSBtZXJnZSBiZXR3ZWVuIGNvbnN0cnVjdG9yIG9wdGlvbnMsIGluc3RhbmNlXG4gKiBvcHRpb25zIGFuZCBwYXJlbnQgb3B0aW9ucy5cbiAqL1xuXG5mdW5jdGlvbiBtZXJnZUFzc2V0cyhwYXJlbnRWYWwsIGNoaWxkVmFsKSB7XG4gIHZhciByZXMgPSBPYmplY3QuY3JlYXRlKHBhcmVudFZhbCB8fCBudWxsKTtcbiAgcmV0dXJuIGNoaWxkVmFsID8gZXh0ZW5kKHJlcywgZ3VhcmRBcnJheUFzc2V0cyhjaGlsZFZhbCkpIDogcmVzO1xufVxuXG5jb25maWcuX2Fzc2V0VHlwZXMuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICBzdHJhdHNbdHlwZSArICdzJ10gPSBtZXJnZUFzc2V0cztcbn0pO1xuXG4vKipcbiAqIEV2ZW50cyAmIFdhdGNoZXJzLlxuICpcbiAqIEV2ZW50cyAmIHdhdGNoZXJzIGhhc2hlcyBzaG91bGQgbm90IG92ZXJ3cml0ZSBvbmVcbiAqIGFub3RoZXIsIHNvIHdlIG1lcmdlIHRoZW0gYXMgYXJyYXlzLlxuICovXG5cbnN0cmF0cy53YXRjaCA9IHN0cmF0cy5ldmVudHMgPSBmdW5jdGlvbiAocGFyZW50VmFsLCBjaGlsZFZhbCkge1xuICBpZiAoIWNoaWxkVmFsKSByZXR1cm4gcGFyZW50VmFsO1xuICBpZiAoIXBhcmVudFZhbCkgcmV0dXJuIGNoaWxkVmFsO1xuICB2YXIgcmV0ID0ge307XG4gIGV4dGVuZChyZXQsIHBhcmVudFZhbCk7XG4gIGZvciAodmFyIGtleSBpbiBjaGlsZFZhbCkge1xuICAgIHZhciBwYXJlbnQgPSByZXRba2V5XTtcbiAgICB2YXIgY2hpbGQgPSBjaGlsZFZhbFtrZXldO1xuICAgIGlmIChwYXJlbnQgJiYgIWlzQXJyYXkocGFyZW50KSkge1xuICAgICAgcGFyZW50ID0gW3BhcmVudF07XG4gICAgfVxuICAgIHJldFtrZXldID0gcGFyZW50ID8gcGFyZW50LmNvbmNhdChjaGlsZCkgOiBbY2hpbGRdO1xuICB9XG4gIHJldHVybiByZXQ7XG59O1xuXG4vKipcbiAqIE90aGVyIG9iamVjdCBoYXNoZXMuXG4gKi9cblxuc3RyYXRzLnByb3BzID0gc3RyYXRzLm1ldGhvZHMgPSBzdHJhdHMuY29tcHV0ZWQgPSBmdW5jdGlvbiAocGFyZW50VmFsLCBjaGlsZFZhbCkge1xuICBpZiAoIWNoaWxkVmFsKSByZXR1cm4gcGFyZW50VmFsO1xuICBpZiAoIXBhcmVudFZhbCkgcmV0dXJuIGNoaWxkVmFsO1xuICB2YXIgcmV0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgZXh0ZW5kKHJldCwgcGFyZW50VmFsKTtcbiAgZXh0ZW5kKHJldCwgY2hpbGRWYWwpO1xuICByZXR1cm4gcmV0O1xufTtcblxuLyoqXG4gKiBEZWZhdWx0IHN0cmF0ZWd5LlxuICovXG5cbnZhciBkZWZhdWx0U3RyYXQgPSBmdW5jdGlvbiBkZWZhdWx0U3RyYXQocGFyZW50VmFsLCBjaGlsZFZhbCkge1xuICByZXR1cm4gY2hpbGRWYWwgPT09IHVuZGVmaW5lZCA/IHBhcmVudFZhbCA6IGNoaWxkVmFsO1xufTtcblxuLyoqXG4gKiBNYWtlIHN1cmUgY29tcG9uZW50IG9wdGlvbnMgZ2V0IGNvbnZlcnRlZCB0byBhY3R1YWxcbiAqIGNvbnN0cnVjdG9ycy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5cbmZ1bmN0aW9uIGd1YXJkQ29tcG9uZW50cyhvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zLmNvbXBvbmVudHMpIHtcbiAgICB2YXIgY29tcG9uZW50cyA9IG9wdGlvbnMuY29tcG9uZW50cyA9IGd1YXJkQXJyYXlBc3NldHMob3B0aW9ucy5jb21wb25lbnRzKTtcbiAgICB2YXIgaWRzID0gT2JqZWN0LmtleXMoY29tcG9uZW50cyk7XG4gICAgdmFyIGRlZjtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIG1hcCA9IG9wdGlvbnMuX2NvbXBvbmVudE5hbWVNYXAgPSB7fTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBpZHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0gaWRzW2ldO1xuICAgICAgaWYgKGNvbW1vblRhZ1JFLnRlc3Qoa2V5KSB8fCByZXNlcnZlZFRhZ1JFLnRlc3Qoa2V5KSkge1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oJ0RvIG5vdCB1c2UgYnVpbHQtaW4gb3IgcmVzZXJ2ZWQgSFRNTCBlbGVtZW50cyBhcyBjb21wb25lbnQgJyArICdpZDogJyArIGtleSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgLy8gcmVjb3JkIGEgYWxsIGxvd2VyY2FzZSA8LT4ga2ViYWItY2FzZSBtYXBwaW5nIGZvclxuICAgICAgLy8gcG9zc2libGUgY3VzdG9tIGVsZW1lbnQgY2FzZSBlcnJvciB3YXJuaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBtYXBba2V5LnJlcGxhY2UoLy0vZywgJycpLnRvTG93ZXJDYXNlKCldID0gaHlwaGVuYXRlKGtleSk7XG4gICAgICB9XG4gICAgICBkZWYgPSBjb21wb25lbnRzW2tleV07XG4gICAgICBpZiAoaXNQbGFpbk9iamVjdChkZWYpKSB7XG4gICAgICAgIGNvbXBvbmVudHNba2V5XSA9IFZ1ZS5leHRlbmQoZGVmKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBFbnN1cmUgYWxsIHByb3BzIG9wdGlvbiBzeW50YXggYXJlIG5vcm1hbGl6ZWQgaW50byB0aGVcbiAqIE9iamVjdC1iYXNlZCBmb3JtYXQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuXG5mdW5jdGlvbiBndWFyZFByb3BzKG9wdGlvbnMpIHtcbiAgdmFyIHByb3BzID0gb3B0aW9ucy5wcm9wcztcbiAgdmFyIGksIHZhbDtcbiAgaWYgKGlzQXJyYXkocHJvcHMpKSB7XG4gICAgb3B0aW9ucy5wcm9wcyA9IHt9O1xuICAgIGkgPSBwcm9wcy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdmFsID0gcHJvcHNbaV07XG4gICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgb3B0aW9ucy5wcm9wc1t2YWxdID0gbnVsbDtcbiAgICAgIH0gZWxzZSBpZiAodmFsLm5hbWUpIHtcbiAgICAgICAgb3B0aW9ucy5wcm9wc1t2YWwubmFtZV0gPSB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QocHJvcHMpKSB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhwcm9wcyk7XG4gICAgaSA9IGtleXMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHZhbCA9IHByb3BzW2tleXNbaV1dO1xuICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJvcHNba2V5c1tpXV0gPSB7IHR5cGU6IHZhbCB9O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEd1YXJkIGFuIEFycmF5LWZvcm1hdCBhc3NldHMgb3B0aW9uIGFuZCBjb252ZXJ0ZWQgaXRcbiAqIGludG8gdGhlIGtleS12YWx1ZSBPYmplY3QgZm9ybWF0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBhc3NldHNcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuXG5mdW5jdGlvbiBndWFyZEFycmF5QXNzZXRzKGFzc2V0cykge1xuICBpZiAoaXNBcnJheShhc3NldHMpKSB7XG4gICAgdmFyIHJlcyA9IHt9O1xuICAgIHZhciBpID0gYXNzZXRzLmxlbmd0aDtcbiAgICB2YXIgYXNzZXQ7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgYXNzZXQgPSBhc3NldHNbaV07XG4gICAgICB2YXIgaWQgPSB0eXBlb2YgYXNzZXQgPT09ICdmdW5jdGlvbicgPyBhc3NldC5vcHRpb25zICYmIGFzc2V0Lm9wdGlvbnMubmFtZSB8fCBhc3NldC5pZCA6IGFzc2V0Lm5hbWUgfHwgYXNzZXQuaWQ7XG4gICAgICBpZiAoIWlkKSB7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybignQXJyYXktc3ludGF4IGFzc2V0cyBtdXN0IHByb3ZpZGUgYSBcIm5hbWVcIiBvciBcImlkXCIgZmllbGQuJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNbaWRdID0gYXNzZXQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH1cbiAgcmV0dXJuIGFzc2V0cztcbn1cblxuLyoqXG4gKiBNZXJnZSB0d28gb3B0aW9uIG9iamVjdHMgaW50byBhIG5ldyBvbmUuXG4gKiBDb3JlIHV0aWxpdHkgdXNlZCBpbiBib3RoIGluc3RhbnRpYXRpb24gYW5kIGluaGVyaXRhbmNlLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJlbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBjaGlsZFxuICogQHBhcmFtIHtWdWV9IFt2bV0gLSBpZiB2bSBpcyBwcmVzZW50LCBpbmRpY2F0ZXMgdGhpcyBpc1xuICogICAgICAgICAgICAgICAgICAgICBhbiBpbnN0YW50aWF0aW9uIG1lcmdlLlxuICovXG5cbmZ1bmN0aW9uIG1lcmdlT3B0aW9ucyhwYXJlbnQsIGNoaWxkLCB2bSkge1xuICBndWFyZENvbXBvbmVudHMoY2hpbGQpO1xuICBndWFyZFByb3BzKGNoaWxkKTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoY2hpbGQucHJvcHNEYXRhICYmICF2bSkge1xuICAgICAgd2FybigncHJvcHNEYXRhIGNhbiBvbmx5IGJlIHVzZWQgYXMgYW4gaW5zdGFudGlhdGlvbiBvcHRpb24uJyk7XG4gICAgfVxuICB9XG4gIHZhciBvcHRpb25zID0ge307XG4gIHZhciBrZXk7XG4gIGlmIChjaGlsZFsnZXh0ZW5kcyddKSB7XG4gICAgcGFyZW50ID0gdHlwZW9mIGNoaWxkWydleHRlbmRzJ10gPT09ICdmdW5jdGlvbicgPyBtZXJnZU9wdGlvbnMocGFyZW50LCBjaGlsZFsnZXh0ZW5kcyddLm9wdGlvbnMsIHZtKSA6IG1lcmdlT3B0aW9ucyhwYXJlbnQsIGNoaWxkWydleHRlbmRzJ10sIHZtKTtcbiAgfVxuICBpZiAoY2hpbGQubWl4aW5zKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBjaGlsZC5taXhpbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICB2YXIgbWl4aW4gPSBjaGlsZC5taXhpbnNbaV07XG4gICAgICB2YXIgbWl4aW5PcHRpb25zID0gbWl4aW4ucHJvdG90eXBlIGluc3RhbmNlb2YgVnVlID8gbWl4aW4ub3B0aW9ucyA6IG1peGluO1xuICAgICAgcGFyZW50ID0gbWVyZ2VPcHRpb25zKHBhcmVudCwgbWl4aW5PcHRpb25zLCB2bSk7XG4gICAgfVxuICB9XG4gIGZvciAoa2V5IGluIHBhcmVudCkge1xuICAgIG1lcmdlRmllbGQoa2V5KTtcbiAgfVxuICBmb3IgKGtleSBpbiBjaGlsZCkge1xuICAgIGlmICghaGFzT3duKHBhcmVudCwga2V5KSkge1xuICAgICAgbWVyZ2VGaWVsZChrZXkpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBtZXJnZUZpZWxkKGtleSkge1xuICAgIHZhciBzdHJhdCA9IHN0cmF0c1trZXldIHx8IGRlZmF1bHRTdHJhdDtcbiAgICBvcHRpb25zW2tleV0gPSBzdHJhdChwYXJlbnRba2V5XSwgY2hpbGRba2V5XSwgdm0sIGtleSk7XG4gIH1cbiAgcmV0dXJuIG9wdGlvbnM7XG59XG5cbi8qKlxuICogUmVzb2x2ZSBhbiBhc3NldC5cbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCBiZWNhdXNlIGNoaWxkIGluc3RhbmNlcyBuZWVkIGFjY2Vzc1xuICogdG8gYXNzZXRzIGRlZmluZWQgaW4gaXRzIGFuY2VzdG9yIGNoYWluLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHdhcm5NaXNzaW5nXG4gKiBAcmV0dXJuIHtPYmplY3R8RnVuY3Rpb259XG4gKi9cblxuZnVuY3Rpb24gcmVzb2x2ZUFzc2V0KG9wdGlvbnMsIHR5cGUsIGlkLCB3YXJuTWlzc2luZykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKHR5cGVvZiBpZCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIGFzc2V0cyA9IG9wdGlvbnNbdHlwZV07XG4gIHZhciBjYW1lbGl6ZWRJZDtcbiAgdmFyIHJlcyA9IGFzc2V0c1tpZF0gfHxcbiAgLy8gY2FtZWxDYXNlIElEXG4gIGFzc2V0c1tjYW1lbGl6ZWRJZCA9IGNhbWVsaXplKGlkKV0gfHxcbiAgLy8gUGFzY2FsIENhc2UgSURcbiAgYXNzZXRzW2NhbWVsaXplZElkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgY2FtZWxpemVkSWQuc2xpY2UoMSldO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuTWlzc2luZyAmJiAhcmVzKSB7XG4gICAgd2FybignRmFpbGVkIHRvIHJlc29sdmUgJyArIHR5cGUuc2xpY2UoMCwgLTEpICsgJzogJyArIGlkLCBvcHRpb25zKTtcbiAgfVxuICByZXR1cm4gcmVzO1xufVxuXG52YXIgdWlkJDEgPSAwO1xuXG4vKipcbiAqIEEgZGVwIGlzIGFuIG9ic2VydmFibGUgdGhhdCBjYW4gaGF2ZSBtdWx0aXBsZVxuICogZGlyZWN0aXZlcyBzdWJzY3JpYmluZyB0byBpdC5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gRGVwKCkge1xuICB0aGlzLmlkID0gdWlkJDErKztcbiAgdGhpcy5zdWJzID0gW107XG59XG5cbi8vIHRoZSBjdXJyZW50IHRhcmdldCB3YXRjaGVyIGJlaW5nIGV2YWx1YXRlZC5cbi8vIHRoaXMgaXMgZ2xvYmFsbHkgdW5pcXVlIGJlY2F1c2UgdGhlcmUgY291bGQgYmUgb25seSBvbmVcbi8vIHdhdGNoZXIgYmVpbmcgZXZhbHVhdGVkIGF0IGFueSB0aW1lLlxuRGVwLnRhcmdldCA9IG51bGw7XG5cbi8qKlxuICogQWRkIGEgZGlyZWN0aXZlIHN1YnNjcmliZXIuXG4gKlxuICogQHBhcmFtIHtEaXJlY3RpdmV9IHN1YlxuICovXG5cbkRlcC5wcm90b3R5cGUuYWRkU3ViID0gZnVuY3Rpb24gKHN1Yikge1xuICB0aGlzLnN1YnMucHVzaChzdWIpO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYSBkaXJlY3RpdmUgc3Vic2NyaWJlci5cbiAqXG4gKiBAcGFyYW0ge0RpcmVjdGl2ZX0gc3ViXG4gKi9cblxuRGVwLnByb3RvdHlwZS5yZW1vdmVTdWIgPSBmdW5jdGlvbiAoc3ViKSB7XG4gIHRoaXMuc3Vicy4kcmVtb3ZlKHN1Yik7XG59O1xuXG4vKipcbiAqIEFkZCBzZWxmIGFzIGEgZGVwZW5kZW5jeSB0byB0aGUgdGFyZ2V0IHdhdGNoZXIuXG4gKi9cblxuRGVwLnByb3RvdHlwZS5kZXBlbmQgPSBmdW5jdGlvbiAoKSB7XG4gIERlcC50YXJnZXQuYWRkRGVwKHRoaXMpO1xufTtcblxuLyoqXG4gKiBOb3RpZnkgYWxsIHN1YnNjcmliZXJzIG9mIGEgbmV3IHZhbHVlLlxuICovXG5cbkRlcC5wcm90b3R5cGUubm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAvLyBzdGFibGl6ZSB0aGUgc3Vic2NyaWJlciBsaXN0IGZpcnN0XG4gIHZhciBzdWJzID0gdG9BcnJheSh0aGlzLnN1YnMpO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHN1YnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgc3Vic1tpXS51cGRhdGUoKTtcbiAgfVxufTtcblxudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG52YXIgYXJyYXlNZXRob2RzID0gT2JqZWN0LmNyZWF0ZShhcnJheVByb3RvKVxuXG4vKipcbiAqIEludGVyY2VwdCBtdXRhdGluZyBtZXRob2RzIGFuZCBlbWl0IGV2ZW50c1xuICovXG5cbjtbJ3B1c2gnLCAncG9wJywgJ3NoaWZ0JywgJ3Vuc2hpZnQnLCAnc3BsaWNlJywgJ3NvcnQnLCAncmV2ZXJzZSddLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAvLyBjYWNoZSBvcmlnaW5hbCBtZXRob2RcbiAgdmFyIG9yaWdpbmFsID0gYXJyYXlQcm90b1ttZXRob2RdO1xuICBkZWYoYXJyYXlNZXRob2RzLCBtZXRob2QsIGZ1bmN0aW9uIG11dGF0b3IoKSB7XG4gICAgLy8gYXZvaWQgbGVha2luZyBhcmd1bWVudHM6XG4gICAgLy8gaHR0cDovL2pzcGVyZi5jb20vY2xvc3VyZS13aXRoLWFyZ3VtZW50c1xuICAgIHZhciBpID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShpKTtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gb3JpZ2luYWwuYXBwbHkodGhpcywgYXJncyk7XG4gICAgdmFyIG9iID0gdGhpcy5fX29iX187XG4gICAgdmFyIGluc2VydGVkO1xuICAgIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgICBjYXNlICdwdXNoJzpcbiAgICAgICAgaW5zZXJ0ZWQgPSBhcmdzO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3Vuc2hpZnQnOlxuICAgICAgICBpbnNlcnRlZCA9IGFyZ3M7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc3BsaWNlJzpcbiAgICAgICAgaW5zZXJ0ZWQgPSBhcmdzLnNsaWNlKDIpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKGluc2VydGVkKSBvYi5vYnNlcnZlQXJyYXkoaW5zZXJ0ZWQpO1xuICAgIC8vIG5vdGlmeSBjaGFuZ2VcbiAgICBvYi5kZXAubm90aWZ5KCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSk7XG59KTtcblxuLyoqXG4gKiBTd2FwIHRoZSBlbGVtZW50IGF0IHRoZSBnaXZlbiBpbmRleCB3aXRoIGEgbmV3IHZhbHVlXG4gKiBhbmQgZW1pdHMgY29ycmVzcG9uZGluZyBldmVudC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcmV0dXJuIHsqfSAtIHJlcGxhY2VkIGVsZW1lbnRcbiAqL1xuXG5kZWYoYXJyYXlQcm90bywgJyRzZXQnLCBmdW5jdGlvbiAkc2V0KGluZGV4LCB2YWwpIHtcbiAgaWYgKGluZGV4ID49IHRoaXMubGVuZ3RoKSB7XG4gICAgdGhpcy5sZW5ndGggPSBOdW1iZXIoaW5kZXgpICsgMTtcbiAgfVxuICByZXR1cm4gdGhpcy5zcGxpY2UoaW5kZXgsIDEsIHZhbClbMF07XG59KTtcblxuLyoqXG4gKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gcmVtb3ZlIHRoZSBlbGVtZW50IGF0IGdpdmVuIGluZGV4IG9yIHRhcmdldCBlbGVtZW50IHJlZmVyZW5jZS5cbiAqXG4gKiBAcGFyYW0geyp9IGl0ZW1cbiAqL1xuXG5kZWYoYXJyYXlQcm90bywgJyRyZW1vdmUnLCBmdW5jdGlvbiAkcmVtb3ZlKGl0ZW0pIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICghdGhpcy5sZW5ndGgpIHJldHVybjtcbiAgdmFyIGluZGV4ID0gaW5kZXhPZih0aGlzLCBpdGVtKTtcbiAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICByZXR1cm4gdGhpcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG59KTtcblxudmFyIGFycmF5S2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGFycmF5TWV0aG9kcyk7XG5cbi8qKlxuICogQnkgZGVmYXVsdCwgd2hlbiBhIHJlYWN0aXZlIHByb3BlcnR5IGlzIHNldCwgdGhlIG5ldyB2YWx1ZSBpc1xuICogYWxzbyBjb252ZXJ0ZWQgdG8gYmVjb21lIHJlYWN0aXZlLiBIb3dldmVyIGluIGNlcnRhaW4gY2FzZXMsIGUuZy5cbiAqIHYtZm9yIHNjb3BlIGFsaWFzIGFuZCBwcm9wcywgd2UgZG9uJ3Qgd2FudCB0byBmb3JjZSBjb252ZXJzaW9uXG4gKiBiZWNhdXNlIHRoZSB2YWx1ZSBtYXkgYmUgYSBuZXN0ZWQgdmFsdWUgdW5kZXIgYSBmcm96ZW4gZGF0YSBzdHJ1Y3R1cmUuXG4gKlxuICogU28gd2hlbmV2ZXIgd2Ugd2FudCB0byBzZXQgYSByZWFjdGl2ZSBwcm9wZXJ0eSB3aXRob3V0IGZvcmNpbmdcbiAqIGNvbnZlcnNpb24gb24gdGhlIG5ldyB2YWx1ZSwgd2Ugd3JhcCB0aGF0IGNhbGwgaW5zaWRlIHRoaXMgZnVuY3Rpb24uXG4gKi9cblxudmFyIHNob3VsZENvbnZlcnQgPSB0cnVlO1xuXG5mdW5jdGlvbiB3aXRob3V0Q29udmVyc2lvbihmbikge1xuICBzaG91bGRDb252ZXJ0ID0gZmFsc2U7XG4gIGZuKCk7XG4gIHNob3VsZENvbnZlcnQgPSB0cnVlO1xufVxuXG4vKipcbiAqIE9ic2VydmVyIGNsYXNzIHRoYXQgYXJlIGF0dGFjaGVkIHRvIGVhY2ggb2JzZXJ2ZWRcbiAqIG9iamVjdC4gT25jZSBhdHRhY2hlZCwgdGhlIG9ic2VydmVyIGNvbnZlcnRzIHRhcmdldFxuICogb2JqZWN0J3MgcHJvcGVydHkga2V5cyBpbnRvIGdldHRlci9zZXR0ZXJzIHRoYXRcbiAqIGNvbGxlY3QgZGVwZW5kZW5jaWVzIGFuZCBkaXNwYXRjaGVzIHVwZGF0ZXMuXG4gKlxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IHZhbHVlXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuXG5mdW5jdGlvbiBPYnNlcnZlcih2YWx1ZSkge1xuICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIHRoaXMuZGVwID0gbmV3IERlcCgpO1xuICBkZWYodmFsdWUsICdfX29iX18nLCB0aGlzKTtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgdmFyIGF1Z21lbnQgPSBoYXNQcm90byA/IHByb3RvQXVnbWVudCA6IGNvcHlBdWdtZW50O1xuICAgIGF1Z21lbnQodmFsdWUsIGFycmF5TWV0aG9kcywgYXJyYXlLZXlzKTtcbiAgICB0aGlzLm9ic2VydmVBcnJheSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy53YWxrKHZhbHVlKTtcbiAgfVxufVxuXG4vLyBJbnN0YW5jZSBtZXRob2RzXG5cbi8qKlxuICogV2FsayB0aHJvdWdoIGVhY2ggcHJvcGVydHkgYW5kIGNvbnZlcnQgdGhlbSBpbnRvXG4gKiBnZXR0ZXIvc2V0dGVycy4gVGhpcyBtZXRob2Qgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIHdoZW5cbiAqIHZhbHVlIHR5cGUgaXMgT2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqL1xuXG5PYnNlcnZlci5wcm90b3R5cGUud2FsayA9IGZ1bmN0aW9uIChvYmopIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdGhpcy5jb252ZXJ0KGtleXNbaV0sIG9ialtrZXlzW2ldXSk7XG4gIH1cbn07XG5cbi8qKlxuICogT2JzZXJ2ZSBhIGxpc3Qgb2YgQXJyYXkgaXRlbXMuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gaXRlbXNcbiAqL1xuXG5PYnNlcnZlci5wcm90b3R5cGUub2JzZXJ2ZUFycmF5ID0gZnVuY3Rpb24gKGl0ZW1zKSB7XG4gIGZvciAodmFyIGkgPSAwLCBsID0gaXRlbXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgb2JzZXJ2ZShpdGVtc1tpXSk7XG4gIH1cbn07XG5cbi8qKlxuICogQ29udmVydCBhIHByb3BlcnR5IGludG8gZ2V0dGVyL3NldHRlciBzbyB3ZSBjYW4gZW1pdFxuICogdGhlIGV2ZW50cyB3aGVuIHRoZSBwcm9wZXJ0eSBpcyBhY2Nlc3NlZC9jaGFuZ2VkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKi9cblxuT2JzZXJ2ZXIucHJvdG90eXBlLmNvbnZlcnQgPSBmdW5jdGlvbiAoa2V5LCB2YWwpIHtcbiAgZGVmaW5lUmVhY3RpdmUodGhpcy52YWx1ZSwga2V5LCB2YWwpO1xufTtcblxuLyoqXG4gKiBBZGQgYW4gb3duZXIgdm0sIHNvIHRoYXQgd2hlbiAkc2V0LyRkZWxldGUgbXV0YXRpb25zXG4gKiBoYXBwZW4gd2UgY2FuIG5vdGlmeSBvd25lciB2bXMgdG8gcHJveHkgdGhlIGtleXMgYW5kXG4gKiBkaWdlc3QgdGhlIHdhdGNoZXJzLiBUaGlzIGlzIG9ubHkgY2FsbGVkIHdoZW4gdGhlIG9iamVjdFxuICogaXMgb2JzZXJ2ZWQgYXMgYW4gaW5zdGFuY2UncyByb290ICRkYXRhLlxuICpcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICovXG5cbk9ic2VydmVyLnByb3RvdHlwZS5hZGRWbSA9IGZ1bmN0aW9uICh2bSkge1xuICAodGhpcy52bXMgfHwgKHRoaXMudm1zID0gW10pKS5wdXNoKHZtKTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFuIG93bmVyIHZtLiBUaGlzIGlzIGNhbGxlZCB3aGVuIHRoZSBvYmplY3QgaXNcbiAqIHN3YXBwZWQgb3V0IGFzIGFuIGluc3RhbmNlJ3MgJGRhdGEgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICovXG5cbk9ic2VydmVyLnByb3RvdHlwZS5yZW1vdmVWbSA9IGZ1bmN0aW9uICh2bSkge1xuICB0aGlzLnZtcy4kcmVtb3ZlKHZtKTtcbn07XG5cbi8vIGhlbHBlcnNcblxuLyoqXG4gKiBBdWdtZW50IGFuIHRhcmdldCBPYmplY3Qgb3IgQXJyYXkgYnkgaW50ZXJjZXB0aW5nXG4gKiB0aGUgcHJvdG90eXBlIGNoYWluIHVzaW5nIF9fcHJvdG9fX1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSB0YXJnZXRcbiAqIEBwYXJhbSB7T2JqZWN0fSBzcmNcbiAqL1xuXG5mdW5jdGlvbiBwcm90b0F1Z21lbnQodGFyZ2V0LCBzcmMpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbiAgdGFyZ2V0Ll9fcHJvdG9fXyA9IHNyYztcbiAgLyogZXNsaW50LWVuYWJsZSBuby1wcm90byAqL1xufVxuXG4vKipcbiAqIEF1Z21lbnQgYW4gdGFyZ2V0IE9iamVjdCBvciBBcnJheSBieSBkZWZpbmluZ1xuICogaGlkZGVuIHByb3BlcnRpZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IHRhcmdldFxuICogQHBhcmFtIHtPYmplY3R9IHByb3RvXG4gKi9cblxuZnVuY3Rpb24gY29weUF1Z21lbnQodGFyZ2V0LCBzcmMsIGtleXMpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGRlZih0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xuICB9XG59XG5cbi8qKlxuICogQXR0ZW1wdCB0byBjcmVhdGUgYW4gb2JzZXJ2ZXIgaW5zdGFuY2UgZm9yIGEgdmFsdWUsXG4gKiByZXR1cm5zIHRoZSBuZXcgb2JzZXJ2ZXIgaWYgc3VjY2Vzc2Z1bGx5IG9ic2VydmVkLFxuICogb3IgdGhlIGV4aXN0aW5nIG9ic2VydmVyIGlmIHRoZSB2YWx1ZSBhbHJlYWR5IGhhcyBvbmUuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHBhcmFtIHtWdWV9IFt2bV1cbiAqIEByZXR1cm4ge09ic2VydmVyfHVuZGVmaW5lZH1cbiAqIEBzdGF0aWNcbiAqL1xuXG5mdW5jdGlvbiBvYnNlcnZlKHZhbHVlLCB2bSkge1xuICBpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG9iO1xuICBpZiAoaGFzT3duKHZhbHVlLCAnX19vYl9fJykgJiYgdmFsdWUuX19vYl9fIGluc3RhbmNlb2YgT2JzZXJ2ZXIpIHtcbiAgICBvYiA9IHZhbHVlLl9fb2JfXztcbiAgfSBlbHNlIGlmIChzaG91bGRDb252ZXJ0ICYmIChpc0FycmF5KHZhbHVlKSB8fCBpc1BsYWluT2JqZWN0KHZhbHVlKSkgJiYgT2JqZWN0LmlzRXh0ZW5zaWJsZSh2YWx1ZSkgJiYgIXZhbHVlLl9pc1Z1ZSkge1xuICAgIG9iID0gbmV3IE9ic2VydmVyKHZhbHVlKTtcbiAgfVxuICBpZiAob2IgJiYgdm0pIHtcbiAgICBvYi5hZGRWbSh2bSk7XG4gIH1cbiAgcmV0dXJuIG9iO1xufVxuXG4vKipcbiAqIERlZmluZSBhIHJlYWN0aXZlIHByb3BlcnR5IG9uIGFuIE9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0geyp9IHZhbFxuICovXG5cbmZ1bmN0aW9uIGRlZmluZVJlYWN0aXZlKG9iaiwga2V5LCB2YWwpIHtcbiAgdmFyIGRlcCA9IG5ldyBEZXAoKTtcblxuICB2YXIgcHJvcGVydHkgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KTtcbiAgaWYgKHByb3BlcnR5ICYmIHByb3BlcnR5LmNvbmZpZ3VyYWJsZSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBjYXRlciBmb3IgcHJlLWRlZmluZWQgZ2V0dGVyL3NldHRlcnNcbiAgdmFyIGdldHRlciA9IHByb3BlcnR5ICYmIHByb3BlcnR5LmdldDtcbiAgdmFyIHNldHRlciA9IHByb3BlcnR5ICYmIHByb3BlcnR5LnNldDtcblxuICB2YXIgY2hpbGRPYiA9IG9ic2VydmUodmFsKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiByZWFjdGl2ZUdldHRlcigpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGdldHRlciA/IGdldHRlci5jYWxsKG9iaikgOiB2YWw7XG4gICAgICBpZiAoRGVwLnRhcmdldCkge1xuICAgICAgICBkZXAuZGVwZW5kKCk7XG4gICAgICAgIGlmIChjaGlsZE9iKSB7XG4gICAgICAgICAgY2hpbGRPYi5kZXAuZGVwZW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgZm9yICh2YXIgZSwgaSA9IDAsIGwgPSB2YWx1ZS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGUgPSB2YWx1ZVtpXTtcbiAgICAgICAgICAgIGUgJiYgZS5fX29iX18gJiYgZS5fX29iX18uZGVwLmRlcGVuZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiByZWFjdGl2ZVNldHRlcihuZXdWYWwpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGdldHRlciA/IGdldHRlci5jYWxsKG9iaikgOiB2YWw7XG4gICAgICBpZiAobmV3VmFsID09PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoc2V0dGVyKSB7XG4gICAgICAgIHNldHRlci5jYWxsKG9iaiwgbmV3VmFsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbCA9IG5ld1ZhbDtcbiAgICAgIH1cbiAgICAgIGNoaWxkT2IgPSBvYnNlcnZlKG5ld1ZhbCk7XG4gICAgICBkZXAubm90aWZ5KCk7XG4gICAgfVxuICB9KTtcbn1cblxuXG5cbnZhciB1dGlsID0gT2JqZWN0LmZyZWV6ZSh7XG5cdGRlZmluZVJlYWN0aXZlOiBkZWZpbmVSZWFjdGl2ZSxcblx0c2V0OiBzZXQsXG5cdGRlbDogZGVsLFxuXHRoYXNPd246IGhhc093bixcblx0aXNMaXRlcmFsOiBpc0xpdGVyYWwsXG5cdGlzUmVzZXJ2ZWQ6IGlzUmVzZXJ2ZWQsXG5cdF90b1N0cmluZzogX3RvU3RyaW5nLFxuXHR0b051bWJlcjogdG9OdW1iZXIsXG5cdHRvQm9vbGVhbjogdG9Cb29sZWFuLFxuXHRzdHJpcFF1b3Rlczogc3RyaXBRdW90ZXMsXG5cdGNhbWVsaXplOiBjYW1lbGl6ZSxcblx0aHlwaGVuYXRlOiBoeXBoZW5hdGUsXG5cdGNsYXNzaWZ5OiBjbGFzc2lmeSxcblx0YmluZDogYmluZCxcblx0dG9BcnJheTogdG9BcnJheSxcblx0ZXh0ZW5kOiBleHRlbmQsXG5cdGlzT2JqZWN0OiBpc09iamVjdCxcblx0aXNQbGFpbk9iamVjdDogaXNQbGFpbk9iamVjdCxcblx0ZGVmOiBkZWYsXG5cdGRlYm91bmNlOiBfZGVib3VuY2UsXG5cdGluZGV4T2Y6IGluZGV4T2YsXG5cdGNhbmNlbGxhYmxlOiBjYW5jZWxsYWJsZSxcblx0bG9vc2VFcXVhbDogbG9vc2VFcXVhbCxcblx0aXNBcnJheTogaXNBcnJheSxcblx0aGFzUHJvdG86IGhhc1Byb3RvLFxuXHRpbkJyb3dzZXI6IGluQnJvd3Nlcixcblx0ZGV2dG9vbHM6IGRldnRvb2xzLFxuXHRpc0lFOiBpc0lFLFxuXHRpc0lFOTogaXNJRTksXG5cdGlzQW5kcm9pZDogaXNBbmRyb2lkLFxuXHRpc0lvczogaXNJb3MsXG5cdGlvc1ZlcnNpb25NYXRjaDogaW9zVmVyc2lvbk1hdGNoLFxuXHRpb3NWZXJzaW9uOiBpb3NWZXJzaW9uLFxuXHRoYXNNdXRhdGlvbk9ic2VydmVyQnVnOiBoYXNNdXRhdGlvbk9ic2VydmVyQnVnLFxuXHRnZXQgdHJhbnNpdGlvblByb3AgKCkgeyByZXR1cm4gdHJhbnNpdGlvblByb3A7IH0sXG5cdGdldCB0cmFuc2l0aW9uRW5kRXZlbnQgKCkgeyByZXR1cm4gdHJhbnNpdGlvbkVuZEV2ZW50OyB9LFxuXHRnZXQgYW5pbWF0aW9uUHJvcCAoKSB7IHJldHVybiBhbmltYXRpb25Qcm9wOyB9LFxuXHRnZXQgYW5pbWF0aW9uRW5kRXZlbnQgKCkgeyByZXR1cm4gYW5pbWF0aW9uRW5kRXZlbnQ7IH0sXG5cdG5leHRUaWNrOiBuZXh0VGljayxcblx0Z2V0IF9TZXQgKCkgeyByZXR1cm4gX1NldDsgfSxcblx0cXVlcnk6IHF1ZXJ5LFxuXHRpbkRvYzogaW5Eb2MsXG5cdGdldEF0dHI6IGdldEF0dHIsXG5cdGdldEJpbmRBdHRyOiBnZXRCaW5kQXR0cixcblx0aGFzQmluZEF0dHI6IGhhc0JpbmRBdHRyLFxuXHRiZWZvcmU6IGJlZm9yZSxcblx0YWZ0ZXI6IGFmdGVyLFxuXHRyZW1vdmU6IHJlbW92ZSxcblx0cHJlcGVuZDogcHJlcGVuZCxcblx0cmVwbGFjZTogcmVwbGFjZSxcblx0b246IG9uLFxuXHRvZmY6IG9mZixcblx0c2V0Q2xhc3M6IHNldENsYXNzLFxuXHRhZGRDbGFzczogYWRkQ2xhc3MsXG5cdHJlbW92ZUNsYXNzOiByZW1vdmVDbGFzcyxcblx0ZXh0cmFjdENvbnRlbnQ6IGV4dHJhY3RDb250ZW50LFxuXHR0cmltTm9kZTogdHJpbU5vZGUsXG5cdGlzVGVtcGxhdGU6IGlzVGVtcGxhdGUsXG5cdGNyZWF0ZUFuY2hvcjogY3JlYXRlQW5jaG9yLFxuXHRmaW5kUmVmOiBmaW5kUmVmLFxuXHRtYXBOb2RlUmFuZ2U6IG1hcE5vZGVSYW5nZSxcblx0cmVtb3ZlTm9kZVJhbmdlOiByZW1vdmVOb2RlUmFuZ2UsXG5cdGlzRnJhZ21lbnQ6IGlzRnJhZ21lbnQsXG5cdGdldE91dGVySFRNTDogZ2V0T3V0ZXJIVE1MLFxuXHRtZXJnZU9wdGlvbnM6IG1lcmdlT3B0aW9ucyxcblx0cmVzb2x2ZUFzc2V0OiByZXNvbHZlQXNzZXQsXG5cdGNoZWNrQ29tcG9uZW50QXR0cjogY2hlY2tDb21wb25lbnRBdHRyLFxuXHRjb21tb25UYWdSRTogY29tbW9uVGFnUkUsXG5cdHJlc2VydmVkVGFnUkU6IHJlc2VydmVkVGFnUkUsXG5cdGdldCB3YXJuICgpIHsgcmV0dXJuIHdhcm47IH1cbn0pO1xuXG52YXIgdWlkID0gMDtcblxuZnVuY3Rpb24gaW5pdE1peGluIChWdWUpIHtcbiAgLyoqXG4gICAqIFRoZSBtYWluIGluaXQgc2VxdWVuY2UuIFRoaXMgaXMgY2FsbGVkIGZvciBldmVyeVxuICAgKiBpbnN0YW5jZSwgaW5jbHVkaW5nIG9uZXMgdGhhdCBhcmUgY3JlYXRlZCBmcm9tIGV4dGVuZGVkXG4gICAqIGNvbnN0cnVjdG9ycy5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSB0aGlzIG9wdGlvbnMgb2JqZWN0IHNob3VsZCBiZVxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSByZXN1bHQgb2YgbWVyZ2luZyBjbGFzc1xuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMgYW5kIHRoZSBvcHRpb25zIHBhc3NlZFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgIGluIHRvIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICovXG5cbiAgVnVlLnByb3RvdHlwZS5faW5pdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICB0aGlzLiRlbCA9IG51bGw7XG4gICAgdGhpcy4kcGFyZW50ID0gb3B0aW9ucy5wYXJlbnQ7XG4gICAgdGhpcy4kcm9vdCA9IHRoaXMuJHBhcmVudCA/IHRoaXMuJHBhcmVudC4kcm9vdCA6IHRoaXM7XG4gICAgdGhpcy4kY2hpbGRyZW4gPSBbXTtcbiAgICB0aGlzLiRyZWZzID0ge307IC8vIGNoaWxkIHZtIHJlZmVyZW5jZXNcbiAgICB0aGlzLiRlbHMgPSB7fTsgLy8gZWxlbWVudCByZWZlcmVuY2VzXG4gICAgdGhpcy5fd2F0Y2hlcnMgPSBbXTsgLy8gYWxsIHdhdGNoZXJzIGFzIGFuIGFycmF5XG4gICAgdGhpcy5fZGlyZWN0aXZlcyA9IFtdOyAvLyBhbGwgZGlyZWN0aXZlc1xuXG4gICAgLy8gYSB1aWRcbiAgICB0aGlzLl91aWQgPSB1aWQrKztcblxuICAgIC8vIGEgZmxhZyB0byBhdm9pZCB0aGlzIGJlaW5nIG9ic2VydmVkXG4gICAgdGhpcy5faXNWdWUgPSB0cnVlO1xuXG4gICAgLy8gZXZlbnRzIGJvb2trZWVwaW5nXG4gICAgdGhpcy5fZXZlbnRzID0ge307IC8vIHJlZ2lzdGVyZWQgY2FsbGJhY2tzXG4gICAgdGhpcy5fZXZlbnRzQ291bnQgPSB7fTsgLy8gZm9yICRicm9hZGNhc3Qgb3B0aW1pemF0aW9uXG5cbiAgICAvLyBmcmFnbWVudCBpbnN0YW5jZSBwcm9wZXJ0aWVzXG4gICAgdGhpcy5faXNGcmFnbWVudCA9IGZhbHNlO1xuICAgIHRoaXMuX2ZyYWdtZW50ID0gLy8gQHR5cGUge0RvY3VtZW50RnJhZ21lbnR9XG4gICAgdGhpcy5fZnJhZ21lbnRTdGFydCA9IC8vIEB0eXBlIHtUZXh0fENvbW1lbnR9XG4gICAgdGhpcy5fZnJhZ21lbnRFbmQgPSBudWxsOyAvLyBAdHlwZSB7VGV4dHxDb21tZW50fVxuXG4gICAgLy8gbGlmZWN5Y2xlIHN0YXRlXG4gICAgdGhpcy5faXNDb21waWxlZCA9IHRoaXMuX2lzRGVzdHJveWVkID0gdGhpcy5faXNSZWFkeSA9IHRoaXMuX2lzQXR0YWNoZWQgPSB0aGlzLl9pc0JlaW5nRGVzdHJveWVkID0gdGhpcy5fdkZvclJlbW92aW5nID0gZmFsc2U7XG4gICAgdGhpcy5fdW5saW5rRm4gPSBudWxsO1xuXG4gICAgLy8gY29udGV4dDpcbiAgICAvLyBpZiB0aGlzIGlzIGEgdHJhbnNjbHVkZWQgY29tcG9uZW50LCBjb250ZXh0XG4gICAgLy8gd2lsbCBiZSB0aGUgY29tbW9uIHBhcmVudCB2bSBvZiB0aGlzIGluc3RhbmNlXG4gICAgLy8gYW5kIGl0cyBob3N0LlxuICAgIHRoaXMuX2NvbnRleHQgPSBvcHRpb25zLl9jb250ZXh0IHx8IHRoaXMuJHBhcmVudDtcblxuICAgIC8vIHNjb3BlOlxuICAgIC8vIGlmIHRoaXMgaXMgaW5zaWRlIGFuIGlubGluZSB2LWZvciwgdGhlIHNjb3BlXG4gICAgLy8gd2lsbCBiZSB0aGUgaW50ZXJtZWRpYXRlIHNjb3BlIGNyZWF0ZWQgZm9yIHRoaXNcbiAgICAvLyByZXBlYXQgZnJhZ21lbnQuIHRoaXMgaXMgdXNlZCBmb3IgbGlua2luZyBwcm9wc1xuICAgIC8vIGFuZCBjb250YWluZXIgZGlyZWN0aXZlcy5cbiAgICB0aGlzLl9zY29wZSA9IG9wdGlvbnMuX3Njb3BlO1xuXG4gICAgLy8gZnJhZ21lbnQ6XG4gICAgLy8gaWYgdGhpcyBpbnN0YW5jZSBpcyBjb21waWxlZCBpbnNpZGUgYSBGcmFnbWVudCwgaXRcbiAgICAvLyBuZWVkcyB0byByZWlnc3RlciBpdHNlbGYgYXMgYSBjaGlsZCBvZiB0aGF0IGZyYWdtZW50XG4gICAgLy8gZm9yIGF0dGFjaC9kZXRhY2ggdG8gd29yayBwcm9wZXJseS5cbiAgICB0aGlzLl9mcmFnID0gb3B0aW9ucy5fZnJhZztcbiAgICBpZiAodGhpcy5fZnJhZykge1xuICAgICAgdGhpcy5fZnJhZy5jaGlsZHJlbi5wdXNoKHRoaXMpO1xuICAgIH1cblxuICAgIC8vIHB1c2ggc2VsZiBpbnRvIHBhcmVudCAvIHRyYW5zY2x1c2lvbiBob3N0XG4gICAgaWYgKHRoaXMuJHBhcmVudCkge1xuICAgICAgdGhpcy4kcGFyZW50LiRjaGlsZHJlbi5wdXNoKHRoaXMpO1xuICAgIH1cblxuICAgIC8vIG1lcmdlIG9wdGlvbnMuXG4gICAgb3B0aW9ucyA9IHRoaXMuJG9wdGlvbnMgPSBtZXJnZU9wdGlvbnModGhpcy5jb25zdHJ1Y3Rvci5vcHRpb25zLCBvcHRpb25zLCB0aGlzKTtcblxuICAgIC8vIHNldCByZWZcbiAgICB0aGlzLl91cGRhdGVSZWYoKTtcblxuICAgIC8vIGluaXRpYWxpemUgZGF0YSBhcyBlbXB0eSBvYmplY3QuXG4gICAgLy8gaXQgd2lsbCBiZSBmaWxsZWQgdXAgaW4gX2luaXREYXRhKCkuXG4gICAgdGhpcy5fZGF0YSA9IHt9O1xuXG4gICAgLy8gY2FsbCBpbml0IGhvb2tcbiAgICB0aGlzLl9jYWxsSG9vaygnaW5pdCcpO1xuXG4gICAgLy8gaW5pdGlhbGl6ZSBkYXRhIG9ic2VydmF0aW9uIGFuZCBzY29wZSBpbmhlcml0YW5jZS5cbiAgICB0aGlzLl9pbml0U3RhdGUoKTtcblxuICAgIC8vIHNldHVwIGV2ZW50IHN5c3RlbSBhbmQgb3B0aW9uIGV2ZW50cy5cbiAgICB0aGlzLl9pbml0RXZlbnRzKCk7XG5cbiAgICAvLyBjYWxsIGNyZWF0ZWQgaG9va1xuICAgIHRoaXMuX2NhbGxIb29rKCdjcmVhdGVkJyk7XG5cbiAgICAvLyBpZiBgZWxgIG9wdGlvbiBpcyBwYXNzZWQsIHN0YXJ0IGNvbXBpbGF0aW9uLlxuICAgIGlmIChvcHRpb25zLmVsKSB7XG4gICAgICB0aGlzLiRtb3VudChvcHRpb25zLmVsKTtcbiAgICB9XG4gIH07XG59XG5cbnZhciBwYXRoQ2FjaGUgPSBuZXcgQ2FjaGUoMTAwMCk7XG5cbi8vIGFjdGlvbnNcbnZhciBBUFBFTkQgPSAwO1xudmFyIFBVU0ggPSAxO1xudmFyIElOQ19TVUJfUEFUSF9ERVBUSCA9IDI7XG52YXIgUFVTSF9TVUJfUEFUSCA9IDM7XG5cbi8vIHN0YXRlc1xudmFyIEJFRk9SRV9QQVRIID0gMDtcbnZhciBJTl9QQVRIID0gMTtcbnZhciBCRUZPUkVfSURFTlQgPSAyO1xudmFyIElOX0lERU5UID0gMztcbnZhciBJTl9TVUJfUEFUSCA9IDQ7XG52YXIgSU5fU0lOR0xFX1FVT1RFID0gNTtcbnZhciBJTl9ET1VCTEVfUVVPVEUgPSA2O1xudmFyIEFGVEVSX1BBVEggPSA3O1xudmFyIEVSUk9SID0gODtcblxudmFyIHBhdGhTdGF0ZU1hY2hpbmUgPSBbXTtcblxucGF0aFN0YXRlTWFjaGluZVtCRUZPUkVfUEFUSF0gPSB7XG4gICd3cyc6IFtCRUZPUkVfUEFUSF0sXG4gICdpZGVudCc6IFtJTl9JREVOVCwgQVBQRU5EXSxcbiAgJ1snOiBbSU5fU1VCX1BBVEhdLFxuICAnZW9mJzogW0FGVEVSX1BBVEhdXG59O1xuXG5wYXRoU3RhdGVNYWNoaW5lW0lOX1BBVEhdID0ge1xuICAnd3MnOiBbSU5fUEFUSF0sXG4gICcuJzogW0JFRk9SRV9JREVOVF0sXG4gICdbJzogW0lOX1NVQl9QQVRIXSxcbiAgJ2VvZic6IFtBRlRFUl9QQVRIXVxufTtcblxucGF0aFN0YXRlTWFjaGluZVtCRUZPUkVfSURFTlRdID0ge1xuICAnd3MnOiBbQkVGT1JFX0lERU5UXSxcbiAgJ2lkZW50JzogW0lOX0lERU5ULCBBUFBFTkRdXG59O1xuXG5wYXRoU3RhdGVNYWNoaW5lW0lOX0lERU5UXSA9IHtcbiAgJ2lkZW50JzogW0lOX0lERU5ULCBBUFBFTkRdLFxuICAnMCc6IFtJTl9JREVOVCwgQVBQRU5EXSxcbiAgJ251bWJlcic6IFtJTl9JREVOVCwgQVBQRU5EXSxcbiAgJ3dzJzogW0lOX1BBVEgsIFBVU0hdLFxuICAnLic6IFtCRUZPUkVfSURFTlQsIFBVU0hdLFxuICAnWyc6IFtJTl9TVUJfUEFUSCwgUFVTSF0sXG4gICdlb2YnOiBbQUZURVJfUEFUSCwgUFVTSF1cbn07XG5cbnBhdGhTdGF0ZU1hY2hpbmVbSU5fU1VCX1BBVEhdID0ge1xuICBcIidcIjogW0lOX1NJTkdMRV9RVU9URSwgQVBQRU5EXSxcbiAgJ1wiJzogW0lOX0RPVUJMRV9RVU9URSwgQVBQRU5EXSxcbiAgJ1snOiBbSU5fU1VCX1BBVEgsIElOQ19TVUJfUEFUSF9ERVBUSF0sXG4gICddJzogW0lOX1BBVEgsIFBVU0hfU1VCX1BBVEhdLFxuICAnZW9mJzogRVJST1IsXG4gICdlbHNlJzogW0lOX1NVQl9QQVRILCBBUFBFTkRdXG59O1xuXG5wYXRoU3RhdGVNYWNoaW5lW0lOX1NJTkdMRV9RVU9URV0gPSB7XG4gIFwiJ1wiOiBbSU5fU1VCX1BBVEgsIEFQUEVORF0sXG4gICdlb2YnOiBFUlJPUixcbiAgJ2Vsc2UnOiBbSU5fU0lOR0xFX1FVT1RFLCBBUFBFTkRdXG59O1xuXG5wYXRoU3RhdGVNYWNoaW5lW0lOX0RPVUJMRV9RVU9URV0gPSB7XG4gICdcIic6IFtJTl9TVUJfUEFUSCwgQVBQRU5EXSxcbiAgJ2VvZic6IEVSUk9SLFxuICAnZWxzZSc6IFtJTl9ET1VCTEVfUVVPVEUsIEFQUEVORF1cbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lIHRoZSB0eXBlIG9mIGEgY2hhcmFjdGVyIGluIGEga2V5cGF0aC5cbiAqXG4gKiBAcGFyYW0ge0NoYXJ9IGNoXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHR5cGVcbiAqL1xuXG5mdW5jdGlvbiBnZXRQYXRoQ2hhclR5cGUoY2gpIHtcbiAgaWYgKGNoID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gJ2VvZic7XG4gIH1cblxuICB2YXIgY29kZSA9IGNoLmNoYXJDb2RlQXQoMCk7XG5cbiAgc3dpdGNoIChjb2RlKSB7XG4gICAgY2FzZSAweDVCOiAvLyBbXG4gICAgY2FzZSAweDVEOiAvLyBdXG4gICAgY2FzZSAweDJFOiAvLyAuXG4gICAgY2FzZSAweDIyOiAvLyBcIlxuICAgIGNhc2UgMHgyNzogLy8gJ1xuICAgIGNhc2UgMHgzMDpcbiAgICAgIC8vIDBcbiAgICAgIHJldHVybiBjaDtcblxuICAgIGNhc2UgMHg1RjogLy8gX1xuICAgIGNhc2UgMHgyNDpcbiAgICAgIC8vICRcbiAgICAgIHJldHVybiAnaWRlbnQnO1xuXG4gICAgY2FzZSAweDIwOiAvLyBTcGFjZVxuICAgIGNhc2UgMHgwOTogLy8gVGFiXG4gICAgY2FzZSAweDBBOiAvLyBOZXdsaW5lXG4gICAgY2FzZSAweDBEOiAvLyBSZXR1cm5cbiAgICBjYXNlIDB4QTA6IC8vIE5vLWJyZWFrIHNwYWNlXG4gICAgY2FzZSAweEZFRkY6IC8vIEJ5dGUgT3JkZXIgTWFya1xuICAgIGNhc2UgMHgyMDI4OiAvLyBMaW5lIFNlcGFyYXRvclxuICAgIGNhc2UgMHgyMDI5OlxuICAgICAgLy8gUGFyYWdyYXBoIFNlcGFyYXRvclxuICAgICAgcmV0dXJuICd3cyc7XG4gIH1cblxuICAvLyBhLXosIEEtWlxuICBpZiAoY29kZSA+PSAweDYxICYmIGNvZGUgPD0gMHg3QSB8fCBjb2RlID49IDB4NDEgJiYgY29kZSA8PSAweDVBKSB7XG4gICAgcmV0dXJuICdpZGVudCc7XG4gIH1cblxuICAvLyAxLTlcbiAgaWYgKGNvZGUgPj0gMHgzMSAmJiBjb2RlIDw9IDB4MzkpIHtcbiAgICByZXR1cm4gJ251bWJlcic7XG4gIH1cblxuICByZXR1cm4gJ2Vsc2UnO1xufVxuXG4vKipcbiAqIEZvcm1hdCBhIHN1YlBhdGgsIHJldHVybiBpdHMgcGxhaW4gZm9ybSBpZiBpdCBpc1xuICogYSBsaXRlcmFsIHN0cmluZyBvciBudW1iZXIuIE90aGVyd2lzZSBwcmVwZW5kIHRoZVxuICogZHluYW1pYyBpbmRpY2F0b3IgKCopLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0U3ViUGF0aChwYXRoKSB7XG4gIHZhciB0cmltbWVkID0gcGF0aC50cmltKCk7XG4gIC8vIGludmFsaWQgbGVhZGluZyAwXG4gIGlmIChwYXRoLmNoYXJBdCgwKSA9PT0gJzAnICYmIGlzTmFOKHBhdGgpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBpc0xpdGVyYWwodHJpbW1lZCkgPyBzdHJpcFF1b3Rlcyh0cmltbWVkKSA6ICcqJyArIHRyaW1tZWQ7XG59XG5cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgcGF0aCBpbnRvIGFuIGFycmF5IG9mIHNlZ21lbnRzXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHBhdGhcbiAqIEByZXR1cm4ge0FycmF5fHVuZGVmaW5lZH1cbiAqL1xuXG5mdW5jdGlvbiBwYXJzZShwYXRoKSB7XG4gIHZhciBrZXlzID0gW107XG4gIHZhciBpbmRleCA9IC0xO1xuICB2YXIgbW9kZSA9IEJFRk9SRV9QQVRIO1xuICB2YXIgc3ViUGF0aERlcHRoID0gMDtcbiAgdmFyIGMsIG5ld0NoYXIsIGtleSwgdHlwZSwgdHJhbnNpdGlvbiwgYWN0aW9uLCB0eXBlTWFwO1xuXG4gIHZhciBhY3Rpb25zID0gW107XG5cbiAgYWN0aW9uc1tQVVNIXSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoa2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAga2V5ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfTtcblxuICBhY3Rpb25zW0FQUEVORF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBrZXkgPSBuZXdDaGFyO1xuICAgIH0gZWxzZSB7XG4gICAgICBrZXkgKz0gbmV3Q2hhcjtcbiAgICB9XG4gIH07XG5cbiAgYWN0aW9uc1tJTkNfU1VCX1BBVEhfREVQVEhdID0gZnVuY3Rpb24gKCkge1xuICAgIGFjdGlvbnNbQVBQRU5EXSgpO1xuICAgIHN1YlBhdGhEZXB0aCsrO1xuICB9O1xuXG4gIGFjdGlvbnNbUFVTSF9TVUJfUEFUSF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHN1YlBhdGhEZXB0aCA+IDApIHtcbiAgICAgIHN1YlBhdGhEZXB0aC0tO1xuICAgICAgbW9kZSA9IElOX1NVQl9QQVRIO1xuICAgICAgYWN0aW9uc1tBUFBFTkRdKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1YlBhdGhEZXB0aCA9IDA7XG4gICAgICBrZXkgPSBmb3JtYXRTdWJQYXRoKGtleSk7XG4gICAgICBpZiAoa2V5ID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY3Rpb25zW1BVU0hdKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIG1heWJlVW5lc2NhcGVRdW90ZSgpIHtcbiAgICB2YXIgbmV4dENoYXIgPSBwYXRoW2luZGV4ICsgMV07XG4gICAgaWYgKG1vZGUgPT09IElOX1NJTkdMRV9RVU9URSAmJiBuZXh0Q2hhciA9PT0gXCInXCIgfHwgbW9kZSA9PT0gSU5fRE9VQkxFX1FVT1RFICYmIG5leHRDaGFyID09PSAnXCInKSB7XG4gICAgICBpbmRleCsrO1xuICAgICAgbmV3Q2hhciA9ICdcXFxcJyArIG5leHRDaGFyO1xuICAgICAgYWN0aW9uc1tBUFBFTkRdKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICB3aGlsZSAobW9kZSAhPSBudWxsKSB7XG4gICAgaW5kZXgrKztcbiAgICBjID0gcGF0aFtpbmRleF07XG5cbiAgICBpZiAoYyA9PT0gJ1xcXFwnICYmIG1heWJlVW5lc2NhcGVRdW90ZSgpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB0eXBlID0gZ2V0UGF0aENoYXJUeXBlKGMpO1xuICAgIHR5cGVNYXAgPSBwYXRoU3RhdGVNYWNoaW5lW21vZGVdO1xuICAgIHRyYW5zaXRpb24gPSB0eXBlTWFwW3R5cGVdIHx8IHR5cGVNYXBbJ2Vsc2UnXSB8fCBFUlJPUjtcblxuICAgIGlmICh0cmFuc2l0aW9uID09PSBFUlJPUikge1xuICAgICAgcmV0dXJuOyAvLyBwYXJzZSBlcnJvclxuICAgIH1cblxuICAgIG1vZGUgPSB0cmFuc2l0aW9uWzBdO1xuICAgIGFjdGlvbiA9IGFjdGlvbnNbdHJhbnNpdGlvblsxXV07XG4gICAgaWYgKGFjdGlvbikge1xuICAgICAgbmV3Q2hhciA9IHRyYW5zaXRpb25bMl07XG4gICAgICBuZXdDaGFyID0gbmV3Q2hhciA9PT0gdW5kZWZpbmVkID8gYyA6IG5ld0NoYXI7XG4gICAgICBpZiAoYWN0aW9uKCkgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobW9kZSA9PT0gQUZURVJfUEFUSCkge1xuICAgICAga2V5cy5yYXcgPSBwYXRoO1xuICAgICAgcmV0dXJuIGtleXM7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogRXh0ZXJuYWwgcGFyc2UgdGhhdCBjaGVjayBmb3IgYSBjYWNoZSBoaXQgZmlyc3RcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICogQHJldHVybiB7QXJyYXl8dW5kZWZpbmVkfVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlUGF0aChwYXRoKSB7XG4gIHZhciBoaXQgPSBwYXRoQ2FjaGUuZ2V0KHBhdGgpO1xuICBpZiAoIWhpdCkge1xuICAgIGhpdCA9IHBhcnNlKHBhdGgpO1xuICAgIGlmIChoaXQpIHtcbiAgICAgIHBhdGhDYWNoZS5wdXQocGF0aCwgaGl0KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGhpdDtcbn1cblxuLyoqXG4gKiBHZXQgZnJvbSBhbiBvYmplY3QgZnJvbSBhIHBhdGggc3RyaW5nXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtTdHJpbmd9IHBhdGhcbiAqL1xuXG5mdW5jdGlvbiBnZXRQYXRoKG9iaiwgcGF0aCkge1xuICByZXR1cm4gcGFyc2VFeHByZXNzaW9uKHBhdGgpLmdldChvYmopO1xufVxuXG4vKipcbiAqIFdhcm4gYWdhaW5zdCBzZXR0aW5nIG5vbi1leGlzdGVudCByb290IHBhdGggb24gYSB2bS5cbiAqL1xuXG52YXIgd2Fybk5vbkV4aXN0ZW50O1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgd2Fybk5vbkV4aXN0ZW50ID0gZnVuY3Rpb24gKHBhdGgsIHZtKSB7XG4gICAgd2FybignWW91IGFyZSBzZXR0aW5nIGEgbm9uLWV4aXN0ZW50IHBhdGggXCInICsgcGF0aC5yYXcgKyAnXCIgJyArICdvbiBhIHZtIGluc3RhbmNlLiBDb25zaWRlciBwcmUtaW5pdGlhbGl6aW5nIHRoZSBwcm9wZXJ0eSAnICsgJ3dpdGggdGhlIFwiZGF0YVwiIG9wdGlvbiBmb3IgbW9yZSByZWxpYWJsZSByZWFjdGl2aXR5ICcgKyAnYW5kIGJldHRlciBwZXJmb3JtYW5jZS4nLCB2bSk7XG4gIH07XG59XG5cbi8qKlxuICogU2V0IG9uIGFuIG9iamVjdCBmcm9tIGEgcGF0aFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7U3RyaW5nIHwgQXJyYXl9IHBhdGhcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKi9cblxuZnVuY3Rpb24gc2V0UGF0aChvYmosIHBhdGgsIHZhbCkge1xuICB2YXIgb3JpZ2luYWwgPSBvYmo7XG4gIGlmICh0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycpIHtcbiAgICBwYXRoID0gcGFyc2UocGF0aCk7XG4gIH1cbiAgaWYgKCFwYXRoIHx8ICFpc09iamVjdChvYmopKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0LCBrZXk7XG4gIGZvciAodmFyIGkgPSAwLCBsID0gcGF0aC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsYXN0ID0gb2JqO1xuICAgIGtleSA9IHBhdGhbaV07XG4gICAgaWYgKGtleS5jaGFyQXQoMCkgPT09ICcqJykge1xuICAgICAga2V5ID0gcGFyc2VFeHByZXNzaW9uKGtleS5zbGljZSgxKSkuZ2V0LmNhbGwob3JpZ2luYWwsIG9yaWdpbmFsKTtcbiAgICB9XG4gICAgaWYgKGkgPCBsIC0gMSkge1xuICAgICAgb2JqID0gb2JqW2tleV07XG4gICAgICBpZiAoIWlzT2JqZWN0KG9iaikpIHtcbiAgICAgICAgb2JqID0ge307XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGxhc3QuX2lzVnVlKSB7XG4gICAgICAgICAgd2Fybk5vbkV4aXN0ZW50KHBhdGgsIGxhc3QpO1xuICAgICAgICB9XG4gICAgICAgIHNldChsYXN0LCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAgICAgb2JqLiRzZXQoa2V5LCB2YWwpO1xuICAgICAgfSBlbHNlIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgICAgIG9ialtrZXldID0gdmFsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgb2JqLl9pc1Z1ZSkge1xuICAgICAgICAgIHdhcm5Ob25FeGlzdGVudChwYXRoLCBvYmopO1xuICAgICAgICB9XG4gICAgICAgIHNldChvYmosIGtleSwgdmFsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbnZhciBwYXRoID0gT2JqZWN0LmZyZWV6ZSh7XG4gIHBhcnNlUGF0aDogcGFyc2VQYXRoLFxuICBnZXRQYXRoOiBnZXRQYXRoLFxuICBzZXRQYXRoOiBzZXRQYXRoXG59KTtcblxudmFyIGV4cHJlc3Npb25DYWNoZSA9IG5ldyBDYWNoZSgxMDAwKTtcblxudmFyIGFsbG93ZWRLZXl3b3JkcyA9ICdNYXRoLERhdGUsdGhpcyx0cnVlLGZhbHNlLG51bGwsdW5kZWZpbmVkLEluZmluaXR5LE5hTiwnICsgJ2lzTmFOLGlzRmluaXRlLGRlY29kZVVSSSxkZWNvZGVVUklDb21wb25lbnQsZW5jb2RlVVJJLCcgKyAnZW5jb2RlVVJJQ29tcG9uZW50LHBhcnNlSW50LHBhcnNlRmxvYXQnO1xudmFyIGFsbG93ZWRLZXl3b3Jkc1JFID0gbmV3IFJlZ0V4cCgnXignICsgYWxsb3dlZEtleXdvcmRzLnJlcGxhY2UoLywvZywgJ1xcXFxifCcpICsgJ1xcXFxiKScpO1xuXG4vLyBrZXl3b3JkcyB0aGF0IGRvbid0IG1ha2Ugc2Vuc2UgaW5zaWRlIGV4cHJlc3Npb25zXG52YXIgaW1wcm9wZXJLZXl3b3JkcyA9ICdicmVhayxjYXNlLGNsYXNzLGNhdGNoLGNvbnN0LGNvbnRpbnVlLGRlYnVnZ2VyLGRlZmF1bHQsJyArICdkZWxldGUsZG8sZWxzZSxleHBvcnQsZXh0ZW5kcyxmaW5hbGx5LGZvcixmdW5jdGlvbixpZiwnICsgJ2ltcG9ydCxpbixpbnN0YW5jZW9mLGxldCxyZXR1cm4sc3VwZXIsc3dpdGNoLHRocm93LHRyeSwnICsgJ3Zhcix3aGlsZSx3aXRoLHlpZWxkLGVudW0sYXdhaXQsaW1wbGVtZW50cyxwYWNrYWdlLCcgKyAncHJvdGVjdGVkLHN0YXRpYyxpbnRlcmZhY2UscHJpdmF0ZSxwdWJsaWMnO1xudmFyIGltcHJvcGVyS2V5d29yZHNSRSA9IG5ldyBSZWdFeHAoJ14oJyArIGltcHJvcGVyS2V5d29yZHMucmVwbGFjZSgvLC9nLCAnXFxcXGJ8JykgKyAnXFxcXGIpJyk7XG5cbnZhciB3c1JFID0gL1xccy9nO1xudmFyIG5ld2xpbmVSRSA9IC9cXG4vZztcbnZhciBzYXZlUkUgPSAvW1xceyxdXFxzKltcXHdcXCRfXStcXHMqOnwoJyg/OlteJ1xcXFxdfFxcXFwuKSonfFwiKD86W15cIlxcXFxdfFxcXFwuKSpcInxgKD86W15gXFxcXF18XFxcXC4pKlxcJFxce3xcXH0oPzpbXmBcXFxcXXxcXFxcLikqYHxgKD86W15gXFxcXF18XFxcXC4pKmApfG5ldyB8dHlwZW9mIHx2b2lkIC9nO1xudmFyIHJlc3RvcmVSRSA9IC9cIihcXGQrKVwiL2c7XG52YXIgcGF0aFRlc3RSRSA9IC9eW0EtWmEtel8kXVtcXHckXSooPzpcXC5bQS1aYS16XyRdW1xcdyRdKnxcXFsnLio/J1xcXXxcXFtcIi4qP1wiXFxdfFxcW1xcZCtcXF18XFxbW0EtWmEtel8kXVtcXHckXSpcXF0pKiQvO1xudmFyIGlkZW50UkUgPSAvW15cXHckXFwuXSg/OltBLVphLXpfJF1bXFx3JF0qKS9nO1xudmFyIGxpdGVyYWxWYWx1ZVJFJDEgPSAvXig/OnRydWV8ZmFsc2V8bnVsbHx1bmRlZmluZWR8SW5maW5pdHl8TmFOKSQvO1xuXG5mdW5jdGlvbiBub29wKCkge31cblxuLyoqXG4gKiBTYXZlIC8gUmV3cml0ZSAvIFJlc3RvcmVcbiAqXG4gKiBXaGVuIHJld3JpdGluZyBwYXRocyBmb3VuZCBpbiBhbiBleHByZXNzaW9uLCBpdCBpc1xuICogcG9zc2libGUgZm9yIHRoZSBzYW1lIGxldHRlciBzZXF1ZW5jZXMgdG8gYmUgZm91bmQgaW5cbiAqIHN0cmluZ3MgYW5kIE9iamVjdCBsaXRlcmFsIHByb3BlcnR5IGtleXMuIFRoZXJlZm9yZSB3ZVxuICogcmVtb3ZlIGFuZCBzdG9yZSB0aGVzZSBwYXJ0cyBpbiBhIHRlbXBvcmFyeSBhcnJheSwgYW5kXG4gKiByZXN0b3JlIHRoZW0gYWZ0ZXIgdGhlIHBhdGggcmV3cml0ZS5cbiAqL1xuXG52YXIgc2F2ZWQgPSBbXTtcblxuLyoqXG4gKiBTYXZlIHJlcGxhY2VyXG4gKlxuICogVGhlIHNhdmUgcmVnZXggY2FuIG1hdGNoIHR3byBwb3NzaWJsZSBjYXNlczpcbiAqIDEuIEFuIG9wZW5pbmcgb2JqZWN0IGxpdGVyYWxcbiAqIDIuIEEgc3RyaW5nXG4gKiBJZiBtYXRjaGVkIGFzIGEgcGxhaW4gc3RyaW5nLCB3ZSBuZWVkIHRvIGVzY2FwZSBpdHNcbiAqIG5ld2xpbmVzLCBzaW5jZSB0aGUgc3RyaW5nIG5lZWRzIHRvIGJlIHByZXNlcnZlZCB3aGVuXG4gKiBnZW5lcmF0aW5nIHRoZSBmdW5jdGlvbiBib2R5LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBpc1N0cmluZyAtIHN0ciBpZiBtYXRjaGVkIGFzIGEgc3RyaW5nXG4gKiBAcmV0dXJuIHtTdHJpbmd9IC0gcGxhY2Vob2xkZXIgd2l0aCBpbmRleFxuICovXG5cbmZ1bmN0aW9uIHNhdmUoc3RyLCBpc1N0cmluZykge1xuICB2YXIgaSA9IHNhdmVkLmxlbmd0aDtcbiAgc2F2ZWRbaV0gPSBpc1N0cmluZyA/IHN0ci5yZXBsYWNlKG5ld2xpbmVSRSwgJ1xcXFxuJykgOiBzdHI7XG4gIHJldHVybiAnXCInICsgaSArICdcIic7XG59XG5cbi8qKlxuICogUGF0aCByZXdyaXRlIHJlcGxhY2VyXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHJhd1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmZ1bmN0aW9uIHJld3JpdGUocmF3KSB7XG4gIHZhciBjID0gcmF3LmNoYXJBdCgwKTtcbiAgdmFyIHBhdGggPSByYXcuc2xpY2UoMSk7XG4gIGlmIChhbGxvd2VkS2V5d29yZHNSRS50ZXN0KHBhdGgpKSB7XG4gICAgcmV0dXJuIHJhdztcbiAgfSBlbHNlIHtcbiAgICBwYXRoID0gcGF0aC5pbmRleE9mKCdcIicpID4gLTEgPyBwYXRoLnJlcGxhY2UocmVzdG9yZVJFLCByZXN0b3JlKSA6IHBhdGg7XG4gICAgcmV0dXJuIGMgKyAnc2NvcGUuJyArIHBhdGg7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXN0b3JlIHJlcGxhY2VyXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHBhcmFtIHtTdHJpbmd9IGkgLSBtYXRjaGVkIHNhdmUgaW5kZXhcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5mdW5jdGlvbiByZXN0b3JlKHN0ciwgaSkge1xuICByZXR1cm4gc2F2ZWRbaV07XG59XG5cbi8qKlxuICogUmV3cml0ZSBhbiBleHByZXNzaW9uLCBwcmVmaXhpbmcgYWxsIHBhdGggYWNjZXNzb3JzIHdpdGhcbiAqIGBzY29wZS5gIGFuZCBnZW5lcmF0ZSBnZXR0ZXIvc2V0dGVyIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXhwXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuXG5mdW5jdGlvbiBjb21waWxlR2V0dGVyKGV4cCkge1xuICBpZiAoaW1wcm9wZXJLZXl3b3Jkc1JFLnRlc3QoZXhwKSkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybignQXZvaWQgdXNpbmcgcmVzZXJ2ZWQga2V5d29yZHMgaW4gZXhwcmVzc2lvbjogJyArIGV4cCk7XG4gIH1cbiAgLy8gcmVzZXQgc3RhdGVcbiAgc2F2ZWQubGVuZ3RoID0gMDtcbiAgLy8gc2F2ZSBzdHJpbmdzIGFuZCBvYmplY3QgbGl0ZXJhbCBrZXlzXG4gIHZhciBib2R5ID0gZXhwLnJlcGxhY2Uoc2F2ZVJFLCBzYXZlKS5yZXBsYWNlKHdzUkUsICcnKTtcbiAgLy8gcmV3cml0ZSBhbGwgcGF0aHNcbiAgLy8gcGFkIDEgc3BhY2UgaGVyZSBiZWNhdXNlIHRoZSByZWdleCBtYXRjaGVzIDEgZXh0cmEgY2hhclxuICBib2R5ID0gKCcgJyArIGJvZHkpLnJlcGxhY2UoaWRlbnRSRSwgcmV3cml0ZSkucmVwbGFjZShyZXN0b3JlUkUsIHJlc3RvcmUpO1xuICByZXR1cm4gbWFrZUdldHRlckZuKGJvZHkpO1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgZ2V0dGVyIGZ1bmN0aW9uLiBSZXF1aXJlcyBldmFsLlxuICpcbiAqIFdlIGlzb2xhdGUgdGhlIHRyeS9jYXRjaCBzbyBpdCBkb2Vzbid0IGFmZmVjdCB0aGVcbiAqIG9wdGltaXphdGlvbiBvZiB0aGUgcGFyc2UgZnVuY3Rpb24gd2hlbiBpdCBpcyBub3QgY2FsbGVkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBib2R5XG4gKiBAcmV0dXJuIHtGdW5jdGlvbnx1bmRlZmluZWR9XG4gKi9cblxuZnVuY3Rpb24gbWFrZUdldHRlckZuKGJvZHkpIHtcbiAgdHJ5IHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1uZXctZnVuYyAqL1xuICAgIHJldHVybiBuZXcgRnVuY3Rpb24oJ3Njb3BlJywgJ3JldHVybiAnICsgYm9keSArICc7Jyk7XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1uZXctZnVuYyAqL1xuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKGUudG9TdHJpbmcoKS5tYXRjaCgvdW5zYWZlLWV2YWx8Q1NQLykpIHtcbiAgICAgICAgd2FybignSXQgc2VlbXMgeW91IGFyZSB1c2luZyB0aGUgZGVmYXVsdCBidWlsZCBvZiBWdWUuanMgaW4gYW4gZW52aXJvbm1lbnQgJyArICd3aXRoIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IHRoYXQgcHJvaGliaXRzIHVuc2FmZS1ldmFsLiAnICsgJ1VzZSB0aGUgQ1NQLWNvbXBsaWFudCBidWlsZCBpbnN0ZWFkOiAnICsgJ2h0dHA6Ly92dWVqcy5vcmcvZ3VpZGUvaW5zdGFsbGF0aW9uLmh0bWwjQ1NQLWNvbXBsaWFudC1idWlsZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2FybignSW52YWxpZCBleHByZXNzaW9uLiAnICsgJ0dlbmVyYXRlZCBmdW5jdGlvbiBib2R5OiAnICsgYm9keSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBub29wO1xuICB9XG59XG5cbi8qKlxuICogQ29tcGlsZSBhIHNldHRlciBmdW5jdGlvbiBmb3IgdGhlIGV4cHJlc3Npb24uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV4cFxuICogQHJldHVybiB7RnVuY3Rpb258dW5kZWZpbmVkfVxuICovXG5cbmZ1bmN0aW9uIGNvbXBpbGVTZXR0ZXIoZXhwKSB7XG4gIHZhciBwYXRoID0gcGFyc2VQYXRoKGV4cCk7XG4gIGlmIChwYXRoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzY29wZSwgdmFsKSB7XG4gICAgICBzZXRQYXRoKHNjb3BlLCBwYXRoLCB2YWwpO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKCdJbnZhbGlkIHNldHRlciBleHByZXNzaW9uOiAnICsgZXhwKTtcbiAgfVxufVxuXG4vKipcbiAqIFBhcnNlIGFuIGV4cHJlc3Npb24gaW50byByZS13cml0dGVuIGdldHRlci9zZXR0ZXJzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBleHBcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gbmVlZFNldFxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cblxuZnVuY3Rpb24gcGFyc2VFeHByZXNzaW9uKGV4cCwgbmVlZFNldCkge1xuICBleHAgPSBleHAudHJpbSgpO1xuICAvLyB0cnkgY2FjaGVcbiAgdmFyIGhpdCA9IGV4cHJlc3Npb25DYWNoZS5nZXQoZXhwKTtcbiAgaWYgKGhpdCkge1xuICAgIGlmIChuZWVkU2V0ICYmICFoaXQuc2V0KSB7XG4gICAgICBoaXQuc2V0ID0gY29tcGlsZVNldHRlcihoaXQuZXhwKTtcbiAgICB9XG4gICAgcmV0dXJuIGhpdDtcbiAgfVxuICB2YXIgcmVzID0geyBleHA6IGV4cCB9O1xuICByZXMuZ2V0ID0gaXNTaW1wbGVQYXRoKGV4cCkgJiYgZXhwLmluZGV4T2YoJ1snKSA8IDBcbiAgLy8gb3B0aW1pemVkIHN1cGVyIHNpbXBsZSBnZXR0ZXJcbiAgPyBtYWtlR2V0dGVyRm4oJ3Njb3BlLicgKyBleHApXG4gIC8vIGR5bmFtaWMgZ2V0dGVyXG4gIDogY29tcGlsZUdldHRlcihleHApO1xuICBpZiAobmVlZFNldCkge1xuICAgIHJlcy5zZXQgPSBjb21waWxlU2V0dGVyKGV4cCk7XG4gIH1cbiAgZXhwcmVzc2lvbkNhY2hlLnB1dChleHAsIHJlcyk7XG4gIHJldHVybiByZXM7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYW4gZXhwcmVzc2lvbiBpcyBhIHNpbXBsZSBwYXRoLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBleHBcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuZnVuY3Rpb24gaXNTaW1wbGVQYXRoKGV4cCkge1xuICByZXR1cm4gcGF0aFRlc3RSRS50ZXN0KGV4cCkgJiZcbiAgLy8gZG9uJ3QgdHJlYXQgbGl0ZXJhbCB2YWx1ZXMgYXMgcGF0aHNcbiAgIWxpdGVyYWxWYWx1ZVJFJDEudGVzdChleHApICYmXG4gIC8vIE1hdGggY29uc3RhbnRzIGUuZy4gTWF0aC5QSSwgTWF0aC5FIGV0Yy5cbiAgZXhwLnNsaWNlKDAsIDUpICE9PSAnTWF0aC4nO1xufVxuXG52YXIgZXhwcmVzc2lvbiA9IE9iamVjdC5mcmVlemUoe1xuICBwYXJzZUV4cHJlc3Npb246IHBhcnNlRXhwcmVzc2lvbixcbiAgaXNTaW1wbGVQYXRoOiBpc1NpbXBsZVBhdGhcbn0pO1xuXG4vLyB3ZSBoYXZlIHR3byBzZXBhcmF0ZSBxdWV1ZXM6IG9uZSBmb3IgZGlyZWN0aXZlIHVwZGF0ZXNcbi8vIGFuZCBvbmUgZm9yIHVzZXIgd2F0Y2hlciByZWdpc3RlcmVkIHZpYSAkd2F0Y2goKS5cbi8vIHdlIHdhbnQgdG8gZ3VhcmFudGVlIGRpcmVjdGl2ZSB1cGRhdGVzIHRvIGJlIGNhbGxlZFxuLy8gYmVmb3JlIHVzZXIgd2F0Y2hlcnMgc28gdGhhdCB3aGVuIHVzZXIgd2F0Y2hlcnMgYXJlXG4vLyB0cmlnZ2VyZWQsIHRoZSBET00gd291bGQgaGF2ZSBhbHJlYWR5IGJlZW4gaW4gdXBkYXRlZFxuLy8gc3RhdGUuXG5cbnZhciBxdWV1ZSA9IFtdO1xudmFyIHVzZXJRdWV1ZSA9IFtdO1xudmFyIGhhcyA9IHt9O1xudmFyIGNpcmN1bGFyID0ge307XG52YXIgd2FpdGluZyA9IGZhbHNlO1xuXG4vKipcbiAqIFJlc2V0IHRoZSBiYXRjaGVyJ3Mgc3RhdGUuXG4gKi9cblxuZnVuY3Rpb24gcmVzZXRCYXRjaGVyU3RhdGUoKSB7XG4gIHF1ZXVlLmxlbmd0aCA9IDA7XG4gIHVzZXJRdWV1ZS5sZW5ndGggPSAwO1xuICBoYXMgPSB7fTtcbiAgY2lyY3VsYXIgPSB7fTtcbiAgd2FpdGluZyA9IGZhbHNlO1xufVxuXG4vKipcbiAqIEZsdXNoIGJvdGggcXVldWVzIGFuZCBydW4gdGhlIHdhdGNoZXJzLlxuICovXG5cbmZ1bmN0aW9uIGZsdXNoQmF0Y2hlclF1ZXVlKCkge1xuICB2YXIgX2FnYWluID0gdHJ1ZTtcblxuICBfZnVuY3Rpb246IHdoaWxlIChfYWdhaW4pIHtcbiAgICBfYWdhaW4gPSBmYWxzZTtcblxuICAgIHJ1bkJhdGNoZXJRdWV1ZShxdWV1ZSk7XG4gICAgcnVuQmF0Y2hlclF1ZXVlKHVzZXJRdWV1ZSk7XG4gICAgLy8gdXNlciB3YXRjaGVycyB0cmlnZ2VyZWQgbW9yZSB3YXRjaGVycyxcbiAgICAvLyBrZWVwIGZsdXNoaW5nIHVudGlsIGl0IGRlcGxldGVzXG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgX2FnYWluID0gdHJ1ZTtcbiAgICAgIGNvbnRpbnVlIF9mdW5jdGlvbjtcbiAgICB9XG4gICAgLy8gZGV2IHRvb2wgaG9va1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChkZXZ0b29scyAmJiBjb25maWcuZGV2dG9vbHMpIHtcbiAgICAgIGRldnRvb2xzLmVtaXQoJ2ZsdXNoJyk7XG4gICAgfVxuICAgIHJlc2V0QmF0Y2hlclN0YXRlKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBSdW4gdGhlIHdhdGNoZXJzIGluIGEgc2luZ2xlIHF1ZXVlLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHF1ZXVlXG4gKi9cblxuZnVuY3Rpb24gcnVuQmF0Y2hlclF1ZXVlKHF1ZXVlKSB7XG4gIC8vIGRvIG5vdCBjYWNoZSBsZW5ndGggYmVjYXVzZSBtb3JlIHdhdGNoZXJzIG1pZ2h0IGJlIHB1c2hlZFxuICAvLyBhcyB3ZSBydW4gZXhpc3Rpbmcgd2F0Y2hlcnNcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgIHZhciB3YXRjaGVyID0gcXVldWVbaV07XG4gICAgdmFyIGlkID0gd2F0Y2hlci5pZDtcbiAgICBoYXNbaWRdID0gbnVsbDtcbiAgICB3YXRjaGVyLnJ1bigpO1xuICAgIC8vIGluIGRldiBidWlsZCwgY2hlY2sgYW5kIHN0b3AgY2lyY3VsYXIgdXBkYXRlcy5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBoYXNbaWRdICE9IG51bGwpIHtcbiAgICAgIGNpcmN1bGFyW2lkXSA9IChjaXJjdWxhcltpZF0gfHwgMCkgKyAxO1xuICAgICAgaWYgKGNpcmN1bGFyW2lkXSA+IGNvbmZpZy5fbWF4VXBkYXRlQ291bnQpIHtcbiAgICAgICAgd2FybignWW91IG1heSBoYXZlIGFuIGluZmluaXRlIHVwZGF0ZSBsb29wIGZvciB3YXRjaGVyICcgKyAnd2l0aCBleHByZXNzaW9uIFwiJyArIHdhdGNoZXIuZXhwcmVzc2lvbiArICdcIicsIHdhdGNoZXIudm0pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcXVldWUubGVuZ3RoID0gMDtcbn1cblxuLyoqXG4gKiBQdXNoIGEgd2F0Y2hlciBpbnRvIHRoZSB3YXRjaGVyIHF1ZXVlLlxuICogSm9icyB3aXRoIGR1cGxpY2F0ZSBJRHMgd2lsbCBiZSBza2lwcGVkIHVubGVzcyBpdCdzXG4gKiBwdXNoZWQgd2hlbiB0aGUgcXVldWUgaXMgYmVpbmcgZmx1c2hlZC5cbiAqXG4gKiBAcGFyYW0ge1dhdGNoZXJ9IHdhdGNoZXJcbiAqICAgcHJvcGVydGllczpcbiAqICAgLSB7TnVtYmVyfSBpZFxuICogICAtIHtGdW5jdGlvbn0gcnVuXG4gKi9cblxuZnVuY3Rpb24gcHVzaFdhdGNoZXIod2F0Y2hlcikge1xuICB2YXIgaWQgPSB3YXRjaGVyLmlkO1xuICBpZiAoaGFzW2lkXSA9PSBudWxsKSB7XG4gICAgLy8gcHVzaCB3YXRjaGVyIGludG8gYXBwcm9wcmlhdGUgcXVldWVcbiAgICB2YXIgcSA9IHdhdGNoZXIudXNlciA/IHVzZXJRdWV1ZSA6IHF1ZXVlO1xuICAgIGhhc1tpZF0gPSBxLmxlbmd0aDtcbiAgICBxLnB1c2god2F0Y2hlcik7XG4gICAgLy8gcXVldWUgdGhlIGZsdXNoXG4gICAgaWYgKCF3YWl0aW5nKSB7XG4gICAgICB3YWl0aW5nID0gdHJ1ZTtcbiAgICAgIG5leHRUaWNrKGZsdXNoQmF0Y2hlclF1ZXVlKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHVpZCQyID0gMDtcblxuLyoqXG4gKiBBIHdhdGNoZXIgcGFyc2VzIGFuIGV4cHJlc3Npb24sIGNvbGxlY3RzIGRlcGVuZGVuY2llcyxcbiAqIGFuZCBmaXJlcyBjYWxsYmFjayB3aGVuIHRoZSBleHByZXNzaW9uIHZhbHVlIGNoYW5nZXMuXG4gKiBUaGlzIGlzIHVzZWQgZm9yIGJvdGggdGhlICR3YXRjaCgpIGFwaSBhbmQgZGlyZWN0aXZlcy5cbiAqXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqIEBwYXJhbSB7U3RyaW5nfEZ1bmN0aW9ufSBleHBPckZuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqICAgICAgICAgICAgICAgICAtIHtBcnJheX0gZmlsdGVyc1xuICogICAgICAgICAgICAgICAgIC0ge0Jvb2xlYW59IHR3b1dheVxuICogICAgICAgICAgICAgICAgIC0ge0Jvb2xlYW59IGRlZXBcbiAqICAgICAgICAgICAgICAgICAtIHtCb29sZWFufSB1c2VyXG4gKiAgICAgICAgICAgICAgICAgLSB7Qm9vbGVhbn0gc3luY1xuICogICAgICAgICAgICAgICAgIC0ge0Jvb2xlYW59IGxhenlcbiAqICAgICAgICAgICAgICAgICAtIHtGdW5jdGlvbn0gW3ByZVByb2Nlc3NdXG4gKiAgICAgICAgICAgICAgICAgLSB7RnVuY3Rpb259IFtwb3N0UHJvY2Vzc11cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBXYXRjaGVyKHZtLCBleHBPckZuLCBjYiwgb3B0aW9ucykge1xuICAvLyBtaXggaW4gb3B0aW9uc1xuICBpZiAob3B0aW9ucykge1xuICAgIGV4dGVuZCh0aGlzLCBvcHRpb25zKTtcbiAgfVxuICB2YXIgaXNGbiA9IHR5cGVvZiBleHBPckZuID09PSAnZnVuY3Rpb24nO1xuICB0aGlzLnZtID0gdm07XG4gIHZtLl93YXRjaGVycy5wdXNoKHRoaXMpO1xuICB0aGlzLmV4cHJlc3Npb24gPSBleHBPckZuO1xuICB0aGlzLmNiID0gY2I7XG4gIHRoaXMuaWQgPSArK3VpZCQyOyAvLyB1aWQgZm9yIGJhdGNoaW5nXG4gIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgdGhpcy5kaXJ0eSA9IHRoaXMubGF6eTsgLy8gZm9yIGxhenkgd2F0Y2hlcnNcbiAgdGhpcy5kZXBzID0gW107XG4gIHRoaXMubmV3RGVwcyA9IFtdO1xuICB0aGlzLmRlcElkcyA9IG5ldyBfU2V0KCk7XG4gIHRoaXMubmV3RGVwSWRzID0gbmV3IF9TZXQoKTtcbiAgdGhpcy5wcmV2RXJyb3IgPSBudWxsOyAvLyBmb3IgYXN5bmMgZXJyb3Igc3RhY2tzXG4gIC8vIHBhcnNlIGV4cHJlc3Npb24gZm9yIGdldHRlci9zZXR0ZXJcbiAgaWYgKGlzRm4pIHtcbiAgICB0aGlzLmdldHRlciA9IGV4cE9yRm47XG4gICAgdGhpcy5zZXR0ZXIgPSB1bmRlZmluZWQ7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHJlcyA9IHBhcnNlRXhwcmVzc2lvbihleHBPckZuLCB0aGlzLnR3b1dheSk7XG4gICAgdGhpcy5nZXR0ZXIgPSByZXMuZ2V0O1xuICAgIHRoaXMuc2V0dGVyID0gcmVzLnNldDtcbiAgfVxuICB0aGlzLnZhbHVlID0gdGhpcy5sYXp5ID8gdW5kZWZpbmVkIDogdGhpcy5nZXQoKTtcbiAgLy8gc3RhdGUgZm9yIGF2b2lkaW5nIGZhbHNlIHRyaWdnZXJzIGZvciBkZWVwIGFuZCBBcnJheVxuICAvLyB3YXRjaGVycyBkdXJpbmcgdm0uX2RpZ2VzdCgpXG4gIHRoaXMucXVldWVkID0gdGhpcy5zaGFsbG93ID0gZmFsc2U7XG59XG5cbi8qKlxuICogRXZhbHVhdGUgdGhlIGdldHRlciwgYW5kIHJlLWNvbGxlY3QgZGVwZW5kZW5jaWVzLlxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5iZWZvcmVHZXQoKTtcbiAgdmFyIHNjb3BlID0gdGhpcy5zY29wZSB8fCB0aGlzLnZtO1xuICB2YXIgdmFsdWU7XG4gIHRyeSB7XG4gICAgdmFsdWUgPSB0aGlzLmdldHRlci5jYWxsKHNjb3BlLCBzY29wZSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBjb25maWcud2FybkV4cHJlc3Npb25FcnJvcnMpIHtcbiAgICAgIHdhcm4oJ0Vycm9yIHdoZW4gZXZhbHVhdGluZyBleHByZXNzaW9uICcgKyAnXCInICsgdGhpcy5leHByZXNzaW9uICsgJ1wiOiAnICsgZS50b1N0cmluZygpLCB0aGlzLnZtKTtcbiAgICB9XG4gIH1cbiAgLy8gXCJ0b3VjaFwiIGV2ZXJ5IHByb3BlcnR5IHNvIHRoZXkgYXJlIGFsbCB0cmFja2VkIGFzXG4gIC8vIGRlcGVuZGVuY2llcyBmb3IgZGVlcCB3YXRjaGluZ1xuICBpZiAodGhpcy5kZWVwKSB7XG4gICAgdHJhdmVyc2UodmFsdWUpO1xuICB9XG4gIGlmICh0aGlzLnByZVByb2Nlc3MpIHtcbiAgICB2YWx1ZSA9IHRoaXMucHJlUHJvY2Vzcyh2YWx1ZSk7XG4gIH1cbiAgaWYgKHRoaXMuZmlsdGVycykge1xuICAgIHZhbHVlID0gc2NvcGUuX2FwcGx5RmlsdGVycyh2YWx1ZSwgbnVsbCwgdGhpcy5maWx0ZXJzLCBmYWxzZSk7XG4gIH1cbiAgaWYgKHRoaXMucG9zdFByb2Nlc3MpIHtcbiAgICB2YWx1ZSA9IHRoaXMucG9zdFByb2Nlc3ModmFsdWUpO1xuICB9XG4gIHRoaXMuYWZ0ZXJHZXQoKTtcbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuLyoqXG4gKiBTZXQgdGhlIGNvcnJlc3BvbmRpbmcgdmFsdWUgd2l0aCB0aGUgc2V0dGVyLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqL1xuXG5XYXRjaGVyLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHNjb3BlID0gdGhpcy5zY29wZSB8fCB0aGlzLnZtO1xuICBpZiAodGhpcy5maWx0ZXJzKSB7XG4gICAgdmFsdWUgPSBzY29wZS5fYXBwbHlGaWx0ZXJzKHZhbHVlLCB0aGlzLnZhbHVlLCB0aGlzLmZpbHRlcnMsIHRydWUpO1xuICB9XG4gIHRyeSB7XG4gICAgdGhpcy5zZXR0ZXIuY2FsbChzY29wZSwgc2NvcGUsIHZhbHVlKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGNvbmZpZy53YXJuRXhwcmVzc2lvbkVycm9ycykge1xuICAgICAgd2FybignRXJyb3Igd2hlbiBldmFsdWF0aW5nIHNldHRlciAnICsgJ1wiJyArIHRoaXMuZXhwcmVzc2lvbiArICdcIjogJyArIGUudG9TdHJpbmcoKSwgdGhpcy52bSk7XG4gICAgfVxuICB9XG4gIC8vIHR3by13YXkgc3luYyBmb3Igdi1mb3IgYWxpYXNcbiAgdmFyIGZvckNvbnRleHQgPSBzY29wZS4kZm9yQ29udGV4dDtcbiAgaWYgKGZvckNvbnRleHQgJiYgZm9yQ29udGV4dC5hbGlhcyA9PT0gdGhpcy5leHByZXNzaW9uKSB7XG4gICAgaWYgKGZvckNvbnRleHQuZmlsdGVycykge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKCdJdCBzZWVtcyB5b3UgYXJlIHVzaW5nIHR3by13YXkgYmluZGluZyBvbiAnICsgJ2Egdi1mb3IgYWxpYXMgKCcgKyB0aGlzLmV4cHJlc3Npb24gKyAnKSwgYW5kIHRoZSAnICsgJ3YtZm9yIGhhcyBmaWx0ZXJzLiBUaGlzIHdpbGwgbm90IHdvcmsgcHJvcGVybHkuICcgKyAnRWl0aGVyIHJlbW92ZSB0aGUgZmlsdGVycyBvciB1c2UgYW4gYXJyYXkgb2YgJyArICdvYmplY3RzIGFuZCBiaW5kIHRvIG9iamVjdCBwcm9wZXJ0aWVzIGluc3RlYWQuJywgdGhpcy52bSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvckNvbnRleHQuX3dpdGhMb2NrKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChzY29wZS4ka2V5KSB7XG4gICAgICAgIC8vIG9yaWdpbmFsIGlzIGFuIG9iamVjdFxuICAgICAgICBmb3JDb250ZXh0LnJhd1ZhbHVlW3Njb3BlLiRrZXldID0gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3JDb250ZXh0LnJhd1ZhbHVlLiRzZXQoc2NvcGUuJGluZGV4LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cbi8qKlxuICogUHJlcGFyZSBmb3IgZGVwZW5kZW5jeSBjb2xsZWN0aW9uLlxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLmJlZm9yZUdldCA9IGZ1bmN0aW9uICgpIHtcbiAgRGVwLnRhcmdldCA9IHRoaXM7XG59O1xuXG4vKipcbiAqIEFkZCBhIGRlcGVuZGVuY3kgdG8gdGhpcyBkaXJlY3RpdmUuXG4gKlxuICogQHBhcmFtIHtEZXB9IGRlcFxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLmFkZERlcCA9IGZ1bmN0aW9uIChkZXApIHtcbiAgdmFyIGlkID0gZGVwLmlkO1xuICBpZiAoIXRoaXMubmV3RGVwSWRzLmhhcyhpZCkpIHtcbiAgICB0aGlzLm5ld0RlcElkcy5hZGQoaWQpO1xuICAgIHRoaXMubmV3RGVwcy5wdXNoKGRlcCk7XG4gICAgaWYgKCF0aGlzLmRlcElkcy5oYXMoaWQpKSB7XG4gICAgICBkZXAuYWRkU3ViKHRoaXMpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBDbGVhbiB1cCBmb3IgZGVwZW5kZW5jeSBjb2xsZWN0aW9uLlxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLmFmdGVyR2V0ID0gZnVuY3Rpb24gKCkge1xuICBEZXAudGFyZ2V0ID0gbnVsbDtcbiAgdmFyIGkgPSB0aGlzLmRlcHMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgdmFyIGRlcCA9IHRoaXMuZGVwc1tpXTtcbiAgICBpZiAoIXRoaXMubmV3RGVwSWRzLmhhcyhkZXAuaWQpKSB7XG4gICAgICBkZXAucmVtb3ZlU3ViKHRoaXMpO1xuICAgIH1cbiAgfVxuICB2YXIgdG1wID0gdGhpcy5kZXBJZHM7XG4gIHRoaXMuZGVwSWRzID0gdGhpcy5uZXdEZXBJZHM7XG4gIHRoaXMubmV3RGVwSWRzID0gdG1wO1xuICB0aGlzLm5ld0RlcElkcy5jbGVhcigpO1xuICB0bXAgPSB0aGlzLmRlcHM7XG4gIHRoaXMuZGVwcyA9IHRoaXMubmV3RGVwcztcbiAgdGhpcy5uZXdEZXBzID0gdG1wO1xuICB0aGlzLm5ld0RlcHMubGVuZ3RoID0gMDtcbn07XG5cbi8qKlxuICogU3Vic2NyaWJlciBpbnRlcmZhY2UuXG4gKiBXaWxsIGJlIGNhbGxlZCB3aGVuIGEgZGVwZW5kZW5jeSBjaGFuZ2VzLlxuICpcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gc2hhbGxvd1xuICovXG5cbldhdGNoZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChzaGFsbG93KSB7XG4gIGlmICh0aGlzLmxhenkpIHtcbiAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgfSBlbHNlIGlmICh0aGlzLnN5bmMgfHwgIWNvbmZpZy5hc3luYykge1xuICAgIHRoaXMucnVuKCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gaWYgcXVldWVkLCBvbmx5IG92ZXJ3cml0ZSBzaGFsbG93IHdpdGggbm9uLXNoYWxsb3csXG4gICAgLy8gYnV0IG5vdCB0aGUgb3RoZXIgd2F5IGFyb3VuZC5cbiAgICB0aGlzLnNoYWxsb3cgPSB0aGlzLnF1ZXVlZCA/IHNoYWxsb3cgPyB0aGlzLnNoYWxsb3cgOiBmYWxzZSA6ICEhc2hhbGxvdztcbiAgICB0aGlzLnF1ZXVlZCA9IHRydWU7XG4gICAgLy8gcmVjb3JkIGJlZm9yZS1wdXNoIGVycm9yIHN0YWNrIGluIGRlYnVnIG1vZGVcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBjb25maWcuZGVidWcpIHtcbiAgICAgIHRoaXMucHJldkVycm9yID0gbmV3IEVycm9yKCdbdnVlXSBhc3luYyBzdGFjayB0cmFjZScpO1xuICAgIH1cbiAgICBwdXNoV2F0Y2hlcih0aGlzKTtcbiAgfVxufTtcblxuLyoqXG4gKiBCYXRjaGVyIGpvYiBpbnRlcmZhY2UuXG4gKiBXaWxsIGJlIGNhbGxlZCBieSB0aGUgYmF0Y2hlci5cbiAqL1xuXG5XYXRjaGVyLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgIHZhciB2YWx1ZSA9IHRoaXMuZ2V0KCk7XG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLnZhbHVlIHx8XG4gICAgLy8gRGVlcCB3YXRjaGVycyBhbmQgd2F0Y2hlcnMgb24gT2JqZWN0L0FycmF5cyBzaG91bGQgZmlyZSBldmVuXG4gICAgLy8gd2hlbiB0aGUgdmFsdWUgaXMgdGhlIHNhbWUsIGJlY2F1c2UgdGhlIHZhbHVlIG1heVxuICAgIC8vIGhhdmUgbXV0YXRlZDsgYnV0IG9ubHkgZG8gc28gaWYgdGhpcyBpcyBhXG4gICAgLy8gbm9uLXNoYWxsb3cgdXBkYXRlIChjYXVzZWQgYnkgYSB2bSBkaWdlc3QpLlxuICAgIChpc09iamVjdCh2YWx1ZSkgfHwgdGhpcy5kZWVwKSAmJiAhdGhpcy5zaGFsbG93KSB7XG4gICAgICAvLyBzZXQgbmV3IHZhbHVlXG4gICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgLy8gaW4gZGVidWcgKyBhc3luYyBtb2RlLCB3aGVuIGEgd2F0Y2hlciBjYWxsYmFja3NcbiAgICAgIC8vIHRocm93cywgd2UgYWxzbyB0aHJvdyB0aGUgc2F2ZWQgYmVmb3JlLXB1c2ggZXJyb3JcbiAgICAgIC8vIHNvIHRoZSBmdWxsIGNyb3NzLXRpY2sgc3RhY2sgdHJhY2UgaXMgYXZhaWxhYmxlLlxuICAgICAgdmFyIHByZXZFcnJvciA9IHRoaXMucHJldkVycm9yO1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBjb25maWcuZGVidWcgJiYgcHJldkVycm9yKSB7XG4gICAgICAgIHRoaXMucHJldkVycm9yID0gbnVsbDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGlzLmNiLmNhbGwodGhpcy52bSwgdmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRocm93IHByZXZFcnJvcjtcbiAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNiLmNhbGwodGhpcy52bSwgdmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5xdWV1ZWQgPSB0aGlzLnNoYWxsb3cgPSBmYWxzZTtcbiAgfVxufTtcblxuLyoqXG4gKiBFdmFsdWF0ZSB0aGUgdmFsdWUgb2YgdGhlIHdhdGNoZXIuXG4gKiBUaGlzIG9ubHkgZ2V0cyBjYWxsZWQgZm9yIGxhenkgd2F0Y2hlcnMuXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUuZXZhbHVhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIGF2b2lkIG92ZXJ3cml0aW5nIGFub3RoZXIgd2F0Y2hlciB0aGF0IGlzIGJlaW5nXG4gIC8vIGNvbGxlY3RlZC5cbiAgdmFyIGN1cnJlbnQgPSBEZXAudGFyZ2V0O1xuICB0aGlzLnZhbHVlID0gdGhpcy5nZXQoKTtcbiAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xuICBEZXAudGFyZ2V0ID0gY3VycmVudDtcbn07XG5cbi8qKlxuICogRGVwZW5kIG9uIGFsbCBkZXBzIGNvbGxlY3RlZCBieSB0aGlzIHdhdGNoZXIuXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUuZGVwZW5kID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaSA9IHRoaXMuZGVwcy5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICB0aGlzLmRlcHNbaV0uZGVwZW5kKCk7XG4gIH1cbn07XG5cbi8qKlxuICogUmVtb3ZlIHNlbGYgZnJvbSBhbGwgZGVwZW5kZW5jaWVzJyBzdWJjcmliZXIgbGlzdC5cbiAqL1xuXG5XYXRjaGVyLnByb3RvdHlwZS50ZWFyZG93biA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgLy8gcmVtb3ZlIHNlbGYgZnJvbSB2bSdzIHdhdGNoZXIgbGlzdFxuICAgIC8vIHRoaXMgaXMgYSBzb21ld2hhdCBleHBlbnNpdmUgb3BlcmF0aW9uIHNvIHdlIHNraXAgaXRcbiAgICAvLyBpZiB0aGUgdm0gaXMgYmVpbmcgZGVzdHJveWVkIG9yIGlzIHBlcmZvcm1pbmcgYSB2LWZvclxuICAgIC8vIHJlLXJlbmRlciAodGhlIHdhdGNoZXIgbGlzdCBpcyB0aGVuIGZpbHRlcmVkIGJ5IHYtZm9yKS5cbiAgICBpZiAoIXRoaXMudm0uX2lzQmVpbmdEZXN0cm95ZWQgJiYgIXRoaXMudm0uX3ZGb3JSZW1vdmluZykge1xuICAgICAgdGhpcy52bS5fd2F0Y2hlcnMuJHJlbW92ZSh0aGlzKTtcbiAgICB9XG4gICAgdmFyIGkgPSB0aGlzLmRlcHMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHRoaXMuZGVwc1tpXS5yZW1vdmVTdWIodGhpcyk7XG4gICAgfVxuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy52bSA9IHRoaXMuY2IgPSB0aGlzLnZhbHVlID0gbnVsbDtcbiAgfVxufTtcblxuLyoqXG4gKiBSZWNydXNpdmVseSB0cmF2ZXJzZSBhbiBvYmplY3QgdG8gZXZva2UgYWxsIGNvbnZlcnRlZFxuICogZ2V0dGVycywgc28gdGhhdCBldmVyeSBuZXN0ZWQgcHJvcGVydHkgaW5zaWRlIHRoZSBvYmplY3RcbiAqIGlzIGNvbGxlY3RlZCBhcyBhIFwiZGVlcFwiIGRlcGVuZGVuY3kuXG4gKlxuICogQHBhcmFtIHsqfSB2YWxcbiAqL1xuXG52YXIgc2Vlbk9iamVjdHMgPSBuZXcgX1NldCgpO1xuZnVuY3Rpb24gdHJhdmVyc2UodmFsLCBzZWVuKSB7XG4gIHZhciBpID0gdW5kZWZpbmVkLFxuICAgICAga2V5cyA9IHVuZGVmaW5lZDtcbiAgaWYgKCFzZWVuKSB7XG4gICAgc2VlbiA9IHNlZW5PYmplY3RzO1xuICAgIHNlZW4uY2xlYXIoKTtcbiAgfVxuICB2YXIgaXNBID0gaXNBcnJheSh2YWwpO1xuICB2YXIgaXNPID0gaXNPYmplY3QodmFsKTtcbiAgaWYgKChpc0EgfHwgaXNPKSAmJiBPYmplY3QuaXNFeHRlbnNpYmxlKHZhbCkpIHtcbiAgICBpZiAodmFsLl9fb2JfXykge1xuICAgICAgdmFyIGRlcElkID0gdmFsLl9fb2JfXy5kZXAuaWQ7XG4gICAgICBpZiAoc2Vlbi5oYXMoZGVwSWQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlZW4uYWRkKGRlcElkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzQSkge1xuICAgICAgaSA9IHZhbC5sZW5ndGg7XG4gICAgICB3aGlsZSAoaS0tKSB0cmF2ZXJzZSh2YWxbaV0sIHNlZW4pO1xuICAgIH0gZWxzZSBpZiAoaXNPKSB7XG4gICAgICBrZXlzID0gT2JqZWN0LmtleXModmFsKTtcbiAgICAgIGkgPSBrZXlzLmxlbmd0aDtcbiAgICAgIHdoaWxlIChpLS0pIHRyYXZlcnNlKHZhbFtrZXlzW2ldXSwgc2Vlbik7XG4gICAgfVxuICB9XG59XG5cbnZhciB0ZXh0JDEgPSB7XG5cbiAgYmluZDogZnVuY3Rpb24gYmluZCgpIHtcbiAgICB0aGlzLmF0dHIgPSB0aGlzLmVsLm5vZGVUeXBlID09PSAzID8gJ2RhdGEnIDogJ3RleHRDb250ZW50JztcbiAgfSxcblxuICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSh2YWx1ZSkge1xuICAgIHRoaXMuZWxbdGhpcy5hdHRyXSA9IF90b1N0cmluZyh2YWx1ZSk7XG4gIH1cbn07XG5cbnZhciB0ZW1wbGF0ZUNhY2hlID0gbmV3IENhY2hlKDEwMDApO1xudmFyIGlkU2VsZWN0b3JDYWNoZSA9IG5ldyBDYWNoZSgxMDAwKTtcblxudmFyIG1hcCA9IHtcbiAgZWZhdWx0OiBbMCwgJycsICcnXSxcbiAgbGVnZW5kOiBbMSwgJzxmaWVsZHNldD4nLCAnPC9maWVsZHNldD4nXSxcbiAgdHI6IFsyLCAnPHRhYmxlPjx0Ym9keT4nLCAnPC90Ym9keT48L3RhYmxlPiddLFxuICBjb2w6IFsyLCAnPHRhYmxlPjx0Ym9keT48L3Rib2R5Pjxjb2xncm91cD4nLCAnPC9jb2xncm91cD48L3RhYmxlPiddXG59O1xuXG5tYXAudGQgPSBtYXAudGggPSBbMywgJzx0YWJsZT48dGJvZHk+PHRyPicsICc8L3RyPjwvdGJvZHk+PC90YWJsZT4nXTtcblxubWFwLm9wdGlvbiA9IG1hcC5vcHRncm91cCA9IFsxLCAnPHNlbGVjdCBtdWx0aXBsZT1cIm11bHRpcGxlXCI+JywgJzwvc2VsZWN0PiddO1xuXG5tYXAudGhlYWQgPSBtYXAudGJvZHkgPSBtYXAuY29sZ3JvdXAgPSBtYXAuY2FwdGlvbiA9IG1hcC50Zm9vdCA9IFsxLCAnPHRhYmxlPicsICc8L3RhYmxlPiddO1xuXG5tYXAuZyA9IG1hcC5kZWZzID0gbWFwLnN5bWJvbCA9IG1hcC51c2UgPSBtYXAuaW1hZ2UgPSBtYXAudGV4dCA9IG1hcC5jaXJjbGUgPSBtYXAuZWxsaXBzZSA9IG1hcC5saW5lID0gbWFwLnBhdGggPSBtYXAucG9seWdvbiA9IG1hcC5wb2x5bGluZSA9IG1hcC5yZWN0ID0gWzEsICc8c3ZnICcgKyAneG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiICcgKyAneG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgJyArICd4bWxuczpldj1cImh0dHA6Ly93d3cudzMub3JnLzIwMDEveG1sLWV2ZW50c1wiJyArICd2ZXJzaW9uPVwiMS4xXCI+JywgJzwvc3ZnPiddO1xuXG4vKipcbiAqIENoZWNrIGlmIGEgbm9kZSBpcyBhIHN1cHBvcnRlZCB0ZW1wbGF0ZSBub2RlIHdpdGggYVxuICogRG9jdW1lbnRGcmFnbWVudCBjb250ZW50LlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5mdW5jdGlvbiBpc1JlYWxUZW1wbGF0ZShub2RlKSB7XG4gIHJldHVybiBpc1RlbXBsYXRlKG5vZGUpICYmIGlzRnJhZ21lbnQobm9kZS5jb250ZW50KTtcbn1cblxudmFyIHRhZ1JFJDEgPSAvPChbXFx3Oi1dKykvO1xudmFyIGVudGl0eVJFID0gLyYjP1xcdys/Oy87XG52YXIgY29tbWVudFJFID0gLzwhLS0vO1xuXG4vKipcbiAqIENvbnZlcnQgYSBzdHJpbmcgdGVtcGxhdGUgdG8gYSBEb2N1bWVudEZyYWdtZW50LlxuICogRGV0ZXJtaW5lcyBjb3JyZWN0IHdyYXBwaW5nIGJ5IHRhZyB0eXBlcy4gV3JhcHBpbmdcbiAqIHN0cmF0ZWd5IGZvdW5kIGluIGpRdWVyeSAmIGNvbXBvbmVudC9kb21pZnkuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHRlbXBsYXRlU3RyaW5nXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHJhd1xuICogQHJldHVybiB7RG9jdW1lbnRGcmFnbWVudH1cbiAqL1xuXG5mdW5jdGlvbiBzdHJpbmdUb0ZyYWdtZW50KHRlbXBsYXRlU3RyaW5nLCByYXcpIHtcbiAgLy8gdHJ5IGEgY2FjaGUgaGl0IGZpcnN0XG4gIHZhciBjYWNoZUtleSA9IHJhdyA/IHRlbXBsYXRlU3RyaW5nIDogdGVtcGxhdGVTdHJpbmcudHJpbSgpO1xuICB2YXIgaGl0ID0gdGVtcGxhdGVDYWNoZS5nZXQoY2FjaGVLZXkpO1xuICBpZiAoaGl0KSB7XG4gICAgcmV0dXJuIGhpdDtcbiAgfVxuXG4gIHZhciBmcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICB2YXIgdGFnTWF0Y2ggPSB0ZW1wbGF0ZVN0cmluZy5tYXRjaCh0YWdSRSQxKTtcbiAgdmFyIGVudGl0eU1hdGNoID0gZW50aXR5UkUudGVzdCh0ZW1wbGF0ZVN0cmluZyk7XG4gIHZhciBjb21tZW50TWF0Y2ggPSBjb21tZW50UkUudGVzdCh0ZW1wbGF0ZVN0cmluZyk7XG5cbiAgaWYgKCF0YWdNYXRjaCAmJiAhZW50aXR5TWF0Y2ggJiYgIWNvbW1lbnRNYXRjaCkge1xuICAgIC8vIHRleHQgb25seSwgcmV0dXJuIGEgc2luZ2xlIHRleHQgbm9kZS5cbiAgICBmcmFnLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRlbXBsYXRlU3RyaW5nKSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhZyA9IHRhZ01hdGNoICYmIHRhZ01hdGNoWzFdO1xuICAgIHZhciB3cmFwID0gbWFwW3RhZ10gfHwgbWFwLmVmYXVsdDtcbiAgICB2YXIgZGVwdGggPSB3cmFwWzBdO1xuICAgIHZhciBwcmVmaXggPSB3cmFwWzFdO1xuICAgIHZhciBzdWZmaXggPSB3cmFwWzJdO1xuICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBub2RlLmlubmVySFRNTCA9IHByZWZpeCArIHRlbXBsYXRlU3RyaW5nICsgc3VmZml4O1xuICAgIHdoaWxlIChkZXB0aC0tKSB7XG4gICAgICBub2RlID0gbm9kZS5sYXN0Q2hpbGQ7XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbmQtYXNzaWduICovXG4gICAgd2hpbGUgKGNoaWxkID0gbm9kZS5maXJzdENoaWxkKSB7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbmQtYXNzaWduICovXG4gICAgICBmcmFnLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFyYXcpIHtcbiAgICB0cmltTm9kZShmcmFnKTtcbiAgfVxuICB0ZW1wbGF0ZUNhY2hlLnB1dChjYWNoZUtleSwgZnJhZyk7XG4gIHJldHVybiBmcmFnO1xufVxuXG4vKipcbiAqIENvbnZlcnQgYSB0ZW1wbGF0ZSBub2RlIHRvIGEgRG9jdW1lbnRGcmFnbWVudC5cbiAqXG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqIEByZXR1cm4ge0RvY3VtZW50RnJhZ21lbnR9XG4gKi9cblxuZnVuY3Rpb24gbm9kZVRvRnJhZ21lbnQobm9kZSkge1xuICAvLyBpZiBpdHMgYSB0ZW1wbGF0ZSB0YWcgYW5kIHRoZSBicm93c2VyIHN1cHBvcnRzIGl0LFxuICAvLyBpdHMgY29udGVudCBpcyBhbHJlYWR5IGEgZG9jdW1lbnQgZnJhZ21lbnQuIEhvd2V2ZXIsIGlPUyBTYWZhcmkgaGFzXG4gIC8vIGJ1ZyB3aGVuIHVzaW5nIGRpcmVjdGx5IGNsb25lZCB0ZW1wbGF0ZSBjb250ZW50IHdpdGggdG91Y2hcbiAgLy8gZXZlbnRzIGFuZCBjYW4gY2F1c2UgY3Jhc2hlcyB3aGVuIHRoZSBub2RlcyBhcmUgcmVtb3ZlZCBmcm9tIERPTSwgc28gd2VcbiAgLy8gaGF2ZSB0byB0cmVhdCB0ZW1wbGF0ZSBlbGVtZW50cyBhcyBzdHJpbmcgdGVtcGxhdGVzLiAoIzI4MDUpXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoaXNSZWFsVGVtcGxhdGUobm9kZSkpIHtcbiAgICByZXR1cm4gc3RyaW5nVG9GcmFnbWVudChub2RlLmlubmVySFRNTCk7XG4gIH1cbiAgLy8gc2NyaXB0IHRlbXBsYXRlXG4gIGlmIChub2RlLnRhZ05hbWUgPT09ICdTQ1JJUFQnKSB7XG4gICAgcmV0dXJuIHN0cmluZ1RvRnJhZ21lbnQobm9kZS50ZXh0Q29udGVudCk7XG4gIH1cbiAgLy8gbm9ybWFsIG5vZGUsIGNsb25lIGl0IHRvIGF2b2lkIG11dGF0aW5nIHRoZSBvcmlnaW5hbFxuICB2YXIgY2xvbmVkTm9kZSA9IGNsb25lTm9kZShub2RlKTtcbiAgdmFyIGZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gIHZhciBjaGlsZDtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uZC1hc3NpZ24gKi9cbiAgd2hpbGUgKGNoaWxkID0gY2xvbmVkTm9kZS5maXJzdENoaWxkKSB7XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1jb25kLWFzc2lnbiAqL1xuICAgIGZyYWcuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICB9XG4gIHRyaW1Ob2RlKGZyYWcpO1xuICByZXR1cm4gZnJhZztcbn1cblxuLy8gVGVzdCBmb3IgdGhlIHByZXNlbmNlIG9mIHRoZSBTYWZhcmkgdGVtcGxhdGUgY2xvbmluZyBidWdcbi8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3d1Zy5jZ2k/aWQ9MTM3NzU1XG52YXIgaGFzQnJva2VuVGVtcGxhdGUgPSAoZnVuY3Rpb24gKCkge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoaW5Ccm93c2VyKSB7XG4gICAgdmFyIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhLmlubmVySFRNTCA9ICc8dGVtcGxhdGU+MTwvdGVtcGxhdGU+JztcbiAgICByZXR1cm4gIWEuY2xvbmVOb2RlKHRydWUpLmZpcnN0Q2hpbGQuaW5uZXJIVE1MO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufSkoKTtcblxuLy8gVGVzdCBmb3IgSUUxMC8xMSB0ZXh0YXJlYSBwbGFjZWhvbGRlciBjbG9uZSBidWdcbnZhciBoYXNUZXh0YXJlYUNsb25lQnVnID0gKGZ1bmN0aW9uICgpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKGluQnJvd3Nlcikge1xuICAgIHZhciB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICB0LnBsYWNlaG9sZGVyID0gJ3QnO1xuICAgIHJldHVybiB0LmNsb25lTm9kZSh0cnVlKS52YWx1ZSA9PT0gJ3QnO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufSkoKTtcblxuLyoqXG4gKiAxLiBEZWFsIHdpdGggU2FmYXJpIGNsb25pbmcgbmVzdGVkIDx0ZW1wbGF0ZT4gYnVnIGJ5XG4gKiAgICBtYW51YWxseSBjbG9uaW5nIGFsbCB0ZW1wbGF0ZSBpbnN0YW5jZXMuXG4gKiAyLiBEZWFsIHdpdGggSUUxMC8xMSB0ZXh0YXJlYSBwbGFjZWhvbGRlciBidWcgYnkgc2V0dGluZ1xuICogICAgdGhlIGNvcnJlY3QgdmFsdWUgYWZ0ZXIgY2xvbmluZy5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR8RG9jdW1lbnRGcmFnbWVudH0gbm9kZVxuICogQHJldHVybiB7RWxlbWVudHxEb2N1bWVudEZyYWdtZW50fVxuICovXG5cbmZ1bmN0aW9uIGNsb25lTm9kZShub2RlKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoIW5vZGUucXVlcnlTZWxlY3RvckFsbCkge1xuICAgIHJldHVybiBub2RlLmNsb25lTm9kZSgpO1xuICB9XG4gIHZhciByZXMgPSBub2RlLmNsb25lTm9kZSh0cnVlKTtcbiAgdmFyIGksIG9yaWdpbmFsLCBjbG9uZWQ7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoaGFzQnJva2VuVGVtcGxhdGUpIHtcbiAgICB2YXIgdGVtcENsb25lID0gcmVzO1xuICAgIGlmIChpc1JlYWxUZW1wbGF0ZShub2RlKSkge1xuICAgICAgbm9kZSA9IG5vZGUuY29udGVudDtcbiAgICAgIHRlbXBDbG9uZSA9IHJlcy5jb250ZW50O1xuICAgIH1cbiAgICBvcmlnaW5hbCA9IG5vZGUucXVlcnlTZWxlY3RvckFsbCgndGVtcGxhdGUnKTtcbiAgICBpZiAob3JpZ2luYWwubGVuZ3RoKSB7XG4gICAgICBjbG9uZWQgPSB0ZW1wQ2xvbmUucXVlcnlTZWxlY3RvckFsbCgndGVtcGxhdGUnKTtcbiAgICAgIGkgPSBjbG9uZWQubGVuZ3RoO1xuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICBjbG9uZWRbaV0ucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoY2xvbmVOb2RlKG9yaWdpbmFsW2ldKSwgY2xvbmVkW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChoYXNUZXh0YXJlYUNsb25lQnVnKSB7XG4gICAgaWYgKG5vZGUudGFnTmFtZSA9PT0gJ1RFWFRBUkVBJykge1xuICAgICAgcmVzLnZhbHVlID0gbm9kZS52YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3JpZ2luYWwgPSBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3RleHRhcmVhJyk7XG4gICAgICBpZiAob3JpZ2luYWwubGVuZ3RoKSB7XG4gICAgICAgIGNsb25lZCA9IHJlcy5xdWVyeVNlbGVjdG9yQWxsKCd0ZXh0YXJlYScpO1xuICAgICAgICBpID0gY2xvbmVkLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgIGNsb25lZFtpXS52YWx1ZSA9IG9yaWdpbmFsW2ldLnZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXM7XG59XG5cbi8qKlxuICogUHJvY2VzcyB0aGUgdGVtcGxhdGUgb3B0aW9uIGFuZCBub3JtYWxpemVzIGl0IGludG8gYVxuICogYSBEb2N1bWVudEZyYWdtZW50IHRoYXQgY2FuIGJlIHVzZWQgYXMgYSBwYXJ0aWFsIG9yIGFcbiAqIGluc3RhbmNlIHRlbXBsYXRlLlxuICpcbiAqIEBwYXJhbSB7Kn0gdGVtcGxhdGVcbiAqICAgICAgICBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTpcbiAqICAgICAgICAtIERvY3VtZW50RnJhZ21lbnQgb2JqZWN0XG4gKiAgICAgICAgLSBOb2RlIG9iamVjdCBvZiB0eXBlIFRlbXBsYXRlXG4gKiAgICAgICAgLSBpZCBzZWxlY3RvcjogJyNzb21lLXRlbXBsYXRlLWlkJ1xuICogICAgICAgIC0gdGVtcGxhdGUgc3RyaW5nOiAnPGRpdj48c3Bhbj57e21zZ319PC9zcGFuPjwvZGl2PidcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gc2hvdWxkQ2xvbmVcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gcmF3XG4gKiAgICAgICAgaW5saW5lIEhUTUwgaW50ZXJwb2xhdGlvbi4gRG8gbm90IGNoZWNrIGZvciBpZFxuICogICAgICAgIHNlbGVjdG9yIGFuZCBrZWVwIHdoaXRlc3BhY2UgaW4gdGhlIHN0cmluZy5cbiAqIEByZXR1cm4ge0RvY3VtZW50RnJhZ21lbnR8dW5kZWZpbmVkfVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlVGVtcGxhdGUodGVtcGxhdGUsIHNob3VsZENsb25lLCByYXcpIHtcbiAgdmFyIG5vZGUsIGZyYWc7XG5cbiAgLy8gaWYgdGhlIHRlbXBsYXRlIGlzIGFscmVhZHkgYSBkb2N1bWVudCBmcmFnbWVudCxcbiAgLy8gZG8gbm90aGluZ1xuICBpZiAoaXNGcmFnbWVudCh0ZW1wbGF0ZSkpIHtcbiAgICB0cmltTm9kZSh0ZW1wbGF0ZSk7XG4gICAgcmV0dXJuIHNob3VsZENsb25lID8gY2xvbmVOb2RlKHRlbXBsYXRlKSA6IHRlbXBsYXRlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0ZW1wbGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAvLyBpZCBzZWxlY3RvclxuICAgIGlmICghcmF3ICYmIHRlbXBsYXRlLmNoYXJBdCgwKSA9PT0gJyMnKSB7XG4gICAgICAvLyBpZCBzZWxlY3RvciBjYW4gYmUgY2FjaGVkIHRvb1xuICAgICAgZnJhZyA9IGlkU2VsZWN0b3JDYWNoZS5nZXQodGVtcGxhdGUpO1xuICAgICAgaWYgKCFmcmFnKSB7XG4gICAgICAgIG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0ZW1wbGF0ZS5zbGljZSgxKSk7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgZnJhZyA9IG5vZGVUb0ZyYWdtZW50KG5vZGUpO1xuICAgICAgICAgIC8vIHNhdmUgc2VsZWN0b3IgdG8gY2FjaGVcbiAgICAgICAgICBpZFNlbGVjdG9yQ2FjaGUucHV0KHRlbXBsYXRlLCBmcmFnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBub3JtYWwgc3RyaW5nIHRlbXBsYXRlXG4gICAgICBmcmFnID0gc3RyaW5nVG9GcmFnbWVudCh0ZW1wbGF0ZSwgcmF3KTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodGVtcGxhdGUubm9kZVR5cGUpIHtcbiAgICAvLyBhIGRpcmVjdCBub2RlXG4gICAgZnJhZyA9IG5vZGVUb0ZyYWdtZW50KHRlbXBsYXRlKTtcbiAgfVxuXG4gIHJldHVybiBmcmFnICYmIHNob3VsZENsb25lID8gY2xvbmVOb2RlKGZyYWcpIDogZnJhZztcbn1cblxudmFyIHRlbXBsYXRlID0gT2JqZWN0LmZyZWV6ZSh7XG4gIGNsb25lTm9kZTogY2xvbmVOb2RlLFxuICBwYXJzZVRlbXBsYXRlOiBwYXJzZVRlbXBsYXRlXG59KTtcblxudmFyIGh0bWwgPSB7XG5cbiAgYmluZDogZnVuY3Rpb24gYmluZCgpIHtcbiAgICAvLyBhIGNvbW1lbnQgbm9kZSBtZWFucyB0aGlzIGlzIGEgYmluZGluZyBmb3JcbiAgICAvLyB7e3sgaW5saW5lIHVuZXNjYXBlZCBodG1sIH19fVxuICAgIGlmICh0aGlzLmVsLm5vZGVUeXBlID09PSA4KSB7XG4gICAgICAvLyBob2xkIG5vZGVzXG4gICAgICB0aGlzLm5vZGVzID0gW107XG4gICAgICAvLyByZXBsYWNlIHRoZSBwbGFjZWhvbGRlciB3aXRoIHByb3BlciBhbmNob3JcbiAgICAgIHRoaXMuYW5jaG9yID0gY3JlYXRlQW5jaG9yKCd2LWh0bWwnKTtcbiAgICAgIHJlcGxhY2UodGhpcy5lbCwgdGhpcy5hbmNob3IpO1xuICAgIH1cbiAgfSxcblxuICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSh2YWx1ZSkge1xuICAgIHZhbHVlID0gX3RvU3RyaW5nKHZhbHVlKTtcbiAgICBpZiAodGhpcy5ub2Rlcykge1xuICAgICAgdGhpcy5zd2FwKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSB2YWx1ZTtcbiAgICB9XG4gIH0sXG5cbiAgc3dhcDogZnVuY3Rpb24gc3dhcCh2YWx1ZSkge1xuICAgIC8vIHJlbW92ZSBvbGQgbm9kZXNcbiAgICB2YXIgaSA9IHRoaXMubm9kZXMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHJlbW92ZSh0aGlzLm5vZGVzW2ldKTtcbiAgICB9XG4gICAgLy8gY29udmVydCBuZXcgdmFsdWUgdG8gYSBmcmFnbWVudFxuICAgIC8vIGRvIG5vdCBhdHRlbXB0IHRvIHJldHJpZXZlIGZyb20gaWQgc2VsZWN0b3JcbiAgICB2YXIgZnJhZyA9IHBhcnNlVGVtcGxhdGUodmFsdWUsIHRydWUsIHRydWUpO1xuICAgIC8vIHNhdmUgYSByZWZlcmVuY2UgdG8gdGhlc2Ugbm9kZXMgc28gd2UgY2FuIHJlbW92ZSBsYXRlclxuICAgIHRoaXMubm9kZXMgPSB0b0FycmF5KGZyYWcuY2hpbGROb2Rlcyk7XG4gICAgYmVmb3JlKGZyYWcsIHRoaXMuYW5jaG9yKTtcbiAgfVxufTtcblxuLyoqXG4gKiBBYnN0cmFjdGlvbiBmb3IgYSBwYXJ0aWFsbHktY29tcGlsZWQgZnJhZ21lbnQuXG4gKiBDYW4gb3B0aW9uYWxseSBjb21waWxlIGNvbnRlbnQgd2l0aCBhIGNoaWxkIHNjb3BlLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGxpbmtlclxuICogQHBhcmFtIHtWdWV9IHZtXG4gKiBAcGFyYW0ge0RvY3VtZW50RnJhZ21lbnR9IGZyYWdcbiAqIEBwYXJhbSB7VnVlfSBbaG9zdF1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc2NvcGVdXG4gKiBAcGFyYW0ge0ZyYWdtZW50fSBbcGFyZW50RnJhZ11cbiAqL1xuZnVuY3Rpb24gRnJhZ21lbnQobGlua2VyLCB2bSwgZnJhZywgaG9zdCwgc2NvcGUsIHBhcmVudEZyYWcpIHtcbiAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICB0aGlzLmNoaWxkRnJhZ3MgPSBbXTtcbiAgdGhpcy52bSA9IHZtO1xuICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gIHRoaXMuaW5zZXJ0ZWQgPSBmYWxzZTtcbiAgdGhpcy5wYXJlbnRGcmFnID0gcGFyZW50RnJhZztcbiAgaWYgKHBhcmVudEZyYWcpIHtcbiAgICBwYXJlbnRGcmFnLmNoaWxkRnJhZ3MucHVzaCh0aGlzKTtcbiAgfVxuICB0aGlzLnVubGluayA9IGxpbmtlcih2bSwgZnJhZywgaG9zdCwgc2NvcGUsIHRoaXMpO1xuICB2YXIgc2luZ2xlID0gdGhpcy5zaW5nbGUgPSBmcmFnLmNoaWxkTm9kZXMubGVuZ3RoID09PSAxICYmXG4gIC8vIGRvIG5vdCBnbyBzaW5nbGUgbW9kZSBpZiB0aGUgb25seSBub2RlIGlzIGFuIGFuY2hvclxuICAhZnJhZy5jaGlsZE5vZGVzWzBdLl9fdl9hbmNob3I7XG4gIGlmIChzaW5nbGUpIHtcbiAgICB0aGlzLm5vZGUgPSBmcmFnLmNoaWxkTm9kZXNbMF07XG4gICAgdGhpcy5iZWZvcmUgPSBzaW5nbGVCZWZvcmU7XG4gICAgdGhpcy5yZW1vdmUgPSBzaW5nbGVSZW1vdmU7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5ub2RlID0gY3JlYXRlQW5jaG9yKCdmcmFnbWVudC1zdGFydCcpO1xuICAgIHRoaXMuZW5kID0gY3JlYXRlQW5jaG9yKCdmcmFnbWVudC1lbmQnKTtcbiAgICB0aGlzLmZyYWcgPSBmcmFnO1xuICAgIHByZXBlbmQodGhpcy5ub2RlLCBmcmFnKTtcbiAgICBmcmFnLmFwcGVuZENoaWxkKHRoaXMuZW5kKTtcbiAgICB0aGlzLmJlZm9yZSA9IG11bHRpQmVmb3JlO1xuICAgIHRoaXMucmVtb3ZlID0gbXVsdGlSZW1vdmU7XG4gIH1cbiAgdGhpcy5ub2RlLl9fdl9mcmFnID0gdGhpcztcbn1cblxuLyoqXG4gKiBDYWxsIGF0dGFjaC9kZXRhY2ggZm9yIGFsbCBjb21wb25lbnRzIGNvbnRhaW5lZCB3aXRoaW5cbiAqIHRoaXMgZnJhZ21lbnQuIEFsc28gZG8gc28gcmVjdXJzaXZlbHkgZm9yIGFsbCBjaGlsZFxuICogZnJhZ21lbnRzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGhvb2tcbiAqL1xuXG5GcmFnbWVudC5wcm90b3R5cGUuY2FsbEhvb2sgPSBmdW5jdGlvbiAoaG9vaykge1xuICB2YXIgaSwgbDtcbiAgZm9yIChpID0gMCwgbCA9IHRoaXMuY2hpbGRGcmFncy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICB0aGlzLmNoaWxkRnJhZ3NbaV0uY2FsbEhvb2soaG9vayk7XG4gIH1cbiAgZm9yIChpID0gMCwgbCA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaG9vayh0aGlzLmNoaWxkcmVuW2ldKTtcbiAgfVxufTtcblxuLyoqXG4gKiBJbnNlcnQgZnJhZ21lbnQgYmVmb3JlIHRhcmdldCwgc2luZ2xlIG5vZGUgdmVyc2lvblxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gdGFyZ2V0XG4gKiBAcGFyYW0ge0Jvb2xlYW59IHdpdGhUcmFuc2l0aW9uXG4gKi9cblxuZnVuY3Rpb24gc2luZ2xlQmVmb3JlKHRhcmdldCwgd2l0aFRyYW5zaXRpb24pIHtcbiAgdGhpcy5pbnNlcnRlZCA9IHRydWU7XG4gIHZhciBtZXRob2QgPSB3aXRoVHJhbnNpdGlvbiAhPT0gZmFsc2UgPyBiZWZvcmVXaXRoVHJhbnNpdGlvbiA6IGJlZm9yZTtcbiAgbWV0aG9kKHRoaXMubm9kZSwgdGFyZ2V0LCB0aGlzLnZtKTtcbiAgaWYgKGluRG9jKHRoaXMubm9kZSkpIHtcbiAgICB0aGlzLmNhbGxIb29rKGF0dGFjaCk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmUgZnJhZ21lbnQsIHNpbmdsZSBub2RlIHZlcnNpb25cbiAqL1xuXG5mdW5jdGlvbiBzaW5nbGVSZW1vdmUoKSB7XG4gIHRoaXMuaW5zZXJ0ZWQgPSBmYWxzZTtcbiAgdmFyIHNob3VsZENhbGxSZW1vdmUgPSBpbkRvYyh0aGlzLm5vZGUpO1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHRoaXMuYmVmb3JlUmVtb3ZlKCk7XG4gIHJlbW92ZVdpdGhUcmFuc2l0aW9uKHRoaXMubm9kZSwgdGhpcy52bSwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChzaG91bGRDYWxsUmVtb3ZlKSB7XG4gICAgICBzZWxmLmNhbGxIb29rKGRldGFjaCk7XG4gICAgfVxuICAgIHNlbGYuZGVzdHJveSgpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBJbnNlcnQgZnJhZ21lbnQgYmVmb3JlIHRhcmdldCwgbXVsdGktbm9kZXMgdmVyc2lvblxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gdGFyZ2V0XG4gKiBAcGFyYW0ge0Jvb2xlYW59IHdpdGhUcmFuc2l0aW9uXG4gKi9cblxuZnVuY3Rpb24gbXVsdGlCZWZvcmUodGFyZ2V0LCB3aXRoVHJhbnNpdGlvbikge1xuICB0aGlzLmluc2VydGVkID0gdHJ1ZTtcbiAgdmFyIHZtID0gdGhpcy52bTtcbiAgdmFyIG1ldGhvZCA9IHdpdGhUcmFuc2l0aW9uICE9PSBmYWxzZSA/IGJlZm9yZVdpdGhUcmFuc2l0aW9uIDogYmVmb3JlO1xuICBtYXBOb2RlUmFuZ2UodGhpcy5ub2RlLCB0aGlzLmVuZCwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICBtZXRob2Qobm9kZSwgdGFyZ2V0LCB2bSk7XG4gIH0pO1xuICBpZiAoaW5Eb2ModGhpcy5ub2RlKSkge1xuICAgIHRoaXMuY2FsbEhvb2soYXR0YWNoKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSBmcmFnbWVudCwgbXVsdGktbm9kZXMgdmVyc2lvblxuICovXG5cbmZ1bmN0aW9uIG11bHRpUmVtb3ZlKCkge1xuICB0aGlzLmluc2VydGVkID0gZmFsc2U7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIHNob3VsZENhbGxSZW1vdmUgPSBpbkRvYyh0aGlzLm5vZGUpO1xuICB0aGlzLmJlZm9yZVJlbW92ZSgpO1xuICByZW1vdmVOb2RlUmFuZ2UodGhpcy5ub2RlLCB0aGlzLmVuZCwgdGhpcy52bSwgdGhpcy5mcmFnLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHNob3VsZENhbGxSZW1vdmUpIHtcbiAgICAgIHNlbGYuY2FsbEhvb2soZGV0YWNoKTtcbiAgICB9XG4gICAgc2VsZi5kZXN0cm95KCk7XG4gIH0pO1xufVxuXG4vKipcbiAqIFByZXBhcmUgdGhlIGZyYWdtZW50IGZvciByZW1vdmFsLlxuICovXG5cbkZyYWdtZW50LnByb3RvdHlwZS5iZWZvcmVSZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBpLCBsO1xuICBmb3IgKGkgPSAwLCBsID0gdGhpcy5jaGlsZEZyYWdzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIC8vIGNhbGwgdGhlIHNhbWUgbWV0aG9kIHJlY3Vyc2l2ZWx5IG9uIGNoaWxkXG4gICAgLy8gZnJhZ21lbnRzLCBkZXB0aC1maXJzdFxuICAgIHRoaXMuY2hpbGRGcmFnc1tpXS5iZWZvcmVSZW1vdmUoZmFsc2UpO1xuICB9XG4gIGZvciAoaSA9IDAsIGwgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIC8vIENhbGwgZGVzdHJveSBmb3IgYWxsIGNvbnRhaW5lZCBpbnN0YW5jZXMsXG4gICAgLy8gd2l0aCByZW1vdmU6ZmFsc2UgYW5kIGRlZmVyOnRydWUuXG4gICAgLy8gRGVmZXIgaXMgbmVjZXNzYXJ5IGJlY2F1c2Ugd2UgbmVlZCB0b1xuICAgIC8vIGtlZXAgdGhlIGNoaWxkcmVuIHRvIGNhbGwgZGV0YWNoIGhvb2tzXG4gICAgLy8gb24gdGhlbS5cbiAgICB0aGlzLmNoaWxkcmVuW2ldLiRkZXN0cm95KGZhbHNlLCB0cnVlKTtcbiAgfVxuICB2YXIgZGlycyA9IHRoaXMudW5saW5rLmRpcnM7XG4gIGZvciAoaSA9IDAsIGwgPSBkaXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIC8vIGRpc2FibGUgdGhlIHdhdGNoZXJzIG9uIGFsbCB0aGUgZGlyZWN0aXZlc1xuICAgIC8vIHNvIHRoYXQgdGhlIHJlbmRlcmVkIGNvbnRlbnQgc3RheXMgdGhlIHNhbWVcbiAgICAvLyBkdXJpbmcgcmVtb3ZhbC5cbiAgICBkaXJzW2ldLl93YXRjaGVyICYmIGRpcnNbaV0uX3dhdGNoZXIudGVhcmRvd24oKTtcbiAgfVxufTtcblxuLyoqXG4gKiBEZXN0cm95IHRoZSBmcmFnbWVudC5cbiAqL1xuXG5GcmFnbWVudC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMucGFyZW50RnJhZykge1xuICAgIHRoaXMucGFyZW50RnJhZy5jaGlsZEZyYWdzLiRyZW1vdmUodGhpcyk7XG4gIH1cbiAgdGhpcy5ub2RlLl9fdl9mcmFnID0gbnVsbDtcbiAgdGhpcy51bmxpbmsoKTtcbn07XG5cbi8qKlxuICogQ2FsbCBhdHRhY2ggaG9vayBmb3IgYSBWdWUgaW5zdGFuY2UuXG4gKlxuICogQHBhcmFtIHtWdWV9IGNoaWxkXG4gKi9cblxuZnVuY3Rpb24gYXR0YWNoKGNoaWxkKSB7XG4gIGlmICghY2hpbGQuX2lzQXR0YWNoZWQgJiYgaW5Eb2MoY2hpbGQuJGVsKSkge1xuICAgIGNoaWxkLl9jYWxsSG9vaygnYXR0YWNoZWQnKTtcbiAgfVxufVxuXG4vKipcbiAqIENhbGwgZGV0YWNoIGhvb2sgZm9yIGEgVnVlIGluc3RhbmNlLlxuICpcbiAqIEBwYXJhbSB7VnVlfSBjaGlsZFxuICovXG5cbmZ1bmN0aW9uIGRldGFjaChjaGlsZCkge1xuICBpZiAoY2hpbGQuX2lzQXR0YWNoZWQgJiYgIWluRG9jKGNoaWxkLiRlbCkpIHtcbiAgICBjaGlsZC5fY2FsbEhvb2soJ2RldGFjaGVkJyk7XG4gIH1cbn1cblxudmFyIGxpbmtlckNhY2hlID0gbmV3IENhY2hlKDUwMDApO1xuXG4vKipcbiAqIEEgZmFjdG9yeSB0aGF0IGNhbiBiZSB1c2VkIHRvIGNyZWF0ZSBpbnN0YW5jZXMgb2YgYVxuICogZnJhZ21lbnQuIENhY2hlcyB0aGUgY29tcGlsZWQgbGlua2VyIGlmIHBvc3NpYmxlLlxuICpcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICogQHBhcmFtIHtFbGVtZW50fFN0cmluZ30gZWxcbiAqL1xuZnVuY3Rpb24gRnJhZ21lbnRGYWN0b3J5KHZtLCBlbCkge1xuICB0aGlzLnZtID0gdm07XG4gIHZhciB0ZW1wbGF0ZTtcbiAgdmFyIGlzU3RyaW5nID0gdHlwZW9mIGVsID09PSAnc3RyaW5nJztcbiAgaWYgKGlzU3RyaW5nIHx8IGlzVGVtcGxhdGUoZWwpICYmICFlbC5oYXNBdHRyaWJ1dGUoJ3YtaWYnKSkge1xuICAgIHRlbXBsYXRlID0gcGFyc2VUZW1wbGF0ZShlbCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgdGVtcGxhdGUuYXBwZW5kQ2hpbGQoZWwpO1xuICB9XG4gIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgLy8gbGlua2VyIGNhbiBiZSBjYWNoZWQsIGJ1dCBvbmx5IGZvciBjb21wb25lbnRzXG4gIHZhciBsaW5rZXI7XG4gIHZhciBjaWQgPSB2bS5jb25zdHJ1Y3Rvci5jaWQ7XG4gIGlmIChjaWQgPiAwKSB7XG4gICAgdmFyIGNhY2hlSWQgPSBjaWQgKyAoaXNTdHJpbmcgPyBlbCA6IGdldE91dGVySFRNTChlbCkpO1xuICAgIGxpbmtlciA9IGxpbmtlckNhY2hlLmdldChjYWNoZUlkKTtcbiAgICBpZiAoIWxpbmtlcikge1xuICAgICAgbGlua2VyID0gY29tcGlsZSh0ZW1wbGF0ZSwgdm0uJG9wdGlvbnMsIHRydWUpO1xuICAgICAgbGlua2VyQ2FjaGUucHV0KGNhY2hlSWQsIGxpbmtlcik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGxpbmtlciA9IGNvbXBpbGUodGVtcGxhdGUsIHZtLiRvcHRpb25zLCB0cnVlKTtcbiAgfVxuICB0aGlzLmxpbmtlciA9IGxpbmtlcjtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBmcmFnbWVudCBpbnN0YW5jZSB3aXRoIGdpdmVuIGhvc3QgYW5kIHNjb3BlLlxuICpcbiAqIEBwYXJhbSB7VnVlfSBob3N0XG4gKiBAcGFyYW0ge09iamVjdH0gc2NvcGVcbiAqIEBwYXJhbSB7RnJhZ21lbnR9IHBhcmVudEZyYWdcbiAqL1xuXG5GcmFnbWVudEZhY3RvcnkucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uIChob3N0LCBzY29wZSwgcGFyZW50RnJhZykge1xuICB2YXIgZnJhZyA9IGNsb25lTm9kZSh0aGlzLnRlbXBsYXRlKTtcbiAgcmV0dXJuIG5ldyBGcmFnbWVudCh0aGlzLmxpbmtlciwgdGhpcy52bSwgZnJhZywgaG9zdCwgc2NvcGUsIHBhcmVudEZyYWcpO1xufTtcblxudmFyIE9OID0gNzAwO1xudmFyIE1PREVMID0gODAwO1xudmFyIEJJTkQgPSA4NTA7XG52YXIgVFJBTlNJVElPTiA9IDExMDA7XG52YXIgRUwgPSAxNTAwO1xudmFyIENPTVBPTkVOVCA9IDE1MDA7XG52YXIgUEFSVElBTCA9IDE3NTA7XG52YXIgSUYgPSAyMTAwO1xudmFyIEZPUiA9IDIyMDA7XG52YXIgU0xPVCA9IDIzMDA7XG5cbnZhciB1aWQkMyA9IDA7XG5cbnZhciB2Rm9yID0ge1xuXG4gIHByaW9yaXR5OiBGT1IsXG4gIHRlcm1pbmFsOiB0cnVlLFxuXG4gIHBhcmFtczogWyd0cmFjay1ieScsICdzdGFnZ2VyJywgJ2VudGVyLXN0YWdnZXInLCAnbGVhdmUtc3RhZ2dlciddLFxuXG4gIGJpbmQ6IGZ1bmN0aW9uIGJpbmQoKSB7XG4gICAgLy8gc3VwcG9ydCBcIml0ZW0gaW4vb2YgaXRlbXNcIiBzeW50YXhcbiAgICB2YXIgaW5NYXRjaCA9IHRoaXMuZXhwcmVzc2lvbi5tYXRjaCgvKC4qKSAoPzppbnxvZikgKC4qKS8pO1xuICAgIGlmIChpbk1hdGNoKSB7XG4gICAgICB2YXIgaXRNYXRjaCA9IGluTWF0Y2hbMV0ubWF0Y2goL1xcKCguKiksKC4qKVxcKS8pO1xuICAgICAgaWYgKGl0TWF0Y2gpIHtcbiAgICAgICAgdGhpcy5pdGVyYXRvciA9IGl0TWF0Y2hbMV0udHJpbSgpO1xuICAgICAgICB0aGlzLmFsaWFzID0gaXRNYXRjaFsyXS50cmltKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFsaWFzID0gaW5NYXRjaFsxXS50cmltKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmV4cHJlc3Npb24gPSBpbk1hdGNoWzJdO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5hbGlhcykge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKCdJbnZhbGlkIHYtZm9yIGV4cHJlc3Npb24gXCInICsgdGhpcy5kZXNjcmlwdG9yLnJhdyArICdcIjogJyArICdhbGlhcyBpcyByZXF1aXJlZC4nLCB0aGlzLnZtKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyB1aWQgYXMgYSBjYWNoZSBpZGVudGlmaWVyXG4gICAgdGhpcy5pZCA9ICdfX3YtZm9yX18nICsgKyt1aWQkMztcblxuICAgIC8vIGNoZWNrIGlmIHRoaXMgaXMgYW4gb3B0aW9uIGxpc3QsXG4gICAgLy8gc28gdGhhdCB3ZSBrbm93IGlmIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSA8c2VsZWN0PidzXG4gICAgLy8gdi1tb2RlbCB3aGVuIHRoZSBvcHRpb24gbGlzdCBoYXMgY2hhbmdlZC5cbiAgICAvLyBiZWNhdXNlIHYtbW9kZWwgaGFzIGEgbG93ZXIgcHJpb3JpdHkgdGhhbiB2LWZvcixcbiAgICAvLyB0aGUgdi1tb2RlbCBpcyBub3QgYm91bmQgaGVyZSB5ZXQsIHNvIHdlIGhhdmUgdG9cbiAgICAvLyByZXRyaXZlIGl0IGluIHRoZSBhY3R1YWwgdXBkYXRlTW9kZWwoKSBmdW5jdGlvbi5cbiAgICB2YXIgdGFnID0gdGhpcy5lbC50YWdOYW1lO1xuICAgIHRoaXMuaXNPcHRpb24gPSAodGFnID09PSAnT1BUSU9OJyB8fCB0YWcgPT09ICdPUFRHUk9VUCcpICYmIHRoaXMuZWwucGFyZW50Tm9kZS50YWdOYW1lID09PSAnU0VMRUNUJztcblxuICAgIC8vIHNldHVwIGFuY2hvciBub2Rlc1xuICAgIHRoaXMuc3RhcnQgPSBjcmVhdGVBbmNob3IoJ3YtZm9yLXN0YXJ0Jyk7XG4gICAgdGhpcy5lbmQgPSBjcmVhdGVBbmNob3IoJ3YtZm9yLWVuZCcpO1xuICAgIHJlcGxhY2UodGhpcy5lbCwgdGhpcy5lbmQpO1xuICAgIGJlZm9yZSh0aGlzLnN0YXJ0LCB0aGlzLmVuZCk7XG5cbiAgICAvLyBjYWNoZVxuICAgIHRoaXMuY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gICAgLy8gZnJhZ21lbnQgZmFjdG9yeVxuICAgIHRoaXMuZmFjdG9yeSA9IG5ldyBGcmFnbWVudEZhY3RvcnkodGhpcy52bSwgdGhpcy5lbCk7XG4gIH0sXG5cbiAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoZGF0YSkge1xuICAgIHRoaXMuZGlmZihkYXRhKTtcbiAgICB0aGlzLnVwZGF0ZVJlZigpO1xuICAgIHRoaXMudXBkYXRlTW9kZWwoKTtcbiAgfSxcblxuICAvKipcbiAgICogRGlmZiwgYmFzZWQgb24gbmV3IGRhdGEgYW5kIG9sZCBkYXRhLCBkZXRlcm1pbmUgdGhlXG4gICAqIG1pbmltdW0gYW1vdW50IG9mIERPTSBtYW5pcHVsYXRpb25zIG5lZWRlZCB0byBtYWtlIHRoZVxuICAgKiBET00gcmVmbGVjdCB0aGUgbmV3IGRhdGEgQXJyYXkuXG4gICAqXG4gICAqIFRoZSBhbGdvcml0aG0gZGlmZnMgdGhlIG5ldyBkYXRhIEFycmF5IGJ5IHN0b3JpbmcgYVxuICAgKiBoaWRkZW4gcmVmZXJlbmNlIHRvIGFuIG93bmVyIHZtIGluc3RhbmNlIG9uIHByZXZpb3VzbHlcbiAgICogc2VlbiBkYXRhLiBUaGlzIGFsbG93cyB1cyB0byBhY2hpZXZlIE8obikgd2hpY2ggaXNcbiAgICogYmV0dGVyIHRoYW4gYSBsZXZlbnNodGVpbiBkaXN0YW5jZSBiYXNlZCBhbGdvcml0aG0sXG4gICAqIHdoaWNoIGlzIE8obSAqIG4pLlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBkYXRhXG4gICAqL1xuXG4gIGRpZmY6IGZ1bmN0aW9uIGRpZmYoZGF0YSkge1xuICAgIC8vIGNoZWNrIGlmIHRoZSBBcnJheSB3YXMgY29udmVydGVkIGZyb20gYW4gT2JqZWN0XG4gICAgdmFyIGl0ZW0gPSBkYXRhWzBdO1xuICAgIHZhciBjb252ZXJ0ZWRGcm9tT2JqZWN0ID0gdGhpcy5mcm9tT2JqZWN0ID0gaXNPYmplY3QoaXRlbSkgJiYgaGFzT3duKGl0ZW0sICcka2V5JykgJiYgaGFzT3duKGl0ZW0sICckdmFsdWUnKTtcblxuICAgIHZhciB0cmFja0J5S2V5ID0gdGhpcy5wYXJhbXMudHJhY2tCeTtcbiAgICB2YXIgb2xkRnJhZ3MgPSB0aGlzLmZyYWdzO1xuICAgIHZhciBmcmFncyA9IHRoaXMuZnJhZ3MgPSBuZXcgQXJyYXkoZGF0YS5sZW5ndGgpO1xuICAgIHZhciBhbGlhcyA9IHRoaXMuYWxpYXM7XG4gICAgdmFyIGl0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcjtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLnN0YXJ0O1xuICAgIHZhciBlbmQgPSB0aGlzLmVuZDtcbiAgICB2YXIgaW5Eb2N1bWVudCA9IGluRG9jKHN0YXJ0KTtcbiAgICB2YXIgaW5pdCA9ICFvbGRGcmFncztcbiAgICB2YXIgaSwgbCwgZnJhZywga2V5LCB2YWx1ZSwgcHJpbWl0aXZlO1xuXG4gICAgLy8gRmlyc3QgcGFzcywgZ28gdGhyb3VnaCB0aGUgbmV3IEFycmF5IGFuZCBmaWxsIHVwXG4gICAgLy8gdGhlIG5ldyBmcmFncyBhcnJheS4gSWYgYSBwaWVjZSBvZiBkYXRhIGhhcyBhIGNhY2hlZFxuICAgIC8vIGluc3RhbmNlIGZvciBpdCwgd2UgcmV1c2UgaXQuIE90aGVyd2lzZSBidWlsZCBhIG5ld1xuICAgIC8vIGluc3RhbmNlLlxuICAgIGZvciAoaSA9IDAsIGwgPSBkYXRhLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgaXRlbSA9IGRhdGFbaV07XG4gICAgICBrZXkgPSBjb252ZXJ0ZWRGcm9tT2JqZWN0ID8gaXRlbS4ka2V5IDogbnVsbDtcbiAgICAgIHZhbHVlID0gY29udmVydGVkRnJvbU9iamVjdCA/IGl0ZW0uJHZhbHVlIDogaXRlbTtcbiAgICAgIHByaW1pdGl2ZSA9ICFpc09iamVjdCh2YWx1ZSk7XG4gICAgICBmcmFnID0gIWluaXQgJiYgdGhpcy5nZXRDYWNoZWRGcmFnKHZhbHVlLCBpLCBrZXkpO1xuICAgICAgaWYgKGZyYWcpIHtcbiAgICAgICAgLy8gcmV1c2FibGUgZnJhZ21lbnRcbiAgICAgICAgZnJhZy5yZXVzZWQgPSB0cnVlO1xuICAgICAgICAvLyB1cGRhdGUgJGluZGV4XG4gICAgICAgIGZyYWcuc2NvcGUuJGluZGV4ID0gaTtcbiAgICAgICAgLy8gdXBkYXRlICRrZXlcbiAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgIGZyYWcuc2NvcGUuJGtleSA9IGtleTtcbiAgICAgICAgfVxuICAgICAgICAvLyB1cGRhdGUgaXRlcmF0b3JcbiAgICAgICAgaWYgKGl0ZXJhdG9yKSB7XG4gICAgICAgICAgZnJhZy5zY29wZVtpdGVyYXRvcl0gPSBrZXkgIT09IG51bGwgPyBrZXkgOiBpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHVwZGF0ZSBkYXRhIGZvciB0cmFjay1ieSwgb2JqZWN0IHJlcGVhdCAmXG4gICAgICAgIC8vIHByaW1pdGl2ZSB2YWx1ZXMuXG4gICAgICAgIGlmICh0cmFja0J5S2V5IHx8IGNvbnZlcnRlZEZyb21PYmplY3QgfHwgcHJpbWl0aXZlKSB7XG4gICAgICAgICAgd2l0aG91dENvbnZlcnNpb24oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZnJhZy5zY29wZVthbGlhc10gPSB2YWx1ZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbmV3IGlzbnRhbmNlXG4gICAgICAgIGZyYWcgPSB0aGlzLmNyZWF0ZSh2YWx1ZSwgYWxpYXMsIGksIGtleSk7XG4gICAgICAgIGZyYWcuZnJlc2ggPSAhaW5pdDtcbiAgICAgIH1cbiAgICAgIGZyYWdzW2ldID0gZnJhZztcbiAgICAgIGlmIChpbml0KSB7XG4gICAgICAgIGZyYWcuYmVmb3JlKGVuZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gd2UncmUgZG9uZSBmb3IgdGhlIGluaXRpYWwgcmVuZGVyLlxuICAgIGlmIChpbml0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gU2Vjb25kIHBhc3MsIGdvIHRocm91Z2ggdGhlIG9sZCBmcmFnbWVudHMgYW5kXG4gICAgLy8gZGVzdHJveSB0aG9zZSB3aG8gYXJlIG5vdCByZXVzZWQgKGFuZCByZW1vdmUgdGhlbVxuICAgIC8vIGZyb20gY2FjaGUpXG4gICAgdmFyIHJlbW92YWxJbmRleCA9IDA7XG4gICAgdmFyIHRvdGFsUmVtb3ZlZCA9IG9sZEZyYWdzLmxlbmd0aCAtIGZyYWdzLmxlbmd0aDtcbiAgICAvLyB3aGVuIHJlbW92aW5nIGEgbGFyZ2UgbnVtYmVyIG9mIGZyYWdtZW50cywgd2F0Y2hlciByZW1vdmFsXG4gICAgLy8gdHVybnMgb3V0IHRvIGJlIGEgcGVyZiBib3R0bGVuZWNrLCBzbyB3ZSBiYXRjaCB0aGUgd2F0Y2hlclxuICAgIC8vIHJlbW92YWxzIGludG8gYSBzaW5nbGUgZmlsdGVyIGNhbGwhXG4gICAgdGhpcy52bS5fdkZvclJlbW92aW5nID0gdHJ1ZTtcbiAgICBmb3IgKGkgPSAwLCBsID0gb2xkRnJhZ3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmcmFnID0gb2xkRnJhZ3NbaV07XG4gICAgICBpZiAoIWZyYWcucmV1c2VkKSB7XG4gICAgICAgIHRoaXMuZGVsZXRlQ2FjaGVkRnJhZyhmcmFnKTtcbiAgICAgICAgdGhpcy5yZW1vdmUoZnJhZywgcmVtb3ZhbEluZGV4KyssIHRvdGFsUmVtb3ZlZCwgaW5Eb2N1bWVudCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudm0uX3ZGb3JSZW1vdmluZyA9IGZhbHNlO1xuICAgIGlmIChyZW1vdmFsSW5kZXgpIHtcbiAgICAgIHRoaXMudm0uX3dhdGNoZXJzID0gdGhpcy52bS5fd2F0Y2hlcnMuZmlsdGVyKGZ1bmN0aW9uICh3KSB7XG4gICAgICAgIHJldHVybiB3LmFjdGl2ZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEZpbmFsIHBhc3MsIG1vdmUvaW5zZXJ0IG5ldyBmcmFnbWVudHMgaW50byB0aGVcbiAgICAvLyByaWdodCBwbGFjZS5cbiAgICB2YXIgdGFyZ2V0UHJldiwgcHJldkVsLCBjdXJyZW50UHJldjtcbiAgICB2YXIgaW5zZXJ0aW9uSW5kZXggPSAwO1xuICAgIGZvciAoaSA9IDAsIGwgPSBmcmFncy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZyYWcgPSBmcmFnc1tpXTtcbiAgICAgIC8vIHRoaXMgaXMgdGhlIGZyYWcgdGhhdCB3ZSBzaG91bGQgYmUgYWZ0ZXJcbiAgICAgIHRhcmdldFByZXYgPSBmcmFnc1tpIC0gMV07XG4gICAgICBwcmV2RWwgPSB0YXJnZXRQcmV2ID8gdGFyZ2V0UHJldi5zdGFnZ2VyQ2IgPyB0YXJnZXRQcmV2LnN0YWdnZXJBbmNob3IgOiB0YXJnZXRQcmV2LmVuZCB8fCB0YXJnZXRQcmV2Lm5vZGUgOiBzdGFydDtcbiAgICAgIGlmIChmcmFnLnJldXNlZCAmJiAhZnJhZy5zdGFnZ2VyQ2IpIHtcbiAgICAgICAgY3VycmVudFByZXYgPSBmaW5kUHJldkZyYWcoZnJhZywgc3RhcnQsIHRoaXMuaWQpO1xuICAgICAgICBpZiAoY3VycmVudFByZXYgIT09IHRhcmdldFByZXYgJiYgKCFjdXJyZW50UHJldiB8fFxuICAgICAgICAvLyBvcHRpbWl6YXRpb24gZm9yIG1vdmluZyBhIHNpbmdsZSBpdGVtLlxuICAgICAgICAvLyB0aGFua3MgdG8gc3VnZ2VzdGlvbnMgYnkgQGxpdm9yYXMgaW4gIzE4MDdcbiAgICAgICAgZmluZFByZXZGcmFnKGN1cnJlbnRQcmV2LCBzdGFydCwgdGhpcy5pZCkgIT09IHRhcmdldFByZXYpKSB7XG4gICAgICAgICAgdGhpcy5tb3ZlKGZyYWcsIHByZXZFbCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5ldyBpbnN0YW5jZSwgb3Igc3RpbGwgaW4gc3RhZ2dlci5cbiAgICAgICAgLy8gaW5zZXJ0IHdpdGggdXBkYXRlZCBzdGFnZ2VyIGluZGV4LlxuICAgICAgICB0aGlzLmluc2VydChmcmFnLCBpbnNlcnRpb25JbmRleCsrLCBwcmV2RWwsIGluRG9jdW1lbnQpO1xuICAgICAgfVxuICAgICAgZnJhZy5yZXVzZWQgPSBmcmFnLmZyZXNoID0gZmFsc2U7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgZnJhZ21lbnQgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGFsaWFzXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgKiBAcGFyYW0ge1N0cmluZ30gW2tleV1cbiAgICogQHJldHVybiB7RnJhZ21lbnR9XG4gICAqL1xuXG4gIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKHZhbHVlLCBhbGlhcywgaW5kZXgsIGtleSkge1xuICAgIHZhciBob3N0ID0gdGhpcy5faG9zdDtcbiAgICAvLyBjcmVhdGUgaXRlcmF0aW9uIHNjb3BlXG4gICAgdmFyIHBhcmVudFNjb3BlID0gdGhpcy5fc2NvcGUgfHwgdGhpcy52bTtcbiAgICB2YXIgc2NvcGUgPSBPYmplY3QuY3JlYXRlKHBhcmVudFNjb3BlKTtcbiAgICAvLyByZWYgaG9sZGVyIGZvciB0aGUgc2NvcGVcbiAgICBzY29wZS4kcmVmcyA9IE9iamVjdC5jcmVhdGUocGFyZW50U2NvcGUuJHJlZnMpO1xuICAgIHNjb3BlLiRlbHMgPSBPYmplY3QuY3JlYXRlKHBhcmVudFNjb3BlLiRlbHMpO1xuICAgIC8vIG1ha2Ugc3VyZSBwb2ludCAkcGFyZW50IHRvIHBhcmVudCBzY29wZVxuICAgIHNjb3BlLiRwYXJlbnQgPSBwYXJlbnRTY29wZTtcbiAgICAvLyBmb3IgdHdvLXdheSBiaW5kaW5nIG9uIGFsaWFzXG4gICAgc2NvcGUuJGZvckNvbnRleHQgPSB0aGlzO1xuICAgIC8vIGRlZmluZSBzY29wZSBwcm9wZXJ0aWVzXG4gICAgLy8gaW1wb3J0YW50OiBkZWZpbmUgdGhlIHNjb3BlIGFsaWFzIHdpdGhvdXQgZm9yY2VkIGNvbnZlcnNpb25cbiAgICAvLyBzbyB0aGF0IGZyb3plbiBkYXRhIHN0cnVjdHVyZXMgcmVtYWluIG5vbi1yZWFjdGl2ZS5cbiAgICB3aXRob3V0Q29udmVyc2lvbihmdW5jdGlvbiAoKSB7XG4gICAgICBkZWZpbmVSZWFjdGl2ZShzY29wZSwgYWxpYXMsIHZhbHVlKTtcbiAgICB9KTtcbiAgICBkZWZpbmVSZWFjdGl2ZShzY29wZSwgJyRpbmRleCcsIGluZGV4KTtcbiAgICBpZiAoa2V5KSB7XG4gICAgICBkZWZpbmVSZWFjdGl2ZShzY29wZSwgJyRrZXknLCBrZXkpO1xuICAgIH0gZWxzZSBpZiAoc2NvcGUuJGtleSkge1xuICAgICAgLy8gYXZvaWQgYWNjaWRlbnRhbCBmYWxsYmFja1xuICAgICAgZGVmKHNjb3BlLCAnJGtleScsIG51bGwpO1xuICAgIH1cbiAgICBpZiAodGhpcy5pdGVyYXRvcikge1xuICAgICAgZGVmaW5lUmVhY3RpdmUoc2NvcGUsIHRoaXMuaXRlcmF0b3IsIGtleSAhPT0gbnVsbCA/IGtleSA6IGluZGV4KTtcbiAgICB9XG4gICAgdmFyIGZyYWcgPSB0aGlzLmZhY3RvcnkuY3JlYXRlKGhvc3QsIHNjb3BlLCB0aGlzLl9mcmFnKTtcbiAgICBmcmFnLmZvcklkID0gdGhpcy5pZDtcbiAgICB0aGlzLmNhY2hlRnJhZyh2YWx1ZSwgZnJhZywgaW5kZXgsIGtleSk7XG4gICAgcmV0dXJuIGZyYWc7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgdi1yZWYgb24gb3duZXIgdm0uXG4gICAqL1xuXG4gIHVwZGF0ZVJlZjogZnVuY3Rpb24gdXBkYXRlUmVmKCkge1xuICAgIHZhciByZWYgPSB0aGlzLmRlc2NyaXB0b3IucmVmO1xuICAgIGlmICghcmVmKSByZXR1cm47XG4gICAgdmFyIGhhc2ggPSAodGhpcy5fc2NvcGUgfHwgdGhpcy52bSkuJHJlZnM7XG4gICAgdmFyIHJlZnM7XG4gICAgaWYgKCF0aGlzLmZyb21PYmplY3QpIHtcbiAgICAgIHJlZnMgPSB0aGlzLmZyYWdzLm1hcChmaW5kVm1Gcm9tRnJhZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlZnMgPSB7fTtcbiAgICAgIHRoaXMuZnJhZ3MuZm9yRWFjaChmdW5jdGlvbiAoZnJhZykge1xuICAgICAgICByZWZzW2ZyYWcuc2NvcGUuJGtleV0gPSBmaW5kVm1Gcm9tRnJhZyhmcmFnKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBoYXNoW3JlZl0gPSByZWZzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBGb3Igb3B0aW9uIGxpc3RzLCB1cGRhdGUgdGhlIGNvbnRhaW5pbmcgdi1tb2RlbCBvblxuICAgKiBwYXJlbnQgPHNlbGVjdD4uXG4gICAqL1xuXG4gIHVwZGF0ZU1vZGVsOiBmdW5jdGlvbiB1cGRhdGVNb2RlbCgpIHtcbiAgICBpZiAodGhpcy5pc09wdGlvbikge1xuICAgICAgdmFyIHBhcmVudCA9IHRoaXMuc3RhcnQucGFyZW50Tm9kZTtcbiAgICAgIHZhciBtb2RlbCA9IHBhcmVudCAmJiBwYXJlbnQuX192X21vZGVsO1xuICAgICAgaWYgKG1vZGVsKSB7XG4gICAgICAgIG1vZGVsLmZvcmNlVXBkYXRlKCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBJbnNlcnQgYSBmcmFnbWVudC4gSGFuZGxlcyBzdGFnZ2VyaW5nLlxuICAgKlxuICAgKiBAcGFyYW0ge0ZyYWdtZW50fSBmcmFnXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgKiBAcGFyYW0ge05vZGV9IHByZXZFbFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGluRG9jdW1lbnRcbiAgICovXG5cbiAgaW5zZXJ0OiBmdW5jdGlvbiBpbnNlcnQoZnJhZywgaW5kZXgsIHByZXZFbCwgaW5Eb2N1bWVudCkge1xuICAgIGlmIChmcmFnLnN0YWdnZXJDYikge1xuICAgICAgZnJhZy5zdGFnZ2VyQ2IuY2FuY2VsKCk7XG4gICAgICBmcmFnLnN0YWdnZXJDYiA9IG51bGw7XG4gICAgfVxuICAgIHZhciBzdGFnZ2VyQW1vdW50ID0gdGhpcy5nZXRTdGFnZ2VyKGZyYWcsIGluZGV4LCBudWxsLCAnZW50ZXInKTtcbiAgICBpZiAoaW5Eb2N1bWVudCAmJiBzdGFnZ2VyQW1vdW50KSB7XG4gICAgICAvLyBjcmVhdGUgYW4gYW5jaG9yIGFuZCBpbnNlcnQgaXQgc3luY2hyb25vdXNseSxcbiAgICAgIC8vIHNvIHRoYXQgd2UgY2FuIHJlc29sdmUgdGhlIGNvcnJlY3Qgb3JkZXIgd2l0aG91dFxuICAgICAgLy8gd29ycnlpbmcgYWJvdXQgc29tZSBlbGVtZW50cyBub3QgaW5zZXJ0ZWQgeWV0XG4gICAgICB2YXIgYW5jaG9yID0gZnJhZy5zdGFnZ2VyQW5jaG9yO1xuICAgICAgaWYgKCFhbmNob3IpIHtcbiAgICAgICAgYW5jaG9yID0gZnJhZy5zdGFnZ2VyQW5jaG9yID0gY3JlYXRlQW5jaG9yKCdzdGFnZ2VyLWFuY2hvcicpO1xuICAgICAgICBhbmNob3IuX192X2ZyYWcgPSBmcmFnO1xuICAgICAgfVxuICAgICAgYWZ0ZXIoYW5jaG9yLCBwcmV2RWwpO1xuICAgICAgdmFyIG9wID0gZnJhZy5zdGFnZ2VyQ2IgPSBjYW5jZWxsYWJsZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZyYWcuc3RhZ2dlckNiID0gbnVsbDtcbiAgICAgICAgZnJhZy5iZWZvcmUoYW5jaG9yKTtcbiAgICAgICAgcmVtb3ZlKGFuY2hvcik7XG4gICAgICB9KTtcbiAgICAgIHNldFRpbWVvdXQob3AsIHN0YWdnZXJBbW91bnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gcHJldkVsLm5leHRTaWJsaW5nO1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAvLyByZXNldCBlbmQgYW5jaG9yIHBvc2l0aW9uIGluIGNhc2UgdGhlIHBvc2l0aW9uIHdhcyBtZXNzZWQgdXBcbiAgICAgICAgLy8gYnkgYW4gZXh0ZXJuYWwgZHJhZy1uLWRyb3AgbGlicmFyeS5cbiAgICAgICAgYWZ0ZXIodGhpcy5lbmQsIHByZXZFbCk7XG4gICAgICAgIHRhcmdldCA9IHRoaXMuZW5kO1xuICAgICAgfVxuICAgICAgZnJhZy5iZWZvcmUodGFyZ2V0KTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhIGZyYWdtZW50LiBIYW5kbGVzIHN0YWdnZXJpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB7RnJhZ21lbnR9IGZyYWdcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAqIEBwYXJhbSB7TnVtYmVyfSB0b3RhbFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGluRG9jdW1lbnRcbiAgICovXG5cbiAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoZnJhZywgaW5kZXgsIHRvdGFsLCBpbkRvY3VtZW50KSB7XG4gICAgaWYgKGZyYWcuc3RhZ2dlckNiKSB7XG4gICAgICBmcmFnLnN0YWdnZXJDYi5jYW5jZWwoKTtcbiAgICAgIGZyYWcuc3RhZ2dlckNiID0gbnVsbDtcbiAgICAgIC8vIGl0J3Mgbm90IHBvc3NpYmxlIGZvciB0aGUgc2FtZSBmcmFnIHRvIGJlIHJlbW92ZWRcbiAgICAgIC8vIHR3aWNlLCBzbyBpZiB3ZSBoYXZlIGEgcGVuZGluZyBzdGFnZ2VyIGNhbGxiYWNrLFxuICAgICAgLy8gaXQgbWVhbnMgdGhpcyBmcmFnIGlzIHF1ZXVlZCBmb3IgZW50ZXIgYnV0IHJlbW92ZWRcbiAgICAgIC8vIGJlZm9yZSBpdHMgdHJhbnNpdGlvbiBzdGFydGVkLiBTaW5jZSBpdCBpcyBhbHJlYWR5XG4gICAgICAvLyBkZXN0cm95ZWQsIHdlIGNhbiBqdXN0IGxlYXZlIGl0IGluIGRldGFjaGVkIHN0YXRlLlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgc3RhZ2dlckFtb3VudCA9IHRoaXMuZ2V0U3RhZ2dlcihmcmFnLCBpbmRleCwgdG90YWwsICdsZWF2ZScpO1xuICAgIGlmIChpbkRvY3VtZW50ICYmIHN0YWdnZXJBbW91bnQpIHtcbiAgICAgIHZhciBvcCA9IGZyYWcuc3RhZ2dlckNiID0gY2FuY2VsbGFibGUoZnVuY3Rpb24gKCkge1xuICAgICAgICBmcmFnLnN0YWdnZXJDYiA9IG51bGw7XG4gICAgICAgIGZyYWcucmVtb3ZlKCk7XG4gICAgICB9KTtcbiAgICAgIHNldFRpbWVvdXQob3AsIHN0YWdnZXJBbW91bnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmcmFnLnJlbW92ZSgpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogTW92ZSBhIGZyYWdtZW50IHRvIGEgbmV3IHBvc2l0aW9uLlxuICAgKiBGb3JjZSBubyB0cmFuc2l0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge0ZyYWdtZW50fSBmcmFnXG4gICAqIEBwYXJhbSB7Tm9kZX0gcHJldkVsXG4gICAqL1xuXG4gIG1vdmU6IGZ1bmN0aW9uIG1vdmUoZnJhZywgcHJldkVsKSB7XG4gICAgLy8gZml4IGEgY29tbW9uIGlzc3VlIHdpdGggU29ydGFibGU6XG4gICAgLy8gaWYgcHJldkVsIGRvZXNuJ3QgaGF2ZSBuZXh0U2libGluZywgdGhpcyBtZWFucyBpdCdzXG4gICAgLy8gYmVlbiBkcmFnZ2VkIGFmdGVyIHRoZSBlbmQgYW5jaG9yLiBKdXN0IHJlLXBvc2l0aW9uXG4gICAgLy8gdGhlIGVuZCBhbmNob3IgdG8gdGhlIGVuZCBvZiB0aGUgY29udGFpbmVyLlxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghcHJldkVsLm5leHRTaWJsaW5nKSB7XG4gICAgICB0aGlzLmVuZC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHRoaXMuZW5kKTtcbiAgICB9XG4gICAgZnJhZy5iZWZvcmUocHJldkVsLm5leHRTaWJsaW5nLCBmYWxzZSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENhY2hlIGEgZnJhZ21lbnQgdXNpbmcgdHJhY2stYnkgb3IgdGhlIG9iamVjdCBrZXkuXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtGcmFnbWVudH0gZnJhZ1xuICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtrZXldXG4gICAqL1xuXG4gIGNhY2hlRnJhZzogZnVuY3Rpb24gY2FjaGVGcmFnKHZhbHVlLCBmcmFnLCBpbmRleCwga2V5KSB7XG4gICAgdmFyIHRyYWNrQnlLZXkgPSB0aGlzLnBhcmFtcy50cmFja0J5O1xuICAgIHZhciBjYWNoZSA9IHRoaXMuY2FjaGU7XG4gICAgdmFyIHByaW1pdGl2ZSA9ICFpc09iamVjdCh2YWx1ZSk7XG4gICAgdmFyIGlkO1xuICAgIGlmIChrZXkgfHwgdHJhY2tCeUtleSB8fCBwcmltaXRpdmUpIHtcbiAgICAgIGlkID0gZ2V0VHJhY2tCeUtleShpbmRleCwga2V5LCB2YWx1ZSwgdHJhY2tCeUtleSk7XG4gICAgICBpZiAoIWNhY2hlW2lkXSkge1xuICAgICAgICBjYWNoZVtpZF0gPSBmcmFnO1xuICAgICAgfSBlbHNlIGlmICh0cmFja0J5S2V5ICE9PSAnJGluZGV4Jykge1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMud2FybkR1cGxpY2F0ZSh2YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlkID0gdGhpcy5pZDtcbiAgICAgIGlmIChoYXNPd24odmFsdWUsIGlkKSkge1xuICAgICAgICBpZiAodmFsdWVbaWRdID09PSBudWxsKSB7XG4gICAgICAgICAgdmFsdWVbaWRdID0gZnJhZztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMud2FybkR1cGxpY2F0ZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoT2JqZWN0LmlzRXh0ZW5zaWJsZSh2YWx1ZSkpIHtcbiAgICAgICAgZGVmKHZhbHVlLCBpZCwgZnJhZyk7XG4gICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgd2FybignRnJvemVuIHYtZm9yIG9iamVjdHMgY2Fubm90IGJlIGF1dG9tYXRpY2FsbHkgdHJhY2tlZCwgbWFrZSBzdXJlIHRvICcgKyAncHJvdmlkZSBhIHRyYWNrLWJ5IGtleS4nKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZnJhZy5yYXcgPSB2YWx1ZTtcbiAgfSxcblxuICAvKipcbiAgICogR2V0IGEgY2FjaGVkIGZyYWdtZW50IGZyb20gdGhlIHZhbHVlL2luZGV4L2tleVxuICAgKlxuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gICAqIEByZXR1cm4ge0ZyYWdtZW50fVxuICAgKi9cblxuICBnZXRDYWNoZWRGcmFnOiBmdW5jdGlvbiBnZXRDYWNoZWRGcmFnKHZhbHVlLCBpbmRleCwga2V5KSB7XG4gICAgdmFyIHRyYWNrQnlLZXkgPSB0aGlzLnBhcmFtcy50cmFja0J5O1xuICAgIHZhciBwcmltaXRpdmUgPSAhaXNPYmplY3QodmFsdWUpO1xuICAgIHZhciBmcmFnO1xuICAgIGlmIChrZXkgfHwgdHJhY2tCeUtleSB8fCBwcmltaXRpdmUpIHtcbiAgICAgIHZhciBpZCA9IGdldFRyYWNrQnlLZXkoaW5kZXgsIGtleSwgdmFsdWUsIHRyYWNrQnlLZXkpO1xuICAgICAgZnJhZyA9IHRoaXMuY2FjaGVbaWRdO1xuICAgIH0gZWxzZSB7XG4gICAgICBmcmFnID0gdmFsdWVbdGhpcy5pZF07XG4gICAgfVxuICAgIGlmIChmcmFnICYmIChmcmFnLnJldXNlZCB8fCBmcmFnLmZyZXNoKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLndhcm5EdXBsaWNhdGUodmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gZnJhZztcbiAgfSxcblxuICAvKipcbiAgICogRGVsZXRlIGEgZnJhZ21lbnQgZnJvbSBjYWNoZS5cbiAgICpcbiAgICogQHBhcmFtIHtGcmFnbWVudH0gZnJhZ1xuICAgKi9cblxuICBkZWxldGVDYWNoZWRGcmFnOiBmdW5jdGlvbiBkZWxldGVDYWNoZWRGcmFnKGZyYWcpIHtcbiAgICB2YXIgdmFsdWUgPSBmcmFnLnJhdztcbiAgICB2YXIgdHJhY2tCeUtleSA9IHRoaXMucGFyYW1zLnRyYWNrQnk7XG4gICAgdmFyIHNjb3BlID0gZnJhZy5zY29wZTtcbiAgICB2YXIgaW5kZXggPSBzY29wZS4kaW5kZXg7XG4gICAgLy8gZml4ICM5NDg6IGF2b2lkIGFjY2lkZW50YWxseSBmYWxsIHRocm91Z2ggdG9cbiAgICAvLyBhIHBhcmVudCByZXBlYXRlciB3aGljaCBoYXBwZW5zIHRvIGhhdmUgJGtleS5cbiAgICB2YXIga2V5ID0gaGFzT3duKHNjb3BlLCAnJGtleScpICYmIHNjb3BlLiRrZXk7XG4gICAgdmFyIHByaW1pdGl2ZSA9ICFpc09iamVjdCh2YWx1ZSk7XG4gICAgaWYgKHRyYWNrQnlLZXkgfHwga2V5IHx8IHByaW1pdGl2ZSkge1xuICAgICAgdmFyIGlkID0gZ2V0VHJhY2tCeUtleShpbmRleCwga2V5LCB2YWx1ZSwgdHJhY2tCeUtleSk7XG4gICAgICB0aGlzLmNhY2hlW2lkXSA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlW3RoaXMuaWRdID0gbnVsbDtcbiAgICAgIGZyYWcucmF3ID0gbnVsbDtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEdldCB0aGUgc3RhZ2dlciBhbW91bnQgZm9yIGFuIGluc2VydGlvbi9yZW1vdmFsLlxuICAgKlxuICAgKiBAcGFyYW0ge0ZyYWdtZW50fSBmcmFnXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgKiBAcGFyYW0ge051bWJlcn0gdG90YWxcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAgICovXG5cbiAgZ2V0U3RhZ2dlcjogZnVuY3Rpb24gZ2V0U3RhZ2dlcihmcmFnLCBpbmRleCwgdG90YWwsIHR5cGUpIHtcbiAgICB0eXBlID0gdHlwZSArICdTdGFnZ2VyJztcbiAgICB2YXIgdHJhbnMgPSBmcmFnLm5vZGUuX192X3RyYW5zO1xuICAgIHZhciBob29rcyA9IHRyYW5zICYmIHRyYW5zLmhvb2tzO1xuICAgIHZhciBob29rID0gaG9va3MgJiYgKGhvb2tzW3R5cGVdIHx8IGhvb2tzLnN0YWdnZXIpO1xuICAgIHJldHVybiBob29rID8gaG9vay5jYWxsKGZyYWcsIGluZGV4LCB0b3RhbCkgOiBpbmRleCAqIHBhcnNlSW50KHRoaXMucGFyYW1zW3R5cGVdIHx8IHRoaXMucGFyYW1zLnN0YWdnZXIsIDEwKTtcbiAgfSxcblxuICAvKipcbiAgICogUHJlLXByb2Nlc3MgdGhlIHZhbHVlIGJlZm9yZSBwaXBpbmcgaXQgdGhyb3VnaCB0aGVcbiAgICogZmlsdGVycy4gVGhpcyBpcyBwYXNzZWQgdG8gYW5kIGNhbGxlZCBieSB0aGUgd2F0Y2hlci5cbiAgICovXG5cbiAgX3ByZVByb2Nlc3M6IGZ1bmN0aW9uIF9wcmVQcm9jZXNzKHZhbHVlKSB7XG4gICAgLy8gcmVnYXJkbGVzcyBvZiB0eXBlLCBzdG9yZSB0aGUgdW4tZmlsdGVyZWQgcmF3IHZhbHVlLlxuICAgIHRoaXMucmF3VmFsdWUgPSB2YWx1ZTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFBvc3QtcHJvY2VzcyB0aGUgdmFsdWUgYWZ0ZXIgaXQgaGFzIGJlZW4gcGlwZWQgdGhyb3VnaFxuICAgKiB0aGUgZmlsdGVycy4gVGhpcyBpcyBwYXNzZWQgdG8gYW5kIGNhbGxlZCBieSB0aGUgd2F0Y2hlci5cbiAgICpcbiAgICogSXQgaXMgbmVjZXNzYXJ5IGZvciB0aGlzIHRvIGJlIGNhbGxlZCBkdXJpbmcgdGhlXG4gICAqIHdhdGNoZXIncyBkZXBlbmRlbmN5IGNvbGxlY3Rpb24gcGhhc2UgYmVjYXVzZSB3ZSB3YW50XG4gICAqIHRoZSB2LWZvciB0byB1cGRhdGUgd2hlbiB0aGUgc291cmNlIE9iamVjdCBpcyBtdXRhdGVkLlxuICAgKi9cblxuICBfcG9zdFByb2Nlc3M6IGZ1bmN0aW9uIF9wb3N0UHJvY2Vzcyh2YWx1ZSkge1xuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdCh2YWx1ZSkpIHtcbiAgICAgIC8vIGNvbnZlcnQgcGxhaW4gb2JqZWN0IHRvIGFycmF5LlxuICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG4gICAgICB2YXIgaSA9IGtleXMubGVuZ3RoO1xuICAgICAgdmFyIHJlcyA9IG5ldyBBcnJheShpKTtcbiAgICAgIHZhciBrZXk7XG4gICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICAgIHJlc1tpXSA9IHtcbiAgICAgICAgICAka2V5OiBrZXksXG4gICAgICAgICAgJHZhbHVlOiB2YWx1ZVtrZXldXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiAhaXNOYU4odmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gcmFuZ2UodmFsdWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlIHx8IFtdO1xuICAgIH1cbiAgfSxcblxuICB1bmJpbmQ6IGZ1bmN0aW9uIHVuYmluZCgpIHtcbiAgICBpZiAodGhpcy5kZXNjcmlwdG9yLnJlZikge1xuICAgICAgKHRoaXMuX3Njb3BlIHx8IHRoaXMudm0pLiRyZWZzW3RoaXMuZGVzY3JpcHRvci5yZWZdID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuZnJhZ3MpIHtcbiAgICAgIHZhciBpID0gdGhpcy5mcmFncy5sZW5ndGg7XG4gICAgICB2YXIgZnJhZztcbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgZnJhZyA9IHRoaXMuZnJhZ3NbaV07XG4gICAgICAgIHRoaXMuZGVsZXRlQ2FjaGVkRnJhZyhmcmFnKTtcbiAgICAgICAgZnJhZy5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEhlbHBlciB0byBmaW5kIHRoZSBwcmV2aW91cyBlbGVtZW50IHRoYXQgaXMgYSBmcmFnbWVudFxuICogYW5jaG9yLiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIGEgZGVzdHJveWVkIGZyYWcnc1xuICogZWxlbWVudCBjb3VsZCBzdGlsbCBiZSBsaW5nZXJpbmcgaW4gdGhlIERPTSBiZWZvcmUgaXRzXG4gKiBsZWF2aW5nIHRyYW5zaXRpb24gZmluaXNoZXMsIGJ1dCBpdHMgaW5zZXJ0ZWQgZmxhZ1xuICogc2hvdWxkIGhhdmUgYmVlbiBzZXQgdG8gZmFsc2Ugc28gd2UgY2FuIHNraXAgdGhlbS5cbiAqXG4gKiBJZiB0aGlzIGlzIGEgYmxvY2sgcmVwZWF0LCB3ZSB3YW50IHRvIG1ha2Ugc3VyZSB3ZSBvbmx5XG4gKiByZXR1cm4gZnJhZyB0aGF0IGlzIGJvdW5kIHRvIHRoaXMgdi1mb3IuIChzZWUgIzkyOSlcbiAqXG4gKiBAcGFyYW0ge0ZyYWdtZW50fSBmcmFnXG4gKiBAcGFyYW0ge0NvbW1lbnR8VGV4dH0gYW5jaG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAqIEByZXR1cm4ge0ZyYWdtZW50fVxuICovXG5cbmZ1bmN0aW9uIGZpbmRQcmV2RnJhZyhmcmFnLCBhbmNob3IsIGlkKSB7XG4gIHZhciBlbCA9IGZyYWcubm9kZS5wcmV2aW91c1NpYmxpbmc7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoIWVsKSByZXR1cm47XG4gIGZyYWcgPSBlbC5fX3ZfZnJhZztcbiAgd2hpbGUgKCghZnJhZyB8fCBmcmFnLmZvcklkICE9PSBpZCB8fCAhZnJhZy5pbnNlcnRlZCkgJiYgZWwgIT09IGFuY2hvcikge1xuICAgIGVsID0gZWwucHJldmlvdXNTaWJsaW5nO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghZWwpIHJldHVybjtcbiAgICBmcmFnID0gZWwuX192X2ZyYWc7XG4gIH1cbiAgcmV0dXJuIGZyYWc7XG59XG5cbi8qKlxuICogRmluZCBhIHZtIGZyb20gYSBmcmFnbWVudC5cbiAqXG4gKiBAcGFyYW0ge0ZyYWdtZW50fSBmcmFnXG4gKiBAcmV0dXJuIHtWdWV8dW5kZWZpbmVkfVxuICovXG5cbmZ1bmN0aW9uIGZpbmRWbUZyb21GcmFnKGZyYWcpIHtcbiAgdmFyIG5vZGUgPSBmcmFnLm5vZGU7XG4gIC8vIGhhbmRsZSBtdWx0aS1ub2RlIGZyYWdcbiAgaWYgKGZyYWcuZW5kKSB7XG4gICAgd2hpbGUgKCFub2RlLl9fdnVlX18gJiYgbm9kZSAhPT0gZnJhZy5lbmQgJiYgbm9kZS5uZXh0U2libGluZykge1xuICAgICAgbm9kZSA9IG5vZGUubmV4dFNpYmxpbmc7XG4gICAgfVxuICB9XG4gIHJldHVybiBub2RlLl9fdnVlX187XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgcmFuZ2UgYXJyYXkgZnJvbSBnaXZlbiBudW1iZXIuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG5cbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5cbmZ1bmN0aW9uIHJhbmdlKG4pIHtcbiAgdmFyIGkgPSAtMTtcbiAgdmFyIHJldCA9IG5ldyBBcnJheShNYXRoLmZsb29yKG4pKTtcbiAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICByZXRbaV0gPSBpO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbi8qKlxuICogR2V0IHRoZSB0cmFjayBieSBrZXkgZm9yIGFuIGl0ZW0uXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcGFyYW0ge1N0cmluZ30gW3RyYWNrQnlLZXldXG4gKi9cblxuZnVuY3Rpb24gZ2V0VHJhY2tCeUtleShpbmRleCwga2V5LCB2YWx1ZSwgdHJhY2tCeUtleSkge1xuICByZXR1cm4gdHJhY2tCeUtleSA/IHRyYWNrQnlLZXkgPT09ICckaW5kZXgnID8gaW5kZXggOiB0cmFja0J5S2V5LmNoYXJBdCgwKS5tYXRjaCgvXFx3LykgPyBnZXRQYXRoKHZhbHVlLCB0cmFja0J5S2V5KSA6IHZhbHVlW3RyYWNrQnlLZXldIDoga2V5IHx8IHZhbHVlO1xufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2Rm9yLndhcm5EdXBsaWNhdGUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB3YXJuKCdEdXBsaWNhdGUgdmFsdWUgZm91bmQgaW4gdi1mb3I9XCInICsgdGhpcy5kZXNjcmlwdG9yLnJhdyArICdcIjogJyArIEpTT04uc3RyaW5naWZ5KHZhbHVlKSArICcuIFVzZSB0cmFjay1ieT1cIiRpbmRleFwiIGlmICcgKyAneW91IGFyZSBleHBlY3RpbmcgZHVwbGljYXRlIHZhbHVlcy4nLCB0aGlzLnZtKTtcbiAgfTtcbn1cblxudmFyIHZJZiA9IHtcblxuICBwcmlvcml0eTogSUYsXG4gIHRlcm1pbmFsOiB0cnVlLFxuXG4gIGJpbmQ6IGZ1bmN0aW9uIGJpbmQoKSB7XG4gICAgdmFyIGVsID0gdGhpcy5lbDtcbiAgICBpZiAoIWVsLl9fdnVlX18pIHtcbiAgICAgIC8vIGNoZWNrIGVsc2UgYmxvY2tcbiAgICAgIHZhciBuZXh0ID0gZWwubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgaWYgKG5leHQgJiYgZ2V0QXR0cihuZXh0LCAndi1lbHNlJykgIT09IG51bGwpIHtcbiAgICAgICAgcmVtb3ZlKG5leHQpO1xuICAgICAgICB0aGlzLmVsc2VFbCA9IG5leHQ7XG4gICAgICB9XG4gICAgICAvLyBjaGVjayBtYWluIGJsb2NrXG4gICAgICB0aGlzLmFuY2hvciA9IGNyZWF0ZUFuY2hvcigndi1pZicpO1xuICAgICAgcmVwbGFjZShlbCwgdGhpcy5hbmNob3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oJ3YtaWY9XCInICsgdGhpcy5leHByZXNzaW9uICsgJ1wiIGNhbm5vdCBiZSAnICsgJ3VzZWQgb24gYW4gaW5zdGFuY2Ugcm9vdCBlbGVtZW50LicsIHRoaXMudm0pO1xuICAgICAgdGhpcy5pbnZhbGlkID0gdHJ1ZTtcbiAgICB9XG4gIH0sXG5cbiAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUodmFsdWUpIHtcbiAgICBpZiAodGhpcy5pbnZhbGlkKSByZXR1cm47XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBpZiAoIXRoaXMuZnJhZykge1xuICAgICAgICB0aGlzLmluc2VydCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZSgpO1xuICAgIH1cbiAgfSxcblxuICBpbnNlcnQ6IGZ1bmN0aW9uIGluc2VydCgpIHtcbiAgICBpZiAodGhpcy5lbHNlRnJhZykge1xuICAgICAgdGhpcy5lbHNlRnJhZy5yZW1vdmUoKTtcbiAgICAgIHRoaXMuZWxzZUZyYWcgPSBudWxsO1xuICAgIH1cbiAgICAvLyBsYXp5IGluaXQgZmFjdG9yeVxuICAgIGlmICghdGhpcy5mYWN0b3J5KSB7XG4gICAgICB0aGlzLmZhY3RvcnkgPSBuZXcgRnJhZ21lbnRGYWN0b3J5KHRoaXMudm0sIHRoaXMuZWwpO1xuICAgIH1cbiAgICB0aGlzLmZyYWcgPSB0aGlzLmZhY3RvcnkuY3JlYXRlKHRoaXMuX2hvc3QsIHRoaXMuX3Njb3BlLCB0aGlzLl9mcmFnKTtcbiAgICB0aGlzLmZyYWcuYmVmb3JlKHRoaXMuYW5jaG9yKTtcbiAgfSxcblxuICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICBpZiAodGhpcy5mcmFnKSB7XG4gICAgICB0aGlzLmZyYWcucmVtb3ZlKCk7XG4gICAgICB0aGlzLmZyYWcgPSBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy5lbHNlRWwgJiYgIXRoaXMuZWxzZUZyYWcpIHtcbiAgICAgIGlmICghdGhpcy5lbHNlRmFjdG9yeSkge1xuICAgICAgICB0aGlzLmVsc2VGYWN0b3J5ID0gbmV3IEZyYWdtZW50RmFjdG9yeSh0aGlzLmVsc2VFbC5fY29udGV4dCB8fCB0aGlzLnZtLCB0aGlzLmVsc2VFbCk7XG4gICAgICB9XG4gICAgICB0aGlzLmVsc2VGcmFnID0gdGhpcy5lbHNlRmFjdG9yeS5jcmVhdGUodGhpcy5faG9zdCwgdGhpcy5fc2NvcGUsIHRoaXMuX2ZyYWcpO1xuICAgICAgdGhpcy5lbHNlRnJhZy5iZWZvcmUodGhpcy5hbmNob3IpO1xuICAgIH1cbiAgfSxcblxuICB1bmJpbmQ6IGZ1bmN0aW9uIHVuYmluZCgpIHtcbiAgICBpZiAodGhpcy5mcmFnKSB7XG4gICAgICB0aGlzLmZyYWcuZGVzdHJveSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5lbHNlRnJhZykge1xuICAgICAgdGhpcy5lbHNlRnJhZy5kZXN0cm95KCk7XG4gICAgfVxuICB9XG59O1xuXG52YXIgc2hvdyA9IHtcblxuICBiaW5kOiBmdW5jdGlvbiBiaW5kKCkge1xuICAgIC8vIGNoZWNrIGVsc2UgYmxvY2tcbiAgICB2YXIgbmV4dCA9IHRoaXMuZWwubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGlmIChuZXh0ICYmIGdldEF0dHIobmV4dCwgJ3YtZWxzZScpICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmVsc2VFbCA9IG5leHQ7XG4gICAgfVxuICB9LFxuXG4gIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKHZhbHVlKSB7XG4gICAgdGhpcy5hcHBseSh0aGlzLmVsLCB2YWx1ZSk7XG4gICAgaWYgKHRoaXMuZWxzZUVsKSB7XG4gICAgICB0aGlzLmFwcGx5KHRoaXMuZWxzZUVsLCAhdmFsdWUpO1xuICAgIH1cbiAgfSxcblxuICBhcHBseTogZnVuY3Rpb24gYXBwbHkoZWwsIHZhbHVlKSB7XG4gICAgaWYgKGluRG9jKGVsKSkge1xuICAgICAgYXBwbHlUcmFuc2l0aW9uKGVsLCB2YWx1ZSA/IDEgOiAtMSwgdG9nZ2xlLCB0aGlzLnZtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9nZ2xlKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRvZ2dsZSgpIHtcbiAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSB2YWx1ZSA/ICcnIDogJ25vbmUnO1xuICAgIH1cbiAgfVxufTtcblxudmFyIHRleHQkMiA9IHtcblxuICBiaW5kOiBmdW5jdGlvbiBiaW5kKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgZWwgPSB0aGlzLmVsO1xuICAgIHZhciBpc1JhbmdlID0gZWwudHlwZSA9PT0gJ3JhbmdlJztcbiAgICB2YXIgbGF6eSA9IHRoaXMucGFyYW1zLmxhenk7XG4gICAgdmFyIG51bWJlciA9IHRoaXMucGFyYW1zLm51bWJlcjtcbiAgICB2YXIgZGVib3VuY2UgPSB0aGlzLnBhcmFtcy5kZWJvdW5jZTtcblxuICAgIC8vIGhhbmRsZSBjb21wb3NpdGlvbiBldmVudHMuXG4gICAgLy8gICBodHRwOi8vYmxvZy5ldmFueW91Lm1lLzIwMTQvMDEvMDMvY29tcG9zaXRpb24tZXZlbnQvXG4gICAgLy8gc2tpcCB0aGlzIGZvciBBbmRyb2lkIGJlY2F1c2UgaXQgaGFuZGxlcyBjb21wb3NpdGlvblxuICAgIC8vIGV2ZW50cyBxdWl0ZSBkaWZmZXJlbnRseS4gQW5kcm9pZCBkb2Vzbid0IHRyaWdnZXJcbiAgICAvLyBjb21wb3NpdGlvbiBldmVudHMgZm9yIGxhbmd1YWdlIGlucHV0IG1ldGhvZHMgZS5nLlxuICAgIC8vIENoaW5lc2UsIGJ1dCBpbnN0ZWFkIHRyaWdnZXJzIHRoZW0gZm9yIHNwZWxsaW5nXG4gICAgLy8gc3VnZ2VzdGlvbnMuLi4gKHNlZSBEaXNjdXNzaW9uLyMxNjIpXG4gICAgdmFyIGNvbXBvc2luZyA9IGZhbHNlO1xuICAgIGlmICghaXNBbmRyb2lkICYmICFpc1JhbmdlKSB7XG4gICAgICB0aGlzLm9uKCdjb21wb3NpdGlvbnN0YXJ0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb21wb3NpbmcgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgICB0aGlzLm9uKCdjb21wb3NpdGlvbmVuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29tcG9zaW5nID0gZmFsc2U7XG4gICAgICAgIC8vIGluIElFMTEgdGhlIFwiY29tcG9zaXRpb25lbmRcIiBldmVudCBmaXJlcyBBRlRFUlxuICAgICAgICAvLyB0aGUgXCJpbnB1dFwiIGV2ZW50LCBzbyB0aGUgaW5wdXQgaGFuZGxlciBpcyBibG9ja2VkXG4gICAgICAgIC8vIGF0IHRoZSBlbmQuLi4gaGF2ZSB0byBjYWxsIGl0IGhlcmUuXG4gICAgICAgIC8vXG4gICAgICAgIC8vICMxMzI3OiBpbiBsYXp5IG1vZGUgdGhpcyBpcyB1bmVjZXNzYXJ5LlxuICAgICAgICBpZiAoIWxhenkpIHtcbiAgICAgICAgICBzZWxmLmxpc3RlbmVyKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIHByZXZlbnQgbWVzc2luZyB3aXRoIHRoZSBpbnB1dCB3aGVuIHVzZXIgaXMgdHlwaW5nLFxuICAgIC8vIGFuZCBmb3JjZSB1cGRhdGUgb24gYmx1ci5cbiAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgICBpZiAoIWlzUmFuZ2UgJiYgIWxhenkpIHtcbiAgICAgIHRoaXMub24oJ2ZvY3VzJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLmZvY3VzZWQgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgICB0aGlzLm9uKCdibHVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLmZvY3VzZWQgPSBmYWxzZTtcbiAgICAgICAgLy8gZG8gbm90IHN5bmMgdmFsdWUgYWZ0ZXIgZnJhZ21lbnQgcmVtb3ZhbCAoIzIwMTcpXG4gICAgICAgIGlmICghc2VsZi5fZnJhZyB8fCBzZWxmLl9mcmFnLmluc2VydGVkKSB7XG4gICAgICAgICAgc2VsZi5yYXdMaXN0ZW5lcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBOb3cgYXR0YWNoIHRoZSBtYWluIGxpc3RlbmVyXG4gICAgdGhpcy5saXN0ZW5lciA9IHRoaXMucmF3TGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoY29tcG9zaW5nIHx8ICFzZWxmLl9ib3VuZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgdmFsID0gbnVtYmVyIHx8IGlzUmFuZ2UgPyB0b051bWJlcihlbC52YWx1ZSkgOiBlbC52YWx1ZTtcbiAgICAgIHNlbGYuc2V0KHZhbCk7XG4gICAgICAvLyBmb3JjZSB1cGRhdGUgb24gbmV4dCB0aWNrIHRvIGF2b2lkIGxvY2sgJiBzYW1lIHZhbHVlXG4gICAgICAvLyBhbHNvIG9ubHkgdXBkYXRlIHdoZW4gdXNlciBpcyBub3QgdHlwaW5nXG4gICAgICBuZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChzZWxmLl9ib3VuZCAmJiAhc2VsZi5mb2N1c2VkKSB7XG4gICAgICAgICAgc2VsZi51cGRhdGUoc2VsZi5fd2F0Y2hlci52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBhcHBseSBkZWJvdW5jZVxuICAgIGlmIChkZWJvdW5jZSkge1xuICAgICAgdGhpcy5saXN0ZW5lciA9IF9kZWJvdW5jZSh0aGlzLmxpc3RlbmVyLCBkZWJvdW5jZSk7XG4gICAgfVxuXG4gICAgLy8gU3VwcG9ydCBqUXVlcnkgZXZlbnRzLCBzaW5jZSBqUXVlcnkudHJpZ2dlcigpIGRvZXNuJ3RcbiAgICAvLyB0cmlnZ2VyIG5hdGl2ZSBldmVudHMgaW4gc29tZSBjYXNlcyBhbmQgc29tZSBwbHVnaW5zXG4gICAgLy8gcmVseSBvbiAkLnRyaWdnZXIoKVxuICAgIC8vXG4gICAgLy8gV2Ugd2FudCB0byBtYWtlIHN1cmUgaWYgYSBsaXN0ZW5lciBpcyBhdHRhY2hlZCB1c2luZ1xuICAgIC8vIGpRdWVyeSwgaXQgaXMgYWxzbyByZW1vdmVkIHdpdGggalF1ZXJ5LCB0aGF0J3Mgd2h5XG4gICAgLy8gd2UgZG8gdGhlIGNoZWNrIGZvciBlYWNoIGRpcmVjdGl2ZSBpbnN0YW5jZSBhbmRcbiAgICAvLyBzdG9yZSB0aGF0IGNoZWNrIHJlc3VsdCBvbiBpdHNlbGYuIFRoaXMgYWxzbyBhbGxvd3NcbiAgICAvLyBlYXNpZXIgdGVzdCBjb3ZlcmFnZSBjb250cm9sIGJ5IHVuc2V0dGluZyB0aGUgZ2xvYmFsXG4gICAgLy8galF1ZXJ5IHZhcmlhYmxlIGluIHRlc3RzLlxuICAgIHRoaXMuaGFzalF1ZXJ5ID0gdHlwZW9mIGpRdWVyeSA9PT0gJ2Z1bmN0aW9uJztcbiAgICBpZiAodGhpcy5oYXNqUXVlcnkpIHtcbiAgICAgIHZhciBtZXRob2QgPSBqUXVlcnkuZm4ub24gPyAnb24nIDogJ2JpbmQnO1xuICAgICAgalF1ZXJ5KGVsKVttZXRob2RdKCdjaGFuZ2UnLCB0aGlzLnJhd0xpc3RlbmVyKTtcbiAgICAgIGlmICghbGF6eSkge1xuICAgICAgICBqUXVlcnkoZWwpW21ldGhvZF0oJ2lucHV0JywgdGhpcy5saXN0ZW5lcik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub24oJ2NoYW5nZScsIHRoaXMucmF3TGlzdGVuZXIpO1xuICAgICAgaWYgKCFsYXp5KSB7XG4gICAgICAgIHRoaXMub24oJ2lucHV0JywgdGhpcy5saXN0ZW5lcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSUU5IGRvZXNuJ3QgZmlyZSBpbnB1dCBldmVudCBvbiBiYWNrc3BhY2UvZGVsL2N1dFxuICAgIGlmICghbGF6eSAmJiBpc0lFOSkge1xuICAgICAgdGhpcy5vbignY3V0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBuZXh0VGljayhzZWxmLmxpc3RlbmVyKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5vbigna2V5dXAnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSA0NiB8fCBlLmtleUNvZGUgPT09IDgpIHtcbiAgICAgICAgICBzZWxmLmxpc3RlbmVyKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIHNldCBpbml0aWFsIHZhbHVlIGlmIHByZXNlbnRcbiAgICBpZiAoZWwuaGFzQXR0cmlidXRlKCd2YWx1ZScpIHx8IGVsLnRhZ05hbWUgPT09ICdURVhUQVJFQScgJiYgZWwudmFsdWUudHJpbSgpKSB7XG4gICAgICB0aGlzLmFmdGVyQmluZCA9IHRoaXMubGlzdGVuZXI7XG4gICAgfVxuICB9LFxuXG4gIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKHZhbHVlKSB7XG4gICAgLy8gIzMwMjkgb25seSB1cGRhdGUgd2hlbiB0aGUgdmFsdWUgY2hhbmdlcy4gVGhpcyBwcmV2ZW50XG4gICAgLy8gYnJvd3NlcnMgZnJvbSBvdmVyd3JpdGluZyB2YWx1ZXMgbGlrZSBzZWxlY3Rpb25TdGFydFxuICAgIHZhbHVlID0gX3RvU3RyaW5nKHZhbHVlKTtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuZWwudmFsdWUpIHRoaXMuZWwudmFsdWUgPSB2YWx1ZTtcbiAgfSxcblxuICB1bmJpbmQ6IGZ1bmN0aW9uIHVuYmluZCgpIHtcbiAgICB2YXIgZWwgPSB0aGlzLmVsO1xuICAgIGlmICh0aGlzLmhhc2pRdWVyeSkge1xuICAgICAgdmFyIG1ldGhvZCA9IGpRdWVyeS5mbi5vZmYgPyAnb2ZmJyA6ICd1bmJpbmQnO1xuICAgICAgalF1ZXJ5KGVsKVttZXRob2RdKCdjaGFuZ2UnLCB0aGlzLmxpc3RlbmVyKTtcbiAgICAgIGpRdWVyeShlbClbbWV0aG9kXSgnaW5wdXQnLCB0aGlzLmxpc3RlbmVyKTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciByYWRpbyA9IHtcblxuICBiaW5kOiBmdW5jdGlvbiBiaW5kKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgZWwgPSB0aGlzLmVsO1xuXG4gICAgdGhpcy5nZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHZhbHVlIG92ZXJ3cml0ZSB2aWEgdi1iaW5kOnZhbHVlXG4gICAgICBpZiAoZWwuaGFzT3duUHJvcGVydHkoJ192YWx1ZScpKSB7XG4gICAgICAgIHJldHVybiBlbC5fdmFsdWU7XG4gICAgICB9XG4gICAgICB2YXIgdmFsID0gZWwudmFsdWU7XG4gICAgICBpZiAoc2VsZi5wYXJhbXMubnVtYmVyKSB7XG4gICAgICAgIHZhbCA9IHRvTnVtYmVyKHZhbCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsO1xuICAgIH07XG5cbiAgICB0aGlzLmxpc3RlbmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5zZXQoc2VsZi5nZXRWYWx1ZSgpKTtcbiAgICB9O1xuICAgIHRoaXMub24oJ2NoYW5nZScsIHRoaXMubGlzdGVuZXIpO1xuXG4gICAgaWYgKGVsLmhhc0F0dHJpYnV0ZSgnY2hlY2tlZCcpKSB7XG4gICAgICB0aGlzLmFmdGVyQmluZCA9IHRoaXMubGlzdGVuZXI7XG4gICAgfVxuICB9LFxuXG4gIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKHZhbHVlKSB7XG4gICAgdGhpcy5lbC5jaGVja2VkID0gbG9vc2VFcXVhbCh2YWx1ZSwgdGhpcy5nZXRWYWx1ZSgpKTtcbiAgfVxufTtcblxudmFyIHNlbGVjdCA9IHtcblxuICBiaW5kOiBmdW5jdGlvbiBiaW5kKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGVsID0gdGhpcy5lbDtcblxuICAgIC8vIG1ldGhvZCB0byBmb3JjZSB1cGRhdGUgRE9NIHVzaW5nIGxhdGVzdCB2YWx1ZS5cbiAgICB0aGlzLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHNlbGYuX3dhdGNoZXIpIHtcbiAgICAgICAgc2VsZi51cGRhdGUoc2VsZi5fd2F0Y2hlci5nZXQoKSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIGNoZWNrIGlmIHRoaXMgaXMgYSBtdWx0aXBsZSBzZWxlY3RcbiAgICB2YXIgbXVsdGlwbGUgPSB0aGlzLm11bHRpcGxlID0gZWwuaGFzQXR0cmlidXRlKCdtdWx0aXBsZScpO1xuXG4gICAgLy8gYXR0YWNoIGxpc3RlbmVyXG4gICAgdGhpcy5saXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGdldFZhbHVlKGVsLCBtdWx0aXBsZSk7XG4gICAgICB2YWx1ZSA9IHNlbGYucGFyYW1zLm51bWJlciA/IGlzQXJyYXkodmFsdWUpID8gdmFsdWUubWFwKHRvTnVtYmVyKSA6IHRvTnVtYmVyKHZhbHVlKSA6IHZhbHVlO1xuICAgICAgc2VsZi5zZXQodmFsdWUpO1xuICAgIH07XG4gICAgdGhpcy5vbignY2hhbmdlJywgdGhpcy5saXN0ZW5lcik7XG5cbiAgICAvLyBpZiBoYXMgaW5pdGlhbCB2YWx1ZSwgc2V0IGFmdGVyQmluZFxuICAgIHZhciBpbml0VmFsdWUgPSBnZXRWYWx1ZShlbCwgbXVsdGlwbGUsIHRydWUpO1xuICAgIGlmIChtdWx0aXBsZSAmJiBpbml0VmFsdWUubGVuZ3RoIHx8ICFtdWx0aXBsZSAmJiBpbml0VmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuYWZ0ZXJCaW5kID0gdGhpcy5saXN0ZW5lcjtcbiAgICB9XG5cbiAgICAvLyBBbGwgbWFqb3IgYnJvd3NlcnMgZXhjZXB0IEZpcmVmb3ggcmVzZXRzXG4gICAgLy8gc2VsZWN0ZWRJbmRleCB3aXRoIHZhbHVlIC0xIHRvIDAgd2hlbiB0aGUgZWxlbWVudFxuICAgIC8vIGlzIGFwcGVuZGVkIHRvIGEgbmV3IHBhcmVudCwgdGhlcmVmb3JlIHdlIGhhdmUgdG9cbiAgICAvLyBmb3JjZSBhIERPTSB1cGRhdGUgd2hlbmV2ZXIgdGhhdCBoYXBwZW5zLi4uXG4gICAgdGhpcy52bS4kb24oJ2hvb2s6YXR0YWNoZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBuZXh0VGljayhfdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgfSk7XG4gICAgaWYgKCFpbkRvYyhlbCkpIHtcbiAgICAgIG5leHRUaWNrKHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIH1cbiAgfSxcblxuICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSh2YWx1ZSkge1xuICAgIHZhciBlbCA9IHRoaXMuZWw7XG4gICAgZWwuc2VsZWN0ZWRJbmRleCA9IC0xO1xuICAgIHZhciBtdWx0aSA9IHRoaXMubXVsdGlwbGUgJiYgaXNBcnJheSh2YWx1ZSk7XG4gICAgdmFyIG9wdGlvbnMgPSBlbC5vcHRpb25zO1xuICAgIHZhciBpID0gb3B0aW9ucy5sZW5ndGg7XG4gICAgdmFyIG9wLCB2YWw7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgb3AgPSBvcHRpb25zW2ldO1xuICAgICAgdmFsID0gb3AuaGFzT3duUHJvcGVydHkoJ192YWx1ZScpID8gb3AuX3ZhbHVlIDogb3AudmFsdWU7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBlcWVxZXEgKi9cbiAgICAgIG9wLnNlbGVjdGVkID0gbXVsdGkgPyBpbmRleE9mJDEodmFsdWUsIHZhbCkgPiAtMSA6IGxvb3NlRXF1YWwodmFsdWUsIHZhbCk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIGVxZXFlcSAqL1xuICAgIH1cbiAgfSxcblxuICB1bmJpbmQ6IGZ1bmN0aW9uIHVuYmluZCgpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIHRoaXMudm0uJG9mZignaG9vazphdHRhY2hlZCcsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICB9XG59O1xuXG4vKipcbiAqIEdldCBzZWxlY3QgdmFsdWVcbiAqXG4gKiBAcGFyYW0ge1NlbGVjdEVsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge0Jvb2xlYW59IG11bHRpXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGluaXRcbiAqIEByZXR1cm4ge0FycmF5fCp9XG4gKi9cblxuZnVuY3Rpb24gZ2V0VmFsdWUoZWwsIG11bHRpLCBpbml0KSB7XG4gIHZhciByZXMgPSBtdWx0aSA/IFtdIDogbnVsbDtcbiAgdmFyIG9wLCB2YWwsIHNlbGVjdGVkO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IGVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgb3AgPSBlbC5vcHRpb25zW2ldO1xuICAgIHNlbGVjdGVkID0gaW5pdCA/IG9wLmhhc0F0dHJpYnV0ZSgnc2VsZWN0ZWQnKSA6IG9wLnNlbGVjdGVkO1xuICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgdmFsID0gb3AuaGFzT3duUHJvcGVydHkoJ192YWx1ZScpID8gb3AuX3ZhbHVlIDogb3AudmFsdWU7XG4gICAgICBpZiAobXVsdGkpIHtcbiAgICAgICAgcmVzLnB1c2godmFsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXM7XG59XG5cbi8qKlxuICogTmF0aXZlIEFycmF5LmluZGV4T2YgdXNlcyBzdHJpY3QgZXF1YWwsIGJ1dCBpbiB0aGlzXG4gKiBjYXNlIHdlIG5lZWQgdG8gbWF0Y2ggc3RyaW5nL251bWJlcnMgd2l0aCBjdXN0b20gZXF1YWwuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyXG4gKiBAcGFyYW0geyp9IHZhbFxuICovXG5cbmZ1bmN0aW9uIGluZGV4T2YkMShhcnIsIHZhbCkge1xuICB2YXIgaSA9IGFyci5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICBpZiAobG9vc2VFcXVhbChhcnJbaV0sIHZhbCkpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbnZhciBjaGVja2JveCA9IHtcblxuICBiaW5kOiBmdW5jdGlvbiBiaW5kKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgZWwgPSB0aGlzLmVsO1xuXG4gICAgdGhpcy5nZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBlbC5oYXNPd25Qcm9wZXJ0eSgnX3ZhbHVlJykgPyBlbC5fdmFsdWUgOiBzZWxmLnBhcmFtcy5udW1iZXIgPyB0b051bWJlcihlbC52YWx1ZSkgOiBlbC52YWx1ZTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZ2V0Qm9vbGVhblZhbHVlKCkge1xuICAgICAgdmFyIHZhbCA9IGVsLmNoZWNrZWQ7XG4gICAgICBpZiAodmFsICYmIGVsLmhhc093blByb3BlcnR5KCdfdHJ1ZVZhbHVlJykpIHtcbiAgICAgICAgcmV0dXJuIGVsLl90cnVlVmFsdWU7XG4gICAgICB9XG4gICAgICBpZiAoIXZhbCAmJiBlbC5oYXNPd25Qcm9wZXJ0eSgnX2ZhbHNlVmFsdWUnKSkge1xuICAgICAgICByZXR1cm4gZWwuX2ZhbHNlVmFsdWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsO1xuICAgIH1cblxuICAgIHRoaXMubGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbW9kZWwgPSBzZWxmLl93YXRjaGVyLnZhbHVlO1xuICAgICAgaWYgKGlzQXJyYXkobW9kZWwpKSB7XG4gICAgICAgIHZhciB2YWwgPSBzZWxmLmdldFZhbHVlKCk7XG4gICAgICAgIGlmIChlbC5jaGVja2VkKSB7XG4gICAgICAgICAgaWYgKGluZGV4T2YobW9kZWwsIHZhbCkgPCAwKSB7XG4gICAgICAgICAgICBtb2RlbC5wdXNoKHZhbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1vZGVsLiRyZW1vdmUodmFsKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5zZXQoZ2V0Qm9vbGVhblZhbHVlKCkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCB0aGlzLmxpc3RlbmVyKTtcbiAgICBpZiAoZWwuaGFzQXR0cmlidXRlKCdjaGVja2VkJykpIHtcbiAgICAgIHRoaXMuYWZ0ZXJCaW5kID0gdGhpcy5saXN0ZW5lcjtcbiAgICB9XG4gIH0sXG5cbiAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUodmFsdWUpIHtcbiAgICB2YXIgZWwgPSB0aGlzLmVsO1xuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgZWwuY2hlY2tlZCA9IGluZGV4T2YodmFsdWUsIHRoaXMuZ2V0VmFsdWUoKSkgPiAtMTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGVsLmhhc093blByb3BlcnR5KCdfdHJ1ZVZhbHVlJykpIHtcbiAgICAgICAgZWwuY2hlY2tlZCA9IGxvb3NlRXF1YWwodmFsdWUsIGVsLl90cnVlVmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWwuY2hlY2tlZCA9ICEhdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG52YXIgaGFuZGxlcnMgPSB7XG4gIHRleHQ6IHRleHQkMixcbiAgcmFkaW86IHJhZGlvLFxuICBzZWxlY3Q6IHNlbGVjdCxcbiAgY2hlY2tib3g6IGNoZWNrYm94XG59O1xuXG52YXIgbW9kZWwgPSB7XG5cbiAgcHJpb3JpdHk6IE1PREVMLFxuICB0d29XYXk6IHRydWUsXG4gIGhhbmRsZXJzOiBoYW5kbGVycyxcbiAgcGFyYW1zOiBbJ2xhenknLCAnbnVtYmVyJywgJ2RlYm91bmNlJ10sXG5cbiAgLyoqXG4gICAqIFBvc3NpYmxlIGVsZW1lbnRzOlxuICAgKiAgIDxzZWxlY3Q+XG4gICAqICAgPHRleHRhcmVhPlxuICAgKiAgIDxpbnB1dCB0eXBlPVwiKlwiPlxuICAgKiAgICAgLSB0ZXh0XG4gICAqICAgICAtIGNoZWNrYm94XG4gICAqICAgICAtIHJhZGlvXG4gICAqICAgICAtIG51bWJlclxuICAgKi9cblxuICBiaW5kOiBmdW5jdGlvbiBiaW5kKCkge1xuICAgIC8vIGZyaWVuZGx5IHdhcm5pbmcuLi5cbiAgICB0aGlzLmNoZWNrRmlsdGVycygpO1xuICAgIGlmICh0aGlzLmhhc1JlYWQgJiYgIXRoaXMuaGFzV3JpdGUpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybignSXQgc2VlbXMgeW91IGFyZSB1c2luZyBhIHJlYWQtb25seSBmaWx0ZXIgd2l0aCAnICsgJ3YtbW9kZWw9XCInICsgdGhpcy5kZXNjcmlwdG9yLnJhdyArICdcIi4gJyArICdZb3UgbWlnaHQgd2FudCB0byB1c2UgYSB0d28td2F5IGZpbHRlciB0byBlbnN1cmUgY29ycmVjdCBiZWhhdmlvci4nLCB0aGlzLnZtKTtcbiAgICB9XG4gICAgdmFyIGVsID0gdGhpcy5lbDtcbiAgICB2YXIgdGFnID0gZWwudGFnTmFtZTtcbiAgICB2YXIgaGFuZGxlcjtcbiAgICBpZiAodGFnID09PSAnSU5QVVQnKSB7XG4gICAgICBoYW5kbGVyID0gaGFuZGxlcnNbZWwudHlwZV0gfHwgaGFuZGxlcnMudGV4dDtcbiAgICB9IGVsc2UgaWYgKHRhZyA9PT0gJ1NFTEVDVCcpIHtcbiAgICAgIGhhbmRsZXIgPSBoYW5kbGVycy5zZWxlY3Q7XG4gICAgfSBlbHNlIGlmICh0YWcgPT09ICdURVhUQVJFQScpIHtcbiAgICAgIGhhbmRsZXIgPSBoYW5kbGVycy50ZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oJ3YtbW9kZWwgZG9lcyBub3Qgc3VwcG9ydCBlbGVtZW50IHR5cGU6ICcgKyB0YWcsIHRoaXMudm0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbC5fX3ZfbW9kZWwgPSB0aGlzO1xuICAgIGhhbmRsZXIuYmluZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlID0gaGFuZGxlci51cGRhdGU7XG4gICAgdGhpcy5fdW5iaW5kID0gaGFuZGxlci51bmJpbmQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENoZWNrIHJlYWQvd3JpdGUgZmlsdGVyIHN0YXRzLlxuICAgKi9cblxuICBjaGVja0ZpbHRlcnM6IGZ1bmN0aW9uIGNoZWNrRmlsdGVycygpIHtcbiAgICB2YXIgZmlsdGVycyA9IHRoaXMuZmlsdGVycztcbiAgICBpZiAoIWZpbHRlcnMpIHJldHVybjtcbiAgICB2YXIgaSA9IGZpbHRlcnMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHZhciBmaWx0ZXIgPSByZXNvbHZlQXNzZXQodGhpcy52bS4kb3B0aW9ucywgJ2ZpbHRlcnMnLCBmaWx0ZXJzW2ldLm5hbWUpO1xuICAgICAgaWYgKHR5cGVvZiBmaWx0ZXIgPT09ICdmdW5jdGlvbicgfHwgZmlsdGVyLnJlYWQpIHtcbiAgICAgICAgdGhpcy5oYXNSZWFkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChmaWx0ZXIud3JpdGUpIHtcbiAgICAgICAgdGhpcy5oYXNXcml0ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHVuYmluZDogZnVuY3Rpb24gdW5iaW5kKCkge1xuICAgIHRoaXMuZWwuX192X21vZGVsID0gbnVsbDtcbiAgICB0aGlzLl91bmJpbmQgJiYgdGhpcy5fdW5iaW5kKCk7XG4gIH1cbn07XG5cbi8vIGtleUNvZGUgYWxpYXNlc1xudmFyIGtleUNvZGVzID0ge1xuICBlc2M6IDI3LFxuICB0YWI6IDksXG4gIGVudGVyOiAxMyxcbiAgc3BhY2U6IDMyLFxuICAnZGVsZXRlJzogWzgsIDQ2XSxcbiAgdXA6IDM4LFxuICBsZWZ0OiAzNyxcbiAgcmlnaHQ6IDM5LFxuICBkb3duOiA0MFxufTtcblxuZnVuY3Rpb24ga2V5RmlsdGVyKGhhbmRsZXIsIGtleXMpIHtcbiAgdmFyIGNvZGVzID0ga2V5cy5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciBjaGFyQ29kZSA9IGtleS5jaGFyQ29kZUF0KDApO1xuICAgIGlmIChjaGFyQ29kZSA+IDQ3ICYmIGNoYXJDb2RlIDwgNTgpIHtcbiAgICAgIHJldHVybiBwYXJzZUludChrZXksIDEwKTtcbiAgICB9XG4gICAgaWYgKGtleS5sZW5ndGggPT09IDEpIHtcbiAgICAgIGNoYXJDb2RlID0ga2V5LnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKTtcbiAgICAgIGlmIChjaGFyQ29kZSA+IDY0ICYmIGNoYXJDb2RlIDwgOTEpIHtcbiAgICAgICAgcmV0dXJuIGNoYXJDb2RlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ga2V5Q29kZXNba2V5XTtcbiAgfSk7XG4gIGNvZGVzID0gW10uY29uY2F0LmFwcGx5KFtdLCBjb2Rlcyk7XG4gIHJldHVybiBmdW5jdGlvbiBrZXlIYW5kbGVyKGUpIHtcbiAgICBpZiAoY29kZXMuaW5kZXhPZihlLmtleUNvZGUpID4gLTEpIHtcbiAgICAgIHJldHVybiBoYW5kbGVyLmNhbGwodGhpcywgZSk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBzdG9wRmlsdGVyKGhhbmRsZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHN0b3BIYW5kbGVyKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHJldHVybiBoYW5kbGVyLmNhbGwodGhpcywgZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHByZXZlbnRGaWx0ZXIoaGFuZGxlcikge1xuICByZXR1cm4gZnVuY3Rpb24gcHJldmVudEhhbmRsZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICByZXR1cm4gaGFuZGxlci5jYWxsKHRoaXMsIGUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzZWxmRmlsdGVyKGhhbmRsZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHNlbGZIYW5kbGVyKGUpIHtcbiAgICBpZiAoZS50YXJnZXQgPT09IGUuY3VycmVudFRhcmdldCkge1xuICAgICAgcmV0dXJuIGhhbmRsZXIuY2FsbCh0aGlzLCBlKTtcbiAgICB9XG4gIH07XG59XG5cbnZhciBvbiQxID0ge1xuXG4gIHByaW9yaXR5OiBPTixcbiAgYWNjZXB0U3RhdGVtZW50OiB0cnVlLFxuICBrZXlDb2Rlczoga2V5Q29kZXMsXG5cbiAgYmluZDogZnVuY3Rpb24gYmluZCgpIHtcbiAgICAvLyBkZWFsIHdpdGggaWZyYW1lc1xuICAgIGlmICh0aGlzLmVsLnRhZ05hbWUgPT09ICdJRlJBTUUnICYmIHRoaXMuYXJnICE9PSAnbG9hZCcpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHRoaXMuaWZyYW1lQmluZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb24oc2VsZi5lbC5jb250ZW50V2luZG93LCBzZWxmLmFyZywgc2VsZi5oYW5kbGVyLCBzZWxmLm1vZGlmaWVycy5jYXB0dXJlKTtcbiAgICAgIH07XG4gICAgICB0aGlzLm9uKCdsb2FkJywgdGhpcy5pZnJhbWVCaW5kKTtcbiAgICB9XG4gIH0sXG5cbiAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoaGFuZGxlcikge1xuICAgIC8vIHN0dWIgYSBub29wIGZvciB2LW9uIHdpdGggbm8gdmFsdWUsXG4gICAgLy8gZS5nLiBAbW91c2Vkb3duLnByZXZlbnRcbiAgICBpZiAoIXRoaXMuZGVzY3JpcHRvci5yYXcpIHtcbiAgICAgIGhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGhhbmRsZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2Fybigndi1vbjonICsgdGhpcy5hcmcgKyAnPVwiJyArIHRoaXMuZXhwcmVzc2lvbiArICdcIiBleHBlY3RzIGEgZnVuY3Rpb24gdmFsdWUsICcgKyAnZ290ICcgKyBoYW5kbGVyLCB0aGlzLnZtKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBhcHBseSBtb2RpZmllcnNcbiAgICBpZiAodGhpcy5tb2RpZmllcnMuc3RvcCkge1xuICAgICAgaGFuZGxlciA9IHN0b3BGaWx0ZXIoaGFuZGxlcik7XG4gICAgfVxuICAgIGlmICh0aGlzLm1vZGlmaWVycy5wcmV2ZW50KSB7XG4gICAgICBoYW5kbGVyID0gcHJldmVudEZpbHRlcihoYW5kbGVyKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubW9kaWZpZXJzLnNlbGYpIHtcbiAgICAgIGhhbmRsZXIgPSBzZWxmRmlsdGVyKGhhbmRsZXIpO1xuICAgIH1cbiAgICAvLyBrZXkgZmlsdGVyXG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLm1vZGlmaWVycykuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBrZXkgIT09ICdzdG9wJyAmJiBrZXkgIT09ICdwcmV2ZW50JyAmJiBrZXkgIT09ICdzZWxmJyAmJiBrZXkgIT09ICdjYXB0dXJlJztcbiAgICB9KTtcbiAgICBpZiAoa2V5cy5sZW5ndGgpIHtcbiAgICAgIGhhbmRsZXIgPSBrZXlGaWx0ZXIoaGFuZGxlciwga2V5cyk7XG4gICAgfVxuXG4gICAgdGhpcy5yZXNldCgpO1xuICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XG5cbiAgICBpZiAodGhpcy5pZnJhbWVCaW5kKSB7XG4gICAgICB0aGlzLmlmcmFtZUJpbmQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb24odGhpcy5lbCwgdGhpcy5hcmcsIHRoaXMuaGFuZGxlciwgdGhpcy5tb2RpZmllcnMuY2FwdHVyZSk7XG4gICAgfVxuICB9LFxuXG4gIHJlc2V0OiBmdW5jdGlvbiByZXNldCgpIHtcbiAgICB2YXIgZWwgPSB0aGlzLmlmcmFtZUJpbmQgPyB0aGlzLmVsLmNvbnRlbnRXaW5kb3cgOiB0aGlzLmVsO1xuICAgIGlmICh0aGlzLmhhbmRsZXIpIHtcbiAgICAgIG9mZihlbCwgdGhpcy5hcmcsIHRoaXMuaGFuZGxlcik7XG4gICAgfVxuICB9LFxuXG4gIHVuYmluZDogZnVuY3Rpb24gdW5iaW5kKCkge1xuICAgIHRoaXMucmVzZXQoKTtcbiAgfVxufTtcblxudmFyIHByZWZpeGVzID0gWyctd2Via2l0LScsICctbW96LScsICctbXMtJ107XG52YXIgY2FtZWxQcmVmaXhlcyA9IFsnV2Via2l0JywgJ01veicsICdtcyddO1xudmFyIGltcG9ydGFudFJFID0gLyFpbXBvcnRhbnQ7PyQvO1xudmFyIHByb3BDYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbnZhciB0ZXN0RWwgPSBudWxsO1xuXG52YXIgc3R5bGUgPSB7XG5cbiAgZGVlcDogdHJ1ZSxcblxuICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLmVsLnN0eWxlLmNzc1RleHQgPSB2YWx1ZTtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB0aGlzLmhhbmRsZU9iamVjdCh2YWx1ZS5yZWR1Y2UoZXh0ZW5kLCB7fSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhhbmRsZU9iamVjdCh2YWx1ZSB8fCB7fSk7XG4gICAgfVxuICB9LFxuXG4gIGhhbmRsZU9iamVjdDogZnVuY3Rpb24gaGFuZGxlT2JqZWN0KHZhbHVlKSB7XG4gICAgLy8gY2FjaGUgb2JqZWN0IHN0eWxlcyBzbyB0aGF0IG9ubHkgY2hhbmdlZCBwcm9wc1xuICAgIC8vIGFyZSBhY3R1YWxseSB1cGRhdGVkLlxuICAgIHZhciBjYWNoZSA9IHRoaXMuY2FjaGUgfHwgKHRoaXMuY2FjaGUgPSB7fSk7XG4gICAgdmFyIG5hbWUsIHZhbDtcbiAgICBmb3IgKG5hbWUgaW4gY2FjaGUpIHtcbiAgICAgIGlmICghKG5hbWUgaW4gdmFsdWUpKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlU2luZ2xlKG5hbWUsIG51bGwpO1xuICAgICAgICBkZWxldGUgY2FjaGVbbmFtZV07XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAobmFtZSBpbiB2YWx1ZSkge1xuICAgICAgdmFsID0gdmFsdWVbbmFtZV07XG4gICAgICBpZiAodmFsICE9PSBjYWNoZVtuYW1lXSkge1xuICAgICAgICBjYWNoZVtuYW1lXSA9IHZhbDtcbiAgICAgICAgdGhpcy5oYW5kbGVTaW5nbGUobmFtZSwgdmFsKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgaGFuZGxlU2luZ2xlOiBmdW5jdGlvbiBoYW5kbGVTaW5nbGUocHJvcCwgdmFsdWUpIHtcbiAgICBwcm9wID0gbm9ybWFsaXplKHByb3ApO1xuICAgIGlmICghcHJvcCkgcmV0dXJuOyAvLyB1bnN1cHBvcnRlZCBwcm9wXG4gICAgLy8gY2FzdCBwb3NzaWJsZSBudW1iZXJzL2Jvb2xlYW5zIGludG8gc3RyaW5nc1xuICAgIGlmICh2YWx1ZSAhPSBudWxsKSB2YWx1ZSArPSAnJztcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHZhciBpc0ltcG9ydGFudCA9IGltcG9ydGFudFJFLnRlc3QodmFsdWUpID8gJ2ltcG9ydGFudCcgOiAnJztcbiAgICAgIGlmIChpc0ltcG9ydGFudCkge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB3YXJuKCdJdFxcJ3MgcHJvYmFibHkgYSBiYWQgaWRlYSB0byB1c2UgIWltcG9ydGFudCB3aXRoIGlubGluZSBydWxlcy4gJyArICdUaGlzIGZlYXR1cmUgd2lsbCBiZSBkZXByZWNhdGVkIGluIGEgZnV0dXJlIHZlcnNpb24gb2YgVnVlLicpO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZShpbXBvcnRhbnRSRSwgJycpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5lbC5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wLmtlYmFiLCB2YWx1ZSwgaXNJbXBvcnRhbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbC5zdHlsZVtwcm9wLmNhbWVsXSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVsLnN0eWxlW3Byb3AuY2FtZWxdID0gJyc7XG4gICAgfVxuICB9XG5cbn07XG5cbi8qKlxuICogTm9ybWFsaXplIGEgQ1NTIHByb3BlcnR5IG5hbWUuXG4gKiAtIGNhY2hlIHJlc3VsdFxuICogLSBhdXRvIHByZWZpeFxuICogLSBjYW1lbENhc2UgLT4gZGFzaC1jYXNlXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5mdW5jdGlvbiBub3JtYWxpemUocHJvcCkge1xuICBpZiAocHJvcENhY2hlW3Byb3BdKSB7XG4gICAgcmV0dXJuIHByb3BDYWNoZVtwcm9wXTtcbiAgfVxuICB2YXIgcmVzID0gcHJlZml4KHByb3ApO1xuICBwcm9wQ2FjaGVbcHJvcF0gPSBwcm9wQ2FjaGVbcmVzXSA9IHJlcztcbiAgcmV0dXJuIHJlcztcbn1cblxuLyoqXG4gKiBBdXRvIGRldGVjdCB0aGUgYXBwcm9wcmlhdGUgcHJlZml4IGZvciBhIENTUyBwcm9wZXJ0eS5cbiAqIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3BhdWxpcmlzaC81MjM2OTJcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcFxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmZ1bmN0aW9uIHByZWZpeChwcm9wKSB7XG4gIHByb3AgPSBoeXBoZW5hdGUocHJvcCk7XG4gIHZhciBjYW1lbCA9IGNhbWVsaXplKHByb3ApO1xuICB2YXIgdXBwZXIgPSBjYW1lbC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGNhbWVsLnNsaWNlKDEpO1xuICBpZiAoIXRlc3RFbCkge1xuICAgIHRlc3RFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB9XG4gIHZhciBpID0gcHJlZml4ZXMubGVuZ3RoO1xuICB2YXIgcHJlZml4ZWQ7XG4gIGlmIChjYW1lbCAhPT0gJ2ZpbHRlcicgJiYgY2FtZWwgaW4gdGVzdEVsLnN0eWxlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtlYmFiOiBwcm9wLFxuICAgICAgY2FtZWw6IGNhbWVsXG4gICAgfTtcbiAgfVxuICB3aGlsZSAoaS0tKSB7XG4gICAgcHJlZml4ZWQgPSBjYW1lbFByZWZpeGVzW2ldICsgdXBwZXI7XG4gICAgaWYgKHByZWZpeGVkIGluIHRlc3RFbC5zdHlsZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAga2ViYWI6IHByZWZpeGVzW2ldICsgcHJvcCxcbiAgICAgICAgY2FtZWw6IHByZWZpeGVkXG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuXG4vLyB4bGlua1xudmFyIHhsaW5rTlMgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc7XG52YXIgeGxpbmtSRSA9IC9eeGxpbms6LztcblxuLy8gY2hlY2sgZm9yIGF0dHJpYnV0ZXMgdGhhdCBwcm9oaWJpdCBpbnRlcnBvbGF0aW9uc1xudmFyIGRpc2FsbG93ZWRJbnRlcnBBdHRyUkUgPSAvXnYtfF46fF5AfF4oPzppc3x0cmFuc2l0aW9ufHRyYW5zaXRpb24tbW9kZXxkZWJvdW5jZXx0cmFjay1ieXxzdGFnZ2VyfGVudGVyLXN0YWdnZXJ8bGVhdmUtc3RhZ2dlcikkLztcbi8vIHRoZXNlIGF0dHJpYnV0ZXMgc2hvdWxkIGFsc28gc2V0IHRoZWlyIGNvcnJlc3BvbmRpbmcgcHJvcGVydGllc1xuLy8gYmVjYXVzZSB0aGV5IG9ubHkgYWZmZWN0IHRoZSBpbml0aWFsIHN0YXRlIG9mIHRoZSBlbGVtZW50XG52YXIgYXR0cldpdGhQcm9wc1JFID0gL14oPzp2YWx1ZXxjaGVja2VkfHNlbGVjdGVkfG11dGVkKSQvO1xuLy8gdGhlc2UgYXR0cmlidXRlcyBleHBlY3QgZW51bXJhdGVkIHZhbHVlcyBvZiBcInRydWVcIiBvciBcImZhbHNlXCJcbi8vIGJ1dCBhcmUgbm90IGJvb2xlYW4gYXR0cmlidXRlc1xudmFyIGVudW1lcmF0ZWRBdHRyUkUgPSAvXig/OmRyYWdnYWJsZXxjb250ZW50ZWRpdGFibGV8c3BlbGxjaGVjaykkLztcblxuLy8gdGhlc2UgYXR0cmlidXRlcyBzaG91bGQgc2V0IGEgaGlkZGVuIHByb3BlcnR5IGZvclxuLy8gYmluZGluZyB2LW1vZGVsIHRvIG9iamVjdCB2YWx1ZXNcbnZhciBtb2RlbFByb3BzID0ge1xuICB2YWx1ZTogJ192YWx1ZScsXG4gICd0cnVlLXZhbHVlJzogJ190cnVlVmFsdWUnLFxuICAnZmFsc2UtdmFsdWUnOiAnX2ZhbHNlVmFsdWUnXG59O1xuXG52YXIgYmluZCQxID0ge1xuXG4gIHByaW9yaXR5OiBCSU5ELFxuXG4gIGJpbmQ6IGZ1bmN0aW9uIGJpbmQoKSB7XG4gICAgdmFyIGF0dHIgPSB0aGlzLmFyZztcbiAgICB2YXIgdGFnID0gdGhpcy5lbC50YWdOYW1lO1xuICAgIC8vIHNob3VsZCBiZSBkZWVwIHdhdGNoIG9uIG9iamVjdCBtb2RlXG4gICAgaWYgKCFhdHRyKSB7XG4gICAgICB0aGlzLmRlZXAgPSB0cnVlO1xuICAgIH1cbiAgICAvLyBoYW5kbGUgaW50ZXJwb2xhdGlvbiBiaW5kaW5nc1xuICAgIHZhciBkZXNjcmlwdG9yID0gdGhpcy5kZXNjcmlwdG9yO1xuICAgIHZhciB0b2tlbnMgPSBkZXNjcmlwdG9yLmludGVycDtcbiAgICBpZiAodG9rZW5zKSB7XG4gICAgICAvLyBoYW5kbGUgaW50ZXJwb2xhdGlvbnMgd2l0aCBvbmUtdGltZSB0b2tlbnNcbiAgICAgIGlmIChkZXNjcmlwdG9yLmhhc09uZVRpbWUpIHtcbiAgICAgICAgdGhpcy5leHByZXNzaW9uID0gdG9rZW5zVG9FeHAodG9rZW5zLCB0aGlzLl9zY29wZSB8fCB0aGlzLnZtKTtcbiAgICAgIH1cblxuICAgICAgLy8gb25seSBhbGxvdyBiaW5kaW5nIG9uIG5hdGl2ZSBhdHRyaWJ1dGVzXG4gICAgICBpZiAoZGlzYWxsb3dlZEludGVycEF0dHJSRS50ZXN0KGF0dHIpIHx8IGF0dHIgPT09ICduYW1lJyAmJiAodGFnID09PSAnUEFSVElBTCcgfHwgdGFnID09PSAnU0xPVCcpKSB7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihhdHRyICsgJz1cIicgKyBkZXNjcmlwdG9yLnJhdyArICdcIjogJyArICdhdHRyaWJ1dGUgaW50ZXJwb2xhdGlvbiBpcyBub3QgYWxsb3dlZCBpbiBWdWUuanMgJyArICdkaXJlY3RpdmVzIGFuZCBzcGVjaWFsIGF0dHJpYnV0ZXMuJywgdGhpcy52bSk7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKGF0dHIpO1xuICAgICAgICB0aGlzLmludmFsaWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHZhciByYXcgPSBhdHRyICsgJz1cIicgKyBkZXNjcmlwdG9yLnJhdyArICdcIjogJztcbiAgICAgICAgLy8gd2FybiBzcmNcbiAgICAgICAgaWYgKGF0dHIgPT09ICdzcmMnKSB7XG4gICAgICAgICAgd2FybihyYXcgKyAnaW50ZXJwb2xhdGlvbiBpbiBcInNyY1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlICcgKyAnYSA0MDQgcmVxdWVzdC4gVXNlIHYtYmluZDpzcmMgaW5zdGVhZC4nLCB0aGlzLnZtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHdhcm4gc3R5bGVcbiAgICAgICAgaWYgKGF0dHIgPT09ICdzdHlsZScpIHtcbiAgICAgICAgICB3YXJuKHJhdyArICdpbnRlcnBvbGF0aW9uIGluIFwic3R5bGVcIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZSAnICsgJ3RoZSBhdHRyaWJ1dGUgdG8gYmUgZGlzY2FyZGVkIGluIEludGVybmV0IEV4cGxvcmVyLiAnICsgJ1VzZSB2LWJpbmQ6c3R5bGUgaW5zdGVhZC4nLCB0aGlzLnZtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmludmFsaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGF0dHIgPSB0aGlzLmFyZztcbiAgICBpZiAodGhpcy5hcmcpIHtcbiAgICAgIHRoaXMuaGFuZGxlU2luZ2xlKGF0dHIsIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oYW5kbGVPYmplY3QodmFsdWUgfHwge30pO1xuICAgIH1cbiAgfSxcblxuICAvLyBzaGFyZSBvYmplY3QgaGFuZGxlciB3aXRoIHYtYmluZDpjbGFzc1xuICBoYW5kbGVPYmplY3Q6IHN0eWxlLmhhbmRsZU9iamVjdCxcblxuICBoYW5kbGVTaW5nbGU6IGZ1bmN0aW9uIGhhbmRsZVNpbmdsZShhdHRyLCB2YWx1ZSkge1xuICAgIHZhciBlbCA9IHRoaXMuZWw7XG4gICAgdmFyIGludGVycCA9IHRoaXMuZGVzY3JpcHRvci5pbnRlcnA7XG4gICAgaWYgKHRoaXMubW9kaWZpZXJzLmNhbWVsKSB7XG4gICAgICBhdHRyID0gY2FtZWxpemUoYXR0cik7XG4gICAgfVxuICAgIGlmICghaW50ZXJwICYmIGF0dHJXaXRoUHJvcHNSRS50ZXN0KGF0dHIpICYmIGF0dHIgaW4gZWwpIHtcbiAgICAgIHZhciBhdHRyVmFsdWUgPSBhdHRyID09PSAndmFsdWUnID8gdmFsdWUgPT0gbnVsbCAvLyBJRTkgd2lsbCBzZXQgaW5wdXQudmFsdWUgdG8gXCJudWxsXCIgZm9yIG51bGwuLi5cbiAgICAgID8gJycgOiB2YWx1ZSA6IHZhbHVlO1xuXG4gICAgICBpZiAoZWxbYXR0cl0gIT09IGF0dHJWYWx1ZSkge1xuICAgICAgICBlbFthdHRyXSA9IGF0dHJWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gc2V0IG1vZGVsIHByb3BzXG4gICAgdmFyIG1vZGVsUHJvcCA9IG1vZGVsUHJvcHNbYXR0cl07XG4gICAgaWYgKCFpbnRlcnAgJiYgbW9kZWxQcm9wKSB7XG4gICAgICBlbFttb2RlbFByb3BdID0gdmFsdWU7XG4gICAgICAvLyB1cGRhdGUgdi1tb2RlbCBpZiBwcmVzZW50XG4gICAgICB2YXIgbW9kZWwgPSBlbC5fX3ZfbW9kZWw7XG4gICAgICBpZiAobW9kZWwpIHtcbiAgICAgICAgbW9kZWwubGlzdGVuZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gZG8gbm90IHNldCB2YWx1ZSBhdHRyaWJ1dGUgZm9yIHRleHRhcmVhXG4gICAgaWYgKGF0dHIgPT09ICd2YWx1ZScgJiYgZWwudGFnTmFtZSA9PT0gJ1RFWFRBUkVBJykge1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKGF0dHIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyB1cGRhdGUgYXR0cmlidXRlXG4gICAgaWYgKGVudW1lcmF0ZWRBdHRyUkUudGVzdChhdHRyKSkge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlID8gJ3RydWUnIDogJ2ZhbHNlJyk7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSAhPSBudWxsICYmIHZhbHVlICE9PSBmYWxzZSkge1xuICAgICAgaWYgKGF0dHIgPT09ICdjbGFzcycpIHtcbiAgICAgICAgLy8gaGFuZGxlIGVkZ2UgY2FzZSAjMTk2MDpcbiAgICAgICAgLy8gY2xhc3MgaW50ZXJwb2xhdGlvbiBzaG91bGQgbm90IG92ZXJ3cml0ZSBWdWUgdHJhbnNpdGlvbiBjbGFzc1xuICAgICAgICBpZiAoZWwuX192X3RyYW5zKSB7XG4gICAgICAgICAgdmFsdWUgKz0gJyAnICsgZWwuX192X3RyYW5zLmlkICsgJy10cmFuc2l0aW9uJztcbiAgICAgICAgfVxuICAgICAgICBzZXRDbGFzcyhlbCwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmICh4bGlua1JFLnRlc3QoYXR0cikpIHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlTlMoeGxpbmtOUywgYXR0ciwgdmFsdWUgPT09IHRydWUgPyAnJyA6IHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogdmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG4gICAgfVxuICB9XG59O1xuXG52YXIgZWwgPSB7XG5cbiAgcHJpb3JpdHk6IEVMLFxuXG4gIGJpbmQ6IGZ1bmN0aW9uIGJpbmQoKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCF0aGlzLmFyZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgaWQgPSB0aGlzLmlkID0gY2FtZWxpemUodGhpcy5hcmcpO1xuICAgIHZhciByZWZzID0gKHRoaXMuX3Njb3BlIHx8IHRoaXMudm0pLiRlbHM7XG4gICAgaWYgKGhhc093bihyZWZzLCBpZCkpIHtcbiAgICAgIHJlZnNbaWRdID0gdGhpcy5lbDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVmaW5lUmVhY3RpdmUocmVmcywgaWQsIHRoaXMuZWwpO1xuICAgIH1cbiAgfSxcblxuICB1bmJpbmQ6IGZ1bmN0aW9uIHVuYmluZCgpIHtcbiAgICB2YXIgcmVmcyA9ICh0aGlzLl9zY29wZSB8fCB0aGlzLnZtKS4kZWxzO1xuICAgIGlmIChyZWZzW3RoaXMuaWRdID09PSB0aGlzLmVsKSB7XG4gICAgICByZWZzW3RoaXMuaWRdID0gbnVsbDtcbiAgICB9XG4gIH1cbn07XG5cbnZhciByZWYgPSB7XG4gIGJpbmQ6IGZ1bmN0aW9uIGJpbmQoKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKCd2LXJlZjonICsgdGhpcy5hcmcgKyAnIG11c3QgYmUgdXNlZCBvbiBhIGNoaWxkICcgKyAnY29tcG9uZW50LiBGb3VuZCBvbiA8JyArIHRoaXMuZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpICsgJz4uJywgdGhpcy52bSk7XG4gIH1cbn07XG5cbnZhciBjbG9hayA9IHtcbiAgYmluZDogZnVuY3Rpb24gYmluZCgpIHtcbiAgICB2YXIgZWwgPSB0aGlzLmVsO1xuICAgIHRoaXMudm0uJG9uY2UoJ3ByZS1ob29rOmNvbXBpbGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCd2LWNsb2FrJyk7XG4gICAgfSk7XG4gIH1cbn07XG5cbi8vIG11c3QgZXhwb3J0IHBsYWluIG9iamVjdFxudmFyIGRpcmVjdGl2ZXMgPSB7XG4gIHRleHQ6IHRleHQkMSxcbiAgaHRtbDogaHRtbCxcbiAgJ2Zvcic6IHZGb3IsXG4gICdpZic6IHZJZixcbiAgc2hvdzogc2hvdyxcbiAgbW9kZWw6IG1vZGVsLFxuICBvbjogb24kMSxcbiAgYmluZDogYmluZCQxLFxuICBlbDogZWwsXG4gIHJlZjogcmVmLFxuICBjbG9hazogY2xvYWtcbn07XG5cbnZhciB2Q2xhc3MgPSB7XG5cbiAgZGVlcDogdHJ1ZSxcblxuICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSh2YWx1ZSkge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHRoaXMuY2xlYW51cCgpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5zZXRDbGFzcyh2YWx1ZS50cmltKCkuc3BsaXQoL1xccysvKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0Q2xhc3Mobm9ybWFsaXplJDEodmFsdWUpKTtcbiAgICB9XG4gIH0sXG5cbiAgc2V0Q2xhc3M6IGZ1bmN0aW9uIHNldENsYXNzKHZhbHVlKSB7XG4gICAgdGhpcy5jbGVhbnVwKHZhbHVlKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdmFyIHZhbCA9IHZhbHVlW2ldO1xuICAgICAgaWYgKHZhbCkge1xuICAgICAgICBhcHBseSh0aGlzLmVsLCB2YWwsIGFkZENsYXNzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wcmV2S2V5cyA9IHZhbHVlO1xuICB9LFxuXG4gIGNsZWFudXA6IGZ1bmN0aW9uIGNsZWFudXAodmFsdWUpIHtcbiAgICB2YXIgcHJldktleXMgPSB0aGlzLnByZXZLZXlzO1xuICAgIGlmICghcHJldktleXMpIHJldHVybjtcbiAgICB2YXIgaSA9IHByZXZLZXlzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB2YXIga2V5ID0gcHJldktleXNbaV07XG4gICAgICBpZiAoIXZhbHVlIHx8IHZhbHVlLmluZGV4T2Yoa2V5KSA8IDApIHtcbiAgICAgICAgYXBwbHkodGhpcy5lbCwga2V5LCByZW1vdmVDbGFzcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIE5vcm1hbGl6ZSBvYmplY3RzIGFuZCBhcnJheXMgKHBvdGVudGlhbGx5IGNvbnRhaW5pbmcgb2JqZWN0cylcbiAqIGludG8gYXJyYXkgb2Ygc3RyaW5ncy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheTxTdHJpbmd8T2JqZWN0Pn0gdmFsdWVcbiAqIEByZXR1cm4ge0FycmF5PFN0cmluZz59XG4gKi9cblxuZnVuY3Rpb24gbm9ybWFsaXplJDEodmFsdWUpIHtcbiAgdmFyIHJlcyA9IFtdO1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdmFyIF9rZXkgPSB2YWx1ZVtpXTtcbiAgICAgIGlmIChfa2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgX2tleSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXMucHVzaChfa2V5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKHZhciBrIGluIF9rZXkpIHtcbiAgICAgICAgICAgIGlmIChfa2V5W2tdKSByZXMucHVzaChrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWVba2V5XSkgcmVzLnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cblxuLyoqXG4gKiBBZGQgb3IgcmVtb3ZlIGEgY2xhc3MvY2xhc3NlcyBvbiBhbiBlbGVtZW50XG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtTdHJpbmd9IGtleSBUaGUgY2xhc3MgbmFtZS4gVGhpcyBtYXkgb3IgbWF5IG5vdFxuICogICAgICAgICAgICAgICAgICAgICBjb250YWluIGEgc3BhY2UgY2hhcmFjdGVyLCBpbiBzdWNoIGFcbiAqICAgICAgICAgICAgICAgICAgICAgY2FzZSB3ZSdsbCBkZWFsIHdpdGggbXVsdGlwbGUgY2xhc3NcbiAqICAgICAgICAgICAgICAgICAgICAgbmFtZXMgYXQgb25jZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKi9cblxuZnVuY3Rpb24gYXBwbHkoZWwsIGtleSwgZm4pIHtcbiAga2V5ID0ga2V5LnRyaW0oKTtcbiAgaWYgKGtleS5pbmRleE9mKCcgJykgPT09IC0xKSB7XG4gICAgZm4oZWwsIGtleSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIFRoZSBrZXkgY29udGFpbnMgb25lIG9yIG1vcmUgc3BhY2UgY2hhcmFjdGVycy5cbiAgLy8gU2luY2UgYSBjbGFzcyBuYW1lIGRvZXNuJ3QgYWNjZXB0IHN1Y2ggY2hhcmFjdGVycywgd2VcbiAgLy8gdHJlYXQgaXQgYXMgbXVsdGlwbGUgY2xhc3Nlcy5cbiAgdmFyIGtleXMgPSBrZXkuc3BsaXQoL1xccysvKTtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZuKGVsLCBrZXlzW2ldKTtcbiAgfVxufVxuXG52YXIgY29tcG9uZW50ID0ge1xuXG4gIHByaW9yaXR5OiBDT01QT05FTlQsXG5cbiAgcGFyYW1zOiBbJ2tlZXAtYWxpdmUnLCAndHJhbnNpdGlvbi1tb2RlJywgJ2lubGluZS10ZW1wbGF0ZSddLFxuXG4gIC8qKlxuICAgKiBTZXR1cC4gVHdvIHBvc3NpYmxlIHVzYWdlczpcbiAgICpcbiAgICogLSBzdGF0aWM6XG4gICAqICAgPGNvbXA+IG9yIDxkaXYgdi1jb21wb25lbnQ9XCJjb21wXCI+XG4gICAqXG4gICAqIC0gZHluYW1pYzpcbiAgICogICA8Y29tcG9uZW50IDppcz1cInZpZXdcIj5cbiAgICovXG5cbiAgYmluZDogZnVuY3Rpb24gYmluZCgpIHtcbiAgICBpZiAoIXRoaXMuZWwuX192dWVfXykge1xuICAgICAgLy8ga2VlcC1hbGl2ZSBjYWNoZVxuICAgICAgdGhpcy5rZWVwQWxpdmUgPSB0aGlzLnBhcmFtcy5rZWVwQWxpdmU7XG4gICAgICBpZiAodGhpcy5rZWVwQWxpdmUpIHtcbiAgICAgICAgdGhpcy5jYWNoZSA9IHt9O1xuICAgICAgfVxuICAgICAgLy8gY2hlY2sgaW5saW5lLXRlbXBsYXRlXG4gICAgICBpZiAodGhpcy5wYXJhbXMuaW5saW5lVGVtcGxhdGUpIHtcbiAgICAgICAgLy8gZXh0cmFjdCBpbmxpbmUgdGVtcGxhdGUgYXMgYSBEb2N1bWVudEZyYWdtZW50XG4gICAgICAgIHRoaXMuaW5saW5lVGVtcGxhdGUgPSBleHRyYWN0Q29udGVudCh0aGlzLmVsLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIC8vIGNvbXBvbmVudCByZXNvbHV0aW9uIHJlbGF0ZWQgc3RhdGVcbiAgICAgIHRoaXMucGVuZGluZ0NvbXBvbmVudENiID0gdGhpcy5Db21wb25lbnQgPSBudWxsO1xuICAgICAgLy8gdHJhbnNpdGlvbiByZWxhdGVkIHN0YXRlXG4gICAgICB0aGlzLnBlbmRpbmdSZW1vdmFscyA9IDA7XG4gICAgICB0aGlzLnBlbmRpbmdSZW1vdmFsQ2IgPSBudWxsO1xuICAgICAgLy8gY3JlYXRlIGEgcmVmIGFuY2hvclxuICAgICAgdGhpcy5hbmNob3IgPSBjcmVhdGVBbmNob3IoJ3YtY29tcG9uZW50Jyk7XG4gICAgICByZXBsYWNlKHRoaXMuZWwsIHRoaXMuYW5jaG9yKTtcbiAgICAgIC8vIHJlbW92ZSBpcyBhdHRyaWJ1dGUuXG4gICAgICAvLyB0aGlzIGlzIHJlbW92ZWQgZHVyaW5nIGNvbXBpbGF0aW9uLCBidXQgYmVjYXVzZSBjb21waWxhdGlvbiBpc1xuICAgICAgLy8gY2FjaGVkLCB3aGVuIHRoZSBjb21wb25lbnQgaXMgdXNlZCBlbHNld2hlcmUgdGhpcyBhdHRyaWJ1dGVcbiAgICAgIC8vIHdpbGwgcmVtYWluIGF0IGxpbmsgdGltZS5cbiAgICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKCdpcycpO1xuICAgICAgdGhpcy5lbC5yZW1vdmVBdHRyaWJ1dGUoJzppcycpO1xuICAgICAgLy8gcmVtb3ZlIHJlZiwgc2FtZSBhcyBhYm92ZVxuICAgICAgaWYgKHRoaXMuZGVzY3JpcHRvci5yZWYpIHtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVBdHRyaWJ1dGUoJ3YtcmVmOicgKyBoeXBoZW5hdGUodGhpcy5kZXNjcmlwdG9yLnJlZikpO1xuICAgICAgfVxuICAgICAgLy8gaWYgc3RhdGljLCBidWlsZCByaWdodCBub3cuXG4gICAgICBpZiAodGhpcy5saXRlcmFsKSB7XG4gICAgICAgIHRoaXMuc2V0Q29tcG9uZW50KHRoaXMuZXhwcmVzc2lvbik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybignY2Fubm90IG1vdW50IGNvbXBvbmVudCBcIicgKyB0aGlzLmV4cHJlc3Npb24gKyAnXCIgJyArICdvbiBhbHJlYWR5IG1vdW50ZWQgZWxlbWVudDogJyArIHRoaXMuZWwpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogUHVibGljIHVwZGF0ZSwgY2FsbGVkIGJ5IHRoZSB3YXRjaGVyIGluIHRoZSBkeW5hbWljXG4gICAqIGxpdGVyYWwgc2NlbmFyaW8sIGUuZy4gPGNvbXBvbmVudCA6aXM9XCJ2aWV3XCI+XG4gICAqL1xuXG4gIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKHZhbHVlKSB7XG4gICAgaWYgKCF0aGlzLmxpdGVyYWwpIHtcbiAgICAgIHRoaXMuc2V0Q29tcG9uZW50KHZhbHVlKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFN3aXRjaCBkeW5hbWljIGNvbXBvbmVudHMuIE1heSByZXNvbHZlIHRoZSBjb21wb25lbnRcbiAgICogYXN5bmNocm9ub3VzbHksIGFuZCBwZXJmb3JtIHRyYW5zaXRpb24gYmFzZWQgb25cbiAgICogc3BlY2lmaWVkIHRyYW5zaXRpb24gbW9kZS4gQWNjZXB0cyBhIGZldyBhZGRpdGlvbmFsXG4gICAqIGFyZ3VtZW50cyBzcGVjaWZpY2FsbHkgZm9yIHZ1ZS1yb3V0ZXIuXG4gICAqXG4gICAqIFRoZSBjYWxsYmFjayBpcyBjYWxsZWQgd2hlbiB0aGUgZnVsbCB0cmFuc2l0aW9uIGlzXG4gICAqIGZpbmlzaGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXVxuICAgKi9cblxuICBzZXRDb21wb25lbnQ6IGZ1bmN0aW9uIHNldENvbXBvbmVudCh2YWx1ZSwgY2IpIHtcbiAgICB0aGlzLmludmFsaWRhdGVQZW5kaW5nKCk7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgLy8ganVzdCByZW1vdmUgY3VycmVudFxuICAgICAgdGhpcy51bmJ1aWxkKHRydWUpO1xuICAgICAgdGhpcy5yZW1vdmUodGhpcy5jaGlsZFZNLCBjYik7XG4gICAgICB0aGlzLmNoaWxkVk0gPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB0aGlzLnJlc29sdmVDb21wb25lbnQodmFsdWUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi5tb3VudENvbXBvbmVudChjYik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlc29sdmUgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byB1c2Ugd2hlbiBjcmVhdGluZ1xuICAgKiB0aGUgY2hpbGQgdm0uXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfEZ1bmN0aW9ufSB2YWx1ZVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICAgKi9cblxuICByZXNvbHZlQ29tcG9uZW50OiBmdW5jdGlvbiByZXNvbHZlQ29tcG9uZW50KHZhbHVlLCBjYikge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB0aGlzLnBlbmRpbmdDb21wb25lbnRDYiA9IGNhbmNlbGxhYmxlKGZ1bmN0aW9uIChDb21wb25lbnQpIHtcbiAgICAgIHNlbGYuQ29tcG9uZW50TmFtZSA9IENvbXBvbmVudC5vcHRpb25zLm5hbWUgfHwgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6IG51bGwpO1xuICAgICAgc2VsZi5Db21wb25lbnQgPSBDb21wb25lbnQ7XG4gICAgICBjYigpO1xuICAgIH0pO1xuICAgIHRoaXMudm0uX3Jlc29sdmVDb21wb25lbnQodmFsdWUsIHRoaXMucGVuZGluZ0NvbXBvbmVudENiKTtcbiAgfSxcblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIHVzaW5nIHRoZSBjdXJyZW50IGNvbnN0cnVjdG9yIGFuZFxuICAgKiByZXBsYWNlIHRoZSBleGlzdGluZyBpbnN0YW5jZS4gVGhpcyBtZXRob2QgZG9lc24ndCBjYXJlXG4gICAqIHdoZXRoZXIgdGhlIG5ldyBjb21wb25lbnQgYW5kIHRoZSBvbGQgb25lIGFyZSBhY3R1YWxseVxuICAgKiB0aGUgc2FtZS5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXVxuICAgKi9cblxuICBtb3VudENvbXBvbmVudDogZnVuY3Rpb24gbW91bnRDb21wb25lbnQoY2IpIHtcbiAgICAvLyBhY3R1YWwgbW91bnRcbiAgICB0aGlzLnVuYnVpbGQodHJ1ZSk7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBhY3RpdmF0ZUhvb2tzID0gdGhpcy5Db21wb25lbnQub3B0aW9ucy5hY3RpdmF0ZTtcbiAgICB2YXIgY2FjaGVkID0gdGhpcy5nZXRDYWNoZWQoKTtcbiAgICB2YXIgbmV3Q29tcG9uZW50ID0gdGhpcy5idWlsZCgpO1xuICAgIGlmIChhY3RpdmF0ZUhvb2tzICYmICFjYWNoZWQpIHtcbiAgICAgIHRoaXMud2FpdGluZ0ZvciA9IG5ld0NvbXBvbmVudDtcbiAgICAgIGNhbGxBY3RpdmF0ZUhvb2tzKGFjdGl2YXRlSG9va3MsIG5ld0NvbXBvbmVudCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoc2VsZi53YWl0aW5nRm9yICE9PSBuZXdDb21wb25lbnQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi53YWl0aW5nRm9yID0gbnVsbDtcbiAgICAgICAgc2VsZi50cmFuc2l0aW9uKG5ld0NvbXBvbmVudCwgY2IpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHVwZGF0ZSByZWYgZm9yIGtlcHQtYWxpdmUgY29tcG9uZW50XG4gICAgICBpZiAoY2FjaGVkKSB7XG4gICAgICAgIG5ld0NvbXBvbmVudC5fdXBkYXRlUmVmKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnRyYW5zaXRpb24obmV3Q29tcG9uZW50LCBjYik7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSBjb21wb25lbnQgY2hhbmdlcyBvciB1bmJpbmRzIGJlZm9yZSBhbiBhc3luY1xuICAgKiBjb25zdHJ1Y3RvciBpcyByZXNvbHZlZCwgd2UgbmVlZCB0byBpbnZhbGlkYXRlIGl0c1xuICAgKiBwZW5kaW5nIGNhbGxiYWNrLlxuICAgKi9cblxuICBpbnZhbGlkYXRlUGVuZGluZzogZnVuY3Rpb24gaW52YWxpZGF0ZVBlbmRpbmcoKSB7XG4gICAgaWYgKHRoaXMucGVuZGluZ0NvbXBvbmVudENiKSB7XG4gICAgICB0aGlzLnBlbmRpbmdDb21wb25lbnRDYi5jYW5jZWwoKTtcbiAgICAgIHRoaXMucGVuZGluZ0NvbXBvbmVudENiID0gbnVsbDtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEluc3RhbnRpYXRlL2luc2VydCBhIG5ldyBjaGlsZCB2bS5cbiAgICogSWYga2VlcCBhbGl2ZSBhbmQgaGFzIGNhY2hlZCBpbnN0YW5jZSwgaW5zZXJ0IHRoYXRcbiAgICogaW5zdGFuY2U7IG90aGVyd2lzZSBidWlsZCBhIG5ldyBvbmUgYW5kIGNhY2hlIGl0LlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gW2V4dHJhT3B0aW9uc11cbiAgICogQHJldHVybiB7VnVlfSAtIHRoZSBjcmVhdGVkIGluc3RhbmNlXG4gICAqL1xuXG4gIGJ1aWxkOiBmdW5jdGlvbiBidWlsZChleHRyYU9wdGlvbnMpIHtcbiAgICB2YXIgY2FjaGVkID0gdGhpcy5nZXRDYWNoZWQoKTtcbiAgICBpZiAoY2FjaGVkKSB7XG4gICAgICByZXR1cm4gY2FjaGVkO1xuICAgIH1cbiAgICBpZiAodGhpcy5Db21wb25lbnQpIHtcbiAgICAgIC8vIGRlZmF1bHQgb3B0aW9uc1xuICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgIG5hbWU6IHRoaXMuQ29tcG9uZW50TmFtZSxcbiAgICAgICAgZWw6IGNsb25lTm9kZSh0aGlzLmVsKSxcbiAgICAgICAgdGVtcGxhdGU6IHRoaXMuaW5saW5lVGVtcGxhdGUsXG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBhZGQgdGhlIGNoaWxkIHdpdGggY29ycmVjdCBwYXJlbnRcbiAgICAgICAgLy8gaWYgdGhpcyBpcyBhIHRyYW5zY2x1ZGVkIGNvbXBvbmVudCwgaXRzIHBhcmVudFxuICAgICAgICAvLyBzaG91bGQgYmUgdGhlIHRyYW5zY2x1c2lvbiBob3N0LlxuICAgICAgICBwYXJlbnQ6IHRoaXMuX2hvc3QgfHwgdGhpcy52bSxcbiAgICAgICAgLy8gaWYgbm8gaW5saW5lLXRlbXBsYXRlLCB0aGVuIHRoZSBjb21waWxlZFxuICAgICAgICAvLyBsaW5rZXIgY2FuIGJlIGNhY2hlZCBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlLlxuICAgICAgICBfbGlua2VyQ2FjaGFibGU6ICF0aGlzLmlubGluZVRlbXBsYXRlLFxuICAgICAgICBfcmVmOiB0aGlzLmRlc2NyaXB0b3IucmVmLFxuICAgICAgICBfYXNDb21wb25lbnQ6IHRydWUsXG4gICAgICAgIF9pc1JvdXRlclZpZXc6IHRoaXMuX2lzUm91dGVyVmlldyxcbiAgICAgICAgLy8gaWYgdGhpcyBpcyBhIHRyYW5zY2x1ZGVkIGNvbXBvbmVudCwgY29udGV4dFxuICAgICAgICAvLyB3aWxsIGJlIHRoZSBjb21tb24gcGFyZW50IHZtIG9mIHRoaXMgaW5zdGFuY2VcbiAgICAgICAgLy8gYW5kIGl0cyBob3N0LlxuICAgICAgICBfY29udGV4dDogdGhpcy52bSxcbiAgICAgICAgLy8gaWYgdGhpcyBpcyBpbnNpZGUgYW4gaW5saW5lIHYtZm9yLCB0aGUgc2NvcGVcbiAgICAgICAgLy8gd2lsbCBiZSB0aGUgaW50ZXJtZWRpYXRlIHNjb3BlIGNyZWF0ZWQgZm9yIHRoaXNcbiAgICAgICAgLy8gcmVwZWF0IGZyYWdtZW50LiB0aGlzIGlzIHVzZWQgZm9yIGxpbmtpbmcgcHJvcHNcbiAgICAgICAgLy8gYW5kIGNvbnRhaW5lciBkaXJlY3RpdmVzLlxuICAgICAgICBfc2NvcGU6IHRoaXMuX3Njb3BlLFxuICAgICAgICAvLyBwYXNzIGluIHRoZSBvd25lciBmcmFnbWVudCBvZiB0aGlzIGNvbXBvbmVudC5cbiAgICAgICAgLy8gdGhpcyBpcyBuZWNlc3Nhcnkgc28gdGhhdCB0aGUgZnJhZ21lbnQgY2FuIGtlZXBcbiAgICAgICAgLy8gdHJhY2sgb2YgaXRzIGNvbnRhaW5lZCBjb21wb25lbnRzIGluIG9yZGVyIHRvXG4gICAgICAgIC8vIGNhbGwgYXR0YWNoL2RldGFjaCBob29rcyBmb3IgdGhlbS5cbiAgICAgICAgX2ZyYWc6IHRoaXMuX2ZyYWdcbiAgICAgIH07XG4gICAgICAvLyBleHRyYSBvcHRpb25zXG4gICAgICAvLyBpbiAxLjAuMCB0aGlzIGlzIHVzZWQgYnkgdnVlLXJvdXRlciBvbmx5XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmIChleHRyYU9wdGlvbnMpIHtcbiAgICAgICAgZXh0ZW5kKG9wdGlvbnMsIGV4dHJhT3B0aW9ucyk7XG4gICAgICB9XG4gICAgICB2YXIgY2hpbGQgPSBuZXcgdGhpcy5Db21wb25lbnQob3B0aW9ucyk7XG4gICAgICBpZiAodGhpcy5rZWVwQWxpdmUpIHtcbiAgICAgICAgdGhpcy5jYWNoZVt0aGlzLkNvbXBvbmVudC5jaWRdID0gY2hpbGQ7XG4gICAgICB9XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuZWwuaGFzQXR0cmlidXRlKCd0cmFuc2l0aW9uJykgJiYgY2hpbGQuX2lzRnJhZ21lbnQpIHtcbiAgICAgICAgd2FybignVHJhbnNpdGlvbnMgd2lsbCBub3Qgd29yayBvbiBhIGZyYWdtZW50IGluc3RhbmNlLiAnICsgJ1RlbXBsYXRlOiAnICsgY2hpbGQuJG9wdGlvbnMudGVtcGxhdGUsIGNoaWxkKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRyeSB0byBnZXQgYSBjYWNoZWQgaW5zdGFuY2Ugb2YgdGhlIGN1cnJlbnQgY29tcG9uZW50LlxuICAgKlxuICAgKiBAcmV0dXJuIHtWdWV8dW5kZWZpbmVkfVxuICAgKi9cblxuICBnZXRDYWNoZWQ6IGZ1bmN0aW9uIGdldENhY2hlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5rZWVwQWxpdmUgJiYgdGhpcy5jYWNoZVt0aGlzLkNvbXBvbmVudC5jaWRdO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUZWFyZG93biB0aGUgY3VycmVudCBjaGlsZCwgYnV0IGRlZmVycyBjbGVhbnVwIHNvXG4gICAqIHRoYXQgd2UgY2FuIHNlcGFyYXRlIHRoZSBkZXN0cm95IGFuZCByZW1vdmFsIHN0ZXBzLlxuICAgKlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGRlZmVyXG4gICAqL1xuXG4gIHVuYnVpbGQ6IGZ1bmN0aW9uIHVuYnVpbGQoZGVmZXIpIHtcbiAgICBpZiAodGhpcy53YWl0aW5nRm9yKSB7XG4gICAgICBpZiAoIXRoaXMua2VlcEFsaXZlKSB7XG4gICAgICAgIHRoaXMud2FpdGluZ0Zvci4kZGVzdHJveSgpO1xuICAgICAgfVxuICAgICAgdGhpcy53YWl0aW5nRm9yID0gbnVsbDtcbiAgICB9XG4gICAgdmFyIGNoaWxkID0gdGhpcy5jaGlsZFZNO1xuICAgIGlmICghY2hpbGQgfHwgdGhpcy5rZWVwQWxpdmUpIHtcbiAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAvLyByZW1vdmUgcmVmXG4gICAgICAgIGNoaWxkLl9pbmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGNoaWxkLl91cGRhdGVSZWYodHJ1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIHRoZSBzb2xlIHB1cnBvc2Ugb2YgYGRlZmVyQ2xlYW51cGAgaXMgc28gdGhhdCB3ZSBjYW5cbiAgICAvLyBcImRlYWN0aXZhdGVcIiB0aGUgdm0gcmlnaHQgbm93IGFuZCBwZXJmb3JtIERPTSByZW1vdmFsXG4gICAgLy8gbGF0ZXIuXG4gICAgY2hpbGQuJGRlc3Ryb3koZmFsc2UsIGRlZmVyKTtcbiAgfSxcblxuICAvKipcbiAgICogUmVtb3ZlIGN1cnJlbnQgZGVzdHJveWVkIGNoaWxkIGFuZCBtYW51YWxseSBkb1xuICAgKiB0aGUgY2xlYW51cCBhZnRlciByZW1vdmFsLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICAgKi9cblxuICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShjaGlsZCwgY2IpIHtcbiAgICB2YXIga2VlcEFsaXZlID0gdGhpcy5rZWVwQWxpdmU7XG4gICAgaWYgKGNoaWxkKSB7XG4gICAgICAvLyB3ZSBtYXkgaGF2ZSBhIGNvbXBvbmVudCBzd2l0Y2ggd2hlbiBhIHByZXZpb3VzXG4gICAgICAvLyBjb21wb25lbnQgaXMgc3RpbGwgYmVpbmcgdHJhbnNpdGlvbmVkIG91dC5cbiAgICAgIC8vIHdlIHdhbnQgdG8gdHJpZ2dlciBvbmx5IG9uZSBsYXN0ZXN0IGluc2VydGlvbiBjYlxuICAgICAgLy8gd2hlbiB0aGUgZXhpc3RpbmcgdHJhbnNpdGlvbiBmaW5pc2hlcy4gKCMxMTE5KVxuICAgICAgdGhpcy5wZW5kaW5nUmVtb3ZhbHMrKztcbiAgICAgIHRoaXMucGVuZGluZ1JlbW92YWxDYiA9IGNiO1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgY2hpbGQuJHJlbW92ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGYucGVuZGluZ1JlbW92YWxzLS07XG4gICAgICAgIGlmICgha2VlcEFsaXZlKSBjaGlsZC5fY2xlYW51cCgpO1xuICAgICAgICBpZiAoIXNlbGYucGVuZGluZ1JlbW92YWxzICYmIHNlbGYucGVuZGluZ1JlbW92YWxDYikge1xuICAgICAgICAgIHNlbGYucGVuZGluZ1JlbW92YWxDYigpO1xuICAgICAgICAgIHNlbGYucGVuZGluZ1JlbW92YWxDYiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoY2IpIHtcbiAgICAgIGNiKCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBBY3R1YWxseSBzd2FwIHRoZSBjb21wb25lbnRzLCBkZXBlbmRpbmcgb24gdGhlXG4gICAqIHRyYW5zaXRpb24gbW9kZS4gRGVmYXVsdHMgdG8gc2ltdWx0YW5lb3VzLlxuICAgKlxuICAgKiBAcGFyYW0ge1Z1ZX0gdGFyZ2V0XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl1cbiAgICovXG5cbiAgdHJhbnNpdGlvbjogZnVuY3Rpb24gdHJhbnNpdGlvbih0YXJnZXQsIGNiKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBjdXJyZW50ID0gdGhpcy5jaGlsZFZNO1xuICAgIC8vIGZvciBkZXZ0b29sIGluc3BlY3Rpb25cbiAgICBpZiAoY3VycmVudCkgY3VycmVudC5faW5hY3RpdmUgPSB0cnVlO1xuICAgIHRhcmdldC5faW5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmNoaWxkVk0gPSB0YXJnZXQ7XG4gICAgc3dpdGNoIChzZWxmLnBhcmFtcy50cmFuc2l0aW9uTW9kZSkge1xuICAgICAgY2FzZSAnaW4tb3V0JzpcbiAgICAgICAgdGFyZ2V0LiRiZWZvcmUoc2VsZi5hbmNob3IsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzZWxmLnJlbW92ZShjdXJyZW50LCBjYik7XG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ291dC1pbic6XG4gICAgICAgIHNlbGYucmVtb3ZlKGN1cnJlbnQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0YXJnZXQuJGJlZm9yZShzZWxmLmFuY2hvciwgY2IpO1xuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBzZWxmLnJlbW92ZShjdXJyZW50KTtcbiAgICAgICAgdGFyZ2V0LiRiZWZvcmUoc2VsZi5hbmNob3IsIGNiKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFVuYmluZC5cbiAgICovXG5cbiAgdW5iaW5kOiBmdW5jdGlvbiB1bmJpbmQoKSB7XG4gICAgdGhpcy5pbnZhbGlkYXRlUGVuZGluZygpO1xuICAgIC8vIERvIG5vdCBkZWZlciBjbGVhbnVwIHdoZW4gdW5iaW5kaW5nXG4gICAgdGhpcy51bmJ1aWxkKCk7XG4gICAgLy8gZGVzdHJveSBhbGwga2VlcC1hbGl2ZSBjYWNoZWQgaW5zdGFuY2VzXG4gICAgaWYgKHRoaXMuY2FjaGUpIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmNhY2hlKSB7XG4gICAgICAgIHRoaXMuY2FjaGVba2V5XS4kZGVzdHJveSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5jYWNoZSA9IG51bGw7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIENhbGwgYWN0aXZhdGUgaG9va3MgaW4gb3JkZXIgKGFzeW5jaHJvbm91cylcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBob29rc1xuICogQHBhcmFtIHtWdWV9IHZtXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICovXG5cbmZ1bmN0aW9uIGNhbGxBY3RpdmF0ZUhvb2tzKGhvb2tzLCB2bSwgY2IpIHtcbiAgdmFyIHRvdGFsID0gaG9va3MubGVuZ3RoO1xuICB2YXIgY2FsbGVkID0gMDtcbiAgaG9va3NbMF0uY2FsbCh2bSwgbmV4dCk7XG4gIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgaWYgKCsrY2FsbGVkID49IHRvdGFsKSB7XG4gICAgICBjYigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBob29rc1tjYWxsZWRdLmNhbGwodm0sIG5leHQpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgcHJvcEJpbmRpbmdNb2RlcyA9IGNvbmZpZy5fcHJvcEJpbmRpbmdNb2RlcztcbnZhciBlbXB0eSA9IHt9O1xuXG4vLyByZWdleGVzXG52YXIgaWRlbnRSRSQxID0gL15bJF9hLXpBLVpdK1tcXHckXSokLztcbnZhciBzZXR0YWJsZVBhdGhSRSA9IC9eW0EtWmEtel8kXVtcXHckXSooXFwuW0EtWmEtel8kXVtcXHckXSp8XFxbW15cXFtcXF1dK1xcXSkqJC87XG5cbi8qKlxuICogQ29tcGlsZSBwcm9wcyBvbiBhIHJvb3QgZWxlbWVudCBhbmQgcmV0dXJuXG4gKiBhIHByb3BzIGxpbmsgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fERvY3VtZW50RnJhZ21lbnR9IGVsXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9wT3B0aW9uc1xuICogQHBhcmFtIHtWdWV9IHZtXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gcHJvcHNMaW5rRm5cbiAqL1xuXG5mdW5jdGlvbiBjb21waWxlUHJvcHMoZWwsIHByb3BPcHRpb25zLCB2bSkge1xuICB2YXIgcHJvcHMgPSBbXTtcbiAgdmFyIG5hbWVzID0gT2JqZWN0LmtleXMocHJvcE9wdGlvbnMpO1xuICB2YXIgaSA9IG5hbWVzLmxlbmd0aDtcbiAgdmFyIG9wdGlvbnMsIG5hbWUsIGF0dHIsIHZhbHVlLCBwYXRoLCBwYXJzZWQsIHByb3A7XG4gIHdoaWxlIChpLS0pIHtcbiAgICBuYW1lID0gbmFtZXNbaV07XG4gICAgb3B0aW9ucyA9IHByb3BPcHRpb25zW25hbWVdIHx8IGVtcHR5O1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgbmFtZSA9PT0gJyRkYXRhJykge1xuICAgICAgd2FybignRG8gbm90IHVzZSAkZGF0YSBhcyBwcm9wLicsIHZtKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIHByb3BzIGNvdWxkIGNvbnRhaW4gZGFzaGVzLCB3aGljaCB3aWxsIGJlXG4gICAgLy8gaW50ZXJwcmV0ZWQgYXMgbWludXMgY2FsY3VsYXRpb25zIGJ5IHRoZSBwYXJzZXJcbiAgICAvLyBzbyB3ZSBuZWVkIHRvIGNhbWVsaXplIHRoZSBwYXRoIGhlcmVcbiAgICBwYXRoID0gY2FtZWxpemUobmFtZSk7XG4gICAgaWYgKCFpZGVudFJFJDEudGVzdChwYXRoKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKCdJbnZhbGlkIHByb3Aga2V5OiBcIicgKyBuYW1lICsgJ1wiLiBQcm9wIGtleXMgJyArICdtdXN0IGJlIHZhbGlkIGlkZW50aWZpZXJzLicsIHZtKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHByb3AgPSB7XG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgcGF0aDogcGF0aCxcbiAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICBtb2RlOiBwcm9wQmluZGluZ01vZGVzLk9ORV9XQVksXG4gICAgICByYXc6IG51bGxcbiAgICB9O1xuXG4gICAgYXR0ciA9IGh5cGhlbmF0ZShuYW1lKTtcbiAgICAvLyBmaXJzdCBjaGVjayBkeW5hbWljIHZlcnNpb25cbiAgICBpZiAoKHZhbHVlID0gZ2V0QmluZEF0dHIoZWwsIGF0dHIpKSA9PT0gbnVsbCkge1xuICAgICAgaWYgKCh2YWx1ZSA9IGdldEJpbmRBdHRyKGVsLCBhdHRyICsgJy5zeW5jJykpICE9PSBudWxsKSB7XG4gICAgICAgIHByb3AubW9kZSA9IHByb3BCaW5kaW5nTW9kZXMuVFdPX1dBWTtcbiAgICAgIH0gZWxzZSBpZiAoKHZhbHVlID0gZ2V0QmluZEF0dHIoZWwsIGF0dHIgKyAnLm9uY2UnKSkgIT09IG51bGwpIHtcbiAgICAgICAgcHJvcC5tb2RlID0gcHJvcEJpbmRpbmdNb2Rlcy5PTkVfVElNRTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAvLyBoYXMgZHluYW1pYyBiaW5kaW5nIVxuICAgICAgcHJvcC5yYXcgPSB2YWx1ZTtcbiAgICAgIHBhcnNlZCA9IHBhcnNlRGlyZWN0aXZlKHZhbHVlKTtcbiAgICAgIHZhbHVlID0gcGFyc2VkLmV4cHJlc3Npb247XG4gICAgICBwcm9wLmZpbHRlcnMgPSBwYXJzZWQuZmlsdGVycztcbiAgICAgIC8vIGNoZWNrIGJpbmRpbmcgdHlwZVxuICAgICAgaWYgKGlzTGl0ZXJhbCh2YWx1ZSkgJiYgIXBhcnNlZC5maWx0ZXJzKSB7XG4gICAgICAgIC8vIGZvciBleHByZXNzaW9ucyBjb250YWluaW5nIGxpdGVyYWwgbnVtYmVycyBhbmRcbiAgICAgICAgLy8gYm9vbGVhbnMsIHRoZXJlJ3Mgbm8gbmVlZCB0byBzZXR1cCBhIHByb3AgYmluZGluZyxcbiAgICAgICAgLy8gc28gd2UgY2FuIG9wdGltaXplIHRoZW0gYXMgYSBvbmUtdGltZSBzZXQuXG4gICAgICAgIHByb3Aub3B0aW1pemVkTGl0ZXJhbCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9wLmR5bmFtaWMgPSB0cnVlO1xuICAgICAgICAvLyBjaGVjayBub24tc2V0dGFibGUgcGF0aCBmb3IgdHdvLXdheSBiaW5kaW5nc1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBwcm9wLm1vZGUgPT09IHByb3BCaW5kaW5nTW9kZXMuVFdPX1dBWSAmJiAhc2V0dGFibGVQYXRoUkUudGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICBwcm9wLm1vZGUgPSBwcm9wQmluZGluZ01vZGVzLk9ORV9XQVk7XG4gICAgICAgICAgd2FybignQ2Fubm90IGJpbmQgdHdvLXdheSBwcm9wIHdpdGggbm9uLXNldHRhYmxlICcgKyAncGFyZW50IHBhdGg6ICcgKyB2YWx1ZSwgdm0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBwcm9wLnBhcmVudFBhdGggPSB2YWx1ZTtcblxuICAgICAgLy8gd2FybiByZXF1aXJlZCB0d28td2F5XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBvcHRpb25zLnR3b1dheSAmJiBwcm9wLm1vZGUgIT09IHByb3BCaW5kaW5nTW9kZXMuVFdPX1dBWSkge1xuICAgICAgICB3YXJuKCdQcm9wIFwiJyArIG5hbWUgKyAnXCIgZXhwZWN0cyBhIHR3by13YXkgYmluZGluZyB0eXBlLicsIHZtKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCh2YWx1ZSA9IGdldEF0dHIoZWwsIGF0dHIpKSAhPT0gbnVsbCkge1xuICAgICAgLy8gaGFzIGxpdGVyYWwgYmluZGluZyFcbiAgICAgIHByb3AucmF3ID0gdmFsdWU7XG4gICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyBjaGVjayBwb3NzaWJsZSBjYW1lbENhc2UgcHJvcCB1c2FnZVxuICAgICAgdmFyIGxvd2VyQ2FzZU5hbWUgPSBwYXRoLnRvTG93ZXJDYXNlKCk7XG4gICAgICB2YWx1ZSA9IC9bQS1aXFwtXS8udGVzdChuYW1lKSAmJiAoZWwuZ2V0QXR0cmlidXRlKGxvd2VyQ2FzZU5hbWUpIHx8IGVsLmdldEF0dHJpYnV0ZSgnOicgKyBsb3dlckNhc2VOYW1lKSB8fCBlbC5nZXRBdHRyaWJ1dGUoJ3YtYmluZDonICsgbG93ZXJDYXNlTmFtZSkgfHwgZWwuZ2V0QXR0cmlidXRlKCc6JyArIGxvd2VyQ2FzZU5hbWUgKyAnLm9uY2UnKSB8fCBlbC5nZXRBdHRyaWJ1dGUoJ3YtYmluZDonICsgbG93ZXJDYXNlTmFtZSArICcub25jZScpIHx8IGVsLmdldEF0dHJpYnV0ZSgnOicgKyBsb3dlckNhc2VOYW1lICsgJy5zeW5jJykgfHwgZWwuZ2V0QXR0cmlidXRlKCd2LWJpbmQ6JyArIGxvd2VyQ2FzZU5hbWUgKyAnLnN5bmMnKSk7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgd2FybignUG9zc2libGUgdXNhZ2UgZXJyb3IgZm9yIHByb3AgYCcgKyBsb3dlckNhc2VOYW1lICsgJ2AgLSAnICsgJ2RpZCB5b3UgbWVhbiBgJyArIGF0dHIgKyAnYD8gSFRNTCBpcyBjYXNlLWluc2Vuc2l0aXZlLCByZW1lbWJlciB0byB1c2UgJyArICdrZWJhYi1jYXNlIGZvciBwcm9wcyBpbiB0ZW1wbGF0ZXMuJywgdm0pO1xuICAgICAgfSBlbHNlIGlmIChvcHRpb25zLnJlcXVpcmVkKSB7XG4gICAgICAgIC8vIHdhcm4gbWlzc2luZyByZXF1aXJlZFxuICAgICAgICB3YXJuKCdNaXNzaW5nIHJlcXVpcmVkIHByb3A6ICcgKyBuYW1lLCB2bSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHB1c2ggcHJvcFxuICAgIHByb3BzLnB1c2gocHJvcCk7XG4gIH1cbiAgcmV0dXJuIG1ha2VQcm9wc0xpbmtGbihwcm9wcyk7XG59XG5cbi8qKlxuICogQnVpbGQgYSBmdW5jdGlvbiB0aGF0IGFwcGxpZXMgcHJvcHMgdG8gYSB2bS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9wc1xuICogQHJldHVybiB7RnVuY3Rpb259IHByb3BzTGlua0ZuXG4gKi9cblxuZnVuY3Rpb24gbWFrZVByb3BzTGlua0ZuKHByb3BzKSB7XG4gIHJldHVybiBmdW5jdGlvbiBwcm9wc0xpbmtGbih2bSwgc2NvcGUpIHtcbiAgICAvLyBzdG9yZSByZXNvbHZlZCBwcm9wcyBpbmZvXG4gICAgdm0uX3Byb3BzID0ge307XG4gICAgdmFyIGlubGluZVByb3BzID0gdm0uJG9wdGlvbnMucHJvcHNEYXRhO1xuICAgIHZhciBpID0gcHJvcHMubGVuZ3RoO1xuICAgIHZhciBwcm9wLCBwYXRoLCBvcHRpb25zLCB2YWx1ZSwgcmF3O1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHByb3AgPSBwcm9wc1tpXTtcbiAgICAgIHJhdyA9IHByb3AucmF3O1xuICAgICAgcGF0aCA9IHByb3AucGF0aDtcbiAgICAgIG9wdGlvbnMgPSBwcm9wLm9wdGlvbnM7XG4gICAgICB2bS5fcHJvcHNbcGF0aF0gPSBwcm9wO1xuICAgICAgaWYgKGlubGluZVByb3BzICYmIGhhc093bihpbmxpbmVQcm9wcywgcGF0aCkpIHtcbiAgICAgICAgaW5pdFByb3Aodm0sIHByb3AsIGlubGluZVByb3BzW3BhdGhdKTtcbiAgICAgIH1pZiAocmF3ID09PSBudWxsKSB7XG4gICAgICAgIC8vIGluaXRpYWxpemUgYWJzZW50IHByb3BcbiAgICAgICAgaW5pdFByb3Aodm0sIHByb3AsIHVuZGVmaW5lZCk7XG4gICAgICB9IGVsc2UgaWYgKHByb3AuZHluYW1pYykge1xuICAgICAgICAvLyBkeW5hbWljIHByb3BcbiAgICAgICAgaWYgKHByb3AubW9kZSA9PT0gcHJvcEJpbmRpbmdNb2Rlcy5PTkVfVElNRSkge1xuICAgICAgICAgIC8vIG9uZSB0aW1lIGJpbmRpbmdcbiAgICAgICAgICB2YWx1ZSA9IChzY29wZSB8fCB2bS5fY29udGV4dCB8fCB2bSkuJGdldChwcm9wLnBhcmVudFBhdGgpO1xuICAgICAgICAgIGluaXRQcm9wKHZtLCBwcm9wLCB2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHZtLl9jb250ZXh0KSB7XG4gICAgICAgICAgICAvLyBkeW5hbWljIGJpbmRpbmdcbiAgICAgICAgICAgIHZtLl9iaW5kRGlyKHtcbiAgICAgICAgICAgICAgbmFtZTogJ3Byb3AnLFxuICAgICAgICAgICAgICBkZWY6IHByb3BEZWYsXG4gICAgICAgICAgICAgIHByb3A6IHByb3BcbiAgICAgICAgICAgIH0sIG51bGwsIG51bGwsIHNjb3BlKTsgLy8gZWwsIGhvc3QsIHNjb3BlXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gcm9vdCBpbnN0YW5jZVxuICAgICAgICAgICAgICBpbml0UHJvcCh2bSwgcHJvcCwgdm0uJGdldChwcm9wLnBhcmVudFBhdGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChwcm9wLm9wdGltaXplZExpdGVyYWwpIHtcbiAgICAgICAgLy8gb3B0aW1pemVkIGxpdGVyYWwsIGNhc3QgaXQgYW5kIGp1c3Qgc2V0IG9uY2VcbiAgICAgICAgdmFyIHN0cmlwcGVkID0gc3RyaXBRdW90ZXMocmF3KTtcbiAgICAgICAgdmFsdWUgPSBzdHJpcHBlZCA9PT0gcmF3ID8gdG9Cb29sZWFuKHRvTnVtYmVyKHJhdykpIDogc3RyaXBwZWQ7XG4gICAgICAgIGluaXRQcm9wKHZtLCBwcm9wLCB2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBzdHJpbmcgbGl0ZXJhbCwgYnV0IHdlIG5lZWQgdG8gY2F0ZXIgZm9yXG4gICAgICAgIC8vIEJvb2xlYW4gcHJvcHMgd2l0aCBubyB2YWx1ZSwgb3Igd2l0aCBzYW1lXG4gICAgICAgIC8vIGxpdGVyYWwgdmFsdWUgKGUuZy4gZGlzYWJsZWQ9XCJkaXNhYmxlZFwiKVxuICAgICAgICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3Z1ZWpzL3Z1ZS1sb2FkZXIvaXNzdWVzLzE4MlxuICAgICAgICB2YWx1ZSA9IG9wdGlvbnMudHlwZSA9PT0gQm9vbGVhbiAmJiAocmF3ID09PSAnJyB8fCByYXcgPT09IGh5cGhlbmF0ZShwcm9wLm5hbWUpKSA/IHRydWUgOiByYXc7XG4gICAgICAgIGluaXRQcm9wKHZtLCBwcm9wLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIFByb2Nlc3MgYSBwcm9wIHdpdGggYSByYXdWYWx1ZSwgYXBwbHlpbmcgbmVjZXNzYXJ5IGNvZXJzaW9ucyxcbiAqIGRlZmF1bHQgdmFsdWVzICYgYXNzZXJ0aW9ucyBhbmQgY2FsbCB0aGUgZ2l2ZW4gY2FsbGJhY2sgd2l0aFxuICogcHJvY2Vzc2VkIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICogQHBhcmFtIHtPYmplY3R9IHByb3BcbiAqIEBwYXJhbSB7Kn0gcmF3VmFsdWVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKi9cblxuZnVuY3Rpb24gcHJvY2Vzc1Byb3BWYWx1ZSh2bSwgcHJvcCwgcmF3VmFsdWUsIGZuKSB7XG4gIHZhciBpc1NpbXBsZSA9IHByb3AuZHluYW1pYyAmJiBpc1NpbXBsZVBhdGgocHJvcC5wYXJlbnRQYXRoKTtcbiAgdmFyIHZhbHVlID0gcmF3VmFsdWU7XG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFsdWUgPSBnZXRQcm9wRGVmYXVsdFZhbHVlKHZtLCBwcm9wKTtcbiAgfVxuICB2YWx1ZSA9IGNvZXJjZVByb3AocHJvcCwgdmFsdWUsIHZtKTtcbiAgdmFyIGNvZXJjZWQgPSB2YWx1ZSAhPT0gcmF3VmFsdWU7XG4gIGlmICghYXNzZXJ0UHJvcChwcm9wLCB2YWx1ZSwgdm0pKSB7XG4gICAgdmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgaWYgKGlzU2ltcGxlICYmICFjb2VyY2VkKSB7XG4gICAgd2l0aG91dENvbnZlcnNpb24oZnVuY3Rpb24gKCkge1xuICAgICAgZm4odmFsdWUpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGZuKHZhbHVlKTtcbiAgfVxufVxuXG4vKipcbiAqIFNldCBhIHByb3AncyBpbml0aWFsIHZhbHVlIG9uIGEgdm0gYW5kIGl0cyBkYXRhIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKi9cblxuZnVuY3Rpb24gaW5pdFByb3Aodm0sIHByb3AsIHZhbHVlKSB7XG4gIHByb2Nlc3NQcm9wVmFsdWUodm0sIHByb3AsIHZhbHVlLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBkZWZpbmVSZWFjdGl2ZSh2bSwgcHJvcC5wYXRoLCB2YWx1ZSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIFVwZGF0ZSBhIHByb3AncyB2YWx1ZSBvbiBhIHZtLlxuICpcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICogQHBhcmFtIHtPYmplY3R9IHByb3BcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqL1xuXG5mdW5jdGlvbiB1cGRhdGVQcm9wKHZtLCBwcm9wLCB2YWx1ZSkge1xuICBwcm9jZXNzUHJvcFZhbHVlKHZtLCBwcm9wLCB2YWx1ZSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdm1bcHJvcC5wYXRoXSA9IHZhbHVlO1xuICB9KTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGRlZmF1bHQgdmFsdWUgb2YgYSBwcm9wLlxuICpcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICogQHBhcmFtIHtPYmplY3R9IHByb3BcbiAqIEByZXR1cm4geyp9XG4gKi9cblxuZnVuY3Rpb24gZ2V0UHJvcERlZmF1bHRWYWx1ZSh2bSwgcHJvcCkge1xuICAvLyBubyBkZWZhdWx0LCByZXR1cm4gdW5kZWZpbmVkXG4gIHZhciBvcHRpb25zID0gcHJvcC5vcHRpb25zO1xuICBpZiAoIWhhc093bihvcHRpb25zLCAnZGVmYXVsdCcpKSB7XG4gICAgLy8gYWJzZW50IGJvb2xlYW4gdmFsdWUgZGVmYXVsdHMgdG8gZmFsc2VcbiAgICByZXR1cm4gb3B0aW9ucy50eXBlID09PSBCb29sZWFuID8gZmFsc2UgOiB1bmRlZmluZWQ7XG4gIH1cbiAgdmFyIGRlZiA9IG9wdGlvbnNbJ2RlZmF1bHQnXTtcbiAgLy8gd2FybiBhZ2FpbnN0IG5vbi1mYWN0b3J5IGRlZmF1bHRzIGZvciBPYmplY3QgJiBBcnJheVxuICBpZiAoaXNPYmplY3QoZGVmKSkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybignSW52YWxpZCBkZWZhdWx0IHZhbHVlIGZvciBwcm9wIFwiJyArIHByb3AubmFtZSArICdcIjogJyArICdQcm9wcyB3aXRoIHR5cGUgT2JqZWN0L0FycmF5IG11c3QgdXNlIGEgZmFjdG9yeSBmdW5jdGlvbiAnICsgJ3RvIHJldHVybiB0aGUgZGVmYXVsdCB2YWx1ZS4nLCB2bSk7XG4gIH1cbiAgLy8gY2FsbCBmYWN0b3J5IGZ1bmN0aW9uIGZvciBub24tRnVuY3Rpb24gdHlwZXNcbiAgcmV0dXJuIHR5cGVvZiBkZWYgPT09ICdmdW5jdGlvbicgJiYgb3B0aW9ucy50eXBlICE9PSBGdW5jdGlvbiA/IGRlZi5jYWxsKHZtKSA6IGRlZjtcbn1cblxuLyoqXG4gKiBBc3NlcnQgd2hldGhlciBhIHByb3AgaXMgdmFsaWQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHByb3BcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICovXG5cbmZ1bmN0aW9uIGFzc2VydFByb3AocHJvcCwgdmFsdWUsIHZtKSB7XG4gIGlmICghcHJvcC5vcHRpb25zLnJlcXVpcmVkICYmICggLy8gbm9uLXJlcXVpcmVkXG4gIHByb3AucmF3ID09PSBudWxsIHx8IC8vIGFic2NlbnRcbiAgdmFsdWUgPT0gbnVsbCkgLy8gbnVsbCBvciB1bmRlZmluZWRcbiAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIHZhciBvcHRpb25zID0gcHJvcC5vcHRpb25zO1xuICB2YXIgdHlwZSA9IG9wdGlvbnMudHlwZTtcbiAgdmFyIHZhbGlkID0gIXR5cGU7XG4gIHZhciBleHBlY3RlZFR5cGVzID0gW107XG4gIGlmICh0eXBlKSB7XG4gICAgaWYgKCFpc0FycmF5KHR5cGUpKSB7XG4gICAgICB0eXBlID0gW3R5cGVdO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHR5cGUubGVuZ3RoICYmICF2YWxpZDsgaSsrKSB7XG4gICAgICB2YXIgYXNzZXJ0ZWRUeXBlID0gYXNzZXJ0VHlwZSh2YWx1ZSwgdHlwZVtpXSk7XG4gICAgICBleHBlY3RlZFR5cGVzLnB1c2goYXNzZXJ0ZWRUeXBlLmV4cGVjdGVkVHlwZSk7XG4gICAgICB2YWxpZCA9IGFzc2VydGVkVHlwZS52YWxpZDtcbiAgICB9XG4gIH1cbiAgaWYgKCF2YWxpZCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB3YXJuKCdJbnZhbGlkIHByb3A6IHR5cGUgY2hlY2sgZmFpbGVkIGZvciBwcm9wIFwiJyArIHByb3AubmFtZSArICdcIi4nICsgJyBFeHBlY3RlZCAnICsgZXhwZWN0ZWRUeXBlcy5tYXAoZm9ybWF0VHlwZSkuam9pbignLCAnKSArICcsIGdvdCAnICsgZm9ybWF0VmFsdWUodmFsdWUpICsgJy4nLCB2bSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgdmFsaWRhdG9yID0gb3B0aW9ucy52YWxpZGF0b3I7XG4gIGlmICh2YWxpZGF0b3IpIHtcbiAgICBpZiAoIXZhbGlkYXRvcih2YWx1ZSkpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybignSW52YWxpZCBwcm9wOiBjdXN0b20gdmFsaWRhdG9yIGNoZWNrIGZhaWxlZCBmb3IgcHJvcCBcIicgKyBwcm9wLm5hbWUgKyAnXCIuJywgdm0pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBGb3JjZSBwYXJzaW5nIHZhbHVlIHdpdGggY29lcmNlIG9wdGlvbi5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7Kn1cbiAqL1xuXG5mdW5jdGlvbiBjb2VyY2VQcm9wKHByb3AsIHZhbHVlLCB2bSkge1xuICB2YXIgY29lcmNlID0gcHJvcC5vcHRpb25zLmNvZXJjZTtcbiAgaWYgKCFjb2VyY2UpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKHR5cGVvZiBjb2VyY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gY29lcmNlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oJ0ludmFsaWQgY29lcmNlIGZvciBwcm9wIFwiJyArIHByb3AubmFtZSArICdcIjogZXhwZWN0ZWQgZnVuY3Rpb24sIGdvdCAnICsgdHlwZW9mIGNvZXJjZSArICcuJywgdm0pO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuXG4vKipcbiAqIEFzc2VydCB0aGUgdHlwZSBvZiBhIHZhbHVlXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHlwZVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5cbmZ1bmN0aW9uIGFzc2VydFR5cGUodmFsdWUsIHR5cGUpIHtcbiAgdmFyIHZhbGlkO1xuICB2YXIgZXhwZWN0ZWRUeXBlO1xuICBpZiAodHlwZSA9PT0gU3RyaW5nKSB7XG4gICAgZXhwZWN0ZWRUeXBlID0gJ3N0cmluZyc7XG4gICAgdmFsaWQgPSB0eXBlb2YgdmFsdWUgPT09IGV4cGVjdGVkVHlwZTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBOdW1iZXIpIHtcbiAgICBleHBlY3RlZFR5cGUgPSAnbnVtYmVyJztcbiAgICB2YWxpZCA9IHR5cGVvZiB2YWx1ZSA9PT0gZXhwZWN0ZWRUeXBlO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IEJvb2xlYW4pIHtcbiAgICBleHBlY3RlZFR5cGUgPSAnYm9vbGVhbic7XG4gICAgdmFsaWQgPSB0eXBlb2YgdmFsdWUgPT09IGV4cGVjdGVkVHlwZTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBGdW5jdGlvbikge1xuICAgIGV4cGVjdGVkVHlwZSA9ICdmdW5jdGlvbic7XG4gICAgdmFsaWQgPSB0eXBlb2YgdmFsdWUgPT09IGV4cGVjdGVkVHlwZTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBPYmplY3QpIHtcbiAgICBleHBlY3RlZFR5cGUgPSAnb2JqZWN0JztcbiAgICB2YWxpZCA9IGlzUGxhaW5PYmplY3QodmFsdWUpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IEFycmF5KSB7XG4gICAgZXhwZWN0ZWRUeXBlID0gJ2FycmF5JztcbiAgICB2YWxpZCA9IGlzQXJyYXkodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHZhbGlkID0gdmFsdWUgaW5zdGFuY2VvZiB0eXBlO1xuICB9XG4gIHJldHVybiB7XG4gICAgdmFsaWQ6IHZhbGlkLFxuICAgIGV4cGVjdGVkVHlwZTogZXhwZWN0ZWRUeXBlXG4gIH07XG59XG5cbi8qKlxuICogRm9ybWF0IHR5cGUgZm9yIG91dHB1dFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlID8gdHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSkgOiAnY3VzdG9tIHR5cGUnO1xufVxuXG4vKipcbiAqIEZvcm1hdCB2YWx1ZVxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXRWYWx1ZSh2YWwpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpLnNsaWNlKDgsIC0xKTtcbn1cblxudmFyIGJpbmRpbmdNb2RlcyA9IGNvbmZpZy5fcHJvcEJpbmRpbmdNb2RlcztcblxudmFyIHByb3BEZWYgPSB7XG5cbiAgYmluZDogZnVuY3Rpb24gYmluZCgpIHtcbiAgICB2YXIgY2hpbGQgPSB0aGlzLnZtO1xuICAgIHZhciBwYXJlbnQgPSBjaGlsZC5fY29udGV4dDtcbiAgICAvLyBwYXNzZWQgaW4gZnJvbSBjb21waWxlciBkaXJlY3RseVxuICAgIHZhciBwcm9wID0gdGhpcy5kZXNjcmlwdG9yLnByb3A7XG4gICAgdmFyIGNoaWxkS2V5ID0gcHJvcC5wYXRoO1xuICAgIHZhciBwYXJlbnRLZXkgPSBwcm9wLnBhcmVudFBhdGg7XG4gICAgdmFyIHR3b1dheSA9IHByb3AubW9kZSA9PT0gYmluZGluZ01vZGVzLlRXT19XQVk7XG5cbiAgICB2YXIgcGFyZW50V2F0Y2hlciA9IHRoaXMucGFyZW50V2F0Y2hlciA9IG5ldyBXYXRjaGVyKHBhcmVudCwgcGFyZW50S2V5LCBmdW5jdGlvbiAodmFsKSB7XG4gICAgICB1cGRhdGVQcm9wKGNoaWxkLCBwcm9wLCB2YWwpO1xuICAgIH0sIHtcbiAgICAgIHR3b1dheTogdHdvV2F5LFxuICAgICAgZmlsdGVyczogcHJvcC5maWx0ZXJzLFxuICAgICAgLy8gaW1wb3J0YW50OiBwcm9wcyBuZWVkIHRvIGJlIG9ic2VydmVkIG9uIHRoZVxuICAgICAgLy8gdi1mb3Igc2NvcGUgaWYgcHJlc2VudFxuICAgICAgc2NvcGU6IHRoaXMuX3Njb3BlXG4gICAgfSk7XG5cbiAgICAvLyBzZXQgdGhlIGNoaWxkIGluaXRpYWwgdmFsdWUuXG4gICAgaW5pdFByb3AoY2hpbGQsIHByb3AsIHBhcmVudFdhdGNoZXIudmFsdWUpO1xuXG4gICAgLy8gc2V0dXAgdHdvLXdheSBiaW5kaW5nXG4gICAgaWYgKHR3b1dheSkge1xuICAgICAgLy8gaW1wb3J0YW50OiBkZWZlciB0aGUgY2hpbGQgd2F0Y2hlciBjcmVhdGlvbiB1bnRpbFxuICAgICAgLy8gdGhlIGNyZWF0ZWQgaG9vayAoYWZ0ZXIgZGF0YSBvYnNlcnZhdGlvbilcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIGNoaWxkLiRvbmNlKCdwcmUtaG9vazpjcmVhdGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLmNoaWxkV2F0Y2hlciA9IG5ldyBXYXRjaGVyKGNoaWxkLCBjaGlsZEtleSwgZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgIHBhcmVudFdhdGNoZXIuc2V0KHZhbCk7XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAvLyBlbnN1cmUgc3luYyB1cHdhcmQgYmVmb3JlIHBhcmVudCBzeW5jIGRvd24uXG4gICAgICAgICAgLy8gdGhpcyBpcyBuZWNlc3NhcnkgaW4gY2FzZXMgZS5nLiB0aGUgY2hpbGRcbiAgICAgICAgICAvLyBtdXRhdGVzIGEgcHJvcCBhcnJheSwgdGhlbiByZXBsYWNlcyBpdC4gKCMxNjgzKVxuICAgICAgICAgIHN5bmM6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgdW5iaW5kOiBmdW5jdGlvbiB1bmJpbmQoKSB7XG4gICAgdGhpcy5wYXJlbnRXYXRjaGVyLnRlYXJkb3duKCk7XG4gICAgaWYgKHRoaXMuY2hpbGRXYXRjaGVyKSB7XG4gICAgICB0aGlzLmNoaWxkV2F0Y2hlci50ZWFyZG93bigpO1xuICAgIH1cbiAgfVxufTtcblxudmFyIHF1ZXVlJDEgPSBbXTtcbnZhciBxdWV1ZWQgPSBmYWxzZTtcblxuLyoqXG4gKiBQdXNoIGEgam9iIGludG8gdGhlIHF1ZXVlLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGpvYlxuICovXG5cbmZ1bmN0aW9uIHB1c2hKb2Ioam9iKSB7XG4gIHF1ZXVlJDEucHVzaChqb2IpO1xuICBpZiAoIXF1ZXVlZCkge1xuICAgIHF1ZXVlZCA9IHRydWU7XG4gICAgbmV4dFRpY2soZmx1c2gpO1xuICB9XG59XG5cbi8qKlxuICogRmx1c2ggdGhlIHF1ZXVlLCBhbmQgZG8gb25lIGZvcmNlZCByZWZsb3cgYmVmb3JlXG4gKiB0cmlnZ2VyaW5nIHRyYW5zaXRpb25zLlxuICovXG5cbmZ1bmN0aW9uIGZsdXNoKCkge1xuICAvLyBGb3JjZSBsYXlvdXRcbiAgdmFyIGYgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXVlJDEubGVuZ3RoOyBpKyspIHtcbiAgICBxdWV1ZSQxW2ldKCk7XG4gIH1cbiAgcXVldWUkMSA9IFtdO1xuICBxdWV1ZWQgPSBmYWxzZTtcbiAgLy8gZHVtbXkgcmV0dXJuLCBzbyBqcyBsaW50ZXJzIGRvbid0IGNvbXBsYWluIGFib3V0XG4gIC8vIHVudXNlZCB2YXJpYWJsZSBmXG4gIHJldHVybiBmO1xufVxuXG52YXIgVFlQRV9UUkFOU0lUSU9OID0gJ3RyYW5zaXRpb24nO1xudmFyIFRZUEVfQU5JTUFUSU9OID0gJ2FuaW1hdGlvbic7XG52YXIgdHJhbnNEdXJhdGlvblByb3AgPSB0cmFuc2l0aW9uUHJvcCArICdEdXJhdGlvbic7XG52YXIgYW5pbUR1cmF0aW9uUHJvcCA9IGFuaW1hdGlvblByb3AgKyAnRHVyYXRpb24nO1xuXG4vKipcbiAqIElmIGEganVzdC1lbnRlcmVkIGVsZW1lbnQgaXMgYXBwbGllZCB0aGVcbiAqIGxlYXZlIGNsYXNzIHdoaWxlIGl0cyBlbnRlciB0cmFuc2l0aW9uIGhhc24ndCBzdGFydGVkIHlldCxcbiAqIGFuZCB0aGUgdHJhbnNpdGlvbmVkIHByb3BlcnR5IGhhcyB0aGUgc2FtZSB2YWx1ZSBmb3IgYm90aFxuICogZW50ZXIvbGVhdmUsIHRoZW4gdGhlIGxlYXZlIHRyYW5zaXRpb24gd2lsbCBiZSBza2lwcGVkIGFuZFxuICogdGhlIHRyYW5zaXRpb25lbmQgZXZlbnQgbmV2ZXIgZmlyZXMuIFRoaXMgZnVuY3Rpb24gZW5zdXJlc1xuICogaXRzIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCBhZnRlciBhIHRyYW5zaXRpb24gaGFzIHN0YXJ0ZWRcbiAqIGJ5IHdhaXRpbmcgZm9yIGRvdWJsZSByYWYuXG4gKlxuICogSXQgZmFsbHMgYmFjayB0byBzZXRUaW1lb3V0IG9uIGRldmljZXMgdGhhdCBzdXBwb3J0IENTU1xuICogdHJhbnNpdGlvbnMgYnV0IG5vdCByYWYgKGUuZy4gQW5kcm9pZCA0LjIgYnJvd3NlcikgLSBzaW5jZVxuICogdGhlc2UgZW52aXJvbm1lbnRzIGFyZSB1c3VhbGx5IHNsb3csIHdlIGFyZSBnaXZpbmcgaXQgYVxuICogcmVsYXRpdmVseSBsYXJnZSB0aW1lb3V0LlxuICovXG5cbnZhciByYWYgPSBpbkJyb3dzZXIgJiYgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTtcbnZhciB3YWl0Rm9yVHJhbnNpdGlvblN0YXJ0ID0gcmFmXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuPyBmdW5jdGlvbiAoZm4pIHtcbiAgcmFmKGZ1bmN0aW9uICgpIHtcbiAgICByYWYoZm4pO1xuICB9KTtcbn0gOiBmdW5jdGlvbiAoZm4pIHtcbiAgc2V0VGltZW91dChmbiwgNTApO1xufTtcblxuLyoqXG4gKiBBIFRyYW5zaXRpb24gb2JqZWN0IHRoYXQgZW5jYXBzdWxhdGVzIHRoZSBzdGF0ZSBhbmQgbG9naWNcbiAqIG9mIHRoZSB0cmFuc2l0aW9uLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICogQHBhcmFtIHtPYmplY3R9IGhvb2tzXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqL1xuZnVuY3Rpb24gVHJhbnNpdGlvbihlbCwgaWQsIGhvb2tzLCB2bSkge1xuICB0aGlzLmlkID0gaWQ7XG4gIHRoaXMuZWwgPSBlbDtcbiAgdGhpcy5lbnRlckNsYXNzID0gaG9va3MgJiYgaG9va3MuZW50ZXJDbGFzcyB8fCBpZCArICctZW50ZXInO1xuICB0aGlzLmxlYXZlQ2xhc3MgPSBob29rcyAmJiBob29rcy5sZWF2ZUNsYXNzIHx8IGlkICsgJy1sZWF2ZSc7XG4gIHRoaXMuaG9va3MgPSBob29rcztcbiAgdGhpcy52bSA9IHZtO1xuICAvLyBhc3luYyBzdGF0ZVxuICB0aGlzLnBlbmRpbmdDc3NFdmVudCA9IHRoaXMucGVuZGluZ0Nzc0NiID0gdGhpcy5jYW5jZWwgPSB0aGlzLnBlbmRpbmdKc0NiID0gdGhpcy5vcCA9IHRoaXMuY2IgPSBudWxsO1xuICB0aGlzLmp1c3RFbnRlcmVkID0gZmFsc2U7XG4gIHRoaXMuZW50ZXJlZCA9IHRoaXMubGVmdCA9IGZhbHNlO1xuICB0aGlzLnR5cGVDYWNoZSA9IHt9O1xuICAvLyBjaGVjayBjc3MgdHJhbnNpdGlvbiB0eXBlXG4gIHRoaXMudHlwZSA9IGhvb2tzICYmIGhvb2tzLnR5cGU7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICh0aGlzLnR5cGUgJiYgdGhpcy50eXBlICE9PSBUWVBFX1RSQU5TSVRJT04gJiYgdGhpcy50eXBlICE9PSBUWVBFX0FOSU1BVElPTikge1xuICAgICAgd2FybignaW52YWxpZCBDU1MgdHJhbnNpdGlvbiB0eXBlIGZvciB0cmFuc2l0aW9uPVwiJyArIHRoaXMuaWQgKyAnXCI6ICcgKyB0aGlzLnR5cGUsIHZtKTtcbiAgICB9XG4gIH1cbiAgLy8gYmluZFxuICB2YXIgc2VsZiA9IHRoaXM7WydlbnRlck5leHRUaWNrJywgJ2VudGVyRG9uZScsICdsZWF2ZU5leHRUaWNrJywgJ2xlYXZlRG9uZSddLmZvckVhY2goZnVuY3Rpb24gKG0pIHtcbiAgICBzZWxmW21dID0gYmluZChzZWxmW21dLCBzZWxmKTtcbiAgfSk7XG59XG5cbnZhciBwJDEgPSBUcmFuc2l0aW9uLnByb3RvdHlwZTtcblxuLyoqXG4gKiBTdGFydCBhbiBlbnRlcmluZyB0cmFuc2l0aW9uLlxuICpcbiAqIDEuIGVudGVyIHRyYW5zaXRpb24gdHJpZ2dlcmVkXG4gKiAyLiBjYWxsIGJlZm9yZUVudGVyIGhvb2tcbiAqIDMuIGFkZCBlbnRlciBjbGFzc1xuICogNC4gaW5zZXJ0L3Nob3cgZWxlbWVudFxuICogNS4gY2FsbCBlbnRlciBob29rICh3aXRoIHBvc3NpYmxlIGV4cGxpY2l0IGpzIGNhbGxiYWNrKVxuICogNi4gcmVmbG93XG4gKiA3LiBiYXNlZCBvbiB0cmFuc2l0aW9uIHR5cGU6XG4gKiAgICAtIHRyYW5zaXRpb246XG4gKiAgICAgICAgcmVtb3ZlIGNsYXNzIG5vdywgd2FpdCBmb3IgdHJhbnNpdGlvbmVuZCxcbiAqICAgICAgICB0aGVuIGRvbmUgaWYgdGhlcmUncyBubyBleHBsaWNpdCBqcyBjYWxsYmFjay5cbiAqICAgIC0gYW5pbWF0aW9uOlxuICogICAgICAgIHdhaXQgZm9yIGFuaW1hdGlvbmVuZCwgcmVtb3ZlIGNsYXNzLFxuICogICAgICAgIHRoZW4gZG9uZSBpZiB0aGVyZSdzIG5vIGV4cGxpY2l0IGpzIGNhbGxiYWNrLlxuICogICAgLSBubyBjc3MgdHJhbnNpdGlvbjpcbiAqICAgICAgICBkb25lIG5vdyBpZiB0aGVyZSdzIG5vIGV4cGxpY2l0IGpzIGNhbGxiYWNrLlxuICogOC4gd2FpdCBmb3IgZWl0aGVyIGRvbmUgb3IganMgY2FsbGJhY2ssIHRoZW4gY2FsbFxuICogICAgYWZ0ZXJFbnRlciBob29rLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9wIC0gaW5zZXJ0L3Nob3cgdGhlIGVsZW1lbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl1cbiAqL1xuXG5wJDEuZW50ZXIgPSBmdW5jdGlvbiAob3AsIGNiKSB7XG4gIHRoaXMuY2FuY2VsUGVuZGluZygpO1xuICB0aGlzLmNhbGxIb29rKCdiZWZvcmVFbnRlcicpO1xuICB0aGlzLmNiID0gY2I7XG4gIGFkZENsYXNzKHRoaXMuZWwsIHRoaXMuZW50ZXJDbGFzcyk7XG4gIG9wKCk7XG4gIHRoaXMuZW50ZXJlZCA9IGZhbHNlO1xuICB0aGlzLmNhbGxIb29rV2l0aENiKCdlbnRlcicpO1xuICBpZiAodGhpcy5lbnRlcmVkKSB7XG4gICAgcmV0dXJuOyAvLyB1c2VyIGNhbGxlZCBkb25lIHN5bmNocm9ub3VzbHkuXG4gIH1cbiAgdGhpcy5jYW5jZWwgPSB0aGlzLmhvb2tzICYmIHRoaXMuaG9va3MuZW50ZXJDYW5jZWxsZWQ7XG4gIHB1c2hKb2IodGhpcy5lbnRlck5leHRUaWNrKTtcbn07XG5cbi8qKlxuICogVGhlIFwibmV4dFRpY2tcIiBwaGFzZSBvZiBhbiBlbnRlcmluZyB0cmFuc2l0aW9uLCB3aGljaCBpc1xuICogdG8gYmUgcHVzaGVkIGludG8gYSBxdWV1ZSBhbmQgZXhlY3V0ZWQgYWZ0ZXIgYSByZWZsb3cgc29cbiAqIHRoYXQgcmVtb3ZpbmcgdGhlIGNsYXNzIGNhbiB0cmlnZ2VyIGEgQ1NTIHRyYW5zaXRpb24uXG4gKi9cblxucCQxLmVudGVyTmV4dFRpY2sgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgLy8gcHJldmVudCB0cmFuc2l0aW9uIHNraXBwaW5nXG4gIHRoaXMuanVzdEVudGVyZWQgPSB0cnVlO1xuICB3YWl0Rm9yVHJhbnNpdGlvblN0YXJ0KGZ1bmN0aW9uICgpIHtcbiAgICBfdGhpcy5qdXN0RW50ZXJlZCA9IGZhbHNlO1xuICB9KTtcbiAgdmFyIGVudGVyRG9uZSA9IHRoaXMuZW50ZXJEb25lO1xuICB2YXIgdHlwZSA9IHRoaXMuZ2V0Q3NzVHJhbnNpdGlvblR5cGUodGhpcy5lbnRlckNsYXNzKTtcbiAgaWYgKCF0aGlzLnBlbmRpbmdKc0NiKSB7XG4gICAgaWYgKHR5cGUgPT09IFRZUEVfVFJBTlNJVElPTikge1xuICAgICAgLy8gdHJpZ2dlciB0cmFuc2l0aW9uIGJ5IHJlbW92aW5nIGVudGVyIGNsYXNzIG5vd1xuICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbCwgdGhpcy5lbnRlckNsYXNzKTtcbiAgICAgIHRoaXMuc2V0dXBDc3NDYih0cmFuc2l0aW9uRW5kRXZlbnQsIGVudGVyRG9uZSk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBUWVBFX0FOSU1BVElPTikge1xuICAgICAgdGhpcy5zZXR1cENzc0NiKGFuaW1hdGlvbkVuZEV2ZW50LCBlbnRlckRvbmUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbnRlckRvbmUoKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gVFlQRV9UUkFOU0lUSU9OKSB7XG4gICAgcmVtb3ZlQ2xhc3ModGhpcy5lbCwgdGhpcy5lbnRlckNsYXNzKTtcbiAgfVxufTtcblxuLyoqXG4gKiBUaGUgXCJjbGVhbnVwXCIgcGhhc2Ugb2YgYW4gZW50ZXJpbmcgdHJhbnNpdGlvbi5cbiAqL1xuXG5wJDEuZW50ZXJEb25lID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmVudGVyZWQgPSB0cnVlO1xuICB0aGlzLmNhbmNlbCA9IHRoaXMucGVuZGluZ0pzQ2IgPSBudWxsO1xuICByZW1vdmVDbGFzcyh0aGlzLmVsLCB0aGlzLmVudGVyQ2xhc3MpO1xuICB0aGlzLmNhbGxIb29rKCdhZnRlckVudGVyJyk7XG4gIGlmICh0aGlzLmNiKSB0aGlzLmNiKCk7XG59O1xuXG4vKipcbiAqIFN0YXJ0IGEgbGVhdmluZyB0cmFuc2l0aW9uLlxuICpcbiAqIDEuIGxlYXZlIHRyYW5zaXRpb24gdHJpZ2dlcmVkLlxuICogMi4gY2FsbCBiZWZvcmVMZWF2ZSBob29rXG4gKiAzLiBhZGQgbGVhdmUgY2xhc3MgKHRyaWdnZXIgY3NzIHRyYW5zaXRpb24pXG4gKiA0LiBjYWxsIGxlYXZlIGhvb2sgKHdpdGggcG9zc2libGUgZXhwbGljaXQganMgY2FsbGJhY2spXG4gKiA1LiByZWZsb3cgaWYgbm8gZXhwbGljaXQganMgY2FsbGJhY2sgaXMgcHJvdmlkZWRcbiAqIDYuIGJhc2VkIG9uIHRyYW5zaXRpb24gdHlwZTpcbiAqICAgIC0gdHJhbnNpdGlvbiBvciBhbmltYXRpb246XG4gKiAgICAgICAgd2FpdCBmb3IgZW5kIGV2ZW50LCByZW1vdmUgY2xhc3MsIHRoZW4gZG9uZSBpZlxuICogICAgICAgIHRoZXJlJ3Mgbm8gZXhwbGljaXQganMgY2FsbGJhY2suXG4gKiAgICAtIG5vIGNzcyB0cmFuc2l0aW9uOlxuICogICAgICAgIGRvbmUgaWYgdGhlcmUncyBubyBleHBsaWNpdCBqcyBjYWxsYmFjay5cbiAqIDcuIHdhaXQgZm9yIGVpdGhlciBkb25lIG9yIGpzIGNhbGxiYWNrLCB0aGVuIGNhbGxcbiAqICAgIGFmdGVyTGVhdmUgaG9vay5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBvcCAtIHJlbW92ZS9oaWRlIHRoZSBlbGVtZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdXG4gKi9cblxucCQxLmxlYXZlID0gZnVuY3Rpb24gKG9wLCBjYikge1xuICB0aGlzLmNhbmNlbFBlbmRpbmcoKTtcbiAgdGhpcy5jYWxsSG9vaygnYmVmb3JlTGVhdmUnKTtcbiAgdGhpcy5vcCA9IG9wO1xuICB0aGlzLmNiID0gY2I7XG4gIGFkZENsYXNzKHRoaXMuZWwsIHRoaXMubGVhdmVDbGFzcyk7XG4gIHRoaXMubGVmdCA9IGZhbHNlO1xuICB0aGlzLmNhbGxIb29rV2l0aENiKCdsZWF2ZScpO1xuICBpZiAodGhpcy5sZWZ0KSB7XG4gICAgcmV0dXJuOyAvLyB1c2VyIGNhbGxlZCBkb25lIHN5bmNocm9ub3VzbHkuXG4gIH1cbiAgdGhpcy5jYW5jZWwgPSB0aGlzLmhvb2tzICYmIHRoaXMuaG9va3MubGVhdmVDYW5jZWxsZWQ7XG4gIC8vIG9ubHkgbmVlZCB0byBoYW5kbGUgbGVhdmVEb25lIGlmXG4gIC8vIDEuIHRoZSB0cmFuc2l0aW9uIGlzIGFscmVhZHkgZG9uZSAoc3luY2hyb25vdXNseSBjYWxsZWRcbiAgLy8gICAgYnkgdGhlIHVzZXIsIHdoaWNoIGNhdXNlcyB0aGlzLm9wIHNldCB0byBudWxsKVxuICAvLyAyLiB0aGVyZSdzIG5vIGV4cGxpY2l0IGpzIGNhbGxiYWNrXG4gIGlmICh0aGlzLm9wICYmICF0aGlzLnBlbmRpbmdKc0NiKSB7XG4gICAgLy8gaWYgYSBDU1MgdHJhbnNpdGlvbiBsZWF2ZXMgaW1tZWRpYXRlbHkgYWZ0ZXIgZW50ZXIsXG4gICAgLy8gdGhlIHRyYW5zaXRpb25lbmQgZXZlbnQgbmV2ZXIgZmlyZXMuIHRoZXJlZm9yZSB3ZVxuICAgIC8vIGRldGVjdCBzdWNoIGNhc2VzIGFuZCBlbmQgdGhlIGxlYXZlIGltbWVkaWF0ZWx5LlxuICAgIGlmICh0aGlzLmp1c3RFbnRlcmVkKSB7XG4gICAgICB0aGlzLmxlYXZlRG9uZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwdXNoSm9iKHRoaXMubGVhdmVOZXh0VGljayk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIFRoZSBcIm5leHRUaWNrXCIgcGhhc2Ugb2YgYSBsZWF2aW5nIHRyYW5zaXRpb24uXG4gKi9cblxucCQxLmxlYXZlTmV4dFRpY2sgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB0eXBlID0gdGhpcy5nZXRDc3NUcmFuc2l0aW9uVHlwZSh0aGlzLmxlYXZlQ2xhc3MpO1xuICBpZiAodHlwZSkge1xuICAgIHZhciBldmVudCA9IHR5cGUgPT09IFRZUEVfVFJBTlNJVElPTiA/IHRyYW5zaXRpb25FbmRFdmVudCA6IGFuaW1hdGlvbkVuZEV2ZW50O1xuICAgIHRoaXMuc2V0dXBDc3NDYihldmVudCwgdGhpcy5sZWF2ZURvbmUpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMubGVhdmVEb25lKCk7XG4gIH1cbn07XG5cbi8qKlxuICogVGhlIFwiY2xlYW51cFwiIHBoYXNlIG9mIGEgbGVhdmluZyB0cmFuc2l0aW9uLlxuICovXG5cbnAkMS5sZWF2ZURvbmUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubGVmdCA9IHRydWU7XG4gIHRoaXMuY2FuY2VsID0gdGhpcy5wZW5kaW5nSnNDYiA9IG51bGw7XG4gIHRoaXMub3AoKTtcbiAgcmVtb3ZlQ2xhc3ModGhpcy5lbCwgdGhpcy5sZWF2ZUNsYXNzKTtcbiAgdGhpcy5jYWxsSG9vaygnYWZ0ZXJMZWF2ZScpO1xuICBpZiAodGhpcy5jYikgdGhpcy5jYigpO1xuICB0aGlzLm9wID0gbnVsbDtcbn07XG5cbi8qKlxuICogQ2FuY2VsIGFueSBwZW5kaW5nIGNhbGxiYWNrcyBmcm9tIGEgcHJldmlvdXNseSBydW5uaW5nXG4gKiBidXQgbm90IGZpbmlzaGVkIHRyYW5zaXRpb24uXG4gKi9cblxucCQxLmNhbmNlbFBlbmRpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMub3AgPSB0aGlzLmNiID0gbnVsbDtcbiAgdmFyIGhhc1BlbmRpbmcgPSBmYWxzZTtcbiAgaWYgKHRoaXMucGVuZGluZ0Nzc0NiKSB7XG4gICAgaGFzUGVuZGluZyA9IHRydWU7XG4gICAgb2ZmKHRoaXMuZWwsIHRoaXMucGVuZGluZ0Nzc0V2ZW50LCB0aGlzLnBlbmRpbmdDc3NDYik7XG4gICAgdGhpcy5wZW5kaW5nQ3NzRXZlbnQgPSB0aGlzLnBlbmRpbmdDc3NDYiA9IG51bGw7XG4gIH1cbiAgaWYgKHRoaXMucGVuZGluZ0pzQ2IpIHtcbiAgICBoYXNQZW5kaW5nID0gdHJ1ZTtcbiAgICB0aGlzLnBlbmRpbmdKc0NiLmNhbmNlbCgpO1xuICAgIHRoaXMucGVuZGluZ0pzQ2IgPSBudWxsO1xuICB9XG4gIGlmIChoYXNQZW5kaW5nKSB7XG4gICAgcmVtb3ZlQ2xhc3ModGhpcy5lbCwgdGhpcy5lbnRlckNsYXNzKTtcbiAgICByZW1vdmVDbGFzcyh0aGlzLmVsLCB0aGlzLmxlYXZlQ2xhc3MpO1xuICB9XG4gIGlmICh0aGlzLmNhbmNlbCkge1xuICAgIHRoaXMuY2FuY2VsLmNhbGwodGhpcy52bSwgdGhpcy5lbCk7XG4gICAgdGhpcy5jYW5jZWwgPSBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIENhbGwgYSB1c2VyLXByb3ZpZGVkIHN5bmNocm9ub3VzIGhvb2sgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqL1xuXG5wJDEuY2FsbEhvb2sgPSBmdW5jdGlvbiAodHlwZSkge1xuICBpZiAodGhpcy5ob29rcyAmJiB0aGlzLmhvb2tzW3R5cGVdKSB7XG4gICAgdGhpcy5ob29rc1t0eXBlXS5jYWxsKHRoaXMudm0sIHRoaXMuZWwpO1xuICB9XG59O1xuXG4vKipcbiAqIENhbGwgYSB1c2VyLXByb3ZpZGVkLCBwb3RlbnRpYWxseS1hc3luYyBob29rIGZ1bmN0aW9uLlxuICogV2UgY2hlY2sgZm9yIHRoZSBsZW5ndGggb2YgYXJndW1lbnRzIHRvIHNlZSBpZiB0aGUgaG9va1xuICogZXhwZWN0cyBhIGBkb25lYCBjYWxsYmFjay4gSWYgdHJ1ZSwgdGhlIHRyYW5zaXRpb24ncyBlbmRcbiAqIHdpbGwgYmUgZGV0ZXJtaW5lZCBieSB3aGVuIHRoZSB1c2VyIGNhbGxzIHRoYXQgY2FsbGJhY2s7XG4gKiBvdGhlcndpc2UsIHRoZSBlbmQgaXMgZGV0ZXJtaW5lZCBieSB0aGUgQ1NTIHRyYW5zaXRpb24gb3JcbiAqIGFuaW1hdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICovXG5cbnAkMS5jYWxsSG9va1dpdGhDYiA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gIHZhciBob29rID0gdGhpcy5ob29rcyAmJiB0aGlzLmhvb2tzW3R5cGVdO1xuICBpZiAoaG9vaykge1xuICAgIGlmIChob29rLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRoaXMucGVuZGluZ0pzQ2IgPSBjYW5jZWxsYWJsZSh0aGlzW3R5cGUgKyAnRG9uZSddKTtcbiAgICB9XG4gICAgaG9vay5jYWxsKHRoaXMudm0sIHRoaXMuZWwsIHRoaXMucGVuZGluZ0pzQ2IpO1xuICB9XG59O1xuXG4vKipcbiAqIEdldCBhbiBlbGVtZW50J3MgdHJhbnNpdGlvbiB0eXBlIGJhc2VkIG9uIHRoZVxuICogY2FsY3VsYXRlZCBzdHlsZXMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZVxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5cbnAkMS5nZXRDc3NUcmFuc2l0aW9uVHlwZSA9IGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICghdHJhbnNpdGlvbkVuZEV2ZW50IHx8XG4gIC8vIHNraXAgQ1NTIHRyYW5zaXRpb25zIGlmIHBhZ2UgaXMgbm90IHZpc2libGUgLVxuICAvLyB0aGlzIHNvbHZlcyB0aGUgaXNzdWUgb2YgdHJhbnNpdGlvbmVuZCBldmVudHMgbm90XG4gIC8vIGZpcmluZyB1bnRpbCB0aGUgcGFnZSBpcyB2aXNpYmxlIGFnYWluLlxuICAvLyBwYWdlVmlzaWJpbGl0eSBBUEkgaXMgc3VwcG9ydGVkIGluIElFMTArLCBzYW1lIGFzXG4gIC8vIENTUyB0cmFuc2l0aW9ucy5cbiAgZG9jdW1lbnQuaGlkZGVuIHx8XG4gIC8vIGV4cGxpY2l0IGpzLW9ubHkgdHJhbnNpdGlvblxuICB0aGlzLmhvb2tzICYmIHRoaXMuaG9va3MuY3NzID09PSBmYWxzZSB8fFxuICAvLyBlbGVtZW50IGlzIGhpZGRlblxuICBpc0hpZGRlbih0aGlzLmVsKSkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgdHlwZSA9IHRoaXMudHlwZSB8fCB0aGlzLnR5cGVDYWNoZVtjbGFzc05hbWVdO1xuICBpZiAodHlwZSkgcmV0dXJuIHR5cGU7XG4gIHZhciBpbmxpbmVTdHlsZXMgPSB0aGlzLmVsLnN0eWxlO1xuICB2YXIgY29tcHV0ZWRTdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsKTtcbiAgdmFyIHRyYW5zRHVyYXRpb24gPSBpbmxpbmVTdHlsZXNbdHJhbnNEdXJhdGlvblByb3BdIHx8IGNvbXB1dGVkU3R5bGVzW3RyYW5zRHVyYXRpb25Qcm9wXTtcbiAgaWYgKHRyYW5zRHVyYXRpb24gJiYgdHJhbnNEdXJhdGlvbiAhPT0gJzBzJykge1xuICAgIHR5cGUgPSBUWVBFX1RSQU5TSVRJT047XG4gIH0gZWxzZSB7XG4gICAgdmFyIGFuaW1EdXJhdGlvbiA9IGlubGluZVN0eWxlc1thbmltRHVyYXRpb25Qcm9wXSB8fCBjb21wdXRlZFN0eWxlc1thbmltRHVyYXRpb25Qcm9wXTtcbiAgICBpZiAoYW5pbUR1cmF0aW9uICYmIGFuaW1EdXJhdGlvbiAhPT0gJzBzJykge1xuICAgICAgdHlwZSA9IFRZUEVfQU5JTUFUSU9OO1xuICAgIH1cbiAgfVxuICBpZiAodHlwZSkge1xuICAgIHRoaXMudHlwZUNhY2hlW2NsYXNzTmFtZV0gPSB0eXBlO1xuICB9XG4gIHJldHVybiB0eXBlO1xufTtcblxuLyoqXG4gKiBTZXR1cCBhIENTUyB0cmFuc2l0aW9uZW5kL2FuaW1hdGlvbmVuZCBjYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKi9cblxucCQxLnNldHVwQ3NzQ2IgPSBmdW5jdGlvbiAoZXZlbnQsIGNiKSB7XG4gIHRoaXMucGVuZGluZ0Nzc0V2ZW50ID0gZXZlbnQ7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIGVsID0gdGhpcy5lbDtcbiAgdmFyIG9uRW5kID0gdGhpcy5wZW5kaW5nQ3NzQ2IgPSBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLnRhcmdldCA9PT0gZWwpIHtcbiAgICAgIG9mZihlbCwgZXZlbnQsIG9uRW5kKTtcbiAgICAgIHNlbGYucGVuZGluZ0Nzc0V2ZW50ID0gc2VsZi5wZW5kaW5nQ3NzQ2IgPSBudWxsO1xuICAgICAgaWYgKCFzZWxmLnBlbmRpbmdKc0NiICYmIGNiKSB7XG4gICAgICAgIGNiKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBvbihlbCwgZXZlbnQsIG9uRW5kKTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYW4gZWxlbWVudCBpcyBoaWRkZW4gLSBpbiB0aGF0IGNhc2Ugd2UgY2FuIGp1c3RcbiAqIHNraXAgdGhlIHRyYW5zaXRpb24gYWxsdG9nZXRoZXIuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5mdW5jdGlvbiBpc0hpZGRlbihlbCkge1xuICBpZiAoL3N2ZyQvLnRlc3QoZWwubmFtZXNwYWNlVVJJKSkge1xuICAgIC8vIFNWRyBlbGVtZW50cyBkbyBub3QgaGF2ZSBvZmZzZXQoV2lkdGh8SGVpZ2h0KVxuICAgIC8vIHNvIHdlIG5lZWQgdG8gY2hlY2sgdGhlIGNsaWVudCByZWN0XG4gICAgdmFyIHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4gIShyZWN0LndpZHRoIHx8IHJlY3QuaGVpZ2h0KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gIShlbC5vZmZzZXRXaWR0aCB8fCBlbC5vZmZzZXRIZWlnaHQgfHwgZWwuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpO1xuICB9XG59XG5cbnZhciB0cmFuc2l0aW9uJDEgPSB7XG5cbiAgcHJpb3JpdHk6IFRSQU5TSVRJT04sXG5cbiAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoaWQsIG9sZElkKSB7XG4gICAgdmFyIGVsID0gdGhpcy5lbDtcbiAgICAvLyByZXNvbHZlIG9uIG93bmVyIHZtXG4gICAgdmFyIGhvb2tzID0gcmVzb2x2ZUFzc2V0KHRoaXMudm0uJG9wdGlvbnMsICd0cmFuc2l0aW9ucycsIGlkKTtcbiAgICBpZCA9IGlkIHx8ICd2JztcbiAgICBvbGRJZCA9IG9sZElkIHx8ICd2JztcbiAgICBlbC5fX3ZfdHJhbnMgPSBuZXcgVHJhbnNpdGlvbihlbCwgaWQsIGhvb2tzLCB0aGlzLnZtKTtcbiAgICByZW1vdmVDbGFzcyhlbCwgb2xkSWQgKyAnLXRyYW5zaXRpb24nKTtcbiAgICBhZGRDbGFzcyhlbCwgaWQgKyAnLXRyYW5zaXRpb24nKTtcbiAgfVxufTtcblxudmFyIGludGVybmFsRGlyZWN0aXZlcyA9IHtcbiAgc3R5bGU6IHN0eWxlLFxuICAnY2xhc3MnOiB2Q2xhc3MsXG4gIGNvbXBvbmVudDogY29tcG9uZW50LFxuICBwcm9wOiBwcm9wRGVmLFxuICB0cmFuc2l0aW9uOiB0cmFuc2l0aW9uJDFcbn07XG5cbi8vIHNwZWNpYWwgYmluZGluZyBwcmVmaXhlc1xudmFyIGJpbmRSRSA9IC9edi1iaW5kOnxeOi87XG52YXIgb25SRSA9IC9edi1vbjp8XkAvO1xudmFyIGRpckF0dHJSRSA9IC9edi0oW146XSspKD86JHw6KC4qKSQpLztcbnZhciBtb2RpZmllclJFID0gL1xcLlteXFwuXSsvZztcbnZhciB0cmFuc2l0aW9uUkUgPSAvXih2LWJpbmQ6fDopP3RyYW5zaXRpb24kLztcblxuLy8gZGVmYXVsdCBkaXJlY3RpdmUgcHJpb3JpdHlcbnZhciBERUZBVUxUX1BSSU9SSVRZID0gMTAwMDtcbnZhciBERUZBVUxUX1RFUk1JTkFMX1BSSU9SSVRZID0gMjAwMDtcblxuLyoqXG4gKiBDb21waWxlIGEgdGVtcGxhdGUgYW5kIHJldHVybiBhIHJldXNhYmxlIGNvbXBvc2l0ZSBsaW5rXG4gKiBmdW5jdGlvbiwgd2hpY2ggcmVjdXJzaXZlbHkgY29udGFpbnMgbW9yZSBsaW5rIGZ1bmN0aW9uc1xuICogaW5zaWRlLiBUaGlzIHRvcCBsZXZlbCBjb21waWxlIGZ1bmN0aW9uIHdvdWxkIG5vcm1hbGx5XG4gKiBiZSBjYWxsZWQgb24gaW5zdGFuY2Ugcm9vdCBub2RlcywgYnV0IGNhbiBhbHNvIGJlIHVzZWRcbiAqIGZvciBwYXJ0aWFsIGNvbXBpbGF0aW9uIGlmIHRoZSBwYXJ0aWFsIGFyZ3VtZW50IGlzIHRydWUuXG4gKlxuICogVGhlIHJldHVybmVkIGNvbXBvc2l0ZSBsaW5rIGZ1bmN0aW9uLCB3aGVuIGNhbGxlZCwgd2lsbFxuICogcmV0dXJuIGFuIHVubGluayBmdW5jdGlvbiB0aGF0IHRlYXJzZG93biBhbGwgZGlyZWN0aXZlc1xuICogY3JlYXRlZCBkdXJpbmcgdGhlIGxpbmtpbmcgcGhhc2UuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fERvY3VtZW50RnJhZ21lbnR9IGVsXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtCb29sZWFufSBwYXJ0aWFsXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuXG5mdW5jdGlvbiBjb21waWxlKGVsLCBvcHRpb25zLCBwYXJ0aWFsKSB7XG4gIC8vIGxpbmsgZnVuY3Rpb24gZm9yIHRoZSBub2RlIGl0c2VsZi5cbiAgdmFyIG5vZGVMaW5rRm4gPSBwYXJ0aWFsIHx8ICFvcHRpb25zLl9hc0NvbXBvbmVudCA/IGNvbXBpbGVOb2RlKGVsLCBvcHRpb25zKSA6IG51bGw7XG4gIC8vIGxpbmsgZnVuY3Rpb24gZm9yIHRoZSBjaGlsZE5vZGVzXG4gIHZhciBjaGlsZExpbmtGbiA9ICEobm9kZUxpbmtGbiAmJiBub2RlTGlua0ZuLnRlcm1pbmFsKSAmJiAhaXNTY3JpcHQoZWwpICYmIGVsLmhhc0NoaWxkTm9kZXMoKSA/IGNvbXBpbGVOb2RlTGlzdChlbC5jaGlsZE5vZGVzLCBvcHRpb25zKSA6IG51bGw7XG5cbiAgLyoqXG4gICAqIEEgY29tcG9zaXRlIGxpbmtlciBmdW5jdGlvbiB0byBiZSBjYWxsZWQgb24gYSBhbHJlYWR5XG4gICAqIGNvbXBpbGVkIHBpZWNlIG9mIERPTSwgd2hpY2ggaW5zdGFudGlhdGVzIGFsbCBkaXJlY3RpdmVcbiAgICogaW5zdGFuY2VzLlxuICAgKlxuICAgKiBAcGFyYW0ge1Z1ZX0gdm1cbiAgICogQHBhcmFtIHtFbGVtZW50fERvY3VtZW50RnJhZ21lbnR9IGVsXG4gICAqIEBwYXJhbSB7VnVlfSBbaG9zdF0gLSBob3N0IHZtIG9mIHRyYW5zY2x1ZGVkIGNvbnRlbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IFtzY29wZV0gLSB2LWZvciBzY29wZVxuICAgKiBAcGFyYW0ge0ZyYWdtZW50fSBbZnJhZ10gLSBsaW5rIGNvbnRleHQgZnJhZ21lbnRcbiAgICogQHJldHVybiB7RnVuY3Rpb258dW5kZWZpbmVkfVxuICAgKi9cblxuICByZXR1cm4gZnVuY3Rpb24gY29tcG9zaXRlTGlua0ZuKHZtLCBlbCwgaG9zdCwgc2NvcGUsIGZyYWcpIHtcbiAgICAvLyBjYWNoZSBjaGlsZE5vZGVzIGJlZm9yZSBsaW5raW5nIHBhcmVudCwgZml4ICM2NTdcbiAgICB2YXIgY2hpbGROb2RlcyA9IHRvQXJyYXkoZWwuY2hpbGROb2Rlcyk7XG4gICAgLy8gbGlua1xuICAgIHZhciBkaXJzID0gbGlua0FuZENhcHR1cmUoZnVuY3Rpb24gY29tcG9zaXRlTGlua0NhcHR1cmVyKCkge1xuICAgICAgaWYgKG5vZGVMaW5rRm4pIG5vZGVMaW5rRm4odm0sIGVsLCBob3N0LCBzY29wZSwgZnJhZyk7XG4gICAgICBpZiAoY2hpbGRMaW5rRm4pIGNoaWxkTGlua0ZuKHZtLCBjaGlsZE5vZGVzLCBob3N0LCBzY29wZSwgZnJhZyk7XG4gICAgfSwgdm0pO1xuICAgIHJldHVybiBtYWtlVW5saW5rRm4odm0sIGRpcnMpO1xuICB9O1xufVxuXG4vKipcbiAqIEFwcGx5IGEgbGlua2VyIHRvIGEgdm0vZWxlbWVudCBwYWlyIGFuZCBjYXB0dXJlIHRoZVxuICogZGlyZWN0aXZlcyBjcmVhdGVkIGR1cmluZyB0aGUgcHJvY2Vzcy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaW5rZXJcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICovXG5cbmZ1bmN0aW9uIGxpbmtBbmRDYXB0dXJlKGxpbmtlciwgdm0pIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gcmVzZXQgZGlyZWN0aXZlcyBiZWZvcmUgZXZlcnkgY2FwdHVyZSBpbiBwcm9kdWN0aW9uXG4gICAgLy8gbW9kZSwgc28gdGhhdCB3aGVuIHVubGlua2luZyB3ZSBkb24ndCBuZWVkIHRvIHNwbGljZVxuICAgIC8vIHRoZW0gb3V0ICh3aGljaCB0dXJucyBvdXQgdG8gYmUgYSBwZXJmIGhpdCkuXG4gICAgLy8gdGhleSBhcmUga2VwdCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgdGhleSBhcmVcbiAgICAvLyB1c2VmdWwgZm9yIFZ1ZSdzIG93biB0ZXN0cy5cbiAgICB2bS5fZGlyZWN0aXZlcyA9IFtdO1xuICB9XG4gIHZhciBvcmlnaW5hbERpckNvdW50ID0gdm0uX2RpcmVjdGl2ZXMubGVuZ3RoO1xuICBsaW5rZXIoKTtcbiAgdmFyIGRpcnMgPSB2bS5fZGlyZWN0aXZlcy5zbGljZShvcmlnaW5hbERpckNvdW50KTtcbiAgZGlycy5zb3J0KGRpcmVjdGl2ZUNvbXBhcmF0b3IpO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IGRpcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZGlyc1tpXS5fYmluZCgpO1xuICB9XG4gIHJldHVybiBkaXJzO1xufVxuXG4vKipcbiAqIERpcmVjdGl2ZSBwcmlvcml0eSBzb3J0IGNvbXBhcmF0b3JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYVxuICogQHBhcmFtIHtPYmplY3R9IGJcbiAqL1xuXG5mdW5jdGlvbiBkaXJlY3RpdmVDb21wYXJhdG9yKGEsIGIpIHtcbiAgYSA9IGEuZGVzY3JpcHRvci5kZWYucHJpb3JpdHkgfHwgREVGQVVMVF9QUklPUklUWTtcbiAgYiA9IGIuZGVzY3JpcHRvci5kZWYucHJpb3JpdHkgfHwgREVGQVVMVF9QUklPUklUWTtcbiAgcmV0dXJuIGEgPiBiID8gLTEgOiBhID09PSBiID8gMCA6IDE7XG59XG5cbi8qKlxuICogTGlua2VyIGZ1bmN0aW9ucyByZXR1cm4gYW4gdW5saW5rIGZ1bmN0aW9uIHRoYXRcbiAqIHRlYXJzZG93biBhbGwgZGlyZWN0aXZlcyBpbnN0YW5jZXMgZ2VuZXJhdGVkIGR1cmluZ1xuICogdGhlIHByb2Nlc3MuXG4gKlxuICogV2UgY3JlYXRlIHVubGluayBmdW5jdGlvbnMgd2l0aCBvbmx5IHRoZSBuZWNlc3NhcnlcbiAqIGluZm9ybWF0aW9uIHRvIGF2b2lkIHJldGFpbmluZyBhZGRpdGlvbmFsIGNsb3N1cmVzLlxuICpcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICogQHBhcmFtIHtBcnJheX0gZGlyc1xuICogQHBhcmFtIHtWdWV9IFtjb250ZXh0XVxuICogQHBhcmFtIHtBcnJheX0gW2NvbnRleHREaXJzXVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cblxuZnVuY3Rpb24gbWFrZVVubGlua0ZuKHZtLCBkaXJzLCBjb250ZXh0LCBjb250ZXh0RGlycykge1xuICBmdW5jdGlvbiB1bmxpbmsoZGVzdHJveWluZykge1xuICAgIHRlYXJkb3duRGlycyh2bSwgZGlycywgZGVzdHJveWluZyk7XG4gICAgaWYgKGNvbnRleHQgJiYgY29udGV4dERpcnMpIHtcbiAgICAgIHRlYXJkb3duRGlycyhjb250ZXh0LCBjb250ZXh0RGlycyk7XG4gICAgfVxuICB9XG4gIC8vIGV4cG9zZSBsaW5rZWQgZGlyZWN0aXZlc1xuICB1bmxpbmsuZGlycyA9IGRpcnM7XG4gIHJldHVybiB1bmxpbms7XG59XG5cbi8qKlxuICogVGVhcmRvd24gcGFydGlhbCBsaW5rZWQgZGlyZWN0aXZlcy5cbiAqXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqIEBwYXJhbSB7QXJyYXl9IGRpcnNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gZGVzdHJveWluZ1xuICovXG5cbmZ1bmN0aW9uIHRlYXJkb3duRGlycyh2bSwgZGlycywgZGVzdHJveWluZykge1xuICB2YXIgaSA9IGRpcnMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgZGlyc1tpXS5fdGVhcmRvd24oKTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhZGVzdHJveWluZykge1xuICAgICAgdm0uX2RpcmVjdGl2ZXMuJHJlbW92ZShkaXJzW2ldKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDb21waWxlIGxpbmsgcHJvcHMgb24gYW4gaW5zdGFuY2UuXG4gKlxuICogQHBhcmFtIHtWdWV9IHZtXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbc2NvcGVdXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuXG5mdW5jdGlvbiBjb21waWxlQW5kTGlua1Byb3BzKHZtLCBlbCwgcHJvcHMsIHNjb3BlKSB7XG4gIHZhciBwcm9wc0xpbmtGbiA9IGNvbXBpbGVQcm9wcyhlbCwgcHJvcHMsIHZtKTtcbiAgdmFyIHByb3BEaXJzID0gbGlua0FuZENhcHR1cmUoZnVuY3Rpb24gKCkge1xuICAgIHByb3BzTGlua0ZuKHZtLCBzY29wZSk7XG4gIH0sIHZtKTtcbiAgcmV0dXJuIG1ha2VVbmxpbmtGbih2bSwgcHJvcERpcnMpO1xufVxuXG4vKipcbiAqIENvbXBpbGUgdGhlIHJvb3QgZWxlbWVudCBvZiBhbiBpbnN0YW5jZS5cbiAqXG4gKiAxLiBhdHRycyBvbiBjb250ZXh0IGNvbnRhaW5lciAoY29udGV4dCBzY29wZSlcbiAqIDIuIGF0dHJzIG9uIHRoZSBjb21wb25lbnQgdGVtcGxhdGUgcm9vdCBub2RlLCBpZlxuICogICAgcmVwbGFjZTp0cnVlIChjaGlsZCBzY29wZSlcbiAqXG4gKiBJZiB0aGlzIGlzIGEgZnJhZ21lbnQgaW5zdGFuY2UsIHdlIG9ubHkgbmVlZCB0byBjb21waWxlIDEuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0T3B0aW9uc1xuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cblxuZnVuY3Rpb24gY29tcGlsZVJvb3QoZWwsIG9wdGlvbnMsIGNvbnRleHRPcHRpb25zKSB7XG4gIHZhciBjb250YWluZXJBdHRycyA9IG9wdGlvbnMuX2NvbnRhaW5lckF0dHJzO1xuICB2YXIgcmVwbGFjZXJBdHRycyA9IG9wdGlvbnMuX3JlcGxhY2VyQXR0cnM7XG4gIHZhciBjb250ZXh0TGlua0ZuLCByZXBsYWNlckxpbmtGbjtcblxuICAvLyBvbmx5IG5lZWQgdG8gY29tcGlsZSBvdGhlciBhdHRyaWJ1dGVzIGZvclxuICAvLyBub24tZnJhZ21lbnQgaW5zdGFuY2VzXG4gIGlmIChlbC5ub2RlVHlwZSAhPT0gMTEpIHtcbiAgICAvLyBmb3IgY29tcG9uZW50cywgY29udGFpbmVyIGFuZCByZXBsYWNlciBuZWVkIHRvIGJlXG4gICAgLy8gY29tcGlsZWQgc2VwYXJhdGVseSBhbmQgbGlua2VkIGluIGRpZmZlcmVudCBzY29wZXMuXG4gICAgaWYgKG9wdGlvbnMuX2FzQ29tcG9uZW50KSB7XG4gICAgICAvLyAyLiBjb250YWluZXIgYXR0cmlidXRlc1xuICAgICAgaWYgKGNvbnRhaW5lckF0dHJzICYmIGNvbnRleHRPcHRpb25zKSB7XG4gICAgICAgIGNvbnRleHRMaW5rRm4gPSBjb21waWxlRGlyZWN0aXZlcyhjb250YWluZXJBdHRycywgY29udGV4dE9wdGlvbnMpO1xuICAgICAgfVxuICAgICAgaWYgKHJlcGxhY2VyQXR0cnMpIHtcbiAgICAgICAgLy8gMy4gcmVwbGFjZXIgYXR0cmlidXRlc1xuICAgICAgICByZXBsYWNlckxpbmtGbiA9IGNvbXBpbGVEaXJlY3RpdmVzKHJlcGxhY2VyQXR0cnMsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBub24tY29tcG9uZW50LCBqdXN0IGNvbXBpbGUgYXMgYSBub3JtYWwgZWxlbWVudC5cbiAgICAgIHJlcGxhY2VyTGlua0ZuID0gY29tcGlsZURpcmVjdGl2ZXMoZWwuYXR0cmlidXRlcywgb3B0aW9ucyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgY29udGFpbmVyQXR0cnMpIHtcbiAgICAvLyB3YXJuIGNvbnRhaW5lciBkaXJlY3RpdmVzIGZvciBmcmFnbWVudCBpbnN0YW5jZXNcbiAgICB2YXIgbmFtZXMgPSBjb250YWluZXJBdHRycy5maWx0ZXIoZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgIC8vIGFsbG93IHZ1ZS1sb2FkZXIvdnVlaWZ5IHNjb3BlZCBjc3MgYXR0cmlidXRlc1xuICAgICAgcmV0dXJuIGF0dHIubmFtZS5pbmRleE9mKCdfdi0nKSA8IDAgJiZcbiAgICAgIC8vIGFsbG93IGV2ZW50IGxpc3RlbmVyc1xuICAgICAgIW9uUkUudGVzdChhdHRyLm5hbWUpICYmXG4gICAgICAvLyBhbGxvdyBzbG90c1xuICAgICAgYXR0ci5uYW1lICE9PSAnc2xvdCc7XG4gICAgfSkubWFwKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICByZXR1cm4gJ1wiJyArIGF0dHIubmFtZSArICdcIic7XG4gICAgfSk7XG4gICAgaWYgKG5hbWVzLmxlbmd0aCkge1xuICAgICAgdmFyIHBsdXJhbCA9IG5hbWVzLmxlbmd0aCA+IDE7XG4gICAgICB3YXJuKCdBdHRyaWJ1dGUnICsgKHBsdXJhbCA/ICdzICcgOiAnICcpICsgbmFtZXMuam9pbignLCAnKSArIChwbHVyYWwgPyAnIGFyZScgOiAnIGlzJykgKyAnIGlnbm9yZWQgb24gY29tcG9uZW50ICcgKyAnPCcgKyBvcHRpb25zLmVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSArICc+IGJlY2F1c2UgJyArICd0aGUgY29tcG9uZW50IGlzIGEgZnJhZ21lbnQgaW5zdGFuY2U6ICcgKyAnaHR0cDovL3Z1ZWpzLm9yZy9ndWlkZS9jb21wb25lbnRzLmh0bWwjRnJhZ21lbnQtSW5zdGFuY2UnKTtcbiAgICB9XG4gIH1cblxuICBvcHRpb25zLl9jb250YWluZXJBdHRycyA9IG9wdGlvbnMuX3JlcGxhY2VyQXR0cnMgPSBudWxsO1xuICByZXR1cm4gZnVuY3Rpb24gcm9vdExpbmtGbih2bSwgZWwsIHNjb3BlKSB7XG4gICAgLy8gbGluayBjb250ZXh0IHNjb3BlIGRpcnNcbiAgICB2YXIgY29udGV4dCA9IHZtLl9jb250ZXh0O1xuICAgIHZhciBjb250ZXh0RGlycztcbiAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0TGlua0ZuKSB7XG4gICAgICBjb250ZXh0RGlycyA9IGxpbmtBbmRDYXB0dXJlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGV4dExpbmtGbihjb250ZXh0LCBlbCwgbnVsbCwgc2NvcGUpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgLy8gbGluayBzZWxmXG4gICAgdmFyIHNlbGZEaXJzID0gbGlua0FuZENhcHR1cmUoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHJlcGxhY2VyTGlua0ZuKSByZXBsYWNlckxpbmtGbih2bSwgZWwpO1xuICAgIH0sIHZtKTtcblxuICAgIC8vIHJldHVybiB0aGUgdW5saW5rIGZ1bmN0aW9uIHRoYXQgdGVhcnNkb3duIGNvbnRleHRcbiAgICAvLyBjb250YWluZXIgZGlyZWN0aXZlcy5cbiAgICByZXR1cm4gbWFrZVVubGlua0ZuKHZtLCBzZWxmRGlycywgY29udGV4dCwgY29udGV4dERpcnMpO1xuICB9O1xufVxuXG4vKipcbiAqIENvbXBpbGUgYSBub2RlIGFuZCByZXR1cm4gYSBub2RlTGlua0ZuIGJhc2VkIG9uIHRoZVxuICogbm9kZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufG51bGx9XG4gKi9cblxuZnVuY3Rpb24gY29tcGlsZU5vZGUobm9kZSwgb3B0aW9ucykge1xuICB2YXIgdHlwZSA9IG5vZGUubm9kZVR5cGU7XG4gIGlmICh0eXBlID09PSAxICYmICFpc1NjcmlwdChub2RlKSkge1xuICAgIHJldHVybiBjb21waWxlRWxlbWVudChub2RlLCBvcHRpb25zKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAzICYmIG5vZGUuZGF0YS50cmltKCkpIHtcbiAgICByZXR1cm4gY29tcGlsZVRleHROb2RlKG5vZGUsIG9wdGlvbnMpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogQ29tcGlsZSBhbiBlbGVtZW50IGFuZCByZXR1cm4gYSBub2RlTGlua0ZuLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtGdW5jdGlvbnxudWxsfVxuICovXG5cbmZ1bmN0aW9uIGNvbXBpbGVFbGVtZW50KGVsLCBvcHRpb25zKSB7XG4gIC8vIHByZXByb2Nlc3MgdGV4dGFyZWFzLlxuICAvLyB0ZXh0YXJlYSB0cmVhdHMgaXRzIHRleHQgY29udGVudCBhcyB0aGUgaW5pdGlhbCB2YWx1ZS5cbiAgLy8ganVzdCBiaW5kIGl0IGFzIGFuIGF0dHIgZGlyZWN0aXZlIGZvciB2YWx1ZS5cbiAgaWYgKGVsLnRhZ05hbWUgPT09ICdURVhUQVJFQScpIHtcbiAgICB2YXIgdG9rZW5zID0gcGFyc2VUZXh0KGVsLnZhbHVlKTtcbiAgICBpZiAodG9rZW5zKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJzp2YWx1ZScsIHRva2Vuc1RvRXhwKHRva2VucykpO1xuICAgICAgZWwudmFsdWUgPSAnJztcbiAgICB9XG4gIH1cbiAgdmFyIGxpbmtGbjtcbiAgdmFyIGhhc0F0dHJzID0gZWwuaGFzQXR0cmlidXRlcygpO1xuICB2YXIgYXR0cnMgPSBoYXNBdHRycyAmJiB0b0FycmF5KGVsLmF0dHJpYnV0ZXMpO1xuICAvLyBjaGVjayB0ZXJtaW5hbCBkaXJlY3RpdmVzIChmb3IgJiBpZilcbiAgaWYgKGhhc0F0dHJzKSB7XG4gICAgbGlua0ZuID0gY2hlY2tUZXJtaW5hbERpcmVjdGl2ZXMoZWwsIGF0dHJzLCBvcHRpb25zKTtcbiAgfVxuICAvLyBjaGVjayBlbGVtZW50IGRpcmVjdGl2ZXNcbiAgaWYgKCFsaW5rRm4pIHtcbiAgICBsaW5rRm4gPSBjaGVja0VsZW1lbnREaXJlY3RpdmVzKGVsLCBvcHRpb25zKTtcbiAgfVxuICAvLyBjaGVjayBjb21wb25lbnRcbiAgaWYgKCFsaW5rRm4pIHtcbiAgICBsaW5rRm4gPSBjaGVja0NvbXBvbmVudChlbCwgb3B0aW9ucyk7XG4gIH1cbiAgLy8gbm9ybWFsIGRpcmVjdGl2ZXNcbiAgaWYgKCFsaW5rRm4gJiYgaGFzQXR0cnMpIHtcbiAgICBsaW5rRm4gPSBjb21waWxlRGlyZWN0aXZlcyhhdHRycywgb3B0aW9ucyk7XG4gIH1cbiAgcmV0dXJuIGxpbmtGbjtcbn1cblxuLyoqXG4gKiBDb21waWxlIGEgdGV4dE5vZGUgYW5kIHJldHVybiBhIG5vZGVMaW5rRm4uXG4gKlxuICogQHBhcmFtIHtUZXh0Tm9kZX0gbm9kZVxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufG51bGx9IHRleHROb2RlTGlua0ZuXG4gKi9cblxuZnVuY3Rpb24gY29tcGlsZVRleHROb2RlKG5vZGUsIG9wdGlvbnMpIHtcbiAgLy8gc2tpcCBtYXJrZWQgdGV4dCBub2Rlc1xuICBpZiAobm9kZS5fc2tpcCkge1xuICAgIHJldHVybiByZW1vdmVUZXh0O1xuICB9XG5cbiAgdmFyIHRva2VucyA9IHBhcnNlVGV4dChub2RlLndob2xlVGV4dCk7XG4gIGlmICghdG9rZW5zKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyBtYXJrIGFkamFjZW50IHRleHQgbm9kZXMgYXMgc2tpcHBlZCxcbiAgLy8gYmVjYXVzZSB3ZSBhcmUgdXNpbmcgbm9kZS53aG9sZVRleHQgdG8gY29tcGlsZVxuICAvLyBhbGwgYWRqYWNlbnQgdGV4dCBub2RlcyB0b2dldGhlci4gVGhpcyBmaXhlc1xuICAvLyBpc3N1ZXMgaW4gSUUgd2hlcmUgc29tZXRpbWVzIGl0IHNwbGl0cyB1cCBhIHNpbmdsZVxuICAvLyB0ZXh0IG5vZGUgaW50byBtdWx0aXBsZSBvbmVzLlxuICB2YXIgbmV4dCA9IG5vZGUubmV4dFNpYmxpbmc7XG4gIHdoaWxlIChuZXh0ICYmIG5leHQubm9kZVR5cGUgPT09IDMpIHtcbiAgICBuZXh0Ll9za2lwID0gdHJ1ZTtcbiAgICBuZXh0ID0gbmV4dC5uZXh0U2libGluZztcbiAgfVxuXG4gIHZhciBmcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICB2YXIgZWwsIHRva2VuO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHRva2Vucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICBlbCA9IHRva2VuLnRhZyA/IHByb2Nlc3NUZXh0VG9rZW4odG9rZW4sIG9wdGlvbnMpIDogZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodG9rZW4udmFsdWUpO1xuICAgIGZyYWcuYXBwZW5kQ2hpbGQoZWwpO1xuICB9XG4gIHJldHVybiBtYWtlVGV4dE5vZGVMaW5rRm4odG9rZW5zLCBmcmFnLCBvcHRpb25zKTtcbn1cblxuLyoqXG4gKiBMaW5rZXIgZm9yIGFuIHNraXBwZWQgdGV4dCBub2RlLlxuICpcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICogQHBhcmFtIHtUZXh0fSBub2RlXG4gKi9cblxuZnVuY3Rpb24gcmVtb3ZlVGV4dCh2bSwgbm9kZSkge1xuICByZW1vdmUobm9kZSk7XG59XG5cbi8qKlxuICogUHJvY2VzcyBhIHNpbmdsZSB0ZXh0IHRva2VuLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB0b2tlblxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge05vZGV9XG4gKi9cblxuZnVuY3Rpb24gcHJvY2Vzc1RleHRUb2tlbih0b2tlbiwgb3B0aW9ucykge1xuICB2YXIgZWw7XG4gIGlmICh0b2tlbi5vbmVUaW1lKSB7XG4gICAgZWwgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0b2tlbi52YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHRva2VuLmh0bWwpIHtcbiAgICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgndi1odG1sJyk7XG4gICAgICBzZXRUb2tlblR5cGUoJ2h0bWwnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSUUgd2lsbCBjbGVhbiB1cCBlbXB0eSB0ZXh0Tm9kZXMgZHVyaW5nXG4gICAgICAvLyBmcmFnLmNsb25lTm9kZSh0cnVlKSwgc28gd2UgaGF2ZSB0byBnaXZlIGl0XG4gICAgICAvLyBzb21ldGhpbmcgaGVyZS4uLlxuICAgICAgZWwgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnICcpO1xuICAgICAgc2V0VG9rZW5UeXBlKCd0ZXh0Jyk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHNldFRva2VuVHlwZSh0eXBlKSB7XG4gICAgaWYgKHRva2VuLmRlc2NyaXB0b3IpIHJldHVybjtcbiAgICB2YXIgcGFyc2VkID0gcGFyc2VEaXJlY3RpdmUodG9rZW4udmFsdWUpO1xuICAgIHRva2VuLmRlc2NyaXB0b3IgPSB7XG4gICAgICBuYW1lOiB0eXBlLFxuICAgICAgZGVmOiBkaXJlY3RpdmVzW3R5cGVdLFxuICAgICAgZXhwcmVzc2lvbjogcGFyc2VkLmV4cHJlc3Npb24sXG4gICAgICBmaWx0ZXJzOiBwYXJzZWQuZmlsdGVyc1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGVsO1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgZnVuY3Rpb24gdGhhdCBwcm9jZXNzZXMgYSB0ZXh0Tm9kZS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IHRva2Vuc1xuICogQHBhcmFtIHtEb2N1bWVudEZyYWdtZW50fSBmcmFnXG4gKi9cblxuZnVuY3Rpb24gbWFrZVRleHROb2RlTGlua0ZuKHRva2VucywgZnJhZykge1xuICByZXR1cm4gZnVuY3Rpb24gdGV4dE5vZGVMaW5rRm4odm0sIGVsLCBob3N0LCBzY29wZSkge1xuICAgIHZhciBmcmFnQ2xvbmUgPSBmcmFnLmNsb25lTm9kZSh0cnVlKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHRvQXJyYXkoZnJhZ0Nsb25lLmNoaWxkTm9kZXMpO1xuICAgIHZhciB0b2tlbiwgdmFsdWUsIG5vZGU7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSB0b2tlbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgIHZhbHVlID0gdG9rZW4udmFsdWU7XG4gICAgICBpZiAodG9rZW4udGFnKSB7XG4gICAgICAgIG5vZGUgPSBjaGlsZE5vZGVzW2ldO1xuICAgICAgICBpZiAodG9rZW4ub25lVGltZSkge1xuICAgICAgICAgIHZhbHVlID0gKHNjb3BlIHx8IHZtKS4kZXZhbCh2YWx1ZSk7XG4gICAgICAgICAgaWYgKHRva2VuLmh0bWwpIHtcbiAgICAgICAgICAgIHJlcGxhY2Uobm9kZSwgcGFyc2VUZW1wbGF0ZSh2YWx1ZSwgdHJ1ZSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub2RlLmRhdGEgPSBfdG9TdHJpbmcodmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2bS5fYmluZERpcih0b2tlbi5kZXNjcmlwdG9yLCBub2RlLCBob3N0LCBzY29wZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmVwbGFjZShlbCwgZnJhZ0Nsb25lKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBDb21waWxlIGEgbm9kZSBsaXN0IGFuZCByZXR1cm4gYSBjaGlsZExpbmtGbi5cbiAqXG4gKiBAcGFyYW0ge05vZGVMaXN0fSBub2RlTGlzdFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufHVuZGVmaW5lZH1cbiAqL1xuXG5mdW5jdGlvbiBjb21waWxlTm9kZUxpc3Qobm9kZUxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGxpbmtGbnMgPSBbXTtcbiAgdmFyIG5vZGVMaW5rRm4sIGNoaWxkTGlua0ZuLCBub2RlO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IG5vZGVMaXN0Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIG5vZGUgPSBub2RlTGlzdFtpXTtcbiAgICBub2RlTGlua0ZuID0gY29tcGlsZU5vZGUobm9kZSwgb3B0aW9ucyk7XG4gICAgY2hpbGRMaW5rRm4gPSAhKG5vZGVMaW5rRm4gJiYgbm9kZUxpbmtGbi50ZXJtaW5hbCkgJiYgbm9kZS50YWdOYW1lICE9PSAnU0NSSVBUJyAmJiBub2RlLmhhc0NoaWxkTm9kZXMoKSA/IGNvbXBpbGVOb2RlTGlzdChub2RlLmNoaWxkTm9kZXMsIG9wdGlvbnMpIDogbnVsbDtcbiAgICBsaW5rRm5zLnB1c2gobm9kZUxpbmtGbiwgY2hpbGRMaW5rRm4pO1xuICB9XG4gIHJldHVybiBsaW5rRm5zLmxlbmd0aCA/IG1ha2VDaGlsZExpbmtGbihsaW5rRm5zKSA6IG51bGw7XG59XG5cbi8qKlxuICogTWFrZSBhIGNoaWxkIGxpbmsgZnVuY3Rpb24gZm9yIGEgbm9kZSdzIGNoaWxkTm9kZXMuXG4gKlxuICogQHBhcmFtIHtBcnJheTxGdW5jdGlvbj59IGxpbmtGbnNcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBjaGlsZExpbmtGblxuICovXG5cbmZ1bmN0aW9uIG1ha2VDaGlsZExpbmtGbihsaW5rRm5zKSB7XG4gIHJldHVybiBmdW5jdGlvbiBjaGlsZExpbmtGbih2bSwgbm9kZXMsIGhvc3QsIHNjb3BlLCBmcmFnKSB7XG4gICAgdmFyIG5vZGUsIG5vZGVMaW5rRm4sIGNoaWxkcmVuTGlua0ZuO1xuICAgIGZvciAodmFyIGkgPSAwLCBuID0gMCwgbCA9IGxpbmtGbnMubGVuZ3RoOyBpIDwgbDsgbisrKSB7XG4gICAgICBub2RlID0gbm9kZXNbbl07XG4gICAgICBub2RlTGlua0ZuID0gbGlua0Zuc1tpKytdO1xuICAgICAgY2hpbGRyZW5MaW5rRm4gPSBsaW5rRm5zW2krK107XG4gICAgICAvLyBjYWNoZSBjaGlsZE5vZGVzIGJlZm9yZSBsaW5raW5nIHBhcmVudCwgZml4ICM2NTdcbiAgICAgIHZhciBjaGlsZE5vZGVzID0gdG9BcnJheShub2RlLmNoaWxkTm9kZXMpO1xuICAgICAgaWYgKG5vZGVMaW5rRm4pIHtcbiAgICAgICAgbm9kZUxpbmtGbih2bSwgbm9kZSwgaG9zdCwgc2NvcGUsIGZyYWcpO1xuICAgICAgfVxuICAgICAgaWYgKGNoaWxkcmVuTGlua0ZuKSB7XG4gICAgICAgIGNoaWxkcmVuTGlua0ZuKHZtLCBjaGlsZE5vZGVzLCBob3N0LCBzY29wZSwgZnJhZyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIENoZWNrIGZvciBlbGVtZW50IGRpcmVjdGl2ZXMgKGN1c3RvbSBlbGVtZW50cyB0aGF0IHNob3VsZFxuICogYmUgcmVzb3ZsZWQgYXMgdGVybWluYWwgZGlyZWN0aXZlcykuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuXG5mdW5jdGlvbiBjaGVja0VsZW1lbnREaXJlY3RpdmVzKGVsLCBvcHRpb25zKSB7XG4gIHZhciB0YWcgPSBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gIGlmIChjb21tb25UYWdSRS50ZXN0KHRhZykpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIGRlZiA9IHJlc29sdmVBc3NldChvcHRpb25zLCAnZWxlbWVudERpcmVjdGl2ZXMnLCB0YWcpO1xuICBpZiAoZGVmKSB7XG4gICAgcmV0dXJuIG1ha2VUZXJtaW5hbE5vZGVMaW5rRm4oZWwsIHRhZywgJycsIG9wdGlvbnMsIGRlZik7XG4gIH1cbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhbiBlbGVtZW50IGlzIGEgY29tcG9uZW50LiBJZiB5ZXMsIHJldHVyblxuICogYSBjb21wb25lbnQgbGluayBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7RnVuY3Rpb258dW5kZWZpbmVkfVxuICovXG5cbmZ1bmN0aW9uIGNoZWNrQ29tcG9uZW50KGVsLCBvcHRpb25zKSB7XG4gIHZhciBjb21wb25lbnQgPSBjaGVja0NvbXBvbmVudEF0dHIoZWwsIG9wdGlvbnMpO1xuICBpZiAoY29tcG9uZW50KSB7XG4gICAgdmFyIHJlZiA9IGZpbmRSZWYoZWwpO1xuICAgIHZhciBkZXNjcmlwdG9yID0ge1xuICAgICAgbmFtZTogJ2NvbXBvbmVudCcsXG4gICAgICByZWY6IHJlZixcbiAgICAgIGV4cHJlc3Npb246IGNvbXBvbmVudC5pZCxcbiAgICAgIGRlZjogaW50ZXJuYWxEaXJlY3RpdmVzLmNvbXBvbmVudCxcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBsaXRlcmFsOiAhY29tcG9uZW50LmR5bmFtaWNcbiAgICAgIH1cbiAgICB9O1xuICAgIHZhciBjb21wb25lbnRMaW5rRm4gPSBmdW5jdGlvbiBjb21wb25lbnRMaW5rRm4odm0sIGVsLCBob3N0LCBzY29wZSwgZnJhZykge1xuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWFjdGl2ZSgoc2NvcGUgfHwgdm0pLiRyZWZzLCByZWYsIG51bGwpO1xuICAgICAgfVxuICAgICAgdm0uX2JpbmREaXIoZGVzY3JpcHRvciwgZWwsIGhvc3QsIHNjb3BlLCBmcmFnKTtcbiAgICB9O1xuICAgIGNvbXBvbmVudExpbmtGbi50ZXJtaW5hbCA9IHRydWU7XG4gICAgcmV0dXJuIGNvbXBvbmVudExpbmtGbjtcbiAgfVxufVxuXG4vKipcbiAqIENoZWNrIGFuIGVsZW1lbnQgZm9yIHRlcm1pbmFsIGRpcmVjdGl2ZXMgaW4gZml4ZWQgb3JkZXIuXG4gKiBJZiBpdCBmaW5kcyBvbmUsIHJldHVybiBhIHRlcm1pbmFsIGxpbmsgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtBcnJheX0gYXR0cnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gdGVybWluYWxMaW5rRm5cbiAqL1xuXG5mdW5jdGlvbiBjaGVja1Rlcm1pbmFsRGlyZWN0aXZlcyhlbCwgYXR0cnMsIG9wdGlvbnMpIHtcbiAgLy8gc2tpcCB2LXByZVxuICBpZiAoZ2V0QXR0cihlbCwgJ3YtcHJlJykgIT09IG51bGwpIHtcbiAgICByZXR1cm4gc2tpcDtcbiAgfVxuICAvLyBza2lwIHYtZWxzZSBibG9jaywgYnV0IG9ubHkgaWYgZm9sbG93aW5nIHYtaWZcbiAgaWYgKGVsLmhhc0F0dHJpYnV0ZSgndi1lbHNlJykpIHtcbiAgICB2YXIgcHJldiA9IGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgaWYgKHByZXYgJiYgcHJldi5oYXNBdHRyaWJ1dGUoJ3YtaWYnKSkge1xuICAgICAgcmV0dXJuIHNraXA7XG4gICAgfVxuICB9XG5cbiAgdmFyIGF0dHIsIG5hbWUsIHZhbHVlLCBtb2RpZmllcnMsIG1hdGNoZWQsIGRpck5hbWUsIHJhd05hbWUsIGFyZywgZGVmLCB0ZXJtRGVmO1xuICBmb3IgKHZhciBpID0gMCwgaiA9IGF0dHJzLmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgIGF0dHIgPSBhdHRyc1tpXTtcbiAgICBuYW1lID0gYXR0ci5uYW1lLnJlcGxhY2UobW9kaWZpZXJSRSwgJycpO1xuICAgIGlmIChtYXRjaGVkID0gbmFtZS5tYXRjaChkaXJBdHRyUkUpKSB7XG4gICAgICBkZWYgPSByZXNvbHZlQXNzZXQob3B0aW9ucywgJ2RpcmVjdGl2ZXMnLCBtYXRjaGVkWzFdKTtcbiAgICAgIGlmIChkZWYgJiYgZGVmLnRlcm1pbmFsKSB7XG4gICAgICAgIGlmICghdGVybURlZiB8fCAoZGVmLnByaW9yaXR5IHx8IERFRkFVTFRfVEVSTUlOQUxfUFJJT1JJVFkpID4gdGVybURlZi5wcmlvcml0eSkge1xuICAgICAgICAgIHRlcm1EZWYgPSBkZWY7XG4gICAgICAgICAgcmF3TmFtZSA9IGF0dHIubmFtZTtcbiAgICAgICAgICBtb2RpZmllcnMgPSBwYXJzZU1vZGlmaWVycyhhdHRyLm5hbWUpO1xuICAgICAgICAgIHZhbHVlID0gYXR0ci52YWx1ZTtcbiAgICAgICAgICBkaXJOYW1lID0gbWF0Y2hlZFsxXTtcbiAgICAgICAgICBhcmcgPSBtYXRjaGVkWzJdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHRlcm1EZWYpIHtcbiAgICByZXR1cm4gbWFrZVRlcm1pbmFsTm9kZUxpbmtGbihlbCwgZGlyTmFtZSwgdmFsdWUsIG9wdGlvbnMsIHRlcm1EZWYsIHJhd05hbWUsIGFyZywgbW9kaWZpZXJzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBza2lwKCkge31cbnNraXAudGVybWluYWwgPSB0cnVlO1xuXG4vKipcbiAqIEJ1aWxkIGEgbm9kZSBsaW5rIGZ1bmN0aW9uIGZvciBhIHRlcm1pbmFsIGRpcmVjdGl2ZS5cbiAqIEEgdGVybWluYWwgbGluayBmdW5jdGlvbiB0ZXJtaW5hdGVzIHRoZSBjdXJyZW50XG4gKiBjb21waWxhdGlvbiByZWN1cnNpb24gYW5kIGhhbmRsZXMgY29tcGlsYXRpb24gb2YgdGhlXG4gKiBzdWJ0cmVlIGluIHRoZSBkaXJlY3RpdmUuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtTdHJpbmd9IGRpck5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZcbiAqIEBwYXJhbSB7U3RyaW5nfSBbcmF3TmFtZV1cbiAqIEBwYXJhbSB7U3RyaW5nfSBbYXJnXVxuICogQHBhcmFtIHtPYmplY3R9IFttb2RpZmllcnNdXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gdGVybWluYWxMaW5rRm5cbiAqL1xuXG5mdW5jdGlvbiBtYWtlVGVybWluYWxOb2RlTGlua0ZuKGVsLCBkaXJOYW1lLCB2YWx1ZSwgb3B0aW9ucywgZGVmLCByYXdOYW1lLCBhcmcsIG1vZGlmaWVycykge1xuICB2YXIgcGFyc2VkID0gcGFyc2VEaXJlY3RpdmUodmFsdWUpO1xuICB2YXIgZGVzY3JpcHRvciA9IHtcbiAgICBuYW1lOiBkaXJOYW1lLFxuICAgIGFyZzogYXJnLFxuICAgIGV4cHJlc3Npb246IHBhcnNlZC5leHByZXNzaW9uLFxuICAgIGZpbHRlcnM6IHBhcnNlZC5maWx0ZXJzLFxuICAgIHJhdzogdmFsdWUsXG4gICAgYXR0cjogcmF3TmFtZSxcbiAgICBtb2RpZmllcnM6IG1vZGlmaWVycyxcbiAgICBkZWY6IGRlZlxuICB9O1xuICAvLyBjaGVjayByZWYgZm9yIHYtZm9yIGFuZCByb3V0ZXItdmlld1xuICBpZiAoZGlyTmFtZSA9PT0gJ2ZvcicgfHwgZGlyTmFtZSA9PT0gJ3JvdXRlci12aWV3Jykge1xuICAgIGRlc2NyaXB0b3IucmVmID0gZmluZFJlZihlbCk7XG4gIH1cbiAgdmFyIGZuID0gZnVuY3Rpb24gdGVybWluYWxOb2RlTGlua0ZuKHZtLCBlbCwgaG9zdCwgc2NvcGUsIGZyYWcpIHtcbiAgICBpZiAoZGVzY3JpcHRvci5yZWYpIHtcbiAgICAgIGRlZmluZVJlYWN0aXZlKChzY29wZSB8fCB2bSkuJHJlZnMsIGRlc2NyaXB0b3IucmVmLCBudWxsKTtcbiAgICB9XG4gICAgdm0uX2JpbmREaXIoZGVzY3JpcHRvciwgZWwsIGhvc3QsIHNjb3BlLCBmcmFnKTtcbiAgfTtcbiAgZm4udGVybWluYWwgPSB0cnVlO1xuICByZXR1cm4gZm47XG59XG5cbi8qKlxuICogQ29tcGlsZSB0aGUgZGlyZWN0aXZlcyBvbiBhbiBlbGVtZW50IGFuZCByZXR1cm4gYSBsaW5rZXIuXG4gKlxuICogQHBhcmFtIHtBcnJheXxOYW1lZE5vZGVNYXB9IGF0dHJzXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cblxuZnVuY3Rpb24gY29tcGlsZURpcmVjdGl2ZXMoYXR0cnMsIG9wdGlvbnMpIHtcbiAgdmFyIGkgPSBhdHRycy5sZW5ndGg7XG4gIHZhciBkaXJzID0gW107XG4gIHZhciBhdHRyLCBuYW1lLCB2YWx1ZSwgcmF3TmFtZSwgcmF3VmFsdWUsIGRpck5hbWUsIGFyZywgbW9kaWZpZXJzLCBkaXJEZWYsIHRva2VucywgbWF0Y2hlZDtcbiAgd2hpbGUgKGktLSkge1xuICAgIGF0dHIgPSBhdHRyc1tpXTtcbiAgICBuYW1lID0gcmF3TmFtZSA9IGF0dHIubmFtZTtcbiAgICB2YWx1ZSA9IHJhd1ZhbHVlID0gYXR0ci52YWx1ZTtcbiAgICB0b2tlbnMgPSBwYXJzZVRleHQodmFsdWUpO1xuICAgIC8vIHJlc2V0IGFyZ1xuICAgIGFyZyA9IG51bGw7XG4gICAgLy8gY2hlY2sgbW9kaWZpZXJzXG4gICAgbW9kaWZpZXJzID0gcGFyc2VNb2RpZmllcnMobmFtZSk7XG4gICAgbmFtZSA9IG5hbWUucmVwbGFjZShtb2RpZmllclJFLCAnJyk7XG5cbiAgICAvLyBhdHRyaWJ1dGUgaW50ZXJwb2xhdGlvbnNcbiAgICBpZiAodG9rZW5zKSB7XG4gICAgICB2YWx1ZSA9IHRva2Vuc1RvRXhwKHRva2Vucyk7XG4gICAgICBhcmcgPSBuYW1lO1xuICAgICAgcHVzaERpcignYmluZCcsIGRpcmVjdGl2ZXMuYmluZCwgdG9rZW5zKTtcbiAgICAgIC8vIHdhcm4gYWdhaW5zdCBtaXhpbmcgbXVzdGFjaGVzIHdpdGggdi1iaW5kXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAobmFtZSA9PT0gJ2NsYXNzJyAmJiBBcnJheS5wcm90b3R5cGUuc29tZS5jYWxsKGF0dHJzLCBmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgIHJldHVybiBhdHRyLm5hbWUgPT09ICc6Y2xhc3MnIHx8IGF0dHIubmFtZSA9PT0gJ3YtYmluZDpjbGFzcyc7XG4gICAgICAgIH0pKSB7XG4gICAgICAgICAgd2FybignY2xhc3M9XCInICsgcmF3VmFsdWUgKyAnXCI6IERvIG5vdCBtaXggbXVzdGFjaGUgaW50ZXJwb2xhdGlvbiAnICsgJ2FuZCB2LWJpbmQgZm9yIFwiY2xhc3NcIiBvbiB0aGUgc2FtZSBlbGVtZW50LiBVc2Ugb25lIG9yIHRoZSBvdGhlci4nLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZVxuXG4gICAgICAvLyBzcGVjaWFsIGF0dHJpYnV0ZTogdHJhbnNpdGlvblxuICAgICAgaWYgKHRyYW5zaXRpb25SRS50ZXN0KG5hbWUpKSB7XG4gICAgICAgIG1vZGlmaWVycy5saXRlcmFsID0gIWJpbmRSRS50ZXN0KG5hbWUpO1xuICAgICAgICBwdXNoRGlyKCd0cmFuc2l0aW9uJywgaW50ZXJuYWxEaXJlY3RpdmVzLnRyYW5zaXRpb24pO1xuICAgICAgfSBlbHNlXG5cbiAgICAgICAgLy8gZXZlbnQgaGFuZGxlcnNcbiAgICAgICAgaWYgKG9uUkUudGVzdChuYW1lKSkge1xuICAgICAgICAgIGFyZyA9IG5hbWUucmVwbGFjZShvblJFLCAnJyk7XG4gICAgICAgICAgcHVzaERpcignb24nLCBkaXJlY3RpdmVzLm9uKTtcbiAgICAgICAgfSBlbHNlXG5cbiAgICAgICAgICAvLyBhdHRyaWJ1dGUgYmluZGluZ3NcbiAgICAgICAgICBpZiAoYmluZFJFLnRlc3QobmFtZSkpIHtcbiAgICAgICAgICAgIGRpck5hbWUgPSBuYW1lLnJlcGxhY2UoYmluZFJFLCAnJyk7XG4gICAgICAgICAgICBpZiAoZGlyTmFtZSA9PT0gJ3N0eWxlJyB8fCBkaXJOYW1lID09PSAnY2xhc3MnKSB7XG4gICAgICAgICAgICAgIHB1c2hEaXIoZGlyTmFtZSwgaW50ZXJuYWxEaXJlY3RpdmVzW2Rpck5hbWVdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGFyZyA9IGRpck5hbWU7XG4gICAgICAgICAgICAgIHB1c2hEaXIoJ2JpbmQnLCBkaXJlY3RpdmVzLmJpbmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZVxuXG4gICAgICAgICAgICAvLyBub3JtYWwgZGlyZWN0aXZlc1xuICAgICAgICAgICAgaWYgKG1hdGNoZWQgPSBuYW1lLm1hdGNoKGRpckF0dHJSRSkpIHtcbiAgICAgICAgICAgICAgZGlyTmFtZSA9IG1hdGNoZWRbMV07XG4gICAgICAgICAgICAgIGFyZyA9IG1hdGNoZWRbMl07XG5cbiAgICAgICAgICAgICAgLy8gc2tpcCB2LWVsc2UgKHdoZW4gdXNlZCB3aXRoIHYtc2hvdylcbiAgICAgICAgICAgICAgaWYgKGRpck5hbWUgPT09ICdlbHNlJykge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgZGlyRGVmID0gcmVzb2x2ZUFzc2V0KG9wdGlvbnMsICdkaXJlY3RpdmVzJywgZGlyTmFtZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgIGlmIChkaXJEZWYpIHtcbiAgICAgICAgICAgICAgICBwdXNoRGlyKGRpck5hbWUsIGRpckRlZik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQdXNoIGEgZGlyZWN0aXZlLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZGlyTmFtZVxuICAgKiBAcGFyYW0ge09iamVjdHxGdW5jdGlvbn0gZGVmXG4gICAqIEBwYXJhbSB7QXJyYXl9IFtpbnRlcnBUb2tlbnNdXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHB1c2hEaXIoZGlyTmFtZSwgZGVmLCBpbnRlcnBUb2tlbnMpIHtcbiAgICB2YXIgaGFzT25lVGltZVRva2VuID0gaW50ZXJwVG9rZW5zICYmIGhhc09uZVRpbWUoaW50ZXJwVG9rZW5zKTtcbiAgICB2YXIgcGFyc2VkID0gIWhhc09uZVRpbWVUb2tlbiAmJiBwYXJzZURpcmVjdGl2ZSh2YWx1ZSk7XG4gICAgZGlycy5wdXNoKHtcbiAgICAgIG5hbWU6IGRpck5hbWUsXG4gICAgICBhdHRyOiByYXdOYW1lLFxuICAgICAgcmF3OiByYXdWYWx1ZSxcbiAgICAgIGRlZjogZGVmLFxuICAgICAgYXJnOiBhcmcsXG4gICAgICBtb2RpZmllcnM6IG1vZGlmaWVycyxcbiAgICAgIC8vIGNvbnZlcnNpb24gZnJvbSBpbnRlcnBvbGF0aW9uIHN0cmluZ3Mgd2l0aCBvbmUtdGltZSB0b2tlblxuICAgICAgLy8gdG8gZXhwcmVzc2lvbiBpcyBkaWZmZXJlZCB1bnRpbCBkaXJlY3RpdmUgYmluZCB0aW1lIHNvIHRoYXQgd2VcbiAgICAgIC8vIGhhdmUgYWNjZXNzIHRvIHRoZSBhY3R1YWwgdm0gY29udGV4dCBmb3Igb25lLXRpbWUgYmluZGluZ3MuXG4gICAgICBleHByZXNzaW9uOiBwYXJzZWQgJiYgcGFyc2VkLmV4cHJlc3Npb24sXG4gICAgICBmaWx0ZXJzOiBwYXJzZWQgJiYgcGFyc2VkLmZpbHRlcnMsXG4gICAgICBpbnRlcnA6IGludGVycFRva2VucyxcbiAgICAgIGhhc09uZVRpbWU6IGhhc09uZVRpbWVUb2tlblxuICAgIH0pO1xuICB9XG5cbiAgaWYgKGRpcnMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG1ha2VOb2RlTGlua0ZuKGRpcnMpO1xuICB9XG59XG5cbi8qKlxuICogUGFyc2UgbW9kaWZpZXJzIGZyb20gZGlyZWN0aXZlIGF0dHJpYnV0ZSBuYW1lLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cblxuZnVuY3Rpb24gcGFyc2VNb2RpZmllcnMobmFtZSkge1xuICB2YXIgcmVzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdmFyIG1hdGNoID0gbmFtZS5tYXRjaChtb2RpZmllclJFKTtcbiAgaWYgKG1hdGNoKSB7XG4gICAgdmFyIGkgPSBtYXRjaC5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgcmVzW21hdGNoW2ldLnNsaWNlKDEpXSA9IHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXM7XG59XG5cbi8qKlxuICogQnVpbGQgYSBsaW5rIGZ1bmN0aW9uIGZvciBhbGwgZGlyZWN0aXZlcyBvbiBhIHNpbmdsZSBub2RlLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGRpcmVjdGl2ZXNcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBkaXJlY3RpdmVzTGlua0ZuXG4gKi9cblxuZnVuY3Rpb24gbWFrZU5vZGVMaW5rRm4oZGlyZWN0aXZlcykge1xuICByZXR1cm4gZnVuY3Rpb24gbm9kZUxpbmtGbih2bSwgZWwsIGhvc3QsIHNjb3BlLCBmcmFnKSB7XG4gICAgLy8gcmV2ZXJzZSBhcHBseSBiZWNhdXNlIGl0J3Mgc29ydGVkIGxvdyB0byBoaWdoXG4gICAgdmFyIGkgPSBkaXJlY3RpdmVzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB2bS5fYmluZERpcihkaXJlY3RpdmVzW2ldLCBlbCwgaG9zdCwgc2NvcGUsIGZyYWcpO1xuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhbiBpbnRlcnBvbGF0aW9uIHN0cmluZyBjb250YWlucyBvbmUtdGltZSB0b2tlbnMuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gdG9rZW5zXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbmZ1bmN0aW9uIGhhc09uZVRpbWUodG9rZW5zKSB7XG4gIHZhciBpID0gdG9rZW5zLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIGlmICh0b2tlbnNbaV0ub25lVGltZSkgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNTY3JpcHQoZWwpIHtcbiAgcmV0dXJuIGVsLnRhZ05hbWUgPT09ICdTQ1JJUFQnICYmICghZWwuaGFzQXR0cmlidXRlKCd0eXBlJykgfHwgZWwuZ2V0QXR0cmlidXRlKCd0eXBlJykgPT09ICd0ZXh0L2phdmFzY3JpcHQnKTtcbn1cblxudmFyIHNwZWNpYWxDaGFyUkUgPSAvW15cXHdcXC06XFwuXS87XG5cbi8qKlxuICogUHJvY2VzcyBhbiBlbGVtZW50IG9yIGEgRG9jdW1lbnRGcmFnbWVudCBiYXNlZCBvbiBhXG4gKiBpbnN0YW5jZSBvcHRpb24gb2JqZWN0LiBUaGlzIGFsbG93cyB1cyB0byB0cmFuc2NsdWRlXG4gKiBhIHRlbXBsYXRlIG5vZGUvZnJhZ21lbnQgYmVmb3JlIHRoZSBpbnN0YW5jZSBpcyBjcmVhdGVkLFxuICogc28gdGhlIHByb2Nlc3NlZCBmcmFnbWVudCBjYW4gdGhlbiBiZSBjbG9uZWQgYW5kIHJldXNlZFxuICogaW4gdi1mb3IuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge0VsZW1lbnR8RG9jdW1lbnRGcmFnbWVudH1cbiAqL1xuXG5mdW5jdGlvbiB0cmFuc2NsdWRlKGVsLCBvcHRpb25zKSB7XG4gIC8vIGV4dHJhY3QgY29udGFpbmVyIGF0dHJpYnV0ZXMgdG8gcGFzcyB0aGVtIGRvd25cbiAgLy8gdG8gY29tcGlsZXIsIGJlY2F1c2UgdGhleSBuZWVkIHRvIGJlIGNvbXBpbGVkIGluXG4gIC8vIHBhcmVudCBzY29wZS4gd2UgYXJlIG11dGF0aW5nIHRoZSBvcHRpb25zIG9iamVjdCBoZXJlXG4gIC8vIGFzc3VtaW5nIHRoZSBzYW1lIG9iamVjdCB3aWxsIGJlIHVzZWQgZm9yIGNvbXBpbGVcbiAgLy8gcmlnaHQgYWZ0ZXIgdGhpcy5cbiAgaWYgKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zLl9jb250YWluZXJBdHRycyA9IGV4dHJhY3RBdHRycyhlbCk7XG4gIH1cbiAgLy8gZm9yIHRlbXBsYXRlIHRhZ3MsIHdoYXQgd2Ugd2FudCBpcyBpdHMgY29udGVudCBhc1xuICAvLyBhIGRvY3VtZW50RnJhZ21lbnQgKGZvciBmcmFnbWVudCBpbnN0YW5jZXMpXG4gIGlmIChpc1RlbXBsYXRlKGVsKSkge1xuICAgIGVsID0gcGFyc2VUZW1wbGF0ZShlbCk7XG4gIH1cbiAgaWYgKG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5fYXNDb21wb25lbnQgJiYgIW9wdGlvbnMudGVtcGxhdGUpIHtcbiAgICAgIG9wdGlvbnMudGVtcGxhdGUgPSAnPHNsb3Q+PC9zbG90Pic7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnRlbXBsYXRlKSB7XG4gICAgICBvcHRpb25zLl9jb250ZW50ID0gZXh0cmFjdENvbnRlbnQoZWwpO1xuICAgICAgZWwgPSB0cmFuc2NsdWRlVGVtcGxhdGUoZWwsIG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuICBpZiAoaXNGcmFnbWVudChlbCkpIHtcbiAgICAvLyBhbmNob3JzIGZvciBmcmFnbWVudCBpbnN0YW5jZVxuICAgIC8vIHBhc3NpbmcgaW4gYHBlcnNpc3Q6IHRydWVgIHRvIGF2b2lkIHRoZW0gYmVpbmdcbiAgICAvLyBkaXNjYXJkZWQgYnkgSUUgZHVyaW5nIHRlbXBsYXRlIGNsb25pbmdcbiAgICBwcmVwZW5kKGNyZWF0ZUFuY2hvcigndi1zdGFydCcsIHRydWUpLCBlbCk7XG4gICAgZWwuYXBwZW5kQ2hpbGQoY3JlYXRlQW5jaG9yKCd2LWVuZCcsIHRydWUpKTtcbiAgfVxuICByZXR1cm4gZWw7XG59XG5cbi8qKlxuICogUHJvY2VzcyB0aGUgdGVtcGxhdGUgb3B0aW9uLlxuICogSWYgdGhlIHJlcGxhY2Ugb3B0aW9uIGlzIHRydWUgdGhpcyB3aWxsIHN3YXAgdGhlICRlbC5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7RWxlbWVudHxEb2N1bWVudEZyYWdtZW50fVxuICovXG5cbmZ1bmN0aW9uIHRyYW5zY2x1ZGVUZW1wbGF0ZShlbCwgb3B0aW9ucykge1xuICB2YXIgdGVtcGxhdGUgPSBvcHRpb25zLnRlbXBsYXRlO1xuICB2YXIgZnJhZyA9IHBhcnNlVGVtcGxhdGUodGVtcGxhdGUsIHRydWUpO1xuICBpZiAoZnJhZykge1xuICAgIHZhciByZXBsYWNlciA9IGZyYWcuZmlyc3RDaGlsZDtcbiAgICB2YXIgdGFnID0gcmVwbGFjZXIudGFnTmFtZSAmJiByZXBsYWNlci50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKG9wdGlvbnMucmVwbGFjZSkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoZWwgPT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKCdZb3UgYXJlIG1vdW50aW5nIGFuIGluc3RhbmNlIHdpdGggYSB0ZW1wbGF0ZSB0byAnICsgJzxib2R5Pi4gVGhpcyB3aWxsIHJlcGxhY2UgPGJvZHk+IGVudGlyZWx5LiBZb3UgJyArICdzaG91bGQgcHJvYmFibHkgdXNlIGByZXBsYWNlOiBmYWxzZWAgaGVyZS4nKTtcbiAgICAgIH1cbiAgICAgIC8vIHRoZXJlIGFyZSBtYW55IGNhc2VzIHdoZXJlIHRoZSBpbnN0YW5jZSBtdXN0XG4gICAgICAvLyBiZWNvbWUgYSBmcmFnbWVudCBpbnN0YW5jZTogYmFzaWNhbGx5IGFueXRoaW5nIHRoYXRcbiAgICAgIC8vIGNhbiBjcmVhdGUgbW9yZSB0aGFuIDEgcm9vdCBub2Rlcy5cbiAgICAgIGlmIChcbiAgICAgIC8vIG11bHRpLWNoaWxkcmVuIHRlbXBsYXRlXG4gICAgICBmcmFnLmNoaWxkTm9kZXMubGVuZ3RoID4gMSB8fFxuICAgICAgLy8gbm9uLWVsZW1lbnQgdGVtcGxhdGVcbiAgICAgIHJlcGxhY2VyLm5vZGVUeXBlICE9PSAxIHx8XG4gICAgICAvLyBzaW5nbGUgbmVzdGVkIGNvbXBvbmVudFxuICAgICAgdGFnID09PSAnY29tcG9uZW50JyB8fCByZXNvbHZlQXNzZXQob3B0aW9ucywgJ2NvbXBvbmVudHMnLCB0YWcpIHx8IGhhc0JpbmRBdHRyKHJlcGxhY2VyLCAnaXMnKSB8fFxuICAgICAgLy8gZWxlbWVudCBkaXJlY3RpdmVcbiAgICAgIHJlc29sdmVBc3NldChvcHRpb25zLCAnZWxlbWVudERpcmVjdGl2ZXMnLCB0YWcpIHx8XG4gICAgICAvLyBmb3IgYmxvY2tcbiAgICAgIHJlcGxhY2VyLmhhc0F0dHJpYnV0ZSgndi1mb3InKSB8fFxuICAgICAgLy8gaWYgYmxvY2tcbiAgICAgIHJlcGxhY2VyLmhhc0F0dHJpYnV0ZSgndi1pZicpKSB7XG4gICAgICAgIHJldHVybiBmcmFnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3B0aW9ucy5fcmVwbGFjZXJBdHRycyA9IGV4dHJhY3RBdHRycyhyZXBsYWNlcik7XG4gICAgICAgIG1lcmdlQXR0cnMoZWwsIHJlcGxhY2VyKTtcbiAgICAgICAgcmV0dXJuIHJlcGxhY2VyO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBlbC5hcHBlbmRDaGlsZChmcmFnKTtcbiAgICAgIHJldHVybiBlbDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKCdJbnZhbGlkIHRlbXBsYXRlIG9wdGlvbjogJyArIHRlbXBsYXRlKTtcbiAgfVxufVxuXG4vKipcbiAqIEhlbHBlciB0byBleHRyYWN0IGEgY29tcG9uZW50IGNvbnRhaW5lcidzIGF0dHJpYnV0ZXNcbiAqIGludG8gYSBwbGFpbiBvYmplY3QgYXJyYXkuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cblxuZnVuY3Rpb24gZXh0cmFjdEF0dHJzKGVsKSB7XG4gIGlmIChlbC5ub2RlVHlwZSA9PT0gMSAmJiBlbC5oYXNBdHRyaWJ1dGVzKCkpIHtcbiAgICByZXR1cm4gdG9BcnJheShlbC5hdHRyaWJ1dGVzKTtcbiAgfVxufVxuXG4vKipcbiAqIE1lcmdlIHRoZSBhdHRyaWJ1dGVzIG9mIHR3byBlbGVtZW50cywgYW5kIG1ha2Ugc3VyZVxuICogdGhlIGNsYXNzIG5hbWVzIGFyZSBtZXJnZWQgcHJvcGVybHkuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBmcm9tXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHRvXG4gKi9cblxuZnVuY3Rpb24gbWVyZ2VBdHRycyhmcm9tLCB0bykge1xuICB2YXIgYXR0cnMgPSBmcm9tLmF0dHJpYnV0ZXM7XG4gIHZhciBpID0gYXR0cnMubGVuZ3RoO1xuICB2YXIgbmFtZSwgdmFsdWU7XG4gIHdoaWxlIChpLS0pIHtcbiAgICBuYW1lID0gYXR0cnNbaV0ubmFtZTtcbiAgICB2YWx1ZSA9IGF0dHJzW2ldLnZhbHVlO1xuICAgIGlmICghdG8uaGFzQXR0cmlidXRlKG5hbWUpICYmICFzcGVjaWFsQ2hhclJFLnRlc3QobmFtZSkpIHtcbiAgICAgIHRvLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAnY2xhc3MnICYmICFwYXJzZVRleHQodmFsdWUpICYmICh2YWx1ZSA9IHZhbHVlLnRyaW0oKSkpIHtcbiAgICAgIHZhbHVlLnNwbGl0KC9cXHMrLykuZm9yRWFjaChmdW5jdGlvbiAoY2xzKSB7XG4gICAgICAgIGFkZENsYXNzKHRvLCBjbHMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogU2NhbiBhbmQgZGV0ZXJtaW5lIHNsb3QgY29udGVudCBkaXN0cmlidXRpb24uXG4gKiBXZSBkbyB0aGlzIGR1cmluZyB0cmFuc2NsdXNpb24gaW5zdGVhZCBhdCBjb21waWxlIHRpbWUgc28gdGhhdFxuICogdGhlIGRpc3RyaWJ1dGlvbiBpcyBkZWNvdXBsZWQgZnJvbSB0aGUgY29tcGlsYXRpb24gb3JkZXIgb2ZcbiAqIHRoZSBzbG90cy5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR8RG9jdW1lbnRGcmFnbWVudH0gdGVtcGxhdGVcbiAqIEBwYXJhbSB7RWxlbWVudH0gY29udGVudFxuICogQHBhcmFtIHtWdWV9IHZtXG4gKi9cblxuZnVuY3Rpb24gcmVzb2x2ZVNsb3RzKHZtLCBjb250ZW50KSB7XG4gIGlmICghY29udGVudCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgY29udGVudHMgPSB2bS5fc2xvdENvbnRlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdmFyIGVsLCBuYW1lO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IGNvbnRlbnQuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZWwgPSBjb250ZW50LmNoaWxkcmVuW2ldO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbmQtYXNzaWduICovXG4gICAgaWYgKG5hbWUgPSBlbC5nZXRBdHRyaWJ1dGUoJ3Nsb3QnKSkge1xuICAgICAgKGNvbnRlbnRzW25hbWVdIHx8IChjb250ZW50c1tuYW1lXSA9IFtdKSkucHVzaChlbCk7XG4gICAgfVxuICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uZC1hc3NpZ24gKi9cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBnZXRCaW5kQXR0cihlbCwgJ3Nsb3QnKSkge1xuICAgICAgd2FybignVGhlIFwic2xvdFwiIGF0dHJpYnV0ZSBtdXN0IGJlIHN0YXRpYy4nLCB2bS4kcGFyZW50KTtcbiAgICB9XG4gIH1cbiAgZm9yIChuYW1lIGluIGNvbnRlbnRzKSB7XG4gICAgY29udGVudHNbbmFtZV0gPSBleHRyYWN0RnJhZ21lbnQoY29udGVudHNbbmFtZV0sIGNvbnRlbnQpO1xuICB9XG4gIGlmIChjb250ZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAgIHZhciBub2RlcyA9IGNvbnRlbnQuY2hpbGROb2RlcztcbiAgICBpZiAobm9kZXMubGVuZ3RoID09PSAxICYmIG5vZGVzWzBdLm5vZGVUeXBlID09PSAzICYmICFub2Rlc1swXS5kYXRhLnRyaW0oKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb250ZW50c1snZGVmYXVsdCddID0gZXh0cmFjdEZyYWdtZW50KGNvbnRlbnQuY2hpbGROb2RlcywgY29udGVudCk7XG4gIH1cbn1cblxuLyoqXG4gKiBFeHRyYWN0IHF1YWxpZmllZCBjb250ZW50IG5vZGVzIGZyb20gYSBub2RlIGxpc3QuXG4gKlxuICogQHBhcmFtIHtOb2RlTGlzdH0gbm9kZXNcbiAqIEByZXR1cm4ge0RvY3VtZW50RnJhZ21lbnR9XG4gKi9cblxuZnVuY3Rpb24gZXh0cmFjdEZyYWdtZW50KG5vZGVzLCBwYXJlbnQpIHtcbiAgdmFyIGZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gIG5vZGVzID0gdG9BcnJheShub2Rlcyk7XG4gIGZvciAodmFyIGkgPSAwLCBsID0gbm9kZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdmFyIG5vZGUgPSBub2Rlc1tpXTtcbiAgICBpZiAoaXNUZW1wbGF0ZShub2RlKSAmJiAhbm9kZS5oYXNBdHRyaWJ1dGUoJ3YtaWYnKSAmJiAhbm9kZS5oYXNBdHRyaWJ1dGUoJ3YtZm9yJykpIHtcbiAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgIG5vZGUgPSBwYXJzZVRlbXBsYXRlKG5vZGUsIHRydWUpO1xuICAgIH1cbiAgICBmcmFnLmFwcGVuZENoaWxkKG5vZGUpO1xuICB9XG4gIHJldHVybiBmcmFnO1xufVxuXG5cblxudmFyIGNvbXBpbGVyID0gT2JqZWN0LmZyZWV6ZSh7XG5cdGNvbXBpbGU6IGNvbXBpbGUsXG5cdGNvbXBpbGVBbmRMaW5rUHJvcHM6IGNvbXBpbGVBbmRMaW5rUHJvcHMsXG5cdGNvbXBpbGVSb290OiBjb21waWxlUm9vdCxcblx0dHJhbnNjbHVkZTogdHJhbnNjbHVkZSxcblx0cmVzb2x2ZVNsb3RzOiByZXNvbHZlU2xvdHNcbn0pO1xuXG5mdW5jdGlvbiBzdGF0ZU1peGluIChWdWUpIHtcbiAgLyoqXG4gICAqIEFjY2Vzc29yIGZvciBgJGRhdGFgIHByb3BlcnR5LCBzaW5jZSBzZXR0aW5nICRkYXRhXG4gICAqIHJlcXVpcmVzIG9ic2VydmluZyB0aGUgbmV3IG9iamVjdCBhbmQgdXBkYXRpbmdcbiAgICogcHJveGllZCBwcm9wZXJ0aWVzLlxuICAgKi9cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLnByb3RvdHlwZSwgJyRkYXRhJywge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChuZXdEYXRhKSB7XG4gICAgICBpZiAobmV3RGF0YSAhPT0gdGhpcy5fZGF0YSkge1xuICAgICAgICB0aGlzLl9zZXREYXRhKG5ld0RhdGEpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLyoqXG4gICAqIFNldHVwIHRoZSBzY29wZSBvZiBhbiBpbnN0YW5jZSwgd2hpY2ggY29udGFpbnM6XG4gICAqIC0gb2JzZXJ2ZWQgZGF0YVxuICAgKiAtIGNvbXB1dGVkIHByb3BlcnRpZXNcbiAgICogLSB1c2VyIG1ldGhvZHNcbiAgICogLSBtZXRhIHByb3BlcnRpZXNcbiAgICovXG5cbiAgVnVlLnByb3RvdHlwZS5faW5pdFN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2luaXRQcm9wcygpO1xuICAgIHRoaXMuX2luaXRNZXRhKCk7XG4gICAgdGhpcy5faW5pdE1ldGhvZHMoKTtcbiAgICB0aGlzLl9pbml0RGF0YSgpO1xuICAgIHRoaXMuX2luaXRDb21wdXRlZCgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHByb3BzLlxuICAgKi9cblxuICBWdWUucHJvdG90eXBlLl9pbml0UHJvcHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB0aGlzLiRvcHRpb25zO1xuICAgIHZhciBlbCA9IG9wdGlvbnMuZWw7XG4gICAgdmFyIHByb3BzID0gb3B0aW9ucy5wcm9wcztcbiAgICBpZiAocHJvcHMgJiYgIWVsKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oJ1Byb3BzIHdpbGwgbm90IGJlIGNvbXBpbGVkIGlmIG5vIGBlbGAgb3B0aW9uIGlzICcgKyAncHJvdmlkZWQgYXQgaW5zdGFudGlhdGlvbi4nLCB0aGlzKTtcbiAgICB9XG4gICAgLy8gbWFrZSBzdXJlIHRvIGNvbnZlcnQgc3RyaW5nIHNlbGVjdG9ycyBpbnRvIGVsZW1lbnQgbm93XG4gICAgZWwgPSBvcHRpb25zLmVsID0gcXVlcnkoZWwpO1xuICAgIHRoaXMuX3Byb3BzVW5saW5rRm4gPSBlbCAmJiBlbC5ub2RlVHlwZSA9PT0gMSAmJiBwcm9wc1xuICAgIC8vIHByb3BzIG11c3QgYmUgbGlua2VkIGluIHByb3BlciBzY29wZSBpZiBpbnNpZGUgdi1mb3JcbiAgICA/IGNvbXBpbGVBbmRMaW5rUHJvcHModGhpcywgZWwsIHByb3BzLCB0aGlzLl9zY29wZSkgOiBudWxsO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBkYXRhLlxuICAgKi9cblxuICBWdWUucHJvdG90eXBlLl9pbml0RGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZGF0YUZuID0gdGhpcy4kb3B0aW9ucy5kYXRhO1xuICAgIHZhciBkYXRhID0gdGhpcy5fZGF0YSA9IGRhdGFGbiA/IGRhdGFGbigpIDoge307XG4gICAgaWYgKCFpc1BsYWluT2JqZWN0KGRhdGEpKSB7XG4gICAgICBkYXRhID0ge307XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oJ2RhdGEgZnVuY3Rpb25zIHNob3VsZCByZXR1cm4gYW4gb2JqZWN0LicsIHRoaXMpO1xuICAgIH1cbiAgICB2YXIgcHJvcHMgPSB0aGlzLl9wcm9wcztcbiAgICAvLyBwcm94eSBkYXRhIG9uIGluc3RhbmNlXG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhkYXRhKTtcbiAgICB2YXIgaSwga2V5O1xuICAgIGkgPSBrZXlzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgLy8gdGhlcmUgYXJlIHR3byBzY2VuYXJpb3Mgd2hlcmUgd2UgY2FuIHByb3h5IGEgZGF0YSBrZXk6XG4gICAgICAvLyAxLiBpdCdzIG5vdCBhbHJlYWR5IGRlZmluZWQgYXMgYSBwcm9wXG4gICAgICAvLyAyLiBpdCdzIHByb3ZpZGVkIHZpYSBhIGluc3RhbnRpYXRpb24gb3B0aW9uIEFORCB0aGVyZSBhcmUgbm9cbiAgICAgIC8vICAgIHRlbXBsYXRlIHByb3AgcHJlc2VudFxuICAgICAgaWYgKCFwcm9wcyB8fCAhaGFzT3duKHByb3BzLCBrZXkpKSB7XG4gICAgICAgIHRoaXMuX3Byb3h5KGtleSk7XG4gICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgd2FybignRGF0YSBmaWVsZCBcIicgKyBrZXkgKyAnXCIgaXMgYWxyZWFkeSBkZWZpbmVkICcgKyAnYXMgYSBwcm9wLiBUbyBwcm92aWRlIGRlZmF1bHQgdmFsdWUgZm9yIGEgcHJvcCwgdXNlIHRoZSBcImRlZmF1bHRcIiAnICsgJ3Byb3Agb3B0aW9uOyBpZiB5b3Ugd2FudCB0byBwYXNzIHByb3AgdmFsdWVzIHRvIGFuIGluc3RhbnRpYXRpb24gJyArICdjYWxsLCB1c2UgdGhlIFwicHJvcHNEYXRhXCIgb3B0aW9uLicsIHRoaXMpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBvYnNlcnZlIGRhdGFcbiAgICBvYnNlcnZlKGRhdGEsIHRoaXMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTd2FwIHRoZSBpbnN0YW5jZSdzICRkYXRhLiBDYWxsZWQgaW4gJGRhdGEncyBzZXR0ZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBuZXdEYXRhXG4gICAqL1xuXG4gIFZ1ZS5wcm90b3R5cGUuX3NldERhdGEgPSBmdW5jdGlvbiAobmV3RGF0YSkge1xuICAgIG5ld0RhdGEgPSBuZXdEYXRhIHx8IHt9O1xuICAgIHZhciBvbGREYXRhID0gdGhpcy5fZGF0YTtcbiAgICB0aGlzLl9kYXRhID0gbmV3RGF0YTtcbiAgICB2YXIga2V5cywga2V5LCBpO1xuICAgIC8vIHVucHJveHkga2V5cyBub3QgcHJlc2VudCBpbiBuZXcgZGF0YVxuICAgIGtleXMgPSBPYmplY3Qua2V5cyhvbGREYXRhKTtcbiAgICBpID0ga2V5cy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgIGlmICghKGtleSBpbiBuZXdEYXRhKSkge1xuICAgICAgICB0aGlzLl91bnByb3h5KGtleSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHByb3h5IGtleXMgbm90IGFscmVhZHkgcHJveGllZCxcbiAgICAvLyBhbmQgdHJpZ2dlciBjaGFuZ2UgZm9yIGNoYW5nZWQgdmFsdWVzXG4gICAga2V5cyA9IE9iamVjdC5rZXlzKG5ld0RhdGEpO1xuICAgIGkgPSBrZXlzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgaWYgKCFoYXNPd24odGhpcywga2V5KSkge1xuICAgICAgICAvLyBuZXcgcHJvcGVydHlcbiAgICAgICAgdGhpcy5fcHJveHkoa2V5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgb2xkRGF0YS5fX29iX18ucmVtb3ZlVm0odGhpcyk7XG4gICAgb2JzZXJ2ZShuZXdEYXRhLCB0aGlzKTtcbiAgICB0aGlzLl9kaWdlc3QoKTtcbiAgfTtcblxuICAvKipcbiAgICogUHJveHkgYSBwcm9wZXJ0eSwgc28gdGhhdFxuICAgKiB2bS5wcm9wID09PSB2bS5fZGF0YS5wcm9wXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAgICovXG5cbiAgVnVlLnByb3RvdHlwZS5fcHJveHkgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKCFpc1Jlc2VydmVkKGtleSkpIHtcbiAgICAgIC8vIG5lZWQgdG8gc3RvcmUgcmVmIHRvIHNlbGYgaGVyZVxuICAgICAgLy8gYmVjYXVzZSB0aGVzZSBnZXR0ZXIvc2V0dGVycyBtaWdodFxuICAgICAgLy8gYmUgY2FsbGVkIGJ5IGNoaWxkIHNjb3BlcyB2aWFcbiAgICAgIC8vIHByb3RvdHlwZSBpbmhlcml0YW5jZS5cbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLCBrZXksIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIHByb3h5R2V0dGVyKCkge1xuICAgICAgICAgIHJldHVybiBzZWxmLl9kYXRhW2tleV07XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gcHJveHlTZXR0ZXIodmFsKSB7XG4gICAgICAgICAgc2VsZi5fZGF0YVtrZXldID0gdmFsO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFVucHJveHkgYSBwcm9wZXJ0eS5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICAgKi9cblxuICBWdWUucHJvdG90eXBlLl91bnByb3h5ID0gZnVuY3Rpb24gKGtleSkge1xuICAgIGlmICghaXNSZXNlcnZlZChrZXkpKSB7XG4gICAgICBkZWxldGUgdGhpc1trZXldO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRm9yY2UgdXBkYXRlIG9uIGV2ZXJ5IHdhdGNoZXIgaW4gc2NvcGUuXG4gICAqL1xuXG4gIFZ1ZS5wcm90b3R5cGUuX2RpZ2VzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHRoaXMuX3dhdGNoZXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdGhpcy5fd2F0Y2hlcnNbaV0udXBkYXRlKHRydWUpOyAvLyBzaGFsbG93IHVwZGF0ZXNcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldHVwIGNvbXB1dGVkIHByb3BlcnRpZXMuIFRoZXkgYXJlIGVzc2VudGlhbGx5XG4gICAqIHNwZWNpYWwgZ2V0dGVyL3NldHRlcnNcbiAgICovXG5cbiAgZnVuY3Rpb24gbm9vcCgpIHt9XG4gIFZ1ZS5wcm90b3R5cGUuX2luaXRDb21wdXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY29tcHV0ZWQgPSB0aGlzLiRvcHRpb25zLmNvbXB1dGVkO1xuICAgIGlmIChjb21wdXRlZCkge1xuICAgICAgZm9yICh2YXIga2V5IGluIGNvbXB1dGVkKSB7XG4gICAgICAgIHZhciB1c2VyRGVmID0gY29tcHV0ZWRba2V5XTtcbiAgICAgICAgdmFyIGRlZiA9IHtcbiAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBpZiAodHlwZW9mIHVzZXJEZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBkZWYuZ2V0ID0gbWFrZUNvbXB1dGVkR2V0dGVyKHVzZXJEZWYsIHRoaXMpO1xuICAgICAgICAgIGRlZi5zZXQgPSBub29wO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlZi5nZXQgPSB1c2VyRGVmLmdldCA/IHVzZXJEZWYuY2FjaGUgIT09IGZhbHNlID8gbWFrZUNvbXB1dGVkR2V0dGVyKHVzZXJEZWYuZ2V0LCB0aGlzKSA6IGJpbmQodXNlckRlZi5nZXQsIHRoaXMpIDogbm9vcDtcbiAgICAgICAgICBkZWYuc2V0ID0gdXNlckRlZi5zZXQgPyBiaW5kKHVzZXJEZWYuc2V0LCB0aGlzKSA6IG5vb3A7XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIGtleSwgZGVmKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUNvbXB1dGVkR2V0dGVyKGdldHRlciwgb3duZXIpIHtcbiAgICB2YXIgd2F0Y2hlciA9IG5ldyBXYXRjaGVyKG93bmVyLCBnZXR0ZXIsIG51bGwsIHtcbiAgICAgIGxhenk6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gY29tcHV0ZWRHZXR0ZXIoKSB7XG4gICAgICBpZiAod2F0Y2hlci5kaXJ0eSkge1xuICAgICAgICB3YXRjaGVyLmV2YWx1YXRlKCk7XG4gICAgICB9XG4gICAgICBpZiAoRGVwLnRhcmdldCkge1xuICAgICAgICB3YXRjaGVyLmRlcGVuZCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHdhdGNoZXIudmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR1cCBpbnN0YW5jZSBtZXRob2RzLiBNZXRob2RzIG11c3QgYmUgYm91bmQgdG8gdGhlXG4gICAqIGluc3RhbmNlIHNpbmNlIHRoZXkgbWlnaHQgYmUgcGFzc2VkIGRvd24gYXMgYSBwcm9wIHRvXG4gICAqIGNoaWxkIGNvbXBvbmVudHMuXG4gICAqL1xuXG4gIFZ1ZS5wcm90b3R5cGUuX2luaXRNZXRob2RzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBtZXRob2RzID0gdGhpcy4kb3B0aW9ucy5tZXRob2RzO1xuICAgIGlmIChtZXRob2RzKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gbWV0aG9kcykge1xuICAgICAgICB0aGlzW2tleV0gPSBiaW5kKG1ldGhvZHNba2V5XSwgdGhpcyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIG1ldGEgaW5mb3JtYXRpb24gbGlrZSAkaW5kZXgsICRrZXkgJiAkdmFsdWUuXG4gICAqL1xuXG4gIFZ1ZS5wcm90b3R5cGUuX2luaXRNZXRhID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBtZXRhcyA9IHRoaXMuJG9wdGlvbnMuX21ldGE7XG4gICAgaWYgKG1ldGFzKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gbWV0YXMpIHtcbiAgICAgICAgZGVmaW5lUmVhY3RpdmUodGhpcywga2V5LCBtZXRhc1trZXldKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbnZhciBldmVudFJFID0gL152LW9uOnxeQC87XG5cbmZ1bmN0aW9uIGV2ZW50c01peGluIChWdWUpIHtcbiAgLyoqXG4gICAqIFNldHVwIHRoZSBpbnN0YW5jZSdzIG9wdGlvbiBldmVudHMgJiB3YXRjaGVycy5cbiAgICogSWYgdGhlIHZhbHVlIGlzIGEgc3RyaW5nLCB3ZSBwdWxsIGl0IGZyb20gdGhlXG4gICAqIGluc3RhbmNlJ3MgbWV0aG9kcyBieSBuYW1lLlxuICAgKi9cblxuICBWdWUucHJvdG90eXBlLl9pbml0RXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0gdGhpcy4kb3B0aW9ucztcbiAgICBpZiAob3B0aW9ucy5fYXNDb21wb25lbnQpIHtcbiAgICAgIHJlZ2lzdGVyQ29tcG9uZW50RXZlbnRzKHRoaXMsIG9wdGlvbnMuZWwpO1xuICAgIH1cbiAgICByZWdpc3RlckNhbGxiYWNrcyh0aGlzLCAnJG9uJywgb3B0aW9ucy5ldmVudHMpO1xuICAgIHJlZ2lzdGVyQ2FsbGJhY2tzKHRoaXMsICckd2F0Y2gnLCBvcHRpb25zLndhdGNoKTtcbiAgfTtcblxuICAvKipcbiAgICogUmVnaXN0ZXIgdi1vbiBldmVudHMgb24gYSBjaGlsZCBjb21wb25lbnRcbiAgICpcbiAgICogQHBhcmFtIHtWdWV9IHZtXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICovXG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJDb21wb25lbnRFdmVudHModm0sIGVsKSB7XG4gICAgdmFyIGF0dHJzID0gZWwuYXR0cmlidXRlcztcbiAgICB2YXIgbmFtZSwgdmFsdWUsIGhhbmRsZXI7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBhdHRycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIG5hbWUgPSBhdHRyc1tpXS5uYW1lO1xuICAgICAgaWYgKGV2ZW50UkUudGVzdChuYW1lKSkge1xuICAgICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKGV2ZW50UkUsICcnKTtcbiAgICAgICAgLy8gZm9yY2UgdGhlIGV4cHJlc3Npb24gaW50byBhIHN0YXRlbWVudCBzbyB0aGF0XG4gICAgICAgIC8vIGl0IGFsd2F5cyBkeW5hbWljYWxseSByZXNvbHZlcyB0aGUgbWV0aG9kIHRvIGNhbGwgKCMyNjcwKVxuICAgICAgICAvLyBraW5kYSB1Z2x5IGhhY2ssIGJ1dCBkb2VzIHRoZSBqb2IuXG4gICAgICAgIHZhbHVlID0gYXR0cnNbaV0udmFsdWU7XG4gICAgICAgIGlmIChpc1NpbXBsZVBhdGgodmFsdWUpKSB7XG4gICAgICAgICAgdmFsdWUgKz0gJy5hcHBseSh0aGlzLCAkYXJndW1lbnRzKSc7XG4gICAgICAgIH1cbiAgICAgICAgaGFuZGxlciA9ICh2bS5fc2NvcGUgfHwgdm0uX2NvbnRleHQpLiRldmFsKHZhbHVlLCB0cnVlKTtcbiAgICAgICAgaGFuZGxlci5fZnJvbVBhcmVudCA9IHRydWU7XG4gICAgICAgIHZtLiRvbihuYW1lLnJlcGxhY2UoZXZlbnRSRSksIGhhbmRsZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBjYWxsYmFja3MgZm9yIG9wdGlvbiBldmVudHMgYW5kIHdhdGNoZXJzLlxuICAgKlxuICAgKiBAcGFyYW0ge1Z1ZX0gdm1cbiAgICogQHBhcmFtIHtTdHJpbmd9IGFjdGlvblxuICAgKiBAcGFyYW0ge09iamVjdH0gaGFzaFxuICAgKi9cblxuICBmdW5jdGlvbiByZWdpc3RlckNhbGxiYWNrcyh2bSwgYWN0aW9uLCBoYXNoKSB7XG4gICAgaWYgKCFoYXNoKSByZXR1cm47XG4gICAgdmFyIGhhbmRsZXJzLCBrZXksIGksIGo7XG4gICAgZm9yIChrZXkgaW4gaGFzaCkge1xuICAgICAgaGFuZGxlcnMgPSBoYXNoW2tleV07XG4gICAgICBpZiAoaXNBcnJheShoYW5kbGVycykpIHtcbiAgICAgICAgZm9yIChpID0gMCwgaiA9IGhhbmRsZXJzLmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgICAgIHJlZ2lzdGVyKHZtLCBhY3Rpb24sIGtleSwgaGFuZGxlcnNbaV0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWdpc3Rlcih2bSwgYWN0aW9uLCBrZXksIGhhbmRsZXJzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGVscGVyIHRvIHJlZ2lzdGVyIGFuIGV2ZW50L3dhdGNoIGNhbGxiYWNrLlxuICAgKlxuICAgKiBAcGFyYW0ge1Z1ZX0gdm1cbiAgICogQHBhcmFtIHtTdHJpbmd9IGFjdGlvblxuICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gICAqIEBwYXJhbSB7RnVuY3Rpb258U3RyaW5nfE9iamVjdH0gaGFuZGxlclxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyKHZtLCBhY3Rpb24sIGtleSwgaGFuZGxlciwgb3B0aW9ucykge1xuICAgIHZhciB0eXBlID0gdHlwZW9mIGhhbmRsZXI7XG4gICAgaWYgKHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZtW2FjdGlvbl0oa2V5LCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgbWV0aG9kcyA9IHZtLiRvcHRpb25zLm1ldGhvZHM7XG4gICAgICB2YXIgbWV0aG9kID0gbWV0aG9kcyAmJiBtZXRob2RzW2hhbmRsZXJdO1xuICAgICAgaWYgKG1ldGhvZCkge1xuICAgICAgICB2bVthY3Rpb25dKGtleSwgbWV0aG9kLCBvcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybignVW5rbm93biBtZXRob2Q6IFwiJyArIGhhbmRsZXIgKyAnXCIgd2hlbiAnICsgJ3JlZ2lzdGVyaW5nIGNhbGxiYWNrIGZvciAnICsgYWN0aW9uICsgJzogXCInICsga2V5ICsgJ1wiLicsIHZtKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGhhbmRsZXIgJiYgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlZ2lzdGVyKHZtLCBhY3Rpb24sIGtleSwgaGFuZGxlci5oYW5kbGVyLCBoYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0dXAgcmVjdXJzaXZlIGF0dGFjaGVkL2RldGFjaGVkIGNhbGxzXG4gICAqL1xuXG4gIFZ1ZS5wcm90b3R5cGUuX2luaXRET01Ib29rcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLiRvbignaG9vazphdHRhY2hlZCcsIG9uQXR0YWNoZWQpO1xuICAgIHRoaXMuJG9uKCdob29rOmRldGFjaGVkJywgb25EZXRhY2hlZCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIHJlY3Vyc2l2ZWx5IGNhbGwgYXR0YWNoZWQgaG9vayBvbiBjaGlsZHJlblxuICAgKi9cblxuICBmdW5jdGlvbiBvbkF0dGFjaGVkKCkge1xuICAgIGlmICghdGhpcy5faXNBdHRhY2hlZCkge1xuICAgICAgdGhpcy5faXNBdHRhY2hlZCA9IHRydWU7XG4gICAgICB0aGlzLiRjaGlsZHJlbi5mb3JFYWNoKGNhbGxBdHRhY2gpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJdGVyYXRvciB0byBjYWxsIGF0dGFjaGVkIGhvb2tcbiAgICpcbiAgICogQHBhcmFtIHtWdWV9IGNoaWxkXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGNhbGxBdHRhY2goY2hpbGQpIHtcbiAgICBpZiAoIWNoaWxkLl9pc0F0dGFjaGVkICYmIGluRG9jKGNoaWxkLiRlbCkpIHtcbiAgICAgIGNoaWxkLl9jYWxsSG9vaygnYXR0YWNoZWQnKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gcmVjdXJzaXZlbHkgY2FsbCBkZXRhY2hlZCBob29rIG9uIGNoaWxkcmVuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIG9uRGV0YWNoZWQoKSB7XG4gICAgaWYgKHRoaXMuX2lzQXR0YWNoZWQpIHtcbiAgICAgIHRoaXMuX2lzQXR0YWNoZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuJGNoaWxkcmVuLmZvckVhY2goY2FsbERldGFjaCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEl0ZXJhdG9yIHRvIGNhbGwgZGV0YWNoZWQgaG9va1xuICAgKlxuICAgKiBAcGFyYW0ge1Z1ZX0gY2hpbGRcbiAgICovXG5cbiAgZnVuY3Rpb24gY2FsbERldGFjaChjaGlsZCkge1xuICAgIGlmIChjaGlsZC5faXNBdHRhY2hlZCAmJiAhaW5Eb2MoY2hpbGQuJGVsKSkge1xuICAgICAgY2hpbGQuX2NhbGxIb29rKCdkZXRhY2hlZCcpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIGFsbCBoYW5kbGVycyBmb3IgYSBob29rXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBob29rXG4gICAqL1xuXG4gIFZ1ZS5wcm90b3R5cGUuX2NhbGxIb29rID0gZnVuY3Rpb24gKGhvb2spIHtcbiAgICB0aGlzLiRlbWl0KCdwcmUtaG9vazonICsgaG9vayk7XG4gICAgdmFyIGhhbmRsZXJzID0gdGhpcy4kb3B0aW9uc1tob29rXTtcbiAgICBpZiAoaGFuZGxlcnMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBqID0gaGFuZGxlcnMubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgICAgIGhhbmRsZXJzW2ldLmNhbGwodGhpcyk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuJGVtaXQoJ2hvb2s6JyArIGhvb2spO1xuICB9O1xufVxuXG5mdW5jdGlvbiBub29wJDEoKSB7fVxuXG4vKipcbiAqIEEgZGlyZWN0aXZlIGxpbmtzIGEgRE9NIGVsZW1lbnQgd2l0aCBhIHBpZWNlIG9mIGRhdGEsXG4gKiB3aGljaCBpcyB0aGUgcmVzdWx0IG9mIGV2YWx1YXRpbmcgYW4gZXhwcmVzc2lvbi5cbiAqIEl0IHJlZ2lzdGVycyBhIHdhdGNoZXIgd2l0aCB0aGUgZXhwcmVzc2lvbiBhbmQgY2FsbHNcbiAqIHRoZSBET00gdXBkYXRlIGZ1bmN0aW9uIHdoZW4gYSBjaGFuZ2UgaXMgdHJpZ2dlcmVkLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZXNjcmlwdG9yXG4gKiAgICAgICAgICAgICAgICAgLSB7U3RyaW5nfSBuYW1lXG4gKiAgICAgICAgICAgICAgICAgLSB7T2JqZWN0fSBkZWZcbiAqICAgICAgICAgICAgICAgICAtIHtTdHJpbmd9IGV4cHJlc3Npb25cbiAqICAgICAgICAgICAgICAgICAtIHtBcnJheTxPYmplY3Q+fSBbZmlsdGVyc11cbiAqICAgICAgICAgICAgICAgICAtIHtPYmplY3R9IFttb2RpZmllcnNdXG4gKiAgICAgICAgICAgICAgICAgLSB7Qm9vbGVhbn0gbGl0ZXJhbFxuICogICAgICAgICAgICAgICAgIC0ge1N0cmluZ30gYXR0clxuICogICAgICAgICAgICAgICAgIC0ge1N0cmluZ30gYXJnXG4gKiAgICAgICAgICAgICAgICAgLSB7U3RyaW5nfSByYXdcbiAqICAgICAgICAgICAgICAgICAtIHtTdHJpbmd9IFtyZWZdXG4gKiAgICAgICAgICAgICAgICAgLSB7QXJyYXk8T2JqZWN0Pn0gW2ludGVycF1cbiAqICAgICAgICAgICAgICAgICAtIHtCb29sZWFufSBbaGFzT25lVGltZV1cbiAqIEBwYXJhbSB7VnVlfSB2bVxuICogQHBhcmFtIHtOb2RlfSBlbFxuICogQHBhcmFtIHtWdWV9IFtob3N0XSAtIHRyYW5zY2x1c2lvbiBob3N0IGNvbXBvbmVudFxuICogQHBhcmFtIHtPYmplY3R9IFtzY29wZV0gLSB2LWZvciBzY29wZVxuICogQHBhcmFtIHtGcmFnbWVudH0gW2ZyYWddIC0gb3duZXIgZnJhZ21lbnRcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBEaXJlY3RpdmUoZGVzY3JpcHRvciwgdm0sIGVsLCBob3N0LCBzY29wZSwgZnJhZykge1xuICB0aGlzLnZtID0gdm07XG4gIHRoaXMuZWwgPSBlbDtcbiAgLy8gY29weSBkZXNjcmlwdG9yIHByb3BlcnRpZXNcbiAgdGhpcy5kZXNjcmlwdG9yID0gZGVzY3JpcHRvcjtcbiAgdGhpcy5uYW1lID0gZGVzY3JpcHRvci5uYW1lO1xuICB0aGlzLmV4cHJlc3Npb24gPSBkZXNjcmlwdG9yLmV4cHJlc3Npb247XG4gIHRoaXMuYXJnID0gZGVzY3JpcHRvci5hcmc7XG4gIHRoaXMubW9kaWZpZXJzID0gZGVzY3JpcHRvci5tb2RpZmllcnM7XG4gIHRoaXMuZmlsdGVycyA9IGRlc2NyaXB0b3IuZmlsdGVycztcbiAgdGhpcy5saXRlcmFsID0gdGhpcy5tb2RpZmllcnMgJiYgdGhpcy5tb2RpZmllcnMubGl0ZXJhbDtcbiAgLy8gcHJpdmF0ZVxuICB0aGlzLl9sb2NrZWQgPSBmYWxzZTtcbiAgdGhpcy5fYm91bmQgPSBmYWxzZTtcbiAgdGhpcy5fbGlzdGVuZXJzID0gbnVsbDtcbiAgLy8gbGluayBjb250ZXh0XG4gIHRoaXMuX2hvc3QgPSBob3N0O1xuICB0aGlzLl9zY29wZSA9IHNjb3BlO1xuICB0aGlzLl9mcmFnID0gZnJhZztcbiAgLy8gc3RvcmUgZGlyZWN0aXZlcyBvbiBub2RlIGluIGRldiBtb2RlXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuZWwpIHtcbiAgICB0aGlzLmVsLl92dWVfZGlyZWN0aXZlcyA9IHRoaXMuZWwuX3Z1ZV9kaXJlY3RpdmVzIHx8IFtdO1xuICAgIHRoaXMuZWwuX3Z1ZV9kaXJlY3RpdmVzLnB1c2godGhpcyk7XG4gIH1cbn1cblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBkaXJlY3RpdmUsIG1peGluIGRlZmluaXRpb24gcHJvcGVydGllcyxcbiAqIHNldHVwIHRoZSB3YXRjaGVyLCBjYWxsIGRlZmluaXRpb24gYmluZCgpIGFuZCB1cGRhdGUoKVxuICogaWYgcHJlc2VudC5cbiAqL1xuXG5EaXJlY3RpdmUucHJvdG90eXBlLl9iaW5kID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbmFtZSA9IHRoaXMubmFtZTtcbiAgdmFyIGRlc2NyaXB0b3IgPSB0aGlzLmRlc2NyaXB0b3I7XG5cbiAgLy8gcmVtb3ZlIGF0dHJpYnV0ZVxuICBpZiAoKG5hbWUgIT09ICdjbG9haycgfHwgdGhpcy52bS5faXNDb21waWxlZCkgJiYgdGhpcy5lbCAmJiB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZSkge1xuICAgIHZhciBhdHRyID0gZGVzY3JpcHRvci5hdHRyIHx8ICd2LScgKyBuYW1lO1xuICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKGF0dHIpO1xuICB9XG5cbiAgLy8gY29weSBkZWYgcHJvcGVydGllc1xuICB2YXIgZGVmID0gZGVzY3JpcHRvci5kZWY7XG4gIGlmICh0eXBlb2YgZGVmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhpcy51cGRhdGUgPSBkZWY7XG4gIH0gZWxzZSB7XG4gICAgZXh0ZW5kKHRoaXMsIGRlZik7XG4gIH1cblxuICAvLyBzZXR1cCBkaXJlY3RpdmUgcGFyYW1zXG4gIHRoaXMuX3NldHVwUGFyYW1zKCk7XG5cbiAgLy8gaW5pdGlhbCBiaW5kXG4gIGlmICh0aGlzLmJpbmQpIHtcbiAgICB0aGlzLmJpbmQoKTtcbiAgfVxuICB0aGlzLl9ib3VuZCA9IHRydWU7XG5cbiAgaWYgKHRoaXMubGl0ZXJhbCkge1xuICAgIHRoaXMudXBkYXRlICYmIHRoaXMudXBkYXRlKGRlc2NyaXB0b3IucmF3KTtcbiAgfSBlbHNlIGlmICgodGhpcy5leHByZXNzaW9uIHx8IHRoaXMubW9kaWZpZXJzKSAmJiAodGhpcy51cGRhdGUgfHwgdGhpcy50d29XYXkpICYmICF0aGlzLl9jaGVja1N0YXRlbWVudCgpKSB7XG4gICAgLy8gd3JhcHBlZCB1cGRhdGVyIGZvciBjb250ZXh0XG4gICAgdmFyIGRpciA9IHRoaXM7XG4gICAgaWYgKHRoaXMudXBkYXRlKSB7XG4gICAgICB0aGlzLl91cGRhdGUgPSBmdW5jdGlvbiAodmFsLCBvbGRWYWwpIHtcbiAgICAgICAgaWYgKCFkaXIuX2xvY2tlZCkge1xuICAgICAgICAgIGRpci51cGRhdGUodmFsLCBvbGRWYWwpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl91cGRhdGUgPSBub29wJDE7XG4gICAgfVxuICAgIHZhciBwcmVQcm9jZXNzID0gdGhpcy5fcHJlUHJvY2VzcyA/IGJpbmQodGhpcy5fcHJlUHJvY2VzcywgdGhpcykgOiBudWxsO1xuICAgIHZhciBwb3N0UHJvY2VzcyA9IHRoaXMuX3Bvc3RQcm9jZXNzID8gYmluZCh0aGlzLl9wb3N0UHJvY2VzcywgdGhpcykgOiBudWxsO1xuICAgIHZhciB3YXRjaGVyID0gdGhpcy5fd2F0Y2hlciA9IG5ldyBXYXRjaGVyKHRoaXMudm0sIHRoaXMuZXhwcmVzc2lvbiwgdGhpcy5fdXBkYXRlLCAvLyBjYWxsYmFja1xuICAgIHtcbiAgICAgIGZpbHRlcnM6IHRoaXMuZmlsdGVycyxcbiAgICAgIHR3b1dheTogdGhpcy50d29XYXksXG4gICAgICBkZWVwOiB0aGlzLmRlZXAsXG4gICAgICBwcmVQcm9jZXNzOiBwcmVQcm9jZXNzLFxuICAgICAgcG9zdFByb2Nlc3M6IHBvc3RQcm9jZXNzLFxuICAgICAgc2NvcGU6IHRoaXMuX3Njb3BlXG4gICAgfSk7XG4gICAgLy8gdi1tb2RlbCB3aXRoIGluaXRhbCBpbmxpbmUgdmFsdWUgbmVlZCB0byBzeW5jIGJhY2sgdG9cbiAgICAvLyBtb2RlbCBpbnN0ZWFkIG9mIHVwZGF0ZSB0byBET00gb24gaW5pdC4gVGhleSB3b3VsZFxuICAgIC8vIHNldCB0aGUgYWZ0ZXJCaW5kIGhvb2sgdG8gaW5kaWNhdGUgdGhhdC5cbiAgICBpZiAodGhpcy5hZnRlckJpbmQpIHtcbiAgICAgIHRoaXMuYWZ0ZXJCaW5kKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnVwZGF0ZSkge1xuICAgICAgdGhpcy51cGRhdGUod2F0Y2hlci52YWx1ZSk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIFNldHVwIGFsbCBwYXJhbSBhdHRyaWJ1dGVzLCBlLmcuIHRyYWNrLWJ5LFxuICogdHJhbnNpdGlvbi1tb2RlLCBldGMuLi5cbiAqL1xuXG5EaXJlY3RpdmUucHJvdG90eXBlLl9zZXR1cFBhcmFtcyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCF0aGlzLnBhcmFtcykge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgcGFyYW1zID0gdGhpcy5wYXJhbXM7XG4gIC8vIHN3YXAgdGhlIHBhcmFtcyBhcnJheSB3aXRoIGEgZnJlc2ggb2JqZWN0LlxuICB0aGlzLnBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHZhciBpID0gcGFyYW1zLmxlbmd0aDtcbiAgdmFyIGtleSwgdmFsLCBtYXBwZWRLZXk7XG4gIHdoaWxlIChpLS0pIHtcbiAgICBrZXkgPSBoeXBoZW5hdGUocGFyYW1zW2ldKTtcbiAgICBtYXBwZWRLZXkgPSBjYW1lbGl6ZShrZXkpO1xuICAgIHZhbCA9IGdldEJpbmRBdHRyKHRoaXMuZWwsIGtleSk7XG4gICAgaWYgKHZhbCAhPSBudWxsKSB7XG4gICAgICAvLyBkeW5hbWljXG4gICAgICB0aGlzLl9zZXR1cFBhcmFtV2F0Y2hlcihtYXBwZWRLZXksIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHN0YXRpY1xuICAgICAgdmFsID0gZ2V0QXR0cih0aGlzLmVsLCBrZXkpO1xuICAgICAgaWYgKHZhbCAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMucGFyYW1zW21hcHBlZEtleV0gPSB2YWwgPT09ICcnID8gdHJ1ZSA6IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogU2V0dXAgYSB3YXRjaGVyIGZvciBhIGR5bmFtaWMgcGFyYW0uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHBhcmFtIHtTdHJpbmd9IGV4cHJlc3Npb25cbiAqL1xuXG5EaXJlY3RpdmUucHJvdG90eXBlLl9zZXR1cFBhcmFtV2F0Y2hlciA9IGZ1bmN0aW9uIChrZXksIGV4cHJlc3Npb24pIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgY2FsbGVkID0gZmFsc2U7XG4gIHZhciB1bndhdGNoID0gKHRoaXMuX3Njb3BlIHx8IHRoaXMudm0pLiR3YXRjaChleHByZXNzaW9uLCBmdW5jdGlvbiAodmFsLCBvbGRWYWwpIHtcbiAgICBzZWxmLnBhcmFtc1trZXldID0gdmFsO1xuICAgIC8vIHNpbmNlIHdlIGFyZSBpbiBpbW1lZGlhdGUgbW9kZSxcbiAgICAvLyBvbmx5IGNhbGwgdGhlIHBhcmFtIGNoYW5nZSBjYWxsYmFja3MgaWYgdGhpcyBpcyBub3QgdGhlIGZpcnN0IHVwZGF0ZS5cbiAgICBpZiAoY2FsbGVkKSB7XG4gICAgICB2YXIgY2IgPSBzZWxmLnBhcmFtV2F0Y2hlcnMgJiYgc2VsZi5wYXJhbVdhdGNoZXJzW2tleV07XG4gICAgICBpZiAoY2IpIHtcbiAgICAgICAgY2IuY2FsbChzZWxmLCB2YWwsIG9sZFZhbCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgfVxuICB9LCB7XG4gICAgaW1tZWRpYXRlOiB0cnVlLFxuICAgIHVzZXI6IGZhbHNlXG4gIH0pOyh0aGlzLl9wYXJhbVVud2F0Y2hGbnMgfHwgKHRoaXMuX3BhcmFtVW53YXRjaEZucyA9IFtdKSkucHVzaCh1bndhdGNoKTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIGRpcmVjdGl2ZSBpcyBhIGZ1bmN0aW9uIGNhbGxlclxuICogYW5kIGlmIHRoZSBleHByZXNzaW9uIGlzIGEgY2FsbGFibGUgb25lLiBJZiBib3RoIHRydWUsXG4gKiB3ZSB3cmFwIHVwIHRoZSBleHByZXNzaW9uIGFuZCB1c2UgaXQgYXMgdGhlIGV2ZW50XG4gKiBoYW5kbGVyLlxuICpcbiAqIGUuZy4gb24tY2xpY2s9XCJhKytcIlxuICpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuRGlyZWN0aXZlLnByb3RvdHlwZS5fY2hlY2tTdGF0ZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBleHByZXNzaW9uID0gdGhpcy5leHByZXNzaW9uO1xuICBpZiAoZXhwcmVzc2lvbiAmJiB0aGlzLmFjY2VwdFN0YXRlbWVudCAmJiAhaXNTaW1wbGVQYXRoKGV4cHJlc3Npb24pKSB7XG4gICAgdmFyIGZuID0gcGFyc2VFeHByZXNzaW9uKGV4cHJlc3Npb24pLmdldDtcbiAgICB2YXIgc2NvcGUgPSB0aGlzLl9zY29wZSB8fCB0aGlzLnZtO1xuICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24gaGFuZGxlcihlKSB7XG4gICAgICBzY29wZS4kZXZlbnQgPSBlO1xuICAgICAgZm4uY2FsbChzY29wZSwgc2NvcGUpO1xuICAgICAgc2NvcGUuJGV2ZW50ID0gbnVsbDtcbiAgICB9O1xuICAgIGlmICh0aGlzLmZpbHRlcnMpIHtcbiAgICAgIGhhbmRsZXIgPSBzY29wZS5fYXBwbHlGaWx0ZXJzKGhhbmRsZXIsIG51bGwsIHRoaXMuZmlsdGVycyk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlKGhhbmRsZXIpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG4vKipcbiAqIFNldCB0aGUgY29ycmVzcG9uZGluZyB2YWx1ZSB3aXRoIHRoZSBzZXR0ZXIuXG4gKiBUaGlzIHNob3VsZCBvbmx5IGJlIHVzZWQgaW4gdHdvLXdheSBkaXJlY3RpdmVzXG4gKiBlLmcuIHYtbW9kZWwuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHB1YmxpY1xuICovXG5cbkRpcmVjdGl2ZS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmICh0aGlzLnR3b1dheSkge1xuICAgIHRoaXMuX3dpdGhMb2NrKGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuX3dhdGNoZXIuc2V0KHZhbHVlKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgd2FybignRGlyZWN0aXZlLnNldCgpIGNhbiBvbmx5IGJlIHVzZWQgaW5zaWRlIHR3b1dheScgKyAnZGlyZWN0aXZlcy4nKTtcbiAgfVxufTtcblxuLyoqXG4gKiBFeGVjdXRlIGEgZnVuY3Rpb24gd2hpbGUgcHJldmVudGluZyB0aGF0IGZ1bmN0aW9uIGZyb21cbiAqIHRyaWdnZXJpbmcgdXBkYXRlcyBvbiB0aGlzIGRpcmVjdGl2ZSBpbnN0YW5jZS5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICovXG5cbkRpcmVjdGl2ZS5wcm90b3R5cGUuX3dpdGhMb2NrID0gZnVuY3Rpb24gKGZuKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgc2VsZi5fbG9ja2VkID0gdHJ1ZTtcbiAgZm4uY2FsbChzZWxmKTtcbiAgbmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgIHNlbGYuX2xvY2tlZCA9IGZhbHNlO1xuICB9KTtcbn07XG5cbi8qKlxuICogQ29udmVuaWVuY2UgbWV0aG9kIHRoYXQgYXR0YWNoZXMgYSBET00gZXZlbnQgbGlzdGVuZXJcbiAqIHRvIHRoZSBkaXJlY3RpdmUgZWxlbWVudCBhbmQgYXV0b21ldGljYWxseSB0ZWFycyBpdCBkb3duXG4gKiBkdXJpbmcgdW5iaW5kLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlclxuICogQHBhcmFtIHtCb29sZWFufSBbdXNlQ2FwdHVyZV1cbiAqL1xuXG5EaXJlY3RpdmUucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKGV2ZW50LCBoYW5kbGVyLCB1c2VDYXB0dXJlKSB7XG4gIG9uKHRoaXMuZWwsIGV2ZW50LCBoYW5kbGVyLCB1c2VDYXB0dXJlKTsodGhpcy5fbGlzdGVuZXJzIHx8ICh0aGlzLl9saXN0ZW5lcnMgPSBbXSkpLnB1c2goW2V2ZW50LCBoYW5kbGVyXSk7XG59O1xuXG4vKipcbiAqIFRlYXJkb3duIHRoZSB3YXRjaGVyIGFuZCBjYWxsIHVuYmluZC5cbiAqL1xuXG5EaXJlY3RpdmUucHJvdG90eXBlLl90ZWFyZG93biA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuX2JvdW5kKSB7XG4gICAgdGhpcy5fYm91bmQgPSBmYWxzZTtcbiAgICBpZiAodGhpcy51bmJpbmQpIHtcbiAgICAgIHRoaXMudW5iaW5kKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl93YXRjaGVyKSB7XG4gICAgICB0aGlzLl93YXRjaGVyLnRlYXJkb3duKCk7XG4gICAgfVxuICAgIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnM7XG4gICAgdmFyIGk7XG4gICAgaWYgKGxpc3RlbmVycykge1xuICAgICAgaSA9IGxpc3RlbmVycy5sZW5ndGg7XG4gICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIG9mZih0aGlzLmVsLCBsaXN0ZW5lcnNbaV1bMF0sIGxpc3RlbmVyc1tpXVsxXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciB1bndhdGNoRm5zID0gdGhpcy5fcGFyYW1VbndhdGNoRm5zO1xuICAgIGlmICh1bndhdGNoRm5zKSB7XG4gICAgICBpID0gdW53YXRjaEZucy5sZW5ndGg7XG4gICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIHVud2F0Y2hGbnNbaV0oKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdGhpcy5lbCkge1xuICAgICAgdGhpcy5lbC5fdnVlX2RpcmVjdGl2ZXMuJHJlbW92ZSh0aGlzKTtcbiAgICB9XG4gICAgdGhpcy52bSA9IHRoaXMuZWwgPSB0aGlzLl93YXRjaGVyID0gdGhpcy5fbGlzdGVuZXJzID0gbnVsbDtcbiAgfVxufTtcblxuZnVuY3Rpb24gbGlmZWN5Y2xlTWl4aW4gKFZ1ZSkge1xuICAvKipcbiAgICogVXBkYXRlIHYtcmVmIGZvciBjb21wb25lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gcmVtb3ZlXG4gICAqL1xuXG4gIFZ1ZS5wcm90b3R5cGUuX3VwZGF0ZVJlZiA9IGZ1bmN0aW9uIChyZW1vdmUpIHtcbiAgICB2YXIgcmVmID0gdGhpcy4kb3B0aW9ucy5fcmVmO1xuICAgIGlmIChyZWYpIHtcbiAgICAgIHZhciByZWZzID0gKHRoaXMuX3Njb3BlIHx8IHRoaXMuX2NvbnRleHQpLiRyZWZzO1xuICAgICAgaWYgKHJlbW92ZSkge1xuICAgICAgICBpZiAocmVmc1tyZWZdID09PSB0aGlzKSB7XG4gICAgICAgICAgcmVmc1tyZWZdID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVmc1tyZWZdID0gdGhpcztcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFRyYW5zY2x1ZGUsIGNvbXBpbGUgYW5kIGxpbmsgZWxlbWVudC5cbiAgICpcbiAgICogSWYgYSBwcmUtY29tcGlsZWQgbGlua2VyIGlzIGF2YWlsYWJsZSwgdGhhdCBtZWFucyB0aGVcbiAgICogcGFzc2VkIGluIGVsZW1lbnQgd2lsbCBiZSBwcmUtdHJhbnNjbHVkZWQgYW5kIGNvbXBpbGVkXG4gICAqIGFzIHdlbGwgLSBhbGwgd2UgbmVlZCB0byBkbyBpcyB0byBjYWxsIHRoZSBsaW5rZXIuXG4gICAqXG4gICAqIE90aGVyd2lzZSB3ZSBuZWVkIHRvIGNhbGwgdHJhbnNjbHVkZS9jb21waWxlL2xpbmsgaGVyZS5cbiAgICpcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgKi9cblxuICBWdWUucHJvdG90eXBlLl9jb21waWxlID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB0aGlzLiRvcHRpb25zO1xuXG4gICAgLy8gdHJhbnNjbHVkZSBhbmQgaW5pdCBlbGVtZW50XG4gICAgLy8gdHJhbnNjbHVkZSBjYW4gcG90ZW50aWFsbHkgcmVwbGFjZSBvcmlnaW5hbFxuICAgIC8vIHNvIHdlIG5lZWQgdG8ga2VlcCByZWZlcmVuY2U7IHRoaXMgc3RlcCBhbHNvIGluamVjdHNcbiAgICAvLyB0aGUgdGVtcGxhdGUgYW5kIGNhY2hlcyB0aGUgb3JpZ2luYWwgYXR0cmlidXRlc1xuICAgIC8vIG9uIHRoZSBjb250YWluZXIgbm9kZSBhbmQgcmVwbGFjZXIgbm9kZS5cbiAgICB2YXIgb3JpZ2luYWwgPSBlbDtcbiAgICBlbCA9IHRyYW5zY2x1ZGUoZWwsIG9wdGlvbnMpO1xuICAgIHRoaXMuX2luaXRFbGVtZW50KGVsKTtcblxuICAgIC8vIGhhbmRsZSB2LXByZSBvbiByb290IG5vZGUgKCMyMDI2KVxuICAgIGlmIChlbC5ub2RlVHlwZSA9PT0gMSAmJiBnZXRBdHRyKGVsLCAndi1wcmUnKSAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHJvb3QgaXMgYWx3YXlzIGNvbXBpbGVkIHBlci1pbnN0YW5jZSwgYmVjYXVzZVxuICAgIC8vIGNvbnRhaW5lciBhdHRycyBhbmQgcHJvcHMgY2FuIGJlIGRpZmZlcmVudCBldmVyeSB0aW1lLlxuICAgIHZhciBjb250ZXh0T3B0aW9ucyA9IHRoaXMuX2NvbnRleHQgJiYgdGhpcy5fY29udGV4dC4kb3B0aW9ucztcbiAgICB2YXIgcm9vdExpbmtlciA9IGNvbXBpbGVSb290KGVsLCBvcHRpb25zLCBjb250ZXh0T3B0aW9ucyk7XG5cbiAgICAvLyByZXNvbHZlIHNsb3QgZGlzdHJpYnV0aW9uXG4gICAgcmVzb2x2ZVNsb3RzKHRoaXMsIG9wdGlvbnMuX2NvbnRlbnQpO1xuXG4gICAgLy8gY29tcGlsZSBhbmQgbGluayB0aGUgcmVzdFxuICAgIHZhciBjb250ZW50TGlua0ZuO1xuICAgIHZhciBjdG9yID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAvLyBjb21wb25lbnQgY29tcGlsYXRpb24gY2FuIGJlIGNhY2hlZFxuICAgIC8vIGFzIGxvbmcgYXMgaXQncyBub3QgdXNpbmcgaW5saW5lLXRlbXBsYXRlXG4gICAgaWYgKG9wdGlvbnMuX2xpbmtlckNhY2hhYmxlKSB7XG4gICAgICBjb250ZW50TGlua0ZuID0gY3Rvci5saW5rZXI7XG4gICAgICBpZiAoIWNvbnRlbnRMaW5rRm4pIHtcbiAgICAgICAgY29udGVudExpbmtGbiA9IGN0b3IubGlua2VyID0gY29tcGlsZShlbCwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gbGluayBwaGFzZVxuICAgIC8vIG1ha2Ugc3VyZSB0byBsaW5rIHJvb3Qgd2l0aCBwcm9wIHNjb3BlIVxuICAgIHZhciByb290VW5saW5rRm4gPSByb290TGlua2VyKHRoaXMsIGVsLCB0aGlzLl9zY29wZSk7XG4gICAgdmFyIGNvbnRlbnRVbmxpbmtGbiA9IGNvbnRlbnRMaW5rRm4gPyBjb250ZW50TGlua0ZuKHRoaXMsIGVsKSA6IGNvbXBpbGUoZWwsIG9wdGlvbnMpKHRoaXMsIGVsKTtcblxuICAgIC8vIHJlZ2lzdGVyIGNvbXBvc2l0ZSB1bmxpbmsgZnVuY3Rpb25cbiAgICAvLyB0byBiZSBjYWxsZWQgZHVyaW5nIGluc3RhbmNlIGRlc3RydWN0aW9uXG4gICAgdGhpcy5fdW5saW5rRm4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByb290VW5saW5rRm4oKTtcbiAgICAgIC8vIHBhc3NpbmcgZGVzdHJveWluZzogdHJ1ZSB0byBhdm9pZCBzZWFyY2hpbmcgYW5kXG4gICAgICAvLyBzcGxpY2luZyB0aGUgZGlyZWN0aXZlc1xuICAgICAgY29udGVudFVubGlua0ZuKHRydWUpO1xuICAgIH07XG5cbiAgICAvLyBmaW5hbGx5IHJlcGxhY2Ugb3JpZ2luYWxcbiAgICBpZiAob3B0aW9ucy5yZXBsYWNlKSB7XG4gICAgICByZXBsYWNlKG9yaWdpbmFsLCBlbCk7XG4gICAgfVxuXG4gICAgdGhpcy5faXNDb21waWxlZCA9IHRydWU7XG4gICAgdGhpcy5fY2FsbEhvb2soJ2NvbXBpbGVkJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgaW5zdGFuY2UgZWxlbWVudC4gQ2FsbGVkIGluIHRoZSBwdWJsaWNcbiAgICogJG1vdW50KCkgbWV0aG9kLlxuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqL1xuXG4gIFZ1ZS5wcm90b3R5cGUuX2luaXRFbGVtZW50ID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgaWYgKGlzRnJhZ21lbnQoZWwpKSB7XG4gICAgICB0aGlzLl9pc0ZyYWdtZW50ID0gdHJ1ZTtcbiAgICAgIHRoaXMuJGVsID0gdGhpcy5fZnJhZ21lbnRTdGFydCA9IGVsLmZpcnN0Q2hpbGQ7XG4gICAgICB0aGlzLl9mcmFnbWVudEVuZCA9IGVsLmxhc3RDaGlsZDtcbiAgICAgIC8vIHNldCBwZXJzaXN0ZWQgdGV4dCBhbmNob3JzIHRvIGVtcHR5XG4gICAgICBpZiAodGhpcy5fZnJhZ21lbnRTdGFydC5ub2RlVHlwZSA9PT0gMykge1xuICAgICAgICB0aGlzLl9mcmFnbWVudFN0YXJ0LmRhdGEgPSB0aGlzLl9mcmFnbWVudEVuZC5kYXRhID0gJyc7XG4gICAgICB9XG4gICAgICB0aGlzLl9mcmFnbWVudCA9IGVsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiRlbCA9IGVsO1xuICAgIH1cbiAgICB0aGlzLiRlbC5fX3Z1ZV9fID0gdGhpcztcbiAgICB0aGlzLl9jYWxsSG9vaygnYmVmb3JlQ29tcGlsZScpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW5kIGJpbmQgYSBkaXJlY3RpdmUgdG8gYW4gZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGRlc2NyaXB0b3IgLSBwYXJzZWQgZGlyZWN0aXZlIGRlc2NyaXB0b3JcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlICAgLSB0YXJnZXQgbm9kZVxuICAgKiBAcGFyYW0ge1Z1ZX0gW2hvc3RdIC0gdHJhbnNjbHVzaW9uIGhvc3QgY29tcG9uZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbc2NvcGVdIC0gdi1mb3Igc2NvcGVcbiAgICogQHBhcmFtIHtGcmFnbWVudH0gW2ZyYWddIC0gb3duZXIgZnJhZ21lbnRcbiAgICovXG5cbiAgVnVlLnByb3RvdHlwZS5fYmluZERpciA9IGZ1bmN0aW9uIChkZXNjcmlwdG9yLCBub2RlLCBob3N0LCBzY29wZSwgZnJhZykge1xuICAgIHRoaXMuX2RpcmVjdGl2ZXMucHVzaChuZXcgRGlyZWN0aXZlKGRlc2NyaXB0b3IsIHRoaXMsIG5vZGUsIGhvc3QsIHNjb3BlLCBmcmFnKSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRlYXJkb3duIGFuIGluc3RhbmNlLCB1bm9ic2VydmVzIHRoZSBkYXRhLCB1bmJpbmQgYWxsIHRoZVxuICAgKiBkaXJlY3RpdmVzLCB0dXJuIG9mZiBhbGwgdGhlIGV2ZW50IGxpc3RlbmVycywgZXRjLlxuICAgKlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHJlbW92ZSAtIHdoZXRoZXIgdG8gcmVtb3ZlIHRoZSBET00gbm9kZS5cbiAgICogQHBhcmFtIHtCb29sZWFufSBkZWZlckNsZWFudXAgLSBpZiB0cnVlLCBkZWZlciBjbGVhbnVwIHRvXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmUgY2FsbGVkIGxhdGVyXG4gICAqL1xuXG4gIFZ1ZS5wcm90b3R5cGUuX2Rlc3Ryb3kgPSBmdW5jdGlvbiAocmVtb3ZlLCBkZWZlckNsZWFudXApIHtcbiAgICBpZiAodGhpcy5faXNCZWluZ0Rlc3Ryb3llZCkge1xuICAgICAgaWYgKCFkZWZlckNsZWFudXApIHtcbiAgICAgICAgdGhpcy5fY2xlYW51cCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBkZXN0cm95UmVhZHk7XG4gICAgdmFyIHBlbmRpbmdSZW1vdmFsO1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIC8vIENsZWFudXAgc2hvdWxkIGJlIGNhbGxlZCBlaXRoZXIgc3luY2hyb25vdXNseSBvciBhc3luY2hyb25veXNseSBhc1xuICAgIC8vIGNhbGxiYWNrIG9mIHRoaXMuJHJlbW92ZSgpLCBvciBpZiByZW1vdmUgYW5kIGRlZmVyQ2xlYW51cCBhcmUgZmFsc2UuXG4gICAgLy8gSW4gYW55IGNhc2UgaXQgc2hvdWxkIGJlIGNhbGxlZCBhZnRlciBhbGwgb3RoZXIgcmVtb3ZpbmcsIHVuYmluZGluZyBhbmRcbiAgICAvLyB0dXJuaW5nIG9mIGlzIGRvbmVcbiAgICB2YXIgY2xlYW51cElmUG9zc2libGUgPSBmdW5jdGlvbiBjbGVhbnVwSWZQb3NzaWJsZSgpIHtcbiAgICAgIGlmIChkZXN0cm95UmVhZHkgJiYgIXBlbmRpbmdSZW1vdmFsICYmICFkZWZlckNsZWFudXApIHtcbiAgICAgICAgc2VsZi5fY2xlYW51cCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyByZW1vdmUgRE9NIGVsZW1lbnRcbiAgICBpZiAocmVtb3ZlICYmIHRoaXMuJGVsKSB7XG4gICAgICBwZW5kaW5nUmVtb3ZhbCA9IHRydWU7XG4gICAgICB0aGlzLiRyZW1vdmUoZnVuY3Rpb24gKCkge1xuICAgICAgICBwZW5kaW5nUmVtb3ZhbCA9IGZhbHNlO1xuICAgICAgICBjbGVhbnVwSWZQb3NzaWJsZSgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5fY2FsbEhvb2soJ2JlZm9yZURlc3Ryb3knKTtcbiAgICB0aGlzLl9pc0JlaW5nRGVzdHJveWVkID0gdHJ1ZTtcbiAgICB2YXIgaTtcbiAgICAvLyByZW1vdmUgc2VsZiBmcm9tIHBhcmVudC4gb25seSBuZWNlc3NhcnlcbiAgICAvLyBpZiBwYXJlbnQgaXMgbm90IGJlaW5nIGRlc3Ryb3llZCBhcyB3ZWxsLlxuICAgIHZhciBwYXJlbnQgPSB0aGlzLiRwYXJlbnQ7XG4gICAgaWYgKHBhcmVudCAmJiAhcGFyZW50Ll9pc0JlaW5nRGVzdHJveWVkKSB7XG4gICAgICBwYXJlbnQuJGNoaWxkcmVuLiRyZW1vdmUodGhpcyk7XG4gICAgICAvLyB1bnJlZ2lzdGVyIHJlZiAocmVtb3ZlOiB0cnVlKVxuICAgICAgdGhpcy5fdXBkYXRlUmVmKHRydWUpO1xuICAgIH1cbiAgICAvLyBkZXN0cm95IGFsbCBjaGlsZHJlbi5cbiAgICBpID0gdGhpcy4kY2hpbGRyZW4ubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHRoaXMuJGNoaWxkcmVuW2ldLiRkZXN0cm95KCk7XG4gICAgfVxuICAgIC8vIHRlYXJkb3duIHByb3BzXG4gICAgaWYgKHRoaXMuX3Byb3BzVW5saW5rRm4pIHtcbiAgICAgIHRoaXMuX3Byb3BzVW5saW5rRm4oKTtcbiAgICB9XG4gICAgLy8gdGVhcmRvd24gYWxsIGRpcmVjdGl2ZXMuIHRoaXMgYWxzbyB0ZWFyc2Rvd24gYWxsXG4gICAgLy8gZGlyZWN0aXZlLW93bmVkIHdhdGNoZXJzLlxuICAgIGlmICh0aGlzLl91bmxpbmtGbikge1xuICAgICAgdGhpcy5fdW5saW5rRm4oKTtcbiAgICB9XG4gICAgaSA9IHRoaXMuX3dhdGNoZXJzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB0aGlzLl93YXRjaGVyc1tpXS50ZWFyZG93bigpO1xuICAgIH1cbiAgICAvLyByZW1vdmUgcmVmZXJlbmNlIHRvIHNlbGYgb24gJGVsXG4gICAgaWYgKHRoaXMuJGVsKSB7XG4gICAgICB0aGlzLiRlbC5fX3Z1ZV9fID0gbnVsbDtcbiAgICB9XG5cbiAgICBkZXN0cm95UmVhZHkgPSB0cnVlO1xuICAgIGNsZWFudXBJZlBvc3NpYmxlKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENsZWFuIHVwIHRvIGVuc3VyZSBnYXJiYWdlIGNvbGxlY3Rpb24uXG4gICAqIFRoaXMgaXMgY2FsbGVkIGFmdGVyIHRoZSBsZWF2ZSB0cmFuc2l0aW9uIGlmIHRoZXJlXG4gICAqIGlzIGFueS5cbiAgICovXG5cbiAgVnVlLnByb3RvdHlwZS5fY2xlYW51cCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gcmVtb3ZlIHNlbGYgZnJvbSBvd25lciBmcmFnbWVudFxuICAgIC8vIGRvIGl0IGluIGNsZWFudXAgc28gdGhhdCB3ZSBjYW4gY2FsbCAkZGVzdHJveSB3aXRoXG4gICAgLy8gZGVmZXIgcmlnaHQgd2hlbiBhIGZyYWdtZW50IGlzIGFib3V0IHRvIGJlIHJlbW92ZWQuXG4gICAgaWYgKHRoaXMuX2ZyYWcpIHtcbiAgICAgIHRoaXMuX2ZyYWcuY2hpbGRyZW4uJHJlbW92ZSh0aGlzKTtcbiAgICB9XG4gICAgLy8gcmVtb3ZlIHJlZmVyZW5jZSBmcm9tIGRhdGEgb2JcbiAgICAvLyBmcm96ZW4gb2JqZWN0IG1heSBub3QgaGF2ZSBvYnNlcnZlci5cbiAgICBpZiAodGhpcy5fZGF0YSAmJiB0aGlzLl9kYXRhLl9fb2JfXykge1xuICAgICAgdGhpcy5fZGF0YS5fX29iX18ucmVtb3ZlVm0odGhpcyk7XG4gICAgfVxuICAgIC8vIENsZWFuIHVwIHJlZmVyZW5jZXMgdG8gcHJpdmF0ZSBwcm9wZXJ0aWVzIGFuZCBvdGhlclxuICAgIC8vIGluc3RhbmNlcy4gcHJlc2VydmUgcmVmZXJlbmNlIHRvIF9kYXRhIHNvIHRoYXQgcHJveHlcbiAgICAvLyBhY2Nlc3NvcnMgc3RpbGwgd29yay4gVGhlIG9ubHkgcG90ZW50aWFsIHNpZGUgZWZmZWN0XG4gICAgLy8gaGVyZSBpcyB0aGF0IG11dGF0aW5nIHRoZSBpbnN0YW5jZSBhZnRlciBpdCdzIGRlc3Ryb3llZFxuICAgIC8vIG1heSBhZmZlY3QgdGhlIHN0YXRlIG9mIG90aGVyIGNvbXBvbmVudHMgdGhhdCBhcmUgc3RpbGxcbiAgICAvLyBvYnNlcnZpbmcgdGhlIHNhbWUgb2JqZWN0LCBidXQgdGhhdCBzZWVtcyB0byBiZSBhXG4gICAgLy8gcmVhc29uYWJsZSByZXNwb25zaWJpbGl0eSBmb3IgdGhlIHVzZXIgcmF0aGVyIHRoYW5cbiAgICAvLyBhbHdheXMgdGhyb3dpbmcgYW4gZXJyb3Igb24gdGhlbS5cbiAgICB0aGlzLiRlbCA9IHRoaXMuJHBhcmVudCA9IHRoaXMuJHJvb3QgPSB0aGlzLiRjaGlsZHJlbiA9IHRoaXMuX3dhdGNoZXJzID0gdGhpcy5fY29udGV4dCA9IHRoaXMuX3Njb3BlID0gdGhpcy5fZGlyZWN0aXZlcyA9IG51bGw7XG4gICAgLy8gY2FsbCB0aGUgbGFzdCBob29rLi4uXG4gICAgdGhpcy5faXNEZXN0cm95ZWQgPSB0cnVlO1xuICAgIHRoaXMuX2NhbGxIb29rKCdkZXN0cm95ZWQnKTtcbiAgICAvLyB0dXJuIG9mZiBhbGwgaW5zdGFuY2UgbGlzdGVuZXJzLlxuICAgIHRoaXMuJG9mZigpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBtaXNjTWl4aW4gKFZ1ZSkge1xuICAvKipcbiAgICogQXBwbHkgYSBsaXN0IG9mIGZpbHRlciAoZGVzY3JpcHRvcnMpIHRvIGEgdmFsdWUuXG4gICAqIFVzaW5nIHBsYWluIGZvciBsb29wcyBoZXJlIGJlY2F1c2UgdGhpcyB3aWxsIGJlIGNhbGxlZCBpblxuICAgKiB0aGUgZ2V0dGVyIG9mIGFueSB3YXRjaGVyIHdpdGggZmlsdGVycyBzbyBpdCBpcyB2ZXJ5XG4gICAqIHBlcmZvcm1hbmNlIHNlbnNpdGl2ZS5cbiAgICpcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0geyp9IFtvbGRWYWx1ZV1cbiAgICogQHBhcmFtIHtBcnJheX0gZmlsdGVyc1xuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHdyaXRlXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuXG4gIFZ1ZS5wcm90b3R5cGUuX2FwcGx5RmlsdGVycyA9IGZ1bmN0aW9uICh2YWx1ZSwgb2xkVmFsdWUsIGZpbHRlcnMsIHdyaXRlKSB7XG4gICAgdmFyIGZpbHRlciwgZm4sIGFyZ3MsIGFyZywgb2Zmc2V0LCBpLCBsLCBqLCBrO1xuICAgIGZvciAoaSA9IDAsIGwgPSBmaWx0ZXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZmlsdGVyID0gZmlsdGVyc1t3cml0ZSA/IGwgLSBpIC0gMSA6IGldO1xuICAgICAgZm4gPSByZXNvbHZlQXNzZXQodGhpcy4kb3B0aW9ucywgJ2ZpbHRlcnMnLCBmaWx0ZXIubmFtZSwgdHJ1ZSk7XG4gICAgICBpZiAoIWZuKSBjb250aW51ZTtcbiAgICAgIGZuID0gd3JpdGUgPyBmbi53cml0ZSA6IGZuLnJlYWQgfHwgZm47XG4gICAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSBjb250aW51ZTtcbiAgICAgIGFyZ3MgPSB3cml0ZSA/IFt2YWx1ZSwgb2xkVmFsdWVdIDogW3ZhbHVlXTtcbiAgICAgIG9mZnNldCA9IHdyaXRlID8gMiA6IDE7XG4gICAgICBpZiAoZmlsdGVyLmFyZ3MpIHtcbiAgICAgICAgZm9yIChqID0gMCwgayA9IGZpbHRlci5hcmdzLmxlbmd0aDsgaiA8IGs7IGorKykge1xuICAgICAgICAgIGFyZyA9IGZpbHRlci5hcmdzW2pdO1xuICAgICAgICAgIGFyZ3NbaiArIG9mZnNldF0gPSBhcmcuZHluYW1pYyA/IHRoaXMuJGdldChhcmcudmFsdWUpIDogYXJnLnZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YWx1ZSA9IGZuLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlc29sdmUgYSBjb21wb25lbnQsIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBjb21wb25lbnRcbiAgICogaXMgZGVmaW5lZCBub3JtYWxseSBvciB1c2luZyBhbiBhc3luYyBmYWN0b3J5IGZ1bmN0aW9uLlxuICAgKiBSZXNvbHZlcyBzeW5jaHJvbm91c2x5IGlmIGFscmVhZHkgcmVzb2x2ZWQsIG90aGVyd2lzZVxuICAgKiByZXNvbHZlcyBhc3luY2hyb25vdXNseSBhbmQgY2FjaGVzIHRoZSByZXNvbHZlZFxuICAgKiBjb25zdHJ1Y3RvciBvbiB0aGUgZmFjdG9yeS5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd8RnVuY3Rpb259IHZhbHVlXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gICAqL1xuXG4gIFZ1ZS5wcm90b3R5cGUuX3Jlc29sdmVDb21wb25lbnQgPSBmdW5jdGlvbiAodmFsdWUsIGNiKSB7XG4gICAgdmFyIGZhY3Rvcnk7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZmFjdG9yeSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBmYWN0b3J5ID0gcmVzb2x2ZUFzc2V0KHRoaXMuJG9wdGlvbnMsICdjb21wb25lbnRzJywgdmFsdWUsIHRydWUpO1xuICAgIH1cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIWZhY3RvcnkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gYXN5bmMgY29tcG9uZW50IGZhY3RvcnlcbiAgICBpZiAoIWZhY3Rvcnkub3B0aW9ucykge1xuICAgICAgaWYgKGZhY3RvcnkucmVzb2x2ZWQpIHtcbiAgICAgICAgLy8gY2FjaGVkXG4gICAgICAgIGNiKGZhY3RvcnkucmVzb2x2ZWQpO1xuICAgICAgfSBlbHNlIGlmIChmYWN0b3J5LnJlcXVlc3RlZCkge1xuICAgICAgICAvLyBwb29sIGNhbGxiYWNrc1xuICAgICAgICBmYWN0b3J5LnBlbmRpbmdDYWxsYmFja3MucHVzaChjYik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmYWN0b3J5LnJlcXVlc3RlZCA9IHRydWU7XG4gICAgICAgIHZhciBjYnMgPSBmYWN0b3J5LnBlbmRpbmdDYWxsYmFja3MgPSBbY2JdO1xuICAgICAgICBmYWN0b3J5LmNhbGwodGhpcywgZnVuY3Rpb24gcmVzb2x2ZShyZXMpIHtcbiAgICAgICAgICBpZiAoaXNQbGFpbk9iamVjdChyZXMpKSB7XG4gICAgICAgICAgICByZXMgPSBWdWUuZXh0ZW5kKHJlcyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGNhY2hlIHJlc29sdmVkXG4gICAgICAgICAgZmFjdG9yeS5yZXNvbHZlZCA9IHJlcztcbiAgICAgICAgICAvLyBpbnZva2UgY2FsbGJhY2tzXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBjYnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBjYnNbaV0ocmVzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGZ1bmN0aW9uIHJlamVjdChyZWFzb24pIHtcbiAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oJ0ZhaWxlZCB0byByZXNvbHZlIGFzeW5jIGNvbXBvbmVudCcgKyAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/ICc6ICcgKyB2YWx1ZSA6ICcnKSArICcuICcgKyAocmVhc29uID8gJ1xcblJlYXNvbjogJyArIHJlYXNvbiA6ICcnKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBub3JtYWwgY29tcG9uZW50XG4gICAgICBjYihmYWN0b3J5KTtcbiAgICB9XG4gIH07XG59XG5cbnZhciBmaWx0ZXJSRSQxID0gL1tefF1cXHxbXnxdLztcblxuZnVuY3Rpb24gZGF0YUFQSSAoVnVlKSB7XG4gIC8qKlxuICAgKiBHZXQgdGhlIHZhbHVlIGZyb20gYW4gZXhwcmVzc2lvbiBvbiB0aGlzIHZtLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXhwXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2FzU3RhdGVtZW50XVxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cblxuICBWdWUucHJvdG90eXBlLiRnZXQgPSBmdW5jdGlvbiAoZXhwLCBhc1N0YXRlbWVudCkge1xuICAgIHZhciByZXMgPSBwYXJzZUV4cHJlc3Npb24oZXhwKTtcbiAgICBpZiAocmVzKSB7XG4gICAgICBpZiAoYXNTdGF0ZW1lbnQpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gc3RhdGVtZW50SGFuZGxlcigpIHtcbiAgICAgICAgICBzZWxmLiRhcmd1bWVudHMgPSB0b0FycmF5KGFyZ3VtZW50cyk7XG4gICAgICAgICAgdmFyIHJlc3VsdCA9IHJlcy5nZXQuY2FsbChzZWxmLCBzZWxmKTtcbiAgICAgICAgICBzZWxmLiRhcmd1bWVudHMgPSBudWxsO1xuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiByZXMuZ2V0LmNhbGwodGhpcywgdGhpcyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHZhbHVlIGZyb20gYW4gZXhwcmVzc2lvbiBvbiB0aGlzIHZtLlxuICAgKiBUaGUgZXhwcmVzc2lvbiBtdXN0IGJlIGEgdmFsaWQgbGVmdC1oYW5kXG4gICAqIGV4cHJlc3Npb24gaW4gYW4gYXNzaWdubWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGV4cFxuICAgKiBAcGFyYW0geyp9IHZhbFxuICAgKi9cblxuICBWdWUucHJvdG90eXBlLiRzZXQgPSBmdW5jdGlvbiAoZXhwLCB2YWwpIHtcbiAgICB2YXIgcmVzID0gcGFyc2VFeHByZXNzaW9uKGV4cCwgdHJ1ZSk7XG4gICAgaWYgKHJlcyAmJiByZXMuc2V0KSB7XG4gICAgICByZXMuc2V0LmNhbGwodGhpcywgdGhpcywgdmFsKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBhIHByb3BlcnR5IG9uIHRoZSBWTVxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gICAqL1xuXG4gIFZ1ZS5wcm90b3R5cGUuJGRlbGV0ZSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICBkZWwodGhpcy5fZGF0YSwga2V5KTtcbiAgfTtcblxuICAvKipcbiAgICogV2F0Y2ggYW4gZXhwcmVzc2lvbiwgdHJpZ2dlciBjYWxsYmFjayB3aGVuIGl0c1xuICAgKiB2YWx1ZSBjaGFuZ2VzLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ3xGdW5jdGlvbn0gZXhwT3JGblxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqICAgICAgICAgICAgICAgICAtIHtCb29sZWFufSBkZWVwXG4gICAqICAgICAgICAgICAgICAgICAtIHtCb29sZWFufSBpbW1lZGlhdGVcbiAgICogQHJldHVybiB7RnVuY3Rpb259IC0gdW53YXRjaEZuXG4gICAqL1xuXG4gIFZ1ZS5wcm90b3R5cGUuJHdhdGNoID0gZnVuY3Rpb24gKGV4cE9yRm4sIGNiLCBvcHRpb25zKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICB2YXIgcGFyc2VkO1xuICAgIGlmICh0eXBlb2YgZXhwT3JGbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBhcnNlZCA9IHBhcnNlRGlyZWN0aXZlKGV4cE9yRm4pO1xuICAgICAgZXhwT3JGbiA9IHBhcnNlZC5leHByZXNzaW9uO1xuICAgIH1cbiAgICB2YXIgd2F0Y2hlciA9IG5ldyBXYXRjaGVyKHZtLCBleHBPckZuLCBjYiwge1xuICAgICAgZGVlcDogb3B0aW9ucyAmJiBvcHRpb25zLmRlZXAsXG4gICAgICBzeW5jOiBvcHRpb25zICYmIG9wdGlvbnMuc3luYyxcbiAgICAgIGZpbHRlcnM6IHBhcnNlZCAmJiBwYXJzZWQuZmlsdGVycyxcbiAgICAgIHVzZXI6ICFvcHRpb25zIHx8IG9wdGlvbnMudXNlciAhPT0gZmFsc2VcbiAgICB9KTtcbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmltbWVkaWF0ZSkge1xuICAgICAgY2IuY2FsbCh2bSwgd2F0Y2hlci52YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiB1bndhdGNoRm4oKSB7XG4gICAgICB3YXRjaGVyLnRlYXJkb3duKCk7XG4gICAgfTtcbiAgfTtcblxuICAvKipcbiAgICogRXZhbHVhdGUgYSB0ZXh0IGRpcmVjdGl2ZSwgaW5jbHVkaW5nIGZpbHRlcnMuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0XG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2FzU3RhdGVtZW50XVxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuXG4gIFZ1ZS5wcm90b3R5cGUuJGV2YWwgPSBmdW5jdGlvbiAodGV4dCwgYXNTdGF0ZW1lbnQpIHtcbiAgICAvLyBjaGVjayBmb3IgZmlsdGVycy5cbiAgICBpZiAoZmlsdGVyUkUkMS50ZXN0KHRleHQpKSB7XG4gICAgICB2YXIgZGlyID0gcGFyc2VEaXJlY3RpdmUodGV4dCk7XG4gICAgICAvLyB0aGUgZmlsdGVyIHJlZ2V4IGNoZWNrIG1pZ2h0IGdpdmUgZmFsc2UgcG9zaXRpdmVcbiAgICAgIC8vIGZvciBwaXBlcyBpbnNpZGUgc3RyaW5ncywgc28gaXQncyBwb3NzaWJsZSB0aGF0XG4gICAgICAvLyB3ZSBkb24ndCBnZXQgYW55IGZpbHRlcnMgaGVyZVxuICAgICAgdmFyIHZhbCA9IHRoaXMuJGdldChkaXIuZXhwcmVzc2lvbiwgYXNTdGF0ZW1lbnQpO1xuICAgICAgcmV0dXJuIGRpci5maWx0ZXJzID8gdGhpcy5fYXBwbHlGaWx0ZXJzKHZhbCwgbnVsbCwgZGlyLmZpbHRlcnMpIDogdmFsO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBubyBmaWx0ZXJcbiAgICAgIHJldHVybiB0aGlzLiRnZXQodGV4dCwgYXNTdGF0ZW1lbnQpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogSW50ZXJwb2xhdGUgYSBwaWVjZSBvZiB0ZW1wbGF0ZSB0ZXh0LlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gdGV4dFxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuXG4gIFZ1ZS5wcm90b3R5cGUuJGludGVycG9sYXRlID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgICB2YXIgdG9rZW5zID0gcGFyc2VUZXh0KHRleHQpO1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgaWYgKHRva2Vucykge1xuICAgICAgaWYgKHRva2Vucy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIHZtLiRldmFsKHRva2Vuc1swXS52YWx1ZSkgKyAnJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICAgIHJldHVybiB0b2tlbi50YWcgPyB2bS4kZXZhbCh0b2tlbi52YWx1ZSkgOiB0b2tlbi52YWx1ZTtcbiAgICAgICAgfSkuam9pbignJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogTG9nIGluc3RhbmNlIGRhdGEgYXMgYSBwbGFpbiBKUyBvYmplY3RcbiAgICogc28gdGhhdCBpdCBpcyBlYXNpZXIgdG8gaW5zcGVjdCBpbiBjb25zb2xlLlxuICAgKiBUaGlzIG1ldGhvZCBhc3N1bWVzIGNvbnNvbGUgaXMgYXZhaWxhYmxlLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gW3BhdGhdXG4gICAqL1xuXG4gIFZ1ZS5wcm90b3R5cGUuJGxvZyA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gICAgdmFyIGRhdGEgPSBwYXRoID8gZ2V0UGF0aCh0aGlzLl9kYXRhLCBwYXRoKSA6IHRoaXMuX2RhdGE7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIGRhdGEgPSBjbGVhbihkYXRhKTtcbiAgICB9XG4gICAgLy8gaW5jbHVkZSBjb21wdXRlZCBmaWVsZHNcbiAgICBpZiAoIXBhdGgpIHtcbiAgICAgIHZhciBrZXk7XG4gICAgICBmb3IgKGtleSBpbiB0aGlzLiRvcHRpb25zLmNvbXB1dGVkKSB7XG4gICAgICAgIGRhdGFba2V5XSA9IGNsZWFuKHRoaXNba2V5XSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fcHJvcHMpIHtcbiAgICAgICAgZm9yIChrZXkgaW4gdGhpcy5fcHJvcHMpIHtcbiAgICAgICAgICBkYXRhW2tleV0gPSBjbGVhbih0aGlzW2tleV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBcImNsZWFuXCIgYSBnZXR0ZXIvc2V0dGVyIGNvbnZlcnRlZCBvYmplY3QgaW50byBhIHBsYWluXG4gICAqIG9iamVjdCBjb3B5LlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gLSBvYmpcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cblxuICBmdW5jdGlvbiBjbGVhbihvYmopIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkb21BUEkgKFZ1ZSkge1xuICAvKipcbiAgICogQ29udmVuaWVuY2Ugb24taW5zdGFuY2UgbmV4dFRpY2suIFRoZSBjYWxsYmFjayBpc1xuICAgKiBhdXRvLWJvdW5kIHRvIHRoZSBpbnN0YW5jZSwgYW5kIHRoaXMgYXZvaWRzIGNvbXBvbmVudFxuICAgKiBtb2R1bGVzIGhhdmluZyB0byByZWx5IG9uIHRoZSBnbG9iYWwgVnVlLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICAgKi9cblxuICBWdWUucHJvdG90eXBlLiRuZXh0VGljayA9IGZ1bmN0aW9uIChmbikge1xuICAgIG5leHRUaWNrKGZuLCB0aGlzKTtcbiAgfTtcblxuICAvKipcbiAgICogQXBwZW5kIGluc3RhbmNlIHRvIHRhcmdldFxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IHRhcmdldFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3dpdGhUcmFuc2l0aW9uXSAtIGRlZmF1bHRzIHRvIHRydWVcbiAgICovXG5cbiAgVnVlLnByb3RvdHlwZS4kYXBwZW5kVG8gPSBmdW5jdGlvbiAodGFyZ2V0LCBjYiwgd2l0aFRyYW5zaXRpb24pIHtcbiAgICByZXR1cm4gaW5zZXJ0KHRoaXMsIHRhcmdldCwgY2IsIHdpdGhUcmFuc2l0aW9uLCBhcHBlbmQsIGFwcGVuZFdpdGhUcmFuc2l0aW9uKTtcbiAgfTtcblxuICAvKipcbiAgICogUHJlcGVuZCBpbnN0YW5jZSB0byB0YXJnZXRcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSB0YXJnZXRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFt3aXRoVHJhbnNpdGlvbl0gLSBkZWZhdWx0cyB0byB0cnVlXG4gICAqL1xuXG4gIFZ1ZS5wcm90b3R5cGUuJHByZXBlbmRUbyA9IGZ1bmN0aW9uICh0YXJnZXQsIGNiLCB3aXRoVHJhbnNpdGlvbikge1xuICAgIHRhcmdldCA9IHF1ZXJ5KHRhcmdldCk7XG4gICAgaWYgKHRhcmdldC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgIHRoaXMuJGJlZm9yZSh0YXJnZXQuZmlyc3RDaGlsZCwgY2IsIHdpdGhUcmFuc2l0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4kYXBwZW5kVG8odGFyZ2V0LCBjYiwgd2l0aFRyYW5zaXRpb24pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogSW5zZXJ0IGluc3RhbmNlIGJlZm9yZSB0YXJnZXRcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSB0YXJnZXRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFt3aXRoVHJhbnNpdGlvbl0gLSBkZWZhdWx0cyB0byB0cnVlXG4gICAqL1xuXG4gIFZ1ZS5wcm90b3R5cGUuJGJlZm9yZSA9IGZ1bmN0aW9uICh0YXJnZXQsIGNiLCB3aXRoVHJhbnNpdGlvbikge1xuICAgIHJldHVybiBpbnNlcnQodGhpcywgdGFyZ2V0LCBjYiwgd2l0aFRyYW5zaXRpb24sIGJlZm9yZVdpdGhDYiwgYmVmb3JlV2l0aFRyYW5zaXRpb24pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbnNlcnQgaW5zdGFuY2UgYWZ0ZXIgdGFyZ2V0XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gdGFyZ2V0XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl1cbiAgICogQHBhcmFtIHtCb29sZWFufSBbd2l0aFRyYW5zaXRpb25dIC0gZGVmYXVsdHMgdG8gdHJ1ZVxuICAgKi9cblxuICBWdWUucHJvdG90eXBlLiRhZnRlciA9IGZ1bmN0aW9uICh0YXJnZXQsIGNiLCB3aXRoVHJhbnNpdGlvbikge1xuICAgIHRhcmdldCA9IHF1ZXJ5KHRhcmdldCk7XG4gICAgaWYgKHRhcmdldC5uZXh0U2libGluZykge1xuICAgICAgdGhpcy4kYmVmb3JlKHRhcmdldC5uZXh0U2libGluZywgY2IsIHdpdGhUcmFuc2l0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4kYXBwZW5kVG8odGFyZ2V0LnBhcmVudE5vZGUsIGNiLCB3aXRoVHJhbnNpdGlvbik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgaW5zdGFuY2UgZnJvbSBET01cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFt3aXRoVHJhbnNpdGlvbl0gLSBkZWZhdWx0cyB0byB0cnVlXG4gICAqL1xuXG4gIFZ1ZS5wcm90b3R5cGUuJHJlbW92ZSA9IGZ1bmN0aW9uIChjYiwgd2l0aFRyYW5zaXRpb24pIHtcbiAgICBpZiAoIXRoaXMuJGVsLnBhcmVudE5vZGUpIHtcbiAgICAgIHJldHVybiBjYiAmJiBjYigpO1xuICAgIH1cbiAgICB2YXIgaW5Eb2N1bWVudCA9IHRoaXMuX2lzQXR0YWNoZWQgJiYgaW5Eb2ModGhpcy4kZWwpO1xuICAgIC8vIGlmIHdlIGFyZSBub3QgaW4gZG9jdW1lbnQsIG5vIG5lZWQgdG8gY2hlY2tcbiAgICAvLyBmb3IgdHJhbnNpdGlvbnNcbiAgICBpZiAoIWluRG9jdW1lbnQpIHdpdGhUcmFuc2l0aW9uID0gZmFsc2U7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciByZWFsQ2IgPSBmdW5jdGlvbiByZWFsQ2IoKSB7XG4gICAgICBpZiAoaW5Eb2N1bWVudCkgc2VsZi5fY2FsbEhvb2soJ2RldGFjaGVkJyk7XG4gICAgICBpZiAoY2IpIGNiKCk7XG4gICAgfTtcbiAgICBpZiAodGhpcy5faXNGcmFnbWVudCkge1xuICAgICAgcmVtb3ZlTm9kZVJhbmdlKHRoaXMuX2ZyYWdtZW50U3RhcnQsIHRoaXMuX2ZyYWdtZW50RW5kLCB0aGlzLCB0aGlzLl9mcmFnbWVudCwgcmVhbENiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG9wID0gd2l0aFRyYW5zaXRpb24gPT09IGZhbHNlID8gcmVtb3ZlV2l0aENiIDogcmVtb3ZlV2l0aFRyYW5zaXRpb247XG4gICAgICBvcCh0aGlzLiRlbCwgdGhpcywgcmVhbENiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNoYXJlZCBET00gaW5zZXJ0aW9uIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge1Z1ZX0gdm1cbiAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFt3aXRoVHJhbnNpdGlvbl1cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gb3AxIC0gb3AgZm9yIG5vbi10cmFuc2l0aW9uIGluc2VydFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBvcDIgLSBvcCBmb3IgdHJhbnNpdGlvbiBpbnNlcnRcbiAgICogQHJldHVybiB2bVxuICAgKi9cblxuICBmdW5jdGlvbiBpbnNlcnQodm0sIHRhcmdldCwgY2IsIHdpdGhUcmFuc2l0aW9uLCBvcDEsIG9wMikge1xuICAgIHRhcmdldCA9IHF1ZXJ5KHRhcmdldCk7XG4gICAgdmFyIHRhcmdldElzRGV0YWNoZWQgPSAhaW5Eb2ModGFyZ2V0KTtcbiAgICB2YXIgb3AgPSB3aXRoVHJhbnNpdGlvbiA9PT0gZmFsc2UgfHwgdGFyZ2V0SXNEZXRhY2hlZCA/IG9wMSA6IG9wMjtcbiAgICB2YXIgc2hvdWxkQ2FsbEhvb2sgPSAhdGFyZ2V0SXNEZXRhY2hlZCAmJiAhdm0uX2lzQXR0YWNoZWQgJiYgIWluRG9jKHZtLiRlbCk7XG4gICAgaWYgKHZtLl9pc0ZyYWdtZW50KSB7XG4gICAgICBtYXBOb2RlUmFuZ2Uodm0uX2ZyYWdtZW50U3RhcnQsIHZtLl9mcmFnbWVudEVuZCwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgb3Aobm9kZSwgdGFyZ2V0LCB2bSk7XG4gICAgICB9KTtcbiAgICAgIGNiICYmIGNiKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wKHZtLiRlbCwgdGFyZ2V0LCB2bSwgY2IpO1xuICAgIH1cbiAgICBpZiAoc2hvdWxkQ2FsbEhvb2spIHtcbiAgICAgIHZtLl9jYWxsSG9vaygnYXR0YWNoZWQnKTtcbiAgICB9XG4gICAgcmV0dXJuIHZtO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGZvciBzZWxlY3RvcnNcbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd8RWxlbWVudH0gZWxcbiAgICovXG5cbiAgZnVuY3Rpb24gcXVlcnkoZWwpIHtcbiAgICByZXR1cm4gdHlwZW9mIGVsID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpIDogZWw7XG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kIG9wZXJhdGlvbiB0aGF0IHRha2VzIGEgY2FsbGJhY2suXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gZWxcbiAgICogQHBhcmFtIHtOb2RlfSB0YXJnZXRcbiAgICogQHBhcmFtIHtWdWV9IHZtIC0gdW51c2VkXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl1cbiAgICovXG5cbiAgZnVuY3Rpb24gYXBwZW5kKGVsLCB0YXJnZXQsIHZtLCBjYikge1xuICAgIHRhcmdldC5hcHBlbmRDaGlsZChlbCk7XG4gICAgaWYgKGNiKSBjYigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluc2VydEJlZm9yZSBvcGVyYXRpb24gdGhhdCB0YWtlcyBhIGNhbGxiYWNrLlxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IGVsXG4gICAqIEBwYXJhbSB7Tm9kZX0gdGFyZ2V0XG4gICAqIEBwYXJhbSB7VnVlfSB2bSAtIHVudXNlZFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGJlZm9yZVdpdGhDYihlbCwgdGFyZ2V0LCB2bSwgY2IpIHtcbiAgICBiZWZvcmUoZWwsIHRhcmdldCk7XG4gICAgaWYgKGNiKSBjYigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBvcGVyYXRpb24gdGhhdCB0YWtlcyBhIGNhbGxiYWNrLlxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IGVsXG4gICAqIEBwYXJhbSB7VnVlfSB2bSAtIHVudXNlZFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHJlbW92ZVdpdGhDYihlbCwgdm0sIGNiKSB7XG4gICAgcmVtb3ZlKGVsKTtcbiAgICBpZiAoY2IpIGNiKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZXZlbnRzQVBJIChWdWUpIHtcbiAgLyoqXG4gICAqIExpc3RlbiBvbiB0aGUgZ2l2ZW4gYGV2ZW50YCB3aXRoIGBmbmAuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICAgKi9cblxuICBWdWUucHJvdG90eXBlLiRvbiA9IGZ1bmN0aW9uIChldmVudCwgZm4pIHtcbiAgICAodGhpcy5fZXZlbnRzW2V2ZW50XSB8fCAodGhpcy5fZXZlbnRzW2V2ZW50XSA9IFtdKSkucHVzaChmbik7XG4gICAgbW9kaWZ5TGlzdGVuZXJDb3VudCh0aGlzLCBldmVudCwgMSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZHMgYW4gYGV2ZW50YCBsaXN0ZW5lciB0aGF0IHdpbGwgYmUgaW52b2tlZCBhIHNpbmdsZVxuICAgKiB0aW1lIHRoZW4gYXV0b21hdGljYWxseSByZW1vdmVkLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAgICovXG5cbiAgVnVlLnByb3RvdHlwZS4kb25jZSA9IGZ1bmN0aW9uIChldmVudCwgZm4pIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgZnVuY3Rpb24gb24oKSB7XG4gICAgICBzZWxmLiRvZmYoZXZlbnQsIG9uKTtcbiAgICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIG9uLmZuID0gZm47XG4gICAgdGhpcy4kb24oZXZlbnQsIG9uKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBnaXZlbiBjYWxsYmFjayBmb3IgYGV2ZW50YCBvciBhbGxcbiAgICogcmVnaXN0ZXJlZCBjYWxsYmFja3MuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICAgKi9cblxuICBWdWUucHJvdG90eXBlLiRvZmYgPSBmdW5jdGlvbiAoZXZlbnQsIGZuKSB7XG4gICAgdmFyIGNicztcbiAgICAvLyBhbGxcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIGlmICh0aGlzLiRwYXJlbnQpIHtcbiAgICAgICAgZm9yIChldmVudCBpbiB0aGlzLl9ldmVudHMpIHtcbiAgICAgICAgICBjYnMgPSB0aGlzLl9ldmVudHNbZXZlbnRdO1xuICAgICAgICAgIGlmIChjYnMpIHtcbiAgICAgICAgICAgIG1vZGlmeUxpc3RlbmVyQ291bnQodGhpcywgZXZlbnQsIC1jYnMubGVuZ3RoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8vIHNwZWNpZmljIGV2ZW50XG4gICAgY2JzID0gdGhpcy5fZXZlbnRzW2V2ZW50XTtcbiAgICBpZiAoIWNicykge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICBtb2RpZnlMaXN0ZW5lckNvdW50KHRoaXMsIGV2ZW50LCAtY2JzLmxlbmd0aCk7XG4gICAgICB0aGlzLl9ldmVudHNbZXZlbnRdID0gbnVsbDtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvLyBzcGVjaWZpYyBoYW5kbGVyXG4gICAgdmFyIGNiO1xuICAgIHZhciBpID0gY2JzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBjYiA9IGNic1tpXTtcbiAgICAgIGlmIChjYiA9PT0gZm4gfHwgY2IuZm4gPT09IGZuKSB7XG4gICAgICAgIG1vZGlmeUxpc3RlbmVyQ291bnQodGhpcywgZXZlbnQsIC0xKTtcbiAgICAgICAgY2JzLnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIGFuIGV2ZW50IG9uIHNlbGYuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gZXZlbnRcbiAgICogQHJldHVybiB7Qm9vbGVhbn0gc2hvdWxkUHJvcGFnYXRlXG4gICAqL1xuXG4gIFZ1ZS5wcm90b3R5cGUuJGVtaXQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgaXNTb3VyY2UgPSB0eXBlb2YgZXZlbnQgPT09ICdzdHJpbmcnO1xuICAgIGV2ZW50ID0gaXNTb3VyY2UgPyBldmVudCA6IGV2ZW50Lm5hbWU7XG4gICAgdmFyIGNicyA9IHRoaXMuX2V2ZW50c1tldmVudF07XG4gICAgdmFyIHNob3VsZFByb3BhZ2F0ZSA9IGlzU291cmNlIHx8ICFjYnM7XG4gICAgaWYgKGNicykge1xuICAgICAgY2JzID0gY2JzLmxlbmd0aCA+IDEgPyB0b0FycmF5KGNicykgOiBjYnM7XG4gICAgICAvLyB0aGlzIGlzIGEgc29tZXdoYXQgaGFja3kgc29sdXRpb24gdG8gdGhlIHF1ZXN0aW9uIHJhaXNlZFxuICAgICAgLy8gaW4gIzIxMDI6IGZvciBhbiBpbmxpbmUgY29tcG9uZW50IGxpc3RlbmVyIGxpa2UgPGNvbXAgQHRlc3Q9XCJkb1RoaXNcIj4sXG4gICAgICAvLyB0aGUgcHJvcGFnYXRpb24gaGFuZGxpbmcgaXMgc29tZXdoYXQgYnJva2VuLiBUaGVyZWZvcmUgd2VcbiAgICAgIC8vIG5lZWQgdG8gdHJlYXQgdGhlc2UgaW5saW5lIGNhbGxiYWNrcyBkaWZmZXJlbnRseS5cbiAgICAgIHZhciBoYXNQYXJlbnRDYnMgPSBpc1NvdXJjZSAmJiBjYnMuc29tZShmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgcmV0dXJuIGNiLl9mcm9tUGFyZW50O1xuICAgICAgfSk7XG4gICAgICBpZiAoaGFzUGFyZW50Q2JzKSB7XG4gICAgICAgIHNob3VsZFByb3BhZ2F0ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgdmFyIGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cywgMSk7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGNicy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdmFyIGNiID0gY2JzW2ldO1xuICAgICAgICB2YXIgcmVzID0gY2IuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIGlmIChyZXMgPT09IHRydWUgJiYgKCFoYXNQYXJlbnRDYnMgfHwgY2IuX2Zyb21QYXJlbnQpKSB7XG4gICAgICAgICAgc2hvdWxkUHJvcGFnYXRlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2hvdWxkUHJvcGFnYXRlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZWN1cnNpdmVseSBicm9hZGNhc3QgYW4gZXZlbnQgdG8gYWxsIGNoaWxkcmVuIGluc3RhbmNlcy5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBldmVudFxuICAgKiBAcGFyYW0gey4uLip9IGFkZGl0aW9uYWwgYXJndW1lbnRzXG4gICAqL1xuXG4gIFZ1ZS5wcm90b3R5cGUuJGJyb2FkY2FzdCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciBpc1NvdXJjZSA9IHR5cGVvZiBldmVudCA9PT0gJ3N0cmluZyc7XG4gICAgZXZlbnQgPSBpc1NvdXJjZSA/IGV2ZW50IDogZXZlbnQubmFtZTtcbiAgICAvLyBpZiBubyBjaGlsZCBoYXMgcmVnaXN0ZXJlZCBmb3IgdGhpcyBldmVudCxcbiAgICAvLyB0aGVuIHRoZXJlJ3Mgbm8gbmVlZCB0byBicm9hZGNhc3QuXG4gICAgaWYgKCF0aGlzLl9ldmVudHNDb3VudFtldmVudF0pIHJldHVybjtcbiAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLiRjaGlsZHJlbjtcbiAgICB2YXIgYXJncyA9IHRvQXJyYXkoYXJndW1lbnRzKTtcbiAgICBpZiAoaXNTb3VyY2UpIHtcbiAgICAgIC8vIHVzZSBvYmplY3QgZXZlbnQgdG8gaW5kaWNhdGUgbm9uLXNvdXJjZSBlbWl0XG4gICAgICAvLyBvbiBjaGlsZHJlblxuICAgICAgYXJnc1swXSA9IHsgbmFtZTogZXZlbnQsIHNvdXJjZTogdGhpcyB9O1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICB2YXIgc2hvdWxkUHJvcGFnYXRlID0gY2hpbGQuJGVtaXQuYXBwbHkoY2hpbGQsIGFyZ3MpO1xuICAgICAgaWYgKHNob3VsZFByb3BhZ2F0ZSkge1xuICAgICAgICBjaGlsZC4kYnJvYWRjYXN0LmFwcGx5KGNoaWxkLCBhcmdzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlY3Vyc2l2ZWx5IHByb3BhZ2F0ZSBhbiBldmVudCB1cCB0aGUgcGFyZW50IGNoYWluLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAgICogQHBhcmFtIHsuLi4qfSBhZGRpdGlvbmFsIGFyZ3VtZW50c1xuICAgKi9cblxuICBWdWUucHJvdG90eXBlLiRkaXNwYXRjaCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciBzaG91bGRQcm9wYWdhdGUgPSB0aGlzLiRlbWl0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKCFzaG91bGRQcm9wYWdhdGUpIHJldHVybjtcbiAgICB2YXIgcGFyZW50ID0gdGhpcy4kcGFyZW50O1xuICAgIHZhciBhcmdzID0gdG9BcnJheShhcmd1bWVudHMpO1xuICAgIC8vIHVzZSBvYmplY3QgZXZlbnQgdG8gaW5kaWNhdGUgbm9uLXNvdXJjZSBlbWl0XG4gICAgLy8gb24gcGFyZW50c1xuICAgIGFyZ3NbMF0gPSB7IG5hbWU6IGV2ZW50LCBzb3VyY2U6IHRoaXMgfTtcbiAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICBzaG91bGRQcm9wYWdhdGUgPSBwYXJlbnQuJGVtaXQuYXBwbHkocGFyZW50LCBhcmdzKTtcbiAgICAgIHBhcmVudCA9IHNob3VsZFByb3BhZ2F0ZSA/IHBhcmVudC4kcGFyZW50IDogbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIE1vZGlmeSB0aGUgbGlzdGVuZXIgY291bnRzIG9uIGFsbCBwYXJlbnRzLlxuICAgKiBUaGlzIGJvb2trZWVwaW5nIGFsbG93cyAkYnJvYWRjYXN0IHRvIHJldHVybiBlYXJseSB3aGVuXG4gICAqIG5vIGNoaWxkIGhhcyBsaXN0ZW5lZCB0byBhIGNlcnRhaW4gZXZlbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7VnVlfSB2bVxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvdW50XG4gICAqL1xuXG4gIHZhciBob29rUkUgPSAvXmhvb2s6LztcbiAgZnVuY3Rpb24gbW9kaWZ5TGlzdGVuZXJDb3VudCh2bSwgZXZlbnQsIGNvdW50KSB7XG4gICAgdmFyIHBhcmVudCA9IHZtLiRwYXJlbnQ7XG4gICAgLy8gaG9va3MgZG8gbm90IGdldCBicm9hZGNhc3RlZCBzbyBubyBuZWVkXG4gICAgLy8gdG8gZG8gYm9va2tlZXBpbmcgZm9yIHRoZW1cbiAgICBpZiAoIXBhcmVudCB8fCAhY291bnQgfHwgaG9va1JFLnRlc3QoZXZlbnQpKSByZXR1cm47XG4gICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgcGFyZW50Ll9ldmVudHNDb3VudFtldmVudF0gPSAocGFyZW50Ll9ldmVudHNDb3VudFtldmVudF0gfHwgMCkgKyBjb3VudDtcbiAgICAgIHBhcmVudCA9IHBhcmVudC4kcGFyZW50O1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBsaWZlY3ljbGVBUEkgKFZ1ZSkge1xuICAvKipcbiAgICogU2V0IGluc3RhbmNlIHRhcmdldCBlbGVtZW50IGFuZCBraWNrIG9mZiB0aGUgY29tcGlsYXRpb25cbiAgICogcHJvY2Vzcy4gVGhlIHBhc3NlZCBpbiBgZWxgIGNhbiBiZSBhIHNlbGVjdG9yIHN0cmluZywgYW5cbiAgICogZXhpc3RpbmcgRWxlbWVudCwgb3IgYSBEb2N1bWVudEZyYWdtZW50IChmb3IgYmxvY2tcbiAgICogaW5zdGFuY2VzKS5cbiAgICpcbiAgICogQHBhcmFtIHtFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8c3RyaW5nfSBlbFxuICAgKiBAcHVibGljXG4gICAqL1xuXG4gIFZ1ZS5wcm90b3R5cGUuJG1vdW50ID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgaWYgKHRoaXMuX2lzQ29tcGlsZWQpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybignJG1vdW50KCkgc2hvdWxkIGJlIGNhbGxlZCBvbmx5IG9uY2UuJywgdGhpcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsID0gcXVlcnkoZWwpO1xuICAgIGlmICghZWwpIHtcbiAgICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgfVxuICAgIHRoaXMuX2NvbXBpbGUoZWwpO1xuICAgIHRoaXMuX2luaXRET01Ib29rcygpO1xuICAgIGlmIChpbkRvYyh0aGlzLiRlbCkpIHtcbiAgICAgIHRoaXMuX2NhbGxIb29rKCdhdHRhY2hlZCcpO1xuICAgICAgcmVhZHkuY2FsbCh0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4kb25jZSgnaG9vazphdHRhY2hlZCcsIHJlYWR5KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIE1hcmsgYW4gaW5zdGFuY2UgYXMgcmVhZHkuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHJlYWR5KCkge1xuICAgIHRoaXMuX2lzQXR0YWNoZWQgPSB0cnVlO1xuICAgIHRoaXMuX2lzUmVhZHkgPSB0cnVlO1xuICAgIHRoaXMuX2NhbGxIb29rKCdyZWFkeScpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRlYXJkb3duIHRoZSBpbnN0YW5jZSwgc2ltcGx5IGRlbGVnYXRlIHRvIHRoZSBpbnRlcm5hbFxuICAgKiBfZGVzdHJveS5cbiAgICpcbiAgICogQHBhcmFtIHtCb29sZWFufSByZW1vdmVcbiAgICogQHBhcmFtIHtCb29sZWFufSBkZWZlckNsZWFudXBcbiAgICovXG5cbiAgVnVlLnByb3RvdHlwZS4kZGVzdHJveSA9IGZ1bmN0aW9uIChyZW1vdmUsIGRlZmVyQ2xlYW51cCkge1xuICAgIHRoaXMuX2Rlc3Ryb3kocmVtb3ZlLCBkZWZlckNsZWFudXApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQYXJ0aWFsbHkgY29tcGlsZSBhIHBpZWNlIG9mIERPTSBhbmQgcmV0dXJuIGFcbiAgICogZGVjb21waWxlIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR8RG9jdW1lbnRGcmFnbWVudH0gZWxcbiAgICogQHBhcmFtIHtWdWV9IFtob3N0XVxuICAgKiBAcGFyYW0ge09iamVjdH0gW3Njb3BlXVxuICAgKiBAcGFyYW0ge0ZyYWdtZW50fSBbZnJhZ11cbiAgICogQHJldHVybiB7RnVuY3Rpb259XG4gICAqL1xuXG4gIFZ1ZS5wcm90b3R5cGUuJGNvbXBpbGUgPSBmdW5jdGlvbiAoZWwsIGhvc3QsIHNjb3BlLCBmcmFnKSB7XG4gICAgcmV0dXJuIGNvbXBpbGUoZWwsIHRoaXMuJG9wdGlvbnMsIHRydWUpKHRoaXMsIGVsLCBob3N0LCBzY29wZSwgZnJhZyk7XG4gIH07XG59XG5cbi8qKlxuICogVGhlIGV4cG9zZWQgVnVlIGNvbnN0cnVjdG9yLlxuICpcbiAqIEFQSSBjb252ZW50aW9uczpcbiAqIC0gcHVibGljIEFQSSBtZXRob2RzL3Byb3BlcnRpZXMgYXJlIHByZWZpeGVkIHdpdGggYCRgXG4gKiAtIGludGVybmFsIG1ldGhvZHMvcHJvcGVydGllcyBhcmUgcHJlZml4ZWQgd2l0aCBgX2BcbiAqIC0gbm9uLXByZWZpeGVkIHByb3BlcnRpZXMgYXJlIGFzc3VtZWQgdG8gYmUgcHJveGllZCB1c2VyXG4gKiAgIGRhdGEuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gVnVlKG9wdGlvbnMpIHtcbiAgdGhpcy5faW5pdChvcHRpb25zKTtcbn1cblxuLy8gaW5zdGFsbCBpbnRlcm5hbHNcbmluaXRNaXhpbihWdWUpO1xuc3RhdGVNaXhpbihWdWUpO1xuZXZlbnRzTWl4aW4oVnVlKTtcbmxpZmVjeWNsZU1peGluKFZ1ZSk7XG5taXNjTWl4aW4oVnVlKTtcblxuLy8gaW5zdGFsbCBpbnN0YW5jZSBBUElzXG5kYXRhQVBJKFZ1ZSk7XG5kb21BUEkoVnVlKTtcbmV2ZW50c0FQSShWdWUpO1xubGlmZWN5Y2xlQVBJKFZ1ZSk7XG5cbnZhciBzbG90ID0ge1xuXG4gIHByaW9yaXR5OiBTTE9ULFxuICBwYXJhbXM6IFsnbmFtZSddLFxuXG4gIGJpbmQ6IGZ1bmN0aW9uIGJpbmQoKSB7XG4gICAgLy8gdGhpcyB3YXMgcmVzb2x2ZWQgZHVyaW5nIGNvbXBvbmVudCB0cmFuc2NsdXNpb25cbiAgICB2YXIgbmFtZSA9IHRoaXMucGFyYW1zLm5hbWUgfHwgJ2RlZmF1bHQnO1xuICAgIHZhciBjb250ZW50ID0gdGhpcy52bS5fc2xvdENvbnRlbnRzICYmIHRoaXMudm0uX3Nsb3RDb250ZW50c1tuYW1lXTtcbiAgICBpZiAoIWNvbnRlbnQgfHwgIWNvbnRlbnQuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICB0aGlzLmZhbGxiYWNrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29tcGlsZShjb250ZW50LmNsb25lTm9kZSh0cnVlKSwgdGhpcy52bS5fY29udGV4dCwgdGhpcy52bSk7XG4gICAgfVxuICB9LFxuXG4gIGNvbXBpbGU6IGZ1bmN0aW9uIGNvbXBpbGUoY29udGVudCwgY29udGV4dCwgaG9zdCkge1xuICAgIGlmIChjb250ZW50ICYmIGNvbnRleHQpIHtcbiAgICAgIGlmICh0aGlzLmVsLmhhc0NoaWxkTm9kZXMoKSAmJiBjb250ZW50LmNoaWxkTm9kZXMubGVuZ3RoID09PSAxICYmIGNvbnRlbnQuY2hpbGROb2Rlc1swXS5ub2RlVHlwZSA9PT0gMSAmJiBjb250ZW50LmNoaWxkTm9kZXNbMF0uaGFzQXR0cmlidXRlKCd2LWlmJykpIHtcbiAgICAgICAgLy8gaWYgdGhlIGluc2VydGVkIHNsb3QgaGFzIHYtaWZcbiAgICAgICAgLy8gaW5qZWN0IGZhbGxiYWNrIGNvbnRlbnQgYXMgdGhlIHYtZWxzZVxuICAgICAgICB2YXIgZWxzZUJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICAgICAgZWxzZUJsb2NrLnNldEF0dHJpYnV0ZSgndi1lbHNlJywgJycpO1xuICAgICAgICBlbHNlQmxvY2suaW5uZXJIVE1MID0gdGhpcy5lbC5pbm5lckhUTUw7XG4gICAgICAgIC8vIHRoZSBlbHNlIGJsb2NrIHNob3VsZCBiZSBjb21waWxlZCBpbiBjaGlsZCBzY29wZVxuICAgICAgICBlbHNlQmxvY2suX2NvbnRleHQgPSB0aGlzLnZtO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGVsc2VCbG9jayk7XG4gICAgICB9XG4gICAgICB2YXIgc2NvcGUgPSBob3N0ID8gaG9zdC5fc2NvcGUgOiB0aGlzLl9zY29wZTtcbiAgICAgIHRoaXMudW5saW5rID0gY29udGV4dC4kY29tcGlsZShjb250ZW50LCBob3N0LCBzY29wZSwgdGhpcy5fZnJhZyk7XG4gICAgfVxuICAgIGlmIChjb250ZW50KSB7XG4gICAgICByZXBsYWNlKHRoaXMuZWwsIGNvbnRlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUodGhpcy5lbCk7XG4gICAgfVxuICB9LFxuXG4gIGZhbGxiYWNrOiBmdW5jdGlvbiBmYWxsYmFjaygpIHtcbiAgICB0aGlzLmNvbXBpbGUoZXh0cmFjdENvbnRlbnQodGhpcy5lbCwgdHJ1ZSksIHRoaXMudm0pO1xuICB9LFxuXG4gIHVuYmluZDogZnVuY3Rpb24gdW5iaW5kKCkge1xuICAgIGlmICh0aGlzLnVubGluaykge1xuICAgICAgdGhpcy51bmxpbmsoKTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBwYXJ0aWFsID0ge1xuXG4gIHByaW9yaXR5OiBQQVJUSUFMLFxuXG4gIHBhcmFtczogWyduYW1lJ10sXG5cbiAgLy8gd2F0Y2ggY2hhbmdlcyB0byBuYW1lIGZvciBkeW5hbWljIHBhcnRpYWxzXG4gIHBhcmFtV2F0Y2hlcnM6IHtcbiAgICBuYW1lOiBmdW5jdGlvbiBuYW1lKHZhbHVlKSB7XG4gICAgICB2SWYucmVtb3ZlLmNhbGwodGhpcyk7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5pbnNlcnQodmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBiaW5kOiBmdW5jdGlvbiBiaW5kKCkge1xuICAgIHRoaXMuYW5jaG9yID0gY3JlYXRlQW5jaG9yKCd2LXBhcnRpYWwnKTtcbiAgICByZXBsYWNlKHRoaXMuZWwsIHRoaXMuYW5jaG9yKTtcbiAgICB0aGlzLmluc2VydCh0aGlzLnBhcmFtcy5uYW1lKTtcbiAgfSxcblxuICBpbnNlcnQ6IGZ1bmN0aW9uIGluc2VydChpZCkge1xuICAgIHZhciBwYXJ0aWFsID0gcmVzb2x2ZUFzc2V0KHRoaXMudm0uJG9wdGlvbnMsICdwYXJ0aWFscycsIGlkLCB0cnVlKTtcbiAgICBpZiAocGFydGlhbCkge1xuICAgICAgdGhpcy5mYWN0b3J5ID0gbmV3IEZyYWdtZW50RmFjdG9yeSh0aGlzLnZtLCBwYXJ0aWFsKTtcbiAgICAgIHZJZi5pbnNlcnQuY2FsbCh0aGlzKTtcbiAgICB9XG4gIH0sXG5cbiAgdW5iaW5kOiBmdW5jdGlvbiB1bmJpbmQoKSB7XG4gICAgaWYgKHRoaXMuZnJhZykge1xuICAgICAgdGhpcy5mcmFnLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBlbGVtZW50RGlyZWN0aXZlcyA9IHtcbiAgc2xvdDogc2xvdCxcbiAgcGFydGlhbDogcGFydGlhbFxufTtcblxudmFyIGNvbnZlcnRBcnJheSA9IHZGb3IuX3Bvc3RQcm9jZXNzO1xuXG4vKipcbiAqIExpbWl0IGZpbHRlciBmb3IgYXJyYXlzXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG5cbiAqIEBwYXJhbSB7TnVtYmVyfSBvZmZzZXQgKERlY2ltYWwgZXhwZWN0ZWQpXG4gKi9cblxuZnVuY3Rpb24gbGltaXRCeShhcnIsIG4sIG9mZnNldCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPyBwYXJzZUludChvZmZzZXQsIDEwKSA6IDA7XG4gIG4gPSB0b051bWJlcihuKTtcbiAgcmV0dXJuIHR5cGVvZiBuID09PSAnbnVtYmVyJyA/IGFyci5zbGljZShvZmZzZXQsIG9mZnNldCArIG4pIDogYXJyO1xufVxuXG4vKipcbiAqIEZpbHRlciBmaWx0ZXIgZm9yIGFycmF5c1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWFyY2hcbiAqIEBwYXJhbSB7U3RyaW5nfSBbZGVsaW1pdGVyXVxuICogQHBhcmFtIHtTdHJpbmd9IC4uLmRhdGFLZXlzXG4gKi9cblxuZnVuY3Rpb24gZmlsdGVyQnkoYXJyLCBzZWFyY2gsIGRlbGltaXRlcikge1xuICBhcnIgPSBjb252ZXJ0QXJyYXkoYXJyKTtcbiAgaWYgKHNlYXJjaCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuICBpZiAodHlwZW9mIHNlYXJjaCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBhcnIuZmlsdGVyKHNlYXJjaCk7XG4gIH1cbiAgLy8gY2FzdCB0byBsb3dlcmNhc2Ugc3RyaW5nXG4gIHNlYXJjaCA9ICgnJyArIHNlYXJjaCkudG9Mb3dlckNhc2UoKTtcbiAgLy8gYWxsb3cgb3B0aW9uYWwgYGluYCBkZWxpbWl0ZXJcbiAgLy8gYmVjYXVzZSB3aHkgbm90XG4gIHZhciBuID0gZGVsaW1pdGVyID09PSAnaW4nID8gMyA6IDI7XG4gIC8vIGV4dHJhY3QgYW5kIGZsYXR0ZW4ga2V5c1xuICB2YXIga2V5cyA9IEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIHRvQXJyYXkoYXJndW1lbnRzLCBuKSk7XG4gIHZhciByZXMgPSBbXTtcbiAgdmFyIGl0ZW0sIGtleSwgdmFsLCBqO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpdGVtID0gYXJyW2ldO1xuICAgIHZhbCA9IGl0ZW0gJiYgaXRlbS4kdmFsdWUgfHwgaXRlbTtcbiAgICBqID0ga2V5cy5sZW5ndGg7XG4gICAgaWYgKGopIHtcbiAgICAgIHdoaWxlIChqLS0pIHtcbiAgICAgICAga2V5ID0ga2V5c1tqXTtcbiAgICAgICAgaWYgKGtleSA9PT0gJyRrZXknICYmIGNvbnRhaW5zKGl0ZW0uJGtleSwgc2VhcmNoKSB8fCBjb250YWlucyhnZXRQYXRoKHZhbCwga2V5KSwgc2VhcmNoKSkge1xuICAgICAgICAgIHJlcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjb250YWlucyhpdGVtLCBzZWFyY2gpKSB7XG4gICAgICByZXMucHVzaChpdGVtKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cblxuLyoqXG4gKiBGaWx0ZXIgZmlsdGVyIGZvciBhcnJheXNcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xBcnJheTxTdHJpbmc+fEZ1bmN0aW9ufSAuLi5zb3J0S2V5c1xuICogQHBhcmFtIHtOdW1iZXJ9IFtvcmRlcl1cbiAqL1xuXG5mdW5jdGlvbiBvcmRlckJ5KGFycikge1xuICB2YXIgY29tcGFyYXRvciA9IG51bGw7XG4gIHZhciBzb3J0S2V5cyA9IHVuZGVmaW5lZDtcbiAgYXJyID0gY29udmVydEFycmF5KGFycik7XG5cbiAgLy8gZGV0ZXJtaW5lIG9yZGVyIChsYXN0IGFyZ3VtZW50KVxuICB2YXIgYXJncyA9IHRvQXJyYXkoYXJndW1lbnRzLCAxKTtcbiAgdmFyIG9yZGVyID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xuICBpZiAodHlwZW9mIG9yZGVyID09PSAnbnVtYmVyJykge1xuICAgIG9yZGVyID0gb3JkZXIgPCAwID8gLTEgOiAxO1xuICAgIGFyZ3MgPSBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzLnNsaWNlKDAsIC0xKSA6IGFyZ3M7XG4gIH0gZWxzZSB7XG4gICAgb3JkZXIgPSAxO1xuICB9XG5cbiAgLy8gZGV0ZXJtaW5lIHNvcnRLZXlzICYgY29tcGFyYXRvclxuICB2YXIgZmlyc3RBcmcgPSBhcmdzWzBdO1xuICBpZiAoIWZpcnN0QXJnKSB7XG4gICAgcmV0dXJuIGFycjtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBjdXN0b20gY29tcGFyYXRvclxuICAgIGNvbXBhcmF0b3IgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZpcnN0QXJnKGEsIGIpICogb3JkZXI7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICAvLyBzdHJpbmcga2V5cy4gZmxhdHRlbiBmaXJzdFxuICAgIHNvcnRLZXlzID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgYXJncyk7XG4gICAgY29tcGFyYXRvciA9IGZ1bmN0aW9uIChhLCBiLCBpKSB7XG4gICAgICBpID0gaSB8fCAwO1xuICAgICAgcmV0dXJuIGkgPj0gc29ydEtleXMubGVuZ3RoIC0gMSA/IGJhc2VDb21wYXJlKGEsIGIsIGkpIDogYmFzZUNvbXBhcmUoYSwgYiwgaSkgfHwgY29tcGFyYXRvcihhLCBiLCBpICsgMSk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJhc2VDb21wYXJlKGEsIGIsIHNvcnRLZXlJbmRleCkge1xuICAgIHZhciBzb3J0S2V5ID0gc29ydEtleXNbc29ydEtleUluZGV4XTtcbiAgICBpZiAoc29ydEtleSkge1xuICAgICAgaWYgKHNvcnRLZXkgIT09ICcka2V5Jykge1xuICAgICAgICBpZiAoaXNPYmplY3QoYSkgJiYgJyR2YWx1ZScgaW4gYSkgYSA9IGEuJHZhbHVlO1xuICAgICAgICBpZiAoaXNPYmplY3QoYikgJiYgJyR2YWx1ZScgaW4gYikgYiA9IGIuJHZhbHVlO1xuICAgICAgfVxuICAgICAgYSA9IGlzT2JqZWN0KGEpID8gZ2V0UGF0aChhLCBzb3J0S2V5KSA6IGE7XG4gICAgICBiID0gaXNPYmplY3QoYikgPyBnZXRQYXRoKGIsIHNvcnRLZXkpIDogYjtcbiAgICB9XG4gICAgcmV0dXJuIGEgPT09IGIgPyAwIDogYSA+IGIgPyBvcmRlciA6IC1vcmRlcjtcbiAgfVxuXG4gIC8vIHNvcnQgb24gYSBjb3B5IHRvIGF2b2lkIG11dGF0aW5nIG9yaWdpbmFsIGFycmF5XG4gIHJldHVybiBhcnIuc2xpY2UoKS5zb3J0KGNvbXBhcmF0b3IpO1xufVxuXG4vKipcbiAqIFN0cmluZyBjb250YWluIGhlbHBlclxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VhcmNoXG4gKi9cblxuZnVuY3Rpb24gY29udGFpbnModmFsLCBzZWFyY2gpIHtcbiAgdmFyIGk7XG4gIGlmIChpc1BsYWluT2JqZWN0KHZhbCkpIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHZhbCk7XG4gICAgaSA9IGtleXMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGlmIChjb250YWlucyh2YWxba2V5c1tpXV0sIHNlYXJjaCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsKSkge1xuICAgIGkgPSB2YWwubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGlmIChjb250YWlucyh2YWxbaV0sIHNlYXJjaCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKHZhbCAhPSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbC50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2gpID4gLTE7XG4gIH1cbn1cblxudmFyIGRpZ2l0c1JFID0gLyhcXGR7M30pKD89XFxkKS9nO1xuXG4vLyBhc3NldCBjb2xsZWN0aW9ucyBtdXN0IGJlIGEgcGxhaW4gb2JqZWN0LlxudmFyIGZpbHRlcnMgPSB7XG5cbiAgb3JkZXJCeTogb3JkZXJCeSxcbiAgZmlsdGVyQnk6IGZpbHRlckJ5LFxuICBsaW1pdEJ5OiBsaW1pdEJ5LFxuXG4gIC8qKlxuICAgKiBTdHJpbmdpZnkgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRlbnRcbiAgICovXG5cbiAganNvbjoge1xuICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQodmFsdWUsIGluZGVudCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6IEpTT04uc3RyaW5naWZ5KHZhbHVlLCBudWxsLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGluZGVudCA6IDIpO1xuICAgIH0sXG4gICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKHZhbHVlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqICdhYmMnID0+ICdBYmMnXG4gICAqL1xuXG4gIGNhcGl0YWxpemU6IGZ1bmN0aW9uIGNhcGl0YWxpemUodmFsdWUpIHtcbiAgICBpZiAoIXZhbHVlICYmIHZhbHVlICE9PSAwKSByZXR1cm4gJyc7XG4gICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgIHJldHVybiB2YWx1ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKDEpO1xuICB9LFxuXG4gIC8qKlxuICAgKiAnYWJjJyA9PiAnQUJDJ1xuICAgKi9cblxuICB1cHBlcmNhc2U6IGZ1bmN0aW9uIHVwcGVyY2FzZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSB8fCB2YWx1ZSA9PT0gMCA/IHZhbHVlLnRvU3RyaW5nKCkudG9VcHBlckNhc2UoKSA6ICcnO1xuICB9LFxuXG4gIC8qKlxuICAgKiAnQWJDJyA9PiAnYWJjJ1xuICAgKi9cblxuICBsb3dlcmNhc2U6IGZ1bmN0aW9uIGxvd2VyY2FzZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSB8fCB2YWx1ZSA9PT0gMCA/IHZhbHVlLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSA6ICcnO1xuICB9LFxuXG4gIC8qKlxuICAgKiAxMjM0NSA9PiAkMTIsMzQ1LjAwXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzaWduXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBkZWNpbWFscyBEZWNpbWFsIHBsYWNlc1xuICAgKi9cblxuICBjdXJyZW5jeTogZnVuY3Rpb24gY3VycmVuY3kodmFsdWUsIF9jdXJyZW5jeSwgZGVjaW1hbHMpIHtcbiAgICB2YWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgIGlmICghaXNGaW5pdGUodmFsdWUpIHx8ICF2YWx1ZSAmJiB2YWx1ZSAhPT0gMCkgcmV0dXJuICcnO1xuICAgIF9jdXJyZW5jeSA9IF9jdXJyZW5jeSAhPSBudWxsID8gX2N1cnJlbmN5IDogJyQnO1xuICAgIGRlY2ltYWxzID0gZGVjaW1hbHMgIT0gbnVsbCA/IGRlY2ltYWxzIDogMjtcbiAgICB2YXIgc3RyaW5naWZpZWQgPSBNYXRoLmFicyh2YWx1ZSkudG9GaXhlZChkZWNpbWFscyk7XG4gICAgdmFyIF9pbnQgPSBkZWNpbWFscyA/IHN0cmluZ2lmaWVkLnNsaWNlKDAsIC0xIC0gZGVjaW1hbHMpIDogc3RyaW5naWZpZWQ7XG4gICAgdmFyIGkgPSBfaW50Lmxlbmd0aCAlIDM7XG4gICAgdmFyIGhlYWQgPSBpID4gMCA/IF9pbnQuc2xpY2UoMCwgaSkgKyAoX2ludC5sZW5ndGggPiAzID8gJywnIDogJycpIDogJyc7XG4gICAgdmFyIF9mbG9hdCA9IGRlY2ltYWxzID8gc3RyaW5naWZpZWQuc2xpY2UoLTEgLSBkZWNpbWFscykgOiAnJztcbiAgICB2YXIgc2lnbiA9IHZhbHVlIDwgMCA/ICctJyA6ICcnO1xuICAgIHJldHVybiBzaWduICsgX2N1cnJlbmN5ICsgaGVhZCArIF9pbnQuc2xpY2UoaSkucmVwbGFjZShkaWdpdHNSRSwgJyQxLCcpICsgX2Zsb2F0O1xuICB9LFxuXG4gIC8qKlxuICAgKiAnaXRlbScgPT4gJ2l0ZW1zJ1xuICAgKlxuICAgKiBAcGFyYW1zXG4gICAqICBhbiBhcnJheSBvZiBzdHJpbmdzIGNvcnJlc3BvbmRpbmcgdG9cbiAgICogIHRoZSBzaW5nbGUsIGRvdWJsZSwgdHJpcGxlIC4uLiBmb3JtcyBvZiB0aGUgd29yZCB0b1xuICAgKiAgYmUgcGx1cmFsaXplZC4gV2hlbiB0aGUgbnVtYmVyIHRvIGJlIHBsdXJhbGl6ZWRcbiAgICogIGV4Y2VlZHMgdGhlIGxlbmd0aCBvZiB0aGUgYXJncywgaXQgd2lsbCB1c2UgdGhlIGxhc3RcbiAgICogIGVudHJ5IGluIHRoZSBhcnJheS5cbiAgICpcbiAgICogIGUuZy4gWydzaW5nbGUnLCAnZG91YmxlJywgJ3RyaXBsZScsICdtdWx0aXBsZSddXG4gICAqL1xuXG4gIHBsdXJhbGl6ZTogZnVuY3Rpb24gcGx1cmFsaXplKHZhbHVlKSB7XG4gICAgdmFyIGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cywgMSk7XG4gICAgdmFyIGxlbmd0aCA9IGFyZ3MubGVuZ3RoO1xuICAgIGlmIChsZW5ndGggPiAxKSB7XG4gICAgICB2YXIgaW5kZXggPSB2YWx1ZSAlIDEwIC0gMTtcbiAgICAgIHJldHVybiBpbmRleCBpbiBhcmdzID8gYXJnc1tpbmRleF0gOiBhcmdzW2xlbmd0aCAtIDFdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYXJnc1swXSArICh2YWx1ZSA9PT0gMSA/ICcnIDogJ3MnKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIERlYm91bmNlIGEgaGFuZGxlciBmdW5jdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlclxuICAgKiBAcGFyYW0ge051bWJlcn0gZGVsYXkgPSAzMDBcbiAgICogQHJldHVybiB7RnVuY3Rpb259XG4gICAqL1xuXG4gIGRlYm91bmNlOiBmdW5jdGlvbiBkZWJvdW5jZShoYW5kbGVyLCBkZWxheSkge1xuICAgIGlmICghaGFuZGxlcikgcmV0dXJuO1xuICAgIGlmICghZGVsYXkpIHtcbiAgICAgIGRlbGF5ID0gMzAwO1xuICAgIH1cbiAgICByZXR1cm4gX2RlYm91bmNlKGhhbmRsZXIsIGRlbGF5KTtcbiAgfVxufTtcblxuZnVuY3Rpb24gaW5zdGFsbEdsb2JhbEFQSSAoVnVlKSB7XG4gIC8qKlxuICAgKiBWdWUgYW5kIGV2ZXJ5IGNvbnN0cnVjdG9yIHRoYXQgZXh0ZW5kcyBWdWUgaGFzIGFuXG4gICAqIGFzc29jaWF0ZWQgb3B0aW9ucyBvYmplY3QsIHdoaWNoIGNhbiBiZSBhY2Nlc3NlZCBkdXJpbmdcbiAgICogY29tcGlsYXRpb24gc3RlcHMgYXMgYHRoaXMuY29uc3RydWN0b3Iub3B0aW9uc2AuXG4gICAqXG4gICAqIFRoZXNlIGNhbiBiZSBzZWVuIGFzIHRoZSBkZWZhdWx0IG9wdGlvbnMgb2YgZXZlcnlcbiAgICogVnVlIGluc3RhbmNlLlxuICAgKi9cblxuICBWdWUub3B0aW9ucyA9IHtcbiAgICBkaXJlY3RpdmVzOiBkaXJlY3RpdmVzLFxuICAgIGVsZW1lbnREaXJlY3RpdmVzOiBlbGVtZW50RGlyZWN0aXZlcyxcbiAgICBmaWx0ZXJzOiBmaWx0ZXJzLFxuICAgIHRyYW5zaXRpb25zOiB7fSxcbiAgICBjb21wb25lbnRzOiB7fSxcbiAgICBwYXJ0aWFsczoge30sXG4gICAgcmVwbGFjZTogdHJ1ZVxuICB9O1xuXG4gIC8qKlxuICAgKiBFeHBvc2UgdXNlZnVsIGludGVybmFsc1xuICAgKi9cblxuICBWdWUudXRpbCA9IHV0aWw7XG4gIFZ1ZS5jb25maWcgPSBjb25maWc7XG4gIFZ1ZS5zZXQgPSBzZXQ7XG4gIFZ1ZVsnZGVsZXRlJ10gPSBkZWw7XG4gIFZ1ZS5uZXh0VGljayA9IG5leHRUaWNrO1xuXG4gIC8qKlxuICAgKiBUaGUgZm9sbG93aW5nIGFyZSBleHBvc2VkIGZvciBhZHZhbmNlZCB1c2FnZSAvIHBsdWdpbnNcbiAgICovXG5cbiAgVnVlLmNvbXBpbGVyID0gY29tcGlsZXI7XG4gIFZ1ZS5GcmFnbWVudEZhY3RvcnkgPSBGcmFnbWVudEZhY3Rvcnk7XG4gIFZ1ZS5pbnRlcm5hbERpcmVjdGl2ZXMgPSBpbnRlcm5hbERpcmVjdGl2ZXM7XG4gIFZ1ZS5wYXJzZXJzID0ge1xuICAgIHBhdGg6IHBhdGgsXG4gICAgdGV4dDogdGV4dCxcbiAgICB0ZW1wbGF0ZTogdGVtcGxhdGUsXG4gICAgZGlyZWN0aXZlOiBkaXJlY3RpdmUsXG4gICAgZXhwcmVzc2lvbjogZXhwcmVzc2lvblxuICB9O1xuXG4gIC8qKlxuICAgKiBFYWNoIGluc3RhbmNlIGNvbnN0cnVjdG9yLCBpbmNsdWRpbmcgVnVlLCBoYXMgYSB1bmlxdWVcbiAgICogY2lkLiBUaGlzIGVuYWJsZXMgdXMgdG8gY3JlYXRlIHdyYXBwZWQgXCJjaGlsZFxuICAgKiBjb25zdHJ1Y3RvcnNcIiBmb3IgcHJvdG90eXBhbCBpbmhlcml0YW5jZSBhbmQgY2FjaGUgdGhlbS5cbiAgICovXG5cbiAgVnVlLmNpZCA9IDA7XG4gIHZhciBjaWQgPSAxO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBpbmhlcml0YW5jZVxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gZXh0ZW5kT3B0aW9uc1xuICAgKi9cblxuICBWdWUuZXh0ZW5kID0gZnVuY3Rpb24gKGV4dGVuZE9wdGlvbnMpIHtcbiAgICBleHRlbmRPcHRpb25zID0gZXh0ZW5kT3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgU3VwZXIgPSB0aGlzO1xuICAgIHZhciBpc0ZpcnN0RXh0ZW5kID0gU3VwZXIuY2lkID09PSAwO1xuICAgIGlmIChpc0ZpcnN0RXh0ZW5kICYmIGV4dGVuZE9wdGlvbnMuX0N0b3IpIHtcbiAgICAgIHJldHVybiBleHRlbmRPcHRpb25zLl9DdG9yO1xuICAgIH1cbiAgICB2YXIgbmFtZSA9IGV4dGVuZE9wdGlvbnMubmFtZSB8fCBTdXBlci5vcHRpb25zLm5hbWU7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICghL15bYS16QS1aXVtcXHctXSokLy50ZXN0KG5hbWUpKSB7XG4gICAgICAgIHdhcm4oJ0ludmFsaWQgY29tcG9uZW50IG5hbWU6IFwiJyArIG5hbWUgKyAnXCIuIENvbXBvbmVudCBuYW1lcyAnICsgJ2NhbiBvbmx5IGNvbnRhaW4gYWxwaGFudW1lcmljIGNoYXJhY2F0ZXJzIGFuZCB0aGUgaHlwaGVuLicpO1xuICAgICAgICBuYW1lID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIFN1YiA9IGNyZWF0ZUNsYXNzKG5hbWUgfHwgJ1Z1ZUNvbXBvbmVudCcpO1xuICAgIFN1Yi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFN1cGVyLnByb3RvdHlwZSk7XG4gICAgU3ViLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFN1YjtcbiAgICBTdWIuY2lkID0gY2lkKys7XG4gICAgU3ViLm9wdGlvbnMgPSBtZXJnZU9wdGlvbnMoU3VwZXIub3B0aW9ucywgZXh0ZW5kT3B0aW9ucyk7XG4gICAgU3ViWydzdXBlciddID0gU3VwZXI7XG4gICAgLy8gYWxsb3cgZnVydGhlciBleHRlbnNpb25cbiAgICBTdWIuZXh0ZW5kID0gU3VwZXIuZXh0ZW5kO1xuICAgIC8vIGNyZWF0ZSBhc3NldCByZWdpc3RlcnMsIHNvIGV4dGVuZGVkIGNsYXNzZXNcbiAgICAvLyBjYW4gaGF2ZSB0aGVpciBwcml2YXRlIGFzc2V0cyB0b28uXG4gICAgY29uZmlnLl9hc3NldFR5cGVzLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgIFN1Ylt0eXBlXSA9IFN1cGVyW3R5cGVdO1xuICAgIH0pO1xuICAgIC8vIGVuYWJsZSByZWN1cnNpdmUgc2VsZi1sb29rdXBcbiAgICBpZiAobmFtZSkge1xuICAgICAgU3ViLm9wdGlvbnMuY29tcG9uZW50c1tuYW1lXSA9IFN1YjtcbiAgICB9XG4gICAgLy8gY2FjaGUgY29uc3RydWN0b3JcbiAgICBpZiAoaXNGaXJzdEV4dGVuZCkge1xuICAgICAgZXh0ZW5kT3B0aW9ucy5fQ3RvciA9IFN1YjtcbiAgICB9XG4gICAgcmV0dXJuIFN1YjtcbiAgfTtcblxuICAvKipcbiAgICogQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBzdWItY2xhc3MgY29uc3RydWN0b3Igd2l0aCB0aGVcbiAgICogZ2l2ZW4gbmFtZS4gVGhpcyBnaXZlcyB1cyBtdWNoIG5pY2VyIG91dHB1dCB3aGVuXG4gICAqIGxvZ2dpbmcgaW5zdGFuY2VzIGluIHRoZSBjb25zb2xlLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAgKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAgICovXG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2xhc3MobmFtZSkge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLW5ldy1mdW5jICovXG4gICAgcmV0dXJuIG5ldyBGdW5jdGlvbigncmV0dXJuIGZ1bmN0aW9uICcgKyBjbGFzc2lmeShuYW1lKSArICcgKG9wdGlvbnMpIHsgdGhpcy5faW5pdChvcHRpb25zKSB9JykoKTtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLW5ldy1mdW5jICovXG4gIH1cblxuICAvKipcbiAgICogUGx1Z2luIHN5c3RlbVxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGx1Z2luXG4gICAqL1xuXG4gIFZ1ZS51c2UgPSBmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKHBsdWdpbi5pbnN0YWxsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gYWRkaXRpb25hbCBwYXJhbWV0ZXJzXG4gICAgdmFyIGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cywgMSk7XG4gICAgYXJncy51bnNoaWZ0KHRoaXMpO1xuICAgIGlmICh0eXBlb2YgcGx1Z2luLmluc3RhbGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHBsdWdpbi5pbnN0YWxsLmFwcGx5KHBsdWdpbiwgYXJncyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBsdWdpbi5hcHBseShudWxsLCBhcmdzKTtcbiAgICB9XG4gICAgcGx1Z2luLmluc3RhbGxlZCA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFwcGx5IGEgZ2xvYmFsIG1peGluIGJ5IG1lcmdpbmcgaXQgaW50byB0aGUgZGVmYXVsdFxuICAgKiBvcHRpb25zLlxuICAgKi9cblxuICBWdWUubWl4aW4gPSBmdW5jdGlvbiAobWl4aW4pIHtcbiAgICBWdWUub3B0aW9ucyA9IG1lcmdlT3B0aW9ucyhWdWUub3B0aW9ucywgbWl4aW4pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYXNzZXQgcmVnaXN0cmF0aW9uIG1ldGhvZHMgd2l0aCB0aGUgZm9sbG93aW5nXG4gICAqIHNpZ25hdHVyZTpcbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gICAqIEBwYXJhbSB7Kn0gZGVmaW5pdGlvblxuICAgKi9cblxuICBjb25maWcuX2Fzc2V0VHlwZXMuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgIFZ1ZVt0eXBlXSA9IGZ1bmN0aW9uIChpZCwgZGVmaW5pdGlvbikge1xuICAgICAgaWYgKCFkZWZpbml0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnNbdHlwZSArICdzJ11baWRdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgaWYgKHR5cGUgPT09ICdjb21wb25lbnQnICYmIChjb21tb25UYWdSRS50ZXN0KGlkKSB8fCByZXNlcnZlZFRhZ1JFLnRlc3QoaWQpKSkge1xuICAgICAgICAgICAgd2FybignRG8gbm90IHVzZSBidWlsdC1pbiBvciByZXNlcnZlZCBIVE1MIGVsZW1lbnRzIGFzIGNvbXBvbmVudCAnICsgJ2lkOiAnICsgaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PT0gJ2NvbXBvbmVudCcgJiYgaXNQbGFpbk9iamVjdChkZWZpbml0aW9uKSkge1xuICAgICAgICAgIGlmICghZGVmaW5pdGlvbi5uYW1lKSB7XG4gICAgICAgICAgICBkZWZpbml0aW9uLm5hbWUgPSBpZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGVmaW5pdGlvbiA9IFZ1ZS5leHRlbmQoZGVmaW5pdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcHRpb25zW3R5cGUgKyAncyddW2lkXSA9IGRlZmluaXRpb247XG4gICAgICAgIHJldHVybiBkZWZpbml0aW9uO1xuICAgICAgfVxuICAgIH07XG4gIH0pO1xuXG4gIC8vIGV4cG9zZSBpbnRlcm5hbCB0cmFuc2l0aW9uIEFQSVxuICBleHRlbmQoVnVlLnRyYW5zaXRpb24sIHRyYW5zaXRpb24pO1xufVxuXG5pbnN0YWxsR2xvYmFsQVBJKFZ1ZSk7XG5cblZ1ZS52ZXJzaW9uID0gJzEuMC4yNic7XG5cbi8vIGRldnRvb2xzIGdsb2JhbCBob29rXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gIGlmIChjb25maWcuZGV2dG9vbHMpIHtcbiAgICBpZiAoZGV2dG9vbHMpIHtcbiAgICAgIGRldnRvb2xzLmVtaXQoJ2luaXQnLCBWdWUpO1xuICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBpbkJyb3dzZXIgJiYgL0Nocm9tZVxcL1xcZCsvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICBjb25zb2xlLmxvZygnRG93bmxvYWQgdGhlIFZ1ZSBEZXZ0b29scyBmb3IgYSBiZXR0ZXIgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZTpcXG4nICsgJ2h0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy92dWUtZGV2dG9vbHMnKTtcbiAgICB9XG4gIH1cbn0sIDApO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZ1ZTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiV2I4R2VqXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS9kaXN0L3Z1ZS5jb21tb24uanNcIixcIi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlL2Rpc3RcIikiXX0=
