describe("3. text formatter", function() {
    describe("formatText", function() {
        it("format text with 'none' carryover parameter", function() {
            assert.equal(textFormatter.formatText("Lorem Ipsum is simply dummy text of the. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                undefined, undefined, "none"),
                "Lorem Ipsum is simply dummy text of the. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s");
        });
        it("format text with 'none' carryover parameter and maxLineLength = 10", function() {
            assert.equal(textFormatter.formatText("Lorem Ipsum is simply dummy text of the. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                undefined, 10, "none"),
                "Lorem\nIpsum is\nsimply\ndummy\ntext of\nthe.\nLorem\nIpsum has\nbeen the\nindustry\'s\nstandard\ndummy\ntext ever\nsince the\n1500s");
        });

        it("format text with 'character' carryover", function() {
            assert.equal(textFormatter.formatText("Lorem",
                undefined, undefined, "character"),
                "L\no\nr\ne\nm\n");
        });
        it("format text with 'word' carryover", function() {
            assert.equal(textFormatter.formatText("Lorem ipsum dolor",
                undefined, undefined, "word"),
                "Lorem\nipsum\ndolor\n");
        });
        it("format text with 'sentence' carryover.", function() {
            assert.equal(textFormatter.formatText("Lorem Ipsum. Is simply dummy text of the.",
                undefined, undefined, "sentence"),
                "Lorem Ipsum.\nIs simply dummy text of the.\n");
        });
    });
});