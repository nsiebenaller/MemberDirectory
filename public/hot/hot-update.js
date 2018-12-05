webpackHotUpdate(0,{

/***/ 6130:
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

var _reactRedux = __webpack_require__(80);

var _index = __webpack_require__(129);

var _TextField = __webpack_require__(260);

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewMemberForm = (_dec = (0, _reactRedux.connect)(function (state) {
  return {};
}, { storeParam: _index.storeParam }), _dec(_class = function (_Component) {
  _inherits(NewMemberForm, _Component);

  function NewMemberForm(props) {
    _classCallCheck(this, NewMemberForm);

    var _this = _possibleConstructorReturn(this, (NewMemberForm.__proto__ || Object.getPrototypeOf(NewMemberForm)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(NewMemberForm, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'new-member-form-container' },
        _react2.default.createElement(_TextField2.default, {
          placeholder: 'First Name',
          value: '',
          onChange: function onChange() {},
          margin: 'normal',
          variant: 'outlined'
        }),
        _react2.default.createElement(_TextField2.default, {
          placeholder: 'Last Name',
          value: '',
          onChange: function onChange() {},
          margin: 'normal',
          variant: 'outlined'
        }),
        _react2.default.createElement(_TextField2.default, {
          placeholder: 'Address',
          value: '',
          onChange: function onChange() {},
          margin: 'normal',
          variant: 'outlined'
        }),
        _react2.default.createElement(_TextField2.default, {
          placeholder: 'City',
          value: '',
          onChange: function onChange() {},
          margin: 'normal',
          variant: 'outlined'
        }),
        _react2.default.createElement(_TextField2.default, {
          placeholder: 'State',
          value: '',
          onChange: function onChange() {},
          margin: 'normal',
          variant: 'outlined'
        }),
        _react2.default.createElement(_TextField2.default, {
          placeholder: 'Zip',
          value: '',
          onChange: function onChange() {},
          margin: 'normal',
          variant: 'outlined'
        }),
        _react2.default.createElement(_TextField2.default, {
          placeholder: 'Home Phone',
          value: '',
          onChange: function onChange() {},
          margin: 'normal',
          variant: 'outlined'
        }),
        _react2.default.createElement(_TextField2.default, {
          placeholder: 'Cell Phone',
          value: '',
          onChange: function onChange() {},
          margin: 'normal',
          variant: 'outlined'
        }),
        _react2.default.createElement(_TextField2.default, {
          placeholder: 'Email',
          value: '',
          onChange: function onChange() {},
          margin: 'normal',
          variant: 'outlined'
        }),
        _react2.default.createElement(_TextField2.default, {
          placeholder: 'Membership Date',
          value: '',
          onChange: function onChange() {},
          margin: 'normal',
          variant: 'outlined'
        }),
        _react2.default.createElement(_TextField2.default, {
          placeholder: 'Status',
          value: '',
          onChange: function onChange() {},
          margin: 'normal',
          variant: 'outlined'
        }),
        _react2.default.createElement(_TextField2.default, {
          placeholder: 'Birth Date',
          value: '',
          onChange: function onChange() {},
          margin: 'normal',
          variant: 'outlined'
        }),
        _react2.default.createElement(_TextField2.default, {
          placeholder: 'Birth Year',
          value: '',
          onChange: function onChange() {},
          margin: 'normal',
          variant: 'outlined'
        })
      );
    }
  }]);

  return NewMemberForm;
}(_react.Component)) || _class);
exports.default = NewMemberForm;

/***/ })

})