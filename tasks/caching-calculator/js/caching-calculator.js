const cachingCalculator = {
    maxCacheLength : 10,
    calculate(stringExpression) {
        let result = this.cache.get(stringExpression),
            source = "";

        if(result){
            source = "cache"; 
            return {result, source};
        }
        else{
            if(this.cache.size >= this.maxCacheLength){
                this.cache.delete(this.cache.keys().next().value);
            }
            result = stringCalculator.calculate(stringExpression);
            this.cache.set(stringExpression, result);
            source = "calculator"; 
            return {result, source};
        }
    },
    addExpressionToCache(expression){
        if(!this.cache.has(expression)){
            const result = stringCalculator.calculate(expression);
            this.cache.set(expression, result);
        }
    }
}

cachingCalculator.cache = new Map();