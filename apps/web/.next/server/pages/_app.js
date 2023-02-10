;(() => {
  var exports = {}
  exports.id = 888
  exports.ids = [888]
  exports.modules = {
    /***/ 582: /***/ (module) => {
      // Exports
      module.exports = {
        style: {
          fontFamily: "'__Inter_9c9965', '__Inter_Fallback_9c9965'",
          fontStyle: 'normal',
        },
        className: '__className_9c9965',
      }

      /***/
    },

    /***/ 8473: /***/ (module, __webpack_exports__, __webpack_require__) => {
      'use strict'
      __webpack_require__.a(
        module,
        async (
          __webpack_handle_async_dependencies__,
          __webpack_async_result__
        ) => {
          try {
            __webpack_require__.r(__webpack_exports__)
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
              /* harmony export */
            })
            /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
              __webpack_require__(997)
            /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default =
              /*#__PURE__*/ __webpack_require__.n(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__
              )
            /* harmony import */ var _next_font_google_target_css_path_pages_app_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_5__ =
              __webpack_require__(582)
            /* harmony import */ var _next_font_google_target_css_path_pages_app_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_5___default =
              /*#__PURE__*/ __webpack_require__.n(
                _next_font_google_target_css_path_pages_app_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_5__
              )
            /* harmony import */ var ui__WEBPACK_IMPORTED_MODULE_1__ =
              __webpack_require__(5312)
            /* harmony import */ var ui_styles_styles_css__WEBPACK_IMPORTED_MODULE_2__ =
              __webpack_require__(4007)
            /* harmony import */ var ui_styles_styles_css__WEBPACK_IMPORTED_MODULE_2___default =
              /*#__PURE__*/ __webpack_require__.n(
                ui_styles_styles_css__WEBPACK_IMPORTED_MODULE_2__
              )
            /* harmony import */ var ui_assets_RightArrow__WEBPACK_IMPORTED_MODULE_3__ =
              __webpack_require__(8441)
            /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ =
              __webpack_require__(9097)
            /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default =
              /*#__PURE__*/ __webpack_require__.n(
                next_link__WEBPACK_IMPORTED_MODULE_4__
              )
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                ui__WEBPACK_IMPORTED_MODULE_1__,
                ui_assets_RightArrow__WEBPACK_IMPORTED_MODULE_3__,
              ])
            ;[
              ui__WEBPACK_IMPORTED_MODULE_1__,
              ui_assets_RightArrow__WEBPACK_IMPORTED_MODULE_3__,
            ] = __webpack_async_dependencies__.then
              ? (await __webpack_async_dependencies__)()
              : __webpack_async_dependencies__

            const fonts = {
              heading:
                _next_font_google_target_css_path_pages_app_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_5___default()
                  .style.fontFamily,
              body: _next_font_google_target_css_path_pages_app_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_5___default()
                .style.fontFamily,
            }
            const theme = (0,
            ui__WEBPACK_IMPORTED_MODULE_1__ /* .extendTheme */.B1)(
              ui__WEBPACK_IMPORTED_MODULE_1__ /* .themeProps */.YJ,
              fonts
            )
            const MyApp = ({ Component, pageProps, router }) =>
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                ui__WEBPACK_IMPORTED_MODULE_1__ /* .ChakraProvider */.xj,
                {
                  theme: theme,
                  children: /*#__PURE__*/ (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    ui__WEBPACK_IMPORTED_MODULE_1__ /* .Layout */.Ar,
                    {
                      children: [
                        /*#__PURE__*/ (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                          ui__WEBPACK_IMPORTED_MODULE_1__ /* .NavigationBar */.vx,
                          {
                            router: router.asPath,
                            children: [
                              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                next_link__WEBPACK_IMPORTED_MODULE_4___default(),
                                {
                                  href: '#Home',
                                  scroll: false,
                                  children:
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                      ui__WEBPACK_IMPORTED_MODULE_1__ /* .MenuItem */.sN,
                                      {
                                        router: router.asPath,
                                        children: 'Home',
                                      }
                                    ),
                                }
                              ),
                              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                next_link__WEBPACK_IMPORTED_MODULE_4___default(),
                                {
                                  href: '#Technologies',
                                  scroll: false,
                                  children:
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                      ui__WEBPACK_IMPORTED_MODULE_1__ /* .MenuItem */.sN,
                                      {
                                        router: router.asPath,
                                        children: 'About',
                                      }
                                    ),
                                }
                              ),
                              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                next_link__WEBPACK_IMPORTED_MODULE_4___default(),
                                {
                                  href: '#Services',
                                  scroll: false,
                                  children:
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                      ui__WEBPACK_IMPORTED_MODULE_1__ /* .MenuItem */.sN,
                                      {
                                        router: router.asPath,
                                        children: 'Services',
                                      }
                                    ),
                                }
                              ),
                              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                next_link__WEBPACK_IMPORTED_MODULE_4___default(),
                                {
                                  href: '#Contact',
                                  scroll: false,
                                  children: /*#__PURE__*/ (0,
                                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                    ui__WEBPACK_IMPORTED_MODULE_1__ /* .MenuItem */.sN,
                                    {
                                      router: router.asPath,
                                      children: [
                                        'Contact \xa0',
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                          ui_assets_RightArrow__WEBPACK_IMPORTED_MODULE_3__ /* ["default"] */.Z,
                                          {
                                            width: '12px',
                                            height: '7px',
                                            marginBottom: '2px',
                                            color:
                                              router.asPath === '/#Contact'
                                                ? '#838383'
                                                : 'white',
                                          }
                                        ),
                                      ],
                                    }
                                  ),
                                }
                              ),
                            ],
                          }
                        ),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                          ui__WEBPACK_IMPORTED_MODULE_1__ /* .SideBar */.Ke,
                          {
                            router: router.asPath,
                          }
                        ),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                          'main',
                          {
                            className:
                              _next_font_google_target_css_path_pages_app_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_5___default()
                                .className,
                            children:
                              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                Component,
                                {
                                  ...pageProps,
                                }
                              ),
                          }
                        ),
                      ],
                    }
                  ),
                }
              )
            /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
              MyApp

            __webpack_async_result__()
          } catch (e) {
            __webpack_async_result__(e)
          }
        }
      )

      /***/
    },

    /***/ 8441: /***/ (module, __webpack_exports__, __webpack_require__) => {
      'use strict'
      __webpack_require__.a(
        module,
        async (
          __webpack_handle_async_dependencies__,
          __webpack_async_result__
        ) => {
          try {
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
              /* harmony export */
            })
            /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
              __webpack_require__(997)
            /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default =
              /*#__PURE__*/ __webpack_require__.n(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__
              )
            /* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ =
              __webpack_require__(2210)
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__,
              ])
            _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = (
              __webpack_async_dependencies__.then
                ? (await __webpack_async_dependencies__)()
                : __webpack_async_dependencies__
            )[0]

            const RightArrow = (0,
            _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.createIcon)({
              displayName: 'RightArrow',
              viewBox: '0 0 12 7',
              path: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                'path',
                {
                  d: 'M9.038 2.44211H0.393441C-0.0383944 2.44211 0.000958442 2.60206 0.000958442 3.1862C0.000958442 3.1862 -0.0383944 4.56624 0.393441 4.56624H9.038V6.46734C9.038 6.94527 9.46199 7.17892 9.70539 6.83906L11.8881 3.8759C12.0373 3.66348 12.0373 3.33424 11.8881 3.12183L9.70539 0.158667C9.46199 -0.181194 9.038 0.0630805 9.038 0.530389V2.44211Z',
                  fill: 'currentColor',
                }
              ),
            })
            /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
              RightArrow

            __webpack_async_result__()
          } catch (e) {
            __webpack_async_result__(e)
          }
        }
      )

      /***/
    },

    /***/ 4007: /***/ () => {
      /***/
    },

    /***/ 3280: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/app-router-context.js')

      /***/
    },

    /***/ 2796: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/head-manager-context.js')

      /***/
    },

    /***/ 4014: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/i18n/normalize-locale-path.js')

      /***/
    },

    /***/ 8524: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/is-plain-object.js')

      /***/
    },

    /***/ 8020: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/mitt.js')

      /***/
    },

    /***/ 4406: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/page-path/denormalize-page-path.js')

      /***/
    },

    /***/ 4964: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/router-context.js')

      /***/
    },

    /***/ 1751: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/router/utils/add-path-prefix.js')

      /***/
    },

    /***/ 6220: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/router/utils/compare-states.js')

      /***/
    },

    /***/ 299: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/router/utils/format-next-pathname-info.js')

      /***/
    },

    /***/ 3938: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/router/utils/format-url.js')

      /***/
    },

    /***/ 9565: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/router/utils/get-asset-path-from-route.js')

      /***/
    },

    /***/ 5789: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/router/utils/get-next-pathname-info.js')

      /***/
    },

    /***/ 1897: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/router/utils/is-bot.js')

      /***/
    },

    /***/ 1428: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/router/utils/is-dynamic.js')

      /***/
    },

    /***/ 8854: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/router/utils/parse-path.js')

      /***/
    },

    /***/ 1292: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/router/utils/parse-relative-url.js')

      /***/
    },

    /***/ 4567: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/router/utils/path-has-prefix.js')

      /***/
    },

    /***/ 979: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/router/utils/querystring.js')

      /***/
    },

    /***/ 3297: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/router/utils/remove-trailing-slash.js')

      /***/
    },

    /***/ 6052: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/router/utils/resolve-rewrites.js')

      /***/
    },

    /***/ 4226: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/router/utils/route-matcher.js')

      /***/
    },

    /***/ 5052: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/router/utils/route-regex.js')

      /***/
    },

    /***/ 9232: /***/ (module) => {
      'use strict'
      module.exports = require('next/dist/shared/lib/utils.js')

      /***/
    },

    /***/ 6689: /***/ (module) => {
      'use strict'
      module.exports = require('react')

      /***/
    },

    /***/ 6405: /***/ (module) => {
      'use strict'
      module.exports = require('react-dom')

      /***/
    },

    /***/ 2639: /***/ (module) => {
      'use strict'
      module.exports = require('react-scroll-wheel-handler')

      /***/
    },

    /***/ 997: /***/ (module) => {
      'use strict'
      module.exports = require('react/jsx-runtime')

      /***/
    },

    /***/ 2210: /***/ (module) => {
      'use strict'
      module.exports = import('@chakra-ui/react')

      /***/
    },
  }
  // load runtime
  var __webpack_require__ = require('../webpack-runtime.js')
  __webpack_require__.C(exports)
  var __webpack_exec__ = (moduleId) =>
    __webpack_require__((__webpack_require__.s = moduleId))
  var __webpack_exports__ = __webpack_require__.X(0, [867, 274, 97, 312], () =>
    __webpack_exec__(8473)
  )
  module.exports = __webpack_exports__
})()
