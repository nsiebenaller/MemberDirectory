webpackHotUpdate(0,{

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(29);

var _redux = __webpack_require__(160);

var _reactRedux = __webpack_require__(38);

var _reduxLogger = __webpack_require__(566);

var _reduxThunk = __webpack_require__(567);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxPromise = __webpack_require__(568);

var _reduxPromise2 = _interopRequireDefault(_reduxPromise);

var _styles = __webpack_require__(98);

var _index = __webpack_require__(628);

var _index2 = _interopRequireDefault(_index);

var _mui_theme = __webpack_require__(632);

var _mui_theme2 = _interopRequireDefault(_mui_theme);

var _index3 = __webpack_require__(170);

var _index4 = _interopRequireDefault(_index3);

var _App = __webpack_require__(171);

var _initialState = __webpack_require__(6139);

var _initialState2 = _interopRequireDefault(_initialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IS_DEV = undefined === 'true';
var logger = (0, _reduxLogger.createLogger)();
var store = configureStore(_initialState2.default);

(0, _reactDom.render)(_react2.default.createElement(
  _styles.MuiThemeProvider,
  { theme: _mui_theme2.default },
  _react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_App.App, null)
  )
), document.getElementById('app'));

if (module.hot && IS_DEV) {
  module.hot.accept(171, function () {
    var _require = __webpack_require__(171),
        NextApp = _require.App;

    (0, _reactDom.render)(_react2.default.createElement(
      _styles.MuiThemeProvider,
      { theme: _mui_theme2.default },
      _react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(NextApp, null)
      )
    ), document.getElementById('app'));
  });
}

function configureStore(initialData) {
  var store = (0, _redux.createStore)(_index4.default, initialData, (0, _redux.applyMiddleware)(_reduxThunk2.default, _reduxPromise2.default, logger));

  if (module.hot && IS_DEV) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept(170, function () {
      var nextRootReducer = __webpack_require__(170);
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

/***/ })

})