'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Translator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var base = process.cwd();
var rel = _path2.default.relative(base, 'src/static/antlr4/parsers');

var _require = require(_path2.default.join(base, rel, 'TestudocListener')),
    TestudocListener = _require.TestudocListener;

var Translator = exports.Translator = function (_TestudocListener) {
  _inherits(Translator, _TestudocListener);

  function Translator() {
    _classCallCheck(this, Translator);

    return _possibleConstructorReturn(this, (Translator.__proto__ || Object.getPrototypeOf(Translator)).apply(this, arguments));
  }

  _createClass(Translator, [{
    key: 'enterFile',
    value: function enterFile() {
      process.stdout.write('hello');
    }
  }, {
    key: 'exitFile',
    value: function exitFile() {
      process.stdout.write('bye');
    }
  }]);

  return Translator;
}(TestudocListener);