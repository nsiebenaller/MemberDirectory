webpackHotUpdate(0,{

/***/ 6132:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(38);

var _icons = __webpack_require__(67);

var _core = __webpack_require__(103);

var _months = __webpack_require__(192);

var _actions = __webpack_require__(47);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var SelectedMember = (_dec = (0, _reactRedux.connect)(function (state) {
  return {};
}, { updateMember: _actions.updateMember, getMembers: _actions.getMembers }), _dec(_class = function (_Component) {
  _inherits(SelectedMember, _Component);

  function SelectedMember(props) {
    _classCallCheck(this, SelectedMember);

    var _this = _possibleConstructorReturn(this, (SelectedMember.__proto__ || Object.getPrototypeOf(SelectedMember)).call(this, props));

    _this.handleSetState = function (e) {
      _this.setState(e);
    };

    _this.handleSave = function () {
      //console.log(this.state.editMember)
      _this.props.updateMember(_this.state.editMember);
      _this.setState({ editing: false });
    };

    _this.state = {
      editing: false,
      editMember: null
    };
    return _this;
  }

  _createClass(SelectedMember, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (!this.state.editMember) {
        this.setState({ editMember: this.props.member });
      } else if (this.props.member && this.props.member.id !== this.state.editMember.id) {
        this.setState({ editMember: this.props.member });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props,
          state = this.state;

      console.log(props.member);
      if (!props.member) {
        return _react2.default.createElement(
          'div',
          { className: 'table-card-slot ' + (props.opened ? "open" : "") },
          _react2.default.createElement(
            'div',
            { className: 'table-card' },
            'no member selected'
          )
        );
      }

      //console.log(state)
      console.log(props.member);
      return _react2.default.createElement(
        'div',
        { className: 'table-card-slot ' + (props.opened ? "open" : "") },
        _react2.default.createElement(
          'div',
          { className: 'table-card' },
          _react2.default.createElement(
            'div',
            { className: 'card-header bg-primary' },
            _react2.default.createElement(
              'div',
              { className: 'header-text' },
              props.member.last_name,
              ', ',
              props.member.first_name
            ),
            _react2.default.createElement(ActionButtons, { editing: state.editing, setState: this.handleSetState })
          ),
          _react2.default.createElement(
            'div',
            { className: 'card-body ' + (state.editing ? 'card-form' : '') },
            _react2.default.createElement(
              'div',
              { className: 'card-section' },
              props.member.tags.map(function (tag) {
                return _react2.default.createElement(_core.Chip, {
                  key: 'key-' + tag.name,
                  label: tag.name,
                  className: 'chip',
                  onDelete: state.editing && function () {
                    return console.log("delete");
                  }
                });
              }),
              state.editing && _react2.default.createElement(_core.Chip, {
                key: 'key-master',
                label: _react2.default.createElement(
                  'div',
                  { className: 'add-tag-label' },
                  _react2.default.createElement(_icons.Add, null),
                  _react2.default.createElement(
                    'div',
                    null,
                    'add'
                  )
                ),
                className: 'add-tag-btn',
                variant: 'outlined',
                color: 'secondary'
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'card-subheader' },
              'Member Info'
            ),
            state.editing ? _react2.default.createElement(MemberEditInfo, { member: state.editMember, setState: this.handleSetState }) : _react2.default.createElement(MemberInfo, { member: props.member }),
            _react2.default.createElement(
              'div',
              { className: 'card-subheader' },
              'Contact Info'
            ),
            state.editing ? _react2.default.createElement(ContactEditInfo, { member: state.editMember, setState: this.handleSetState }) : _react2.default.createElement(ContactInfo, { member: props.member }),
            state.editing && _react2.default.createElement(
              _core.Button,
              {
                color: 'primary',
                variant: 'contained',
                fullWidth: true,
                onClick: this.handleSave
              },
              'Save'
            )
          )
        )
      );
    }
  }]);

  return SelectedMember;
}(_react.Component)) || _class);
exports.default = SelectedMember;


var ActionButtons = function ActionButtons(props) {
  if (props.editing) {
    return _react2.default.createElement(
      'div',
      {
        className: 'edit-btn',
        onClick: function onClick() {
          return props.setState({ editing: !props.editing });
        }
      },
      _react2.default.createElement(_icons.Clear, null),
      'Cancel'
    );
  } else {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        {
          className: 'edit-btn',
          onClick: function onClick() {
            return props.setState({ editing: !props.editing });
          }
        },
        _react2.default.createElement(_icons.Edit, null),
        'Edit'
      )
    );
  }
};

var MemberInfo = function MemberInfo(props) {
  return _react2.default.createElement(
    'div',
    { className: 'card-info-table' },
    _react2.default.createElement(
      'div',
      null,
      'First Name:'
    ),
    _react2.default.createElement(
      'div',
      null,
      props.member.first_name
    ),
    _react2.default.createElement(
      'div',
      null,
      'Last Name:'
    ),
    _react2.default.createElement(
      'div',
      null,
      props.member.last_name
    ),
    _react2.default.createElement(
      'div',
      null,
      'Address:'
    ),
    _react2.default.createElement(
      'div',
      null,
      props.member.address
    ),
    _react2.default.createElement(
      'div',
      null,
      'City:'
    ),
    _react2.default.createElement(
      'div',
      null,
      props.member.city
    ),
    _react2.default.createElement(
      'div',
      null,
      'State:'
    ),
    _react2.default.createElement(
      'div',
      null,
      props.member.state
    ),
    _react2.default.createElement(
      'div',
      null,
      'Zip:'
    ),
    _react2.default.createElement(
      'div',
      null,
      props.member.zip
    )
  );
};

var ContactInfo = function ContactInfo(props) {
  return _react2.default.createElement(
    'div',
    { className: 'card-info-table' },
    _react2.default.createElement(
      'div',
      null,
      'Home Phone:'
    ),
    _react2.default.createElement(
      'div',
      null,
      props.member.home_phone
    ),
    _react2.default.createElement(
      'div',
      null,
      'Cell Phone:'
    ),
    _react2.default.createElement(
      'div',
      null,
      props.member.cell_phone
    ),
    _react2.default.createElement(
      'div',
      null,
      'Email:'
    ),
    _react2.default.createElement(
      'div',
      null,
      props.member.email
    ),
    _react2.default.createElement(
      'div',
      null,
      'Joined:'
    ),
    _react2.default.createElement(
      'div',
      null,
      props.member.membership_date
    ),
    _react2.default.createElement(
      'div',
      null,
      'Birth Date:'
    ),
    _react2.default.createElement(
      'div',
      null,
      props.member.birth_date,
      props.member.birth_year ? '/' + props.member.birth_year : ''
    )
  );
};

var MemberEditInfo = function MemberEditInfo(props) {
  return _react2.default.createElement(
    'div',
    { className: 'card-form' },
    _react2.default.createElement(_core.TextField, {
      label: 'First Name',
      variant: "outlined",
      value: props.member.first_name,
      onChange: function onChange(e) {
        return props.setState({ editMember: _extends({}, props.member, { first_name: e.target.value }) });
      }
    }),
    _react2.default.createElement(_core.TextField, {
      label: 'Last Name',
      variant: "outlined",
      value: props.member.last_name,
      onChange: function onChange(e) {
        return props.setState({ editMember: _extends({}, props.member, { last_name: e.target.value }) });
      }
    }),
    _react2.default.createElement(_core.TextField, {
      label: 'Address',
      variant: "outlined",
      value: props.member.address,
      onChange: function onChange(e) {
        return props.setState({ editMember: _extends({}, props.member, { address: e.target.value }) });
      }
    }),
    _react2.default.createElement(_core.TextField, {
      label: 'City',
      variant: "outlined",
      value: props.member.city,
      onChange: function onChange(e) {
        return props.setState({ editMember: _extends({}, props.member, { city: e.target.value }) });
      }
    }),
    _react2.default.createElement(_core.TextField, {
      label: 'State',
      variant: "outlined",
      value: props.member.state,
      onChange: function onChange(e) {
        return props.setState({ editMember: _extends({}, props.member, { state: e.target.value }) });
      }
    }),
    _react2.default.createElement(_core.TextField, {
      label: 'Zip',
      variant: "outlined",
      value: props.member.zip,
      onChange: function onChange(e) {
        return props.setState({ editMember: _extends({}, props.member, { zip: e.target.value }) });
      }
    })
  );
};

var ContactEditInfo = function ContactEditInfo(props) {
  var birthDayOpts = formDaysForMonth(props.member.birth_month ? props.member.birth_month : 0);
  //console.log(props.member)
  return _react2.default.createElement(
    'div',
    { className: 'card-form' },
    _react2.default.createElement(_core.TextField, {
      label: 'Home Phone',
      variant: 'outlined',
      value: props.member.home_phone,
      onChange: function onChange(e) {
        props.setState({ editMember: _extends({}, props.member, { home_phone: e.target.value }) });
      }
    }),
    _react2.default.createElement(_core.TextField, {
      label: 'Cell Phone',
      variant: 'outlined',
      value: props.member.cell_phone,
      onChange: function onChange(e) {
        return props.setState({ editMember: _extends({}, props.member, { cell_phone: e.target.value }) });
      }
    }),
    _react2.default.createElement(_core.TextField, {
      label: 'Email',
      variant: 'outlined',
      value: props.member.email,
      onChange: function onChange(e) {
        props.setState({ editMember: _extends({}, props.member, { email: e.target.value }) });
      }
    }),
    _react2.default.createElement(_core.TextField, {
      fullWidth: true,
      label: 'Membership Year',
      variant: 'outlined',
      value: props.member.membership_date,
      onChange: function onChange(e) {
        return props.setState({ editMember: _extends({}, props.member, { membership_date: e.target.value }) });
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
          value: props.member.birth_month ? props.member.birth_month - 1 : '',
          onChange: function onChange(e) {
            return props.setState({ editMember: _extends({}, props.member, { birth_month: e.target.value, birthday: 1 }) });
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
          value: props.member.birth_day ? props.member.birth_day : '',
          onChange: function onChange(e) {
            return props.setState({ editMember: _extends({}, props.member, { birth_day: e.target.value }) });
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
        value: props.member.birth_year,
        onChange: function onChange(e) {
          return props.setState({ editMember: _extends({}, props.member, { birth_year: e.target.value }) });
        },
        type: 'number'
      })
    )
  );
};

/***/ })

})