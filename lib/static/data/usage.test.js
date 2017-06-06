'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chai = require('chai');

var _polyton = require('../../src/polyton');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

describe('Testing README examples', function () {
  it('Usage example', function () {
    var _planes$get, _planes$get2, _planes$get3;

    var PlaneEquation = function () {
      // Type for all the singletons within the Polyton
      function PlaneEquation(a, b, c, d) {
        _classCallCheck(this, PlaneEquation);

        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
      }

      _createClass(PlaneEquation, [{
        key: 'hasPoint',
        value: function hasPoint(x, y, z) {
          return Math.abs(this.a * x + this.b * y + this.c * z + this.d) < 1e-10;
        }
      }]);

      return PlaneEquation;
    }();

    var Polyton = (0, _polyton.PolytonFactory)(PlaneEquation, ['literal', 'literal', 'literal', 'literal']); // Create a Polyton type as list of PlaneEquations
    // initialized from lists of literals

    var planes = Polyton( // Instantiate an actual polyton
    [0, 0, 1, 0], // xOy
    [0, 1, 0, 0], // xOz
    [1, 0, 0, 0] // yOz
    );
    var Origin = [0, 0, 0];

    // Now you can recall plane equations using only the arguments though they
    // are not in scope

    (0, _chai.expect)((_planes$get = planes.get(1, 0, 0, 0)).hasPoint.apply(_planes$get, Origin)).to.be.true;
    (0, _chai.expect)((_planes$get2 = planes.get(0, 1, 0, 0)).hasPoint.apply(_planes$get2, Origin)).to.be.true;
    (0, _chai.expect)((_planes$get3 = planes.get(0, 0, 1, 0)).hasPoint.apply(_planes$get3, Origin)).to.be.true;
    (0, _chai.expect)(function () {
      var _planes$get4;

      return (_planes$get4 = planes.get(1, 0, 0, 3)).hasPoint.apply(_planes$get4, Origin);
    }).to.throw(TypeError, 'Cannot read property \'hasPoint\' of undefined');

    (0, _chai.expect)(Polyton.get([0, 0, 1, 0], // xOy
    [0, 1, 0, 0], // xOz
    [1, 0, 0, 0] // yOz
    )).to.equal(planes);
    (0, _chai.expect)(Polyton.get([1, 0, 0, 0], // yOz
    [0, 1, 0, 0], // xOz
    [0, 0, 1, 0] // xOy
    )).not.to.equal(planes);
  });
});