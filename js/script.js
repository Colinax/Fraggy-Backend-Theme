/*
 * FRAGGY BACKEND THEME v2.0.0-rc2
 * Responsive and Bootstrap based backend theme for WBCE
 *
 * Copright (c) 2016-2017 Jonathan Nessier, Neoflow | neoflow.ch
 * Licensed under GNU GPLv3 | github.com/Neoflow/Fraggy-Backend-Theme
 *
 * This template integrates components from the following projects
 *
 *   Roboto & Roboto Condensed | (c) Christian Robertson and Google | Apache-2.0
 *   Font Awesome 4.7.0 by @davegandy | fontawesome.io/license
 *   jQuery v3.2.1 | (c) jQuery Foundation | jquery.org/license
 *   Bootstrap v4.0.0-beta2 | (c) The Bootstrap Authors | MIT
 *   InsertLoader 1.0 | (c) Jonathan Nessier, Neoflow | MIT
 *   Popper.js v1.12.0 | (c) Federico Zivolo | MIT
 *   Select2 v4.0.3 | (c) Kevin Brown, Igor Vaynberg, and Select2 contributors | MIT
 *   Nicescroll v3.7.6 | (c) InuYaksa | MIT
 *   Datetimepicker v2.5.4 | (c) Chupurnov Valeriy | MIT
 *   Bootstrap Fileselect v2.0.0 | (c) Jonathan Nessier, Neoflow | MIT
 */
$(function () {

    $('a > img').each(function () {
        var $this = $(this);
        if ($this.prop('src').indexOf('modify_16.png') > -1) {
            $this.parent().html('<i class="fa fa-fw fa-pencil"></i>');
        } else if ($this.prop('src').indexOf('options_16.png') > -1) {
            $this.parent().html('<i class="fa fa-fw fa-cog"></i>');
        } else if ($this.prop('src').indexOf('noclock_16.png') > -1) {
            $this.parent().html('<i class="fa fa-fw fa-list-alt"></i>');
        } else if ($this.prop('src').indexOf('view_16.png') > -1) {
            $this.parent().html('<i class="fa fa-fw fa-desktop"></i>');
        } else if ($this.prop('src').indexOf('up_16.png') > -1) {
            $this.parent().html('<i class="fa fa-fw fa-arrow-circle-up"></i>');
        } else if ($this.prop('src').indexOf('down_16.png') > -1) {
            $this.parent().html('<i class="fa fa-fw fa-arrow-circle-down"></i>');
        } else if ($this.prop('src').indexOf('delete_16.png') > -1) {
            $this.parent().html('<i class="fa fa-fw fa-trash"></i>');
        } else if ($this.prop('src').indexOf('folder_16.png') > -1) {
            $this.parent().html('<i class="fa fa-fw fa-folder"></i>');
        } else if ($this.prop('src').indexOf('add_child.png') > -1) {
            $this.parent().html('<i class="fa fa-fw fa-files"></i>');
        } else if ($this.prop('src').indexOf('restore_16.png') > -1) {
            $this.parent().html('<i class="fa fa-fw fa-recycle"></i>');
        }
    });

    $('button:not(.sidenav-toggler), input[type="button"], input[type="reset"]')
            .addClass('btn btn-outline-light');

    $('button[type="submit"], input[type="submit"]')
            .addClass('btn btn-primary')
            .removeClass('btn-outline-light');

    $('input[type="text"], input[type="password"], textarea')
            .addClass('form-control');

    var $contentBody = $('#content > .content-body');
    if ($contentBody.find('.card, .alert').length === 0) {
        $contentBody
                .find('> div')
                .addClass('card')
                .find('> div')
                .addClass('card-body');
    }

    $('#addonsPage .nav-pills a').each(function () {
        var $this = $(this).addClass('nav-link');
        if ($this.attr('href').indexOf('templates') > -1) {
            $this.prepend('<i class="fa fa-fw fa-paint-brush"></i> ');
        } else if ($this.attr('href').indexOf('modules') > -1) {
            $this.prepend('<i class="fa fa-fw fa-puzzle-piece"></i> ');
        } else if ($this.attr('href').indexOf('languages') > -1) {
            $this.prepend('<i class="fa fa-fw fa-language"></i> ');
        }
    });

    $('.adminModuleWrapper').each(function () {
        var $adminToolCard = $('<div />', {class: 'card'}),
                $adminToolCardHeader = $('<h4 />', {class: 'card-header'}),
                $adminToolCardBody = $('<div />', {class: 'card-body'}),
                $headingTitle = $('.content-body h4:first').hide(),
                adminToolTitle = $headingTitle.find('a').prop('title');

        $adminToolCardHeader.text(adminToolTitle);
        $adminToolCardBody.html($(this));
        $adminToolCard.append($adminToolCardHeader, $adminToolCardBody);

        $headingTitle.remove();

        $('.content-body').prepend($adminToolCard);
    });

    $('form[action="intro2.php"] table:first').addClass('table');

    if ($('.jcalendar').length) {
        $.insert(WB_URL + '/include/jscalendar/calendar-system.css');
    }

    if ($('.jsadmin').length) {
        $.insert(WB_URL + '/modules/jsadmin/backend.css');
    }

});


(function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t()
})(this, function () {
    'use strict';
    function e(e) {
        return e && '[object Function]' === {}.toString.call(e)
    }
    function t(e, t) {
        if (1 !== e.nodeType)
            return[];
        var o = window.getComputedStyle(e, null);
        return t ? o[t] : o
    }
    function o(e) {
        return'HTML' === e.nodeName ? e : e.parentNode || e.host
    }
    function n(e) {
        if (!e || -1 !== ['HTML', 'BODY', '#document'].indexOf(e.nodeName))
            return window.document.body;
        var i = t(e), r = i.overflow, p = i.overflowX, s = i.overflowY;
        return /(auto|scroll)/.test(r + s + p) ? e : n(o(e))
    }
    function r(e) {
        var o = e && e.offsetParent, i = o && o.nodeName;
        return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TD', 'TABLE'].indexOf(o.nodeName) && 'static' === t(o, 'position') ? r(o) : o : window.document.documentElement
    }
    function p(e) {
        var t = e.nodeName;
        return'BODY' !== t && ('HTML' === t || r(e.firstElementChild) === e)
    }
    function s(e) {
        return null === e.parentNode ? e : s(e.parentNode)
    }
    function d(e, t) {
        if (!e || !e.nodeType || !t || !t.nodeType)
            return window.document.documentElement;
        var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, i = o ? e : t, n = o ? t : e, a = document.createRange();
        a.setStart(i, 0), a.setEnd(n, 0);
        var l = a.commonAncestorContainer;
        if (e !== l && t !== l || i.contains(n))
            return p(l) ? l : r(l);
        var f = s(e);
        return f.host ? d(f.host, t) : d(e, s(t).host)
    }
    function a(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top', o = 'top' === t ? 'scrollTop' : 'scrollLeft', i = e.nodeName;
        if ('BODY' === i || 'HTML' === i) {
            var n = window.document.documentElement, r = window.document.scrollingElement || n;
            return r[o]
        }
        return e[o]
    }
    function l(e, t) {
        var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], i = a(t, 'top'), n = a(t, 'left'), r = o ? -1 : 1;
        return e.top += i * r, e.bottom += i * r, e.left += n * r, e.right += n * r, e
    }
    function f(e, t) {
        var o = 'x' === t ? 'Left' : 'Top', i = 'Left' == o ? 'Right' : 'Bottom';
        return+e['border' + o + 'Width'].split('px')[0] + +e['border' + i + 'Width'].split('px')[0]
    }
    function m(e, t, o, i) {
        return X(t['offset' + e], o['client' + e], o['offset' + e], ne() ? o['offset' + e] + i['margin' + ('Height' === e ? 'Top' : 'Left')] + i['margin' + ('Height' === e ? 'Bottom' : 'Right')] : 0)
    }
    function c() {
        var e = window.document.body, t = window.document.documentElement, o = ne() && window.getComputedStyle(t);
        return{height: m('Height', e, t, o), width: m('Width', e, t, o)}
    }
    function h(e) {
        return de({}, e, {right: e.left + e.width, bottom: e.top + e.height})
    }
    function g(e) {
        var o = {};
        if (ne())
            try {
                o = e.getBoundingClientRect();
                var i = a(e, 'top'), n = a(e, 'left');
                o.top += i, o.left += n, o.bottom += i, o.right += n
            } catch (e) {
            }
        else
            o = e.getBoundingClientRect();
        var r = {left: o.left, top: o.top, width: o.right - o.left, height: o.bottom - o.top}, p = 'HTML' === e.nodeName ? c() : {}, s = p.width || e.clientWidth || r.right - r.left, d = p.height || e.clientHeight || r.bottom - r.top, l = e.offsetWidth - s, m = e.offsetHeight - d;
        if (l || m) {
            var g = t(e);
            l -= f(g, 'x'), m -= f(g, 'y'), r.width -= l, r.height -= m
        }
        return h(r)
    }
    function u(e, o) {
        var i = ne(), r = 'HTML' === o.nodeName, p = g(e), s = g(o), d = n(e), a = t(o), f = +a.borderTopWidth.split('px')[0], m = +a.borderLeftWidth.split('px')[0], c = h({top: p.top - s.top - f, left: p.left - s.left - m, width: p.width, height: p.height});
        if (c.marginTop = 0, c.marginLeft = 0, !i && r) {
            var u = +a.marginTop.split('px')[0], b = +a.marginLeft.split('px')[0];
            c.top -= f - u, c.bottom -= f - u, c.left -= m - b, c.right -= m - b, c.marginTop = u, c.marginLeft = b
        }
        return(i ? o.contains(d) : o === d && 'BODY' !== d.nodeName) && (c = l(c, o)), c
    }
    function b(e) {
        var t = window.document.documentElement, o = u(e, t), i = X(t.clientWidth, window.innerWidth || 0), n = X(t.clientHeight, window.innerHeight || 0), r = a(t), p = a(t, 'left'), s = {top: r - o.top + o.marginTop, left: p - o.left + o.marginLeft, width: i, height: n};
        return h(s)
    }
    function y(e) {
        var i = e.nodeName;
        return'BODY' === i || 'HTML' === i ? !1 : 'fixed' === t(e, 'position') || y(o(e))
    }
    function w(e, t, i, r) {
        var p = {top: 0, left: 0}, s = d(e, t);
        if ('viewport' === r)
            p = b(s);
        else {
            var a;
            'scrollParent' === r ? (a = n(o(e)), 'BODY' === a.nodeName && (a = window.document.documentElement)) : 'window' === r ? a = window.document.documentElement : a = r;
            var l = u(a, s);
            if ('HTML' === a.nodeName && !y(s)) {
                var f = c(), m = f.height, h = f.width;
                p.top += l.top - l.marginTop, p.bottom = m + l.top, p.left += l.left - l.marginLeft, p.right = h + l.left
            } else
                p = l
        }
        return p.left += i, p.top += i, p.right -= i, p.bottom -= i, p
    }
    function E(e) {
        var t = e.width, o = e.height;
        return t * o
    }
    function v(e, t, o, i, n) {
        var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf('auto'))
            return e;
        var p = w(o, i, r, n), s = {top: {width: p.width, height: t.top - p.top}, right: {width: p.right - t.right, height: p.height}, bottom: {width: p.width, height: p.bottom - t.bottom}, left: {width: t.left - p.left, height: p.height}}, d = Object.keys(s).map(function (e) {
            return de({key: e}, s[e], {area: E(s[e])})
        }).sort(function (e, t) {
            return t.area - e.area
        }), a = d.filter(function (e) {
            var t = e.width, i = e.height;
            return t >= o.clientWidth && i >= o.clientHeight
        }), l = 0 < a.length ? a[0].key : d[0].key, f = e.split('-')[1];
        return l + (f ? '-' + f : '')
    }
    function x(e, t, o) {
        var i = d(t, o);
        return u(o, i)
    }
    function O(e) {
        var t = window.getComputedStyle(e), o = parseFloat(t.marginTop) + parseFloat(t.marginBottom), i = parseFloat(t.marginLeft) + parseFloat(t.marginRight), n = {width: e.offsetWidth + i, height: e.offsetHeight + o};
        return n
    }
    function L(e) {
        var t = {left: 'right', right: 'left', bottom: 'top', top: 'bottom'};
        return e.replace(/left|right|bottom|top/g, function (e) {
            return t[e]
        })
    }
    function S(e, t, o) {
        o = o.split('-')[0];
        var i = O(e), n = {width: i.width, height: i.height}, r = -1 !== ['right', 'left'].indexOf(o), p = r ? 'top' : 'left', s = r ? 'left' : 'top', d = r ? 'height' : 'width', a = r ? 'width' : 'height';
        return n[p] = t[p] + t[d] / 2 - i[d] / 2, n[s] = o === s ? t[s] - i[a] : t[L(s)], n
    }
    function T(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }
    function C(e, t, o) {
        if (Array.prototype.findIndex)
            return e.findIndex(function (e) {
                return e[t] === o
            });
        var i = T(e, function (e) {
            return e[t] === o
        });
        return e.indexOf(i)
    }
    function N(t, o, i) {
        var n = void 0 === i ? t : t.slice(0, C(t, 'name', i));
        return n.forEach(function (t) {
            t.function && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
            var i = t.function || t.fn;
            t.enabled && e(i) && (o.offsets.popper = h(o.offsets.popper), o.offsets.reference = h(o.offsets.reference), o = i(o, t))
        }), o
    }
    function k() {
        if (!this.state.isDestroyed) {
            var e = {instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {}};
            e.offsets.reference = x(this.state, this.popper, this.reference), e.placement = v(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.offsets.popper = S(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = 'absolute', e = N(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
        }
    }
    function W(e, t) {
        return e.some(function (e) {
            var o = e.name, i = e.enabled;
            return i && o === t
        })
    }
    function B(e) {
        for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length - 1; n++) {
            var i = t[n], r = i ? '' + i + o : e;
            if ('undefined' != typeof window.document.body.style[r])
                return r
        }
        return null
    }
    function D() {
        return this.state.isDestroyed = !0, W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.left = '', this.popper.style.position = '', this.popper.style.top = '', this.popper.style[B('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
    }
    function H(e, t, o, i) {
        var r = 'BODY' === e.nodeName, p = r ? window : e;
        p.addEventListener(t, o, {passive: !0}), r || H(n(p.parentNode), t, o, i), i.push(p)
    }
    function P(e, t, o, i) {
        o.updateBound = i, window.addEventListener('resize', o.updateBound, {passive: !0});
        var r = n(e);
        return H(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o
    }
    function A() {
        this.state.eventsEnabled || (this.state = P(this.reference, this.options, this.state, this.scheduleUpdate))
    }
    function M(e, t) {
        return window.removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function (e) {
            e.removeEventListener('scroll', t.updateBound)
        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
    }
    function I() {
        this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate), this.state = M(this.reference, this.state))
    }
    function R(e) {
        return'' !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }
    function U(e, t) {
        Object.keys(t).forEach(function (o) {
            var i = '';
            -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && R(t[o]) && (i = 'px'), e.style[o] = t[o] + i
        })
    }
    function Y(e, t) {
        Object.keys(t).forEach(function (o) {
            var i = t[o];
            !1 === i ? e.removeAttribute(o) : e.setAttribute(o, t[o])
        })
    }
    function F(e, t, o) {
        var i = T(e, function (e) {
            var o = e.name;
            return o === t
        }), n = !!i && e.some(function (e) {
            return e.name === o && e.enabled && e.order < i.order
        });
        if (!n) {
            var r = '`' + t + '`';
            console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!')
        }
        return n
    }
    function j(e) {
        return'end' === e ? 'start' : 'start' === e ? 'end' : e
    }
    function K(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], o = le.indexOf(e), i = le.slice(o + 1).concat(le.slice(0, o));
        return t ? i.reverse() : i
    }
    function q(e, t, o, i) {
        var n = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), r = +n[1], p = n[2];
        if (!r)
            return e;
        if (0 === p.indexOf('%')) {
            var s;
            switch (p) {
                case'%p':
                    s = o;
                    break;
                    case'%':
                case'%r':
                default:
                    s = i;
                }
            var d = h(s);
            return d[t] / 100 * r
        }
        if ('vh' === p || 'vw' === p) {
            var a;
            return a = 'vh' === p ? X(document.documentElement.clientHeight, window.innerHeight || 0) : X(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r
        }
        return r
    }
    function G(e, t, o, i) {
        var n = [0, 0], r = -1 !== ['right', 'left'].indexOf(i), p = e.split(/(\+|\-)/).map(function (e) {
            return e.trim()
        }), s = p.indexOf(T(p, function (e) {
            return-1 !== e.search(/,|\s/)
        }));
        p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
        var d = /\s*,\s*|\s+/, a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
        return a = a.map(function (e, i) {
            var n = (1 === i ? !r : r) ? 'height' : 'width', p = !1;
            return e.reduce(function (e, t) {
                return'' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t)
            }, []).map(function (e) {
                return q(e, n, t, o)
            })
        }), a.forEach(function (e, t) {
            e.forEach(function (o, i) {
                R(o) && (n[t] += o * ('-' === e[i - 1] ? -1 : 1))
            })
        }), n
    }
    function z(e, t) {
        var o, i = t.offset, n = e.placement, r = e.offsets, p = r.popper, s = r.reference, d = n.split('-')[0];
        return o = R(+i) ? [+i, 0] : G(i, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e
    }
    for (var V = Math.min, _ = Math.floor, X = Math.max, Q = ['native code', '[object MutationObserverConstructor]'], J = function (e) {
        return Q.some(function (t) {
            return-1 < (e || '').toString().indexOf(t)
        })
    }, Z = 'undefined' != typeof window, $ = ['Edge', 'Trident', 'Firefox'], ee = 0, te = 0; te < $.length; te += 1)
        if (Z && 0 <= navigator.userAgent.indexOf($[te])) {
            ee = 1;
            break
        }
    var i, oe = Z && J(window.MutationObserver), ie = oe ? function (e) {
        var t = !1, o = 0, i = document.createElement('span'), n = new MutationObserver(function () {
            e(), t = !1
        });
        return n.observe(i, {attributes: !0}), function () {
            t || (t = !0, i.setAttribute('x-index', o), ++o)
        }
    } : function (e) {
        var t = !1;
        return function () {
            t || (t = !0, setTimeout(function () {
                t = !1, e()
            }, ee))
        }
    }, ne = function () {
        return void 0 == i && (i = -1 !== navigator.appVersion.indexOf('MSIE 10')), i
    }, re = function (e, t) {
        if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
    }, pe = function () {
        function e(e, t) {
            for (var o, n = 0; n < t.length; n++)
                o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value'in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
        return function (t, o, i) {
            return o && e(t.prototype, o), i && e(t, i), t
        }
    }(), se = function (e, t, o) {
        return t in e ? Object.defineProperty(e, t, {value: o, enumerable: !0, configurable: !0, writable: !0}) : e[t] = o, e
    }, de = Object.assign || function (e) {
        for (var t, o = 1; o < arguments.length; o++)
            for (var i in t = arguments[o], t)
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e
    }, ae = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'], le = ae.slice(3), fe = {FLIP: 'flip', CLOCKWISE: 'clockwise', COUNTERCLOCKWISE: 'counterclockwise'}, me = function () {
        function t(o, i) {
            var n = this, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            re(this, t), this.scheduleUpdate = function () {
                return requestAnimationFrame(n.update)
            }, this.update = ie(this.update.bind(this)), this.options = de({}, t.Defaults, r), this.state = {isDestroyed: !1, isCreated: !1, scrollParents: []}, this.reference = o.jquery ? o[0] : o, this.popper = i.jquery ? i[0] : i, this.options.modifiers = {}, Object.keys(de({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) {
                n.options.modifiers[e] = de({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
            }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
                return de({name: e}, n.options.modifiers[e])
            }).sort(function (e, t) {
                return e.order - t.order
            }), this.modifiers.forEach(function (t) {
                t.enabled && e(t.onLoad) && t.onLoad(n.reference, n.popper, n.options, t, n.state)
            }), this.update();
            var p = this.options.eventsEnabled;
            p && this.enableEventListeners(), this.state.eventsEnabled = p
        }
        return pe(t, [{key: 'update', value: function () {
                    return k.call(this)
                }}, {key: 'destroy', value: function () {
                    return D.call(this)
                }}, {key: 'enableEventListeners', value: function () {
                    return A.call(this)
                }}, {key: 'disableEventListeners', value: function () {
                    return I.call(this)
                }}]), t
    }();
    return me.Utils = ('undefined' == typeof window ? global : window).PopperUtils, me.placements = ae, me.Defaults = {placement: 'bottom', eventsEnabled: !0, removeOnDestroy: !1, onCreate: function () {}, onUpdate: function () {}, modifiers: {shift: {order: 100, enabled: !0, fn: function (e) {
                    var t = e.placement, o = t.split('-')[0], i = t.split('-')[1];
                    if (i) {
                        var n = e.offsets, r = n.reference, p = n.popper, s = -1 !== ['bottom', 'top'].indexOf(o), d = s ? 'left' : 'top', a = s ? 'width' : 'height', l = {start: se({}, d, r[d]), end: se({}, d, r[d] + r[a] - p[a])};
                        e.offsets.popper = de({}, p, l[i])
                    }
                    return e
                }}, offset: {order: 200, enabled: !0, fn: z, offset: 0}, preventOverflow: {order: 300, enabled: !0, fn: function (e, t) {
                    var o = t.boundariesElement || r(e.instance.popper);
                    e.instance.reference === o && (o = r(o));
                    var i = w(e.instance.popper, e.instance.reference, t.padding, o);
                    t.boundaries = i;
                    var n = t.priority, p = e.offsets.popper, s = {primary: function (e) {
                            var o = p[e];
                            return p[e] < i[e] && !t.escapeWithReference && (o = X(p[e], i[e])), se({}, e, o)
                        }, secondary: function (e) {
                            var o = 'right' === e ? 'left' : 'top', n = p[o];
                            return p[e] > i[e] && !t.escapeWithReference && (n = V(p[o], i[e] - ('right' === e ? p.width : p.height))), se({}, o, n)
                        }};
                    return n.forEach(function (e) {
                        var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
                        p = de({}, p, s[t](e))
                    }), e.offsets.popper = p, e
                }, priority: ['left', 'right', 'top', 'bottom'], padding: 5, boundariesElement: 'scrollParent'}, keepTogether: {order: 400, enabled: !0, fn: function (e) {
                    var t = e.offsets, o = t.popper, i = t.reference, n = e.placement.split('-')[0], r = _, p = -1 !== ['top', 'bottom'].indexOf(n), s = p ? 'right' : 'bottom', d = p ? 'left' : 'top', a = p ? 'width' : 'height';
                    return o[s] < r(i[d]) && (e.offsets.popper[d] = r(i[d]) - o[a]), o[d] > r(i[s]) && (e.offsets.popper[d] = r(i[s])), e
                }}, arrow: {order: 500, enabled: !0, fn: function (e, o) {
                    if (!F(e.instance.modifiers, 'arrow', 'keepTogether'))
                        return e;
                    var i = o.element;
                    if ('string' == typeof i) {
                        if (i = e.instance.popper.querySelector(i), !i)
                            return e;
                    } else if (!e.instance.popper.contains(i))
                        return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;
                    var n = e.placement.split('-')[0], r = e.offsets, p = r.popper, s = r.reference, d = -1 !== ['left', 'right'].indexOf(n), a = d ? 'height' : 'width', l = d ? 'Top' : 'Left', f = l.toLowerCase(), m = d ? 'left' : 'top', c = d ? 'bottom' : 'right', g = O(i)[a];
                    s[c] - g < p[f] && (e.offsets.popper[f] -= p[f] - (s[c] - g)), s[f] + g > p[c] && (e.offsets.popper[f] += s[f] + g - p[c]);
                    var u = s[f] + s[a] / 2 - g / 2, b = t(e.instance.popper, 'margin' + l).replace('px', ''), y = u - h(e.offsets.popper)[f] - b;
                    return y = X(V(p[a] - g, y), 0), e.arrowElement = i, e.offsets.arrow = {}, e.offsets.arrow[f] = Math.round(y), e.offsets.arrow[m] = '', e
                }, element: '[x-arrow]'}, flip: {order: 600, enabled: !0, fn: function (e, t) {
                    if (W(e.instance.modifiers, 'inner'))
                        return e;
                    if (e.flipped && e.placement === e.originalPlacement)
                        return e;
                    var o = w(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement), i = e.placement.split('-')[0], n = L(i), r = e.placement.split('-')[1] || '', p = [];
                    switch (t.behavior) {
                        case fe.FLIP:
                            p = [i, n];
                            break;
                            case fe.CLOCKWISE:
                            p = K(i);
                            break;
                            case fe.COUNTERCLOCKWISE:
                            p = K(i, !0);
                            break;
                            default:
                            p = t.behavior;
                        }
                    return p.forEach(function (s, d) {
                        if (i !== s || p.length === d + 1)
                            return e;
                        i = e.placement.split('-')[0], n = L(i);
                        var a = e.offsets.popper, l = e.offsets.reference, f = _, m = 'left' === i && f(a.right) > f(l.left) || 'right' === i && f(a.left) < f(l.right) || 'top' === i && f(a.bottom) > f(l.top) || 'bottom' === i && f(a.top) < f(l.bottom), c = f(a.left) < f(o.left), h = f(a.right) > f(o.right), g = f(a.top) < f(o.top), u = f(a.bottom) > f(o.bottom), b = 'left' === i && c || 'right' === i && h || 'top' === i && g || 'bottom' === i && u, y = -1 !== ['top', 'bottom'].indexOf(i), w = !!t.flipVariations && (y && 'start' === r && c || y && 'end' === r && h || !y && 'start' === r && g || !y && 'end' === r && u);
                        (m || b || w) && (e.flipped = !0, (m || b) && (i = p[d + 1]), w && (r = j(r)), e.placement = i + (r ? '-' + r : ''), e.offsets.popper = de({}, e.offsets.popper, S(e.instance.popper, e.offsets.reference, e.placement)), e = N(e.instance.modifiers, e, 'flip'))
                    }), e
                }, behavior: 'flip', padding: 5, boundariesElement: 'viewport'}, inner: {order: 700, enabled: !1, fn: function (e) {
                    var t = e.placement, o = t.split('-')[0], i = e.offsets, n = i.popper, r = i.reference, p = -1 !== ['left', 'right'].indexOf(o), s = -1 === ['top', 'left'].indexOf(o);
                    return n[p ? 'left' : 'top'] = r[t] - (s ? n[p ? 'width' : 'height'] : 0), e.placement = L(t), e.offsets.popper = h(n), e
                }}, hide: {order: 800, enabled: !0, fn: function (e) {
                    if (!F(e.instance.modifiers, 'hide', 'preventOverflow'))
                        return e;
                    var t = e.offsets.reference, o = T(e.instance.modifiers, function (e) {
                        return'preventOverflow' === e.name
                    }).boundaries;
                    if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
                        if (!0 === e.hide)
                            return e;
                        e.hide = !0, e.attributes['x-out-of-boundaries'] = ''
                    } else {
                        if (!1 === e.hide)
                            return e;
                        e.hide = !1, e.attributes['x-out-of-boundaries'] = !1
                    }
                    return e
                }}, computeStyle: {order: 850, enabled: !0, fn: function (e, t) {
                    var o = t.x, i = t.y, n = e.offsets.popper, p = T(e.instance.modifiers, function (e) {
                        return'applyStyle' === e.name
                    }).gpuAcceleration;
                    void 0 !== p && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
                    var s, d, a = void 0 === p ? t.gpuAcceleration : p, l = r(e.instance.popper), f = g(l), m = {position: n.position}, c = {left: _(n.left), top: _(n.top), bottom: _(n.bottom), right: _(n.right)}, h = 'bottom' === o ? 'top' : 'bottom', u = 'right' === i ? 'left' : 'right', b = B('transform');
                    if (d = 'bottom' == h ? -f.height + c.bottom : c.top, s = 'right' == u ? -f.width + c.right : c.left, a && b)
                        m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[h] = 0, m[u] = 0, m.willChange = 'transform';
                    else {
                        var y = 'bottom' == h ? -1 : 1, w = 'right' == u ? -1 : 1;
                        m[h] = d * y, m[u] = s * w, m.willChange = h + ', ' + u
                    }
                    var E = {"x-placement": e.placement};
                    return e.attributes = de({}, E, e.attributes), e.styles = de({}, m, e.styles), e.arrowStyles = de({}, e.offsets.arrow, e.arrowStyles), e
                }, gpuAcceleration: !0, x: 'bottom', y: 'right'}, applyStyle: {order: 900, enabled: !0, fn: function (e) {
                    return U(e.instance.popper, e.styles), Y(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && U(e.arrowElement, e.arrowStyles), e
                }, onLoad: function (e, t, o, i, n) {
                    var r = x(n, t, e), p = v(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
                    return t.setAttribute('x-placement', p), U(t, {position: 'absolute'}), o
                }, gpuAcceleration: void 0}}}, me
});

var bootstrap = function (t, e, n) {
    "use strict";
    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value"in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    e = e && e.hasOwnProperty("default") ? e.default : e, n = n && n.hasOwnProperty("default") ? n.default : n;
    var s = function () {
        function t(t) {
            return{}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
        }
        function n() {
            return{bindType: r.end, delegateType: r.end, handle: function (t) {
                    if (e(t.target).is(this))
                        return t.handleObj.handler.apply(this, arguments)
                }}
        }
        function i() {
            if (window.QUnit)
                return!1;
            var t = document.createElement("bootstrap");
            for (var e in o)
                if ("undefined" != typeof t.style[e])
                    return{end: o[e]};
            return!1
        }
        function s(t) {
            var n = this, i = !1;
            return e(this).one(a.TRANSITION_END, function () {
                i = !0
            }), setTimeout(function () {
                i || a.triggerTransitionEnd(n)
            }, t), this
        }
        var r = !1, o = {WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend"}, a = {TRANSITION_END: "bsTransitionEnd", getUID: function (t) {
                do {
                    t += ~~(1e6 * Math.random())
                } while (document.getElementById(t));
                return t
            }, getSelectorFromElement: function (t) {
                var n = t.getAttribute("data-target");
                n && "#" !== n || (n = t.getAttribute("href") || "");
                try {
                    return e(document).find(n).length > 0 ? n : null
                } catch (t) {
                    return null
                }
            }, reflow: function (t) {
                return t.offsetHeight
            }, triggerTransitionEnd: function (t) {
                e(t).trigger(r.end)
            }, supportsTransitionEnd: function () {
                return Boolean(r)
            }, isElement: function (t) {
                return(t[0] || t).nodeType
            }, typeCheckConfig: function (e, n, i) {
                for (var s in i)
                    if (Object.prototype.hasOwnProperty.call(i, s)) {
                        var r = i[s], o = n[s], l = o && a.isElement(o) ? "element" : t(o);
                        if (!new RegExp(r).test(l))
                            throw new Error(e.toUpperCase() + ': Option "' + s + '" provided type "' + l + '" but expected type "' + r + '".')
                    }
            }};
        return r = i(), e.fn.emulateTransitionEnd = s, a.supportsTransitionEnd() && (e.event.special[a.TRANSITION_END] = n()), a
    }(), r = function (t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t
    }, o = function (t, e) {
        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }, a = function () {
        var t = "alert", n = e.fn[t], i = {CLOSE: "close.bs.alert", CLOSED: "closed.bs.alert", CLICK_DATA_API: "click.bs.alert.data-api"}, o = {ALERT: "alert", FADE: "fade", SHOW: "show"}, a = function () {
            function t(t) {
                this._element = t
            }
            var n = t.prototype;
            return n.close = function (t) {
                t = t || this._element;
                var e = this._getRootElement(t);
                this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
            }, n.dispose = function () {
                e.removeData(this._element, "bs.alert"), this._element = null
            }, n._getRootElement = function (t) {
                var n = s.getSelectorFromElement(t), i = !1;
                return n && (i = e(n)[0]), i || (i = e(t).closest("." + o.ALERT)[0]), i
            }, n._triggerCloseEvent = function (t) {
                var n = e.Event(i.CLOSE);
                return e(t).trigger(n), n
            }, n._removeElement = function (t) {
                var n = this;
                e(t).removeClass(o.SHOW), s.supportsTransitionEnd() && e(t).hasClass(o.FADE) ? e(t).one(s.TRANSITION_END, function (e) {
                    return n._destroyElement(t, e)
                }).emulateTransitionEnd(150) : this._destroyElement(t)
            }, n._destroyElement = function (t) {
                e(t).detach().trigger(i.CLOSED).remove()
            }, t._jQueryInterface = function (n) {
                return this.each(function () {
                    var i = e(this), s = i.data("bs.alert");
                    s || (s = new t(this), i.data("bs.alert", s)), "close" === n && s[n](this)
                })
            }, t._handleDismiss = function (t) {
                return function (e) {
                    e && e.preventDefault(), t.close(this)
                }
            }, r(t, null, [{key: "VERSION", get: function () {
                        return"4.0.0-beta.2"
                    }}]), t
        }();
        return e(document).on(i.CLICK_DATA_API, {DISMISS: '[data-dismiss="alert"]'}.DISMISS, a._handleDismiss(new a)), e.fn[t] = a._jQueryInterface, e.fn[t].Constructor = a, e.fn[t].noConflict = function () {
            return e.fn[t] = n, a._jQueryInterface
        }, a
    }(), l = function () {
        var t = "button", n = e.fn[t], i = {ACTIVE: "active", BUTTON: "btn", FOCUS: "focus"}, s = {DATA_TOGGLE_CARROT: '[data-toggle^="button"]', DATA_TOGGLE: '[data-toggle="buttons"]', INPUT: "input", ACTIVE: ".active", BUTTON: ".btn"}, o = {CLICK_DATA_API: "click.bs.button.data-api", FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api"}, a = function () {
            function t(t) {
                this._element = t
            }
            var n = t.prototype;
            return n.toggle = function () {
                var t = !0, n = !0, r = e(this._element).closest(s.DATA_TOGGLE)[0];
                if (r) {
                    var o = e(this._element).find(s.INPUT)[0];
                    if (o) {
                        if ("radio" === o.type)
                            if (o.checked && e(this._element).hasClass(i.ACTIVE))
                                t = !1;
                            else {
                                var a = e(r).find(s.ACTIVE)[0];
                                a && e(a).removeClass(i.ACTIVE)
                            }
                        if (t) {
                            if (o.hasAttribute("disabled") || r.hasAttribute("disabled") || o.classList.contains("disabled") || r.classList.contains("disabled"))
                                return;
                            o.checked = !e(this._element).hasClass(i.ACTIVE), e(o).trigger("change")
                        }
                        o.focus(), n = !1
                    }
                }
                n && this._element.setAttribute("aria-pressed", !e(this._element).hasClass(i.ACTIVE)), t && e(this._element).toggleClass(i.ACTIVE)
            }, n.dispose = function () {
                e.removeData(this._element, "bs.button"), this._element = null
            }, t._jQueryInterface = function (n) {
                return this.each(function () {
                    var i = e(this).data("bs.button");
                    i || (i = new t(this), e(this).data("bs.button", i)), "toggle" === n && i[n]()
                })
            }, r(t, null, [{key: "VERSION", get: function () {
                        return"4.0.0-beta.2"
                    }}]), t
        }();
        return e(document).on(o.CLICK_DATA_API, s.DATA_TOGGLE_CARROT, function (t) {
            t.preventDefault();
            var n = t.target;
            e(n).hasClass(i.BUTTON) || (n = e(n).closest(s.BUTTON)), a._jQueryInterface.call(e(n), "toggle")
        }).on(o.FOCUS_BLUR_DATA_API, s.DATA_TOGGLE_CARROT, function (t) {
            var n = e(t.target).closest(s.BUTTON)[0];
            e(n).toggleClass(i.FOCUS, /^focus(in)?$/.test(t.type))
        }), e.fn[t] = a._jQueryInterface, e.fn[t].Constructor = a, e.fn[t].noConflict = function () {
            return e.fn[t] = n, a._jQueryInterface
        }, a
    }(), h = function () {
        var t = "carousel", n = "bs.carousel", i = "." + n, o = e.fn[t], a = {interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0}, l = {interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean"}, h = {NEXT: "next", PREV: "prev", LEFT: "left", RIGHT: "right"}, c = {SLIDE: "slide" + i, SLID: "slid" + i, KEYDOWN: "keydown" + i, MOUSEENTER: "mouseenter" + i, MOUSELEAVE: "mouseleave" + i, TOUCHEND: "touchend" + i, LOAD_DATA_API: "load.bs.carousel.data-api", CLICK_DATA_API: "click.bs.carousel.data-api"}, u = {CAROUSEL: "carousel", ACTIVE: "active", SLIDE: "slide", RIGHT: "carousel-item-right", LEFT: "carousel-item-left", NEXT: "carousel-item-next", PREV: "carousel-item-prev", ITEM: "carousel-item"}, d = {ACTIVE: ".active", ACTIVE_ITEM: ".active.carousel-item", ITEM: ".carousel-item", NEXT_PREV: ".carousel-item-next, .carousel-item-prev", INDICATORS: ".carousel-indicators", DATA_SLIDE: "[data-slide], [data-slide-to]", DATA_RIDE: '[data-ride="carousel"]'}, f = function () {
            function o(t, n) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = e(t)[0], this._indicatorsElement = e(this._element).find(d.INDICATORS)[0], this._addEventListeners()
            }
            var f = o.prototype;
            return f.next = function () {
                this._isSliding || this._slide(h.NEXT)
            }, f.nextWhenVisible = function () {
                !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next()
            }, f.prev = function () {
                this._isSliding || this._slide(h.PREV)
            }, f.pause = function (t) {
                t || (this._isPaused = !0), e(this._element).find(d.NEXT_PREV)[0] && s.supportsTransitionEnd() && (s.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, f.cycle = function (t) {
                t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, f.to = function (t) {
                var n = this;
                this._activeElement = e(this._element).find(d.ACTIVE_ITEM)[0];
                var i = this._getItemIndex(this._activeElement);
                if (!(t > this._items.length - 1 || t < 0))
                    if (this._isSliding)
                        e(this._element).one(c.SLID, function () {
                            return n.to(t)
                        });
                    else {
                        if (i === t)
                            return this.pause(), void this.cycle();
                        var s = t > i ? h.NEXT : h.PREV;
                        this._slide(s, this._items[t])
                    }
            }, f.dispose = function () {
                e(this._element).off(i), e.removeData(this._element, n), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, f._getConfig = function (n) {
                return n = e.extend({}, a, n), s.typeCheckConfig(t, n, l), n
            }, f._addEventListeners = function () {
                var t = this;
                this._config.keyboard && e(this._element).on(c.KEYDOWN, function (e) {
                    return t._keydown(e)
                }), "hover" === this._config.pause && (e(this._element).on(c.MOUSEENTER, function (e) {
                    return t.pause(e)
                }).on(c.MOUSELEAVE, function (e) {
                    return t.cycle(e)
                }), "ontouchstart"in document.documentElement && e(this._element).on(c.TOUCHEND, function () {
                    t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function (e) {
                        return t.cycle(e)
                    }, 500 + t._config.interval)
                }))
            }, f._keydown = function (t) {
                if (!/input|textarea/i.test(t.target.tagName))
                    switch (t.which) {
                        case 37:
                            t.preventDefault(), this.prev();
                            break;
                            case 39:
                            t.preventDefault(), this.next();
                            break;
                            default:
                            return
                            }
            }, f._getItemIndex = function (t) {
                return this._items = e.makeArray(e(t).parent().find(d.ITEM)), this._items.indexOf(t)
            }, f._getItemByDirection = function (t, e) {
                var n = t === h.NEXT, i = t === h.PREV, s = this._getItemIndex(e), r = this._items.length - 1;
                if ((i && 0 === s || n && s === r) && !this._config.wrap)
                    return e;
                var o = (s + (t === h.PREV ? -1 : 1)) % this._items.length;
                return-1 === o ? this._items[this._items.length - 1] : this._items[o]
            }, f._triggerSlideEvent = function (t, n) {
                var i = this._getItemIndex(t), s = this._getItemIndex(e(this._element).find(d.ACTIVE_ITEM)[0]), r = e.Event(c.SLIDE, {relatedTarget: t, direction: n, from: s, to: i});
                return e(this._element).trigger(r), r
            }, f._setActiveIndicatorElement = function (t) {
                if (this._indicatorsElement) {
                    e(this._indicatorsElement).find(d.ACTIVE).removeClass(u.ACTIVE);
                    var n = this._indicatorsElement.children[this._getItemIndex(t)];
                    n && e(n).addClass(u.ACTIVE)
                }
            }, f._slide = function (t, n) {
                var i, r, o, a = this, l = e(this._element).find(d.ACTIVE_ITEM)[0], f = this._getItemIndex(l), _ = n || l && this._getItemByDirection(t, l), g = this._getItemIndex(_), m = Boolean(this._interval);
                if (t === h.NEXT ? (i = u.LEFT, r = u.NEXT, o = h.LEFT) : (i = u.RIGHT, r = u.PREV, o = h.RIGHT), _ && e(_).hasClass(u.ACTIVE))
                    this._isSliding = !1;
                else if (!this._triggerSlideEvent(_, o).isDefaultPrevented() && l && _) {
                    this._isSliding = !0, m && this.pause(), this._setActiveIndicatorElement(_);
                    var p = e.Event(c.SLID, {relatedTarget: _, direction: o, from: f, to: g});
                    s.supportsTransitionEnd() && e(this._element).hasClass(u.SLIDE) ? (e(_).addClass(r), s.reflow(_), e(l).addClass(i), e(_).addClass(i), e(l).one(s.TRANSITION_END, function () {
                        e(_).removeClass(i + " " + r).addClass(u.ACTIVE), e(l).removeClass(u.ACTIVE + " " + r + " " + i), a._isSliding = !1, setTimeout(function () {
                            return e(a._element).trigger(p)
                        }, 0)
                    }).emulateTransitionEnd(600)) : (e(l).removeClass(u.ACTIVE), e(_).addClass(u.ACTIVE), this._isSliding = !1, e(this._element).trigger(p)), m && this.cycle()
                }
            }, o._jQueryInterface = function (t) {
                return this.each(function () {
                    var i = e(this).data(n), s = e.extend({}, a, e(this).data());
                    "object" == typeof t && e.extend(s, t);
                    var r = "string" == typeof t ? t : s.slide;
                    if (i || (i = new o(this, s), e(this).data(n, i)), "number" == typeof t)
                        i.to(t);
                    else if ("string" == typeof r) {
                        if ("undefined" == typeof i[r])
                            throw new Error('No method named "' + r + '"');
                        i[r]()
                    } else
                        s.interval && (i.pause(), i.cycle())
                })
            }, o._dataApiClickHandler = function (t) {
                var i = s.getSelectorFromElement(this);
                if (i) {
                    var r = e(i)[0];
                    if (r && e(r).hasClass(u.CAROUSEL)) {
                        var a = e.extend({}, e(r).data(), e(this).data()), l = this.getAttribute("data-slide-to");
                        l && (a.interval = !1), o._jQueryInterface.call(e(r), a), l && e(r).data(n).to(l), t.preventDefault()
                    }
                }
            }, r(o, null, [{key: "VERSION", get: function () {
                        return"4.0.0-beta.2"
                    }}, {key: "Default", get: function () {
                        return a
                    }}]), o
        }();
        return e(document).on(c.CLICK_DATA_API, d.DATA_SLIDE, f._dataApiClickHandler), e(window).on(c.LOAD_DATA_API, function () {
            e(d.DATA_RIDE).each(function () {
                var t = e(this);
                f._jQueryInterface.call(t, t.data())
            })
        }), e.fn[t] = f._jQueryInterface, e.fn[t].Constructor = f, e.fn[t].noConflict = function () {
            return e.fn[t] = o, f._jQueryInterface
        }, f
    }(), c = function () {
        var t = "collapse", n = "bs.collapse", i = e.fn[t], o = {toggle: !0, parent: ""}, a = {toggle: "boolean", parent: "(string|element)"}, l = {SHOW: "show.bs.collapse", SHOWN: "shown.bs.collapse", HIDE: "hide.bs.collapse", HIDDEN: "hidden.bs.collapse", CLICK_DATA_API: "click.bs.collapse.data-api"}, h = {SHOW: "show", COLLAPSE: "collapse", COLLAPSING: "collapsing", COLLAPSED: "collapsed"}, c = {WIDTH: "width", HEIGHT: "height"}, u = {ACTIVES: ".show, .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]'}, d = function () {
            function i(t, n) {
                this._isTransitioning = !1, this._element = t, this._config = this._getConfig(n), this._triggerArray = e.makeArray(e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                for (var i = e(u.DATA_TOGGLE), r = 0; r < i.length; r++) {
                    var o = i[r], a = s.getSelectorFromElement(o);
                    null !== a && e(a).filter(t).length > 0 && this._triggerArray.push(o)
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var d = i.prototype;
            return d.toggle = function () {
                e(this._element).hasClass(h.SHOW) ? this.hide() : this.show()
            }, d.show = function () {
                var t = this;
                if (!this._isTransitioning && !e(this._element).hasClass(h.SHOW)) {
                    var r, o;
                    if (this._parent && ((r = e.makeArray(e(this._parent).children().children(u.ACTIVES))).length || (r = null)), !(r && (o = e(r).data(n)) && o._isTransitioning)) {
                        var a = e.Event(l.SHOW);
                        if (e(this._element).trigger(a), !a.isDefaultPrevented()) {
                            r && (i._jQueryInterface.call(e(r), "hide"), o || e(r).data(n, null));
                            var c = this._getDimension();
                            e(this._element).removeClass(h.COLLAPSE).addClass(h.COLLAPSING), this._element.style[c] = 0, this._triggerArray.length && e(this._triggerArray).removeClass(h.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);
                            var d = function () {
                                e(t._element).removeClass(h.COLLAPSING).addClass(h.COLLAPSE).addClass(h.SHOW), t._element.style[c] = "", t.setTransitioning(!1), e(t._element).trigger(l.SHOWN)
                            };
                            if (s.supportsTransitionEnd()) {
                                var f = "scroll" + (c[0].toUpperCase() + c.slice(1));
                                e(this._element).one(s.TRANSITION_END, d).emulateTransitionEnd(600), this._element.style[c] = this._element[f] + "px"
                            } else
                                d()
                        }
                    }
                }
            }, d.hide = function () {
                var t = this;
                if (!this._isTransitioning && e(this._element).hasClass(h.SHOW)) {
                    var n = e.Event(l.HIDE);
                    if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
                        var i = this._getDimension();
                        if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", s.reflow(this._element), e(this._element).addClass(h.COLLAPSING).removeClass(h.COLLAPSE).removeClass(h.SHOW), this._triggerArray.length)
                            for (var r = 0; r < this._triggerArray.length; r++) {
                                var o = this._triggerArray[r], a = s.getSelectorFromElement(o);
                                null !== a && (e(a).hasClass(h.SHOW) || e(o).addClass(h.COLLAPSED).attr("aria-expanded", !1))
                            }
                        this.setTransitioning(!0);
                        var c = function () {
                            t.setTransitioning(!1), e(t._element).removeClass(h.COLLAPSING).addClass(h.COLLAPSE).trigger(l.HIDDEN)
                        };
                        this._element.style[i] = "", s.supportsTransitionEnd() ? e(this._element).one(s.TRANSITION_END, c).emulateTransitionEnd(600) : c()
                    }
                }
            }, d.setTransitioning = function (t) {
                this._isTransitioning = t
            }, d.dispose = function () {
                e.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, d._getConfig = function (n) {
                return n = e.extend({}, o, n), n.toggle = Boolean(n.toggle), s.typeCheckConfig(t, n, a), n
            }, d._getDimension = function () {
                return e(this._element).hasClass(c.WIDTH) ? c.WIDTH : c.HEIGHT
            }, d._getParent = function () {
                var t = this, n = null;
                s.isElement(this._config.parent) ? (n = this._config.parent, "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0])) : n = e(this._config.parent)[0];
                var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                return e(n).find(r).each(function (e, n) {
                    t._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n])
                }), n
            }, d._addAriaAndCollapsedClass = function (t, n) {
                if (t) {
                    var i = e(t).hasClass(h.SHOW);
                    n.length && e(n).toggleClass(h.COLLAPSED, !i).attr("aria-expanded", i)
                }
            }, i._getTargetFromElement = function (t) {
                var n = s.getSelectorFromElement(t);
                return n ? e(n)[0] : null
            }, i._jQueryInterface = function (t) {
                return this.each(function () {
                    var s = e(this), r = s.data(n), a = e.extend({}, o, s.data(), "object" == typeof t && t);
                    if (!r && a.toggle && /show|hide/.test(t) && (a.toggle = !1), r || (r = new i(this, a), s.data(n, r)), "string" == typeof t) {
                        if ("undefined" == typeof r[t])
                            throw new Error('No method named "' + t + '"');
                        r[t]()
                    }
                })
            }, r(i, null, [{key: "VERSION", get: function () {
                        return"4.0.0-beta.2"
                    }}, {key: "Default", get: function () {
                        return o
                    }}]), i
        }();
        return e(document).on(l.CLICK_DATA_API, u.DATA_TOGGLE, function (t) {
            "A" === t.currentTarget.tagName && t.preventDefault();
            var i = e(this), r = s.getSelectorFromElement(this);
            e(r).each(function () {
                var t = e(this), s = t.data(n) ? "toggle" : i.data();
                d._jQueryInterface.call(t, s)
            })
        }), e.fn[t] = d._jQueryInterface, e.fn[t].Constructor = d, e.fn[t].noConflict = function () {
            return e.fn[t] = i, d._jQueryInterface
        }, d
    }(), u = function () {
        if ("undefined" == typeof n)
            throw new Error("Bootstrap dropdown require Popper.js (https://popper.js.org)");
        var t = "dropdown", i = "bs.dropdown", o = "." + i, a = e.fn[t], l = new RegExp("38|40|27"), h = {HIDE: "hide" + o, HIDDEN: "hidden" + o, SHOW: "show" + o, SHOWN: "shown" + o, CLICK: "click" + o, CLICK_DATA_API: "click.bs.dropdown.data-api", KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api", KEYUP_DATA_API: "keyup.bs.dropdown.data-api"}, c = {DISABLED: "disabled", SHOW: "show", DROPUP: "dropup", MENURIGHT: "dropdown-menu-right", MENULEFT: "dropdown-menu-left"}, u = {DATA_TOGGLE: '[data-toggle="dropdown"]', FORM_CHILD: ".dropdown form", MENU: ".dropdown-menu", NAVBAR_NAV: ".navbar-nav", VISIBLE_ITEMS: ".dropdown-menu .dropdown-item:not(.disabled)"}, d = {TOP: "top-start", TOPEND: "top-end", BOTTOM: "bottom-start", BOTTOMEND: "bottom-end"}, f = {offset: 0, flip: !0}, _ = {offset: "(number|string|function)", flip: "boolean"}, g = function () {
            function a(t, e) {
                this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }
            var g = a.prototype;
            return g.toggle = function () {
                if (!this._element.disabled && !e(this._element).hasClass(c.DISABLED)) {
                    var t = a._getParentFromElement(this._element), i = e(this._menu).hasClass(c.SHOW);
                    if (a._clearMenus(), !i) {
                        var s = {relatedTarget: this._element}, r = e.Event(h.SHOW, s);
                        if (e(t).trigger(r), !r.isDefaultPrevented()) {
                            var o = this._element;
                            e(t).hasClass(c.DROPUP) && (e(this._menu).hasClass(c.MENULEFT) || e(this._menu).hasClass(c.MENURIGHT)) && (o = t), this._popper = new n(o, this._menu, this._getPopperConfig()), "ontouchstart"in document.documentElement && !e(t).closest(u.NAVBAR_NAV).length && e("body").children().on("mouseover", null, e.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), e(this._menu).toggleClass(c.SHOW), e(t).toggleClass(c.SHOW).trigger(e.Event(h.SHOWN, s))
                        }
                    }
                }
            }, g.dispose = function () {
                e.removeData(this._element, i), e(this._element).off(o), this._element = null, this._menu = null, null !== this._popper && this._popper.destroy(), this._popper = null
            }, g.update = function () {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, g._addEventListeners = function () {
                var t = this;
                e(this._element).on(h.CLICK, function (e) {
                    e.preventDefault(), e.stopPropagation(), t.toggle()
                })
            }, g._getConfig = function (n) {
                return n = e.extend({}, this.constructor.Default, e(this._element).data(), n), s.typeCheckConfig(t, n, this.constructor.DefaultType), n
            }, g._getMenuElement = function () {
                if (!this._menu) {
                    var t = a._getParentFromElement(this._element);
                    this._menu = e(t).find(u.MENU)[0]
                }
                return this._menu
            }, g._getPlacement = function () {
                var t = e(this._element).parent(), n = d.BOTTOM;
                return t.hasClass(c.DROPUP) ? (n = d.TOP, e(this._menu).hasClass(c.MENURIGHT) && (n = d.TOPEND)) : e(this._menu).hasClass(c.MENURIGHT) && (n = d.BOTTOMEND), n
            }, g._detectNavbar = function () {
                return e(this._element).closest(".navbar").length > 0
            }, g._getPopperConfig = function () {
                var t = this, n = {};
                "function" == typeof this._config.offset ? n.fn = function (n) {
                    return n.offsets = e.extend({}, n.offsets, t._config.offset(n.offsets) || {}), n
                } : n.offset = this._config.offset;
                var i = {placement: this._getPlacement(), modifiers: {offset: n, flip: {enabled: this._config.flip}}};
                return this._inNavbar && (i.modifiers.applyStyle = {enabled: !this._inNavbar}), i
            }, a._jQueryInterface = function (t) {
                return this.each(function () {
                    var n = e(this).data(i), s = "object" == typeof t ? t : null;
                    if (n || (n = new a(this, s), e(this).data(i, n)), "string" == typeof t) {
                        if ("undefined" == typeof n[t])
                            throw new Error('No method named "' + t + '"');
                        n[t]()
                    }
                })
            }, a._clearMenus = function (t) {
                if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                    for (var n = e.makeArray(e(u.DATA_TOGGLE)), s = 0; s < n.length; s++) {
                        var r = a._getParentFromElement(n[s]), o = e(n[s]).data(i), l = {relatedTarget: n[s]};
                        if (o) {
                            var d = o._menu;
                            if (e(r).hasClass(c.SHOW) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && e.contains(r, t.target))) {
                                var f = e.Event(h.HIDE, l);
                                e(r).trigger(f), f.isDefaultPrevented() || ("ontouchstart"in document.documentElement && e("body").children().off("mouseover", null, e.noop), n[s].setAttribute("aria-expanded", "false"), e(d).removeClass(c.SHOW), e(r).removeClass(c.SHOW).trigger(e.Event(h.HIDDEN, l)))
                            }
                        }
                    }
            }, a._getParentFromElement = function (t) {
                var n, i = s.getSelectorFromElement(t);
                return i && (n = e(i)[0]), n || t.parentNode
            }, a._dataApiKeydownHandler = function (t) {
                if (!(!l.test(t.which) || /button/i.test(t.target.tagName) && 32 === t.which || /input|textarea/i.test(t.target.tagName) || (t.preventDefault(), t.stopPropagation(), this.disabled || e(this).hasClass(c.DISABLED)))) {
                    var n = a._getParentFromElement(this), i = e(n).hasClass(c.SHOW);
                    if ((i || 27 === t.which && 32 === t.which) && (!i || 27 !== t.which && 32 !== t.which)) {
                        var s = e(n).find(u.VISIBLE_ITEMS).get();
                        if (s.length) {
                            var r = s.indexOf(t.target);
                            38 === t.which && r > 0 && r--, 40 === t.which && r < s.length - 1 && r++, r < 0 && (r = 0), s[r].focus()
                        }
                    } else {
                        if (27 === t.which) {
                            var o = e(n).find(u.DATA_TOGGLE)[0];
                            e(o).trigger("focus")
                        }
                        e(this).trigger("click")
                    }
                }
            }, r(a, null, [{key: "VERSION", get: function () {
                        return"4.0.0-beta.2"
                    }}, {key: "Default", get: function () {
                        return f
                    }}, {key: "DefaultType", get: function () {
                        return _
                    }}]), a
        }();
        return e(document).on(h.KEYDOWN_DATA_API, u.DATA_TOGGLE, g._dataApiKeydownHandler).on(h.KEYDOWN_DATA_API, u.MENU, g._dataApiKeydownHandler).on(h.CLICK_DATA_API + " " + h.KEYUP_DATA_API, g._clearMenus).on(h.CLICK_DATA_API, u.DATA_TOGGLE, function (t) {
            t.preventDefault(), t.stopPropagation(), g._jQueryInterface.call(e(this), "toggle")
        }).on(h.CLICK_DATA_API, u.FORM_CHILD, function (t) {
            t.stopPropagation()
        }), e.fn[t] = g._jQueryInterface, e.fn[t].Constructor = g, e.fn[t].noConflict = function () {
            return e.fn[t] = a, g._jQueryInterface
        }, g
    }(), d = function () {
        var t = "modal", n = ".bs.modal", i = e.fn[t], o = {backdrop: !0, keyboard: !0, focus: !0, show: !0}, a = {backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean"}, l = {HIDE: "hide.bs.modal", HIDDEN: "hidden.bs.modal", SHOW: "show.bs.modal", SHOWN: "shown.bs.modal", FOCUSIN: "focusin.bs.modal", RESIZE: "resize.bs.modal", CLICK_DISMISS: "click.dismiss.bs.modal", KEYDOWN_DISMISS: "keydown.dismiss.bs.modal", MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal", MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal", CLICK_DATA_API: "click.bs.modal.data-api"}, h = {SCROLLBAR_MEASURER: "modal-scrollbar-measure", BACKDROP: "modal-backdrop", OPEN: "modal-open", FADE: "fade", SHOW: "show"}, c = {DIALOG: ".modal-dialog", DATA_TOGGLE: '[data-toggle="modal"]', DATA_DISMISS: '[data-dismiss="modal"]', FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", STICKY_CONTENT: ".sticky-top", NAVBAR_TOGGLER: ".navbar-toggler"}, u = function () {
            function i(t, n) {
                this._config = this._getConfig(n), this._element = t, this._dialog = e(t).find(c.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
            }
            var u = i.prototype;
            return u.toggle = function (t) {
                return this._isShown ? this.hide() : this.show(t)
            }, u.show = function (t) {
                var n = this;
                if (!this._isTransitioning && !this._isShown) {
                    s.supportsTransitionEnd() && e(this._element).hasClass(h.FADE) && (this._isTransitioning = !0);
                    var i = e.Event(l.SHOW, {relatedTarget: t});
                    e(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), e(document.body).addClass(h.OPEN), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on(l.CLICK_DISMISS, c.DATA_DISMISS, function (t) {
                        return n.hide(t)
                    }), e(this._dialog).on(l.MOUSEDOWN_DISMISS, function () {
                        e(n._element).one(l.MOUSEUP_DISMISS, function (t) {
                            e(t.target).is(n._element) && (n._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function () {
                        return n._showElement(t)
                    }))
                }
            }, u.hide = function (t) {
                var n = this;
                if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
                    var i = e.Event(l.HIDE);
                    if (e(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                        this._isShown = !1;
                        var r = s.supportsTransitionEnd() && e(this._element).hasClass(h.FADE);
                        r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), e(document).off(l.FOCUSIN), e(this._element).removeClass(h.SHOW), e(this._element).off(l.CLICK_DISMISS), e(this._dialog).off(l.MOUSEDOWN_DISMISS), r ? e(this._element).one(s.TRANSITION_END, function (t) {
                            return n._hideModal(t)
                        }).emulateTransitionEnd(300) : this._hideModal()
                    }
                }
            }, u.dispose = function () {
                e.removeData(this._element, "bs.modal"), e(window, document, this._element, this._backdrop).off(n), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
            }, u.handleUpdate = function () {
                this._adjustDialog()
            }, u._getConfig = function (n) {
                return n = e.extend({}, o, n), s.typeCheckConfig(t, n, a), n
            }, u._showElement = function (t) {
                var n = this, i = s.supportsTransitionEnd() && e(this._element).hasClass(h.FADE);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && s.reflow(this._element), e(this._element).addClass(h.SHOW), this._config.focus && this._enforceFocus();
                var r = e.Event(l.SHOWN, {relatedTarget: t}), o = function () {
                    n._config.focus && n._element.focus(), n._isTransitioning = !1, e(n._element).trigger(r)
                };
                i ? e(this._dialog).one(s.TRANSITION_END, o).emulateTransitionEnd(300) : o()
            }, u._enforceFocus = function () {
                var t = this;
                e(document).off(l.FOCUSIN).on(l.FOCUSIN, function (n) {
                    document === n.target || t._element === n.target || e(t._element).has(n.target).length || t._element.focus()
                })
            }, u._setEscapeEvent = function () {
                var t = this;
                this._isShown && this._config.keyboard ? e(this._element).on(l.KEYDOWN_DISMISS, function (e) {
                    27 === e.which && (e.preventDefault(), t.hide())
                }) : this._isShown || e(this._element).off(l.KEYDOWN_DISMISS)
            }, u._setResizeEvent = function () {
                var t = this;
                this._isShown ? e(window).on(l.RESIZE, function (e) {
                    return t.handleUpdate(e)
                }) : e(window).off(l.RESIZE)
            }, u._hideModal = function () {
                var t = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
                    e(document.body).removeClass(h.OPEN), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger(l.HIDDEN)
                })
            }, u._removeBackdrop = function () {
                this._backdrop && (e(this._backdrop).remove(), this._backdrop = null)
            }, u._showBackdrop = function (t) {
                var n = this, i = e(this._element).hasClass(h.FADE) ? h.FADE : "";
                if (this._isShown && this._config.backdrop) {
                    var r = s.supportsTransitionEnd() && i;
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = h.BACKDROP, i && e(this._backdrop).addClass(i), e(this._backdrop).appendTo(document.body), e(this._element).on(l.CLICK_DISMISS, function (t) {
                        n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                    }), r && s.reflow(this._backdrop), e(this._backdrop).addClass(h.SHOW), !t)
                        return;
                    if (!r)
                        return void t();
                    e(this._backdrop).one(s.TRANSITION_END, t).emulateTransitionEnd(150)
                } else if (!this._isShown && this._backdrop) {
                    e(this._backdrop).removeClass(h.SHOW);
                    var o = function () {
                        n._removeBackdrop(), t && t()
                    };
                    s.supportsTransitionEnd() && e(this._element).hasClass(h.FADE) ? e(this._backdrop).one(s.TRANSITION_END, o).emulateTransitionEnd(150) : o()
                } else
                    t && t()
            }, u._adjustDialog = function () {
                var t = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, u._resetAdjustments = function () {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, u._checkScrollbar = function () {
                var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, u._setScrollbar = function () {
                var t = this;
                if (this._isBodyOverflowing) {
                    e(c.FIXED_CONTENT).each(function (n, i) {
                        var s = e(i)[0].style.paddingRight, r = e(i).css("padding-right");
                        e(i).data("padding-right", s).css("padding-right", parseFloat(r) + t._scrollbarWidth + "px")
                    }), e(c.STICKY_CONTENT).each(function (n, i) {
                        var s = e(i)[0].style.marginRight, r = e(i).css("margin-right");
                        e(i).data("margin-right", s).css("margin-right", parseFloat(r) - t._scrollbarWidth + "px")
                    }), e(c.NAVBAR_TOGGLER).each(function (n, i) {
                        var s = e(i)[0].style.marginRight, r = e(i).css("margin-right");
                        e(i).data("margin-right", s).css("margin-right", parseFloat(r) + t._scrollbarWidth + "px")
                    });
                    var n = document.body.style.paddingRight, i = e("body").css("padding-right");
                    e("body").data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                }
            }, u._resetScrollbar = function () {
                e(c.FIXED_CONTENT).each(function (t, n) {
                    var i = e(n).data("padding-right");
                    "undefined" != typeof i && e(n).css("padding-right", i).removeData("padding-right")
                }), e(c.STICKY_CONTENT + ", " + c.NAVBAR_TOGGLER).each(function (t, n) {
                    var i = e(n).data("margin-right");
                    "undefined" != typeof i && e(n).css("margin-right", i).removeData("margin-right")
                });
                var t = e("body").data("padding-right");
                "undefined" != typeof t && e("body").css("padding-right", t).removeData("padding-right")
            }, u._getScrollbarWidth = function () {
                var t = document.createElement("div");
                t.className = h.SCROLLBAR_MEASURER, document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t), e
            }, i._jQueryInterface = function (t, n) {
                return this.each(function () {
                    var s = e(this).data("bs.modal"), r = e.extend({}, i.Default, e(this).data(), "object" == typeof t && t);
                    if (s || (s = new i(this, r), e(this).data("bs.modal", s)), "string" == typeof t) {
                        if ("undefined" == typeof s[t])
                            throw new Error('No method named "' + t + '"');
                        s[t](n)
                    } else
                        r.show && s.show(n)
                })
            }, r(i, null, [{key: "VERSION", get: function () {
                        return"4.0.0-beta.2"
                    }}, {key: "Default", get: function () {
                        return o
                    }}]), i
        }();
        return e(document).on(l.CLICK_DATA_API, c.DATA_TOGGLE, function (t) {
            var n, i = this, r = s.getSelectorFromElement(this);
            r && (n = e(r)[0]);
            var o = e(n).data("bs.modal") ? "toggle" : e.extend({}, e(n).data(), e(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
            var a = e(n).one(l.SHOW, function (t) {
                t.isDefaultPrevented() || a.one(l.HIDDEN, function () {
                    e(i).is(":visible") && i.focus()
                })
            });
            u._jQueryInterface.call(e(n), o, this)
        }), e.fn[t] = u._jQueryInterface, e.fn[t].Constructor = u, e.fn[t].noConflict = function () {
            return e.fn[t] = i, u._jQueryInterface
        }, u
    }(), f = function () {
        if ("undefined" == typeof n)
            throw new Error("Bootstrap tooltips require Popper.js (https://popper.js.org)");
        var t = "tooltip", i = ".bs.tooltip", o = e.fn[t], a = new RegExp("(^|\\s)bs-tooltip\\S+", "g"), l = {animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)"}, h = {AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left"}, c = {animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: 0, container: !1, fallbackPlacement: "flip"}, u = {SHOW: "show", OUT: "out"}, d = {HIDE: "hide" + i, HIDDEN: "hidden" + i, SHOW: "show" + i, SHOWN: "shown" + i, INSERTED: "inserted" + i, CLICK: "click" + i, FOCUSIN: "focusin" + i, FOCUSOUT: "focusout" + i, MOUSEENTER: "mouseenter" + i, MOUSELEAVE: "mouseleave" + i}, f = {FADE: "fade", SHOW: "show"}, _ = {TOOLTIP: ".tooltip", TOOLTIP_INNER: ".tooltip-inner", ARROW: ".arrow"}, g = {HOVER: "hover", FOCUS: "focus", CLICK: "click", MANUAL: "manual"}, m = function () {
            function o(t, e) {
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
            }
            var m = o.prototype;
            return m.enable = function () {
                this._isEnabled = !0
            }, m.disable = function () {
                this._isEnabled = !1
            }, m.toggleEnabled = function () {
                this._isEnabled = !this._isEnabled
            }, m.toggle = function (t) {
                if (this._isEnabled)
                    if (t) {
                        var n = this.constructor.DATA_KEY, i = e(t.currentTarget).data(n);
                        i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                    } else {
                        if (e(this.getTipElement()).hasClass(f.SHOW))
                            return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, m.dispose = function () {
                clearTimeout(this._timeout), e.removeData(this.element, this.constructor.DATA_KEY), e(this.element).off(this.constructor.EVENT_KEY), e(this.element).closest(".modal").off("hide.bs.modal"), this.tip && e(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, m.show = function () {
                var t = this;
                if ("none" === e(this.element).css("display"))
                    throw new Error("Please use show on visible elements");
                var i = e.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    e(this.element).trigger(i);
                    var r = e.contains(this.element.ownerDocument.documentElement, this.element);
                    if (i.isDefaultPrevented() || !r)
                        return;
                    var a = this.getTipElement(), l = s.getUID(this.constructor.NAME);
                    a.setAttribute("id", l), this.element.setAttribute("aria-describedby", l), this.setContent(), this.config.animation && e(a).addClass(f.FADE);
                    var h = "function" == typeof this.config.placement ? this.config.placement.call(this, a, this.element) : this.config.placement, c = this._getAttachment(h);
                    this.addAttachmentClass(c);
                    var d = !1 === this.config.container ? document.body : e(this.config.container);
                    e(a).data(this.constructor.DATA_KEY, this), e.contains(this.element.ownerDocument.documentElement, this.tip) || e(a).appendTo(d), e(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, a, {placement: c, modifiers: {offset: {offset: this.config.offset}, flip: {behavior: this.config.fallbackPlacement}, arrow: {element: _.ARROW}}, onCreate: function (e) {
                            e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                        }, onUpdate: function (e) {
                            t._handlePopperPlacementChange(e)
                        }}), e(a).addClass(f.SHOW), "ontouchstart"in document.documentElement && e("body").children().on("mouseover", null, e.noop);
                    var g = function () {
                        t.config.animation && t._fixTransition();
                        var n = t._hoverState;
                        t._hoverState = null, e(t.element).trigger(t.constructor.Event.SHOWN), n === u.OUT && t._leave(null, t)
                    };
                    s.supportsTransitionEnd() && e(this.tip).hasClass(f.FADE) ? e(this.tip).one(s.TRANSITION_END, g).emulateTransitionEnd(o._TRANSITION_DURATION) : g()
                }
            }, m.hide = function (t) {
                var n = this, i = this.getTipElement(), r = e.Event(this.constructor.Event.HIDE), o = function () {
                    n._hoverState !== u.SHOW && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), e(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), t && t()
                };
                e(this.element).trigger(r), r.isDefaultPrevented() || (e(i).removeClass(f.SHOW), "ontouchstart"in document.documentElement && e("body").children().off("mouseover", null, e.noop), this._activeTrigger[g.CLICK] = !1, this._activeTrigger[g.FOCUS] = !1, this._activeTrigger[g.HOVER] = !1, s.supportsTransitionEnd() && e(this.tip).hasClass(f.FADE) ? e(i).one(s.TRANSITION_END, o).emulateTransitionEnd(150) : o(), this._hoverState = "")
            }, m.update = function () {
                null !== this._popper && this._popper.scheduleUpdate()
            }, m.isWithContent = function () {
                return Boolean(this.getTitle())
            }, m.addAttachmentClass = function (t) {
                e(this.getTipElement()).addClass("bs-tooltip-" + t)
            }, m.getTipElement = function () {
                return this.tip = this.tip || e(this.config.template)[0], this.tip
            }, m.setContent = function () {
                var t = e(this.getTipElement());
                this.setElementContent(t.find(_.TOOLTIP_INNER), this.getTitle()), t.removeClass(f.FADE + " " + f.SHOW)
            }, m.setElementContent = function (t, n) {
                var i = this.config.html;
                "object" == typeof n && (n.nodeType || n.jquery) ? i ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text()) : t[i ? "html" : "text"](n)
            }, m.getTitle = function () {
                var t = this.element.getAttribute("data-original-title");
                return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
            }, m._getAttachment = function (t) {
                return h[t.toUpperCase()]
            }, m._setListeners = function () {
                var t = this;
                this.config.trigger.split(" ").forEach(function (n) {
                    if ("click" === n)
                        e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function (e) {
                            return t.toggle(e)
                        });
                    else if (n !== g.MANUAL) {
                        var i = n === g.HOVER ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN, s = n === g.HOVER ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                        e(t.element).on(i, t.config.selector, function (e) {
                            return t._enter(e)
                        }).on(s, t.config.selector, function (e) {
                            return t._leave(e)
                        })
                    }
                    e(t.element).closest(".modal").on("hide.bs.modal", function () {
                        return t.hide()
                    })
                }), this.config.selector ? this.config = e.extend({}, this.config, {trigger: "manual", selector: ""}) : this._fixTitle()
            }, m._fixTitle = function () {
                var t = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, m._enter = function (t, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusin" === t.type ? g.FOCUS : g.HOVER] = !0), e(n.getTipElement()).hasClass(f.SHOW) || n._hoverState === u.SHOW ? n._hoverState = u.SHOW : (clearTimeout(n._timeout), n._hoverState = u.SHOW, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function () {
                    n._hoverState === u.SHOW && n.show()
                }, n.config.delay.show) : n.show())
            }, m._leave = function (t, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusout" === t.type ? g.FOCUS : g.HOVER] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = u.OUT, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function () {
                    n._hoverState === u.OUT && n.hide()
                }, n.config.delay.hide) : n.hide())
            }, m._isWithActiveTrigger = function () {
                for (var t in this._activeTrigger)
                    if (this._activeTrigger[t])
                        return!0;
                return!1
            }, m._getConfig = function (n) {
                return"number" == typeof (n = e.extend({}, this.constructor.Default, e(this.element).data(), n)).delay && (n.delay = {show: n.delay, hide: n.delay}), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), s.typeCheckConfig(t, n, this.constructor.DefaultType), n
            }, m._getDelegateConfig = function () {
                var t = {};
                if (this.config)
                    for (var e in this.config)
                        this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                return t
            }, m._cleanTipClass = function () {
                var t = e(this.getTipElement()), n = t.attr("class").match(a);
                null !== n && n.length > 0 && t.removeClass(n.join(""))
            }, m._handlePopperPlacementChange = function (t) {
                this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
            }, m._fixTransition = function () {
                var t = this.getTipElement(), n = this.config.animation;
                null === t.getAttribute("x-placement") && (e(t).removeClass(f.FADE), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
            }, o._jQueryInterface = function (t) {
                return this.each(function () {
                    var n = e(this).data("bs.tooltip"), i = "object" == typeof t && t;
                    if ((n || !/dispose|hide/.test(t)) && (n || (n = new o(this, i), e(this).data("bs.tooltip", n)), "string" == typeof t)) {
                        if ("undefined" == typeof n[t])
                            throw new Error('No method named "' + t + '"');
                        n[t]()
                    }
                })
            }, r(o, null, [{key: "VERSION", get: function () {
                        return"4.0.0-beta.2"
                    }}, {key: "Default", get: function () {
                        return c
                    }}, {key: "NAME", get: function () {
                        return t
                    }}, {key: "DATA_KEY", get: function () {
                        return"bs.tooltip"
                    }}, {key: "Event", get: function () {
                        return d
                    }}, {key: "EVENT_KEY", get: function () {
                        return i
                    }}, {key: "DefaultType", get: function () {
                        return l
                    }}]), o
        }();
        return e.fn[t] = m._jQueryInterface, e.fn[t].Constructor = m, e.fn[t].noConflict = function () {
            return e.fn[t] = o, m._jQueryInterface
        }, m
    }(), _ = function () {
        var t = "popover", n = ".bs.popover", i = e.fn[t], s = new RegExp("(^|\\s)bs-popover\\S+", "g"), a = e.extend({}, f.Default, {placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}), l = e.extend({}, f.DefaultType, {content: "(string|element|function)"}), h = {FADE: "fade", SHOW: "show"}, c = {TITLE: ".popover-header", CONTENT: ".popover-body"}, u = {HIDE: "hide" + n, HIDDEN: "hidden" + n, SHOW: "show" + n, SHOWN: "shown" + n, INSERTED: "inserted" + n, CLICK: "click" + n, FOCUSIN: "focusin" + n, FOCUSOUT: "focusout" + n, MOUSEENTER: "mouseenter" + n, MOUSELEAVE: "mouseleave" + n}, d = function (i) {
            function d() {
                return i.apply(this, arguments) || this
            }
            o(d, i);
            var f = d.prototype;
            return f.isWithContent = function () {
                return this.getTitle() || this._getContent()
            }, f.addAttachmentClass = function (t) {
                e(this.getTipElement()).addClass("bs-popover-" + t)
            }, f.getTipElement = function () {
                return this.tip = this.tip || e(this.config.template)[0], this.tip
            }, f.setContent = function () {
                var t = e(this.getTipElement());
                this.setElementContent(t.find(c.TITLE), this.getTitle()), this.setElementContent(t.find(c.CONTENT), this._getContent()), t.removeClass(h.FADE + " " + h.SHOW)
            }, f._getContent = function () {
                return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content)
            }, f._cleanTipClass = function () {
                var t = e(this.getTipElement()), n = t.attr("class").match(s);
                null !== n && n.length > 0 && t.removeClass(n.join(""))
            }, d._jQueryInterface = function (t) {
                return this.each(function () {
                    var n = e(this).data("bs.popover"), i = "object" == typeof t ? t : null;
                    if ((n || !/destroy|hide/.test(t)) && (n || (n = new d(this, i), e(this).data("bs.popover", n)), "string" == typeof t)) {
                        if ("undefined" == typeof n[t])
                            throw new Error('No method named "' + t + '"');
                        n[t]()
                    }
                })
            }, r(d, null, [{key: "VERSION", get: function () {
                        return"4.0.0-beta.2"
                    }}, {key: "Default", get: function () {
                        return a
                    }}, {key: "NAME", get: function () {
                        return t
                    }}, {key: "DATA_KEY", get: function () {
                        return"bs.popover"
                    }}, {key: "Event", get: function () {
                        return u
                    }}, {key: "EVENT_KEY", get: function () {
                        return n
                    }}, {key: "DefaultType", get: function () {
                        return l
                    }}]), d
        }(f);
        return e.fn[t] = d._jQueryInterface, e.fn[t].Constructor = d, e.fn[t].noConflict = function () {
            return e.fn[t] = i, d._jQueryInterface
        }, d
    }(), g = function () {
        var t = "scrollspy", n = e.fn[t], i = {offset: 10, method: "auto", target: ""}, o = {offset: "number", method: "string", target: "(string|element)"}, a = {ACTIVATE: "activate.bs.scrollspy", SCROLL: "scroll.bs.scrollspy", LOAD_DATA_API: "load.bs.scrollspy.data-api"}, l = {DROPDOWN_ITEM: "dropdown-item", DROPDOWN_MENU: "dropdown-menu", ACTIVE: "active"}, h = {DATA_SPY: '[data-spy="scroll"]', ACTIVE: ".active", NAV_LIST_GROUP: ".nav, .list-group", NAV_LINKS: ".nav-link", NAV_ITEMS: ".nav-item", LIST_ITEMS: ".list-group-item", DROPDOWN: ".dropdown", DROPDOWN_ITEMS: ".dropdown-item", DROPDOWN_TOGGLE: ".dropdown-toggle"}, c = {OFFSET: "offset", POSITION: "position"}, u = function () {
            function n(t, n) {
                var i = this;
                this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(n), this._selector = this._config.target + " " + h.NAV_LINKS + "," + this._config.target + " " + h.LIST_ITEMS + "," + this._config.target + " " + h.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, e(this._scrollElement).on(a.SCROLL, function (t) {
                    return i._process(t)
                }), this.refresh(), this._process()
            }
            var u = n.prototype;
            return u.refresh = function () {
                var t = this, n = this._scrollElement !== this._scrollElement.window ? c.POSITION : c.OFFSET, i = "auto" === this._config.method ? n : this._config.method, r = i === c.POSITION ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), e.makeArray(e(this._selector)).map(function (t) {
                    var n, o = s.getSelectorFromElement(t);
                    if (o && (n = e(o)[0]), n) {
                        var a = n.getBoundingClientRect();
                        if (a.width || a.height)
                            return[e(n)[i]().top + r, o]
                    }
                    return null
                }).filter(function (t) {
                    return t
                }).sort(function (t, e) {
                    return t[0] - e[0]
                }).forEach(function (e) {
                    t._offsets.push(e[0]), t._targets.push(e[1])
                })
            }, u.dispose = function () {
                e.removeData(this._element, "bs.scrollspy"), e(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, u._getConfig = function (n) {
                if ("string" != typeof (n = e.extend({}, i, n)).target) {
                    var r = e(n.target).attr("id");
                    r || (r = s.getUID(t), e(n.target).attr("id", r)), n.target = "#" + r
                }
                return s.typeCheckConfig(t, n, o), n
            }, u._getScrollTop = function () {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, u._getScrollHeight = function () {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, u._getOffsetHeight = function () {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, u._process = function () {
                var t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(), n = this._config.offset + e - this._getOffsetHeight();
                if (this._scrollHeight !== e && this.refresh(), t >= n) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
                        return this._activeTarget = null, void this._clear();
                    for (var s = this._offsets.length; s--; )
                        this._activeTarget !== this._targets[s] && t >= this._offsets[s] && ("undefined" == typeof this._offsets[s + 1] || t < this._offsets[s + 1]) && this._activate(this._targets[s])
                }
            }, u._activate = function (t) {
                this._activeTarget = t, this._clear();
                var n = this._selector.split(",");
                n = n.map(function (e) {
                    return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                });
                var i = e(n.join(","));
                i.hasClass(l.DROPDOWN_ITEM) ? (i.closest(h.DROPDOWN).find(h.DROPDOWN_TOGGLE).addClass(l.ACTIVE), i.addClass(l.ACTIVE)) : (i.addClass(l.ACTIVE), i.parents(h.NAV_LIST_GROUP).prev(h.NAV_LINKS + ", " + h.LIST_ITEMS).addClass(l.ACTIVE), i.parents(h.NAV_LIST_GROUP).prev(h.NAV_ITEMS).children(h.NAV_LINKS).addClass(l.ACTIVE)), e(this._scrollElement).trigger(a.ACTIVATE, {relatedTarget: t})
            }, u._clear = function () {
                e(this._selector).filter(h.ACTIVE).removeClass(l.ACTIVE)
            }, n._jQueryInterface = function (t) {
                return this.each(function () {
                    var i = e(this).data("bs.scrollspy"), s = "object" == typeof t && t;
                    if (i || (i = new n(this, s), e(this).data("bs.scrollspy", i)), "string" == typeof t) {
                        if ("undefined" == typeof i[t])
                            throw new Error('No method named "' + t + '"');
                        i[t]()
                    }
                })
            }, r(n, null, [{key: "VERSION", get: function () {
                        return"4.0.0-beta.2"
                    }}, {key: "Default", get: function () {
                        return i
                    }}]), n
        }();
        return e(window).on(a.LOAD_DATA_API, function () {
            for (var t = e.makeArray(e(h.DATA_SPY)), n = t.length; n--; ) {
                var i = e(t[n]);
                u._jQueryInterface.call(i, i.data())
            }
        }), e.fn[t] = u._jQueryInterface, e.fn[t].Constructor = u, e.fn[t].noConflict = function () {
            return e.fn[t] = n, u._jQueryInterface
        }, u
    }(), m = function () {
        var t = e.fn.tab, n = {HIDE: "hide.bs.tab", HIDDEN: "hidden.bs.tab", SHOW: "show.bs.tab", SHOWN: "shown.bs.tab", CLICK_DATA_API: "click.bs.tab.data-api"}, i = {DROPDOWN_MENU: "dropdown-menu", ACTIVE: "active", DISABLED: "disabled", FADE: "fade", SHOW: "show"}, o = {DROPDOWN: ".dropdown", NAV_LIST_GROUP: ".nav, .list-group", ACTIVE: ".active", ACTIVE_UL: "> li > .active", DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', DROPDOWN_TOGGLE: ".dropdown-toggle", DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"}, a = function () {
            function t(t) {
                this._element = t
            }
            var a = t.prototype;
            return a.show = function () {
                var t = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(i.ACTIVE) || e(this._element).hasClass(i.DISABLED))) {
                    var r, a, l = e(this._element).closest(o.NAV_LIST_GROUP)[0], h = s.getSelectorFromElement(this._element);
                    if (l) {
                        var c = "UL" === l.nodeName ? o.ACTIVE_UL : o.ACTIVE;
                        a = e.makeArray(e(l).find(c)), a = a[a.length - 1]
                    }
                    var u = e.Event(n.HIDE, {relatedTarget: this._element}), d = e.Event(n.SHOW, {relatedTarget: a});
                    if (a && e(a).trigger(u), e(this._element).trigger(d), !d.isDefaultPrevented() && !u.isDefaultPrevented()) {
                        h && (r = e(h)[0]), this._activate(this._element, l);
                        var f = function () {
                            var i = e.Event(n.HIDDEN, {relatedTarget: t._element}), s = e.Event(n.SHOWN, {relatedTarget: a});
                            e(a).trigger(i), e(t._element).trigger(s)
                        };
                        r ? this._activate(r, r.parentNode, f) : f()
                    }
                }
            }, a.dispose = function () {
                e.removeData(this._element, "bs.tab"), this._element = null
            }, a._activate = function (t, n, r) {
                var a, l = this, h = (a = "UL" === n.nodeName ? e(n).find(o.ACTIVE_UL) : e(n).children(o.ACTIVE))[0], c = r && s.supportsTransitionEnd() && h && e(h).hasClass(i.FADE), u = function () {
                    return l._transitionComplete(t, h, c, r)
                };
                h && c ? e(h).one(s.TRANSITION_END, u).emulateTransitionEnd(150) : u(), h && e(h).removeClass(i.SHOW)
            }, a._transitionComplete = function (t, n, r, a) {
                if (n) {
                    e(n).removeClass(i.ACTIVE);
                    var l = e(n.parentNode).find(o.DROPDOWN_ACTIVE_CHILD)[0];
                    l && e(l).removeClass(i.ACTIVE), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                }
                if (e(t).addClass(i.ACTIVE), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), r ? (s.reflow(t), e(t).addClass(i.SHOW)) : e(t).removeClass(i.FADE), t.parentNode && e(t.parentNode).hasClass(i.DROPDOWN_MENU)) {
                    var h = e(t).closest(o.DROPDOWN)[0];
                    h && e(h).find(o.DROPDOWN_TOGGLE).addClass(i.ACTIVE), t.setAttribute("aria-expanded", !0)
                }
                a && a()
            }, t._jQueryInterface = function (n) {
                return this.each(function () {
                    var i = e(this), s = i.data("bs.tab");
                    if (s || (s = new t(this), i.data("bs.tab", s)), "string" == typeof n) {
                        if ("undefined" == typeof s[n])
                            throw new Error('No method named "' + n + '"');
                        s[n]()
                    }
                })
            }, r(t, null, [{key: "VERSION", get: function () {
                        return"4.0.0-beta.2"
                    }}]), t
        }();
        return e(document).on(n.CLICK_DATA_API, o.DATA_TOGGLE, function (t) {
            t.preventDefault(), a._jQueryInterface.call(e(this), "show")
        }), e.fn.tab = a._jQueryInterface, e.fn.tab.Constructor = a, e.fn.tab.noConflict = function () {
            return e.fn.tab = t, a._jQueryInterface
        }, a
    }();
    return function () {
        if ("undefined" == typeof e)
            throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var t = e.fn.jquery.split(" ")[0].split(".");
        if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4)
            throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(), t.Util = s, t.Alert = a, t.Button = l, t.Carousel = h, t.Collapse = c, t.Dropdown = u, t.Modal = d, t.Popover = _, t.Scrollspy = g, t.Tab = m, t.Tooltip = f, t
}({}, $, Popper);

!function (i, t) {
    var e = function (i, e) {
        this.$fileInput = t(i), this.options = e, this.userLanguage = "en", this.$fileselect = t(this), this.metadata = this.$fileInput.data(), this.$inputGroup = t("<div>").addClass("input-group"), this.$inputGroupBtn = t("<label>").addClass("input-group-btn"), this.$browseBtn = t("<span>"), this.$labelInput = t("<input>").attr("type", "text").attr("readonly", !0).addClass("form-control"), this.translations = {en: {browse: "Browse", rules: {numberOfFiles: "The number of uploadable files is limited to [num] file(s)", fileExtensions: "The files are restricted to following file extensions: [ext]", fileSize: "The file size is limited to [size]"}}, de: {browse: "Durchsuchen", rules: {numberOfFiles: "Die Anzahl der hochladbaren Dateien ist limitiert auf [num] Datei(en)", fileExtensions: "Die Dateien sind eingeschränkt auf folgende Dateierweiterungen: [ext]", fileSize: "Die Grösse ist eingeschränkt auf [size] pro Datei"}}}, this.init()
    };
    e.prototype = {defaults: {browseBtnClass: "btn btn-primary", browserBtnPosition: "right", limit: !1, extensions: !1, allowedFileSize: !1, allowedFileExtensions: !1, allowedNumberOfFiles: !1, language: !1, validationCallback: function (i, t) {
                alert(i)
            }}, init: function () {
            return this.config = this.loadConfig(), this.translations = this.loadTranslation(), this.$fileInput.hide().after(this.$inputGroup), "left" === this.config.browseBtnPosition ? this.$inputGroup.append(this.$inputGroupBtn, this.$labelInput) : this.$inputGroup.append(this.$labelInput, this.$inputGroupBtn), this.$inputGroupBtn.append(this.$browseBtn).append(this.$fileInput).css("margin-bottom", 0), this.$browseBtn.addClass(this.config.browseBtnClass).text(this.translations.browse), this.$fileInput.on("change", t.proxy(this.changeEvent, this)), t(this)
        }, changeEvent: function (i) {
            this.$fileInput.trigger("bs.fs.change", [this]);
            var e = this.$fileInput[0].files, s = t.map(e, function (i) {
                return i.name
            }).join(", "), n = !1;
            return this.validateNumberOfFiles(e) && this.valiateFileExtensions(e) && this.validateFileSize(e) ? (this.$labelInput.val(s), n = !0) : this.$fileInput.val(null), this.$fileInput.trigger("bs.fs.changed", [this]), n
        }, loadConfig: function () {
            var i = t.extend({}, this.defaults, this.options, this.metadata);
            return"string" == typeof i.allowedFileExtensions && (i.allowedFileExtensions = i.allowedFileExtensions.split(",")), i
        }, loadTranslation: function () {
            var i = this.config.language || navigator.language || navigator.userLanguage, e = t.map(this.translations, function (i, t) {
                return t
            });
            return t.inArray(i, e) >= 0 ? this.userLanguage = i : console.warn("Current user language has no translation. Switched to english as default language."), this.translations[i]
        }, validateNumberOfFiles: function (i) {
            this.$fileInput.trigger("bs.fs.validate", [this]).trigger("bs.fs.number-of-files-validate", [this]);
            var t = !0;
            return this.config.allowedNumberOfFiles && i.length > parseInt(this.config.allowedNumberOfFiles) && (this.config.validationCallback(this.translations.rules.numberOfFiles.replace("[num]", this.config.allowedNumberOfFiles), "allowedNumberOfFiles", this), t = !1), this.$fileInput.trigger("bs.fs.validated", [this]).trigger("bs.fs.number-of-files-validated", [this]), t
        }, valiateFileExtensions: function (i) {
            this.$fileInput.trigger("bs.fs.validate", [this]).trigger("bs.fs.file-extensions-validate", [this]);
            var e = !0;
            return this.config.allowedFileExtensions && t.each(i, t.proxy(function (i, s) {
                var n = s.name.replace(/^.*\./, "").toLowerCase();
                if (-1 === t.inArray(n, this.config.allowedFileExtensions))
                    return this.config.validationCallback(this.translations.rules.fileExtensions.replace("[ext]", this.config.allowedFileExtensions.join(", ")), "allowedFileExtensions", this), void(e = !1)
            }, this)), this.$fileInput.trigger("bs.fs.validated", [this]).trigger("bs.fs.file-extensions-validated", [this]), e
        }, validateFileSize: function (i) {
            this.$fileInput.trigger("bs.fs.validate", [this]).trigger("bs.fs.file-size-validate", [this]);
            var e = !0;
            return this.config.allowedFileSize && t.each(i, t.proxy(function (i, t) {
                if (t.size > this.config.allowedFileSize)
                    return this.config.validationCallback(this.translations.rules.fileSize.replace("[size]", Math.round(this.config.allowedFileSize / 1024 / 1024) + "MB"), "allowedFileSize", this), void(e = !1)
            }, this)), this.$fileInput.trigger("bs.fs.validated", [this]).trigger("bs.fs.file-size-validated", [this]), e
        }}, e.defaults = e.prototype.defaults, t.fn.fileselect = function (i) {
        return this.each(function () {
            new e(this, i)
        }), this
    }, i.Fileselect = e
}(window, jQuery);
var DateFormatter;
!function () {
    "use strict";
    var e, t, a, r, n, o;
    n = 864e5, o = 3600, e = function (e, t) {
        return"string" == typeof e && "string" == typeof t && e.toLowerCase() === t.toLowerCase()
    }, t = function (e, a, r) {
        var n = r || "0", o = e.toString();
        return o.length < a ? t(n + o, a) : o
    }, a = function (e) {
        var t, r;
        for (e = e || {}, t = 1; t < arguments.length; t++)
            if (r = arguments[t])
                for (var n in r)
                    r.hasOwnProperty(n) && ("object" == typeof r[n] ? a(e[n], r[n]) : e[n] = r[n]);
        return e
    }, r = {dateSettings: {days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], meridiem: ["AM", "PM"], ordinal: function (e) {
                var t = e % 10, a = {1: "st", 2: "nd", 3: "rd"};
                return 1 !== Math.floor(e % 100 / 10) && a[t] ? a[t] : "th"
            }}, separators: /[ \-+\/\.T:@]/g, validParts: /[dDjlNSwzWFmMntLoYyaABgGhHisueTIOPZcrU]/g, intParts: /[djwNzmnyYhHgGis]/g, tzParts: /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g, tzClip: /[^-+\dA-Z]/g}, DateFormatter = function (e) {
        var t = this, n = a(r, e);
        t.dateSettings = n.dateSettings, t.separators = n.separators, t.validParts = n.validParts, t.intParts = n.intParts, t.tzParts = n.tzParts, t.tzClip = n.tzClip
    }, DateFormatter.prototype = {constructor: DateFormatter, parseDate: function (t, a) {
            var r, n, o, i, s, d, u, l, f, c, m = this, h = !1, g = !1, p = m.dateSettings, y = {date: null, year: null, month: null, day: null, hour: 0, min: 0, sec: 0};
            if (!t)
                return void 0;
            if (t instanceof Date)
                return t;
            if ("number" == typeof t)
                return new Date(t);
            if ("U" === a)
                return o = parseInt(t), o ? new Date(1e3 * o) : t;
            if ("string" != typeof t)
                return"";
            if (r = a.match(m.validParts), !r || 0 === r.length)
                throw new Error("Invalid date format definition.");
            for (n = t.replace(m.separators, "\x00").split("\x00"), o = 0; o < n.length; o++)
                switch (i = n[o], s = parseInt(i), r[o]) {
                    case"y":
                    case"Y":
                        f = i.length, 2 === f ? y.year = parseInt((70 > s ? "20" : "19") + i) : 4 === f && (y.year = s), h = !0;
                        break;
                        case"m":
                    case"n":
                    case"M":
                    case"F":
                        isNaN(i) ? (d = p.monthsShort.indexOf(i), d > -1 && (y.month = d + 1), d = p.months.indexOf(i), d > -1 && (y.month = d + 1)) : s >= 1 && 12 >= s && (y.month = s), h = !0;
                        break;
                        case"d":
                    case"j":
                        s >= 1 && 31 >= s && (y.day = s), h = !0;
                        break;
                        case"g":
                    case"h":
                        u = r.indexOf("a") > -1 ? r.indexOf("a") : r.indexOf("A") > -1 ? r.indexOf("A") : -1, c = n[u], u > -1 ? (l = e(c, p.meridiem[0]) ? 0 : e(c, p.meridiem[1]) ? 12 : -1, s >= 1 && 12 >= s && l > -1 ? y.hour = s + l - 1 : s >= 0 && 23 >= s && (y.hour = s)) : s >= 0 && 23 >= s && (y.hour = s), g = !0;
                        break;
                        case"G":
                    case"H":
                        s >= 0 && 23 >= s && (y.hour = s), g = !0;
                        break;
                        case"i":
                        s >= 0 && 59 >= s && (y.min = s), g = !0;
                        break;
                        case"s":
                        s >= 0 && 59 >= s && (y.sec = s), g = !0
                    }
            if (h === !0 && y.year && y.month && y.day)
                y.date = new Date(y.year, y.month - 1, y.day, y.hour, y.min, y.sec, 0);
            else {
                if (g !== !0)
                    return!1;
                y.date = new Date(0, 0, 0, y.hour, y.min, y.sec, 0)
            }
            return y.date
        }, guessDate: function (e, t) {
            if ("string" != typeof e)
                return e;
            var a, r, n, o, i = this, s = e.replace(i.separators, "\x00").split("\x00"), d = /^[djmn]/g, u = t.match(i.validParts), l = new Date, f = 0;
            if (!d.test(u[0]))
                return e;
            for (r = 0; r < s.length; r++) {
                switch (f = 2, n = s[r], o = parseInt(n.substr(0, 2)), r) {
                    case 0:
                        "m" === u[0] || "n" === u[0] ? l.setMonth(o - 1) : l.setDate(o);
                        break;
                        case 1:
                        "m" === u[0] || "n" === u[0] ? l.setDate(o) : l.setMonth(o - 1);
                        break;
                        case 2:
                        a = l.getFullYear(), n.length < 4 ? (l.setFullYear(parseInt(a.toString().substr(0, 4 - n.length) + n)), f = n.length) : (l.setFullYear = parseInt(n.substr(0, 4)), f = 4);
                        break;
                        case 3:
                        l.setHours(o);
                        break;
                        case 4:
                        l.setMinutes(o);
                        break;
                        case 5:
                        l.setSeconds(o)
                    }
                n.substr(f).length > 0 && s.splice(r + 1, 0, n.substr(f))
            }
            return l
        }, parseFormat: function (e, a) {
            var r, i = this, s = i.dateSettings, d = /\\?(.?)/gi, u = function (e, t) {
                return r[e] ? r[e]() : t
            };
            return r = {d: function () {
                    return t(r.j(), 2)
                }, D: function () {
                    return s.daysShort[r.w()]
                }, j: function () {
                    return a.getDate()
                }, l: function () {
                    return s.days[r.w()]
                }, N: function () {
                    return r.w() || 7
                }, w: function () {
                    return a.getDay()
                }, z: function () {
                    var e = new Date(r.Y(), r.n() - 1, r.j()), t = new Date(r.Y(), 0, 1);
                    return Math.round((e - t) / n)
                }, W: function () {
                    var e = new Date(r.Y(), r.n() - 1, r.j() - r.N() + 3), a = new Date(e.getFullYear(), 0, 4);
                    return t(1 + Math.round((e - a) / n / 7), 2)
                }, F: function () {
                    return s.months[a.getMonth()]
                }, m: function () {
                    return t(r.n(), 2)
                }, M: function () {
                    return s.monthsShort[a.getMonth()]
                }, n: function () {
                    return a.getMonth() + 1
                }, t: function () {
                    return new Date(r.Y(), r.n(), 0).getDate()
                }, L: function () {
                    var e = r.Y();
                    return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0 ? 1 : 0
                }, o: function () {
                    var e = r.n(), t = r.W(), a = r.Y();
                    return a + (12 === e && 9 > t ? 1 : 1 === e && t > 9 ? -1 : 0)
                }, Y: function () {
                    return a.getFullYear()
                }, y: function () {
                    return r.Y().toString().slice(-2)
                }, a: function () {
                    return r.A().toLowerCase()
                }, A: function () {
                    var e = r.G() < 12 ? 0 : 1;
                    return s.meridiem[e]
                }, B: function () {
                    var e = a.getUTCHours() * o, r = 60 * a.getUTCMinutes(), n = a.getUTCSeconds();
                    return t(Math.floor((e + r + n + o) / 86.4) % 1e3, 3)
                }, g: function () {
                    return r.G() % 12 || 12
                }, G: function () {
                    return a.getHours()
                }, h: function () {
                    return t(r.g(), 2)
                }, H: function () {
                    return t(r.G(), 2)
                }, i: function () {
                    return t(a.getMinutes(), 2)
                }, s: function () {
                    return t(a.getSeconds(), 2)
                }, u: function () {
                    return t(1e3 * a.getMilliseconds(), 6)
                }, e: function () {
                    var e = /\((.*)\)/.exec(String(a))[1];
                    return e || "Coordinated Universal Time"
                }, T: function () {
                    var e = (String(a).match(i.tzParts) || [""]).pop().replace(i.tzClip, "");
                    return e || "UTC"
                }, I: function () {
                    var e = new Date(r.Y(), 0), t = Date.UTC(r.Y(), 0), a = new Date(r.Y(), 6), n = Date.UTC(r.Y(), 6);
                    return e - t !== a - n ? 1 : 0
                }, O: function () {
                    var e = a.getTimezoneOffset(), r = Math.abs(e);
                    return(e > 0 ? "-" : "+") + t(100 * Math.floor(r / 60) + r % 60, 4)
                }, P: function () {
                    var e = r.O();
                    return e.substr(0, 3) + ":" + e.substr(3, 2)
                }, Z: function () {
                    return 60 * -a.getTimezoneOffset()
                }, c: function () {
                    return"Y-m-d\\TH:i:sP".replace(d, u)
                }, r: function () {
                    return"D, d M Y H:i:s O".replace(d, u)
                }, U: function () {
                    return a.getTime() / 1e3 || 0
                }}, u(e, e)
        }, formatDate: function (e, t) {
            var a, r, n, o, i, s = this, d = "";
            if ("string" == typeof e && (e = s.parseDate(e, t), e === !1))
                return!1;
            if (e instanceof Date) {
                for (n = t.length, a = 0; n > a; a++)
                    i = t.charAt(a), "S" !== i && (o = s.parseFormat(i, e), a !== n - 1 && s.intParts.test(i) && "S" === t.charAt(a + 1) && (r = parseInt(o), o += s.dateSettings.ordinal(r)), d += o);
                return d
            }
            return""
        }}
}(), function (e) {
    "function" == typeof define && define.amd ? define(["jquery", "jquery-mousewheel"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
}(function (e) {
    "use strict";
    function t(e, t, a) {
        this.date = e, this.desc = t, this.style = a
    }
    var a = {i18n: {ar: {months: ["كانون الثاني", "شباط", "آذار", "نيسان", "مايو", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"], dayOfWeekShort: ["ن", "ث", "ع", "خ", "ج", "س", "ح"], dayOfWeek: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت", "الأحد"]}, ro: {months: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"], dayOfWeekShort: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "Sâ"], dayOfWeek: ["Duminică", "Luni", "Marţi", "Miercuri", "Joi", "Vineri", "Sâmbătă"]}, id: {months: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"], dayOfWeekShort: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"], dayOfWeek: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]}, is: {months: ["Janúar", "Febrúar", "Mars", "Apríl", "Maí", "Júní", "Júlí", "Ágúst", "September", "Október", "Nóvember", "Desember"], dayOfWeekShort: ["Sun", "Mán", "Þrið", "Mið", "Fim", "Fös", "Lau"], dayOfWeek: ["Sunnudagur", "Mánudagur", "Þriðjudagur", "Miðvikudagur", "Fimmtudagur", "Föstudagur", "Laugardagur"]}, bg: {months: ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"], dayOfWeekShort: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"], dayOfWeek: ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"]}, fa: {months: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"], dayOfWeekShort: ["یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"], dayOfWeek: ["یک‌شنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه", "یک‌شنبه"]}, ru: {months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"], dayOfWeekShort: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"], dayOfWeek: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]}, uk: {months: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"], dayOfWeekShort: ["Ндл", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Сбт"], dayOfWeek: ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"]}, en: {months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], dayOfWeekShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]}, el: {months: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"], dayOfWeekShort: ["Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"], dayOfWeek: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"]}, de: {months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"], dayOfWeekShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"], dayOfWeek: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]}, nl: {months: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"], dayOfWeekShort: ["zo", "ma", "di", "wo", "do", "vr", "za"], dayOfWeek: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"]}, tr: {months: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"], dayOfWeekShort: ["Paz", "Pts", "Sal", "Çar", "Per", "Cum", "Cts"], dayOfWeek: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]}, fr: {months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"], dayOfWeekShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"], dayOfWeek: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]}, es: {months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"], dayOfWeekShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"], dayOfWeek: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]}, th: {months: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"], dayOfWeekShort: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."], dayOfWeek: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัส", "ศุกร์", "เสาร์", "อาทิตย์"]}, pl: {months: ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"], dayOfWeekShort: ["nd", "pn", "wt", "śr", "cz", "pt", "sb"], dayOfWeek: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"]}, pt: {months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], dayOfWeekShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"], dayOfWeek: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]}, ch: {months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], dayOfWeekShort: ["日", "一", "二", "三", "四", "五", "六"]}, se: {months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"], dayOfWeekShort: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"]}, kr: {months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"], dayOfWeekShort: ["일", "월", "화", "수", "목", "금", "토"], dayOfWeek: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]}, it: {months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"], dayOfWeekShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"], dayOfWeek: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"]}, da: {months: ["January", "Februar", "Marts", "April", "Maj", "Juni", "July", "August", "September", "Oktober", "November", "December"], dayOfWeekShort: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"], dayOfWeek: ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"]}, no: {months: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"], dayOfWeekShort: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"], dayOfWeek: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"]}, ja: {months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"], dayOfWeekShort: ["日", "月", "火", "水", "木", "金", "土"], dayOfWeek: ["日曜", "月曜", "火曜", "水曜", "木曜", "金曜", "土曜"]}, vi: {months: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"], dayOfWeekShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"], dayOfWeek: ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"]}, sl: {months: ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"], dayOfWeekShort: ["Ned", "Pon", "Tor", "Sre", "Čet", "Pet", "Sob"], dayOfWeek: ["Nedelja", "Ponedeljek", "Torek", "Sreda", "Četrtek", "Petek", "Sobota"]}, cs: {months: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"], dayOfWeekShort: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"]}, hu: {months: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"], dayOfWeekShort: ["Va", "Hé", "Ke", "Sze", "Cs", "Pé", "Szo"], dayOfWeek: ["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"]}, az: {months: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"], dayOfWeekShort: ["B", "Be", "Ça", "Ç", "Ca", "C", "Ş"], dayOfWeek: ["Bazar", "Bazar ertəsi", "Çərşənbə axşamı", "Çərşənbə", "Cümə axşamı", "Cümə", "Şənbə"]}, bs: {months: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"], dayOfWeekShort: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"], dayOfWeek: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"]}, ca: {months: ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"], dayOfWeekShort: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"], dayOfWeek: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"]}, "en-GB": {months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], dayOfWeekShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]}, et: {months: ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"], dayOfWeekShort: ["P", "E", "T", "K", "N", "R", "L"], dayOfWeek: ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"]}, eu: {months: ["Urtarrila", "Otsaila", "Martxoa", "Apirila", "Maiatza", "Ekaina", "Uztaila", "Abuztua", "Iraila", "Urria", "Azaroa", "Abendua"], dayOfWeekShort: ["Ig.", "Al.", "Ar.", "Az.", "Og.", "Or.", "La."], dayOfWeek: ["Igandea", "Astelehena", "Asteartea", "Asteazkena", "Osteguna", "Ostirala", "Larunbata"]}, fi: {months: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"], dayOfWeekShort: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"], dayOfWeek: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"]}, gl: {months: ["Xan", "Feb", "Maz", "Abr", "Mai", "Xun", "Xul", "Ago", "Set", "Out", "Nov", "Dec"], dayOfWeekShort: ["Dom", "Lun", "Mar", "Mer", "Xov", "Ven", "Sab"], dayOfWeek: ["Domingo", "Luns", "Martes", "Mércores", "Xoves", "Venres", "Sábado"]}, hr: {months: ["Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"], dayOfWeekShort: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"], dayOfWeek: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"]}, ko: {months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"], dayOfWeekShort: ["일", "월", "화", "수", "목", "금", "토"], dayOfWeek: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]}, lt: {months: ["Sausio", "Vasario", "Kovo", "Balandžio", "Gegužės", "Birželio", "Liepos", "Rugpjūčio", "Rugsėjo", "Spalio", "Lapkričio", "Gruodžio"], dayOfWeekShort: ["Sek", "Pir", "Ant", "Tre", "Ket", "Pen", "Šeš"], dayOfWeek: ["Sekmadienis", "Pirmadienis", "Antradienis", "Trečiadienis", "Ketvirtadienis", "Penktadienis", "Šeštadienis"]}, lv: {months: ["Janvāris", "Februāris", "Marts", "Aprīlis ", "Maijs", "Jūnijs", "Jūlijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"], dayOfWeekShort: ["Sv", "Pr", "Ot", "Tr", "Ct", "Pk", "St"], dayOfWeek: ["Svētdiena", "Pirmdiena", "Otrdiena", "Trešdiena", "Ceturtdiena", "Piektdiena", "Sestdiena"]}, mk: {months: ["јануари", "февруари", "март", "април", "мај", "јуни", "јули", "август", "септември", "октомври", "ноември", "декември"], dayOfWeekShort: ["нед", "пон", "вто", "сре", "чет", "пет", "саб"], dayOfWeek: ["Недела", "Понеделник", "Вторник", "Среда", "Четврток", "Петок", "Сабота"]}, mn: {months: ["1-р сар", "2-р сар", "3-р сар", "4-р сар", "5-р сар", "6-р сар", "7-р сар", "8-р сар", "9-р сар", "10-р сар", "11-р сар", "12-р сар"], dayOfWeekShort: ["Дав", "Мяг", "Лха", "Пүр", "Бсн", "Бям", "Ням"], dayOfWeek: ["Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан", "Бямба", "Ням"]}, "pt-BR": {months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], dayOfWeekShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"], dayOfWeek: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]}, sk: {months: ["Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"], dayOfWeekShort: ["Ne", "Po", "Ut", "St", "Št", "Pi", "So"], dayOfWeek: ["Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"]}, sq: {months: ["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "Nëntor", "Dhjetor"], dayOfWeekShort: ["Die", "Hën", "Mar", "Mër", "Enj", "Pre", "Shtu"], dayOfWeek: ["E Diel", "E Hënë", "E Martē", "E Mërkurë", "E Enjte", "E Premte", "E Shtunë"]}, "sr-YU": {months: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"], dayOfWeekShort: ["Ned", "Pon", "Uto", "Sre", "čet", "Pet", "Sub"], dayOfWeek: ["Nedelja", "Ponedeljak", "Utorak", "Sreda", "Četvrtak", "Petak", "Subota"]}, sr: {months: ["јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", "децембар"], dayOfWeekShort: ["нед", "пон", "уто", "сре", "чет", "пет", "суб"], dayOfWeek: ["Недеља", "Понедељак", "Уторак", "Среда", "Четвртак", "Петак", "Субота"]}, sv: {months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"], dayOfWeekShort: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"], dayOfWeek: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"]}, "zh-TW": {months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], dayOfWeekShort: ["日", "一", "二", "三", "四", "五", "六"], dayOfWeek: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]}, zh: {months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], dayOfWeekShort: ["日", "一", "二", "三", "四", "五", "六"], dayOfWeek: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]}, he: {months: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"], dayOfWeekShort: ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "שבת"], dayOfWeek: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת", "ראשון"]}, hy: {months: ["Հունվար", "Փետրվար", "Մարտ", "Ապրիլ", "Մայիս", "Հունիս", "Հուլիս", "Օգոստոս", "Սեպտեմբեր", "Հոկտեմբեր", "Նոյեմբեր", "Դեկտեմբեր"], dayOfWeekShort: ["Կի", "Երկ", "Երք", "Չոր", "Հնգ", "Ուրբ", "Շբթ"], dayOfWeek: ["Կիրակի", "Երկուշաբթի", "Երեքշաբթի", "Չորեքշաբթի", "Հինգշաբթի", "Ուրբաթ", "Շաբաթ"]}, kg: {months: ["Үчтүн айы", "Бирдин айы", "Жалган Куран", "Чын Куран", "Бугу", "Кулжа", "Теке", "Баш Оона", "Аяк Оона", "Тогуздун айы", "Жетинин айы", "Бештин айы"], dayOfWeekShort: ["Жек", "Дүй", "Шей", "Шар", "Бей", "Жум", "Ише"], dayOfWeek: ["Жекшемб", "Дүйшөмб", "Шейшемб", "Шаршемб", "Бейшемби", "Жума", "Ишенб"]}, rm: {months: ["Schaner", "Favrer", "Mars", "Avrigl", "Matg", "Zercladur", "Fanadur", "Avust", "Settember", "October", "November", "December"], dayOfWeekShort: ["Du", "Gli", "Ma", "Me", "Gie", "Ve", "So"], dayOfWeek: ["Dumengia", "Glindesdi", "Mardi", "Mesemna", "Gievgia", "Venderdi", "Sonda"]}, ka: {months: ["იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი", "ივლისი", "აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი"], dayOfWeekShort: ["კვ", "ორშ", "სამშ", "ოთხ", "ხუთ", "პარ", "შაბ"], dayOfWeek: ["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"]}}, value: "", rtl: !1, format: "Y/m/d H:i", formatTime: "H:i", formatDate: "Y/m/d", startDate: !1, step: 60, monthChangeSpinner: !0, closeOnDateSelect: !1, closeOnTimeSelect: !0, closeOnWithoutClick: !0, closeOnInputClick: !0, timepicker: !0, datepicker: !0, weeks: !1, defaultTime: !1, defaultDate: !1, minDate: !1, maxDate: !1, minTime: !1, maxTime: !1, disabledMinTime: !1, disabledMaxTime: !1, allowTimes: [], opened: !1, initTime: !0, inline: !1, theme: "", onSelectDate: function () {}, onSelectTime: function () {}, onChangeMonth: function () {}, onGetWeekOfYear: function () {}, onChangeYear: function () {}, onChangeDateTime: function () {}, onShow: function () {}, onClose: function () {}, onGenerate: function () {}, withoutCopyright: !0, inverseButton: !1, hours12: !1, next: "xdsoft_next", prev: "xdsoft_prev", dayOfWeekStart: 0, parentID: "body", timeHeightInTimePicker: 25, timepickerScrollbar: !0, todayButton: !0, prevButton: !0, nextButton: !0, defaultSelect: !0, scrollMonth: !0, scrollTime: !0, scrollInput: !0, lazyInit: !1, mask: !1, validateOnBlur: !0, allowBlank: !0, yearStart: 1950, yearEnd: 2050, monthStart: 0, monthEnd: 11, style: "", id: "", fixed: !1, roundTime: "round", className: "", weekends: [], highlightedDates: [], highlightedPeriods: [], allowDates: [], allowDateRe: null, disabledDates: [], disabledWeekDays: [], yearOffset: 0, beforeShowDay: null, enterLikeTab: !0, showApplyButton: !1}, r = null, n = "en", o = "en", i = {meridiem: ["AM", "PM"]}, s = function () {
        var t = a.i18n[o], n = {days: t.dayOfWeek, daysShort: t.dayOfWeekShort, months: t.months, monthsShort: e.map(t.months, function (e) {
                return e.substring(0, 3)
            })};
        r = new DateFormatter({dateSettings: e.extend({}, i, n)})
    };
    e.datetimepicker = {setLocale: function (e) {
            var t = a.i18n[e] ? e : n;
            o != t && (o = t, s())
        }, setDateFormatter: function (e) {
            r = e
        }, RFC_2822: "D, d M Y H:i:s O", ATOM: "Y-m-dTH:i:sP", ISO_8601: "Y-m-dTH:i:sO", RFC_822: "D, d M y H:i:s O", RFC_850: "l, d-M-y H:i:s T", RFC_1036: "D, d M y H:i:s O", RFC_1123: "D, d M Y H:i:s O", RSS: "D, d M Y H:i:s O", W3C: "Y-m-dTH:i:sP"}, s(), window.getComputedStyle || (window.getComputedStyle = function (e) {
        return this.el = e, this.getPropertyValue = function (t) {
            var a = /(\-([a-z]){1})/g;
            return"float" === t && (t = "styleFloat"), a.test(t) && (t = t.replace(a, function (e, t, a) {
                return a.toUpperCase()
            })), e.currentStyle[t] || null
        }, this
    }), Array.prototype.indexOf || (Array.prototype.indexOf = function (e, t) {
        var a, r;
        for (a = t || 0, r = this.length; r > a; a += 1)
            if (this[a] === e)
                return a;
        return-1
    }), Date.prototype.countDaysInMonth = function () {
        return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate()
    }, e.fn.xdsoftScroller = function (t) {
        return this.each(function () {
            var a, r, n, o, i, s = e(this), d = function (e) {
                var t, a = {x: 0, y: 0};
                return"touchstart" === e.type || "touchmove" === e.type || "touchend" === e.type || "touchcancel" === e.type ? (t = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0], a.x = t.clientX, a.y = t.clientY) : ("mousedown" === e.type || "mouseup" === e.type || "mousemove" === e.type || "mouseover" === e.type || "mouseout" === e.type || "mouseenter" === e.type || "mouseleave" === e.type) && (a.x = e.clientX, a.y = e.clientY), a
            }, u = 100, l = !1, f = 0, c = 0, m = 0, h = !1, g = 0, p = function () {};
            return"hide" === t ? void s.find(".xdsoft_scrollbar").hide() : (e(this).hasClass("xdsoft_scroller_box") || (a = s.children().eq(0), r = s[0].clientHeight, n = a[0].offsetHeight, o = e('<div class="xdsoft_scrollbar"></div>'), i = e('<div class="xdsoft_scroller"></div>'), o.append(i), s.addClass("xdsoft_scroller_box").append(o), p = function (e) {
                var t = d(e).y - f + g;
                0 > t && (t = 0), t + i[0].offsetHeight > m && (t = m - i[0].offsetHeight), s.trigger("scroll_element.xdsoft_scroller", [u ? t / u : 0])
            }, i.on("touchstart.xdsoft_scroller mousedown.xdsoft_scroller", function (a) {
                r || s.trigger("resize_scroll.xdsoft_scroller", [t]), f = d(a).y, g = parseInt(i.css("margin-top"), 10), m = o[0].offsetHeight, "mousedown" === a.type || "touchstart" === a.type ? (document && e(document.body).addClass("xdsoft_noselect"), e([document.body, window]).on("touchend mouseup.xdsoft_scroller", function n() {
                    e([document.body, window]).off("touchend mouseup.xdsoft_scroller", n).off("mousemove.xdsoft_scroller", p).removeClass("xdsoft_noselect")
                }), e(document.body).on("mousemove.xdsoft_scroller", p)) : (h = !0, a.stopPropagation(), a.preventDefault())
            }).on("touchmove", function (e) {
                h && (e.preventDefault(), p(e))
            }).on("touchend touchcancel", function () {
                h = !1, g = 0
            }), s.on("scroll_element.xdsoft_scroller", function (e, t) {
                r || s.trigger("resize_scroll.xdsoft_scroller", [t, !0]), t = t > 1 ? 1 : 0 > t || isNaN(t) ? 0 : t, i.css("margin-top", u * t), setTimeout(function () {
                    a.css("marginTop", -parseInt((a[0].offsetHeight - r) * t, 10))
                }, 10)
            }).on("resize_scroll.xdsoft_scroller", function (e, t, d) {
                var l, f;
                r = s[0].clientHeight, n = a[0].offsetHeight, l = r / n, f = l * o[0].offsetHeight, l > 1 ? i.hide() : (i.show(), i.css("height", parseInt(f > 10 ? f : 10, 10)), u = o[0].offsetHeight - i[0].offsetHeight, d !== !0 && s.trigger("scroll_element.xdsoft_scroller", [t || Math.abs(parseInt(a.css("marginTop"), 10)) / (n - r)]))
            }), s.on("mousewheel", function (e) {
                var t = Math.abs(parseInt(a.css("marginTop"), 10));
                return t -= 20 * e.deltaY, 0 > t && (t = 0), s.trigger("scroll_element.xdsoft_scroller", [t / (n - r)]), e.stopPropagation(), !1
            }), s.on("touchstart", function (e) {
                l = d(e), c = Math.abs(parseInt(a.css("marginTop"), 10))
            }), s.on("touchmove", function (e) {
                if (l) {
                    e.preventDefault();
                    var t = d(e);
                    s.trigger("scroll_element.xdsoft_scroller", [(c - (t.y - l.y)) / (n - r)])
                }
            }), s.on("touchend touchcancel", function () {
                l = !1, c = 0
            })), void s.trigger("resize_scroll.xdsoft_scroller", [t]))
        })
    }, e.fn.datetimepicker = function (n, i) {
        var s, d, u = this, l = 48, f = 57, c = 96, m = 105, h = 17, g = 46, p = 13, y = 27, v = 8, b = 37, D = 38, k = 39, x = 40, T = 9, S = 116, w = 65, O = 67, M = 86, _ = 90, W = 89, F = !1, C = e.isPlainObject(n) || !n ? e.extend(!0, {}, a, n) : e.extend(!0, {}, a), P = 0, A = function (e) {
            e.on("open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart", function t() {
                e.is(":disabled") || e.data("xdsoft_datetimepicker") || (clearTimeout(P), P = setTimeout(function () {
                    e.data("xdsoft_datetimepicker") || s(e), e.off("open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart", t).trigger("open.xdsoft")
                }, 100))
            })
        };
        return s = function (a) {
            function i() {
                var e, t = !1;
                return C.startDate ? t = j.strToDate(C.startDate) : (t = C.value || (a && a.val && a.val() ? a.val() : ""), t ? t = j.strToDateTime(t) : C.defaultDate && (t = j.strToDateTime(C.defaultDate), C.defaultTime && (e = j.strtotime(C.defaultTime), t.setHours(e.getHours()), t.setMinutes(e.getMinutes())))), t && j.isValidDate(t) ? J.data("changed", !0) : t = "", t || 0
            }
            function s(t) {
                var r = function (e, t) {
                    var a = e.replace(/([\[\]\/\{\}\(\)\-\.\+]{1})/g, "\\$1").replace(/_/g, "{digit+}").replace(/([0-9]{1})/g, "{digit$1}").replace(/\{digit([0-9]{1})\}/g, "[0-$1_]{1}").replace(/\{digit[\+]\}/g, "[0-9_]{1}");
                    return new RegExp(a).test(t)
                }, n = function (e) {
                    try {
                        if (document.selection && document.selection.createRange) {
                            var t = document.selection.createRange();
                            return t.getBookmark().charCodeAt(2) - 2
                        }
                        if (e.setSelectionRange)
                            return e.selectionStart
                    } catch (a) {
                        return 0
                    }
                }, o = function (e, t) {
                    if (e = "string" == typeof e || e instanceof String ? document.getElementById(e) : e, !e)
                        return!1;
                    if (e.createTextRange) {
                        var a = e.createTextRange();
                        return a.collapse(!0), a.moveEnd("character", t), a.moveStart("character", t), a.select(), !0
                    }
                    return e.setSelectionRange ? (e.setSelectionRange(t, t), !0) : !1
                };
                t.mask && a.off("keydown.xdsoft"), t.mask === !0 && (t.mask = "undefined" != typeof moment ? t.format.replace(/Y{4}/g, "9999").replace(/Y{2}/g, "99").replace(/M{2}/g, "19").replace(/D{2}/g, "39").replace(/H{2}/g, "29").replace(/m{2}/g, "59").replace(/s{2}/g, "59") : t.format.replace(/Y/g, "9999").replace(/F/g, "9999").replace(/m/g, "19").replace(/d/g, "39").replace(/H/g, "29").replace(/i/g, "59").replace(/s/g, "59")), "string" === e.type(t.mask) && (r(t.mask, a.val()) || (a.val(t.mask.replace(/[0-9]/g, "_")), o(a[0], 0)), a.on("keydown.xdsoft", function (i) {
                    var s, d, u = this.value, C = i.which;
                    if (C >= l && f >= C || C >= c && m >= C || C === v || C === g) {
                        for (s = n(this), d = C !== v && C !== g?String.fromCharCode(C >= c && m >= C?C - l:C):"_", C !== v && C !== g || !s || (s -= 1, d = "_"); /[^0-9_]/.test(t.mask.substr(s, 1)) && s < t.mask.length && s > 0; )
                            s += C === v || C === g ? -1 : 1;
                        if (u = u.substr(0, s) + d + u.substr(s + 1), "" === e.trim(u))
                            u = t.mask.replace(/[0-9]/g, "_");
                        else if (s === t.mask.length)
                            return i.preventDefault(), !1;
                        for (s += C === v || C === g?0:1; /[^0-9_]/.test(t.mask.substr(s, 1)) && s < t.mask.length && s > 0; )
                            s += C === v || C === g ? -1 : 1;
                        r(t.mask, u) ? (this.value = u, o(this, s)) : "" === e.trim(u) ? this.value = t.mask.replace(/[0-9]/g, "_") : a.trigger("error_input.xdsoft")
                    } else if (-1 !== [w, O, M, _, W].indexOf(C) && F || -1 !== [y, D, x, b, k, S, h, T, p].indexOf(C))
                        return!0;
                    return i.preventDefault(), !1
                }))
            }
            var d, u, P, A, Y, j, H, J = e('<div class="xdsoft_datetimepicker xdsoft_noselect"></div>'), z = e('<div class="xdsoft_copyright"><a target="_blank" href="http://xdsoft.net/jqplugins/datetimepicker/">xdsoft.net</a></div>'), I = e('<div class="xdsoft_datepicker active"></div>'), N = e('<div class="xdsoft_mounthpicker"><button type="button" class="xdsoft_prev"></button><button type="button" class="xdsoft_today_button"></button><div class="xdsoft_label xdsoft_month"><span></span><i></i></div><div class="xdsoft_label xdsoft_year"><span></span><i></i></div><button type="button" class="xdsoft_next"></button></div>'), L = e('<div class="xdsoft_calendar"></div>'), E = e('<div class="xdsoft_timepicker active"><button type="button" class="xdsoft_prev"></button><div class="xdsoft_time_box"></div><button type="button" class="xdsoft_next"></button></div>'), R = E.find(".xdsoft_time_box").eq(0), B = e('<div class="xdsoft_time_variant"></div>'), V = e('<button type="button" class="xdsoft_save_selected blue-gradient-button">Save Selected</button>'), G = e('<div class="xdsoft_select xdsoft_monthselect"><div></div></div>'), U = e('<div class="xdsoft_select xdsoft_yearselect"><div></div></div>'), q = !1, X = 0;
            C.id && J.attr("id", C.id), C.style && J.attr("style", C.style), C.weeks && J.addClass("xdsoft_showweeks"), C.rtl && J.addClass("xdsoft_rtl"), J.addClass("xdsoft_" + C.theme), J.addClass(C.className), N.find(".xdsoft_month span").after(G), N.find(".xdsoft_year span").after(U), N.find(".xdsoft_month,.xdsoft_year").on("touchstart mousedown.xdsoft", function (t) {
                var a, r, n = e(this).find(".xdsoft_select").eq(0), o = 0, i = 0, s = n.is(":visible");
                for (N.find(".xdsoft_select").hide(), j.currentTime && (o = j.currentTime[e(this).hasClass("xdsoft_month")?"getMonth":"getFullYear"]()), n[s?"hide":"show"](), a = n.find("div.xdsoft_option"), r = 0; r < a.length && a.eq(r).data("value") !== o; r += 1)
                    i += a[0].offsetHeight;
                return n.xdsoftScroller(i / (n.children()[0].offsetHeight - n[0].clientHeight)), t.stopPropagation(), !1
            }), N.find(".xdsoft_select").xdsoftScroller().on("touchstart mousedown.xdsoft", function (e) {
                e.stopPropagation(), e.preventDefault()
            }).on("touchstart mousedown.xdsoft", ".xdsoft_option", function () {
                (void 0 === j.currentTime || null === j.currentTime) && (j.currentTime = j.now());
                var t = j.currentTime.getFullYear();
                j && j.currentTime && j.currentTime[e(this).parent().parent().hasClass("xdsoft_monthselect") ? "setMonth" : "setFullYear"](e(this).data("value")), e(this).parent().parent().hide(), J.trigger("xchange.xdsoft"), C.onChangeMonth && e.isFunction(C.onChangeMonth) && C.onChangeMonth.call(J, j.currentTime, J.data("input")), t !== j.currentTime.getFullYear() && e.isFunction(C.onChangeYear) && C.onChangeYear.call(J, j.currentTime, J.data("input"))
            }), J.getValue = function () {
                return j.getCurrentTime()
            }, J.setOptions = function (n) {
                var o = {};
                C = e.extend(!0, {}, C, n), n.allowTimes && e.isArray(n.allowTimes) && n.allowTimes.length && (C.allowTimes = e.extend(!0, [], n.allowTimes)), n.weekends && e.isArray(n.weekends) && n.weekends.length && (C.weekends = e.extend(!0, [], n.weekends)), n.allowDates && e.isArray(n.allowDates) && n.allowDates.length && (C.allowDates = e.extend(!0, [], n.allowDates)), n.allowDateRe && "[object String]" === Object.prototype.toString.call(n.allowDateRe) && (C.allowDateRe = new RegExp(n.allowDateRe)), n.highlightedDates && e.isArray(n.highlightedDates) && n.highlightedDates.length && (e.each(n.highlightedDates, function (a, n) {
                    var i, s = e.map(n.split(","), e.trim), d = new t(r.parseDate(s[0], C.formatDate), s[1], s[2]), u = r.formatDate(d.date, C.formatDate);
                    void 0 !== o[u] ? (i = o[u].desc, i && i.length && d.desc && d.desc.length && (o[u].desc = i + "\n" + d.desc)) : o[u] = d
                }), C.highlightedDates = e.extend(!0, [], o)), n.highlightedPeriods && e.isArray(n.highlightedPeriods) && n.highlightedPeriods.length && (o = e.extend(!0, [], C.highlightedDates),
                        e.each(n.highlightedPeriods, function (a, n) {
                            var i, s, d, u, l, f, c;
                            if (e.isArray(n))
                                i = n[0], s = n[1], d = n[2], c = n[3];
                            else {
                                var m = e.map(n.split(","), e.trim);
                                i = r.parseDate(m[0], C.formatDate), s = r.parseDate(m[1], C.formatDate), d = m[2], c = m[3]
                            }
                            for (; s >= i; )
                                u = new t(i, d, c), l = r.formatDate(i, C.formatDate), i.setDate(i.getDate() + 1), void 0 !== o[l] ? (f = o[l].desc, f && f.length && u.desc && u.desc.length && (o[l].desc = f + "\n" + u.desc)) : o[l] = u
                        }), C.highlightedDates = e.extend(!0, [], o)), n.disabledDates && e.isArray(n.disabledDates) && n.disabledDates.length && (C.disabledDates = e.extend(!0, [], n.disabledDates)), n.disabledWeekDays && e.isArray(n.disabledWeekDays) && n.disabledWeekDays.length && (C.disabledWeekDays = e.extend(!0, [], n.disabledWeekDays)), !C.open && !C.opened || C.inline || a.trigger("open.xdsoft"), C.inline && (q = !0, J.addClass("xdsoft_inline"), a.after(J).hide()), C.inverseButton && (C.next = "xdsoft_prev", C.prev = "xdsoft_next"), C.datepicker ? I.addClass("active") : I.removeClass("active"), C.timepicker ? E.addClass("active") : E.removeClass("active"), C.value && (j.setCurrentTime(C.value), a && a.val && a.val(j.str)), C.dayOfWeekStart = isNaN(C.dayOfWeekStart) ? 0 : parseInt(C.dayOfWeekStart, 10) % 7, C.timepickerScrollbar || R.xdsoftScroller("hide"), C.minDate && /^[\+\-](.*)$/.test(C.minDate) && (C.minDate = r.formatDate(j.strToDateTime(C.minDate), C.formatDate)), C.maxDate && /^[\+\-](.*)$/.test(C.maxDate) && (C.maxDate = r.formatDate(j.strToDateTime(C.maxDate), C.formatDate)), V.toggle(C.showApplyButton), N.find(".xdsoft_today_button").css("visibility", C.todayButton ? "visible" : "hidden"), N.find("." + C.prev).css("visibility", C.prevButton ? "visible" : "hidden"), N.find("." + C.next).css("visibility", C.nextButton ? "visible" : "hidden"), s(C), C.validateOnBlur && a.off("blur.xdsoft").on("blur.xdsoft", function () {
                    if (C.allowBlank && (!e.trim(e(this).val()).length || "string" == typeof C.mask && e.trim(e(this).val()) === C.mask.replace(/[0-9]/g, "_")))
                        e(this).val(null), J.data("xdsoft_datetime").empty();
                    else {
                        var t = r.parseDate(e(this).val(), C.format);
                        if (t)
                            e(this).val(r.formatDate(t, C.format));
                        else {
                            var a = +[e(this).val()[0], e(this).val()[1]].join(""), n = +[e(this).val()[2], e(this).val()[3]].join("");
                            e(this).val(!C.datepicker && C.timepicker && a >= 0 && 24 > a && n >= 0 && 60 > n ? [a, n].map(function (e) {
                                return e > 9 ? e : "0" + e
                            }).join(":") : r.formatDate(j.now(), C.format))
                        }
                        J.data("xdsoft_datetime").setCurrentTime(e(this).val())
                    }
                    J.trigger("changedatetime.xdsoft"), J.trigger("close.xdsoft")
                }), C.dayOfWeekStartPrev = 0 === C.dayOfWeekStart ? 6 : C.dayOfWeekStart - 1, J.trigger("xchange.xdsoft").trigger("afterOpen.xdsoft")
            }, J.data("options", C).on("touchstart mousedown.xdsoft", function (e) {
                return e.stopPropagation(), e.preventDefault(), U.hide(), G.hide(), !1
            }), R.append(B), R.xdsoftScroller(), J.on("afterOpen.xdsoft", function () {
                R.xdsoftScroller()
            }), J.append(I).append(E), C.withoutCopyright !== !0 && J.append(z), I.append(N).append(L).append(V), e(C.parentID).append(J), d = function () {
                var t = this;
                t.now = function (e) {
                    var a, r, n = new Date;
                    return!e && C.defaultDate && (a = t.strToDateTime(C.defaultDate), n.setFullYear(a.getFullYear()), n.setMonth(a.getMonth()), n.setDate(a.getDate())), C.yearOffset && n.setFullYear(n.getFullYear() + C.yearOffset), !e && C.defaultTime && (r = t.strtotime(C.defaultTime), n.setHours(r.getHours()), n.setMinutes(r.getMinutes())), n
                }, t.isValidDate = function (e) {
                    return"[object Date]" !== Object.prototype.toString.call(e) ? !1 : !isNaN(e.getTime())
                }, t.setCurrentTime = function (e, a) {
                    t.currentTime = "string" == typeof e ? t.strToDateTime(e) : t.isValidDate(e) ? e : e || a || !C.allowBlank ? t.now() : null, J.trigger("xchange.xdsoft")
                }, t.empty = function () {
                    t.currentTime = null
                }, t.getCurrentTime = function () {
                    return t.currentTime
                }, t.nextMonth = function () {
                    (void 0 === t.currentTime || null === t.currentTime) && (t.currentTime = t.now());
                    var a, r = t.currentTime.getMonth() + 1;
                    return 12 === r && (t.currentTime.setFullYear(t.currentTime.getFullYear() + 1), r = 0), a = t.currentTime.getFullYear(), t.currentTime.setDate(Math.min(new Date(t.currentTime.getFullYear(), r + 1, 0).getDate(), t.currentTime.getDate())), t.currentTime.setMonth(r), C.onChangeMonth && e.isFunction(C.onChangeMonth) && C.onChangeMonth.call(J, j.currentTime, J.data("input")), a !== t.currentTime.getFullYear() && e.isFunction(C.onChangeYear) && C.onChangeYear.call(J, j.currentTime, J.data("input")), J.trigger("xchange.xdsoft"), r
                }, t.prevMonth = function () {
                    (void 0 === t.currentTime || null === t.currentTime) && (t.currentTime = t.now());
                    var a = t.currentTime.getMonth() - 1;
                    return-1 === a && (t.currentTime.setFullYear(t.currentTime.getFullYear() - 1), a = 11), t.currentTime.setDate(Math.min(new Date(t.currentTime.getFullYear(), a + 1, 0).getDate(), t.currentTime.getDate())), t.currentTime.setMonth(a), C.onChangeMonth && e.isFunction(C.onChangeMonth) && C.onChangeMonth.call(J, j.currentTime, J.data("input")), J.trigger("xchange.xdsoft"), a
                }, t.getWeekOfYear = function (t) {
                    if (C.onGetWeekOfYear && e.isFunction(C.onGetWeekOfYear)) {
                        var a = C.onGetWeekOfYear.call(J, t);
                        if ("undefined" != typeof a)
                            return a
                    }
                    var r = new Date(t.getFullYear(), 0, 1);
                    return 4 != r.getDay() && r.setMonth(0, 1 + (4 - r.getDay() + 7) % 7), Math.ceil(((t - r) / 864e5 + r.getDay() + 1) / 7)
                }, t.strToDateTime = function (e) {
                    var a, n, o = [];
                    return e && e instanceof Date && t.isValidDate(e) ? e : (o = /^(\+|\-)(.*)$/.exec(e), o && (o[2] = r.parseDate(o[2], C.formatDate)), o && o[2] ? (a = o[2].getTime() - 6e4 * o[2].getTimezoneOffset(), n = new Date(t.now(!0).getTime() + parseInt(o[1] + "1", 10) * a)) : n = e ? r.parseDate(e, C.format) : t.now(), t.isValidDate(n) || (n = t.now()), n)
                }, t.strToDate = function (e) {
                    if (e && e instanceof Date && t.isValidDate(e))
                        return e;
                    var a = e ? r.parseDate(e, C.formatDate) : t.now(!0);
                    return t.isValidDate(a) || (a = t.now(!0)), a
                }, t.strtotime = function (e) {
                    if (e && e instanceof Date && t.isValidDate(e))
                        return e;
                    var a = e ? r.parseDate(e, C.formatTime) : t.now(!0);
                    return t.isValidDate(a) || (a = t.now(!0)), a
                }, t.str = function () {
                    return r.formatDate(t.currentTime, C.format)
                }, t.currentTime = this.now()
            }, j = new d, V.on("touchend click", function (e) {
                e.preventDefault(), J.data("changed", !0), j.setCurrentTime(i()), a.val(j.str()), J.trigger("close.xdsoft")
            }), N.find(".xdsoft_today_button").on("touchend mousedown.xdsoft", function () {
                J.data("changed", !0), j.setCurrentTime(0, !0), J.trigger("afterOpen.xdsoft")
            }).on("dblclick.xdsoft", function () {
                var e, t, r = j.getCurrentTime();
                r = new Date(r.getFullYear(), r.getMonth(), r.getDate()), e = j.strToDate(C.minDate), e = new Date(e.getFullYear(), e.getMonth(), e.getDate()), e > r || (t = j.strToDate(C.maxDate), t = new Date(t.getFullYear(), t.getMonth(), t.getDate()), r > t || (a.val(j.str()), a.trigger("change"), J.trigger("close.xdsoft")))
            }), N.find(".xdsoft_prev,.xdsoft_next").on("touchend mousedown.xdsoft", function () {
                var t = e(this), a = 0, r = !1;
                !function n(e) {
                    t.hasClass(C.next) ? j.nextMonth() : t.hasClass(C.prev) && j.prevMonth(), C.monthChangeSpinner && (r || (a = setTimeout(n, e || 100)))
                }(500), e([document.body, window]).on("touchend mouseup.xdsoft", function o() {
                    clearTimeout(a), r = !0, e([document.body, window]).off("touchend mouseup.xdsoft", o)
                })
            }), E.find(".xdsoft_prev,.xdsoft_next").on("touchend mousedown.xdsoft", function () {
                var t = e(this), a = 0, r = !1, n = 110;
                !function o(e) {
                    var i = R[0].clientHeight, s = B[0].offsetHeight, d = Math.abs(parseInt(B.css("marginTop"), 10));
                    t.hasClass(C.next) && s - i - C.timeHeightInTimePicker >= d ? B.css("marginTop", "-" + (d + C.timeHeightInTimePicker) + "px") : t.hasClass(C.prev) && d - C.timeHeightInTimePicker >= 0 && B.css("marginTop", "-" + (d - C.timeHeightInTimePicker) + "px"), R.trigger("scroll_element.xdsoft_scroller", [Math.abs(parseInt(B[0].style.marginTop, 10) / (s - i))]), n = n > 10 ? 10 : n - 10, r || (a = setTimeout(o, e || n))
                }(500), e([document.body, window]).on("touchend mouseup.xdsoft", function i() {
                    clearTimeout(a), r = !0, e([document.body, window]).off("touchend mouseup.xdsoft", i)
                })
            }), u = 0, J.on("xchange.xdsoft", function (t) {
                clearTimeout(u), u = setTimeout(function () {
                    if (void 0 === j.currentTime || null === j.currentTime) {
                        if (C.allowBlank)
                            return;
                        j.currentTime = j.now()
                    }
                    for (var t, i, s, d, u, l, f, c, m, h, g = "", p = new Date(j.currentTime.getFullYear(), j.currentTime.getMonth(), 1, 12, 0, 0), y = 0, v = j.now(), b = !1, D = !1, k = [], x = !0, T = "", S = ""; p.getDay() !== C.dayOfWeekStart; )
                        p.setDate(p.getDate() - 1);
                    for (g += "<table><thead><tr>", C.weeks && (g += "<th></th>"), t = 0; 7 > t; t += 1)
                        g += "<th>" + C.i18n[o].dayOfWeekShort[(t + C.dayOfWeekStart) % 7] + "</th>";
                    for (g += "</tr></thead>", g += "<tbody>", C.maxDate !== !1 && (b = j.strToDate(C.maxDate), b = new Date(b.getFullYear(), b.getMonth(), b.getDate(), 23, 59, 59, 999)), C.minDate !== !1 && (D = j.strToDate(C.minDate), D = new Date(D.getFullYear(), D.getMonth(), D.getDate())); y < j.currentTime.countDaysInMonth() || p.getDay() !== C.dayOfWeekStart || j.currentTime.getMonth() === p.getMonth(); )
                        k = [], y += 1, s = p.getDay(), d = p.getDate(), u = p.getFullYear(), l = p.getMonth(), f = j.getWeekOfYear(p), h = "", k.push("xdsoft_date"), c = C.beforeShowDay && e.isFunction(C.beforeShowDay.call) ? C.beforeShowDay.call(J, p) : null, C.allowDateRe && "[object RegExp]" === Object.prototype.toString.call(C.allowDateRe) ? C.allowDateRe.test(r.formatDate(p, C.formatDate)) || k.push("xdsoft_disabled") : C.allowDates && C.allowDates.length > 0 ? -1 === C.allowDates.indexOf(r.formatDate(p, C.formatDate)) && k.push("xdsoft_disabled") : b !== !1 && p > b || D !== !1 && D > p || c && c[0] === !1 ? k.push("xdsoft_disabled") : -1 !== C.disabledDates.indexOf(r.formatDate(p, C.formatDate)) ? k.push("xdsoft_disabled") : -1 !== C.disabledWeekDays.indexOf(s) ? k.push("xdsoft_disabled") : a.is("[readonly]") && k.push("xdsoft_disabled"), c && "" !== c[1] && k.push(c[1]), j.currentTime.getMonth() !== l && k.push("xdsoft_other_month"), (C.defaultSelect || J.data("changed")) && r.formatDate(j.currentTime, C.formatDate) === r.formatDate(p, C.formatDate) && k.push("xdsoft_current"), r.formatDate(v, C.formatDate) === r.formatDate(p, C.formatDate) && k.push("xdsoft_today"), (0 === p.getDay() || 6 === p.getDay() || -1 !== C.weekends.indexOf(r.formatDate(p, C.formatDate))) && k.push("xdsoft_weekend"), void 0 !== C.highlightedDates[r.formatDate(p, C.formatDate)] && (i = C.highlightedDates[r.formatDate(p, C.formatDate)], k.push(void 0 === i.style ? "xdsoft_highlighted_default" : i.style), h = void 0 === i.desc ? "" : i.desc), C.beforeShowDay && e.isFunction(C.beforeShowDay) && k.push(C.beforeShowDay(p)), x && (g += "<tr>", x = !1, C.weeks && (g += "<th>" + f + "</th>")), g += '<td data-date="' + d + '" data-month="' + l + '" data-year="' + u + '" class="xdsoft_date xdsoft_day_of_week' + p.getDay() + " " + k.join(" ") + '" title="' + h + '"><div>' + d + "</div></td>", p.getDay() === C.dayOfWeekStartPrev && (g += "</tr>", x = !0), p.setDate(d + 1);
                    if (g += "</tbody></table>", L.html(g), N.find(".xdsoft_label span").eq(0).text(C.i18n[o].months[j.currentTime.getMonth()]), N.find(".xdsoft_label span").eq(1).text(j.currentTime.getFullYear()), T = "", S = "", l = "", m = function (t, n) {
                        var o, i, s = j.now(), d = C.allowTimes && e.isArray(C.allowTimes) && C.allowTimes.length;
                        s.setHours(t), t = parseInt(s.getHours(), 10), s.setMinutes(n), n = parseInt(s.getMinutes(), 10), o = new Date(j.currentTime), o.setHours(t), o.setMinutes(n), k = [], C.minDateTime !== !1 && C.minDateTime > o || C.maxTime !== !1 && j.strtotime(C.maxTime).getTime() < s.getTime() || C.minTime !== !1 && j.strtotime(C.minTime).getTime() > s.getTime() ? k.push("xdsoft_disabled") : C.minDateTime !== !1 && C.minDateTime > o || C.disabledMinTime !== !1 && s.getTime() > j.strtotime(C.disabledMinTime).getTime() && C.disabledMaxTime !== !1 && s.getTime() < j.strtotime(C.disabledMaxTime).getTime() ? k.push("xdsoft_disabled") : a.is("[readonly]") && k.push("xdsoft_disabled"), i = new Date(j.currentTime), i.setHours(parseInt(j.currentTime.getHours(), 10)), d || i.setMinutes(Math[C.roundTime](j.currentTime.getMinutes() / C.step) * C.step), (C.initTime || C.defaultSelect || J.data("changed")) && i.getHours() === parseInt(t, 10) && (!d && C.step > 59 || i.getMinutes() === parseInt(n, 10)) && (C.defaultSelect || J.data("changed") ? k.push("xdsoft_current") : C.initTime && k.push("xdsoft_init_time")), parseInt(v.getHours(), 10) === parseInt(t, 10) && parseInt(v.getMinutes(), 10) === parseInt(n, 10) && k.push("xdsoft_today"), T += '<div class="xdsoft_time ' + k.join(" ") + '" data-hour="' + t + '" data-minute="' + n + '">' + r.formatDate(s, C.formatTime) + "</div>"
                    }, C.allowTimes && e.isArray(C.allowTimes) && C.allowTimes.length)
                        for (y = 0; y < C.allowTimes.length; y += 1)
                            S = j.strtotime(C.allowTimes[y]).getHours(), l = j.strtotime(C.allowTimes[y]).getMinutes(), m(S, l);
                    else
                        for (y = 0, t = 0; y < (C.hours12?12:24); y += 1)
                            for (t = 0; 60 > t; t += C.step)
                                S = (10 > y ? "0" : "") + y, l = (10 > t ? "0" : "") + t, m(S, l);
                    for (B.html(T), n = "", y = 0, y = parseInt(C.yearStart, 10) + C.yearOffset; y <= parseInt(C.yearEnd, 10) + C.yearOffset; y += 1)
                        n += '<div class="xdsoft_option ' + (j.currentTime.getFullYear() === y ? "xdsoft_current" : "") + '" data-value="' + y + '">' + y + "</div>";
                    for (U.children().eq(0).html(n), y = parseInt(C.monthStart, 10), n = ""; y <= parseInt(C.monthEnd, 10); y += 1)
                        n += '<div class="xdsoft_option ' + (j.currentTime.getMonth() === y ? "xdsoft_current" : "") + '" data-value="' + y + '">' + C.i18n[o].months[y] + "</div>";
                    G.children().eq(0).html(n), e(J).trigger("generate.xdsoft")
                }, 10), t.stopPropagation()
            }).on("afterOpen.xdsoft", function () {
                if (C.timepicker) {
                    var e, t, a, r;
                    B.find(".xdsoft_current").length ? e = ".xdsoft_current" : B.find(".xdsoft_init_time").length && (e = ".xdsoft_init_time"), e ? (t = R[0].clientHeight, a = B[0].offsetHeight, r = B.find(e).index() * C.timeHeightInTimePicker + 1, r > a - t && (r = a - t), R.trigger("scroll_element.xdsoft_scroller", [parseInt(r, 10) / (a - t)])) : R.trigger("scroll_element.xdsoft_scroller", [0])
                }
            }), P = 0, L.on("touchend click.xdsoft", "td", function (t) {
                t.stopPropagation(), P += 1;
                var r = e(this), n = j.currentTime;
                return(void 0 === n || null === n) && (j.currentTime = j.now(), n = j.currentTime), r.hasClass("xdsoft_disabled") ? !1 : (n.setDate(1), n.setFullYear(r.data("year")), n.setMonth(r.data("month")), n.setDate(r.data("date")), J.trigger("select.xdsoft", [n]), a.val(j.str()), C.onSelectDate && e.isFunction(C.onSelectDate) && C.onSelectDate.call(J, j.currentTime, J.data("input"), t), J.data("changed", !0), J.trigger("xchange.xdsoft"), J.trigger("changedatetime.xdsoft"), (P > 1 || C.closeOnDateSelect === !0 || C.closeOnDateSelect === !1 && !C.timepicker) && !C.inline && J.trigger("close.xdsoft"), void setTimeout(function () {
                    P = 0
                }, 200))
            }), B.on("touchend click.xdsoft", "div", function (t) {
                t.stopPropagation();
                var a = e(this), r = j.currentTime;
                return(void 0 === r || null === r) && (j.currentTime = j.now(), r = j.currentTime), a.hasClass("xdsoft_disabled") ? !1 : (r.setHours(a.data("hour")), r.setMinutes(a.data("minute")), J.trigger("select.xdsoft", [r]), J.data("input").val(j.str()), C.onSelectTime && e.isFunction(C.onSelectTime) && C.onSelectTime.call(J, j.currentTime, J.data("input"), t), J.data("changed", !0), J.trigger("xchange.xdsoft"), J.trigger("changedatetime.xdsoft"), void(C.inline !== !0 && C.closeOnTimeSelect === !0 && J.trigger("close.xdsoft")))
            }), I.on("mousewheel.xdsoft", function (e) {
                return C.scrollMonth ? (e.deltaY < 0 ? j.nextMonth() : j.prevMonth(), !1) : !0
            }), a.on("mousewheel.xdsoft", function (e) {
                return C.scrollInput ? !C.datepicker && C.timepicker ? (A = B.find(".xdsoft_current").length ? B.find(".xdsoft_current").eq(0).index() : 0, A + e.deltaY >= 0 && A + e.deltaY < B.children().length && (A += e.deltaY), B.children().eq(A).length && B.children().eq(A).trigger("mousedown"), !1) : C.datepicker && !C.timepicker ? (I.trigger(e, [e.deltaY, e.deltaX, e.deltaY]), a.val && a.val(j.str()), J.trigger("changedatetime.xdsoft"), !1) : void 0 : !0
            }), J.on("changedatetime.xdsoft", function (t) {
                if (C.onChangeDateTime && e.isFunction(C.onChangeDateTime)) {
                    var a = J.data("input");
                    C.onChangeDateTime.call(J, j.currentTime, a, t), delete C.value, a.trigger("change")
                }
            }).on("generate.xdsoft", function () {
                C.onGenerate && e.isFunction(C.onGenerate) && C.onGenerate.call(J, j.currentTime, J.data("input")), q && (J.trigger("afterOpen.xdsoft"), q = !1)
            }).on("click.xdsoft", function (e) {
                e.stopPropagation()
            }), A = 0, H = function (e, t) {
                do
                    if (e = e.parentNode, t(e) === !1)
                        break;
                while ("HTML" !== e.nodeName)
            }, Y = function () {
                var t, a, r, n, o, i, s, d, u, l, f, c, m;
                if (d = J.data("input"), t = d.offset(), a = d[0], l = "top", r = t.top + a.offsetHeight - 1, n = t.left, o = "absolute", u = e(window).width(), c = e(window).height(), m = e(window).scrollTop(), document.documentElement.clientWidth - t.left < I.parent().outerWidth(!0)) {
                    var h = I.parent().outerWidth(!0) - a.offsetWidth;
                    n -= h
                }
                "rtl" === d.parent().css("direction") && (n -= J.outerWidth() - d.outerWidth()), C.fixed ? (r -= m, n -= e(window).scrollLeft(), o = "fixed") : (s = !1, H(a, function (e) {
                    return"fixed" === window.getComputedStyle(e).getPropertyValue("position") ? (s = !0, !1) : void 0
                }), s ? (o = "fixed", r + J.outerHeight() > c + m ? (l = "bottom", r = c + m - t.top) : r -= m) : r + a.offsetHeight > c + m && (r = t.top - a.offsetHeight + 1), 0 > r && (r = 0), n + a.offsetWidth > u && (n = u - a.offsetWidth)), i = J[0], H(i, function (e) {
                    var t;
                    return t = window.getComputedStyle(e).getPropertyValue("position"), "relative" === t && u >= e.offsetWidth ? (n -= (u - e.offsetWidth) / 2, !1) : void 0
                }), f = {position: o, left: n, top: "", bottom: ""}, f[l] = r, J.css(f)
            }, J.on("open.xdsoft", function (t) {
                var a = !0;
                C.onShow && e.isFunction(C.onShow) && (a = C.onShow.call(J, j.currentTime, J.data("input"), t)), a !== !1 && (J.show(), Y(), e(window).off("resize.xdsoft", Y).on("resize.xdsoft", Y), C.closeOnWithoutClick && e([document.body, window]).on("touchstart mousedown.xdsoft", function r() {
                    J.trigger("close.xdsoft"), e([document.body, window]).off("touchstart mousedown.xdsoft", r)
                }))
            }).on("close.xdsoft", function (t) {
                var a = !0;
                N.find(".xdsoft_month,.xdsoft_year").find(".xdsoft_select").hide(), C.onClose && e.isFunction(C.onClose) && (a = C.onClose.call(J, j.currentTime, J.data("input"), t)), a === !1 || C.opened || C.inline || J.hide(), t.stopPropagation()
            }).on("toggle.xdsoft", function () {
                J.trigger(J.is(":visible") ? "close.xdsoft" : "open.xdsoft")
            }).data("input", a), X = 0, J.data("xdsoft_datetime", j), J.setOptions(C), j.setCurrentTime(i()), a.data("xdsoft_datetimepicker", J).on("open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart", function () {
                a.is(":disabled") || a.data("xdsoft_datetimepicker").is(":visible") && C.closeOnInputClick || (clearTimeout(X), X = setTimeout(function () {
                    a.is(":disabled") || (q = !0, j.setCurrentTime(i(), !0), C.mask && s(C), J.trigger("open.xdsoft"))
                }, 100))
            }).on("keydown.xdsoft", function (t) {
                var a, r = t.which;
                return-1 !== [p].indexOf(r) && C.enterLikeTab ? (a = e("input:visible,textarea:visible,button:visible,a:visible"), J.trigger("close.xdsoft"), a.eq(a.index(this) + 1).focus(), !1) : -1 !== [T].indexOf(r) ? (J.trigger("close.xdsoft"), !0) : void 0
            }).on("blur.xdsoft", function () {
                J.trigger("close.xdsoft")
            })
        }, d = function (t) {
            var a = t.data("xdsoft_datetimepicker");
            a && (a.data("xdsoft_datetime", null), a.remove(), t.data("xdsoft_datetimepicker", null).off(".xdsoft"), e(window).off("resize.xdsoft"), e([window, document.body]).off("mousedown.xdsoft touchstart"), t.unmousewheel && t.unmousewheel())
        }, e(document).off("keydown.xdsoftctrl keyup.xdsoftctrl").on("keydown.xdsoftctrl", function (e) {
            e.keyCode === h && (F = !0)
        }).on("keyup.xdsoftctrl", function (e) {
            e.keyCode === h && (F = !1)
        }), this.each(function () {
            var t, a = e(this).data("xdsoft_datetimepicker");
            if (a) {
                if ("string" === e.type(n))
                    switch (n) {
                        case"show":
                            e(this).select().focus(), a.trigger("open.xdsoft");
                            break;
                            case"hide":
                            a.trigger("close.xdsoft");
                            break;
                            case"toggle":
                            a.trigger("toggle.xdsoft");
                            break;
                            case"destroy":
                            d(e(this));
                            break;
                            case"reset":
                            this.value = this.defaultValue, this.value && a.data("xdsoft_datetime").isValidDate(r.parseDate(this.value, C.format)) || a.data("changed", !1), a.data("xdsoft_datetime").setCurrentTime(this.value);
                            break;
                            case"validate":
                            t = a.data("input"), t.trigger("blur.xdsoft");
                            break;
                            default:
                            a[n] && e.isFunction(a[n]) && (u = a[n](i))
                        }
                else
                    a.setOptions(n);
                return 0
            }
            "string" !== e.type(n) && (!C.lazyInit || C.open || C.inline ? s(e(this)) : A(e(this)))
        }), u
    }, e.fn.datetimepicker.defaults = a
}), function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
}(function (e) {
    function t(t) {
        var i = t || window.event, s = d.call(arguments, 1), u = 0, f = 0, c = 0, m = 0, h = 0, g = 0;
        if (t = e.event.fix(i), t.type = "mousewheel", "detail"in i && (c = -1 * i.detail), "wheelDelta"in i && (c = i.wheelDelta), "wheelDeltaY"in i && (c = i.wheelDeltaY), "wheelDeltaX"in i && (f = -1 * i.wheelDeltaX), "axis"in i && i.axis === i.HORIZONTAL_AXIS && (f = -1 * c, c = 0), u = 0 === c ? f : c, "deltaY"in i && (c = -1 * i.deltaY, u = c), "deltaX"in i && (f = i.deltaX, 0 === c && (u = -1 * f)), 0 !== c || 0 !== f) {
            if (1 === i.deltaMode) {
                var p = e.data(this, "mousewheel-line-height");
                u *= p, c *= p, f *= p
            } else if (2 === i.deltaMode) {
                var y = e.data(this, "mousewheel-page-height");
                u *= y, c *= y, f *= y
            }
            if (m = Math.max(Math.abs(c), Math.abs(f)), (!o || o > m) && (o = m, r(i, m) && (o /= 40)), r(i, m) && (u /= 40, f /= 40, c /= 40), u = Math[u >= 1 ? "floor" : "ceil"](u / o), f = Math[f >= 1 ? "floor" : "ceil"](f / o), c = Math[c >= 1 ? "floor" : "ceil"](c / o), l.settings.normalizeOffset && this.getBoundingClientRect) {
                var v = this.getBoundingClientRect();
                h = t.clientX - v.left, g = t.clientY - v.top
            }
            return t.deltaX = f, t.deltaY = c, t.deltaFactor = o, t.offsetX = h, t.offsetY = g, t.deltaMode = 0, s.unshift(t, u, f, c), n && clearTimeout(n), n = setTimeout(a, 200), (e.event.dispatch || e.event.handle).apply(this, s)
        }
    }
    function a() {
        o = null
    }
    function r(e, t) {
        return l.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 === 0
    }
    var n, o, i = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], s = "onwheel"in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], d = Array.prototype.slice;
    if (e.event.fixHooks)
        for (var u = i.length; u; )
            e.event.fixHooks[i[--u]] = e.event.mouseHooks;
    var l = e.event.special.mousewheel = {version: "3.1.12", setup: function () {
            if (this.addEventListener)
                for (var a = s.length; a; )
                    this.addEventListener(s[--a], t, !1);
            else
                this.onmousewheel = t;
            e.data(this, "mousewheel-line-height", l.getLineHeight(this)), e.data(this, "mousewheel-page-height", l.getPageHeight(this))
        }, teardown: function () {
            if (this.removeEventListener)
                for (var a = s.length; a; )
                    this.removeEventListener(s[--a], t, !1);
            else
                this.onmousewheel = null;
            e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height")
        }, getLineHeight: function (t) {
            var a = e(t), r = a["offsetParent"in e.fn ? "offsetParent" : "parent"]();
            return r.length || (r = e("body")), parseInt(r.css("fontSize"), 10) || parseInt(a.css("fontSize"), 10) || 16
        }, getPageHeight: function (t) {
            return e(t).height()
        }, settings: {adjustOldDeltas: !0, normalizeOffset: !0}};
    e.fn.extend({mousewheel: function (e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        }, unmousewheel: function (e) {
            return this.unbind("mousewheel", e)
        }})
});
(function (factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], function ($) {
            return factory($)
        })
    } else if (typeof module === "object" && typeof module.exports === "object") {
        exports = factory(require("jquery"))
    } else {
        factory(jQuery)
    }
})(function ($) {
    $.easing.jswing = $.easing.swing;
    var pow = Math.pow, sqrt = Math.sqrt, sin = Math.sin, cos = Math.cos, PI = Math.PI, c1 = 1.70158, c2 = c1 * 1.525, c3 = c1 + 1, c4 = 2 * PI / 3, c5 = 2 * PI / 4.5;
    function bounceOut(x) {
        var n1 = 7.5625, d1 = 2.75;
        if (x < 1 / d1) {
            return n1 * x * x
        } else if (x < 2 / d1) {
            return n1 * (x -= 1.5 / d1) * x + .75
        } else if (x < 2.5 / d1) {
            return n1 * (x -= 2.25 / d1) * x + .9375
        } else {
            return n1 * (x -= 2.625 / d1) * x + .984375
        }
    }
    $.extend($.easing, {def: "easeOutQuad", swing: function (x) {
            return $.easing[$.easing.def](x)
        }, easeInQuad: function (x) {
            return x * x
        }, easeOutQuad: function (x) {
            return 1 - (1 - x) * (1 - x)
        }, easeInOutQuad: function (x) {
            return x < .5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2
        }, easeInCubic: function (x) {
            return x * x * x
        }, easeOutCubic: function (x) {
            return 1 - pow(1 - x, 3)
        }, easeInOutCubic: function (x) {
            return x < .5 ? 4 * x * x * x : 1 - pow(-2 * x + 2, 3) / 2
        }, easeInQuart: function (x) {
            return x * x * x * x
        }, easeOutQuart: function (x) {
            return 1 - pow(1 - x, 4)
        }, easeInOutQuart: function (x) {
            return x < .5 ? 8 * x * x * x * x : 1 - pow(-2 * x + 2, 4) / 2
        }, easeInQuint: function (x) {
            return x * x * x * x * x
        }, easeOutQuint: function (x) {
            return 1 - pow(1 - x, 5)
        }, easeInOutQuint: function (x) {
            return x < .5 ? 16 * x * x * x * x * x : 1 - pow(-2 * x + 2, 5) / 2
        }, easeInSine: function (x) {
            return 1 - cos(x * PI / 2)
        }, easeOutSine: function (x) {
            return sin(x * PI / 2)
        }, easeInOutSine: function (x) {
            return-(cos(PI * x) - 1) / 2
        }, easeInExpo: function (x) {
            return x === 0 ? 0 : pow(2, 10 * x - 10)
        }, easeOutExpo: function (x) {
            return x === 1 ? 1 : 1 - pow(2, -10 * x)
        }, easeInOutExpo: function (x) {
            return x === 0 ? 0 : x === 1 ? 1 : x < .5 ? pow(2, 20 * x - 10) / 2 : (2 - pow(2, -20 * x + 10)) / 2
        }, easeInCirc: function (x) {
            return 1 - sqrt(1 - pow(x, 2))
        }, easeOutCirc: function (x) {
            return sqrt(1 - pow(x - 1, 2))
        }, easeInOutCirc: function (x) {
            return x < .5 ? (1 - sqrt(1 - pow(2 * x, 2))) / 2 : (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2
        }, easeInElastic: function (x) {
            return x === 0 ? 0 : x === 1 ? 1 : -pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * c4)
        }, easeOutElastic: function (x) {
            return x === 0 ? 0 : x === 1 ? 1 : pow(2, -10 * x) * sin((x * 10 - .75) * c4) + 1
        }, easeInOutElastic: function (x) {
            return x === 0 ? 0 : x === 1 ? 1 : x < .5 ? -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2 : pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5) / 2 + 1
        }, easeInBack: function (x) {
            return c3 * x * x * x - c1 * x * x
        }, easeOutBack: function (x) {
            return 1 + c3 * pow(x - 1, 3) + c1 * pow(x - 1, 2)
        }, easeInOutBack: function (x) {
            return x < .5 ? pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2) / 2 : (pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2
        }, easeInBounce: function (x) {
            return 1 - bounceOut(1 - x)
        }, easeOutBounce: bounceOut, easeInOutBounce: function (x) {
            return x < .5 ? (1 - bounceOut(1 - 2 * x)) / 2 : (1 + bounceOut(2 * x - 1)) / 2
        }})
});
!function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function (e) {
    "use strict";
    var o = !1, t = !1, r = 0, i = 2e3, s = 0, n = e, l = document, a = window, c = n(a), d = [], u = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || !1, h = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.mozCancelAnimationFrame || !1;
    if (u)
        a.cancelAnimationFrame || (h = function (e) {});
    else {
        var p = 0;
        u = function (e, o) {
            var t = (new Date).getTime(), r = Math.max(0, 16 - (t - p)), i = a.setTimeout(function () {
                e(t + r)
            }, r);
            return p = t + r, i
        }, h = function (e) {
            a.clearTimeout(e)
        }
    }
    var m = a.MutationObserver || a.WebKitMutationObserver || !1, f = Date.now || function () {
        return(new Date).getTime()
    }, g = {zindex: "auto", cursoropacitymin: 0, cursoropacitymax: 1, cursorcolor: "#424242", cursorwidth: "6px", cursorborder: "1px solid #fff", cursorborderradius: "5px", scrollspeed: 40, mousescrollstep: 27, touchbehavior: !1, emulatetouch: !1, hwacceleration: !0, usetransition: !0, boxzoom: !1, dblclickzoom: !0, gesturezoom: !0, grabcursorenabled: !0, autohidemode: !0, background: "", iframeautoresize: !0, cursorminheight: 32, preservenativescrolling: !0, railoffset: !1, railhoffset: !1, bouncescroll: !0, spacebarenabled: !0, railpadding: {top: 0, right: 0, left: 0, bottom: 0}, disableoutline: !0, horizrailenabled: !0, railalign: "right", railvalign: "bottom", enabletranslate3d: !0, enablemousewheel: !0, enablekeyboard: !0, smoothscroll: !0, sensitiverail: !0, enablemouselockapi: !0, cursorfixedheight: !1, directionlockdeadzone: 6, hidecursordelay: 400, nativeparentscrolling: !0, enablescrollonselection: !0, overflowx: !0, overflowy: !0, cursordragspeed: .3, rtlmode: "auto", cursordragontouch: !1, oneaxismousemode: "auto", scriptpath: function () {
            var e = l.currentScript || function () {
                var e = l.getElementsByTagName("script");
                return!!e.length && e[e.length - 1]
            }(), o = e ? e.src.split("?")[0] : "";
            return o.split("/").length > 0 ? o.split("/").slice(0, -1).join("/") + "/" : ""
        }(), preventmultitouchscrolling: !0, disablemutationobserver: !1, enableobserver: !0, scrollbarid: !1}, v = !1, w = function () {
        if (v)
            return v;
        var e = l.createElement("DIV"), o = e.style, t = navigator.userAgent, r = navigator.platform, i = {};
        return i.haspointerlock = "pointerLockElement"in l || "webkitPointerLockElement"in l || "mozPointerLockElement"in l, i.isopera = "opera"in a, i.isopera12 = i.isopera && "getUserMedia"in navigator, i.isoperamini = "[object OperaMini]" === Object.prototype.toString.call(a.operamini), i.isie = "all"in l && "attachEvent"in e && !i.isopera, i.isieold = i.isie && !("msInterpolationMode"in o), i.isie7 = i.isie && !i.isieold && (!("documentMode"in l) || 7 === l.documentMode), i.isie8 = i.isie && "documentMode"in l && 8 === l.documentMode, i.isie9 = i.isie && "performance"in a && 9 === l.documentMode, i.isie10 = i.isie && "performance"in a && 10 === l.documentMode, i.isie11 = "msRequestFullscreen"in e && l.documentMode >= 11, i.ismsedge = "msCredentials"in a, i.ismozilla = "MozAppearance"in o, i.iswebkit = !i.ismsedge && "WebkitAppearance"in o, i.ischrome = i.iswebkit && "chrome"in a, i.ischrome38 = i.ischrome && "touchAction"in o, i.ischrome22 = !i.ischrome38 && i.ischrome && i.haspointerlock, i.ischrome26 = !i.ischrome38 && i.ischrome && "transition"in o, i.cantouch = "ontouchstart"in l.documentElement || "ontouchstart"in a, i.hasw3ctouch = (a.PointerEvent || !1) && (navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0), i.hasmstouch = !i.hasw3ctouch && (a.MSPointerEvent || !1), i.ismac = /^mac$/i.test(r), i.isios = i.cantouch && /iphone|ipad|ipod/i.test(r), i.isios4 = i.isios && !("seal"in Object), i.isios7 = i.isios && "webkitHidden"in l, i.isios8 = i.isios && "hidden"in l, i.isios10 = i.isios && a.Proxy, i.isandroid = /android/i.test(t), i.haseventlistener = "addEventListener"in e, i.trstyle = !1, i.hastransform = !1, i.hastranslate3d = !1, i.transitionstyle = !1, i.hastransition = !1, i.transitionend = !1, i.trstyle = "transform", i.hastransform = "transform"in o || function () {
            for (var e = ["msTransform", "webkitTransform", "MozTransform", "OTransform"], t = 0, r = e.length; t < r; t++)
                if (void 0 !== o[e[t]]) {
                    i.trstyle = e[t];
                    break
                }
            i.hastransform = !!i.trstyle
        }(), i.hastransform && (o[i.trstyle] = "translate3d(1px,2px,3px)", i.hastranslate3d = /translate3d/.test(o[i.trstyle])), i.transitionstyle = "transition", i.prefixstyle = "", i.transitionend = "transitionend", i.hastransition = "transition"in o || function () {
            i.transitionend = !1;
            for (var e = ["webkitTransition", "msTransition", "MozTransition", "OTransition", "OTransition", "KhtmlTransition"], t = ["-webkit-", "-ms-", "-moz-", "-o-", "-o", "-khtml-"], r = ["webkitTransitionEnd", "msTransitionEnd", "transitionend", "otransitionend", "oTransitionEnd", "KhtmlTransitionEnd"], s = 0, n = e.length; s < n; s++)
                if (e[s]in o) {
                    i.transitionstyle = e[s], i.prefixstyle = t[s], i.transitionend = r[s];
                    break
                }
            i.ischrome26 && (i.prefixstyle = t[1]), i.hastransition = i.transitionstyle
        }(), i.cursorgrabvalue = function () {
            var e = ["grab", "-webkit-grab", "-moz-grab"];
            (i.ischrome && !i.ischrome38 || i.isie) && (e = []);
            for (var t = 0, r = e.length; t < r; t++) {
                var s = e[t];
                if (o.cursor = s, o.cursor == s)
                    return s
            }
            return"url(https://cdnjs.cloudflare.com/ajax/libs/slider-pro/1.3.0/css/images/openhand.cur),n-resize"
        }(), i.hasmousecapture = "setCapture"in e, i.hasMutationObserver = !1 !== m, e = null, v = i, i
    }, b = function (e, p) {
        function v() {
            var e = T.doc.css(P.trstyle);
            return!(!e || "matrix" != e.substr(0, 6)) && e.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/)
        }
        function b() {
            var e = T.win;
            if ("zIndex"in e)
                return e.zIndex();
            for (; e.length > 0; ) {
                if (9 == e[0].nodeType)
                    return!1;
                var o = e.css("zIndex");
                if (!isNaN(o) && 0 !== o)
                    return parseInt(o);
                e = e.parent()
            }
            return!1
        }
        function x(e, o, t) {
            var r = e.css(o), i = parseFloat(r);
            if (isNaN(i)) {
                var s = 3 == (i = I[r] || 0) ? t ? T.win.outerHeight() - T.win.innerHeight() : T.win.outerWidth() - T.win.innerWidth() : 1;
                return T.isie8 && i && (i += 1), s ? i : 0
            }
            return i
        }
        function S(e, o, t, r) {
            T._bind(e, o, function (r) {
                var i = {original: r = r || a.event, target: r.target || r.srcElement, type: "wheel", deltaMode: "MozMousePixelScroll" == r.type ? 0 : 1, deltaX: 0, deltaZ: 0, preventDefault: function () {
                        return r.preventDefault ? r.preventDefault() : r.returnValue = !1, !1
                    }, stopImmediatePropagation: function () {
                        r.stopImmediatePropagation ? r.stopImmediatePropagation() : r.cancelBubble = !0
                    }};
                return"mousewheel" == o ? (r.wheelDeltaX && (i.deltaX = -.025 * r.wheelDeltaX), r.wheelDeltaY && (i.deltaY = -.025 * r.wheelDeltaY), !i.deltaY && !i.deltaX && (i.deltaY = -.025 * r.wheelDelta)) : i.deltaY = r.detail, t.call(e, i)
            }, r)
        }
        function z(e, o, t, r) {
            T.scrollrunning || (T.newscrolly = T.getScrollTop(), T.newscrollx = T.getScrollLeft(), D = f());
            var i = f() - D;
            if (D = f(), i > 350 ? A = 1 : A += (2 - A) / 10, e = e * A | 0, o = o * A | 0, e) {
                if (r)
                    if (e < 0) {
                        if (T.getScrollLeft() >= T.page.maxw)
                            return!0
                    } else if (T.getScrollLeft() <= 0)
                        return!0;
                var s = e > 0 ? 1 : -1;
                X !== s && (T.scrollmom && T.scrollmom.stop(), T.newscrollx = T.getScrollLeft(), X = s), T.lastdeltax -= e
            }
            if (o) {
                if (function () {
                    var e = T.getScrollTop();
                    if (o < 0) {
                        if (e >= T.page.maxh)
                            return!0
                    } else if (e <= 0)
                        return!0
                }()) {
                    if (M.nativeparentscrolling && t && !T.ispage && !T.zoomactive)
                        return!0;
                    var n = T.view.h >> 1;
                    T.newscrolly < -n ? (T.newscrolly = -n, o = -1) : T.newscrolly > T.page.maxh + n ? (T.newscrolly = T.page.maxh + n, o = 1) : o = 0
                }
                var l = o > 0 ? 1 : -1;
                B !== l && (T.scrollmom && T.scrollmom.stop(), T.newscrolly = T.getScrollTop(), B = l), T.lastdeltay -= o
            }
            (o || e) && T.synched("relativexy", function () {
                var e = T.lastdeltay + T.newscrolly;
                T.lastdeltay = 0;
                var o = T.lastdeltax + T.newscrollx;
                T.lastdeltax = 0, T.rail.drag || T.doScrollPos(o, e)
            })
        }
        function k(e, o, t) {
            var r, i;
            return!(t || !q) || (0 === e.deltaMode ? (r = -e.deltaX * (M.mousescrollstep / 54) | 0, i = -e.deltaY * (M.mousescrollstep / 54) | 0) : 1 === e.deltaMode && (r = -e.deltaX * M.mousescrollstep * 50 / 80 | 0, i = -e.deltaY * M.mousescrollstep * 50 / 80 | 0), o && M.oneaxismousemode && 0 === r && i && (r = i, i = 0, t && (r < 0 ? T.getScrollLeft() >= T.page.maxw : T.getScrollLeft() <= 0) && (i = r, r = 0)), T.isrtlmode && (r = -r), z(r, i, t, !0) ? void(t && (q = !0)) : (q = !1, e.stopImmediatePropagation(), e.preventDefault()))
        }
        var T = this;
        this.version = "3.7.6", this.name = "nicescroll", this.me = p;
        var E = n("body"), M = this.opt = {doc: E, win: !1};
        if (n.extend(M, g), M.snapbackspeed = 80, e)
            for (var L in M)
                void 0 !== e[L] && (M[L] = e[L]);
        if (M.disablemutationobserver && (m = !1), this.doc = M.doc, this.iddoc = this.doc && this.doc[0] ? this.doc[0].id || "" : "", this.ispage = /^BODY|HTML/.test(M.win ? M.win[0].nodeName : this.doc[0].nodeName), this.haswrapper = !1 !== M.win, this.win = M.win || (this.ispage ? c : this.doc), this.docscroll = this.ispage && !this.haswrapper ? c : this.win, this.body = E, this.viewport = !1, this.isfixed = !1, this.iframe = !1, this.isiframe = "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName, this.istextarea = "TEXTAREA" == this.win[0].nodeName, this.forcescreen = !1, this.canshowonmouseevent = "scroll" != M.autohidemode, this.onmousedown = !1, this.onmouseup = !1, this.onmousemove = !1, this.onmousewheel = !1, this.onkeypress = !1, this.ongesturezoom = !1, this.onclick = !1, this.onscrollstart = !1, this.onscrollend = !1, this.onscrollcancel = !1, this.onzoomin = !1, this.onzoomout = !1, this.view = !1, this.page = !1, this.scroll = {x: 0, y: 0}, this.scrollratio = {x: 0, y: 0}, this.cursorheight = 20, this.scrollvaluemax = 0, "auto" == M.rtlmode) {
            var C = this.win[0] == a ? this.body : this.win, N = C.css("writing-mode") || C.css("-webkit-writing-mode") || C.css("-ms-writing-mode") || C.css("-moz-writing-mode");
            "horizontal-tb" == N || "lr-tb" == N || "" === N ? (this.isrtlmode = "rtl" == C.css("direction"), this.isvertical = !1) : (this.isrtlmode = "vertical-rl" == N || "tb" == N || "tb-rl" == N || "rl-tb" == N, this.isvertical = "vertical-rl" == N || "tb" == N || "tb-rl" == N)
        } else
            this.isrtlmode = !0 === M.rtlmode, this.isvertical = !1;
        if (this.scrollrunning = !1, this.scrollmom = !1, this.observer = !1, this.observerremover = !1, this.observerbody = !1, !1 !== M.scrollbarid)
            this.id = M.scrollbarid;
        else
            do {
                this.id = "ascrail" + i++
            } while (l.getElementById(this.id));
        this.rail = !1, this.cursor = !1, this.cursorfreezed = !1, this.selectiondrag = !1, this.zoom = !1, this.zoomactive = !1, this.hasfocus = !1, this.hasmousefocus = !1, this.railslocked = !1, this.locked = !1, this.hidden = !1, this.cursoractive = !0, this.wheelprevented = !1, this.overflowx = M.overflowx, this.overflowy = M.overflowy, this.nativescrollingarea = !1, this.checkarea = 0, this.events = [], this.saved = {}, this.delaylist = {}, this.synclist = {}, this.lastdeltax = 0, this.lastdeltay = 0, this.detected = w();
        var P = n.extend({}, this.detected);
        this.canhwscroll = P.hastransform && M.hwacceleration, this.ishwscroll = this.canhwscroll && T.haswrapper, this.isrtlmode ? this.isvertical ? this.hasreversehr = !(P.iswebkit || P.isie || P.isie11) : this.hasreversehr = !(P.iswebkit || P.isie && !P.isie10 && !P.isie11) : this.hasreversehr = !1, this.istouchcapable = !1, P.cantouch || !P.hasw3ctouch && !P.hasmstouch ? !P.cantouch || P.isios || P.isandroid || !P.iswebkit && !P.ismozilla || (this.istouchcapable = !0) : this.istouchcapable = !0, M.enablemouselockapi || (P.hasmousecapture = !1, P.haspointerlock = !1), this.debounced = function (e, o, t) {
            T && (T.delaylist[e] || !1 || (T.delaylist[e] = {h: u(function () {
                    T.delaylist[e].fn.call(T), T.delaylist[e] = !1
                }, t)}, o.call(T)), T.delaylist[e].fn = o)
        }, this.synched = function (e, o) {
            T.synclist[e] ? T.synclist[e] = o : (T.synclist[e] = o, u(function () {
                T && (T.synclist[e] && T.synclist[e].call(T), T.synclist[e] = null)
            }))
        }, this.unsynched = function (e) {
            T.synclist[e] && (T.synclist[e] = !1)
        }, this.css = function (e, o) {
            for (var t in o)
                T.saved.css.push([e, t, e.css(t)]), e.css(t, o[t])
        }, this.scrollTop = function (e) {
            return void 0 === e ? T.getScrollTop() : T.setScrollTop(e)
        }, this.scrollLeft = function (e) {
            return void 0 === e ? T.getScrollLeft() : T.setScrollLeft(e)
        };
        var R = function (e, o, t, r, i, s, n) {
            this.st = e, this.ed = o, this.spd = t, this.p1 = r || 0, this.p2 = i || 1, this.p3 = s || 0, this.p4 = n || 1, this.ts = f(), this.df = o - e
        };
        if (R.prototype = {B2: function (e) {
                return 3 * (1 - e) * (1 - e) * e
            }, B3: function (e) {
                return 3 * (1 - e) * e * e
            }, B4: function (e) {
                return e * e * e
            }, getPos: function () {
                return(f() - this.ts) / this.spd
            }, getNow: function () {
                var e = (f() - this.ts) / this.spd, o = this.B2(e) + this.B3(e) + this.B4(e);
                return e >= 1 ? this.ed : this.st + this.df * o | 0
            }, update: function (e, o) {
                return this.st = this.getNow(), this.ed = e, this.spd = o, this.ts = f(), this.df = this.ed - this.st, this
            }}, this.ishwscroll) {
            this.doc.translate = {x: 0, y: 0, tx: "0px", ty: "0px"}, P.hastranslate3d && P.isios && this.doc.css("-webkit-backface-visibility", "hidden"), this.getScrollTop = function (e) {
                if (!e) {
                    var o = v();
                    if (o)
                        return 16 == o.length ? -o[13] : -o[5];
                    if (T.timerscroll && T.timerscroll.bz)
                        return T.timerscroll.bz.getNow()
                }
                return T.doc.translate.y
            }, this.getScrollLeft = function (e) {
                if (!e) {
                    var o = v();
                    if (o)
                        return 16 == o.length ? -o[12] : -o[4];
                    if (T.timerscroll && T.timerscroll.bh)
                        return T.timerscroll.bh.getNow()
                }
                return T.doc.translate.x
            }, this.notifyScrollEvent = function (e) {
                var o = l.createEvent("UIEvents");
                o.initUIEvent("scroll", !1, !1, a, 1), o.niceevent = !0, e.dispatchEvent(o)
            };
            var _ = this.isrtlmode ? 1 : -1;
            P.hastranslate3d && M.enabletranslate3d ? (this.setScrollTop = function (e, o) {
                T.doc.translate.y = e, T.doc.translate.ty = -1 * e + "px", T.doc.css(P.trstyle, "translate3d(" + T.doc.translate.tx + "," + T.doc.translate.ty + ",0)"), o || T.notifyScrollEvent(T.win[0])
            }, this.setScrollLeft = function (e, o) {
                T.doc.translate.x = e, T.doc.translate.tx = e * _ + "px", T.doc.css(P.trstyle, "translate3d(" + T.doc.translate.tx + "," + T.doc.translate.ty + ",0)"), o || T.notifyScrollEvent(T.win[0])
            }) : (this.setScrollTop = function (e, o) {
                T.doc.translate.y = e, T.doc.translate.ty = -1 * e + "px", T.doc.css(P.trstyle, "translate(" + T.doc.translate.tx + "," + T.doc.translate.ty + ")"), o || T.notifyScrollEvent(T.win[0])
            }, this.setScrollLeft = function (e, o) {
                T.doc.translate.x = e, T.doc.translate.tx = e * _ + "px", T.doc.css(P.trstyle, "translate(" + T.doc.translate.tx + "," + T.doc.translate.ty + ")"), o || T.notifyScrollEvent(T.win[0])
            })
        } else
            this.getScrollTop = function () {
                return T.docscroll.scrollTop()
            }, this.setScrollTop = function (e) {
                T.docscroll.scrollTop(e)
            }, this.getScrollLeft = function () {
                return T.hasreversehr ? T.detected.ismozilla ? T.page.maxw - Math.abs(T.docscroll.scrollLeft()) : T.page.maxw - T.docscroll.scrollLeft() : T.docscroll.scrollLeft()
            }, this.setScrollLeft = function (e) {
                return setTimeout(function () {
                    if (T)
                        return T.hasreversehr && (e = T.detected.ismozilla ? -(T.page.maxw - e) : T.page.maxw - e), T.docscroll.scrollLeft(e)
                }, 1)
            };
        this.getTarget = function (e) {
            return!!e && (e.target ? e.target : !!e.srcElement && e.srcElement)
        }, this.hasParent = function (e, o) {
            if (!e)
                return!1;
            for (var t = e.target || e.srcElement || e || !1; t && t.id != o; )
                t = t.parentNode || !1;
            return!1 !== t
        };
        var I = {thin: 1, medium: 3, thick: 5};
        this.getDocumentScrollOffset = function () {
            return{top: a.pageYOffset || l.documentElement.scrollTop, left: a.pageXOffset || l.documentElement.scrollLeft}
        }, this.getOffset = function () {
            if (T.isfixed) {
                var e = T.win.offset(), o = T.getDocumentScrollOffset();
                return e.top -= o.top, e.left -= o.left, e
            }
            var t = T.win.offset();
            if (!T.viewport)
                return t;
            var r = T.viewport.offset();
            return{top: t.top - r.top, left: t.left - r.left}
        }, this.updateScrollBar = function (e) {
            var o, t;
            if (T.ishwscroll)
                T.rail.css({height: T.win.innerHeight() - (M.railpadding.top + M.railpadding.bottom)}), T.railh && T.railh.css({width: T.win.innerWidth() - (M.railpadding.left + M.railpadding.right)});
            else {
                var r = T.getOffset();
                if (o = {top: r.top, left: r.left - (M.railpadding.left + M.railpadding.right)}, o.top += x(T.win, "border-top-width", !0), o.left += T.rail.align ? T.win.outerWidth() - x(T.win, "border-right-width") - T.rail.width : x(T.win, "border-left-width"), (t = M.railoffset) && (t.top && (o.top += t.top), t.left && (o.left += t.left)), T.railslocked || T.rail.css({top: o.top, left: o.left, height: (e ? e.h : T.win.innerHeight()) - (M.railpadding.top + M.railpadding.bottom)}), T.zoom && T.zoom.css({top: o.top + 1, left: 1 == T.rail.align ? o.left - 20 : o.left + T.rail.width + 4}), T.railh && !T.railslocked) {
                    o = {top: r.top, left: r.left}, (t = M.railhoffset) && (t.top && (o.top += t.top), t.left && (o.left += t.left));
                    var i = T.railh.align ? o.top + x(T.win, "border-top-width", !0) + T.win.innerHeight() - T.railh.height : o.top + x(T.win, "border-top-width", !0), s = o.left + x(T.win, "border-left-width");
                    T.railh.css({top: i - (M.railpadding.top + M.railpadding.bottom), left: s, width: T.railh.width})
                }
            }
        }, this.doRailClick = function (e, o, t) {
            var r, i, s, n;
            T.railslocked || (T.cancelEvent(e), "pageY"in e || (e.pageX = e.clientX + l.documentElement.scrollLeft, e.pageY = e.clientY + l.documentElement.scrollTop), o ? (r = t ? T.doScrollLeft : T.doScrollTop, s = t ? (e.pageX - T.railh.offset().left - T.cursorwidth / 2) * T.scrollratio.x : (e.pageY - T.rail.offset().top - T.cursorheight / 2) * T.scrollratio.y, T.unsynched("relativexy"), r(0 | s)) : (r = t ? T.doScrollLeftBy : T.doScrollBy, s = t ? T.scroll.x : T.scroll.y, n = t ? e.pageX - T.railh.offset().left : e.pageY - T.rail.offset().top, i = t ? T.view.w : T.view.h, r(s >= n ? i : -i)))
        }, T.newscrolly = T.newscrollx = 0, T.hasanimationframe = "requestAnimationFrame"in a, T.hascancelanimationframe = "cancelAnimationFrame"in a, T.hasborderbox = !1, this.init = function () {
            if (T.saved.css = [], P.isoperamini)
                return!0;
            if (P.isandroid && !("hidden"in l))
                return!0;
            M.emulatetouch = M.emulatetouch || M.touchbehavior, T.hasborderbox = a.getComputedStyle && "border-box" === a.getComputedStyle(l.body)["box-sizing"];
            var e = {"overflow-y": "hidden"};
            if ((P.isie11 || P.isie10) && (e["-ms-overflow-style"] = "none"), T.ishwscroll && (this.doc.css(P.transitionstyle, P.prefixstyle + "transform 0ms ease-out"), P.transitionend && T.bind(T.doc, P.transitionend, T.onScrollTransitionEnd, !1)), T.zindex = "auto", T.ispage || "auto" != M.zindex ? T.zindex = M.zindex : T.zindex = b() || "auto", !T.ispage && "auto" != T.zindex && T.zindex > s && (s = T.zindex), T.isie && 0 === T.zindex && "auto" == M.zindex && (T.zindex = "auto"), !T.ispage || !P.isieold) {
                var i = T.docscroll;
                T.ispage && (i = T.haswrapper ? T.win : T.doc), T.css(i, e), T.ispage && (P.isie11 || P.isie) && T.css(n("html"), e), !P.isios || T.ispage || T.haswrapper || T.css(E, {"-webkit-overflow-scrolling": "touch"});
                var d = n(l.createElement("div"));
                d.css({position: "relative", top: 0, float: "right", width: M.cursorwidth, height: 0, "background-color": M.cursorcolor, border: M.cursorborder, "background-clip": "padding-box", "-webkit-border-radius": M.cursorborderradius, "-moz-border-radius": M.cursorborderradius, "border-radius": M.cursorborderradius}), d.addClass("nicescroll-cursors"), T.cursor = d;
                var u = n(l.createElement("div"));
                u.attr("id", T.id), u.addClass("nicescroll-rails nicescroll-rails-vr");
                var h, p, f = ["left", "right", "top", "bottom"];
                for (var g in f)
                    p = f[g], (h = M.railpadding[p] || 0) && u.css("padding-" + p, h + "px");
                u.append(d), u.width = Math.max(parseFloat(M.cursorwidth), d.outerWidth()), u.css({width: u.width + "px", zIndex: T.zindex, background: M.background, cursor: "default"}), u.visibility = !0, u.scrollable = !0, u.align = "left" == M.railalign ? 0 : 1, T.rail = u, T.rail.drag = !1;
                var v = !1;
                !M.boxzoom || T.ispage || P.isieold || (v = l.createElement("div"), T.bind(v, "click", T.doZoom), T.bind(v, "mouseenter", function () {
                    T.zoom.css("opacity", M.cursoropacitymax)
                }), T.bind(v, "mouseleave", function () {
                    T.zoom.css("opacity", M.cursoropacitymin)
                }), T.zoom = n(v), T.zoom.css({cursor: "pointer", zIndex: T.zindex, backgroundImage: "url(" + M.scriptpath + "zoomico.png)", height: 18, width: 18, backgroundPosition: "0 0"}), M.dblclickzoom && T.bind(T.win, "dblclick", T.doZoom), P.cantouch && M.gesturezoom && (T.ongesturezoom = function (e) {
                    return e.scale > 1.5 && T.doZoomIn(e), e.scale < .8 && T.doZoomOut(e), T.cancelEvent(e)
                }, T.bind(T.win, "gestureend", T.ongesturezoom))), T.railh = !1;
                var w;
                if (M.horizrailenabled && (T.css(i, {overflowX: "hidden"}), (d = n(l.createElement("div"))).css({position: "absolute", top: 0, height: M.cursorwidth, width: 0, backgroundColor: M.cursorcolor, border: M.cursorborder, backgroundClip: "padding-box", "-webkit-border-radius": M.cursorborderradius, "-moz-border-radius": M.cursorborderradius, "border-radius": M.cursorborderradius}), P.isieold && d.css("overflow", "hidden"), d.addClass("nicescroll-cursors"), T.cursorh = d, (w = n(l.createElement("div"))).attr("id", T.id + "-hr"), w.addClass("nicescroll-rails nicescroll-rails-hr"), w.height = Math.max(parseFloat(M.cursorwidth), d.outerHeight()), w.css({height: w.height + "px", zIndex: T.zindex, background: M.background}), w.append(d), w.visibility = !0, w.scrollable = !0, w.align = "top" == M.railvalign ? 0 : 1, T.railh = w, T.railh.drag = !1), T.ispage)
                    u.css({position: "fixed", top: 0, height: "100%"}), u.css(u.align ? {right: 0} : {left: 0}), T.body.append(u), T.railh && (w.css({position: "fixed", left: 0, width: "100%"}), w.css(w.align ? {bottom: 0} : {top: 0}), T.body.append(w));
                else {
                    if (T.ishwscroll) {
                        "static" == T.win.css("position") && T.css(T.win, {position: "relative"});
                        var x = "HTML" == T.win[0].nodeName ? T.body : T.win;
                        n(x).scrollTop(0).scrollLeft(0), T.zoom && (T.zoom.css({position: "absolute", top: 1, right: 0, "margin-right": u.width + 4}), x.append(T.zoom)), u.css({position: "absolute", top: 0}), u.css(u.align ? {right: 0} : {left: 0}), x.append(u), w && (w.css({position: "absolute", left: 0, bottom: 0}), w.css(w.align ? {bottom: 0} : {top: 0}), x.append(w))
                    } else {
                        T.isfixed = "fixed" == T.win.css("position");
                        var S = T.isfixed ? "fixed" : "absolute";
                        T.isfixed || (T.viewport = T.getViewport(T.win[0])), T.viewport && (T.body = T.viewport, /fixed|absolute/.test(T.viewport.css("position")) || T.css(T.viewport, {position: "relative"})), u.css({position: S}), T.zoom && T.zoom.css({position: S}), T.updateScrollBar(), T.body.append(u), T.zoom && T.body.append(T.zoom), T.railh && (w.css({position: S}), T.body.append(w))
                    }
                    P.isios && T.css(T.win, {"-webkit-tap-highlight-color": "rgba(0,0,0,0)", "-webkit-touch-callout": "none"}), M.disableoutline && (P.isie && T.win.attr("hideFocus", "true"), P.iswebkit && T.win.css("outline", "none"))
                }
                if (!1 === M.autohidemode ? (T.autohidedom = !1, T.rail.css({opacity: M.cursoropacitymax}), T.railh && T.railh.css({opacity: M.cursoropacitymax})) : !0 === M.autohidemode || "leave" === M.autohidemode ? (T.autohidedom = n().add(T.rail), P.isie8 && (T.autohidedom = T.autohidedom.add(T.cursor)), T.railh && (T.autohidedom = T.autohidedom.add(T.railh)), T.railh && P.isie8 && (T.autohidedom = T.autohidedom.add(T.cursorh))) : "scroll" == M.autohidemode ? (T.autohidedom = n().add(T.rail), T.railh && (T.autohidedom = T.autohidedom.add(T.railh))) : "cursor" == M.autohidemode ? (T.autohidedom = n().add(T.cursor), T.railh && (T.autohidedom = T.autohidedom.add(T.cursorh))) : "hidden" == M.autohidemode && (T.autohidedom = !1, T.hide(), T.railslocked = !1), P.cantouch || T.istouchcapable || M.emulatetouch || P.hasmstouch) {
                    T.scrollmom = new y(T);
                    T.ontouchstart = function (e) {
                        if (T.locked)
                            return!1;
                        if (e.pointerType && ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE))
                            return!1;
                        if (T.hasmoving = !1, T.scrollmom.timer && (T.triggerScrollEnd(), T.scrollmom.stop()), !T.railslocked) {
                            var o = T.getTarget(e);
                            if (o && /INPUT/i.test(o.nodeName) && /range/i.test(o.type))
                                return T.stopPropagation(e);
                            var t = "mousedown" === e.type;
                            if (!("clientX"in e) && "changedTouches"in e && (e.clientX = e.changedTouches[0].clientX, e.clientY = e.changedTouches[0].clientY), T.forcescreen) {
                                var r = e;
                                (e = {original: e.original ? e.original : e}).clientX = r.screenX, e.clientY = r.screenY
                            }
                            if (T.rail.drag = {x: e.clientX, y: e.clientY, sx: T.scroll.x, sy: T.scroll.y, st: T.getScrollTop(), sl: T.getScrollLeft(), pt: 2, dl: !1, tg: o}, T.ispage || !M.directionlockdeadzone)
                                T.rail.drag.dl = "f";
                            else {
                                var i = {w: c.width(), h: c.height()}, s = T.getContentSize(), l = s.h - i.h, a = s.w - i.w;
                                T.rail.scrollable && !T.railh.scrollable ? T.rail.drag.ck = l > 0 && "v" : !T.rail.scrollable && T.railh.scrollable ? T.rail.drag.ck = a > 0 && "h" : T.rail.drag.ck = !1
                            }
                            if (M.emulatetouch && T.isiframe && P.isie) {
                                var d = T.win.position();
                                T.rail.drag.x += d.left, T.rail.drag.y += d.top
                            }
                            if (T.hasmoving = !1, T.lastmouseup = !1, T.scrollmom.reset(e.clientX, e.clientY), o && t) {
                                if (!/INPUT|SELECT|BUTTON|TEXTAREA/i.test(o.nodeName))
                                    return P.hasmousecapture && o.setCapture(), M.emulatetouch ? (o.onclick && !o._onclick && (o._onclick = o.onclick, o.onclick = function (e) {
                                        if (T.hasmoving)
                                            return!1;
                                        o._onclick.call(this, e)
                                    }), T.cancelEvent(e)) : T.stopPropagation(e);
                                /SUBMIT|CANCEL|BUTTON/i.test(n(o).attr("type")) && (T.preventclick = {tg: o, click: !1})
                            }
                        }
                    }, T.ontouchend = function (e) {
                        if (!T.rail.drag)
                            return!0;
                        if (2 == T.rail.drag.pt) {
                            if (e.pointerType && ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE))
                                return!1;
                            T.rail.drag = !1;
                            var o = "mouseup" === e.type;
                            if (T.hasmoving && (T.scrollmom.doMomentum(), T.lastmouseup = !0, T.hideCursor(), P.hasmousecapture && l.releaseCapture(), o))
                                return T.cancelEvent(e)
                        } else if (1 == T.rail.drag.pt)
                            return T.onmouseup(e)
                    };
                    var z = M.emulatetouch && T.isiframe && !P.hasmousecapture, k = .3 * M.directionlockdeadzone | 0;
                    T.ontouchmove = function (e, o) {
                        if (!T.rail.drag)
                            return!0;
                        if (e.targetTouches && M.preventmultitouchscrolling && e.targetTouches.length > 1)
                            return!0;
                        if (e.pointerType && ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE))
                            return!0;
                        if (2 == T.rail.drag.pt) {
                            "changedTouches"in e && (e.clientX = e.changedTouches[0].clientX, e.clientY = e.changedTouches[0].clientY);
                            var t, r;
                            if (r = t = 0, z && !o) {
                                var i = T.win.position();
                                r = -i.left, t = -i.top
                            }
                            var s = e.clientY + t, n = s - T.rail.drag.y, a = e.clientX + r, c = a - T.rail.drag.x, d = T.rail.drag.st - n;
                            if (T.ishwscroll && M.bouncescroll)
                                d < 0 ? d = Math.round(d / 2) : d > T.page.maxh && (d = T.page.maxh + Math.round((d - T.page.maxh) / 2));
                            else if (d < 0 ? (d = 0, s = 0) : d > T.page.maxh && (d = T.page.maxh, s = 0), 0 === s && !T.hasmoving)
                                return T.ispage || (T.rail.drag = !1), !0;
                            var u = T.getScrollLeft();
                            if (T.railh && T.railh.scrollable && (u = T.isrtlmode ? c - T.rail.drag.sl : T.rail.drag.sl - c, T.ishwscroll && M.bouncescroll ? u < 0 ? u = Math.round(u / 2) : u > T.page.maxw && (u = T.page.maxw + Math.round((u - T.page.maxw) / 2)) : (u < 0 && (u = 0, a = 0), u > T.page.maxw && (u = T.page.maxw, a = 0))), !T.hasmoving) {
                                if (T.rail.drag.y === e.clientY && T.rail.drag.x === e.clientX)
                                    return T.cancelEvent(e);
                                var h = Math.abs(n), p = Math.abs(c), m = M.directionlockdeadzone;
                                if (T.rail.drag.ck ? "v" == T.rail.drag.ck ? p > m && h <= k ? T.rail.drag = !1 : h > m && (T.rail.drag.dl = "v") : "h" == T.rail.drag.ck && (h > m && p <= k ? T.rail.drag = !1 : p > m && (T.rail.drag.dl = "h")) : h > m && p > m ? T.rail.drag.dl = "f" : h > m ? T.rail.drag.dl = p > k ? "f" : "v" : p > m && (T.rail.drag.dl = h > k ? "f" : "h"), !T.rail.drag.dl)
                                    return T.cancelEvent(e);
                                T.triggerScrollStart(e.clientX, e.clientY, 0, 0, 0), T.hasmoving = !0
                            }
                            return T.preventclick && !T.preventclick.click && (T.preventclick.click = T.preventclick.tg.onclick || !1, T.preventclick.tg.onclick = T.onpreventclick), T.rail.drag.dl && ("v" == T.rail.drag.dl ? u = T.rail.drag.sl : "h" == T.rail.drag.dl && (d = T.rail.drag.st)), T.synched("touchmove", function () {
                                T.rail.drag && 2 == T.rail.drag.pt && (T.prepareTransition && T.resetTransition(), T.rail.scrollable && T.setScrollTop(d), T.scrollmom.update(a, s), T.railh && T.railh.scrollable ? (T.setScrollLeft(u), T.showCursor(d, u)) : T.showCursor(d), P.isie10 && l.selection.clear())
                            }), T.cancelEvent(e)
                        }
                        return 1 == T.rail.drag.pt ? T.onmousemove(e) : void 0
                    }, T.ontouchstartCursor = function (e, o) {
                        if (!T.rail.drag || 3 == T.rail.drag.pt) {
                            if (T.locked)
                                return T.cancelEvent(e);
                            T.cancelScroll(), T.rail.drag = {x: e.touches[0].clientX, y: e.touches[0].clientY, sx: T.scroll.x, sy: T.scroll.y, pt: 3, hr: !!o};
                            var t = T.getTarget(e);
                            return!T.ispage && P.hasmousecapture && t.setCapture(), T.isiframe && !P.hasmousecapture && (T.saved.csspointerevents = T.doc.css("pointer-events"), T.css(T.doc, {"pointer-events": "none"})), T.cancelEvent(e)
                        }
                    }, T.ontouchendCursor = function (e) {
                        if (T.rail.drag) {
                            if (P.hasmousecapture && l.releaseCapture(), T.isiframe && !P.hasmousecapture && T.doc.css("pointer-events", T.saved.csspointerevents), 3 != T.rail.drag.pt)
                                return;
                            return T.rail.drag = !1, T.cancelEvent(e)
                        }
                    }, T.ontouchmoveCursor = function (e) {
                        if (T.rail.drag) {
                            if (3 != T.rail.drag.pt)
                                return;
                            if (T.cursorfreezed = !0, T.rail.drag.hr) {
                                T.scroll.x = T.rail.drag.sx + (e.touches[0].clientX - T.rail.drag.x), T.scroll.x < 0 && (T.scroll.x = 0);
                                var o = T.scrollvaluemaxw;
                                T.scroll.x > o && (T.scroll.x = o)
                            } else {
                                T.scroll.y = T.rail.drag.sy + (e.touches[0].clientY - T.rail.drag.y), T.scroll.y < 0 && (T.scroll.y = 0);
                                var t = T.scrollvaluemax;
                                T.scroll.y > t && (T.scroll.y = t)
                            }
                            return T.synched("touchmove", function () {
                                T.rail.drag && 3 == T.rail.drag.pt && (T.showCursor(), T.rail.drag.hr ? T.doScrollLeft(Math.round(T.scroll.x * T.scrollratio.x), M.cursordragspeed) : T.doScrollTop(Math.round(T.scroll.y * T.scrollratio.y), M.cursordragspeed))
                            }), T.cancelEvent(e)
                        }
                    }
                }
                if (T.onmousedown = function (e, o) {
                    if (!T.rail.drag || 1 == T.rail.drag.pt) {
                        if (T.railslocked)
                            return T.cancelEvent(e);
                        T.cancelScroll(), T.rail.drag = {x: e.clientX, y: e.clientY, sx: T.scroll.x, sy: T.scroll.y, pt: 1, hr: o || !1};
                        var t = T.getTarget(e);
                        return P.hasmousecapture && t.setCapture(), T.isiframe && !P.hasmousecapture && (T.saved.csspointerevents = T.doc.css("pointer-events"), T.css(T.doc, {"pointer-events": "none"})), T.hasmoving = !1, T.cancelEvent(e)
                    }
                }, T.onmouseup = function (e) {
                    if (T.rail.drag)
                        return 1 != T.rail.drag.pt || (P.hasmousecapture && l.releaseCapture(), T.isiframe && !P.hasmousecapture && T.doc.css("pointer-events", T.saved.csspointerevents), T.rail.drag = !1, T.cursorfreezed = !1, T.hasmoving && T.triggerScrollEnd(), T.cancelEvent(e))
                }, T.onmousemove = function (e) {
                    if (T.rail.drag) {
                        if (1 !== T.rail.drag.pt)
                            return;
                        if (P.ischrome && 0 === e.which)
                            return T.onmouseup(e);
                        if (T.cursorfreezed = !0, T.hasmoving || T.triggerScrollStart(e.clientX, e.clientY, 0, 0, 0), T.hasmoving = !0, T.rail.drag.hr) {
                            T.scroll.x = T.rail.drag.sx + (e.clientX - T.rail.drag.x), T.scroll.x < 0 && (T.scroll.x = 0);
                            var o = T.scrollvaluemaxw;
                            T.scroll.x > o && (T.scroll.x = o)
                        } else {
                            T.scroll.y = T.rail.drag.sy + (e.clientY - T.rail.drag.y), T.scroll.y < 0 && (T.scroll.y = 0);
                            var t = T.scrollvaluemax;
                            T.scroll.y > t && (T.scroll.y = t)
                        }
                        return T.synched("mousemove", function () {
                            T.cursorfreezed && (T.showCursor(), T.rail.drag.hr ? T.scrollLeft(Math.round(T.scroll.x * T.scrollratio.x)) : T.scrollTop(Math.round(T.scroll.y * T.scrollratio.y)))
                        }), T.cancelEvent(e)
                    }
                    T.checkarea = 0
                }, P.cantouch || M.emulatetouch)
                    T.onpreventclick = function (e) {
                        if (T.preventclick)
                            return T.preventclick.tg.onclick = T.preventclick.click, T.preventclick = !1, T.cancelEvent(e)
                    }, T.onclick = !P.isios && function (e) {
                        return!T.lastmouseup || (T.lastmouseup = !1, T.cancelEvent(e))
                    }, M.grabcursorenabled && P.cursorgrabvalue && (T.css(T.ispage ? T.doc : T.win, {cursor: P.cursorgrabvalue}), T.css(T.rail, {cursor: P.cursorgrabvalue}));
                else {
                    var L = function (e) {
                        if (T.selectiondrag) {
                            if (e) {
                                var o = T.win.outerHeight(), t = e.pageY - T.selectiondrag.top;
                                t > 0 && t < o && (t = 0), t >= o && (t -= o), T.selectiondrag.df = t
                            }
                            if (0 !== T.selectiondrag.df) {
                                var r = -2 * T.selectiondrag.df / 6 | 0;
                                T.doScrollBy(r), T.debounced("doselectionscroll", function () {
                                    L()
                                }, 50)
                            }
                        }
                    };
                    T.hasTextSelected = "getSelection"in l ? function () {
                        return l.getSelection().rangeCount > 0
                    } : "selection"in l ? function () {
                        return"None" != l.selection.type
                    } : function () {
                        return!1
                    }, T.onselectionstart = function (e) {
                        T.ispage || (T.selectiondrag = T.win.offset())
                    }, T.onselectionend = function (e) {
                        T.selectiondrag = !1
                    }, T.onselectiondrag = function (e) {
                        T.selectiondrag && T.hasTextSelected() && T.debounced("selectionscroll", function () {
                            L(e)
                        }, 250)
                    }
                }
                if (P.hasw3ctouch ? (T.css(T.ispage ? n("html") : T.win, {"touch-action": "none"}), T.css(T.rail, {"touch-action": "none"}), T.css(T.cursor, {"touch-action": "none"}), T.bind(T.win, "pointerdown", T.ontouchstart), T.bind(l, "pointerup", T.ontouchend), T.delegate(l, "pointermove", T.ontouchmove)) : P.hasmstouch ? (T.css(T.ispage ? n("html") : T.win, {"-ms-touch-action": "none"}), T.css(T.rail, {"-ms-touch-action": "none"}), T.css(T.cursor, {"-ms-touch-action": "none"}), T.bind(T.win, "MSPointerDown", T.ontouchstart), T.bind(l, "MSPointerUp", T.ontouchend), T.delegate(l, "MSPointerMove", T.ontouchmove), T.bind(T.cursor, "MSGestureHold", function (e) {
                    e.preventDefault()
                }), T.bind(T.cursor, "contextmenu", function (e) {
                    e.preventDefault()
                })) : P.cantouch && (T.bind(T.win, "touchstart", T.ontouchstart, !1, !0), T.bind(l, "touchend", T.ontouchend, !1, !0), T.bind(l, "touchcancel", T.ontouchend, !1, !0), T.delegate(l, "touchmove", T.ontouchmove, !1, !0)), M.emulatetouch && (T.bind(T.win, "mousedown", T.ontouchstart, !1, !0), T.bind(l, "mouseup", T.ontouchend, !1, !0), T.bind(l, "mousemove", T.ontouchmove, !1, !0)), (M.cursordragontouch || !P.cantouch && !M.emulatetouch) && (T.rail.css({cursor: "default"}), T.railh && T.railh.css({cursor: "default"}), T.jqbind(T.rail, "mouseenter", function () {
                    if (!T.ispage && !T.win.is(":visible"))
                        return!1;
                    T.canshowonmouseevent && T.showCursor(), T.rail.active = !0
                }), T.jqbind(T.rail, "mouseleave", function () {
                    T.rail.active = !1, T.rail.drag || T.hideCursor()
                }), M.sensitiverail && (T.bind(T.rail, "click", function (e) {
                    T.doRailClick(e, !1, !1)
                }), T.bind(T.rail, "dblclick", function (e) {
                    T.doRailClick(e, !0, !1)
                }), T.bind(T.cursor, "click", function (e) {
                    T.cancelEvent(e)
                }), T.bind(T.cursor, "dblclick", function (e) {
                    T.cancelEvent(e)
                })), T.railh && (T.jqbind(T.railh, "mouseenter", function () {
                    if (!T.ispage && !T.win.is(":visible"))
                        return!1;
                    T.canshowonmouseevent && T.showCursor(), T.rail.active = !0
                }), T.jqbind(T.railh, "mouseleave", function () {
                    T.rail.active = !1, T.rail.drag || T.hideCursor()
                }), M.sensitiverail && (T.bind(T.railh, "click", function (e) {
                    T.doRailClick(e, !1, !0)
                }), T.bind(T.railh, "dblclick", function (e) {
                    T.doRailClick(e, !0, !0)
                }), T.bind(T.cursorh, "click", function (e) {
                    T.cancelEvent(e)
                }), T.bind(T.cursorh, "dblclick", function (e) {
                    T.cancelEvent(e)
                })))), M.cursordragontouch && (this.istouchcapable || P.cantouch) && (T.bind(T.cursor, "touchstart", T.ontouchstartCursor), T.bind(T.cursor, "touchmove", T.ontouchmoveCursor), T.bind(T.cursor, "touchend", T.ontouchendCursor), T.cursorh && T.bind(T.cursorh, "touchstart", function (e) {
                    T.ontouchstartCursor(e, !0)
                }), T.cursorh && T.bind(T.cursorh, "touchmove", T.ontouchmoveCursor), T.cursorh && T.bind(T.cursorh, "touchend", T.ontouchendCursor)), M.emulatetouch || P.isandroid || P.isios ? (T.bind(P.hasmousecapture ? T.win : l, "mouseup", T.ontouchend), T.onclick && T.bind(l, "click", T.onclick), M.cursordragontouch ? (T.bind(T.cursor, "mousedown", T.onmousedown), T.bind(T.cursor, "mouseup", T.onmouseup), T.cursorh && T.bind(T.cursorh, "mousedown", function (e) {
                    T.onmousedown(e, !0)
                }), T.cursorh && T.bind(T.cursorh, "mouseup", T.onmouseup)) : (T.bind(T.rail, "mousedown", function (e) {
                    e.preventDefault()
                }), T.railh && T.bind(T.railh, "mousedown", function (e) {
                    e.preventDefault()
                }))) : (T.bind(P.hasmousecapture ? T.win : l, "mouseup", T.onmouseup), T.bind(l, "mousemove", T.onmousemove), T.onclick && T.bind(l, "click", T.onclick), T.bind(T.cursor, "mousedown", T.onmousedown), T.bind(T.cursor, "mouseup", T.onmouseup), T.railh && (T.bind(T.cursorh, "mousedown", function (e) {
                    T.onmousedown(e, !0)
                }), T.bind(T.cursorh, "mouseup", T.onmouseup)), !T.ispage && M.enablescrollonselection && (T.bind(T.win[0], "mousedown", T.onselectionstart), T.bind(l, "mouseup", T.onselectionend), T.bind(T.cursor, "mouseup", T.onselectionend), T.cursorh && T.bind(T.cursorh, "mouseup", T.onselectionend), T.bind(l, "mousemove", T.onselectiondrag)), T.zoom && (T.jqbind(T.zoom, "mouseenter", function () {
                    T.canshowonmouseevent && T.showCursor(), T.rail.active = !0
                }), T.jqbind(T.zoom, "mouseleave", function () {
                    T.rail.active = !1, T.rail.drag || T.hideCursor()
                }))), M.enablemousewheel && (T.isiframe || T.mousewheel(P.isie && T.ispage ? l : T.win, T.onmousewheel), T.mousewheel(T.rail, T.onmousewheel), T.railh && T.mousewheel(T.railh, T.onmousewheelhr)), T.ispage || P.cantouch || /HTML|^BODY/.test(T.win[0].nodeName) || (T.win.attr("tabindex") || T.win.attr({tabindex: ++r}), T.bind(T.win, "focus", function (e) {
                    o = T.getTarget(e).id || T.getTarget(e) || !1, T.hasfocus = !0, T.canshowonmouseevent && T.noticeCursor()
                }), T.bind(T.win, "blur", function (e) {
                    o = !1, T.hasfocus = !1
                }), T.bind(T.win, "mouseenter", function (e) {
                    t = T.getTarget(e).id || T.getTarget(e) || !1, T.hasmousefocus = !0, T.canshowonmouseevent && T.noticeCursor()
                }), T.bind(T.win, "mouseleave", function (e) {
                    t = !1, T.hasmousefocus = !1, T.rail.drag || T.hideCursor()
                })), T.onkeypress = function (e) {
                    if (T.railslocked && 0 === T.page.maxh)
                        return!0;
                    e = e || a.event;
                    var r = T.getTarget(e);
                    if (r && /INPUT|TEXTAREA|SELECT|OPTION/.test(r.nodeName) && (!(r.getAttribute("type") || r.type || !1) || !/submit|button|cancel/i.tp))
                        return!0;
                    if (n(r).attr("contenteditable"))
                        return!0;
                    if (T.hasfocus || T.hasmousefocus && !o || T.ispage && !o && !t) {
                        var i = e.keyCode;
                        if (T.railslocked && 27 != i)
                            return T.cancelEvent(e);
                        var s = e.ctrlKey || !1, l = e.shiftKey || !1, c = !1;
                        switch (i) {
                            case 38:
                            case 63233:
                                T.doScrollBy(72), c = !0;
                                break;
                                case 40:
                            case 63235:
                                T.doScrollBy(-72), c = !0;
                                break;
                                case 37:
                            case 63232:
                                T.railh && (s ? T.doScrollLeft(0) : T.doScrollLeftBy(72), c = !0);
                                break;
                                case 39:
                            case 63234:
                                T.railh && (s ? T.doScrollLeft(T.page.maxw) : T.doScrollLeftBy(-72), c = !0);
                                break;
                                case 33:
                            case 63276:
                                T.doScrollBy(T.view.h), c = !0;
                                break;
                                case 34:
                            case 63277:
                                T.doScrollBy(-T.view.h), c = !0;
                                break;
                                case 36:
                            case 63273:
                                T.railh && s ? T.doScrollPos(0, 0) : T.doScrollTo(0), c = !0;
                                break;
                                case 35:
                            case 63275:
                                T.railh && s ? T.doScrollPos(T.page.maxw, T.page.maxh) : T.doScrollTo(T.page.maxh), c = !0;
                                break;
                                case 32:
                                M.spacebarenabled && (l ? T.doScrollBy(T.view.h) : T.doScrollBy(-T.view.h), c = !0);
                                break;
                                case 27:
                                T.zoomactive && (T.doZoom(), c = !0)
                            }
                        if (c)
                            return T.cancelEvent(e)
                    }
                }, M.enablekeyboard && T.bind(l, P.isopera && !P.isopera12 ? "keypress" : "keydown", T.onkeypress), T.bind(l, "keydown", function (e) {
                    (e.ctrlKey || !1) && (T.wheelprevented = !0)
                }), T.bind(l, "keyup", function (e) {
                    e.ctrlKey || !1 || (T.wheelprevented = !1)
                }), T.bind(a, "blur", function (e) {
                    T.wheelprevented = !1
                }), T.bind(a, "resize", T.onscreenresize), T.bind(a, "orientationchange", T.onscreenresize), T.bind(a, "load", T.lazyResize), P.ischrome && !T.ispage && !T.haswrapper) {
                    var C = T.win.attr("style"), N = parseFloat(T.win.css("width")) + 1;
                    T.win.css("width", N), T.synched("chromefix", function () {
                        T.win.attr("style", C)
                    })
                }
                if (T.onAttributeChange = function (e) {
                    T.lazyResize(T.isieold ? 250 : 30)
                }, M.enableobserver && (T.isie11 || !1 === m || (T.observerbody = new m(function (e) {
                    if (e.forEach(function (e) {
                        if ("attributes" == e.type)
                            return E.hasClass("modal-open") && E.hasClass("modal-dialog") && !n.contains(n(".modal-dialog")[0], T.doc[0]) ? T.hide() : T.show()
                    }), T.me.clientWidth != T.page.width || T.me.clientHeight != T.page.height)
                        return T.lazyResize(30)
                }), T.observerbody.observe(l.body, {childList: !0, subtree: !0, characterData: !1, attributes: !0, attributeFilter: ["class"]})), !T.ispage && !T.haswrapper)) {
                    var R = T.win[0];
                    !1 !== m ? (T.observer = new m(function (e) {
                        e.forEach(T.onAttributeChange)
                    }), T.observer.observe(R, {childList: !0, characterData: !1, attributes: !0, subtree: !1}), T.observerremover = new m(function (e) {
                        e.forEach(function (e) {
                            if (e.removedNodes.length > 0)
                                for (var o in e.removedNodes)
                                    if (T && e.removedNodes[o] === R)
                                        return T.remove()
                        })
                    }), T.observerremover.observe(R.parentNode, {childList: !0, characterData: !1, attributes: !1, subtree: !1})) : (T.bind(R, P.isie && !P.isie9 ? "propertychange" : "DOMAttrModified", T.onAttributeChange), P.isie9 && R.attachEvent("onpropertychange", T.onAttributeChange), T.bind(R, "DOMNodeRemoved", function (e) {
                        e.target === R && T.remove()
                    }))
                }
                !T.ispage && M.boxzoom && T.bind(a, "resize", T.resizeZoom), T.istextarea && (T.bind(T.win, "keydown", T.lazyResize), T.bind(T.win, "mouseup", T.lazyResize)), T.lazyResize(30)
            }
            if ("IFRAME" == this.doc[0].nodeName) {
                var _ = function () {
                    T.iframexd = !1;
                    var o;
                    try {
                        (o = "contentDocument"in this ? this.contentDocument : this.contentWindow._doc).domain
                    } catch (e) {
                        T.iframexd = !0, o = !1
                    }
                    if (T.iframexd)
                        return"console"in a && console.log("NiceScroll error: policy restriced iframe"), !0;
                    if (T.forcescreen = !0, T.isiframe && (T.iframe = {doc: n(o), html: T.doc.contents().find("html")[0], body: T.doc.contents().find("body")[0]}, T.getContentSize = function () {
                        return{w: Math.max(T.iframe.html.scrollWidth, T.iframe.body.scrollWidth), h: Math.max(T.iframe.html.scrollHeight, T.iframe.body.scrollHeight)}
                    }, T.docscroll = n(T.iframe.body)), !P.isios && M.iframeautoresize && !T.isiframe) {
                        T.win.scrollTop(0), T.doc.height("");
                        var t = Math.max(o.getElementsByTagName("html")[0].scrollHeight, o.body.scrollHeight);
                        T.doc.height(t)
                    }
                    T.lazyResize(30), T.css(n(T.iframe.body), e), P.isios && T.haswrapper && T.css(n(o.body), {"-webkit-transform": "translate3d(0,0,0)"}), "contentWindow"in this ? T.bind(this.contentWindow, "scroll", T.onscroll) : T.bind(o, "scroll", T.onscroll), M.enablemousewheel && T.mousewheel(o, T.onmousewheel), M.enablekeyboard && T.bind(o, P.isopera ? "keypress" : "keydown", T.onkeypress), P.cantouch ? (T.bind(o, "touchstart", T.ontouchstart), T.bind(o, "touchmove", T.ontouchmove)) : M.emulatetouch && (T.bind(o, "mousedown", T.ontouchstart), T.bind(o, "mousemove", function (e) {
                        return T.ontouchmove(e, !0)
                    }), M.grabcursorenabled && P.cursorgrabvalue && T.css(n(o.body), {cursor: P.cursorgrabvalue})), T.bind(o, "mouseup", T.ontouchend), T.zoom && (M.dblclickzoom && T.bind(o, "dblclick", T.doZoom), T.ongesturezoom && T.bind(o, "gestureend", T.ongesturezoom))
                };
                this.doc[0].readyState && "complete" === this.doc[0].readyState && setTimeout(function () {
                    _.call(T.doc[0], !1)
                }, 500), T.bind(this.doc, "load", _)
            }
        }, this.showCursor = function (e, o) {
            if (T.cursortimeout && (clearTimeout(T.cursortimeout), T.cursortimeout = 0), T.rail) {
                if (T.autohidedom && (T.autohidedom.stop().css({opacity: M.cursoropacitymax}), T.cursoractive = !0), T.rail.drag && 1 == T.rail.drag.pt || (void 0 !== e && !1 !== e && (T.scroll.y = e / T.scrollratio.y | 0), void 0 !== o && (T.scroll.x = o / T.scrollratio.x | 0)), T.cursor.css({height: T.cursorheight, top: T.scroll.y}), T.cursorh) {
                    var t = T.hasreversehr ? T.scrollvaluemaxw - T.scroll.x : T.scroll.x;
                    T.cursorh.css({width: T.cursorwidth, left: !T.rail.align && T.rail.visibility ? t + T.rail.width : t}), T.cursoractive = !0
                }
                T.zoom && T.zoom.stop().css({opacity: M.cursoropacitymax})
            }
        }, this.hideCursor = function (e) {
            T.cursortimeout || T.rail && T.autohidedom && (T.hasmousefocus && "leave" === M.autohidemode || (T.cursortimeout = setTimeout(function () {
                T.rail.active && T.showonmouseevent || (T.autohidedom.stop().animate({opacity: M.cursoropacitymin}), T.zoom && T.zoom.stop().animate({opacity: M.cursoropacitymin}), T.cursoractive = !1), T.cursortimeout = 0
            }, e || M.hidecursordelay)))
        }, this.noticeCursor = function (e, o, t) {
            T.showCursor(o, t), T.rail.active || T.hideCursor(e)
        }, this.getContentSize = T.ispage ? function () {
            return{w: Math.max(l.body.scrollWidth, l.documentElement.scrollWidth), h: Math.max(l.body.scrollHeight, l.documentElement.scrollHeight)}
        } : T.haswrapper ? function () {
            return{w: T.doc[0].offsetWidth, h: T.doc[0].offsetHeight}
        } : function () {
            return{w: T.docscroll[0].scrollWidth, h: T.docscroll[0].scrollHeight}
        }, this.onResize = function (e, o) {
            if (!T || !T.win)
                return!1;
            var t = T.page.maxh, r = T.page.maxw, i = T.view.h, s = T.view.w;
            if (T.view = {w: T.ispage ? T.win.width() : T.win[0].clientWidth, h: T.ispage ? T.win.height() : T.win[0].clientHeight}, T.page = o || T.getContentSize(), T.page.maxh = Math.max(0, T.page.h - T.view.h), T.page.maxw = Math.max(0, T.page.w - T.view.w), T.page.maxh == t && T.page.maxw == r && T.view.w == s && T.view.h == i) {
                if (T.ispage)
                    return T;
                var n = T.win.offset();
                if (T.lastposition) {
                    var l = T.lastposition;
                    if (l.top == n.top && l.left == n.left)
                        return T
                }
                T.lastposition = n
            }
            return 0 === T.page.maxh ? (T.hideRail(), T.scrollvaluemax = 0, T.scroll.y = 0, T.scrollratio.y = 0, T.cursorheight = 0, T.setScrollTop(0), T.rail && (T.rail.scrollable = !1)) : (T.page.maxh -= M.railpadding.top + M.railpadding.bottom, T.rail.scrollable = !0), 0 === T.page.maxw ? (T.hideRailHr(), T.scrollvaluemaxw = 0, T.scroll.x = 0, T.scrollratio.x = 0, T.cursorwidth = 0, T.setScrollLeft(0), T.railh && (T.railh.scrollable = !1)) : (T.page.maxw -= M.railpadding.left + M.railpadding.right, T.railh && (T.railh.scrollable = M.horizrailenabled)), T.railslocked = T.locked || 0 === T.page.maxh && 0 === T.page.maxw, T.railslocked ? (T.ispage || T.updateScrollBar(T.view), !1) : (T.hidden || (T.rail.visibility || T.showRail(), T.railh && !T.railh.visibility && T.showRailHr()), T.istextarea && T.win.css("resize") && "none" != T.win.css("resize") && (T.view.h -= 20), T.cursorheight = Math.min(T.view.h, Math.round(T.view.h * (T.view.h / T.page.h))), T.cursorheight = M.cursorfixedheight ? M.cursorfixedheight : Math.max(M.cursorminheight, T.cursorheight), T.cursorwidth = Math.min(T.view.w, Math.round(T.view.w * (T.view.w / T.page.w))), T.cursorwidth = M.cursorfixedheight ? M.cursorfixedheight : Math.max(M.cursorminheight, T.cursorwidth), T.scrollvaluemax = T.view.h - T.cursorheight - (M.railpadding.top + M.railpadding.bottom), T.hasborderbox || (T.scrollvaluemax -= T.cursor[0].offsetHeight - T.cursor[0].clientHeight), T.railh && (T.railh.width = T.page.maxh > 0 ? T.view.w - T.rail.width : T.view.w, T.scrollvaluemaxw = T.railh.width - T.cursorwidth - (M.railpadding.left + M.railpadding.right)), T.ispage || T.updateScrollBar(T.view), T.scrollratio = {x: T.page.maxw / T.scrollvaluemaxw, y: T.page.maxh / T.scrollvaluemax}, T.getScrollTop() > T.page.maxh ? T.doScrollTop(T.page.maxh) : (T.scroll.y = T.getScrollTop() / T.scrollratio.y | 0, T.scroll.x = T.getScrollLeft() / T.scrollratio.x | 0, T.cursoractive && T.noticeCursor()), T.scroll.y && 0 === T.getScrollTop() && T.doScrollTo(T.scroll.y * T.scrollratio.y | 0), T)
        }, this.resize = T.onResize;
        var O = 0;
        this.onscreenresize = function (e) {
            clearTimeout(O);
            var o = !T.ispage && !T.haswrapper;
            o && T.hideRails(), O = setTimeout(function () {
                T && (o && T.showRails(), T.resize()), O = 0
            }, 120)
        }, this.lazyResize = function (e) {
            return clearTimeout(O), e = isNaN(e) ? 240 : e, O = setTimeout(function () {
                T && T.resize(), O = 0
            }, e), T
        }, this.jqbind = function (e, o, t) {
            T.events.push({e: e, n: o, f: t, q: !0}), n(e).on(o, t)
        }, this.mousewheel = function (e, o, t) {
            var r = "jquery"in e ? e[0] : e;
            if ("onwheel"in l.createElement("div"))
                T._bind(r, "wheel", o, t || !1);
            else {
                var i = void 0 !== l.onmousewheel ? "mousewheel" : "DOMMouseScroll";
                S(r, i, o, t || !1), "DOMMouseScroll" == i && S(r, "MozMousePixelScroll", o, t || !1)
            }
        };
        var Y = !1;
        if (P.haseventlistener) {
            try {
                var H = Object.defineProperty({}, "passive", {get: function () {
                        Y = !0
                    }});
                a.addEventListener("test", null, H)
            } catch (e) {
            }
            this.stopPropagation = function (e) {
                return!!e && ((e = e.original ? e.original : e).stopPropagation(), !1)
            }, this.cancelEvent = function (e) {
                return e.cancelable && e.preventDefault(), e.stopImmediatePropagation(), e.preventManipulation && e.preventManipulation(), !1
            }
        } else
            Event.prototype.preventDefault = function () {
                this.returnValue = !1
            }, Event.prototype.stopPropagation = function () {
                this.cancelBubble = !0
            }, a.constructor.prototype.addEventListener = l.constructor.prototype.addEventListener = Element.prototype.addEventListener = function (e, o, t) {
                this.attachEvent("on" + e, o)
            }, a.constructor.prototype.removeEventListener = l.constructor.prototype.removeEventListener = Element.prototype.removeEventListener = function (e, o, t) {
                this.detachEvent("on" + e, o)
            }, this.cancelEvent = function (e) {
                return(e = e || a.event) && (e.cancelBubble = !0, e.cancel = !0, e.returnValue = !1), !1
            }, this.stopPropagation = function (e) {
                return(e = e || a.event) && (e.cancelBubble = !0), !1
            };
        this.delegate = function (e, o, t, r, i) {
            var s = d[o] || !1;
            s || (s = {a: [], l: [], f: function (e) {
                    for (var o = s.l, t = !1, r = o.length - 1; r >= 0; r--)
                        if (!1 === (t = o[r].call(e.target, e)))
                            return!1;
                    return t
                }}, T.bind(e, o, s.f, r, i), d[o] = s), T.ispage ? (s.a = [T.id].concat(s.a), s.l = [t].concat(s.l)) : (s.a.push(T.id), s.l.push(t))
        }, this.undelegate = function (e, o, t, r, i) {
            var s = d[o] || !1;
            if (s && s.l)
                for (var n = 0, l = s.l.length; n < l; n++)
                    s.a[n] === T.id && (s.a.splice(n), s.l.splice(n), 0 === s.a.length && (T._unbind(e, o, s.l.f), d[o] = null))
        }, this.bind = function (e, o, t, r, i) {
            var s = "jquery"in e ? e[0] : e;
            T._bind(s, o, t, r || !1, i || !1)
        }, this._bind = function (e, o, t, r, i) {
            T.events.push({e: e, n: o, f: t, b: r, q: !1}), Y && i ? e.addEventListener(o, t, {passive: !1, capture: r}) : e.addEventListener(o, t, r || !1)
        }, this._unbind = function (e, o, t, r) {
            d[o] ? T.undelegate(e, o, t, r) : e.removeEventListener(o, t, r)
        }, this.unbindAll = function () {
            for (var e = 0; e < T.events.length; e++) {
                var o = T.events[e];
                o.q ? o.e.unbind(o.n, o.f) : T._unbind(o.e, o.n, o.f, o.b)
            }
        }, this.showRails = function () {
            return T.showRail().showRailHr()
        }, this.showRail = function () {
            return 0 === T.page.maxh || !T.ispage && "none" == T.win.css("display") || (T.rail.visibility = !0, T.rail.css("display", "block")), T
        }, this.showRailHr = function () {
            return T.railh && (0 === T.page.maxw || !T.ispage && "none" == T.win.css("display") || (T.railh.visibility = !0, T.railh.css("display", "block"))), T
        }, this.hideRails = function () {
            return T.hideRail().hideRailHr()
        }, this.hideRail = function () {
            return T.rail.visibility = !1, T.rail.css("display", "none"), T
        }, this.hideRailHr = function () {
            return T.railh && (T.railh.visibility = !1, T.railh.css("display", "none")), T
        }, this.show = function () {
            return T.hidden = !1, T.railslocked = !1, T.showRails()
        }, this.hide = function () {
            return T.hidden = !0, T.railslocked = !0, T.hideRails()
        }, this.toggle = function () {
            return T.hidden ? T.show() : T.hide()
        }, this.remove = function () {
            T.stop(), T.cursortimeout && clearTimeout(T.cursortimeout);
            for (var e in T.delaylist)
                T.delaylist[e] && h(T.delaylist[e].h);
            T.doZoomOut(), T.unbindAll(), P.isie9 && T.win[0].detachEvent("onpropertychange", T.onAttributeChange), !1 !== T.observer && T.observer.disconnect(), !1 !== T.observerremover && T.observerremover.disconnect(), !1 !== T.observerbody && T.observerbody.disconnect(), T.events = null, T.cursor && T.cursor.remove(), T.cursorh && T.cursorh.remove(), T.rail && T.rail.remove(), T.railh && T.railh.remove(), T.zoom && T.zoom.remove();
            for (var o = 0; o < T.saved.css.length; o++) {
                var t = T.saved.css[o];
                t[0].css(t[1], void 0 === t[2] ? "" : t[2])
            }
            T.saved = !1, T.me.data("__nicescroll", "");
            var r = n.nicescroll;
            r.each(function (e) {
                if (this && this.id === T.id) {
                    delete r[e];
                    for (var o = ++e; o < r.length; o++, e++)
                        r[e] = r[o];
                    --r.length && delete r[r.length]
                }
            });
            for (var i in T)
                T[i] = null, delete T[i];
            T = null
        }, this.scrollstart = function (e) {
            return this.onscrollstart = e, T
        }, this.scrollend = function (e) {
            return this.onscrollend = e, T
        }, this.scrollcancel = function (e) {
            return this.onscrollcancel = e, T
        }, this.zoomin = function (e) {
            return this.onzoomin = e, T
        }, this.zoomout = function (e) {
            return this.onzoomout = e, T
        }, this.isScrollable = function (e) {
            var o = e.target ? e.target : e;
            if ("OPTION" == o.nodeName)
                return!0;
            for (; o && 1 == o.nodeType && o !== this.me[0] && !/^BODY|HTML/.test(o.nodeName); ) {
                var t = n(o), r = t.css("overflowY") || t.css("overflowX") || t.css("overflow") || "";
                if (/scroll|auto/.test(r))
                    return o.clientHeight != o.scrollHeight;
                o = !!o.parentNode && o.parentNode
            }
            return!1
        }, this.getViewport = function (e) {
            for (var o = !(!e || !e.parentNode) && e.parentNode; o && 1 == o.nodeType && !/^BODY|HTML/.test(o.nodeName); ) {
                var t = n(o);
                if (/fixed|absolute/.test(t.css("position")))
                    return t;
                var r = t.css("overflowY") || t.css("overflowX") || t.css("overflow") || "";
                if (/scroll|auto/.test(r) && o.clientHeight != o.scrollHeight)
                    return t;
                if (t.getNiceScroll().length > 0)
                    return t;
                o = !!o.parentNode && o.parentNode
            }
            return!1
        }, this.triggerScrollStart = function (e, o, t, r, i) {
            if (T.onscrollstart) {
                var s = {type: "scrollstart", current: {x: e, y: o}, request: {x: t, y: r}, end: {x: T.newscrollx, y: T.newscrolly}, speed: i};
                T.onscrollstart.call(T, s)
            }
        }, this.triggerScrollEnd = function () {
            if (T.onscrollend) {
                var e = T.getScrollLeft(), o = T.getScrollTop(), t = {type: "scrollend", current: {x: e, y: o}, end: {x: e, y: o}};
                T.onscrollend.call(T, t)
            }
        };
        var B = 0, X = 0, D = 0, A = 1, q = !1;
        if (this.onmousewheel = function (e) {
            if (T.wheelprevented || T.locked)
                return!1;
            if (T.railslocked)
                return T.debounced("checkunlock", T.resize, 250), !1;
            if (T.rail.drag)
                return T.cancelEvent(e);
            if ("auto" === M.oneaxismousemode && 0 !== e.deltaX && (M.oneaxismousemode = !1), M.oneaxismousemode && 0 === e.deltaX && !T.rail.scrollable)
                return!T.railh || !T.railh.scrollable || T.onmousewheelhr(e);
            var o = f(), t = !1;
            if (M.preservenativescrolling && T.checkarea + 600 < o && (T.nativescrollingarea = T.isScrollable(e), t = !0), T.checkarea = o, T.nativescrollingarea)
                return!0;
            var r = k(e, !1, t);
            return r && (T.checkarea = 0), r
        }, this.onmousewheelhr = function (e) {
            if (!T.wheelprevented) {
                if (T.railslocked || !T.railh.scrollable)
                    return!0;
                if (T.rail.drag)
                    return T.cancelEvent(e);
                var o = f(), t = !1;
                return M.preservenativescrolling && T.checkarea + 600 < o && (T.nativescrollingarea = T.isScrollable(e), t = !0), T.checkarea = o, !!T.nativescrollingarea || (T.railslocked ? T.cancelEvent(e) : k(e, !0, t))
            }
        }, this.stop = function () {
            return T.cancelScroll(), T.scrollmon && T.scrollmon.stop(), T.cursorfreezed = !1, T.scroll.y = Math.round(T.getScrollTop() * (1 / T.scrollratio.y)), T.noticeCursor(), T
        }, this.getTransitionSpeed = function (e) {
            return 80 + e / 72 * M.scrollspeed | 0
        }, M.smoothscroll)
            if (T.ishwscroll && P.hastransition && M.usetransition && M.smoothscroll) {
                var j = "";
                this.resetTransition = function () {
                    j = "", T.doc.css(P.prefixstyle + "transition-duration", "0ms")
                }, this.prepareTransition = function (e, o) {
                    var t = o ? e : T.getTransitionSpeed(e), r = t + "ms";
                    return j !== r && (j = r, T.doc.css(P.prefixstyle + "transition-duration", r)), t
                }, this.doScrollLeft = function (e, o) {
                    var t = T.scrollrunning ? T.newscrolly : T.getScrollTop();
                    T.doScrollPos(e, t, o)
                }, this.doScrollTop = function (e, o) {
                    var t = T.scrollrunning ? T.newscrollx : T.getScrollLeft();
                    T.doScrollPos(t, e, o)
                }, this.cursorupdate = {running: !1, start: function () {
                        var e = this;
                        if (!e.running) {
                            e.running = !0;
                            var o = function () {
                                e.running && u(o), T.showCursor(T.getScrollTop(), T.getScrollLeft()), T.notifyScrollEvent(T.win[0])
                            };
                            u(o)
                        }
                    }, stop: function () {
                        this.running = !1
                    }}, this.doScrollPos = function (e, o, t) {
                    var r = T.getScrollTop(), i = T.getScrollLeft();
                    if (((T.newscrolly - r) * (o - r) < 0 || (T.newscrollx - i) * (e - i) < 0) && T.cancelScroll(), M.bouncescroll ? (o < 0 ? o = o / 2 | 0 : o > T.page.maxh && (o = T.page.maxh + (o - T.page.maxh) / 2 | 0), e < 0 ? e = e / 2 | 0 : e > T.page.maxw && (e = T.page.maxw + (e - T.page.maxw) / 2 | 0)) : (o < 0 ? o = 0 : o > T.page.maxh && (o = T.page.maxh), e < 0 ? e = 0 : e > T.page.maxw && (e = T.page.maxw)), T.scrollrunning && e == T.newscrollx && o == T.newscrolly)
                        return!1;
                    T.newscrolly = o, T.newscrollx = e;
                    var s = T.getScrollTop(), n = T.getScrollLeft(), l = {};
                    l.x = e - n, l.y = o - s;
                    var a = 0 | Math.sqrt(l.x * l.x + l.y * l.y), c = T.prepareTransition(a);
                    T.scrollrunning || (T.scrollrunning = !0, T.triggerScrollStart(n, s, e, o, c), T.cursorupdate.start()), T.scrollendtrapped = !0, P.transitionend || (T.scrollendtrapped && clearTimeout(T.scrollendtrapped), T.scrollendtrapped = setTimeout(T.onScrollTransitionEnd, c)), T.setScrollTop(T.newscrolly), T.setScrollLeft(T.newscrollx)
                }, this.cancelScroll = function () {
                    if (!T.scrollendtrapped)
                        return!0;
                    var e = T.getScrollTop(), o = T.getScrollLeft();
                    return T.scrollrunning = !1, P.transitionend || clearTimeout(P.transitionend), T.scrollendtrapped = !1, T.resetTransition(), T.setScrollTop(e), T.railh && T.setScrollLeft(o), T.timerscroll && T.timerscroll.tm && clearInterval(T.timerscroll.tm), T.timerscroll = !1, T.cursorfreezed = !1, T.cursorupdate.stop(), T.showCursor(e, o), T
                }, this.onScrollTransitionEnd = function () {
                    if (T.scrollendtrapped) {
                        var e = T.getScrollTop(), o = T.getScrollLeft();
                        if (e < 0 ? e = 0 : e > T.page.maxh && (e = T.page.maxh), o < 0 ? o = 0 : o > T.page.maxw && (o = T.page.maxw), e != T.newscrolly || o != T.newscrollx)
                            return T.doScrollPos(o, e, M.snapbackspeed);
                        T.scrollrunning && T.triggerScrollEnd(), T.scrollrunning = !1, T.scrollendtrapped = !1, T.resetTransition(), T.timerscroll = !1, T.setScrollTop(e), T.railh && T.setScrollLeft(o), T.cursorupdate.stop(), T.noticeCursor(!1, e, o), T.cursorfreezed = !1
                    }
                }
            } else
                this.doScrollLeft = function (e, o) {
                    var t = T.scrollrunning ? T.newscrolly : T.getScrollTop();
                    T.doScrollPos(e, t, o)
                }, this.doScrollTop = function (e, o) {
                    var t = T.scrollrunning ? T.newscrollx : T.getScrollLeft();
                    T.doScrollPos(t, e, o)
                }, this.doScrollPos = function (e, o, t) {
                    var r = T.getScrollTop(), i = T.getScrollLeft();
                    ((T.newscrolly - r) * (o - r) < 0 || (T.newscrollx - i) * (e - i) < 0) && T.cancelScroll();
                    var s = !1;
                    if (T.bouncescroll && T.rail.visibility || (o < 0 ? (o = 0, s = !0) : o > T.page.maxh && (o = T.page.maxh, s = !0)), T.bouncescroll && T.railh.visibility || (e < 0 ? (e = 0, s = !0) : e > T.page.maxw && (e = T.page.maxw, s = !0)), T.scrollrunning && T.newscrolly === o && T.newscrollx === e)
                        return!0;
                    T.newscrolly = o, T.newscrollx = e, T.dst = {}, T.dst.x = e - i, T.dst.y = o - r, T.dst.px = i, T.dst.py = r;
                    var n = 0 | Math.sqrt(T.dst.x * T.dst.x + T.dst.y * T.dst.y), l = T.getTransitionSpeed(n);
                    T.bzscroll = {};
                    var a = s ? 1 : .58;
                    T.bzscroll.x = new R(i, T.newscrollx, l, 0, 0, a, 1), T.bzscroll.y = new R(r, T.newscrolly, l, 0, 0, a, 1);
                    f();
                    var c = function () {
                        if (T.scrollrunning) {
                            var e = T.bzscroll.y.getPos();
                            T.setScrollLeft(T.bzscroll.x.getNow()), T.setScrollTop(T.bzscroll.y.getNow()), e <= 1 ? T.timer = u(c) : (T.scrollrunning = !1, T.timer = 0, T.triggerScrollEnd())
                        }
                    };
                    T.scrollrunning || (T.triggerScrollStart(i, r, e, o, l), T.scrollrunning = !0, T.timer = u(c))
                }, this.cancelScroll = function () {
                    return T.timer && h(T.timer), T.timer = 0, T.bzscroll = !1, T.scrollrunning = !1, T
                };
        else
            this.doScrollLeft = function (e, o) {
                var t = T.getScrollTop();
                T.doScrollPos(e, t, o)
            }, this.doScrollTop = function (e, o) {
                var t = T.getScrollLeft();
                T.doScrollPos(t, e, o)
            }, this.doScrollPos = function (e, o, t) {
                var r = e > T.page.maxw ? T.page.maxw : e;
                r < 0 && (r = 0);
                var i = o > T.page.maxh ? T.page.maxh : o;
                i < 0 && (i = 0), T.synched("scroll", function () {
                    T.setScrollTop(i), T.setScrollLeft(r)
                })
            }, this.cancelScroll = function () {};
        this.doScrollBy = function (e, o) {
            z(0, e)
        }, this.doScrollLeftBy = function (e, o) {
            z(e, 0)
        }, this.doScrollTo = function (e, o) {
            var t = o ? Math.round(e * T.scrollratio.y) : e;
            t < 0 ? t = 0 : t > T.page.maxh && (t = T.page.maxh), T.cursorfreezed = !1, T.doScrollTop(e)
        }, this.checkContentSize = function () {
            var e = T.getContentSize();
            e.h == T.page.h && e.w == T.page.w || T.resize(!1, e)
        }, T.onscroll = function (e) {
            T.rail.drag || T.cursorfreezed || T.synched("scroll", function () {
                T.scroll.y = Math.round(T.getScrollTop() / T.scrollratio.y), T.railh && (T.scroll.x = Math.round(T.getScrollLeft() / T.scrollratio.x)), T.noticeCursor()
            })
        }, T.bind(T.docscroll, "scroll", T.onscroll), this.doZoomIn = function (e) {
            if (!T.zoomactive) {
                T.zoomactive = !0, T.zoomrestore = {style: {}};
                var o = ["position", "top", "left", "zIndex", "backgroundColor", "marginTop", "marginBottom", "marginLeft", "marginRight"], t = T.win[0].style;
                for (var r in o) {
                    var i = o[r];
                    T.zoomrestore.style[i] = void 0 !== t[i] ? t[i] : ""
                }
                T.zoomrestore.style.width = T.win.css("width"), T.zoomrestore.style.height = T.win.css("height"), T.zoomrestore.padding = {w: T.win.outerWidth() - T.win.width(), h: T.win.outerHeight() - T.win.height()}, P.isios4 && (T.zoomrestore.scrollTop = c.scrollTop(), c.scrollTop(0)), T.win.css({position: P.isios4 ? "absolute" : "fixed", top: 0, left: 0, zIndex: s + 100, margin: 0});
                var n = T.win.css("backgroundColor");
                return("" === n || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(n)) && T.win.css("backgroundColor", "#fff"), T.rail.css({zIndex: s + 101}), T.zoom.css({zIndex: s + 102}), T.zoom.css("backgroundPosition", "0 -18px"), T.resizeZoom(), T.onzoomin && T.onzoomin.call(T), T.cancelEvent(e)
            }
        }, this.doZoomOut = function (e) {
            if (T.zoomactive)
                return T.zoomactive = !1, T.win.css("margin", ""), T.win.css(T.zoomrestore.style), P.isios4 && c.scrollTop(T.zoomrestore.scrollTop), T.rail.css({"z-index": T.zindex}), T.zoom.css({"z-index": T.zindex}), T.zoomrestore = !1, T.zoom.css("backgroundPosition", "0 0"), T.onResize(), T.onzoomout && T.onzoomout.call(T), T.cancelEvent(e)
        }, this.doZoom = function (e) {
            return T.zoomactive ? T.doZoomOut(e) : T.doZoomIn(e)
        }, this.resizeZoom = function () {
            if (T.zoomactive) {
                var e = T.getScrollTop();
                T.win.css({width: c.width() - T.zoomrestore.padding.w + "px", height: c.height() - T.zoomrestore.padding.h + "px"}), T.onResize(), T.setScrollTop(Math.min(T.page.maxh, e))
            }
        }, this.init(), n.nicescroll.push(this)
    }, y = function (e) {
        var o = this;
        this.nc = e, this.lastx = 0, this.lasty = 0, this.speedx = 0, this.speedy = 0, this.lasttime = 0, this.steptime = 0, this.snapx = !1, this.snapy = !1, this.demulx = 0, this.demuly = 0, this.lastscrollx = -1, this.lastscrolly = -1, this.chkx = 0, this.chky = 0, this.timer = 0, this.reset = function (e, t) {
            o.stop(), o.steptime = 0, o.lasttime = f(), o.speedx = 0, o.speedy = 0, o.lastx = e, o.lasty = t, o.lastscrollx = -1, o.lastscrolly = -1
        }, this.update = function (e, t) {
            var r = f();
            o.steptime = r - o.lasttime, o.lasttime = r;
            var i = t - o.lasty, s = e - o.lastx, n = o.nc.getScrollTop() + i, l = o.nc.getScrollLeft() + s;
            o.snapx = l < 0 || l > o.nc.page.maxw, o.snapy = n < 0 || n > o.nc.page.maxh, o.speedx = s, o.speedy = i, o.lastx = e, o.lasty = t
        }, this.stop = function () {
            o.nc.unsynched("domomentum2d"), o.timer && clearTimeout(o.timer), o.timer = 0, o.lastscrollx = -1, o.lastscrolly = -1
        }, this.doSnapy = function (e, t) {
            var r = !1;
            t < 0 ? (t = 0, r = !0) : t > o.nc.page.maxh && (t = o.nc.page.maxh, r = !0), e < 0 ? (e = 0, r = !0) : e > o.nc.page.maxw && (e = o.nc.page.maxw, r = !0), r ? o.nc.doScrollPos(e, t, o.nc.opt.snapbackspeed) : o.nc.triggerScrollEnd()
        }, this.doMomentum = function (e) {
            var t = f(), r = e ? t + e : o.lasttime, i = o.nc.getScrollLeft(), s = o.nc.getScrollTop(), n = o.nc.page.maxh, l = o.nc.page.maxw;
            o.speedx = l > 0 ? Math.min(60, o.speedx) : 0, o.speedy = n > 0 ? Math.min(60, o.speedy) : 0;
            var a = r && t - r <= 60;
            (s < 0 || s > n || i < 0 || i > l) && (a = !1);
            var c = !(!o.speedy || !a) && o.speedy, d = !(!o.speedx || !a) && o.speedx;
            if (c || d) {
                var u = Math.max(16, o.steptime);
                if (u > 50) {
                    var h = u / 50;
                    o.speedx *= h, o.speedy *= h, u = 50
                }
                o.demulxy = 0, o.lastscrollx = o.nc.getScrollLeft(), o.chkx = o.lastscrollx, o.lastscrolly = o.nc.getScrollTop(), o.chky = o.lastscrolly;
                var p = o.lastscrollx, m = o.lastscrolly, g = function () {
                    var e = f() - t > 600 ? .04 : .02;
                    o.speedx && (p = Math.floor(o.lastscrollx - o.speedx * (1 - o.demulxy)), o.lastscrollx = p, (p < 0 || p > l) && (e = .1)), o.speedy && (m = Math.floor(o.lastscrolly - o.speedy * (1 - o.demulxy)), o.lastscrolly = m, (m < 0 || m > n) && (e = .1)), o.demulxy = Math.min(1, o.demulxy + e), o.nc.synched("domomentum2d", function () {
                        if (o.speedx) {
                            o.nc.getScrollLeft();
                            o.chkx = p, o.nc.setScrollLeft(p)
                        }
                        if (o.speedy) {
                            o.nc.getScrollTop();
                            o.chky = m, o.nc.setScrollTop(m)
                        }
                        o.timer || (o.nc.hideCursor(), o.doSnapy(p, m))
                    }), o.demulxy < 1 ? o.timer = setTimeout(g, u) : (o.stop(), o.nc.hideCursor(), o.doSnapy(p, m))
                };
                g()
            } else
                o.doSnapy(o.nc.getScrollLeft(), o.nc.getScrollTop())
        }
    }, x = e.fn.scrollTop;
    e.cssHooks.pageYOffset = {get: function (e, o, t) {
            var r = n.data(e, "__nicescroll") || !1;
            return r && r.ishwscroll ? r.getScrollTop() : x.call(e)
        }, set: function (e, o) {
            var t = n.data(e, "__nicescroll") || !1;
            return t && t.ishwscroll ? t.setScrollTop(parseInt(o)) : x.call(e, o), this
        }}, e.fn.scrollTop = function (e) {
        if (void 0 === e) {
            var o = !!this[0] && (n.data(this[0], "__nicescroll") || !1);
            return o && o.ishwscroll ? o.getScrollTop() : x.call(this)
        }
        return this.each(function () {
            var o = n.data(this, "__nicescroll") || !1;
            o && o.ishwscroll ? o.setScrollTop(parseInt(e)) : x.call(n(this), e)
        })
    };
    var S = e.fn.scrollLeft;
    n.cssHooks.pageXOffset = {get: function (e, o, t) {
            var r = n.data(e, "__nicescroll") || !1;
            return r && r.ishwscroll ? r.getScrollLeft() : S.call(e)
        }, set: function (e, o) {
            var t = n.data(e, "__nicescroll") || !1;
            return t && t.ishwscroll ? t.setScrollLeft(parseInt(o)) : S.call(e, o), this
        }}, e.fn.scrollLeft = function (e) {
        if (void 0 === e) {
            var o = !!this[0] && (n.data(this[0], "__nicescroll") || !1);
            return o && o.ishwscroll ? o.getScrollLeft() : S.call(this)
        }
        return this.each(function () {
            var o = n.data(this, "__nicescroll") || !1;
            o && o.ishwscroll ? o.setScrollLeft(parseInt(e)) : S.call(n(this), e)
        })
    };
    var z = function (e) {
        var o = this;
        if (this.length = 0, this.name = "nicescrollarray", this.each = function (e) {
            return n.each(o, e), o
        }, this.push = function (e) {
            o[o.length] = e, o.length++
        }, this.eq = function (e) {
            return o[e]
        }, e)
            for (var t = 0; t < e.length; t++) {
                var r = n.data(e[t], "__nicescroll") || !1;
                r && (this[this.length] = r, this.length++)
            }
        return this
    };
    !function (e, o, t) {
        for (var r = 0, i = o.length; r < i; r++)
            t(e, o[r])
    }(z.prototype, ["show", "hide", "toggle", "onResize", "resize", "remove", "stop", "doScrollPos"], function (e, o) {
        e[o] = function () {
            var e = arguments;
            return this.each(function () {
                this[o].apply(this, e)
            })
        }
    }), e.fn.getNiceScroll = function (e) {
        return void 0 === e ? new z(this) : this[e] && n.data(this[e], "__nicescroll") || !1
    }, (e.expr.pseudos || e.expr[":"]).nicescroll = function (e) {
        return void 0 !== n.data(e, "__nicescroll")
    }, n.fn.niceScroll = function (e, o) {
        void 0 !== o || "object" != typeof e || "jquery"in e || (o = e, e = !1);
        var t = new z;
        return this.each(function () {
            var r = n(this), i = n.extend({}, o);
            if (e) {
                var s = n(e);
                i.doc = s.length > 1 ? n(e, r) : s, i.win = r
            }
            !("doc"in i) || "win"in i || (i.win = r);
            var l = r.data("__nicescroll") || !1;
            l || (i.doc = i.doc || r, l = new b(i, r), r.data("__nicescroll", l)), t.push(l)
        }), 1 === t.length ? t[0] : t
    }, a.NiceScroll = {getjQuery: function () {
            return e
        }}, n.nicescroll || (n.nicescroll = new z, n.nicescroll.options = g)
});
!function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function (a) {
    var b = function () {
        if (a && a.fn && a.fn.select2 && a.fn.select2.amd)
            var b = a.fn.select2.amd;
        var b;
        return function () {
            if (!b || !b.requirejs) {
                b ? c = b : b = {};
                var a, c, d;
                !function (b) {
                    function e(a, b) {
                        return u.call(a, b)
                    }
                    function f(a, b) {
                        var c, d, e, f, g, h, i, j, k, l, m, n = b && b.split("/"), o = s.map, p = o && o["*"] || {};
                        if (a && "." === a.charAt(0))
                            if (b) {
                                for (a = a.split("/"), g = a.length - 1, s.nodeIdCompat && w.test(a[g]) && (a[g] = a[g].replace(w, "")), a = n.slice(0, n.length - 1).concat(a), k = 0; k < a.length; k += 1)
                                    if (m = a[k], "." === m)
                                        a.splice(k, 1), k -= 1;
                                    else if (".." === m) {
                                        if (1 === k && (".." === a[2] || ".." === a[0]))
                                            break;
                                        k > 0 && (a.splice(k - 1, 2), k -= 2)
                                    }
                                a = a.join("/")
                            } else
                                0 === a.indexOf("./") && (a = a.substring(2));
                        if ((n || p) && o) {
                            for (c = a.split("/"), k = c.length; k > 0; k -= 1) {
                                if (d = c.slice(0, k).join("/"), n)
                                    for (l = n.length; l > 0; l -= 1)
                                        if (e = o[n.slice(0, l).join("/")], e && (e = e[d])) {
                                            f = e, h = k;
                                            break
                                        }
                                if (f)
                                    break;
                                !i && p && p[d] && (i = p[d], j = k)
                            }
                            !f && i && (f = i, h = j), f && (c.splice(0, h, f), a = c.join("/"))
                        }
                        return a
                    }
                    function g(a, c) {
                        return function () {
                            var d = v.call(arguments, 0);
                            return"string" != typeof d[0] && 1 === d.length && d.push(null), n.apply(b, d.concat([a, c]))
                        }
                    }
                    function h(a) {
                        return function (b) {
                            return f(b, a)
                        }
                    }
                    function i(a) {
                        return function (b) {
                            q[a] = b
                        }
                    }
                    function j(a) {
                        if (e(r, a)) {
                            var c = r[a];
                            delete r[a], t[a] = !0, m.apply(b, c)
                        }
                        if (!e(q, a) && !e(t, a))
                            throw new Error("No " + a);
                        return q[a]
                    }
                    function k(a) {
                        var b, c = a ? a.indexOf("!") : -1;
                        return c > -1 && (b = a.substring(0, c), a = a.substring(c + 1, a.length)), [b, a]
                    }
                    function l(a) {
                        return function () {
                            return s && s.config && s.config[a] || {}
                        }
                    }
                    var m, n, o, p, q = {}, r = {}, s = {}, t = {}, u = Object.prototype.hasOwnProperty, v = [].slice, w = /\.js$/;
                    o = function (a, b) {
                        var c, d = k(a), e = d[0];
                        return a = d[1], e && (e = f(e, b), c = j(e)), e ? a = c && c.normalize ? c.normalize(a, h(b)) : f(a, b) : (a = f(a, b), d = k(a), e = d[0], a = d[1], e && (c = j(e))), {f: e ? e + "!" + a : a, n: a, pr: e, p: c}
                    }, p = {require: function (a) {
                            return g(a)
                        }, exports: function (a) {
                            var b = q[a];
                            return"undefined" != typeof b ? b : q[a] = {}
                        }, module: function (a) {
                            return{id: a, uri: "", exports: q[a], config: l(a)}
                        }}, m = function (a, c, d, f) {
                        var h, k, l, m, n, s, u = [], v = typeof d;
                        if (f = f || a, "undefined" === v || "function" === v) {
                            for (c = !c.length && d.length?["require", "exports", "module"]:c, n = 0; n < c.length; n += 1)
                                if (m = o(c[n], f), k = m.f, "require" === k)
                                    u[n] = p.require(a);
                                else if ("exports" === k)
                                    u[n] = p.exports(a), s = !0;
                                else if ("module" === k)
                                    h = u[n] = p.module(a);
                                else if (e(q, k) || e(r, k) || e(t, k))
                                    u[n] = j(k);
                                else {
                                    if (!m.p)
                                        throw new Error(a + " missing " + k);
                                    m.p.load(m.n, g(f, !0), i(k), {}), u[n] = q[k]
                                }
                            l = d ? d.apply(q[a], u) : void 0, a && (h && h.exports !== b && h.exports !== q[a] ? q[a] = h.exports : l === b && s || (q[a] = l))
                        } else
                            a && (q[a] = d)
                    }, a = c = n = function (a, c, d, e, f) {
                        if ("string" == typeof a)
                            return p[a] ? p[a](c) : j(o(a, c).f);
                        if (!a.splice) {
                            if (s = a, s.deps && n(s.deps, s.callback), !c)
                                return;
                            c.splice ? (a = c, c = d, d = null) : a = b
                        }
                        return c = c || function () {}, "function" == typeof d && (d = e, e = f), e ? m(b, a, c, d) : setTimeout(function () {
                            m(b, a, c, d)
                        }, 4), n
                    }, n.config = function (a) {
                        return n(a)
                    }, a._defined = q, d = function (a, b, c) {
                        if ("string" != typeof a)
                            throw new Error("See almond README: incorrect module build, no module name");
                        b.splice || (c = b, b = []), e(q, a) || e(r, a) || (r[a] = [a, b, c])
                    }, d.amd = {jQuery: !0}
                }(), b.requirejs = a, b.require = c, b.define = d
            }
        }(), b.define("almond", function () {}), b.define("jquery", [], function () {
            var b = a || $;
            return null == b && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), b
        }), b.define("select2/utils", ["jquery"], function (a) {
            function b(a) {
                var b = a.prototype, c = [];
                for (var d in b) {
                    var e = b[d];
                    "function" == typeof e && "constructor" !== d && c.push(d)
                }
                return c
            }
            var c = {};
            c.Extend = function (a, b) {
                function c() {
                    this.constructor = a
                }
                var d = {}.hasOwnProperty;
                for (var e in b)
                    d.call(b, e) && (a[e] = b[e]);
                return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
            }, c.Decorate = function (a, c) {
                function d() {
                    var b = Array.prototype.unshift, d = c.prototype.constructor.length, e = a.prototype.constructor;
                    d > 0 && (b.call(arguments, a.prototype.constructor), e = c.prototype.constructor), e.apply(this, arguments)
                }
                function e() {
                    this.constructor = d
                }
                var f = b(c), g = b(a);
                c.displayName = a.displayName, d.prototype = new e;
                for (var h = 0; h < g.length; h++) {
                    var i = g[h];
                    d.prototype[i] = a.prototype[i]
                }
                for (var j = (function (a) {
                    var b = function () {};
                    a in d.prototype && (b = d.prototype[a]);
                    var e = c.prototype[a];
                    return function () {
                        var a = Array.prototype.unshift;
                        return a.call(arguments, b), e.apply(this, arguments)
                    }
                }), k = 0; k < f.length; k++) {
                    var l = f[k];
                    d.prototype[l] = j(l)
                }
                return d
            };
            var d = function () {
                this.listeners = {}
            };
            return d.prototype.on = function (a, b) {
                this.listeners = this.listeners || {}, a in this.listeners ? this.listeners[a].push(b) : this.listeners[a] = [b]
            }, d.prototype.trigger = function (a) {
                var b = Array.prototype.slice, c = b.call(arguments, 1);
                this.listeners = this.listeners || {}, null == c && (c = []), 0 === c.length && c.push({}), c[0]._type = a, a in this.listeners && this.invoke(this.listeners[a], b.call(arguments, 1)), "*"in this.listeners && this.invoke(this.listeners["*"], arguments)
            }, d.prototype.invoke = function (a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    a[c].apply(this, b)
            }, c.Observable = d, c.generateChars = function (a) {
                for (var b = "", c = 0; a > c; c++) {
                    var d = Math.floor(36 * Math.random());
                    b += d.toString(36)
                }
                return b
            }, c.bind = function (a, b) {
                return function () {
                    a.apply(b, arguments)
                }
            }, c._convertData = function (a) {
                for (var b in a) {
                    var c = b.split("-"), d = a;
                    if (1 !== c.length) {
                        for (var e = 0; e < c.length; e++) {
                            var f = c[e];
                            f = f.substring(0, 1).toLowerCase() + f.substring(1), f in d || (d[f] = {}), e == c.length - 1 && (d[f] = a[b]), d = d[f]
                        }
                        delete a[b]
                    }
                }
                return a
            }, c.hasScroll = function (b, c) {
                var d = a(c), e = c.style.overflowX, f = c.style.overflowY;
                return e !== f || "hidden" !== f && "visible" !== f ? "scroll" === e || "scroll" === f ? !0 : d.innerHeight() < c.scrollHeight || d.innerWidth() < c.scrollWidth : !1
            }, c.escapeMarkup = function (a) {
                var b = {"\\": "&#92;", "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#47;"};
                return"string" != typeof a ? a : String(a).replace(/[&<>"'\/\\]/g, function (a) {
                    return b[a]
                })
            }, c.appendMany = function (b, c) {
                if ("1.7" === a.fn.jquery.substr(0, 3)) {
                    var d = a();
                    a.map(c, function (a) {
                        d = d.add(a)
                    }), c = d
                }
                b.append(c)
            }, c
        }), b.define("select2/results", ["jquery", "./utils"], function (a, b) {
            function c(a, b, d) {
                this.$element = a, this.data = d, this.options = b, c.__super__.constructor.call(this)
            }
            return b.Extend(c, b.Observable), c.prototype.render = function () {
                var b = a('<ul class="select2-results__options" role="tree"></ul>');
                return this.options.get("multiple") && b.attr("aria-multiselectable", "true"), this.$results = b, b
            }, c.prototype.clear = function () {
                this.$results.empty()
            }, c.prototype.displayMessage = function (b) {
                var c = this.options.get("escapeMarkup");
                this.clear(), this.hideLoading();
                var d = a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'), e = this.options.get("translations").get(b.message);
                d.append(c(e(b.args))), d[0].className += " select2-results__message", this.$results.append(d)
            }, c.prototype.hideMessages = function () {
                this.$results.find(".select2-results__message").remove()
            }, c.prototype.append = function (a) {
                this.hideLoading();
                var b = [];
                if (null == a.results || 0 === a.results.length)
                    return void(0 === this.$results.children().length && this.trigger("results:message", {message: "noResults"}));
                a.results = this.sort(a.results);
                for (var c = 0; c < a.results.length; c++) {
                    var d = a.results[c], e = this.option(d);
                    b.push(e)
                }
                this.$results.append(b)
            }, c.prototype.position = function (a, b) {
                var c = b.find(".select2-results");
                c.append(a)
            }, c.prototype.sort = function (a) {
                var b = this.options.get("sorter");
                return b(a)
            }, c.prototype.highlightFirstItem = function () {
                var a = this.$results.find(".select2-results__option[aria-selected]"), b = a.filter("[aria-selected=true]");
                b.length > 0 ? b.first().trigger("mouseenter") : a.first().trigger("mouseenter"), this.ensureHighlightVisible()
            }, c.prototype.setClasses = function () {
                var b = this;
                this.data.current(function (c) {
                    var d = a.map(c, function (a) {
                        return a.id.toString()
                    }), e = b.$results.find(".select2-results__option[aria-selected]");
                    e.each(function () {
                        var b = a(this), c = a.data(this, "data"), e = "" + c.id;
                        null != c.element && c.element.selected || null == c.element && a.inArray(e, d) > -1 ? b.attr("aria-selected", "true") : b.attr("aria-selected", "false")
                    })
                })
            }, c.prototype.showLoading = function (a) {
                this.hideLoading();
                var b = this.options.get("translations").get("searching"), c = {disabled: !0, loading: !0, text: b(a)}, d = this.option(c);
                d.className += " loading-results", this.$results.prepend(d)
            }, c.prototype.hideLoading = function () {
                this.$results.find(".loading-results").remove()
            }, c.prototype.option = function (b) {
                var c = document.createElement("li");
                c.className = "select2-results__option";
                var d = {role: "treeitem", "aria-selected": "false"};
                b.disabled && (delete d["aria-selected"], d["aria-disabled"] = "true"), null == b.id && delete d["aria-selected"], null != b._resultId && (c.id = b._resultId), b.title && (c.title = b.title), b.children && (d.role = "group", d["aria-label"] = b.text, delete d["aria-selected"]);
                for (var e in d) {
                    var f = d[e];
                    c.setAttribute(e, f)
                }
                if (b.children) {
                    var g = a(c), h = document.createElement("strong");
                    h.className = "select2-results__group";
                    a(h);
                    this.template(b, h);
                    for (var i = [], j = 0; j < b.children.length; j++) {
                        var k = b.children[j], l = this.option(k);
                        i.push(l)
                    }
                    var m = a("<ul></ul>", {"class": "select2-results__options select2-results__options--nested"});
                    m.append(i), g.append(h), g.append(m)
                } else
                    this.template(b, c);
                return a.data(c, "data", b), c
            }, c.prototype.bind = function (b, c) {
                var d = this, e = b.id + "-results";
                this.$results.attr("id", e), b.on("results:all", function (a) {
                    d.clear(), d.append(a.data), b.isOpen() && (d.setClasses(), d.highlightFirstItem())
                }), b.on("results:append", function (a) {
                    d.append(a.data), b.isOpen() && d.setClasses()
                }), b.on("query", function (a) {
                    d.hideMessages(), d.showLoading(a)
                }), b.on("select", function () {
                    b.isOpen() && (d.setClasses(), d.highlightFirstItem())
                }), b.on("unselect", function () {
                    b.isOpen() && (d.setClasses(), d.highlightFirstItem())
                }), b.on("open", function () {
                    d.$results.attr("aria-expanded", "true"), d.$results.attr("aria-hidden", "false"), d.setClasses(), d.ensureHighlightVisible()
                }), b.on("close", function () {
                    d.$results.attr("aria-expanded", "false"), d.$results.attr("aria-hidden", "true"), d.$results.removeAttr("aria-activedescendant")
                }), b.on("results:toggle", function () {
                    var a = d.getHighlightedResults();
                    0 !== a.length && a.trigger("mouseup")
                }), b.on("results:select", function () {
                    var a = d.getHighlightedResults();
                    if (0 !== a.length) {
                        var b = a.data("data");
                        "true" == a.attr("aria-selected") ? d.trigger("close", {}) : d.trigger("select", {data: b})
                    }
                }), b.on("results:previous", function () {
                    var a = d.getHighlightedResults(), b = d.$results.find("[aria-selected]"), c = b.index(a);
                    if (0 !== c) {
                        var e = c - 1;
                        0 === a.length && (e = 0);
                        var f = b.eq(e);
                        f.trigger("mouseenter");
                        var g = d.$results.offset().top, h = f.offset().top, i = d.$results.scrollTop() + (h - g);
                        0 === e ? d.$results.scrollTop(0) : 0 > h - g && d.$results.scrollTop(i)
                    }
                }), b.on("results:next", function () {
                    var a = d.getHighlightedResults(), b = d.$results.find("[aria-selected]"), c = b.index(a), e = c + 1;
                    if (!(e >= b.length)) {
                        var f = b.eq(e);
                        f.trigger("mouseenter");
                        var g = d.$results.offset().top + d.$results.outerHeight(!1), h = f.offset().top + f.outerHeight(!1), i = d.$results.scrollTop() + h - g;
                        0 === e ? d.$results.scrollTop(0) : h > g && d.$results.scrollTop(i)
                    }
                }), b.on("results:focus", function (a) {
                    a.element.addClass("select2-results__option--highlighted")
                }), b.on("results:message", function (a) {
                    d.displayMessage(a)
                }), a.fn.mousewheel && this.$results.on("mousewheel", function (a) {
                    var b = d.$results.scrollTop(), c = d.$results.get(0).scrollHeight - b + a.deltaY, e = a.deltaY > 0 && b - a.deltaY <= 0, f = a.deltaY < 0 && c <= d.$results.height();
                    e ? (d.$results.scrollTop(0), a.preventDefault(), a.stopPropagation()) : f && (d.$results.scrollTop(d.$results.get(0).scrollHeight - d.$results.height()), a.preventDefault(), a.stopPropagation())
                }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function (b) {
                    var c = a(this), e = c.data("data");
                    return"true" === c.attr("aria-selected") ? void(d.options.get("multiple") ? d.trigger("unselect", {originalEvent: b, data: e}) : d.trigger("close", {})) : void d.trigger("select", {originalEvent: b, data: e})
                }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function (b) {
                    var c = a(this).data("data");
                    d.getHighlightedResults().removeClass("select2-results__option--highlighted"), d.trigger("results:focus", {data: c, element: a(this)})
                })
            }, c.prototype.getHighlightedResults = function () {
                var a = this.$results.find(".select2-results__option--highlighted");
                return a
            }, c.prototype.destroy = function () {
                this.$results.remove()
            }, c.prototype.ensureHighlightVisible = function () {
                var a = this.getHighlightedResults();
                if (0 !== a.length) {
                    var b = this.$results.find("[aria-selected]"), c = b.index(a), d = this.$results.offset().top, e = a.offset().top, f = this.$results.scrollTop() + (e - d), g = e - d;
                    f -= 2 * a.outerHeight(!1), 2 >= c ? this.$results.scrollTop(0) : (g > this.$results.outerHeight() || 0 > g) && this.$results.scrollTop(f)
                }
            }, c.prototype.template = function (b, c) {
                var d = this.options.get("templateResult"), e = this.options.get("escapeMarkup"), f = d(b, c);
                null == f ? c.style.display = "none" : "string" == typeof f ? c.innerHTML = e(f) : a(c).append(f)
            }, c
        }), b.define("select2/keys", [], function () {
            var a = {BACKSPACE: 8, TAB: 9, ENTER: 13, SHIFT: 16, CTRL: 17, ALT: 18, ESC: 27, SPACE: 32, PAGE_UP: 33, PAGE_DOWN: 34, END: 35, HOME: 36, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, DELETE: 46};
            return a
        }), b.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (a, b, c) {
            function d(a, b) {
                this.$element = a, this.options = b, d.__super__.constructor.call(this)
            }
            return b.Extend(d, b.Observable), d.prototype.render = function () {
                var b = a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), b.attr("title", this.$element.attr("title")), b.attr("tabindex", this._tabindex), this.$selection = b, b
            }, d.prototype.bind = function (a, b) {
                var d = this, e = (a.id + "-container", a.id + "-results");
                this.container = a, this.$selection.on("focus", function (a) {
                    d.trigger("focus", a)
                }), this.$selection.on("blur", function (a) {
                    d._handleBlur(a)
                }), this.$selection.on("keydown", function (a) {
                    d.trigger("keypress", a), a.which === c.SPACE && a.preventDefault()
                }), a.on("results:focus", function (a) {
                    d.$selection.attr("aria-activedescendant", a.data._resultId)
                }), a.on("selection:update", function (a) {
                    d.update(a.data)
                }), a.on("open", function () {
                    d.$selection.attr("aria-expanded", "true"), d.$selection.attr("aria-owns", e), d._attachCloseHandler(a)
                }), a.on("close", function () {
                    d.$selection.attr("aria-expanded", "false"), d.$selection.removeAttr("aria-activedescendant"), d.$selection.removeAttr("aria-owns"), d.$selection.focus(), d._detachCloseHandler(a)
                }), a.on("enable", function () {
                    d.$selection.attr("tabindex", d._tabindex)
                }), a.on("disable", function () {
                    d.$selection.attr("tabindex", "-1")
                })
            }, d.prototype._handleBlur = function (b) {
                var c = this;
                window.setTimeout(function () {
                    document.activeElement == c.$selection[0] || a.contains(c.$selection[0], document.activeElement) || c.trigger("blur", b)
                }, 1)
            }, d.prototype._attachCloseHandler = function (b) {
                a(document.body).on("mousedown.select2." + b.id, function (b) {
                    var c = a(b.target), d = c.closest(".select2"), e = a(".select2.select2-container--open");
                    e.each(function () {
                        var b = a(this);
                        if (this != d[0]) {
                            var c = b.data("element");
                            c.select2("close")
                        }
                    })
                })
            }, d.prototype._detachCloseHandler = function (b) {
                a(document.body).off("mousedown.select2." + b.id)
            }, d.prototype.position = function (a, b) {
                var c = b.find(".selection");
                c.append(a)
            }, d.prototype.destroy = function () {
                this._detachCloseHandler(this.container)
            }, d.prototype.update = function (a) {
                throw new Error("The `update` method must be defined in child classes.")
            }, d
        }), b.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (a, b, c, d) {
            function e() {
                e.__super__.constructor.apply(this, arguments)
            }
            return c.Extend(e, b), e.prototype.render = function () {
                var a = e.__super__.render.call(this);
                return a.addClass("select2-selection--single"), a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), a
            }, e.prototype.bind = function (a, b) {
                var c = this;
                e.__super__.bind.apply(this, arguments);
                var d = a.id + "-container";
                this.$selection.find(".select2-selection__rendered").attr("id", d), this.$selection.attr("aria-labelledby", d), this.$selection.on("mousedown", function (a) {
                    1 === a.which && c.trigger("toggle", {originalEvent: a})
                }), this.$selection.on("focus", function (a) {}), this.$selection.on("blur", function (a) {}), a.on("focus", function (b) {
                    a.isOpen() || c.$selection.focus()
                }), a.on("selection:update", function (a) {
                    c.update(a.data)
                })
            }, e.prototype.clear = function () {
                this.$selection.find(".select2-selection__rendered").empty()
            }, e.prototype.display = function (a, b) {
                var c = this.options.get("templateSelection"), d = this.options.get("escapeMarkup");
                return d(c(a, b))
            }, e.prototype.selectionContainer = function () {
                return a("<span></span>")
            }, e.prototype.update = function (a) {
                if (0 === a.length)
                    return void this.clear();
                var b = a[0], c = this.$selection.find(".select2-selection__rendered"), d = this.display(b, c);
                c.empty().append(d), c.prop("title", b.title || b.text)
            }, e
        }), b.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (a, b, c) {
            function d(a, b) {
                d.__super__.constructor.apply(this, arguments)
            }
            return c.Extend(d, b), d.prototype.render = function () {
                var a = d.__super__.render.call(this);
                return a.addClass("select2-selection--multiple"), a.html('<ul class="select2-selection__rendered"></ul>'), a
            }, d.prototype.bind = function (b, c) {
                var e = this;
                d.__super__.bind.apply(this, arguments), this.$selection.on("click", function (a) {
                    e.trigger("toggle", {originalEvent: a})
                }), this.$selection.on("click", ".select2-selection__choice__remove", function (b) {
                    if (!e.options.get("disabled")) {
                        var c = a(this), d = c.parent(), f = d.data("data");
                        e.trigger("unselect", {originalEvent: b, data: f})
                    }
                })
            }, d.prototype.clear = function () {
                this.$selection.find(".select2-selection__rendered").empty()
            }, d.prototype.display = function (a, b) {
                var c = this.options.get("templateSelection"), d = this.options.get("escapeMarkup");
                return d(c(a, b))
            }, d.prototype.selectionContainer = function () {
                var b = a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
                return b
            }, d.prototype.update = function (a) {
                if (this.clear(), 0 !== a.length) {
                    for (var b = [], d = 0; d < a.length; d++) {
                        var e = a[d], f = this.selectionContainer(), g = this.display(e, f);
                        f.append(g), f.prop("title", e.title || e.text), f.data("data", e), b.push(f)
                    }
                    var h = this.$selection.find(".select2-selection__rendered");
                    c.appendMany(h, b)
                }
            }, d
        }), b.define("select2/selection/placeholder", ["../utils"], function (a) {
            function b(a, b, c) {
                this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c)
            }
            return b.prototype.normalizePlaceholder = function (a, b) {
                return"string" == typeof b && (b = {id: "", text: b}), b
            }, b.prototype.createPlaceholder = function (a, b) {
                var c = this.selectionContainer();
                return c.html(this.display(b)), c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), c
            }, b.prototype.update = function (a, b) {
                var c = 1 == b.length && b[0].id != this.placeholder.id, d = b.length > 1;
                if (d || c)
                    return a.call(this, b);
                this.clear();
                var e = this.createPlaceholder(this.placeholder);
                this.$selection.find(".select2-selection__rendered").append(e)
            }, b
        }), b.define("select2/selection/allowClear", ["jquery", "../keys"], function (a, b) {
            function c() {}
            return c.prototype.bind = function (a, b, c) {
                var d = this;
                a.call(this, b, c), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function (a) {
                    d._handleClear(a)
                }), b.on("keypress", function (a) {
                    d._handleKeyboardClear(a, b)
                })
            }, c.prototype._handleClear = function (a, b) {
                if (!this.options.get("disabled")) {
                    var c = this.$selection.find(".select2-selection__clear");
                    if (0 !== c.length) {
                        b.stopPropagation();
                        for (var d = c.data("data"), e = 0; e < d.length; e++) {
                            var f = {data: d[e]};
                            if (this.trigger("unselect", f), f.prevented)
                                return
                        }
                        this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {})
                    }
                }
            }, c.prototype._handleKeyboardClear = function (a, c, d) {
                d.isOpen() || (c.which == b.DELETE || c.which == b.BACKSPACE) && this._handleClear(c)
            }, c.prototype.update = function (b, c) {
                if (b.call(this, c), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === c.length)) {
                    var d = a('<span class="select2-selection__clear">&times;</span>');
                    d.data("data", c), this.$selection.find(".select2-selection__rendered").prepend(d)
                }
            }, c
        }), b.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (a, b, c) {
            function d(a, b, c) {
                a.call(this, b, c)
            }
            return d.prototype.render = function (b) {
                var c = a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                this.$searchContainer = c, this.$search = c.find("input");
                var d = b.call(this);
                return this._transferTabIndex(), d
            }, d.prototype.bind = function (a, b, d) {
                var e = this;
                a.call(this, b, d), b.on("open", function () {
                    e.$search.trigger("focus")
                }), b.on("close", function () {
                    e.$search.val(""), e.$search.removeAttr("aria-activedescendant"), e.$search.trigger("focus")
                }), b.on("enable", function () {
                    e.$search.prop("disabled", !1), e._transferTabIndex()
                }), b.on("disable", function () {
                    e.$search.prop("disabled", !0)
                }), b.on("focus", function (a) {
                    e.$search.trigger("focus")
                }), b.on("results:focus", function (a) {
                    e.$search.attr("aria-activedescendant", a.id)
                }), this.$selection.on("focusin", ".select2-search--inline", function (a) {
                    e.trigger("focus", a)
                }), this.$selection.on("focusout", ".select2-search--inline", function (a) {
                    e._handleBlur(a)
                }), this.$selection.on("keydown", ".select2-search--inline", function (a) {
                    a.stopPropagation(), e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented();
                    var b = a.which;
                    if (b === c.BACKSPACE && "" === e.$search.val()) {
                        var d = e.$searchContainer.prev(".select2-selection__choice");
                        if (d.length > 0) {
                            var f = d.data("data");
                            e.searchRemoveChoice(f), a.preventDefault()
                        }
                    }
                });
                var f = document.documentMode, g = f && 11 >= f;
                this.$selection.on("input.searchcheck", ".select2-search--inline", function (a) {
                    return g ? void e.$selection.off("input.search input.searchcheck") : void e.$selection.off("keyup.search")
                }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function (a) {
                    if (g && "input" === a.type)
                        return void e.$selection.off("input.search input.searchcheck");
                    var b = a.which;
                    b != c.SHIFT && b != c.CTRL && b != c.ALT && b != c.TAB && e.handleSearch(a)
                })
            }, d.prototype._transferTabIndex = function (a) {
                this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
            }, d.prototype.createPlaceholder = function (a, b) {
                this.$search.attr("placeholder", b.text)
            }, d.prototype.update = function (a, b) {
                var c = this.$search[0] == document.activeElement;
                this.$search.attr("placeholder", ""), a.call(this, b), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), c && this.$search.focus()
            }, d.prototype.handleSearch = function () {
                if (this.resizeSearch(), !this._keyUpPrevented) {
                    var a = this.$search.val();
                    this.trigger("query", {term: a})
                }
                this._keyUpPrevented = !1
            }, d.prototype.searchRemoveChoice = function (a, b) {
                this.trigger("unselect", {data: b}), this.$search.val(b.text), this.handleSearch()
            }, d.prototype.resizeSearch = function () {
                this.$search.css("width", "25px");
                var a = "";
                if ("" !== this.$search.attr("placeholder"))
                    a = this.$selection.find(".select2-selection__rendered").innerWidth();
                else {
                    var b = this.$search.val().length + 1;
                    a = .75 * b + "em"
                }
                this.$search.css("width", a)
            }, d
        }), b.define("select2/selection/eventRelay", ["jquery"], function (a) {
            function b() {}
            return b.prototype.bind = function (b, c, d) {
                var e = this, f = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"], g = ["opening", "closing", "selecting", "unselecting"];
                b.call(this, c, d), c.on("*", function (b, c) {
                    if (-1 !== a.inArray(b, f)) {
                        c = c || {};
                        var d = a.Event("select2:" + b, {params: c});
                        e.$element.trigger(d), -1 !== a.inArray(b, g) && (c.prevented = d.isDefaultPrevented())
                    }
                })
            }, b
        }), b.define("select2/translation", ["jquery", "require"], function (a, b) {
            function c(a) {
                this.dict = a || {}
            }
            return c.prototype.all = function () {
                return this.dict
            }, c.prototype.get = function (a) {
                return this.dict[a]
            }, c.prototype.extend = function (b) {
                this.dict = a.extend({}, b.all(), this.dict)
            }, c._cache = {}, c.loadPath = function (a) {
                if (!(a in c._cache)) {
                    var d = b(a);
                    c._cache[a] = d
                }
                return new c(c._cache[a])
            }, c
        }), b.define("select2/diacritics", [], function () {
            var a = {"Ⓐ": "A", "Ａ": "A", "À": "A", "Á": "A", "Â": "A", "Ầ": "A", "Ấ": "A", "Ẫ": "A", "Ẩ": "A", "Ã": "A", "Ā": "A", "Ă": "A", "Ằ": "A", "Ắ": "A", "Ẵ": "A", "Ẳ": "A", "Ȧ": "A", "Ǡ": "A", "Ä": "A", "Ǟ": "A", "Ả": "A", "Å": "A", "Ǻ": "A", "Ǎ": "A", "Ȁ": "A", "Ȃ": "A", "Ạ": "A", "Ậ": "A", "Ặ": "A", "Ḁ": "A", "Ą": "A", "Ⱥ": "A", "Ɐ": "A", "Ꜳ": "AA", "Æ": "AE", "Ǽ": "AE", "Ǣ": "AE", "Ꜵ": "AO", "Ꜷ": "AU", "Ꜹ": "AV", "Ꜻ": "AV", "Ꜽ": "AY", "Ⓑ": "B", "Ｂ": "B", "Ḃ": "B", "Ḅ": "B", "Ḇ": "B", "Ƀ": "B", "Ƃ": "B", "Ɓ": "B", "Ⓒ": "C", "Ｃ": "C", "Ć": "C", "Ĉ": "C", "Ċ": "C", "Č": "C", "Ç": "C", "Ḉ": "C", "Ƈ": "C", "Ȼ": "C", "Ꜿ": "C", "Ⓓ": "D", "Ｄ": "D", "Ḋ": "D", "Ď": "D", "Ḍ": "D", "Ḑ": "D", "Ḓ": "D", "Ḏ": "D", "Đ": "D", "Ƌ": "D", "Ɗ": "D", "Ɖ": "D", "Ꝺ": "D", "Ǳ": "DZ", "Ǆ": "DZ", "ǲ": "Dz", "ǅ": "Dz", "Ⓔ": "E", "Ｅ": "E", "È": "E", "É": "E", "Ê": "E", "Ề": "E", "Ế": "E", "Ễ": "E", "Ể": "E", "Ẽ": "E", "Ē": "E", "Ḕ": "E", "Ḗ": "E", "Ĕ": "E", "Ė": "E", "Ë": "E", "Ẻ": "E", "Ě": "E", "Ȅ": "E", "Ȇ": "E", "Ẹ": "E", "Ệ": "E", "Ȩ": "E", "Ḝ": "E", "Ę": "E", "Ḙ": "E", "Ḛ": "E", "Ɛ": "E", "Ǝ": "E", "Ⓕ": "F", "Ｆ": "F", "Ḟ": "F", "Ƒ": "F", "Ꝼ": "F", "Ⓖ": "G", "Ｇ": "G", "Ǵ": "G", "Ĝ": "G", "Ḡ": "G", "Ğ": "G", "Ġ": "G", "Ǧ": "G", "Ģ": "G", "Ǥ": "G", "Ɠ": "G", "Ꞡ": "G", "Ᵹ": "G", "Ꝿ": "G", "Ⓗ": "H", "Ｈ": "H", "Ĥ": "H", "Ḣ": "H", "Ḧ": "H", "Ȟ": "H", "Ḥ": "H", "Ḩ": "H", "Ḫ": "H", "Ħ": "H", "Ⱨ": "H", "Ⱶ": "H", "Ɥ": "H", "Ⓘ": "I", "Ｉ": "I", "Ì": "I", "Í": "I", "Î": "I", "Ĩ": "I", "Ī": "I", "Ĭ": "I", "İ": "I", "Ï": "I", "Ḯ": "I", "Ỉ": "I", "Ǐ": "I", "Ȉ": "I", "Ȋ": "I", "Ị": "I", "Į": "I", "Ḭ": "I", "Ɨ": "I", "Ⓙ": "J", "Ｊ": "J", "Ĵ": "J", "Ɉ": "J", "Ⓚ": "K", "Ｋ": "K", "Ḱ": "K", "Ǩ": "K", "Ḳ": "K", "Ķ": "K", "Ḵ": "K", "Ƙ": "K", "Ⱪ": "K", "Ꝁ": "K", "Ꝃ": "K", "Ꝅ": "K", "Ꞣ": "K", "Ⓛ": "L", "Ｌ": "L", "Ŀ": "L", "Ĺ": "L", "Ľ": "L", "Ḷ": "L", "Ḹ": "L", "Ļ": "L", "Ḽ": "L", "Ḻ": "L", "Ł": "L", "Ƚ": "L", "Ɫ": "L", "Ⱡ": "L", "Ꝉ": "L", "Ꝇ": "L", "Ꞁ": "L", "Ǉ": "LJ", "ǈ": "Lj", "Ⓜ": "M", "Ｍ": "M", "Ḿ": "M", "Ṁ": "M", "Ṃ": "M", "Ɱ": "M", "Ɯ": "M", "Ⓝ": "N", "Ｎ": "N", "Ǹ": "N", "Ń": "N", "Ñ": "N", "Ṅ": "N", "Ň": "N", "Ṇ": "N", "Ņ": "N", "Ṋ": "N", "Ṉ": "N", "Ƞ": "N", "Ɲ": "N", "Ꞑ": "N", "Ꞥ": "N", "Ǌ": "NJ", "ǋ": "Nj", "Ⓞ": "O", "Ｏ": "O", "Ò": "O", "Ó": "O", "Ô": "O", "Ồ": "O", "Ố": "O", "Ỗ": "O", "Ổ": "O", "Õ": "O", "Ṍ": "O", "Ȭ": "O", "Ṏ": "O", "Ō": "O", "Ṑ": "O", "Ṓ": "O", "Ŏ": "O", "Ȯ": "O", "Ȱ": "O", "Ö": "O", "Ȫ": "O", "Ỏ": "O", "Ő": "O", "Ǒ": "O", "Ȍ": "O", "Ȏ": "O", "Ơ": "O", "Ờ": "O", "Ớ": "O", "Ỡ": "O", "Ở": "O", "Ợ": "O", "Ọ": "O", "Ộ": "O", "Ǫ": "O", "Ǭ": "O", "Ø": "O", "Ǿ": "O", "Ɔ": "O", "Ɵ": "O", "Ꝋ": "O", "Ꝍ": "O", "Ƣ": "OI", "Ꝏ": "OO", "Ȣ": "OU", "Ⓟ": "P", "Ｐ": "P", "Ṕ": "P", "Ṗ": "P", "Ƥ": "P", "Ᵽ": "P", "Ꝑ": "P", "Ꝓ": "P", "Ꝕ": "P", "Ⓠ": "Q", "Ｑ": "Q", "Ꝗ": "Q", "Ꝙ": "Q", "Ɋ": "Q", "Ⓡ": "R", "Ｒ": "R", "Ŕ": "R", "Ṙ": "R", "Ř": "R", "Ȑ": "R", "Ȓ": "R", "Ṛ": "R", "Ṝ": "R", "Ŗ": "R", "Ṟ": "R", "Ɍ": "R", "Ɽ": "R", "Ꝛ": "R", "Ꞧ": "R", "Ꞃ": "R", "Ⓢ": "S", "Ｓ": "S", "ẞ": "S", "Ś": "S", "Ṥ": "S", "Ŝ": "S", "Ṡ": "S", "Š": "S", "Ṧ": "S", "Ṣ": "S", "Ṩ": "S", "Ș": "S", "Ş": "S", "Ȿ": "S", "Ꞩ": "S", "Ꞅ": "S", "Ⓣ": "T", "Ｔ": "T", "Ṫ": "T", "Ť": "T", "Ṭ": "T", "Ț": "T", "Ţ": "T", "Ṱ": "T", "Ṯ": "T", "Ŧ": "T", "Ƭ": "T", "Ʈ": "T", "Ⱦ": "T", "Ꞇ": "T", "Ꜩ": "TZ", "Ⓤ": "U", "Ｕ": "U", "Ù": "U", "Ú": "U", "Û": "U", "Ũ": "U", "Ṹ": "U", "Ū": "U", "Ṻ": "U", "Ŭ": "U", "Ü": "U", "Ǜ": "U", "Ǘ": "U", "Ǖ": "U", "Ǚ": "U", "Ủ": "U", "Ů": "U", "Ű": "U", "Ǔ": "U", "Ȕ": "U", "Ȗ": "U", "Ư": "U", "Ừ": "U", "Ứ": "U", "Ữ": "U", "Ử": "U", "Ự": "U", "Ụ": "U", "Ṳ": "U", "Ų": "U", "Ṷ": "U", "Ṵ": "U", "Ʉ": "U", "Ⓥ": "V", "Ｖ": "V", "Ṽ": "V", "Ṿ": "V", "Ʋ": "V", "Ꝟ": "V", "Ʌ": "V", "Ꝡ": "VY", "Ⓦ": "W", "Ｗ": "W", "Ẁ": "W", "Ẃ": "W", "Ŵ": "W", "Ẇ": "W", "Ẅ": "W", "Ẉ": "W", "Ⱳ": "W", "Ⓧ": "X", "Ｘ": "X", "Ẋ": "X", "Ẍ": "X", "Ⓨ": "Y", "Ｙ": "Y", "Ỳ": "Y", "Ý": "Y", "Ŷ": "Y", "Ỹ": "Y", "Ȳ": "Y", "Ẏ": "Y", "Ÿ": "Y", "Ỷ": "Y", "Ỵ": "Y", "Ƴ": "Y", "Ɏ": "Y", "Ỿ": "Y", "Ⓩ": "Z", "Ｚ": "Z", "Ź": "Z", "Ẑ": "Z", "Ż": "Z", "Ž": "Z", "Ẓ": "Z", "Ẕ": "Z", "Ƶ": "Z", "Ȥ": "Z", "Ɀ": "Z", "Ⱬ": "Z", "Ꝣ": "Z", "ⓐ": "a", "ａ": "a", "ẚ": "a", "à": "a", "á": "a", "â": "a", "ầ": "a", "ấ": "a", "ẫ": "a", "ẩ": "a", "ã": "a", "ā": "a", "ă": "a", "ằ": "a", "ắ": "a", "ẵ": "a", "ẳ": "a", "ȧ": "a", "ǡ": "a", "ä": "a", "ǟ": "a", "ả": "a", "å": "a", "ǻ": "a", "ǎ": "a", "ȁ": "a", "ȃ": "a", "ạ": "a", "ậ": "a", "ặ": "a", "ḁ": "a", "ą": "a", "ⱥ": "a", "ɐ": "a", "ꜳ": "aa", "æ": "ae", "ǽ": "ae", "ǣ": "ae", "ꜵ": "ao", "ꜷ": "au", "ꜹ": "av", "ꜻ": "av", "ꜽ": "ay", "ⓑ": "b", "ｂ": "b", "ḃ": "b", "ḅ": "b", "ḇ": "b", "ƀ": "b", "ƃ": "b", "ɓ": "b", "ⓒ": "c", "ｃ": "c", "ć": "c", "ĉ": "c", "ċ": "c", "č": "c", "ç": "c", "ḉ": "c", "ƈ": "c", "ȼ": "c", "ꜿ": "c", "ↄ": "c", "ⓓ": "d", "ｄ": "d", "ḋ": "d", "ď": "d", "ḍ": "d", "ḑ": "d", "ḓ": "d", "ḏ": "d", "đ": "d", "ƌ": "d", "ɖ": "d", "ɗ": "d", "ꝺ": "d", "ǳ": "dz", "ǆ": "dz", "ⓔ": "e", "ｅ": "e", "è": "e", "é": "e", "ê": "e", "ề": "e", "ế": "e", "ễ": "e", "ể": "e", "ẽ": "e", "ē": "e", "ḕ": "e", "ḗ": "e", "ĕ": "e", "ė": "e", "ë": "e", "ẻ": "e", "ě": "e", "ȅ": "e", "ȇ": "e", "ẹ": "e", "ệ": "e", "ȩ": "e", "ḝ": "e", "ę": "e", "ḙ": "e", "ḛ": "e", "ɇ": "e", "ɛ": "e", "ǝ": "e", "ⓕ": "f", "ｆ": "f", "ḟ": "f", "ƒ": "f", "ꝼ": "f", "ⓖ": "g", "ｇ": "g", "ǵ": "g", "ĝ": "g", "ḡ": "g", "ğ": "g", "ġ": "g", "ǧ": "g", "ģ": "g", "ǥ": "g", "ɠ": "g", "ꞡ": "g", "ᵹ": "g", "ꝿ": "g", "ⓗ": "h", "ｈ": "h", "ĥ": "h", "ḣ": "h", "ḧ": "h", "ȟ": "h", "ḥ": "h", "ḩ": "h", "ḫ": "h", "ẖ": "h", "ħ": "h", "ⱨ": "h", "ⱶ": "h", "ɥ": "h", "ƕ": "hv", "ⓘ": "i", "ｉ": "i", "ì": "i", "í": "i", "î": "i", "ĩ": "i", "ī": "i", "ĭ": "i", "ï": "i", "ḯ": "i", "ỉ": "i", "ǐ": "i", "ȉ": "i", "ȋ": "i", "ị": "i", "į": "i", "ḭ": "i", "ɨ": "i", "ı": "i", "ⓙ": "j", "ｊ": "j", "ĵ": "j", "ǰ": "j", "ɉ": "j", "ⓚ": "k", "ｋ": "k", "ḱ": "k", "ǩ": "k", "ḳ": "k", "ķ": "k", "ḵ": "k", "ƙ": "k", "ⱪ": "k", "ꝁ": "k", "ꝃ": "k", "ꝅ": "k", "ꞣ": "k", "ⓛ": "l", "ｌ": "l", "ŀ": "l", "ĺ": "l", "ľ": "l", "ḷ": "l", "ḹ": "l", "ļ": "l", "ḽ": "l", "ḻ": "l", "ſ": "l", "ł": "l", "ƚ": "l", "ɫ": "l", "ⱡ": "l", "ꝉ": "l", "ꞁ": "l", "ꝇ": "l", "ǉ": "lj", "ⓜ": "m", "ｍ": "m", "ḿ": "m", "ṁ": "m", "ṃ": "m", "ɱ": "m", "ɯ": "m", "ⓝ": "n", "ｎ": "n", "ǹ": "n", "ń": "n", "ñ": "n", "ṅ": "n", "ň": "n", "ṇ": "n", "ņ": "n", "ṋ": "n", "ṉ": "n", "ƞ": "n", "ɲ": "n", "ŉ": "n", "ꞑ": "n", "ꞥ": "n", "ǌ": "nj", "ⓞ": "o", "ｏ": "o", "ò": "o", "ó": "o", "ô": "o", "ồ": "o", "ố": "o", "ỗ": "o", "ổ": "o", "õ": "o", "ṍ": "o", "ȭ": "o", "ṏ": "o", "ō": "o", "ṑ": "o", "ṓ": "o", "ŏ": "o", "ȯ": "o", "ȱ": "o", "ö": "o", "ȫ": "o", "ỏ": "o", "ő": "o", "ǒ": "o", "ȍ": "o", "ȏ": "o", "ơ": "o", "ờ": "o", "ớ": "o", "ỡ": "o", "ở": "o", "ợ": "o", "ọ": "o", "ộ": "o", "ǫ": "o", "ǭ": "o", "ø": "o", "ǿ": "o", "ɔ": "o", "ꝋ": "o", "ꝍ": "o", "ɵ": "o", "ƣ": "oi", "ȣ": "ou", "ꝏ": "oo", "ⓟ": "p", "ｐ": "p", "ṕ": "p", "ṗ": "p", "ƥ": "p", "ᵽ": "p", "ꝑ": "p", "ꝓ": "p", "ꝕ": "p", "ⓠ": "q", "ｑ": "q", "ɋ": "q", "ꝗ": "q", "ꝙ": "q", "ⓡ": "r", "ｒ": "r", "ŕ": "r", "ṙ": "r", "ř": "r", "ȑ": "r", "ȓ": "r", "ṛ": "r", "ṝ": "r", "ŗ": "r", "ṟ": "r", "ɍ": "r", "ɽ": "r", "ꝛ": "r", "ꞧ": "r", "ꞃ": "r", "ⓢ": "s", "ｓ": "s", "ß": "s", "ś": "s", "ṥ": "s", "ŝ": "s", "ṡ": "s", "š": "s", "ṧ": "s", "ṣ": "s", "ṩ": "s", "ș": "s", "ş": "s", "ȿ": "s", "ꞩ": "s", "ꞅ": "s", "ẛ": "s", "ⓣ": "t", "ｔ": "t", "ṫ": "t", "ẗ": "t", "ť": "t", "ṭ": "t", "ț": "t", "ţ": "t", "ṱ": "t", "ṯ": "t", "ŧ": "t", "ƭ": "t", "ʈ": "t", "ⱦ": "t", "ꞇ": "t", "ꜩ": "tz", "ⓤ": "u", "ｕ": "u", "ù": "u", "ú": "u", "û": "u", "ũ": "u", "ṹ": "u", "ū": "u", "ṻ": "u", "ŭ": "u", "ü": "u", "ǜ": "u", "ǘ": "u", "ǖ": "u", "ǚ": "u", "ủ": "u", "ů": "u", "ű": "u", "ǔ": "u", "ȕ": "u", "ȗ": "u", "ư": "u", "ừ": "u", "ứ": "u", "ữ": "u", "ử": "u", "ự": "u", "ụ": "u", "ṳ": "u", "ų": "u", "ṷ": "u", "ṵ": "u", "ʉ": "u", "ⓥ": "v", "ｖ": "v", "ṽ": "v", "ṿ": "v", "ʋ": "v", "ꝟ": "v", "ʌ": "v", "ꝡ": "vy", "ⓦ": "w", "ｗ": "w", "ẁ": "w", "ẃ": "w", "ŵ": "w", "ẇ": "w", "ẅ": "w", "ẘ": "w", "ẉ": "w", "ⱳ": "w", "ⓧ": "x", "ｘ": "x", "ẋ": "x", "ẍ": "x", "ⓨ": "y", "ｙ": "y", "ỳ": "y", "ý": "y", "ŷ": "y", "ỹ": "y", "ȳ": "y", "ẏ": "y", "ÿ": "y", "ỷ": "y", "ẙ": "y", "ỵ": "y", "ƴ": "y", "ɏ": "y", "ỿ": "y", "ⓩ": "z", "ｚ": "z", "ź": "z", "ẑ": "z", "ż": "z", "ž": "z", "ẓ": "z", "ẕ": "z", "ƶ": "z", "ȥ": "z", "ɀ": "z", "ⱬ": "z", "ꝣ": "z", "Ά": "Α", "Έ": "Ε", "Ή": "Η", "Ί": "Ι", "Ϊ": "Ι", "Ό": "Ο", "Ύ": "Υ", "Ϋ": "Υ", "Ώ": "Ω", "ά": "α", "έ": "ε", "ή": "η", "ί": "ι", "ϊ": "ι", "ΐ": "ι", "ό": "ο", "ύ": "υ", "ϋ": "υ", "ΰ": "υ", "ω": "ω", "ς": "σ"};
            return a
        }), b.define("select2/data/base", ["../utils"], function (a) {
            function b(a, c) {
                b.__super__.constructor.call(this)
            }
            return a.Extend(b, a.Observable), b.prototype.current = function (a) {
                throw new Error("The `current` method must be defined in child classes.")
            }, b.prototype.query = function (a, b) {
                throw new Error("The `query` method must be defined in child classes.")
            }, b.prototype.bind = function (a, b) {}, b.prototype.destroy = function () {}, b.prototype.generateResultId = function (b, c) {
                var d = b.id + "-result-";
                return d += a.generateChars(4), d += null != c.id ? "-" + c.id.toString() : "-" + a.generateChars(4)
            }, b
        }), b.define("select2/data/select", ["./base", "../utils", "jquery"], function (a, b, c) {
            function d(a, b) {
                this.$element = a, this.options = b, d.__super__.constructor.call(this)
            }
            return b.Extend(d, a), d.prototype.current = function (a) {
                var b = [], d = this;
                this.$element.find(":selected").each(function () {
                    var a = c(this), e = d.item(a);
                    b.push(e)
                }), a(b)
            }, d.prototype.select = function (a) {
                var b = this;
                if (a.selected = !0, c(a.element).is("option"))
                    return a.element.selected = !0, void this.$element.trigger("change");
                if (this.$element.prop("multiple"))
                    this.current(function (d) {
                        var e = [];
                        a = [a], a.push.apply(a, d);
                        for (var f = 0; f < a.length; f++) {
                            var g = a[f].id;
                            -1 === c.inArray(g, e) && e.push(g)
                        }
                        b.$element.val(e), b.$element.trigger("change")
                    });
                else {
                    var d = a.id;
                    this.$element.val(d), this.$element.trigger("change")
                }
            }, d.prototype.unselect = function (a) {
                var b = this;
                if (this.$element.prop("multiple"))
                    return a.selected = !1, c(a.element).is("option") ? (a.element.selected = !1, void this.$element.trigger("change")) : void this.current(function (d) {
                        for (var e = [], f = 0; f < d.length; f++) {
                            var g = d[f].id;
                            g !== a.id && -1 === c.inArray(g, e) && e.push(g)
                        }
                        b.$element.val(e), b.$element.trigger("change")
                    })
            }, d.prototype.bind = function (a, b) {
                var c = this;
                this.container = a, a.on("select", function (a) {
                    c.select(a.data)
                }), a.on("unselect", function (a) {
                    c.unselect(a.data)
                })
            }, d.prototype.destroy = function () {
                this.$element.find("*").each(function () {
                    c.removeData(this, "data")
                })
            }, d.prototype.query = function (a, b) {
                var d = [], e = this, f = this.$element.children();
                f.each(function () {
                    var b = c(this);
                    if (b.is("option") || b.is("optgroup")) {
                        var f = e.item(b), g = e.matches(a, f);
                        null !== g && d.push(g)
                    }
                }), b({results: d})
            }, d.prototype.addOptions = function (a) {
                b.appendMany(this.$element, a)
            }, d.prototype.option = function (a) {
                var b;
                a.children ? (b = document.createElement("optgroup"), b.label = a.text) : (b = document.createElement("option"), void 0 !== b.textContent ? b.textContent = a.text : b.innerText = a.text), a.id && (b.value = a.id), a.disabled && (b.disabled = !0), a.selected && (b.selected = !0), a.title && (b.title = a.title);
                var d = c(b), e = this._normalizeItem(a);
                return e.element = b, c.data(b, "data", e), d
            }, d.prototype.item = function (a) {
                var b = {};
                if (b = c.data(a[0], "data"), null != b)
                    return b;
                if (a.is("option"))
                    b = {id: a.val(), text: a.text(), disabled: a.prop("disabled"), selected: a.prop("selected"), title: a.prop("title")};
                else if (a.is("optgroup")) {
                    b = {text: a.prop("label"), children: [], title: a.prop("title")};
                    for (var d = a.children("option"), e = [], f = 0; f < d.length; f++) {
                        var g = c(d[f]), h = this.item(g);
                        e.push(h)
                    }
                    b.children = e
                }
                return b = this._normalizeItem(b), b.element = a[0], c.data(a[0], "data", b), b
            }, d.prototype._normalizeItem = function (a) {
                c.isPlainObject(a) || (a = {id: a, text: a}), a = c.extend({}, {text: ""}, a);
                var b = {selected: !1, disabled: !1};
                return null != a.id && (a.id = a.id.toString()), null != a.text && (a.text = a.text.toString()), null == a._resultId && a.id && null != this.container && (a._resultId = this.generateResultId(this.container, a)), c.extend({}, b, a)
            }, d.prototype.matches = function (a, b) {
                var c = this.options.get("matcher");
                return c(a, b)
            }, d
        }), b.define("select2/data/array", ["./select", "../utils", "jquery"], function (a, b, c) {
            function d(a, b) {
                var c = b.get("data") || [];
                d.__super__.constructor.call(this, a, b), this.addOptions(this.convertToOptions(c))
            }
            return b.Extend(d, a), d.prototype.select = function (a) {
                var b = this.$element.find("option").filter(function (b, c) {
                    return c.value == a.id.toString()
                });
                0 === b.length && (b = this.option(a), this.addOptions(b)), d.__super__.select.call(this, a)
            }, d.prototype.convertToOptions = function (a) {
                function d(a) {
                    return function () {
                        return c(this).val() == a.id
                    }
                }
                for (var e = this, f = this.$element.find("option"), g = f.map(function () {
                    return e.item(c(this)).id
                }).get(), h = [], i = 0; i < a.length; i++) {
                    var j = this._normalizeItem(a[i]);
                    if (c.inArray(j.id, g) >= 0) {
                        var k = f.filter(d(j)), l = this.item(k), m = c.extend(!0, {}, j, l), n = this.option(m);
                        k.replaceWith(n)
                    } else {
                        var o = this.option(j);
                        if (j.children) {
                            var p = this.convertToOptions(j.children);
                            b.appendMany(o, p)
                        }
                        h.push(o)
                    }
                }
                return h
            }, d
        }), b.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (a, b, c) {
            function d(a, b) {
                this.ajaxOptions = this._applyDefaults(b.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), d.__super__.constructor.call(this, a, b)
            }
            return b.Extend(d, a), d.prototype._applyDefaults = function (a) {
                var b = {data: function (a) {
                        return c.extend({}, a, {q: a.term})
                    }, transport: function (a, b, d) {
                        var e = c.ajax(a);
                        return e.then(b), e.fail(d), e
                    }};
                return c.extend({}, b, a, !0)
            }, d.prototype.processResults = function (a) {
                return a
            }, d.prototype.query = function (a, b) {
                function d() {
                    var d = f.transport(f, function (d) {
                        var f = e.processResults(d, a);
                        e.options.get("debug") && window.console && console.error && (f && f.results && c.isArray(f.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), b(f)
                    }, function () {
                        d.status && "0" === d.status || e.trigger("results:message", {message: "errorLoading"})
                    });
                    e._request = d
                }
                var e = this;
                null != this._request && (c.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                var f = c.extend({type: "GET"}, this.ajaxOptions);
                "function" == typeof f.url && (f.url = f.url.call(this.$element, a)), "function" == typeof f.data && (f.data = f.data.call(this.$element, a)), this.ajaxOptions.delay && null != a.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(d, this.ajaxOptions.delay)) : d()
            }, d
        }), b.define("select2/data/tags", ["jquery"], function (a) {
            function b(b, c, d) {
                var e = d.get("tags"), f = d.get("createTag");
                void 0 !== f && (this.createTag = f);
                var g = d.get("insertTag");
                if (void 0 !== g && (this.insertTag = g), b.call(this, c, d), a.isArray(e))
                    for (var h = 0; h < e.length; h++) {
                        var i = e[h], j = this._normalizeItem(i), k = this.option(j);
                        this.$element.append(k)
                    }
            }
            return b.prototype.query = function (a, b, c) {
                function d(a, f) {
                    for (var g = a.results, h = 0; h < g.length; h++) {
                        var i = g[h], j = null != i.children && !d({results: i.children}, !0), k = i.text === b.term;
                        if (k || j)
                            return f ? !1 : (a.data = g, void c(a))
                    }
                    if (f)
                        return!0;
                    var l = e.createTag(b);
                    if (null != l) {
                        var m = e.option(l);
                        m.attr("data-select2-tag", !0), e.addOptions([m]), e.insertTag(g, l)
                    }
                    a.results = g, c(a)
                }
                var e = this;
                return this._removeOldTags(), null == b.term || null != b.page ? void a.call(this, b, c) : void a.call(this, b, d)
            }, b.prototype.createTag = function (b, c) {
                var d = a.trim(c.term);
                return"" === d ? null : {id: d, text: d}
            }, b.prototype.insertTag = function (a, b, c) {
                b.unshift(c)
            }, b.prototype._removeOldTags = function (b) {
                var c = (this._lastTag, this.$element.find("option[data-select2-tag]"));
                c.each(function () {
                    this.selected || a(this).remove()
                })
            }, b
        }), b.define("select2/data/tokenizer", ["jquery"], function (a) {
            function b(a, b, c) {
                var d = c.get("tokenizer");
                void 0 !== d && (this.tokenizer = d), a.call(this, b, c)
            }
            return b.prototype.bind = function (a, b, c) {
                a.call(this, b, c), this.$search = b.dropdown.$search || b.selection.$search || c.find(".select2-search__field")
            }, b.prototype.query = function (b, c, d) {
                function e(b) {
                    var c = g._normalizeItem(b), d = g.$element.find("option").filter(function () {
                        return a(this).val() === c.id
                    });
                    if (!d.length) {
                        var e = g.option(c);
                        e.attr("data-select2-tag", !0), g._removeOldTags(), g.addOptions([e])
                    }
                    f(c)
                }
                function f(a) {
                    g.trigger("select", {data: a})
                }
                var g = this;
                c.term = c.term || "";
                var h = this.tokenizer(c, this.options, e);
                h.term !== c.term && (this.$search.length && (this.$search.val(h.term), this.$search.focus()), c.term = h.term), b.call(this, c, d)
            }, b.prototype.tokenizer = function (b, c, d, e) {
                for (var f = d.get("tokenSeparators") || [], g = c.term, h = 0, i = this.createTag || function (a) {
                    return{id: a.term, text: a.term}
                }; h < g.length; ) {
                    var j = g[h];
                    if (-1 !== a.inArray(j, f)) {
                        var k = g.substr(0, h), l = a.extend({}, c, {term: k}), m = i(l);
                        null != m ? (e(m), g = g.substr(h + 1) || "", h = 0) : h++
                    } else
                        h++
                }
                return{term: g}
            }, b
        }), b.define("select2/data/minimumInputLength", [], function () {
            function a(a, b, c) {
                this.minimumInputLength = c.get("minimumInputLength"), a.call(this, b, c)
            }
            return a.prototype.query = function (a, b, c) {
                return b.term = b.term || "", b.term.length < this.minimumInputLength ? void this.trigger("results:message", {message: "inputTooShort", args: {minimum: this.minimumInputLength, input: b.term, params: b}}) : void a.call(this, b, c)
            }, a
        }), b.define("select2/data/maximumInputLength", [], function () {
            function a(a, b, c) {
                this.maximumInputLength = c.get("maximumInputLength"), a.call(this, b, c)
            }
            return a.prototype.query = function (a, b, c) {
                return b.term = b.term || "", this.maximumInputLength > 0 && b.term.length > this.maximumInputLength ? void this.trigger("results:message", {message: "inputTooLong", args: {maximum: this.maximumInputLength, input: b.term, params: b}}) : void a.call(this, b, c)
            }, a
        }), b.define("select2/data/maximumSelectionLength", [], function () {
            function a(a, b, c) {
                this.maximumSelectionLength = c.get("maximumSelectionLength"), a.call(this, b, c)
            }
            return a.prototype.query = function (a, b, c) {
                var d = this;
                this.current(function (e) {
                    var f = null != e ? e.length : 0;
                    return d.maximumSelectionLength > 0 && f >= d.maximumSelectionLength ? void d.trigger("results:message", {message: "maximumSelected", args: {maximum: d.maximumSelectionLength}}) : void a.call(d, b, c)
                })
            }, a
        }), b.define("select2/dropdown", ["jquery", "./utils"], function (a, b) {
            function c(a, b) {
                this.$element = a, this.options = b, c.__super__.constructor.call(this)
            }
            return b.Extend(c, b.Observable), c.prototype.render = function () {
                var b = a('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                return b.attr("dir", this.options.get("dir")), this.$dropdown = b, b
            }, c.prototype.bind = function () {}, c.prototype.position = function (a, b) {}, c.prototype.destroy = function () {
                this.$dropdown.remove()
            }, c
        }), b.define("select2/dropdown/search", ["jquery", "../utils"], function (a, b) {
            function c() {}
            return c.prototype.render = function (b) {
                var c = b.call(this), d = a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
                return this.$searchContainer = d, this.$search = d.find("input"), c.prepend(d), c
            }, c.prototype.bind = function (b, c, d) {
                var e = this;
                b.call(this, c, d), this.$search.on("keydown", function (a) {
                    e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented()
                }), this.$search.on("input", function (b) {
                    a(this).off("keyup")
                }), this.$search.on("keyup input", function (a) {
                    e.handleSearch(a)
                }), c.on("open", function () {
                    e.$search.attr("tabindex", 0), e.$search.focus(), window.setTimeout(function () {
                        e.$search.focus()
                    }, 0)
                }), c.on("close", function () {
                    e.$search.attr("tabindex", -1), e.$search.val("")
                }), c.on("focus", function () {
                    c.isOpen() && e.$search.focus()
                }), c.on("results:all", function (a) {
                    if (null == a.query.term || "" === a.query.term) {
                        var b = e.showSearch(a);
                        b ? e.$searchContainer.removeClass("select2-search--hide") : e.$searchContainer.addClass("select2-search--hide")
                    }
                })
            }, c.prototype.handleSearch = function (a) {
                if (!this._keyUpPrevented) {
                    var b = this.$search.val();
                    this.trigger("query", {term: b})
                }
                this._keyUpPrevented = !1
            }, c.prototype.showSearch = function (a, b) {
                return!0
            }, c
        }), b.define("select2/dropdown/hidePlaceholder", [], function () {
            function a(a, b, c, d) {
                this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c, d)
            }
            return a.prototype.append = function (a, b) {
                b.results = this.removePlaceholder(b.results), a.call(this, b)
            }, a.prototype.normalizePlaceholder = function (a, b) {
                return"string" == typeof b && (b = {id: "", text: b}), b
            }, a.prototype.removePlaceholder = function (a, b) {
                for (var c = b.slice(0), d = b.length - 1; d >= 0; d--) {
                    var e = b[d];
                    this.placeholder.id === e.id && c.splice(d, 1)
                }
                return c
            }, a
        }), b.define("select2/dropdown/infiniteScroll", ["jquery"], function (a) {
            function b(a, b, c, d) {
                this.lastParams = {}, a.call(this, b, c, d), this.$loadingMore = this.createLoadingMore(), this.loading = !1
            }
            return b.prototype.append = function (a, b) {
                this.$loadingMore.remove(), this.loading = !1, a.call(this, b), this.showLoadingMore(b) && this.$results.append(this.$loadingMore)
            }, b.prototype.bind = function (b, c, d) {
                var e = this;
                b.call(this, c, d), c.on("query", function (a) {
                    e.lastParams = a, e.loading = !0
                }), c.on("query:append", function (a) {
                    e.lastParams = a, e.loading = !0
                }), this.$results.on("scroll", function () {
                    var b = a.contains(document.documentElement, e.$loadingMore[0]);
                    if (!e.loading && b) {
                        var c = e.$results.offset().top + e.$results.outerHeight(!1), d = e.$loadingMore.offset().top + e.$loadingMore.outerHeight(!1);
                        c + 50 >= d && e.loadMore()
                    }
                })
            }, b.prototype.loadMore = function () {
                this.loading = !0;
                var b = a.extend({}, {page: 1}, this.lastParams);
                b.page++, this.trigger("query:append", b)
            }, b.prototype.showLoadingMore = function (a, b) {
                return b.pagination && b.pagination.more
            }, b.prototype.createLoadingMore = function () {
                var b = a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'), c = this.options.get("translations").get("loadingMore");
                return b.html(c(this.lastParams)), b
            }, b
        }), b.define("select2/dropdown/attachBody", ["jquery", "../utils"], function (a, b) {
            function c(b, c, d) {
                this.$dropdownParent = d.get("dropdownParent") || a(document.body), b.call(this, c, d)
            }
            return c.prototype.bind = function (a, b, c) {
                var d = this, e = !1;
                a.call(this, b, c), b.on("open", function () {
                    d._showDropdown(), d._attachPositioningHandler(b), e || (e = !0, b.on("results:all", function () {
                        d._positionDropdown(), d._resizeDropdown()
                    }), b.on("results:append", function () {
                        d._positionDropdown(), d._resizeDropdown()
                    }))
                }), b.on("close", function () {
                    d._hideDropdown(), d._detachPositioningHandler(b)
                }), this.$dropdownContainer.on("mousedown", function (a) {
                    a.stopPropagation()
                })
            }, c.prototype.destroy = function (a) {
                a.call(this), this.$dropdownContainer.remove()
            }, c.prototype.position = function (a, b, c) {
                b.attr("class", c.attr("class")), b.removeClass("select2"), b.addClass("select2-container--open"), b.css({position: "absolute", top: -999999}), this.$container = c
            }, c.prototype.render = function (b) {
                var c = a("<span></span>"), d = b.call(this);
                return c.append(d), this.$dropdownContainer = c, c
            }, c.prototype._hideDropdown = function (a) {
                this.$dropdownContainer.detach()
            }, c.prototype._attachPositioningHandler = function (c, d) {
                var e = this, f = "scroll.select2." + d.id, g = "resize.select2." + d.id, h = "orientationchange.select2." + d.id, i = this.$container.parents().filter(b.hasScroll);
                i.each(function () {
                    a(this).data("select2-scroll-position", {x: a(this).scrollLeft(), y: a(this).scrollTop()})
                }), i.on(f, function (b) {
                    var c = a(this).data("select2-scroll-position");
                    a(this).scrollTop(c.y)
                }), a(window).on(f + " " + g + " " + h, function (a) {
                    e._positionDropdown(), e._resizeDropdown()
                })
            }, c.prototype._detachPositioningHandler = function (c, d) {
                var e = "scroll.select2." + d.id, f = "resize.select2." + d.id, g = "orientationchange.select2." + d.id, h = this.$container.parents().filter(b.hasScroll);
                h.off(e), a(window).off(e + " " + f + " " + g)
            }, c.prototype._positionDropdown = function () {
                var b = a(window), c = this.$dropdown.hasClass("select2-dropdown--above"), d = this.$dropdown.hasClass("select2-dropdown--below"), e = null, f = this.$container.offset();
                f.bottom = f.top + this.$container.outerHeight(!1);
                var g = {height: this.$container.outerHeight(!1)};
                g.top = f.top, g.bottom = f.top + g.height;
                var h = {height: this.$dropdown.outerHeight(!1)}, i = {top: b.scrollTop(), bottom: b.scrollTop() + b.height()}, j = i.top < f.top - h.height, k = i.bottom > f.bottom + h.height, l = {left: f.left, top: g.bottom}, m = this.$dropdownParent;
                "static" === m.css("position") && (m = m.offsetParent());
                var n = m.offset();
                l.top -= n.top, l.left -= n.left, c || d || (e = "below"), k || !j || c ? !j && k && c && (e = "below") : e = "above", ("above" == e || c && "below" !== e) && (l.top = g.top - n.top - h.height), null != e && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + e), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + e)), this.$dropdownContainer.css(l)
            }, c.prototype._resizeDropdown = function () {
                var a = {width: this.$container.outerWidth(!1) + "px"};
                this.options.get("dropdownAutoWidth") && (a.minWidth = a.width, a.position = "relative", a.width = "auto"), this.$dropdown.css(a)
            }, c.prototype._showDropdown = function (a) {
                this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
            }, c
        }), b.define("select2/dropdown/minimumResultsForSearch", [], function () {
            function a(b) {
                for (var c = 0, d = 0; d < b.length; d++) {
                    var e = b[d];
                    e.children ? c += a(e.children) : c++
                }
                return c
            }
            function b(a, b, c, d) {
                this.minimumResultsForSearch = c.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), a.call(this, b, c, d)
            }
            return b.prototype.showSearch = function (b, c) {
                return a(c.data.results) < this.minimumResultsForSearch ? !1 : b.call(this, c)
            }, b
        }), b.define("select2/dropdown/selectOnClose", [], function () {
            function a() {}
            return a.prototype.bind = function (a, b, c) {
                var d = this;
                a.call(this, b, c), b.on("close", function (a) {
                    d._handleSelectOnClose(a)
                })
            }, a.prototype._handleSelectOnClose = function (a, b) {
                if (b && null != b.originalSelect2Event) {
                    var c = b.originalSelect2Event;
                    if ("select" === c._type || "unselect" === c._type)
                        return
                }
                var d = this.getHighlightedResults();
                if (!(d.length < 1)) {
                    var e = d.data("data");
                    null != e.element && e.element.selected || null == e.element && e.selected || this.trigger("select", {data: e})
                }
            }, a
        }), b.define("select2/dropdown/closeOnSelect", [], function () {
            function a() {}
            return a.prototype.bind = function (a, b, c) {
                var d = this;
                a.call(this, b, c), b.on("select", function (a) {
                    d._selectTriggered(a)
                }), b.on("unselect", function (a) {
                    d._selectTriggered(a)
                })
            }, a.prototype._selectTriggered = function (a, b) {
                var c = b.originalEvent;
                c && c.ctrlKey || this.trigger("close", {originalEvent: c, originalSelect2Event: b})
            }, a
        }), b.define("select2/i18n/en", [], function () {
            return{errorLoading: function () {
                    return"The results could not be loaded."
                }, inputTooLong: function (a) {
                    var b = a.input.length - a.maximum, c = "Please delete " + b + " character";
                    return 1 != b && (c += "s"), c
                }, inputTooShort: function (a) {
                    var b = a.minimum - a.input.length, c = "Please enter " + b + " or more characters";
                    return c
                }, loadingMore: function () {
                    return"Loading more results…"
                }, maximumSelected: function (a) {
                    var b = "You can only select " + a.maximum + " item";
                    return 1 != a.maximum && (b += "s"), b
                }, noResults: function () {
                    return"No results found"
                }, searching: function () {
                    return"Searching…"
                }}
        }), b.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C) {
            function D() {
                this.reset()
            }
            D.prototype.apply = function (l) {
                if (l = a.extend(!0, {}, this.defaults, l), null == l.dataAdapter) {
                    if (null != l.ajax ? l.dataAdapter = o : null != l.data ? l.dataAdapter = n : l.dataAdapter = m, l.minimumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, r)), l.maximumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, s)), l.maximumSelectionLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, t)), l.tags && (l.dataAdapter = j.Decorate(l.dataAdapter, p)), (null != l.tokenSeparators || null != l.tokenizer) && (l.dataAdapter = j.Decorate(l.dataAdapter, q)), null != l.query) {
                        var C = b(l.amdBase + "compat/query");
                        l.dataAdapter = j.Decorate(l.dataAdapter, C)
                    }
                    if (null != l.initSelection) {
                        var D = b(l.amdBase + "compat/initSelection");
                        l.dataAdapter = j.Decorate(l.dataAdapter, D)
                    }
                }
                if (null == l.resultsAdapter && (l.resultsAdapter = c, null != l.ajax && (l.resultsAdapter = j.Decorate(l.resultsAdapter, x)), null != l.placeholder && (l.resultsAdapter = j.Decorate(l.resultsAdapter, w)), l.selectOnClose && (l.resultsAdapter = j.Decorate(l.resultsAdapter, A))), null == l.dropdownAdapter) {
                    if (l.multiple)
                        l.dropdownAdapter = u;
                    else {
                        var E = j.Decorate(u, v);
                        l.dropdownAdapter = E
                    }
                    if (0 !== l.minimumResultsForSearch && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, z)), l.closeOnSelect && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, B)), null != l.dropdownCssClass || null != l.dropdownCss || null != l.adaptDropdownCssClass) {
                        var F = b(l.amdBase + "compat/dropdownCss");
                        l.dropdownAdapter = j.Decorate(l.dropdownAdapter, F)
                    }
                    l.dropdownAdapter = j.Decorate(l.dropdownAdapter, y)
                }
                if (null == l.selectionAdapter) {
                    if (l.multiple ? l.selectionAdapter = e : l.selectionAdapter = d, null != l.placeholder && (l.selectionAdapter = j.Decorate(l.selectionAdapter, f)), l.allowClear && (l.selectionAdapter = j.Decorate(l.selectionAdapter, g)), l.multiple && (l.selectionAdapter = j.Decorate(l.selectionAdapter, h)), null != l.containerCssClass || null != l.containerCss || null != l.adaptContainerCssClass) {
                        var G = b(l.amdBase + "compat/containerCss");
                        l.selectionAdapter = j.Decorate(l.selectionAdapter, G)
                    }
                    l.selectionAdapter = j.Decorate(l.selectionAdapter, i)
                }
                if ("string" == typeof l.language)
                    if (l.language.indexOf("-") > 0) {
                        var H = l.language.split("-"), I = H[0];
                        l.language = [l.language, I]
                    } else
                        l.language = [l.language];
                if (a.isArray(l.language)) {
                    var J = new k;
                    l.language.push("en");
                    for (var K = l.language, L = 0; L < K.length; L++) {
                        var M = K[L], N = {};
                        try {
                            N = k.loadPath(M)
                        } catch (O) {
                            try {
                                M = this.defaults.amdLanguageBase + M, N = k.loadPath(M)
                            } catch (P) {
                                l.debug && window.console && console.warn && console.warn('Select2: The language file for "' + M + '" could not be automatically loaded. A fallback will be used instead.');
                                continue
                            }
                        }
                        J.extend(N)
                    }
                    l.translations = J
                } else {
                    var Q = k.loadPath(this.defaults.amdLanguageBase + "en"), R = new k(l.language);
                    R.extend(Q), l.translations = R
                }
                return l
            }, D.prototype.reset = function () {
                function b(a) {
                    function b(a) {
                        return l[a] || a
                    }
                    return a.replace(/[^\u0000-\u007E]/g, b)
                }
                function c(d, e) {
                    if ("" === a.trim(d.term))
                        return e;
                    if (e.children && e.children.length > 0) {
                        for (var f = a.extend(!0, {}, e), g = e.children.length - 1; g >= 0; g--) {
                            var h = e.children[g], i = c(d, h);
                            null == i && f.children.splice(g, 1)
                        }
                        return f.children.length > 0 ? f : c(d, f)
                    }
                    var j = b(e.text).toUpperCase(), k = b(d.term).toUpperCase();
                    return j.indexOf(k) > -1 ? e : null
                }
                this.defaults = {amdBase: "./", amdLanguageBase: "./i18n/", closeOnSelect: !0, debug: !1, dropdownAutoWidth: !1, escapeMarkup: j.escapeMarkup, language: C, matcher: c, minimumInputLength: 0, maximumInputLength: 0, maximumSelectionLength: 0, minimumResultsForSearch: 0, selectOnClose: !1, sorter: function (a) {
                        return a
                    }, templateResult: function (a) {
                        return a.text
                    }, templateSelection: function (a) {
                        return a.text
                    }, theme: "default", width: "resolve"}
            }, D.prototype.set = function (b, c) {
                var d = a.camelCase(b), e = {};
                e[d] = c;
                var f = j._convertData(e);
                a.extend(this.defaults, f)
            };
            var E = new D;
            return E
        }), b.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function (a, b, c, d) {
            function e(b, e) {
                if (this.options = b, null != e && this.fromElement(e), this.options = c.apply(this.options), e && e.is("input")) {
                    var f = a(this.get("amdBase") + "compat/inputData");
                    this.options.dataAdapter = d.Decorate(this.options.dataAdapter, f)
                }
            }
            return e.prototype.fromElement = function (a) {
                var c = ["select2"];
                null == this.options.multiple && (this.options.multiple = a.prop("multiple")), null == this.options.disabled && (this.options.disabled = a.prop("disabled")), null == this.options.language && (a.prop("lang") ? this.options.language = a.prop("lang").toLowerCase() : a.closest("[lang]").prop("lang") && (this.options.language = a.closest("[lang]").prop("lang"))), null == this.options.dir && (a.prop("dir") ? this.options.dir = a.prop("dir") : a.closest("[dir]").prop("dir") ? this.options.dir = a.closest("[dir]").prop("dir") : this.options.dir = "ltr"), a.prop("disabled", this.options.disabled), a.prop("multiple", this.options.multiple), a.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), a.data("data", a.data("select2Tags")), a.data("tags", !0)), a.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), a.attr("ajax--url", a.data("ajaxUrl")), a.data("ajax--url", a.data("ajaxUrl")));
                var e = {};
                e = b.fn.jquery && "1." == b.fn.jquery.substr(0, 2) && a[0].dataset ? b.extend(!0, {}, a[0].dataset, a.data()) : a.data();
                var f = b.extend(!0, {}, e);
                f = d._convertData(f);
                for (var g in f)
                    b.inArray(g, c) > -1 || (b.isPlainObject(this.options[g]) ? b.extend(this.options[g], f[g]) : this.options[g] = f[g]);
                return this
            }, e.prototype.get = function (a) {
                return this.options[a]
            }, e.prototype.set = function (a, b) {
                this.options[a] = b
            }, e
        }), b.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (a, b, c, d) {
            var e = function (a, c) {
                null != a.data("select2") && a.data("select2").destroy(), this.$element = a, this.id = this._generateId(a), c = c || {}, this.options = new b(c, a), e.__super__.constructor.call(this);
                var d = a.attr("tabindex") || 0;
                a.data("old-tabindex", d), a.attr("tabindex", "-1");
                var f = this.options.get("dataAdapter");
                this.dataAdapter = new f(a, this.options);
                var g = this.render();
                this._placeContainer(g);
                var h = this.options.get("selectionAdapter");
                this.selection = new h(a, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, g);
                var i = this.options.get("dropdownAdapter");
                this.dropdown = new i(a, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, g);
                var j = this.options.get("resultsAdapter");
                this.results = new j(a, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                var k = this;
                this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function (a) {
                    k.trigger("selection:update", {data: a})
                }), a.addClass("select2-hidden-accessible"), a.attr("aria-hidden", "true"), this._syncAttributes(), a.data("select2", this)
            };
            return c.Extend(e, c.Observable), e.prototype._generateId = function (a) {
                var b = "";
                return b = null != a.attr("id") ? a.attr("id") : null != a.attr("name") ? a.attr("name") + "-" + c.generateChars(2) : c.generateChars(4), b = b.replace(/(:|\.|\[|\]|,)/g, ""), b = "select2-" + b
            }, e.prototype._placeContainer = function (a) {
                a.insertAfter(this.$element);
                var b = this._resolveWidth(this.$element, this.options.get("width"));
                null != b && a.css("width", b)
            }, e.prototype._resolveWidth = function (a, b) {
                var c = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                if ("resolve" == b) {
                    var d = this._resolveWidth(a, "style");
                    return null != d ? d : this._resolveWidth(a, "element")
                }
                if ("element" == b) {
                    var e = a.outerWidth(!1);
                    return 0 >= e ? "auto" : e + "px"
                }
                if ("style" == b) {
                    var f = a.attr("style");
                    if ("string" != typeof f)
                        return null;
                    for (var g = f.split(";"), h = 0, i = g.length; i > h; h += 1) {
                        var j = g[h].replace(/\s/g, ""), k = j.match(c);
                        if (null !== k && k.length >= 1)
                            return k[1]
                    }
                    return null
                }
                return b
            }, e.prototype._bindAdapters = function () {
                this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
            }, e.prototype._registerDomEvents = function () {
                var b = this;
                this.$element.on("change.select2", function () {
                    b.dataAdapter.current(function (a) {
                        b.trigger("selection:update", {data: a})
                    })
                }), this.$element.on("focus.select2", function (a) {
                    b.trigger("focus", a)
                }), this._syncA = c.bind(this._syncAttributes, this), this._syncS = c.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                var d = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                null != d ? (this._observer = new d(function (c) {
                    a.each(c, b._syncA), a.each(c, b._syncS)
                }), this._observer.observe(this.$element[0], {attributes: !0, childList: !0, subtree: !1})) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", b._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", b._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", b._syncS, !1))
            }, e.prototype._registerDataEvents = function () {
                var a = this;
                this.dataAdapter.on("*", function (b, c) {
                    a.trigger(b, c)
                })
            }, e.prototype._registerSelectionEvents = function () {
                var b = this, c = ["toggle", "focus"];
                this.selection.on("toggle", function () {
                    b.toggleDropdown()
                }), this.selection.on("focus", function (a) {
                    b.focus(a)
                }), this.selection.on("*", function (d, e) {
                    -1 === a.inArray(d, c) && b.trigger(d, e)
                })
            }, e.prototype._registerDropdownEvents = function () {
                var a = this;
                this.dropdown.on("*", function (b, c) {
                    a.trigger(b, c)
                })
            }, e.prototype._registerResultsEvents = function () {
                var a = this;
                this.results.on("*", function (b, c) {
                    a.trigger(b, c)
                })
            }, e.prototype._registerEvents = function () {
                var a = this;
                this.on("open", function () {
                    a.$container.addClass("select2-container--open")
                }), this.on("close", function () {
                    a.$container.removeClass("select2-container--open")
                }), this.on("enable", function () {
                    a.$container.removeClass("select2-container--disabled")
                }), this.on("disable", function () {
                    a.$container.addClass("select2-container--disabled")
                }), this.on("blur", function () {
                    a.$container.removeClass("select2-container--focus")
                }), this.on("query", function (b) {
                    a.isOpen() || a.trigger("open", {}), this.dataAdapter.query(b, function (c) {
                        a.trigger("results:all", {data: c, query: b})
                    })
                }), this.on("query:append", function (b) {
                    this.dataAdapter.query(b, function (c) {
                        a.trigger("results:append", {data: c, query: b})
                    })
                }), this.on("keypress", function (b) {
                    var c = b.which;
                    a.isOpen() ? c === d.ESC || c === d.TAB || c === d.UP && b.altKey ? (a.close(), b.preventDefault()) : c === d.ENTER ? (a.trigger("results:select", {}), b.preventDefault()) : c === d.SPACE && b.ctrlKey ? (a.trigger("results:toggle", {}), b.preventDefault()) : c === d.UP ? (a.trigger("results:previous", {}), b.preventDefault()) : c === d.DOWN && (a.trigger("results:next", {}), b.preventDefault()) : (c === d.ENTER || c === d.SPACE || c === d.DOWN && b.altKey) && (a.open(), b.preventDefault())
                })
            }, e.prototype._syncAttributes = function () {
                this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
            }, e.prototype._syncSubtree = function (a, b) {
                var c = !1, d = this;
                if (!a || !a.target || "OPTION" === a.target.nodeName || "OPTGROUP" === a.target.nodeName) {
                    if (b)
                        if (b.addedNodes && b.addedNodes.length > 0)
                            for (var e = 0; e < b.addedNodes.length; e++) {
                                var f = b.addedNodes[e];
                                f.selected && (c = !0)
                            }
                        else
                            b.removedNodes && b.removedNodes.length > 0 && (c = !0);
                    else
                        c = !0;
                    c && this.dataAdapter.current(function (a) {
                        d.trigger("selection:update", {data: a})
                    })
                }
            }, e.prototype.trigger = function (a, b) {
                var c = e.__super__.trigger, d = {open: "opening", close: "closing", select: "selecting", unselect: "unselecting"};
                if (void 0 === b && (b = {}), a in d) {
                    var f = d[a], g = {prevented: !1, name: a, args: b};
                    if (c.call(this, f, g), g.prevented)
                        return void(b.prevented = !0)
                }
                c.call(this, a, b)
            }, e.prototype.toggleDropdown = function () {
                this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
            }, e.prototype.open = function () {
                this.isOpen() || this.trigger("query", {})
            }, e.prototype.close = function () {
                this.isOpen() && this.trigger("close", {})
            }, e.prototype.isOpen = function () {
                return this.$container.hasClass("select2-container--open")
            }, e.prototype.hasFocus = function () {
                return this.$container.hasClass("select2-container--focus")
            }, e.prototype.focus = function (a) {
                this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
            }, e.prototype.enable = function (a) {
                this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), (null == a || 0 === a.length) && (a = [!0]);
                var b = !a[0];
                this.$element.prop("disabled", b)
            }, e.prototype.data = function () {
                this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                var a = [];
                return this.dataAdapter.current(function (b) {
                    a = b
                }), a
            }, e.prototype.val = function (b) {
                if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == b || 0 === b.length)
                    return this.$element.val();
                var c = b[0];
                a.isArray(c) && (c = a.map(c, function (a) {
                    return a.toString()
                })), this.$element.val(c).trigger("change")
            }, e.prototype.destroy = function () {
                this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null;
            }, e.prototype.render = function () {
                var b = a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                return b.attr("dir", this.options.get("dir")), this.$container = b, this.$container.addClass("select2-container--" + this.options.get("theme")), b.data("element", this.$element), b
            }, e
        }), b.define("select2/compat/utils", ["jquery"], function (a) {
            function b(b, c, d) {
                var e, f, g = [];
                e = a.trim(b.attr("class")), e && (e = "" + e, a(e.split(/\s+/)).each(function () {
                    0 === this.indexOf("select2-") && g.push(this)
                })), e = a.trim(c.attr("class")), e && (e = "" + e, a(e.split(/\s+/)).each(function () {
                    0 !== this.indexOf("select2-") && (f = d(this), null != f && g.push(f))
                })), b.attr("class", g.join(" "))
            }
            return{syncCssClasses: b}
        }), b.define("select2/compat/containerCss", ["jquery", "./utils"], function (a, b) {
            function c(a) {
                return null
            }
            function d() {}
            return d.prototype.render = function (d) {
                var e = d.call(this), f = this.options.get("containerCssClass") || "";
                a.isFunction(f) && (f = f(this.$element));
                var g = this.options.get("adaptContainerCssClass");
                if (g = g || c, -1 !== f.indexOf(":all:")) {
                    f = f.replace(":all:", "");
                    var h = g;
                    g = function (a) {
                        var b = h(a);
                        return null != b ? b + " " + a : a
                    }
                }
                var i = this.options.get("containerCss") || {};
                return a.isFunction(i) && (i = i(this.$element)), b.syncCssClasses(e, this.$element, g), e.css(i), e.addClass(f), e
            }, d
        }), b.define("select2/compat/dropdownCss", ["jquery", "./utils"], function (a, b) {
            function c(a) {
                return null
            }
            function d() {}
            return d.prototype.render = function (d) {
                var e = d.call(this), f = this.options.get("dropdownCssClass") || "";
                a.isFunction(f) && (f = f(this.$element));
                var g = this.options.get("adaptDropdownCssClass");
                if (g = g || c, -1 !== f.indexOf(":all:")) {
                    f = f.replace(":all:", "");
                    var h = g;
                    g = function (a) {
                        var b = h(a);
                        return null != b ? b + " " + a : a
                    }
                }
                var i = this.options.get("dropdownCss") || {};
                return a.isFunction(i) && (i = i(this.$element)), b.syncCssClasses(e, this.$element, g), e.css(i), e.addClass(f), e
            }, d
        }), b.define("select2/compat/initSelection", ["jquery"], function (a) {
            function b(a, b, c) {
                c.get("debug") && window.console && console.warn && console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"), this.initSelection = c.get("initSelection"), this._isInitialized = !1, a.call(this, b, c)
            }
            return b.prototype.current = function (b, c) {
                var d = this;
                return this._isInitialized ? void b.call(this, c) : void this.initSelection.call(null, this.$element, function (b) {
                    d._isInitialized = !0, a.isArray(b) || (b = [b]), c(b)
                })
            }, b
        }), b.define("select2/compat/inputData", ["jquery"], function (a) {
            function b(a, b, c) {
                this._currentData = [], this._valueSeparator = c.get("valueSeparator") || ",", "hidden" === b.prop("type") && c.get("debug") && console && console.warn && console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."), a.call(this, b, c)
            }
            return b.prototype.current = function (b, c) {
                function d(b, c) {
                    var e = [];
                    return b.selected || -1 !== a.inArray(b.id, c) ? (b.selected = !0, e.push(b)) : b.selected = !1, b.children && e.push.apply(e, d(b.children, c)), e
                }
                for (var e = [], f = 0; f < this._currentData.length; f++) {
                    var g = this._currentData[f];
                    e.push.apply(e, d(g, this.$element.val().split(this._valueSeparator)))
                }
                c(e)
            }, b.prototype.select = function (b, c) {
                if (this.options.get("multiple")) {
                    var d = this.$element.val();
                    d += this._valueSeparator + c.id, this.$element.val(d), this.$element.trigger("change")
                } else
                    this.current(function (b) {
                        a.map(b, function (a) {
                            a.selected = !1
                        })
                    }), this.$element.val(c.id), this.$element.trigger("change")
            }, b.prototype.unselect = function (a, b) {
                var c = this;
                b.selected = !1, this.current(function (a) {
                    for (var d = [], e = 0; e < a.length; e++) {
                        var f = a[e];
                        b.id != f.id && d.push(f.id)
                    }
                    c.$element.val(d.join(c._valueSeparator)), c.$element.trigger("change")
                })
            }, b.prototype.query = function (a, b, c) {
                for (var d = [], e = 0; e < this._currentData.length; e++) {
                    var f = this._currentData[e], g = this.matches(b, f);
                    null !== g && d.push(g)
                }
                c({results: d})
            }, b.prototype.addOptions = function (b, c) {
                var d = a.map(c, function (b) {
                    return a.data(b[0], "data")
                });
                this._currentData.push.apply(this._currentData, d)
            }, b
        }), b.define("select2/compat/matcher", ["jquery"], function (a) {
            function b(b) {
                function c(c, d) {
                    var e = a.extend(!0, {}, d);
                    if (null == c.term || "" === a.trim(c.term))
                        return e;
                    if (d.children) {
                        for (var f = d.children.length - 1; f >= 0; f--) {
                            var g = d.children[f], h = b(c.term, g.text, g);
                            h || e.children.splice(f, 1)
                        }
                        if (e.children.length > 0)
                            return e
                    }
                    return b(c.term, d.text, d) ? e : null
                }
                return c
            }
            return b
        }), b.define("select2/compat/query", [], function () {
            function a(a, b, c) {
                c.get("debug") && window.console && console.warn && console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."), a.call(this, b, c)
            }
            return a.prototype.query = function (a, b, c) {
                b.callback = c;
                var d = this.options.get("query");
                d.call(null, b)
            }, a
        }), b.define("select2/dropdown/attachContainer", [], function () {
            function a(a, b, c) {
                a.call(this, b, c)
            }
            return a.prototype.position = function (a, b, c) {
                var d = c.find(".dropdown-wrapper");
                d.append(b), b.addClass("select2-dropdown--below"), c.addClass("select2-container--below")
            }, a
        }), b.define("select2/dropdown/stopPropagation", [], function () {
            function a() {}
            return a.prototype.bind = function (a, b, c) {
                a.call(this, b, c);
                var d = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
                this.$dropdown.on(d.join(" "), function (a) {
                    a.stopPropagation()
                })
            }, a
        }), b.define("select2/selection/stopPropagation", [], function () {
            function a() {}
            return a.prototype.bind = function (a, b, c) {
                a.call(this, b, c);
                var d = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
                this.$selection.on(d.join(" "), function (a) {
                    a.stopPropagation()
                })
            }, a
        }), function (c) {
            "function" == typeof b.define && b.define.amd ? b.define("jquery-mousewheel", ["jquery"], c) : "object" == typeof exports ? module.exports = c : c(a)
        }(function (a) {
            function b(b) {
                var g = b || window.event, h = i.call(arguments, 1), j = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
                if (b = a.event.fix(g), b.type = "mousewheel", "detail"in g && (m = -1 * g.detail), "wheelDelta"in g && (m = g.wheelDelta), "wheelDeltaY"in g && (m = g.wheelDeltaY), "wheelDeltaX"in g && (l = -1 * g.wheelDeltaX), "axis"in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY"in g && (m = -1 * g.deltaY, j = m), "deltaX"in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
                    if (1 === g.deltaMode) {
                        var q = a.data(this, "mousewheel-line-height");
                        j *= q, m *= q, l *= q
                    } else if (2 === g.deltaMode) {
                        var r = a.data(this, "mousewheel-page-height");
                        j *= r, m *= r, l *= r
                    }
                    if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
                        var s = this.getBoundingClientRect();
                        o = b.clientX - s.left, p = b.clientY - s.top
                    }
                    return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
                }
            }
            function c() {
                f = null
            }
            function d(a, b) {
                return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
            }
            var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], h = "onwheel"in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], i = Array.prototype.slice;
            if (a.event.fixHooks)
                for (var j = g.length; j; )
                    a.event.fixHooks[g[--j]] = a.event.mouseHooks;
            var k = a.event.special.mousewheel = {version: "3.1.12", setup: function () {
                    if (this.addEventListener)
                        for (var c = h.length; c; )
                            this.addEventListener(h[--c], b, !1);
                    else
                        this.onmousewheel = b;
                    a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
                }, teardown: function () {
                    if (this.removeEventListener)
                        for (var c = h.length; c; )
                            this.removeEventListener(h[--c], b, !1);
                    else
                        this.onmousewheel = null;
                    a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
                }, getLineHeight: function (b) {
                    var c = a(b), d = c["offsetParent"in a.fn ? "offsetParent" : "parent"]();
                    return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
                }, getPageHeight: function (b) {
                    return a(b).height()
                }, settings: {adjustOldDeltas: !0, normalizeOffset: !0}};
            a.fn.extend({mousewheel: function (a) {
                    return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
                }, unmousewheel: function (a) {
                    return this.unbind("mousewheel", a)
                }})
        }), b.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function (a, b, c, d) {
            if (null == a.fn.select2) {
                var e = ["open", "close", "destroy"];
                a.fn.select2 = function (b) {
                    if (b = b || {}, "object" == typeof b)
                        return this.each(function () {
                            var d = a.extend(!0, {}, b);
                            new c(a(this), d)
                        }), this;
                    if ("string" == typeof b) {
                        var d, f = Array.prototype.slice.call(arguments, 1);
                        return this.each(function () {
                            var c = a(this).data("select2");
                            null == c && window.console && console.error && console.error("The select2('" + b + "') method was called on an element that is not using Select2."), d = c[b].apply(c, f)
                        }), a.inArray(b, e) > -1 ? this : d
                    }
                    throw new Error("Invalid arguments for Select2: " + b)
                }
            }
            return null == a.fn.select2.defaults && (a.fn.select2.defaults = d), c
        }), {define: b.define, require: b.require}
    }(), c = b.require("jquery.select2");
    return a.fn.select2.amd = b, c
});
var InsertLoader = (function () {

    this.load = function (urls, path) {
        if (!path || typeof path === 'undefined' || (typeof path === 'string' && path.length)) {
            if ($.isArray(urls)) {
                return loadResources(urls, path);
            } else if (typeof urls === 'string') {
                return loadResource(urls, path);
            }
            throw new Error('Multiple URLs have to be in an array or only one URL has to be a string');
        }
        throw new Error('Path has to be a string or empty');
    };

    var loadResource = function (url, path) {
        if (typeof url === 'string' && url.length) {

            var extension = url.substring(url.lastIndexOf('.') + 1, url.length),
                    finalUrl = (path || '') + url + '?_=' + new Date().getTime(),
                    $head = $('head');

            switch (extension) {
                case 'php':
                case 'js':
                    $head.append($('<script>', {
                        src: finalUrl
                    }));
                    break;
                case 'css':
                    $head.append($('<link>', {
                        href: finalUrl,
                        rel: 'stylesheet',
                        type: 'test/css'
                    }));
                    break;
                default:
                    console.warn('URL is not linking to a CSS or JS file: ' + url);
                    return false;
            }
            return true;
        }
        throw new Error('URL has to be a string');
    };

    var loadResources = function (urls, path) {
        if ($.isArray(urls)) {
            var result = true;
            $.each(urls, function (i, url) {
                if (!loadResource(url, path)) {
                    result = false;
                }
            });
            return result;
        }
        throw new Error('Multiple URLs have to be in an array');
    };

    return {
        load: load
    };
})();

$.insert = function (urls, path) {
    return InsertLoader.load(urls, path);
};
$(function () {

    $('form.auto-submit').on('change', function () {
        $(this).submit();
    });

    $('a[disabled]').preventDefaultClickBehaviour();

});

$.fn.preventDefaultClickBehaviour = function () {
    $(this).on('click', function (e) {
        e.preventDefault();
    });

    return this;
};

function formatTime(time) {
    var seconds = Math.floor(time % 60),
            minutes = Math.floor((time / 60) % 60),
            hours = Math.floor((time / (60 * 60)) % 24);

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return hours + ':' + minutes + ':' + seconds;
}

function replaceAll(str, find, replace) {
    return str.toString().replace(new RegExp(find, 'g'), replace);
}
$(function () {

    var $sideNavigation = $('#sideNavigation')
            .on('minimized', function (e) {
                localStorage['side-navigation'] = 'minimized';
            })
            .on('expanded', function (e) {
                localStorage['side-navigation'] = 'expanded';
            })
            .on('expand minimize', function (e) {
                $sideNavigation.removeScrollbar();
            })
            .on('expanded minimized', function (e) {
                setTimeout(function () {
                    $sideNavigation.addScrollbar();
                }, 200);
            });

    $sideNavigation.toggle = function () {
        if ($('body').hasClass('side-navigation-minimized')) {
            $sideNavigation.expand();
        } else {
            $sideNavigation.minimize();
        }
    };

    $sideNavigation.minimize = function () {
        $sideNavigation.trigger('minimize');
        $('body').addClass('side-navigation-minimized');
        $sideNavigation.trigger('minimized');
    };

    $sideNavigation.expand = function () {
        $sideNavigation.trigger('expand');
        $('body').removeClass('side-navigation-minimized');
        $sideNavigation.trigger('expanded');
    };

    $sideNavigation.addScrollbar = function () {
        $sideNavigation.niceScroll({
            zindex: 99999999,
            cursorborder: 0,
            cursorborderradius: 0,
            cursorcolor: '#5f5f6c',
            cursoropacitymin: 0.4,
            autohidemode: 'leave',
            cursorwidth: '6px'
        });
    };

    $sideNavigation.addScrollbar();

    $sideNavigation.removeScrollbar = function () {
        $sideNavigation.getNiceScroll().remove();
    };

    $('#sidenavToggleLeftRightBtn').on('click', function (e) {
        e.preventDefault();
        $sideNavigation.toggle(false);
    });

    var $navbarSidenav = $sideNavigation.find('.navbar-sidenav');

    if ($navbarSidenav.find('li.nav-item.current').length === 0) {
        $navbarSidenav.find('li.dashboard').addClass('active');
    }

});
$(function () {

    var $brandImg = $('.brand img'),
            backendThemeLogoUrl = WB_URL + '/media/backend-theme-logo.png';

    if (!sessionStorage.getItem('backendThemeLogoUrl')) {
        $.ajax({
            url: backendThemeLogoUrl,
            cache: true,
            processData: false,
            error: function () {
                backendThemeLogoUrl = THEME_URL + '/images/theme-logo.png';
            }
        }).always(function () {
            sessionStorage.setItem('backendThemeLogoUrl', backendThemeLogoUrl);
            $brandImg.attr('src', backendThemeLogoUrl).show();
        });
    }

});
$(function () {
    $('.collapse-history')
            .each(function () {
                if (localStorage['collapse-state-' + this.id] === 'shown') {
                    $(this).addClass('show');
                    $('.collapsed[data-target="#' + this.id + '"], .collapsed[href="#' + this.id + '"]').removeClass('collapsed');
                } else if (localStorage['collapse-state-' + this.id] === 'hidden') {
                    $(this).removeClass('show');
                    $('[data-target="#' + this.id + '"], [href="#' + this.id + '"]').addClass('collapsed');
                }
            })
            .on('hidden.bs.collapse', function () {
                localStorage['collapse-state-' + this.id] = 'hidden';
            })
            .on('shown.bs.collapse', function () {
                localStorage['collapse-state-' + this.id] = 'shown';
            });

});


$.getScript(THEME_URL + '/js/select2/i18n/' + LANGUAGE_CODE + '.js');

$(function () {
    $('select')
            .select2({
                theme: 'bootstrap',
                minimumResultsForSearch: -1,
                width: '100%',
                templateResult: function (item) {
                    if (item.hasOwnProperty('element')) {
                        var $element = $(item.element);
                        if ($element.data('level')) {
                            var level = $element.data('level');
                            return $('<span style="padding-left:' + (20 * parseInt(level)) + 'px;">' + item.text + '</span>');
                        } else if ($element.data('description')) {
                            var description = $element.data('description');
                            return $('<span>' + item.text + '</span><br /><small>' + description + '</small>');
                        }
                    }
                    return item.text;
                }
            })
            .on('select2:ready change', function () {
                $(this).find('+ .select2 .select2-selection__choice__remove').empty();
            })
            .trigger('select2:ready')
            .focus(function () {
                $(this).select2('open');
            });
});

$(function () {
    $('input:file').fileselect({
        language: LANGUAGE_CODE,
        browseBtnClass: 'btn btn-outline-light',
        validationCallback: function (message, type, instance) {
            alert(message);
        }
    });
});
$(function () {

    $('.datetimepicker').each(function () {
        var $this = $(this);

        var $input = $this;
        if ($this.hasClass('input-group')) {
            $input = $this.find('input:first');

            var $inputGroupAddon = $this.find('.input-group-addon');
            if ($inputGroupAddon.length > 0) {
                $inputGroupAddon.on('click', (function (e) {
                    $input.focus();
                }));
            }
        }

        $input.datetimepicker({
            format: 'd.m.Y H:i',
        });
    });


});



