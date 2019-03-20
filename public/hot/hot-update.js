webpackHotUpdate(0,{

/***/ 6133:
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

var _icons = __webpack_require__(67);

var _index = __webpack_require__(47);

var _months = __webpack_require__(195);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getNextMonth(month) {
  return month === 11 ? 0 : month++;
}

var Main = (_dec = (0, _reactRedux.connect)(function (state) {
  return {
    members: state.general.members
  };
}, { storeParam: _index.storeParam }), _dec(_class = function (_Component) {
  _inherits(Main, _Component);

  function Main(props) {
    _classCallCheck(this, Main);

    var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));

    _this.calculateBirthdays = function () {
      var today = new Date();
      var tDay = today.getDate();
      var tMonth = today.getMonth();
      var tYear = today.getFullYear();
      var nMonth = tMonth === 11 ? 0 : tMonth + 1;
      var dateSorter = function dateSorter(a, b) {
        if (a.birth_month === b.birth_month) return a.birth_day > b.birth_day ? 1 : -1;else return a.birth_month > b.birth_month ? 1 : -1;
      };
      var birthdayMembers = _this.props.members.filter(function (person) {
        return person.birth_month === tMonth + 1 && person.birth_day >= tDay || person.birth_month === nMonth + 1;
      }).sort(dateSorter);
      birthdayMembers = birthdayMembers.length > 10 ? birthdayMembers.slice(0, 10) : birthdayMembers;
      _this.setState({ birthMembers: birthdayMembers });
    };

    _this.state = {
      birthMembers: null
    };
    return _this;
  }

  _createClass(Main, [{
    key: 'render',
    value: function render() {
      if (this.state.birthMembers === null && this.props.members.length > 0) {
        this.calculateBirthdays();
      }
      return _react2.default.createElement(
        'div',
        { className: 'main-container' },
        _react2.default.createElement(
          'div',
          { className: 'dashboard-header' },
          'Dashboard'
        ),
        _react2.default.createElement(
          'div',
          { className: 'main-contents' },
          _react2.default.createElement(
            'div',
            { className: 'dashboard-subheader' },
            'Upcoming Birthdays'
          ),
          _react2.default.createElement(
            'div',
            { className: 'dashboard-subheader' },
            'Actions'
          ),
          _react2.default.createElement(
            'div',
            { className: 'card-container' },
            this.state.birthMembers && this.state.birthMembers.map(function (member, idx) {
              return _react2.default.createElement(Card, {
                key: 'birth-member-' + idx,
                member: member
              });
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'action-container' },
            _react2.default.createElement(Action, { title: "Home", icon: _react2.default.createElement(_icons.BubbleChart, null) }),
            _react2.default.createElement(Action, { title: "Statistics", icon: _react2.default.createElement(_icons.ViewModule, null) }),
            _react2.default.createElement(Action, { title: "Directory", icon: _react2.default.createElement(_icons.People, null) })
          )
        )
      );
    }
  }]);

  return Main;
}(_react.Component)) || _class);
exports.default = Main;


var Card = function Card(_ref) {
  var member = _ref.member;

  return _react2.default.createElement(
    'div',
    { className: 'card' },
    _react2.default.createElement(
      'div',
      { className: 'icon-holder' },
      _react2.default.createElement(_icons.Person, null)
    ),
    _react2.default.createElement(
      'div',
      { className: 'card-contents' },
      _react2.default.createElement(
        'div',
        { className: 'title' },
        member.first_name,
        ' ',
        member.last_name
      ),
      _react2.default.createElement(
        'div',
        { className: 'subtitle' },
        _months.months[member.birth_month - 1].short,
        ' ',
        member.birth_day
      )
    )
  );
};

var Action = function Action(_ref2) {
  var title = _ref2.title,
      icon = _ref2.icon;

  return _react2.default.createElement(
    'div',
    { className: 'action-btn' },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: 'icon-holder' },
        icon
      ),
      _react2.default.createElement(
        'div',
        { className: 'title' },
        title
      )
    )
  );
};

/***/ })

})