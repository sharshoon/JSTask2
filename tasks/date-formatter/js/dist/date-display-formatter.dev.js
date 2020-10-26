"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _wrapRegExp(re, groups) { _wrapRegExp = function _wrapRegExp(re, groups) { return new BabelRegExp(re, undefined, groups); }; var _RegExp = _wrapNativeSuper(RegExp); var _super = RegExp.prototype; var _groups = new WeakMap(); function BabelRegExp(re, flags, groups) { var _this = _RegExp.call(this, re, flags); _groups.set(_this, groups || _groups.get(re)); return _this; } _inherits(BabelRegExp, _RegExp); BabelRegExp.prototype.exec = function (str) { var result = _super.exec.call(this, str); if (result) result.groups = buildGroups(result, this); return result; }; BabelRegExp.prototype[Symbol.replace] = function (str, substitution) { if (typeof substitution === "string") { var groups = _groups.get(this); return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) { return "$" + groups[name]; })); } else if (typeof substitution === "function") { var _this = this; return _super[Symbol.replace].call(this, str, function () { var args = []; args.push.apply(args, arguments); if (_typeof(args[args.length - 1]) !== "object") { args.push(buildGroups(args, _this)); } return substitution.apply(this, args); }); } else { return _super[Symbol.replace].call(this, str, substitution); } }; function buildGroups(result, re) { var g = _groups.get(re); return Object.keys(g).reduce(function (groups, name) { groups[name] = result[g[name]]; return groups; }, Object.create(null)); } return _wrapRegExp.apply(this, arguments); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var dateDisplayFormatter = {
  convertToISO: function convertToISO(stringDate, dateFormat) {
    var date = this.getDate(stringDate, dateFormat);
    var month = date.getMonth() + 1;
    month = month <= 9 ? "0" + month : month;
    return "".concat(date.getFullYear(), "-").concat(month, "-").concat(date.getDate());
  },
  formatToCustomLocale: function formatToCustomLocale(stringDate, dateFormat, locale, options) {
    var date = this.getDate(stringDate, dateFormat);
    return date.toLocaleString(locale, options);
  },
  convertToCustomFormat: function convertToCustomFormat(stringDate, dateFormat, resultFormat) {
    var isNumericMonth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = this.getDate(stringDate, dateFormat);

    if (!(date instanceof Date) || isNaN(date)) {
      throw Error("invalid date");
    }

    var result = resultFormat.replace(/[Y]{4}/, date.getFullYear());
    var month = isNumericMonth ? date.getMonth() < 9 ? "0".concat(date.getMonth() + 1) : (date.getMonth() + 1).toString() : monthNames[date.getMonth()];
    var day = date.getDate() <= 9 ? "0".concat(date.getDate()) : date.getDate().toString();
    result = result.replace(/[M]{2}/, month);
    result = result.replace(/[D]{2}/, day);
    return result;
  },
  fromNow: function fromNow(stringDate, dateFormat) {
    var date = this.getDate(stringDate, dateFormat);
    return this.timespanToHumanString(date, Date.now());
  },
  getDate: function getDate(date, dateFormat) {
    // it is acceptable to write "new Date(2013, 3, 31)" and get 1 May 2013,
    // this does not suit me, here I brush aside these cases
    var dateCheck = function dateCheck(dateObj, year, month, day) {
      if (dateObj && parseInt(month) === dateObj.getMonth() + 1 && parseInt(day) === dateObj.getDate()) {
        return true;
      }

      return false;
    };

    if (typeof date === "number") {
      return new Date(date);
    } else if (typeof date === "string") {
      if (!dateFormat) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.formats.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var reg = _step.value;
            var searchResults = date.match(reg);

            if (searchResults) {
              var dateObj = new Date(searchResults[0].replace(reg, "".concat(parseInt(searchResults.groups.year), "-").concat(parseInt(searchResults.groups.month), "-").concat(searchResults.groups.day)));

              if (dateCheck(dateObj, searchResults.groups.year, searchResults.groups.month, searchResults.groups.day)) {
                return dateObj;
              }
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      } else {
        var year = date.slice(dateFormat.indexOf("Y"), dateFormat.length - dateFormat.split("").reverse().join("").indexOf("Y")),
            month = date.slice(dateFormat.indexOf("M"), dateFormat.length - dateFormat.split("").reverse().join("").indexOf("M")),
            day = date.slice(dateFormat.indexOf("D"), dateFormat.length - dateFormat.split("").reverse().join("").indexOf("D"));

        var _dateObj = new Date("".concat(parseInt(year), "-").concat(parseInt(month), "-").concat(parseInt(day)));

        if (dateCheck(_dateObj, year, month, day)) {
          return _dateObj;
        }
      }
    }

    throw Error("invalid date");
  },
  timespanToHumanString: function timespanToHumanString(startDate, endDate) {
    function roundDate(num) {
      return num % 1 > 0.5 ? Math.round(num) : Math.floor(num);
    }

    var seconds = (endDate - startDate) / 1000;

    switch (true) {
      case seconds <= 45:
        return "a few seconds ago";

      case seconds <= 90:
        return "a minute ago";

      case seconds / 60 <= 45:
        return "".concat(roundDate(seconds / 60), " minutes ago");

      case seconds / 60 <= 90:
        return "an hour ago";

      case seconds / 60 / 60 <= 22:
        return "".concat(roundDate(seconds / 60 / 60), " hours ago");

      case seconds / 60 / 60 <= 36:
        return "a day ago";

      case seconds / 60 / 60 / 24 <= 25:
        return "".concat(roundDate(seconds / 60 / 60 / 24), " days ago");

      case seconds / 60 / 60 / 24 <= 45:
        return "a month ago";

      case seconds / 60 / 60 / 24 <= 345:
        return "".concat(roundDate(seconds / 60 / 60 / 24 / 30), " months ago");

      case seconds / 60 / 60 / 24 <= 545:
        return "a year ago";

      default:
        return "".concat(roundDate(seconds / 60 / 60 / 24 / 30 / 12), " years ago");
    }
  }
};
dateDisplayFormatter.formats = new Map();
dateDisplayFormatter.formats.set("DDMMYYYY", _wrapRegExp(/([0-9]{2})([0-9]{2})([0-9]{4})/, {
  day: 1,
  month: 2,
  year: 3
}));
dateDisplayFormatter.formats.set("DD MM YYYY", _wrapRegExp(/([0-9]{2}) ([0-9]{2}) ([0-9]{4})/, {
  day: 1,
  month: 2,
  year: 3
}));
dateDisplayFormatter.formats.set("DD.MM.YYYY", _wrapRegExp(/([0-9]{2}).([0-9]{2}).([0-9]{4})/, {
  day: 1,
  month: 2,
  year: 3
}));
dateDisplayFormatter.formats.set("YYYY-MM-DD", _wrapRegExp(/([0-9]{4})\x2D([0-9]{2})\x2D([0-9]{2})/, {
  year: 1,
  month: 2,
  day: 3
}));
dateDisplayFormatter.formats.set("MM-DD-YYYY", _wrapRegExp(/([0-9]{2})\x2D([0-9]{2})\x2D([0-9]{4})/, {
  month: 1,
  day: 2,
  year: 3
}));
dateDisplayFormatter.formats.set("MM/DD/YYYY", _wrapRegExp(/([0-9]{2})\/([0-9]{2})\/([0-9]{4})/, {
  month: 1,
  day: 2,
  year: 3
}));