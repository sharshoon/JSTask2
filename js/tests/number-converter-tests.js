describe("5. number converter", function() {
    describe("binaryToDecimal", function() {
        it("'111' in binary = '7' in decimal", function() {
            assert.equal(numberConverter.binaryToDecimal([1,1,1]), "7");
        });

        it("'10111001' in binary = '185' in decimal", function() {
            assert.equal(numberConverter.binaryToDecimal([1,0,0,1,1,1,0,1]), "185");
        });
    });

    describe("decimalToBinary", function() {
        it("'10' in decimal = '7' in binary", function() {
            assert.equal(numberConverter.decimalToBinary( [0,1]), "1010");
        });

        it("'256' in decimal = '185' in binary", function() {
            assert.equal(numberConverter.decimalToBinary([6,5,2]), "100000000");
        });
    });

    describe("cusomToCustom", function() {
        it("'15' in decimal = 'F' in hex", function() {
            assert.equal(numberConverter.customToCustom( [5,1], 10, 16), "F");
        });

        it("'1110101' in binary = '165' in octal", function() {
            assert.equal(numberConverter.customToCustom([1,0,1,0,1,1,1], 2, 8), "165");
        });

        it("'8F' in hex = '12022' in ternary", function() {
            assert.equal(numberConverter.customToCustom(["F", "8"], 16, 3), "12022");
        });
    });
});