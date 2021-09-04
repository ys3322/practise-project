(function (t) {
  function e(e) {
    for (var o, c, r = e[0], s = e[1], u = e[2], l = 0, d = []; l < r.length; l++) c = r[l], Object.prototype.hasOwnProperty.call(i, c) && i[c] && d.push(i[c][0]), i[c] = 0;
    for (o in s) Object.prototype.hasOwnProperty.call(s, o) && (t[o] = s[o]);
    f && f(e);
    while (d.length) d.shift()();
    return a.push.apply(a, u || []), n()
  }
  
  function n() {
    for (var t, e = 0; e < a.length; e++) {
      for (var n = a[e], o = !0, c = 1; c < n.length; c++) {
        var r = n[c];
        0 !== i[r] && (o = !1)
      }
      o && (a.splice(e--, 1), t = s(s.s = n[0]))
    }
    return t
  }
  
  var o = {}, c = {app: 0}, i = {app: 0}, a = [];
  
  function r(t) {
    return s.p + "static/js/" + ({}[t] || t) + "." + {
      "chunk-02da647e": "9f32e0ee",
      "chunk-2d0b724a": "3160baf1",
      "chunk-3eebb4e4": "812c21a5",
      "chunk-70e7be92": "478f15b8",
      "chunk-74521164": "2b7341fa",
      "chunk-897184be": "3a4f65ac",
      "chunk-2d0c4643": "d6acf417"
    }[t] + ".js"
  }
  
  function s(e) {
    if (o[e]) return o[e].exports;
    var n = o[e] = {i: e, l: !1, exports: {}};
    return t[e].call(n.exports, n, n.exports, s), n.l = !0, n.exports
  }
  
  s.e = function (t) {
    var e = [],
        n = {"chunk-02da647e": 1, "chunk-3eebb4e4": 1, "chunk-70e7be92": 1, "chunk-74521164": 1, "chunk-897184be": 1};
    c[t] ? e.push(c[t]) : 0 !== c[t] && n[t] && e.push(c[t] = new Promise((function (e, n) {
      for (var o = "static/css/" + ({}[t] || t) + "." + {
        "chunk-02da647e": "f4f8facc",
        "chunk-2d0b724a": "31d6cfe0",
        "chunk-3eebb4e4": "2d79be10",
        "chunk-70e7be92": "82150ecf",
        "chunk-74521164": "700ab7a8",
        "chunk-897184be": "5b9bff1e",
        "chunk-2d0c4643": "31d6cfe0"
      }[t] + ".css", i = s.p + o, a = document.getElementsByTagName("link"), r = 0; r < a.length; r++) {
        var u = a[r], l = u.getAttribute("data-href") || u.getAttribute("href");
        if ("stylesheet" === u.rel && (l === o || l === i)) return e()
      }
      var d = document.getElementsByTagName("style");
      for (r = 0; r < d.length; r++) {
        u = d[r], l = u.getAttribute("data-href");
        if (l === o || l === i) return e()
      }
      var f = document.createElement("link");
      f.rel = "stylesheet", f.type = "text/css", f.onload = e, f.onerror = function (e) {
        var o = e && e.target && e.target.src || i, a = new Error("Loading CSS chunk " + t + " failed.\n(" + o + ")");
        a.code = "CSS_CHUNK_LOAD_FAILED", a.request = o, delete c[t], f.parentNode.removeChild(f), n(a)
      }, f.href = i;
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(f)
    })).then((function () {
      c[t] = 0
    })));
    var o = i[t];
    if (0 !== o) if (o) e.push(o[2]); else {
      var a = new Promise((function (e, n) {
        o = i[t] = [e, n]
      }));
      e.push(o[2] = a);
      var u, l = document.createElement("script");
      l.charset = "utf-8", l.timeout = 120, s.nc && l.setAttribute("nonce", s.nc), l.src = r(t);
      var d = new Error;
      u = function (e) {
        l.onerror = l.onload = null, clearTimeout(f);
        var n = i[t];
        if (0 !== n) {
          if (n) {
            var o = e && ("load" === e.type ? "missing" : e.type), c = e && e.target && e.target.src;
            d.message = "Loading chunk " + t + " failed.\n(" + o + ": " + c + ")", d.name = "ChunkLoadError", d.type = o, d.request = c, n[1](d)
          }
          i[t] = void 0
        }
      };
      var f = setTimeout((function () {
        u({type: "timeout", target: l})
      }), 12e4);
      l.onerror = l.onload = u, document.head.appendChild(l)
    }
    return Promise.all(e)
  }, s.m = t, s.c = o, s.d = function (t, e, n) {
    s.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: n})
  }, s.r = function (t) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
  }, s.t = function (t, e) {
    if (1 & e && (t = s(t)), 8 & e) return t;
    if (4 & e && "object" === typeof t && t && t.__esModule) return t;
    var n = Object.create(null);
    if (s.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var o in t) s.d(n, o, function (e) {
      return t[e]
    }.bind(null, o));
    return n
  }, s.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t["default"]
    } : function () {
      return t
    };
    return s.d(e, "a", e), e
  }, s.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, s.p = "", s.oe = function (t) {
    throw console.error(t), t
  };
  var u = window["webpackJsonp"] = window["webpackJsonp"] || [], l = u.push.bind(u);
  u.push = e, u = u.slice();
  for (var d = 0; d < u.length; d++) e(u[d]);
  var f = l;
  a.push([0, "chunk-vendors"]), n()
})({
  0: function (t, e, n) {
    t.exports = n("56d7")
  }, "034f": function (t, e, n) {
    "use strict";
    n("85ec")
  }, "1f92": function (t, e, n) {
    t.exports = n.p + "static/img/cart_active.3f0a2016.svg"
  }, "37ac": function (t, e, n) {
    "use strict";
    n("deda")
  }, "38de": function (t, e, n) {
    "use strict";
    n("50c41")
  }, "4ba1": function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
      return o
    })), n.d(e, "b", (function () {
      return c
    })), n.d(e, "c", (function () {
      return i
    }));
    var o = "add_count", c = "add_to_cart", i = "test_push"
  }, "50c41": function (t, e, n) {
  }, "56d7": function (t, e, n) {
    "use strict";
    n.r(e);
    n("e260"), n("e6cf"), n("cca6"), n("a79d");
    var o = n("2b0e"), c = function () {
          var t = this, e = t.$createElement, n = t._self._c || e;
          return n("div", {attrs: {id: "app"}}, [t.$route.meta.isFootShow ? n("main-tabbar") : t._e(), n("keep-alive", [n("router-view")], 1)], 1)
        }, i = [], a = function () {
          var t = this, e = t.$createElement, o = t._self._c || e;
          return o("Tabbar", [o("TabbarItem", {attrs: {path: "/home"}}, [o("img", {
            attrs: {
              slot: "item-icon",
              src: n("9443"),
              alt: ""
            }, slot: "item-icon"
          }), o("img", {
            attrs: {slot: "item-icon-active", src: n("b508"), alt: ""},
            slot: "item-icon-active"
          }), o("div", {
            attrs: {slot: "item-text"},
            slot: "item-text"
          }, [t._v("首页")])]), o("TabbarItem", {attrs: {path: "/category"}}, [o("img", {
            attrs: {
              slot: "item-icon",
              src: n("57cd"),
              alt: ""
            }, slot: "item-icon"
          }), o("img", {
            attrs: {slot: "item-icon-active", src: n("a5ef"), alt: ""},
            slot: "item-icon-active"
          }), o("div", {
            attrs: {slot: "item-text"},
            slot: "item-text"
          }, [t._v("分类")])]), o("TabbarItem", {attrs: {path: "/cart"}}, [o("img", {
            attrs: {
              slot: "item-icon",
              src: n("d1c9"),
              alt: ""
            }, slot: "item-icon"
          }), o("img", {
            attrs: {slot: "item-icon-active", src: n("1f92"), alt: ""},
            slot: "item-icon-active"
          }), o("div", {
            attrs: {slot: "item-text"},
            slot: "item-text"
          }, [t._v("购物车")])]), o("TabbarItem", {attrs: {path: "/profile"}}, [o("img", {
            attrs: {
              slot: "item-icon",
              src: n("e55d"),
              alt: ""
            }, slot: "item-icon"
          }), o("img", {
            attrs: {slot: "item-icon-active", src: n("d151"), alt: ""},
            slot: "item-icon-active"
          }), o("div", {attrs: {slot: "item-text"}, slot: "item-text"}, [t._v("个人")])])], 1)
        }, r = [], s = function () {
          var t = this, e = t.$createElement, n = t._self._c || e;
          return n("div", {
            staticClass: "tabbar-item",
            on: {click: t.itemClick}
          }, [t.isActive ? n("div", [t._t("item-icon-active")], 2) : n("div", [t._t("item-icon")], 2), n("div", {style: t.textStyle}, [t._t("item-text")], 2)])
        }, u = [], l = (n("ac1f"), n("5319"), {
          name: "TabbarItem",
          props: {path: {type: String, default: "/home"}, textColor: {type: String, default: "#ff5777"}},
          computed: {
            isActive: function () {
              return -1 !== this.path.indexOf(this.$route.path)
            }, textStyle: function () {
              return this.isActive ? {color: this.textColor} : {}
            }
          },
          methods: {
            itemClick: function () {
              console.log("itemClick--", this.path), this.$router.replace(this.path)
            }
          }
        }), d = l, f = (n("37ac"), n("2877")), h = Object(f["a"])(d, s, u, !1, null, "4419300a", null), m = h.exports,
        p = function () {
          var t = this, e = t.$createElement, n = t._self._c || e;
          return n("div", {attrs: {id: "tabbar"}}, [t._t("default")], 2)
        }, b = [], g = {name: "Tabbar"}, v = g, y = (n("38de"), Object(f["a"])(v, p, b, !1, null, "8665a3e4", null)),
        k = y.exports, x = {name: "MainTabbar", components: {TabbarItem: m, Tabbar: k}}, _ = x,
        j = Object(f["a"])(_, a, r, !1, null, "546d422f", null), w = j.exports,
        I = {name: "App", components: {MainTabbar: w}}, S = I,
        C = (n("034f"), Object(f["a"])(S, c, i, !1, null, null, null)), T = C.exports,
        O = (n("d3b7"), n("3ca3"), n("ddb0"), n("8c4f")), E = function () {
          return Promise.all([n.e("chunk-2d0b724a"), n.e("chunk-3eebb4e4"), n.e("chunk-70e7be92")]).then(n.bind(null, "b3d7"))
        }, L = function () {
          return Promise.all([n.e("chunk-2d0b724a"), n.e("chunk-897184be")]).then(n.bind(null, "bb51"))
        }, $ = function () {
          return n.e("chunk-02da647e").then(n.bind(null, "c228"))
        }, P = function () {
          return n.e("chunk-2d0c4643").then(n.bind(null, "3b42"))
        }, z = function () {
          return Promise.all([n.e("chunk-2d0b724a"), n.e("chunk-3eebb4e4"), n.e("chunk-74521164")]).then(n.bind(null, "6ab7"))
        };
    o["a"].use(O["a"]);
    var A = [{path: "/", redirect: "/home"}, {path: "/home", component: E, meta: {isFootShow: !0}}, {
          path: "/category",
          component: L,
          meta: {isFootShow: !0}
        }, {path: "/cart", component: $, meta: {isFootShow: !0}}, {
          path: "/profile",
          component: P,
          meta: {isFootShow: !0}
        }, {path: "/detail/:id", component: z}], M = new O["a"]({routes: A, mode: "hash", base: "/mall/"}),
        D = O["a"].prototype.push;
    O["a"].prototype.push = function (t) {
      return D.call(this, t).catch((function (t) {
        return t
      }))
    };
    var N, F = M, R = n("2f62"), q = n("ade3"), B = n("4ba1"), H = (N = {
      setTabControlIndex: function (t, e) {
        t.tabControlIndex = e
      }
    }, Object(q["a"])(N, B["a"], (function (t, e) {
      e.oldItem.count += e.count
    })), Object(q["a"])(N, B["b"], (function (t, e) {
      t.cartList.push(e)
    })), Object(q["a"])(N, B["c"], (function (t) {
      var e = {
        size: {index: 102, type: "size", name: "L", isDefault: !1, sizeId: 102, stock: 88},
        color: {
          index: 2,
          type: "style",
          name: "牛仔深蓝色",
          isDefault: !1,
          styleId: 2,
          image: "https://s5.mogucdn.com/mlcdn/c45406/200818_68d2ea99hjbd66gie76cb0d8d17df_640x960.jpg",
          stockId: "11ffu9dy",
          stock: 126
        },
        image: "https://s5.mogucdn.com/mlcdn/c45406/200818_68d2ea99hjbd66gie76cb0d8d17df_640x960.jpg",
        count: 1,
        price: "65.10",
        title: "日韩单外贸女装折扣捡漏双口袋牛仔长袖衬衫剪标特价清仓",
        goodsId: "1mlmy68 ",
        shopId: "14eg4",
        shopName: "清新部落",
        isChecked: !1
      }, n = {
        color: {
          type: "style",
          name: "牛仔浅蓝色",
          isDefault: !1,
          styleId: 1,
          index: 1,
          image: "https://s11.mogucdn.com/mlcdn/c45406/200818_20b7ekidh8jfj4cg7j9ki2i94j433_640x960.jpg",
          stockId: "11ffu9du",
          stock: 126
        },
        size: {name: "S", isDefault: !1, sizeId: 100, index: 100, type: "size", stock: 86},
        image: "https://s11.mogucdn.com/mlcdn/c45406/200818_20b7ekidh8jfj4cg7j9ki2i94j433_640x960.jpg",
        count: 1,
        price: "65.10",
        title: "日韩单外贸女装折扣捡漏双口袋牛仔长袖衬衫剪标特价清仓",
        goodsId: "1mlmy68 ",
        shopId: "14eg4",
        shopName: "清新部落",
        isChecked: !1
      }, o = {
        color: {
          index: 2,
          type: "style",
          name: "牛仔深蓝色",
          isDefault: !1,
          styleId: 2,
          image: "https://s5.mogucdn.com/mlcdn/c45406/200818_68d2ea99hjbd66gie76cb0d8d17df_640x960.jpg",
          stockId: "11ffu9dy",
          stock: 126
        },
        size: {name: "S", isDefault: !1, sizeId: 100, index: 100, type: "size", stock: 86},
        image: "https://s5.mogucdn.com/mlcdn/c45406/200818_68d2ea99hjbd66gie76cb0d8d17df_640x960.jpg",
        count: 1,
        price: "65.10",
        title: "日韩单外贸女装折扣捡漏双口袋牛仔长袖衬衫剪标特价清仓",
        goodsId: "1mlmy68 ",
        shopId: "14eg4",
        shopName: "清新部落",
        isChecked: !1
      };
      t.cartList.push(e), t.cartList.push(n), t.cartList.push(o)
    })), N), J = n("b85c"), K = Object(q["a"])({}, B["b"], (function (t, e) {
      return new Promise((function (n, o) {
        var c, i = null, a = Object(J["a"])(t.state.cartList);
        try {
          for (a.s(); !(c = a.n()).done;) {
            var r = c.value;
            e.shopId === r.shopId && e.goodsId === r.goodsId && e.color.styleId === r.color.styleId && e.size.sizeId === r.size.sizeId && (console.log("同一件商品追加,旧的数据==>", r), i = r)
          }
        } catch (s) {
          a.e(s)
        } finally {
          a.f()
        }
        i ? (t.commit(B["a"], {oldItem: i, count: e.count}), n("当前商品数量+1")) : (t.commit(B["b"], e), n("添加了新的商品"))
      }))
    })), U = (n("4de4"), {
      getCartList: function (t) {
        return t.cartList
      }, getCount: function (t) {
        return t.cartList.length
      }, isAllSelected: function (t) {
        var e, n = !0, o = Object(J["a"])(t.cartList);
        try {
          for (o.s(); !(e = o.n()).done;) {
            var c = e.value;
            c.isChecked || (n = !1)
          }
        } catch (i) {
          o.e(i)
        } finally {
          o.f()
        }
        return n
      }, selectedCount: function (t) {
        var e, n = 0, o = Object(J["a"])(t.cartList);
        try {
          for (o.s(); !(e = o.n()).done;) {
            var c = e.value;
            c.isChecked && n++
          }
        } catch (i) {
          o.e(i)
        } finally {
          o.f()
        }
        return n
      }, totalPrice: function (t) {
        return t.cartList.filter((function (t) {
          return t.isChecked
        })).reduce((function (t, e) {
          return t + e.price * e.count
        }), 0)
      }
    }), Y = {tabControlIndex: 0, cartList: []};
    o["a"].use(R["a"]);
    var G = new R["a"].Store({state: Y, mutations: H, actions: K, getters: U}), Q = G, V = n("90b9"), W = function () {
      var t = this, e = t.$createElement, n = t._self._c || e;
      return n("div", {
        directives: [{name: "show", rawName: "v-show", value: t.isShowToast, expression: "isShowToast"}],
        staticClass: "toast"
      }, [n("div", {staticClass: "content"}, [t._v(t._s(t.message))])])
    }, X = [], Z = {
      name: "toast", data: function () {
        return {message: "", isShowToast: !1}
      }, methods: {
        show: function () {
          var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1500;
          this.message = e, this.isShowToast = !0, setTimeout((function () {
            t.isShowToast = !1
          }), n)
        }
      }
    }, tt = Z, et = (n("8d5c"), Object(f["a"])(tt, W, X, !1, null, "de81f350", null)), nt = et.exports, ot = {
      install: function (t) {
        var e = t.extend(nt), n = new e;
        n.$mount(document.createElement("div")), document.body.appendChild(n.$el), t.prototype.$toast = n
      }
    }, ct = ot, it = n("fe3c"), at = n.n(it), rt = n("caf9");
    o["a"].config.productionTip = !1, o["a"].prototype.$bus = new o["a"], Object(V["b"])(), o["a"].use(ct), at.a.attach(document.body), o["a"].use(rt["a"], {loading: n("eb67")}), new o["a"]({
      render: function (t) {
        return t(T)
      }, router: F, store: Q
    }).$mount("#app")
  }, "57cd": function (t, e, n) {
    t.exports = n.p + "static/img/category.12bedb89.svg"
  }, "85ec": function (t, e, n) {
  }, "8d5c": function (t, e, n) {
    "use strict";
    n("e7b9")
  }, "90b9": function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
      return o
    })), n.d(e, "b", (function () {
      return c
    }));
    n("ac1f"), n("5319"), n("4d63"), n("25f0");
    
    function o(t, e) {
      var n = null;
      return function () {
        for (var o = this, c = arguments.length, i = new Array(c), a = 0; a < c; a++) i[a] = arguments[a];
        n && clearTimeout(n), n = setTimeout((function () {
          t.apply(o, i)
        }), e)
      }
    }
    
    function c() {
      Date.prototype.Format = function (t) {
        var e = {
          "M+": this.getMonth() + 1,
          "d+": this.getDate(),
          "h+": this.getHours(),
          "m+": this.getMinutes(),
          "s+": this.getSeconds(),
          "q+": Math.floor((this.getMonth() + 3) / 3),
          S: this.getMilliseconds()
        };
        for (var n in /(y+)/.test(t) && (t = t.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))), e) new RegExp("(" + n + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[n] : ("00" + e[n]).substr(("" + e[n]).length)));
        return t
      }
    }
  }, 9443: function (t, e, n) {
    t.exports = n.p + "static/img/home.7210ddcb.svg"
  }, a5ef: function (t, e, n) {
    t.exports = n.p + "static/img/category_active.cb2cc09f.svg"
  }, b508: function (t, e, n) {
    t.exports = n.p + "static/img/home_active.cc40b6f2.svg"
  }, d151: function (t, e, n) {
    t.exports = n.p + "static/img/profile_active.fd66b281.svg"
  }, d1c9: function (t, e, n) {
    t.exports = n.p + "static/img/cart.c68224ce.svg"
  }, deda: function (t, e, n) {
  }, e55d: function (t, e, n) {
    t.exports = n.p + "static/img/profile.42d7cf12.svg"
  }, e7b9: function (t, e, n) {
  }, eb67: function (t, e, n) {
    t.exports = n.p + "static/img/loading.22d36693.gif"
  }
});
//# sourceMappingURL=app.46ba5ea8.js.map