/**
 *
 * @authors Benjamin (zuojj.com@gmail.com)
 * @date    2016-12-20 13:17:49
 * @version $Id$
 */

function addEV(e, t, n) {
    window.attachEvent ? e.attachEvent("on" + t, n) : window.addEventListener && e.addEventListener(t, n, !1)
}

function _aMC(e) {
    for (var t = e, n = -1; t = t.parentNode;)
        if (n = parseInt(t.getAttribute("id")), n > 0) return n
}

function al_c(e) {
    for (;
        "TABLE" != e.tagName;) e = e.parentNode;
    return e.getAttribute("id")
}

function al_c2(e, t) {
    for (; t--;)
        for (;
            "TABLE" != (e = e.parentNode).tagName;);
    return e.getAttribute("id")
}

function c(e) {
    var t = e.p1;
    if (!("alop" != e.fm || "rsv_xpath" in e || t && "6677" == G(t).getAttribute("srcid"))) return !0;
    !t || "p5" in e || (e.p5 = t);
    var n = window.document.location.href,
        o = "",
        i = "",
        s = "",
        r = window["BD_PS_C" + (new Date).getTime()] = new Image;
    for (v in e) {
        switch (v) {
            case "title":
                i = e[v].replace(/<[^<>]+>/g, ""), i && i.length > 100 && (i = i.substring(0, 100)), i = encodeURIComponent(i);
                break;
            case "mu":
            case "url":
                i = escape(e[v]);
                break;
            default:
                i = e[v]
        }
        o += "&" + v + "=" + i
    }
    if (!("mu" in e)) try {
        "p2" in e && G(e.p1).getAttribute("mu") && "pl" != e.fm && (s = "&mu=" + escape(G(e.p1).getAttribute("mu")))
    } catch (a) {}
    if (window.bds && bds.comm) {
        var c = bds.comm.ubsurl + "?q=" + bds.comm.queryEnc + o + s + "&rsv_sid=" + bds.comm.sid + "&cid=" + bds.comm.cid + "&qid=" + bds.comm.queryId + "&t=" + (new Date).getTime();
        if (bds.comm.inter && (c = c + "&rsv_inter=" + bds.comm.inter), bds.comm.seinfo && bds.comm.seinfo.rsv_pstg && (c = c + "&rsv_pstg=" + bds.comm.seinfo.rsv_pstg), bds.comm.cftime && 0 != bds.comm.cftime && (c = c + "&rsv_cftime=" + bds.comm.cftime), c += bds.comm.resultPage ? "&rsv_iorr=1" : "&rsv_iorr=0", bds.comm.tn && (c = c + "&rsv_tn=" + bds.comm.tn), bds.comm.indexSid && (c += "&rsv_isid=" + bds.comm.indexSid), bds.comm.lastVoiceQuery && (c += "&rsv_lavo=" + encodeURIComponent(bds.comm.lastVoiceQuery)), Cookie.get("ispeed") && (c += "&rsv_ispeed=" + Cookie.get("ispeed")), /ssl_sample/.test(location.href)) {
            var d = location.href.match(/ssl_sample=[^=&]+/i);
            c += "&rsv_" + d[0]
        }
        if (/ssl_s=/.test(location.href)) {
            var d = location.href.match(/ssl_s=[^=&]+/i);
            c += "&rsv_" + d[0]
        }
        c += "&rsv_ssl=" + ("https:" === location.protocol ? 1 : 0), c += "&path=" + encodeURIComponent(n), c += "&rsv_did=" + (bds.comm.did ? bds.comm.did : ""), r.src = c
    }
    return !0
}

function TagQ(e, t) {
    return t.getElementsByTagName(e)
}

function h(e) {
    e.style.behavior = "url(#default#homepage)", e.setHomePage(bds.comm.domain);
    var t = window["BD_PS_C" + (new Date).getTime()] = new Image;
    t.src = bds.comm.ubsurl + "?fm=hp&tn=" + bds.comm.tn + "&t=" + (new Date).getTime()
}

function setHeadUrl(e) {
    var t = G("kw").value;
    t = encodeURIComponent(t);
    var n = e.href;
    n = n.replace(new RegExp("(" + e.getAttribute("wdfield") + "=)[^&]*"), "$1" + t), e.href = n
}

function G(e) {
    return document.getElementById(e)
}

function ns_c_pj(e, t) {
    var n = encodeURIComponent(window.document.location.href),
        o = "",
        i = "",
        s = "",
        r = bds && bds.comm && bds.comm.did ? bds.comm.did : "";
    wd = bds.comm.queryEnc, nsclickDomain = bds && bds.util && bds.util.domain ? bds.util.domain.get("http://nsclick.baidu.com") : "http://nsclick.baidu.com", img = window["BD_PS_C" + (new Date).getTime()] = new Image, src = "";
    for (v in e) {
        switch (v) {
            case "title":
                i = encodeURIComponent(e[v].replace(/<[^<>]+>/g, ""));
                break;
            case "url":
                i = encodeURIComponent(e[v]);
                break;
            default:
                i = e[v]
        }
        o += v + "=" + i + "&"
    }
    if (s = "&mu=" + n, src = nsclickDomain + "/v.gif?pid=201&" + (t || "") + o + "path=" + n + "&wd=" + wd + "&rsv_sid=" + (bds.comm.ishome && bds.comm.indexSid ? bds.comm.indexSid : bds.comm.sid) + "&rsv_did=" + r + "&t=" + (new Date).getTime(), "undefined" != typeof Cookie && "undefined" != typeof Cookie.get) Cookie.get("H_PS_SKIN") && "0" != Cookie.get("H_PS_SKIN") && (src += "&rsv_skin=1");
    else {
        var a = "";
        try {
            a = parseInt(document.cookie.match(new RegExp("(^| )H_PS_SKIN=([^;]*)(;|$)"))[2])
        } catch (c) {}
        a && "0" != a && (src += "&rsv_skin=1")
    }
    return img.src = src, !0
}

function ns_c(e, t) {
    return t === !0 ? ns_c_pj(e, "pj=www&rsv_sample=1&") : ns_c_pj(e, "pj=www&")
}

function escapeHTML(e) {
    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/ /g, "&nbsp;").replace(/"/g, "&#34;").replace(/'/g, "&#39;")
}

function initPreload(e) {
    function t() {
        Cookie.set("ISSW", "1", null, null, new Date((new Date).getTime() + 3e5))
    }

    function n(e, t) {
        t = t || 3, Cookie.set("ISWR", e, null, null, new Date((new Date).getTime() + 1e3 * t))
    }

    function o(e) {
        e && "string" == typeof e && (e = $.parseJSON(e)), e && e.length && $.each(e, function(e, t) {
            if (0 === t.indexOf(nt.protocol)) {
                var n = new Image;
                n.src = t
            }
        })
    }

    function i(e) {
        return $.trim(e).replace(/\s+/g, " ")
    }

    function s(e) {
        if ("string" == typeof e) {
            var t, n = 0;
            for (t = 0; t < e.length; t++) n += e.charCodeAt(t);
            return n
        }
        return 0
    }

    function r(e) {
        var t, n, o, i, s = {};
        e.indexOf("?") > -1 ? (o = e.split("?"), i = o[1]) : i = e, t = i.indexOf("&") > -1 ? i.split("&") : new Array(i);
        for (var r = 0; r < t.length; r++) try {
            t[r] = t[r].indexOf("=") > -1 ? t[r] : t[r] + "=", n = t[r].split("="), s[n[0]] = decodeURIComponent(n[1].replace(/\+/g, " "))
        } catch (a) {}
        return s
    }

    function a(e) {
        function t(e) {
            if (document.all) $("style[data-for='result']").get(0).styleSheet.cssText += e;
            else {
                var t = document.createElement("style");
                t.type = "text/css", t.appendChild(document.createTextNode(e)), t.setAttribute("data-for", "result"), document.getElementsByTagName("HEAD")[0].appendChild(t)
            }
        }

        function n() {
            H.css({
                filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=95)",
                opacity: .95
            }), F || (t(".slowmsg{z-index:301;background-color:#fff;border:1px solid #f0f0f0;position:fixed;_position:absolute;top:144px;left:212px;height:95px;width:360px;box-shadow:0 0 5px rgba(0,0,0,0.05)}.slowmsg .ball{width:40px;margin:41px auto 0;position:relative;}.slowmsg .b{left:20px;position:absolute;width:10px;height:10px;-moz-border-radius: 50%;-webkit-border-radius: 50%;border-radius: 50%;}"), F = $('<div class="slowmsg"><div class="ball"><div class="b"/><div class="b"/><div class="b"/></div></div>'), F.find(".b").each(function(e, t) {
                var n = [
                        [0, 40],
                        [20, 20],
                        [40, 0]
                    ][e],
                    o = ["rgb(55,137,250)", "rgb(99,99,99)", "rgb(235,67,70)"],
                    i = 0;
                $(t).css({
                        "background-color": o[e]
                    }),
                    function s() {
                        return B ? ($(t).animate({
                            left: n[i % 2]
                        }, {
                            duration: 800,
                            easing: "swing",
                            progress: function(n, s) {
                                s >= .5 && $(t).css({
                                    "background-color": o[(i + e) % 3]
                                })
                            },
                            complete: function() {
                                s()
                            }
                        }), void i++) : void setTimeout(s, 400)
                    }()
            })), F.appendTo(Zt), ns_c({
                pj_name: "loading_msg"
            })
        }

        function o() {
            var e, t = (new Date).getTime();
            Cookie.set("rsv_jmp_slow", t), Cookie.set("WWW_ST", t, null, null, new Date(t + 3e4)), e = nt.href + (nt.href.indexOf("?") > 0 ? "&" : "?") + "rsv_jmp=slow", nt.replace(e)
        }
        if (!X) {
            var e = $.extend({
                    top: 93,
                    "z-index": 300
                }, e),
                i = $(window).height();
            H || (H = $("<div id='_mask'/>")), H.css({
                filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)",
                opacity: .3,
                position: "absolute",
                background: "#fff",
                "z-index": e["z-index"],
                top: e.top + "px",
                left: "0"
            }), X = !0, H.width(Zt.width()), H.height(Math.max(i, Zt.height()) - e.top), H.appendTo(Zt), $(window).scrollTop(), B = setTimeout(n, 3e3), G = setTimeout(o, 7e3), Q = function() {
                B && (clearTimeout(B), B = setTimeout(n, 3e3)), G && (clearTimeout(G), G = setTimeout(o, 7e3))
            }
        }
    }

    function d() {
        H && X && (X = !1, H.remove(), F && F.remove(), B && (clearTimeout(B), B = !1), W && W.remove(), G && (clearTimeout(G), G = !1))
    }

    function l(e, t, n) {
        n || (n = 0);
        var o = e.length;
        for (0 > n && (n = o + n); o > n; n++)
            if (e[n] === t) return n;
        return -1
    }

    function u(e, t, n) {
        var o = t.find("script:not([src])"),
            i = 0,
            s = $.globalEval;
        $.globalEval = function(e) {
            window.currentScriptElem = o[i], i++;
            try {
                s.apply($, arguments)
            } catch (t) {
                window.console && console.debug && (console.debug(e), console.debug(t))
            }
        }, "insertBefore" == n ? t.insertBefore(e) : e.append(t), window.currentScriptElem = void 0, $.globalEval = s
    }

    function m(e) {
        try {
            e()
        } catch (t) {
            window.console && console.debug && console.debug(t), J(t.toString())
        }
    }

    function p(e, t) {
        function n(e) {
            if ("object" == typeof e) {
                var t = {};
                for (a in e) e.hasOwnProperty(a) && (t[a] = e[a])
            } else t = e;
            return t
        }
        if (!p.__init) {
            p.__init = !0;
            var o = ["wd", "pn", "nojc", "cl", "cq", "srcid", "gpc", "tfflag", "si", "sl_lang", "rsv_srlang", "rqlang"],
                i = ["wd", "cl", "ct", "tn", "rn", "ie", "f", "lm", "si", "gpc", "tfflag", "usm", "z", "ch", "sts", "vit", "dsp", "trh", "trb", "tre", "la", "lo", "st", "nojc", "haobd", "rtt", "bsst", "gvideo", "__eis", "__eist", "oq", "fenlei", "sid", "rsv_idx", "rsv_stat", "rsv_bp", "rqlang"],
                s = ["w", "word"];
            p.prototype.clone = function(e) {
                var t = new p(n(this.params));
                if ("object" == typeof e)
                    for (var o in e) e.hasOwnProperty(o) && l(i, o) >= 0 && t.p(o, e[o]);
                return t
            }, p.prototype.h = function(e) {
                this.header_params = this.header_params || {};
                for (var t in e) this.header_params[t] = e[t];
                return this
            }, p.prototype.buildHeaders = function(e) {
                e && this.setHeader(e);
                var t = {};
                for (var n in this.header_params)
                    if ("object" == typeof this.header_params[n]) {
                        var o = [];
                        for (var i in this.header_params[n]) {
                            var s = this.header_params[n][i];
                            s instanceof Array && (s = s.join("|")), o.push(i + "=" + s)
                        }
                        t[n] = o.join("&")
                    } else t[n] = this.header_params[n];
                return t
            }, p.prototype.buildSearchUrl = function(e) {
                return nt.protocol + "//" + nt.host + nt.pathname + nt.search + "#" + this.buildQueryString(e)
            }, p.prototype.buildSyncSearchUrl = function(e) {
                return nt.protocol + "//" + nt.host + "/s?" + this.buildQueryString(e)
            }, p.prototype.buildQueryString = function(e) {
                var t = n(this.params);
                if ("object" == typeof e)
                    for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                var i = "";
                t.wd = $.limitWd(t.wd);
                for (param in t) param && t.hasOwnProperty(param) && "" !== t[param] && (i += param + "=" + encodeURIComponent(t[param]).replace(/'/g, "%27") + "&");
                return i.substr(0, i.length - 1)
            }, p.prototype.equals = function(e) {
                if (!e || !e.p) return !1;
                for (var t = 0; t < o.length; t++) {
                    var n = o[t];
                    if ("pn" == n) {
                        var i = this.p(n) ? this.p(n) : "0",
                            s = e.p(n) ? e.p(n) : "0";
                        if (i != s) return !1
                    } else if (this.p(n) != e.p(n)) return !1
                }
                return !0
            }, p.prototype.p = function(e, t) {
                return l(s, e) >= 0 && (e = "wd"), void 0 === t ? this.params[e] : (this.params[e] = t, this)
            }, p.prototype.hashCode = function() {
                var e = [];
                if (!this.p("wd")) return "";
                for (var t = 0; t < o.length; t++) {
                    var n = o[t];
                    e.push("pn" != n || this.p(n) ? this.p(n) : "0")
                }
                return e.join("  ")
            }, p.prototype.filterOtherParams = function() {
                for (var e in this.params) this.params.hasOwnProperty(e) && l(i, e) < 0 && delete this.params[e]
            }, p.prototype.wdSameName = function() {
                var e;
                for (e = 0; e < s.length; e++) this.params && this.params[s[e]] && (this.params.wd = this.params[s[e]], delete this.params[s[e]])
            }
        }
        if (this.params = {}, !t) {
            qt = vt.serializeArray();
            for (var r = 0; r < qt.length; r++) this.p(qt[r].name) || this.p(qt[r].name, qt[r].value)
        }
        if ("object" == typeof e)
            for (var a in e) e.hasOwnProperty(a) && this.p(a, e[a]);
        this.wdSameName()
    }

    function f(e) {
        function t(e) {
            "string" == typeof e && (_[e] = Date.now ? Date.now() : +new Date)
        }

        function n(e, t) {
            "string" == typeof e && (v[e] = t)
        }

        function o() {
            v.cus_net = _.net > _.st && _.net - _.st - v.cus_srv > 0 ? _.net - _.st - v.cus_srv : 1, v.cus_tti2 = _.dom > _.st ? _.dom - _.st : 1, v.cus_frdom = _.dom - _.pt, v.cus_fs = _.fs > _.st ? _.fs - _.st : v.cus_tti2, v.cus_frext = v.cus_fs - v.cus_tti2
        }

        function i(e) {
            var t = "";
            for (var n in e) n && e.hasOwnProperty(n) && "" !== e[n] && (t += "&" + n + "=" + encodeURIComponent(e[n]));
            return t
        }

        function s(e) {
            var e = [];
            for (var t in x) e.push(x[t]);
            var n = k = $.when.apply($, e);
            k.always(function() {
                n === k && m()
            })
        }

        function r() {
            var e = Array.apply(null, arguments);
            if (!(!e.length > 0))
                for (var t = 0; t < e.length; t++) x[e[t]] = $.Deferred()
        }

        function a() {
            n("qid", e.qid), n("cus_q", e.real_wd || e.env.p("wd")), n("sid", bds.comm.sid), n("cus_newindex", bds.comm.newindex), n("supportis", bds.comm.supportis)
        }

        function c() {
            e = null, C = null
        }

        function d(e) {
            x[e].resolve(), "swap_end" == e && setTimeout(function() {
                d("swap_end_5s")
            }, 5e3)
        }

        function l() {
            r("swap_end", "swap_end_5s"), r("confirm"), s()
        }

        function u() {
            l(), _.st = 0, _.fs = 0, _.dom = 0
        }

        function m() {
            var e = Math.random(),
                t = /21662|21663|21213|21215|21216|21517|21518|21307|21306|21340|21339/,
                s = e > .51 && .52 > e;
            if (e > .51 && .52 > e || t.test(bds.comm.sid) && e > 0 && .2 > e || bds.comm.intrSid) {
                t.test(bds.comm.sid) && (s ? n("issam", 2) : n("issam", 1)), o(), h(C), g(C), n("srvInfo", f()), n("sysv", navigator.appMinorVersion), a(), T.fire();
                var r = "//www.baidu.com/nocache/fesplg/s.gif?log_type=sp",
                    c = "";
                c += i(w) + i(v);
                var d = r + c,
                    l = new Image,
                    u = "_LOG_" + (new Date).getTime();
                l.onload = function() {
                    delete window[u]
                }, window[u] = l, l.src = d
            }
        }

        function p(e) {
            C = e, e.find("img").one("load", function() {
                var e = $(this).offset(),
                    o = e.top,
                    i = e.left,
                    s = "";
                if (D > o && o > 0) {
                    t("fs");
                    var r = _.fs - _.dom;
                    y.push(o + "_" + i + "_" + r), s = $(this).attr("data-src") || /^http/.test($(this).attr("src")) ? $(this).attr("data-src") || $(this).attr("src") : "base64", n("ic_lis", s)
                }
            })
        }

        function f() {
            var e, t, n = $.parseJSON(bds.comm.speedInfo),
                o = [];
            for (var i in n) {
                if (e = n[i], t = e.ModuleId + "_" + e.TimeCost + "_" + e.TimeSelf + "_" + e.Idc, e.hasOwnProperty("SubProcess"))
                    for (var s in e.SubProcess) t += "," + e.SubProcess[s].ProcessId + "_" + e.SubProcess[s].TimeCost + "_" + e.SubProcess[s].isHitCache + "_" + e.SubProcess[s].Idc;
                o.push(t)
            }
            return encodeURIComponent(o.join("|"))
        }

        function h(e) {
            for (var t = 0, o = e.find("img"), i = e.find("#content_left").find("img"), s = 0, r = 0, a = 0; a < o.length; a++) r = o.eq(a).offset().top, D > r && r > 0 && t++;
            n("cus_ic", o.length), n("cus_extic", t), n("cus_extlic", s), n("cus_icl", i.length), n("cus_icr", e.find("#content_right").find("img").length), n("img_info", y.join(",")), n("psize", e.html().length)
        }

        function g(e) {
            var t = {},
                o = [],
                i = e.find("#content_left,#con-ar").children("*[tpl]"),
                s = "";
            if (i.length > 0)
                for (var r = 0; r < i.length; r++) s = i.eq(r).attr("tpl"), t.hasOwnProperty(s) || (t[s] = 1, o.push(s));
            o.length > 0 && n("tplp", o.join("|"))
        }

        function b(e) {
            T.add(e)
        }
        var w = {
                product_id: 45,
                page_id: 317,
                page_type: 0
            },
            v = {},
            _ = {
                st: 0,
                pt: 0,
                net: 0,
                dom: 0,
                fs: 0
            },
            y = [],
            T = $.Callbacks(),
            x = {},
            k = null,
            C = null,
            D = 600;
        return l(), {
            trigger: d,
            mark: t,
            setParam: n,
            onSendlog: b,
            bindImgLoad: p,
            destroy: c,
            init: u
        }
    }

    function h(e, t) {
        e && (t = $.extend(e.log, t))
    }

    function g() {
        if (bds.comm.seinfo) {
            bds.comm.seinfo.rsv_pre = encodeURIComponent(b()), bds.comm.seinfo.rsv_reh = reh_rec(), bds.comm.seinfo.rsv_scr = scr_rec();
            var e = null;
            if (bds && bds.comm && bds.comm.personalData) try {
                "string" == typeof bds.comm.personalData && (bds.comm.personalData = $.parseJSON(bds.comm.personalData)), e = bds.comm.personalData ? bds.comm.personalData.fullSkinName && bds.comm.personalData.fullSkinName.value : null
            } catch (t) {
                e = null
            }
            if (e && (bds.comm.seinfo.rsv_skin = e), bds.comm.seinfo.rsv_psid = $.getCookie("BIDUPSID"), bds.comm.seinfo.rsv_pstm = $.getCookie("PSTM"), bds.comm.seinfo.rsv_idc = function() {
                    var e = bds.comm.speedInfo || [];
                    try {
                        e = $.parseJSON(e)
                    } catch (t) {
                        e = []
                    }
                    for (var n = 0, o = e.length; o > n; n++)
                        if (9540 == e[n].ModuleId) return e[n].Idc || "";
                    return ""
                }(), c(bds.comm.seinfo), "ON" === bds.comm._se_click_track_flag) {
                var n = new Image,
                    o = "//www.baidu.com/s?wd=" + bds.comm.queryEnc + "&qid=" + bds.comm.queryId + "&lts=91";
                n.src = o
            }
        }
        if (bds.comm.cgif) {
            var i = bds.comm.cgifimg = new Image;
            i.src = bds.comm.cgif
        }! function() {
            var e = Math.random(),
                t = [],
                n = function(e, n) {
                    var i, s = $(e),
                        r = "";
                    if ("link" != e || "stylesheet" == s.attr("rel"))
                        for (var a = 0; a < s.length; a++) i = s.eq(a), r = i.attr(n), o(r) && t.push(encodeURIComponent(r))
                },
                o = function(e) {
                    return /^http:\/\//.test(e) ? !0 : !1
                },
                i = function() {
                    var e = "//www.baidu.com/nocache/fesplg/s.gif?log_type=hm",
                        n = "";
                    n += "&q=" + bds.comm.query, n += "&error=" + t.join(",");
                    var o = new Image,
                        i = "_HM_LOG_" + (new Date).getTime();
                    o.onload = function() {
                        delete window[i]
                    }, window[i] = o, o.src = e + n
                },
                s = function(e) {
                    var t = Math.floor(2 * Math.random()),
                        e = e,
                        n = {
                            www: "https://www.baidu.com/nocache/pdns/az.gif?t=" + +new Date,
                            gsp: "https://gst" + t + ".baidu.com/nocache/az.gif?t=" + +new Date,
                            gs0: "https://gs" + t + ".baidu.com/nocache/pdns/az.gif?t=" + +new Date,
                            cdn: "https://ss" + t + ".baidu.com/6ONWsjip0QIZ8tyhnq/ps_default.gif?t=" + +new Date,
                            idc: "https://sp" + t + ".baidu.com/htpoty.gif?t=" + +new Date
                        };
                    "http:" == nt.protocol && /8501/.test(bds.comm.sid) && (n = {
                        bwww2: "http://bwww2.baidu.com/static/tj.gif?t=" + +new Date,
                        bwww3: "http://bwww3.baidu.com/static/tj.gif?t=" + +new Date,
                        bwww4: "http://bwww4.baidu.com/static/tj.gif?t=" + +new Date,
                        bwww5: "http://bwww5.baidu.com/static/tj.gif?t=" + +new Date
                    });
                    var o = [],
                        i = [],
                        s = {};
                    for (var r in n) ! function(e) {
                        var r = "_SSL_LOG_" + e + "_" + +new Date,
                            a = new Image,
                            c = new Date;
                        s[e] = $.Deferred(), i.push(s[e]), a.onload = function() {
                            s[e].resolve(), delete window[r]
                        }, a.onerror = function() {
                            s[e].resolve(), o.push(e + "_" + t + "=" + (new Date - c)), delete window[r]
                        }, a.src = n[e]
                    }(r);
                    var a = $.when.apply($, i);
                    a.always(function() {
                        var t = "//www.baidu.com/nocache/fesplg/s.gif?log_type=hm&type=ssl&",
                            n = o.join("&");
                        t += "sysv=" + navigator.appMinorVersion + "&tag=" + e + "&";
                        var i = new Image,
                            s = "_HM_LOG_" + (new Date).getTime();
                        i.onload = function() {
                            delete window[s]
                        }, window[s] = i, i.src = t + n
                    })
                };
            "https:" === nt.protocol && .03 > e && (n("img", "src"), n("script", "src"), n("iframe", "src"), n("link", "href"), t.length > 0 && i()), (.01 > e || /8501/.test(bds.comm.sid)) && s(), window.ctwin
        }()
    }

    function b() {
        return Rt.length
    }

    function w(e) {
        $(document).delegate("a", "mousedown", function() {
            return function() {
                var t = $(this);
                v(t, e)
            }
        }())
    }

    function v(e, t) {
        var n, o = t.prefix,
            i = e.attr("href");
        if (o && i && 0 == i.indexOf(o) && (i = i.substring(o.length)), !o && i) {
            var s = i.match(/^http:\/\/[^\/]+/);
            if (!s) return;
            o = s[0], i = i.replace(/^http:\/\/[^\/]+/, "")
        }
        if (i && (n = i.match(/^\/*(link|baidu.php)\?(.*)$/), n = i.match(t.regex)), !(n && n[2] && n[2].match(/&(wd|word)=/))) {
            if (i && n) {
                t.convertTable && t.convertTable[n[1]] && (n[1] = t.convertTable[n[1]]);
                var r = it.getLinkParams(i);
                r && ("https:" === nt.protocol && /Chrome|Safari/.test(navigator.userAgent) && (o = o.replace(/^http:\/\/www\.baidu\.com/, "https://www.baidu.com")), i = o + "/" + n[1] + "?" + n[2] + "&" + r, e.attr("href", o + "/" + n[1] + "?" + n[2] + "&" + r), e.click(function() {
                    window.PDC_ASYNC.setLinkData("click_t", (new Date).getTime()), window.PDC_ASYNC.setLinkData("linkpreload", $(this).attr("linkpreload"))
                }))
            }
            return i
        }
    }

    function _(e) {
        if (!window.__disable_is2 || $.trim(e) != $.trim(Tt.val())) {
            if (Yt || !bds.comm.supportis) return void(xt && xt.html(""));
            if (0 != pageState && !window.__disable_kw_tip)
                if (xt || (xt = $('<div id="kw_tip" style="width:initial" unselectable="on" onselectstart="return false;" class="s_ipt_tip"/>').insertBefore(Tt), xt.parent().click(function(e) {
                        var t = Tt.get(0);
                        if (e.target === t) return !0;
                        t.focus();
                        var n = t.value.length;
                        if (document.selection) {
                            var o = t.createTextRange();
                            o.moveStart("character", n), o.collapse(), o.select()
                        } else "number" == typeof t.selectionStart && "number" == typeof t.selectionEnd && (t.selectionStart = t.selectionEnd = n);
                        return !1
                    }), xt.get(0).onselectstart = function() {
                        return !1
                    }), xt.text(e), "" != e) {
                    var t = Tt.textWidth();
                    xt.css({
                        "margin-left": t + 10 + "px",
                        "max-width": xt.parent().width() - t - 14 + "px"
                    }).text(e), window.__disable_is2 && xt.css("z-index", 1), xt.show()
                } else xt.hide()
        }
    }

    function y() {
        Yt = !1
    }

    function T() {
        Yt = !0, zt && zt.real_wd && $.trim(Tt.val()) ? (_(zt.real_wd), x(zt)) : (_(""), x())
    }

    function x(e) {
        var t = i(Tt.val());
        e && t == e.real_wd && $("#super_se_tip").remove()
    }

    function k(e, t) {
        var n = (new Date).getTime();
        if (t.force || h(t, {
                utime: (new Date).getTime() - Lt
            }), !t || !t.loaded) return !1;
        "string" == typeof t.html && (t.html = $(t.html)), $(t).trigger("swap_begin"), m(function() {
            t.pdc.mark("pt"), $(window).trigger("swap_begin", [t, e]);
            var n = Gt && Gt.getData();
            n && (setTimeout(function() {
                t.pdc.setParam("ispeed", Gt.monitor(n))
            }, 3e3), t.pdc.setParam("upm", n.join(",")))
        }), m(function() {
            t.base64.restart();
            try {
                if (!t.base64_loaded) {
                    var e = $.parseJSON(t.html.find("#img_list").text());
                    t.base64.loadImg(e.right, e.left)
                }
            } catch (n) {}
            t.base64.end()
        });
        var o = [$(window).scrollLeft(), $(window).scrollTop()];
        jt.hide(), oldEnv = Mt, Mt = e, Ft = zt, zt = t, bds.comm.cur_disp_query = e.p("wd"), D(), bds && bds.se && bds.se.certification && bds.se.certification.data && (bds.se.certification.data = []), 0 == pageState && O(e), m(function() {
            ht()
        }), bds.clearReady(), jt.empty();
        var i = t.html;
        if (K.use_cache_repeatedly && (i = i.clone()), m(function() {
                i.find("#head_style").children().removeAttr("data-for").appendTo("head")
            }), m(function() {
                $.globalEval(i.find("#head_script").html())
            }), bds.comm && bds.comm.jsversion && "006" != bds.comm.jsversion) {
            var s = Mt.buildSyncSearchUrl({
                jmp: "jsver",
                _vr: Math.random()
            });
            return void nt.replace(s)
        }
        m(function() {
            i.find("#content_script script").each(function(e, t) {
                $.globalEval($(t).html())
            })
        }), m(function() {
            var e = i.find("#s_tab");
            if (e.size()) {
                var t = $("#s_tab");
                t.size() ? t.replaceWith(e) : e.insertBefore(jt)
            }
        });
        var r = !1;
        ! function() {
            var e = i.find("#con-at"),
                n = $("#con-at"),
                o = n.children().children();
            if (o.size())
                if (e.children().size()) {
                    var s = e.children().children();
                    o.attr("cq") != s.attr("cq") || o.attr("srcid") != s.attr("srcid") || t.force && oldEnv && oldEnv.equals(Mt) || !Mt.p("cq") || !Mt.p("srcid") || 1 == Mt.p("_trf") ? (n.remove(), $(window).trigger("top_result_removed"), u(jt, e, "insertBefore")) : r = !0
                } else n.remove(), $(window).trigger("top_result_removed");
            else e.children().size() && u(jt, e, "insertBefore")
        }();
        var a = i.find("#container");
        if (t.pdc.bindImgLoad(a), u(jt, a), !$("#footer").size()) {
            var c = i.find("#footer").children();
            u(jt, c)
        }
        m(function() {
            var e = (new Date).getTime();
            i && $.globalEval(i.find("#jsMerge").html()), h(t, {
                jsmergetime: (new Date).getTime() - e
            })
        }), bds && bds.comm && bds.comm.templateName == bds.comm.resTemplateName ? bds.comm.seinfo && (bds.comm.seinfo.rsv_tpfail = 0) : bds.comm.seinfo && (bds.comm.seinfo.rsv_tpfail = 1), 0 != pageState && bds && bds.util && bds.util.setContainerWidth && bds.util.setContainerWidth(), document.title = e.p("wd") + "_百度搜索", jt.show(), d(), h(t, {
            domtime: (new Date).getTime() - n
        }), h(t, {
            waittime: (new Date).getTime() - kt
        }), t.pdc.mark("dom"), $(window).trigger("swap_dom_ready", [t, e]), window.__lazy_foot_js ? setTimeout(function() {
            C(e, t, n)
        }, 0) : C(e, t, n), r ? window.scrollTo(o[0], o[1]) : window.scrollTo(0, 0), $(window).trigger("scroll"), swap_wait = !1
    }

    function C(e, t, n) {
        var o;
        n || (n = 0), t && (o = t.html), m(function() {
            _t.get(0).f.value = 8
        }), m(function() {
            var e = (new Date).getTime();
            t && t.base64 && (t.base64.setDomLoad("left"), t.base64.setDomLoad("right")), h(t, {
                base64time: (new Date).getTime() - e
            })
        }), $("#search").find("form").submit(function() {
            var e = Tt;
            Tt = $(this).find("[name='wd']");
            var t = A.call(this);
            return Tt = e, t
        }), m(function() {
            var e = (new Date).getTime();
            bds.doReady(), h(t, {
                bdstime: (new Date).getTime() - e
            })
        }), m(function() {
            var e = (new Date).getTime();
            o && $.globalEval(o.find("#ecomScript").html()), h(t, {
                ecomtime: (new Date).getTime() - e
            })
        }), m(function() {
            var e = (new Date).getTime();
            bds.se.tools && (St && clearTimeout(St), St = setTimeout(function() {
                bds.se.tools()
            }, 600)), bds && bds.se && bds.se.certification && bds.se.certification.build && (Dt && clearTimeout(Dt), Dt = setTimeout(function() {
                $(".certification").size() > 0 && bds.se.certification.build.init()
            }, 1e3)), bds && bds.se && bds.se.safeTip && (Ct && clearTimeout(Ct), Ct = setTimeout(function() {
                $(".unsafe_ico_new").size() > 0 && bds.se.safeTip.init()
            }, 1200)), h(t, {
                tiptime: (new Date).getTime() - e
            })
        }), m(function() {
            var e = (new Date).getTime();
            window.initResultClickLog(), h(t, {
                clicktime: (new Date).getTime() - e
            })
        }), m(function() {
            h(t, {
                rtime: (new Date).getTime() - n,
                used: 1
            }), bds.comm.seinfo && t && (bds.comm.seinfo.rsv_pstg = t.type)
        }), m(function() {
            $(window).trigger("swap_end", [t, e]), N(), Lt = (new Date).getTime(), t && t.pdc && (t.pdc.mark("js"), t.pdc.trigger("swap_end"))
        })
    }

    function D() {
        m(function() {
            $.each(bds.comm.tips, function(e, t) {
                t && t.destroy && t.destroy()
            }), $("#c-tips-container").empty(), bds.comm.tips = []
        }), m(function() {
            window.app && window.app.dispose && window.app.dispose()
        }), m(function() {
            bds.comm.resolveUnloadHandler()
        }), bds && bds.se && bds.se.certification && bds.se.certification.data && (bds.se.certification.data = []), bds && bds.se && bds.se.userAction && bds.se.userAction.destroy()
    }

    function S() {
        It && At && (clearTimeout(It), It = setTimeout(At, Y))
    }

    function I(e, t, n) {
        return function(t) {
            var o = $.extend({}, t);
            if (e && !e.confirm) {
                bds.comm.cur_query = e.real_wd, !bds.comm.supportis && e && (n = e.pstg || 0), e.confirm = !0, It = !1, At = null;
                var i = {};
                i.is_referer = ot, i.is_xhr = "1";
                var s = new p(r(it.getQueryString()), !0);
                e.env.equals(s) || e.env.clone({
                    wd: e.prw
                }).equals(s) || it.setUrl(e.env), ot = nt.protocol + "//" + nt.host + nt.pathname + nt.search, e.seq ? e.seq++ : e.seq = 1, e.pdc && (20 != n && bds.comm.supportis && e.pdc.mark("st"), e.pdc && e.pdc.setParam && e.pdc.setParam("cus_pstg", n), e.force && e.pdc.setParam("f4s", 1), e.pdc.trigger("confirm"), window.PRE_CONN.startTimer()), m(function() {
                    $(window).trigger("confirm", [e, n])
                });
                var a = "/s?ie=utf-8&csq=" + e.seq + "&pstg=" + n + (o.tipConfirm ? "&_cktip=1" : "") + "&mod=2" + (bds.comm.supportis ? "&isbd=1" : "") + "&cqid=" + e.qid + "&istc=" + ((new Date).getTime() - e.startTime) + "&ver=" + bds.comm.baiduis_verify + "&chk=" + e.chk + "&isid=" + wt + "&" + e.env.buildQueryString() + (e.force ? "&f4s=1" : "") + ("function" == typeof Vt ? "&_ck=" + Vt(e.env.p("wd")) : "");
                if (bds.comm.indexSid && (/9998_/.test(bds.comm.indexSid) && "https:" === nt.protocol && (bds.comm.indexSid = bds.comm.indexSid.replace("9998", "8499")), a += "&rsv_isid=" + bds.comm.indexSid), e.no_predict && (a += "&isnop=" + (1 >= ft ? 0 : 1)), ft = 0, Ut && Ut.getRsvStatus) try {
                    a += "&rsv_stat=" + Ut.getRsvStatus(e.env.p("wd"))
                } catch (c) {}
                if (Bt.done(function() {
                        Ut.getStat("rsv_sug6") && (a += "&rsv_sug6=" + Ut.getStat("rsv_sug6"), bds.comm.seinfo && (bds.comm.seinfo.rsv_sug6 = Ut.getStat("rsv_sug6"))), Ut.getStat("rsv_sug7") && (a += "&rsv_sug7=" + Ut.getStat("rsv_sug7")), Ut.getStat("rsv_sug9") && (a += "&rsv_sug9=" + Ut.getStat("rsv_sug9")), Ut.getStat("rsv_bp") && (a += "&rsv_bp=" + Ut.getStat("rsv_bp"))
                    }), $.ajax({
                        headers: i,
                        url: a
                    }).done(function(e) {
                        $('#form input[name="rqlang"]').val(bds.comm.search_tool.actualResultLang || "cn"), $('#form input[name="rsv_bp"]').val(1), $(e)
                    }).fail(function() {}), bds.comm.seinfo) {
                    bds.comm.seinfo.rsv_prw = encodeURIComponent(Tt.val()), bds.comm.seinfo.rsv_pstg = n, bds.comm.seinfo.rsv_svoice = window.__supportvoice ? "1" : "0", e.cftime += 1, bds.comm.cftime = e.cftime + "";
                    var d = e.env.p("rsv_bak");
                    d && (bds.comm.seinfo.rsv_bak = d)
                }
                bds.comm.confirmQuery = bds.comm.query, bds.comm.confirmQid = bds.comm.qid, g(), wt = e.qid, Bt.done(function() {
                    20 == n ? Ut.updateInitData() : 22 == n || bds.comm.supportis || n >= 0 && 5 >= n && Ut.updateInitData(), Ut.clearStat()
                }), window.cfpromise.resolve()
            }
        }
    }

    function A(e) {
        if (!it.support()) return !0;
        if (nn) return !1;
        if (nn = !0, Tt.blur(), _(""), $(this).attr("target")) return !0;
        tn = !0, en = setTimeout(function() {
            tn = !1
        }, 1e3);
        try {
            if (!$.trim(Tt.val())) return nt.href = "/", !1;
            var t, n = new p,
                o = $(this).serializeArray();
            for (t = 0; t < o.length; t++) n.p(o[t].name, o[t].value);
            if (n.p("wd", Tt.val()), n.p("nojc") && n.p("nojc", ""), zt) {
                if (n.equals(zt.env.clone({
                        wd: zt.real_wd
                    })) && !zt.force) return I(zt, Ft, 22)(), zt.force = !0, _(""), x(zt), !1;
                zt.env.p("rsv_spt") && n.p("rsv_spt", zt.env.p("rsv_spt"))
            }
            it.submit(n, !!e)
        } catch (i) {}
        return !1
    }

    function j(e) {
        var t = {
            force: !1,
            no_predict: !1,
            use_cache: !1,
            shouldShow: !0,
            pstg: -1
        };
        e && $.extend(t, e);
        var n, o = t.env,
            i = t.force,
            s = t.no_predict,
            r = t.shouldShow,
            c = t.use_cache;
        if (o && o.p("wd") && o.hashCode() && (!st && 1 != Cookie.get("ISSW") || i || !s) && (!at && 1 != Cookie.get("ISSW") || i || s)) {
            if (c && (n = tt.hasCache(o, {
                    loaded: !0
                }))) return void(r && (zt && n.env.clone({
                wd: n.real_wd
            }).equals(zt.env.clone({
                wd: zt.real_wd
            })) || (n.force = t.force, n.no_predict = t.no_predict, n.pdc.init(), n.force && (n.pdc.mark("st"), window.bds && bds.comm && !bds.comm.supportis && (n.pdc.mark("net"), n.pdc.setParam("cus_hitpreload", 1))), k(o, n)), _(t.no_predict && 6 != t.pstg ? "" : n.real_wd), x(n)));
            i && r && s && a(), n = {
                env: o,
                cftime: 0,
                no_predict: s,
                shouldShow: r,
                loaded: !1,
                force: i,
                startTime: (new Date).getTime(),
                log: {
                    ctime: (new Date).getTime() - Lt,
                    wd: o.p("wd"),
                    ntime: 0,
                    stat: 0,
                    used: 0,
                    rtime: 0,
                    utime: i ? (new Date).getTime() - Lt : 0,
                    res: 0
                }
            }, n.pdc = f(n), t.pstg > 0 && (n.pstg = t.pstg), n.force && n.pdc.mark("st"), n.base64 = isbase64(n.pdc), Rt.push(n.log), pt++, ft++, U(n)
        }
    }

    function R() {
        var e = [];
        return Ot && (e = $.map(Ot.slice(0, 2), function(e) {
            return e.value
        })), e.join(" ")
    }

    function q(e) {
        t(), nt.replace(e.buildSyncSearchUrl())
    }

    function L(e, t) {
        t ? (at = !0, sn && (clearTimeout(sn), sn = !1), sn = setTimeout(function() {
            at = ct
        }, e)) : (st = !0, on && (clearTimeout(on), on = !1), on = setTimeout(function() {
            st = rt
        }, e))
    }

    function U(e) {
        var t, r, a = e.env,
            c = {};
        c.is_referer = zt && zt.env ? zt.env.buildSyncSearchUrl() : Ht.replace(/\#.*$/, ""), $.extend(c, a.buildHeaders()), c.is_xhr = "1", window.bds && bds.comm && bds.comm.cur_query ? a.p("bs", bds.comm.cur_query) : a.p("bs", ""), window.bds && bds.comm && bds.comm.cur_disp_query && (c.is_pbs = encodeURIComponent(bds.comm.cur_disp_query));
        var d = "ie=utf-8" + (bds.comm.newindex ? "&newi=1" : "") + (gt.sid ? "&sid=" + encodeURIComponent(gt.sid) : "") + (gt.tnp ? "&tnp=" + encodeURIComponent(gt.tnp) : "") + "&mod=" + (e.no_predict || !bds.comm.supportis ? "1" : "11") + (bds.comm.supportis ? "&isbd=1" : "") + "&isid=" + wt + "&" + a.buildQueryString() + "&rsv_sid=" + bds.comm.indexSid + "&_ss=1&clist=" + encodeURIComponent(tt.getCacheList()) + "&hsug=" + encodeURIComponent(R()) + (e.force ? "&f4s=1" : "") + "&csor=" + getCursortPosition(Tt.get(0));
        e.pstg && (d += "&pstg=" + e.pstg);
        var l = "/s?" + d;
        if (l += "&_cr1=" + s(l), !e.no_predict)
            for (r = tt.find(function(e) {
                    return e.loaded || e.no_predict ? void 0 : !0
                }), t = 0; t < r.length; t++) tt.deleteCache(r[t]);
        if (!(e.no_predict && !e.force && (r = tt.find(function(e) {
                return e.force && a.equals(e.env) ? !0 : void 0
            }), r.length > 0))) {
            if (e.force && e.shouldShow) {
                var u = !1,
                    m = (new Date).getTime();
                if (r = tt.find(function(t) {
                        var n = a.equals(t.env);
                        return t.loaded || t.no_predict || !n || t === e || (t.shouldShow = !1), !t.loaded && t.no_predict && t.force && n && t !== e && (t.shouldShow = t.shouldShow || e.shouldShow, t.startTime && m - t.startTime < 2e3 && (u = !0), window.__sam_backup_request || (u = !0)), t.loaded || n ? void t.pdc.mark("st") : !0
                    }), u) return;
                for (t = 0; t < r.length; t++) tt.deleteCache(r[t])
            }
            var p, f = function(t, n, o) {
                    if (0 == n) g(t, o), e.pdc && (e.pdc.setParam("cus_srv", bds.se.mon.srvt), e.pdc.setParam("bsi", Cookie.get("__bsi")));
                    else if (1 == n) try {
                        var i = 1 * new Date;
                        e.b64ildata = $.parseJSON(t), e.base64.ilparseTime = 1 * new Date - i, e === zt && (e.base64.inline(e.b64ildata), e.base64.ilrenderTime = 1 * new Date - i), $(e).one("swap_begin", function() {
                            this.base64.inline(this.b64ildata, this.html.get(0))
                        })
                    } catch (s) {} else 2 == n && e.base64 && (e.base64.ilsum = t)
                },
                g = function(t, s) {
                    if (s && "302" == s.status || t && $.trim(t).indexOf("<div>") > 10) return void(e.force ? (n(11), q(a)) : tt.deleteCache(e));
                    h(e, {
                        ntime: (new Date).getTime() - e.startTime,
                        res: 1
                    });
                    var r, c = "<!--data-->",
                        d = t.indexOf(c);
                    if (-1 != d) {
                        r = $(t.substr(0, d)), e.html = t.substr(d + c.length), window.__dom_pre_parse && "1" == r.find("#__need_parse_dom").html() && (e.html = $(e.html));
                        try {
                            var l = $.parseJSON(r.find("#img_list").text());
                            e.base64.loadImg(l.right, l.left), e.base64_loaded = !0
                        } catch (u) {}
                        try {
                            o(r.find("#limg_list").text())
                        } catch (u) {}
                    } else r = e.html = $(t);
                    var m = parseInt(r.find("#__status").eq(0).html()),
                        p = parseInt(r.find("#__switchtime").eq(0).html()),
                        f = parseInt(r.find("#__redirect").eq(0).html()),
                        g = {};
                    try {
                        g = $.parseJSON(r.find("#__sugPreInfo:eq(0)").html() || "{}") || {}
                    } catch (u) {}
                    e.real_wd = r.find("#__real_wd").eq(0).text(), e.real_wd_org = r.find("#__real_wd_org").eq(0).text(), e.real_wd_nosynx = r.find("#__real_wd_nosynx").eq(0).text(), e.env && e.env.p("nojc") && e.real_wd_nosynx && (e.real_wd = e.real_wd_nosynx);
                    var b = !1;
                    (a.p("wd") == i(Tt.val()) || e.force) && e.shouldShow && (b = !0), e.real_wd && (e.prw = a.p("wd"), a.p("wd", e.real_wd));
                    var w = r.find("#__queryId").html(),
                        v = r.find("#__querySign").html();
                    e.querySign = v, h(e, {
                        stat: m ? m : 0
                    }), bds.comm.isDebug && $("#isDebugInfo").html(r.find("#__isDebugInfo").html()), w && (e.qid = w);
                    var C = r.find("#__chk").html();
                    if (e.chk = C ? C : 0, !t || !w && !p && !f && !m || !v && e.force) return e.force ? (a.p("__eis", 1), a.p("__eist", t ? t.length : 0), a.p("real_wd", e.real_wd), n(13), void q(a)) : void tt.deleteCache(e);
                    if (p > 0 && L(1e3 * p, !e.no_predict), -11 == m) {
                        var D = tt.getCacheBySign(v);
                        if (!D) return j({
                            env: e.env.clone({
                                wd: e.real_wd
                            }),
                            force: e.force,
                            use_cache: !1,
                            no_predict: !0
                        }), void tt.deleteCache(e);
                        D.force = e.force, y(), _(D.real_wd), x(D), tt.deleteCache(e), e = D, zt && e.real_wd == zt.real_wd || (b = !0)
                    } else {
                        if (0 > m) {
                            if (1 == f && e.force) return h(e, {
                                redirect: 1
                            }), n(14), void q(a);
                            if (T(), -12 == m && g && g.wait_time > 0) {
                                var S = e.env.clone();
                                Qt = setTimeout(function() {
                                    j({
                                        env: S,
                                        force: !1,
                                        use_cache: !0,
                                        no_predict: !0,
                                        shouldShow: !1,
                                        pstg: 6
                                    })
                                }, g.wait_time)
                            }
                            return void tt.deleteCache(e)
                        }
                        if (m > 0) return void tt.deleteCache(e)
                    }
                    for (var I = tt.find(function(t) {
                            return !t.loaded && t !== e && t.no_predict && a.equals(t.env) ? (t.shouldShow && (b = !0), t.force && (e.force = !0, e.no_predict = !0), !0) : void 0
                        }), A = 0; A < I.length; A++) tt.deleteCache(I[A]);
                    return e.backup_request_timeout && clearTimeout(e.backup_request_timeout), e.loaded = !0, bds.comm.supportis || b ? void((b && e !== zt || e.force) && (y(), e.shouldShow = !1, -11 == m ? e.pdc.init() : e.pdc.mark("net"), k(a, e))) : !0
                };
            p = $.ajax({
                dataType: "parts",
                url: l,
                headers: c,
                delimiter: "</*3*/>"
            }), p.parts(function(e, t) {
                f(e, t, p)
            }), p.fail(function(t, o) {
                e.force && e.shouldShow && "abort" != o && e.env && (n(12), nt.replace(e.env.buildSyncSearchUrl() + "&rsv_jmp=fail")), tt.deleteCache(e)
            }), e.xhr = p, tt.addCache(e)
        }
    }

    function N() {
        Rt = [], pt = 0, tn = !1, clearTimeout(en)
    }

    function P() {
        window.index_off && window.index_off(), $t[0] !== yt[0] && $t.val(""), Tt = yt, pageState = 1, bds.comm.ishome = 0, bds.comm.cur_query = bds.comm.query, Mt = new p, zt = {
            env: Mt,
            real_wd: bds.comm.query,
            force: !0,
            confirm: !0
        }, Bt.done(function() {
            return function() {
                Pt.start()
            }
        }()), $(window).trigger("index_off"), bds.util.setContainerWidth(), m(function() {
            $(window).trigger("swap_dom_ready")
        }), window.__lazy_foot_js ? setTimeout(function() {
            C()
        }, 0) : C()
    }

    function O(e) {
        window.index_off && window.index_off(), $t.get(0) !== yt.get(0) && ($t.val(""), yt.val(e.p("wd"))), Tt = yt, pageState = 1, bds.comm.ishome = 0, Bt.done(function() {
            Nt !== Pt && (Nt.stop(), Pt.hide(), Pt.setKey(e.p("wd")), Pt.start())
        }), bds.util.setContainerWidth(), $(window).trigger("index_off", e)
    }

    function E() {
        an = !1, cn = !1, ln = [], clearTimeout(un), un = !1
    }

    function M(e) {
        an || (an = {
            x: e.pageX,
            y: e.pageY
        }), dn = {
            x: e.pageX,
            y: e.pageY
        }, cn || an.x == e.pageX || an.y == e.pageY || (cn = !0, ln = [an], z())
    }

    function z() {
        ln.push(dn);
        var e = ln.length;
        if (Math.pow(dn.x - an.x, 2) + Math.pow(dn.y - an.y, 2) >= Math.pow(mt, 2) || e * ut >= lt) {
            var t = Ut,
                n = bds.comm.supportis ? 1 : 2;
            if (n && t && t.data() && t.data()[0] && t.visible()) {
                var o = (new p).clone({
                    wd: t.data()[0].value
                });
                j({
                    env: o,
                    force: !1,
                    no_predict: !0,
                    use_cache: !0,
                    shouldShow: !1,
                    pstg: 1
                }), n--
            }
            if (n && t && t.data() && t.data()[1] && t.visible()) {
                var o = (new p).clone({
                    wd: t.data()[1].value
                });
                j({
                    env: o,
                    force: !1,
                    no_predict: !0,
                    use_cache: !0,
                    shouldShow: !1,
                    pstg: 1
                }), n--
            }
            if (!bds.comm.supportis && n && $.trim(Tt.val()) && (!zt || zt.env.p("wd") != $.trim(Tt.val()))) {
                var o = (new p).clone({
                    wd: $.trim(Tt.val())
                });
                j({
                    env: o,
                    force: !1,
                    no_predict: !0,
                    use_cache: !0,
                    shouldShow: !1,
                    pstg: 1
                }), n--
            }
        } else un = setTimeout(function() {
            z()
        }, ut)
    }
    document.write = document.writeln = function() {}, bds && bds.comm && "clearissw" == bds.comm.query && Cookie.clear("ISSW"),
        function() {
            var e = $.Deferred();
            bds.comm.registerUnloadHandler = function(t) {
                e.done(t)
            }, bds.comm.resolveUnloadHandler = function() {
                e.resolve(), e = $.Deferred()
            }
        }(), window.b_rec = function(e) {
            var t;
            if (e) t = navigator.userAgent;
            else try {
                t = window.external && window.external.twGetRunPath ? window.external.twGetRunPath() : ""
            } catch (n) {
                t = ""
            }
            return t = t.replace(/:/, "~").replace(/\t/, "`")
        }, window.scr_rec = function() {
            var e = "";
            try {
                e += [document.body.clientWidth, document.body.clientHeight, window.screenTop, window.screenLeft, window.screen.height, window.screen.width].join("_")
            } catch (t) {}
            return e
        }, window.reh_rec = function() {
            var e = [],
                t = [];
            try {
                $("#content_left").children(".result,.result-op").each(function(t, n) {
                    e.push($(n).height())
                })
            } catch (n) {}
            try {
                $("#con-ar").children(".result,.result-op").each(function(e, n) {
                    t.push($(n).height())
                })
            } catch (n) {}
            return e.join("_") + "|" + t.join("_")
        }, window.onerror = function() {
            window.console && console.debug && console.debug(arguments), bds.comm.jserror = Array.prototype.slice.call(arguments).join(" "), J(bds.comm.jserror)
        }, window.hash = function(e, t) {
            return e ? e && !t && Mt ? Mt.p(e) : void(e && t && Mt && (Mt.p(e, t), nt.href = Mt.buildSearchUrl())) : void 0
        };
    var H, F, B, W, G, Q, X = !1;
    ! function() {
        var e = $.globalEval;
        $.globalEval = function() {
            var t = (new Date).getTime();
            try {
                e.apply($, arguments)
            } catch (n) {}(new Date).getTime() - t > 500
        }
    }(), bds.comm.isDebug && ($('<style data-for="debug">#debug{display:none!important;}</style>').appendTo("head"), $('<div id="debug" style="display:block;position:absolute;top:30px;right:30px;border:1px solid;padding:5px 10px;z-index:10000"></div>').appendTo("#wrapper"), $(window).on("swap_end", function(e, t) {
        if (t) {
            var n = $("#isDebugInfo");
            n.size() || (n = $('<div id="isDebugInfo"></div>').appendTo("#debug")), n.html(t.html.find("#__isDebugInfo").html());
            var o = "<table>";
            for (var i in t.log) t.log.hasOwnProperty(i) && (o += "<tr><td>" + i + "</td><td>" + encodeURIComponent(t.log[i]) + "</td></tr>");
            o += "</table>", $("#debug").html(o)
        }
    }));
    var J = function() {
        var e;
        return function(t) {
            bds.comm.isDebug && alert(t), bds && bds.comm && bds.comm.js_error_monitor && (e = new Image, e.src = bds.comm.js_error_monitor + "?" + $.param({
                url: nt.href,
                time: bds.comm.serverTime,
                explore: navigator.userAgent,
                info: t,
                info_type: 1
            }))
        }
    }();
    window.setSugKey = function(e) {
        Tt && e && (Pt && Pt.setKey ? Pt.setKey(e) : Tt.val(e))
    }, window.getCursortPosition = function(e) {
        var t = 0;
        try {
            if (document.selection) {
                var n = document.selection.createRange();
                n.moveStart("character", -e.value.length), t = n.text.length
            } else(e.selectionStart || "0" == e.selectionStart) && (t = e.selectionStart)
        } catch (o) {
            t = e.value.length
        }
        return t
    }, bds.comm.flagTranslateResult && ($("#wrapper_wrapper").delegate(".result", "mouseenter", function() {
        $(".c-fanyi", $(this)).show()
    }), $("#wrapper_wrapper").delegate(".result", "mouseleave", function() {
        $(".c-fanyi", $(this)).hide()
    }), $("#wrapper_wrapper").delegate(".result .c-fanyi", "click", function() {
        var e = $(this).closest(".result"),
            t = $("h3 a:first", e),
            n = $(".c-abstract:first", e),
            o = $(".c-fanyi-abstract", e).val(0).html(),
            i = $(".c-fanyi-title", e).val(0).html();
        $(".c-fanyi-abstract", e).val(0).html(n.html()), $(".c-fanyi-title", e).val(0).html(t.html()), t.html(i), n.html(o)
    }));
    var K = {
        use_cache_repeatedly: !0,
        index_form: "#form",
        kw: "#kw",
        result_form: "#form"
    };
    e && $.extend(K, e);
    var V = 15,
        Z = 6e4,
        Y = window.__confirm_timeout ? window.__confirm_timeout : 1e4,
        et = bds.comm.supportis ? 4 : 10,
        tt = function() {
            function e(e) {
                "object" == typeof e && null != e && (e.xhr && e.xhr.abort && e.xhr.abort(), e.base64 && e.base64.destroy(), e.pdc && e.pdc.destroy(), e.backspace_preload_timeout_id && clearTimeout(e.backspace_preload_timeout_id), delete e.xhr, delete e.html)
            }
            var t = [];
            return {
                find: function(e) {
                    return $.grep(t, e)
                },
                getCacheList: function() {
                    var e = $.map(t, function(e) {
                        return e && (new Date).getTime() - e.startTime > Z ? !1 : e.querySign
                    });
                    return e = $.grep(e, function(e) {
                        return !!e
                    }), e.join("    ")
                },
                hasCache: function(e, n) {
                    function o(e) {
                        var o, i;
                        return (i = e.p("wd")) ? ($.grep(t, function(t) {
                            return n.loaded && !t.loaded ? !1 : void(e.equals(t.real_wd ? t.env.clone({
                                wd: t.real_wd
                            }) : t.env) && (o = t))
                        }), o ? o : null) : !1
                    }
                    n || (n = {});
                    var i = o(e);
                    return i && (new Date).getTime() - i.startTime > Z && (this.deleteCache(i), i = null), i
                },
                shouldShow: function(e) {
                    if (e.force) return !0;
                    if (!e.shouldShow && !e.force && e.no_predict) return !1;
                    var t = i(Tt.val());
                    return !t || zt && e.env.equals(zt.env) ? !1 : 0 == e.env.p("wd").indexOf(t) ? !0 : 0 == e.real_wd.indexOf(t) ? !0 : !1
                },
                getCacheBySign: function(e) {
                    var n = !1;
                    return $.each(t, function(t, o) {
                        n || !o.loaded || o.querySign != e || o.env.p("pn") && 0 != o.env.p("pn") || (n = o)
                    }), n
                },
                addCache: function(n) {
                    if (-1 == l(t, n) && !n.env.p("srcid") && !n.env.p("cq"))
                        for (t.unshift(n); t.length > V;) e(t.pop())
                },
                deleteCache: function(n) {
                    e(n), t = $.grep(t, function(e) {
                        return e !== n
                    })
                },
                deleteCacheByEnv: function() {
                    t = $.grep(t, function(t) {
                        var n = t.env.equals(t.env);
                        return n && e(t), !n
                    })
                },
                clearCache: function() {
                    t = $.grep(t, function(t, n) {
                        return n !== zt ? (e(n), !1) : !0
                    }), t = []
                }
            }
        }(),
        nt = document.location,
        ot = nt.protocol + "//" + nt.host + nt.pathname + nt.search,
        it = {
            onurlchange: function() {}
        };
    ! function() {
        function e() {
            var e = nt.href.match(/#+(.*)$/);
            return e ? e[1].replace(/\+/g, "%2B") : ""
        }

        function n() {
            var e = nt.href.match(/\?([^#]+)/);
            return e ? e[1].replace(/\?/g, "&") : ""
        }

        function o(e, t) {
            var n = "";
            if ("1" === window._thirdLinkSpeed && (n = "&qid=" + bds.comm.queryId), window._bdlksmp > 0 && (n = "&bdlksmp=" + window._bdlksmp), "1" === window._eclipse && /^\/link\?/.test(t)) return "wd=&eqid=" + bds.comm.eqid + i(["pn", "rn", "ie"], e) + n;
            var o = new p(r(e));
            return o.p("wd") ? o.buildQueryString().replace(/&rsv[^=]*=[^&]*/g, "").replace(/[^a-zA-Z0-9]url=/g, "") + n : void 0
        }

        function i(e, t) {
            var n = "",
                o = r(t);
            for (var i in e) o.hasOwnProperty(i) && (n += "&" + encodeURIComponent(o[i]));
            return n
        }

        function s(e) {
            var t = new p(r(it.getQueryString()), !0);
            t.hashCode() ? 0 == pageState && O(t) : 0 != pageState ? nt.replace(nt.pathname + nt.search.replace(/([?&])isidx=[^&*]&?/, "$1")) : nt.search != nt.search.replace(/([?&])isidx=[^&*]&?/, "$1") && nt.replace(nt.pathname + nt.search.replace(/([?&])isidx=[^&*]&?/, "$1")), it.onurlchange(t, e)
        }
        var a = "onhashchange" in window,
            c = "onpopstate" in window;
        window.__disable_popstate && (c = !1);
        var l = nt.pathname.length > 1 ? nt.pathname : "/s";
        (navigator.userAgent.match(/MSIE (6|7)/) || document.documentMode < 8) && (a = !1, c = !1), K.disable_popstate && (c = !1), a || c || t();
        var u = function() {
            var t = "";
            return function(n, o) {
                o && (t = o.buildQueryString(), nt.hash = t), (n || t != e()) && (s(n), t = e())
            }
        }();
        it.setUrl = function(e) {
            c ? m(!1, e) : a && u(!1, e)
        };
        var m = function() {
            var e = n();
            return function(t, o) {
                o && (e = o.buildQueryString(), window.history.pushState(o, "", o.buildSyncSearchUrl())), t || e != n() ? (s(t), e = n()) : d()
            }
        }();
        it.getQueryString = function() {
            return c ? n() : /wd=/.test(e()) ? e() : n()
        }, it.init = function() {
            c ? ! function() {
                var t = nt.href,
                    n = !1;
                $(window).on("swap_begin", function() {
                    n = !0
                }), $(window).bind("popstate", function() {
                    (n || !t || t != nt.href) && m(), t = null
                }), $(window).bind("hashchange", function() {
                    var t = e();
                    /wd=/.test(t) && nt.replace(l + "?" + t)
                })
            }() : a && ($(window).bind("hashchange", function() {
                u()
            }), $(function() {
                u()
            }));
            var t = e();
            /wd=/.test(t) && (c ? (window.history.replaceState(null, "", l + "?" + t), m()) : a ? u() : nt.replace(l + "?" + t))
        }, it.support = function() {
            return (c || a) && 1 != Cookie.get("ISSW") && !window.__disable_preload
        }, it.getLinkParams = function(t) {
            if (!c) {
                var i = e();
                return "" == i && (i = n()), o(i, t)
            }
            if ("https:" === nt.protocol || "1" === window._eclipse) {
                var s = n();
                return s || (s = e()), o(s, t)
            }
            return !1
        }, it.clickResultLink = function(e, t, n) {
            return c ? (window.history.pushState(null, "", new p(n, !0).buildSyncSearchUrl()), m(), !1) : void e.attr("href", t.buildSearchUrl(n)).attr("target", "_self")
        }, it.submit = function(e, t) {
            setTimeout(function() {
                c ? (window.history.pushState(e, "", e.buildSyncSearchUrl()), m(t)) : a ? (nt.href = e.buildSearchUrl(), u(t)) : nt.href = e.buildSyncSearchUrl()
            }, 0)
        }, window.changeUrl = function(e) {
            var t = new p(r(e));
            it.submit(t, !0)
        }
    }(), it.onurlchange = function(e, t) {
        Bt.done(function() {
            Ut.setKey(e.p("wd")), Ut.hide()
        }), kt = (new Date).getTime(), Tt.val(e.p("wd")), _("");
        var n = !0;
        t && zt && zt.env && zt.env.equals(e) && (n = !1), j({
            env: e,
            force: !0,
            use_cache: n,
            no_predict: !0
        })
    };
    var st = K.disable ? K.disable : !1;
    window.__disable_preload && (st = !0);
    var rt = st,
        at = !1;
    window.__disable_predict && (at = !0);
    var ct = at,
        dt = bds.comm.switchAddMask ? bds.comm.switchAddMask : !1;
    dt || (dt = window.__switch_add_mask ? window.__switch_add_mask : !1), dt = !0;
    var lt = (bds.comm.preloadMouseMoveDistance ? bds.comm.preloadMouseMoveDistance : 5, 300),
        ut = 50,
        mt = 80,
        pt = 0,
        ft = 0,
        ht = function() {},
        gt = r(nt.search);
    it.support() || (! function() {
        function e() {
            nt.hash && nt.hash.match(/[^a-zA-Z0-9](wd|word)=/) && nt.replace("//www.baidu.com/s?" + nt.href.match(/#(.*)$/)[1])
        }
        nt.hash.match(/[^a-zA-Z0-9](wd|word)=/) ? (nt.replace("//www.baidu.com/s?" + nt.href.match(/#(.*)$/)[1]), function() {
            throw new Error("redirect to sync")
        }()) : (document.getElementById("wrapper").style.display = "block", "onhashchange" in window ? window.onhashchange = e : setInterval(e, 200))
    }(), rt = st = !0);
    for (var bt = Cookie.get("BAIDUID", "nobdid").split(":")[0], wt = bt.substr(0, 6) + bt.substr(bt.length - 5, 5) + parseInt(99999 * Math.random()); wt.length < 16;) wt += "0";
    wt = encodeURIComponent(wt);
    var vt, _t, yt, $t, Tt, xt;
    yt = $t = Tt = $(K.kw);
    var kt, Ct, Dt, St, It, At, jt = $("#wrapper_wrapper"),
        Rt = [];
    window.__async_strategy, vt = $(K.index_form), "_blank" == vt.attr("target") && (window.__disable_index_predict = !0, rt = st = !0);
    var qt = vt.serializeArray();
    _t = $(K.result_form);
    var Lt = (new Date).getTime();
    window.pageState = 0;
    var Ut, Nt, Pt, Ot, Et, Mt = null,
        zt = null,
        Ht = document.location.href,
        Ft = !1,
        Bt = $.ajax({
            dataType: "script",
            cache: !0,
            url: 1 === bds.comm.logFlagSug ? "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/sug/js/bdsug_async_sam_sug_a97d823.js" : "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/sug/js/bdsug_async_69c7a33.js"
        }),
        Wt = "focus";
    ! function() {
        window.PDC_ASYNC = {
            setParam: function(e, t) {
                zt && zt.pdc && zt.pdc.setParam(e, t)
            },
            setLinkData: function(t, n) {
                e[t] = n
            },
            sendLinkLog: function() {
                var t = "//www.baidu.com/nocache/fesplg/s.gif?log_type=linksp",
                    n = "";
                n += "&link_t=" + ((new Date).getTime() - e.click_t) + "&query=" + bds.comm.queryEnc + "&qid=" + bds.comm.queryId + "&linkpreload=" + e.linkpreload;
                var o = Math.random();
                if (.01 > o) {
                    var i = new Image,
                        s = "LINK_IMG_" + new Date;
                    window[s] = i, i.onload = function() {
                        delete window[s]
                    }, i.src = t + n
                }
            }
        };
        var e = (window.PDC_ASYNC.log = {}, {});
        window.bds && (bds.pdc = window.PDC_ASYNC)
    }();
    var Gt = function(e) {
        function t() {
            if (c = 1, n(), 1 == c) {
                var t = new Date,
                    i = !1,
                    s = function() {
                        var n = new Date,
                            l = n - t - e,
                            u = o();
                        0 > l && (l = 0), u || i || (r[a] = l, a = (a + 1) % 20), i = u, 1 == c && (t = n, d = setTimeout(s, e))
                    };
                d = setTimeout(s, e)
            }
        }

        function n() {
            window.clearTimeout(d)
        }

        function o() {
            var e = ["webkit", "moz", "ms", "o"];
            if ("hidden" in document) return document.hidden;
            for (var t = 0; t < e.length; t++)
                if (e[t] + "Hidden" in document) return document[e[t] + "Hidden"];
            return !1
        }

        function i(e) {
            try {
                var t = 0,
                    n = Math.max.apply(null, e),
                    o = 10,
                    i = 60,
                    s = 4,
                    r = 40,
                    a = Cookie.get("ispeed_lsm"),
                    c = 0,
                    d = new Date,
                    l = 0;
                d.setTime(d.getTime() + 2592e6);
                for (var u = 0; u < e.length; u++) {
                    var m = e[u];
                    t += m
                }
                return t = Math.round(t / e.length), n > 1e3 || t > 150 ? (c = a ? parseInt(a) : 0, c >= r - o && r > c && (l = 1, Cookie.set("ispeed", 2, document.domain, "/", d)), i > c && (c = c + o > i ? i : c + o, Cookie.set("ispeed_lsm", c, document.domain, "/", d))) : (a && parseInt(a) > r && (s = 5), a && parseInt(a) >= s && (parseInt(a) <= r + s && parseInt(a) > r && (l = 2, Cookie.set("ispeed", 1, document.domain, "/", d)), c = parseInt(a) - s, Cookie.set("ispeed_lsm", c, document.domain, "/", d))), l
            } catch (p) {}
            return 0
        }

        function s() {
            return Cookie.get("ispeed") && 1 == UPS.get("isSwitch") && 2 == parseInt(Cookie.get("ispeed")) ? !0 : !1
        }
        var r = [],
            a = 0,
            c = 0,
            d = !1,
            e = e || 250;
        return {
            start: t,
            stop: function() {
                window.clearTimeout(d), c = 0
            },
            getData: function() {
                return r.slice(a).concat(r.slice(0, a))
            },
            isSlow: s,
            monitor: i
        }
    }();
    bds.comm.supportis && 1 == UPS.get("isSwitch") && Gt.start();
    var Qt;
    Bt.done(function() {
        Ut = Nt = Pt = bds.se.sug({
            maxNum: 10,
            withoutRich: bds.comm.supportis,
            withoutZhixin: !0,
            form: _t[0],
            ipt: Tt[0],
            cbname: "bdsugresultcb",
            submission: A
        }), Tt.keydown(function(e) {
            var t = getCursortPosition(this);
            (9 == e.keyCode || 39 == e.keyCode && t == this.value.length) && bds.comm.supportis && zt && xt.text() && (e.preventDefault(), zt.real_wd != this.value && (Tt.val(zt.real_wd), Ut.check()), Ut.show(), _(""), I(zt, Ft, 22)({
                tipConfirm: !0
            }))
        }), Ut.on("start", function() {
            Wt = "focus"
        }), $(window).on("blur", function() {
            Ut.hide()
        }), $(document).on("click", function(e) {
            return 2 == e.isTrigger || 3 == e.isTrigger ? !1 : void Ut.hide()
        });
        var e, t;
        Ut.on("inputChange", function(n, o) {
            if (e || (e = Tt.val()), _(""), E(), clearTimeout(Qt), clearTimeout(rn), 0 == pageState && window.__disable_index_predict || st || at || Gt.isSlow()) return void Ut.setMaxNum(10);
            Ut.setMaxNum(et);
            var i = new p({
                pn: "",
                wd: o.value
            });
            if (bds && bds.comm && bds.comm.logFlagSug && 1 === bds.comm.logFlagSug && i.p("rsv_slog", "ipt_change"), 0 == pageState && bds.comm.supportis && $.trim(Tt.val())) {
                O(i);
                var s = $("<div id='ent_sug'>请按“回车”键发起检索</div>").insertBefore("#head");
                $(window).one("swap_begin", function() {
                    s.remove()
                })
            }
            if (Et) return void(Et = !1);
            if (window.__restart_confirm_timeout && S(), Wt = "input", kt = (new Date).getTime(), t && (clearTimeout(t), t = !1), "" == $.trim(o.value)) return void T();
            if (Ot = o.checkStore(), !/^[a-zA-Z0-9~!@#$%^&*()_+=-]$/.test(o.value)) {
                var r = Tt.val(),
                    a = o.imt.getLog();
                a.length > 0 && a[a.length - 1].type.indexOf("link") > -1 && i.p("_sglink", "1");
                var c = o.imt.diffLog();
                c && c.length > 1 && (c = c.slice(-15).join("."), i.h({
                    is_params: {
                        imes: encodeURIComponent(c)
                    }
                })), !window.__disable_is2 && e.length > r.length && 0 === e.indexOf(r) ? t = setTimeout(function() {
                    j({
                        env: i,
                        use_cache: !0,
                        force: !1,
                        pstg: 5,
                        shouldShow: bds.comm.supportis
                    }), t = !1
                }, 250) : j({
                    env: i,
                    use_cache: !0,
                    force: !1,
                    pstg: 5,
                    shouldShow: bds.comm.supportis
                })
            }
            e = r
        }), Ut.on("selectSug", function(e, t, n, o) {
            if (_(""), clearTimeout(Qt), !(0 == pageState && window.__disable_index_predict || st || at || Gt.isSlow()))
                if (-1 == n) {
                    zt && Ut.setVisibleSug(zt.real_wd);
                    var i = new p({
                        pn: "",
                        wd: t.value
                    });
                    bds && bds.comm && bds.comm.logFlagSug && 1 === bds.comm.logFlagSug && i.p("rsv_slog", "sug_select"), j({
                        env: i,
                        use_cache: !0,
                        force: !1,
                        shouldShow: bds.comm.supportis,
                        pstg: 3
                    })
                } else {
                    Ut.setVisibleSug(), _("");
                    var i = new p({
                        pn: "",
                        wd: o
                    });
                    bds && bds.comm && bds.comm.logFlagSug && 1 === bds.comm.logFlagSug && i.p("rsv_slog", "sug_select");
                    var s = t.stopRefresh ? !1 : bds.comm.supportis;
                    j({
                        env: i,
                        force: !1,
                        use_cache: !0,
                        no_predict: !0,
                        shouldShow: s,
                        pstg: 3
                    })
                }
        }), Ut.on("render", function() {
            zt && Ut.setVisibleSug(zt.real_wd)
        }), Ut.on("dataReady", function(e, t) {
            var n = t && t.queryValue && t.dataCached && t.dataCached[t.queryValue];
            if (n && n.gl)
                for (var o in n.gl)
                    if (1 * n.gl[o] > 0) {
                        var i = new p({
                            pn: "",
                            wd: n.s[o]
                        });
                        j({
                            env: i,
                            force: !1,
                            use_cache: !0,
                            no_predict: !0,
                            shouldShow: !1,
                            pstg: 7
                        })
                    }
        }), 0 == pageState && Ut.start()
    });
    var Xt, Jt, Kt, Vt;
    ! function() {
        var e, t = -1,
            n = 0,
            o = -1,
            i = -1,
            r = -1,
            a = -1,
            c = 0;
        Xt = function(t) {
            if (t) {
                r = t.pageX, a = t.pageY, e = t.target;
                var s = $(t.target);
                "submit" == s.attr("type") && (c = 1);
                var d = s.offset();
                o = r - d.left, i = a - d.top, n = (new Date).getTime()
            }
        }, Jt = function(o) {
            o && o.target == e && (t = (new Date).getTime() - n)
        }, Vt = function(e) {
            bds && bds.comm && bds.comm.query && (e = bds.comm.query);
            var n = c + "." + t + "." + o + "." + i + "." + r + "." + a;
            return n = s(n + e) + "." + n
        }, Kt = function() {
            t = -1, n = 0, o = -1, i = -1, r = -1, a = -1, c = 0
        }, $(window).on("confirm", function() {
            setTimeout(Kt, 0)
        })
    }(), $(function() {
        $("#head").delegate(".index_tab_top>a,.index_tab_bottom>a,#u1>a,#u>a", "mousedown", function() {
            return $(this).attr("name") ? ns_c({
                fm: "behs",
                tab: $(this).attr("name"),
                query: "",
                un: encodeURIComponent(bds.comm.user || "")
            }) : void 0
        })
    }), $(document).delegate("a", "mousedown", function() {
        I(zt, Ft, 22)()
    }), w({
        prefix: "http://www.baidu.com",
        regex: /^\/*(link)\?(.*)$/
    }), w({
        prefix: "//www.baidu.com",
        regex: /^\/*(link)\?(.*)$/
    }), w({
        prefix: "http://www.baidu.com",
        convertTable: {
            "baidu.php": "baidu.php",
            "aladdin.php": "aladdin.php",
            "siva.php": "siva.php",
            "adrc.php": "adrc.php",
            "zhixin.php": "zhixin.php"
        },
        regex: /^\/*(baidu\.php|aladdin\.php|siva\.php|adrc\.php|zhixin\.php)\?(.*)$/
    }), "www.baidu.com" != nt.host && w({
        prefix: "",
        convertTable: {
            "baidu.php": "baidu.php",
            "aladdin.php": "aladdin.php",
            "siva.php": "siva.php",
            "adrc.php": "adrc.php",
            "zhixin.php": "zhixin.php"
        },
        regex: /^\/*(baidu\.php|aladdin\.php|siva\.php|adrc\.php|zhixin\.php)\?(.*)$/
    }), w({
        prefix: "http://bzclk.baidu.com",
        regex: /^\/*(adrc\.php)\?(.*)$/
    }), "https:" == nt.protocol && bds.comm.ishome && !/Chrome/.test(navigator.userAgent) && $(document).delegate("a", "mousedown", function() {
        var e = $(this),
            t = e.attr("href"),
            n = {
                "http://v.baidu.com": "/?fr=bd"
            };
        n && n.hasOwnProperty(t) && e.attr("href", t + n[t])
    }), $(document).delegate("a", "mousedown", function() {
        var e = $(this),
            t = e.attr("href"),
            n = new Image,
            o = "//www.baidu.com/nocache/fesplg/s.gif?log_type=hm",
            i = Math.random();
        if (.01 > i && !/www\.baidu\.com\//.test(t) && /^http/.test(t)) {
            var s = o + "&c_url=" + encodeURIComponent(t),
                n = new Image,
                r = "_LOG_" + (new Date).getTime();
            n.onload = function() {
                delete window[r]
            }, window[r] = n, n.src = s
        }
    }), it.support() && $(document).delegate("a", "click", function() {
        var e = nt.protocol + "//" + nt.host;
        return function() {
            var t = $(this);
            if (!t.attr("target") || "_self" == t.attr("target")) {
                var n = $.trim(t.attr("href"));
                if (n && 0 == n.indexOf(e) && (n = n.substring(e.length)), n && (matched = n.match(/^\/*s\?(.*)/)), n && matched) {
                    var o = r(matched[0]);
                    if (o.pn || (o.pn = ""), l(["baidurt", "baiduwb", "baidufir", "SE_baiduxueshu_c1gjeupa"], o.tn) < 0) {
                        var i = t.parents("#con-at");
                        i.size() > 0 && a({
                            top: i.offset().top + i.height()
                        });
                        var s = it.clickResultLink(t, Mt, o)
                    }
                    return s
                }
            }
        }
    }()), $(document).delegate("a", "mousedown", function(e) {
        Xt(e)
    }), $(document).delegate("a", "mouseup", function(e) {
        Jt(e)
    }), $(document).delegate("#su,#su1", "mouseup", function(e) {
        Jt(e)
    }), $(document).delegate("#su,#su1", "mousedown", function(e) {
        Xt(e)
    }), ! function() {
        var e;
        window._bdlkc >= 1 && ($(document).delegate(".c-container", "mouseenter", function() {
            return function() {
                var t = $(this),
                    n = 300;
                2 == window._bdlkc && (n = 100), e = setTimeout(function() {
                    var e = t.find(".t>a"),
                        n = v(e, {
                            prefix: "http://www.baidu.com",
                            regex: /^\/*(link)\?(.*)$/
                        }),
                        o = t.attr("mu") || t.find(".f13 .g").text(),
                        i = /^(http[s]?:\/\/)?([^\/]+)(.*)/,
                        s = o.match(i);
                    n && n.match(nt.protocol) && /www\.baidu\.com\/link/.test(n) && !/bdlkc=1/.test(n) && (s[2] && (o = "http://" + s[2], t.append('<link rel="dns-prefetch" href="' + o + '" />')), $.ajax({
                        url: n + "&bdlkc=1",
                        type: "GET",
                        contentType: "text/html",
                        success: function() {
                            e.attr("linkpreload", "1")
                        }
                    }), e.attr("href", n + "&bdlkc=1"))
                }, 300)
            }
        }()), $(document).delegate(".c-container", "mouseleave", function() {
            return function() {
                clearTimeout(e)
            }
        }()))
    }();
    var Zt = $("body");
    document.title, ! function(e) {
        var t;
        e.fn.textWidth = function() {
            t || (t = e('<div data-for="result" style="clear:both;display:block;visibility:hidden;position:absolute;top:0;"><span style="width;inherit;margin:0;font:16px/22px arial;"></span></div>').appendTo("body").find("span")), t.html(escapeHTML(e(this).val()));
            var n = t.width();
            return n
        }
    }(jQuery);
    var Yt = !1;
    $(window).on("swap_dom_ready", function(e, t) {
        var n = "";
        !t || !t.real_wd || t.no_predict && 6 != t.pstg || (n = t.real_wd), _(n), x(t)
    }), $(window).on("swap_end", function(e, t) {
        t && (window.cfpromise = new $.Deferred, It && (clearTimeout(It), It = !1, At = null), t.confirm = !1, t.force ? I(t, Ft, 20)() : (At = I(t, Ft, 21), It = setTimeout(At, Y)))
    }), $(window).on("indexOff", function(e, t) {
        Bt.done(function() {
            _(t.p("wd"))
        })
    }), it.support() && "_blank" != vt.attr("target") && Bt.done(function() {
        Ut.setMaxNum(et)
    });
    var en, tn = !1,
        nn = !1;
    _t.mousedown(function() {
        nn = !1
    }).delegate("a,input", "focus", function() {
        nn = !1
    });
    var on, sn, rn;
    $(window).on("swap_end", function(e, t) {
        t || (bds.comm.confirmQuery = bds.comm.query, bds.comm.confirmQid = bds.comm.qid, g()), rn = setTimeout(function() {
            0 == $("#content_left,.result,.content_none").length && n(15, 86400)
        }, 1e4)
    }), it.init(), $(function() {
        var e = $("script").last(),
            t = $("head");
        ht = function() {
            e.nextAll().not("[data-for]").not("#passport-login-pop").remove(), t.find("*").not("[data-for]").not("meta").not("title").not("script[async]").not('link[href*="passport"]').remove()
        }
    }), bds.comm.resultPage && P(), Zt.delegate("#s_tab a", "mousedown", function() {
        setHeadUrl(this)
    }).delegate("#s_tab a", "focusin", function() {
        setHeadUrl(this)
    }), jt.delegate("#page strong+a,#page a.n", "mouseover", function() {
        j({
            env: new p(r($(this).attr("href"))),
            force: !1,
            use_cache: !0,
            no_predict: !0,
            shouldShow: !1,
            pstg: 4
        })
    });
    var an, cn, dn, ln, un;
    Bt.done(function() {
        $(document).mousemove(M)
    }), $("#u .back_org").click(function() {
        var e = new Date;
        e.setTime((new Date).getTime() + 110376e7), Cookie.set("ORIGIN", 2, document.domain, "/", e), Mt ? nt.replace(Mt.buildSyncSearchUrl({
            _r: Math.random()
        })) : nt.href = "/"
    }), $(window).scroll(function() {
        var e, t = $("#head"),
            n = $(window),
            o = 40,
            i = t.offset().top,
            s = function() {
                e && (clearTimeout(e), e = !1), e = setTimeout(function() {
                    var s = n.scrollTop();
                    s > o + i ? e = setTimeout(function() {
                        t.addClass("s_down"), Bt.done(function() {
                            Pt.hide()
                        })
                    }, 0) : o + i >= s && (e = setTimeout(function() {
                        t.removeClass("s_down")
                    }, 0))
                }, 50)
            };
        return s(), s
    }()), Tt.bind("paste", function() {
        if (!(window.__disable_index_predict && 0 == pageState || st || at)) {
            var e = this,
                t = this.value;
            Et = !0, setTimeout(function() {
                e.value && e.value != t && j({
                    env: (new p).clone({
                        wd: $.trim(e.value)
                    }),
                    force: !1,
                    use_cache: !0,
                    no_predict: !0,
                    shouldShow: bds.comm.supportis,
                    pstg: 2
                })
            }, 0)
        }
    })
}

function addEV(e, t, n) {
    window.attachEvent ? e.attachEvent("on" + t, n) : window.addEventListener && e.addEventListener(t, n, !1)
}

function user_c(e) {
    var t = "",
        n = "",
        o = "",
        i = "",
        s = encodeURIComponent(window.document.location.href),
        r = window["BD_PS_C" + (new Date).getTime()] = new Image,
        a = bds && bds.util && bds.util.domain ? bds.util.domain.get("http://nsclick.baidu.com") : "http://nsclick.baidu.com";
    for (v in e) {
        switch (v) {
            case "title":
                o = encodeURIComponent(e[v].replace(/<[^<>]+>/g, ""));
                break;
            case "url":
                o = encodeURIComponent(e[v]);
                break;
            default:
                o = e[v]
        }
        t += v + "=" + o + "&"
    }
    return i = "&mu=" + s, r.src = a + "/v.gif?pid=201&pj=psuser&" + t + "path=" + s + "&wd=" + n + "&t=" + (new Date).getTime(), !0
}

function initPassV3() {
    var e = bds.comm.passnew ? 3 : 2;
    bds.se.passv3 = passport.pop.init({
        apiOpt: {
            loginType: 1,
            product: "mn",
            u: window.document.location.href,
            safeFlag: 0,
            qrcode: e,
            staticPage: location.protocol + "//www.baidu.com/cache/user/html/v3Jump.html"
        },
        cache: !1,
        tangram: !0,
        authsite: ["qzone", "tsina"],
        authsiteCfg: {
            act: "implicit",
            display: "popup",
            jumpUrl: location.protocol + "//www.baidu.com/cache/user/html/xd.html",
            onBindSuccess: function(e, t) {
                var n = decodeURIComponent(t.passport_uname || t.displayname);
                return bds.se.login.success(n), !1
            }
        },
        onLoginSuccess: function(e) {
            e.returnValue = !1;
            var t = e.rsp.data.userName || e.rsp.data.mail || e.rsp.data.phoneNumber;
            bds.se.login.success(t)
        },
        onSubmitStart: function() {},
        onSubmitedErr: function() {},
        onSystemErr: function() {},
        onShow: function() {},
        onHide: function() {
            bds.se.login.setSubpro(""), bds.se.login.setMakeText("")
        },
        onDestroy: function() {}
    })
}

function isp_hijack(e) {
    var t, n, o, i = document.getElementById("wrapper"),
        s = !1;
    bds.comm.query || (s = !0), 1 == e.stat && (t = document.createElement("div"), t.innerHTML = '<div style="zoom:1;_margin-left:1024px;"><div style="position:relative;_float:left;_margin-left:-1024px;"><div style="width:100%;min-width:1024px;"><div style="border:2px solid #fd9162;zoom:1;overflow:hidden;padding:0 0 6px 12px;"><div style="position:relative;width:100%;*overflow:auto;padding-top:10px;"><div style="height:18px;margin-bottom:6px;"><i class="c-icon" style="width:18px;height:18px;background-position:-168px -72px;"></i><strong style="display:inline-block;margin-left:8px;font-size:14px;color:#666;">百度提示您：</strong></div><span style="display:block;color:#333;text-indent:26px;font-size:13px;">我们发现当前您可能受到异常广告弹窗的影响，通常这是受第三方恶意劫持导致。使用 <a href="http://shadu.baidu.com/landingpage/competing.html?from=10064" target="_blank" style="color:#0000D0;text-decoration:underline">防恶意广告专版杀毒软件</a>，可有效改善您的上网体验，免受恶意广告的困扰。</span><a id="isp-close-btn" style="display:inline-block;width:9px;height:9px;position:absolute;top:6px;right:6px;background:url(https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/global/img/wsCloseBtn2_0047ae2.png) no-repeat;" href="javascript:void(0);"></a></div></div></div></div></div>', s ? i.insertBefore(t, i.children[0]) : (i.style.position = "relative", document.getElementById("u").style.top = 0, t.style.margin = "-6px 0 8px 0", document.body.insertBefore(t, i)), n = document.getElementById("isp-close-btn"), o = n.parentNode.getElementsByTagName("a")[0], n.onclick = function() {
        s ? i.removeChild(t) : (document.body.removeChild(t), i.style.position = "", document.getElementById("u").style.top = "4px")
    }, n.onmousedown = function() {
        ns_c({
            fm: "behs",
            tab: "tj_notice",
            cont: "jcbro",
            action: "close",
            area: "topbar"
        })
    }, o.onmousedown = function() {
        ns_c({
            fm: "behs",
            tab: "tj_notice",
            cont: "jcbro",
            action: "click",
            area: "topbar"
        })
    }, ns_c({
        fm: "behs",
        tab: "tj_notice",
        cont: "jcbro",
        action: "show",
        area: "topbar"
    }))
}

function isbase64(e) {
    function t() {
        p = {
            left: $.Deferred(),
            right: $.Deferred()
        }
    }

    function n(e, t) {
        g++;
        var e = e || [],
            t = t || [];
        if (e = $.grep(e, function(e) {
                return f.right.hasOwnProperty(e) ? !1 : (f.right[e] = !1, !0)
            }), t = $.grep(t, function(e) {
                return f.left.hasOwnProperty(e) ? !1 : (f.left[e] = !1, !0)
            }), 2 == c.b64Exp && t.length > 0 && (h = !0, s(t, "left", "reql")), e.length > 0)
            if (e.length > 12) {
                var n = Math.round(e.length / 2),
                    o = [],
                    i = [];
                $.each(e, function(e, t) {
                    n > e ? o.push(t) : i.push(t)
                }), s(o, "right", "reqr2"), s(i, "right", "reqr1")
            } else s(e, "right", "reqr")
    }

    function o(e) {
        for (var t = e, n = 0; __callback_names.hasOwnProperty(e) || window[e];) e = t + "_" + n, n++;
        return __callback_names[e] = 1, e
    }

    function i(e) {
        if ("string" == typeof e) {
            var t, n = 0,
                o = 0;
            for (t = 0; t < e.length; t++) o = t % 20 + 1, n += e.charCodeAt(t) << o;
            return Math.abs(n)
        }
        return 0
    }

    function s(e, t, n) {
        var s = l + "image?imglist=" + e.join(","),
            r = i(e.join(""));
        r = "cb_" + (r + "").substr(Math.max(0, r.length - 8), 8) + "_" + w.length, r = o(r), s += "&cb=" + r;
        var a = 1 * new Date,
            c = $.ajax({
                url: s,
                cache: !0,
                dataType: "jsonp",
                jsonp: !1,
                timeout: 1500,
                jsonpCallback: r,
                success: function(e) {
                    u[n] = 1 * new Date - a, "right" == t ? D(e) : "left" == t && S(e)
                }
            });
        c.always(function() {
            delete __callback_names[r]
        }), w.push(c)
    }

    function r() {
        var e = w.concat(p.left, p.right),
            t = b = $.when.apply($, e);
        b.always(function() {
            +new Date, t === b && (2 == c.b64Exp && _("left"), _("right"))
        })
    }

    function a(e, t) {
        try {
            e.onerror = function() {
                C(this)
            }, m.push({
                obj: e,
                loaded: !1
            }), e.onload = function() {
                for (var e = 0; e < m.length; e++) {
                    var t = m[e];
                    t.obj == this && (t.loaded = !0)
                }
            }, e.src = "data:image/jpeg;base64," + t
        } catch (n) {
            C(e)
        }
    }
    var c;
    bds && bds._base64 ? c = bds._base64 : (c = {
        domain: bds.util.domain && bds.util.domain.get ? bds.util.domain.get("http://b1.bdstatic.com/") : "http://b1.bdstatic.com/",
        b64Exp: -1,
        pdc: !1,
        sep: 16
    }, bds._base64 = c);
    var d = {
            left: "content_left",
            right: "container"
        },
        l = c.domain,
        u = {},
        m = [],
        p = {
            left: $.Deferred(),
            right: $.Deferred()
        },
        f = {
            left: {},
            right: {}
        },
        h = !1,
        g = 0,
        b = null;
    c.inline = !1;
    var w = [];
    e.onSendlog(function() {
        var t = [];
        u && $.each(u, function(e, n) {
            t.push(e + "_" + n)
        }), e.setParam("cus_cusval", t.join("|")), R.isinline() && (e.setParam("cus_b64il", R.ilsum), R.ilparseTime && e.setParam("cus_b64ilpt", R.ilparseTime), R.ilrenderTime && e.setParam("cus_b64ilrt", R.ilrenderTime))
    });
    var v = function(e, t, n, o) {
            if (o = o ? $(o).find("#" + d[t])[0] : document.getElementById(d[t]))
                for (var i = o.getElementsByTagName("IMG"), s = 0; s < i.length; s++) {
                    var r = i[s].getAttribute(n);
                    r && (e.hasOwnProperty(r) && e[r] ? a(i[s], e[r]) : C(i[s]))
                }
        },
        _ = function(e) {
            v(f[e], e, "data-b64-id")
        },
        y = !1,
        T = !1,
        x = function(e, t) {
            y || v(e, "right", "data-b64il-id", t), t && (y = !0), T = !0
        },
        k = 0,
        C = function(t) {
            (t.getAttribute("data-b64-id") || t.getAttribute("data-b64il-id")) && null != t.getAttribute("data-src") && (t.src = t.getAttribute("data-src"), e.setParam("cus_b64fails", ++k))
        },
        D = function(e) {
            I(e, "right")
        },
        S = function(e) {
            I(e, "left")
        },
        I = function(e, t) {
            for (var n in e) e.hasOwnProperty(n) && (f[t][n] = e[n])
        },
        A = function(e) {
            p[e].resolve()
        },
        j = function() {
            f = null, m = null, p = null, $.each(w, function() {
                this.abort()
            })
        },
        R = {
            loadImg: n,
            setDomLoad: A,
            end: r,
            isinline: function() {
                return T
            },
            restart: t,
            destroy: j,
            reqT: u,
            inline: x
        };
    return R
}

function formatDate(e, t) {
    var n = function(e) {
        return e > 9 ? e : "0" + e
    };
    return ("number" == typeof e || "string" == typeof e) && (e = new Date(e)), [e.getFullYear(), n(e.getMonth() + 1), n(e.getDate())].join(t || "")
}

function baseChangeUrl(e) {
    bds.comm.search_tool.st && bds.comm.search_tool.et && bds.comm.search_tool.stftype && e.indexOf("&gpc=") < 0 && (e += "&gpc=" + encodeURIComponent("stf=" + bds.comm.search_tool.st + "," + bds.comm.search_tool.et + "|stftype=" + bds.comm.search_tool.stftype)), bds.comm.search_tool.si && e.indexOf("&si=") < 0 && (e += "&si=" + encodeURIComponent(bds.comm.search_tool.si) + "&ct=2097152"), bds.comm.search_tool.sl_lang && e.indexOf("&sl_lang=") < 0 && (e += "&rsv_srlang=" + encodeURIComponent(bds.comm.search_tool.sl_lang), e += "&sl_lang=" + encodeURIComponent(bds.comm.search_tool.sl_lang), e += "&rsv_rq=" + encodeURIComponent(bds.comm.search_tool.sl_lang)), changeUrl(e)
}

function langChangeUrl(e, t, n) {
    ns_c({
        fm: "advTool",
        qid: bds.comm.qid,
        title: encodeURI(n),
        rsv_advTool_lang: t
    }), baseChangeUrl("wd=" + encodeURIComponent($("#kw").val()) + "&" + e + "=" + encodeURIComponent(t) + "&rsv_srlang=" + encodeURIComponent(t) + "&rsv_rq=" + encodeURIComponent(t))
}

function advChangeUrl(e, t, n, o) {
    if (-1 != t.indexOf("=")) var i = 1;
    else var i = 0;
    ns_c({
        fm: "advTool",
        qid: bds.comm.qid,
        title: encodeURI(n),
        rsv_advTool_time: o,
        rsv_advTool_stet: t.substr(4).replace(",", "_")
    }), baseChangeUrl("wd=" + encodeURIComponent($("#kw").val()) + "&" + e + "=" + encodeURIComponent(t) + "&tfflag=" + i)
}

function fileChangeUrl(e, t, n) {
    ns_c({
        fm: "advTool",
        qid: bds.comm.qid,
        title: encodeURI(t),
        rsv_advTool_ft: n
    }), baseChangeUrl("wd=" + encodeURIComponent(queryReplace("filetype", e)))
}

function queryReplace(e, t) {
    if (!e || "filetype" != e && "site" != e) return o;
    var n = new RegExp("(" + e + "):[^\\s]*[ ]?"),
        o = $("#kw").val();
    return " " == t || null == t ? o.replace(n, "") : o.match(n) ? o.replace(n, "$1:" + t + " ") : e + ":" + t + " " + o
}

function extChangeUrl(e) {
    e ? (ns_c({
        fm: "advTool",
        qid: bds.comm.qid,
        title: encodeURI("精确匹配"),
        rsv_advTool_ext: 1
    }), baseChangeUrl('wd="' + encodeURIComponent($("#kw").val()) + '"')) : (ns_c({
        fm: "advTool",
        qid: bds.comm.qid,
        title: encodeURI("智能匹配"),
        rsv_advTool_ext: 0
    }), baseChangeUrl("wd=" + encodeURIComponent($("#kw").val().replace(/^\"(.*)\"$/, "$1"))))
}
var define, require, esl;
! function(e) {
    function t(e) {
        m(e, M) || (z[e] = 1)
    }

    function n(e, t) {
        function n(e) {
            0 === e.indexOf(".") && i.push(e)
        }
        var i = [];
        if ("string" == typeof e ? n(e) : j(e, function(e) {
                n(e)
            }), i.length > 0) throw new Error("[REQUIRE_FATAL]Relative ID is not allowed in global require: " + i.join(", "));
        var s = B.waitSeconds;
        return s && e instanceof Array && (U && clearTimeout(U), U = setTimeout(o, 1e3 * s)), F(e, t)
    }

    function o() {
        function e(r, a) {
            if (!s[r] && !m(r, M)) {
                s[r] = 1;
                var c = N[r];
                c ? (a || !m(r, E) || c.hang) && (o[r] || (o[r] = 1, t.push(r)), j(c.depMs, function(t) {
                    e(t.absId, t.hard)
                })) : i[r] || (i[r] = 1, n.push(r))
            }
        }
        var t = [],
            n = [],
            o = {},
            i = {},
            s = {};
        for (var r in z) e(r, 1);
        if (t.length || n.length) throw new Error("[MODULE_TIMEOUT]Hang(" + (t.join(", ") || "none") + ") Miss(" + (n.join(", ") || "none") + ")")
    }

    function i(e) {
        j(W, function(t) {
            a(e, t.deps, t.factory)
        }), W.length = 0
    }

    function s(e, t, n) {
        if (null == n && (null == t ? (n = e, e = null) : (n = t, t = null, e instanceof Array && (t = e, e = null))), null != n) {
            var o = window.opera;
            if (!e && document.attachEvent && (!o || "[object Opera]" !== o.toString())) {
                var i = q();
                e = i && i.getAttribute("data-require-id")
            }
            e ? a(e, t, n) : W[0] = {
                deps: t,
                factory: n
            }
        }
    }

    function r() {
        var e = B.config[this.id];
        return e && "object" == typeof e ? e : {}
    }

    function a(e, t, n) {
        N[e] || (N[e] = {
            id: e,
            depsDec: t,
            deps: t || ["require", "exports", "module"],
            factoryDeps: [],
            factory: n,
            exports: {},
            config: r,
            state: P,
            require: x(e),
            depMs: [],
            depMkv: {},
            depRs: [],
            hang: 0
        })
    }

    function c(e) {
        var t = N[e];
        if (t && !m(e, O)) {
            var n = t.deps,
                o = t.factory,
                i = 0;
            "function" == typeof o && (i = Math.min(o.length, n.length), !t.depsDec && o.toString().replace(/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm, "").replace(/require\(\s*(['"])([^'"]+)\1\s*\)/g, function(e, t, o) {
                n.push(o)
            }));
            var s = [],
                r = [];
            j(n, function(n, o) {
                var a, c, d = S(n),
                    l = k(d.mod, e);
                l && !H[l] ? (d.res && (c = {
                    id: n,
                    mod: l,
                    res: d.res
                }, r.push(n), t.depRs.push(c)), a = t.depMkv[l], a || (a = {
                    id: d.mod,
                    absId: l,
                    hard: i > o
                }, t.depMs.push(a), t.depMkv[l] = a, s.push(l))) : a = {
                    absId: l
                }, i > o && t.factoryDeps.push(c || a)
            }), t.state = O, u(e), b(s), r.length && t.require(r, function() {
                j(t.depRs, function(t) {
                    t.absId || (t.absId = k(t.id, e))
                }), d()
            })
        }
    }

    function d() {
        for (var e in z) c(e), l(e), p(e)
    }

    function l(e) {
        function t(e) {
            if (c(e), !m(e, O)) return !1;
            if (m(e, E) || n[e]) return !0;
            n[e] = 1;
            var o = N[e],
                i = !0;
            return j(o.depMs, function(e) {
                i = t(e.absId) && i
            }), i && j(o.depRs, function(e) {
                return i = !!e.absId
            }), i && !m(e, E) && (o.state = E), n[e] = 0, i
        }
        var n = {};
        t(e)
    }

    function u(t) {
        function n() {
            if (!o && i.state === E) {
                o = 1;
                var n = 1;
                if (j(i.factoryDeps, function(e) {
                        var t = e.absId;
                        return H[t] ? void 0 : (p(t), n = m(t, M))
                    }), n) {
                    try {
                        var s = i.factory,
                            r = "function" == typeof s ? s.apply(e, f(i.factoryDeps, {
                                require: i.require,
                                exports: i.exports,
                                module: i
                            })) : s;
                        null != r && (i.exports = r), i.invokeFactory = null
                    } catch (a) {
                        throw i.hang = 1, a
                    }
                    g(t)
                }
            }
        }
        var o, i = N[t];
        i.invokeFactory = n
    }

    function m(e, t) {
        return N[e] && N[e].state >= t
    }

    function p(e) {
        var t = N[e];
        t && t.invokeFactory && t.invokeFactory()
    }

    function f(e, t) {
        var n = [];
        return j(e, function(e, o) {
            "object" == typeof e && (e = e.absId), n[o] = t[e] || N[e].exports
        }), n
    }

    function h(e, t) {
        if (m(e, M)) return void t();
        var n = G[e];
        n || (n = G[e] = []), n.push(t)
    }

    function g(e) {
        var t = N[e];
        t.state = M, delete z[e];
        for (var n = G[e] || [], o = n.length; o--;) n[o]();
        n.length = 0, G[e] = null
    }

    function b(t, n, o) {
        function i() {
            if ("function" == typeof n && !s) {
                var o = 1;
                j(t, function(e) {
                    return H[e] ? void 0 : o = !!m(e, M)
                }), o && (s = 1, n.apply(e, f(t, H)))
            }
        }
        var s = 0;
        j(t, function(e) {
            H[e] || m(e, M) || (h(e, i), (e.indexOf("!") > 0 ? v : w)(e, o))
        }), i()
    }

    function w(t) {
        function n() {
            var e = V[t];
            L(e || t, o)
        }

        function o() {
            if (r) {
                var n;
                "function" == typeof r.init && (n = r.init.apply(e, f(a, H))), null == n && r.exports && (n = e, j(r.exports.split("."), function(e) {
                    return n = n[e], !!n
                })), s(t, a, function() {
                    return n || {}
                })
            } else i(t);
            d()
        }
        if (!Q[t] && !N[t]) {
            Q[t] = 1;
            var r = B.shim[t];
            r instanceof Array && (B.shim[t] = r = {
                deps: r
            });
            var a = r && (r.deps || []);
            a ? (j(a, function(e) {
                B.shim[e] || (B.shim[e] = {})
            }), F(a, n)) : n()
        }
    }

    function v(e, t) {
        function n(t) {
            c.exports = t || !0, g(e)
        }

        function o(o) {
            var i = t ? N[t].require : F;
            o.load(a.res, i, n, r.call({
                id: e
            }))
        }
        if (!N[e]) {
            var s = V[e];
            if (s) return void w(s);
            var a = S(e),
                c = {
                    id: e,
                    state: O
                };
            N[e] = c, n.fromText = function(e, t) {
                new Function(t)(), i(e)
            }, o(F(a.mod))
        }
    }

    function _(e, t) {
        var n = I(e, 1, t);
        return n.sort(R), n
    }

    function y() {
        function e(e) {
            V[C(e)] = n
        }
        B.baseUrl = B.baseUrl.replace(/\/$/, "") + "/", X = _(B.paths), K = _(B.map, 1), j(K, function(e) {
            e.v = _(e.v)
        });
        var t = K[K.length - 1];
        t && "*" === t.k && j(K, function(e) {
            e != t && (e.v = e.v.concat(t.v))
        }), J = [], j(B.packages, function(e) {
            var t = e;
            "string" == typeof e && (t = {
                name: e.split("/")[0],
                location: e,
                main: "main"
            }), t.location = t.location || t.name, t.main = (t.main || "main").replace(/\.js$/i, ""), t.reg = A(t.name), J.push(t)
        }), J.sort(R), Z = _(B.urlArgs, 1), V = {};
        for (var n in B.bundles) j(B.bundles[n], e)
    }

    function $(e, t, n) {
        j(t, function(t) {
            return t.reg.test(e) ? (n(t.v, t.k, t), !1) : void 0
        })
    }

    function T(e, t) {
        var n = /(\.[a-z0-9]+)$/i,
            o = /(\?[^#]*)$/,
            i = "",
            s = e,
            r = "";
        o.test(e) && (r = RegExp.$1, e = e.replace(o, "")), n.test(e) && (i = RegExp.$1, s = e.replace(n, "")), null != t && (s = k(s, t));
        var a, c = s;
        return $(s, X, function(e, t) {
            c = c.replace(t, e), a = 1
        }), a || $(s, J, function(e, t, n) {
            c = c.replace(n.name, n.location)
        }), /^([a-z]{2,10}:\/)?\//i.test(c) || (c = B.baseUrl + c), c += i + r, $(s, Z, function(e) {
            c += (c.indexOf("?") > 0 ? "&" : "?") + e
        }), c
    }

    function x(e) {
        function n(n, i) {
            if ("string" == typeof n) {
                if (!o[n]) {
                    var s = k(n, e);
                    if (p(s), !m(s, M)) throw new Error('[MODULE_MISS]"' + s + '" is not exists!');
                    o[n] = N[s].exports
                }
                return o[n]
            }
            if (n instanceof Array) {
                var r = [],
                    a = [];
                j(n, function(n, o) {
                    var i = S(n),
                        s = k(i.mod, e),
                        c = i.res,
                        d = s;
                    if (c) {
                        var l = s + "!" + c;
                        0 !== c.indexOf(".") && V[l] ? s = d = l : d = null
                    }
                    a[o] = d, t(s), r.push(s)
                }), b(r, function() {
                    j(a, function(o, i) {
                        null == o && (o = a[i] = k(n[i], e), t(o))
                    }), b(a, i, e), d()
                }, e), d()
            }
        }
        var o = {};
        return n.toUrl = function(t) {
            return T(t, e || "")
        }, n
    }

    function k(e, t) {
        if (!e) return "";
        t = t || "";
        var n = S(e);
        if (!n) return e;
        var o = n.res,
            i = D(n.mod, t);
        if ($(t, K, function(e) {
                $(i, e, function(e, t) {
                    i = i.replace(t, e)
                })
            }), i = C(i), o) {
            var s = m(i, M) && F(i);
            o = s && s.normalize ? s.normalize(o, function(e) {
                return k(e, t)
            }) : k(o, t), i += "!" + o
        }
        return i
    }

    function C(e) {
        return j(J, function(t) {
            var n = t.name;
            return n === e ? (e = n + "/" + t.main, !1) : void 0
        }), e
    }

    function D(e, t) {
        if (0 !== e.indexOf(".")) return e;
        for (var n = t.split("/").slice(0, -1).concat(e.split("/")), o = [], i = 0; i < n.length; i++) {
            var s = n[i];
            switch (s) {
                case ".":
                    break;
                case "..":
                    o.length && ".." !== o[o.length - 1] ? o.pop() : o.push(s);
                    break;
                default:
                    s && o.push(s)
            }
        }
        return o.join("/")
    }

    function S(e) {
        var t = e.split("!");
        return t[0] ? {
            mod: t[0],
            res: t[1]
        } : void 0
    }

    function I(e, t, n) {
        var o = [];
        for (var i in e)
            if (e.hasOwnProperty(i)) {
                var s = {
                    k: i,
                    v: e[i]
                };
                o.push(s), t && (s.reg = "*" === i && n ? /^/ : A(i))
            }
        return o
    }

    function A(e) {
        return new RegExp("^" + e + "(/|$)")
    }

    function j(e, t) {
        if (e instanceof Array)
            for (var n = 0, o = e.length; o > n && t(e[n], n) !== !1; n++);
    }

    function R(e, t) {
        var n = e.k || e.name,
            o = t.k || t.name;
        return "*" === o ? -1 : "*" === n ? 1 : o.length - n.length
    }

    function q() {
        if (Y) return Y;
        if (et && "interactive" === et.readyState) return et;
        for (var e = document.getElementsByTagName("script"), t = e.length; t--;) {
            var n = e[t];
            if ("interactive" === n.readyState) return et = n, n
        }
    }

    function L(e, t) {
        function n() {
            var e = o.readyState;
            ("undefined" == typeof e || /^(loaded|complete)$/.test(e)) && (o.onload = o.onreadystatechange = null, o = null, t())
        }
        var o = document.createElement("script");
        o.setAttribute("data-require-id", e), o.src = T(e + ".js"), o.async = !0, o.readyState ? o.onreadystatechange = n : o.onload = n, Y = o, nt ? tt.insertBefore(o, nt) : tt.appendChild(o), Y = null
    }
    var U, N = {},
        P = 1,
        O = 2,
        E = 3,
        M = 4,
        z = {},
        H = {
            require: n,
            exports: 1,
            module: 1
        },
        F = x(),
        B = {
            baseUrl: "./",
            paths: {},
            config: {},
            map: {},
            packages: [],
            shim: {},
            waitSeconds: 0,
            bundles: {},
            urlArgs: {}
        };
    n.version = "2.1.4", n.loader = "esl", n.toUrl = F.toUrl;
    var W = [];
    s.amd = {};
    var G = {},
        Q = {};
    n.config = function(e) {
        if (e) {
            for (var t in B) {
                var n = e[t],
                    o = B[t];
                if (n)
                    if ("urlArgs" === t && "string" == typeof n) B.urlArgs["*"] = n;
                    else if (o instanceof Array) o.push.apply(o, n);
                else if ("object" == typeof o)
                    for (var i in n) o[i] = n[i];
                else B[t] = n
            }
            y()
        }
    }, y();
    var X, J, K, V, Z, Y, et, tt = document.getElementsByTagName("head")[0],
        nt = document.getElementsByTagName("base")[0];
    nt && (tt = nt.parentNode), define || (define = s, require || (require = n), esl = n);
    var ot;
    ! function() {
        for (var e = document.getElementsByTagName("script"), t = e.length; t--;) {
            var n = e[t];
            if (ot = n.getAttribute("data-main")) break
        }
    }(), ot && setTimeout(function() {
        n([ot])
    }, 4)
}(this);
var bds = window.bds || {};
bds.amd = {
        keys: {},
        addPaths: function(e) {
            "object" == typeof e && (require.config({
                paths: e
            }), $.extend(bds.amd.keys, e))
        },
        exist: function(e) {
            return e && "undefined" != typeof bds.amd.keys[e] ? !0 : !1
        }
    },
    function() {
        var e = bds.util && bds.util.domain ? bds.util.domain.get("http://s1.bdstatic.com") : "http://s1.bdstatic.com",
            t = bds.util && bds.util.domain ? bds.util.domain.get("http://ecmb.bdimg.com") : "http://ecmb.bdimg.com";
        require.config({
            baseUrl: e + "/r/www/cache/biz",
            packages: [{
                name: "ecma",
                location: t + "/public01"
            }, {
                name: "ecmb",
                location: t + "/public01"
            }],
            paths: {
                aladdin: e + "/r/www/aladdin",
                ui: e + "/r/www/cache/amd/ui",
                "ui/config": e + "/r/www/cache/amd/ui/Control",
                "ui/lib": e + "/r/www/cache/amd/ui/Control",
                "ui/Control": e + "/r/www/cache/amd/ui/Control"
            },
            urlArgs: {
                "ui/ImgZoomHover": "20141104",
                "ui/ImgZoomHover1": "20141104",
                "ui/ImgZoomHover2": "20141104",
                "ui/ImgZoomHover3": "20141104"
            }
        })
    }(), bds.amd.addPaths({
        "voice/js/voice": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/voice/js/voice_1e62c0f",
        "plugins/swfobject": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/plugins/swfobject_0178953",
        "soutu/js/tu": "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/soutu/js/tu_329aca4"
    }), bds && bds.comm && (bds.comm.did = function() {
        for (var e = "", t = 0; 32 > t; t++) e += Math.floor(16 * Math.random()).toString(16);
        return e
    }(), bds.comm.isAsync = function() {
        var e = "onhashchange" in window,
            t = "onpopstate" in window;
        return (t || e) && 1 != Cookie.get("ISSW") && !window.__disable_preload
    }()), jQuery && jQuery.extend({
        stringify: function(e) {
            function t(e) {
                return /["\\\x00-\x1f]/.test(e) && (e = e.replace(/["\\\x00-\x1f]/g, function(e) {
                    var t = i[e];
                    return t ? t : (t = e.charCodeAt(), "\\u00" + Math.floor(t / 16).toString(16) + (t % 16).toString(16))
                })), '"' + e + '"'
            }

            function n(e) {
                var t, n, o, i = ["["],
                    s = e.length;
                for (n = 0; s > n; n++) switch (o = e[n], typeof o) {
                    case "undefined":
                    case "function":
                    case "unknown":
                        break;
                    default:
                        t && i.push(","), i.push($.stringify(o)), t = 1
                }
                return i.push("]"), i.join("")
            }
            if ("JSON" in window) return JSON.stringify(e);
            var o = typeof e;
            if ("object" != o || null === e) return "string" == o && (e = '"' + e + '"'), String(e);
            var i = {
                "\b": "\\b",
                "  ": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            };
            switch (typeof e) {
                case "undefined":
                    return "undefined";
                case "number":
                    return isFinite(e) ? String(e) : "null";
                case "string":
                    return t(e);
                case "boolean":
                    return String(e);
                default:
                    if (null === e) return "null";
                    if ("[object Array]" === Object.prototype.toString.call(e)) return n(e);
                    var s, r, a = ["{"],
                        c = $.stringify;
                    for (var d in e)
                        if (Object.prototype.hasOwnProperty.call(e, d)) switch (r = e[d], typeof r) {
                            case "undefined":
                            case "unknown":
                            case "function":
                                break;
                            default:
                                s && a.push(","), s = 1, a.push(c(d) + ":" + c(r))
                        }
                    return a.push("}"), a.join("")
            }
        },
        format: function(e, t) {
            e = String(e);
            var n = Array.prototype.slice.call(arguments, 1),
                o = Object.prototype.toString;
            return n.length ? (n = 1 == n.length && null !== t && /\[object Array\]|\[object Object\]/.test(o.call(t)) ? t : n, e.replace(/#\{(.+?)\}/g, function(e, t) {
                var i = n[t];
                return "[object Function]" == o.call(i) && (i = i(t)), "undefined" == typeof i ? "" : i
            })) : e
        },
        subByte: function(e, t, n) {
            var o = [],
                i = e.split("");
            n = n || "…";
            for (var s = 0, r = i.length; r > s; s++) i[s].charCodeAt(0) > 255 && o.push("*"), o.push(i[s]);
            return t && t > 0 && o.length > t ? i = o.join("").substring(0, t - 1).replace(/\*/g, "") + n : e
        },
        getByteLength: function(e) {
            for (var t = [], n = e.split(""), o = 0, i = n.length; i > o; o++) n[o].charCodeAt(0) > 255 && t.push("*"), t.push(n[o]);
            return t.length
        },
        _isValidKey: function(e) {
            return new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+$').test(e)
        },
        setCookie: function(e, t, n) {
            if (t = encodeURIComponent(t), jQuery._isValidKey(e)) {
                n = n || {};
                var o = n.expires;
                "number" == typeof n.expires && (o = new Date, o.setTime(o.getTime() + n.expires)), document.cookie = e + "=" + t + (n.path ? "; path=" + n.path : "") + (o ? "; expires=" + o.toGMTString() : "") + (n.domain ? "; domain=" + n.domain : "") + (n.secure ? "; secure" : "")
            }
        },
        getCookie: function(e) {
            var t = "";
            if (jQuery._isValidKey(e)) {
                var n = new RegExp("(^| )" + e + "=([^;]*)(;|$)"),
                    o = n.exec(document.cookie);
                if (o && (t = o[2] || null, "string" == typeof t)) return t = decodeURIComponent(t)
            }
            return null
        },
        removeCookie: function(e, t) {
            t = t || {}, t.expires = new Date(0), jQuery.setCookie(e, "", t)
        },
        limitWd: function(e, t) {
            if ("" === e) return "";
            e += "";
            var n = e.split(""),
                o = n.length,
                i = 0,
                s = t || 255;
            if (o <= parseInt(s / 2)) return e;
            for (var r = 0; o > r; r++) {
                if (i += n[r].charCodeAt(0) > 255 ? 2 : 1, i === s) return n = e.substring(0, r + 1);
                if (i > s) return n = e.substring(0, r)
            }
            return e
        }
    }), $(window).on("resize", function() {
        "pageState" in window && 0 != pageState && (bds.util.setContainerWidth(), bds.event.trigger("se.window_resize"))
    }), bds.util.addStyle = function(e) {
        if (isIE) {
            var t = document.createStyleSheet();
            t.cssText = e
        } else {
            var n = document.createElement("style");
            n.type = "text/css", n.appendChild(document.createTextNode(e)), document.getElementsByTagName("HEAD")[0].appendChild(n)
        }
    }, bds.util.getContentRightHeight = function() {
        return $("#content_right").get(0) ? $("#content_right").get(0).offsetHeight : 0
    }, bds.util.getContentLeftHeight = function() {
        return $("#content_left").get(0) ? $("#content_left").get(0).offsetHeight : 0
    }, window.A || (window.bds = window.bds || {}, bds.util = bds.util || {}, bds.util.getWinWidth = function() {
        return window.document.documentElement.clientWidth
    }, bds.util.setContainerWidth = function() {
        var e = G("container"),
            t = G("wrapper"),
            n = function(e, t) {
                t.className = t.className.replace(e, "")
            },
            o = function(e, t) {
                t.className = (t.className + " " + e).replace(/^\s+/g, "")
            },
            i = function(e, t) {
                return e.test(t.className)
            };
        bds.util.getWinWidth() < 1207 ? (e && (n(/\bcontainer_l\b/g, e), i(/\bcontainer_s\b/, e) || o("container_s", e)), t && (n(/\bwrapper_l\b/g, t), i(/\bwrapper_s\b/, t) || o("wrapper_s", t)), bds.comm.containerSize = "s") : (e && (n(/\bcontainer_s\b/g, e), i(/\bcontainer_l\b/, e) || o("container_l", e)), t && (n(/\bwrapper_s\b/g, t), i(/\bwrapper_l\b/, t) || o("wrapper_l", t)), bds.comm.containerSize = "l")
    }, function() {
        var e = [],
            t = !1,
            n = function(e, t) {
                try {
                    e.call(t)
                } catch (n) {}
            },
            o = function() {
                this.ids = [], this.has = !0, this.list = [], this.logs = [], this.loadTimes = [], this.groupData = [], this.mergeFns = [], this._currentContainer = null
            };
        window.A = bds.aladdin = {}, n(o, window.A), bds.ready = function(o) {
            "function" == typeof o && (t ? n(o) : e.push(o))
        }, bds.doReady = function() {
            for (t = !0; e.length;) n(e.shift())
        }, bds.clearReady = function() {
            t = !1, e = []
        }, A.__reset = o;
        var i = function() {
                var e = document.getElementsByTagName("script");
                return function() {
                    var t = e[e.length - 1];
                    window.currentScriptElem && (t = window.currentScriptElem);
                    for (var n = t; n;) {
                        if (n.className && /(?:^|\s)result(?:-op)?(?:$|\s)/.test(n.className) && (tplname = n.getAttribute("tpl"))) return n;
                        n = n.parentNode
                    }
                }
            }(),
            s = function(e, t, n) {
                var o;
                if (e.initIndex ? o = A.groupData[e.initIndex - 1] : (o = {
                        container: e,
                        data: {},
                        handlers: []
                    }, e.initIndex = A.groupData.length + 1, A.groupData.push(o)), "function" == typeof t) o.handlers.push(t);
                else if ("object" == typeof t)
                    for (var i in t) t.hasOwnProperty(i) && (o.data[i] = t[i]);
                else o.data[t] = n
            };
        A.init = A.setup = function(e, t) {
            if (void 0 !== e && null !== e) {
                var n = A._currentContainer || i();
                n && s(n, e, t)
            }
        }, A.merge = function(e, t) {
            A.mergeFns.push({
                tplName: e,
                fn: t
            })
        }
    }()), A.uiPrefix = "//www.baidu.com/cache/aladdin/ui/",
    function() {
        var e = window.bds.aladdin,
            t = [],
            n = {},
            o = 0,
            i = function(e, t) {
                try {
                    e.call(t)
                } catch (n) {}
            },
            s = function(e) {
                e.ajaxId = ++o, n[e.ajaxId] = e
            },
            r = function(e) {
                delete n[e.ajaxId]
            },
            a = function(e) {
                return e.ajaxId ? n.hasOwnProperty(e.ajaxId) : !1
            },
            c = function(e) {
                var t = {};
                if (e) try {
                    var n = new Function("return " + e)();
                    n && (t = n)
                } catch (o) {}
                return t
            },
            d = function() {
                for (var e, t, n = $(".result-op").get().concat($(".result").get()), o = {}, i = 0; t = n[i]; i++)(e = t.getAttribute("tpl")) && (o[e] ? o[e].push(t) : o[e] = [t]);
                return o
            },
            l = [],
            u = [];
        e.addDisposeHandler = function(e) {
            u.push(e)
        }, e.dispose = function() {
            for (; l.length;) {
                var e = l.shift();
                i(e.fn, e.obj)
            }
            for (var t = u, n = 0; n < t.length; n++) {
                var e = t[n];
                i(e.fn, e.obj)
            }
        }, e.__clearDispose = function() {
            l = [], u = []
        }, e.addDisposeHandler({
            obj: n,
            fn: function() {
                for (var e in n) n.hasOwnProperty(e) && delete n[e]
            }
        }), e._Aladdin = function() {
            this.p1 = 0, this.mu = null
        }, $.extend(e._Aladdin.prototype, {
            _init: function() {
                var e, t = this;
                e = t.container;
                var n = c(t.container.getAttribute("data-click"));
                t.p1 = n.p1 || e.id, t.mu = n.mu || e.getAttribute("mu"), t.srcid = n.rsv_srcid || e.getAttribute("srcid")
            },
            q: function(e, t) {
                return t = t || "", $(this.container).find(t + "." + e).get()
            },
            qq: function(e, t) {
                return this.q(e, t)[0]
            },
            find: function(e) {
                return window.jQuery(e, this.container)
            },
            ready: function() {
                $(document).ready.apply(this, arguments)
            },
            ajax: function(t, n, o) {
                var i = e.AJAX,
                    c = +new Date,
                    d = o.params || {},
                    l = {
                        query: t,
                        co: o.co || "",
                        resource_id: n,
                        t: c
                    };
                $.extend(l, i.PARAMS), $.extend(l, d);
                var t = $.param(l),
                    u = i.API_URL + "?" + t,
                    m = function() {
                        var t = new Image;
                        t.src = $.format(i.ERR_URL, {
                            url: u
                        }), e.logs.push(t)
                    },
                    p = (new Date).getTime(),
                    f = function(e) {
                        var t = (new Date).getTime() - p,
                            o = {
                                fm: "opendataajax",
                                srcid: n,
                                time: t,
                                status: e
                            };
                        ns_c(o)
                    },
                    h = function(e) {
                        a(h) && (b(), 0 == e.status ? o.success(e.data) : (o.error && o.error(e.status), m()), f(0))
                    },
                    g = function() {
                        a(g) && (b(), o.timeout && o.timeout(), m(), f(1))
                    },
                    b = function() {
                        r(h), r(g)
                    };
                s(h), s(g), $.ajax({
                    url: u,
                    scriptCharset: i.PARAMS.oe,
                    timeout: i.TIMEOUT,
                    dataType: "jsonp",
                    jsonp: "cb",
                    success: h,
                    error: g
                })
            }
        }), e.AJAX = {
            API_URL: bds.util.domain && bds.util.domain.get ? bds.util.domain.get("http://opendata.baidu.com/api.php") : "http://opendata.baidu.com/api.php",
            ERR_URL: bds.util.domain && bds.util.domain.get ? bds.util.domain.get("http://open.baidu.com/stat/al_e.gif?ajax_err_url=#{url}") : "http://open.baidu.com/stat/al_e.gif?ajax_err_url=#{url}",
            PARAMS: {
                ie: "utf8",
                oe: "gbk",
                cb: "op_aladdin_callback",
                format: "json",
                tn: "baidu"
            },
            TIMEOUT: 6e3
        }, t.push(function(e) {
            var t = /msie (\d+\.\d+)/i.test(navigator.userAgent) ? document.documentMode || +RegExp.$1 : void 0;
            if (t) {
                var n = document.charset;
                $.each(e.container.getElementsByTagName("form"), function(e, t) {
                    var o = function() {
                        var e = t.acceptCharset;
                        e && "UNKNOWN" != e.toString().toUpperCase() && e != document.charset && (document.charset = e, setTimeout(function() {
                            document.charset = n
                        }, 1e3))
                    };
                    $(t).on("submit", o);
                    var i = t.submit;
                    t.submit = function() {
                        o();
                        try {
                            i.call(t)
                        } catch (e) {
                            i()
                        }
                    }
                })
            }
        }), e.__runAla = function() {
            var n = d();
            $.each(e.mergeFns, function(t, o) {
                var i = n[o.tplName];
                i && $.each(i, function(t, n) {
                    e._currentContainer = n, o.fn(), e._currentContainer = null
                })
            }), $.each(e.groupData, function(n, o) {
                var s, r, a, c = new e._Aladdin;
                c.container = o.container, c.data = o.data, c._init(), e.list.push(c);
                var d = o.handlers;
                for (s = new Date; d.length;) i(d.shift(), c);
                "function" == typeof c.dispose && (l.push({
                    obj: c,
                    fn: c.dispose
                }), c.dispose = null), r = new Date, a = {
                    srcid: c.srcid
                }, a.tpl = c.container.getAttribute("tpl"), a.time = r - s, e.loadTimes.push(a), $.each(t, function(e, t) {
                    t.call(c, c)
                })
            })
        }
    }(),
    function() {
        function e(s, r) {
            var a = "string" == typeof s ? s.split(/\s*,\s*/) : s;
            if (a.length > 1)
                if (r) e(a.shift(), function() {
                    a.length > 0 && e(a, r)
                });
                else
                    for (; a.length;) e(a.shift());
            else {
                if (s = a[0], "jquery" === s && window.jQuery) return !i.ui.jquery && (i.ui.jquery = window.jQuery), void(r && r());
                var c = s.replace(/\./g, "/"),
                    d = s.replace(/^[\s\S]*\./, ""),
                    l = i.uiPrefix + c + "/" + d;
                0 == c.search("style/") ? t(l + ".css", r) : (l += ".js", m.hasOwnProperty(s) ? "function" == typeof m[s] ? l = m[s](s, l) : "string" == typeof m[s] && (l = m[s]) : m.hasOwnProperty("*") && (l = m["*"](s, l)), r ? o(l, r) : n(l))
            }
        }

        function t(e, t) {
            if (t = t || u, e in s) return void t();
            var n = c.createElement("link");
            n.rel = "stylesheet", n.type = "text/css", n.href = e, n.setAttribute("data-for", "A.ui"), d.appendChild(n), s[e] = 1, t()
        }

        function n(e) {
            return l ? void o(e, u) : void(e in s || (c.write('<script charset="gb2312" type="text/javascript" src="' + e + '"></script>'), s[e] = 1))
        }

        function o(e, t) {
            if (t = t || u, e in s) return void t();
            if (e in r) return void a[e].push(t);
            r[e] = 1;
            var n = a[e] = [t],
                o = c.createElement("script");
            o.type = "text/javascript", o.charset = "gb2312", o.onload = o.onreadystatechange = function() {
                if (!this.readyState || "loaded" === this.readyState || "complete" === this.readyState) {
                    for (; n.length;) n.shift()();
                    delete r[e], s[e] = 1, o.onload = o.onreadystatechange = null
                }
            }, o.src = e, o.setAttribute("data-for", "A.ui"), d.insertBefore(o, d.firstChild)
        }
        var i = window.A,
            s = {},
            r = {},
            a = {},
            c = document,
            d = c.getElementsByTagName("head")[0],
            l = !1,
            u = (i.baidu, function() {}),
            m = {
                "*": function(e, t) {
                    return t + "?v=2014010100"
                },
                scrollbarv: function(e, t) {
                    return t + "?v=20150226"
                },
                likeshare4: function(e, t) {
                    return t + "?v=20140116"
                },
                mboxsingleton: function(e, t) {
                    return t + "?v=20141008"
                },
                sms: function(e, t) {
                    return t + "?v=20140508"
                },
                tab: function(e, t) {
                    return t + "?v=20140117"
                },
                tabs: function(e, t) {
                    return t + "?v=20140116"
                },
                musicplayer: function(e, t) {
                    return t + "?v=20150310"
                },
                slider: function(e, t) {
                    return t + "?v=20140123"
                },
                suggestion: function(e, t) {
                    return t + "?v=20140924"
                },
                tabs5: function(e, t) {
                    return t + "?v=20150429"
                },
                tabx: function(e, t) {
                    return t + "?v=20140117"
                },
                dropdown1: function(e, t) {
                    return t + "?v=20140117"
                },
                dropdown21: function(e, t) {
                    return t + "?v=20140227"
                },
                advert: function(e, t) {
                    return t + "?v=20140523"
                },
                advert2: function(e, t) {
                    return t + "?v=20141127"
                },
                honourCard: function(e, t) {
                    return t + "?v=20140926"
                },
                honourCard3: function(e, t) {
                    return t + "?v=20160415"
                },
                honourCard4: function(e, t) {
                    return t + "?v=20161126"
                },
                share: function(e, t) {
                    return t + "?v=20141107"
                },
                qHotCity: function(e, t) {
                    return t + "?v=20150326"
                },
                mapapi: function(e, t) {
                    return t + "?v=20150310"
                },
                qunarfilters: function(e, t) {
                    return t + "?v=20141114"
                },
                renderIframe3: function(e, t) {
                    return t + "?v=20150310"
                },
                share2: function(e, t) {
                    return t + "?v=20150212"
                },
                ALD_feedback: function(e, t) {
                    return t + "?v=20150113"
                },
                addtohome: function(e, t) {
                    return t + "?v=20150310"
                },
                addtohome2: function(e, t) {
                    return t + "?v=20150310"
                },
                gpsApi: function(e, t) {
                    return t + "?v=20150310"
                },
                simGps: function(e, t) {
                    return t + "?v=20150310"
                }
            };
        $(document).ready(function() {
            l = !0
        }), i.addDisposeHandler({
            obj: i,
            fn: function() {
                for (var e in a)
                    if (a.hasOwnProperty(e))
                        for (var t = a[e]; t.length;) t.pop()
            }
        }), e.cache = s, i.uicss = function(e) {
            t(i.uiPrefix + e)
        }, i.uijs = function(e, t) {
            o(i.uiPrefix + e, t)
        }, i.uijsPathMap = function(e) {
            $.extend(m, e)
        }, i.use = e, i.ui = i.ui || {}, i.addCssText = function(e) {
            var t = "opui-style-tag-id",
                n = "data-for",
                o = "A.ui",
                i = document.getElementById(t);
            i || (i = document.createElement("style"), i.setAttribute("type", "text/css"), i.setAttribute(n, o), i.id = t, document.getElementsByTagName("head")[0].appendChild(i));
            try {
                var s = document.createTextNode(e);
                i.appendChild(s)
            } catch (r) {
                i.styleSheet && (i.styleSheet.cssText += e)
            }
        }, $(window).on("swap_end", function() {
            var e = /MSIE\s?6/.test(window.navigator.userAgent),
                t = function(e, t, n) {
                    $(e).each(function(e, o) {
                        var i = $(o),
                            s = new Image,
                            r = i.attr("src");
                        s.onload = function() {
                            var e = t,
                                o = n,
                                r = this.width,
                                a = this.height,
                                c = r / a / (e / o);
                            c > 1 ? (r = r > e ? e : "auto", a = "auto") : (a = a > o ? o : "auto", r = "auto"), i.css({
                                height: a,
                                width: r
                            }), s.onload = null, s = null
                        }, s.src = r
                    })
                };
            e && t("img.result-left-img", 98, 121), $(".c-feedback").bind("click", function() {
                var e = this;
                i.use("ALD_feedback", function() {
                    var t, n, o = "right",
                        s = $(e);
                    s.parents("#content_left").length ? (o = "left", n = s.parents(".result-op"), t = n.attr("srcid")) : s.parents("#content_right").length && (n = s.parents("#con-ar"));
                    var r = {
                            query: bds.comm.query,
                            srcid: t,
                            target: n,
                            username: bds.comm.username,
                            flag: o
                        },
                        a = i.ui.ALD_feedback(r);
                    i.addDisposeHandler({
                        obj: a,
                        fn: a.dispose
                    })
                })
            })
        })
    }(), $(window).on("swap_begin", function() {
        A.dispose(), A.__reset(), A.__clearDispose()
    }), $(window).on("swap_dom_ready", function() {
        bds.ready(A.__runAla), bds.doReady()
    }), bds.event = new function() {
        function e(e, t) {
            if ("function" == typeof t || t instanceof Function) {
                var n = i(e);
                s[n.name] = s[n.name] || [], s[n.name].push({
                    prod: n.prod,
                    callback: t
                })
            }
        }

        function t(e, t) {
            for (var n = i(e), r = s[n.name] || [], a = 0; a < r.length;) {
                var c = r[a];
                t === c.callback && o(n.prod, c.prod) ? r.splice(a, 1) : a++
            }
        }

        function n(e, t) {
            for (var n = i(e), r = s[n.name] || [], a = {
                    data: t,
                    eventId: e
                }, c = 0, d = r.length; d > c; c++) {
                var l = r[c];
                try {
                    o(l.prod, n.prod) && l.callback.call(this, a)
                } catch (u) {}
            }
        }

        function o(e, t) {
            return new RegExp("^" + e.replace(/\./g, "\\.").replace(/\*/g, ".+") + "$").test(t)
        }

        function i(e) {
            var t = e.match(/(.+)\.(.+)/);
            return t && t[2] ? {
                prod: t[1],
                name: t[2]
            } : {}
        }
        var s = {};
        this.on = e, this.off = t, this.trigger = n, this.events = s
    }, bds.se.link = function() {
        function e(e, t) {
            var n = "/s?",
                o = {
                    tn: bds.comm.tn
                },
                i = "wd=" + encodeURIComponent(e);
            t && (o = $.extend(o, t));
            for (var s in o) o.hasOwnProperty(s) && (i += "&" + s + "=" + encodeURIComponent(o[s]));
            return n + i
        }
        return {
            getSearchUrl: e
        }
    }(), ! function(A) {
        function clickDebug() {}

        function bindP5() {
            var item, index = (bds.comm.pageNum - 1) * bds.comm.pageSize + 1,
                leftItems = contentLeft && contentLeft.children || [],
                rightItems = contentRight && contentRight.children || [],
                topItems = contentTop && contentTop.children || [],
                isResult = function(e) {
                    return 1 == e.nodeType && e.className && /\bresult(\-op)?\b/.test(e.className)
                },
                isFrame = function(e) {
                    return 1 == e.nodeType && e.className && /\bc\-frame\b/.test(e.className)
                },
                setClickData = function(wrap, data) {
                    var sData = wrap.getAttribute("data-click") || "{}";
                    try {
                        var oData = eval("(" + sData + ")");
                        sData = $.stringify($.extend(oData, data)), wrap.setAttribute("data-click", sData)
                    } catch (e) {
                        clickDebug(e)
                    }
                },
                bindP5ClickData = function(e) {
                    for (var t = 0, n = e.length; n > t; t++)
                        if (item = e[t], isResult(item)) setClickData(item, {
                            p5: index++
                        });
                        else if (isFrame(item)) try {
                        for (var o = item.children[0].children, i = 0, s = o.length; s > i; i++) {
                            var r = o[i];
                            isResult(r) && setClickData(r, {
                                p5: index++
                            })
                        }
                    } catch (a) {
                        clickDebug(a)
                    }
                    index = (bds.comm.pageNum - 1) * bds.comm.pageSize + 1
                };
            bindP5ClickData(leftItems), bindP5ClickData(rightItems), bindP5ClickData(topItems)
        }

        function getXPath(e, t, n) {
            if (n = n || [], t = t || document, e === t) return n;
            if (e.parentNode !== t && (n = getXPath(e.parentNode, t, n)), e.previousSibling) {
                var o = 1,
                    i = e.previousSibling;
                do 1 == i.nodeType && i.nodeName == e.nodeName && o++, i = i.previousSibling; while (i)
            }
            return 1 == e.nodeType && n.push(e.nodeName.toLowerCase() + (o > 1 ? o : "")), n
        }

        function bindLogEvent() {
            $body = $("body"), $body.on("mousedown", function(e) {
                var e = window.event || e,
                    t = e.srcElement || e.target,
                    n = $(t);
                try {
                    for (var o, i, s = n; s.length && !(s.hasClass("result") || s.hasClass("result-op") || s.hasClass("xpath-log"));) s = s.parent();
                    if (!s.length) return;
                    s.hasClass("result-op") ? o = "alop" : s.hasClass("result") && (o = "as"), i = s.get(0);
                    var r = getXPath(t, i);
                    check(r, t, i) && log(r, t, i, o)
                } catch (e) {
                    clickDebug(e)
                }
            })
        }

        function getType(e, t, n) {
            for (var o = t, i = LOG_CLASS, s = i.length, r = C_LOG_CLASS, a = r.length, c = e.join(" "), d = 0; o !== n;) {
                for (d = 0; s > d; d++)
                    if ($(o).hasClass("OP_LOG_" + i[d])) return i[d].toLowerCase();
                for (d = 0; a > d; d++)
                    if ($(o).hasClass("c-" + r[d])) return r[d];
                o = o.parentNode
            }
            return /\bh3\d*\b/.test(c) ? "title" : /\ba\d*\b/.test(c) ? /\bimg\d*\b/.test(c) ? "img" : "link" : /\b(input|select|button|textarea|datalist)\d*\b/.test(c) ? "input" : /\blabel\d*\b/.test(c) && t.getElementsByTagName("input").length > 0 ? "input" : ""
        }

        function check(e, t, n) {
            return A.LOGTOOL ? (A.LOGTOOL.call(t, e, t, n), !1) : !0
        }

        function log(e, t, n, o) {
            if (null == t.getAttribute("data-nolog")) {
                var i = getType(e, t, n);
                if (!i) return !1;
                if ("title" == i && !/\ba\d*\b/.test(e)) return !1;
                var s = "http://nourl.ubs.baidu.com",
                    r = n.getAttribute("mu") || s;
                if (r == s) {
                    var a = n.getElementsByTagName("h3");
                    if (a && a[0]) {
                        var c = a[0].getElementsByTagName("a");
                        r = c && c[0] ? c[0].href : r
                    }
                }
                var d, l = e.length,
                    u = t,
                    m = n.getAttribute("srcid"),
                    p = "",
                    f = 1 == t.nodeType ? t.tagName.toLowerCase() : "";
                if ("input" == i)
                    if (/input|textarea/.test(f)) p = t.value, t.type && "password" == t.type.toLowerCase() && (p = "");
                    else if (/select|datalist/.test(f)) {
                    if (t.children.length > 0) {
                        var h = t.selectedIndex || 0;
                        p = t.children[h > -1 ? h : 0].innerHTML
                    }
                } else p = t.innerHTML || t.value || "";
                else if ("img" == f && (p = t.title), !p)
                    for (; l > 0;) {
                        if (l--, /^a\d*\b/.test(e[l])) {
                            if (d = u.href, p = u.innerHTML, null != u.getAttribute("data-nolog")) return;
                            break
                        }
                        if (u.className && /OP_LOG_/.test(u.className)) {
                            p = u.innerHTML;
                            break
                        }
                        u = u.parentNode
                    }
                p = $.trim(p), d && "#" !== d.slice(-1) && /^http/.test(d) || (d = r);
                var g = {
                        rsv_xpath: e.join("-") + "(" + i + ")",
                        title: p,
                        url: d,
                        rsv_height: n.offsetHeight,
                        rsv_width: n.offsetWidth,
                        rsv_tpl: n.getAttribute("tpl")
                    },
                    b = {
                        url: 1,
                        title: 1
                    };
                n.id && n.id.match(/^\d+$/) && (g.p1 = n.id), m && (g.rsv_srcid = m);
                var w, v, _;
                u = t;
                do {
                    if (null != u.getAttribute("data-nolog")) return;
                    if (w = u.getAttribute("data-click")) try {
                        w = new Function("return " + w)();
                        for (v in w) "fm" == v && null === w.fm && (_ = !0), w.hasOwnProperty(v) && ("undefined" == typeof g[v] || b[v]) && (g[v] = w[v])
                    } catch (y) {
                        clickDebug(y)
                    }
                    u = u.parentNode
                } while (u && u !== n.parentNode);
                for (var T in g) null === g[T] && delete g[T];
                if ("title" == i ? "mu" in g && delete g.mu : g.mu || (g.mu = r), _) "fm" in g && delete g.fm;
                else if ("input" == i && (g.fm = "beha", g.url = s), g.fm || (g.fm = o), !g.fm) return;
                window.c(g)
            }
        }
        var baidu = window.baidu,
            LOG_CLASS = ["TITLE", "LINK", "IMG", "BTN", "INPUT", "OTHERS"],
            C_LOG_CLASS = ["btn"],
            contentLeft, contentRight, contentTop;
        window.initResultClickLog = function() {
            if (contentLeft = $("#content_left").get(0), contentRight = $("#con-ar").get(0), contentTop = $("#con-at").get(0), A.has) {
                var e, t = $(".result-op").get();
                $.each(t, function(t, n) {
                    (e = n.getAttribute("srcid")) && A.ids.push([n.id, e])
                })
            }
            bindP5()
        }, $(document).ready(function() {
            bindLogEvent()
        })
    }(window.bds.aladdin);
for (ai in al_arr) al_arr[ai]();
$(document).ready(function() {
        var e;
        $(document).on("click", ".t>a,.op-se-listen-recommend", function(t) {
            t = window.event || t;
            var n = $("#wrapper_wrapper"),
                o = $(this).closest(".c-container"),
                i = o.length ? o.find(".c-recommend").eq(0) : [],
                s = o.length ? o.find(".wnor-fanli-wrap") : [];
            !t.ctrlKey && (i.length && "none" === i.css("display") || s.length && "none" === s.css("display")) && (e = setTimeout(function() {
                n.find(".c-recommend").hide(), i.show(), n.find(".wnor-fanli-wrap").hide(), s.show()
            }, 150))
        }), $(window).on("swap_begin", function() {
            this.clearTimeout(e)
        })
    }), window.onunload = function() {}, bds.se.openime = function(e) {
        window.bdime ? openIme.set("py", !0) : $.ajax({
            cache: !0,
            dataType: "script",
            url: "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/plugins/ime_c5abb66.js",
            success: function() {
                e && openIme.set("py", !0)
            }
        })
    },
    function() {
        /\bbdime=[12]/.test(document.cookie) || $(window).one("swap_end", function() {})
    }(),
    function() {
        var e = function(t) {
                var n, o = bds.comm.personalData;
                if (!o || !isFinite(+t) || !(n = String(o.duRobotState.value))) return !1;
                var i = n.charAt(+t);
                return 0 === +t || e(0) ? i.length ? 1 == +i : !0 : !1
            },
            t = $(window);
        t.on("load", function() {
            if (0 === window.pageState) {
                var n = navigator.userAgent;
                if (!e(0) || !e(1)) return;
                var o = n.match(/MSIE\s*(\d+)/i);
                if (!bds.comm.user || o && (!document.documentMode || document.documentMode <= 8 || o[1] <= 8)) return;
                var i = $("#s_main");
                i.size() && i.children().length ? "static" == i.css("position") && i.css("position", "relative") : i = $('<div class="bd_bear_home_nocard"></div>').appendTo(document.body);
                var s = $('<div class="bd_bear_home_weaker"></div>').appendTo(i);
                s.show().get(0).className = "bd_bear_home_show", s.append($('<a class="bd_bear_home_bear_head" href="http://xiaodu.baidu.com/?from=home_bg" target="_blank"></a>')), t.one("index_off", function() {
                    s && s.remove && s.remove()
                })
            }
        })
    }(), bds && bds.comm && !bds.comm.containerSize && (bds.comm.containerSize = "s"), bds.util.setContainerWidth = function() {
        var e = $("#container"),
            t = $("#wrapper"),
            n = bds.util.getWinWidth(),
            o = bds.comm.containerSize;
        if (1217 > n) e.removeClass("container_l container_xl").addClass("container_s"), t.removeClass("wrapper_l").addClass("wrapper_s"), bds.comm.containerSize = "s";
        else {
            if (!(n >= 1217)) return;
            e.removeClass("container_s container_xl").addClass("container_l"), t.removeClass("wrapper_s").addClass("wrapper_l"), bds.comm.containerSize = "l"
        }
        o != bds.comm.containerSize && $(window).trigger("container_resize", bds.comm.containerSize)
    }, bds.util.setFootStyle = function() {
        this.init(), this.bindEvent()
    }, $.extend(bds.util.setFootStyle.prototype, {
        ie6: bds.comm.upn && "msie" === bds.comm.upn.browser && 6 == bds.comm.upn.ie,
        init: function() {
            var e = $("#foot");
            if (e.addClass("foot_fixed_bottom"), this.ie6) {
                var t = $(window).height() + $(window).scrollTop() - e.outerHeight(!0);
                e.css("top", t + "px")
            }
        },
        setFixedIe6: function() {
            var e = $("#foot"),
                t = $(window).height() + $(window).scrollTop() - e.outerHeight(!0);
            e.css("top", t + "px")
        },
        bindEvent: function() {
            var e = this;
            e.ie6 && $(window).on("resize.setFootStyle, scroll.setFootStyle", function() {
                e.setFixedIe6()
            })
        }
    });
var bds = bds || {};
bds.se = bds.se || {}, bds.se.tip = bds.se.tip || {}, bds.comm.tipZIndex = 220, bds.comm.tips = [], bds.se.tip = function(e) {
    this.init = function() {
        this.op = {
            target: e.target || {},
            mode: e.mode || "over",
            title: e.title || null,
            content: e.content || null,
            uncontrolled: e.uncontrolled ? !0 : !1,
            arrow: {
                has: 1,
                offset: 10,
                r: !1,
                c: !1
            },
            close: e.close || 0,
            align: e.align || "left",
            offset: {
                x: 10,
                y: 20
            },
            arrowSize: 16
        }, e.arrow && (this.op.arrow.has = 0 == e.arrow.has ? 0 : 1, this.op.arrow.offset = e.arrow.offset >= 0 ? e.arrow.offset : 10, this.op.arrow.r = e.arrow.r, this.op.arrow.c = e.arrow.c), e.offset && (this.op.offset.x = e.offset.x || 0 == e.offset.x ? e.offset.x : 10, this.op.offset.y = e.offset.y || 0 == e.offset.y ? e.offset.y : 20), this.ext = e.ext || {}, this.dom = $("<div>", {
            "class": "c-tip-con"
        }), this.visible = !1, this.rendered = !1, this.isAuto = "auto" === this.op.align ? !0 : !1, this.bindEvent()
    }, this.render = function() {
        this.op.close && this.enableCloseIcon(), this.op.title && this.setTitle(this.op.title), this.op.content && this.setContent(this.op.content), this.op.arrow.has && this.enableArrow(), $("#c-tips-container").append(this.dom)
    }, this.bindEvent = function() {
        if (this.delay = {
                overIcon: null,
                outIcon: null,
                overDom: null,
                outDom: null
            }, "over" == this.op.mode) {
            var e = this;
            $(e.op.target).on("mouseenter", function() {
                window.clearTimeout(e.delay.outIcon), window.clearTimeout(e.delay.outDom), e.delay.overIcon = setTimeout(function() {
                    e.show()
                }, 200)
            }), e.dom.on("mouseenter", function() {
                window.clearTimeout(e.delay.outIcon), window.clearTimeout(e.delay.outDom), e.delay.overDom = setTimeout(function() {
                    e.show()
                }, 200)
            }), $(e.op.target).on("mouseleave", function() {
                window.clearTimeout(e.delay.overIcon), window.clearTimeout(e.delay.overDom), e.delay.outIcon = setTimeout(function() {
                    e.hide()
                }, 200)
            }), e.dom.on("mouseleave", function() {
                window.clearTimeout(e.delay.overIcon), window.clearTimeout(e.delay.overDom), e.delay.outIcon = setTimeout(function() {
                    e.hide()
                }, 200)
            })
        } else if ("none" == this.op.mode) {
            var e = this;
            e.show()
        }
    }, this.enableArrow = function() {
        if (this.op.arrow.r) var e = $("<div>", {
            "class": "c-tip-arrow"
        }).html("<em></em><ins class='c-tip-arrow-r'></ins>").appendTo(this.dom);
        else if (this.op.arrow.c) var e = $("<div>", {
            "class": "c-tip-arrow"
        }).html("<em></em><ins class='c-tip-arrow-c'></ins>").appendTo(this.dom);
        else var e = $("<div>", {
            "class": "c-tip-arrow"
        }).html("<em></em><ins></ins>").appendTo(this.dom);
        this.arrow = e
    }, this.enableCloseIcon = function() {
        var e = this,
            t = $("<div>", {
                "class": "c-tip-close"
            }).html("<i class='c-icon c-icon-close'></i>").appendTo(this.dom).click(function() {
                e.hide()
            });
        this.close = t
    }, this.setTitle = function(e) {
        if (e.nodeType) var t = $("<h3>", {
            "class": "c-tip-title"
        }).append(e).appendTo(this.dom);
        else var t = $("<h3>", {
            "class": "c-tip-title"
        }).html(e).appendTo(this.dom);
        this.title = t
    }, this.setContent = function(e) {
        var t = $("<div>").html(e).appendTo(this.dom);
        this.content = t
    }, this.setArrow = function(e) {
        if (e && e.offset >= 0 && (this.op.arrow.offset = e.offset), this.op.arrow.has && this.arrow) switch (this.op.align) {
            case "left":
                this.arrow.css({
                    left: this.op.arrow.offset + "px"
                });
                break;
            case "right":
                this.arrow.css({
                    right: this.op.arrow.offset + 16 + "px"
                })
        }
    }, this.setOffset = function(e) {
        switch (e && (this.op.offset.x = e.x || 0 == e.x ? e.x : this.op.offset.x, this.op.offset.y = e.y || 0 == e.y ? e.y : this.op.offset.y), this.op.align) {
            case "left":
                var t = $(this.getTarget()).offset();
                this.getDom().css({
                    top: t.top + this.op.offset.y + "px",
                    left: t.left - this.op.offset.x + "px"
                });
                break;
            case "right":
                var t = $(this.getTarget()).offset();
                this.getDom().css({
                    top: t.top + this.op.offset.y + "px",
                    left: t.left + this.op.offset.x + $(this.getTarget()).width() - this.getDom().width() + "px"
                })
        }
    }, this.autoOffset = function() {
        var e, t = {
                w: this.dom.outerWidth(),
                h: this.dom.outerHeight()
            },
            n = $(this.getTarget()),
            o = n.offset(),
            i = {
                w: n.outerWidth(),
                h: n.outerHeight()
            },
            s = $(window),
            r = s.scrollTop(),
            a = {
                w: s.width(),
                h: s.height()
            },
            c = {
                left: 0,
                top: 0
            },
            d = {};
        a.h + r - i.h - o.top > t.h ? (c.top = i.h + o.top + this.op.arrowSize / 2, this.arrow && this.arrow.removeClass("c-tip-arrow-down")) : o.top - r > t.h ? (c.top = o.top - t.h - this.op.arrowSize / 2, this.arrow && this.arrow.addClass("c-tip-arrow-down")) : (c.top = i.h + o.top + this.op.arrowSize / 2, this.arrow && this.arrow.removeClass("c-tip-arrow-down")), e = o.left + i.w / 2 - this.op.arrow.offset - this.op.arrowSize / 2, c.left = e, c.left > 0 && c.left + t.w > a.w ? (c.left = o.left + i.w / 2 - t.w + this.op.arrow.offset + this.op.arrowSize / 2, d.right = this.op.arrow.offset + this.op.arrowSize, d.left = "auto", c.left < 0 && (c.left = e, d.left = this.op.arrow.offset, d.right = "auto")) : (d.left = this.op.arrow.offset, d.right = "auto"), this.dom.css(c), this.arrow && this.arrow.css(d)
    }, this.enable = function() {}, this.disable = function() {}, this.destroy = function() {}, this.show = function() {
        this.visible || (this.onShow(), this.rendered || (bds.comm.tips.push(this), this.render(), this.rendered = !0), this.isAuto ? this.autoOffset() : (this.setOffset(), this.setArrow()), this.dom.css({
            "z-index": bds.comm.tipZIndex
        }), bds.comm.tipZIndex++, this.dom.css({
            display: "block"
        }), this.visible = !0)
    }, this.hide = function() {
        this.visible && (this.dom.css({
            display: "none"
        }), this.onHide(), this.visible = !1)
    }, this.onShow = e.onShow || function() {}, this.onHide = e.onHide || function() {}, this.getTarget = function() {
        return this.op.target
    }, this.getDom = function() {
        return this.dom
    }, this.init()
}, bds.event.trigger("se.api_tip_ready"), $(document).mousedown(function(e) {
    e = e || window.event;
    for (var t = e.target || e.srcElement; t && t.tagName && t != document.body && "html" != t.tagName.toLowerCase() && "c-tip-con" != t.className;) t = t.parentNode;
    t && "c-tip-con" != t.className && $(bds.comm.tips).each(function() {
        this.op.uncontrolled || this.op.close && this.hide()
    })
});
var sethfPos = sethfPos || 0;
! function() {
    function e(e) {
        if (e) {
            var t = e.parentNode;
            t && (t.style.marginBottom = "20px", t.style.marginTop = "2px")
        }
    }
    var t = "//www.baidu.com/",
        n = -1 != navigator.userAgent.indexOf("MSIE") && !window.opera,
        o = (100 * Math.random(), "百度一下，你就知道"),
        i = "";
    if (window.fa = function(e) {
            try {
                window.sidebar ? window.sidebar.addPanel(o, t, "") : window.opera && window.print ? (e.setAttribute("rel", "sidebar"), e.setAttribute("href", t), e.setAttribute("title", o), e.click()) : window.external.AddFavorite(t, o)
            } catch (n) {}
        }, n) try {
        var s = /se /gi.test(navigator.userAgent),
            r = /AppleWebKit/gi.test(navigator.userAgent) && /theworld/gi.test(navigator.userAgent),
            a = /theworld/gi.test(navigator.userAgent),
            c = /360se/gi.test(navigator.userAgent),
            d = /360chrome/gi.test(navigator.userAgent),
            l = /greenbrowser/gi.test(navigator.userAgent),
            u = /qqbrowser/gi.test(navigator.userAgent),
            m = /tencenttraveler/gi.test(navigator.userAgent),
            p = /maxthon/gi.test(navigator.userAgent),
            f = /krbrowser/gi.test(navigator.userAgent),
            h = !1;
        try {
            h = +external.twGetVersion(external.twGetSecurityID(window)).replace(/\./g, "") > 1013
        } catch (g) {}
        if (s || h || r || a || c || d || l || u || m || p || f) {
            var b = document.getElementById(sethfPos ? "set_f" : "setf");
            b && sethfPos && (e(b), i = "favorites")
        } else {
            var w = document.getElementById(sethfPos ? "set_f" : "setf");
            w && sethfPos && (e(w), i = "home"), w.setAttribute("onClick", "h(this)"), w.setAttribute("onmousedown", "return ns_c({'fm':'behs','tab':'homepage','pos':0})"), w.href = "/", w.target = "_self", w.id = "seth"
        }
    } catch (g) {} else {
        var b = document.getElementById(sethfPos ? "set_f" : "setf");
        sethfPos && (e(b), i = "favorites")
    }
    i && sethfPos && ns_c({
        fm: "sethf_show",
        tab: i
    })
}(), bds.se.loginCallbackFunc = null, bds.se.login = function() {
    var e = "",
        t = !1,
        n = "",
        o = function(e) {
            var t = e || bds.comm.user;
            t && $("#lb").replaceWith('<a href="http://i.baidu.com" class="username">' + escapeHTML(bds.comm.username) + '<i class="c-icon"></i></a>')
        },
        i = function(o) {
            t ? (bds.se.passv3.setSubpro(e), bds.se.passv3.setMakeText(n), bds.se.loginCallbackFunc = o || function() {
                window.document.location.reload(!0)
            }, bds.se.passv3.show()) : $.getScript(location.protocol + "//passport.baidu.com/passApi/js/uni_login_wrapper.js?cdnversion=" + (new Date).getTime(), function() {
                initPassV3(), t = !0, bds.se.passv3.setSubpro(e), bds.se.passv3.setMakeText(n), bds.se.loginCallbackFunc = o || function() {
                    window.document.location.reload(!0)
                }, bds.se.passv3.show()
            })
        },
        s = function(e) {
            if (bds.comm) {
                bds.comm.user = e, bds.comm.username = e, window.bdUser = e, bds.se.passv3.hide(), bds.se.loginCallbackFunc.call(window, 1, e);
                for (var t = 0; t < bds.comm.loginAction.length; t++) bds.comm.loginAction[t].call(window, 1, e)
            }
        },
        r = function(t) {
            e = t
        },
        a = function(e) {
            n = e
        };
    return {
        setUserInfo: o,
        open: i,
        success: s,
        setSubpro: r,
        setMakeText: a
    }
}(), window._invoke_login = function(e, t) {
    bds.se.login.open(e, t)
}, ! function() {
    function e() {
        var e, t = "http://isphijack.baidu.com/index.php?cb=isp_hijack",
            n = [];
        if (top.location != self.location) {
            try {
                for (var o = top.document.getElementsByTagName("frame"), i = top.document.getElementsByTagName("iframe"), s = 0; s < o.length; s++) n.push(o[s].getAttribute("src"));
                for (var s = 0; s < i.length; s++) n.push(i[s].getAttribute("src"))
            } catch (r) {}
            ns_c({
                fm: "frm",
                top: encodeURIComponent(top.location.href),
                furls: encodeURIComponent(n.join("|"))
            }), n && (e = document.createElement("script"), e.src = t + "&urls=" + encodeURIComponent(n.join("|")) + "&t=" + +new Date, document.body.appendChild(e))
        }
    }
    $(e)
}();
try {
    window.console && window.console.log && (console.log("一张网页，要经历怎样的过程，才能抵达用户面前？\n一位新人，要经历怎样的成长，才能站在技术之巅？\n探寻这里的秘密；\n体验这里的挑战；\n成为这里的主人；\n加入百度，加入网页搜索，你，可以影响世界。\n"), console.log("请将简历发送至 %c ps_recruiter@baidu.com（ 邮件标题请以“姓名-应聘XX职位-来自console”命名）", "color:red"), console.log("职位介绍：http://dwz.cn/hr2013"))
} catch (e) {}
var bds = bds || {};
bds.se = bds.se || {}, bds.se.tool = bds.se.tool || {}, bds.comm.host = {
    bfe: "//www.baidu.com/tools",
    favo: bds.util.domain && bds.util.domain.get ? bds.util.domain.get("http://i.baidu.com") : "http://i.baidu.com",
    share: bds.util.domain && bds.util.domain.get ? bds.util.domain.get("http://bdimg.share.baidu.com/static/api/js/custom/resultshare.js") : "http://bdimg.share.baidu.com/static/api/js/custom/resultshare.js",
    report: "http://jubao.baidu.com",
    koubei: "http://koubei.baidu.com"
}, bds.se.tool = function(item) {
    this.init = function() {
        this.render()
    }, this.render = function() {
        var ops = eval("(" + item.getAttribute("data-tools") + ")"),
            toolsDom = $("<div>", {
                "class": "c-tip-menu"
            }),
            toolsList = $("<ul>"),
            toolsFavo = $("<li>"),
            toolsFavoLink = $("<a>").html("收藏");
        toolsFavoLink.on("mousedown", function() {
            bds.se.tool.favo(ops, item.getAttribute("id")), ns_c({
                fm: "tools",
                tab: "favo"
            })
        }), toolsFavoLink.on("mouseover", function() {
            $(this).css("background-color", "#ebebeb")
        }), toolsFavoLink.on("mouseout", function() {
            $(this).css("background-color", "#fff")
        }), toolsFavo.append(toolsFavoLink), toolsList.append(toolsFavo);
        var toolsShare = $("<li>"),
            toolsShareLink = $("<a>").html("分享");
        toolsShareLink.on("mousedown", function() {
            bds.se.tool.share(ops, item), ns_c({
                fm: "tools",
                tab: "share"
            })
        }), toolsShareLink.on("mouseover", function() {
            $(this).css("background-color", "#ebebeb")
        }), toolsShareLink.on("mouseout", function() {
            $(this).css("background-color", "#fff")
        }), toolsShare.append(toolsShareLink), toolsList.append(toolsShare);
        var fromType;
        fromType = $(item).parent().find(".c-pingjia a").attr("data-from") ? $(item).parent().find(".c-pingjia a").attr("data-from") : "ps_pc";
        var toolsKoubei = $("<li>").html("<a target=\"_blank\" onmousedown=\"ns_c({'fm': 'tools','tab':'koubei'})\" href=\"" + bds.comm.host.bfe + "?url=" + encodeURIComponent(ops.url) + "&jump=" + encodeURIComponent(bds.comm.host.koubei + "/p/sentry?title=" + encodeURIComponent(ops.title) + "&q=" + encodeURIComponent(bds.comm.query) + "&from=" + encodeURIComponent(fromType)) + '&key=surl">评价</a>');
        toolsList.append(toolsKoubei);
        var officalLogo = $($(item).closest(".c-container").find("h3.t").children()[1]),
            vLogo = $(item).parent().find(".vstar"),
            isOffical = 0,
            vLevel = 0;
        officalLogo && "官网" == officalLogo.html() && (isOffical = 1), vLogo && vLogo.attr("hint-data") && (vLevel = $.parseJSON(vLogo.attr("hint-data")).hint[0].vlevel);
        var toolsReport = $("<li>").html("<a target=\"_blank\" onmousedown=\"ns_c({'fm': 'tools','tab':'report'})\" href=\"" + bds.comm.host.bfe + "?url=" + encodeURIComponent(ops.url) + "&jump=" + encodeURIComponent(bds.comm.host.report + "/jubao/accu/?title=" + encodeURIComponent(ops.title) + "&q=" + encodeURIComponent(bds.comm.query) + "&has_gw=" + isOffical + "&has_v=" + vLevel) + '&key=surl">举报</a>');
        toolsList.append(toolsReport), toolsDom.append(toolsList);
        var tTip = new bds.se.tip({
            target: $(".c-icon", item)[0],
            mode: "none",
            align: "left",
            offset: {
                x: 33
            },
            arrow: {
                has: 1,
                offset: 30
            },
            content: toolsDom,
            ext: {
                category: "tools"
            }
        });
        tTip.onShow = function() {
            ns_c({
                fm: "tools",
                tab: "show"
            })
        }
    }, this.init()
}, bds.se.tool.share = function(e, t) {
    this.op = e || {}, this.init = function(e, t) {
        $.getScript(bds.comm.host.share, function() {
            $(bds.comm.tips).each(function() {
                this.op.uncontrolled || this.hide()
            });
            var n = new bds.se.tip({
                    target: $(".c-icon", t)[0],
                    mode: "none",
                    offset: {
                        x: 33
                    },
                    arrow: {
                        has: 0
                    },
                    close: 1,
                    content: '<div class="c-tools-share" style="width:200px;"></div>'
                }),
                o = $(".c-tools-share", n.dom.get(0))[0];
            __bdshare.render({
                boxEle: o,
                url: e.url,
                txt: e.title + " -- 分享自百度搜索"
            })
        })
    }(this.op, t)
}, bds.se.tool.favo = function(e, t) {
    if (this.op = e || {}, this.init = function(e, t) {
            if (e) {
                var n = document.createElement("script"),
                    o = bds.comm.host.bfe,
                    i = bds.comm.host.favo;
                n.src = o + "?url=" + encodeURIComponent(e.url) + "&jump=" + encodeURIComponent(i + "/myfavorite/set?irt=1&t=" + encodeURIComponent(e.title) + "&id=" + encodeURIComponent(t) + "&c=bds.se.tool.favo.succ") + "&key=url", document.body.appendChild(n)
            }
        }, bds.comm.user) this.init(this.op, t);
    else if (bds.se.login && bds.se.login.open) {
        var n = this;
        bds.se.login.open(function(e) {
            1 == e && n.init(n.op, t)
        })
    }
}, bds.se.tool.favo.succ = function(json) {
    if (json.suc) {
        if (json.status) switch (json.status) {
            case 302:
                bds.se.login && bds.se.login.open && bds.se.login.open(function(stat, user) {
                    1 == stat && bds.se.tool.favo(eval("(" + $("#" + json.id)[0].getAttribute("data-tools") + ")"), json.id)
                });
                break;
            case 5:
                var succContent = '<div class="c-tip-notice">';
                succContent += '<h3 class="c-tip-notice-fail">收藏失败，请稍后再试</h3>', succContent += "</div>"
        }
    } else if (json.status) {
        var succContent = '<div class="c-tip-notice">';
        switch (succContent += '<h3 class="c-tip-notice-succ">已收藏至：</h3>', succContent += "<ul>", json.status) {
            case 2:
                succContent += '<li class="c-tip-item-succ"><i class="c-icon c-icon-success"></i>个人中心“<a href="http://i.baidu.com/my/collect" target="_blank">我的收藏</a>”</li>', succContent += '<li class="c-tip-item-succ"><i class="c-icon c-icon-success"></i>百度首页“<a href="http://www.baidu.com" target="_blank">我的导航</a>”</li>';
                break;
            case 3:
                succContent += '<li class="c-tip-item-succ"><i class="c-icon c-icon-success"></i>个人中心“<a href="http://i.baidu.com/my/collect" target="_blank">我的收藏</a>”</li>', succContent += '<li class="c-tip-item-fail"><i class="c-icon c-icon-fail"></i>百度首页“<a href="http://www.baidu.com" target="_blank">我的导航</a>”</li>';
                break;
            case 4:
                succContent += '<li class="c-tip-item-fail"><i class="c-icon c-icon-fail"></i>个人中心“<a href="http://i.baidu.com/my/collect" target="_blank">我的收藏</a>”</li>', succContent += '<li class="c-tip-item-succ"><i class="c-icon c-icon-success"></i>百度首页“<a href="http://www.baidu.com" target="_blank">我的导航</a>”</li>'
        }
        succContent += "</ul>", succContent += "</div>"
    }
    $(bds.comm.tips).each(function() {
        this.op.uncontrolled || this.hide()
    }), succContent && new bds.se.tip({
        target: $(".c-icon", document.getElementById(json.id))[0],
        offset: {
            x: 33
        },
        arrow: {
            has: 0
        },
        mode: "none",
        arrow: {
            has: 0
        },
        close: 1,
        content: succContent
    })
};
var bds = bds || {};
bds.se = bds.se || {}, bds.se.tools = bds.se.tools || {}, bds.se.tools = function() {
    var e = delayHideOnIcon = delayShowOnTip = delayHideOnTip = {};
    $("#container").delegate(".c-tools", "mouseover", function() {
        var t = this;
        window.clearTimeout(delayHideOnIcon), window.clearTimeout(delayHideOnTip), e = setTimeout(function() {
            var e = 1;
            $(bds.comm.tips).each(function() {
                return this.getTarget() == $(".c-icon", t)[0] ? (e = 0, this.show(), !1) : void 0
            }), e && (tools = new bds.se.tool(t))
        }, 200)
    }).delegate(".c-tools", "mouseout", function() {
        window.clearTimeout(e), window.clearTimeout(delayShowOnTip);
        var t = this;
        delayHideOnIcon = setTimeout(function() {
            $(bds.comm.tips).each(function() {
                return this.getTarget() == $(".c-icon", t)[0] ? (this.hide(), !1) : void 0
            })
        }, 200)
    }), $("#c-tips-container").delegate(".c-tip-con", "mouseover", function() {
        var e = this;
        window.clearTimeout(delayHideOnIcon), window.clearTimeout(delayHideOnTip), delayShowOnTip = setTimeout(function() {
            $(bds.comm.tips).each(function() {
                return this.getDom().get(0) == e && this.ext.category && "tools" == this.ext.category ? (this.show(), !1) : void 0
            })
        }, 200)
    }).delegate(".c-tip-con", "mouseout", function() {
        window.clearTimeout(e), window.clearTimeout(delayShowOnTip);
        var t = this;
        delayHideOnTip = setTimeout(function() {
            $(bds.comm.tips).each(function() {
                return this.getDom().get(0) == t && this.ext.category && "tools" == this.ext.category ? (this.hide(), !1) : void 0
            })
        }, 200)
    })
};
var bds = bds || {};
bds.se = bds.se || {}, bds.se.slide = function(e) {
    var t, n, o, i, s, r = this,
        a = {},
        d = [],
        l = 0,
        u = null;
    this._default = {
        target: $("#lg"),
        src: "",
        width: 270,
        height: 129,
        offsetLeft: 0,
        isPad: !1,
        frames: 103,
        animations: [{
            isAutoPlay: !0,
            frame_start: 1,
            frame_end: 30,
            delay: 0,
            duration: 100,
            repeats: 0,
            process_before: function() {},
            event_loop: 0,
            process_after: function() {}
        }, {
            trigger_type: "click",
            trigger_duration: 100,
            trigger_frame: 31,
            trigger_fn: function() {},
            frame_start: 32,
            frame_end: 103,
            process_before: function() {},
            process_after: function() {},
            delay: 0,
            duration: 100,
            repeats: 1,
            event_loop: 0
        }]
    }, this.timer = [], this.otherTimer = [], this.op = $.extend({}, r._default, e), this.init = function() {
        return r.op.src ? (r.createDom(), void(bds.comm.ishome && r.op.target.length && r.initAnimate())) : void r.createPlayer()
    }, this.createPlayer = function() {
        var e = r.op.target.find("map"),
            t = e.length ? e.find("area").eq(0) : "",
            o = r.op.play;
        o && (n = $('<img class="logo_player" src="' + o.src + '" style="width:' + o.width + "px; height:" + o.height + "px; position:absolute; top:50%; left:50%; margin-left: -" + o.width / 2 + "px; margin-top: -" + o.height / 2 + "px; cursor:pointer;\" onmousedown=\"return c({'tab':'logo_button_click'})\" />").appendTo(r.op.target), t.length ? (n.wrap('<a style="position:absolute;top:0;left:50%;width:' + r.op.width + "px;height:" + r.op.height + "px;margin-left:-" + r.op.width / 2 + 'px;" href="' + t.attr("href") + '" target="' + t.attr("target") + '"></a>'), t.attr("title") && n.attr("title", t.attr("title"))) : n.wrap('<div style="position:absolute;top:0;left:50%;width:' + r.op.width + "px;height:" + r.op.height + "px;margin-left:-" + r.op.width / 2 + 'px;"></div>'), n.on(o.trigger_type, function() {
            return o.trigger_duration ? r.timer.push(window.setTimeout(function() {
                o.trigger_fn.call(r.op)
            }, o.trigger_duration)) : o.trigger_fn.call(r.op), !1
        }))
    }, this.createDom = function() {
        var e = '<div style="position:absolute;top:0;left:50%;background:url(#{0}) no-repeat #{1};cursor:#{2};width:#{3}px;height:#{4}px;margin-left:-#{5}px;display:none;"></div>',
            l = r.op.offsetLeft + "px 0",
            u = r.op.target.find("map"),
            m = u.length ? u.find("area").eq(0) : "",
            p = m ? "pointer" : p,
            f = r.op.animations instanceof Array ? r.op.animations : [r.op.animations],
            h = r.op.width,
            g = r.op.height;
        d = f, i = h, s = g, e = $.format(e, r.op.src, l, p, r.op.width, r.op.height, r.op.width / 2), "static" === r.op.target.css("position") && r.op.target.css({
            position: "relative",
            width: "100%"
        }), r.op.target.append(e), t = o = r.op.target.find("div").eq(0), r.op.play && (n = $('<img src="' + r.op.play.src + '" style="width:' + r.op.play.width + "px; height:" + r.op.play.height + "px; position:absolute; top:50%; left:50%; margin-left: -" + r.op.play.width / 2 + "px; margin-top: -" + r.op.play.height / 2 + "px; \" onmousedown=\"return c({'tab':'logo_button_click'})\" />").insertAfter(t), o = n), r.op.isPad && t.css("background-size", r.op.width * r.op.frames / 2 + "px " + r.op.height + "px"), m.length ? (t.wrap('<a href="' + m.attr("href") + '" target="' + m.attr("target") + '"></a>'), m.attr("title") && t.attr("title", m.attr("title"))) : t.on("mousedown", function() {
            c({
                tab: "logo_button_click"
            })
        });
        for (var b = 0, w = d.length; w > b; b++) {
            var v = d[b],
                _ = v.frame_start;
            l = -((_ - 1) * h) + "px 0", a[b] = {
                "background-position": l,
                cursor: p
            }
        }
    }, this.initAnimate = function() {
        function e() {
            t.show(), r.play()
        }
        if (!(l >= d.length)) {
            var n = d[l],
                i = n.isAutoPlay,
                s = n.trigger_type,
                a = n.trigger_fn,
                c = n.trigger_duration,
                m = n.trigger_frame,
                p = $("#lg area");
            p.length && p.attr("onmousedown") && t.on("mousedown", function() {
                return new Function(p.attr("onmousedown"))()
            }), u = new Image, u.src = r.op.src, t.bind("first_animate", function() {
                u.complete ? e() : u.onload = e
            }), i ? t.trigger("first_animate") : s && (r.enablePointer(), o.show().on(s, function() {
                a && (m && r.toPos(m), a.call(r.op), c ? r.timer.push(setTimeout(function() {
                    t.trigger("first_animate")
                }, c)) : t.trigger("first_animate"))
            }))
        }
    }, this.enablePointer = function() {
        bds.comm.upn && "msie" === bds.comm.upn.browser && "6" === bds.comm.upn.ie ? alert("pointer") : t.css("cursor", "pointer")
    }, this.disablePointer = function() {
        t.css("cursor", "default")
    }, this.play = function() {
        if (l >= d.length) return void r.dispose();
        var e = d[l],
            t = e.process_before;
        r.dispose(), t && t.call(r), r.animation()
    }, this.toPos = function(e) {
        var n = -((e - 1) * i) + "px 0";
        t.css("background-position", n)
    }, this.animation = function() {
        var e, n = d[l],
            s = n.duration,
            a = n.frame_start,
            c = n.frame_end,
            u = n.delay,
            m = n.repeats,
            p = n.process_after,
            f = n.trigger_type,
            h = a - 1 > 0 ? a - 1 : 0,
            g = n.event_loop || 0,
            b = 0;
        if (e = g ? d[l] : l + 1 >= d.length ? d[l] : d[l + 1]) {
            var w = e.trigger_type,
                v = e.trigger_fn,
                _ = e.trigger_duration,
                y = e.trigger_frame;
            w && (f && o.off(f), l < d.length - 1 || g ? (r.enablePointer(), o.on(w, function() {
                g || l++, p && p.call(r), v && v.call(r), y && r.toPos(y), _ ? (r.dispose(), r.timer.push(setTimeout(function() {
                    r.play()
                }, _))) : r.play()
            })) : r.disablePointer())
        }! function() {
            arguments.callee, r.timer.push(setTimeout(function() {
                t.css("background-position", -(i * h) + "px 0"), h++, h >= c ? (r.dispose(), b++, 0 !== m && b >= m ? (h = null, b = null, p && p.call(r), l++, l < d.length && r.play(), g && l--) : (h = a - 1 > 0 ? a - 1 : 0, r.timer.push(setTimeout(arguments.callee, s)))) : r.timer.push(setTimeout(arguments.callee, s))
            }, u))
        }()
    }, this.dispose = function(e) {
        e = e || r.timer;
        for (var t = 0, n = e.length; n > t; t++) window.clearTimeout(e[t]);
        e.length = 0
    }, this.disposeOther = function(e) {
        e = e || r.otherTimer;
        for (var t = 0, n = e.length; n > t; t++) window.clearTimeout(e[t]);
        e.length = 0
    }, this.clear = function() {
        r.dispose(), r.disposeOther(), o.off("click").off("hover")
    }, this.reset = function(e) {
        e = e || 0, t.css(a[e])
    }, this.init()
};
var bds = bds || {};
bds.se = bds.se || {}, bds.se.banner = function(e, t, n) {
        this.init = function() {
            n = n || {}, this.$dom_panel = $(e), this.hintText = t, this.hintIcon = n.iconClass || "", this.downUrl = n.downUrl || "", this.hintCookie = n.cookie || "", this.showNum = this.hintCookie && $.getCookie(this.hintCookie) ? Number($.getCookie(this.hintCookie)) : 0, this.nscTab = n.nscTab || "", this.ishome = bds.comm && 1 == bds.comm.ishome ? 1 : 0, this.bannerType = n.bannerType || "", e && t && this.showNum < 5 && !$(".baiduapp_banner")[0] && !$(".res_top_banner")[0] && !$(".res_top_banner_for_win")[0] && this.show()
        }, this.show = function() {
            this.render(), this.showNum += 1, $.setCookie(this.hintCookie, this.showNum, {
                expires: 2592e6
            }), this.$dom_panel.prepend(this.bannerHtml), 1 != this.ishome && this.headFloat(), this.bindEvent(), ns_c({
                fm: "behs",
                tab: (1 == this.ishome ? "tj_" : "") + "baidu_" + (this.nscTab ? this.nscTab : "topbanner") + "show"
            })
        }, this.render = function() {
            var e = [];
            e = e.concat("WIN" !== this.bannerType ? ['<div class="res_top_banner">', '<i class="c-icon ' + (this.hintIcon ? this.hintIcon : "res_top_banner_icon") + '"></i>', "<span>" + this.hintText + "</span>", this.downUrl ? '<a href="' + this.downUrl + '" class="res_top_banner_download">立即体验</a>' : "", '<i class="c-icon res_top_banner_close"></i>', "</div>"] : ['<div class="res_top_banner_for_win">', '<i class="c-icon ' + (this.hintIcon ? this.hintIcon : "res_top_banner_icon") + '"></i>', "<span>" + this.hintText + "</span>", this.downUrl ? '<a href="' + this.downUrl + '" class="res_top_banner_download">立即体验</a>' : "", '<i class="c-icon res_top_banner_close"></i>', "</div>"]), this.bannerHtml = e.join("")
        }, this.headFloat = function() {
            var e = $("#head"),
                t = $(window),
                n = $(".res_top_banner");
            e.css("position"), $(window).scroll(function() {
                var o = n.height() || 0,
                    i = t.scrollTop();
                o >= i ? e.attr("style", "position:absolute;") : e.attr("style", "top:0px;_top:" + o + "px;")
            })
        }, this.bindEvent = function() {
            if ("WIN" !== this.bannerType) {
                var e = $(".res_top_banner"),
                    t = this;
                $(".res_top_banner_download", e).on("mousedown", function() {
                    t.hintCookie && $.setCookie(t.hintCookie, 5, {
                        expires: 2592e6
                    }), ns_c({
                        fm: "behs",
                        tab: (1 == t.ishome ? "tj_" : "") + "baidu_" + (t.nscTab ? t.nscTab : "topbanner") + "down"
                    })
                }), $(".res_top_banner_close", e).on("mousedown", function() {
                    e.detach(), t.hintCookie && $.setCookie(t.hintCookie, 5, {
                        expires: 2592e6
                    }), ns_c({
                        fm: "behs",
                        tab: (1 == t.ishome ? "tj_" : "") + "baidu_" + (t.nscTab ? t.nscTab : "topbanner") + "close"
                    })
                }), $(window).on("swap_begin", function() {
                    e.detach()
                })
            } else {
                var e = $(".res_top_banner_for_win"),
                    t = this;
                $(".res_top_banner_download", e).on("mousedown", function() {
                    t.hintCookie && $.setCookie(t.hintCookie, 5, {
                        expires: 2592e6
                    }), ns_c({
                        fm: "behs",
                        tab: (1 == t.ishome ? "tj_" : "") + "baidu_" + (t.nscTab ? t.nscTab : "topbanner") + "down"
                    })
                }), $(".res_top_banner_close", e).on("mousedown", function() {
                    e.detach(), t.hintCookie && $.setCookie(t.hintCookie, 5, {
                        expires: 2592e6
                    }), ns_c({
                        fm: "behs",
                        tab: (1 == t.ishome ? "tj_" : "") + "baidu_" + (t.nscTab ? t.nscTab : "topbanner") + "close"
                    })
                }), $(window).on("swap_begin", function() {
                    e.detach()
                })
            }
        }, this.init()
    },
    function() {
        $(window).on("swap_end", function() {
            var e = ["union", "union2baidu", "union_cpro", "union_nosearch", "redbull", "hao123"],
                t = bds.comm.upn,
                n = navigator.userAgent.toLowerCase().search(/msie [6-7]/);
            if (winFilter = /NT 6.1|NT 6.2|NT 6.3/i.test(navigator.userAgent), bds.comm.topHijack)
                for (var o = 0; o < bds.comm.topHijack.length; o++)
                    if ("hint_topHijack" == bds.comm.topHijack[o].templateName) {
                        var i = bds.comm.topHijack[o].hintData.hintText;
                        bds.se.banner($("body")[0], i)
                    }
            if (bds.comm.tng && -1 == $.inArray(bds.comm.tng, e) && t && t.browser && "msie" == t.browser && t.ie && ("6" == t.ie || "7" == t.ie) && n > 0) {
                var i = "6" == t.ie ? "您的浏览器采用的IE6内核已停止维护，推荐升级到更快更安全的百度浏览器！" : "您的IE浏览器版本较低，即将停止更新维护，建议升级到更快、更安全的百度浏览器。";
                bds.se.banner($("body")[0], i, {
                    downUrl: "http://j.br.baidu.com/v1/t/ui/p/browser/tn/10105001/ch_dl_url",
                    cookie: "H_PS_BBANNER",
                    nscTab: "browser"
                })
            }
        })
    }(), bds.se.safeTip = function() {
        function e() {
            var e = 0,
                t = ["bd"],
                n = "",
                o = [];
            $(".unsafe_ico_new").each(function(t, i) {
                o.push(i.getAttribute("data-id")), n = i.getAttribute("data-tpl");
                var s = $(i).attr("data-href"),
                    r = $(i).attr("href"),
                    a = s ? s : r;
                $("h3 a", $(i).parents(".result")).attr("href", a), e++
            }), e > 0 && ns_c({
                tab: "safetip",
                num_unsafe: e,
                prd: t.join("|"),
                hintId: o,
                hintTpl: n
            })
        }
        return {
            init: e
        }
    }();
var bds = bds || {};
bds.se = bds.se || {}, bds.se.trust = bds.se.trust || {}, bds.se.trust = function() {
    function e() {
        d = [], l = [], $(".c-trust").each(function() {
            var e = $(this),
                t = this.getAttribute("data_key");
            0 == e.parent(".c-icons-inner").length && e.wrap("<span class='c-icons-outer'><span class='c-icons-inner'></span></span>"), -1 == $.inArray(t, d) && d.push(this.getAttribute("data_key")), -1 == $.inArray(this, l) && l.push(this)
        }), $(".c-trust-as").each(function() {
            p = $.parseJSON($(this).attr("hint-data")), p && !$(this).attr("render") && (m = $(this), r(p, $(this).attr("hint-type")), $(this).attr("render", "render"))
        }), d.length < 1 || (f && g < d.length && (f = !1, h && h.abort()), t(), g = d.length)
    }

    function t() {
        f || (h = $.getJSON(u + "/?urls=" + d.join(",") + "&sid=" + bds.comm.sid + "&qid=" + bds.comm.qid + "&v=" + c + "&callback=?", n), f = !0)
    }

    function n(e) {
        f = !1, 0 == e.code && $(l).each(function() {
            var t = this.getAttribute("data_key");
            p = e.data[t], p && (m = $(this), m.html(""), p.vstar && p.vstar.hint && p.vstar.hint.length > 0 && o(p.vstar.hint[0].vlevel, p.vstar.url), p.medical && i(), p.aviation && s())
        })
    }

    function o(e, t) {
        var n = $("<span>", {
                "class": "c-vline"
            }),
            o = $("<a>", {
                "class": "c-icon c-icon-v" + e,
                target: "_blank",
                onclick: "return false",
                href: "#"
            });
        t && o.attr({
            href: t,
            onclick: ""
        }), m.append(n), m.append(o), r(p.vstar, "vstar")
    }

    function i() {
        var e = $("<span>", {
                "class": "c-vline"
            }),
            t = $("<a>", {
                "class": "c-icon c-icon-med",
                target: "_blank",
                onclick: "return false",
                href: "#"
            });
        m.append(e), m.append(t), r(p.medical, "medical")
    }

    function s() {
        var e = $("<span>", {
                "class": "c-vline"
            }),
            t = $("<a>", {
                "class": "c-icon c-icon-air",
                target: "_blank",
                onclick: "return false",
                href: "#"
            });
        m.append(e), m.append(t), r(p.aviation, "aviation")
    }

    function r(e, t) {
        var n = e.hint,
            o = "over",
            i = e.url,
            s = e.webIMUrl;
        if (e && n) {
            if ("vstar" == t || "baozhang" == t || "baozhang-v" == t || "chengqi" == t || "baozhang-v-auth" == t) var r = "<div class='c-tip-cer hitcon'><ul>";
            else var r = "<div class='c-tip-info hitcon'><ul>";
            for (var c = 0; c < n.length; c++) "" != n[c] ? (r += "<li ", r += n[c].icon ? "class='c-tip-item-i'><img src='" + n[c].icon + "' class='c-customicon c-gap-icon-right-small c-tip-item-icon' />" : ">", r += a(n[c].txt), r += "</li>") : o = "none";
            r += "</ul></div>";
            var d = !1,
                l = !1;
            "baozhang-v" == t || "baozhang-v-auth" == t ? d = !0 : "chengqi" == t && (l = !0);
            var u = new bds.se.tip({
                target: m,
                mode: o,
                align: "auto",
                content: r,
                arrow: {
                    has: 1,
                    offset: 35,
                    r: d,
                    c: l
                },
                offset: {
                    x: 0,
                    y: 25
                }
            });
            u.onShow = function() {
                A.use("honourCard4", function() {});
                var o = n[0].vlevel,
                    a = n[0].unfixedInfo;
                ns_c({
                    hintUrl: m.attr("data_key"),
                    hintTpl: t,
                    hintId: o
                }), -1 != r.indexOf("ecard") && setTimeout(function() {
                    A.use("honourCard4", function() {
                        var r = $(u.getDom()).find(".c-trust-ecard4"),
                            c = 0;
                        "baozhang" == t && (c = n[0].bzAppliCounts);
                        var d = {
                            compName: e.label,
                            vLevel: o,
                            centerPageUrl: i
                        };
                        a && (d.unfixedInfo = a), s && (d.webIMUrl = s), t && (d.type = t), c && (d.bzAppliCounts = c), e.brandName && (d.brandName = e.brandName), e.brandLogo && (d.brandLogo = e.brandLogo), e.brandScope && (d.brandScope = e.brandScope), e.brandRelation && (d.brandRelation = e.brandRelation), e.authBrandName && (d.authBrandName = e.authBrandName), e.authBizScope && (d.authBizScope = e.authBizScope), e.authBizType && (d.authBizType = e.authBizType), A.ui.honourCard4(r, d)
                    })
                }, 0), $("li", this.dom).each(function() {
                    $("a", this).each(function(e) {
                        this.onmousedown = function() {
                            ns_c({
                                hintUrl: i,
                                hintTpl: t,
                                title: this.innerHTML,
                                pos: e
                            })
                        }
                    })
                })
            }
        }
    }

    function a(e) {
        var t = e;
        return t = t.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;"), t = t.replace("[/url]", "</a>").replace(/\[url ([^\s]*)\]/, "<a href='$1' target='_blank'>"), t = t.replace(/\[img ([^\s]*)\]/, "<img src='$1' />"), t = t.replace(/\[ecard (-?[\d]{0,3})\]/, "<div class='c-trust-ecard4' value='$1'></div>")
    }
    var c = 4,
        d = [],
        l = [];
    if (bds.util && bds.util.domain && bds.util.domain.get) var u = bds.util.domain.get("http://tag.baidu.com");
    else var u = "http://tag.baidu.com";
    var m = null,
        p = null,
        f = !1,
        h = null,
        g = 0;
    return e(), {
        init: e,
        render: n
    }
}();
var __callback_names = {};
$(function() {
    bds.comm.user && "" != bds.comm.user && setTimeout(function() {
        $.ajax({
            dataType: "script",
            cache: !0,
            url: (bds.su && bds.su.urStatic ? bds.su.urStatic : "http://ss.bdimg.com") + "/static/message/js/mt_show_1.8.js",
            success: function() {
                function e() {
                    $("#imsg")[0] && $("#u")[0] && $("#user")[0] && (bds.se.message && bds.se.message.init && bds.se.message.init({
                        button: $("#imsg"),
                        refer: $("#u")
                    }), $("#user").on("mouseover", function() {
                        $("#s_mod_msg").hide()
                    })), $("#imsg1")[0] && $("#u1")[0] && $("#user1")[0] && (bds.se.message && bds.se.message.init && bds.se.message.init({
                        button: $("#imsg1"),
                        refer: $("#u1")
                    }), $("#user1").on("mouseover", function() {
                        $("#s_mod_msg").hide()
                    }))
                }

                function t() {
                    bds.se.message && bds.se.message.addStyle && bds.se.message.addStyle()
                }
                bds.comm.loginAction.push(function(n) {
                    1 == n && (e(), t())
                }), bds.comm.newindex ? $(window).on("index_off", function() {
                    setTimeout(function() {
                        e(), t()
                    }, 0)
                }) : (e(), t()), $(window).on("swap_end", t)
            }
        })
    }, 0)
}), $(window).on("swap_end", function() {
    var e = '<div id="_FP_userDataDiv" style="behavior:url(#default#userdata);width:0px;height:0px;position:absolute;top:-1000px;left:-1000px"></div><div id="_FP_comDiv" style="behavior:url(#default#clientCaps);width:0px;height:0px;position:absolute;top:-1000px;left:-1000px"></div>',
        t = "//www.baidu.com/cache/fpid/o_0108.swf",
        n = "//www.baidu.com/cache/fpid/ielib_0108.js",
        o = "//www.baidu.com/cache/fpid/chromelib_0108.js",
        i = document.title,
        s = {
            flashDomId: "_FP_userDataDiv",
            flashUrl: t,
            comDomId: "_FP_comDiv",
            IEStoreDomId: "_FP_userDataDiv"
        },
        r = navigator.userAgent.toLowerCase(),
        a = !1;
    (r.indexOf("msie") >= 0 || new RegExp("trident(.*)rv.(\\d+)\\.(\\d+)").test(r)) && (a = !0);
    var c, d = !1,
        l = new RegExp("chrome/(\\d+)"),
        u = r.match(l);
    if (u && (d = !0, c = u[1]), !(d && c >= 39)) {
        $("body").append(e);
        var m = function(e) {
            a && window.setTimeout(function() {
                document.title = i
            }, 0), window._FPID_CACHE = e, $("#_FP_userDataDiv").remove(), $("#_FP_comDiv").remove();
            var t = bds.comm.qid,
                n = "_WWW_BR_API_" + (new Date).getTime(),
                o = window[n] = new Image;
            o.onload = function() {
                window[n] = null
            };
            var s = $.getCookie("BAIDUID"),
                r = $.getCookie("BIDUPSID"),
                c = bds && bds.util && bds.util.domain ? bds.util.domain.get("http://eclick.baidu.com/ps_fp.htm?") : "http://eclick.baidu.com/ps_fp.htm?",
                d = c + "pid=ps&fp=" + e.data.fp + "&im=" + e.data.im + "&wf=" + e.data.wf + "&br=" + e.data.br + "&qid=" + t + "&bi=" + s + "&psid=" + r;
            o.src = d
        };
        return window._FPID_CACHE ? void(window._FPIDTimer = window.setTimeout(function() {
            m(window._FPID_CACHE)
        }, 2500)) : void(window._FPIDTimer = window.setTimeout(function() {
            var e = "";
            e = a ? n : o, $.ajax({
                url: e,
                cache: !0,
                dataType: "script",
                success: function() {
                    fpLib.getFp(m, s)
                }
            })
        }, 2500))
    }
}), $(window).on("swap_begin", function() {
    window._FPIDTimer && (window.clearTimeout(window._FPIDTimer), $("#_FP_userDataDiv").remove(), $("#_FP_comDiv").remove())
});
var bds = bds || {};
bds.se = bds.se || {}, bds.se.upn = {
    regexp: /BD_UPN=([\w|\d]*)/,
    cookieset: [],
    write: function(e) {
        document.cookie = "BD_UPN=" + e + "; expires=" + new Date((new Date).getTime() + 864e6).toGMTString()
    },
    set: function(e) {
        var t = this;
        try {
            $.isArray(e) && (t.cookieset = t.cookieset.concat(e))
        } catch (n) {}
    },
    run: function() {
        var e = this;
        try {
            for (var t = "", n = 0; n < e.cookieset.length; n++)
                if (e.cookieset[n] && e.cookieset[n].k && e.cookieset[n].v) {
                    var o = e.cookieset[n].k + "",
                        i = e.cookieset[n].v + "";
                    if (o.length == i.length == 1) {
                        var s = {};
                        s[o] = i, t = t + o + i
                    }
                }
            e.write(t)
        } catch (r) {}
    }
}, bds.se.upn.set(function() {
    function e() {
        return o.indexOf("lbbrowser") > 0 ? o.match(/lbbrowser/gi) : o.indexOf("maxthon") > 0 ? o.match(/maxthon\/[\d.]+/gi) : o.indexOf("bidubrowser") > 0 ? o.match(/bidubrowser/gi) : o.indexOf("baiduclient") > 0 ? o.match(/baiduclient/gi) : o.indexOf("metasr") > 0 ? o.match(/metasr/gi) : o.indexOf("qqbrowser") > 0 ? o.match(/qqbrowser/gi) : ! function() {
            if (navigator.mimeTypes.length > 0) {
                var e;
                for (e in navigator.mimeTypes)
                    if ("application/vnd.chromium.remoting-viewer" == navigator.mimeTypes[e].type) return !0
            }
            return !1
        }() && "track" in document.createElement("track") && !("scoped" in document.createElement("style")) && !("v8Locale" in window) && /Gecko\)\s+Chrome/.test(navigator.appVersion) && "track" in document.createElement("track") && "scoped" in document.createElement("style") && "v8Locale" in window ? "qihu" : o.indexOf("msie") > 0 ? o.match(/msie [\d.]+;/gi) : window.document.documentMode ? "msie" : o.indexOf("edge") > 0 ? o.match(/edge\/[\d.]+/gi) : o.indexOf("firefox") > 0 ? o.match(/firefox\/[\d.]+/gi) : o.indexOf("opr") > 0 ? o.match(/opr\/[\d.]+/gi) : o.indexOf("chrome") > 0 ? o.match(/chrome\/[\d.]+/gi) : o.indexOf("safari") > 0 && o.indexOf("chrome") < 0 ? o.match(/safari\/[\d.]+/gi) : ""
    }

    function t() {
        var e = "Win32" == navigator.platform || "Windows" == navigator.platform,
            t = "Mac68K" == navigator.platform || "MacPPC" == navigator.platform || "Macintosh" == navigator.platform || "MacIntel" == navigator.platform;
        if (t) return "mac";
        var n = "X11" == navigator.platform && !e && !t;
        if (n) return "unix";
        var o = String(navigator.platform).indexOf("Linux") > -1;
        return o ? "linux" : e ? "windows" : "other"
    }
    var n = navigator.userAgent,
        o = n.toLowerCase();
    browser = (e() + "").replace(/[0-9.\/|;|\s]/gi, ""), browserversion = function() {
        return "msie" == browser ? n.search(/MSIE [2-5]/) > 0 ? "ie5" : n.indexOf("MSIE 6") > 0 ? "ie6" : n.indexOf("MSIE 7") > 0 ? "ie7" : n.indexOf("MSIE 8") > 0 ? "ie8" : n.indexOf("MSIE 9") > 0 ? "ie9" : n.indexOf("MSIE 10") > 0 ? "ie10" : "11" == window.document.documentMode ? "ie11" : "other" : ""
    }(), browsertype = function() {
        return o.indexOf("msie") > 0 || new RegExp("trident(.*)rv.(\\d+)\\.(\\d+)").test(o) ? "ie" : o.indexOf("firefox") > 0 ? "firefox" : o.indexOf("chrome") > 0 ? "chrome" : o.indexOf("safari") > 0 && o.indexOf("chrome") < 0 ? "safari" : "other"
    }(), os = t(), osversion = function() {
        return "windows" == os ? n.indexOf("Windows NT 5.1") > -1 || n.indexOf("Windows XP") > -1 ? "xp" : (isWinVista = n.indexOf("Windows NT 6.0") > -1 || n.indexOf("Windows Vista") > -1) ? "vista" : n.indexOf("Windows NT 6.1") > -1 || n.indexOf("Windows 7") > -1 ? "win7" : n.indexOf("Windows NT 6.2") > -1 || n.indexOf("Windows 8") > -1 ? "win8" : n.indexOf("Windows NT 6.3") > -1 || n.indexOf("Windows 8.1") > -1 ? "win8.1" : n.indexOf("Windows NT 10") > -1 ? "win10" : "other" : void 0
    }();
    var i = function(e) {
            var t = 0;
            switch (e) {
                case "msie":
                    t = 1;
                    break;
                case "chrome":
                    t = 2;
                    break;
                case "firefox":
                    t = 3;
                    break;
                case "safari":
                    t = 4;
                    break;
                case "opr":
                    t = 5;
                    break;
                case "lbbrowser":
                    t = 6;
                    break;
                case "maxthon":
                    t = 7;
                    break;
                case "bidubrowser":
                    t = 8;
                    break;
                case "metasr":
                    t = 9;
                    break;
                case "qqbrowser":
                    t = "a";
                    break;
                case "qihu":
                    t = "b";
                    break;
                case "baiduclient":
                    t = "c";
                    break;
                case "edge":
                    t = "d"
            }
            return t
        }(browser),
        s = function(e) {
            var t = 0;
            switch (e) {
                case "ie6":
                    t = 1;
                    break;
                case "ie7":
                    t = 2;
                    break;
                case "ie8":
                    t = 3;
                    break;
                case "ie9":
                    t = 4;
                    break;
                case "ie10":
                    t = 5;
                    break;
                case "ie11":
                    t = 6;
                    break;
                case "other":
                    t = 7;
                    break;
                case "ie5":
                    t = 8
            }
            return t
        }(browserversion),
        r = function(e) {
            var t = 0;
            switch (e) {
                case "windows":
                    t = 1;
                    break;
                case "mac":
                    t = 2;
                    break;
                case "linux":
                    t = 3;
                    break;
                case "unix":
                    t = 4
            }
            return t
        }(os),
        a = function(e) {
            var t = 0;
            switch (e) {
                case "xp":
                    t = 1;
                    break;
                case "vista":
                    t = 2;
                    break;
                case "win7":
                    t = 3;
                    break;
                case "win8":
                    t = 4;
                    break;
                case "win8.1":
                    t = 5;
                    break;
                case "other":
                    t = 6;
                    break;
                case "win10":
                    t = 7
            }
            return t
        }(osversion),
        c = function(e) {
            var t = 0;
            switch (e) {
                case "ie":
                    t = 1;
                    break;
                case "firefox":
                    t = 2;
                    break;
                case "chrome":
                    t = 3;
                    break;
                case "safari":
                    t = 4
            }
            return t
        }(browsertype);
    return [{
        k: 1,
        v: i
    }, {
        k: 2,
        v: s
    }, {
        k: 3,
        v: r
    }, {
        k: 4,
        v: a
    }, {
        k: 5,
        v: c
    }]
}()), bds.se.upn.run(), bds.se.heightControl = {
    check: function() {
        return $("#content_right").height() > $("#content_left").height()
    },
    cleanEC: function() {
        var e = $(".ec_bdtg"),
            t = $("#ec_im_container").children("div"),
            n = t.length,
            o = n - 1;
        for (bds.se.heightControl.check() && e && e.length && e.css("display", "none"); bds.se.heightControl.check() && o >= 0;) {
            var i = t[o];
            $(i).css("display", "none"), o--
        }
    },
    cleanRes: function() {
        var e = $("#content_right").find(".result-op"),
            t = e.length,
            n = t - 1;
        if (0 == n) {
            var o = $(e[0]).parent();
            $("#content_right").height() + e.height() < $("#content_left").height() && o.css({
                position: "static"
            })
        } else
            for (; bds.se.heightControl.check() && n > 0;) {
                var i = e[n];
                $(i).css("display", "none"), n--
            }
    },
    init: function() {
        bds.se.heightControl.cleanEC(), bds.se.heightControl.cleanRes()
    }
}, ! function() {
    function e() {
        this.start = null, this.mouse = [], this.mouseTime = null, this.mouseSpeed = 500, this.key = [], this.scroll = [], this.scrollTime = null, this.scrollSpeed = 500, this.debug = !1, this.dataStore = {}, this.t = null, this.cycle = null, this.MIN_SPEED = 2e3, this.MAX_SPEED = 1e4, this.curSpeed = 5e3, this.stayTime = 0, this.heartTime = [], this.heartT = null, this.MAX_LEN = 2e3, this.storeLen = -1, this.MAX_SEND = 100, this.hostEnum = {
            SCLICK: 0,
            NSCLICK: 1,
            SESTAT: 2
        }, this.keyMap = {
            new_input: 2,
            new_disp: 2,
            new_view: 2,
            new_user: 2,
            new_heart: 2
        }, this.hostAddr = [bds && bds.comm && bds.comm.ubsurl ? bds.comm.ubsurl + "?" : "", (bds && bds.util && bds.util.domain ? bds.util.domain.get("http://nsclick.baidu.com") : "http://nsclick.baidu.com") + "/v.gif?", (bds && bds.util && bds.util.domain ? bds.util.domain.get("http://sestat.baidu.com") : "http://sestat.baidu.com") + "/wb.gif?"], this.commLog = {}, this.isFirst = !0, this.sendNum = {}, this.init()
    }
    e.prototype = {
        setCommLog: function(e, t, n) {
            if (!bds || !bds.comm) return !1;
            if (!(e in this.commLog)) {
                var o = {};
                t && n ? (o.log = t, o.len = n) : (o.log = "&q=" + bds.comm.queryEnc + "&qid=" + bds.comm.qid + "&rsv_did=" + bds.comm.did + "&rsv_tn=" + bds.comm.tn + "&rsv_sid=" + bds.comm.sid, o.len = (o.log + "&t=" + (new Date).getTime()).length), this.commLog[e] = o
            }
            return !0
        },
        fb: function() {
            var e, t = this.heartTime.length;
            return e = 0 === t || 1 === t ? 3e3 : this.heartTime[t - 1] + this.heartTime[t - 2], this.heartTime.push(e), e
        },
        sendHeart: function(e) {
            var t = 0 === e ? this.stayTime : (new Date).getTime() - this.start,
                n = bds && bds.comm && bds.comm.qid;
            if (n && n in this.commLog && n in this.sendNum) {
                var o = [{
                    stay_time: t,
                    send_num: this.sendNum[n]
                }];
                this.send({
                    type: e,
                    fm: "new_heart",
                    data: o
                }, this.keyMap.new_heart)
            }
        },
        startHeart: function() {
            var e = this,
                t = e.fb();
            e.stayTime += t, e.heartT = setTimeout(function() {
                e.sendHeart(0), e.startHeart()
            }, t)
        },
        preInit: function() {
            this.start = (new Date).getTime(), this.mouse = [], null !== this.mouseTime && clearTimeout(this.mouseTime), this.mouseTime = null, this.key = [], this.scroll = [], null !== this.scrollTime && clearTimeout(this.scrollTime), this.scrollTime = null, this.cycle = null, null !== this.t && clearTimeout(this.t), this.t = null, this.storeLen = -1;
            var e = bds && bds.comm && bds.comm.qid ? bds.comm.qid : "";
            e && (this.setCommLog(e), this.sendNum[e] = 0), bds && bds.comm && (1 === bds.comm.logFlagSug || 1 === bds.comm.globalLogFlag) && 0 === bds.comm.ishome && (null !== this.heartT && clearTimeout(this.heartT), this.heartT = null, this.stayTime = 0, this.heartTime = [], this.startHeart())
        },
        collectPoint: function(e, t) {
            function n(e, t) {
                var n = [];
                if ("mouse" === e) n[0] = t.pageX, n[1] = t.pageY;
                else if ("scroll" === e) {
                    var o = $(window);
                    n[0] = o.scrollLeft(), n[1] = o.scrollTop()
                }
                return n
            }
            var o = e + "Time",
                i = this[e + "Speed"],
                s = this;
            if (0 === s[e].length) {
                var r = n(e, t);
                if (r.length < 2) return;
                return void s[e].push([(new Date).getTime() - s.start, r[0], r[1]])
            }
            null === s[o] && (s[o] = setTimeout(function() {
                var i = n(e, t);
                return i.length < 2 ? void(s[o] = null) : (s[e].push([(new Date).getTime() - s.start, i[0], i[1]]), void(s[o] = null))
            }, i))
        },
        singleInit: function() {
            var e = this;
            $("body").on("mousemove", function(t) {
                e.collectPoint("mouse", t)
            }).on("keydown", function(t) {
                e.key.push([(new Date).getTime() - e.start, t.keyCode])
            }), $(window).on("scroll", function(t) {
                e.collectPoint("scroll", t)
            }), e.singleInit = function() {}
        },
        flushData: function(e) {
            null !== this.t && (clearTimeout(this.t), this.t = null), this.startSend(this.fetchData(e, !0), !0), this.startSend(this.fetchData(e, !0)), bds && bds.comm && (1 === bds.comm.logFlagSug || 1 === bds.comm.globalLogFlag) && (null !== this.heartT && (clearTimeout(this.heartT), this.heartT = null), this.sendHeart(e))
        },
        init: function() {
            var e = this;
            e.preInit(), $(window).on("swap_begin", function() {
                null !== e.t && (clearTimeout(e.t), e.t = null), bds && bds.comm && 0 === bds.comm.ishome && (1 === bds.comm.logFlag || 1 === bds.comm.globalLogFlag) && e.isFirst === !1 && e.sendHeart(1)
            }).on("unload", function() {
                bds && bds.comm && 0 === bds.comm.ishome && (1 === bds.comm.logFlagSug || 1 === bds.comm.globalLogFlag) && e.flushData(2)
            }).on("swap_end", function() {
                e.preInit(), e.isFirst === !0 && (e.isFirst = !1), !e.hostAddr[0] && bds && bds.comm && bds.comm.ubsurl && (e.hostAddr[0] = bds.comm.ubsurl + "?")
            })
        },
        getData: function(e, t, n) {
            if (null === this.start || 0 === e.length) return {
                startTime: this.start,
                record: []
            };
            var o = {
                    startTime: this.start,
                    record: []
                },
                i = t,
                s = n;
            void 0 === i ? (i = 0, s = e[e.length - 1][0]) : void 0 !== i && "number" == typeof i && void 0 === s ? (i -= this.start, s = e[e.length - 1][0]) : void 0 !== i && "number" == typeof i && void 0 !== s && "number" == typeof s ? (i -= this.start, s -= this.start) : (i = 0, s = 0);
            for (var r in e)
                if (!(e[r][0] < i) && (e[r][0] < s && o.record.push(e[r]), e[r][0] >= s)) break;
            return o
        },
        send: function(e, t, n) {
            if (!e) return !1;
            if (this.debug, 0 === t && !this.hostAddr[0]) {
                if (!(bds && bds.comm && bds.comm.ubsurl)) return !1;
                this.hostAddr[0] = bds.comm.ubsurl + "?"
            }
            var o = "",
                i = "",
                s = "";
            if ("object" == typeof e) {
                for (var r in e) o = e[r], "object" == typeof o && (o = $.stringify(o)), i += r + "=" + encodeURIComponent(o) + "&";
                i = i.substring(0, i.length - 1)
            } else "string" == typeof e && (i = e);
            if (!n && bds && bds.comm && bds.comm.qid && (n = bds.comm.qid), !(n && n in this.commLog)) return !1;
            if (i += this.commLog[n].log, i += "&t=" + (new Date).getTime(), ("number" != typeof t || 0 > t || t >= this.hostAddr.length) && (t = 0), s = this.hostAddr[t] + i, s.length > this.MAX_LEN) return !1;
            var a = window["BD_PS_C" + (new Date).getTime()] = new Image;
            return a.src = this.hostAddr[t] + i, !0
        },
        sendNow: function(e, t, n) {
            if (e && "string" == typeof e && e in this.keyMap && t) {
                var o = "type=3&fm=" + e + "&data=" + encodeURIComponent($.stringify([t]));
                n && n.qid && n.log && n.len ? (this.setCommLog(n.qid, n.log, n), this.send(o, this.keyMap[e], n.qid)) : send(o, this.keyMap[e])
            }
        },
        pushData: function(e, t, n) {
            var o = bds && bds.comm && bds.comm.qid ? bds.comm.qid : "";
            if (!o) return !1;
            n && n.qid && n.log && n.len ? (this.setCommLog(n.qid, n.log, n.len), o = n.qid) : this.setCommLog(o), o in this.dataStore || (this.dataStore[o] = {});
            var i = this.dataStore[o];
            e in i || (i[e] = [
                [],
                []
            ]), n && n.level === !0 ? i[e][0].push(encodeURIComponent($.stringify(t))) : i[e][1].push(encodeURIComponent($.stringify(t)))
        },
        fetchData: function(e, t) {
            function n() {
                for (var t, n = 0, o = [], s = !1, d = this.commLog[l].len, m = this.hostAddr[a].length, p = m + ("type=" + e + "&fm=" + u + "&data=").length + d, f = p + 6, h = f; 0 !== i.length && n < this.MAX_SEND;) c === !1 && 0 === e && n++, t = i.shift(), o.push(t), h = f + t.length + 3, (f >= this.MAX_LEN || h >= this.MAX_LEN) && (o.length >= 2 && (o.pop(), s = !0), r.push({
                    qid: l,
                    key: u,
                    type: e,
                    data: "%5B" + o.join("%2C") + "%5D",
                    host: a
                }), o = [], s && (o[0] = t, s = !1), h = o.length > 0 ? p + 3 + t.length + 3 : p + 6), f = h;
                o.length > 0 && r.push({
                    qid: l,
                    key: u,
                    type: e,
                    data: "%5B" + o.join("%2C") + "%5D",
                    host: a
                })
            }
            var o, i, s = this.dataStore,
                r = [],
                a = 0,
                c = !1,
                d = bds && bds.comm && bds.comm.qid ? bds.comm.qid : "";
            if (!d) return [];
            for (var l in s) {
                c = l !== d ? !0 : !1, o = s[l];
                for (var u in o) u in this.keyMap && (a = this.keyMap[u], "number" == typeof a && void 0 !== this.hostAddr[a] && (i = o[u][0].length > 0 ? o[u][0] : o[u][1], n.call(this), (c === !0 || t !== !0) && 0 === i.length && o[u][1].length > 0 && (i = o[u][1], n.call(this)), c === !0 && delete this.dataStore[l]))
            }
            return r
        },
        startSend: function(e, t) {
            var n, o, i = this,
                s = t === !0 ? 0 : 100,
                r = setInterval(function() {
                    return e.length <= 0 ? void clearInterval(r) : (n = e.shift(), void(n && n.qid && n.qid in i.commLog && (o = "type=" + n.type + "&fm=" + n.key + "&data=" + n.data, i.send(o, n.host, n.qid), n.qid in i.sendNum && (i.sendNum[n.qid] += 1))))
                }, s)
        },
        startCycle: function() {
            var e = this;
            null === e.cycle && (e.cycle = 1), e.t = setTimeout(function() {
                var t = e.fetchData(0),
                    n = t.length; - 1 === e.storeLen && (e.storeLen = n), 0 !== e.storeLen && n / e.storeLen >= 2 && e.curSpeed > e.MIN_SPEED && (e.curSpeed -= 1e3), (0 === n || e.storeLen / n >= 2) && e.curSpeed < e.MAX_SPEED && (e.curSpeed += 1e3), e.startSend(t, 0), e.startCycle()
            }, e.curSpeed)
        },
        outInterface: function() {
            var e = this;
            return {
                hostEnum: e.hostEnum,
                api: {
                    getMouseLocus: function(t, n) {
                        return e.getData(e.mouse, t, n)
                    },
                    getKeyRecord: function(t, n) {
                        return e.getData(e.key, t, n)
                    },
                    getScrollRecord: function(t, n) {
                        return e.getData(e.scroll, t, n)
                    },
                    startAPI: function() {
                        e.singleInit()
                    }
                },
                send: {
                    debug: function() {
                        e.debug = !0
                    },
                    send: function(t, n) {
                        return e.send(t, n)
                    },
                    sendNow: function(t, n, o) {
                        return e.sendNow(t, n, o)
                    },
                    sendPack: function(t, n, o) {
                        t && "string" == typeof t && t in e.keyMap && n && (e.pushData(t, n, o), null === e.cycle && e.startCycle())
                    }
                }
            }
        }
    }, bds.log = (new e).outInterface()
}(), $(window).on("swap_end", function() {
    function e() {
        return !!window.ActiveXObject && (!document.documentMode || document.documentMode <= 7)
    }
    bds.comm.encTn && $.setCookie("H_PS_645EC", bds.comm.encTn, {
        expires: 2592e3
    }), bds.se.trust && bds.se.trust.init(), bds.se.heightControl.init(), bds.util.setContainerWidth(), $(".content_none").length > 0 && new bds.util.setFootStyle, bds.comm.feedback ? e() ? $(document).delegate(".feedback", "click", function() {
        var e = this;
        $.getScript("https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/plugins/feedback_67607cd.js", function() {
            var t = e.getAttribute("data-feedbackid") || 1,
                n = {
                    product_id: 18,
                    entrance_id: t
                },
                o = {
                    username: bds.comm.username,
                    query: bds.comm.query,
                    fb_qid: bds.comm.qid
                };
            bds.qa.ShortCut.initRightBar(n, o)
        })
    }) : $(".feedback").on("click", function() {
        $.getScript("https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/plugins/feedback_new_b86a072.js", function() {
            bds.se.ShortCut.initRightBar()
        })
    }) : $(document).delegate(".feedback", "click", function() {
        var e = this;
        $.getScript("https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/plugins/feedback_67607cd.js", function() {
            var t = e.getAttribute("data-feedbackid") || 1,
                n = {
                    product_id: 18,
                    entrance_id: t
                },
                o = {
                    username: bds.comm.username,
                    query: bds.comm.query,
                    fb_qid: bds.comm.qid
                };
            bds.qa.ShortCut.initRightBar(n, o)
        })
    });
    var t = $("#form").find('input[type="hidden"][name=rsv_t]');
    t.length ? $(t).val(bds.comm.encTn) : $("#form").append('<input type="hidden" name="rsv_t" value="' + bds.comm.encTn + '"/>'), bds.comm.did = function() {
        for (var e = "", t = 0; 32 > t; t++) e += Math.floor(16 * Math.random()).toString(16);
        return e
    }()
}), ! function() {
    $(window).one("swap_end", function() {
        $("body").on("mousedown", ".se_common_hint a", function() {
            var e = $(this),
                t = e.parents(".se_common_hint"),
                n = t.attr("data-id") || "",
                o = t.attr("data-tpl") || "",
                i = t.find("a").index(e);
            ns_c_pj({
                hintId: n,
                hintTpl: o,
                title: e.html(),
                pos: i,
                qid: bds.comm.qid || ""
            }, "pj=hint&")
        })
    })
}(), $(function() {
    $("#u,#u1").delegate(".lb", "click", function() {
        var e = $(this).attr("data-subpro");
        e && bds.se.login.setSubpro(e);
        try {
            bds.se.login.open()
        } catch (t) {}
    })
}), $.ajax({
    dataType: "script",
    cache: !0,
    url: "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/home/js/nu_instant_search_7881c1c.js"
}), window.PRE_CONN = function() {
    var e, t = function(e, t) {
            var n = 1 * new Date;
            e = bds.util.domain && bds.util.domain.get ? bds.util.domain.get(e) : e;
            var i = /^(http[s]?:\/\/)?([^\/]+)(.*)/,
                s = e.match(i);
            if (s[2] && !o[s[2]]) {
                o.push(s[2]);
                var r = new Image;
                r.src = e + "?_t=" + (t ? t : n), r.onload = r.onerror = function() {
                    r = null
                }
            }
        },
        n = 0,
        o = [],
        i = function() {
            try {
                window.pageState && 0 != window.pageState && 1 != n || ($("#kw1,#kw").one("keydown", function() {
                    "https:" === location.protocol ? (t("https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/ps_default.gif"), t("https://ss1.baidu.com/6ONWsjip0QIZ8tyhnq/ps_default.gif"), t("https://ss2.baidu.com/6ONWsjip0QIZ8tyhnq/ps_default.gif"), t("https://ss3.baidu.com/6ONWsjip0QIZ8tyhnq/ps_default.gif")) : (t("http://b1.bdstatic.com/img/pc.gif", parseInt(1e3 * Math.random())), t("http://ecmb.bdimg.com/public03/pc.gif"), $.each(["i7", "i8", "i9", "t10", "t11", "t12"], function(e, n) {
                        t("http://" + n + ".baidu.com/ps_default.gif")
                    }))
                }), 1 == n && $("#kw1,#kw").one("focus", function() {
                    "https:" === location.protocol && t("https://www.baidu.com/con?from=self")
                }))
            } catch (e) {}
        },
        s = function() {
            n = 1, i(), a()
        },
        r = function() {
            a(), e = setTimeout(s, 55e3)
        },
        a = function() {
            clearTimeout(e), n = 0
        };
    return i(), {
        init: i,
        startTimer: r
    }
}(), ! function() {
    $.ajaxPrefilter("parts", function(e, t, n) {
        e.__partsCallback = [], e.__partsIndex = 0, n.parts = function(t) {
            e.__partsCallback.push(t)
        }, e.parts && n.parts(e.parts), e.converters["* parts"] = function(e) {
            return e
        }
    }), $.ajaxTransport("parts", function(e) {
        if (!e.crossDomain || support.cors) {
            var t;
            return {
                send: function(n, o) {
                    var i, s = e.xhr();
                    if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (i in e.xhrFields) s[i] = e.xhrFields[i];
                    e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (i in n) void 0 !== n[i] && s.setRequestHeader(i, n[i] + "");
                    s.send(e.hasContent && e.data || null), t = function(n, i) {
                        var r, a, c;
                        if (3 !== s.readyState && 4 !== s.readyState || i || ! function() {
                                var t = e.delimiter,
                                    n = "";
                                try {
                                    n = s.responseText
                                } catch (o) {}
                                if ("" != n) {
                                    var i, r, a = -1,
                                        c = 0;
                                    if (t)
                                        for (;;) {
                                            for (; c <= e.__partsIndex && (i = -1 == a ? 0 : a + t.length, a = n.indexOf(t, i), -1 != a); c++);
                                            if (-1 == a && 4 !== s.readyState) return;
                                            for (r = 0; r < e.__partsCallback.length; r++) e.__partsCallback[r].call(s, n.substring(i, -1 == a ? n.length : a), e.__partsIndex, n);
                                            if (e.__partsIndex++, -1 == a) return
                                        } else
                                            for (c = 0; c < e.__partsCallback.length; c++) e.__partsCallback[c].call(s, n)
                                }
                            }(), t && (i || 4 === s.readyState))
                            if (t = void 0, s.onreadystatechange = jQuery.noop, i) 4 !== s.readyState && s.abort();
                            else {
                                c = {}, r = s.status, "string" == typeof s.responseText && (c.text = s.responseText);
                                try {
                                    a = s.statusText
                                } catch (d) {
                                    a = ""
                                }
                                r || !e.isLocal || e.crossDomain ? 1223 === r && (r = 204) : r = c.text ? 200 : 404
                            }
                        c && o(r, a, c, s.getAllResponseHeaders())
                    }, e.async ? 4 === s.readyState ? setTimeout(t) : s.onreadystatechange = t : t()
                },
                abort: function() {
                    t && t(void 0, !0)
                }
            }
        }
    })
}(), ! function() {
    function save(e) {
        var t = [];
        for (tmpName in options) options.hasOwnProperty(tmpName) && "duRobotState" !== tmpName && t.push('"' + tmpName + '":"' + options[tmpName] + '"');
        var n = "{" + t.join(",") + "}";
        bds.comm.personalData ? $.ajax({
            url: "//www.baidu.com/ups/submit/addtips/?product=ps&tips=" + encodeURIComponent(n) + "&_r=" + (new Date).getTime(),
            success: function() {
                writeCookie(), "function" == typeof e && e()
            }
        }) : (writeCookie(), "function" == typeof e && setTimeout(e, 0))
    }

    function set(e, t) {
        options[e] = t
    }

    function get(e) {
        return options[e]
    }

    function writeCookie() {
        if (options.hasOwnProperty("sugSet")) {
            var e = "0" == options.sugSet ? "0" : "3";
            clearCookie("sug"), Cookie.set("sug", e, document.domain, "/", expire30y)
        }
        if (options.hasOwnProperty("sugStoreSet")) {
            var e = 0 == options.sugStoreSet ? "0" : "1";
            clearCookie("sugstore"), Cookie.set("sugstore", e, document.domain, "/", expire30y)
        }
        if (options.hasOwnProperty("isSwitch")) {
            var t = {
                    0: "2",
                    1: "0",
                    2: "1"
                },
                e = t[options.isSwitch];
            clearCookie("ORIGIN"), Cookie.set("ORIGIN", e, document.domain, "/", expire30y)
        }
        if (options.hasOwnProperty("imeSwitch")) {
            var e = options.imeSwitch;
            clearCookie("bdime"), Cookie.set("bdime", e, document.domain, "/", expire30y)
        }
    }

    function writeBAIDUID() {
        var e, t, n, o = Cookie.get("BAIDUID");
        /FG=(\d+)/.test(o) && (t = RegExp.$1), /SL=(\d+)/.test(o) && (n = RegExp.$1), /NR=(\d+)/.test(o) && (e = RegExp.$1), options.hasOwnProperty("resultNum") && (e = options.resultNum), options.hasOwnProperty("resultLang") && (n = options.resultLang), Cookie.set("BAIDUID", o.replace(/:.*$/, "") + ("undefined" != typeof n ? ":SL=" + n : "") + ("undefined" != typeof e ? ":NR=" + e : "") + ("undefined" != typeof t ? ":FG=" + t : ""), ".baidu.com", "/", expire30y, !0)
    }

    function clearCookie(e) {
        Cookie.clear(e, "/"), Cookie.clear(e, "/", document.domain), Cookie.clear(e, "/", "." + document.domain), Cookie.clear(e, "/", ".baidu.com")
    }

    function reset(e) {
        options = defaultOptions, save(e)
    }
    var defaultOptions = {
            sugSet: 1,
            sugStoreSet: 1,
            isSwitch: 1,
            isJumpHttps: 1,
            imeSwitch: 0,
            resultNum: 10,
            skinOpen: 1,
            resultLang: 0,
            duRobotState: "000"
        },
        options = {},
        tmpName, expire30y = new Date;
    expire30y.setTime(expire30y.getTime() + 94608e7);
    try {
        if (bds && bds.comm && bds.comm.personalData) {
            if ("string" == typeof bds.comm.personalData && (bds.comm.personalData = eval("(" + bds.comm.personalData + ")")), !bds.comm.personalData) return;
            for (tmpName in bds.comm.personalData) defaultOptions.hasOwnProperty(tmpName) && bds.comm.personalData.hasOwnProperty(tmpName) && "SUCCESS" == bds.comm.personalData[tmpName].ErrMsg && (options[tmpName] = bds.comm.personalData[tmpName].value)
        }
        try {
            parseInt(options.resultNum) || delete options.resultNum, parseInt(options.resultLang) || "0" == options.resultLang || delete options.resultLang
        } catch (e) {}
        writeCookie(), "sugSet" in options || (options.sugSet = 3 != Cookie.get("sug", 3) ? 0 : 1), "sugStoreSet" in options || (options.sugStoreSet = Cookie.get("sugstore", 0));
        var BAIDUID = Cookie.get("BAIDUID");
        "resultNum" in options || (options.resultNum = /NR=(\d+)/.test(BAIDUID) && RegExp.$1 ? parseInt(RegExp.$1) : 10), "resultLang" in options || (options.resultLang = /SL=(\d+)/.test(BAIDUID) && RegExp.$1 ? parseInt(RegExp.$1) : 0), "isSwitch" in options || (options.isSwitch = 2 == Cookie.get("ORIGIN", 0) ? 0 : 1 == Cookie.get("ORIGIN", 0) ? 2 : 1), "imeSwitch" in options || (options.imeSwitch = Cookie.get("bdime", 0))
    } catch (e) {}
    window.UPS = {
        writeBAIDUID: writeBAIDUID,
        reset: reset,
        get: get,
        set: set,
        save: save
    }
}();
var ie = navigator.userAgent.toLowerCase().match(/msie\s+(\d*)/),
    ie6 = ie && 6 == ie[1];
if (window._is_skin_sam && !ie6) {
    var url = "";
    "1" == window._is_skin_sam ? url = "../../skin/js/skin_1.js" : "2" == window._is_skin_sam ? url = "../../skin/js/skin_2.js" : "3" == window._is_skin_sam && (url = "../../skin/js/skin_3.js");
    var skinDefer = null;
    if (url) var skinDefer = $.ajax({
        dataType: "script",
        cache: !0,
        url: url
    });
    skinDefer && skinDefer.done(function() {
        $(window).on("swap_end", function() {
            bds.se.skin && new bds.se.skin
        }), $(window).on("swap_begin", function() {
            bds.se.skin && bds.se.skin.prototype.dispose()
        })
    })
}! function() {
    var e = {},
        t = function(e) {
            var t = o(e);
            i(t)
        },
        n = function(n, o) {
            var i = Math.random();
            i > .2 && .201 > i && "http:" == location.protocol && (e.url = n, e.headers = o, $.ajax({
                url: n,
                headers: o,
                success: t
            }))
        },
        o = function(t) {
            if ("string" == typeof t && "object" == typeof e.headers) {
                if (e.headers.hasOwnProperty("content_syni") && 12495 !== t.length) return t;
                if (e.headers.hasOwnProperty("content_syns") && 19295 !== t.length) return t
            }
            return "normal"
        },
        i = function(e) {
            $.ajax({
                url: "//www.baidu.com/r/plog",
                type: "post",
                data: {
                    page_html: e
                }
            })
        };
    window.ctwin = {
        sendRequest: n
    }
}();
var bds = bds || {};
bds.se = bds.se || {}, bds.se.speedTester = function() {
    function e() {}

    function t(e, t, i) {
        i = i || 19558, n(e, function(e) {
            return function(t, n, i) {
                o(e, n, i)
            }
        }(t), function(e) {
            return function() {
                o(e)
            }
        }(t), i)
    }

    function n(t, n, o, i) {
        n = n || e, o = o || e;
        var s = new Image;
        s.onload = function() {
            this.onload = this.onerror = null, i = this.fileSize || i;
            var e = new Date,
                t = e - r,
                o = i / t;
            n(this, t, o)
        }, s.onerror = function() {
            this.onload = this.onerror = null, o(this)
        };
        var r = new Date;
        s.src = t
    }

    function o(e, t, n) {
        var o = new Image;
        o.onload = o.onerror = function() {
            this.onload = this.onerror = null
        }, o.src = e + (t ? "&t=" + t + "&v=" + n : "&t=-1&v=-1") + "&r=" + Math.random()
    }
    return {
        start: t
    }
}(), bds.se.speedMonitor = function(e) {
    function t() {
        var e = d.pop();
        e && n(e), a && (c = window.setTimeout(t, r))
    }

    function n(e) {
        var t = e.url,
            n = e.size || -1,
            o = [];
        o.push("id=" + encodeURIComponent(e.id)), o.push("name=" + encodeURIComponent(e.name)), o.push("url=" + encodeURIComponent(e.url)), o.push("size=" + encodeURIComponent(e.id));
        for (key in e.logData) o.push(key + "=" + encodeURIComponent(e.logData[key]));
        bds.se.speedTester.start(t, l + "&" + o.join("&"), n)
    }

    function o() {
        return !0
    }
    var i = e.logPath || "",
        s = e.flag || "default",
        r = e.sleep || "1000",
        a = !1,
        c = null,
        d = [],
        l = i + "?flag=" + s;
    this.start = function() {
        this.stop(), a = !0, t()
    }, this.stop = function() {
        a = !1, window.clearInterval(c)
    }, this.addTask = function(e) {
        o(e) && d.push(e)
    }, this.clear = function() {
        d = []
    }
}, setTimeout(function() {
    var e = Math.random(),
        t = "http://velocity.baidu.com/sp";
    if ("https:" == location.protocol && (t = "https://sp0.baidu.com/6r1_czmhAB63otqbppnN2DJv/sp"), .01 > e) {
        var n = document.createElement("script");
        n.src = t, document.body.appendChild(n)
    }
}, 1e3), ! function(e) {
    var e = e || {};
    e.se = e.se || {}, e.se.QuickDelete = function(e, t) {
        this.form = e, this.options = t, this._init()
    }, e.se.QuickDelete.prototype = {
        constructor: e.se.QuickDelete,
        _init: function() {
            this._create_elem(), this._bind_event()
        },
        _create_elem: function() {
            var e = this.form,
                t = this.options,
                n = t.top || 0,
                o = t.right || 0,
                i = $.trim(e.val()) ? "block" : "none",
                s = "quickdelete",
                r = e.parent(),
                a = $('<a href="javascript:;"></a>').attr("id", s).attr("title", "清空").addClass("quickdelete");
            r.addClass("quickdelete-wrap").append(a), a.css({
                top: n + "px",
                right: o + "px",
                display: i
            }), t.wrapElem = r, t.elem = a
        },
        _show: function() {
            0 === e.comm.ishome && this.options.elem.show()
        },
        _hide: function() {
            this.options.elem.hide()
        },
        _bind_event: function() {
            var t = this.form,
                n = this.options.elem,
                o = this;
            t.on("focus", function() {
                $.trim(t.val()) ? o._show() : o._hide()
            }).on("keyup input propertychange", function() {
                $.trim(t.val()) ? o._show() : o._hide()
            }), n.on("click", function() {
                var n = e.comm.supportis ? 2 : 0;
                return ns_c({
                    input_clear: e.comm.ishome + n,
                    delete_query: encodeURIComponent(t.val())
                }), t.val("").focus(), o._hide(), !1
            }), $(window).on("swap_end index_off", function() {
                $.trim(t.val()) ? o._show() : o._hide()
            })
        }
    }, new e.se.QuickDelete($("#kw"), {
        top: 0,
        right: 0
    })
}(bds), window.bds && bds.comm && bds.comm.ishome && $(window).on("load", function() {
    if (window.ctwin && window.ctwin.sendRequest("//www.baidu.com/?tn=baidu", {
            content_syni: 1
        }), window.performance && performance.timing) {
        var e = function() {
                var e = n("navigation"),
                    t = n("domainLookup"),
                    o = n("connect"),
                    i = n("secureConnection"),
                    s = (n("redirect"), n("request")),
                    r = n("response"),
                    a = {
                        start: performance.timing.domLoading,
                        end: performance.timing.domComplete
                    },
                    c = n("loadEvent");
                return {
                    navigation: o.start - e.start,
                    dns: t.value,
                    tcp: o.value,
                    ssl: i.start > 0 ? o.end - i.start : 0,
                    request: r.start - s.start,
                    response: r.value,
                    dom: a.end - a.start,
                    loadEvent: c.end - e.start
                }
            },
            t = Cookie.get("__bsi"),
            n = function(e) {
                var t = performance.timing,
                    n = t[e + "Start"] ? t[e + "Start"] : 0,
                    o = t[e + "End"] ? t[e + "End"] : 0;
                return {
                    start: n,
                    end: o,
                    value: o - n > 0 ? o - n : 0
                }
            },
            o = function() {
                var n = [],
                    o = e();
                for (var i in o) n.push(i + "=" + o[i]);
                n.push("protocol=" + encodeURIComponent(location.protocol));
                var s = "//www.baidu.com/nocache/fesplg/s.gif?log_type=hm&type=timing&",
                    r = "";
                r += n.join("&"), r += "&newindex=" + (window.bds && bds.comm ? bds.comm.newindex : -1), t && (r += "&bsi=" + t);
                var a = s + r,
                    c = new Image,
                    d = "_LOG_" + (new Date).getTime();
                c.onload = function() {
                    delete window[d]
                }, window[d] = c, c.src = a
            },
            i = Math.random();
        /8498/.test(bds.comm.indexSid) && .01 > i && setTimeout(o, 500)
    }
}), $(window).on("swap_end", function() {
    bds.comm.search_tool && (bds.comm.search_tool.init = !1)
}), $(window).on("swap_begin", function() {
    $(document).off("click.searchTool")
});
var langfilterTip, timefilterTip, fileTypeTip, insideSearchTip;
$(document).delegate(".head_nums_cont_outer", "mousedown", function() {
    if ("undefined" != typeof bds.comm.search_tool) {
        if (bds.comm.search_tool.init) return;
        bds.comm.search_tool.init = !0;
        var e = $(this),
            t = e.find(".search_tool").eq(0),
            n = e.find(".search_tool_close").eq(0),
            o = e.find(".head_nums_cont_inner").eq(0);
        t.on("click", function() {
            o.animate({
                top: 0
            }, 250), ns_c({
                fm: "advTool",
                qid: bds.comm.qid,
                title: encodeURI("搜索工具"),
                rsv_advTool: 0
            })
        }), n.on("click", function() {
            o.animate({
                top: -42
            }, 250, function() {
                "en" == bds.comm.search_tool.sl_lang || bds.comm.search_tool.st || bds.comm.search_tool.et || bds.comm.search_tool.si || bds.comm.search_tool.ft || bds.comm.search_tool.exact ? (ns_c({
                    fm: "advTool",
                    qid: bds.comm.qid,
                    title: encodeURI("清除"),
                    rsv_advTool: 2
                }), baseChangeUrl("wd=" + encodeURIComponent($("#kw").val().replace(/(filetype:[^\s]* )|(site:[^\s]*)/g, "").replace(/^\"+(.+)\"+$/, "$1")) + "&sl_lang=cn&rsv_srlang=cn&rsv_rq=cn&ct=0&si=&tfflag=0&gpc=" + encodeURIComponent("stf=")), $("input[name='gpc'],input[name='si'],input[name='ct']", "form").val("")) : ns_c({
                    fm: "advTool",
                    qid: bds.comm.qid,
                    title: encodeURI("收起工具"),
                    rsv_advTool: 1
                })
            })
        });
        var i = e.find(".search_tool_la").eq(0);
        if (i.length > 0) {
            var s = "<div class='c-tip-menu c-tip-langfilter'><ul>";
            "en" == bds.comm.search_tool.sl_lang ? (s += "<li><a href='javascript:;' onClick='langChangeUrl(\"sl_lang\",\"cn\",this.innerHTML)'>所有网页</a></li>", s += "<li><span>英文网页</span></li>") : "cn" == bds.comm.search_tool.sl_lang && (s += "<li><span>所有网页</span></li>", s += "<li><a href='javascript:;' onClick='langChangeUrl(\"sl_lang\",\"en\",this.innerHTML)'>英文网页</a></li>"), s += "</li></ul></div>", langfilterTip = new bds.se.tip({
                target: i,
                mode: "none",
                content: $(s),
                arrow: {
                    has: 0,
                    offset: 0
                },
                offset: {
                    x: 15,
                    y: 21
                }
            }), langfilterTip.hide()
        }
        var r = e.find(".search_tool_tf").eq(0);
        if (r.length > 0) {
            var a = "<div class='c-tip-menu c-tip-timerfilter'><ul>";
            a += bds.comm.search_tool.st || bds.comm.search_tool.et ? " <li><a href='javascript:;' onClick='advChangeUrl(\"gpc\",\"stf\",this.innerHTML,0)'>时间不限</a></li>" : " <li><span>时间不限</span></li>", a += bds.comm.search_tool.st >= bds.comm.search_tool.thisDay && "1" == bds.comm.search_tool.stftype ? " <li><span>一天内</span></li>" : " <li><a href='javascript:;' onClick='advChangeUrl(\"gpc\",\"stf=" + bds.comm.search_tool.oneDay + "," + bds.comm.serverTime + "|stftype=1\",this.innerHTML,1)'>一天内</a></li>", a += bds.comm.search_tool.st >= bds.comm.search_tool.thisWeek && bds.comm.search_tool.st < bds.comm.search_tool.thisDay && "1" == bds.comm.search_tool.stftype ? " <li><span>一周内</span></li>" : " <li><a href='javascript:;' onClick='advChangeUrl(\"gpc\",\"stf=" + bds.comm.search_tool.oneWeek + "," + bds.comm.serverTime + "|stftype=1\",this.innerHTML,2)'>一周内</a></li>", a += bds.comm.search_tool.st >= bds.comm.search_tool.thisMonth && bds.comm.search_tool.st < bds.comm.search_tool.thisWeek && "1" == bds.comm.search_tool.stftype ? " <li><span>一月内</span></li>" : " <li><a href='javascript:;' onClick='advChangeUrl(\"gpc\",\"stf=" + bds.comm.search_tool.oneMonth + "," + bds.comm.serverTime + "|stftype=1\",this.innerHTML,3)'>一月内</a></li>", a += bds.comm.search_tool.st >= bds.comm.search_tool.thisYear && bds.comm.search_tool.st < bds.comm.search_tool.thisMonth && "1" == bds.comm.search_tool.stftype ? " <li><span>一年内</span></li>" : " <li><a href='javascript:;' onClick='advChangeUrl(\"gpc\",\"stf=" + bds.comm.search_tool.oneYear + "," + bds.comm.serverTime + "|stftype=1\",this.innerHTML,4)'>一年内</a></li>", a += " <li class='c-tip-custom'>", a += " <hr />自定义", a += " <p class='c-tip-custom-st'>从<input name='st' date-min='0' date-max='" + formatDate(1e3 * bds.comm.serverTime) + "' type='txt' autocomplete='off' ", a += bds.comm.search_tool.st && bds.comm.search_tool.et && "2" == bds.comm.search_tool.stftype ? "value='" + formatDate(1e3 * bds.comm.search_tool.st, "-") + "' data-value='" + 1e3 * bds.comm.search_tool.st + "' class='c-tip-custom-input'/></p>" : "value='" + formatDate(1e3 * bds.comm.serverTime, "-") + "' data-value='' class='c-tip-custom-input c-tip-custom-input-init'/></p>", a += "  <p class='c-tip-custom-et'>至<input name='et' date-min='0' date-max='" + formatDate(1e3 * bds.comm.serverTime) + "' type='txt' autocomplete='off' ", a += bds.comm.search_tool.st && bds.comm.search_tool.et && "2" == bds.comm.search_tool.stftype ? "value='" + formatDate(1e3 * bds.comm.search_tool.et, "-") + "' data-value='" + 1e3 * bds.comm.search_tool.et + "' class='c-tip-custom-input'/></p>" : "value='" + formatDate(1e3 * bds.comm.serverTime, "-") + "' data-value='' class='c-tip-custom-input c-tip-custom-input-init'/></p>", a += "<div class='c-tip-timerfilter-custom-error'>自定义时间错误！</div>", a += "<a href='javascript:;' class='c-tip-custom-submit'>确认</a>", a += "</li></ul></div>", timefilterTip = new bds.se.tip({
                target: r,
                mode: "none",
                content: $(a),
                arrow: {
                    has: 0,
                    offset: 0
                },
                offset: {
                    x: 15,
                    y: 21
                },
                onShow: function() {
                    $(this.getTarget()).width() > 95 && $("ul", this.getDom()).width($(this.getTarget()).width() + 20), $(".c-tip-custom-input").on("click", function(e) {
                        var t = this,
                            n = null,
                            o = new Date,
                            i = $(t).parents(".c-tip-custom"),
                            s = i.find("input[name='st']"),
                            r = i.find("input[name='et']");
                        $(t).attr("data-value") && o.setTime($(t).attr("data-value")), $(t).parents(".c-tip-custom").find(".c-tip-custom-input").removeClass("c-tip-custom-input-focus"), $(t).addClass("c-tip-custom-input-focus"), 0 == $("#c-tip-custom-calenderCont").length && $(t).parents(".c-tip-custom").append("<div id='c-tip-custom-calenderCont'></div>"), $("#c-tip-custom-calenderCont").html("");
                        var a = {
                            element: "c-tip-custom-calenderCont",
                            date: formatDate(o),
                            between: [$(t).attr("date-min") - 0, $(t).attr("date-max") - 0],
                            onSelectDay: function(e) {
                                if (e += "", "st" == t.name) {
                                    var n = new Date(e.substr(0, 4), e.substr(4, 2) - 1, e.substr(6, 2), 0, 0, 0);
                                    r.attr("date-min", e)
                                } else {
                                    var n = new Date(e.substr(0, 4), e.substr(4, 2) - 1, e.substr(6, 2), 23, 59, 59);
                                    s.attr("date-max", e)
                                }
                                $(t).val(formatDate(n, "-")), $(t).attr("data-value", n.getTime()), $("#c-tip-custom-calenderCont").hide(), $(t).removeClass("c-tip-custom-input-focus").removeClass("c-tip-custom-input-init")
                            }
                        };
                        "undefined" == typeof WCal ? $.getScript("https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/plugins/new_wcal_3426010.js", function() {
                            n = new WCal(a), o && n.setDay(formatDate(o), function(e) {
                                e.className += " op_mon_day_selected"
                            })
                        }) : (n = new WCal(a), o && n.setDay(formatDate(o), function(e) {
                            e.className += " op_mon_day_selected"
                        })), $("#c-tip-custom-calenderCont").css({
                            top: $(this).position().top - 2,
                            left: $(this).position().left + $(this).width() + 15,
                            display: "block"
                        }), e.stopPropagation()
                    }), $(".c-tip-custom-input").on("focus", function() {
                        $(this).removeClass("c-tip-custom-input-init")
                    }), $(".c-tip-custom-input").on("blur", function() {
                        function e(e) {
                            var t, n = /^\s*(\d{4})-(\d\d)-(\d\d)\s*$/,
                                o = new Date(0 / 0),
                                i = n.exec(e);
                            return i && (t = +i[2], o.setFullYear(i[1], t - 1, i[3]), t != o.getMonth() + 1 && o.setTime(0 / 0)), o
                        }
                        var t = this,
                            n = e($(t).val());
                        n instanceof Date && n.getTime() ? ($(t).attr("data-value", n.getTime()), $(".c-tip-timerfilter-custom-error").hide()) : "" == $(t).val() ? ($(t).attr("data-value", "0"), $(".c-tip-timerfilter-custom-error").hide()) : ($(t).attr("data-value", ""), $(".c-tip-timerfilter-custom-error").show())
                    });
                    try {
                        $(".c-tip-custom-submit").off("click.searchTool").on("click.searchTool", function(e) {
                            var t = this,
                                n = $(t).parents(".c-tip-custom"),
                                o = parseInt($(".c-tip-custom-input", n)[0].getAttribute("data-value") / 1e3),
                                i = parseInt($(".c-tip-custom-input", n)[1].getAttribute("data-value") / 1e3);
                            return $("#c-tip-custom-calenderCont").hide(), "" != o && o || (o = 0), "" != i && i || !o || "" == o || (i = parseInt((new Date).setHours(23, 59, 58) / 1e3)), i > bds.comm.serverTime && (0 >= o ? (o = "", i = "") : i = parseInt((new Date).setHours(23, 59, 58) / 1e3)), o > i || o > bds.comm.serverTime ? ($(".c-tip-timerfilter-custom-error").show(), void e.stopPropagation()) : (0 == o && 0 == i && (o = "", i = ""), $(".c-tip-timerfilter-custom-error").hide(), void advChangeUrl("gpc", "stf=" + o + "," + i + "|stftype=2", "自定义时间:" + o + "|" + i, 5))
                        })
                    } catch (e) {}
                }
            }), timefilterTip.hide()
        }
        var c = e.find(".search_tool_ft").eq(0);
        if (c.length > 0) {
            var d = "<div class='c-tip-menu c-tip-timerfilter c-tip-timerfilter-ft'><ul>";
            d += bds.comm.search_tool.ft ? " <li><a href='javascript:;' onClick='fileChangeUrl(null,this.innerHTML,0)'>所有网页和文件(不限格式)</a></li>" : " <li><span>所有网页和文件(不限格式)</span></li>", d += "pdf" == bds.comm.search_tool.ft ? " <li><span>Adobe Acrobat PDF(.pdf)</span></li>" : " <li><a href='javascript:;' onClick='fileChangeUrl(\"pdf\",this.innerHTML,1)'>Adobe Acrobat PDF(.pdf)</a></li>", d += "doc" == bds.comm.search_tool.ft ? " <li><span>微软 Word(.doc)</span></li>" : " <li><a href='javascript:;' onClick='fileChangeUrl(\"doc\",this.innerHTML,2)'>微软 Word(.doc)</a></li>", d += "xls" == bds.comm.search_tool.ft ? " <li><span>微软 Excel(.xls)</span></li>" : " <li><a href='javascript:;' onClick='fileChangeUrl(\"xls\",this.innerHTML,3)'>微软 Excel(.xls)</a></li>", d += "ppt" == bds.comm.search_tool.ft ? " <li><span>微软 PowerPoint(.ppt)</span></li>" : " <li><a href='javascript:;' onClick='fileChangeUrl(\"ppt\",this.innerHTML,4)'>微软 PowerPoint(.ppt)</a></li>", d += "rtf" == bds.comm.search_tool.ft ? " <li><span>RTF 文件(.rtf)</span></li>" : " <li><a href='javascript:;' onClick='fileChangeUrl(\"rtf\",this.innerHTML,5)'>RTF 文件(.rtf)</a></li>", d += "</ul></div>";
            var l = new bds.se.tip({
                target: c,
                mode: "none",
                content: $(d),
                arrow: {
                    has: 0,
                    offset: 0
                },
                offset: {
                    x: 15,
                    y: 21
                }
            });
            l.hide()
        }
        var u = e.find(".search_tool_si").eq(0);
        u.length > 0 && (insideSearchTip = new bds.se.tip({
            target: u,
            mode: "none",
            content: $("<div class='c-tip-menu c-tip-timerfilter c-tip-timerfilter-si'><ul> <li><input name='si' type='txt' class='c-tip-si-input c-gap-bottom-small c-gap-right-small' autocomplete='off' value='" + bds.comm.search_tool.si + "' placeholder='例如:baidu.com' /><a href='javascript:;' class='c-tip-timerfilter-si-submit'>确认</a></li> <li><p class='c-tip-timerfilter-si-error'>无法识别，正确格式：baidu.com</p></li></ul></div>"),
            arrow: {
                has: 0,
                offset: 0
            },
            offset: {
                x: 15,
                y: 21
            },
            onShow: function() {
                $(".c-tip-si-input").on("focus", function() {
                    $(this).addClass("c-tip-si-input-focus")
                }), $(".c-tip-si-input").on("blur", function() {
                    $(this).removeClass("c-tip-si-input-focus")
                });
                try {
                    $(".c-tip-timerfilter-si-submit").off("click.searchTool").on("click.searchTool", function(e) {
                        var t = this,
                            n = $(t).parents(".c-tip-timerfilter-si"),
                            o = $("input", n).val(),
                            i = queryReplace("site");
                        if ("" == o) ns_c({
                            fm: "advTool",
                            qid: bds.comm.qid,
                            title: encodeURI("站内检索:" + o),
                            rsv_advTool_si: encodeURI(o)
                        }), baseChangeUrl("wd=" + encodeURIComponent(i) + "&si=&ct=0");
                        else {
                            if (!o.match(/^[\w\-_]+(\.[\w\-_]+)+$/)) return $(".c-tip-timerfilter-si-error").show(), e.stopPropagation(), e.preventDefault(), !1;
                            $(".c-tip-timerfilter-si-error").hide(), ns_c({
                                fm: "advTool",
                                qid: bds.comm.qid,
                                title: encodeURI("站内检索:" + o),
                                rsv_advTool_si: encodeURI(o)
                            }), baseChangeUrl("wd=" + encodeURIComponent(i) + "&si=" + encodeURIComponent(o) + "&ct=2097152")
                        }
                    })
                } catch (e) {}
            }
        }), insideSearchTip.hide());
        var m = !0;
        i.on("click", function(e) {
            m ? (langfilterTip && langfilterTip.show(), m = !1, timefilterTip && timefilterTip.hide(), p = !0, l && l.hide(), f = !0, insideSearchTip && insideSearchTip.hide(), h = !0, ns_c({
                fm: "advTool",
                qid: bds.comm.qid,
                title: encodeURI("语言筛选浮层展现"),
                rsv_advTool_tip: 1
            }), $(document).on("click.searchTool", function(e) {
                0 == $(e.target).parents(".c-tip-langfilter").length && langfilterTip && (langfilterTip.hide(), m = !0, $(document).off("click.searchTool"))
            })) : (langfilterTip && langfilterTip.hide(), m = !0, $(document).off("click.searchTool")), e.stopPropagation()
        });
        var p = !0;
        r.on("click", function(e) {
            p ? (langfilterTip && langfilterTip.hide(), m = !0, timefilterTip && timefilterTip.show(), p = !1, l && l.hide(), f = !0, insideSearchTip && insideSearchTip.hide(), h = !0, ns_c({
                fm: "advTool",
                qid: bds.comm.qid,
                title: encodeURI("时间筛选浮层展现"),
                rsv_advTool_tip: 0
            }), $(document).on("click.searchTool", function(e) {
                0 == $(e.target).parents(".c-tips-container,#c-tip-custom-calenderCont").length && timefilterTip && (timefilterTip.hide(), $("#c-tip-custom-calenderCont").hide(), timefilterTip.getDom().find(".c-tip-custom-input-focus").removeClass("c-tip-custom-input-focus"), p = !0, $(document).off("click.searchTool"))
            })) : (timefilterTip && timefilterTip.hide(), p = !0, $(document).off("click.searchTool")), e.stopPropagation()
        });
        var f = !0;
        c.on("click", function(e) {
            f ? (langfilterTip && langfilterTip.hide(), m = !0, timefilterTip && timefilterTip.hide(), p = !0, l && l.show(), f = !1, insideSearchTip && insideSearchTip.hide(), h = !0, ns_c({
                fm: "advTool",
                qid: bds.comm.qid,
                title: encodeURI("网页格式浮层展现"),
                rsv_advTool_tip: 2
            }), $(document).on("click.searchTool", function(e) {
                0 == $(e.target).parents(".c-tip-timerfilter-ft").length && l && (l.hide(), f = !0, $(document).off("click.searchTool"))
            })) : (l && l.hide(), f = !0, $(document).off("click.searchTool")), e.stopPropagation()
        });
        var h = !0;
        u.on("click", function(e) {
            h ? (langfilterTip && langfilterTip.hide(), m = !0, timefilterTip && timefilterTip.hide(), p = !0, l && l.hide(), f = !0, insideSearchTip && insideSearchTip.show(), h = !1, ns_c({
                fm: "advTool",
                qid: bds.comm.qid,
                title: encodeURI("站内搜索浮层展现"),
                rsv_advTool_tip: 3
            }), $(document).on("click.searchTool", function(e) {
                0 == $(e.target).parents(".c-tip-timerfilter-si").length && insideSearchTip && (insideSearchTip.hide(), h = !0, $(document).off("click.searchTool"))
            })) : (insideSearchTip && insideSearchTip.hide(), h = !0, $(document).off("click.searchTool")), e.stopPropagation()
        })
    }
}), ! function() {
    function e() {
        function e(e, t) {
            var n = {
                    top: t.offset().top,
                    left: t.offset().left
                },
                o = {
                    width: t.width(),
                    height: t.height()
                },
                i = function() {
                    var e = t.attr("data-click");
                    if (e) try {
                        return $.parseJSON(e)
                    } catch (n) {}
                }() || {},
                s = e + (i.p5 || "");
            return {
                id: s,
                pos: n,
                size: o,
                dataClick: i,
                dom: t
            }
        }
        var t = {},
            n = {},
            o = $("#wrapper");
        return t.topResult = o.find("#con-at").find(".result-op"), t.rightResult = o.find("#con-ar").find(".result-op"), t.leftResult = o.find("#content_left").find(".result, .result-op"), t.topResult.length && (n.T = [], t.topResult.each(function() {
            n.T.push(e("T", $(this)))
        })), t.rightResult.length && (n.R = [], t.rightResult.each(function() {
            n.R.push(e("R", $(this)))
        })), t.leftResult.length && (n.L = [], t.leftResult.each(function() {
            n.L.push(e("L", $(this)))
        })), n
    }
    bds.se.skeleton = function() {
        var t;
        return function() {
            return t || (t = e(), $(window).one("swap_begin", function() {
                t = null
            })), t
        }
    }()
}(), ! function() {
    $(window).on("swap_end", function() {
        var e = function() {
            var e = [],
                t = bds.se.skeleton(),
                n = t.L;
            return $.each(n, function(t, n) {
                var o = {};
                o.dom = n.dom, o.id = n.id, o.itime = 0, o.time = 0, e.push(o)
            }), e
        };
        bds.comm.orderplay = e()
    })
}(), ! function() {
    function e() {
        var e = this;
        e.display = {}, e.expand = {}, e.dom = {}, e.init()
    }
    bds.se.display = function() {
        new e
    }, e.prototype = {
        init: function() {
            var e = this;
            e.dom = bds.se.skeleton();
            var t = $("#wrapper");
            e.dom.rsResult = t.find("#rs a"), e.dom.hintResult = t.find(".se_common_hint"), e.rs = e.dom.rsResult.length || 0, e.hint = e.dom.hintResult.length || 0, e.display.base = e.getBase(), e.dom.L && e.getResult(e.dom.L), e.dom.R && e.getResult(e.dom.R), e.dom.T && e.getResult(e.dom.T), e.rs && (e.display.rs = e.getRS()), e.hint && (e.display.hint = e.getHint()), e.send()
        },
        send: function() {
            var e = this;
            for (var t in e.display) {
                var n = {};
                n[t] = e.display[t], bds.log.send.sendPack("new_disp", n)
            }
            for (var o in e.expand)
                if (o && e.expand[o])
                    for (var i in e.expand[o])
                        if (i && e.expand[o][i] && e.expand[o][i].length)
                            for (var s = e.expand[o][i], r = 0; r < s.length; r++) {
                                var a = {};
                                a[o] = {
                                    expand: {}
                                }, a[o].expand[i] = {}, a[o].expand[i][r] = s[r], bds.log.send.sendPack("new_disp", a)
                            }
        },
        getBase: function() {
            var e = this,
                t = {};
            return t.qid = bds.comm.qid || "", t.tpl = bds.comm.resTemplateName || "", t.async = bds.comm.supportis ? 1 : 0, t.page = bds.comm.pageNum || 1, t.upn = $.getCookie("BD_UPN") || "", e.dom.L && (t.left = e.dom.L.length), e.dom.R && (t.right = e.dom.R.length), e.dom.T && (t.top = e.dom.T.length), t.size = {}, t.size.doc = {
                w: $(document).width(),
                h: $(document).height()
            }, t.size.wind = {
                w: $(window).width(),
                h: $(window).height()
            }, t.size.scr = {
                w: screen.width,
                h: screen.height
            }, t
        },
        getRS: function() {
            var e = this,
                t = {};
            return t.num = e.rs, t.query = [], e.dom.rsResult.each(function() {
                var e = this.textContent || this.innerText;
                t.query.push(e)
            }), t
        },
        getHint: function() {
            var e = this,
                t = {};
            return t.result = [], e.dom.hintResult.each(function() {
                var e = {};
                e.id = this.getAttribute("data-id") || 0, e.tpl = this.getAttribute("data-tpl") || "", t.result.push(e)
            }), t
        },
        getResult: function(e) {
            for (var t = this, n = e, o = 0, i = Math.min(n.length, 10); i > o; o++) {
                var s = n[o].id,
                    r = t.getResultDisplay(n[o]);
                t.expand[s] = r.expand, delete r.expand, t.display[s] = r
            }
        },
        getResultDisplay: function(e) {
            function t() {
                var t = e.size;
                return {
                    w: t.width || 0,
                    h: t.height || 0
                }
            }

            function n() {
                var t = e.pos;
                return {
                    t: t.top || 0,
                    l: t.left || 0
                }
            }

            function o() {
                return d.rsv_bdr && 0 != d.rsv_bdr ? d.rsv_bdr : c.hasClass(".c-border") || c.find(".c-border").length ? 5 : 0
            }

            function i() {
                function e(e) {
                    var t;
                    return e && (t = c.find(e)), t && t.length ? !0 : !1
                }
                var t = {};
                return e(".favurl") && (t.fi = 1), e(".c-text-public.c-text-mult") && (t.gwi = 1), e(".icon-unsafe-icon") && (t.fxi = 1), e(".c-icon-v") && (t.vi = 1), e(".c-icon-med") && (t.yjji = 1), e(".c-icon-air") && (t.hxi = 1), e(".c-recommend") && (t.cr = 1), t
            }

            function s() {
                var e = c.find("a").not(":hidden").not("h3 a, .m"),
                    t = [],
                    n = /^((https?:)?\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*(:\d+)*(\/.*)*/,
                    o = /^(\/s\?)/;
                return e.each(function() {
                    var e = this.getAttribute("href");
                    if (e && n.test(e)) {
                        var i = e && e.match(/.*\/link\?url=([^&]*).*/);
                        t.push(i && i.length && i.length > 0 && i[1] ? i[1] : e)
                    } else e && o.test(e) && t.push(e)
                }), t.length ? t : !1
            }

            function r() {
                var e = [],
                    t = c.find("img").not(":hidden").not("[data-nolog]");
                return t.length ? (t.each(function() {
                    var t = {
                        w: this.width,
                        h: this.height
                    };
                    e.push({
                        size: t
                    })
                }), e) : !1
            }

            function a() {
                var e = [],
                    t = c.find("object, video, audio");
                return t.length ? (t.each(function() {
                    var t = $(this),
                        n = {};
                    n.type = t.is("object") && t.attr("type") && t.attr("type").indexOf("flash") >= 0 ? 1 : t.is("video") ? 2 : t.is("audio") ? 3 : 0, n.size = {
                        w: t.width(),
                        h: t.height()
                    }, e.push(n)
                }), e) : !1
            }
            var c = e.dom,
                d = e.dataClick,
                l = {};
            if (l.id = d.p5 || "", l.srcid = d.rsv_srcid || c.attr("srcid") || 0, l.tpl = c.attr("tpl") || "", l.mu = d.mu || c.attr("mu") || "", l.fm = d.fm || "as", c.is(":hidden") && (l.show = 0), 0 == l.show) return l;
            l.size = t(), l.pos = n(), o() && (l.bdr = o()), l.com = i();
            var u = s(),
                m = r(),
                p = a();
            return (u || m || p) && (l.expand = {}, u && (l.link = u.length, l.expand.links = u), m && (l.img = m.length, l.expand.imgs = m), p && (l.app = p.length, l.expand.apps = p)), l
        }
    }
}(), ! function() {
    function e() {
        this.pageElementsList = [], this.scrollTime = null, this.scrollChange = !1, this.resizeTime = null, this.resizeChange = !1, this.scrollTop = $(document).scrollTop(), this.scrollLeft = $(document).scrollLeft(), this.windowHeight = $(window).height(), this.windowWidth = $(window).width()
    }
    e.prototype = {
        init: function() {
            var e = bds.se.skeleton(),
                t = this;
            $.each(["L", "R", "T"], function(n, o) {
                e[o] && ($.merge(t.pageElementsList, t.getDom(e[o])), t.bindEvent(e[o]))
            })
        },
        getDom: function(e) {
            var t = [];
            return $.each(e, function(e, n) {
                var o = {};
                o.top = n.pos.top, o.height = n.size.height, o.id = n.id, o.visible = 0, t.push(o)
            }), t
        },
        sendLog: function(e, t) {
            bds.comm.globalLogFlag && 1 == bds.comm.globalLogFlag && bds.log.send.sendPack(e, t)
        },
        bindEvent: function(e) {
            var t = this;
            $.each(e, function(e, n) {
                var o = 200,
                    i = !1,
                    s = null;
                n.dom.bind("mouseenter.useraction", function() {
                    null !== s && clearTimeout(s), s = setTimeout(function() {
                        t.sendLog("new_view", {
                            type: "mouseIn",
                            id: n.id,
                            t: (new Date).getTime()
                        }), i = !0, s = null
                    }, o)
                }).bind("mouseleave.useraction", function() {
                    null !== s && (clearTimeout(s), s = null), i && (t.sendLog("new_view", {
                        type: "mouseOut",
                        id: n.id,
                        t: (new Date).getTime()
                    }), i = !1)
                })
            })
        },
        destroy: function() {
            $(window).unbind(".useraction"), this.pageElementsList.splice(0, this.pageElementsList.length)
        },
        sight: function() {
            var e = this;
            $.each(this.pageElementsList, function(t, n) {
                var o = e.scrollTop < n.top + n.height && e.scrollTop + e.windowHeight > n.top;
                if (1 !== n.visible || o) {
                    if (0 === n.visible && o) {
                        if (e.sendLog("new_view", {
                                type: "sight",
                                resid: n.id,
                                action: "in",
                                t: (new Date).getTime()
                            }), bds.comm.orderplay && bds.comm.orderplay.length && "L" == n.id.substr(0, 1) && bds.comm.pageSize) {
                            var i = (parseInt(n.id.substr(1)) - 1) % bds.comm.pageSize,
                                s = bds.comm.orderplay[i];
                            s && !s.itime && (s.itime = (new Date).getTime())
                        }
                        n.visible = 1
                    }
                } else {
                    if (e.sendLog("new_view", {
                            type: "sight",
                            resid: n.id,
                            action: "out",
                            t: (new Date).getTime()
                        }), bds.comm.orderplay && bds.comm.orderplay.length && "L" == n.id.substr(0, 1) && bds.comm.pageSize) {
                        var i = (parseInt(n.id.substr(1)) - 1) % bds.comm.pageSize,
                            s = bds.comm.orderplay[i];
                        s && (s.time += (new Date).getTime() - s.itime, s.itime = (new Date).getTime())
                    }
                    n.visible = 0
                }
            })
        },
        collectPoint: function(e) {
            function t() {
                s[o] = setTimeout(function() {
                    s.sendLog("new_view", n(e)), s[i] = !1, s.sight(), s[i] ? t() : s[o] = null
                }, 1e3)
            }

            function n(e) {
                if ("resize" === e) {
                    var t = $(window);
                    return s.windowHeight = t.height(), s.windowWidth = t.width(), {
                        type: "resize",
                        t: (new Date).getTime(),
                        height: s.windowHeight,
                        width: s.windowWidth
                    }
                }
                if ("scroll" === e) {
                    var n = $(document);
                    return s.scrollTop = n.scrollTop(), s.scrollLeft = n.scrollLeft(), {
                        type: "scroll",
                        t: (new Date).getTime(),
                        offsetX: s.scrollTop,
                        offsetY: s.scrollLeft
                    }
                }
            }
            var o = e + "Time",
                i = e + "Change",
                s = this;
            null === s[o] && t()
        },
        collect: function() {
            this.init();
            var e = this;
            null !== this.resizeTime && clearTimeout(this.resizeTime), this.resizeTime = null, null !== this.scrollTime && clearTimeout(this.scrollTime), this.scrollTime = null, $(window).bind("focus.useraction", function() {
                e.sendLog("new_view", {
                    type: "focus",
                    t: (new Date).getTime()
                })
            }).bind("blur.useraction", function() {
                e.sendLog("new_view", {
                    type: "blur",
                    t: (new Date).getTime()
                })
            }).bind("resize.useraction", function(t) {
                e.resizeChange = !0, e.collectPoint("resize", t)
            }).bind("scroll.useraction", function(t) {
                e.scrollChange = !0, e.collectPoint("scroll", t)
            }), this.sight()
        },
        outInterface: function() {
            var e = this;
            return {
                collect: function() {
                    e.collect()
                },
                destroy: function() {
                    e.destroy()
                }
            }
        }
    }, bds.se.userAction = (new e).outInterface()
}(), bds.comm.recommends = {}, bds.comm.recommends.recommWidth = 0, bds.se.recommend = function(e) {
    var t = this;
    t.op = $.extend({}, t._default, e), t.id = t.op.target.attr("id"), t.init()
}, bds.se.recommend.prototype = {
    constructor: bds.se.recommend,
    __init__: !1,
    currInstance: null,
    recommDom: null,
    arrowDom: null,
    cssDom: null,
    loadDom: null,
    global: {},
    _default: {
        target: "",
        arrowOffset_s: -54,
        arrowOffset_l: -151,
        container_s: 276,
        container_l: 368,
        startOpacity: .3,
        endOpacity: 1
    },
    init: function() {
        var e = this;
        e.currInstance && e.currInstance.id == e.id || (e.delay = {
            overIcon: null,
            loader: null,
            overArrow: null
        }, e.doWhat(function() {
            e.__init__ || (bds.se.recommend.prototype.__init__ = !0, e.createRecommDom()), e.createArrowDom(), e.delay.overArrow = setTimeout(function() {
                var t = e.op.arrowDom.find(".rrecom-btn");
                "none" == t.css("display") && t.show(), e.moveArrow(function() {
                    t.addClass("rrecom-btn-hover"), e.showRecommDom()
                })
            }, 100)
        }))
    },
    dispose: function() {
        bds.se.recommend.prototype.currInstance = null, bds.se.recommend.prototype.recommDom && bds.se.recommend.prototype.recommDom.remove(), bds.se.recommend.prototype.cssDom && bds.se.recommend.prototype.cssDom.remove(), bds.comm.recommends = {}, bds.se.recommend.prototype.__init__ = !1, $(window).off("resize.recommend container_resize.recommend scroll.recommend")
    },
    createArrowDom: function() {
        var e = this,
            t = e.op.target.find(".rrecom-btn-parent");
        if (t.length) e.op.arrowDom = t;
        else {
            var n = ['<span class="rrecom-btn-parent rrecom-btn-s">', '<span class="rrecom-btn">', "<span></span>", "</span>", "</span>"].join("");
            e.op.arrowDom = $(n), e.op.arrowDom.on("click", ".rrecom-btn", function() {
                e.hideRecommDom()
            }), e.op.target.css({
                position: "relative"
            }).append(e.op.arrowDom)
        }
    },
    resetArrow: function() {
        var e = this;
        e.op.arrowDom.css({
            right: e.op.arrowOffset_s
        }).removeClass("rrecom-btn-click rrecom-btn-moving").find(".rrecom-btn").stop().hide().removeClass("rrecom-btn-hover")
    },
    setArrowPos: function() {
        var e = this;
        e.currInstance && ("l" === bds.comm.containerSize ? e.currInstance.op.arrowDom.css("right", e.op.arrowOffset_l) : e.currInstance.op.arrowDom.css("right", e.op.arrowOffset_s))
    },
    moveArrow: function(e) {
        var t = this,
            n = {
                opacity: t.op.endOpacity
            };
        n.right = "l" === bds.comm.containerSize ? t.op.arrowOffset_l : t.op.arrowOffset_s, t.op.arrowDom.stop().addClass("rrecom-btn-moving rrecom-btn-click").animate(n, 0, function() {
            t.currInstance && t.currInstance !== t && t.currInstance.resetArrow(), e()
        })
    },
    log: function(e) {
        var t = {},
            n = this.op.target.attr("data-click"),
            o = this.op.target.attr("srcid"),
            i = this.op.target.attr("tpl"),
            s = this.op.target.attr("mu");
        if (o && (t.rsv_srcid = o), i && (t.rsv_tpl = i), s && (t.mu = s), n && $.extend(t, $.parseJSON(n)), t.p1 && !t.p5 && (t.p5 = t.p1), t.p5 && !t.p1 && (t.p1 = t.p5), !t.p1 && !t.p5)
            for (var r = $("#content_left").get(0), a = r.children, d = 1, l = 0, u = a.length; u > l; l++)
                if (1 == a[l].nodeType && a[l].className && /\bresult(\-op)?\b/.test(a[l].className)) {
                    if (a[l] === this.op.target.get(0)) {
                        t.p1 = d, t.p5 = d;
                        break
                    }
                    d++
                }
        t.fm = "beha";
        var m = this.op.target.find(".t>a").eq(0);
        return t.rsv_re_fcurl = m.length ? m.attr("href") : s, t.rsv_re_fcurl = t.rsv_re_fcurl || "", t.rsv_re_fcurl = encodeURIComponent(t.rsv_re_fcurl), c($.extend(t, e))
    },
    getLeftP: function() {
        var e = this.op.target.attr("data-click");
        return e = $.parseJSON(e) || {}, e.p1 && !e.p5 && (e.p5 = e.p1), e.p5 && !e.p1 && (e.p1 = e.p5), e.p5 || e.p1 || (e.p1 = 1, e.p5 = 1), {
            p1: e.p1,
            p5: e.p5
        }
    },
    s_log: function() {
        this.log({
            rsv_re_fc: 2
        })
    },
    setCacheData: function(e) {
        bds.comm.recommends[this.id] = e
    },
    getCacheData: function() {
        return bds.comm.recommends[this.id]
    },
    doWhat: function(e) {
        var t = this.getCacheData();
        "[NO DATA]" !== t && (t ? e() : this.getRemoteData(e))
    },
    getJsonp: function(e) {
        var t = this.op.target.find(".t>a").eq(0),
            n = (t.length ? t.attr("href") : this.op.target.attr("mu")) || "",
            o = n && n.match(/.*url=([^&]*).*/),
            i = bds.comm.query;
        if (o && o.length && o.length > 0 && o[1]) {
            n = o[1];
            var s = "http://lcr.open.baidu.com/link?url=" + encodeURIComponent(n) + "&query=" + encodeURIComponent(i),
                r = window.bds && bds.util && bds.util.domain && bds.util.domain.get(s);
            return $.ajax({
                url: r,
                dataType: "jsonp",
                jsonp: "cb",
                data: {
                    data_name: e,
                    ie: "utf-8",
                    oe: "utf-8",
                    format: "json",
                    t: Date.parse(new Date)
                }
            })
        }
    },
    getRemoteData: function(e) {
        var t = this,
            n = "recommend_common_merger_online";
        $.when(this.getJsonp(n)).then(function(n) {
            n && n.data && n.data.length && n.data[0] ? (n.data[0].hintData && t.asynClkRcmd(n.data[0].hintData), (n.data[0].extData || n.data[0].tplData) && (t.setCacheData(n.data), e())) : t.setCacheData("[NO DATA]")
        }, function() {})
    },
    asynClkRcmd: function(e) {
        var t = this,
            e = e[0] || {},
            n = $("#wrapper_wrapper");
        if (e && e.linkInfo) {
            var o = t.op.target.find(".c-recommend"),
                i = o.find("a"),
                s = e.tip || "为您推荐：";
            if (e.defaultHide, i && i.length && (i.remove(), o.append(t.buildRcmdDom(e))), !o || !o.length) {
                var r = $('<div class="c-gap-top c-recommend"><i class="c-icon c-icon-bear-circle c-gap-right-small"></i><span class="c-gray">' + s + "</span></div>");
                n.find(".c-recommend").hide(), r.append(t.buildRcmdDom(e)), t.op.target.append(r)
            }
        }
    },
    buildRcmdDom: function(e) {
        for (var t = this, n = "", o = e.linkInfo, i = 0, s = o.length; s > i; i++) {
            var r = o[i].txt,
                a = o[i].wd,
                c = o[i].sa,
                d = "c-gap-left-large";
            0 == i && (d = "");
            var l = "wd=" + a + "&rsv_crq=" + c + "&bs=" + bds.comm.query,
                u = t.buildURL(l);
            n += "<a class='" + d + "' href='" + u + "' title='" + r + "' target='_blank'>" + r + "</a>"
        }
        return n
    },
    buildURL: function(e) {
        var t = "/s?",
            n = {
                tn: bds.comm.tn
            },
            o = $("#form"),
            i = o.find("input[name=rsv_idx]"),
            s = "";
        n.rsv_idx = i.length ? i.val() : "";
        for (var r in n) n.hasOwnProperty(r) && n[r] && (s += r + "=" + encodeURIComponent(n[r]) + "&");
        return t + s + e
    },
    renderTpl: function(e, t) {
        var n = this;
        if (e && t) {
            var o = {};
            return o.right_recommends_merge = function(e) {
                function o(t, o) {
                    var i, s = '<div class="cr-content" data-click=\'#{2}\'><div class="cr-title c-clearfix"><span title="#{0}">#{1}</span></div>',
                        r = '<div class="c-row c-gap-top">',
                        a = '<div class="c-span4#{5} rrecom-item" data-click=\'#{6}\'><div class="rrecom-p"><a target="_blank" href="#{0}"><img class="c-img c-img4 rrecom-img" src="#{1}"></a></div><div class="c-gap-top-small"><a target="_blank" title="#{2}" href="#{3}">#{4}</a></div>',
                        c = "</div>",
                        d = "",
                        l = (t.showrow, t.shownums),
                        u = {
                            rsv_srcid: e.StdStg || 0
                        };
                    t.list && !t.list.length && (t.list = [t.list]), d += $.format(s, t.subtitle, t.subtitle, $.stringify(u)), d += '<div class="rrecom-panel">';
                    for (var m = n.op.target.find(".t>a").eq(0), p = m.length ? m.attr("href") : n.op.target.attr("mu"), f = 0, h = t.list.length; h > f; f++) {
                        i = t.list[f];
                        var g = {
                                rsv_re_ename: i.name,
                                rsv_re_uri: i.uri,
                                rsv_re_fcpoi: o + "-" + (f + 1),
                                rsv_clk_url: p
                            },
                            b = n.buildURL(i.params + "&euri=" + (i.uri || ""));
                        if (f == l) break;
                        f % 4 === 0 && (d += r), bds.util && bds.util.domain && bds.util.domain.get && (i.img = bds.util.domain.get(i.img)), d += $.format(a, b, i.img, i.name, b, $.subByte(i.name, 20), (f + 1) % 4 === 0 ? " c-span-last rrecom-item-rowLast" : (f + 1) % 4 === 3 ? " rrecom-item-s" : "", $.stringify(g), i.attrpic), d += c, ((f + 1) % 4 === 0 || f == h - 1) && (d += c)
                    }
                    return d += c, d += c
                }
                var e = e || t,
                    i = "",
                    s = 12,
                    r = 0;
                e.card && !e.card.length && (e.card = [e.card]);
                for (var a = 0, c = e.card.length; c > a; a++) {
                    var d = e.card[a];
                    if (r += parseInt(d.shownums || 0), r > s) break;
                    i += o(d, a + 1)
                }
                return i
            }, o[e] ? o[e]() : void 0
        }
    },
    render: function(e) {
        for (var t = "", n = 0; n < e.length; n++) t += this.renderTpl(e[n].extData.tplt, e[n].tplData);
        var o = this.getLeftP();
        o.fm = "alxr", this.recommDom.attr("data-click", $.stringify(o)).find(".rrecom-content").eq(0).empty().append(t), this.setRecommPosition()
    },
    createRecommDom: function() {
        var e = ['<div style="position:fixed;left:-1px;background:#fff;border:1px solid #eee;z-index:103" class="result-op xpath-log" data-click=\'{"fm":"alxr","p1":1,"p5":1}\'>', '<div class="rrecom-ajax-loading c-loading"></div>', '<div class="rrecom-container">', '<a href="javascript:;" class="rrecom-btn-close" data-click=\'{"rsv_re_fc":4,"fm":"beha"}\'></a>', '<div class="rrecom-content"></div>', "</div>", "</div>"].join(""),
            t = "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/global/img/rrecom_icon_e34d796.png",
            n = ["<style>", ".rrecom-btn-close,.rrecom-btn span{background:url(" + t + ") no-repeat;}", ".rrecom-btn-close{display:inline-block;width:13px;height:13px;position:absolute;top:26px;right:10px;background-position:0 -20px;}", ".rrecom-btn-parent{z-index:104;position:absolute;right:-37px;top:50%;margin-top:-50px;height:59px;width:40px;cursor:default;padding:20px 0px;}", ".rrecom-btn{display:none;background-color:#fff;padding:20px 5px;position:absolute;right:10px;width:20px;height:19px;border:1px solid transparent;}", ".rrecom-btn-hover{right:-1px;border:1px solid #eee;border-right:1px solid #fff;z-index:104;box-shadow:0px 2px 0px rgba(0,0,0,0.072);-webkit-box-shadow:0px 2px 0px rgba(0,0,0,0.072);-moz-box-shadow:0px 2px 0px rgba(0,0,0,0.072);-o-box-shadow:0px 2px 0px rgba(0,0,0,0.072);}", ".rrecom-btn span{cursor:pointer;background-position:0 0;width:20px;height:19px;position:absolute;top:50%;left:50%;margin:-10px 0 0 -10px;}", ".rrecom-container{width:368px;padding-top:43px;overflow:hidden;background-color:#fff;}", ".rrecom-ajax-loading{position:absolute;left:50%;margin-left:-25px;top:50px;display:none;}", ".rrecom-content{margin-left:17px;}", ".rrecom-content .cr-content{width:100%;margin-bottom:28px;}", ".rrecom_content_s{padding-left:0px;width:276px;}", ".rrecom_content_s .rrecom-item-rowLast{display:none}", ".rrecom_content_s .rrecom-item-s{margin-right:0;}", ".rrecom-panel{text-align:center;}", "</style>"].join("");
        bds.se.recommend.prototype.recommDom = $(e), bds.se.recommend.prototype.cssDom = $(n), bds.se.recommend.prototype.loadDom = this.recommDom.find(".rrecom-ajax-loading"), this.setRecommSize(), $("body").append(this.cssDom).append(this.recommDom.hide()), this.bindRecommEvent(), $(window).trigger("container_resize.recommend", bds.comm.containerSize);
        var o = $("#foot");
        "static" === o.css("position") && o.css({
            position: "relative",
            "z-index": 104
        })
    },
    setRecommSize: function() {
        var e = $("#content_right"),
            t = $("#wrapper_wrapper"),
            n = $("body"),
            o = $(window),
            i = e.offset(),
            s = {
                w: n.width()
            },
            r = {
                h: o.height()
            },
            a = o.scrollTop();
        t.prevAll().each(function() {
            var e;
            return "div" === this.nodeName.toLowerCase() ? (e = parseInt($(this).css("margin-bottom")), bds.se.recommend.prototype.global.topGap = isNaN(e) ? 0 : e, !1) : void 0
        }), bds.se.recommend.prototype.global.topDom = t, bds.se.recommend.prototype.global.headDom = $("#head");
        var c = {
                top: this.global.topDom.offset().top - this.global.topGap
            },
            d = this.global.headDom.offset().top - a + 56;
        this.recommDom.height(r.h), bds.comm.recommends.recommWidth = s.w - i.left - 2, this.recommDom.css({
            width: s.w - i.left - 2,
            top: a <= c.top - d ? c.top : d,
            position: a <= c.top - d ? "absolute" : "fixed",
            left: i.left
        })
    },
    setRecommPosition: function() {
        this.setRecommTop(), this.setRecommLeft()
    },
    setRecommTop: function() {
        var e = $(window).scrollTop(),
            t = {
                top: this.global.topDom.offset().top - this.global.topGap
            },
            n = this.global.headDom.offset().top - e + 56;
        this.recommDom.css({
            top: e <= t.top - n ? t.top : n,
            position: e <= t.top - n ? "absolute" : "fixed"
        }).find(".rrecom-container").css({
            "margin-top": "0px"
        }), bds.se.recommend.prototype.global.originalTop = e < t.top - n ? t.top - n : e
    },
    setRecommLeft: function() {
        var e, t;
        "fixed" === this.recommDom.css("position") && (e = $("#content_right").offset().left, t = $(window).scrollLeft(), this.recommDom.css("left", parseInt(e) - t))
    },
    bindRecommEvent: function() {
        var e = this;
        this.recommDom.find(".rrecom-btn-close").eq(0).on("click", function() {
            e.hideRecommDom()
        }), $(window).on("scroll.recommend", function() {
            var t, n, o, i = {
                    top: e.global.topDom.offset().top - e.global.topGap
                },
                s = e.global.headDom.offset().top + e.global.headDom.outerHeight(),
                r = $(this);
            if (e.recommDom && "none" !== e.recommDom.css("display")) {
                t = r.scrollTop(), n = r.scrollLeft(), s -= t, t <= i.top - s ? "fixed" === e.recommDom.css("position") && (e.recommDom.css("position", "absolute"), e.recommDom.css("top", i.top)) : "absolute" === e.recommDom.css("position") && (e.recommDom.css("position", "fixed"), e.recommDom.css("top", s));
                var a = e.recommDom.find(".rrecom-container");
                e.global.originalTop < t ? (maxMargin = Math.min(e.recommDom.height() - a.height() - 82 - 75, 0), a.css({
                    "margin-top": Math.max(e.global.originalTop - t, maxMargin)
                })) : a.css({
                    "margin-top": "0px"
                }), n && (o = $("#content_right").offset().left, "fixed" === e.recommDom.css("position") ? e.recommDom.css("left", parseInt(o) - n) : e.recommDom.css("left", parseInt(o)))
            }
        }).on("resize.recommend", function() {
            e.setRecommSize(), e.setArrowPos()
        }).on("container_resize.recommend", function(t, n) {
            var o = e.recommDom.find(".rrecom-container");
            "s" !== n || o.hasClass("rrecom_content_s") ? "l" === n && (o.removeClass("rrecom_content_s"), o.find(".rrecom-content").css("width", e.op.container_l - 17 + "px")) : (o.addClass("rrecom_content_s"), o.find(".rrecom-content").css("width", e.op.container_s - 17 + "px"))
        })
    },
    hideRecommDom: function() {
        var e = this;
        e.recommDom.find(".rrecom-container").animate({
            width: "0px"
        }, 200, function() {
            e.recommDom.hide()
        }), e.currInstance && window.clearTimeout(e.currInstance.delay.overArrow), e.currInstance && e.currInstance.resetArrow(), bds.se.recommend.prototype.currInstance = null
    },
    showRecommDom: function() {
        var e = this;
        if (e.currInstance !== e, "none" === e.recommDom.css("display")) {
            e.recommDom.css({
                opacity: .3
            }).show().animate({
                opacity: 1
            }, 100);
            var t = e.recommDom.find(".rrecom-container"),
                n = bds.comm.recommends.recommWidth;
            t.css({
                width: 0
            }).animate({
                width: n + "px"
            }, 200)
        }
        e.recommDom.find(".rrecom_content_s").length > 0 ? e.recommDom.find(".rrecom-content").css("width", e.op.container_s - 17 + "px") : e.recommDom.find(".rrecom-content").css("width", e.op.container_l - 17 + "px"), bds.se.recommend.prototype.currInstance = e, e.render(e.getCacheData())
    },
    showLoading: function() {
        this.loadDom.show()
    },
    hideLoading: function() {
        this.loadDom.hide()
    }
}, $(window).one("swap_end", function() {
    bds.comm.upn.ie && 6 == bds.comm.upn.ie || $(document).on("click", "#content_left .result .t>a, #content_left .result-op .t>a, .op-se-listen-recommend", function(e) {
        if (!e.ctrlKey && "0" == bds.comm.urlRecFlag) {
            var t = $(this).closest(".result, .result-op");
            new bds.se.recommend({
                target: t
            })
        }
    })
}), $(window).on("swap_begin", function() {
    bds.se.recommend.prototype.currInstance && bds.se.recommend.prototype.hideRecommDom(), bds.se.recommend.prototype.currInstance = null, bds.se.recommend.prototype.__init__ = !1, bds.comm.recommends = {}
}), bds.se.asynAds = function(e) {
    var t = e.dom || "",
        n = e.id || "",
        o = e.tnp || "",
        i = e.wd || "",
        s = e.cb && "function" == typeof e.cb ? e.cb : null;
    if (t && o && i && n) {
        c({
            fm: "inlo",
            rsv_ad: "ad_asyn_start"
        });
        for (var r = ["wd", "tnp", "tn", "pn", "bs", "fenlei", "adext"], a = "ie=utf-8&oe=utf-8&dsp=pc", d = 0; d < r.length; d++) {
            var l = r[d];
            e[l] && (a += "&" + l + "=" + e[l])
        }
        var u = bds.comm.orderplay,
            m = "",
            p = function(e) {
                if (bds && bds.comm && bds.comm.upn && bds.comm.upn.browser && "firefox" == bds.comm.upn.browser) var t = e.textContent;
                else var t = e.innerText;
                var n = t.indexOf("\n"),
                    o = t.substr(0, n);
                return encodeURIComponent(o)
            },
            f = function(e) {
                var t = $(".c-showurl", e).text().split(/\s+/)[0];
                return t = t.replace(/(\.\.\.$)/g, "")
            };
        $.each(u, function(e, t) {
            t.t = p(t.dom[0]) || "", t.u = f(t.dom[0]) || "", t.u && !new RegExp("baidu.com").test(t.u) && (m += t.u + ":"), t.itime && (t.time = (new Date).getTime() - t.itime)
        }), u.sort(function(e, t) {
            return e.time > t.time ? -1 : e.time < t.time ? 1 : (e.time = t.time) && e.id < t.id ? -1 : 0
        });
        var h = u[0],
            g = u[1],
            b = "";
        h.time && (b += h.t + "@" + h.time, g.time && (b += "," + g.t + "@" + g.time)), b && (a += "&rlist=" + encodeURIComponent(b)), m && (a += "&furl=" + encodeURIComponent(m.substring(0, m.length - 1))), $.ajax({
            url: "/s",
            dataType: "json",
            data: a,
            success: function(e) {
                var o = $(t);
                if (e && e.results && e.results.length && o.length) {
                    var i = "";
                    $.each(e.results, function(e, t) {
                        if (t.id == n) {
                            var o = t;
                            i += "<style>" + o.css + "</style>", i += o.html, i += "<script>" + o.js + "</script>"
                        }
                    }), o.html(i), $(document).scrollTop() < o.position().top + o.height() && $(document).scrollTop() + $(window).height() > o.position().top && c({
                        fm: "inlo",
                        rsv_ad: "ad_asyn_shake"
                    }), s && s()
                } else c({
                    fm: "inlo",
                    rsv_ad: "ad_asyn_net_error"
                })
            },
            error: function() {
                c({
                    fm: "inlo",
                    rsv_ad: "ad_asyn_net_error"
                })
            }
        })
    } else c({
        fm: "inlo",
        rsv_ad: "ad_asyn_param_error"
    })
}, ! function() {
    var e, t, n = bds && bds.util && bds.util.domain && bds.util.domain.get("http://sensearch.baidu.com/sensearch/selecttext");
    $(window).one("swap_end", function() {
        bds.comm.upn && bds.comm.upn.ie && 6 == bds.comm.upn.ie || $(document).on("mousedown", function(n) {
            e && 0 == $(n.target).closest(e.getDom()).length && (e.getDom().hide(), t && t.abort())
        }).on("mouseup", function(o) {
            var i, s, r, a, c;
            if (!e || !$(o.target).closest(e.getDom()).length) try {
                setTimeout(function() {
                    if (window.getSelection) {
                        if (i = window.getSelection(), 0 == i.rangeCount) return;
                        s = i.getRangeAt(0), r = s.getBoundingClientRect(), a = $.trim(i.toString()), c = $("#text" == s.commonAncestorContainer.nodeName ? s.commonAncestorContainer.parentNode : s.commonAncestorContainer)
                    } else document.selection && (i = document.selection.createRange(), s = i, r = s.getBoundingClientRect(), a = $.trim(i.text.toString()), c = $(s.parentElement()));
                    if (a && a.length > 1 && c.closest("#content_left .result .c-abstract,#content_left .result .t").length) {
                        t && t.abort();
                        var o = /[^(\u4E00-\u9FA5)]+/i;
                        if (!o.test(a)) return;
                        t = $.ajax({
                            url: n,
                            dataType: "jsonp",
                            jsonp: "cb",
                            timeout: 5e3,
                            data: {
                                q: a
                            },
                            success: function(t) {
                                var n = "";
                                if (t && t.data && t.data.type && t.data.to && "zh" == t.data.to && t.data.result && t.data.result.length && t.data.result != a)
                                    if (1 == t.data.type)
                                        for (var o = t.data.result, i = 0, s = Math.min(o.length, 2); s > i; i++) n += (0 == i ? "" : "<br/>") + (o[i].pre ? o[i].pre + "&nbsp;" : ""), n += o[i].cont ? $.subByte(o[i].cont, 46 * (1 == s ? 2 : 1) + 1) : "";
                                    else 2 == t.data.type && (n = '<span style="color:#999">译：</span>' + t.data.result);
                                if (n) {
                                    e = e || new bds.se.tip({
                                        target: $("body"),
                                        mode: "none",
                                        content: '<div class="translateContent"></div>',
                                        align: "left",
                                        arrow: {
                                            has: 1,
                                            offset: 10
                                        }
                                    });
                                    var c = e.getDom();
                                    c.find(".translateContent").html('<p style="margin:0 8px">' + n + "</p>"), c.css({
                                        top: r.bottom + $(window).scrollTop() + 8,
                                        left: (r.left + r.right) / 2 + $(window).scrollLeft() - 20
                                    }).show(), ns_c({
                                        rsv_trans_type: "showresult",
                                        rsv_trans_st: encodeURIComponent(a),
                                        rsv_qid: bds.comm.qid || ""
                                    })
                                }
                            }
                        })
                    }
                }, 0)
            } catch (o) {}
        })
    }), $(window).on("swap_begin", function() {
        e = null, t && t.abort()
    })
}(), $(window).on("swap_begin", function() {
    bds && bds.se && void 0 !== bds.se.displayTime && null !== bds.se.displayTime && (clearTimeout(bds.se.displayTime), bds.se.displayTime = null)
}).on("confirm", function() {
    bds && bds.comm && bds.comm.globalLogFlag && 1 == bds.comm.globalLogFlag && (1 == bds.comm.logFlagNoNetwork || 1 == bds.comm.logFlagNoIntegration || (bds.se.displayTime = setTimeout(function() {
        bds && bds.se && bds.se.display(), bds.se.displayTime = null
    }, 5e3))), bds && bds.se.userAction.collect()
}).on("swap_end", function(e, t) {
    !t && bds && bds.comm && bds.comm.globalLogFlag && 1 == bds.comm.globalLogFlag && (1 == bds.comm.logFlagNoNetwork || 1 == bds.comm.logFlagNoIntegration || (bds.se.displayTime = setTimeout(function() {
        bds && bds.se && bds.se.display(), bds.se.displayTime = null
    }, 5e3))), !t && bds && bds.se.userAction.collect()
}), $(window).on("swap_end", function() {
    bds.comm.__rdNum && bds.comm.__rdNum > 9e3 && setTimeout(function() {
        $.ajax({
            dataType: "script",
            cache: !0,
            url: "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/plugins/clean_7973b0f.js",
            success: function() {
                bds.se.cleanCookie.init()
            }
        })
    }, 0)
}), ! function() {
    var e = navigator.userAgent,
        t = e.match(/MSIE\s*(\d+)/),
        n = t && t[1] && +t[1] <= 9;
    n || require(["plugins/swfobject", "soutu/js/tu"], function(e, t) {
        if (/^\/imgsearch/.test(location.pathname)) {
            var n = $("#content_left").find(".result-op"),
                o = [];
            n.each(function() {
                var e = $(this),
                    t = e.attr("tpl");
                "tu_relate_site" === t && (t += "@" + e.find(".op-tu-relate-site-result").length), o.push(t)
            }), t.log({
                rsv_imageshow: o.join(":")
            }), $("#page").hide(), $("#wrapper").outerHeight() < $(document).outerHeight() && $("#foot").addClass("foot_fixed_bottom")
        }
    })
}(), ! function() {
    function e(e) {
        var t = ["voice_beha=1"],
            n = window.bds && bds.util && bds.util.domain ? bds.util.domain.get("http://nsclick.baidu.com") : "http://nsclick.baidu.com";
        for (var o in e) e.hasOwnProperty(o) && t.push(o + "=" + e[o]);
        var i = window["nsIMG" + +new Date] = new Image;
        return i.src = n + "/v.gif?pid=201&" + t.join("&"), !0
    }(location.href.match(/voice=1/) || navigator.userAgent.match(/mac os x/i)) && require(["plugins/swfobject", "voice/js/voice"], function(t, n) {
        if (n.log = e, n && n.support()) {
            n.addStyle(), window.__supportvoice = !0;
            var o = $("#form .ipt_rec");
            o.css("display", "block"), o.click(function() {
                var e = n.init({
                    url: bds.util.domain.get("http://vse.baidu.com") + "/echo.fcgi"
                });
                e.done(function(e) {
                    e.openUI(), e.onfinish(function(e) {
                        var t = e.content.item[0],
                            n = e && e.result ? e.result.corpus_no : "";
                        changeUrl("wd=" + encodeURIComponent(t) + "&rsv_voice=1&hsug_mtype=2&rsv_vcorpus=" + encodeURIComponent(n)), bds.comm.lastVoiceQuery = t
                    }), n.log({
                        q: "resolve"
                    })
                }).fail(function() {
                    n.log({
                        q: "reject"
                    }), alert("不能获得麦克风的权限")
                }), n.log({
                    q: "start"
                })
            })
        }
    })
}();