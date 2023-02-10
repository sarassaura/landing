;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    2107: function (e, r, n) {
      'use strict'
      n.d(r, {
        Z: function () {
          return U
        },
      })
      var o = (function () {
          function e(e) {
            var r = this
            ;(this._insertTag = function (e) {
              var n
              ;(n =
                0 === r.tags.length
                  ? r.insertionPoint
                    ? r.insertionPoint.nextSibling
                    : r.prepend
                    ? r.container.firstChild
                    : r.before
                  : r.tags[r.tags.length - 1].nextSibling),
                r.container.insertBefore(e, n),
                r.tags.push(e)
            }),
              (this.isSpeedy = void 0 === e.speedy || e.speedy),
              (this.tags = []),
              (this.ctr = 0),
              (this.nonce = e.nonce),
              (this.key = e.key),
              (this.container = e.container),
              (this.prepend = e.prepend),
              (this.insertionPoint = e.insertionPoint),
              (this.before = null)
          }
          var r = e.prototype
          return (
            (r.hydrate = function (e) {
              e.forEach(this._insertTag)
            }),
            (r.insert = function (e) {
              if (this.ctr % (this.isSpeedy ? 65e3 : 1) == 0) {
                var r
                this._insertTag(
                  ((r = document.createElement('style')).setAttribute(
                    'data-emotion',
                    this.key
                  ),
                  void 0 !== this.nonce && r.setAttribute('nonce', this.nonce),
                  r.appendChild(document.createTextNode('')),
                  r.setAttribute('data-s', ''),
                  r)
                )
              }
              var n = this.tags[this.tags.length - 1]
              if (this.isSpeedy) {
                var o = (function (e) {
                  if (e.sheet) return e.sheet
                  for (var r = 0; r < document.styleSheets.length; r++)
                    if (document.styleSheets[r].ownerNode === e)
                      return document.styleSheets[r]
                })(n)
                try {
                  o.insertRule(e, o.cssRules.length)
                } catch (e) {}
              } else n.appendChild(document.createTextNode(e))
              this.ctr++
            }),
            (r.flush = function () {
              this.tags.forEach(function (e) {
                return e.parentNode && e.parentNode.removeChild(e)
              }),
                (this.tags = []),
                (this.ctr = 0)
            }),
            e
          )
        })(),
        i = Math.abs,
        a = String.fromCharCode,
        s = Object.assign
      function l(e, r, n) {
        return e.replace(r, n)
      }
      function u(e, r) {
        return e.indexOf(r)
      }
      function c(e, r) {
        return 0 | e.charCodeAt(r)
      }
      function d(e, r, n) {
        return e.slice(r, n)
      }
      function p(e) {
        return e.length
      }
      function h(e, r) {
        return r.push(e), e
      }
      var f = 1,
        m = 1,
        g = 0,
        b = 0,
        v = 0,
        y = ''
      function x(e, r, n, o, i, a, s) {
        return {
          value: e,
          root: r,
          parent: n,
          type: o,
          props: i,
          children: a,
          line: f,
          column: m,
          length: s,
          return: '',
        }
      }
      function k(e, r) {
        return s(
          x('', null, null, '', null, null, 0),
          e,
          { length: -e.length },
          r
        )
      }
      function S() {
        return (v = b < g ? c(y, b++) : 0), m++, 10 === v && ((m = 1), f++), v
      }
      function w() {
        return c(y, b)
      }
      function C(e) {
        switch (e) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4
          case 58:
            return 3
          case 34:
          case 39:
          case 40:
          case 91:
            return 2
          case 41:
          case 93:
            return 1
        }
        return 0
      }
      function _(e) {
        return (f = m = 1), (g = p((y = e))), (b = 0), []
      }
      function E(e) {
        var r, n
        return ((r = b - 1),
        (n = (function e(r) {
          for (; S(); )
            switch (v) {
              case r:
                return b
              case 34:
              case 39:
                34 !== r && 39 !== r && e(v)
                break
              case 40:
                41 === r && e(r)
                break
              case 92:
                S()
            }
          return b
        })(91 === e ? e + 2 : 40 === e ? e + 1 : e)),
        d(y, r, n)).trim()
      }
      var j = '-ms-',
        T = '-moz-',
        A = '-webkit-',
        P = 'comm',
        B = 'rule',
        R = 'decl',
        z = '@keyframes'
      function L(e, r) {
        for (var n = '', o = e.length, i = 0; i < o; i++)
          n += r(e[i], i, e, r) || ''
        return n
      }
      function F(e, r, n, o) {
        switch (e.type) {
          case '@import':
          case R:
            return (e.return = e.return || e.value)
          case P:
            return ''
          case z:
            return (e.return = e.value + '{' + L(e.children, o) + '}')
          case B:
            e.value = e.props.join(',')
        }
        return p((n = L(e.children, o)))
          ? (e.return = e.value + '{' + n + '}')
          : ''
      }
      function M(e, r, n, o, a, s, u, c, p, h, f) {
        for (
          var m = a - 1,
            g = 0 === a ? s : [''],
            b = g.length,
            v = 0,
            y = 0,
            k = 0;
          v < o;
          ++v
        )
          for (
            var S = 0, w = d(e, m + 1, (m = i((y = u[v])))), C = e;
            S < b;
            ++S
          )
            (C = (y > 0 ? g[S] + ' ' + w : l(w, /&\f/g, g[S])).trim()) &&
              (p[k++] = C)
        return x(e, r, n, 0 === a ? B : c, p, h, f)
      }
      function $(e, r, n, o) {
        return x(e, r, n, R, d(e, 0, o), d(e, o + 1, -1), o)
      }
      var D = function (e, r, n) {
          for (
            var o = 0, i = 0;
            (o = i), (i = w()), 38 === o && 12 === i && (r[n] = 1), !C(i);

          )
            S()
          return d(y, e, b)
        },
        I = function (e, r) {
          var n = -1,
            o = 44
          do
            switch (C(o)) {
              case 0:
                38 === o && 12 === w() && (r[n] = 1), (e[n] += D(b - 1, r, n))
                break
              case 2:
                e[n] += E(o)
                break
              case 4:
                if (44 === o) {
                  ;(e[++n] = 58 === w() ? '&\f' : ''), (r[n] = e[n].length)
                  break
                }
              default:
                e[n] += a(o)
            }
          while ((o = S()))
          return e
        },
        O = function (e, r) {
          var n
          return (n = I(_(e), r)), (y = ''), n
        },
        V = new WeakMap(),
        W = function (e) {
          if ('rule' === e.type && e.parent && !(e.length < 1)) {
            for (
              var r = e.value,
                n = e.parent,
                o = e.column === n.column && e.line === n.line;
              'rule' !== n.type;

            )
              if (!(n = n.parent)) return
            if (
              (1 !== e.props.length || 58 === r.charCodeAt(0) || V.get(n)) &&
              !o
            ) {
              V.set(e, !0)
              for (
                var i = [], a = O(r, i), s = n.props, l = 0, u = 0;
                l < a.length;
                l++
              )
                for (var c = 0; c < s.length; c++, u++)
                  e.props[u] = i[l]
                    ? a[l].replace(/&\f/g, s[c])
                    : s[c] + ' ' + a[l]
            }
          }
        },
        N = function (e) {
          if ('decl' === e.type) {
            var r = e.value
            108 === r.charCodeAt(0) &&
              98 === r.charCodeAt(2) &&
              ((e.return = ''), (e.value = ''))
          }
        },
        H = [
          function (e, r, n, o) {
            if (e.length > -1 && !e.return)
              switch (e.type) {
                case R:
                  e.return = (function e(r, n) {
                    switch (
                      45 ^ c(r, 0)
                        ? (((((((n << 2) ^ c(r, 0)) << 2) ^ c(r, 1)) << 2) ^
                            c(r, 2)) <<
                            2) ^
                          c(r, 3)
                        : 0
                    ) {
                      case 5103:
                        return A + 'print-' + r + r
                      case 5737:
                      case 4201:
                      case 3177:
                      case 3433:
                      case 1641:
                      case 4457:
                      case 2921:
                      case 5572:
                      case 6356:
                      case 5844:
                      case 3191:
                      case 6645:
                      case 3005:
                      case 6391:
                      case 5879:
                      case 5623:
                      case 6135:
                      case 4599:
                      case 4855:
                      case 4215:
                      case 6389:
                      case 5109:
                      case 5365:
                      case 5621:
                      case 3829:
                        return A + r + r
                      case 5349:
                      case 4246:
                      case 4810:
                      case 6968:
                      case 2756:
                        return A + r + T + r + j + r + r
                      case 6828:
                      case 4268:
                        return A + r + j + r + r
                      case 6165:
                        return A + r + j + 'flex-' + r + r
                      case 5187:
                        return (
                          A +
                          r +
                          l(
                            r,
                            /(\w+).+(:[^]+)/,
                            A + 'box-$1$2' + j + 'flex-$1$2'
                          ) +
                          r
                        )
                      case 5443:
                        return (
                          A + r + j + 'flex-item-' + l(r, /flex-|-self/, '') + r
                        )
                      case 4675:
                        return (
                          A +
                          r +
                          j +
                          'flex-line-pack' +
                          l(r, /align-content|flex-|-self/, '') +
                          r
                        )
                      case 5548:
                        return A + r + j + l(r, 'shrink', 'negative') + r
                      case 5292:
                        return A + r + j + l(r, 'basis', 'preferred-size') + r
                      case 6060:
                        return (
                          A +
                          'box-' +
                          l(r, '-grow', '') +
                          A +
                          r +
                          j +
                          l(r, 'grow', 'positive') +
                          r
                        )
                      case 4554:
                        return (
                          A + l(r, /([^-])(transform)/g, '$1' + A + '$2') + r
                        )
                      case 6187:
                        return (
                          l(
                            l(
                              l(r, /(zoom-|grab)/, A + '$1'),
                              /(image-set)/,
                              A + '$1'
                            ),
                            r,
                            ''
                          ) + r
                        )
                      case 5495:
                      case 3959:
                        return l(r, /(image-set\([^]*)/, A + '$1$`$1')
                      case 4968:
                        return (
                          l(
                            l(
                              r,
                              /(.+:)(flex-)?(.*)/,
                              A + 'box-pack:$3' + j + 'flex-pack:$3'
                            ),
                            /s.+-b[^;]+/,
                            'justify'
                          ) +
                          A +
                          r +
                          r
                        )
                      case 4095:
                      case 3583:
                      case 4068:
                      case 2532:
                        return l(r, /(.+)-inline(.+)/, A + '$1$2') + r
                      case 8116:
                      case 7059:
                      case 5753:
                      case 5535:
                      case 5445:
                      case 5701:
                      case 4933:
                      case 4677:
                      case 5533:
                      case 5789:
                      case 5021:
                      case 4765:
                        if (p(r) - 1 - n > 6)
                          switch (c(r, n + 1)) {
                            case 109:
                              if (45 !== c(r, n + 4)) break
                            case 102:
                              return (
                                l(
                                  r,
                                  /(.+:)(.+)-([^]+)/,
                                  '$1' +
                                    A +
                                    '$2-$3$1' +
                                    T +
                                    (108 == c(r, n + 3) ? '$3' : '$2-$3')
                                ) + r
                              )
                            case 115:
                              return ~u(r, 'stretch')
                                ? e(l(r, 'stretch', 'fill-available'), n) + r
                                : r
                          }
                        break
                      case 4949:
                        if (115 !== c(r, n + 1)) break
                      case 6444:
                        switch (c(r, p(r) - 3 - (~u(r, '!important') && 10))) {
                          case 107:
                            return l(r, ':', ':' + A) + r
                          case 101:
                            return (
                              l(
                                r,
                                /(.+:)([^;!]+)(;|!.+)?/,
                                '$1' +
                                  A +
                                  (45 === c(r, 14) ? 'inline-' : '') +
                                  'box$3$1' +
                                  A +
                                  '$2$3$1' +
                                  j +
                                  '$2box$3'
                              ) + r
                            )
                        }
                        break
                      case 5936:
                        switch (c(r, n + 11)) {
                          case 114:
                            return (
                              A + r + j + l(r, /[svh]\w+-[tblr]{2}/, 'tb') + r
                            )
                          case 108:
                            return (
                              A +
                              r +
                              j +
                              l(r, /[svh]\w+-[tblr]{2}/, 'tb-rl') +
                              r
                            )
                          case 45:
                            return (
                              A + r + j + l(r, /[svh]\w+-[tblr]{2}/, 'lr') + r
                            )
                        }
                        return A + r + j + r + r
                    }
                    return r
                  })(e.value, e.length)
                  break
                case z:
                  return L([k(e, { value: l(e.value, '@', '@' + A) })], o)
                case B:
                  if (e.length)
                    return e.props
                      .map(function (r) {
                        var n
                        switch (
                          ((n = r),
                          (n = /(::plac\w+|:read-\w+)/.exec(n)) ? n[0] : n)
                        ) {
                          case ':read-only':
                          case ':read-write':
                            return L(
                              [
                                k(e, {
                                  props: [l(r, /:(read-\w+)/, ':' + T + '$1')],
                                }),
                              ],
                              o
                            )
                          case '::placeholder':
                            return L(
                              [
                                k(e, {
                                  props: [
                                    l(r, /:(plac\w+)/, ':' + A + 'input-$1'),
                                  ],
                                }),
                                k(e, {
                                  props: [l(r, /:(plac\w+)/, ':' + T + '$1')],
                                }),
                                k(e, {
                                  props: [l(r, /:(plac\w+)/, j + 'input-$1')],
                                }),
                              ],
                              o
                            )
                        }
                        return ''
                      })
                      .join('')
              }
          },
        ],
        U = function (e) {
          var r,
            n,
            i,
            s,
            g,
            k = e.key
          if ('css' === k) {
            var j = document.querySelectorAll(
              'style[data-emotion]:not([data-s])'
            )
            Array.prototype.forEach.call(j, function (e) {
              ;-1 !== e.getAttribute('data-emotion').indexOf(' ') &&
                (document.head.appendChild(e), e.setAttribute('data-s', ''))
            })
          }
          var T = e.stylisPlugins || H,
            A = {},
            B = []
          ;(s = e.container || document.head),
            Array.prototype.forEach.call(
              document.querySelectorAll('style[data-emotion^="' + k + ' "]'),
              function (e) {
                for (
                  var r = e.getAttribute('data-emotion').split(' '), n = 1;
                  n < r.length;
                  n++
                )
                  A[r[n]] = !0
                B.push(e)
              }
            )
          var R =
              ((n = (r = [W, N].concat(T, [
                F,
                ((i = function (e) {
                  g.insert(e)
                }),
                function (e) {
                  !e.root && (e = e.return) && i(e)
                }),
              ])).length),
              function (e, o, i, a) {
                for (var s = '', l = 0; l < n; l++) s += r[l](e, o, i, a) || ''
                return s
              }),
            z = function (e) {
              var r, n
              return L(
                ((n = (function e(r, n, o, i, s, g, k, _, j) {
                  for (
                    var T,
                      A = 0,
                      B = 0,
                      R = k,
                      z = 0,
                      L = 0,
                      F = 0,
                      D = 1,
                      I = 1,
                      O = 1,
                      V = 0,
                      W = '',
                      N = s,
                      H = g,
                      U = i,
                      q = W;
                    I;

                  )
                    switch (((F = V), (V = S()))) {
                      case 40:
                        if (108 != F && 58 == c(q, R - 1)) {
                          ;-1 != u((q += l(E(V), '&', '&\f')), '&\f') &&
                            (O = -1)
                          break
                        }
                      case 34:
                      case 39:
                      case 91:
                        q += E(V)
                        break
                      case 9:
                      case 10:
                      case 13:
                      case 32:
                        q += (function (e) {
                          for (; (v = w()); )
                            if (v < 33) S()
                            else break
                          return C(e) > 2 || C(v) > 3 ? '' : ' '
                        })(F)
                        break
                      case 92:
                        q += (function (e, r) {
                          for (
                            var n;
                            --r &&
                            S() &&
                            !(v < 48) &&
                            !(v > 102) &&
                            (!(v > 57) || !(v < 65)) &&
                            (!(v > 70) || !(v < 97));

                          );
                          return (
                            (n = b + (r < 6 && 32 == w() && 32 == S())),
                            d(y, e, n)
                          )
                        })(b - 1, 7)
                        continue
                      case 47:
                        switch (w()) {
                          case 42:
                          case 47:
                            h(
                              x(
                                (T = (function (e, r) {
                                  for (; S(); )
                                    if (e + v === 57) break
                                    else if (e + v === 84 && 47 === w()) break
                                  return (
                                    '/*' +
                                    d(y, r, b - 1) +
                                    '*' +
                                    a(47 === e ? e : S())
                                  )
                                })(S(), b)),
                                n,
                                o,
                                P,
                                a(v),
                                d(T, 2, -2),
                                0
                              ),
                              j
                            )
                            break
                          default:
                            q += '/'
                        }
                        break
                      case 123 * D:
                        _[A++] = p(q) * O
                      case 125 * D:
                      case 59:
                      case 0:
                        switch (V) {
                          case 0:
                          case 125:
                            I = 0
                          case 59 + B:
                            L > 0 &&
                              p(q) - R &&
                              h(
                                L > 32
                                  ? $(q + ';', i, o, R - 1)
                                  : $(l(q, ' ', '') + ';', i, o, R - 2),
                                j
                              )
                            break
                          case 59:
                            q += ';'
                          default:
                            if (
                              (h(
                                (U = M(
                                  q,
                                  n,
                                  o,
                                  A,
                                  B,
                                  s,
                                  _,
                                  W,
                                  (N = []),
                                  (H = []),
                                  R
                                )),
                                g
                              ),
                              123 === V)
                            ) {
                              if (0 === B) e(q, n, U, U, N, g, R, _, H)
                              else
                                switch (99 === z && 110 === c(q, 3) ? 100 : z) {
                                  case 100:
                                  case 109:
                                  case 115:
                                    e(
                                      r,
                                      U,
                                      U,
                                      i &&
                                        h(
                                          M(
                                            r,
                                            U,
                                            U,
                                            0,
                                            0,
                                            s,
                                            _,
                                            W,
                                            s,
                                            (N = []),
                                            R
                                          ),
                                          H
                                        ),
                                      s,
                                      H,
                                      R,
                                      _,
                                      i ? N : H
                                    )
                                    break
                                  default:
                                    e(q, U, U, U, [''], H, 0, _, H)
                                }
                            }
                        }
                        ;(A = B = L = 0), (D = O = 1), (W = q = ''), (R = k)
                        break
                      case 58:
                        ;(R = 1 + p(q)), (L = F)
                      default:
                        if (D < 1) {
                          if (123 == V) --D
                          else if (
                            125 == V &&
                            0 == D++ &&
                            125 ==
                              ((v = b > 0 ? c(y, --b) : 0),
                              m--,
                              10 === v && ((m = 1), f--),
                              v)
                          )
                            continue
                        }
                        switch (((q += a(V)), V * D)) {
                          case 38:
                            O = B > 0 ? 1 : ((q += '\f'), -1)
                            break
                          case 44:
                            ;(_[A++] = (p(q) - 1) * O), (O = 1)
                            break
                          case 64:
                            45 === w() && (q += E(S())),
                              (z = w()),
                              (B = R =
                                p(
                                  (W = q +=
                                    (function (e) {
                                      for (; !C(w()); ) S()
                                      return d(y, e, b)
                                    })(b))
                                )),
                              V++
                            break
                          case 45:
                            45 === F && 2 == p(q) && (D = 0)
                        }
                    }
                  return g
                })('', null, null, null, [''], (r = _((r = e))), 0, [0], r)),
                (y = ''),
                n),
                R
              )
            },
            D = {
              key: k,
              sheet: new o({
                key: k,
                container: s,
                nonce: e.nonce,
                speedy: e.speedy,
                prepend: e.prepend,
                insertionPoint: e.insertionPoint,
              }),
              nonce: e.nonce,
              inserted: A,
              registered: {},
              insert: function (e, r, n, o) {
                ;(g = n),
                  z(e ? e + '{' + r.styles + '}' : r.styles),
                  o && (D.inserted[r.name] = !0)
              },
            }
          return D.sheet.hydrate(B), D
        }
    },
    6894: function (e, r) {
      'use strict'
      r.Z = function (e) {
        var r = Object.create(null)
        return function (n) {
          return void 0 === r[n] && (r[n] = e(n)), r[n]
        }
      }
    },
    8543: function (e, r, n) {
      'use strict'
      n.d(r, {
        T: function () {
          return c
        },
        a: function () {
          return p
        },
        w: function () {
          return u
        },
      })
      var o = n(2784),
        i = n(2107),
        a = n(7896),
        s = function (e) {
          var r = new WeakMap()
          return function (n) {
            if (r.has(n)) return r.get(n)
            var o = e(n)
            return r.set(n, o), o
          }
        }
      n(653), n(2668)
      var l = (0, o.createContext)(
        'undefined' != typeof HTMLElement ? (0, i.Z)({ key: 'css' }) : null
      )
      l.Provider
      var u = function (e) {
          return (0, o.forwardRef)(function (r, n) {
            return e(r, (0, o.useContext)(l), n)
          })
        },
        c = (0, o.createContext)({}),
        d = s(function (e) {
          return s(function (r) {
            return 'function' == typeof r ? r(e) : (0, a.Z)({}, e, r)
          })
        }),
        p = function (e) {
          var r = (0, o.useContext)(c)
          return (
            e.theme !== r && (r = d(r)(e.theme)),
            (0, o.createElement)(c.Provider, { value: r }, e.children)
          )
        }
    },
    653: function (e, r, n) {
      'use strict'
      n.d(r, {
        O: function () {
          return g
        },
      })
      var o,
        i = function (e) {
          for (var r, n = 0, o = 0, i = e.length; i >= 4; ++o, i -= 4)
            (r =
              (65535 &
                (r =
                  (255 & e.charCodeAt(o)) |
                  ((255 & e.charCodeAt(++o)) << 8) |
                  ((255 & e.charCodeAt(++o)) << 16) |
                  ((255 & e.charCodeAt(++o)) << 24))) *
                1540483477 +
              (((r >>> 16) * 59797) << 16)),
              (r ^= r >>> 24),
              (n =
                ((65535 & r) * 1540483477 + (((r >>> 16) * 59797) << 16)) ^
                ((65535 & n) * 1540483477 + (((n >>> 16) * 59797) << 16)))
          switch (i) {
            case 3:
              n ^= (255 & e.charCodeAt(o + 2)) << 16
            case 2:
              n ^= (255 & e.charCodeAt(o + 1)) << 8
            case 1:
              ;(n ^= 255 & e.charCodeAt(o)),
                (n = (65535 & n) * 1540483477 + (((n >>> 16) * 59797) << 16))
          }
          return (
            (n ^= n >>> 13),
            (
              ((n = (65535 & n) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
                (n >>> 15)) >>>
              0
            ).toString(36)
          )
        },
        a = {
          animationIterationCount: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1,
        },
        s = n(6894),
        l = /[A-Z]|^ms/g,
        u = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
        c = function (e) {
          return 45 === e.charCodeAt(1)
        },
        d = function (e) {
          return null != e && 'boolean' != typeof e
        },
        p = (0, s.Z)(function (e) {
          return c(e) ? e : e.replace(l, '-$&').toLowerCase()
        }),
        h = function (e, r) {
          switch (e) {
            case 'animation':
            case 'animationName':
              if ('string' == typeof r)
                return r.replace(u, function (e, r, n) {
                  return (o = { name: r, styles: n, next: o }), r
                })
          }
          return 1 === a[e] || c(e) || 'number' != typeof r || 0 === r
            ? r
            : r + 'px'
        }
      function f(e, r, n) {
        if (null == n) return ''
        if (void 0 !== n.__emotion_styles) return n
        switch (typeof n) {
          case 'boolean':
            return ''
          case 'object':
            if (1 === n.anim)
              return (o = { name: n.name, styles: n.styles, next: o }), n.name
            if (void 0 !== n.styles) {
              var i = n.next
              if (void 0 !== i)
                for (; void 0 !== i; )
                  (o = { name: i.name, styles: i.styles, next: o }),
                    (i = i.next)
              return n.styles + ';'
            }
            return (function (e, r, n) {
              var o = ''
              if (Array.isArray(n))
                for (var i = 0; i < n.length; i++) o += f(e, r, n[i]) + ';'
              else
                for (var a in n) {
                  var s = n[a]
                  if ('object' != typeof s)
                    null != r && void 0 !== r[s]
                      ? (o += a + '{' + r[s] + '}')
                      : d(s) && (o += p(a) + ':' + h(a, s) + ';')
                  else if (
                    Array.isArray(s) &&
                    'string' == typeof s[0] &&
                    (null == r || void 0 === r[s[0]])
                  )
                    for (var l = 0; l < s.length; l++)
                      d(s[l]) && (o += p(a) + ':' + h(a, s[l]) + ';')
                  else {
                    var u = f(e, r, s)
                    switch (a) {
                      case 'animation':
                      case 'animationName':
                        o += p(a) + ':' + u + ';'
                        break
                      default:
                        o += a + '{' + u + '}'
                    }
                  }
                }
              return o
            })(e, r, n)
          case 'function':
            if (void 0 !== e) {
              var a = o,
                s = n(e)
              return (o = a), f(e, r, s)
            }
        }
        if (null == r) return n
        var l = r[n]
        return void 0 !== l ? l : n
      }
      var m = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
        g = function (e, r, n) {
          if (
            1 === e.length &&
            'object' == typeof e[0] &&
            null !== e[0] &&
            void 0 !== e[0].styles
          )
            return e[0]
          var a,
            s = !0,
            l = ''
          o = void 0
          var u = e[0]
          null == u || void 0 === u.raw
            ? ((s = !1), (l += f(n, r, u)))
            : (l += u[0])
          for (var c = 1; c < e.length; c++)
            (l += f(n, r, e[c])), s && (l += u[c])
          m.lastIndex = 0
          for (var d = ''; null !== (a = m.exec(l)); ) d += '-' + a[1]
          return { name: i(l) + d, styles: l, next: o }
        }
    },
    2668: function (e, r, n) {
      'use strict'
      n.d(r, {
        L: function () {
          return s
        },
        j: function () {
          return l
        },
      })
      var o,
        i = n(2784),
        a =
          !!(o || (o = n.t(i, 2))).useInsertionEffect &&
          (o || (o = n.t(i, 2))).useInsertionEffect,
        s =
          a ||
          function (e) {
            return e()
          },
        l = a || i.useLayoutEffect
    },
    2792: function (e, r, n) {
      'use strict'
      function o(e, r, n) {
        var o = ''
        return (
          n.split(' ').forEach(function (n) {
            void 0 !== e[n] ? r.push(e[n] + ';') : (o += n + ' ')
          }),
          o
        )
      }
      n.d(r, {
        My: function () {
          return a
        },
        fp: function () {
          return o
        },
        hC: function () {
          return i
        },
      })
      var i = function (e, r, n) {
          var o = e.key + '-' + r.name
          !1 === n && void 0 === e.registered[o] && (e.registered[o] = r.styles)
        },
        a = function (e, r, n) {
          i(e, r, n)
          var o = e.key + '-' + r.name
          if (void 0 === e.inserted[r.name]) {
            var a = r
            do e.insert(r === a ? '.' + o : '', a, e.sheet, !0), (a = a.next)
            while (void 0 !== a)
          }
        }
    },
    3463: function (e, r, n) {
      'use strict'
      var o = n(8570),
        i = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        a = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        s = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        l = {}
      function u(e) {
        return o.isMemo(e) ? s : l[e.$$typeof] || i
      }
      ;(l[o.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (l[o.Memo] = s)
      var c = Object.defineProperty,
        d = Object.getOwnPropertyNames,
        p = Object.getOwnPropertySymbols,
        h = Object.getOwnPropertyDescriptor,
        f = Object.getPrototypeOf,
        m = Object.prototype
      e.exports = function e(r, n, o) {
        if ('string' != typeof n) {
          if (m) {
            var i = f(n)
            i && i !== m && e(r, i, o)
          }
          var s = d(n)
          p && (s = s.concat(p(n)))
          for (var l = u(r), g = u(n), b = 0; b < s.length; ++b) {
            var v = s[b]
            if (!a[v] && !(o && o[v]) && !(g && g[v]) && !(l && l[v])) {
              var y = h(n, v)
              try {
                c(r, v, y)
              } catch (e) {}
            }
          }
        }
        return r
      }
    },
    3637: function (e, r, n) {
      e = n.nmd(e)
      var o,
        i,
        a,
        s,
        l,
        u,
        c,
        d,
        p,
        h,
        f = '__lodash_hash_undefined__',
        m = '[object Arguments]',
        g = '[object Function]',
        b = '[object Object]',
        v = /^\[object .+?Constructor\]$/,
        y = /^(?:0|[1-9]\d*)$/,
        x = {}
      ;(x['[object Float32Array]'] =
        x['[object Float64Array]'] =
        x['[object Int8Array]'] =
        x['[object Int16Array]'] =
        x['[object Int32Array]'] =
        x['[object Uint8Array]'] =
        x['[object Uint8ClampedArray]'] =
        x['[object Uint16Array]'] =
        x['[object Uint32Array]'] =
          !0),
        (x[m] =
          x['[object Array]'] =
          x['[object ArrayBuffer]'] =
          x['[object Boolean]'] =
          x['[object DataView]'] =
          x['[object Date]'] =
          x['[object Error]'] =
          x[g] =
          x['[object Map]'] =
          x['[object Number]'] =
          x[b] =
          x['[object RegExp]'] =
          x['[object Set]'] =
          x['[object String]'] =
          x['[object WeakMap]'] =
            !1)
      var k = 'object' == typeof n.g && n.g && n.g.Object === Object && n.g,
        S = 'object' == typeof self && self && self.Object === Object && self,
        w = k || S || Function('return this')(),
        C = r && !r.nodeType && r,
        _ = C && e && !e.nodeType && e,
        E = _ && _.exports === C,
        j = E && k.process,
        T = (function () {
          try {
            var e = _ && _.require && _.require('util').types
            if (e) return e
            return j && j.binding && j.binding('util')
          } catch (e) {}
        })(),
        A = T && T.isTypedArray,
        P = Array.prototype,
        B = Function.prototype,
        R = Object.prototype,
        z = w['__core-js_shared__'],
        L = B.toString,
        F = R.hasOwnProperty,
        M = (u = /[^.]+$/.exec((z && z.keys && z.keys.IE_PROTO) || ''))
          ? 'Symbol(src)_1.' + u
          : '',
        $ = R.toString,
        D = L.call(Object),
        I = RegExp(
          '^' +
            L.call(F)
              .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                '$1.*?'
              ) +
            '$'
        ),
        O = E ? w.Buffer : void 0,
        V = w.Symbol,
        W = w.Uint8Array,
        N = O ? O.allocUnsafe : void 0,
        H =
          ((c = Object.getPrototypeOf),
          (d = Object),
          function (e) {
            return c(d(e))
          }),
        U = Object.create,
        q = R.propertyIsEnumerable,
        Y = P.splice,
        G = V ? V.toStringTag : void 0,
        X = (function () {
          try {
            var e = eh(Object, 'defineProperty')
            return e({}, '', {}), e
          } catch (e) {}
        })(),
        Z = O ? O.isBuffer : void 0,
        K = Math.max,
        J = Date.now,
        Q = eh(w, 'Map'),
        ee = eh(Object, 'create'),
        et = (function () {
          function e() {}
          return function (r) {
            if (!e_(r)) return {}
            if (U) return U(r)
            e.prototype = r
            var n = new e()
            return (e.prototype = void 0), n
          }
        })()
      function er(e) {
        var r = -1,
          n = null == e ? 0 : e.length
        for (this.clear(); ++r < n; ) {
          var o = e[r]
          this.set(o[0], o[1])
        }
      }
      function en(e) {
        var r = -1,
          n = null == e ? 0 : e.length
        for (this.clear(); ++r < n; ) {
          var o = e[r]
          this.set(o[0], o[1])
        }
      }
      function eo(e) {
        var r = -1,
          n = null == e ? 0 : e.length
        for (this.clear(); ++r < n; ) {
          var o = e[r]
          this.set(o[0], o[1])
        }
      }
      function ei(e) {
        var r = (this.__data__ = new en(e))
        this.size = r.size
      }
      function ea(e, r, n) {
        ;((void 0 === n || ev(e[r], n)) && (void 0 !== n || r in e)) ||
          el(e, r, n)
      }
      function es(e, r) {
        for (var n = e.length; n--; ) if (ev(e[n][0], r)) return n
        return -1
      }
      function el(e, r, n) {
        '__proto__' == r && X
          ? X(e, r, {
              configurable: !0,
              enumerable: !0,
              value: n,
              writable: !0,
            })
          : (e[r] = n)
      }
      ;(er.prototype.clear = function () {
        ;(this.__data__ = ee ? ee(null) : {}), (this.size = 0)
      }),
        (er.prototype.delete = function (e) {
          var r = this.has(e) && delete this.__data__[e]
          return (this.size -= r ? 1 : 0), r
        }),
        (er.prototype.get = function (e) {
          var r = this.__data__
          if (ee) {
            var n = r[e]
            return n === f ? void 0 : n
          }
          return F.call(r, e) ? r[e] : void 0
        }),
        (er.prototype.has = function (e) {
          var r = this.__data__
          return ee ? void 0 !== r[e] : F.call(r, e)
        }),
        (er.prototype.set = function (e, r) {
          var n = this.__data__
          return (
            (this.size += this.has(e) ? 0 : 1),
            (n[e] = ee && void 0 === r ? f : r),
            this
          )
        }),
        (en.prototype.clear = function () {
          ;(this.__data__ = []), (this.size = 0)
        }),
        (en.prototype.delete = function (e) {
          var r = this.__data__,
            n = es(r, e)
          return (
            !(n < 0) &&
            (n == r.length - 1 ? r.pop() : Y.call(r, n, 1), --this.size, !0)
          )
        }),
        (en.prototype.get = function (e) {
          var r = this.__data__,
            n = es(r, e)
          return n < 0 ? void 0 : r[n][1]
        }),
        (en.prototype.has = function (e) {
          return es(this.__data__, e) > -1
        }),
        (en.prototype.set = function (e, r) {
          var n = this.__data__,
            o = es(n, e)
          return o < 0 ? (++this.size, n.push([e, r])) : (n[o][1] = r), this
        }),
        (eo.prototype.clear = function () {
          ;(this.size = 0),
            (this.__data__ = {
              hash: new er(),
              map: new (Q || en)(),
              string: new er(),
            })
        }),
        (eo.prototype.delete = function (e) {
          var r = ep(this, e).delete(e)
          return (this.size -= r ? 1 : 0), r
        }),
        (eo.prototype.get = function (e) {
          return ep(this, e).get(e)
        }),
        (eo.prototype.has = function (e) {
          return ep(this, e).has(e)
        }),
        (eo.prototype.set = function (e, r) {
          var n = ep(this, e),
            o = n.size
          return n.set(e, r), (this.size += n.size == o ? 0 : 1), this
        }),
        (ei.prototype.clear = function () {
          ;(this.__data__ = new en()), (this.size = 0)
        }),
        (ei.prototype.delete = function (e) {
          var r = this.__data__,
            n = r.delete(e)
          return (this.size = r.size), n
        }),
        (ei.prototype.get = function (e) {
          return this.__data__.get(e)
        }),
        (ei.prototype.has = function (e) {
          return this.__data__.has(e)
        }),
        (ei.prototype.set = function (e, r) {
          var n = this.__data__
          if (n instanceof en) {
            var o = n.__data__
            if (!Q || o.length < 199)
              return o.push([e, r]), (this.size = ++n.size), this
            n = this.__data__ = new eo(o)
          }
          return n.set(e, r), (this.size = n.size), this
        })
      var eu = function (e, r, n) {
        for (var o = -1, i = Object(e), a = n(e), s = a.length; s--; ) {
          var l = a[++o]
          if (!1 === r(i[l], l, i)) break
        }
        return e
      }
      function ec(e) {
        return null == e
          ? void 0 === e
            ? '[object Undefined]'
            : '[object Null]'
          : G && G in Object(e)
          ? (function (e) {
              var r = F.call(e, G),
                n = e[G]
              try {
                e[G] = void 0
                var o = !0
              } catch (e) {}
              var i = $.call(e)
              return o && (r ? (e[G] = n) : delete e[G]), i
            })(e)
          : $.call(e)
      }
      function ed(e) {
        return eE(e) && ec(e) == m
      }
      function ep(e, r) {
        var n,
          o = e.__data__
        return (
          'string' == (n = typeof r) ||
          'number' == n ||
          'symbol' == n ||
          'boolean' == n
            ? '__proto__' !== r
            : null === r
        )
          ? o['string' == typeof r ? 'string' : 'hash']
          : o.map
      }
      function eh(e, r) {
        var n = null == e ? void 0 : e[r]
        return !(!e_(n) || (M && M in n)) &&
          (ew(n) ? I : v).test(
            (function (e) {
              if (null != e) {
                try {
                  return L.call(e)
                } catch (e) {}
                try {
                  return e + ''
                } catch (e) {}
              }
              return ''
            })(n)
          )
          ? n
          : void 0
      }
      function ef(e, r) {
        var n = typeof e
        return (
          !!(r = null == r ? 9007199254740991 : r) &&
          ('number' == n || ('symbol' != n && y.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < r
        )
      }
      function em(e) {
        var r = e && e.constructor,
          n = ('function' == typeof r && r.prototype) || R
        return e === n
      }
      function eg(e, r) {
        if (
          ('constructor' !== r || 'function' != typeof e[r]) &&
          '__proto__' != r
        )
          return e[r]
      }
      var eb =
        ((o = X
          ? function (e, r) {
              return X(e, 'toString', {
                configurable: !0,
                enumerable: !1,
                value: function () {
                  return r
                },
                writable: !0,
              })
            }
          : eP),
        (i = 0),
        (a = 0),
        function () {
          var e = J(),
            r = 16 - (e - a)
          if (((a = e), r > 0)) {
            if (++i >= 800) return arguments[0]
          } else i = 0
          return o.apply(void 0, arguments)
        })
      function ev(e, r) {
        return e === r || (e != e && r != r)
      }
      var ey = ed(
          (function () {
            return arguments
          })()
        )
          ? ed
          : function (e) {
              return eE(e) && F.call(e, 'callee') && !q.call(e, 'callee')
            },
        ex = Array.isArray
      function ek(e) {
        return null != e && eC(e.length) && !ew(e)
      }
      var eS =
        Z ||
        function () {
          return !1
        }
      function ew(e) {
        if (!e_(e)) return !1
        var r = ec(e)
        return (
          r == g ||
          '[object GeneratorFunction]' == r ||
          '[object AsyncFunction]' == r ||
          '[object Proxy]' == r
        )
      }
      function eC(e) {
        return (
          'number' == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
        )
      }
      function e_(e) {
        var r = typeof e
        return null != e && ('object' == r || 'function' == r)
      }
      function eE(e) {
        return null != e && 'object' == typeof e
      }
      var ej = A
        ? function (e) {
            return A(e)
          }
        : function (e) {
            return eE(e) && eC(e.length) && !!x[ec(e)]
          }
      function eT(e) {
        return ek(e)
          ? (function (e, r) {
              var n = ex(e),
                o = !n && ey(e),
                i = !n && !o && eS(e),
                a = !n && !o && !i && ej(e),
                s = n || o || i || a,
                l = s
                  ? (function (e, r) {
                      for (var n = -1, o = Array(e); ++n < e; ) o[n] = r(n)
                      return o
                    })(e.length, String)
                  : [],
                u = l.length
              for (var c in e)
                (r || F.call(e, c)) &&
                  !(
                    s &&
                    ('length' == c ||
                      (i && ('offset' == c || 'parent' == c)) ||
                      (a &&
                        ('buffer' == c ||
                          'byteLength' == c ||
                          'byteOffset' == c)) ||
                      ef(c, u))
                  ) &&
                  l.push(c)
              return l
            })(e, !0)
          : (function (e) {
              if (!e_(e))
                return (function (e) {
                  var r = []
                  if (null != e) for (var n in Object(e)) r.push(n)
                  return r
                })(e)
              var r = em(e),
                n = []
              for (var o in e)
                ('constructor' == o && (r || !F.call(e, o))) || n.push(o)
              return n
            })(e)
      }
      var eA =
        ((p = function (e, r, n, o) {
          !(function e(r, n, o, i, a) {
            r !== n &&
              eu(
                n,
                function (s, l) {
                  if ((a || (a = new ei()), e_(s)))
                    (function (e, r, n, o, i, a, s) {
                      var l = eg(e, n),
                        u = eg(r, n),
                        c = s.get(u)
                      if (c) {
                        ea(e, n, c)
                        return
                      }
                      var d = a ? a(l, u, n + '', e, r, s) : void 0,
                        p = void 0 === d
                      if (p) {
                        var h,
                          f,
                          m = ex(u),
                          g = !m && eS(u),
                          v = !m && !g && ej(u)
                        ;(d = u),
                          m || g || v
                            ? ex(l)
                              ? (d = l)
                              : eE(l) && ek(l)
                              ? (d = (function (e, r) {
                                  var n = -1,
                                    o = e.length
                                  for (r || (r = Array(o)); ++n < o; )
                                    r[n] = e[n]
                                  return r
                                })(l))
                              : g
                              ? ((p = !1),
                                (d = (function (e, r) {
                                  if (r) return e.slice()
                                  var n = e.length,
                                    o = N ? N(n) : new e.constructor(n)
                                  return e.copy(o), o
                                })(u, !0)))
                              : v
                              ? ((p = !1),
                                (f = new (h = u.buffer).constructor(
                                  h.byteLength
                                )),
                                new W(f).set(new W(h)),
                                (d = new u.constructor(
                                  f,
                                  u.byteOffset,
                                  u.length
                                )))
                              : (d = [])
                            : (function (e) {
                                if (!eE(e) || ec(e) != b) return !1
                                var r = H(e)
                                if (null === r) return !0
                                var n =
                                  F.call(r, 'constructor') && r.constructor
                                return (
                                  'function' == typeof n &&
                                  n instanceof n &&
                                  L.call(n) == D
                                )
                              })(u) || ey(u)
                            ? ((d = l),
                              ey(l)
                                ? (d = (function (e, r, n, o) {
                                    var i = !n
                                    n || (n = {})
                                    for (var a = -1, s = r.length; ++a < s; ) {
                                      var l = r[a],
                                        u = o ? o(n[l], e[l], l, n, e) : void 0
                                      void 0 === u && (u = e[l]),
                                        i
                                          ? el(n, l, u)
                                          : (function (e, r, n) {
                                              var o = e[r]
                                              ;(F.call(e, r) &&
                                                ev(o, n) &&
                                                (void 0 !== n || r in e)) ||
                                                el(e, r, n)
                                            })(n, l, u)
                                    }
                                    return n
                                  })(l, eT(l)))
                                : (!e_(l) || ew(l)) &&
                                  (d =
                                    'function' != typeof u.constructor || em(u)
                                      ? {}
                                      : et(H(u))))
                            : (p = !1)
                      }
                      p && (s.set(u, d), i(d, u, o, a, s), s.delete(u)),
                        ea(e, n, d)
                    })(r, n, l, o, e, i, a)
                  else {
                    var u = i ? i(eg(r, l), s, l + '', r, n, a) : void 0
                    void 0 === u && (u = s), ea(r, l, u)
                  }
                },
                eT
              )
          })(e, r, n, o)
        }),
        eb(
          ((s = h =
            function (e, r) {
              var n = -1,
                o = r.length,
                i = o > 1 ? r[o - 1] : void 0,
                a = o > 2 ? r[2] : void 0
              for (
                i = p.length > 3 && 'function' == typeof i ? (o--, i) : void 0,
                  a &&
                    (function (e, r, n) {
                      if (!e_(n)) return !1
                      var o = typeof r
                      return (
                        ('number' == o
                          ? !!(ek(n) && ef(r, n.length))
                          : 'string' == o && (r in n)) && ev(n[r], e)
                      )
                    })(r[0], r[1], a) &&
                    ((i = o < 3 ? void 0 : i), (o = 1)),
                  e = Object(e);
                ++n < o;

              ) {
                var s = r[n]
                s && p(e, s, n, i)
              }
              return e
            }),
          (l = K(((l = void 0), s.length - 1), 0)),
          function () {
            for (
              var e = arguments, r = -1, n = K(e.length - l, 0), o = Array(n);
              ++r < n;

            )
              o[r] = e[l + r]
            r = -1
            for (var i = Array(l + 1); ++r < l; ) i[r] = e[r]
            return (
              (i[l] = eP(o)),
              (function (e, r, n) {
                switch (n.length) {
                  case 0:
                    return e.call(r)
                  case 1:
                    return e.call(r, n[0])
                  case 2:
                    return e.call(r, n[0], n[1])
                  case 3:
                    return e.call(r, n[0], n[1], n[2])
                }
                return e.apply(r, n)
              })(s, this, i)
            )
          }),
          h + ''
        ))
      function eP(e) {
        return e
      }
      e.exports = eA
    },
    6570: function (e, r, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return n(7578)
        },
      ])
    },
    7578: function (e, r, n) {
      'use strict'
      n.r(r),
        n.d(r, {
          default: function () {
            return m
          },
        })
      var o = n(2322),
        i = n(3761),
        a = n.n(i),
        s = n(8245)
      n(1803)
      var l = n(8191)
      let u = (0, l.I)({
        displayName: 'RightArrow',
        viewBox: '0 0 12 7',
        path: (0, o.jsx)('path', {
          d: 'M9.038 2.44211H0.393441C-0.0383944 2.44211 0.000958442 2.60206 0.000958442 3.1862C0.000958442 3.1862 -0.0383944 4.56624 0.393441 4.56624H9.038V6.46734C9.038 6.94527 9.46199 7.17892 9.70539 6.83906L11.8881 3.8759C12.0373 3.66348 12.0373 3.33424 11.8881 3.12183L9.70539 0.158667C9.46199 -0.181194 9.038 0.0630805 9.038 0.530389V2.44211Z',
          fill: 'currentColor',
        }),
      })
      var c = n(9097),
        d = n.n(c)
      let p = { heading: a().style.fontFamily, body: a().style.fontFamily },
        h = (0, s.B1)(s.YJ, p),
        f = (e) => {
          let { Component: r, pageProps: n, router: i } = e
          return (0, o.jsx)(s.xj, {
            theme: h,
            children: (0, o.jsxs)(s.Ar, {
              children: [
                (0, o.jsxs)(s.vx, {
                  router: i.asPath,
                  children: [
                    (0, o.jsx)(d(), {
                      href: '#Home',
                      scroll: !1,
                      children: (0, o.jsx)(s.sN, {
                        router: i.asPath,
                        children: 'Home',
                      }),
                    }),
                    (0, o.jsx)(d(), {
                      href: '#Technologies',
                      scroll: !1,
                      children: (0, o.jsx)(s.sN, {
                        router: i.asPath,
                        children: 'About',
                      }),
                    }),
                    (0, o.jsx)(d(), {
                      href: '#Services',
                      scroll: !1,
                      children: (0, o.jsx)(s.sN, {
                        router: i.asPath,
                        children: 'Services',
                      }),
                    }),
                    (0, o.jsx)(d(), {
                      href: '#Contact',
                      scroll: !1,
                      children: (0, o.jsxs)(s.sN, {
                        router: i.asPath,
                        children: [
                          'Contact \xa0',
                          (0, o.jsx)(u, {
                            width: '12px',
                            height: '7px',
                            marginBottom: '2px',
                            color:
                              '/#Contact' === i.asPath ? '#838383' : 'white',
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, o.jsx)(s.Ke, { router: i.asPath }),
                (0, o.jsx)('main', {
                  className: a().className,
                  children: (0, o.jsx)(r, { ...n }),
                }),
              ],
            }),
          })
        }
      var m = f
    },
    2219: function (e, r) {
      'use strict'
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.getDomainLocale = function (e, r, n, o) {
          return !1
        }),
        ('function' == typeof r.default ||
          ('object' == typeof r.default && null !== r.default)) &&
          void 0 === r.default.__esModule &&
          (Object.defineProperty(r.default, '__esModule', { value: !0 }),
          Object.assign(r.default, r),
          (e.exports = r.default))
    },
    1088: function (e, r, n) {
      'use strict'
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.default = void 0)
      var o = n(3903).Z,
        i = n(5154).Z,
        a = o(n(2784)),
        s = n(4e3),
        l = n(4588),
        u = n(7003),
        c = n(7858),
        d = n(7826),
        p = n(8599),
        h = n(2219),
        f = n(2484)
      let m = new Set()
      function g(e, r, n, o) {
        if (s.isLocalURL(r)) {
          if (!o.bypassPrefetchedCheck) {
            let i =
                void 0 !== o.locale
                  ? o.locale
                  : 'locale' in e
                  ? e.locale
                  : void 0,
              a = r + '%' + n + '%' + i
            if (m.has(a)) return
            m.add(a)
          }
          Promise.resolve(e.prefetch(r, n, o)).catch((e) => {})
        }
      }
      function b(e) {
        return 'string' == typeof e ? e : l.formatUrl(e)
      }
      let v = a.default.forwardRef(function (e, r) {
        let n, o
        let {
            href: l,
            as: m,
            children: v,
            prefetch: y,
            passHref: x,
            replace: k,
            shallow: S,
            scroll: w,
            locale: C,
            onClick: _,
            onMouseEnter: E,
            onTouchStart: j,
            legacyBehavior: T = !1,
          } = e,
          A = i(e, [
            'href',
            'as',
            'children',
            'prefetch',
            'passHref',
            'replace',
            'shallow',
            'scroll',
            'locale',
            'onClick',
            'onMouseEnter',
            'onTouchStart',
            'legacyBehavior',
          ])
        ;(n = v),
          T &&
            ('string' == typeof n || 'number' == typeof n) &&
            (n = a.default.createElement('a', null, n))
        let P = !1 !== y,
          B = a.default.useContext(c.RouterContext),
          R = a.default.useContext(d.AppRouterContext),
          z = null != B ? B : R,
          L = !B,
          { href: F, as: M } = a.default.useMemo(() => {
            if (!B) {
              let e = b(l)
              return { href: e, as: m ? b(m) : e }
            }
            let [e, r] = s.resolveHref(B, l, !0)
            return { href: e, as: m ? s.resolveHref(B, m) : r || e }
          }, [B, l, m]),
          $ = a.default.useRef(F),
          D = a.default.useRef(M)
        T && (o = a.default.Children.only(n))
        let I = T ? o && 'object' == typeof o && o.ref : r,
          [O, V, W] = p.useIntersection({ rootMargin: '200px' }),
          N = a.default.useCallback(
            (e) => {
              ;(D.current !== M || $.current !== F) &&
                (W(), (D.current = M), ($.current = F)),
                O(e),
                I &&
                  ('function' == typeof I
                    ? I(e)
                    : 'object' == typeof I && (I.current = e))
            },
            [M, I, F, W, O]
          )
        a.default.useEffect(() => {
          z && V && P && g(z, F, M, { locale: C })
        }, [M, F, V, C, P, null == B ? void 0 : B.locale, z])
        let H = {
          ref: N,
          onClick(e) {
            T || 'function' != typeof _ || _(e),
              T &&
                o.props &&
                'function' == typeof o.props.onClick &&
                o.props.onClick(e),
              z &&
                !e.defaultPrevented &&
                (function (e, r, n, o, i, l, u, c, d, p) {
                  let { nodeName: h } = e.currentTarget,
                    f = 'A' === h.toUpperCase()
                  if (
                    f &&
                    ((function (e) {
                      let { target: r } = e.currentTarget
                      return (
                        (r && '_self' !== r) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      )
                    })(e) ||
                      !s.isLocalURL(n))
                  )
                    return
                  e.preventDefault()
                  let m = () => {
                    'beforePopState' in r
                      ? r[i ? 'replace' : 'push'](n, o, {
                          shallow: l,
                          locale: c,
                          scroll: u,
                        })
                      : r[i ? 'replace' : 'push'](o || n, {
                          forceOptimisticNavigation: !p,
                        })
                  }
                  d ? a.default.startTransition(m) : m()
                })(e, z, F, M, k, S, w, C, L, P)
          },
          onMouseEnter(e) {
            T || 'function' != typeof E || E(e),
              T &&
                o.props &&
                'function' == typeof o.props.onMouseEnter &&
                o.props.onMouseEnter(e),
              z &&
                (P || !L) &&
                g(z, F, M, {
                  locale: C,
                  priority: !0,
                  bypassPrefetchedCheck: !0,
                })
          },
          onTouchStart(e) {
            T || 'function' != typeof j || j(e),
              T &&
                o.props &&
                'function' == typeof o.props.onTouchStart &&
                o.props.onTouchStart(e),
              z &&
                (P || !L) &&
                g(z, F, M, {
                  locale: C,
                  priority: !0,
                  bypassPrefetchedCheck: !0,
                })
          },
        }
        if (!T || x || ('a' === o.type && !('href' in o.props))) {
          let e = void 0 !== C ? C : null == B ? void 0 : B.locale,
            r =
              (null == B ? void 0 : B.isLocaleDomain) &&
              h.getDomainLocale(
                M,
                e,
                null == B ? void 0 : B.locales,
                null == B ? void 0 : B.domainLocales
              )
          H.href =
            r ||
            f.addBasePath(
              u.addLocale(M, e, null == B ? void 0 : B.defaultLocale)
            )
        }
        return T
          ? a.default.cloneElement(o, H)
          : a.default.createElement('a', Object.assign({}, A, H), n)
      })
      ;(r.default = v),
        ('function' == typeof r.default ||
          ('object' == typeof r.default && null !== r.default)) &&
          void 0 === r.default.__esModule &&
          (Object.defineProperty(r.default, '__esModule', { value: !0 }),
          Object.assign(r.default, r),
          (e.exports = r.default))
    },
    8599: function (e, r, n) {
      'use strict'
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.useIntersection = function (e) {
          let { rootRef: r, rootMargin: n, disabled: u } = e,
            c = u || !a,
            [d, p] = o.useState(!1),
            h = o.useRef(null),
            f = o.useCallback((e) => {
              h.current = e
            }, [])
          o.useEffect(() => {
            if (a) {
              if (c || d) return
              let e = h.current
              if (e && e.tagName) {
                let o = (function (e, r, n) {
                  let {
                    id: o,
                    observer: i,
                    elements: a,
                  } = (function (e) {
                    let r
                    let n = {
                        root: e.root || null,
                        margin: e.rootMargin || '',
                      },
                      o = l.find(
                        (e) => e.root === n.root && e.margin === n.margin
                      )
                    if (o && (r = s.get(o))) return r
                    let i = new Map(),
                      a = new IntersectionObserver((e) => {
                        e.forEach((e) => {
                          let r = i.get(e.target),
                            n = e.isIntersecting || e.intersectionRatio > 0
                          r && n && r(n)
                        })
                      }, e)
                    return (
                      (r = { id: n, observer: a, elements: i }),
                      l.push(n),
                      s.set(n, r),
                      r
                    )
                  })(n)
                  return (
                    a.set(e, r),
                    i.observe(e),
                    function () {
                      if ((a.delete(e), i.unobserve(e), 0 === a.size)) {
                        i.disconnect(), s.delete(o)
                        let e = l.findIndex(
                          (e) => e.root === o.root && e.margin === o.margin
                        )
                        e > -1 && l.splice(e, 1)
                      }
                    }
                  )
                })(e, (e) => e && p(e), {
                  root: null == r ? void 0 : r.current,
                  rootMargin: n,
                })
                return o
              }
            } else if (!d) {
              let e = i.requestIdleCallback(() => p(!0))
              return () => i.cancelIdleCallback(e)
            }
          }, [c, n, r, d, h.current])
          let m = o.useCallback(() => {
            p(!1)
          }, [])
          return [f, d, m]
        })
      var o = n(2784),
        i = n(1424)
      let a = 'function' == typeof IntersectionObserver,
        s = new Map(),
        l = []
      ;('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default))
    },
    8245: function (e, r, n) {
      'use strict'
      n.d(r, {
        zx: function () {
          return dN
        },
        Zb: function () {
          return pd
        },
        xj: function () {
          return dA
        },
        W2: function () {
          return d9
        },
        kC: function () {
          return dY
        },
        X6: function () {
          return dq
        },
        Wz: function () {
          return pb
        },
        Ar: function () {
          return d5
        },
        sN: function () {
          return po
        },
        vx: function () {
          return pe
        },
        _i: function () {
          return pa
        },
        Ke: function () {
          return pn
        },
        us: function () {
          return pc
        },
        Kq: function () {
          return dK
        },
        xv: function () {
          return d$
        },
        O9: function () {
          return d1
        },
        B1: function () {
          return dL
        },
        YJ: function () {
          return d2
        },
        ac: function () {
          return dU
        },
      })
      var o,
        i,
        a,
        s,
        l,
        u,
        c,
        d,
        p,
        h,
        f,
        m,
        g,
        b,
        v,
        y,
        x,
        k,
        S,
        w,
        C,
        _,
        E,
        j,
        T,
        A,
        P,
        B,
        R = n(2784)
      n(2107)
      var z = n(8543)
      n(3463)
      var L = n(2792),
        F = n(653),
        M = n(2668),
        $ = (0, z.w)(function (e, r) {
          var n = e.styles,
            o = (0, F.O)([n], void 0, (0, R.useContext)(z.T)),
            i = (0, R.useRef)()
          return (
            (0, M.j)(
              function () {
                var e = r.key + '-global',
                  n = new r.sheet.constructor({
                    key: e,
                    nonce: r.sheet.nonce,
                    container: r.sheet.container,
                    speedy: r.sheet.isSpeedy,
                  }),
                  a = !1,
                  s = document.querySelector(
                    'style[data-emotion="' + e + ' ' + o.name + '"]'
                  )
                return (
                  r.sheet.tags.length && (n.before = r.sheet.tags[0]),
                  null !== s &&
                    ((a = !0),
                    s.setAttribute('data-emotion', e),
                    n.hydrate([s])),
                  (i.current = [n, a]),
                  function () {
                    n.flush()
                  }
                )
              },
              [r]
            ),
            (0, M.j)(
              function () {
                var e = i.current,
                  n = e[0]
                if (e[1]) {
                  e[1] = !1
                  return
                }
                if (
                  (void 0 !== o.next && (0, L.My)(r, o.next, !0), n.tags.length)
                ) {
                  var a = n.tags[n.tags.length - 1].nextElementSibling
                  ;(n.before = a), n.flush()
                }
                r.insert('', o, n, !1)
              },
              [r, o.name]
            ),
            null
          )
        })
      function D() {
        for (var e = arguments.length, r = Array(e), n = 0; n < e; n++)
          r[n] = arguments[n]
        return (0, F.O)(r)
      }
      var I = n(2322),
        O = `
  :root {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root {
      --chakra-vh: 100dvh;
    }
  }
`,
        V = () => (0, I.jsx)($, { styles: O }),
        W = () =>
          (0, I.jsx)($, {
            styles: `
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        font-feature-settings: 'kern';
      }

      *,
      *::before,
      *::after {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
      }

      main {
        display: block;
      }

      hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      pre,
      code,
      kbd,
      samp {
        font-family: SFMono-Regular,  Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      b,
      strong {
        font-weight: bold;
      }

      small {
        font-size: 80%;
      }

      sub,
      sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      sub {
        bottom: -0.25em;
      }

      sup {
        top: -0.5em;
      }

      img {
        border-style: none;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      button,
      input {
        overflow: visible;
      }

      button,
      select {
        text-transform: none;
      }

      button::-moz-focus-inner,
      [type="button"]::-moz-focus-inner,
      [type="reset"]::-moz-focus-inner,
      [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
      }

      fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      progress {
        vertical-align: baseline;
      }

      textarea {
        overflow: auto;
      }

      [type="checkbox"],
      [type="radio"] {
        box-sizing: border-box;
        padding: 0;
      }

      [type="number"]::-webkit-inner-spin-button,
      [type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      input[type="number"] {
        -moz-appearance: textfield;
      }

      [type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      details {
        display: block;
      }

      summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      body,
      blockquote,
      dl,
      dd,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      hr,
      figure,
      p,
      pre {
        margin: 0;
      }

      button {
        background: transparent;
        padding: 0;
      }

      fieldset {
        margin: 0;
        padding: 0;
      }

      ol,
      ul {
        margin: 0;
        padding: 0;
      }

      textarea {
        resize: vertical;
      }

      button,
      [role="button"] {
        cursor: pointer;
      }

      button::-moz-focus-inner {
        border: 0 !important;
      }

      table {
        border-collapse: collapse;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-size: inherit;
        font-weight: inherit;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      img,
      svg,
      video,
      canvas,
      audio,
      iframe,
      embed,
      object {
        display: block;
      }

      img,
      video {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible] :focus:not([data-focus-visible-added]):not([data-focus-visible-disabled]) {
        outline: none;
        box-shadow: none;
      }

      select::-ms-expand {
        display: none;
      }

      ${O}
    `,
          })
      function N(e = {}) {
        let {
            name: r,
            strict: n = !0,
            hookName: o = 'useContext',
            providerName: i = 'Provider',
            errorMessage: a,
          } = e,
          s = (0, R.createContext)(void 0)
        return (
          (s.displayName = r),
          [
            s.Provider,
            function e() {
              var r
              let l = (0, R.useContext)(s)
              if (!l && n) {
                let n = Error(
                  null != a
                    ? a
                    : `${o} returned \`undefined\`. Seems you forgot to wrap component within ${i}`
                )
                throw (
                  ((n.name = 'ContextError'),
                  null == (r = Error.captureStackTrace) || r.call(Error, n, e),
                  n)
                )
              }
              return l
            },
            s,
          ]
        )
      }
      var [H, U] = N({ strict: !1, name: 'PortalManagerContext' })
      function q(e) {
        let { children: r, zIndex: n } = e
        return (0, I.jsx)(H, { value: { zIndex: n }, children: r })
      }
      q.displayName = 'PortalManager'
      var Y = n(4638),
        G = n(4586),
        X = n(2115),
        Z = n(9045)
      function K(e) {
        let { cssVarsRoot: r, theme: n, children: o } = e,
          i = (0, R.useMemo)(() => (0, G.c0)(n), [n])
        return (0, I.jsxs)(z.a, {
          theme: i,
          children: [(0, I.jsx)(J, { root: r }), o],
        })
      }
      function J({ root: e = ':host, :root' }) {
        let r = [e, '[data-theme]'].join(',')
        return (0, I.jsx)($, { styles: (e) => ({ [r]: e.__cssVars }) })
      }
      var [Q, ee] = (function (e = {}) {
        let {
            strict: r = !0,
            errorMessage:
              n = 'useContext: `context` is undefined. Seems you forgot to wrap component within the Provider',
            name: o,
          } = e,
          i = (0, R.createContext)(void 0)
        return (
          (i.displayName = o),
          [
            i.Provider,
            function e() {
              var o
              let a = (0, R.useContext)(i)
              if (!a && r) {
                let r = Error(n)
                throw (
                  ((r.name = 'ContextError'),
                  null == (o = Error.captureStackTrace) || o.call(Error, r, e),
                  r)
                )
              }
              return a
            },
            i,
          ]
        )
      })({
        name: 'StylesContext',
        errorMessage:
          'useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` ',
      })
      function et() {
        let { colorMode: e } = (0, Y.If)()
        return (0, I.jsx)($, {
          styles: (r) => {
            let n = (0, X.Wf)(r, 'styles.global'),
              o = (0, Z.Pu)(n, { theme: r, colorMode: e })
            if (!o) return
            let i = (0, G.iv)(o)(r)
            return i
          },
        })
      }
      var er = { light: 'chakra-ui-light', dark: 'chakra-ui-dark' },
        en = 'chakra-ui-color-mode',
        eo = {
          ssr: !1,
          type: 'localStorage',
          get(e) {
            let r
            if (!(null == globalThis ? void 0 : globalThis.document)) return e
            try {
              r = localStorage.getItem(en) || e
            } catch (e) {}
            return r || e
          },
          set(e) {
            try {
              localStorage.setItem(en, e)
            } catch (e) {}
          },
        },
        ei = Boolean(null == globalThis ? void 0 : globalThis.document)
          ? R.useLayoutEffect
          : R.useEffect,
        ea = () => {}
      function es(e, r) {
        return 'cookie' === e.type && e.ssr ? e.get(r) : r
      }
      function el(e) {
        let {
            value: r,
            children: n,
            options: {
              useSystemColorMode: o,
              initialColorMode: i,
              disableTransitionOnChange: a,
            } = {},
            colorModeManager: s = eo,
          } = e,
          l = 'dark' === i ? 'dark' : 'light',
          [u, c] = (0, R.useState)(() => es(s, l)),
          [d, p] = (0, R.useState)(() => es(s)),
          {
            getSystemTheme: h,
            setClassName: f,
            setDataset: m,
            addListener: g,
          } = (0, R.useMemo)(
            () =>
              (function (e = {}) {
                let { preventTransition: r = !0 } = e,
                  n = {
                    setDataset: (e) => {
                      let o = r ? n.preventTransition() : void 0
                      ;(document.documentElement.dataset.theme = e),
                        (document.documentElement.style.colorScheme = e),
                        null == o || o()
                    },
                    setClassName(e) {
                      document.body.classList.add(e ? er.dark : er.light),
                        document.body.classList.remove(e ? er.light : er.dark)
                    },
                    query: () =>
                      window.matchMedia('(prefers-color-scheme: dark)'),
                    getSystemTheme(e) {
                      var r
                      let o = null != (r = n.query().matches) ? r : 'dark' === e
                      return o ? 'dark' : 'light'
                    },
                    addListener(e) {
                      let r = n.query(),
                        o = (r) => {
                          e(r.matches ? 'dark' : 'light')
                        }
                      return (
                        'function' == typeof r.addListener
                          ? r.addListener(o)
                          : r.addEventListener('change', o),
                        () => {
                          'function' == typeof r.removeListener
                            ? r.removeListener(o)
                            : r.removeEventListener('change', o)
                        }
                      )
                    },
                    preventTransition() {
                      let e = document.createElement('style')
                      return (
                        e.appendChild(
                          document.createTextNode(
                            '*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}'
                          )
                        ),
                        document.head.appendChild(e),
                        () => {
                          window.getComputedStyle(document.body),
                            requestAnimationFrame(() => {
                              requestAnimationFrame(() => {
                                document.head.removeChild(e)
                              })
                            })
                        }
                      )
                    },
                  }
                return n
              })({ preventTransition: a }),
            [a]
          ),
          b = 'system' !== i || u ? u : d,
          v = (0, R.useCallback)(
            (e) => {
              let r = 'system' === e ? h() : e
              c(r), f('dark' === r), m(r), s.set(r)
            },
            [s, h, f, m]
          )
        ei(() => {
          'system' === i && p(h())
        }, []),
          (0, R.useEffect)(() => {
            let e = s.get()
            if (e) {
              v(e)
              return
            }
            if ('system' === i) {
              v('system')
              return
            }
            v(l)
          }, [s, l, i, v])
        let y = (0, R.useCallback)(() => {
          v('dark' === b ? 'light' : 'dark')
        }, [b, v])
        ;(0, R.useEffect)(() => {
          if (o) return g(v)
        }, [o, g, v])
        let x = (0, R.useMemo)(
          () => ({
            colorMode: null != r ? r : b,
            toggleColorMode: r ? ea : y,
            setColorMode: r ? ea : v,
            forced: void 0 !== r,
          }),
          [b, y, v, r]
        )
        return (0, I.jsx)(Y.kc.Provider, { value: x, children: n })
      }
      el.displayName = 'ColorModeProvider'
      var eu = (0, R.createContext)({
        getDocument: () => document,
        getWindow: () => window,
      })
      function ec(e) {
        let { children: r, environment: n, disabled: o } = e,
          i = (0, R.useRef)(null),
          a = (0, R.useMemo)(
            () =>
              n || {
                getDocument: () => {
                  var e, r
                  return null !=
                    (r = null == (e = i.current) ? void 0 : e.ownerDocument)
                    ? r
                    : document
                },
                getWindow: () => {
                  var e, r
                  return null !=
                    (r =
                      null == (e = i.current)
                        ? void 0
                        : e.ownerDocument.defaultView)
                    ? r
                    : window
                },
              },
            [n]
          )
        return (0, I.jsxs)(eu.Provider, {
          value: a,
          children: [
            r,
            (!o || !n) &&
              (0, I.jsx)('span', { id: '__chakra_env', hidden: !0, ref: i }),
          ],
        })
      }
      ;(eu.displayName = 'EnvironmentContext'),
        (ec.displayName = 'EnvironmentProvider')
      var ed = (e) => {
          let {
              children: r,
              colorModeManager: n,
              portalZIndex: o,
              resetCSS: i = !0,
              theme: a = {},
              environment: s,
              cssVarsRoot: l,
              disableEnvironment: u,
            } = e,
            c = (0, I.jsx)(ec, { environment: s, disabled: u, children: r })
          return (0, I.jsx)(K, {
            theme: a,
            cssVarsRoot: l,
            children: (0, I.jsxs)(el, {
              colorModeManager: n,
              options: a.config,
              children: [
                i ? (0, I.jsx)(W, {}) : (0, I.jsx)(V, {}),
                (0, I.jsx)(et, {}),
                o ? (0, I.jsx)(q, { zIndex: o, children: c }) : c,
              ],
            }),
          })
        },
        ep = {
          letterSpacings: {
            tighter: '-0.05em',
            tight: '-0.025em',
            normal: '0',
            wide: '0.025em',
            wider: '0.05em',
            widest: '0.1em',
          },
          lineHeights: {
            normal: 'normal',
            none: 1,
            shorter: 1.25,
            short: 1.375,
            base: 1.5,
            tall: 1.625,
            taller: '2',
            3: '.75rem',
            4: '1rem',
            5: '1.25rem',
            6: '1.5rem',
            7: '1.75rem',
            8: '2rem',
            9: '2.25rem',
            10: '2.5rem',
          },
          fontWeights: {
            hairline: 100,
            thin: 200,
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
            black: 900,
          },
          fonts: {
            heading:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
          },
          fontSizes: {
            '3xs': '0.45rem',
            '2xs': '0.625rem',
            xs: '0.75rem',
            sm: '0.875rem',
            md: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '3.75rem',
            '7xl': '4.5rem',
            '8xl': '6rem',
            '9xl': '8rem',
          },
        },
        eh = {
          px: '1px',
          0.5: '0.125rem',
          1: '0.25rem',
          1.5: '0.375rem',
          2: '0.5rem',
          2.5: '0.625rem',
          3: '0.75rem',
          3.5: '0.875rem',
          4: '1rem',
          5: '1.25rem',
          6: '1.5rem',
          7: '1.75rem',
          8: '2rem',
          9: '2.25rem',
          10: '2.5rem',
          12: '3rem',
          14: '3.5rem',
          16: '4rem',
          20: '5rem',
          24: '6rem',
          28: '7rem',
          32: '8rem',
          36: '9rem',
          40: '10rem',
          44: '11rem',
          48: '12rem',
          52: '13rem',
          56: '14rem',
          60: '15rem',
          64: '16rem',
          72: '18rem',
          80: '20rem',
          96: '24rem',
        },
        ef = {
          ...eh,
          max: 'max-content',
          min: 'min-content',
          full: '100%',
          '3xs': '14rem',
          '2xs': '16rem',
          xs: '20rem',
          sm: '24rem',
          md: '28rem',
          lg: '32rem',
          xl: '36rem',
          '2xl': '42rem',
          '3xl': '48rem',
          '4xl': '56rem',
          '5xl': '64rem',
          '6xl': '72rem',
          '7xl': '80rem',
          '8xl': '90rem',
          prose: '60ch',
          container: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' },
        },
        em = {
          breakpoints: {
            base: '0em',
            sm: '30em',
            md: '48em',
            lg: '62em',
            xl: '80em',
            '2xl': '96em',
          },
          zIndices: {
            hide: -1,
            auto: 'auto',
            base: 0,
            docked: 10,
            dropdown: 1e3,
            sticky: 1100,
            banner: 1200,
            overlay: 1300,
            modal: 1400,
            popover: 1500,
            skipLink: 1600,
            toast: 1700,
            tooltip: 1800,
          },
          radii: {
            none: '0',
            sm: '0.125rem',
            base: '0.25rem',
            md: '0.375rem',
            lg: '0.5rem',
            xl: '0.75rem',
            '2xl': '1rem',
            '3xl': '1.5rem',
            full: '9999px',
          },
          blur: {
            none: 0,
            sm: '4px',
            base: '8px',
            md: '12px',
            lg: '16px',
            xl: '24px',
            '2xl': '40px',
            '3xl': '64px',
          },
          colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: '#000000',
            white: '#FFFFFF',
            whiteAlpha: {
              50: 'rgba(255, 255, 255, 0.04)',
              100: 'rgba(255, 255, 255, 0.06)',
              200: 'rgba(255, 255, 255, 0.08)',
              300: 'rgba(255, 255, 255, 0.16)',
              400: 'rgba(255, 255, 255, 0.24)',
              500: 'rgba(255, 255, 255, 0.36)',
              600: 'rgba(255, 255, 255, 0.48)',
              700: 'rgba(255, 255, 255, 0.64)',
              800: 'rgba(255, 255, 255, 0.80)',
              900: 'rgba(255, 255, 255, 0.92)',
            },
            blackAlpha: {
              50: 'rgba(0, 0, 0, 0.04)',
              100: 'rgba(0, 0, 0, 0.06)',
              200: 'rgba(0, 0, 0, 0.08)',
              300: 'rgba(0, 0, 0, 0.16)',
              400: 'rgba(0, 0, 0, 0.24)',
              500: 'rgba(0, 0, 0, 0.36)',
              600: 'rgba(0, 0, 0, 0.48)',
              700: 'rgba(0, 0, 0, 0.64)',
              800: 'rgba(0, 0, 0, 0.80)',
              900: 'rgba(0, 0, 0, 0.92)',
            },
            gray: {
              50: '#F7FAFC',
              100: '#EDF2F7',
              200: '#E2E8F0',
              300: '#CBD5E0',
              400: '#A0AEC0',
              500: '#718096',
              600: '#4A5568',
              700: '#2D3748',
              800: '#1A202C',
              900: '#171923',
            },
            red: {
              50: '#FFF5F5',
              100: '#FED7D7',
              200: '#FEB2B2',
              300: '#FC8181',
              400: '#F56565',
              500: '#E53E3E',
              600: '#C53030',
              700: '#9B2C2C',
              800: '#822727',
              900: '#63171B',
            },
            orange: {
              50: '#FFFAF0',
              100: '#FEEBC8',
              200: '#FBD38D',
              300: '#F6AD55',
              400: '#ED8936',
              500: '#DD6B20',
              600: '#C05621',
              700: '#9C4221',
              800: '#7B341E',
              900: '#652B19',
            },
            yellow: {
              50: '#FFFFF0',
              100: '#FEFCBF',
              200: '#FAF089',
              300: '#F6E05E',
              400: '#ECC94B',
              500: '#D69E2E',
              600: '#B7791F',
              700: '#975A16',
              800: '#744210',
              900: '#5F370E',
            },
            green: {
              50: '#F0FFF4',
              100: '#C6F6D5',
              200: '#9AE6B4',
              300: '#68D391',
              400: '#48BB78',
              500: '#38A169',
              600: '#2F855A',
              700: '#276749',
              800: '#22543D',
              900: '#1C4532',
            },
            teal: {
              50: '#E6FFFA',
              100: '#B2F5EA',
              200: '#81E6D9',
              300: '#4FD1C5',
              400: '#38B2AC',
              500: '#319795',
              600: '#2C7A7B',
              700: '#285E61',
              800: '#234E52',
              900: '#1D4044',
            },
            blue: {
              50: '#ebf8ff',
              100: '#bee3f8',
              200: '#90cdf4',
              300: '#63b3ed',
              400: '#4299e1',
              500: '#3182ce',
              600: '#2b6cb0',
              700: '#2c5282',
              800: '#2a4365',
              900: '#1A365D',
            },
            cyan: {
              50: '#EDFDFD',
              100: '#C4F1F9',
              200: '#9DECF9',
              300: '#76E4F7',
              400: '#0BC5EA',
              500: '#00B5D8',
              600: '#00A3C4',
              700: '#0987A0',
              800: '#086F83',
              900: '#065666',
            },
            purple: {
              50: '#FAF5FF',
              100: '#E9D8FD',
              200: '#D6BCFA',
              300: '#B794F4',
              400: '#9F7AEA',
              500: '#805AD5',
              600: '#6B46C1',
              700: '#553C9A',
              800: '#44337A',
              900: '#322659',
            },
            pink: {
              50: '#FFF5F7',
              100: '#FED7E2',
              200: '#FBB6CE',
              300: '#F687B3',
              400: '#ED64A6',
              500: '#D53F8C',
              600: '#B83280',
              700: '#97266D',
              800: '#702459',
              900: '#521B41',
            },
            linkedin: {
              50: '#E8F4F9',
              100: '#CFEDFB',
              200: '#9BDAF3',
              300: '#68C7EC',
              400: '#34B3E4',
              500: '#00A0DC',
              600: '#008CC9',
              700: '#0077B5',
              800: '#005E93',
              900: '#004471',
            },
            facebook: {
              50: '#E8F4F9',
              100: '#D9DEE9',
              200: '#B7C2DA',
              300: '#6482C0',
              400: '#4267B2',
              500: '#385898',
              600: '#314E89',
              700: '#29487D',
              800: '#223B67',
              900: '#1E355B',
            },
            messenger: {
              50: '#D0E6FF',
              100: '#B9DAFF',
              200: '#A2CDFF',
              300: '#7AB8FF',
              400: '#2E90FF',
              500: '#0078FF',
              600: '#0063D1',
              700: '#0052AC',
              800: '#003C7E',
              900: '#002C5C',
            },
            whatsapp: {
              50: '#dffeec',
              100: '#b9f5d0',
              200: '#90edb3',
              300: '#65e495',
              400: '#3cdd78',
              500: '#22c35e',
              600: '#179848',
              700: '#0c6c33',
              800: '#01421c',
              900: '#001803',
            },
            twitter: {
              50: '#E5F4FD',
              100: '#C8E9FB',
              200: '#A8DCFA',
              300: '#83CDF7',
              400: '#57BBF5',
              500: '#1DA1F2',
              600: '#1A94DA',
              700: '#1681BF',
              800: '#136B9E',
              900: '#0D4D71',
            },
            telegram: {
              50: '#E3F2F9',
              100: '#C5E4F3',
              200: '#A2D4EC',
              300: '#7AC1E4',
              400: '#47A9DA',
              500: '#0088CC',
              600: '#007AB8',
              700: '#006BA1',
              800: '#005885',
              900: '#003F5E',
            },
          },
          ...ep,
          sizes: ef,
          shadows: {
            xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
            sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            outline: '0 0 0 3px rgba(66, 153, 225, 0.6)',
            inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
            none: 'none',
            'dark-lg':
              'rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px',
          },
          space: eh,
          borders: {
            none: 0,
            '1px': '1px solid',
            '2px': '2px solid',
            '4px': '4px solid',
            '8px': '8px solid',
          },
          transition: {
            property: {
              common:
                'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
              colors: 'background-color, border-color, color, fill, stroke',
              dimensions: 'width, height',
              position: 'left, right, top, bottom',
              background:
                'background-color, background-image, background-position',
            },
            easing: {
              'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
              'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
              'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
            },
            duration: {
              'ultra-fast': '50ms',
              faster: '100ms',
              fast: '150ms',
              normal: '200ms',
              slow: '300ms',
              slower: '400ms',
              'ultra-slow': '500ms',
            },
          },
        }
      function eg(e, r = {}) {
        let n = !1
        function o(r) {
          let n = ['container', 'root'].includes(null != r ? r : '')
              ? [e]
              : [e, r],
            o = n.filter(Boolean).join('__'),
            i = `chakra-${o}`,
            a = { className: i, selector: `.${i}`, toString: () => r }
          return a
        }
        return {
          parts: function (...i) {
            for (let e of (!(function () {
              if (!n) {
                n = !0
                return
              }
              throw Error(
                '[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?'
              )
            })(),
            i))
              r[e] = o(e)
            return eg(e, r)
          },
          toPart: o,
          extend: function (...n) {
            for (let e of n) e in r || (r[e] = o(e))
            return eg(e, r)
          },
          selectors: function () {
            let e = Object.fromEntries(
              Object.entries(r).map(([e, r]) => [e, r.selector])
            )
            return e
          },
          classnames: function () {
            let e = Object.fromEntries(
              Object.entries(r).map(([e, r]) => [e, r.className])
            )
            return e
          },
          get keys() {
            return Object.keys(r)
          },
          __type: {},
        }
      }
      var eb = eg('accordion')
          .parts('root', 'container', 'button', 'panel')
          .extend('icon'),
        ev = eg('alert')
          .parts('title', 'description', 'container')
          .extend('icon', 'spinner'),
        ey = eg('avatar')
          .parts('label', 'badge', 'container')
          .extend('excessLabel', 'group'),
        ex = eg('breadcrumb')
          .parts('link', 'item', 'container')
          .extend('separator')
      eg('button').parts()
      var ek = eg('checkbox')
        .parts('control', 'icon', 'container')
        .extend('label')
      eg('progress').parts('track', 'filledTrack').extend('label')
      var eS = eg('drawer')
          .parts('overlay', 'dialogContainer', 'dialog')
          .extend('header', 'closeButton', 'body', 'footer'),
        ew = eg('editable').parts('preview', 'input', 'textarea'),
        eC = eg('form').parts('container', 'requiredIndicator', 'helperText'),
        e_ = eg('formError').parts('text', 'icon'),
        eE = eg('input').parts('addon', 'field', 'element'),
        ej = eg('list').parts('container', 'item', 'icon'),
        eT = eg('menu')
          .parts('button', 'list', 'item')
          .extend('groupTitle', 'command', 'divider'),
        eA = eg('modal')
          .parts('overlay', 'dialogContainer', 'dialog')
          .extend('header', 'closeButton', 'body', 'footer'),
        eP = eg('numberinput').parts('root', 'field', 'stepperGroup', 'stepper')
      eg('pininput').parts('field')
      var eB = eg('popover')
          .parts('content', 'header', 'body', 'footer')
          .extend('popper', 'arrow', 'closeButton'),
        eR = eg('progress').parts('label', 'filledTrack', 'track'),
        ez = eg('radio').parts('container', 'control', 'label'),
        eL = eg('select').parts('field', 'icon'),
        eF = eg('slider').parts(
          'container',
          'track',
          'thumb',
          'filledTrack',
          'mark'
        ),
        eM = eg('stat').parts(
          'container',
          'label',
          'helpText',
          'number',
          'icon'
        ),
        e$ = eg('switch').parts('container', 'track', 'thumb'),
        eD = eg('table').parts(
          'table',
          'thead',
          'tbody',
          'tr',
          'th',
          'td',
          'tfoot',
          'caption'
        ),
        eI = eg('tabs').parts(
          'root',
          'tab',
          'tablist',
          'tabpanel',
          'tabpanels',
          'indicator'
        ),
        eO = eg('tag').parts('container', 'label', 'closeButton'),
        eV = eg('card').parts('container', 'header', 'body', 'footer')
      function eW(e) {
        let r = (function (e, r = '-') {
          return e.replace(/\s+/g, r)
        })(e.toString())
        return r.includes('\\.')
          ? e
          : Number.isInteger(parseFloat(e.toString()))
          ? e
          : r.replace('.', '\\.')
      }
      function eN(e, r) {
        var n, o
        let i = (function (e, r = '') {
          return `--${(function (e, r = '') {
            return [r, eW(e)].filter(Boolean).join('-')
          })(e, r)}`
        })(e, null == r ? void 0 : r.prefix)
        return {
          variable: i,
          reference:
            ((n =
              'string' == typeof (o = null == r ? void 0 : r.fallback)
                ? o
                : null == o
                ? void 0
                : o.reference),
            `var(${eW(i)}${n ? `, ${n}` : ''})`),
        }
      }
      var eH = n(1053)
      function eU(e) {
        return (0, eH.Kn)(e) && e.reference ? e.reference : String(e)
      }
      var eq = (e, ...r) => r.map(eU).join(` ${e} `).replace(/calc/g, ''),
        eY = (...e) => `calc(${eq('+', ...e)})`,
        eG = (...e) => `calc(${eq('-', ...e)})`,
        eX = (...e) => `calc(${eq('*', ...e)})`,
        eZ = (...e) => `calc(${eq('/', ...e)})`,
        eK = (e) => {
          let r = eU(e)
          return null == r || Number.isNaN(parseFloat(r))
            ? eX(r, -1)
            : String(r).startsWith('-')
            ? String(r).slice(1)
            : `-${r}`
        },
        eJ = Object.assign(
          (e) => ({
            add: (...r) => eJ(eY(e, ...r)),
            subtract: (...r) => eJ(eG(e, ...r)),
            multiply: (...r) => eJ(eX(e, ...r)),
            divide: (...r) => eJ(eZ(e, ...r)),
            negate: () => eJ(eK(e)),
            toString: () => e.toString(),
          }),
          { add: eY, subtract: eG, multiply: eX, divide: eZ, negate: eK }
        ),
        { defineMultiStyleConfig: eQ, definePartsStyle: e0 } = (0, G.D)(
          e$.keys
        ),
        e1 = eN('switch-track-width'),
        e2 = eN('switch-track-height'),
        e5 = eN('switch-track-diff'),
        e3 = eJ.subtract(e1, e2),
        e4 = eN('switch-thumb-x'),
        e9 = eN('switch-bg'),
        e6 = (0, G.k0)((e) => {
          let { colorScheme: r } = e
          return {
            borderRadius: 'full',
            p: '0.5',
            width: [e1.reference],
            height: [e2.reference],
            transitionProperty: 'common',
            transitionDuration: 'fast',
            [e9.variable]: 'colors.gray.300',
            _dark: { [e9.variable]: 'colors.whiteAlpha.400' },
            _focusVisible: { boxShadow: 'outline' },
            _disabled: { opacity: 0.4, cursor: 'not-allowed' },
            _checked: {
              [e9.variable]: `colors.${r}.500`,
              _dark: { [e9.variable]: `colors.${r}.200` },
            },
            bg: e9.reference,
          }
        }),
        e8 = (0, G.k0)({
          bg: 'white',
          transitionProperty: 'transform',
          transitionDuration: 'normal',
          borderRadius: 'inherit',
          width: [e2.reference],
          height: [e2.reference],
          _checked: { transform: `translateX(${e4.reference})` },
        }),
        e7 = e0((e) => ({
          container: {
            [e5.variable]: e3,
            [e4.variable]: e5.reference,
            _rtl: { [e4.variable]: eJ(e5).negate().toString() },
          },
          track: e6(e),
          thumb: e8,
        })),
        te = eQ({
          baseStyle: e7,
          sizes: {
            sm: e0({
              container: {
                [e1.variable]: '1.375rem',
                [e2.variable]: 'sizes.3',
              },
            }),
            md: e0({
              container: {
                [e1.variable]: '1.875rem',
                [e2.variable]: 'sizes.4',
              },
            }),
            lg: e0({
              container: {
                [e1.variable]: '2.875rem',
                [e2.variable]: 'sizes.6',
              },
            }),
          },
          defaultProps: { size: 'md', colorScheme: 'blue' },
        })
      function tt(e, r) {
        return (n) => ('dark' === n.colorMode ? r : e)
      }
      function tr(e) {
        let { orientation: r, vertical: n, horizontal: o } = e
        return r ? ('vertical' === r ? n : o) : {}
      }
      var { defineMultiStyleConfig: tn, definePartsStyle: to } = (0, G.D)(
          eD.keys
        ),
        ti = to({
          table: {
            fontVariantNumeric: 'lining-nums tabular-nums',
            borderCollapse: 'collapse',
            width: 'full',
          },
          th: {
            fontFamily: 'heading',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: 'wider',
            textAlign: 'start',
          },
          td: { textAlign: 'start' },
          caption: {
            mt: 4,
            fontFamily: 'heading',
            textAlign: 'center',
            fontWeight: 'medium',
          },
        }),
        ta = (0, G.k0)({ '&[data-is-numeric=true]': { textAlign: 'end' } }),
        ts = {
          simple: to((e) => {
            let { colorScheme: r } = e
            return {
              th: {
                color: tt('gray.600', 'gray.400')(e),
                borderBottom: '1px',
                borderColor: tt(`${r}.100`, `${r}.700`)(e),
                ...ta,
              },
              td: {
                borderBottom: '1px',
                borderColor: tt(`${r}.100`, `${r}.700`)(e),
                ...ta,
              },
              caption: { color: tt('gray.600', 'gray.100')(e) },
              tfoot: {
                tr: { '&:last-of-type': { th: { borderBottomWidth: 0 } } },
              },
            }
          }),
          striped: to((e) => {
            let { colorScheme: r } = e
            return {
              th: {
                color: tt('gray.600', 'gray.400')(e),
                borderBottom: '1px',
                borderColor: tt(`${r}.100`, `${r}.700`)(e),
                ...ta,
              },
              td: {
                borderBottom: '1px',
                borderColor: tt(`${r}.100`, `${r}.700`)(e),
                ...ta,
              },
              caption: { color: tt('gray.600', 'gray.100')(e) },
              tbody: {
                tr: {
                  '&:nth-of-type(odd)': {
                    'th, td': {
                      borderBottomWidth: '1px',
                      borderColor: tt(`${r}.100`, `${r}.700`)(e),
                    },
                    td: { background: tt(`${r}.100`, `${r}.700`)(e) },
                  },
                },
              },
              tfoot: {
                tr: { '&:last-of-type': { th: { borderBottomWidth: 0 } } },
              },
            }
          }),
          unstyled: (0, G.k0)({}),
        },
        tl = tn({
          baseStyle: ti,
          variants: ts,
          sizes: {
            sm: to({
              th: { px: '4', py: '1', lineHeight: '4', fontSize: 'xs' },
              td: { px: '4', py: '2', fontSize: 'sm', lineHeight: '4' },
              caption: { px: '4', py: '2', fontSize: 'xs' },
            }),
            md: to({
              th: { px: '6', py: '3', lineHeight: '4', fontSize: 'xs' },
              td: { px: '6', py: '4', lineHeight: '5' },
              caption: { px: '6', py: '2', fontSize: 'sm' },
            }),
            lg: to({
              th: { px: '8', py: '4', lineHeight: '5', fontSize: 'sm' },
              td: { px: '8', py: '5', lineHeight: '6' },
              caption: { px: '6', py: '2', fontSize: 'md' },
            }),
          },
          defaultProps: { variant: 'simple', size: 'md', colorScheme: 'gray' },
        })
      function tu(e, r, n) {
        return Math.min(Math.max(e, n), r)
      }
      var tc = class extends Error {
        constructor(e) {
          super(`Failed to parse color: "${e}"`)
        }
      }
      function td(e) {
        if ('string' != typeof e) throw new tc(e)
        if ('transparent' === e.trim().toLowerCase()) return [0, 0, 0, 0]
        let r = e.trim()
        r = ty.test(e)
          ? (function (e) {
              let r = e.toLowerCase().trim(),
                n =
                  th[
                    (function (e) {
                      let r = 5381,
                        n = e.length
                      for (; n; ) r = (33 * r) ^ e.charCodeAt(--n)
                      return (r >>> 0) % 2341
                    })(r)
                  ]
              if (!n) throw new tc(e)
              return `#${n}`
            })(e)
          : e
        let n = tm.exec(r)
        if (n) {
          let e = Array.from(n).slice(1)
          return [
            ...e.slice(0, 3).map((e) => parseInt(tf(e, 2), 16)),
            parseInt(tf(e[3] || 'f', 2), 16) / 255,
          ]
        }
        let o = tg.exec(r)
        if (o) {
          let e = Array.from(o).slice(1)
          return [
            ...e.slice(0, 3).map((e) => parseInt(e, 16)),
            parseInt(e[3] || 'ff', 16) / 255,
          ]
        }
        let i = tb.exec(r)
        if (i) {
          let e = Array.from(i).slice(1)
          return [
            ...e.slice(0, 3).map((e) => parseInt(e, 10)),
            parseFloat(e[3] || '1'),
          ]
        }
        let a = tv.exec(r)
        if (a) {
          let [r, n, o, i] = Array.from(a).slice(1).map(parseFloat)
          if (tu(0, 100, n) !== n || tu(0, 100, o) !== o) throw new tc(e)
          return [...tk(r, n, o), Number.isNaN(i) ? 1 : i]
        }
        throw new tc(e)
      }
      let tp = (e) => parseInt(e.replace(/_/g, ''), 36),
        th =
          '1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm'
            .split(' ')
            .reduce((e, r) => {
              let n = tp(r.substring(0, 3)),
                o = tp(r.substring(3)).toString(16),
                i = ''
              for (let e = 0; e < 6 - o.length; e++) i += '0'
              return (e[n] = `${i}${o}`), e
            }, {}),
        tf = (e, r) =>
          Array.from(Array(r))
            .map(() => e)
            .join(''),
        tm = RegExp(`^#${tf('([a-f0-9])', 3)}([a-f0-9])?$`, 'i'),
        tg = RegExp(`^#${tf('([a-f0-9]{2})', 3)}([a-f0-9]{2})?$`, 'i'),
        tb = RegExp(
          `^rgba?\\(\\s*(\\d+)\\s*${tf(
            ',\\s*(\\d+)\\s*',
            2
          )}(?:,\\s*([\\d.]+))?\\s*\\)$`,
          'i'
        ),
        tv =
          /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
        ty = /^[a-z]+$/i,
        tx = (e) => Math.round(255 * e),
        tk = (e, r, n) => {
          let o = n / 100
          if (0 === r) return [o, o, o].map(tx)
          let i = (((e % 360) + 360) % 360) / 60,
            a = (1 - Math.abs(2 * o - 1)) * (r / 100),
            s = a * (1 - Math.abs((i % 2) - 1)),
            l = 0,
            u = 0,
            c = 0
          i >= 0 && i < 1
            ? ((l = a), (u = s))
            : i >= 1 && i < 2
            ? ((l = s), (u = a))
            : i >= 2 && i < 3
            ? ((u = a), (c = s))
            : i >= 3 && i < 4
            ? ((u = s), (c = a))
            : i >= 4 && i < 5
            ? ((l = s), (c = a))
            : i >= 5 && i < 6 && ((l = a), (c = s))
          let d = o - a / 2,
            p = l + d,
            h = u + d,
            f = c + d
          return [p, h, f].map(tx)
        }
      var tS = (e) => 0 === Object.keys(e).length,
        tw = (e, r, n) => {
          let o = (function (e, r, n, o, i) {
            for (r = r.split ? r.split('.') : r, o = 0; o < r.length; o++)
              e = e ? e[r[o]] : i
            return e === i ? n : e
          })(e, `colors.${r}`, r)
          try {
            return (
              !(function (e) {
                let [r, n, o, i] = td(e),
                  a = (e) => {
                    let r = tu(0, 255, e).toString(16)
                    return 1 === r.length ? `0${r}` : r
                  }
                a(r), a(n), a(o), i < 1 && a(Math.round(255 * i))
              })(o),
              o
            )
          } catch {
            return null != n ? n : '#000000'
          }
        },
        tC = (e) => {
          let [r, n, o] = td(e)
          return (299 * r + 587 * n + 114 * o) / 1e3
        },
        t_ = (e) => (r) => {
          let n = tw(r, e),
            o = tC(n)
          return o < 128 ? 'dark' : 'light'
        },
        tE = (e) => (r) => 'dark' === t_(e)(r),
        tj = (e, r) => (n) => {
          let o = tw(n, e)
          return (function (e, r) {
            let [n, o, i, a] = td(e)
            return `rgba(${tu(0, 255, n).toFixed()}, ${tu(
              0,
              255,
              o
            ).toFixed()}, ${tu(0, 255, i).toFixed()}, ${parseFloat(
              tu(0, 1, a - r).toFixed(3)
            )})`
          })(o, 1 - r)
        }
      function tT(e = '1rem', r = 'rgba(255, 255, 255, 0.15)') {
        return {
          backgroundImage: `linear-gradient(
    45deg,
    ${r} 25%,
    transparent 25%,
    transparent 50%,
    ${r} 50%,
    ${r} 75%,
    transparent 75%,
    transparent
  )`,
          backgroundSize: `${e} ${e}`,
        }
      }
      var tA = () =>
          `#${Math.floor(16777215 * Math.random())
            .toString(16)
            .padEnd(6, '0')}`,
        tP = (0, G.gJ)('tabs-color'),
        tB = (0, G.gJ)('tabs-bg'),
        tR = (0, G.gJ)('tabs-border-color'),
        { defineMultiStyleConfig: tz, definePartsStyle: tL } = (0, G.D)(
          eI.keys
        ),
        tF = (0, G.k0)((e) => {
          let { orientation: r } = e
          return { display: 'vertical' === r ? 'flex' : 'block' }
        }),
        tM = (0, G.k0)((e) => {
          let { isFitted: r } = e
          return {
            flex: r ? 1 : void 0,
            transitionProperty: 'common',
            transitionDuration: 'normal',
            _focusVisible: { zIndex: 1, boxShadow: 'outline' },
            _disabled: { cursor: 'not-allowed', opacity: 0.4 },
          }
        }),
        t$ = (0, G.k0)((e) => {
          let { align: r = 'start', orientation: n } = e
          return {
            justifyContent: {
              end: 'flex-end',
              center: 'center',
              start: 'flex-start',
            }[r],
            flexDirection: 'vertical' === n ? 'column' : 'row',
          }
        }),
        tD = (0, G.k0)({ p: 4 }),
        tI = tz({
          baseStyle: tL((e) => ({
            root: tF(e),
            tab: tM(e),
            tablist: t$(e),
            tabpanel: tD,
          })),
          sizes: {
            sm: tL({ tab: { py: 1, px: 4, fontSize: 'sm' } }),
            md: tL({ tab: { fontSize: 'md', py: 2, px: 4 } }),
            lg: tL({ tab: { fontSize: 'lg', py: 3, px: 4 } }),
          },
          variants: {
            line: tL((e) => {
              let { colorScheme: r, orientation: n } = e,
                o = 'vertical' === n ? 'borderStart' : 'borderBottom'
              return {
                tablist: { [o]: '2px solid', borderColor: 'inherit' },
                tab: {
                  [o]: '2px solid',
                  borderColor: 'transparent',
                  ['vertical' === n ? 'marginStart' : 'marginBottom']: '-2px',
                  _selected: {
                    [tP.variable]: `colors.${r}.600`,
                    _dark: { [tP.variable]: `colors.${r}.300` },
                    borderColor: 'currentColor',
                  },
                  _active: {
                    [tB.variable]: 'colors.gray.200',
                    _dark: { [tB.variable]: 'colors.whiteAlpha.300' },
                  },
                  _disabled: { _active: { bg: 'none' } },
                  color: tP.reference,
                  bg: tB.reference,
                },
              }
            }),
            enclosed: tL((e) => {
              let { colorScheme: r } = e
              return {
                tab: {
                  borderTopRadius: 'md',
                  border: '1px solid',
                  borderColor: 'transparent',
                  mb: '-1px',
                  [tR.variable]: 'transparent',
                  _selected: {
                    [tP.variable]: `colors.${r}.600`,
                    [tR.variable]: 'colors.white',
                    _dark: {
                      [tP.variable]: `colors.${r}.300`,
                      [tR.variable]: 'colors.gray.800',
                    },
                    borderColor: 'inherit',
                    borderBottomColor: tR.reference,
                  },
                  color: tP.reference,
                },
                tablist: {
                  mb: '-1px',
                  borderBottom: '1px solid',
                  borderColor: 'inherit',
                },
              }
            }),
            'enclosed-colored': tL((e) => {
              let { colorScheme: r } = e
              return {
                tab: {
                  border: '1px solid',
                  borderColor: 'inherit',
                  [tB.variable]: 'colors.gray.50',
                  _dark: { [tB.variable]: 'colors.whiteAlpha.50' },
                  mb: '-1px',
                  _notLast: { marginEnd: '-1px' },
                  _selected: {
                    [tB.variable]: 'colors.white',
                    [tP.variable]: `colors.${r}.600`,
                    _dark: {
                      [tB.variable]: 'colors.gray.800',
                      [tP.variable]: `colors.${r}.300`,
                    },
                    borderColor: 'inherit',
                    borderTopColor: 'currentColor',
                    borderBottomColor: 'transparent',
                  },
                  color: tP.reference,
                  bg: tB.reference,
                },
                tablist: {
                  mb: '-1px',
                  borderBottom: '1px solid',
                  borderColor: 'inherit',
                },
              }
            }),
            'soft-rounded': tL((e) => {
              let { colorScheme: r, theme: n } = e
              return {
                tab: {
                  borderRadius: 'full',
                  fontWeight: 'semibold',
                  color: 'gray.600',
                  _selected: {
                    color: tw(n, `${r}.700`),
                    bg: tw(n, `${r}.100`),
                  },
                },
              }
            }),
            'solid-rounded': tL((e) => {
              let { colorScheme: r } = e
              return {
                tab: {
                  borderRadius: 'full',
                  fontWeight: 'semibold',
                  [tP.variable]: 'colors.gray.600',
                  _dark: { [tP.variable]: 'inherit' },
                  _selected: {
                    [tP.variable]: 'colors.white',
                    [tB.variable]: `colors.${r}.600`,
                    _dark: {
                      [tP.variable]: 'colors.gray.800',
                      [tB.variable]: `colors.${r}.300`,
                    },
                  },
                  color: tP.reference,
                  bg: tB.reference,
                },
              }
            }),
            unstyled: tL({}),
          },
          defaultProps: { size: 'md', variant: 'line', colorScheme: 'blue' },
        }),
        tO = (0, G.k0)({
          px: 1,
          textTransform: 'uppercase',
          fontSize: 'xs',
          borderRadius: 'sm',
          fontWeight: 'bold',
        }),
        tV = (0, G.gJ)('badge-bg'),
        tW = (0, G.gJ)('badge-color'),
        tN = (0, G.k0)((e) => {
          let { colorScheme: r, theme: n } = e,
            o = tj(`${r}.500`, 0.6)(n)
          return {
            [tV.variable]: `colors.${r}.500`,
            [tW.variable]: 'colors.white',
            _dark: { [tV.variable]: o, [tW.variable]: 'colors.whiteAlpha.800' },
            bg: tV.reference,
            color: tW.reference,
          }
        }),
        tH = (0, G.k0)((e) => {
          let { colorScheme: r, theme: n } = e,
            o = tj(`${r}.200`, 0.16)(n)
          return {
            [tV.variable]: `colors.${r}.100`,
            [tW.variable]: `colors.${r}.800`,
            _dark: { [tV.variable]: o, [tW.variable]: `colors.${r}.200` },
            bg: tV.reference,
            color: tW.reference,
          }
        }),
        tU = (0, G.k0)((e) => {
          let { colorScheme: r, theme: n } = e,
            o = tj(`${r}.200`, 0.8)(n)
          return {
            [tW.variable]: `colors.${r}.500`,
            _dark: { [tW.variable]: o },
            color: tW.reference,
            boxShadow: `inset 0 0 0px 1px ${tW.reference}`,
          }
        }),
        tq = (0, G.fj)({
          baseStyle: tO,
          variants: { solid: tN, subtle: tH, outline: tU },
          defaultProps: { variant: 'subtle', colorScheme: 'gray' },
        }),
        { defineMultiStyleConfig: tY, definePartsStyle: tG } = (0, G.D)(
          eO.keys
        ),
        tX = tG({
          container: (0, G.k0)({
            fontWeight: 'medium',
            lineHeight: 1.2,
            outline: 0,
            borderRadius: 'md',
            _focusVisible: { boxShadow: 'outline' },
          }),
          label: (0, G.k0)({ lineHeight: 1.2, overflow: 'visible' }),
          closeButton: (0, G.k0)({
            fontSize: 'lg',
            w: '5',
            h: '5',
            transitionProperty: 'common',
            transitionDuration: 'normal',
            borderRadius: 'full',
            marginStart: '1.5',
            marginEnd: '-1',
            opacity: 0.5,
            _disabled: { opacity: 0.4 },
            _focusVisible: { boxShadow: 'outline', bg: 'rgba(0, 0, 0, 0.14)' },
            _hover: { opacity: 0.8 },
            _active: { opacity: 1 },
          }),
        }),
        tZ = {
          sm: tG({
            container: { minH: '5', minW: '5', fontSize: 'xs', px: '2' },
            closeButton: { marginEnd: '-2px', marginStart: '0.35rem' },
          }),
          md: tG({
            container: { minH: '6', minW: '6', fontSize: 'sm', px: '2' },
          }),
          lg: tG({
            container: { minH: '8', minW: '8', fontSize: 'md', px: '3' },
          }),
        },
        tK = tY({
          variants: {
            subtle: tG((e) => {
              var r
              return {
                container: null == (r = tq.variants) ? void 0 : r.subtle(e),
              }
            }),
            solid: tG((e) => {
              var r
              return {
                container: null == (r = tq.variants) ? void 0 : r.solid(e),
              }
            }),
            outline: tG((e) => {
              var r
              return {
                container: null == (r = tq.variants) ? void 0 : r.outline(e),
              }
            }),
          },
          baseStyle: tX,
          sizes: tZ,
          defaultProps: { size: 'md', variant: 'subtle', colorScheme: 'gray' },
        }),
        { definePartsStyle: tJ, defineMultiStyleConfig: tQ } = (0, G.D)(
          eE.keys
        ),
        t0 = tJ({
          field: {
            width: '100%',
            minWidth: 0,
            outline: 0,
            position: 'relative',
            appearance: 'none',
            transitionProperty: 'common',
            transitionDuration: 'normal',
            _disabled: { opacity: 0.4, cursor: 'not-allowed' },
          },
        }),
        t1 = {
          lg: (0, G.k0)({
            fontSize: 'lg',
            px: '4',
            h: '12',
            borderRadius: 'md',
          }),
          md: (0, G.k0)({
            fontSize: 'md',
            px: '4',
            h: '10',
            borderRadius: 'md',
          }),
          sm: (0, G.k0)({
            fontSize: 'sm',
            px: '3',
            h: '8',
            borderRadius: 'sm',
          }),
          xs: (0, G.k0)({
            fontSize: 'xs',
            px: '2',
            h: '6',
            borderRadius: 'sm',
          }),
        }
      function t2(e) {
        let { focusBorderColor: r, errorBorderColor: n } = e
        return {
          focusBorderColor: r || tt('blue.500', 'blue.300')(e),
          errorBorderColor: n || tt('red.500', 'red.300')(e),
        }
      }
      var t5 = tQ({
          baseStyle: t0,
          sizes: {
            lg: tJ({ field: t1.lg, addon: t1.lg }),
            md: tJ({ field: t1.md, addon: t1.md }),
            sm: tJ({ field: t1.sm, addon: t1.sm }),
            xs: tJ({ field: t1.xs, addon: t1.xs }),
          },
          variants: {
            outline: tJ((e) => {
              let { theme: r } = e,
                { focusBorderColor: n, errorBorderColor: o } = t2(e)
              return {
                field: {
                  border: '1px solid',
                  borderColor: 'inherit',
                  bg: 'inherit',
                  _hover: { borderColor: tt('gray.300', 'whiteAlpha.400')(e) },
                  _readOnly: {
                    boxShadow: 'none !important',
                    userSelect: 'all',
                  },
                  _invalid: {
                    borderColor: tw(r, o),
                    boxShadow: `0 0 0 1px ${tw(r, o)}`,
                  },
                  _focusVisible: {
                    zIndex: 1,
                    borderColor: tw(r, n),
                    boxShadow: `0 0 0 1px ${tw(r, n)}`,
                  },
                },
                addon: {
                  border: '1px solid',
                  borderColor: tt('inherit', 'whiteAlpha.50')(e),
                  bg: tt('gray.100', 'whiteAlpha.300')(e),
                },
              }
            }),
            filled: tJ((e) => {
              let { theme: r } = e,
                { focusBorderColor: n, errorBorderColor: o } = t2(e)
              return {
                field: {
                  border: '2px solid',
                  borderColor: 'transparent',
                  bg: tt('gray.100', 'whiteAlpha.50')(e),
                  _hover: { bg: tt('gray.200', 'whiteAlpha.100')(e) },
                  _readOnly: {
                    boxShadow: 'none !important',
                    userSelect: 'all',
                  },
                  _invalid: { borderColor: tw(r, o) },
                  _focusVisible: { bg: 'transparent', borderColor: tw(r, n) },
                },
                addon: {
                  border: '2px solid',
                  borderColor: 'transparent',
                  bg: tt('gray.100', 'whiteAlpha.50')(e),
                },
              }
            }),
            flushed: tJ((e) => {
              let { theme: r } = e,
                { focusBorderColor: n, errorBorderColor: o } = t2(e)
              return {
                field: {
                  borderBottom: '1px solid',
                  borderColor: 'inherit',
                  borderRadius: '0',
                  px: '0',
                  bg: 'transparent',
                  _readOnly: {
                    boxShadow: 'none !important',
                    userSelect: 'all',
                  },
                  _invalid: {
                    borderColor: tw(r, o),
                    boxShadow: `0px 1px 0px 0px ${tw(r, o)}`,
                  },
                  _focusVisible: {
                    borderColor: tw(r, n),
                    boxShadow: `0px 1px 0px 0px ${tw(r, n)}`,
                  },
                },
                addon: {
                  borderBottom: '2px solid',
                  borderColor: 'inherit',
                  borderRadius: '0',
                  px: '0',
                  bg: 'transparent',
                },
              }
            }),
            unstyled: tJ({
              field: { bg: 'transparent', px: '0', height: 'auto' },
              addon: { bg: 'transparent', px: '0', height: 'auto' },
            }),
          },
          defaultProps: { size: 'md', variant: 'outline' },
        }),
        t3 = (0, G.k0)({
          ...(null == (s = t5.baseStyle) ? void 0 : s.field),
          paddingY: '2',
          minHeight: '20',
          lineHeight: 'short',
          verticalAlign: 'top',
        }),
        t4 = {
          outline: (0, G.k0)((e) => {
            var r, n
            return null !=
              (n = null == (r = t5.variants) ? void 0 : r.outline(e).field)
              ? n
              : {}
          }),
          flushed: (0, G.k0)((e) => {
            var r, n
            return null !=
              (n = null == (r = t5.variants) ? void 0 : r.flushed(e).field)
              ? n
              : {}
          }),
          filled: (0, G.k0)((e) => {
            var r, n
            return null !=
              (n = null == (r = t5.variants) ? void 0 : r.filled(e).field)
              ? n
              : {}
          }),
          unstyled:
            null != (u = null == (l = t5.variants) ? void 0 : l.unstyled.field)
              ? u
              : {},
        },
        t9 = {
          xs:
            null != (d = null == (c = t5.sizes) ? void 0 : c.xs.field) ? d : {},
          sm:
            null != (h = null == (p = t5.sizes) ? void 0 : p.sm.field) ? h : {},
          md:
            null != (m = null == (f = t5.sizes) ? void 0 : f.md.field) ? m : {},
          lg:
            null != (b = null == (g = t5.sizes) ? void 0 : g.lg.field) ? b : {},
        },
        t6 = (0, G.fj)({
          baseStyle: t3,
          sizes: t9,
          variants: t4,
          defaultProps: { size: 'md', variant: 'outline' },
        }),
        t8 = eN('tooltip-bg'),
        t7 = eN('tooltip-fg'),
        re = eN('popper-arrow-bg'),
        rt = (0, G.k0)({
          bg: t8.reference,
          color: t7.reference,
          [t8.variable]: 'colors.gray.700',
          [t7.variable]: 'colors.whiteAlpha.900',
          _dark: {
            [t8.variable]: 'colors.gray.300',
            [t7.variable]: 'colors.gray.900',
          },
          [re.variable]: t8.reference,
          px: '2',
          py: '0.5',
          borderRadius: 'sm',
          fontWeight: 'medium',
          fontSize: 'sm',
          boxShadow: 'md',
          maxW: 'xs',
          zIndex: 'tooltip',
        }),
        rr = (0, G.fj)({ baseStyle: rt }),
        { defineMultiStyleConfig: rn, definePartsStyle: ro } = (0, G.D)(
          eR.keys
        ),
        ri = (0, G.k0)((e) => {
          let {
              colorScheme: r,
              theme: n,
              isIndeterminate: o,
              hasStripe: i,
            } = e,
            a = tt(tT(), tT('1rem', 'rgba(0,0,0,0.1)'))(e),
            s = tt(`${r}.500`, `${r}.200`)(e),
            l = `linear-gradient(
    to right,
    transparent 0%,
    ${tw(n, s)} 50%,
    transparent 100%
  )`
          return { ...(!o && i && a), ...(o ? { bgImage: l } : { bgColor: s }) }
        }),
        ra = (0, G.k0)({
          lineHeight: '1',
          fontSize: '0.25em',
          fontWeight: 'bold',
          color: 'white',
        }),
        rs = (0, G.k0)((e) => ({ bg: tt('gray.100', 'whiteAlpha.300')(e) })),
        rl = (0, G.k0)((e) => ({
          transitionProperty: 'common',
          transitionDuration: 'slow',
          ...ri(e),
        })),
        ru = ro((e) => ({ label: ra, filledTrack: rl(e), track: rs(e) })),
        rc = rn({
          sizes: {
            xs: ro({ track: { h: '1' } }),
            sm: ro({ track: { h: '2' } }),
            md: ro({ track: { h: '3' } }),
            lg: ro({ track: { h: '4' } }),
          },
          baseStyle: ru,
          defaultProps: { size: 'md', colorScheme: 'blue' },
        }),
        rd = (e) => 'function' == typeof e
      function rp(e, ...r) {
        return rd(e) ? e(...r) : e
      }
      var { definePartsStyle: rh, defineMultiStyleConfig: rf } = (0, G.D)(
          ek.keys
        ),
        rm = (0, G.gJ)('checkbox-size'),
        rg = (0, G.k0)((e) => {
          let { colorScheme: r } = e
          return {
            w: rm.reference,
            h: rm.reference,
            transitionProperty: 'box-shadow',
            transitionDuration: 'normal',
            border: '2px solid',
            borderRadius: 'sm',
            borderColor: 'inherit',
            color: 'white',
            _checked: {
              bg: tt(`${r}.500`, `${r}.200`)(e),
              borderColor: tt(`${r}.500`, `${r}.200`)(e),
              color: tt('white', 'gray.900')(e),
              _hover: {
                bg: tt(`${r}.600`, `${r}.300`)(e),
                borderColor: tt(`${r}.600`, `${r}.300`)(e),
              },
              _disabled: {
                borderColor: tt('gray.200', 'transparent')(e),
                bg: tt('gray.200', 'whiteAlpha.300')(e),
                color: tt('gray.500', 'whiteAlpha.500')(e),
              },
            },
            _indeterminate: {
              bg: tt(`${r}.500`, `${r}.200`)(e),
              borderColor: tt(`${r}.500`, `${r}.200`)(e),
              color: tt('white', 'gray.900')(e),
            },
            _disabled: {
              bg: tt('gray.100', 'whiteAlpha.100')(e),
              borderColor: tt('gray.100', 'transparent')(e),
            },
            _focusVisible: { boxShadow: 'outline' },
            _invalid: { borderColor: tt('red.500', 'red.300')(e) },
          }
        }),
        rb = (0, G.k0)({ _disabled: { cursor: 'not-allowed' } }),
        rv = (0, G.k0)({ userSelect: 'none', _disabled: { opacity: 0.4 } }),
        ry = (0, G.k0)({
          transitionProperty: 'transform',
          transitionDuration: 'normal',
        }),
        rx = rf({
          baseStyle: rh((e) => ({
            icon: ry,
            container: rb,
            control: rp(rg, e),
            label: rv,
          })),
          sizes: {
            sm: rh({
              control: { [rm.variable]: 'sizes.3' },
              label: { fontSize: 'sm' },
              icon: { fontSize: '3xs' },
            }),
            md: rh({
              control: { [rm.variable]: 'sizes.4' },
              label: { fontSize: 'md' },
              icon: { fontSize: '2xs' },
            }),
            lg: rh({
              control: { [rm.variable]: 'sizes.5' },
              label: { fontSize: 'lg' },
              icon: { fontSize: '2xs' },
            }),
          },
          defaultProps: { size: 'md', colorScheme: 'blue' },
        }),
        { defineMultiStyleConfig: rk, definePartsStyle: rS } = (0, G.D)(
          ez.keys
        ),
        rw = (0, G.k0)((e) => {
          var r
          let n = null == (r = rp(rx.baseStyle, e)) ? void 0 : r.control
          return {
            ...n,
            borderRadius: 'full',
            _checked: {
              ...(null == n ? void 0 : n._checked),
              _before: {
                content: '""',
                display: 'inline-block',
                pos: 'relative',
                w: '50%',
                h: '50%',
                borderRadius: '50%',
                bg: 'currentColor',
              },
            },
          }
        }),
        rC = rk({
          baseStyle: rS((e) => {
            var r, n
            return {
              label: null == (r = rx.baseStyle) ? void 0 : r.call(rx, e).label,
              container:
                null == (n = rx.baseStyle) ? void 0 : n.call(rx, e).container,
              control: rw(e),
            }
          }),
          sizes: {
            md: rS({ control: { w: '4', h: '4' }, label: { fontSize: 'md' } }),
            lg: rS({ control: { w: '5', h: '5' }, label: { fontSize: 'lg' } }),
            sm: rS({
              control: { width: '3', height: '3' },
              label: { fontSize: 'sm' },
            }),
          },
          defaultProps: { size: 'md', colorScheme: 'blue' },
        }),
        { defineMultiStyleConfig: r_, definePartsStyle: rE } = (0, G.D)(
          eL.keys
        ),
        rj = (0, G.gJ)('select-bg'),
        rT = rE({
          field: (0, G.k0)({
            ...(null == (v = t5.baseStyle) ? void 0 : v.field),
            appearance: 'none',
            paddingBottom: '1px',
            lineHeight: 'normal',
            bg: rj.reference,
            [rj.variable]: 'colors.white',
            _dark: { [rj.variable]: 'colors.gray.700' },
            '> option, > optgroup': { bg: rj.reference },
          }),
          icon: (0, G.k0)({
            width: '6',
            height: '100%',
            insetEnd: '2',
            position: 'relative',
            color: 'currentColor',
            fontSize: 'xl',
            _disabled: { opacity: 0.5 },
          }),
        }),
        rA = (0, G.k0)({ paddingInlineEnd: '8' }),
        rP = r_({
          baseStyle: rT,
          sizes: {
            lg: {
              ...(null == (y = t5.sizes) ? void 0 : y.lg),
              field: {
                ...(null == (x = t5.sizes) ? void 0 : x.lg.field),
                ...rA,
              },
            },
            md: {
              ...(null == (k = t5.sizes) ? void 0 : k.md),
              field: {
                ...(null == (S = t5.sizes) ? void 0 : S.md.field),
                ...rA,
              },
            },
            sm: {
              ...(null == (w = t5.sizes) ? void 0 : w.sm),
              field: {
                ...(null == (C = t5.sizes) ? void 0 : C.sm.field),
                ...rA,
              },
            },
            xs: {
              ...(null == (_ = t5.sizes) ? void 0 : _.xs),
              field: {
                ...(null == (E = t5.sizes) ? void 0 : E.xs.field),
                ...rA,
              },
              icon: { insetEnd: '1' },
            },
          },
          variants: t5.variants,
          defaultProps: t5.defaultProps,
        }),
        rB = (0, G.gJ)('skeleton-start-color'),
        rR = (0, G.gJ)('skeleton-end-color'),
        rz = (0, G.k0)({
          [rB.variable]: 'colors.gray.100',
          [rR.variable]: 'colors.gray.400',
          _dark: {
            [rB.variable]: 'colors.gray.800',
            [rR.variable]: 'colors.gray.600',
          },
          background: rB.reference,
          borderColor: rR.reference,
          opacity: 0.7,
          borderRadius: 'sm',
        }),
        rL = (0, G.fj)({ baseStyle: rz }),
        rF = (0, G.gJ)('skip-link-bg'),
        rM = (0, G.k0)({
          borderRadius: 'md',
          fontWeight: 'semibold',
          _focusVisible: {
            boxShadow: 'outline',
            padding: '4',
            position: 'fixed',
            top: '6',
            insetStart: '6',
            [rF.variable]: 'colors.white',
            _dark: { [rF.variable]: 'colors.gray.700' },
            bg: rF.reference,
          },
        }),
        r$ = (0, G.fj)({ baseStyle: rM }),
        { defineMultiStyleConfig: rD, definePartsStyle: rI } = (0, G.D)(
          eF.keys
        ),
        rO = (0, G.gJ)('slider-thumb-size'),
        rV = (0, G.gJ)('slider-track-size'),
        rW = (0, G.gJ)('slider-bg'),
        rN = (0, G.k0)((e) => {
          let { orientation: r } = e
          return {
            display: 'inline-block',
            position: 'relative',
            cursor: 'pointer',
            _disabled: {
              opacity: 0.6,
              cursor: 'default',
              pointerEvents: 'none',
            },
            ...tr({
              orientation: r,
              vertical: { h: '100%' },
              horizontal: { w: '100%' },
            }),
          }
        }),
        rH = (0, G.k0)((e) => {
          let r = tr({
            orientation: e.orientation,
            horizontal: { h: rV.reference },
            vertical: { w: rV.reference },
          })
          return {
            ...r,
            overflow: 'hidden',
            borderRadius: 'sm',
            [rW.variable]: 'colors.gray.200',
            _dark: { [rW.variable]: 'colors.whiteAlpha.200' },
            _disabled: {
              [rW.variable]: 'colors.gray.300',
              _dark: { [rW.variable]: 'colors.whiteAlpha.300' },
            },
            bg: rW.reference,
          }
        }),
        rU = (0, G.k0)((e) => {
          let { orientation: r } = e,
            n = tr({
              orientation: r,
              vertical: {
                left: '50%',
                transform: 'translateX(-50%)',
                _active: { transform: 'translateX(-50%) scale(1.15)' },
              },
              horizontal: {
                top: '50%',
                transform: 'translateY(-50%)',
                _active: { transform: 'translateY(-50%) scale(1.15)' },
              },
            })
          return {
            ...n,
            w: rO.reference,
            h: rO.reference,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            outline: 0,
            zIndex: 1,
            borderRadius: 'full',
            bg: 'white',
            boxShadow: 'base',
            border: '1px solid',
            borderColor: 'transparent',
            transitionProperty: 'transform',
            transitionDuration: 'normal',
            _focusVisible: { boxShadow: 'outline' },
            _disabled: { bg: 'gray.300' },
          }
        }),
        rq = (0, G.k0)((e) => {
          let { colorScheme: r } = e
          return {
            width: 'inherit',
            height: 'inherit',
            [rW.variable]: `colors.${r}.500`,
            _dark: { [rW.variable]: `colors.${r}.200` },
            bg: rW.reference,
          }
        }),
        rY = rD({
          baseStyle: rI((e) => ({
            container: rN(e),
            track: rH(e),
            thumb: rU(e),
            filledTrack: rq(e),
          })),
          sizes: {
            lg: rI({
              container: { [rO.variable]: 'sizes.4', [rV.variable]: 'sizes.1' },
            }),
            md: rI({
              container: {
                [rO.variable]: 'sizes.3.5',
                [rV.variable]: 'sizes.1',
              },
            }),
            sm: rI({
              container: {
                [rO.variable]: 'sizes.2.5',
                [rV.variable]: 'sizes.0.5',
              },
            }),
          },
          defaultProps: { size: 'md', colorScheme: 'blue' },
        }),
        rG = eN('spinner-size'),
        rX = (0, G.k0)({ width: [rG.reference], height: [rG.reference] }),
        rZ = {
          xs: (0, G.k0)({ [rG.variable]: 'sizes.3' }),
          sm: (0, G.k0)({ [rG.variable]: 'sizes.4' }),
          md: (0, G.k0)({ [rG.variable]: 'sizes.6' }),
          lg: (0, G.k0)({ [rG.variable]: 'sizes.8' }),
          xl: (0, G.k0)({ [rG.variable]: 'sizes.12' }),
        },
        rK = (0, G.fj)({
          baseStyle: rX,
          sizes: rZ,
          defaultProps: { size: 'md' },
        }),
        { defineMultiStyleConfig: rJ, definePartsStyle: rQ } = (0, G.D)(
          eM.keys
        ),
        r0 = rJ({
          baseStyle: rQ({
            container: {},
            label: (0, G.k0)({ fontWeight: 'medium' }),
            helpText: (0, G.k0)({ opacity: 0.8, marginBottom: '2' }),
            number: (0, G.k0)({
              verticalAlign: 'baseline',
              fontWeight: 'semibold',
            }),
            icon: (0, G.k0)({
              marginEnd: 1,
              w: '3.5',
              h: '3.5',
              verticalAlign: 'middle',
            }),
          }),
          sizes: {
            md: rQ({
              label: { fontSize: 'sm' },
              helpText: { fontSize: 'sm' },
              number: { fontSize: '2xl' },
            }),
          },
          defaultProps: { size: 'md' },
        }),
        r1 = (0, G.gJ)('kbd-bg'),
        r2 = (0, G.k0)({
          [r1.variable]: 'colors.gray.100',
          _dark: { [r1.variable]: 'colors.whiteAlpha.100' },
          bg: r1.reference,
          borderRadius: 'md',
          borderWidth: '1px',
          borderBottomWidth: '3px',
          fontSize: '0.8em',
          fontWeight: 'bold',
          lineHeight: 'normal',
          px: '0.4em',
          whiteSpace: 'nowrap',
        }),
        r5 = (0, G.fj)({ baseStyle: r2 }),
        r3 = (0, G.k0)({
          transitionProperty: 'common',
          transitionDuration: 'fast',
          transitionTimingFunction: 'ease-out',
          cursor: 'pointer',
          textDecoration: 'none',
          outline: 'none',
          color: 'inherit',
          _hover: { textDecoration: 'underline' },
          _focusVisible: { boxShadow: 'outline' },
        }),
        r4 = (0, G.fj)({ baseStyle: r3 }),
        { defineMultiStyleConfig: r9, definePartsStyle: r6 } = (0, G.D)(
          ej.keys
        ),
        r8 = r9({
          baseStyle: r6({
            icon: (0, G.k0)({
              marginEnd: '2',
              display: 'inline',
              verticalAlign: 'text-bottom',
            }),
          }),
        }),
        { defineMultiStyleConfig: r7, definePartsStyle: ne } = (0, G.D)(
          eT.keys
        ),
        nt = (0, G.gJ)('menu-bg'),
        nr = (0, G.gJ)('menu-shadow'),
        nn = (0, G.k0)({
          [nt.variable]: '#fff',
          [nr.variable]: 'shadows.sm',
          _dark: {
            [nt.variable]: 'colors.gray.700',
            [nr.variable]: 'shadows.dark-lg',
          },
          color: 'inherit',
          minW: '3xs',
          py: '2',
          zIndex: 1,
          borderRadius: 'md',
          borderWidth: '1px',
          bg: nt.reference,
          boxShadow: nr.reference,
        }),
        no = (0, G.k0)({
          py: '1.5',
          px: '3',
          transitionProperty: 'background',
          transitionDuration: 'ultra-fast',
          transitionTimingFunction: 'ease-in',
          _focus: {
            [nt.variable]: 'colors.gray.100',
            _dark: { [nt.variable]: 'colors.whiteAlpha.100' },
          },
          _active: {
            [nt.variable]: 'colors.gray.200',
            _dark: { [nt.variable]: 'colors.whiteAlpha.200' },
          },
          _expanded: {
            [nt.variable]: 'colors.gray.100',
            _dark: { [nt.variable]: 'colors.whiteAlpha.100' },
          },
          _disabled: { opacity: 0.4, cursor: 'not-allowed' },
          bg: nt.reference,
        }),
        ni = (0, G.k0)({
          mx: 4,
          my: 2,
          fontWeight: 'semibold',
          fontSize: 'sm',
        }),
        na = (0, G.k0)({ opacity: 0.6 }),
        ns = (0, G.k0)({
          border: 0,
          borderBottom: '1px solid',
          borderColor: 'inherit',
          my: '2',
          opacity: 0.6,
        }),
        nl = r7({
          baseStyle: ne({
            button: (0, G.k0)({
              transitionProperty: 'common',
              transitionDuration: 'normal',
            }),
            list: nn,
            item: no,
            groupTitle: ni,
            command: na,
            divider: ns,
          }),
        }),
        { defineMultiStyleConfig: nu, definePartsStyle: nc } = (0, G.D)(
          eA.keys
        ),
        nd = (0, G.k0)({ bg: 'blackAlpha.600', zIndex: 'modal' }),
        np = (0, G.k0)((e) => {
          let { isCentered: r, scrollBehavior: n } = e
          return {
            display: 'flex',
            zIndex: 'modal',
            justifyContent: 'center',
            alignItems: r ? 'center' : 'flex-start',
            overflow: 'inside' === n ? 'hidden' : 'auto',
            overscrollBehaviorY: 'none',
          }
        }),
        nh = (0, G.k0)((e) => {
          let { scrollBehavior: r } = e
          return {
            borderRadius: 'md',
            bg: tt('white', 'gray.700')(e),
            color: 'inherit',
            my: '16',
            zIndex: 'modal',
            maxH: 'inside' === r ? 'calc(100% - 7.5rem)' : void 0,
            boxShadow: tt('lg', 'dark-lg')(e),
          }
        }),
        nf = (0, G.k0)({
          px: '6',
          py: '4',
          fontSize: 'xl',
          fontWeight: 'semibold',
        }),
        nm = (0, G.k0)({ position: 'absolute', top: '2', insetEnd: '3' }),
        ng = (0, G.k0)((e) => {
          let { scrollBehavior: r } = e
          return {
            px: '6',
            py: '2',
            flex: '1',
            overflow: 'inside' === r ? 'auto' : void 0,
          }
        }),
        nb = (0, G.k0)({ px: '6', py: '4' })
      function nv(e) {
        return 'full' === e
          ? nc({
              dialog: {
                maxW: '100vw',
                minH: '$100vh',
                my: '0',
                borderRadius: '0',
              },
            })
          : nc({ dialog: { maxW: e } })
      }
      var ny = nu({
          baseStyle: nc((e) => ({
            overlay: nd,
            dialogContainer: rp(np, e),
            dialog: rp(nh, e),
            header: nf,
            closeButton: nm,
            body: rp(ng, e),
            footer: nb,
          })),
          sizes: {
            xs: nv('xs'),
            sm: nv('sm'),
            md: nv('md'),
            lg: nv('lg'),
            xl: nv('xl'),
            '2xl': nv('2xl'),
            '3xl': nv('3xl'),
            '4xl': nv('4xl'),
            '5xl': nv('5xl'),
            '6xl': nv('6xl'),
            full: nv('full'),
          },
          defaultProps: { size: 'md' },
        }),
        { defineMultiStyleConfig: nx, definePartsStyle: nk } = (0, G.D)(
          eP.keys
        ),
        nS = eN('number-input-stepper-width'),
        nw = eN('number-input-input-padding'),
        nC = eJ(nS).add('0.5rem').toString(),
        n_ = eN('number-input-bg'),
        nE = eN('number-input-color'),
        nj = eN('number-input-border-color'),
        nT = (0, G.k0)({ [nS.variable]: 'sizes.6', [nw.variable]: nC }),
        nA = (0, G.k0)((e) => {
          var r, n
          return null !=
            (n = null == (r = rp(t5.baseStyle, e)) ? void 0 : r.field)
            ? n
            : {}
        }),
        nP = (0, G.k0)({ width: nS.reference }),
        nB = (0, G.k0)({
          borderStart: '1px solid',
          borderStartColor: nj.reference,
          color: nE.reference,
          bg: n_.reference,
          [nE.variable]: 'colors.chakra-body-text',
          [nj.variable]: 'colors.chakra-border-color',
          _dark: {
            [nE.variable]: 'colors.whiteAlpha.800',
            [nj.variable]: 'colors.whiteAlpha.300',
          },
          _active: {
            [n_.variable]: 'colors.gray.200',
            _dark: { [n_.variable]: 'colors.whiteAlpha.300' },
          },
          _disabled: { opacity: 0.4, cursor: 'not-allowed' },
        })
      function nR(e) {
        var r, n, o
        let i = null == (r = t5.sizes) ? void 0 : r[e],
          a = { lg: 'md', md: 'md', sm: 'sm', xs: 'sm' },
          s =
            null != (o = null == (n = i.field) ? void 0 : n.fontSize)
              ? o
              : 'md',
          l = ep.fontSizes[s]
        return nk({
          field: {
            ...i.field,
            paddingInlineEnd: nw.reference,
            verticalAlign: 'top',
          },
          stepper: {
            fontSize: eJ(l).multiply(0.75).toString(),
            _first: { borderTopEndRadius: a[e] },
            _last: {
              borderBottomEndRadius: a[e],
              mt: '-1px',
              borderTopWidth: 1,
            },
          },
        })
      }
      var nz = nx({
          baseStyle: nk((e) => {
            var r
            return {
              root: nT,
              field: null != (r = rp(nA, e)) ? r : {},
              stepperGroup: nP,
              stepper: nB,
            }
          }),
          sizes: { xs: nR('xs'), sm: nR('sm'), md: nR('md'), lg: nR('lg') },
          variants: t5.variants,
          defaultProps: t5.defaultProps,
        }),
        nL = (0, G.k0)({
          ...(null == (j = t5.baseStyle) ? void 0 : j.field),
          textAlign: 'center',
        }),
        nF = {
          lg: (0, G.k0)({ fontSize: 'lg', w: 12, h: 12, borderRadius: 'md' }),
          md: (0, G.k0)({ fontSize: 'md', w: 10, h: 10, borderRadius: 'md' }),
          sm: (0, G.k0)({ fontSize: 'sm', w: 8, h: 8, borderRadius: 'sm' }),
          xs: (0, G.k0)({ fontSize: 'xs', w: 6, h: 6, borderRadius: 'sm' }),
        },
        nM = {
          outline: (0, G.k0)((e) => {
            var r, n, o
            return null !=
              (o =
                null ==
                (n = rp(null == (r = t5.variants) ? void 0 : r.outline, e))
                  ? void 0
                  : n.field)
              ? o
              : {}
          }),
          flushed: (0, G.k0)((e) => {
            var r, n, o
            return null !=
              (o =
                null ==
                (n = rp(null == (r = t5.variants) ? void 0 : r.flushed, e))
                  ? void 0
                  : n.field)
              ? o
              : {}
          }),
          filled: (0, G.k0)((e) => {
            var r, n, o
            return null !=
              (o =
                null ==
                (n = rp(null == (r = t5.variants) ? void 0 : r.filled, e))
                  ? void 0
                  : n.field)
              ? o
              : {}
          }),
          unstyled:
            null != (A = null == (T = t5.variants) ? void 0 : T.unstyled.field)
              ? A
              : {},
        },
        n$ = (0, G.fj)({
          baseStyle: nL,
          sizes: nF,
          variants: nM,
          defaultProps: t5.defaultProps,
        }),
        { defineMultiStyleConfig: nD, definePartsStyle: nI } = (0, G.D)(
          eB.keys
        ),
        nO = eN('popper-bg'),
        nV = eN('popper-arrow-bg'),
        nW = eN('popper-arrow-shadow-color'),
        nN = nD({
          baseStyle: nI({
            popper: (0, G.k0)({ zIndex: 10 }),
            content: (0, G.k0)({
              [nO.variable]: 'colors.white',
              bg: nO.reference,
              [nV.variable]: nO.reference,
              [nW.variable]: 'colors.gray.200',
              _dark: {
                [nO.variable]: 'colors.gray.700',
                [nW.variable]: 'colors.whiteAlpha.300',
              },
              width: 'xs',
              border: '1px solid',
              borderColor: 'inherit',
              borderRadius: 'md',
              boxShadow: 'sm',
              zIndex: 'inherit',
              _focusVisible: { outline: 0, boxShadow: 'outline' },
            }),
            header: (0, G.k0)({ px: 3, py: 2, borderBottomWidth: '1px' }),
            body: (0, G.k0)({ px: 3, py: 2 }),
            footer: (0, G.k0)({ px: 3, py: 2, borderTopWidth: '1px' }),
            closeButton: (0, G.k0)({
              position: 'absolute',
              borderRadius: 'md',
              top: 1,
              insetEnd: 2,
              padding: 2,
            }),
          }),
        }),
        { definePartsStyle: nH, defineMultiStyleConfig: nU } = (0, G.D)(
          eS.keys
        ),
        nq = (0, G.gJ)('drawer-bg'),
        nY = (0, G.gJ)('drawer-box-shadow')
      function nG(e) {
        return 'full' === e
          ? nH({ dialog: { maxW: '100vw', h: '100vh' } })
          : nH({ dialog: { maxW: e } })
      }
      var nX = (0, G.k0)({ bg: 'blackAlpha.600', zIndex: 'overlay' }),
        nZ = (0, G.k0)({
          display: 'flex',
          zIndex: 'modal',
          justifyContent: 'center',
        }),
        nK = (0, G.k0)((e) => {
          let { isFullHeight: r } = e
          return {
            ...(r && { height: '100vh' }),
            zIndex: 'modal',
            maxH: '100vh',
            color: 'inherit',
            [nq.variable]: 'colors.white',
            [nY.variable]: 'shadows.lg',
            _dark: {
              [nq.variable]: 'colors.gray.700',
              [nY.variable]: 'shadows.dark-lg',
            },
            bg: nq.reference,
            boxShadow: nY.reference,
          }
        }),
        nJ = (0, G.k0)({
          px: '6',
          py: '4',
          fontSize: 'xl',
          fontWeight: 'semibold',
        }),
        nQ = (0, G.k0)({ position: 'absolute', top: '2', insetEnd: '3' }),
        n0 = (0, G.k0)({ px: '6', py: '2', flex: '1', overflow: 'auto' }),
        n1 = (0, G.k0)({ px: '6', py: '4' }),
        n2 = nU({
          baseStyle: nH((e) => ({
            overlay: nX,
            dialogContainer: nZ,
            dialog: rp(nK, e),
            header: nJ,
            closeButton: nQ,
            body: n0,
            footer: n1,
          })),
          sizes: {
            xs: nG('xs'),
            sm: nG('md'),
            md: nG('lg'),
            lg: nG('2xl'),
            xl: nG('4xl'),
            full: nG('full'),
          },
          defaultProps: { size: 'xs' },
        }),
        { definePartsStyle: n5, defineMultiStyleConfig: n3 } = (0, G.D)(
          ew.keys
        ),
        n4 = n3({
          baseStyle: n5({
            preview: (0, G.k0)({
              borderRadius: 'md',
              py: '1',
              transitionProperty: 'common',
              transitionDuration: 'normal',
            }),
            input: (0, G.k0)({
              borderRadius: 'md',
              py: '1',
              transitionProperty: 'common',
              transitionDuration: 'normal',
              width: 'full',
              _focusVisible: { boxShadow: 'outline' },
              _placeholder: { opacity: 0.6 },
            }),
            textarea: (0, G.k0)({
              borderRadius: 'md',
              py: '1',
              transitionProperty: 'common',
              transitionDuration: 'normal',
              width: 'full',
              _focusVisible: { boxShadow: 'outline' },
              _placeholder: { opacity: 0.6 },
            }),
          }),
        }),
        { definePartsStyle: n9, defineMultiStyleConfig: n6 } = (0, G.D)(
          eC.keys
        ),
        n8 = (0, G.gJ)('form-control-color'),
        n7 = n6({
          baseStyle: n9({
            container: { width: '100%', position: 'relative' },
            requiredIndicator: (0, G.k0)({
              marginStart: '1',
              [n8.variable]: 'colors.red.500',
              _dark: { [n8.variable]: 'colors.red.300' },
              color: n8.reference,
            }),
            helperText: (0, G.k0)({
              mt: '2',
              [n8.variable]: 'colors.gray.600',
              _dark: { [n8.variable]: 'colors.whiteAlpha.600' },
              color: n8.reference,
              lineHeight: 'normal',
              fontSize: 'sm',
            }),
          }),
        }),
        { definePartsStyle: oe, defineMultiStyleConfig: ot } = (0, G.D)(
          e_.keys
        ),
        or = (0, G.gJ)('form-error-color'),
        on = ot({
          baseStyle: oe({
            text: (0, G.k0)({
              [or.variable]: 'colors.red.500',
              _dark: { [or.variable]: 'colors.red.300' },
              color: or.reference,
              mt: '2',
              fontSize: 'sm',
              lineHeight: 'normal',
            }),
            icon: (0, G.k0)({
              marginEnd: '0.5em',
              [or.variable]: 'colors.red.500',
              _dark: { [or.variable]: 'colors.red.300' },
              color: or.reference,
            }),
          }),
        }),
        oo = (0, G.k0)({
          fontSize: 'md',
          marginEnd: '3',
          mb: '2',
          fontWeight: 'medium',
          transitionProperty: 'common',
          transitionDuration: 'normal',
          opacity: 1,
          _disabled: { opacity: 0.4 },
        }),
        oi = (0, G.fj)({ baseStyle: oo }),
        oa = (0, G.k0)({ fontFamily: 'heading', fontWeight: 'bold' }),
        os = {
          '4xl': (0, G.k0)({ fontSize: ['6xl', null, '7xl'], lineHeight: 1 }),
          '3xl': (0, G.k0)({ fontSize: ['5xl', null, '6xl'], lineHeight: 1 }),
          '2xl': (0, G.k0)({
            fontSize: ['4xl', null, '5xl'],
            lineHeight: [1.2, null, 1],
          }),
          xl: (0, G.k0)({
            fontSize: ['3xl', null, '4xl'],
            lineHeight: [1.33, null, 1.2],
          }),
          lg: (0, G.k0)({
            fontSize: ['2xl', null, '3xl'],
            lineHeight: [1.33, null, 1.2],
          }),
          md: (0, G.k0)({ fontSize: 'xl', lineHeight: 1.2 }),
          sm: (0, G.k0)({ fontSize: 'md', lineHeight: 1.2 }),
          xs: (0, G.k0)({ fontSize: 'sm', lineHeight: 1.2 }),
        },
        ol = (0, G.fj)({
          baseStyle: oa,
          sizes: os,
          defaultProps: { size: 'xl' },
        }),
        { defineMultiStyleConfig: ou, definePartsStyle: oc } = (0, G.D)(
          ex.keys
        ),
        od = ou({
          baseStyle: oc({
            link: (0, G.k0)({
              transitionProperty: 'common',
              transitionDuration: 'fast',
              transitionTimingFunction: 'ease-out',
              cursor: 'pointer',
              textDecoration: 'none',
              outline: 'none',
              color: 'inherit',
              _hover: { textDecoration: 'underline' },
              _focusVisible: { boxShadow: 'outline' },
            }),
          }),
        }),
        op = (0, G.k0)({
          lineHeight: '1.2',
          borderRadius: 'md',
          fontWeight: 'semibold',
          transitionProperty: 'common',
          transitionDuration: 'normal',
          _focusVisible: { boxShadow: 'outline' },
          _disabled: { opacity: 0.4, cursor: 'not-allowed', boxShadow: 'none' },
          _hover: { _disabled: { bg: 'initial' } },
        }),
        oh = (0, G.k0)((e) => {
          let { colorScheme: r, theme: n } = e
          if ('gray' === r)
            return {
              color: tt('inherit', 'whiteAlpha.900')(e),
              _hover: { bg: tt('gray.100', 'whiteAlpha.200')(e) },
              _active: { bg: tt('gray.200', 'whiteAlpha.300')(e) },
            }
          let o = tj(`${r}.200`, 0.12)(n),
            i = tj(`${r}.200`, 0.24)(n)
          return {
            color: tt(`${r}.600`, `${r}.200`)(e),
            bg: 'transparent',
            _hover: { bg: tt(`${r}.50`, o)(e) },
            _active: { bg: tt(`${r}.100`, i)(e) },
          }
        }),
        of = (0, G.k0)((e) => {
          let { colorScheme: r } = e,
            n = tt('gray.200', 'whiteAlpha.300')(e)
          return {
            border: '1px solid',
            borderColor: 'gray' === r ? n : 'currentColor',
            '.chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)':
              { marginEnd: '-1px' },
            '.chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)':
              { marginBottom: '-1px' },
            ...rp(oh, e),
          }
        }),
        om = {
          yellow: {
            bg: 'yellow.400',
            color: 'black',
            hoverBg: 'yellow.500',
            activeBg: 'yellow.600',
          },
          cyan: {
            bg: 'cyan.400',
            color: 'black',
            hoverBg: 'cyan.500',
            activeBg: 'cyan.600',
          },
        },
        og = (0, G.k0)((e) => {
          var r
          let { colorScheme: n } = e
          if ('gray' === n) {
            let r = tt('gray.100', 'whiteAlpha.200')(e)
            return {
              bg: r,
              _hover: {
                bg: tt('gray.200', 'whiteAlpha.300')(e),
                _disabled: { bg: r },
              },
              _active: { bg: tt('gray.300', 'whiteAlpha.400')(e) },
            }
          }
          let {
              bg: o = `${n}.500`,
              color: i = 'white',
              hoverBg: a = `${n}.600`,
              activeBg: s = `${n}.700`,
            } = null != (r = om[n]) ? r : {},
            l = tt(o, `${n}.200`)(e)
          return {
            bg: l,
            color: tt(i, 'gray.800')(e),
            _hover: { bg: tt(a, `${n}.300`)(e), _disabled: { bg: l } },
            _active: { bg: tt(s, `${n}.400`)(e) },
          }
        }),
        ob = (0, G.k0)((e) => {
          let { colorScheme: r } = e
          return {
            padding: 0,
            height: 'auto',
            lineHeight: 'normal',
            verticalAlign: 'baseline',
            color: tt(`${r}.500`, `${r}.200`)(e),
            _hover: {
              textDecoration: 'underline',
              _disabled: { textDecoration: 'none' },
            },
            _active: { color: tt(`${r}.700`, `${r}.500`)(e) },
          }
        }),
        ov = (0, G.k0)({
          bg: 'none',
          color: 'inherit',
          display: 'inline',
          lineHeight: 'inherit',
          m: '0',
          p: '0',
        }),
        oy = {
          lg: (0, G.k0)({ h: '12', minW: '12', fontSize: 'lg', px: '6' }),
          md: (0, G.k0)({ h: '10', minW: '10', fontSize: 'md', px: '4' }),
          sm: (0, G.k0)({ h: '8', minW: '8', fontSize: 'sm', px: '3' }),
          xs: (0, G.k0)({ h: '6', minW: '6', fontSize: 'xs', px: '2' }),
        },
        ox = (0, G.fj)({
          baseStyle: op,
          variants: {
            ghost: oh,
            outline: of,
            solid: og,
            link: ob,
            unstyled: ov,
          },
          sizes: oy,
          defaultProps: { variant: 'solid', size: 'md', colorScheme: 'gray' },
        }),
        { definePartsStyle: ok, defineMultiStyleConfig: oS } = (0, G.D)(
          eV.keys
        ),
        ow = (0, G.gJ)('card-bg'),
        oC = (0, G.gJ)('card-padding'),
        o_ = (0, G.gJ)('card-shadow'),
        oE = (0, G.gJ)('card-radius'),
        oj = (0, G.gJ)('card-border-width', '0'),
        oT = (0, G.gJ)('card-border-color'),
        oA = ok({
          container: {
            [ow.variable]: 'colors.chakra-body-bg',
            backgroundColor: ow.reference,
            boxShadow: o_.reference,
            borderRadius: oE.reference,
            color: 'chakra-body-text',
            borderWidth: oj.reference,
            borderColor: oT.reference,
          },
          body: { padding: oC.reference, flex: '1 1 0%' },
          header: { padding: oC.reference },
          footer: { padding: oC.reference },
        }),
        oP = {
          sm: ok({
            container: {
              [oE.variable]: 'radii.base',
              [oC.variable]: 'space.3',
            },
          }),
          md: ok({
            container: { [oE.variable]: 'radii.md', [oC.variable]: 'space.5' },
          }),
          lg: ok({
            container: { [oE.variable]: 'radii.xl', [oC.variable]: 'space.7' },
          }),
        },
        oB = oS({
          baseStyle: oA,
          variants: {
            elevated: ok({
              container: {
                [o_.variable]: 'shadows.base',
                _dark: { [ow.variable]: 'colors.gray.700' },
              },
            }),
            outline: ok({
              container: {
                [oj.variable]: '1px',
                [oT.variable]: 'colors.chakra-border-color',
              },
            }),
            filled: ok({
              container: { [ow.variable]: 'colors.chakra-subtle-bg' },
            }),
            unstyled: {
              body: { [oC.variable]: 0 },
              header: { [oC.variable]: 0 },
              footer: { [oC.variable]: 0 },
            },
          },
          sizes: oP,
          defaultProps: { variant: 'elevated', size: 'md' },
        }),
        oR = eN('close-button-size'),
        oz = eN('close-button-bg'),
        oL = (0, G.k0)({
          w: [oR.reference],
          h: [oR.reference],
          borderRadius: 'md',
          transitionProperty: 'common',
          transitionDuration: 'normal',
          _disabled: { opacity: 0.4, cursor: 'not-allowed', boxShadow: 'none' },
          _hover: {
            [oz.variable]: 'colors.blackAlpha.100',
            _dark: { [oz.variable]: 'colors.whiteAlpha.100' },
          },
          _active: {
            [oz.variable]: 'colors.blackAlpha.200',
            _dark: { [oz.variable]: 'colors.whiteAlpha.200' },
          },
          _focusVisible: { boxShadow: 'outline' },
          bg: oz.reference,
        }),
        oF = {
          lg: (0, G.k0)({ [oR.variable]: 'sizes.10', fontSize: 'md' }),
          md: (0, G.k0)({ [oR.variable]: 'sizes.8', fontSize: 'xs' }),
          sm: (0, G.k0)({ [oR.variable]: 'sizes.6', fontSize: '2xs' }),
        },
        oM = (0, G.fj)({
          baseStyle: oL,
          sizes: oF,
          defaultProps: { size: 'md' },
        }),
        { variants: o$, defaultProps: oD } = tq,
        oI = (0, G.k0)({
          fontFamily: 'mono',
          fontSize: 'sm',
          px: '0.2em',
          borderRadius: 'sm',
        }),
        oO = (0, G.fj)({ baseStyle: oI, variants: o$, defaultProps: oD }),
        oV = (0, G.k0)({ w: '100%', mx: 'auto', maxW: 'prose', px: '4' }),
        oW = (0, G.fj)({ baseStyle: oV }),
        oN = (0, G.k0)({ opacity: 0.6, borderColor: 'inherit' }),
        oH = (0, G.k0)({ borderStyle: 'solid' }),
        oU = (0, G.k0)({ borderStyle: 'dashed' }),
        oq = (0, G.fj)({
          baseStyle: oN,
          variants: { solid: oH, dashed: oU },
          defaultProps: { variant: 'solid' },
        }),
        { definePartsStyle: oY, defineMultiStyleConfig: oG } = (0, G.D)(
          eb.keys
        ),
        oX = oG({
          baseStyle: oY({
            container: (0, G.k0)({
              borderTopWidth: '1px',
              borderColor: 'inherit',
              _last: { borderBottomWidth: '1px' },
            }),
            button: (0, G.k0)({
              transitionProperty: 'common',
              transitionDuration: 'normal',
              fontSize: 'md',
              _focusVisible: { boxShadow: 'outline' },
              _hover: { bg: 'blackAlpha.50' },
              _disabled: { opacity: 0.4, cursor: 'not-allowed' },
              px: '4',
              py: '2',
            }),
            panel: (0, G.k0)({ pt: '2', px: '4', pb: '5' }),
            icon: (0, G.k0)({ fontSize: '1.25em' }),
          }),
        }),
        { definePartsStyle: oZ, defineMultiStyleConfig: oK } = (0, G.D)(
          ev.keys
        ),
        oJ = (0, G.gJ)('alert-fg'),
        oQ = (0, G.gJ)('alert-bg')
      function o0(e) {
        let { theme: r, colorScheme: n } = e,
          o = tj(`${n}.200`, 0.16)(r)
        return { light: `colors.${n}.100`, dark: o }
      }
      var o1 = oK({
          baseStyle: oZ({
            container: { bg: oQ.reference, px: '4', py: '3' },
            title: { fontWeight: 'bold', lineHeight: '6', marginEnd: '2' },
            description: { lineHeight: '6' },
            icon: {
              color: oJ.reference,
              flexShrink: 0,
              marginEnd: '3',
              w: '5',
              h: '6',
            },
            spinner: {
              color: oJ.reference,
              flexShrink: 0,
              marginEnd: '3',
              w: '5',
              h: '5',
            },
          }),
          variants: {
            subtle: oZ((e) => {
              let { colorScheme: r } = e,
                n = o0(e)
              return {
                container: {
                  [oJ.variable]: `colors.${r}.500`,
                  [oQ.variable]: n.light,
                  _dark: {
                    [oJ.variable]: `colors.${r}.200`,
                    [oQ.variable]: n.dark,
                  },
                },
              }
            }),
            'left-accent': oZ((e) => {
              let { colorScheme: r } = e,
                n = o0(e)
              return {
                container: {
                  [oJ.variable]: `colors.${r}.500`,
                  [oQ.variable]: n.light,
                  _dark: {
                    [oJ.variable]: `colors.${r}.200`,
                    [oQ.variable]: n.dark,
                  },
                  paddingStart: '3',
                  borderStartWidth: '4px',
                  borderStartColor: oJ.reference,
                },
              }
            }),
            'top-accent': oZ((e) => {
              let { colorScheme: r } = e,
                n = o0(e)
              return {
                container: {
                  [oJ.variable]: `colors.${r}.500`,
                  [oQ.variable]: n.light,
                  _dark: {
                    [oJ.variable]: `colors.${r}.200`,
                    [oQ.variable]: n.dark,
                  },
                  pt: '2',
                  borderTopWidth: '4px',
                  borderTopColor: oJ.reference,
                },
              }
            }),
            solid: oZ((e) => {
              let { colorScheme: r } = e
              return {
                container: {
                  [oJ.variable]: 'colors.white',
                  [oQ.variable]: `colors.${r}.500`,
                  _dark: {
                    [oJ.variable]: 'colors.gray.900',
                    [oQ.variable]: `colors.${r}.200`,
                  },
                  color: oJ.reference,
                },
              }
            }),
          },
          defaultProps: { variant: 'subtle', colorScheme: 'blue' },
        }),
        { definePartsStyle: o2, defineMultiStyleConfig: o5 } = (0, G.D)(
          ey.keys
        ),
        o3 = (0, G.gJ)('avatar-border-color'),
        o4 = (0, G.gJ)('avatar-bg'),
        o9 = (0, G.k0)({
          borderRadius: 'full',
          border: '0.2em solid',
          [o3.variable]: 'white',
          _dark: { [o3.variable]: 'colors.gray.800' },
          borderColor: o3.reference,
        }),
        o6 = (0, G.k0)({
          [o4.variable]: 'colors.gray.200',
          _dark: { [o4.variable]: 'colors.whiteAlpha.400' },
          bgColor: o4.reference,
        }),
        o8 = (0, G.gJ)('avatar-background'),
        o7 = (0, G.k0)((e) => {
          let { name: r, theme: n } = e,
            o = r
              ? (function (e) {
                  var r
                  let n = tA()
                  return !e || tS(e)
                    ? n
                    : e.string && e.colors
                    ? (function (e, r) {
                        let n = 0
                        if (0 === e.length) return r[0]
                        for (let r = 0; r < e.length; r += 1)
                          (n = e.charCodeAt(r) + ((n << 5) - n)), (n &= n)
                        return (
                          (n = ((n % r.length) + r.length) % r.length), r[n]
                        )
                      })(e.string, e.colors)
                    : e.string && !e.colors
                    ? (function (e) {
                        let r = 0
                        if (0 === e.length) return r.toString()
                        for (let n = 0; n < e.length; n += 1)
                          (r = e.charCodeAt(n) + ((r << 5) - r)), (r &= r)
                        let n = '#'
                        for (let e = 0; e < 3; e += 1) {
                          let o = (r >> (8 * e)) & 255
                          n += `00${o.toString(16)}`.substr(-2)
                        }
                        return n
                      })(e.string)
                    : e.colors && !e.string
                    ? (r = e.colors)[Math.floor(Math.random() * r.length)]
                    : n
                })({ string: r })
              : 'colors.gray.400',
            i = tE(o)(n),
            a = 'white'
          return (
            i || (a = 'gray.800'),
            {
              bg: o8.reference,
              '&:not([data-loaded])': { [o8.variable]: o },
              color: a,
              [o3.variable]: 'colors.white',
              _dark: { [o3.variable]: 'colors.gray.800' },
              borderColor: o3.reference,
              verticalAlign: 'top',
            }
          )
        })
      function ie(e) {
        let r = '100%' !== e ? ef[e] : void 0
        return o2({
          container: {
            width: e,
            height: e,
            fontSize: `calc(${null != r ? r : e} / 2.5)`,
          },
          excessLabel: { width: e, height: e },
          label: {
            fontSize: `calc(${null != r ? r : e} / 2.5)`,
            lineHeight: '100%' !== e ? (null != r ? r : e) : void 0,
          },
        })
      }
      var it = o5({
          baseStyle: o2((e) => ({
            badge: rp(o9, e),
            excessLabel: rp(o6, e),
            container: rp(o7, e),
          })),
          sizes: {
            '2xs': ie(4),
            xs: ie(6),
            sm: ie(8),
            md: ie(12),
            lg: ie(16),
            xl: ie(24),
            '2xl': ie(32),
            full: ie('100%'),
          },
          defaultProps: { size: 'md' },
        }),
        ir = {
          colors: {
            'chakra-body-text': { _light: 'gray.800', _dark: 'whiteAlpha.900' },
            'chakra-body-bg': { _light: 'white', _dark: 'gray.800' },
            'chakra-border-color': {
              _light: 'gray.200',
              _dark: 'whiteAlpha.300',
            },
            'chakra-subtle-bg': { _light: 'gray.100', _dark: 'gray.700' },
            'chakra-placeholder-color': {
              _light: 'gray.500',
              _dark: 'whiteAlpha.400',
            },
          },
        },
        io = {
          global: {
            body: {
              fontFamily: 'body',
              color: 'chakra-body-text',
              bg: 'chakra-body-bg',
              transitionProperty: 'background-color',
              transitionDuration: 'normal',
              lineHeight: 'base',
            },
            '*::placeholder': { color: 'chakra-placeholder-color' },
            '*, *::before, &::after': {
              borderColor: 'chakra-border-color',
              wordWrap: 'break-word',
            },
          },
        },
        ii = {
          useSystemColorMode: !1,
          initialColorMode: 'light',
          cssVarPrefix: 'chakra',
        },
        ia = {
          semanticTokens: ir,
          direction: 'ltr',
          ...em,
          components: {
            Accordion: oX,
            Alert: o1,
            Avatar: it,
            Badge: tq,
            Breadcrumb: od,
            Button: ox,
            Checkbox: rx,
            CloseButton: oM,
            Code: oO,
            Container: oW,
            Divider: oq,
            Drawer: n2,
            Editable: n4,
            Form: n7,
            FormError: on,
            FormLabel: oi,
            Heading: ol,
            Input: t5,
            Kbd: r5,
            Link: r4,
            List: r8,
            Menu: nl,
            Modal: ny,
            NumberInput: nz,
            PinInput: n$,
            Popover: nN,
            Progress: rc,
            Radio: rC,
            Select: rP,
            Skeleton: rL,
            SkipLink: r$,
            Slider: rY,
            Spinner: rK,
            Stat: r0,
            Switch: te,
            Table: tl,
            Tabs: tI,
            Tag: tK,
            Textarea: t6,
            Tooltip: rr,
            Card: oB,
          },
          styles: io,
          config: ii,
        },
        is = {
          semanticTokens: ir,
          direction: 'ltr',
          components: {},
          ...em,
          styles: io,
          config: ii,
        },
        il = (e, r) => e.find((e) => e.id === r)
      function iu(e, r) {
        let n = ic(e, r),
          o = n ? e[n].findIndex((e) => e.id === r) : -1
        return { position: n, index: o }
      }
      function ic(e, r) {
        for (let [n, o] of Object.entries(e)) if (il(o, r)) return n
      }
      function id(e, r) {
        let n = (0, R.useRef)(!1),
          o = (0, R.useRef)(!1)
        ;(0, R.useEffect)(() => {
          let r = n.current,
            i = r && o.current
          if (i) return e()
          o.current = !0
        }, r),
          (0, R.useEffect)(
            () => (
              (n.current = !0),
              () => {
                n.current = !1
              }
            ),
            []
          )
      }
      let ip = (0, R.createContext)(null)
      function ih() {
        let e = (0, R.useContext)(ip)
        if (null === e) return [!0, null]
        let { isPresent: r, onExitComplete: n, register: o } = e,
          i = (0, R.useId)()
        ;(0, R.useEffect)(() => o(i), [])
        let a = () => n && n(i)
        return !r && n ? [!1, a] : [!0]
      }
      let im = (0, R.createContext)({
          transformPagePoint: (e) => e,
          isStatic: !1,
          reducedMotion: 'never',
        }),
        ig = (0, R.createContext)({}),
        ib = 'undefined' != typeof document,
        iv = ib ? R.useLayoutEffect : R.useEffect,
        iy = (0, R.createContext)({ strict: !1 })
      function ix(e) {
        return (
          'object' == typeof e &&
          Object.prototype.hasOwnProperty.call(e, 'current')
        )
      }
      function ik(e) {
        return 'string' == typeof e || Array.isArray(e)
      }
      function iS(e) {
        return 'object' == typeof e && 'function' == typeof e.start
      }
      let iw = [
        'initial',
        'animate',
        'exit',
        'whileHover',
        'whileDrag',
        'whileTap',
        'whileFocus',
        'whileInView',
      ]
      function iC(e) {
        return iS(e.animate) || iw.some((r) => ik(e[r]))
      }
      function i_(e) {
        return Boolean(iC(e) || e.variants)
      }
      function iE(e) {
        return Array.isArray(e) ? e.join(' ') : e
      }
      let ij = (e) => ({ isEnabled: (r) => e.some((e) => !!r[e]) }),
        iT = {
          measureLayout: ij(['layout', 'layoutId', 'drag']),
          animation: ij([
            'animate',
            'exit',
            'variants',
            'whileHover',
            'whileTap',
            'whileFocus',
            'whileDrag',
            'whileInView',
          ]),
          exit: ij(['exit']),
          drag: ij(['drag', 'dragControls']),
          focus: ij(['whileFocus']),
          hover: ij(['whileHover', 'onHoverStart', 'onHoverEnd']),
          tap: ij(['whileTap', 'onTap', 'onTapStart', 'onTapCancel']),
          pan: ij(['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd']),
          inView: ij(['whileInView', 'onViewportEnter', 'onViewportLeave']),
        }
      function iA(e) {
        let r = (0, R.useRef)(null)
        return null === r.current && (r.current = e()), r.current
      }
      let iP = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
        iB = 1,
        iR = (0, R.createContext)({})
      class iz extends R.Component {
        getSnapshotBeforeUpdate() {
          let { visualElement: e, props: r } = this.props
          return e && e.setProps(r), null
        }
        componentDidUpdate() {}
        render() {
          return this.props.children
        }
      }
      let iL = (0, R.createContext)({}),
        iF = Symbol.for('motionComponentSymbol'),
        iM = [
          'animate',
          'circle',
          'defs',
          'desc',
          'ellipse',
          'g',
          'image',
          'line',
          'filter',
          'marker',
          'mask',
          'metadata',
          'path',
          'pattern',
          'polygon',
          'polyline',
          'rect',
          'stop',
          'switch',
          'symbol',
          'svg',
          'text',
          'tspan',
          'use',
          'view',
        ]
      function i$(e) {
        if ('string' != typeof e || e.includes('-'));
        else if (iM.indexOf(e) > -1 || /[A-Z]/.test(e)) return !0
        return !1
      }
      let iD = {},
        iI = [
          'transformPerspective',
          'x',
          'y',
          'z',
          'translateX',
          'translateY',
          'translateZ',
          'scale',
          'scaleX',
          'scaleY',
          'rotate',
          'rotateX',
          'rotateY',
          'rotateZ',
          'skew',
          'skewX',
          'skewY',
        ],
        iO = new Set(iI)
      function iV(e, { layout: r, layoutId: n }) {
        return (
          iO.has(e) ||
          e.startsWith('origin') ||
          ((r || void 0 !== n) && (!!iD[e] || 'opacity' === e))
        )
      }
      let iW = (e) => !!(null == e ? void 0 : e.getVelocity),
        iN = {
          x: 'translateX',
          y: 'translateY',
          z: 'translateZ',
          transformPerspective: 'perspective',
        },
        iH = (e, r) => iI.indexOf(e) - iI.indexOf(r)
      function iU(e) {
        return e.startsWith('--')
      }
      let iq = (e, r) => (r && 'number' == typeof e ? r.transform(e) : e),
        iY = (e, r, n) => Math.min(Math.max(n, e), r),
        iG = {
          test: (e) => 'number' == typeof e,
          parse: parseFloat,
          transform: (e) => e,
        },
        iX = { ...iG, transform: (e) => iY(0, 1, e) },
        iZ = { ...iG, default: 1 },
        iK = (e) => Math.round(1e5 * e) / 1e5,
        iJ = /(-)?([\d]*\.?[\d])+/g,
        iQ =
          /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        i0 =
          /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i
      function i1(e) {
        return 'string' == typeof e
      }
      let i2 = (e) => ({
          test: (r) => i1(r) && r.endsWith(e) && 1 === r.split(' ').length,
          parse: parseFloat,
          transform: (r) => `${r}${e}`,
        }),
        i5 = i2('deg'),
        i3 = i2('%'),
        i4 = i2('px'),
        i9 = i2('vh'),
        i6 = i2('vw'),
        i8 = {
          ...i3,
          parse: (e) => i3.parse(e) / 100,
          transform: (e) => i3.transform(100 * e),
        },
        i7 = { ...iG, transform: Math.round },
        ae = {
          borderWidth: i4,
          borderTopWidth: i4,
          borderRightWidth: i4,
          borderBottomWidth: i4,
          borderLeftWidth: i4,
          borderRadius: i4,
          radius: i4,
          borderTopLeftRadius: i4,
          borderTopRightRadius: i4,
          borderBottomRightRadius: i4,
          borderBottomLeftRadius: i4,
          width: i4,
          maxWidth: i4,
          height: i4,
          maxHeight: i4,
          size: i4,
          top: i4,
          right: i4,
          bottom: i4,
          left: i4,
          padding: i4,
          paddingTop: i4,
          paddingRight: i4,
          paddingBottom: i4,
          paddingLeft: i4,
          margin: i4,
          marginTop: i4,
          marginRight: i4,
          marginBottom: i4,
          marginLeft: i4,
          rotate: i5,
          rotateX: i5,
          rotateY: i5,
          rotateZ: i5,
          scale: iZ,
          scaleX: iZ,
          scaleY: iZ,
          scaleZ: iZ,
          skew: i5,
          skewX: i5,
          skewY: i5,
          distance: i4,
          translateX: i4,
          translateY: i4,
          translateZ: i4,
          x: i4,
          y: i4,
          z: i4,
          perspective: i4,
          transformPerspective: i4,
          opacity: iX,
          originX: i8,
          originY: i8,
          originZ: i4,
          zIndex: i7,
          fillOpacity: iX,
          strokeOpacity: iX,
          numOctaves: i7,
        }
      function at(e, r, n, o) {
        let {
          style: i,
          vars: a,
          transform: s,
          transformKeys: l,
          transformOrigin: u,
        } = e
        l.length = 0
        let c = !1,
          d = !1,
          p = !0
        for (let e in r) {
          let n = r[e]
          if (iU(e)) {
            a[e] = n
            continue
          }
          let o = ae[e],
            h = iq(n, o)
          if (iO.has(e)) {
            if (((c = !0), (s[e] = h), l.push(e), !p)) continue
            n !== (o.default || 0) && (p = !1)
          } else e.startsWith('origin') ? ((d = !0), (u[e] = h)) : (i[e] = h)
        }
        if (
          (!r.transform &&
            (c || o
              ? (i.transform = (function (
                  { transform: e, transformKeys: r },
                  {
                    enableHardwareAcceleration: n = !0,
                    allowTransformNone: o = !0,
                  },
                  i,
                  a
                ) {
                  let s = ''
                  for (let n of (r.sort(iH), r)) s += `${iN[n] || n}(${e[n]}) `
                  return (
                    n && !e.z && (s += 'translateZ(0)'),
                    (s = s.trim()),
                    a ? (s = a(e, i ? '' : s)) : o && i && (s = 'none'),
                    s
                  )
                })(e, n, p, o))
              : i.transform && (i.transform = 'none')),
          d)
        ) {
          let { originX: e = '50%', originY: r = '50%', originZ: n = 0 } = u
          i.transformOrigin = `${e} ${r} ${n}`
        }
      }
      let ar = () => ({
        style: {},
        transform: {},
        transformKeys: [],
        transformOrigin: {},
        vars: {},
      })
      function an(e, r, n) {
        for (let o in r) iW(r[o]) || iV(o, n) || (e[o] = r[o])
      }
      function ao(e, r, n) {
        let o = {},
          i = (function (e, r, n) {
            let o = e.style || {},
              i = {}
            return (
              an(i, o, e),
              Object.assign(
                i,
                (function ({ transformTemplate: e }, r, n) {
                  return (0, R.useMemo)(() => {
                    let o = ar()
                    return (
                      at(o, r, { enableHardwareAcceleration: !n }, e),
                      Object.assign({}, o.vars, o.style)
                    )
                  }, [r])
                })(e, r, n)
              ),
              e.transformValues ? e.transformValues(i) : i
            )
          })(e, r, n)
        return (
          e.drag &&
            !1 !== e.dragListener &&
            ((o.draggable = !1),
            (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = 'none'),
            (i.touchAction =
              !0 === e.drag ? 'none' : `pan-${'x' === e.drag ? 'y' : 'x'}`)),
          (o.style = i),
          o
        )
      }
      let ai = new Set([
        'animate',
        'exit',
        'variants',
        'initial',
        'style',
        'values',
        'variants',
        'transition',
        'transformTemplate',
        'transformValues',
        'custom',
        'inherit',
        'onLayoutAnimationStart',
        'onLayoutAnimationComplete',
        'onLayoutMeasure',
        'onBeforeLayoutMeasure',
        'onAnimationStart',
        'onAnimationComplete',
        'onUpdate',
        'onDragStart',
        'onDrag',
        'onDragEnd',
        'onMeasureDragConstraints',
        'onDirectionLock',
        'onDragTransitionEnd',
        '_dragX',
        '_dragY',
        'onHoverStart',
        'onHoverEnd',
        'onViewportEnter',
        'onViewportLeave',
        'viewport',
      ])
      function aa(e) {
        return (
          e.startsWith('while') ||
          (e.startsWith('drag') && 'draggable' !== e) ||
          e.startsWith('layout') ||
          e.startsWith('onTap') ||
          e.startsWith('onPan') ||
          ai.has(e)
        )
      }
      let as = (e) => !aa(e)
      try {
        ;(o = require('@emotion/is-prop-valid').default) &&
          (as = (e) => (e.startsWith('on') ? !aa(e) : o(e)))
      } catch (e) {}
      function al(e, r, n) {
        return 'string' == typeof e ? e : i4.transform(r + n * e)
      }
      let au = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
        ac = { offset: 'strokeDashoffset', array: 'strokeDasharray' }
      function ad(
        e,
        {
          attrX: r,
          attrY: n,
          originX: o,
          originY: i,
          pathLength: a,
          pathSpacing: s = 1,
          pathOffset: l = 0,
          ...u
        },
        c,
        d,
        p
      ) {
        if ((at(e, u, c, p), d)) {
          e.style.viewBox && (e.attrs.viewBox = e.style.viewBox)
          return
        }
        ;(e.attrs = e.style), (e.style = {})
        let { attrs: h, style: f, dimensions: m } = e
        h.transform && (m && (f.transform = h.transform), delete h.transform),
          m &&
            (void 0 !== o || void 0 !== i || f.transform) &&
            (f.transformOrigin = (function (e, r, n) {
              let o = al(r, e.x, e.width),
                i = al(n, e.y, e.height)
              return `${o} ${i}`
            })(m, void 0 !== o ? o : 0.5, void 0 !== i ? i : 0.5)),
          void 0 !== r && (h.x = r),
          void 0 !== n && (h.y = n),
          void 0 !== a &&
            (function (e, r, n = 1, o = 0, i = !0) {
              e.pathLength = 1
              let a = i ? au : ac
              e[a.offset] = i4.transform(-o)
              let s = i4.transform(r),
                l = i4.transform(n)
              e[a.array] = `${s} ${l}`
            })(h, a, s, l, !1)
      }
      let ap = () => ({ ...ar(), attrs: {} }),
        ah = (e) => 'string' == typeof e && 'svg' === e.toLowerCase()
      function af(e, r, n, o) {
        let i = (0, R.useMemo)(() => {
          let n = ap()
          return (
            ad(
              n,
              r,
              { enableHardwareAcceleration: !1 },
              ah(o),
              e.transformTemplate
            ),
            { ...n.attrs, style: { ...n.style } }
          )
        }, [r])
        if (e.style) {
          let r = {}
          an(r, e.style, e), (i.style = { ...r, ...i.style })
        }
        return i
      }
      let am = (e) => e.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
      function ag(e, { style: r, vars: n }, o, i) {
        for (let a in (Object.assign(e.style, r, i && i.getProjectionStyles(o)),
        n))
          e.style.setProperty(a, n[a])
      }
      let ab = new Set([
        'baseFrequency',
        'diffuseConstant',
        'kernelMatrix',
        'kernelUnitLength',
        'keySplines',
        'keyTimes',
        'limitingConeAngle',
        'markerHeight',
        'markerWidth',
        'numOctaves',
        'targetX',
        'targetY',
        'surfaceScale',
        'specularConstant',
        'specularExponent',
        'stdDeviation',
        'tableValues',
        'viewBox',
        'gradientTransform',
        'pathLength',
        'startOffset',
        'textLength',
        'lengthAdjust',
      ])
      function av(e, r, n, o) {
        for (let n in (ag(e, r, void 0, o), r.attrs))
          e.setAttribute(ab.has(n) ? n : am(n), r.attrs[n])
      }
      function ay(e, r) {
        let { style: n } = e,
          o = {}
        for (let i in n)
          (iW(n[i]) || (r.style && iW(r.style[i])) || iV(i, e)) && (o[i] = n[i])
        return o
      }
      function ax(e, r) {
        let n = ay(e, r)
        for (let o in e)
          if (iW(e[o]) || iW(r[o])) {
            let r = 'x' === o || 'y' === o ? 'attr' + o.toUpperCase() : o
            n[r] = e[o]
          }
        return n
      }
      function ak(e, r, n, o = {}, i = {}) {
        return (
          'function' == typeof r && (r = r(void 0 !== n ? n : e.custom, o, i)),
          'string' == typeof r && (r = e.variants && e.variants[r]),
          'function' == typeof r && (r = r(void 0 !== n ? n : e.custom, o, i)),
          r
        )
      }
      let aS = (e) => Array.isArray(e),
        aw = (e) => Boolean(e && 'object' == typeof e && e.mix && e.toValue),
        aC = (e) => (aS(e) ? e[e.length - 1] || 0 : e)
      function a_(e) {
        let r = iW(e) ? e.get() : e
        return aw(r) ? r.toValue() : r
      }
      let aE = (e) => (r, n) => {
          let o = (0, R.useContext)(ig),
            i = (0, R.useContext)(ip),
            a = () =>
              (function (
                {
                  scrapeMotionValuesFromProps: e,
                  createRenderState: r,
                  onMount: n,
                },
                o,
                i,
                a
              ) {
                let s = {
                  latestValues: (function (e, r, n, o) {
                    let i = {},
                      a = o(e, {})
                    for (let e in a) i[e] = a_(a[e])
                    let { initial: s, animate: l } = e,
                      u = iC(e),
                      c = i_(e)
                    r &&
                      c &&
                      !u &&
                      !1 !== e.inherit &&
                      (void 0 === s && (s = r.initial),
                      void 0 === l && (l = r.animate))
                    let d = !!n && !1 === n.initial
                    d = d || !1 === s
                    let p = d ? l : s
                    if (p && 'boolean' != typeof p && !iS(p)) {
                      let r = Array.isArray(p) ? p : [p]
                      r.forEach((r) => {
                        let n = ak(e, r)
                        if (!n) return
                        let { transitionEnd: o, transition: a, ...s } = n
                        for (let e in s) {
                          let r = s[e]
                          if (Array.isArray(r)) {
                            let e = d ? r.length - 1 : 0
                            r = r[e]
                          }
                          null !== r && (i[e] = r)
                        }
                        for (let e in o) i[e] = o[e]
                      })
                    }
                    return i
                  })(o, i, a, e),
                  renderState: r(),
                }
                return n && (s.mount = (e) => n(o, e, s)), s
              })(e, r, o, i)
          return n ? a() : iA(a)
        },
        aj = {
          useVisualState: aE({
            scrapeMotionValuesFromProps: ax,
            createRenderState: ap,
            onMount: (e, r, { renderState: n, latestValues: o }) => {
              try {
                n.dimensions =
                  'function' == typeof r.getBBox
                    ? r.getBBox()
                    : r.getBoundingClientRect()
              } catch (e) {
                n.dimensions = { x: 0, y: 0, width: 0, height: 0 }
              }
              ad(
                n,
                o,
                { enableHardwareAcceleration: !1 },
                ah(r.tagName),
                e.transformTemplate
              ),
                av(r, n)
            },
          }),
        },
        aT = {
          useVisualState: aE({
            scrapeMotionValuesFromProps: ay,
            createRenderState: ar,
          }),
        }
      function aA(e, r, n, o = { passive: !0 }) {
        return e.addEventListener(r, n, o), () => e.removeEventListener(r, n)
      }
      function aP(e, r, n, o) {
        ;(0, R.useEffect)(() => {
          let i = e.current
          if (n && i) return aA(i, r, n, o)
        }, [e, r, n, o])
      }
      ;((i = P || (P = {})).Animate = 'animate'),
        (i.Hover = 'whileHover'),
        (i.Tap = 'whileTap'),
        (i.Drag = 'whileDrag'),
        (i.Focus = 'whileFocus'),
        (i.InView = 'whileInView'),
        (i.Exit = 'exit')
      let aB = (e) =>
        'mouse' === e.pointerType
          ? 'number' != typeof e.button || e.button <= 0
          : !1 !== e.isPrimary
      function aR(e, r = 'page') {
        return { point: { x: e[r + 'X'], y: e[r + 'Y'] } }
      }
      let az = (e) => (r) => aB(r) && e(r, aR(r))
      function aL(e, r, n, o) {
        return aA(e, r, az(n), o)
      }
      function aF(e, r, n, o) {
        return aP(e, r, n && az(n), o)
      }
      function aM(e) {
        let r = null
        return () => {
          let n = () => {
            r = null
          }
          return null === r && ((r = e), n)
        }
      }
      let a$ = aM('dragHorizontal'),
        aD = aM('dragVertical')
      function aI(e) {
        let r = !1
        if ('y' === e) r = aD()
        else if ('x' === e) r = a$()
        else {
          let e = a$(),
            n = aD()
          e && n
            ? (r = () => {
                e(), n()
              })
            : (e && e(), n && n())
        }
        return r
      }
      function aO() {
        let e = aI(!0)
        return !e || (e(), !1)
      }
      function aV(e, r, n, o) {
        return (i, a) => {
          !('touch' === i.type || aO()) &&
            (n && e.animationState && e.animationState.setActive(P.Hover, r),
            o && o(i, a))
        }
      }
      let aW = (e, r) => !!r && (e === r || aW(e, r.parentElement))
      function aN(e) {
        return (0, R.useEffect)(() => () => e(), [])
      }
      let aH = (e, r) => (n) => r(e(n)),
        aU = (...e) => e.reduce(aH),
        aq = new WeakMap(),
        aY = new WeakMap(),
        aG = (e) => {
          let r = aq.get(e.target)
          r && r(e)
        },
        aX = (e) => {
          e.forEach(aG)
        },
        aZ = { some: 0, all: 1 }
      function aK(
        e,
        r,
        n,
        { root: o, margin: i, amount: a = 'some', once: s }
      ) {
        ;(0, R.useEffect)(() => {
          if (!e || !n.current) return
          let l = {
              root: null == o ? void 0 : o.current,
              rootMargin: i,
              threshold: 'number' == typeof a ? a : aZ[a],
            },
            u = (e) => {
              let { isIntersecting: o } = e
              if (
                r.isInView === o ||
                ((r.isInView = o), s && !o && r.hasEnteredView)
              )
                return
              o && (r.hasEnteredView = !0),
                n.animationState && n.animationState.setActive(P.InView, o)
              let i = n.getProps(),
                a = o ? i.onViewportEnter : i.onViewportLeave
              a && a(e)
            }
          return (function (e, r, n) {
            let o = (function ({ root: e, ...r }) {
              let n = e || document
              aY.has(n) || aY.set(n, {})
              let o = aY.get(n),
                i = JSON.stringify(r)
              return (
                o[i] ||
                  (o[i] = new IntersectionObserver(aX, { root: e, ...r })),
                o[i]
              )
            })(r)
            return (
              aq.set(e, n),
              o.observe(e),
              () => {
                aq.delete(e), o.unobserve(e)
              }
            )
          })(n.current, l, u)
        }, [e, o, i, a])
      }
      function aJ(e, r, n, { fallback: o = !0 }) {
        ;(0, R.useEffect)(() => {
          e &&
            o &&
            requestAnimationFrame(() => {
              r.hasEnteredView = !0
              let { onViewportEnter: e } = n.getProps()
              e && e(null),
                n.animationState && n.animationState.setActive(P.InView, !0)
            })
        }, [e])
      }
      let aQ = (e) => (r) => (e(r), null),
        a0 = {
          inView: aQ(function ({
            visualElement: e,
            whileInView: r,
            onViewportEnter: n,
            onViewportLeave: o,
            viewport: i = {},
          }) {
            let a = (0, R.useRef)({ hasEnteredView: !1, isInView: !1 }),
              s = Boolean(r || n || o)
            i.once && a.current.hasEnteredView && (s = !1)
            let l = 'undefined' == typeof IntersectionObserver ? aJ : aK
            l(s, a.current, e, i)
          }),
          tap: aQ(function ({
            onTap: e,
            onTapStart: r,
            onTapCancel: n,
            whileTap: o,
            visualElement: i,
            ...a
          }) {
            let s = (0, R.useRef)(!1),
              l = (0, R.useRef)(null),
              u = { passive: !(r || e || n || a.onPointerDown) }
            function c() {
              l.current && l.current(), (l.current = null)
            }
            function d() {
              c(), (s.current = !1)
              let e = i.getProps()
              return (
                e.whileTap &&
                  i.animationState &&
                  i.animationState.setActive(P.Tap, !1),
                !aO()
              )
            }
            function p(e, r) {
              var n, o, a, s
              d() &&
                (aW(i.current, e.target)
                  ? null === (s = (a = i.getProps()).onTap) ||
                    void 0 === s ||
                    s.call(a, e, r)
                  : null === (o = (n = i.getProps()).onTapCancel) ||
                    void 0 === o ||
                    o.call(n, e, r))
            }
            function h(e, r) {
              var n, o
              d() &&
                (null === (o = (n = i.getProps()).onTapCancel) ||
                  void 0 === o ||
                  o.call(n, e, r))
            }
            let f = (0, R.useCallback)(
              (e, r) => {
                var n
                if ((c(), s.current)) return
                ;(s.current = !0),
                  (l.current = aU(
                    aL(window, 'pointerup', p, u),
                    aL(window, 'pointercancel', h, u)
                  ))
                let o = i.getProps()
                o.whileTap &&
                  i.animationState &&
                  i.animationState.setActive(P.Tap, !0),
                  null === (n = o.onTapStart) || void 0 === n || n.call(o, e, r)
              },
              [Boolean(r), i]
            )
            aF(i, 'pointerdown', e || r || n || o ? f : void 0, u), aN(c)
          }),
          focus: aQ(function ({ whileFocus: e, visualElement: r }) {
            let { animationState: n } = r,
              o = (0, R.useCallback)(() => {
                n && n.setActive(P.Focus, !0)
              }, [n]),
              i = (0, R.useCallback)(() => {
                n && n.setActive(P.Focus, !1)
              }, [n])
            aP(r, 'focus', e ? o : void 0), aP(r, 'blur', e ? i : void 0)
          }),
          hover: aQ(function ({
            onHoverStart: e,
            onHoverEnd: r,
            whileHover: n,
            visualElement: o,
          }) {
            aF(
              o,
              'pointerenter',
              (0, R.useMemo)(
                () => (e || n ? aV(o, !0, Boolean(n), e) : void 0),
                [e, Boolean(n), o]
              ),
              { passive: !e }
            ),
              aF(
                o,
                'pointerleave',
                (0, R.useMemo)(
                  () => (r || n ? aV(o, !1, Boolean(n), r) : void 0),
                  [e, Boolean(n), o]
                ),
                { passive: !r }
              )
          }),
        }
      function a1(e, r) {
        if (!Array.isArray(r)) return !1
        let n = r.length
        if (n !== e.length) return !1
        for (let o = 0; o < n; o++) if (r[o] !== e[o]) return !1
        return !0
      }
      let a2 = (e) => /^\-?\d*\.?\d+$/.test(e),
        a5 = (e) => /^0[^.\s]+$/.test(e),
        a3 = { delta: 0, timestamp: 0 },
        a4 = (1 / 60) * 1e3,
        a9 =
          'undefined' != typeof performance
            ? () => performance.now()
            : () => Date.now(),
        a6 =
          'undefined' != typeof window
            ? (e) => window.requestAnimationFrame(e)
            : (e) => setTimeout(() => e(a9()), a4),
        a8 = !0,
        a7 = !1,
        se = !1,
        st = ['read', 'update', 'preRender', 'render', 'postRender'],
        sr = st.reduce(
          (e, r) => (
            (e[r] = (function (e) {
              let r = [],
                n = [],
                o = 0,
                i = !1,
                a = !1,
                s = new WeakSet(),
                l = {
                  schedule: (e, a = !1, l = !1) => {
                    let u = l && i,
                      c = u ? r : n
                    return (
                      a && s.add(e),
                      -1 === c.indexOf(e) &&
                        (c.push(e), u && i && (o = r.length)),
                      e
                    )
                  },
                  cancel: (e) => {
                    let r = n.indexOf(e)
                    ;-1 !== r && n.splice(r, 1), s.delete(e)
                  },
                  process: (u) => {
                    if (i) {
                      a = !0
                      return
                    }
                    if (
                      ((i = !0),
                      ([r, n] = [n, r]),
                      (n.length = 0),
                      (o = r.length))
                    )
                      for (let n = 0; n < o; n++) {
                        let o = r[n]
                        o(u), s.has(o) && (l.schedule(o), e())
                      }
                    ;(i = !1), a && ((a = !1), l.process(u))
                  },
                }
              return l
            })(() => (a7 = !0))),
            e
          ),
          {}
        ),
        sn = st.reduce((e, r) => {
          let n = sr[r]
          return (
            (e[r] = (e, r = !1, o = !1) => (a7 || sl(), n.schedule(e, r, o))), e
          )
        }, {}),
        so = st.reduce((e, r) => ((e[r] = sr[r].cancel), e), {}),
        si = st.reduce((e, r) => ((e[r] = () => sr[r].process(a3)), e), {}),
        sa = (e) => sr[e].process(a3),
        ss = (e) => {
          ;(a7 = !1),
            (a3.delta = a8 ? a4 : Math.max(Math.min(e - a3.timestamp, 40), 1)),
            (a3.timestamp = e),
            (se = !0),
            st.forEach(sa),
            (se = !1),
            a7 && ((a8 = !1), a6(ss))
        },
        sl = () => {
          ;(a7 = !0), (a8 = !0), se || a6(ss)
        }
      function su(e, r) {
        ;-1 === e.indexOf(r) && e.push(r)
      }
      function sc(e, r) {
        let n = e.indexOf(r)
        n > -1 && e.splice(n, 1)
      }
      class sd {
        constructor() {
          this.subscriptions = []
        }
        add(e) {
          return su(this.subscriptions, e), () => sc(this.subscriptions, e)
        }
        notify(e, r, n) {
          let o = this.subscriptions.length
          if (o) {
            if (1 === o) this.subscriptions[0](e, r, n)
            else
              for (let i = 0; i < o; i++) {
                let o = this.subscriptions[i]
                o && o(e, r, n)
              }
          }
        }
        getSize() {
          return this.subscriptions.length
        }
        clear() {
          this.subscriptions.length = 0
        }
      }
      function sp(e, r) {
        return r ? e * (1e3 / r) : 0
      }
      let sh = (e) => !isNaN(parseFloat(e))
      class sf {
        constructor(e, r = {}) {
          ;(this.version = '8.5.5'),
            (this.timeDelta = 0),
            (this.lastUpdated = 0),
            (this.canTrackVelocity = !1),
            (this.events = {}),
            (this.updateAndNotify = (e, r = !0) => {
              ;(this.prev = this.current), (this.current = e)
              let { delta: n, timestamp: o } = a3
              this.lastUpdated !== o &&
                ((this.timeDelta = n),
                (this.lastUpdated = o),
                sn.postRender(this.scheduleVelocityCheck)),
                this.prev !== this.current &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()),
                r &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current)
            }),
            (this.scheduleVelocityCheck = () =>
              sn.postRender(this.velocityCheck)),
            (this.velocityCheck = ({ timestamp: e }) => {
              e !== this.lastUpdated &&
                ((this.prev = this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()))
            }),
            (this.hasAnimated = !1),
            (this.prev = this.current = e),
            (this.canTrackVelocity = sh(this.current)),
            (this.owner = r.owner)
        }
        onChange(e) {
          return this.on('change', e)
        }
        on(e, r) {
          this.events[e] || (this.events[e] = new sd())
          let n = this.events[e].add(r)
          return 'change' === e
            ? () => {
                n(),
                  sn.read(() => {
                    this.events.change.getSize() || this.stop()
                  })
              }
            : n
        }
        clearListeners() {
          for (let e in this.events) this.events[e].clear()
        }
        attach(e, r) {
          ;(this.passiveEffect = e), (this.stopPassiveEffect = r)
        }
        set(e, r = !0) {
          r && this.passiveEffect
            ? this.passiveEffect(e, this.updateAndNotify)
            : this.updateAndNotify(e, r)
        }
        setWithVelocity(e, r, n) {
          this.set(r), (this.prev = e), (this.timeDelta = n)
        }
        jump(e) {
          this.updateAndNotify(e),
            (this.prev = e),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect()
        }
        get() {
          return this.current
        }
        getPrevious() {
          return this.prev
        }
        getVelocity() {
          return this.canTrackVelocity
            ? sp(
                parseFloat(this.current) - parseFloat(this.prev),
                this.timeDelta
              )
            : 0
        }
        start(e) {
          return (
            this.stop(),
            new Promise((r) => {
              ;(this.hasAnimated = !0),
                (this.animation = e(r) || null),
                this.events.animationStart &&
                  this.events.animationStart.notify()
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation()
            })
          )
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation()
        }
        isAnimating() {
          return !!this.animation
        }
        clearAnimation() {
          this.animation = null
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect()
        }
      }
      function sm(e, r) {
        return new sf(e, r)
      }
      let sg = (e, r) => (n) =>
          Boolean(
            (i1(n) && i0.test(n) && n.startsWith(e)) ||
              (r && Object.prototype.hasOwnProperty.call(n, r))
          ),
        sb = (e, r, n) => (o) => {
          if (!i1(o)) return o
          let [i, a, s, l] = o.match(iJ)
          return {
            [e]: parseFloat(i),
            [r]: parseFloat(a),
            [n]: parseFloat(s),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          }
        },
        sv = (e) => iY(0, 255, e),
        sy = { ...iG, transform: (e) => Math.round(sv(e)) },
        sx = {
          test: sg('rgb', 'red'),
          parse: sb('red', 'green', 'blue'),
          transform: ({ red: e, green: r, blue: n, alpha: o = 1 }) =>
            'rgba(' +
            sy.transform(e) +
            ', ' +
            sy.transform(r) +
            ', ' +
            sy.transform(n) +
            ', ' +
            iK(iX.transform(o)) +
            ')',
        },
        sk = {
          test: sg('#'),
          parse: function (e) {
            let r = '',
              n = '',
              o = '',
              i = ''
            return (
              e.length > 5
                ? ((r = e.substring(1, 3)),
                  (n = e.substring(3, 5)),
                  (o = e.substring(5, 7)),
                  (i = e.substring(7, 9)))
                : ((r = e.substring(1, 2)),
                  (n = e.substring(2, 3)),
                  (o = e.substring(3, 4)),
                  (i = e.substring(4, 5)),
                  (r += r),
                  (n += n),
                  (o += o),
                  (i += i)),
              {
                red: parseInt(r, 16),
                green: parseInt(n, 16),
                blue: parseInt(o, 16),
                alpha: i ? parseInt(i, 16) / 255 : 1,
              }
            )
          },
          transform: sx.transform,
        },
        sS = {
          test: sg('hsl', 'hue'),
          parse: sb('hue', 'saturation', 'lightness'),
          transform: ({ hue: e, saturation: r, lightness: n, alpha: o = 1 }) =>
            'hsla(' +
            Math.round(e) +
            ', ' +
            i3.transform(iK(r)) +
            ', ' +
            i3.transform(iK(n)) +
            ', ' +
            iK(iX.transform(o)) +
            ')',
        },
        sw = {
          test: (e) => sx.test(e) || sk.test(e) || sS.test(e),
          parse: (e) =>
            sx.test(e) ? sx.parse(e) : sS.test(e) ? sS.parse(e) : sk.parse(e),
          transform: (e) =>
            i1(e)
              ? e
              : e.hasOwnProperty('red')
              ? sx.transform(e)
              : sS.transform(e),
        },
        sC = '${c}',
        s_ = '${n}'
      function sE(e) {
        'number' == typeof e && (e = `${e}`)
        let r = [],
          n = 0,
          o = 0,
          i = e.match(iQ)
        i &&
          ((n = i.length), (e = e.replace(iQ, sC)), r.push(...i.map(sw.parse)))
        let a = e.match(iJ)
        return (
          a &&
            ((o = a.length),
            (e = e.replace(iJ, s_)),
            r.push(...a.map(iG.parse))),
          { values: r, numColors: n, numNumbers: o, tokenised: e }
        )
      }
      function sj(e) {
        return sE(e).values
      }
      function sT(e) {
        let { values: r, numColors: n, tokenised: o } = sE(e),
          i = r.length
        return (e) => {
          let r = o
          for (let o = 0; o < i; o++)
            r = r.replace(
              o < n ? sC : s_,
              o < n ? sw.transform(e[o]) : iK(e[o])
            )
          return r
        }
      }
      let sA = (e) => ('number' == typeof e ? 0 : e),
        sP = {
          test: function (e) {
            var r, n
            return (
              isNaN(e) &&
              i1(e) &&
              ((null === (r = e.match(iJ)) || void 0 === r
                ? void 0
                : r.length) || 0) +
                ((null === (n = e.match(iQ)) || void 0 === n
                  ? void 0
                  : n.length) || 0) >
                0
            )
          },
          parse: sj,
          createTransformer: sT,
          getAnimatableNone: function (e) {
            let r = sj(e),
              n = sT(e)
            return n(r.map(sA))
          },
        },
        sB = new Set(['brightness', 'contrast', 'saturate', 'opacity'])
      function sR(e) {
        let [r, n] = e.slice(0, -1).split('(')
        if ('drop-shadow' === r) return e
        let [o] = n.match(iJ) || []
        if (!o) return e
        let i = n.replace(o, ''),
          a = sB.has(r) ? 1 : 0
        return o !== n && (a *= 100), r + '(' + a + i + ')'
      }
      let sz = /([a-z-]*)\(.*?\)/g,
        sL = {
          ...sP,
          getAnimatableNone: (e) => {
            let r = e.match(sz)
            return r ? r.map(sR).join(' ') : e
          },
        },
        sF = {
          ...ae,
          color: sw,
          backgroundColor: sw,
          outlineColor: sw,
          fill: sw,
          stroke: sw,
          borderColor: sw,
          borderTopColor: sw,
          borderRightColor: sw,
          borderBottomColor: sw,
          borderLeftColor: sw,
          filter: sL,
          WebkitFilter: sL,
        },
        sM = (e) => sF[e]
      function s$(e, r) {
        var n
        let o = sM(e)
        return (
          o !== sL && (o = sP),
          null === (n = o.getAnimatableNone) || void 0 === n
            ? void 0
            : n.call(o, r)
        )
      }
      let sD = (e) => (r) => r.test(e),
        sI = [
          iG,
          i4,
          i3,
          i5,
          i6,
          i9,
          { test: (e) => 'auto' === e, parse: (e) => e },
        ],
        sO = (e) => sI.find(sD(e)),
        sV = [...sI, sw, sP],
        sW = (e) => sV.find(sD(e))
      function sN(e, r, n) {
        let o = e.getProps()
        return ak(
          o,
          r,
          void 0 !== n ? n : o.custom,
          (function (e) {
            let r = {}
            return e.values.forEach((e, n) => (r[n] = e.get())), r
          })(e),
          (function (e) {
            let r = {}
            return e.values.forEach((e, n) => (r[n] = e.getVelocity())), r
          })(e)
        )
      }
      function sH(e) {
        return Boolean(iW(e) && e.add)
      }
      let sU = 'data-' + am('framerAppearId')
      var sq = function () {},
        sY = function () {}
      let sG = (e) => 1e3 * e,
        sX = { current: !1 },
        sZ = (e) => (r) => r <= 0.5 ? e(2 * r) / 2 : (2 - e(2 * (1 - r))) / 2,
        sK = (e) => (r) => 1 - e(1 - r),
        sJ = (e) => e * e,
        sQ = sK(sJ),
        s0 = sZ(sJ),
        s1 = (e, r, n) => -n * e + n * r + e
      function s2(e, r, n) {
        return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6)
          ? e + (r - e) * 6 * n
          : n < 0.5
          ? r
          : n < 2 / 3
          ? e + (r - e) * (2 / 3 - n) * 6
          : e
      }
      let s5 = (e, r, n) => {
          let o = e * e
          return Math.sqrt(Math.max(0, n * (r * r - o) + o))
        },
        s3 = [sk, sx, sS],
        s4 = (e) => s3.find((r) => r.test(e))
      function s9(e) {
        let r = s4(e)
        sY(
          Boolean(r),
          `'${e}' is not an animatable color. Use the equivalent color code instead.`
        )
        let n = r.parse(e)
        return (
          r === sS &&
            (n = (function ({ hue: e, saturation: r, lightness: n, alpha: o }) {
              ;(e /= 360), (n /= 100)
              let i = 0,
                a = 0,
                s = 0
              if ((r /= 100)) {
                let o = n < 0.5 ? n * (1 + r) : n + r - n * r,
                  l = 2 * n - o
                ;(i = s2(l, o, e + 1 / 3)),
                  (a = s2(l, o, e)),
                  (s = s2(l, o, e - 1 / 3))
              } else i = a = s = n
              return {
                red: Math.round(255 * i),
                green: Math.round(255 * a),
                blue: Math.round(255 * s),
                alpha: o,
              }
            })(n)),
          n
        )
      }
      let s6 = (e, r) => {
        let n = s9(e),
          o = s9(r),
          i = { ...n }
        return (e) => (
          (i.red = s5(n.red, o.red, e)),
          (i.green = s5(n.green, o.green, e)),
          (i.blue = s5(n.blue, o.blue, e)),
          (i.alpha = s1(n.alpha, o.alpha, e)),
          sx.transform(i)
        )
      }
      function s8(e, r) {
        return 'number' == typeof e
          ? (n) => s1(e, r, n)
          : sw.test(e)
          ? s6(e, r)
          : lt(e, r)
      }
      let s7 = (e, r) => {
          let n = [...e],
            o = n.length,
            i = e.map((e, n) => s8(e, r[n]))
          return (e) => {
            for (let r = 0; r < o; r++) n[r] = i[r](e)
            return n
          }
        },
        le = (e, r) => {
          let n = { ...e, ...r },
            o = {}
          for (let i in n)
            void 0 !== e[i] && void 0 !== r[i] && (o[i] = s8(e[i], r[i]))
          return (e) => {
            for (let r in o) n[r] = o[r](e)
            return n
          }
        },
        lt = (e, r) => {
          let n = sP.createTransformer(r),
            o = sE(e),
            i = sE(r),
            a = o.numColors === i.numColors && o.numNumbers >= i.numNumbers
          return a
            ? aU(s7(o.values, i.values), n)
            : (sq(
                !0,
                `Complex values '${e}' and '${r}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
              ),
              (n) => `${n > 0 ? r : e}`)
        },
        lr = (e, r, n) => {
          let o = r - e
          return 0 === o ? 1 : (n - e) / o
        },
        ln = (e, r) => (n) => s1(e, r, n)
      function lo(e, r, { clamp: n = !0, ease: o, mixer: i } = {}) {
        let a = e.length
        sY(
          a === r.length,
          'Both input and output ranges must be the same length'
        ),
          sY(
            !o || !Array.isArray(o) || o.length === a - 1,
            'Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values.'
          ),
          e[0] > e[a - 1] && ((e = [...e].reverse()), (r = [...r].reverse()))
        let s = (function (e, r, n) {
            let o = [],
              i =
                n ||
                (function (e) {
                  if ('number' == typeof e);
                  else if ('string' == typeof e) return sw.test(e) ? s6 : lt
                  else if (Array.isArray(e)) return s7
                  else if ('object' == typeof e) return le
                  return ln
                })(e[0]),
              a = e.length - 1
            for (let n = 0; n < a; n++) {
              let a = i(e[n], e[n + 1])
              if (r) {
                let e = Array.isArray(r) ? r[n] : r
                a = aU(e, a)
              }
              o.push(a)
            }
            return o
          })(r, o, i),
          l = s.length,
          u = (r) => {
            let n = 0
            if (l > 1) for (; n < e.length - 2 && !(r < e[n + 1]); n++);
            let o = lr(e[n], e[n + 1], r)
            return s[n](o)
          }
        return n ? (r) => u(iY(e[0], e[a - 1], r)) : u
      }
      let li = (e) => e,
        la = (e, r, n) =>
          (((1 - 3 * n + 3 * r) * e + (3 * n - 6 * r)) * e + 3 * r) * e
      function ls(e, r, n, o) {
        if (e === r && n === o) return li
        let i = (r) =>
          (function (e, r, n, o, i) {
            let a, s
            let l = 0
            do (a = la((s = r + (n - r) / 2), o, i) - e) > 0 ? (n = s) : (r = s)
            while (Math.abs(a) > 1e-7 && ++l < 12)
            return s
          })(r, 0, 1, e, n)
        return (e) => (0 === e || 1 === e ? e : la(i(e), r, o))
      }
      let ll = (e) => 1 - Math.sin(Math.acos(e)),
        lu = sK(ll),
        lc = sZ(lu),
        ld = ls(0.33, 1.53, 0.69, 0.99),
        lp = sK(ld),
        lh = sZ(lp),
        lf = (e) =>
          (e *= 2) < 1 ? 0.5 * lp(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
        lm = {
          linear: li,
          easeIn: sJ,
          easeInOut: s0,
          easeOut: sQ,
          circIn: ll,
          circInOut: lc,
          circOut: lu,
          backIn: lp,
          backInOut: lh,
          backOut: ld,
          anticipate: lf,
        },
        lg = (e) => {
          if (Array.isArray(e)) {
            sY(
              4 === e.length,
              'Cubic bezier arrays must contain four numerical values.'
            )
            let [r, n, o, i] = e
            return ls(r, n, o, i)
          }
          return 'string' == typeof e
            ? (sY(void 0 !== lm[e], `Invalid easing type '${e}'`), lm[e])
            : e
        },
        lb = (e) => Array.isArray(e) && 'number' != typeof e[0]
      function lv({ keyframes: e, ease: r = s0, times: n, duration: o = 300 }) {
        e = [...e]
        let i = lb(r) ? r.map(lg) : lg(r),
          a = { done: !1, value: e[0] },
          s = (
            n && n.length === e.length
              ? n
              : (function (e) {
                  let r = e.length
                  return e.map((e, n) => (0 !== n ? n / (r - 1) : 0))
                })(e)
          ).map((e) => e * o)
        function l() {
          var r
          return lo(s, e, {
            ease: Array.isArray(i)
              ? i
              : (r = e).map(() => i || s0).splice(0, r.length - 1),
          })
        }
        let u = l()
        return {
          next: (e) => ((a.value = u(e)), (a.done = e >= o), a),
          flipTarget: () => {
            e.reverse(), (u = l())
          },
        }
      }
      function ly(e, r) {
        return e * Math.sqrt(1 - r * r)
      }
      let lx = ['duration', 'bounce'],
        lk = ['stiffness', 'damping', 'mass']
      function lS(e, r) {
        return r.some((r) => void 0 !== e[r])
      }
      function lw({ keyframes: e, restDelta: r, restSpeed: n, ...o }) {
        let i = e[0],
          a = e[e.length - 1],
          s = { done: !1, value: i },
          {
            stiffness: l,
            damping: u,
            mass: c,
            velocity: d,
            duration: p,
            isResolvedFromDuration: h,
          } = (function (e) {
            let r = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...e,
            }
            if (!lS(e, lk) && lS(e, lx)) {
              let n = (function ({
                duration: e = 800,
                bounce: r = 0.25,
                velocity: n = 0,
                mass: o = 1,
              }) {
                let i, a
                sq(e <= 1e4, 'Spring duration must be 10 seconds or less')
                let s = 1 - r
                ;(s = iY(0.05, 1, s)),
                  (e = iY(0.01, 10, e / 1e3)),
                  s < 1
                    ? ((i = (r) => {
                        let o = r * s,
                          i = o * e,
                          a = ly(r, s)
                        return 0.001 - ((o - n) / a) * Math.exp(-i)
                      }),
                      (a = (r) => {
                        let o = r * s,
                          a = o * e,
                          l = Math.pow(s, 2) * Math.pow(r, 2) * e,
                          u = ly(Math.pow(r, 2), s),
                          c = -i(r) + 0.001 > 0 ? -1 : 1
                        return (c * ((a * n + n - l) * Math.exp(-a))) / u
                      }))
                    : ((i = (r) => {
                        let o = Math.exp(-r * e),
                          i = (r - n) * e + 1
                        return -0.001 + o * i
                      }),
                      (a = (r) => {
                        let o = Math.exp(-r * e),
                          i = (n - r) * (e * e)
                        return o * i
                      }))
                let l = 5 / e,
                  u = (function (e, r, n) {
                    let o = n
                    for (let n = 1; n < 12; n++) o -= e(o) / r(o)
                    return o
                  })(i, a, l)
                if (((e *= 1e3), isNaN(u)))
                  return { stiffness: 100, damping: 10, duration: e }
                {
                  let r = Math.pow(u, 2) * o
                  return {
                    stiffness: r,
                    damping: 2 * s * Math.sqrt(o * r),
                    duration: e,
                  }
                }
              })(e)
              ;(r = {
                ...r,
                ...n,
                velocity: 0,
                mass: 1,
              }).isResolvedFromDuration = !0
            }
            return r
          })(o),
          f = lC,
          m = d ? -(d / 1e3) : 0,
          g = u / (2 * Math.sqrt(l * c))
        function b() {
          let e = a - i,
            o = Math.sqrt(l / c) / 1e3,
            s = 5 > Math.abs(e)
          if ((n || (n = s ? 0.01 : 2), r || (r = s ? 0.005 : 0.5), g < 1)) {
            let r = ly(o, g)
            f = (n) =>
              a -
              Math.exp(-g * o * n) *
                (((m + g * o * e) / r) * Math.sin(r * n) + e * Math.cos(r * n))
          } else if (1 === g)
            f = (r) => a - Math.exp(-o * r) * (e + (m + o * e) * r)
          else {
            let r = o * Math.sqrt(g * g - 1)
            f = (n) => {
              let i = Math.min(r * n, 300)
              return (
                a -
                (Math.exp(-g * o * n) *
                  ((m + g * o * e) * Math.sinh(i) + r * e * Math.cosh(i))) /
                  r
              )
            }
          }
        }
        return (
          b(),
          {
            next: (e) => {
              let o = f(e)
              if (h) s.done = e >= p
              else {
                let i = m
                if (0 !== e) {
                  if (g < 1) {
                    let r = Math.max(0, e - 5)
                    i = sp(o - f(r), e - r)
                  } else i = 0
                }
                let l = Math.abs(i) <= n,
                  u = Math.abs(a - o) <= r
                s.done = l && u
              }
              return (s.value = s.done ? a : o), s
            },
            flipTarget: () => {
              ;(m = -m), ([i, a] = [a, i]), b()
            },
          }
        )
      }
      lw.needsInterpolation = (e, r) =>
        'string' == typeof e || 'string' == typeof r
      let lC = (e) => 0,
        l_ = {
          decay: function ({
            keyframes: e = [0],
            velocity: r = 0,
            power: n = 0.8,
            timeConstant: o = 350,
            restDelta: i = 0.5,
            modifyTarget: a,
          }) {
            let s = e[0],
              l = { done: !1, value: s },
              u = n * r,
              c = s + u,
              d = void 0 === a ? c : a(c)
            return (
              d !== c && (u = d - s),
              {
                next: (e) => {
                  let r = -u * Math.exp(-e / o)
                  return (
                    (l.done = !(r > i || r < -i)),
                    (l.value = l.done ? d : d + r),
                    l
                  )
                },
                flipTarget: () => {},
              }
            )
          },
          keyframes: lv,
          tween: lv,
          spring: lw,
        }
      function lE(e, r, n = 0) {
        return e - r - n
      }
      let lj = (e) => {
        let r = ({ delta: r }) => e(r)
        return { start: () => sn.update(r, !0), stop: () => so.update(r) }
      }
      function lT({
        duration: e,
        driver: r = lj,
        elapsed: n = 0,
        repeat: o = 0,
        repeatType: i = 'loop',
        repeatDelay: a = 0,
        keyframes: s,
        autoplay: l = !0,
        onPlay: u,
        onStop: c,
        onComplete: d,
        onRepeat: p,
        onUpdate: h,
        type: f = 'keyframes',
        ...m
      }) {
        var g
        let b, v
        let y = n,
          x = 0,
          k = e,
          S = !1,
          w = !0,
          C = l_[s.length > 2 ? 'keyframes' : f] || lv,
          _ = s[0],
          E = s[s.length - 1],
          j = { done: !1, value: _ }
        ;(null === (g = C.needsInterpolation) || void 0 === g
          ? void 0
          : g.call(C, _, E)) &&
          ((v = lo([0, 100], [_, E], { clamp: !1 })), (s = [0, 100]))
        let T = C({ ...m, duration: e, keyframes: s })
        function A(e) {
          if (
            (w || (e = -e),
            (n += e),
            S ||
              ((j = T.next(Math.max(0, n))),
              v && (j.value = v(j.value)),
              (S = w ? j.done : n <= 0)),
            h && h(j.value),
            S)
          ) {
            if ((0 === x && (k = void 0 !== k ? k : n), x < o)) {
              var r, s
              ;(r = n),
                (s = k),
                (w ? r >= s + a : r <= -a) &&
                  (x++,
                  'reverse' === i
                    ? (n = (function (e, r = 0, n = 0, o = !0) {
                        return o ? lE(r + -e, r, n) : r - (e - r) + n
                      })(n, k, a, (w = x % 2 == 0)))
                    : ((n = lE(n, k, a)), 'mirror' === i && T.flipTarget()),
                  (S = !1),
                  p && p())
            } else b && b.stop(), d && d()
          }
        }
        return (
          l && (u && u(), (b = r(A)).start()),
          {
            stop: () => {
              c && c(), b && b.stop()
            },
            set currentTime(t) {
              ;(n = y), A(t)
            },
            sample: (r) => {
              n = y
              let o = e && 'number' == typeof e ? Math.max(0.5 * e, 50) : 50,
                i = 0
              for (A(0); i <= r; ) {
                let e = r - i
                A(Math.min(e, o)), (i += o)
              }
              return j
            },
          }
        )
      }
      let lA = ([e, r, n, o]) => `cubic-bezier(${e}, ${r}, ${n}, ${o})`,
        lP = {
          linear: 'linear',
          ease: 'ease',
          easeIn: 'ease-in',
          easeOut: 'ease-out',
          easeInOut: 'ease-in-out',
          circIn: lA([0, 0.65, 0.55, 1]),
          circOut: lA([0.55, 0, 1, 0.45]),
          backIn: lA([0.31, 0.01, 0.66, -0.59]),
          backOut: lA([0.33, 1.53, 0.69, 0.99]),
        },
        lB = {
          waapi: () => Object.hasOwnProperty.call(Element.prototype, 'animate'),
        },
        lR = {},
        lz = {}
      for (let e in lB)
        lz[e] = () => (void 0 === lR[e] && (lR[e] = lB[e]()), lR[e])
      let lL = new Set(['opacity'])
      function lF(e, r) {
        let n = performance.now(),
          o = ({ timestamp: i }) => {
            let a = i - n
            a >= r && (so.read(o), e(a - r))
          }
        return sn.read(o, !0), () => so.read(o)
      }
      let lM = () => ({
          type: 'spring',
          stiffness: 500,
          damping: 25,
          restSpeed: 10,
        }),
        l$ = (e) => ({
          type: 'spring',
          stiffness: 550,
          damping: 0 === e ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        lD = () => ({ type: 'keyframes', ease: 'linear', duration: 0.3 }),
        lI = { type: 'keyframes', duration: 0.8 },
        lO = {
          x: lM,
          y: lM,
          z: lM,
          rotate: lM,
          rotateX: lM,
          rotateY: lM,
          rotateZ: lM,
          scaleX: l$,
          scaleY: l$,
          scale: l$,
          opacity: lD,
          backgroundColor: lD,
          color: lD,
          default: l$,
        },
        lV = (e, { keyframes: r }) => {
          if (r.length > 2) return lI
          {
            let n = lO[e] || lO.default
            return n(r[1])
          }
        },
        lW = (e, r) =>
          'zIndex' !== e &&
          !!(
            'number' == typeof r ||
            Array.isArray(r) ||
            ('string' == typeof r && sP.test(r) && !r.startsWith('url('))
          )
      function lN(e) {
        return (
          0 === e ||
          ('string' == typeof e && 0 === parseFloat(e) && -1 === e.indexOf(' '))
        )
      }
      function lH(e) {
        return 'number' == typeof e ? 0 : s$('', e)
      }
      function lU(e, r) {
        return e[r] || e.default || e
      }
      let lq =
        (e, r, n, o = {}) =>
        (i) => {
          let a = lU(o, e) || {},
            s = a.delay || o.delay || 0,
            { elapsed: l = 0 } = o
          l -= sG(s)
          let u = (function (e, r, n, o) {
              let i = lW(r, n),
                a = void 0 !== o.from ? o.from : e.get()
              return ('none' === a && i && 'string' == typeof n
                ? (a = s$(r, n))
                : lN(a) && 'string' == typeof n
                ? (a = lH(n))
                : !Array.isArray(n) &&
                  lN(n) &&
                  'string' == typeof a &&
                  (n = lH(a)),
              Array.isArray(n))
                ? (null === n[0] && (n[0] = a), n)
                : [a, n]
            })(r, e, n, a),
            c = u[0],
            d = u[u.length - 1],
            p = lW(e, c),
            h = lW(e, d)
          sq(
            p === h,
            `You are trying to animate ${e} from "${c}" to "${d}". ${c} is not an animatable value - to enable this animation set ${c} to a value animatable to ${d} via the \`style\` property.`
          )
          let f = {
            keyframes: u,
            velocity: r.getVelocity(),
            ...a,
            elapsed: l,
            onUpdate: (e) => {
              r.set(e), a.onUpdate && a.onUpdate(e)
            },
            onComplete: () => {
              i(), a.onComplete && a.onComplete()
            },
          }
          if (!p || !h || sX.current || !1 === a.type)
            return (function ({
              keyframes: e,
              elapsed: r,
              onUpdate: n,
              onComplete: o,
            }) {
              let i = () => {
                n && n(e[e.length - 1]), o && o()
              }
              return r ? { stop: lF(i, -r) } : i()
            })(f)
          if ('inertia' === a.type)
            return (function ({
              keyframes: e,
              velocity: r = 0,
              min: n,
              max: o,
              power: i = 0.8,
              timeConstant: a = 750,
              bounceStiffness: s = 500,
              bounceDamping: l = 10,
              restDelta: u = 1,
              modifyTarget: c,
              driver: d,
              onUpdate: p,
              onComplete: h,
              onStop: f,
            }) {
              let m
              let g = e[0]
              function b(e) {
                return (void 0 !== n && e < n) || (void 0 !== o && e > o)
              }
              function v(e) {
                return void 0 === n
                  ? o
                  : void 0 === o
                  ? n
                  : Math.abs(n - e) < Math.abs(o - e)
                  ? n
                  : o
              }
              function y(e) {
                null == m || m.stop(),
                  (m = lT({
                    keyframes: [0, 1],
                    velocity: 0,
                    ...e,
                    driver: d,
                    onUpdate: (r) => {
                      var n
                      null == p || p(r),
                        null === (n = e.onUpdate) ||
                          void 0 === n ||
                          n.call(e, r)
                    },
                    onComplete: h,
                    onStop: f,
                  }))
              }
              function x(e) {
                y({
                  type: 'spring',
                  stiffness: s,
                  damping: l,
                  restDelta: u,
                  ...e,
                })
              }
              if (b(g)) x({ velocity: r, keyframes: [g, v(g)] })
              else {
                let e,
                  o,
                  s = i * r + g
                void 0 !== c && (s = c(s))
                let l = v(s),
                  d = l === n ? -1 : 1,
                  p = (n) => {
                    ;(e = o),
                      (o = n),
                      (r = sp(n - e, a3.delta)),
                      ((1 === d && n > l) || (-1 === d && n < l)) &&
                        x({ keyframes: [n, l], velocity: r })
                  }
                y({
                  type: 'decay',
                  keyframes: [g, 0],
                  velocity: r,
                  timeConstant: a,
                  power: i,
                  restDelta: u,
                  modifyTarget: c,
                  onUpdate: b(s) ? p : void 0,
                })
              }
              return { stop: () => (null == m ? void 0 : m.stop()) }
            })(f)
          !(function ({
            when: e,
            delay: r,
            delayChildren: n,
            staggerChildren: o,
            staggerDirection: i,
            repeat: a,
            repeatType: s,
            repeatDelay: l,
            from: u,
            elapsed: c,
            ...d
          }) {
            return !!Object.keys(d).length
          })(a) && (f = { ...f, ...lV(e, f) }),
            f.duration && (f.duration = sG(f.duration)),
            f.repeatDelay && (f.repeatDelay = sG(f.repeatDelay))
          let m = r.owner,
            g = m && m.current
          if (
            m &&
            g instanceof HTMLElement &&
            !(null == m ? void 0 : m.getProps().onUpdate)
          ) {
            let n = (function (e, r, { onUpdate: n, onComplete: o, ...i }) {
              var a
              let s =
                lz.waapi() &&
                lL.has(r) &&
                !i.repeatDelay &&
                'mirror' !== i.repeatType &&
                0 !== i.damping
              if (!s) return !1
              let {
                keyframes: l,
                duration: u = 300,
                elapsed: c = 0,
                ease: d,
              } = i
              if (
                'spring' === i.type ||
                !(
                  !(a = i.ease) ||
                  Array.isArray(a) ||
                  ('string' == typeof a && lP[a])
                )
              ) {
                if (i.repeat === 1 / 0) return
                let e = lT({ ...i, elapsed: 0 }),
                  r = { done: !1, value: l[0] },
                  n = [],
                  o = 0
                for (; !r.done && o < 2e4; )
                  n.push((r = e.sample(o)).value), (o += 10)
                ;(l = n), (u = o - 10), (d = 'linear')
              }
              let p = (function (
                e,
                r,
                n,
                {
                  delay: o = 0,
                  duration: i,
                  repeat: a = 0,
                  repeatType: s = 'loop',
                  ease: l,
                  times: u,
                } = {}
              ) {
                return e.animate(
                  { [r]: n, offset: u },
                  {
                    delay: o,
                    duration: i,
                    easing: (function (e) {
                      if (e) return Array.isArray(e) ? lA(e) : lP[e]
                    })(l),
                    fill: 'both',
                    iterations: a + 1,
                    direction: 'reverse' === s ? 'alternate' : 'normal',
                  }
                )
              })(e.owner.current, r, l, {
                ...i,
                delay: -c,
                duration: u,
                ease: d,
              })
              return (
                (p.onfinish = () => {
                  e.set(
                    (function (e, { repeat: r, repeatType: n = 'loop' }) {
                      let o = r && 'loop' !== n && r % 2 == 1 ? 0 : e.length - 1
                      return e[o]
                    })(l, i)
                  ),
                    sn.update(() => p.cancel()),
                    o && o()
                }),
                {
                  get currentTime() {
                    return p.currentTime || 0
                  },
                  set currentTime(t) {
                    p.currentTime = t
                  },
                  stop: () => {
                    let { currentTime: r } = p
                    if (r) {
                      let n = lT({ ...i, autoplay: !1 })
                      e.setWithVelocity(
                        n.sample(r - 10).value,
                        n.sample(r).value,
                        10
                      )
                    }
                    sn.update(() => p.cancel())
                  },
                }
              )
            })(r, e, f)
            if (n) return n
          }
          return lT(f)
        }
      function lY(e, r, n = {}) {
        var o
        let i = sN(e, r, n.custom),
          { transition: a = e.getDefaultTransition() || {} } = i || {}
        n.transitionOverride && (a = n.transitionOverride)
        let s = i ? () => lG(e, i, n) : () => Promise.resolve(),
          l = (
            null === (o = e.variantChildren) || void 0 === o ? void 0 : o.size
          )
            ? (o = 0) => {
                let {
                  delayChildren: i = 0,
                  staggerChildren: s,
                  staggerDirection: l,
                } = a
                return (function (e, r, n = 0, o = 0, i = 1, a) {
                  let s = [],
                    l = (e.variantChildren.size - 1) * o,
                    u = 1 === i ? (e = 0) => e * o : (e = 0) => l - e * o
                  return (
                    Array.from(e.variantChildren)
                      .sort(lX)
                      .forEach((e, o) => {
                        e.notify('AnimationStart', r),
                          s.push(
                            lY(e, r, { ...a, delay: n + u(o) }).then(() =>
                              e.notify('AnimationComplete', r)
                            )
                          )
                      }),
                    Promise.all(s)
                  )
                })(e, r, i + o, s, l, n)
              }
            : () => Promise.resolve(),
          { when: u } = a
        if (!u) return Promise.all([s(), l(n.delay)])
        {
          let [e, r] = 'beforeChildren' === u ? [s, l] : [l, s]
          return e().then(r)
        }
      }
      function lG(e, r, { delay: n = 0, transitionOverride: o, type: i } = {}) {
        var a
        let {
            transition: s = e.getDefaultTransition(),
            transitionEnd: l,
            ...u
          } = e.makeTargetAnimatable(r),
          c = e.getValue('willChange')
        o && (s = o)
        let d = [],
          p =
            i &&
            (null === (a = e.animationState) || void 0 === a
              ? void 0
              : a.getState()[i])
        for (let r in u) {
          let o = e.getValue(r),
            i = u[r]
          if (
            !o ||
            void 0 === i ||
            (p &&
              (function ({ protectedKeys: e, needsAnimating: r }, n) {
                let o = e.hasOwnProperty(n) && !0 !== r[n]
                return (r[n] = !1), o
              })(p, r))
          )
            continue
          let a = { delay: n, elapsed: 0, ...s }
          if (window.HandoffAppearAnimations && !o.hasAnimated) {
            let n = e.getProps()[sU]
            n && (a.elapsed = window.HandoffAppearAnimations(n, r, o, sn))
          }
          let l = o.start(
            lq(r, o, i, e.shouldReduceMotion && iO.has(r) ? { type: !1 } : a)
          )
          sH(c) && (c.add(r), (l = l.then(() => c.remove(r)))), d.push(l)
        }
        return Promise.all(d).then(() => {
          l &&
            (function (e, r) {
              let n = sN(e, r),
                {
                  transitionEnd: o = {},
                  transition: i = {},
                  ...a
                } = n ? e.makeTargetAnimatable(n, !1) : {}
              for (let r in (a = { ...a, ...o })) {
                var s
                let n = aC(a[r])
                ;(s = r),
                  e.hasValue(s) ? e.getValue(s).set(n) : e.addValue(s, sm(n))
              }
            })(e, l)
        })
      }
      function lX(e, r) {
        return e.sortNodePosition(r)
      }
      let lZ = [P.Animate, P.InView, P.Focus, P.Hover, P.Tap, P.Drag, P.Exit],
        lK = [...lZ].reverse(),
        lJ = lZ.length
      function lQ(e = !1) {
        return {
          isActive: e,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        }
      }
      let l0 = {
          animation: aQ(({ visualElement: e, animate: r }) => {
            e.animationState ||
              (e.animationState = (function (e) {
                let r = (r) =>
                    Promise.all(
                      r.map(({ animation: r, options: n }) =>
                        (function (e, r, n = {}) {
                          let o
                          if (
                            (e.notify('AnimationStart', r), Array.isArray(r))
                          ) {
                            let i = r.map((r) => lY(e, r, n))
                            o = Promise.all(i)
                          } else if ('string' == typeof r) o = lY(e, r, n)
                          else {
                            let i =
                              'function' == typeof r ? sN(e, r, n.custom) : r
                            o = lG(e, i, n)
                          }
                          return o.then(() => e.notify('AnimationComplete', r))
                        })(e, r, n)
                      )
                    ),
                  n = {
                    [P.Animate]: lQ(!0),
                    [P.InView]: lQ(),
                    [P.Hover]: lQ(),
                    [P.Tap]: lQ(),
                    [P.Drag]: lQ(),
                    [P.Focus]: lQ(),
                    [P.Exit]: lQ(),
                  },
                  o = !0,
                  i = (r, n) => {
                    let o = sN(e, n)
                    if (o) {
                      let { transition: e, transitionEnd: n, ...i } = o
                      r = { ...r, ...i, ...n }
                    }
                    return r
                  }
                function a(a, s) {
                  let l = e.getProps(),
                    u = e.getVariantContext(!0) || {},
                    c = [],
                    d = new Set(),
                    p = {},
                    h = 1 / 0
                  for (let r = 0; r < lJ; r++) {
                    var f
                    let m = lK[r],
                      g = n[m],
                      b = void 0 !== l[m] ? l[m] : u[m],
                      v = ik(b),
                      y = m === s ? g.isActive : null
                    !1 === y && (h = r)
                    let x = b === u[m] && b !== l[m] && v
                    if (
                      (x && o && e.manuallyAnimateOnMount && (x = !1),
                      (g.protectedKeys = { ...p }),
                      (!g.isActive && null === y) ||
                        (!b && !g.prevProp) ||
                        iS(b) ||
                        'boolean' == typeof b)
                    )
                      continue
                    let k =
                        ((f = g.prevProp),
                        'string' == typeof b
                          ? b !== f
                          : !!Array.isArray(b) && !a1(b, f)),
                      S =
                        k || (m === s && g.isActive && !x && v) || (r > h && v),
                      w = Array.isArray(b) ? b : [b],
                      C = w.reduce(i, {})
                    !1 === y && (C = {})
                    let { prevResolvedValues: _ = {} } = g,
                      E = { ..._, ...C },
                      j = (e) => {
                        ;(S = !0), d.delete(e), (g.needsAnimating[e] = !0)
                      }
                    for (let e in E) {
                      let r = C[e],
                        n = _[e]
                      p.hasOwnProperty(e) ||
                        (r !== n
                          ? aS(r) && aS(n)
                            ? !a1(r, n) || k
                              ? j(e)
                              : (g.protectedKeys[e] = !0)
                            : void 0 !== r
                            ? j(e)
                            : d.add(e)
                          : void 0 !== r && d.has(e)
                          ? j(e)
                          : (g.protectedKeys[e] = !0))
                    }
                    ;(g.prevProp = b),
                      (g.prevResolvedValues = C),
                      g.isActive && (p = { ...p, ...C }),
                      o && e.blockInitialAnimation && (S = !1),
                      S &&
                        !x &&
                        c.push(
                          ...w.map((e) => ({
                            animation: e,
                            options: { type: m, ...a },
                          }))
                        )
                  }
                  if (d.size) {
                    let r = {}
                    d.forEach((n) => {
                      let o = e.getBaseTarget(n)
                      void 0 !== o && (r[n] = o)
                    }),
                      c.push({ animation: r })
                  }
                  let m = Boolean(c.length)
                  return (
                    o &&
                      !1 === l.initial &&
                      !e.manuallyAnimateOnMount &&
                      (m = !1),
                    (o = !1),
                    m ? r(c) : Promise.resolve()
                  )
                }
                return {
                  animateChanges: a,
                  setActive: function (r, o, i) {
                    var s
                    if (n[r].isActive === o) return Promise.resolve()
                    null === (s = e.variantChildren) ||
                      void 0 === s ||
                      s.forEach((e) => {
                        var n
                        return null === (n = e.animationState) || void 0 === n
                          ? void 0
                          : n.setActive(r, o)
                      }),
                      (n[r].isActive = o)
                    let l = a(i, r)
                    for (let e in n) n[e].protectedKeys = {}
                    return l
                  },
                  setAnimateFunction: function (n) {
                    r = n(e)
                  },
                  getState: () => n,
                }
              })(e)),
              iS(r) && (0, R.useEffect)(() => r.subscribe(e), [r])
          }),
          exit: aQ((e) => {
            let { custom: r, visualElement: n } = e,
              [o, i] = ih(),
              a = (0, R.useContext)(ip)
            ;(0, R.useEffect)(() => {
              n.isPresent = o
              let e =
                n.animationState &&
                n.animationState.setActive(P.Exit, !o, {
                  custom: (a && a.custom) || r,
                })
              e && !o && e.then(i)
            }, [o])
          }),
        },
        l1 = (e, r) => Math.abs(e - r)
      class l2 {
        constructor(e, r, { transformPagePoint: n } = {}) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return
              let e = l4(this.lastMoveEventInfo, this.history),
                r = null !== this.startEvent,
                n =
                  (function (e, r) {
                    let n = l1(e.x, r.x),
                      o = l1(e.y, r.y)
                    return Math.sqrt(n ** 2 + o ** 2)
                  })(e.offset, { x: 0, y: 0 }) >= 3
              if (!r && !n) return
              let { point: o } = e,
                { timestamp: i } = a3
              this.history.push({ ...o, timestamp: i })
              let { onStart: a, onMove: s } = this.handlers
              r ||
                (a && a(this.lastMoveEvent, e),
                (this.startEvent = this.lastMoveEvent)),
                s && s(this.lastMoveEvent, e)
            }),
            (this.handlePointerMove = (e, r) => {
              ;(this.lastMoveEvent = e),
                (this.lastMoveEventInfo = l5(r, this.transformPagePoint)),
                sn.update(this.updatePoint, !0)
            }),
            (this.handlePointerUp = (e, r) => {
              if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
                return
              let { onEnd: n, onSessionEnd: o } = this.handlers,
                i = l4(
                  'pointercancel' === e.type
                    ? this.lastMoveEventInfo
                    : l5(r, this.transformPagePoint),
                  this.history
                )
              this.startEvent && n && n(e, i), o && o(e, i)
            }),
            !aB(e))
          )
            return
          ;(this.handlers = r), (this.transformPagePoint = n)
          let o = aR(e),
            i = l5(o, this.transformPagePoint),
            { point: a } = i,
            { timestamp: s } = a3
          this.history = [{ ...a, timestamp: s }]
          let { onSessionStart: l } = r
          l && l(e, l4(i, this.history)),
            (this.removeListeners = aU(
              aL(window, 'pointermove', this.handlePointerMove),
              aL(window, 'pointerup', this.handlePointerUp),
              aL(window, 'pointercancel', this.handlePointerUp)
            ))
        }
        updateHandlers(e) {
          this.handlers = e
        }
        end() {
          this.removeListeners && this.removeListeners(),
            so.update(this.updatePoint)
        }
      }
      function l5(e, r) {
        return r ? { point: r(e.point) } : e
      }
      function l3(e, r) {
        return { x: e.x - r.x, y: e.y - r.y }
      }
      function l4({ point: e }, r) {
        return {
          point: e,
          delta: l3(e, l9(r)),
          offset: l3(e, r[0]),
          velocity: (function (e, r) {
            if (e.length < 2) return { x: 0, y: 0 }
            let n = e.length - 1,
              o = null,
              i = l9(e)
            for (
              ;
              n >= 0 && ((o = e[n]), !(i.timestamp - o.timestamp > sG(0.1)));

            )
              n--
            if (!o) return { x: 0, y: 0 }
            let a = (i.timestamp - o.timestamp) / 1e3
            if (0 === a) return { x: 0, y: 0 }
            let s = { x: (i.x - o.x) / a, y: (i.y - o.y) / a }
            return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s
          })(r, 0),
        }
      }
      function l9(e) {
        return e[e.length - 1]
      }
      function l6(e) {
        return e.max - e.min
      }
      function l8(e, r = 0, n = 0.01) {
        return Math.abs(e - r) <= n
      }
      function l7(e, r, n, o = 0.5) {
        ;(e.origin = o),
          (e.originPoint = s1(r.min, r.max, e.origin)),
          (e.scale = l6(n) / l6(r)),
          (l8(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
          (e.translate = s1(n.min, n.max, e.origin) - e.originPoint),
          (l8(e.translate) || isNaN(e.translate)) && (e.translate = 0)
      }
      function ue(e, r, n, o) {
        l7(e.x, r.x, n.x, null == o ? void 0 : o.originX),
          l7(e.y, r.y, n.y, null == o ? void 0 : o.originY)
      }
      function ut(e, r, n) {
        ;(e.min = n.min + r.min), (e.max = e.min + l6(r))
      }
      function ur(e, r, n) {
        ;(e.min = r.min - n.min), (e.max = e.min + l6(r))
      }
      function un(e, r, n) {
        ur(e.x, r.x, n.x), ur(e.y, r.y, n.y)
      }
      function uo(e, r, n) {
        return {
          min: void 0 !== r ? e.min + r : void 0,
          max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0,
        }
      }
      function ui(e, r) {
        let n = r.min - e.min,
          o = r.max - e.max
        return (
          r.max - r.min < e.max - e.min && ([n, o] = [o, n]), { min: n, max: o }
        )
      }
      function ua(e, r, n) {
        return { min: us(e, r), max: us(e, n) }
      }
      function us(e, r) {
        return 'number' == typeof e ? e : e[r] || 0
      }
      let ul = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        uu = () => ({ x: ul(), y: ul() }),
        uc = () => ({ min: 0, max: 0 }),
        ud = () => ({ x: uc(), y: uc() })
      function up(e) {
        return [e('x'), e('y')]
      }
      function uh({ top: e, left: r, right: n, bottom: o }) {
        return { x: { min: r, max: n }, y: { min: e, max: o } }
      }
      function uf(e) {
        return void 0 === e || 1 === e
      }
      function um({ scale: e, scaleX: r, scaleY: n }) {
        return !uf(e) || !uf(r) || !uf(n)
      }
      function ug(e) {
        return um(e) || ub(e) || e.z || e.rotate || e.rotateX || e.rotateY
      }
      function ub(e) {
        var r, n
        return ((r = e.x) && '0%' !== r) || ((n = e.y) && '0%' !== n)
      }
      function uv(e, r, n, o, i) {
        return void 0 !== i && (e = o + i * (e - o)), o + n * (e - o) + r
      }
      function uy(e, r = 0, n = 1, o, i) {
        ;(e.min = uv(e.min, r, n, o, i)), (e.max = uv(e.max, r, n, o, i))
      }
      function ux(e, { x: r, y: n }) {
        uy(e.x, r.translate, r.scale, r.originPoint),
          uy(e.y, n.translate, n.scale, n.originPoint)
      }
      function uk(e) {
        return Number.isInteger(e)
          ? e
          : e > 1.0000000000001 || e < 0.999999999999
          ? e
          : 1
      }
      function uS(e, r) {
        ;(e.min = e.min + r), (e.max = e.max + r)
      }
      function uw(e, r, [n, o, i]) {
        let a = void 0 !== r[i] ? r[i] : 0.5,
          s = s1(e.min, e.max, a)
        uy(e, r[n], r[o], s, r.scale)
      }
      let uC = ['x', 'scaleX', 'originX'],
        u_ = ['y', 'scaleY', 'originY']
      function uE(e, r) {
        uw(e.x, r, uC), uw(e.y, r, u_)
      }
      function uj(e, r) {
        return uh(
          (function (e, r) {
            if (!r) return e
            let n = r({ x: e.left, y: e.top }),
              o = r({ x: e.right, y: e.bottom })
            return { top: n.y, left: n.x, bottom: o.y, right: o.x }
          })(e.getBoundingClientRect(), r)
        )
      }
      let uT = new WeakMap()
      class uA {
        constructor(e) {
          ;(this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = ud()),
            (this.visualElement = e)
        }
        start(e, { snapToCursor: r = !1 } = {}) {
          if (!1 === this.visualElement.isPresent) return
          let n = (e) => {
              this.stopAnimation(), r && this.snapToCursor(aR(e, 'page').point)
            },
            o = (e, r) => {
              var n
              let {
                drag: o,
                dragPropagation: i,
                onDragStart: a,
              } = this.getProps()
              ;(!o ||
                i ||
                (this.openGlobalLock && this.openGlobalLock(),
                (this.openGlobalLock = aI(o)),
                this.openGlobalLock)) &&
                ((this.isDragging = !0),
                (this.currentDirection = null),
                this.resolveConstraints(),
                this.visualElement.projection &&
                  ((this.visualElement.projection.isAnimationBlocked = !0),
                  (this.visualElement.projection.target = void 0)),
                up((e) => {
                  var r, n
                  let o = this.getAxisMotionValue(e).get() || 0
                  if (i3.test(o)) {
                    let i =
                      null ===
                        (n =
                          null === (r = this.visualElement.projection) ||
                          void 0 === r
                            ? void 0
                            : r.layout) || void 0 === n
                        ? void 0
                        : n.layoutBox[e]
                    if (i) {
                      let e = l6(i)
                      o = e * (parseFloat(o) / 100)
                    }
                  }
                  this.originPoint[e] = o
                }),
                null == a || a(e, r),
                null === (n = this.visualElement.animationState) ||
                  void 0 === n ||
                  n.setActive(P.Drag, !0))
            },
            i = (e, r) => {
              let {
                dragPropagation: n,
                dragDirectionLock: o,
                onDirectionLock: i,
                onDrag: a,
              } = this.getProps()
              if (!n && !this.openGlobalLock) return
              let { offset: s } = r
              if (o && null === this.currentDirection) {
                ;(this.currentDirection = (function (e, r = 10) {
                  let n = null
                  return (
                    Math.abs(e.y) > r
                      ? (n = 'y')
                      : Math.abs(e.x) > r && (n = 'x'),
                    n
                  )
                })(s)),
                  null !== this.currentDirection &&
                    (null == i || i(this.currentDirection))
                return
              }
              this.updateAxis('x', r.point, s),
                this.updateAxis('y', r.point, s),
                this.visualElement.render(),
                null == a || a(e, r)
            },
            a = (e, r) => this.stop(e, r)
          this.panSession = new l2(
            e,
            { onSessionStart: n, onStart: o, onMove: i, onSessionEnd: a },
            { transformPagePoint: this.visualElement.getTransformPagePoint() }
          )
        }
        stop(e, r) {
          let n = this.isDragging
          if ((this.cancel(), !n)) return
          let { velocity: o } = r
          this.startAnimation(o)
          let { onDragEnd: i } = this.getProps()
          null == i || i(e, r)
        }
        cancel() {
          var e, r
          ;(this.isDragging = !1),
            this.visualElement.projection &&
              (this.visualElement.projection.isAnimationBlocked = !1),
            null === (e = this.panSession) || void 0 === e || e.end(),
            (this.panSession = void 0)
          let { dragPropagation: n } = this.getProps()
          !n &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            null === (r = this.visualElement.animationState) ||
              void 0 === r ||
              r.setActive(P.Drag, !1)
        }
        updateAxis(e, r, n) {
          let { drag: o } = this.getProps()
          if (!n || !uP(e, o, this.currentDirection)) return
          let i = this.getAxisMotionValue(e),
            a = this.originPoint[e] + n[e]
          this.constraints &&
            this.constraints[e] &&
            (a = (function (e, { min: r, max: n }, o) {
              return (
                void 0 !== r && e < r
                  ? (e = o ? s1(r, e, o.min) : Math.max(e, r))
                  : void 0 !== n &&
                    e > n &&
                    (e = o ? s1(n, e, o.max) : Math.min(e, n)),
                e
              )
            })(a, this.constraints[e], this.elastic[e])),
            i.set(a)
        }
        resolveConstraints() {
          let { dragConstraints: e, dragElastic: r } = this.getProps(),
            { layout: n } = this.visualElement.projection || {},
            o = this.constraints
          e && ix(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && n
            ? (this.constraints = (function (
                e,
                { top: r, left: n, bottom: o, right: i }
              ) {
                return { x: uo(e.x, n, i), y: uo(e.y, r, o) }
              })(n.layoutBox, e))
            : (this.constraints = !1),
            (this.elastic = (function (e = 0.35) {
              return (
                !1 === e ? (e = 0) : !0 === e && (e = 0.35),
                { x: ua(e, 'left', 'right'), y: ua(e, 'top', 'bottom') }
              )
            })(r)),
            o !== this.constraints &&
              n &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              up((e) => {
                this.getAxisMotionValue(e) &&
                  (this.constraints[e] = (function (e, r) {
                    let n = {}
                    return (
                      void 0 !== r.min && (n.min = r.min - e.min),
                      void 0 !== r.max && (n.max = r.max - e.min),
                      n
                    )
                  })(n.layoutBox[e], this.constraints[e]))
              })
        }
        resolveRefConstraints() {
          var e
          let { dragConstraints: r, onMeasureDragConstraints: n } =
            this.getProps()
          if (!r || !ix(r)) return !1
          let o = r.current
          sY(
            null !== o,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          )
          let { projection: i } = this.visualElement
          if (!i || !i.layout) return !1
          let a = (function (e, r, n) {
              let o = uj(e, n),
                { scroll: i } = r
              return i && (uS(o.x, i.offset.x), uS(o.y, i.offset.y)), o
            })(o, i.root, this.visualElement.getTransformPagePoint()),
            s = { x: ui((e = i.layout.layoutBox).x, a.x), y: ui(e.y, a.y) }
          if (n) {
            let e = n(
              (function ({ x: e, y: r }) {
                return { top: r.min, right: e.max, bottom: r.max, left: e.min }
              })(s)
            )
            ;(this.hasMutatedConstraints = !!e), e && (s = uh(e))
          }
          return s
        }
        startAnimation(e) {
          let {
              drag: r,
              dragMomentum: n,
              dragElastic: o,
              dragTransition: i,
              dragSnapToOrigin: a,
              onDragTransitionEnd: s,
            } = this.getProps(),
            l = this.constraints || {},
            u = up((s) => {
              if (!uP(s, r, this.currentDirection)) return
              let u = (null == l ? void 0 : l[s]) || {}
              a && (u = { min: 0, max: 0 })
              let c = {
                type: 'inertia',
                velocity: n ? e[s] : 0,
                bounceStiffness: o ? 200 : 1e6,
                bounceDamping: o ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...i,
                ...u,
              }
              return this.startAxisValueAnimation(s, c)
            })
          return Promise.all(u).then(s)
        }
        startAxisValueAnimation(e, r) {
          let n = this.getAxisMotionValue(e)
          return n.start(lq(e, n, 0, r))
        }
        stopAnimation() {
          up((e) => this.getAxisMotionValue(e).stop())
        }
        getAxisMotionValue(e) {
          var r
          let n = '_drag' + e.toUpperCase(),
            o = this.visualElement.getProps()[n]
          return (
            o ||
            this.visualElement.getValue(
              e,
              (null === (r = this.visualElement.getProps().initial) ||
              void 0 === r
                ? void 0
                : r[e]) || 0
            )
          )
        }
        snapToCursor(e) {
          up((r) => {
            let { drag: n } = this.getProps()
            if (!uP(r, n, this.currentDirection)) return
            let { projection: o } = this.visualElement,
              i = this.getAxisMotionValue(r)
            if (o && o.layout) {
              let { min: n, max: a } = o.layout.layoutBox[r]
              i.set(e[r] - s1(n, a, 0.5))
            }
          })
        }
        scalePositionWithinConstraints() {
          var e
          if (!this.visualElement.current) return
          let { drag: r, dragConstraints: n } = this.getProps(),
            { projection: o } = this.visualElement
          if (!ix(n) || !o || !this.constraints) return
          this.stopAnimation()
          let i = { x: 0, y: 0 }
          up((e) => {
            let r = this.getAxisMotionValue(e)
            if (r) {
              let n = r.get()
              i[e] = (function (e, r) {
                let n = 0.5,
                  o = l6(e),
                  i = l6(r)
                return (
                  i > o
                    ? (n = lr(r.min, r.max - o, e.min))
                    : o > i && (n = lr(e.min, e.max - i, r.min)),
                  iY(0, 1, n)
                )
              })({ min: n, max: n }, this.constraints[e])
            }
          })
          let { transformTemplate: a } = this.visualElement.getProps()
          ;(this.visualElement.current.style.transform = a
            ? a({}, '')
            : 'none'),
            null === (e = o.root) || void 0 === e || e.updateScroll(),
            o.updateLayout(),
            this.resolveConstraints(),
            up((e) => {
              if (!uP(e, r, null)) return
              let n = this.getAxisMotionValue(e),
                { min: o, max: a } = this.constraints[e]
              n.set(s1(o, a, i[e]))
            })
        }
        addListeners() {
          var e
          if (!this.visualElement.current) return
          uT.set(this.visualElement, this)
          let r = this.visualElement.current,
            n = aL(r, 'pointerdown', (e) => {
              let { drag: r, dragListener: n = !0 } = this.getProps()
              r && n && this.start(e)
            }),
            o = () => {
              let { dragConstraints: e } = this.getProps()
              ix(e) && (this.constraints = this.resolveRefConstraints())
            },
            { projection: i } = this.visualElement,
            a = i.addEventListener('measure', o)
          i &&
            !i.layout &&
            (null === (e = i.root) || void 0 === e || e.updateScroll(),
            i.updateLayout()),
            o()
          let s = aA(window, 'resize', () =>
              this.scalePositionWithinConstraints()
            ),
            l = i.addEventListener(
              'didUpdate',
              ({ delta: e, hasLayoutChanged: r }) => {
                this.isDragging &&
                  r &&
                  (up((r) => {
                    let n = this.getAxisMotionValue(r)
                    n &&
                      ((this.originPoint[r] += e[r].translate),
                      n.set(n.get() + e[r].translate))
                  }),
                  this.visualElement.render())
              }
            )
          return () => {
            s(), n(), a(), null == l || l()
          }
        }
        getProps() {
          let e = this.visualElement.getProps(),
            {
              drag: r = !1,
              dragDirectionLock: n = !1,
              dragPropagation: o = !1,
              dragConstraints: i = !1,
              dragElastic: a = 0.35,
              dragMomentum: s = !0,
            } = e
          return {
            ...e,
            drag: r,
            dragDirectionLock: n,
            dragPropagation: o,
            dragConstraints: i,
            dragElastic: a,
            dragMomentum: s,
          }
        }
      }
      function uP(e, r, n) {
        return (!0 === r || r === e) && (null === n || n === e)
      }
      let uB = {
        pan: aQ(function ({
          onPan: e,
          onPanStart: r,
          onPanEnd: n,
          onPanSessionStart: o,
          visualElement: i,
        }) {
          let a = (0, R.useRef)(null),
            { transformPagePoint: s } = (0, R.useContext)(im),
            l = {
              onSessionStart: o,
              onStart: r,
              onMove: e,
              onEnd: (e, r) => {
                ;(a.current = null), n && n(e, r)
              },
            }
          ;(0, R.useEffect)(() => {
            null !== a.current && a.current.updateHandlers(l)
          }),
            aF(
              i,
              'pointerdown',
              (e || r || n || o) &&
                function (e) {
                  a.current = new l2(e, l, { transformPagePoint: s })
                }
            ),
            aN(() => a.current && a.current.end())
        }),
        drag: aQ(function (e) {
          let { dragControls: r, visualElement: n } = e,
            o = iA(() => new uA(n))
          ;(0, R.useEffect)(() => r && r.subscribe(o), [o, r]),
            (0, R.useEffect)(() => o.addListeners(), [o])
        }),
      }
      function uR(e) {
        return 'string' == typeof e && e.startsWith('var(--')
      }
      let uz = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/
      function uL(e, r, n = 1) {
        sY(
          n <= 4,
          `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
        )
        let [o, i] = (function (e) {
          let r = uz.exec(e)
          if (!r) return [,]
          let [, n, o] = r
          return [n, o]
        })(e)
        if (!o) return
        let a = window.getComputedStyle(r).getPropertyValue(o)
        return a ? a.trim() : uR(i) ? uL(i, r, n + 1) : i
      }
      let uF = new Set([
          'width',
          'height',
          'top',
          'left',
          'right',
          'bottom',
          'x',
          'y',
        ]),
        uM = (e) => uF.has(e),
        u$ = (e) => Object.keys(e).some(uM),
        uD = (e) => e === iG || e === i4
      ;((a = B || (B = {})).width = 'width'),
        (a.height = 'height'),
        (a.left = 'left'),
        (a.right = 'right'),
        (a.top = 'top'),
        (a.bottom = 'bottom')
      let uI = (e, r) => parseFloat(e.split(', ')[r]),
        uO =
          (e, r) =>
          (n, { transform: o }) => {
            if ('none' === o || !o) return 0
            let i = o.match(/^matrix3d\((.+)\)$/)
            if (i) return uI(i[1], r)
            {
              let r = o.match(/^matrix\((.+)\)$/)
              return r ? uI(r[1], e) : 0
            }
          },
        uV = new Set(['x', 'y', 'z']),
        uW = iI.filter((e) => !uV.has(e)),
        uN = {
          width: ({ x: e }, { paddingLeft: r = '0', paddingRight: n = '0' }) =>
            e.max - e.min - parseFloat(r) - parseFloat(n),
          height: ({ y: e }, { paddingTop: r = '0', paddingBottom: n = '0' }) =>
            e.max - e.min - parseFloat(r) - parseFloat(n),
          top: (e, { top: r }) => parseFloat(r),
          left: (e, { left: r }) => parseFloat(r),
          bottom: ({ y: e }, { top: r }) => parseFloat(r) + (e.max - e.min),
          right: ({ x: e }, { left: r }) => parseFloat(r) + (e.max - e.min),
          x: uO(4, 13),
          y: uO(5, 14),
        },
        uH = (e, r, n) => {
          let o = r.measureViewportBox(),
            i = r.current,
            a = getComputedStyle(i),
            { display: s } = a,
            l = {}
          'none' === s && r.setStaticValue('display', e.display || 'block'),
            n.forEach((e) => {
              l[e] = uN[e](o, a)
            }),
            r.render()
          let u = r.measureViewportBox()
          return (
            n.forEach((n) => {
              let o = r.getValue(n)
              o && o.jump(l[n]), (e[n] = uN[n](u, a))
            }),
            e
          )
        },
        uU = (e, r, n = {}, o = {}) => {
          ;(r = { ...r }), (o = { ...o })
          let i = Object.keys(r).filter(uM),
            a = [],
            s = !1,
            l = []
          if (
            (i.forEach((i) => {
              let u
              let c = e.getValue(i)
              if (!e.hasValue(i)) return
              let d = n[i],
                p = sO(d),
                h = r[i]
              if (aS(h)) {
                let e = h.length,
                  r = null === h[0] ? 1 : 0
                p = sO((d = h[r]))
                for (let n = r; n < e; n++)
                  u
                    ? sY(
                        sO(h[n]) === u,
                        'All keyframes must be of the same type'
                      )
                    : sY(
                        (u = sO(h[n])) === p || (uD(p) && uD(u)),
                        'Keyframes must be of the same dimension as the current value'
                      )
              } else u = sO(h)
              if (p !== u) {
                if (uD(p) && uD(u)) {
                  let e = c.get()
                  'string' == typeof e && c.set(parseFloat(e)),
                    'string' == typeof h
                      ? (r[i] = parseFloat(h))
                      : Array.isArray(h) &&
                        u === i4 &&
                        (r[i] = h.map(parseFloat))
                } else
                  (null == p ? void 0 : p.transform) &&
                  (null == u ? void 0 : u.transform) &&
                  (0 === d || 0 === h)
                    ? 0 === d
                      ? c.set(u.transform(d))
                      : (r[i] = p.transform(h))
                    : (s ||
                        ((a = (function (e) {
                          let r = []
                          return (
                            uW.forEach((n) => {
                              let o = e.getValue(n)
                              void 0 !== o &&
                                (r.push([n, o.get()]),
                                o.set(n.startsWith('scale') ? 1 : 0))
                            }),
                            r.length && e.render(),
                            r
                          )
                        })(e)),
                        (s = !0)),
                      l.push(i),
                      (o[i] = void 0 !== o[i] ? o[i] : r[i]),
                      c.jump(h))
              }
            }),
            !l.length)
          )
            return { target: r, transitionEnd: o }
          {
            let n = l.indexOf('height') >= 0 ? window.pageYOffset : null,
              i = uH(r, e, l)
            return (
              a.length &&
                a.forEach(([r, n]) => {
                  e.getValue(r).set(n)
                }),
              e.render(),
              ib && null !== n && window.scrollTo({ top: n }),
              { target: i, transitionEnd: o }
            )
          }
        },
        uq = (e, r, n, o) => {
          var i, a
          let s = (function (e, { ...r }, n) {
            let o = e.current
            if (!(o instanceof Element)) return { target: r, transitionEnd: n }
            for (let i in (n && (n = { ...n }),
            e.values.forEach((e) => {
              let r = e.get()
              if (!uR(r)) return
              let n = uL(r, o)
              n && e.set(n)
            }),
            r)) {
              let e = r[i]
              if (!uR(e)) continue
              let a = uL(e, o)
              a && ((r[i] = a), n && void 0 === n[i] && (n[i] = e))
            }
            return { target: r, transitionEnd: n }
          })(e, r, o)
          return (
            (r = s.target),
            (o = s.transitionEnd),
            (i = r),
            (a = o),
            u$(i) ? uU(e, i, n, a) : { target: i, transitionEnd: a }
          )
        },
        uY = { current: null },
        uG = { current: !1 },
        uX = Object.keys(iT),
        uZ = uX.length,
        uK = [
          'AnimationStart',
          'AnimationComplete',
          'Update',
          'BeforeLayoutMeasure',
          'LayoutMeasure',
          'LayoutAnimationStart',
          'LayoutAnimationComplete',
        ]
      class uJ {
        constructor(
          { parent: e, props: r, reducedMotionConfig: n, visualState: o },
          i = {}
        ) {
          ;(this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.isPresent = !0),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify('Update', this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ))
            }),
            (this.scheduleRender = () => sn.render(this.render, !1, !0))
          let { latestValues: a, renderState: s } = o
          ;(this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = r.initial ? { ...a } : {}),
            (this.renderState = s),
            (this.parent = e),
            (this.props = r),
            (this.depth = e ? e.depth + 1 : 0),
            (this.reducedMotionConfig = n),
            (this.options = i),
            (this.isControllingVariants = iC(r)),
            (this.isVariantNode = i_(r)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = Boolean(e && e.current))
          let { willChange: l, ...u } = this.scrapeMotionValuesFromProps(r, {})
          for (let e in u) {
            let r = u[e]
            void 0 !== a[e] && iW(r) && (r.set(a[e], !1), sH(l) && l.add(e))
          }
        }
        scrapeMotionValuesFromProps(e, r) {
          return {}
        }
        mount(e) {
          var r
          ;(this.current = e),
            this.projection && this.projection.mount(e),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree =
                null === (r = this.parent) || void 0 === r
                  ? void 0
                  : r.addVariantChild(this)),
            this.values.forEach((e, r) => this.bindToMotionValue(r, e)),
            uG.current ||
              (function () {
                if (((uG.current = !0), ib)) {
                  if (window.matchMedia) {
                    let e = window.matchMedia('(prefers-reduced-motion)'),
                      r = () => (uY.current = e.matches)
                    e.addListener(r), r()
                  } else uY.current = !1
                }
              })(),
            (this.shouldReduceMotion =
              'never' !== this.reducedMotionConfig &&
              ('always' === this.reducedMotionConfig || uY.current)),
            this.parent && this.parent.children.add(this),
            this.setProps(this.props)
        }
        unmount() {
          var e, r, n
          for (let o in (null === (e = this.projection) ||
            void 0 === e ||
            e.unmount(),
          so.update(this.notifyUpdate),
          so.render(this.render),
          this.valueSubscriptions.forEach((e) => e()),
          null === (r = this.removeFromVariantTree) ||
            void 0 === r ||
            r.call(this),
          null === (n = this.parent) || void 0 === n || n.children.delete(this),
          this.events))
            this.events[o].clear()
          this.current = null
        }
        bindToMotionValue(e, r) {
          let n = iO.has(e),
            o = r.on('change', (r) => {
              ;(this.latestValues[e] = r),
                this.props.onUpdate && sn.update(this.notifyUpdate, !1, !0),
                n && this.projection && (this.projection.isTransformDirty = !0)
            }),
            i = r.on('renderRequest', this.scheduleRender)
          this.valueSubscriptions.set(e, () => {
            o(), i()
          })
        }
        sortNodePosition(e) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === e.type
            ? this.sortInstanceNodePosition(this.current, e.current)
            : 0
        }
        loadFeatures({ children: e, ...r }, n, o, i, a, s) {
          let l = []
          for (let e = 0; e < uZ; e++) {
            let n = uX[e],
              { isEnabled: o, Component: i } = iT[n]
            o(r) &&
              i &&
              l.push(
                (0, R.createElement)(i, { key: n, ...r, visualElement: this })
              )
          }
          if (!this.projection && a) {
            this.projection = new a(
              i,
              this.latestValues,
              this.parent && this.parent.projection
            )
            let {
              layoutId: e,
              layout: n,
              drag: o,
              dragConstraints: l,
              layoutScroll: u,
              layoutRoot: c,
            } = r
            this.projection.setOptions({
              layoutId: e,
              layout: n,
              alwaysMeasureLayout: Boolean(o) || (l && ix(l)),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: 'string' == typeof n ? n : 'both',
              initialPromotionConfig: s,
              layoutScroll: u,
              layoutRoot: c,
            })
          }
          return l
        }
        triggerBuild() {
          this.build(
            this.renderState,
            this.latestValues,
            this.options,
            this.props
          )
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : ud()
        }
        getStaticValue(e) {
          return this.latestValues[e]
        }
        setStaticValue(e, r) {
          this.latestValues[e] = r
        }
        makeTargetAnimatable(e, r = !0) {
          return this.makeTargetAnimatableFromInstance(e, this.props, r)
        }
        setProps(e) {
          ;(e.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender()
          let r = this.props
          this.props = e
          for (let r = 0; r < uK.length; r++) {
            let n = uK[r]
            this.propEventSubscriptions[n] &&
              (this.propEventSubscriptions[n](),
              delete this.propEventSubscriptions[n])
            let o = e['on' + n]
            o && (this.propEventSubscriptions[n] = this.on(n, o))
          }
          ;(this.prevMotionValues = (function (e, r, n) {
            let { willChange: o } = r
            for (let i in r) {
              let a = r[i],
                s = n[i]
              if (iW(a)) e.addValue(i, a), sH(o) && o.add(i)
              else if (iW(s))
                e.addValue(i, sm(a, { owner: e })), sH(o) && o.remove(i)
              else if (s !== a) {
                if (e.hasValue(i)) {
                  let r = e.getValue(i)
                  r.hasAnimated || r.set(a)
                } else {
                  let r = e.getStaticValue(i)
                  e.addValue(i, sm(void 0 !== r ? r : a, { owner: e }))
                }
              }
            }
            for (let o in n) void 0 === r[o] && e.removeValue(o)
            return r
          })(
            this,
            this.scrapeMotionValuesFromProps(e, r),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue()
        }
        getProps() {
          return this.props
        }
        getVariant(e) {
          var r
          return null === (r = this.props.variants) || void 0 === r
            ? void 0
            : r[e]
        }
        getDefaultTransition() {
          return this.props.transition
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint
        }
        getClosestVariantNode() {
          var e
          return this.isVariantNode
            ? this
            : null === (e = this.parent) || void 0 === e
            ? void 0
            : e.getClosestVariantNode()
        }
        getVariantContext(e = !1) {
          var r, n
          if (e)
            return null === (r = this.parent) || void 0 === r
              ? void 0
              : r.getVariantContext()
          if (!this.isControllingVariants) {
            let e =
              (null === (n = this.parent) || void 0 === n
                ? void 0
                : n.getVariantContext()) || {}
            return (
              void 0 !== this.props.initial && (e.initial = this.props.initial),
              e
            )
          }
          let o = {}
          for (let e = 0; e < u0; e++) {
            let r = uQ[e],
              n = this.props[r]
            ;(ik(n) || !1 === n) && (o[r] = n)
          }
          return o
        }
        addVariantChild(e) {
          var r
          let n = this.getClosestVariantNode()
          if (n)
            return (
              null === (r = n.variantChildren) || void 0 === r || r.add(e),
              () => n.variantChildren.delete(e)
            )
        }
        addValue(e, r) {
          r !== this.values.get(e) &&
            (this.removeValue(e), this.bindToMotionValue(e, r)),
            this.values.set(e, r),
            (this.latestValues[e] = r.get())
        }
        removeValue(e) {
          var r
          this.values.delete(e),
            null === (r = this.valueSubscriptions.get(e)) ||
              void 0 === r ||
              r(),
            this.valueSubscriptions.delete(e),
            delete this.latestValues[e],
            this.removeValueFromRenderState(e, this.renderState)
        }
        hasValue(e) {
          return this.values.has(e)
        }
        getValue(e, r) {
          if (this.props.values && this.props.values[e])
            return this.props.values[e]
          let n = this.values.get(e)
          return (
            void 0 === n &&
              void 0 !== r &&
              ((n = sm(r, { owner: this })), this.addValue(e, n)),
            n
          )
        }
        readValue(e) {
          return void 0 === this.latestValues[e] && this.current
            ? this.readValueFromInstance(this.current, e, this.options)
            : this.latestValues[e]
        }
        setBaseTarget(e, r) {
          this.baseTarget[e] = r
        }
        getBaseTarget(e) {
          var r
          let { initial: n } = this.props,
            o =
              'string' == typeof n || 'object' == typeof n
                ? null === (r = ak(this.props, n)) || void 0 === r
                  ? void 0
                  : r[e]
                : void 0
          if (n && void 0 !== o) return o
          let i = this.getBaseTargetFromProps(this.props, e)
          return void 0 === i || iW(i)
            ? void 0 !== this.initialValues[e] && void 0 === o
              ? void 0
              : this.baseTarget[e]
            : i
        }
        on(e, r) {
          return (
            this.events[e] || (this.events[e] = new sd()), this.events[e].add(r)
          )
        }
        notify(e, ...r) {
          var n
          null === (n = this.events[e]) || void 0 === n || n.notify(...r)
        }
      }
      let uQ = ['initial', ...lZ],
        u0 = uQ.length
      class u1 extends uJ {
        sortInstanceNodePosition(e, r) {
          return 2 & e.compareDocumentPosition(r) ? 1 : -1
        }
        getBaseTargetFromProps(e, r) {
          var n
          return null === (n = e.style) || void 0 === n ? void 0 : n[r]
        }
        removeValueFromRenderState(e, { vars: r, style: n }) {
          delete r[e], delete n[e]
        }
        makeTargetAnimatableFromInstance(
          { transition: e, transitionEnd: r, ...n },
          { transformValues: o },
          i
        ) {
          let a = (function (e, r, n) {
            var o
            let i = {}
            for (let a in e) {
              let e = (function (e, r) {
                if (!r) return
                let n = r[e] || r.default || r
                return n.from
              })(a, r)
              i[a] =
                void 0 !== e
                  ? e
                  : null === (o = n.getValue(a)) || void 0 === o
                  ? void 0
                  : o.get()
            }
            return i
          })(n, e || {}, this)
          if ((o && (r && (r = o(r)), n && (n = o(n)), a && (a = o(a))), i)) {
            !(function (e, r, n) {
              var o, i
              let a = Object.keys(r).filter((r) => !e.hasValue(r)),
                s = a.length
              if (s)
                for (let l = 0; l < s; l++) {
                  let s = a[l],
                    u = r[s],
                    c = null
                  Array.isArray(u) && (c = u[0]),
                    null === c &&
                      (c =
                        null !==
                          (i =
                            null !== (o = n[s]) && void 0 !== o
                              ? o
                              : e.readValue(s)) && void 0 !== i
                          ? i
                          : r[s]),
                    null != c &&
                      ('string' == typeof c && (a2(c) || a5(c))
                        ? (c = parseFloat(c))
                        : !sW(c) && sP.test(u) && (c = s$(s, u)),
                      e.addValue(s, sm(c, { owner: e })),
                      void 0 === n[s] && (n[s] = c),
                      null !== c && e.setBaseTarget(s, c))
                }
            })(this, n, a)
            let e = uq(this, n, a, r)
            ;(r = e.transitionEnd), (n = e.target)
          }
          return { transition: e, transitionEnd: r, ...n }
        }
      }
      class u2 extends u1 {
        readValueFromInstance(e, r) {
          if (iO.has(r)) {
            let e = sM(r)
            return (e && e.default) || 0
          }
          {
            let n = window.getComputedStyle(e),
              o = (iU(r) ? n.getPropertyValue(r) : n[r]) || 0
            return 'string' == typeof o ? o.trim() : o
          }
        }
        measureInstanceViewportBox(e, { transformPagePoint: r }) {
          return uj(e, r)
        }
        build(e, r, n, o) {
          at(e, r, n, o.transformTemplate)
        }
        scrapeMotionValuesFromProps(e, r) {
          return ay(e, r)
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription)
          let { children: e } = this.props
          iW(e) &&
            (this.childSubscription = e.on('change', (e) => {
              this.current && (this.current.textContent = `${e}`)
            }))
        }
        renderInstance(e, r, n, o) {
          ag(e, r, n, o)
        }
      }
      class u5 extends u1 {
        constructor() {
          super(...arguments), (this.isSVGTag = !1)
        }
        getBaseTargetFromProps(e, r) {
          return e[r]
        }
        readValueFromInstance(e, r) {
          var n
          return iO.has(r)
            ? (null === (n = sM(r)) || void 0 === n ? void 0 : n.default) || 0
            : ((r = ab.has(r) ? r : am(r)), e.getAttribute(r))
        }
        measureInstanceViewportBox() {
          return ud()
        }
        scrapeMotionValuesFromProps(e, r) {
          return ax(e, r)
        }
        build(e, r, n, o) {
          ad(e, r, n, this.isSVGTag, o.transformTemplate)
        }
        renderInstance(e, r, n, o) {
          av(e, r, n, o)
        }
        mount(e) {
          ;(this.isSVGTag = ah(e.tagName)), super.mount(e)
        }
      }
      let u3 = (e, r) =>
        i$(e)
          ? new u5(r, { enableHardwareAcceleration: !1 })
          : new u2(r, { enableHardwareAcceleration: !0 })
      function u4(e, r) {
        return r.max === r.min ? 0 : (e / (r.max - r.min)) * 100
      }
      let u9 = {
          correct: (e, r) => {
            if (!r.target) return e
            if ('string' == typeof e) {
              if (!i4.test(e)) return e
              e = parseFloat(e)
            }
            let n = u4(e, r.target.x),
              o = u4(e, r.target.y)
            return `${n}% ${o}%`
          },
        },
        u6 = '_$css',
        u8 = {
          correct: (e, { treeScale: r, projectionDelta: n }) => {
            let o = e,
              i = e.includes('var('),
              a = []
            i && (e = e.replace(uz, (e) => (a.push(e), u6)))
            let s = sP.parse(e)
            if (s.length > 5) return o
            let l = sP.createTransformer(e),
              u = 'number' != typeof s[0] ? 1 : 0,
              c = n.x.scale * r.x,
              d = n.y.scale * r.y
            ;(s[0 + u] /= c), (s[1 + u] /= d)
            let p = s1(c, d, 0.5)
            'number' == typeof s[2 + u] && (s[2 + u] /= p),
              'number' == typeof s[3 + u] && (s[3 + u] /= p)
            let h = l(s)
            if (i) {
              let e = 0
              h = h.replace(u6, () => {
                let r = a[e]
                return e++, r
              })
            }
            return h
          },
        }
      class u7 extends R.Component {
        componentDidMount() {
          let {
              visualElement: e,
              layoutGroup: r,
              switchLayoutGroup: n,
              layoutId: o,
            } = this.props,
            { projection: i } = e
          Object.assign(iD, ce),
            i &&
              (r.group && r.group.add(i),
              n && n.register && o && n.register(i),
              i.root.didUpdate(),
              i.addEventListener('animationComplete', () => {
                this.safeToRemove()
              }),
              i.setOptions({
                ...i.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (iP.hasEverUpdated = !0)
        }
        getSnapshotBeforeUpdate(e) {
          let {
              layoutDependency: r,
              visualElement: n,
              drag: o,
              isPresent: i,
            } = this.props,
            a = n.projection
          return (
            a &&
              ((a.isPresent = i),
              o || e.layoutDependency !== r || void 0 === r
                ? a.willUpdate()
                : this.safeToRemove(),
              e.isPresent === i ||
                (i
                  ? a.promote()
                  : a.relegate() ||
                    sn.postRender(() => {
                      var e
                      ;(null === (e = a.getStack()) || void 0 === e
                        ? void 0
                        : e.members.length) || this.safeToRemove()
                    }))),
            null
          )
        }
        componentDidUpdate() {
          let { projection: e } = this.props.visualElement
          e &&
            (e.root.didUpdate(),
            !e.currentAnimation && e.isLead() && this.safeToRemove())
        }
        componentWillUnmount() {
          let {
              visualElement: e,
              layoutGroup: r,
              switchLayoutGroup: n,
            } = this.props,
            { projection: o } = e
          o &&
            (o.scheduleCheckAfterUnmount(),
            (null == r ? void 0 : r.group) && r.group.remove(o),
            (null == n ? void 0 : n.deregister) && n.deregister(o))
        }
        safeToRemove() {
          let { safeToRemove: e } = this.props
          null == e || e()
        }
        render() {
          return null
        }
      }
      let ce = {
          borderRadius: {
            ...u9,
            applyTo: [
              'borderTopLeftRadius',
              'borderTopRightRadius',
              'borderBottomLeftRadius',
              'borderBottomRightRadius',
            ],
          },
          borderTopLeftRadius: u9,
          borderTopRightRadius: u9,
          borderBottomLeftRadius: u9,
          borderBottomRightRadius: u9,
          boxShadow: u8,
        },
        ct = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
        cr = ct.length,
        cn = (e) => ('string' == typeof e ? parseFloat(e) : e),
        co = (e) => 'number' == typeof e || i4.test(e)
      function ci(e, r) {
        return void 0 !== e[r] ? e[r] : e.borderRadius
      }
      let ca = cl(0, 0.5, lu),
        cs = cl(0.5, 0.95, li)
      function cl(e, r, n) {
        return (o) => (o < e ? 0 : o > r ? 1 : n(lr(e, r, o)))
      }
      function cu(e, r) {
        ;(e.min = r.min), (e.max = r.max)
      }
      function cc(e, r) {
        cu(e.x, r.x), cu(e.y, r.y)
      }
      function cd(e, r, n, o, i) {
        return (
          (e -= r),
          (e = o + (1 / n) * (e - o)),
          void 0 !== i && (e = o + (1 / i) * (e - o)),
          e
        )
      }
      function cp(e, r, [n, o, i], a, s) {
        !(function (e, r = 0, n = 1, o = 0.5, i, a = e, s = e) {
          if (i3.test(r)) {
            r = parseFloat(r)
            let e = s1(s.min, s.max, r / 100)
            r = e - s.min
          }
          if ('number' != typeof r) return
          let l = s1(a.min, a.max, o)
          e === a && (l -= r),
            (e.min = cd(e.min, r, n, l, i)),
            (e.max = cd(e.max, r, n, l, i))
        })(e, r[n], r[o], r[i], r.scale, a, s)
      }
      let ch = ['x', 'scaleX', 'originX'],
        cf = ['y', 'scaleY', 'originY']
      function cm(e, r, n, o) {
        cp(e.x, r, ch, null == n ? void 0 : n.x, null == o ? void 0 : o.x),
          cp(e.y, r, cf, null == n ? void 0 : n.y, null == o ? void 0 : o.y)
      }
      function cg(e) {
        return 0 === e.translate && 1 === e.scale
      }
      function cb(e) {
        return cg(e.x) && cg(e.y)
      }
      function cv(e, r) {
        return (
          e.x.min === r.x.min &&
          e.x.max === r.x.max &&
          e.y.min === r.y.min &&
          e.y.max === r.y.max
        )
      }
      function cy(e) {
        return l6(e.x) / l6(e.y)
      }
      class cx {
        constructor() {
          this.members = []
        }
        add(e) {
          su(this.members, e), e.scheduleRender()
        }
        remove(e) {
          if (
            (sc(this.members, e),
            e === this.prevLead && (this.prevLead = void 0),
            e === this.lead)
          ) {
            let e = this.members[this.members.length - 1]
            e && this.promote(e)
          }
        }
        relegate(e) {
          let r
          let n = this.members.findIndex((r) => e === r)
          if (0 === n) return !1
          for (let e = n; e >= 0; e--) {
            let n = this.members[e]
            if (!1 !== n.isPresent) {
              r = n
              break
            }
          }
          return !!r && (this.promote(r), !0)
        }
        promote(e, r) {
          var n
          let o = this.lead
          if (e !== o && ((this.prevLead = o), (this.lead = e), e.show(), o)) {
            o.instance && o.scheduleRender(),
              e.scheduleRender(),
              (e.resumeFrom = o),
              r && (e.resumeFrom.preserveOpacity = !0),
              o.snapshot &&
                ((e.snapshot = o.snapshot),
                (e.snapshot.latestValues =
                  o.animationValues || o.latestValues)),
              (null === (n = e.root) || void 0 === n ? void 0 : n.isUpdating) &&
                (e.isLayoutDirty = !0)
            let { crossfade: i } = e.options
            !1 === i && o.hide()
          }
        }
        exitAnimationComplete() {
          this.members.forEach((e) => {
            var r, n, o, i, a
            null === (n = (r = e.options).onExitComplete) ||
              void 0 === n ||
              n.call(r),
              null ===
                (a =
                  null === (o = e.resumingFrom) || void 0 === o
                    ? void 0
                    : (i = o.options).onExitComplete) ||
                void 0 === a ||
                a.call(i)
          })
        }
        scheduleRender() {
          this.members.forEach((e) => {
            e.instance && e.scheduleRender(!1)
          })
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
        }
      }
      function ck(e, r, n) {
        let o = '',
          i = e.x.translate / r.x,
          a = e.y.translate / r.y
        if (
          ((i || a) && (o = `translate3d(${i}px, ${a}px, 0) `),
          (1 !== r.x || 1 !== r.y) && (o += `scale(${1 / r.x}, ${1 / r.y}) `),
          n)
        ) {
          let { rotate: e, rotateX: r, rotateY: i } = n
          e && (o += `rotate(${e}deg) `),
            r && (o += `rotateX(${r}deg) `),
            i && (o += `rotateY(${i}deg) `)
        }
        let s = e.x.scale * r.x,
          l = e.y.scale * r.y
        return (1 !== s || 1 !== l) && (o += `scale(${s}, ${l})`), o || 'none'
      }
      let cS = (e, r) => e.depth - r.depth
      class cw {
        constructor() {
          ;(this.children = []), (this.isDirty = !1)
        }
        add(e) {
          su(this.children, e), (this.isDirty = !0)
        }
        remove(e) {
          sc(this.children, e), (this.isDirty = !0)
        }
        forEach(e) {
          this.isDirty && this.children.sort(cS),
            (this.isDirty = !1),
            this.children.forEach(e)
        }
      }
      let cC = ['', 'X', 'Y', 'Z'],
        c_ = 0
      function cE({
        attachResizeListener: e,
        defaultParent: r,
        measureScroll: n,
        checkIsScrollRoot: o,
        resetTransform: i,
      }) {
        return class {
          constructor(e, n = {}, o = null == r ? void 0 : r()) {
            ;(this.id = c_++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isTransformDirty = !1),
              (this.isProjectionDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.potentialNodes = new Map()),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots())
              }),
              (this.updateProjection = () => {
                this.nodes.forEach(cA),
                  this.nodes.forEach(cL),
                  this.nodes.forEach(cF)
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.elementId = e),
              (this.latestValues = n),
              (this.root = o ? o.root || o : this),
              (this.path = o ? [...o.path, o] : []),
              (this.parent = o),
              (this.depth = o ? o.depth + 1 : 0),
              e && this.root.registerPotentialNode(e, this)
            for (let e = 0; e < this.path.length; e++)
              this.path[e].shouldResetTransform = !0
            this.root === this && (this.nodes = new cw())
          }
          addEventListener(e, r) {
            return (
              this.eventHandlers.has(e) || this.eventHandlers.set(e, new sd()),
              this.eventHandlers.get(e).add(r)
            )
          }
          notifyListeners(e, ...r) {
            let n = this.eventHandlers.get(e)
            null == n || n.notify(...r)
          }
          hasListeners(e) {
            return this.eventHandlers.has(e)
          }
          registerPotentialNode(e, r) {
            this.potentialNodes.set(e, r)
          }
          mount(r, n = !1) {
            var o
            if (this.instance) return
            ;(this.isSVG = r instanceof SVGElement && 'svg' !== r.tagName),
              (this.instance = r)
            let { layoutId: i, layout: a, visualElement: s } = this.options
            if (
              (s && !s.current && s.mount(r),
              this.root.nodes.add(this),
              null === (o = this.parent) ||
                void 0 === o ||
                o.children.add(this),
              this.elementId && this.root.potentialNodes.delete(this.elementId),
              n && (a || i) && (this.isLayoutDirty = !0),
              e)
            ) {
              let n
              let o = () => (this.root.updateBlockedByResize = !1)
              e(r, () => {
                ;(this.root.updateBlockedByResize = !0),
                  n && n(),
                  (n = lF(o, 250)),
                  iP.hasAnimatedSinceResize &&
                    ((iP.hasAnimatedSinceResize = !1), this.nodes.forEach(cz))
              })
            }
            i && this.root.registerSharedNode(i, this),
              !1 !== this.options.animate &&
                s &&
                (i || a) &&
                this.addEventListener(
                  'didUpdate',
                  ({
                    delta: e,
                    hasLayoutChanged: r,
                    hasRelativeTargetChanged: n,
                    layout: o,
                  }) => {
                    var i, a, l, u, c
                    if (this.isTreeAnimationBlocked()) {
                      ;(this.target = void 0), (this.relativeTarget = void 0)
                      return
                    }
                    let d =
                        null !==
                          (a =
                            null !== (i = this.options.transition) &&
                            void 0 !== i
                              ? i
                              : s.getDefaultTransition()) && void 0 !== a
                          ? a
                          : cV,
                      {
                        onLayoutAnimationStart: p,
                        onLayoutAnimationComplete: h,
                      } = s.getProps(),
                      f = !this.targetLayout || !cv(this.targetLayout, o) || n,
                      m = !r && n
                    if (
                      this.options.layoutRoot ||
                      (null === (l = this.resumeFrom) || void 0 === l
                        ? void 0
                        : l.instance) ||
                      m ||
                      (r && (f || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(e, m)
                      let r = { ...lU(d, 'layout'), onPlay: p, onComplete: h }
                      ;(s.shouldReduceMotion || this.options.layoutRoot) &&
                        ((r.delay = 0), (r.type = !1)),
                        this.startAnimation(r)
                    } else
                      r || 0 !== this.animationProgress || cz(this),
                        this.isLead() &&
                          (null === (c = (u = this.options).onExitComplete) ||
                            void 0 === c ||
                            c.call(u))
                    this.targetLayout = o
                  }
                )
          }
          unmount() {
            var e, r
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this),
              null === (e = this.getStack()) || void 0 === e || e.remove(this),
              null === (r = this.parent) ||
                void 0 === r ||
                r.children.delete(this),
              (this.instance = void 0),
              so.preRender(this.updateProjection)
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
          }
          isTreeAnimationBlocked() {
            var e
            return (
              this.isAnimationBlocked ||
              (null === (e = this.parent) || void 0 === e
                ? void 0
                : e.isTreeAnimationBlocked()) ||
              !1
            )
          }
          startUpdate() {
            var e
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              null === (e = this.nodes) || void 0 === e || e.forEach(cM),
              this.animationId++)
          }
          getTransformTemplate() {
            var e
            return null === (e = this.options.visualElement) || void 0 === e
              ? void 0
              : e.getProps().transformTemplate
          }
          willUpdate(e = !0) {
            var r, n, o
            if (this.root.isUpdateBlocked()) {
              null === (n = (r = this.options).onExitComplete) ||
                void 0 === n ||
                n.call(r)
              return
            }
            if (
              (this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return
            this.isLayoutDirty = !0
            for (let e = 0; e < this.path.length; e++) {
              let r = this.path[e]
              ;(r.shouldResetTransform = !0),
                r.updateScroll('snapshot'),
                r.options.layoutRoot && r.willUpdate(!1)
            }
            let { layoutId: i, layout: a } = this.options
            ;(void 0 !== i || a) &&
              ((this.prevTransformTemplateValue =
                null === (o = this.getTransformTemplate()) || void 0 === o
                  ? void 0
                  : o(this.latestValues, '')),
              this.updateSnapshot(),
              e && this.notifyListeners('willUpdate'))
          }
          didUpdate() {
            let e = this.isUpdateBlocked()
            if (e) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(cB)
              return
            }
            this.isUpdating &&
              ((this.isUpdating = !1),
              this.potentialNodes.size &&
                (this.potentialNodes.forEach(cW), this.potentialNodes.clear()),
              this.nodes.forEach(cR),
              this.nodes.forEach(cj),
              this.nodes.forEach(cT),
              this.clearAllSnapshots(),
              si.update(),
              si.preRender(),
              si.render())
          }
          clearAllSnapshots() {
            this.nodes.forEach(cP), this.sharedNodes.forEach(c$)
          }
          scheduleUpdateProjection() {
            sn.preRender(this.updateProjection, !1, !0)
          }
          scheduleCheckAfterUnmount() {
            sn.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed()
            })
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure())
          }
          updateLayout() {
            var e
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let e = 0; e < this.path.length; e++) {
                let r = this.path[e]
                r.updateScroll()
              }
            let r = this.layout
            ;(this.layout = this.measure(!1)),
              (this.layoutCorrected = ud()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners('measure', this.layout.layoutBox),
              null === (e = this.options.visualElement) ||
                void 0 === e ||
                e.notify(
                  'LayoutMeasure',
                  this.layout.layoutBox,
                  null == r ? void 0 : r.layoutBox
                )
          }
          updateScroll(e = 'measure') {
            let r = Boolean(this.options.layoutScroll && this.instance)
            this.scroll &&
              this.scroll.animationId === this.root.animationId &&
              this.scroll.phase === e &&
              (r = !1),
              r &&
                (this.scroll = {
                  animationId: this.root.animationId,
                  phase: e,
                  isRoot: o(this.instance),
                  offset: n(this.instance),
                })
          }
          resetTransform() {
            var e
            if (!i) return
            let r = this.isLayoutDirty || this.shouldResetTransform,
              n = this.projectionDelta && !cb(this.projectionDelta),
              o =
                null === (e = this.getTransformTemplate()) || void 0 === e
                  ? void 0
                  : e(this.latestValues, ''),
              a = o !== this.prevTransformTemplateValue
            r &&
              (n || ug(this.latestValues) || a) &&
              (i(this.instance, o),
              (this.shouldResetTransform = !1),
              this.scheduleRender())
          }
          measure(e = !0) {
            var r
            let n = this.measurePageBox(),
              o = this.removeElementScroll(n)
            return (
              e && (o = this.removeTransform(o)),
              cN((r = o).x),
              cN(r.y),
              {
                animationId: this.root.animationId,
                measuredBox: n,
                layoutBox: o,
                latestValues: {},
                source: this.id,
              }
            )
          }
          measurePageBox() {
            let { visualElement: e } = this.options
            if (!e) return ud()
            let r = e.measureViewportBox(),
              { scroll: n } = this.root
            return n && (uS(r.x, n.offset.x), uS(r.y, n.offset.y)), r
          }
          removeElementScroll(e) {
            let r = ud()
            cc(r, e)
            for (let n = 0; n < this.path.length; n++) {
              let o = this.path[n],
                { scroll: i, options: a } = o
              if (o !== this.root && i && a.layoutScroll) {
                if (i.isRoot) {
                  cc(r, e)
                  let { scroll: n } = this.root
                  n && (uS(r.x, -n.offset.x), uS(r.y, -n.offset.y))
                }
                uS(r.x, i.offset.x), uS(r.y, i.offset.y)
              }
            }
            return r
          }
          applyTransform(e, r = !1) {
            let n = ud()
            cc(n, e)
            for (let e = 0; e < this.path.length; e++) {
              let o = this.path[e]
              !r &&
                o.options.layoutScroll &&
                o.scroll &&
                o !== o.root &&
                uE(n, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
                ug(o.latestValues) && uE(n, o.latestValues)
            }
            return ug(this.latestValues) && uE(n, this.latestValues), n
          }
          removeTransform(e) {
            var r
            let n = ud()
            cc(n, e)
            for (let e = 0; e < this.path.length; e++) {
              let o = this.path[e]
              if (!o.instance || !ug(o.latestValues)) continue
              um(o.latestValues) && o.updateSnapshot()
              let i = ud(),
                a = o.measurePageBox()
              cc(i, a),
                cm(
                  n,
                  o.latestValues,
                  null === (r = o.snapshot) || void 0 === r
                    ? void 0
                    : r.layoutBox,
                  i
                )
            }
            return ug(this.latestValues) && cm(n, this.latestValues), n
          }
          setTargetDelta(e) {
            ;(this.targetDelta = e),
              (this.isProjectionDirty = !0),
              this.root.scheduleUpdateProjection()
          }
          setOptions(e) {
            this.options = {
              ...this.options,
              ...e,
              crossfade: void 0 === e.crossfade || e.crossfade,
            }
          }
          clearMeasurements() {
            ;(this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1)
          }
          resolveTargetDelta() {
            var e, r, n, o
            let i = this.getLead()
            if (
              (this.isProjectionDirty ||
                (this.isProjectionDirty = i.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = i.isTransformDirty),
              !this.isProjectionDirty && !this.attemptToResolveRelativeTarget)
            )
              return
            let { layout: a, layoutId: s } = this.options
            if (this.layout && (a || s)) {
              if (!this.targetDelta && !this.relativeTarget) {
                let e = this.getClosestProjectingParent()
                e && e.layout
                  ? ((this.relativeParent = e),
                    (this.relativeTarget = ud()),
                    (this.relativeTargetOrigin = ud()),
                    un(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      e.layout.layoutBox
                    ),
                    cc(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0)
              }
              if (
                (this.relativeTarget || this.targetDelta) &&
                ((this.target ||
                  ((this.target = ud()), (this.targetWithTransforms = ud())),
                this.relativeTarget &&
                  this.relativeTargetOrigin &&
                  (null === (e = this.relativeParent) || void 0 === e
                    ? void 0
                    : e.target))
                  ? ((r = this.target),
                    (n = this.relativeTarget),
                    (o = this.relativeParent.target),
                    ut(r.x, n.x, o.x),
                    ut(r.y, n.y, o.y))
                  : this.targetDelta
                  ? (Boolean(this.resumingFrom)
                      ? (this.target = this.applyTransform(
                          this.layout.layoutBox
                        ))
                      : cc(this.target, this.layout.layoutBox),
                    ux(this.target, this.targetDelta))
                  : cc(this.target, this.layout.layoutBox),
                this.attemptToResolveRelativeTarget)
              ) {
                this.attemptToResolveRelativeTarget = !1
                let e = this.getClosestProjectingParent()
                e &&
                Boolean(e.resumingFrom) === Boolean(this.resumingFrom) &&
                !e.options.layoutScroll &&
                e.target
                  ? ((this.relativeParent = e),
                    (this.relativeTarget = ud()),
                    (this.relativeTargetOrigin = ud()),
                    un(this.relativeTargetOrigin, this.target, e.target),
                    cc(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0)
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              um(this.parent.latestValues) ||
              ub(this.parent.latestValues)
              ? void 0
              : (this.parent.relativeTarget ||
                  this.parent.targetDelta ||
                  this.parent.options.layoutRoot) &&
                this.parent.layout
              ? this.parent
              : this.parent.getClosestProjectingParent()
          }
          calcProjection() {
            var e
            let { isProjectionDirty: r, isTransformDirty: n } = this
            this.isProjectionDirty = this.isTransformDirty = !1
            let o = this.getLead(),
              i = Boolean(this.resumingFrom) || this !== o,
              a = !0
            if ((r && (a = !1), i && n && (a = !1), a)) return
            let { layout: s, layoutId: l } = this.options
            if (
              ((this.isTreeAnimating = Boolean(
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isTreeAnimating) ||
                  this.currentAnimation ||
                  this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(s || l))
            )
              return
            cc(this.layoutCorrected, this.layout.layoutBox),
              (function (e, r, n, o = !1) {
                var i, a
                let s, l
                let u = n.length
                if (u) {
                  r.x = r.y = 1
                  for (let c = 0; c < u; c++)
                    (l = (s = n[c]).projectionDelta),
                      (null ===
                        (a =
                          null === (i = s.instance) || void 0 === i
                            ? void 0
                            : i.style) || void 0 === a
                        ? void 0
                        : a.display) !== 'contents' &&
                        (o &&
                          s.options.layoutScroll &&
                          s.scroll &&
                          s !== s.root &&
                          uE(e, {
                            x: -s.scroll.offset.x,
                            y: -s.scroll.offset.y,
                          }),
                        l && ((r.x *= l.x.scale), (r.y *= l.y.scale), ux(e, l)),
                        o && ug(s.latestValues) && uE(e, s.latestValues))
                  ;(r.x = uk(r.x)), (r.y = uk(r.y))
                }
              })(this.layoutCorrected, this.treeScale, this.path, i)
            let { target: u } = o
            if (!u) return
            this.projectionDelta ||
              ((this.projectionDelta = uu()),
              (this.projectionDeltaWithTransform = uu()))
            let c = this.treeScale.x,
              d = this.treeScale.y,
              p = this.projectionTransform
            ue(
              this.projectionDelta,
              this.layoutCorrected,
              u,
              this.latestValues
            ),
              (this.projectionTransform = ck(
                this.projectionDelta,
                this.treeScale
              )),
              (this.projectionTransform !== p ||
                this.treeScale.x !== c ||
                this.treeScale.y !== d) &&
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners('projectionUpdate', u))
          }
          hide() {
            this.isVisible = !1
          }
          show() {
            this.isVisible = !0
          }
          scheduleRender(e = !0) {
            var r, n, o
            null === (n = (r = this.options).scheduleRender) ||
              void 0 === n ||
              n.call(r),
              e &&
                (null === (o = this.getStack()) ||
                  void 0 === o ||
                  o.scheduleRender()),
              this.resumingFrom &&
                !this.resumingFrom.instance &&
                (this.resumingFrom = void 0)
          }
          setAnimationOrigin(e, r = !1) {
            var n, o
            let i = this.snapshot,
              a = (null == i ? void 0 : i.latestValues) || {},
              s = { ...this.latestValues },
              l = uu()
            ;(this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !r)
            let u = ud(),
              c =
                (null == i ? void 0 : i.source) !==
                (null === (n = this.layout) || void 0 === n
                  ? void 0
                  : n.source),
              d =
                1 >=
                ((null === (o = this.getStack()) || void 0 === o
                  ? void 0
                  : o.members.length) || 0),
              p = Boolean(
                c && !d && !0 === this.options.crossfade && !this.path.some(cO)
              )
            ;(this.animationProgress = 0),
              (this.mixTargetDelta = (r) => {
                var n, o, i
                let h = r / 1e3
                cD(l.x, e.x, h),
                  cD(l.y, e.y, h),
                  this.setTargetDelta(l),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    (null === (n = this.relativeParent) || void 0 === n
                      ? void 0
                      : n.layout) &&
                    (un(
                      u,
                      this.layout.layoutBox,
                      this.relativeParent.layout.layoutBox
                    ),
                    (o = this.relativeTarget),
                    (i = this.relativeTargetOrigin),
                    cI(o.x, i.x, u.x, h),
                    cI(o.y, i.y, u.y, h)),
                  c &&
                    ((this.animationValues = s),
                    (function (e, r, n, o, i, a) {
                      i
                        ? ((e.opacity = s1(
                            0,
                            void 0 !== n.opacity ? n.opacity : 1,
                            ca(o)
                          )),
                          (e.opacityExit = s1(
                            void 0 !== r.opacity ? r.opacity : 1,
                            0,
                            cs(o)
                          )))
                        : a &&
                          (e.opacity = s1(
                            void 0 !== r.opacity ? r.opacity : 1,
                            void 0 !== n.opacity ? n.opacity : 1,
                            o
                          ))
                      for (let i = 0; i < cr; i++) {
                        let a = `border${ct[i]}Radius`,
                          s = ci(r, a),
                          l = ci(n, a)
                        if (void 0 === s && void 0 === l) continue
                        s || (s = 0), l || (l = 0)
                        let u = 0 === s || 0 === l || co(s) === co(l)
                        u
                          ? ((e[a] = Math.max(s1(cn(s), cn(l), o), 0)),
                            (i3.test(l) || i3.test(s)) && (e[a] += '%'))
                          : (e[a] = l)
                      }
                      ;(r.rotate || n.rotate) &&
                        (e.rotate = s1(r.rotate || 0, n.rotate || 0, o))
                    })(s, a, this.latestValues, h, p, d)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = h)
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
          }
          startAnimation(e) {
            var r, n
            this.notifyListeners('animationStart'),
              null === (r = this.currentAnimation) || void 0 === r || r.stop(),
              this.resumingFrom &&
                (null === (n = this.resumingFrom.currentAnimation) ||
                  void 0 === n ||
                  n.stop()),
              this.pendingAnimation &&
                (so.update(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = sn.update(() => {
                ;(iP.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (e, r, n = {}) {
                    let o = iW(e) ? e : sm(e)
                    return (
                      o.start(lq('', o, 1e3, n)),
                      {
                        stop: () => o.stop(),
                        isAnimating: () => o.isAnimating(),
                      }
                    )
                  })(0, 0, {
                    ...e,
                    onUpdate: (r) => {
                      var n
                      this.mixTargetDelta(r),
                        null === (n = e.onUpdate) ||
                          void 0 === n ||
                          n.call(e, r)
                    },
                    onComplete: () => {
                      var r
                      null === (r = e.onComplete) || void 0 === r || r.call(e),
                        this.completeAnimation()
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0)
              }))
          }
          completeAnimation() {
            var e
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0)),
              null === (e = this.getStack()) ||
                void 0 === e ||
                e.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners('animationComplete')
          }
          finishAnimation() {
            var e
            this.currentAnimation &&
              (null === (e = this.mixTargetDelta) ||
                void 0 === e ||
                e.call(this, 1e3),
              this.currentAnimation.stop()),
              this.completeAnimation()
          }
          applyTransformsToTarget() {
            let e = this.getLead(),
              {
                targetWithTransforms: r,
                target: n,
                layout: o,
                latestValues: i,
              } = e
            if (r && n && o) {
              if (
                this !== e &&
                this.layout &&
                o &&
                cH(
                  this.options.animationType,
                  this.layout.layoutBox,
                  o.layoutBox
                )
              ) {
                n = this.target || ud()
                let r = l6(this.layout.layoutBox.x)
                ;(n.x.min = e.target.x.min), (n.x.max = n.x.min + r)
                let o = l6(this.layout.layoutBox.y)
                ;(n.y.min = e.target.y.min), (n.y.max = n.y.min + o)
              }
              cc(r, n),
                uE(r, i),
                ue(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  r,
                  i
                )
            }
          }
          registerSharedNode(e, r) {
            var n, o, i
            this.sharedNodes.has(e) || this.sharedNodes.set(e, new cx())
            let a = this.sharedNodes.get(e)
            a.add(r),
              r.promote({
                transition:
                  null === (n = r.options.initialPromotionConfig) ||
                  void 0 === n
                    ? void 0
                    : n.transition,
                preserveFollowOpacity:
                  null ===
                    (i =
                      null === (o = r.options.initialPromotionConfig) ||
                      void 0 === o
                        ? void 0
                        : o.shouldPreserveFollowOpacity) || void 0 === i
                    ? void 0
                    : i.call(o, r),
              })
          }
          isLead() {
            let e = this.getStack()
            return !e || e.lead === this
          }
          getLead() {
            var e
            let { layoutId: r } = this.options
            return (
              (r &&
                (null === (e = this.getStack()) || void 0 === e
                  ? void 0
                  : e.lead)) ||
              this
            )
          }
          getPrevLead() {
            var e
            let { layoutId: r } = this.options
            return r
              ? null === (e = this.getStack()) || void 0 === e
                ? void 0
                : e.prevLead
              : void 0
          }
          getStack() {
            let { layoutId: e } = this.options
            if (e) return this.root.sharedNodes.get(e)
          }
          promote({
            needsReset: e,
            transition: r,
            preserveFollowOpacity: n,
          } = {}) {
            let o = this.getStack()
            o && o.promote(this, n),
              e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              r && this.setOptions({ transition: r })
          }
          relegate() {
            let e = this.getStack()
            return !!e && e.relegate(this)
          }
          resetRotation() {
            let { visualElement: e } = this.options
            if (!e) return
            let r = !1,
              { latestValues: n } = e
            if (
              ((n.rotate || n.rotateX || n.rotateY || n.rotateZ) && (r = !0),
              !r)
            )
              return
            let o = {}
            for (let r = 0; r < cC.length; r++) {
              let i = 'rotate' + cC[r]
              n[i] && ((o[i] = n[i]), e.setStaticValue(i, 0))
            }
            for (let r in (null == e || e.render(), o))
              e.setStaticValue(r, o[r])
            e.scheduleRender()
          }
          getProjectionStyles(e = {}) {
            var r, n
            let o = {}
            if (!this.instance || this.isSVG) return o
            if (!this.isVisible) return { visibility: 'hidden' }
            o.visibility = ''
            let i = this.getTransformTemplate()
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (o.opacity = ''),
                (o.pointerEvents = a_(e.pointerEvents) || ''),
                (o.transform = i ? i(this.latestValues, '') : 'none'),
                o
              )
            let a = this.getLead()
            if (!this.projectionDelta || !this.layout || !a.target) {
              let r = {}
              return (
                this.options.layoutId &&
                  ((r.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (r.pointerEvents = a_(e.pointerEvents) || '')),
                this.hasProjected &&
                  !ug(this.latestValues) &&
                  ((r.transform = i ? i({}, '') : 'none'),
                  (this.hasProjected = !1)),
                r
              )
            }
            let s = a.animationValues || a.latestValues
            this.applyTransformsToTarget(),
              (o.transform = ck(
                this.projectionDeltaWithTransform,
                this.treeScale,
                s
              )),
              i && (o.transform = i(s, o.transform))
            let { x: l, y: u } = this.projectionDelta
            for (let e in ((o.transformOrigin = `${100 * l.origin}% ${
              100 * u.origin
            }% 0`),
            a.animationValues
              ? (o.opacity =
                  a === this
                    ? null !==
                        (n =
                          null !== (r = s.opacity) && void 0 !== r
                            ? r
                            : this.latestValues.opacity) && void 0 !== n
                      ? n
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : s.opacityExit)
              : (o.opacity =
                  a === this
                    ? void 0 !== s.opacity
                      ? s.opacity
                      : ''
                    : void 0 !== s.opacityExit
                    ? s.opacityExit
                    : 0),
            iD)) {
              if (void 0 === s[e]) continue
              let { correct: r, applyTo: n } = iD[e],
                i = 'none' === o.transform ? s[e] : r(s[e], a)
              if (n) {
                let e = n.length
                for (let r = 0; r < e; r++) o[n[r]] = i
              } else o[e] = i
            }
            return (
              this.options.layoutId &&
                (o.pointerEvents =
                  a === this ? a_(e.pointerEvents) || '' : 'none'),
              o
            )
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
          }
          resetTree() {
            this.root.nodes.forEach((e) => {
              var r
              return null === (r = e.currentAnimation) || void 0 === r
                ? void 0
                : r.stop()
            }),
              this.root.nodes.forEach(cB),
              this.root.sharedNodes.clear()
          }
        }
      }
      function cj(e) {
        e.updateLayout()
      }
      function cT(e) {
        var r, n, o
        let i =
          (null === (r = e.resumeFrom) || void 0 === r ? void 0 : r.snapshot) ||
          e.snapshot
        if (e.isLead() && e.layout && i && e.hasListeners('didUpdate')) {
          let { layoutBox: r, measuredBox: n } = e.layout,
            { animationType: o } = e.options,
            a = i.source !== e.layout.source
          'size' === o
            ? up((e) => {
                let n = a ? i.measuredBox[e] : i.layoutBox[e],
                  o = l6(n)
                ;(n.min = r[e].min), (n.max = n.min + o)
              })
            : cH(o, i.layoutBox, r) &&
              up((e) => {
                let n = a ? i.measuredBox[e] : i.layoutBox[e],
                  o = l6(r[e])
                n.max = n.min + o
              })
          let s = uu()
          ue(s, r, i.layoutBox)
          let l = uu()
          a
            ? ue(l, e.applyTransform(n, !0), i.measuredBox)
            : ue(l, r, i.layoutBox)
          let u = !cb(s),
            c = !1
          if (!e.resumeFrom) {
            let n = e.getClosestProjectingParent()
            if (n && !n.resumeFrom) {
              let { snapshot: o, layout: a } = n
              if (o && a) {
                let s = ud()
                un(s, i.layoutBox, o.layoutBox)
                let l = ud()
                un(l, r, a.layoutBox),
                  cv(s, l) || (c = !0),
                  n.options.layoutRoot &&
                    ((e.relativeTarget = l),
                    (e.relativeTargetOrigin = s),
                    (e.relativeParent = n))
              }
            }
          }
          e.notifyListeners('didUpdate', {
            layout: r,
            snapshot: i,
            delta: l,
            layoutDelta: s,
            hasLayoutChanged: u,
            hasRelativeTargetChanged: c,
          })
        } else
          e.isLead() &&
            (null === (o = (n = e.options).onExitComplete) ||
              void 0 === o ||
              o.call(n))
        e.options.transition = void 0
      }
      function cA(e) {
        e.isProjectionDirty ||
          (e.isProjectionDirty = Boolean(
            e.parent && e.parent.isProjectionDirty
          )),
          e.isTransformDirty ||
            (e.isTransformDirty = Boolean(
              e.parent && e.parent.isTransformDirty
            ))
      }
      function cP(e) {
        e.clearSnapshot()
      }
      function cB(e) {
        e.clearMeasurements()
      }
      function cR(e) {
        let { visualElement: r } = e.options
        ;(null == r ? void 0 : r.getProps().onBeforeLayoutMeasure) &&
          r.notify('BeforeLayoutMeasure'),
          e.resetTransform()
      }
      function cz(e) {
        e.finishAnimation(),
          (e.targetDelta = e.relativeTarget = e.target = void 0)
      }
      function cL(e) {
        e.resolveTargetDelta()
      }
      function cF(e) {
        e.calcProjection()
      }
      function cM(e) {
        e.resetRotation()
      }
      function c$(e) {
        e.removeLeadSnapshot()
      }
      function cD(e, r, n) {
        ;(e.translate = s1(r.translate, 0, n)),
          (e.scale = s1(r.scale, 1, n)),
          (e.origin = r.origin),
          (e.originPoint = r.originPoint)
      }
      function cI(e, r, n, o) {
        ;(e.min = s1(r.min, n.min, o)), (e.max = s1(r.max, n.max, o))
      }
      function cO(e) {
        return e.animationValues && void 0 !== e.animationValues.opacityExit
      }
      let cV = { duration: 0.45, ease: [0.4, 0, 0.1, 1] }
      function cW(e, r) {
        let n = e.root
        for (let r = e.path.length - 1; r >= 0; r--)
          if (Boolean(e.path[r].instance)) {
            n = e.path[r]
            break
          }
        let o = n && n !== e.root ? n.instance : document,
          i = o.querySelector(`[data-projection-id="${r}"]`)
        i && e.mount(i, !0)
      }
      function cN(e) {
        ;(e.min = Math.round(e.min)), (e.max = Math.round(e.max))
      }
      function cH(e, r, n) {
        return (
          'position' === e ||
          ('preserve-aspect' === e && !l8(cy(r), cy(n), 0.2))
        )
      }
      let cU = cE({
          attachResizeListener: (e, r) => aA(e, 'resize', r),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        cq = { current: void 0 },
        cY = cE({
          measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
          defaultParent: () => {
            if (!cq.current) {
              let e = new cU(0, {})
              e.mount(window),
                e.setOptions({ layoutScroll: !0 }),
                (cq.current = e)
            }
            return cq.current
          },
          resetTransform: (e, r) => {
            e.style.transform = void 0 !== r ? r : 'none'
          },
          checkIsScrollRoot: (e) =>
            Boolean('fixed' === window.getComputedStyle(e).position),
        }),
        cG = {
          ...l0,
          ...a0,
          ...uB,
          measureLayout: function (e) {
            let [r, n] = ih(),
              o = (0, R.useContext)(iR)
            return R.createElement(u7, {
              ...e,
              layoutGroup: o,
              switchLayoutGroup: (0, R.useContext)(iL),
              isPresent: r,
              safeToRemove: n,
            })
          },
        },
        cX = (function (e) {
          function r(r, n = {}) {
            return (function ({
              preloadedFeatures: e,
              createVisualElement: r,
              projectionNodeConstructor: n,
              useRender: o,
              useVisualState: i,
              Component: a,
            }) {
              e &&
                (function (e) {
                  for (let r in e)
                    'projectionNodeConstructor' === r
                      ? (iT.projectionNodeConstructor = e[r])
                      : (iT[r].Component = e[r])
                })(e)
              let s = (0, R.forwardRef)(function (s, l) {
                var u, c
                let d = {
                    ...(0, R.useContext)(im),
                    ...s,
                    layoutId: (function ({ layoutId: e }) {
                      let r = (0, R.useContext)(iR).id
                      return r && void 0 !== e ? r + '-' + e : e
                    })(s),
                  },
                  { isStatic: p } = d,
                  h = null,
                  f = (function (e) {
                    let { initial: r, animate: n } = (function (e, r) {
                      if (iC(e)) {
                        let { initial: r, animate: n } = e
                        return {
                          initial: !1 === r || ik(r) ? r : void 0,
                          animate: ik(n) ? n : void 0,
                        }
                      }
                      return !1 !== e.inherit ? r : {}
                    })(e, (0, R.useContext)(ig))
                    return (0, R.useMemo)(
                      () => ({ initial: r, animate: n }),
                      [iE(r), iE(n)]
                    )
                  })(s),
                  m = p
                    ? void 0
                    : iA(() => {
                        if (iP.hasEverUpdated) return iB++
                      }),
                  g = i(s, p)
                if (!p && ib) {
                  f.visualElement = (function (e, r, n, o) {
                    let i = (0, R.useContext)(ig).visualElement,
                      a = (0, R.useContext)(iy),
                      s = (0, R.useContext)(ip),
                      l = (0, R.useContext)(im).reducedMotion,
                      u = (0, R.useRef)()
                    ;(o = o || a.renderer),
                      !u.current &&
                        o &&
                        (u.current = o(e, {
                          visualState: r,
                          parent: i,
                          props: n,
                          presenceId: s ? s.id : void 0,
                          blockInitialAnimation: !!s && !1 === s.initial,
                          reducedMotionConfig: l,
                        }))
                    let c = u.current
                    iv(() => {
                      c && c.render()
                    })
                    let d = window.HandoffAppearAnimations ? iv : R.useEffect
                    return (
                      d(() => {
                        c &&
                          c.animationState &&
                          c.animationState.animateChanges()
                      }),
                      c
                    )
                  })(a, g, d, r)
                  let o = (0, R.useContext)(iy).strict,
                    i = (0, R.useContext)(iL)
                  f.visualElement &&
                    (h = f.visualElement.loadFeatures(
                      d,
                      o,
                      e,
                      m,
                      n || iT.projectionNodeConstructor,
                      i
                    ))
                }
                return R.createElement(
                  iz,
                  { visualElement: f.visualElement, props: d },
                  h,
                  R.createElement(
                    ig.Provider,
                    { value: f },
                    o(
                      a,
                      s,
                      m,
                      ((u = f.visualElement),
                      (c = l),
                      (0, R.useCallback)(
                        (e) => {
                          e && g.mount && g.mount(e),
                            u && (e ? u.mount(e) : u.unmount()),
                            c &&
                              ('function' == typeof c
                                ? c(e)
                                : ix(c) && (c.current = e))
                        },
                        [u]
                      )),
                      g,
                      p,
                      f.visualElement
                    )
                  )
                )
              })
              return (s[iF] = a), s
            })(e(r, n))
          }
          if ('undefined' == typeof Proxy) return r
          let n = new Map()
          return new Proxy(r, {
            get: (e, o) => (n.has(o) || n.set(o, r(o)), n.get(o)),
          })
        })((e, r) =>
          (function (e, { forwardMotionProps: r = !1 }, n, o, i) {
            let a = i$(e) ? aj : aT
            return {
              ...a,
              preloadedFeatures: n,
              useRender: (function (e = !1) {
                let r = (r, n, o, i, { latestValues: a }, s) => {
                  let l = i$(r) ? af : ao,
                    u = l(n, a, s, r),
                    c = (function (e, r, n) {
                      let o = {}
                      for (let i in e)
                        ('values' !== i || 'object' != typeof e.values) &&
                          (as(i) ||
                            (!0 === n && aa(i)) ||
                            (!r && !aa(i)) ||
                            (e.draggable && i.startsWith('onDrag'))) &&
                          (o[i] = e[i])
                      return o
                    })(n, 'string' == typeof r, e),
                    d = { ...c, ...u, ref: i },
                    { children: p } = n,
                    h = (0, R.useMemo)(() => (iW(p) ? p.get() : p), [p])
                  return (
                    o && (d['data-projection-id'] = o),
                    (0, R.createElement)(r, { ...d, children: h })
                  )
                }
                return r
              })(r),
              createVisualElement: o,
              projectionNodeConstructor: i,
              Component: e,
            }
          })(e, r, cG, u3, cY)
        )
      var cZ = n(870),
        cK = {
          initial: (e) => {
            let { position: r } = e,
              n = ['top', 'bottom'].includes(r) ? 'y' : 'x',
              o = ['top-right', 'bottom-right'].includes(r) ? 1 : -1
            return 'bottom' === r && (o = 1), { opacity: 0, [n]: 24 * o }
          },
          animate: {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
          },
          exit: {
            opacity: 0,
            scale: 0.85,
            transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
          },
        },
        cJ = (0, R.memo)((e) => {
          var r
          let {
              id: n,
              message: o,
              onCloseComplete: i,
              onRequestRemove: a,
              requestClose: s = !1,
              position: l = 'bottom',
              duration: u = 5e3,
              containerStyle: c,
              motionVariants: d = cK,
              toastSpacing: p = '0.5rem',
            } = e,
            [h, f] = (0, R.useState)(u),
            m = null === (r = (0, R.useContext)(ip)) || r.isPresent
          id(() => {
            m || null == i || i()
          }, [m]),
            id(() => {
              f(u)
            }, [u])
          let g = () => f(null),
            b = () => f(u),
            v = () => {
              m && a()
            }
          ;(0, R.useEffect)(() => {
            m && s && a()
          }, [m, s, a]),
            (function (e, r) {
              let n = (function (e, r = []) {
                let n = (0, R.useRef)(e)
                return (
                  (0, R.useEffect)(() => {
                    n.current = e
                  }),
                  (0, R.useCallback)((...e) => {
                    var r
                    return null == (r = n.current) ? void 0 : r.call(n, ...e)
                  }, r)
                )
              })(e)
              ;(0, R.useEffect)(() => {
                if (null == r) return
                let e = null
                return (
                  (e = window.setTimeout(() => {
                    n()
                  }, r)),
                  () => {
                    e && window.clearTimeout(e)
                  }
                )
              }, [r, n])
            })(v, h)
          let y = (0, R.useMemo)(
              () => ({
                pointerEvents: 'auto',
                maxWidth: 560,
                minWidth: 300,
                margin: p,
                ...c,
              }),
              [c, p]
            ),
            x = (0, R.useMemo)(
              () =>
                (function (e) {
                  let r = e.includes('right'),
                    n = e.includes('left'),
                    o = 'center'
                  return (
                    r && (o = 'flex-end'),
                    n && (o = 'flex-start'),
                    { display: 'flex', flexDirection: 'column', alignItems: o }
                  )
                })(l),
              [l]
            )
          return (0, I.jsx)(cX.li, {
            layout: !0,
            className: 'chakra-toast',
            variants: d,
            initial: 'initial',
            animate: 'animate',
            exit: 'exit',
            onHoverStart: g,
            onHoverEnd: b,
            custom: { position: l },
            style: x,
            children: (0, I.jsx)(cZ.m.div, {
              role: 'status',
              'aria-atomic': 'true',
              className: 'chakra-toast__inner',
              __css: y,
              children: (0, eH.Pu)(o, { id: n, onClose: v }),
            }),
          })
        })
      cJ.displayName = 'ToastComponent'
      var cQ = n(3638)
      function c0(e) {
        return (0, I.jsx)(cQ.J, {
          viewBox: '0 0 24 24',
          ...e,
          children: (0, I.jsx)('path', {
            fill: 'currentColor',
            d: 'M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z',
          }),
        })
      }
      var c1 = n(7107),
        c2 = n(5489),
        c5 = (function () {
          var e = D.apply(void 0, arguments),
            r = 'animation-' + e.name
          return {
            name: r,
            styles: '@keyframes ' + r + '{' + e.styles + '}',
            anim: 1,
            toString: function () {
              return '_EMO_' + this.name + '_' + this.styles + '_EMO_'
            },
          }
        })({
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }),
        c3 = (0, c1.G)((e, r) => {
          let n = (0, c2.mq)('Spinner', e),
            {
              label: o = 'Loading...',
              thickness: i = '2px',
              speed: a = '0.45s',
              emptyColor: s = 'transparent',
              className: l,
              ...u
            } = (0, G.Lr)(e),
            c = (0, eH.cx)('chakra-spinner', l),
            d = {
              display: 'inline-block',
              borderColor: 'currentColor',
              borderStyle: 'solid',
              borderRadius: '99999px',
              borderWidth: i,
              borderBottomColor: s,
              borderLeftColor: s,
              animation: `${c5} ${a} linear infinite`,
              ...n,
            }
          return (0, I.jsx)(cZ.m.div, {
            ref: r,
            __css: d,
            className: c,
            ...u,
            children: o && (0, I.jsx)(cZ.m.span, { srOnly: !0, children: o }),
          })
        })
      c3.displayName = 'Spinner'
      var [c4, c9] = N({
          name: 'AlertContext',
          hookName: 'useAlertContext',
          providerName: '<Alert />',
        }),
        [c6, c8] = N({
          name: 'AlertStylesContext',
          hookName: 'useAlertStyles',
          providerName: '<Alert />',
        }),
        c7 = {
          info: {
            icon: function (e) {
              return (0, I.jsx)(cQ.J, {
                viewBox: '0 0 24 24',
                ...e,
                children: (0, I.jsx)('path', {
                  fill: 'currentColor',
                  d: 'M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z',
                }),
              })
            },
            colorScheme: 'blue',
          },
          warning: { icon: c0, colorScheme: 'orange' },
          success: {
            icon: function (e) {
              return (0, I.jsx)(cQ.J, {
                viewBox: '0 0 24 24',
                ...e,
                children: (0, I.jsx)('path', {
                  fill: 'currentColor',
                  d: 'M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z',
                }),
              })
            },
            colorScheme: 'green',
          },
          error: { icon: c0, colorScheme: 'red' },
          loading: { icon: c3, colorScheme: 'blue' },
        },
        de = (0, c1.G)(function (e, r) {
          var n
          let { status: o = 'info', addRole: i = !0, ...a } = (0, G.Lr)(e),
            s = null != (n = e.colorScheme) ? n : c7[o].colorScheme,
            l = (0, c2.jC)('Alert', { ...e, colorScheme: s }),
            u = {
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              overflow: 'hidden',
              ...l.container,
            }
          return (0,
          I.jsx)(c4, { value: { status: o }, children: (0, I.jsx)(c6, { value: l, children: (0, I.jsx)(cZ.m.div, { role: i ? 'alert' : void 0, ref: r, ...a, className: (0, eH.cx)('chakra-alert', e.className), __css: u }) }) })
        })
      function dt(e) {
        let { status: r } = c9(),
          n = c7[r].icon,
          o = c8(),
          i = 'loading' === r ? o.spinner : o.icon
        return (0, I.jsx)(cZ.m.span, {
          display: 'inherit',
          ...e,
          className: (0, eH.cx)('chakra-alert__icon', e.className),
          __css: i,
          children: e.children || (0, I.jsx)(n, { h: '100%', w: '100%' }),
        })
      }
      ;(de.displayName = 'Alert'), (dt.displayName = 'AlertIcon')
      var dr = (0, c1.G)(function (e, r) {
        let n = c8()
        return (0,
        I.jsx)(cZ.m.div, { ref: r, ...e, className: (0, eH.cx)('chakra-alert__title', e.className), __css: n.title })
      })
      dr.displayName = 'AlertTitle'
      var dn = (0, c1.G)(function (e, r) {
        let n = c8(),
          o = { display: 'inline', ...n.description }
        return (0,
        I.jsx)(cZ.m.div, { ref: r, ...e, className: (0, eH.cx)('chakra-alert__desc', e.className), __css: o })
      })
      function di(e) {
        return (0, I.jsx)(cQ.J, {
          focusable: 'false',
          'aria-hidden': !0,
          ...e,
          children: (0, I.jsx)('path', {
            fill: 'currentColor',
            d: 'M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z',
          }),
        })
      }
      dn.displayName = 'AlertDescription'
      var da = (0, c1.G)(function (e, r) {
        let n = (0, c2.mq)('CloseButton', e),
          { children: o, isDisabled: i, __css: a, ...s } = (0, G.Lr)(e)
        return (0,
        I.jsx)(cZ.m.button, { type: 'button', 'aria-label': 'Close', ref: r, disabled: i, __css: { outline: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, ...n, ...a }, ...s, children: o || (0, I.jsx)(di, { width: '1em', height: '1em' }) })
      })
      da.displayName = 'CloseButton'
      var ds = (function (e) {
          let r = e,
            n = new Set(),
            o = (e) => {
              ;(r = e(r)), n.forEach((e) => e())
            }
          return {
            getState: () => r,
            subscribe: (r) => (
              n.add(r),
              () => {
                o(() => e), n.delete(r)
              }
            ),
            removeToast: (e, r) => {
              o((n) => ({ ...n, [r]: n[r].filter((r) => r.id != e) }))
            },
            notify: (e, r) => {
              let n = (function (e, r = {}) {
                  var n, o
                  dl += 1
                  let i = null != (n = r.id) ? n : dl,
                    a = null != (o = r.position) ? o : 'bottom'
                  return {
                    id: i,
                    message: e,
                    position: a,
                    duration: r.duration,
                    onCloseComplete: r.onCloseComplete,
                    onRequestRemove: () => ds.removeToast(String(i), a),
                    status: r.status,
                    requestClose: !1,
                    containerStyle: r.containerStyle,
                  }
                })(e, r),
                { position: i, id: a } = n
              return (
                o((e) => {
                  var r, o
                  let a = i.includes('top'),
                    s = a
                      ? [n, ...(null != (r = e[i]) ? r : [])]
                      : [...(null != (o = e[i]) ? o : []), n]
                  return { ...e, [i]: s }
                }),
                a
              )
            },
            update: (e, r) => {
              e &&
                o((n) => {
                  let o = { ...n },
                    { position: i, index: a } = iu(o, e)
                  return (
                    i &&
                      -1 !== a &&
                      (o[i][a] = {
                        ...o[i][a],
                        ...r,
                        message: (function (e = {}) {
                          let { render: r, toastComponent: n = du } = e,
                            o = (o) =>
                              'function' == typeof r
                                ? r({ ...o, ...e })
                                : (0, I.jsx)(n, { ...o, ...e })
                          return o
                        })(r),
                      }),
                    o
                  )
                })
            },
            closeAll: ({ positions: e } = {}) => {
              o((r) =>
                (null != e
                  ? e
                  : [
                      'bottom',
                      'bottom-right',
                      'bottom-left',
                      'top',
                      'top-left',
                      'top-right',
                    ]
                ).reduce(
                  (e, n) => (
                    (e[n] = r[n].map((e) => ({ ...e, requestClose: !0 }))), e
                  ),
                  { ...r }
                )
              )
            },
            close: (e) => {
              o((r) => {
                let n = ic(r, e)
                return n
                  ? {
                      ...r,
                      [n]: r[n].map((r) =>
                        r.id == e ? { ...r, requestClose: !0 } : r
                      ),
                    }
                  : r
              })
            },
            isActive: (e) => Boolean(iu(ds.getState(), e).position),
          }
        })({
          top: [],
          'top-left': [],
          'top-right': [],
          'bottom-left': [],
          bottom: [],
          'bottom-right': [],
        }),
        dl = 0,
        du = (e) => {
          let {
              status: r,
              variant: n = 'solid',
              id: o,
              title: i,
              isClosable: a,
              onClose: s,
              description: l,
              icon: u,
            } = e,
            c = o
              ? {
                  root: `toast-${o}`,
                  title: `toast-${o}-title`,
                  description: `toast-${o}-description`,
                }
              : void 0
          return (0, I.jsxs)(de, {
            addRole: !1,
            status: r,
            variant: n,
            id: null == c ? void 0 : c.root,
            alignItems: 'start',
            borderRadius: 'md',
            boxShadow: 'lg',
            paddingEnd: 8,
            textAlign: 'start',
            width: 'auto',
            children: [
              (0, I.jsx)(dt, { children: u }),
              (0, I.jsxs)(cZ.m.div, {
                flex: '1',
                maxWidth: '100%',
                children: [
                  i &&
                    (0, I.jsx)(dr, {
                      id: null == c ? void 0 : c.title,
                      children: i,
                    }),
                  l &&
                    (0, I.jsx)(dn, {
                      id: null == c ? void 0 : c.description,
                      display: 'block',
                      children: l,
                    }),
                ],
              }),
              a &&
                (0, I.jsx)(da, {
                  size: 'sm',
                  onClick: s,
                  position: 'absolute',
                  insetEnd: 1,
                  top: 1,
                }),
            ],
          })
        }
      function dc() {
        let e = (0, R.useRef)(!1)
        return (
          iv(
            () => (
              (e.current = !0),
              () => {
                e.current = !1
              }
            ),
            []
          ),
          e
        )
      }
      class dd extends R.Component {
        getSnapshotBeforeUpdate(e) {
          let r = this.props.childRef.current
          if (r && e.isPresent && !this.props.isPresent) {
            let e = this.props.sizeRef.current
            ;(e.height = r.offsetHeight || 0),
              (e.width = r.offsetWidth || 0),
              (e.top = r.offsetTop),
              (e.left = r.offsetLeft)
          }
          return null
        }
        componentDidUpdate() {}
        render() {
          return this.props.children
        }
      }
      function dp({ children: e, isPresent: r }) {
        let n = (0, R.useId)(),
          o = (0, R.useRef)(null),
          i = (0, R.useRef)({ width: 0, height: 0, top: 0, left: 0 })
        return (
          (0, R.useInsertionEffect)(() => {
            let { width: e, height: a, top: s, left: l } = i.current
            if (r || !o.current || !e || !a) return
            o.current.dataset.motionPopId = n
            let u = document.createElement('style')
            return (
              document.head.appendChild(u),
              u.sheet &&
                u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${a}px !important;
            top: ${s}px !important;
            left: ${l}px !important;
          }
        `),
              () => {
                document.head.removeChild(u)
              }
            )
          }, [r]),
          R.createElement(
            dd,
            { isPresent: r, childRef: o, sizeRef: i },
            R.cloneElement(e, { ref: o })
          )
        )
      }
      let dh = ({
        children: e,
        initial: r,
        isPresent: n,
        onExitComplete: o,
        custom: i,
        presenceAffectsLayout: a,
        mode: s,
      }) => {
        let l = iA(df),
          u = (0, R.useId)(),
          c = (0, R.useMemo)(
            () => ({
              id: u,
              initial: r,
              isPresent: n,
              custom: i,
              onExitComplete: (e) => {
                for (let r of (l.set(e, !0), l.values())) if (!r) return
                o && o()
              },
              register: (e) => (l.set(e, !1), () => l.delete(e)),
            }),
            a ? void 0 : [n]
          )
        return (
          (0, R.useMemo)(() => {
            l.forEach((e, r) => l.set(r, !1))
          }, [n]),
          R.useEffect(() => {
            n || l.size || !o || o()
          }, [n]),
          'popLayout' === s && (e = R.createElement(dp, { isPresent: n }, e)),
          R.createElement(ip.Provider, { value: c }, e)
        )
      }
      function df() {
        return new Map()
      }
      let dm = (e) => e.key || '',
        dg = ({
          children: e,
          custom: r,
          initial: n = !0,
          onExitComplete: o,
          exitBeforeEnter: i,
          presenceAffectsLayout: a = !0,
          mode: s = 'sync',
        }) => {
          i && (s = 'wait')
          let [l] = (function () {
              let e = dc(),
                [r, n] = (0, R.useState)(0),
                o = (0, R.useCallback)(() => {
                  e.current && n(r + 1)
                }, [r]),
                i = (0, R.useCallback)(() => sn.postRender(o), [o])
              return [i, r]
            })(),
            u = (0, R.useContext)(iR).forceRender
          u && (l = u)
          let c = dc(),
            d = (function (e) {
              let r = []
              return (
                R.Children.forEach(e, (e) => {
                  ;(0, R.isValidElement)(e) && r.push(e)
                }),
                r
              )
            })(e),
            p = d,
            h = new Set(),
            f = (0, R.useRef)(p),
            m = (0, R.useRef)(new Map()).current,
            g = (0, R.useRef)(!0)
          if (
            (iv(() => {
              ;(g.current = !1),
                (function (e, r) {
                  e.forEach((e) => {
                    let n = dm(e)
                    r.set(n, e)
                  })
                })(d, m),
                (f.current = p)
            }),
            aN(() => {
              ;(g.current = !0), m.clear(), h.clear()
            }),
            g.current)
          )
            return R.createElement(
              R.Fragment,
              null,
              p.map((e) =>
                R.createElement(
                  dh,
                  {
                    key: dm(e),
                    isPresent: !0,
                    initial: !!n && void 0,
                    presenceAffectsLayout: a,
                    mode: s,
                  },
                  e
                )
              )
            )
          p = [...p]
          let b = f.current.map(dm),
            v = d.map(dm),
            y = b.length
          for (let e = 0; e < y; e++) {
            let r = b[e]
            ;-1 === v.indexOf(r) && h.add(r)
          }
          return (
            'wait' === s && h.size && (p = []),
            h.forEach((e) => {
              if (-1 !== v.indexOf(e)) return
              let n = m.get(e)
              if (!n) return
              let i = b.indexOf(e),
                u = () => {
                  m.delete(e), h.delete(e)
                  let r = f.current.findIndex((r) => r.key === e)
                  if ((f.current.splice(r, 1), !h.size)) {
                    if (((f.current = d), !1 === c.current)) return
                    l(), o && o()
                  }
                }
              p.splice(
                i,
                0,
                R.createElement(
                  dh,
                  {
                    key: dm(n),
                    isPresent: !1,
                    onExitComplete: u,
                    custom: r,
                    presenceAffectsLayout: a,
                    mode: s,
                  },
                  n
                )
              )
            }),
            (p = p.map((e) => {
              let r = e.key
              return h.has(r)
                ? e
                : R.createElement(
                    dh,
                    {
                      key: dm(e),
                      isPresent: !0,
                      presenceAffectsLayout: a,
                      mode: s,
                    },
                    e
                  )
            })),
            R.createElement(
              R.Fragment,
              null,
              h.size ? p : p.map((e) => (0, R.cloneElement)(e))
            )
          )
        }
      var db = n(8316),
        [dv, dy] = N({ strict: !1, name: 'PortalContext' }),
        dx = 'chakra-portal',
        dk = (e) =>
          (0, I.jsx)('div', {
            className: 'chakra-portal-zIndex',
            style: {
              position: 'absolute',
              zIndex: e.zIndex,
              top: 0,
              left: 0,
              right: 0,
            },
            children: e.children,
          }),
        dS = (e) => {
          let { appendToParentPortal: r, children: n } = e,
            [o, i] = (0, R.useState)(null),
            a = (0, R.useRef)(null),
            [, s] = (0, R.useState)({})
          ;(0, R.useEffect)(() => s({}), [])
          let l = dy(),
            u = U()
          ei(() => {
            if (!o) return
            let e = o.ownerDocument,
              n = r && null != l ? l : e.body
            if (!n) return
            ;(a.current = e.createElement('div')),
              (a.current.className = dx),
              n.appendChild(a.current),
              s({})
            let i = a.current
            return () => {
              n.contains(i) && n.removeChild(i)
            }
          }, [o])
          let c = (null == u ? void 0 : u.zIndex)
            ? (0, I.jsx)(dk, {
                zIndex: null == u ? void 0 : u.zIndex,
                children: n,
              })
            : n
          return a.current
            ? (0, db.createPortal)(
                (0, I.jsx)(dv, { value: a.current, children: c }),
                a.current
              )
            : (0, I.jsx)('span', {
                ref: (e) => {
                  e && i(e)
                },
              })
        },
        dw = (e) => {
          let { children: r, containerRef: n, appendToParentPortal: o } = e,
            i = n.current,
            a =
              null != i
                ? i
                : 'undefined' != typeof window
                ? document.body
                : void 0,
            s = (0, R.useMemo)(() => {
              let e = null == i ? void 0 : i.ownerDocument.createElement('div')
              return e && (e.className = dx), e
            }, [i]),
            [, l] = (0, R.useState)({})
          return (ei(() => l({}), []),
          ei(() => {
            if (s && a)
              return (
                a.appendChild(s),
                () => {
                  a.removeChild(s)
                }
              )
          }, [s, a]),
          a && s)
            ? (0, db.createPortal)(
                (0, I.jsx)(dv, { value: o ? s : null, children: r }),
                s
              )
            : null
        }
      function dC(e) {
        let r = { appendToParentPortal: !0, ...e },
          { containerRef: n, ...o } = r
        return n
          ? (0, I.jsx)(dw, { containerRef: n, ...o })
          : (0, I.jsx)(dS, { ...o })
      }
      ;(dC.className = dx),
        (dC.selector = '.chakra-portal'),
        (dC.displayName = 'Portal')
      var [d_, dE] = N({ name: 'ToastOptionsContext', strict: !1 }),
        dj = (e) => {
          let r = (0, R.useSyncExternalStore)(
              ds.subscribe,
              ds.getState,
              ds.getState
            ),
            { motionVariants: n, component: o = cJ, portalProps: i } = e,
            a = Object.keys(r),
            s = a.map((e) => {
              let i = r[e]
              return (0, I.jsx)(
                'ul',
                {
                  role: 'region',
                  'aria-live': 'polite',
                  id: `chakra-toast-manager-${e}`,
                  style: (function (e) {
                    let r = e.includes('top')
                        ? 'env(safe-area-inset-top, 0px)'
                        : void 0,
                      n = e.includes('bottom')
                        ? 'env(safe-area-inset-bottom, 0px)'
                        : void 0,
                      o = e.includes('left')
                        ? void 0
                        : 'env(safe-area-inset-right, 0px)',
                      i = e.includes('right')
                        ? void 0
                        : 'env(safe-area-inset-left, 0px)'
                    return {
                      position: 'fixed',
                      zIndex: 5500,
                      pointerEvents: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      margin: 'top' === e || 'bottom' === e ? '0 auto' : void 0,
                      top: r,
                      bottom: n,
                      right: o,
                      left: i,
                    }
                  })(e),
                  children: (0, I.jsx)(dg, {
                    initial: !1,
                    children: i.map((e) =>
                      (0, I.jsx)(o, { motionVariants: n, ...e }, e.id)
                    ),
                  }),
                },
                e
              )
            })
          return (0, I.jsx)(dC, { ...i, children: s })
        },
        dT = (e) =>
          function ({ children: r, theme: n = e, toastOptions: o, ...i }) {
            return (0, I.jsxs)(ed, {
              theme: n,
              ...i,
              children: [
                (0, I.jsx)(d_, {
                  value: null == o ? void 0 : o.defaultOptions,
                  children: r,
                }),
                (0, I.jsx)(dj, { ...o }),
              ],
            })
          },
        dA = dT(ia)
      dT(is)
      var dP = [
          'borders',
          'breakpoints',
          'colors',
          'components',
          'config',
          'direction',
          'fonts',
          'fontSizes',
          'fontWeights',
          'letterSpacings',
          'lineHeights',
          'radii',
          'shadows',
          'sizes',
          'space',
          'styles',
          'transition',
          'zIndices',
        ],
        dB = n(3637)
      function dR(e) {
        return 'function' == typeof e
      }
      var dz = (e) =>
          function (...r) {
            var n
            let o = [...r],
              i = r[r.length - 1]
            return (
              ((n = i),
              (0, eH.Kn)(n) &&
                dP.every((e) => Object.prototype.hasOwnProperty.call(n, e)) &&
                o.length > 1)
                ? (o = o.slice(0, o.length - 1))
                : (i = e),
              (function (...e) {
                return (r) => e.reduce((e, r) => r(e), r)
              })(
                ...o.map(
                  (e) => (r) =>
                    dR(e)
                      ? e(r)
                      : (function (...e) {
                          return dB({}, ...e, dF)
                        })(r, e)
                )
              )(i)
            )
          },
        dL = dz(ia)
      function dF(e, r, n, o) {
        if ((dR(e) || dR(r)) && Object.prototype.hasOwnProperty.call(o, n))
          return (...n) => {
            let o = dR(e) ? e(...n) : e,
              i = dR(r) ? r(...n) : r
            return dB({}, o, i, dF)
          }
      }
      dz(is)
      var dM = n(3776),
        d$ = (0, c1.G)(function (e, r) {
          let n = (0, c2.mq)('Text', e),
            {
              className: o,
              align: i,
              decoration: a,
              casing: s,
              ...l
            } = (0, G.Lr)(e),
            u = (0, dM.oA)({
              textAlign: e.align,
              textDecoration: e.decoration,
              textTransform: e.casing,
            })
          return (0,
          I.jsx)(cZ.m.p, { ref: r, className: (0, eH.cx)('chakra-text', e.className), ...u, ...l, __css: n })
        })
      d$.displayName = 'Text'
      var [dD, dI] = N({ strict: !1, name: 'ButtonGroupContext' })
      function dO(e) {
        let { children: r, className: n, ...o } = e,
          i = (0, R.isValidElement)(r)
            ? (0, R.cloneElement)(r, { 'aria-hidden': !0, focusable: !1 })
            : r,
          a = (0, eH.cx)('chakra-button__icon', n)
        return (0, I.jsx)(cZ.m.span, {
          display: 'inline-flex',
          alignSelf: 'center',
          flexShrink: 0,
          ...o,
          className: a,
          children: i,
        })
      }
      function dV(e) {
        let {
            label: r,
            placement: n,
            spacing: o = '0.5rem',
            children: i = (0, I.jsx)(c3, {
              color: 'currentColor',
              width: '1em',
              height: '1em',
            }),
            className: a,
            __css: s,
            ...l
          } = e,
          u = (0, eH.cx)('chakra-button__spinner', a),
          c = 'start' === n ? 'marginEnd' : 'marginStart',
          d = (0, R.useMemo)(
            () => ({
              display: 'flex',
              alignItems: 'center',
              position: r ? 'relative' : 'absolute',
              [c]: r ? o : 0,
              fontSize: '1em',
              lineHeight: 'normal',
              ...s,
            }),
            [s, r, c, o]
          )
        return (0, I.jsx)(cZ.m.div, {
          className: u,
          ...l,
          __css: d,
          children: i,
        })
      }
      function dW(...e) {
        return (r) => {
          e.forEach((e) => {
            !(function (e, r) {
              if (null != e) {
                if ('function' == typeof e) {
                  e(r)
                  return
                }
                try {
                  e.current = r
                } catch (n) {
                  throw Error(`Cannot assign value '${r}' to ref '${e}'`)
                }
              }
            })(e, r)
          })
        }
      }
      ;(dO.displayName = 'ButtonIcon'), (dV.displayName = 'ButtonSpinner')
      var dN = (0, c1.G)((e, r) => {
        let n = dI(),
          o = (0, c2.mq)('Button', { ...n, ...e }),
          {
            isDisabled: i = null == n ? void 0 : n.isDisabled,
            isLoading: a,
            isActive: s,
            children: l,
            leftIcon: u,
            rightIcon: c,
            loadingText: d,
            iconSpacing: p = '0.5rem',
            type: h,
            spinner: f,
            spinnerPlacement: m = 'start',
            className: g,
            as: b,
            ...v
          } = (0, G.Lr)(e),
          y = (0, R.useMemo)(() => {
            let e = { ...(null == o ? void 0 : o._focus), zIndex: 1 }
            return {
              display: 'inline-flex',
              appearance: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              userSelect: 'none',
              position: 'relative',
              whiteSpace: 'nowrap',
              verticalAlign: 'middle',
              outline: 'none',
              ...o,
              ...(!!n && { _focus: e }),
            }
          }, [o, n]),
          { ref: x, type: k } = (function (e) {
            let [r, n] = (0, R.useState)(!e),
              o = (0, R.useCallback)((e) => {
                e && n('BUTTON' === e.tagName)
              }, [])
            return { ref: o, type: r ? 'button' : void 0 }
          })(b),
          S = { rightIcon: c, leftIcon: u, iconSpacing: p, children: l }
        return (0, I.jsxs)(cZ.m.button, {
          ref: (function (...e) {
            return (0, R.useMemo)(() => dW(...e), e)
          })(r, x),
          as: b,
          type: null != h ? h : k,
          'data-active': (0, eH.PB)(s),
          'data-loading': (0, eH.PB)(a),
          __css: y,
          className: (0, eH.cx)('chakra-button', g),
          ...v,
          disabled: i || a,
          children: [
            a &&
              'start' === m &&
              (0, I.jsx)(dV, {
                className: 'chakra-button__spinner--start',
                label: d,
                placement: 'start',
                spacing: p,
                children: f,
              }),
            a
              ? d ||
                (0, I.jsx)(cZ.m.span, {
                  opacity: 0,
                  children: (0, I.jsx)(dH, { ...S }),
                })
              : (0, I.jsx)(dH, { ...S }),
            a &&
              'end' === m &&
              (0, I.jsx)(dV, {
                className: 'chakra-button__spinner--end',
                label: d,
                placement: 'end',
                spacing: p,
                children: f,
              }),
          ],
        })
      })
      function dH(e) {
        let { leftIcon: r, rightIcon: n, children: o, iconSpacing: i } = e
        return (0, I.jsxs)(I.Fragment, {
          children: [
            r && (0, I.jsx)(dO, { marginEnd: i, children: r }),
            o,
            n && (0, I.jsx)(dO, { marginStart: i, children: n }),
          ],
        })
      }
      function dU(e, r = {}) {
        let { ssr: n = !0, fallback: o } = r,
          { getWindow: i } = (function ({ defer: e } = {}) {
            let [, r] = (0, R.useReducer)((e) => e + 1, 0)
            return (
              ei(() => {
                e && r()
              }, [e]),
              (0, R.useContext)(eu)
            )
          })(),
          a = Array.isArray(e) ? e : [e],
          s = Array.isArray(o) ? o : [o]
        s = s.filter((e) => null != e)
        let [l, u] = (0, R.useState)(() =>
          a.map((e, r) => ({
            media: e,
            matches: n ? !!s[r] : i().matchMedia(e).matches,
          }))
        )
        return (
          (0, R.useEffect)(() => {
            let e = i()
            u(a.map((r) => ({ media: r, matches: e.matchMedia(r).matches })))
            let r = a.map((r) => e.matchMedia(r)),
              n = (e) => {
                u((r) =>
                  r
                    .slice()
                    .map((r) =>
                      r.media === e.media ? { ...r, matches: e.matches } : r
                    )
                )
              }
            return (
              r.forEach((e) => {
                'function' == typeof e.addListener
                  ? e.addListener(n)
                  : e.addEventListener('change', n)
              }),
              () => {
                r.forEach((e) => {
                  'function' == typeof e.removeListener
                    ? e.removeListener(n)
                    : e.removeEventListener('change', n)
                })
              }
            )
          }, [i]),
          l.map((e) => e.matches)
        )
      }
      dN.displayName = 'Button'
      var dq = (0, c1.G)(function (e, r) {
        let n = (0, c2.mq)('Heading', e),
          { className: o, ...i } = (0, G.Lr)(e)
        return (0,
        I.jsx)(cZ.m.h2, { ref: r, className: (0, eH.cx)('chakra-heading', e.className), ...i, __css: n })
      })
      dq.displayName = 'Heading'
      var dY = (0, c1.G)(function (e, r) {
        let {
          direction: n,
          align: o,
          justify: i,
          wrap: a,
          basis: s,
          grow: l,
          shrink: u,
          ...c
        } = e
        return (0,
        I.jsx)(cZ.m.div, { ref: r, __css: { display: 'flex', flexDirection: n, alignItems: o, justifyContent: i, flexWrap: a, flexBasis: s, flexGrow: l, flexShrink: u }, ...c })
      })
      dY.displayName = 'Flex'
      var dG = (e) =>
        (0, I.jsx)(cZ.m.div, {
          className: 'chakra-stack__item',
          ...e,
          __css: {
            display: 'inline-block',
            flex: '0 0 auto',
            minWidth: 0,
            ...e.__css,
          },
        })
      function dX(e, r) {
        return Array.isArray(e)
          ? e.map((e) => (null === e ? null : r(e)))
          : (0, eH.Kn)(e)
          ? Object.keys(e).reduce((n, o) => ((n[o] = r(e[o])), n), {})
          : null != e
          ? r(e)
          : null
      }
      ;(dG.displayName = 'StackItem'),
        Object.freeze(['base', 'sm', 'md', 'lg', 'xl', '2xl'])
      var dZ = '& > *:not(style) ~ *:not(style)',
        dK = (0, c1.G)((e, r) => {
          let {
              isInline: n,
              direction: o,
              align: i,
              justify: a,
              spacing: s = '0.5rem',
              wrap: l,
              children: u,
              divider: c,
              className: d,
              shouldWrapChildren: p,
              ...h
            } = e,
            f = n ? 'row' : null != o ? o : 'column',
            m = (0, R.useMemo)(
              () =>
                (function (e) {
                  let { spacing: r, direction: n } = e,
                    o = {
                      column: {
                        marginTop: r,
                        marginEnd: 0,
                        marginBottom: 0,
                        marginStart: 0,
                      },
                      row: {
                        marginTop: 0,
                        marginEnd: 0,
                        marginBottom: 0,
                        marginStart: r,
                      },
                      'column-reverse': {
                        marginTop: 0,
                        marginEnd: 0,
                        marginBottom: r,
                        marginStart: 0,
                      },
                      'row-reverse': {
                        marginTop: 0,
                        marginEnd: r,
                        marginBottom: 0,
                        marginStart: 0,
                      },
                    }
                  return { flexDirection: n, [dZ]: dX(n, (e) => o[e]) }
                })({ direction: f, spacing: s }),
              [f, s]
            ),
            g = (0, R.useMemo)(
              () =>
                (function (e) {
                  let { spacing: r, direction: n } = e,
                    o = {
                      column: {
                        my: r,
                        mx: 0,
                        borderLeftWidth: 0,
                        borderBottomWidth: '1px',
                      },
                      'column-reverse': {
                        my: r,
                        mx: 0,
                        borderLeftWidth: 0,
                        borderBottomWidth: '1px',
                      },
                      row: {
                        mx: r,
                        my: 0,
                        borderLeftWidth: '1px',
                        borderBottomWidth: 0,
                      },
                      'row-reverse': {
                        mx: r,
                        my: 0,
                        borderLeftWidth: '1px',
                        borderBottomWidth: 0,
                      },
                    }
                  return { '&': dX(n, (e) => o[e]) }
                })({ spacing: s, direction: f }),
              [s, f]
            ),
            b = !!c,
            v = !p && !b,
            y = (0, R.useMemo)(() => {
              let e = R.Children.toArray(u).filter((e) =>
                (0, R.isValidElement)(e)
              )
              return v
                ? e
                : e.map((r, n) => {
                    let o = void 0 !== r.key ? r.key : n,
                      i = n + 1 === e.length,
                      a = (0, I.jsx)(dG, { children: r }, o),
                      s = p ? a : r
                    if (!b) return s
                    let l = (0, R.cloneElement)(c, { __css: g })
                    return (0, I.jsxs)(
                      R.Fragment,
                      { children: [s, i ? null : l] },
                      o
                    )
                  })
            }, [c, g, b, v, p, u]),
            x = (0, eH.cx)('chakra-stack', d)
          return (0, I.jsx)(cZ.m.div, {
            ref: r,
            display: 'flex',
            alignItems: i,
            justifyContent: a,
            flexDirection: m.flexDirection,
            flexWrap: l,
            className: x,
            __css: b ? {} : { [dZ]: m[dZ] },
            ...h,
            children: y,
          })
        })
      dK.displayName = 'Stack'
      let dJ = (0, G.fj)({
          baseStyle: {},
          sizes: {},
          variants: {
            service: {
              border: '1px solid',
              borderColor: '#B181FF',
              backgroundColor: '#7853B6',
              borderRadius: '5px',
              width: '165px',
              height: '42px',
              fontSize: '12px',
              fontWeight: '400',
              color: '#FFFFFF',
            },
            about: {
              backgroundColor: '#4C2878',
              width: '273px',
              height: '73px',
              color: '#FFFFFF',
              fontSize: '20px',
              lineHeight: '24px',
              fontWeight: 600,
              borderRadius: 'none',
              _hover: { backgroundColor: '#FFFFFF', color: '#4C2878' },
              _focus: { backgroundColor: '#FFFFFF', color: '#4C2878' },
            },
            contact: {
              width: '100%',
              height: '62px',
              border: '1px solid #B181FF',
              fontWeight: 600,
              fontSize: '15px',
              lineHeight: '18px',
              color: '#B181FF',
              borderRadius: 'none',
              _hover: { color: '#FFFFFF', backgroundColor: '#B181FF' },
            },
            send: {
              width: '100%',
              height: '51px',
              backgroundColor: '#B181FF',
              fontWeight: 600,
              fontSize: '18px',
              lineHeight: '22px',
              color: '#FFFFFF',
              borderRadius: 'none',
              _hover: { color: '#B181FF', backgroundColor: '#FFFFFF' },
            },
          },
          defaultProps: {},
        }),
        dQ = (0, G.fj)({
          baseStyle: { color: '#FFFFFF' },
          sizes: {},
          variants: {
            title: { fontWeight: 800 },
            'other-title': {
              fontSize: '40px',
              lineHeight: '48px',
              fontWeight: 800,
            },
            services: {
              fontSize: '30px',
              lineHeight: '36px',
              fontWeight: 600,
              md: { fontSize: '40px', lineHeight: '48px', fontWeight: 800 },
            },
          },
          defaultProps: {},
        }),
        d0 = (0, G.fj)({
          baseStyle: { fontWeight: 300, color: '#FFFFFF' },
          sizes: {},
          variants: {
            subtitle: { fontSize: '12px', lineHeight: '15px' },
            paragraph: { fontSize: '18px', lineHeight: '22px' },
          },
          defaultProps: {},
        }),
        d1 = {
          black: {
            lightBackground: '#1B1C20',
            darkBackground: '#1F2226',
            text: '#696969',
            brand: '#878787',
            menu: '#838383',
            linebreak: 'rgba(83, 83, 83, 0.19)',
          },
          white: {
            text: '#FFFFFF',
            brand: '#E9E9E9',
            icons: '#949494',
            linebreak: 'rgba(255, 255, 255, 0.19)',
            background: '#F0EEF4',
          },
          purple: {
            lightBackground: '#5A2D94',
            darkBackground: '#36204B',
            callToActionButton: '#7853B6',
            serviceButtons: '#4C2878',
            contactButtons: '#B181FF',
          },
          red: {
            lightBackground: '#DA4167',
            mobileLightBackground: '#A3304C',
            darkBackground: '#762136',
            buttons: 'rgba(158, 77, 70, 0.1)',
          },
        },
        d2 = {
          colors: d1,
          fontSizes: {
            xs: '0.75rem',
            sm: '0.875rem',
            md: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '3.75rem',
            '7xl': '4.5rem',
            '8xl': '6rem',
            '9xl': '8rem',
          },
          fontWeights: {
            hairline: 100,
            thin: 200,
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
            black: 900,
          },
          letterSpacings: {
            tighter: '-0.05em',
            tight: '-0.025em',
            normal: '0',
            wide: '0.025em',
            wider: '0.05em',
            widest: '0.1em',
          },
          lineHeights: {
            normal: 'normal',
            none: 1,
            shorter: 1.25,
            short: 1.375,
            base: 1.5,
            tall: 1.625,
            taller: '2',
            3: '.75rem',
            4: '1rem',
            5: '1.25rem',
            6: '1.5rem',
            7: '1.75rem',
            8: '2rem',
            9: '2.25rem',
            10: '2.5rem',
          },
          config: { initialColorMode: 'dark' },
          components: { Button: dJ, Heading: dQ, Text: d0 },
        },
        d5 = (e) => {
          let { children: r } = e
          return (0, I.jsx)(dY, {
            w: '100%',
            h: '100%',
            minH: '100vh',
            direction: 'column',
            children: r,
          })
        }
      var d3 = n(4105),
        d4 = n.n(d3)
      let d9 = (e) => {
        let {
          children: r,
          direction: n,
          bgGradient: o,
          id: i,
          changePage: a,
          paddingTop: s,
        } = e
        return (0, I.jsx)(d4(), {
          upHandler: (e) => {
            e && (e.preventDefault(), a(1))
          },
          downHandler: (e) => {
            e && (e.preventDefault(), a(-1))
          },
          children: (0, I.jsx)(dY, {
            id: i,
            width: '100%',
            height: '100%',
            minH: '100vh',
            justify: 'center',
            align: 'center',
            bgGradient: o,
            direction: n,
            paddingLeft: [0, 0, 79],
            paddingTop: [0, 0, s],
            position: 'relative',
            children: r,
          }),
        })
      }
      var d6 = n(8191)
      let d8 = (0, d6.I)({
          displayName: 'SmallLogo',
          viewBox: '0 0 22 27',
          path: [
            (0, I.jsx)('path', {
              d: 'M0 3.30751L3.19375 2.12744L15.4492 25.7753L12.2555 26.9553L0 3.30751Z',
              fill: 'white',
              fillOpacity: '0.54',
            }),
            (0, I.jsx)('path', {
              d: 'M6.55079 1.18008L9.74454 0L22 23.6478L18.8062 24.8279L6.55079 1.18008Z',
              fill: 'white',
              fillOpacity: '0.54',
            }),
            (0, I.jsx)('path', {
              d: 'M11.053 9.87211L12.7987 13.2404L20.8384 1.47181L17.8193 0L11.053 9.87211Z',
              fill: 'white',
              fillOpacity: '0.17',
            }),
            (0, I.jsx)('path', {
              d: 'M8.86715 13.0691L10.5768 16.368L3.35503 27L0.335938 25.5282L8.86715 13.0691Z',
              fill: 'white',
              fillOpacity: '0.17',
            }),
          ],
        }),
        d7 = (e) => {
          let { children: r } = e
          return (0, I.jsx)(dK, {
            direction: 'row',
            spacing: '20px',
            justify: 'flex-end',
            width: '100%',
            marginRight: '127px',
            children: r,
          })
        },
        pe = (e) => {
          let { children: r, router: n } = e
          return (0, I.jsxs)(dY, {
            flexDirection: 'row',
            position: 'fixed',
            w: '100%',
            h: '66px',
            align: 'center',
            borderBottom:
              '/#Contact' === n
                ? '1px solid rgba(83, 83, 83, 0.19)'
                : '1px solid rgba(255, 255, 255, 0.19)',
            display: ['none', 'none', 'flex'],
            zIndex: 9999,
            children: [
              (0, I.jsx)(d8, { w: 22, h: 27, margin: '0px 30px 0px 27px' }),
              (0, I.jsx)(d7, { children: r }),
            ],
          })
        },
        pt = (0, d6.I)({
          displayName: 'TextLogo',
          viewBox: '0 0 23 17',
          path: [
            (0, I.jsx)('path', {
              d: 'M2.81745 17L1.8122 14.5321L21.9566 5.06198L22.9619 7.52987L2.81745 17Z',
              fill: '#B181FF',
            }),
            (0, I.jsx)('path', {
              d: 'M1.00519 11.938L-6.13643e-05 9.47013L20.1444 1.45149e-06L21.1496 2.4679L1.00519 11.938Z',
              fill: '#B181FF',
            }),
            (0, I.jsx)('path', {
              d: 'M8.40951 8.45902L11.2788 7.11012L1.2537 0.897592L-6.1637e-05 3.23053L8.40951 8.45902Z',
              fill: '#7853B6',
            }),
            (0, I.jsx)('path', {
              d: 'M11.1329 10.1481L13.9431 8.82702L22.9999 14.4075L21.7462 16.7404L11.1329 10.1481Z',
              fill: '#7853B6',
            }),
          ],
        }),
        pr = (0, d6.I)({
          displayName: 'Express',
          viewBox: '0 0 28 141',
          path: [
            (0, I.jsx)('path', {
              d: 'M22 140.453L5.77 134.003L0.0999991 136.223L0.099999 133.343L22 125.453L22 128.393L11.29 131.873C10.59 132.093 9.94 132.283 9.34 132.443C8.74 132.583 8.29 132.673 7.99 132.713C8.29 132.753 8.74 132.853 9.34 133.013C9.94 133.153 10.59 133.353 11.29 133.613L22 137.513L22 140.453Z',
              fill: 'currentColor',
            }),
            (0, I.jsx)('path', {
              d: 'M22.3 114.965C22.3 116.265 22.04 117.405 21.52 118.385C21 119.345 20.27 120.095 19.33 120.635C18.37 121.155 17.26 121.415 16 121.415L11.5 121.415C10.22 121.415 9.11 121.155 8.17 120.635C7.23 120.095 6.5 119.345 5.98 118.385C5.46 117.405 5.2 116.265 5.2 114.965C5.2 113.665 5.46 112.535 5.98 111.575C6.5 110.595 7.23 109.845 8.17 109.325C9.11 108.785 10.22 108.515 11.5 108.515L14.41 108.515L14.41 118.775L16 118.775C17.3 118.775 18.3 118.445 19 117.785C19.68 117.125 20.02 116.185 20.02 114.965C20.02 113.925 19.84 113.085 19.48 112.445C19.1 111.805 18.54 111.415 17.8 111.275L17.8 108.575C19.18 108.755 20.28 109.435 21.1 110.615C21.9 111.775 22.3 113.225 22.3 114.965ZM12.61 111.155L11.5 111.155C10.2 111.155 9.2 111.485 8.5 112.145C7.8 112.785 7.45 113.725 7.45 114.965C7.45 116.185 7.8 117.125 8.5 117.785C9.2 118.445 10.2 118.775 11.5 118.775L12.37 118.775L12.37 110.945L12.61 111.155ZM22 104.477L13.51 98.6266L5.5 104.117L5.5 100.937L10.6 97.6666C10.82 97.5266 11.06 97.3966 11.32 97.2766C11.58 97.1366 11.79 97.0266 11.95 96.9466C11.79 96.8866 11.58 96.7966 11.32 96.6766C11.06 96.5366 10.82 96.3966 10.6 96.2566L5.5 92.9566L5.5 89.8066L13.54 95.2966L22 89.4766L22 92.6566L16.6 96.1966C16.38 96.3366 16.13 96.4766 15.85 96.6166C15.55 96.7366 15.31 96.8466 15.13 96.9466C15.31 97.0266 15.55 97.1466 15.85 97.3066C16.13 97.4466 16.38 97.5966 16.6 97.7566L22 101.327L22 104.477ZM27.4 85.2283L5.5 85.2283L5.5 82.5283L8.65 82.5283L8.65 81.9883L9.28 82.5283C8.02 82.5283 7.03 82.1183 6.31 81.2983C5.57 80.4583 5.2 79.3583 5.2 77.9983C5.2 76.3383 5.75 75.0183 6.85 74.0383C7.93 73.0383 9.42 72.5383 11.32 72.5383L16.15 72.5383C17.41 72.5383 18.5 72.7683 19.42 73.2283C20.34 73.6683 21.05 74.2983 21.55 75.1183C22.05 75.9183 22.3 76.8783 22.3 77.9983C22.3 79.3383 21.93 80.4283 21.19 81.2683C20.45 82.1083 19.46 82.5283 18.22 82.5283L18.85 81.9883L18.85 82.5883L22.6 82.5283L27.4 82.5283L27.4 85.2283ZM19.96 78.8983C19.96 77.7583 19.62 76.8683 18.94 76.2283C18.26 75.5683 17.28 75.2383 16 75.2383L11.5 75.2383C10.22 75.2383 9.24 75.5683 8.56 76.2283C7.88 76.8683 7.54 77.7583 7.54 78.8983C7.54 79.9983 7.89 80.8783 8.59 81.5383C9.29 82.1983 10.26 82.5283 11.5 82.5283L16 82.5283C17.24 82.5283 18.21 82.1983 18.91 81.5383C19.61 80.8783 19.96 79.9983 19.96 78.8983ZM22 66.67L5.5 66.67L5.5 64.03L8.65 64.03L8.65 63.4L10.6 64.27C8.82 64.27 7.48 63.89 6.58 63.13C5.66 62.35 5.2 61.2 5.2 59.68C5.2 57.94 5.75 56.56 6.85 55.54C7.93 54.5 9.4 53.98 11.26 53.98L12.25 53.98L12.25 56.68L11.5 56.68C10.2 56.68 9.21 57 8.53 57.64C7.83 58.26 7.48 59.15 7.48 60.31C7.48 61.45 7.83 62.35 8.53 63.01C9.23 63.65 10.22 63.97 11.5 63.97L22 63.97L22 66.67ZM22.3 43.0117C22.3 44.3117 22.04 45.4517 21.52 46.4317C21 47.3917 20.27 48.1417 19.33 48.6817C18.37 49.2017 17.26 49.4617 16 49.4617L11.5 49.4617C10.22 49.4617 9.10999 49.2017 8.17 48.6817C7.23 48.1417 6.5 47.3917 5.97999 46.4317C5.46 45.4517 5.2 44.3117 5.2 43.0117C5.2 41.7117 5.46 40.5817 5.97999 39.6217C6.49999 38.6417 7.22999 37.8917 8.16999 37.3717C9.10999 36.8317 10.22 36.5617 11.5 36.5617L14.41 36.5617L14.41 46.8217L16 46.8217C17.3 46.8217 18.3 46.4917 19 45.8317C19.68 45.1717 20.02 44.2317 20.02 43.0117C20.02 41.9717 19.84 41.1317 19.48 40.4917C19.1 39.8517 18.54 39.4617 17.8 39.3217L17.8 36.6217C19.18 36.8017 20.28 37.4817 21.1 38.6617C21.9 39.8217 22.3 41.2717 22.3 43.0117ZM12.61 39.2017L11.5 39.2017C10.2 39.2017 9.19999 39.5317 8.49999 40.1917C7.8 40.8317 7.45 41.7717 7.45 43.0117C7.45 44.2317 7.8 45.1717 8.5 45.8317C9.2 46.4917 10.2 46.8217 11.5 46.8217L12.37 46.8217L12.37 38.9917L12.61 39.2017ZM22.24 25.5334C22.24 26.6534 22.07 27.6334 21.73 28.4734C21.37 29.2934 20.87 29.9534 20.23 30.4534C19.59 30.9334 18.83 31.2234 17.95 31.3234L17.95 28.6234C18.53 28.5034 18.99 28.1834 19.33 27.6634C19.67 27.1234 19.84 26.4134 19.84 25.5334L19.84 24.2734C19.84 23.2134 19.63 22.4234 19.21 21.9034C18.77 21.3834 18.19 21.1234 17.47 21.1234C16.77 21.1234 16.22 21.3634 15.82 21.8434C15.4 22.3034 15.12 22.9934 14.98 23.9134L14.62 26.1334C14.34 27.7534 13.84 28.9634 13.12 29.7634C12.38 30.5434 11.31 30.9334 9.90999 30.9334C8.42999 30.9334 7.28999 30.4634 6.48999 29.5234C5.66999 28.5834 5.25999 27.1734 5.25999 25.2934L5.25999 24.1534C5.25999 22.5734 5.62999 21.3034 6.36999 20.3434C7.10999 19.3834 8.10999 18.8034 9.36999 18.6034L9.36999 21.3034C8.84999 21.4234 8.43999 21.7234 8.13999 22.2034C7.81999 22.6834 7.65999 23.3334 7.65999 24.1534L7.65999 25.2934C7.65999 26.3134 7.84999 27.0634 8.22999 27.5434C8.60999 28.0034 9.17999 28.2334 9.93999 28.2334C10.62 28.2334 11.12 28.0334 11.44 27.6334C11.76 27.2334 11.99 26.6034 12.13 25.7434L12.49 23.5234C12.77 21.7434 13.29 20.4534 14.05 19.6534C14.81 18.8334 15.91 18.4234 17.35 18.4234C18.87 18.4234 20.07 18.9134 20.95 19.8934C21.81 20.8534 22.24 22.3134 22.24 24.2734L22.24 25.5334ZM22.24 7.54515C22.24 8.66515 22.07 9.64515 21.73 10.4852C21.37 11.3052 20.87 11.9652 20.23 12.4652C19.59 12.9452 18.83 13.2352 17.95 13.3352L17.95 10.6352C18.53 10.5152 18.99 10.1952 19.33 9.67515C19.67 9.13515 19.84 8.42515 19.84 7.54515L19.84 6.28515C19.84 5.22515 19.63 4.43515 19.21 3.91515C18.77 3.39515 18.19 3.13515 17.47 3.13515C16.77 3.13515 16.22 3.37515 15.82 3.85515C15.4 4.31515 15.12 5.00515 14.98 5.92515L14.62 8.14515C14.34 9.76515 13.84 10.9752 13.12 11.7752C12.38 12.5552 11.31 12.9452 9.90999 12.9452C8.42999 12.9452 7.28999 12.4752 6.48999 11.5352C5.66999 10.5952 5.25999 9.18515 5.25999 7.30515L5.25999 6.16515C5.25999 4.58515 5.62999 3.31515 6.36999 2.35515C7.10999 1.39515 8.10999 0.815155 9.36999 0.615155L9.36999 3.31515C8.84999 3.43515 8.43999 3.73515 8.13999 4.21515C7.81999 4.69515 7.65999 5.34515 7.65999 6.16515L7.65999 7.30515C7.65999 8.32515 7.84999 9.07515 8.22999 9.55515C8.60999 10.0152 9.17999 10.2452 9.93999 10.2452C10.62 10.2452 11.12 10.0452 11.44 9.64515C11.76 9.24515 11.99 8.61515 12.13 7.75515L12.49 5.53515C12.77 3.75515 13.29 2.46515 14.05 1.66515C14.81 0.845153 15.91 0.435153 17.35 0.435153C18.87 0.435153 20.07 0.925153 20.95 1.90515C21.81 2.86515 22.24 4.32515 22.24 6.28515L22.24 7.54515Z',
              fill: 'currentColor',
            }),
          ],
        }),
        pn = (e) => {
          let { router: r } = e
          return (0, I.jsxs)(dY, {
            flexDirection: 'column',
            position: 'fixed',
            width: '79px',
            height: '100vh',
            align: 'center',
            justify: 'center',
            paddingTop: '64px',
            borderRight:
              '/#Contact' === r
                ? '1px solid rgba(83, 83, 83, 0.19)'
                : '1px solid rgba(255, 255, 255, 0.19)',
            display: ['none', 'none', 'flex'],
            zIndex: 9999,
            children: [
              (0, I.jsx)(pr, {
                height: '141px',
                width: '28px',
                marginBottom: '15px',
                color: '/#Contact' === r ? '#696969' : 'white',
              }),
              (0, I.jsx)(pt, {
                width: '30px',
                height: '17px',
                paddingRight: '5px',
              }),
            ],
          })
        },
        po = (e) => {
          let { router: r, children: n } = e
          return (0, I.jsx)(d$, {
            margin: '20px 10px',
            color: '/#Contact' === r ? d1.black.menu : d1.white.text,
            children: n,
          })
        },
        pi = (0, d6.I)({
          displayName: 'Chevron',
          viewBox: '0 0 26 17',
          path: [
            (0, I.jsx)('line', {
              x1: '24.8226',
              y1: '2.06066',
              x2: '11.8226',
              y2: '15.0607',
              stroke: 'white',
              strokeWidth: '3',
            }),
            (0, I.jsx)('line', {
              x1: '1.06066',
              y1: '1.93928',
              x2: '14.0607',
              y2: '14.9393',
              stroke: 'white',
              strokeWidth: '3',
            }),
          ],
        }),
        pa = () =>
          (0, I.jsx)(dY, {
            position: 'absolute',
            bottom: '0px',
            left: '50%',
            display: ['none', 'none', 'flex'],
            paddingY: '40px',
            paddingX: '26px',
            children: (0, I.jsx)(pi, { width: '26px', height: '17px' }),
          })
      var ps = (0, c1.G)(function (e, r) {
        let n = (0, c2.mq)('Link', e),
          { className: o, isExternal: i, ...a } = (0, G.Lr)(e)
        return (0,
        I.jsx)(cZ.m.a, { target: i ? '_blank' : void 0, rel: i ? 'noopener' : void 0, ref: r, className: (0, eH.cx)('chakra-link', o), ...a, __css: n })
      })
      ps.displayName = 'Link'
      let pl = (0, d6.I)({
          displayName: 'Github',
          viewBox: '0 0 20 20',
          path: (0, I.jsx)('path', {
            d: 'M10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 14.42 2.87 18.17 6.84 19.5C7.34 19.58 7.5 19.27 7.5 19V17.31C4.73 17.91 4.14 15.97 4.14 15.97C3.68 14.81 3.03 14.5 3.03 14.5C2.12 13.88 3.1 13.9 3.1 13.9C4.1 13.97 4.63 14.93 4.63 14.93C5.5 16.45 6.97 16 7.54 15.76C7.63 15.11 7.89 14.67 8.17 14.42C5.95 14.17 3.62 13.31 3.62 9.5C3.62 8.39 4 7.5 4.65 6.79C4.55 6.54 4.2 5.5 4.75 4.15C4.75 4.15 5.59 3.88 7.5 5.17C8.29 4.95 9.15 4.84 10 4.84C10.85 4.84 11.71 4.95 12.5 5.17C14.41 3.88 15.25 4.15 15.25 4.15C15.8 5.5 15.45 6.54 15.35 6.79C16 7.5 16.38 8.39 16.38 9.5C16.38 13.32 14.04 14.16 11.81 14.41C12.17 14.72 12.5 15.33 12.5 16.26V19C12.5 19.27 12.66 19.59 13.17 19.5C17.14 18.16 20 14.42 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0Z',
            fill: '#949494',
          }),
        }),
        pu = (0, d6.I)({
          displayName: 'Twitter',
          viewBox: '0 0 21 17',
          path: (0, I.jsx)('path', {
            d: 'M20.92 2C20.15 2.35 19.32 2.58 18.46 2.69C19.34 2.16 20.02 1.32 20.34 0.31C19.51 0.81 18.59 1.16 17.62 1.36C16.83 0.5 15.72 0 14.46 0C12.11 0 10.19 1.92 10.19 4.29C10.19 4.63 10.23 4.96 10.3 5.27C6.74 5.09 3.57 3.38 1.46 0.79C1.09 1.42 0.88 2.16 0.88 2.94C0.88 4.43 1.63 5.75 2.79 6.5C2.08 6.5 1.42 6.3 0.84 6V6.03C0.84 8.11 2.32 9.85 4.28 10.24C3.65073 10.4122 2.9901 10.4362 2.35 10.31C2.62161 11.1625 3.15354 11.9084 3.87102 12.4429C4.5885 12.9775 5.45545 13.2737 6.35 13.29C4.83363 14.4904 2.954 15.1393 1.02 15.13C0.68 15.13 0.34 15.11 0 15.07C1.9 16.29 4.16 17 6.58 17C14.46 17 18.79 10.46 18.79 4.79C18.79 4.6 18.79 4.42 18.78 4.23C19.62 3.63 20.34 2.87 20.92 2Z',
            fill: '#949494',
          }),
        }),
        pc = () =>
          (0, I.jsxs)(dK, {
            direction: 'row',
            spacing: '12px',
            position: 'absolute',
            bottom: '0px',
            left: ['143px', '143px', '143px', '143px', '215px'],
            display: ['none', 'none', 'none', 'flex'],
            paddingY: '40px',
            children: [
              (0, I.jsx)(ps, {
                href: 'https://github.com/',
                isExternal: !0,
                title: 'Github',
                children: (0, I.jsx)(pl, { width: '20px', height: '20px' }),
              }),
              (0, I.jsx)(ps, {
                href: 'https://twitter.com/',
                isExternal: !0,
                title: 'Twitter',
                children: (0, I.jsx)(pu, { width: '21px', height: '17px' }),
              }),
            ],
          }),
        pd = (e) => {
          let { children: r, display: n } = e
          return (0, I.jsx)(dY, {
            width: ['267px', '267px', '191px'],
            height: ['106px', '106px', '258px'],
            backgroundColor: 'rgba(158, 77, 70, 0.1)',
            boxShadow: '0px 0px 70px 2px rgba(0, 0, 0, 0.1)',
            borderRadius: '10px 0px',
            justify: 'center',
            align: 'center',
            flexDirection: ['row', 'row', 'column'],
            display: n,
            children: r,
          })
        }
      var [pp, ph] = N({
          name: 'FormControlStylesContext',
          errorMessage:
            'useFormControlStyles returned is \'undefined\'. Seems you forgot to wrap the components in "<FormControl />" ',
        }),
        [pf, pm] = N({ strict: !1, name: 'FormControlContext' })
      ;((0, c1.G)(function (e, r) {
        let n = (0, c2.jC)('Form', e),
          o = (0, G.Lr)(e),
          {
            getRootProps: i,
            htmlProps: a,
            ...s
          } = (function (e) {
            let {
                id: r,
                isRequired: n,
                isInvalid: o,
                isDisabled: i,
                isReadOnly: a,
                ...s
              } = e,
              l = (0, R.useId)(),
              u = r || `field-${l}`,
              c = `${u}-label`,
              d = `${u}-feedback`,
              p = `${u}-helptext`,
              [h, f] = (0, R.useState)(!1),
              [m, g] = (0, R.useState)(!1),
              [b, v] = (0, R.useState)(!1),
              y = (0, R.useCallback)(
                (e = {}, r = null) => ({
                  id: p,
                  ...e,
                  ref: dW(r, (e) => {
                    e && g(!0)
                  }),
                }),
                [p]
              ),
              x = (0, R.useCallback)(
                (e = {}, r = null) => {
                  var n, s
                  return {
                    ...e,
                    ref: r,
                    'data-focus': (0, eH.PB)(b),
                    'data-disabled': (0, eH.PB)(i),
                    'data-invalid': (0, eH.PB)(o),
                    'data-readonly': (0, eH.PB)(a),
                    id: null != (n = e.id) ? n : c,
                    htmlFor: null != (s = e.htmlFor) ? s : u,
                  }
                },
                [u, i, b, o, a, c]
              ),
              k = (0, R.useCallback)(
                (e = {}, r = null) => ({
                  id: d,
                  ...e,
                  ref: dW(r, (e) => {
                    e && f(!0)
                  }),
                  'aria-live': 'polite',
                }),
                [d]
              ),
              S = (0, R.useCallback)(
                (e = {}, r = null) => ({ ...e, ...s, ref: r, role: 'group' }),
                [s]
              ),
              w = (0, R.useCallback)(
                (e = {}, r = null) => ({
                  ...e,
                  ref: r,
                  role: 'presentation',
                  'aria-hidden': !0,
                  children: e.children || '*',
                }),
                []
              )
            return {
              isRequired: !!n,
              isInvalid: !!o,
              isReadOnly: !!a,
              isDisabled: !!i,
              isFocused: !!b,
              onFocus: () => v(!0),
              onBlur: () => v(!1),
              hasFeedbackText: h,
              setHasFeedbackText: f,
              hasHelpText: m,
              setHasHelpText: g,
              id: u,
              labelId: c,
              feedbackId: d,
              helpTextId: p,
              htmlProps: s,
              getHelpTextProps: y,
              getErrorMessageProps: k,
              getRootProps: S,
              getLabelProps: x,
              getRequiredIndicatorProps: w,
            }
          })(o),
          l = (0, eH.cx)('chakra-form-control', e.className)
        return (0,
        I.jsx)(pf, { value: s, children: (0, I.jsx)(pp, { value: n, children: (0, I.jsx)(cZ.m.div, { ...i({}, r), className: l, __css: n.container }) }) })
      }).displayName = 'FormControl'),
        ((0, c1.G)(function (e, r) {
          let n = pm(),
            o = ph(),
            i = (0, eH.cx)('chakra-form__helper-text', e.className)
          return (0,
          I.jsx)(cZ.m.div, { ...(null == n ? void 0 : n.getHelpTextProps(e, r)), __css: o.helperText, className: i })
        }).displayName = 'FormHelperText')
      var pg = (0, c1.G)(function (e, r) {
        let { htmlSize: n, ...o } = e,
          i = (0, c2.jC)('Input', o),
          a = (0, G.Lr)(o),
          s = (function (e) {
            let {
              isDisabled: r,
              isInvalid: n,
              isReadOnly: o,
              isRequired: i,
              ...a
            } = (function (e) {
              var r, n, o
              let i = pm(),
                {
                  id: a,
                  disabled: s,
                  readOnly: l,
                  required: u,
                  isRequired: c,
                  isInvalid: d,
                  isReadOnly: p,
                  isDisabled: h,
                  onFocus: f,
                  onBlur: m,
                  ...g
                } = e,
                b = e['aria-describedby'] ? [e['aria-describedby']] : []
              return (
                (null == i ? void 0 : i.hasFeedbackText) &&
                  (null == i ? void 0 : i.isInvalid) &&
                  b.push(i.feedbackId),
                (null == i ? void 0 : i.hasHelpText) && b.push(i.helpTextId),
                {
                  ...g,
                  'aria-describedby': b.join(' ') || void 0,
                  id: null != a ? a : null == i ? void 0 : i.id,
                  isDisabled:
                    null != (r = null != s ? s : h)
                      ? r
                      : null == i
                      ? void 0
                      : i.isDisabled,
                  isReadOnly:
                    null != (n = null != l ? l : p)
                      ? n
                      : null == i
                      ? void 0
                      : i.isReadOnly,
                  isRequired:
                    null != (o = null != u ? u : c)
                      ? o
                      : null == i
                      ? void 0
                      : i.isRequired,
                  isInvalid: null != d ? d : null == i ? void 0 : i.isInvalid,
                  onFocus: (0, eH.v0)(null == i ? void 0 : i.onFocus, f),
                  onBlur: (0, eH.v0)(null == i ? void 0 : i.onBlur, m),
                }
              )
            })(e)
            return {
              ...a,
              disabled: r,
              readOnly: o,
              required: i,
              'aria-invalid': (0, eH.Qm)(n),
              'aria-required': (0, eH.Qm)(i),
              'aria-readonly': (0, eH.Qm)(o),
            }
          })(a),
          l = (0, eH.cx)('chakra-input', e.className)
        return (0,
        I.jsx)(cZ.m.input, { size: n, ...s, __css: i.field, ref: r, className: l })
      })
      ;(pg.displayName = 'Input'), (pg.id = 'Input')
      let pb = (e) => {
        let { placeholder: r } = e
        return (0, I.jsx)(pg, {
          placeholder: r,
          size: 'sm',
          variant: 'flushed',
          _placeholder: { opacity: 1, color: '#696969' },
          fontSize: '18px',
          fontWeight: 600,
          borderBottom: '1px solid #696969',
          color: 'black',
        })
      }
    },
    3761: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__Inter_9c9965', '__Inter_Fallback_9c9965'",
          fontStyle: 'normal',
        },
        className: '__className_9c9965',
      }
    },
    1803: function () {},
    9097: function (e, r, n) {
      e.exports = n(1088)
    },
    8435: function (e) {
      var r = 'undefined' != typeof Element,
        n = 'function' == typeof Map,
        o = 'function' == typeof Set,
        i = 'function' == typeof ArrayBuffer && !!ArrayBuffer.isView
      e.exports = function (e, a) {
        try {
          return (function e(a, s) {
            if (a === s) return !0
            if (a && s && 'object' == typeof a && 'object' == typeof s) {
              var l, u, c, d
              if (a.constructor !== s.constructor) return !1
              if (Array.isArray(a)) {
                if ((l = a.length) != s.length) return !1
                for (u = l; 0 != u--; ) if (!e(a[u], s[u])) return !1
                return !0
              }
              if (n && a instanceof Map && s instanceof Map) {
                if (a.size !== s.size) return !1
                for (d = a.entries(); !(u = d.next()).done; )
                  if (!s.has(u.value[0])) return !1
                for (d = a.entries(); !(u = d.next()).done; )
                  if (!e(u.value[1], s.get(u.value[0]))) return !1
                return !0
              }
              if (o && a instanceof Set && s instanceof Set) {
                if (a.size !== s.size) return !1
                for (d = a.entries(); !(u = d.next()).done; )
                  if (!s.has(u.value[0])) return !1
                return !0
              }
              if (i && ArrayBuffer.isView(a) && ArrayBuffer.isView(s)) {
                if ((l = a.length) != s.length) return !1
                for (u = l; 0 != u--; ) if (a[u] !== s[u]) return !1
                return !0
              }
              if (a.constructor === RegExp)
                return a.source === s.source && a.flags === s.flags
              if (a.valueOf !== Object.prototype.valueOf)
                return a.valueOf() === s.valueOf()
              if (a.toString !== Object.prototype.toString)
                return a.toString() === s.toString()
              if ((l = (c = Object.keys(a)).length) !== Object.keys(s).length)
                return !1
              for (u = l; 0 != u--; )
                if (!Object.prototype.hasOwnProperty.call(s, c[u])) return !1
              if (r && a instanceof Element) return !1
              for (u = l; 0 != u--; )
                if (
                  (('_owner' !== c[u] && '__v' !== c[u] && '__o' !== c[u]) ||
                    !a.$$typeof) &&
                  !e(a[c[u]], s[c[u]])
                )
                  return !1
              return !0
            }
            return a != a && s != s
          })(e, a)
        } catch (e) {
          if ((e.message || '').match(/stack|recursion/i))
            return (
              console.warn('react-fast-compare cannot handle circular refs'), !1
            )
          throw e
        }
      }
    },
    6866: function (e, r) {
      'use strict'
      /** @license React v16.13.1
       * react-is.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var n = 'function' == typeof Symbol && Symbol.for,
        o = n ? Symbol.for('react.element') : 60103,
        i = n ? Symbol.for('react.portal') : 60106,
        a = n ? Symbol.for('react.fragment') : 60107,
        s = n ? Symbol.for('react.strict_mode') : 60108,
        l = n ? Symbol.for('react.profiler') : 60114,
        u = n ? Symbol.for('react.provider') : 60109,
        c = n ? Symbol.for('react.context') : 60110,
        d = n ? Symbol.for('react.async_mode') : 60111,
        p = n ? Symbol.for('react.concurrent_mode') : 60111,
        h = n ? Symbol.for('react.forward_ref') : 60112,
        f = n ? Symbol.for('react.suspense') : 60113,
        m = n ? Symbol.for('react.suspense_list') : 60120,
        g = n ? Symbol.for('react.memo') : 60115,
        b = n ? Symbol.for('react.lazy') : 60116,
        v = n ? Symbol.for('react.block') : 60121,
        y = n ? Symbol.for('react.fundamental') : 60117,
        x = n ? Symbol.for('react.responder') : 60118,
        k = n ? Symbol.for('react.scope') : 60119
      function S(e) {
        if ('object' == typeof e && null !== e) {
          var r = e.$$typeof
          switch (r) {
            case o:
              switch ((e = e.type)) {
                case d:
                case p:
                case a:
                case l:
                case s:
                case f:
                  return e
                default:
                  switch ((e = e && e.$$typeof)) {
                    case c:
                    case h:
                    case b:
                    case g:
                    case u:
                      return e
                    default:
                      return r
                  }
              }
            case i:
              return r
          }
        }
      }
      function w(e) {
        return S(e) === p
      }
      ;(r.AsyncMode = d),
        (r.ConcurrentMode = p),
        (r.ContextConsumer = c),
        (r.ContextProvider = u),
        (r.Element = o),
        (r.ForwardRef = h),
        (r.Fragment = a),
        (r.Lazy = b),
        (r.Memo = g),
        (r.Portal = i),
        (r.Profiler = l),
        (r.StrictMode = s),
        (r.Suspense = f),
        (r.isAsyncMode = function (e) {
          return w(e) || S(e) === d
        }),
        (r.isConcurrentMode = w),
        (r.isContextConsumer = function (e) {
          return S(e) === c
        }),
        (r.isContextProvider = function (e) {
          return S(e) === u
        }),
        (r.isElement = function (e) {
          return 'object' == typeof e && null !== e && e.$$typeof === o
        }),
        (r.isForwardRef = function (e) {
          return S(e) === h
        }),
        (r.isFragment = function (e) {
          return S(e) === a
        }),
        (r.isLazy = function (e) {
          return S(e) === b
        }),
        (r.isMemo = function (e) {
          return S(e) === g
        }),
        (r.isPortal = function (e) {
          return S(e) === i
        }),
        (r.isProfiler = function (e) {
          return S(e) === l
        }),
        (r.isStrictMode = function (e) {
          return S(e) === s
        }),
        (r.isSuspense = function (e) {
          return S(e) === f
        }),
        (r.isValidElementType = function (e) {
          return (
            'string' == typeof e ||
            'function' == typeof e ||
            e === a ||
            e === p ||
            e === l ||
            e === s ||
            e === f ||
            e === m ||
            ('object' == typeof e &&
              null !== e &&
              (e.$$typeof === b ||
                e.$$typeof === g ||
                e.$$typeof === u ||
                e.$$typeof === c ||
                e.$$typeof === h ||
                e.$$typeof === y ||
                e.$$typeof === x ||
                e.$$typeof === k ||
                e.$$typeof === v))
          )
        }),
        (r.typeOf = S)
    },
    8570: function (e, r, n) {
      'use strict'
      e.exports = n(6866)
    },
    4105: function (e, r, n) {
      e.exports = (function (e) {
        var r = {}
        function n(o) {
          if (r[o]) return r[o].exports
          var i = (r[o] = { i: o, l: !1, exports: {} })
          return e[o].call(i.exports, i, i.exports, n), (i.l = !0), i.exports
        }
        return (
          (n.m = e),
          (n.c = r),
          (n.d = function (e, r, o) {
            n.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: o })
          }),
          (n.r = function (e) {
            'undefined' != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
              Object.defineProperty(e, '__esModule', { value: !0 })
          }),
          (n.t = function (e, r) {
            if (
              (1 & r && (e = n(e)),
              8 & r || (4 & r && 'object' == typeof e && e && e.__esModule))
            )
              return e
            var o = Object.create(null)
            if (
              (n.r(o),
              Object.defineProperty(o, 'default', { enumerable: !0, value: e }),
              2 & r && 'string' != typeof e)
            )
              for (var i in e)
                n.d(
                  o,
                  i,
                  function (r) {
                    return e[r]
                  }.bind(null, i)
                )
            return o
          }),
          (n.n = function (e) {
            var r =
              e && e.__esModule
                ? function () {
                    return e.default
                  }
                : function () {
                    return e
                  }
            return n.d(r, 'a', r), r
          }),
          (n.o = function (e, r) {
            return Object.prototype.hasOwnProperty.call(e, r)
          }),
          (n.p = ''),
          n((n.s = 3))
        )
      })([
        function (e, r, n) {
          e.exports = n(4)()
        },
        function (e, r) {
          e.exports = n(2784)
        },
        function (e, r, n) {
          ;(function () {
            ;(null !== r ? r : this).Lethargy = (function () {
              function e(e, r, n, o) {
                ;(this.stability = null != e ? Math.abs(e) : 8),
                  (this.sensitivity = null != r ? 1 + Math.abs(r) : 100),
                  (this.tolerance = null != n ? 1 + Math.abs(n) : 1.1),
                  (this.delay = null != o ? o : 150),
                  (this.lastUpDeltas = function () {
                    var e, r, n
                    for (
                      n = [], e = 1, r = 2 * this.stability;
                      1 <= r ? e <= r : e >= r;
                      1 <= r ? e++ : e--
                    )
                      n.push(null)
                    return n
                  }.call(this)),
                  (this.lastDownDeltas = function () {
                    var e, r, n
                    for (
                      n = [], e = 1, r = 2 * this.stability;
                      1 <= r ? e <= r : e >= r;
                      1 <= r ? e++ : e--
                    )
                      n.push(null)
                    return n
                  }.call(this)),
                  (this.deltasTimestamp = function () {
                    var e, r, n
                    for (
                      n = [], e = 1, r = 2 * this.stability;
                      1 <= r ? e <= r : e >= r;
                      1 <= r ? e++ : e--
                    )
                      n.push(null)
                    return n
                  }.call(this))
              }
              return (
                (e.prototype.check = function (e) {
                  var r
                  return (
                    null != (e = e.originalEvent || e).wheelDelta
                      ? (r = e.wheelDelta)
                      : null != e.deltaY
                      ? (r = -40 * e.deltaY)
                      : (null == e.detail && 0 !== e.detail) ||
                        (r = -40 * e.detail),
                    this.deltasTimestamp.push(Date.now()),
                    this.deltasTimestamp.shift(),
                    r > 0
                      ? (this.lastUpDeltas.push(r),
                        this.lastUpDeltas.shift(),
                        this.isInertia(1))
                      : (this.lastDownDeltas.push(r),
                        this.lastDownDeltas.shift(),
                        this.isInertia(-1))
                  )
                }),
                (e.prototype.isInertia = function (e) {
                  var r, n, o, i, a, s
                  return null ===
                    (r = -1 === e ? this.lastDownDeltas : this.lastUpDeltas)[0]
                    ? e
                    : !(
                        this.deltasTimestamp[2 * this.stability - 2] +
                          this.delay >
                          Date.now() && r[0] === r[2 * this.stability - 1]
                      ) &&
                        ((o = r.slice(0, this.stability)),
                        (n = r.slice(this.stability, 2 * this.stability)),
                        (s = o.reduce(function (e, r) {
                          return e + r
                        })),
                        (a = n.reduce(function (e, r) {
                          return e + r
                        })),
                        Math.abs(s / o.length) <
                          Math.abs((i = a / n.length) * this.tolerance) &&
                          this.sensitivity < Math.abs(i) &&
                          e)
                }),
                (e.prototype.showLastUpDeltas = function () {
                  return this.lastUpDeltas
                }),
                (e.prototype.showLastDownDeltas = function () {
                  return this.lastDownDeltas
                }),
                e
              )
            })()
          }).call(this)
        },
        function (e, r, n) {
          'use strict'
          n.r(r)
          var o = n(1),
            i = n.n(o),
            a = n(0),
            s = n.n(a),
            l = n(2)
          function u() {
            return (u =
              Object.assign ||
              function (e) {
                for (var r = 1; r < arguments.length; r++) {
                  var n = arguments[r]
                  for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
              }).apply(this, arguments)
          }
          function c(e) {
            return (c =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e
                  }
                : function (e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e
                  })(e)
          }
          function d(e, r, n) {
            return (d = m()
              ? Reflect.construct
              : function (e, r, n) {
                  var o = [null]
                  o.push.apply(o, r)
                  var i = new (Function.bind.apply(e, o))()
                  return n && f(i, n.prototype), i
                }).apply(null, arguments)
          }
          function p(e, r) {
            ;(null == r || r > e.length) && (r = e.length)
            for (var n = 0, o = Array(r); n < r; n++) o[n] = e[n]
            return o
          }
          function h(e, r) {
            for (var n = 0; n < r.length; n++) {
              var o = r[n]
              ;(o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
          }
          function f(e, r) {
            return (f =
              Object.setPrototypeOf ||
              function (e, r) {
                return (e.__proto__ = r), e
              })(e, r)
          }
          function m() {
            if (
              'undefined' == typeof Reflect ||
              !Reflect.construct ||
              Reflect.construct.sham
            )
              return !1
            if ('function' == typeof Proxy) return !0
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              )
            } catch (e) {
              return !1
            }
          }
          function g(e) {
            return (g = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
          }
          var b = (function (e) {
            !(function (e, r) {
              if ('function' != typeof r && null !== r)
                throw TypeError(
                  'Super expression must either be null or a function'
                )
              ;(e.prototype = Object.create(r && r.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                r && f(e, r)
            })(s, e)
            var r,
              n,
              o,
              a =
                ((r = m()),
                function () {
                  var e,
                    n,
                    o = g(s)
                  if (r) {
                    var i = g(this).constructor
                    n = Reflect.construct(o, arguments, i)
                  } else n = o.apply(this, arguments)
                  return (e = n) &&
                    ('object' === c(e) || 'function' == typeof e)
                    ? e
                    : (function (e) {
                        if (void 0 === e)
                          throw ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                          )
                        return e
                      })(this)
                })
            function s(e) {
              var r, n
              return (
                (function (e, r) {
                  if (!(e instanceof r))
                    throw TypeError('Cannot call a class as a function')
                })(this, s),
                ((r = a.call(this, e)).componentDidMount = function () {
                  r.props.disableKeyboard ||
                    document.addEventListener('keydown', r.handleKeyPress, {
                      passive: !0,
                    }),
                    r.containerRef.current &&
                      r.containerRef.current.addEventListener(
                        'wheel',
                        r.handleWheelScroll,
                        { passive: !1 }
                      )
                }),
                (r.componentWillUnmount = function () {
                  r.props.disableKeyboard ||
                    document.removeEventListener('keydown', r.handleKeyPress, {
                      passive: !0,
                    }),
                    r.containerRef.current &&
                      r.containerRef.current.removeEventListener(
                        'wheel',
                        r.handleWheelScroll
                      ),
                    r.timer && clearTimeout(r.timer)
                }),
                (r.startTimeout = function () {
                  var e = r.props.timeout
                  ;(r.onTimeout = !0),
                    (r.timer = setTimeout(function () {
                      ;(r.onTimeout = !1), (r.firedEvent = !1)
                    }, e))
                }),
                (r.handleWheelScroll = function (e) {
                  e.stopPropagation(),
                    r.props.preventScroll && e.preventDefault()
                  var n = r.props,
                    o = n.pauseListeners,
                    i = n.timeout,
                    a = n.upHandler,
                    s = n.downHandler,
                    l = r.Lethargy.check(e)
                  if (!1 !== l && !r.firedEvent && !o)
                    return (
                      (r.firedEvent = !0),
                      i && r.startTimeout(),
                      l > 0 ? void (a && a(e)) : void (l < 0 && s && s(e))
                    )
                  o || (i && r.onTimeout) || (r.firedEvent = !1)
                }),
                (r.handleKeyPress = function (e) {
                  var n = r.props,
                    o = n.upHandler,
                    i = n.downHandler,
                    a = n.leftHandler,
                    s = n.rightHandler,
                    l = n.timeout
                  n.pauseListeners ||
                    r.onTimeout ||
                    (38 === e.keyCode && (o && o(), l && r.startTimeout()),
                    37 === e.keyCode && (s && s(), l && r.startTimeout()),
                    39 === e.keyCode && (a && a(), l && r.startTimeout()),
                    40 === e.keyCode && (i && i(), l && r.startTimeout()))
                }),
                (r.unify = function (e) {
                  return e.changedTouches ? e.changedTouches[0] : e
                }),
                (r.handleSwipeStart = function (e) {
                  ;(r.startX = r.unify(e).clientX),
                    (r.startY = r.unify(e).clientY)
                }),
                (r.sign = function (e) {
                  return e ? (e < 0 ? -1 : 1) : 0
                }),
                (r.handleSwipeEnd = function (e) {
                  var n = r.props,
                    o = n.leftHandler,
                    i = n.rightHandler,
                    a = n.upHandler,
                    s = n.downHandler,
                    l = n.timeout,
                    u = n.pauseListeners,
                    c = 0,
                    d = 0
                  if (!r.onTimeout && !u) {
                    if (
                      ((r.startX || 0 === r.startX) &&
                        (c = r.unify(e).clientX - r.startX),
                      (r.startY || 0 === r.startY) &&
                        (d = r.unify(e).clientY - r.startY),
                      Math.abs(c) > Math.abs(d))
                    ) {
                      var p = r.sign(c)
                      p < 0 && o && o(), p > 0 && i && i()
                    } else {
                      var h = r.sign(d)
                      h < 0 && s && s(), h > 0 && a && a()
                    }
                    l && r.startTimeout(), (r.startY = null), (r.startX = null)
                  }
                }),
                (r.firedEvent = !1),
                (r.onTimeout = !1),
                (r.Lethargy = d(
                  l.Lethargy,
                  (function (e) {
                    if (Array.isArray(e)) return p(e)
                  })((n = r.props.wheelConfig)) ||
                    (function (e) {
                      if (
                        'undefined' != typeof Symbol &&
                        Symbol.iterator in Object(e)
                      )
                        return Array.from(e)
                    })(n) ||
                    (function (e, r) {
                      if (e) {
                        if ('string' == typeof e) return p(e, r)
                        var n = Object.prototype.toString.call(e).slice(8, -1)
                        if (
                          ('Object' === n &&
                            e.constructor &&
                            (n = e.constructor.name),
                          'Map' === n || 'Set' === n)
                        )
                          return Array.from(e)
                        if (
                          'Arguments' === n ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        )
                          return p(e, r)
                      }
                    })(n) ||
                    (function () {
                      throw TypeError(
                        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                      )
                    })()
                )),
                (r.containerRef = i.a.createRef()),
                r
              )
            }
            return (
              (n = [
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      r = e.CustomComponent,
                      n = e.children,
                      o =
                        (e.upHandler,
                        e.downHandler,
                        e.leftHandler,
                        e.rightHandler,
                        e.pauseListeners,
                        e.disableKeyboard,
                        e.preventScroll,
                        e.wheelConfig,
                        e.disableSwipe),
                      a = e.disableSwipeWithMouse,
                      s = (function (e, r) {
                        if (null == e) return {}
                        var n,
                          o,
                          i = (function (e, r) {
                            if (null == e) return {}
                            var n,
                              o,
                              i = {},
                              a = Object.keys(e)
                            for (o = 0; o < a.length; o++)
                              (n = a[o]), r.indexOf(n) >= 0 || (i[n] = e[n])
                            return i
                          })(e, r)
                        if (Object.getOwnPropertySymbols) {
                          var a = Object.getOwnPropertySymbols(e)
                          for (o = 0; o < a.length; o++)
                            (n = a[o]),
                              r.indexOf(n) >= 0 ||
                                (Object.prototype.propertyIsEnumerable.call(
                                  e,
                                  n
                                ) &&
                                  (i[n] = e[n]))
                        }
                        return i
                      })(e, [
                        'CustomComponent',
                        'children',
                        'upHandler',
                        'downHandler',
                        'leftHandler',
                        'rightHandler',
                        'pauseListeners',
                        'disableKeyboard',
                        'preventScroll',
                        'wheelConfig',
                        'disableSwipe',
                        'disableSwipeWithMouse',
                      ]),
                      l = o ? null : this.handleSwipeStart,
                      d = o ? null : this.handleSwipeEnd,
                      p = {
                        onKeyPress: this.handleKeyPress,
                        tabIndex: '0',
                        onTouchStart: l,
                        onMouseDown: a ? null : l,
                        onMouseUp: a ? null : d,
                        onTouchEnd: d,
                        ref: this.containerRef,
                      }
                    return 'object' === c(r)
                      ? i.a.createElement(r, u({}, s, p), n)
                      : i.a.createElement('div', u({}, s, p), n)
                  },
                },
              ]),
              h(s.prototype, n),
              o && h(s, o),
              s
            )
          })(o.Component)
          ;(b.propTypes = {
            upHandler: s.a.func,
            downHandler: s.a.func,
            leftHandler: s.a.func,
            rightHandler: s.a.func,
            CustomComponent: s.a.object,
            pauseListeners: s.a.bool.isRequired,
            timeout: s.a.number,
            disableKeyboard: s.a.bool.isRequired,
            disableSwipe: s.a.bool.isRequired,
            disableSwipeWithMouse: s.a.bool.isRequired,
            preventScroll: s.a.bool.isRequired,
            wheelConfig: s.a.array,
          }),
            (b.defaultProps = {
              pauseListeners: !1,
              timeout: 700,
              disableKeyboard: !1,
              disableSwipe: !1,
              disableSwipeWithMouse: !1,
              preventScroll: !1,
              wheelConfig: [],
            }),
            (r.default = b)
        },
        function (e, r, n) {
          'use strict'
          var o = n(5)
          function i() {}
          e.exports = function () {
            function e(e, r, n, i, a, s) {
              if (s !== o) {
                var l = Error(
                  'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
                )
                throw ((l.name = 'Invariant Violation'), l)
              }
            }
            function r() {
              return e
            }
            e.isRequired = e
            var n = {
              array: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: r,
              element: e,
              instanceOf: r,
              node: e,
              objectOf: r,
              oneOf: r,
              oneOfType: r,
              shape: r,
              exact: r,
            }
            return (n.checkPropTypes = i), (n.PropTypes = n), n
          }
        },
        function (e, r, n) {
          'use strict'
          e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
        },
      ])
    },
    7896: function (e, r, n) {
      'use strict'
      function o() {
        return (o = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var n = arguments[r]
                for (var o in n)
                  Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
              }
              return e
            }).apply(this, arguments)
      }
      n.d(r, {
        Z: function () {
          return o
        },
      })
    },
    4638: function (e, r, n) {
      'use strict'
      n.d(r, {
        If: function () {
          return a
        },
        kc: function () {
          return i
        },
      })
      var o = n(2784),
        i = (0, o.createContext)({})
      function a() {
        let e = (0, o.useContext)(i)
        if (void 0 === e)
          throw Error('useColorMode must be used within a ColorModeProvider')
        return e
      }
      i.displayName = 'ColorModeContext'
    },
    3638: function (e, r, n) {
      'use strict'
      n.d(r, {
        J: function () {
          return c
        },
      })
      var o = n(7107),
        i = n(5489),
        a = n(870),
        s = n(1053),
        l = n(2322),
        u = {
          path: (0, l.jsxs)('g', {
            stroke: 'currentColor',
            strokeWidth: '1.5',
            children: [
              (0, l.jsx)('path', {
                strokeLinecap: 'round',
                fill: 'none',
                d: 'M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25',
              }),
              (0, l.jsx)('path', {
                fill: 'currentColor',
                strokeLinecap: 'round',
                d: 'M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0',
              }),
              (0, l.jsx)('circle', {
                fill: 'none',
                strokeMiterlimit: '10',
                cx: '12',
                cy: '12',
                r: '11.25',
              }),
            ],
          }),
          viewBox: '0 0 24 24',
        },
        c = (0, o.G)((e, r) => {
          let {
              as: n,
              viewBox: o,
              color: c = 'currentColor',
              focusable: d = !1,
              children: p,
              className: h,
              __css: f,
              ...m
            } = e,
            g = (0, s.cx)('chakra-icon', h),
            b = (0, i.mq)('Icon', e),
            v = {
              w: '1em',
              h: '1em',
              display: 'inline-block',
              lineHeight: '1em',
              flexShrink: 0,
              color: c,
              ...f,
              ...b,
            },
            y = { ref: r, focusable: d, className: g, __css: v },
            x = null != o ? o : u.viewBox
          if (n && 'string' != typeof n)
            return (0, l.jsx)(a.m.svg, { as: n, ...y, ...m })
          let k = null != p ? p : u.path
          return (0, l.jsx)(a.m.svg, {
            verticalAlign: 'middle',
            viewBox: x,
            ...y,
            ...m,
            children: k,
          })
        })
      c.displayName = 'Icon'
    },
    8191: function (e, r, n) {
      'use strict'
      n.d(r, {
        I: function () {
          return l
        },
      })
      var o = n(3638),
        i = n(7107),
        a = n(2784),
        s = n(2322)
      function l(e) {
        let {
            viewBox: r = '0 0 24 24',
            d: n,
            displayName: l,
            defaultProps: u = {},
          } = e,
          c = a.Children.toArray(e.path),
          d = (0, i.G)((e, i) =>
            (0, s.jsx)(o.J, {
              ref: i,
              viewBox: r,
              ...u,
              ...e,
              children: c.length
                ? c
                : (0, s.jsx)('path', { fill: 'currentColor', d: n }),
            })
          )
        return (d.displayName = l), d
      }
    },
    3776: function (e, r, n) {
      'use strict'
      function o(e) {
        let r = Object.assign({}, e)
        for (let e in r) void 0 === r[e] && delete r[e]
        return r
      }
      function i(e, ...r) {
        if (null == e)
          throw TypeError('Cannot convert undefined or null to object')
        let n = { ...e }
        for (let e of r)
          if (null != e)
            for (let r in e)
              Object.prototype.hasOwnProperty.call(e, r) &&
                (r in n && delete n[r], (n[r] = e[r]))
        return n
      }
      n.d(r, {
        V8: function () {
          return i
        },
        oA: function () {
          return o
        },
      })
    },
    1053: function (e, r, n) {
      'use strict'
      n.d(r, {
        Kn: function () {
          return i
        },
        PB: function () {
          return l
        },
        Pu: function () {
          return a
        },
        Qm: function () {
          return u
        },
        cx: function () {
          return o
        },
        v0: function () {
          return c
        },
      })
      var o = (...e) => e.filter(Boolean).join(' ')
      function i(e) {
        let r = typeof e
        return (
          null != e && ('object' === r || 'function' === r) && !Array.isArray(e)
        )
      }
      function a(e, ...r) {
        return s(e) ? e(...r) : e
      }
      var s = (e) => 'function' == typeof e,
        l = (e) => (e ? '' : void 0),
        u = (e) => !!e || void 0
      function c(...e) {
        return function (r) {
          e.some(
            (e) => (null == e || e(r), null == r ? void 0 : r.defaultPrevented)
          )
        }
      }
    },
    4586: function (e, r, n) {
      'use strict'
      n.d(r, {
        D: function () {
          return eP
        },
        Lr: function () {
          return eR
        },
        Ud: function () {
          return eB
        },
        ZR: function () {
          return ew
        },
        c0: function () {
          return ey
        },
        cC: function () {
          return ek
        },
        fj: function () {
          return eA
        },
        gJ: function () {
          return en
        },
        iv: function () {
          return ej
        },
        k0: function () {
          return eT
        },
      })
      var o = n(1053),
        i = n(3637),
        a = (e) => /!(important)?$/.test(e),
        s = (e) =>
          'string' == typeof e ? e.replace(/!(important)?$/, '').trim() : e,
        l = (e, r) => (n) => {
          let i = String(r),
            l = a(i),
            u = s(i),
            c = e ? `${e}.${u}` : u,
            d =
              (0, o.Kn)(n.__cssMap) && c in n.__cssMap
                ? n.__cssMap[c].varRef
                : r
          return (d = s(d)), l ? `${d} !important` : d
        }
      function u(e) {
        let { scale: r, transform: n, compose: o } = e,
          i = (e, i) => {
            var a
            let s = l(r, e)(i),
              u = null != (a = null == n ? void 0 : n(s, i)) ? a : s
            return o && (u = o(u, i)), u
          }
        return i
      }
      var c =
        (...e) =>
        (r) =>
          e.reduce((e, r) => r(e), r)
      function d(e, r) {
        return (n) => {
          let o = { property: n, scale: e }
          return (o.transform = u({ scale: e, transform: r })), o
        }
      }
      var p =
          ({ rtl: e, ltr: r }) =>
          (n) =>
            'rtl' === n.direction ? e : r,
        h = [
          'rotate(var(--chakra-rotate, 0))',
          'scaleX(var(--chakra-scale-x, 1))',
          'scaleY(var(--chakra-scale-y, 1))',
          'skewX(var(--chakra-skew-x, 0))',
          'skewY(var(--chakra-skew-y, 0))',
        ],
        f = {
          '--chakra-blur': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-brightness': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-contrast': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-grayscale': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-hue-rotate': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-invert': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-saturate': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-sepia': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-drop-shadow': 'var(--chakra-empty,/*!*/ /*!*/)',
          filter:
            'var(--chakra-blur) var(--chakra-brightness) var(--chakra-contrast) var(--chakra-grayscale) var(--chakra-hue-rotate) var(--chakra-invert) var(--chakra-saturate) var(--chakra-sepia) var(--chakra-drop-shadow)',
        },
        m = {
          backdropFilter:
            'var(--chakra-backdrop-blur) var(--chakra-backdrop-brightness) var(--chakra-backdrop-contrast) var(--chakra-backdrop-grayscale) var(--chakra-backdrop-hue-rotate) var(--chakra-backdrop-invert) var(--chakra-backdrop-opacity) var(--chakra-backdrop-saturate) var(--chakra-backdrop-sepia)',
          '--chakra-backdrop-blur': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-backdrop-brightness': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-backdrop-contrast': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-backdrop-grayscale': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-backdrop-hue-rotate': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-backdrop-invert': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-backdrop-opacity': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-backdrop-saturate': 'var(--chakra-empty,/*!*/ /*!*/)',
          '--chakra-backdrop-sepia': 'var(--chakra-empty,/*!*/ /*!*/)',
        },
        g = {
          'row-reverse': {
            space: '--chakra-space-x-reverse',
            divide: '--chakra-divide-x-reverse',
          },
          'column-reverse': {
            space: '--chakra-space-y-reverse',
            divide: '--chakra-divide-y-reverse',
          },
        },
        b = '& > :not(style) ~ :not(style)',
        v = {
          'to-t': 'to top',
          'to-tr': 'to top right',
          'to-r': 'to right',
          'to-br': 'to bottom right',
          'to-b': 'to bottom',
          'to-bl': 'to bottom left',
          'to-l': 'to left',
          'to-tl': 'to top left',
        },
        y = new Set(Object.values(v)),
        x = new Set([
          'none',
          '-moz-initial',
          'inherit',
          'initial',
          'revert',
          'unset',
        ]),
        k = (e) => e.trim(),
        S = (e) => 'string' == typeof e && e.includes('(') && e.includes(')'),
        w = (e) => {
          let r = parseFloat(e.toString()),
            n = e.toString().replace(String(r), '')
          return { unitless: !n, value: r, unit: n }
        },
        C = (e) => (r) => `${e}(${r})`,
        _ = {
          filter: (e) => ('auto' !== e ? e : f),
          backdropFilter: (e) => ('auto' !== e ? e : m),
          ring: (e) => ({
            '--chakra-ring-offset-shadow':
              'var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)',
            '--chakra-ring-shadow':
              'var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)',
            '--chakra-ring-width': _.px(e),
            boxShadow:
              'var(--chakra-ring-offset-shadow), var(--chakra-ring-shadow), var(--chakra-shadow, 0 0 #0000)',
          }),
          bgClip: (e) =>
            'text' === e
              ? { color: 'transparent', backgroundClip: 'text' }
              : { backgroundClip: e },
          transform: (e) =>
            'auto' === e
              ? [
                  'translateX(var(--chakra-translate-x, 0))',
                  'translateY(var(--chakra-translate-y, 0))',
                  ...h,
                ].join(' ')
              : 'auto-gpu' === e
              ? [
                  'translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)',
                  ...h,
                ].join(' ')
              : e,
          vh: (e) => ('$100vh' === e ? 'var(--chakra-vh)' : e),
          px(e) {
            if (null == e) return e
            let { unitless: r } = w(e)
            return r || 'number' == typeof e ? `${e}px` : e
          },
          fraction: (e) => ('number' != typeof e || e > 1 ? e : `${100 * e}%`),
          float: (e, r) =>
            'rtl' === r.direction ? { left: 'right', right: 'left' }[e] : e,
          degree(e) {
            if (/^var\(--.+\)$/.test(e) || null == e) return e
            let r = 'string' == typeof e && !e.endsWith('deg')
            return 'number' == typeof e || r ? `${e}deg` : e
          },
          gradient: (e, r) =>
            (function (e, r) {
              var n, o
              if (null == e || x.has(e)) return e
              let { type: i, values: a } =
                null !=
                (o =
                  null ==
                  (n = /(?<type>^[a-z-A-Z]+)\((?<values>(.*))\)/g.exec(e))
                    ? void 0
                    : n.groups)
                  ? o
                  : {}
              if (!i || !a) return e
              let s = i.includes('-gradient') ? i : `${i}-gradient`,
                [l, ...u] = a.split(',').map(k).filter(Boolean)
              if ((null == u ? void 0 : u.length) === 0) return e
              let c = l in v ? v[l] : l
              u.unshift(c)
              let d = u.map((e) => {
                if (y.has(e)) return e
                let n = e.indexOf(' '),
                  [o, i] = -1 !== n ? [e.substr(0, n), e.substr(n + 1)] : [e],
                  a = S(i) ? i : i && i.split(' '),
                  s = `colors.${o}`,
                  l = s in r.__cssMap ? r.__cssMap[s].varRef : o
                return a ? [l, ...(Array.isArray(a) ? a : [a])].join(' ') : l
              })
              return `${s}(${d.join(', ')})`
            })(e, null != r ? r : {}),
          blur: C('blur'),
          opacity: C('opacity'),
          brightness: C('brightness'),
          contrast: C('contrast'),
          dropShadow: C('drop-shadow'),
          grayscale: C('grayscale'),
          hueRotate: C('hue-rotate'),
          invert: C('invert'),
          saturate: C('saturate'),
          sepia: C('sepia'),
          bgImage(e) {
            if (null == e) return e
            let r = S(e) || x.has(e)
            return r ? e : `url(${e})`
          },
          outline(e) {
            let r = '0' === String(e) || 'none' === String(e)
            return null !== e && r
              ? { outline: '2px solid transparent', outlineOffset: '2px' }
              : { outline: e }
          },
          flexDirection(e) {
            var r
            let { space: n, divide: o } = null != (r = g[e]) ? r : {},
              i = { flexDirection: e }
            return n && (i[n] = 1), o && (i[o] = 1), i
          },
        },
        E = {
          borderWidths: d('borderWidths'),
          borderStyles: d('borderStyles'),
          colors: d('colors'),
          borders: d('borders'),
          radii: d('radii', _.px),
          space: d('space', c(_.vh, _.px)),
          spaceT: d('space', c(_.vh, _.px)),
          degreeT: (e) => ({ property: e, transform: _.degree }),
          prop: (e, r, n) => ({
            property: e,
            scale: r,
            ...(r && { transform: u({ scale: r, transform: n }) }),
          }),
          propT: (e, r) => ({ property: e, transform: r }),
          sizes: d('sizes', c(_.vh, _.px)),
          sizesT: d('sizes', c(_.vh, _.fraction)),
          shadows: d('shadows'),
          logical: function (e) {
            let { property: r, scale: n, transform: o } = e
            return {
              scale: n,
              property: p(r),
              transform: n ? u({ scale: n, compose: o }) : o,
            }
          },
          blur: d('blur', _.blur),
        },
        j = {
          background: E.colors('background'),
          backgroundColor: E.colors('backgroundColor'),
          backgroundImage: E.propT('backgroundImage', _.bgImage),
          backgroundSize: !0,
          backgroundPosition: !0,
          backgroundRepeat: !0,
          backgroundAttachment: !0,
          backgroundClip: { transform: _.bgClip },
          bgSize: E.prop('backgroundSize'),
          bgPosition: E.prop('backgroundPosition'),
          bg: E.colors('background'),
          bgColor: E.colors('backgroundColor'),
          bgPos: E.prop('backgroundPosition'),
          bgRepeat: E.prop('backgroundRepeat'),
          bgAttachment: E.prop('backgroundAttachment'),
          bgGradient: E.propT('backgroundImage', _.gradient),
          bgClip: { transform: _.bgClip },
        }
      Object.assign(j, { bgImage: j.backgroundImage, bgImg: j.backgroundImage })
      var T = {
        border: E.borders('border'),
        borderWidth: E.borderWidths('borderWidth'),
        borderStyle: E.borderStyles('borderStyle'),
        borderColor: E.colors('borderColor'),
        borderRadius: E.radii('borderRadius'),
        borderTop: E.borders('borderTop'),
        borderBlockStart: E.borders('borderBlockStart'),
        borderTopLeftRadius: E.radii('borderTopLeftRadius'),
        borderStartStartRadius: E.logical({
          scale: 'radii',
          property: { ltr: 'borderTopLeftRadius', rtl: 'borderTopRightRadius' },
        }),
        borderEndStartRadius: E.logical({
          scale: 'radii',
          property: {
            ltr: 'borderBottomLeftRadius',
            rtl: 'borderBottomRightRadius',
          },
        }),
        borderTopRightRadius: E.radii('borderTopRightRadius'),
        borderStartEndRadius: E.logical({
          scale: 'radii',
          property: { ltr: 'borderTopRightRadius', rtl: 'borderTopLeftRadius' },
        }),
        borderEndEndRadius: E.logical({
          scale: 'radii',
          property: {
            ltr: 'borderBottomRightRadius',
            rtl: 'borderBottomLeftRadius',
          },
        }),
        borderRight: E.borders('borderRight'),
        borderInlineEnd: E.borders('borderInlineEnd'),
        borderBottom: E.borders('borderBottom'),
        borderBlockEnd: E.borders('borderBlockEnd'),
        borderBottomLeftRadius: E.radii('borderBottomLeftRadius'),
        borderBottomRightRadius: E.radii('borderBottomRightRadius'),
        borderLeft: E.borders('borderLeft'),
        borderInlineStart: { property: 'borderInlineStart', scale: 'borders' },
        borderInlineStartRadius: E.logical({
          scale: 'radii',
          property: {
            ltr: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
            rtl: ['borderTopRightRadius', 'borderBottomRightRadius'],
          },
        }),
        borderInlineEndRadius: E.logical({
          scale: 'radii',
          property: {
            ltr: ['borderTopRightRadius', 'borderBottomRightRadius'],
            rtl: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
          },
        }),
        borderX: E.borders(['borderLeft', 'borderRight']),
        borderInline: E.borders('borderInline'),
        borderY: E.borders(['borderTop', 'borderBottom']),
        borderBlock: E.borders('borderBlock'),
        borderTopWidth: E.borderWidths('borderTopWidth'),
        borderBlockStartWidth: E.borderWidths('borderBlockStartWidth'),
        borderTopColor: E.colors('borderTopColor'),
        borderBlockStartColor: E.colors('borderBlockStartColor'),
        borderTopStyle: E.borderStyles('borderTopStyle'),
        borderBlockStartStyle: E.borderStyles('borderBlockStartStyle'),
        borderBottomWidth: E.borderWidths('borderBottomWidth'),
        borderBlockEndWidth: E.borderWidths('borderBlockEndWidth'),
        borderBottomColor: E.colors('borderBottomColor'),
        borderBlockEndColor: E.colors('borderBlockEndColor'),
        borderBottomStyle: E.borderStyles('borderBottomStyle'),
        borderBlockEndStyle: E.borderStyles('borderBlockEndStyle'),
        borderLeftWidth: E.borderWidths('borderLeftWidth'),
        borderInlineStartWidth: E.borderWidths('borderInlineStartWidth'),
        borderLeftColor: E.colors('borderLeftColor'),
        borderInlineStartColor: E.colors('borderInlineStartColor'),
        borderLeftStyle: E.borderStyles('borderLeftStyle'),
        borderInlineStartStyle: E.borderStyles('borderInlineStartStyle'),
        borderRightWidth: E.borderWidths('borderRightWidth'),
        borderInlineEndWidth: E.borderWidths('borderInlineEndWidth'),
        borderRightColor: E.colors('borderRightColor'),
        borderInlineEndColor: E.colors('borderInlineEndColor'),
        borderRightStyle: E.borderStyles('borderRightStyle'),
        borderInlineEndStyle: E.borderStyles('borderInlineEndStyle'),
        borderTopRadius: E.radii([
          'borderTopLeftRadius',
          'borderTopRightRadius',
        ]),
        borderBottomRadius: E.radii([
          'borderBottomLeftRadius',
          'borderBottomRightRadius',
        ]),
        borderLeftRadius: E.radii([
          'borderTopLeftRadius',
          'borderBottomLeftRadius',
        ]),
        borderRightRadius: E.radii([
          'borderTopRightRadius',
          'borderBottomRightRadius',
        ]),
      }
      Object.assign(T, {
        rounded: T.borderRadius,
        roundedTop: T.borderTopRadius,
        roundedTopLeft: T.borderTopLeftRadius,
        roundedTopRight: T.borderTopRightRadius,
        roundedTopStart: T.borderStartStartRadius,
        roundedTopEnd: T.borderStartEndRadius,
        roundedBottom: T.borderBottomRadius,
        roundedBottomLeft: T.borderBottomLeftRadius,
        roundedBottomRight: T.borderBottomRightRadius,
        roundedBottomStart: T.borderEndStartRadius,
        roundedBottomEnd: T.borderEndEndRadius,
        roundedLeft: T.borderLeftRadius,
        roundedRight: T.borderRightRadius,
        roundedStart: T.borderInlineStartRadius,
        roundedEnd: T.borderInlineEndRadius,
        borderStart: T.borderInlineStart,
        borderEnd: T.borderInlineEnd,
        borderTopStartRadius: T.borderStartStartRadius,
        borderTopEndRadius: T.borderStartEndRadius,
        borderBottomStartRadius: T.borderEndStartRadius,
        borderBottomEndRadius: T.borderEndEndRadius,
        borderStartRadius: T.borderInlineStartRadius,
        borderEndRadius: T.borderInlineEndRadius,
        borderStartWidth: T.borderInlineStartWidth,
        borderEndWidth: T.borderInlineEndWidth,
        borderStartColor: T.borderInlineStartColor,
        borderEndColor: T.borderInlineEndColor,
        borderStartStyle: T.borderInlineStartStyle,
        borderEndStyle: T.borderInlineEndStyle,
      })
      var A = {
          color: E.colors('color'),
          textColor: E.colors('color'),
          fill: E.colors('fill'),
          stroke: E.colors('stroke'),
        },
        P = {
          boxShadow: E.shadows('boxShadow'),
          mixBlendMode: !0,
          blendMode: E.prop('mixBlendMode'),
          backgroundBlendMode: !0,
          bgBlendMode: E.prop('backgroundBlendMode'),
          opacity: !0,
        }
      Object.assign(P, { shadow: P.boxShadow })
      var B = {
          filter: { transform: _.filter },
          blur: E.blur('--chakra-blur'),
          brightness: E.propT('--chakra-brightness', _.brightness),
          contrast: E.propT('--chakra-contrast', _.contrast),
          hueRotate: E.degreeT('--chakra-hue-rotate'),
          invert: E.propT('--chakra-invert', _.invert),
          saturate: E.propT('--chakra-saturate', _.saturate),
          dropShadow: E.propT('--chakra-drop-shadow', _.dropShadow),
          backdropFilter: { transform: _.backdropFilter },
          backdropBlur: E.blur('--chakra-backdrop-blur'),
          backdropBrightness: E.propT(
            '--chakra-backdrop-brightness',
            _.brightness
          ),
          backdropContrast: E.propT('--chakra-backdrop-contrast', _.contrast),
          backdropHueRotate: E.degreeT('--chakra-backdrop-hue-rotate'),
          backdropInvert: E.propT('--chakra-backdrop-invert', _.invert),
          backdropSaturate: E.propT('--chakra-backdrop-saturate', _.saturate),
        },
        R = {
          alignItems: !0,
          alignContent: !0,
          justifyItems: !0,
          justifyContent: !0,
          flexWrap: !0,
          flexDirection: { transform: _.flexDirection },
          experimental_spaceX: {
            static: {
              [b]: {
                marginInlineStart:
                  'calc(var(--chakra-space-x) * calc(1 - var(--chakra-space-x-reverse)))',
                marginInlineEnd:
                  'calc(var(--chakra-space-x) * var(--chakra-space-x-reverse))',
              },
            },
            transform: u({
              scale: 'space',
              transform: (e) => (null !== e ? { '--chakra-space-x': e } : null),
            }),
          },
          experimental_spaceY: {
            static: {
              [b]: {
                marginTop:
                  'calc(var(--chakra-space-y) * calc(1 - var(--chakra-space-y-reverse)))',
                marginBottom:
                  'calc(var(--chakra-space-y) * var(--chakra-space-y-reverse))',
              },
            },
            transform: u({
              scale: 'space',
              transform: (e) => (null != e ? { '--chakra-space-y': e } : null),
            }),
          },
          flex: !0,
          flexFlow: !0,
          flexGrow: !0,
          flexShrink: !0,
          flexBasis: E.sizes('flexBasis'),
          justifySelf: !0,
          alignSelf: !0,
          order: !0,
          placeItems: !0,
          placeContent: !0,
          placeSelf: !0,
          gap: E.space('gap'),
          rowGap: E.space('rowGap'),
          columnGap: E.space('columnGap'),
        }
      Object.assign(R, { flexDir: R.flexDirection })
      var z = {
          gridGap: E.space('gridGap'),
          gridColumnGap: E.space('gridColumnGap'),
          gridRowGap: E.space('gridRowGap'),
          gridColumn: !0,
          gridRow: !0,
          gridAutoFlow: !0,
          gridAutoColumns: !0,
          gridColumnStart: !0,
          gridColumnEnd: !0,
          gridRowStart: !0,
          gridRowEnd: !0,
          gridAutoRows: !0,
          gridTemplate: !0,
          gridTemplateColumns: !0,
          gridTemplateRows: !0,
          gridTemplateAreas: !0,
          gridArea: !0,
        },
        L = {
          appearance: !0,
          cursor: !0,
          resize: !0,
          userSelect: !0,
          pointerEvents: !0,
          outline: { transform: _.outline },
          outlineOffset: !0,
          outlineColor: E.colors('outlineColor'),
        },
        F = {
          width: E.sizesT('width'),
          inlineSize: E.sizesT('inlineSize'),
          height: E.sizes('height'),
          blockSize: E.sizes('blockSize'),
          boxSize: E.sizes(['width', 'height']),
          minWidth: E.sizes('minWidth'),
          minInlineSize: E.sizes('minInlineSize'),
          minHeight: E.sizes('minHeight'),
          minBlockSize: E.sizes('minBlockSize'),
          maxWidth: E.sizes('maxWidth'),
          maxInlineSize: E.sizes('maxInlineSize'),
          maxHeight: E.sizes('maxHeight'),
          maxBlockSize: E.sizes('maxBlockSize'),
          overflow: !0,
          overflowX: !0,
          overflowY: !0,
          overscrollBehavior: !0,
          overscrollBehaviorX: !0,
          overscrollBehaviorY: !0,
          display: !0,
          verticalAlign: !0,
          boxSizing: !0,
          boxDecorationBreak: !0,
          float: E.propT('float', _.float),
          objectFit: !0,
          objectPosition: !0,
          visibility: !0,
          isolation: !0,
        }
      Object.assign(F, {
        w: F.width,
        h: F.height,
        minW: F.minWidth,
        maxW: F.maxWidth,
        minH: F.minHeight,
        maxH: F.maxHeight,
        overscroll: F.overscrollBehavior,
        overscrollX: F.overscrollBehaviorX,
        overscrollY: F.overscrollBehaviorY,
      })
      var M = {
          listStyleType: !0,
          listStylePosition: !0,
          listStylePos: E.prop('listStylePosition'),
          listStyleImage: !0,
          listStyleImg: E.prop('listStyleImage'),
        },
        $ = ((e) => {
          let r = new WeakMap(),
            n = (n, o, i, a) => {
              if (void 0 === n) return e(n, o, i)
              r.has(n) || r.set(n, new Map())
              let s = r.get(n)
              if (s.has(o)) return s.get(o)
              let l = e(n, o, i, a)
              return s.set(o, l), l
            }
          return n
        })(function (e, r, n, o) {
          let i = 'string' == typeof r ? r.split('.') : [r]
          for (o = 0; o < i.length && e; o += 1) e = e[i[o]]
          return void 0 === e ? n : e
        }),
        D = {
          border: '0px',
          clip: 'rect(0, 0, 0, 0)',
          width: '1px',
          height: '1px',
          margin: '-1px',
          padding: '0px',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          position: 'absolute',
        },
        I = {
          position: 'static',
          width: 'auto',
          height: 'auto',
          clip: 'auto',
          padding: '0',
          margin: '0',
          overflow: 'visible',
          whiteSpace: 'normal',
        },
        O = (e, r, n) => {
          let o = {},
            i = $(e, r, {})
          for (let e in i) {
            let r = e in n && null != n[e]
            r || (o[e] = i[e])
          }
          return o
        },
        V = {
          position: !0,
          pos: E.prop('position'),
          zIndex: E.prop('zIndex', 'zIndices'),
          inset: E.spaceT('inset'),
          insetX: E.spaceT(['left', 'right']),
          insetInline: E.spaceT('insetInline'),
          insetY: E.spaceT(['top', 'bottom']),
          insetBlock: E.spaceT('insetBlock'),
          top: E.spaceT('top'),
          insetBlockStart: E.spaceT('insetBlockStart'),
          bottom: E.spaceT('bottom'),
          insetBlockEnd: E.spaceT('insetBlockEnd'),
          left: E.spaceT('left'),
          insetInlineStart: E.logical({
            scale: 'space',
            property: { ltr: 'left', rtl: 'right' },
          }),
          right: E.spaceT('right'),
          insetInlineEnd: E.logical({
            scale: 'space',
            property: { ltr: 'right', rtl: 'left' },
          }),
        }
      Object.assign(V, {
        insetStart: V.insetInlineStart,
        insetEnd: V.insetInlineEnd,
      })
      var W = {
          ring: { transform: _.ring },
          ringColor: E.colors('--chakra-ring-color'),
          ringOffset: E.prop('--chakra-ring-offset-width'),
          ringOffsetColor: E.colors('--chakra-ring-offset-color'),
          ringInset: E.prop('--chakra-ring-inset'),
        },
        N = {
          margin: E.spaceT('margin'),
          marginTop: E.spaceT('marginTop'),
          marginBlockStart: E.spaceT('marginBlockStart'),
          marginRight: E.spaceT('marginRight'),
          marginInlineEnd: E.spaceT('marginInlineEnd'),
          marginBottom: E.spaceT('marginBottom'),
          marginBlockEnd: E.spaceT('marginBlockEnd'),
          marginLeft: E.spaceT('marginLeft'),
          marginInlineStart: E.spaceT('marginInlineStart'),
          marginX: E.spaceT(['marginInlineStart', 'marginInlineEnd']),
          marginInline: E.spaceT('marginInline'),
          marginY: E.spaceT(['marginTop', 'marginBottom']),
          marginBlock: E.spaceT('marginBlock'),
          padding: E.space('padding'),
          paddingTop: E.space('paddingTop'),
          paddingBlockStart: E.space('paddingBlockStart'),
          paddingRight: E.space('paddingRight'),
          paddingBottom: E.space('paddingBottom'),
          paddingBlockEnd: E.space('paddingBlockEnd'),
          paddingLeft: E.space('paddingLeft'),
          paddingInlineStart: E.space('paddingInlineStart'),
          paddingInlineEnd: E.space('paddingInlineEnd'),
          paddingX: E.space(['paddingInlineStart', 'paddingInlineEnd']),
          paddingInline: E.space('paddingInline'),
          paddingY: E.space(['paddingTop', 'paddingBottom']),
          paddingBlock: E.space('paddingBlock'),
        }
      Object.assign(N, {
        m: N.margin,
        mt: N.marginTop,
        mr: N.marginRight,
        me: N.marginInlineEnd,
        marginEnd: N.marginInlineEnd,
        mb: N.marginBottom,
        ml: N.marginLeft,
        ms: N.marginInlineStart,
        marginStart: N.marginInlineStart,
        mx: N.marginX,
        my: N.marginY,
        p: N.padding,
        pt: N.paddingTop,
        py: N.paddingY,
        px: N.paddingX,
        pb: N.paddingBottom,
        pl: N.paddingLeft,
        ps: N.paddingInlineStart,
        paddingStart: N.paddingInlineStart,
        pr: N.paddingRight,
        pe: N.paddingInlineEnd,
        paddingEnd: N.paddingInlineEnd,
      })
      var H = {
          textDecorationColor: E.colors('textDecorationColor'),
          textDecoration: !0,
          textDecor: { property: 'textDecoration' },
          textDecorationLine: !0,
          textDecorationStyle: !0,
          textDecorationThickness: !0,
          textUnderlineOffset: !0,
          textShadow: E.shadows('textShadow'),
        },
        U = {
          clipPath: !0,
          transform: E.propT('transform', _.transform),
          transformOrigin: !0,
          translateX: E.spaceT('--chakra-translate-x'),
          translateY: E.spaceT('--chakra-translate-y'),
          skewX: E.degreeT('--chakra-skew-x'),
          skewY: E.degreeT('--chakra-skew-y'),
          scaleX: E.prop('--chakra-scale-x'),
          scaleY: E.prop('--chakra-scale-y'),
          scale: E.prop(['--chakra-scale-x', '--chakra-scale-y']),
          rotate: E.degreeT('--chakra-rotate'),
        },
        q = {
          transition: !0,
          transitionDelay: !0,
          animation: !0,
          willChange: !0,
          transitionDuration: E.prop(
            'transitionDuration',
            'transition.duration'
          ),
          transitionProperty: E.prop(
            'transitionProperty',
            'transition.property'
          ),
          transitionTimingFunction: E.prop(
            'transitionTimingFunction',
            'transition.easing'
          ),
        },
        Y = {
          fontFamily: E.prop('fontFamily', 'fonts'),
          fontSize: E.prop('fontSize', 'fontSizes', _.px),
          fontWeight: E.prop('fontWeight', 'fontWeights'),
          lineHeight: E.prop('lineHeight', 'lineHeights'),
          letterSpacing: E.prop('letterSpacing', 'letterSpacings'),
          textAlign: !0,
          fontStyle: !0,
          textIndent: !0,
          wordBreak: !0,
          overflowWrap: !0,
          textOverflow: !0,
          textTransform: !0,
          whiteSpace: !0,
          isTruncated: {
            transform(e) {
              if (!0 === e)
                return {
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }
            },
          },
          noOfLines: {
            static: {
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 'var(--chakra-line-clamp)',
            },
            property: '--chakra-line-clamp',
          },
        },
        G = {
          scrollBehavior: !0,
          scrollSnapAlign: !0,
          scrollSnapStop: !0,
          scrollSnapType: !0,
          scrollMargin: E.spaceT('scrollMargin'),
          scrollMarginTop: E.spaceT('scrollMarginTop'),
          scrollMarginBottom: E.spaceT('scrollMarginBottom'),
          scrollMarginLeft: E.spaceT('scrollMarginLeft'),
          scrollMarginRight: E.spaceT('scrollMarginRight'),
          scrollMarginX: E.spaceT(['scrollMarginLeft', 'scrollMarginRight']),
          scrollMarginY: E.spaceT(['scrollMarginTop', 'scrollMarginBottom']),
          scrollPadding: E.spaceT('scrollPadding'),
          scrollPaddingTop: E.spaceT('scrollPaddingTop'),
          scrollPaddingBottom: E.spaceT('scrollPaddingBottom'),
          scrollPaddingLeft: E.spaceT('scrollPaddingLeft'),
          scrollPaddingRight: E.spaceT('scrollPaddingRight'),
          scrollPaddingX: E.spaceT(['scrollPaddingLeft', 'scrollPaddingRight']),
          scrollPaddingY: E.spaceT(['scrollPaddingTop', 'scrollPaddingBottom']),
        }
      function X(e) {
        return (0, o.Kn)(e) && e.reference ? e.reference : String(e)
      }
      var Z = (e, ...r) => r.map(X).join(` ${e} `).replace(/calc/g, ''),
        K = (...e) => `calc(${Z('+', ...e)})`,
        J = (...e) => `calc(${Z('-', ...e)})`,
        Q = (...e) => `calc(${Z('*', ...e)})`,
        ee = (...e) => `calc(${Z('/', ...e)})`,
        et = (e) => {
          let r = X(e)
          return null == r || Number.isNaN(parseFloat(r))
            ? Q(r, -1)
            : String(r).startsWith('-')
            ? String(r).slice(1)
            : `-${r}`
        },
        er = Object.assign(
          (e) => ({
            add: (...r) => er(K(e, ...r)),
            subtract: (...r) => er(J(e, ...r)),
            multiply: (...r) => er(Q(e, ...r)),
            divide: (...r) => er(ee(e, ...r)),
            negate: () => er(et(e)),
            toString: () => e.toString(),
          }),
          { add: K, subtract: J, multiply: Q, divide: ee, negate: et }
        )
      function en(e, r, n) {
        let o = (function (e, r = '') {
          return (function (e) {
            let r = (function (e, r = '-') {
              return e.replace(/\s+/g, r)
            })(e.toString())
            return (function (e) {
              if (e.includes('\\.')) return e
              let r = !Number.isInteger(parseFloat(e.toString()))
              return r ? e.replace('.', '\\.') : e
            })(r).replace(/[!-,/:-@[-^`{-~]/g, '\\$&')
          })(
            `--${(function (e, r = '') {
              return [r, e].filter(Boolean).join('-')
            })(e, r)}`
          )
        })(e, n)
        return { variable: o, reference: `var(${o}${r ? `, ${r}` : ''})` }
      }
      function eo(e) {
        if (null == e) return e
        let { unitless: r } = (function (e) {
          let r = parseFloat(e.toString()),
            n = e.toString().replace(String(r), '')
          return { unitless: !n, value: r, unit: n }
        })(e)
        return r || 'number' == typeof e ? `${e}px` : e
      }
      var ei = (e, r) => (parseInt(e[1], 10) > parseInt(r[1], 10) ? 1 : -1),
        ea = (e) => Object.fromEntries(Object.entries(e).sort(ei))
      function es(e) {
        let r = ea(e)
        return Object.assign(Object.values(r), r)
      }
      function el(e) {
        var r
        return e
          ? 'number' == typeof (e = null != (r = eo(e)) ? r : e)
            ? `${e + -0.02}`
            : e.replace(/(\d+\.?\d*)/u, (e) => `${parseFloat(e) + -0.02}`)
          : e
      }
      function eu(e, r) {
        let n = ['@media screen']
        return (
          e && n.push('and', `(min-width: ${eo(e)})`),
          r && n.push('and', `(max-width: ${eo(r)})`),
          n.join(' ')
        )
      }
      var ec = {
          hover: (e, r) => `${e}:hover ${r}, ${e}[data-hover] ${r}`,
          focus: (e, r) => `${e}:focus ${r}, ${e}[data-focus] ${r}`,
          focusVisible: (e, r) => `${e}:focus-visible ${r}`,
          focusWithin: (e, r) => `${e}:focus-within ${r}`,
          active: (e, r) => `${e}:active ${r}, ${e}[data-active] ${r}`,
          disabled: (e, r) => `${e}:disabled ${r}, ${e}[data-disabled] ${r}`,
          invalid: (e, r) => `${e}:invalid ${r}, ${e}[data-invalid] ${r}`,
          checked: (e, r) => `${e}:checked ${r}, ${e}[data-checked] ${r}`,
          indeterminate: (e, r) =>
            `${e}:indeterminate ${r}, ${e}[aria-checked=mixed] ${r}, ${e}[data-indeterminate] ${r}`,
          readOnly: (e, r) =>
            `${e}:read-only ${r}, ${e}[readonly] ${r}, ${e}[data-read-only] ${r}`,
          expanded: (e, r) =>
            `${e}:read-only ${r}, ${e}[aria-expanded=true] ${r}, ${e}[data-expanded] ${r}`,
          placeholderShown: (e, r) => `${e}:placeholder-shown ${r}`,
        },
        ed = (e) =>
          eh((r) => e(r, '&'), '[role=group]', '[data-group]', '.group'),
        ep = (e) => eh((r) => e(r, '~ &'), '[data-peer]', '.peer'),
        eh = (e, ...r) => r.map(e).join(', '),
        ef = {
          _hover: '&:hover, &[data-hover]',
          _active: '&:active, &[data-active]',
          _focus: '&:focus, &[data-focus]',
          _highlighted: '&[data-highlighted]',
          _focusWithin: '&:focus-within',
          _focusVisible: '&:focus-visible, &[data-focus-visible]',
          _disabled:
            '&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]',
          _readOnly: '&[aria-readonly=true], &[readonly], &[data-readonly]',
          _before: '&::before',
          _after: '&::after',
          _empty: '&:empty',
          _expanded: '&[aria-expanded=true], &[data-expanded]',
          _checked: '&[aria-checked=true], &[data-checked]',
          _grabbed: '&[aria-grabbed=true], &[data-grabbed]',
          _pressed: '&[aria-pressed=true], &[data-pressed]',
          _invalid: '&[aria-invalid=true], &[data-invalid]',
          _valid: '&[data-valid], &[data-state=valid]',
          _loading: '&[data-loading], &[aria-busy=true]',
          _selected: '&[aria-selected=true], &[data-selected]',
          _hidden: '&[hidden], &[data-hidden]',
          _autofill: '&:-webkit-autofill',
          _even: '&:nth-of-type(even)',
          _odd: '&:nth-of-type(odd)',
          _first: '&:first-of-type',
          _last: '&:last-of-type',
          _notFirst: '&:not(:first-of-type)',
          _notLast: '&:not(:last-of-type)',
          _visited: '&:visited',
          _activeLink: '&[aria-current=page]',
          _activeStep: '&[aria-current=step]',
          _indeterminate:
            '&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]',
          _groupHover: ed(ec.hover),
          _peerHover: ep(ec.hover),
          _groupFocus: ed(ec.focus),
          _peerFocus: ep(ec.focus),
          _groupFocusVisible: ed(ec.focusVisible),
          _peerFocusVisible: ep(ec.focusVisible),
          _groupActive: ed(ec.active),
          _peerActive: ep(ec.active),
          _groupDisabled: ed(ec.disabled),
          _peerDisabled: ep(ec.disabled),
          _groupInvalid: ed(ec.invalid),
          _peerInvalid: ep(ec.invalid),
          _groupChecked: ed(ec.checked),
          _peerChecked: ep(ec.checked),
          _groupFocusWithin: ed(ec.focusWithin),
          _peerFocusWithin: ep(ec.focusWithin),
          _peerPlaceholderShown: ep(ec.placeholderShown),
          _placeholder: '&::placeholder',
          _placeholderShown: '&:placeholder-shown',
          _fullScreen: '&:fullscreen',
          _selection: '&::selection',
          _rtl: '[dir=rtl] &, &[dir=rtl]',
          _ltr: '[dir=ltr] &, &[dir=ltr]',
          _mediaDark: '@media (prefers-color-scheme: dark)',
          _mediaReduceMotion: '@media (prefers-reduced-motion: reduce)',
          _dark:
            '.chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]',
          _light:
            '.chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]',
        },
        em = Object.keys(ef)
      function eg(e, r) {
        return en(String(e).replace(/\./g, '-'), void 0, r)
      }
      var eb = [
        'colors',
        'borders',
        'borderWidths',
        'borderStyles',
        'fonts',
        'fontSizes',
        'fontWeights',
        'letterSpacings',
        'lineHeights',
        'radii',
        'space',
        'shadows',
        'sizes',
        'zIndices',
        'transition',
        'blur',
      ]
      function ev(e, r = 1 / 0) {
        return ((0, o.Kn)(e) || Array.isArray(e)) && r
          ? Object.entries(e).reduce(
              (e, [n, i]) => (
                (0, o.Kn)(i) || Array.isArray(i)
                  ? Object.entries(ev(i, r - 1)).forEach(([r, o]) => {
                      e[`${n}.${r}`] = o
                    })
                  : (e[n] = i),
                e
              ),
              {}
            )
          : e
      }
      function ey(e) {
        var r
        let n = (function (e) {
            let { __cssMap: r, __cssVars: n, __breakpoints: o, ...i } = e
            return i
          })(e),
          a = (function (e, r) {
            let n = {}
            for (let o of r) o in e && (n[o] = e[o])
            return n
          })(n, eb),
          s = n.semanticTokens,
          l = (function ({ tokens: e, semanticTokens: r }) {
            var n, o
            let i = Object.entries(null != (n = ev(e)) ? n : {}).map(
                ([e, r]) => [e, { isSemantic: !1, value: r }]
              ),
              a = Object.entries(null != (o = ev(r, 1)) ? o : {}).map(
                ([e, r]) => [e, { isSemantic: !0, value: r }]
              )
            return Object.fromEntries([...i, ...a])
          })({ tokens: a, semanticTokens: s }),
          u = null == (r = n.config) ? void 0 : r.cssVarPrefix,
          { cssMap: c, cssVars: d } = (function (e, r) {
            let n = {},
              a = {}
            for (let [s, l] of Object.entries(e)) {
              let { isSemantic: u, value: c } = l,
                { variable: d, reference: p } = eg(
                  s,
                  null == r ? void 0 : r.cssVarPrefix
                )
              if (!u) {
                if (s.startsWith('space')) {
                  let e = s.split('.'),
                    [r, ...n] = e,
                    o = `${r}.-${n.join('.')}`,
                    i = er.negate(c),
                    l = er.negate(p)
                  a[o] = { value: i, var: d, varRef: l }
                }
                ;(n[d] = c), (a[s] = { value: c, var: d, varRef: p })
                continue
              }
              let h = (n) => {
                  let o = String(s).split('.')[0],
                    i = [o, n].join('.'),
                    a = e[i]
                  if (!a) return n
                  let { reference: l } = eg(
                    i,
                    null == r ? void 0 : r.cssVarPrefix
                  )
                  return l
                },
                f = (0, o.Kn)(c) ? c : { default: c }
              ;(n = i(
                n,
                Object.entries(f).reduce((e, [r, n]) => {
                  var o
                  let i = h(n)
                  if ('default' === r) return (e[d] = i), e
                  let a = null != (o = null == ef ? void 0 : ef[r]) ? o : r
                  return (e[a] = { [d]: i }), e
                }, {})
              )),
                (a[s] = { value: p, var: d, varRef: p })
            }
            return { cssVars: n, cssMap: a }
          })(l, { cssVarPrefix: u })
        return (
          Object.assign(n, {
            __cssVars: {
              '--chakra-ring-inset': 'var(--chakra-empty,/*!*/ /*!*/)',
              '--chakra-ring-offset-width': '0px',
              '--chakra-ring-offset-color': '#fff',
              '--chakra-ring-color': 'rgba(66, 153, 225, 0.6)',
              '--chakra-ring-offset-shadow': '0 0 #0000',
              '--chakra-ring-shadow': '0 0 #0000',
              '--chakra-space-x-reverse': '0',
              '--chakra-space-y-reverse': '0',
              ...d,
            },
            __cssMap: c,
            __breakpoints: (function (e) {
              var r
              if (!e) return null
              e.base = null != (r = e.base) ? r : '0px'
              let n = es(e),
                i = Object.entries(e)
                  .sort(ei)
                  .map(([e, r], n, o) => {
                    var i
                    let [, a] = null != (i = o[n + 1]) ? i : []
                    return (
                      (a = parseFloat(a) > 0 ? el(a) : void 0),
                      {
                        _minW: el(r),
                        breakpoint: e,
                        minW: r,
                        maxW: a,
                        maxWQuery: eu(null, a),
                        minWQuery: eu(r),
                        minMaxQuery: eu(r, a),
                      }
                    )
                  }),
                a = (function (e) {
                  let r = Object.keys(ea(e))
                  return new Set(r)
                })(e),
                s = Array.from(a.values())
              return {
                keys: a,
                normalized: n,
                isResponsive(e) {
                  let r = Object.keys(e)
                  return r.length > 0 && r.every((e) => a.has(e))
                },
                asObject: ea(e),
                asArray: es(e),
                details: i,
                media: [null, ...n.map((e) => eu(e)).slice(1)],
                toArrayValue(e) {
                  if (!(0, o.Kn)(e))
                    throw Error('toArrayValue: value must be an object')
                  let r = s.map((r) => {
                    var n
                    return null != (n = e[r]) ? n : null
                  })
                  for (
                    ;
                    null ===
                    (function (e) {
                      let r = null == e ? 0 : e.length
                      return r ? e[r - 1] : void 0
                    })(r);

                  )
                    r.pop()
                  return r
                },
                toObjectValue(e) {
                  if (!Array.isArray(e))
                    throw Error('toObjectValue: value must be an array')
                  return e.reduce((e, r, n) => {
                    let o = s[n]
                    return null != o && null != r && (e[o] = r), e
                  }, {})
                },
              }
            })(n.breakpoints),
          }),
          n
        )
      }
      var ex = i(
        {},
        j,
        T,
        A,
        R,
        F,
        B,
        W,
        L,
        z,
        {
          srOnly: {
            transform: (e) => (!0 === e ? D : 'focusable' === e ? I : {}),
          },
          layerStyle: {
            processResult: !0,
            transform: (e, r, n) => O(r, `layerStyles.${e}`, n),
          },
          textStyle: {
            processResult: !0,
            transform: (e, r, n) => O(r, `textStyles.${e}`, n),
          },
          apply: { processResult: !0, transform: (e, r, n) => O(r, e, n) },
        },
        V,
        P,
        N,
        G,
        Y,
        H,
        U,
        M,
        q
      )
      Object.keys(Object.assign({}, N, F, R, z, V))
      var ek = [...Object.keys(ex), ...em],
        eS = { ...ex, ...ef },
        ew = (e) => e in eS,
        eC = (e) => (r) => {
          if (!r.__breakpoints) return e
          let { isResponsive: n, toArrayValue: i, media: a } = r.__breakpoints,
            s = {}
          for (let l in e) {
            let u = (0, o.Pu)(e[l], r)
            if (null == u) continue
            if (!Array.isArray((u = (0, o.Kn)(u) && n(u) ? i(u) : u))) {
              s[l] = u
              continue
            }
            let c = u.slice(0, a.length).length
            for (let e = 0; e < c; e += 1) {
              let r = null == a ? void 0 : a[e]
              if (!r) {
                s[l] = u[e]
                continue
              }
              ;(s[r] = s[r] || {}), null != u[e] && (s[r][l] = u[e])
            }
          }
          return s
        },
        e_ = (e, r) =>
          e.startsWith('--') &&
          'string' == typeof r &&
          !/^var\(--.+\)$/.test(r),
        eE = (e, r) => {
          var n, o
          if (null == r) return r
          let i = (r) => {
              var n, o
              return null == (o = null == (n = e.__cssMap) ? void 0 : n[r])
                ? void 0
                : o.varRef
            },
            a = (e) => {
              var r
              return null != (r = i(e)) ? r : e
            },
            [s, l] = (function (e) {
              let r = [],
                n = '',
                o = !1
              for (let i = 0; i < e.length; i++) {
                let a = e[i]
                '(' === a
                  ? ((o = !0), (n += a))
                  : ')' === a
                  ? ((o = !1), (n += a))
                  : ',' !== a || o
                  ? (n += a)
                  : (r.push(n), (n = ''))
              }
              return (n = n.trim()) && r.push(n), r
            })(r)
          return (r = null != (o = null != (n = i(s)) ? n : a(l)) ? o : a(r))
        },
        ej = (e) => (r) => {
          let n = (function (e) {
            let { configs: r = {}, pseudos: n = {}, theme: a } = e,
              s = (e, l = !1) => {
                var u, c, d
                let p = (0, o.Pu)(e, a),
                  h = eC(p)(a),
                  f = {}
                for (let e in h) {
                  let m = h[e],
                    g = (0, o.Pu)(m, a)
                  e in n && (e = n[e]), e_(e, g) && (g = eE(a, g))
                  let b = r[e]
                  if ((!0 === b && (b = { property: e }), (0, o.Kn)(g))) {
                    ;(f[e] = null != (u = f[e]) ? u : {}),
                      (f[e] = i({}, f[e], s(g, !0)))
                    continue
                  }
                  let v =
                    null !=
                    (d =
                      null == (c = null == b ? void 0 : b.transform)
                        ? void 0
                        : c.call(b, g, a, p))
                      ? d
                      : g
                  v = (null == b ? void 0 : b.processResult) ? s(v, !0) : v
                  let y = (0, o.Pu)(null == b ? void 0 : b.property, a)
                  if (!l && (null == b ? void 0 : b.static)) {
                    let e = (0, o.Pu)(b.static, a)
                    f = i({}, f, e)
                  }
                  if (y && Array.isArray(y)) {
                    for (let e of y) f[e] = v
                    continue
                  }
                  if (y) {
                    '&' === y && (0, o.Kn)(v) ? (f = i({}, f, v)) : (f[y] = v)
                    continue
                  }
                  if ((0, o.Kn)(v)) {
                    f = i({}, f, v)
                    continue
                  }
                  f[e] = v
                }
                return f
              }
            return s
          })({ theme: r, pseudos: ef, configs: ex })
          return n(e)
        }
      function eT(e) {
        return e
      }
      function eA(e) {
        return e
      }
      function eP(e) {
        return {
          definePartsStyle: (e) => e,
          defineMultiStyleConfig: (r) => ({ parts: e, ...r }),
        }
      }
      function eB(e) {
        return (r) => {
          var n
          let { variant: a, size: s, theme: l } = r,
            u = (function (e) {
              let r = e.__breakpoints
              return function (e, n, a, s) {
                var l, u, c
                if (!r) return
                let d = {},
                  p =
                    ((c = r.toArrayValue),
                    Array.isArray(a)
                      ? a
                      : (0, o.Kn)(a)
                      ? c(a)
                      : null != a
                      ? [a]
                      : void 0)
                if (!p) return d
                let h = p.length,
                  f = 1 === h,
                  m = !!e.parts
                for (let a = 0; a < h; a++) {
                  let c = r.details[a],
                    h =
                      r.details[
                        (function (e, r) {
                          for (let n = r + 1; n < e.length; n++)
                            if (null != e[n]) return n
                          return -1
                        })(p, a)
                      ],
                    g = eu(c.minW, null == h ? void 0 : h._minW),
                    b = (0, o.Pu)(null == (l = e[n]) ? void 0 : l[p[a]], s)
                  if (b) {
                    if (m) {
                      null == (u = e.parts) ||
                        u.forEach((e) => {
                          i(d, { [e]: f ? b[e] : { [g]: b[e] } })
                        })
                      continue
                    }
                    if (!m) {
                      f ? i(d, b) : (d[g] = b)
                      continue
                    }
                    d[g] = b
                  }
                }
                return d
              }
            })(l)
          return i(
            {},
            (0, o.Pu)(null != (n = e.baseStyle) ? n : {}, r),
            u(e, 'sizes', s, r),
            u(e, 'variants', a, r)
          )
        }
      }
      function eR(e) {
        return (function (e, r = []) {
          let n = Object.assign({}, e)
          for (let e of r) e in n && delete n[e]
          return n
        })(e, ['styleConfig', 'size', 'variant', 'colorScheme'])
      }
    },
    870: function (e, r, n) {
      'use strict'
      n.d(r, {
        m: function () {
          return P
        },
      })
      var o,
        i = n(4586),
        a = new Set([
          ...i.cC,
          'textStyle',
          'layerStyle',
          'apply',
          'noOfLines',
          'focusBorderColor',
          'errorBorderColor',
          'as',
          '__css',
          'css',
          'sx',
        ]),
        s = new Set(['htmlWidth', 'htmlHeight', 'htmlSize', 'htmlTranslate'])
      function l(e) {
        return s.has(e) || !a.has(e)
      }
      var u = n(4638),
        c = n(2115),
        d = n(9045),
        p = n(3776),
        h = n(2784),
        f = n(7896),
        m = n(6894),
        g =
          /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        b = (0, m.Z)(function (e) {
          return (
            g.test(e) ||
            (111 === e.charCodeAt(0) &&
              110 === e.charCodeAt(1) &&
              91 > e.charCodeAt(2))
          )
        }),
        v = n(8543),
        y = n(2792),
        x = n(653),
        k = n(2668),
        S = function (e) {
          return 'theme' !== e
        },
        w = function (e) {
          return 'string' == typeof e && e.charCodeAt(0) > 96 ? b : S
        },
        C = function (e, r, n) {
          var o
          if (r) {
            var i = r.shouldForwardProp
            o =
              e.__emotion_forwardProp && i
                ? function (r) {
                    return e.__emotion_forwardProp(r) && i(r)
                  }
                : i
          }
          return 'function' != typeof o && n && (o = e.__emotion_forwardProp), o
        },
        _ = function (e) {
          var r = e.cache,
            n = e.serialized,
            o = e.isStringTag
          return (
            (0, y.hC)(r, n, o),
            (0, k.L)(function () {
              return (0, y.My)(r, n, o)
            }),
            null
          )
        },
        E = function e(r, n) {
          var o,
            i,
            a = r.__emotion_real === r,
            s = (a && r.__emotion_base) || r
          void 0 !== n && ((o = n.label), (i = n.target))
          var l = C(r, n, a),
            u = l || w(s),
            c = !u('as')
          return function () {
            var d = arguments,
              p =
                a && void 0 !== r.__emotion_styles
                  ? r.__emotion_styles.slice(0)
                  : []
            if (
              (void 0 !== o && p.push('label:' + o + ';'),
              null == d[0] || void 0 === d[0].raw)
            )
              p.push.apply(p, d)
            else {
              p.push(d[0][0])
              for (var m = d.length, g = 1; g < m; g++) p.push(d[g], d[0][g])
            }
            var b = (0, v.w)(function (e, r, n) {
              var o = (c && e.as) || s,
                a = '',
                d = [],
                f = e
              if (null == e.theme) {
                for (var m in ((f = {}), e)) f[m] = e[m]
                f.theme = (0, h.useContext)(v.T)
              }
              'string' == typeof e.className
                ? (a = (0, y.fp)(r.registered, d, e.className))
                : null != e.className && (a = e.className + ' ')
              var g = (0, x.O)(p.concat(d), r.registered, f)
              ;(a += r.key + '-' + g.name), void 0 !== i && (a += ' ' + i)
              var b = c && void 0 === l ? w(o) : u,
                k = {}
              for (var S in e) (!c || 'as' !== S) && b(S) && (k[S] = e[S])
              return (
                (k.className = a),
                (k.ref = n),
                (0, h.createElement)(
                  h.Fragment,
                  null,
                  (0, h.createElement)(_, {
                    cache: r,
                    serialized: g,
                    isStringTag: 'string' == typeof o,
                  }),
                  (0, h.createElement)(o, k)
                )
              )
            })
            return (
              (b.displayName =
                void 0 !== o
                  ? o
                  : 'Styled(' +
                    ('string' == typeof s
                      ? s
                      : s.displayName || s.name || 'Component') +
                    ')'),
              (b.defaultProps = r.defaultProps),
              (b.__emotion_real = b),
              (b.__emotion_base = s),
              (b.__emotion_styles = p),
              (b.__emotion_forwardProp = l),
              Object.defineProperty(b, 'toString', {
                value: function () {
                  return '.' + i
                },
              }),
              (b.withComponent = function (r, o) {
                return e(
                  r,
                  (0, f.Z)({}, n, o, { shouldForwardProp: C(b, o, !0) })
                ).apply(void 0, p)
              }),
              b
            )
          }
        }.bind()
      ;[
        'a',
        'abbr',
        'address',
        'area',
        'article',
        'aside',
        'audio',
        'b',
        'base',
        'bdi',
        'bdo',
        'big',
        'blockquote',
        'body',
        'br',
        'button',
        'canvas',
        'caption',
        'cite',
        'code',
        'col',
        'colgroup',
        'data',
        'datalist',
        'dd',
        'del',
        'details',
        'dfn',
        'dialog',
        'div',
        'dl',
        'dt',
        'em',
        'embed',
        'fieldset',
        'figcaption',
        'figure',
        'footer',
        'form',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'head',
        'header',
        'hgroup',
        'hr',
        'html',
        'i',
        'iframe',
        'img',
        'input',
        'ins',
        'kbd',
        'keygen',
        'label',
        'legend',
        'li',
        'link',
        'main',
        'map',
        'mark',
        'marquee',
        'menu',
        'menuitem',
        'meta',
        'meter',
        'nav',
        'noscript',
        'object',
        'ol',
        'optgroup',
        'option',
        'output',
        'p',
        'param',
        'picture',
        'pre',
        'progress',
        'q',
        'rp',
        'rt',
        'ruby',
        's',
        'samp',
        'script',
        'section',
        'select',
        'small',
        'source',
        'span',
        'strong',
        'style',
        'sub',
        'summary',
        'sup',
        'table',
        'tbody',
        'td',
        'textarea',
        'tfoot',
        'th',
        'thead',
        'time',
        'title',
        'tr',
        'track',
        'u',
        'ul',
        'var',
        'video',
        'wbr',
        'circle',
        'clipPath',
        'defs',
        'ellipse',
        'foreignObject',
        'g',
        'image',
        'line',
        'linearGradient',
        'mask',
        'path',
        'pattern',
        'polygon',
        'polyline',
        'radialGradient',
        'rect',
        'stop',
        'svg',
        'text',
        'tspan',
      ].forEach(function (e) {
        E[e] = E(e)
      })
      var j = null != (o = E.default) ? o : E,
        T =
          ({ baseStyle: e }) =>
          (r) => {
            let { theme: n, css: o, __css: a, sx: s, ...l } = r,
              u = (0, c.lw)(l, (e, r) => (0, i.ZR)(r)),
              h = (0, d.Pu)(e, r),
              f = (0, p.V8)({}, a, h, (0, c.YU)(u), s),
              m = (0, i.iv)(f)(r.theme)
            return o ? [m, o] : m
          }
      function A(e, r) {
        let { baseStyle: n, ...o } = null != r ? r : {}
        o.shouldForwardProp || (o.shouldForwardProp = l)
        let i = T({ baseStyle: n }),
          a = j(e, o)(i),
          s = h.forwardRef(function (e, r) {
            let { colorMode: n, forced: o } = (0, u.If)()
            return h.createElement(a, {
              ref: r,
              'data-theme': o ? n : void 0,
              ...e,
            })
          })
        return s
      }
      var P = (function () {
        let e = new Map()
        return new Proxy(A, {
          apply: (e, r, n) => A(...n),
          get: (r, n) => (e.has(n) || e.set(n, A(n)), e.get(n)),
        })
      })()
    },
    7107: function (e, r, n) {
      'use strict'
      n.d(r, {
        G: function () {
          return i
        },
      })
      var o = n(2784)
      function i(e) {
        return (0, o.forwardRef)(e)
      }
    },
    5489: function (e, r, n) {
      'use strict'
      n.d(r, {
        jC: function () {
          return h
        },
        mq: function () {
          return p
        },
      })
      var o = n(8543),
        i = n(2784),
        a = n(4638),
        s = n(4586),
        l = n(2115),
        u = n(3637),
        c = n(8435)
      function d(e, r = {}) {
        var n
        let { styleConfig: d, ...p } = r,
          { theme: h, colorMode: f } = (function () {
            let e = (0, a.If)(),
              r = (function () {
                let e = (0, i.useContext)(o.T)
                if (!e)
                  throw Error(
                    'useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`'
                  )
                return e
              })()
            return { ...e, theme: r }
          })(),
          m = e ? (0, l.Wf)(h, `components.${e}`) : void 0,
          g = d || m,
          b = u(
            { theme: h, colorMode: f },
            null != (n = null == g ? void 0 : g.defaultProps) ? n : {},
            (0, l.YU)((0, l.CE)(p, ['children']))
          ),
          v = (0, i.useRef)({})
        if (g) {
          let e = (0, s.Ud)(g),
            r = e(b),
            n = c(v.current, r)
          n || (v.current = r)
        }
        return v.current
      }
      function p(e, r = {}) {
        return d(e, r)
      }
      function h(e, r = {}) {
        return d(e, r)
      }
    },
    9045: function (e, r, n) {
      'use strict'
      function o(e, ...r) {
        return 'function' == typeof e ? e(...r) : e
      }
      n.d(r, {
        Pu: function () {
          return o
        },
      })
    },
    2115: function (e, r, n) {
      'use strict'
      function o(e, r) {
        let n = {}
        return (
          Object.keys(e).forEach((o) => {
            r.includes(o) || (n[o] = e[o])
          }),
          n
        )
      }
      n.d(r, {
        CE: function () {
          return o
        },
        Wf: function () {
          return i
        },
        YU: function () {
          return s
        },
        lw: function () {
          return a
        },
      }),
        n(3637)
      var i = ((e) => {
        let r = new WeakMap(),
          n = (n, o, i, a) => {
            if (void 0 === n) return e(n, o, i)
            r.has(n) || r.set(n, new Map())
            let s = r.get(n)
            if (s.has(o)) return s.get(o)
            let l = e(n, o, i, a)
            return s.set(o, l), l
          }
        return n
      })(function (e, r, n, o) {
        let i = 'string' == typeof r ? r.split('.') : [r]
        for (o = 0; o < i.length && e; o += 1) e = e[i[o]]
        return void 0 === e ? n : e
      })
      function a(e, r) {
        let n = {}
        return (
          Object.keys(e).forEach((o) => {
            let i = e[o],
              a = r(i, o, e)
            a && (n[o] = i)
          }),
          n
        )
      }
      var s = (e) => a(e, (e) => null != e)
    },
  },
  function (e) {
    var r = function (r) {
      return e((e.s = r))
    }
    e.O(0, [774, 179], function () {
      return r(6570), r(2203)
    }),
      (_N_E = e.O())
  },
])
