webpackHotUpdate("static/development/pages/content/[slug].js",{

/***/ "./components/showcase/components/Banner.js":
/*!**************************************************!*\
  !*** ./components/showcase/components/Banner.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/logger */ "./lib/logger.js");
/* harmony import */ var _ShowcaseContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ShowcaseContext */ "./components/showcase/ShowcaseContext.js");
/* harmony import */ var _Swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Swiper */ "./components/showcase/components/Swiper.js");
/* harmony import */ var _DocumentScroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DocumentScroll */ "./components/showcase/components/DocumentScroll.js");
var _jsxFileName = "/home/roelito/GlobalSignIn/myxp-content-showcase/components/showcase/components/Banner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var Banner = function Banner(props) {
  var onResize = props.onResize;
  var bannerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var handleSwipe = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (position, action) {
    var size = Math.max(0, position.y2 - position.y1);
    bannerRef.current.style.transform = "scale(".concat(1 + size * 0.003, ")");
    bannerRef.current.style.transition = !size ? "all linear 100ms" : "none";
    onResize(size);
  }, [onResize]);
  var handleScroll = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (bannerRef.current) {
      var scrollY = document.documentElement.scrollTop || document.body.scrollTop || 0;

      if (scrollY < window.innerHeight - 260) {
        bannerRef.current.style.transform = "translateY(-".concat(scrollY * 0.3, "px)");
        bannerRef.current.style.transition = !scrollY ? "all linear 100ms" : "none";
      }
    }
  }, [bannerRef.current]);
  var banner = props.banner && props.banner.indexOf("http") !== 0 ? "http://10.0.3.6:1337" + props.banner : props.banner;
  var element = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    Object(_lib_logger__WEBPACK_IMPORTED_MODULE_3__["debugComponent"])("<Banner />", 4);
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4231522403", [banner]]]) + " " + ((banner ? "overlay" : "") || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("div", {
      ref: bannerRef,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4231522403", [banner]]]) + " " + "banner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), __jsx(_Swiper__WEBPACK_IMPORTED_MODULE_5__["default"], {
      id: "banner-swiper",
      onSwipe: handleSwipe,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    })), true ? __jsx(_DocumentScroll__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onScroll: handleScroll,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }) : undefined, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "4231522403",
      dynamic: [banner],
      __self: this
    }, ".overlay.__jsx-style-dynamic-selector{height:calc(100vh - 200px - 40px);position:fixed;width:441px;-webkit-perspective:8px;-moz-perspective:8px;-ms-perspective:8px;perspective:8px;-webkit-perspective-origin:50%;-moz-perspective-origin:50%;-ms-perspective-origin:50%;perspective-origin:50%;}.banner.__jsx-style-dynamic-selector{top:-10px;z-index:-1;position:fixed;-webkit-transform-origin:top center;-ms-transform-origin:top center;transform-origin:top center;height:calc(100vh - 200px - 40px + 10px);background:#dde6ef url(".concat(banner, ") no-repeat center top;background-size:cover;width:441px;}@media only screen and (max-width:768px){.overlay.__jsx-style-dynamic-selector,.banner.__jsx-style-dynamic-selector{width:100%;max-width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JvZWxpdG8vR2xvYmFsU2lnbkluL215eHAtY29udGVudC1zaG93Y2FzZS9jb21wb25lbnRzL3Nob3djYXNlL2NvbXBvbmVudHMvQmFubmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThDb0IsQUFHK0MsQUFPeEIsQUFZRyxVQVhGLENBWU0sVUFYRixLQVlmLFFBcEJlLEVBU2EsYUFSaEIsWUFDSSx1RUFReUIsVUFQbEIsK0JBUW1ELDBFQUNwRCxJQVJ4QixrQkFTYyxZQUNkIiwiZmlsZSI6Ii9ob21lL3JvZWxpdG8vR2xvYmFsU2lnbkluL215eHAtY29udGVudC1zaG93Y2FzZS9jb21wb25lbnRzL3Nob3djYXNlL2NvbXBvbmVudHMvQmFubmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYsIHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7IGRlYnVnQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9sb2dnZXJcIjtcbmltcG9ydCB7IFNob3djYXNlQ29udGV4dCB9IGZyb20gXCIuLi9TaG93Y2FzZUNvbnRleHRcIjtcbmltcG9ydCBTd2lwZXIgZnJvbSBcIi4vU3dpcGVyXCI7XG5pbXBvcnQgRG9jdW1lbnRTY3JvbGwgZnJvbSBcIi4vRG9jdW1lbnRTY3JvbGxcIjtcblxuY29uc3QgQmFubmVyID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IG9uUmVzaXplIH0gPSBwcm9wcztcbiAgY29uc3QgYmFubmVyUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IGhhbmRsZVN3aXBlID0gdXNlQ2FsbGJhY2soXG4gICAgKHBvc2l0aW9uLCBhY3Rpb24pID0+IHtcbiAgICAgIGNvbnN0IHNpemUgPSBNYXRoLm1heCgwLCBwb3NpdGlvbi55MiAtIHBvc2l0aW9uLnkxKTtcbiAgICAgIGJhbm5lclJlZi5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZSgkezEgKyBzaXplICogMC4wMDN9KWA7XG4gICAgICBiYW5uZXJSZWYuY3VycmVudC5zdHlsZS50cmFuc2l0aW9uID0gIXNpemUgPyBcImFsbCBsaW5lYXIgMTAwbXNcIiA6IFwibm9uZVwiO1xuICAgICAgb25SZXNpemUoc2l6ZSk7XG4gICAgfSxcbiAgICBbb25SZXNpemVdXG4gICk7XG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoYmFubmVyUmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IHNjcm9sbFkgPVxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8IDA7XG4gICAgICBpZiAoc2Nyb2xsWSA8IHdpbmRvdy5pbm5lckhlaWdodCAtIDI2MCkge1xuICAgICAgICBiYW5uZXJSZWYuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgtJHtzY3JvbGxZICogMC4zfXB4KWA7XG4gICAgICAgIGJhbm5lclJlZi5jdXJyZW50LnN0eWxlLnRyYW5zaXRpb24gPSAhc2Nyb2xsWVxuICAgICAgICAgID8gXCJhbGwgbGluZWFyIDEwMG1zXCJcbiAgICAgICAgICA6IFwibm9uZVwiO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW2Jhbm5lclJlZi5jdXJyZW50XSk7XG4gIGNvbnN0IGJhbm5lciA9XG4gICAgcHJvcHMuYmFubmVyICYmIHByb3BzLmJhbm5lci5pbmRleE9mKFwiaHR0cFwiKSAhPT0gMFxuICAgICAgPyBwcm9jZXNzLmVudi5GSUxFX1VSTCArIHByb3BzLmJhbm5lclxuICAgICAgOiBwcm9wcy5iYW5uZXI7XG4gIGNvbnN0IGVsZW1lbnQgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBkZWJ1Z0NvbXBvbmVudChcIjxCYW5uZXIgLz5cIiwgNCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtiYW5uZXIgPyBcIm92ZXJsYXlcIiA6IFwiXCJ9PlxuICAgICAgICAgIDxkaXYgcmVmPXtiYW5uZXJSZWZ9IGNsYXNzTmFtZT1cImJhbm5lclwiIC8+XG4gICAgICAgICAgPFN3aXBlciBpZD1cImJhbm5lci1zd2lwZXJcIiBvblN3aXBlPXtoYW5kbGVTd2lwZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gKFxuICAgICAgICAgIDxEb2N1bWVudFNjcm9sbCBvblNjcm9sbD17aGFuZGxlU2Nyb2xsfSAvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5vdmVybGF5IHtcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDIwMHB4IC0gNDBweCk7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICB3aWR0aDogNDQxcHg7XG4gICAgICAgICAgICBwZXJzcGVjdGl2ZTogOHB4O1xuICAgICAgICAgICAgcGVyc3BlY3RpdmUtb3JpZ2luOiA1MCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5iYW5uZXIge1xuICAgICAgICAgICAgdG9wOiAtMTBweDtcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGNlbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDIwMHB4IC0gNDBweCArIDEwcHgpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2RkZTZlZiB1cmwoJHtiYW5uZXJ9KSBuby1yZXBlYXQgY2VudGVyIHRvcDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICB3aWR0aDogNDQxcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgIC5vdmVybGF5LFxuICAgICAgICAgICAgLmJhbm5lciB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8Lz5cbiAgICApO1xuICB9LCBbYmFubmVyXSk7IC8vIERlcGVuZGVuY2llcyByZXF1aXJlZCB0byByZS1yZW5kZXJcbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYW5uZXI7XG4iXX0= */\n/*@ sourceURL=/home/roelito/GlobalSignIn/myxp-content-showcase/components/showcase/components/Banner.js */")));
  }, [banner]); // Dependencies required to re-render

  return element;
};

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ })

})
//# sourceMappingURL=[slug].js.121644d9339ed1410fab.hot-update.js.map