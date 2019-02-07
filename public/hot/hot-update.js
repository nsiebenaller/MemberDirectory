webpackHotUpdate(0,{

/***/ 6131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(38);

var _KeyboardArrowDown = __webpack_require__(195);

var _KeyboardArrowDown2 = _interopRequireDefault(_KeyboardArrowDown);

var _icons = __webpack_require__(78);

var _index = __webpack_require__(56);

var _user = __webpack_require__(6132);

var _user2 = _interopRequireDefault(_user);

var _search = __webpack_require__(6133);

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Frame = (_dec = (0, _reactRedux.connect)(function (state) {
  return {
    selTab: state.general.selectedTab,
    searchTerm: state.general.searchTerm
  };
}, { storeParam: _index.storeParam }), _dec(_class = function (_Component) {
  _inherits(Frame, _Component);

  function Frame(props) {
    _classCallCheck(this, Frame);

    var _this = _possibleConstructorReturn(this, (Frame.__proto__ || Object.getPrototypeOf(Frame)).call(this, props));

    _this.setSearchTerm = function (term) {
      return _this.props.storeParam({ searchTerm: term });
    };

    _this.state = {};
    return _this;
  }

  _createClass(Frame, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          selTab = _props.selTab,
          history = _props.history;

      return _react2.default.createElement(
        'div',
        { className: 'frame-container' },
        _react2.default.createElement(
          'div',
          { className: 'frame-col-container' },
          _react2.default.createElement(ColItem, {
            'class': "primary-option option",
            option: "Home",
            storeParam: this.props.storeParam,
            icon: _react2.default.createElement(_icons.BubbleChart, null)
          }),
          _react2.default.createElement(ColItem, {
            'class': 'option ' + (selTab === 'Statistics' ? "sel-option" : ""),
            option: "Statistics",
            storeParam: this.props.storeParam,
            icon: _react2.default.createElement(_icons.ViewModule, null)
          }),
          _react2.default.createElement(ColItem, {
            'class': 'option ' + (selTab === 'Directory' ? "sel-option" : ""),
            option: "Directory",
            storeParam: this.props.storeParam,
            icon: _react2.default.createElement(_icons.People, null)
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'frame-row-container' },
          _react2.default.createElement(_search2.default, { setSearchTerm: this.setSearchTerm, searchTerm: this.props.searchTerm }),
          _react2.default.createElement(_user2.default, { history: history })
        )
      );
    }
  }]);

  return Frame;
}(_react.Component)) || _class);
exports.default = Frame;


var ColItem = function ColItem(props) {
  return _react2.default.createElement(
    'div',
    {
      className: props.class,
      onClick: function onClick() {
        return props.storeParam({ selectedTab: props.option });
      }
    },
    props.icon
  );
};

/***/ })

})