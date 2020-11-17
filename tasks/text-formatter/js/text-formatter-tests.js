describe("3. text formatter", function() {
    describe("formatText", function() {
        it("format text with 'none' carryover parameter and max line length = 10", function() {
            assert.equal(textFormatter.formatText("Lorem Ipsum is simply dummy text of the. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                undefined, 10, "none"),
                "Lorem Ipsu");
        });

        it("format text with 'character' carryover and max line length = 10", function() {
            assert.equal(textFormatter.formatText("Lorem ipsum",
                undefined, 10, "character"),
                "Lorem ipsu\nm\n");
        });
        it("format text with 'word' carryover and max line length = 10", function() {
            assert.equal(textFormatter.formatText("Lorem ipsum dolor",
                undefined, 10, "word"),
                "Lorem     \nipsum     \ndolor     ");
        });
        it("format text with 'sentence' carryover.", function() {
            assert.equal(textFormatter.formatText("Lorem Ipsum. Is simply dummy text of the.",
                undefined, undefined, "sentence"),
                "Lorem Ipsum.\nIs simply dummy text of the.\n");
        });
    });
});