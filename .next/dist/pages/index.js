"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _slicedToArray2 = require("babel-runtime/helpers/slicedToArray");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

var _jsCookie = require("js-cookie");

var _jsCookie2 = _interopRequireDefault(_jsCookie);

var _index = require("next/dist/lib/router/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined,
    _jsxFileName = "/Users/aulianza/Playground/interview/next-4/pages/index.js?entry";

var LoginPage = function LoginPage() {
	var _useState = (0, _react.useState)(""),
	    _useState2 = (0, _slicedToArray3.default)(_useState, 2),
	    email = _useState2[0],
	    setEmail = _useState2[1];

	var handleSubmit = function () {
		var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
			var response, token;
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.prev = 0;
							_context.next = 3;
							return _axios2.default.get("https://femaledaily-users.loca.lt/users?email=" + email);

						case 3:
							response = _context.sent;
							token = response.data[0].token;

							if (token) {
								_jsCookie2.default.set("token", token);
								_index2.default.push("/products");
							}
							_context.next = 11;
							break;

						case 8:
							_context.prev = 8;
							_context.t0 = _context["catch"](0);

							console.error("aulianza ~ err:", _context.t0);

						case 11:
						case "end":
							return _context.stop();
					}
				}
			}, _callee, _this, [[0, 8]]);
		}));

		return function handleSubmit() {
			return _ref.apply(this, arguments);
		};
	}();

	return _react2.default.createElement("div", {
		className: "jsx-4154385411" + " " + "container",
		__source: {
			fileName: _jsxFileName,
			lineNumber: 25
		}
	}, _react2.default.createElement("div", {
		className: "jsx-4154385411" + " " + "form-container",
		__source: {
			fileName: _jsxFileName,
			lineNumber: 26
		}
	}, _react2.default.createElement("label", { htmlFor: "email", className: "jsx-4154385411",
		__source: {
			fileName: _jsxFileName,
			lineNumber: 27
		}
	}, "Email"), _react2.default.createElement("input", {
		type: "text",
		value: email,
		onChange: function onChange(e) {
			return setEmail(e.target.value);
		},
		className: "jsx-4154385411",
		__source: {
			fileName: _jsxFileName,
			lineNumber: 28
		}
	}), _react2.default.createElement("button", { type: "button", onClick: handleSubmit, className: "jsx-4154385411",
		__source: {
			fileName: _jsxFileName,
			lineNumber: 33
		}
	}, "Login")), _react2.default.createElement(_style2.default, {
		styleId: "4154385411",
		css: ".container.jsx-4154385411{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100vh;}.form-container.jsx-4154385411{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:1px solid #ccc;padding:50px;border-radius:12px;}input.jsx-4154385411{padding:10px;margin:10px 0;}button.jsx-4154385411{padding:10px 20px;background-color:#4caf50;color:#fff;border:none;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDZSxBQTJCbUIsQUFNQSxBQVFBLEFBSUssYUFISixLQUlXLFNBSDFCLGdCQUlZLFdBQ0MsWUFDRyxRQXJCUSxBQU1ELE9BZ0J2Qix1RUFmb0IscUJBTkEsd0VBT0cscUJBTlQsQ0FPQSxZQU5kLENBT29CLG1CQUNwQiIsImZpbGUiOiJwYWdlcy9pbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYXVsaWFuemEvUGxheWdyb3VuZC9pbnRlcnZpZXcvbmV4dC00Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBMb2dpblBhZ2UgPSAoKSA9PiB7XG5cdGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG5cblx0Y29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcblx0XHRcdFx0YGh0dHBzOi8vZmVtYWxlZGFpbHktdXNlcnMubG9jYS5sdC91c2Vycz9lbWFpbD0ke2VtYWlsfWBcblx0XHRcdCk7XG5cdFx0XHRjb25zdCB0b2tlbiA9IHJlc3BvbnNlLmRhdGFbMF0udG9rZW47XG5cdFx0XHRpZiAodG9rZW4pIHtcblx0XHRcdFx0Q29va2llcy5zZXQoXCJ0b2tlblwiLCB0b2tlbik7XG5cdFx0XHRcdFJvdXRlci5wdXNoKFwiL3Byb2R1Y3RzXCIpO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKFwiYXVsaWFuemEgfiBlcnI6XCIsIGVycm9yKTtcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0dmFsdWU9e2VtYWlsfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlxuXHRcdFx0XHRcdExvZ2luXG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0LmNvbnRhaW5lciB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdGhlaWdodDogMTAwdmg7XG5cdFx0XHRcdH1cblx0XHRcdFx0LmZvcm0tY29udGFpbmVyIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDUwcHg7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTJweDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpbnB1dCB7XG5cdFx0XHRcdFx0cGFkZGluZzogMTBweDtcblx0XHRcdFx0XHRtYXJnaW46IDEwcHggMDtcblx0XHRcdFx0fVxuXHRcdFx0XHRidXR0b24ge1xuXHRcdFx0XHRcdHBhZGRpbmc6IDEwcHggMjBweDtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xuXHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luUGFnZTtcbiJdfQ== */\n/*@ sourceURL=pages/index.js?entry */"
	}));
};

exports.default = LoginPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIkNvb2tpZXMiLCJSb3V0ZXIiLCJMb2dpblBhZ2UiLCJlbWFpbCIsInNldEVtYWlsIiwiaGFuZGxlU3VibWl0IiwiZ2V0IiwicmVzcG9uc2UiLCJ0b2tlbiIsImRhdGEiLCJzZXQiLCJwdXNoIiwiY29uc29sZSIsImVycm9yIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxZQUFZLFNBQVosQUFBWSxZQUFNO2lCQUNHLHFCQURILEFBQ0csQUFBUzswREFEWjtLQUFBLEFBQ2hCLG1CQURnQjtLQUFBLEFBQ1Qsc0JBRWQ7O0tBQU0sMkJBQUE7c0ZBQWUsbUJBQUE7aUJBQUE7aUVBQUE7Y0FBQTtzQ0FBQTtXQUFBO3VCQUFBO3VCQUFBO2NBRUksZ0JBQUEsQUFBTSx1REFGVixBQUVJLEFBQzJCOztXQUQ1QztBQUZhLDJCQUtiO0FBTGEsZUFLTCxTQUFBLEFBQVMsS0FBVCxBQUFjLEdBTFQsQUFLWSxBQUMvQjs7V0FBQSxBQUFJLE9BQU8sQUFDVjsyQkFBQSxBQUFRLElBQVIsQUFBWSxTQUFaLEFBQXFCLEFBQ3JCO3dCQUFBLEFBQU8sS0FBUCxBQUFZLEFBQ1o7QUFUa0I7dUJBQUE7QUFBQTs7V0FBQTt1QkFBQTt1Q0FXbkI7O2VBQUEsQUFBUSxNQUFSLEFBQWMsNEJBWEs7O1dBQUE7V0FBQTt1QkFBQTs7QUFBQTsyQkFBQTtBQUFmOztpQ0FBQTsyQkFBQTtBQUFBO0FBQU4sQUFlQTs7d0JBQ0MsY0FBQTtzQ0FBQSxBQUFlOzthQUFmO2VBQUEsQUFDQztBQUREO0FBQUEsRUFBQSxrQkFDQyxjQUFBO3NDQUFBLEFBQWU7O2FBQWY7ZUFBQSxBQUNDO0FBREQ7QUFBQSxvQkFDQyxjQUFBLFdBQU8sU0FBUCxBQUFlLG9CQUFmOzthQUFBO2VBQUE7QUFBQTtJQURELEFBQ0MsQUFDQTtRQUFBLEFBQ00sQUFDTDtTQUZELEFBRVEsQUFDUDtZQUFVLGtCQUFBLEFBQUMsR0FBRDtVQUFPLFNBQVMsRUFBQSxBQUFFLE9BQWxCLEFBQU8sQUFBa0I7QUFIcEM7YUFBQTs7YUFBQTtlQUZELEFBRUMsQUFLQTtBQUxBO0FBQ0MscUJBSUQsY0FBQSxZQUFRLE1BQVIsQUFBYSxVQUFTLFNBQXRCLEFBQStCLHlCQUEvQjs7YUFBQTtlQUFBO0FBQUE7SUFSRixBQUNDLEFBT0M7V0FSRjtPQURELEFBQ0MsQUEwQ0Q7QUExQ0M7QUFuQkYsQUErREE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2F1bGlhbnphL1BsYXlncm91bmQvaW50ZXJ2aWV3L25leHQtNCJ9