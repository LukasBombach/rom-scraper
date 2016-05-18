/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*******************!*\
  !*** multi index ***!
  \*******************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! babel-polyfill */1);
	module.exports = __webpack_require__(/*! ./src/index.js */2);


/***/ },
/* 1 */
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/***/ function(module, exports) {

	module.exports = require("babel-polyfill");

/***/ },
/* 2 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _scraper = __webpack_require__(/*! ./scraper */ 3);
	
	var _scraper2 = _interopRequireDefault(_scraper);
	
	var _thegamesdb = __webpack_require__(/*! ./scrapers/thegamesdb */ 4);
	
	var _thegamesdb2 = _interopRequireDefault(_thegamesdb);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var name = 'Secret of Mana';
	var platform = _scraper2.default.PLATFORMS.SNES;
	
	_thegamesdb2.default.getGame({ name: name, platform: platform }).then(function (game) {
	  console.log(game); // eslint-disable-line no-console
	});

/***/ },
/* 3 */
/*!************************!*\
  !*** ./src/scraper.js ***!
  \************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Scraper = function () {
	  function Scraper() {
	    _classCallCheck(this, Scraper);
	  }
	
	  _createClass(Scraper, null, [{
	    key: 'PLATFORMS',
	    get: function get() {
	      return {
	        SNES: 'SNES'
	      };
	    }
	  }]);
	
	  return Scraper;
	}();
	
	exports.default = Scraper;

/***/ },
/* 4 */
/*!************************************!*\
  !*** ./src/scrapers/thegamesdb.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _xml2json = __webpack_require__(/*! xml2json */ 5);
	
	var _xml2json2 = _interopRequireDefault(_xml2json);
	
	var _nodeFetch = __webpack_require__(/*! node-fetch */ 6);
	
	var _nodeFetch2 = _interopRequireDefault(_nodeFetch);
	
	var _queryString = __webpack_require__(/*! query-string */ 7);
	
	var _queryString2 = _interopRequireDefault(_queryString);
	
	var _scraper = __webpack_require__(/*! ../scraper */ 3);
	
	var _scraper2 = _interopRequireDefault(_scraper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TheGamesDb = function (_Scraper) {
	  _inherits(TheGamesDb, _Scraper);
	
	  function TheGamesDb() {
	    _classCallCheck(this, TheGamesDb);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(TheGamesDb).apply(this, arguments));
	  }
	
	  _createClass(TheGamesDb, null, [{
	    key: '_platform',
	
	
	    /**
	     *
	     * @param {string} platform
	     * @return {string}
	     * @private
	     */
	    value: function _platform(platform) {
	      var map = _defineProperty({}, _scraper2.default.PLATFORMS.SNES, 'Super Nintendo (SNES)');
	      return map[platform];
	    }
	
	    /**
	     *
	     * @param method
	     * @param params
	     * @returns {Promise}
	     * @private
	     */
	
	  }, {
	    key: '_api',
	    value: function _api(method) {
	      var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	      var options = { method: 'GET' };
	      var url = '' + TheGamesDb._BASE_URL + method + '.php?' + _queryString2.default.stringify(params);
	      console.info('fetching', url);
	      return (0, _nodeFetch2.default)(url, options);
	    }
	
	    /**
	     *
	     * @param {Response} res
	     * @returns {Promise}
	     * @private
	     */
	
	  }, {
	    key: '_body',
	    value: function _body(res) {
	      return res.text().then(function (xml) {
	        return _xml2json2.default.toJson(xml);
	      }).then(function (jsonString) {
	        return JSON.parse(jsonString);
	      }).then(function (json) {
	        return json.Data.Game;
	      });
	    }
	
	    /**
	     *
	     * @param name
	     * @param platform
	     * @returns {Promise.<Array>}
	     */
	
	  }, {
	    key: 'search',
	    value: function search(_ref) {
	      var name = _ref.name;
	      var platform = _ref.platform;
	
	      var _platform = TheGamesDb._platform(platform);
	      var request = TheGamesDb._api('GetGamesList', { name: name, platform: _platform });
	      return request.then(TheGamesDb._body);
	    }
	
	    /**
	     *
	     * @param name
	     * @param platform
	     * @returns {Promise.<Object>}
	     */
	
	  }, {
	    key: 'getGame',
	    value: function getGame(_ref2) {
	      var name = _ref2.name;
	      var platform = _ref2.platform;
	
	      return TheGamesDb.search({ name: name, platform: platform }).then(function (games) {
	        return TheGamesDb._api('GetGame', { id: games[0].id });
	      }).then(TheGamesDb._body);
	    }
	  }, {
	    key: '_BASE_URL',
	
	
	    /**
	     *
	     * @returns {string}
	     * @private
	     */
	    get: function get() {
	      return 'http://thegamesdb.net/api/';
	    }
	  }]);
	
	  return TheGamesDb;
	}(_scraper2.default);
	
	exports.default = TheGamesDb;

/***/ },
/* 5 */
/*!***************************!*\
  !*** external "xml2json" ***!
  \***************************/
/***/ function(module, exports) {

	module.exports = require("xml2json");

/***/ },
/* 6 */
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/***/ function(module, exports) {

	module.exports = require("node-fetch");

/***/ },
/* 7 */
/*!*******************************!*\
  !*** external "query-string" ***!
  \*******************************/
/***/ function(module, exports) {

	module.exports = require("query-string");

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map