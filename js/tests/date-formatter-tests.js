describe("2. date formatter", function() {
    describe("convertToISO", function() {
        it("ISO format of '31102011' = '2011-10-31'", function() {
            assert.equal(dateDisplayFormatter.convertToISO("31102011"), "2011-10-31");
        });
    });

    describe("convertToCustomFormat", function() {
        it("'DD-MM-YYYY' format of '31102011' = '31-10-2011'", function() {
            assert.equal(dateDisplayFormatter.convertToCustomFormat("31102011", null,"DD-MM-YYYY"), "31-10-2011");
        });

        it("'DD MM YYYY' format of '31102011' with a string representation of the month = '31 October 2011'", function() {
            assert.equal(dateDisplayFormatter.convertToCustomFormat("31102011", null,"DD MM YYYY", false), "31 October 2011");
        });

        it("'MM-DD-YYYY' format of '20130431'['YYYYMMDD'] = '04-31-2013'", function() {
            assert.equal(dateDisplayFormatter.convertToCustomFormat("20130431", "YYYYMMDD","MM-DD-YYYY"), "05-01-2013");
        });
    });
});