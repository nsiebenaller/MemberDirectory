'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _members = require('./members');

var _members2 = _interopRequireDefault(_members);

var _tags = require('./tags');

var _tags2 = _interopRequireDefault(_tags);

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var router = _express2.default.Router();

router.route('/').get(function (req, res, next) {
  return res.send('OK');
});

router.route('/ping').get(function (req, res, next) {
  var token = req.cookies.frcctoken;
  var verified = _jsonwebtoken2.default.verify(token, 'secret');
  return res.status(200).send({ username: verified.username, id: verified.id });
});

router.route('/login').get(function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var _req$headers, username, password, prospect, token, verifiedUser, cookieOptions;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$headers = req.headers, username = _req$headers.username, password = _req$headers.password;

            if (!(!username || !password)) {
              _context.next = 3;
              break;
            }

            return _context.abrupt('return', res.status(401).send("Unauthorized Access"));

          case 3:
            _context.next = 5;
            return _models2.default.User.findOne({ where: { username: username, password: password } });

          case 5:
            prospect = _context.sent;

            if (prospect) {
              _context.next = 8;
              break;
            }

            return _context.abrupt('return', res.status(401).send("Unauthorized Access"));

          case 8:
            token = _jsonwebtoken2.default.sign({
              username: prospect.username,
              id: prospect.id,
              revoked: false
            }, 'secret', {
              expiresIn: '24h'
            });
            verifiedUser = {
              id: prospect.id,
              username: prospect.username
            };
            cookieOptions = {
              httpOnly: true,
              expires: 0
            };

            res.cookie('frcctoken', token, cookieOptions);

            return _context.abrupt('return', res.status(200).send(verifiedUser));

          case 13:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());

router.route('/logout').get(function (req, res, next) {
  var token = req.cookies.frcctoken;
  try {
    var verified = _jsonwebtoken2.default.verify(token, 'secret');
    var newToken = _jsonwebtoken2.default.sign({
      username: verified.username,
      id: verified.id,
      revoked: true
    }, 'secret', {
      expiresIn: '1'
    });
    var cookieOptions = {
      httpOnly: true
    };
    res.cookie('frcctoken', newToken, cookieOptions);
    return res.status(200).send("OK");
  } catch (e) {
    return res.status(200).send("OK");
  }
});

router.route('/migrate').get(function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var allMembers;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _models2.default.Member.findAll();

          case 2:
            allMembers = _context2.sent;

            allMembers.forEach(function (member) {
              var birthday = {
                birth_day: null,
                birth_month: null,
                birth_fullyear: null
              };
              if (member.birth_date) {
                var dateStr = member.birth_date.split('/');
                birthday.birth_month = parseInt(dateStr[0]);
                birthday.birth_day = parseInt(dateStr[1]);
              }
              if (member.birth_year) {
                birthday.birth_fullyear = parseInt(member.birth_year);
              }
              member.update(_extends({}, member, birthday));
            });
            return _context2.abrupt('return', res.status(200).send("OK"));

          case 5:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}());

router.use('/members', _members2.default);
router.use('/tags', _tags2.default);
module.exports = router;