webpackJsonp([0],{

/***/ "+E39":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("S82l")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "+ZMJ":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("lOnJ");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "+tPU":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("xGkn");
var global = __webpack_require__("7KvD");
var hide = __webpack_require__("hJx8");
var Iterators = __webpack_require__("/bQp");
var TO_STRING_TAG = __webpack_require__("dSzd")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "//Fk":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("U5ju"), __esModule: true };

/***/ }),

/***/ "/bQp":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "0RrJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export request */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("uj17");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);


function request(config) {
  //创建axios实例
  var instance = __WEBPACK_IMPORTED_MODULE_0_axios___default.a.create({
    //进行配置 http://m.xhbycm.net/vote_2021/wx/api.php?act=getBaseList
    //baseURL: 'http://m.xhbycm.net/vote_2021/wx/api.php?act=getBaseList',
    //baseURL:'/apis',
    timeout: 5000
  });
  return instance(config);
}

/***/ }),

/***/ "2KxR":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "3Eo+":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "3fs2":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("RY/4");
var ITERATOR = __webpack_require__("dSzd")('iterator');
var Iterators = __webpack_require__("/bQp");
module.exports = __webpack_require__("FeBl").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "4mcu":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "52gC":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "77Pl":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("EqjI");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "7KvD":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "82Mu":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7KvD");
var macrotask = __webpack_require__("L42u").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__("R9M2")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "880/":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("hJx8");


/***/ }),

/***/ "94VQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("Yobk");
var descriptor = __webpack_require__("X8DO");
var setToStringTag = __webpack_require__("e6n0");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("hJx8")(IteratorPrototype, __webpack_require__("dSzd")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "CXw9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("O4g8");
var global = __webpack_require__("7KvD");
var ctx = __webpack_require__("+ZMJ");
var classof = __webpack_require__("RY/4");
var $export = __webpack_require__("kM2E");
var isObject = __webpack_require__("EqjI");
var aFunction = __webpack_require__("lOnJ");
var anInstance = __webpack_require__("2KxR");
var forOf = __webpack_require__("NWt+");
var speciesConstructor = __webpack_require__("t8x9");
var task = __webpack_require__("L42u").set;
var microtask = __webpack_require__("82Mu")();
var newPromiseCapabilityModule = __webpack_require__("qARP");
var perform = __webpack_require__("dNDb");
var userAgent = __webpack_require__("iUbK");
var promiseResolve = __webpack_require__("fJUb");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__("dSzd")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__("xH/j")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__("e6n0")($Promise, PROMISE);
__webpack_require__("bRrM")(PROMISE);
Wrapper = __webpack_require__("FeBl")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__("dY0y")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "D2L2":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "DZ91":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "EGZi":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "EqBC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__("kM2E");
var core = __webpack_require__("FeBl");
var global = __webpack_require__("7KvD");
var speciesConstructor = __webpack_require__("t8x9");
var promiseResolve = __webpack_require__("fJUb");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "EqjI":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "FA9p":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "FeBl":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "Ibhu":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("D2L2");
var toIObject = __webpack_require__("TcQ7");
var arrayIndexOf = __webpack_require__("vFc/")(false);
var IE_PROTO = __webpack_require__("ax3d")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "L42u":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("+ZMJ");
var invoke = __webpack_require__("knuC");
var html = __webpack_require__("RPLV");
var cel = __webpack_require__("ON07");
var global = __webpack_require__("7KvD");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__("R9M2")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "M6a0":
/***/ (function(module, exports) {



/***/ }),

/***/ "MU5D":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("R9M2");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "MXzs":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Mhyx":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("/bQp");
var ITERATOR = __webpack_require__("dSzd")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "MmMw":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("EqjI");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "NWt+":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("+ZMJ");
var call = __webpack_require__("msXi");
var isArrayIter = __webpack_require__("Mhyx");
var anObject = __webpack_require__("77Pl");
var toLength = __webpack_require__("QRG4");
var getIterFn = __webpack_require__("3fs2");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "NYPn":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "O4g8":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "ON07":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("EqjI");
var document = __webpack_require__("7KvD").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "OlYA":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "PzxK":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("D2L2");
var toObject = __webpack_require__("sB3e");
var IE_PROTO = __webpack_require__("ax3d")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "QRG4":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("UuGF");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "R9M2":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "RPLV":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7KvD").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "RY/4":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("R9M2");
var TAG = __webpack_require__("dSzd")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "S82l":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "SfB7":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("+E39") && !__webpack_require__("S82l")(function () {
  return Object.defineProperty(__webpack_require__("ON07")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "TcQ7":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("MU5D");
var defined = __webpack_require__("52gC");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "TemG":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "U5ju":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("M6a0");
__webpack_require__("zQR9");
__webpack_require__("+tPU");
__webpack_require__("CXw9");
__webpack_require__("EqBC");
__webpack_require__("jKW+");
module.exports = __webpack_require__("FeBl").Promise;


/***/ }),

/***/ "UuGF":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "X8DO":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "XPOF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/IndexBanner.f17ca78.png";

/***/ }),

/***/ "Yobk":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("77Pl");
var dPs = __webpack_require__("qio6");
var enumBugKeys = __webpack_require__("xnc9");
var IE_PROTO = __webpack_require__("ax3d")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("ON07")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("RPLV").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "ax3d":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("e8AB")('keys');
var uid = __webpack_require__("3Eo+");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "bRrM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7KvD");
var core = __webpack_require__("FeBl");
var dP = __webpack_require__("evD5");
var DESCRIPTORS = __webpack_require__("+E39");
var SPECIES = __webpack_require__("dSzd")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "dJr7":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "dNDb":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "dSzd":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("e8AB")('wks');
var uid = __webpack_require__("3Eo+");
var Symbol = __webpack_require__("7KvD").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "dY0y":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("dSzd")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "e6n0":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("evD5").f;
var has = __webpack_require__("D2L2");
var TAG = __webpack_require__("dSzd")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "e8AB":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("FeBl");
var global = __webpack_require__("7KvD");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("O4g8") ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "evD5":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("77Pl");
var IE8_DOM_DEFINE = __webpack_require__("SfB7");
var toPrimitive = __webpack_require__("MmMw");
var dP = Object.defineProperty;

exports.f = __webpack_require__("+E39") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "fJUb":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("77Pl");
var isObject = __webpack_require__("EqjI");
var newPromiseCapability = __webpack_require__("qARP");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "fkB2":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("UuGF");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "h65t":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("UuGF");
var defined = __webpack_require__("52gC");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "hJx8":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("evD5");
var createDesc = __webpack_require__("X8DO");
module.exports = __webpack_require__("+E39") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "iUbK":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7KvD");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "jKW+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__("kM2E");
var newPromiseCapability = __webpack_require__("qARP");
var perform = __webpack_require__("dNDb");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "kM2E":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7KvD");
var core = __webpack_require__("FeBl");
var ctx = __webpack_require__("+ZMJ");
var hide = __webpack_require__("hJx8");
var has = __webpack_require__("D2L2");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "knuC":
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "lOnJ":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "lktj":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("Ibhu");
var enumBugKeys = __webpack_require__("xnc9");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "msXi":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("77Pl");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "qARP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__("lOnJ");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "qio6":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("evD5");
var anObject = __webpack_require__("77Pl");
var getKeys = __webpack_require__("lktj");

module.exports = __webpack_require__("+E39") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "rC4F":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vote/Banner.vue
//
//
//
//
//
//

/* harmony default export */ var Banner = ({
  name: "Banner",
  props: {
    bannerImg: {
      type: String,
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-815a2252","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vote/Banner.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"banner"},[_c('img',{attrs:{"src":_vm.bannerImg,"alt":""}})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var vote_Banner = (esExports);
// CONCATENATED MODULE: ./src/components/vote/Banner.vue
function injectStyle (ssrContext) {
  __webpack_require__("dJr7")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-815a2252"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  Banner,
  vote_Banner,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_vote_Banner = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vote/Search.vue
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Search = ({
  name: "Search",
  data: function data() {
    return {
      key: ''
    };
  },

  methods: {
    search: function search() {
      console.log('search');
      this.key = this.key.trim();
      if (this.key) {
        this.$emit('searchByKey', this.key);
      } else {
        console.log('emit-showAll');
        this.$emit('showAllData');
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1c5a50cf","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vote/Search.vue
var Search_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"search"},[_c('div',{staticClass:"form"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.key),expression:"key"}],attrs:{"type":"text","placeholder":"请输入关键字搜索"},domProps:{"value":(_vm.key)},on:{"input":function($event){if($event.target.composing){ return; }_vm.key=$event.target.value}}}),_vm._v(" "),_c('button',{on:{"click":_vm.search}},[_c('i')])])])}
var Search_staticRenderFns = []
var Search_esExports = { render: Search_render, staticRenderFns: Search_staticRenderFns }
/* harmony default export */ var vote_Search = (Search_esExports);
// CONCATENATED MODULE: ./src/components/vote/Search.vue
function Search_injectStyle (ssrContext) {
  __webpack_require__("OlYA")
}
var Search_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var Search___vue_template_functional__ = false
/* styles */
var Search___vue_styles__ = Search_injectStyle
/* scopeId */
var Search___vue_scopeId__ = "data-v-1c5a50cf"
/* moduleIdentifier (server only) */
var Search___vue_module_identifier__ = null
var Search_Component = Search_normalizeComponent(
  Search,
  vote_Search,
  Search___vue_template_functional__,
  Search___vue_styles__,
  Search___vue_scopeId__,
  Search___vue_module_identifier__
)

/* harmony default export */ var components_vote_Search = (Search_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vote/Nav.vue
//
//
//
//
//
//
//
//

/* harmony default export */ var Nav = ({
  name: "Nav",
  methods: {
    clickVote: function clickVote() {
      this.$router.push('/vote');
    },
    clickRank: function clickRank() {
      this.$router.push('/rank');
    },
    clickInfo: function clickInfo() {
      this.$router.push('/info');
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-b83531b0","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vote/Nav.vue
var Nav_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"nav"},[_c('div',{staticClass:"show",on:{"click":_vm.clickVote}},[_vm._v("投票展示")]),_vm._v(" "),_c('div',{staticClass:"rank",on:{"click":_vm.clickRank}},[_vm._v("实时排名")]),_vm._v(" "),_c('div',{staticClass:"info",on:{"click":_vm.clickInfo}},[_vm._v("活动说明")])])}
var Nav_staticRenderFns = []
var Nav_esExports = { render: Nav_render, staticRenderFns: Nav_staticRenderFns }
/* harmony default export */ var vote_Nav = (Nav_esExports);
// CONCATENATED MODULE: ./src/components/vote/Nav.vue
function Nav_injectStyle (ssrContext) {
  __webpack_require__("FA9p")
}
var Nav_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var Nav___vue_template_functional__ = false
/* styles */
var Nav___vue_styles__ = Nav_injectStyle
/* scopeId */
var Nav___vue_scopeId__ = "data-v-b83531b0"
/* moduleIdentifier (server only) */
var Nav___vue_module_identifier__ = null
var Nav_Component = Nav_normalizeComponent(
  Nav,
  vote_Nav,
  Nav___vue_template_functional__,
  Nav___vue_styles__,
  Nav___vue_scopeId__,
  Nav___vue_module_identifier__
)

/* harmony default export */ var components_vote_Nav = (Nav_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vote/Footer.vue
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Footer = ({
  name: "Footer",
  props: {
    selectedCount: {
      type: Number,
      default: 0
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6f6ba9ae","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vote/Footer.vue
var Footer_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"footer"},[_c('div',{staticClass:"select-count"},[_vm._v("\n    您已选择"+_vm._s(_vm.selectedCount)+"票\n  ")]),_vm._v(" "),_c('div',{staticClass:"submit-btn"},[_vm._v("提交")])])}
var Footer_staticRenderFns = []
var Footer_esExports = { render: Footer_render, staticRenderFns: Footer_staticRenderFns }
/* harmony default export */ var vote_Footer = (Footer_esExports);
// CONCATENATED MODULE: ./src/components/vote/Footer.vue
function Footer_injectStyle (ssrContext) {
  __webpack_require__("MXzs")
}
var Footer_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var Footer___vue_template_functional__ = false
/* styles */
var Footer___vue_styles__ = Footer_injectStyle
/* scopeId */
var Footer___vue_scopeId__ = "data-v-6f6ba9ae"
/* moduleIdentifier (server only) */
var Footer___vue_module_identifier__ = null
var Footer_Component = Footer_normalizeComponent(
  Footer,
  vote_Footer,
  Footer___vue_template_functional__,
  Footer___vue_styles__,
  Footer___vue_scopeId__,
  Footer___vue_module_identifier__
)

/* harmony default export */ var components_vote_Footer = (Footer_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vote/VoteDataItem.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var VoteDataItem = ({
  name: "VoteDataItem",
  props: {
    voteDataItem: {
      type: Object,
      default: null
    }
  },
  computed: {
    getPhotoUrl: function getPhotoUrl() {
      return function (imgName) {
        //return this.baseURL + imgName;
        return 'http://m.xhbycm.net/vote_2021/uploads/' + imgName;
      };
    }
  },
  methods: {
    inputChange: function inputChange() {
      if (this.checkedValue) {
        this.$emit('selected');
      } else {
        this.$emit('cancelSelected');
      }
    }
  },
  data: function data() {
    return {
      baseImgUrl: 'http://m.xhbycm.net/vote_2021/uploads/%E5%9B%BE%E7%89%871(4).png',
      checkedValue: this.voteDataItem.checkedValue
    };
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5a85c853","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vote/VoteDataItem.vue
var VoteDataItem_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{key:_vm.voteDataItem.id,staticClass:"vote-data-item"},[_c('div',{staticClass:"img"},[_c('img',{attrs:{"src":_vm.getPhotoUrl(_vm.voteDataItem.base_photo),"alt":""}})]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.voteDataItem.base_name))]),_vm._v(" "),_c('div',{staticClass:"vote-info"},[_c('label',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.checkedValue),expression:"checkedValue"}],attrs:{"type":"checkbox"},domProps:{"value":_vm.voteDataItem.id,"checked":_vm.checkedValue,"checked":Array.isArray(_vm.checkedValue)?_vm._i(_vm.checkedValue,_vm.voteDataItem.id)>-1:(_vm.checkedValue)},on:{"change":[function($event){var $$a=_vm.checkedValue,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=_vm.voteDataItem.id,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.checkedValue=$$a.concat([$$v]))}else{$$i>-1&&(_vm.checkedValue=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.checkedValue=$$c}},_vm.inputChange]}}),_vm._v(" "),_c('span',[_vm._v("选择投票")])]),_vm._v(" "),_c('span',{staticClass:"count"},[_vm._v(_vm._s(_vm.voteDataItem.voted_count)+"票")])])])}
var VoteDataItem_staticRenderFns = []
var VoteDataItem_esExports = { render: VoteDataItem_render, staticRenderFns: VoteDataItem_staticRenderFns }
/* harmony default export */ var vote_VoteDataItem = (VoteDataItem_esExports);
// CONCATENATED MODULE: ./src/components/vote/VoteDataItem.vue
function VoteDataItem_injectStyle (ssrContext) {
  __webpack_require__("TemG")
}
var VoteDataItem_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var VoteDataItem___vue_template_functional__ = false
/* styles */
var VoteDataItem___vue_styles__ = VoteDataItem_injectStyle
/* scopeId */
var VoteDataItem___vue_scopeId__ = "data-v-5a85c853"
/* moduleIdentifier (server only) */
var VoteDataItem___vue_module_identifier__ = null
var VoteDataItem_Component = VoteDataItem_normalizeComponent(
  VoteDataItem,
  vote_VoteDataItem,
  VoteDataItem___vue_template_functional__,
  VoteDataItem___vue_styles__,
  VoteDataItem___vue_scopeId__,
  VoteDataItem___vue_module_identifier__
)

/* harmony default export */ var components_vote_VoteDataItem = (VoteDataItem_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/vote/VoteData.vue
//
//
//
//
//
//
//
//
//



/* harmony default export */ var VoteData = ({
  name: "VoteData",
  components: {
    VoteDataItem: components_vote_VoteDataItem
  },
  methods: {
    selected: function selected(id) {
      console.log('selected--', id);
      this.$emit('selected', id);
    },
    cancelSelected: function cancelSelected(id) {
      console.log('cancelSelected--', id);
      this.$emit('cancelSelected', id);
    }
  },
  props: {
    votedata: {
      type: Array,
      default: []
    }
  },
  data: function data() {
    return {};
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-430d466d","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/vote/VoteData.vue
var VoteData_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vote-data"},_vm._l((_vm.votedata),function(item,index){return _c('vote-data-item',{key:item.id,attrs:{"vote-data-item":item},on:{"selected":function($event){return _vm.selected(item.id)},"cancelSelected":function($event){return _vm.cancelSelected(item.id)}}})}),1)}
var VoteData_staticRenderFns = []
var VoteData_esExports = { render: VoteData_render, staticRenderFns: VoteData_staticRenderFns }
/* harmony default export */ var vote_VoteData = (VoteData_esExports);
// CONCATENATED MODULE: ./src/components/vote/VoteData.vue
function VoteData_injectStyle (ssrContext) {
  __webpack_require__("DZ91")
}
var VoteData_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var VoteData___vue_template_functional__ = false
/* styles */
var VoteData___vue_styles__ = VoteData_injectStyle
/* scopeId */
var VoteData___vue_scopeId__ = "data-v-430d466d"
/* moduleIdentifier (server only) */
var VoteData___vue_module_identifier__ = null
var VoteData_Component = VoteData_normalizeComponent(
  VoteData,
  vote_VoteData,
  VoteData___vue_template_functional__,
  VoteData___vue_styles__,
  VoteData___vue_scopeId__,
  VoteData___vue_module_identifier__
)

/* harmony default export */ var components_vote_VoteData = (VoteData_Component.exports);

// EXTERNAL MODULE: ./src/assets/images/IndexBanner.png
var IndexBanner = __webpack_require__("XPOF");
var IndexBanner_default = /*#__PURE__*/__webpack_require__.n(IndexBanner);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/promise.js
var promise = __webpack_require__("//Fk");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// EXTERNAL MODULE: ./src/network/request.js
var request = __webpack_require__("0RrJ");

// CONCATENATED MODULE: ./src/network/voteListData.js
var voteData = [{
  "id": "331",
  "catelog_id": "4",
  "base_name": "001.E动力新阶层统战工作实践创新基地",
  "base_photo": "图片1(4).png",
  "voted_count": "33069"
}, {
  "id": "29",
  "catelog_id": "4",
  "base_name": "002.T80园区紫麓同心社",
  "base_photo": "2.jpg",
  "voted_count": "33488"
}, {
  "id": "261",
  "catelog_id": "4",
  "base_name": "003.九三学社盐城市大丰支社社会服务基地",
  "base_photo": "3(1).jpg",
  "voted_count": "34567"
}, {
  "id": "202",
  "catelog_id": "4",
  "base_name": "004.九连合作连云港博奥基地",
  "base_photo": "2021年7月15日，九三学社江苏省委专职副主委蒯建华来连，为连云港博奥“九连合作专家工作站”授牌。.jpg",
  "voted_count": "32762"
}, {
  "id": "283",
  "catelog_id": "1",
  "base_name": "005.三乡工程——朵米图研学基地",
  "base_photo": "封面(10).jpg",
  "voted_count": "31722"
}, {
  "id": "220",
  "catelog_id": "4",
  "base_name": "006.三胡故里",
  "base_photo": "1(13).jpg",
  "voted_count": "38185"
}, {
  "id": "336",
  "catelog_id": "4",
  "base_name": "007.丰县铸牢中华民族共同体意识展示馆",
  "base_photo": "6.png",
  "voted_count": "32007"
}, {
  "id": "219",
  "catelog_id": "3",
  "base_name": "008.王昆仑故居",
  "base_photo": "封面(1).jpg",
  "voted_count": "35651"
}, {
  "id": "126",
  "catelog_id": "4",
  "base_name": "009.王绍鏊纪念馆",
  "base_photo": "AG1Q2825.JPG",
  "voted_count": "32204"
}, {
  "id": "116",
  "catelog_id": "3",
  "base_name": "010.王选事迹陈列馆",
  "base_photo": "王选事迹陈列馆-(1).jpg",
  "voted_count": "35223"
}, {
  "id": "105",
  "catelog_id": "4",
  "base_name": "011.王淦昌故居（纪念馆）",
  "base_photo": "王淦昌故居.jpg",
  "voted_count": "32318"
}, {
  "id": "60",
  "catelog_id": "4",
  "base_name": "012.开山岛",
  "base_photo": "1(3).jpg",
  "voted_count": "34597"
}, {
  "id": "143",
  "catelog_id": "4",
  "base_name": "013.无锡市“运河同舟”",
  "base_photo": "1-“运河同舟”联盟同舟号(封面).jpg",
  "voted_count": "34620"
}, {
  "id": "149",
  "catelog_id": "4",
  "base_name": "014.无锡市总商会“党员之家”",
  "base_photo": "1-封面图.jpg",
  "voted_count": "33289"
}, {
  "id": "166",
  "catelog_id": "4",
  "base_name": "015.无锡高新区“物联网众创社区”",
  "base_photo": "1“才聚高新 汇智新吴”青年创客大赛（封面）.jpg",
  "voted_count": "31474"
}, {
  "id": "134",
  "catelog_id": "1",
  "base_name": "016.无锡惠山古镇",
  "base_photo": "纪念改革开放40周年惠山古镇同心实践联盟主题活动.jpg",
  "voted_count": "34290"
}, {
  "id": "98",
  "catelog_id": "4",
  "base_name": "017.木渎镇统一战线教育基地",
  "base_photo": "木渎镇统战基地1.jpg",
  "voted_count": "30575"
}, {
  "id": "271",
  "catelog_id": "3",
  "base_name": "018.太湖雪蚕桑文化园",
  "base_photo": "太湖雪蚕桑文化园-基地申报5.jpg",
  "voted_count": "32005"
}, {
  "id": "259",
  "catelog_id": "4",
  "base_name": "019.中共华中工委纪念馆",
  "base_photo": "华中工委照片1.jpg",
  "voted_count": "32069"
}, {
  "id": "189",
  "catelog_id": "4",
  "base_name": "020.中共镇江地方史馆 镇江方志馆",
  "base_photo": "db4732e6634c6190c55e349e49418467.jpg",
  "voted_count": "32107"
}, {
  "id": "99",
  "catelog_id": "4",
  "base_name": "021.中国人民解放军海军诞生地纪念馆",
  "base_photo": "海军纪念馆1.jpg",
  "voted_count": "33998"
}, {
  "id": "95",
  "catelog_id": "4",
  "base_name": "022.中国医药城",
  "base_photo": "2- 中国医药城.JPG",
  "voted_count": "32680"
}, {
  "id": "317",
  "catelog_id": "4",
  "base_name": "023.中国乱针绣文化产业园",
  "base_photo": "1-产业园全景.jpg",
  "voted_count": "29788"
}, {
  "id": "121",
  "catelog_id": "4",
  "base_name": "024.中国刺绣艺术馆",
  "base_photo": "基地环境照片1.jpg",
  "voted_count": "31414"
}, {
  "id": "287",
  "catelog_id": "1",
  "base_name": "025.中国矿业大学“科技报国”基地",
  "base_photo": "1-华洋通讯科技股份有限公司（封面）(1).jpg",
  "voted_count": "28885"
}, {
  "id": "171",
  "catelog_id": "4",
  "base_name": "026.中国宜兴陶瓷博物馆",
  "base_photo": "1-“遇见宜兴”海峡两岸青年陶文化体验营（封面）.jpg",
  "voted_count": "30938"
}, {
  "id": "108",
  "catelog_id": "4",
  "base_name": "027.中国南社纪念馆",
  "base_photo": "微信图片_20210727153756.jpg",
  "voted_count": "26555"
}, {
  "id": "206",
  "catelog_id": "4",
  "base_name": "028.中国醋文化博物馆",
  "base_photo": "微信图片_20210805170426.jpg",
  "voted_count": "26674"
}, {
  "id": "53",
  "catelog_id": "3",
  "base_name": "029.毛啸岑旧居",
  "base_photo": "f7aabe1072f91bb4cf34fac60761f92.jpg",
  "voted_count": "20777"
}, {
  "id": "36",
  "catelog_id": "4",
  "base_name": "030.邓演达烈士墓",
  "base_photo": "DSC_8499-1.jpg",
  "voted_count": "20402"
}, {
  "id": "327",
  "catelog_id": "4",
  "base_name": "031.“双东”统战文化街区",
  "base_photo": "11f1699ba6465ca1435bfc0472cf084.jpg",
  "voted_count": "13103"
}, {
  "id": "111",
  "catelog_id": "4",
  "base_name": "032.双塔街道里河社区民族教育基地",
  "base_photo": "里河社区门口民族氛围布置.jpg",
  "voted_count": "13466"
}, {
  "id": "272",
  "catelog_id": "4",
  "base_name": "033.玉涵堂“非遗新动力”",
  "base_photo": "DSCF0961.JPG",
  "voted_count": "11782"
}, {
  "id": "106",
  "catelog_id": "4",
  "base_name": "034.未来之城",
  "base_photo": "DSC05586.JPG",
  "voted_count": "14897"
}, {
  "id": "330",
  "catelog_id": "4",
  "base_name": "035.邗江区港澳台侨企业服务联盟",
  "base_photo": "全市统战部长来邗江实地观摩港澳台侨企业服务联盟建设情况.JPG",
  "voted_count": "10635"
}, {
  "id": "150",
  "catelog_id": "4",
  "base_name": "036.古运苑社区“民族团结工作进社区示范点”",
  "base_photo": "1-红石榴家园场内展示（封面）.jpg",
  "voted_count": "12822"
}, {
  "id": "280",
  "catelog_id": "4",
  "base_name": "037.古淮河文化风光带",
  "base_photo": "09古淮河生态公园.JPG",
  "voted_count": "14794"
}, {
  "id": "270",
  "catelog_id": "4",
  "base_name": "038.东纺•织家",
  "base_photo": "0cf8279ad17069a18460f170b582b3b.jpg",
  "voted_count": "11561"
}, {
  "id": "13",
  "catelog_id": "5",
  "base_name": "039.东南大学海峡两岸交流合作实践基地",
  "base_photo": "1东南大学校史馆.jpg",
  "voted_count": "11325"
}, {
  "id": "154",
  "catelog_id": "4",
  "base_name": "040.北仓门生活艺术中心",
  "base_photo": "1北仓门外景（封面）.JPG",
  "voted_count": "11708"
}, {
  "id": "97",
  "catelog_id": "4",
  "base_name": "041.叶圣陶纪念馆",
  "base_photo": "【甪直叶圣陶纪念馆】1.png",
  "voted_count": "12975"
}, {
  "id": "4",
  "catelog_id": "3",
  "base_name": "042.史良故居",
  "base_photo": "史良.jpg",
  "voted_count": "11553"
}, {
  "id": "353",
  "catelog_id": "4",
  "base_name": "043.四聚工程·传统文化创客空间",
  "base_photo": "b04bda51da9350b8fc222c6a14b0f16.jpg",
  "voted_count": "9062"
}, {
  "id": "352",
  "catelog_id": "4",
  "base_name": "044.四聚工程·启迪之星新潮汇",
  "base_photo": "2(6).jpg",
  "voted_count": "9893"
}, {
  "id": "351",
  "catelog_id": "4",
  "base_name": "045.四聚工程·彭城新领地",
  "base_photo": "e9d8b4efed426f4a96fb099eb10b57f.jpg",
  "voted_count": "9065"
}, {
  "id": "184",
  "catelog_id": "4",
  "base_name": "046.句容市茅山道院",
  "base_photo": "微信图片_20210723164803.jpg",
  "voted_count": "10962"
}, {
  "id": "229",
  "catelog_id": "4",
  "base_name": "047.句容茅山",
  "base_photo": "787d206aad745fd7c89afd25bc940c2.jpg",
  "voted_count": "9906"
}, {
  "id": "295",
  "catelog_id": "4",
  "base_name": "048.宁蒗支教展馆",
  "base_photo": "8d461a73c3cc39569e4ffb76272b123.jpg",
  "voted_count": "12134"
}, {
  "id": "277",
  "catelog_id": "4",
  "base_name": "049.民进会员之家（近禅书院）",
  "base_photo": "IMG_20200729_162653.jpg",
  "voted_count": "9969"
}, {
  "id": "161",
  "catelog_id": "3",
  "base_name": "050.民进江阴市委中心基地",
  "base_photo": "20200908建国70周年闪唱《我爱你中国》闪唱录制.jpg",
  "voted_count": "10260"
}, {
  "id": "214",
  "catelog_id": "4",
  "base_name": "051.民进宿迁宿城总支“会员之家”",
  "base_photo": "2020年12月27日民进宿迁宿城总支“会员之家”揭牌.jpg",
  "voted_count": "10005"
}, {
  "id": "132",
  "catelog_id": "4",
  "base_name": "052.民建连云港市委会会员之家",
  "base_photo": "1-在民建会员之家开展组织活动.jpg",
  "voted_count": "11296"
}, {
  "id": "346",
  "catelog_id": "4",
  "base_name": "053.民建徐州市委会员之家",
  "base_photo": "徐州民建鼓楼会员之家图片4.jpg",
  "voted_count": "9240"
}, {
  "id": "314",
  "catelog_id": "4",
  "base_name": "054.民革扬州市委“中山博爱之家”“政协委员之家”",
  "base_photo": "图片1(2).png",
  "voted_count": "9656"
}, {
  "id": "130",
  "catelog_id": "4",
  "base_name": "055.民革连云港市委会“中山博爱之家”",
  "base_photo": "民革中山博爱公益使者之家 - 副本.jpg",
  "voted_count": "8675"
}, {
  "id": "236",
  "catelog_id": "3",
  "base_name": "056.民革南京市溧水区“中山博爱之家”",
  "base_photo": "封面(9).jpg",
  "voted_count": "13724"
}, {
  "id": "230",
  "catelog_id": "3",
  "base_name": "057.民革泰州市高港区总支“中山博爱之家”",
  "base_photo": "封面(5).jpg",
  "voted_count": "9824"
}, {
  "id": "224",
  "catelog_id": "3",
  "base_name": "058.民革党史陈列馆（南社通讯处旧址）",
  "base_photo": "封面(3).jpg",
  "voted_count": "9311"
}, {
  "id": "232",
  "catelog_id": "3",
  "base_name": "059.民革徐州市铜山区党员之家",
  "base_photo": "封面(6).jpg",
  "voted_count": "9401"
}, {
  "id": "233",
  "catelog_id": "3",
  "base_name": "060.民革淮安市委会中山博爱之家",
  "base_photo": "封面(7).jpg",
  "voted_count": "9864"
}, {
  "id": "278",
  "catelog_id": "4",
  "base_name": "061.民革淮安市洪泽区中山博爱之家",
  "base_photo": "民革江苏省委副主委孔祥平参加洪泽区中山博爱基金会成立仪式.jpg",
  "voted_count": "9678"
}, {
  "id": "210",
  "catelog_id": "4",
  "base_name": "062.民革宿城区总支阳光驿站",
  "base_photo": "民革党员走入乡村小学.jpg",
  "voted_count": "12650"
}, {
  "id": "262",
  "catelog_id": "4",
  "base_name": "063.民盟盐城市委花吉村社会服务基地",
  "base_photo": "1(17).JPG",
  "voted_count": "10069"
}, {
  "id": "32",
  "catelog_id": "4",
  "base_name": "064.民盟栖霞区基层委员会“盟员之家”",
  "base_photo": "1中共江苏省委常委、统战部长杨岳同志视察调研栖霞民盟盟员之家，市委常委、统战部长华静陪同参观调研.jpg",
  "voted_count": "9679"
}, {
  "id": "217",
  "catelog_id": "4",
  "base_name": "065.扬中市新坝镇新治村村民委员会",
  "base_photo": "微信图片_20210806164028.jpg",
  "voted_count": "9301"
}, {
  "id": "170",
  "catelog_id": "4",
  "base_name": "066.扬中统战展示馆",
  "base_photo": "IMG_0057.JPG",
  "voted_count": "9749"
}, {
  "id": "312",
  "catelog_id": "4",
  "base_name": "067.扬州大明寺",
  "base_photo": "CDD3E71BB1FF6B92BA308B262D2CB2BF.jpg",
  "voted_count": "10469"
}, {
  "id": "24",
  "catelog_id": "5",
  "base_name": "068.扬州大学“海外惠侨工程·中餐繁荣基地”",
  "base_photo": "封面首页-国际青年为扬州美食代言.jpg",
  "voted_count": "10044"
}, {
  "id": "321",
  "catelog_id": "4",
  "base_name": "069.扬州市解放桥社区“红石榴家园”",
  "base_photo": "4d9b2b3478d4b1f3b9739f97dfef83f.jpg",
  "voted_count": "9063"
}, {
  "id": "328",
  "catelog_id": "4",
  "base_name": "070.扬州尼尔工程塑料有限公司",
  "base_photo": "01尼尔公司外景.jpg",
  "voted_count": "9588"
}, {
  "id": "313",
  "catelog_id": "4",
  "base_name": "071.扬州民进基础教育教师发展研究会",
  "base_photo": "e3b08c469442fa5d2d2977c942255be.png",
  "voted_count": "9184"
}, {
  "id": "286",
  "catelog_id": "4",
  "base_name": "072.百年“文博”同心基地",
  "base_photo": "IMG_8252.JPG",
  "voted_count": "11969"
}, {
  "id": "288",
  "catelog_id": "4",
  "base_name": "073.匠心筑梦同心教育基地",
  "base_photo": "IMG_7199(20210711-200645).JPG",
  "voted_count": "10851"
}, {
  "id": "43",
  "catelog_id": "4",
  "base_name": "074.达浦生纪念馆",
  "base_photo": "场馆内部1.jpg",
  "voted_count": "8883"
}, {
  "id": "48",
  "catelog_id": "4",
  "base_name": "075.同乡共井·锦创星空（南京好朋友）",
  "base_photo": "2(2).jpg",
  "voted_count": "8309"
}, {
  "id": "40",
  "catelog_id": "4",
  "base_name": "076.“同橙•共铸”中华民族共同体意识云基地",
  "base_photo": "“同橙·共铸”中华民族共同体意识云基地2.jpg",
  "voted_count": "8242"
}, {
  "id": "324",
  "catelog_id": "4",
  "base_name": "077.朱自清故居",
  "base_photo": "100_4187.JPG",
  "voted_count": "10822"
}, {
  "id": "197",
  "catelog_id": "4",
  "base_name": "078.朱瑞将军纪念馆",
  "base_photo": "1(9).jpg",
  "voted_count": "10497"
}, {
  "id": "66",
  "catelog_id": "4",
  "base_name": "079.华罗庚纪念馆",
  "base_photo": "2(4).jpg",
  "voted_count": "10137"
}, {
  "id": "222",
  "catelog_id": "4",
  "base_name": "080.华侨华人创新创业服务中心",
  "base_photo": "QQ图片20191213130709.jpg",
  "voted_count": "8212"
}, {
  "id": "45",
  "catelog_id": "4",
  "base_name": "081.伊诺光点两岸青年创梦基地",
  "base_photo": "20191118宣传图大图.jpg",
  "voted_count": "7372"
}, {
  "id": "84",
  "catelog_id": "4",
  "base_name": "082.刘国钧故居",
  "base_photo": "封面照片.jpg",
  "voted_count": "9125"
}, {
  "id": "26",
  "catelog_id": "5",
  "base_name": "083.刘国钧教育同心荟",
  "base_photo": "载体之刘国钧雕塑.jpg",
  "voted_count": "8153"
}, {
  "id": "35",
  "catelog_id": "4",
  "base_name": "084.江宁“民进之家”",
  "base_photo": "2(1).jpg",
  "voted_count": "8249"
}, {
  "id": "37",
  "catelog_id": "4",
  "base_name": "085.江宁区民主党派乡村振兴实践基地",
  "base_photo": "江宁区民主党派之家1.JPG",
  "voted_count": "7545"
}, {
  "id": "172",
  "catelog_id": "4",
  "base_name": "086.江阴市天华艺术学校华文教育基地",
  "base_photo": "1（封面）在中国驻瑞大使馆举办的庆祝国庆暨中瑞建交65周年招待会上成功献演“天华之声”中国民族交响音乐会.JPG",
  "voted_count": "8021"
}, {
  "id": "25",
  "catelog_id": "5",
  "base_name": "087.江苏大学强农兴农同心教育实践基地",
  "base_photo": "农机大院外景.jpg",
  "voted_count": "8133"
}, {
  "id": "256",
  "catelog_id": "4",
  "base_name": "088.江苏吉华化工有限公司",
  "base_photo": "组织公司党员在基地党旗前进行入党誓词.JPG",
  "voted_count": "8398"
}, {
  "id": "21",
  "catelog_id": "5",
  "base_name": "089.江苏师大侨务同心教育实践基地",
  "base_photo": "1我校“侨史侨情筑同心”教育实践基地室外展示区域.jpg",
  "voted_count": "7804"
}, {
  "id": "291",
  "catelog_id": "4",
  "base_name": "090.江苏网络文学创意产业园",
  "base_photo": "52b941471b8b17a300fcf3126fd58f3.jpg",
  "voted_count": "7612"
}, {
  "id": "85",
  "catelog_id": "4",
  "base_name": "091.江苏南极机械有限责任公司",
  "base_photo": "微信图片_202107091033572.jpg",
  "voted_count": "7065"
}, {
  "id": "109",
  "catelog_id": "4",
  "base_name": "092.江苏省口岸中学",
  "base_photo": "民族团结教育主题馆.jpg",
  "voted_count": "8022"
}, {
  "id": "62",
  "catelog_id": "1",
  "base_name": "093.江苏省中医院“中医惠侨基地”",
  "base_photo": "图片1.png",
  "voted_count": "7363"
}, {
  "id": "208",
  "catelog_id": "2",
  "base_name": "094.江苏省归国留学人员实践创新基地",
  "base_photo": "封面(2).jpg",
  "voted_count": "7070"
}, {
  "id": "254",
  "catelog_id": "4",
  "base_name": "095.江苏省杂技团",
  "base_photo": "1(16).JPG",
  "voted_count": "7977"
}, {
  "id": "246",
  "catelog_id": "2",
  "base_name": "096.江苏省宗教公益培训基地爱德基金会",
  "base_photo": "爱德封面.jpg",
  "voted_count": "6589"
}, {
  "id": "86",
  "catelog_id": "4",
  "base_name": "097.江苏省泰兴市虹桥镇桃园村",
  "base_photo": "微信图片_20210722172148.jpg",
  "voted_count": "7425"
}, {
  "id": "120",
  "catelog_id": "4",
  "base_name": "098.江苏省海州高级中学华文教育基地",
  "base_photo": "荷兰学生互访活动之参观桥头堡.jpg",
  "voted_count": "6720"
}, {
  "id": "275",
  "catelog_id": "4",
  "base_name": "099.江苏省淮州中学",
  "base_photo": "省委常委、省委统战部部长杨岳等领导莅临我校调研指导.jpg",
  "voted_count": "7207"
}, {
  "id": "42",
  "catelog_id": "4",
  "base_name": "100.江浦高级中学民族工作“红石榴家园”",
  "base_photo": "6-校园文化浸润.JPG",
  "voted_count": "6503"
}, {
  "id": "234",
  "catelog_id": "4",
  "base_name": "101.安丰古镇中华文化海外交流基地",
  "base_photo": "雨后古街.jpg",
  "voted_count": "11121"
}, {
  "id": "316",
  "catelog_id": "4",
  "base_name": "102.农工党扬州市委医疗专家工作站",
  "base_photo": "微信图片_20210623155658.jpg",
  "voted_count": "6796"
}, {
  "id": "101",
  "catelog_id": "4",
  "base_name": "103.农工党泰州市委“农工之家”",
  "base_photo": "大标墙.jpg",
  "voted_count": "6974"
}, {
  "id": "255",
  "catelog_id": "4",
  "base_name": "104.农工党盐城市一院总支健康服务基地",
  "base_photo": "图片1 农工党盐城市第一人民医院总支健康服务基地签约.jpg",
  "voted_count": "9058"
}, {
  "id": "297",
  "catelog_id": "4",
  "base_name": "105.农工党党史教育馆（淮安）",
  "base_photo": "党史教育馆1.jpg",
  "voted_count": "6496"
}, {
  "id": "350",
  "catelog_id": "4",
  "base_name": "106.农工党徐州市委“农工之家”",
  "base_photo": "4.jpg",
  "voted_count": "6757"
}, {
  "id": "57",
  "catelog_id": "3",
  "base_name": "107.农工党常州革命活动史料陈列室",
  "base_photo": "2(3).jpg",
  "voted_count": "5953"
}, {
  "id": "31",
  "catelog_id": "4",
  "base_name": "108.孙中山纪念馆民革党员教育基地",
  "base_photo": "1孙中山纪念馆外景.jpg",
  "voted_count": "8030"
}, {
  "id": "303",
  "catelog_id": "4",
  "base_name": "109.如皋市花木盆景产业实践创新基地",
  "base_photo": "微信图片_20210809175101.jpg",
  "voted_count": "8641"
}, {
  "id": "240",
  "catelog_id": "1",
  "base_name": "110.红创汇",
  "base_photo": "3-“红创汇”实践基地建设照片 6.JPG",
  "voted_count": "5841"
}, {
  "id": "7",
  "catelog_id": "2",
  "base_name": "111.红豆集团",
  "base_photo": "红豆集团党建馆.jpg",
  "voted_count": "6470"
}, {
  "id": "334",
  "catelog_id": "4",
  "base_name": "112.运河支队抗日纪念馆",
  "base_photo": "1(30).jpg",
  "voted_count": "6927"
}, {
  "id": "338",
  "catelog_id": "4",
  "base_name": "113.苏北统一战线教育实践基地",
  "base_photo": "3(3).jpg",
  "voted_count": "7087"
}, {
  "id": "22",
  "catelog_id": "5",
  "base_name": "114.苏州大学博物馆校史陈列馆",
  "base_photo": "1-2021年7月10日，第十二届全国政协副主席，九三学社中央主席韩启德一行莅临苏州大学调研.png",
  "voted_count": "6974"
}, {
  "id": "122",
  "catelog_id": "4",
  "base_name": "115.苏州创业园",
  "base_photo": "0-中国苏州创业园 产业格局（苏州市集成电路创新中心）.jpg",
  "voted_count": "6107"
}, {
  "id": "114",
  "catelog_id": "4",
  "base_name": "116.苏州纳米城",
  "base_photo": "苏州纳米城 (1).jpg",
  "voted_count": "6089"
}, {
  "id": "107",
  "catelog_id": "4",
  "base_name": "117.苏州商会博物馆",
  "base_photo": "DSCF1032.JPG",
  "voted_count": "5823"
}, {
  "id": "103",
  "catelog_id": "4",
  "base_name": "118.苏州御窑金砖博物馆",
  "base_photo": "07fffc34ddd365aec4e0fb761bb23ac.jpg",
  "voted_count": "6000"
}, {
  "id": "284",
  "catelog_id": "1",
  "base_name": "119.苏州路之遥科技股份有限公司",
  "base_photo": "封面(11).jpg",
  "voted_count": "5445"
}, {
  "id": "5",
  "catelog_id": "3",
  "base_name": "120.李公朴故居、生平事迹展览馆",
  "base_photo": "李公朴故居.jpeg",
  "voted_count": "6130"
}, {
  "id": "309",
  "catelog_id": "4",
  "base_name": "121.李昌钰刑侦科学博物馆",
  "base_photo": "博物馆外观.JPG",
  "voted_count": "8174"
}, {
  "id": "90",
  "catelog_id": "4",
  "base_name": "122.杨延修纪念馆",
  "base_photo": "杨延修纪念馆01.jpg",
  "voted_count": "7675"
}, {
  "id": "160",
  "catelog_id": "3",
  "base_name": "123.连云港大华文化交流中心",
  "base_photo": "2018年5月17日，民进省委“同心助力 唤起清风”反腐倡廉主题漫画巡展（连云港站）在文化惠民基地举办.JPG",
  "voted_count": "5423"
}, {
  "id": "136",
  "catelog_id": "4",
  "base_name": "124.连云港市“眼科普”农工党社会服务基地",
  "base_photo": "9T5A3926.JPG",
  "voted_count": "5561"
}, {
  "id": "181",
  "catelog_id": "4",
  "base_name": "125.连云港市东海县新阶层创新创业基地",
  "base_photo": "微信图片_20210809175746.jpg",
  "voted_count": "5223"
}, {
  "id": "119",
  "catelog_id": "4",
  "base_name": "126.连云港市新海街道星化社区“侨之家”",
  "base_photo": "致公党市委市侨办在星化社区举办送春联进“侨务社区”活动.jpg",
  "voted_count": "5333"
}, {
  "id": "248",
  "catelog_id": "4",
  "base_name": "127.连云港市灌云县同心圆广场",
  "base_photo": "微信图片_20210810124212.jpg",
  "voted_count": "5206"
}, {
  "id": "129",
  "catelog_id": "4",
  "base_name": "128.连云港市灌南县红色文化博物馆",
  "base_photo": "微信图片_20210624095208.jpg",
  "voted_count": "5343"
}, {
  "id": "131",
  "catelog_id": "4",
  "base_name": "129.连云港民盟“一带一路”研究院",
  "base_photo": "7连云港民盟“一带一路”交汇点博物馆1 - 副本.jpg",
  "voted_count": "5218"
}, {
  "id": "205",
  "catelog_id": "4",
  "base_name": "130.连云港高级中学",
  "base_photo": "微信图片_20210809164723.jpg",
  "voted_count": "5698"
}, {
  "id": "80",
  "catelog_id": "4",
  "base_name": "132.吴阶平纪念馆",
  "base_photo": "1纪念馆大门.JPG",
  "voted_count": "5722"
}, {
  "id": "162",
  "catelog_id": "3",
  "base_name": "133.吴贻芳纪念馆",
  "base_photo": "微信图片_20210809100146.jpg",
  "voted_count": "5715"
}, {
  "id": "139",
  "catelog_id": "4",
  "base_name": "134.吴健雄陈列馆",
  "base_photo": "吴健雄陈列馆大门.jpg",
  "voted_count": "5270"
}, {
  "id": "320",
  "catelog_id": "4",
  "base_name": "135.吴登云事迹展览馆",
  "base_photo": "a79ab704e54f1d4e5ed4a4ba238bce1.jpg",
  "voted_count": "8691"
}, {
  "id": "147",
  "catelog_id": "4",
  "base_name": "136.吴韵同心荟",
  "base_photo": "1吴韵同心荟基地场地（封面）.jpg",
  "voted_count": "5226"
}, {
  "id": "46",
  "catelog_id": "4",
  "base_name": "137.谷里街道商会",
  "base_photo": "62ae995d2df7c03fcc375539c2df9da.jpg",
  "voted_count": "5194"
}, {
  "id": "163",
  "catelog_id": "4",
  "base_name": "138.冷遹纪念馆",
  "base_photo": "mmexport1624000608066.jpg",
  "voted_count": "5070"
}, {
  "id": "337",
  "catelog_id": "4",
  "base_name": "139.沛县文化馆华侨文化交流基地",
  "base_photo": "侨眷学员参演沛县风筝节开幕式.jpg",
  "voted_count": "5175"
}, {
  "id": "87",
  "catelog_id": "4",
  "base_name": "140.沙沟古镇",
  "base_photo": "1(5).jpg",
  "voted_count": "5234"
}, {
  "id": "302",
  "catelog_id": "4",
  "base_name": "141.泛书房“星火联盟”基地",
  "base_photo": "泛书房“星火联盟”新阶层主题馆.JPG",
  "voted_count": "7132"
}, {
  "id": "335",
  "catelog_id": "4",
  "base_name": "142.启迪之星（丰县）孵化基地",
  "base_photo": "1-基地前台.JPG",
  "voted_count": "4922"
}, {
  "id": "102",
  "catelog_id": "4",
  "base_name": "143.张家港市民族团结进步主题教育馆",
  "base_photo": "2020年11月12日国家民委李钟协来参观民族团结进步主题教育馆.JPG",
  "voted_count": "4921"
}, {
  "id": "300",
  "catelog_id": "4",
  "base_name": "144.张謇纪念馆",
  "base_photo": "1(1).png",
  "voted_count": "8880"
}, {
  "id": "231",
  "catelog_id": "4",
  "base_name": "145.陆小波故居",
  "base_photo": "陆小波故居2.jpg",
  "voted_count": "5033"
}, {
  "id": "64",
  "catelog_id": "4",
  "base_name": "146.青果巷",
  "base_photo": "1青果巷.JPG",
  "voted_count": "5001"
}, {
  "id": "47",
  "catelog_id": "4",
  "base_name": "147.青柠盟社区",
  "base_photo": "苏宁青创园展厅-01.jpg",
  "voted_count": "4797"
}, {
  "id": "186",
  "catelog_id": "4",
  "base_name": "148.茅以升纪念馆",
  "base_photo": "户外雕像(1).JPG",
  "voted_count": "5510"
}, {
  "id": "310",
  "catelog_id": "4",
  "base_name": "149.林西村同心圆政治生活馆",
  "base_photo": "1(27).JPG",
  "voted_count": "7322"
}, {
  "id": "27",
  "catelog_id": "4",
  "base_name": "150.松风阁南京市民主党派之家",
  "base_photo": "松风阁1.jpg",
  "voted_count": "5032"
}, {
  "id": "239",
  "catelog_id": "1",
  "base_name": "151.雨山网虹汇",
  "base_photo": "微信图片_202108061215212.jpg",
  "voted_count": "4634"
}, {
  "id": "10",
  "catelog_id": "2",
  "base_name": "152.雨花台烈士纪念馆",
  "base_photo": "雨花台烈士陵园照片.jpg",
  "voted_count": "6812"
}, {
  "id": "354",
  "catelog_id": "4",
  "base_name": "153.欧洲半导体海归人才创业园",
  "base_photo": "1814d58d714bc988c3547a3a8ecd336.jpg",
  "voted_count": "4890"
}, {
  "id": "155",
  "catelog_id": "4",
  "base_name": "154.国家超级计算无锡中心",
  "base_photo": "1超算中心（封面）.jpg",
  "voted_count": "5537"
}, {
  "id": "123",
  "catelog_id": "4",
  "base_name": "155.和合之家",
  "base_photo": "IMG_6279.JPG",
  "voted_count": "4715"
}, {
  "id": "54",
  "catelog_id": "3",
  "base_name": "156.季方史料陈列馆",
  "base_photo": "微信图片_20210621135056.jpg",
  "voted_count": "7516"
}, {
  "id": "55",
  "catelog_id": "3",
  "base_name": "157.季方生平展厅",
  "base_photo": "季方生平展厅内景1.jpg",
  "voted_count": "6343"
}, {
  "id": "75",
  "catelog_id": "4",
  "base_name": "158.周有光图书馆",
  "base_photo": "周有光-1.JPG",
  "voted_count": "5202"
}, {
  "id": "11",
  "catelog_id": "2",
  "base_name": "159.周恩来纪念馆",
  "base_photo": "周恩来纪念馆主馆.jpg",
  "voted_count": "10018"
}, {
  "id": "118",
  "catelog_id": "3",
  "base_name": "160.周培源故居",
  "base_photo": "周培源故居 (5).jpg",
  "voted_count": "5825"
}, {
  "id": "128",
  "catelog_id": "4",
  "base_name": "161.法起寺",
  "base_photo": "法起寺2.jpg",
  "voted_count": "5049"
}, {
  "id": "269",
  "catelog_id": "3",
  "base_name": "162.泓德堂“致公之家”",
  "base_photo": "天宁基层委在泓德堂举办癌症预防健康知识讲座.jpg",
  "voted_count": "4650"
}, {
  "id": "355",
  "catelog_id": "4",
  "base_name": "163.宗教中国化邳州品牌示范实践基地",
  "base_photo": "793af64df50a6d2ea1d643b466fbc41.jpg",
  "voted_count": "4961"
}, {
  "id": "176",
  "catelog_id": "4",
  "base_name": "164.宜兴市杨巷乡贤文化博物馆",
  "base_photo": "1-（封面）乡贤会客厅由宗顺留将军题词.JPG",
  "voted_count": "6054"
}, {
  "id": "279",
  "catelog_id": "4",
  "base_name": "165.赵朱木兰文化中心",
  "base_photo": "图片 (4).jpg",
  "voted_count": "4806"
}, {
  "id": "142",
  "catelog_id": "4",
  "base_name": "166.荣毅仁纪念馆",
  "base_photo": "1-荣毅仁纪念馆（封面）.jpg",
  "voted_count": "5768"
}, {
  "id": "17",
  "catelog_id": "5",
  "base_name": "167.南工大“四海同心”亚青村同心家园",
  "base_photo": "1-同心家园--党派团体简介长廊1.jpg",
  "voted_count": "5038"
}, {
  "id": "12",
  "catelog_id": "5",
  "base_name": "168.南京大学“五二〇”爱国民主运动教育基地",
  "base_photo": "南京大学“五二〇”爱国民主运动教育基地.jpg",
  "voted_count": "5617"
}, {
  "id": "20",
  "catelog_id": "5",
  "base_name": "169.南京中医药大学“茧斋”干祖望先生书房",
  "base_photo": "1茧斋展厅.JPG",
  "voted_count": "5718"
}, {
  "id": "28",
  "catelog_id": "4",
  "base_name": "170.南京中国科举博物馆",
  "base_photo": "科举博物馆.jpg",
  "voted_count": "5484"
}, {
  "id": "290",
  "catelog_id": "4",
  "base_name": "171.南京市“石榴家园”",
  "base_photo": "2(5).jpg",
  "voted_count": "5293"
}, {
  "id": "49",
  "catelog_id": "4",
  "base_name": "172.南京市万达汇",
  "base_photo": "1(2).jpg",
  "voted_count": "5365"
}, {
  "id": "238",
  "catelog_id": "1",
  "base_name": "173.南京市江宁区同心圆广场",
  "base_photo": "同心圆广场2.jpg",
  "voted_count": "5297"
}, {
  "id": "253",
  "catelog_id": "3",
  "base_name": "174.南京市雨花台区“致公之家”",
  "base_photo": "2018-12-5 致公党中央蒋作君常务副主席、康凯副部长、江苏省委会麻建国主委、南京市主委胡勤刚共同为雨花台区综合支部“致公之家”揭牌。.jpg",
  "voted_count": "5314"
}, {
  "id": "58",
  "catelog_id": "1",
  "base_name": "175.南京市金陵小学华文教育基地",
  "base_photo": "金小 优秀统战基地案例报送表（港澳台工作处）新1294.jpg",
  "voted_count": "5509"
}, {
  "id": "44",
  "catelog_id": "4",
  "base_name": "176.南京市港澳台海外青年培训中心",
  "base_photo": "W2.jpg",
  "voted_count": "5071"
}, {
  "id": "52",
  "catelog_id": "4",
  "base_name": "177.南京市翠竹园社区侨胞之家",
  "base_photo": "侨胞之家.jpg",
  "voted_count": "5155"
}, {
  "id": "33",
  "catelog_id": "4",
  "base_name": "178.南京民间抗日战争博物馆",
  "base_photo": "DSC_3432_副本.jpg",
  "voted_count": "6156"
}, {
  "id": "252",
  "catelog_id": "3",
  "base_name": "179.南京托马斯实验学校“致公之家”",
  "base_photo": "引凤工程·“暖心陪伴”留学生家长江苏站活动在托马斯举办.jpg",
  "voted_count": "5025"
}, {
  "id": "59",
  "catelog_id": "1",
  "base_name": "180.南京师范大学华文教育基地",
  "base_photo": "1-2019年示范华校校长研习班.png",
  "voted_count": "5857"
}, {
  "id": "15",
  "catelog_id": "5",
  "base_name": "181.南京农业大学金善宝科教兴农工作坊",
  "base_photo": "0 （封面图片）同心茶叙2.jpg",
  "voted_count": "5497"
}, {
  "id": "19",
  "catelog_id": "5",
  "base_name": "182.南京医科大学“同心共筑健康梦”统战教育实践基地",
  "base_photo": "1-基地文化墙.JPG",
  "voted_count": "5943"
}, {
  "id": "18",
  "catelog_id": "5",
  "base_name": "183.南京财经大学“同心文化书苑”",
  "base_photo": "1省委常委、统战部部长杨岳调研考察“同心文化书苑”.jpg",
  "voted_count": "5987"
}, {
  "id": "135",
  "catelog_id": "1",
  "base_name": "184.南京国防园",
  "base_photo": "展馆-军史馆.jpg",
  "voted_count": "5888"
}, {
  "id": "16",
  "catelog_id": "5",
  "base_name": "185.南京信息工程大学“大气•同心”基地",
  "base_photo": "1-大气•同心教育实践基地.jpg",
  "voted_count": "10624"
}, {
  "id": "14",
  "catelog_id": "5",
  "base_name": "186.南京理工大学“耕耘坊”",
  "base_photo": "1-江苏高校统一战线同心教育实践基地联盟成员单位合影.jpg",
  "voted_count": "5973"
}, {
  "id": "307",
  "catelog_id": "4",
  "base_name": "187.南通“华创苑”",
  "base_photo": "1(25).jpg",
  "voted_count": "7980"
}, {
  "id": "299",
  "catelog_id": "4",
  "base_name": "188.南通中华慈善博物馆",
  "base_photo": "1(23).jpg",
  "voted_count": "8042"
}, {
  "id": "304",
  "catelog_id": "4",
  "base_name": "189.南通市如东县“新文汇”",
  "base_photo": "1(24).jpg",
  "voted_count": "8114"
}, {
  "id": "306",
  "catelog_id": "4",
  "base_name": "190.南通市党外知识分子实践创新基地",
  "base_photo": "ae718c2554285e9ed2c91bf383fb984.jpg",
  "voted_count": "7913"
}, {
  "id": "296",
  "catelog_id": "4",
  "base_name": "191.南通市崇川区学田街道“红石榴家园”",
  "base_photo": "b26664874103034f64d595751e2dda8.jpg",
  "voted_count": "8003"
}, {
  "id": "293",
  "catelog_id": "4",
  "base_name": "192.南通西藏民族中学",
  "base_photo": "2926c23083f5b5b859d07447154df8e.jpg",
  "voted_count": "8033"
}, {
  "id": "292",
  "catelog_id": "4",
  "base_name": "193.南通花桥园艺场",
  "base_photo": "1(21).jpg",
  "voted_count": "8348"
}, {
  "id": "260",
  "catelog_id": "3",
  "base_name": "194.南通致公“多党合作示范家园”",
  "base_photo": "多党合作示范家园-南通致公2.jpg",
  "voted_count": "7799"
}, {
  "id": "308",
  "catelog_id": "4",
  "base_name": "195.南通留学生家长联合会",
  "base_photo": "1(26).jpg",
  "voted_count": "8013"
}, {
  "id": "311",
  "catelog_id": "4",
  "base_name": "196.南通海门临江新区留学生创业之家",
  "base_photo": "3(2).jpg",
  "voted_count": "8407"
}, {
  "id": "305",
  "catelog_id": "4",
  "base_name": "197.南通家纺城“常青藤”自由职业者联盟",
  "base_photo": "微信图片_20210812171006.jpg",
  "voted_count": "8142"
}, {
  "id": "8",
  "catelog_id": "2",
  "base_name": "198.南通博物苑",
  "base_photo": "南通博物苑1.jpg",
  "voted_count": "8600"
}, {
  "id": "145",
  "catelog_id": "4",
  "base_name": "199.香山书屋",
  "base_photo": "1香山书屋苏龙苑君子书吧（封面）.jpg",
  "voted_count": "6705"
}, {
  "id": "30",
  "catelog_id": "4",
  "base_name": "200.侵华日军南京大屠杀遇难同胞纪念馆",
  "base_photo": "1.jpg",
  "voted_count": "8035"
}, {
  "id": "173",
  "catelog_id": "4",
  "base_name": "201.“亮康行动”推广基地",
  "base_photo": "微信图片_20210630105217.jpg",
  "voted_count": "10283"
}, {
  "id": "92",
  "catelog_id": "4",
  "base_name": "202.姜堰区党外干部实践锻炼基地",
  "base_photo": "基地6.jpg",
  "voted_count": "6179"
}, {
  "id": "285",
  "catelog_id": "1",
  "base_name": "203.姜堰区党外知识分子联谊会“会员之家”",
  "base_photo": "封面(12).jpg",
  "voted_count": "6363"
}, {
  "id": "125",
  "catelog_id": "4",
  "base_name": "204.费孝通江村纪念馆",
  "base_photo": "纪念馆.jpg",
  "voted_count": "6011"
}, {
  "id": "104",
  "catelog_id": "4",
  "base_name": "205.泰州市万象书院",
  "base_photo": "微信图片_20200828092414（用）.jpg",
  "voted_count": "7448"
}, {
  "id": "89",
  "catelog_id": "4",
  "base_name": "206.泰州单声珍藏文物馆",
  "base_photo": "微信图片_20210810150252.jpg",
  "voted_count": "9155"
}, {
  "id": "115",
  "catelog_id": "4",
  "base_name": "207.泰兴市祁巷村民族团结进步教育基地",
  "base_photo": "微信图片_20210723110744.jpg",
  "voted_count": "10254"
}, {
  "id": "266",
  "catelog_id": "4",
  "base_name": "208.盐城市下舍村“红石榴家园”",
  "base_photo": "6.JPG",
  "voted_count": "13686"
}, {
  "id": "237",
  "catelog_id": "4",
  "base_name": "209.盐城市五星村“红石榴家园”",
  "base_photo": "红石榴家园图片1.JPG",
  "voted_count": "9726"
}, {
  "id": "200",
  "catelog_id": "4",
  "base_name": "210.盐城市左范村民族团结进步教育基地",
  "base_photo": "1(10).jpg",
  "voted_count": "9748"
}, {
  "id": "264",
  "catelog_id": "4",
  "base_name": "211.盐城市响水县“同心·双创”实践基地",
  "base_photo": "组织女会员代表开展“巾帼心向党 建功新时代”联谊座谈活动.JPG",
  "voted_count": "9159"
}, {
  "id": "180",
  "catelog_id": "4",
  "base_name": "212.盐城市滨海县互联网双创基地",
  "base_photo": "基地一景.png",
  "voted_count": "8778"
}, {
  "id": "257",
  "catelog_id": "4",
  "base_name": "213.盐城民建阳光社区法律服务工作站",
  "base_photo": "1.png",
  "voted_count": "9064"
}, {
  "id": "178",
  "catelog_id": "4",
  "base_name": "214.盐城师范学院",
  "base_photo": "全国民族团结进步示范单位 与第1000名赴新疆支教人同行.JPG",
  "voted_count": "10193"
}, {
  "id": "211",
  "catelog_id": "4",
  "base_name": "215.盐城环保科技城留创园",
  "base_photo": "1(12).jpg",
  "voted_count": "8978"
}, {
  "id": "267",
  "catelog_id": "4",
  "base_name": "216.盐城统战之家",
  "base_photo": "1(19).jpg",
  "voted_count": "9283"
}, {
  "id": "245",
  "catelog_id": "4",
  "base_name": "217.盐城高新区智创园新阶层实践创新基地",
  "base_photo": "1(14).jpg",
  "voted_count": "10978"
}, {
  "id": "226",
  "catelog_id": "4",
  "base_name": "218.袁相“同心”工程实验区",
  "base_photo": "c183c40c07b29899d9fbc9c93e55eaa.png",
  "voted_count": "6710"
}, {
  "id": "146",
  "catelog_id": "4",
  "base_name": "219.桃缘新联盟",
  "base_photo": "1“桃缘新联盟”实践基地外景（封面）.jpg",
  "voted_count": "12251"
}, {
  "id": "258",
  "catelog_id": "3",
  "base_name": "220.致公党无锡市委“三史”学习教育基地",
  "base_photo": "致公党无锡市委“三史”学习教育基地2.jpg",
  "voted_count": "7345"
}, {
  "id": "329",
  "catelog_id": "4",
  "base_name": "221.致公党邗江总支“党员活动之家”",
  "base_photo": "致公党中央副主席曹鸿鸣在邗江“致公之家”为邗江总支授牌“致公党中央基层组织联系点”.jpg",
  "voted_count": "6418"
}, {
  "id": "199",
  "catelog_id": "4",
  "base_name": "222.李公朴故居（镇江）",
  "base_photo": "镇江李公朴故居1.jpg",
  "voted_count": "7087"
}, {
  "id": "204",
  "catelog_id": "4",
  "base_name": "223.致福•侨海情缘中医药文化体验基地",
  "base_photo": "2017年致公党中央副主席严以新、省政协副主席、致公党省委主委马建国为“中医药文化体验基地”揭牌.jpg",
  "voted_count": "6260"
}, {
  "id": "100",
  "catelog_id": "4",
  "base_name": "224.钱昌照故居",
  "base_photo": "封面.jpg",
  "voted_count": "6286"
}, {
  "id": "41",
  "catelog_id": "4",
  "base_name": "225.秣陵街道红石榴家园",
  "base_photo": "01.jpg",
  "voted_count": "6370"
}, {
  "id": "340",
  "catelog_id": "4",
  "base_name": "226.徐州市贾汪区“侨之家”",
  "base_photo": "947e5972b04b66a6c6d6bf1aae85076.jpg",
  "voted_count": "6376"
}, {
  "id": "344",
  "catelog_id": "4",
  "base_name": "227.徐州市商学兵技能大师工作室",
  "base_photo": "照片1-市委常委、统战部部长毕于瑞到基地指导工作.jpg",
  "voted_count": "6458"
}, {
  "id": "333",
  "catelog_id": "4",
  "base_name": "228.徐州市淮海战役纪念馆",
  "base_photo": "1497180126931293.jpg",
  "voted_count": "7293"
}, {
  "id": "341",
  "catelog_id": "4",
  "base_name": "229.徐州市潘塘社区“红石榴家园”",
  "base_photo": "红石榴家园6.jpg",
  "voted_count": "6228"
}, {
  "id": "342",
  "catelog_id": "4",
  "base_name": "230.徐州汉文化景区",
  "base_photo": "侨务交流基地1.jpg",
  "voted_count": "6307"
}, {
  "id": "357",
  "catelog_id": "4",
  "base_name": "231.徐州睢宁县侨商（留学生）创新创业基地",
  "base_photo": "_DSC4075_极速看图.jpg",
  "voted_count": "6143"
}, {
  "id": "78",
  "catelog_id": "4",
  "base_name": "232.徐伯昕事迹陈列馆",
  "base_photo": "1(4).jpg",
  "voted_count": "5811"
}, {
  "id": "141",
  "catelog_id": "4",
  "base_name": "233.翁同龢纪念馆",
  "base_photo": "綵衣堂.jpg",
  "voted_count": "5926"
}, {
  "id": "318",
  "catelog_id": "4",
  "base_name": "234.高邮市同心教育实践馆",
  "base_photo": "1高邮市同心教育实践馆外景图.JPG",
  "voted_count": "9197"
}, {
  "id": "319",
  "catelog_id": "4",
  "base_name": "235.高邮市菱塘回族乡民族文化宫",
  "base_photo": "1(28).jpg",
  "voted_count": "9383"
}, {
  "id": "51",
  "catelog_id": "4",
  "base_name": "236.浦口行知苑",
  "base_photo": "海外华人青少年夏令营.jpg",
  "voted_count": "5699"
}, {
  "id": "91",
  "catelog_id": "4",
  "base_name": "237.海陵区城中派出所“石榴籽”工作室",
  "base_photo": "石榴籽工作室04.JPG",
  "voted_count": "7851"
}, {
  "id": "187",
  "catelog_id": "4",
  "base_name": "238.“谁羽争峰”港澳台交流基地",
  "base_photo": "微信图片_20210706151039.jpg",
  "voted_count": "5295"
}, {
  "id": "3",
  "catelog_id": "3",
  "base_name": "239.陶行知纪念馆",
  "base_photo": "旧馆-犁宫.jpg",
  "voted_count": "6912"
}, {
  "id": "124",
  "catelog_id": "4",
  "base_name": "240.黄炎培与徐公桥乡村改进试验区纪念馆",
  "base_photo": "279A0605-1.JPG",
  "voted_count": "5403"
}, {
  "id": "151",
  "catelog_id": "3",
  "base_name": "241.黄炎培职业教育思想展览馆",
  "base_photo": "1(7).jpg",
  "voted_count": "5811"
}, {
  "id": "67",
  "catelog_id": "4",
  "base_name": "242.梧桐同心广场",
  "base_photo": "内景展示.jpg",
  "voted_count": "5408"
}, {
  "id": "96",
  "catelog_id": "4",
  "base_name": "243.梅兰芳纪念馆",
  "base_photo": "梅兰芳纪念馆04.jpg",
  "voted_count": "9933"
}, {
  "id": "315",
  "catelog_id": "4",
  "base_name": "244.盛氏兄弟故居",
  "base_photo": "图片1(3).png",
  "voted_count": "5369"
}, {
  "id": "70",
  "catelog_id": "4",
  "base_name": "245.常州“芯云谷”",
  "base_photo": "1在芯云谷举办网络文化创意市集.jpg",
  "voted_count": "5628"
}, {
  "id": "228",
  "catelog_id": "3",
  "base_name": "246.常州中山纪念堂",
  "base_photo": "封面(4).jpg",
  "voted_count": "5823"
}, {
  "id": "65",
  "catelog_id": "4",
  "base_name": "247.常州市非公有制经济法治护航中心",
  "base_photo": "微信图片_20200630150402.jpg",
  "voted_count": "5407"
}, {
  "id": "69",
  "catelog_id": "4",
  "base_name": "248.常州市新北区“融心社”",
  "base_photo": "融心社封面照.jpg",
  "voted_count": "5316"
}, {
  "id": "72",
  "catelog_id": "4",
  "base_name": "249.常州运河五号创意街区",
  "base_photo": "运河五号创意街区—统一战线基地图片.JPG",
  "voted_count": "5406"
}, {
  "id": "82",
  "catelog_id": "4",
  "base_name": "250.常州金东方侨胞之家",
  "base_photo": "微信图片_20210722111011.jpg",
  "voted_count": "5291"
}, {
  "id": "83",
  "catelog_id": "4",
  "base_name": "251.常州城西回民村",
  "base_photo": "1-美丽田园城西回民村.jpg",
  "voted_count": "5455"
}, {
  "id": "81",
  "catelog_id": "4",
  "base_name": "252.常州商会之家",
  "base_photo": "商会之家1.jpg",
  "voted_count": "5366"
}, {
  "id": "76",
  "catelog_id": "4",
  "base_name": "253.常州盟史馆",
  "base_photo": "_MG_1650.JPG",
  "voted_count": "5507"
}, {
  "id": "71",
  "catelog_id": "4",
  "base_name": "254.常州新阶层人士实践创新基地——清园",
  "base_photo": "3.jpg",
  "voted_count": "5222"
}, {
  "id": "140",
  "catelog_id": "4",
  "base_name": "255.常熟沙家浜革命历史纪念馆",
  "base_photo": "微信图片_20210730110246.jpg",
  "voted_count": "5698"
}, {
  "id": "298",
  "catelog_id": "4",
  "base_name": "256.崇福禅寺",
  "base_photo": "1(22).jpg",
  "voted_count": "7562"
}, {
  "id": "339",
  "catelog_id": "4",
  "base_name": "257.“铜•侨”之家",
  "base_photo": "“铜•侨之家”—华人华侨创新创业服务中心3.jpg",
  "voted_count": "5477"
}, {
  "id": "274",
  "catelog_id": "4",
  "base_name": "258.“清新汇•知行空间”实践创新基地",
  "base_photo": "清新汇·知行空间实践创新基地正门(1).jpg",
  "voted_count": "6402"
}, {
  "id": "301",
  "catelog_id": "4",
  "base_name": "259.淮安市张纯如纪念馆",
  "base_photo": "微信图片_20210820104929.jpg",
  "voted_count": "6450"
}, {
  "id": "281",
  "catelog_id": "4",
  "base_name": "260.淮安市河下街道“红石榴家园”",
  "base_photo": "1(20).jpg",
  "voted_count": "6053"
}, {
  "id": "294",
  "catelog_id": "4",
  "base_name": "261.淮安市洪泽区民进会员之家",
  "base_photo": "民进省委领导视察清江浦区民进会员之家.JPG",
  "voted_count": "6118"
}, {
  "id": "247",
  "catelog_id": "4",
  "base_name": "262.淮安市涟水县“新涟盟”",
  "base_photo": "1(15).jpg",
  "voted_count": "6126"
}, {
  "id": "273",
  "catelog_id": "4",
  "base_name": "263.淮安市营东社区同心工作站",
  "base_photo": "图1 韩文军、张爱民为“同心工作站”揭牌.jpg",
  "voted_count": "6028"
}, {
  "id": "282",
  "catelog_id": "4",
  "base_name": "264.淮安市淮安区淮城街道恩来社区",
  "base_photo": "6(1).jpg",
  "voted_count": "6325"
}, {
  "id": "23",
  "catelog_id": "5",
  "base_name": "265.淮阴工学院翔宇同心教育实践基地",
  "base_photo": "1-周恩来纪念馆.jpg",
  "voted_count": "9376"
}, {
  "id": "215",
  "catelog_id": "4",
  "base_name": "266.宿迁中教总支盟员之家",
  "base_photo": "cf48395620c82eff542b9264c3cc52e.jpg",
  "voted_count": "6211"
}, {
  "id": "212",
  "catelog_id": "4",
  "base_name": "267.宿迁市民进市直机关会员之家",
  "base_photo": "2-赵主任和老会员苏辉为基地揭牌.jpg",
  "voted_count": "6315"
}, {
  "id": "198",
  "catelog_id": "4",
  "base_name": "268.宿迁市江山社区“红石榴家园”",
  "base_photo": "红石榴家园  (5).jpg",
  "voted_count": "6035"
}, {
  "id": "227",
  "catelog_id": "4",
  "base_name": "269.宿迁市杨集社区民族团结进步教育基地",
  "base_photo": "微信图片_20210708181727.jpg",
  "voted_count": "6060"
}, {
  "id": "218",
  "catelog_id": "4",
  "base_name": "270.宿迁市沭阳县南湖小学华文教育基地",
  "base_photo": "微信图片_20210820160326.jpg",
  "voted_count": "6011"
}, {
  "id": "209",
  "catelog_id": "4",
  "base_name": "271.宿迁市沭阳县高墟镇九三专家工作站",
  "base_photo": "国家重点研发项目研产结合会议期间许智宏院士等参观基地.jpg",
  "voted_count": "6145"
}, {
  "id": "216",
  "catelog_id": "4",
  "base_name": "272.宿迁市沭城街道府苑社区“红石榴家园”",
  "base_photo": "8f2e3b07187ac12e37fd2d83f8091a0.jpg",
  "voted_count": "6022"
}, {
  "id": "194",
  "catelog_id": "4",
  "base_name": "273.宿迁市河滨街道侨务工作基地",
  "base_photo": "组织侨眷（属）参观大王庄爱国基地.jpg",
  "voted_count": "6063"
}, {
  "id": "221",
  "catelog_id": "4",
  "base_name": "274.宿迁市泗阳妈祖文化园",
  "base_photo": "7b6ab6cddbe1a51f84da56f76c8e3b0.jpg",
  "voted_count": "6068"
}, {
  "id": "223",
  "catelog_id": "4",
  "base_name": "275.宿迁市泗阳县浙江商会",
  "base_photo": "2020年走进泗阳.jpg",
  "voted_count": "6081"
}, {
  "id": "225",
  "catelog_id": "4",
  "base_name": "276.宿迁市泗阳新英汇",
  "base_photo": "DSC_7982.JPG",
  "voted_count": "6077"
}, {
  "id": "196",
  "catelog_id": "4",
  "base_name": "277.宿迁市宿城区项里街道项里社区",
  "base_photo": "1(8).jpg",
  "voted_count": "6115"
}, {
  "id": "195",
  "catelog_id": "4",
  "base_name": "278.宿迁激光产业园",
  "base_photo": "微信图片_20210706175028.jpg",
  "voted_count": "6168"
}, {
  "id": "207",
  "catelog_id": "4",
  "base_name": "279.宿城区古城街道楚苑社区",
  "base_photo": "1(11).jpg",
  "voted_count": "6136"
}, {
  "id": "193",
  "catelog_id": "4",
  "base_name": "280.宿城区耿车镇电商商会",
  "base_photo": "耿车电商商会1.jpg",
  "voted_count": "6097"
}, {
  "id": "289",
  "catelog_id": "4",
  "base_name": "281.韩国钧故居",
  "base_photo": "韩公馆4.jpg",
  "voted_count": "8008"
}, {
  "id": "174",
  "catelog_id": "4",
  "base_name": "282.惠山古镇“同心”实践基地",
  "base_photo": "1江大留学生非遗泥人体验（封面）.jpg",
  "voted_count": "6667"
}, {
  "id": "175",
  "catelog_id": "4",
  "base_name": "283.惠山留学归国人员创业园",
  "base_photo": "1省委统战部长杨岳考察留创园（封面）.JPG",
  "voted_count": "6671"
}, {
  "id": "152",
  "catelog_id": "4",
  "base_name": "284.惠南社区“民族团结工作进社区示范点”",
  "base_photo": "1民族大舞台（封面）.jpg",
  "voted_count": "6524"
}, {
  "id": "348",
  "catelog_id": "4",
  "base_name": "285.紫砂新希望",
  "base_photo": "1-“希望杯”手工制陶大赛（封面）.jpg",
  "voted_count": "6981"
}, {
  "id": "325",
  "catelog_id": "4",
  "base_name": "286.最美渔村·统一战线同心基地",
  "base_photo": "1(29).JPG",
  "voted_count": "7340"
}, {
  "id": "332",
  "catelog_id": "1",
  "base_name": "287.“智慧小语”青少年成长服务中心",
  "base_photo": "封面(13).jpg",
  "voted_count": "7519"
}, {
  "id": "144",
  "catelog_id": "4",
  "base_name": "288.湖湾院所联盟",
  "base_photo": "1湖湾院所联盟全景（封面）.jpg",
  "voted_count": "7308"
}, {
  "id": "349",
  "catelog_id": "4",
  "base_name": "289.蓉运壹号“蓉英汇”",
  "base_photo": "1-组织困境儿童亲子公益夏令营（封面）.jpg",
  "voted_count": "7402"
}, {
  "id": "326",
  "catelog_id": "4",
  "base_name": "290.鉴真佛教学院",
  "base_photo": "$@{XK(QF)HRVXI7V`FPJQTB.jpg",
  "voted_count": "7364"
}, {
  "id": "153",
  "catelog_id": "4",
  "base_name": "291.新日民族同心团结之家",
  "base_photo": "1-新日包机接回135名柯族员工（封面）.jpg",
  "voted_count": "7597"
}, {
  "id": "322",
  "catelog_id": "4",
  "base_name": "292.新四军统战纪念馆",
  "base_photo": "新四军苏北指挥部纪念馆门楼.jpg",
  "voted_count": "10203"
}, {
  "id": "113",
  "catelog_id": "4",
  "base_name": "293.新四军黄桥战役纪念馆",
  "base_photo": "1(6).jpg",
  "voted_count": "13033"
}, {
  "id": "251",
  "catelog_id": "2",
  "base_name": "294.新型政党制度伟大历程展馆",
  "base_photo": "图片1(1).png",
  "voted_count": "7216"
}, {
  "id": "39",
  "catelog_id": "4",
  "base_name": "295.新城现代有轨电车有限公司红石榴家园",
  "base_photo": "1(1).jpg",
  "voted_count": "7515"
}, {
  "id": "179",
  "catelog_id": "4",
  "base_name": "296.新津荟自由职业人员统战工作特色街区",
  "base_photo": "032c91375d14960fe11fab434d2f5c6.jpg",
  "voted_count": "7083"
}, {
  "id": "201",
  "catelog_id": "4",
  "base_name": "297.新菁季社区",
  "base_photo": "新菁季 (5).jpg",
  "voted_count": "7774"
}, {
  "id": "93",
  "catelog_id": "4",
  "base_name": "298.溱潼古镇",
  "base_photo": "侨胞之家门前.jpg",
  "voted_count": "9184"
}, {
  "id": "347",
  "catelog_id": "4",
  "base_name": "299.溪南公馆新英汇",
  "base_photo": "1-基地夜景（封面）.jpg",
  "voted_count": "8097"
}, {
  "id": "50",
  "catelog_id": "4",
  "base_name": "300.“慢城新空”实践创新基地",
  "base_photo": "DSC_9066.JPG",
  "voted_count": "7230"
}, {
  "id": "56",
  "catelog_id": "3",
  "base_name": "301.樊氏图书馆（邓演达文献馆）",
  "base_photo": "微信图片_20210623174823.jpg",
  "voted_count": "7641"
}, {
  "id": "356",
  "catelog_id": "4",
  "base_name": "302.影人谷直播电商产业基地",
  "base_photo": "影人谷7.jpg",
  "voted_count": "7657"
}, {
  "id": "185",
  "catelog_id": "4",
  "base_name": "303.镇江市“3927”众创空间",
  "base_photo": "QQ图片20210727161616.jpg",
  "voted_count": "7745"
}, {
  "id": "182",
  "catelog_id": "4",
  "base_name": "304.镇江市丹徒区世业镇卫星民族村",
  "base_photo": "QQ图片20210728093345.jpg",
  "voted_count": "7810"
}, {
  "id": "190",
  "catelog_id": "4",
  "base_name": "305.镇江市网络社会组织统战工作展示馆",
  "base_photo": "QQ图片20210720113728 - 副本.jpg",
  "voted_count": "7843"
}, {
  "id": "188",
  "catelog_id": "4",
  "base_name": "306.镇江市润州区七里甸街道万科社区侨之家",
  "base_photo": "4a3b5ea35884f78ac9b299bebccb352.jpg",
  "voted_count": "7838"
}, {
  "id": "213",
  "catelog_id": "4",
  "base_name": "307.镇江市赛珍珠纪念馆",
  "base_photo": "微信图片_20210806090818.jpg",
  "voted_count": "8239"
}, {
  "id": "183",
  "catelog_id": "4",
  "base_name": "308.镇江市穆源民族学校",
  "base_photo": "穆源民族学校2.jpg",
  "voted_count": "8177"
}, {
  "id": "127",
  "catelog_id": "4",
  "base_name": "309.黎里古镇（柳亚子纪念馆、毛啸岑旧居等）",
  "base_photo": "统情地图.jpg",
  "voted_count": "7976"
}, {
  "id": "88",
  "catelog_id": "4",
  "base_name": "310.儒新社",
  "base_photo": "1-儒新社 门牌.jpg",
  "voted_count": "8702"
}, {
  "id": "133",
  "catelog_id": "4",
  "base_name": "311.鹰游集团改革开放四十年陈列馆",
  "base_photo": "QQ截图20210808182613.png",
  "voted_count": "8115"
}, {
  "id": "192",
  "catelog_id": "4",
  "base_name": "312.灌南两岸青年创业园",
  "base_photo": "灌南两岸青年创业园.jpg",
  "voted_count": "8329"
}, {
  "id": "250",
  "catelog_id": "4",
  "base_name": "313.赣榆乡贤馆",
  "base_photo": "赣榆乡贤馆外景实拍.jpg",
  "voted_count": "8496"
}, {
  "id": "249",
  "catelog_id": "4",
  "base_name": "314.赣榆区新的社会阶层人士联谊中心",
  "base_photo": "微信图片_20210810171120.jpg",
  "voted_count": "7998"
}];
// CONCATENATED MODULE: ./src/network/vote.js



function vote_getBaseList() {
  /*return request({
    url:'/vote_2021/wx/api.php?act=getBaseList'
  })*/
  return promise_default.a.resolve({ data: voteData });
}
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/Vote.vue
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ var Vote = ({
  name: "Vote",
  components: {
    Footer: components_vote_Footer,
    Nav: components_vote_Nav,
    Search: components_vote_Search,
    Banner: components_vote_Banner,
    VoteData: components_vote_VoteData
  },
  methods: {
    getBaseList: function getBaseList() {
      var _this = this;

      vote_getBaseList().then(function (value) {
        console.log(value);
        _this.voteData = value.data;
        _this.allData = value.data;
      });
    },
    selected: function selected(id) {
      this.selectedCount++;
      this.allData.filter(function (item) {
        if (item.id === id) {
          item.checkedValue = true;
        }
      });
    },
    cancelSelected: function cancelSelected(id) {
      this.selectedCount--;
      this.allData.filter(function (item) {
        if (item.id === id) {
          item.checkedValue = false;
        }
      });
    },
    searchByKey: function searchByKey(key) {
      this.voteData = this.allData.filter(function (item) {
        if (item.base_name.indexOf(key) >= 0) {
          return item;
        }
      });
    },
    showAllData: function showAllData() {
      console.log('showAllData');
      this.voteData = this.allData;
    }
  },
  data: function data() {
    return {
      selectedCount: 0,
      bannerImg: IndexBanner_default.a,
      voteData: null,
      allData: null
    };
  },
  created: function created() {
    this.getBaseList();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-a89f2d0e","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/Vote.vue
var Vote_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vote"},[_c('Banner',{attrs:{"banner-img":_vm.bannerImg}}),_vm._v(" "),_c('search',{on:{"searchByKey":_vm.searchByKey,"showAllData":_vm.showAllData}}),_vm._v(" "),_c('Nav'),_vm._v(" "),_c('Footer',{attrs:{"selected-count":_vm.selectedCount}}),_vm._v(" "),_c('vote-data',{attrs:{"votedata":_vm.voteData},on:{"selected":_vm.selected,"cancelSelected":_vm.cancelSelected}})],1)}
var Vote_staticRenderFns = []
var Vote_esExports = { render: Vote_render, staticRenderFns: Vote_staticRenderFns }
/* harmony default export */ var views_Vote = (Vote_esExports);
// CONCATENATED MODULE: ./src/views/Vote.vue
function Vote_injectStyle (ssrContext) {
  __webpack_require__("NYPn")
}
var Vote_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var Vote___vue_template_functional__ = false
/* styles */
var Vote___vue_styles__ = Vote_injectStyle
/* scopeId */
var Vote___vue_scopeId__ = "data-v-a89f2d0e"
/* moduleIdentifier (server only) */
var Vote___vue_module_identifier__ = null
var Vote_Component = Vote_normalizeComponent(
  Vote,
  views_Vote,
  Vote___vue_template_functional__,
  Vote___vue_styles__,
  Vote___vue_scopeId__,
  Vote___vue_module_identifier__
)

/* harmony default export */ var src_views_Vote = __webpack_exports__["default"] = (Vote_Component.exports);


/***/ }),

/***/ "sB3e":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("52gC");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "t8x9":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("77Pl");
var aFunction = __webpack_require__("lOnJ");
var SPECIES = __webpack_require__("dSzd")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "vFc/":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("TcQ7");
var toLength = __webpack_require__("QRG4");
var toAbsoluteIndex = __webpack_require__("fkB2");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "vIB/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("O4g8");
var $export = __webpack_require__("kM2E");
var redefine = __webpack_require__("880/");
var hide = __webpack_require__("hJx8");
var Iterators = __webpack_require__("/bQp");
var $iterCreate = __webpack_require__("94VQ");
var setToStringTag = __webpack_require__("e6n0");
var getPrototypeOf = __webpack_require__("PzxK");
var ITERATOR = __webpack_require__("dSzd")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "xGkn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("4mcu");
var step = __webpack_require__("EGZi");
var Iterators = __webpack_require__("/bQp");
var toIObject = __webpack_require__("TcQ7");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("vIB/")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "xH/j":
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__("hJx8");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "xnc9":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "zQR9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("h65t")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("vIB/")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ })

});
//# sourceMappingURL=0.ab4d20b8400a1742a91e.js.map