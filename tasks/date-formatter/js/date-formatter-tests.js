describe("2. date formatter", function() {
    describe("convertToISO", function() {
        it("ISO format of '31102011' = '2011-10-31'", function() {
            assert.equal(dateDisplayFormatter.convertToISO("31102011",null,"string"), "2011-10-31");
        });
    });

    describe("convertToCustomFormat", function() {
        it("'DD-MM-YYYY' format of '31102011' = '31-10-2011'", function() {
            assert.equal(dateDisplayFormatter.convertToCustomFormat("31102011", null,"DD-MM-YYYY", true, "string"), "31-10-2011");
        });

        it("'DD MM YYYY' format of '31102011' with a string representation of the month = '31 October 2011'", function() {
            assert.equal(dateDisplayFormatter.convertToCustomFormat("31102011", null,"DD MM YYYY", false, "string"), "31 October 2011");
        });

        it("'MM-DD-YYYY' format of '20130431'['YYYYMMDD'] = '04-31-2013'", function() {
            assert.equal(dateDisplayFormatter.convertToCustomFormat("20130331", "YYYYMMDD","MM-DD-YYYY", true, "string"), "03-31-2013");
        });
    });

    describe("fromNow", function() {
        it("'2013-04-31' from now = '8 years ago'", function() {
            assert.equal(dateDisplayFormatter.fromNow('2013-03-31', "YYYY-MM-DD", "string"), "8 years ago");
        });

    });
});