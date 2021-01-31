class InvalidDateRegexError extends Error{
    constructor(message, regex) {
        super(message);
        this.regex = regex;
    }
}