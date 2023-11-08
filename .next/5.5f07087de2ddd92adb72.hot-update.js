webpackHotUpdate(5,{

/***/ 908:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(86);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(87);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _slicedToArray2 = __webpack_require__(102);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _style = __webpack_require__(909);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(910);

var _axios2 = _interopRequireDefault(_axios);

var _antd = __webpack_require__(939);

var _products = __webpack_require__(1692);

var _ModalAddProduct = __webpack_require__(1702);

var _ModalAddProduct2 = _interopRequireDefault(_ModalAddProduct);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined,
    _jsxFileName = "/Users/aulianza/Playground/interview/next-4/pages/products.js?entry";

var Search = _antd.Input.Search;

var ProductPage = function ProductPage() {
	var _useState = (0, _react.useState)(true),
	    _useState2 = (0, _slicedToArray3.default)(_useState, 2),
	    loading = _useState2[0],
	    setLoading = _useState2[1];

	var _useProductsStore = (0, _products.useProductsStore)(function (state) {
		return [state.products, state.setProducts];
	}),
	    _useProductsStore2 = (0, _slicedToArray3.default)(_useProductsStore, 2),
	    products = _useProductsStore2[0],
	    setProducts = _useProductsStore2[1];

	var _useState3 = (0, _react.useState)(false),
	    _useState4 = (0, _slicedToArray3.default)(_useState3, 2),
	    isShowAddModal = _useState4[0],
	    setShowAddModal = _useState4[1];

	var _useState5 = (0, _react.useState)(""),
	    _useState6 = (0, _slicedToArray3.default)(_useState5, 2),
	    search = _useState6[0],
	    setSearch = _useState6[1];

	var filteredProducts = products.filter(function (product) {
		return product.product_name.toLowerCase().includes(search.toLowerCase());
	});

	var handleFilter = function handleFilter(e) {
		return setSearch(e.target.value);
	};

	var handleShowModal = function handleShowModal() {
		return setShowAddModal(!isShowAddModal);
	};

	(0, _react.useEffect)(function () {
		var fetchProducts = function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				var response;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.prev = 0;
								_context.next = 3;
								return _axios2.default.get("http://localhost:8080/products");

							case 3:
								response = _context.sent;

								setProducts(response.data);
								setLoading(false);
								_context.next = 12;
								break;

							case 8:
								_context.prev = 8;
								_context.t0 = _context["catch"](0);

								console.error("aulianz ~ error fetching products:", _context.t0);
								setLoading(false);

							case 12:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, _this, [[0, 8]]);
			}));

			return function fetchProducts() {
				return _ref.apply(this, arguments);
			};
		}();

		fetchProducts();
	}, [setProducts]);

	var columns = [{
		title: "Product Name",
		dataIndex: "product_name",
		key: "product_name"
	}, {
		title: "Memory",
		dataIndex: "memory",
		key: "memory"
	}, {
		title: "Action",
		key: "action",
		render: function render(text, record) {
			return _react2.default.createElement("span", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 56
				}
			}, _react2.default.createElement(_antd.Button, { type: "primary", style: { marginRight: 16 }, __source: {
					fileName: _jsxFileName,
					lineNumber: 57
				}
			}, "Edit"), _react2.default.createElement(_antd.Button, { type: "primary", style: { marginRight: 16, background: "red" }, __source: {
					fileName: _jsxFileName,
					lineNumber: 60
				}
			}, "Delete"));
		}
	}];

	return _react2.default.createElement("div", {
		className: "jsx-1188520643" + " " + "container",
		__source: {
			fileName: _jsxFileName,
			lineNumber: 69
		}
	}, _react2.default.createElement("h1", {
		className: "jsx-1188520643",
		__source: {
			fileName: _jsxFileName,
			lineNumber: 70
		}
	}, "Product Page"), _react2.default.createElement("div", {
		style: {
			marginBottom: 16,
			display: "flex",
			justifyContent: "space-between"
		},
		className: "jsx-1188520643",
		__source: {
			fileName: _jsxFileName,
			lineNumber: 71
		}
	}, _react2.default.createElement("div", {
		className: "jsx-1188520643",
		__source: {
			fileName: _jsxFileName,
			lineNumber: 78
		}
	}, _react2.default.createElement(Search, {
		placeholder: "Search product",
		style: { width: 200 },
		onChange: handleFilter,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 79
		}
	})), _react2.default.createElement("div", {
		className: "jsx-1188520643",
		__source: {
			fileName: _jsxFileName,
			lineNumber: 85
		}
	}, _react2.default.createElement(_antd.Button, { type: "primary", onClick: handleShowModal, __source: {
			fileName: _jsxFileName,
			lineNumber: 86
		}
	}, "Add New Product"))), loading ? _react2.default.createElement("div", { style: { textAlign: "center", margin: "50px" }, className: "jsx-1188520643",
		__source: {
			fileName: _jsxFileName,
			lineNumber: 93
		}
	}, _react2.default.createElement(_antd.Spin, { size: "large", __source: {
			fileName: _jsxFileName,
			lineNumber: 94
		}
	})) : _react2.default.createElement(_antd.Table, { dataSource: filteredProducts, columns: columns, __source: {
			fileName: _jsxFileName,
			lineNumber: 97
		}
	}), isShowAddModal && _react2.default.createElement(_ModalAddProduct2.default, {
		isOpen: isShowAddModal,
		handleCancel: handleShowModal,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 101
		}
	}), _react2.default.createElement(_style2.default, {
		styleId: "1188520643",
		css: ".container.jsx-1188520643{padding:20px 30px;}h1.jsx-1188520643{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2R1Y3RzLmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJHSyxBQUd5QixBQUlBLGtCQUhuQixBQUlBIiwiZmlsZSI6InBhZ2VzL3Byb2R1Y3RzLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hdWxpYW56YS9QbGF5Z3JvdW5kL2ludGVydmlldy9uZXh0LTQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBUYWJsZSwgU3BpbiwgSW5wdXQsIEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyB1c2VQcm9kdWN0c1N0b3JlIH0gZnJvbSBcIi4uL3N0b3JlL3Byb2R1Y3RzXCI7XG5pbXBvcnQgTW9kYWxBZGRQcm9kdWN0IGZyb20gXCIuLi9jb21wb25lbnRzL01vZGFsQWRkUHJvZHVjdFwiO1xuXG5jb25zdCB7IFNlYXJjaCB9ID0gSW5wdXQ7XG5cbmNvbnN0IFByb2R1Y3RQYWdlID0gKCkgPT4ge1xuXHRjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblx0Y29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VQcm9kdWN0c1N0b3JlKChzdGF0ZSkgPT4gW1xuXHRcdHN0YXRlLnByb2R1Y3RzLFxuXHRcdHN0YXRlLnNldFByb2R1Y3RzLFxuXHRdKTtcblx0Y29uc3QgW2lzU2hvd0FkZE1vZGFsLCBzZXRTaG93QWRkTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XG5cblx0Y29uc3QgZmlsdGVyZWRQcm9kdWN0cyA9IHByb2R1Y3RzLmZpbHRlcigocHJvZHVjdCkgPT5cblx0XHRwcm9kdWN0LnByb2R1Y3RfbmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKVxuXHQpO1xuXG5cdGNvbnN0IGhhbmRsZUZpbHRlciA9IChlKSA9PiBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpO1xuXG5cdGNvbnN0IGhhbmRsZVNob3dNb2RhbCA9ICgpID0+IHNldFNob3dBZGRNb2RhbCghaXNTaG93QWRkTW9kYWwpO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgZmV0Y2hQcm9kdWN0cyA9IGFzeW5jICgpID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3Byb2R1Y3RzXCIpO1xuXHRcdFx0XHRzZXRQcm9kdWN0cyhyZXNwb25zZS5kYXRhKTtcblx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwiYXVsaWFueiB+IGVycm9yIGZldGNoaW5nIHByb2R1Y3RzOlwiLCBlcnJvcik7XG5cdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRmZXRjaFByb2R1Y3RzKCk7XG5cdH0sIFtzZXRQcm9kdWN0c10pO1xuXG5cdGNvbnN0IGNvbHVtbnMgPSBbXG5cdFx0e1xuXHRcdFx0dGl0bGU6IFwiUHJvZHVjdCBOYW1lXCIsXG5cdFx0XHRkYXRhSW5kZXg6IFwicHJvZHVjdF9uYW1lXCIsXG5cdFx0XHRrZXk6IFwicHJvZHVjdF9uYW1lXCIsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0aXRsZTogXCJNZW1vcnlcIixcblx0XHRcdGRhdGFJbmRleDogXCJtZW1vcnlcIixcblx0XHRcdGtleTogXCJtZW1vcnlcIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRpdGxlOiBcIkFjdGlvblwiLFxuXHRcdFx0a2V5OiBcImFjdGlvblwiLFxuXHRcdFx0cmVuZGVyOiAodGV4dCwgcmVjb3JkKSA9PiAoXG5cdFx0XHRcdDxzcGFuPlxuXHRcdFx0XHRcdDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzdHlsZT17eyBtYXJnaW5SaWdodDogMTYgfX0+XG5cdFx0XHRcdFx0XHRFZGl0XG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0PEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAxNiwgYmFja2dyb3VuZDogXCJyZWRcIiB9fT5cblx0XHRcdFx0XHRcdERlbGV0ZVxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHQpLFxuXHRcdH0sXG5cdF07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0PGgxPlByb2R1Y3QgUGFnZTwvaDE+XG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0bWFyZ2luQm90dG9tOiAxNixcblx0XHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG5cdFx0XHRcdH19XG5cdFx0XHQ+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PFNlYXJjaFxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJTZWFyY2ggcHJvZHVjdFwiXG5cdFx0XHRcdFx0XHRzdHlsZT17eyB3aWR0aDogMjAwIH19XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlRmlsdGVyfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVTaG93TW9kYWx9PlxuXHRcdFx0XHRcdFx0QWRkIE5ldyBQcm9kdWN0XG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdHtsb2FkaW5nID8gKFxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWFyZ2luOiBcIjUwcHhcIiB9fT5cblx0XHRcdFx0XHQ8U3BpbiBzaXplPVwibGFyZ2VcIiAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCkgOiAoXG5cdFx0XHRcdDxUYWJsZSBkYXRhU291cmNlPXtmaWx0ZXJlZFByb2R1Y3RzfSBjb2x1bW5zPXtjb2x1bW5zfSAvPlxuXHRcdFx0KX1cblxuXHRcdFx0e2lzU2hvd0FkZE1vZGFsICYmIChcblx0XHRcdFx0PE1vZGFsQWRkUHJvZHVjdFxuXHRcdFx0XHRcdGlzT3Blbj17aXNTaG93QWRkTW9kYWx9XG5cdFx0XHRcdFx0aGFuZGxlQ2FuY2VsPXtoYW5kbGVTaG93TW9kYWx9XG5cdFx0XHRcdC8+XG5cdFx0XHQpfVxuXG5cdFx0XHQ8c3R5bGUganN4PlxuXHRcdFx0XHR7YFxuXHRcdFx0XHRcdC5jb250YWluZXIge1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMjBweCAzMHB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGgxIHtcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9XG5cdFx0XHQ8L3N0eWxlPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdFBhZ2U7XG4iXX0= */\n/*@ sourceURL=pages/products.js?entry */"
	}));
};

exports.default = ProductPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2R1Y3RzLmpzIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJUYWJsZSIsIlNwaW4iLCJJbnB1dCIsIkJ1dHRvbiIsInVzZVByb2R1Y3RzU3RvcmUiLCJNb2RhbEFkZFByb2R1Y3QiLCJTZWFyY2giLCJQcm9kdWN0UGFnZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic3RhdGUiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwiaXNTaG93QWRkTW9kYWwiLCJzZXRTaG93QWRkTW9kYWwiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJmaWx0ZXJlZFByb2R1Y3RzIiwiZmlsdGVyIiwicHJvZHVjdCIsInByb2R1Y3RfbmFtZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJoYW5kbGVGaWx0ZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTaG93TW9kYWwiLCJmZXRjaFByb2R1Y3RzIiwiZ2V0IiwicmVzcG9uc2UiLCJkYXRhIiwiY29uc29sZSIsImVycm9yIiwiY29sdW1ucyIsInRpdGxlIiwiZGF0YUluZGV4Iiwia2V5IiwicmVuZGVyIiwidGV4dCIsInJlY29yZCIsIm1hcmdpblJpZ2h0IiwiYmFja2dyb3VuZCIsIm1hcmdpbkJvdHRvbSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIndpZHRoIiwidGV4dEFsaWduIiwibWFyZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUyxBQUFVOzs7O0FBQ25CLEFBQU87Ozs7QUFDUCxBQUFTLEFBQU8sQUFBTSxBQUFPOztBQUM3QixBQUFTLEFBQXdCOztBQUNqQyxBQUFPLEFBQXFCOzs7Ozs7Ozs7SSxBQUVwQixTLEFBQVcsWSxBQUFYOztBQUVSLElBQU0sY0FBYyxTQUFkLEFBQWMsY0FBTTtpQkFDSyxxQkFETCxBQUNLLEFBQVM7MERBRGQ7S0FBQSxBQUNsQixxQkFEa0I7S0FBQSxBQUNULHdCQURTOzt5REFFd0IsVUFBQSxBQUFDLE9BQUQ7U0FBVyxDQUMzRCxNQUQyRCxBQUNyRCxVQUNOLE1BRmdELEFBQVcsQUFFckQ7QUFKa0IsQUFFTyxFQUFBOzBFQUZQO0tBQUEsQUFFbEIsOEJBRmtCO0tBQUEsQUFFUixpQ0FGUTs7a0JBTWlCLHFCQU5qQixBQU1pQixBQUFTOzJEQU4xQjtLQUFBLEFBTWxCLDRCQU5rQjtLQUFBLEFBTUYsNkJBTkU7O2tCQU9HLHFCQVBILEFBT0csQUFBUzsyREFQWjtLQUFBLEFBT2xCLG9CQVBrQjtLQUFBLEFBT1YsdUJBRWY7O0tBQU0sNEJBQW1CLEFBQVMsT0FBTyxVQUFBLEFBQUMsU0FBRDtTQUN4QyxRQUFBLEFBQVEsYUFBUixBQUFxQixjQUFyQixBQUFtQyxTQUFTLE9BREosQUFDeEMsQUFBNEMsQUFBTztBQURwRCxBQUF5QixBQUl6QixFQUp5Qjs7S0FJbkIsZUFBZSxTQUFmLEFBQWUsYUFBQSxBQUFDLEdBQUQ7U0FBTyxVQUFVLEVBQUEsQUFBRSxPQUFuQixBQUFPLEFBQW1CO0FBQS9DLEFBRUE7O0tBQU0sa0JBQWtCLFNBQWxCLEFBQWtCLGtCQUFBO1NBQU0sZ0JBQWdCLENBQXRCLEFBQU0sQUFBaUI7QUFBL0MsQUFFQTs7dUJBQVUsWUFBTSxBQUNmO01BQU0sNEJBQUE7dUZBQWdCLG1CQUFBO1FBQUE7a0VBQUE7ZUFBQTt1Q0FBQTtZQUFBO3dCQUFBO3dCQUFBO2VBRUcsZ0JBQUEsQUFBTSxJQUZULEFBRUcsQUFBVTs7WUFBM0I7QUFGYyw0QkFHcEI7O29CQUFZLFNBQVosQUFBcUIsQUFDckI7bUJBSm9CLEFBSXBCLEFBQVc7d0JBSlM7QUFBQTs7WUFBQTt3QkFBQTt3Q0FNcEI7O2dCQUFBLEFBQVEsTUFBUixBQUFjLCtDQUNkO21CQVBvQixBQU9wQixBQUFXOztZQVBTO1lBQUE7d0JBQUE7O0FBQUE7NEJBQUE7QUFBaEI7O21DQUFBOzRCQUFBO0FBQUE7QUFBTixBQVdBOztBQUNBO0FBYkQsSUFhRyxDQWJILEFBYUcsQUFBQyxBQUVKOztLQUFNO1NBQ0wsQUFDUSxBQUNQO2FBRkQsQUFFWSxBQUNYO09BSmMsQUFDZixBQUdNO0FBSE4sQUFDQyxFQUZjO1NBTWYsQUFDUSxBQUNQO2FBRkQsQUFFWSxBQUNYO09BVGMsQUFNZixBQUdNO0FBSE4sQUFDQztTQUlELEFBQ1EsQUFDUDtPQUZELEFBRU0sQUFDTDtVQUFRLGdCQUFBLEFBQUMsTUFBRCxBQUFPLFFBQVA7MEJBQ1AsY0FBQTs7ZUFBQTtpQkFBQSxBQUNDO0FBREQ7QUFBQSxJQUFBLGtCQUNDLEFBQUMsOEJBQU8sTUFBUixBQUFhLFdBQVUsT0FBTyxFQUFFLGFBQWhDLEFBQThCLEFBQWU7ZUFBN0M7aUJBQUE7QUFBQTtNQURELEFBQ0MsQUFHQSx5QkFBQSxBQUFDLDhCQUFPLE1BQVIsQUFBYSxXQUFVLE9BQU8sRUFBRSxhQUFGLEFBQWUsSUFBSSxZQUFqRCxBQUE4QixBQUErQjtlQUE3RDtpQkFBQTtBQUFBO01BTE0sQUFDUCxBQUlDO0FBbkJKLEFBQWdCLEFBV2YsQUFnQkQ7QUFoQkMsQUFDQzs7d0JBZ0JELGNBQUE7c0NBQUEsQUFBZTs7YUFBZjtlQUFBLEFBQ0M7QUFERDtBQUFBLEVBQUEsa0JBQ0MsY0FBQTthQUFBOzthQUFBO2VBQUE7QUFBQTtBQUFBLElBREQsQUFDQyxBQUNBLGlDQUFBLGNBQUE7O2lCQUNRLEFBQ1EsQUFDZDtZQUZNLEFBRUcsQUFDVDttQkFKRixBQUNRLEFBR1U7QUFIVixBQUNOO2FBRkY7O2FBQUE7ZUFBQSxBQU9DO0FBUEQ7QUFDQyxvQkFNQSxjQUFBO2FBQUE7O2FBQUE7ZUFBQSxBQUNDO0FBREQ7QUFBQSxrQ0FDQyxBQUFDO2VBQUQsQUFDYSxBQUNaO1NBQU8sRUFBRSxPQUZWLEFBRVEsQUFBUyxBQUNoQjtZQUhELEFBR1c7O2FBSFg7ZUFSRixBQU9DLEFBQ0MsQUFNRDtBQU5DO0FBQ0Msc0JBS0YsY0FBQTthQUFBOzthQUFBO2VBQUEsQUFDQztBQUREO0FBQUEsb0JBQ0MsQUFBQyw4QkFBTyxNQUFSLEFBQWEsV0FBVSxTQUF2QixBQUFnQzthQUFoQztlQUFBO0FBQUE7SUFqQkgsQUFFQyxBQWNDLEFBQ0MsQUFNRCxnREFDQSxjQUFBLFNBQUssT0FBTyxFQUFFLFdBQUYsQUFBYSxVQUFVLFFBQW5DLEFBQVksQUFBK0IscUJBQTNDOzthQUFBO2VBQUEsQUFDQztBQUREO0VBQUEsa0JBQ0MsQUFBQyw0QkFBSyxNQUFOLEFBQVc7YUFBWDtlQUZELEFBQ0EsQUFDQztBQUFBO3VCQUdELEFBQUMsNkJBQU0sWUFBUCxBQUFtQixrQkFBa0IsU0FBckMsQUFBOEM7YUFBOUM7ZUE1QkYsQUE0QkUsQUFHQTtBQUhBO0VBQUEscUNBSUEsQUFBQztVQUFELEFBQ1MsQUFDUjtnQkFGRCxBQUVlOzthQUZmO2VBaENGLEFBZ0NFO0FBQUE7QUFDQyxFQUREO1dBaENGO09BREQsQUFDQyxBQW1ERDtBQW5EQztBQTVERixBQWlIQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJwcm9kdWN0cy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYXVsaWFuemEvUGxheWdyb3VuZC9pbnRlcnZpZXcvbmV4dC00In0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/aulianza/Playground/interview/next-4/pages/products.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/aulianza/Playground/interview/next-4/pages/products.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(98)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/products")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS41ZjA3MDg3ZGUyZGRkOTJhZGI3Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvcHJvZHVjdHMuanM/N2Q5N2M1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBUYWJsZSwgU3BpbiwgSW5wdXQsIEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyB1c2VQcm9kdWN0c1N0b3JlIH0gZnJvbSBcIi4uL3N0b3JlL3Byb2R1Y3RzXCI7XG5pbXBvcnQgTW9kYWxBZGRQcm9kdWN0IGZyb20gXCIuLi9jb21wb25lbnRzL01vZGFsQWRkUHJvZHVjdFwiO1xuXG5jb25zdCB7IFNlYXJjaCB9ID0gSW5wdXQ7XG5cbmNvbnN0IFByb2R1Y3RQYWdlID0gKCkgPT4ge1xuXHRjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblx0Y29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VQcm9kdWN0c1N0b3JlKChzdGF0ZSkgPT4gW1xuXHRcdHN0YXRlLnByb2R1Y3RzLFxuXHRcdHN0YXRlLnNldFByb2R1Y3RzLFxuXHRdKTtcblx0Y29uc3QgW2lzU2hvd0FkZE1vZGFsLCBzZXRTaG93QWRkTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XG5cblx0Y29uc3QgZmlsdGVyZWRQcm9kdWN0cyA9IHByb2R1Y3RzLmZpbHRlcigocHJvZHVjdCkgPT5cblx0XHRwcm9kdWN0LnByb2R1Y3RfbmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKVxuXHQpO1xuXG5cdGNvbnN0IGhhbmRsZUZpbHRlciA9IChlKSA9PiBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpO1xuXG5cdGNvbnN0IGhhbmRsZVNob3dNb2RhbCA9ICgpID0+IHNldFNob3dBZGRNb2RhbCghaXNTaG93QWRkTW9kYWwpO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgZmV0Y2hQcm9kdWN0cyA9IGFzeW5jICgpID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3Byb2R1Y3RzXCIpO1xuXHRcdFx0XHRzZXRQcm9kdWN0cyhyZXNwb25zZS5kYXRhKTtcblx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwiYXVsaWFueiB+IGVycm9yIGZldGNoaW5nIHByb2R1Y3RzOlwiLCBlcnJvcik7XG5cdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRmZXRjaFByb2R1Y3RzKCk7XG5cdH0sIFtzZXRQcm9kdWN0c10pO1xuXG5cdGNvbnN0IGNvbHVtbnMgPSBbXG5cdFx0e1xuXHRcdFx0dGl0bGU6IFwiUHJvZHVjdCBOYW1lXCIsXG5cdFx0XHRkYXRhSW5kZXg6IFwicHJvZHVjdF9uYW1lXCIsXG5cdFx0XHRrZXk6IFwicHJvZHVjdF9uYW1lXCIsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0aXRsZTogXCJNZW1vcnlcIixcblx0XHRcdGRhdGFJbmRleDogXCJtZW1vcnlcIixcblx0XHRcdGtleTogXCJtZW1vcnlcIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRpdGxlOiBcIkFjdGlvblwiLFxuXHRcdFx0a2V5OiBcImFjdGlvblwiLFxuXHRcdFx0cmVuZGVyOiAodGV4dCwgcmVjb3JkKSA9PiAoXG5cdFx0XHRcdDxzcGFuPlxuXHRcdFx0XHRcdDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzdHlsZT17eyBtYXJnaW5SaWdodDogMTYgfX0+XG5cdFx0XHRcdFx0XHRFZGl0XG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0PEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAxNiwgYmFja2dyb3VuZDogXCJyZWRcIiB9fT5cblx0XHRcdFx0XHRcdERlbGV0ZVxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHQpLFxuXHRcdH0sXG5cdF07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0PGgxPlByb2R1Y3QgUGFnZTwvaDE+XG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0bWFyZ2luQm90dG9tOiAxNixcblx0XHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG5cdFx0XHRcdH19XG5cdFx0XHQ+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PFNlYXJjaFxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJTZWFyY2ggcHJvZHVjdFwiXG5cdFx0XHRcdFx0XHRzdHlsZT17eyB3aWR0aDogMjAwIH19XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlRmlsdGVyfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVTaG93TW9kYWx9PlxuXHRcdFx0XHRcdFx0QWRkIE5ldyBQcm9kdWN0XG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdHtsb2FkaW5nID8gKFxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWFyZ2luOiBcIjUwcHhcIiB9fT5cblx0XHRcdFx0XHQ8U3BpbiBzaXplPVwibGFyZ2VcIiAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCkgOiAoXG5cdFx0XHRcdDxUYWJsZSBkYXRhU291cmNlPXtmaWx0ZXJlZFByb2R1Y3RzfSBjb2x1bW5zPXtjb2x1bW5zfSAvPlxuXHRcdFx0KX1cblxuXHRcdFx0e2lzU2hvd0FkZE1vZGFsICYmIChcblx0XHRcdFx0PE1vZGFsQWRkUHJvZHVjdFxuXHRcdFx0XHRcdGlzT3Blbj17aXNTaG93QWRkTW9kYWx9XG5cdFx0XHRcdFx0aGFuZGxlQ2FuY2VsPXtoYW5kbGVTaG93TW9kYWx9XG5cdFx0XHRcdC8+XG5cdFx0XHQpfVxuXG5cdFx0XHQ8c3R5bGUganN4PlxuXHRcdFx0XHR7YFxuXHRcdFx0XHRcdC5jb250YWluZXIge1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMjBweCAzMHB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGgxIHtcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9XG5cdFx0XHQ8L3N0eWxlPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdFBhZ2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9wcm9kdWN0cy5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7OztBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBR0E7QUFOQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBUEE7QUFPQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUZBO0FBQ0E7QUFFQTtBQUNBO0FBSkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFSQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFXQTtBQUNBO0FBQUE7QUFiQTtBQUNBO0FBY0E7QUFHQTtBQUNBO0FBQUE7QUFGQTtBQU1BO0FBQ0E7QUFBQTtBQUZBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFmQTtBQUNBO0FBZUE7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUlBO0FBQ0E7QUFBQTtBQUZBO0FBRkE7O0FBQUE7QUFPQTtBQVBBO0FBQ0E7QUFNQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQUE7QUFDQTs7QUFIQTtBQU1BO0FBTkE7QUFDQTtBQUtBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBTUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBR0E7QUFIQTtBQUFBO0FBTUE7QUFBQTs7QUFGQTtBQUFBO0FBQUE7QUFDQTtBQWpDQTtBQW1EQTtBQW5EQTtBQXFEQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==