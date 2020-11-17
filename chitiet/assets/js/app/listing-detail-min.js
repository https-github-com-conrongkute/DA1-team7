if (function(t, e) { "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) { if (!t.document) throw new Error("jQuery requires a window with a document"); return e(t) } : e(t) }("undefined" != typeof window ? window : this, function(t, e) {
        var i = [],
            n = t.document,
            o = i.slice,
            s = i.concat,
            a = i.push,
            r = i.indexOf,
            l = {},
            c = l.toString,
            d = l.hasOwnProperty,
            h = {},
            u = "1.12.4",
            p = function(t, e) { return new p.fn.init(t, e) },
            f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            m = /^-ms-/,
            g = /-([\da-z])/gi,
            v = function(t, e) { return e.toUpperCase() };

        function y(t) {
            var e = !!t && "length" in t && t.length,
                i = p.type(t);
            return "function" !== i && !p.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }
        p.fn = p.prototype = {
            jquery: u,
            constructor: p,
            selector: "",
            length: 0,
            toArray: function() { return o.call(this) },
            get: function(t) { return null != t ? 0 > t ? this[t + this.length] : this[t] : o.call(this) },
            pushStack: function(t) { var e = p.merge(this.constructor(), t); return e.prevObject = this, e.context = this.context, e },
            each: function(t) { return p.each(this, t) },
            map: function(t) { return this.pushStack(p.map(this, function(e, i) { return t.call(e, i, e) })) },
            slice: function() { return this.pushStack(o.apply(this, arguments)) },
            first: function() { return this.eq(0) },
            last: function() { return this.eq(-1) },
            eq: function(t) {
                var e = this.length,
                    i = +t + (0 > t ? e : 0);
                return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
            },
            end: function() { return this.prevObject || this.constructor() },
            push: a,
            sort: i.sort,
            splice: i.splice
        }, p.extend = p.fn.extend = function() {
            var t, e, i, n, o, s, a = arguments[0] || {},
                r = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof a && (c = a, a = arguments[r] || {}, r++), "object" == typeof a || p.isFunction(a) || (a = {}), r === l && (a = this, r--); l > r; r++)
                if (null != (o = arguments[r]))
                    for (n in o) t = a[n], a !== (i = o[n]) && (c && i && (p.isPlainObject(i) || (e = p.isArray(i))) ? (e ? (e = !1, s = t && p.isArray(t) ? t : []) : s = t && p.isPlainObject(t) ? t : {}, a[n] = p.extend(c, s, i)) : void 0 !== i && (a[n] = i));
            return a
        }, p.extend({
            expando: "jQuery" + (u + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) { throw new Error(t) },
            noop: function() {},
            isFunction: function(t) { return "function" === p.type(t) },
            isArray: Array.isArray || function(t) { return "array" === p.type(t) },
            isWindow: function(t) { return null != t && t == t.window },
            isNumeric: function(t) { var e = t && t.toString(); return !p.isArray(t) && e - parseFloat(e) + 1 >= 0 },
            isEmptyObject: function(t) { var e; for (e in t) return !1; return !0 },
            isPlainObject: function(t) {
                var e;
                if (!t || "object" !== p.type(t) || t.nodeType || p.isWindow(t)) return !1;
                try { if (t.constructor && !d.call(t, "constructor") && !d.call(t.constructor.prototype, "isPrototypeOf")) return !1 } catch (t) { return !1 }
                if (!h.ownFirst)
                    for (e in t) return d.call(t, e);
                for (e in t);
                return void 0 === e || d.call(t, e)
            },
            type: function(t) { return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? l[c.call(t)] || "object" : typeof t },
            globalEval: function(e) { e && p.trim(e) && (t.execScript || function(e) { t.eval.call(t, e) })(e) },
            camelCase: function(t) { return t.replace(m, "ms-").replace(g, v) },
            nodeName: function(t, e) { return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase() },
            each: function(t, e) {
                var i, n = 0;
                if (y(t))
                    for (i = t.length; i > n && !1 !== e.call(t[n], n, t[n]); n++);
                else
                    for (n in t)
                        if (!1 === e.call(t[n], n, t[n])) break; return t
            },
            trim: function(t) { return null == t ? "" : (t + "").replace(f, "") },
            makeArray: function(t, e) { var i = e || []; return null != t && (y(Object(t)) ? p.merge(i, "string" == typeof t ? [t] : t) : a.call(i, t)), i },
            inArray: function(t, e, i) {
                var n;
                if (e) {
                    if (r) return r.call(e, t, i);
                    for (n = e.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++)
                        if (i in e && e[i] === t) return i
                }
                return -1
            },
            merge: function(t, e) {
                for (var i = +e.length, n = 0, o = t.length; i > n;) t[o++] = e[n++];
                if (i != i)
                    for (; void 0 !== e[n];) t[o++] = e[n++];
                return t.length = o, t
            },
            grep: function(t, e, i) { for (var n = [], o = 0, s = t.length, a = !i; s > o; o++) !e(t[o], o) !== a && n.push(t[o]); return n },
            map: function(t, e, i) {
                var n, o, a = 0,
                    r = [];
                if (y(t))
                    for (n = t.length; n > a; a++) null != (o = e(t[a], a, i)) && r.push(o);
                else
                    for (a in t) null != (o = e(t[a], a, i)) && r.push(o);
                return s.apply([], r)
            },
            guid: 1,
            proxy: function(t, e) { var i, n, s; return "string" == typeof e && (s = t[e], e = t, t = s), p.isFunction(t) ? (i = o.call(arguments, 2), (n = function() { return t.apply(e || this, i.concat(o.call(arguments))) }).guid = t.guid = t.guid || p.guid++, n) : void 0 },
            now: function() { return +new Date },
            support: h
        }), "function" == typeof Symbol && (p.fn[Symbol.iterator] = i[Symbol.iterator]), p.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) { l["[object " + e + "]"] = e.toLowerCase() });
        var b = function(t) {
            var e, i, n, o, s, a, r, l, c, d, h, u, p, f, m, g, v, y, b, _ = "sizzle" + 1 * new Date,
                w = t.document,
                x = 0,
                $ = 0,
                k = st(),
                T = st(),
                S = st(),
                C = function(t, e) { return t === e && (h = !0), 0 },
                D = 1 << 31,
                M = {}.hasOwnProperty,
                I = [],
                A = I.pop,
                L = I.push,
                P = I.push,
                E = I.slice,
                F = function(t, e) {
                    for (var i = 0, n = t.length; n > i; i++)
                        if (t[i] === e) return i;
                    return -1
                },
                O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                N = "[\\x20\\t\\r\\n\\f]",
                Y = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                q = "\\[" + N + "*(" + Y + ")(?:" + N + "*([*^$|!~]?=)" + N + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + Y + "))|)" + N + "*\\]",
                j = ":(" + Y + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|.*)\\)|)",
                H = new RegExp(N + "+", "g"),
                V = new RegExp("^" + N + "+|((?:^|[^\\\\])(?:\\\\.)*)" + N + "+$", "g"),
                R = new RegExp("^" + N + "*," + N + "*"),
                U = new RegExp("^" + N + "*([>+~]|" + N + ")" + N + "*"),
                W = new RegExp("=" + N + "*([^\\]'\"]*?)" + N + "*\\]", "g"),
                z = new RegExp(j),
                B = new RegExp("^" + Y + "$"),
                G = { ID: new RegExp("^#(" + Y + ")"), CLASS: new RegExp("^\\.(" + Y + ")"), TAG: new RegExp("^(" + Y + "|[*])"), ATTR: new RegExp("^" + q), PSEUDO: new RegExp("^" + j), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + N + "*(even|odd|(([+-]|)(\\d*)n|)" + N + "*(?:([+-]|)" + N + "*(\\d+)|))" + N + "*\\)|)", "i"), bool: new RegExp("^(?:" + O + ")$", "i"), needsContext: new RegExp("^" + N + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + N + "*((?:-\\d)?\\d*)" + N + "*\\)|)(?=[^-]|$)", "i") },
                X = /^(?:input|select|textarea|button)$/i,
                Z = /^h\d$/i,
                Q = /^[^{]+\{\s*\[native \w/,
                J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                K = /[+~]/,
                tt = /'|\\/g,
                et = new RegExp("\\\\([\\da-f]{1,6}" + N + "?|(" + N + ")|.)", "ig"),
                it = function(t, e, i) { var n = "0x" + e - 65536; return n != n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320) },
                nt = function() { u() };
            try { P.apply(I = E.call(w.childNodes), w.childNodes), I[w.childNodes.length].nodeType } catch (t) {
                P = {
                    apply: I.length ? function(t, e) { L.apply(t, E.call(e)) } : function(t, e) {
                        for (var i = t.length, n = 0; t[i++] = e[n++];);
                        t.length = i - 1
                    }
                }
            }

            function ot(t, e, n, o) {
                var s, r, c, d, h, f, v, y, x = e && e.ownerDocument,
                    $ = e ? e.nodeType : 9;
                if (n = n || [], "string" != typeof t || !t || 1 !== $ && 9 !== $ && 11 !== $) return n;
                if (!o && ((e ? e.ownerDocument || e : w) !== p && u(e), e = e || p, m)) {
                    if (11 !== $ && (f = J.exec(t)))
                        if (s = f[1]) { if (9 === $) { if (!(c = e.getElementById(s))) return n; if (c.id === s) return n.push(c), n } else if (x && (c = x.getElementById(s)) && b(e, c) && c.id === s) return n.push(c), n } else { if (f[2]) return P.apply(n, e.getElementsByTagName(t)), n; if ((s = f[3]) && i.getElementsByClassName && e.getElementsByClassName) return P.apply(n, e.getElementsByClassName(s)), n }
                    if (i.qsa && !S[t + " "] && (!g || !g.test(t))) {
                        if (1 !== $) x = e, y = t;
                        else if ("object" !== e.nodeName.toLowerCase()) {
                            for ((d = e.getAttribute("id")) ? d = d.replace(tt, "\\$&") : e.setAttribute("id", d = _), r = (v = a(t)).length, h = B.test(d) ? "#" + d : "[id='" + d + "']"; r--;) v[r] = h + " " + mt(v[r]);
                            y = v.join(","), x = K.test(t) && pt(e.parentNode) || e
                        }
                        if (y) try { return P.apply(n, x.querySelectorAll(y)), n } catch (t) {} finally { d === _ && e.removeAttribute("id") }
                    }
                }
                return l(t.replace(V, "$1"), e, n, o)
            }

            function st() { var t = []; return function e(i, o) { return t.push(i + " ") > n.cacheLength && delete e[t.shift()], e[i + " "] = o } }

            function at(t) { return t[_] = !0, t }

            function rt(t) { var e = p.createElement("div"); try { return !!t(e) } catch (t) { return !1 } finally { e.parentNode && e.parentNode.removeChild(e), e = null } }

            function lt(t, e) { for (var i = t.split("|"), o = i.length; o--;) n.attrHandle[i[o]] = e }

            function ct(t, e) {
                var i = e && t,
                    n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || D) - (~t.sourceIndex || D);
                if (n) return n;
                if (i)
                    for (; i = i.nextSibling;)
                        if (i === e) return -1;
                return t ? 1 : -1
            }

            function dt(t) { return function(e) { return "input" === e.nodeName.toLowerCase() && e.type === t } }

            function ht(t) { return function(e) { var i = e.nodeName.toLowerCase(); return ("input" === i || "button" === i) && e.type === t } }

            function ut(t) { return at(function(e) { return e = +e, at(function(i, n) { for (var o, s = t([], i.length, e), a = s.length; a--;) i[o = s[a]] && (i[o] = !(n[o] = i[o])) }) }) }

            function pt(t) { return t && void 0 !== t.getElementsByTagName && t }
            for (e in i = ot.support = {}, s = ot.isXML = function(t) { var e = t && (t.ownerDocument || t).documentElement; return !!e && "HTML" !== e.nodeName }, u = ot.setDocument = function(t) {
                    var e, o, a = t ? t.ownerDocument || t : w;
                    return a !== p && 9 === a.nodeType && a.documentElement ? (f = (p = a).documentElement, m = !s(p), (o = p.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", nt, !1) : o.attachEvent && o.attachEvent("onunload", nt)), i.attributes = rt(function(t) { return t.className = "i", !t.getAttribute("className") }), i.getElementsByTagName = rt(function(t) { return t.appendChild(p.createComment("")), !t.getElementsByTagName("*").length }), i.getElementsByClassName = Q.test(p.getElementsByClassName), i.getById = rt(function(t) { return f.appendChild(t).id = _, !p.getElementsByName || !p.getElementsByName(_).length }), i.getById ? (n.find.ID = function(t, e) { if (void 0 !== e.getElementById && m) { var i = e.getElementById(t); return i ? [i] : [] } }, n.filter.ID = function(t) { var e = t.replace(et, it); return function(t) { return t.getAttribute("id") === e } }) : (delete n.find.ID, n.filter.ID = function(t) { var e = t.replace(et, it); return function(t) { var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id"); return i && i.value === e } }), n.find.TAG = i.getElementsByTagName ? function(t, e) { return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : i.qsa ? e.querySelectorAll(t) : void 0 } : function(t, e) {
                        var i, n = [],
                            o = 0,
                            s = e.getElementsByTagName(t);
                        if ("*" === t) { for (; i = s[o++];) 1 === i.nodeType && n.push(i); return n }
                        return s
                    }, n.find.CLASS = i.getElementsByClassName && function(t, e) { return void 0 !== e.getElementsByClassName && m ? e.getElementsByClassName(t) : void 0 }, v = [], g = [], (i.qsa = Q.test(p.querySelectorAll)) && (rt(function(t) { f.appendChild(t).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + N + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || g.push("\\[" + N + "*(?:value|" + O + ")"), t.querySelectorAll("[id~=" + _ + "-]").length || g.push("~="), t.querySelectorAll(":checked").length || g.push(":checked"), t.querySelectorAll("a#" + _ + "+*").length || g.push(".#.+[+~]") }), rt(function(t) {
                        var e = p.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && g.push("name" + N + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), g.push(",.*:")
                    })), (i.matchesSelector = Q.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && rt(function(t) { i.disconnectedMatch = y.call(t, "div"), y.call(t, "[s!='']:x"), v.push("!=", j) }), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), e = Q.test(f.compareDocumentPosition), b = e || Q.test(f.contains) ? function(t, e) {
                        var i = 9 === t.nodeType ? t.documentElement : t,
                            n = e && e.parentNode;
                        return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                    } : function(t, e) {
                        if (e)
                            for (; e = e.parentNode;)
                                if (e === t) return !0;
                        return !1
                    }, C = e ? function(t, e) { if (t === e) return h = !0, 0; var n = !t.compareDocumentPosition - !e.compareDocumentPosition; return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !i.sortDetached && e.compareDocumentPosition(t) === n ? t === p || t.ownerDocument === w && b(w, t) ? -1 : e === p || e.ownerDocument === w && b(w, e) ? 1 : d ? F(d, t) - F(d, e) : 0 : 4 & n ? -1 : 1) } : function(t, e) {
                        if (t === e) return h = !0, 0;
                        var i, n = 0,
                            o = t.parentNode,
                            s = e.parentNode,
                            a = [t],
                            r = [e];
                        if (!o || !s) return t === p ? -1 : e === p ? 1 : o ? -1 : s ? 1 : d ? F(d, t) - F(d, e) : 0;
                        if (o === s) return ct(t, e);
                        for (i = t; i = i.parentNode;) a.unshift(i);
                        for (i = e; i = i.parentNode;) r.unshift(i);
                        for (; a[n] === r[n];) n++;
                        return n ? ct(a[n], r[n]) : a[n] === w ? -1 : r[n] === w ? 1 : 0
                    }, p) : p
                }, ot.matches = function(t, e) { return ot(t, null, null, e) }, ot.matchesSelector = function(t, e) {
                    if ((t.ownerDocument || t) !== p && u(t), e = e.replace(W, "='$1']"), i.matchesSelector && m && !S[e + " "] && (!v || !v.test(e)) && (!g || !g.test(e))) try { var n = y.call(t, e); if (n || i.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n } catch (t) {}
                    return ot(e, p, null, [t]).length > 0
                }, ot.contains = function(t, e) { return (t.ownerDocument || t) !== p && u(t), b(t, e) }, ot.attr = function(t, e) {
                    (t.ownerDocument || t) !== p && u(t);
                    var o = n.attrHandle[e.toLowerCase()],
                        s = o && M.call(n.attrHandle, e.toLowerCase()) ? o(t, e, !m) : void 0;
                    return void 0 !== s ? s : i.attributes || !m ? t.getAttribute(e) : (s = t.getAttributeNode(e)) && s.specified ? s.value : null
                }, ot.error = function(t) { throw new Error("Syntax error, unrecognized expression: " + t) }, ot.uniqueSort = function(t) {
                    var e, n = [],
                        o = 0,
                        s = 0;
                    if (h = !i.detectDuplicates, d = !i.sortStable && t.slice(0), t.sort(C), h) { for (; e = t[s++];) e === t[s] && (o = n.push(s)); for (; o--;) t.splice(n[o], 1) }
                    return d = null, t
                }, o = ot.getText = function(t) {
                    var e, i = "",
                        n = 0,
                        s = t.nodeType;
                    if (s) { if (1 === s || 9 === s || 11 === s) { if ("string" == typeof t.textContent) return t.textContent; for (t = t.firstChild; t; t = t.nextSibling) i += o(t) } else if (3 === s || 4 === s) return t.nodeValue } else
                        for (; e = t[n++];) i += o(e);
                    return i
                }, (n = ot.selectors = {
                    cacheLength: 50,
                    createPseudo: at,
                    match: G,
                    attrHandle: {},
                    find: {},
                    relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                    preFilter: { ATTR: function(t) { return t[1] = t[1].replace(et, it), t[3] = (t[3] || t[4] || t[5] || "").replace(et, it), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4) }, CHILD: function(t) { return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || ot.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && ot.error(t[0]), t }, PSEUDO: function(t) { var e, i = !t[6] && t[2]; return G.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && z.test(i) && (e = a(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3)) } },
                    filter: {
                        TAG: function(t) { var e = t.replace(et, it).toLowerCase(); return "*" === t ? function() { return !0 } : function(t) { return t.nodeName && t.nodeName.toLowerCase() === e } },
                        CLASS: function(t) { var e = k[t + " "]; return e || (e = new RegExp("(^|" + N + ")" + t + "(" + N + "|$)")) && k(t, function(t) { return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "") }) },
                        ATTR: function(t, e, i) { return function(n) { var o = ot.attr(n, t); return null == o ? "!=" === e : !e || (o += "", "=" === e ? o === i : "!=" === e ? o !== i : "^=" === e ? i && 0 === o.indexOf(i) : "*=" === e ? i && o.indexOf(i) > -1 : "$=" === e ? i && o.slice(-i.length) === i : "~=" === e ? (" " + o.replace(H, " ") + " ").indexOf(i) > -1 : "|=" === e && (o === i || o.slice(0, i.length + 1) === i + "-")) } },
                        CHILD: function(t, e, i, n, o) {
                            var s = "nth" !== t.slice(0, 3),
                                a = "last" !== t.slice(-4),
                                r = "of-type" === e;
                            return 1 === n && 0 === o ? function(t) { return !!t.parentNode } : function(e, i, l) {
                                var c, d, h, u, p, f, m = s !== a ? "nextSibling" : "previousSibling",
                                    g = e.parentNode,
                                    v = r && e.nodeName.toLowerCase(),
                                    y = !l && !r,
                                    b = !1;
                                if (g) {
                                    if (s) {
                                        for (; m;) {
                                            for (u = e; u = u[m];)
                                                if (r ? u.nodeName.toLowerCase() === v : 1 === u.nodeType) return !1;
                                            f = m = "only" === t && !f && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (f = [a ? g.firstChild : g.lastChild], a && y) {
                                        for (b = (p = (c = (d = (h = (u = g)[_] || (u[_] = {}))[u.uniqueID] || (h[u.uniqueID] = {}))[t] || [])[0] === x && c[1]) && c[2], u = p && g.childNodes[p]; u = ++p && u && u[m] || (b = p = 0) || f.pop();)
                                            if (1 === u.nodeType && ++b && u === e) { d[t] = [x, p, b]; break }
                                    } else if (y && (b = p = (c = (d = (h = (u = e)[_] || (u[_] = {}))[u.uniqueID] || (h[u.uniqueID] = {}))[t] || [])[0] === x && c[1]), !1 === b)
                                        for (;
                                            (u = ++p && u && u[m] || (b = p = 0) || f.pop()) && ((r ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++b || (y && ((d = (h = u[_] || (u[_] = {}))[u.uniqueID] || (h[u.uniqueID] = {}))[t] = [x, b]), u !== e)););
                                    return (b -= o) === n || b % n == 0 && b / n >= 0
                                }
                            }
                        },
                        PSEUDO: function(t, e) { var i, o = n.pseudos[t] || n.setFilters[t.toLowerCase()] || ot.error("unsupported pseudo: " + t); return o[_] ? o(e) : o.length > 1 ? (i = [t, t, "", e], n.setFilters.hasOwnProperty(t.toLowerCase()) ? at(function(t, i) { for (var n, s = o(t, e), a = s.length; a--;) t[n = F(t, s[a])] = !(i[n] = s[a]) }) : function(t) { return o(t, 0, i) }) : o }
                    },
                    pseudos: {
                        not: at(function(t) {
                            var e = [],
                                i = [],
                                n = r(t.replace(V, "$1"));
                            return n[_] ? at(function(t, e, i, o) { for (var s, a = n(t, null, o, []), r = t.length; r--;)(s = a[r]) && (t[r] = !(e[r] = s)) }) : function(t, o, s) { return e[0] = t, n(e, null, s, i), e[0] = null, !i.pop() }
                        }),
                        has: at(function(t) { return function(e) { return ot(t, e).length > 0 } }),
                        contains: at(function(t) {
                            return t = t.replace(et, it),
                                function(e) { return (e.textContent || e.innerText || o(e)).indexOf(t) > -1 }
                        }),
                        lang: at(function(t) {
                            return B.test(t || "") || ot.error("unsupported lang: " + t), t = t.replace(et, it).toLowerCase(),
                                function(e) {
                                    var i;
                                    do { if (i = m ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-") } while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1
                                }
                        }),
                        target: function(e) { var i = t.location && t.location.hash; return i && i.slice(1) === e.id },
                        root: function(t) { return t === f },
                        focus: function(t) { return t === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(t.type || t.href || ~t.tabIndex) },
                        enabled: function(t) { return !1 === t.disabled },
                        disabled: function(t) { return !0 === t.disabled },
                        checked: function(t) { var e = t.nodeName.toLowerCase(); return "input" === e && !!t.checked || "option" === e && !!t.selected },
                        selected: function(t) { return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected },
                        empty: function(t) {
                            for (t = t.firstChild; t; t = t.nextSibling)
                                if (t.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(t) { return !n.pseudos.empty(t) },
                        header: function(t) { return Z.test(t.nodeName) },
                        input: function(t) { return X.test(t.nodeName) },
                        button: function(t) { var e = t.nodeName.toLowerCase(); return "input" === e && "button" === t.type || "button" === e },
                        text: function(t) { var e; return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase()) },
                        first: ut(function() { return [0] }),
                        last: ut(function(t, e) { return [e - 1] }),
                        eq: ut(function(t, e, i) { return [0 > i ? i + e : i] }),
                        even: ut(function(t, e) { for (var i = 0; e > i; i += 2) t.push(i); return t }),
                        odd: ut(function(t, e) { for (var i = 1; e > i; i += 2) t.push(i); return t }),
                        lt: ut(function(t, e, i) { for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n); return t }),
                        gt: ut(function(t, e, i) { for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n); return t })
                    }
                }).pseudos.nth = n.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) n.pseudos[e] = dt(e);
            for (e in { submit: !0, reset: !0 }) n.pseudos[e] = ht(e);

            function ft() {}

            function mt(t) { for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value; return n }

            function gt(t, e, i) {
                var n = e.dir,
                    o = i && "parentNode" === n,
                    s = $++;
                return e.first ? function(e, i, s) {
                    for (; e = e[n];)
                        if (1 === e.nodeType || o) return t(e, i, s)
                } : function(e, i, a) {
                    var r, l, c, d = [x, s];
                    if (a) {
                        for (; e = e[n];)
                            if ((1 === e.nodeType || o) && t(e, i, a)) return !0
                    } else
                        for (; e = e[n];)
                            if (1 === e.nodeType || o) { if ((r = (l = (c = e[_] || (e[_] = {}))[e.uniqueID] || (c[e.uniqueID] = {}))[n]) && r[0] === x && r[1] === s) return d[2] = r[2]; if (l[n] = d, d[2] = t(e, i, a)) return !0 }
                }
            }

            function vt(t) {
                return t.length > 1 ? function(e, i, n) {
                    for (var o = t.length; o--;)
                        if (!t[o](e, i, n)) return !1;
                    return !0
                } : t[0]
            }

            function yt(t, e, i, n, o) { for (var s, a = [], r = 0, l = t.length, c = null != e; l > r; r++)(s = t[r]) && (i && !i(s, n, o) || (a.push(s), c && e.push(r))); return a }

            function bt(t, e, i, n, o, s) {
                return n && !n[_] && (n = bt(n)), o && !o[_] && (o = bt(o, s)), at(function(s, a, r, l) {
                    var c, d, h, u = [],
                        p = [],
                        f = a.length,
                        m = s || function(t, e, i) { for (var n = 0, o = e.length; o > n; n++) ot(t, e[n], i); return i }(e || "*", r.nodeType ? [r] : r, []),
                        g = !t || !s && e ? m : yt(m, u, t, r, l),
                        v = i ? o || (s ? t : f || n) ? [] : a : g;
                    if (i && i(g, v, r, l), n)
                        for (c = yt(v, p), n(c, [], r, l), d = c.length; d--;)(h = c[d]) && (v[p[d]] = !(g[p[d]] = h));
                    if (s) {
                        if (o || t) {
                            if (o) {
                                for (c = [], d = v.length; d--;)(h = v[d]) && c.push(g[d] = h);
                                o(null, v = [], c, l)
                            }
                            for (d = v.length; d--;)(h = v[d]) && (c = o ? F(s, h) : u[d]) > -1 && (s[c] = !(a[c] = h))
                        }
                    } else v = yt(v === a ? v.splice(f, v.length) : v), o ? o(null, a, v, l) : P.apply(a, v)
                })
            }

            function _t(t) {
                for (var e, i, o, s = t.length, a = n.relative[t[0].type], r = a || n.relative[" "], l = a ? 1 : 0, d = gt(function(t) { return t === e }, r, !0), h = gt(function(t) { return F(e, t) > -1 }, r, !0), u = [function(t, i, n) { var o = !a && (n || i !== c) || ((e = i).nodeType ? d(t, i, n) : h(t, i, n)); return e = null, o }]; s > l; l++)
                    if (i = n.relative[t[l].type]) u = [gt(vt(u), i)];
                    else {
                        if ((i = n.filter[t[l].type].apply(null, t[l].matches))[_]) { for (o = ++l; s > o && !n.relative[t[o].type]; o++); return bt(l > 1 && vt(u), l > 1 && mt(t.slice(0, l - 1).concat({ value: " " === t[l - 2].type ? "*" : "" })).replace(V, "$1"), i, o > l && _t(t.slice(l, o)), s > o && _t(t = t.slice(o)), s > o && mt(t)) }
                        u.push(i)
                    }
                return vt(u)
            }

            function wt(t, e) {
                var i = e.length > 0,
                    o = t.length > 0,
                    s = function(s, a, r, l, d) {
                        var h, f, g, v = 0,
                            y = "0",
                            b = s && [],
                            _ = [],
                            w = c,
                            $ = s || o && n.find.TAG("*", d),
                            k = x += null == w ? 1 : Math.random() || .1,
                            T = $.length;
                        for (d && (c = a === p || a || d); y !== T && null != (h = $[y]); y++) {
                            if (o && h) {
                                for (f = 0, a || h.ownerDocument === p || (u(h), r = !m); g = t[f++];)
                                    if (g(h, a || p, r)) { l.push(h); break }
                                d && (x = k)
                            }
                            i && ((h = !g && h) && v--, s && b.push(h))
                        }
                        if (v += y, i && y !== v) {
                            for (f = 0; g = e[f++];) g(b, _, a, r);
                            if (s) {
                                if (v > 0)
                                    for (; y--;) b[y] || _[y] || (_[y] = A.call(l));
                                _ = yt(_)
                            }
                            P.apply(l, _), d && !s && _.length > 0 && v + e.length > 1 && ot.uniqueSort(l)
                        }
                        return d && (x = k, c = w), b
                    };
                return i ? at(s) : s
            }
            return ft.prototype = n.filters = n.pseudos, n.setFilters = new ft, a = ot.tokenize = function(t, e) { var i, o, s, a, r, l, c, d = T[t + " "]; if (d) return e ? 0 : d.slice(0); for (r = t, l = [], c = n.preFilter; r;) { for (a in i && !(o = R.exec(r)) || (o && (r = r.slice(o[0].length) || r), l.push(s = [])), i = !1, (o = U.exec(r)) && (i = o.shift(), s.push({ value: i, type: o[0].replace(V, " ") }), r = r.slice(i.length)), n.filter) !(o = G[a].exec(r)) || c[a] && !(o = c[a](o)) || (i = o.shift(), s.push({ value: i, type: a, matches: o }), r = r.slice(i.length)); if (!i) break } return e ? r.length : r ? ot.error(t) : T(t, l).slice(0) }, r = ot.compile = function(t, e) {
                var i, n = [],
                    o = [],
                    s = S[t + " "];
                if (!s) {
                    for (e || (e = a(t)), i = e.length; i--;)(s = _t(e[i]))[_] ? n.push(s) : o.push(s);
                    (s = S(t, wt(o, n))).selector = t
                }
                return s
            }, l = ot.select = function(t, e, o, s) {
                var l, c, d, h, u, p = "function" == typeof t && t,
                    f = !s && a(t = p.selector || t);
                if (o = o || [], 1 === f.length) {
                    if ((c = f[0] = f[0].slice(0)).length > 2 && "ID" === (d = c[0]).type && i.getById && 9 === e.nodeType && m && n.relative[c[1].type]) {
                        if (!(e = (n.find.ID(d.matches[0].replace(et, it), e) || [])[0])) return o;
                        p && (e = e.parentNode), t = t.slice(c.shift().value.length)
                    }
                    for (l = G.needsContext.test(t) ? 0 : c.length; l-- && (d = c[l], !n.relative[h = d.type]);)
                        if ((u = n.find[h]) && (s = u(d.matches[0].replace(et, it), K.test(c[0].type) && pt(e.parentNode) || e))) { if (c.splice(l, 1), !(t = s.length && mt(c))) return P.apply(o, s), o; break }
                }
                return (p || r(t, f))(s, e, !m, o, !e || K.test(t) && pt(e.parentNode) || e), o
            }, i.sortStable = _.split("").sort(C).join("") === _, i.detectDuplicates = !!h, u(), i.sortDetached = rt(function(t) { return 1 & t.compareDocumentPosition(p.createElement("div")) }), rt(function(t) { return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href") }) || lt("type|href|height|width", function(t, e, i) { return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2) }), i.attributes && rt(function(t) { return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value") }) || lt("value", function(t, e, i) { return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue }), rt(function(t) { return null == t.getAttribute("disabled") }) || lt(O, function(t, e, i) { var n; return i ? void 0 : !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null }), ot
        }(t);
        p.find = b, p.expr = b.selectors, p.expr[":"] = p.expr.pseudos, p.uniqueSort = p.unique = b.uniqueSort, p.text = b.getText, p.isXMLDoc = b.isXML, p.contains = b.contains;
        var _ = function(t, e, i) {
                for (var n = [], o = void 0 !== i;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (o && p(t).is(i)) break;
                        n.push(t)
                    }
                return n
            },
            w = function(t, e) { for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t); return i },
            x = p.expr.match.needsContext,
            $ = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            k = /^.[^:#\[\.,]*$/;

        function T(t, e, i) {
            if (p.isFunction(e)) return p.grep(t, function(t, n) { return !!e.call(t, n, t) !== i });
            if (e.nodeType) return p.grep(t, function(t) { return t === e !== i });
            if ("string" == typeof e) {
                if (k.test(e)) return p.filter(e, t, i);
                e = p.filter(e, t)
            }
            return p.grep(t, function(t) { return p.inArray(t, e) > -1 !== i })
        }
        p.filter = function(t, e, i) { var n = e[0]; return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? p.find.matchesSelector(n, t) ? [n] : [] : p.find.matches(t, p.grep(e, function(t) { return 1 === t.nodeType })) }, p.fn.extend({
            find: function(t) {
                var e, i = [],
                    n = this,
                    o = n.length;
                if ("string" != typeof t) return this.pushStack(p(t).filter(function() {
                    for (e = 0; o > e; e++)
                        if (p.contains(n[e], this)) return !0
                }));
                for (e = 0; o > e; e++) p.find(t, n[e], i);
                return (i = this.pushStack(o > 1 ? p.unique(i) : i)).selector = this.selector ? this.selector + " " + t : t, i
            },
            filter: function(t) { return this.pushStack(T(this, t || [], !1)) },
            not: function(t) { return this.pushStack(T(this, t || [], !0)) },
            is: function(t) { return !!T(this, "string" == typeof t && x.test(t) ? p(t) : t || [], !1).length }
        });
        var S, C = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        (p.fn.init = function(t, e, i) {
            var o, s;
            if (!t) return this;
            if (i = i || S, "string" == typeof t) {
                if (!(o = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : C.exec(t)) || !o[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
                if (o[1]) {
                    if (e = e instanceof p ? e[0] : e, p.merge(this, p.parseHTML(o[1], e && e.nodeType ? e.ownerDocument || e : n, !0)), $.test(o[1]) && p.isPlainObject(e))
                        for (o in e) p.isFunction(this[o]) ? this[o](e[o]) : this.attr(o, e[o]);
                    return this
                }
                if ((s = n.getElementById(o[2])) && s.parentNode) {
                    if (s.id !== o[2]) return S.find(t);
                    this.length = 1, this[0] = s
                }
                return this.context = n, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : p.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(p) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), p.makeArray(t, this))
        }).prototype = p.fn, S = p(n);
        var D = /^(?:parents|prev(?:Until|All))/,
            M = { children: !0, contents: !0, next: !0, prev: !0 };

        function I(t, e) { do { t = t[e] } while (t && 1 !== t.nodeType); return t }
        p.fn.extend({
            has: function(t) {
                var e, i = p(t, this),
                    n = i.length;
                return this.filter(function() {
                    for (e = 0; n > e; e++)
                        if (p.contains(this, i[e])) return !0
                })
            },
            closest: function(t, e) {
                for (var i, n = 0, o = this.length, s = [], a = x.test(t) || "string" != typeof t ? p(t, e || this.context) : 0; o > n; n++)
                    for (i = this[n]; i && i !== e; i = i.parentNode)
                        if (i.nodeType < 11 && (a ? a.index(i) > -1 : 1 === i.nodeType && p.find.matchesSelector(i, t))) { s.push(i); break }
                return this.pushStack(s.length > 1 ? p.uniqueSort(s) : s)
            },
            index: function(t) { return t ? "string" == typeof t ? p.inArray(this[0], p(t)) : p.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
            add: function(t, e) { return this.pushStack(p.uniqueSort(p.merge(this.get(), p(t, e)))) },
            addBack: function(t) { return this.add(null == t ? this.prevObject : this.prevObject.filter(t)) }
        }), p.each({ parent: function(t) { var e = t.parentNode; return e && 11 !== e.nodeType ? e : null }, parents: function(t) { return _(t, "parentNode") }, parentsUntil: function(t, e, i) { return _(t, "parentNode", i) }, next: function(t) { return I(t, "nextSibling") }, prev: function(t) { return I(t, "previousSibling") }, nextAll: function(t) { return _(t, "nextSibling") }, prevAll: function(t) { return _(t, "previousSibling") }, nextUntil: function(t, e, i) { return _(t, "nextSibling", i) }, prevUntil: function(t, e, i) { return _(t, "previousSibling", i) }, siblings: function(t) { return w((t.parentNode || {}).firstChild, t) }, children: function(t) { return w(t.firstChild) }, contents: function(t) { return p.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : p.merge([], t.childNodes) } }, function(t, e) { p.fn[t] = function(i, n) { var o = p.map(this, e, i); return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (o = p.filter(n, o)), this.length > 1 && (M[t] || (o = p.uniqueSort(o)), D.test(t) && (o = o.reverse())), this.pushStack(o) } });
        var A, L, P = /\S+/g;

        function E() { n.addEventListener ? (n.removeEventListener("DOMContentLoaded", F), t.removeEventListener("load", F)) : (n.detachEvent("onreadystatechange", F), t.detachEvent("onload", F)) }

        function F() {
            (n.addEventListener || "load" === t.event.type || "complete" === n.readyState) && (E(), p.ready())
        }
        for (L in p.Callbacks = function(t) {
                t = "string" == typeof t ? function(t) { var e = {}; return p.each(t.match(P) || [], function(t, i) { e[i] = !0 }), e }(t) : p.extend({}, t);
                var e, i, n, o, s = [],
                    a = [],
                    r = -1,
                    l = function() {
                        for (o = t.once, n = e = !0; a.length; r = -1)
                            for (i = a.shift(); ++r < s.length;) !1 === s[r].apply(i[0], i[1]) && t.stopOnFalse && (r = s.length, i = !1);
                        t.memory || (i = !1), e = !1, o && (s = i ? [] : "")
                    },
                    c = {
                        add: function() { return s && (i && !e && (r = s.length - 1, a.push(i)), function e(i) { p.each(i, function(i, n) { p.isFunction(n) ? t.unique && c.has(n) || s.push(n) : n && n.length && "string" !== p.type(n) && e(n) }) }(arguments), i && !e && l()), this },
                        remove: function() {
                            return p.each(arguments, function(t, e) {
                                for (var i;
                                    (i = p.inArray(e, s, i)) > -1;) s.splice(i, 1), r >= i && r--
                            }), this
                        },
                        has: function(t) { return t ? p.inArray(t, s) > -1 : s.length > 0 },
                        empty: function() { return s && (s = []), this },
                        disable: function() { return o = a = [], s = i = "", this },
                        disabled: function() { return !s },
                        lock: function() { return o = !0, i || c.disable(), this },
                        locked: function() { return !!o },
                        fireWith: function(t, i) { return o || (i = [t, (i = i || []).slice ? i.slice() : i], a.push(i), e || l()), this },
                        fire: function() { return c.fireWith(this, arguments), this },
                        fired: function() { return !!n }
                    };
                return c
            }, p.extend({
                Deferred: function(t) {
                    var e = [
                            ["resolve", "done", p.Callbacks("once memory"), "resolved"],
                            ["reject", "fail", p.Callbacks("once memory"), "rejected"],
                            ["notify", "progress", p.Callbacks("memory")]
                        ],
                        i = "pending",
                        n = {
                            state: function() { return i },
                            always: function() { return o.done(arguments).fail(arguments), this },
                            then: function() {
                                var t = arguments;
                                return p.Deferred(function(i) {
                                    p.each(e, function(e, s) {
                                        var a = p.isFunction(t[e]) && t[e];
                                        o[s[1]](function() {
                                            var t = a && a.apply(this, arguments);
                                            t && p.isFunction(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[s[0] + "With"](this === n ? i.promise() : this, a ? [t] : arguments)
                                        })
                                    }), t = null
                                }).promise()
                            },
                            promise: function(t) { return null != t ? p.extend(t, n) : n }
                        },
                        o = {};
                    return n.pipe = n.then, p.each(e, function(t, s) {
                        var a = s[2],
                            r = s[3];
                        n[s[1]] = a.add, r && a.add(function() { i = r }, e[1 ^ t][2].disable, e[2][2].lock), o[s[0]] = function() { return o[s[0] + "With"](this === o ? n : this, arguments), this }, o[s[0] + "With"] = a.fireWith
                    }), n.promise(o), t && t.call(o, o), o
                },
                when: function(t) {
                    var e, i, n, s = 0,
                        a = o.call(arguments),
                        r = a.length,
                        l = 1 !== r || t && p.isFunction(t.promise) ? r : 0,
                        c = 1 === l ? t : p.Deferred(),
                        d = function(t, i, n) { return function(s) { i[t] = this, n[t] = arguments.length > 1 ? o.call(arguments) : s, n === e ? c.notifyWith(i, n) : --l || c.resolveWith(i, n) } };
                    if (r > 1)
                        for (e = new Array(r), i = new Array(r), n = new Array(r); r > s; s++) a[s] && p.isFunction(a[s].promise) ? a[s].promise().progress(d(s, i, e)).done(d(s, n, a)).fail(c.reject) : --l;
                    return l || c.resolveWith(n, a), c.promise()
                }
            }), p.fn.ready = function(t) { return p.ready.promise().done(t), this }, p.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function(t) { t ? p.readyWait++ : p.ready(!0) },
                ready: function(t) {
                    (!0 === t ? --p.readyWait : p.isReady) || (p.isReady = !0, !0 !== t && --p.readyWait > 0 || (A.resolveWith(n, [p]), p.fn.triggerHandler && (p(n).triggerHandler("ready"), p(n).off("ready"))))
                }
            }), p.ready.promise = function(e) {
                if (!A)
                    if (A = p.Deferred(), "complete" === n.readyState || "loading" !== n.readyState && !n.documentElement.doScroll) t.setTimeout(p.ready);
                    else if (n.addEventListener) n.addEventListener("DOMContentLoaded", F), t.addEventListener("load", F);
                else {
                    n.attachEvent("onreadystatechange", F), t.attachEvent("onload", F);
                    var i = !1;
                    try { i = null == t.frameElement && n.documentElement } catch (t) {}
                    i && i.doScroll && function e() {
                        if (!p.isReady) {
                            try { i.doScroll("left") } catch (i) { return t.setTimeout(e, 50) }
                            E(), p.ready()
                        }
                    }()
                }
                return A.promise(e)
            }, p.ready.promise(), p(h)) break;
        h.ownFirst = "0" === L, h.inlineBlockNeedsLayout = !1, p(function() {
                var t, e, i, o;
                (i = n.getElementsByTagName("body")[0]) && i.style && (e = n.createElement("div"), (o = n.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(o).appendChild(e), void 0 !== e.style.zoom && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", h.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (i.style.zoom = 1)), i.removeChild(o))
            }),
            function() {
                var t = n.createElement("div");
                h.deleteExpando = !0;
                try { delete t.test } catch (t) { h.deleteExpando = !1 }
                t = null
            }();
        var O = function(t) {
                var e = p.noData[(t.nodeName + " ").toLowerCase()],
                    i = +t.nodeType || 1;
                return (1 === i || 9 === i) && (!e || !0 !== e && t.getAttribute("classid") === e)
            },
            N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Y = /([A-Z])/g;

        function q(t, e, i) {
            if (void 0 === i && 1 === t.nodeType) {
                var n = "data-" + e.replace(Y, "-$1").toLowerCase();
                if ("string" == typeof(i = t.getAttribute(n))) {
                    try { i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : N.test(i) ? p.parseJSON(i) : i) } catch (t) {}
                    p.data(t, e, i)
                } else i = void 0
            }
            return i
        }

        function j(t) {
            var e;
            for (e in t)
                if (("data" !== e || !p.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
            return !0
        }

        function H(t, e, n, o) {
            if (O(t)) {
                var s, a, r = p.expando,
                    l = t.nodeType,
                    c = l ? p.cache : t,
                    d = l ? t[r] : t[r] && r;
                if (d && c[d] && (o || c[d].data) || void 0 !== n || "string" != typeof e) return d || (d = l ? t[r] = i.pop() || p.guid++ : r), c[d] || (c[d] = l ? {} : { toJSON: p.noop }), "object" != typeof e && "function" != typeof e || (o ? c[d] = p.extend(c[d], e) : c[d].data = p.extend(c[d].data, e)), a = c[d], o || (a.data || (a.data = {}), a = a.data), void 0 !== n && (a[p.camelCase(e)] = n), "string" == typeof e ? null == (s = a[e]) && (s = a[p.camelCase(e)]) : s = a, s
            }
        }

        function V(t, e, i) {
            if (O(t)) {
                var n, o, s = t.nodeType,
                    a = s ? p.cache : t,
                    r = s ? t[p.expando] : p.expando;
                if (a[r]) { if (e && (n = i ? a[r] : a[r].data)) { p.isArray(e) ? e = e.concat(p.map(e, p.camelCase)) : e in n ? e = [e] : e = (e = p.camelCase(e)) in n ? [e] : e.split(" "), o = e.length; for (; o--;) delete n[e[o]]; if (i ? !j(n) : !p.isEmptyObject(n)) return }(i || (delete a[r].data, j(a[r]))) && (s ? p.cleanData([t], !0) : h.deleteExpando || a != a.window ? delete a[r] : a[r] = void 0) }
            }
        }
        p.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function(t) { return !!(t = t.nodeType ? p.cache[t[p.expando]] : t[p.expando]) && !j(t) }, data: function(t, e, i) { return H(t, e, i) }, removeData: function(t, e) { return V(t, e) }, _data: function(t, e, i) { return H(t, e, i, !0) }, _removeData: function(t, e) { return V(t, e, !0) } }), p.fn.extend({
                data: function(t, e) {
                    var i, n, o, s = this[0],
                        a = s && s.attributes;
                    if (void 0 === t) {
                        if (this.length && (o = p.data(s), 1 === s.nodeType && !p._data(s, "parsedAttrs"))) {
                            for (i = a.length; i--;) a[i] && (0 === (n = a[i].name).indexOf("data-") && q(s, n = p.camelCase(n.slice(5)), o[n]));
                            p._data(s, "parsedAttrs", !0)
                        }
                        return o
                    }
                    return "object" == typeof t ? this.each(function() { p.data(this, t) }) : arguments.length > 1 ? this.each(function() { p.data(this, t, e) }) : s ? q(s, t, p.data(s, t)) : void 0
                },
                removeData: function(t) { return this.each(function() { p.removeData(this, t) }) }
            }), p.extend({
                queue: function(t, e, i) { var n; return t ? (e = (e || "fx") + "queue", n = p._data(t, e), i && (!n || p.isArray(i) ? n = p._data(t, e, p.makeArray(i)) : n.push(i)), n || []) : void 0 },
                dequeue: function(t, e) {
                    e = e || "fx";
                    var i = p.queue(t, e),
                        n = i.length,
                        o = i.shift(),
                        s = p._queueHooks(t, e);
                    "inprogress" === o && (o = i.shift(), n--), o && ("fx" === e && i.unshift("inprogress"), delete s.stop, o.call(t, function() { p.dequeue(t, e) }, s)), !n && s && s.empty.fire()
                },
                _queueHooks: function(t, e) { var i = e + "queueHooks"; return p._data(t, i) || p._data(t, i, { empty: p.Callbacks("once memory").add(function() { p._removeData(t, e + "queue"), p._removeData(t, i) }) }) }
            }), p.fn.extend({
                queue: function(t, e) {
                    var i = 2;
                    return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? p.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                        var i = p.queue(this, t, e);
                        p._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && p.dequeue(this, t)
                    })
                },
                dequeue: function(t) { return this.each(function() { p.dequeue(this, t) }) },
                clearQueue: function(t) { return this.queue(t || "fx", []) },
                promise: function(t, e) {
                    var i, n = 1,
                        o = p.Deferred(),
                        s = this,
                        a = this.length,
                        r = function() {--n || o.resolveWith(s, [s]) };
                    for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;)(i = p._data(s[a], t + "queueHooks")) && i.empty && (n++, i.empty.add(r));
                    return r(), o.promise(e)
                }
            }),
            function() {
                var t;
                h.shrinkWrapBlocks = function() { return null != t ? t : (t = !1, (i = n.getElementsByTagName("body")[0]) && i.style ? (e = n.createElement("div"), (o = n.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(o).appendChild(e), void 0 !== e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(n.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), i.removeChild(o), t) : void 0); var e, i, o }
            }();
        var R = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            U = new RegExp("^(?:([+-])=|)(" + R + ")([a-z%]*)$", "i"),
            W = ["Top", "Right", "Bottom", "Left"],
            z = function(t, e) { return t = e || t, "none" === p.css(t, "display") || !p.contains(t.ownerDocument, t) };

        function B(t, e, i, n) {
            var o, s = 1,
                a = 20,
                r = n ? function() { return n.cur() } : function() { return p.css(t, e, "") },
                l = r(),
                c = i && i[3] || (p.cssNumber[e] ? "" : "px"),
                d = (p.cssNumber[e] || "px" !== c && +l) && U.exec(p.css(t, e));
            if (d && d[3] !== c) {
                c = c || d[3], i = i || [], d = +l || 1;
                do { d /= s = s || ".5", p.style(t, e, d + c) } while (s !== (s = r() / l) && 1 !== s && --a)
            }
            return i && (d = +d || +l || 0, o = i[1] ? d + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = d, n.end = o)), o
        }
        var G = function(t, e, i, n, o, s, a) {
                var r = 0,
                    l = t.length,
                    c = null == i;
                if ("object" === p.type(i))
                    for (r in o = !0, i) G(t, e, r, i[r], !0, s, a);
                else if (void 0 !== n && (o = !0, p.isFunction(n) || (a = !0), c && (a ? (e.call(t, n), e = null) : (c = e, e = function(t, e, i) { return c.call(p(t), i) })), e))
                    for (; l > r; r++) e(t[r], i, a ? n : n.call(t[r], r, e(t[r], i)));
                return o ? t : c ? e.call(t) : l ? e(t[0], i) : s
            },
            X = /^(?:checkbox|radio)$/i,
            Z = /<([\w:-]+)/,
            Q = /^$|\/(?:java|ecma)script/i,
            J = /^\s+/,
            K = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

        function tt(t) {
            var e = K.split("|"),
                i = t.createDocumentFragment();
            if (i.createElement)
                for (; e.length;) i.createElement(e.pop());
            return i
        }! function() {
            var t = n.createElement("div"),
                e = n.createDocumentFragment(),
                i = n.createElement("input");
            t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", h.leadingWhitespace = 3 === t.firstChild.nodeType, h.tbody = !t.getElementsByTagName("tbody").length, h.htmlSerialize = !!t.getElementsByTagName("link").length, h.html5Clone = "<:nav></:nav>" !== n.createElement("nav").cloneNode(!0).outerHTML, i.type = "checkbox", i.checked = !0, e.appendChild(i), h.appendChecked = i.checked, t.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, e.appendChild(t), (i = n.createElement("input")).setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), t.appendChild(i), h.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, h.noCloneEvent = !!t.addEventListener, t[p.expando] = 1, h.attributes = !t.getAttribute(p.expando)
        }();
        var et = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: h.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] };

        function it(t, e) {
            var i, n, o = 0,
                s = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : void 0;
            if (!s)
                for (s = [], i = t.childNodes || t; null != (n = i[o]); o++) !e || p.nodeName(n, e) ? s.push(n) : p.merge(s, it(n, e));
            return void 0 === e || e && p.nodeName(t, e) ? p.merge([t], s) : s
        }

        function nt(t, e) { for (var i, n = 0; null != (i = t[n]); n++) p._data(i, "globalEval", !e || p._data(e[n], "globalEval")) }
        et.optgroup = et.option, et.tbody = et.tfoot = et.colgroup = et.caption = et.thead, et.th = et.td;
        var ot = /<|&#?\w+;/,
            st = /<tbody/i;

        function at(t) { X.test(t.type) && (t.defaultChecked = t.checked) }

        function rt(t, e, i, n, o) {
            for (var s, a, r, l, c, d, u, f = t.length, m = tt(e), g = [], v = 0; f > v; v++)
                if ((a = t[v]) || 0 === a)
                    if ("object" === p.type(a)) p.merge(g, a.nodeType ? [a] : a);
                    else if (ot.test(a)) {
                for (l = l || m.appendChild(e.createElement("div")), c = (Z.exec(a) || ["", ""])[1].toLowerCase(), u = et[c] || et._default, l.innerHTML = u[1] + p.htmlPrefilter(a) + u[2], s = u[0]; s--;) l = l.lastChild;
                if (!h.leadingWhitespace && J.test(a) && g.push(e.createTextNode(J.exec(a)[0])), !h.tbody)
                    for (s = (a = "table" !== c || st.test(a) ? "<table>" !== u[1] || st.test(a) ? 0 : l : l.firstChild) && a.childNodes.length; s--;) p.nodeName(d = a.childNodes[s], "tbody") && !d.childNodes.length && a.removeChild(d);
                for (p.merge(g, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
                l = m.lastChild
            } else g.push(e.createTextNode(a));
            for (l && m.removeChild(l), h.appendChecked || p.grep(it(g, "input"), at), v = 0; a = g[v++];)
                if (n && p.inArray(a, n) > -1) o && o.push(a);
                else if (r = p.contains(a.ownerDocument, a), l = it(m.appendChild(a), "script"), r && nt(l), i)
                for (s = 0; a = l[s++];) Q.test(a.type || "") && i.push(a);
            return l = null, m
        }! function() {
            var e, i, o = n.createElement("div");
            for (e in { submit: !0, change: !0, focusin: !0 }) i = "on" + e, (h[e] = i in t) || (o.setAttribute(i, "t"), h[e] = !1 === o.attributes[i].expando);
            o = null
        }();
        var lt = /^(?:input|select|textarea)$/i,
            ct = /^key/,
            dt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            ht = /^(?:focusinfocus|focusoutblur)$/,
            ut = /^([^.]*)(?:\.(.+)|)/;

        function pt() { return !0 }

        function ft() { return !1 }

        function mt() { try { return n.activeElement } catch (t) {} }

        function gt(t, e, i, n, o, s) {
            var a, r;
            if ("object" == typeof e) { for (r in "string" != typeof i && (n = n || i, i = void 0), e) gt(t, r, i, n, e[r], s); return t }
            if (null == n && null == o ? (o = i, n = i = void 0) : null == o && ("string" == typeof i ? (o = n, n = void 0) : (o = n, n = i, i = void 0)), !1 === o) o = ft;
            else if (!o) return t;
            return 1 === s && (a = o, (o = function(t) { return p().off(t), a.apply(this, arguments) }).guid = a.guid || (a.guid = p.guid++)), t.each(function() { p.event.add(this, e, o, n, i) })
        }
        p.event = {
            global: {},
            add: function(t, e, i, n, o) {
                var s, a, r, l, c, d, h, u, f, m, g, v = p._data(t);
                if (v) {
                    for (i.handler && (i = (l = i).handler, o = l.selector), i.guid || (i.guid = p.guid++), (a = v.events) || (a = v.events = {}), (d = v.handle) || ((d = v.handle = function(t) { return void 0 === p || t && p.event.triggered === t.type ? void 0 : p.event.dispatch.apply(d.elem, arguments) }).elem = t), r = (e = (e || "").match(P) || [""]).length; r--;) f = g = (s = ut.exec(e[r]) || [])[1], m = (s[2] || "").split(".").sort(), f && (c = p.event.special[f] || {}, f = (o ? c.delegateType : c.bindType) || f, c = p.event.special[f] || {}, h = p.extend({ type: f, origType: g, data: n, handler: i, guid: i.guid, selector: o, needsContext: o && p.expr.match.needsContext.test(o), namespace: m.join(".") }, l), (u = a[f]) || ((u = a[f] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(t, n, m, d) || (t.addEventListener ? t.addEventListener(f, d, !1) : t.attachEvent && t.attachEvent("on" + f, d))), c.add && (c.add.call(t, h), h.handler.guid || (h.handler.guid = i.guid)), o ? u.splice(u.delegateCount++, 0, h) : u.push(h), p.event.global[f] = !0);
                    t = null
                }
            },
            remove: function(t, e, i, n, o) {
                var s, a, r, l, c, d, h, u, f, m, g, v = p.hasData(t) && p._data(t);
                if (v && (d = v.events)) {
                    for (c = (e = (e || "").match(P) || [""]).length; c--;)
                        if (f = g = (r = ut.exec(e[c]) || [])[1], m = (r[2] || "").split(".").sort(), f) {
                            for (h = p.event.special[f] || {}, u = d[f = (n ? h.delegateType : h.bindType) || f] || [], r = r[2] && new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = s = u.length; s--;) a = u[s], !o && g !== a.origType || i && i.guid !== a.guid || r && !r.test(a.namespace) || n && n !== a.selector && ("**" !== n || !a.selector) || (u.splice(s, 1), a.selector && u.delegateCount--, h.remove && h.remove.call(t, a));
                            l && !u.length && (h.teardown && !1 !== h.teardown.call(t, m, v.handle) || p.removeEvent(t, f, v.handle), delete d[f])
                        } else
                            for (f in d) p.event.remove(t, f + e[c], i, n, !0);
                    p.isEmptyObject(d) && (delete v.handle, p._removeData(t, "events"))
                }
            },
            trigger: function(e, i, o, s) {
                var a, r, l, c, h, u, f, m = [o || n],
                    g = d.call(e, "type") ? e.type : e,
                    v = d.call(e, "namespace") ? e.namespace.split(".") : [];
                if (l = u = o = o || n, 3 !== o.nodeType && 8 !== o.nodeType && !ht.test(g + p.event.triggered) && (g.indexOf(".") > -1 && (v = g.split("."), g = v.shift(), v.sort()), r = g.indexOf(":") < 0 && "on" + g, (e = e[p.expando] ? e : new p.Event(g, "object" == typeof e && e)).isTrigger = s ? 2 : 3, e.namespace = v.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = o), i = null == i ? [e] : p.makeArray(i, [e]), h = p.event.special[g] || {}, s || !h.trigger || !1 !== h.trigger.apply(o, i))) {
                    if (!s && !h.noBubble && !p.isWindow(o)) {
                        for (c = h.delegateType || g, ht.test(c + g) || (l = l.parentNode); l; l = l.parentNode) m.push(l), u = l;
                        u === (o.ownerDocument || n) && m.push(u.defaultView || u.parentWindow || t)
                    }
                    for (f = 0;
                        (l = m[f++]) && !e.isPropagationStopped();) e.type = f > 1 ? c : h.bindType || g, (a = (p._data(l, "events") || {})[e.type] && p._data(l, "handle")) && a.apply(l, i), (a = r && l[r]) && a.apply && O(l) && (e.result = a.apply(l, i), !1 === e.result && e.preventDefault());
                    if (e.type = g, !s && !e.isDefaultPrevented() && (!h._default || !1 === h._default.apply(m.pop(), i)) && O(o) && r && o[g] && !p.isWindow(o)) {
                        (u = o[r]) && (o[r] = null), p.event.triggered = g;
                        try { o[g]() } catch (t) {}
                        p.event.triggered = void 0, u && (o[r] = u)
                    }
                    return e.result
                }
            },
            dispatch: function(t) {
                t = p.event.fix(t);
                var e, i, n, s, a, r = [],
                    l = o.call(arguments),
                    c = (p._data(this, "events") || {})[t.type] || [],
                    d = p.event.special[t.type] || {};
                if (l[0] = t, t.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, t)) {
                    for (r = p.event.handlers.call(this, t, c), e = 0;
                        (s = r[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = s.elem, i = 0;
                            (a = s.handlers[i++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (n = ((p.event.special[a.origType] || {}).handle || a.handler).apply(s.elem, l)) && !1 === (t.result = n) && (t.preventDefault(), t.stopPropagation()));
                    return d.postDispatch && d.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, e) {
                var i, n, o, s, a = [],
                    r = e.delegateCount,
                    l = t.target;
                if (r && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
                            for (n = [], i = 0; r > i; i++) void 0 === n[o = (s = e[i]).selector + " "] && (n[o] = s.needsContext ? p(o, this).index(l) > -1 : p.find(o, this, null, [l]).length), n[o] && n.push(s);
                            n.length && a.push({ elem: l, handlers: n })
                        }
                return r < e.length && a.push({ elem: this, handlers: e.slice(r) }), a
            },
            fix: function(t) {
                if (t[p.expando]) return t;
                var e, i, o, s = t.type,
                    a = t,
                    r = this.fixHooks[s];
                for (r || (this.fixHooks[s] = r = dt.test(s) ? this.mouseHooks : ct.test(s) ? this.keyHooks : {}), o = r.props ? this.props.concat(r.props) : this.props, t = new p.Event(a), e = o.length; e--;) t[i = o[e]] = a[i];
                return t.target || (t.target = a.srcElement || n), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, r.filter ? r.filter(t, a) : t
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(t, e) { return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t } },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, e) {
                    var i, o, s, a = e.button,
                        r = e.fromElement;
                    return null == t.pageX && null != e.clientX && (s = (o = t.target.ownerDocument || n).documentElement, i = o.body, t.pageX = e.clientX + (s && s.scrollLeft || i && i.scrollLeft || 0) - (s && s.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (s && s.scrollTop || i && i.scrollTop || 0) - (s && s.clientTop || i && i.clientTop || 0)), !t.relatedTarget && r && (t.relatedTarget = r === t.target ? e.toElement : r), t.which || void 0 === a || (t.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), t
                }
            },
            special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== mt() && this.focus) try { return this.focus(), !1 } catch (t) {} }, delegateType: "focusin" }, blur: { trigger: function() { return this === mt() && this.blur ? (this.blur(), !1) : void 0 }, delegateType: "focusout" }, click: { trigger: function() { return p.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0 }, _default: function(t) { return p.nodeName(t.target, "a") } }, beforeunload: { postDispatch: function(t) { void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result) } } },
            simulate: function(t, e, i) {
                var n = p.extend(new p.Event, i, { type: t, isSimulated: !0 });
                p.event.trigger(n, null, e), n.isDefaultPrevented() && i.preventDefault()
            }
        }, p.removeEvent = n.removeEventListener ? function(t, e, i) { t.removeEventListener && t.removeEventListener(e, i) } : function(t, e, i) {
            var n = "on" + e;
            t.detachEvent && (void 0 === t[n] && (t[n] = null), t.detachEvent(n, i))
        }, p.Event = function(t, e) { return this instanceof p.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? pt : ft) : this.type = t, e && p.extend(this, e), this.timeStamp = t && t.timeStamp || p.now(), void(this[p.expando] = !0)) : new p.Event(t, e) }, p.Event.prototype = {
            constructor: p.Event,
            isDefaultPrevented: ft,
            isPropagationStopped: ft,
            isImmediatePropagationStopped: ft,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = pt, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = pt, t && !this.isSimulated && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = pt, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, p.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(t, e) {
            p.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var i, n = t.relatedTarget,
                        o = t.handleObj;
                    return n && (n === this || p.contains(this, n)) || (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e), i
                }
            }
        }), h.submit || (p.event.special.submit = {
            setup: function() {
                return !p.nodeName(this, "form") && void p.event.add(this, "click._submit keypress._submit", function(t) {
                    var e = t.target,
                        i = p.nodeName(e, "input") || p.nodeName(e, "button") ? p.prop(e, "form") : void 0;
                    i && !p._data(i, "submit") && (p.event.add(i, "submit._submit", function(t) { t._submitBubble = !0 }), p._data(i, "submit", !0))
                })
            },
            postDispatch: function(t) { t._submitBubble && (delete t._submitBubble, this.parentNode && !t.isTrigger && p.event.simulate("submit", this.parentNode, t)) },
            teardown: function() { return !p.nodeName(this, "form") && void p.event.remove(this, "._submit") }
        }), h.change || (p.event.special.change = {
            setup: function() {
                return lt.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (p.event.add(this, "propertychange._change", function(t) { "checked" === t.originalEvent.propertyName && (this._justChanged = !0) }), p.event.add(this, "click._change", function(t) { this._justChanged && !t.isTrigger && (this._justChanged = !1), p.event.simulate("change", this, t) })), !1) : void p.event.add(this, "beforeactivate._change", function(t) {
                    var e = t.target;
                    lt.test(e.nodeName) && !p._data(e, "change") && (p.event.add(e, "change._change", function(t) {!this.parentNode || t.isSimulated || t.isTrigger || p.event.simulate("change", this.parentNode, t) }), p._data(e, "change", !0))
                })
            },
            handle: function(t) { var e = t.target; return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0 },
            teardown: function() { return p.event.remove(this, "._change"), !lt.test(this.nodeName) }
        }), h.focusin || p.each({ focus: "focusin", blur: "focusout" }, function(t, e) {
            var i = function(t) { p.event.simulate(e, t.target, p.event.fix(t)) };
            p.event.special[e] = {
                setup: function() {
                    var n = this.ownerDocument || this,
                        o = p._data(n, e);
                    o || n.addEventListener(t, i, !0), p._data(n, e, (o || 0) + 1)
                },
                teardown: function() {
                    var n = this.ownerDocument || this,
                        o = p._data(n, e) - 1;
                    o ? p._data(n, e, o) : (n.removeEventListener(t, i, !0), p._removeData(n, e))
                }
            }
        }), p.fn.extend({ on: function(t, e, i, n) { return gt(this, t, e, i, n) }, one: function(t, e, i, n) { return gt(this, t, e, i, n, 1) }, off: function(t, e, i) { var n, o; if (t && t.preventDefault && t.handleObj) return n = t.handleObj, p(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this; if ("object" == typeof t) { for (o in t) this.off(o, e, t[o]); return this } return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = ft), this.each(function() { p.event.remove(this, t, i, e) }) }, trigger: function(t, e) { return this.each(function() { p.event.trigger(t, e, this) }) }, triggerHandler: function(t, e) { var i = this[0]; return i ? p.event.trigger(t, e, i, !0) : void 0 } });
        var vt = / jQuery\d+="(?:null|\d+)"/g,
            yt = new RegExp("<(?:" + K + ")[\\s/>]", "i"),
            bt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            _t = /<script|<style|<link/i,
            wt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            xt = /^true\/(.*)/,
            $t = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            kt = tt(n).appendChild(n.createElement("div"));

        function Tt(t, e) { return p.nodeName(t, "table") && p.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t }

        function St(t) { return t.type = (null !== p.find.attr(t, "type")) + "/" + t.type, t }

        function Ct(t) { var e = xt.exec(t.type); return e ? t.type = e[1] : t.removeAttribute("type"), t }

        function Dt(t, e) {
            if (1 === e.nodeType && p.hasData(t)) {
                var i, n, o, s = p._data(t),
                    a = p._data(e, s),
                    r = s.events;
                if (r)
                    for (i in delete a.handle, a.events = {}, r)
                        for (n = 0, o = r[i].length; o > n; n++) p.event.add(e, i, r[i][n]);
                a.data && (a.data = p.extend({}, a.data))
            }
        }

        function Mt(t, e) {
            var i, n, o;
            if (1 === e.nodeType) {
                if (i = e.nodeName.toLowerCase(), !h.noCloneEvent && e[p.expando]) {
                    for (n in (o = p._data(e)).events) p.removeEvent(e, n, o.handle);
                    e.removeAttribute(p.expando)
                }
                "script" === i && e.text !== t.text ? (St(e).text = t.text, Ct(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), h.html5Clone && t.innerHTML && !p.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && X.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
            }
        }

        function It(t, e, i, n) {
            e = s.apply([], e);
            var o, a, r, l, c, d, u = 0,
                f = t.length,
                m = f - 1,
                g = e[0],
                v = p.isFunction(g);
            if (v || f > 1 && "string" == typeof g && !h.checkClone && wt.test(g)) return t.each(function(o) {
                var s = t.eq(o);
                v && (e[0] = g.call(this, o, s.html())), It(s, e, i, n)
            });
            if (f && (o = (d = rt(e, t[0].ownerDocument, !1, t, n)).firstChild, 1 === d.childNodes.length && (d = o), o || n)) {
                for (r = (l = p.map(it(d, "script"), St)).length; f > u; u++) a = d, u !== m && (a = p.clone(a, !0, !0), r && p.merge(l, it(a, "script"))), i.call(t[u], a, u);
                if (r)
                    for (c = l[l.length - 1].ownerDocument, p.map(l, Ct), u = 0; r > u; u++) a = l[u], Q.test(a.type || "") && !p._data(a, "globalEval") && p.contains(c, a) && (a.src ? p._evalUrl && p._evalUrl(a.src) : p.globalEval((a.text || a.textContent || a.innerHTML || "").replace($t, "")));
                d = o = null
            }
            return t
        }

        function At(t, e, i) { for (var n, o = e ? p.filter(e, t) : t, s = 0; null != (n = o[s]); s++) i || 1 !== n.nodeType || p.cleanData(it(n)), n.parentNode && (i && p.contains(n.ownerDocument, n) && nt(it(n, "script")), n.parentNode.removeChild(n)); return t }
        p.extend({
            htmlPrefilter: function(t) { return t.replace(bt, "<$1></$2>") },
            clone: function(t, e, i) {
                var n, o, s, a, r, l = p.contains(t.ownerDocument, t);
                if (h.html5Clone || p.isXMLDoc(t) || !yt.test("<" + t.nodeName + ">") ? s = t.cloneNode(!0) : (kt.innerHTML = t.outerHTML, kt.removeChild(s = kt.firstChild)), !(h.noCloneEvent && h.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || p.isXMLDoc(t)))
                    for (n = it(s), r = it(t), a = 0; null != (o = r[a]); ++a) n[a] && Mt(o, n[a]);
                if (e)
                    if (i)
                        for (r = r || it(t), n = n || it(s), a = 0; null != (o = r[a]); a++) Dt(o, n[a]);
                    else Dt(t, s);
                return (n = it(s, "script")).length > 0 && nt(n, !l && it(t, "script")), n = r = o = null, s
            },
            cleanData: function(t, e) {
                for (var n, o, s, a, r = 0, l = p.expando, c = p.cache, d = h.attributes, u = p.event.special; null != (n = t[r]); r++)
                    if ((e || O(n)) && (a = (s = n[l]) && c[s])) {
                        if (a.events)
                            for (o in a.events) u[o] ? p.event.remove(n, o) : p.removeEvent(n, o, a.handle);
                        c[s] && (delete c[s], d || void 0 === n.removeAttribute ? n[l] = void 0 : n.removeAttribute(l), i.push(s))
                    }
            }
        }), p.fn.extend({
            domManip: It,
            detach: function(t) { return At(this, t, !0) },
            remove: function(t) { return At(this, t) },
            text: function(t) { return G(this, function(t) { return void 0 === t ? p.text(this) : this.empty().append((this[0] && this[0].ownerDocument || n).createTextNode(t)) }, null, t, arguments.length) },
            append: function() { return It(this, arguments, function(t) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Tt(this, t).appendChild(t) }) },
            prepend: function() {
                return It(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = Tt(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() { return It(this, arguments, function(t) { this.parentNode && this.parentNode.insertBefore(t, this) }) },
            after: function() { return It(this, arguments, function(t) { this.parentNode && this.parentNode.insertBefore(t, this.nextSibling) }) },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) {
                    for (1 === t.nodeType && p.cleanData(it(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                    t.options && p.nodeName(t, "select") && (t.options.length = 0)
                }
                return this
            },
            clone: function(t, e) { return t = null != t && t, e = null == e ? t : e, this.map(function() { return p.clone(this, t, e) }) },
            html: function(t) {
                return G(this, function(t) {
                    var e = this[0] || {},
                        i = 0,
                        n = this.length;
                    if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(vt, "") : void 0;
                    if ("string" == typeof t && !_t.test(t) && (h.htmlSerialize || !yt.test(t)) && (h.leadingWhitespace || !J.test(t)) && !et[(Z.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = p.htmlPrefilter(t);
                        try {
                            for (; n > i; i++) 1 === (e = this[i] || {}).nodeType && (p.cleanData(it(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = [];
                return It(this, arguments, function(e) {
                    var i = this.parentNode;
                    p.inArray(this, t) < 0 && (p.cleanData(it(this)), i && i.replaceChild(e, this))
                }, t)
            }
        }), p.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(t, e) { p.fn[t] = function(t) { for (var i, n = 0, o = [], s = p(t), r = s.length - 1; r >= n; n++) i = n === r ? this : this.clone(!0), p(s[n])[e](i), a.apply(o, i.get()); return this.pushStack(o) } });
        var Lt, Pt = { HTML: "block", BODY: "block" };

        function Et(t, e) {
            var i = p(e.createElement(t)).appendTo(e.body),
                n = p.css(i[0], "display");
            return i.detach(), n
        }

        function Ft(t) {
            var e = n,
                i = Pt[t];
            return i || ("none" !== (i = Et(t, e)) && i || ((e = ((Lt = (Lt || p("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement))[0].contentWindow || Lt[0].contentDocument).document).write(), e.close(), i = Et(t, e), Lt.detach()), Pt[t] = i), i
        }
        var Ot = /^margin/,
            Nt = new RegExp("^(" + R + ")(?!px)[a-z%]+$", "i"),
            Yt = function(t, e, i, n) { var o, s, a = {}; for (s in e) a[s] = t.style[s], t.style[s] = e[s]; for (s in o = i.apply(t, n || []), e) t.style[s] = a[s]; return o },
            qt = n.documentElement;
        ! function() {
            var e, i, o, s, a, r, l = n.createElement("div"),
                c = n.createElement("div");
            if (c.style) {
                function d() {
                    var d, h, u = n.documentElement;
                    u.appendChild(l), c.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", e = o = r = !1, i = a = !0, t.getComputedStyle && (h = t.getComputedStyle(c), e = "1%" !== (h || {}).top, r = "2px" === (h || {}).marginLeft, o = "4px" === (h || { width: "4px" }).width, c.style.marginRight = "50%", i = "4px" === (h || { marginRight: "4px" }).marginRight, (d = c.appendChild(n.createElement("div"))).style.cssText = c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", d.style.marginRight = d.style.width = "0", c.style.width = "1px", a = !parseFloat((t.getComputedStyle(d) || {}).marginRight), c.removeChild(d)), c.style.display = "none", (s = 0 === c.getClientRects().length) && (c.style.display = "", c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", c.childNodes[0].style.borderCollapse = "separate", (d = c.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (s = 0 === d[0].offsetHeight) && (d[0].style.display = "", d[1].style.display = "none", s = 0 === d[0].offsetHeight)), u.removeChild(l)
                }
                c.style.cssText = "float:left;opacity:.5", h.opacity = "0.5" === c.style.opacity, h.cssFloat = !!c.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, (l = n.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", c.innerHTML = "", l.appendChild(c), h.boxSizing = "" === c.style.boxSizing || "" === c.style.MozBoxSizing || "" === c.style.WebkitBoxSizing, p.extend(h, { reliableHiddenOffsets: function() { return null == e && d(), s }, boxSizingReliable: function() { return null == e && d(), o }, pixelMarginRight: function() { return null == e && d(), i }, pixelPosition: function() { return null == e && d(), e }, reliableMarginRight: function() { return null == e && d(), a }, reliableMarginLeft: function() { return null == e && d(), r } })
            }
        }();
        var jt, Ht, Vt = /^(top|right|bottom|left)$/;

        function Rt(t, e) { return { get: function() { return t() ? void delete this.get : (this.get = e).apply(this, arguments) } } }
        t.getComputedStyle ? (jt = function(e) { var i = e.ownerDocument.defaultView; return i && i.opener || (i = t), i.getComputedStyle(e) }, Ht = function(t, e, i) { var n, o, s, a, r = t.style; return "" !== (a = (i = i || jt(t)) ? i.getPropertyValue(e) || i[e] : void 0) && void 0 !== a || p.contains(t.ownerDocument, t) || (a = p.style(t, e)), i && !h.pixelMarginRight() && Nt.test(a) && Ot.test(e) && (n = r.width, o = r.minWidth, s = r.maxWidth, r.minWidth = r.maxWidth = r.width = a, a = i.width, r.width = n, r.minWidth = o, r.maxWidth = s), void 0 === a ? a : a + "" }) : qt.currentStyle && (jt = function(t) { return t.currentStyle }, Ht = function(t, e, i) { var n, o, s, a, r = t.style; return null == (a = (i = i || jt(t)) ? i[e] : void 0) && r && r[e] && (a = r[e]), Nt.test(a) && !Vt.test(e) && (n = r.left, (s = (o = t.runtimeStyle) && o.left) && (o.left = t.currentStyle.left), r.left = "fontSize" === e ? "1em" : a, a = r.pixelLeft + "px", r.left = n, s && (o.left = s)), void 0 === a ? a : a + "" || "auto" });
        var Ut = /alpha\([^)]*\)/i,
            Wt = /opacity\s*=\s*([^)]*)/i,
            zt = /^(none|table(?!-c[ea]).+)/,
            Bt = new RegExp("^(" + R + ")(.*)$", "i"),
            Gt = { position: "absolute", visibility: "hidden", display: "block" },
            Xt = { letterSpacing: "0", fontWeight: "400" },
            Zt = ["Webkit", "O", "Moz", "ms"],
            Qt = n.createElement("div").style;

        function Jt(t) {
            if (t in Qt) return t;
            for (var e = t.charAt(0).toUpperCase() + t.slice(1), i = Zt.length; i--;)
                if ((t = Zt[i] + e) in Qt) return t
        }

        function Kt(t, e) { for (var i, n, o, s = [], a = 0, r = t.length; r > a; a++)(n = t[a]).style && (s[a] = p._data(n, "olddisplay"), i = n.style.display, e ? (s[a] || "none" !== i || (n.style.display = ""), "" === n.style.display && z(n) && (s[a] = p._data(n, "olddisplay", Ft(n.nodeName)))) : (o = z(n), (i && "none" !== i || !o) && p._data(n, "olddisplay", o ? i : p.css(n, "display")))); for (a = 0; r > a; a++)(n = t[a]).style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? s[a] || "" : "none")); return t }

        function te(t, e, i) { var n = Bt.exec(e); return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e }

        function ee(t, e, i, n, o) { for (var s = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > s; s += 2) "margin" === i && (a += p.css(t, i + W[s], !0, o)), n ? ("content" === i && (a -= p.css(t, "padding" + W[s], !0, o)), "margin" !== i && (a -= p.css(t, "border" + W[s] + "Width", !0, o))) : (a += p.css(t, "padding" + W[s], !0, o), "padding" !== i && (a += p.css(t, "border" + W[s] + "Width", !0, o))); return a }

        function ie(t, e, i) {
            var n = !0,
                o = "width" === e ? t.offsetWidth : t.offsetHeight,
                s = jt(t),
                a = h.boxSizing && "border-box" === p.css(t, "boxSizing", !1, s);
            if (0 >= o || null == o) {
                if ((0 > (o = Ht(t, e, s)) || null == o) && (o = t.style[e]), Nt.test(o)) return o;
                n = a && (h.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
            }
            return o + ee(t, e, i || (a ? "border" : "content"), n, s) + "px"
        }

        function ne(t, e, i, n, o) { return new ne.prototype.init(t, e, i, n, o) }
        p.extend({
            cssHooks: { opacity: { get: function(t, e) { if (e) { var i = Ht(t, "opacity"); return "" === i ? "1" : i } } } },
            cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
            cssProps: { float: h.cssFloat ? "cssFloat" : "styleFloat" },
            style: function(t, e, i, n) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var o, s, a, r = p.camelCase(e),
                        l = t.style;
                    if (e = p.cssProps[r] || (p.cssProps[r] = Jt(r) || r), a = p.cssHooks[e] || p.cssHooks[r], void 0 === i) return a && "get" in a && void 0 !== (o = a.get(t, !1, n)) ? o : l[e];
                    if ("string" === (s = typeof i) && (o = U.exec(i)) && o[1] && (i = B(t, e, o), s = "number"), null != i && i == i && ("number" === s && (i += o && o[3] || (p.cssNumber[r] ? "" : "px")), h.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(a && "set" in a && void 0 === (i = a.set(t, i, n))))) try { l[e] = i } catch (t) {}
                }
            },
            css: function(t, e, i, n) { var o, s, a, r = p.camelCase(e); return e = p.cssProps[r] || (p.cssProps[r] = Jt(r) || r), (a = p.cssHooks[e] || p.cssHooks[r]) && "get" in a && (s = a.get(t, !0, i)), void 0 === s && (s = Ht(t, e, n)), "normal" === s && e in Xt && (s = Xt[e]), "" === i || i ? (o = parseFloat(s), !0 === i || isFinite(o) ? o || 0 : s) : s }
        }), p.each(["height", "width"], function(t, e) { p.cssHooks[e] = { get: function(t, i, n) { return i ? zt.test(p.css(t, "display")) && 0 === t.offsetWidth ? Yt(t, Gt, function() { return ie(t, e, n) }) : ie(t, e, n) : void 0 }, set: function(t, i, n) { var o = n && jt(t); return te(0, i, n ? ee(t, e, n, h.boxSizing && "border-box" === p.css(t, "boxSizing", !1, o), o) : 0) } } }), h.opacity || (p.cssHooks.opacity = {
            get: function(t, e) { return Wt.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : "" },
            set: function(t, e) {
                var i = t.style,
                    n = t.currentStyle,
                    o = p.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                    s = n && n.filter || i.filter || "";
                i.zoom = 1, (e >= 1 || "" === e) && "" === p.trim(s.replace(Ut, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || n && !n.filter) || (i.filter = Ut.test(s) ? s.replace(Ut, o) : s + " " + o)
            }
        }), p.cssHooks.marginRight = Rt(h.reliableMarginRight, function(t, e) { return e ? Yt(t, { display: "inline-block" }, Ht, [t, "marginRight"]) : void 0 }), p.cssHooks.marginLeft = Rt(h.reliableMarginLeft, function(t, e) { return e ? (parseFloat(Ht(t, "marginLeft")) || (p.contains(t.ownerDocument, t) ? t.getBoundingClientRect().left - Yt(t, { marginLeft: 0 }, function() { return t.getBoundingClientRect().left }) : 0)) + "px" : void 0 }), p.each({ margin: "", padding: "", border: "Width" }, function(t, e) { p.cssHooks[t + e] = { expand: function(i) { for (var n = 0, o = {}, s = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) o[t + W[n] + e] = s[n] || s[n - 2] || s[0]; return o } }, Ot.test(t) || (p.cssHooks[t + e].set = te) }), p.fn.extend({
            css: function(t, e) {
                return G(this, function(t, e, i) {
                    var n, o, s = {},
                        a = 0;
                    if (p.isArray(e)) { for (n = jt(t), o = e.length; o > a; a++) s[e[a]] = p.css(t, e[a], !1, n); return s }
                    return void 0 !== i ? p.style(t, e, i) : p.css(t, e)
                }, t, e, arguments.length > 1)
            },
            show: function() { return Kt(this, !0) },
            hide: function() { return Kt(this) },
            toggle: function(t) { return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() { z(this) ? p(this).show() : p(this).hide() }) }
        }), p.Tween = ne, ne.prototype = { constructor: ne, init: function(t, e, i, n, o, s) { this.elem = t, this.prop = i, this.easing = o || p.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = s || (p.cssNumber[i] ? "" : "px") }, cur: function() { var t = ne.propHooks[this.prop]; return t && t.get ? t.get(this) : ne.propHooks._default.get(this) }, run: function(t) { var e, i = ne.propHooks[this.prop]; return this.options.duration ? this.pos = e = p.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : ne.propHooks._default.set(this), this } }, ne.prototype.init.prototype = ne.prototype, ne.propHooks = { _default: { get: function(t) { var e; return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = p.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0 }, set: function(t) { p.fx.step[t.prop] ? p.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[p.cssProps[t.prop]] && !p.cssHooks[t.prop] ? t.elem[t.prop] = t.now : p.style(t.elem, t.prop, t.now + t.unit) } } }, ne.propHooks.scrollTop = ne.propHooks.scrollLeft = { set: function(t) { t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now) } }, p.easing = { linear: function(t) { return t }, swing: function(t) { return .5 - Math.cos(t * Math.PI) / 2 }, _default: "swing" }, p.fx = ne.prototype.init, p.fx.step = {};
        var oe, se, ae = /^(?:toggle|show|hide)$/,
            re = /queueHooks$/;

        function le() { return t.setTimeout(function() { oe = void 0 }), oe = p.now() }

        function ce(t, e) {
            var i, n = { height: t },
                o = 0;
            for (e = e ? 1 : 0; 4 > o; o += 2 - e) n["margin" + (i = W[o])] = n["padding" + i] = t;
            return e && (n.opacity = n.width = t), n
        }

        function de(t, e, i) {
            for (var n, o = (he.tweeners[e] || []).concat(he.tweeners["*"]), s = 0, a = o.length; a > s; s++)
                if (n = o[s].call(i, e, t)) return n
        }

        function he(t, e, i) {
            var n, o, s = 0,
                a = he.prefilters.length,
                r = p.Deferred().always(function() { delete l.elem }),
                l = function() { if (o) return !1; for (var e = oe || le(), i = Math.max(0, c.startTime + c.duration - e), n = 1 - (i / c.duration || 0), s = 0, a = c.tweens.length; a > s; s++) c.tweens[s].run(n); return r.notifyWith(t, [c, n, i]), 1 > n && a ? i : (r.resolveWith(t, [c]), !1) },
                c = r.promise({
                    elem: t,
                    props: p.extend({}, e),
                    opts: p.extend(!0, { specialEasing: {}, easing: p.easing._default }, i),
                    originalProperties: e,
                    originalOptions: i,
                    startTime: oe || le(),
                    duration: i.duration,
                    tweens: [],
                    createTween: function(e, i) { var n = p.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing); return c.tweens.push(n), n },
                    stop: function(e) {
                        var i = 0,
                            n = e ? c.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; n > i; i++) c.tweens[i].run(1);
                        return e ? (r.notifyWith(t, [c, 1, 0]), r.resolveWith(t, [c, e])) : r.rejectWith(t, [c, e]), this
                    }
                }),
                d = c.props;
            for (function(t, e) {
                    var i, n, o, s, a;
                    for (i in t)
                        if (o = e[n = p.camelCase(i)], s = t[i], p.isArray(s) && (o = s[1], s = t[i] = s[0]), i !== n && (t[n] = s, delete t[i]), (a = p.cssHooks[n]) && "expand" in a)
                            for (i in s = a.expand(s), delete t[n], s) i in t || (t[i] = s[i], e[i] = o);
                        else e[n] = o
                }(d, c.opts.specialEasing); a > s; s++)
                if (n = he.prefilters[s].call(c, t, d, c.opts)) return p.isFunction(n.stop) && (p._queueHooks(c.elem, c.opts.queue).stop = p.proxy(n.stop, n)), n;
            return p.map(d, de, c), p.isFunction(c.opts.start) && c.opts.start.call(t, c), p.fx.timer(p.extend(l, { elem: t, anim: c, queue: c.opts.queue })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }
        p.Animation = p.extend(he, {
                tweeners: { "*": [function(t, e) { var i = this.createTween(t, e); return B(i.elem, t, U.exec(e), i), i }] },
                tweener: function(t, e) { p.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(P); for (var i, n = 0, o = t.length; o > n; n++) i = t[n], he.tweeners[i] = he.tweeners[i] || [], he.tweeners[i].unshift(e) },
                prefilters: [function(t, e, i) {
                    var n, o, s, a, r, l, c, d = this,
                        u = {},
                        f = t.style,
                        m = t.nodeType && z(t),
                        g = p._data(t, "fxshow");
                    for (n in i.queue || (null == (r = p._queueHooks(t, "fx")).unqueued && (r.unqueued = 0, l = r.empty.fire, r.empty.fire = function() { r.unqueued || l() }), r.unqueued++, d.always(function() { d.always(function() { r.unqueued--, p.queue(t, "fx").length || r.empty.fire() }) })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === ("none" === (c = p.css(t, "display")) ? p._data(t, "olddisplay") || Ft(t.nodeName) : c) && "none" === p.css(t, "float") && (h.inlineBlockNeedsLayout && "inline" !== Ft(t.nodeName) ? f.zoom = 1 : f.display = "inline-block")), i.overflow && (f.overflow = "hidden", h.shrinkWrapBlocks() || d.always(function() { f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2] })), e)
                        if (o = e[n], ae.exec(o)) {
                            if (delete e[n], s = s || "toggle" === o, o === (m ? "hide" : "show")) {
                                if ("show" !== o || !g || void 0 === g[n]) continue;
                                m = !0
                            }
                            u[n] = g && g[n] || p.style(t, n)
                        } else c = void 0;
                    if (p.isEmptyObject(u)) "inline" === ("none" === c ? Ft(t.nodeName) : c) && (f.display = c);
                    else
                        for (n in g ? "hidden" in g && (m = g.hidden) : g = p._data(t, "fxshow", {}), s && (g.hidden = !m), m ? p(t).show() : d.done(function() { p(t).hide() }), d.done(function() { var e; for (e in p._removeData(t, "fxshow"), u) p.style(t, e, u[e]) }), u) a = de(m ? g[n] : 0, n, d), n in g || (g[n] = a.start, m && (a.end = a.start, a.start = "width" === n || "height" === n ? 1 : 0))
                }],
                prefilter: function(t, e) { e ? he.prefilters.unshift(t) : he.prefilters.push(t) }
            }), p.speed = function(t, e, i) { var n = t && "object" == typeof t ? p.extend({}, t) : { complete: i || !i && e || p.isFunction(t) && t, duration: t, easing: i && e || e && !p.isFunction(e) && e }; return n.duration = p.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in p.fx.speeds ? p.fx.speeds[n.duration] : p.fx.speeds._default, null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() { p.isFunction(n.old) && n.old.call(this), n.queue && p.dequeue(this, n.queue) }, n }, p.fn.extend({
                fadeTo: function(t, e, i, n) { return this.filter(z).css("opacity", 0).show().end().animate({ opacity: e }, t, i, n) },
                animate: function(t, e, i, n) {
                    var o = p.isEmptyObject(t),
                        s = p.speed(e, i, n),
                        a = function() {
                            var e = he(this, p.extend({}, t), s);
                            (o || p._data(this, "finish")) && e.stop(!0)
                        };
                    return a.finish = a, o || !1 === s.queue ? this.each(a) : this.queue(s.queue, a)
                },
                stop: function(t, e, i) {
                    var n = function(t) {
                        var e = t.stop;
                        delete t.stop, e(i)
                    };
                    return "string" != typeof t && (i = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function() {
                        var e = !0,
                            o = null != t && t + "queueHooks",
                            s = p.timers,
                            a = p._data(this);
                        if (o) a[o] && a[o].stop && n(a[o]);
                        else
                            for (o in a) a[o] && a[o].stop && re.test(o) && n(a[o]);
                        for (o = s.length; o--;) s[o].elem !== this || null != t && s[o].queue !== t || (s[o].anim.stop(i), e = !1, s.splice(o, 1));
                        !e && i || p.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return !1 !== t && (t = t || "fx"), this.each(function() {
                        var e, i = p._data(this),
                            n = i[t + "queue"],
                            o = i[t + "queueHooks"],
                            s = p.timers,
                            a = n ? n.length : 0;
                        for (i.finish = !0, p.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                        for (e = 0; a > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete i.finish
                    })
                }
            }), p.each(["toggle", "show", "hide"], function(t, e) {
                var i = p.fn[e];
                p.fn[e] = function(t, n, o) { return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(ce(e, !0), t, n, o) }
            }), p.each({ slideDown: ce("show"), slideUp: ce("hide"), slideToggle: ce("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(t, e) { p.fn[t] = function(t, i, n) { return this.animate(e, t, i, n) } }), p.timers = [], p.fx.tick = function() {
                var t, e = p.timers,
                    i = 0;
                for (oe = p.now(); i < e.length; i++)(t = e[i])() || e[i] !== t || e.splice(i--, 1);
                e.length || p.fx.stop(), oe = void 0
            }, p.fx.timer = function(t) { p.timers.push(t), t() ? p.fx.start() : p.timers.pop() }, p.fx.interval = 13, p.fx.start = function() { se || (se = t.setInterval(p.fx.tick, p.fx.interval)) }, p.fx.stop = function() { t.clearInterval(se), se = null }, p.fx.speeds = { slow: 600, fast: 200, _default: 400 }, p.fn.delay = function(e, i) {
                return e = p.fx && p.fx.speeds[e] || e, i = i || "fx", this.queue(i, function(i, n) {
                    var o = t.setTimeout(i, e);
                    n.stop = function() { t.clearTimeout(o) }
                })
            },
            function() {
                var t, e = n.createElement("input"),
                    i = n.createElement("div"),
                    o = n.createElement("select"),
                    s = o.appendChild(n.createElement("option"));
                (i = n.createElement("div")).setAttribute("className", "t"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = i.getElementsByTagName("a")[0], e.setAttribute("type", "checkbox"), i.appendChild(e), (t = i.getElementsByTagName("a")[0]).style.cssText = "top:1px", h.getSetAttribute = "t" !== i.className, h.style = /top/.test(t.getAttribute("style")), h.hrefNormalized = "/a" === t.getAttribute("href"), h.checkOn = !!e.value, h.optSelected = s.selected, h.enctype = !!n.createElement("form").enctype, o.disabled = !0, h.optDisabled = !s.disabled, (e = n.createElement("input")).setAttribute("value", ""), h.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), h.radioValue = "t" === e.value
            }();
        var ue = /\r/g,
            pe = /[\x20\t\r\n\f]+/g;
        p.fn.extend({
            val: function(t) {
                var e, i, n, o = this[0];
                return arguments.length ? (n = p.isFunction(t), this.each(function(i) {
                    var o;
                    1 === this.nodeType && (null == (o = n ? t.call(this, i, p(this).val()) : t) ? o = "" : "number" == typeof o ? o += "" : p.isArray(o) && (o = p.map(o, function(t) { return null == t ? "" : t + "" })), (e = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                })) : o ? (e = p.valHooks[o.type] || p.valHooks[o.nodeName.toLowerCase()]) && "get" in e && void 0 !== (i = e.get(o, "value")) ? i : "string" == typeof(i = o.value) ? i.replace(ue, "") : null == i ? "" : i : void 0
            }
        }), p.extend({
            valHooks: {
                option: { get: function(t) { var e = p.find.attr(t, "value"); return null != e ? e : p.trim(p.text(t)).replace(pe, " ") } },
                select: {
                    get: function(t) {
                        for (var e, i, n = t.options, o = t.selectedIndex, s = "select-one" === t.type || 0 > o, a = s ? null : [], r = s ? o + 1 : n.length, l = 0 > o ? r : s ? o : 0; r > l; l++)
                            if (((i = n[l]).selected || l === o) && (h.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !p.nodeName(i.parentNode, "optgroup"))) {
                                if (e = p(i).val(), s) return e;
                                a.push(e)
                            }
                        return a
                    },
                    set: function(t, e) {
                        for (var i, n, o = t.options, s = p.makeArray(e), a = o.length; a--;)
                            if (n = o[a], p.inArray(p.valHooks.option.get(n), s) > -1) try { n.selected = i = !0 } catch (t) { n.scrollHeight } else n.selected = !1;
                        return i || (t.selectedIndex = -1), o
                    }
                }
            }
        }), p.each(["radio", "checkbox"], function() { p.valHooks[this] = { set: function(t, e) { return p.isArray(e) ? t.checked = p.inArray(p(t).val(), e) > -1 : void 0 } }, h.checkOn || (p.valHooks[this].get = function(t) { return null === t.getAttribute("value") ? "on" : t.value }) });
        var fe, me, ge = p.expr.attrHandle,
            ve = /^(?:checked|selected)$/i,
            ye = h.getSetAttribute,
            be = h.input;
        p.fn.extend({ attr: function(t, e) { return G(this, p.attr, t, e, arguments.length > 1) }, removeAttr: function(t) { return this.each(function() { p.removeAttr(this, t) }) } }), p.extend({
            attr: function(t, e, i) { var n, o, s = t.nodeType; if (3 !== s && 8 !== s && 2 !== s) return void 0 === t.getAttribute ? p.prop(t, e, i) : (1 === s && p.isXMLDoc(t) || (e = e.toLowerCase(), o = p.attrHooks[e] || (p.expr.match.bool.test(e) ? me : fe)), void 0 !== i ? null === i ? void p.removeAttr(t, e) : o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : o && "get" in o && null !== (n = o.get(t, e)) ? n : null == (n = p.find.attr(t, e)) ? void 0 : n) },
            attrHooks: { type: { set: function(t, e) { if (!h.radioValue && "radio" === e && p.nodeName(t, "input")) { var i = t.value; return t.setAttribute("type", e), i && (t.value = i), e } } } },
            removeAttr: function(t, e) {
                var i, n, o = 0,
                    s = e && e.match(P);
                if (s && 1 === t.nodeType)
                    for (; i = s[o++];) n = p.propFix[i] || i, p.expr.match.bool.test(i) ? be && ye || !ve.test(i) ? t[n] = !1 : t[p.camelCase("default-" + i)] = t[n] = !1 : p.attr(t, i, ""), t.removeAttribute(ye ? i : n)
            }
        }), me = { set: function(t, e, i) { return !1 === e ? p.removeAttr(t, i) : be && ye || !ve.test(i) ? t.setAttribute(!ye && p.propFix[i] || i, i) : t[p.camelCase("default-" + i)] = t[i] = !0, i } }, p.each(p.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var i = ge[e] || p.find.attr;
            be && ye || !ve.test(e) ? ge[e] = function(t, e, n) { var o, s; return n || (s = ge[e], ge[e] = o, o = null != i(t, e, n) ? e.toLowerCase() : null, ge[e] = s), o } : ge[e] = function(t, e, i) { return i ? void 0 : t[p.camelCase("default-" + e)] ? e.toLowerCase() : null }
        }), be && ye || (p.attrHooks.value = { set: function(t, e, i) { return p.nodeName(t, "input") ? void(t.defaultValue = e) : fe && fe.set(t, e, i) } }), ye || (fe = { set: function(t, e, i) { var n = t.getAttributeNode(i); return n || t.setAttributeNode(n = t.ownerDocument.createAttribute(i)), n.value = e += "", "value" === i || e === t.getAttribute(i) ? e : void 0 } }, ge.id = ge.name = ge.coords = function(t, e, i) { var n; return i ? void 0 : (n = t.getAttributeNode(e)) && "" !== n.value ? n.value : null }, p.valHooks.button = { get: function(t, e) { var i = t.getAttributeNode(e); return i && i.specified ? i.value : void 0 }, set: fe.set }, p.attrHooks.contenteditable = { set: function(t, e, i) { fe.set(t, "" !== e && e, i) } }, p.each(["width", "height"], function(t, e) { p.attrHooks[e] = { set: function(t, i) { return "" === i ? (t.setAttribute(e, "auto"), i) : void 0 } } })), h.style || (p.attrHooks.style = { get: function(t) { return t.style.cssText || void 0 }, set: function(t, e) { return t.style.cssText = e + "" } });
        var _e = /^(?:input|select|textarea|button|object)$/i,
            we = /^(?:a|area)$/i;
        p.fn.extend({ prop: function(t, e) { return G(this, p.prop, t, e, arguments.length > 1) }, removeProp: function(t) { return t = p.propFix[t] || t, this.each(function() { try { this[t] = void 0, delete this[t] } catch (t) {} }) } }), p.extend({ prop: function(t, e, i) { var n, o, s = t.nodeType; if (3 !== s && 8 !== s && 2 !== s) return 1 === s && p.isXMLDoc(t) || (e = p.propFix[e] || e, o = p.propHooks[e]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : t[e] = i : o && "get" in o && null !== (n = o.get(t, e)) ? n : t[e] }, propHooks: { tabIndex: { get: function(t) { var e = p.find.attr(t, "tabindex"); return e ? parseInt(e, 10) : _e.test(t.nodeName) || we.test(t.nodeName) && t.href ? 0 : -1 } } }, propFix: { for: "htmlFor", class: "className" } }), h.hrefNormalized || p.each(["href", "src"], function(t, e) { p.propHooks[e] = { get: function(t) { return t.getAttribute(e, 4) } } }), h.optSelected || (p.propHooks.selected = {
            get: function(t) { var e = t.parentNode; return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null },
            set: function(t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), p.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { p.propFix[this.toLowerCase()] = this }), h.enctype || (p.propFix.enctype = "encoding");
        var xe = /[\t\r\n\f]/g;

        function $e(t) { return p.attr(t, "class") || "" }
        p.fn.extend({
            addClass: function(t) {
                var e, i, n, o, s, a, r, l = 0;
                if (p.isFunction(t)) return this.each(function(e) { p(this).addClass(t.call(this, e, $e(this))) });
                if ("string" == typeof t && t)
                    for (e = t.match(P) || []; i = this[l++];)
                        if (o = $e(i), n = 1 === i.nodeType && (" " + o + " ").replace(xe, " ")) {
                            for (a = 0; s = e[a++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                            o !== (r = p.trim(n)) && p.attr(i, "class", r)
                        }
                return this
            },
            removeClass: function(t) {
                var e, i, n, o, s, a, r, l = 0;
                if (p.isFunction(t)) return this.each(function(e) { p(this).removeClass(t.call(this, e, $e(this))) });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof t && t)
                    for (e = t.match(P) || []; i = this[l++];)
                        if (o = $e(i), n = 1 === i.nodeType && (" " + o + " ").replace(xe, " ")) {
                            for (a = 0; s = e[a++];)
                                for (; n.indexOf(" " + s + " ") > -1;) n = n.replace(" " + s + " ", " ");
                            o !== (r = p.trim(n)) && p.attr(i, "class", r)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var i = typeof t;
                return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : p.isFunction(t) ? this.each(function(i) { p(this).toggleClass(t.call(this, i, $e(this), e), e) }) : this.each(function() {
                    var e, n, o, s;
                    if ("string" === i)
                        for (n = 0, o = p(this), s = t.match(P) || []; e = s[n++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                    else void 0 !== t && "boolean" !== i || ((e = $e(this)) && p._data(this, "__className__", e), p.attr(this, "class", e || !1 === t ? "" : p._data(this, "__className__") || ""))
                })
            },
            hasClass: function(t) {
                var e, i, n = 0;
                for (e = " " + t + " "; i = this[n++];)
                    if (1 === i.nodeType && (" " + $e(i) + " ").replace(xe, " ").indexOf(e) > -1) return !0;
                return !1
            }
        }), p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) { p.fn[e] = function(t, i) { return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e) } }), p.fn.extend({ hover: function(t, e) { return this.mouseenter(t).mouseleave(e || t) } });
        var ke = t.location,
            Te = p.now(),
            Se = /\?/,
            Ce = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        p.parseJSON = function(e) {
            if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
            var i, n = null,
                o = p.trim(e + "");
            return o && !p.trim(o.replace(Ce, function(t, e, o, s) { return i && e && (n = 0), 0 === n ? t : (i = o || e, n += !s - !o, "") })) ? Function("return " + o)() : p.error("Invalid JSON: " + e)
        }, p.parseXML = function(e) { var i; if (!e || "string" != typeof e) return null; try { t.DOMParser ? i = (new t.DOMParser).parseFromString(e, "text/xml") : ((i = new t.ActiveXObject("Microsoft.XMLDOM")).async = "false", i.loadXML(e)) } catch (t) { i = void 0 } return i && i.documentElement && !i.getElementsByTagName("parsererror").length || p.error("Invalid XML: " + e), i };
        var De = /#.*$/,
            Me = /([?&])_=[^&]*/,
            Ie = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Ae = /^(?:GET|HEAD)$/,
            Le = /^\/\//,
            Pe = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            Ee = {},
            Fe = {},
            Oe = "*/".concat("*"),
            Ne = ke.href,
            Ye = Pe.exec(Ne.toLowerCase()) || [];

        function qe(t) {
            return function(e, i) {
                "string" != typeof e && (i = e, e = "*");
                var n, o = 0,
                    s = e.toLowerCase().match(P) || [];
                if (p.isFunction(i))
                    for (; n = s[o++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
            }
        }

        function je(t, e, i, n) {
            var o = {},
                s = t === Fe;

            function a(r) { var l; return o[r] = !0, p.each(t[r] || [], function(t, r) { var c = r(e, i, n); return "string" != typeof c || s || o[c] ? s ? !(l = c) : void 0 : (e.dataTypes.unshift(c), a(c), !1) }), l }
            return a(e.dataTypes[0]) || !o["*"] && a("*")
        }

        function He(t, e) { var i, n, o = p.ajaxSettings.flatOptions || {}; for (n in e) void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]); return i && p.extend(!0, t, i), t }

        function Ve(t) { return t.style && t.style.display || p.css(t, "display") }
        p.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: { url: Ne, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ye[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Oe, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": p.parseJSON, "text xml": p.parseXML }, flatOptions: { url: !0, context: !0 } },
            ajaxSetup: function(t, e) { return e ? He(He(t, p.ajaxSettings), e) : He(p.ajaxSettings, t) },
            ajaxPrefilter: qe(Ee),
            ajaxTransport: qe(Fe),
            ajax: function(e, i) {
                "object" == typeof e && (i = e, e = void 0), i = i || {};
                var n, o, s, a, r, l, c, d, h = p.ajaxSetup({}, i),
                    u = h.context || h,
                    f = h.context && (u.nodeType || u.jquery) ? p(u) : p.event,
                    m = p.Deferred(),
                    g = p.Callbacks("once memory"),
                    v = h.statusCode || {},
                    y = {},
                    b = {},
                    _ = 0,
                    w = "canceled",
                    x = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === _) {
                                if (!d)
                                    for (d = {}; e = Ie.exec(a);) d[e[1].toLowerCase()] = e[2];
                                e = d[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() { return 2 === _ ? a : null },
                        setRequestHeader: function(t, e) { var i = t.toLowerCase(); return _ || (t = b[i] = b[i] || t, y[t] = e), this },
                        overrideMimeType: function(t) { return _ || (h.mimeType = t), this },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (2 > _)
                                    for (e in t) v[e] = [v[e], t[e]];
                                else x.always(t[x.status]);
                            return this
                        },
                        abort: function(t) { var e = t || w; return c && c.abort(e), $(0, e), this }
                    };
                if (m.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, h.url = ((e || h.url || Ne) + "").replace(De, "").replace(Le, Ye[1] + "//"), h.type = i.method || i.type || h.method || h.type, h.dataTypes = p.trim(h.dataType || "*").toLowerCase().match(P) || [""], null == h.crossDomain && (n = Pe.exec(h.url.toLowerCase()), h.crossDomain = !(!n || n[1] === Ye[1] && n[2] === Ye[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (Ye[3] || ("http:" === Ye[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = p.param(h.data, h.traditional)), je(Ee, h, i, x), 2 === _) return x;
                for (o in (l = p.event && h.global) && 0 == p.active++ && p.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Ae.test(h.type), s = h.url, h.hasContent || (h.data && (s = h.url += (Se.test(s) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (h.url = Me.test(s) ? s.replace(Me, "$1_=" + Te++) : s + (Se.test(s) ? "&" : "?") + "_=" + Te++)), h.ifModified && (p.lastModified[s] && x.setRequestHeader("If-Modified-Since", p.lastModified[s]), p.etag[s] && x.setRequestHeader("If-None-Match", p.etag[s])), (h.data && h.hasContent && !1 !== h.contentType || i.contentType) && x.setRequestHeader("Content-Type", h.contentType), x.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Oe + "; q=0.01" : "") : h.accepts["*"]), h.headers) x.setRequestHeader(o, h.headers[o]);
                if (h.beforeSend && (!1 === h.beforeSend.call(u, x, h) || 2 === _)) return x.abort();
                for (o in w = "abort", { success: 1, error: 1, complete: 1 }) x[o](h[o]);
                if (c = je(Fe, h, i, x)) {
                    if (x.readyState = 1, l && f.trigger("ajaxSend", [x, h]), 2 === _) return x;
                    h.async && h.timeout > 0 && (r = t.setTimeout(function() { x.abort("timeout") }, h.timeout));
                    try { _ = 1, c.send(y, $) } catch (t) {
                        if (!(2 > _)) throw t;
                        $(-1, t)
                    }
                } else $(-1, "No Transport");

                function $(e, i, n, o) {
                    var d, y, b, w, $, k = i;
                    2 !== _ && (_ = 2, r && t.clearTimeout(r), c = void 0, a = o || "", x.readyState = e > 0 ? 4 : 0, d = e >= 200 && 300 > e || 304 === e, n && (w = function(t, e, i) {
                        for (var n, o, s, a, r = t.contents, l = t.dataTypes;
                            "*" === l[0];) l.shift(), void 0 === o && (o = t.mimeType || e.getResponseHeader("Content-Type"));
                        if (o)
                            for (a in r)
                                if (r[a] && r[a].test(o)) { l.unshift(a); break }
                        if (l[0] in i) s = l[0];
                        else {
                            for (a in i) {
                                if (!l[0] || t.converters[a + " " + l[0]]) { s = a; break }
                                n || (n = a)
                            }
                            s = s || n
                        }
                        return s ? (s !== l[0] && l.unshift(s), i[s]) : void 0
                    }(h, x, n)), w = function(t, e, i, n) {
                        var o, s, a, r, l, c = {},
                            d = t.dataTypes.slice();
                        if (d[1])
                            for (a in t.converters) c[a.toLowerCase()] = t.converters[a];
                        for (s = d.shift(); s;)
                            if (t.responseFields[s] && (i[t.responseFields[s]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = d.shift())
                                if ("*" === s) s = l;
                                else if ("*" !== l && l !== s) {
                            if (!(a = c[l + " " + s] || c["* " + s]))
                                for (o in c)
                                    if ((r = o.split(" "))[1] === s && (a = c[l + " " + r[0]] || c["* " + r[0]])) {!0 === a ? a = c[o] : !0 !== c[o] && (s = r[0], d.unshift(r[1])); break }
                            if (!0 !== a)
                                if (a && t.throws) e = a(e);
                                else try { e = a(e) } catch (t) { return { state: "parsererror", error: a ? t : "No conversion from " + l + " to " + s } }
                        }
                        return { state: "success", data: e }
                    }(h, w, x, d), d ? (h.ifModified && (($ = x.getResponseHeader("Last-Modified")) && (p.lastModified[s] = $), ($ = x.getResponseHeader("etag")) && (p.etag[s] = $)), 204 === e || "HEAD" === h.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = w.state, y = w.data, d = !(b = w.error))) : (b = k, !e && k || (k = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (i || k) + "", d ? m.resolveWith(u, [y, k, x]) : m.rejectWith(u, [x, k, b]), x.statusCode(v), v = void 0, l && f.trigger(d ? "ajaxSuccess" : "ajaxError", [x, h, d ? y : b]), g.fireWith(u, [x, k]), l && (f.trigger("ajaxComplete", [x, h]), --p.active || p.event.trigger("ajaxStop")))
                }
                return x
            },
            getJSON: function(t, e, i) { return p.get(t, e, i, "json") },
            getScript: function(t, e) { return p.get(t, void 0, e, "script") }
        }), p.each(["get", "post"], function(t, e) { p[e] = function(t, i, n, o) { return p.isFunction(i) && (o = o || n, n = i, i = void 0), p.ajax(p.extend({ url: t, type: e, dataType: o, data: i, success: n }, p.isPlainObject(t) && t)) } }), p._evalUrl = function(t) { return p.ajax({ url: t, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 }) }, p.fn.extend({
            wrapAll: function(t) {
                if (p.isFunction(t)) return this.each(function(e) { p(this).wrapAll(t.call(this, e)) });
                if (this[0]) {
                    var e = p(t, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]), e.map(function() { for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild; return t }).append(this)
                }
                return this
            },
            wrapInner: function(t) {
                return p.isFunction(t) ? this.each(function(e) { p(this).wrapInner(t.call(this, e)) }) : this.each(function() {
                    var e = p(this),
                        i = e.contents();
                    i.length ? i.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) { var e = p.isFunction(t); return this.each(function(i) { p(this).wrapAll(e ? t.call(this, i) : t) }) },
            unwrap: function() { return this.parent().each(function() { p.nodeName(this, "body") || p(this).replaceWith(this.childNodes) }).end() }
        }), p.expr.filters.hidden = function(t) {
            return h.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : function(t) {
                if (!p.contains(t.ownerDocument || n, t)) return !0;
                for (; t && 1 === t.nodeType;) {
                    if ("none" === Ve(t) || "hidden" === t.type) return !0;
                    t = t.parentNode
                }
                return !1
            }(t)
        }, p.expr.filters.visible = function(t) { return !p.expr.filters.hidden(t) };
        var Re = /%20/g,
            Ue = /\[\]$/,
            We = /\r?\n/g,
            ze = /^(?:submit|button|image|reset|file)$/i,
            Be = /^(?:input|select|textarea|keygen)/i;

        function Ge(t, e, i, n) {
            var o;
            if (p.isArray(e)) p.each(e, function(e, o) { i || Ue.test(t) ? n(t, o) : Ge(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, i, n) });
            else if (i || "object" !== p.type(e)) n(t, e);
            else
                for (o in e) Ge(t + "[" + o + "]", e[o], i, n)
        }
        p.param = function(t, e) {
            var i, n = [],
                o = function(t, e) { e = p.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e) };
            if (void 0 === e && (e = p.ajaxSettings && p.ajaxSettings.traditional), p.isArray(t) || t.jquery && !p.isPlainObject(t)) p.each(t, function() { o(this.name, this.value) });
            else
                for (i in t) Ge(i, t[i], e, o);
            return n.join("&").replace(Re, "+")
        }, p.fn.extend({ serialize: function() { return p.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var t = p.prop(this, "elements"); return t ? p.makeArray(t) : this }).filter(function() { var t = this.type; return this.name && !p(this).is(":disabled") && Be.test(this.nodeName) && !ze.test(t) && (this.checked || !X.test(t)) }).map(function(t, e) { var i = p(this).val(); return null == i ? null : p.isArray(i) ? p.map(i, function(t) { return { name: e.name, value: t.replace(We, "\r\n") } }) : { name: e.name, value: i.replace(We, "\r\n") } }).get() } }), p.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() { return this.isLocal ? Ke() : n.documentMode > 8 ? Je() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Je() || Ke() } : Je;
        var Xe = 0,
            Ze = {},
            Qe = p.ajaxSettings.xhr();

        function Je() { try { return new t.XMLHttpRequest } catch (t) {} }

        function Ke() { try { return new t.ActiveXObject("Microsoft.XMLHTTP") } catch (t) {} }
        t.attachEvent && t.attachEvent("onunload", function() { for (var t in Ze) Ze[t](void 0, !0) }), h.cors = !!Qe && "withCredentials" in Qe, (Qe = h.ajax = !!Qe) && p.ajaxTransport(function(e) {
            var i;
            if (!e.crossDomain || h.cors) return {
                send: function(n, o) {
                    var s, a = e.xhr(),
                        r = ++Xe;
                    if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (s in e.xhrFields) a[s] = e.xhrFields[s];
                    for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest"), n) void 0 !== n[s] && a.setRequestHeader(s, n[s] + "");
                    a.send(e.hasContent && e.data || null), i = function(t, n) {
                        var s, l, c;
                        if (i && (n || 4 === a.readyState))
                            if (delete Ze[r], i = void 0, a.onreadystatechange = p.noop, n) 4 !== a.readyState && a.abort();
                            else {
                                c = {}, s = a.status, "string" == typeof a.responseText && (c.text = a.responseText);
                                try { l = a.statusText } catch (t) { l = "" }
                                s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = c.text ? 200 : 404
                            }
                        c && o(s, l, c, a.getAllResponseHeaders())
                    }, e.async ? 4 === a.readyState ? t.setTimeout(i) : a.onreadystatechange = Ze[r] = i : i()
                },
                abort: function() { i && i(void 0, !0) }
            }
        }), p.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(t) { return p.globalEval(t), t } } }), p.ajaxPrefilter("script", function(t) { void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1) }), p.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var e, i = n.head || p("head")[0] || n.documentElement;
                return {
                    send: function(o, s) {
                        (e = n.createElement("script")).async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, i) {
                            (i || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, i || s(200, "success"))
                        }, i.insertBefore(e, i.firstChild)
                    },
                    abort: function() { e && e.onload(void 0, !0) }
                }
            }
        });
        var ti = [],
            ei = /(=)\?(?=&|$)|\?\?/;
        p.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var t = ti.pop() || p.expando + "_" + Te++; return this[t] = !0, t } }), p.ajaxPrefilter("json jsonp", function(e, i, n) { var o, s, a, r = !1 !== e.jsonp && (ei.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && ei.test(e.data) && "data"); return r || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = p.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, r ? e[r] = e[r].replace(ei, "$1" + o) : !1 !== e.jsonp && (e.url += (Se.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() { return a || p.error(o + " was not called"), a[0] }, e.dataTypes[0] = "json", s = t[o], t[o] = function() { a = arguments }, n.always(function() { void 0 === s ? p(t).removeProp(o) : t[o] = s, e[o] && (e.jsonpCallback = i.jsonpCallback, ti.push(o)), a && p.isFunction(s) && s(a[0]), a = s = void 0 }), "script") : void 0 }), p.parseHTML = function(t, e, i) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (i = e, e = !1), e = e || n;
            var o = $.exec(t),
                s = !i && [];
            return o ? [e.createElement(o[1])] : (o = rt([t], e, s), s && s.length && p(s).remove(), p.merge([], o.childNodes))
        };
        var ii = p.fn.load;

        function ni(t) { return p.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow) }
        p.fn.load = function(t, e, i) {
            if ("string" != typeof t && ii) return ii.apply(this, arguments);
            var n, o, s, a = this,
                r = t.indexOf(" ");
            return r > -1 && (n = p.trim(t.slice(r, t.length)), t = t.slice(0, r)), p.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (o = "POST"), a.length > 0 && p.ajax({ url: t, type: o || "GET", dataType: "html", data: e }).done(function(t) { s = arguments, a.html(n ? p("<div>").append(p.parseHTML(t)).find(n) : t) }).always(i && function(t, e) { a.each(function() { i.apply(this, s || [t.responseText, e, t]) }) }), this
        }, p.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) { p.fn[e] = function(t) { return this.on(e, t) } }), p.expr.filters.animated = function(t) { return p.grep(p.timers, function(e) { return t === e.elem }).length }, p.offset = {
            setOffset: function(t, e, i) {
                var n, o, s, a, r, l, c = p.css(t, "position"),
                    d = p(t),
                    h = {};
                "static" === c && (t.style.position = "relative"), r = d.offset(), s = p.css(t, "top"), l = p.css(t, "left"), ("absolute" === c || "fixed" === c) && p.inArray("auto", [s, l]) > -1 ? (a = (n = d.position()).top, o = n.left) : (a = parseFloat(s) || 0, o = parseFloat(l) || 0), p.isFunction(e) && (e = e.call(t, i, p.extend({}, r))), null != e.top && (h.top = e.top - r.top + a), null != e.left && (h.left = e.left - r.left + o), "using" in e ? e.using.call(t, h) : d.css(h)
            }
        }, p.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) { p.offset.setOffset(this, t, e) });
                var e, i, n = { top: 0, left: 0 },
                    o = this[0],
                    s = o && o.ownerDocument;
                return s ? (e = s.documentElement, p.contains(e, o) ? (void 0 !== o.getBoundingClientRect && (n = o.getBoundingClientRect()), i = ni(s), { top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0), left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0) }) : n) : void 0
            },
            position: function() {
                if (this[0]) {
                    var t, e, i = { top: 0, left: 0 },
                        n = this[0];
                    return "fixed" === p.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), p.nodeName(t[0], "html") || (i = t.offset()), i.top += p.css(t[0], "borderTopWidth", !0), i.left += p.css(t[0], "borderLeftWidth", !0)), { top: e.top - i.top - p.css(n, "marginTop", !0), left: e.left - i.left - p.css(n, "marginLeft", !0) }
                }
            },
            offsetParent: function() { return this.map(function() { for (var t = this.offsetParent; t && !p.nodeName(t, "html") && "static" === p.css(t, "position");) t = t.offsetParent; return t || qt }) }
        }), p.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t, e) {
            var i = /Y/.test(e);
            p.fn[t] = function(n) { return G(this, function(t, n, o) { var s = ni(t); return void 0 === o ? s ? e in s ? s[e] : s.document.documentElement[n] : t[n] : void(s ? s.scrollTo(i ? p(s).scrollLeft() : o, i ? o : p(s).scrollTop()) : t[n] = o) }, t, n, arguments.length, null) }
        }), p.each(["top", "left"], function(t, e) { p.cssHooks[e] = Rt(h.pixelPosition, function(t, i) { return i ? (i = Ht(t, e), Nt.test(i) ? p(t).position()[e] + "px" : i) : void 0 }) }), p.each({ Height: "height", Width: "width" }, function(t, e) {
            p.each({ padding: "inner" + t, content: e, "": "outer" + t }, function(i, n) {
                p.fn[n] = function(n, o) {
                    var s = arguments.length && (i || "boolean" != typeof n),
                        a = i || (!0 === n || !0 === o ? "margin" : "border");
                    return G(this, function(e, i, n) { var o; return p.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === n ? p.css(e, i, a) : p.style(e, i, n, a) }, e, s ? n : void 0, s, null)
                }
            })
        }), p.fn.extend({ bind: function(t, e, i) { return this.on(t, null, e, i) }, unbind: function(t, e) { return this.off(t, null, e) }, delegate: function(t, e, i, n) { return this.on(e, t, i, n) }, undelegate: function(t, e, i) { return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i) } }), p.fn.size = function() { return this.length }, p.fn.andSelf = p.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() { return p });
        var oi = t.jQuery,
            si = t.$;
        return p.noConflict = function(e) { return t.$ === p && (t.$ = si), e && t.jQuery === p && (t.jQuery = oi), p }, e || (t.jQuery = t.$ = p), p
    }), function(t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.moment = e() }(this, function() {
        "use strict";
        var t, e;

        function i() { return t.apply(null, arguments) }

        function n(t) { return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t) }

        function o(t) { return null != t && "[object Object]" === Object.prototype.toString.call(t) }

        function s(t) { return void 0 === t }

        function a(t) { return "number" == typeof t || "[object Number]" === Object.prototype.toString.call(t) }

        function r(t) { return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t) }

        function l(t, e) { var i, n = []; for (i = 0; i < t.length; ++i) n.push(e(t[i], i)); return n }

        function c(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }

        function d(t, e) { for (var i in e) c(e, i) && (t[i] = e[i]); return c(e, "toString") && (t.toString = e.toString), c(e, "valueOf") && (t.valueOf = e.valueOf), t }

        function h(t, e, i, n) { return Ce(t, e, i, n, !0).utc() }

        function u(t) { return null == t._pf && (t._pf = { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1, parsedDateParts: [], meridiem: null, rfc2822: !1, weekdayMismatch: !1 }), t._pf }

        function p(t) {
            if (null == t._isValid) {
                var i = u(t),
                    n = e.call(i.parsedDateParts, function(t) { return null != t }),
                    o = !isNaN(t._d.getTime()) && i.overflow < 0 && !i.empty && !i.invalidMonth && !i.invalidWeekday && !i.weekdayMismatch && !i.nullInput && !i.invalidFormat && !i.userInvalidated && (!i.meridiem || i.meridiem && n);
                if (t._strict && (o = o && 0 === i.charsLeftOver && 0 === i.unusedTokens.length && void 0 === i.bigHour), null != Object.isFrozen && Object.isFrozen(t)) return o;
                t._isValid = o
            }
            return t._isValid
        }

        function f(t) { var e = h(NaN); return null != t ? d(u(e), t) : u(e).userInvalidated = !0, e }
        e = Array.prototype.some ? Array.prototype.some : function(t) {
            for (var e = Object(this), i = e.length >>> 0, n = 0; n < i; n++)
                if (n in e && t.call(this, e[n], n, e)) return !0;
            return !1
        };
        var m = i.momentProperties = [];

        function g(t, e) {
            var i, n, o;
            if (s(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), s(e._i) || (t._i = e._i), s(e._f) || (t._f = e._f), s(e._l) || (t._l = e._l), s(e._strict) || (t._strict = e._strict), s(e._tzm) || (t._tzm = e._tzm), s(e._isUTC) || (t._isUTC = e._isUTC), s(e._offset) || (t._offset = e._offset), s(e._pf) || (t._pf = u(e)), s(e._locale) || (t._locale = e._locale), m.length > 0)
                for (i = 0; i < m.length; i++) s(o = e[n = m[i]]) || (t[n] = o);
            return t
        }
        var v = !1;

        function y(t) { g(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === v && (v = !0, i.updateOffset(this), v = !1) }

        function b(t) { return t instanceof y || null != t && null != t._isAMomentObject }

        function _(t) { return t < 0 ? Math.ceil(t) || 0 : Math.floor(t) }

        function w(t) {
            var e = +t,
                i = 0;
            return 0 !== e && isFinite(e) && (i = _(e)), i
        }

        function x(t, e, i) {
            var n, o = Math.min(t.length, e.length),
                s = Math.abs(t.length - e.length),
                a = 0;
            for (n = 0; n < o; n++)(i && t[n] !== e[n] || !i && w(t[n]) !== w(e[n])) && a++;
            return a + s
        }

        function $(t) {!1 === i.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t) }

        function k(t, e) {
            var n = !0;
            return d(function() {
                if (null != i.deprecationHandler && i.deprecationHandler(null, t), n) {
                    for (var o, s = [], a = 0; a < arguments.length; a++) {
                        if (o = "", "object" == typeof arguments[a]) {
                            for (var r in o += "\n[" + a + "] ", arguments[0]) o += r + ": " + arguments[0][r] + ", ";
                            o = o.slice(0, -2)
                        } else o = arguments[a];
                        s.push(o)
                    }
                    $(t + "\nArguments: " + Array.prototype.slice.call(s).join("") + "\n" + (new Error).stack), n = !1
                }
                return e.apply(this, arguments)
            }, e)
        }
        var T, S = {};

        function C(t, e) { null != i.deprecationHandler && i.deprecationHandler(t, e), S[t] || ($(e), S[t] = !0) }

        function D(t) { return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t) }

        function M(t, e) { var i, n = d({}, t); for (i in e) c(e, i) && (o(t[i]) && o(e[i]) ? (n[i] = {}, d(n[i], t[i]), d(n[i], e[i])) : null != e[i] ? n[i] = e[i] : delete n[i]); for (i in t) c(t, i) && !c(e, i) && o(t[i]) && (n[i] = d({}, n[i])); return n }

        function I(t) { null != t && this.set(t) }
        i.suppressDeprecationWarnings = !1, i.deprecationHandler = null, T = Object.keys ? Object.keys : function(t) { var e, i = []; for (e in t) c(t, e) && i.push(e); return i };
        var A = {};

        function L(t, e) {
            var i = t.toLowerCase();
            A[i] = A[i + "s"] = A[e] = t
        }

        function P(t) { return "string" == typeof t ? A[t] || A[t.toLowerCase()] : void 0 }

        function E(t) { var e, i, n = {}; for (i in t) c(t, i) && (e = P(i)) && (n[e] = t[i]); return n }
        var F = {};

        function O(t, e) { F[t] = e }

        function N(t, e, i) {
            var n = "" + Math.abs(t),
                o = e - n.length;
            return (t >= 0 ? i ? "+" : "" : "-") + Math.pow(10, Math.max(0, o)).toString().substr(1) + n
        }
        var Y = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            q = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            j = {},
            H = {};

        function V(t, e, i, n) { var o = n; "string" == typeof n && (o = function() { return this[n]() }), t && (H[t] = o), e && (H[e[0]] = function() { return N(o.apply(this, arguments), e[1], e[2]) }), i && (H[i] = function() { return this.localeData().ordinal(o.apply(this, arguments), t) }) }

        function R(t, e) { return t.isValid() ? (e = U(e, t.localeData()), j[e] = j[e] || function(t) { var e, i, n, o = t.match(Y); for (e = 0, i = o.length; e < i; e++) H[o[e]] ? o[e] = H[o[e]] : o[e] = (n = o[e]).match(/\[[\s\S]/) ? n.replace(/^\[|\]$/g, "") : n.replace(/\\/g, ""); return function(e) { var n, s = ""; for (n = 0; n < i; n++) s += D(o[n]) ? o[n].call(e, t) : o[n]; return s } }(e), j[e](t)) : t.localeData().invalidDate() }

        function U(t, e) {
            var i = 5;

            function n(t) { return e.longDateFormat(t) || t }
            for (q.lastIndex = 0; i >= 0 && q.test(t);) t = t.replace(q, n), q.lastIndex = 0, i -= 1;
            return t
        }
        var W = /\d/,
            z = /\d\d/,
            B = /\d{3}/,
            G = /\d{4}/,
            X = /[+-]?\d{6}/,
            Z = /\d\d?/,
            Q = /\d\d\d\d?/,
            J = /\d\d\d\d\d\d?/,
            K = /\d{1,3}/,
            tt = /\d{1,4}/,
            et = /[+-]?\d{1,6}/,
            it = /\d+/,
            nt = /[+-]?\d+/,
            ot = /Z|[+-]\d\d:?\d\d/gi,
            st = /Z|[+-]\d\d(?::?\d\d)?/gi,
            at = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
            rt = {};

        function lt(t, e, i) { rt[t] = D(e) ? e : function(t, n) { return t && i ? i : e } }

        function ct(t, e) { return c(rt, t) ? rt[t](e._strict, e._locale) : new RegExp(dt(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, e, i, n, o) { return e || i || n || o }))) }

        function dt(t) { return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") }
        var ht = {};

        function ut(t, e) { var i, n = e; for ("string" == typeof t && (t = [t]), a(e) && (n = function(t, i) { i[e] = w(t) }), i = 0; i < t.length; i++) ht[t[i]] = n }

        function pt(t, e) { ut(t, function(t, i, n, o) { n._w = n._w || {}, e(t, n._w, n, o) }) }

        function ft(t, e, i) { null != e && c(ht, t) && ht[t](e, i._a, i, t) }
        var mt = 0,
            gt = 1,
            vt = 2,
            yt = 3,
            bt = 4,
            _t = 5,
            wt = 6,
            xt = 7,
            $t = 8;

        function kt(t) { return Tt(t) ? 366 : 365 }

        function Tt(t) { return t % 4 == 0 && t % 100 != 0 || t % 400 == 0 }
        V("Y", 0, 0, function() { var t = this.year(); return t <= 9999 ? "" + t : "+" + t }), V(0, ["YY", 2], 0, function() { return this.year() % 100 }), V(0, ["YYYY", 4], 0, "year"), V(0, ["YYYYY", 5], 0, "year"), V(0, ["YYYYYY", 6, !0], 0, "year"), L("year", "y"), O("year", 1), lt("Y", nt), lt("YY", Z, z), lt("YYYY", tt, G), lt("YYYYY", et, X), lt("YYYYYY", et, X), ut(["YYYYY", "YYYYYY"], mt), ut("YYYY", function(t, e) { e[mt] = 2 === t.length ? i.parseTwoDigitYear(t) : w(t) }), ut("YY", function(t, e) { e[mt] = i.parseTwoDigitYear(t) }), ut("Y", function(t, e) { e[mt] = parseInt(t, 10) }), i.parseTwoDigitYear = function(t) { return w(t) + (w(t) > 68 ? 1900 : 2e3) };
        var St, Ct = Dt("FullYear", !0);

        function Dt(t, e) { return function(n) { return null != n ? (It(this, t, n), i.updateOffset(this, e), this) : Mt(this, t) } }

        function Mt(t, e) { return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN }

        function It(t, e, i) { t.isValid() && !isNaN(i) && ("FullYear" === e && Tt(t.year()) && 1 === t.month() && 29 === t.date() ? t._d["set" + (t._isUTC ? "UTC" : "") + e](i, t.month(), At(i, t.month())) : t._d["set" + (t._isUTC ? "UTC" : "") + e](i)) }

        function At(t, e) { if (isNaN(t) || isNaN(e)) return NaN; var i, n = (e % (i = 12) + i) % i; return t += (e - n) / 12, 1 === n ? Tt(t) ? 29 : 28 : 31 - n % 7 % 2 }
        St = Array.prototype.indexOf ? Array.prototype.indexOf : function(t) {
            var e;
            for (e = 0; e < this.length; ++e)
                if (this[e] === t) return e;
            return -1
        }, V("M", ["MM", 2], "Mo", function() { return this.month() + 1 }), V("MMM", 0, 0, function(t) { return this.localeData().monthsShort(this, t) }), V("MMMM", 0, 0, function(t) { return this.localeData().months(this, t) }), L("month", "M"), O("month", 8), lt("M", Z), lt("MM", Z, z), lt("MMM", function(t, e) { return e.monthsShortRegex(t) }), lt("MMMM", function(t, e) { return e.monthsRegex(t) }), ut(["M", "MM"], function(t, e) { e[gt] = w(t) - 1 }), ut(["MMM", "MMMM"], function(t, e, i, n) {
            var o = i._locale.monthsParse(t, n, i._strict);
            null != o ? e[gt] = o : u(i).invalidMonth = t
        });
        var Lt = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
            Pt = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
        var Et = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

        function Ft(t, e) {
            var i;
            if (!t.isValid()) return t;
            if ("string" == typeof e)
                if (/^\d+$/.test(e)) e = w(e);
                else if (!a(e = t.localeData().monthsParse(e))) return t;
            return i = Math.min(t.date(), At(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, i), t
        }

        function Ot(t) { return null != t ? (Ft(this, t), i.updateOffset(this, !0), this) : Mt(this, "Month") }
        var Nt = at;
        var Yt = at;

        function qt() {
            function t(t, e) { return e.length - t.length }
            var e, i, n = [],
                o = [],
                s = [];
            for (e = 0; e < 12; e++) i = h([2e3, e]), n.push(this.monthsShort(i, "")), o.push(this.months(i, "")), s.push(this.months(i, "")), s.push(this.monthsShort(i, ""));
            for (n.sort(t), o.sort(t), s.sort(t), e = 0; e < 12; e++) n[e] = dt(n[e]), o[e] = dt(o[e]);
            for (e = 0; e < 24; e++) s[e] = dt(s[e]);
            this._monthsRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")
        }

        function jt(t) { var e = new Date(Date.UTC.apply(null, arguments)); return t < 100 && t >= 0 && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t), e }

        function Ht(t, e, i) { var n = 7 + e - i; return -((7 + jt(t, 0, n).getUTCDay() - e) % 7) + n - 1 }

        function Vt(t, e, i, n, o) { var s, a, r = 1 + 7 * (e - 1) + (7 + i - n) % 7 + Ht(t, n, o); return r <= 0 ? a = kt(s = t - 1) + r : r > kt(t) ? (s = t + 1, a = r - kt(t)) : (s = t, a = r), { year: s, dayOfYear: a } }

        function Rt(t, e, i) {
            var n, o, s = Ht(t.year(), e, i),
                a = Math.floor((t.dayOfYear() - s - 1) / 7) + 1;
            return a < 1 ? n = a + Ut(o = t.year() - 1, e, i) : a > Ut(t.year(), e, i) ? (n = a - Ut(t.year(), e, i), o = t.year() + 1) : (o = t.year(), n = a), { week: n, year: o }
        }

        function Ut(t, e, i) {
            var n = Ht(t, e, i),
                o = Ht(t + 1, e, i);
            return (kt(t) - n + o) / 7
        }
        V("w", ["ww", 2], "wo", "week"), V("W", ["WW", 2], "Wo", "isoWeek"), L("week", "w"), L("isoWeek", "W"), O("week", 5), O("isoWeek", 5), lt("w", Z), lt("ww", Z, z), lt("W", Z), lt("WW", Z, z), pt(["w", "ww", "W", "WW"], function(t, e, i, n) { e[n.substr(0, 1)] = w(t) });
        V("d", 0, "do", "day"), V("dd", 0, 0, function(t) { return this.localeData().weekdaysMin(this, t) }), V("ddd", 0, 0, function(t) { return this.localeData().weekdaysShort(this, t) }), V("dddd", 0, 0, function(t) { return this.localeData().weekdays(this, t) }), V("e", 0, 0, "weekday"), V("E", 0, 0, "isoWeekday"), L("day", "d"), L("weekday", "e"), L("isoWeekday", "E"), O("day", 11), O("weekday", 11), O("isoWeekday", 11), lt("d", Z), lt("e", Z), lt("E", Z), lt("dd", function(t, e) { return e.weekdaysMinRegex(t) }), lt("ddd", function(t, e) { return e.weekdaysShortRegex(t) }), lt("dddd", function(t, e) { return e.weekdaysRegex(t) }), pt(["dd", "ddd", "dddd"], function(t, e, i, n) {
            var o = i._locale.weekdaysParse(t, n, i._strict);
            null != o ? e.d = o : u(i).invalidWeekday = t
        }), pt(["d", "e", "E"], function(t, e, i, n) { e[n] = w(t) });
        var Wt = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
        var zt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
        var Bt = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
        var Gt = at;
        var Xt = at;
        var Zt = at;

        function Qt() {
            function t(t, e) { return e.length - t.length }
            var e, i, n, o, s, a = [],
                r = [],
                l = [],
                c = [];
            for (e = 0; e < 7; e++) i = h([2e3, 1]).day(e), n = this.weekdaysMin(i, ""), o = this.weekdaysShort(i, ""), s = this.weekdays(i, ""), a.push(n), r.push(o), l.push(s), c.push(n), c.push(o), c.push(s);
            for (a.sort(t), r.sort(t), l.sort(t), c.sort(t), e = 0; e < 7; e++) r[e] = dt(r[e]), l[e] = dt(l[e]), c[e] = dt(c[e]);
            this._weekdaysRegex = new RegExp("^(" + c.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + a.join("|") + ")", "i")
        }

        function Jt() { return this.hours() % 12 || 12 }

        function Kt(t, e) { V(t, 0, 0, function() { return this.localeData().meridiem(this.hours(), this.minutes(), e) }) }

        function te(t, e) { return e._meridiemParse }
        V("H", ["HH", 2], 0, "hour"), V("h", ["hh", 2], 0, Jt), V("k", ["kk", 2], 0, function() { return this.hours() || 24 }), V("hmm", 0, 0, function() { return "" + Jt.apply(this) + N(this.minutes(), 2) }), V("hmmss", 0, 0, function() { return "" + Jt.apply(this) + N(this.minutes(), 2) + N(this.seconds(), 2) }), V("Hmm", 0, 0, function() { return "" + this.hours() + N(this.minutes(), 2) }), V("Hmmss", 0, 0, function() { return "" + this.hours() + N(this.minutes(), 2) + N(this.seconds(), 2) }), Kt("a", !0), Kt("A", !1), L("hour", "h"), O("hour", 13), lt("a", te), lt("A", te), lt("H", Z), lt("h", Z), lt("k", Z), lt("HH", Z, z), lt("hh", Z, z), lt("kk", Z, z), lt("hmm", Q), lt("hmmss", J), lt("Hmm", Q), lt("Hmmss", J), ut(["H", "HH"], yt), ut(["k", "kk"], function(t, e, i) {
            var n = w(t);
            e[yt] = 24 === n ? 0 : n
        }), ut(["a", "A"], function(t, e, i) { i._isPm = i._locale.isPM(t), i._meridiem = t }), ut(["h", "hh"], function(t, e, i) { e[yt] = w(t), u(i).bigHour = !0 }), ut("hmm", function(t, e, i) {
            var n = t.length - 2;
            e[yt] = w(t.substr(0, n)), e[bt] = w(t.substr(n)), u(i).bigHour = !0
        }), ut("hmmss", function(t, e, i) {
            var n = t.length - 4,
                o = t.length - 2;
            e[yt] = w(t.substr(0, n)), e[bt] = w(t.substr(n, 2)), e[_t] = w(t.substr(o)), u(i).bigHour = !0
        }), ut("Hmm", function(t, e, i) {
            var n = t.length - 2;
            e[yt] = w(t.substr(0, n)), e[bt] = w(t.substr(n))
        }), ut("Hmmss", function(t, e, i) {
            var n = t.length - 4,
                o = t.length - 2;
            e[yt] = w(t.substr(0, n)), e[bt] = w(t.substr(n, 2)), e[_t] = w(t.substr(o))
        });
        var ee, ie = Dt("Hours", !0),
            ne = { calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, longDateFormat: { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, invalidDate: "Invalid date", ordinal: "%d", dayOfMonthOrdinalParse: /\d{1,2}/, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, months: Pt, monthsShort: Et, week: { dow: 0, doy: 6 }, weekdays: Wt, weekdaysMin: Bt, weekdaysShort: zt, meridiemParse: /[ap]\.?m?\.?/i },
            oe = {},
            se = {};

        function ae(t) { return t ? t.toLowerCase().replace("_", "-") : t }

        function re(t) {
            var e = null;
            if (!oe[t] && "undefined" != typeof module && module && module.exports) try { e = ee._abbr, require("./locale/" + t), le(e) } catch (t) {}
            return oe[t]
        }

        function le(t, e) { var i; return t && ((i = s(e) ? de(t) : ce(t, e)) ? ee = i : "undefined" != typeof console && console.warn && console.warn("Locale " + t + " not found. Did you forget to load it?")), ee._abbr }

        function ce(t, e) {
            if (null !== e) {
                var i, n = ne;
                if (e.abbr = t, null != oe[t]) C("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = oe[t]._config;
                else if (null != e.parentLocale)
                    if (null != oe[e.parentLocale]) n = oe[e.parentLocale]._config;
                    else {
                        if (null == (i = re(e.parentLocale))) return se[e.parentLocale] || (se[e.parentLocale] = []), se[e.parentLocale].push({ name: t, config: e }), null;
                        n = i._config
                    }
                return oe[t] = new I(M(n, e)), se[t] && se[t].forEach(function(t) { ce(t.name, t.config) }), le(t), oe[t]
            }
            return delete oe[t], null
        }

        function de(t) {
            var e;
            if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return ee;
            if (!n(t)) {
                if (e = re(t)) return e;
                t = [t]
            }
            return function(t) {
                for (var e, i, n, o, s = 0; s < t.length;) {
                    for (e = (o = ae(t[s]).split("-")).length, i = (i = ae(t[s + 1])) ? i.split("-") : null; e > 0;) {
                        if (n = re(o.slice(0, e).join("-"))) return n;
                        if (i && i.length >= e && x(o, i, !0) >= e - 1) break;
                        e--
                    }
                    s++
                }
                return ee
            }(t)
        }

        function he(t) { var e, i = t._a; return i && -2 === u(t).overflow && (e = i[gt] < 0 || i[gt] > 11 ? gt : i[vt] < 1 || i[vt] > At(i[mt], i[gt]) ? vt : i[yt] < 0 || i[yt] > 24 || 24 === i[yt] && (0 !== i[bt] || 0 !== i[_t] || 0 !== i[wt]) ? yt : i[bt] < 0 || i[bt] > 59 ? bt : i[_t] < 0 || i[_t] > 59 ? _t : i[wt] < 0 || i[wt] > 999 ? wt : -1, u(t)._overflowDayOfYear && (e < mt || e > vt) && (e = vt), u(t)._overflowWeeks && -1 === e && (e = xt), u(t)._overflowWeekday && -1 === e && (e = $t), u(t).overflow = e), t }

        function ue(t, e, i) { return null != t ? t : null != e ? e : i }

        function pe(t) {
            var e, n, o, s, a, r = [];
            if (!t._d) {
                for (o = function(t) { var e = new Date(i.now()); return t._useUTC ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()] : [e.getFullYear(), e.getMonth(), e.getDate()] }(t), t._w && null == t._a[vt] && null == t._a[gt] && function(t) {
                        var e, i, n, o, s, a, r, l;
                        if (null != (e = t._w).GG || null != e.W || null != e.E) s = 1, a = 4, i = ue(e.GG, t._a[mt], Rt(De(), 1, 4).year), n = ue(e.W, 1), ((o = ue(e.E, 1)) < 1 || o > 7) && (l = !0);
                        else {
                            s = t._locale._week.dow, a = t._locale._week.doy;
                            var c = Rt(De(), s, a);
                            i = ue(e.gg, t._a[mt], c.year), n = ue(e.w, c.week), null != e.d ? ((o = e.d) < 0 || o > 6) && (l = !0) : null != e.e ? (o = e.e + s, (e.e < 0 || e.e > 6) && (l = !0)) : o = s
                        }
                        n < 1 || n > Ut(i, s, a) ? u(t)._overflowWeeks = !0 : null != l ? u(t)._overflowWeekday = !0 : (r = Vt(i, n, o, s, a), t._a[mt] = r.year, t._dayOfYear = r.dayOfYear)
                    }(t), null != t._dayOfYear && (a = ue(t._a[mt], o[mt]), (t._dayOfYear > kt(a) || 0 === t._dayOfYear) && (u(t)._overflowDayOfYear = !0), n = jt(a, 0, t._dayOfYear), t._a[gt] = n.getUTCMonth(), t._a[vt] = n.getUTCDate()), e = 0; e < 3 && null == t._a[e]; ++e) t._a[e] = r[e] = o[e];
                for (; e < 7; e++) t._a[e] = r[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
                24 === t._a[yt] && 0 === t._a[bt] && 0 === t._a[_t] && 0 === t._a[wt] && (t._nextDay = !0, t._a[yt] = 0), t._d = (t._useUTC ? jt : function(t, e, i, n, o, s, a) { var r = new Date(t, e, i, n, o, s, a); return t < 100 && t >= 0 && isFinite(r.getFullYear()) && r.setFullYear(t), r }).apply(null, r), s = t._useUTC ? t._d.getUTCDay() : t._d.getDay(), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[yt] = 24), t._w && void 0 !== t._w.d && t._w.d !== s && (u(t).weekdayMismatch = !0)
            }
        }
        var fe = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            me = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            ge = /Z|[+-]\d\d(?::?\d\d)?/,
            ve = [
                ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                ["YYYY-DDD", /\d{4}-\d{3}/],
                ["YYYY-MM", /\d{4}-\d\d/, !1],
                ["YYYYYYMMDD", /[+-]\d{10}/],
                ["YYYYMMDD", /\d{8}/],
                ["GGGG[W]WWE", /\d{4}W\d{3}/],
                ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                ["YYYYDDD", /\d{7}/]
            ],
            ye = [
                ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                ["HH:mm", /\d\d:\d\d/],
                ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                ["HHmmss", /\d\d\d\d\d\d/],
                ["HHmm", /\d\d\d\d/],
                ["HH", /\d\d/]
            ],
            be = /^\/?Date\((\-?\d+)/i;

        function _e(t) {
            var e, i, n, o, s, a, r = t._i,
                l = fe.exec(r) || me.exec(r);
            if (l) {
                for (u(t).iso = !0, e = 0, i = ve.length; e < i; e++)
                    if (ve[e][1].exec(l[1])) { o = ve[e][0], n = !1 !== ve[e][2]; break }
                if (null == o) return void(t._isValid = !1);
                if (l[3]) {
                    for (e = 0, i = ye.length; e < i; e++)
                        if (ye[e][1].exec(l[3])) { s = (l[2] || " ") + ye[e][0]; break }
                    if (null == s) return void(t._isValid = !1)
                }
                if (!n && null != s) return void(t._isValid = !1);
                if (l[4]) {
                    if (!ge.exec(l[4])) return void(t._isValid = !1);
                    a = "Z"
                }
                t._f = o + (s || "") + (a || ""), Te(t)
            } else t._isValid = !1
        }
        var we = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

        function xe(t, e, i, n, o, s) { var a = [function(t) { var e = parseInt(t, 10); if (e <= 49) return 2e3 + e; if (e <= 999) return 1900 + e; return e }(t), Et.indexOf(e), parseInt(i, 10), parseInt(n, 10), parseInt(o, 10)]; return s && a.push(parseInt(s, 10)), a }
        var $e = { UT: 0, GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480 };

        function ke(t) {
            var e = we.exec(t._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
            if (e) {
                var i = xe(e[4], e[3], e[2], e[5], e[6], e[7]);
                if (! function(t, e, i) { return !t || zt.indexOf(t) === new Date(e[0], e[1], e[2]).getDay() || (u(i).weekdayMismatch = !0, i._isValid = !1, !1) }(e[1], i, t)) return;
                t._a = i, t._tzm = function(t, e, i) {
                    if (t) return $e[t];
                    if (e) return 0;
                    var n = parseInt(i, 10),
                        o = n % 100;
                    return (n - o) / 100 * 60 + o
                }(e[8], e[9], e[10]), t._d = jt.apply(null, t._a), t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), u(t).rfc2822 = !0
            } else t._isValid = !1
        }

        function Te(t) {
            if (t._f !== i.ISO_8601)
                if (t._f !== i.RFC_2822) {
                    t._a = [], u(t).empty = !0;
                    var e, n, o, s, a, r = "" + t._i,
                        l = r.length,
                        c = 0;
                    for (o = U(t._f, t._locale).match(Y) || [], e = 0; e < o.length; e++) s = o[e], (n = (r.match(ct(s, t)) || [])[0]) && ((a = r.substr(0, r.indexOf(n))).length > 0 && u(t).unusedInput.push(a), r = r.slice(r.indexOf(n) + n.length), c += n.length), H[s] ? (n ? u(t).empty = !1 : u(t).unusedTokens.push(s), ft(s, n, t)) : t._strict && !n && u(t).unusedTokens.push(s);
                    u(t).charsLeftOver = l - c, r.length > 0 && u(t).unusedInput.push(r), t._a[yt] <= 12 && !0 === u(t).bigHour && t._a[yt] > 0 && (u(t).bigHour = void 0), u(t).parsedDateParts = t._a.slice(0), u(t).meridiem = t._meridiem, t._a[yt] = function(t, e, i) { var n; if (null == i) return e; return null != t.meridiemHour ? t.meridiemHour(e, i) : null != t.isPM ? ((n = t.isPM(i)) && e < 12 && (e += 12), n || 12 !== e || (e = 0), e) : e }(t._locale, t._a[yt], t._meridiem), pe(t), he(t)
                } else ke(t);
            else _e(t)
        }

        function Se(t) {
            var e = t._i,
                c = t._f;
            return t._locale = t._locale || de(t._l), null === e || void 0 === c && "" === e ? f({ nullInput: !0 }) : ("string" == typeof e && (t._i = e = t._locale.preparse(e)), b(e) ? new y(he(e)) : (r(e) ? t._d = e : n(c) ? function(t) {
                var e, i, n, o, s;
                if (0 === t._f.length) return u(t).invalidFormat = !0, void(t._d = new Date(NaN));
                for (o = 0; o < t._f.length; o++) s = 0, e = g({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[o], Te(e), p(e) && (s += u(e).charsLeftOver, s += 10 * u(e).unusedTokens.length, u(e).score = s, (null == n || s < n) && (n = s, i = e));
                d(t, i || e)
            }(t) : c ? Te(t) : function(t) {
                var e = t._i;
                s(e) ? t._d = new Date(i.now()) : r(e) ? t._d = new Date(e.valueOf()) : "string" == typeof e ? function(t) {
                    var e = be.exec(t._i);
                    null === e ? (_e(t), !1 === t._isValid && (delete t._isValid, ke(t), !1 === t._isValid && (delete t._isValid, i.createFromInputFallback(t)))) : t._d = new Date(+e[1])
                }(t) : n(e) ? (t._a = l(e.slice(0), function(t) { return parseInt(t, 10) }), pe(t)) : o(e) ? function(t) {
                    if (!t._d) {
                        var e = E(t._i);
                        t._a = l([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function(t) { return t && parseInt(t, 10) }), pe(t)
                    }
                }(t) : a(e) ? t._d = new Date(e) : i.createFromInputFallback(t)
            }(t), p(t) || (t._d = null), t))
        }

        function Ce(t, e, i, s, a) {
            var r, l = {};
            return !0 !== i && !1 !== i || (s = i, i = void 0), (o(t) && function(t) {
                if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(t).length;
                var e;
                for (e in t)
                    if (t.hasOwnProperty(e)) return !1;
                return !0
            }(t) || n(t) && 0 === t.length) && (t = void 0), l._isAMomentObject = !0, l._useUTC = l._isUTC = a, l._l = i, l._i = t, l._f = e, l._strict = s, (r = new y(he(Se(l))))._nextDay && (r.add(1, "d"), r._nextDay = void 0), r
        }

        function De(t, e, i, n) { return Ce(t, e, i, n, !1) }
        i.createFromInputFallback = k("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(t) { t._d = new Date(t._i + (t._useUTC ? " UTC" : "")) }), i.ISO_8601 = function() {}, i.RFC_2822 = function() {};
        var Me = k("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() { var t = De.apply(null, arguments); return this.isValid() && t.isValid() ? t < this ? this : t : f() }),
            Ie = k("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() { var t = De.apply(null, arguments); return this.isValid() && t.isValid() ? t > this ? this : t : f() });

        function Ae(t, e) { var i, o; if (1 === e.length && n(e[0]) && (e = e[0]), !e.length) return De(); for (i = e[0], o = 1; o < e.length; ++o) e[o].isValid() && !e[o][t](i) || (i = e[o]); return i }
        var Le = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

        function Pe(t) {
            var e = E(t),
                i = e.year || 0,
                n = e.quarter || 0,
                o = e.month || 0,
                s = e.week || 0,
                a = e.day || 0,
                r = e.hour || 0,
                l = e.minute || 0,
                c = e.second || 0,
                d = e.millisecond || 0;
            this._isValid = function(t) {
                for (var e in t)
                    if (-1 === St.call(Le, e) || null != t[e] && isNaN(t[e])) return !1;
                for (var i = !1, n = 0; n < Le.length; ++n)
                    if (t[Le[n]]) {
                        if (i) return !1;
                        parseFloat(t[Le[n]]) !== w(t[Le[n]]) && (i = !0)
                    }
                return !0
            }(e), this._milliseconds = +d + 1e3 * c + 6e4 * l + 1e3 * r * 60 * 60, this._days = +a + 7 * s, this._months = +o + 3 * n + 12 * i, this._data = {}, this._locale = de(), this._bubble()
        }

        function Ee(t) { return t instanceof Pe }

        function Fe(t) { return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t) }

        function Oe(t, e) {
            V(t, 0, 0, function() {
                var t = this.utcOffset(),
                    i = "+";
                return t < 0 && (t = -t, i = "-"), i + N(~~(t / 60), 2) + e + N(~~t % 60, 2)
            })
        }
        Oe("Z", ":"), Oe("ZZ", ""), lt("Z", st), lt("ZZ", st), ut(["Z", "ZZ"], function(t, e, i) { i._useUTC = !0, i._tzm = Ye(st, t) });
        var Ne = /([\+\-]|\d\d)/gi;

        function Ye(t, e) {
            var i = (e || "").match(t);
            if (null === i) return null;
            var n = ((i[i.length - 1] || []) + "").match(Ne) || ["-", 0, 0],
                o = 60 * n[1] + w(n[2]);
            return 0 === o ? 0 : "+" === n[0] ? o : -o
        }

        function qe(t, e) { var n, o; return e._isUTC ? (n = e.clone(), o = (b(t) || r(t) ? t.valueOf() : De(t).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + o), i.updateOffset(n, !1), n) : De(t).local() }

        function je(t) { return 15 * -Math.round(t._d.getTimezoneOffset() / 15) }

        function He() { return !!this.isValid() && (this._isUTC && 0 === this._offset) }
        i.updateOffset = function() {};
        var Ve = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
            Re = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

        function Ue(t, e) {
            var i, n, o, s = t,
                r = null;
            return Ee(t) ? s = { ms: t._milliseconds, d: t._days, M: t._months } : a(t) ? (s = {}, e ? s[e] = t : s.milliseconds = t) : (r = Ve.exec(t)) ? (i = "-" === r[1] ? -1 : 1, s = { y: 0, d: w(r[vt]) * i, h: w(r[yt]) * i, m: w(r[bt]) * i, s: w(r[_t]) * i, ms: w(Fe(1e3 * r[wt])) * i }) : (r = Re.exec(t)) ? (i = "-" === r[1] ? -1 : (r[1], 1), s = { y: We(r[2], i), M: We(r[3], i), w: We(r[4], i), d: We(r[5], i), h: We(r[6], i), m: We(r[7], i), s: We(r[8], i) }) : null == s ? s = {} : "object" == typeof s && ("from" in s || "to" in s) && (o = function(t, e) {
                var i;
                if (!t.isValid() || !e.isValid()) return { milliseconds: 0, months: 0 };
                e = qe(e, t), t.isBefore(e) ? i = ze(t, e) : ((i = ze(e, t)).milliseconds = -i.milliseconds, i.months = -i.months);
                return i
            }(De(s.from), De(s.to)), (s = {}).ms = o.milliseconds, s.M = o.months), n = new Pe(s), Ee(t) && c(t, "_locale") && (n._locale = t._locale), n
        }

        function We(t, e) { var i = t && parseFloat(t.replace(",", ".")); return (isNaN(i) ? 0 : i) * e }

        function ze(t, e) { var i = { milliseconds: 0, months: 0 }; return i.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(i.months, "M").isAfter(e) && --i.months, i.milliseconds = +e - +t.clone().add(i.months, "M"), i }

        function Be(t, e) { return function(i, n) { var o; return null === n || isNaN(+n) || (C(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), o = i, i = n, n = o), Ge(this, Ue(i = "string" == typeof i ? +i : i, n), t), this } }

        function Ge(t, e, n, o) {
            var s = e._milliseconds,
                a = Fe(e._days),
                r = Fe(e._months);
            t.isValid() && (o = null == o || o, r && Ft(t, Mt(t, "Month") + r * n), a && It(t, "Date", Mt(t, "Date") + a * n), s && t._d.setTime(t._d.valueOf() + s * n), o && i.updateOffset(t, a || r))
        }
        Ue.fn = Pe.prototype, Ue.invalid = function() { return Ue(NaN) };
        var Xe = Be(1, "add"),
            Ze = Be(-1, "subtract");

        function Qe(t, e) {
            var i = 12 * (e.year() - t.year()) + (e.month() - t.month()),
                n = t.clone().add(i, "months");
            return -(i + (e - n < 0 ? (e - n) / (n - t.clone().add(i - 1, "months")) : (e - n) / (t.clone().add(i + 1, "months") - n))) || 0
        }

        function Je(t) { var e; return void 0 === t ? this._locale._abbr : (null != (e = de(t)) && (this._locale = e), this) }
        i.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", i.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
        var Ke = k("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) { return void 0 === t ? this.localeData() : this.locale(t) });

        function ti() { return this._locale }

        function ei(t, e) { V(0, [t, t.length], 0, e) }

        function ii(t, e, i, n, o) {
            var s;
            return null == t ? Rt(this, n, o).year : (e > (s = Ut(t, n, o)) && (e = s), function(t, e, i, n, o) {
                var s = Vt(t, e, i, n, o),
                    a = jt(s.year, 0, s.dayOfYear);
                return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this
            }.call(this, t, e, i, n, o))
        }
        V(0, ["gg", 2], 0, function() { return this.weekYear() % 100 }), V(0, ["GG", 2], 0, function() { return this.isoWeekYear() % 100 }), ei("gggg", "weekYear"), ei("ggggg", "weekYear"), ei("GGGG", "isoWeekYear"), ei("GGGGG", "isoWeekYear"), L("weekYear", "gg"), L("isoWeekYear", "GG"), O("weekYear", 1), O("isoWeekYear", 1), lt("G", nt), lt("g", nt), lt("GG", Z, z), lt("gg", Z, z), lt("GGGG", tt, G), lt("gggg", tt, G), lt("GGGGG", et, X), lt("ggggg", et, X), pt(["gggg", "ggggg", "GGGG", "GGGGG"], function(t, e, i, n) { e[n.substr(0, 2)] = w(t) }), pt(["gg", "GG"], function(t, e, n, o) { e[o] = i.parseTwoDigitYear(t) }), V("Q", 0, "Qo", "quarter"), L("quarter", "Q"), O("quarter", 7), lt("Q", W), ut("Q", function(t, e) { e[gt] = 3 * (w(t) - 1) }), V("D", ["DD", 2], "Do", "date"), L("date", "D"), O("date", 9), lt("D", Z), lt("DD", Z, z), lt("Do", function(t, e) { return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient }), ut(["D", "DD"], vt), ut("Do", function(t, e) { e[vt] = w(t.match(Z)[0]) });
        var ni = Dt("Date", !0);
        V("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), L("dayOfYear", "DDD"), O("dayOfYear", 4), lt("DDD", K), lt("DDDD", B), ut(["DDD", "DDDD"], function(t, e, i) { i._dayOfYear = w(t) }), V("m", ["mm", 2], 0, "minute"), L("minute", "m"), O("minute", 14), lt("m", Z), lt("mm", Z, z), ut(["m", "mm"], bt);
        var oi = Dt("Minutes", !1);
        V("s", ["ss", 2], 0, "second"), L("second", "s"), O("second", 15), lt("s", Z), lt("ss", Z, z), ut(["s", "ss"], _t);
        var si, ai = Dt("Seconds", !1);
        for (V("S", 0, 0, function() { return ~~(this.millisecond() / 100) }), V(0, ["SS", 2], 0, function() { return ~~(this.millisecond() / 10) }), V(0, ["SSS", 3], 0, "millisecond"), V(0, ["SSSS", 4], 0, function() { return 10 * this.millisecond() }), V(0, ["SSSSS", 5], 0, function() { return 100 * this.millisecond() }), V(0, ["SSSSSS", 6], 0, function() { return 1e3 * this.millisecond() }), V(0, ["SSSSSSS", 7], 0, function() { return 1e4 * this.millisecond() }), V(0, ["SSSSSSSS", 8], 0, function() { return 1e5 * this.millisecond() }), V(0, ["SSSSSSSSS", 9], 0, function() { return 1e6 * this.millisecond() }), L("millisecond", "ms"), O("millisecond", 16), lt("S", K, W), lt("SS", K, z), lt("SSS", K, B), si = "SSSS"; si.length <= 9; si += "S") lt(si, it);

        function ri(t, e) { e[wt] = w(1e3 * ("0." + t)) }
        for (si = "S"; si.length <= 9; si += "S") ut(si, ri);
        var li = Dt("Milliseconds", !1);
        V("z", 0, 0, "zoneAbbr"), V("zz", 0, 0, "zoneName");
        var ci = y.prototype;

        function di(t) { return t }
        ci.add = Xe, ci.calendar = function(t, e) {
            var n = t || De(),
                o = qe(n, this).startOf("day"),
                s = i.calendarFormat(this, o) || "sameElse",
                a = e && (D(e[s]) ? e[s].call(this, n) : e[s]);
            return this.format(a || this.localeData().calendar(s, this, De(n)))
        }, ci.clone = function() { return new y(this) }, ci.diff = function(t, e, i) {
            var n, o, s;
            if (!this.isValid()) return NaN;
            if (!(n = qe(t, this)).isValid()) return NaN;
            switch (o = 6e4 * (n.utcOffset() - this.utcOffset()), e = P(e)) {
                case "year":
                    s = Qe(this, n) / 12;
                    break;
                case "month":
                    s = Qe(this, n);
                    break;
                case "quarter":
                    s = Qe(this, n) / 3;
                    break;
                case "second":
                    s = (this - n) / 1e3;
                    break;
                case "minute":
                    s = (this - n) / 6e4;
                    break;
                case "hour":
                    s = (this - n) / 36e5;
                    break;
                case "day":
                    s = (this - n - o) / 864e5;
                    break;
                case "week":
                    s = (this - n - o) / 6048e5;
                    break;
                default:
                    s = this - n
            }
            return i ? s : _(s)
        }, ci.endOf = function(t) { return void 0 === (t = P(t)) || "millisecond" === t ? this : ("date" === t && (t = "day"), this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms")) }, ci.format = function(t) { t || (t = this.isUtc() ? i.defaultFormatUtc : i.defaultFormat); var e = R(this, t); return this.localeData().postformat(e) }, ci.from = function(t, e) { return this.isValid() && (b(t) && t.isValid() || De(t).isValid()) ? Ue({ to: this, from: t }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate() }, ci.fromNow = function(t) { return this.from(De(), t) }, ci.to = function(t, e) { return this.isValid() && (b(t) && t.isValid() || De(t).isValid()) ? Ue({ from: this, to: t }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate() }, ci.toNow = function(t) { return this.to(De(), t) }, ci.get = function(t) { return D(this[t = P(t)]) ? this[t]() : this }, ci.invalidAt = function() { return u(this).overflow }, ci.isAfter = function(t, e) { var i = b(t) ? t : De(t); return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = P(s(e) ? "millisecond" : e)) ? this.valueOf() > i.valueOf() : i.valueOf() < this.clone().startOf(e).valueOf()) }, ci.isBefore = function(t, e) { var i = b(t) ? t : De(t); return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = P(s(e) ? "millisecond" : e)) ? this.valueOf() < i.valueOf() : this.clone().endOf(e).valueOf() < i.valueOf()) }, ci.isBetween = function(t, e, i, n) { return ("(" === (n = n || "()")[0] ? this.isAfter(t, i) : !this.isBefore(t, i)) && (")" === n[1] ? this.isBefore(e, i) : !this.isAfter(e, i)) }, ci.isSame = function(t, e) { var i, n = b(t) ? t : De(t); return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = P(e || "millisecond")) ? this.valueOf() === n.valueOf() : (i = n.valueOf(), this.clone().startOf(e).valueOf() <= i && i <= this.clone().endOf(e).valueOf())) }, ci.isSameOrAfter = function(t, e) { return this.isSame(t, e) || this.isAfter(t, e) }, ci.isSameOrBefore = function(t, e) { return this.isSame(t, e) || this.isBefore(t, e) }, ci.isValid = function() { return p(this) }, ci.lang = Ke, ci.locale = Je, ci.localeData = ti, ci.max = Ie, ci.min = Me, ci.parsingFlags = function() { return d({}, u(this)) }, ci.set = function(t, e) {
            if ("object" == typeof t)
                for (var i = function(t) { var e = []; for (var i in t) e.push({ unit: i, priority: F[i] }); return e.sort(function(t, e) { return t.priority - e.priority }), e }(t = E(t)), n = 0; n < i.length; n++) this[i[n].unit](t[i[n].unit]);
            else if (D(this[t = P(t)])) return this[t](e);
            return this
        }, ci.startOf = function(t) {
            switch (t = P(t)) {
                case "year":
                    this.month(0);
                case "quarter":
                case "month":
                    this.date(1);
                case "week":
                case "isoWeek":
                case "day":
                case "date":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
            }
            return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
        }, ci.subtract = Ze, ci.toArray = function() { var t = this; return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()] }, ci.toObject = function() { var t = this; return { years: t.year(), months: t.month(), date: t.date(), hours: t.hours(), minutes: t.minutes(), seconds: t.seconds(), milliseconds: t.milliseconds() } }, ci.toDate = function() { return new Date(this.valueOf()) }, ci.toISOString = function(t) {
            if (!this.isValid()) return null;
            var e = !0 !== t,
                i = e ? this.clone().utc() : this;
            return i.year() < 0 || i.year() > 9999 ? R(i, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : D(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", R(i, "Z")) : R(i, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
        }, ci.inspect = function() {
            if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
            var t = "moment",
                e = "";
            this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", e = "Z");
            var i = "[" + t + '("]',
                n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                o = e + '[")]';
            return this.format(i + n + "-MM-DD[T]HH:mm:ss.SSS" + o)
        }, ci.toJSON = function() { return this.isValid() ? this.toISOString() : null }, ci.toString = function() { return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ") }, ci.unix = function() { return Math.floor(this.valueOf() / 1e3) }, ci.valueOf = function() { return this._d.valueOf() - 6e4 * (this._offset || 0) }, ci.creationData = function() { return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict } }, ci.year = Ct, ci.isLeapYear = function() { return Tt(this.year()) }, ci.weekYear = function(t) { return ii.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy) }, ci.isoWeekYear = function(t) { return ii.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4) }, ci.quarter = ci.quarters = function(t) { return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3) }, ci.month = Ot, ci.daysInMonth = function() { return At(this.year(), this.month()) }, ci.week = ci.weeks = function(t) { var e = this.localeData().week(this); return null == t ? e : this.add(7 * (t - e), "d") }, ci.isoWeek = ci.isoWeeks = function(t) { var e = Rt(this, 1, 4).week; return null == t ? e : this.add(7 * (t - e), "d") }, ci.weeksInYear = function() { var t = this.localeData()._week; return Ut(this.year(), t.dow, t.doy) }, ci.isoWeeksInYear = function() { return Ut(this.year(), 1, 4) }, ci.date = ni, ci.day = ci.days = function(t) { if (!this.isValid()) return null != t ? this : NaN; var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay(); return null != t ? (t = function(t, e) { return "string" != typeof t ? t : isNaN(t) ? "number" == typeof(t = e.weekdaysParse(t)) ? t : null : parseInt(t, 10) }(t, this.localeData()), this.add(t - e, "d")) : e }, ci.weekday = function(t) { if (!this.isValid()) return null != t ? this : NaN; var e = (this.day() + 7 - this.localeData()._week.dow) % 7; return null == t ? e : this.add(t - e, "d") }, ci.isoWeekday = function(t) { if (!this.isValid()) return null != t ? this : NaN; if (null != t) { var e = function(t, e) { return "string" == typeof t ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t }(t, this.localeData()); return this.day(this.day() % 7 ? e : e - 7) } return this.day() || 7 }, ci.dayOfYear = function(t) { var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1; return null == t ? e : this.add(t - e, "d") }, ci.hour = ci.hours = ie, ci.minute = ci.minutes = oi, ci.second = ci.seconds = ai, ci.millisecond = ci.milliseconds = li, ci.utcOffset = function(t, e, n) { var o, s = this._offset || 0; if (!this.isValid()) return null != t ? this : NaN; if (null != t) { if ("string" == typeof t) { if (null === (t = Ye(st, t))) return this } else Math.abs(t) < 16 && !n && (t *= 60); return !this._isUTC && e && (o = je(this)), this._offset = t, this._isUTC = !0, null != o && this.add(o, "m"), s !== t && (!e || this._changeInProgress ? Ge(this, Ue(t - s, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, i.updateOffset(this, !0), this._changeInProgress = null)), this } return this._isUTC ? s : je(this) }, ci.utc = function(t) { return this.utcOffset(0, t) }, ci.local = function(t) { return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(je(this), "m")), this }, ci.parseZone = function() {
            if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
            else if ("string" == typeof this._i) {
                var t = Ye(ot, this._i);
                null != t ? this.utcOffset(t) : this.utcOffset(0, !0)
            }
            return this
        }, ci.hasAlignedHourOffset = function(t) { return !!this.isValid() && (t = t ? De(t).utcOffset() : 0, (this.utcOffset() - t) % 60 == 0) }, ci.isDST = function() { return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset() }, ci.isLocal = function() { return !!this.isValid() && !this._isUTC }, ci.isUtcOffset = function() { return !!this.isValid() && this._isUTC }, ci.isUtc = He, ci.isUTC = He, ci.zoneAbbr = function() { return this._isUTC ? "UTC" : "" }, ci.zoneName = function() { return this._isUTC ? "Coordinated Universal Time" : "" }, ci.dates = k("dates accessor is deprecated. Use date instead.", ni), ci.months = k("months accessor is deprecated. Use month instead", Ot), ci.years = k("years accessor is deprecated. Use year instead", Ct), ci.zone = k("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(t, e) { return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset() }), ci.isDSTShifted = k("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
            if (!s(this._isDSTShifted)) return this._isDSTShifted;
            var t = {};
            if (g(t, this), (t = Se(t))._a) {
                var e = t._isUTC ? h(t._a) : De(t._a);
                this._isDSTShifted = this.isValid() && x(t._a, e.toArray()) > 0
            } else this._isDSTShifted = !1;
            return this._isDSTShifted
        });
        var hi = I.prototype;

        function ui(t, e, i, n) {
            var o = de(),
                s = h().set(n, e);
            return o[i](s, t)
        }

        function pi(t, e, i) { if (a(t) && (e = t, t = void 0), t = t || "", null != e) return ui(t, e, i, "month"); var n, o = []; for (n = 0; n < 12; n++) o[n] = ui(t, n, i, "month"); return o }

        function fi(t, e, i, n) {
            "boolean" == typeof t ? (a(e) && (i = e, e = void 0), e = e || "") : (i = e = t, t = !1, a(e) && (i = e, e = void 0), e = e || "");
            var o, s = de(),
                r = t ? s._week.dow : 0;
            if (null != i) return ui(e, (i + r) % 7, n, "day");
            var l = [];
            for (o = 0; o < 7; o++) l[o] = ui(e, (o + r) % 7, n, "day");
            return l
        }
        hi.calendar = function(t, e, i) { var n = this._calendar[t] || this._calendar.sameElse; return D(n) ? n.call(e, i) : n }, hi.longDateFormat = function(t) {
            var e = this._longDateFormat[t],
                i = this._longDateFormat[t.toUpperCase()];
            return e || !i ? e : (this._longDateFormat[t] = i.replace(/MMMM|MM|DD|dddd/g, function(t) { return t.slice(1) }), this._longDateFormat[t])
        }, hi.invalidDate = function() { return this._invalidDate }, hi.ordinal = function(t) { return this._ordinal.replace("%d", t) }, hi.preparse = di, hi.postformat = di, hi.relativeTime = function(t, e, i, n) { var o = this._relativeTime[i]; return D(o) ? o(t, e, i, n) : o.replace(/%d/i, t) }, hi.pastFuture = function(t, e) { var i = this._relativeTime[t > 0 ? "future" : "past"]; return D(i) ? i(e) : i.replace(/%s/i, e) }, hi.set = function(t) {
            var e, i;
            for (i in t) D(e = t[i]) ? this[i] = e : this["_" + i] = e;
            this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
        }, hi.months = function(t, e) { return t ? n(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || Lt).test(e) ? "format" : "standalone"][t.month()] : n(this._months) ? this._months : this._months.standalone }, hi.monthsShort = function(t, e) { return t ? n(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[Lt.test(e) ? "format" : "standalone"][t.month()] : n(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone }, hi.monthsParse = function(t, e, i) {
            var n, o, s;
            if (this._monthsParseExact) return function(t, e, i) {
                var n, o, s, a = t.toLocaleLowerCase();
                if (!this._monthsParse)
                    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n) s = h([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(s, "").toLocaleLowerCase(), this._longMonthsParse[n] = this.months(s, "").toLocaleLowerCase();
                return i ? "MMM" === e ? -1 !== (o = St.call(this._shortMonthsParse, a)) ? o : null : -1 !== (o = St.call(this._longMonthsParse, a)) ? o : null : "MMM" === e ? -1 !== (o = St.call(this._shortMonthsParse, a)) ? o : -1 !== (o = St.call(this._longMonthsParse, a)) ? o : null : -1 !== (o = St.call(this._longMonthsParse, a)) ? o : -1 !== (o = St.call(this._shortMonthsParse, a)) ? o : null
            }.call(this, t, e, i);
            for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) { if (o = h([2e3, n]), i && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(o, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(o, "").replace(".", "") + "$", "i")), i || this._monthsParse[n] || (s = "^" + this.months(o, "") + "|^" + this.monthsShort(o, ""), this._monthsParse[n] = new RegExp(s.replace(".", ""), "i")), i && "MMMM" === e && this._longMonthsParse[n].test(t)) return n; if (i && "MMM" === e && this._shortMonthsParse[n].test(t)) return n; if (!i && this._monthsParse[n].test(t)) return n }
        }, hi.monthsRegex = function(t) { return this._monthsParseExact ? (c(this, "_monthsRegex") || qt.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (c(this, "_monthsRegex") || (this._monthsRegex = Yt), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex) }, hi.monthsShortRegex = function(t) { return this._monthsParseExact ? (c(this, "_monthsRegex") || qt.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (c(this, "_monthsShortRegex") || (this._monthsShortRegex = Nt), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex) }, hi.week = function(t) { return Rt(t, this._week.dow, this._week.doy).week }, hi.firstDayOfYear = function() { return this._week.doy }, hi.firstDayOfWeek = function() { return this._week.dow }, hi.weekdays = function(t, e) { return t ? n(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(e) ? "format" : "standalone"][t.day()] : n(this._weekdays) ? this._weekdays : this._weekdays.standalone }, hi.weekdaysMin = function(t) { return t ? this._weekdaysMin[t.day()] : this._weekdaysMin }, hi.weekdaysShort = function(t) { return t ? this._weekdaysShort[t.day()] : this._weekdaysShort }, hi.weekdaysParse = function(t, e, i) {
            var n, o, s;
            if (this._weekdaysParseExact) return function(t, e, i) {
                var n, o, s, a = t.toLocaleLowerCase();
                if (!this._weekdaysParse)
                    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n) s = h([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(s, "").toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(s, "").toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(s, "").toLocaleLowerCase();
                return i ? "dddd" === e ? -1 !== (o = St.call(this._weekdaysParse, a)) ? o : null : "ddd" === e ? -1 !== (o = St.call(this._shortWeekdaysParse, a)) ? o : null : -1 !== (o = St.call(this._minWeekdaysParse, a)) ? o : null : "dddd" === e ? -1 !== (o = St.call(this._weekdaysParse, a)) ? o : -1 !== (o = St.call(this._shortWeekdaysParse, a)) ? o : -1 !== (o = St.call(this._minWeekdaysParse, a)) ? o : null : "ddd" === e ? -1 !== (o = St.call(this._shortWeekdaysParse, a)) ? o : -1 !== (o = St.call(this._weekdaysParse, a)) ? o : -1 !== (o = St.call(this._minWeekdaysParse, a)) ? o : null : -1 !== (o = St.call(this._minWeekdaysParse, a)) ? o : -1 !== (o = St.call(this._weekdaysParse, a)) ? o : -1 !== (o = St.call(this._shortWeekdaysParse, a)) ? o : null
            }.call(this, t, e, i);
            for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) { if (o = h([2e3, 1]).day(n), i && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp("^" + this.weekdays(o, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[n] = new RegExp("^" + this.weekdaysShort(o, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(o, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[n] || (s = "^" + this.weekdays(o, "") + "|^" + this.weekdaysShort(o, "") + "|^" + this.weekdaysMin(o, ""), this._weekdaysParse[n] = new RegExp(s.replace(".", ""), "i")), i && "dddd" === e && this._fullWeekdaysParse[n].test(t)) return n; if (i && "ddd" === e && this._shortWeekdaysParse[n].test(t)) return n; if (i && "dd" === e && this._minWeekdaysParse[n].test(t)) return n; if (!i && this._weekdaysParse[n].test(t)) return n }
        }, hi.weekdaysRegex = function(t) { return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Qt.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (c(this, "_weekdaysRegex") || (this._weekdaysRegex = Gt), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex) }, hi.weekdaysShortRegex = function(t) { return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Qt.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (c(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Xt), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) }, hi.weekdaysMinRegex = function(t) { return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Qt.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (c(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Zt), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) }, hi.isPM = function(t) { return "p" === (t + "").toLowerCase().charAt(0) }, hi.meridiem = function(t, e, i) { return t > 11 ? i ? "pm" : "PM" : i ? "am" : "AM" }, le("en", { dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function(t) { var e = t % 10; return t + (1 === w(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th") } }), i.lang = k("moment.lang is deprecated. Use moment.locale instead.", le), i.langData = k("moment.langData is deprecated. Use moment.localeData instead.", de);
        var mi = Math.abs;

        function gi(t, e, i, n) { var o = Ue(e, i); return t._milliseconds += n * o._milliseconds, t._days += n * o._days, t._months += n * o._months, t._bubble() }

        function vi(t) { return t < 0 ? Math.floor(t) : Math.ceil(t) }

        function yi(t) { return 4800 * t / 146097 }

        function bi(t) { return 146097 * t / 4800 }

        function _i(t) { return function() { return this.as(t) } }
        var wi = _i("ms"),
            xi = _i("s"),
            $i = _i("m"),
            ki = _i("h"),
            Ti = _i("d"),
            Si = _i("w"),
            Ci = _i("M"),
            Di = _i("y");

        function Mi(t) { return function() { return this.isValid() ? this._data[t] : NaN } }
        var Ii = Mi("milliseconds"),
            Ai = Mi("seconds"),
            Li = Mi("minutes"),
            Pi = Mi("hours"),
            Ei = Mi("days"),
            Fi = Mi("months"),
            Oi = Mi("years");
        var Ni = Math.round,
            Yi = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 };
        var qi = Math.abs;

        function ji(t) { return (t > 0) - (t < 0) || +t }

        function Hi() {
            if (!this.isValid()) return this.localeData().invalidDate();
            var t, e, i = qi(this._milliseconds) / 1e3,
                n = qi(this._days),
                o = qi(this._months);
            t = _(i / 60), e = _(t / 60), i %= 60, t %= 60;
            var s = _(o / 12),
                a = o %= 12,
                r = n,
                l = e,
                c = t,
                d = i ? i.toFixed(3).replace(/\.?0+$/, "") : "",
                h = this.asSeconds();
            if (!h) return "P0D";
            var u = h < 0 ? "-" : "",
                p = ji(this._months) !== ji(h) ? "-" : "",
                f = ji(this._days) !== ji(h) ? "-" : "",
                m = ji(this._milliseconds) !== ji(h) ? "-" : "";
            return u + "P" + (s ? p + s + "Y" : "") + (a ? p + a + "M" : "") + (r ? f + r + "D" : "") + (l || c || d ? "T" : "") + (l ? m + l + "H" : "") + (c ? m + c + "M" : "") + (d ? m + d + "S" : "")
        }
        var Vi = Pe.prototype;
        return Vi.isValid = function() { return this._isValid }, Vi.abs = function() { var t = this._data; return this._milliseconds = mi(this._milliseconds), this._days = mi(this._days), this._months = mi(this._months), t.milliseconds = mi(t.milliseconds), t.seconds = mi(t.seconds), t.minutes = mi(t.minutes), t.hours = mi(t.hours), t.months = mi(t.months), t.years = mi(t.years), this }, Vi.add = function(t, e) { return gi(this, t, e, 1) }, Vi.subtract = function(t, e) { return gi(this, t, e, -1) }, Vi.as = function(t) {
            if (!this.isValid()) return NaN;
            var e, i, n = this._milliseconds;
            if ("month" === (t = P(t)) || "year" === t) return e = this._days + n / 864e5, i = this._months + yi(e), "month" === t ? i : i / 12;
            switch (e = this._days + Math.round(bi(this._months)), t) {
                case "week":
                    return e / 7 + n / 6048e5;
                case "day":
                    return e + n / 864e5;
                case "hour":
                    return 24 * e + n / 36e5;
                case "minute":
                    return 1440 * e + n / 6e4;
                case "second":
                    return 86400 * e + n / 1e3;
                case "millisecond":
                    return Math.floor(864e5 * e) + n;
                default:
                    throw new Error("Unknown unit " + t)
            }
        }, Vi.asMilliseconds = wi, Vi.asSeconds = xi, Vi.asMinutes = $i, Vi.asHours = ki, Vi.asDays = Ti, Vi.asWeeks = Si, Vi.asMonths = Ci, Vi.asYears = Di, Vi.valueOf = function() { return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * w(this._months / 12) : NaN }, Vi._bubble = function() {
            var t, e, i, n, o, s = this._milliseconds,
                a = this._days,
                r = this._months,
                l = this._data;
            return s >= 0 && a >= 0 && r >= 0 || s <= 0 && a <= 0 && r <= 0 || (s += 864e5 * vi(bi(r) + a), a = 0, r = 0), l.milliseconds = s % 1e3, t = _(s / 1e3), l.seconds = t % 60, e = _(t / 60), l.minutes = e % 60, i = _(e / 60), l.hours = i % 24, a += _(i / 24), r += o = _(yi(a)), a -= vi(bi(o)), n = _(r / 12), r %= 12, l.days = a, l.months = r, l.years = n, this
        }, Vi.clone = function() { return Ue(this) }, Vi.get = function(t) { return t = P(t), this.isValid() ? this[t + "s"]() : NaN }, Vi.milliseconds = Ii, Vi.seconds = Ai, Vi.minutes = Li, Vi.hours = Pi, Vi.days = Ei, Vi.weeks = function() { return _(this.days() / 7) }, Vi.months = Fi, Vi.years = Oi, Vi.humanize = function(t) {
            if (!this.isValid()) return this.localeData().invalidDate();
            var e = this.localeData(),
                i = function(t, e, i) {
                    var n = Ue(t).abs(),
                        o = Ni(n.as("s")),
                        s = Ni(n.as("m")),
                        a = Ni(n.as("h")),
                        r = Ni(n.as("d")),
                        l = Ni(n.as("M")),
                        c = Ni(n.as("y")),
                        d = o <= Yi.ss && ["s", o] || o < Yi.s && ["ss", o] || s <= 1 && ["m"] || s < Yi.m && ["mm", s] || a <= 1 && ["h"] || a < Yi.h && ["hh", a] || r <= 1 && ["d"] || r < Yi.d && ["dd", r] || l <= 1 && ["M"] || l < Yi.M && ["MM", l] || c <= 1 && ["y"] || ["yy", c];
                    return d[2] = e, d[3] = +t > 0, d[4] = i,
                        function(t, e, i, n, o) { return o.relativeTime(e || 1, !!i, t, n) }.apply(null, d)
                }(this, !t, e);
            return t && (i = e.pastFuture(+this, i)), e.postformat(i)
        }, Vi.toISOString = Hi, Vi.toString = Hi, Vi.toJSON = Hi, Vi.locale = Je, Vi.localeData = ti, Vi.toIsoString = k("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Hi), Vi.lang = Ke, V("X", 0, 0, "unix"), V("x", 0, 0, "valueOf"), lt("x", nt), lt("X", /[+-]?\d+(\.\d{1,3})?/), ut("X", function(t, e, i) { i._d = new Date(1e3 * parseFloat(t, 10)) }), ut("x", function(t, e, i) { i._d = new Date(w(t)) }), i.version = "2.22.2", t = De, i.fn = ci, i.min = function() { return Ae("isBefore", [].slice.call(arguments, 0)) }, i.max = function() { return Ae("isAfter", [].slice.call(arguments, 0)) }, i.now = function() { return Date.now ? Date.now() : +new Date }, i.utc = h, i.unix = function(t) { return De(1e3 * t) }, i.months = function(t, e) { return pi(t, e, "months") }, i.isDate = r, i.locale = le, i.invalid = f, i.duration = Ue, i.isMoment = b, i.weekdays = function(t, e, i) { return fi(t, e, i, "weekdays") }, i.parseZone = function() { return De.apply(null, arguments).parseZone() }, i.localeData = de, i.isDuration = Ee, i.monthsShort = function(t, e) { return pi(t, e, "monthsShort") }, i.weekdaysMin = function(t, e, i) { return fi(t, e, i, "weekdaysMin") }, i.defineLocale = ce, i.updateLocale = function(t, e) {
            if (null != e) {
                var i, n, o = ne;
                null != (n = re(t)) && (o = n._config), (i = new I(e = M(o, e))).parentLocale = oe[t], oe[t] = i, le(t)
            } else null != oe[t] && (null != oe[t].parentLocale ? oe[t] = oe[t].parentLocale : null != oe[t] && delete oe[t]);
            return oe[t]
        }, i.locales = function() { return T(oe) }, i.weekdaysShort = function(t, e, i) { return fi(t, e, i, "weekdaysShort") }, i.normalizeUnits = P, i.relativeTimeRounding = function(t) { return void 0 === t ? Ni : "function" == typeof t && (Ni = t, !0) }, i.relativeTimeThreshold = function(t, e) { return void 0 !== Yi[t] && (void 0 === e ? Yi[t] : (Yi[t] = e, "s" === t && (Yi.ss = e - 1), !0)) }, i.calendarFormat = function(t, e) { var i = t.diff(e, "days", !0); return i < -6 ? "sameElse" : i < -1 ? "lastWeek" : i < 0 ? "lastDay" : i < 1 ? "sameDay" : i < 2 ? "nextDay" : i < 7 ? "nextWeek" : "sameElse" }, i.prototype = ci, i.HTML5_FMT = { DATETIME_LOCAL: "YYYY-MM-DDTHH:mm", DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss", DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS", DATE: "YYYY-MM-DD", TIME: "HH:mm", TIME_SECONDS: "HH:mm:ss", TIME_MS: "HH:mm:ss.SSS", WEEK: "YYYY-[W]WW", MONTH: "YYYY-MM" }, i
    }), function(t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.moment = e() }(this, function() {
        "use strict";
        var t, e;

        function i() { return t.apply(null, arguments) }

        function n(t) { return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t) }

        function o(t) { return null != t && "[object Object]" === Object.prototype.toString.call(t) }

        function s(t) { return void 0 === t }

        function a(t) { return "number" == typeof t || "[object Number]" === Object.prototype.toString.call(t) }

        function r(t) { return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t) }

        function l(t, e) { var i, n = []; for (i = 0; i < t.length; ++i) n.push(e(t[i], i)); return n }

        function c(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }

        function d(t, e) { for (var i in e) c(e, i) && (t[i] = e[i]); return c(e, "toString") && (t.toString = e.toString), c(e, "valueOf") && (t.valueOf = e.valueOf), t }

        function h(t, e, i, n) { return Ce(t, e, i, n, !0).utc() }

        function u(t) { return null == t._pf && (t._pf = { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1, parsedDateParts: [], meridiem: null, rfc2822: !1, weekdayMismatch: !1 }), t._pf }

        function p(t) {
            if (null == t._isValid) {
                var i = u(t),
                    n = e.call(i.parsedDateParts, function(t) { return null != t }),
                    o = !isNaN(t._d.getTime()) && i.overflow < 0 && !i.empty && !i.invalidMonth && !i.invalidWeekday && !i.weekdayMismatch && !i.nullInput && !i.invalidFormat && !i.userInvalidated && (!i.meridiem || i.meridiem && n);
                if (t._strict && (o = o && 0 === i.charsLeftOver && 0 === i.unusedTokens.length && void 0 === i.bigHour), null != Object.isFrozen && Object.isFrozen(t)) return o;
                t._isValid = o
            }
            return t._isValid
        }

        function f(t) { var e = h(NaN); return null != t ? d(u(e), t) : u(e).userInvalidated = !0, e }
        e = Array.prototype.some ? Array.prototype.some : function(t) {
            for (var e = Object(this), i = e.length >>> 0, n = 0; n < i; n++)
                if (n in e && t.call(this, e[n], n, e)) return !0;
            return !1
        };
        var m = i.momentProperties = [];

        function g(t, e) {
            var i, n, o;
            if (s(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), s(e._i) || (t._i = e._i), s(e._f) || (t._f = e._f), s(e._l) || (t._l = e._l), s(e._strict) || (t._strict = e._strict), s(e._tzm) || (t._tzm = e._tzm), s(e._isUTC) || (t._isUTC = e._isUTC), s(e._offset) || (t._offset = e._offset), s(e._pf) || (t._pf = u(e)), s(e._locale) || (t._locale = e._locale), m.length > 0)
                for (i = 0; i < m.length; i++) s(o = e[n = m[i]]) || (t[n] = o);
            return t
        }
        var v = !1;

        function y(t) { g(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === v && (v = !0, i.updateOffset(this), v = !1) }

        function b(t) { return t instanceof y || null != t && null != t._isAMomentObject }

        function _(t) { return t < 0 ? Math.ceil(t) || 0 : Math.floor(t) }

        function w(t) {
            var e = +t,
                i = 0;
            return 0 !== e && isFinite(e) && (i = _(e)), i
        }

        function x(t, e, i) {
            var n, o = Math.min(t.length, e.length),
                s = Math.abs(t.length - e.length),
                a = 0;
            for (n = 0; n < o; n++)(i && t[n] !== e[n] || !i && w(t[n]) !== w(e[n])) && a++;
            return a + s
        }

        function $(t) {!1 === i.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t) }

        function k(t, e) {
            var n = !0;
            return d(function() {
                if (null != i.deprecationHandler && i.deprecationHandler(null, t), n) {
                    for (var o, s = [], a = 0; a < arguments.length; a++) {
                        if (o = "", "object" == typeof arguments[a]) {
                            for (var r in o += "\n[" + a + "] ", arguments[0]) o += r + ": " + arguments[0][r] + ", ";
                            o = o.slice(0, -2)
                        } else o = arguments[a];
                        s.push(o)
                    }
                    $(t + "\nArguments: " + Array.prototype.slice.call(s).join("") + "\n" + (new Error).stack), n = !1
                }
                return e.apply(this, arguments)
            }, e)
        }
        var T, S = {};

        function C(t, e) { null != i.deprecationHandler && i.deprecationHandler(t, e), S[t] || ($(e), S[t] = !0) }

        function D(t) { return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t) }

        function M(t, e) { var i, n = d({}, t); for (i in e) c(e, i) && (o(t[i]) && o(e[i]) ? (n[i] = {}, d(n[i], t[i]), d(n[i], e[i])) : null != e[i] ? n[i] = e[i] : delete n[i]); for (i in t) c(t, i) && !c(e, i) && o(t[i]) && (n[i] = d({}, n[i])); return n }

        function I(t) { null != t && this.set(t) }
        i.suppressDeprecationWarnings = !1, i.deprecationHandler = null, T = Object.keys ? Object.keys : function(t) { var e, i = []; for (e in t) c(t, e) && i.push(e); return i };
        var A = {};

        function L(t, e) {
            var i = t.toLowerCase();
            A[i] = A[i + "s"] = A[e] = t
        }

        function P(t) { return "string" == typeof t ? A[t] || A[t.toLowerCase()] : void 0 }

        function E(t) { var e, i, n = {}; for (i in t) c(t, i) && (e = P(i)) && (n[e] = t[i]); return n }
        var F = {};

        function O(t, e) { F[t] = e }

        function N(t, e, i) {
            var n = "" + Math.abs(t),
                o = e - n.length;
            return (t >= 0 ? i ? "+" : "" : "-") + Math.pow(10, Math.max(0, o)).toString().substr(1) + n
        }
        var Y = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            q = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            j = {},
            H = {};

        function V(t, e, i, n) { var o = n; "string" == typeof n && (o = function() { return this[n]() }), t && (H[t] = o), e && (H[e[0]] = function() { return N(o.apply(this, arguments), e[1], e[2]) }), i && (H[i] = function() { return this.localeData().ordinal(o.apply(this, arguments), t) }) }

        function R(t, e) { return t.isValid() ? (e = U(e, t.localeData()), j[e] = j[e] || function(t) { var e, i, n, o = t.match(Y); for (e = 0, i = o.length; e < i; e++) H[o[e]] ? o[e] = H[o[e]] : o[e] = (n = o[e]).match(/\[[\s\S]/) ? n.replace(/^\[|\]$/g, "") : n.replace(/\\/g, ""); return function(e) { var n, s = ""; for (n = 0; n < i; n++) s += D(o[n]) ? o[n].call(e, t) : o[n]; return s } }(e), j[e](t)) : t.localeData().invalidDate() }

        function U(t, e) {
            var i = 5;

            function n(t) { return e.longDateFormat(t) || t }
            for (q.lastIndex = 0; i >= 0 && q.test(t);) t = t.replace(q, n), q.lastIndex = 0, i -= 1;
            return t
        }
        var W = /\d/,
            z = /\d\d/,
            B = /\d{3}/,
            G = /\d{4}/,
            X = /[+-]?\d{6}/,
            Z = /\d\d?/,
            Q = /\d\d\d\d?/,
            J = /\d\d\d\d\d\d?/,
            K = /\d{1,3}/,
            tt = /\d{1,4}/,
            et = /[+-]?\d{1,6}/,
            it = /\d+/,
            nt = /[+-]?\d+/,
            ot = /Z|[+-]\d\d:?\d\d/gi,
            st = /Z|[+-]\d\d(?::?\d\d)?/gi,
            at = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
            rt = {};

        function lt(t, e, i) { rt[t] = D(e) ? e : function(t, n) { return t && i ? i : e } }

        function ct(t, e) { return c(rt, t) ? rt[t](e._strict, e._locale) : new RegExp(dt(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, e, i, n, o) { return e || i || n || o }))) }

        function dt(t) { return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") }
        var ht = {};

        function ut(t, e) { var i, n = e; for ("string" == typeof t && (t = [t]), a(e) && (n = function(t, i) { i[e] = w(t) }), i = 0; i < t.length; i++) ht[t[i]] = n }

        function pt(t, e) { ut(t, function(t, i, n, o) { n._w = n._w || {}, e(t, n._w, n, o) }) }

        function ft(t, e, i) { null != e && c(ht, t) && ht[t](e, i._a, i, t) }
        var mt = 0,
            gt = 1,
            vt = 2,
            yt = 3,
            bt = 4,
            _t = 5,
            wt = 6,
            xt = 7,
            $t = 8;

        function kt(t) { return Tt(t) ? 366 : 365 }

        function Tt(t) { return t % 4 == 0 && t % 100 != 0 || t % 400 == 0 }
        V("Y", 0, 0, function() { var t = this.year(); return t <= 9999 ? "" + t : "+" + t }), V(0, ["YY", 2], 0, function() { return this.year() % 100 }), V(0, ["YYYY", 4], 0, "year"), V(0, ["YYYYY", 5], 0, "year"), V(0, ["YYYYYY", 6, !0], 0, "year"), L("year", "y"), O("year", 1), lt("Y", nt), lt("YY", Z, z), lt("YYYY", tt, G), lt("YYYYY", et, X), lt("YYYYYY", et, X), ut(["YYYYY", "YYYYYY"], mt), ut("YYYY", function(t, e) { e[mt] = 2 === t.length ? i.parseTwoDigitYear(t) : w(t) }), ut("YY", function(t, e) { e[mt] = i.parseTwoDigitYear(t) }), ut("Y", function(t, e) { e[mt] = parseInt(t, 10) }), i.parseTwoDigitYear = function(t) { return w(t) + (w(t) > 68 ? 1900 : 2e3) };
        var St, Ct = Dt("FullYear", !0);

        function Dt(t, e) { return function(n) { return null != n ? (It(this, t, n), i.updateOffset(this, e), this) : Mt(this, t) } }

        function Mt(t, e) { return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN }

        function It(t, e, i) { t.isValid() && !isNaN(i) && ("FullYear" === e && Tt(t.year()) && 1 === t.month() && 29 === t.date() ? t._d["set" + (t._isUTC ? "UTC" : "") + e](i, t.month(), At(i, t.month())) : t._d["set" + (t._isUTC ? "UTC" : "") + e](i)) }

        function At(t, e) { if (isNaN(t) || isNaN(e)) return NaN; var i, n = (e % (i = 12) + i) % i; return t += (e - n) / 12, 1 === n ? Tt(t) ? 29 : 28 : 31 - n % 7 % 2 }
        St = Array.prototype.indexOf ? Array.prototype.indexOf : function(t) {
            var e;
            for (e = 0; e < this.length; ++e)
                if (this[e] === t) return e;
            return -1
        }, V("M", ["MM", 2], "Mo", function() { return this.month() + 1 }), V("MMM", 0, 0, function(t) { return this.localeData().monthsShort(this, t) }), V("MMMM", 0, 0, function(t) { return this.localeData().months(this, t) }), L("month", "M"), O("month", 8), lt("M", Z), lt("MM", Z, z), lt("MMM", function(t, e) { return e.monthsShortRegex(t) }), lt("MMMM", function(t, e) { return e.monthsRegex(t) }), ut(["M", "MM"], function(t, e) { e[gt] = w(t) - 1 }), ut(["MMM", "MMMM"], function(t, e, i, n) {
            var o = i._locale.monthsParse(t, n, i._strict);
            null != o ? e[gt] = o : u(i).invalidMonth = t
        });
        var Lt = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
            Pt = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
        var Et = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

        function Ft(t, e) {
            var i;
            if (!t.isValid()) return t;
            if ("string" == typeof e)
                if (/^\d+$/.test(e)) e = w(e);
                else if (!a(e = t.localeData().monthsParse(e))) return t;
            return i = Math.min(t.date(), At(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, i), t
        }

        function Ot(t) { return null != t ? (Ft(this, t), i.updateOffset(this, !0), this) : Mt(this, "Month") }
        var Nt = at;
        var Yt = at;

        function qt() {
            function t(t, e) { return e.length - t.length }
            var e, i, n = [],
                o = [],
                s = [];
            for (e = 0; e < 12; e++) i = h([2e3, e]), n.push(this.monthsShort(i, "")), o.push(this.months(i, "")), s.push(this.months(i, "")), s.push(this.monthsShort(i, ""));
            for (n.sort(t), o.sort(t), s.sort(t), e = 0; e < 12; e++) n[e] = dt(n[e]), o[e] = dt(o[e]);
            for (e = 0; e < 24; e++) s[e] = dt(s[e]);
            this._monthsRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")
        }

        function jt(t) { var e = new Date(Date.UTC.apply(null, arguments)); return t < 100 && t >= 0 && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t), e }

        function Ht(t, e, i) { var n = 7 + e - i; return -((7 + jt(t, 0, n).getUTCDay() - e) % 7) + n - 1 }

        function Vt(t, e, i, n, o) { var s, a, r = 1 + 7 * (e - 1) + (7 + i - n) % 7 + Ht(t, n, o); return r <= 0 ? a = kt(s = t - 1) + r : r > kt(t) ? (s = t + 1, a = r - kt(t)) : (s = t, a = r), { year: s, dayOfYear: a } }

        function Rt(t, e, i) {
            var n, o, s = Ht(t.year(), e, i),
                a = Math.floor((t.dayOfYear() - s - 1) / 7) + 1;
            return a < 1 ? n = a + Ut(o = t.year() - 1, e, i) : a > Ut(t.year(), e, i) ? (n = a - Ut(t.year(), e, i), o = t.year() + 1) : (o = t.year(), n = a), { week: n, year: o }
        }

        function Ut(t, e, i) {
            var n = Ht(t, e, i),
                o = Ht(t + 1, e, i);
            return (kt(t) - n + o) / 7
        }
        V("w", ["ww", 2], "wo", "week"), V("W", ["WW", 2], "Wo", "isoWeek"), L("week", "w"), L("isoWeek", "W"), O("week", 5), O("isoWeek", 5), lt("w", Z), lt("ww", Z, z), lt("W", Z), lt("WW", Z, z), pt(["w", "ww", "W", "WW"], function(t, e, i, n) { e[n.substr(0, 1)] = w(t) });
        V("d", 0, "do", "day"), V("dd", 0, 0, function(t) { return this.localeData().weekdaysMin(this, t) }), V("ddd", 0, 0, function(t) { return this.localeData().weekdaysShort(this, t) }), V("dddd", 0, 0, function(t) { return this.localeData().weekdays(this, t) }), V("e", 0, 0, "weekday"), V("E", 0, 0, "isoWeekday"), L("day", "d"), L("weekday", "e"), L("isoWeekday", "E"), O("day", 11), O("weekday", 11), O("isoWeekday", 11), lt("d", Z), lt("e", Z), lt("E", Z), lt("dd", function(t, e) { return e.weekdaysMinRegex(t) }), lt("ddd", function(t, e) { return e.weekdaysShortRegex(t) }), lt("dddd", function(t, e) { return e.weekdaysRegex(t) }), pt(["dd", "ddd", "dddd"], function(t, e, i, n) {
            var o = i._locale.weekdaysParse(t, n, i._strict);
            null != o ? e.d = o : u(i).invalidWeekday = t
        }), pt(["d", "e", "E"], function(t, e, i, n) { e[n] = w(t) });
        var Wt = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
        var zt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
        var Bt = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
        var Gt = at;
        var Xt = at;
        var Zt = at;

        function Qt() {
            function t(t, e) { return e.length - t.length }
            var e, i, n, o, s, a = [],
                r = [],
                l = [],
                c = [];
            for (e = 0; e < 7; e++) i = h([2e3, 1]).day(e), n = this.weekdaysMin(i, ""), o = this.weekdaysShort(i, ""), s = this.weekdays(i, ""), a.push(n), r.push(o), l.push(s), c.push(n), c.push(o), c.push(s);
            for (a.sort(t), r.sort(t), l.sort(t), c.sort(t), e = 0; e < 7; e++) r[e] = dt(r[e]), l[e] = dt(l[e]), c[e] = dt(c[e]);
            this._weekdaysRegex = new RegExp("^(" + c.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + a.join("|") + ")", "i")
        }

        function Jt() { return this.hours() % 12 || 12 }

        function Kt(t, e) { V(t, 0, 0, function() { return this.localeData().meridiem(this.hours(), this.minutes(), e) }) }

        function te(t, e) { return e._meridiemParse }
        V("H", ["HH", 2], 0, "hour"), V("h", ["hh", 2], 0, Jt), V("k", ["kk", 2], 0, function() { return this.hours() || 24 }), V("hmm", 0, 0, function() { return "" + Jt.apply(this) + N(this.minutes(), 2) }), V("hmmss", 0, 0, function() { return "" + Jt.apply(this) + N(this.minutes(), 2) + N(this.seconds(), 2) }), V("Hmm", 0, 0, function() { return "" + this.hours() + N(this.minutes(), 2) }), V("Hmmss", 0, 0, function() { return "" + this.hours() + N(this.minutes(), 2) + N(this.seconds(), 2) }), Kt("a", !0), Kt("A", !1), L("hour", "h"), O("hour", 13), lt("a", te), lt("A", te), lt("H", Z), lt("h", Z), lt("k", Z), lt("HH", Z, z), lt("hh", Z, z), lt("kk", Z, z), lt("hmm", Q), lt("hmmss", J), lt("Hmm", Q), lt("Hmmss", J), ut(["H", "HH"], yt), ut(["k", "kk"], function(t, e, i) {
            var n = w(t);
            e[yt] = 24 === n ? 0 : n
        }), ut(["a", "A"], function(t, e, i) { i._isPm = i._locale.isPM(t), i._meridiem = t }), ut(["h", "hh"], function(t, e, i) { e[yt] = w(t), u(i).bigHour = !0 }), ut("hmm", function(t, e, i) {
            var n = t.length - 2;
            e[yt] = w(t.substr(0, n)), e[bt] = w(t.substr(n)), u(i).bigHour = !0
        }), ut("hmmss", function(t, e, i) {
            var n = t.length - 4,
                o = t.length - 2;
            e[yt] = w(t.substr(0, n)), e[bt] = w(t.substr(n, 2)), e[_t] = w(t.substr(o)), u(i).bigHour = !0
        }), ut("Hmm", function(t, e, i) {
            var n = t.length - 2;
            e[yt] = w(t.substr(0, n)), e[bt] = w(t.substr(n))
        }), ut("Hmmss", function(t, e, i) {
            var n = t.length - 4,
                o = t.length - 2;
            e[yt] = w(t.substr(0, n)), e[bt] = w(t.substr(n, 2)), e[_t] = w(t.substr(o))
        });
        var ee, ie = Dt("Hours", !0),
            ne = { calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, longDateFormat: { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, invalidDate: "Invalid date", ordinal: "%d", dayOfMonthOrdinalParse: /\d{1,2}/, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, months: Pt, monthsShort: Et, week: { dow: 0, doy: 6 }, weekdays: Wt, weekdaysMin: Bt, weekdaysShort: zt, meridiemParse: /[ap]\.?m?\.?/i },
            oe = {},
            se = {};

        function ae(t) { return t ? t.toLowerCase().replace("_", "-") : t }

        function re(t) {
            var e = null;
            if (!oe[t] && "undefined" != typeof module && module && module.exports) try { e = ee._abbr, require("./locale/" + t), le(e) } catch (t) {}
            return oe[t]
        }

        function le(t, e) { var i; return t && ((i = s(e) ? de(t) : ce(t, e)) ? ee = i : "undefined" != typeof console && console.warn && console.warn("Locale " + t + " not found. Did you forget to load it?")), ee._abbr }

        function ce(t, e) {
            if (null !== e) {
                var i, n = ne;
                if (e.abbr = t, null != oe[t]) C("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = oe[t]._config;
                else if (null != e.parentLocale)
                    if (null != oe[e.parentLocale]) n = oe[e.parentLocale]._config;
                    else {
                        if (null == (i = re(e.parentLocale))) return se[e.parentLocale] || (se[e.parentLocale] = []), se[e.parentLocale].push({ name: t, config: e }), null;
                        n = i._config
                    }
                return oe[t] = new I(M(n, e)), se[t] && se[t].forEach(function(t) { ce(t.name, t.config) }), le(t), oe[t]
            }
            return delete oe[t], null
        }

        function de(t) {
            var e;
            if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return ee;
            if (!n(t)) {
                if (e = re(t)) return e;
                t = [t]
            }
            return function(t) {
                for (var e, i, n, o, s = 0; s < t.length;) {
                    for (e = (o = ae(t[s]).split("-")).length, i = (i = ae(t[s + 1])) ? i.split("-") : null; e > 0;) {
                        if (n = re(o.slice(0, e).join("-"))) return n;
                        if (i && i.length >= e && x(o, i, !0) >= e - 1) break;
                        e--
                    }
                    s++
                }
                return ee
            }(t)
        }

        function he(t) { var e, i = t._a; return i && -2 === u(t).overflow && (e = i[gt] < 0 || i[gt] > 11 ? gt : i[vt] < 1 || i[vt] > At(i[mt], i[gt]) ? vt : i[yt] < 0 || i[yt] > 24 || 24 === i[yt] && (0 !== i[bt] || 0 !== i[_t] || 0 !== i[wt]) ? yt : i[bt] < 0 || i[bt] > 59 ? bt : i[_t] < 0 || i[_t] > 59 ? _t : i[wt] < 0 || i[wt] > 999 ? wt : -1, u(t)._overflowDayOfYear && (e < mt || e > vt) && (e = vt), u(t)._overflowWeeks && -1 === e && (e = xt), u(t)._overflowWeekday && -1 === e && (e = $t), u(t).overflow = e), t }

        function ue(t, e, i) { return null != t ? t : null != e ? e : i }

        function pe(t) {
            var e, n, o, s, a, r = [];
            if (!t._d) {
                for (o = function(t) { var e = new Date(i.now()); return t._useUTC ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()] : [e.getFullYear(), e.getMonth(), e.getDate()] }(t), t._w && null == t._a[vt] && null == t._a[gt] && function(t) {
                        var e, i, n, o, s, a, r, l;
                        if (null != (e = t._w).GG || null != e.W || null != e.E) s = 1, a = 4, i = ue(e.GG, t._a[mt], Rt(De(), 1, 4).year), n = ue(e.W, 1), ((o = ue(e.E, 1)) < 1 || o > 7) && (l = !0);
                        else {
                            s = t._locale._week.dow, a = t._locale._week.doy;
                            var c = Rt(De(), s, a);
                            i = ue(e.gg, t._a[mt], c.year), n = ue(e.w, c.week), null != e.d ? ((o = e.d) < 0 || o > 6) && (l = !0) : null != e.e ? (o = e.e + s, (e.e < 0 || e.e > 6) && (l = !0)) : o = s
                        }
                        n < 1 || n > Ut(i, s, a) ? u(t)._overflowWeeks = !0 : null != l ? u(t)._overflowWeekday = !0 : (r = Vt(i, n, o, s, a), t._a[mt] = r.year, t._dayOfYear = r.dayOfYear)
                    }(t), null != t._dayOfYear && (a = ue(t._a[mt], o[mt]), (t._dayOfYear > kt(a) || 0 === t._dayOfYear) && (u(t)._overflowDayOfYear = !0), n = jt(a, 0, t._dayOfYear), t._a[gt] = n.getUTCMonth(), t._a[vt] = n.getUTCDate()), e = 0; e < 3 && null == t._a[e]; ++e) t._a[e] = r[e] = o[e];
                for (; e < 7; e++) t._a[e] = r[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
                24 === t._a[yt] && 0 === t._a[bt] && 0 === t._a[_t] && 0 === t._a[wt] && (t._nextDay = !0, t._a[yt] = 0), t._d = (t._useUTC ? jt : function(t, e, i, n, o, s, a) { var r = new Date(t, e, i, n, o, s, a); return t < 100 && t >= 0 && isFinite(r.getFullYear()) && r.setFullYear(t), r }).apply(null, r), s = t._useUTC ? t._d.getUTCDay() : t._d.getDay(), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[yt] = 24), t._w && void 0 !== t._w.d && t._w.d !== s && (u(t).weekdayMismatch = !0)
            }
        }
        var fe = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            me = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            ge = /Z|[+-]\d\d(?::?\d\d)?/,
            ve = [
                ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                ["YYYY-DDD", /\d{4}-\d{3}/],
                ["YYYY-MM", /\d{4}-\d\d/, !1],
                ["YYYYYYMMDD", /[+-]\d{10}/],
                ["YYYYMMDD", /\d{8}/],
                ["GGGG[W]WWE", /\d{4}W\d{3}/],
                ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                ["YYYYDDD", /\d{7}/]
            ],
            ye = [
                ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                ["HH:mm", /\d\d:\d\d/],
                ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                ["HHmmss", /\d\d\d\d\d\d/],
                ["HHmm", /\d\d\d\d/],
                ["HH", /\d\d/]
            ],
            be = /^\/?Date\((\-?\d+)/i;

        function _e(t) {
            var e, i, n, o, s, a, r = t._i,
                l = fe.exec(r) || me.exec(r);
            if (l) {
                for (u(t).iso = !0, e = 0, i = ve.length; e < i; e++)
                    if (ve[e][1].exec(l[1])) { o = ve[e][0], n = !1 !== ve[e][2]; break }
                if (null == o) return void(t._isValid = !1);
                if (l[3]) {
                    for (e = 0, i = ye.length; e < i; e++)
                        if (ye[e][1].exec(l[3])) { s = (l[2] || " ") + ye[e][0]; break }
                    if (null == s) return void(t._isValid = !1)
                }
                if (!n && null != s) return void(t._isValid = !1);
                if (l[4]) {
                    if (!ge.exec(l[4])) return void(t._isValid = !1);
                    a = "Z"
                }
                t._f = o + (s || "") + (a || ""), Te(t)
            } else t._isValid = !1
        }
        var we = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

        function xe(t, e, i, n, o, s) { var a = [function(t) { var e = parseInt(t, 10); if (e <= 49) return 2e3 + e; if (e <= 999) return 1900 + e; return e }(t), Et.indexOf(e), parseInt(i, 10), parseInt(n, 10), parseInt(o, 10)]; return s && a.push(parseInt(s, 10)), a }
        var $e = { UT: 0, GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480 };

        function ke(t) {
            var e = we.exec(t._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*!/, "").replace(/\s\s*$/, ""));
            if (e) {
                var i = xe(e[4], e[3], e[2], e[5], e[6], e[7]);
                if (! function(t, e, i) { return !t || zt.indexOf(t) === new Date(e[0], e[1], e[2]).getDay() || (u(i).weekdayMismatch = !0, i._isValid = !1, !1) }(e[1], i, t)) return;
                t._a = i, t._tzm = function(t, e, i) {
                    if (t) return $e[t];
                    if (e) return 0;
                    var n = parseInt(i, 10),
                        o = n % 100;
                    return (n - o) / 100 * 60 + o
                }(e[8], e[9], e[10]), t._d = jt.apply(null, t._a), t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), u(t).rfc2822 = !0
            } else t._isValid = !1
        }

        function Te(t) {
            if (t._f !== i.ISO_8601)
                if (t._f !== i.RFC_2822) {
                    t._a = [], u(t).empty = !0;
                    var e, n, o, s, a, r = "" + t._i,
                        l = r.length,
                        c = 0;
                    for (o = U(t._f, t._locale).match(Y) || [], e = 0; e < o.length; e++) s = o[e], (n = (r.match(ct(s, t)) || [])[0]) && ((a = r.substr(0, r.indexOf(n))).length > 0 && u(t).unusedInput.push(a), r = r.slice(r.indexOf(n) + n.length), c += n.length), H[s] ? (n ? u(t).empty = !1 : u(t).unusedTokens.push(s), ft(s, n, t)) : t._strict && !n && u(t).unusedTokens.push(s);
                    u(t).charsLeftOver = l - c, r.length > 0 && u(t).unusedInput.push(r), t._a[yt] <= 12 && !0 === u(t).bigHour && t._a[yt] > 0 && (u(t).bigHour = void 0), u(t).parsedDateParts = t._a.slice(0), u(t).meridiem = t._meridiem, t._a[yt] = function(t, e, i) { var n; if (null == i) return e; return null != t.meridiemHour ? t.meridiemHour(e, i) : null != t.isPM ? ((n = t.isPM(i)) && e < 12 && (e += 12), n || 12 !== e || (e = 0), e) : e }(t._locale, t._a[yt], t._meridiem), pe(t), he(t)
                } else ke(t);
            else _e(t)
        }

        function Se(t) {
            var e = t._i,
                c = t._f;
            return t._locale = t._locale || de(t._l), null === e || void 0 === c && "" === e ? f({ nullInput: !0 }) : ("string" == typeof e && (t._i = e = t._locale.preparse(e)), b(e) ? new y(he(e)) : (r(e) ? t._d = e : n(c) ? function(t) {
                var e, i, n, o, s;
                if (0 === t._f.length) return u(t).invalidFormat = !0, void(t._d = new Date(NaN));
                for (o = 0; o < t._f.length; o++) s = 0, e = g({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[o], Te(e), p(e) && (s += u(e).charsLeftOver, s += 10 * u(e).unusedTokens.length, u(e).score = s, (null == n || s < n) && (n = s, i = e));
                d(t, i || e)
            }(t) : c ? Te(t) : function(t) {
                var e = t._i;
                s(e) ? t._d = new Date(i.now()) : r(e) ? t._d = new Date(e.valueOf()) : "string" == typeof e ? function(t) {
                    var e = be.exec(t._i);
                    null === e ? (_e(t), !1 === t._isValid && (delete t._isValid, ke(t), !1 === t._isValid && (delete t._isValid, i.createFromInputFallback(t)))) : t._d = new Date(+e[1])
                }(t) : n(e) ? (t._a = l(e.slice(0), function(t) { return parseInt(t, 10) }), pe(t)) : o(e) ? function(t) {
                    if (!t._d) {
                        var e = E(t._i);
                        t._a = l([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function(t) { return t && parseInt(t, 10) }), pe(t)
                    }
                }(t) : a(e) ? t._d = new Date(e) : i.createFromInputFallback(t)
            }(t), p(t) || (t._d = null), t))
        }

        function Ce(t, e, i, s, a) {
            var r, l = {};
            return !0 !== i && !1 !== i || (s = i, i = void 0), (o(t) && function(t) {
                if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(t).length;
                var e;
                for (e in t)
                    if (t.hasOwnProperty(e)) return !1;
                return !0
            }(t) || n(t) && 0 === t.length) && (t = void 0), l._isAMomentObject = !0, l._useUTC = l._isUTC = a, l._l = i, l._i = t, l._f = e, l._strict = s, (r = new y(he(Se(l))))._nextDay && (r.add(1, "d"), r._nextDay = void 0), r
        }

        function De(t, e, i, n) { return Ce(t, e, i, n, !1) }
        i.createFromInputFallback = k("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(t) { t._d = new Date(t._i + (t._useUTC ? " UTC" : "")) }), i.ISO_8601 = function() {}, i.RFC_2822 = function() {};
        var Me = k("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() { var t = De.apply(null, arguments); return this.isValid() && t.isValid() ? t < this ? this : t : f() }),
            Ie = k("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() { var t = De.apply(null, arguments); return this.isValid() && t.isValid() ? t > this ? this : t : f() });

        function Ae(t, e) { var i, o; if (1 === e.length && n(e[0]) && (e = e[0]), !e.length) return De(); for (i = e[0], o = 1; o < e.length; ++o) e[o].isValid() && !e[o][t](i) || (i = e[o]); return i }
        var Le = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

        function Pe(t) {
            var e = E(t),
                i = e.year || 0,
                n = e.quarter || 0,
                o = e.month || 0,
                s = e.week || 0,
                a = e.day || 0,
                r = e.hour || 0,
                l = e.minute || 0,
                c = e.second || 0,
                d = e.millisecond || 0;
            this._isValid = function(t) {
                for (var e in t)
                    if (-1 === St.call(Le, e) || null != t[e] && isNaN(t[e])) return !1;
                for (var i = !1, n = 0; n < Le.length; ++n)
                    if (t[Le[n]]) {
                        if (i) return !1;
                        parseFloat(t[Le[n]]) !== w(t[Le[n]]) && (i = !0)
                    }
                return !0
            }(e), this._milliseconds = +d + 1e3 * c + 6e4 * l + 1e3 * r * 60 * 60, this._days = +a + 7 * s, this._months = +o + 3 * n + 12 * i, this._data = {}, this._locale = de(), this._bubble()
        }

        function Ee(t) { return t instanceof Pe }

        function Fe(t) { return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t) }

        function Oe(t, e) {
            V(t, 0, 0, function() {
                var t = this.utcOffset(),
                    i = "+";
                return t < 0 && (t = -t, i = "-"), i + N(~~(t / 60), 2) + e + N(~~t % 60, 2)
            })
        }
        Oe("Z", ":"), Oe("ZZ", ""), lt("Z", st), lt("ZZ", st), ut(["Z", "ZZ"], function(t, e, i) { i._useUTC = !0, i._tzm = Ye(st, t) });
        var Ne = /([\+\-]|\d\d)/gi;

        function Ye(t, e) {
            var i = (e || "").match(t);
            if (null === i) return null;
            var n = ((i[i.length - 1] || []) + "").match(Ne) || ["-", 0, 0],
                o = 60 * n[1] + w(n[2]);
            return 0 === o ? 0 : "+" === n[0] ? o : -o
        }

        function qe(t, e) { var n, o; return e._isUTC ? (n = e.clone(), o = (b(t) || r(t) ? t.valueOf() : De(t).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + o), i.updateOffset(n, !1), n) : De(t).local() }

        function je(t) { return 15 * -Math.round(t._d.getTimezoneOffset() / 15) }

        function He() { return !!this.isValid() && (this._isUTC && 0 === this._offset) }
        i.updateOffset = function() {};
        var Ve = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
            Re = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

        function Ue(t, e) {
            var i, n, o, s = t,
                r = null;
            return Ee(t) ? s = { ms: t._milliseconds, d: t._days, M: t._months } : a(t) ? (s = {}, e ? s[e] = t : s.milliseconds = t) : (r = Ve.exec(t)) ? (i = "-" === r[1] ? -1 : 1, s = { y: 0, d: w(r[vt]) * i, h: w(r[yt]) * i, m: w(r[bt]) * i, s: w(r[_t]) * i, ms: w(Fe(1e3 * r[wt])) * i }) : (r = Re.exec(t)) ? (i = "-" === r[1] ? -1 : (r[1], 1), s = { y: We(r[2], i), M: We(r[3], i), w: We(r[4], i), d: We(r[5], i), h: We(r[6], i), m: We(r[7], i), s: We(r[8], i) }) : null == s ? s = {} : "object" == typeof s && ("from" in s || "to" in s) && (o = function(t, e) {
                var i;
                if (!t.isValid() || !e.isValid()) return { milliseconds: 0, months: 0 };
                e = qe(e, t), t.isBefore(e) ? i = ze(t, e) : ((i = ze(e, t)).milliseconds = -i.milliseconds, i.months = -i.months);
                return i
            }(De(s.from), De(s.to)), (s = {}).ms = o.milliseconds, s.M = o.months), n = new Pe(s), Ee(t) && c(t, "_locale") && (n._locale = t._locale), n
        }

        function We(t, e) { var i = t && parseFloat(t.replace(",", ".")); return (isNaN(i) ? 0 : i) * e }

        function ze(t, e) { var i = { milliseconds: 0, months: 0 }; return i.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(i.months, "M").isAfter(e) && --i.months, i.milliseconds = +e - +t.clone().add(i.months, "M"), i }

        function Be(t, e) { return function(i, n) { var o; return null === n || isNaN(+n) || (C(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), o = i, i = n, n = o), Ge(this, Ue(i = "string" == typeof i ? +i : i, n), t), this } }

        function Ge(t, e, n, o) {
            var s = e._milliseconds,
                a = Fe(e._days),
                r = Fe(e._months);
            t.isValid() && (o = null == o || o, r && Ft(t, Mt(t, "Month") + r * n), a && It(t, "Date", Mt(t, "Date") + a * n), s && t._d.setTime(t._d.valueOf() + s * n), o && i.updateOffset(t, a || r))
        }
        Ue.fn = Pe.prototype, Ue.invalid = function() { return Ue(NaN) };
        var Xe = Be(1, "add"),
            Ze = Be(-1, "subtract");

        function Qe(t, e) {
            var i = 12 * (e.year() - t.year()) + (e.month() - t.month()),
                n = t.clone().add(i, "months");
            return -(i + (e - n < 0 ? (e - n) / (n - t.clone().add(i - 1, "months")) : (e - n) / (t.clone().add(i + 1, "months") - n))) || 0
        }

        function Je(t) { var e; return void 0 === t ? this._locale._abbr : (null != (e = de(t)) && (this._locale = e), this) }
        i.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", i.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
        var Ke = k("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) { return void 0 === t ? this.localeData() : this.locale(t) });

        function ti() { return this._locale }

        function ei(t, e) { V(0, [t, t.length], 0, e) }

        function ii(t, e, i, n, o) {
            var s;
            return null == t ? Rt(this, n, o).year : (e > (s = Ut(t, n, o)) && (e = s), function(t, e, i, n, o) {
                var s = Vt(t, e, i, n, o),
                    a = jt(s.year, 0, s.dayOfYear);
                return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this
            }.call(this, t, e, i, n, o))
        }
        V(0, ["gg", 2], 0, function() { return this.weekYear() % 100 }), V(0, ["GG", 2], 0, function() { return this.isoWeekYear() % 100 }), ei("gggg", "weekYear"), ei("ggggg", "weekYear"), ei("GGGG", "isoWeekYear"), ei("GGGGG", "isoWeekYear"), L("weekYear", "gg"), L("isoWeekYear", "GG"), O("weekYear", 1), O("isoWeekYear", 1), lt("G", nt), lt("g", nt), lt("GG", Z, z), lt("gg", Z, z), lt("GGGG", tt, G), lt("gggg", tt, G), lt("GGGGG", et, X), lt("ggggg", et, X), pt(["gggg", "ggggg", "GGGG", "GGGGG"], function(t, e, i, n) { e[n.substr(0, 2)] = w(t) }), pt(["gg", "GG"], function(t, e, n, o) { e[o] = i.parseTwoDigitYear(t) }), V("Q", 0, "Qo", "quarter"), L("quarter", "Q"), O("quarter", 7), lt("Q", W), ut("Q", function(t, e) { e[gt] = 3 * (w(t) - 1) }), V("D", ["DD", 2], "Do", "date"), L("date", "D"), O("date", 9), lt("D", Z), lt("DD", Z, z), lt("Do", function(t, e) { return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient }), ut(["D", "DD"], vt), ut("Do", function(t, e) { e[vt] = w(t.match(Z)[0]) });
        var ni = Dt("Date", !0);
        V("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), L("dayOfYear", "DDD"), O("dayOfYear", 4), lt("DDD", K), lt("DDDD", B), ut(["DDD", "DDDD"], function(t, e, i) { i._dayOfYear = w(t) }), V("m", ["mm", 2], 0, "minute"), L("minute", "m"), O("minute", 14), lt("m", Z), lt("mm", Z, z), ut(["m", "mm"], bt);
        var oi = Dt("Minutes", !1);
        V("s", ["ss", 2], 0, "second"), L("second", "s"), O("second", 15), lt("s", Z), lt("ss", Z, z), ut(["s", "ss"], _t);
        var si, ai = Dt("Seconds", !1);
        for (V("S", 0, 0, function() { return ~~(this.millisecond() / 100) }), V(0, ["SS", 2], 0, function() { return ~~(this.millisecond() / 10) }), V(0, ["SSS", 3], 0, "millisecond"), V(0, ["SSSS", 4], 0, function() { return 10 * this.millisecond() }), V(0, ["SSSSS", 5], 0, function() { return 100 * this.millisecond() }), V(0, ["SSSSSS", 6], 0, function() { return 1e3 * this.millisecond() }), V(0, ["SSSSSSS", 7], 0, function() { return 1e4 * this.millisecond() }), V(0, ["SSSSSSSS", 8], 0, function() { return 1e5 * this.millisecond() }), V(0, ["SSSSSSSSS", 9], 0, function() { return 1e6 * this.millisecond() }), L("millisecond", "ms"), O("millisecond", 16), lt("S", K, W), lt("SS", K, z), lt("SSS", K, B), si = "SSSS"; si.length <= 9; si += "S") lt(si, it);

        function ri(t, e) { e[wt] = w(1e3 * ("0." + t)) }
        for (si = "S"; si.length <= 9; si += "S") ut(si, ri);
        var li = Dt("Milliseconds", !1);
        V("z", 0, 0, "zoneAbbr"), V("zz", 0, 0, "zoneName");
        var ci = y.prototype;

        function di(t) { return t }
        ci.add = Xe, ci.calendar = function(t, e) {
            var n = t || De(),
                o = qe(n, this).startOf("day"),
                s = i.calendarFormat(this, o) || "sameElse",
                a = e && (D(e[s]) ? e[s].call(this, n) : e[s]);
            return this.format(a || this.localeData().calendar(s, this, De(n)))
        }, ci.clone = function() { return new y(this) }, ci.diff = function(t, e, i) {
            var n, o, s;
            if (!this.isValid()) return NaN;
            if (!(n = qe(t, this)).isValid()) return NaN;
            switch (o = 6e4 * (n.utcOffset() - this.utcOffset()), e = P(e)) {
                case "year":
                    s = Qe(this, n) / 12;
                    break;
                case "month":
                    s = Qe(this, n);
                    break;
                case "quarter":
                    s = Qe(this, n) / 3;
                    break;
                case "second":
                    s = (this - n) / 1e3;
                    break;
                case "minute":
                    s = (this - n) / 6e4;
                    break;
                case "hour":
                    s = (this - n) / 36e5;
                    break;
                case "day":
                    s = (this - n - o) / 864e5;
                    break;
                case "week":
                    s = (this - n - o) / 6048e5;
                    break;
                default:
                    s = this - n
            }
            return i ? s : _(s)
        }, ci.endOf = function(t) { return void 0 === (t = P(t)) || "millisecond" === t ? this : ("date" === t && (t = "day"), this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms")) }, ci.format = function(t) { t || (t = this.isUtc() ? i.defaultFormatUtc : i.defaultFormat); var e = R(this, t); return this.localeData().postformat(e) }, ci.from = function(t, e) { return this.isValid() && (b(t) && t.isValid() || De(t).isValid()) ? Ue({ to: this, from: t }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate() }, ci.fromNow = function(t) { return this.from(De(), t) }, ci.to = function(t, e) { return this.isValid() && (b(t) && t.isValid() || De(t).isValid()) ? Ue({ from: this, to: t }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate() }, ci.toNow = function(t) { return this.to(De(), t) }, ci.get = function(t) { return D(this[t = P(t)]) ? this[t]() : this }, ci.invalidAt = function() { return u(this).overflow }, ci.isAfter = function(t, e) { var i = b(t) ? t : De(t); return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = P(s(e) ? "millisecond" : e)) ? this.valueOf() > i.valueOf() : i.valueOf() < this.clone().startOf(e).valueOf()) }, ci.isBefore = function(t, e) { var i = b(t) ? t : De(t); return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = P(s(e) ? "millisecond" : e)) ? this.valueOf() < i.valueOf() : this.clone().endOf(e).valueOf() < i.valueOf()) }, ci.isBetween = function(t, e, i, n) { return ("(" === (n = n || "()")[0] ? this.isAfter(t, i) : !this.isBefore(t, i)) && (")" === n[1] ? this.isBefore(e, i) : !this.isAfter(e, i)) }, ci.isSame = function(t, e) { var i, n = b(t) ? t : De(t); return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = P(e || "millisecond")) ? this.valueOf() === n.valueOf() : (i = n.valueOf(), this.clone().startOf(e).valueOf() <= i && i <= this.clone().endOf(e).valueOf())) }, ci.isSameOrAfter = function(t, e) { return this.isSame(t, e) || this.isAfter(t, e) }, ci.isSameOrBefore = function(t, e) { return this.isSame(t, e) || this.isBefore(t, e) }, ci.isValid = function() { return p(this) }, ci.lang = Ke, ci.locale = Je, ci.localeData = ti, ci.max = Ie, ci.min = Me, ci.parsingFlags = function() { return d({}, u(this)) }, ci.set = function(t, e) {
            if ("object" == typeof t)
                for (var i = function(t) { var e = []; for (var i in t) e.push({ unit: i, priority: F[i] }); return e.sort(function(t, e) { return t.priority - e.priority }), e }(t = E(t)), n = 0; n < i.length; n++) this[i[n].unit](t[i[n].unit]);
            else if (D(this[t = P(t)])) return this[t](e);
            return this
        }, ci.startOf = function(t) {
            switch (t = P(t)) {
                case "year":
                    this.month(0);
                case "quarter":
                case "month":
                    this.date(1);
                case "week":
                case "isoWeek":
                case "day":
                case "date":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
            }
            return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
        }, ci.subtract = Ze, ci.toArray = function() { var t = this; return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()] }, ci.toObject = function() { var t = this; return { years: t.year(), months: t.month(), date: t.date(), hours: t.hours(), minutes: t.minutes(), seconds: t.seconds(), milliseconds: t.milliseconds() } }, ci.toDate = function() { return new Date(this.valueOf()) }, ci.toISOString = function(t) {
            if (!this.isValid()) return null;
            var e = !0 !== t,
                i = e ? this.clone().utc() : this;
            return i.year() < 0 || i.year() > 9999 ? R(i, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : D(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", R(i, "Z")) : R(i, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
        }, ci.inspect = function() {
            if (!this.isValid()) return "moment.invalid(/!* " + this._i + " *!/)";
            var t = "moment",
                e = "";
            this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", e = "Z");
            var i = "[" + t + '("]',
                n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                o = e + '[")]';
            return this.format(i + n + "-MM-DD[T]HH:mm:ss.SSS" + o)
        }, ci.toJSON = function() { return this.isValid() ? this.toISOString() : null }, ci.toString = function() { return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ") }, ci.unix = function() { return Math.floor(this.valueOf() / 1e3) }, ci.valueOf = function() { return this._d.valueOf() - 6e4 * (this._offset || 0) }, ci.creationData = function() { return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict } }, ci.year = Ct, ci.isLeapYear = function() { return Tt(this.year()) }, ci.weekYear = function(t) { return ii.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy) }, ci.isoWeekYear = function(t) { return ii.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4) }, ci.quarter = ci.quarters = function(t) { return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3) }, ci.month = Ot, ci.daysInMonth = function() { return At(this.year(), this.month()) }, ci.week = ci.weeks = function(t) { var e = this.localeData().week(this); return null == t ? e : this.add(7 * (t - e), "d") }, ci.isoWeek = ci.isoWeeks = function(t) { var e = Rt(this, 1, 4).week; return null == t ? e : this.add(7 * (t - e), "d") }, ci.weeksInYear = function() { var t = this.localeData()._week; return Ut(this.year(), t.dow, t.doy) }, ci.isoWeeksInYear = function() { return Ut(this.year(), 1, 4) }, ci.date = ni, ci.day = ci.days = function(t) { if (!this.isValid()) return null != t ? this : NaN; var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay(); return null != t ? (t = function(t, e) { return "string" != typeof t ? t : isNaN(t) ? "number" == typeof(t = e.weekdaysParse(t)) ? t : null : parseInt(t, 10) }(t, this.localeData()), this.add(t - e, "d")) : e }, ci.weekday = function(t) { if (!this.isValid()) return null != t ? this : NaN; var e = (this.day() + 7 - this.localeData()._week.dow) % 7; return null == t ? e : this.add(t - e, "d") }, ci.isoWeekday = function(t) { if (!this.isValid()) return null != t ? this : NaN; if (null != t) { var e = function(t, e) { return "string" == typeof t ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t }(t, this.localeData()); return this.day(this.day() % 7 ? e : e - 7) } return this.day() || 7 }, ci.dayOfYear = function(t) { var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1; return null == t ? e : this.add(t - e, "d") }, ci.hour = ci.hours = ie, ci.minute = ci.minutes = oi, ci.second = ci.seconds = ai, ci.millisecond = ci.milliseconds = li, ci.utcOffset = function(t, e, n) { var o, s = this._offset || 0; if (!this.isValid()) return null != t ? this : NaN; if (null != t) { if ("string" == typeof t) { if (null === (t = Ye(st, t))) return this } else Math.abs(t) < 16 && !n && (t *= 60); return !this._isUTC && e && (o = je(this)), this._offset = t, this._isUTC = !0, null != o && this.add(o, "m"), s !== t && (!e || this._changeInProgress ? Ge(this, Ue(t - s, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, i.updateOffset(this, !0), this._changeInProgress = null)), this } return this._isUTC ? s : je(this) }, ci.utc = function(t) { return this.utcOffset(0, t) }, ci.local = function(t) { return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(je(this), "m")), this }, ci.parseZone = function() {
            if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
            else if ("string" == typeof this._i) {
                var t = Ye(ot, this._i);
                null != t ? this.utcOffset(t) : this.utcOffset(0, !0)
            }
            return this
        }, ci.hasAlignedHourOffset = function(t) { return !!this.isValid() && (t = t ? De(t).utcOffset() : 0, (this.utcOffset() - t) % 60 == 0) }, ci.isDST = function() { return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset() }, ci.isLocal = function() { return !!this.isValid() && !this._isUTC }, ci.isUtcOffset = function() { return !!this.isValid() && this._isUTC }, ci.isUtc = He, ci.isUTC = He, ci.zoneAbbr = function() { return this._isUTC ? "UTC" : "" }, ci.zoneName = function() { return this._isUTC ? "Coordinated Universal Time" : "" }, ci.dates = k("dates accessor is deprecated. Use date instead.", ni), ci.months = k("months accessor is deprecated. Use month instead", Ot), ci.years = k("years accessor is deprecated. Use year instead", Ct), ci.zone = k("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(t, e) { return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset() }), ci.isDSTShifted = k("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
            if (!s(this._isDSTShifted)) return this._isDSTShifted;
            var t = {};
            if (g(t, this), (t = Se(t))._a) {
                var e = t._isUTC ? h(t._a) : De(t._a);
                this._isDSTShifted = this.isValid() && x(t._a, e.toArray()) > 0
            } else this._isDSTShifted = !1;
            return this._isDSTShifted
        });
        var hi = I.prototype;

        function ui(t, e, i, n) {
            var o = de(),
                s = h().set(n, e);
            return o[i](s, t)
        }

        function pi(t, e, i) { if (a(t) && (e = t, t = void 0), t = t || "", null != e) return ui(t, e, i, "month"); var n, o = []; for (n = 0; n < 12; n++) o[n] = ui(t, n, i, "month"); return o }

        function fi(t, e, i, n) {
            "boolean" == typeof t ? (a(e) && (i = e, e = void 0), e = e || "") : (i = e = t, t = !1, a(e) && (i = e, e = void 0), e = e || "");
            var o, s = de(),
                r = t ? s._week.dow : 0;
            if (null != i) return ui(e, (i + r) % 7, n, "day");
            var l = [];
            for (o = 0; o < 7; o++) l[o] = ui(e, (o + r) % 7, n, "day");
            return l
        }
        hi.calendar = function(t, e, i) { var n = this._calendar[t] || this._calendar.sameElse; return D(n) ? n.call(e, i) : n }, hi.longDateFormat = function(t) {
            var e = this._longDateFormat[t],
                i = this._longDateFormat[t.toUpperCase()];
            return e || !i ? e : (this._longDateFormat[t] = i.replace(/MMMM|MM|DD|dddd/g, function(t) { return t.slice(1) }), this._longDateFormat[t])
        }, hi.invalidDate = function() { return this._invalidDate }, hi.ordinal = function(t) { return this._ordinal.replace("%d", t) }, hi.preparse = di, hi.postformat = di, hi.relativeTime = function(t, e, i, n) { var o = this._relativeTime[i]; return D(o) ? o(t, e, i, n) : o.replace(/%d/i, t) }, hi.pastFuture = function(t, e) { var i = this._relativeTime[t > 0 ? "future" : "past"]; return D(i) ? i(e) : i.replace(/%s/i, e) }, hi.set = function(t) {
            var e, i;
            for (i in t) D(e = t[i]) ? this[i] = e : this["_" + i] = e;
            this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
        }, hi.months = function(t, e) { return t ? n(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || Lt).test(e) ? "format" : "standalone"][t.month()] : n(this._months) ? this._months : this._months.standalone }, hi.monthsShort = function(t, e) { return t ? n(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[Lt.test(e) ? "format" : "standalone"][t.month()] : n(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone }, hi.monthsParse = function(t, e, i) {
            var n, o, s;
            if (this._monthsParseExact) return function(t, e, i) {
                var n, o, s, a = t.toLocaleLowerCase();
                if (!this._monthsParse)
                    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n) s = h([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(s, "").toLocaleLowerCase(), this._longMonthsParse[n] = this.months(s, "").toLocaleLowerCase();
                return i ? "MMM" === e ? -1 !== (o = St.call(this._shortMonthsParse, a)) ? o : null : -1 !== (o = St.call(this._longMonthsParse, a)) ? o : null : "MMM" === e ? -1 !== (o = St.call(this._shortMonthsParse, a)) ? o : -1 !== (o = St.call(this._longMonthsParse, a)) ? o : null : -1 !== (o = St.call(this._longMonthsParse, a)) ? o : -1 !== (o = St.call(this._shortMonthsParse, a)) ? o : null
            }.call(this, t, e, i);
            for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) { if (o = h([2e3, n]), i && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(o, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(o, "").replace(".", "") + "$", "i")), i || this._monthsParse[n] || (s = "^" + this.months(o, "") + "|^" + this.monthsShort(o, ""), this._monthsParse[n] = new RegExp(s.replace(".", ""), "i")), i && "MMMM" === e && this._longMonthsParse[n].test(t)) return n; if (i && "MMM" === e && this._shortMonthsParse[n].test(t)) return n; if (!i && this._monthsParse[n].test(t)) return n }
        }, hi.monthsRegex = function(t) { return this._monthsParseExact ? (c(this, "_monthsRegex") || qt.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (c(this, "_monthsRegex") || (this._monthsRegex = Yt), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex) }, hi.monthsShortRegex = function(t) { return this._monthsParseExact ? (c(this, "_monthsRegex") || qt.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (c(this, "_monthsShortRegex") || (this._monthsShortRegex = Nt), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex) }, hi.week = function(t) { return Rt(t, this._week.dow, this._week.doy).week }, hi.firstDayOfYear = function() { return this._week.doy }, hi.firstDayOfWeek = function() { return this._week.dow }, hi.weekdays = function(t, e) { return t ? n(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(e) ? "format" : "standalone"][t.day()] : n(this._weekdays) ? this._weekdays : this._weekdays.standalone }, hi.weekdaysMin = function(t) { return t ? this._weekdaysMin[t.day()] : this._weekdaysMin }, hi.weekdaysShort = function(t) { return t ? this._weekdaysShort[t.day()] : this._weekdaysShort }, hi.weekdaysParse = function(t, e, i) {
            var n, o, s;
            if (this._weekdaysParseExact) return function(t, e, i) {
                var n, o, s, a = t.toLocaleLowerCase();
                if (!this._weekdaysParse)
                    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n) s = h([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(s, "").toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(s, "").toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(s, "").toLocaleLowerCase();
                return i ? "dddd" === e ? -1 !== (o = St.call(this._weekdaysParse, a)) ? o : null : "ddd" === e ? -1 !== (o = St.call(this._shortWeekdaysParse, a)) ? o : null : -1 !== (o = St.call(this._minWeekdaysParse, a)) ? o : null : "dddd" === e ? -1 !== (o = St.call(this._weekdaysParse, a)) ? o : -1 !== (o = St.call(this._shortWeekdaysParse, a)) ? o : -1 !== (o = St.call(this._minWeekdaysParse, a)) ? o : null : "ddd" === e ? -1 !== (o = St.call(this._shortWeekdaysParse, a)) ? o : -1 !== (o = St.call(this._weekdaysParse, a)) ? o : -1 !== (o = St.call(this._minWeekdaysParse, a)) ? o : null : -1 !== (o = St.call(this._minWeekdaysParse, a)) ? o : -1 !== (o = St.call(this._weekdaysParse, a)) ? o : -1 !== (o = St.call(this._shortWeekdaysParse, a)) ? o : null
            }.call(this, t, e, i);
            for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) { if (o = h([2e3, 1]).day(n), i && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp("^" + this.weekdays(o, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[n] = new RegExp("^" + this.weekdaysShort(o, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(o, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[n] || (s = "^" + this.weekdays(o, "") + "|^" + this.weekdaysShort(o, "") + "|^" + this.weekdaysMin(o, ""), this._weekdaysParse[n] = new RegExp(s.replace(".", ""), "i")), i && "dddd" === e && this._fullWeekdaysParse[n].test(t)) return n; if (i && "ddd" === e && this._shortWeekdaysParse[n].test(t)) return n; if (i && "dd" === e && this._minWeekdaysParse[n].test(t)) return n; if (!i && this._weekdaysParse[n].test(t)) return n }
        }, hi.weekdaysRegex = function(t) { return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Qt.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (c(this, "_weekdaysRegex") || (this._weekdaysRegex = Gt), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex) }, hi.weekdaysShortRegex = function(t) { return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Qt.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (c(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Xt), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) }, hi.weekdaysMinRegex = function(t) { return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Qt.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (c(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Zt), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) }, hi.isPM = function(t) { return "p" === (t + "").toLowerCase().charAt(0) }, hi.meridiem = function(t, e, i) { return t > 11 ? i ? "pm" : "PM" : i ? "am" : "AM" }, le("en", { dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function(t) { var e = t % 10; return t + (1 === w(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th") } }), i.lang = k("moment.lang is deprecated. Use moment.locale instead.", le), i.langData = k("moment.langData is deprecated. Use moment.localeData instead.", de);
        var mi = Math.abs;

        function gi(t, e, i, n) { var o = Ue(e, i); return t._milliseconds += n * o._milliseconds, t._days += n * o._days, t._months += n * o._months, t._bubble() }

        function vi(t) { return t < 0 ? Math.floor(t) : Math.ceil(t) }

        function yi(t) { return 4800 * t / 146097 }

        function bi(t) { return 146097 * t / 4800 }

        function _i(t) { return function() { return this.as(t) } }
        var wi = _i("ms"),
            xi = _i("s"),
            $i = _i("m"),
            ki = _i("h"),
            Ti = _i("d"),
            Si = _i("w"),
            Ci = _i("M"),
            Di = _i("y");

        function Mi(t) { return function() { return this.isValid() ? this._data[t] : NaN } }
        var Ii = Mi("milliseconds"),
            Ai = Mi("seconds"),
            Li = Mi("minutes"),
            Pi = Mi("hours"),
            Ei = Mi("days"),
            Fi = Mi("months"),
            Oi = Mi("years");
        var Ni = Math.round,
            Yi = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 };
        var qi = Math.abs;

        function ji(t) { return (t > 0) - (t < 0) || +t }

        function Hi() {
            if (!this.isValid()) return this.localeData().invalidDate();
            var t, e, i = qi(this._milliseconds) / 1e3,
                n = qi(this._days),
                o = qi(this._months);
            t = _(i / 60), e = _(t / 60), i %= 60, t %= 60;
            var s = _(o / 12),
                a = o %= 12,
                r = n,
                l = e,
                c = t,
                d = i ? i.toFixed(3).replace(/\.?0+$/, "") : "",
                h = this.asSeconds();
            if (!h) return "P0D";
            var u = h < 0 ? "-" : "",
                p = ji(this._months) !== ji(h) ? "-" : "",
                f = ji(this._days) !== ji(h) ? "-" : "",
                m = ji(this._milliseconds) !== ji(h) ? "-" : "";
            return u + "P" + (s ? p + s + "Y" : "") + (a ? p + a + "M" : "") + (r ? f + r + "D" : "") + (l || c || d ? "T" : "") + (l ? m + l + "H" : "") + (c ? m + c + "M" : "") + (d ? m + d + "S" : "")
        }
        var Vi = Pe.prototype;
        return Vi.isValid = function() { return this._isValid }, Vi.abs = function() { var t = this._data; return this._milliseconds = mi(this._milliseconds), this._days = mi(this._days), this._months = mi(this._months), t.milliseconds = mi(t.milliseconds), t.seconds = mi(t.seconds), t.minutes = mi(t.minutes), t.hours = mi(t.hours), t.months = mi(t.months), t.years = mi(t.years), this }, Vi.add = function(t, e) { return gi(this, t, e, 1) }, Vi.subtract = function(t, e) { return gi(this, t, e, -1) }, Vi.as = function(t) {
            if (!this.isValid()) return NaN;
            var e, i, n = this._milliseconds;
            if ("month" === (t = P(t)) || "year" === t) return e = this._days + n / 864e5, i = this._months + yi(e), "month" === t ? i : i / 12;
            switch (e = this._days + Math.round(bi(this._months)), t) {
                case "week":
                    return e / 7 + n / 6048e5;
                case "day":
                    return e + n / 864e5;
                case "hour":
                    return 24 * e + n / 36e5;
                case "minute":
                    return 1440 * e + n / 6e4;
                case "second":
                    return 86400 * e + n / 1e3;
                case "millisecond":
                    return Math.floor(864e5 * e) + n;
                default:
                    throw new Error("Unknown unit " + t)
            }
        }, Vi.asMilliseconds = wi, Vi.asSeconds = xi, Vi.asMinutes = $i, Vi.asHours = ki, Vi.asDays = Ti, Vi.asWeeks = Si, Vi.asMonths = Ci, Vi.asYears = Di, Vi.valueOf = function() { return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * w(this._months / 12) : NaN }, Vi._bubble = function() {
            var t, e, i, n, o, s = this._milliseconds,
                a = this._days,
                r = this._months,
                l = this._data;
            return s >= 0 && a >= 0 && r >= 0 || s <= 0 && a <= 0 && r <= 0 || (s += 864e5 * vi(bi(r) + a), a = 0, r = 0), l.milliseconds = s % 1e3, t = _(s / 1e3), l.seconds = t % 60, e = _(t / 60), l.minutes = e % 60, i = _(e / 60), l.hours = i % 24, a += _(i / 24), r += o = _(yi(a)), a -= vi(bi(o)), n = _(r / 12), r %= 12, l.days = a, l.months = r, l.years = n, this
        }, Vi.clone = function() { return Ue(this) }, Vi.get = function(t) { return t = P(t), this.isValid() ? this[t + "s"]() : NaN }, Vi.milliseconds = Ii, Vi.seconds = Ai, Vi.minutes = Li, Vi.hours = Pi, Vi.days = Ei, Vi.weeks = function() { return _(this.days() / 7) }, Vi.months = Fi, Vi.years = Oi, Vi.humanize = function(t) {
            if (!this.isValid()) return this.localeData().invalidDate();
            var e = this.localeData(),
                i = function(t, e, i) {
                    var n = Ue(t).abs(),
                        o = Ni(n.as("s")),
                        s = Ni(n.as("m")),
                        a = Ni(n.as("h")),
                        r = Ni(n.as("d")),
                        l = Ni(n.as("M")),
                        c = Ni(n.as("y")),
                        d = o <= Yi.ss && ["s", o] || o < Yi.s && ["ss", o] || s <= 1 && ["m"] || s < Yi.m && ["mm", s] || a <= 1 && ["h"] || a < Yi.h && ["hh", a] || r <= 1 && ["d"] || r < Yi.d && ["dd", r] || l <= 1 && ["M"] || l < Yi.M && ["MM", l] || c <= 1 && ["y"] || ["yy", c];
                    return d[2] = e, d[3] = +t > 0, d[4] = i,
                        function(t, e, i, n, o) { return o.relativeTime(e || 1, !!i, t, n) }.apply(null, d)
                }(this, !t, e);
            return t && (i = e.pastFuture(+this, i)), e.postformat(i)
        }, Vi.toISOString = Hi, Vi.toString = Hi, Vi.toJSON = Hi, Vi.locale = Je, Vi.localeData = ti, Vi.toIsoString = k("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Hi), Vi.lang = Ke, V("X", 0, 0, "unix"), V("x", 0, 0, "valueOf"), lt("x", nt), lt("X", /[+-]?\d+(\.\d{1,3})?/), ut("X", function(t, e, i) { i._d = new Date(1e3 * parseFloat(t, 10)) }), ut("x", function(t, e, i) { i._d = new Date(w(t)) }), i.version = "2.22.2", t = De, i.fn = ci, i.min = function() { return Ae("isBefore", [].slice.call(arguments, 0)) }, i.max = function() { return Ae("isAfter", [].slice.call(arguments, 0)) }, i.now = function() { return Date.now ? Date.now() : +new Date }, i.utc = h, i.unix = function(t) { return De(1e3 * t) }, i.months = function(t, e) { return pi(t, e, "months") }, i.isDate = r, i.locale = le, i.invalid = f, i.duration = Ue, i.isMoment = b, i.weekdays = function(t, e, i) { return fi(t, e, i, "weekdays") }, i.parseZone = function() { return De.apply(null, arguments).parseZone() }, i.localeData = de, i.isDuration = Ee, i.monthsShort = function(t, e) { return pi(t, e, "monthsShort") }, i.weekdaysMin = function(t, e, i) { return fi(t, e, i, "weekdaysMin") }, i.defineLocale = ce, i.updateLocale = function(t, e) {
            if (null != e) {
                var i, n, o = ne;
                null != (n = re(t)) && (o = n._config), (i = new I(e = M(o, e))).parentLocale = oe[t], oe[t] = i, le(t)
            } else null != oe[t] && (null != oe[t].parentLocale ? oe[t] = oe[t].parentLocale : null != oe[t] && delete oe[t]);
            return oe[t]
        }, i.locales = function() { return T(oe) }, i.weekdaysShort = function(t, e, i) { return fi(t, e, i, "weekdaysShort") }, i.normalizeUnits = P, i.relativeTimeRounding = function(t) { return void 0 === t ? Ni : "function" == typeof t && (Ni = t, !0) }, i.relativeTimeThreshold = function(t, e) { return void 0 !== Yi[t] && (void 0 === e ? Yi[t] : (Yi[t] = e, "s" === t && (Yi.ss = e - 1), !0)) }, i.calendarFormat = function(t, e) { var i = t.diff(e, "days", !0); return i < -6 ? "sameElse" : i < -1 ? "lastWeek" : i < 0 ? "lastDay" : i < 1 ? "sameDay" : i < 2 ? "nextDay" : i < 7 ? "nextWeek" : "sameElse" }, i.prototype = ci, i.HTML5_FMT = { DATETIME_LOCAL: "YYYY-MM-DDTHH:mm", DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss", DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS", DATE: "YYYY-MM-DD", TIME: "HH:mm", TIME_SECONDS: "HH:mm:ss", TIME_MS: "HH:mm:ss.SSS", WEEK: "YYYY-[W]WW", MONTH: "YYYY-MM" }, i.defineLocale("en-au", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(t) { var e = t % 10; return t + (1 == ~~(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th") }, week: { dow: 1, doy: 4 } }), i.defineLocale("en-ca", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "YYYY-MM-DD", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(t) { var e = t % 10; return t + (1 == ~~(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th") } }), i.defineLocale("en-gb", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(t) { var e = t % 10; return t + (1 == ~~(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th") }, week: { dow: 1, doy: 4 } }), i.defineLocale("en-ie", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(t) { var e = t % 10; return t + (1 == ~~(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th") }, week: { dow: 1, doy: 4 } }), i.defineLocale("en-il", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(t) { var e = t % 10; return t + (1 == ~~(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th") } }), i.defineLocale("en-nz", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(t) { var e = t % 10; return t + (1 == ~~(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th") }, week: { dow: 1, doy: 4 } }), i.defineLocale("vi", { months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"), monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"), monthsParseExact: !0, weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"), weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"), weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"), weekdaysParseExact: !0, meridiemParse: /sa|ch/i, isPM: function(t) { return /^ch$/i.test(t) }, meridiem: function(t, e, i) { return t < 12 ? i ? "sa" : "SA" : i ? "ch" : "CH" }, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [năm] YYYY", LLL: "D MMMM [năm] YYYY HH:mm", LLLL: "dddd, D MMMM [năm] YYYY HH:mm", l: "DD/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" }, calendar: { sameDay: "[Hôm nay lúc] LT", nextDay: "[Ngày mai lúc] LT", nextWeek: "dddd [tuần tới lúc] LT", lastDay: "[Hôm qua lúc] LT", lastWeek: "dddd [tuần rồi lúc] LT", sameElse: "L" }, relativeTime: { future: "%s tới", past: "%s trước", s: "vài giây", ss: "%d giây", m: "một phút", mm: "%d phút", h: "một giờ", hh: "%d giờ", d: "một ngày", dd: "%d ngày", M: "một tháng", MM: "%d tháng", y: "một năm", yy: "%d năm" }, dayOfMonthOrdinalParse: /\d{1,2}/, ordinal: function(t) { return t }, week: { dow: 1, doy: 4 } }), i.locale("vi"), i
    }), function(t) { "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery || Zepto) }(function(t) {
        var e = function(e, i, n) {
            var o = {
                invalid: [],
                getCaret: function() {
                    try {
                        var t, i = 0,
                            n = e.get(0),
                            s = document.selection,
                            a = n.selectionStart;
                        return s && -1 === navigator.appVersion.indexOf("MSIE 10") ? ((t = s.createRange()).moveStart("character", -o.val().length), i = t.text.length) : (a || "0" === a) && (i = a), i
                    } catch (t) {}
                },
                setCaret: function(t) { try { var i; if (e.is(":focus"))(i = e.get(0).createTextRange()).collapse(!0), i.moveEnd("character", t), i.moveStart("character", t), i.select() } catch (t) {} },
                events: function() { e.on("keydown.mask", function(t) { e.data("mask-keycode", t.keyCode || t.which) }).on(t.jMaskGlobals.useInput ? "input.mask" : "keyup.mask", o.behaviour).on("paste.mask drop.mask", function() { setTimeout(function() { e.keydown().keyup() }, 100) }).on("change.mask", function() { e.data("changed", !0) }).on("blur.mask", function() { r === o.val() || e.data("changed") || e.trigger("change"), e.data("changed", !1) }).on("blur.mask", function() { r = o.val() }).on("focus.mask", function(e) {!0 === n.selectOnFocus && t(e.target).select() }).on("focusout.mask", function() { n.clearIfNotMatch && !s.test(o.val()) && o.val("") }) },
                getRegexMask: function() { for (var t, e, n, o, s, r, l = [], c = 0; c < i.length; c++)(t = a.translation[i.charAt(c)]) ? (e = t.pattern.toString().replace(/.{1}$|^.{1}/g, ""), n = t.optional, (o = t.recursive) ? (l.push(i.charAt(c)), s = { digit: i.charAt(c), pattern: e }) : l.push(n || o ? e + "?" : e)) : l.push(i.charAt(c).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")); return r = l.join(""), s && (r = r.replace(new RegExp("(" + s.digit + "(.*" + s.digit + ")?)"), "($1)?").replace(new RegExp(s.digit, "g"), s.pattern)), new RegExp(r) },
                destroyEvents: function() { e.off(["input", "keydown", "keyup", "paste", "drop", "blur", "focusout", ""].join(".mask ")) },
                val: function(t) { var i, n = e.is("input") ? "val" : "text"; return arguments.length > 0 ? (e[n]() !== t && e[n](t), i = e) : i = e[n](), i },
                getMCharsBeforeCount: function(t, e) { for (var n = 0, o = 0, s = i.length; o < s && o < t; o++) a.translation[i.charAt(o)] || (t = e ? t + 1 : t, n++); return n },
                caretPos: function(t, e, n, s) { return a.translation[i.charAt(Math.min(t - 1, i.length - 1))] ? Math.min(t + n - e - s, n) : o.caretPos(t + 1, e, n, s) },
                behaviour: function(i) {
                    i = i || window.event, o.invalid = [];
                    var n = e.data("mask-keycode");
                    if (-1 === t.inArray(n, a.byPassKeys)) {
                        var s = o.getCaret(),
                            r = o.val().length,
                            l = o.getMasked(),
                            c = l.length,
                            d = o.getMCharsBeforeCount(c - 1) - o.getMCharsBeforeCount(r - 1),
                            h = s < r;
                        return o.val(l), h && (8 !== n && 46 !== n && (s = o.caretPos(s, r, c, d)), o.setCaret(s)), o.callbacks(i)
                    }
                },
                getMasked: function(t) {
                    var e, s, r = [],
                        l = o.val(),
                        c = 0,
                        d = i.length,
                        h = 0,
                        u = l.length,
                        p = 1,
                        f = "push",
                        m = -1;
                    for (n.reverse ? (f = "unshift", p = -1, e = 0, c = d - 1, h = u - 1, s = function() { return c > -1 && h > -1 }) : (e = d - 1, s = function() { return c < d && h < u }); s();) {
                        var g = i.charAt(c),
                            v = l.charAt(h),
                            y = a.translation[g];
                        y ? (v.match(y.pattern) ? (r[f](v), y.recursive && (-1 === m ? m = c : c === e && (c = m - p), e === m && (c -= p)), c += p) : y.optional ? (c += p, h -= p) : y.fallback ? (r[f](y.fallback), c += p, h -= p) : o.invalid.push({ p: h, v: v, e: y.pattern }), h += p) : (t || r[f](g), v === g && (h += p), c += p)
                    }
                    var b = i.charAt(e);
                    return d !== u + 1 || a.translation[b] || r.push(b), r.join("")
                },
                callbacks: function(t) {
                    var s = o.val(),
                        a = s !== r,
                        l = [s, t, e, n],
                        c = function(t, e, i) { "function" == typeof n[t] && e && n[t].apply(this, i) };
                    c("onChange", !0 === a, l), c("onKeyPress", !0 === a, l), c("onComplete", s.length === i.length, l), c("onInvalid", o.invalid.length > 0, [s, t, e, o.invalid, n])
                }
            };
            e = t(e);
            var s, a = this,
                r = o.val();
            i = "function" == typeof i ? i(o.val(), void 0, e, n) : i, a.mask = i, a.options = n, a.remove = function() { var t = o.getCaret(); return o.destroyEvents(), o.val(a.getCleanVal()), o.setCaret(t - o.getMCharsBeforeCount(t)), e }, a.getCleanVal = function() { return o.getMasked(!0) }, a.init = function(i) {
                if (i = i || !1, n = n || {}, a.clearIfNotMatch = t.jMaskGlobals.clearIfNotMatch, a.byPassKeys = t.jMaskGlobals.byPassKeys, a.translation = t.extend({}, t.jMaskGlobals.translation, n.translation), a = t.extend(!0, {}, a, n), s = o.getRegexMask(), !1 === i) {
                    n.placeholder && e.attr("placeholder", n.placeholder), e.data("mask") && e.attr("autocomplete", "off"), o.destroyEvents(), o.events();
                    var r = o.getCaret();
                    o.val(o.getMasked()), o.setCaret(r + o.getMCharsBeforeCount(r, !0))
                } else o.events(), o.val(o.getMasked())
            }, a.init(!e.is("input"))
        };
        t.maskWatchers = {};
        var i = function() {
                var i = t(this),
                    o = {},
                    s = i.attr("data-mask");
                if (i.attr("data-mask-reverse") && (o.reverse = !0), i.attr("data-mask-clearifnotmatch") && (o.clearIfNotMatch = !0), "true" === i.attr("data-mask-selectonfocus") && (o.selectOnFocus = !0), n(i, s, o)) return i.data("mask", new e(this, s, o))
            },
            n = function(e, i, n) {
                n = n || {};
                var o = t(e).data("mask"),
                    s = JSON.stringify,
                    a = t(e).val() || t(e).text();
                try { return "function" == typeof i && (i = i(a)), "object" != typeof o || s(o.options) !== s(n) || o.mask !== i } catch (t) {}
            };
        t.fn.mask = function(i, o) {
            o = o || {};
            var s = this.selector,
                a = t.jMaskGlobals,
                r = a.watchInterval,
                l = o.watchInputs || a.watchInputs,
                c = function() { if (n(this, i, o)) return t(this).data("mask", new e(this, i, o)) };
            return t(this).each(c), s && "" !== s && l && (clearInterval(t.maskWatchers[s]), t.maskWatchers[s] = setInterval(function() { t(document).find(s).each(c) }, r)), this
        }, t.fn.unmask = function() {
            return clearInterval(t.maskWatchers[this.selector]), delete t.maskWatchers[this.selector], this.each(function() {
                var e = t(this).data("mask");
                e && e.remove().removeData("mask")
            })
        }, t.fn.cleanVal = function() { return this.data("mask").getCleanVal() }, t.applyDataMask = function(e) {
            ((e = e || t.jMaskGlobals.maskElements) instanceof t ? e : t(e)).filter(t.jMaskGlobals.dataMaskAttr).each(i)
        };
        var o, s, a, r = { maskElements: "input,td,span,div", dataMaskAttr: "*[data-mask]", dataMask: !0, watchInterval: 300, watchInputs: !0, useInput: (o = "input", a = document.createElement("div"), (s = (o = "on" + o) in a) || (a.setAttribute(o, "return;"), s = "function" == typeof a[o]), a = null, s), watchDataMask: !1, byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91], translation: { 0: { pattern: /\d/ }, 9: { pattern: /\d/, optional: !0 }, "#": { pattern: /\d/, recursive: !0 }, A: { pattern: /[a-zA-Z0-9]/ }, S: { pattern: /[a-zA-Z]/ } } };
        t.jMaskGlobals = t.jMaskGlobals || {}, (r = t.jMaskGlobals = t.extend(!0, {}, r, t.jMaskGlobals)).dataMask && t.applyDataMask(), setInterval(function() { t.jMaskGlobals.watchDataMask && t.applyDataMask() }, r.watchInterval)
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
if (function(t) { "use strict"; var e = jQuery.fn.jquery.split(" ")[0].split("."); if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher") }(), function(t) {
        "use strict";
        t.fn.emulateTransitionEnd = function(e) {
            var i = !1,
                n = this;
            t(this).one("bsTransitionEnd", function() { i = !0 });
            return setTimeout(function() { i || t(n).trigger(t.support.transition.end) }, e), this
        }, t(function() {
            t.support.transition = function() {
                var t = document.createElement("bootstrap"),
                    e = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };
                for (var i in e)
                    if (void 0 !== t.style[i]) return { end: e[i] };
                return !1
            }(), t.support.transition && (t.event.special.bsTransitionEnd = { bindType: t.support.transition.end, delegateType: t.support.transition.end, handle: function(e) { return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0 } })
        })
    }(jQuery), function(t) {
        "use strict";
        var e = '[data-dismiss="alert"]',
            i = function(i) { t(i).on("click", e, this.close) };
        i.VERSION = "3.3.4", i.TRANSITION_DURATION = 150, i.prototype.close = function(e) {
            function n() { a.detach().trigger("closed.bs.alert").remove() }
            var o = t(this),
                s = o.attr("data-target");
            s || (s = (s = o.attr("href")) && s.replace(/.*(?=#[^\s]*$)/, ""));
            var a = t(s);
            e && e.preventDefault(), a.length || (a = o.closest(".alert")), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
        };
        var n = t.fn.alert;
        t.fn.alert = function(e) {
            return this.each(function() {
                var n = t(this),
                    o = n.data("bs.alert");
                o || n.data("bs.alert", o = new i(this)), "string" == typeof e && o[e].call(n)
            })
        }, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() { return t.fn.alert = n, this }, t(document).on("click.bs.alert.data-api", e, i.prototype.close)
    }(jQuery), function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var n = t(this),
                    o = n.data("bs.button"),
                    s = "object" == typeof e && e;
                o || n.data("bs.button", o = new i(this, s)), "toggle" == e ? o.toggle() : e && o.setState(e)
            })
        }
        var i = function(e, n) { this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.isLoading = !1 };
        i.VERSION = "3.3.4", i.DEFAULTS = { loadingText: "loading..." }, i.prototype.setState = function(e) {
            var i = "disabled",
                n = this.$element,
                o = n.is("input") ? "val" : "html",
                s = n.data();
            e += "Text", null == s.resetText && n.data("resetText", n[o]()), setTimeout(t.proxy(function() { n[o](null == s[e] ? this.options[e] : s[e]), "loadingText" == e ? (this.isLoading = !0, n.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i)) }, this), 0)
        }, i.prototype.toggle = function() {
            var t = !0,
                e = this.$element.closest('[data-toggle="buttons"]');
            if (e.length) { var i = this.$element.find("input"); "radio" == i.prop("type") && (i.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && i.prop("checked", !this.$element.hasClass("active")).trigger("change") } else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
            t && this.$element.toggleClass("active")
        };
        var n = t.fn.button;
        t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() { return t.fn.button = n, this }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
            var n = t(i.target);
            n.hasClass("btn") || (n = n.closest(".btn")), e.call(n, "toggle"), i.preventDefault()
        }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) { t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type)) })
    }(jQuery), function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var n = t(this),
                    o = n.data("bs.carousel"),
                    s = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e),
                    a = "string" == typeof e ? e : s.slide;
                o || n.data("bs.carousel", o = new i(this, s)), "number" == typeof e ? o.to(e) : a ? o[a]() : s.interval && o.pause().cycle()
            })
        }
        var i = function(e, i) { this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this)) };
        i.VERSION = "3.3.4", i.TRANSITION_DURATION = 600, i.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, i.prototype.keydown = function(t) {
            if (!/input|textarea/i.test(t.target.tagName)) {
                switch (t.which) {
                    case 37:
                        this.prev();
                        break;
                    case 39:
                        this.next();
                        break;
                    default:
                        return
                }
                t.preventDefault()
            }
        }, i.prototype.cycle = function(e) { return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this }, i.prototype.getItemIndex = function(t) { return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active) }, i.prototype.getItemForDirection = function(t, e) { var i = this.getItemIndex(e); if (("prev" == t && 0 === i || "next" == t && i == this.$items.length - 1) && !this.options.wrap) return e; var n = (i + ("prev" == t ? -1 : 1)) % this.$items.length; return this.$items.eq(n) }, i.prototype.to = function(t) {
            var e = this,
                i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
            return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() { e.to(t) }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
        }, i.prototype.pause = function(e) { return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this }, i.prototype.next = function() { return this.sliding ? void 0 : this.slide("next") }, i.prototype.prev = function() { return this.sliding ? void 0 : this.slide("prev") }, i.prototype.slide = function(e, n) {
            var o = this.$element.find(".item.active"),
                s = n || this.getItemForDirection(e, o),
                a = this.interval,
                r = "next" == e ? "left" : "right",
                l = this;
            if (s.hasClass("active")) return this.sliding = !1;
            var c = s[0],
                d = t.Event("slide.bs.carousel", { relatedTarget: c, direction: r });
            if (this.$element.trigger(d), !d.isDefaultPrevented()) {
                if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
                    this.$indicators.find(".active").removeClass("active");
                    var h = t(this.$indicators.children()[this.getItemIndex(s)]);
                    h && h.addClass("active")
                }
                var u = t.Event("slid.bs.carousel", { relatedTarget: c, direction: r });
                return t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, o.addClass(r), s.addClass(r), o.one("bsTransitionEnd", function() { s.removeClass([e, r].join(" ")).addClass("active"), o.removeClass(["active", r].join(" ")), l.sliding = !1, setTimeout(function() { l.$element.trigger(u) }, 0) }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (o.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(u)), a && this.cycle(), this
            }
        };
        var n = t.fn.carousel;
        t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() { return t.fn.carousel = n, this };
        var o = function(i) {
            var n, o = t(this),
                s = t(o.attr("data-target") || (n = o.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
            if (s.hasClass("carousel")) {
                var a = t.extend({}, s.data(), o.data()),
                    r = o.attr("data-slide-to");
                r && (a.interval = !1), e.call(s, a), r && s.data("bs.carousel").to(r), i.preventDefault()
            }
        };
        t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), t(window).on("load", function() {
            t('[data-ride="carousel"]').each(function() {
                var i = t(this);
                e.call(i, i.data())
            })
        })
    }(jQuery), function(t) {
        "use strict";

        function e(e) { var i, n = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""); return t(n) }

        function i(e) {
            return this.each(function() {
                var i = t(this),
                    o = i.data("bs.collapse"),
                    s = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
                !o && s.toggle && /show|hide/.test(e) && (s.toggle = !1), o || i.data("bs.collapse", o = new n(this, s)), "string" == typeof e && o[e]()
            })
        }
        var n = function(e, i) { this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle() };
        n.VERSION = "3.3.4", n.TRANSITION_DURATION = 350, n.DEFAULTS = { toggle: !0 }, n.prototype.dimension = function() { return this.$element.hasClass("width") ? "width" : "height" }, n.prototype.show = function() {
            if (!this.transitioning && !this.$element.hasClass("in")) {
                var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                if (!(o && o.length && (e = o.data("bs.collapse"), e && e.transitioning))) {
                    var s = t.Event("show.bs.collapse");
                    if (this.$element.trigger(s), !s.isDefaultPrevented()) {
                        o && o.length && (i.call(o, "hide"), e || o.data("bs.collapse", null));
                        var a = this.dimension();
                        this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                        var r = function() { this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse") };
                        if (!t.support.transition) return r.call(this);
                        var l = t.camelCase(["scroll", a].join("-"));
                        this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(n.TRANSITION_DURATION)[a](this.$element[0][l])
                    }
                }
            }
        }, n.prototype.hide = function() {
            if (!this.transitioning && this.$element.hasClass("in")) {
                var e = t.Event("hide.bs.collapse");
                if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                    var i = this.dimension();
                    this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                    var o = function() { this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse") };
                    return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : o.call(this)
                }
            }
        }, n.prototype.toggle = function() { this[this.$element.hasClass("in") ? "hide" : "show"]() }, n.prototype.getParent = function() {
            return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, n) {
                var o = t(n);
                this.addAriaAndCollapsedClass(e(o), o)
            }, this)).end()
        }, n.prototype.addAriaAndCollapsedClass = function(t, e) {
            var i = t.hasClass("in");
            t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
        };
        var o = t.fn.collapse;
        t.fn.collapse = i, t.fn.collapse.Constructor = n, t.fn.collapse.noConflict = function() { return t.fn.collapse = o, this }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(n) {
            var o = t(this);
            o.attr("data-target") || n.preventDefault();
            var s = e(o),
                a = s.data("bs.collapse") ? "toggle" : o.data();
            i.call(s, a)
        })
    }(jQuery), function(t) {
        "use strict";

        function e(e) {
            e && 3 === e.which || (t(n).remove(), t(o).each(function() {
                var n = t(this),
                    o = i(n),
                    s = { relatedTarget: this };
                o.hasClass("open") && (o.trigger(e = t.Event("hide.bs.dropdown", s)), e.isDefaultPrevented() || (n.attr("aria-expanded", "false"), o.removeClass("open").trigger("hidden.bs.dropdown", s)))
            }))
        }

        function i(e) {
            var i = e.attr("data-target");
            i || (i = (i = e.attr("href")) && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
            var n = i && t(i);
            return n && n.length ? n : e.parent()
        }
        var n = ".dropdown-backdrop",
            o = '[data-toggle="dropdown"]',
            s = function(e) { t(e).on("click.bs.dropdown", this.toggle) };
        s.VERSION = "3.3.4", s.prototype.toggle = function(n) {
            var o = t(this);
            if (!o.is(".disabled, :disabled")) {
                var s = i(o),
                    a = s.hasClass("open");
                if (e(), !a) {
                    "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
                    var r = { relatedTarget: this };
                    if (s.trigger(n = t.Event("show.bs.dropdown", r)), n.isDefaultPrevented()) return;
                    o.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger("shown.bs.dropdown", r)
                }
                return !1
            }
        }, s.prototype.keydown = function(e) {
            if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
                var n = t(this);
                if (e.preventDefault(), e.stopPropagation(), !n.is(".disabled, :disabled")) {
                    var s = i(n),
                        a = s.hasClass("open");
                    if (!a && 27 != e.which || a && 27 == e.which) return 27 == e.which && s.find(o).trigger("focus"), n.trigger("click");
                    var r = " li:not(.disabled):visible a",
                        l = s.find('[role="menu"]' + r + ', [role="listbox"]' + r);
                    if (l.length) {
                        var c = l.index(e.target);
                        38 == e.which && c > 0 && c--, 40 == e.which && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus")
                    }
                }
            }
        };
        var a = t.fn.dropdown;
        t.fn.dropdown = function(e) {
            return this.each(function() {
                var i = t(this),
                    n = i.data("bs.dropdown");
                n || i.data("bs.dropdown", n = new s(this)), "string" == typeof e && n[e].call(i)
            })
        }, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function() { return t.fn.dropdown = a, this }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function(t) { t.stopPropagation() }).on("click.bs.dropdown.data-api", o, s.prototype.toggle).on("keydown.bs.dropdown.data-api", o, s.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', s.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', s.prototype.keydown)
    }(jQuery), function(t) {
        "use strict";

        function e(e, n) {
            return this.each(function() {
                var o = t(this),
                    s = o.data("bs.modal"),
                    a = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e);
                s || o.data("bs.modal", s = new i(this, a)), "string" == typeof e ? s[e](n) : a.show && s.show(n)
            })
        }
        var i = function(e, i) { this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() { this.$element.trigger("loaded.bs.modal") }, this)) };
        i.VERSION = "3.3.4", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, i.prototype.toggle = function(t) { return this.isShown ? this.hide() : this.show(t) }, i.prototype.show = function(e) {
            var n = this,
                o = t.Event("show.bs.modal", { relatedTarget: e });
            this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() { n.$element.one("mouseup.dismiss.bs.modal", function(e) { t(e.target).is(n.$element) && (n.ignoreBackdropClick = !0) }) }), this.backdrop(function() {
                var o = t.support.transition && n.$element.hasClass("fade");
                n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.adjustDialog(), o && n.$element[0].offsetWidth, n.$element.addClass("in").attr("aria-hidden", !1), n.enforceFocus();
                var s = t.Event("shown.bs.modal", { relatedTarget: e });
                o ? n.$dialog.one("bsTransitionEnd", function() { n.$element.trigger("focus").trigger(s) }).emulateTransitionEnd(i.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(s)
            }))
        }, i.prototype.hide = function(e) { e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal()) }, i.prototype.enforceFocus = function() { t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) { this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus") }, this)) }, i.prototype.escape = function() { this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) { 27 == t.which && this.hide() }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal") }, i.prototype.resize = function() { this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal") }, i.prototype.hideModal = function() {
            var t = this;
            this.$element.hide(), this.backdrop(function() { t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal") })
        }, i.prototype.removeBackdrop = function() { this.$backdrop && this.$backdrop.remove(), this.$backdrop = null }, i.prototype.backdrop = function(e) {
            var n = this,
                o = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var s = t.support.transition && o;
                if (this.$backdrop = t('<div class="modal-backdrop ' + o + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) { return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())) }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
                s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
            } else if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var a = function() { n.removeBackdrop(), e && e() };
                t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : a()
            } else e && e()
        }, i.prototype.handleUpdate = function() { this.adjustDialog() }, i.prototype.adjustDialog = function() {
            var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
            this.$element.css({ paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : "" })
        }, i.prototype.resetAdjustments = function() { this.$element.css({ paddingLeft: "", paddingRight: "" }) }, i.prototype.checkScrollbar = function() {
            var t = window.innerWidth;
            if (!t) {
                var e = document.documentElement.getBoundingClientRect();
                t = e.right - Math.abs(e.left)
            }
            this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
        }, i.prototype.setScrollbar = function() {
            var t = parseInt(this.$body.css("padding-right") || 0, 10);
            this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
        }, i.prototype.resetScrollbar = function() { this.$body.css("padding-right", this.originalBodyPad) }, i.prototype.measureScrollbar = function() {
            var t = document.createElement("div");
            t.className = "modal-scrollbar-measure", this.$body.append(t);
            var e = t.offsetWidth - t.clientWidth;
            return this.$body[0].removeChild(t), e
        };
        var n = t.fn.modal;
        t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() { return t.fn.modal = n, this }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
            var n = t(this),
                o = n.attr("href"),
                s = t(n.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
                a = s.data("bs.modal") ? "toggle" : t.extend({ remote: !/#/.test(o) && o }, s.data(), n.data());
            n.is("a") && i.preventDefault(), s.one("show.bs.modal", function(t) { t.isDefaultPrevented() || s.one("hidden.bs.modal", function() { n.is(":visible") && n.trigger("focus") }) }), e.call(s, a, this)
        })
    }(jQuery), function(t) {
        "use strict";
        var e = function(t, e) { this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.init("tooltip", t, e) };
        e.VERSION = "3.3.4", e.TRANSITION_DURATION = 150, e.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, e.prototype.init = function(e, i, n) {
            if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport), this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
            for (var o = this.options.trigger.split(" "), s = o.length; s--;) {
                var a = o[s];
                if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
                else if ("manual" != a) {
                    var r = "hover" == a ? "mouseenter" : "focusin",
                        l = "hover" == a ? "mouseleave" : "focusout";
                    this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
                }
            }
            this.options.selector ? this._options = t.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle()
        }, e.prototype.getDefaults = function() { return e.DEFAULTS }, e.prototype.getOptions = function(e) { return (e = t.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = { show: e.delay, hide: e.delay }), e }, e.prototype.getDelegateOptions = function() {
            var e = {},
                i = this.getDefaults();
            return this._options && t.each(this._options, function(t, n) { i[t] != n && (e[t] = n) }), e
        }, e.prototype.enter = function(e) { var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type); return i && i.$tip && i.$tip.is(":visible") ? void(i.hoverState = "in") : (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() { "in" == i.hoverState && i.show() }, i.options.delay.show)) : i.show()) }, e.prototype.leave = function(e) { var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type); return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() { "out" == i.hoverState && i.hide() }, i.options.delay.hide)) : i.hide() }, e.prototype.show = function() {
            var i = t.Event("show.bs." + this.type);
            if (this.hasContent() && this.enabled) {
                this.$element.trigger(i);
                var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                if (i.isDefaultPrevented() || !n) return;
                var o = this,
                    s = this.tip(),
                    a = this.getUID(this.type);
                this.setContent(), s.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && s.addClass("fade");
                var r = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
                    l = /\s?auto?\s?/i,
                    c = l.test(r);
                c && (r = r.replace(l, "") || "top"), s.detach().css({ top: 0, left: 0, display: "block" }).addClass(r).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element);
                var d = this.getPosition(),
                    h = s[0].offsetWidth,
                    u = s[0].offsetHeight;
                if (c) {
                    var p = r,
                        f = this.options.container ? t(this.options.container) : this.$element.parent(),
                        m = this.getPosition(f);
                    r = "bottom" == r && d.bottom + u > m.bottom ? "top" : "top" == r && d.top - u < m.top ? "bottom" : "right" == r && d.right + h > m.width ? "left" : "left" == r && d.left - h < m.left ? "right" : r, s.removeClass(p).addClass(r)
                }
                var g = this.getCalculatedOffset(r, d, h, u);
                this.applyPlacement(g, r);
                var v = function() {
                    var t = o.hoverState;
                    o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o)
                };
                t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", v).emulateTransitionEnd(e.TRANSITION_DURATION) : v()
            }
        }, e.prototype.applyPlacement = function(e, i) {
            var n = this.tip(),
                o = n[0].offsetWidth,
                s = n[0].offsetHeight,
                a = parseInt(n.css("margin-top"), 10),
                r = parseInt(n.css("margin-left"), 10);
            isNaN(a) && (a = 0), isNaN(r) && (r = 0), e.top = e.top + a, e.left = e.left + r, t.offset.setOffset(n[0], t.extend({ using: function(t) { n.css({ top: Math.round(t.top), left: Math.round(t.left) }) } }, e), 0), n.addClass("in");
            var l = n[0].offsetWidth,
                c = n[0].offsetHeight;
            "top" == i && c != s && (e.top = e.top + s - c);
            var d = this.getViewportAdjustedDelta(i, e, l, c);
            d.left ? e.left += d.left : e.top += d.top;
            var h = /top|bottom/.test(i),
                u = h ? 2 * d.left - o + l : 2 * d.top - s + c,
                p = h ? "offsetWidth" : "offsetHeight";
            n.offset(e), this.replaceArrow(u, n[0][p], h)
        }, e.prototype.replaceArrow = function(t, e, i) { this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "") }, e.prototype.setContent = function() {
            var t = this.tip(),
                e = this.getTitle();
            t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
        }, e.prototype.hide = function(i) {
            function n() { "in" != o.hoverState && s.detach(), o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), i && i() }
            var o = this,
                s = t(this.$tip),
                a = t.Event("hide.bs." + this.type);
            return this.$element.trigger(a), a.isDefaultPrevented() ? void 0 : (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(e.TRANSITION_DURATION) : n(), this.hoverState = null, this)
        }, e.prototype.fixTitle = function() {
            var t = this.$element;
            (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
        }, e.prototype.hasContent = function() { return this.getTitle() }, e.prototype.getPosition = function(e) {
            var i = (e = e || this.$element)[0],
                n = "BODY" == i.tagName,
                o = i.getBoundingClientRect();
            null == o.width && (o = t.extend({}, o, { width: o.right - o.left, height: o.bottom - o.top }));
            var s = n ? { top: 0, left: 0 } : e.offset(),
                a = { scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop() },
                r = n ? { width: t(window).width(), height: t(window).height() } : null;
            return t.extend({}, o, a, r, s)
        }, e.prototype.getCalculatedOffset = function(t, e, i, n) { return "bottom" == t ? { top: e.top + e.height, left: e.left + e.width / 2 - i / 2 } : "top" == t ? { top: e.top - n, left: e.left + e.width / 2 - i / 2 } : "left" == t ? { top: e.top + e.height / 2 - n / 2, left: e.left - i } : { top: e.top + e.height / 2 - n / 2, left: e.left + e.width } }, e.prototype.getViewportAdjustedDelta = function(t, e, i, n) {
            var o = { top: 0, left: 0 };
            if (!this.$viewport) return o;
            var s = this.options.viewport && this.options.viewport.padding || 0,
                a = this.getPosition(this.$viewport);
            if (/right|left/.test(t)) {
                var r = e.top - s - a.scroll,
                    l = e.top + s - a.scroll + n;
                r < a.top ? o.top = a.top - r : l > a.top + a.height && (o.top = a.top + a.height - l)
            } else {
                var c = e.left - s,
                    d = e.left + s + i;
                c < a.left ? o.left = a.left - c : d > a.width && (o.left = a.left + a.width - d)
            }
            return o
        }, e.prototype.getTitle = function() {
            var t = this.$element,
                e = this.options;
            return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
        }, e.prototype.getUID = function(t) { do { t += ~~(1e6 * Math.random()) } while (document.getElementById(t)); return t }, e.prototype.tip = function() { return this.$tip = this.$tip || t(this.options.template) }, e.prototype.arrow = function() { return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow") }, e.prototype.enable = function() { this.enabled = !0 }, e.prototype.disable = function() { this.enabled = !1 }, e.prototype.toggleEnabled = function() { this.enabled = !this.enabled }, e.prototype.toggle = function(e) {
            var i = this;
            e && ((i = t(e.currentTarget).data("bs." + this.type)) || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
        }, e.prototype.destroy = function() {
            var t = this;
            clearTimeout(this.timeout), this.hide(function() { t.$element.off("." + t.type).removeData("bs." + t.type) })
        };
        var i = t.fn.tooltip;
        t.fn.tooltip = function(i) {
            return this.each(function() {
                var n = t(this),
                    o = n.data("bs.tooltip"),
                    s = "object" == typeof i && i;
                (o || !/destroy|hide/.test(i)) && (o || n.data("bs.tooltip", o = new e(this, s)), "string" == typeof i && o[i]())
            })
        }, t.fn.tooltip.Constructor = e, t.fn.tooltip.noConflict = function() { return t.fn.tooltip = i, this }
    }(jQuery), function(t) {
        "use strict";
        var e = function(t, e) { this.init("popover", t, e) };
        if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
        e.VERSION = "3.3.4", e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), e.prototype.constructor = e, e.prototype.getDefaults = function() { return e.DEFAULTS }, e.prototype.setContent = function() {
            var t = this.tip(),
                e = this.getTitle(),
                i = this.getContent();
            t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
        }, e.prototype.hasContent = function() { return this.getTitle() || this.getContent() }, e.prototype.getContent = function() {
            var t = this.$element,
                e = this.options;
            return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
        }, e.prototype.arrow = function() { return this.$arrow = this.$arrow || this.tip().find(".arrow") };
        var i = t.fn.popover;
        t.fn.popover = function(i) {
            return this.each(function() {
                var n = t(this),
                    o = n.data("bs.popover"),
                    s = "object" == typeof i && i;
                (o || !/destroy|hide/.test(i)) && (o || n.data("bs.popover", o = new e(this, s)), "string" == typeof i && o[i]())
            })
        }, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function() { return t.fn.popover = i, this }
    }(jQuery), function(t) {
        "use strict";

        function e(i, n) { this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, n), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process() }

        function i(i) {
            return this.each(function() {
                var n = t(this),
                    o = n.data("bs.scrollspy"),
                    s = "object" == typeof i && i;
                o || n.data("bs.scrollspy", o = new e(this, s)), "string" == typeof i && o[i]()
            })
        }
        e.VERSION = "3.3.4", e.DEFAULTS = { offset: 10 }, e.prototype.getScrollHeight = function() { return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight) }, e.prototype.refresh = function() {
            var e = this,
                i = "offset",
                n = 0;
            this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", n = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
                var e = t(this),
                    o = e.data("target") || e.attr("href"),
                    s = /^#./.test(o) && t(o);
                return s && s.length && s.is(":visible") && [
                    [s[i]().top + n, o]
                ] || null
            }).sort(function(t, e) { return t[0] - e[0] }).each(function() { e.offsets.push(this[0]), e.targets.push(this[1]) })
        }, e.prototype.process = function() {
            var t, e = this.$scrollElement.scrollTop() + this.options.offset,
                i = this.getScrollHeight(),
                n = this.options.offset + i - this.$scrollElement.height(),
                o = this.offsets,
                s = this.targets,
                a = this.activeTarget;
            if (this.scrollHeight != i && this.refresh(), e >= n) return a != (t = s[s.length - 1]) && this.activate(t);
            if (a && e < o[0]) return this.activeTarget = null, this.clear();
            for (t = o.length; t--;) a != s[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(s[t])
        }, e.prototype.activate = function(e) {
            this.activeTarget = e, this.clear();
            var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
                n = t(i).parents("li").addClass("active");
            n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
        }, e.prototype.clear = function() { t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active") };
        var n = t.fn.scrollspy;
        t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() { return t.fn.scrollspy = n, this }, t(window).on("load.bs.scrollspy.data-api", function() {
            t('[data-spy="scroll"]').each(function() {
                var e = t(this);
                i.call(e, e.data())
            })
        })
    }(jQuery), function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var n = t(this),
                    o = n.data("bs.tab");
                o || n.data("bs.tab", o = new i(this)), "string" == typeof e && o[e]()
            })
        }
        var i = function(e) { this.element = t(e) };
        i.VERSION = "3.3.4", i.TRANSITION_DURATION = 150, i.prototype.show = function() {
            var e = this.element,
                i = e.closest("ul:not(.dropdown-menu)"),
                n = e.data("target");
            if (n || (n = (n = e.attr("href")) && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
                var o = i.find(".active:last a"),
                    s = t.Event("hide.bs.tab", { relatedTarget: e[0] }),
                    a = t.Event("show.bs.tab", { relatedTarget: o[0] });
                if (o.trigger(s), e.trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                    var r = t(n);
                    this.activate(e.closest("li"), i), this.activate(r, r.parent(), function() { o.trigger({ type: "hidden.bs.tab", relatedTarget: e[0] }), e.trigger({ type: "shown.bs.tab", relatedTarget: o[0] }) })
                }
            }
        }, i.prototype.activate = function(e, n, o) {
            function s() { a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o() }
            var a = n.find("> .active"),
                r = o && t.support.transition && (a.length && a.hasClass("fade") || !!n.find("> .fade").length);
            a.length && r ? a.one("bsTransitionEnd", s).emulateTransitionEnd(i.TRANSITION_DURATION) : s(), a.removeClass("in")
        };
        var n = t.fn.tab;
        t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() { return t.fn.tab = n, this };
        var o = function(i) { i.preventDefault(), e.call(t(this), "show") };
        t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
    }(jQuery), function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var n = t(this),
                    o = n.data("bs.affix"),
                    s = "object" == typeof e && e;
                o || n.data("bs.affix", o = new i(this, s)), "string" == typeof e && o[e]()
            })
        }
        var i = function(e, n) { this.options = t.extend({}, i.DEFAULTS, n), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition() };
        i.VERSION = "3.3.4", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = { offset: 0, target: window }, i.prototype.getState = function(t, e, i, n) {
            var o = this.$target.scrollTop(),
                s = this.$element.offset(),
                a = this.$target.height();
            if (null != i && "top" == this.affixed) return i > o && "top";
            if ("bottom" == this.affixed) return null != i ? !(o + this.unpin <= s.top) && "bottom" : !(t - n >= o + a) && "bottom";
            var r = null == this.affixed,
                l = r ? o : s.top;
            return null != i && i >= o ? "top" : null != n && l + (r ? a : e) >= t - n && "bottom"
        }, i.prototype.getPinnedOffset = function() {
            if (this.pinnedOffset) return this.pinnedOffset;
            this.$element.removeClass(i.RESET).addClass("affix");
            var t = this.$target.scrollTop(),
                e = this.$element.offset();
            return this.pinnedOffset = e.top - t
        }, i.prototype.checkPositionWithEventLoop = function() { setTimeout(t.proxy(this.checkPosition, this), 1) }, i.prototype.checkPosition = function() {
            if (this.$element.is(":visible")) {
                var e = this.$element.height(),
                    n = this.options.offset,
                    o = n.top,
                    s = n.bottom,
                    a = t(document.body).height();
                "object" != typeof n && (s = o = n), "function" == typeof o && (o = n.top(this.$element)), "function" == typeof s && (s = n.bottom(this.$element));
                var r = this.getState(a, e, o, s);
                if (this.affixed != r) {
                    null != this.unpin && this.$element.css("top", "");
                    var l = "affix" + (r ? "-" + r : ""),
                        c = t.Event(l + ".bs.affix");
                    if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                    this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
                }
                "bottom" == r && this.$element.offset({ top: a - e - s })
            }
        };
        var n = t.fn.affix;
        t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() { return t.fn.affix = n, this }, t(window).on("load", function() {
            t('[data-spy="affix"]').each(function() {
                var i = t(this),
                    n = i.data();
                n.offset = n.offset || {}, null != n.offsetBottom && (n.offset.bottom = n.offsetBottom), null != n.offsetTop && (n.offset.top = n.offsetTop), e.call(i, n)
            })
        })
    }(jQuery), "undefined" == typeof jQuery) throw new Error("BootstrapValidator requires jQuery");
! function(t) { var e = window.jQuery.fn.jquery.split(" ")[0].split("."); if (+e[0] < 2 && +e[1] < 9 || 1 == +e[0] && 9 == +e[1] && +e[2] < 1) throw new Error("BootstrapValidator requires jQuery version 1.9.1 or higher") }(),
function(t) {
    var e = function(e, i) {
        this.$form = t(e), this.options = t.extend({}, t.fn.bootstrapValidator.DEFAULT_OPTIONS, i), this.$invalidFields = t([]), this.$submitButton = null, this.$hiddenButton = null, this.STATUS_NOT_VALIDATED = "NOT_VALIDATED", this.STATUS_VALIDATING = "VALIDATING", this.STATUS_INVALID = "INVALID", this.STATUS_VALID = "VALID";
        var n = function() { for (var t = 3, e = document.createElement("div"), i = e.all || []; e.innerHTML = "\x3c!--[if gt IE " + ++t + "]><br><![endif]--\x3e", i[0];); return t > 4 ? t : !t }(),
            o = document.createElement("div");
        this._changeEvent = 9 !== n && "oninput" in o ? "input" : "keyup", this._submitIfValid = null, this._cacheFields = {}, this._init()
    };
    e.prototype = {
        constructor: e,
        _init: function() {
            var e = this,
                i = { autoFocus: this.$form.attr("data-bv-autofocus"), container: this.$form.attr("data-bv-container"), events: { formInit: this.$form.attr("data-bv-events-form-init"), formError: this.$form.attr("data-bv-events-form-error"), formSuccess: this.$form.attr("data-bv-events-form-success"), fieldAdded: this.$form.attr("data-bv-events-field-added"), fieldRemoved: this.$form.attr("data-bv-events-field-removed"), fieldInit: this.$form.attr("data-bv-events-field-init"), fieldError: this.$form.attr("data-bv-events-field-error"), fieldSuccess: this.$form.attr("data-bv-events-field-success"), fieldStatus: this.$form.attr("data-bv-events-field-status"), validatorError: this.$form.attr("data-bv-events-validator-error"), validatorSuccess: this.$form.attr("data-bv-events-validator-success") }, excluded: this.$form.attr("data-bv-excluded"), feedbackIcons: { valid: this.$form.attr("data-bv-feedbackicons-valid"), invalid: this.$form.attr("data-bv-feedbackicons-invalid"), validating: this.$form.attr("data-bv-feedbackicons-validating") }, group: this.$form.attr("data-bv-group"), live: this.$form.attr("data-bv-live"), message: this.$form.attr("data-bv-message"), onError: this.$form.attr("data-bv-onerror"), onSuccess: this.$form.attr("data-bv-onsuccess"), submitButtons: this.$form.attr("data-bv-submitbuttons"), threshold: this.$form.attr("data-bv-threshold"), trigger: this.$form.attr("data-bv-trigger"), verbose: this.$form.attr("data-bv-verbose"), fields: {} };
            for (var n in this.$form.attr("novalidate", "novalidate").addClass(this.options.elementClass).on("submit.bv", function(t) { t.preventDefault(), e.validate() }).on("click.bv", this.options.submitButtons, function() { e.$submitButton = t(this), e._submitIfValid = !0 }).find("[name], [data-bv-field]").each(function() {
                    var n = t(this),
                        o = n.attr("name") || n.attr("data-bv-field"),
                        s = e._parseOptions(n);
                    s && (n.attr("data-bv-field", o), i.fields[o] = t.extend({}, s, i.fields[o]))
                }), this.options = t.extend(!0, this.options, i), this.$hiddenButton = t("<button/>").attr("type", "submit").prependTo(this.$form).addClass("bv-hidden-submit").css({ display: "none", width: 0, height: 0 }), this.$form.on("click.bv", '[type="submit"]', function(i) {
                    if (!i.isDefaultPrevented()) {
                        var n = t(i.target),
                            o = n.is('[type="submit"]') ? n.eq(0) : n.parent('[type="submit"]').eq(0);
                        !e.options.submitButtons || o.is(e.options.submitButtons) || o.is(e.$hiddenButton) || e.$form.off("submit.bv").submit()
                    }
                }), this.options.fields) this._initField(n);
            this.$form.trigger(t.Event(this.options.events.formInit), { bv: this, options: this.options }), this.options.onSuccess && this.$form.on(this.options.events.formSuccess, function(i) { t.fn.bootstrapValidator.helpers.call(e.options.onSuccess, [i]) }), this.options.onError && this.$form.on(this.options.events.formError, function(i) { t.fn.bootstrapValidator.helpers.call(e.options.onError, [i]) })
        },
        _parseOptions: function(e) {
            var i, n, o, s, a, r, l, c, d, h = e.attr("name") || e.attr("data-bv-field"),
                u = {};
            for (n in t.fn.bootstrapValidator.validators)
                if (i = t.fn.bootstrapValidator.validators[n], o = "data-bv-" + n.toLowerCase(), s = e.attr(o) + "", (d = "function" == typeof i.enableByHtml5 ? i.enableByHtml5(e) : null) && "false" !== s || !0 !== d && ("" === s || "true" === s || o === s.toLowerCase()))
                    for (c in i.html5Attributes = t.extend({}, { message: "message", onerror: "onError", onsuccess: "onSuccess" }, i.html5Attributes), u[n] = t.extend({}, !0 === d ? {} : d, u[n]), i.html5Attributes) a = i.html5Attributes[c], r = "data-bv-" + n.toLowerCase() + "-" + c, (l = e.attr(r)) && ("true" === l || r === l.toLowerCase() ? l = !0 : "false" === l && (l = !1), u[n][a] = l);
            var p = { autoFocus: e.attr("data-bv-autofocus"), container: e.attr("data-bv-container"), excluded: e.attr("data-bv-excluded"), feedbackIcons: e.attr("data-bv-feedbackicons"), group: e.attr("data-bv-group"), message: e.attr("data-bv-message"), onError: e.attr("data-bv-onerror"), onStatus: e.attr("data-bv-onstatus"), onSuccess: e.attr("data-bv-onsuccess"), selector: e.attr("data-bv-selector"), threshold: e.attr("data-bv-threshold"), trigger: e.attr("data-bv-trigger"), verbose: e.attr("data-bv-verbose"), validators: u },
                f = t.isEmptyObject(p);
            return !t.isEmptyObject(u) || !f && this.options.fields && this.options.fields[h] ? (p.validators = u, p) : null
        },
        _initField: function(e) {
            var i = t([]);
            switch (typeof e) {
                case "object":
                    i = e, e = e.attr("data-bv-field");
                    break;
                case "string":
                    (i = this.getFieldElements(e)).attr("data-bv-field", e)
            }
            if (0 !== i.length && null !== this.options.fields[e] && null !== this.options.fields[e].validators) {
                var n;
                for (n in this.options.fields[e].validators) t.fn.bootstrapValidator.validators[n] || delete this.options.fields[e].validators[n];
                null === this.options.fields[e].enabled && (this.options.fields[e].enabled = !0);
                for (var o = this, s = i.length, a = i.attr("type"), r = 1 === s || "radio" === a || "checkbox" === a, l = "radio" === a || "checkbox" === a || "file" === a || "SELECT" === i.eq(0).get(0).tagName ? "change" : this._changeEvent, c = (this.options.fields[e].trigger || this.options.trigger || l).split(" "), d = t.map(c, function(t) { return t + ".update.bv" }).join(" "), h = 0; h < s; h++) {
                    var u = i.eq(h),
                        p = this.options.fields[e].group || this.options.group,
                        f = u.parents(p),
                        m = "function" == typeof(this.options.fields[e].container || this.options.container) ? (this.options.fields[e].container || this.options.container).call(this, u, this) : this.options.fields[e].container || this.options.container,
                        g = m && "tooltip" !== m && "popover" !== m ? t(m) : this._getMessageContainer(u, p);
                    for (n in m && "tooltip" !== m && "popover" !== m && g.addClass("has-error"), g.find('.help-block[data-bv-validator][data-bv-for="' + e + '"]').remove(), f.find('i[data-bv-icon-for="' + e + '"]').remove(), u.off(d).on(d, function() { o.updateStatus(t(this), o.STATUS_NOT_VALIDATED) }), u.data("bv.messages", g), this.options.fields[e].validators) u.data("bv.result." + n, this.STATUS_NOT_VALIDATED), r && h !== s - 1 || t("<small/>").css("display", "none").addClass("help-block").attr("data-bv-validator", n).attr("data-bv-for", e).attr("data-bv-result", this.STATUS_NOT_VALIDATED).html(this._getMessage(e, n)).appendTo(g), "function" == typeof t.fn.bootstrapValidator.validators[n].init && t.fn.bootstrapValidator.validators[n].init(this, u, this.options.fields[e].validators[n]);
                    if (!1 !== this.options.fields[e].feedbackIcons && "false" !== this.options.fields[e].feedbackIcons && this.options.feedbackIcons && this.options.feedbackIcons.validating && this.options.feedbackIcons.invalid && this.options.feedbackIcons.valid && (!r || h === s - 1)) {
                        f.addClass("has-feedback");
                        var v = t("<i/>").css("display", "none").addClass("form-control-feedback").attr("data-bv-icon-for", e).insertAfter(u);
                        if ("checkbox" === a || "radio" === a) {
                            var y = u.parent();
                            y.hasClass(a) ? v.insertAfter(y) : y.parent().hasClass(a) && v.insertAfter(y.parent())
                        }
                        0 === f.find("label").length && v.addClass("bv-no-label"), 0 !== f.find(".input-group").length && v.addClass("bv-icon-input-group").insertAfter(f.find(".input-group").eq(0)), r ? h === s - 1 && i.data("bv.icon", v) : u.data("bv.icon", v), m && u.off("focus.container.bv").on("focus.container.bv", function() {
                            switch (m) {
                                case "tooltip":
                                    t(this).data("bv.icon").tooltip("show");
                                    break;
                                case "popover":
                                    t(this).data("bv.icon").popover("show")
                            }
                        }).off("blur.container.bv").on("blur.container.bv", function() {
                            switch (m) {
                                case "tooltip":
                                    t(this).data("bv.icon").tooltip("hide");
                                    break;
                                case "popover":
                                    t(this).data("bv.icon").popover("hide")
                            }
                        })
                    }
                }
                switch (i.on(this.options.events.fieldSuccess, function(e, i) {
                    var n = o.getOptions(i.field, null, "onSuccess");
                    n && t.fn.bootstrapValidator.helpers.call(n, [e, i])
                }).on(this.options.events.fieldError, function(e, i) {
                    var n = o.getOptions(i.field, null, "onError");
                    n && t.fn.bootstrapValidator.helpers.call(n, [e, i])
                }).on(this.options.events.fieldStatus, function(e, i) {
                    var n = o.getOptions(i.field, null, "onStatus");
                    n && t.fn.bootstrapValidator.helpers.call(n, [e, i])
                }).on(this.options.events.validatorError, function(e, i) {
                    var n = o.getOptions(i.field, i.validator, "onError");
                    n && t.fn.bootstrapValidator.helpers.call(n, [e, i])
                }).on(this.options.events.validatorSuccess, function(e, i) {
                    var n = o.getOptions(i.field, i.validator, "onSuccess");
                    n && t.fn.bootstrapValidator.helpers.call(n, [e, i])
                }), d = t.map(c, function(t) { return t + ".live.bv" }).join(" "), this.options.live) {
                    case "submitted":
                        break;
                    case "disabled":
                        i.off(d);
                        break;
                    case "enabled":
                    default:
                        i.off(d).on(d, function() { o._exceedThreshold(t(this)) && o.validateField(t(this)) })
                }
                i.trigger(t.Event(this.options.events.fieldInit), { bv: this, field: e, element: i })
            }
        },
        _getMessage: function(e, i) {
            if (!(this.options.fields[e] && t.fn.bootstrapValidator.validators[i] && this.options.fields[e].validators && this.options.fields[e].validators[i])) return "";
            var n = this.options.fields[e].validators[i];
            switch (!0) {
                case !!n.message:
                    return n.message;
                case !!this.options.fields[e].message:
                    return this.options.fields[e].message;
                case !!t.fn.bootstrapValidator.i18n[i]:
                    return t.fn.bootstrapValidator.i18n[i].default;
                default:
                    return this.options.message
            }
        },
        _getMessageContainer: function(t, e) {
            var i = t.parent();
            if (i.is(e)) return i;
            var n = i.attr("class");
            if (!n) return this._getMessageContainer(i, e);
            for (var o = (n = n.split(" ")).length, s = 0; s < o; s++)
                if (/^col-(xs|sm|md|lg)-\d+$/.test(n[s]) || /^col-(xs|sm|md|lg)-offset-\d+$/.test(n[s])) return i;
            return this._getMessageContainer(i, e)
        },
        _submit: function() {
            var e = this.isValid(),
                i = e ? this.options.events.formSuccess : this.options.events.formError,
                n = t.Event(i);
            this.$form.trigger(n), this.$submitButton && (e ? this._onSuccess(n) : this._onError(n))
        },
        _isExcluded: function(e) {
            var i = e.attr("data-bv-excluded"),
                n = e.attr("data-bv-field") || e.attr("name");
            switch (!0) {
                case !!n && this.options.fields && this.options.fields[n] && ("true" === this.options.fields[n].excluded || !0 === this.options.fields[n].excluded):
                case "true" === i:
                case "" === i:
                    return !0;
                case !!n && this.options.fields && this.options.fields[n] && ("false" === this.options.fields[n].excluded || !1 === this.options.fields[n].excluded):
                case "false" === i:
                    return !1;
                default:
                    if (this.options.excluded) {
                        "string" == typeof this.options.excluded && (this.options.excluded = t.map(this.options.excluded.split(","), function(e) { return t.trim(e) }));
                        for (var o = this.options.excluded.length, s = 0; s < o; s++)
                            if ("string" == typeof this.options.excluded[s] && e.is(this.options.excluded[s]) || "function" == typeof this.options.excluded[s] && !0 === this.options.excluded[s].call(this, e, this)) return !0
                    }
                    return !1
            }
        },
        _exceedThreshold: function(e) {
            var i = e.attr("data-bv-field"),
                n = this.options.fields[i].threshold || this.options.threshold;
            return !n || (-1 !== t.inArray(e.attr("type"), ["button", "checkbox", "file", "hidden", "image", "radio", "reset", "submit"]) || e.val().length >= n)
        },
        _onError: function(e) {
            if (!e.isDefaultPrevented()) {
                if ("submitted" === this.options.live) {
                    this.options.live = "enabled";
                    var i = this;
                    for (var n in this.options.fields) ! function(e) {
                        var o = i.getFieldElements(e);
                        if (o.length) {
                            var s = t(o[0]).attr("type"),
                                a = "radio" === s || "checkbox" === s || "file" === s || "SELECT" === t(o[0]).get(0).tagName ? "change" : i._changeEvent,
                                r = i.options.fields[n].trigger || i.options.trigger || a,
                                l = t.map(r.split(" "), function(t) { return t + ".live.bv" }).join(" ");
                            o.off(l).on(l, function() { i._exceedThreshold(t(this)) && i.validateField(t(this)) })
                        }
                    }(n)
                }
                for (var o = 0; o < this.$invalidFields.length; o++) {
                    var s = this.$invalidFields.eq(o);
                    if (this._isOptionEnabled(s.attr("data-bv-field"), "autoFocus")) {
                        var a, r = s.parents(".tab-pane");
                        r && (a = r.attr("id")) && t('a[href="#' + a + '"][data-toggle="tab"]').tab("show"), s.focus();
                        break
                    }
                }
            }
        },
        _onSuccess: function(t) { t.isDefaultPrevented() || this.disableSubmitButtons(!0).defaultSubmit() },
        _onFieldValidated: function(e, i) {
            var n = e.attr("data-bv-field"),
                o = this.options.fields[n].validators,
                s = {},
                a = 0,
                r = { bv: this, field: n, element: e, validator: i, result: e.data("bv.response." + i) };
            if (i) switch (e.data("bv.result." + i)) {
                case this.STATUS_INVALID:
                    e.trigger(t.Event(this.options.events.validatorError), r);
                    break;
                case this.STATUS_VALID:
                    e.trigger(t.Event(this.options.events.validatorSuccess), r)
            }
            for (var l in s[this.STATUS_NOT_VALIDATED] = 0, s[this.STATUS_VALIDATING] = 0, s[this.STATUS_INVALID] = 0, s[this.STATUS_VALID] = 0, o)
                if (!1 !== o[l].enabled) {
                    a++;
                    var c = e.data("bv.result." + l);
                    c && s[c]++
                }
            s[this.STATUS_VALID] === a ? (this.$invalidFields = this.$invalidFields.not(e), e.trigger(t.Event(this.options.events.fieldSuccess), r)) : (0 === s[this.STATUS_NOT_VALIDATED] || !this._isOptionEnabled(n, "verbose")) && 0 === s[this.STATUS_VALIDATING] && s[this.STATUS_INVALID] > 0 && (this.$invalidFields = this.$invalidFields.add(e), e.trigger(t.Event(this.options.events.fieldError), r))
        },
        _isOptionEnabled: function(t, e) { return !(!this.options.fields[t] || "true" !== this.options.fields[t][e] && !0 !== this.options.fields[t][e]) || (!this.options.fields[t] || "false" !== this.options.fields[t][e] && !1 !== this.options.fields[t][e]) && ("true" === this.options[e] || !0 === this.options[e]) },
        getFieldElements: function(e) { return this._cacheFields[e] || (this._cacheFields[e] = this.options.fields[e] && this.options.fields[e].selector ? t(this.options.fields[e].selector) : this.$form.find('[name="' + e + '"]')), this._cacheFields[e] },
        getOptions: function(t, e, i) { if (!t) return i ? this.options[i] : this.options; if ("object" == typeof t && (t = t.attr("data-bv-field")), !this.options.fields[t]) return null; var n = this.options.fields[t]; return e ? n.validators && n.validators[e] ? i ? n.validators[e][i] : n.validators[e] : null : i ? n[i] : n },
        disableSubmitButtons: function(t) { return t ? "disabled" !== this.options.live && this.$form.find(this.options.submitButtons).attr("disabled", "disabled") : this.$form.find(this.options.submitButtons).removeAttr("disabled"), this },
        validate: function() { if (!this.options.fields) return this; for (var t in this.disableSubmitButtons(!0), this._submitIfValid = !1, this.options.fields) this.validateField(t); return this._submit(), this._submitIfValid = !0, this },
        validateField: function(e) {
            var i = t([]);
            switch (typeof e) {
                case "object":
                    i = e, e = e.attr("data-bv-field");
                    break;
                case "string":
                    i = this.getFieldElements(e)
            }
            if (0 === i.length || !this.options.fields[e] || !1 === this.options.fields[e].enabled) return this;
            for (var n, o, s = this, a = i.attr("type"), r = "radio" === a || "checkbox" === a ? 1 : i.length, l = "radio" === a || "checkbox" === a, c = this.options.fields[e].validators, d = this._isOptionEnabled(e, "verbose"), h = 0; h < r; h++) {
                var u = i.eq(h);
                if (!this._isExcluded(u)) {
                    var p = !1;
                    for (n in c) {
                        if (u.data("bv.dfs." + n) && u.data("bv.dfs." + n).reject(), p) break;
                        var f = u.data("bv.result." + n);
                        if (f !== this.STATUS_VALID && f !== this.STATUS_INVALID)
                            if (!1 !== c[n].enabled) {
                                if (u.data("bv.result." + n, this.STATUS_VALIDATING), "object" == typeof(o = t.fn.bootstrapValidator.validators[n].validate(this, u, c[n])) && o.resolve) this.updateStatus(l ? e : u, this.STATUS_VALIDATING, n), u.data("bv.dfs." + n, o), o.done(function(t, e, i) { t.removeData("bv.dfs." + e).data("bv.response." + e, i), i.message && s.updateMessage(t, e, i.message), s.updateStatus(l ? t.attr("data-bv-field") : t, i.valid ? s.STATUS_VALID : s.STATUS_INVALID, e), i.valid && !0 === s._submitIfValid ? s._submit() : i.valid || d || (p = !0) });
                                else if ("object" == typeof o && void 0 !== o.valid && void 0 !== o.message) { if (u.data("bv.response." + n, o), this.updateMessage(l ? e : u, n, o.message), this.updateStatus(l ? e : u, o.valid ? this.STATUS_VALID : this.STATUS_INVALID, n), !o.valid && !d) break } else if ("boolean" == typeof o && (u.data("bv.response." + n, o), this.updateStatus(l ? e : u, o ? this.STATUS_VALID : this.STATUS_INVALID, n), !o && !d)) break
                            } else this.updateStatus(l ? e : u, this.STATUS_VALID, n);
                        else this._onFieldValidated(u, n)
                    }
                }
            }
            return this
        },
        updateMessage: function(e, i, n) {
            var o = t([]);
            switch (typeof e) {
                case "object":
                    o = e, e = e.attr("data-bv-field");
                    break;
                case "string":
                    o = this.getFieldElements(e)
            }
            o.each(function() { t(this).data("bv.messages").find('.help-block[data-bv-validator="' + i + '"][data-bv-for="' + e + '"]').html(n) })
        },
        updateStatus: function(e, i, n) {
            var o = t([]);
            switch (typeof e) {
                case "object":
                    o = e, e = e.attr("data-bv-field");
                    break;
                case "string":
                    o = this.getFieldElements(e)
            }
            i === this.STATUS_NOT_VALIDATED && (this._submitIfValid = !1);
            for (var s = o.attr("type"), a = this.options.fields[e].group || this.options.group, r = "radio" === s || "checkbox" === s ? 1 : o.length, l = 0; l < r; l++) {
                var c = o.eq(l);
                if (!this._isExcluded(c)) {
                    var d = c.parents(a),
                        h = c.data("bv.messages").find('.help-block[data-bv-validator][data-bv-for="' + e + '"]'),
                        u = n ? h.filter('[data-bv-validator="' + n + '"]') : h,
                        p = c.data("bv.icon"),
                        f = "function" == typeof(this.options.fields[e].container || this.options.container) ? (this.options.fields[e].container || this.options.container).call(this, c, this) : this.options.fields[e].container || this.options.container,
                        m = null;
                    if (n) c.data("bv.result." + n, i);
                    else
                        for (var g in this.options.fields[e].validators) c.data("bv.result." + g, i);
                    u.attr("data-bv-result", i);
                    var v, y, b = c.parents(".tab-pane");
                    switch (b && (v = b.attr("id")) && (y = t('a[href="#' + v + '"][data-toggle="tab"]').parent()), i) {
                        case this.STATUS_VALIDATING:
                            m = null, this.disableSubmitButtons(!0), d.removeClass("has-success").removeClass("has-error"), p && p.removeClass(this.options.feedbackIcons.valid).removeClass(this.options.feedbackIcons.invalid).addClass(this.options.feedbackIcons.validating).show(), y && y.removeClass("bv-tab-success").removeClass("bv-tab-error");
                            break;
                        case this.STATUS_INVALID:
                            m = !1, this.disableSubmitButtons(!0), d.removeClass("has-success").addClass("has-error"), p && p.removeClass(this.options.feedbackIcons.valid).removeClass(this.options.feedbackIcons.validating).addClass(this.options.feedbackIcons.invalid).show(), y && y.removeClass("bv-tab-success").addClass("bv-tab-error");
                            break;
                        case this.STATUS_VALID:
                            null !== (m = 0 === h.filter('[data-bv-result="' + this.STATUS_NOT_VALIDATED + '"]').length ? h.filter('[data-bv-result="' + this.STATUS_VALID + '"]').length === h.length : null) && (this.disableSubmitButtons(this.$submitButton ? !this.isValid() : !m), p && p.removeClass(this.options.feedbackIcons.invalid).removeClass(this.options.feedbackIcons.validating).removeClass(this.options.feedbackIcons.valid).addClass(m ? this.options.feedbackIcons.valid : this.options.feedbackIcons.invalid).show()), d.removeClass("has-error has-success").addClass(this.isValidContainer(d) ? "has-success" : "has-error"), y && y.removeClass("bv-tab-success").removeClass("bv-tab-error").addClass(this.isValidContainer(b) ? "bv-tab-success" : "bv-tab-error");
                            break;
                        case this.STATUS_NOT_VALIDATED:
                        default:
                            m = null, this.disableSubmitButtons(!1), d.removeClass("has-success").removeClass("has-error"), p && p.removeClass(this.options.feedbackIcons.valid).removeClass(this.options.feedbackIcons.invalid).removeClass(this.options.feedbackIcons.validating).hide(), y && y.removeClass("bv-tab-success").removeClass("bv-tab-error")
                    }
                    switch (!0) {
                        case p && "tooltip" === f:
                            !1 === m ? p.css("cursor", "pointer").tooltip("destroy").tooltip({ container: "body", html: !0, placement: "auto top", title: h.filter('[data-bv-result="' + this.STATUS_INVALID + '"]').eq(0).html() }) : p.css("cursor", "").tooltip("destroy");
                            break;
                        case p && "popover" === f:
                            !1 === m ? p.css("cursor", "pointer").popover("destroy").popover({ container: "body", content: h.filter('[data-bv-result="' + this.STATUS_INVALID + '"]').eq(0).html(), html: !0, placement: "auto top", trigger: "hover click" }) : p.css("cursor", "").popover("destroy");
                            break;
                        default:
                            i === this.STATUS_INVALID ? u.show() : u.hide()
                    }
                    c.trigger(t.Event(this.options.events.fieldStatus), { bv: this, field: e, element: c, status: i }), this._onFieldValidated(c, n)
                }
            }
            return this
        },
        isValid: function() {
            for (var t in this.options.fields)
                if (!this.isValidField(t)) return !1;
            return !0
        },
        isValidField: function(e) {
            var i = t([]);
            switch (typeof e) {
                case "object":
                    i = e, e = e.attr("data-bv-field");
                    break;
                case "string":
                    i = this.getFieldElements(e)
            }
            if (0 === i.length || !this.options.fields[e] || !1 === this.options.fields[e].enabled) return !0;
            for (var n, o, s = i.attr("type"), a = "radio" === s || "checkbox" === s ? 1 : i.length, r = 0; r < a; r++)
                if (n = i.eq(r), !this._isExcluded(n))
                    for (o in this.options.fields[e].validators)
                        if (!1 !== this.options.fields[e].validators[o].enabled && n.data("bv.result." + o) !== this.STATUS_VALID) return !1;
            return !0
        },
        isValidContainer: function(e) {
            var i = this,
                n = {},
                o = "string" == typeof e ? t(e) : e;
            if (0 === o.length) return !0;
            for (var s in o.find("[data-bv-field]").each(function() {
                    var e = t(this),
                        o = e.attr("data-bv-field");
                    i._isExcluded(e) || n[o] || (n[o] = e)
                }), n) { if (n[s].data("bv.messages").find('.help-block[data-bv-validator][data-bv-for="' + s + '"]').filter('[data-bv-result="' + this.STATUS_INVALID + '"]').length > 0) return !1 }
            return !0
        },
        defaultSubmit: function() { this.$submitButton && t("<input/>").attr("type", "hidden").attr("data-bv-submit-hidden", "").attr("name", this.$submitButton.attr("name")).val(this.$submitButton.val()).appendTo(this.$form), this.$form.off("submit.bv").submit() },
        getInvalidFields: function() { return this.$invalidFields },
        getSubmitButton: function() { return this.$submitButton },
        getMessages: function(e, i) {
            var n = this,
                o = [],
                s = t([]);
            switch (!0) {
                case e && "object" == typeof e:
                    s = e;
                    break;
                case e && "string" == typeof e:
                    var a = this.getFieldElements(e);
                    if (a.length > 0) {
                        var r = a.attr("type");
                        s = "radio" === r || "checkbox" === r ? a.eq(0) : a
                    }
                    break;
                default:
                    s = this.$invalidFields
            }
            var l = i ? '[data-bv-validator="' + i + '"]' : "";
            return s.each(function() {
                o = o.concat(t(this).data("bv.messages").find('.help-block[data-bv-for="' + t(this).attr("data-bv-field") + '"][data-bv-result="' + n.STATUS_INVALID + '"]' + l).map(function() {
                    var e = t(this).attr("data-bv-validator"),
                        i = t(this).attr("data-bv-for");
                    return !1 === n.options.fields[i].validators[e].enabled ? "" : t(this).html()
                }).get())
            }), o
        },
        updateOption: function(t, e, i, n) { return "object" == typeof t && (t = t.attr("data-bv-field")), this.options.fields[t] && this.options.fields[t].validators[e] && (this.options.fields[t].validators[e][i] = n, this.updateStatus(t, this.STATUS_NOT_VALIDATED, e)), this },
        addField: function(e, i) {
            var n = t([]);
            switch (typeof e) {
                case "object":
                    n = e, e = e.attr("data-bv-field") || e.attr("name");
                    break;
                case "string":
                    delete this._cacheFields[e], n = this.getFieldElements(e)
            }
            n.attr("data-bv-field", e);
            for (var o = n.attr("type"), s = "radio" === o || "checkbox" === o ? 1 : n.length, a = 0; a < s; a++) {
                var r = n.eq(a),
                    l = this._parseOptions(r);
                l = null === l ? i : t.extend(!0, i, l), this.options.fields[e] = t.extend(!0, this.options.fields[e], l), this._cacheFields[e] = this._cacheFields[e] ? this._cacheFields[e].add(r) : r, this._initField("checkbox" === o || "radio" === o ? e : r)
            }
            return this.disableSubmitButtons(!1), this.$form.trigger(t.Event(this.options.events.fieldAdded), { field: e, element: n, options: this.options.fields[e] }), this
        },
        removeField: function(e) {
            var i = t([]);
            switch (typeof e) {
                case "object":
                    i = e, e = e.attr("data-bv-field") || e.attr("name"), i.attr("data-bv-field", e);
                    break;
                case "string":
                    i = this.getFieldElements(e)
            }
            if (0 === i.length) return this;
            for (var n = i.attr("type"), o = "radio" === n || "checkbox" === n ? 1 : i.length, s = 0; s < o; s++) {
                var a = i.eq(s);
                this.$invalidFields = this.$invalidFields.not(a), this._cacheFields[e] = this._cacheFields[e].not(a)
            }
            return this._cacheFields[e] && 0 !== this._cacheFields[e].length || delete this.options.fields[e], "checkbox" !== n && "radio" !== n || this._initField(e), this.disableSubmitButtons(!1), this.$form.trigger(t.Event(this.options.events.fieldRemoved), { field: e, element: i }), this
        },
        resetField: function(e, i) {
            var n = t([]);
            switch (typeof e) {
                case "object":
                    n = e, e = e.attr("data-bv-field");
                    break;
                case "string":
                    n = this.getFieldElements(e)
            }
            var o = n.length;
            if (this.options.fields[e])
                for (var s = 0; s < o; s++)
                    for (var a in this.options.fields[e].validators) n.eq(s).removeData("bv.dfs." + a);
            if (this.updateStatus(e, this.STATUS_NOT_VALIDATED), i) { var r = n.attr("type"); "radio" === r || "checkbox" === r ? n.removeAttr("checked").removeAttr("selected") : n.val("") }
            return this
        },
        resetForm: function(e) { for (var i in this.options.fields) this.resetField(i, e); return this.$invalidFields = t([]), this.$submitButton = null, this.disableSubmitButtons(!1), this },
        revalidateField: function(t) { return this.updateStatus(t, this.STATUS_NOT_VALIDATED).validateField(t), this },
        enableFieldValidators: function(t, e, i) {
            var n = this.options.fields[t].validators;
            if (i && n && n[i] && n[i].enabled !== e) this.options.fields[t].validators[i].enabled = e, this.updateStatus(t, this.STATUS_NOT_VALIDATED, i);
            else if (!i && this.options.fields[t].enabled !== e)
                for (var o in this.options.fields[t].enabled = e, n) this.enableFieldValidators(t, e, o);
            return this
        },
        getDynamicOption: function(e, i) {
            var n = "string" == typeof e ? this.getFieldElements(e) : e,
                o = n.val();
            if ("function" == typeof i) return t.fn.bootstrapValidator.helpers.call(i, [o, this, n]);
            if ("string" == typeof i) { var s = this.getFieldElements(i); return s.length ? s.val() : t.fn.bootstrapValidator.helpers.call(i, [o, this, n]) || i }
            return null
        },
        destroy: function() {
            var e, i, n, o, s, a;
            for (e in this.options.fields) {
                i = this.getFieldElements(e), a = this.options.fields[e].group || this.options.group;
                for (var r = 0; r < i.length; r++) {
                    if ((n = i.eq(r)).data("bv.messages").find('.help-block[data-bv-validator][data-bv-for="' + e + '"]').remove().end().end().removeData("bv.messages").parents(a).removeClass("has-feedback has-error has-success").end().off(".bv").removeAttr("data-bv-field"), s = n.data("bv.icon")) switch ("function" == typeof(this.options.fields[e].container || this.options.container) ? (this.options.fields[e].container || this.options.container).call(this, n, this) : this.options.fields[e].container || this.options.container) {
                        case "tooltip":
                            s.tooltip("destroy").remove();
                            break;
                        case "popover":
                            s.popover("destroy").remove();
                            break;
                        default:
                            s.remove()
                    }
                    for (o in n.removeData("bv.icon"), this.options.fields[e].validators) n.data("bv.dfs." + o) && n.data("bv.dfs." + o).reject(), n.removeData("bv.result." + o).removeData("bv.response." + o).removeData("bv.dfs." + o), "function" == typeof t.fn.bootstrapValidator.validators[o].destroy && t.fn.bootstrapValidator.validators[o].destroy(this, n, this.options.fields[e].validators[o])
                }
            }
            this.disableSubmitButtons(!1), this.$hiddenButton.remove(), this.$form.removeClass(this.options.elementClass).off(".bv").removeData("bootstrapValidator").find("[data-bv-submit-hidden]").remove().end().find('[type="submit"]').off("click.bv")
        }
    }, t.fn.bootstrapValidator = function(i) {
        var n = arguments;
        return this.each(function() {
            var o = t(this),
                s = o.data("bootstrapValidator");
            s || (s = new e(this, "object" == typeof i && i), o.data("bootstrapValidator", s)), "string" == typeof i && s[i].apply(s, Array.prototype.slice.call(n, 1))
        })
    }, t.fn.bootstrapValidator.DEFAULT_OPTIONS = { autoFocus: !0, container: null, elementClass: "bv-form", events: { formInit: "init.form.bv", formError: "error.form.bv", formSuccess: "success.form.bv", fieldAdded: "added.field.bv", fieldRemoved: "removed.field.bv", fieldInit: "init.field.bv", fieldError: "error.field.bv", fieldSuccess: "success.field.bv", fieldStatus: "status.field.bv", validatorError: "error.validator.bv", validatorSuccess: "success.validator.bv" }, excluded: [":disabled", ":hidden", ":not(:visible)"], feedbackIcons: { valid: null, invalid: null, validating: null }, fields: null, group: ".form-group", live: "enabled", message: "This value is not valid", submitButtons: '[type="submit"]', threshold: null, verbose: !0 }, t.fn.bootstrapValidator.validators = {}, t.fn.bootstrapValidator.i18n = {}, t.fn.bootstrapValidator.Constructor = e, t.fn.bootstrapValidator.helpers = {
        call: function(t, e) { if ("function" == typeof t) return t.apply(this, e); if ("string" == typeof t) { "()" === t.substring(t.length - 2) && (t = t.substring(0, t.length - 2)); for (var i = t.split("."), n = i.pop(), o = window, s = 0; s < i.length; s++) o = o[i[s]]; return void 0 === o[n] ? null : o[n].apply(this, e) } },
        format: function(e, i) { for (var n in t.isArray(i) || (i = [i]), i) e = e.replace("%s", i[n]); return e },
        date: function(t, e, i, n) {
            if (isNaN(t) || isNaN(e) || isNaN(i)) return !1;
            if (i.length > 2 || e.length > 2 || t.length > 4) return !1;
            if (i = parseInt(i, 10), e = parseInt(e, 10), (t = parseInt(t, 10)) < 1e3 || t > 9999 || e <= 0 || e > 12) return !1;
            var o = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            if ((t % 400 == 0 || t % 100 != 0 && t % 4 == 0) && (o[1] = 29), i <= 0 || i > o[e - 1]) return !1;
            if (!0 === n) {
                var s = new Date,
                    a = s.getFullYear(),
                    r = s.getMonth(),
                    l = s.getDate();
                return t < a || t === a && e - 1 < r || t === a && e - 1 === r && i < l
            }
            return !0
        },
        luhn: function(t) {
            for (var e = t.length, i = 0, n = [
                    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                    [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]
                ], o = 0; e--;) o += n[i][parseInt(t.charAt(e), 10)], i ^= 1;
            return o % 10 == 0 && o > 0
        },
        mod11And10: function(t) { for (var e = 5, i = t.length, n = 0; n < i; n++) e = (2 * (e || 10) % 11 + parseInt(t.charAt(n), 10)) % 10; return 1 === e },
        mod37And36: function(t, e) { for (var i = (e = e || "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ").length, n = t.length, o = Math.floor(i / 2), s = 0; s < n; s++) o = (2 * (o || i) % (i + 1) + e.indexOf(t.charAt(s))) % i; return 1 === o }
    }
}(window.jQuery),
function(t) {
    t.fn.bootstrapValidator.i18n.emailAddress = t.extend(t.fn.bootstrapValidator.i18n.emailAddress || {}, { default: "Vui lòng nhập giá trị" }), t.fn.bootstrapValidator.validators.emailAddress = {
        html5Attributes: { message: "message", multiple: "multiple", separator: "separator" },
        enableByHtml5: function(t) { return "email" === t.attr("type") },
        validate: function(t, e, i) {
            var n = e.val();
            if ("" === n) return !0;
            var o = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!0 === i.multiple || "true" === i.multiple) {
                for (var s = i.separator || /[,;]/, a = this._splitEmailAddresses(n, s), r = 0; r < a.length; r++)
                    if (!o.test(a[r])) return !1;
                return !0
            }
            return o.test(n)
        },
        _splitEmailAddresses: function(t, e) {
            for (var i = t.split(/"/), n = i.length, o = [], s = "", a = 0; a < n; a++)
                if (a % 2 == 0) {
                    var r = i[a].split(e),
                        l = r.length;
                    if (1 === l) s += r[0];
                    else {
                        o.push(s + r[0]);
                        for (var c = 1; c < l - 1; c++) o.push(r[c]);
                        s = r[l - 1]
                    }
                } else s += '"' + i[a], a < n - 1 && (s += '"');
            return o.push(s), o
        }
    }
}(window.jQuery),
function(t) { t.fn.bootstrapValidator.i18n.identical = t.extend(t.fn.bootstrapValidator.i18n.identical || {}, { default: "Please enter the same value" }), t.fn.bootstrapValidator.validators.identical = { html5Attributes: { message: "message", field: "field" }, validate: function(t, e, i) { var n = e.val(); if ("" === n) return !0; var o = t.getFieldElements(i.field); return null === o || 0 === o.length || n === o.val() && (t.updateStatus(i.field, t.STATUS_VALID, "identical"), !0) } } }(window.jQuery),
function(t) { t.fn.bootstrapValidator.i18n.notEmpty = t.extend(t.fn.bootstrapValidator.i18n.notEmpty || {}, { default: "Vui lòng nhập giá trị" }), t.fn.bootstrapValidator.validators.notEmpty = { enableByHtml5: function(t) { var e = t.attr("required") + ""; return "required" === e || "true" === e }, validate: function(e, i, n) { var o = i.attr("type"); return "radio" === o || "checkbox" === o ? e.getFieldElements(i.attr("data-bv-field")).filter(":checked").length > 0 : !("number" !== o || !i.get(0).validity || !0 !== i.get(0).validity.badInput) || "" !== t.trim(i.val()) } } }(window.jQuery),
function(t) { t.fn.bootstrapValidator.i18n.numeric = t.extend(t.fn.bootstrapValidator.i18n.numeric || {}, { default: "Please enter a valid float number" }), t.fn.bootstrapValidator.validators.numeric = { html5Attributes: { message: "message", separator: "separator" }, enableByHtml5: function(t) { return "number" === t.attr("type") && void 0 !== t.attr("step") && t.attr("step") % 1 != 0 }, validate: function(t, e, i) { if (this.enableByHtml5(e) && e.get(0).validity && !0 === e.get(0).validity.badInput) return !1; var n = e.val(); if ("" === n) return !0; var o = i.separator || "."; return "." !== o && (n = n.replace(o, ".")), !isNaN(parseFloat(n)) && isFinite(n) } } }(window.jQuery),
function(t) {
    t.fn.bootstrapValidator.i18n.stringLength = t.extend(t.fn.bootstrapValidator.i18n.stringLength || {}, { default: "Please enter a value with valid length", less: "Please enter less than %s characters", more: "Please enter more than %s characters", between: "Please enter value between %s and %s characters long" }), t.fn.bootstrapValidator.validators.stringLength = {
        html5Attributes: { message: "message", min: "min", max: "max", trim: "trim", utf8bytes: "utf8Bytes" },
        enableByHtml5: function(e) {
            var i = {},
                n = e.attr("maxlength"),
                o = e.attr("minlength");
            return n && (i.max = parseInt(n, 10)), o && (i.min = parseInt(o, 10)), !t.isEmptyObject(i) && i
        },
        validate: function(e, i, n) {
            var o = i.val();
            if (!0 !== n.trim && "true" !== n.trim || (o = t.trim(o)), "" === o) return !0;
            var s = t.isNumeric(n.min) ? n.min : e.getDynamicOption(i, n.min),
                a = t.isNumeric(n.max) ? n.max : e.getDynamicOption(i, n.max),
                r = n.utf8Bytes ? function(t) {
                    for (var e = t.length, i = t.length - 1; i >= 0; i--) {
                        var n = t.charCodeAt(i);
                        n > 127 && n <= 2047 ? e++ : n > 2047 && n <= 65535 && (e += 2), n >= 56320 && n <= 57343 && i--
                    }
                    return e
                }(o) : o.length,
                l = !0,
                c = n.message || t.fn.bootstrapValidator.i18n.stringLength.default;
            switch ((s && r < parseInt(s, 10) || a && r > parseInt(a, 10)) && (l = !1), !0) {
                case !!s && !!a:
                    c = t.fn.bootstrapValidator.helpers.format(n.message || t.fn.bootstrapValidator.i18n.stringLength.between, [parseInt(s, 10), parseInt(a, 10)]);
                    break;
                case !!s:
                    c = t.fn.bootstrapValidator.helpers.format(n.message || t.fn.bootstrapValidator.i18n.stringLength.more, parseInt(s, 10));
                    break;
                case !!a:
                    c = t.fn.bootstrapValidator.helpers.format(n.message || t.fn.bootstrapValidator.i18n.stringLength.less, parseInt(a, 10))
            }
            return { valid: l, message: c }
        }
    }
}(window.jQuery),
function(t, e, i, n) {
    function o(e, i) { this.settings = null, this.options = t.extend({}, o.Defaults, i), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = { time: null, target: null, pointer: null, stage: { start: null, current: null }, direction: null }, this._states = { current: {}, tags: { initializing: ["busy"], animating: ["busy"], dragging: ["interacting"] } }, t.each(["onResize", "onThrottledResize"], t.proxy(function(e, i) { this._handlers[i] = t.proxy(this[i], this) }, this)), t.each(o.Plugins, t.proxy(function(t, e) { this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this) }, this)), t.each(o.Workers, t.proxy(function(e, i) { this._pipe.push({ filter: i.filter, run: t.proxy(i.run, this) }) }, this)), this.setup(), this.initialize() }
    o.Defaults = { items: 3, loop: !1, center: !1, rewind: !1, mouseDrag: !0, touchDrag: !0, pullDrag: !0, freeDrag: !1, margin: 0, stagePadding: 0, merge: !1, mergeFit: !0, autoWidth: !1, startPosition: 0, rtl: !1, smartSpeed: 250, fluidSpeed: !1, dragEndSpeed: !1, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: e, fallbackEasing: "swing", info: !1, nestedItemSelector: !1, itemElement: "div", stageElement: "div", refreshClass: "owl-refresh", loadedClass: "owl-loaded", loadingClass: "owl-loading", rtlClass: "owl-rtl", responsiveClass: "owl-responsive", dragClass: "owl-drag", itemClass: "owl-item", stageClass: "owl-stage", stageOuterClass: "owl-stage-outer", grabClass: "owl-grab" }, o.Width = { Default: "default", Inner: "inner", Outer: "outer" }, o.Type = { Event: "event", State: "state" }, o.Plugins = {}, o.Workers = [{ filter: ["width", "settings"], run: function() { this._width = this.$element.width() } }, { filter: ["width", "items", "settings"], run: function(t) { t.current = this._items && this._items[this.relative(this._current)] } }, { filter: ["items", "settings"], run: function() { this.$stage.children(".cloned").remove() } }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = this.settings.margin || "",
                i = !this.settings.autoWidth,
                n = this.settings.rtl,
                o = { width: "auto", "margin-left": n ? e : "", "margin-right": n ? "" : e };
            !i && this.$stage.children().css(o), t.css = o
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                i = null,
                n = this._items.length,
                o = !this.settings.autoWidth,
                s = [];
            for (t.items = { merge: !1, width: e }; n--;) i = this._mergers[n], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, t.items.merge = i > 1 || t.items.merge, s[n] = o ? e * i : this._items[n].width();
            this._widths = s
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var e = [],
                i = this._items,
                n = this.settings,
                o = Math.max(2 * n.items, 4),
                s = 2 * Math.ceil(i.length / 2),
                a = n.loop && i.length ? n.rewind ? o : Math.max(o, s) : 0,
                r = "",
                l = "";
            for (a /= 2; a--;) e.push(this.normalize(e.length / 2, !0)), r += i[e[e.length - 1]][0].outerHTML, e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)), l = i[e[e.length - 1]][0].outerHTML + l;
            this._clones = e, t(r).addClass("cloned").appendTo(this.$stage), t(l).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, n = 0, o = 0, s = []; ++i < e;) n = s[i - 1] || 0, o = this._widths[this.relative(i)] + this.settings.margin, s.push(n + o * t);
            this._coordinates = s
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var t = this.settings.stagePadding,
                e = this._coordinates,
                i = { width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t, "padding-right": t || "" };
            this.$stage.css(i)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = this._coordinates.length,
                i = !this.settings.autoWidth,
                n = this.$stage.children();
            if (i && t.items.merge)
                for (; e--;) t.css.width = this._widths[this.relative(e)], n.eq(e).css(t.css);
            else i && (t.css.width = t.items.width, n.css(t.css))
        }
    }, { filter: ["items"], run: function() { this._coordinates.length < 1 && this.$stage.removeAttr("style") } }, { filter: ["width", "items", "settings"], run: function(t) { t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current) } }, { filter: ["position"], run: function() { this.animate(this.coordinates(this._current)) } }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var t, e, i, n, o = this.settings.rtl ? 1 : -1,
                s = 2 * this.settings.stagePadding,
                a = this.coordinates(this.current()) + s,
                r = a + this.width() * o,
                l = [];
            for (i = 0, n = this._coordinates.length; i < n; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + s * o, (this.op(t, "<=", a) && this.op(t, ">", r) || this.op(e, "<", a) && this.op(e, ">", r)) && l.push(i);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
        }
    }], o.prototype.initialize = function() {
        var e, i, n;
        (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) && (e = this.$element.find("img"), i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : void 0, n = this.$element.children(i).width(), e.length && n <= 0 && this.preloadAutoWidthImages(e));
        this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, o.prototype.setup = function() {
        var e = this.viewport(),
            i = this.options.responsive,
            n = -1,
            o = null;
        i ? (t.each(i, function(t) { t <= e && t > n && (n = Number(t)) }), "function" == typeof(o = t.extend({}, this.options, i[n])).stagePadding && (o.stagePadding = o.stagePadding()), delete o.responsive, o.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + n))) : o = t.extend({}, this.options), this.trigger("change", { property: { name: "settings", value: o } }), this._breakpoint = n, this.settings = o, this.invalidate("settings"), this.trigger("changed", { property: { name: "settings", value: this.settings } })
    }, o.prototype.optionsLogic = function() { this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1) }, o.prototype.prepare = function(e) { var i = this.trigger("prepare", { content: e }); return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", { content: i.data }), i.data }, o.prototype.update = function() {
        for (var e = 0, i = this._pipe.length, n = t.proxy(function(t) { return this[t] }, this._invalidated), o = {}; e < i;)(this._invalidated.all || t.grep(this._pipe[e].filter, n).length > 0) && this._pipe[e].run(o), e++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, o.prototype.width = function(t) {
        switch (t = t || o.Width.Default) {
            case o.Width.Inner:
            case o.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, o.prototype.refresh = function() { this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed") }, o.prototype.onThrottledResize = function() { e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate) }, o.prototype.onResize = function() { return !!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized"))))) }, o.prototype.registerEventHandlers = function() { t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(e, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() { return !1 })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this))) }, o.prototype.onDragStart = function(e) {
        var n = null;
        3 !== e.which && (t.support.transform ? n = { x: (n = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === n.length ? 12 : 4], y: n[16 === n.length ? 13 : 5] } : (n = this.$stage.position(), n = { x: this.settings.rtl ? n.left + this.$stage.width() - this.width() + this.settings.margin : n.left, y: n.top }), this.is("animating") && (t.support.transform ? this.animate(n.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = t(e.target), this._drag.stage.start = n, this._drag.stage.current = n, this._drag.pointer = this.pointer(e), t(i).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(i).one("mousemove.owl.core touchmove.owl.core", t.proxy(function(e) {
            var n = this.difference(this._drag.pointer, this.pointer(e));
            t(i).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(n.x) < Math.abs(n.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, o.prototype.onDragMove = function(t) {
        var e = null,
            i = null,
            n = null,
            o = this.difference(this._drag.pointer, this.pointer(t)),
            s = this.difference(this._drag.stage.start, o);
        this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - e, s.x = ((s.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), n = this.settings.pullDrag ? -1 * o.x / 5 : 0, s.x = Math.max(Math.min(s.x, e + n), i + n)), this._drag.stage.current = s, this.animate(s.x))
    }, o.prototype.onDragEnd = function(e) {
        var n = this.difference(this._drag.pointer, this.pointer(e)),
            o = this._drag.stage.current,
            s = n.x > 0 ^ this.settings.rtl ? "left" : "right";
        t(i).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== n.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(o.x, 0 !== n.x ? s : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = s, (Math.abs(n.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() { return !1 })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, o.prototype.closest = function(e, i) {
        var n = -1,
            o = this.width(),
            s = this.coordinates();
        return this.settings.freeDrag || t.each(s, t.proxy(function(t, a) { return "left" === i && e > a - 30 && e < a + 30 ? n = t : "right" === i && e > a - o - 30 && e < a - o + 30 ? n = t + 1 : this.op(e, "<", a) && this.op(e, ">", s[t + 1] || a - o) && (n = "left" === i ? t + 1 : t), -1 === n }, this)), this.settings.loop || (this.op(e, ">", s[this.minimum()]) ? n = e = this.minimum() : this.op(e, "<", s[this.maximum()]) && (n = e = this.maximum())), n
    }, o.prototype.animate = function(e) {
        var i = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), i && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({ transform: "translate3d(" + e + "px,0px,0px)", transition: this.speed() / 1e3 + "s" }) : i ? this.$stage.animate({ left: e + "px" }, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({ left: e + "px" })
    }, o.prototype.is = function(t) { return this._states.current[t] && this._states.current[t] > 0 }, o.prototype.current = function(t) {
        if (void 0 === t) return this._current;
        if (0 !== this._items.length) {
            if (t = this.normalize(t), this._current !== t) {
                var e = this.trigger("change", { property: { name: "position", value: t } });
                void 0 !== e.data && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } })
            }
            return this._current
        }
    }, o.prototype.invalidate = function(e) { return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, function(t, e) { return e }) }, o.prototype.reset = function(t) { void 0 !== (t = this.normalize(t)) && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"])) }, o.prototype.normalize = function(t, e) {
        var i = this._items.length,
            n = e ? 0 : this._clones.length;
        return !this.isNumeric(t) || i < 1 ? t = void 0 : (t < 0 || t >= i + n) && (t = ((t - n / 2) % i + i) % i + n / 2), t
    }, o.prototype.relative = function(t) { return t -= this._clones.length / 2, this.normalize(t, !0) }, o.prototype.maximum = function(t) {
        var e, i, n, o = this.settings,
            s = this._coordinates.length;
        if (o.loop) s = this._clones.length / 2 + this._items.length - 1;
        else if (o.autoWidth || o.merge) {
            for (e = this._items.length, i = this._items[--e].width(), n = this.$element.width(); e-- && !((i += this._items[e].width() + this.settings.margin) > n););
            s = e + 1
        } else s = o.center ? this._items.length - 1 : this._items.length - o.items;
        return t && (s -= this._clones.length / 2), Math.max(s, 0)
    }, o.prototype.minimum = function(t) { return t ? 0 : this._clones.length / 2 }, o.prototype.items = function(t) { return void 0 === t ? this._items.slice() : (t = this.normalize(t, !0), this._items[t]) }, o.prototype.mergers = function(t) { return void 0 === t ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t]) }, o.prototype.clones = function(e) {
        var i = this._clones.length / 2,
            n = i + this._items.length,
            o = function(t) { return t % 2 == 0 ? n + t / 2 : i - (t + 1) / 2 };
        return void 0 === e ? t.map(this._clones, function(t, e) { return o(e) }) : t.map(this._clones, function(t, i) { return t === e ? o(i) : null })
    }, o.prototype.speed = function(t) { return void 0 !== t && (this._speed = t), this._speed }, o.prototype.coordinates = function(e) {
        var i, n = 1,
            o = e - 1;
        return void 0 === e ? t.map(this._coordinates, t.proxy(function(t, e) { return this.coordinates(e) }, this)) : (this.settings.center ? (this.settings.rtl && (n = -1, o = e + 1), i = this._coordinates[e], i += (this.width() - i + (this._coordinates[o] || 0)) / 2 * n) : i = this._coordinates[o] || 0, i = Math.ceil(i))
    }, o.prototype.duration = function(t, e, i) { return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed) }, o.prototype.to = function(t, e) {
        var i = this.current(),
            n = null,
            o = t - this.relative(i),
            s = this._items.length,
            a = this.minimum(),
            r = this.maximum();
        this.settings.loop ? (n = (((t = i + o) - a) % s + s) % s + a) !== t && n - o <= r && n - o > 0 && (i = n - o, t = n, this.reset(i)) : t = this.settings.rewind ? (t % (r += 1) + r) % r : Math.max(a, Math.min(r, t)), this.speed(this.duration(i, t, e)), this.current(t), this.$element.is(":visible") && this.update()
    }, o.prototype.next = function(t) { t = t || !1, this.to(this.relative(this.current()) + 1, t) }, o.prototype.prev = function(t) { t = t || !1, this.to(this.relative(this.current()) - 1, t) }, o.prototype.onTransitionEnd = function(t) {
        if (void 0 !== t && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated")
    }, o.prototype.viewport = function() { var n; return this.options.responsiveBaseElement !== e ? n = t(this.options.responsiveBaseElement).width() : e.innerWidth ? n = e.innerWidth : i.documentElement && i.documentElement.clientWidth ? n = i.documentElement.clientWidth : console.warn("Can not detect viewport width."), n }, o.prototype.replace = function(e) { this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function() { return 1 === this.nodeType }).each(t.proxy(function(t, e) { e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1) }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items") }, o.prototype.add = function(e, i) {
        var n = this.relative(this._current);
        i = void 0 === i ? this._items.length : this.normalize(i, !0), e = e instanceof jQuery ? e : t(e), this.trigger("add", { content: e, position: i }), e = this.prepare(e), 0 === this._items.length || i === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[i - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[i].before(e), this._items.splice(i, 0, e), this._mergers.splice(i, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[n] && this.reset(this._items[n].index()), this.invalidate("items"), this.trigger("added", { content: e, position: i })
    }, o.prototype.remove = function(t) { void 0 !== (t = this.normalize(t, !0)) && (this.trigger("remove", { content: this._items[t], position: t }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", { content: null, position: t })) }, o.prototype.preloadAutoWidthImages = function(e) { e.each(t.proxy(function(e, i) { this.enter("pre-loading"), i = t(i), t(new Image).one("load", t.proxy(function(t) { i.attr("src", t.target.src), i.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh() }, this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina")) }, this)) }, o.prototype.destroy = function() {
        for (var n in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(i).off(".owl.core"), !1 !== this.settings.responsive && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[n].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, o.prototype.op = function(t, e, i) {
        var n = this.settings.rtl;
        switch (e) {
            case "<":
                return n ? t > i : t < i;
            case ">":
                return n ? t < i : t > i;
            case ">=":
                return n ? t <= i : t >= i;
            case "<=":
                return n ? t >= i : t <= i
        }
    }, o.prototype.on = function(t, e, i, n) { t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i) }, o.prototype.off = function(t, e, i, n) { t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i) }, o.prototype.trigger = function(e, i, n, s, a) {
        var r = { item: { count: this._items.length, index: this.current() } },
            l = t.camelCase(t.grep(["on", e, n], function(t) { return t }).join("-").toLowerCase()),
            c = t.Event([e, "owl", n || "carousel"].join(".").toLowerCase(), t.extend({ relatedTarget: this }, r, i));
        return this._supress[e] || (t.each(this._plugins, function(t, e) { e.onTrigger && e.onTrigger(c) }), this.register({ type: o.Type.Event, name: e }), this.$element.trigger(c), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, c)), c
    }, o.prototype.enter = function(e) { t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) { void 0 === this._states.current[e] && (this._states.current[e] = 0), this._states.current[e]++ }, this)) }, o.prototype.leave = function(e) { t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) { this._states.current[e]-- }, this)) }, o.prototype.register = function(e) {
        if (e.type === o.Type.Event) {
            if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
                var i = t.event.special[e.name]._default;
                t.event.special[e.name]._default = function(t) { return !i || !i.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && t.namespace.indexOf("owl") > -1 : i.apply(this, arguments) }, t.event.special[e.name].owl = !0
            }
        } else e.type === o.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy(function(i, n) { return t.inArray(i, this._states.tags[e.name]) === n }, this)))
    }, o.prototype.suppress = function(e) { t.each(e, t.proxy(function(t, e) { this._supress[e] = !0 }, this)) }, o.prototype.release = function(e) { t.each(e, t.proxy(function(t, e) { delete this._supress[e] }, this)) }, o.prototype.pointer = function(t) { var i = { x: null, y: null }; return (t = (t = t.originalEvent || t || e.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (i.x = t.pageX, i.y = t.pageY) : (i.x = t.clientX, i.y = t.clientY), i }, o.prototype.isNumeric = function(t) { return !isNaN(parseFloat(t)) }, o.prototype.difference = function(t, e) { return { x: t.x - e.x, y: t.y - e.y } }, t.fn.owlCarousel = function(e) {
        var i = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var n = t(this),
                s = n.data("owl.carousel");
            s || (s = new o(this, "object" == typeof e && e), n.data("owl.carousel", s), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(e, i) { s.register({ type: o.Type.Event, name: i }), s.$element.on(i + ".owl.carousel.core", t.proxy(function(t) { t.namespace && t.relatedTarget !== this && (this.suppress([i]), s[i].apply(this, [].slice.call(arguments, 1)), this.release([i])) }, s)) })), "string" == typeof e && "_" !== e.charAt(0) && s[e].apply(s, i)
        })
    }, t.fn.owlCarousel.Constructor = o
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, n) {
    var o = function(e) {
        this._core = e, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(function(e) {
                if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))
                    for (var i = this._core.settings, n = i.center && Math.ceil(i.items / 2) || i.items, o = i.center && -1 * n || 0, s = (e.property && void 0 !== e.property.value ? e.property.value : this._core.current()) + o, a = this._core.clones().length, r = t.proxy(function(t, e) { this.load(e) }, this); o++ < n;) this.load(a / 2 + this._core.relative(s)), a && t.each(this._core.clones(this._core.relative(s)), r), s++
            }, this)
        }, this._core.options = t.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    o.Defaults = { lazyLoad: !1 }, o.prototype.load = function(i) {
        var n = this._core.$stage.children().eq(i),
            o = n && n.find(".owl-lazy");
        !o || t.inArray(n.get(0), this._loaded) > -1 || (o.each(t.proxy(function(i, n) {
            var o, s = t(n),
                a = e.devicePixelRatio > 1 && s.attr("data-src-retina") || s.attr("data-src");
            this._core.trigger("load", { element: s, url: a }, "lazy"), s.is("img") ? s.one("load.owl.lazy", t.proxy(function() { s.css("opacity", 1), this._core.trigger("loaded", { element: s, url: a }, "lazy") }, this)).attr("src", a) : ((o = new Image).onload = t.proxy(function() { s.css({ "background-image": 'url("' + a + '")', opacity: "1" }), this._core.trigger("loaded", { element: s, url: a }, "lazy") }, this), o.src = a)
        }, this)), this._loaded.push(n.get(0)))
    }, o.prototype.destroy = function() { var t, e; for (t in this.handlers) this._core.$element.off(t, this.handlers[t]); for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, t.fn.owlCarousel.Constructor.Plugins.Lazy = o
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, n) {
    var o = function(e) { this._core = e, this._timeout = null, this._paused = !1, this._handlers = { "changed.owl.carousel": t.proxy(function(t) { t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._core.settings.autoplay && this._setAutoPlayInterval() }, this), "initialized.owl.carousel": t.proxy(function(t) { t.namespace && this._core.settings.autoplay && this.play() }, this), "play.owl.autoplay": t.proxy(function(t, e, i) { t.namespace && this.play(e, i) }, this), "stop.owl.autoplay": t.proxy(function(t) { t.namespace && this.stop() }, this), "mouseover.owl.autoplay": t.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause() }, this), "mouseleave.owl.autoplay": t.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play() }, this), "touchstart.owl.core": t.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause() }, this), "touchend.owl.core": t.proxy(function() { this._core.settings.autoplayHoverPause && this.play() }, this) }, this._core.$element.on(this._handlers), this._core.options = t.extend({}, o.Defaults, this._core.options) };
    o.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }, o.prototype.play = function(t, e) { this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval()) }, o.prototype._getNextTimeout = function(n, o) { return this._timeout && e.clearTimeout(this._timeout), e.setTimeout(t.proxy(function() { this._paused || this._core.is("busy") || this._core.is("interacting") || i.hidden || this._core.next(o || this._core.settings.autoplaySpeed) }, this), n || this._core.settings.autoplayTimeout) }, o.prototype._setAutoPlayInterval = function() { this._timeout = this._getNextTimeout() }, o.prototype.stop = function() { this._core.is("rotating") && (e.clearTimeout(this._timeout), this._core.leave("rotating")) }, o.prototype.pause = function() { this._core.is("rotating") && (this._paused = !0) }, o.prototype.destroy = function() { var t, e; for (t in this.stop(), this._handlers) this._core.$element.off(t, this._handlers[t]); for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, t.fn.owlCarousel.Constructor.Plugins.autoplay = o
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, n) {
    "use strict";
    var o = function(e) { this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }, this._handlers = { "prepared.owl.carousel": t.proxy(function(e) { e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>") }, this), "added.owl.carousel": t.proxy(function(t) { t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop()) }, this), "remove.owl.carousel": t.proxy(function(t) { t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1) }, this), "changed.owl.carousel": t.proxy(function(t) { t.namespace && "position" == t.property.name && this.draw() }, this), "initialized.owl.carousel": t.proxy(function(t) { t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation")) }, this), "refreshed.owl.carousel": t.proxy(function(t) { t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")) }, this) }, this._core.options = t.extend({}, o.Defaults, this._core.options), this.$element.on(this._handlers) };
    o.Defaults = { nav: !1, navText: ["prev", "next"], navSpeed: !1, navElement: "div", navContainer: !1, navContainerClass: "owl-nav", navClass: ["owl-prev", "owl-next"], slideBy: 1, dotClass: "owl-dot", dotsClass: "owl-dots", dots: !0, dotsEach: !1, dotsData: !1, dotsSpeed: !1, dotsContainer: !1 }, o.prototype.initialize = function() {
        var e, i = this._core.settings;
        for (e in this._controls.$relative = (i.navContainer ? t(i.navContainer) : t("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy(function(t) { this.prev(i.navSpeed) }, this)), this._controls.$next = t("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy(function(t) { this.next(i.navSpeed) }, this)), i.dotsData || (this._templates = [t("<div>").addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? t(i.dotsContainer) : t("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", t.proxy(function(e) {
                var n = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
                e.preventDefault(), this.to(n, i.dotsSpeed)
            }, this)), this._overrides) this._core[e] = t.proxy(this[e], this)
    }, o.prototype.destroy = function() { var t, e, i, n; for (t in this._handlers) this.$element.off(t, this._handlers[t]); for (e in this._controls) this._controls[e].remove(); for (n in this.overides) this._core[n] = this._overrides[n]; for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null) }, o.prototype.update = function() {
        var t, e, i = this._core.clones().length / 2,
            n = i + this._core.items().length,
            o = this._core.maximum(!0),
            s = this._core.settings,
            a = s.center || s.autoWidth || s.dotsData ? 1 : s.dotsEach || s.items;
        if ("page" !== s.slideBy && (s.slideBy = Math.min(s.slideBy, s.items)), s.dots || "page" == s.slideBy)
            for (this._pages = [], t = i, e = 0, 0; t < n; t++) {
                if (e >= a || 0 === e) {
                    if (this._pages.push({ start: Math.min(o, t - i), end: t - i + a - 1 }), Math.min(o, t - i) === o) break;
                    e = 0, 0
                }
                e += this._core.mergers(this._core.relative(t))
            }
    }, o.prototype.draw = function() {
        var e, i = this._core.settings,
            n = this._core.items().length <= i.items,
            o = this._core.relative(this._core.current()),
            s = i.loop || i.rewind;
        this._controls.$relative.toggleClass("disabled", !i.nav || n), i.nav && (this._controls.$previous.toggleClass("disabled", !s && o <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !s && o >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !i.dots || n), i.dots && (e = this._pages.length - this._controls.$absolute.children().length, i.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0])) : e < 0 && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
    }, o.prototype.onTrigger = function(e) {
        var i = this._core.settings;
        e.page = { index: t.inArray(this.current(), this._pages), count: this._pages.length, size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items) }
    }, o.prototype.current = function() { var e = this._core.relative(this._core.current()); return t.grep(this._pages, t.proxy(function(t, i) { return t.start <= e && t.end >= e }, this)).pop() }, o.prototype.getPosition = function(e) { var i, n, o = this._core.settings; return "page" == o.slideBy ? (i = t.inArray(this.current(), this._pages), n = this._pages.length, e ? ++i : --i, i = this._pages[(i % n + n) % n].start) : (i = this._core.relative(this._core.current()), n = this._core.items().length, e ? i += o.slideBy : i -= o.slideBy), i }, o.prototype.next = function(e) { t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e) }, o.prototype.prev = function(e) { t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e) }, o.prototype.to = function(e, i, n) { var o;!n && this._pages.length ? (o = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % o + o) % o].start, i)) : t.proxy(this._overrides.to, this._core)(e, i) }, t.fn.owlCarousel.Constructor.Plugins.Navigation = o
}(window.Zepto || window.jQuery, window, document),
function(t, e) { "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e() }("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {},
                n = i[t] = i[t] || [];
            return -1 == n.indexOf(e) && n.push(e), this
        }
    }, e.once = function(t, e) { if (t && e) { this.on(t, e); var i = this._onceEvents = this._onceEvents || {}; return (i[t] = i[t] || {})[e] = !0, this } }, e.off = function(t, e) { var i = this._events && this._events[t]; if (i && i.length) { var n = i.indexOf(e); return -1 != n && i.splice(n, 1), this } }, e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = 0,
                o = i[n];
            e = e || [];
            for (var s = this._onceEvents && this._onceEvents[t]; o;) {
                var a = s && s[o];
                a && (this.off(t, o), delete s[o]), o.apply(this, e), o = i[n += a ? 0 : 1]
            }
            return this
        }
    }, e.allOff = e.removeAllListeners = function() { delete this._events, delete this._onceEvents }, t
}),
function(t, e) { "use strict"; "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) { return e(t, i) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter) }("undefined" != typeof window ? window : this, function(t, e) {
    function i(t, e) { for (var i in e) t[i] = e[i]; return t }

    function n(t, e, o) {
        return this instanceof n ? ("string" == typeof t && (t = document.querySelectorAll(t)), this.elements = function(t) {
            var e = [];
            if (Array.isArray(t)) e = t;
            else if ("number" == typeof t.length)
                for (var i = 0; i < t.length; i++) e.push(t[i]);
            else e.push(t);
            return e
        }(t), this.options = i({}, this.options), "function" == typeof e ? o = e : i(this.options, e), o && this.on("always", o), this.getImages(), a && (this.jqDeferred = new a.Deferred), void setTimeout(function() { this.check() }.bind(this))) : new n(t, e, o)
    }

    function o(t) { this.img = t }

    function s(t, e) { this.url = t, this.element = e, this.img = new Image }
    var a = t.jQuery,
        r = t.console;
    n.prototype = Object.create(e.prototype), n.prototype.options = {}, n.prototype.getImages = function() { this.images = [], this.elements.forEach(this.addElementImages, this) }, n.prototype.addElementImages = function(t) {
        "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && l[e]) {
            for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var o = i[n];
                this.addImage(o)
            }
            if ("string" == typeof this.options.background) {
                var s = t.querySelectorAll(this.options.background);
                for (n = 0; n < s.length; n++) {
                    var a = s[n];
                    this.addElementBackgroundImages(a)
                }
            }
        }
    };
    var l = { 1: !0, 9: !0, 11: !0 };
    return n.prototype.addElementBackgroundImages = function(t) {
        var e = getComputedStyle(t);
        if (e)
            for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
                var o = n && n[2];
                o && this.addBackground(o, t), n = i.exec(e.backgroundImage)
            }
    }, n.prototype.addImage = function(t) {
        var e = new o(t);
        this.images.push(e)
    }, n.prototype.addBackground = function(t, e) {
        var i = new s(t, e);
        this.images.push(i)
    }, n.prototype.check = function() {
        function t(t, i, n) { setTimeout(function() { e.progress(t, i, n) }) }
        var e = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(e) { e.once("progress", t), e.check() }) : void this.complete()
    }, n.prototype.progress = function(t, e, i) { this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && r && r.log("progress: " + i, t, e) }, n.prototype.complete = function() {
        var t = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var e = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[e](this)
        }
    }, o.prototype = Object.create(e.prototype), o.prototype.check = function() { return this.getIsImageComplete() ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src)) }, o.prototype.getIsImageComplete = function() { return this.img.complete && void 0 !== this.img.naturalWidth }, o.prototype.confirm = function(t, e) { this.isLoaded = t, this.emitEvent("progress", [this, this.img, e]) }, o.prototype.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, o.prototype.onload = function() { this.confirm(!0, "onload"), this.unbindEvents() }, o.prototype.onerror = function() { this.confirm(!1, "onerror"), this.unbindEvents() }, o.prototype.unbindEvents = function() { this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this) }, s.prototype = Object.create(o.prototype), s.prototype.check = function() { this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents()) }, s.prototype.unbindEvents = function() { this.img.removeEventListener("load", this), this.img.removeEventListener("error", this) }, s.prototype.confirm = function(t, e) { this.isLoaded = t, this.emitEvent("progress", [this, this.element, e]) }, n.makeJQueryPlugin = function(e) {
        (e = e || t.jQuery) && ((a = e).fn.imagesLoaded = function(t, e) { return new n(this, t, e).jqDeferred.promise(a(this)) })
    }, n.makeJQueryPlugin(), n
}), new function(t) {
    var e = t.separator || "&",
        i = !1 !== t.spaces,
        n = (t.suffix, !1 !== t.prefix ? !0 === t.hash ? "#" : "?" : ""),
        o = !1 !== t.numbers;
    jQuery.query = new function() {
        var t = function(t, e) { return null != t && null !== t && (!e || t.constructor == e) },
            s = function(t) { for (var e, i = /\[([^[]*)\]/g, n = /^([^[]+)(\[.*\])?$/.exec(t), o = n[1], s = []; e = i.exec(n[2]);) s.push(e[1]); return [o, s] },
            a = function(e, i, n) {
                var o = i.shift();
                if ("object" != typeof e && (e = null), "" === o)
                    if (e || (e = []), t(e, Array)) e.push(0 == i.length ? n : a(null, i.slice(0), n));
                    else if (t(e, Object)) {
                    for (var s = 0; null != e[s++];);
                    e[--s] = 0 == i.length ? n : a(e[s], i.slice(0), n)
                } else(e = []).push(0 == i.length ? n : a(null, i.slice(0), n));
                else if (o && o.match(/^\s*[0-9]+\s*$/)) { e || (e = []), e[r = parseInt(o, 10)] = 0 == i.length ? n : a(e[r], i.slice(0), n) } else {
                    if (!o) return n;
                    var r = o.replace(/^\s*|\s*$/g, "");
                    if (e || (e = {}), t(e, Array)) {
                        var l = {};
                        for (s = 0; s < e.length; ++s) l[s] = e[s];
                        e = l
                    }
                    e[r] = 0 == i.length ? n : a(e[r], i.slice(0), n)
                }
                return e
            },
            r = function(t) { var e = this; return e.keys = {}, t.queryObject ? jQuery.each(t.get(), function(t, i) { e.SET(t, i) }) : e.parseNew.apply(e, arguments), e };
        return r.prototype = {
            queryObject: !0,
            parseNew: function() {
                var t = this;
                return t.keys = {}, jQuery.each(arguments, function() {
                    var e = "" + this;
                    e = (e = e.replace(/^[?#]/, "")).replace(/[;&]$/, ""), i && (e = e.replace(/[+]/g, " ")), jQuery.each(e.split(/[&;]/), function() {
                        var e = decodeURIComponent(this.split("=")[0] || ""),
                            i = decodeURIComponent(this.split("=")[1] || "");
                        e && (o && (/^[+-]?[0-9]+\.[0-9]*$/.test(i) ? i = parseFloat(i) : /^[+-]?[1-9][0-9]*$/.test(i) && (i = parseInt(i, 10))), i = !i && 0 !== i || i, t.SET(e, i))
                    })
                }), t
            },
            has: function(e, i) { var n = this.get(e); return t(n, i) },
            GET: function(e) { if (!t(e)) return this.keys; for (var i = s(e), n = i[0], o = i[1], a = this.keys[n]; null != a && 0 != o.length;) a = a[o.shift()]; return "number" == typeof a ? a : a || "" },
            get: function(e) { var i = this.GET(e); return t(i, Object) ? jQuery.extend(!0, {}, i) : t(i, Array) ? i.slice(0) : i },
            SET: function(e, i) {
                var n = t(i) ? i : null,
                    o = s(e),
                    r = o[0],
                    l = o[1],
                    c = this.keys[r];
                return this.keys[r] = a(c, l.slice(0), n), this
            },
            set: function(t, e) { return this.copy().SET(t, e) },
            REMOVE: function(e, i) {
                if (i) {
                    var n = this.GET(e);
                    if (t(n, Array)) {
                        for (tval in n) n[tval] = n[tval].toString();
                        var o = $.inArray(i, n);
                        if (!(o >= 0)) return;
                        e = (e = n.splice(o, 1))[o]
                    } else if (i != n) return
                }
                return this.SET(e, null).COMPACT()
            },
            remove: function(t, e) { return this.copy().REMOVE(t, e) },
            EMPTY: function() { var t = this; return jQuery.each(t.keys, function(e, i) { delete t.keys[e] }), t },
            load: function(t) {
                var e = t.replace(/^.*?[#](.+?)(?:\?.+)?$/, "$1"),
                    i = t.replace(/^.*?[?](.+?)(?:#.+)?$/, "$1");
                return new r(t.length == i.length ? "" : i, t.length == e.length ? "" : e)
            },
            empty: function() { return this.copy().EMPTY() },
            copy: function() { return new r(this) },
            COMPACT: function() { return this.keys = function e(i) { var n = "object" == typeof i ? t(i, Array) ? [] : {} : i; "object" == typeof i && jQuery.each(i, function(i, o) { if (!t(o)) return !0;! function(e, i, n) { t(e, Array) ? e.push(n) : e[i] = n }(n, i, e(o)) }); return n }(this.keys), this },
            compact: function() { return this.copy().COMPACT() },
            toString: function() {
                var o = [],
                    s = [],
                    a = function(t) { return t += "", t = encodeURIComponent(t), i && (t = t.replace(/%20/g, "+")), t },
                    r = function(e, i) {
                        var n = function(t) { return i && "" != i ? [i, "[", t, "]"].join("") : [t].join("") };
                        jQuery.each(e, function(e, i) { "object" == typeof i ? r(i, n(e)) : function(e, i, n) { if (t(n) && !1 !== n) { var o = [a(i)];!0 !== n && (o.push("="), o.push(a(n))), e.push(o.join("")) } }(s, n(e), i) })
                    };
                return r(this.keys), s.length > 0 && o.push(n), o.push(s.join(e)), o.join("")
            }
        }, new r(location.search, location.hash)
    }
}(jQuery.query || {}),
function(t) {
    "use strict";
    if ("function" == typeof define && define.amd) define(["jquery", "moment"], t);
    else if ("object" == typeof exports) module.exports = t(require("jquery"), require("moment"));
    else {
        if ("undefined" == typeof jQuery) throw "bootstrap-datetimepicker requires jQuery to be loaded first";
        if ("undefined" == typeof moment) throw "bootstrap-datetimepicker requires Moment.js to be loaded first";
        t(jQuery, moment)
    }
}(function(t, e) {
    "use strict";
    if (!e) throw new Error("bootstrap-datetimepicker requires Moment.js to be loaded first");
    var i = function(i, n) {
        var o, s, a, r, l, c, d, h = {},
            u = !0,
            p = !1,
            f = !1,
            m = 0,
            g = [{ clsName: "days", navFnc: "M", navStep: 1 }, { clsName: "months", navFnc: "y", navStep: 1 }, { clsName: "years", navFnc: "y", navStep: 10 }, { clsName: "decades", navFnc: "y", navStep: 100 }],
            v = ["days", "months", "years", "decades"],
            y = ["top", "bottom", "auto"],
            b = ["left", "right", "auto"],
            _ = ["default", "top", "bottom"],
            w = { up: 38, 38: "up", down: 40, 40: "down", left: 37, 37: "left", right: 39, 39: "right", tab: 9, 9: "tab", escape: 27, 27: "escape", enter: 13, 13: "enter", pageUp: 33, 33: "pageUp", pageDown: 34, 34: "pageDown", shift: 16, 16: "shift", control: 17, 17: "control", space: 32, 32: "space", t: 84, 84: "t", delete: 46, 46: "delete" },
            x = {},
            $ = function() { return void 0 !== e.tz && void 0 !== n.timeZone && null !== n.timeZone && "" !== n.timeZone },
            k = function(t) { var i; return i = null == t ? e() : e.isDate(t) || e.isMoment(t) ? e(t) : $() ? e.tz(t, c, n.useStrict, n.timeZone) : e(t, c, n.useStrict), $() && i.tz(n.timeZone), i },
            T = function(t) {
                if ("string" != typeof t || t.length > 1) throw new TypeError("isEnabled expects a single character string parameter");
                switch (t) {
                    case "y":
                        return -1 !== l.indexOf("Y");
                    case "M":
                        return -1 !== l.indexOf("M");
                    case "d":
                        return -1 !== l.toLowerCase().indexOf("d");
                    case "h":
                    case "H":
                        return -1 !== l.toLowerCase().indexOf("h");
                    case "m":
                        return -1 !== l.indexOf("m");
                    case "s":
                        return -1 !== l.indexOf("s");
                    default:
                        return !1
                }
            },
            S = function() { return T("h") || T("m") || T("s") },
            C = function() { return T("y") || T("M") || T("d") },
            D = function() {
                var e = t("<tr>"),
                    i = t("<tr>"),
                    o = t("<tr>");
                return T("h") && (e.append(t("<td>").append(t("<a>").attr({ href: "#", tabindex: "-1", title: n.tooltips.incrementHour }).addClass("btn").attr("data-action", "incrementHours").append(t("<span>").addClass(n.icons.up)))), i.append(t("<td>").append(t("<span>").addClass("timepicker-hour").attr({ "data-time-component": "hours", title: n.tooltips.pickHour }).attr("data-action", "showHours"))), o.append(t("<td>").append(t("<a>").attr({ href: "#", tabindex: "-1", title: n.tooltips.decrementHour }).addClass("btn").attr("data-action", "decrementHours").append(t("<span>").addClass(n.icons.down))))), T("m") && (T("h") && (e.append(t("<td>").addClass("separator")), i.append(t("<td>").addClass("separator").html(":")), o.append(t("<td>").addClass("separator"))), e.append(t("<td>").append(t("<a>").attr({ href: "#", tabindex: "-1", title: n.tooltips.incrementMinute }).addClass("btn").attr("data-action", "incrementMinutes").append(t("<span>").addClass(n.icons.up)))), i.append(t("<td>").append(t("<span>").addClass("timepicker-minute").attr({ "data-time-component": "minutes", title: n.tooltips.pickMinute }).attr("data-action", "showMinutes"))), o.append(t("<td>").append(t("<a>").attr({ href: "#", tabindex: "-1", title: n.tooltips.decrementMinute }).addClass("btn").attr("data-action", "decrementMinutes").append(t("<span>").addClass(n.icons.down))))), T("s") && (T("m") && (e.append(t("<td>").addClass("separator")), i.append(t("<td>").addClass("separator").html(":")), o.append(t("<td>").addClass("separator"))), e.append(t("<td>").append(t("<a>").attr({ href: "#", tabindex: "-1", title: n.tooltips.incrementSecond }).addClass("btn").attr("data-action", "incrementSeconds").append(t("<span>").addClass(n.icons.up)))), i.append(t("<td>").append(t("<span>").addClass("timepicker-second").attr({ "data-time-component": "seconds", title: n.tooltips.pickSecond }).attr("data-action", "showSeconds"))), o.append(t("<td>").append(t("<a>").attr({ href: "#", tabindex: "-1", title: n.tooltips.decrementSecond }).addClass("btn").attr("data-action", "decrementSeconds").append(t("<span>").addClass(n.icons.down))))), r || (e.append(t("<td>").addClass("separator")), i.append(t("<td>").append(t("<button>").addClass("btn btn-primary").attr({ "data-action": "togglePeriod", tabindex: "-1", title: n.tooltips.togglePeriod }))), o.append(t("<td>").addClass("separator"))), t("<div>").addClass("timepicker-picker").append(t("<table>").addClass("table-condensed").append([e, i, o]))
            },
            M = function() {
                var e = t("<div>").addClass("bootstrap-datetimepicker-widget dropdown-menu"),
                    i = t("<div>").addClass("datepicker").append(function() {
                        var e = t("<thead>").append(t("<tr>").append(t("<th>").addClass("prev").attr("data-action", "previous").append(t("<span>").addClass(n.icons.previous))).append(t("<th>").addClass("picker-switch").attr("data-action", "pickerSwitch").attr("colspan", n.calendarWeeks ? "6" : "5")).append(t("<th>").addClass("next").attr("data-action", "next").append(t("<span>").addClass(n.icons.next)))),
                            i = t("<tbody>").append(t("<tr>").append(t("<td>").attr("colspan", n.calendarWeeks ? "8" : "7")));
                        return [t("<div>").addClass("datepicker-days").append(t("<table>").addClass("table-condensed").append(e).append(t("<tbody>"))), t("<div>").addClass("datepicker-months").append(t("<table>").addClass("table-condensed").append(e.clone()).append(i.clone())), t("<div>").addClass("datepicker-years").append(t("<table>").addClass("table-condensed").append(e.clone()).append(i.clone())), t("<div>").addClass("datepicker-decades").append(t("<table>").addClass("table-condensed").append(e.clone()).append(i.clone()))]
                    }()),
                    o = t("<div>").addClass("timepicker").append(function() {
                        var e = t("<div>").addClass("timepicker-hours").append(t("<table>").addClass("table-condensed")),
                            i = t("<div>").addClass("timepicker-minutes").append(t("<table>").addClass("table-condensed")),
                            n = t("<div>").addClass("timepicker-seconds").append(t("<table>").addClass("table-condensed")),
                            o = [D()];
                        return T("h") && o.push(e), T("m") && o.push(i), T("s") && o.push(n), o
                    }()),
                    s = t("<ul>").addClass("list-unstyled"),
                    a = t("<li>").addClass("picker-switch" + (n.collapse ? " accordion-toggle" : "")).append(function() { var e = []; return n.showTodayButton && e.push(t("<td>").append(t("<a>").attr({ "data-action": "today", title: n.tooltips.today }).append(t("<span>").addClass(n.icons.today)))), !n.sideBySide && C() && S() && e.push(t("<td>").append(t("<a>").attr({ "data-action": "togglePicker", title: n.tooltips.selectTime }).append(t("<span>").addClass(n.icons.time).html("<p class='select-time-picker'>Chọn giờ</p>")))), n.showClear && e.push(t("<td>").append(t("<a>").attr({ "data-action": "clear", title: n.tooltips.clear }).append(t("<span>").addClass(n.icons.clear)))), n.showClose && e.push(t("<td>").append(t("<a>").attr({ "data-action": "close", title: n.tooltips.close }).append(t("<span>").addClass(n.icons.close)))), t("<table>").addClass("table-condensed").append(t("<tbody>").append(t("<tr>").append(e))) }());
                return n.inline && e.removeClass("dropdown-menu"), r && e.addClass("usetwentyfour"), T("s") && !r && e.addClass("wider"), n.sideBySide && C() && S() ? (e.addClass("timepicker-sbs"), "top" === n.toolbarPlacement && e.append(a), e.append(t("<div>").addClass("row").append(i.addClass("col-md-6")).append(o.addClass("col-md-6"))), "bottom" === n.toolbarPlacement && e.append(a), e) : ("top" === n.toolbarPlacement && s.append(a), C() && s.append(t("<li>").addClass(n.collapse && S() ? "collapse in" : "").append(i)), "default" === n.toolbarPlacement && s.append(a), S() && s.append(t("<li>").addClass(n.collapse && C() ? "collapse" : "").append(o)), "bottom" === n.toolbarPlacement && s.append(a), e.append(s))
            },
            I = function() {
                var e, o = (p || i).position(),
                    s = (p || i).offset(),
                    a = n.widgetPositioning.vertical,
                    r = n.widgetPositioning.horizontal;
                if (n.widgetParent) e = n.widgetParent.append(f);
                else if (i.is("input")) e = i.after(f).parent();
                else {
                    if (n.inline) return void(e = i.append(f));
                    e = i, i.children().first().after(f)
                }
                if ("auto" === a && (a = s.top + 1.5 * f.height() >= t(window).height() + t(window).scrollTop() && f.height() + i.outerHeight() < s.top ? "top" : "bottom"), "auto" === r && (r = e.width() < s.left + f.outerWidth() / 2 && s.left + f.outerWidth() > t(window).width() ? "right" : "left"), "top" === a ? f.addClass("top").removeClass("bottom") : f.addClass("bottom").removeClass("top"), "right" === r ? f.addClass("pull-right") : f.removeClass("pull-right"), "static" === e.css("position") && (e = e.parents().filter(function() { return "static" !== t(this).css("position") }).first()), 0 === e.length) throw new Error("datetimepicker component should be placed within a non-static positioned container");
                f.css({ top: "top" === a ? "auto" : o.top + i.outerHeight(), bottom: "top" === a ? e.outerHeight() - (e === i ? 0 : o.top) : "auto", left: "left" === r ? e === i ? 0 : o.left : "auto", right: "left" === r ? "auto" : e.outerWidth() - i.outerWidth() - (e === i ? 0 : o.left) })
            },
            A = function(t) { "dp.change" === t.type && (t.date && t.date.isSame(t.oldDate) || !t.date && !t.oldDate) || i.trigger(t) },
            L = function(t) { "y" === t && (t = "YYYY"), A({ type: "dp.update", change: t, viewDate: s.clone() }) },
            P = function(t) { f && (t && (d = Math.max(m, Math.min(3, d + t))), f.find(".datepicker > div").hide().filter(".datepicker-" + g[d].clsName).show()) },
            E = function(e, i) { if (!e.isValid()) return !1; if (n.disabledDates && "d" === i && function(t) { return !0 === n.disabledDates[t.format("YYYY-MM-DD")] }(e)) return !1; if (n.enabledDates && "d" === i && ! function(t) { return !0 === n.enabledDates[t.format("YYYY-MM-DD")] }(e)) return !1; if (n.minDate && e.isBefore(n.minDate, i)) return !1; if (n.maxDate && e.isAfter(n.maxDate, i)) return !1; if (n.daysOfWeekDisabled && "d" === i && -1 !== n.daysOfWeekDisabled.indexOf(e.day())) return !1; if (n.disabledHours && ("h" === i || "m" === i || "s" === i) && function(t) { return !0 === n.disabledHours[t.format("H")] }(e)) return !1; if (n.enabledHours && ("h" === i || "m" === i || "s" === i) && ! function(t) { return !0 === n.enabledHours[t.format("H")] }(e)) return !1; if (n.disabledTimeIntervals && ("h" === i || "m" === i || "s" === i)) { var o = !1; if (t.each(n.disabledTimeIntervals, function() { if (e.isBetween(this[0], this[1])) return o = !0, !1 }), o) return !1 } return !0 },
            F = function() {
                var t, i = f.find(".datepicker-decades"),
                    a = i.find("th"),
                    r = e({ y: s.year() - s.year() % 100 - 1 }),
                    l = r.clone().add(100, "y"),
                    c = r.clone(),
                    d = !1,
                    h = !1,
                    u = "";
                for (a.eq(0).find("span").attr("title", n.tooltips.prevCentury), a.eq(2).find("span").attr("title", n.tooltips.nextCentury), i.find(".disabled").removeClass("disabled"), (r.isSame(e({ y: 1900 })) || n.minDate && n.minDate.isAfter(r, "y")) && a.eq(0).addClass("disabled"), a.eq(1).text(r.year() + "-" + l.year()), (r.isSame(e({ y: 2e3 })) || n.maxDate && n.maxDate.isBefore(l, "y")) && a.eq(2).addClass("disabled"); !r.isAfter(l, "y");) t = r.year() + 12, d = n.minDate && n.minDate.isAfter(r, "y") && n.minDate.year() <= t, h = n.maxDate && n.maxDate.isAfter(r, "y") && n.maxDate.year() <= t, u += '<span data-action="selectDecade" class="decade' + (o.isAfter(r) && o.year() <= t ? " active" : "") + (E(r, "y") || d || h ? "" : " disabled") + '" data-selection="' + (r.year() + 6) + '">' + (r.year() + 1) + " - " + (r.year() + 12) + "</span>", r.add(12, "y");
                u += "<span></span><span></span><span></span>", i.find("td").html(u), a.eq(1).text(c.year() + 1 + "-" + r.year())
            },
            O = function() {
                var e, i, a, r = f.find(".datepicker-days"),
                    l = r.find("th"),
                    c = [],
                    d = [];
                if (C()) {
                    for (l.eq(0).find("span").attr("title", n.tooltips.prevMonth), l.eq(1).attr("title", n.tooltips.selectMonth), l.eq(2).find("span").attr("title", n.tooltips.nextMonth), r.find(".disabled").removeClass("disabled"), l.eq(1).text(s.format(n.dayViewHeaderFormat)), E(s.clone().subtract(1, "M"), "M") || l.eq(0).addClass("disabled"), E(s.clone().add(1, "M"), "M") || l.eq(2).addClass("disabled"), e = s.clone().startOf("M").startOf("w").startOf("d"), a = 0; a < 42; a++) 0 === e.weekday() && (i = t("<tr>"), n.calendarWeeks && i.append('<td class="cw">' + e.week() + "</td>"), c.push(i)), d = ["day"], e.isBefore(s, "M") && d.push("old"), e.isAfter(s, "M") && d.push("new"), e.isSame(o, "d") && !u && d.push("active"), E(e, "d") || d.push("disabled"), e.isSame(k(), "d") && d.push("today"), 0 !== e.day() && 6 !== e.day() || d.push("weekend"), A({ type: "dp.classify", date: e, classNames: d }), i.append('<td data-action="selectDay" data-day="' + e.format("L") + '" class="' + d.join(" ") + '">' + e.date() + "</td>"), e.add(1, "d");
                    r.find("tbody").empty().append(c),
                        function() {
                            var e = f.find(".datepicker-months"),
                                i = e.find("th"),
                                a = e.find("tbody").find("span");
                            i.eq(0).find("span").attr("title", n.tooltips.prevYear), i.eq(1).attr("title", n.tooltips.selectYear), i.eq(2).find("span").attr("title", n.tooltips.nextYear), e.find(".disabled").removeClass("disabled"), E(s.clone().subtract(1, "y"), "y") || i.eq(0).addClass("disabled"), i.eq(1).text(s.year()), E(s.clone().add(1, "y"), "y") || i.eq(2).addClass("disabled"), a.removeClass("active"), o.isSame(s, "y") && !u && a.eq(o.month()).addClass("active"), a.each(function(e) { E(s.clone().month(e), "M") || t(this).addClass("disabled") })
                        }(),
                        function() {
                            var t = f.find(".datepicker-years"),
                                e = t.find("th"),
                                i = s.clone().subtract(5, "y"),
                                a = s.clone().add(6, "y"),
                                r = "";
                            for (e.eq(0).find("span").attr("title", n.tooltips.prevDecade), e.eq(1).attr("title", n.tooltips.selectDecade), e.eq(2).find("span").attr("title", n.tooltips.nextDecade), t.find(".disabled").removeClass("disabled"), n.minDate && n.minDate.isAfter(i, "y") && e.eq(0).addClass("disabled"), e.eq(1).text(i.year() + "-" + a.year()), n.maxDate && n.maxDate.isBefore(a, "y") && e.eq(2).addClass("disabled"); !i.isAfter(a, "y");) r += '<span data-action="selectYear" class="year' + (i.isSame(o, "y") && !u ? " active" : "") + (E(i, "y") ? "" : " disabled") + '">' + i.year() + "</span>", i.add(1, "y");
                            t.find("td").html(r)
                        }(), F()
                }
            },
            N = function() {
                var e = f.find(".timepicker-hours table"),
                    i = s.clone().startOf("d"),
                    n = [],
                    o = t("<tr>");
                for (s.hour() > 11 && !r && i.hour(12); i.isSame(s, "d") && (r || s.hour() < 12 && i.hour() < 12 || s.hour() > 11);) i.hour() % 4 == 0 && (o = t("<tr>"), n.push(o)), o.append('<td data-action="selectHour" class="hour' + (E(i, "h") ? "" : " disabled") + '">' + i.format(r ? "HH" : "hh") + "</td>"), i.add(1, "h");
                e.empty().append(n)
            },
            Y = function() {
                for (var e = f.find(".timepicker-minutes table"), i = s.clone().startOf("h"), o = [], a = t("<tr>"), r = 1 === n.stepping ? 5 : n.stepping; s.isSame(i, "h");) i.minute() % (4 * r) == 0 && (a = t("<tr>"), o.push(a)), a.append('<td data-action="selectMinute" class="minute' + (E(i, "m") ? "" : " disabled") + '">' + i.format("mm") + "</td>"), i.add(r, "m");
                e.empty().append(o)
            },
            q = function() {
                for (var e = f.find(".timepicker-seconds table"), i = s.clone().startOf("m"), n = [], o = t("<tr>"); s.isSame(i, "m");) i.second() % 20 == 0 && (o = t("<tr>"), n.push(o)), o.append('<td data-action="selectSecond" class="second' + (E(i, "s") ? "" : " disabled") + '">' + i.format("ss") + "</td>"), i.add(5, "s");
                e.empty().append(n)
            },
            j = function() {
                var t, e, i;
                f && (O(), i = f.find(".timepicker span[data-time-component]"), r || (t = f.find(".timepicker [data-action=togglePeriod]"), e = o.clone().add(o.hours() >= 12 ? -12 : 12, "h"), t.text(o.format("A")), E(e, "h") ? t.removeClass("disabled") : t.addClass("disabled")), i.filter("[data-time-component=hours]").text(o.format(r ? "HH" : "hh")), i.filter("[data-time-component=minutes]").text(o.format("mm")), i.filter("[data-time-component=seconds]").text(o.format("ss")), N(), Y(), q())
            },
            H = function(t) {
                var e = u ? null : o;
                if (!t) return u = !0, a.val(""), i.data("date", ""), A({ type: "dp.change", date: !1, oldDate: e }), void j();
                if (t = t.clone().locale(n.locale), $() && t.tz(n.timeZone), 1 !== n.stepping)
                    for (t.minutes(Math.round(t.minutes() / n.stepping) * n.stepping).seconds(0); n.minDate && t.isBefore(n.minDate);) t.add(n.stepping, "minutes");
                E(t) ? (s = (o = t).clone(), a.val(o.format(l)), i.data("date", o.format(l)), u = !1, j(), A({ type: "dp.change", date: o.clone(), oldDate: e })) : (n.keepInvalid ? A({ type: "dp.change", date: t, oldDate: e }) : a.val(u ? "" : o.format(l)), A({ type: "dp.error", date: t, oldDate: e }))
            },
            V = function() { var e = !1; return f ? (f.find(".collapse").each(function() { var i = t(this).data("collapse"); return !i || !i.transitioning || (e = !0, !1) }), e ? h : (p && p.hasClass("btn") && p.toggleClass("active"), f.hide(), t(window).off("resize", I), f.off("click", "[data-action]"), f.off("mousedown", !1), f.remove(), f = !1, A({ type: "dp.hide", date: o.clone() }), a.blur(), s = o.clone(), h)) : h },
            R = function() { H(null) },
            U = function(t) { return void 0 === n.parseInputDate ? (!e.isMoment(t) || t instanceof Date) && (t = k(t)) : t = n.parseInputDate(t), t },
            W = {
                next: function() {
                    var t = g[d].navFnc;
                    s.add(g[d].navStep, t), O(), L(t)
                },
                previous: function() {
                    var t = g[d].navFnc;
                    s.subtract(g[d].navStep, t), O(), L(t)
                },
                pickerSwitch: function() { P(1) },
                selectMonth: function(e) {
                    var i = t(e.target).closest("tbody").find("span").index(t(e.target));
                    s.month(i), d === m ? (H(o.clone().year(s.year()).month(s.month())), n.inline || V()) : (P(-1), O()), L("M")
                },
                selectYear: function(e) {
                    var i = parseInt(t(e.target).text(), 10) || 0;
                    s.year(i), d === m ? (H(o.clone().year(s.year())), n.inline || V()) : (P(-1), O()), L("YYYY")
                },
                selectDecade: function(e) {
                    var i = parseInt(t(e.target).data("selection"), 10) || 0;
                    s.year(i), d === m ? (H(o.clone().year(s.year())), n.inline || V()) : (P(-1), O()), L("YYYY")
                },
                selectDay: function(e) {
                    var i = s.clone();
                    t(e.target).is(".old") && i.subtract(1, "M"), t(e.target).is(".new") && i.add(1, "M"), H(i.date(parseInt(t(e.target).text(), 10))), S() || n.keepOpen || n.inline || V()
                },
                incrementHours: function() {
                    var t = o.clone().add(1, "h");
                    E(t, "h") && H(t)
                },
                incrementMinutes: function() {
                    var t = o.clone().add(n.stepping, "m");
                    E(t, "m") && H(t)
                },
                incrementSeconds: function() {
                    var t = o.clone().add(1, "s");
                    E(t, "s") && H(t)
                },
                decrementHours: function() {
                    var t = o.clone().subtract(1, "h");
                    E(t, "h") && H(t)
                },
                decrementMinutes: function() {
                    var t = o.clone().subtract(n.stepping, "m");
                    E(t, "m") && H(t)
                },
                decrementSeconds: function() {
                    var t = o.clone().subtract(1, "s");
                    E(t, "s") && H(t)
                },
                togglePeriod: function() { H(o.clone().add(o.hours() >= 12 ? -12 : 12, "h")) },
                togglePicker: function(e) {
                    var i, o = t(e.target),
                        s = o.closest("ul"),
                        a = s.find(".in"),
                        r = s.find(".collapse:not(.in)");
                    if (a && a.length) {
                        if ((i = a.data("collapse")) && i.transitioning) return;
                        a.collapse ? (a.collapse("hide"), r.collapse("show")) : (a.removeClass("in"), r.addClass("in")), o.is("span") ? o.toggleClass(n.icons.time + " " + n.icons.date) : o.find("span").toggleClass(n.icons.time + " " + n.icons.date)
                    }
                },
                showPicker: function() { f.find(".timepicker > div:not(.timepicker-picker)").hide(), f.find(".timepicker .timepicker-picker").show() },
                showHours: function() { f.find(".timepicker .timepicker-picker").hide(), f.find(".timepicker .timepicker-hours").show() },
                showMinutes: function() { f.find(".timepicker .timepicker-picker").hide(), f.find(".timepicker .timepicker-minutes").show() },
                showSeconds: function() { f.find(".timepicker .timepicker-picker").hide(), f.find(".timepicker .timepicker-seconds").show() },
                selectHour: function(e) {
                    var i = parseInt(t(e.target).text(), 10);
                    r || (o.hours() >= 12 ? 12 !== i && (i += 12) : 12 === i && (i = 0)), H(o.clone().hours(i)), W.showPicker.call(h)
                },
                selectMinute: function(e) { H(o.clone().minutes(parseInt(t(e.target).text(), 10))), W.showPicker.call(h) },
                selectSecond: function(e) { H(o.clone().seconds(parseInt(t(e.target).text(), 10))), W.showPicker.call(h) },
                clear: R,
                today: function() {
                    var t = k();
                    E(t, "d") && H(t)
                },
                close: V
            },
            z = function(e) { return !t(e.currentTarget).is(".disabled") && (W[t(e.currentTarget).data("action")].apply(h, arguments), !1) },
            B = function() {
                var e;
                return a.prop("disabled") || !n.ignoreReadonly && a.prop("readonly") || f ? h : (void 0 !== a.val() && 0 !== a.val().trim().length ? H(U(a.val().trim())) : u && n.useCurrent && (n.inline || a.is("input") && 0 === a.val().trim().length) && (e = k(), "string" == typeof n.useCurrent && (e = { year: function(t) { return t.month(0).date(1).hours(0).seconds(0).minutes(0) }, month: function(t) { return t.date(1).hours(0).seconds(0).minutes(0) }, day: function(t) { return t.hours(0).seconds(0).minutes(0) }, hour: function(t) { return t.seconds(0).minutes(0) }, minute: function(t) { return t.seconds(0) } }[n.useCurrent](e)), H(e)), f = M(), function() {
                    var e = t("<tr>"),
                        i = s.clone().startOf("w").startOf("d");
                    for (!0 === n.calendarWeeks && e.append(t("<th>").addClass("cw").text("#")); i.isBefore(s.clone().endOf("w"));) e.append(t("<th>").addClass("dow").text(i.format("dd"))), i.add(1, "d");
                    f.find(".datepicker-days thead").append(e)
                }(), function() {
                    for (var e = [], i = s.clone().startOf("y").startOf("d"); i.isSame(s, "y");) e.push(t("<span>").attr("data-action", "selectMonth").addClass("month").text(i.format("MMM"))), i.add(1, "M");
                    f.find(".datepicker-months td").empty().append(e)
                }(), f.find(".timepicker-hours").hide(), f.find(".timepicker-minutes").hide(), f.find(".timepicker-seconds").hide(), j(), P(), t(window).on("resize", I), f.on("click", "[data-action]", z), f.on("mousedown", !1), p && p.hasClass("btn") && p.toggleClass("active"), I(), f.show(), n.focusOnShow && !a.is(":focus") && a.focus(), A({ type: "dp.show" }), h)
            },
            G = function() { return f ? V() : B() },
            X = function(t) {
                var e, i, o, s, a = null,
                    r = [],
                    l = {},
                    c = t.which;
                for (e in x[c] = "p", x) x.hasOwnProperty(e) && "p" === x[e] && (r.push(e), parseInt(e, 10) !== c && (l[e] = !0));
                for (e in n.keyBinds)
                    if (n.keyBinds.hasOwnProperty(e) && "function" == typeof n.keyBinds[e] && ((o = e.split(" ")).length === r.length && w[c] === o[o.length - 1])) {
                        for (s = !0, i = o.length - 2; i >= 0; i--)
                            if (!(w[o[i]] in l)) { s = !1; break }
                        if (s) { a = n.keyBinds[e]; break }
                    }
                a && (a.call(h, f), t.stopPropagation(), t.preventDefault())
            },
            Z = function(t) { x[t.which] = "r", t.stopPropagation(), t.preventDefault() },
            Q = function(e) {
                var i = t(e.target).val().trim(),
                    n = i ? U(i) : null;
                return H(n), e.stopImmediatePropagation(), !1
            },
            J = function(e) {
                var i = {};
                return t.each(e, function() {
                    var t = U(this);
                    t.isValid() && (i[t.format("YYYY-MM-DD")] = !0)
                }), !!Object.keys(i).length && i
            },
            K = function(e) { var i = {}; return t.each(e, function() { i[this] = !0 }), !!Object.keys(i).length && i },
            tt = function() {
                var t = n.format || "L LT";
                l = t.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function(t) { return (o.localeData().longDateFormat(t) || t).replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function(t) { return o.localeData().longDateFormat(t) || t }) }), (c = n.extraFormats ? n.extraFormats.slice() : []).indexOf(t) < 0 && c.indexOf(l) < 0 && c.push(l), r = l.toLowerCase().indexOf("a") < 1 && l.replace(/\[.*?\]/g, "").indexOf("h") < 1, T("y") && (m = 2), T("M") && (m = 1), T("d") && (m = 0), d = Math.max(m, d), u || H(o)
            };
        if (h.destroy = function() { V(), a.off({ change: Q, blur: blur, keydown: X, keyup: Z, focus: n.allowInputToggle ? V : "" }), i.is("input") ? a.off({ focus: B }) : p && (p.off("click", G), p.off("mousedown", !1)), i.removeData("DateTimePicker"), i.removeData("date") }, h.toggle = G, h.show = B, h.hide = V, h.disable = function() { return V(), p && p.hasClass("btn") && p.addClass("disabled"), a.prop("disabled", !0), h }, h.enable = function() { return p && p.hasClass("btn") && p.removeClass("disabled"), a.prop("disabled", !1), h }, h.ignoreReadonly = function(t) { if (0 === arguments.length) return n.ignoreReadonly; if ("boolean" != typeof t) throw new TypeError("ignoreReadonly () expects a boolean parameter"); return n.ignoreReadonly = t, h }, h.options = function(e) {
                if (0 === arguments.length) return t.extend(!0, {}, n);
                if (!(e instanceof Object)) throw new TypeError("options() options parameter should be an object");
                return t.extend(!0, n, e), t.each(n, function(t, e) {
                    if (void 0 === h[t]) throw new TypeError("option " + t + " is not recognized!");
                    h[t](e)
                }), h
            }, h.date = function(t) { if (0 === arguments.length) return u ? null : o.clone(); if (!(null === t || "string" == typeof t || e.isMoment(t) || t instanceof Date)) throw new TypeError("date() parameter must be one of [null, string, moment or Date]"); return H(null === t ? null : U(t)), h }, h.format = function(t) { if (0 === arguments.length) return n.format; if ("string" != typeof t && ("boolean" != typeof t || !1 !== t)) throw new TypeError("format() expects a string or boolean:false parameter " + t); return n.format = t, l && tt(), h }, h.timeZone = function(t) { if (0 === arguments.length) return n.timeZone; if ("string" != typeof t) throw new TypeError("newZone() expects a string parameter"); return n.timeZone = t, h }, h.dayViewHeaderFormat = function(t) { if (0 === arguments.length) return n.dayViewHeaderFormat; if ("string" != typeof t) throw new TypeError("dayViewHeaderFormat() expects a string parameter"); return n.dayViewHeaderFormat = t, h }, h.extraFormats = function(t) { if (0 === arguments.length) return n.extraFormats; if (!1 !== t && !(t instanceof Array)) throw new TypeError("extraFormats() expects an array or false parameter"); return n.extraFormats = t, c && tt(), h }, h.disabledDates = function(e) { if (0 === arguments.length) return n.disabledDates ? t.extend({}, n.disabledDates) : n.disabledDates; if (!e) return n.disabledDates = !1, j(), h; if (!(e instanceof Array)) throw new TypeError("disabledDates() expects an array parameter"); return n.disabledDates = J(e), n.enabledDates = !1, j(), h }, h.enabledDates = function(e) { if (0 === arguments.length) return n.enabledDates ? t.extend({}, n.enabledDates) : n.enabledDates; if (!e) return n.enabledDates = !1, j(), h; if (!(e instanceof Array)) throw new TypeError("enabledDates() expects an array parameter"); return n.enabledDates = J(e), n.disabledDates = !1, j(), h }, h.daysOfWeekDisabled = function(t) {
                if (0 === arguments.length) return n.daysOfWeekDisabled.splice(0);
                if ("boolean" == typeof t && !t) return n.daysOfWeekDisabled = !1, j(), h;
                if (!(t instanceof Array)) throw new TypeError("daysOfWeekDisabled() expects an array parameter");
                if (n.daysOfWeekDisabled = t.reduce(function(t, e) { return (e = parseInt(e, 10)) > 6 || e < 0 || isNaN(e) ? t : (-1 === t.indexOf(e) && t.push(e), t) }, []).sort(), n.useCurrent && !n.keepInvalid) {
                    for (var e = 0; !E(o, "d");) {
                        if (o.add(1, "d"), 31 === e) throw "Tried 31 times to find a valid date";
                        e++
                    }
                    H(o)
                }
                return j(), h
            }, h.maxDate = function(t) { if (0 === arguments.length) return n.maxDate ? n.maxDate.clone() : n.maxDate; if ("boolean" == typeof t && !1 === t) return n.maxDate = !1, j(), h; "string" == typeof t && ("now" !== t && "moment" !== t || (t = k())); var e = U(t); if (!e.isValid()) throw new TypeError("maxDate() Could not parse date parameter: " + t); if (n.minDate && e.isBefore(n.minDate)) throw new TypeError("maxDate() date parameter is before options.minDate: " + e.format(l)); return n.maxDate = e, n.useCurrent && !n.keepInvalid && o.isAfter(t) && H(n.maxDate), s.isAfter(e) && (s = e.clone().subtract(n.stepping, "m")), j(), h }, h.minDate = function(t) { if (0 === arguments.length) return n.minDate ? n.minDate.clone() : n.minDate; if ("boolean" == typeof t && !1 === t) return n.minDate = !1, j(), h; "string" == typeof t && ("now" !== t && "moment" !== t || (t = k())); var e = U(t); if (!e.isValid()) throw new TypeError("minDate() Could not parse date parameter: " + t); if (n.maxDate && e.isAfter(n.maxDate)) throw new TypeError("minDate() date parameter is after options.maxDate: " + e.format(l)); return n.minDate = e, n.useCurrent && !n.keepInvalid && o.isBefore(t) && H(n.minDate), s.isBefore(e) && (s = e.clone().add(n.stepping, "m")), j(), h }, h.defaultDate = function(t) { if (0 === arguments.length) return n.defaultDate ? n.defaultDate.clone() : n.defaultDate; if (!t) return n.defaultDate = !1, h; "string" == typeof t && (t = "now" === t || "moment" === t ? k() : k(t)); var e = U(t); if (!e.isValid()) throw new TypeError("defaultDate() Could not parse date parameter: " + t); if (!E(e)) throw new TypeError("defaultDate() date passed is invalid according to component setup validations"); return n.defaultDate = e, (n.defaultDate && n.inline || "" === a.val().trim()) && H(n.defaultDate), h }, h.locale = function(t) { if (0 === arguments.length) return n.locale; if (!e.localeData(t)) throw new TypeError("locale() locale " + t + " is not loaded from moment locales!"); return n.locale = t, o.locale(n.locale), s.locale(n.locale), l && tt(), f && (V(), B()), h }, h.stepping = function(t) { return 0 === arguments.length ? n.stepping : (t = parseInt(t, 10), (isNaN(t) || t < 1) && (t = 1), n.stepping = t, h) }, h.useCurrent = function(t) { var e = ["year", "month", "day", "hour", "minute"]; if (0 === arguments.length) return n.useCurrent; if ("boolean" != typeof t && "string" != typeof t) throw new TypeError("useCurrent() expects a boolean or string parameter"); if ("string" == typeof t && -1 === e.indexOf(t.toLowerCase())) throw new TypeError("useCurrent() expects a string parameter of " + e.join(", ")); return n.useCurrent = t, h }, h.collapse = function(t) { if (0 === arguments.length) return n.collapse; if ("boolean" != typeof t) throw new TypeError("collapse() expects a boolean parameter"); return n.collapse === t ? h : (n.collapse = t, f && (V(), B()), h) }, h.icons = function(e) { if (0 === arguments.length) return t.extend({}, n.icons); if (!(e instanceof Object)) throw new TypeError("icons() expects parameter to be an Object"); return t.extend(n.icons, e), f && (V(), B()), h }, h.tooltips = function(e) { if (0 === arguments.length) return t.extend({}, n.tooltips); if (!(e instanceof Object)) throw new TypeError("tooltips() expects parameter to be an Object"); return t.extend(n.tooltips, e), f && (V(), B()), h }, h.useStrict = function(t) { if (0 === arguments.length) return n.useStrict; if ("boolean" != typeof t) throw new TypeError("useStrict() expects a boolean parameter"); return n.useStrict = t, h }, h.sideBySide = function(t) { if (0 === arguments.length) return n.sideBySide; if ("boolean" != typeof t) throw new TypeError("sideBySide() expects a boolean parameter"); return n.sideBySide = t, f && (V(), B()), h }, h.viewMode = function(t) { if (0 === arguments.length) return n.viewMode; if ("string" != typeof t) throw new TypeError("viewMode() expects a string parameter"); if (-1 === v.indexOf(t)) throw new TypeError("viewMode() parameter must be one of (" + v.join(", ") + ") value"); return n.viewMode = t, d = Math.max(v.indexOf(t), m), P(), h }, h.toolbarPlacement = function(t) { if (0 === arguments.length) return n.toolbarPlacement; if ("string" != typeof t) throw new TypeError("toolbarPlacement() expects a string parameter"); if (-1 === _.indexOf(t)) throw new TypeError("toolbarPlacement() parameter must be one of (" + _.join(", ") + ") value"); return n.toolbarPlacement = t, f && (V(), B()), h }, h.widgetPositioning = function(e) {
                if (0 === arguments.length) return t.extend({}, n.widgetPositioning);
                if ("[object Object]" !== {}.toString.call(e)) throw new TypeError("widgetPositioning() expects an object variable");
                if (e.horizontal) {
                    if ("string" != typeof e.horizontal) throw new TypeError("widgetPositioning() horizontal variable must be a string");
                    if (e.horizontal = e.horizontal.toLowerCase(), -1 === b.indexOf(e.horizontal)) throw new TypeError("widgetPositioning() expects horizontal parameter to be one of (" + b.join(", ") + ")");
                    n.widgetPositioning.horizontal = e.horizontal
                }
                if (e.vertical) {
                    if ("string" != typeof e.vertical) throw new TypeError("widgetPositioning() vertical variable must be a string");
                    if (e.vertical = e.vertical.toLowerCase(), -1 === y.indexOf(e.vertical)) throw new TypeError("widgetPositioning() expects vertical parameter to be one of (" + y.join(", ") + ")");
                    n.widgetPositioning.vertical = e.vertical
                }
                return j(), h
            }, h.calendarWeeks = function(t) { if (0 === arguments.length) return n.calendarWeeks; if ("boolean" != typeof t) throw new TypeError("calendarWeeks() expects parameter to be a boolean value"); return n.calendarWeeks = t, j(), h }, h.showTodayButton = function(t) { if (0 === arguments.length) return n.showTodayButton; if ("boolean" != typeof t) throw new TypeError("showTodayButton() expects a boolean parameter"); return n.showTodayButton = t, f && (V(), B()), h }, h.showClear = function(t) { if (0 === arguments.length) return n.showClear; if ("boolean" != typeof t) throw new TypeError("showClear() expects a boolean parameter"); return n.showClear = t, f && (V(), B()), h }, h.widgetParent = function(e) { if (0 === arguments.length) return n.widgetParent; if ("string" == typeof e && (e = t(e)), null !== e && "string" != typeof e && !(e instanceof t)) throw new TypeError("widgetParent() expects a string or a jQuery object parameter"); return n.widgetParent = e, f && (V(), B()), h }, h.keepOpen = function(t) { if (0 === arguments.length) return n.keepOpen; if ("boolean" != typeof t) throw new TypeError("keepOpen() expects a boolean parameter"); return n.keepOpen = t, h }, h.focusOnShow = function(t) { if (0 === arguments.length) return n.focusOnShow; if ("boolean" != typeof t) throw new TypeError("focusOnShow() expects a boolean parameter"); return n.focusOnShow = t, h }, h.inline = function(t) { if (0 === arguments.length) return n.inline; if ("boolean" != typeof t) throw new TypeError("inline() expects a boolean parameter"); return n.inline = t, h }, h.clear = function() { return R(), h }, h.keyBinds = function(t) { return 0 === arguments.length ? n.keyBinds : (n.keyBinds = t, h) }, h.getMoment = function(t) { return k(t) }, h.debug = function(t) { if ("boolean" != typeof t) throw new TypeError("debug() expects a boolean parameter"); return n.debug = t, h }, h.allowInputToggle = function(t) { if (0 === arguments.length) return n.allowInputToggle; if ("boolean" != typeof t) throw new TypeError("allowInputToggle() expects a boolean parameter"); return n.allowInputToggle = t, h }, h.showClose = function(t) { if (0 === arguments.length) return n.showClose; if ("boolean" != typeof t) throw new TypeError("showClose() expects a boolean parameter"); return n.showClose = t, h }, h.keepInvalid = function(t) { if (0 === arguments.length) return n.keepInvalid; if ("boolean" != typeof t) throw new TypeError("keepInvalid() expects a boolean parameter"); return n.keepInvalid = t, h }, h.datepickerInput = function(t) { if (0 === arguments.length) return n.datepickerInput; if ("string" != typeof t) throw new TypeError("datepickerInput() expects a string parameter"); return n.datepickerInput = t, h }, h.parseInputDate = function(t) { if (0 === arguments.length) return n.parseInputDate; if ("function" != typeof t) throw new TypeError("parseInputDate() sholud be as function"); return n.parseInputDate = t, h }, h.disabledTimeIntervals = function(e) { if (0 === arguments.length) return n.disabledTimeIntervals ? t.extend({}, n.disabledTimeIntervals) : n.disabledTimeIntervals; if (!e) return n.disabledTimeIntervals = !1, j(), h; if (!(e instanceof Array)) throw new TypeError("disabledTimeIntervals() expects an array parameter"); return n.disabledTimeIntervals = e, j(), h }, h.disabledHours = function(e) {
                if (0 === arguments.length) return n.disabledHours ? t.extend({}, n.disabledHours) : n.disabledHours;
                if (!e) return n.disabledHours = !1, j(), h;
                if (!(e instanceof Array)) throw new TypeError("disabledHours() expects an array parameter");
                if (n.disabledHours = K(e), n.enabledHours = !1, n.useCurrent && !n.keepInvalid) {
                    for (var i = 0; !E(o, "h");) {
                        if (o.add(1, "h"), 24 === i) throw "Tried 24 times to find a valid date";
                        i++
                    }
                    H(o)
                }
                return j(), h
            }, h.enabledHours = function(e) {
                if (0 === arguments.length) return n.enabledHours ? t.extend({}, n.enabledHours) : n.enabledHours;
                if (!e) return n.enabledHours = !1, j(), h;
                if (!(e instanceof Array)) throw new TypeError("enabledHours() expects an array parameter");
                if (n.enabledHours = K(e), n.disabledHours = !1, n.useCurrent && !n.keepInvalid) {
                    for (var i = 0; !E(o, "h");) {
                        if (o.add(1, "h"), 24 === i) throw "Tried 24 times to find a valid date";
                        i++
                    }
                    H(o)
                }
                return j(), h
            }, h.viewDate = function(t) { if (0 === arguments.length) return s.clone(); if (!t) return s = o.clone(), h; if (!("string" == typeof t || e.isMoment(t) || t instanceof Date)) throw new TypeError("viewDate() parameter must be one of [string, moment or Date]"); return s = U(t), L(), h }, i.is("input")) a = i;
        else if (0 === (a = i.find(n.datepickerInput)).length) a = i.find("input");
        else if (!a.is("input")) throw new Error('CSS class "' + n.datepickerInput + '" cannot be applied to non input element');
        if (i.hasClass("input-group") && (p = 0 === i.find(".datepickerbutton").length ? i.find(".input-group-addon") : i.find(".datepickerbutton")), !n.inline && !a.is("input")) throw new Error("Could not initialize DateTimePicker without an input element");
        return o = k(), s = o.clone(), t.extend(!0, n, function() {
            var e, o = {};
            return (e = i.is("input") || n.inline ? i.data() : i.find("input").data()).dateOptions && e.dateOptions instanceof Object && (o = t.extend(!0, o, e.dateOptions)), t.each(n, function(t) {
                var i = "date" + t.charAt(0).toUpperCase() + t.slice(1);
                void 0 !== e[i] && (o[t] = e[i])
            }), o
        }()), h.options(n), tt(), a.on({ change: Q, blur: n.debug ? "" : V, keydown: X, keyup: Z, focus: n.allowInputToggle ? B : "" }), i.is("input") ? a.on({ focus: B }) : p && (p.on("click", G), p.on("mousedown", !1)), a.prop("disabled") && h.disable(), a.is("input") && 0 !== a.val().trim().length ? H(U(a.val().trim())) : n.defaultDate && void 0 === a.attr("placeholder") && H(n.defaultDate), n.inline && B(), h
    };
    return t.fn.datetimepicker = function(e) {
        e = e || {};
        var n, o = Array.prototype.slice.call(arguments, 1),
            s = !0;
        if ("object" == typeof e) return this.each(function() {
            var n, o = t(this);
            o.data("DateTimePicker") || (n = t.extend(!0, {}, t.fn.datetimepicker.defaults, e), o.data("DateTimePicker", i(o, n)))
        });
        if ("string" == typeof e) return this.each(function() {
            var i = t(this).data("DateTimePicker");
            if (!i) throw new Error('bootstrap-datetimepicker("' + e + '") method was called on an element that is not using DateTimePicker');
            n = i[e].apply(i, o), s = n === i
        }), s || t.inArray(e, ["destroy", "hide", "show", "toggle"]) > -1 ? this : n;
        throw new TypeError("Invalid arguments for DateTimePicker: " + e)
    }, t.fn.datetimepicker.defaults = {
        timeZone: "",
        format: !1,
        dayViewHeaderFormat: "MMMM YYYY",
        extraFormats: !1,
        stepping: 1,
        minDate: !1,
        maxDate: !1,
        useCurrent: !0,
        collapse: !0,
        locale: e.locale(),
        defaultDate: !1,
        disabledDates: !1,
        enabledDates: !1,
        icons: { time: "glyphicon glyphicon-time", date: "glyphicon glyphicon-calendar", up: "glyphicon glyphicon-chevron-up", down: "glyphicon glyphicon-chevron-down", previous: "glyphicon glyphicon-chevron-left", next: "glyphicon glyphicon-chevron-right", today: "glyphicon glyphicon-screenshot", clear: "glyphicon glyphicon-trash", close: "glyphicon glyphicon-remove" },
        tooltips: { today: "Go to today", clear: "Clear selection", close: "Close the picker", selectMonth: "Select Month", prevMonth: "Previous Month", nextMonth: "Next Month", selectYear: "Select Year", prevYear: "Previous Year", nextYear: "Next Year", selectDecade: "Select Decade", prevDecade: "Previous Decade", nextDecade: "Next Decade", prevCentury: "Previous Century", nextCentury: "Next Century", pickHour: "Pick Hour", incrementHour: "Increment Hour", decrementHour: "Decrement Hour", pickMinute: "Pick Minute", incrementMinute: "Increment Minute", decrementMinute: "Decrement Minute", pickSecond: "Pick Second", incrementSecond: "Increment Second", decrementSecond: "Decrement Second", togglePeriod: "Toggle Period", selectTime: "Chọn giờ" },
        useStrict: !1,
        sideBySide: !1,
        daysOfWeekDisabled: !1,
        calendarWeeks: !1,
        viewMode: "days",
        toolbarPlacement: "default",
        showTodayButton: !1,
        showClear: !1,
        showClose: !1,
        widgetPositioning: { horizontal: "auto", vertical: "auto" },
        widgetParent: null,
        ignoreReadonly: !1,
        keepOpen: !1,
        focusOnShow: !0,
        inline: !1,
        keepInvalid: !1,
        datepickerInput: ".datepickerinput",
        keyBinds: {
            up: function(t) {
                if (t) {
                    var e = this.date() || this.getMoment();
                    t.find(".datepicker").is(":visible") ? this.date(e.clone().subtract(7, "d")) : this.date(e.clone().add(this.stepping(), "m"))
                }
            },
            down: function(t) {
                if (t) {
                    var e = this.date() || this.getMoment();
                    t.find(".datepicker").is(":visible") ? this.date(e.clone().add(7, "d")) : this.date(e.clone().subtract(this.stepping(), "m"))
                } else this.show()
            },
            "control up": function(t) {
                if (t) {
                    var e = this.date() || this.getMoment();
                    t.find(".datepicker").is(":visible") ? this.date(e.clone().subtract(1, "y")) : this.date(e.clone().add(1, "h"))
                }
            },
            "control down": function(t) {
                if (t) {
                    var e = this.date() || this.getMoment();
                    t.find(".datepicker").is(":visible") ? this.date(e.clone().add(1, "y")) : this.date(e.clone().subtract(1, "h"))
                }
            },
            left: function(t) {
                if (t) {
                    var e = this.date() || this.getMoment();
                    t.find(".datepicker").is(":visible") && this.date(e.clone().subtract(1, "d"))
                }
            },
            right: function(t) {
                if (t) {
                    var e = this.date() || this.getMoment();
                    t.find(".datepicker").is(":visible") && this.date(e.clone().add(1, "d"))
                }
            },
            pageUp: function(t) {
                if (t) {
                    var e = this.date() || this.getMoment();
                    t.find(".datepicker").is(":visible") && this.date(e.clone().subtract(1, "M"))
                }
            },
            pageDown: function(t) {
                if (t) {
                    var e = this.date() || this.getMoment();
                    t.find(".datepicker").is(":visible") && this.date(e.clone().add(1, "M"))
                }
            },
            enter: function() { this.hide() },
            escape: function() { this.hide() },
            "control space": function(t) { t && t.find(".timepicker").is(":visible") && t.find('.btn[data-action="togglePeriod"]').click() },
            t: function() { this.date(this.getMoment()) },
            delete: function() { this.clear() }
        },
        debug: !1,
        allowInputToggle: !1,
        disabledTimeIntervals: !1,
        disabledHours: !1,
        enabledHours: !1,
        viewDate: !1
    }, t.fn.datetimepicker
});
var messages = { home_search_empty: "Vui lòng chọn khu vực", home_nhucau_ten_empty: "Vui lòng nhập Họ và Tên", home_nhucau_phone_empty: "Vui lòng nhập Số điện thoại", home_nhucau_phone_wrongformat: "Vui lòng nhập Số điện thoại hợp lệ", home_nhucau_email_wrongformat: "Vui lòng nhập địa chỉ email hợp lệ", home_nhucau_quan_empty: "Vui lòng chọn Quận/Huyện", home_nhucau_gia_empty: "Vui lòng chọn Giá", home_nhucau_nhucau_empty: "Vui lòng chọn Loại hình BĐS", home_nhucau_success: "Đã gửi thông tin thành công. Chúng tôi sẽ liên hệ với bạn sớm nhất", home_nhucau_error: "Đã có lỗi xảy ra, bạn vui lòng thao tác lại", home_muanhatheonhucau_ngansach_empty: "Vui lòng nhập Ngân sách của bạn", home_muanhatheonhucau_thoigianvay_empty: "Vui lòng chọn Thời gian vay", home_muanhatheonhucau_giatricannha_empty: "Vui lòng nhập Giá trị căn nhà", home_taiapp_phone_wrongformat: "Vui lòng nhập Số điện thoại hợp lệ", home_taiapp_thanhcong: "Vui lòng kiểm tra tin nhắn để tải ứng dụng", home_taiapp_error: "Đã có lỗi xảy ra, bạn vui lòng thao tác lại", home_thembdsvaobst_taobst_name_empty: "Vui lòng nhập tên bộ sưu tập", home_thembdsvaobst_addthanhcong: "Thao tác thành công", home_thembdsvaobst_addvaobstdatontai: "BĐS đã tồn tại trong bộ sưu tập", dangnhap_phoneemail_empty: "Vui lòng nhập Email hoặc số điện thoại", dangnhap_phoneemail_wrongformat: "Email hoặc số điện thoại sai định dạng", dangnhap_matkhau_empty: "Vui lòng nhập mật khẩu", dangnhap_loginfail: "Tài khoản hoặc mật khẩu không chính xác", dangnhap_phoneemail_inactive: "Bạn chưa kích hoạt tài khoản, vui lòng kích hoạt để tiếp tục", dangky_name_empty: "Vui lòng nhập Họ và Tên", dangky_phone_empty: "Vui lòng nhập số điện thoại hợp lệ", dangky_phone_wrongformat: "Vui lòng nhập số điện thoại hợp lệ", dangky_email_wrongformat: "Vui lòng nhập địa chỉ email hợp lệ", dangky_matkhau_empty: "Vui lòng nhập mật khẩu", dangky_matkhau_wrongformat: "Vui lòng nhập mật khẩu từ 6 đến 20 ký tự", dangky_nhaplaimatkhau_empty: "Vui lòng nhập lại mật khẩu", dangky_nhaplaimatkhau_incorrect: "Mật khẩu không trùng nhau", xacnhantaikhoan_otp_empty: "Mã kích hoạt không chính xác", xacnhantaikhoan_otp_wrongformat: "Mã kích hoạt không chính xác", xacnhantaikhoan_otp_incorrect: "Mã kích hoạt không chính xác", xacnhantaikhoan_thanhcong: "Xác thực thành công", xacnhantaikhoan_yeucauguilai: "Một mã xác thực đã gửi về số điện thoại {{phone}}. Vui lòng nhập để hoàn tất đăng ký", dangnhapfacebook_facebook_notexisted: "Tài khoản hoặc mật khẩu không chính xác", dangnhapfacebook_facebook_inactive: "Bạn chưa kích hoạt tài khoản, vui lòng kích hoạt để tiếp tục", dangkyfacebook_thanhcong: "Một mã xác thực đã gửi về số điện thoại {{phone}}. Vui lòng nhập để hoàn tất đăng ký", dangkyfacebook_facebook_inactive: "Bạn chưa kích hoạt tài khoản, vui lòng kích hoạt để tiếp tục", dangkyfacebook_facebook_actived: "Tài khoản đã tồn tại trong hệ thống", listingdetail_datlichxem_name_empty: "Vui lòng nhập Họ và Tên", listingdetail_datlichxem_phone_empty: "Vui lòng nhập số điện thoại hợp lệ", listingdetail_datlichxem_phone_wrongformat: "Vui lòng nhập số điện thoại hợp lệ", listingdetail_datlichxem_email_wrongformat: "Vui lòng nhập địa chỉ email hợp lệ", listingdetail_datlichxem_thatbai: "Vui lòng nhập thông tin liên hệ", listingdetail_khanangvayvon_name_empty: "Vui lòng nhập Họ và Tên", listingdetail_khanangvayvon_phone_empty: "Vui lòng nhập số điện thoại hợp lệ", listingdetail_khanangvayvon_phone_wrongformat: "Vui lòng nhập số điện thoại hợp lệ", listingdetail_khanangvayvon_email_wrongformat: "Vui lòng nhập địa chỉ email hợp lệ", listingdetail_khanangvayvon_date_empty: "Vui lòng chọn ngày", listingdetail_khanangvayvon_thanhcong: "Đăng ký tư vấn thành công. Propzy sẽ liên hệ với quý khách sớm nhất có thể", dangtinnhanh_quanhuyen_empty: "Vui lòng chọn Quận/Huyện", dangtinnhanh_phuongxa_empty: "Vui lòng chọn Phường/Xã", dangtinnhanh_sonha_empty: "Vui lòng nhập Số nhà", dangtinnhanh_diachi_empty: "Vui lòng nhập Địa chỉ", dangtinnhanh_thatbai_thieuthongtin: "Vui lòng nhập đầy đủ thông tin để hoàn tất BĐS", dangtinnhanh_thongtinnhanh_name_empty: "Vui lòng nhập Họ và Tên", dangtinnhanh_thongtinnhanh_phone_empty: "Vui lòng nhập Số điện thoại", dangtinnhanh_thongtinnhanh_phone_wrongformat: "Vui lòng nhập Số điện thoại hợp lệ", dangtinnhanh_thongtinnhanh_email_wrongformat: "Vui lòng nhập địa chỉ email hợp lệ", dangtinchunha_price_empty: "Vui lòng nhập giá", dangtinnhanh_thongtinnhanh_thatbai_thieuthongtin: "Vui lòng nhập đầy đủ thông tin để hoàn tất BĐS", dangtinchunha_quanhuyen_empty: "Vui lòng chọn Quận/Huyện", dangtinchunha_phuongxa_empty: "Vui lòng chọn Phường/Xã", dangtinchunha_sonha_empty: "Vui lòng nhập Số nhà", dangtinchunha_diachi_empty: "Vui lòng nhập Địa chỉ", dangtinnhanh_dieukhoan_uncheck: "Vui lòng đồng ý điều khoản", dangtinchunha_dieukhoan_uncheck: "Vui lòng đồng ý điều khoản", dangtinchunha_thatbai_thieuthongtin: "Vui lòng nhập đầy đủ thông tin để hoàn tất BĐS", dangtinmoigioi_dangkykhoahoc_khoahoc_uncheck: "Bạn phải chọn khóa huấn luyện trước khi chuyển qua bước tiếp theo", dangtinmoigioi_dangkykhoahoc_thanhcong: "Đăng ký thành công", dangtinmoigioi_notagent: "Vui lòng hoàn tất hợp đồng để trở thành đối tác của Propzy. Liên hệ (028) 73 066 099 để được hỗ trợ", dangtinmoigioi_stop_cooperation: "Vui lòng kích hoạt hợp tác để gửi BĐS. Liên hệ (028) 73 066 099 để được hỗ trợ.", dangtinmoigioi_quanhuyen_empty: "Vui lòng chọn Quận/Huyện", dangtinmoigioi_phuongxa_empty: "Vui lòng chọn Phường/Xã", dangtinmoigioi_sonha_empty: "Vui lòng nhập Số nhà", dangtinmoigioi_diachi_empty: "Vui lòng nhập Địa chỉ", dangtinmoigioi_dientichsudung_empty: "Vui lòng nhập Diện tích sử dụng", dangtinmoigioi_sotangcuabuilding_empty: "Vui lòng nhập Số tầng của Building", dangtinmoigioi_phongngu_empty: "Vui lòng nhập Phòng ngủ", dangtinmoigioi_phongtamwc_empty: "Vui lòng nhập Phòng tắm/WC", dangtinmoigioi_huongnha_empty: "Vui lòng nhập Hướng nhà", dangtinmoigioi_dientichdat_empty: "Vui lòng nhập Diện tích đất", dangtinmoigioi_chieudai_empty: "Vui lòng nhập Chiều dài", dangtinmoigioi_chieurong_empty: "Vui lòng nhập Chiều rộng", dangtinmoigioi_giaychuquyen_empty: "Vui lòng chọn Giấy chủ quyền", dangtinmoigioi_gia_empty: "Vui lòng nhập Giá", dangtinmoigioi_datcoc_empty: "Vui lòng nhập Đặt cọc", dangtinmoigioi_thongtinhoahong_empty: "Vui lòng nhập Hoa hồng", dangtinmoigioi_motavatienich_empty: "Vui lòng nhập Mô tả và tiện ích", dangtinmoigioi_hinhanhlisting_empty: "Vui lòng chọn ít nhất 2 ảnh BĐS", dangtinmoigioi_hinhanhdrawing_empty: "Vui lòng chọn ít nhất 4 ảnh giấy tờ pháp lý", dangtinmoigioi_hinhanhgiaytophaply_empty: "Vui lòng chọn ít nhất 4 ảnh giấy tờ pháp lý", dangtinmoigioi_hinhanhlisting_thieuthongtin: "Vui lòng chọn ít nhất 2 ảnh", dangtinmoigioi_hinhanhgiaytophaply_thieuthongtin: "Vui lòng chọn ít nhất 4 ảnh giấy tờ pháp lý", dangtinmoigioi_name_empty: "Vui lòng nhập Họ và Tên", dangtinmoigioi_phone_empty: "Vui lòng nhập số điện thoại hợp lệ", dangtinmoigioi_phone_wrongformat: "Vui lòng nhập số điện thoại hợp lệ", dangtinmoigioi_email_wrongformat: "Vui lòng nhập địa chỉ email hợp lệ", dangtinmoigioi_thatbai_thieuthongtin: "Vui lòng nhập đầy đủ thông tin để hoàn tất BĐS", search_sosanh_tindang_thieuthongtin: "Chọn ít nhất 2 bất động sản để so sánh", search_sosanh_huysosanh: "Hủy bỏ so sánh?", lienhe_name_empty: "Vui lòng nhập Họ và Tên", lienhe_phone_empty: "Vui lòng nhập Số điện thoại", lienhe_phone_wrongformat: "Vui lòng nhập Số điện thoại hợp lệ", lienhe_email_wrongformat: "Vui lòng nhập địa chỉ email hợp lệ", lienhe_email_empty: "Vui lòng nhập Email", lienhe_title_empty: "Vui lòng nhập tiêu đề", lienhe_cauhoiykien_empty: "Vui lòng nhập Câu hỏi hoặc ý kiến", lienhe_thatbai_thieuthongtin: "Vui lòng nhập đầy đủ thông tin để hoàn tất gửi thông tin", lienhe_thanhcong: "Gửi thông tin thành công. Propzy sẽ liên hệ với quý khách sớm nhất có thể", bosuutap_name_empty: "Vui lòng nhập tên bộ sưu tập", home_regist_error: "Vui lòng xác thực" };
! function(t, e) {
    "use strict";

    function i(i, n, s, r, l) {
        function c() {
            $ = t.devicePixelRatio > 1, s = d(s), n.delay >= 0 && setTimeout(function() { h(!0) }, n.delay), (n.delay < 0 || n.combined) && (r.e = function(t, e) {
                var o, s = 0;
                return function(a, r) {
                    function l() { s = +new Date, e.call(i, a) }
                    var c = +new Date - s;
                    o && clearTimeout(o), c > t || !n.enableThrottle || r ? l() : o = setTimeout(l, t - c)
                }
            }(n.throttle, function(t) { "resize" === t.type && (w = x = -1), h(t.all) }), r.a = function(t) { t = d(t), s.push.apply(s, t) }, r.g = function() { return s = o(s).filter(function() { return !o(this).data(n.loadedName) }) }, r.f = function(t) {
                for (var e = 0; e < t.length; e++) {
                    var i = s.filter(function() { return this === t[e] });
                    i.length && h(!1, i)
                }
            }, h(), o(n.appendScroll).on("scroll." + l + " resize." + l, r.e))
        }

        function d(t) {
            for (var s = n.defaultImage, a = n.placeholder, r = n.imageBase, l = n.srcsetAttribute, c = n.loaderAttribute, d = n._f || {}, h = 0, u = (t = o(t).filter(function() {
                    var t = o(this),
                        i = g(this);
                    return !t.data(n.handledName) && (t.attr(n.attribute) || t.attr(l) || t.attr(c) || d[i] !== e)
                }).data("plugin_" + n.name, i)).length; h < u; h++) {
                var p = o(t[h]),
                    f = g(t[h]),
                    m = p.attr(n.imageBaseAttribute) || r;
                f === C && m && p.attr(l) && p.attr(l, v(p.attr(l), m)), d[f] === e || p.attr(c) || p.attr(c, d[f]), f === C && s && !p.attr(D) ? p.attr(D, s) : f === C || !a || p.css(A) && "none" !== p.css(A) || p.css(A, "url('" + a + "')")
            }
            return t
        }

        function h(t, e) {
            if (s.length) {
                for (var a = e || s, r = !1, l = n.imageBase || "", c = n.srcsetAttribute, d = n.handledName, h = 0; h < a.length; h++)
                    if (t || e || p(a[h])) {
                        var f = o(a[h]),
                            m = g(a[h]),
                            v = f.attr(n.attribute),
                            y = f.attr(n.imageBaseAttribute) || l,
                            b = f.attr(n.loaderAttribute);
                        f.data(d) || n.visibleOnly && !f.is(":visible") || !((v || f.attr(c)) && (m === C && (y + v !== f.attr(D) || f.attr(c) !== f.attr(M)) || m !== C && y + v !== f.css(A)) || b) || (r = !0, f.data(d, !0), u(f, m, y, b))
                    }
                r && (s = o(s).filter(function() { return !o(this).data(d) }))
            } else n.autoDestroy && i.destroy()
        }

        function u(t, e, i, s) {
            ++_;
            var a = function() { b("onError", t), y(), a = o.noop };
            b("beforeLoad", t);
            var r = n.attribute,
                l = n.srcsetAttribute,
                c = n.sizesAttribute,
                d = n.retinaAttribute,
                h = n.removeAttribute,
                u = n.loadedName,
                p = t.attr(d);
            if (s) {
                var f = function() { h && t.removeAttr(n.loaderAttribute), t.data(u, !0), b(k, t), setTimeout(y, 1), f = o.noop };
                t.off(S).one(S, a).one(T, f), b(s, t, function(e) { e ? (t.off(T), f()) : (t.off(S), a()) }) || t.trigger(S)
            } else {
                var m = o(new Image);
                m.one(S, a).one(T, function() { t.hide(), e === C ? t.attr(I, m.attr(I)).attr(M, m.attr(M)).attr(D, m.attr(D)) : t.css(A, "url('" + m.attr(D) + "')"), t[n.effect](n.effectTime), h && (t.removeAttr(r + " " + l + " " + d + " " + n.imageBaseAttribute), c !== I && t.removeAttr(c)), t.data(u, !0), b(k, t), m.remove(), y() });
                var g = ($ && p ? p : t.attr(r)) || "";
                m.attr(I, t.attr(c)).attr(M, t.attr(l)).attr(D, g ? i + g : null), m.complete && m.trigger(T)
            }
        }

        function p(t) {
            var e = t.getBoundingClientRect(),
                i = n.scrollDirection,
                o = n.threshold,
                s = m() + o > e.top && -o < e.bottom,
                a = f() + o > e.left && -o < e.right;
            return "vertical" === i ? s : "horizontal" === i ? a : s && a
        }

        function f() { return w >= 0 ? w : w = o(t).width() }

        function m() { return x >= 0 ? x : x = o(t).height() }

        function g(t) { return t.tagName.toLowerCase() }

        function v(t, e) {
            if (e) {
                var i = t.split(",");
                t = "";
                for (var n = 0, o = i.length; n < o; n++) t += e + i[n].trim() + (n !== o - 1 ? "," : "")
            }
            return t
        }

        function y() {--_, s.length || _ || b("onFinishedAll") }

        function b(t, e, o) { return !!(t = n[t]) && (t.apply(i, [].slice.call(arguments, 1)), !0) }
        var _ = 0,
            w = -1,
            x = -1,
            $ = !1,
            k = "afterLoad",
            T = "load",
            S = "error",
            C = "img",
            D = "src",
            M = "srcset",
            I = "sizes",
            A = "background-image";
        "event" === n.bind || a ? c() : o(t).on(T + "." + l, c)
    }

    function n(n, a) {
        var r = this,
            l = o.extend({}, r.config, a),
            c = {},
            d = l.name + "-" + ++s;
        return r.config = function(t, i) { return i === e ? l[t] : (l[t] = i, r) }, r.addItems = function(t) { return c.a && c.a("string" === o.type(t) ? o(t) : t), r }, r.getItems = function() { return c.g ? c.g() : {} }, r.update = function(t) { return c.e && c.e({}, !t), r }, r.force = function(t) { return c.f && c.f("string" === o.type(t) ? o(t) : t), r }, r.loadAll = function() { return c.e && c.e({ all: !0 }, !0), r }, r.destroy = function() { return o(l.appendScroll).off("." + d, c.e), o(t).off("." + d), c = {}, e }, i(r, l, n, c, d), l.chainable ? n : r
    }
    var o = t.jQuery || t.Zepto,
        s = 0,
        a = !1;
    o.fn.Lazy = o.fn.lazy = function(t) { return new n(this, t) }, o.Lazy = o.lazy = function(t, i, s) { if (o.isFunction(i) && (s = i, i = []), o.isFunction(s)) { t = o.isArray(t) ? t : [t], i = o.isArray(i) ? i : [i]; for (var a = n.prototype.config, r = a._f || (a._f = {}), l = 0, c = t.length; l < c; l++)(a[t[l]] === e || o.isFunction(a[t[l]])) && (a[t[l]] = s); for (var d = 0, h = i.length; d < h; d++) r[i[d]] = t[0] } }, n.prototype.config = { name: "lazy", chainable: !0, autoDestroy: !0, bind: "load", threshold: 500, visibleOnly: !1, appendScroll: t, scrollDirection: "both", imageBase: null, defaultImage: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", placeholder: null, delay: -1, combined: !1, attribute: "data-src", srcsetAttribute: "data-srcset", sizesAttribute: "data-sizes", retinaAttribute: "data-retina", loaderAttribute: "data-loader", imageBaseAttribute: "data-imagebase", removeAttribute: !0, handledName: "handled", loadedName: "loaded", effect: "show", effectTime: 0, enableThrottle: !0, throttle: 250, beforeLoad: e, afterLoad: e, onError: e, onFinishedAll: e }, o(t).on("load", function() { a = !0 })
}(window),
function(t) {
    var e = { columns: 1, search: !1, searchOptions: { delay: 250, showOptGroups: !1, searchText: !0, searchValue: !1, onSearch: function(t) {} }, texts: { placeholder: "Select options", search: "Search", selectedOptions: " selected", selectAll: "Select all", unselectAll: "Unselect all", noneSelected: "None Selected" }, selectAll: !1, selectGroup: !1, minHeight: 200, maxHeight: null, maxWidth: null, maxPlaceholderWidth: null, maxPlaceholderOpts: 10, showCheckbox: !0, checkboxAutoFit: !1, optionAttributes: [], onLoad: function(t) {}, onOptionClick: function(t, e) {}, onControlClose: function(t) {}, onSelectAll: function(t, e) {}, onPlaceholder: function(t, e, i) {} },
        i = 1,
        n = 1;

    function o(n, o) { if (this.element = n, this.options = t.extend(!0, {}, e, o), this.updateSelectAll = !0, this.updatePlaceholder = !0, this.listNumber = i, i += 1, !t(this.element).attr("multiple")) throw new Error("[jQuery-MultiSelect] Select list must be a multiselect list in order to use this plugin"); if (this.options.search && !this.options.searchOptions.searchText && !this.options.searchOptions.searchValue) throw new Error("[jQuery-MultiSelect] Either searchText or searchValue should be true."); "placeholder" in this.options && (this.options.texts.placeholder = this.options.placeholder, delete this.options.placeholder), "default" in this.options.searchOptions && (this.options.texts.search = this.options.searchOptions.default, delete this.options.searchOptions.default), this.load() }
    "function" != typeof Array.prototype.map && (Array.prototype.map = function(e, i) { return void 0 === i && (i = this), t.isArray(i) ? t.map(i, e) : [] }), "function" != typeof String.prototype.trim && (String.prototype.trim = function() { return this.replace(/^\s+|\s+$/g, "") }), o.prototype = {
        load: function() {
            var e = this;
            if ("SELECT" != e.element.nodeName || t(e.element).hasClass("jqmsLoaded")) return !0;
            t(e.element).addClass("jqmsLoaded ms-list-" + e.listNumber).data("plugin_multiselect-instance", e), t(e.element).after('<div id="ms-list-' + e.listNumber + '" class="ms-options-wrap"><button type="button"><span>None Selected</span></button><div class="ms-options"><ul></ul></div></div>');
            var i = t(e.element).siblings("#ms-list-" + e.listNumber + ".ms-options-wrap").find("> button:first-child"),
                n = t(e.element).siblings("#ms-list-" + e.listNumber + ".ms-options-wrap").find("> .ms-options"),
                o = n.find("> ul");
            if (e.options.showCheckbox ? e.options.checkboxAutoFit && n.addClass("checkbox-autofit") : n.addClass("hide-checkbox"), t(e.element).prop("disabled") && i.prop("disabled", !0), e.options.maxPlaceholderWidth && i.css("maxWidth", e.options.maxPlaceholderWidth), e.options.maxHeight) var s = e.options.maxHeight;
            else s = t(window).height() - n.offset().top + t(window).scrollTop() - 20;
            if (s = s < e.options.minHeight ? e.options.minHeight : s, n.css({ maxWidth: e.options.maxWidth, minHeight: e.options.minHeight, maxHeight: s }), n.on("touchmove mousewheel DOMMouseScroll", function(e) {
                    if (t(this).outerHeight() < t(this)[0].scrollHeight) {
                        var i = e.originalEvent,
                            n = i.wheelDelta || -i.detail;
                        t(this).outerHeight() + t(this)[0].scrollTop > t(this)[0].scrollHeight && (e.preventDefault(), this.scrollTop += n < 0 ? 1 : -1)
                    }
                }), t(document).off("click.ms-hideopts").on("click.ms-hideopts", function(e) {
                    t(e.target).closest(".ms-options-wrap").length || t(".ms-options-wrap.ms-active > .ms-options").each(function() {
                        t(this).closest(".ms-options-wrap").removeClass("ms-active");
                        var e = t(this).closest(".ms-options-wrap").attr("id"),
                            i = t(this).parent().siblings("." + e + ".jqmsLoaded").data("plugin_multiselect-instance");
                        "function" == typeof i.options.onControlClose && i.options.onControlClose(i.element)
                    })
                }).on("keydown", function(e) { 27 == (e.keyCode || e.which) && t(this).trigger("click.ms-hideopts") }), i.on("keydown", function(t) {
                    var e = t.keyCode || t.which;
                    13 != e && 32 != e || i.trigger("mousedown")
                }), i.on("mousedown", function(i) {
                    if (i.which && 1 != i.which) return !0;
                    if (t(".ms-options-wrap.ms-active").each(function() { if (t(this).siblings("." + t(this).attr("id") + ".jqmsLoaded")[0] != n.parent().siblings(".ms-list-" + e.listNumber + ".jqmsLoaded")[0]) { t(this).removeClass("ms-active"); var i = t(this).siblings("." + t(this).attr("id") + ".jqmsLoaded").data("plugin_multiselect-instance"); "function" == typeof i.options.onControlClose && i.options.onControlClose(i.element) } }), n.closest(".ms-options-wrap").toggleClass("ms-active"), n.closest(".ms-options-wrap").hasClass("ms-active")) {
                        if (n.css("maxHeight", ""), e.options.maxHeight) var o = e.options.maxHeight;
                        else o = t(window).height() - n.offset().top + t(window).scrollTop() - 20;
                        o && (o = o < e.options.minHeight ? e.options.minHeight : o, n.css("maxHeight", o))
                    } else "function" == typeof e.options.onControlClose && e.options.onControlClose(e.element)
                }).click(function(t) { t.preventDefault() }), e.options.texts.placeholder && i.find("span").text(e.options.texts.placeholder), e.options.search) {
                o.before('<div class="ms-search"><input type="text" value="" placeholder="' + e.options.texts.search + '" /></div>');
                var a = n.find(".ms-search input");
                a.on("keyup", function() {
                    if (t(this).data("lastsearch") == t(this).val()) return !0;
                    t(this).data("searchTimeout") && clearTimeout(t(this).data("searchTimeout"));
                    var i = t(this);
                    t(this).data("searchTimeout", setTimeout(function() {
                        i.data("lastsearch", i.val()), "function" == typeof e.options.searchOptions.onSearch && e.options.searchOptions.onSearch(e.element);
                        var n = t.trim(changeAlias(a.val().toLowerCase()));
                        n ? (o.find('li[data-search-term*="' + n + '"]:not(.optgroup)').removeClass("ms-hidden"), o.find('li:not([data-search-term*="' + n + '"], .optgroup)').addClass("ms-hidden")) : o.find(".ms-hidden").removeClass("ms-hidden"), e.options.searchOptions.showOptGroups || o.find(".optgroup").each(function() { t(this).find("li:not(.ms-hidden)").length ? t(this).show() : t(this).hide() }), e._updateSelectAllText()
                    }, e.options.searchOptions.delay))
                })
            }
            e.options.selectAll && o.before(`\n                <label class="checkbox select-all ms-selectall global">\n                    <input class="testCheckbox" type="checkbox"/>\n                    <span class=""></span>${e.options.texts.selectAll}\n                </label>`), n.on("click", ".ms-selectall", function(i) {
                i.preventDefault(), e.updateSelectAll = !1, e.updatePlaceholder = !1;
                var s = n.parent().siblings(".ms-list-" + e.listNumber + ".jqmsLoaded");
                if (t(this).hasClass("global")) o.find("li:not(.optgroup, .selected, .ms-hidden)").length ? (o.find("li:not(.optgroup, .selected, .ms-hidden)").addClass("selected"), o.find('li.selected input[type="checkbox"]:not(:disabled)').prop("checked", !0)) : (o.find("li:not(.optgroup, .ms-hidden).selected").removeClass("selected"), o.find('li:not(.optgroup, .ms-hidden, .selected) input[type="checkbox"]:not(:disabled)').prop("checked", !1));
                else if (t(this).closest("li").hasClass("optgroup")) {
                    var a = t(this).closest("li.optgroup");
                    a.find("li:not(.selected, .ms-hidden)").length ? (a.find("li:not(.selected, .ms-hidden)").addClass("selected"), a.find('li.selected input[type="checkbox"]:not(:disabled)').prop("checked", !0)) : (a.find("li:not(.ms-hidden).selected").removeClass("selected"), a.find('li:not(.ms-hidden, .selected) input[type="checkbox"]:not(:disabled)').prop("checked", !1))
                }
                var r = t(t(this).next().find("li input")[1]).is(":checked");
                r ? t(this).find("input").prop("checked", !0) : r || t(this).find("input").prop("checked", !1);
                var l = [];
                o.find('li.selected input[type="checkbox"]').each(function() { l.push(t(this).val()) }), s.val(l).trigger("change"), e.updateSelectAll = !0, e.updatePlaceholder = !0, "function" == typeof e.options.onSelectAll && e.options.onSelectAll(e.element, l.length), e._updateSelectAllText(), e._updatePlaceholderText()
            });
            var r = [];
            t(e.element).children().each(function() {
                if ("OPTGROUP" == this.nodeName) {
                    var i = [];
                    t(this).children("option").each(function() {
                        for (var n = {}, o = 0; o < e.options.optionAttributes.length; o++) {
                            var s = e.options.optionAttributes[o];
                            void 0 !== t(this).attr(s) && (n[s] = t(this).attr(s))
                        }
                        i.push({ name: t(this).text(), value: t(this).val(), checked: t(this).prop("selected"), attributes: n })
                    }), r.push({ label: t(this).attr("label"), options: i })
                } else {
                    if ("OPTION" != this.nodeName) return !0;
                    for (var n = {}, o = 0; o < e.options.optionAttributes.length; o++) {
                        var s = e.options.optionAttributes[o];
                        void 0 !== t(this).attr(s) && (n[s] = t(this).attr(s))
                    }
                    r.push({ name: t(this).text(), value: t(this).val(), checked: t(this).prop("selected"), attributes: n })
                }
            }), e.loadOptions(r, !0, !1), n.on("click", 'input[type="checkbox"]', function() { t(this).closest("li").toggleClass("selected"), n.parent().siblings(".ms-list-" + e.listNumber + ".jqmsLoaded").find('option[value="' + e._escapeSelector(t(this).val()) + '"]').prop("selected", t(this).is(":checked")).closest("select").trigger("change"), "function" == typeof e.options.onOptionClick && e.options.onOptionClick(e.element, this), e._updateSelectAllText(), e._updatePlaceholderText() }), n.on("focusin", 'input[type="checkbox"]', function() { t(this).closest("label").addClass("focused") }).on("focusout", 'input[type="checkbox"]', function() { t(this).closest("label").removeClass("focused") }), "function" == typeof e.options.onLoad && e.options.onLoad(e.element), t(e.element).hide()
        },
        loadOptions: function(e, i, n) {
            i = "boolean" != typeof i || i, n = "boolean" != typeof n || n;
            var o = t(this.element),
                s = o.siblings("#ms-list-" + this.listNumber + ".ms-options-wrap").find("> .ms-options > ul"),
                a = o.siblings("#ms-list-" + this.listNumber + ".ms-options-wrap").find("> .ms-options");
            i && (s.find("> li").remove(), n && o.find("> *").remove());
            var r = [];
            for (var l in e)
                if (e.hasOwnProperty(l)) {
                    var c = e[l],
                        d = t("<li/>"),
                        h = !0;
                    if (c.hasOwnProperty("value")) {
                        if (this.options.showCheckbox && this.options.checkboxAutoFit && d.addClass("ms-reflow"), this._addOption(d, c), n) {
                            var u = t("<option/>", { value: c.value, text: c.name });
                            c.hasOwnProperty("attributes") && Object.keys(c.attributes).length && u.attr(c.attributes), c.checked && u.prop("selected", !0), o.append(u)
                        }
                    } else {
                        if (!c.hasOwnProperty("options")) continue;
                        var p = t("<optgroup/>", { label: c.label });
                        for (var f in s.find("> li.optgroup > span.label").each(function() { t(this).text() == c.label && (d = t(this).closest(".optgroup"), h = !1) }), n && (o.find('optgroup[label="' + c.label + '"]').length ? p = o.find('optgroup[label="' + c.label + '"]') : o.append(p)), h && (d.addClass("optgroup"), d.append('<span class="label">' + c.label + "</span>"), d.find("> .label").css({ clear: "both" }), this.options.selectGroup && d.append(`\n                            <label class="checkbox select-all ms-selectall">\n                                <input type="checkbox"/>\n                                <span ></span>${this.options.texts.selectAll}\n                            </label>`), d.append("<ul/>")), c.options)
                            if (c.options.hasOwnProperty(f)) {
                                var m = c.options[f],
                                    g = t("<li/>");
                                if (this.options.showCheckbox && this.options.checkboxAutoFit && g.addClass("ms-reflow"), m.hasOwnProperty("value") && (this._addOption(g, m), d.find("> ul").append(g), n)) {
                                    u = t("<option/>", { value: m.value, text: m.name });
                                    m.hasOwnProperty("attributes") && Object.keys(m.attributes).length && u.attr(m.attributes), m.checked && u.prop("selected", !0), p.append(u)
                                }
                            }
                    }
                    h && r.push(d);
                    var v = t(d);
                    t(v).find("li:not(.optgroup)").length == t(v).find("li.selected:not(.optgroup)").length && t(v).find(".ms-selectall input").prop("checked", !0)
                }
            if (s.append(r), this.options.checkboxAutoFit && this.options.showCheckbox && !a.hasClass("hide-checkbox")) {
                var y = s.find('.ms-reflow:eq(0) input[type="checkbox"]');
                if (y.length) {
                    var b = y.outerWidth();
                    b = b || 15, s.find(".ms-reflow label").css("padding-left", 2 * parseInt(y.closest("label").css("padding-left")) + b), s.find(".ms-reflow").removeClass("ms-reflow")
                }
            }
            this._updatePlaceholderText(), a.find("ul").css({ "column-count": "", "column-gap": "", "-webkit-column-count": "", "-webkit-column-gap": "", "-moz-column-count": "", "-moz-column-gap": "" }), o.find("optgroup").length ? (s.find("> li:not(.optgroup)").css({ float: "left", width: 100 / this.options.columns + "%" }), s.find("li.optgroup").css({ clear: "both" }).find("> ul").css({ "column-count": this.options.columns, "column-gap": 0, "-webkit-column-count": this.options.columns, "-webkit-column-gap": 0, "-moz-column-count": this.options.columns, "-moz-column-gap": 0 }), this._ieVersion() && this._ieVersion() < 10 && s.find("li.optgroup > ul > li").css({ float: "left", width: 100 / this.options.columns + "%" })) : (s.css({ "column-count": this.options.columns, "column-gap": 0, "-webkit-column-count": this.options.columns, "-webkit-column-gap": 0, "-moz-column-count": this.options.columns, "-moz-column-gap": 0 }), this._ieVersion() && this._ieVersion() < 10 && s.find("> li").css({ float: "left", width: 100 / this.options.columns + "%" })), this._updateSelectAllText()
        },
        settings: function(e) { this.options = t.extend(!0, {}, this.options, e), this.reload() },
        unload: function() { t(this.element).siblings("#ms-list-" + this.listNumber + ".ms-options-wrap").remove(), t(this.element).show(function() { t(this).css("display", "").removeClass("jqmsLoaded") }) },
        reload: function() { t(this.element).siblings("#ms-list-" + this.listNumber + ".ms-options-wrap").remove(), t(this.element).removeClass("jqmsLoaded"), this.load() },
        reset: function() {
            var e = [];
            t(this.element).find("option").each(function() { t(this).prop("defaultSelected") && e.push(t(this).val()) }), t(this.element).val(e), this.reload()
        },
        disable: function(e) { e = "boolean" != typeof e || e, t(this.element).prop("disabled", e), t(this.element).siblings("#ms-list-" + this.listNumber + ".ms-options-wrap").find("button:first-child").prop("disabled", e) },
        _updateSelectAllText: function() {
            if (this.updateSelectAll) {
                var e = this;
                if (e.options.selectAll || e.options.selectGroup) {
                    var i = t(e.element).siblings("#ms-list-" + e.listNumber + ".ms-options-wrap").find("> .ms-options");
                    i.find(".ms-selectall").each(function() {
                        var n = t(this).parent().find("li:not(.optgroup,.selected,.ms-hidden)");
                        i.find(".ms-selectall").hasClass("select-all") || t(this).text(n.length ? e.options.texts.selectAll : e.options.texts.unselectAll)
                    })
                }
            }
        },
        _updatePlaceholderText: function() {
            if (this.updatePlaceholder) {
                var e = t(this.element),
                    i = e.val() ? e.val() : [],
                    n = e.siblings("#ms-list-" + this.listNumber + ".ms-options-wrap").find("> button:first-child").find("span"),
                    o = e.siblings("#ms-list-" + this.listNumber + ".ms-options-wrap").find("> .ms-options");
                e.find("option:selected:disabled").length && (i = [], e.find("option:selected").each(function() { i.push(t(this).val()) }));
                var s = [];
                for (var a in i)
                    if (i.hasOwnProperty(a) && (s.push(t.trim(e.find('option[value="' + this._escapeSelector(i[a]) + '"]').text())), s.length >= this.options.maxPlaceholderOpts)) break;
                n.text(s.join(", ")), s.length ? (o.closest(".ms-options-wrap").addClass("ms-has-selections"), "function" == typeof this.options.onPlaceholder && this.options.onPlaceholder(this.element, n, s)) : o.closest(".ms-options-wrap").removeClass("ms-has-selections"), s.length || n.text(this.options.texts.placeholder)
            }
        },
        _addOption: function(e, i) {
            var o = t("<div/>").html(i.name).text(),
                s = t("<label/>", { class: "checkbox", for: "ms-opt-" + n }).html("<span></span>" + i.name),
                a = t("<input>", { type: "checkbox", title: o, id: "ms-opt-" + n, value: i.value });
            i.hasOwnProperty("attributes") && Object.keys(i.attributes).length && a.attr(i.attributes), i.checked && (e.addClass("default selected"), a.prop("checked", !0)), s.prepend(a);
            var r = "";
            this.options.searchOptions.searchText && (r += " " + o.toLowerCase()), this.options.searchOptions.searchValue && (r += " " + i.value.toLowerCase()), e.attr("data-search-term", t.trim(changeAlias(r))).prepend(s), n += 1
        },
        _ieVersion: function() { var t = navigator.userAgent.toLowerCase(); return -1 != t.indexOf("msie") && parseInt(t.split("msie")[1]) },
        _escapeSelector: function(e) { return "function" == typeof t.escapeSelector ? t.escapeSelector(e) : e.replace(/[!"#$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g, "\\$&") }
    }, t.fn.multiselect = function(e) {
        if (this.length) {
            var i, n = arguments;
            return void 0 === e || "object" == typeof e ? this.each(function() { t.data(this, "plugin_multiselect") || t.data(this, "plugin_multiselect", new o(this, e)) }) : "string" == typeof e && "_" !== e[0] && "init" !== e ? (this.each(function() {
                var s = t.data(this, "plugin_multiselect");
                s instanceof o && "function" == typeof s[e] && (i = s[e].apply(s, Array.prototype.slice.call(n, 1))), "unload" === e && t.data(this, "plugin_multiselect", null)
            }), i) : void 0
        }
    }
}(jQuery);
const changeAlias = t => t = (t = (t = (t = (t = (t = (t = (t = t.toLowerCase()).replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")).replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")).replace(/ì|í|ị|ỉ|ĩ/g, "i")).replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")).replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")).replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")).replace(/đ/g, "d");
var $window = $(window),
    hd = $("#header"),
    hh = hd.outerHeight(),
    wh = $(window).outerHeight(),
    wst = $(window).scrollTop(),
    ah = $('<div class="afterHeader"> ');

function headerScrollUpDown() {
    var t = 0;
    $("#panel").length > 0 && (t += $("#panel").height());
    var e = t,
        i = t + $(".sec-breadcrumbs").outerHeight() + $(".project-detail-feature").outerHeight() + $(".t-detail").outerHeight() + $(".t-detail-s").outerHeight();
    $(window).scroll(function(n) {
        if ($(".filter-house-subpage").length > 0) {
            var o = $(this).scrollTop(),
                s = 0;
            $(".secShowFilter").length > 0 && (s += $(".secShowFilter").height() + $("#header").height() + t), o >= s ? ($("body").addClass("stickyBody"), o >= e ? $("body").removeClass("stickyUp").addClass("stickyDown") : $("body").removeClass("stickyDown").addClass("stickyUp"), e = o) : $("body").removeClass("stickyUp").removeClass("stickyDown").removeClass("stickyBody")
        } else $(window).scrollTop() > t ? $("#header").addClass("sticky") : $("#header").removeClass("sticky");
        $(".popupTuvan").length > 0 & $(this).scrollTop() >= i ? $("body").addClass("showBtnTuvan") : $("body").removeClass("showBtnTuvan")
    })
}

function toggleSlideSub(t, e) { t.hasClass("parent-showsub") ? e.slideUp(300, function() { t.removeClass("parent-showsub") }) : e.slideDown(300, function() { t.addClass("parent-showsub") }) }

function ClickToggleSlide(t, e, i, n) { t.click(function() { toggleSlideSub(i, n) }), i.prepend(t), e.click(function(t) { t.preventDefault(), toggleSlideSub(i, n) }) }

function equal() {
    $(".equalHeight").each(function() {
        var t = $(this),
            e = t.find(".equal"),
            i = t.attr("data-padding");
        i || (i = 0), t.length > 0 && e.imagesLoaded(function() { equalHeight(e, parseInt(i)) })
    })
}

function equalHeight(t, e) {
    var i = 0;
    $(t).each(function() { current = $(this).height(), parseInt(i) < parseInt(current) && (i = current) }), $(t).css("height", i + e + "px")
}

function cttab() {
    $("[class*='cttab'] .tab-menu > div").click(function() {
        var t = $(this).data("index"),
            e = $(this).parent(),
            i = e.parent().children(".tab-content");
        t >= 0 || (t = $(this).index()), e.children().removeClass("active"), i.children().removeClass("active"), $(this).addClass("active"), i.children(":eq(" + t + ")").addClass("active")
    })
}

function cttab2() {
    $("[class*='cttab'] .tab-menu-owl .i-m-tab").click(function() {
        var t = parseInt($(this).data("index")),
            e = $(this).closest(".tab-menu-owl"),
            i = $(this).closest('[class*="cttab"]').children(".tab-content");
        t || (t = $(this).index()), e.find(".i-m-tab").removeClass("active"), i.children().removeClass("active"), $(this).addClass("active"), i.children(":eq(" + t + ")").addClass("active")
    })
}
hd.after(ah.height(hh)), $(document).ready(function() {
    if ($(".filter-house-subpage").length > 0) {
        $("#header .container").append('<div class="btnShowFilter"> <span class="more">Tìm kiếm</span><span class="less">Thu gọn</span> <i class="fa fa-search"></i></div>'), $("#header").addClass("hasFilter");
        var t = $('<span class="filter-overlay"></span>').on("click", function() { $("body").toggleClass("showFilter"), $(".filter-house-subpage").slideToggle(200) });
        $("#wrapper").prepend(t)
    }
    $(".toggleClass > .toggle").each(function() { $(this).click(function() { $(this).parent().toggleClass("active") }) }), $(".btnModal").click(function(t) {
        t.preventDefault();
        var e = $(this).data("modal"),
            i = $(this).parents(".myModal");
        $("body").toggleClass("showModal"), i.length > 0 ? i.removeClass("active") : $("div#" + e).toggleClass("active")
    }), $(".myModal").each(function() {
        var t = $(this).children(".container "),
            e = t.children(".contentModal").outerHeight() + 80;
        wh > e && t.addClass("middle")
    }), $(".menu-btn-2").click(function() { $("body").toggleClass("showMenu") }), $(".menu-btn").click(function() { $("body").toggleClass("showMenu") }), $("ul.menu-top-header ul").each(function() {
        var t = $(this).parent(),
            e = t.children('a[href="#"]'),
            i = $("<span>", { class: "showsubmenu icon-arrow-2 ib", text: "" });
        $(this).wrap('<div class="wrapul"></div>');
        var n = t.children(".wrapul");
        ClickToggleSlide(i, e, t, n)
    }), $("ul.menu-taxonomy ul").each(function() { $(this).parent().addClass("children") });
    var e = $(".wrap-menu-mb");
    e.data("style");
    e.find('li[class*="children"]').each(function() {
        var t = $(this),
            e = t.attr("id"),
            i = t.children("ul"),
            n = t.children('a[href="#"]'),
            o = $("<span>", { class: "showsubmenu icon-arrow-3", text: "" });
        t.children("ul").children("li").children("ul").attr("data-parent", e), ClickToggleSlide(o, n, t, i)
    }), $("a.scrollspy").click(function(t) {
        t.preventDefault();
        var e = $(this).attr("href");
        $(e).offset().top;
        $("html, body").animate({ scrollTop: $(e).offset().top - hh }, 1e3)
    }), $(window).scroll(function() { $(this).scrollTop() > 100 ? $("#back-top").addClass("show") : $("#back-top").removeClass("show") }), $("#back-top").click(function() { return $("body,html").animate({ scrollTop: 0 }, 800), !1 }), $(".searchform .textinput").each(function() {
        $(this).bind("DOMAttrModified textInput input change  paste ", function() {
            var t = $(this).val();
            t && (t.length >= 3 ? $(this).parent(".searchform").addClass("focus") : $(this).parent(".searchform").removeClass("focus"))
        })
    }), $(".box-collapse > .tab > .tab-title").each(function() { var t = $(this).click(function() { t.parent().children(".tab-content").slideToggle(300), t.parent().toggleClass("show") }) }), $("button.reset").on("click", function() { $("#form-search-buy").get(0).reset(), $("#form-search-buy option:selected").prop("selected", !1), $("#select-ward").attr("disabled", "disabled"), $("#form-search-buy input:checkbox").attr("checked", !1), $("#form-search-buy input:text").val(""), $("#select-district").multiselect("reload"), $("#select-ward").multiselect("reload"), $("#select-property option:selected").prop("selected", !1), $("#select-property").multiselect("reload") }), $(".btn-advance-search").on("click", function() { $(this).parent().children(".advance-search").slideToggle(200), $(this).toggleClass("active") }), $(".btnShowFilter").on("click", function() { $("body").toggleClass("showFilter"), $(".filter-house-subpage").slideToggle(200) }), $(".qualitys").each(function() {
        var t = $(this).children(".qualitys input"),
            e = $(this).children(".qualitys .plus"),
            i = $(this).children(".qualitys .minus"),
            n = parseFloat(t.attr("maxvalue"));

        function o(e) { t.val(e) }
        t.on("change", function() {
            var e = t.val();
            e > n && (e = n), e < 1 && (e = ""), o(e)
        }), $(e).on("click", function() { var e = t.val(); "" == e ? e = 1 : e++, e > n && (e = n), o(e) }), $(i).on("click", function() {
            var e = t.val();
            e > 1 ? e-- : e = "", o(e)
        })
    }), cttab(), cttab2();
    var i = i || {},
        n = {
            _ticking: !1,
            check: function() {
                if (!n._ticking) {
                    n._ticking = !0, void 0 === n.threshold && (void 0 !== i.threshold ? n.threshold = parseInt(i.threshold) : n.threshold = 200);
                    var t = document.documentElement.clientHeight || body.clientHeight,
                        e = !1,
                        s = document.getElementsByClassName("lazy-hidden");
                    [].forEach.call(s, function(i, s, a) {
                        var r = i.getBoundingClientRect(),
                            l = parseFloat(i.getAttribute("offset"));
                        o = l ? 0 - l : 50, t - r.top + o > 0 && (n.show(i), e = !0)
                    }), n._ticking = !1, e && n.check()
                }
            },
            show: function(t) {
                t.className = t.className.replace(/(?:^|\s)lazy-hidden(?!\S)/g, ""), t.addEventListener("load", function() { t.className += " loaded", n.customEvent(t, "lazyloaded") }, !1);
                var e = t.getAttribute("data-lazy-type");
                if (t.className += " loaded", t.classList.contains("onepage") && (t.classList.contains("active") || ($(".onepage").removeClass("active"), t.classList.add("active"))), "image" == e) null != t.getAttribute("data-lazy-srcset") && t.setAttribute("srcset", t.getAttribute("data-lazy-srcset")), null != t.getAttribute("data-lazy-sizes") && t.setAttribute("sizes", t.getAttribute("data-lazy-sizes")), t.setAttribute("src", t.getAttribute("data-lazy-src"));
                else if ("bg" == e) {
                    var i = t.getAttribute("data-lazy-src");
                    t.style.backgroundImage = "url(" + i + ")"
                } else if ("iframe" == e) {
                    i = t.getAttribute("data-lazy-src");
                    (s = document.createElement("div")).innerHTML = i;
                    var o = s.firstChild;
                    t.parentNode.replaceChild(o, t)
                } else if ("mp4" == e) {
                    var s = '<source src="' + (i = t.getAttribute("data-lazy-src")) + '" type="video/mp4">';
                    t.innerHTML += s
                }
            },
            customEvent: function(t, e) {
                var i;
                document.createEvent ? (i = document.createEvent("HTMLEvents")).initEvent(e, !0, !0) : (i = document.createEventObject()).eventType = e, i.eventName = e, document.createEvent ? t.dispatchEvent(i) : t.fireEvent("on" + i.eventType, i)
            }
        };
    window.addEventListener("load", n.check, !1), window.addEventListener("scroll", n.check, !1), window.addEventListener("resize", n.check, !1), document.getElementsByTagName("body").item(0).addEventListener("post-load", n.check, !1), $window.bind("load", function() { headerScrollUpDown(), equal() }), isRes = function() { return $window.width() > 767 }, $window.resize(function() { equal() }), App.UI.inputAllowNumber([".call-phone"], !1), App.Feature.setCookie2("close-app", !0, 1)
});
const showHideContactModal = () => { $(".bl-form-callback").is(":visible") ? ($(".bl-form-callback").hide(), $(".bl-social.phone").removeClass("actived")) : ($(".bl-form-callback").show(), $(".bl-social.phone").addClass("actived")) },
    showHideTextContactModal = () => { $(".bl-text-contact").is(":visible") ? $(".bl-text-contact").hide() : ($(".bl-form-callback").is(":visible") ? ($(".bl-form-callback").hide(), $(".bl-social.phone").removeClass("actived")) : ($(".bl-form-callback").show(), $(".bl-social.phone").addClass("actived")), $(".bl-text-contact").show()) },
    checkValidFormContact = function(t) { t.removeData("bootstrapValidator"), t.bootstrapValidator({ message: "Giá trị chưa đúng", excluded: [":hidden"], feedbackIcons: { valid: "glyphicon glyphicon-ok", invalid: "glyphicon glyphicon-remove", validating: "glyphicon glyphicon-refresh" }, fields: { call_phone: { message: "", validators: { notEmpty: { message: messages.home_nhucau_phone_empty }, stringLength: { message: messages.home_nhucau_phone_wrongformat, min: 10, max: 10 } } } } }); var e = t.data("bootstrapValidator"); return e.validate(), e.isValid() },
    closeApp = () => { App.Feature.setCookie2("close-app", !0, 1), $(".download-app").hide() },
    callMeFree = (t = !1) => {
        let e = "#frmContact-" + (t ? 2 : 1),
            i = $(e);
        if (!checkValidFormContact(i)) return !1;
        let n = { phone: $(e + " .call-phone").val(), name: $(e + " .cname").val() },
            o = TrackUserRoute.getVisitedList();
        o && (n.visitList = o), App.Feature.Post("/api/phone-subscribe", n, function(t) { t.result ? (App.UI.Done(t.message), $(e + " .call-phone").val(""), $(e + " .cname").val("")) : 405 == t.code ? App.UI.Error(t.message) : App.UI.Error("Đã có lỗi xảy ra!") })
    };

function itemOwl(t, e, i) {
    var n, o, s, a, r = 5e3,
        l = 0,
        c = "icon-arrow-1",
        d = i.split("||");
    $.each(d, function(t, e) { "autospeed" == (e = e.split("="))[0] ? r = parseInt(e[1]): "out" == e[0] ? n = e[1] : "in" == e[0] ? o = e[1] : "nav" == e[0] ? a = e[1] : "dot" == e[0] ? s = e[1] : "margin" == e[0] ? l = parseInt(e[1]) : "arrows" == e[0] && (c = e[1]) }), t.owlCarousel({ navText: ['<i class="' + c + ' ix"></i>', '<i class="' + c + '"></i>'], nav: !!t.hasClass("s-nav"), dots: !!t.hasClass("s-dots"), loop: !!t.hasClass("s-loop"), autoplay: !!t.hasClass("s-auto"), autoplayHoverPause: !0, center: !!t.hasClass("s-center"), autoWidth: !!t.hasClass("s-width"), autoHeight: !!t.hasClass("s-height"), lazyLoad: !0, video: !!t.hasClass("s-video"), mouseDrag: !t.hasClass("s-drag"), autoplayTimeout: r, animateOut: n || "", animateIn: o || "", navContainer: a || !1, dotsContainer: s || !1, margin: l, responsive: { 0: { items: parseInt(e[3]), margin: 10 }, 576: { items: parseInt(e[2]), margin: 10 }, 768: { items: parseInt(e[1]), margin: 10 }, 992: { items: parseInt(e[0]) } } })
}

function ResOwlSlider() {
    $(".owl-carousel").each(function() {
        var t = $(this),
            e = t.attr("data-res"),
            i = t.attr("paramowl");
        i || (i = ""), e || (e = "1,1,1,1"), e = e.split(","), t.imagesLoaded(function() { itemOwl(t, e, i) }), t.on("initialized.owl.carousel", function(t) { $(".owl-item.active .group-ef").addClass("loaded") })
    })
}

function SynOwlSlider() {
    $(".wrap-syn-owl").each(function() {
        var t = $(this),
            e = t.find(".syn-slider-1"),
            i = t.find(".syn-slider-2");
        e.on("changed.owl.carousel", function(t) {
            setTimeout(() => {
                var e = t.item.count - 1,
                    n = Math.round(t.item.index - t.item.count / 2 - .5);
                n < 0 && (n = e), n > e && (n = 0), i.find(".owl-item").removeClass("current").eq(n).addClass("current");
                var o = i.find(".owl-item.active").length - 1,
                    s = i.find(".owl-item.active").first().index(),
                    a = i.find(".owl-item.active").last().index();
                n > a && i.data("owl.carousel").to(n, 100, !0), n < s && i.data("owl.carousel").to(n - o, 100, !0)
            }, 20)
        }), i.find(".owl-item:first-child").addClass("current"), i.on("click", ".owl-item", function(t) {
            t.preventDefault();
            var i = $(this).index();
            e.data("owl.carousel").to(i, 300, !0)
        })
    })
}
ResOwlSlider(), $(window).bind("load", function() {
        SynOwlSlider(), $(".nav-middle-img").each(function() {
            var t = $(this).find(".owl-item:first-child .img").outerHeight();
            $(this).find(".owl-nav").css("top", t / 2)
        })
    }),
    function(t) {!jQuery && "function" == typeof define && define.amd ? define(["jquery"], function(e) { return t(e, document, window, navigator) }) : jQuery || "object" != typeof exports ? t(jQuery, document, window, navigator) : t(require("jquery"), document, window, navigator) }(function(t, e, i, n, o) {
        "use strict";
        var s, a, r = 0,
            l = (a = /msie\s\d+/i, 0 < (s = n.userAgent).search(a) && a.exec(s).toString().split(" ")[1] < 9 && (t("html").addClass("lt-ie9"), !0));
        Function.prototype.bind || (Function.prototype.bind = function(t) {
            var e = this,
                i = [].slice;
            if ("function" != typeof e) throw new TypeError;
            var n = i.call(arguments, 1),
                o = function() {
                    if (this instanceof o) {
                        var s = function() {};
                        s.prototype = e.prototype;
                        var a = new s,
                            r = e.apply(a, n.concat(i.call(arguments)));
                        return Object(r) === r ? r : a
                    }
                    return e.apply(t, n.concat(i.call(arguments)))
                };
            return o
        }), Array.prototype.indexOf || (Array.prototype.indexOf = function(t, e) {
            var i;
            if (null == this) throw new TypeError('"this" is null or not defined');
            var n = Object(this),
                o = n.length >>> 0;
            if (0 === o) return -1;
            var s = +e || 0;
            if (Math.abs(s) === 1 / 0 && (s = 0), o <= s) return -1;
            for (i = Math.max(0 <= s ? s : o - Math.abs(s), 0); i < o;) {
                if (i in n && n[i] === t) return i;
                i++
            }
            return -1
        });
        var c = function(n, s, a) {
            this.VERSION = "2.3.0", this.input = n, this.plugin_count = a, this.current_plugin = 0, this.calc_count = 0, this.update_tm = 0, this.old_from = 0, this.old_to = 0, this.old_min_interval = null, this.raf_id = null, this.dragging = !1, this.force_redraw = !1, this.no_diapason = !1, this.has_tab_index = !0, this.is_key = !1, this.is_update = !1, this.is_start = !0, this.is_finish = !1, this.is_active = !1, this.is_resize = !1, this.is_click = !1, s = s || {}, this.$cache = { win: t(i), body: t(e.body), input: t(n), cont: null, rs: null, min: null, max: null, from: null, to: null, single: null, bar: null, line: null, s_single: null, s_from: null, s_to: null, shad_single: null, shad_from: null, shad_to: null, edge: null, grid: null, grid_labels: [] }, this.coords = { x_gap: 0, x_pointer: 0, w_rs: 0, w_rs_old: 0, w_handle: 0, p_gap: 0, p_gap_left: 0, p_gap_right: 0, p_step: 0, p_pointer: 0, p_handle: 0, p_single_fake: 0, p_single_real: 0, p_from_fake: 0, p_from_real: 0, p_to_fake: 0, p_to_real: 0, p_bar_x: 0, p_bar_w: 0, grid_gap: 0, big_num: 0, big: [], big_w: [], big_p: [], big_x: [] }, this.labels = { w_min: 0, w_max: 0, w_from: 0, w_to: 0, w_single: 0, p_min: 0, p_max: 0, p_from_fake: 0, p_from_left: 0, p_to_fake: 0, p_to_left: 0, p_single_fake: 0, p_single_left: 0 };
            var r, l, c, d = this.$cache.input,
                h = d.prop("value");
            for (c in r = { skin: "flat", type: "single", min: 10, max: 100, from: null, to: null, step: 1, min_interval: 0, max_interval: 0, drag_interval: !1, values: [], p_values: [], from_fixed: !1, from_min: null, from_max: null, from_shadow: !1, to_fixed: !1, to_min: null, to_max: null, to_shadow: !1, prettify_enabled: !0, prettify_separator: " ", prettify: null, force_edges: !1, keyboard: !0, grid: !1, grid_margin: !0, grid_num: 4, grid_snap: !1, hide_min_max: !1, hide_from_to: !1, prefix: "", postfix: "", max_postfix: "", decorate_both: !0, values_separator: " — ", input_values_separator: ";", disable: !1, block: !1, extra_classes: "", scope: null, onStart: null, onChange: null, onFinish: null, onUpdate: null }, "INPUT" !== d[0].nodeName && console && console.warn && console.warn("Base element should be <input>!", d[0]), (l = { skin: d.data("skin"), type: d.data("type"), min: d.data("min"), max: d.data("max"), from: d.data("from"), to: d.data("to"), step: d.data("step"), min_interval: d.data("minInterval"), max_interval: d.data("maxInterval"), drag_interval: d.data("dragInterval"), values: d.data("values"), from_fixed: d.data("fromFixed"), from_min: d.data("fromMin"), from_max: d.data("fromMax"), from_shadow: d.data("fromShadow"), to_fixed: d.data("toFixed"), to_min: d.data("toMin"), to_max: d.data("toMax"), to_shadow: d.data("toShadow"), prettify_enabled: d.data("prettifyEnabled"), prettify_separator: d.data("prettifySeparator"), force_edges: d.data("forceEdges"), keyboard: d.data("keyboard"), grid: d.data("grid"), grid_margin: d.data("gridMargin"), grid_num: d.data("gridNum"), grid_snap: d.data("gridSnap"), hide_min_max: d.data("hideMinMax"), hide_from_to: d.data("hideFromTo"), prefix: d.data("prefix"), postfix: d.data("postfix"), max_postfix: d.data("maxPostfix"), decorate_both: d.data("decorateBoth"), values_separator: d.data("valuesSeparator"), input_values_separator: d.data("inputValuesSeparator"), disable: d.data("disable"), block: d.data("block"), extra_classes: d.data("extraClasses") }).values = l.values && l.values.split(","), l) l.hasOwnProperty(c) && (l[c] !== o && "" !== l[c] || delete l[c]);
            h !== o && "" !== h && ((h = h.split(l.input_values_separator || s.input_values_separator || ";"))[0] && h[0] == +h[0] && (h[0] = +h[0]), h[1] && h[1] == +h[1] && (h[1] = +h[1]), s && s.values && s.values.length ? (r.from = h[0] && s.values.indexOf(h[0]), r.to = h[1] && s.values.indexOf(h[1])) : (r.from = h[0] && +h[0], r.to = h[1] && +h[1])), t.extend(r, s), t.extend(r, l), this.options = r, this.update_check = {}, this.validate(), this.result = { input: this.$cache.input, slider: null, min: this.options.min, max: this.options.max, from: this.options.from, from_percent: 0, from_value: null, to: this.options.to, to_percent: 0, to_value: null }, this.init()
        };
        c.prototype = {
                init: function(t) { this.no_diapason = !1, this.coords.p_step = this.convertToPercent(this.options.step, !0), this.target = "base", this.toggleInput(), this.append(), this.setMinMax(), t ? (this.force_redraw = !0, this.calc(!0), this.callOnUpdate()) : (this.force_redraw = !0, this.calc(!0), this.callOnStart()), this.updateScene() },
                append: function() {
                    var t = '<span class="irs irs--' + this.options.skin + " js-irs-" + this.plugin_count + " " + this.options.extra_classes + '"></span>';
                    this.$cache.input.before(t), this.$cache.input.prop("readonly", !0), this.$cache.cont = this.$cache.input.prev(), this.result.slider = this.$cache.cont, this.$cache.cont.html('<span class="irs"><span class="irs-line" tabindex="0"></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span>'), this.$cache.rs = this.$cache.cont.find(".irs"), this.$cache.min = this.$cache.cont.find(".irs-min"), this.$cache.max = this.$cache.cont.find(".irs-max"), this.$cache.from = this.$cache.cont.find(".irs-from"), this.$cache.to = this.$cache.cont.find(".irs-to"), this.$cache.single = this.$cache.cont.find(".irs-single"), this.$cache.line = this.$cache.cont.find(".irs-line"), this.$cache.grid = this.$cache.cont.find(".irs-grid"), "single" === this.options.type ? (this.$cache.cont.append('<span class="irs-bar irs-bar--single"></span><span class="irs-shadow shadow-single"></span><span class="irs-handle single"><i></i><i></i><i></i></span>'), this.$cache.bar = this.$cache.cont.find(".irs-bar"), this.$cache.edge = this.$cache.cont.find(".irs-bar-edge"), this.$cache.s_single = this.$cache.cont.find(".single"), this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.shad_single = this.$cache.cont.find(".shadow-single")) : (this.$cache.cont.append('<span class="irs-bar"></span><span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-handle from"><i></i><i></i><i></i></span><span class="irs-handle to"><i></i><i></i><i></i></span>'), this.$cache.bar = this.$cache.cont.find(".irs-bar"), this.$cache.s_from = this.$cache.cont.find(".from"), this.$cache.s_to = this.$cache.cont.find(".to"), this.$cache.shad_from = this.$cache.cont.find(".shadow-from"), this.$cache.shad_to = this.$cache.cont.find(".shadow-to"), this.setTopHandler()), this.options.hide_from_to && (this.$cache.from[0].style.display = "none", this.$cache.to[0].style.display = "none", this.$cache.single[0].style.display = "none"), this.appendGrid(), this.options.disable ? (this.appendDisableMask(), this.$cache.input[0].disabled = !0) : (this.$cache.input[0].disabled = !1, this.removeDisableMask(), this.bindEvents()), this.options.disable || (this.options.block ? this.appendDisableMask() : this.removeDisableMask()), this.options.drag_interval && (this.$cache.bar[0].style.cursor = "ew-resize")
                },
                setTopHandler: function() {
                    var t = this.options.min,
                        e = this.options.max,
                        i = this.options.from,
                        n = this.options.to;
                    t < i && n === e ? this.$cache.s_from.addClass("type_last") : n < e && this.$cache.s_to.addClass("type_last")
                },
                changeLevel: function(t) {
                    switch (t) {
                        case "single":
                            this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_single_fake), this.$cache.s_single.addClass("state_hover");
                            break;
                        case "from":
                            this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake), this.$cache.s_from.addClass("state_hover"), this.$cache.s_from.addClass("type_last"), this.$cache.s_to.removeClass("type_last");
                            break;
                        case "to":
                            this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_to_fake), this.$cache.s_to.addClass("state_hover"), this.$cache.s_to.addClass("type_last"), this.$cache.s_from.removeClass("type_last");
                            break;
                        case "both":
                            this.coords.p_gap_left = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake), this.coords.p_gap_right = this.toFixed(this.coords.p_to_fake - this.coords.p_pointer), this.$cache.s_to.removeClass("type_last"), this.$cache.s_from.removeClass("type_last")
                    }
                },
                appendDisableMask: function() { this.$cache.cont.append('<span class="irs-disable-mask"></span>'), this.$cache.cont.addClass("irs-disabled") },
                removeDisableMask: function() { this.$cache.cont.remove(".irs-disable-mask"), this.$cache.cont.removeClass("irs-disabled") },
                remove: function() { this.$cache.cont.remove(), this.$cache.cont = null, this.$cache.line.off("keydown.irs_" + this.plugin_count), this.$cache.body.off("touchmove.irs_" + this.plugin_count), this.$cache.body.off("mousemove.irs_" + this.plugin_count), this.$cache.win.off("touchend.irs_" + this.plugin_count), this.$cache.win.off("mouseup.irs_" + this.plugin_count), l && (this.$cache.body.off("mouseup.irs_" + this.plugin_count), this.$cache.body.off("mouseleave.irs_" + this.plugin_count)), this.$cache.grid_labels = [], this.coords.big = [], this.coords.big_w = [], this.coords.big_p = [], this.coords.big_x = [], cancelAnimationFrame(this.raf_id) },
                bindEvents: function() { this.no_diapason || (this.$cache.body.on("touchmove.irs_" + this.plugin_count, this.pointerMove.bind(this)), this.$cache.body.on("mousemove.irs_" + this.plugin_count, this.pointerMove.bind(this)), this.$cache.win.on("touchend.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.win.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.line.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.line.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.line.on("focus.irs_" + this.plugin_count, this.pointerFocus.bind(this)), this.options.drag_interval && "double" === this.options.type ? (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "both")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"))) : (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))), "single" === this.options.type ? (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.shad_single.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.edge.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_single.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))) : (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))), this.options.keyboard && this.$cache.line.on("keydown.irs_" + this.plugin_count, this.key.bind(this, "keyboard")), l && (this.$cache.body.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.body.on("mouseleave.irs_" + this.plugin_count, this.pointerUp.bind(this)))) },
                pointerFocus: function(t) {
                    var e, i;
                    this.target || (e = (i = "single" === this.options.type ? this.$cache.single : this.$cache.from).offset().left, e += i.width() / 2 - 1, this.pointerClick("single", { preventDefault: function() {}, pageX: e }))
                },
                pointerMove: function(t) {
                    if (this.dragging) {
                        var e = t.pageX || t.originalEvent.touches && t.originalEvent.touches[0].pageX;
                        this.coords.x_pointer = e - this.coords.x_gap, this.calc()
                    }
                },
                pointerUp: function(e) { this.current_plugin === this.plugin_count && this.is_active && (this.is_active = !1, this.$cache.cont.find(".state_hover").removeClass("state_hover"), this.force_redraw = !0, l && t("*").prop("unselectable", !1), this.updateScene(), this.restoreOriginalMinInterval(), (t.contains(this.$cache.cont[0], e.target) || this.dragging) && this.callOnFinish(), this.dragging = !1) },
                pointerDown: function(e, i) {
                    i.preventDefault();
                    var n = i.pageX || i.originalEvent.touches && i.originalEvent.touches[0].pageX;
                    2 !== i.button && ("both" === e && this.setTempMinInterval(), e || (e = this.target || "from"), this.current_plugin = this.plugin_count, this.target = e, this.is_active = !0, this.dragging = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = n - this.coords.x_gap, this.calcPointerPercent(), this.changeLevel(e), l && t("*").prop("unselectable", !0), this.$cache.line.trigger("focus"), this.updateScene())
                },
                pointerClick: function(t, e) {
                    e.preventDefault();
                    var i = e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX;
                    2 !== e.button && (this.current_plugin = this.plugin_count, this.target = t, this.is_click = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = +(i - this.coords.x_gap).toFixed(), this.force_redraw = !0, this.calc(), this.$cache.line.trigger("focus"))
                },
                key: function(t, e) {
                    if (!(this.current_plugin !== this.plugin_count || e.altKey || e.ctrlKey || e.shiftKey || e.metaKey)) {
                        switch (e.which) {
                            case 83:
                            case 65:
                            case 40:
                            case 37:
                                e.preventDefault(), this.moveByKey(!1);
                                break;
                            case 87:
                            case 68:
                            case 38:
                            case 39:
                                e.preventDefault(), this.moveByKey(!0)
                        }
                        return !0
                    }
                },
                moveByKey: function(t) {
                    var e = this.coords.p_pointer,
                        i = (this.options.max - this.options.min) / 100;
                    i = this.options.step / i, t ? e += i : e -= i, this.coords.x_pointer = this.toFixed(this.coords.w_rs / 100 * e), this.is_key = !0, this.calc()
                },
                setMinMax: function() {
                    if (this.options) {
                        if (this.options.hide_min_max) return this.$cache.min[0].style.display = "none", void(this.$cache.max[0].style.display = "none");
                        if (this.options.values.length) this.$cache.min.html(this.decorate(this.options.p_values[this.options.min])), this.$cache.max.html(this.decorate(this.options.p_values[this.options.max]));
                        else {
                            var t = this._prettify(this.options.min),
                                e = this._prettify(this.options.max);
                            this.result.min_pretty = t, this.result.max_pretty = e, this.$cache.min.html(this.decorate(t, this.options.min)), this.$cache.max.html(this.decorate(e, this.options.max))
                        }
                        this.labels.w_min = this.$cache.min.outerWidth(!1), this.labels.w_max = this.$cache.max.outerWidth(!1)
                    }
                },
                setTempMinInterval: function() {
                    var t = this.result.to - this.result.from;
                    null === this.old_min_interval && (this.old_min_interval = this.options.min_interval), this.options.min_interval = t
                },
                restoreOriginalMinInterval: function() { null !== this.old_min_interval && (this.options.min_interval = this.old_min_interval, this.old_min_interval = null) },
                calc: function(t) {
                    if (this.options && (this.calc_count++, (10 === this.calc_count || t) && (this.calc_count = 0, this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.calcHandlePercent()), this.coords.w_rs)) {
                        this.calcPointerPercent();
                        var e = this.getHandleX();
                        switch ("both" === this.target && (this.coords.p_gap = 0, e = this.getHandleX()), "click" === this.target && (this.coords.p_gap = this.coords.p_handle / 2, e = this.getHandleX(), this.options.drag_interval ? this.target = "both_one" : this.target = this.chooseHandle(e)), this.target) {
                            case "base":
                                var i = (this.options.max - this.options.min) / 100,
                                    n = (this.result.from - this.options.min) / i,
                                    o = (this.result.to - this.options.min) / i;
                                this.coords.p_single_real = this.toFixed(n), this.coords.p_from_real = this.toFixed(n), this.coords.p_to_real = this.toFixed(o), this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real), this.target = null;
                                break;
                            case "single":
                                if (this.options.from_fixed) break;
                                this.coords.p_single_real = this.convertToRealPercent(e), this.coords.p_single_real = this.calcWithStep(this.coords.p_single_real), this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max), this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real);
                                break;
                            case "from":
                                if (this.options.from_fixed) break;
                                this.coords.p_from_real = this.convertToRealPercent(e), this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real), this.coords.p_from_real > this.coords.p_to_real && (this.coords.p_from_real = this.coords.p_to_real), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_real = this.checkMaxInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
                                break;
                            case "to":
                                if (this.options.to_fixed) break;
                                this.coords.p_to_real = this.convertToRealPercent(e), this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real), this.coords.p_to_real < this.coords.p_from_real && (this.coords.p_to_real = this.coords.p_from_real), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_real = this.checkMaxInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
                                break;
                            case "both":
                                if (this.options.from_fixed || this.options.to_fixed) break;
                                e = this.toFixed(e + .001 * this.coords.p_handle), this.coords.p_from_real = this.convertToRealPercent(e) - this.coords.p_gap_left, this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_real = this.convertToRealPercent(e) + this.coords.p_gap_right, this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
                                break;
                            case "both_one":
                                if (this.options.from_fixed || this.options.to_fixed) break;
                                var s = this.convertToRealPercent(e),
                                    a = this.result.from_percent,
                                    r = this.result.to_percent - a,
                                    l = r / 2,
                                    c = s - l,
                                    d = s + l;
                                c < 0 && (d = (c = 0) + r), 100 < d && (c = (d = 100) - r), this.coords.p_from_real = this.calcWithStep(c), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_real = this.calcWithStep(d), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real)
                        }
                        "single" === this.options.type ? (this.coords.p_bar_x = this.coords.p_handle / 2, this.coords.p_bar_w = this.coords.p_single_fake, this.result.from_percent = this.coords.p_single_real, this.result.from = this.convertToValue(this.coords.p_single_real), this.result.from_pretty = this._prettify(this.result.from), this.options.values.length && (this.result.from_value = this.options.values[this.result.from])) : (this.coords.p_bar_x = this.toFixed(this.coords.p_from_fake + this.coords.p_handle / 2), this.coords.p_bar_w = this.toFixed(this.coords.p_to_fake - this.coords.p_from_fake), this.result.from_percent = this.coords.p_from_real, this.result.from = this.convertToValue(this.coords.p_from_real), this.result.from_pretty = this._prettify(this.result.from), this.result.to_percent = this.coords.p_to_real, this.result.to = this.convertToValue(this.coords.p_to_real), this.result.to_pretty = this._prettify(this.result.to), this.options.values.length && (this.result.from_value = this.options.values[this.result.from], this.result.to_value = this.options.values[this.result.to])), this.calcMinMax(), this.calcLabels()
                    }
                },
                calcPointerPercent: function() { this.coords.w_rs ? (this.coords.x_pointer < 0 || isNaN(this.coords.x_pointer) ? this.coords.x_pointer = 0 : this.coords.x_pointer > this.coords.w_rs && (this.coords.x_pointer = this.coords.w_rs), this.coords.p_pointer = this.toFixed(this.coords.x_pointer / this.coords.w_rs * 100)) : this.coords.p_pointer = 0 },
                convertToRealPercent: function(t) { return t / (100 - this.coords.p_handle) * 100 },
                convertToFakePercent: function(t) { return t / 100 * (100 - this.coords.p_handle) },
                getHandleX: function() {
                    var t = 100 - this.coords.p_handle,
                        e = this.toFixed(this.coords.p_pointer - this.coords.p_gap);
                    return e < 0 ? e = 0 : t < e && (e = t), e
                },
                calcHandlePercent: function() { "single" === this.options.type ? this.coords.w_handle = this.$cache.s_single.outerWidth(!1) : this.coords.w_handle = this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100) },
                chooseHandle: function(t) { return "single" === this.options.type ? "single" : this.coords.p_from_real + (this.coords.p_to_real - this.coords.p_from_real) / 2 <= t ? this.options.to_fixed ? "from" : "to" : this.options.from_fixed ? "to" : "from" },
                calcMinMax: function() { this.coords.w_rs && (this.labels.p_min = this.labels.w_min / this.coords.w_rs * 100, this.labels.p_max = this.labels.w_max / this.coords.w_rs * 100) },
                calcLabels: function() { this.coords.w_rs && !this.options.hide_from_to && ("single" === this.options.type ? (this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = this.coords.p_single_fake + this.coords.p_handle / 2 - this.labels.p_single_fake / 2) : (this.labels.w_from = this.$cache.from.outerWidth(!1), this.labels.p_from_fake = this.labels.w_from / this.coords.w_rs * 100, this.labels.p_from_left = this.coords.p_from_fake + this.coords.p_handle / 2 - this.labels.p_from_fake / 2, this.labels.p_from_left = this.toFixed(this.labels.p_from_left), this.labels.p_from_left = this.checkEdges(this.labels.p_from_left, this.labels.p_from_fake), this.labels.w_to = this.$cache.to.outerWidth(!1), this.labels.p_to_fake = this.labels.w_to / this.coords.w_rs * 100, this.labels.p_to_left = this.coords.p_to_fake + this.coords.p_handle / 2 - this.labels.p_to_fake / 2, this.labels.p_to_left = this.toFixed(this.labels.p_to_left), this.labels.p_to_left = this.checkEdges(this.labels.p_to_left, this.labels.p_to_fake), this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = (this.labels.p_from_left + this.labels.p_to_left + this.labels.p_to_fake) / 2 - this.labels.p_single_fake / 2, this.labels.p_single_left = this.toFixed(this.labels.p_single_left)), this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake)) },
                updateScene: function() { this.raf_id && (cancelAnimationFrame(this.raf_id), this.raf_id = null), clearTimeout(this.update_tm), this.update_tm = null, this.options && (this.drawHandles(), this.is_active ? this.raf_id = requestAnimationFrame(this.updateScene.bind(this)) : this.update_tm = setTimeout(this.updateScene.bind(this), 300)) },
                drawHandles: function() { this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && (this.coords.w_rs !== this.coords.w_rs_old && (this.target = "base", this.is_resize = !0), (this.coords.w_rs !== this.coords.w_rs_old || this.force_redraw) && (this.setMinMax(), this.calc(!0), this.drawLabels(), this.options.grid && (this.calcGridMargin(), this.calcGridLabels()), this.force_redraw = !0, this.coords.w_rs_old = this.coords.w_rs, this.drawShadow()), this.coords.w_rs && (this.dragging || this.force_redraw || this.is_key) && ((this.old_from !== this.result.from || this.old_to !== this.result.to || this.force_redraw || this.is_key) && (this.drawLabels(), this.$cache.bar[0].style.left = this.coords.p_bar_x + "%", this.$cache.bar[0].style.width = this.coords.p_bar_w + "%", "single" === this.options.type ? (this.$cache.bar[0].style.left = 0, this.$cache.bar[0].style.width = this.coords.p_bar_w + this.coords.p_bar_x + "%", this.$cache.s_single[0].style.left = this.coords.p_single_fake + "%") : (this.$cache.s_from[0].style.left = this.coords.p_from_fake + "%", this.$cache.s_to[0].style.left = this.coords.p_to_fake + "%", (this.old_from !== this.result.from || this.force_redraw) && (this.$cache.from[0].style.left = this.labels.p_from_left + "%"), (this.old_to !== this.result.to || this.force_redraw) && (this.$cache.to[0].style.left = this.labels.p_to_left + "%")), this.$cache.single[0].style.left = this.labels.p_single_left + "%", this.writeToInput(), this.old_from === this.result.from && this.old_to === this.result.to || this.is_start || (this.$cache.input.trigger("change"), this.$cache.input.trigger("input")), this.old_from = this.result.from, this.old_to = this.result.to, this.is_resize || this.is_update || this.is_start || this.is_finish || this.callOnChange(), (this.is_key || this.is_click) && (this.is_key = !1, this.is_click = !1, this.callOnFinish()), this.is_update = !1, this.is_resize = !1, this.is_finish = !1), this.is_start = !1, this.is_key = !1, this.is_click = !1, this.force_redraw = !1)) },
                drawLabels: function() {
                    if (this.options) {
                        var t, e, i, n, o, s = this.options.values.length,
                            a = this.options.p_values;
                        if (!this.options.hide_from_to)
                            if ("single" === this.options.type) t = s ? this.decorate(a[this.result.from]) : (n = this._prettify(this.result.from), this.decorate(n, this.result.from)), this.$cache.single.html(t), this.calcLabels(), this.labels.p_single_left < this.labels.p_min + 1 ? this.$cache.min[0].style.visibility = "hidden" : this.$cache.min[0].style.visibility = "visible", this.labels.p_single_left + this.labels.p_single_fake > 100 - this.labels.p_max - 1 ? this.$cache.max[0].style.visibility = "hidden" : this.$cache.max[0].style.visibility = "visible";
                            else {
                                i = s ? (this.options.decorate_both ? (t = this.decorate(a[this.result.from]), t += this.options.values_separator, t += this.decorate(a[this.result.to])) : t = this.decorate(a[this.result.from] + this.options.values_separator + a[this.result.to]), e = this.decorate(a[this.result.from]), this.decorate(a[this.result.to])) : (n = this._prettify(this.result.from), o = this._prettify(this.result.to), this.options.decorate_both ? (t = this.decorate(n, this.result.from), t += this.options.values_separator, t += this.decorate(o, this.result.to)) : t = this.decorate(n + this.options.values_separator + o, this.result.to), e = this.decorate(n, this.result.from), this.decorate(o, this.result.to)), this.$cache.single.html(t), this.$cache.from.html(e), this.$cache.to.html(i), this.calcLabels();
                                var r = Math.min(this.labels.p_single_left, this.labels.p_from_left),
                                    l = this.labels.p_single_left + this.labels.p_single_fake,
                                    c = this.labels.p_to_left + this.labels.p_to_fake,
                                    d = Math.max(l, c);
                                this.labels.p_from_left + this.labels.p_from_fake >= this.labels.p_to_left ? (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", d = this.result.from === this.result.to ? ("from" === this.target ? this.$cache.from[0].style.visibility = "visible" : "to" === this.target ? this.$cache.to[0].style.visibility = "visible" : this.target || (this.$cache.from[0].style.visibility = "visible"), this.$cache.single[0].style.visibility = "hidden", c) : (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", Math.max(l, c))) : (this.$cache.from[0].style.visibility = "visible", this.$cache.to[0].style.visibility = "visible", this.$cache.single[0].style.visibility = "hidden"), r < this.labels.p_min + 1 ? this.$cache.min[0].style.visibility = "hidden" : this.$cache.min[0].style.visibility = "visible", d > 100 - this.labels.p_max - 1 ? this.$cache.max[0].style.visibility = "hidden" : this.$cache.max[0].style.visibility = "visible"
                            }
                    }
                },
                drawShadow: function() {
                    var t, e, i, n, o = this.options,
                        s = this.$cache,
                        a = "number" == typeof o.from_min && !isNaN(o.from_min),
                        r = "number" == typeof o.from_max && !isNaN(o.from_max),
                        l = "number" == typeof o.to_min && !isNaN(o.to_min),
                        c = "number" == typeof o.to_max && !isNaN(o.to_max);
                    "single" === o.type ? o.from_shadow && (a || r) ? (t = this.convertToPercent(a ? o.from_min : o.min), e = this.convertToPercent(r ? o.from_max : o.max) - t, t = this.toFixed(t - this.coords.p_handle / 100 * t), e = this.toFixed(e - this.coords.p_handle / 100 * e), t += this.coords.p_handle / 2, s.shad_single[0].style.display = "block", s.shad_single[0].style.left = t + "%", s.shad_single[0].style.width = e + "%") : s.shad_single[0].style.display = "none" : (o.from_shadow && (a || r) ? (t = this.convertToPercent(a ? o.from_min : o.min), e = this.convertToPercent(r ? o.from_max : o.max) - t, t = this.toFixed(t - this.coords.p_handle / 100 * t), e = this.toFixed(e - this.coords.p_handle / 100 * e), t += this.coords.p_handle / 2, s.shad_from[0].style.display = "block", s.shad_from[0].style.left = t + "%", s.shad_from[0].style.width = e + "%") : s.shad_from[0].style.display = "none", o.to_shadow && (l || c) ? (i = this.convertToPercent(l ? o.to_min : o.min), n = this.convertToPercent(c ? o.to_max : o.max) - i, i = this.toFixed(i - this.coords.p_handle / 100 * i), n = this.toFixed(n - this.coords.p_handle / 100 * n), i += this.coords.p_handle / 2, s.shad_to[0].style.display = "block", s.shad_to[0].style.left = i + "%", s.shad_to[0].style.width = n + "%") : s.shad_to[0].style.display = "none")
                },
                writeToInput: function() { "single" === this.options.type ? (this.options.values.length ? this.$cache.input.prop("value", this.result.from_value) : this.$cache.input.prop("value", this.result.from), this.$cache.input.data("from", this.result.from)) : (this.options.values.length ? this.$cache.input.prop("value", this.result.from_value + this.options.input_values_separator + this.result.to_value) : this.$cache.input.prop("value", this.result.from + this.options.input_values_separator + this.result.to), this.$cache.input.data("from", this.result.from), this.$cache.input.data("to", this.result.to)) },
                callOnStart: function() { this.writeToInput(), this.options.onStart && "function" == typeof this.options.onStart && (this.options.scope ? this.options.onStart.call(this.options.scope, this.result) : this.options.onStart(this.result)) },
                callOnChange: function() { this.writeToInput(), this.options.onChange && "function" == typeof this.options.onChange && (this.options.scope ? this.options.onChange.call(this.options.scope, this.result) : this.options.onChange(this.result)) },
                callOnFinish: function() { this.writeToInput(), this.options.onFinish && "function" == typeof this.options.onFinish && (this.options.scope ? this.options.onFinish.call(this.options.scope, this.result) : this.options.onFinish(this.result)) },
                callOnUpdate: function() { this.writeToInput(), this.options.onUpdate && "function" == typeof this.options.onUpdate && (this.options.scope ? this.options.onUpdate.call(this.options.scope, this.result) : this.options.onUpdate(this.result)) },
                toggleInput: function() { this.$cache.input.toggleClass("irs-hidden-input"), this.has_tab_index ? this.$cache.input.prop("tabindex", -1) : this.$cache.input.removeProp("tabindex"), this.has_tab_index = !this.has_tab_index },
                convertToPercent: function(t, e) {
                    var i, n = this.options.max - this.options.min,
                        o = n / 100;
                    return n ? (i = (e ? t : t - this.options.min) / o, this.toFixed(i)) : (this.no_diapason = !0, 0)
                },
                convertToValue: function(t) {
                    var e, i, n = this.options.min,
                        o = this.options.max,
                        s = n.toString().split(".")[1],
                        a = o.toString().split(".")[1],
                        r = 0,
                        l = 0;
                    if (0 === t) return this.options.min;
                    if (100 === t) return this.options.max;
                    s && (r = e = s.length), a && (r = i = a.length), e && i && (r = i <= e ? e : i), n < 0 && (n = +(n + (l = Math.abs(n))).toFixed(r), o = +(o + l).toFixed(r));
                    var c, d = (o - n) / 100 * t + n,
                        h = this.options.step.toString().split(".")[1];
                    return d = h ? +d.toFixed(h.length) : (d /= this.options.step, +(d *= this.options.step).toFixed(0)), l && (d -= l), (c = h ? +d.toFixed(h.length) : this.toFixed(d)) < this.options.min ? c = this.options.min : c > this.options.max && (c = this.options.max), c
                },
                calcWithStep: function(t) { var e = Math.round(t / this.coords.p_step) * this.coords.p_step; return 100 < e && (e = 100), 100 === t && (e = 100), this.toFixed(e) },
                checkMinInterval: function(t, e, i) { var n, o, s = this.options; return s.min_interval ? (n = this.convertToValue(t), o = this.convertToValue(e), "from" === i ? o - n < s.min_interval && (n = o - s.min_interval) : n - o < s.min_interval && (n = o + s.min_interval), this.convertToPercent(n)) : t },
                checkMaxInterval: function(t, e, i) { var n, o, s = this.options; return s.max_interval ? (n = this.convertToValue(t), o = this.convertToValue(e), "from" === i ? o - n > s.max_interval && (n = o - s.max_interval) : n - o > s.max_interval && (n = o + s.max_interval), this.convertToPercent(n)) : t },
                checkDiapason: function(t, e, i) {
                    var n = this.convertToValue(t),
                        o = this.options;
                    return "number" != typeof e && (e = o.min), "number" != typeof i && (i = o.max), n < e && (n = e), i < n && (n = i), this.convertToPercent(n)
                },
                toFixed: function(t) { return +(t = t.toFixed(20)) },
                _prettify: function(t) { return this.options.prettify_enabled ? this.options.prettify && "function" == typeof this.options.prettify ? this.options.prettify(t) : this.prettify(t) : t },
                prettify: function(t) { return t.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + this.options.prettify_separator) },
                checkEdges: function(t, e) { return this.options.force_edges && (t < 0 ? t = 0 : 100 - e < t && (t = 100 - e)), this.toFixed(t) },
                validate: function() {
                    var t, e, i = this.options,
                        n = this.result,
                        o = i.values,
                        s = o.length;
                    if ("string" == typeof i.min && (i.min = +i.min), "string" == typeof i.max && (i.max = +i.max), "string" == typeof i.from && (i.from = +i.from), "string" == typeof i.to && (i.to = +i.to), "string" == typeof i.step && (i.step = +i.step), "string" == typeof i.from_min && (i.from_min = +i.from_min), "string" == typeof i.from_max && (i.from_max = +i.from_max), "string" == typeof i.to_min && (i.to_min = +i.to_min), "string" == typeof i.to_max && (i.to_max = +i.to_max), "string" == typeof i.grid_num && (i.grid_num = +i.grid_num), i.max < i.min && (i.max = i.min), s)
                        for (i.p_values = [], i.min = 0, i.max = s - 1, i.step = 1, i.grid_num = i.max, i.grid_snap = !0, e = 0; e < s; e++) t = +o[e], t = isNaN(t) ? o[e] : (o[e] = t, this._prettify(t)), i.p_values.push(t);
                    ("number" != typeof i.from || isNaN(i.from)) && (i.from = i.min), ("number" != typeof i.to || isNaN(i.to)) && (i.to = i.max), "single" === i.type ? (i.from < i.min && (i.from = i.min), i.from > i.max && (i.from = i.max)) : (i.from < i.min && (i.from = i.min), i.from > i.max && (i.from = i.max), i.to < i.min && (i.to = i.min), i.to > i.max && (i.to = i.max), this.update_check.from && (this.update_check.from !== i.from && i.from > i.to && (i.from = i.to), this.update_check.to !== i.to && i.to < i.from && (i.to = i.from)), i.from > i.to && (i.from = i.to), i.to < i.from && (i.to = i.from)), ("number" != typeof i.step || isNaN(i.step) || !i.step || i.step < 0) && (i.step = 1), "number" == typeof i.from_min && i.from < i.from_min && (i.from = i.from_min), "number" == typeof i.from_max && i.from > i.from_max && (i.from = i.from_max), "number" == typeof i.to_min && i.to < i.to_min && (i.to = i.to_min), "number" == typeof i.to_max && i.from > i.to_max && (i.to = i.to_max), n && (n.min !== i.min && (n.min = i.min), n.max !== i.max && (n.max = i.max), (n.from < n.min || n.from > n.max) && (n.from = i.from), (n.to < n.min || n.to > n.max) && (n.to = i.to)), ("number" != typeof i.min_interval || isNaN(i.min_interval) || !i.min_interval || i.min_interval < 0) && (i.min_interval = 0), ("number" != typeof i.max_interval || isNaN(i.max_interval) || !i.max_interval || i.max_interval < 0) && (i.max_interval = 0), i.min_interval && i.min_interval > i.max - i.min && (i.min_interval = i.max - i.min), i.max_interval && i.max_interval > i.max - i.min && (i.max_interval = i.max - i.min)
                },
                decorate: function(t, e) {
                    var i = "",
                        n = this.options;
                    return n.prefix && (i += n.prefix), i += t, n.max_postfix && (n.values.length && t === n.p_values[n.max] ? (i += n.max_postfix, n.postfix && (i += " ")) : e === n.max && (i += n.max_postfix, n.postfix && (i += " "))), n.postfix && (i += n.postfix), i
                },
                updateFrom: function() { this.result.from = this.options.from, this.result.from_percent = this.convertToPercent(this.result.from), this.result.from_pretty = this._prettify(this.result.from), this.options.values && (this.result.from_value = this.options.values[this.result.from]) },
                updateTo: function() { this.result.to = this.options.to, this.result.to_percent = this.convertToPercent(this.result.to), this.result.to_pretty = this._prettify(this.result.to), this.options.values && (this.result.to_value = this.options.values[this.result.to]) },
                updateResult: function() { this.result.min = this.options.min, this.result.max = this.options.max, this.updateFrom(), this.updateTo() },
                appendGrid: function() {
                    if (this.options.grid) {
                        var t, e, i, n, o, s, a = this.options,
                            r = a.max - a.min,
                            l = a.grid_num,
                            c = 0,
                            d = 4,
                            h = "";
                        for (this.calcGridMargin(), a.grid_snap && (l = r / a.step), 50 < l && (l = 50), i = this.toFixed(100 / l), 4 < l && (d = 3), 7 < l && (d = 2), 14 < l && (d = 1), 28 < l && (d = 0), t = 0; t < l + 1; t++) {
                            for (n = d, 100 < (c = this.toFixed(i * t)) && (c = 100), o = ((this.coords.big[t] = c) - i * (t - 1)) / (n + 1), e = 1; e <= n && 0 !== c; e++) h += '<span class="irs-grid-pol small" style="left: ' + this.toFixed(c - o * e) + '%"></span>';
                            h += '<span class="irs-grid-pol" style="left: ' + c + '%"></span>', s = this.convertToValue(c), h += '<span class="irs-grid-text js-grid-text-' + t + '" style="left: ' + c + '%">' + (s = a.values.length ? a.p_values[s] : this._prettify(s)) + "</span>"
                        }
                        this.coords.big_num = Math.ceil(l + 1), this.$cache.cont.addClass("irs-with-grid"), this.$cache.grid.html(h), this.cacheGridLabels()
                    }
                },
                cacheGridLabels: function() {
                    var t, e, i = this.coords.big_num;
                    for (e = 0; e < i; e++) t = this.$cache.grid.find(".js-grid-text-" + e), this.$cache.grid_labels.push(t);
                    this.calcGridLabels()
                },
                calcGridLabels: function() {
                    var t, e, i = [],
                        n = [],
                        o = this.coords.big_num;
                    for (t = 0; t < o; t++) this.coords.big_w[t] = this.$cache.grid_labels[t].outerWidth(!1), this.coords.big_p[t] = this.toFixed(this.coords.big_w[t] / this.coords.w_rs * 100), this.coords.big_x[t] = this.toFixed(this.coords.big_p[t] / 2), i[t] = this.toFixed(this.coords.big[t] - this.coords.big_x[t]), n[t] = this.toFixed(i[t] + this.coords.big_p[t]);
                    for (this.options.force_edges && (i[0] < -this.coords.grid_gap && (i[0] = -this.coords.grid_gap, n[0] = this.toFixed(i[0] + this.coords.big_p[0]), this.coords.big_x[0] = this.coords.grid_gap), n[o - 1] > 100 + this.coords.grid_gap && (n[o - 1] = 100 + this.coords.grid_gap, i[o - 1] = this.toFixed(n[o - 1] - this.coords.big_p[o - 1]), this.coords.big_x[o - 1] = this.toFixed(this.coords.big_p[o - 1] - this.coords.grid_gap))), this.calcGridCollision(2, i, n), this.calcGridCollision(4, i, n), t = 0; t < o; t++) e = this.$cache.grid_labels[t][0], this.coords.big_x[t] !== Number.POSITIVE_INFINITY && (e.style.marginLeft = -this.coords.big_x[t] + "%")
                },
                calcGridCollision: function(t, e, i) { var n, o, s, a = this.coords.big_num; for (n = 0; n < a && !(a <= (o = n + t / 2)); n += t) s = this.$cache.grid_labels[o][0], i[n] <= e[o] ? s.style.visibility = "visible" : s.style.visibility = "hidden" },
                calcGridMargin: function() { this.options.grid_margin && (this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && ("single" === this.options.type ? this.coords.w_handle = this.$cache.s_single.outerWidth(!1) : this.coords.w_handle = this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100), this.coords.grid_gap = this.toFixed(this.coords.p_handle / 2 - .1), this.$cache.grid[0].style.width = this.toFixed(100 - this.coords.p_handle) + "%", this.$cache.grid[0].style.left = this.coords.grid_gap + "%")) },
                update: function(e) { this.input && (this.is_update = !0, this.options.from = this.result.from, this.options.to = this.result.to, this.update_check.from = this.result.from, this.update_check.to = this.result.to, this.options = t.extend(this.options, e), this.validate(), this.updateResult(e), this.toggleInput(), this.remove(), this.init(!0)) },
                reset: function() { this.input && (this.updateResult(), this.update()) },
                destroy: function() { this.input && (this.toggleInput(), this.$cache.input.prop("readonly", !1), t.data(this.input, "ionRangeSlider", null), this.remove(), this.input = null, this.options = null) }
            }, t.fn.ionRangeSlider = function(e) { return this.each(function() { t.data(this, "ionRangeSlider") || t.data(this, "ionRangeSlider", new c(this, e, r++)) }) },
            function() {
                for (var t = 0, e = ["ms", "moz", "webkit", "o"], n = 0; n < e.length && !i.requestAnimationFrame; ++n) i.requestAnimationFrame = i[e[n] + "RequestAnimationFrame"], i.cancelAnimationFrame = i[e[n] + "CancelAnimationFrame"] || i[e[n] + "CancelRequestAnimationFrame"];
                i.requestAnimationFrame || (i.requestAnimationFrame = function(e, n) {
                    var o = (new Date).getTime(),
                        s = Math.max(0, 16 - (o - t)),
                        a = i.setTimeout(function() { e(o + s) }, s);
                    return t = o + s, a
                }), i.cancelAnimationFrame || (i.cancelAnimationFrame = function(t) { clearTimeout(t) })
            }()
    }), "object" != typeof App && (App = {}), App.UI = {
        notiTypeError: "error",
        notiTypeSuccess: "success",
        isMobile: function() { return $("body.page-mobile").length > 0 || $("body.page-ipad").length > 0 },
        showAllSpecialSearch: function() { $(".ul-listing > li:hidden").fadeIn(), $(".ul-listing > li.more").remove() },
        inputAllowNumber: function(t, e) {
            e = void 0 === e || e, $.isArray(t) ? $.each(t, function(t, i) {
                $(i).on("input", function() {
                    var t = $(this).val().match(/[\d]/g);
                    if (e) t = $(this).val().match(/[\d\.]/g);
                    t = t ? t.join("") : "", $(this).val(t)
                })
            }) : $(t).on("input", function() {
                var t = $(this).val().match(/[\d]/g);
                if (e) t = $(this).val().match(/[\d\.]/g);
                t = t ? t.join("") : "", $(this).val(t)
            })
        },
        isValidEmail: function(t) { return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t) },
        isValidPhone(t) { var e = !0; return /^[0-9]+$/.test(t) ? t.length > 15 && (e = !1) : e = !1, e },
        validatePhone: t => !(!/^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/.test(t) || 10 != t.length),
        objectifyForm: function(t) {
            for (var e = t.serializeArray(), i = {}, n = 0; n < e.length; n++) {
                var o = e[n].name.replace("-", "_");
                if (-1 !== o.indexOf("[]"))
                    if (void 0 === i[o = o.replace("[]", "")]) i[o] = [e[n].value];
                    else {
                        var s = [];
                        Array.isArray(i[o]) ? (i[o].push(e[n].value), s = i[o]) : (s.push(i[o]), s.push(e[n].value)), i[o] = s
                    }
                else i[o] = e[n].value
            }
            return i
        },
        checkValidForm: function(t) { var e = t.data("bootstrapValidator"); return e.validate(), e.isValid() },
        checkValidRules: function(t, e) { if (t && e) return t.bootstrapValidator({ message: "Giá trị chưa đúng", feedbackIcons: { valid: !1, invalid: "glyphicon glyphicon-remove", validating: "glyphicon glyphicon-refresh" }, fields: e }), !!App.UI.checkValidForm(t) && App.UI.objectifyForm(t) },
        addRules: function() {
            $.fn.bootstrapValidator.validators.isEmail = { validate: function(t, e, i) { return !!App.UI.isValidEmail(e.val()) } }, $.fn.bootstrapValidator.validators.isPhone = { validate: function(t, e, i) { return App.UI.validatePhone(e.val()) } }, $.fn.bootstrapValidator.validators.isAcount = { validate: function(t, e, i) { return App.UI.validatePhone(e.val().trim()) || App.UI.isValidEmail(e.val().trim()) } }, $.fn.bootstrapValidator.validators.samePassword = {
                validate: function(t, e, i) {
                    var n = t.$form.find("input").eq(3),
                        o = t.$form.find("input").eq(4);
                    return !(0 == n.val().length || 0 == o.val().length || !n || !o || n.val() !== o.val())
                }
            }
        },
        removeCheckSuccess: function(t, e) { $(t).on("success.field.bv", function(t, i) { $.each(e, function(t, e) { i.field == e && "" == i.element.val() && (i.element.next().removeClass("glyphicon glyphicon-ok"), i.element.next().parents(".has-feedback").removeClass("has-success")) }) }) },
        checkAlpha: function(t) {
            $.isArray(t) ? $.each(t, function(t, e) {
                $(e).on("input", function() {
                    var t = $(this).val();
                    $(this).val(t.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, ""))
                })
            }) : $(t).on("input", function() {
                var t = $(this).val();
                $(this).val(t.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, ""))
            })
        },
        Error: function(t, e) { $("#modal-error .modal-body > p").text(t), $("#modal-error").unbind("hidden.bs.modal").off("hidden.bs.modal").css({ zIndex: parseInt($(".modal.in").css("z-index")) ? parseInt($(".modal.in").css("z-index")) + 1 : 1050 }), "function" == typeof e && $("#modal-error").on("hidden.bs.modal", e), setTimeout(function() { $("#modal-error").modal({ keyboard: !1 }) }, 200) },
        ShowFormMessage: function(t, e, i = "error") {
            var n = "";
            n += '<div class="modal-header flash-message">', n += '<p class="modal-title ' + i + '">' + e + "</p>", n += "</div>", $(t).find(".modal-content").prepend(n), setTimeout(function() { $(t).find(".flash-message").remove() }, 5e3)
        },
        Info: function(t, e) { $("#modal-info .modal-body > p").text(t), $("#modal-info").unbind("hidden.bs.modal").off("hidden.bs.modal").css({ zIndex: parseInt($(".modal.in").css("z-index")) ? parseInt($(".modal.in").css("z-index")) + 1 : 1050 }), "function" == typeof e && $("#modal-info").on("hidden.bs.modal", e), setTimeout(function() { $("#modal-info").modal({ keyboard: !1 }) }, 200) },
        Done: function(t, e) { $("#modal-done .modal-body > p").text(t), $("#modal-done").off("hidden.bs.modal").css({ zIndex: parseInt($(".modal.in").css("z-index")) ? parseInt($(".modal.in").css("z-index")) + 1 : 1050 }), "function" == typeof e && $("#modal-done").on("hidden.bs.modal", e), setTimeout(function() { $("#modal-done").modal({ keyboard: !1 }) }, 200) },
        Confirm: function(t, e, i) { $("#modal-confirm .modal-body > p").text(t), $("#modal-confirm").off("hidden.bs.modal").css({ zIndex: parseInt($(".modal.in").css("z-index")) ? parseInt($(".modal.in").css("z-index")) + 1 : 1050 }), console.log(parseInt($(".modal.in").css("z-index")) + 1), $("#modal-confirm .btn-save").off("click"), "function" == typeof e && $("#modal-confirm .btn-save").click(function() { e(), $("#modal-confirm").modal("hide") }), setTimeout(function() { $("#modal-confirm").modal({ keyboard: !1 }) }, 200) },
        CustomModal: function(t, e, i) { $("#" + t + " .modal-body > p").text(e), $("#" + t).off("hidden.bs.modal"), "function" == typeof i && $("#" + t).on("hidden.bs.modal", i), setTimeout(function() { $("#" + t).modal({ backdrop: "static", keyboard: !1 }) }, 200) },
        ImageModal: function(t, e) { $("#image-done-src").attr("src", t), $("#image-done").off("hidden.bs.modal"), e && $("#image-done").on("hidden.bs.modal", e), setTimeout(function() { $("#image-done").modal({ backdrop: "static", keyboard: !0 }), $("#image-done").on("hidden.bs.modal") }, 200) },
        showLoadding: function(t) {
            var e = $.extend({}, { text: "Đang tải...", background: "#ffffff", opacity: .5 }, t);
            $("#loadding-ajax .text").text(e.text), $("#loadding-ajax").show()
        },
        hideLoadding: function() { $("#loadding-ajax").hide() }
    }, "object" != typeof App && (App = {});
var openServiceTab = function(t) {
    t = t || {};
    var e = window.location.hash;
    t.defaultHash && (e = t.defaultHash), $(".bl-services-info a[href='" + e + "']").click(), null != t.scrollBody && 1 != t.scrollBody || $("html, body").animate({ scrollTop: 460 }, 1e3)
};

function isElementInViewport(t) { var e = t.getBoundingClientRect(); return e.bottom > 0 && e.right > 0 && e.left < (window.innerWidth || document.documentElement.clientWidth) && e.top < (window.innerHeight || document.documentElement.clientHeight) }
App.Feature = {
    checkValidJson: function(t) { return !!/^[\],:{}\s]*$/.test(t.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")) },
    slugify: function(t) { return t.toLowerCase().replace(/[^\w ]+/g, "").replace(/ +/g, "-") },
    gotoService: function(t) { location.href.indexOf("/dich-vu") > -1 ? (location.hash = "#" + t, openServiceTab()) : location.href = "/dich-vu#" + t },
    loadScripts: function(t, e, i) {
        for (var n = 0, o = 0; o < t.length; o++) {
            var s, a, r = t[o];
            i && (r += "?v=" + i), (s = document.createElement("script")).type = "text/javascript", s.src = r, s.onload = s.onreadystatechange = function() { this.readyState && "complete" != this.readyState || ++n == t.length && e() }, (a = document.getElementsByTagName("script")[0]).parentNode.insertBefore(s, a)
        }
    },
    setCookie: function(t, e, i) {
        var n = new Date;
        i = void 0 === i ? 1e4 : i, n.setTime(n.getTime() + 24 * i * 60 * 60 * 1e3);
        var o = "expires=" + n.toUTCString();
        document.cookie = t + "=" + e + "; " + o + "; path = /"
    },
    getCookie: function(t) {
        for (var e = t + "=", i = document.cookie.split(";"), n = 0; n < i.length; n++) {
            for (var o = i[n];
                " " == o.charAt(0);) o = o.substring(1);
            if (0 == o.indexOf(e)) return o.substring(e.length, o.length)
        }
        return ""
    },
    Get: function(t, e, i) { $.ajax({ type: "GET", url: t, contentType: "application/json;charset=utf-8", beforeSend: function() { i && App.UI.showLoadding(i) }, success: function(t) { e(t), i && App.UI.hideLoadding() }, error: function(t, e, n) { i && App.UI.hideLoadding(), App.UI.Error("Đã có lỗi xảy ra") } }) },
    Post: function(t, e, i, n, o) { $.ajax({ type: "POST", url: t, dataType: o || "json", contentType: "application/json;charset=utf-8", data: JSON.stringify(e), async: !0, beforeSend: function() { n && App.UI.showLoadding(n) }, success: function(t) { i(t), n && App.UI.hideLoadding() }, error: function(t, e, i) { console.log(t), n && App.UI.hideLoadding(), App.UI.Error("Đã có lỗi xảy ra") } }) },
    Delete: function(t, e, i) { $.ajax({ type: "DELETE", url: t, contentType: "application/json;charset=utf-8", beforeSend: function() { i && App.UI.showLoadding(i) }, success: function(t) { e(t), i && App.UI.hideLoadding() }, error: function(t, e, n) { i && App.UI.hideLoadding(), App.UI.Error("Đã có lỗi xảy ra") } }) },
    CountNumberChar: function(t) { return (t.match(/\d/g) || []).length },
    GetValueFromString: function(t) { return (t.match(/[\d\.,]/g) || []).join("") },
    ExtractNumber: function(t) { return (t.match(/\d/g) || []).join("") },
    AddIframe: function(t) {
        $("<div id='showIframeSEONgon' style='display:none;'></div>").prependTo($("body"));
        var e = document.createElement("iframe");
        e.width = "100%", e.height = "1px", e.frameborder = "0", e.style.border = "0", e.src = t, $("#showIframeSEONgon").html(e)
    },
    renderLinkListing: function(t) {
        var e = 1 != parseInt(t.listingTypeId) ? "thue" : "mua";
        this.strToUrl(t.propertyTypeName), this.strToUrl(t.districtName);
        return "/" + e + "/" + this.strToUrl(t.title) + "-id" + t.rlistingId
    },
    renderLinkListingApartment: function(t) { return "/du-an/" + this.strToUrl(t.title) + "-id" + t.listingId },
    strToUrl: function(t) { return ("@" + t.toLowerCase().replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, "a").replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, "e").replace(/i|í|ì|ỉ|ĩ|ị/gi, "i").replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, "o").replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, "u").replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, "y").replace(/đ/gi, "d").replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, "").replace(/ /gi, "-").replace(/\-\-\-\-\-/gi, "-").replace(/\-\-\-\-/gi, "-").replace(/\-\-\-/gi, "-").replace(/\-\-/gi, "-") + "@").replace(/\@\-|\-\@|\@/gi, "") },
    uploadImage: function(t, e, i = "", n) {
        files = e.target.files[0];
        var o, s = new FormData;
        s.append("file", files), "undefined" != typeof files && $.ajax({
            url: n || "/api/upload",
            type: "POST",
            data: s,
            cache: !1,
            dataType: "json",
            processData: !1,
            contentType: !1,
            beforeSend: function() {
                var e = new Image;
                e.src = "/assets/images/loading.svg?v=03.06.2019", $($(t).data("target")).parent().append($(e).addClass("image-loadding")), $($(t).data("target")).parent().css({ position: "relativie" })
            },
            success: function(e, n, s) {
                (o = "object" == typeof e ? e : JSON.parse(e)).result ? (src_img = o.data.link, $($(t).data("target")).attr("src", src_img), $($(t).data("target")).parent().first().find(".image-loadding").first().remove(), $.isFunction(i) && i(o.data)) : alert(o.message)
            },
            error: function(t, e, i) { alert(e) }
        })
    },
    setCookie2: function(t, e, i = 0) {
        if ("undefined" != typeof document)
            if (i) {
                const n = new Date;
                n.setTime(n.getTime() + 24 * i * 60 * 60 * 1e3);
                const o = "expires=" + n.toUTCString();
                document.cookie = t + "=" + e + ";" + o + ";path=/"
            } else document.cookie = t + "=" + e + ";path=/"
    },
    getCookie2: function(t) {
        if ("undefined" != typeof document) {
            const e = t + "=",
                i = decodeURIComponent(document.cookie).split(";");
            for (let t = 0; t < i.length; t++) {
                let n = i[t];
                for (;
                    " " == n.charAt(0);) n = n.substring(1);
                if (0 == n.indexOf(e)) return n.substring(e.length, n.length)
            }
        }
        return ""
    },
    containCookie2: function(t) { return !!this.getCookie2(t) },
    clearCookie2: function(t) { this.setCookie2(t, "", -1) },
    clearAllCookie2: function() { "undefined" != typeof document && (document.cookie = "") }
};
var PropzySlickSlider = { initDefaultMobileSlider: function() { $(".slick-slider").slick({ dots: !1, infinite: !0, speed: 500, arrows: !1, centerMode: !0, centerPadding: "30px" }) } },
    verifyCaptchaSendPhoneApp = function(t) { App.Feature.Get("/api/verify-recaptcha/" + t, function(t) { grecaptcha.reset(), t.success && SendPhoneApp.send(!0) }) },
    SendPhoneApp = function() {
        var t = $(".form-send-phone-app");
        return {
            send: function(e) {
                t.find(".bl-input-captcha").hide();
                var i = { phone: t.find("#phone-app").val(), is_owner: 1 == t.find("#is-owner").val() };
                e && (i.force = e), App.Feature.Post("/api/send-sms-app", i, function(e) { e.result ? (t.find("#phone-app").val(""), App.UI.Done(messages.home_taiapp_thanhcong)) : 409 == e.code ? (App.UI.Error("Bạn đã nhập số điện thoại quá số lần cho phép. Vui lòng xác nhận captcha để tiếp tục."), t.find(".bl-input-captcha").show()) : (console.log(e), App.UI.Error(messages.home_taiapp_error)) })
            }
        }
    }(),
    initSpanEyes = function() { $(".span-eyes").unbind("click"), $(".span-eyes").on("click", function() { $(this).parent().find("input").each(function() { "password" == $(this).attr("type") ? $(this).attr("type", "text") : $(this).attr("type", "password") }) }) };
jQuery(document).ready(function() {
    $(document).on("click", ".btn-share", function() { $(this).data("href") && window.open("http://www.facebook.com/sharer.php?u=" + location.protocol + "//" + location.host + $(this).data("href"), "", "width=450,height=450") }), $("#guideline").css({ width: "100%" }), $(document).on("click", ".box", function() { $(".actives").length && $(".actives").not($(this)).removeClass("actives").addClass("box"), $(this).removeClass("box").addClass("actives") });
    var t = setInterval(function() { $("body").find(".bx-imopenlines-config-sidebar-info-inner").length > 0 && (console.log("Deployment to change"), $(".bx-imopenlines-config-sidebar-info-block-container .bx-imopenlines-config-sidebar-info-title").text(""), $(".bx-imopenlines-config-sidebar-social-title-item").text(""), clearInterval(t)) }, 1e3);
    $("#close-nav-mobile").click(function() { $("#menufull").removeClass("toggle"), $("body").removeClass("showMenu") }), $("#close-nav").click(function() { $("#menu-toggle").trigger("click"), $("body").removeClass("showMenu"), $("body").removeClass("scroll-page") }), $(document).on("click", "#forgot-password", function() { $("#popup-login").modal("hide"), $("#popup-forgot-password").modal() });
    $("#forgotPassword input[name='forgot_input']").keypress(function(t) { 13 == t.which && (t.preventDefault(), $("#continue-forgot-password").trigger("click")) }), $(document).on("click", "#continue-forgot-password", function() {
        if ($("#popup-forgot-password").find(".flash-message").remove(), $(".errors_input").html(""), ! function(t) { t.removeData("bootstrapValidator"), t.bootstrapValidator({ message: "Giá trị chưa đúng", excluded: [":hidden"], feedbackIcons: { valid: "glyphicon glyphicon-ok", invalid: "glyphicon glyphicon-remove", validating: "glyphicon glyphicon-refresh" }, fields: { forgot_input: { validators: { notEmpty: { message: "Vui lòng nhập giá trị" } } } } }); var e = t.data("bootstrapValidator"); return e.validate(), e.isValid() }($(this).closest("#forgotPassword"))) return !1;
        var t = $("#forgot_input").val(),
            e = {};
        if (App.UI.isValidEmail(t)) e.email = t, e.phone = null, App.Feature.Post("/api/forgot-password", e, function(t) { t.result ? (console.log(t), $("#popup-forgot-password").modal("hide"), App.UI.Info("Vui lòng kiểm tra email để đổi mật khẩu"), $("#modal-info").on("hide.bs.modal", function() { $(".modal-backdrop.fade").hide() })) : (console.log(t), 401 == t.code ? App.UI.ShowFormMessage("#popup-forgot-password", "Email này chưa được đăng ký", App.UI.notiTypeError) : 402 == t.code ? App.UI.ShowFormMessage("#popup-forgot-password", "Email này chưa được kích hoạt", App.UI.notiTypeError) : App.UI.ShowFormMessage("#popup-forgot-password", t.message, App.UI.notiTypeError), $("#modal-error").on("hide.bs.modal", function() { $(".modal-backdrop.fade").hide() })) });
        else {
            if (!App.UI.validatePhone(t)) return $(".errors_input").html("Email/Số điện thoại không hợp lệ"), $("#form-input").removeClass("has-success"), $("#form-input").addClass("has-error"), $("#forgot_input").next().removeClass("glyphicon-ok"), $("#forgot_input").next().addClass("glyphicon-remove"), !1;
            e.email = null, e.phone = t, App.Feature.Post("/api/forgot-password", e, function(e) {
                e.result ? ($("#popup-forgot-password").modal("hide"), $("#popup-re-password-phone").modal(), $(document).on("click", "#reset-pass-phone", function() {
                    if (! function(t) { t.removeData("bootstrapValidator"), t.bootstrapValidator({ message: "Giá trị chưa đúng", excluded: [":hidden"], feedbackIcons: { valid: "glyphicon glyphicon-ok", invalid: "glyphicon glyphicon-remove", validating: "glyphicon glyphicon-refresh" }, fields: { password: { validators: { notEmpty: { message: "Bạn chưa nhập password" }, stringLength: { message: "Mật khẩu từ 6 đến 20 ký tự", min: 6, max: 20 } } }, code: { validators: { notEmpty: { message: "Vui lòng nhập mã xác nhận" } } } } }); var e = t.data("bootstrapValidator"); return e.validate(), e.isValid() }($(this).closest("#resetPassword"))) return !1;
                    var e = t,
                        i = $("#code").val(),
                        n = $("#password").val(),
                        o = {};
                    o.phone = e, o.email = null, o.code = i, o.newPassword = n, console.log(o), App.Feature.Post("/api/reset-password", o, function(t) { t.result ? (App.UI.Info("Cập nhật mật khẩu mới thành công"), $("#popup-re-password-phone").modal("hide")) : App.UI.ShowFormMessage("#popup-re-password-phone", t.message, App.UI.notiTypeError), $("#reset-pass-phone").unbind("click") })
                })) : 401 == e.code ? App.UI.ShowFormMessage("#popup-forgot-password", "Số điện thoại này chưa được đăng ký", App.UI.notiTypeError) : 402 == e.code ? App.UI.ShowFormMessage("#popup-forgot-password", "Số điện thoại này chưa được kích hoạt", App.UI.notiTypeError) : App.UI.ShowFormMessage("#popup-forgot-password", e.message, App.UI.notiTypeError)
            })
        }
    }), App.UI.isMobile() && ($(".modal").on("shown.bs.modal", function(t) { setTimeout(function() { $("body").hasClass("modal-open") || $("body").addClass("modal-open") }, 500) }), $(".modal").on("shown.bs.modal", function() { $(this).delay(100).before($(".modal-backdrop")) }), $(".modal").on("hide.bs.modal", function(t) { $(".modal-backdrop").remove(), $("body").removeClass("modal-open") }))
});
var getUserLocation = function(t, e) {
    let i = { lat: null, lng: null, result: null, message: null };
    navigator.geolocation ? navigator.geolocation.getCurrentPosition(function(e) { i.lat = e.coords.latitude, i.lng = e.coords.longitude, i.result = !0, i.message = "Get location success", t(i) }, function() { i.result = !1, i.message = "Geolocation is not supported by this browser.", e(i) }) : (i.result = !1, i.message = "Geolocation is not supported by this browser.", e(i))
};
const NumberInputUtil = {
    arrNumber: ["không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"],
    readDozens: function(t, e) {
        let i = "",
            n = Math.floor(t / 10),
            o = t % 10;
        return n > 1 ? (i = " " + this.arrNumber[n] + " mươi", 1 == o && (i += " mốt")) : 1 == n ? (i = " mười", 1 == o && (i += " một")) : e && o > 0 && (i = " lẻ"), 5 == o && n >= 1 ? i += " lăm" : (o > 1 || 1 == o && 0 == n) && (i += " " + this.arrNumber[o]), i
    },
    readBlock: function(t, e) {
        let i = "",
            n = Math.floor(t / 100);
        return t %= 100, e || n > 0 ? (i = " " + this.arrNumber[n] + " trăm", i += this.readDozens(t, !0)) : i = this.readDozens(t, !1), i
    },
    readMillions: function(t, e) {
        let i = "",
            n = Math.floor(t / 1e6);
        return t %= 1e6, n > 0 && (i = this.readBlock(n, e) + " triệu", e = !0), thousand = Math.floor(t / 1e3), t %= 1e3, thousand > 0 && (i += this.readBlock(thousand, e) + " ngàn", e = !0), t > 0 && (i += this.readBlock(t, e)), i
    },
    numberToText: function(t) {
        if (0 == t) return this.arrNumber[0];
        let e = "",
            i = "";
        do { billion = t % 1e9, e = (t = Math.floor(t / 1e9)) > 0 ? this.readMillions(billion, !0) + i + e : this.readMillions(billion, !1) + i + e, i = " tỷ" } while (t > 0);
        return e + " đồng"
    },
    numberToLabel: function(t) {
        if ($(t).length > 0) {
            let e = $(t).val().replace(/\./g, ""),
                i = $(t).val().length > 0 ? this.numberToText(e) : "",
                n = $(t).parent().find(".lblTextNumber");
            n.length > 0 ? n.html(this.capitalize(i.trim())) : $("<label class='lblTextNumber' style='font-weight:300;font-style:italic;font-size: 14px;color: #676767;'>" + this.capitalize(i.trim()) + "</label>").insertAfter(t)
        }
    },
    capitalize: function(t) { return "string" != typeof t ? "" : t.charAt(0).toUpperCase() + t.slice(1) }
};
var data_ecomerce, loadCommonsModal = function(t) {
        if ($(".lazy-html").each(function() {
                let t = $(this).html();
                $(t).insertAfter($(this)), $(this).remove()
            }), initSpanEyes(), isLogin && Mycollection.init(), null != document.getElementById("common-modals")) return void 0 !== t && t && t(), !1
    },
    reloadAssets = function(t) {
        if (t == App.Feature.getCookie("version")) return !1;
        for (var e = ["/assets/images/svg-icons.svg?v=03.06.2019"], i = 0; i < e.length; i++) $.ajax({ cache: !1, url: e[i] });
        App.Feature.setCookie("version", t)
    },
    shareShowHide = function(t) { $(t).length > 0 && $(t).toggleClass("active") };
$(document).ready(function() { $("#btnTriggerLogin").click(function() { $("#btnRequireLogin").click(), $("#popup-login").modal() }), $("#btnTriggerRegister").click(function() { $("#btnRequireLogin").click(), $("#popup-signup").modal() }), $(".myModal .btn-close").click(function() { $("body").removeClass("showModal") }) });
var infoSave, modalCollection, modalAddCollection, Cart = {
        updateCartNumber: function() {
            var t = Cart.getCart();
            t.fav.length > 9 ? ($("#footer .item-like i").addClass("icon-like1"), $(".number-cart").text(9)) : ($("#footer .item-like i").removeClass("icon-like1"), $(".number-cart").text(t.fav.length), 0 == t.fav.length || $(".number-cart").show())
        },
        getCart: function() { var t = App.Feature.getCookie("mycart"); return t && App.Feature.checkValidJson(t) || (t = '{"fav":[], "scheduled":[]}'), t = JSON.parse(t) },
        getCinfo: function() { var t = App.Feature.getCookie("cinfo"); return t && App.Feature.checkValidJson(t) || (t = "{}"), t = JSON.parse(t) },
        removeScheduleListing: function(t, e) {
            var i = Cart.getCart();
            index = 0, schedules = $.grep(i.scheduled, function(e, i) { return parseInt(e.id) === parseInt(t) && (index = i, !0) }), schedules.length > 0 && i.scheduled.splice(index, 1), Cart.updateCart(i)
        },
        removeFavListing: function(t, e) { var i = Cart.getCart(); return index = 0, $.grep(i.fav, function(e, i) { return parseInt(e.id) === parseInt(t) && (index = i, !0) }).length > 0 && (i.fav.splice(index, 1), $(".save-listing-" + t).removeClass("active"), $(".save-listing-" + t).is(".desktop") ? $(".save-listing-" + t).text("Lưu tin") : "Đã lưu" == $(".page-desktop .save-listing-" + t).text().trim() && $(".page-desktop .save-listing-" + t).html('Lưu tin <i class="icon-like"></i>'), Cart.updateCart(i), !0) },
        updateCart: function(t) { App.Feature.setCookie("mycart", JSON.stringify(t)), Cart.updateCartNumber() }
    },
    addcart = function(t, e) {
        var i = Cart.getCart();
        if (!e && i.fav.length >= 3) return $("#btnRequireLogin").click(), !1;
        Cart.getCinfo();
        listingId = parseInt($(t).attr("listingid")), link = $(t).attr("link"), i.fav.push(JSON.parse($(t).attr("object"))), $(".save-listing-" + listingId).addClass("active"), $("body").addClass("showlike"), setTimeout(function() { $("body").removeClass("showlike") }, 5e3), "Lưu tin" == $(".page-desktop .save-listing-" + listingId).text().trim() && $(".page-desktop .save-listing-" + listingId).html('Đã lưu <i class="icon-like"></i>'), Cart.updateCart(i)
    };
$(function() {
    App.UI.inputAllowNumber("#cinfo-phone", !1), ($(".save-listing").size() > 0 || $("body").hasClass("yeuthich")) && $(document).on("click", ".save-listing", function(t) {
        t.preventDefault();
        var e = parseInt($(this).attr("listingid"));
        Cart.removeFavListing(e, this) || (isLogin ? Mycollection.addCollection(e) : addcart(this))
    })
});
var hasSave = !1,
    Mycollection = {
        addItemToCollection: function(t, e) {
            var i = { rlistingIds: [e] };
            App.Feature.Post("/api/add-listing-to-collection/" + t, i, function(t) { console.log(t), t.result && 200 == t.code ? (hasSave = !0, modalCollection.modal("hide"), App.UI.Done(messages.home_thembdsvaobst_addthanhcong, function() { location.reload() })) : App.UI.ShowFormMessage("#popup-select-collection", messages.home_thembdsvaobst_addvaobstdatontai, App.UI.notiTypeError) }, !0)
        },
        addCollection: function(t) {
            hasSave = !1, Mycollection.showModal(t), modalCollection.find(".item").unbind("click").click(function() {
                modalCollection.find(".item").map(function(t, e) {
                    let i = $(e).find(".count").data("count");
                    $(e).find(".count").text(parseInt(i))
                }), $(this).find("input").prop("checked", !0);
                var t = parseInt($(this).find(".count").text().trim());
                $(this).find(".count").text(t + 1)
            }), modalCollection.find(".finish-collection").unbind("click").click(function() {
                var e = modalCollection.find(".item").find("input:checked");
                0 != e.length ? Mycollection.addItemToCollection(e.data("id"), t) : modalCollection.modal("hide")
            }), modalAddCollection.find(".add-to-collection").unbind("click").click(function() {
                var t = $('input[name="short-name-collection"]').val().trim();
                if (0 != t.length) {
                    let e = { basketName: t, description: null, photo: null };
                    App.Feature.Post("/api/add-collection", e, function(t) {
                        if (t.result) {
                            var e = $("<div>").data("item", t.data.id).addClass("item");
                            e.append('<img onerror="this.src=\'/assets/images/collection-no-img.jpg\'" class="img-responsive" src="">'), e.append('<span class="name-basket">' + t.data.basketName + "</span>"), e.append('(<b class="count" data-count="0">1</b>)'), e.append('<div class="bl-inline pull-right bl-radio"><input type="radio" name="collection" class="pull-right collection" data-id="' + t.data.id + '" checked ><label for="listingType' + t.data.id + '"></label></div>'), e.click(function() {
                                modalCollection.find(".item").map(function(t, e) {
                                    let i = $(e).find(".count").data("count");
                                    $(e).find(".count").text(parseInt(i))
                                }), $(this).find("input").prop("checked", !0);
                                var t = parseInt($(this).find(".count").text().trim());
                                $(this).find(".count").text(t + 1)
                            }), $("#popup-select-collection .bl-folder").prepend(e), $('input[name="short-name-collection"]').val(""), modalAddCollection.modal("hide"), modalCollection.modal()
                        } else 405 == t.code ? App.UI.Error(t.message) : App.UI.Error(messages.home_thembdsvaobst_addvaobstdatontai)
                    }, !0)
                } else App.UI.ShowFormMessage("#popup-add-collection", messages.home_thembdsvaobst_taobst_name_empty, App.UI.notiTypeError)
            })
        },
        showModal: function(t) {
            modalCollection.modal("show").css({ zIndex: parseInt($(".modal.in").css("z-index")) ? parseInt($(".modal.in").css("z-index")) + 1 : 1050 }), modalCollection.find(".item").map(function(t, e) {
                let i = $(e).find(".count").data("count");
                $(e).find(".count").text(parseInt(i)), $(e).find("input").prop("checked", !1)
            }), $("input[name='value-add']").val(t), modalCollection.on("hidden.bs.modal", function() { $(".save-listing-" + t).length > 0 && !hasSave && (Cart.removeFavListing(t, $(".save-listing-" + t).get(0)), $(".save-listing-" + t).addClass("active"), addcart($(".save-listing-" + t).get(0), !0), modalCollection.off("hidden.bs.modal")), $("input[name='value-add']").val("") }), modalCollection.find(".btn-show-add-form").unbind("click").on("click", function(t) { t.preventDefault(), modalCollection.modal("hide"), modalAddCollection.modal() })
        },
        init: function() { modalCollection = $("#popup-select-collection"), modalAddCollection = $("#popup-add-collection") }
    };
$(document).ready(function() {
    function t() {
        var t = window.location.toString();
        if (t.indexOf("#") > 0) {
            var e = t.substring(0, t.indexOf("#"));
            window.history.replaceState({}, document.title, e)
        }
    }
    App.UI.addRules(), App.UI.inputAllowNumber("input[name='phone']");
    var e = null,
        i = null,
        n = $("#form-register"),
        o = $("#popup-login"),
        s = ($("#popup-signup"), null);
    window.location.hash && ((s = window.location.hash).search("#login") >= 0 && ($("#popup-login").modal("show"), t()), "#course-not-finish" == s && (App.UI.Error("Bạn chưa hoàn thành xong khóa học, Bạn chỉ gửi BĐS sau khi hoàn thành xong khóa học đã đăng ký"), t()), "#not-agent" == s && (App.UI.Error(messages.dangtinmoigioi_notagent), t()), "#stop-cooperation" == s && (App.UI.Error(messages.dangtinmoigioi_stop_cooperation), t()), "#not-active" == s && (App.UI.Confirm("Tài khoản của bạn chưa chưa được kích hoạt, Hãy kích hoạt tài khoản để gửi BĐS", function() { location.href = "/xac-nhan-tai-khoan" }), t())), o.click(function() { $("body").removeClass("showModal") });
    var a = function(t, e) {
        var i = { deviceToken: e, osName: "BROWSER", deviceName: null, versionName: "11.1.4", type: "facebook", facebookUid: t.id, appId: "535618670209689", formIdMailChimp: 1686 };
        App.Feature.Post("/api/login", i, function(t) { t.result && 200 == t.code ? location.href = "/" : App.UI.Confirm(t.message + "! Bạn có muốn tiếp tục đăng ký tài khoản", function() { $("#popup-login").modal("hide"), $("#popup-signup").modal("show") }) }, !0)
    };

    function r(t) {
        var e = App.UI.checkValidRules(t, { acount: { validators: { isAcount: { message: messages.dangnhap_phoneemail_wrongformat } } }, password: { validators: { notEmpty: { message: messages.dangnhap_matkhau_empty } } } });
        e && (OneSignal.initialized ? OneSignal.getUserId(function(i) { l(t, e, i || null) }) : l(t, e, null))
    }
    var l = function(t, e, i) {
        let n = { deviceToken: i, name: "Portal Site", wantToBeAgent: !0, type: "normal", phone: App.UI.isValidPhone(e.acount.trim()) ? e.acount.trim() : null, email: App.UI.isValidEmail(e.acount.trim()) ? e.acount.trim() : null, osName: "BROWSER", deviceName: "iphone 4", versionName: "11.4.1", password: e.password, remenber_pass: void 0 !== e.remenber_pass ? 1 : 0, formIdMailChimp: 1686 };
        App.Feature.Post("/api/login", n, function(e) { "callBack" == t.data("redirect") && "function" == typeof t.data("callBack") && t.data("callBack").apply({ code: e.code, currentHash: s, formLogin: t }), 402 == e.code ? ($("#popup-login").modal("hide"), "/dang-tin" == window.location.pathname && $("#popup-info-quickly").modal("hide"), App.UI.Confirm(messages.dangnhap_phoneemail_inactive, function() { location.href = "/xac-nhan-tai-khoan" })) : 200 == e.code ? "callBack" == t.data("redirect") ? "function" == typeof t.data("callBack") ? t.data("callBack").call() : console.log("Callback not function") : s && -1 != s.search("#login=/") ? location.href = 0 != s.split("=").length ? s.split("=")[1] : "/" : "reload" != t.data("redirect") && t.data("redirect") ? "home" == t.data("redirect") ? location.href = "/" : location.href = t.data("redirect") : location.reload() : "#form-normal-post-quickly" == t.selector ? App.UI.ShowFormMessage("#popup-info-quickly", e.message, App.UI.notiTypeError) : App.UI.ShowFormMessage("#popup-login", e.message, App.UI.notiTypeError) }, !0)
    };

    function c(t, e) { "connected" === t.status ? FB.api("/me", { fields: "id,name,first_name,last_name,picture,verified,email" }, function(i) { var n; return i && e && "login" == e ? (n = i, OneSignal.initialized ? OneSignal.getUserId(function(t) { a(n, t || null) }) : a(n, null)) : i && e && "register" == e ? (i.type_user = t.type_user, function(t) { "undefined" != typeof Storage ? (localStorage.setItem("info_user_facebook", JSON.stringify(t)), location.href = "/xac-nhan-tai-khoan-facebook") : console.log("Trình duyệt của bạn không hỗ trợ, Vui lòng nâng cấp trình duyệt để sử dụng dịch vụ") }(i)) : console.log("Không có hành động"), !1 }) : console.log("Connect facebook không thành công") }
    $(document).on("click", "#login-facebook, .btn-login-fb", function() { FB.login(function(t) { c(t, "login") }, { scope: "email" }) }), $(document).on("click", "#login-normal", function() { null == e && (e = $("#form-login")), r(e) }), $("#form-login input[name='acount'], #form-login input[name='password']").keypress(function(t) { 13 == t.which && (t.preventDefault(), r(e)) }), $(document).on("click", "#login-normal-post-quickly", function() { null == i && (i = $("#form-normal-post-quickly")), r(i) }), $(document).on("click", "#register-facebook", function() {
        var t = $("#popup-signup input[name='procedureTypeId']:checked").val();
        FB.login(function(e) { e.type_user = t, c(e, "register") }, { scope: "email" })
    });
    var d = !1;
    $("#register-normal").parents("form").submit(function(t) { t.preventDefault(), d || $("#register-normal").click(), d = !1 }), $(document).on("click", "#register-normal", function() {
        d = !0, n.removeData("bootstrapValidator");
        var t = App.UI.checkValidRules($("#form-register"), { fullname: { validators: { notEmpty: { message: messages.dangky_name_empty } } }, phone: { validators: { notEmpty: { message: messages.dangky_phone_empty }, stringLength: { message: messages.dangky_phone_wrongformat, min: 10, max: 10 } } }, email: { validators: { emailAddress: { message: messages.dangky_email_wrongformat } } }, password: { validators: { notEmpty: { message: messages.dangky_matkhau_empty }, stringLength: { message: messages.dangky_matkhau_wrongformat, min: 6, max: 20 } } } });
        if (!t) return !1;
        OneSignal.initialized ? OneSignal.getUserId(function(e) { h(t, e || null) }) : h(t, null)
    });
    var h = function(t, e) {
        var i = $("#popup-signup input[name='procedureTypeId']:checked").val(),
            o = { deviceToken: e, name: t.fullname, wantToBeAgent: !!parseInt(i), type: "normal", phone: t.phone, email: t.email, osName: "BROWSER", deviceName: null, versionName: "11.4.1", password: t.password, formIdMailChimp: 1685 };
        App.Feature.Post("/api/register", o, function(t) { n.modal("hide"), t.result && t.code ? location.href = "/xac-nhan-tai-khoan" : 402 == t.code ? ($("#popup-signup").modal("hide"), App.UI.Confirm(messages.dangnhap_phoneemail_inactive, function() { location.href = "/xac-nhan-tai-khoan" })) : 201 == t.code ? App.UI.Confirm(messages.dangkyfacebook_facebook_actived, function() { $("#popup-signup").modal("hide"), $("#popup-login").modal("show") }) : App.UI.ShowFormMessage("#popup-signup", t.message, App.UI.notiTypeError) }, !0)
    };
    $(document).on("click", "#save-user-change-pass", function() {
        if (! function(t) { t.removeData("bootstrapValidator"), t.bootstrapValidator({ message: "Giá trị chưa đúng", excluded: [":hidden"], feedbackIcons: { valid: "glyphicon glyphicon-ok", invalid: "glyphicon glyphicon-remove", validating: "glyphicon glyphicon-refresh" }, fields: { user_pass_old: { validators: { notEmpty: { message: "Vui lòng nhập mật khẩu cũ của bạn" }, stringLength: { message: "Mật khẩu từ 6 đến 20 ký tự", min: 6, max: 20 } } }, user_pass: { validators: { notEmpty: { message: "Vui lòng nhập mật khẩu mới" }, stringLength: { message: "Mật khẩu từ 6 đến 20 ký tự", min: 6, max: 20 } } }, user_repass: { validators: { notEmpty: { message: "Vui lòng nhập xác nhận mật khẩu" }, stringLength: { message: "Mật khẩu từ 6 đến 20 ký tự", min: 6, max: 20 }, identical: { field: "user_pass", message: "Mật khẩu không trùng khớp" } } } } }); var e = t.data("bootstrapValidator"); return e.validate(), e.isValid() }($(this).closest("#form-user-change-pass"))) return !1;
        var t = $("#user_pass_old").val(),
            e = $("#user_pass").val(),
            i = {};
        i.oldPassword = t, i.newPassword = e, console.log(i), App.Feature.Post("/api/user-change-password", i, function(t) { t.result ? ($("#popup-user-change-pass").modal("hide"), App.UI.Info("Thay đổi mật khẩu mới thành công"), $("#modal-info").on("hide.bs.modal", function() { $(".modal-backdrop.fade").hide() })) : App.UI.ShowFormMessage("#popup-user-change-pass", t.message, App.UI.notiTypeError) })
    }), $(document).on("click", "#sign-out", function() { OneSignal.initialized ? OneSignal.getUserId(function(t) { doSignout(t || null) }) : doSignout(null) })
});
var doSignout = function(t) {
        var e = {};
        e.deviceToken = t, e.osName = "BROWSER", console.log(e), App.Feature.Post("/api/logout", e, function(t) { console.log(t), t.result ? (console.log("Thành công"), location.href = "/dang-xuat") : location.href = "/dang-xuat" })
    },
    userChangePass = function() { $("#popup-user-change-pass").modal() },
    searchKeyword = function(t, e) {
        var i = this;
        i.globalTimeout = null, i.currentItem = 1, i.setting = $.extend({ limit_item: 10, delay: 200, parent_dropdown: ".next", click_dropdown: !1, width_focus: !1, width_blur: !1, height: 35, data_default: !1, placeholder: "Nhập địa điểm tìm kiếm", loadding: "Đang tìm kiếm...", text_no_result: "Không tìm thấy dữ liệu cho từ khóa" }, e), i.dropdown = null, t.css({ height: i.setting.height });
        var n, o = $('<div class="search-keyword-container">').css({ position: "relative" });
        return t.after(o), t.appendTo(o), "false" != t.attr("replace-placeholder") && t.attr("placeholder", i.setting.placeholder), i.eventInit = function() {
            t.keyup(function(t) {
                if (-1 != [38, 40, 39, 37, 13, 9].indexOf(t.keyCode)) return !0;
                var e = $(this).val();
                e.length >= 2 ? (i.dropdown.show(), null != i.globalTimeout && clearTimeout(i.globalTimeout), i.globalTimeout = setTimeout(function() {
                    i.globalTimeout = null, i.getSuggest(e, i.dropdown, function(t) {
                        i.dropdown.html(""), t && 200 == t.code && t.dataResult.length > 0 ? t.dataResult.forEach(function(t, n) {
                            var o = "";
                            "function" == typeof renderParamsKeyword && (renderParamsKeyword(), o = decodeURIComponent($.query.toString()));
                            var s = $("<a>").attr("href", t.destination_url.replace(/\"/g, "").replace("https://propzy.vn", location.protocol + "//" + location.host) + o);
                            0 == n && s.addClass("active");
                            var a = t.keywords.replace(/\"/g, ""),
                                r = new RegExp(e.trim(), "g");
                            a = a.replace(r, "<b>" + e.trim() + "</b>"), s.addClass("item").append("<div class='title autocomplete-suggestion'>" + a + "</div>").attr("uuid", t.uuid), s.on("mousedown", function(t) { t.preventDefault() }).click(function(e) { e.preventDefault(), s.removeClass(".active"), $(this).val(t.keywords.replace(/\"/g, "")), window.location = $(this).attr("href") }), i.dropdown.append(s).removeClass("not-found").addClass("has-result")
                        }) : i.dropdown.html("Không tìm thấy từ khóa bạn tìm kiếm")
                    })
                }, i.setting.delay)) : i.dropdown.hide()
            }).keydown(function(t) {
                if (-1 != [38, 40, 39, 37, 9].indexOf(t.keyCode)) {
                    if (40 == t.keyCode && i.currentItem < i.setting.limit_item && i.currentItem++, 38 == t.keyCode && i.currentItem > 1 && i.currentItem--, 9 == t.keyCode) {
                        var e = i.dropdown.find(".item.active");
                        0 != e.length ? window.location = e.attr("href") : "/" != location.pathname && (location.href = location.protocol + "//" + location.host + "/mua/nha/hcm"), t.stopPropagation(), t.preventDefault(), i.dropdown.hide()
                    }
                    return $(i.dropdown.find(".item").removeClass("active").get(i.currentItem - 1)).addClass("active"), $(this).val(i.dropdown.find(".item.active").text()), !1
                }
            }).keypress(function(t) {
                if (-1 != [13, 9].indexOf(t.keyCode)) {
                    var e = i.dropdown.find(".item.active"),
                        n = $(this).val();
                    return 0 != e.length ? window.location = e.attr("href") : setTimeout(function() { n.match(/^\d+$/) && App.Feature.Get("/api/listings-exist/" + parseInt(n), function(t) { console.log(t), "200" == t.response.code ? location.href = t.response.data.link : location.href = location.protocol + "//" + location.host + "/error" }) }, 300), t.stopPropagation(), t.preventDefault(), $(i.dropdown.find(".item").removeClass("active").get(i.currentItem - 1)).addClass("active"), i.dropdown.hide(), !1
                }
            }).focus(function() {
                0 != $(this).val().length && $(this).trigger("keypress"), i.setting.width_focus && $(this).css({ width: i.setting.width_focus, opcity: 1 });
                var t = "";
                "function" == typeof renderParamsKeyword && (renderParamsKeyword(), t = decodeURIComponent($.query.toString())), $("#search_text").next().find("a").each(function() {
                    var e = $(this).attr("href").split("?");
                    $(this).attr("href", e[0] + t)
                }), "" != i.dropdown.html() && i.dropdown.show(), $(".input-search").removeClass("active-search")
            }).blur(function() {!1 !== i.setting.width_blur && $(this).css({ width: i.setting.width_blur, opcity: 0 }), i.dropdown.hide() })
        }, i.getSuggest = function(t, e, n) {
            if (!t.length) return n();
            var o = "";
            "undefined" != typeof listingTypeId && listingTypeId && (o = listingTypeId);
            var s = null,
                a = $("#select-property").val();
            a && 1 === a.length && (s = a[0]);
            var r = { field_fetchs: ["uuid", "destination_url", "keywords", "jsonpost"], type_match: "WILDCARD", list_querys: [{ field: "keywords", values: t }, { field: "listing_typeid", values: o }, { field: "property_typeid", values: s }], limit: i.setting.limit_item };
            $.ajax({ url: "/api/keyword-search", type: "POST", data: JSON.stringify(r), cache: !0, async: !0, error: function() { n() }, beforeSend: function() { e.html(i.setting.loadding).addClass("loadding-search") }, success: function(t) { n(t) } }).always(function() { e.removeClass("loadding-search") })
        }, n = (new Date).getTime(), ".next" != i.setting.parent_dropdown ? i.dropdown = $(i.setting.parent_dropdown).append('<div style="display: none" class="autocomplete-suggestions dropdown-seach dropdown-seach-' + n + ' slider-scroll">').find(".dropdown-seach-" + n) : i.dropdown = t.after($('<div style="display: none" class="autocomplete-suggestions dropdown-seach dropdown-seach-' + n + ' container-scroll">').css({ position: "absolute", top: i.setting.height, left: 0, backgroundColor: "#ffffff" })).next().first(), i.setting.data_default && "function" == typeof i.setting.data_default && i.setting.data_default(i.dropdown), i.eventInit(), { getDropdownElement: function() { return i.dropdown } }
    };
$.fn.searchKeyword = function(t) {
    var e = $(this),
        i = e.data("search_keyword");
    return "object" == typeof t ? $.each(this, function() { i || (i = new searchKeyword(e, t), e.data("search_keyword", i)) }) : void 0 !== t && "string" == typeof t && "test" == t && i.test(), e.data("search_keyword")
}, $(document).ready(function() {
    $(document).on("click", ".stop-contact", function() { $("#modal-confirm-stop-contact").modal() }), $(document).on("click", "#request-contact", function() { $("#modal-confirm-request-contact").modal() }), $(document).on("click", ".btn-confirm-stop", function() {
        var t = { requestType: 39 };
        App.Feature.Post("/api/stop-or-request-contact", t, function(t) { console.log(t), $("#modal-confirm-stop-contact").modal("hide"), t.result ? (App.UI.Done("Thao tác thành công, bạn vui lòng chờ xác nhận từ Propzy"), $(".modal-popup").on("hidden.bs.modal", function() { location.reload() })) : App.UI.Error("Có lỗi xảy ra, bạn vui lòng thao tác lại") })
    }), $(document).on("click", ".btn-confirm-contact", function() {
        var t = { requestType: 40 };
        App.Feature.Post("/api/stop-or-request-contact", t, function(t) { console.log(t), $("#modal-confirm-request-contact").modal("hide"), t.result ? (App.UI.Done("Thao tác thành công, bạn vui lòng chờ xác nhận từ Propzy"), $(".modal-popup").on("hidden.bs.modal", function() { location.reload() })) : App.UI.Error(t.message) })
    })
});
var priceSlug = !1,
    select_price = !1,
    logicRenderPropertySlug = { 1: { 8: "can-ho", 11: "nha", 13: "dat-nen", 14: "dat-nen-du-an" }, 2: { 1: "can-ho", 2: "nha" } },
    logicDisplayAdvancedFilter = { 0: [!0, !0, !0, !0, !0, !0, !0, !0, !1, !1, !0, !0], 1: [!1, !0, !0, !0, !1, !1, !0, !0, !1, !1, !0, !0], 2: [!0, !0, !0, !0, !0, !0, !0, !0, !1, !1, !0, !0], 8: [!1, !0, !0, !0, !1, !1, !0, !0, !1, !1, !0, !0], 11: [!0, !0, !0, !0, !0, !0, !0, !0, !1, !1, !0, !0], 13: [!1, !0, !1, !1, !0, !0, !0, !0, !1, !1, !0, !0], 14: [!1, !0, !1, !1, !0, !0, !0, !0, !1, !1, !0, !0], 99: [!1, !1, !1, !1, !1, !1, !1, !1, !0, !0, !1, !1], 100: [!1, !0, !1, !1, !1, !1, !0, !1, !1, !1, !0, !0] },
    logic = selectValuables[listingTypeId][0].propertyTypeId;
if (null !== logic) var currentLogicFilter = logicDisplayAdvancedFilter[logic];
else currentLogicFilter = logicDisplayAdvancedFilter[0];

function renderPriceValue(t) {
    var e;
    if (t > 999999999) e = "ty", t /= 1e9;
    else if (t > 999999) e = "trieu", t /= 1e6;
    else if (0 == t) return 0;
    return t + e
}
void 0 !== options && void 0 !== options.propertyList && (currentLogicFilter = "1,2,11,13,8,14" == options.propertyList || "1,2" == options.propertyList || "11,13,8,14" == options.propertyList ? logicDisplayAdvancedFilter[99] : null !== options.propertyList ? logicDisplayAdvancedFilter[options.propertyList] : logicDisplayAdvancedFilter[0]);
var renderPriceNotUnit = function(t) {
        if (t > 999999999) t /= 1e9;
        else if (t > 999999) t /= 1e6;
        else if (0 == t) return 0;
        return t || !1
    },
    render_slider_price = function(t) {
        t.each(function() {
            var t, e = $(this),
                i = $(this).find(".price-range-input"),
                n = $(this).find(".price-input-1"),
                o = $(this).find(".price-input-2"),
                s = $("#title-price"),
                a = parseInt(i.data("min")),
                r = parseInt(i.data("max")),
                l = parseInt(i.data("from")),
                c = parseInt(i.data("to")),
                d = parseInt(i.data("step"));
            i.ionRangeSlider({
                type: "double",
                min: a,
                max: r,
                from: l,
                to: c,
                step: d,
                onStart: function(t) {},
                onChange: function(t) {
                    select_price = !1, 1 == $(".search-type.active").data("value") ? r = 10 : 2 == $(".search-type.active").data("value") ? r = 30 : e.find("#select-type-price option:selected").length > 0 && (r = parseInt(e.find("#select-type-price option:selected").data("max"))), t.from <= a && (t.from = ""), t.to >= r && (t.to = ""), n.prop("value", t.from), o.prop("value", t.to == r ? r : t.to);
                    var i = " tỷ";
                    30 == r && (i = " triệu"), 0 == n.val() && 0 == o.val() ? s.text("Mức giá") : 0 == n.val() && 0 !== o.val() ? s.text("0 - " + o.val() + i) : 0 !== n.val() && 0 == o.val() ? s.text(n.val() + i) : 0 !== n.val() && 0 !== o.val() ? s.text(n.val() + " - " + o.val() + i) : s.text("Mức giá")
                }
            }), t = i.data("ionRangeSlider"), e.find("#select-type-price").on("change", function() {
                var e = $("#select-type-price option:selected").data("min"),
                    s = $("#select-type-price option:selected").data("max"),
                    a = $("#select-type-price option:selected").data("step");
                n.val(""), o.val(""), i.attr("data-min", e), i.attr("data-max", s), t.update({ min: e, max: s, from: e, to: s, step: a })
            }), $(".search-type").on("click", function() {
                if (1 == $(this).data("value")) {
                    var e = $("#price_for_buy").data("min"),
                        s = $("#price_for_buy").data("max"),
                        a = $("#price_for_buy").data("step");
                    $("#price_for_buy").data("text");
                    n.val(""), o.val(""), i.attr("data-min", e), i.attr("data-max", s), t.update({ min: e, max: s, from: e, to: s, step: a })
                } else if (2 == $(this).data("value")) {
                    e = $("#price_for_rent").data("min"), s = $("#price_for_rent").data("max"), a = $("#price_for_rent").data("step"), $("#price_for_rent").data("text");
                    n.val(""), o.val(""), i.attr("data-min", e), i.attr("data-max", s), t.update({ min: e, max: s, from: e, to: s, step: a })
                } else {
                    e = $("#price_for_buy").data("min"), s = $("#price_for_buy").data("max"), a = $("#price_for_buy").data("step"), $("#price_for_buy").data("text");
                    n.val(""), o.val(""), i.attr("data-min", e), i.attr("data-max", s), t.update({ min: e, max: s, from: e, to: s, step: a })
                }
            }), $("#select-price li").on("click", function() {
                var e = $(this).data("min-price"),
                    i = $(this).data("max-price");
                if (select_price = !0, 0 != i) {
                    var n = renderPriceValue(e),
                        o = renderPriceValue(i),
                        s = renderPriceNotUnit(e),
                        l = renderPriceNotUnit(i),
                        c = " tỷ";
                    c = i > 999999999 && (1 == listingTypeId || 99 == listingTypeId) ? " tỷ" : " triệu", 0 == s && 0 == l ? $("#title-price").text("Mức giá") : 0 == s && 0 !== l ? $("#title-price").text("0 - " + l + c) : 0 !== s && 0 == l ? $("#title-price").text(s + c) : 0 !== s && 0 !== l ? 10 == s && 1e6 == l || 2 == listingTypeId && 1e10 == i ? $("#title-price").text(s + c) : $("#title-price").text(s + " - " + l + c) : $("#title-price").text("Mức giá"), "10ty" == o || "1000000ty" == o ? priceSlug = n : 0 != n.length && 0 != o.length ? priceSlug = n + "-" + o : 0 == n.length && 0 != o.length ? priceSlug = "0-" + o : 0 != n.length && 0 == o.length && (priceSlug = n), priceSlug && (priceSlug = priceSlug.replace("ty-", "-").replace("trieu-", "-").replace("ngan-", "-").trim())
                } else $("#title-price").text("Mức giá"), priceSlug = !1;
                $("#price-from").val(s), 1e6 == l || 2 == listingTypeId && 1e10 == i ? $("#price-to").val("Giá đến") : $("#price-to").val(l), t.update({ min: a, max: r, from: a, to: r, step: d }), $("#price-from").trigger("change"), $("#price-to").trigger("change"), $(".show-price").hide()
            }), n.on("change keyup", function() {
                select_price = !1;
                var i = parseInt($(this).prop("value")),
                    s = parseInt(o.prop("value"));
                1 == $(".search-type.active").data("value") ? r = 10 : 2 == $(".search-type.active").data("value") ? r = 30 : e.find("#select-type-price option:selected").length > 0 && (r = parseInt(e.find("#select-type-price option:selected").data("max"))), isNaN(s) && (s = r), i < a ? (i = a, $(this).val(a)) : i > s && (i = s, $(this).val(s)), t.update({ from: i });
                var l = parseInt(n.prop("value"));
                isNaN(l) && (l = 0);
                var c = s;
                if (c > r && (c = r), 0 == c || isNaN(c)) $("#title-price").text("Mức giá");
                else {
                    var d = " tỷ";
                    d = 10 != r || 1 != listingTypeId && 99 != listingTypeId ? " triệu" : " tỷ", 0 == l && 0 == c ? $("#title-price").text("Mức giá") : 0 == l && 0 !== c ? $("#title-price").text("0 - " + c + d) : 0 !== l && 0 == c ? $("#title-price").text(l + d) : 0 !== l && 0 !== c ? 10 == l && 10 == c || 2 == listingTypeId && 30 == l && 30 == c ? $("#title-price").text(l + d) : $("#title-price").text(l + " - " + c + d) : $("#title-price").text("Mức giá")
                }
            }), o.on("change keyup", function() {
                select_price = !1;
                var i = parseInt($(this).prop("value")),
                    s = parseInt(n.prop("value")),
                    a = parseInt(o.prop("value"));
                1 == $(".search-type.active").data("value") ? r = 10 : 2 == $(".search-type.active").data("value") ? r = 30 : e.find("#select-type-price option:selected").length > 0 && (r = parseInt(e.find("#select-type-price option:selected").data("max"))), i < a ? (i = a, $(this).val(a)) : i > r ? (i = r, $(this).val(r)) : a < s && (i = s, $(this).val(i)), t.update({ to: i });
                var l = parseInt(n.prop("value"));
                isNaN(l) && (l = 0);
                var c = a;
                c > r && (c = r), l > c && (c = l);
                var d = " tỷ";
                d = 10 != r || 1 != listingTypeId && 99 != listingTypeId ? " triệu" : " tỷ", 0 == c || isNaN(c) ? 0 != l && isNaN(c) ? (10 == l && isNaN(c) || 2 == listingTypeId && 30 == l && isNaN(c)) && $("#title-price").text(l + d) : $("#title-price").text("Mức giá") : 0 == l && 0 == c ? $("#title-price").text("Mức giá") : 0 == l && 0 !== c ? $("#title-price").text("0 - " + c + d) : 0 !== l && 0 == c ? $("#title-price").text(l + d) : 0 !== l && 0 !== c ? 10 == l && 10 == c || 2 == listingTypeId && 30 == l && 30 == c ? $("#title-price").text(l + d) : $("#title-price").text(l + " - " + c + d) : $("#title-price").text("Mức giá")
            })
        })
    },
    search_bar = function() {
        var t = this;

        function e() { t.dataSend = App.UI.objectifyForm($("#form-search-buy")), t.isSearchPage = $("body").hasClass("search"), t.dataDefault = { select_district: "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24", select_ward: "1,2,3,4,5,6,7,8,9,10", property_type: 11, price_from: "", price_to: "", size_from: "", size_to: "", bed_value: "0", bath_value: "0", floor_value: "0" }, t.currentPropertyData = [], t.currentPropertyData.push(selectValuables[listingTypeId][0]), void 0 !== options && void 0 !== options.propertyList ? (t.currentPropertyData = [], $.each(selectValuables[listingTypeId], function(e, i) { options.propertyList.includes(i.propertyTypeId) && t.currentPropertyData.push(i) })) : (t.currentPropertyData = [], 1 == listingTypeId ? t.currentPropertyData.push(selectValuables[1][1]) : 2 == listingTypeId && t.currentPropertyData.push(selectValuables[2][1])) }

        function i(t, e, i) {
            $("#select-ward").prop("disabled", !1);
            var n = $("#select-ward"),
                o = $("#select-ward").find(".optionGroup-" + t);
            i ? ($(o).remove(), $("#select-ward").multiselect("reload")) : App.Feature.Get("/api/get-wards-by-district/" + t, function(i) {
                if (0 != i.length) {
                    var o = [],
                        s = "";
                    $.each(i, function(t, e) { o.push(e.wardId), s += '<option value="' + e.wardId + '">' + e.wardName + "</option>" }), s = `<optgroup class="optionGroup-${t}" label="${e}" >` + s + "</optgroup>", $(n).append($(s))
                }
                $("#select-ward").multiselect("reload")
            }, !0)
        }

        function n() {
            if ("99" != listingTypeId) {
                var t = $("#select-property").val();
                (!t || t.length > 1) && (currentLogicFilter = logicDisplayAdvancedFilter[100])
            }
            currentLogicFilter[0] ? $(".select-floor-container").show() : ($(".select-floor-container").hide(), $(".select-floor-container #floor-value").val("0").trigger("change")), currentLogicFilter[1] ? $(".select-direction-container").show() : $(".select-direction-container").hide(), currentLogicFilter[2] ? $(".select-bed-container").show() : ($(".select-bed-container").hide(), $(".select-bed-container #bed-value").val("0").trigger("change")), currentLogicFilter[3] ? $(".select-bath-container").show() : ($(".select-bath-container").hide(), $(".select-bath-container #bath-value").val("0").trigger("change")), currentLogicFilter && currentLogicFilter[4] ? $(".col-position-search").show() : ($(".col-position-search").hide(), $(".col-position-search .is_front_alley").prop("checked", !1).trigger("change")), currentLogicFilter && currentLogicFilter[5] ? $(".col-position-search").show() : ($(".col-position-search").hide(), $(".col-position-search .is_front_alley").prop("checked", !1).trigger("change")), currentLogicFilter && currentLogicFilter[6] ? $(".col-rented-ccch").show() : $(".col-rented-ccch").hide(), currentLogicFilter && currentLogicFilter[7] ? $(".col-listing-type").show() : $(".col-listing-type").hide(), currentLogicFilter && currentLogicFilter[8] ? $(".col-year-build").show() : $(".col-year-build").hide(), currentLogicFilter && currentLogicFilter[9] ? $(".col-type-price").show() : $(".col-type-price").hide(), currentLogicFilter && currentLogicFilter[10] ? $(".col-size").show() : $(".col-size").hide(), currentLogicFilter && currentLogicFilter[11] ? $(".col-ward").show() : $(".col-ward").hide()
        }

        function o(t) { renderSlug(t) }
        e(), $(document).ready(function() {
            App.UI.inputAllowNumber(["#price-from", "#price-to"], !1), $(".property_type").change(function(e) {
                var i, o;
                i = $(this), o = selectValuables[listingTypeId], currentPropertyData = [], $(o).each(function(t, e) { i.val() && i.val().length && i.val().includes(e.propertyTypeId.toString()) && currentPropertyData.push(e) }), currentPropertyData, t.currentPropertyData.length > 0 && (currentLogicFilter = logicDisplayAdvancedFilter[t.currentPropertyData[0].propertyTypeId], propertyTypeIdSearchKeyword = t.currentPropertyData[0].propertyTypeId), n()
            }), $("#select-district").multiselect({
                columns: 1,
                search: !0,
                selectAll: !0,
                minHeight: 100,
                maxHeight: 200,
                texts: { placeholder: "Quận/Huyện", search: "", selectedOptions: " selected", selectAll: "Tất cả", unselectAll: "unselectAll", noneSelected: "None Selected" },
                onOptionClick: function(t, e) {
                    var n = $("#select-district"),
                        o = $(e),
                        s = o.val(),
                        a = o.attr("title"),
                        r = $(n).next().find("li:not(.optgroup)").length,
                        l = $(n).next().find("li.selected:not(.optgroup)").length;
                    if (r == l && $(n).next().find(".ms-selectall input").prop("checked", !0), l >= 2 && $("#select-street_sb").prop("disabled", !0), o.prop("checked")) r == l && $(n).next().find(".ms-selectall input").prop("checked", !0), i(s, a, !1);
                    else {
                        if ($(n).next().find(".ms-selectall input").prop("checked", !1), 0 == l) return $("#select-ward").html("").prop("disabled", !0), void $("#select-ward").multiselect("reload");
                        1 == l && $("#select-street_sb").prop("disabled", !1), i(s, a, !0)
                    }
                },
                onSelectAll: function(t, e) { $("#select-ward").html("").prop("disabled", !0), $("#select-ward").multiselect("reload") }
            }), $("#select-ward").multiselect({
                columns: 1,
                search: !0,
                minHeight: 100,
                maxHeight: 200,
                texts: { placeholder: "Phường/Xã", search: "", selectedOptions: " selected", selectAll: "Tất cả", unselectAll: "unselectAll", noneSelected: "None Selected" },
                selectGroup: !0,
                onOptionClick: function(t, e) {
                    var i = $(e),
                        n = $("#select-ward"),
                        o = $(n).next().find("li:not(.optgroup)").length,
                        s = $(n).next().find("li.selected:not(.optgroup)").length;
                    o == s && $(n).next().find(".ms-selectall input").prop("checked", !0), i.prop("checked") || $(n).next().find(".ms-selectall input").prop("checked", !1)
                },
                onSelectAll: function(t, e) {}
            }), $("#apply-search").click(function(t) { App.UI.showLoadding(), o(1) }), $("#search_text").on("keyup", function(t) { 13 === t.keyCode && (App.UI.showLoadding(), o(1), t.preventDefault()()) }), $(".search-type").on("click", function() { $(".search-type").removeClass("active"), $(this).addClass("active"), $("#title-price").text("Mức giá"), 1 == $(this).data("value") ? (listingTypeId = 1, propertyTypeIdSearchKeyword = 11, slugListingType = "/mua/", $(".status-rented-saled").text("Đã bán"), currentLogicFilter = logicDisplayAdvancedFilter[11], $("#select-property").html($("#select-property-buy").html()), $("#select-price").html($("#select-price-buy").html()), $("#select-property").show(), $("#select-type-price").hide(), e(), $("#select-property").val(["11"]), $("#select-property").multiselect("reload"), $("#select-property").hide(), n()) : 2 == $(this).data("value") ? (listingTypeId = 2, propertyTypeIdSearchKeyword = 1, slugListingType = "/thue/", $(".status-rented-saled").text("Đã thuê"), currentLogicFilter = logicDisplayAdvancedFilter[1], $("#select-property").html($("#select-property-rent").html()), $("#select-price").html($("#select-price-rent").html()), $("#select-property").show(), $("#select-type-price").hide(), e(), $("#select-property").val(["1"]), $("#select-property").multiselect("reload"), $("#select-property").hide(), n()) : 99 == $(this).data("value") && (listingTypeId = 99, propertyTypeIdSearchKeyword = 99, slugListingType = "/du-an/", currentLogicFilter = logicDisplayAdvancedFilter[99], $("#select-type-price option:first").prop("selected", !0), $("#select-price").html($("#select-price-buy").html()), $("#select-property").hide(), $("#select-type-price").show(), e(), n(), $("#select-property").next().hide()), render_slider_price($(".group-range-price")) }), $("#select-type-price").change(function(t) { $("#title-price").text("Mức giá"), 1 == $(this).val() ? $("#select-price").html($("#select-price-buy").html()) : $("#select-price").html($("#select-price-rent").html()), render_slider_price($(".group-range-price")) }), $("#save-apply-search").click(function() {
                if (isLogin) {
                    App.UI.showLoadding();
                    var t = $("#name-search").val().trim();
                    if ("" == t) return alert("Vui lòng nhập tên bộ tìm kiếm"), App.UI.hideLoadding(), !1;
                    o(2)
                } else $("#popup-login").modal("show")
            })
        }), n()
    };

function renderSlug(t) {
    var e = "";
    1 == listingTypeId ? e += "/mua" : 2 == listingTypeId ? e += "/thue" : e += "/du-an/hcm";
    var i = $("#select-district").val(),
        n = $("#select-district option:selected").toArray().map(t => t.text),
        o = $("#select-ward").val(),
        s = $("#select-ward option:selected").toArray().map(t => t.text);
    99 != listingTypeId && (!currentPropertyData.length || currentPropertyData.length > 1 ? e += "/bat-dong-san/hcm" : e += "/" + logicRenderPropertySlug[listingTypeId][currentPropertyData[0].propertyTypeId] + "/hcm"), i && 1 === i.length && (e += "/" + App.Feature.strToUrl(n[0]), 99 != listingTypeId && o && 1 === o.length && (e += "-" + App.Feature.strToUrl(s[0]))), renderParamsNew();
    var a = e + decodeURIComponent($.query.toString());
    if (1 == t) return location.href = a, !1;
    var r = $("#name-search").val().trim(),
        l = App.UI.objectifyForm($("#form-search-buy")),
        c = $(".search-type.active").data("value"),
        d = 99;
    1 != c && 2 != c || (d = $("#select-property").val() ? $("#select-property").val().toString() : "");
    var h = { filter: { listingTypeList: c, propertyList: d, directionList: l.direction ? l.direction.toString() : "", minSize: $("#select-size option:selected").data("min-size"), maxSize: $("#select-size option:selected").data("max-size"), maxBedroom: l.bed_value, maxBathroom: l.bath_value, maxNumberFloor: l.floor_value, minPrice: $("#select-price option:selected").data("min-price"), maxPrice: $("#select-price option:selected").data("max-price"), position: l.is_front_alley, maxYearBuilt: l.year_build ? l.year_build : null, statusListing: l.status_listing ? l.status_listing.toString() : "", cityIds: l.select_city, districtIds: l.select_district, wardIds: l.select_ward } },
        u = { criteriaName: r, linkSearch: a, filterCommon: h };
    console.log(u), App.Feature.Post("/api/save-search", u, function(t) { t.result ? location.href = a : (alert(t.message), App.UI.hideLoadding()) })
}

function renderParamsNew() {
    var t = $("#select-district").val(),
        e = $("#select-ward").val();
    99 != listingTypeId && currentPropertyData.length > 1 ? $.query = $.query.set("loai", currentPropertyData.map(t => t.propertyTypeId).join(",")) : $.query = $.query.remove("loai"), t && (t.length > 1 && t.length < $("#select-district option").length ? $.query = $.query.set("quan", t.join(",")) : $.query = $.query.remove("quan"), 99 != listingTypeId && e && e.length && e.length < $("#select-ward option").length && (t.length > 1 || e.length > 1) ? $.query = $.query.set("phuong", e.join(",")) : $.query = $.query.remove("phuong"));
    var i = App.UI.objectifyForm($("#form-search-buy"));
    if (!select_price) {
        if (1 == listingTypeId) { if ("" != $("#price-from").val()) var n = 1e9 * parseInt($("#price-from").val()); if ("" != $("#price-to").val()) var o = 1e9 * parseInt($("#price-to").val()) } else if (2 == listingTypeId) { if ("" != $("#price-from").val()) n = 1e6 * parseInt($("#price-from").val()); if ("" != $("#price-to").val()) o = 1e6 * parseInt($("#price-to").val()) } else if (1 == $("#select-type-price").val()) { if ("" != $("#price-from").val()) n = 1e9 * parseInt($("#price-from").val()); if ("" != $("#price-to").val()) o = 1e9 * parseInt($("#price-to").val()) } else if (2 == $("#select-type-price").val()) { if ("" != $("#price-from").val()) n = 1e6 * parseInt($("#price-from").val()); if ("" != $("#price-to").val()) o = 1e6 * parseInt($("#price-to").val()) }
        n && (n = renderPriceValue(n)), o && (o = renderPriceValue(o)), (n || o) && (n && o ? priceSlug = n + "-" + o : o ? priceSlug = "0-" + o : n && (priceSlug = n))
    }
    if (priceSlug && (priceSlug = priceSlug.replace("ty-", "-").replace("trieu-", "-").replace("ngan-", "-").trim()), $.query = priceSlug ? $.query.set("gia", priceSlug) : $.query.remove("gia"), currentLogicFilter[10] && 0 != $("#select-size option:selected").data("max-size")) {
        var s = !1,
            a = $("#select-size option:selected").data("min-size"),
            r = $("#select-size option:selected").data("max-size");
        0 != a.length && 0 != r.length ? s = a + "-" + r : 0 == a.length && 0 != r.length ? s = "0-" + r : 0 != a.length && 0 == r.length && (s = a), $.query = s ? $.query.set("dientich", s) : $.query.remove("dientich")
    } else $.query = $.query.remove("dientich");
    currentLogicFilter[0] ? $.query = parseInt(i.floor_value) > -1 && 0 != i.floor_value ? $.query.set("tang", i.floor_value) : $.query.remove("tang") : $.query = $.query.remove("tang"), currentLogicFilter[1] ? $.query = void 0 !== i.direction && 0 != i.direction.length && "" != i.direction[0] ? $.query.set("huong", i.direction.join(",")) : $.query.remove("huong") : $.query = $.query.remove("huong"), currentLogicFilter[2] ? $.query = parseInt(i.bed_value) > -1 && 0 != i.bed_value ? $.query.set("phongngu", i.bed_value) : $.query.remove("phongngu") : $.query = $.query.remove("phongngu"), currentLogicFilter[3] ? $.query = parseInt(i.bath_value) > -1 && 0 != i.bath_value ? $.query.set("phongtam", i.bath_value) : $.query.remove("phongtam") : $.query = $.query.remove("phongtam"), currentLogicFilter[6] && void 0 !== i.status_listing ? $.query = void 0 !== i.status_listing && 0 != i.status_listing.length ? $.query.set("statusListing", i.status_listing.join(",")) : $.query.remove("statusListing") : $.query = $.query.remove("statusListing"), void 0 !== i.monopoly_listing ? $.query = $.query.set("isGuaranteed", 1) : $.query = $.query.remove("isGuaranteed"), currentLogicFilter[4] && void 0 !== i.is_front_alley && "0" === i.is_front_alley ? $.query = $.query.set("isRoadFront", 1) : $.query = $.query.remove("isRoadFront"), currentLogicFilter[5] && void 0 !== i.is_front_alley && "1" === i.is_front_alley ? $.query = $.query.set("isAlley", 1) : $.query = $.query.remove("isAlley"), currentLogicFilter[5] && 1 == i.is_front_alley && void 0 !== i.alley && "" != i.alley ? $.query = $.query.set("alley", i.alley) : $.query = $.query.remove("alley"), "" != $("#search_text").val() ? $.query = $.query.set("keyword", $("#search_text").val()) : $.query = $.query.remove("keyword"), currentLogicFilter[8] && void 0 !== i.select_year ? $.query = $.query.set("year", i.select_year) : $.query = $.query.remove("year"), currentLogicFilter[9] && $("#select-type-price").val() && priceSlug ? $.query = $.query.set("loaigia", $("#select-type-price").val()) : $.query = $.query.remove("loaigia")
}

function renderParamsKeyword() {
    $.query = $.query.empty();
    var t = App.UI.objectifyForm($("#form-search-buy"));
    if (99 != listingTypeId && currentPropertyData.length > 1 ? $.query = $.query.set("loai", currentPropertyData.map(t => t.propertyTypeId).join(",")) : $.query = $.query.remove("loai"), !select_price) {
        if (1 == listingTypeId) { if ("" != $("#price-from").val()) var e = 1e9 * parseInt($("#price-from").val()); if ("" != $("#price-to").val()) var i = 1e9 * parseInt($("#price-to").val()) } else if (2 == listingTypeId) { if ("" != $("#price-from").val()) e = 1e6 * parseInt($("#price-from").val()); if ("" != $("#price-to").val()) i = 1e6 * parseInt($("#price-to").val()) } else if (1 == $("#select-type-price").val()) { if ("" != $("#price-from").val()) e = 1e9 * parseInt($("#price-from").val()); if ("" != $("#price-to").val()) i = 1e9 * parseInt($("#price-to").val()) } else if (2 == $("#select-type-price").val()) { if ("" != $("#price-from").val()) e = 1e6 * parseInt($("#price-from").val()); if ("" != $("#price-to").val()) i = 1e6 * parseInt($("#price-to").val()) }
        e && (e = renderPriceValue(e)), i && (i = renderPriceValue(i)), (e || i) && (e && i ? priceSlug = e + "-" + i : i ? priceSlug = "0-" + i : e && (priceSlug = e))
    }
    if (priceSlug && (priceSlug = priceSlug.replace("ty-", "-").replace("trieu-", "-").replace("ngan-", "-").trim()), $.query = priceSlug ? $.query.set("gia", priceSlug) : $.query.remove("gia"), currentLogicFilter[10] && 0 != $("#select-size option:selected").data("max-size")) {
        var n = !1,
            o = $("#select-size option:selected").data("min-size"),
            s = $("#select-size option:selected").data("max-size");
        0 != o.length && 0 != s.length ? n = o + "-" + s : 0 == o.length && 0 != s.length ? n = "0-" + s : 0 != o.length && 0 == s.length && (n = o), $.query = n ? $.query.set("dientich", n) : $.query.remove("dientich")
    } else $.query = $.query.remove("dientich");
    currentLogicFilter[0] ? $.query = parseInt(t.floor_value) > -1 && 0 != t.floor_value ? $.query.set("tang", t.floor_value) : $.query.remove("tang") : $.query = $.query.remove("tang"), currentLogicFilter[1] ? $.query = void 0 !== t.direction && 0 != t.direction.length && "" != t.direction[0] ? $.query.set("huong", t.direction.join(",")) : $.query.remove("huong") : $.query = $.query.remove("huong"), currentLogicFilter[2] ? $.query = parseInt(t.bed_value) > -1 && 0 != t.bed_value ? $.query.set("phongngu", t.bed_value) : $.query.remove("phongngu") : $.query = $.query.remove("phongngu"), currentLogicFilter[3] ? $.query = parseInt(t.bath_value) > -1 && 0 != t.bath_value ? $.query.set("phongtam", t.bath_value) : $.query.remove("phongtam") : $.query = $.query.remove("phongtam"), currentLogicFilter[6] && void 0 !== t.status_listing ? $.query = void 0 !== t.status_listing && 0 != t.status_listing.length ? $.query.set("statusListing", t.status_listing.join(",")) : $.query.remove("statusListing") : $.query = $.query.remove("statusListing"), void 0 !== t.monopoly_listing ? $.query = $.query.set("isGuaranteed", 1) : $.query = $.query.remove("isGuaranteed"), currentLogicFilter[4] && void 0 !== t.is_front_alley && "0" === t.is_front_alley ? $.query = $.query.set("isRoadFront", 1) : $.query = $.query.remove("isRoadFront"), currentLogicFilter[5] && void 0 !== t.is_front_alley && "1" === t.is_front_alley ? $.query = $.query.set("isAlley", 1) : $.query = $.query.remove("isAlley"), currentLogicFilter[5] && 1 == t.is_front_alley && void 0 !== t.alley && "" != t.alley ? $.query = $.query.set("alley", t.alley) : $.query = $.query.remove("alley"), currentLogicFilter[8] && void 0 !== t.select_year ? $.query = $.query.set("year", t.select_year) : $.query = $.query.remove("year"), currentLogicFilter[9] && $("#select-type-price").val() && priceSlug ? $.query = $.query.set("loaigia", $("#select-type-price").val()) : $.query = $.query.remove("loaigia")
}
$(document).ready(function() {
    $("#select-property").multiselect({ columns: 1, search: !0, texts: { placeholder: "Chọn loại BĐS", search: "", selectedOptions: " loại", selectAll: "Tất cả", unselectAll: "Bỏ tất cả", noneSelected: "Không chọn cái nào" }, showCheckbox: !0, selectAll: !0 }), "2" == listingTypeId && ($(".filter-house-subpage .search-rent").trigger("change"), options.maxPrice > 0 && options.maxPrice < 1e8 && (0 != options.minPrice && $("#price-from").val(renderPriceNotUnit(options.minPrice)), $("#price-to").val(renderPriceNotUnit(options.maxPrice)), $("#range-slide-price").attr("data-from", renderPriceNotUnit(options.minPrice)), $("#range-slide-price").attr("data-to", renderPriceNotUnit(options.maxPrice))), $("#range-slide-price").attr("data-min", 0), $("#range-slide-price").attr("data-max", 30)), render_slider_price($(".group-range-price")), search_bar(), $('input[name="search_text"]').searchKeyword({ limit_item: 10, height: 50, data_default: function(t) {}, click_dropdown: function(t, e) {} }), 99 == listingTypeId && $("#select-property").next().hide();
    var t = $("#select-property").val();
    if (t) {
        if (t.length === $("#select-property option").length) {
            $("#select-property option").removeAttr("selected"), $("#select-property").multiselect("reload"), $("#select-property").next().children().first().children().first().html("Tất cả"), $.query = $.query.remove("loai");
            var e = location.href.split("?")[0] + decodeURIComponent($.query.toString());
            history.replaceState({ path: e }, "", e)
        }
    } else $("#select-property").next().children().first().children().first().html("Tất cả");
    $(".advance-search").on("click", function(t) { "title-price" != t.target.id && "irs-line" != t.target.className && "irs irs--flat js-irs-0" != t.target.className && "irs-handle from type_last" != t.target.className && "irs-handle to type_last" != t.target.className && "tab-content show-price" != t.target.className && "irs" != t.target.className && "price-from" != t.target.id && "price-to" != t.target.id && $(".show-price").hide() })
});
var logicDisplayAdvancedFilter_sb = { 0: [!0, !0, !0, !0, !0, !0, !0, !0, !0, !1, !1, !1, !0, !0, !0], 1: [!1, !0, !0, !0, !1, !1, !0, !0, !0, !1, !1, !1, !0, !0, !0], 2: [!0, !0, !0, !0, !0, !0, !0, !0, !0, !1, !1, !1, !0, !0, !0], 8: [!1, !0, !0, !0, !1, !1, !0, !0, !0, !1, !1, !1, !0, !0, !0], 11: [!0, !0, !0, !0, !0, !0, !0, !0, !0, !1, !1, !1, !0, !0, !0], 13: [!1, !0, !1, !1, !0, !0, !0, !0, !0, !1, !1, !1, !0, !1, !0], 14: [!1, !0, !1, !1, !0, !0, !0, !0, !0, !1, !1, !1, !0, !1, !0], 99: [!1, !1, !1, !1, !1, !1, !1, !1, !1, !0, !0, !1, !1, !1, !1], 100: [!1, !0, !1, !1, !1, !1, !0, !0, !0, !1, !1, !1, !0, !1, !0] },
    priceSlug_sb = !1,
    select_price_sb = !1,
    logic_sb = (logicRenderPropertySlug = { 1: { 8: "can-ho", 11: "nha", 13: "dat-nen", 14: "dat-nen-du-an" }, 2: { 1: "can-ho", 2: "nha" } }, selectValuables[listingTypeId][0].propertyTypeId);
if (null !== logic_sb) var currentLogicFilter_sb = logicDisplayAdvancedFilter_sb[logic_sb];
else currentLogicFilter_sb = logicDisplayAdvancedFilter_sb[0];

function renderPriceValue_sb(t) {
    var e;
    if (t > 999999999) e = "ty", t /= 1e9;
    else if (t > 999999) e = "trieu", t /= 1e6;
    else if (0 == t) return 0;
    return t + e
}
void 0 !== options && void 0 !== options.propertyList && (currentLogicFilter_sb = "1,2,11,13,8,14" == options.propertyList || "1,2" == options.propertyList || "11,13,8,14" == options.propertyList ? logicDisplayAdvancedFilter_sb[99] : null !== options.propertyList ? logicDisplayAdvancedFilter_sb[options.propertyList] : logicDisplayAdvancedFilter_sb[0]);
var render_slider_price_sb = function(t) {
        t.each(function() {
            var t, e = $(this),
                i = $(this).find(".price-range-input_sb"),
                n = $(this).find(".price-input-1_sb"),
                o = $(this).find(".price-input-2_sb"),
                s = $("#title-price_sb"),
                a = parseInt(i.data("min")),
                r = parseInt(i.data("max")),
                l = parseInt(i.data("from")),
                c = parseInt(i.data("to")),
                d = parseInt(i.data("step"));
            i.ionRangeSlider({
                type: "double",
                min: a,
                max: r,
                from: l,
                to: c,
                step: d,
                onStart: function(t) {},
                onChange: function(t) {
                    select_price_sb = !1, 1 == $(".search-type_sb.active").data("value") ? r = 10 : 2 == $(".search-type_sb.active").data("value") ? r = 30 : e.find(".select_type_price_sb:checked").length > 0 && (r = parseInt(e.find(".select_type_price_sb:checked").data("max"))), t.from <= a && (t.from = ""), t.to >= r && (t.to = ""), n.prop("value", t.from), o.prop("value", t.to == r ? r : t.to);
                    var i = " tỷ";
                    30 == r && (i = " triệu"), 0 == n.val() && 0 == o.val() ? s.text("Mức giá") : 0 == n.val() && 0 !== o.val() ? s.text("0 - " + o.val() + i) : 0 !== n.val() && 0 == o.val() ? s.text(n.val() + i) : 0 !== n.val() && 0 !== o.val() ? s.text(n.val() + " - " + o.val() + i) : s.text("Mức giá")
                }
            }), t = i.data("ionRangeSlider"), e.find(".select_type_price_sb").on("change", function() {
                var e = $(".select_type_price_sb:checked").data("min"),
                    s = $(".select_type_price_sb:checked").data("max"),
                    a = $(".select_type_price_sb:checked").data("step");
                n.val(""), o.val(""), i.attr("data-min", e), i.attr("data-max", s), t.update({ min: e, max: s, from: e, to: s, step: a })
            }), $(".search-type_sb").on("click", function() {
                if (1 == $(this).data("value")) {
                    var e = $("#price_for_buy").data("min"),
                        s = $("#price_for_buy").data("max"),
                        a = $("#price_for_buy").data("step");
                    $("#price_for_buy").data("text");
                    n.val(""), o.val(""), i.attr("data-min", e), i.attr("data-max", s), t.update({ min: e, max: s, from: e, to: s, step: a })
                } else if (2 == $(this).data("value")) {
                    e = $("#price_for_rent").data("min"), s = $("#price_for_rent").data("max"), a = $("#price_for_rent").data("step"), $("#price_for_rent").data("text");
                    n.val(""), o.val(""), i.attr("data-min", e), i.attr("data-max", s), t.update({ min: e, max: s, from: e, to: s, step: a })
                }
            }), $("#select-price_sb li").on("click", function() {
                var e = $(this).data("min-price"),
                    i = $(this).data("max-price");
                if (select_price_sb = !0, 0 != i) {
                    var n = renderPriceValue(e),
                        o = renderPriceValue(i),
                        s = renderPriceNotUnit(e),
                        l = renderPriceNotUnit(i),
                        c = " tỷ";
                    c = i > 999999999 && (1 == listingTypeId || 99 == listingTypeId) ? " tỷ" : " triệu", 0 == s && 0 == l ? $("#title-price_sb").text("Mức giá") : 0 == s && 0 !== l ? $("#title-price_sb").text("0 - " + l + c) : 0 !== s && 0 == l ? $("#title-price_sb").text(s + c) : 0 !== s && 0 !== l ? 10 == s && 1e6 == l || 2 == listingTypeId && 1e10 == i ? $("#title-price_sb").text(s + c) : $("#title-price_sb").text(s + " - " + l + c) : $("#title-price_sb").text("Mức giá"), "10ty" == o || "1000000ty" == o ? priceSlug_sb = n : 0 != n.length && 0 != o.length ? priceSlug_sb = n + "-" + o : 0 == n.length && 0 != o.length ? priceSlug_sb = "0-" + o : 0 != n.length && 0 == o.length && (priceSlug_sb = n), priceSlug_sb && (priceSlug_sb = priceSlug_sb.replace("ty-", "-").replace("trieu-", "-").replace("ngan-", "-").trim())
                } else $("#title-price_sb").text("Mức giá"), priceSlug_sb = !1;
                $("#price-from_sb").val(s), 1e6 == l || 2 == listingTypeId && 1e10 == i ? $("#price-to_sb").val("Giá đến") : $("#price-to_sb").val(l), t.update({ min: a, max: r, from: a, to: r, step: d }), $("#price-from_sb").trigger("change"), $("#price-to_sb").trigger("change"), $(".show-price_sb").hide()
            }), n.on("change keyup", function() {
                select_price_sb = !1;
                var i = parseInt($(this).prop("value")),
                    s = parseInt(o.prop("value"));
                1 == $(".search-type_sb.active").data("value") ? r = 10 : 2 == $(".search-type_sb.active").data("value") ? r = 30 : e.find(".select_type_price_sb:checked").length > 0 && (r = parseInt(e.find(".select_type_price_sb:checked").data("max"))), isNaN(s) && (s = r), i < a ? (i = a, $(this).val(a)) : i > s && (i = s, $(this).val(s)), t.update({ from: i });
                var l = parseInt(n.prop("value"));
                isNaN(l) && (l = 0);
                var c = s;
                if (c > r && (c = r), 0 == c || isNaN(c)) $("#title-price_sb").text("Mức giá");
                else {
                    var d = " tỷ";
                    d = 10 != r || 1 != listingTypeId && 99 != listingTypeId ? " triệu" : " tỷ", 0 == l && 0 == c ? $("#title-price_sb").text("Mức giá") : 0 == l && 0 !== c ? $("#title-price_sb").text("0 - " + c + d) : 0 !== l && 0 == c ? $("#title-price_sb").text(l + d) : 0 !== l && 0 !== c ? 10 == l && 10 == c || 2 == listingTypeId && 30 == l && 30 == c ? $("#title-price_sb").text(l + d) : $("#title-price_sb").text(l + " - " + c + d) : $("#title-price_sb").text("Mức giá")
                }
            }), o.on("change keyup", function() {
                select_price_sb = !1;
                var i = parseInt($(this).prop("value")),
                    s = parseInt(n.prop("value")),
                    a = parseInt(o.prop("value"));
                1 == $(".search-type_sb.active").data("value") ? r = 10 : 2 == $(".search-type_sb.active").data("value") ? r = 30 : e.find(".select_type_price_sb:checked").length > 0 && (r = parseInt(e.find(".select_type_price_sb:checked").data("max"))), i < a ? (i = a, $(this).val(a)) : i > r ? (i = r, $(this).val(r)) : a < s && (i = s, $(this).val(i)), t.update({ to: i });
                var l = parseInt(n.prop("value"));
                isNaN(l) && (l = 0);
                var c = a;
                c > r && (c = r), l > c && (c = l);
                var d = " tỷ";
                d = 10 != r || 1 != listingTypeId && 99 != listingTypeId ? " triệu" : " tỷ", 0 == c || isNaN(c) ? 0 != l && isNaN(c) ? (10 == l && isNaN(c) || 2 == listingTypeId && 30 == l && isNaN(c)) && $("#title-price_sb").text(l + d) : $("#title-price_sb").text("Mức giá") : 0 == l && 0 == c ? $("#title-price_sb").text("Mức giá") : 0 == l && 0 !== c ? $("#title-price_sb").text("0 - " + c + d) : 0 !== l && 0 == c ? $("#title-price_sb").text(l + d) : 0 !== l && 0 !== c ? 10 == l && 10 == c || 2 == listingTypeId && 30 == l && 30 == c ? $("#title-price_sb").text(l + d) : $("#title-price_sb").text(l + " - " + c + d) : $("#title-price_sb").text("Mức giá")
            })
        })
    },
    search_bar_sb = function() {
        var t = this;

        function e() { t.dataSend = App.UI.objectifyForm($("#form-search-buy-sidebar")), t.isSearchPage = $("body").hasClass("search"), t.dataDefault = { select_district: "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24", select_ward: "1,2,3,4,5,6,7,8,9,10", property_type: 11, price_from: "", price_to: "", size_from: "", size_to: "", bed_value: "0", bath_value: "0", floor_value: "0" }, t.currentPropertyData = [], t.currentPropertyData.push(selectValuables[listingTypeId][0]), void 0 !== options && void 0 !== options.propertyList ? (t.currentPropertyData = [], $.each(selectValuables[listingTypeId], function(e, i) { options.propertyList.includes(i.propertyTypeId) && t.currentPropertyData.push(i) })) : (t.currentPropertyData = [], 1 == listingTypeId ? t.currentPropertyData.push(selectValuables[1][1]) : 2 == listingTypeId && t.currentPropertyData.push(selectValuables[2][1])) }

        function i(t, e, i) {
            $("#select-ward_sb").prop("disabled", !1);
            var n = $("#select-ward_sb"),
                o = $("#select-ward_sb").find(".optionGroup-" + t);
            $("#select-ward_sb").val();
            i ? ($(o).remove(), $("#select-ward_sb").multiselect("reload")) : App.Feature.Get("/api/get-wards-by-district/" + t, function(i) {
                if (0 != i.length) {
                    var o = [],
                        s = "";
                    $.each(i, function(t, e) { o.push(e.wardId), s += '<option value="' + e.wardId + '">' + e.wardName + "</option>" }), s = `<optgroup class="optionGroup-${t}" label="${e}" >` + s + "</optgroup>", $(n).append($(s))
                }
                $("#select-ward_sb").multiselect("reload")
            }, !0)
        }

        function n(t) {
            $("#select-street_sb").html(""), "" !== t ? ($("#select-street_sb").prop("disabled", !1), App.Feature.Get("/api/get-streets-by-ward/" + t, function(t) {
                if ($("#select-street_sb").html('<option value="-1">Chọn đường</option>').prop("disabled", !0), 0 != t.length) {
                    var e = [];
                    $("#select-street_sb").html("").prop("disabled", !1);
                    var i = "";
                    $.each(t, function(t, n) { e.push(n.streetId), i += '<option value="' + n.streetId + '">' + n.streetName + "</option>" }), i = '<option value="' + e.join(",") + '">Tất cả</option>' + i, $("#select-street_sb").html(i)
                }
            })) : $("#select-street_sb").attr("disabled", "disabled")
        }

        function o() {
            if ("99" != listingTypeId) {
                var t = $("#select-property_sb").val();
                (!t || t.length > 1) && (currentLogicFilter_sb = logicDisplayAdvancedFilter_sb[100])
            }
            currentLogicFilter_sb[0] ? $(".select-floor-container_sb").show() : ($(".select-floor-container_sb").hide(), $(".select-floor-container_sb #floor-value_sb").val("0").trigger("change")), currentLogicFilter_sb[1] ? $(".select-direction-container_sb").show() : $(".select-direction-container_sb").hide(), currentLogicFilter_sb[2] ? $(".select-bed-container_sb").show() : ($(".select-bed-container_sb").hide(), $(".select-bed-container_sb #bed-value_sb").val("0").trigger("change")), currentLogicFilter_sb[3] ? $(".select-bath-container_sb").show() : ($(".select-bath-container_sb").hide(), $(".select-bath-container_sb #bath-value_sb").val("0").trigger("change")), currentLogicFilter_sb && currentLogicFilter_sb[4] ? $(".col-position-search_sb").show() : ($(".col-position-search_sb").hide(), $(".col-position-search_sb .is_front_alley_sb").prop("checked", !1).trigger("change")), currentLogicFilter_sb && currentLogicFilter_sb[5] ? $(".col-position-search_sb").show() : ($(".col-position-search_sb").hide(), $(".col-position-search_sb .is_front_alley_sb").prop("checked", !1).trigger("change")), currentLogicFilter_sb && currentLogicFilter_sb[6] ? $(".col-rented-ccch_sb").show() : $(".col-rented-ccch_sb").hide(), currentLogicFilter_sb && currentLogicFilter_sb[7] ? $(".col-listing-type_sb").show() : $(".col-listing-type_sb").hide(), currentLogicFilter_sb && currentLogicFilter_sb[8] ? $(".col-ward_sb").show() : $(".col-ward_sb").hide(), currentLogicFilter_sb && currentLogicFilter_sb[9] ? $(".col-year-build_sb").show() : $(".col-year-build_sb").hide(), currentLogicFilter_sb && currentLogicFilter_sb[10] ? $(".col-type-price_sb").show() : $(".col-type-price_sb").hide(), currentLogicFilter_sb && currentLogicFilter_sb[11] ? $(".advantage-container_sb").show() : $(".advantage-container_sb").hide(), currentLogicFilter_sb && currentLogicFilter_sb[12] ? $(".col-size_sb").show() : $(".col-size_sb").hide(), currentLogicFilter_sb && currentLogicFilter_sb[14] ? $(".col-street_sb").show() : $(".col-street_sb").hide()
        }
        e(), $(document).ready(function() {
            App.UI.inputAllowNumber(["#price-from_sb", "#price-to_sb"], !1), $(".property_type_sb").change(function(e) {
                var i, n;
                i = $(this), n = selectValuables[listingTypeId], currentPropertyData = [], $(n).each(function(t, e) { i.val() && i.val().length && i.val().includes(e.propertyTypeId.toString()) && currentPropertyData.push(e) }), currentPropertyData, t.currentPropertyData.length > 0 && (currentLogicFilter_sb = logicDisplayAdvancedFilter_sb[t.currentPropertyData[0].propertyTypeId], propertyTypeIdSearchKeyword = t.currentPropertyData[0].propertyTypeId), o()
            }), $("#select-district_sb").multiselect({
                columns: 1,
                search: !0,
                selectAll: !0,
                minHeight: 100,
                maxHeight: 200,
                texts: { placeholder: "Chọn quận", search: "", selectedOptions: " selected", selectAll: "Tất cả", unselectAll: "unselectAll", noneSelected: "None Selected" },
                onOptionClick: function(t, e) {
                    var o = $("#select-district_sb"),
                        s = $("#select-ward_sb"),
                        a = $(s).next().find("li.selected input").val(),
                        r = $(e),
                        l = r.val(),
                        c = r.attr("title"),
                        d = $(o).next().find("li:not(.optgroup)").length,
                        h = $(o).next().find("li.selected:not(.optgroup)").length;
                    if (d == h && $(o).next().find(".ms-selectall input").prop("checked", !0), h >= 2 && $("#select-street_sb").prop("disabled", !0), r.prop("checked") || 1 == $(s).next().find("li.selected").length && 1 == $(o).next().find("li.selected").length && n(a), r.prop("checked")) d == h && $(o).next().find(".ms-selectall input").prop("checked", !0), i(l, c, !1);
                    else {
                        if ($(o).next().find(".ms-selectall input").prop("checked", !1), 0 == h) return $("#select-street_sb").html('<option value="-1">Chọn đường</option>').prop("disabled", !0), $("#select-ward_sb").html("").prop("disabled", !0), void $("#select-ward_sb").multiselect("reload");
                        1 == h && $("#select-street_sb").prop("disabled", !1), i(l, c, !0)
                    }
                },
                onSelectAll: function(t, e) { $("#select-street_sb").html('<option value="-1">Chọn đường</option>').prop("disabled", !0), $("#select-ward_sb").html("").prop("disabled", !0), $("#select-ward_sb").multiselect("reload") }
            }), $("#select-ward_sb").multiselect({
                columns: 1,
                search: !0,
                minHeight: 100,
                maxHeight: 160,
                texts: { placeholder: "Chọn phường", search: "", selectedOptions: " selected", selectAll: "Tất cả", unselectAll: "unselectAll", noneSelected: "None Selected" },
                selectGroup: !0,
                onOptionClick: function(t, e) {
                    var i = $(e),
                        o = $("#select-ward_sb"),
                        s = $("#select-district_sb"),
                        a = $(o).next().find("li.selected input").val(),
                        r = $(o).next().find("li:not(.optgroup)").length,
                        l = $(o).next().find("li.selected:not(.optgroup)").length;
                    r == l && $(o).next().find(".ms-selectall input").prop("checked", !0), i.prop("checked") || $(o).next().find(".ms-selectall input").prop("checked", !1), i.prop("checked") || 1 == $(o).next().find("li.selected").length && 1 == $(s).next().find("li.selected").length && n(a), 1 == $(o).next().find("li.selected").length && 1 == $(s).next().find("li.selected").length ? n(a) : $("#select-street_sb").html('<option value="-1">Chọn đường</option>').prop("disabled", !0)
                },
                onSelectAll: function(t, e) { $("#select-street_sb").html('<option value="-1">Chọn đường</option>').prop("disabled", !0) }
            }), $("#apply-search_sb").click(function(t) { App.UI.showLoadding(), renderSlug_sb(1) }), $(".search-type_sb").click(function() { $(".search-type_sb").removeClass("active"), $(this).addClass("active"), $("#title-price_sb").text("Mức giá"), 1 == $(this).data("value") ? (listingTypeId = 1, propertyTypeIdSearchKeyword = 11, slugListingType = "/mua/", $(".status-rented-saled").text("Đã bán"), currentLogicFilter_sb = logicDisplayAdvancedFilter_sb[11], $("#select-property_sb").html($("#select-property-buy").html()), $("#select-price_sb").html($("#select-price-buy").html()), e(), $("#select-property_sb").val(["11"]), $("#select-property_sb").multiselect("reload"), $("#select-property_sb").hide(), o()) : 2 == $(this).data("value") ? (listingTypeId = 2, propertyTypeIdSearchKeyword = 1, slugListingType = "/thue/", $(".status-rented-saled").text("Đã thuê"), currentLogicFilter_sb = logicDisplayAdvancedFilter_sb[1], $("#select-property_sb").html($("#select-property-rent").html()), $("#select-price_sb").html($("#select-price-rent").html()), e(), $("#select-property_sb").val(["1"]), $("#select-property_sb").multiselect("reload"), $("#select-property_sb").hide(), o()) : 99 == $(this).data("value") && (listingTypeId = 99, propertyTypeIdSearchKeyword = 99, slugListingType = "/du-an/", currentLogicFilter_sb = logicDisplayAdvancedFilter_sb[99], $("#select-price_sb").html($("#select-price-buy").html()), $("#project-price-buy_sb").trigger("click"), $("#project-price-buy_sb").trigger("change"), e(), o(), $("#select-property_sb").next().hide()), render_slider_price_sb($(".group-range-price_sb")) }), $(".select_type_price_sb").change(function() { $("#title-price_sb").text("Mức giá"), 1 == $(this).val() ? $("#select-price_sb").html($("#select-price-buy").html()) : $("#select-price_sb").html($("#select-price-rent").html()), render_slider_price_sb($(".group-range-price_sb")) })
        }), o()
    };

function renderSlug_sb(t) {
    var e = "";
    1 == listingTypeId ? e += "/mua" : 2 == listingTypeId ? e += "/thue" : e += "/du-an/hcm";
    var i = $("#select-district_sb").val(),
        n = $("#select-district_sb option:selected").toArray().map(t => t.text),
        o = $("#select-ward_sb").val(),
        s = $("#select-ward_sb option:selected").toArray().map(t => t.text),
        a = $("#select-street_sb").val(),
        r = $("#select-street_sb option:selected").text();
    99 != listingTypeId && (!currentPropertyData.length || currentPropertyData.length > 1 ? e += "/bat-dong-san/hcm" : e += "/" + logicRenderPropertySlug[listingTypeId][currentPropertyData[0].propertyTypeId] + "/hcm"), i && 1 === i.length && (e += "/" + App.Feature.strToUrl(n[0]), 99 != listingTypeId && o && 1 === o.length && (e += "-" + App.Feature.strToUrl(s[0]), a && 1 === a.split(",").length && (e += "-" + App.Feature.strToUrl(r)))), renderParamsNew_sb();
    var l = e + decodeURIComponent($.query.toString());
    return 1 == t && (location.href = l), l
}

function renderParamsNew_sb() {
    var t = $("#select-district_sb").val(),
        e = $("#select-ward_sb").val();
    99 != listingTypeId && currentPropertyData.length > 1 ? $.query = $.query.set("loai", currentPropertyData.map(t => t.propertyTypeId).join(",")) : $.query = $.query.remove("loai"), t && (t.length > 1 && t.length < $("#select-district_sb option").length ? $.query = $.query.set("quan", t.join(",")) : $.query = $.query.remove("quan"), 99 != listingTypeId && e && e.length && e.length < $("#select-ward_sb option").length && (t.length > 1 || e.length > 1) ? $.query = $.query.set("phuong", e.join(",")) : $.query = $.query.remove("phuong"));
    var i = App.UI.objectifyForm($("#form-search-buy-sidebar"));
    if (!select_price_sb) {
        if (1 == listingTypeId) { if ("" != $("#price-from_sb").val()) var n = 1e9 * parseInt($("#price-from_sb").val()); if ("" != $("#price-to_sb").val()) var o = 1e9 * parseInt($("#price-to_sb").val()) } else if (2 == listingTypeId) { if ("" != $("#price-from_sb").val()) n = 1e6 * parseInt($("#price-from_sb").val()); if ("" != $("#price-to_sb").val()) o = 1e6 * parseInt($("#price-to_sb").val()) } else if (1 == i.selectprice_sb) { if ("" != $("#price-from_sb").val()) n = 1e9 * parseInt($("#price-from_sb").val()); if ("" != $("#price-to_sb").val()) o = 1e9 * parseInt($("#price-to_sb").val()) } else if (2 == i.selectprice_sb) { if ("" != $("#price-from_sb").val()) n = 1e6 * parseInt($("#price-from_sb").val()); if ("" != $("#price-to_sb").val()) o = 1e6 * parseInt($("#price-to_sb").val()) }
        n && (n = renderPriceValue(n)), o && (o = renderPriceValue(o)), (n || o) && (n && o ? priceSlug_sb = n + "-" + o : o ? priceSlug_sb = "0-" + o : n && (priceSlug_sb = n))
    }
    if (priceSlug_sb && (priceSlug_sb = priceSlug_sb.replace("ty-", "-").replace("trieu-", "-").replace("ngan-", "-").trim()), $.query = priceSlug_sb ? $.query.set("gia", priceSlug_sb) : $.query.remove("gia"), currentLogicFilter_sb[12] && 0 != $("#select-size_sb option:selected").data("max-size")) {
        var s = !1,
            a = $("#select-size_sb option:selected").data("min-size"),
            r = $("#select-size_sb option:selected").data("max-size");
        0 != a.length && 0 != r.length ? s = a + "-" + r : 0 == a.length && 0 != r.length ? s = "0-" + r : 0 != a.length && 0 == r.length && (s = a), $.query = s ? $.query.set("dientich", s) : $.query.remove("dientich")
    } else $.query = $.query.remove("dientich");
    currentLogicFilter_sb[0] ? $.query = parseInt(i.floor_value_sb) > -1 && 0 != i.floor_value_sb ? $.query.set("tang", i.floor_value_sb) : $.query.remove("tang") : $.query = $.query.remove("tang"), currentLogicFilter_sb[1] ? $.query = void 0 !== i.direction_sb && 0 != i.direction_sb.length && "" != i.direction_sb[0] ? $.query.set("huong", i.direction_sb.join(",")) : $.query.remove("huong") : $.query = $.query.remove("huong"), currentLogicFilter_sb[2] ? $.query = parseInt(i.bed_value_sb) > -1 && 0 != i.bed_value_sb ? $.query.set("phongngu", i.bed_value_sb) : $.query.remove("phongngu") : $.query = $.query.remove("phongngu"), currentLogicFilter_sb[3] ? $.query = parseInt(i.bath_value_sb) > -1 && 0 != i.bath_value_sb ? $.query.set("phongtam", i.bath_value_sb) : $.query.remove("phongtam") : $.query = $.query.remove("phongtam"), currentLogicFilter_sb[6] && void 0 !== i.status_listing_sb ? $.query = void 0 !== i.status_listing_sb && 0 != i.status_listing_sb.length ? $.query.set("statusListing", i.status_listing_sb.join(",")) : $.query.remove("statusListing") : $.query = $.query.remove("statusListing"), void 0 !== i.monopoly_listing_sb ? $.query = $.query.set("isGuaranteed", 1) : $.query = $.query.remove("isGuaranteed"), currentLogicFilter_sb[4] && void 0 !== i.is_front_alley_sb && "0" === i.is_front_alley_sb ? $.query = $.query.set("isRoadFront", 1) : $.query = $.query.remove("isRoadFront"), currentLogicFilter_sb[5] && void 0 !== i.is_front_alley_sb && "1" === i.is_front_alley_sb ? $.query = $.query.set("isAlley", 1) : $.query = $.query.remove("isAlley"), currentLogicFilter_sb[5] && 1 == i.is_front_alley_sb && void 0 !== i.alley_sb && "" != i.alley_sb ? $.query = $.query.set("alley", i.alley_sb) : $.query = $.query.remove("alley"), "" != $("#search_text").val() ? $.query = $.query.set("keyword", $("#search_text").val()) : $.query = $.query.remove("keyword"), currentLogicFilter_sb[9] ? (void 0 !== i.select_year_sb ? $.query = $.query.set("year", i.select_year_sb) : $.query = $.query.remove("year"), $("#select-type-price").val() && priceSlug_sb ? $.query = $.query.set("loaigia", $("#select-type-price").val()) : $.query = $.query.remove("loaigia")) : ($.query = $.query.remove("year"), $.query = $.query.remove("loaigia"))
}
$(document).ready(function() {
        $("#select-property_sb").multiselect({ columns: 1, search: !0, texts: { placeholder: "Chọn loại BĐS", search: "", selectedOptions: " loại", selectAll: "Tất cả", unselectAll: "Bỏ chọn tất cả", noneSelected: "Không chọn cái nào" }, showCheckbox: !0, selectAll: !0 }), "2" == listingTypeId && ($(".type-listing_sb .search-rent").trigger("change"), options.maxPrice > 0 && options.maxPrice < 1e8 && (0 != options.minPrice && $("#price-from_sb").val(renderPriceNotUnit(options.minPrice)), $("#price-to_sb").val(renderPriceNotUnit(options.maxPrice)), $("#range-slide-price_sb").attr("data-from", renderPriceNotUnit(options.minPrice)), $("#range-slide-price_sb").attr("data-to", renderPriceNotUnit(options.maxPrice))), $("#range-slide-price_sb").attr("data-min", 0), $("#range-slide-price_sb").attr("data-max", 30)), render_slider_price_sb($(".group-range-price_sb")), search_bar_sb();
        var t = $("#select-property_sb").val();
        if (t) {
            if (t.length === $("#select-property_sb option").length) {
                $("#select-property_sb option").removeAttr("selected"), $("#select-property_sb").multiselect("reload"), $("#select-property_sb").next().children().first().children().first().html("Tất cả"), $.query = $.query.remove("loai");
                var e = location.href.split("?")[0] + decodeURIComponent($.query.toString());
                history.replaceState({ path: e }, "", e)
            }
        } else $("#select-property_sb").next().children().first().children().first().html("Tất cả");
        $("#wrapper").on("click", function(t) { "title-price_sb" != t.target.id && "irs-line" != t.target.className && "irs irs--flat js-irs-0" != t.target.className && "irs-handle from type_last" != t.target.className && "irs-handle to type_last" != t.target.className && "tab-content show-price" != t.target.className && "irs" != t.target.className && "price-from_sb" != t.target.id && "price-to_sb" != t.target.id && $(".show-price_sb").hide() })
    }),
    function(t, e, i, n) {
        "use strict";

        function o(t, e) {
            var n, o, s, a = [],
                r = 0;
            t && t.isDefaultPrevented() || (t.preventDefault(), e = e || {}, t && t.data && (e = p(t.data.options, e)), n = e.$target || i(t.currentTarget).trigger("blur"), (s = i.fancybox.getInstance()) && s.$trigger && s.$trigger.is(n) || (e.selector ? a = i(e.selector) : (o = n.attr("data-fancybox") || "") ? a = (a = t.data ? t.data.items : []).length ? a.filter('[data-fancybox="' + o + '"]') : i('[data-fancybox="' + o + '"]') : a = [n], (r = i(a).index(n)) < 0 && (r = 0), (s = i.fancybox.open(a, e, r)).$trigger = n))
        }
        if (t.console = t.console || { info: function(t) {} }, i) {
            if (i.fn.fancybox) return void console.info("fancyBox already initialized");
            var s = { closeExisting: !1, loop: !1, gutter: 50, keyboard: !0, preventCaptionOverlap: !0, arrows: !0, infobar: !0, smallBtn: "auto", toolbar: "auto", buttons: ["zoom", "slideShow", "thumbs", "close"], idleTime: 3, protect: !1, modal: !1, image: { preload: !1 }, ajax: { settings: { data: { fancybox: !0 } } }, iframe: { tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen allow="autoplay; fullscreen" src=""></iframe>', preload: !0, css: {}, attr: { scrolling: "auto" } }, video: { tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>', format: "", autoStart: !0 }, defaultType: "image", animationEffect: "zoom", animationDuration: 366, zoomOpacity: "auto", transitionEffect: "fade", transitionDuration: 366, slideClass: "", baseClass: "", baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"></div></div></div>', spinnerTpl: '<div class="fancybox-loading"></div>', errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>', btnTpl: { download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>', zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>', close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>', arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>', arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>', smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>' }, parentEl: "body", hideScrollbar: !0, autoFocus: !0, backFocus: !0, trapFocus: !0, fullScreen: { autoStart: !1 }, touch: { vertical: !0, momentum: !0 }, hash: null, media: {}, slideShow: { autoStart: !1, speed: 3e3 }, thumbs: { autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y" }, wheel: "auto", onInit: i.noop, beforeLoad: i.noop, afterLoad: i.noop, beforeShow: i.noop, afterShow: i.noop, beforeClose: i.noop, afterClose: i.noop, onActivate: i.noop, onDeactivate: i.noop, clickContent: function(t, e) { return "image" === t.type && "zoom" }, clickSlide: "close", clickOutside: "close", dblclickContent: !1, dblclickSlide: !1, dblclickOutside: !1, mobile: { preventCaptionOverlap: !1, idleTime: !1, clickContent: function(t, e) { return "image" === t.type && "toggleControls" }, clickSlide: function(t, e) { return "image" === t.type ? "toggleControls" : "close" }, dblclickContent: function(t, e) { return "image" === t.type && "zoom" }, dblclickSlide: function(t, e) { return "image" === t.type && "zoom" } }, lang: "en", i18n: { en: { CLOSE: "Close", NEXT: "Next", PREV: "Previous", ERROR: "The requested content cannot be loaded. <br/> Please try again later.", PLAY_START: "Start slideshow", PLAY_STOP: "Pause slideshow", FULL_SCREEN: "Full screen", THUMBS: "Thumbnails", DOWNLOAD: "Download", SHARE: "Share", ZOOM: "Zoom" }, de: { CLOSE: "Schliessen", NEXT: "Weiter", PREV: "Zurück", ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.", PLAY_START: "Diaschau starten", PLAY_STOP: "Diaschau beenden", FULL_SCREEN: "Vollbild", THUMBS: "Vorschaubilder", DOWNLOAD: "Herunterladen", SHARE: "Teilen", ZOOM: "Maßstab" } } },
                a = i(t),
                r = i(e),
                l = 0,
                c = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) { return t.setTimeout(e, 1e3 / 60) },
                d = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function(e) { t.clearTimeout(e) },
                h = function() {
                    var t, i = e.createElement("fakeelement"),
                        o = { transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" };
                    for (t in o)
                        if (i.style[t] !== n) return o[t];
                    return "transitionend"
                }(),
                u = function(t) { return t && t.length && t[0].offsetHeight },
                p = function(t, e) { var n = i.extend(!0, {}, t, e); return i.each(e, function(t, e) { i.isArray(e) && (n[t] = e) }), n },
                f = function(t) { var n, o; return !(!t || t.ownerDocument !== e) && (i(".fancybox-container").css("pointer-events", "none"), n = { x: t.getBoundingClientRect().left + t.offsetWidth / 2, y: t.getBoundingClientRect().top + t.offsetHeight / 2 }, o = e.elementFromPoint(n.x, n.y) === t, i(".fancybox-container").css("pointer-events", ""), o) },
                m = function(t, e, n) {
                    var o = this;
                    o.opts = p({ index: n }, i.fancybox.defaults), i.isPlainObject(e) && (o.opts = p(o.opts, e)), i.fancybox.isMobile && (o.opts = p(o.opts, o.opts.mobile)), o.id = o.opts.id || ++l, o.currIndex = parseInt(o.opts.index, 10) || 0, o.prevIndex = null, o.prevPos = null, o.currPos = 0, o.firstRun = !0, o.group = [], o.slides = {}, o.addContent(t), o.group.length && o.init()
                };
            i.extend(m.prototype, {
                    init: function() {
                        var n, o, s = this,
                            a = s.group[s.currIndex].opts;
                        a.closeExisting && i.fancybox.close(!0), i("body").addClass("fancybox-active"), !i.fancybox.getInstance() && !1 !== a.hideScrollbar && !i.fancybox.isMobile && e.body.scrollHeight > t.innerHeight && (i("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (t.innerWidth - e.documentElement.clientWidth) + "px;}</style>"), i("body").addClass("compensate-for-scrollbar")), o = "", i.each(a.buttons, function(t, e) { o += a.btnTpl[e] || "" }), n = i(s.translate(s, a.baseTpl.replace("{{buttons}}", o).replace("{{arrows}}", a.btnTpl.arrowLeft + a.btnTpl.arrowRight))).attr("id", "fancybox-container-" + s.id).addClass(a.baseClass).data("FancyBox", s).appendTo(a.parentEl), s.$refs = { container: n }, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function(t) { s.$refs[t] = n.find(".fancybox-" + t) }), s.trigger("onInit"), s.activate(), s.jumpTo(s.currIndex)
                    },
                    translate: function(t, e) { var i = t.opts.i18n[t.opts.lang] || t.opts.i18n.en; return e.replace(/\{\{(\w+)\}\}/g, function(t, e) { var o = i[e]; return o === n ? t : o }) },
                    addContent: function(t) {
                        var e, o = this,
                            s = i.makeArray(t);
                        i.each(s, function(t, e) {
                            var s, a, r, l, c, d = {},
                                h = {};
                            i.isPlainObject(e) ? (d = e, h = e.opts || e) : "object" === i.type(e) && i(e).length ? (h = (s = i(e)).data() || {}, (h = i.extend(!0, {}, h, h.options)).$orig = s, d.src = o.opts.src || h.src || s.attr("href"), d.type || d.src || (d.type = "inline", d.src = e)) : d = { type: "html", src: e + "" }, d.opts = i.extend(!0, {}, o.opts, h), i.isArray(h.buttons) && (d.opts.buttons = h.buttons), i.fancybox.isMobile && d.opts.mobile && (d.opts = p(d.opts, d.opts.mobile)), a = d.type || d.opts.type, l = d.src || "", !a && l && ((r = l.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (a = "video", d.opts.video.format || (d.opts.video.format = "video/" + ("ogv" === r[1] ? "ogg" : r[1]))) : l.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? a = "image" : l.match(/\.(pdf)((\?|#).*)?$/i) ? (a = "iframe", d = i.extend(!0, d, { contentType: "pdf", opts: { iframe: { preload: !1 } } })) : "#" === l.charAt(0) && (a = "inline")), a ? d.type = a : o.trigger("objectNeedsType", d), d.contentType || (d.contentType = i.inArray(d.type, ["html", "inline", "ajax"]) > -1 ? "html" : d.type), d.index = o.group.length, "auto" == d.opts.smallBtn && (d.opts.smallBtn = i.inArray(d.type, ["html", "inline", "ajax"]) > -1), "auto" === d.opts.toolbar && (d.opts.toolbar = !d.opts.smallBtn), d.$thumb = d.opts.$thumb || null, d.opts.$trigger && d.index === o.opts.index && (d.$thumb = d.opts.$trigger.find("img:first"), d.$thumb.length && (d.opts.$orig = d.opts.$trigger)), d.$thumb && d.$thumb.length || !d.opts.$orig || (d.$thumb = d.opts.$orig.find("img:first")), d.$thumb && !d.$thumb.length && (d.$thumb = null), d.thumb = d.opts.thumb || (d.$thumb ? d.$thumb[0].src : null), "function" === i.type(d.opts.caption) && (d.opts.caption = d.opts.caption.apply(e, [o, d])), "function" === i.type(o.opts.caption) && (d.opts.caption = o.opts.caption.apply(e, [o, d])), d.opts.caption instanceof i || (d.opts.caption = d.opts.caption === n ? "" : d.opts.caption + ""), "ajax" === d.type && ((c = l.split(/\s+/, 2)).length > 1 && (d.src = c.shift(), d.opts.filter = c.shift())), d.opts.modal && (d.opts = i.extend(!0, d.opts, { trapFocus: !0, infobar: 0, toolbar: 0, smallBtn: 0, keyboard: 0, slideShow: 0, fullScreen: 0, thumbs: 0, touch: 0, clickContent: !1, clickSlide: !1, clickOutside: !1, dblclickContent: !1, dblclickSlide: !1, dblclickOutside: !1 })), o.group.push(d)
                        }), Object.keys(o.slides).length && (o.updateControls(), (e = o.Thumbs) && e.isActive && (e.create(), e.focus()))
                    },
                    addEvents: function() {
                        var e = this;
                        e.removeEvents(), e.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(t) { t.stopPropagation(), t.preventDefault(), e.close(t) }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function(t) { t.stopPropagation(), t.preventDefault(), e.previous() }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function(t) { t.stopPropagation(), t.preventDefault(), e.next() }).on("click.fb", "[data-fancybox-zoom]", function(t) { e[e.isScaledDown() ? "scaleToActual" : "scaleToFit"]() }), a.on("orientationchange.fb resize.fb", function(t) { t && t.originalEvent && "resize" === t.originalEvent.type ? (e.requestId && d(e.requestId), e.requestId = c(function() { e.update(t) })) : (e.current && "iframe" === e.current.type && e.$refs.stage.hide(), setTimeout(function() { e.$refs.stage.show(), e.update(t) }, i.fancybox.isMobile ? 600 : 250)) }), r.on("keydown.fb", function(t) {
                            var n = (i.fancybox ? i.fancybox.getInstance() : null).current,
                                o = t.keyCode || t.which;
                            if (9 != o) return !n.opts.keyboard || t.ctrlKey || t.altKey || t.shiftKey || i(t.target).is("input") || i(t.target).is("textarea") ? void 0 : 8 === o || 27 === o ? (t.preventDefault(), void e.close(t)) : 37 === o || 38 === o ? (t.preventDefault(), void e.previous()) : 39 === o || 40 === o ? (t.preventDefault(), void e.next()) : void e.trigger("afterKeydown", t, o);
                            n.opts.trapFocus && e.focus(t)
                        }), e.group[e.currIndex].opts.idleTime && (e.idleSecondsCounter = 0, r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function(t) { e.idleSecondsCounter = 0, e.isIdle && e.showControls(), e.isIdle = !1 }), e.idleInterval = t.setInterval(function() { e.idleSecondsCounter++, e.idleSecondsCounter >= e.group[e.currIndex].opts.idleTime && !e.isDragging && (e.isIdle = !0, e.idleSecondsCounter = 0, e.hideControls()) }, 1e3))
                    },
                    removeEvents: function() {
                        var e = this;
                        a.off("orientationchange.fb resize.fb"), r.off("keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), e.idleInterval && (t.clearInterval(e.idleInterval), e.idleInterval = null)
                    },
                    previous: function(t) { return this.jumpTo(this.currPos - 1, t) },
                    next: function(t) { return this.jumpTo(this.currPos + 1, t) },
                    jumpTo: function(t, e) {
                        var o, s, a, r, l, c, d, h, p, f = this,
                            m = f.group.length;
                        if (!(f.isDragging || f.isClosing || f.isAnimating && f.firstRun)) {
                            if (t = parseInt(t, 10), !(a = f.current ? f.current.opts.loop : f.opts.loop) && (t < 0 || t >= m)) return !1;
                            if (o = f.firstRun = !Object.keys(f.slides).length, l = f.current, f.prevIndex = f.currIndex, f.prevPos = f.currPos, r = f.createSlide(t), m > 1 && ((a || r.index < m - 1) && f.createSlide(t + 1), (a || r.index > 0) && f.createSlide(t - 1)), f.current = r, f.currIndex = r.index, f.currPos = r.pos, f.trigger("beforeShow", o), f.updateControls(), r.forcedDuration = n, i.isNumeric(e) ? r.forcedDuration = e : e = r.opts[o ? "animationDuration" : "transitionDuration"], e = parseInt(e, 10), s = f.isMoved(r), r.$slide.addClass("fancybox-slide--current"), o) return r.opts.animationEffect && e && f.$refs.container.css("transition-duration", e + "ms"), f.$refs.container.addClass("fancybox-is-open").trigger("focus"), f.loadSlide(r), void f.preload("image");
                            c = i.fancybox.getTranslate(l.$slide), d = i.fancybox.getTranslate(f.$refs.stage), i.each(f.slides, function(t, e) { i.fancybox.stop(e.$slide, !0) }), l.pos !== r.pos && (l.isComplete = !1), l.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"), s ? (p = c.left - (l.pos * c.width + l.pos * l.opts.gutter), i.each(f.slides, function(t, n) {
                                n.$slide.removeClass("fancybox-animated").removeClass(function(t, e) { return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ") });
                                var o = n.pos * c.width + n.pos * n.opts.gutter;
                                i.fancybox.setTranslate(n.$slide, { top: 0, left: o - d.left + p }), n.pos !== r.pos && n.$slide.addClass("fancybox-slide--" + (n.pos > r.pos ? "next" : "previous")), u(n.$slide), i.fancybox.animate(n.$slide, { top: 0, left: (n.pos - r.pos) * c.width + (n.pos - r.pos) * n.opts.gutter }, e, function() { n.$slide.css({ transform: "", opacity: "" }).removeClass("fancybox-slide--next fancybox-slide--previous"), n.pos === f.currPos && f.complete() })
                            })) : e && r.opts.transitionEffect && (h = "fancybox-animated fancybox-fx-" + r.opts.transitionEffect, l.$slide.addClass("fancybox-slide--" + (l.pos > r.pos ? "next" : "previous")), i.fancybox.animate(l.$slide, h, e, function() { l.$slide.removeClass(h).removeClass("fancybox-slide--next fancybox-slide--previous") }, !1)), r.isLoaded ? f.revealContent(r) : f.loadSlide(r), f.preload("image")
                        }
                    },
                    createSlide: function(t) { var e, n, o = this; return n = (n = t % o.group.length) < 0 ? o.group.length + n : n, !o.slides[t] && o.group[n] && (e = i('<div class="fancybox-slide"></div>').appendTo(o.$refs.stage), o.slides[t] = i.extend(!0, {}, o.group[n], { pos: t, $slide: e, isLoaded: !1 }), o.updateSlide(o.slides[t])), o.slides[t] },
                    scaleToActual: function(t, e, o) {
                        var s, a, r, l, c, d = this,
                            h = d.current,
                            u = h.$content,
                            p = i.fancybox.getTranslate(h.$slide).width,
                            f = i.fancybox.getTranslate(h.$slide).height,
                            m = h.width,
                            g = h.height;
                        d.isAnimating || d.isMoved() || !u || "image" != h.type || !h.isLoaded || h.hasError || (d.isAnimating = !0, i.fancybox.stop(u), t = t === n ? .5 * p : t, e = e === n ? .5 * f : e, (s = i.fancybox.getTranslate(u)).top -= i.fancybox.getTranslate(h.$slide).top, s.left -= i.fancybox.getTranslate(h.$slide).left, l = m / s.width, c = g / s.height, a = .5 * p - .5 * m, r = .5 * f - .5 * g, m > p && ((a = s.left * l - (t * l - t)) > 0 && (a = 0), a < p - m && (a = p - m)), g > f && ((r = s.top * c - (e * c - e)) > 0 && (r = 0), r < f - g && (r = f - g)), d.updateCursor(m, g), i.fancybox.animate(u, { top: r, left: a, scaleX: l, scaleY: c }, o || 330, function() { d.isAnimating = !1 }), d.SlideShow && d.SlideShow.isActive && d.SlideShow.stop())
                    },
                    scaleToFit: function(t) {
                        var e, n = this,
                            o = n.current,
                            s = o.$content;
                        n.isAnimating || n.isMoved() || !s || "image" != o.type || !o.isLoaded || o.hasError || (n.isAnimating = !0, i.fancybox.stop(s), e = n.getFitPos(o), n.updateCursor(e.width, e.height), i.fancybox.animate(s, { top: e.top, left: e.left, scaleX: e.width / s.width(), scaleY: e.height / s.height() }, t || 330, function() { n.isAnimating = !1 }))
                    },
                    getFitPos: function(t) {
                        var e, n, o, s, a = t.$content,
                            r = t.$slide,
                            l = t.width || t.opts.width,
                            c = t.height || t.opts.height,
                            d = {};
                        return !!(t.isLoaded && a && a.length) && (e = i.fancybox.getTranslate(this.$refs.stage).width, n = i.fancybox.getTranslate(this.$refs.stage).height, e -= parseFloat(r.css("paddingLeft")) + parseFloat(r.css("paddingRight")) + parseFloat(a.css("marginLeft")) + parseFloat(a.css("marginRight")), n -= parseFloat(r.css("paddingTop")) + parseFloat(r.css("paddingBottom")) + parseFloat(a.css("marginTop")) + parseFloat(a.css("marginBottom")), l && c || (l = e, c = n), (l *= o = Math.min(1, e / l, n / c)) > e - .5 && (l = e), (c *= o) > n - .5 && (c = n), "image" === t.type ? (d.top = Math.floor(.5 * (n - c)) + parseFloat(r.css("paddingTop")), d.left = Math.floor(.5 * (e - l)) + parseFloat(r.css("paddingLeft"))) : "video" === t.contentType && (c > l / (s = t.opts.width && t.opts.height ? l / c : t.opts.ratio || 16 / 9) ? c = l / s : l > c * s && (l = c * s)), d.width = l, d.height = c, d)
                    },
                    update: function(t) {
                        var e = this;
                        i.each(e.slides, function(i, n) { e.updateSlide(n, t) })
                    },
                    updateSlide: function(t, e) {
                        var n = this,
                            o = t && t.$content,
                            s = t.width || t.opts.width,
                            a = t.height || t.opts.height,
                            r = t.$slide;
                        n.adjustCaption(t), o && (s || a || "video" === t.contentType) && !t.hasError && (i.fancybox.stop(o), i.fancybox.setTranslate(o, n.getFitPos(t)), t.pos === n.currPos && (n.isAnimating = !1, n.updateCursor())), n.adjustLayout(t), r.length && (r.trigger("refresh"), t.pos === n.currPos && n.$refs.toolbar.add(n.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", r.get(0).scrollHeight > r.get(0).clientHeight)), n.trigger("onUpdate", t, e)
                    },
                    centerSlide: function(t) {
                        var e = this,
                            o = e.current,
                            s = o.$slide;
                        !e.isClosing && o && (s.siblings().css({ transform: "", opacity: "" }), s.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"), i.fancybox.animate(s, { top: 0, left: 0, opacity: 1 }, t === n ? 0 : t, function() { s.css({ transform: "", opacity: "" }), o.isComplete || e.complete() }, !1))
                    },
                    isMoved: function(t) { var e, n, o = t || this.current; return !!o && (n = i.fancybox.getTranslate(this.$refs.stage), e = i.fancybox.getTranslate(o.$slide), !o.$slide.hasClass("fancybox-animated") && (Math.abs(e.top - n.top) > .5 || Math.abs(e.left - n.left) > .5)) },
                    updateCursor: function(t, e) {
                        var n, o, s = this,
                            a = s.current,
                            r = s.$refs.container;
                        a && !s.isClosing && s.Guestures && (r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"), o = !!(n = s.canPan(t, e)) || s.isZoomable(), r.toggleClass("fancybox-is-zoomable", o), i("[data-fancybox-zoom]").prop("disabled", !o), n ? r.addClass("fancybox-can-pan") : o && ("zoom" === a.opts.clickContent || i.isFunction(a.opts.clickContent) && "zoom" == a.opts.clickContent(a)) ? r.addClass("fancybox-can-zoomIn") : a.opts.touch && (a.opts.touch.vertical || s.group.length > 1) && "video" !== a.contentType && r.addClass("fancybox-can-swipe"))
                    },
                    isZoomable: function() {
                        var t, e = this,
                            i = e.current;
                        if (i && !e.isClosing && "image" === i.type && !i.hasError) { if (!i.isLoaded) return !0; if ((t = e.getFitPos(i)) && (i.width > t.width || i.height > t.height)) return !0 }
                        return !1
                    },
                    isScaledDown: function(t, e) {
                        var o = !1,
                            s = this.current,
                            a = s.$content;
                        return t !== n && e !== n ? o = t < s.width && e < s.height : a && (o = (o = i.fancybox.getTranslate(a)).width < s.width && o.height < s.height), o
                    },
                    canPan: function(t, e) {
                        var o = this.current,
                            s = null,
                            a = !1;
                        return "image" === o.type && (o.isComplete || t && e) && !o.hasError && (a = this.getFitPos(o), t !== n && e !== n ? s = { width: t, height: e } : o.isComplete && (s = i.fancybox.getTranslate(o.$content)), s && a && (a = Math.abs(s.width - a.width) > 1.5 || Math.abs(s.height - a.height) > 1.5)), a
                    },
                    loadSlide: function(t) {
                        var e, n, o, s = this;
                        if (!t.isLoading && !t.isLoaded) {
                            if (t.isLoading = !0, !1 === s.trigger("beforeLoad", t)) return t.isLoading = !1, !1;
                            switch (e = t.type, (n = t.$slide).off("refresh").trigger("onReset").addClass(t.opts.slideClass), e) {
                                case "image":
                                    s.setImage(t);
                                    break;
                                case "iframe":
                                    s.setIframe(t);
                                    break;
                                case "html":
                                    s.setContent(t, t.src || t.content);
                                    break;
                                case "video":
                                    s.setContent(t, t.opts.video.tpl.replace(/\{\{src\}\}/gi, t.src).replace("{{format}}", t.opts.videoFormat || t.opts.video.format || "").replace("{{poster}}", t.thumb || ""));
                                    break;
                                case "inline":
                                    i(t.src).length ? s.setContent(t, i(t.src)) : s.setError(t);
                                    break;
                                case "ajax":
                                    s.showLoading(t), o = i.ajax(i.extend({}, t.opts.ajax.settings, { url: t.src, success: function(e, i) { "success" === i && s.setContent(t, e) }, error: function(e, i) { e && "abort" !== i && s.setError(t) } })), n.one("onReset", function() { o.abort() });
                                    break;
                                default:
                                    s.setError(t)
                            }
                            return !0
                        }
                    },
                    setImage: function(t) {
                        var n, o = this;
                        setTimeout(function() {
                            var e = t.$image;
                            o.isClosing || !t.isLoading || e && e.length && e[0].complete || t.hasError || o.showLoading(t)
                        }, 50), o.checkSrcset(t), t.$content = i('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")), !1 !== t.opts.preload && t.opts.width && t.opts.height && t.thumb && (t.width = t.opts.width, t.height = t.opts.height, (n = e.createElement("img")).onerror = function() { i(this).remove(), t.$ghost = null }, n.onload = function() { o.afterLoad(t) }, t.$ghost = i(n).addClass("fancybox-image").appendTo(t.$content).attr("src", t.thumb)), o.setBigImage(t)
                    },
                    checkSrcset: function(e) { var i, n, o, s, a = e.opts.srcset || e.opts.image.srcset; if (a) { o = t.devicePixelRatio || 1, s = t.innerWidth * o, (n = a.split(",").map(function(t) { var e = {}; return t.trim().split(/\s+/).forEach(function(t, i) { var n = parseInt(t.substring(0, t.length - 1), 10); return 0 === i ? e.url = t : void(n && (e.value = n, e.postfix = t[t.length - 1])) }), e })).sort(function(t, e) { return t.value - e.value }); for (var r = 0; r < n.length; r++) { var l = n[r]; if ("w" === l.postfix && l.value >= s || "x" === l.postfix && l.value >= o) { i = l; break } }!i && n.length && (i = n[n.length - 1]), i && (e.src = i.url, e.width && e.height && "w" == i.postfix && (e.height = e.width / e.height * i.value, e.width = i.value), e.opts.srcset = a) } },
                    setBigImage: function(t) {
                        var n = this,
                            o = e.createElement("img"),
                            s = i(o);
                        t.$image = s.one("error", function() { n.setError(t) }).one("load", function() {
                            var e;
                            t.$ghost || (n.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight), n.afterLoad(t)), n.isClosing || (t.opts.srcset && ((e = t.opts.sizes) && "auto" !== e || (e = (t.width / t.height > 1 && a.width() / a.height() > 1 ? "100" : Math.round(t.width / t.height * 100)) + "vw"), s.attr("sizes", e).attr("srcset", t.opts.srcset)), t.$ghost && setTimeout(function() { t.$ghost && !n.isClosing && t.$ghost.hide() }, Math.min(300, Math.max(1e3, t.height / 1600))), n.hideLoading(t))
                        }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (o.complete || "complete" == o.readyState) && s.naturalWidth && s.naturalHeight ? s.trigger("load") : o.error && s.trigger("error")
                    },
                    resolveImageSlideSize: function(t, e, i) {
                        var n = parseInt(t.opts.width, 10),
                            o = parseInt(t.opts.height, 10);
                        t.width = e, t.height = i, n > 0 && (t.width = n, t.height = Math.floor(n * i / e)), o > 0 && (t.width = Math.floor(o * e / i), t.height = o)
                    },
                    setIframe: function(t) {
                        var e, o = this,
                            s = t.opts.iframe,
                            a = t.$slide;
                        i.fancybox.isMobile && (s.css.overflow = "scroll"), t.$content = i('<div class="fancybox-content' + (s.preload ? " fancybox-is-hidden" : "") + '"></div>').css(s.css).appendTo(a), a.addClass("fancybox-slide--" + t.contentType), t.$iframe = e = i(s.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(s.attr).appendTo(t.$content), s.preload ? (o.showLoading(t), e.on("load.fb error.fb", function(e) { this.isReady = 1, t.$slide.trigger("refresh"), o.afterLoad(t) }), a.on("refresh.fb", function() {
                            var i, o = t.$content,
                                r = s.css.width,
                                l = s.css.height;
                            if (1 === e[0].isReady) {
                                try { i = e.contents().find("body") } catch (t) {}
                                i && i.length && i.children().length && (a.css("overflow", "visible"), o.css({ width: "100%", "max-width": "100%", height: "9999px" }), r === n && (r = Math.ceil(Math.max(i[0].clientWidth, i.outerWidth(!0)))), o.css("width", r || "").css("max-width", ""), l === n && (l = Math.ceil(Math.max(i[0].clientHeight, i.outerHeight(!0)))), o.css("height", l || ""), a.css("overflow", "auto")), o.removeClass("fancybox-is-hidden")
                            }
                        })) : o.afterLoad(t), e.attr("src", t.src), a.one("onReset", function() {
                            try { i(this).find("iframe").hide().unbind().attr("src", "//about:blank") } catch (t) {}
                            i(this).off("refresh.fb").empty(), t.isLoaded = !1, t.isRevealed = !1
                        })
                    },
                    setContent: function(t, e) {
                        var n = this;
                        n.isClosing || (n.hideLoading(t), t.$content && i.fancybox.stop(t.$content), t.$slide.empty(), function(t) { return t && t.hasOwnProperty && t instanceof i }(e) && e.parent().length ? ((e.hasClass("fancybox-content") || e.parent().hasClass("fancybox-content")) && e.parents(".fancybox-slide").trigger("onReset"), t.$placeholder = i("<div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === i.type(e) && (e = i("<div>").append(i.trim(e)).contents()), t.opts.filter && (e = i("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", function() { i(this).find("video,audio").trigger("pause"), t.$placeholder && (t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (i(this).empty(), t.isLoaded = !1, t.isRevealed = !1) }), i(e).appendTo(t.$slide), i(e).is("video,audio") && (i(e).addClass("fancybox-video"), i(e).wrap("<div></div>"), t.contentType = "video", t.opts.width = t.opts.width || i(e).attr("width"), t.opts.height = t.opts.height || i(e).attr("height")), t.$content = t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(), t.$content.siblings().hide(), t.$content.length || (t.$content = t.$slide.wrapInner("<div></div>").children().first()), t.$content.addClass("fancybox-content"), t.$slide.addClass("fancybox-slide--" + t.contentType), n.afterLoad(t))
                    },
                    setError: function(t) { t.hasError = !0, t.$slide.trigger("onReset").removeClass("fancybox-slide--" + t.contentType).addClass("fancybox-slide--error"), t.contentType = "html", this.setContent(t, this.translate(t, t.opts.errorTpl)), t.pos === this.currPos && (this.isAnimating = !1) },
                    showLoading: function(t) {
                        var e = this;
                        (t = t || e.current) && !t.$spinner && (t.$spinner = i(e.translate(e, e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))
                    },
                    hideLoading: function(t) {
                        (t = t || this.current) && t.$spinner && (t.$spinner.stop().remove(), delete t.$spinner)
                    },
                    afterLoad: function(t) {
                        var e = this;
                        e.isClosing || (t.isLoading = !1, t.isLoaded = !0, e.trigger("afterLoad", t), e.hideLoading(t), !t.opts.smallBtn || t.$smallBtn && t.$smallBtn.length || (t.$smallBtn = i(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function(t) { return 2 == t.button && t.preventDefault(), !0 }), "image" === t.type && i('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), e.adjustCaption(t), e.adjustLayout(t), t.pos === e.currPos && e.updateCursor(), e.revealContent(t))
                    },
                    adjustCaption: function(t) {
                        var e = this,
                            i = t || e.current,
                            n = i.opts.caption,
                            o = e.$refs.caption,
                            s = !1;
                        i.opts.preventCaptionOverlap && n && n.length && (i.pos !== e.currPos ? ((o = o.clone().empty().appendTo(o.parent())).html(n), s = o.outerHeight(!0), o.empty().remove()) : e.$caption && (s = e.$caption.outerHeight(!0)), i.$slide.css("padding-bottom", s || ""))
                    },
                    adjustLayout: function(t) {
                        var e, i, n, o, s = t || this.current;
                        s.isLoaded && !0 !== s.opts.disableLayoutFix && (s.$content.css("margin-bottom", ""), s.$content.outerHeight() > s.$slide.height() + .5 && (n = s.$slide[0].style["padding-bottom"], o = s.$slide.css("padding-bottom"), parseFloat(o) > 0 && (e = s.$slide[0].scrollHeight, s.$slide.css("padding-bottom", 0), Math.abs(e - s.$slide[0].scrollHeight) < 1 && (i = o), s.$slide.css("padding-bottom", n))), s.$content.css("margin-bottom", i))
                    },
                    revealContent: function(t) {
                        var e, o, s, a, r = this,
                            l = t.$slide,
                            c = !1,
                            d = !1,
                            h = r.isMoved(t),
                            p = t.isRevealed;
                        return t.isRevealed = !0, e = t.opts[r.firstRun ? "animationEffect" : "transitionEffect"], s = t.opts[r.firstRun ? "animationDuration" : "transitionDuration"], s = parseInt(t.forcedDuration === n ? s : t.forcedDuration, 10), !h && t.pos === r.currPos && s || (e = !1), "zoom" === e && (t.pos === r.currPos && s && "image" === t.type && !t.hasError && (d = r.getThumbPos(t)) ? c = r.getFitPos(t) : e = "fade"), "zoom" === e ? (r.isAnimating = !0, c.scaleX = c.width / d.width, c.scaleY = c.height / d.height, "auto" == (a = t.opts.zoomOpacity) && (a = Math.abs(t.width / t.height - d.width / d.height) > .1), a && (d.opacity = .1, c.opacity = 1), i.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), d), u(t.$content), void i.fancybox.animate(t.$content, c, s, function() { r.isAnimating = !1, r.complete() })) : (r.updateSlide(t), e ? (i.fancybox.stop(l), o = "fancybox-slide--" + (t.pos >= r.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + e, l.addClass(o).removeClass("fancybox-slide--current"), t.$content.removeClass("fancybox-is-hidden"), u(l), "image" !== t.type && t.$content.hide().show(0), void i.fancybox.animate(l, "fancybox-slide--current", s, function() { l.removeClass(o).css({ transform: "", opacity: "" }), t.pos === r.currPos && r.complete() }, !0)) : (t.$content.removeClass("fancybox-is-hidden"), p || !h || "image" !== t.type || t.hasError || t.$content.hide().fadeIn("fast"), void(t.pos === r.currPos && r.complete())))
                    },
                    getThumbPos: function(t) {
                        var e, n, o, s, a, r = !1,
                            l = t.$thumb;
                        return !(!l || !f(l[0])) && (e = i.fancybox.getTranslate(l), n = parseFloat(l.css("border-top-width") || 0), o = parseFloat(l.css("border-right-width") || 0), s = parseFloat(l.css("border-bottom-width") || 0), a = parseFloat(l.css("border-left-width") || 0), r = { top: e.top + n, left: e.left + a, width: e.width - o - a, height: e.height - n - s, scaleX: 1, scaleY: 1 }, e.width > 0 && e.height > 0 && r)
                    },
                    complete: function() {
                        var t, e = this,
                            n = e.current,
                            o = {};
                        !e.isMoved() && n.isLoaded && (n.isComplete || (n.isComplete = !0, n.$slide.siblings().trigger("onReset"), e.preload("inline"), u(n.$slide), n.$slide.addClass("fancybox-slide--complete"), i.each(e.slides, function(t, n) { n.pos >= e.currPos - 1 && n.pos <= e.currPos + 1 ? o[n.pos] = n : n && (i.fancybox.stop(n.$slide), n.$slide.off().remove()) }), e.slides = o), e.isAnimating = !1, e.updateCursor(), e.trigger("afterShow"), n.opts.video.autoStart && n.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", function() { this.webkitExitFullscreen && this.webkitExitFullscreen(), e.next() }), n.opts.autoFocus && "html" === n.contentType && ((t = n.$content.find("input[autofocus]:enabled:visible:first")).length ? t.trigger("focus") : e.focus(null, !0)), n.$slide.scrollTop(0).scrollLeft(0))
                    },
                    preload: function(t) {
                        var e, i, n = this;
                        n.group.length < 2 || (i = n.slides[n.currPos + 1], (e = n.slides[n.currPos - 1]) && e.type === t && n.loadSlide(e), i && i.type === t && n.loadSlide(i))
                    },
                    focus: function(t, n) {
                        var o, s, a = this,
                            r = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(",");
                        a.isClosing || ((o = (o = !t && a.current && a.current.isComplete ? a.current.$slide.find("*:visible" + (n ? ":not(.fancybox-close-small)" : "")) : a.$refs.container.find("*:visible")).filter(r).filter(function() { return "hidden" !== i(this).css("visibility") && !i(this).hasClass("disabled") })).length ? (s = o.index(e.activeElement), t && t.shiftKey ? (s < 0 || 0 == s) && (t.preventDefault(), o.eq(o.length - 1).trigger("focus")) : (s < 0 || s == o.length - 1) && (t && t.preventDefault(), o.eq(0).trigger("focus"))) : a.$refs.container.trigger("focus"))
                    },
                    activate: function() {
                        var t = this;
                        i(".fancybox-container").each(function() {
                            var e = i(this).data("FancyBox");
                            e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), e.isVisible = !1)
                        }), t.isVisible = !0, (t.current || t.isIdle) && (t.update(), t.updateControls()), t.trigger("onActivate"), t.addEvents()
                    },
                    close: function(t, e) {
                        var n, o, s, a, r, l, d, h = this,
                            p = h.current,
                            f = function() { h.cleanUp(t) };
                        return !(h.isClosing || (h.isClosing = !0, !1 === h.trigger("beforeClose", t) ? (h.isClosing = !1, c(function() { h.update() }), 1) : (h.removeEvents(), s = p.$content, n = p.opts.animationEffect, o = i.isNumeric(e) ? e : n ? p.opts.animationDuration : 0, p.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), !0 !== t ? i.fancybox.stop(p.$slide) : n = !1, p.$slide.siblings().trigger("onReset").remove(), o && h.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", o + "ms"), h.hideLoading(p), h.hideControls(!0), h.updateCursor(), "zoom" !== n || s && o && "image" === p.type && !h.isMoved() && !p.hasError && (d = h.getThumbPos(p)) || (n = "fade"), "zoom" === n ? (i.fancybox.stop(s), a = i.fancybox.getTranslate(s), l = { top: a.top, left: a.left, scaleX: a.width / d.width, scaleY: a.height / d.height, width: d.width, height: d.height }, r = p.opts.zoomOpacity, "auto" == r && (r = Math.abs(p.width / p.height - d.width / d.height) > .1), r && (d.opacity = 0), i.fancybox.setTranslate(s, l), u(s), i.fancybox.animate(s, d, o, f), 0) : (n && o ? i.fancybox.animate(p.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + n, o, f) : !0 === t ? setTimeout(f, o) : f(), 0))))
                    },
                    cleanUp: function(e) {
                        var n, o, s, a = this,
                            r = a.current.opts.$orig;
                        a.current.$slide.trigger("onReset"), a.$refs.container.empty().remove(), a.trigger("afterClose", e), a.current.opts.backFocus && (r && r.length && r.is(":visible") || (r = a.$trigger), r && r.length && (o = t.scrollX, s = t.scrollY, r.trigger("focus"), i("html, body").scrollTop(s).scrollLeft(o))), a.current = null, (n = i.fancybox.getInstance()) ? n.activate() : (i("body").removeClass("fancybox-active compensate-for-scrollbar"), i("#fancybox-style-noscroll").remove())
                    },
                    trigger: function(t, e) {
                        var n, o = Array.prototype.slice.call(arguments, 1),
                            s = this,
                            a = e && e.opts ? e : s.current;
                        return a ? o.unshift(a) : a = s, o.unshift(s), i.isFunction(a.opts[t]) && (n = a.opts[t].apply(a, o)), !1 === n ? n : void("afterClose" !== t && s.$refs ? s.$refs.container.trigger(t + ".fb", o) : r.trigger(t + ".fb", o))
                    },
                    updateControls: function() {
                        var t = this,
                            n = t.current,
                            o = n.index,
                            s = t.$refs.container,
                            a = t.$refs.caption,
                            r = n.opts.caption;
                        n.$slide.trigger("refresh"), t.$caption = r && r.length ? a.html(r) : null, t.hasHiddenControls || t.isIdle || t.showControls(), s.find("[data-fancybox-count]").html(t.group.length), s.find("[data-fancybox-index]").html(o + 1), s.find("[data-fancybox-prev]").prop("disabled", !n.opts.loop && o <= 0), s.find("[data-fancybox-next]").prop("disabled", !n.opts.loop && o >= t.group.length - 1), "image" === n.type ? s.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", n.opts.image.src || n.src).show() : n.opts.toolbar && s.find("[data-fancybox-download],[data-fancybox-zoom]").hide(), i(e.activeElement).is(":hidden,[disabled]") && t.$refs.container.trigger("focus")
                    },
                    hideControls: function(t) { var e = ["infobar", "toolbar", "nav"];!t && this.current.opts.preventCaptionOverlap || e.push("caption"), this.$refs.container.removeClass(e.map(function(t) { return "fancybox-show-" + t }).join(" ")), this.hasHiddenControls = !0 },
                    showControls: function() {
                        var t = this,
                            e = t.current ? t.current.opts : t.opts,
                            i = t.$refs.container;
                        t.hasHiddenControls = !1, t.idleSecondsCounter = 0, i.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1)).toggleClass("fancybox-show-caption", !!t.$caption).toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1)).toggleClass("fancybox-is-modal", !!e.modal)
                    },
                    toggleControls: function() { this.hasHiddenControls ? this.showControls() : this.hideControls() }
                }), i.fancybox = {
                    version: "3.5.2",
                    defaults: s,
                    getInstance: function(t) {
                        var e = i('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                            n = Array.prototype.slice.call(arguments, 1);
                        return e instanceof m && ("string" === i.type(t) ? e[t].apply(e, n) : "function" === i.type(t) && t.apply(e, n), e)
                    },
                    open: function(t, e, i) { return new m(t, e, i) },
                    close: function(t) {
                        var e = this.getInstance();
                        e && (e.close(), !0 === t && this.close(t))
                    },
                    destroy: function() { this.close(!0), r.add("body").off("click.fb-start", "**") },
                    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                    use3d: function() { var i = e.createElement("div"); return t.getComputedStyle && t.getComputedStyle(i) && t.getComputedStyle(i).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11) }(),
                    getTranslate: function(t) { var e; return !(!t || !t.length) && { top: (e = t[0].getBoundingClientRect()).top || 0, left: e.left || 0, width: e.width, height: e.height, opacity: parseFloat(t.css("opacity")) } },
                    setTranslate: function(t, e) {
                        var i = "",
                            o = {};
                        if (t && e) return e.left === n && e.top === n || (i = (e.left === n ? t.position().left : e.left) + "px, " + (e.top === n ? t.position().top : e.top) + "px", i = this.use3d ? "translate3d(" + i + ", 0px)" : "translate(" + i + ")"), e.scaleX !== n && e.scaleY !== n ? i += " scale(" + e.scaleX + ", " + e.scaleY + ")" : e.scaleX !== n && (i += " scaleX(" + e.scaleX + ")"), i.length && (o.transform = i), e.opacity !== n && (o.opacity = e.opacity), e.width !== n && (o.width = e.width), e.height !== n && (o.height = e.height), t.css(o)
                    },
                    animate: function(t, e, o, s, a) {
                        var r, l = this;
                        i.isFunction(o) && (s = o, o = null), l.stop(t), r = l.getTranslate(t), t.on(h, function(c) {
                            (!c || !c.originalEvent || t.is(c.originalEvent.target) && "z-index" != c.originalEvent.propertyName) && (l.stop(t), i.isNumeric(o) && t.css("transition-duration", ""), i.isPlainObject(e) ? e.scaleX !== n && e.scaleY !== n && l.setTranslate(t, { top: e.top, left: e.left, width: r.width * e.scaleX, height: r.height * e.scaleY, scaleX: 1, scaleY: 1 }) : !0 !== a && t.removeClass(e), i.isFunction(s) && s(c))
                        }), i.isNumeric(o) && t.css("transition-duration", o + "ms"), i.isPlainObject(e) ? (e.scaleX !== n && e.scaleY !== n && (delete e.width, delete e.height, t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")), i.fancybox.setTranslate(t, e)) : t.addClass(e), t.data("timer", setTimeout(function() { t.trigger(h) }, o + 33))
                    },
                    stop: function(t, e) { t && t.length && (clearTimeout(t.data("timer")), e && t.trigger(h), t.off(h).css("transition-duration", ""), t.parent().removeClass("fancybox-is-scaling")) }
                }, i.fn.fancybox = function(t) { var e; return (e = (t = t || {}).selector || !1) ? i("body").off("click.fb-start", e).on("click.fb-start", e, { options: t }, o) : this.off("click.fb-start").on("click.fb-start", { items: this, options: t }, o), this }, r.on("click.fb-start", "[data-fancybox]", o), r.on("click.fb-start", "[data-fancybox-trigger]", function(t) { i('[data-fancybox="' + i(this).attr("data-fancybox-trigger") + '"]').eq(i(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", { $trigger: i(this) }) }),
                function() {
                    var t = ".fancybox-button",
                        e = "fancybox-focus",
                        n = null;
                    r.on("mousedown mouseup focus blur", t, function(o) {
                        switch (o.type) {
                            case "mousedown":
                                n = i(this);
                                break;
                            case "mouseup":
                                n = null;
                                break;
                            case "focusin":
                                i(t).removeClass(e), i(this).is(n) || i(this).is("[disabled]") || i(this).addClass(e);
                                break;
                            case "focusout":
                                i(t).removeClass(e)
                        }
                    })
                }()
        }
    }(window, document, jQuery),
    function(t) {
        "use strict";
        var e = { youtube: { matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i, params: { autoplay: 1, autohide: 1, fs: 1, rel: 0, hd: 1, wmode: "transparent", enablejsapi: 1, html5: 1 }, paramPlace: 8, type: "iframe", url: "//www.youtube-nocookie.com/embed/$4", thumb: "//img.youtube.com/vi/$4/hqdefault.jpg" }, vimeo: { matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/, params: { autoplay: 1, hd: 1, show_title: 1, show_byline: 1, show_portrait: 0, fullscreen: 1 }, paramPlace: 3, type: "iframe", url: "//player.vimeo.com/video/$2" }, instagram: { matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i, type: "image", url: "//$1/p/$2/media/?size=l" }, gmap_place: { matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i, type: "iframe", url: function(t) { return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed") } }, gmap_search: { matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i, type: "iframe", url: function(t) { return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed" } } },
            i = function(e, i, n) { if (e) return n = n || "", "object" === t.type(n) && (n = t.param(n, !0)), t.each(i, function(t, i) { e = e.replace("$" + t, i || "") }), n.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + n), e };
        t(document).on("objectNeedsType.fb", function(n, o, s) {
            var a, r, l, c, d, h, u, p = s.src || "",
                f = !1;
            a = t.extend(!0, {}, e, s.opts.media), t.each(a, function(e, n) {
                if (l = p.match(n.matcher)) {
                    if (f = n.type, u = e, h = {}, n.paramPlace && l[n.paramPlace]) {
                        "?" == (d = l[n.paramPlace])[0] && (d = d.substring(1)), d = d.split("&");
                        for (var o = 0; o < d.length; ++o) {
                            var a = d[o].split("=", 2);
                            2 == a.length && (h[a[0]] = decodeURIComponent(a[1].replace(/\+/g, " ")))
                        }
                    }
                    return c = t.extend(!0, {}, n.params, s.opts[e], h), p = "function" === t.type(n.url) ? n.url.call(this, l, c, s) : i(n.url, l, c), r = "function" === t.type(n.thumb) ? n.thumb.call(this, l, c, s) : i(n.thumb, l), "youtube" === e ? p = p.replace(/&t=((\d+)m)?(\d+)s/, function(t, e, i, n) { return "&start=" + ((i ? 60 * parseInt(i, 10) : 0) + parseInt(n, 10)) }) : "vimeo" === e && (p = p.replace("&%23", "#")), !1
                }
            }), f ? (s.opts.thumb || s.opts.$thumb && s.opts.$thumb.length || (s.opts.thumb = r), "iframe" === f && (s.opts = t.extend(!0, s.opts, { iframe: { preload: !1, attr: { scrolling: "no" } } })), t.extend(s, { type: f, src: p, origSrc: s.src, contentSource: u, contentType: "image" === f ? "image" : "gmap_place" == u || "gmap_search" == u ? "map" : "video" })) : p && (s.type = s.opts.defaultType)
        });
        var n = { youtube: { src: "https://www.youtube.com/iframe_api", class: "YT", loading: !1, loaded: !1 }, vimeo: { src: "https://player.vimeo.com/api/player.js", class: "Vimeo", loading: !1, loaded: !1 }, load: function(t) { var e, i = this; return this[t].loaded ? void setTimeout(function() { i.done(t) }) : void(this[t].loading || (this[t].loading = !0, e = document.createElement("script"), e.type = "text/javascript", e.src = this[t].src, "youtube" === t ? window.onYouTubeIframeAPIReady = function() { i[t].loaded = !0, i.done(t) } : e.onload = function() { i[t].loaded = !0, i.done(t) }, document.body.appendChild(e))) }, done: function(e) { var i, n; "youtube" === e && delete window.onYouTubeIframeAPIReady, (i = t.fancybox.getInstance()) && (n = i.current.$content.find("iframe"), "youtube" === e && void 0 !== YT && YT ? new YT.Player(n.attr("id"), { events: { onStateChange: function(t) { 0 == t.data && i.next() } } }) : "vimeo" === e && void 0 !== Vimeo && Vimeo && new Vimeo.Player(n).on("ended", function() { i.next() })) } };
        t(document).on({ "afterShow.fb": function(t, e, i) { e.group.length > 1 && ("youtube" === i.contentSource || "vimeo" === i.contentSource) && n.load(i.contentSource) } })
    }(jQuery),
    function(t, e, i) {
        "use strict";
        var n = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) { return t.setTimeout(e, 1e3 / 60) },
            o = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function(e) { t.clearTimeout(e) },
            s = function(e) { var i = []; for (var n in e = (e = e.originalEvent || e || t.e).touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e]) e[n].pageX ? i.push({ x: e[n].pageX, y: e[n].pageY }) : e[n].clientX && i.push({ x: e[n].clientX, y: e[n].clientY }); return i },
            a = function(t, e, i) { return e && t ? "x" === i ? t.x - e.x : "y" === i ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0 },
            r = function(t) {
                if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || i.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;
                for (var e = 0, n = t[0].attributes, o = n.length; e < o; e++)
                    if ("data-fancybox-" === n[e].nodeName.substr(0, 14)) return !0;
                return !1
            },
            l = function(e) {
                var i = t.getComputedStyle(e)["overflow-y"],
                    n = t.getComputedStyle(e)["overflow-x"],
                    o = ("scroll" === i || "auto" === i) && e.scrollHeight > e.clientHeight,
                    s = ("scroll" === n || "auto" === n) && e.scrollWidth > e.clientWidth;
                return o || s
            },
            c = function(t) { for (var e = !1; !(e = l(t.get(0))) && ((t = t.parent()).length && !t.hasClass("fancybox-stage") && !t.is("body"));); return e },
            d = function(t) {
                var e = this;
                e.instance = t, e.$bg = t.$refs.bg, e.$stage = t.$refs.stage, e.$container = t.$refs.container, e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", i.proxy(e, "ontouchstart"))
            };
        d.prototype.destroy = function() {
            var t = this;
            t.$container.off(".fb.touch"), i(e).off(".fb.touch"), t.requestId && (o(t.requestId), t.requestId = null), t.tapped && (clearTimeout(t.tapped), t.tapped = null)
        }, d.prototype.ontouchstart = function(n) {
            var o = this,
                l = i(n.target),
                d = o.instance,
                h = d.current,
                u = h.$slide,
                p = h.$content,
                f = "touchstart" == n.type;
            if (f && o.$container.off("mousedown.fb.touch"), (!n.originalEvent || 2 != n.originalEvent.button) && u.length && l.length && !r(l) && !r(l.parent()) && (l.is("img") || !(n.originalEvent.clientX > l[0].clientWidth + l.offset().left))) {
                if (!h || d.isAnimating || h.$slide.hasClass("fancybox-animated")) return n.stopPropagation(), void n.preventDefault();
                o.realPoints = o.startPoints = s(n), o.startPoints.length && (h.touch && n.stopPropagation(), o.startEvent = n, o.canTap = !0, o.$target = l, o.$content = p, o.opts = h.opts.touch, o.isPanning = !1, o.isSwiping = !1, o.isZooming = !1, o.isScrolling = !1, o.canPan = d.canPan(), o.startTime = (new Date).getTime(), o.distanceX = o.distanceY = o.distance = 0, o.canvasWidth = Math.round(u[0].clientWidth), o.canvasHeight = Math.round(u[0].clientHeight), o.contentLastPos = null, o.contentStartPos = i.fancybox.getTranslate(o.$content) || { top: 0, left: 0 }, o.sliderStartPos = i.fancybox.getTranslate(u), o.stagePos = i.fancybox.getTranslate(d.$refs.stage), o.sliderStartPos.top -= o.stagePos.top, o.sliderStartPos.left -= o.stagePos.left, o.contentStartPos.top -= o.stagePos.top, o.contentStartPos.left -= o.stagePos.left, i(e).off(".fb.touch").on(f ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", i.proxy(o, "ontouchend")).on(f ? "touchmove.fb.touch" : "mousemove.fb.touch", i.proxy(o, "ontouchmove")), i.fancybox.isMobile && e.addEventListener("scroll", o.onscroll, !0), ((o.opts || o.canPan) && (l.is(o.$stage) || o.$stage.find(l).length) || (l.is(".fancybox-image") && n.preventDefault(), i.fancybox.isMobile && l.hasClass("fancybox-caption"))) && (o.isScrollable = c(l) || c(l.parent()), i.fancybox.isMobile && o.isScrollable || n.preventDefault(), (1 === o.startPoints.length || h.hasError) && (o.canPan ? (i.fancybox.stop(o.$content), o.isPanning = !0) : o.isSwiping = !0, o.$container.addClass("fancybox-is-grabbing")), 2 === o.startPoints.length && "image" === h.type && (h.isLoaded || h.$ghost) && (o.canTap = !1, o.isSwiping = !1, o.isPanning = !1, o.isZooming = !0, i.fancybox.stop(o.$content), o.centerPointStartX = .5 * (o.startPoints[0].x + o.startPoints[1].x) - i(t).scrollLeft(), o.centerPointStartY = .5 * (o.startPoints[0].y + o.startPoints[1].y) - i(t).scrollTop(), o.percentageOfImageAtPinchPointX = (o.centerPointStartX - o.contentStartPos.left) / o.contentStartPos.width, o.percentageOfImageAtPinchPointY = (o.centerPointStartY - o.contentStartPos.top) / o.contentStartPos.height, o.startDistanceBetweenFingers = a(o.startPoints[0], o.startPoints[1]))))
            }
        }, d.prototype.onscroll = function(t) { this.isScrolling = !0, e.removeEventListener("scroll", this.onscroll, !0) }, d.prototype.ontouchmove = function(t) { var e = this; return void 0 !== t.originalEvent.buttons && 0 === t.originalEvent.buttons ? void e.ontouchend(t) : e.isScrolling ? void(e.canTap = !1) : (e.newPoints = s(t), void((e.opts || e.canPan) && e.newPoints.length && e.newPoints.length && (e.isSwiping && !0 === e.isSwiping || t.preventDefault(), e.distanceX = a(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = a(e.newPoints[0], e.startPoints[0], "y"), e.distance = a(e.newPoints[0], e.startPoints[0]), e.distance > 0 && (e.isSwiping ? e.onSwipe(t) : e.isPanning ? e.onPan() : e.isZooming && e.onZoom())))) }, d.prototype.onSwipe = function(e) {
            var s, a = this,
                r = a.instance,
                l = a.isSwiping,
                c = a.sliderStartPos.left || 0;
            if (!0 !== l) "x" == l && (a.distanceX > 0 && (a.instance.group.length < 2 || 0 === a.instance.current.index && !a.instance.current.opts.loop) ? c += Math.pow(a.distanceX, .8) : a.distanceX < 0 && (a.instance.group.length < 2 || a.instance.current.index === a.instance.group.length - 1 && !a.instance.current.opts.loop) ? c -= Math.pow(-a.distanceX, .8) : c += a.distanceX), a.sliderLastPos = { top: "x" == l ? 0 : a.sliderStartPos.top + a.distanceY, left: c }, a.requestId && (o(a.requestId), a.requestId = null), a.requestId = n(function() {
                a.sliderLastPos && (i.each(a.instance.slides, function(t, e) {
                    var n = e.pos - a.instance.currPos;
                    i.fancybox.setTranslate(e.$slide, { top: a.sliderLastPos.top, left: a.sliderLastPos.left + n * a.canvasWidth + n * e.opts.gutter })
                }), a.$container.addClass("fancybox-is-sliding"))
            });
            else if (Math.abs(a.distance) > 10) {
                if (a.canTap = !1, r.group.length < 2 && a.opts.vertical ? a.isSwiping = "y" : r.isDragging || !1 === a.opts.vertical || "auto" === a.opts.vertical && i(t).width() > 800 ? a.isSwiping = "x" : (s = Math.abs(180 * Math.atan2(a.distanceY, a.distanceX) / Math.PI), a.isSwiping = s > 45 && s < 135 ? "y" : "x"), "y" === a.isSwiping && i.fancybox.isMobile && a.isScrollable) return void(a.isScrolling = !0);
                r.isDragging = a.isSwiping, a.startPoints = a.newPoints, i.each(r.slides, function(t, e) {
                    var n, o;
                    i.fancybox.stop(e.$slide), n = i.fancybox.getTranslate(e.$slide), o = i.fancybox.getTranslate(r.$refs.stage), e.$slide.css({ transform: "", opacity: "", "transition-duration": "" }).removeClass("fancybox-animated").removeClass(function(t, e) { return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ") }), e.pos === r.current.pos && (a.sliderStartPos.top = n.top - o.top, a.sliderStartPos.left = n.left - o.left), i.fancybox.setTranslate(e.$slide, { top: n.top - o.top, left: n.left - o.left })
                }), r.SlideShow && r.SlideShow.isActive && r.SlideShow.stop()
            }
        }, d.prototype.onPan = function() { var t = this; return a(t.newPoints[0], t.realPoints[0]) < (i.fancybox.isMobile ? 10 : 5) ? void(t.startPoints = t.newPoints) : (t.canTap = !1, t.contentLastPos = t.limitMovement(), t.requestId && o(t.requestId), void(t.requestId = n(function() { i.fancybox.setTranslate(t.$content, t.contentLastPos) }))) }, d.prototype.limitMovement = function() {
            var t, e, i, n, o, s, a = this,
                r = a.canvasWidth,
                l = a.canvasHeight,
                c = a.distanceX,
                d = a.distanceY,
                h = a.contentStartPos,
                u = h.left,
                p = h.top,
                f = h.width,
                m = h.height;
            return o = f > r ? u + c : u, s = p + d, t = Math.max(0, .5 * r - .5 * f), e = Math.max(0, .5 * l - .5 * m), i = Math.min(r - f, .5 * r - .5 * f), n = Math.min(l - m, .5 * l - .5 * m), c > 0 && o > t && (o = t - 1 + Math.pow(-t + u + c, .8) || 0), c < 0 && o < i && (o = i + 1 - Math.pow(i - u - c, .8) || 0), d > 0 && s > e && (s = e - 1 + Math.pow(-e + p + d, .8) || 0), d < 0 && s < n && (s = n + 1 - Math.pow(n - p - d, .8) || 0), { top: s, left: o }
        }, d.prototype.limitPosition = function(t, e, i, n) {
            var o = this.canvasWidth,
                s = this.canvasHeight;
            return i > o ? t = (t = t > 0 ? 0 : t) < o - i ? o - i : t : t = Math.max(0, o / 2 - i / 2), n > s ? e = (e = e > 0 ? 0 : e) < s - n ? s - n : e : e = Math.max(0, s / 2 - n / 2), { top: e, left: t }
        }, d.prototype.onZoom = function() {
            var e = this,
                s = e.contentStartPos,
                r = s.width,
                l = s.height,
                c = s.left,
                d = s.top,
                h = a(e.newPoints[0], e.newPoints[1]) / e.startDistanceBetweenFingers,
                u = Math.floor(r * h),
                p = Math.floor(l * h),
                f = (r - u) * e.percentageOfImageAtPinchPointX,
                m = (l - p) * e.percentageOfImageAtPinchPointY,
                g = (e.newPoints[0].x + e.newPoints[1].x) / 2 - i(t).scrollLeft(),
                v = (e.newPoints[0].y + e.newPoints[1].y) / 2 - i(t).scrollTop(),
                y = g - e.centerPointStartX,
                b = { top: d + (m + (v - e.centerPointStartY)), left: c + (f + y), scaleX: h, scaleY: h };
            e.canTap = !1, e.newWidth = u, e.newHeight = p, e.contentLastPos = b, e.requestId && o(e.requestId), e.requestId = n(function() { i.fancybox.setTranslate(e.$content, e.contentLastPos) })
        }, d.prototype.ontouchend = function(t) {
            var n = this,
                a = n.isSwiping,
                r = n.isPanning,
                l = n.isZooming,
                c = n.isScrolling;
            return n.endPoints = s(t), n.dMs = Math.max((new Date).getTime() - n.startTime, 1), n.$container.removeClass("fancybox-is-grabbing"), i(e).off(".fb.touch"), e.removeEventListener("scroll", n.onscroll, !0), n.requestId && (o(n.requestId), n.requestId = null), n.isSwiping = !1, n.isPanning = !1, n.isZooming = !1, n.isScrolling = !1, n.instance.isDragging = !1, n.canTap ? n.onTap(t) : (n.speed = 100, n.velocityX = n.distanceX / n.dMs * .5, n.velocityY = n.distanceY / n.dMs * .5, void(r ? n.endPanning() : l ? n.endZooming() : n.endSwiping(a, c)))
        }, d.prototype.endSwiping = function(t, e) {
            var n = this,
                o = !1,
                s = n.instance.group.length,
                a = Math.abs(n.distanceX),
                r = "x" == t && s > 1 && (n.dMs > 130 && a > 10 || a > 50);
            n.sliderLastPos = null, "y" == t && !e && Math.abs(n.distanceY) > 50 ? (i.fancybox.animate(n.instance.current.$slide, { top: n.sliderStartPos.top + n.distanceY + 150 * n.velocityY, opacity: 0 }, 200), o = n.instance.close(!0, 250)) : r && n.distanceX > 0 ? o = n.instance.previous(300) : r && n.distanceX < 0 && (o = n.instance.next(300)), !1 !== o || "x" != t && "y" != t || n.instance.centerSlide(200), n.$container.removeClass("fancybox-is-sliding")
        }, d.prototype.endPanning = function() {
            var t, e, n, o = this;
            o.contentLastPos && (!1 === o.opts.momentum || o.dMs > 350 ? (t = o.contentLastPos.left, e = o.contentLastPos.top) : (t = o.contentLastPos.left + 500 * o.velocityX, e = o.contentLastPos.top + 500 * o.velocityY), (n = o.limitPosition(t, e, o.contentStartPos.width, o.contentStartPos.height)).width = o.contentStartPos.width, n.height = o.contentStartPos.height, i.fancybox.animate(o.$content, n, 330))
        }, d.prototype.endZooming = function() {
            var t, e, n, o, s = this,
                a = s.instance.current,
                r = s.newWidth,
                l = s.newHeight;
            s.contentLastPos && (t = s.contentLastPos.left, o = { top: e = s.contentLastPos.top, left: t, width: r, height: l, scaleX: 1, scaleY: 1 }, i.fancybox.setTranslate(s.$content, o), r < s.canvasWidth && l < s.canvasHeight ? s.instance.scaleToFit(150) : r > a.width || l > a.height ? s.instance.scaleToActual(s.centerPointStartX, s.centerPointStartY, 150) : (n = s.limitPosition(t, e, r, l), i.fancybox.animate(s.$content, n, 150)))
        }, d.prototype.onTap = function(e) {
            var n, o = this,
                a = i(e.target),
                r = o.instance,
                l = r.current,
                c = e && s(e) || o.startPoints,
                d = c[0] ? c[0].x - i(t).scrollLeft() - o.stagePos.left : 0,
                h = c[0] ? c[0].y - i(t).scrollTop() - o.stagePos.top : 0,
                u = function(t) {
                    var n = l.opts[t];
                    if (i.isFunction(n) && (n = n.apply(r, [l, e])), n) switch (n) {
                        case "close":
                            r.close(o.startEvent);
                            break;
                        case "toggleControls":
                            r.toggleControls();
                            break;
                        case "next":
                            r.next();
                            break;
                        case "nextOrClose":
                            r.group.length > 1 ? r.next() : r.close(o.startEvent);
                            break;
                        case "zoom":
                            "image" == l.type && (l.isLoaded || l.$ghost) && (r.canPan() ? r.scaleToFit() : r.isScaledDown() ? r.scaleToActual(d, h) : r.group.length < 2 && r.close(o.startEvent))
                    }
                };
            if ((!e.originalEvent || 2 != e.originalEvent.button) && (a.is("img") || !(d > a[0].clientWidth + a.offset().left))) {
                if (a.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) n = "Outside";
                else if (a.is(".fancybox-slide")) n = "Slide";
                else {
                    if (!r.current.$content || !r.current.$content.find(a).addBack().filter(a).length) return;
                    n = "Content"
                }
                if (o.tapped) {
                    if (clearTimeout(o.tapped), o.tapped = null, Math.abs(d - o.tapX) > 50 || Math.abs(h - o.tapY) > 50) return this;
                    u("dblclick" + n)
                } else o.tapX = d, o.tapY = h, l.opts["dblclick" + n] && l.opts["dblclick" + n] !== l.opts["click" + n] ? o.tapped = setTimeout(function() { o.tapped = null, r.isAnimating || u("click" + n) }, 500) : u("click" + n);
                return this
            }
        }, i(e).on("onActivate.fb", function(t, e) { e && !e.Guestures && (e.Guestures = new d(e)) }).on("beforeClose.fb", function(t, e) { e && e.Guestures && e.Guestures.destroy() })
    }(window, document, jQuery),
    function(t, e) {
        "use strict";
        e.extend(!0, e.fancybox.defaults, { btnTpl: { slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>' }, slideShow: { autoStart: !1, speed: 3e3, progress: !0 } });
        var i = function(t) { this.instance = t, this.init() };
        e.extend(i.prototype, {
            timer: null,
            isActive: !1,
            $button: null,
            init: function() {
                var t = this,
                    i = t.instance,
                    n = i.group[i.currIndex].opts.slideShow;
                t.$button = i.$refs.toolbar.find("[data-fancybox-play]").on("click", function() { t.toggle() }), i.group.length < 2 || !n ? t.$button.hide() : n.progress && (t.$progress = e('<div class="fancybox-progress"></div>').appendTo(i.$refs.inner))
            },
            set: function(t) {
                var i = this,
                    n = i.instance,
                    o = n.current;
                o && (!0 === t || o.opts.loop || n.currIndex < n.group.length - 1) ? i.isActive && "video" !== o.contentType && (i.$progress && e.fancybox.animate(i.$progress.show(), { scaleX: 1 }, o.opts.slideShow.speed), i.timer = setTimeout(function() { n.current.opts.loop || n.current.index != n.group.length - 1 ? n.next() : n.jumpTo(0) }, o.opts.slideShow.speed)) : (i.stop(), n.idleSecondsCounter = 0, n.showControls())
            },
            clear: function() {
                var t = this;
                clearTimeout(t.timer), t.timer = null, t.$progress && t.$progress.removeAttr("style").hide()
            },
            start: function() {
                var t = this,
                    e = t.instance.current;
                e && (t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), t.isActive = !0, e.isComplete && t.set(!0), t.instance.trigger("onSlideShowChange", !0))
            },
            stop: function() {
                var t = this,
                    e = t.instance.current;
                t.clear(), t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), t.isActive = !1, t.instance.trigger("onSlideShowChange", !1), t.$progress && t.$progress.removeAttr("style").hide()
            },
            toggle: function() {
                var t = this;
                t.isActive ? t.stop() : t.start()
            }
        }), e(t).on({
            "onInit.fb": function(t, e) { e && !e.SlideShow && (e.SlideShow = new i(e)) },
            "beforeShow.fb": function(t, e, i, n) {
                var o = e && e.SlideShow;
                n ? o && i.opts.slideShow.autoStart && o.start() : o && o.isActive && o.clear()
            },
            "afterShow.fb": function(t, e, i) {
                var n = e && e.SlideShow;
                n && n.isActive && n.set()
            },
            "afterKeydown.fb": function(i, n, o, s, a) { var r = n && n.SlideShow;!r || !o.opts.slideShow || 80 !== a && 32 !== a || e(t.activeElement).is("button,a,input") || (s.preventDefault(), r.toggle()) },
            "beforeClose.fb onDeactivate.fb": function(t, e) {
                var i = e && e.SlideShow;
                i && i.stop()
            }
        }), e(t).on("visibilitychange", function() {
            var i = e.fancybox.getInstance(),
                n = i && i.SlideShow;
            n && n.isActive && (t.hidden ? n.clear() : n.set())
        })
    }(document, jQuery),
    function(t, e) {
        "use strict";
        var i = function() {
            for (var e = [
                    ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                    ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                    ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                    ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                    ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
                ], i = {}, n = 0; n < e.length; n++) { var o = e[n]; if (o && o[1] in t) { for (var s = 0; s < o.length; s++) i[e[0][s]] = o[s]; return i } }
            return !1
        }();
        if (i) {
            var n = {
                request: function(e) {
                    (e = e || t.documentElement)[i.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
                },
                exit: function() { t[i.exitFullscreen]() },
                toggle: function(e) { e = e || t.documentElement, this.isFullscreen() ? this.exit() : this.request(e) },
                isFullscreen: function() { return Boolean(t[i.fullscreenElement]) },
                enabled: function() { return Boolean(t[i.fullscreenEnabled]) }
            };
            e.extend(!0, e.fancybox.defaults, { btnTpl: { fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>' }, fullScreen: { autoStart: !1 } }), e(t).on(i.fullscreenchange, function() {
                var t = n.isFullscreen(),
                    i = e.fancybox.getInstance();
                i && (i.current && "image" === i.current.type && i.isAnimating && (i.current.$content.css("transition", "none"), i.isAnimating = !1, i.update(!0, !0, 0)), i.trigger("onFullscreenChange", t), i.$refs.container.toggleClass("fancybox-is-fullscreen", t), i.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !t).toggleClass("fancybox-button--fsexit", t))
            })
        }
        e(t).on({ "onInit.fb": function(t, e) { var o; return i ? void(e && e.group[e.currIndex].opts.fullScreen ? (o = e.$refs.container, o.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(t) { t.stopPropagation(), t.preventDefault(), n.toggle() }), e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && n.request(), e.FullScreen = n) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()) : void e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove() }, "afterKeydown.fb": function(t, e, i, n, o) { e && e.FullScreen && 70 === o && (n.preventDefault(), e.FullScreen.toggle()) }, "beforeClose.fb": function(t, e) { e && e.FullScreen && e.$refs.container.hasClass("fancybox-is-fullscreen") && n.exit() } })
    }(document, jQuery),
    function(t, e) {
        "use strict";
        var i = "fancybox-thumbs",
            n = i + "-active";
        e.fancybox.defaults = e.extend(!0, { btnTpl: { thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>' }, thumbs: { autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y" } }, e.fancybox.defaults);
        var o = function(t) { this.init(t) };
        e.extend(o.prototype, {
            $button: null,
            $grid: null,
            $list: null,
            isVisible: !1,
            isActive: !1,
            init: function(t) {
                var e = this,
                    i = t.group,
                    n = 0;
                e.instance = t, e.opts = i[t.currIndex].opts.thumbs, t.Thumbs = e, e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]");
                for (var o = 0, s = i.length; o < s && (i[o].thumb && n++, !(n > 1)); o++);
                n > 1 && e.opts ? (e.$button.removeAttr("style").on("click", function() { e.toggle() }), e.isActive = !0) : e.$button.hide()
            },
            create: function() {
                var t, n = this,
                    o = n.instance,
                    s = n.opts.parentEl,
                    a = [];
                n.$grid || (n.$grid = e('<div class="' + i + " " + i + "-" + n.opts.axis + '"></div>').appendTo(o.$refs.container.find(s).addBack().filter(s)), n.$grid.on("click", "a", function() { o.jumpTo(e(this).attr("data-index")) })), n.$list || (n.$list = e('<div class="' + i + '__list">').appendTo(n.$grid)), e.each(o.group, function(e, i) {
                    (t = i.thumb) || "image" !== i.type || (t = i.src), a.push('<a href="javascript:;" tabindex="0" data-index="' + e + '"' + (t && t.length ? ' style="background-image:url(' + t + ')"' : 'class="fancybox-thumbs-missing"') + "></a>")
                }), n.$list[0].innerHTML = a.join(""), "x" === n.opts.axis && n.$list.width(parseInt(n.$grid.css("padding-right"), 10) + o.group.length * n.$list.children().eq(0).outerWidth(!0))
            },
            focus: function(t) {
                var e, i, o = this,
                    s = o.$list,
                    a = o.$grid;
                o.instance.current && (i = (e = s.children().removeClass(n).filter('[data-index="' + o.instance.current.index + '"]').addClass(n)).position(), "y" === o.opts.axis && (i.top < 0 || i.top > s.height() - e.outerHeight()) ? s.stop().animate({ scrollTop: s.scrollTop() + i.top }, t) : "x" === o.opts.axis && (i.left < a.scrollLeft() || i.left > a.scrollLeft() + (a.width() - e.outerWidth())) && s.parent().stop().animate({ scrollLeft: i.left }, t))
            },
            update: function() {
                var t = this;
                t.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), t.isVisible ? (t.$grid || t.create(), t.instance.trigger("onThumbsShow"), t.focus(0)) : t.$grid && t.instance.trigger("onThumbsHide"), t.instance.update()
            },
            hide: function() { this.isVisible = !1, this.update() },
            show: function() { this.isVisible = !0, this.update() },
            toggle: function() { this.isVisible = !this.isVisible, this.update() }
        }), e(t).on({
            "onInit.fb": function(t, e) {
                var i;
                e && !e.Thumbs && ((i = new o(e)).isActive && !0 === i.opts.autoStart && i.show())
            },
            "beforeShow.fb": function(t, e, i, n) {
                var o = e && e.Thumbs;
                o && o.isVisible && o.focus(n ? 0 : 250)
            },
            "afterKeydown.fb": function(t, e, i, n, o) {
                var s = e && e.Thumbs;
                s && s.isActive && 71 === o && (n.preventDefault(), s.toggle())
            },
            "beforeClose.fb": function(t, e) {
                var i = e && e.Thumbs;
                i && i.isVisible && !1 !== i.opts.hideOnClose && i.$grid.hide()
            }
        })
    }(document, jQuery),
    function(t, e) {
        "use strict";
        e.extend(!0, e.fancybox.defaults, { btnTpl: { share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>' }, share: { url: function(t, e) { return !t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src) || window.location }, tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>' } }), e(t).on("click", "[data-fancybox-share]", function() {
            var t, i, n = e.fancybox.getInstance(),
                o = n.current || null;
            o && ("function" === e.type(o.opts.share.url) && (t = o.opts.share.url.apply(o, [n, o])), i = o.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === o.type ? encodeURIComponent(o.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, function(t) { var e = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;", "`": "&#x60;", "=": "&#x3D;" }; return String(t).replace(/[&<>"'`=\/]/g, function(t) { return e[t] }) }(t)).replace(/\{\{descr\}\}/g, n.$caption ? encodeURIComponent(n.$caption.text()) : ""), e.fancybox.open({ src: n.translate(n, i), type: "html", opts: { touch: !1, animationEffect: !1, afterLoad: function(t, e) { n.$refs.container.one("beforeClose.fb", function() { t.close(null, 0) }), e.$content.find(".fancybox-share__button").click(function() { return window.open(this.href, "Share", "width=550, height=450"), !1 }) }, mobile: { autoFocus: !1 } } }))
        })
    }(document, jQuery),
    function(t, e, i) {
        "use strict";

        function n() {
            var e = t.location.hash.substr(1),
                i = e.split("-"),
                n = i.length > 1 && /^\+?\d+$/.test(i[i.length - 1]) && parseInt(i.pop(-1), 10) || 1;
            return { hash: e, index: n < 1 ? 1 : n, gallery: i.join("-") }
        }

        function o(t) { "" !== t.gallery && i("[data-fancybox='" + i.escapeSelector(t.gallery) + "']").eq(t.index - 1).focus().trigger("click.fb-start") }

        function s(t) { var e, i; return !!t && ("" !== (i = (e = t.current ? t.current.opts : t.opts).hash || (e.$orig ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger") : "")) && i) }
        i.escapeSelector || (i.escapeSelector = function(t) { return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function(t, e) { return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t }) }), i(function() {
            !1 !== i.fancybox.defaults.hash && (i(e).on({
                "onInit.fb": function(t, e) { var i, o;!1 !== e.group[e.currIndex].opts.hash && (i = n(), (o = s(e)) && i.gallery && o == i.gallery && (e.currIndex = i.index - 1)) },
                "beforeShow.fb": function(i, n, o, a) {
                    var r;
                    o && !1 !== o.opts.hash && ((r = s(n)) && (n.currentHash = r + (n.group.length > 1 ? "-" + (o.index + 1) : ""), t.location.hash !== "#" + n.currentHash && (a && !n.origHash && (n.origHash = t.location.hash), n.hashTimer && clearTimeout(n.hashTimer), n.hashTimer = setTimeout(function() { "replaceState" in t.history ? (t.history[a ? "pushState" : "replaceState"]({}, e.title, t.location.pathname + t.location.search + "#" + n.currentHash), a && (n.hasCreatedHistory = !0)) : t.location.hash = n.currentHash, n.hashTimer = null }, 300))))
                },
                "beforeClose.fb": function(i, n, o) {!1 !== o.opts.hash && (clearTimeout(n.hashTimer), n.currentHash && n.hasCreatedHistory ? t.history.back() : n.currentHash && ("replaceState" in t.history ? t.history.replaceState({}, e.title, t.location.pathname + t.location.search + (n.origHash || "")) : t.location.hash = n.origHash), n.currentHash = null) }
            }), i(t).on("hashchange.fb", function() {
                var t = n(),
                    e = null;
                i.each(i(".fancybox-container").get().reverse(), function(t, n) { var o = i(n).data("FancyBox"); if (o && o.currentHash) return e = o, !1 }), e ? e.currentHash === t.gallery + "-" + t.index || 1 === t.index && e.currentHash == t.gallery || (e.currentHash = null, e.close()) : "" !== t.gallery && o(t)
            }), setTimeout(function() { i.fancybox.getInstance() || o(n()) }, 50))
        })
    }(window, document, jQuery),
    function(t, e) {
        "use strict";
        var i = (new Date).getTime();
        e(t).on({
            "onInit.fb": function(t, e, n) {
                e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function(t) {
                    var n = e.current,
                        o = (new Date).getTime();
                    e.group.length < 2 || !1 === n.opts.wheel || "auto" === n.opts.wheel && "image" !== n.type || (t.preventDefault(), t.stopPropagation(), n.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t, o - i < 250 || (i = o, e[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())))
                })
            }
        })
    }(document, jQuery);
var chart, options, ListingByLocationLoader = {
        loadBlockSamePrice: {
            forSamePriceContentUrl: "/block-same-price",
            forSamePriceContainer: null,
            platform: "desktop",
            setPlatform: function(t) { return this.platform = t, this },
            hiddenPosition: { display: "none" },
            shownPosition: { display: "block" },
            hideOldContent: function() { this.platform, $("#bl-same-price").css(this.hiddenPosition) },
            showContent: function() { $(this.forSamePriceContentUrl).css(this.shownPosition) },
            loadContent: function(t, e, i) {
                this.forSamePriceContainer = t, $.ajax({ url: this.forSamePriceContentUrl, type: "post", data: JSON.stringify(e) }).done(function(e) { try { $(t).html(e) } catch (t) { console.log(t) } "desktop" == this.platform && ResOwlSlider() }.bind(this)).always(function() {
                    $("#bl-same-price .item").length && $("#bl-same-price").fadeIn(300), i();
                    var t = $("#bl-same-price .wcontent .img").first(),
                        e = $(t[0]).attr("href");
                    $("#next-listing").on("click", function() { e ? window.location.href = window.location.origin + e : $(this).attr("href", "javascript:void(0)") }), App.UI.isMobile() && $("#btn-all-same-price").attr("href", linkViewAllSamePrice)
                })
            }
        },
        loadBlockSameProject: { forSameProjectContentUrl: "/block-same-project", forSameProjectContainer: null, platform: "desktop", setPlatform: function(t) { return this.platform = t, this }, loadContent: function(t, e) { this.forSameProjectContainer = t, $.ajax({ url: this.forSameProjectContentUrl, type: "post", data: JSON.stringify(e) }).done(function(e) { try { $(t).html(e) } catch (t) { console.log(t) } "desktop" == this.platform && ResOwlSlider() }.bind(this)).always(function() { $("#bl-same-project .item").length && $("#bl-same-project").fadeIn(300), isProject && $("#btn-all-same-project").attr("href", urlDetailProject) }) } }
    },
    heightMore = 240,
    calculatorLoan = function() {
        var t = { bankId: $("#select-bank").val(), loanAmount: App.Feature.ExtractNumber($("#money").val()), maturity: $("#loan-year").val() };
        App.Feature.Post("/api/calculate-loan", t, function(t) {
            if (t.result) {
                var e = t.data;
                $(".payPerMonth").text(e.payPerMonthFormat)
            }
        }, !1)
    };

function checkExpanded(t) { return $(t).attr("aria-expanded") }
App.UI.checkAlpha(["#request-name", "#loan-name"]), App.UI.inputAllowNumber(["#loan-phone", "#request-phone"], !1), App.UI.removeCheckSuccess("#form-my-loans, .form-info", ["email"]);
var renderLoanYear = function(t) {
        var e = "";
        $(t).each(function(t, i) { e += '<option value="' + i.value + '" ' + (i.isDefault ? "selected" : "") + ">", e += i.name, e += "</option>" }), $("#loan-year").html(e)
    },
    startApp = function() {
        $.fn.bootstrapValidator.validators.checkPhone = { validate: function(t, e, i) { var n = e.val(); return !(n.length < 10 || n.length > 11) } }, $.fn.bootstrapValidator.validators.timeLate = { validate: function(t, e, i) { if (!$.trim(e.val())) { var n = moment(e.val(), "DD/MM/YYYY HH:mm").unix(); if (moment().unix() > n) return !1 } return !0 } }, $(".bl-listing a").each(function() {
            var t = $(this).attr("href");
            t = t.replace("nha-dat", "nha-rieng"), $(this).attr("href", t)
        }), $("#btnSendInfo").click(function() {
            for (var t = Cart.getCart(), e = $("#btnSendInfo").attr("listingid"), i = !1, n = 0; n < t.fav.length; n++) t.fav[n].id == e && (i = !0);
            if (!isLogin && t.fav.length >= 3 && !i) return $("#btnRequireLogin").click(), !1;
            var o = $(this).closest(".form-info");
            if (!App.UI.checkValidForm(o)) return App.UI.Error("Bạn cần cung cấp đầy đủ thông tin để Propzy có thể tư vấn tốt nhất cho bạn"), !1;
            App.UI.showLoadding(), $("#request-date").val().trim() ? postData.date = 1e3 * moment($("#request-date").val().trim(), "DD/MM/YYYY HH:mm").unix() : postData.date = null, postData.requestTypeIds = [3], postData.form_type = 3, postData.formIdMailChimp = 1680, $("#customer-name").length > 0 && "" !== $("#customer-name").val() && (postData.customerName = $("#customer-name").val().trim()), $("#customer-phone").length > 0 && "" !== $("#customer-phone").val() && (postData.customerPhone = $("#customer-phone").val().trim()), $("#customer-email").length > 0 && "" !== $("#customer-email").val() && (postData.email = $("#customer-email").val().trim());
            let s = TrackUserRoute.getVisitedList();
            s && (postData.visitList = s), console.log(postData);
            var a = { postData: postData, listingId: e, cart: t, isDuplicate: i, curForm: o };
            isLogin ? confirmedBookingOTPResult(a) : showConfirmPhoneOTPModal(postData.customerPhone, confirmedBookingOTPResult, a)
        }), $("#btnSendInfoModal").click(function() {
            var t = $(this).closest(".form-tuvan-modal");
            if (!App.UI.checkValidForm(t)) return App.UI.Error("Bạn cần cung cấp đầy đủ thông tin để Propzy có thể tư vấn tốt nhất cho bạn"), !1;
            App.UI.showLoadding(), $("#modal-request-date").val().trim() ? postData.date = 1e3 * moment($("#modal-request-date").val().trim(), "DD/MM/YYYY HH:mm").unix() : postData.date = null, postData.requestTypeIds = [3], postData.form_type = 3, postData.formIdMailChimp = 1681, $("#modal-customer-name").length > 0 && "" !== $("#modal-customer-name").val() && (postData.customerName = $("#modal-customer-name").val().trim()), $("#modal-customer-phone").length > 0 && "" !== $("#modal-customer-phone").val() && (postData.customerPhone = $("#modal-customer-phone").val().trim()), $("#modal-customer-email").length > 0 && "" !== $("#modal-customer-email").val() && (postData.email = $("#modal-customer-email").val().trim());
            let e = TrackUserRoute.getVisitedList();
            e && (postData.visitList = e);
            var i = { postData: postData, curForm: t };
            isLogin ? confirmedBookingOTPResultModal(i) : showConfirmPhoneOTPModal(postData.customerPhone, confirmedBookingOTPResultModal, i)
        }), $("#btnRequestInfo").click(function() {
            var t = $(".form-my-loans");
            if (!App.UI.checkValidForm(t)) return !1;
            var e = $.extend(requestPostData, { loan: $("#money").cleanVal(), maturityYearId: parseInt($("#loan-year").val()), paymentMethodId: parseInt($("#loan-payment-menthod").val()), ageRangeId: parseInt($("#loan-age-range").val()), currentPositionId: parseInt($("#loan-current-job").val()), monthlyIncomeId: parseInt($("#loan-monthly-money").val()), loanFromBankId: parseInt($("#select-bank").val()), interestedRate: parseFloat($("#loanRate").val()), name: $("#loan-name").val().trim(), email: $("#loan-email").val().trim(), phoneNumber: $("#loan-phone").val().trim() });
            $(".ajax-loading").show(), App.Feature.Post("/api/tu-van-vay", e, function(e) { $(".ajax-loading").hide(), e.result ? ($("#vayvonModal .btn-close").click(), App.Feature.AddIframe("/gui-yeu-cau-thanh-cong"), $(".form-my-loans input[type=text]").val(""), t.data("bootstrapValidator").resetForm(), App.UI.Done(messages.listingdetail_khanangvayvon_thanhcong)) : 405 == e.code ? App.UI.Error(e.message) : App.UI.Error("Có lỗi xảy ra trong quá trình ghi nhận. Bạn vui lòng liên hệ với chúng tôi để được tư vấn thêm"), $(".modal-backdrop.fade").hide() })
        });
        var t = window.location.href;
        $("#fb-like").click(function() { FB.ui({ method: "like", action_type: "og.likes", action_properties: JSON.stringify({ object: t }) }, function(t) { console.log(t) }) }), $("#fb-message").click(function() { FB.ui({ method: "send", link: t }, function(t) {}) }), $(function() { $("#request-date, #modal-request-date").datetimepicker({ format: "DD/MM/YYYY HH:mm", minDate: moment(), maxDate: moment() + 112398e4, date: new Date(moment() + 18e5) }), $("#request-date").on("dp.change", function(t) { $(".form-info").bootstrapValidator("revalidateField", "date") }), $("#modal-request-date").on("dp.change", function(t) { $(".form-tuvan-modal").bootstrapValidator("revalidateField", "date") }) }), $("#form-infos-customer").click(function(t) { t.stopPropagation() }), $(".close-form-infos").click(function() { $(this).parent().parent().removeClass("open") }), $(".btn-form-infos").click(function() { $(this).parent().parent().parent().removeClass("open") }), $(document).on("DOMContentLoaded load resize click scroll mousemove touchstart touchend touchmove mouseup", function() {
            $(".bl-detail-listing .lazy").Lazy({
                effect: "fadeIn",
                chainable: !1,
                delay: 0,
                afterLoad: function(t) { t.removeClass("lazy") },
                onFinishedAll: function() { this.config("autoDestroy") || this.destroy() },
                onError: function(t) {
                    var e = t.data("src");
                    console.log('image "' + e + '" could not be loaded'), t.attr("src", "/assets/images/listing-no-image.png")
                }
            })
        }), $("#show-map-listing").click(function() {
            var t, e, i, n, o;
            $("#popup-map-detail").modal(), t = listingGeo[1], e = listingGeo[0], i = document.getElementById("map"), n = { center: new google.maps.LatLng(e, t), zoom: 16 }, o = new google.maps.Map(i, n), new google.maps.Circle({ strokeColor: "#008BB2", fillColor: "#008BB2", map: o, center: new google.maps.LatLng(listingGeo[0], listingGeo[1]), radius: 300 })
        }), $(".bl-360-thumpnail").on("click", function(t) { t.stopPropagation(), $("#modal-show-360").modal("show") }), $.ajax({ url: "/api/get-suggest-loan", method: "POST", data: JSON.stringify(dataLoan), success: function(t) { $("#bankLoanBody").html(t), initLoanForm(), $(".linktoBank .payPerMonth").html($("#pay-loan-ajax").html()) }, error: function(t) { console.error(t) } })
    };
$(".bl-zoom").click(function(t) { $.fancybox.open(propertyImages, {}, $(".syn-slider-2 .owl-item").index($(".syn-slider-2 .owl-item.current"))) }), $(".syn-slider-1 .item").click(function(t) { $(this).hasClass("bl-360-thumpnail") || $.fancybox.open(propertyImages, {}, $(".syn-slider-2 .owl-item").index($(".syn-slider-2 .owl-item.current"))) });
var dataPostSamePriceListing = { listingId: dataListingInfo.listingId, listingTypeList: dataListingInfo.listingTypeId, propertyList: dataListingInfo.propertyTypeId, statusListing: dataListingInfo.stampType, cityIds: dataListingInfo.cityId, districtIds: dataListingInfo.districtId };
if (isProject) var dataPostSameProject = { listingId: dataListingInfo.listingId, listingTypeList: dataListingInfo.listingTypeId, propertyList: dataListingInfo.propertyTypeId, projectId: dataListingInfo.projectId };
setTimeout(function() { ListingByLocationLoader.loadBlockSamePrice.setPlatform("desktop").loadContent("#bl-same-price", dataPostSamePriceListing, function() { isProject && ListingByLocationLoader.loadBlockSameProject.setPlatform("desktop").loadContent("#bl-same-project", dataPostSameProject) }) }, 2e3), $(document).ready(function() { NumberInputUtil.numberToLabel("#money") });
var onChangeInput = function(t) {
    let e = t.target.name;
    NumberInputUtil.numberToLabel("#" + e)
};

function confirmedBookingOTPResult(t) {
    postData = t.postData, postData.verifyCode = t.verifyCode, listingId = t.listingId, cart = t.cart, isDuplicate = t.isDuplicate, curForm = t.curForm, App.Feature.Post("/api/dat-lich-xem", postData, function(t) {
        if (App.UI.hideLoadding(), 410 == t.code) App.UI.ShowFormMessage("#popup-login", "Số điện thoại đã tồn tại trong hệ thống, bạn vui lòng đăng nhập", App.UI.notiTypeError), $("#popup-login").modal("show");
        else if (200 == t.code)
            if (t.result) {
                if ($("#modal-confirm-otp .close").click(), !isLogin) {
                    var e = { id: parseInt(listingId) },
                        i = postData.date;
                    null == postData.date && (i = Date.now());
                    var n = !1;
                    if (cart.scheduled.find(t => { t.id == listingId && (t.scheduleTime = i, isDuplicate || cart.fav.push(e), n = !0) }), !n && !isDuplicate) {
                        var o = { id: parseInt(listingId), scheduleTime: i };
                        isDuplicate || (cart.fav.push(e), cart.scheduled.push(o))
                    }
                    Cart.updateCart(cart)
                }
                $(".bl-info-customer input[type=text]").val(""), curForm.data("bootstrapValidator").resetForm(), console.log(t), window.location.href = "/thank-you?from=dlx"
            } else App.UI.Error("Có lỗi xảy ra trong quá trình ghi nhận. Bạn vui lòng liên hệ với chúng tôi để được tư vấn thêm");
        else 9999 == t.code && $("#modal-confirm-otp .close").click(), $(".otp-item").val(""), App.UI.Error(t.message)
    }, { text: "Đang gửi dữ liệu..." })
}

function confirmedBookingOTPResultModal(t) { postData = t.postData, postData.verifyCode = t.verifyCode, curForm = t.curForm, App.Feature.Post("/api/dat-lich-xem", postData, function(t) { App.UI.hideLoadding(), 410 == t.code ? (App.UI.ShowFormMessage("#popup-login", "Số điện thoại đã tồn tại trong hệ thống, bạn vui lòng đăng nhập", App.UI.notiTypeError), $("#popup-login").modal("show")) : t.result ? ($("#modal-confirm-otp .close").click(), $(".bl-info-customer input[type=text]").val(""), curForm.data("bootstrapValidator").resetForm(), window.location.href = "/thank-you?from=dlx") : (9999 == t.code && $("#modal-confirm-otp .close").click(), App.UI.Error(t.message), $(".otp-item").val("")) }, { text: "Đang gửi dữ liệu..." }) }

function initLoanForm() {
    $("#bankLoanBody .btnModal").click(function(t) {
        t.preventDefault();
        var e = $(this).data("modal"),
            i = $(this).parents(".myModal");
        $("body").toggleClass("showModal"), i.length > 0 ? i.removeClass("active") : $("div#" + e).toggleClass("active")
    }), $(".myModal .btn-close").click(function() { $("body").removeClass("showModal") }), $(".form-my-loans, .form-info, .form-tuvan-modal").bootstrapValidator({ message: "Giá trị chưa đúng", excluded: [":hidden"], feedbackIcons: { valid: "glyphicon glyphicon-ok", invalid: "glyphicon glyphicon-remove", validating: "glyphicon glyphicon-refresh" }, fields: { name: { validators: { notEmpty: { message: messages.listingdetail_datlichxem_name_empty } } }, phone: { validators: { notEmpty: { message: messages.listingdetail_datlichxem_phone_empty }, stringLength: { message: messages.listingdetail_datlichxem_phone_wrongformat, min: 10, max: 10 } } }, email: { validators: { emailAddress: { message: messages.listingdetail_datlichxem_email_wrongformat } } }, date: { validators: { timeLate: { message: "Vui lòng nhập ngày giờ trong tương lai" } } } } }), $("#money").on("input", function() {
        var t = parseInt(App.Feature.ExtractNumber($(this).val()));
        t > maxLoan && (t = $("#money").masked(maxLoan), $(this).val(t))
    }), $("#money").mask("#.##0", { reverse: !0 }), $(document).on("change", "#loan-year", function() { calculatorLoan() }), $("#money").change(function() {
        var t = parseInt($(this).cleanVal() || 0);
        (t && t > maxLoan || !t) && $(this).val($(this).masked(maxLoan)), calculatorLoan()
    }), $("#select-bank").change(function() {
        var t = parseFloat($(this).find("option:selected").attr("rate"));
        $("#loanRate").val(t + "%");
        var e = JSON.parse($(this).find("option:selected").attr("years"));
        return renderLoanYear(e), calculatorLoan(), !1
    })
}
var callbackConfirmOTP, callbackConfirmOTPParams, countdownInterval, confirmPhoneNumber = "";

function initConfirmPhoneOTP() {
    $(".otp-item").focus(function(t) { $(this).get(0).select() }), $(".otp-item").bind("change paste keyup", function(t) {
        var e = $(this).val().trim();
        if (6 == e.length && Number(e)) {
            for (var i = 1; i < 7; i++) $('input[name="otp_' + i + '"]').val(e.charAt(i - 1));
            $('input[name="otp_1"]').focus()
        }
    }), $(".otp-item").keyup(function(t) { 1 == $(this).val().trim().length && $(this).next(".otp-item").focus() }), $("#confirm-otp").click(function() {
        if (!$(this).hasClass("register")) {
            var t = [];
            if (t.push($('input[name="otp_1"]').val().trim()), t.push($('input[name="otp_2"]').val().trim()), t.push($('input[name="otp_3"]').val().trim()), t.push($('input[name="otp_4"]').val().trim()), t.push($('input[name="otp_5"]').val().trim()), t.push($('input[name="otp_6"]').val().trim()), 6 != (t = t.join("")).length) return App.UI.Error("Mã không đúng"), !1;
            0 != confirmPhoneNumber.length && Number(confirmPhoneNumber) ? (callbackConfirmOTPParams.verifyCode = t, callbackConfirmOTP(callbackConfirmOTPParams)) : App.UI.Error("Thông tin số điện thoại nhận mã không đúng")
        }
    }), $("#resend-otp").click(function(t) {
        var e = { phone: confirmPhoneNumber };
        App.Feature.Post("/api/resend-otp-v4", e, function(t) { t.result ? ($("#modal-confirm-otp").modal({ backdrop: "static", keyboard: !1 }), resetCountdown()) : (9999 != t.code ? $("#modal-confirm-otp").modal({ backdrop: "static", keyboard: !1 }) : (clearInterval(countdownInterval), $("#timeout").hide(), $("#resend-otp").removeAttr("disabled")), App.UI.Error(t.message)) }, !0), console.log(e), resetCountdown()
    }), $("#modal-confirm-otp .close").click(function() { clearInterval(countdownInterval), $("#timeout").hide() })
}
$(document).ready(function() { TrackUserRoute.init(), reloadAssets(version), App.UI.inputAllowNumber([".otp-item"], !1), initConfirmPhoneOTP() });
var TrackUserRoute = function() {
    var t = function() { let t = window.sessionStorage.getItem("visitedList"); return t = t ? JSON.parse(t) : [] },
        e = function(t) { t = JSON.stringify(t), window.sessionStorage.setItem("visitedList", t) };
    return {
        init: function() {
            let i = t(),
                n = { url: window.location.href, visitedDate: Date.now() };
            i.push(n), e(i), i[i.length - 1].visitedDate - i[0].visitedDate >= 864e5 && window.sessionStorage.setItem("visitedList", [])
        },
        getVisitedList: t,
        setVisitedList: e,
        clearVisitedList: function() { window.sessionStorage.setItem("visitedList", []) }
    }
}();

function showConfirmPhoneOTPModal(t, e, i = null) { App.UI.hideLoadding(), $("#contactModal .btn-close").click(), confirmPhoneNumber = t, callbackConfirmOTP = e, callbackConfirmOTPParams = i, App.UI.isMobile() && initConfirmPhoneOTP(), $("#receive_phone_number").html(confirmPhoneNumber), $("#resend-otp").click() }

function resetCountdown() {
    if ($("#timeout").is(":hidden")) {
        $("#resend-otp").attr("disabled", !0), $("#timeout").show(), $(".otp-item").val(""), $(".otp-item:eq(0)").focus();
        var t = 60;
        $("#modal-confirm-otp #timeout").show(), $("#modal-confirm-otp #timeout").html("sau 01:00"), countdownInterval = setInterval(() => { $("#modal-confirm-otp #timeout").html("sau 00:" + ("0" + --t).slice(-2)), t < 1 && (clearInterval(countdownInterval), $("#timeout").hide(), $("#resend-otp").removeAttr("disabled")) }, 1e3)
    }
}

function confirmedOTPResult(t) { dataSend = t, App.Feature.Post("/api/request-find-home", dataSend, function(t) { $("#contactModal").children(".overlay").click(), $("body").removeClass("showModal"), 200 == t.code ? ($("#modal-confirm-otp .close").click(), $("#contactModal").find("input").val(null), $("#contactModal").find("#ftc-info-district").val(null), App.UI.hideLoadding(), App.UI.Done(messages.home_nhucau_success), $("#ftc-send-infos-popup").prop("disabled", !1)) : (App.UI.hideLoadding(), 410 == t.code ? (App.UI.ShowFormMessage("#popup-login", "Số điện thoại đã tồn tại trong hệ thống, bạn vui lòng đăng nhập", App.UI.notiTypeError), $("#popup-login").modal("show")) : (9999 == t.code && $("#modal-confirm-otp .close").click(), $(".otp-item").val(""), App.UI.Error(t.message), $("#ftc-send-infos-popup").prop("disabled", !1))) }) }
$("#header .menu-top-header li a").each(function() { $(this).attr("href") == "/" + url_active && $(this).parents("li").addClass("active") }), $(document).ready(function() {
    isLogin && Mycollection.init(), initSpanEyes(), $("#menu-toggle").click(function(t) { t.preventDefault(), $("body").addClass("scroll-page"), $("#wrapper").toggleClass("toggled") });
    var t = !1;
    $(window).on("DOMContentLoaded load resize scroll mousemove touchstart touchend touchmove", function() {
        $(".lazy").each(function() {
            isElementInViewport(this) && $(this).Lazy({
                effect: "fadeIn",
                chainable: !1,
                delay: 0,
                afterLoad: function(t) { t.removeClass("lazy") },
                onFinishedAll: function() { this.config("autoDestroy") || this.destroy() },
                onError: function(t) {
                    t.data("src");
                    t.attr("src", "/assets/images/listing-no-image.png")
                }
            })
        }), t || (setTimeout(function() {
            var t, e, i, n, o;
            window.fbAsyncInit = function() { FB.init({ appId: "535618670209689", cookie: !0, xfbml: !0, version: "v3.1" }) }, "undefined" == typeof FB && (t = document, e = "script", i = "facebook-jssdk", o = t.getElementsByTagName(e)[0], t.getElementById(i) || ((n = t.createElement(e)).id = i, n.src = "//connect.facebook.net/vi_VN/sdk.js", o.parentNode.insertBefore(n, o)))
        }, 1e3), t = !0)
    });
    var e = !1;
    $(document).on("mouseup mousedown mousemove touchstart", function() { e || (setTimeout(function() { $("head").append('<link rel="stylesheet" type="text/css" href="/assets/css/svg-icons-lazy-pc.css?v=' + version + '" async>') }, 1e3), e = !0) }), $("#sidebar-wrapper ul li a").each(function() { $(this).attr("href") != "/" + url_active + "?src=menu_side" && $(this).attr("href") != "/" + url_active + "?src=menu_top" && $(this).attr("href") != "/" + url_active || $(this).parents("li").addClass("active"), $(".sub-menu").children().hasClass("active") && $(".sub-menu").parent().removeClass("active") }), $(".change-image-acount").click(function() {
        $("input[name='file-image-acount']").trigger("click"), $("input[name='file-image-acount']").unbind("change").change(function(t) {
            App.Feature.uploadImage($("input[name='file-image-acount']"), t, function(t) {
                if ($(".text-img").addClass("hidden"), t) {
                    $(".change-image-acount").find(".bl-img").css({ background: "url(" + t.link + ")" }), $("#form-my-acount").find('input[name="image"]').val(t.link);
                    var e = { photo: t.link };
                    App.Feature.Post("/api/update-avatar", e, function(t) { t.result ? ($("#button-bl-post img").attr("src", e.photo), App.UI.Done("Cập nhật hình ảnh thành công", function() { console.log(t) })) : App.UI.Error("Đã có lỗi xảy ra !") }, !0)
                }
            }, "/api/upload?type=avatar")
        })
    }), $(document).on("click", "#ftc-buy-request", function() { $("#ftc-info-request").html(""), $("#ftc-info-request").html($("#ftc-info-request-buy").html()) }), $(document).on("click", "#ftc-rent-request", function() { $("#ftc-info-request").html(""), $("#ftc-info-request").html($("#ftc-info-request-rent").html()) });
    $(document).on("click", "#ftc-send-infos-popup", function() {
        if (App.UI.showLoadding(), ! function(t) { t.removeData("bootstrapValidator"), t.bootstrapValidator({ message: "Giá trị chưa đúng", excluded: [":hidden"], feedbackIcons: { valid: "glyphicon glyphicon-ok", invalid: "glyphicon glyphicon-remove", validating: "glyphicon glyphicon-refresh" }, fields: { name: { validators: { notEmpty: { message: messages.home_nhucau_ten_empty } } }, district: { validators: { notEmpty: { message: messages.home_nhucau_quan_empty } } }, phone: { message: "", validators: { notEmpty: { message: messages.home_nhucau_phone_empty }, stringLength: { message: messages.home_nhucau_phone_wrongformat, min: 10, max: 10 } } }, price: { message: "", validators: { notEmpty: { message: messages.home_nhucau_gia_empty } } }, request: { message: "", validators: { notEmpty: { message: messages.home_nhucau_nhucau_empty } } }, email: { validators: { emailAddress: { message: messages.home_nhucau_email_wrongformat } } } } }); var e = t.data("bootstrapValidator"); return e.validate(), e.isValid() }($(this).closest("#contactModal"))) return App.UI.hideLoadding(), $("#ftc-send-infos-popup").prop("disabled", !1), !1;
        var t = [];
        t.push($("#ftc-info-district").val());
        var e = { customerName: $("#ftc-info-name").val(), customerPhone: $("#ftc-info-phone").val(), email: $("#ftc-info-email").val(), listingTypeId: parseInt($(".ftc_type_listing:checked").val()), propertyTypeId: parseInt($("#ftc-info-request").val()), districtIds: t, sourceId: 2, requestText: $("#ftc-info-request option:selected").text(), formIdMailChimp: 1679 };
        let i = TrackUserRoute.getVisitedList();
        i && (e.visitList = i), isLogin ? confirmedOTPResult(e) : showConfirmPhoneOTPModal(e.customerPhone, confirmedOTPResult, e)
    }), $(".btnSubscribeEmail").click(function() {
        if (function(t) { t.removeData("bootstrapValidator"), t.bootstrapValidator({ message: "Giá trị chưa đúng", excluded: [":hidden"], feedbackIcons: { valid: "glyphicon glyphicon-ok", invalid: "glyphicon glyphicon-remove", validating: "glyphicon glyphicon-refresh" }, fields: { email: { validators: { notEmpty: { message: messages.home_nhucau_email_empty }, emailAddress: { message: messages.home_nhucau_email_wrongformat } } } } }); var e = t.data("bootstrapValidator"); return e.validate(), e.isValid() }($(this).closest("#email-subcribe"))) {
            var t = $("#email-subcribe .textinput").val(),
                e = $(".propzy-newsletter"),
                i = { email: t, formIdMailChimp: 1666 };
            e.addClass("show-text"), e.text("Vui lòng chờ..."), App.Feature.Post("/api/subcribe-email-news", i, function(t) { t.result ? (e.addClass("show-text"), e.text("Đăng ký email thành công."), setTimeout(function() { e.removeClass("show-text").animate({ duration: 500 }), $("#email-subcribe .textinput").val("") }, 5e3)) : (e.addClass("show-text"), e.text("Đã có lỗi xảy ra, bạn vui lòng thử lại"), setTimeout(function() { e.removeClass("show-text").animate({ duration: 500 }) }, 5e3), console.log("error", thrownError), console.log("error xhr", xhr)) })
        }
    }), "function" == typeof startApp && startApp()
});