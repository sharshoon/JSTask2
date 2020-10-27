// Proxy pattern over string calculator
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
            this.checkCacheLoad();
            result = stringCalculator.calculate(stringExpression);
            this.cache.set(stringExpression, result);
            source = "calculator"; 
            return {result, source};
        }
    },
    addExpressionToCache(expression){
        if(!this.cache.has(expression)){
            this.checkCacheLoad();

            const result = stringCalculator.calculate(expression);
            this.cache.set(expression, result);
        }
    },

    checkCacheLoad(){
        if(this.cache.size > this.maxCacheLength - 1){
            while(this.cache.size !== (this.maxCacheLength - 1)){
                this.cache.delete(this.cache.keys().next().value);
            }
        }
    }
}

cachingCalculator.cache = new Map();