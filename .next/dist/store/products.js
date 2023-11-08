"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.useProductsStore = undefined;

var _zustand = require("zustand");

var _zustand2 = _interopRequireDefault(_zustand);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useProductsStore = exports.useProductsStore = (0, _zustand2.default)(function (set) {
	return {
		products: [],
		setProducts: function setProducts(newProducts) {
			return set({ products: newProducts });
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlL3Byb2R1Y3RzLmpzIl0sIm5hbWVzIjpbImNyZWF0ZSIsInVzZVByb2R1Y3RzU3RvcmUiLCJzZXQiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwibmV3UHJvZHVjdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxBQUFPLEFBRVA7Ozs7OztBQUFPLElBQU0scUVBQTBCLFVBQUEsQUFBQyxLQUFEOztZQUFVLEFBQ3RDLEFBQ1Y7ZUFBYSxxQkFBQSxBQUFDLGFBQUQ7VUFBaUIsSUFBSSxFQUFFLFVBQXZCLEFBQWlCLEFBQUksQUFBWTtBQUZSLEFBQVU7QUFBQSxBQUNoRDtBQURNLEFBQXlCLENBQUEiLCJmaWxlIjoicHJvZHVjdHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2F1bGlhbnphL1BsYXlncm91bmQvaW50ZXJ2aWV3L25leHQtNCJ9