(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("babel-polyfill"), require("xml2js"), require("node-fetch"), require("query-string"));
	else if(typeof define === 'function' && define.amd)
		define("rom-scraper", ["babel-polyfill", "xml2js", "node-fetch", "query-string"], factory);
	else if(typeof exports === 'object')
		exports["rom-scraper"] = factory(require("babel-polyfill"), require("xml2js"), require("node-fetch"), require("query-string"));
	else
		root["rom-scraper"] = factory(root["babel-polyfill"], root["xml2js"], root["node-fetch"], root["query-string"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__) {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(4);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("babel-polyfill");

/***/ },
/* 2 */,
/* 3 */
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
	    key: 'search',
	
	
	    /**
	     *
	     * @param name
	     * @param platform
	     */
	    value: function search(_ref) {
	      var name = _ref.name;
	      var platform = _ref.platform;
	
	      throw new Error('Method "search" has not been implemented.');
	    }
	
	    /**
	     * @param name
	     * @param platform
	     */
	
	  }, {
	    key: 'getGame',
	    value: function getGame(_ref2) {
	      var name = _ref2.name;
	      var platform = _ref2.platform;
	
	      throw Scraper.notImplementedError('getGame');
	    }
	
	    /**
	     *
	     * @param methodName
	     * @returns {Error}
	     */
	
	  }, {
	    key: 'notImplementedError',
	    value: function notImplementedError(methodName) {
	      var error = 'Method "' + methodName + '" has not been implemented. ';
	      var advice = 'Please override it in your class.';
	      return new Error(error + advice);
	    }
	  }, {
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
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TheGamesDb = undefined;
	
	var _thegamesdb = __webpack_require__(5);
	
	var _thegamesdb2 = _interopRequireDefault(_thegamesdb);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.TheGamesDb = _thegamesdb2.default; /**
	                                            *  todo expose classes etc for AMD, CommonJs etc. here
	                                            */

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _xml2js = __webpack_require__(6);
	
	var _xml2js2 = _interopRequireDefault(_xml2js);
	
	var _nodeFetch = __webpack_require__(7);
	
	var _nodeFetch2 = _interopRequireDefault(_nodeFetch);
	
	var _queryString = __webpack_require__(8);
	
	var _queryString2 = _interopRequireDefault(_queryString);
	
	var _scraper = __webpack_require__(3);
	
	var _scraper2 = _interopRequireDefault(_scraper);
	
	var _rom2 = __webpack_require__(9);
	
	var _rom3 = _interopRequireDefault(_rom2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var parser = new _xml2js2.default.Parser({ explicitArray: false });
	
	var TheGamesDb = function (_Scraper) {
	  _inherits(TheGamesDb, _Scraper);
	
	  function TheGamesDb() {
	    _classCallCheck(this, TheGamesDb);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(TheGamesDb).apply(this, arguments));
	  }
	
	  _createClass(TheGamesDb, null, [{
	    key: '_rom',
	
	
	    /**
	     *
	     * @param requestBody
	     * @returns {Rom}
	     * @private
	     */
	    value: function _rom(requestBody) {
	      return new _rom3.default({
	        title: requestBody.GameTitle,
	        alternateTitles: [requestBody.AlternateTitles.title],
	        releaseDate: new Date(requestBody.ReleaseDate),
	        description: requestBody.Overview,
	        genres: requestBody.Genres.genre,
	        players: parseInt(requestBody.Players, 10),
	        coop: requestBody['Co-op'] === "Yes",
	        publisher: requestBody.Publisher,
	        developer: requestBody.Developer,
	        foreignIds: { theGamesDb: requestBody.id },
	        videos: [{ url: requestBody.Youtube }],
	        images: TheGamesDb._romInfoImages(requestBody)
	      });
	    }
	
	    /**
	     *
	     * @param Images
	     * @returns {{boxart: Array, banner: Array, logo: Array, fanart: Array, screenshot: Array}}
	     * @private
	     */
	
	  }, {
	    key: '_romInfoImages',
	    value: function _romInfoImages(_ref) {
	      var Images = _ref.Images;
	
	      return {
	        boxart: TheGamesDb._romInfoBoxArt(Images),
	        banner: TheGamesDb._romInfoImage(Images.banner),
	        logo: TheGamesDb._romInfoImage(Images.clearlogo),
	        fanart: TheGamesDb._romInfoImageOrig(Images.fanart),
	        screenshot: TheGamesDb._romInfoImageOrig(Images.screenshot)
	      };
	    }
	
	    /**
	     *
	     * @param images
	     * @returns {Array}
	     * @private
	     */
	
	  }, {
	    key: '_romInfoImage',
	    value: function _romInfoImage(images) {
	      var _images = Array.isArray(images) ? images : [images];
	      return _images.map(function (_ref2) {
	        var _ref2$$ = _ref2.$;
	        var width = _ref2$$.width;
	        var height = _ref2$$.height;
	        var _ = _ref2._;
	        return {
	          width: parseInt(width, 10),
	          height: parseInt(height, 10),
	          url: TheGamesDb._romInfoImageUrl(_)
	        };
	      });
	    }
	
	    /**
	     *
	     * @param images
	     * @returns {Array}
	     * @private
	     */
	
	  }, {
	    key: '_romInfoImageOrig',
	    value: function _romInfoImageOrig(images) {
	      var _images = Array.isArray(images) ? images : [images];
	      return _images.map(function (_ref3) {
	        var _ref3$original = _ref3.original;
	        var _ref3$original$$ = _ref3$original.$;
	        var width = _ref3$original$$.width;
	        var height = _ref3$original$$.height;
	        var _ = _ref3$original._;
	        return {
	          width: parseInt(width, 10),
	          height: parseInt(height, 10),
	          url: TheGamesDb._romInfoImageUrl(_)
	        };
	      });
	    }
	
	    /**
	     *
	     * @param boxart
	     * @returns {Array}
	     * @private
	     */
	
	  }, {
	    key: '_romInfoBoxArt',
	    value: function _romInfoBoxArt(_ref4) {
	      var boxart = _ref4.boxart;
	
	      var _boxart = Array.isArray(boxart) ? boxart : [boxart];
	      return _boxart.map(function (_ref5) {
	        var _ref5$$ = _ref5.$;
	        var width = _ref5$$.width;
	        var height = _ref5$$.height;
	        var _ = _ref5._;
	        var side = _ref5.side;
	        return {
	          width: parseInt(width, 10),
	          height: parseInt(height, 10),
	          side: side,
	          url: TheGamesDb._romInfoImageUrl(_)
	        };
	      });
	    }
	
	    /**
	     *
	     * @param path
	     * @returns {string}
	     * @private
	     */
	
	  }, {
	    key: '_romInfoImageUrl',
	    value: function _romInfoImageUrl(path) {
	      return '' + TheGamesDb._ART_BASE_URL + path;
	    }
	
	    /**
	     *
	     * @returns {string}
	     * @private
	     */
	
	  }, {
	    key: '_platform',
	
	
	    /**
	     *
	     * @param {string} platform
	     * @return {string}
	     * @private
	     */
	    value: function _platform(platform) {
	      var map = _defineProperty({}, _scraper2.default.PLATFORMS.SNES, 'Super Nintendo (SNES)');
	      return map[platform] || platform;
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
	      // console.info('fetching', url);
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
	      return res.text()
	      // .then(xml => ltx.parse(xml))
	      // .then(xml => xml2json.toJson(xml))
	      // .then(jsonString => JSON.parse(jsonString))
	      .then(TheGamesDb._parseBody).then(function (json) {
	        return json.Data.Game;
	      });
	    }
	
	    /**
	     *
	     * @param {string} xml
	     * @returns {Promise}
	     * @private
	     */
	
	  }, {
	    key: '_parseBody',
	    value: function _parseBody(xml) {
	      return new Promise(function (resolve, reject) {
	        return parser.parseString(xml, function (err, res) {
	          err ? reject(err) : resolve(res);
	        });
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
	    value: function search(_ref6) {
	      var name = _ref6.name;
	      var platform = _ref6.platform;
	
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
	    value: function getGame(_ref7) {
	      var name = _ref7.name;
	      var platform = _ref7.platform;
	
	      return TheGamesDb.search({ name: name, platform: platform }).then(function (games) {
	        return TheGamesDb._api('GetGame', { id: games[0].id });
	      }).then(TheGamesDb._body).then(TheGamesDb._rom).then(function (rom) {
	        return rom.getData();
	      });
	    }
	  }, {
	    key: '_BASE_URL',
	    get: function get() {
	      return 'http://thegamesdb.net/api/';
	    }
	
	    /**
	     *
	     * @returns {string}
	     * @private
	     */
	
	  }, {
	    key: '_ART_BASE_URL',
	    get: function get() {
	      return 'http://thegamesdb.net/banners/';
	    }
	  }]);
	
	  return TheGamesDb;
	}(_scraper2.default);
	
	exports.default = TheGamesDb;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("xml2js");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("node-fetch");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("query-string");

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Rom = function () {
	
	  /**
	   *
	   * @param {{title: string, alternateTitles: string[], releaseDate: Date, description: string, genres: string[], players: number, coop: boolean, Publisher: string, Developer: string, foreignIds: object, videos: array, images: array}} data
	   */
	
	  function Rom(data) {
	    _classCallCheck(this, Rom);
	
	    this._data = {};
	    this.addData(data);
	  }
	
	  /**
	   * todo schema validator
	   * todo deep merge
	   * @param {{title: string, alternateTitles: string[], releaseDate: Date, description: string, genres: string[], players: number, coop: boolean, Publisher: string, Developer: string, foreignIds: object, videos: array, images: array}} data
	   */
	
	
	  _createClass(Rom, [{
	    key: "addData",
	    value: function addData(data) {
	      Object.assign(this._data, Rom._clean(data));
	    }
	
	    /**
	     *
	     * @returns {{title: string, alternateTitles: string[], releaseDate: Date, description: string, genres: string[], players: number, coop: boolean, Publisher: string, Developer: string, foreignIds: object, videos: array, images: array}}
	     */
	
	  }, {
	    key: "getData",
	    value: function getData() {
	      return this._data;
	    }
	
	    /**
	     *
	     * @param data
	     * @returns {{title: string, alternateTitles: string[], releaseDate: Date, description: string, genres: string[], players: number, coop: boolean, Publisher: string, Developer: string, foreignIds: object, videos: array, images: array}}
	     * @private
	     */
	
	  }], [{
	    key: "_clean",
	    value: function _clean(data) {
	      return {
	        title: data.title,
	        alternateTitles: data.alternateTitles,
	        releaseDate: data.releaseDate,
	        description: data.description,
	        genres: data.genres,
	        players: data.players,
	        coop: data.coop,
	        publisher: data.publisher,
	        developer: data.developer,
	        foreignIds: data.foreignIds,
	        videos: data.videos,
	        images: data.images
	      };
	    }
	  }]);
	
	  return Rom;
	}();
	
	exports.default = Rom;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.js.map