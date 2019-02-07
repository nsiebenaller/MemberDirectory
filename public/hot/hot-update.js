webpackHotUpdate(0,{

/***/ 6137:
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

var _core = __webpack_require__(104);

var _Close = __webpack_require__(1918);

var _Close2 = _interopRequireDefault(_Close);

var _index = __webpack_require__(56);

var _months = __webpack_require__(320);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var formDaysForMonth = function formDaysForMonth(monthIdx) {
  var tmp = _months.months[monthIdx].days;
  var daysOpts = Array.apply(null, Array(tmp)).map(function (x, i) {
    return i;
  });
  return daysOpts;
};

var NewMemberForm = (_dec = (0, _reactRedux.connect)(function (state) {
  return {};
}, { createMember: _index.createMember }, null, { withRef: true }), _dec(_class = function (_Component) {
  _inherits(NewMemberForm, _Component);

  function NewMemberForm(props) {
    var _this2 = this;

    _classCallCheck(this, NewMemberForm);

    var _this = _possibleConstructorReturn(this, (NewMemberForm.__proto__ || Object.getPrototypeOf(NewMemberForm)).call(this, props));

    _this.handleSubmit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var state, valid, newMember, reply;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              state = _this.state;
              valid = state.firstname !== "" && state.lastname !== "" && state.address !== "" && state.city !== "" && state.state !== "" && state.zip !== "";

              if (!valid) {
                _context.next = 10;
                break;
              }

              newMember = {
                first_name: state.firstname,
                last_name: state.lastname,
                address: state.address,
                city: state.city,
                state: state.state,
                zip: state.zip,
                home_phone: state.homephone,
                cell_phone: state.cellphone,
                email: state.email,
                membership_date: state.membershipyear,
                status: "member",
                birth_date: state.birthmonth + 1 + "/" + state.birthday,
                birth_year: state.birthyear
              };
              _context.next = 6;
              return _this.props.createMember(newMember);

            case 6:
              reply = _context.sent;

              if (reply.success) {
                _this.setState({
                  snackbarOpen: true,
                  snackbarText: "Member Created!",
                  firstname: "",
                  lastname: "",
                  address: "",
                  city: "",
                  state: "",
                  zip: "",
                  homephone: "",
                  cellphone: "",
                  email: "",
                  membershipyear: "",
                  birthmonth: 0,
                  birthday: 1,
                  birthyear: ""
                });
              } else {
                _this.setState({ snackbarOpen: true, snackbarText: "Error Creating Member!" });
              }
              _context.next = 11;
              break;

            case 10:
              window.alert("Please Fill In All Fields!");

            case 11:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    }));

    _this.handleClose = function () {
      return _this.setState({ snackbarOpen: false });
    };

    _this.state = {
      snackbarOpen: false,
      snackbarText: "",
      firstname: "",
      lastname: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      homephone: "",
      cellphone: "",
      email: "",
      membershipyear: "",
      birthmonth: 0,
      birthday: 1,
      birthyear: ""
    };
    return _this;
  }

  _createClass(NewMemberForm, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      var props = this.props,
          state = this.state;

      var birthDayOpts = formDaysForMonth(state.birthmonth);
      return _react2.default.createElement(
        'div',
        { className: 'new-mem-form ' + (props.opened ? "open" : "") },
        _react2.default.createElement(_core.Snackbar, {
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'center'
          },
          open: state.snackbarOpen,
          autoHideDuration: 6000,
          onClose: this.handleClose,
          ContentProps: {
            'aria-describedby': 'message-id'
          },
          message: _react2.default.createElement(
            'span',
            { id: 'message-id' },
            state.snackbarText
          ),
          action: [_react2.default.createElement(
            _core.IconButton,
            {
              key: 'close',
              'aria-label': 'Close',
              color: 'secondary',
              onClick: this.handleClose
            },
            _react2.default.createElement(_Close2.default, null)
          )]
        }),
        _react2.default.createElement(
          'div',
          { className: 'new-mem-card' },
          _react2.default.createElement(
            'h2',
            null,
            'Create a New Member'
          ),
          _react2.default.createElement(
            'div',
            { className: 'new-mem-contents' },
            _react2.default.createElement(
              'div',
              { className: 'new-mem-label' },
              'Member Info'
            ),
            _react2.default.createElement(_core.TextField, {
              label: 'First Name',
              variant: 'outlined',
              value: state.firstname,
              onChange: function onChange(e) {
                return _this3.setState({ firstname: e.target.value });
              }
            }),
            _react2.default.createElement(_core.TextField, {
              label: 'Last Name',
              variant: 'outlined',
              value: state.lastname,
              onChange: function onChange(e) {
                return _this3.setState({ lastname: e.target.value });
              }
            }),
            _react2.default.createElement(_core.TextField, {
              label: 'Address',
              variant: 'outlined',
              value: state.address,
              onChange: function onChange(e) {
                return _this3.setState({ address: e.target.value });
              }
            }),
            _react2.default.createElement(_core.TextField, {
              label: 'City',
              variant: 'outlined',
              value: state.city,
              onChange: function onChange(e) {
                return _this3.setState({ city: e.target.value });
              }
            }),
            _react2.default.createElement(_core.TextField, {
              label: 'State',
              variant: 'outlined',
              value: state.state,
              onChange: function onChange(e) {
                return _this3.setState({ state: e.target.value });
              }
            }),
            _react2.default.createElement(_core.TextField, {
              label: 'Zip',
              variant: 'outlined',
              type: 'number',
              value: state.zip,
              onChange: function onChange(e) {
                return _this3.setState({ zip: e.target.value });
              }
            }),
            _react2.default.createElement(
              'div',
              { className: 'new-mem-label' },
              'Contact Info'
            ),
            _react2.default.createElement(_core.TextField, {
              label: 'Home Phone',
              variant: 'outlined',
              value: state.homephone,
              onChange: function onChange(e) {
                return _this3.setState({ homephone: e.target.value });
              }
            }),
            _react2.default.createElement(_core.TextField, {
              label: 'Cell Phone',
              variant: 'outlined',
              value: state.cellphone,
              onChange: function onChange(e) {
                return _this3.setState({ cellphone: e.target.value });
              }
            }),
            _react2.default.createElement(_core.TextField, {
              label: 'Email',
              variant: 'outlined',
              value: state.email,
              onChange: function onChange(e) {
                return _this3.setState({ email: e.target.value });
              }
            }),
            _react2.default.createElement(_core.TextField, {
              fullWidth: true,
              label: 'Membership Year',
              variant: 'outlined',
              value: state.membershipyear,
              onChange: function onChange(e) {
                return _this3.setState({ membershipyear: e.target.value });
              },
              type: 'number'
            }),
            _react2.default.createElement(
              'div',
              { className: 'new-mem-label' },
              'Birth Date'
            ),
            _react2.default.createElement(
              'div',
              { className: 'date-row' },
              _react2.default.createElement(
                _core.Select,
                {
                  fullWidth: true,
                  value: state.birthmonth,
                  onChange: function onChange(e) {
                    return _this3.setState({ birthmonth: e.target.value, birthday: 1 });
                  },
                  input: _react2.default.createElement(_core.OutlinedInput, { labelWidth: 0 })
                },
                _months.months.map(function (obj, idx) {
                  return _react2.default.createElement(
                    _core.MenuItem,
                    { key: idx, value: idx },
                    idx + 1,
                    ' - ',
                    obj.long
                  );
                })
              ),
              _react2.default.createElement(
                _core.Select,
                {
                  fullWidth: true,
                  value: state.birthday,
                  onChange: function onChange(e) {
                    return _this3.setState({ birthday: e.target.value });
                  },
                  input: _react2.default.createElement(_core.OutlinedInput, { labelWidth: 0 })
                },
                birthDayOpts.map(function (obj, idx) {
                  return _react2.default.createElement(
                    _core.MenuItem,
                    { key: 'day-' + idx, value: idx + 1 },
                    idx + 1
                  );
                })
              ),
              _react2.default.createElement(_core.TextField, {
                fullWidth: true,
                label: 'Year',
                variant: 'outlined',
                value: state.birthyear,
                onChange: function onChange(e) {
                  return _this3.setState({ birthyear: e.target.value });
                },
                type: 'number'
              })
            ),
            _react2.default.createElement(
              _core.Button,
              {
                color: 'secondary',
                variant: 'contained',
                onClick: this.handleSubmit
              },
              'Create'
            )
          )
        )
      );
    }
  }]);

  return NewMemberForm;
}(_react.Component)) || _class);
exports.default = NewMemberForm;

/***/ })

})