describe("4. string calculator", function() {
    describe("calculate", function() {
        it("2+2*2 = 6", function() {
            assert.equal(stringCalculator.calculate("2+2*2"), "6");
        });

        it("1+1+5*5/5*6/3", function() {
            assert.equal(stringCalculator.calculate("1+1+6/3*5/5"), "4");
        });

        it("1/0", function() {
            assert.equal(stringCalculator.calculate("1/0"), "Infinity");
        });

        it("-2+2", function() {
            assert.equal(stringCalculator.calculate("-2+2"), "0");
        });

        it("2+-5*2", function() {
            assert.equal(stringCalculator.calculate("2+-5*2"), "-8");
        });

        it("-2-2-2-2-2-2-2-2-2-2-2-2-2", function() {
            assert.equal(stringCalculator.calculate("-2-2-2-2-2-2-2-2-2-2-2-2-2"), "-26");
        });
    });
});