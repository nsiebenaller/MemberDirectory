'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

var _helpers = require('../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var router = _express2.default.Router();

router.route('/').get(function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var allMembers;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _models2.default.Member.findAll({
              include: [{
                model: _models2.default.Tag,
                as: 'tags',
                through: { attributes: [] }
              }]
            });

          case 2:
            allMembers = _context.sent;

            res.status(200).send(allMembers);

          case 4:
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

router.route('/new').post(function (req, res, next) {
  _models2.default.Member.create(req.body).then(function (x) {
    res.status(200).send({ success: true });
  });
});

router.route('/update').post(function (req, res, next) {
  _models2.default.Member.findOne({ where: { id: req.body.id } }).then(function (obj) {
    obj.update(req.body).then(function (resp) {
      res.status(200).send({ success: true });
    }).catch(function (err) {
      res.status(500).send({ success: false });
    });
  });
});

router.route('/add_tag').post(function (req, res, next) {
  _models2.default.Member.findOne({ where: { id: req.body.member_id } }).then(function (obj) {
    _models2.default.Tag.findOne({ where: { id: req.body.tag_id } }).then(function (tag) {
      console.log(tag, obj);
      obj.addTags(tag).then(function () {
        res.status(200).send({ success: true });
      });
    });
  });
});

router.route('/remove_tag').post(function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var member, tag, resp;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _models2.default.Member.findOne({
              where: { id: req.body.member_id },
              include: [{
                model: _models2.default.Tag,
                as: 'tags',
                through: { attributes: [] }
              }]
            });

          case 2:
            member = _context2.sent;
            tag = member.tags.filter(function (tag) {
              return tag.id === req.body.tag_id;
            });
            _context2.next = 6;
            return member.removeTags(tag);

          case 6:
            resp = _context2.sent;

            res.status(200).send({ success: true });

          case 8:
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

router.route('/export').get(function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var members, csv;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            res.set('Content-Type', 'application/octet-stream');
            _context3.next = 3;
            return _models2.default.Member.findAll();

          case 3:
            members = _context3.sent;
            csv = (0, _helpers.formMemberCSV)(members);

            res.send(csv);

          case 6:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function (_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}());

module.exports = router;