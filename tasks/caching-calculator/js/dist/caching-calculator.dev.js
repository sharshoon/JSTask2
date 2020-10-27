"use strict";

var cachingCalculator = {
  maxCacheLength: 10,
  calculate: function calculate(stringExpression) {
    var result = this.cache.get(stringExpression),
        source = "";

    if (result) {
      source = "cache";
      return {
        result: result,
        source: source
      };
    } else {
      if (this.cache.size >= this.maxCacheLength) {
        this.cache["delete"](this.cache.keys().next().value);
      }

      result = stringCalculator.calculate(stringExpression);
      this.cache.set(stringExpression, result);
      source = "calculator";
      return {
        result: result,
        source: source
      };
    }
  },
  addExpressionToCache: function addExpressionToCache(expression) {
    if (!this.cache.has(expression)) {
      var result = stringCalculator.calculate(expression);
      this.cache.set(expression, result);
    }
  }
};
cachingCalculator.cache = new Map();