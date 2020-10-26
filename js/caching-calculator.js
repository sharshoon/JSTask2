const cachingCalculator = {
    MAX_CACHE_LENGTH : 10,
    calculate(a,b, operation) {
        const stringExpression = a.toString()+operation+b.toString();
        let result = this.cache.get(stringExpression);

        if(result){
            return result;
        }
        else{
            if(this.cache.size >= this.MAX_CACHE_LENGTH){
                this.cache.delete(this.cache.keys().next().value);
            }
            result =  stringCalculator.calculate(stringExpression);
            this.cache.set(stringExpression, result);
            return result;

        }

    }
}

cachingCalculator.cache = new Map();