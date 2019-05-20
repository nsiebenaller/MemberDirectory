'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

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
                through: {
                  attributes: []
                }
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

module.exports = router;