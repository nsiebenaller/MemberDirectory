'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _members = require('./members');

var _members2 = _interopRequireDefault(_members);

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var router = _express2.default.Router();

router.route('/').get(function (req, res, next) {
  return res.send('I am the API');
});

router.route('/login').get(function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var _req$headers, username, password, prospect, token, verifiedUser;

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
              id: prospect.id
            }, 'secret', {
              expiresIn: '24h'
            });
            verifiedUser = {
              id: prospect.id,
              username: prospect.username,
              token: token
            };
            return _context.abrupt('return', res.status(200).send(verifiedUser));

          case 11:
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

router.use('/members', _members2.default);
module.exports = router;